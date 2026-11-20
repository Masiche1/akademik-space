import katex from "katex";
import { Fragment, useMemo, type ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

type Token =
  | { kind: "text"; value: string }
  | { kind: "inline"; value: string }
  | { kind: "display"; value: string };

/** Matches $$display$$ or $inline$ math. An escaped \$ inside math is a literal dollar sign. */
export const MATH_PATTERN = /\$\$([\s\S]+?)\$\$|(?<!\\)\$((?:\\\$|[^$])+?)\$/g;

/** Split text into plain text, $inline$ and $$display$$ math tokens. */
function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  const pattern = new RegExp(MATH_PATTERN);
  let last = 0;
  const pushText = (value: string) => tokens.push({ kind: "text", value: value.replace(/\\\$/g, "$") });
  for (const match of source.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) pushText(source.slice(last, index));
    if (match[1] !== undefined) tokens.push({ kind: "display", value: match[1] });
    else tokens.push({ kind: "inline", value: match[2] ?? "" });
    last = index + match[0].length;
  }
  if (last < source.length) pushText(source.slice(last));
  return tokens;
}

function renderKatex(tex: string, displayMode: boolean): string {
  return katex.renderToString(tex, { displayMode, throwOnError: false, strict: "ignore" });
}

/** Render **bold** inside plain text. */
function renderBold(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={`${keyPrefix}-${i}`}>{part}</Fragment>
    ),
  );
}

function renderInline(source: string, keyPrefix: string): ReactNode[] {
  return tokenize(source).map((token, i) => {
    const key = `${keyPrefix}-${i}`;
    if (token.kind === "text") return <Fragment key={key}>{renderBold(token.value, key)}</Fragment>;
    return (
      <span
        key={key}
        className={token.kind === "display" ? "block overflow-x-auto py-2" : undefined}
        dangerouslySetInnerHTML={{ __html: renderKatex(token.value, token.kind === "display") }}
      />
    );
  });
}

/** Split a markdown table row "| a | b |" into trimmed cells. */
function tableCells(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

const TABLE_DIVIDER = /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?$/;

/** Renders a markdown table block: header row, divider row, then body rows. */
function MathTable({ lines, keyPrefix }: { lines: string[]; keyPrefix: string }) {
  const [header, ...rest] = lines;
  const body = rest.filter((l) => !TABLE_DIVIDER.test(l.trim()));
  return (
    <div className="overflow-x-auto">
      <table className="w-auto border-collapse text-sm">
        <thead>
          <tr>
            {tableCells(header ?? "").map((cell, ci) => (
              <th key={ci} className="border border-border bg-muted px-3 py-1.5 text-left font-semibold">
                {renderInline(cell, `${keyPrefix}-h${ci}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri}>
              {tableCells(row).map((cell, ci) => (
                <td key={ci} className="border border-border px-3 py-1.5">
                  {renderInline(cell, `${keyPrefix}-${ri}-${ci}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type MathTextProps = { text: string; className?: string };

/**
 * Renders academic text: paragraphs (blank line), bullet lists ("- "), **bold**,
 * inline math $...$ and display math $$...$$.
 */
export default function MathText({ text, className }: MathTextProps) {
  const blocks = useMemo(() => text.split(/\n\s*\n/), [text]);
  return (
    <div className={cn("space-y-3 leading-relaxed", className)}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n").filter((l) => l.trim() !== "");
        if (lines.length === 0) return null;
        // A run of "|" lines with a divider row is a markdown table.
        const isTable =
          lines.length >= 2 &&
          lines.every((l) => l.trim().startsWith("|")) &&
          TABLE_DIVIDER.test(lines[1]?.trim() ?? "");
        if (isTable) return <MathTable key={bi} lines={lines} keyPrefix={`${bi}`} />;
        const isList = lines.every((l) => l.trim().startsWith("- "));
        if (isList) {
          return (
            <ul key={bi} className="list-disc space-y-1 pl-5 marker:text-primary">
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.trim().slice(2), `${bi}-${li}`)}</li>
              ))}
            </ul>
          );
        }
        return <p key={bi}>{renderInline(lines.join(" "), `${bi}`)}</p>;
      })}
    </div>
  );
}

/** Raw LaTeX rendered in display mode (used for markscheme working lines). */
export function DisplayMath({ tex, className }: { tex: string; className?: string }) {
  const html = useMemo(() => renderKatex(tex, true), [tex]);
  return <div className={cn("overflow-x-auto", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
