// Maths question families for Cambridge IGCSE 0580 / Lower Secondary 0862 / Additional Maths 0606.
// All numeric answers are computed, so markschemes are correct by construction.
const { mcq, numeric, openQ, methodSteps, randInt, pick, rng } = require("./lib.cjs");

const D = ["foundation", "core", "challenge"];

// ---------- helpers ----------
function fmt(n) {
  // trim to 4 s.f. for display
  return Math.abs(n) >= 1000 || (Math.abs(n) < 0.001 && n !== 0)
    ? n.toExponential(3).replace(/\.?0+e/, "e")
    : String(parseFloat(n.toPrecision(4)));
}
function money(n) { return `$\\$${fmt(n)}$`; }
function lat(n) { return `$${fmt(n)}^\\circ$`; }

// Build a numeric question where each part has method+answer steps.
// parts: [{label, prompt, answer, unit?, marks?}]
// methodNotes: optional per-part extra reasoning strings.
function calcQ(ctx, { stem, parts, principles, finalAnswer, commonErrors, difficulty, unordered }) {
  const steps = [];
  const isStructured = parts.length > 1 && parts.every((p) => /^[a-z]$/.test(p.label || ""));
  for (const p of parts) {
    const m = p.marks ?? 1;
    const label = isStructured ? `(${p.label})${p.partName ? " " + p.partName : ""}` : (p.label || "Answer");
    const stepBase = { reasoning: "", marks: 1, markCode: "M" };
    if (m >= 2) {
      steps.push({ reasoning: p.method ?? "Apply the correct method.", working: p.working, marks: 1, markCode: "M" });
      steps.push({ reasoning: p.answerNote ?? "Obtain the correct value.", working: p.ansWorking ?? fmt(p.answer), marks: m - 1, markCode: "A" });
    } else {
      steps.push({ reasoning: p.method ?? p.answerNote ?? "Obtain the correct value.", working: p.working ?? p.ansWorking ?? fmt(p.answer), marks: 1, markCode: "A" });
    }
  }
  return numeric({
    id: "x", difficulty: difficulty ?? pick(ctx.rng, D),
    stem,
    parts: parts.map((p) => ({
      label: isStructured ? `(${p.label})${p.partName ? " " + p.partName : ""}` : (p.label || "Answer"),
      answer: p.answer,
      ...(p.unit ? { unit: p.unit } : {}),
      ...(p.tolerance != null ? { tolerance: p.tolerance } : {}),
    })),
    steps, principles, finalAnswer, commonErrors, unordered,
  });
}
function structQ(ctx, { stem, parts, principles, finalAnswer, commonErrors, difficulty }) {
  // parts: [{label,prompt,marks,method,answerNote,working,ansWorking,answer,unit?}]
  // response numeric parts mirror labels; marks must match.
  return calcQ(ctx, { stem, parts, principles, finalAnswer, commonErrors, difficulty });
}
function mcqQ(ctx, { stem, choices, correct, principle, reasoning, working, finalAnswer, commonErrors, difficulty, totalMarks }) {
  return mcq({
    id: "x", difficulty: difficulty ?? pick(ctx.rng, D), totalMarks: totalMarks ?? 1,
    stem, choices, correct,
    principle: principle ?? { kind: "definition", name: "Recall", statement: "Key fact." },
    reasoning, working, finalAnswer, commonErrors,
  });
}

// =====================================================================
// FAMILY 1: percentages / money
// =====================================================================
function pctDiscount(ctx) {
  const r = ctx.rng;
  const price = pick(r, [20, 24, 30, 36, 40, 45, 48, 50, 56, 60, 64, 72, 80, 90, 96, 120]);
  const pct = pick(r, [5, 10, 15, 20, 25, 30, 35, 40]);
  const sale = price * (1 - pct / 100);
  const saving = price - sale;
  const multi = ctx.unitIdx % 3 === 0;
  if (multi) {
    return calcQ(ctx, {
      stem: `A jacket originally costs ${money(price)}. It is reduced by ${pct}% in a sale.\n\n(a) Work out the sale price.\n(b) Work out the amount saved.`,
      parts: [
        { label: "a", answer: sale, method: `Find ${pct}% of ${money(price)}.`, working: `${price}\\times${pct}/100`, ansWorking: fmt(sale) },
        { label: "b", answer: saving, method: "Subtract the sale price from the original price.", working: `${price}-${fmt(sale)}`, ansWorking: fmt(saving) },
      ],
      principles: [{ kind: "method", name: "Percentage change", statement: "New value = original x (1 ± p/100); saving = original - new." }],
      finalAnswer: `(a) ${money(sale)} (b) ${money(saving)}`,
      commonErrors: ["Adding the percentage instead of subtracting for a discount."],
    });
  }
  return calcQ(ctx, {
    stem: `A phone costs ${money(price)} before a ${pct}% discount. Work out the price the customer pays. Give your answer to the nearest cent.`,
    parts: [{ label: "", prompt: "", answer: sale, method: `Calculate ${pct}% of ${money(price)} and subtract.`, working: `${price}\\times(1-${pct}/100)`, ansWorking: fmt(sale) }],
    principles: [{ kind: "method", name: "Percentage decrease", statement: "Sale price = original x (1 - p/100)." }],
    finalAnswer: money(sale),
  });
}

function pctIncrease(ctx) {
  const r = ctx.rng;
  const base = pick(r, [40, 50, 60, 80, 100, 120, 150, 200, 250, 400]);
  const pct = pick(r, [4, 5, 8, 10, 12, 15, 20, 25]);
  const inc = base * (1 + pct / 100);
  const rise = inc - base;
  return calcQ(ctx, {
    stem: `The population of a town was ${base} thousand in 2020. It increased by ${pct}% by 2024.\n\n(a) Find the population in 2024.\n(b) Find the increase in thousands.`,
    parts: [
      { label: "a", answer: inc, method: `Multiply by (1 + ${pct}/100).`, working: `${base}\\times${1 + pct / 100}`, ansWorking: fmt(inc) },
      { label: "b", answer: rise, method: "Subtract the original population.", working: `${fmt(inc)}-${base}`, ansWorking: fmt(rise) },
    ],
    principles: [{ kind: "method", name: "Percentage increase", statement: "New value = original x (1 + p/100)." }],
    finalAnswer: `(a) ${fmt(inc)} thousand (b) ${fmt(rise)} thousand`,
  });
}

function reversePct(ctx) {
  const r = ctx.rng;
  const pct = pick(r, [10, 15, 20, 25, 30, 40, 50]);
  const finalV = pick(r, [45, 54, 60, 63, 68, 72, 75, 80, 84, 90, 96, 105, 108, 120, 126, 135, 144, 150, 160, 180, 200, 210, 240, 250, 270, 300, 350, 400]);
  // ensure original is clean
  const denom = 100 - pct;
  if (finalV * 100 % denom !== 0) return pctDiscount(ctx);
  const orig = finalV * 100 / denom;
  if (!Number.isInteger(orig) || orig > 2000) return pctDiscount(ctx);
  return calcQ(ctx, {
    stem: `After a ${pct}% discount, a coat costs ${money(finalV)}. Work out the original price of the coat.`,
    parts: [{ label: "", prompt: "", answer: orig, method: `The sale price is ${100 - pct}% of the original, so divide by ${100 - pct}/100.`, working: `${finalV}\\div${(100 - pct) / 100}`, ansWorking: fmt(orig) }],
    principles: [{ kind: "method", name: "Reverse percentage", statement: "Final = original x (1 - p/100), so original = final / (1 - p/100)." }],
    finalAnswer: money(orig),
    commonErrors: ["Subtracting ${pct}% of the sale price instead of reversing the percentage."],
  });
}

function profitLoss(ctx) {
  const r = ctx.rng;
  const cost = pick(r, [12, 15, 18, 20, 24, 25, 30, 32, 36, 40, 45, 48, 50, 60]);
  const pct = pick(r, [10, 15, 20, 25, 30, 40, 50]);
  const sell = cost * (1 + pct / 100);
  const profit = sell - cost;
  return calcQ(ctx, {
    stem: `A trader buys a toy for ${money(cost)} and sells it for ${money(sell)}.\n\n(a) Work out the profit made.\n(b) Express the profit as a percentage of the cost price.`,
    parts: [
      { label: "a", answer: profit, method: "Subtract cost from selling price.", working: `${fmt(sell)}-${cost}`, ansWorking: fmt(profit) },
      { label: "b", answer: pct, method: "Divide profit by cost and multiply by 100.", working: `${fmt(profit)}/${cost}\\times100`, ansWorking: `${pct}` },
    ],
    principles: [{ kind: "method", name: "Profit percentage", statement: "Profit % = (profit / cost) x 100." }],
    finalAnswer: `(a) ${money(profit)} (b) ${pct}%`,
  });
}

function simpleInterest(ctx) {
  const r = ctx.rng;
  const P = pick(r, [500, 800, 1000, 1200, 1500, 2000, 2500, 3000, 4000, 5000]);
  const rate = pick(r, [2, 3, 4, 5, 6, 8]);
  const years = pick(r, [1, 2, 3, 4, 5]);
  const interest = P * rate * years / 100;
  const total = P + interest;
  return calcQ(ctx, {
    stem: `${money(P)} is invested at ${rate}% simple interest per year.\n\n(a) Work out the interest earned after ${years} year${years > 1 ? "s" : ""}.\n(b) Work out the total value of the investment.`,
    parts: [
      { label: "a", answer: interest, method: `Use I = PRT/100.`, working: `${P}\\times${rate}\\times${years}/100`, ansWorking: fmt(interest) },
      { label: "b", answer: total, method: "Add the interest to the principal.", working: `${P}+${fmt(interest)}`, ansWorking: fmt(total) },
    ],
    principles: [{ kind: "formula", name: "Simple interest", statement: "$I=\\frac{PRT}{100}$ where P is principal, R rate, T time in years." }],
    finalAnswer: `(a) ${money(interest)} (b) ${money(total)}`,
  });
}

// =====================================================================
// FAMILY 2: ratio / proportion / rates
// =====================================================================
function ratioShare(ctx) {
  const r = ctx.rng;
  const a = randInt(r, 1, 5), b = randInt(r, 1, 5), c = randInt(r, 1, 4);
  if (a === b && b === c) b = a + 1;
  const total = pick(r, [120, 180, 240, 300, 360, 420, 480, 540, 600, 720, 840, 900, 960, 1200]);
  const sum = a + b + c;
  if (total % sum !== 0) return ratioShare(ctx);
  const unit = total / sum;
  const shares = [a * unit, b * unit, c * unit];
  const items = pick(r, [["red counters", "blue counters", "green counters"], ["Ali", "Ben", "Chen"], ["cats", "dogs", "rabbits"], ["pencils", "rulers", "erasers"]]);
  return calcQ(ctx, {
    stem: `The ratio of ${items[0]} to ${items[1]} to ${items[2]} is $${a}:${b}:${c}$. There are ${total} items altogether.\n\n(a) Find the number of ${items[0]}.\n(b) Find the number of ${items[2]}.`,
    parts: [
      { label: "a", answer: shares[0], method: `Divide ${total} by ${sum} to find one share.`, working: `${total}/${sum}`, ansWorking: fmt(shares[0]) },
      { label: "b", answer: shares[2], method: `Multiply one share by ${c}.`, working: `${fmt(unit)}\\times${c}`, ansWorking: fmt(shares[2]) },
    ],
    principles: [{ kind: "method", name: "Sharing a ratio", statement: "Total parts = sum of ratio terms; one part = total / sum." }],
    finalAnswer: `(a) ${fmt(shares[0])} (b) ${fmt(shares[2])}`,
  });
}

function directProportion(ctx) {
  const r = ctx.rng;
  const rate = pick(r, [3, 4, 5, 6, 7, 8, 9, 10, 12, 15]);
  const t1 = randInt(r, 2, 9);
  const d1 = rate * t1;
  const t2 = pick(r, [randInt(r, 10, 20), randInt(r, 21, 40)]);
  const d2 = rate * t2;
  const thing = pick(r, [["a car", "km/h", "km"], ["a cyclist", "km/h", "km"], ["a walker", "km/h", "km"], ["a factory", "widgets per hour", "widgets"], ["a tap", "litres per minute", "litres"]]);
  return calcQ(ctx, {
    stem: `${thing[0][0].toUpperCase() + thing[0].slice(1)} travels at a constant ${thing[1]} of ${rate}. In ${t1} hours it covers ${d1} ${thing[2]}.\n\n(a) How far does it travel in ${t2} hours?\n(b) How long does it take to travel ${d2 * 2} ${thing[2]}?`,
    parts: [
      { label: "a", answer: d2, method: "Use distance = speed x time.", working: `${rate}\\times${t2}`, ansWorking: fmt(d2) },
      { label: "b", answer: d2 * 2 / rate, method: "Divide distance by speed.", working: `${d2 * 2}/${rate}`, ansWorking: fmt(d2 * 2 / rate) },
    ],
    principles: [{ kind: "formula", name: "Distance-speed-time", statement: "$d=st$ (distance = speed x time)." }],
    finalAnswer: `(a) ${fmt(d2)} ${thing[2]} (b) ${fmt(d2 * 2 / rate)} hours`,
  });
}

function unitConversion(ctx) {
  const r = ctx.rng;
  const convs = [
    { from: "km", to: "m", f: 1000, item: "road" },
    { from: "m", to: "cm", f: 100, item: "rope" },
    { from: "kg", to: "g", f: 1000, item: "flour" },
    { from: "l", to: "ml", f: 1000, item: "drink" },
    { from: "hours", to: "minutes", f: 60, item: "film" },
    { from: "days", to: "hours", f: 24, item: "trip" },
  ];
  const c = pick(r, convs);
  const v = randInt(r, 2, 40);
  const ans = v * c.f;
  const multi = ctx.unitIdx % 2 === 1;
  if (multi) {
    return calcQ(ctx, {
      stem: `A ${c.item} measures ${v} ${c.from}.\n\n(a) Convert this to ${c.to}.\n(b) A second ${c.item} is ${v * 2} ${c.from}. What is its length in ${c.to}?`,
      parts: [
        { label: "a", answer: ans, method: `Multiply by ${c.f}.`, working: `${v}\\times${c.f}`, ansWorking: fmt(ans) },
        { label: "b", answer: ans * 2, method: `Multiply ${v * 2} by ${c.f}.`, working: `${v * 2}\\times${c.f}`, ansWorking: fmt(ans * 2) },
      ],
      principles: [{ kind: "method", name: "Unit conversion", statement: `1 ${c.from} = ${c.f} ${c.to}.` }],
      finalAnswer: `(a) ${fmt(ans)} ${c.to} (b) ${fmt(ans * 2)} ${c.to}`,
    });
  }
  return calcQ(ctx, {
    stem: `A ${c.item} measures ${v} ${c.from}. Convert this measurement to ${c.to}.`,
    parts: [{ label: "", prompt: "", answer: ans, method: `Multiply by ${c.f}.`, working: `${v}\\times${c.f}`, ansWorking: fmt(ans) }],
    principles: [{ kind: "method", name: "Unit conversion", statement: `1 ${c.from} = ${c.f} ${c.to}.` }],
    finalAnswer: `${fmt(ans)} ${c.to}`,
  });
}

// =====================================================================
// FAMILY 3: number & algebra
// =====================================================================
function indices(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const b = pick(r, [2, 3, 5, 7]);
    const m = randInt(r, 2, 4), n = randInt(r, 1, 3);
    const ans = Math.pow(b, m + n);
    return calcQ(ctx, {
      stem: `Evaluate $${b}^{${m}}\\times${b}^{${n}}$ without using a calculator.`,
      parts: [{ label: "", prompt: "", answer: ans, method: `Add the indices: $${b}^{${m+n}}$.`, working: `${b}^{${m+n}}`, ansWorking: fmt(ans) }],
      principles: [{ kind: "law", name: "Index laws", statement: "$a^m\\times a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$." }],
      finalAnswer: fmt(ans),
    });
  }
  if (kind === 1) {
    const b = pick(r, [2, 3, 5, 10]);
    const e = randInt(r, 2, 4);
    const ans = Math.pow(b, e);
    return calcQ(ctx, {
      stem: `Write $${ans}$ as a power of ${b}.`,
      parts: [{ label: "", prompt: "", answer: e, method: `Find $e$ such that $${b}^e=${ans}$.`, working: `${b}^e=${ans}`, ansWorking: `${e}` }],
      principles: [{ kind: "definition", name: "Indices", statement: "$a^n$ means $a$ multiplied by itself $n$ times." }],
      finalAnswer: `${b}^{${e}}`,
    });
  }
  const base = pick(r, [2, 3, 5, 7]);
  const k = randInt(r, 2, 3), j = randInt(r, 2, 3);
  const ans = Math.pow(base, k * j);
  return calcQ(ctx, {
    stem: `Evaluate $(${base}^{${k}})^{${j}}$ without using a calculator.`,
    parts: [{ label: "", prompt: "", answer: ans, method: "Multiply the indices, then evaluate.", working: `${base}^{${k * j}}`, ansWorking: fmt(ans) }],
    principles: [{ kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$." }],
    finalAnswer: fmt(ans),
  });
}

function standardForm(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = randInt(r, 12, 99), b = randInt(r, 1, 9);
    const ans = a * Math.pow(10, b);
    return calcQ(ctx, {
      stem: `Write $${a}\\times10^{${b}}$ as an ordinary number.`,
      parts: [{ label: "", prompt: "", answer: ans, method: `Move the decimal point ${b} places.`, working: `${a}\\times10^{${b}}`, ansWorking: fmt(ans) }],
      principles: [{ kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$." }],
      finalAnswer: fmt(ans),
    });
  }
  if (kind === 1) {
    const N = pick(r, [45000, 6200000, 380000, 75000000, 2400000, 91000000, 560000, 8300000]);
    const n = N.toString().length - 1;
    const a = N / Math.pow(10, n);
    return calcQ(ctx, {
      stem: `Write ${N} in standard form $a\\times10^{n}$. Find the value of $n$.`,
      parts: [{ label: "", prompt: "", answer: n, method: "Count the powers of 10 needed.", working: `${N}=${a}\\times10^{${n}}`, ansWorking: `${n}` }],
      principles: [{ kind: "definition", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$." }],
      finalAnswer: `${a}\\times10^{${n}}`,
    });
  }
  const a1 = randInt(r, 2, 9), a2 = randInt(r, 2, 9);
  const e = randInt(r, 2, 5);
  const ans = (a1 + a2) * Math.pow(10, e);
  return calcQ(ctx, {
    stem: `Evaluate $(${a1}\\times10^{${e}})+(${a2}\\times10^{${e}})$ giving your answer in standard form.`,
    parts: [{ label: "", prompt: "", answer: (a1 + a2) * Math.pow(10, e), method: "Factor out $10^{${e}}$.", working: `(${a1}+${a2})\\times10^{${e}}`, ansWorking: fmt(ans) }],
    principles: [{ kind: "law", name: "Standard form", statement: "Add the coefficients when the powers of 10 match." }],
    finalAnswer: `${a1 + a2}\\times10^{${e}}`,
  });
}

function linearEquation(ctx) {
  const r = ctx.rng;
  const a = randInt(r, 2, 9), b = randInt(r, 1, 15), c = randInt(r, 2, 9), d = randInt(r, 1, 20);
  // a x + b = c x + d  =>  x = (d-b)/(a-c); ensure a!=c and integer or simple fraction
  const denom = a - c;
  if (denom === 0) return linearEquation(ctx);
  const num = d - b;
  const x = num / denom;
  const frac = Math.abs(num) <= 20 && Math.abs(denom) <= 12;
  return calcQ(ctx, {
    stem: `Solve $${a}x+${b}=${c}x+${d}$.`,
    parts: [{ label: "", prompt: "", answer: x, tolerance: 0.001, method: "Collect $x$ terms on one side and constants on the other.", working: `${a}x-${c}x=${d}-${b}`, ansWorking: frac ? `x=${fmt(x)}` : `x=${num}/${denom}` }],
    principles: [{ kind: "method", name: "Linear equations", statement: "Isolate the variable by inverse operations." }],
    finalAnswer: `x=${fmt(x)}`,
    commonErrors: ["Sign errors when moving terms across the equals sign."],
  });
}

function simultaneous(ctx) {
  const r = ctx.rng;
  const x0 = randInt(r, -4, 6), y0 = randInt(r, -4, 6);
  const a1 = randInt(r, 1, 4), b1 = randInt(r, 1, 4), a2 = randInt(r, 1, 4), b2 = randInt(r, 1, 4);
  if (a1 * b2 === a2 * b1) return simultaneous(ctx);
  const c1 = a1 * x0 + b1 * y0, c2 = a2 * x0 + b2 * y0;
  return calcQ(ctx, {
    stem: `Solve the simultaneous equations\n\n$${a1}x+${b1}y=${c1}$\n$${a2}x+${b2}y=${c2}$`,
    parts: [
      { label: "a", prompt: "Find $x$.", answer: x0, method: "Eliminate one variable (substitution or elimination).", working: "eliminate $y$", ansWorking: `x=${x0}` },
      { label: "b", prompt: "Find $y$.", answer: y0, method: "Substitute back into either equation.", working: "substitute", ansWorking: `y=${y0}` },
    ],
    principles: [{ kind: "method", name: "Simultaneous equations", statement: "Eliminate one variable, solve, then back-substitute." }],
    finalAnswer: `x=${x0}, y=${y0}`,
    commonErrors: ["Arithmetic slips in elimination; always check in both equations."],
  });
}

function quadraticSolve(ctx) {
  const r = ctx.rng;
  const p = randInt(r, 1, 5), q = randInt(r, 1, 5);
  const s = randInt(r, -(p + q) + 1, p + q - 1);
  // (x-p)(x-q)=x^2-(p+q)x+pq ; want x^2 + s x + pq with s=-(p+q)
  const b = -(p + q), c = p * q;
  const roots = [p, q];
  return calcQ(ctx, {
    stem: `Solve $x^2${b >= 0 ? "+" : ""}${b}x${c >= 0 ? "+" : ""}${c}=0$.`,
    parts: [
      { label: "a", prompt: "Find the first solution.", answer: roots[0], method: "Factorise or use the quadratic formula.", working: `(x-${p})(x-${q})=0`, ansWorking: `x=${roots[0]}` },
      { label: "b", prompt: "Find the second solution.", answer: roots[1], method: "Use the second factor.", working: `x-${q}=0`, ansWorking: `x=${roots[1]}` },
    ],
    principles: [{ kind: "formula", name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$" }],
    finalAnswer: `x=${roots[0]} \\text{ or } x=${roots[1]}`,
    commonErrors: ["Forgetting the $\\pm$ — quadratics have two roots."],
    unordered: true,
  });
}

function mcqShuffle(ctx, correctText, distractors, rest) {
  const choices = shuffle(ctx.rng, [correctText, ...distractors]);
  return mcqQ(ctx, { ...rest, choices, correct: choices.indexOf(correctText) });
}

function factorise(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const g = pick(r, [2, 3, 5]);
    const b = randInt(r, 2, 6), k = pick(r, [1, 2]);
    return mcqShuffle(ctx, `${g}(${b}x+${k}y)`, [
      `${g}(${b * g}x+${k}y)`,
      `${g}x(${b}+${k}y)`,
      `${b}(${g}x+${g * k}y)`,
    ], {
      stem: `Factorise completely: $${g * b}x+${g * k}y$`,
      principle: { kind: "method", name: "Factorising", statement: "Take out the highest common factor of all terms." },
      reasoning: "Find the HCF of coefficients.",
      working: `HCF = ${g}`,
      commonErrors: ["Missing a common factor or splitting incorrectly."],
    });
  }
  if (kind === 1) {
    const p = randInt(r, 2, 6), q = randInt(r, 2, 6);
    const b = p + q, c = p * q;
    return mcqShuffle(ctx, `(x+${p})(x+${q})`, [
      `(x+${p})(x-${q})`,
      `(x-${p})(x-${q})`,
      `(x+${p + q})(x+1)`,
    ], {
      stem: `Which is the factorised form of $x^2+${b}x+${c}$?`,
      principle: { kind: "method", name: "Factorising quadratics", statement: "Find two numbers that multiply to $c$ and add to $b$." },
      reasoning: `Numbers ${p} and ${q} multiply to ${c} and add to ${b}.`,
      working: `${p}+${q}=${b},\\ ${p}\\times${q}=${c}`,
    });
  }
  const k = randInt(r, 2, 9);
  return mcqShuffle(ctx, `x(x+${k})`, [`x(x-${k})`, `(x+${k})^2`, `x^2(${k}+x)`], {
    stem: `Factorise $x^2+${k}x$ completely.`,
    principle: { kind: "method", name: "Factorising", statement: "Take out the common factor $x$." },
    reasoning: "Both terms contain $x$.",
    working: `x(x+${k})`,
  });
}

function indicesEquation(ctx) {
  const r = ctx.rng;
  const b = pick(r, [2, 3, 5]);
  const m = randInt(r, 1, 3);
  const n = randInt(r, 1, 3);
  const ans = m + n;
  return calcQ(ctx, {
    stem: `Solve $${b}^{x}=${b ** (m + n)}$ for $x$.`,
    parts: [{ label: "", prompt: "", answer: ans, method: "Equate the indices (same base).", working: `x=${m}+${n}`, ansWorking: `${ans}` }],
    principles: [{ kind: "law", name: "Indices", statement: "If $a^x=a^n$ then $x=n$." }],
    finalAnswer: `x=${ans}`,
  });
}

// =====================================================================
// FAMILY 4: geometry & mensuration
// =====================================================================
function pythagoras(ctx) {
  const r = ctx.rng;
  const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [7, 24, 25], [9, 12, 15], [12, 16, 20]];
  const [a, b, c] = pick(r, triples);
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    return calcQ(ctx, {
      stem: `A right-angled triangle has perpendicular sides of ${a} cm and ${b} cm. Work out the length of the hypotenuse.`,
      parts: [{ label: "", prompt: "", answer: c, method: `Use $c^2=a^2+b^2$: $\\sqrt{${a}^2+${b}^2}$.`, working: `\\sqrt{${a * a}+${b * b}}`, ansWorking: `${c}` }],
      principles: [{ kind: "theorem", name: "Pythagoras", statement: "$a^2+b^2=c^2$ for a right-angled triangle." }],
      finalAnswer: `${c} cm`,
    });
  }
  if (kind === 1) {
    return calcQ(ctx, {
      stem: `A right-angled triangle has hypotenuse ${c} cm and one side ${a} cm. Work out the length of the other side.`,
      parts: [{ label: "", prompt: "", answer: b, method: `Use $b^2=c^2-a^2$: $\\sqrt{${c}^2-${a}^2}$.`, working: `\\sqrt{${c * c}-${a * a}}`, ansWorking: `${b}` }],
      principles: [{ kind: "theorem", name: "Pythagoras", statement: "$a^2+b^2=c^2$ for a right-angled triangle." }],
      finalAnswer: `${b} cm`,
    });
  }
  return calcQ(ctx, {
    stem: `Two points $A$ and $B$ have coordinates $(${randInt(r, -4, 0)}, ${randInt(r, -4, 0)})$ and $(${randInt(r, 3, 6)}, ${randInt(r, 3, 6)})$. Work out the distance $AB$.`,
    parts: [{ label: "", prompt: "", answer: c, method: "Use Pythagoras on the coordinate differences.", working: "distance formula", ansWorking: `${c}` }],
    principles: [{ kind: "theorem", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" }],
    finalAnswer: `${c} units`,
  });
}

function trigValues(ctx) {
  const r = ctx.rng;
  const vals = [[30, 0.5], [45, 0.7071], [60, 0.8660]];
  const [ang, v] = pick(r, vals);
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const sinVals = { 30: "$\\frac{1}{2}$", 45: "$\\frac{\\sqrt{2}}{2}$", 60: "$\\frac{\\sqrt{3}}{2}$" };
    return mcqShuffle(ctx, sinVals[ang], [...Object.values(sinVals).filter((v) => v !== sinVals[ang]), "$\\frac{\\sqrt{3}}{3}$"], {
      stem: `What is the exact value of $\\sin ${ang}^\\circ$?`,
      principle: { kind: "definition", name: "Special angles", statement: "$\\sin 30^\\circ=\\frac12$, $\\sin 45^\\circ=\\frac{\\sqrt2}{2}$, $\\sin 60^\\circ=\\frac{\\sqrt3}{2}$." },
      reasoning: "Recall the exact trigonometric values.",
      working: `\\sin ${ang}^\\circ`,
    });
  }
  if (kind === 1) {
    const opp = pick(r, [3, 4, 5, 6, 8, 10, 12]);
    const hyp = opp * 2;
    const ans = 0.5;
    return calcQ(ctx, {
      stem: `In a right-angled triangle, the side opposite angle $\\theta$ is ${opp} cm and the hypotenuse is ${hyp} cm. Work out $\\sin\\theta$.`,
      parts: [{ label: "", prompt: "", answer: ans, method: "$\\sin\\theta=\\text{opposite}/\\text{hypotenuse}$.", working: `${opp}/${hyp}`, ansWorking: "0.5" }],
      principles: [{ kind: "definition", name: "SOH CAH TOA", statement: "$\\sin\\theta=\\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta=\\frac{\\text{adj}}{\\text{hyp}}$, $\\tan\\theta=\\frac{\\text{opp}}{\\text{adj}}$." }],
      finalAnswer: "0.5",
    });
  }
  const adj = randInt(r, 3, 12);
  const opp = pick(r, [adj, adj * 2, Math.round(adj * 1.5)]);
  const theta = Math.atan(opp / adj) * 180 / Math.PI;
  return calcQ(ctx, {
    stem: `A ramp rises ${opp} cm vertically over a horizontal distance of ${adj} cm. Work out the angle the ramp makes with the horizontal, to the nearest degree.`,
    parts: [{ label: "", prompt: "", answer: theta, tolerance: 0.6, method: "Use $\\tan\\theta=\\text{opp}/\\text{adj}$ then inverse tangent.", working: `\\tan\\theta=${opp}/${adj}`, ansWorking: `${fmt(theta)}` }],
    principles: [{ kind: "definition", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$." }],
    finalAnswer: `${fmt(theta)}^\\circ`,
    commonErrors: ["Using sine or cosine instead of tangent."],
  });
}

function polygonAngles(ctx) {
  const r = ctx.rng;
  const n = pick(r, [5, 6, 8, 10, 12]);
  const interior = (n - 2) * 180 / n;
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    return calcQ(ctx, {
      stem: `Find the size of each interior angle of a regular ${n}-sided polygon.`,
      parts: [{ label: "", prompt: "", answer: interior, method: `Interior angle = (n-2) x 180 / n.`, working: `(${n}-2)\\times180/${n}`, ansWorking: fmt(interior) }],
      principles: [{ kind: "formula", name: "Polygon angles", statement: "Sum of interior angles = $(n-2)\\times180^\\circ$; each interior angle of a regular polygon = sum / n." }],
      finalAnswer: `${fmt(interior)}^\\circ`,
    });
  }
  const ext = 360 / n;
  return calcQ(ctx, {
    stem: `Find the size of each exterior angle of a regular ${n}-sided polygon.`,
    parts: [{ label: "", prompt: "", answer: ext, method: "Exterior angles sum to $360^\\circ$.", working: `360/${n}`, ansWorking: fmt(ext) }],
    principles: [{ kind: "formula", name: "Exterior angles", statement: "Exterior angles of any polygon sum to $360^\\circ$." }],
    finalAnswer: `${fmt(ext)}^\\circ`,
  });
}

function circleTheorem(ctx) {
  const r = ctx.rng;
  const facts = [
    { q: "The angle at the centre of a circle is twice the angle at the circumference subtended by the same arc.", a: "Angle at centre = 2 x angle at circumference", w: "central = 2 x inscribed" },
    { q: "Angles in the same segment of a circle are equal.", a: "Angles in the same segment are equal", w: "same segment => equal" },
    { q: "The angle in a semicircle is a right angle (90°).", a: "90 degrees", w: "semicircle => 90" },
    { q: "The tangent to a circle is perpendicular to the radius at the point of contact.", a: "90 degrees", w: "tangent ⟂ radius" },
    { q: "Opposite angles of a cyclic quadrilateral sum to 180°.", a: "180 degrees", w: "cyclic quad: opposite sum 180" },
  ];
  const f = pick(r, facts);
  const ang = pick(r, [36, 40, 45, 50, 55, 60, 65, 70]);
  return mcqShuffle(ctx, `${ang * 2}° at the centre`, [`${ang / 2}°`, `${180 - ang}°`, `${90 - ang}°`], {
    stem: `${f.q}\n\nA diagram shows an angle of ${ang}° at the circumference. Which value is consistent with the theorem?`,
    principle: { kind: "theorem", name: "Circle theorem", statement: f.a },
    reasoning: f.w,
    working: f.w,
  });
}

function areaPerimeter(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 3);
  if (kind === 0) {
    const l = randInt(r, 5, 25), w = randInt(r, 3, 15);
    return calcQ(ctx, {
      stem: `A rectangle has length ${l} cm and width ${w} cm.\n\n(a) Find its area.\n(b) Find its perimeter.`,
      parts: [
        { label: "a", answer: l * w, method: "Area = length x width.", working: `${l}\\times${w}`, ansWorking: `${l * w}` },
        { label: "b", answer: 2 * (l + w), method: "Perimeter = 2(length + width).", working: `2(${l}+${w})`, ansWorking: `${2 * (l + w)}` },
      ],
      principles: [{ kind: "formula", name: "Rectangle", statement: "Area $=lw$, perimeter $=2(l+w)$." }],
      finalAnswer: `(a) ${l * w} cm² (b) ${2 * (l + w)} cm`,
    });
  }
  if (kind === 1) {
    const b = randInt(r, 6, 20), h = randInt(r, 4, 15);
    return calcQ(ctx, {
      stem: `A triangle has base ${b} cm and perpendicular height ${h} cm. Work out its area.`,
      parts: [{ label: "", prompt: "", answer: b * h / 2, method: "Area = ½ x base x height.", working: `\\frac{1}{2}\\times${b}\\times${h}`, ansWorking: fmt(b * h / 2) }],
      principles: [{ kind: "formula", name: "Triangle area", statement: "$A=\\frac12bh$" }],
      finalAnswer: `${fmt(b * h / 2)} cm²`,
    });
  }
  if (kind === 2) {
    const r0 = randInt(r, 3, 12);
    return calcQ(ctx, {
      stem: `A circle has radius ${r0} cm. Work out its area, giving your answer in terms of $\\pi$.`,
      parts: [{ label: "", prompt: "", answer: Math.PI * r0 * r0, tolerance: 0.01, method: "Area = $\\pi r^2$.", working: `\\pi\\times${r0}^2`, ansWorking: `${r0 * r0}\\pi` }],
      principles: [{ kind: "formula", name: "Circle area", statement: "$A=\\pi r^2$" }],
      finalAnswer: `$${r0 * r0}\\pi$ cm²`,
    });
  }
  const R = randInt(r, 4, 15);
  return calcQ(ctx, {
    stem: `A circular pond has diameter ${2 * R} m. Work out its circumference, using $\\pi=3.14$.`,
    parts: [{ label: "", prompt: "", answer: 2 * Math.PI * R, tolerance: 0.05, method: "Circumference = $\\pi d = 2\\pi r$.", working: `3.14\\times${2 * R}`, ansWorking: fmt(2 * Math.PI * R) }],
    principles: [{ kind: "formula", name: "Circumference", statement: "$C=\\pi d=2\\pi r$" }],
    finalAnswer: `${fmt(2 * Math.PI * R)} m`,
  });
}

function volumeSurface(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const l = randInt(r, 3, 12), w = randInt(r, 2, 8), h = randInt(r, 2, 10);
    return calcQ(ctx, {
      stem: `A cuboid measures ${l} cm $\\times$ ${w} cm $\\times$ ${h} cm.\n\n(a) Work out its volume.\n(b) Work out its total surface area.`,
      parts: [
        { label: "a", answer: l * w * h, method: "Volume = length x width x height.", working: `${l}\\times${w}\\times${h}`, ansWorking: `${l * w * h}` },
        { label: "b", answer: 2 * (l * w + l * h + w * h), method: "Surface area = $2(lw+lh+wh)$.", working: `2(${l * w}+${l * h}+${w * h})`, ansWorking: `${2 * (l * w + l * h + w * h)}` },
      ],
      principles: [{ kind: "formula", name: "Cuboid", statement: "Volume $=lwh$; surface area $=2(lw+lh+wh)$." }],
      finalAnswer: `(a) ${l * w * h} cm³ (b) ${2 * (l * w + l * h + w * h)} cm²`,
    });
  }
  if (kind === 1) {
    const rad = randInt(r, 2, 8);
    const hgt = randInt(r, 3, 12);
    const v = Math.PI * rad * rad * hgt;
    return calcQ(ctx, {
      stem: `A cylinder has radius ${rad} cm and height ${hgt} cm. Work out its volume, giving your answer in terms of $\\pi$.`,
      parts: [{ label: "", prompt: "", answer: v, tolerance: 0.01, method: "Volume = $\\pi r^2 h$.", working: `\\pi\\times${rad}^2\\times${hgt}`, ansWorking: `${rad * rad * hgt}\\pi` }],
      principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$" }],
      finalAnswer: `$${rad * rad * hgt}\\pi$ cm³`,
    });
  }
  const R = randInt(r, 3, 10);
  const v = 4 / 3 * Math.PI * R ** 3;
  return calcQ(ctx, {
    stem: `A sphere has radius ${R} cm. Work out its volume, giving your answer in terms of $\\pi$ and to 3 significant figures if needed.`,
    parts: [{ label: "", prompt: "", answer: v, tolerance: 0.5, method: "Volume = $\\frac43\\pi r^3$.", working: `\\frac{4}{3}\\pi\\times${R}^3`, ansWorking: `${fmt(v)}` }],
    principles: [{ kind: "formula", name: "Sphere volume", statement: "$V=\\frac43\\pi r^3$" }],
    finalAnswer: `${fmt(v)} cm³`,
  });
}

function bearings(ctx) {
  const r = ctx.rng;
  const bearings = [030, 045, 060, 090, 120, 135, 150, 210, 225, 240, 300, 315];
  const b1 = pick(r, bearings), b2 = pick(r, bearings);
  if (b1 === b2) return bearings(ctx);
  const diff = Math.abs(b1 - b2);
  const angle = diff > 180 ? 360 - diff : diff;
  return calcQ(ctx, {
    stem: `A ship sails on a bearing of ${String(b1).padStart(3, "0")}° from port. It then changes course to a bearing of ${String(b2).padStart(3, "0")}°.\n\n(a) Work out the angle between the two courses.`,
    parts: [{ label: "a", answer: angle, method: "Find the smaller angle between the bearings.", working: `|${b1}-${b2}|`, ansWorking: `${angle}` }],
    principles: [{ kind: "definition", name: "Bearings", statement: "Bearings are measured clockwise from north; the angle between two bearings is the smaller difference." }],
    finalAnswer: `${angle}°`,
  });
}

// =====================================================================
// FAMILY 5: speed / distance / time
// =====================================================================
function speedDistance(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const s = pick(r, [40, 50, 60, 70, 80]);
    const t = randInt(r, 2, 5);
    return calcQ(ctx, {
      stem: `A car travels at a steady ${s} km/h for ${t} hours. Work out the distance travelled.`,
      parts: [{ label: "", prompt: "", answer: s * t, method: "Distance = speed x time.", working: `${s}\\times${t}`, ansWorking: `${s * t}` }],
      principles: [{ kind: "formula", name: "Distance-speed-time", statement: "$d=st$" }],
      finalAnswer: `${s * t} km`,
    });
  }
  if (kind === 1) {
    const d = pick(r, [120, 150, 180, 200, 240, 300]);
    const s = pick(r, [40, 50, 60, 75, 80]);
    if (d % s) return speedDistance(ctx);
    const t = d / s;
    return calcQ(ctx, {
      stem: `A train travels ${d} km at an average speed of ${s} km/h. Work out the time taken, in hours.`,
      parts: [{ label: "", prompt: "", answer: t, method: "Time = distance / speed.", working: `${d}/${s}`, ansWorking: `${t}` }],
      principles: [{ kind: "formula", name: "Distance-speed-time", statement: "$t=d/s$" }],
      finalAnswer: `${t} hours`,
    });
  }
  const d = pick(r, [100, 120, 150, 180, 200, 240, 300, 360]);
  const t = pick(r, [2, 2.5, 3, 4, 5]);
  return calcQ(ctx, {
    stem: `A cyclist covers ${d} km in ${t} hours. Work out the average speed in km/h.`,
    parts: [{ label: "", prompt: "", answer: d / t, method: "Speed = distance / time.", working: `${d}/${t}`, ansWorking: fmt(d / t) }],
    principles: [{ kind: "formula", name: "Distance-speed-time", statement: "$s=d/t$" }],
    finalAnswer: `${fmt(d / t)} km/h`,
  });
}

// =====================================================================
// FAMILY 6: probability & statistics
// =====================================================================
function probability(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const bad = randInt(r, 1, 5), tot = randInt(r, 8, 20);
    const good = tot - bad;
    return calcQ(ctx, {
      stem: `A bag contains ${tot} counters: ${good} are red and ${bad} are blue. One counter is picked at random. Work out the probability that it is blue. Give your answer as a fraction in its lowest terms.`,
      parts: [{ label: "", prompt: "", answer: bad / tot, tolerance: 0.0001, method: "Probability = favourable / total, then simplify.", working: `${bad}/${tot}`, ansWorking: `${bad}/${tot}` }],
      principles: [{ kind: "definition", name: "Probability", statement: "$P(\\text{event})=\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$" }],
      finalAnswer: `${bad}/${tot}`,
    });
  }
  if (kind === 1) {
    const die = pick(r, [4, 6, 8]);
    const target = randInt(r, 1, die);
    return calcQ(ctx, {
      stem: `A fair ${die}-sided dice is rolled once. Work out the probability of rolling a number greater than ${target}. Give your answer as a fraction in its lowest terms.`,
      parts: [{ label: "", prompt: "", answer: (die - target) / die, tolerance: 0.0001, method: `Count outcomes $>${target}$: ${die - target} of ${die}.`, working: `${die - target}/${die}`, ansWorking: `${die - target}/${die}` }],
      principles: [{ kind: "definition", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$" }],
      finalAnswer: `${die - target}/${die}`,
    });
  }
  const cards = pick(r, [["a king", 4, 52], ["a heart", 13, 52], ["a face card", 12, 52], ["a diamond", 13, 52]]);
  const [name, fav, tot] = cards;
  return calcQ(ctx, {
    stem: `A card is chosen at random from a standard pack of 52 playing cards. Work out the probability of choosing ${name}. Give your answer as a fraction in its lowest terms.`,
    parts: [{ label: "", prompt: "", answer: fav / tot, tolerance: 0.0001, method: `${fav} favourable cards out of ${tot}.`, working: `${fav}/${tot}`, ansWorking: `${fav}/${tot}` }],
    principles: [{ kind: "definition", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$" }],
    finalAnswer: `${fav}/${tot}`,
  });
}

function meanMedian(ctx) {
  const r = ctx.rng;
  const n = pick(r, [5, 6, 7]);
  const data = Array.from({ length: n }, () => randInt(r, 2, 30)).sort((a, b) => a - b);
  const mean = data.reduce((s, x) => s + x, 0) / n;
  const median = n % 2 ? data[(n - 1) / 2] : (data[n / 2 - 1] + data[n / 2]) / 2;
  const mode = data.find((x, i) => data.indexOf(x) !== data.lastIndexOf(x)) ?? data[0];
  const range = data[n - 1] - data[0];
  const hasMode = new Set(data).size < data.length;
  const kind = hasMode ? randInt(r, 0, 2) : randInt(r, 0, 1);
  if (kind === 0) {
    return calcQ(ctx, {
      stem: `The following numbers are the scores in a game: ${data.join(", ")}.\n\n(a) Work out the mean score.\n(b) Work out the range.`,
      parts: [
        { label: "a", answer: mean, method: "Add all values and divide by the count.", working: `${data.reduce((s, x) => s + x, 0)}/${n}`, ansWorking: fmt(mean) },
        { label: "b", answer: range, method: "Subtract the smallest from the largest.", working: `${data[n - 1]}-${data[0]}`, ansWorking: `${range}` },
      ],
      principles: [{ kind: "definition", name: "Averages", statement: "Mean = sum/count; range = max - min; median = middle value." }],
      finalAnswer: `(a) ${fmt(mean)} (b) ${range}`,
    });
  }
  if (kind === 1) {
    return calcQ(ctx, {
      stem: `The following numbers are the scores in a game: ${data.join(", ")}. Work out the median score.`,
      parts: [{ label: "", prompt: "", answer: median, method: n % 2 ? "Take the middle value." : "Average the two middle values.", working: data.join(","), ansWorking: fmt(median) }],
      principles: [{ kind: "definition", name: "Median", statement: "Median = middle value of ordered data (average of two middle values if even count)." }],
      finalAnswer: fmt(median),
    });
  }
  return calcQ(ctx, {
    stem: `The following numbers are the scores in a game: ${data.join(", ")}. Work out the mode.`,
    parts: [{ label: "", prompt: "", answer: mode, method: "Find the most frequent value.", working: "frequency", ansWorking: `${mode}` }],
    principles: [{ kind: "definition", name: "Mode", statement: "Mode = most frequent value." }],
    finalAnswer: `${mode}`,
  });
}

// =====================================================================
// FAMILY 7: exam-style MCQ recall (subject-agnostic maths facts)
// =====================================================================
const MATHS_FACTS = [
  { q: "What is the value of $\\pi$ correct to 2 decimal places?", correct: "$3.14$", wrong: ["$3.41$", "$3.15$", "$3.13$"], w: "pi ≈ 3.14159" },
  { q: "How many degrees are there in a right angle?", correct: "$90^\\circ$", wrong: ["$45^\\circ$", "$180^\\circ$", "$60^\\circ$"], w: "right angle = 90" },
  { q: "How many degrees are there in a triangle?", correct: "$180^\\circ$", wrong: ["$90^\\circ$", "$360^\\circ$", "$270^\\circ$"], w: "angle sum = 180" },
  { q: "What is $2^3 \\times 2^2$?", correct: "$32$", wrong: ["$64$", "$16$", "$10$"], w: "2^5=32" },
  { q: "What is $\\sqrt{144}$?", correct: "$12$", wrong: ["$14$", "$16$", "$11$"], w: "12^2=144" },
  { q: "What is $15\\%$ of $200$?", correct: "$30$", wrong: ["$20$", "$25$", "$35$"], w: "0.15x200=30" },
  { q: "What is the median of $3, 7, 1, 9, 5$?", correct: "$5$", wrong: ["$3$", "$7$", "$9$"], w: "ordered: 1,3,5,7,9 middle=5" },
  { q: "What is $(-3)^2$?", correct: "$9$", wrong: ["$-9$", "$6$", "$-6$"], w: "(-3)x(-3)=9" },
  { q: "What is the next term in $2, 6, 18, 54, \\ldots$?", correct: "$162$", wrong: ["$108$", "$72$", "$56$"], w: "x3 each term" },
  { q: "What is $0.4$ as a fraction in its lowest terms?", correct: "$\\frac{2}{5}$", wrong: ["$\\frac{4}{10}$", "$\\frac{1}{4}$", "$\\frac{2}{4}$"], w: "0.4=4/10=2/5" },
  { q: "What is $7 \\times 8$?", correct: "$56$", wrong: ["$54$", "$63$", "$48$"], w: "7x8=56" },
  { q: "Which is the largest: $\\frac{3}{4}$, $0.7$, $\\frac{5}{8}$, $0.65$?", correct: "$0.7$", wrong: ["$\\frac{3}{4}$", "$\\frac{5}{8}$", "$0.65$"], w: "0.75,0.7,0.625,0.65" },
];

function mathsFactMCQ(ctx) {
  const r = ctx.rng;
  const f = pick(r, MATHS_FACTS);
  const choices = shuffle(r, [f.correct, ...f.wrong]);
  const correctIdx = choices.indexOf(f.correct);
  return mcqQ(ctx, {
    stem: f.q,
    choices,
    correct: correctIdx,
    principle: { kind: "definition", name: "Number facts", statement: "Core numerical fluency." },
    reasoning: f.w,
    working: f.w,
    finalAnswer: "",
  });
}

// =====================================================================
// FAMILY 8: additional maths (0606): logs, calculus, trig equations, vectors/matrices
// =====================================================================
function logEquation(ctx) {
  const r = ctx.rng;
  const b = pick(r, [2, 3, 5, 10]);
  const x = randInt(r, 2, 5);
  const y = randInt(r, 2, 4);
  const ans = x * y;
  return calcQ(ctx, {
    stem: `Solve $\\log_{${b}} x + \\log_{${b}} ${y} = \\log_{${b}} ${ans}$ for $x$.`,
    parts: [{ label: "", prompt: "", answer: x, method: `Combine logs: $\\log_b(xy)=\\log_b(${ans})$ so $xy=${ans}$.`, working: `x=${ans}/${y}`, ansWorking: `${x}` }],
    principles: [{ kind: "law", name: "Log laws", statement: "$\\log_b m + \\log_b n = \\log_b(mn)$; $\\log_b b^k=k$." }],
    finalAnswer: `x=${x}`,
  });
}

function expEquation(ctx) {
  const r = ctx.rng;
  const b = pick(r, [2, 3, 5]);
  const k = randInt(r, 1, 3);
  const x = randInt(r, 2, 4);
  const e = x + k;
  const ans = Math.pow(b, e);
  return calcQ(ctx, {
    stem: `Solve $${b}^{x}\\times${b}^{${k}}=${ans}$ for $x$.`,
    parts: [{ label: "", prompt: "", answer: x, method: `Add indices: $${b}^{x+${k}}=${b}^{${e}}$, so $x+${k}=${e}$.`, working: `x=${e}-${k}`, ansWorking: `${x}` }],
    principles: [{ kind: "law", name: "Index laws", statement: "$a^m\\times a^n=a^{m+n}$" }],
    finalAnswer: `x=${x}`,
  });
}

function differentiation(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const n = randInt(r, 2, 5);
    const a = randInt(r, 2, 6);
    return calcQ(ctx, {
      stem: `Differentiate $y=${a}x^{${n}}$ with respect to $x$.`,
      parts: [{ label: "", prompt: "", answer: a * n, method: "Power rule: $\\frac{d}{dx}(ax^n)=anx^{n-1}$.", working: `${a}\\times${n}x^{${n - 1}}`, ansWorking: `${a * n}x^{${n - 1}}` }],
      principles: [{ kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}(ax^n)=anx^{n-1}$" }],
      finalAnswer: `\\frac{dy}{dx}=${a * n}x^{${n - 1}}`,
    });
  }
  if (kind === 1) {
    const x = randInt(r, 1, 4);
    const n = randInt(r, 2, 4);
    const a = randInt(r, 2, 5);
    const dy = a * n * Math.pow(x, n - 1);
    return calcQ(ctx, {
      stem: `Given $y=${a}x^{${n}}$, find $\\frac{dy}{dx}$ when $x=${x}$.`,
      parts: [{ label: "", prompt: "", answer: dy, method: "Differentiate then substitute.", working: `${a * n}x^{${n - 1}}`, ansWorking: `${dy}` }],
      principles: [{ kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}(ax^n)=anx^{n-1}$" }],
      finalAnswer: `\\frac{dy}{dx}=${dy}`,
    });
  }
  const k = randInt(r, 2, 6);
  const x = randInt(r, 1, 3);
  return calcQ(ctx, {
    stem: `Find the equation of the tangent to $y=x^{${k}}$ at the point where $x=${x}$. Give your answer in the form $y=mx+c$.`,
    parts: [{ label: "", prompt: "", answer: k * Math.pow(x, k - 1), method: "Gradient = derivative at $x=${x}$; then $c=y-mx$.", working: `${k}x^{${k - 1}}`, ansWorking: `m=${k * Math.pow(x, k - 1)}` }],
    principles: [{ kind: "formula", name: "Tangent", statement: "Gradient of tangent = $\\frac{dy}{dx}$ at the point." }],
    finalAnswer: `y=${k * Math.pow(x, k - 1)}x+${Math.pow(x, k) - k * Math.pow(x, k - 1) * x}`,
  });
}

function integration(ctx) {
  const r = ctx.rng;
  const n = randInt(r, 2, 4);
  const a = randInt(r, 2, 5);
  const x1 = randInt(r, 1, 3), x2 = x1 + randInt(r, 1, 2);
  const F = (x) => a / (n + 1) * Math.pow(x, n + 1);
  const ans = F(x2) - F(x1);
  return calcQ(ctx, {
    stem: `Evaluate $\\displaystyle\\int_{${x1}}^{${x2}} ${a}x^{${n}}\\,dx$.`,
    parts: [{ label: "", prompt: "", answer: ans, method: "Integrate: $\\frac{${a}}{${n + 1}}x^{${n + 1}}$, then apply limits.", working: `[\\frac{${a}}{${n + 1}}x^{${n + 1}}]_{${x1}}^{${x2}}`, ansWorking: fmt(ans) }],
    principles: [{ kind: "formula", name: "Integration", statement: "$\\int ax^n\\,dx=\\frac{a}{n+1}x^{n+1}+C$" }],
    finalAnswer: fmt(ans),
  });
}

function trigEquation(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    const target = pick(r, [0.5, 0.7071, 0.866]);
    const label = target === 0.5 ? "30" : target === 0.7071 ? "45" : "60";
    const extras = target === 0.5 ? "30 or 150" : target === 0.7071 ? "45 or 135" : "60 or 120";
    return calcQ(ctx, {
      stem: `Solve $\\sin x=${target}$ for $0^\\circ \\le x \\le 180^\\circ$.`,
      parts: [{ label: "", prompt: "", answer: Number(label), tolerance: 0.05, method: `Use inverse sine: $x=\\sin^{-1}(${target})$; also consider $180^\\circ-x$.`, working: `sin⁻¹(${target})`, ansWorking: `${label}` }],
      principles: [{ kind: "definition", name: "Inverse trig", statement: "$\\sin 30^\\circ=0.5$, $\\sin 45^\\circ\\approx0.707$, $\\sin 60^\\circ\\approx0.866$." }],
      finalAnswer: `x=${Number(label)}^\\circ \\text{ or } x=${180 - Number(label)}^\\circ`,
      commonErrors: ["Giving only one solution — sine is positive in both Q1 and Q2."],
    });
  }
  const theta = pick(r, [25, 35, 40, 50, 65]);
  return calcQ(ctx, {
    stem: `Solve $2\\cos\\theta=1$ for $0^\\circ<\\theta<180^\\circ$. Give your answer to 1 decimal place.`,
    parts: [{ label: "", prompt: "", answer: 60, tolerance: 0.05, method: "$\\cos\\theta=0.5$, so $\\theta=60^\\circ$ (also $300^\\circ$, outside range).", working: "cos⁻¹0.5", ansWorking: "60" }],
    principles: [{ kind: "definition", name: "Cosine equation", statement: "$\\cos 60^\\circ=0.5$." }],
    finalAnswer: "$60^\\circ$",
  });
}

function matrixOps(ctx) {
  const r = ctx.rng;
  const kind = randInt(r, 0, 2);
  if (kind === 0) {
    const a = randInt(r, 1, 5), b = randInt(r, 1, 5), c = randInt(r, 1, 5), d = randInt(r, 1, 5);
    const det = a * d - b * c;
    if (det === 0) return matrixOps(ctx);
    return calcQ(ctx, {
      stem: `Find the determinant of the matrix $\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$.`,
      parts: [{ label: "", prompt: "", answer: det, method: "Determinant = $ad-bc$.", working: `${a}\\times${d}-${b}\\times${c}`, ansWorking: `${det}` }],
      principles: [{ kind: "formula", name: "2x2 determinant", statement: "$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc$" }],
      finalAnswer: `${det}`,
    });
  }
  if (kind === 1) {
    const a = randInt(r, 1, 4), b = randInt(r, 1, 4), c = randInt(r, 1, 4), d = randInt(r, 1, 4);
    return calcQ(ctx, {
      stem: `Given $A=\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$, find $2A$.`,
      parts: [{ label: "", prompt: "", answer: 2 * a, method: "Scalar multiplication doubles every entry.", working: "2A", ansWorking: `\\begin{pmatrix}${2 * a}&${2 * b}\\\\${2 * c}&${2 * d}\\end{pmatrix}` }],
      principles: [{ kind: "definition", name: "Scalar multiplication", statement: "$kA$ multiplies every entry of $A$ by $k$." }],
      finalAnswer: `\\begin{pmatrix}${2 * a}&${2 * b}\\\\${2 * c}&${2 * d}\\end{pmatrix}`,
    });
  }
  const a = randInt(r, 1, 3), b = randInt(r, 1, 3), c = randInt(r, 1, 3), d = randInt(r, 1, 3);
  const e = randInt(r, 1, 3), f = randInt(r, 1, 3), g = randInt(r, 1, 3), h = randInt(r, 1, 3);
  return calcQ(ctx, {
    stem: `Multiply $\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}\\begin{pmatrix} ${e} & ${f} \\\\ ${g} & ${h} \\end{pmatrix}$.`,
    parts: [{ label: "", prompt: "", answer: a * e + b * g, method: "Row-by-column multiplication.", working: "AB", ansWorking: `\\begin{pmatrix}${a * e + b * g}&${a * f + b * h}\\\\${c * e + d * g}&${c * f + d * h}\\end{pmatrix}` }],
    principles: [{ kind: "method", name: "Matrix multiplication", statement: "$(AB)_{ij}=\\sum_k A_{ik}B_{kj}$." }],
    finalAnswer: `\\begin{pmatrix}${a * e + b * g}&${a * f + b * h}\\\\${c * e + d * g}&${c * f + d * h}\\end{pmatrix}`,
  });
}

function arithmeticSeries(ctx) {
  const r = ctx.rng;
  const a = randInt(r, 2, 9);
  const d = randInt(r, 2, 6);
  const n = randInt(r, 8, 20);
  const S = n / 2 * (2 * a + (n - 1) * d);
  return calcQ(ctx, {
    stem: `An arithmetic series has first term ${a} and common difference ${d}. Work out the sum of the first ${n} terms.`,
    parts: [{ label: "", prompt: "", answer: S, method: "Use $S_n=\\frac{n}{2}[2a+(n-1)d]$.", working: `${n}/2[2(${a})+(${n}-1)(${d})]`, ansWorking: fmt(S) }],
    principles: [{ kind: "formula", name: "Arithmetic series", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" }],
    finalAnswer: fmt(S),
  });
}

function permutationCombinations(ctx) {
  const r = ctx.rng;
  const n = randInt(r, 5, 9), k = randInt(r, 2, Math.min(4, n - 1));
  const fact = (x) => { let p = 1; for (let i = 2; i <= x; i++) p *= i; return p; };
  const kind = randInt(r, 0, 1);
  const ans = kind === 0 ? fact(n) / (fact(n - k) * fact(k)) : fact(n) / fact(n - k);
  return calcQ(ctx, {
    stem: kind === 0
      ? `A committee of ${k} is chosen from ${n} people. How many different committees are possible?`
      : `In how many ways can ${k} winners be arranged in a line from ${n} contestants?`,
    parts: [{ label: "", prompt: "", answer: ans, method: kind === 0 ? "Combinations: $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$" : "Permutations: $\\frac{n!}{(n-k)!}$", working: "nPr or nCr", ansWorking: fmt(ans) }],
    principles: [{ kind: "formula", name: kind === 0 ? "Combinations" : "Permutations", statement: kind === 0 ? "$\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$" : "$^nP_k=\\frac{n!}{(n-k)!}$" }],
    finalAnswer: fmt(ans),
  });
}

function partialFractions(ctx) {
  const r = ctx.rng;
  const a = randInt(r, 1, 3), b = randInt(r, 1, 3);
  return mcqQ(ctx, {
    stem: `Which expression is equivalent to $\\frac{1}{x(x+1)}$?`,
    choices: shuffle(r, [
      `$\\frac{1}{x}-\\frac{1}{x+1}$`,
      `$\\frac{1}{x}+\\frac{1}{x+1}$`,
      `$\\frac{x}{x+1}$`,
      `$\\frac{1}{x^2+x}$ only$`,
    ]),
    correct: 0,
    principle: { kind: "method", name: "Partial fractions", statement: "$\\frac{1}{x(x+1)}=\\frac{A}{x}+\\frac{B}{x+1}$ with $A=1, B=-1$." },
    reasoning: "Resolve into partial fractions.",
    working: "A=1, B=-1",
    finalAnswer: "",
  });
}

function complexNumbers(ctx) {
  const r = ctx.rng;
  const a = randInt(r, 1, 5), b = randInt(r, 1, 5), c = randInt(r, 1, 5), d = randInt(r, 1, 5);
  const re = a * c - b * d, im = a * d + b * c;
  return calcQ(ctx, {
    stem: `Given $z_1=${a}+${b}i$ and $z_2=${c}+${d}i$, find $z_1z_2$ in the form $a+bi$.`,
    parts: [{ label: "", prompt: "", answer: re, method: `Expand: real part $=${a}\\times${c}-${b}\\times${d}$.`, working: `(${a}+${b}i)(${c}+${d}i)`, ansWorking: `${re}+${im}i` }],
    principles: [{ kind: "law", name: "Complex multiplication", statement: "$(a+bi)(c+di)=(ac-bd)+(ad+bc)i$" }],
    finalAnswer: `${re}+${im}i`,
  });
}

function binomialExpansion(ctx) {
  const r = ctx.rng;
  const n = pick(r, [2, 3]);
  const a = randInt(r, 1, 4), b = randInt(r, 1, 4);
  const kind = randInt(r, 0, 1);
  if (kind === 0) {
    const x = randInt(r, 2, 4);
    const y = randInt(r, 1, 3);
    const ans = Math.pow(x + y, n);
    return calcQ(ctx, {
      stem: `Expand $(x+y)^{${n}}$ and hence evaluate it when $x=${x}$ and $y=${y}$.`,
      parts: [{ label: "", prompt: "", answer: ans, method: `Binomial expansion then substitute.`, working: `(${x}+${y})^{${n}}`, ansWorking: `${ans}` }],
      principles: [{ kind: "formula", name: "Binomial theorem", statement: "$(x+y)^n=\\sum_k \\binom{n}{k}x^{n-k}y^k$" }],
      finalAnswer: `${ans}`,
    });
  }
  return mcqQ(ctx, {
    stem: `What is the coefficient of $x^2$ in the expansion of $(1+x)^{${n}}$?`,
    choices: shuffle(r, [`${n === 2 ? 1 : n}`, `${n}`, `${n * (n - 1) / 2}`, `${n + 1}`]),
    correct: n === 2 ? 0 : 2,
    principle: { kind: "formula", name: "Binomial coefficient", statement: "Coefficient of $x^k$ is $\\binom{n}{k}$." },
    reasoning: `Coefficient is $\\binom{${n}}{2}=${n * (n - 1) / 2}$.`,
    working: `C(${n},2)`,
    finalAnswer: "",
  });
}

// =====================================================================
// EXPORT: pack functions
// =====================================================================
// Each returns an array of questions (usually 1). `ctx.count` hints how many more are needed.
const FAMILIES = [
  pctDiscount, pctIncrease, reversePct, profitLoss, simpleInterest,
  ratioShare, directProportion, unitConversion,
  indices, standardForm, linearEquation, simultaneous, quadraticSolve, factorise, indicesEquation,
  pythagoras, trigValues, polygonAngles, circleTheorem, areaPerimeter, volumeSurface, bearings,
  speedDistance, probability, meanMedian, mathsFactMCQ,
];
const AM_FAMILIES = [logEquation, expEquation, differentiation, integration, trigEquation, matrixOps, arithmeticSeries, permutationCombinations, partialFractions, complexNumbers, binomialExpansion];

function makePack(families, { advanced = false } = {}) {
  return function pack(ctx) {
    // Rotate through families using ctx.qIndex + lesson offset for variety.
    const out = [];
    const want = Math.min(ctx.count, 3);
    for (let i = 0; i < want; i++) {
      const fam = families[(ctx.qIndex + i + ctx.lessonIdx * 7) % families.length];
      try {
        const q = fam(ctx);
        if (q) out.push(q);
      } catch (e) {
        if (process.env.PACK_DEBUG) console.error("family error:", fam.name, e.message);
      }
    }
    return out;
  };
}

module.exports = {
  mathsPack: makePack(FAMILIES),
  amPack: makePack([...FAMILIES.slice(0, 20), ...AM_FAMILIES]),
  corePack: makePack(FAMILIES.filter((f) => ![simultaneous, quadraticSolve, indicesEquation, standardForm, bearings, volumeSurface, differentiation, integration, trigEquation, matrixOps, arithmeticSeries, permutationCombinations, partialFractions, complexNumbers, binomialExpansion].includes(f))),
  lsPack: makePack([pctDiscount, pctIncrease, ratioShare, directProportion, unitConversion, linearEquation, areaPerimeter, speedDistance, probability, meanMedian, mathsFactMCQ]),
};
