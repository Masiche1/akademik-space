import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";
import { BRAND } from "@/lib/brand.ts";
import { MASTERY_LABEL, type MasteryLevel } from "@/lib/mastery.ts";
import { SET_KIND_LABEL } from "@/lib/sets.ts";
import { TERM_KIND_LABEL, buildTermSummary, parseDay, type CourseSummary, type TermStudentData, type TermSummary } from "./term-report.ts";

type RGB = [number, number, number];
// Print-safe versions of the app's theme colours.
const NAVY: RGB = [33, 46, 107];
const AMBER: RGB = [214, 116, 38];
const INK: RGB = [36, 40, 60];
const MUTED: RGB = [110, 114, 135];
const LINE: RGB = [226, 220, 205];
const CREAM: RGB = [248, 244, 234];
const LEVEL_COLOR: Record<MasteryLevel, RGB> = {
  secure: [38, 140, 104],
  developing: [214, 116, 38],
  learning: [200, 54, 46],
  "not-started": [160, 162, 175],
};

const PAGE_W = 210;
const PAGE_H = 297;
const M = 16;
const CONTENT_W = PAGE_W - M * 2;
const BOTTOM = PAGE_H - 22;

/** Drops characters the built-in PDF fonts cannot draw, so names never print as garbage. */
const safe = (s: string) => s.normalize("NFC").replace(/[^\u0020-\u00FF\n]/g, "");

class ReportWriter {
  y = 0;
  constructor(readonly doc: jsPDF) {}

  ensure(height: number) {
    if (this.y + height > BOTTOM) {
      this.doc.addPage();
      this.y = M + 4;
    }
  }

  text(s: string, x: number, size: number, opts: { color?: RGB; bold?: boolean; serif?: boolean; align?: "left" | "right" | "center" } = {}) {
    const { doc } = this;
    doc.setFont(opts.serif ? "times" : "helvetica", opts.bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...(opts.color ?? INK));
    doc.text(safe(s), x, this.y, { align: opts.align ?? "left" });
  }

  heading(s: string) {
    // Leave room for the first rows too, so a heading never sits alone at the foot of a page.
    this.ensure(40);
    this.y += 4;
    this.text(s, M, 14, { serif: true, bold: true, color: NAVY });
    this.y += 2.5;
    this.doc.setDrawColor(...AMBER);
    this.doc.setLineWidth(0.6);
    this.doc.line(M, this.y, M + 14, this.y);
    this.y += 6;
  }

  /** Wrapped paragraph; returns nothing, advances y. */
  paragraph(s: string, size = 10, color: RGB = INK, width = CONTENT_W, x = M) {
    const { doc } = this;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines: string[] = doc.splitTextToSize(safe(s), width);
    const lh = size * 0.45;
    for (const line of lines) {
      this.ensure(lh + 1);
      doc.text(line, x, this.y);
      this.y += lh;
    }
  }

  bar(x: number, y: number, w: number, percent: number, color: RGB) {
    const { doc } = this;
    doc.setFillColor(...LINE);
    doc.roundedRect(x, y, w, 2.6, 1.3, 1.3, "F");
    if (percent > 0) {
      doc.setFillColor(...color);
      doc.roundedRect(x, y, Math.max(2.6, (w * Math.min(percent, 100)) / 100), 2.6, 1.3, 1.3, "F");
    }
  }

  table(options: Parameters<typeof autoTable>[1]) {
    autoTable(this.doc, {
      startY: this.y,
      margin: { left: M, right: M, bottom: PAGE_H - BOTTOM },
      theme: "plain",
      styles: { font: "helvetica", fontSize: 9, textColor: INK, cellPadding: { top: 2.2, bottom: 2.2, left: 2.5, right: 2.5 }, lineColor: LINE },
      headStyles: { fillColor: CREAM, textColor: MUTED, fontStyle: "bold", fontSize: 8 },
      bodyStyles: { lineWidth: { bottom: 0.2 } },
      ...options,
      didDrawPage: (d) => {
        this.y = (d.cursor?.y ?? this.y) + 6;
      },
    });
  }
}

function drawHeader(w: ReportWriter, data: TermStudentData) {
  const { doc } = w;
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, PAGE_W, 44, "F");
  doc.setFillColor(...AMBER);
  doc.rect(0, 44, PAGE_W, 1.4, "F");

  w.y = 15;
  w.text(BRAND.name.toUpperCase(), M, 10, { bold: true, color: [246, 196, 140] });
  w.text(TERM_KIND_LABEL[data.kind].toUpperCase(), PAGE_W - M, 8, { bold: true, color: [246, 196, 140], align: "right" });
  w.y = 27;
  w.text(data.studentName, M, 22, { serif: true, bold: true, color: [255, 255, 255] });
  w.text(data.title, PAGE_W - M, 11, { color: [255, 255, 255], align: "right" });
  w.y = 36;
  w.text(`${data.className}  |  ${data.orgName}`, M, 9.5, { color: [205, 210, 235] });
  const dates = `${format(parseDay(data.startDate), "d MMM yyyy")} - ${format(parseDay(data.endDate), "d MMM yyyy")}`;
  w.text(dates, PAGE_W - M, 9.5, { color: [205, 210, 235], align: "right" });
  w.y = 56;
}

function drawTiles(w: ReportWriter, summary: TermSummary) {
  const secure = summary.courses.reduce((n, c) => n + c.conceptsSecure, 0);
  const concepts = summary.courses.reduce((n, c) => n + c.conceptCount, 0);
  const practised = summary.courses.reduce((n, c) => n + c.practisedInTerm, 0);
  const tiles = [
    { label: "Concepts secure", value: concepts > 0 ? `${secure}/${concepts}` : "-" },
    { label: "Assignment and exam average", value: summary.setAverage === null ? "-" : `${summary.setAverage}%` },
    { label: "Sets completed this term", value: `${summary.setsDone}/${summary.sets.length}` },
    { label: "Questions practised this term", value: String(practised) },
  ];
  const gap = 4;
  const tw = (CONTENT_W - gap * 3) / 4;
  const { doc } = w;
  tiles.forEach((t, i) => {
    const x = M + i * (tw + gap);
    doc.setFillColor(...CREAM);
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.2);
    doc.roundedRect(x, w.y, tw, 21, 2.5, 2.5, "FD");
    const top = w.y;
    w.y = top + 10;
    w.text(t.value, x + 4, 15, { serif: true, bold: true, color: NAVY });
    w.y = top + 16.5;
    w.text(t.label, x + 4, 7, { color: MUTED });
    w.y = top;
  });
  w.y += 29;
}

function drawCourse(w: ReportWriter, c: CourseSummary) {
  w.heading(c.title);
  w.ensure(14);
  w.text(`${c.percent}% of course marks`, M, 10, { bold: true });
  w.text(MASTERY_LABEL[c.level], PAGE_W - M, 10, { bold: true, color: LEVEL_COLOR[c.level], align: "right" });
  w.y += 3;
  w.bar(M, w.y, CONTENT_W, c.percent, LEVEL_COLOR[c.level]);
  w.y += 8;

  w.table({
    head: [["Unit", "Progress", "Score", "Level"]],
    body: c.units.map((u) => [safe(`${u.code}  ${u.title}`), "", `${u.percent}%`, MASTERY_LABEL[u.level]]),
    columnStyles: { 0: { cellWidth: 92 }, 1: { cellWidth: 44 }, 2: { halign: "right", cellWidth: 16 }, 3: { halign: "right", fontStyle: "bold" } },
    didParseCell: (d) => {
      if (d.section === "body" && d.column.index === 3) d.cell.styles.textColor = LEVEL_COLOR[c.units[d.row.index].level];
    },
    didDrawCell: (d) => {
      if (d.section !== "body" || d.column.index !== 1) return;
      const u = c.units[d.row.index];
      w.bar(d.cell.x + 2.5, d.cell.y + d.cell.height / 2 - 1.3, d.cell.width - 5, u.percent, LEVEL_COLOR[u.level]);
    },
  });

  const col = (CONTENT_W - 6) / 2;
  const lists = [
    { title: "Strengths", items: c.strengths, empty: "Secure concepts will appear here as practice builds up.", color: LEVEL_COLOR.secure },
    { title: "Next steps", items: c.nextSteps, empty: "No gaps found in the concepts practised so far.", color: AMBER },
  ];
  const rows = Math.max(1, ...lists.map((l) => l.items.length));
  w.ensure(12 + rows * 5.5);
  const top = w.y;
  lists.forEach((l, i) => {
    const x = M + i * (col + 6);
    w.y = top;
    w.text(l.title.toUpperCase(), x, 7.5, { bold: true, color: l.color });
    w.y += 5.5;
    if (l.items.length === 0) w.paragraph(l.empty, 9, MUTED, col, x);
    for (const item of l.items) {
      w.doc.setFillColor(...l.color);
      w.doc.circle(x + 1, w.y - 1.2, 0.8, "F");
      w.doc.setFont("helvetica", "normal");
      w.doc.setFontSize(9);
      const lines: string[] = w.doc.splitTextToSize(safe(item), col - 5);
      w.text(lines.length > 1 ? `${lines[0].replace(/\s+\S*$/, "")}...` : item, x + 4, 9);
      w.y += 5.5;
    }
  });
  w.y = top + 7 + rows * 5.5 + 2;
}

function drawSets(w: ReportWriter, summary: TermSummary) {
  w.heading("Assignments and exams");
  if (summary.sets.length === 0) {
    w.paragraph("No assignments or exams were set for this class during the term.", 10, MUTED);
    w.y += 4;
    return;
  }
  w.table({
    head: [["Set", "Type", "Set on", "Result"]],
    body: summary.sets.map((s) => [safe(s.title), SET_KIND_LABEL[s.kind], format(new Date(s.date), "d MMM yyyy"), s.result]),
    columnStyles: { 0: { cellWidth: 82 }, 3: { halign: "right", fontStyle: "bold" } },
    didParseCell: (d) => {
      if (d.section === "body" && d.column.index === 3 && summary.sets[d.row.index].percent === null) {
        d.cell.styles.textColor = MUTED;
        d.cell.styles.fontStyle = "normal";
      }
    },
  });
}

function drawComment(w: ReportWriter, data: TermStudentData) {
  w.heading("Teacher's comment");
  const { doc } = w;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  const text = data.comment || "No comment has been added.";
  const lines: string[] = doc.splitTextToSize(safe(text), CONTENT_W - 12);
  const height = Math.max(22, lines.length * 4.9 + 12);
  if (height < BOTTOM - M) w.ensure(height + 26);
  const top = w.y;
  doc.setFillColor(...CREAM);
  doc.rect(M, top, CONTENT_W, height, "F");
  doc.setFillColor(...AMBER);
  doc.rect(M, top, 1.2, height, "F");
  w.y = top + 8;
  w.paragraph(text, 10.5, data.comment ? INK : MUTED, CONTENT_W - 12, M + 6);
  w.y = Math.max(w.y, top + height) + 14;

  w.ensure(14);
  const half = (CONTENT_W - 12) / 2;
  doc.setDrawColor(...MUTED);
  doc.setLineWidth(0.2);
  doc.line(M, w.y, M + half, w.y);
  doc.line(M + half + 12, w.y, PAGE_W - M, w.y);
  w.y += 4.5;
  w.text(data.teacherName ? `${data.teacherName}, class teacher` : "Class teacher", M, 8, { color: MUTED });
  w.text("Parent or guardian", M + half + 12, 8, { color: MUTED });
  w.y += 6;
}

function drawFooters(doc: jsPDF, ranges: { from: number; to: number; name: string }[]) {
  const generated = format(new Date(), "d MMM yyyy");
  for (const r of ranges) {
    for (let p = r.from; p <= r.to; p++) {
      doc.setPage(p);
      doc.setDrawColor(...LINE);
      doc.setLineWidth(0.2);
      doc.line(M, PAGE_H - 14, PAGE_W - M, PAGE_H - 14);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(...MUTED);
      doc.text(safe(`${BRAND.name}  |  ${BRAND.slogan}  |  Generated ${generated}`), M, PAGE_H - 9);
      doc.text(safe(`${r.name}  |  Page ${p - r.from + 1} of ${r.to - r.from + 1}`), PAGE_W - M, PAGE_H - 9, { align: "right" });
    }
  }
}

/** One student's report, starting on a fresh page. */
function drawStudent(doc: jsPDF, data: TermStudentData) {
  const w = new ReportWriter(doc);
  const summary = buildTermSummary(data);
  drawHeader(w, data);
  drawTiles(w, summary);
  if (summary.courses.length === 0) {
    w.heading("Course progress");
    w.paragraph("No courses are set for this class yet.", 10, MUTED);
  }
  for (const c of summary.courses) drawCourse(w, c);
  drawSets(w, summary);
  drawComment(w, data);
}

/** Builds a PDF with one report per student, each with its own page numbering. */
export function buildTermPdf(students: TermStudentData[]): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  doc.setProperties({ title: students.length === 1 ? `${students[0].studentName} - ${students[0].title}` : students[0]?.title ?? "Term reports", creator: BRAND.name });
  const ranges: { from: number; to: number; name: string }[] = [];
  students.forEach((s, i) => {
    if (i > 0) doc.addPage();
    const from = doc.getNumberOfPages();
    drawStudent(doc, s);
    ranges.push({ from, to: doc.getNumberOfPages(), name: s.studentName });
  });
  drawFooters(doc, ranges);
  return doc;
}
