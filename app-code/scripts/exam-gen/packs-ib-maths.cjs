// IB Diploma Mathematics exam-style packs.
// Questions are deterministic, computed where possible, and tagged with IB paper rules.
const { mcq, numeric, openQ, randInt, pick, shuffle } = require("./lib.cjs");

const D = ["foundation", "core", "challenge"];
const fmt = (n) => {
  if (!Number.isFinite(n)) return "0";
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return String(parseFloat(n.toPrecision(4)));
};
const tex = (n) => `$${fmt(n)}$`;
const col = (v) => `\\begin{pmatrix} ${v.join(" \\\\ ")} \\end{pmatrix}`;
const step = (part, reasoning, working, marks, markCode = "M") => ({
  ...(part ? { part } : {}),
  reasoning,
  ...(working ? { working } : {}),
  marks,
  markCode,
});

function calcQ(ctx, { stem, parts, principles, finalAnswer, commonErrors, difficulty, unordered, examinerNote, paper }) {
  const structured = parts.length > 1 || !!parts[0]?.label;
  const responseParts = parts.map((p) => ({
    label: structured ? `(${p.label})${p.responseLabel ? ` ${p.responseLabel}` : ""}` : "Answer",
    answer: p.answer,
    tolerance: p.tolerance ?? 0.001,
    ...(p.unit ? { unit: p.unit } : {}),
  }));
  const steps = [];
  for (const p of parts) {
    const m = p.marks ?? 1;
    if (m === 1) {
      steps.push(step(p.label || undefined, p.answerNote ?? p.method ?? "Obtain the correct value.", p.ansWorking ?? p.working ?? fmt(p.answer), 1, p.markCode ?? "A"));
    } else {
      steps.push(step(p.label || undefined, p.method ?? "Apply the correct method.", p.working, m - 1, "M"));
      steps.push(step(p.label || undefined, p.answerNote ?? "Obtain the correct value.", p.ansWorking ?? fmt(p.answer), 1, "A"));
    }
  }
  return numeric({
    id: "x",
    difficulty: difficulty ?? pick(ctx.rng, D),
    paper: paper ?? "2",
    stem,
    parts: responseParts,
    ...(structured ? { examParts: parts.map((p) => ({ label: p.label, prompt: p.prompt ?? "", marks: p.marks ?? 1 })) } : {}),
    steps,
    principles,
    finalAnswer,
    commonErrors,
    unordered,
    examinerNote,
  });
}

function single(ctx, cfg) {
  return calcQ(ctx, {
    ...cfg,
    parts: [{ label: "", prompt: "", marks: cfg.marks ?? 3, answer: cfg.answer, tolerance: cfg.tolerance, unit: cfg.unit, method: cfg.method, working: cfg.working, ansWorking: cfg.ansWorking, answerNote: cfg.answerNote, markCode: cfg.markCode }],
  });
}

function mcqQ(ctx, { stem, choices, correct, principle, reasoning, working, finalAnswer, commonErrors, difficulty, paper = "1" }) {
  const ch = shuffle(ctx.rng, choices);
  return mcq({
    id: "x",
    difficulty: difficulty ?? "foundation",
    paper,
    totalMarks: 1,
    stem,
    choices: ch,
    correct: ch.indexOf(correct),
    principle,
    reasoning,
    working,
    finalAnswer,
    commonErrors,
  });
}

function open(ctx, { stem, parts, steps, principles, finalAnswer, commonErrors, difficulty = "challenge", paper = "2", examinerNote }) {
  return openQ({ id: "x", difficulty, paper, stem, parts, steps, principles, finalAnswer, commonErrors, examinerNote });
}
const os = (part, reasoning, working, marks, markCode = "M") => step(part, reasoning, working, marks, markCode);

// ---------------------------------------------------------------------------
// Core families shared by AA and AI
// ---------------------------------------------------------------------------
function arithmeticSequence(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    const u1 = randInt(r, 3, 15), d = randInt(r, 2, 7), n = randInt(r, 12, 25);
    const un = u1 + (n - 1) * d;
    const sn = (n / 2) * (2 * u1 + (n - 1) * d);
    return calcQ(ctx, {
      stem: `An arithmetic sequence has first term $u_1=${u1}$ and common difference $d=${d}$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: `Find $u_{${n}}$.`, marks: 2, answer: un, method: `Use $u_n=u_1+(n-1)d$.`, working: `u_{${n}}=${u1}+(${n}-1)(${d})`, ansWorking: `${un}` },
        { label: "b", prompt: `Find $S_{${n}}$, the sum of the first ${n} terms.`, marks: 3, answer: sn, method: `Use $S_n=\\frac{n}{2}(2u_1+(n-1)d)$.`, working: `S_{${n}}=\\frac{${n}}{2}(2(${u1})+(${n}-1)(${d}))`, ansWorking: `${sn}` },
      ],
      principles: [
        { kind: "formula", name: "Arithmetic sequence", statement: "$u_n=u_1+(n-1)d$ and $S_n=\\frac n2(2u_1+(n-1)d)$." },
      ],
      finalAnswer: `(a) $u_{${n}}=${un}$ (b) $S_{${n}}=${sn}$`,
      commonErrors: ["Using $n$ rather than $n-1$ in the nth term formula."],
      examinerNote: "Follow-through is available in part (b) from an incorrect $u_n$ only if the sum formula is applied consistently.",
    });
  }
  const d = randInt(r, 2, 6), u1 = randInt(r, 4, 14);
  const u3 = u1 + 2 * d, u8 = u1 + 7 * d, s10 = 5 * (2 * u1 + 9 * d);
  return calcQ(ctx, {
    stem: `In an arithmetic sequence, $u_3=${u3}$ and $u_8=${u8}$.`,
    paper: "1",
    parts: [
      { label: "a", prompt: "Find the common difference $d$.", marks: 2, answer: d, method: "Subtract the two term formulae: $u_8-u_3=5d$.", working: `5d=${u8}-${u3}`, ansWorking: `${d}` },
      { label: "b", prompt: "Find the first term $u_1$.", marks: 2, answer: u1, method: "Substitute $d$ into $u_3=u_1+2d$.", working: `u_1=${u3}-2(${d})`, ansWorking: `${u1}` },
      { label: "c", prompt: "Find $S_{10}$.", marks: 3, answer: s10, method: "Use $S_{10}=\\frac{10}{2}(2u_1+9d)$.", working: `S_{10}=5(2(${u1})+9(${d}))`, ansWorking: `${s10}` },
    ],
    principles: [{ kind: "formula", name: "Arithmetic sequence", statement: "$u_n=u_1+(n-1)d$; eliminate $u_1$ by subtracting two equations." }],
    finalAnswer: `(a) $d=${d}$ (b) $u_1=${u1}$ (c) $S_{10}=${s10}$`,
    examinerNote: "FT from (a) into (b) and (c).",
  });
}

function geometricSequence(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    const u1 = pick(r, [3, 4, 5, 6, 8]), ratio = pick(r, [2, 3, -2]), n = randInt(r, 5, 8);
    const un = u1 * Math.pow(ratio, n - 1);
    const sn = (u1 * (Math.pow(ratio, n) - 1)) / (ratio - 1);
    return calcQ(ctx, {
      stem: `A geometric sequence has first term $u_1=${u1}$ and common ratio $r=${ratio}$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: `Find $u_{${n}}$.`, marks: 2, answer: un, method: "Use $u_n=u_1r^{n-1}$.", working: `u_{${n}}=${u1}\\times(${ratio})^{${n - 1}}`, ansWorking: `${un}` },
        { label: "b", prompt: `Find $S_{${n}}$.`, marks: 3, answer: sn, method: "Use $S_n=\\frac{u_1(r^n-1)}{r-1}$.", working: `S_{${n}}=\\frac{${u1}((${ratio})^{${n}}-1)}{${ratio - 1}}`, ansWorking: `${sn}` },
      ],
      principles: [{ kind: "formula", name: "Geometric sequence", statement: "$u_n=u_1r^{n-1}$ and $S_n=\\frac{u_1(r^n-1)}{r-1}$ for $r\\ne1$." }],
      finalAnswer: `(a) $u_{${n}}=${un}$ (b) $S_{${n}}=${sn}$`,
      commonErrors: ["Using $r^n$ instead of $r^{n-1}$ for the nth term."],
    });
  }
  const u1 = pick(r, [5, 8, 10, 12, 20]), ratio = pick(r, [0.2, 0.25, 0.4, 0.5, 0.8]);
  const sinf = u1 / (1 - ratio);
  return single(ctx, {
    stem: `A geometric series has first term $u_1=${u1}$ and common ratio $r=${ratio}$. Find the sum to infinity $S_\\infty$.`,
    answer: sinf,
    tolerance: 0.001,
    method: "Check $|r|<1$, then use $S_\\infty=\\frac{u_1}{1-r}$.",
    working: `S_\\infty=\\frac{${u1}}{1-${ratio}}`,
    ansWorking: fmt(sinf),
    marks: 3,
    paper: "2",
    principles: [{ kind: "formula", name: "Sum to infinity", statement: "$S_\\infty=\\frac{u_1}{1-r}$ exists only for $|r|<1$." }],
    finalAnswer: `$S_\\infty=${fmt(sinf)}$`,
    commonErrors: ["Using $r$ instead of $1-r$ in the denominator."],
  });
}

function exponentLog(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = randInt(r, 2, 5), m = randInt(r, 2, 4), n = randInt(r, 1, 3);
    const ans = Math.pow(a, m + n);
    return single(ctx, {
      stem: `Evaluate $${a}^{${m}}\\times${a}^{${n}}$ without using a calculator.`,
      answer: ans,
      method: "Add the indices: $a^{m+n}$.",
      working: `${a}^{${m + n}}`,
      ansWorking: fmt(ans),
      marks: 2,
      paper: "1",
      principles: [{ kind: "law", name: "Index laws", statement: "$a^m\\times a^n=a^{m+n}$." }],
      finalAnswer: `${ans}`,
    });
  }
  if (kind === 1) {
    const b = pick(r, [2, 3, 5, 10]), k = randInt(r, 2, 4), ans = Math.pow(b, k);
    return single(ctx, {
      stem: `Solve $${b}^{x}=${ans}$.`,
      answer: k,
      method: "Equate indices after writing the right side as a power of $b$.",
      working: `${b}^{x}=${b}^{${k}}`,
      ansWorking: `${k}`,
      marks: 2,
      paper: "1",
      principles: [{ kind: "definition", name: "Logarithm", statement: "$\\log_b c=d\\iff b^d=c$." }],
      finalAnswer: `$x=${k}$`,
    });
  }
  const b = pick(r, [2, 3, 5]), x = randInt(r, 2, 5), y = randInt(r, 2, 4), ans = x * y;
  return single(ctx, {
    stem: `Solve $\\log_{${b}} x+\\log_{${b}} ${y}=\\log_{${b}} ${ans}$ for $x$.`,
    answer: x,
    method: `Combine the left side: $\\log_{${b}}(xy)=\\log_{${b}} ${ans}$, so $xy=${ans}$.`,
    working: `x=${ans}/${y}`,
    ansWorking: `${x}`,
    marks: 3,
    paper: "2",
    principles: [{ kind: "law", name: "Log laws", statement: "$\\log_b m+\\log_b n=\\log_b(mn)$ and $\\log_b b^k=k$." }],
    finalAnswer: `$x=${x}$`,
    commonErrors: ["Forgetting that logarithms require positive arguments."],
  });
}

function financeModel(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 1);
  const P = pick(r, [500, 800, 1200, 2000, 4000, 8000]);
  const rate = pick(r, [2.5, 3, 4, 5, 6]);
  const n = randInt(r, 2, 6);
  if (kind === 0) {
    const amount = P * Math.pow(1 + rate / 100, n);
    const interest = amount - P;
    return calcQ(ctx, {
      stem: `An investment of ${tex(P)} grows at ${rate}% per year, compounded annually.`,
      paper: "2",
      parts: [
        { label: "a", prompt: `Find the value after ${n} years.`, marks: 2, answer: amount, tolerance: 0.05, method: `Use $A=P(1+r)^n$ with $r=${rate}/100$.`, working: `${P}(1+${rate / 100})^{${n}}`, ansWorking: fmt(amount) },
        { label: "b", prompt: "Find the interest earned.", marks: 2, answer: interest, tolerance: 0.05, method: "Subtract the principal from the final value.", working: `${fmt(amount)}-${P}`, ansWorking: fmt(interest) },
      ],
      principles: [{ kind: "formula", name: "Compound interest", statement: "$A=P(1+\\frac{r}{100})^n$; interest $=A-P$." }],
      finalAnswer: `(a) ${fmt(amount)} (b) ${fmt(interest)}`,
      commonErrors: ["Using simple interest $P(1+\\frac{rn}{100})$."],
    });
  }
  const dep = pick(r, [8, 10, 12, 15, 20]);
  const value = P * Math.pow(1 - dep / 100, n);
  return calcQ(ctx, {
    stem: `A machine worth ${tex(P)} depreciates by ${dep}% of its current value each year.`,
    paper: "2",
    parts: [
      { label: "a", prompt: `Find its value after ${n} years.`, marks: 2, answer: value, tolerance: 0.05, method: `Use repeated multiplication by $1-${dep}/100$.`, working: `${P}(1-${dep / 100})^{${n}}`, ansWorking: fmt(value) },
      { label: "b", prompt: "Find the total depreciation.", marks: 2, answer: P - value, tolerance: 0.05, method: "Subtract the final value from the original value.", working: `${P}-${fmt(value)}`, ansWorking: fmt(P - value) },
    ],
    principles: [{ kind: "formula", name: "Exponential depreciation", statement: "Each year the value is multiplied by $1-\\frac{d}{100}$." }],
    finalAnswer: `(a) ${fmt(value)} (b) ${fmt(P - value)}`,
  });
}

function linearFunction(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const m = randInt(r, -4, 5) || 2, c = randInt(r, -8, 10);
    const x1 = randInt(r, -3, 3), x2 = x1 + randInt(r, 1, 4);
    const y1 = m * x1 + c, y2 = m * x2 + c;
    return calcQ(ctx, {
      stem: `A line passes through $(${x1}, ${y1})$ and $(${x2}, ${y2})$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find the gradient of the line.", marks: 2, answer: m, method: "Use $m=\\frac{y_2-y_1}{x_2-x_1}$.", working: `m=\\frac{${y2}-${y1}}{${x2}-${x1}}`, ansWorking: `${m}` },
        { label: "b", prompt: "Find the value of $c$ in $y=mx+c$.", marks: 3, answer: c, method: "Substitute one point and the gradient into $y=mx+c$.", working: `c=${y1}-(${m})(${x1})`, ansWorking: `${c}` },
      ],
      principles: [{ kind: "formula", name: "Straight line", statement: "$y=mx+c$ where $m=\\frac{\\Delta y}{\\Delta x}$." }],
      finalAnswer: `(a) $m=${m}$ (b) $y=${m}x${c >= 0 ? `+${c}` : c}$`,
      commonErrors: ["Reversing the coordinates when finding the gradient."],
    });
  }
  if (kind === 1) {
    const m1 = randInt(r, -3, 4) || 2, c1 = randInt(r, -6, 8), m2 = m1;
    return calcQ(ctx, {
      stem: `The line $L_1$ has equation $y=${m1}x${c1 >= 0 ? `+${c1}` : c1}$. A second line $L_2$ is parallel to $L_1$ and passes through $(2, ${2 * m1 + c1 + randInt(r, 3, 8)})$.`,
      paper: "1",
      parts: [{ label: "", prompt: "Find the gradient of $L_2$.", marks: 2, answer: m2, method: "Parallel lines have equal gradients.", working: `m_2=m_1=${m1}`, ansWorking: `${m2}` }],
      principles: [{ kind: "property", name: "Parallel lines", statement: "Parallel lines have the same gradient." }],
      finalAnswer: `$m=${m2}$`,
    });
  }
  const m = randInt(r, 2, 6), c = randInt(r, -10, 10), xint = -c / m;
  return calcQ(ctx, {
    stem: `The line $y=${m}x${c >= 0 ? `+${c}` : c}$ meets the $x$-axis at $A$ and the $y$-axis at $B$.`,
    paper: "1",
    parts: [
      { label: "a", prompt: "Find the coordinates of $A$.", marks: 2, answer: xint, tolerance: 0.001, method: "Set $y=0$ and solve for $x$.", working: `0=${m}x+${c}`, ansWorking: `(${fmt(xint)},0)` },
      { label: "b", prompt: "Find the coordinates of $B$.", marks: 2, answer: c, method: "Set $x=0$; the $y$-intercept is $c$.", working: `y=c`, ansWorking: `(0,${c})` },
    ],
    principles: [{ kind: "definition", name: "Intercepts", statement: "$x$-intercept: $y=0$; $y$-intercept: $x=0$." }],
    finalAnswer: `(a) A=(${fmt(xint)},0)$ (b) $B=(0,${c})$`,
  });
}

function quadraticFunction(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  const a = pick(r, [1, 1, 2]);
  const p = randInt(r, 1, 5), q = randInt(r, 1, 5);
  const b = a * (p + q), c = a * p * q;
  const roots = [p, q];
  if (kind === 0) {
    return calcQ(ctx, {
      stem: `The quadratic equation $${a}x^2-${b}x+${c}=0$ has roots $\\alpha$ and $\\beta$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find $\\alpha+\\beta$.", marks: 2, answer: p + q, method: "For $ax^2+bx+c=0$, sum of roots $=-b/a$.", working: `\\alpha+\\beta=${b}/${a}`, ansWorking: `${p + q}` },
        { label: "b", prompt: "Find $\\alpha\\beta$.", marks: 2, answer: c / a, method: "Product of roots $=c/a$.", working: `\\alpha\\beta=${c}/${a}`, ansWorking: `${c / a}` },
      ],
      principles: [{ kind: "formula", name: "Sum and product of roots", statement: "For $ax^2+bx+c=0$: $\\alpha+\\beta=-\\frac ba$ and $\\alpha\\beta=\\frac ca$." }],
      finalAnswer: `(a) ${p + q} (b) ${c / a}`,
      commonErrors: ["Using $+b/a$ instead of $-b/a$ for the sum."],
    });
  }
  if (kind === 1) {
    const disc = b * b - 4 * a * c;
    return single(ctx, {
      stem: `For the quadratic $y=${a}x^2-${b}x+${c}$, find the discriminant $\\Delta=b^2-4ac$.`,
      answer: disc,
      method: "Substitute $a,b,c$ into $\\Delta=b^2-4ac$.",
      working: `\\Delta=(${b})^2-4(${a})(${c})`,
      ansWorking: `${disc}`,
      marks: 3,
      paper: "1",
      principles: [{ kind: "formula", name: "Discriminant", statement: "$\\Delta=b^2-4ac$; $\\Delta>0$ real distinct, $\\Delta=0$ real equal, $\\Delta<0$ non-real." }],
      finalAnswer: `$\\Delta=${disc}$`,
      commonErrors: ["Forgetting to square $b$ before multiplying by $4ac$."],
    });
  }
  return calcQ(ctx, {
    stem: `Solve $${a}x^2-${b}x+${c}=0$.`,
    paper: "1",
    parts: [
      { label: "a", prompt: "Find the first solution.", marks: 2, answer: roots[0], method: "Factorise: $(${a}x-${a * p})(x-${q})=0$ or use the quadratic formula.", working: `(${a}x-${a * p})(x-${q})=0`, ansWorking: `x=${roots[0]}` },
      { label: "b", prompt: "Find the second solution.", marks: 2, answer: roots[1], method: "Use the second factor.", working: `x-${q}=0`, ansWorking: `x=${roots[1]}` },
    ],
    principles: [{ kind: "formula", name: "Quadratic formula", statement: "$x=\\frac{-B\\pm\\sqrt{B^2-4AC}}{2A}$ for $Ax^2+Bx+C=0$." }],
    finalAnswer: `$x=${roots[0]}$ or $x=${roots[1]}$`,
    unordered: true,
    commonErrors: ["Dividing only one term by $a$ when factorising."],
  });
}

function trigonometry(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const A = pick(r, [30, 45, 60]), B = pick(r, [50, 70, 80, 100, 110, 120]), C = 180 - A - B;
    const a = pick(r, [5, 7, 10, 12]), ratio = a / Math.sin(A * Math.PI / 180) * Math.sin(B * Math.PI / 180);
    return single(ctx, {
      stem: `In triangle $ABC$, $A=${A}^\\circ$, $B=${B}^\\circ$ and $a=${a}$. Find the length $b$, correct to 3 significant figures.`,
      answer: ratio,
      tolerance: 0.005,
      method: "Use the sine rule $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$.",
      working: `b=${a}\\frac{\\sin ${B}^\\circ}{\\sin ${A}^\\circ}`,
      ansWorking: fmt(ratio),
      marks: 4,
      paper: "2",
      principles: [{ kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$." }],
      finalAnswer: `$b=${fmt(ratio)}$`,
      commonErrors: ["Using degrees in a calculator set to radians."],
    });
  }
  if (kind === 1) {
    const sides = [pick(r, [4, 5, 6, 7, 8, 9]), pick(r, [5, 6, 8, 10, 12]), pick(r, [7, 9, 10, 13, 15])];
    const [x, y, z] = sides;
    if (x + y <= z || x + z <= y || y + z <= x) return trigonometry(ctx);
    const cosC = (x * x + y * y - z * z) / (2 * x * y);
    const angle = Math.acos(cosC) * 180 / Math.PI;
    return single(ctx, {
      stem: `In triangle $ABC$, $AB=${x}$, $BC=${y}$ and $AC=${z}$. Find angle $ABC$, correct to 1 decimal place.`,
      answer: angle,
      tolerance: 0.05,
      method: "Use the cosine rule with the side opposite the required angle.",
      working: `\\cos B=\\frac{${x}^2+${z}^2-${y}^2}{2(${x})(${z})}`,
      ansWorking: `${fmt(angle)}^\\circ`,
      marks: 4,
      paper: "2",
      principles: [{ kind: "formula", name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$." }],
      finalAnswer: `$B=${fmt(angle)}^\\circ$`,
      commonErrors: ["Pairing the wrong sides with the included angle."],
    });
  }
  const r1 = pick(r, [4, 6, 8, 10, 12]), theta = pick(r, [0.4, 0.5, 0.6, 0.8, 1.0, 1.2]);
  const arc = r1 * theta;
  const sector = 0.5 * r1 * r1 * theta;
  return calcQ(ctx, {
    stem: `A sector of a circle has radius ${r1} and angle ${theta} radians.`,
    paper: "1",
    parts: [
      { label: "a", prompt: "Find the arc length.", marks: 2, answer: arc, tolerance: 0.001, method: "Use $s=r\\theta$.", working: `s=${r1}\\times${theta}`, ansWorking: fmt(arc) },
      { label: "b", prompt: "Find the area of the sector.", marks: 2, answer: sector, tolerance: 0.001, method: "Use $A=\\frac12r^2\\theta$.", working: `A=\\frac12(${r1})^2(${theta})`, ansWorking: fmt(sector) },
    ],
    principles: [{ kind: "formula", name: "Radians", statement: "$s=r\\theta$ and $A=\\frac12r^2\\theta$ for angles in radians." }],
    finalAnswer: `(a) ${fmt(arc)} (b) ${fmt(sector)}`,
    commonErrors: ["Converting to degrees before using the radian formulae."],
  });
}

function descriptiveStats(ctx) {
  const r = ctx.rng;
  const n = pick(r, [5, 6, 7, 8]);
  const data = Array.from({ length: n }, () => randInt(r, 4, 30)).sort((a, b) => a - b);
  const sum = data.reduce((s, x) => s + x, 0);
  const mean = sum / n;
  const median = n % 2 ? data[(n - 1) / 2] : (data[n / 2 - 1] + data[n / 2]) / 2;
  const range = data[n - 1] - data[0];
  const variance = data.reduce((s, x) => s + (x - mean) ** 2, 0) / n;
  const sd = Math.sqrt(variance);
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    return calcQ(ctx, {
      stem: `The data values are ${data.join(", ")}.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find the mean.", marks: 2, answer: mean, tolerance: 0.001, method: "Add all values and divide by $n$.", working: `${sum}/${n}`, ansWorking: fmt(mean) },
        { label: "b", prompt: "Find the median.", marks: 2, answer: median, tolerance: 0.001, method: n % 2 ? "Take the middle ordered value." : "Average the two middle ordered values.", working: data.join(","), ansWorking: fmt(median) },
        { label: "c", prompt: "Find the range.", marks: 1, answer: range, method: "Subtract the smallest value from the largest.", working: `${data[n - 1]}-${data[0]}`, ansWorking: `${range}` },
      ],
      principles: [{ kind: "definition", name: "Averages", statement: "Mean $=\\frac{\\sum x}{n}$; median is the middle ordered value; range $=\\max-\\min$." }],
      finalAnswer: `(a) ${fmt(mean)} (b) ${fmt(median)} (c) ${range}`,
    });
  }
  return single(ctx, {
    stem: `For the data ${data.join(", ")}, find the standard deviation, correct to 3 significant figures.`,
    answer: sd,
    tolerance: 0.005,
    method: "Compute $\\sigma=\\sqrt{\\frac{\\sum(x-\\bar x)^2}{n}}$.",
    working: `\\sigma=\\sqrt{${fmt(variance)}}`,
    ansWorking: fmt(sd),
    marks: 4,
    paper: "2",
    principles: [{ kind: "formula", name: "Standard deviation", statement: "$\\sigma=\\sqrt{\\frac{\\sum(x-\\bar x)^2}{n}}$ for a population." }],
    finalAnswer: `$\\sigma=${fmt(sd)}$`,
    commonErrors: ["Dividing by $n-1$ when the question asks for the population standard deviation."],
  });
}

function probabilityCore(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const bad = randInt(r, 1, 5), total = randInt(r, 8, 20), good = total - bad;
    return single(ctx, {
      stem: `A bag contains ${total} counters: ${good} red and ${bad} blue. One counter is selected at random. Find the probability that it is blue. Give your answer as a fraction in its lowest terms.`,
      answer: bad / total,
      tolerance: 0.0001,
      method: "Probability = favourable outcomes / total outcomes, then simplify.",
      working: `${bad}/${total}`,
      ansWorking: `${bad}/${total}`,
      marks: 2,
      paper: "1",
      principles: [{ kind: "definition", name: "Probability", statement: "$P(E)=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$." }],
      finalAnswer: `$${bad}/${total}$`,
      commonErrors: ["Failing to simplify the fraction."],
    });
  }
  if (kind === 1) {
    const n = pick(r, [4, 5, 6]), k = randInt(r, 1, n - 1);
    const p = pick(r, [0.2, 0.25, 0.3, 0.4, 0.5]);
    const binom = (nn, kk) => { let v = 1; for (let i = 0; i < kk; i++) v = v * (nn - i) / (i + 1); return v; };
    const prob = binom(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
    return single(ctx, {
      stem: `The random variable $X$ follows a binomial distribution $X\\sim B(${n}, ${p})$. Find $P(X=${k})$, correct to 3 decimal places.`,
      answer: prob,
      tolerance: 0.0005,
      method: "Use $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
      working: `\\binom{${n}}{${k}}(${p})^{${k}}(${1 - p})^{${n - k}}`,
      ansWorking: prob.toFixed(3),
      marks: 4,
      paper: "2",
      principles: [{ kind: "formula", name: "Binomial probability", statement: "$P(X=k)=\\binom nk p^k(1-p)^{n-k}$ for $X\\sim B(n,p)$." }],
      finalAnswer: `$P(X=${k})=${prob.toFixed(3)}$`,
      commonErrors: ["Using $p$ and $1-p$ the wrong way round."],
    });
  }
  const red = randInt(r, 20, 45), blue = randInt(r, 15, 40), green = randInt(r, 10, 30);
  const total = red + blue + green;
  const probBlue = blue / total;
  return calcQ(ctx, {
    stem: `A bag contains ${red} red, ${blue} blue and ${green} green counters. Two counters are taken at random without replacement.`,
    paper: "2",
    parts: [
      { label: "a", prompt: "Find the probability that the first counter is blue.", marks: 2, answer: probBlue, tolerance: 0.001, method: "Use favourable / total for the first draw.", working: `${blue}/${total}`, ansWorking: fmt(probBlue) },
      { label: "b", prompt: "Find the probability that neither counter is red.", marks: 4, answer: probNotRed, tolerance: 0.001, method: "Multiply the probabilities for two successive non-red draws.", working: `\\frac{${blue + green}}{${total}}\\times\\frac{${blue + green - 1}}{${total - 1}}`, ansWorking: fmt((blue + green) / total * (blue + green - 1) / (total - 1)) },
    ],
    principles: [{ kind: "method", name: "Conditional probability", statement: "Without replacement, update the total and favourable counts after the first draw." }],
    finalAnswer: `(a) ${fmt(probBlue)} (b) ${fmt((blue + green) / total * (blue + green - 1) / (total - 1))}`,
    commonErrors: ["Treating the draws as independent when they are without replacement."],
  });
}

function calculusBasic(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = randInt(r, 2, 6), n = randInt(r, 2, 5), x = randInt(r, 1, 4);
    const dy = a * n * Math.pow(x, n - 1);
    return single(ctx, {
      stem: `Given $y=${a}x^{${n}}$, find $\\frac{dy}{dx}$ when $x=${x}$.`,
      answer: dy,
      method: "Differentiate using the power rule, then substitute.",
      working: `\\frac{dy}{dx}=${a * n}x^{${n - 1}}`,
      ansWorking: `${dy}`,
      marks: 3,
      paper: "1",
      principles: [{ kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}(ax^n)=anx^{n-1}$." }],
      finalAnswer: `$\\frac{dy}{dx}=${dy}$`,
      commonErrors: ["Forgetting to multiply by the power $n$."],
    });
  }
  if (kind === 1) {
    const k = randInt(r, 2, 5), x = randInt(r, 1, 3);
    const m = k * Math.pow(x, k - 1);
    const y = Math.pow(x, k);
    const c = y - m * x;
    return calcQ(ctx, {
      stem: `Find the equation of the tangent to $y=x^{${k}}$ at the point where $x=${x}$.`,
      paper: "2",
      parts: [
        { label: "a", prompt: "Find the gradient of the tangent.", marks: 2, answer: m, method: "Differentiate and substitute $x=${x}$.", working: `m=${k}x^{${k - 1}}`, ansWorking: `${m}` },
        { label: "b", prompt: "Find the equation of the tangent in the form $y=mx+c$.", marks: 3, answer: c, method: "Use $c=y-mx$ at the point.", working: `c=${y}-(${m})(${x})`, ansWorking: `y=${m}x${c >= 0 ? `+${c}` : c}` },
      ],
      principles: [{ kind: "formula", name: "Tangent", statement: "The gradient of the tangent is $\\frac{dy}{dx}$ at the point." }],
      finalAnswer: `(a) $m=${m}$ (b) $y=${m}x${c >= 0 ? `+${c}` : c}$`,
      commonErrors: ["Using the $y$-coordinate instead of $x$ when differentiating."],
    });
  }
  const a = randInt(r, 2, 5), n = randInt(r, 1, 3), x1 = randInt(r, 1, 2), x2 = x1 + randInt(r, 1, 2);
  const F = (x) => (a / (n + 1)) * Math.pow(x, n + 1);
  const ans = F(x2) - F(x1);
  return single(ctx, {
    stem: `Evaluate $\\displaystyle\\int_{${x1}}^{${x2}} ${a}x^{${n}}\\,dx$.`,
    answer: ans,
    tolerance: 0.001,
    method: "Integrate, then substitute the limits.",
    working: `[\\frac{${a}}{${n + 1}}x^{${n + 1}}]_{${x1}}^{${x2}}`,
    ansWorking: fmt(ans),
    marks: 4,
    paper: "2",
    principles: [{ kind: "formula", name: "Integration", statement: "$\\int ax^n\\,dx=\\frac{a}{n+1}x^{n+1}+C$; definite integrals use limits." }],
    finalAnswer: `${fmt(ans)}`,
    commonErrors: ["Dividing by $n$ instead of $n+1$."],
  });
}

function proofOpen(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = randInt(r, 2, 6), b = randInt(r, 2, 6);
    return open(ctx, {
      stem: `Show that $(x+${a})(x+${b})=x^2+${a + b}x+${ab}$.`,
      paper: "1",
      steps: [
        os(undefined, "Expand the left-hand side using the distributive law.", `(x+${a})(x+${b})=x^2+${b}x+${a}x+${a * b}`, 2),
        os(undefined, "Collect the $x$ terms.", `=x^2+${a + b}x+${a * b}`, 1, "A"),
        os(undefined, "This is identical to the right-hand side, so the identity is proved (AG).", "AG", 1, "A"),
      ],
      principles: [{ kind: "method", name: "Proof by expansion", statement: "Expand both sides or transform one side into the other, showing every step." }],
      finalAnswer: "Identity verified.",
      difficulty: "foundation",
      examinerNote: "All algebraic steps must be shown because the result is given.",
    });
  }
  if (kind === 1) {
    const a = randInt(r, 2, 5), d = randInt(r, 2, 5), n = randInt(r, 4, 8);
    const sum = (n / 2) * (2 * a + (n - 1) * d);
    return open(ctx, {
      stem: `An arithmetic series has first term ${a} and common difference ${d}. Prove that the sum of the first ${n} terms is $S_{${n}}=\\frac{${n}}{2}\\left(${2 * a}+(${n}-1)${d}\\right)$.`,
      paper: "1",
      steps: [
        os(undefined, "Write the sum forwards and backwards.", `S_{${n}}=${a}+(${a}+${d})+\\cdots+(${a}+(${n}-1)${d})`, 2),
        os(undefined, "Pair corresponding terms: each pair sums to $2a+(n-1)d$.", `S_{${n}}=\\frac{${n}}{2}\\left(2a+(n-1)d\\right)`, 3, "A"),
        os(undefined, "Substitute $a=${a}$ and $d=${d}$ to obtain the stated result (AG).", `=\\frac{${n}}{2}\\left(${2 * a}+(${n}-1)${d}\\right)`, 2, "A"),
      ],
      principles: [{ kind: "method", name: "Arithmetic series proof", statement: "Pair the first and last terms; each of the $n$ terms contributes half of $2a+(n-1)d$." }],
      finalAnswer: `$S_{${n}}=${sum}$`,
      examinerNote: "The pairing argument must be explained, not just the formula quoted.",
    });
  }
  const u1 = pick(r, [4, 6, 8, 10]), ratio = pick(r, [0.2, 0.25, 0.5]);
  return open(ctx, {
    stem: `A geometric series has first term ${u1} and common ratio ${ratio}. Show that its sum to infinity is $S_\\infty=\\frac{${u1}}{1-${ratio}}$.`,
    paper: "2",
    steps: [
      os(undefined, "State that convergence requires $|r|<1$; here $r=${ratio}$, so the series converges.", "|r|<1", 1),
      os(undefined, "Write $S_\\infty=u_1+u_1r+u_1r^2+\\cdots$ and factor out $u_1$.", `S_\\infty=${u1}(1+r+r^2+\\cdots)`, 2),
      os(undefined, "Use the sum of the infinite geometric series $1+r+r^2+\\cdots=\\frac{1}{1-r}$.", `=${u1}\\times\\frac{1}{1-${ratio}}`, 2, "A"),
      os(undefined, "Simplify to the required result (AG).", `S_\\infty=\\frac{${u1}}{1-${ratio}}`, 1, "A"),
    ],
    principles: [{ kind: "formula", name: "Sum to infinity", statement: "$\\sum_{k=0}^{\\infty}r^k=\\frac{1}{1-r}$ for $|r|<1$." }],
    finalAnswer: "$S_\\infty$ as required.",
    examinerNote: "The convergence condition must be stated before using the formula.",
  });
}

// ---------------------------------------------------------------------------
// HL / advanced families
// ---------------------------------------------------------------------------
function countingHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  const fact = (x) => { let v = 1; for (let i = 2; i <= x; i++) v *= i; return v; };
  if (kind === 0) {
    const n = randInt(r, 5, 8), k = randInt(r, 2, Math.min(4, n - 1));
    const ans = fact(n) / (fact(n - k) * fact(k));
    return single(ctx, {
      stem: `A committee of ${k} people is chosen from ${n} candidates. Find the number of different committees possible.`,
      answer: ans,
      method: "Use combinations $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$ because order does not matter.",
      working: `\\binom{${n}}{${k}}`,
      ansWorking: fmt(ans),
      marks: 3,
      paper: "1",
      principles: [{ kind: "formula", name: "Combinations", statement: "$\\binom nk=\\frac{n!}{k!(n-k)!}$; permutations use $\\frac{n!}{(n-k)!}$." }],
      finalAnswer: `${ans}`,
      commonErrors: ["Using permutations when the order of selection is irrelevant."],
    });
  }
  if (kind === 1) {
    const n = randInt(r, 5, 8), k = randInt(r, 2, Math.min(4, n - 1));
    const ans = fact(n) / fact(n - k);
    return single(ctx, {
      stem: `In how many ways can ${k} distinct prizes be awarded to ${n} contestants if each contestant can win at most one prize?`,
      answer: ans,
      method: "Use permutations $^nP_k=\\frac{n!}{(n-k)!}$ because the order of prizes matters.",
      working: `\\frac{${n}!}{(${n}-${k})!}`,
      ansWorking: fmt(ans),
      marks: 3,
      paper: "1",
      principles: [{ kind: "formula", name: "Permutations", statement: "$^nP_k=\\frac{n!}{(n-k)!}$ for ordered arrangements." }],
      finalAnswer: `${ans}`,
      commonErrors: ["Dividing by $k!$ when the prizes are distinct and ordered."],
    });
  }
  const n = pick(r, [4, 5]), k = randInt(r, 2, n - 1);
  return single(ctx, {
    stem: `Find the coefficient of $x^{${k}}$ in the expansion of $(1+x)^{${n}}$.`,
    answer: fact(n) / (fact(k) * fact(n - k)),
    method: "The coefficient is $\\binom{n}{k}$.",
    working: `\\binom{${n}}{${k}}`,
    ansWorking: `${fact(n) / (fact(k) * fact(n - k))}`,
    marks: 3,
    paper: "1",
    principles: [{ kind: "formula", name: "Binomial coefficient", statement: "Coefficient of $x^k$ in $(1+x)^n$ is $\\binom nk$." }],
    finalAnswer: `${fact(n) / (fact(k) * fact(n - k))}`,
  });
}

function complexNumbers(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  const a = randInt(r, 1, 6), b = randInt(r, 1, 6), c = randInt(r, 1, 6), d = randInt(r, 1, 6);
  if (kind === 0) {
    const re = a + c, im = b + d;
    return calcQ(ctx, {
      stem: `Let $z_1=${a}+${b}i$ and $z_2=${c}+${d}i$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find the real part of $z_1+z_2$.", marks: 2, answer: re, responseLabel: "value", method: "Add real parts and imaginary parts separately.", working: `(${a}+${c})+(${b}+${d})i`, ansWorking: `${re}` },
        { label: "b", prompt: "Find $\\operatorname{Im}(z_1+z_2)$.", marks: 1, answer: im, responseLabel: "value", method: "The imaginary part is the coefficient of $i$.", working: `${im}`, ansWorking: `${im}` },
      ],
      principles: [{ kind: "definition", name: "Complex addition", statement: "$(a+bi)+(c+di)=(a+c)+(b+d)i$." }],
      finalAnswer: `(a) $z_1+z_2=${re}+${im}i$ (b) $${im}$`,
    });
  }
  if (kind === 1) {
    const re = a * c - b * d, im = a * d + b * c;
    return calcQ(ctx, {
      stem: `Let $z_1=${a}+${b}i$ and $z_2=${c}+${d}i$. Find $z_1z_2$ in the form $p+qi$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find the real part.", marks: 2, answer: re, responseLabel: "value", method: "Expand and use $i^2=-1$: real part $=ac-bd$.", working: `${a * c}-${b * d}`, ansWorking: `${re}` },
        { label: "b", prompt: "Find the imaginary part.", marks: 2, answer: im, responseLabel: "value", method: "Imaginary part $=ad+bc$.", working: `${a * d}+${b * c}`, ansWorking: `${im}` },
      ],
      principles: [{ kind: "law", name: "Complex multiplication", statement: "$(a+bi)(c+di)=(ac-bd)+(ad+bc)i$." }],
      finalAnswer: `$z_1z_2=${re}+${im}i$`,
      commonErrors: ["Forgetting that $i^2=-1$."],
    });
  }
  const mod = Math.sqrt(a * a + b * b);
  const arg = Math.atan2(b, a) * 180 / Math.PI;
  return calcQ(ctx, {
    stem: `Let $z=${a}+${b}i$.`,
    paper: "2",
    parts: [
      { label: "a", prompt: "Find $|z|$.", marks: 2, answer: mod, tolerance: 0.001, method: "Use $|z|=\\sqrt{a^2+b^2}$.", working: `\\sqrt{${a}^2+${b}^2}`, ansWorking: fmt(mod) },
      { label: "b", prompt: "Find $\\arg z$ in degrees, correct to 1 decimal place.", marks: 3, answer: arg, tolerance: 0.05, method: "Use $\\arg z=\\tan^{-1}(b/a)$ and adjust for the quadrant.", working: `\\tan^{-1}(${b}/${a})`, ansWorking: `${fmt(arg)}^\\circ` },
    ],
    principles: [{ kind: "definition", name: "Modulus-argument form", statement: "$z=re^{i\\theta}$ where $r=|z|$ and $\\theta=\\arg z$." }],
    finalAnswer: `(a) $|z|=${fmt(mod)}$ (b) $\\arg z=${fmt(arg)}^\\circ$`,
    commonErrors: ["Giving the acute angle only; check the quadrant on the Argand diagram."],
  });
}

function vectorsHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const x = randInt(r, -5, 5), y = randInt(r, -5, 5), z = randInt(r, -5, 5);
    if (x === 0 && y === 0 && z === 0) return vectorsHL(ctx);
    const mag = Math.sqrt(x * x + y * y + z * z);
    return calcQ(ctx, {
      stem: `Let $\\boldsymbol{a}=${col([x, y, z])}$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find $|\\boldsymbol{a}|$.", marks: 2, answer: mag, tolerance: 0.001, method: "Use $|\\boldsymbol a|=\\sqrt{x^2+y^2+z^2}$.", working: `\\sqrt{${x}^2+${y}^2+${z}^2}`, ansWorking: fmt(mag) },
        { label: "b", prompt: "Find a unit vector in the direction of $\\boldsymbol{a}$.", marks: 3, answer: x / mag, method: "Divide each component by $|\\boldsymbol a|$.", working: `\\frac{1}{${fmt(mag)}}\\begin{pmatrix}${x}\\\\${y}\\\\${z}\\end{pmatrix}`, ansWorking: `\\begin{pmatrix}${fmt(x / mag)}\\\\${fmt(y / mag)}\\\\${fmt(z / mag)}\\end{pmatrix}` },
      ],
      principles: [{ kind: "formula", name: "Vector magnitude", statement: "$|\\boldsymbol a|=\\sqrt{x^2+y^2+z^2}$; unit vector $=\\boldsymbol a/|\\boldsymbol a|$." }],
      finalAnswer: `(a) $|\\boldsymbol a|=${fmt(mag)}$ (b) unit vector as shown`,
      commonErrors: ["Dividing only one component by the magnitude."],
    });
  }
  if (kind === 1) {
    const a = [randInt(r, -4, 4), randInt(r, -4, 4), randInt(r, -4, 4)];
    const b = [randInt(r, -4, 4), randInt(r, -4, 4), randInt(r, -4, 4)];
    if (a.every((v, i) => v === b[i])) return vectorsHL(ctx);
    const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const ma = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
    const mb = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
    const angle = Math.acos(dot / (ma * mb)) * 180 / Math.PI;
    return calcQ(ctx, {
      stem: `Let $\\boldsymbol{a}=${col(a)}$ and $\\boldsymbol{b}=${col(b)}$.`,
      paper: "2",
      parts: [
        { label: "a", prompt: "Find $\\boldsymbol{a}\\cdot\\boldsymbol{b}$.", marks: 2, answer: dot, method: "Multiply corresponding components and add.", working: `${a.map((v, i) => `${v}(${b[i]})`).join("+")}`, ansWorking: `${dot}` },
        { label: "b", prompt: "Find the angle between $\\boldsymbol{a}$ and $\\boldsymbol{b}$, correct to 1 decimal place.", marks: 4, answer: angle, tolerance: 0.05, method: "Use $\\cos\\theta=\\frac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$.", working: `\\cos\\theta=${dot}/(${fmt(ma)}\\times${fmt(mb)})`, ansWorking: `${fmt(angle)}^\\circ` },
      ],
      principles: [{ kind: "formula", name: "Scalar product", statement: "$\\boldsymbol a\\cdot\\boldsymbol b=|\\boldsymbol a||\\boldsymbol b|\\cos\\theta$; vectors are perpendicular when the dot product is 0." }],
      finalAnswer: `(a) $\\boldsymbol a\\cdot\\boldsymbol b=${dot}$ (b) $\\theta=${fmt(angle)}^\\circ$`,
      commonErrors: ["Using the vector product instead of the scalar product."],
    });
  }
  const p = [randInt(r, -4, 4), randInt(r, -4, 4), randInt(r, -4, 4)];
  const q = [randInt(r, -4, 4), randInt(r, -4, 4), randInt(r, -4, 4)];
  const d = [q[0] - p[0], q[1] - p[1], q[2] - p[2]];
  const lambda = randInt(r, 2, 5);
  const point = [p[0] + lambda * d[0], p[1] + lambda * d[1], p[2] + lambda * d[2]];
  return calcQ(ctx, {
    stem: `The line $L$ has equation $\\boldsymbol{r}=${col(p)}+\\lambda${col(d)}$.`,
    paper: "2",
    parts: [
      { label: "a", prompt: `Find the position vector when $\\lambda=${lambda}$.`, marks: 3, answer: point[0], method: "Substitute $\\lambda=${lambda}$ into $\\boldsymbol r=\\boldsymbol p+\\lambda\\boldsymbol d$.", working: `${col(p)}+${lambda}${col(d)}`, ansWorking: col(point) },
      { label: "b", prompt: "Find the first component of the direction vector of $L$.", marks: 1, answer: d[0], responseLabel: "value", method: "The direction vector is the coefficient of $\\lambda$.", working: col(d), ansWorking: `${d[0]}` },
    ],
    principles: [{ kind: "definition", name: "Vector equation of a line", statement: "$\\boldsymbol r=\\boldsymbol a+\\lambda\\boldsymbol d$ where $\\boldsymbol a$ is a point and $\\boldsymbol d$ is the direction." }],
    finalAnswer: `(a) $${col(point)}$ (b) $${col(d)}$`,
  });
}

function matrixHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  const mat = () => [randInt(r, -3, 4), randInt(r, -3, 4), randInt(r, -3, 4), randInt(r, -3, 4)];
  if (kind === 0) {
    const [a, b, c, d] = mat();
    const det = a * d - b * c;
    if (det === 0) return matrixHL(ctx);
    return calcQ(ctx, {
      stem: `Let $A=\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find $\\det A$.", marks: 2, answer: det, method: "Use $\\det A=ad-bc$.", working: `${a}(${d})-(${b})(${c})`, ansWorking: `${det}` },
        { label: "b", prompt: "Find $A^{-1}$.", marks: 4, answer: det, method: "Use $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$.", working: `\\frac{1}{${det}}\\begin{pmatrix}${d}&${-b}\\\\${-c}&${a}\\end{pmatrix}`, ansWorking: `\\frac{1}{${det}}\\begin{pmatrix}${d}&${-b}\\\\${-c}&${a}\\end{pmatrix}` },
      ],
      principles: [{ kind: "formula", name: "2x2 inverse", statement: "$A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ when $ad-bc\\ne0$." }],
      finalAnswer: `(a) $\\det A=${det}$ (b) $A^{-1}$ as shown`,
      commonErrors: ["Swapping the signs of $b$ and $c$ incorrectly."],
    });
  }
  if (kind === 1) {
    const [a, b, c, d] = mat();
    const e = randInt(r, -3, 4), f = randInt(r, -3, 4), g = randInt(r, -3, 4), h = randInt(r, -3, 4);
    const m11 = a * e + b * g, m12 = a * f + b * h, m21 = c * e + d * g, m22 = c * f + d * h;
    return calcQ(ctx, {
      stem: `Let $A=\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$ and $B=\\begin{pmatrix} ${e} & ${f} \\\\ ${g} & ${h} \\end{pmatrix}$. Find $AB$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find the top-left entry of $AB$.", marks: 2, answer: m11, method: "Multiply row 1 of $A$ by column 1 of $B$.", working: `${a}(${e})+(${b})(${g})`, ansWorking: `${m11}` },
        { label: "b", prompt: "Find the bottom-right entry of $AB$.", marks: 2, answer: m22, method: "Multiply row 2 of $A$ by column 2 of $B$.", working: `(${c})(${f})+(${d})(${h})`, ansWorking: `${m22}` },
      ],
      principles: [{ kind: "method", name: "Matrix multiplication", statement: "$(AB)_{ij}=\\sum_k A_{ik}B_{kj}$; matrices must have compatible dimensions." }],
      finalAnswer: `(a) ${m11} (b) ${m22}; $AB=\\begin{pmatrix}${m11}&${m12}\\\\${m21}&${m22}\\end{pmatrix}$`,
    });
  }
  const a = randInt(r, 1, 4), b = randInt(r, -3, 3), c = randInt(r, -3, 3), d = randInt(r, 1, 4);
  const tr = a + d, det = a * d - b * c;
  const disc = tr * tr - 4 * det;
  if (disc < 0) return matrixHL(ctx);
  const l1 = (tr + Math.sqrt(disc)) / 2, l2 = (tr - Math.sqrt(disc)) / 2;
  return calcQ(ctx, {
    stem: `Let $A=\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$.`,
    paper: "2",
    parts: [
      { label: "a", prompt: "Find the trace of $A$.", marks: 2, answer: tr, method: "Use $\\operatorname{tr}A=a+d$.", working: `${a}+${d}`, ansWorking: `${tr}` },
      { label: "b", prompt: "Find the eigenvalues of $A$.", marks: 3, answer: l1, tolerance: 0.001, method: "Solve the characteristic quadratic.", working: `\\lambda=\\frac{${tr}\\pm\\sqrt{${disc}}}{2}`, ansWorking: `${fmt(l1)}, ${fmt(l2)}` },
    ],
    principles: [{ kind: "formula", name: "Eigenvalues", statement: "Eigenvalues satisfy $\\det(A-\\lambda I)=0$, equivalently $\\lambda^2-(\\operatorname{tr}A)\\lambda+\\det A=0$ for a 2x2 matrix." }],
    finalAnswer: `(a) $\\operatorname{tr}A=${tr}$ (b) $\\lambda=${fmt(l1)}$ or $\\lambda=${fmt(l2)}$`,
    unordered: true,
  });
}

function functionTransformHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = randInt(r, 2, 5), b = randInt(r, -4, 4);
    const x = randInt(r, 2, 5);
    const inner = a * x + b;
    const ans = inner * inner;
    return calcQ(ctx, {
      stem: `Let $f(x)=x^2$ and $g(x)=${a}x${b >= 0 ? `+${b}` : b}$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: `Find $g(${x})$.`, marks: 2, answer: inner, method: "Substitute $x=${x}$ into $g$.", working: `${a}(${x})${b >= 0 ? `+${b}` : b}`, ansWorking: `${inner}` },
        { label: "b", prompt: `Find $(f\\circ g)(${x})$.`, marks: 3, answer: ans, method: "Compute $f(g(x))=g(x)^2$.", working: `(${inner})^2`, ansWorking: `${ans}` },
      ],
      principles: [{ kind: "definition", name: "Composite function", statement: "$(f\\circ g)(x)=f(g(x))$; evaluate the inner function first." }],
      finalAnswer: `(a) $g(${x})=${inner}$ (b) $(f\\circ g)(${x})=${ans}$`,
      commonErrors: ["Computing $g(f(x))$ instead of $f(g(x))$."],
    });
  }
  if (kind === 1) {
    const a = randInt(r, 2, 4), b = randInt(r, -6, 6), c = randInt(r, 2, 5);
    const y = c;
    const x = (y - b) / a;
    return calcQ(ctx, {
      stem: `A function is defined by $f(x)=${a}x${b >= 0 ? `+${b}` : b}$ for $x\\ge0$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: `Find $f^{-1}(${y})$.`, marks: 3, answer: x, tolerance: 0.001, method: "Interchange $x$ and $y$, then solve for $y$.", working: `x=${a}y${b >= 0 ? `+${b}` : b} \\Rightarrow y=\\frac{x-${b}}{${a}}`, ansWorking: `${fmt(x)}` },
        { label: "b", prompt: "State the domain of $f^{-1}$.", marks: 2, answer: b, responseLabel: "lower bound", method: "The domain of $f^{-1}$ equals the range of $f$.", working: `y\\ge f(0)=${b}`, ansWorking: `$y\\ge${b}$` },
      ],
      principles: [{ kind: "definition", name: "Inverse function", statement: "$f^{-1}$ reverses $f$; domain of $f^{-1}$ is range of $f$." }],
      finalAnswer: `(a) $f^{-1}(${y})=${fmt(x)}$ (b) domain $y\\ge${b}$`,
    });
  }
  const h = pick(r, [2, 3, 4]), k = randInt(r, 1, 5);
  return open(ctx, {
    stem: `The graph of $y=f(x)$ is transformed to $y=f(x-${k})+${h}$. Describe the transformation fully.`,
    paper: "2",
    steps: [
      os(undefined, "The term $x-${k}$ inside the function produces a horizontal translation.", `translate ${k} units right`, 2),
      os(undefined, "The added constant ${h} produces a vertical translation.", `translate ${h} units up`, 2),
      os(undefined, "State both transformations in the correct order and direction.", "horizontal then vertical", 1, "A"),
    ],
    principles: [{ kind: "convention", name: "Graph transformations", statement: "$f(x-a)+b$ is $f(x)$ translated $a$ units right and $b$ units up." }],
    finalAnswer: `$${k}$ units right and $${h}$ units up`,
    difficulty: "core",
  });
}

function polynomialHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  const a = randInt(r, 1, 3), x0 = randInt(r, 2, 5), k = randInt(r, 1, 4), c = randInt(r, 2, 5);
  if (kind === 0) {
    const rem = a * Math.pow(x0, 2) + k * x0 + c;
    return calcQ(ctx, {
      stem: `Let $f(x)=${a}x^2+${k}x+${c}$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: `Find the remainder when $f(x)$ is divided by $(x-${x0})$.`, marks: 3, answer: rem, method: "Use the remainder theorem: evaluate $f(${x0})$.", working: `f(${x0})=${a}(${x0})^2+${k}(${x0})+${c}`, ansWorking: `${rem}` },
        { label: "b", prompt: "State what the remainder represents.", marks: 1, answer: rem, responseLabel: "value", method: "It is the value of the polynomial at $x=${x0}$.", working: `f(${x0})`, ansWorking: `${rem}` },
      ],
      principles: [{ kind: "theorem", name: "Remainder theorem", statement: "The remainder when $f(x)$ is divided by $(x-a)$ is $f(a)$." }],
      finalAnswer: `(a) $${rem}$ (b) $f(${x0})=${rem}$`,
    });
  }
  if (kind === 1) {
    const alpha = randInt(r, 2, 5), beta = randInt(r, 2, 5);
    const sum = alpha + beta, prod = alpha * beta;
    return calcQ(ctx, {
      stem: `The polynomial $x^2-${sum}x+${prod}$ has roots $\\alpha$ and $\\beta$.`,
      paper: "1",
      parts: [
        { label: "a", prompt: "Find $\\alpha+\\beta$.", marks: 2, answer: sum, method: "For $x^2+px+q$, sum of roots $=-p$.", working: `\\alpha+\\beta=${sum}`, ansWorking: `${sum}` },
        { label: "b", prompt: "Find $\\alpha^2+\\beta^2$.", marks: 3, answer: sum * sum - 2 * prod, method: "Use $\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta$.", working: `(${sum})^2-2(${prod})`, ansWorking: `${sum * sum - 2 * prod}` },
      ],
      principles: [{ kind: "formula", name: "Roots of a quadratic", statement: "$\\alpha+\\beta=-b/a$ and $\\alpha\\beta=c/a$; symmetric expressions can be reduced." }],
      finalAnswer: `(a) ${sum} (b) ${sum * sum - 2 * prod}`,
    });
  }
  const p = randInt(r, 2, 5), q = randInt(r, 2, 5), x = randInt(r, 1, 3);
  const ans = p * Math.pow(x, 3) + q * Math.pow(x, 2);
  return single(ctx, {
    stem: `Use the factor theorem to show that $(x-${x})$ is not a factor of $f(x)=${p}x^3+${q}x^2$ unless $f(${x})=0$. Evaluate $f(${x})$.`,
    answer: ans,
    method: "By the factor theorem, $(x-a)$ is a factor only when $f(a)=0$; evaluate $f(${x})$.",
    working: `f(${x})=${p}(${x})^3+${q}(${x})^2`,
    ansWorking: `${ans}`,
    marks: 3,
    paper: "2",
    principles: [{ kind: "theorem", name: "Factor theorem", statement: "$(x-a)$ is a factor of $f(x)$ if and only if $f(a)=0$." }],
    finalAnswer: `$f(${x})=${ans}$`,
    commonErrors: ["Assuming the factor exists without checking $f(a)=0$."],
  });
}

function trigHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    const theta = pick(r, [15, 30, 45, 60]);
    const sinSum = Math.sin((45 + theta) * Math.PI / 180);
    const cosSum = Math.cos((45 + theta) * Math.PI / 180);
    return calcQ(ctx, {
      stem: `Let $\\theta=${theta}^\\circ$.`,
      paper: "2",
      parts: [
        { label: "a", prompt: "Find $\\sin(45^\\circ+\\theta)$ using the compound angle formula.", marks: 3, answer: sinSum, tolerance: 0.001, method: "Use $\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$.", working: `\\sin45\\cos${theta}+\\cos45\\sin${theta}`, ansWorking: fmt(sinSum) },
        { label: "b", prompt: "Find $\\cos(45^\\circ+\\theta)$, correct to 4 decimal places.", marks: 3, answer: cosSum, tolerance: 0.0005, method: "Use $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$.", working: `\\cos45\\cos${theta}-\\sin45\\sin${theta}`, ansWorking: cosSum.toFixed(4) },
      ],
      principles: [{ kind: "formula", name: "Compound angle", statement: "$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$ and $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$." }],
      finalAnswer: `(a) ${fmt(sinSum)} (b) ${cosSum.toFixed(4)}`,
      commonErrors: ["Using the wrong sign in the cosine compound angle formula."],
    });
  }
  const target = pick(r, [0.5, 0.7071, 0.866]);
  const alpha = target === 0.5 ? 30 : target === 0.7071 ? 45 : 60;
  const sols = [alpha / 2, (180 - alpha) / 2];
  return calcQ(ctx, {
    stem: `Solve $\\sin 2\\theta=${target}$ for $0^\\circ\\le\\theta\\le180^\\circ$.`,
    paper: "2",
    parts: [
      { label: "a", prompt: "Find the first solution.", marks: 2, answer: sols[0], tolerance: 0.05, method: "Solve $2\\theta=\\alpha$ or $2\\theta=180^\\circ-\\alpha$, then divide by 2.", working: `2\\theta=${alpha}`, ansWorking: `${fmt(sols[0])}^\\circ` },
      { label: "b", prompt: "Find the second solution.", marks: 2, answer: sols[1], tolerance: 0.05, method: "Use the supplementary angle for sine.", working: `2\\theta=${180 - alpha}`, ansWorking: `${fmt(sols[1])}^\\circ` },
    ],
    principles: [{ kind: "method", name: "Trigonometric equations", statement: "$\\sin x=\\sin\\alpha$ implies $x=\\alpha$ or $x=180^\\circ-\\alpha$ in one period." }],
    finalAnswer: `$\\theta=${fmt(sols[0])}^\\circ$ or $\\theta=${fmt(sols[1])}^\\circ$`,
    unordered: true,
    commonErrors: ["Forgetting the supplementary solution or forgetting to divide by 2."],
  });
}

function calcHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = pick(r, [1, 2]), x = randInt(r, 1, 4);
    return single(ctx, {
      stem: `Differentiate $y=${a}x^{-2}$ with respect to $x$ and evaluate the derivative at $x=${x}$.`,
      answer: -2 * a * Math.pow(x, -3),
      method: "Use the power rule for negative indices, then substitute.",
      working: `\\frac{dy}{dx}=-${2 * a}x^{-3}`,
      ansWorking: `${-2 * a * Math.pow(x, -3)}`,
      marks: 3,
      paper: "1",
      principles: [{ kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}(ax^n)=anx^{n-1}$ for all real $n$." }],
      finalAnswer: `$\\frac{dy}{dx}=${-2 * a * Math.pow(x, -3)}$`,
      commonErrors: ["Treating $x^{-2}$ as $-x^2$."],
    });
  }
  if (kind === 1) {
    return single(ctx, {
      stem: "Use L'Hôpital's rule to evaluate $\\lim_{x\\to0}\\frac{e^x-1}{x}$.",
      answer: 1,
      method: "The limit has the form $\\frac00$, so differentiate numerator and denominator.",
      working: "\\lim_{x\\to0}\\frac{e^x}{1}",
      ansWorking: "1",
      marks: 3,
      paper: "1",
      principles: [{ kind: "method", name: "L'Hôpital's rule", statement: "If $\\lim\\frac{f(x)}{g(x)}$ has the form $\\frac00$ or $\\frac{\\infty}{\\infty}$, it equals $\\lim\\frac{f'(x)}{g'(x)}$ when that limit exists." }],
      finalAnswer: "$1$",
      commonErrors: ["Differentiating only the numerator or denominator."],
    });
  }
  const a = randInt(r, 2, 4), b = randInt(r, 1, 4), c = randInt(r, 2, 5), x = randInt(r, 1, 3);
  const dy = a * Math.pow(x, b - 1) + c;
  const dx = 1;
  const ans = dy / dx;
  return calcQ(ctx, {
    stem: `A curve has equation $y=${a}x^{${b}}+${c}x$. A particle moves along the curve with $\\frac{dx}{dt}=1$.`,
    paper: "2",
    parts: [
      { label: "a", prompt: `Find $\\frac{dy}{dx}$ when $x=${x}$.`, marks: 3, answer: dy, method: "Differentiate with respect to $x$.", working: `\\frac{dy}{dx}=${a * b}x^{${b - 1}}+${c}`, ansWorking: `${dy}` },
      { label: "b", prompt: `Find $\\frac{dy}{dt}$ when $x=${x}$.`, marks: 3, answer: ans, method: "Use the chain rule $\\frac{dy}{dt}=\\frac{dy}{dx}\\frac{dx}{dt}$.", working: `(${dy})(1)`, ansWorking: `${ans}` },
    ],
    principles: [{ kind: "method", name: "Related rates", statement: "$\\frac{dy}{dt}=\\frac{dy}{dx}\\frac{dx}{dt}$ (chain rule)." }],
    finalAnswer: `(a) $\\frac{dy}{dx}=${dy}$ (b) $\\frac{dy}{dt}=${ans}$`,
    examinerNote: "FT from part (a) into part (b).",
  });
}

function integralHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = pick(r, [1, 2, 3]), n = randInt(r, 2, 4), x1 = randInt(r, 1, 2), x2 = x1 + randInt(r, 1, 2);
    const F = (x) => (a / (n + 1)) * Math.pow(x, n + 1);
    const ans = F(x2) - F(x1);
    return single(ctx, {
      stem: `Evaluate $\\displaystyle\\int_{${x1}}^{${x2}} ${a}x^{${n}}\\,dx$ using substitution if required.`,
      answer: ans,
      tolerance: 0.001,
      method: "Integrate the power and apply the limits.",
      working: `[\\frac{${a}}{${n + 1}}x^{${n + 1}}]_{${x1}}^{${x2}}`,
      ansWorking: fmt(ans),
      marks: 4,
      paper: "2",
      principles: [{ kind: "formula", name: "Integration", statement: "$\\int ax^n\\,dx=\\frac{a}{n+1}x^{n+1}+C$; definite integrals are evaluated between limits." }],
      finalAnswer: `${fmt(ans)}`,
      commonErrors: ["Forgetting to subtract the lower limit."],
    });
  }
  if (kind === 1) {
    const a = randInt(r, 1, 3), b = randInt(r, 1, 3), n = randInt(r, 2, 3);
    const ans = a / (n + 1) * Math.pow(b, n + 1) - a / (n + 1) * Math.pow(0, n + 1);
    return single(ctx, {
      stem: `Use integration by parts or inspection to evaluate $\\displaystyle\\int_0^{${b}} ${a}x^{${n}}\\,dx$.`,
      answer: ans,
      tolerance: 0.001,
      method: "Integrate the power function and substitute the limits.",
      working: `[\\frac{${a}}{${n + 1}}x^{${n + 1}}]_0^{${b}}`,
      ansWorking: fmt(ans),
      marks: 4,
      paper: "2",
      principles: [{ kind: "formula", name: "Integration by parts", statement: "$\\int u\\,dv=uv-\\int v\\,du$; for powers, the reverse power rule is quicker." }],
      finalAnswer: `${fmt(ans)}`,
    });
  }
  const a = randInt(r, 1, 3), n = randInt(r, 1, 2);
  const vol = Math.PI * a * a / (2 * n + 1) * Math.pow(2, 2 * n + 1);
  return single(ctx, {
    stem: `The region bounded by $y=${a}x^{${n}}$, the $x$-axis and $x=2$ is rotated through $360^\\circ$ about the $x$-axis. Find the volume of the solid formed, correct to 3 significant figures.`,
    answer: vol,
    tolerance: 0.05,
    method: "Use $V=\\pi\\int y^2\\,dx$ from $0$ to $2$.",
    working: `$\\pi\\int_0^2 (${a}x^{${n}})^2\\,dx$`,
    ansWorking: fmt(vol),
    marks: 5,
    paper: "3",
    principles: [{ kind: "formula", name: "Volume of revolution", statement: "$V=\\pi\\int_a^b y^2\\,dx$ when rotating about the $x$-axis." }],
    finalAnswer: `$V=${fmt(vol)}$`,
    commonErrors: ["Forgetting the factor $\\pi$ or squaring only $x$ instead of $y$."],
  });
}

function statsHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const n = pick(r, [10, 12, 15, 20]), p = pick(r, [0.2, 0.25, 0.3, 0.4]);
    const mean = n * p, varc = n * p * (1 - p);
    return calcQ(ctx, {
      stem: `A random variable $X$ follows a binomial distribution $X\\sim B(${n}, ${p})$.`,
      paper: "2",
      parts: [
        { label: "a", prompt: "Find $\\mathrm{E}(X)$.", marks: 2, answer: mean, method: "Use $\\mathrm{E}(X)=np$.", working: `${n}\\times${p}`, ansWorking: `${mean}` },
        { label: "b", prompt: "Find $\\operatorname{Var}(X)$.", marks: 2, answer: varc, method: "Use $\\operatorname{Var}(X)=np(1-p)$.", working: `${n}\\times${p}\\times${1 - p}`, ansWorking: `${varc}` },
      ],
      principles: [{ kind: "formula", name: "Binomial moments", statement: "For $X\\sim B(n,p)$: $\\mathrm{E}(X)=np$ and $\\operatorname{Var}(X)=np(1-p)$." }],
      finalAnswer: `(a) $\\mathrm{E}(X)=${mean}$ (b) $\\operatorname{Var}(X)=${varc}$`,
    });
  }
  if (kind === 1) {
    const mu = pick(r, [20, 30, 40, 50]), sigma = pick(r, [4, 5, 6, 8]);
    const z = pick(r, [1, 1.5, 2]);
    const ans = mu + z * sigma;
    return single(ctx, {
      stem: `Scores are normally distributed with mean ${mu} and standard deviation ${sigma}. Find the value of $x$ that is $z=${z}$ standard deviations above the mean.`,
      answer: ans,
      method: "Use $x=\\mu+z\\sigma$.",
      working: `${mu}+${z}\\times${sigma}`,
      ansWorking: `${ans}`,
      marks: 3,
      paper: "2",
      principles: [{ kind: "formula", name: "Normal standardization", statement: "$Z=\\frac{X-\\mu}{\\sigma}$; values $z$ standard deviations from the mean are $\\mu+z\\sigma$." }],
      finalAnswer: `$x=${ans}$`,
      commonErrors: ["Multiplying $\\mu$ by $z$ instead of adding $z\\sigma$."],
    });
  }
  const a = randInt(r, 1, 4), b = randInt(r, 1, 4), x = randInt(r, 1, 5);
  const mean = a * x + b;
  const varc = a * a * 9;
  return calcQ(ctx, {
    stem: `Let $X$ be a random variable with $\\mathrm{E}(X)=10$ and $\\operatorname{Var}(X)=9$. Define $Y=${a}X+${b}$.`,
    paper: "2",
    parts: [
      { label: "a", prompt: "Find $\\mathrm{E}(Y)$.", marks: 2, answer: mean, method: "Use $\\mathrm{E}(aX+b)=a\\mathrm{E}(X)+b$.", working: `${a}(10)+${b}`, ansWorking: `${mean}` },
      { label: "b", prompt: "Find $\\operatorname{Var}(Y)$.", marks: 3, answer: varc, method: "Use $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$.", working: `(${a})^2(9)`, ansWorking: `${varc}` },
    ],
    principles: [{ kind: "formula", name: "Linear transformations", statement: "$\\mathrm{E}(aX+b)=a\\mathrm{E}(X)+b$ and $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$." }],
    finalAnswer: `(a) $\\mathrm{E}(Y)=${mean}$ (b) $\\operatorname{Var}(Y)=${varc}$`,
    commonErrors: ["Multiplying the variance by $a$ instead of $a^2$."],
  });
}

function deHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const k = pick(r, [0.5, 1, 2, 3]);
    const y0 = randInt(r, 2, 6), t = randInt(r, 1, 4);
    const y = y0 * Math.exp(k * t);
    return single(ctx, {
      stem: `A quantity satisfies $\\frac{dy}{dt}=ky$ with $k=${k}$ and $y(0)=${y0}$. Find $y(${t})$, correct to 3 significant figures.`,
      answer: y,
      tolerance: 0.05,
      method: "Solve the exponential differential equation: $y=y_0e^{kt}$.",
      working: `${y0}e^{${k}\\times${t}}`,
      ansWorking: fmt(y),
      marks: 4,
      paper: "2",
      principles: [{ kind: "formula", name: "Exponential growth", statement: "$\\frac{dy}{dt}=ky \\Rightarrow y=y_0e^{kt}$." }],
      finalAnswer: `$y(${t})=${fmt(y)}$`,
      commonErrors: ["Using $y_0(1+k)^t$ for continuous growth."],
    });
  }
  if (kind === 1) {
    const v0 = randInt(r, 5, 15), a = randInt(r, 1, 3), t = randInt(r, 2, 6);
    const v = v0 + a * t;
    const s = v0 * t + 0.5 * a * t * t;
    return calcQ(ctx, {
      stem: `A particle has acceleration ${a} m/s² and initial velocity ${v0} m/s.`,
      paper: "2",
      parts: [
        { label: "a", prompt: `Find its velocity after ${t} seconds.`, marks: 2, answer: v, method: "Use $v=u+at$.", working: `${v0}+${a}(${t})`, ansWorking: `${v}` },
        { label: "b", prompt: `Find the distance travelled in ${t} seconds.`, marks: 3, answer: s, method: "Use $s=ut+\\frac12at^2$.", working: `${v0}(${t})+\\frac12(${a})(${t})^2`, ansWorking: `${s}` },
      ],
      principles: [{ kind: "formula", name: "Kinematics", statement: "$v=u+at$ and $s=ut+\\frac12at^2$ for constant acceleration." }],
      finalAnswer: `(a) $v=${v}$ m/s (b) $s=${s}$ m`,
      commonErrors: ["Using $s=vt$ with the final velocity instead of the SUVAT formula."],
    });
  }
  const k = pick(r, [0.05, 0.1, 0.2]), y0 = randInt(r, 2, 5), t = randInt(r, 1, 3);
  const denom = 1 - k * y0 * t;
  if (denom <= 0.2) return deHL(ctx);
  const y = y0 / denom;
  return single(ctx, {
    stem: `Solve $\\frac{dy}{dt}=ky^2$ for $t>0$, where $k=${k}$ and $y(0)=${y0}$. State the value of $y(${t})$.`,
    answer: y,
    tolerance: 0.05,
    method: "Separate variables: $\\int y^{-2}dy=\\int k\\,dt$, giving $-\\frac1y=kt+C$.",
    working: `-\\frac{1}{y}=${k}t-\\frac{1}{${y0}}`,
    ansWorking: fmt(y),
    marks: 5,
    paper: "3",
    principles: [{ kind: "method", name: "Separation of variables", statement: "$\\frac{dy}{dt}=ky^2 \\Rightarrow \\int y^{-2}\\,dy=\\int k\\,dt$; apply $y(0)=y_0$." }],
    finalAnswer: `$y(${t})=${fmt(y)}$`,
    commonErrors: ["Forgetting the negative sign when integrating $y^{-2}$."],
    examinerNote: "The solution blows up at $t=\\frac{1}{ky_0}$; the stated value must be before that time.",
  });
}

function graphTheoryHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const n = randInt(r, 4, 6);
    const edges = Array.from({ length: n }, (_, i) => [i, (i + 1) % n]);
    const possible = [[0, 2], [1, 3], [0, 3], [1, 4], [2, 4]].filter(([a, b]) => a < n && b < n && !edges.some(([x, y]) => (x === a && y === b) || (x === b && y === a)));
    shuffle(r, possible);
    edges.push(...possible.slice(0, randInt(r, 0, Math.min(2, possible.length))));
    const degree = Array(n).fill(0);
    for (const [a, b] of edges) { degree[a]++; degree[b]++; }
    const odd = degree.filter((d) => d % 2 === 1).length;
    return calcQ(ctx, {
      stem: `A graph has ${n} vertices and edges ${edges.map(([a, b]) => `${a + 1}-${b + 1}`).join(", ")}.`,
      paper: "2",
      parts: [
        { label: "a", prompt: "Find the degree of vertex 1.", marks: 2, answer: degree[0], method: "Count the edges incident with vertex 1.", working: edges.map(([a, b]) => (a === 0 || b === 0 ? 1 : 0)).join("+"), ansWorking: `${degree[0]}` },
        { label: "b", prompt: "Find the number of vertices with odd degree.", marks: 3, answer: odd, method: "An Eulerian circuit exists only when every vertex has even degree.", working: `odd\\ degree\\ vertices=${odd}`, ansWorking: `${odd}` },
      ],
      principles: [{ kind: "theorem", name: "Eulerian graphs", statement: "A connected graph has an Eulerian circuit iff all vertex degrees are even; a trail iff exactly two vertices have odd degree." }],
      finalAnswer: `(a) $${degree[0]}$ (b) ${odd === 0 ? "Eulerian circuit possible" : "not possible"}`,
      commonErrors: ["Counting loops twice or forgetting that the graph must be connected."],
    });
  }
  if (kind === 1) {
    const A = [[1, 1, 0], [0, 1, 1], [1, 0, 1]];
    const edgeCount = A[0][1] + A[0][2] + A[1][2];
    return calcQ(ctx, {
      stem: `The adjacency matrix of a graph is $A=\\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{pmatrix}$.`,
      paper: "2",
      parts: [
        { label: "a", prompt: "Find the number of edges in the graph.", marks: 3, answer: edgeCount, method: "Each 1 above the diagonal represents an edge; count them.", working: "upper triangle sum", ansWorking: `${edgeCount}` },
        { label: "b", prompt: "Find the degree of vertex 2.", marks: 2, answer: A[1][0] + A[1][1] + A[1][2], method: "Add the entries in row 2 of $A$.", working: `${A[1].join("+")}`, ansWorking: `${A[1][0] + A[1][1] + A[1][2]}` },
      ],
      principles: [{ kind: "definition", name: "Adjacency matrix", statement: "$A_{ij}=1$ when vertices $i$ and $j$ are adjacent; the row sum gives the degree." }],
      finalAnswer: `(a) ${edgeCount} edges (b) degree ${A[1][0] + A[1][1] + A[1][2]}`,
    });
  }
  const cities = pick(r, [["A", "B", "C", "D"], ["P", "Q", "R", "S"]]);
  return open(ctx, {
    stem: `A travelling salesman must visit ${cities.join(", ")} and return to the start. Describe how the nearest neighbour algorithm produces an upper bound for the route length.`,
    paper: "2",
    steps: [
      os(undefined, "Start at an arbitrary vertex and repeatedly move to the nearest unvisited vertex.", "nearest unvisited vertex", 2),
      os(undefined, "When all vertices have been visited, return to the starting vertex.", "return to start", 2),
      os(undefined, "Add the lengths of the chosen edges; this gives a valid tour, hence an upper bound.", "sum of edge lengths", 2, "A"),
    ],
    principles: [{ kind: "method", name: "Nearest neighbour", statement: "Greedy construction of a tour gives a feasible route, so its length is an upper bound on the optimum." }],
    finalAnswer: "The sum of the edges chosen by nearest neighbour is an upper bound.",
    difficulty: "core",
  });
}

function hypothesisHL(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    const n = pick(r, [10, 12, 15]), p0 = pick(r, [0.3, 0.4, 0.5]), k = randInt(r, 3, n - 2);
    const binom = (nn, kk) => { let v = 1; for (let i = 0; i < kk; i++) v = v * (nn - i) / (i + 1); return v; };
    const tail = Array.from({ length: n - k + 1 }, (_, i) => binom(n, k + i) * Math.pow(p0, k + i) * Math.pow(1 - p0, n - k - i)).reduce((s, x) => s + x, 0);
    return single(ctx, {
      stem: `Under $H_0$, the number of successes $X$ in ${n} trials is binomial with $p=${p0}$. Given that $X\\ge${k}$ is the rejection region, find the probability of a Type I error, correct to 3 decimal places.`,
      answer: tail,
      tolerance: 0.0005,
      method: "Sum the binomial probabilities for all outcomes in the rejection region.",
      working: `$\\sum_{j=${k}}^{${n}}\\binom{${n}}{j}${p0}^j(1-${p0})^{${n}-j}$`,
      ansWorking: tail.toFixed(3),
      marks: 4,
      paper: "2",
      principles: [{ kind: "definition", name: "Type I error", statement: "A Type I error is rejecting $H_0$ when it is true; its probability is the sum of probabilities in the rejection region." }],
      finalAnswer: `$${tail.toFixed(3)}$`,
      commonErrors: ["Using $P(X=k)$ only instead of $P(X\\ge k)$."],
    });
  }
  const lam = pick(r, [2, 3, 4, 5]), k = randInt(r, 1, 5);
  const fact = (x) => { let v = 1; for (let i = 2; i <= x; i++) v *= i; return v; };
  const ans = Math.exp(-lam) * Math.pow(lam, k) / fact(k);
  return single(ctx, {
    stem: `The random variable $X$ follows a Poisson distribution with mean $\\lambda=${lam}$. Find $P(X=${k})$, correct to 4 decimal places.`,
    answer: ans,
    tolerance: 0.0001,
    method: "Use $P(X=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!}$.",
    working: `$\\frac{e^{-${lam}}(${lam})^{${k}}}{${k}!}$`,
    ansWorking: ans.toFixed(4),
    marks: 4,
    paper: "2",
    principles: [{ kind: "formula", name: "Poisson distribution", statement: "$P(X=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!}$ for $X\\sim\\mathrm{Po}(\\lambda)$." }],
    finalAnswer: `$${ans.toFixed(4)}$`,
    commonErrors: ["Using $\\lambda$ instead of $e^{-\\lambda}$ in the numerator."],
  });
}

// ---------------------------------------------------------------------------
// Paper 3 investigation templates
// ---------------------------------------------------------------------------
function paper3Question(ctx) {
  const course = ctx.course;
  const u = ctx.unitIdx;
  if (course.startsWith("ib-aa-hl")) {
    if (u === 0) return open(ctx, {
      paper: "3", difficulty: "challenge",
      stem: "Consider the complex number $z=a+bi$, where $a,b\\in\\mathbb{R}$ and $z\\ne0$.",
      parts: [
        { label: "a", prompt: "Express $z$ in modulus-argument form.", marks: 2 },
        { label: "b", prompt: "Find $z^2$ in Cartesian form and hence write it in modulus-argument form.", marks: 3 },
        { label: "c", prompt: "Use De Moivre's theorem to find $z^3$ in modulus-argument form.", marks: 3 },
        { label: "d", prompt: "State and justify a general result for $\\arg(z^n)$.", marks: 4 },
      ],
      steps: [
        os("a", "Write $r=|z|=\\sqrt{a^2+b^2}$ and $\\theta=\\arg z$.", "$z=re^{i\\theta}$", 2),
        os("b", "Square in Cartesian form: $(a+bi)^2=(a^2-b^2)+2abi$.", "Cartesian then polar", 2, "M"),
        os("b", "Convert using $r^2$ and $2\\theta$.", "$r^2e^{2i\\theta}$", 1, "A"),
        os("c", "Apply De Moivre: $(re^{i\\theta})^3=r^3e^{3i\\theta}$.", "$r^3(\\cos3\\theta+i\\sin3\\theta)$", 3),
        os("d", "State $\\arg(z^n)=n\\arg z$ up to multiples of $2\\pi$ and justify via De Moivre.", "De Moivre / argument addition", 4),
      ],
      principles: [{ kind: "theorem", name: "De Moivre's theorem", statement: "$(re^{i\\theta})^n=r^n(\\cos n\\theta+i\\sin n\\theta)$; powers multiply moduli and add arguments." }],
      finalAnswer: "$z=re^{i\\theta}$; $z^n=r^ne^{in\\theta}$.",
      examinerNote: "Credit for a clear generalization in part (d), not just computation.",
    });
    if (u === 1) return open(ctx, {
      paper: "3", difficulty: "challenge",
      stem: "Consider $f(x)=\\sin x+\\cos x$ for $0^\\circ\\le x\\le360^\\circ$.",
      parts: [
        { label: "a", prompt: "Show that $f(x)=\\sqrt2\\sin(x+45^\\circ)$.", marks: 4 },
        { label: "b", prompt: "Hence find the maximum value of $f(x)$ and the values of $x$ where it occurs.", marks: 3 },
        { label: "c", prompt: "Solve $f(x)=1$ for $0^\\circ\\le x\\le360^\\circ$.", marks: 4 },
        { label: "d", prompt: "Explain why the amplitude is $\\sqrt2$ rather than 2.", marks: 2 },
      ],
      steps: [
        os("a", "Expand $\\sqrt2\\sin(x+45^\\circ)=\\sqrt2(\\sin x\\cos45^\\circ+\\cos x\\sin45^\\circ)$.", "compound angle expansion", 2),
        os("a", "Use $\\cos45^\\circ=\\sin45^\\circ=\\frac{\\sqrt2}{2}$ to simplify to $\\sin x+\\cos x$ (AG).", "simplify", 2, "A"),
        os("b", "Maximum of sine is 1, so max $f=\\sqrt2$; occurs when $x+45^\\circ=90^\\circ$ or $450^\\circ$.", "$x=45^\\circ$ or $x=405^\\circ$ in range", 3),
        os("c", "Solve $\\sqrt2\\sin(x+45^\\circ)=1$, giving $\\sin(x+45^\\circ)=\\frac{1}{\\sqrt2}$.", "basic angle $45^\\circ$", 2, "M"),
        os("c", "List all $x$ in the interval.", "$x=0^\\circ,135^\\circ,180^\\circ,315^\\circ$", 2, "A"),
        os("d", "The components are not independent; the amplitude is $\\sqrt{1^2+1^2}=\\sqrt2$.", "vector/Pythagoras reasoning", 2),
      ],
      principles: [{ kind: "formula", name: "Harmonic form", statement: "$a\\sin x+b\\cos x=R\\sin(x+\\alpha)$ with $R=\\sqrt{a^2+b^2}$ and $\\tan\\alpha=\\frac ba$." }],
      finalAnswer: "Max $\\sqrt2$ at $x=45^\\circ$; solutions as listed.",
      examinerNote: "Part (c) requires all solutions in the stated interval.",
    });
    return open(ctx, {
      paper: "3", difficulty: "challenge",
      stem: "The points $A(1,2,3)$, $B(4,6,3)$ and $C(2,3,7)$ lie in three-dimensional space.",
      parts: [
        { label: "a", prompt: "Find $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$.", marks: 2 },
        { label: "b", prompt: "Find the angle $BAC$ correct to 1 decimal place.", marks: 4 },
        { label: "c", prompt: "Find the area of triangle $ABC$.", marks: 3 },
        { label: "d", prompt: "Find a vector equation of the line through $A$ perpendicular to the plane containing $A,B,C$.", marks: 4 },
      ],
      steps: [
        os("a", "Subtract position vectors componentwise.", "$\\overrightarrow{AB}=\\begin{pmatrix}3\\\\4\\\\0\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}1\\\\1\\\\4\\end{pmatrix}$", 2),
        os("b", "Use $\\cos\\theta=\\frac{\\overrightarrow{AB}\\cdot\\overrightarrow{AC}}{|\\overrightarrow{AB}||\\overrightarrow{AC}|}$.", "dot product", 2, "M"),
        os("b", "Evaluate to obtain $\\theta$.", "calculator", 2, "A"),
        os("c", "Area $=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$.", "vector product", 3),
        os("d", "The normal to the plane is $\\overrightarrow{AB}\\times\\overrightarrow{AC}$; use it as direction through $A$.", "vector product as normal", 4),
      ],
      principles: [{ kind: "formula", name: "Vector geometry", statement: "Angles use the scalar product; areas and normals use the vector product." }],
      finalAnswer: "Angle and area as computed; line direction is the normal vector.",
      examinerNote: "Show the vector product components for the area and normal.",
    });
  }
  if (course.startsWith("ib-ai-hl")) {
    if (u === 0) return open(ctx, {
      paper: "3", difficulty: "challenge",
      stem: "Let $A=\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.",
      parts: [
        { label: "a", prompt: "Find the eigenvalues of $A$.", marks: 3 },
        { label: "b", prompt: "Find an eigenvector for each eigenvalue.", marks: 4 },
        { label: "c", prompt: "Write down a matrix $P$ whose columns are the eigenvectors and a diagonal matrix $D$ such that $A=PDP^{-1}$.", marks: 4 },
        { label: "d", prompt: "Use diagonalization to find $A^3$.", marks: 4 },
      ],
      steps: [
        os("a", "Solve $\\det(A-\\lambda I)=0$: $(2-\\lambda)^2-1=0$.", "$\\lambda=1,3$", 3),
        os("b", "For $\\lambda=1$, solve $(A-I)\\boldsymbol v=0$; for $\\lambda=3$ solve $(A-3I)\\boldsymbol v=0$.", "eigenvectors", 4),
        os("c", "Form $P$ from the eigenvectors and $D=\\operatorname{diag}(1,3)$.", "$PDP^{-1}=A$", 4),
        os("d", "Compute $A^3=PD^3P^{-1}=P\\operatorname{diag}(1,27)P^{-1}$ and simplify.", "matrix multiplication", 4),
      ],
      principles: [{ kind: "theorem", name: "Diagonalization", statement: "If $A$ has distinct eigenvalues, $A=PDP^{-1}$ where columns of $P$ are eigenvectors and $D$ contains the eigenvalues." }],
      finalAnswer: "$A^3$ as computed.",
      examinerNote: "The eigenvectors must be linearly independent for this method.",
    });
    if (u === 1) return open(ctx, {
      paper: "3", difficulty: "challenge",
      stem: "A population $P$ is modelled by $P(t)=\\frac{1000}{1+9e^{-0.4t}}$, where $t$ is in years.",
      parts: [
        { label: "a", prompt: "Find $P(0)$ and interpret it.", marks: 2 },
        { label: "b", prompt: "Find the long-term population as $t\\to\\infty$.", marks: 2 },
        { label: "c", prompt: "Find the time when $P(t)=500$.", marks: 4 },
        { label: "d", prompt: "Explain why the model is logistic rather than exponential.", marks: 3 },
      ],
      steps: [
        os("a", "Substitute $t=0$: $P(0)=\\frac{1000}{1+9}=100$.", "$P(0)=100$", 2),
        os("b", "As $t\\to\\infty$, $e^{-0.4t}\\to0$, so $P\\to1000$.", "carrying capacity", 2),
        os("c", "Solve $\\frac{1000}{1+9e^{-0.4t}}=500$ for $t$.", "$t=\\frac{\\ln 9}{0.4}$", 4),
        os("d", "The denominator contains an exponential term, producing an S-shaped curve bounded above, unlike unbounded exponential growth.", "bounded growth / carrying capacity", 3),
      ],
      principles: [{ kind: "model", name: "Logistic model", statement: "$P(t)=\\frac{K}{1+Ae^{-rt}}$ models growth toward carrying capacity $K$." }],
      finalAnswer: "$P(0)=100$, carrying capacity $1000$, $t=\\frac{\\ln9}{0.4}$.",
    });
    return open(ctx, {
      paper: "3", difficulty: "challenge",
      stem: "A particle moves in the plane with position vector $\\boldsymbol{r}(t)=\\begin{pmatrix}\\cos 2t\\\\\\sin 2t\\end{pmatrix}$.",
      parts: [
        { label: "a", prompt: "Find $\\boldsymbol{v}(t)=\\frac{d\\boldsymbol r}{dt}$.", marks: 3 },
        { label: "b", prompt: "Show that the particle moves in a circle and find its radius.", marks: 3 },
        { label: "c", prompt: "Find the speed of the particle.", marks: 3 },
        { label: "d", prompt: "Find the acceleration vector and hence the centripetal acceleration.", marks: 4 },
      ],
      steps: [
        os("a", "Differentiate componentwise.", "$\\boldsymbol v=\\begin{pmatrix}-2\\sin2t\\\\2\\cos2t\\end{pmatrix}$", 3),
        os("b", "Since $x^2+y^2=\\cos^22t+\\sin^22t=1$, the path is the unit circle (AG).", "Pythagorean identity", 3),
        os("c", "Speed $=|\\boldsymbol v|=\\sqrt{4\\sin^22t+4\\cos^22t}=2$.", "$2$", 3),
        os("d", "Differentiate again: $\\boldsymbol a=\\begin{pmatrix}-4\\cos2t\\\\-4\\sin2t\\end{pmatrix}=-4\\boldsymbol r$, so centripetal acceleration has magnitude $4$.", "second derivative", 4),
      ],
      principles: [{ kind: "formula", name: "Circular motion", statement: "For $\\boldsymbol r=(\\cos\\omega t,\\sin\\omega t)$, speed is $\\omega$ and centripetal acceleration is $\\omega^2$ toward the centre." }],
      finalAnswer: "Radius $1$, speed $2$, centripetal acceleration $4$.",
      examinerNote: "Part (b) requires the circle to be justified, not just stated.",
    });
  }
  // AA HL Year 2
  if (u === 0) return open(ctx, {
    paper: "3", difficulty: "challenge",
    stem: "A continuous random variable $X$ has probability density function $f(x)=kx(4-x)$ for $0\\le x\\le4$ and $f(x)=0$ otherwise.",
    parts: [
      { label: "a", prompt: "Find the value of $k$.", marks: 3 },
      { label: "b", prompt: "Find $\\mathrm{E}(X)$.", marks: 4 },
      { label: "c", prompt: "Find $\\operatorname{Var}(X)$.", marks: 4 },
      { label: "d", prompt: "State the mode of $X$ and justify your answer.", marks: 3 },
    ],
    steps: [
      os("a", "Use $\\int_0^4 kx(4-x)\\,dx=1$ to find $k$.", "$k=\\frac{3}{32}$", 3),
      os("b", "Compute $\\mathrm{E}(X)=\\int_0^4 xkx(4-x)\\,dx$.", "integrate", 4),
      os("c", "Compute $\\mathrm{E}(X^2)$ then $\\operatorname{Var}(X)=\\mathrm{E}(X^2)-\\mathrm{E}(X)^2$.", "integrate twice", 4),
      os("d", "The pdf is a downward parabola maximized where $f'(x)=0$; mode at $x=2$.", "$x=2$", 3),
    ],
    principles: [{ kind: "definition", name: "Continuous random variable", statement: "$\\int f(x)\\,dx=1$, $\\mathrm{E}(X)=\\int xf(x)\\,dx$, and $\\operatorname{Var}(X)=\\int x^2f(x)\\,dx-\\mathrm{E}(X)^2$." }],
    finalAnswer: "$k=\\frac{3}{32}$; mean, variance and mode as computed.",
    examinerNote: "Numerical integration must be shown accurately; exact fractions are preferred.",
  });
  if (u === 1) return open(ctx, {
    paper: "3", difficulty: "challenge",
    stem: "A curve has equation $y=x^3-3x^2-9x+5$.",
    parts: [
      { label: "a", prompt: "Find $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$.", marks: 3 },
      { label: "b", prompt: "Find the coordinates of all stationary points.", marks: 4 },
      { label: "c", prompt: "Determine the nature of each stationary point.", marks: 3 },
      { label: "d", prompt: "Find the equation of the normal at the point where $x=1$.", marks: 4 },
    ],
    steps: [
      os("a", "Differentiate twice.", "$\\frac{dy}{dx}=3x^2-6x-9$, $\\frac{d^2y}{dx^2}=6x-6$", 3),
      os("b", "Solve $3x^2-6x-9=0$, i.e. $x^2-2x-3=0$.", "$x=-1$ or $x=3$", 2, "M"),
      os("b", "Substitute back to find $y$.", "points", 2, "A"),
      os("c", "Use the sign of $\\frac{d^2y}{dx^2}$ at each stationary point.", "concavity test", 3),
      os("d", "At $x=1$, gradient of tangent is $\\frac{dy}{dx}=-12$, so normal gradient is $\\frac1{12}$; form $y-y_1=m(x-1)$.", "negative reciprocal", 4),
    ],
    principles: [{ kind: "formula", name: "Stationary points", statement: "Stationary points occur where $\\frac{dy}{dx}=0$; their nature is found from $\\frac{d^2y}{dx^2}$ or a sign diagram." }],
    finalAnswer: "Stationary points and normal as computed.",
    examinerNote: "Both stationary points must be classified.",
  });
  return open(ctx, {
    paper: "3", difficulty: "challenge",
    stem: "The region enclosed by $y=x^2$ and $y=x$ is rotated through $360^\\circ$ about the $x$-axis.",
    parts: [
      { label: "a", prompt: "Find the points of intersection of the curves.", marks: 2 },
      { label: "b", prompt: "Set up the integral for the volume of revolution.", marks: 4 },
      { label: "c", prompt: "Evaluate the volume.", marks: 4 },
      { label: "d", prompt: "Explain why the washer method is needed rather than a single $\\pi\\int y^2\\,dx$ from 0 to 1.", marks: 3 },
    ],
    steps: [
      os("a", "Solve $x^2=x$.", "$x=0$ or $x=1$", 2),
      os("b", "On $0<x<1$, $x>x^2$, so use $V=\\pi\\int_0^1(x^2-x^4)\\,dx$.", "washer method", 4),
      os("c", "Integrate term by term.", "$V=\\pi(\\frac13-\\frac15)=\\frac{2\\pi}{15}$", 4),
      os("d", "The region is between two curves, so the volume is the difference of two solids of revolution.", "difference of volumes", 3),
    ],
    principles: [{ kind: "formula", name: "Volume of revolution", statement: "For a region between $y=f(x)$ and $y=g(x)$ rotated about the $x$-axis, $V=\\pi\\int_a^b(f^2-g^2)\\,dx$." }],
    finalAnswer: "$V=\\frac{2\\pi}{15}$.",
    examinerNote: "The integrand must be $x^2-x^4$, not $x^2+x^4$ or $(x-x^2)^2$.",
  });
}

function aiPaper3(ctx) {
  return paper3Question(ctx);
}

// ---------------------------------------------------------------------------
// Family maps by unit index
// ---------------------------------------------------------------------------
const UNIT_FAMILIES = {
  "ib-aa-sl-1": [
    [arithmeticSequence, geometricSequence, exponentLog, financeModel],
    [linearFunction, quadraticFunction, exponentLog, proofOpen],
    [trigonometry, proofOpen, exponentLog, arithmeticSequence],
  ],
  "ib-aa-sl-2": [
    [descriptiveStats, probabilityCore, proofOpen],
    [calculusBasic, proofOpen, descriptiveStats],
    [calculusBasic, probabilityCore, proofOpen],
  ],
  "ib-aa-hl-1": [
    [countingHL, complexNumbers, polynomialHL, proofOpen],
    [trigHL, functionTransformHL, proofOpen],
    [vectorsHL, vectorsHL, complexNumbers, proofOpen],
  ],
  "ib-aa-hl-2": [
    [statsHL, statsHL, probabilityCore],
    [calcHL, calcHL, integralHL],
    [integralHL, deHL, statsHL],
  ],
  "ib-ai-sl-1": [
    [arithmeticSequence, geometricSequence, exponentLog, financeModel],
    [linearFunction, quadraticFunction, financeModel, proofOpen],
    [trigonometry, financeModel, exponentLog],
  ],
  "ib-ai-sl-2": [
    [descriptiveStats, probabilityCore, calculusBasic],
    [descriptiveStats, probabilityCore, hypothesisHL],
    [calculusBasic, probabilityCore, statsHL],
  ],
  "ib-ai-hl-1": [
    [matrixHL, complexNumbers, exponentLog],
    [functionTransformHL, financeModel, proofOpen],
    [vectorsHL, matrixHL, functionTransformHL],
  ],
  "ib-ai-hl-2": [
    [graphTheoryHL, statsHL, hypothesisHL],
    [statsHL, hypothesisHL, deHL],
    [deHL, integralHL, calcHL],
  ],
};

function makeIbPack(course) {
  const isHl = course.includes("-hl-");
  return function pack(ctx) {
    const want = Math.max(1, ctx.count);
    const normalCount = isHl ? Math.max(0, want - 1) : want;
    const fams = UNIT_FAMILIES[course]?.[ctx.unitIdx] ?? UNIT_FAMILIES[course]?.[0] ?? [proofOpen];
    const out = [];
    let guard = 0;
    while (out.length < normalCount && guard++ < 200) {
      const fam = fams[(ctx.unitIdx * 11 + ctx.lessonIdx * 7 + out.length * 5 + guard) % fams.length];
      try {
        const q = fam(ctx);
        if (q) out.push(q);
      } catch (_) {
        // deterministic families should not throw; retry with the next family
      }
    }
    while (out.length < normalCount) out.push(proofOpen(ctx));
    if (isHl) out.push(aiPaper3(ctx));
    return out.slice(0, want);
  };
}

module.exports = {
  ibAaSl1Pack: makeIbPack("ib-aa-sl-1"),
  ibAaSl2Pack: makeIbPack("ib-aa-sl-2"),
  ibAaHl1Pack: makeIbPack("ib-aa-hl-1"),
  ibAaHl2Pack: makeIbPack("ib-aa-hl-2"),
  ibAiSl1Pack: makeIbPack("ib-ai-sl-1"),
  ibAiSl2Pack: makeIbPack("ib-ai-sl-2"),
  ibAiHl1Pack: makeIbPack("ib-ai-hl-1"),
  ibAiHl2Pack: makeIbPack("ib-ai-hl-2"),
};
