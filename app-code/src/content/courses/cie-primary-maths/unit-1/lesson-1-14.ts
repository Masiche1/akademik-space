import type { Lesson } from "../../../types.ts";

export const lesson114: Lesson = {
  id: "cipm-u1-lesson-1-14",
  code: "1-14",
  title: "Stage 2 — Chance and Simple Probability",
  goal: "I CAN describe chance using words like certain, likely, unlikely and impossible, and record results of simple chance experiments.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: statistics and probability",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Sp, 2Nc"],
  stage: 2,
  vocabulary: [
    { term: "Chance", definition: "How likely something is to happen." },
    { term: "Certain", definition: "Will definitely happen — 100% sure." },
    { term: "Impossible", definition: "Can never happen — 0% chance." },
    { term: "Likely", definition: "Probably will happen." },
    { term: "Unlikely", definition: "Probably will not happen." },
    { term: "Outcome", definition: "The result of a chance experiment." },
  ],
  concepts: [
    {
      id: "cipm-u1-s14-chance",
      title: "Describing chance and recording experiments",
      skill: "Use chance language, predict outcomes and tally results of simple experiments at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Chance language",
            body: "Order events from impossible → unlikely → even chance → likely → certain. A coin toss landing heads is even chance (50/50). Rolling a 7 on a normal dice is impossible. The sun rising tomorrow is certain. A rainy day this week is unlikely (depends on season).",
          },
          {
            heading: "Chance experiments",
            body: "A chance experiment has outcomes you cannot control — coin tosses, dice rolls, spinner colours. Record results in a tally or table: e.g. toss a coin 10 times, count heads and tails. More trials give a better idea of the pattern, though results can still vary.",
          },
        ],
        keyFormulas: [
          { name: "Chance scale", statement: "impossible < unlikely < even < likely < certain" },
          { name: "Coin", statement: "heads or tails — even chance each" },
          { name: "Dice", statement: "numbers 1-6 — even chance each" },
        ],
        workedExample: {
          problem: "You roll a dice once. Is rolling a 4 impossible, unlikely, even chance, likely or certain? Then describe rolling an even number.",
          solution: "Rolling a 4 = even chance (1 of 6 faces, same as any number). Rolling an even number (2,4,6) = likely — 3 of 6 faces.",
        },
      },
      questions: [
        {
          id: "cipm-u1-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is impossible: rolling a 5 on a dice, or flipping a coin and getting tails?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Getting tails" },
            { id: "b", text: "Neither is impossible" },
            { id: "c", text: "Rolling a 5" },
            { id: "d", text: "Both are impossible" },
          ], correctChoiceIb: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Impossible", statement: "Cannot happen." }],
            steps: [{ reasoning: "5 is on a dice; tails is a coin outcome — both possible.", marks: 1, markCode: "M" }],
            finalAnswer: "Neither is impossible",
          },
        },
        {
          id: "cipm-u1-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Put these in order from least to most likely: (a) it rains tomorrow, (b) you are a frog, (c) you get heads on a coin toss.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chance order", statement: "impossible < unlikely < even < likely < certain." }],
            steps: [
              { reasoning: "Being a frog is impossible.", marks: 1, markCode: "M" },
              { reasoning: "Rain is unlikely; heads is even chance — order: frog, rain, heads.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "frog < rain < heads",
          },
        },
        {
          id: "cipm-u1-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinner has 4 equal sections: 2 red, 1 blue, 1 yellow. Is landing on red likely, unlikely or even chance? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chance reasoning", statement: "Compare favourable outcomes to total." }],
            steps: [
              { reasoning: "2 of 4 sections are red = half.", marks: 1, markCode: "M" },
              { reasoning: "Half the spins land on red → even chance.", marks: 1, markCode: "M" },
              { reasoning: "Answer: even chance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Even chance — 2 of 4 sections",
          },
        },
        {
          id: "cipm-u1-ch-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "You toss a coin 10 times and record: heads 6, tails 4. (a) Is heads or tails more likely based on this experiment? (b) What is the theoretical even-chance expectation for 10 tosses? (c) Why might the results differ from expectation? (d) Toss again 10 times — would you expect exactly 5 and 5? Explain. (e) Describe one event that is certain and one that is impossible in your school day.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chance experiments", statement: "Record, compare, explain variation." }],
            steps: [
              { reasoning: "(a) Heads appeared more (6 vs 4) in this trial.", marks: 1, markCode: "M" },
              { reasoning: "(b) Even chance → expect about 5 heads, 5 tails.", marks: 1, markCode: "M" },
              { reasoning: "(c) Chance results vary; small samples vary more.", marks: 1, markCode: "M" },
              { reasoning: "(d) No — exactly 5-5 is possible but not required; results vary.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. certain: school bell rings; impossible: snowing in July (locally).", marks: 1, markCode: "M" },
              { reasoning: "Distinguishes experimental vs theoretical chance.", marks: 1, markCode: "M" },
              { reasoning: "Uses chance vocabulary correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) heads (b) ~5 each (c) chance varies (d) no, varies (e) certain/impossible examples",
          },
        },
        {
          id: "cipm-u1-ch-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You roll a dice once. Rolling a 6 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "impossible" },
            { id: "b", text: "certain" },
            { id: "c", text: "even chance" },
            { id: "d", text: "unlikely" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dice", statement: "Each face 1-6 has equal chance." }],
            steps: [{ reasoning: "Any single number on a dice has the same chance as any other — even chance.", marks: 1, markCode: "A" }],
            finalAnswer: "even chance",
          },
        },
        {
          id: "cipm-u1-ch-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "You toss a coin 20 times and record 12 heads. How many tails did you get?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Tally totals", statement: "heads + tails = total tosses." }],
            steps: [
              { reasoning: "Total tosses = 20; heads = 12.", marks: 1, markCode: "M" },
              { reasoning: "Tails = 20 − 12 = 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipm-u1-ch-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A spinner has 4 equal sections: 1 red, 3 blue. Landing on red is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "unlikely" },
            { id: "b", text: "certain" },
            { id: "c", text: "even chance" },
            { id: "d", text: "impossible" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chance reasoning", statement: "Fewer favourable outcomes = less likely." }],
            steps: [{ reasoning: "Only 1 of 4 sections is red, so red is unlikely.", marks: 1, markCode: "A" }],
            finalAnswer: "unlikely",
          },
        },
        {
          id: "cipm-u1-ch-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You roll a dice 10 times: 3, 5, 2, 6, 1, 6, 4, 2, 6, 3. How many times did you roll a 6?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Recording results", statement: "Count each matching outcome." }],
            steps: [
              { reasoning: "Scan the list for 6s: positions 4, 6 and 9.", marks: 1, markCode: "M" },
              { reasoning: "Count = 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipm-u1-ch-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is certain to happen?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A coin will land heads" },
            { id: "b", text: "It will snow tomorrow" },
            { id: "c", text: "The sun will rise tomorrow morning" },
            { id: "d", text: "You will roll a 6 on a dice" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Certain", statement: "Will definitely happen." }],
            steps: [{ reasoning: "The sun rising is certain; the others are chance events.", marks: 1, markCode: "A" }],
            finalAnswer: "The sun will rise tomorrow morning",
          },
        },
        {
          id: "cipm-u1-ch-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a chance experiment you could do with a coin, predict the outcome, then explain how you would record your results.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chance experiments", statement: "Define outcomes, predict, record in a tally." }],
            steps: [
              { reasoning: "Experiment named, e.g. toss a coin and record heads/tails.", marks: 1, markCode: "M" },
              { reasoning: "Prediction uses chance words, e.g. heads and tails are even chance.", marks: 1, markCode: "M" },
              { reasoning: "Recording method described: tally marks or table with totals.", marks: 1, markCode: "M" },
              { reasoning: "Clear, complete description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. coin toss; even chance; tally heads vs tails",
          },
        },
        {
          id: "cipm-u1-ch-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 5 red counters and 5 blue counters. How many counters are in the bag altogether?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Counting outcomes", statement: "Total = sum of all outcomes." }],
            steps: [
              { reasoning: "5 + 5 = 10 counters.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u1-ch-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Put these in order from most to least likely: (a) rolling an even number on a dice, (b) rolling a 3, (c) rolling a 9, (d) rolling a number at all.",
          response: { type: "mcq", choices: [
            { id: "a", text: "d, a, b, c" },
            { id: "b", text: "d, b, a, c" },
            { id: "c", text: "a, b, d, c" },
            { id: "d", text: "a, d, b, c" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chance order", statement: "certain > likely > even > unlikely > impossible." }],
            steps: [{ reasoning: "Rolling any number is certain (6 of 6); even is likely (3 of 6); a 3 is even chance (1 of 6); a 9 is impossible.", marks: 1, markCode: "A" }],
            finalAnswer: "d, a, b, c",
          },
        },
        {
          id: "cipm-u1-ch-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "You spin a spinner with 8 equal sections (4 green, 3 yellow, 1 red) 20 times. Results: green 9, yellow 7, red 4. (a) Which colour did the spinner land on most? (b) Was your prediction of 'green most likely' correct? (c) Why is red still possible even though it landed least? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chance experiments", statement: "Compare results to prediction; chance varies." }],
            steps: [
              { reasoning: "(a) Green landed most (9 times).", marks: 1, markCode: "M" },
              { reasoning: "(b) Yes — 4 of 8 sections are green, the most likely colour.", marks: 1, markCode: "M" },
              { reasoning: "(c) Red has 1 of 8 sections — possible but unlikely; chance results vary between trials.", marks: 1, markCode: "M" },
              { reasoning: "Working/results quoted correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) green (b) yes (c) possible but unlikely — results vary",
          },
        },
        {
          id: "cipm-u1-ch-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is impossible?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Getting tails on a coin" },
            { id: "b", text: "Rolling a 4 on a dice" },
            { id: "c", text: "The spinner landing on blue" },
            { id: "d", text: "Rolling an 8 on a normal dice" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Impossible", statement: "Cannot happen." }],
            steps: [{ reasoning: "A normal dice only has faces 1-6, so 8 cannot be rolled.", marks: 1, markCode: "A" }],
            finalAnswer: "Rolling an 8 on a normal dice",
          },
        },
        {
          id: "cipm-u1-ch-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "You roll a dice 12 times. Seven of the rolls are even numbers. How many rolls are odd numbers?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Tally totals", statement: "even + odd = total rolls." }],
            steps: [
              { reasoning: "Odd rolls = 12 − 7 = 5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u1-ch-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) A bag contains 4 red, 3 green and 3 blue counters. You pick one counter without looking. Is picking green likely, unlikely or even chance? Explain. (b) You repeat the pick 20 times: red 7, green 7, blue 6. Does this match what you would expect? (c) Why might your results not be exactly 8, 6 and 6? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chance reasoning", statement: "Compare outcomes to total; explain variation." }],
            steps: [
              { reasoning: "(a) Green = 3 of 10 — even chance (same as blue; less than red).", marks: 1, markCode: "M" },
              { reasoning: "(b) Roughly matches — each colour is possible and results are close to expectation.", marks: 1, markCode: "M" },
              { reasoning: "(c) Chance experiments vary; 20 picks is a small sample so results differ from exact expectation.", marks: 1, markCode: "M" },
              { reasoning: "Correct use of chance vocabulary.", marks: 1, markCode: "M" },
              { reasoning: "Working and counts quoted correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) even chance (b) roughly yes (c) chance varies in small samples",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-ch-notes",
      title: "Chance — notes",
      summary: "Impossible < unlikely < even chance < likely < certain. Record trials in a tally; results vary around expectation.",
      sections: [
        { heading: "Chance words", body: "Match events to the chance scale before judging experiments." },
        { heading: "Experiments", body: "More trials → results closer to expected pattern, but never exact." },
      ],
    },
  ],
};
