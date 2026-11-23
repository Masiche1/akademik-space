// Shared helpers for US elementary (Pre-K to Grade 6) spec files.
// Each subject export pre-binds the mark code / principle kind the validators expect:
//   math & science -> markCode "A"/"M"/"B" style codes, any principle kind
//   ela            -> markCode AO1-AO5, English principle kinds only, no "$" anywhere
// Usage: const L = require("./us-elem-lib.cjs").math;
//        const { P, S, mcq, num, op, lesson, one, facts } = L;

const sumMarks = (steps) => steps.reduce((a, s) => a + s.marks, 0);

function makeLib(defaultCode, defaultKind, codeA = "M", codeB = "B") {
  const P = (kind, name, statement) => [kind, name, statement];
  const S = (reasoning, marks, markCode = defaultCode, working) => ({
    reasoning,
    marks,
    markCode,
    ...(working ? { working } : {}),
  });

  // totalMarks is always derived from the steps so they can never disagree.
  const mcq = (difficulty, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
    difficulty,
    totalMarks: sumMarks(steps),
    stem,
    choices,
    correct,
    principles,
    steps,
    finalAnswer,
    ...(commonErrors ? { commonErrors } : {}),
  });
  const num = (difficulty, stem, numeric, principles, steps, finalAnswer, commonErrors) => ({
    difficulty,
    totalMarks: sumMarks(steps),
    stem,
    numeric: Array.isArray(numeric) ? numeric : [{ label: "Answer", answer: numeric }],
    principles,
    steps,
    finalAnswer,
    ...(commonErrors ? { commonErrors } : {}),
  });
  const op = (difficulty, stem, principles, steps, finalAnswer, commonErrors) => ({
    difficulty,
    totalMarks: sumMarks(steps),
    stem,
    principles,
    steps,
    finalAnswer,
    ...(commonErrors ? { commonErrors } : {}),
  });
  const lesson = (slug, title, goal, standards, vocab, concept) => ({
    slug,
    title,
    goal,
    standards,
    vocab,
    concept,
  });

  // ---- compact builders -------------------------------------------------
  // One-step questions: the reasoning doubles as the markscheme step.
  // `final` is the display finalAnswer; `err` is a single common error.
  const oneStep = (difficulty, response, stem, reasoning, final, err, kind = defaultKind) => {
    const principles = [P(kind, "Solve", reasoning)];
    const steps = [S(reasoning, 1)];
    const base = { difficulty, totalMarks: 1, stem, principles, steps, finalAnswer: final, ...(err ? { commonErrors: [err] } : {}) };
    return { ...base, ...response };
  };

  const one = {
    // foundation, 1 mark
    mcqF: (stem, choices, correct, reasoning, final, err) =>
      oneStep("foundation", { choices, correct }, stem, reasoning, final, err),
    numF: (stem, label, answer, reasoning, final, err) =>
      oneStep("foundation", { numeric: [{ label, answer }] }, stem, reasoning, final, err),
    opF: (stem, reasoning, final, err) =>
      oneStep("foundation", {}, stem, reasoning, final, err),
    // core, 1 mark
    mcqC: (stem, choices, correct, reasoning, final, err) =>
      oneStep("core", { choices, correct }, stem, reasoning, final, err),
    numC: (stem, label, answer, reasoning, final, err) =>
      oneStep("core", { numeric: [{ label, answer }] }, stem, reasoning, final, err),
    opC: (stem, reasoning, final, err) =>
      oneStep("core", {}, stem, reasoning, final, err),
    // challenge, 1 mark
    mcqH: (stem, choices, correct, reasoning, final, err) =>
      oneStep("challenge", { choices, correct }, stem, reasoning, final, err),
    numH: (stem, label, answer, reasoning, final, err) =>
      oneStep("challenge", { numeric: [{ label, answer }] }, stem, reasoning, final, err),
    opH: (stem, reasoning, final, err) =>
      oneStep("challenge", {}, stem, reasoning, final, err),
  };

  // Two-step challenge (2 marks): method step + answer step.
  const two = {
    opH: (stem, principles, method, answerStep, final, errs) => {
      // Also accept (stem, principles, stepsArray, final, errs) for pre-built steps.
      if (errs === undefined && Array.isArray(method) && typeof answerStep === "string") {
        return op("challenge", stem, principles, method, answerStep, final);
      }
      return op("challenge", stem, principles, [S(method, 1, codeA), S(answerStep, 1, codeB)], final, errs);
    },
    numH: (stem, label, answer, method, answerStep, final, err) =>
      num("challenge", stem, [{ label, answer }], [P("method", "Solve", method)], [S(method, 1, codeA), S(answerStep, 1, codeB)], final, err ? [err] : undefined),
    mcqH: (stem, choices, correct, method, answerStep, final, err) =>
      mcq("challenge", stem, choices, correct, [P("method", "Solve", method)], [S(method, 1, codeA), S(answerStep, 1, codeB)], final, err ? [err] : undefined),
  };

  // Vocabulary questions generated from the lesson's own vocab list.
  // Produces "What does X mean?" MCQs with sibling definitions as distractors.
  const vocabQs = (vocab, count = 4) => {
    const qs = [];
    const n = Math.min(count, vocab.length);
    const letters = ["a", "b", "c", "d"];
    for (let i = 0; i < n; i++) {
      const [term, def] = vocab[i];
      const distract = [];
      for (let k = 1; distract.length < 3; k++) {
        const cand = vocab[(i + k) % vocab.length][1];
        if (cand !== def && !distract.includes(cand)) distract.push(cand);
      }
      const pool = [def, ...distract];
      const correctPos = (i * 2 + 1) % 4;
      const used = new Set();
      const finalChoices = letters.map((L, j) => {
        if (j === correctPos) {
          used.add(def);
          return [L, def];
        }
        const pick = pool.find((p) => p !== def && !used.has(p)) ?? distract[0];
        used.add(pick);
        return [L, pick];
      });
      qs.push(
        one.mcqC(
          `What does the word "${term}" mean?`,
          finalChoices,
          letters[correctPos],
          `"${term}" means ${def}`,
          `**${term}** = ${def}`,
          "Picks a definition that sounds related but belongs to a different word.",
        ),
      );
    }
    return qs;
  };

  return { P, S, mcq, num, op, lesson, one, two, sumMarks, vocabQs };
}

// ---- math fact-fluency generators ---------------------------------------
// Produce real practice questions with computed answers. Each returns an array
// of question spec objects to spread into a lesson's questions list.
const math = makeLib("A", "method");
const { P: MP, S: MS, mcq: mmcq, num: mnum, op: mop, lesson: mlesson, one: mone, two: mtwo } = math;

const numChoices = (correct, spread = 2, count = 4) => {
  // Distractors around the correct value; ids a-d, correct placed deterministically.
  const vals = new Set([correct]);
  let d = 1;
  while (vals.size < count) {
    const cand = correct + (d % 2 === 1 ? d : -d);
    if (cand >= 0 && !vals.has(cand)) vals.add(cand);
    d++;
  }
  const arr = [...vals];
  const correctIdx = arr.indexOf(correct);
  const letters = ["a", "b", "c", "d", "e", "f"].slice(0, count);
  return { choices: arr.map((v, i) => [letters[i], String(v)]), correct: letters[correctIdx] };
};

const fact = {
  // a + b = ?  -> one numeric + one mcq question
  add: (a, b) => {
    const s = a + b;
    const { choices, correct } = numChoices(s);
    return [
      mone.numC(`What is ${a} + ${b}?`, "Sum", s, `Count on from ${a}: ${a + 1}, ..., ${s}. ${a} + ${b} = ${s}.`, `$${s}$`, "Counts both numbers again instead of counting on."),
      mone.mcqC(`What is ${a} + ${b}?`, choices, correct, `Make a ten or count on: ${a} + ${b} = ${s}.`, `**${s}**`, "Adds the digits instead of the quantities."),
    ];
  },
  sub: (a, b) => {
    const d = a - b;
    const { choices, correct } = numChoices(d);
    return [
      mone.numC(`What is ${a} - ${b}?`, "Difference", d, `Count back from ${a}: ${a - 1}, ..., ${d}. ${a} - ${b} = ${d}.`, `$${d}$`, "Adds instead of subtracting."),
      mone.mcqC(`What is ${a} - ${b}?`, choices, correct, `Take away ${b} from ${a}: ${a} - ${b} = ${d}.`, `**${d}**`, "Reverses the subtraction."),
    ];
  },
  // missing addend: a + ? = c
  missingAdd: (a, c) => {
    const m = c - a;
    const { choices, correct } = numChoices(m);
    return [
      mone.numC(`${a} + __ = ${c}. What is the missing number?`, "Missing addend", m, `Count on from ${a} to ${c}: that is ${m} steps.`, `$${m}$`, "Subtracts the wrong way round."),
      mone.mcqC(`${a} + __ = ${c}. What is the missing number?`, choices, correct, `${a} + ${m} = ${c}, so the missing number is ${m}.`, `**${m}**`, "Answers ${c} instead of the missing part."),
    ];
  },
  // count objects described in words: "3 red, 2 blue, how many in all?"
  join: (a, b, noun = "objects") => {
    const s = a + b;
    const { choices, correct } = numChoices(s);
    return [
      mone.numC(`There are ${a} red ${noun} and ${b} blue ${noun}. How many ${noun} in all?`, "In all", s, `Join the groups: ${a} + ${b} = ${s}.`, `$${s}$`, "Counts only one color."),
      mone.mcqC(`There are ${a} red ${noun} and ${b} blue ${noun}. How many ${noun} in all?`, choices, correct, `${a} + ${b} = ${s}.`, `**${s}**`, "Subtracts instead of adds."),
    ];
  },
  takeAway: (a, b, noun = "objects") => {
    const d = a - b;
    const { choices, correct } = numChoices(d);
    return [
      mone.numC(`There are ${a} ${noun}. ${b} ${noun} leave. How many ${noun} are left?`, "Left", d, `Take away: ${a} - ${b} = ${d}.`, `$${d}$`, "Adds instead of subtracts."),
      mone.mcqC(`There are ${a} ${noun}. ${b} ${noun} leave. How many ${noun} are left?`, choices, correct, `${a} - ${b} = ${d}.`, `**${d}**`, "Counts the ones that left as still there."),
    ];
  },
  // compare two groups
  compare: (a, b) => {
    const diff = Math.abs(a - b);
    if (a === b) {
      return [
        mone.mcqC(`Group A has ${a} dots. Group B has ${b} dots. Which group has more?`, [["a", "They are the same"], ["b", "Group A"], ["c", "Group B"]], "a",
          `Both groups have ${a} objects, so they match one-to-one.`, "**The same**", "Assumes the bigger-looking group has more without counting."),
        mone.numC(`Group A has ${a} dots. Group B has ${b} dots. How many more does the larger group have?`, "More", 0, `The groups are equal: ${a} - ${b} = 0.`, `$0$`, "Subtracts in the wrong order and reports a negative."),
      ];
    }
    const larger = a > b ? "A" : "B";
    const letter = larger === "A" ? "a" : "b";
    const hi = Math.max(a, b), lo = Math.min(a, b);
    return [
      mone.mcqC(`Group A has ${a} dots. Group B has ${b} dots. Which group has more?`, [["a", "Group A"], ["b", "Group B"], ["c", "They are the same"]], letter,
        `Count each group: ${hi} > ${lo}, so Group ${larger} has more.`, `**Group ${larger}**`, "Picks the group that looks bigger without counting."),
      mone.numC(`Group A has ${a} dots. Group B has ${b} dots. How many more does the larger group have?`, "More", diff, `${hi} - ${lo} = ${diff}.`, `$${diff}$`, "Adds the two groups instead of subtracting."),
    ];
  },
};

// ela lib: AO1 default code, English principle kinds, no "$" allowed.
const ela = makeLib("AO1", "skill", "AO1", "AO2");
const { P: EP, S: ES, mcq: emcq, num: enum_, op: eop, lesson: elesson, one: eone, two: etwo } = ela;

// science lib: same shape as math.
const science = math;

module.exports = { makeLib, math, ela, science, fact };
