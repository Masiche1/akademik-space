const fs = require("fs");

const UTIL_LF = `const MCQ_SPECIAL = /all of the (above|these)|none of the (above|these)|none of these|\\b[abcd]\\s+and\\s+[abcd]\\b/i;
const mcqSeed = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
};
const mcqOrder = (texts: readonly string[], seed: string): number[] | null => {
  if (texts.some((t) => MCQ_SPECIAL.test(t))) return null;
  let a = mcqSeed(seed);
  const rnd = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = texts.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.every((v, i) => v === i) && order.length > 1 ? [order[1], order[0], ...order.slice(2)] : order;
};
const letterOf = (i: number): string => String.fromCharCode(97 + i);
const letterMapOf = (order: number[]): Record<string, string> =>
  Object.fromEntries(order.map((oldI, pos) => [letterOf(oldI), letterOf(pos)]));
const remapLetters = (s: string, map: Record<string, string> | null): string =>
  map ? s.replace(/\\(([abcd])\\)/g, (m, L) => (map[L] ? "(" + map[L] + ")" : m)) : s;

`;

// patch(file, anchor, oldStr, newStr): inserts UTIL before anchor, replaces oldStr->newStr, EOL-aware
function patch(file, anchor, oldStr, newStr) {
  let s = fs.readFileSync(file, "utf8");
  if (s.includes("mcqOrder")) { console.log("skip(already)", file); return; }
  const eol = s.includes("\r\n") ? "\r\n" : "\n";
  const P = (t) => t.split("\n").join(eol);
  const oldP = P(oldStr), newP = P(newStr), utilP = P(UTIL_LF);
  if (!s.includes(oldP)) { console.log("NO MATCH", file); return; }
  s = s.replace(anchor, utilP + anchor);
  s = s.replace(oldP, newP);
  fs.writeFileSync(file, s);
  console.log("patched", file);
}

// ---------- Group B: cie-o-level-maths ----------
{
  const f = "src/content/courses/cie-o-level-maths/unit-1/extra-questions.ts";
  const OLD = `function mcq(id: string, d: D, stem: string, choices: string[], correct: number, reasoning: string, pname = "O Level rule"): Question {
  const ids = ["a", "b", "c", "d"];
  return {
    id, difficulty: d, totalMarks: 1, stem,
    response: { type: "mcq", choices: choices.map((text, i) => ({ id: ids[i], text })), correctChoiceId: ids[correct] },
    markscheme: {
      principles: [{ kind: "technique", name: pname, statement: "Apply the relevant O Level rule." }],
      steps: [{ reasoning, marks: 1, markCode: "A" }],
      finalAnswer: "**" + ids[correct] + "** " + choices[correct],
    },
  };
}`;
  const NEW = `function mcq(id: string, d: D, stem: string, choices: string[], correct: number, reasoning: string, pname = "O Level rule"): Question {
  const ids = ["a", "b", "c", "d"];
  const __o = mcqOrder(choices, id);
  const __choices = __o ? __o.map((i) => choices[i]) : choices;
  const __correct = __o ? __o.indexOf(correct) : correct;
  return {
    id, difficulty: d, totalMarks: 1, stem,
    response: { type: "mcq", choices: __choices.map((text, i) => ({ id: ids[i], text })), correctChoiceId: ids[__correct] },
    markscheme: {
      principles: [{ kind: "technique", name: pname, statement: "Apply the relevant O Level rule." }],
      steps: [{ reasoning, marks: 1, markCode: "A" }],
      finalAnswer: "**" + ids[__correct] + "** " + __choices[__correct],
    },
  };
}`;
  patch(f, "function mcq(", OLD, NEW);
}

// ---------- Group C: ib-geo-sl-2 ----------
{
  const f = "src/content/courses/ib-geo-sl-2/unit-6/extra-questions.ts";
  const OLD = `function mkMcq(prefix: string, n: number, s: McqSpec): Question {
  const [stem, choices, correct, difficulty, paper, kind, name, statement, reason, error] = s;
  const correctId = LETTERS[correct];`;
  const NEW = `function mkMcq(prefix: string, n: number, s: McqSpec): Question {
  const [stem, choicesRaw, correctRaw, difficulty, paper, kind, name, statement, reason, error] = s;
  const __o = mcqOrder(choicesRaw, \`\${prefix}\${n}\`);
  const choices = __o ? __o.map((i) => choicesRaw[i]) : choicesRaw;
  const correct = __o ? __o.indexOf(correctRaw) : correctRaw;
  const correctId = LETTERS[correct];`;
  patch(f, "function mkMcq(", OLD, NEW);
}

// ---------- Group D: myp-lang-lit-y2 ----------
const MYP_FILES = [
  "src/content/courses/myp-lang-lit-y2/unit-1/expanded-questions.ts",
  "src/content/courses/myp-lang-lit-y2/unit-2/expanded-questions.ts",
  "src/content/courses/myp-lang-lit-y2/unit-3/expanded-questions.ts",
];
const MYP_OLD = `const mcq = (
  id: string,
  difficulty: Difficulty,
  stem: string,
  choices: [string, string, string, string],
  correct: number,
  principle: PrincipleInput,
  reasoning: string,
  finalAnswer: string,
  extract?: TextExtract,
  markCode: MarkStep["markCode"] = "A",
): Question => ({
  id,
  difficulty,
  totalMarks: 1,
  ...(extract ? { extract } : {}),
  stem,
  response: {
    type: "mcq",
    choices: choices.map((text, index) => ({ id: letter(index), text })),
    correctChoiceId: letter(correct),
  },
  markscheme: {
    principles: [principle],
    steps: [{ reasoning, marks: 1, markCode }],
    finalAnswer,
  },
});`;
const MYP_NEW = `const mcq = (
  id: string,
  difficulty: Difficulty,
  stem: string,
  choices: [string, string, string, string],
  correct: number,
  principle: PrincipleInput,
  reasoning: string,
  finalAnswer: string,
  extract?: TextExtract,
  markCode: MarkStep["markCode"] = "A",
): Question => {
  const __o = mcqOrder(choices, id);
  const __choices = (__o ? __o.map((i) => choices[i]) : choices) as [string, string, string, string];
  const __correct = __o ? __o.indexOf(correct) : correct;
  const __lmap = __o ? letterMapOf(__o) : null;
  return {
    id,
    difficulty,
    totalMarks: 1,
    ...(extract ? { extract } : {}),
    stem,
    response: {
      type: "mcq",
      choices: __choices.map((text, index) => ({ id: letter(index), text })),
      correctChoiceId: letter(__correct),
    },
    markscheme: {
      principles: [principle],
      steps: [{ reasoning: remapLetters(reasoning, __lmap), marks: 1, markCode }],
      finalAnswer: remapLetters(finalAnswer, __lmap),
    },
  };
};`;
for (const f of MYP_FILES) patch(f, "const mcq = (", MYP_OLD, MYP_NEW);

// ---------- Group E: pyp helpers ----------
const PYP_FILES = [
  "src/content/courses/pyp-arts/helpers.ts",
  "src/content/courses/pyp-pspe/helpers.ts",
  "src/content/courses/pyp-social-studies/helpers.ts",
];
const PYP_OLD = `export const mcqQ = (
  id: string,
  difficulty: Difficulty,
  stem: string,
  choices: ChoiceInput[],
  correctChoiceId: string,
  principles: PrincipleInput[],
  steps: StepInput[],
  finalAnswer: string,
  commonErrors: string[] = [],
): Question => ({
  id,
  difficulty,
  totalMarks: 1,
  stem,
  response: { type: "mcq", choices: choices.map(toChoice), correctChoiceId },
  markscheme: ms(principles, steps, finalAnswer, commonErrors),
});`;
const PYP_NEW = `export const mcqQ = (
  id: string,
  difficulty: Difficulty,
  stem: string,
  choices: ChoiceInput[],
  correctChoiceId: string,
  principles: PrincipleInput[],
  steps: StepInput[],
  finalAnswer: string,
  commonErrors: string[] = [],
): Question => {
  const __o = mcqOrder(choices.map((c) => (Array.isArray(c) ? c[1] : c.text)), id);
  let __choices = choices;
  let __correctId = correctChoiceId;
  let __lmap: Record<string, string> | null = null;
  if (__o) {
    __lmap = {};
    __choices = __o.map((oldI, pos) => {
      const c = choices[oldI];
      const oldId = Array.isArray(c) ? c[0] : c.id;
      __lmap![oldId] = letterOf(pos);
      return Array.isArray(c) ? ([letterOf(pos), c[1]] as ChoiceInput) : ({ id: letterOf(pos), text: c.text } as McqChoice);
    });
    if (__lmap[correctChoiceId]) __correctId = __lmap[correctChoiceId];
  }
  const __steps: StepInput[] = __lmap
    ? steps.map((st): StepInput => {
        if (!Array.isArray(st)) return { ...st, reasoning: remapLetters(st.reasoning, __lmap) };
        const a = st as unknown[];
        if (typeof a[1] === "string" && typeof a[2] === "number") return [a[0], remapLetters(String(a[1]), __lmap), a[2], a[3]] as StepInput;
        return [remapLetters(String(a[0]), __lmap), a[1], a[2], a[3]] as StepInput;
      })
    : steps;
  return {
    id,
    difficulty,
    totalMarks: 1,
    stem,
    response: { type: "mcq", choices: __choices.map(toChoice), correctChoiceId: __correctId },
    markscheme: ms(principles, __steps, remapLetters(finalAnswer, __lmap), commonErrors.map((e) => remapLetters(e, __lmap))),
  };
};`;
for (const f of PYP_FILES) patch(f, "export const mcqQ = (", PYP_OLD, PYP_NEW);
