// Question families for Pearson Edexcel International Primary (Years 1-6).
// Year band is parsed from the course id (edx-primary-<subject>-y<N>).
// All numeric answers are computed so markschemes are correct by construction.
const { mcq, numeric, openQ, methodSteps, randInt, pick, shuffle, rng } = require("./lib.cjs");

const D = ["foundation", "core", "challenge"];

function yearOf(course) {
  const m = /-y(\d)/.exec(course || "");
  return m ? parseInt(m[1], 10) : 3;
}
function band(course) {
  const y = yearOf(course);
  return y <= 2 ? 1 : y <= 4 ? 2 : 3;
}
function fmt(n) {
  return Number.isInteger(n) ? String(n) : parseFloat(n.toPrecision(4)).toString();
}
function mcqQ(ctx, o) {
  return mcq({
    id: "x",
    difficulty: o.difficulty ?? pick(ctx.rng, D),
    totalMarks: o.totalMarks ?? 1,
    stem: o.stem,
    choices: o.choices,
    correct: o.correct,
    principle: o.principle,
    reasoning: o.reasoning,
    working: o.working,
    finalAnswer: o.finalAnswer,
    commonErrors: o.commonErrors,
  });
}
function openQ2(ctx, o) {
  return openQ({
    id: "x",
    difficulty: o.difficulty ?? pick(ctx.rng, D),
    stem: o.stem,
    steps: o.steps,
    principles: o.principles ?? [{ kind: "skill", name: "Explanation", statement: "Clear reasoning." }],
    finalAnswer: o.finalAnswer,
    commonErrors: o.commonErrors,
  });
}
function calcQ(ctx, { stem, parts, principles, finalAnswer, commonErrors, difficulty }) {
  const steps = [];
  for (const p of parts) {
    const m = p.marks ?? 1;
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
    parts: parts.map((p) => ({ label: p.label || "Answer", answer: p.answer, ...(p.unit ? { unit: p.unit } : {}), ...(p.tolerance != null ? { tolerance: p.tolerance } : {}) })),
    steps, principles, finalAnswer, commonErrors,
  });
}
// Recall MCQ: stem asks for definition of `term`; correct = definition; distractors = other defs.
function recallMCQ(ctx, { term, definition, distractors, stem, principle, reasoning, difficulty }) {
  const all = [definition, ...distractorFns(ctx).slice(0, 3)];
  const choices = all.map((t, i) => ({ id: "abcd"[i], text: t }));
  return mcqQ(ctx, {
    difficulty,
    stem: stem ?? `Which statement best describes ${term}?`,
    choices,
    correct: 0,
    principle: principle ?? { kind: "definition", name: term, statement: definition },
    reasoning: reasoning ?? `Recall the meaning of ${term}.`,
    finalAnswer: `**(a)** ${definition}`,
  });
}
// distractor pool per subject — filled by subject packs via setDistractors()
let DISTRACTORS = [];
function distractorFns(ctx) { return DISTRACTORS.map((d) => (typeof d === "function" ? d(ctx) : d)); }
function setDistractors(arr) { DISTRACTORS = arr; }

// =====================================================================
// MATHS (edpmN)
// =====================================================================
function addSub(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const a = randInt(r, 5, b === 1 ? 20 : b === 2 ? 200 : 999);
  const c = randInt(r, 3, b === 1 ? 15 : b === 2 ? 150 : 800);
  const isAdd = r() < 0.5;
  const ans = isAdd ? a + c : a - c;
  if (!isAdd && ans < 0) return addSub(ctx);
  if (b === 1) {
    return calcQ(ctx, {
      stem: `${a} ${isAdd ? "+" : "−"} ${c} = ?`,
      parts: [{ label: "", answer: ans, method: isAdd ? "Add the two numbers." : "Subtract the smaller from the larger.", ansWorking: fmt(ans) }],
      principles: [{ kind: "method", name: isAdd ? "Addition" : "Subtraction", statement: "Combine or find the difference." }],
      finalAnswer: fmt(ans),
    });
  }
  return calcQ(ctx, {
    stem: `Work out ${a} ${isAdd ? "+" : "−"} ${c}.`,
    parts: [{ label: "", answer: ans, method: isAdd ? "Add, carrying where needed." : "Subtract, borrowing where needed.", ansWorking: fmt(ans) }],
    principles: [{ kind: "method", name: isAdd ? "Addition" : "Subtraction", statement: "Column method with carrying/borrowing." }],
    finalAnswer: fmt(ans),
  });
}
function timesDiv(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  if (b === 1) {
    const a = randInt(r, 2, 10), c = randInt(r, 2, 10);
    const isMul = r() < 0.6;
    const ans = isMul ? a * c : Math.floor((a * c) / c) * c / c;
    if (!isMul) return timesDiv(ctx);
    return calcQ(ctx, {
      stem: `What is ${a} × ${c}?`,
      parts: [{ label: "", answer: a * c, method: "Count in steps or use a known times-table fact.", ansWorking: fmt(a * c) }],
      principles: [{ kind: "method", name: "Multiplication", statement: "Repeated addition / times-table fact." }],
      finalAnswer: fmt(a * c),
    });
  }
  if (b === 2) {
    const a = pick(r, [3, 4, 6, 7, 8, 9, 11, 12]), c = randInt(r, 3, 12);
    const isMul = r() < 0.6;
    return calcQ(ctx, {
      stem: isMul ? `Work out ${a} × ${c}.` : `Work out ${a * c} ÷ ${a}.`,
      parts: [{ label: "", answer: isMul ? a * c : c, method: isMul ? "Use the times-table fact." : "Think of the times-table fact.", ansWorking: fmt(isMul ? a * c : c) }],
      principles: [{ kind: "method", name: isMul ? "Multiplication" : "Division", statement: "Inverse operations." }],
      finalAnswer: fmt(isMul ? a * c : c),
    });
  }
  const a = pick(r, [6, 7, 8, 9, 12, 13, 14, 15]), c = randInt(r, 4, 12);
  const isMul = r() < 0.6;
  if (!isMul) {
    const dividend = a * c;
    return calcQ(ctx, {
      stem: `Work out ${dividend} ÷ ${a}.`,
      parts: [{ label: "", answer: c, method: "Use the times-table fact or short division.", ansWorking: fmt(c) }],
      principles: [{ kind: "method", name: "Division", statement: "Inverse of multiplication." }],
      finalAnswer: fmt(c),
    });
  }
  return calcQ(ctx, {
    stem: `Work out ${a} × ${c}.`,
    parts: [{ label: "", answer: a * c, method: "Partition and multiply, or use a known fact.", ansWorking: fmt(a * c) }],
    principles: [{ kind: "method", name: "Multiplication", statement: "Partition method." }],
    finalAnswer: fmt(a * c),
  });
}
function fractionsQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  if (b === 1) {
    return mcqQ(ctx, {
      stem: "Which fraction shows one half?",
      choices: [{ id: "a", text: "1/2" }, { id: "b", text: "1/3" }, { id: "c", text: "2/3" }, { id: "d", text: "1/4" }],
      correct: "a",
      principle: { kind: "definition", name: "Fraction", statement: "Part of a whole." },
      reasoning: "Half means split into 2 equal parts, take 1.",
    });
  }
  const den = pick(r, [4, 5, 6, 8, 10]);
  const num = randInt(r, 1, den - 1);
  if (b === 2) {
    const half = num * 2 === den ? randInt(r, 1, 3) : num * 2;
    const newNum = num * 2;
    const newDen = den * 2;
    return calcQ(ctx, {
      stem: `Write ${num}/${den} as an equivalent fraction with denominator ${newDen}.`,
      parts: [{ label: "", answer: newNum / newDen, method: `Multiply numerator and denominator by 2.`, ansWorking: `${newNum}/${newDen}` }],
      principles: [{ kind: "method", name: "Equivalent fractions", statement: "Multiply top and bottom by the same number." }],
      finalAnswer: `${newNum}/${newDen}`,
    });
  }
  const a = randInt(r, 1, 6), c = randInt(r, 2, 6);
  const b2 = randInt(r, 1, 6), d = randInt(r, 2, 6);
  const gcd = (x, y) => (y ? gcd(y, x % y) : x);
  const g = gcd(a * b2, c * d);
  const sNum = (a * b2) / g, sDen = (c * d) / g;
  const wrongs = shuffle(r, [
    `${sNum + 1}/${sDen}`, `${sNum}/${sDen + 1}`, `${sNum + sDen}/${sDen}`, `${a * b2}/${c * d}`,
  ]).filter((w) => w !== `${sNum}/${sDen}`).slice(0, 3);
  const opts = shuffle(r, [`${sNum}/${sDen}`, ...wrongs]);
  const correctIdx = opts.indexOf(`${sNum}/${sDen}`);
  return mcqQ(ctx, {
    difficulty: "challenge",
    stem: `Work out ${a}/${c} × ${b2}/${d}. Give your answer in its simplest form.`,
    choices: opts,
    correct: correctIdx,
    principle: { kind: "method", name: "Fraction multiplication", statement: "Multiply numerators and denominators; simplify by common factors." },
    reasoning: `(${a}×${b2})/(${c}×${d}) = ${a * b2}/${c * d} = ${sNum}/${sDen}.`,
    finalAnswer: `**(${"abcd"[correctIdx]})** ${sNum}/${sDen}`,
    commonErrors: ["Adding denominators instead of multiplying them."],
  });
}
function measuresQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  if (b === 1) {
    const cm = randInt(r, 3, 20);
    return calcQ(ctx, {
      stem: `A pencil is ${cm} cm long. How many millimetres is that?`,
      parts: [{ label: "", answer: cm * 10, unit: "mm", method: "1 cm = 10 mm, so multiply by 10.", ansWorking: fmt(cm * 10) }],
      principles: [{ kind: "convention", name: "Metric units", statement: "1 cm = 10 mm; 1 m = 100 cm." }],
      finalAnswer: `${cm * 10} mm`,
    });
  }
  const m = randInt(r, 2, 15), cm = randInt(r, 0, 9);
  if (b === 2) {
    return calcQ(ctx, {
      stem: `A ribbon is ${m} m ${cm} cm long. Write its length in centimetres.`,
      parts: [{ label: "", answer: m * 100 + cm, unit: "cm", method: "1 m = 100 cm.", ansWorking: fmt(m * 100 + cm) }],
      principles: [{ kind: "convention", name: "Metric conversion", statement: "1 m = 100 cm = 1000 mm." }],
      finalAnswer: `${m * 100 + cm} cm`,
    });
  }
  const kg = randInt(r, 2, 20), g = randInt(r, 0, 999);
  return calcQ(ctx, {
    stem: `A parcel weighs ${kg} kg ${g} g. Write its mass in grams.`,
    parts: [{ label: "", answer: kg * 1000 + g, unit: "g", method: "1 kg = 1000 g.", ansWorking: fmt(kg * 1000 + g) }],
    principles: [{ kind: "convention", name: "Metric conversion", statement: "1 kg = 1000 g; 1 l = 1000 ml." }],
    finalAnswer: `${kg * 1000 + g} g`,
  });
}
function shapeQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const shapes = [
    { n: "square", sides: 4, right: true },
    { n: "rectangle", sides: 4, right: true },
    { n: "triangle", sides: 3, right: false },
    { n: "pentagon", sides: 5, right: false },
    { n: "hexagon", sides: 6, right: false },
    { n: "octagon", sides: 8, right: false },
  ];
  const s = pick(r, shapes);
  if (b === 1) {
    const sideOptions = shuffle(r, [3, 4, 5, 6, 7, 8]).slice(0, 4);
    if (!sideOptions.includes(s.sides)) sideOptions[0] = s.sides;
    const ordered = shuffle(r, sideOptions);
    return mcqQ(ctx, {
      stem: `How many sides does a ${s.n} have?`,
      choices: ordered.map((v) => String(v)),
      correct: ordered.indexOf(s.sides),
      principle: { kind: "definition", name: s.n, statement: `${s.sides} straight sides.` },
      reasoning: `A ${s.n} has ${s.sides} sides.`,
    });
  }
  if (b === 2) {
    const per = randInt(r, 3, 12) * s.sides;
    return calcQ(ctx, {
      stem: `A ${s.n} has sides of length ${per / s.sides} cm each. Work out its perimeter.`,
      parts: [{ label: "", answer: per, unit: "cm", method: "Add all the side lengths (or multiply side length by number of sides).", ansWorking: `${per / s.sides}×${s.sides}=${per}` }],
      principles: [{ kind: "method", name: "Perimeter", statement: "Total distance around the edge." }],
      finalAnswer: `${per} cm`,
    });
  }
  const side = randInt(r, 3, 15);
  return calcQ(ctx, {
    stem: `A square has side length ${side} cm. Work out its area.`,
    parts: [{ label: "", answer: side * side, unit: "cm²", method: "Area of square = side × side.", ansWorking: `${side}×${side}=${side * side}` }],
    principles: [{ kind: "formula", name: "Area of square", statement: "A = s²." }],
    finalAnswer: `${side * side} cm²`,
  });
}
function dataQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const n = b === 1 ? randInt(r, 3, 6) : randInt(r, 5, 9);
  const vals = Array.from({ length: n }, () => randInt(r, 2, b === 1 ? 9 : 20));
  const sum = vals.reduce((a, x) => a + x, 0);
  if (b === 1) {
    const max = Math.max(...vals);
    const others = [...new Set(vals.filter((v) => v !== max))];
    const distract = shuffle(r, others).slice(0, 3);
    while (distract.length < 3) distract.push(max - 1 - distract.length);
    const ordered = shuffle(r, [max, ...distract]);
    return mcqQ(ctx, {
      stem: `The numbers are ${vals.join(", ")}. Which is the largest?`,
      choices: ordered.map((v) => String(v)),
      correct: ordered.indexOf(max),
      principle: { kind: "skill", name: "Compare numbers", statement: "Find the greatest value." },
      reasoning: `The largest number in the list is ${max}.`,
      finalAnswer: `**(${"abcd"[ordered.indexOf(max)]})** ${max}`,
    });
  }
  return calcQ(ctx, {
    stem: `Find the mean of ${vals.join(", ")}.`,
    parts: [{ label: "", answer: sum / n, method: `Add all values (${sum}) then divide by ${n}.`, ansWorking: `${sum}÷${n}=${fmt(sum / n)}` }],
    principles: [{ kind: "formula", name: "Mean", statement: "Mean = sum ÷ number of values." }],
    finalAnswer: fmt(sum / n),
    commonErrors: ["Dividing by the wrong count."],
  });
}
function algebraQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  if (b === 1) {
    const ans = randInt(r, 2, 9);
    const a = randInt(r, 1, 9);
    const c = a + ans;
    return calcQ(ctx, {
      stem: `What number is hidden? ${c} − ? = ${ans}`,
      parts: [{ label: "", answer: c - ans, method: "Subtract: hidden number = 12 − answer? No — rearrange: ? = first number − result.", ansWorking: fmt(c - ans) }],
      principles: [{ kind: "method", name: "Missing number", statement: "Use the inverse operation." }],
      finalAnswer: fmt(c - ans),
    });
  }
  if (b === 2) {
    const x = randInt(r, 3, 15), a = randInt(r, 2, 9);
    const total = a * x;
    return calcQ(ctx, {
      stem: `Solve for x: ${a}x = ${total}`,
      parts: [{ label: "", answer: x, method: `Divide both sides by ${a}.`, ansWorking: `${total}÷${a}=${x}` }],
      principles: [{ kind: "method", name: "Solve equation", statement: "Divide both sides by the coefficient." }],
      finalAnswer: `x = ${x}`,
    });
  }
  const x = randInt(r, 2, 12), a = randInt(r, 2, 9), bq = randInt(r, 1, 20);
  return calcQ(ctx, {
    stem: `Solve: ${a}x + ${bq} = ${a * x + bq}`,
    parts: [{ label: "", answer: x, method: `Subtract ${bq}, then divide by ${a}.`, ansWorking: `(${a * x + bq}-${bq})÷${a}=${x}` }],
    principles: [{ kind: "method", name: "Linear equation", statement: "Inverse operations in reverse order." }],
    finalAnswer: `x = ${x}`,
  });
}
const MATHS_PACKS = [addSub, timesDiv, fractionsQ, measuresQ, shapeQ, dataQ, algebraQ];

// =====================================================================
// ENGLISH (edpeN)
// =====================================================================
function comprehensionQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const extracts = {
    1: [
      { title: "The Lost kitten", author: "Akademik Space", text: "Pip the kitten hid under the shed when the storm began. He shivered and mewed softly until Mum lifted the lid and wrapped him in a warm towel." },
      { title: "A windy day", author: "Akademik Space", text: "The kite danced above the field, tugging so hard that Sam had to run to keep hold of the string. His cheeks burned in the cold wind." },
    ],
    2: [
      { title: "The School Fete", author: "Akademik Space", text: "Every summer the school holds a fete on the playing field. There are stalls selling cakes, a tombola, and a tug-of-war. Last year our class won first prize for the best-decorated stall." },
      { title: "Grandad's Boat", author: "Akademik Space", text: "Grandad keeps his old fishing boat in the garage. He says the sea taught him patience: you wait for the fish, and sometimes you wait all day. But when a bite comes, he never misses it." },
    ],
    3: [
      { title: "The Lighthouse Keeper", author: "Akademik Space", text: "Every evening, Tomas climbed the spiral stairs to light the lamp. Ships depended on that steady beam to find the rocks. He took pride in his duty, though the nights were long and lonely." },
      { title: "A Letter Home", author: "Akademik Space", text: "Dear Mum, the camp is brilliant. Yesterday we built a raft and raced it across the lake. Mine sank first, but everyone cheered anyway. Write soon! Love, Jo." },
    ],
  };
  const pool = b === 1 ? extracts[1] : b === 2 ? extracts[2] : extracts[3];
  const ex = pick(r, pool);
  const stems = b === 1
    ? [`Where did Pip hide?`, `What did Mum wrap Pip in?`, `What was the weather like?`]
    : b === 2
      ? [`Why did Sam have to run?`, `What did Grandad learn from fishing?`, `What prize did the class win?`]
      : [`Why did Tomas climb the stairs every evening?`, `What does the raft race tell us about Jo's attitude?`, `How does Tomas feel about his duty?`];
  const stem = pick(r, stems);
  const answerText = {
    "Where did Pip hide?": "under the shed",
    "What did Mum wrap Pip in?": "a warm towel",
    "What was the weather like?": "a storm",
    "Why did Sam have to run?": "the kite tugged so hard he had to keep hold of the string",
    "What did Grandad learn from fishing?": "patience — you wait for the fish",
    "What prize did the class win?": "first prize for the best-decorated stall",
    "Why did Tomas climb the stairs every evening?": "to light the lamp that guided ships",
    "What does the raft race tell us about Jo's attitude?": "she is cheerful and doesn't mind losing — everyone cheered",
    "How does Tomas feel about his duty?": "he takes pride in it, though the nights are long and lonely",
  }[stem];
  return openQ2(ctx, {
    stem: `Read the extract.\n\n**${ex.title}** — ${ex.author}\n${ex.text}\n\n${stem}`,
    parts: undefined,
    steps: [
      { reasoning: `Find the relevant detail in the text.`, marks: 1, markCode: "M" },
      { reasoning: `Answer in your own words: ${answerText}.`, marks: b === 3 ? 2 : 1, markCode: "A" },
    ],
    principles: [{ kind: "skill", name: "Retrieval", statement: "Find and use evidence from the text." }],
    finalAnswer: answerText,
  });
}
function grammarQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Which word is a doing word (verb)?", choices: ["run", "happy", "under", "the"], correct: 0, why: "'Run' is an action." },
        { stem: "Which word names a person?", choices: ["teacher", "quickly", "because", "their"], correct: 0, why: "'Teacher' is a noun naming a person." },
        { stem: "Choose the correct word: 'The cat ___ on the mat.'", choices: ["sat", "sitting", "sits'", "sit'"], correct: 0, why: "'Sat' is the past-tense verb." },
      ]
    : b === 2
      ? [
          { stem: "Which sentence uses a joining word correctly?", choices: ["I stayed home because it rained.", "I stayed home, it rained.", "I stayed home it, rained.", "I stayed home because, it rained."], correct: 0, why: "'Because' joins the two clauses." },
          { stem: "Which word is an adjective?", choices: ["bright", "brightly", "brightness", "brighten"], correct: 0, why: "'Bright' describes a noun." },
          { stem: "Choose the correct verb form: 'They ___ to school every day.'", choices: ["walk", "walks", "walking", "walked"], correct: 0, why: "Plural subject needs 'walk'." },
        ]
      : [
          { stem: "Which sentence is in the passive voice?", choices: ["The cake was baked by Sam.", "Sam baked the cake.", "Sam is baking a cake.", "The cake bakes quickly."], correct: 0, why: "'Was baked' makes the object the subject." },
          { stem: "Which word is a subordinating conjunction?", choices: ["although", "and", "but", "or"], correct: 0, why: "'Although' introduces a subordinate clause." },
          { stem: "Choose the correct tense: 'By the time we arrived, the film ___.'", choices: ["had started", "has started", "starts", "is starting"], correct: 0, why: "Past perfect for earlier past action." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "convention", name: "Grammar", statement: it.why },
    reasoning: it.why,
  });
}
function punctuationQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Where does the capital letter go? '___at is my dog.'", choices: ["C", "c", "a", "A"], correct: 0, why: "Start of sentence needs a capital." },
        { stem: "Which sentence ends correctly?", choices: ["I like apples.", "I like apples,", "I like apples;", "I like apples:"], correct: 0, why: "Statements end with a full stop." },
      ]
    : [
        { stem: "Which sentence uses an apostrophe correctly?", choices: ["The dog's bone is buried.", "The dogs' bone is buried.", "The dogs bone is buried.", "The do'gs bone is buried."], correct: 0, why: "One dog → dog's." },
        { stem: "Which sentence punctuates speech correctly?", choices: ['She said, "Hello."', 'She said "Hello".', 'She said, "Hello"', 'She said "Hello."'], correct: 0, why: "Comma before speech, full stop inside quotes." },
        { stem: "Choose the correct punctuation: 'After lunch ___ we played football.'", choices: ["—", ",", ".", "?"], correct: 0, why: "Dash marks an aside/pause." },
      ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "convention", name: "Punctuation", statement: it.why },
    reasoning: it.why,
  });
}
function writingQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const tasks = b === 1
    ? [
        { stem: "Join these sentences: 'The dog ran. The dog was fast.'", points: ["The fast dog ran.", "The dog ran quickly."], hint: "Combine into one sentence using a describing word." },
        { stem: "Add a describing word: 'The ___ sun shone.'", points: ["bright/warm/golden sun", "a describing adjective"], hint: "Use an adjective like 'bright'." },
      ]
    : b === 2
      ? [
          { stem: "Write a sentence using the joining word 'because'.", points: ["Sentence with because", "Correct punctuation"], hint: "e.g. 'I stayed inside because it was raining.'" },
          { stem: "Write two sentences about your favourite food, starting with a capital and ending with a full stop.", points: ["Two complete sentences", "Correct punctuation"], hint: "Describe taste, texture or where you eat it." },
        ]
      : [
          { stem: "Write a paragraph (3-4 sentences) describing a rainy day. Include one simile.", points: ["Paragraph with 3-4 sentences", "One simile (like/as)", "Interesting vocabulary"], hint: "e.g. 'The rain fell like tiny drums.'" },
          { stem: "Rewrite this in the past tense: 'I walk to school and I see my friend.'", points: ["All verbs in past tense", "Correct spelling"], hint: "walk→walked, see→saw." },
          { stem: "Write the opening of a story. Include a character, a setting and an action.", points: ["Character introduced", "Setting described", "Action/event begins"], hint: "Start with who, where, what happens." },
        ];
  const t = pick(r, tasks);
  return openQ2(ctx, {
    stem: t.stem,
    steps: t.points.map((p, i) => ({ reasoning: p, marks: i === 0 ? 1 : 1, markCode: "A" })),
    principles: [{ kind: "skill", name: "Writing", statement: t.hint }],
    finalAnswer: t.hint,
    commonErrors: ["Missing punctuation or incomplete sentences."],
  });
}
const ENGLISH_PACKS = [comprehensionQ, grammarQ, punctuationQ, writingQ];

// =====================================================================
// SCIENCE (edpsN)
// =====================================================================
function enquiryQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Which tool measures how long something is?", choices: ["ruler", "scales", "thermometer", "magnifying glass"], correct: 0, why: "Rulers measure length." },
        { stem: "What should you do before an investigation?", choices: ["Think about safety", "Start immediately", "Guess the answer", "Leave equipment everywhere"], correct: 0, why: "Safety first." },
      ]
    : b === 2
      ? [
          { stem: "In a fair test, what do you change?", choices: ["Only the independent variable", "Everything", "Nothing", "Two variables at once"], correct: 0, why: "One variable only." },
          { stem: "What do you measure in a fair test?", choices: ["The dependent variable", "The controlled variable", "The hypothesis", "The equipment"], correct: 0, why: "DV is measured." },
        ]
      : [
          { stem: "Why repeat a measurement three times?", choices: ["To check reliability and find anomalies", "To waste time", "To confuse results", "Once is always enough"], correct: 0, why: "Repeats improve reliability." },
          { stem: "Which is a controlled variable in testing which material insulates best?", choices: ["Same volume of water", "Material type", "Temperature change", "Time"], correct: 0, why: "Volume stays the same." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "method", name: "Working scientifically", statement: it.why },
    reasoning: it.why,
  });
}
function livingThingsQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Which of these is a living thing?", choices: ["dog", "rock", "chair", "cloud"], correct: 0, why: "Dogs grow, eat and reproduce." },
        { stem: "What do plants need to grow?", choices: ["light, water and air", "only soil", "only light", "nothing"], correct: 0, why: "Plants need light, water, air and nutrients." },
      ]
    : b === 2
      ? [
          { stem: "What is a habitat?", choices: ["The natural home where an organism lives", "A cage", "A garden", "A food type"], correct: 0, why: "Habitat = natural home." },
          { stem: "Which is an adaptation for cold climates?", choices: ["thick fur", "thin skin", "large ears", "bright colours"], correct: 0, why: "Thick fur insulates." },
        ]
      : [
          { stem: "What is a food chain?", choices: ["Shows who eats whom in an ecosystem", "A list of foods", "A type of plant", "A cooking method"], correct: 0, why: "Producer → consumer → predator." },
          { stem: "Why are decomposers important?", choices: ["They recycle nutrients back to the soil", "They eat everything", "They make food", "They pollinate plants"], correct: 0, why: "Decomposers return nutrients." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Living things", statement: it.why },
    reasoning: it.why,
  });
}
function materialsQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Which material is waterproof?", choices: ["plastic", "paper", "cloth", "sponge"], correct: 0, why: "Plastic doesn't absorb water." },
        { stem: "What happens when ice warms up?", choices: ["It melts into water", "It freezes harder", "It evaporates", "Nothing"], correct: 0, why: "Melting = solid → liquid." },
      ]
    : b === 2
      ? [
          { stem: "Which is a reversible change?", choices: ["Melting chocolate", "Burning paper", "Cooking an egg", "Rusting iron"], correct: 0, why: "Melting can be reversed by cooling." },
          { stem: "What does 'dissolve' mean?", choices: ["Solid disappears into liquid", "Solid melts", "Liquid freezes", "Gas escapes"], correct: 0, why: "Dissolving = solid → solution." },
        ]
      : [
          { stem: "How could you separate iron filings from sand?", choices: ["Use a magnet", "Filter", "Evaporate", "Distil"], correct: 0, why: "Magnet attracts iron." },
          { stem: "What is rusting?", choices: ["Iron reacting with oxygen and water", "Iron melting", "Iron dissolving", "Iron freezing"], correct: 0, why: "Rust needs oxygen + water." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "property", name: "Materials", statement: it.why },
    reasoning: it.why,
  });
}
function physicalQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What force pulls things towards the ground?", choices: ["gravity", "magnetism", "friction", "upthrust"], correct: 0, why: "Gravity pulls down." },
        { stem: "Which material lets light through?", choices: ["glass", "wood", "metal", "brick"], correct: 0, why: "Glass is transparent." },
      ]
    : b === 2
      ? [
          { stem: "What is friction?", choices: ["A force that slows moving surfaces", "A push", "A pull", "A magnet"], correct: 0, why: "Friction opposes motion." },
          { stem: "How is sound made?", choices: ["By vibrations", "By light", "By heat", "By magnets"], correct: 0, why: "Sound = vibrations." },
        ]
      : [
          { stem: "In a series circuit, what happens to current if one bulb breaks?", choices: ["All bulbs go out", "Other bulbs stay on", "Bulbs get brighter", "Nothing changes"], correct: 0, why: "Series = one path." },
          { stem: "Which is a renewable energy source?", choices: ["solar", "coal", "oil", "gas"], correct: 0, why: "Solar is renewable." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Physical processes", statement: it.why },
    reasoning: it.why,
  });
}
function earthSpaceQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What do we call the planet we live on?", choices: ["Earth", "Mars", "the Moon", "Sun"], correct: 0, why: "We live on Earth." },
        { stem: "What gives us light and heat during the day?", choices: ["the Sun", "the Moon", "stars", "clouds"], correct: 0, why: "The Sun is our star." },
      ]
    : b === 2
      ? [
          { stem: "What causes day and night?", choices: ["Earth spinning on its axis", "The Sun moving", "Clouds covering", "The Moon blocking"], correct: 0, why: "Rotation causes day/night." },
          { stem: "What is weather?", choices: ["Day-to-day conditions like rain and wind", "The climate", "The seasons", "The temperature only"], correct: 0, why: "Weather = short-term conditions." },
        ]
      : [
          { stem: "What causes the seasons?", choices: ["Earth's tilted axis orbiting the Sun", "Distance from Sun only", "The Moon's phases", "Ocean currents"], correct: 0, why: "Tilted axis → uneven heating." },
          { stem: "What is evaporation?", choices: ["Liquid turning into gas", "Gas turning into liquid", "Solid turning into liquid", "Liquid freezing"], correct: 0, why: "Evaporation = liquid → gas." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Earth and space", statement: it.why },
    reasoning: it.why,
  });
}
const SCIENCE_PACKS = [enquiryQ, livingThingsQ, materialsQ, physicalQ, earthSpaceQ];

// =====================================================================
// COMPUTING (edxpc)
// =====================================================================
function algorithmsQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What is an algorithm?", choices: ["A set of step-by-step instructions", "A computer", "A game", "A website"], correct: 0, why: "Algorithm = ordered steps." },
        { stem: "Which comes first in a sequence?", choices: ["Step 1", "Step 2", "Step 3", "Finish"], correct: 0, why: "Sequences start at step 1." },
      ]
    : b === 2
      ? [
          { stem: "What is a loop in programming?", choices: ["Repeats instructions", "Stops the program", "Deletes data", "Draws pictures"], correct: 0, why: "Loop = repeat." },
          { stem: "What is debugging?", choices: ["Finding and fixing errors", "Writing code fast", "Deleting programs", "Making computers faster"], correct: 0, why: "Debug = fix errors." },
        ]
      : [
          { stem: "What does 'decompose' mean in computing?", choices: ["Break a problem into smaller parts", "Delete files", "Speed up code", "Encrypt data"], correct: 0, why: "Decomposition = break down." },
          { stem: "Which is an example of abstraction?", choices: ["Using a map instead of real terrain", "Writing every detail", "Copying code", "Deleting variables"], correct: 0, why: "Abstraction hides unnecessary detail." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Computational thinking", statement: it.why },
    reasoning: it.why,
  });
}
function dataQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Which is an example of data?", choices: ["A list of names", "A computer", "A cable", "A screen"], correct: 0, why: "Data = information." },
        { stem: "How do you sort data?", choices: ["Put it in order", "Delete it", "Hide it", "Copy it"], correct: 0, why: "Sort = arrange in order." },
      ]
    : b === 2
      ? [
          { stem: "What is a database?", choices: ["An organised collection of data", "A computer game", "A type of cable", "A screen"], correct: 0, why: "Database = organised data." },
          { stem: "What does 'filter' do to data?", choices: ["Shows only matching items", "Deletes all data", "Sorts alphabetically", "Prints data"], correct: 0, why: "Filter = select subset." },
        ]
      : [
          { stem: "What is the difference between data and information?", choices: ["Information is data with meaning/context", "They are the same", "Data is always numbers", "Information is always text"], correct: 0, why: "Data → processed → information." },
          { stem: "Why use a spreadsheet for data?", choices: ["It can calculate and sort automatically", "It looks nice", "It is free", "It is faster than paper"], correct: 0, why: "Spreadsheets automate calculations." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Data", statement: it.why },
    reasoning: it.why,
  });
}
function hardwareQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Which part of a computer lets you see the screen?", choices: ["monitor", "keyboard", "mouse", "printer"], correct: 0, why: "Monitor = display." },
        { stem: "What do you use to type on a computer?", choices: ["keyboard", "monitor", "speaker", "scanner"], correct: 0, why: "Keyboard = input." },
      ]
    : b === 2
      ? [
          { stem: "Which is an input device?", choices: ["mouse", "monitor", "speaker", "printer"], correct: 0, why: "Mouse sends data in." },
          { stem: "What is software?", choices: ["Programs that run on a computer", "The physical parts", "A cable", "A screen"], correct: 0, why: "Software = programs." },
        ]
      : [
          { stem: "What is the CPU?", choices: ["The brain of the computer that processes data", "The screen", "The keyboard", "The power supply"], correct: 0, why: "CPU = central processing unit." },
          { stem: "Which is an example of storage?", choices: ["hard drive", "monitor", "keyboard", "mouse"], correct: 0, why: "Hard drive stores data." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Hardware", statement: it.why },
    reasoning: it.why,
  });
}
function safetyQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What should you do if you see a strange message online?", choices: ["Tell a trusted adult", "Click it", "Share it", "Ignore it forever"], correct: 0, why: "Tell an adult." },
        { stem: "Is it safe to share your password?", choices: ["No, never", "Yes, with friends", "Yes, online", "Only with family"], correct: 0, why: "Passwords are secret." },
      ]
    : b === 2
      ? [
          { stem: "What is cyberbullying?", choices: ["Bullying using technology", "A type of game", "A computer virus", "Online shopping"], correct: 0, why: "Cyberbullying = online harassment." },
          { stem: "What should you do with personal information online?", choices: ["Keep it private", "Share everywhere", "Post publicly", "Send to strangers"], correct: 0, why: "Privacy matters." },
        ]
      : [
          { stem: "What is a strong password?", choices: ["Long, unique, mix of characters", "123456", "password", "your name"], correct: 0, why: "Strong = long + varied." },
          { stem: "What is phishing?", choices: ["Fake messages trying to steal information", "A fishing game", "A type of email", "A computer part"], correct: 0, why: "Phishing = fraudulent messages." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "convention", name: "Online safety", statement: it.why },
    reasoning: it.why,
  });
}
const COMPUTING_PACKS = [algorithmsQ, dataQ, hardwareQ, safetyQ];

// =====================================================================
// GEOGRAPHY (edxpg)
// =====================================================================
function mapsQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What does a map show?", choices: ["Places and their positions", "Weather only", "Animals only", "Food only"], correct: 0, why: "Map = locations." },
        { stem: "Which direction is north on a standard map?", choices: ["Up", "Down", "Left", "Right"], correct: 0, why: "North = up." },
      ]
    : b === 2
      ? [
          { stem: "What is a compass used for?", choices: ["Finding direction", "Measuring distance", "Drawing maps", "Taking photos"], correct: 0, why: "Compass = direction." },
          { stem: "What do map symbols represent?", choices: ["Features like schools or rivers", "Colours only", "Prices", "Times"], correct: 0, why: "Symbols = features." },
        ]
      : [
          { stem: "What is a scale on a map?", choices: ["Shows the ratio between map and real distance", "A type of ruler", "A legend", "A grid"], correct: 0, why: "Scale = map:real ratio." },
          { stem: "What is fieldwork?", choices: ["Collecting data outside the classroom", "A type of sport", "A map symbol", "A compass reading"], correct: 0, why: "Fieldwork = real-world data collection." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Map skills", statement: it.why },
    reasoning: it.why,
  });
}
function ukQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What is the capital of the UK?", choices: ["London", "Manchester", "Birmingham", "Leeds"], correct: 0, why: "London is the capital." },
        { stem: "Which country is part of the UK?", choices: ["Scotland", "France", "Spain", "Italy"], correct: 0, why: "UK = England, Scotland, Wales, NI." },
      ]
    : b === 2
      ? [
          { stem: "Which is a UK city?", choices: ["Liverpool", "Paris", "Berlin", "Madrid"], correct: 0, why: "Liverpool is in England." },
          { stem: "What is the longest river in the UK?", choices: ["River Severn", "River Thames", "River Tyne", "River Clyde"], correct: 0, why: "Severn is longest." },
        ]
      : [
          { stem: "Which is a physical feature of the UK?", choices: ["Ben Nevis", "Tower Bridge", "London Eye", "Big Ben"], correct: 0, why: "Ben Nevis = mountain." },
          { stem: "What is the UK made up of?", choices: ["England, Scotland, Wales, Northern Ireland", "England only", "Britain and Ireland", "England and Wales"], correct: 0, why: "4 countries." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "The UK", statement: it.why },
    reasoning: it.why,
  });
}
function physicalGeoQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What is a river?", choices: ["Flowing water", "A lake", "A mountain", "A forest"], correct: 0, why: "River = flowing water." },
        { stem: "What is rain?", choices: ["Water falling from clouds", "Snow", "Wind", "Sunshine"], correct: 0, why: "Rain = precipitation." },
      ]
    : b === 2
      ? [
          { stem: "What is erosion?", choices: ["Wearing away of land by water/wind", "Building land", "Planting trees", "Making rivers"], correct: 0, why: "Erosion = wearing away." },
          { stem: "What is a volcano?", choices: ["A mountain that can erupt with lava", "A river", "A forest", "A lake"], correct: 0, why: "Volcano = erupting mountain." },
        ]
      : [
          { stem: "What is the water cycle?", choices: ["Continuous movement of water: evaporation, condensation, precipitation", "A swimming pool", "A river system", "A type of rain"], correct: 0, why: "Water cycle = continuous process." },
          { stem: "What is weathering?", choices: ["Breaking down of rocks", "Building mountains", "Making soil", "Flooding"], correct: 0, why: "Weathering = rock breakdown." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Physical geography", statement: it.why },
    reasoning: it.why,
  });
}
function humanGeoQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What is a settlement?", choices: ["A place where people live", "A forest", "A river", "A mountain"], correct: 0, why: "Settlement = human habitation." },
        { stem: "What do people need to live?", choices: ["Food, water, shelter", "Only toys", "Only money", "Only land"], correct: 0, why: "Basic needs." },
      ]
    : b === 2
      ? [
          { stem: "What is land use?", choices: ["How land is used: housing, farming, industry", "Owning land", "Building land", "Buying land"], correct: 0, why: "Land use = purpose of land." },
          { stem: "What is a rural area?", choices: ["Countryside with few buildings", "A city centre", "A shopping centre", "An airport"], correct: 0, why: "Rural = countryside." },
        ]
      : [
          { stem: "Why do people live near rivers?", choices: ["Water for drinking, farming, transport", "For fishing only", "For swimming", "For beauty only"], correct: 0, why: "Rivers = resources." },
          { stem: "What is urbanisation?", choices: ["Movement of people to cities", "Moving to countryside", "Building houses", "Growing crops"], correct: 0, why: "Urbanisation = rural→urban shift." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Human geography", statement: it.why },
    reasoning: it.why,
  });
}
const GEOGRAPHY_PACKS = [mapsQ, ukQ, physicalGeoQ, humanGeoQ];

// =====================================================================
// HISTORY (edxph)
// =====================================================================
function chronologyQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What is a timeline?", choices: ["Shows events in order", "A type of clock", "A map", "A calendar"], correct: 0, why: "Timeline = chronological order." },
        { stem: "What comes first: childhood or old age?", choices: ["childhood", "old age", "they are the same", "cannot tell"], correct: 0, why: "Childhood is earlier." },
      ]
    : b === 2
      ? [
          { stem: "Which period came first: Roman Britain or Victorian era?", choices: ["Roman Britain", "Victorian era", "They overlapped", "Neither"], correct: 0, why: "Romans ~43-410AD, Victorians 1837-1901." },
          { stem: "What does 'BC' mean?", choices: ["Before Christ", "British Columbia", "Before Common Era only", "By Christ"], correct: 0, why: "BC = Before Christ." },
        ]
      : [
          { stem: "Which era came first: Tudor or Victorian?", choices: ["Tudor", "Victorian", "They are the same", "Cannot tell"], correct: 0, why: "Tudors 1485-1603, Victorians 1837-1901." },
          { stem: "What is primary evidence?", choices: ["Sources from the time being studied", "Modern textbooks", "Internet articles", "TV documentaries"], correct: 0, why: "Primary = contemporary sources." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "definition", name: "Chronology", statement: it.why },
    reasoning: it.why,
  });
}
function britishHistoryQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Who was the first British king we learn about in school?", choices: ["Alfred the Great", "Henry VIII", "Queen Victoria", "King Arthur"], correct: 0, why: "Alfred = Anglo-Saxon king." },
        { stem: "What did the Romans build in Britain?", choices: ["Roads and walls", "Castles", "Trains", "Phones"], correct: 0, why: "Romans built infrastructure." },
      ]
    : b === 2
      ? [
          { stem: "Who was Henry VIII?", choices: ["A Tudor king who had six wives", "A Roman emperor", "A Victorian prime minister", "A medieval knight"], correct: 0, why: "Henry VIII = Tudor king." },
          { stem: "What happened in 1066?", choices: ["The Norman Conquest", "The Black Death", "World War I", "The Industrial Revolution"], correct: 0, why: "1066 = Hastings." },
        ]
      : [
          { stem: "Who was Queen Victoria?", choices: ["Longest-reigning British monarch of her era", "First queen", "Roman empress", "Tudor princess"], correct: 0, why: "Victoria reigned 1837-1901." },
          { stem: "What caused the Industrial Revolution?", choices: ["Steam power and factory production", "Farming", "Printing", "Electricity"], correct: 0, why: "Steam + factories." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "context", name: "British history", statement: it.why },
    reasoning: it.why,
  });
}
function worldHistoryQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "Where did the Ancient Egyptians live?", choices: ["Along the Nile", "In Britain", "In America", "In Australia"], correct: 0, why: "Egypt = Nile valley." },
        { stem: "What did the Ancient Egyptians build?", choices: ["Pyramids", "Castles", "Skyscrapers", "Trains"], correct: 0, why: "Pyramids = tombs." },
      ]
    : b === 2
      ? [
          { stem: "What were the Romans known for?", choices: ["Roads, aqueducts and law", "Pyramids", "Printing", "Computers"], correct: 0, why: "Roman engineering." },
          { stem: "Where was Machu Picchu built?", choices: ["Peru", "Egypt", "Rome", "China"], correct: 0, why: "Machu Picchu = Inca, Peru." },
        ]
      : [
          { stem: "What was the Silk Road?", choices: ["Trade route between Asia and Europe", "A river", "A road in Britain", "A type of silk"], correct: 0, why: "Silk Road = trade network." },
          { stem: "Who were the Maya?", choices: ["Civilisation in Central America", "Roman soldiers", "Egyptian pharaohs", "Viking traders"], correct: 0, why: "Maya = Mesoamerican." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "context", name: "World history", statement: it.why },
    reasoning: it.why,
  });
}
function sourcesQ(ctx) {
  const r = ctx.rng, b = band(ctx.course);
  const items = b === 1
    ? [
        { stem: "What is a source in history?", choices: ["Something that tells us about the past", "A type of food", "A map", "A game"], correct: 0, why: "Source = evidence." },
        { stem: "Which is a source?", choices: ["An old photograph", "A new toy", "A modern phone", "A textbook"], correct: 0, why: "Old photo = historical source." },
      ]
    : b === 2
      ? [
          { stem: "What is a primary source?", choices: ["Created at the time being studied", "Written later", "A textbook", "A film"], correct: 0, why: "Primary = contemporary." },
          { stem: "Why might sources disagree?", choices: ["Different perspectives or bias", "They never disagree", "They are always wrong", "They are copies"], correct: 0, why: "Bias/perspective causes disagreement." },
        ]
      : [
          { stem: "What is bias in a source?", choices: ["One-sided viewpoint", "Factual accuracy", "Writing style", "Length"], correct: 0, why: "Bias = partial view." },
          { stem: "How do historians check reliability?", choices: ["Compare multiple sources and check corroboration", "Trust one source", "Ignore sources", "Use only textbooks"], correct: 0, why: "Corroboration = cross-check." },
        ];
  const it = pick(r, items);
  return mcqQ(ctx, {
    stem: it.stem,
    choices: it.choices.map((t, i) => ({ id: "abcd"[i], text: t })),
    correct: "abcd"[it.correct],
    principle: { kind: "method", name: "Historical enquiry", statement: it.why },
    reasoning: it.why,
  });
}
const HISTORY_PACKS = [chronologyQ, britishHistoryQ, worldHistoryQ, sourcesQ];

// =====================================================================
// PACK LOOKUP
// =====================================================================
const SUBJECT_PACKS = {
  maths: MATHS_PACKS,
  english: ENGLISH_PACKS,
  science: SCIENCE_PACKS,
  computing: COMPUTING_PACKS,
  geography: GEOGRAPHY_PACKS,
  history: HISTORY_PACKS,
};

function packsFor(course) {
  const m = /edx-primary-(\w+?)(?:-y\d)?$/.exec(course || "");
  // course ids look like edx-primary-maths-y3 or edx-primary-computing
  const mm = /edx-primary-([a-z]+?)(?:-y\d+)?$/.exec(course || "");
  const subj = mm ? mm[1] : "";
  const packs = SUBJECT_PACKS[subj] || MATHS_PACKS;
  // runCourse expects each pack to return an array of questions
  return packs.map((fn) => (ctx) => {
    const q = fn(ctx);
    return q ? [q] : [];
  });
}

module.exports = { packsFor, SUBJECT_PACKS };
