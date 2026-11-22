import type { Lesson } from "../../../types.ts";

export const lesson219: Lesson = {
  id: "cipm-u2-lesson-2-19",
  code: "2-19",
  title: "Stage 4 — Probability and Chance",
  goal: "I CAN find the probability of simple events as fractions, use a sample space and interpret experimental results.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 4: statistics and probability",
  "Cambridge Primary Mathematics 0096 framework substrands: 4Sp, 4Ss"],
  stage: 4,
  vocabulary: [
    { term: "Probability", definition: "A measure of how likely an event is, often written as a fraction." },
    { term: "Sample space", definition: "All possible outcomes of an experiment." },
    { term: "Favourable outcomes", definition: "The outcomes that count as success." },
    { term: "Experimental probability", definition: "Estimated from actual trial results: successes ÷ trials." },
    { term: "Theoretical probability", definition: "What should happen in the long run: favourable ÷ total." },
    { term: "Equally likely", definition: "Each outcome has the same chance." },
  ],
  concepts: [
    {
      id: "cipm-u2-s19-probability",
      title: "Probability as fractions and experiments",
      skill: "Calculate theoretical probability, list sample spaces and compare with experimental results at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Theoretical probability",
            body: "For equally likely outcomes: P(event) = favourable outcomes ÷ total outcomes. A bag has 3 red, 2 blue counters — P(red) = 3/5. A dice: P(even) = 3/6 = 1/2. Probability ranges from 0 (impossible) to 1 (certain).",
          },
          {
            heading: "Experimental probability",
            body: "Roll a dice 60 times and 6 comes up 14 times — experimental P(6) = 14/60 ≈ 0.23, close to theoretical 1/6 ≈ 0.17. More trials → experimental results approach theoretical probability, but never exactly match in a finite run.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "P = favourable outcomes ÷ total outcomes" },
          { name: "Experimental", statement: "P ≈ successes ÷ number of trials" },
          { name: "Range", statement: "0 ≤ P ≤ 1; impossible = 0, certain = 1" },
        ],
        workedExample: {
          problem: "A bag contains 4 green, 3 yellow and 3 red beads. Find P(green) and P(not red).",
          solution: "Total = 10. P(green) = 4/10 = 2/5. Not red = green + yellow = 7/10.",
        },
      },
      questions: [
        {
          id: "cipm-u2-pr2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has 5 red and 5 blue balls. What is P(red)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "5/10 only as 5/5" },
            { id: "b", text: "1/5" },
            { id: "c", text: "1/2" },
            { id: "d", text: "1/10" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "favourable ÷ total." }],
            steps: [{ reasoning: "5 red of 10 total = 5/10 = 1/2.", marks: 1, markCode: "M" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cipm-u2-pr2-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List the sample space for flipping two coins (H = heads, T = tails).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sample space", statement: "All possible outcomes." }],
            steps: [
              { reasoning: "HH, HT, TH, TT.", marks: 1, markCode: "M" },
              { reasoning: "4 equally likely outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HH, HT, TH, TT",
          },
        },
        {
          id: "cipm-u2-pr2-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinner has 8 equal sections numbered 1-8. Find P(landing on a multiple of 4) and P(landing on an odd number).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Count favourable ÷ 8." }],
            steps: [
              { reasoning: "Multiples of 4: 4, 8 → P = 2/8 = 1/4.", marks: 1, markCode: "M" },
              { reasoning: "Odd: 1,3,5,7 → P = 4/8 = 1/2.", marks: 1, markCode: "M" },
              { reasoning: "Answers simplified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/4 and 1/2",
          },
        },
        {
          id: "cipm-u2-pr2-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A class rolls a dice 30 times recording sixes: 7 sixes. (a) Find the experimental probability of a six. (b) Find the theoretical probability. (c) Why do they differ? (d) Predict roughly how many sixes in 300 rolls. (e) A bag has 2 red, 3 blue, 5 green counters — find P(green) and P(not blue). (f) Which is more likely: rolling a six or drawing green? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability comparison", statement: "Experimental vs theoretical; fraction comparison." }],
            steps: [
              { reasoning: "(a) 7/30 ≈ 0.23.", marks: 1, markCode: "M" },
              { reasoning: "(b) Theoretical = 1/6 ≈ 0.17.", marks: 1, markCode: "M" },
              { reasoning: "(c) Chance variation in small samples.", marks: 1, markCode: "M" },
              { reasoning: "(d) ≈ 300 × 1/6 = 50 sixes.", marks: 1, markCode: "M" },
              { reasoning: "(e) P(green) = 5/10 = 1/2; P(not blue) = 7/10.", marks: 1, markCode: "M" },
              { reasoning: "(f) P(six)=1/6≈0.17 < P(green)=1/2 → green more likely.", marks: 1, markCode: "M" },
              { reasoning: "Fractions compared correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 7/30≈0.23 (b) 1/6≈0.17 (c) variation (d) ~50 (e) 1/2, 7/10 (f) green",
          },
        },
        {
          id: "cipm-u2-pr2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has 3 green and 7 yellow counters. What is P(green)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7/10" },
            { id: "b", text: "3/7" },
            { id: "c", text: "3/10" },
            { id: "d", text: "1/3" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "favourable ÷ total." }],
            steps: [{ reasoning: "3 green of 10 total = 3/10.", marks: 1, markCode: "A" }],
            finalAnswer: "3/10",
          },
        },
        {
          id: "cipm-u2-pr2-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the probability of rolling a number greater than 4 on a fair dice?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Count favourable ÷ 6." }],
            steps: [
              { reasoning: "Greater than 4: 5, 6 → 2 outcomes; $P = 2/6 = 1/3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1/3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/3",
          },
        },
        {
          id: "cipm-u2-pr2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An event that cannot happen has probability…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "0.5" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability range", statement: "Impossible = 0." }],
            steps: [{ reasoning: "Impossible events have probability 0.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "cipm-u2-pr2-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner has 4 equal sections: red, blue, green, yellow. What is P(blue)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "1 favourable ÷ 4 total." }],
            steps: [
              { reasoning: "P(blue) = 1/4.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/4",
          },
        },
        {
          id: "cipm-u2-pr2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is more likely: rolling a 6 on a dice or flipping heads on a coin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "cannot compare" },
            { id: "b", text: "both equally likely" },
            { id: "c", text: "flipping heads" },
            { id: "d", text: "rolling a 6" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing probabilities", statement: "$\\frac{1}{2} > \\frac{1}{6}$." }],
            steps: [{ reasoning: "P(heads) $= \\frac{1}{2}$; P(6) $= \\frac{1}{6}$; heads more likely.", marks: 1, markCode: "A" }],
            finalAnswer: "flipping heads",
          },
        },
        {
          id: "cipm-u2-pr2-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) A bag has 8 counters: 5 black, 3 white. Find P(white). (b) A coin is flipped 40 times and lands heads 18 times — find the experimental probability of heads. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Theoretical and experimental probability", statement: "favourable ÷ total; successes ÷ trials." }],
            steps: [
              { reasoning: "(a) P(white) $= 3/8$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $18/40 = 9/20 = 0.45$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3/8 (b) 9/20 = 0.45",
          },
        },
        {
          id: "cipm-u2-pr2-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two coins are flipped. What is P(exactly one head)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1/4" },
            { id: "b", text: "3/4" },
            { id: "c", text: "1" },
            { id: "d", text: "1/2" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sample space", statement: "HT and TH are favourable of 4 outcomes." }],
            steps: [{ reasoning: "Sample space HH, HT, TH, TT; exactly one head = HT, TH → $2/4 = 1/2$.", marks: 1, markCode: "A" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cipm-u2-pr2-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A dice is rolled once. What is P(rolling an even number)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Even: 2, 4, 6 → 3 of 6." }],
            steps: [
              { reasoning: "P(even) $= 3/6 = 1/2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1/2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cipm-u2-pr2-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A bag has 12 marbles: 4 red, 5 blue, 3 green. Find P(blue). (b) A spinner is spun 50 times and lands on 'win' 10 times — find experimental P(win). (c) A class predicts heads in 60 coin flips — what is the expected number? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability and expected frequency", statement: "favourable ÷ total; successes ÷ trials; n × p." }],
            steps: [
              { reasoning: "(a) P(blue) $= 5/12$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $10/50 = 1/5 = 0.2$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $60 \\times 1/2 = 30$ heads expected.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5/12 (b) 1/5 (c) 30",
          },
        },
        {
          id: "cipm-u2-pr2-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The probability of a certain event is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "it depends" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "1/2" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability range", statement: "Certain = 1." }],
            steps: [{ reasoning: "Certain events have probability 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cipm-u2-pr2-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 6 red and 4 blue balls. What is P(not red)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Not red = blue = 4/10." }],
            steps: [
              { reasoning: "Not red means blue: $4/10 = 2/5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2/5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/5",
          },
        },
        {
          id: "cipm-u2-pr2-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) List the sample space for rolling one dice and flipping one coin. (b) How many outcomes include a 6 AND heads? (c) A bag has 5 yellow, 3 purple counters — find P(yellow or purple). (d) In 40 spins of a 4-colour spinner, expected number of each colour? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Sample space; favourable ÷ total; n × p." }],
            steps: [
              { reasoning: "(a) 12 outcomes: 1H,2H,…,6H,1T,…,6T.", marks: 1, markCode: "M" },
              { reasoning: "(b) Only 6H → 1 outcome.", marks: 1, markCode: "M" },
              { reasoning: "(c) $5/8 + 3/8 = 1$ (certain — all counters are yellow or purple).", marks: 1, markCode: "M" },
              { reasoning: "(d) $40 \\times 1/4 = 10$ per colour.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 outcomes (b) 1 (c) 1 (d) 10 each",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-pr2-notes",
      title: "Probability — notes",
      summary: "P = favourable ÷ total for equally likely outcomes. Experimental ≈ successes ÷ trials, approaching theoretical as trials increase.",
      sections: [
        { heading: "Theoretical", body: "Count outcomes carefully — include all equally likely possibilities." },
        { heading: "Experimental", body: "Small samples vary; expect experimental → theoretical over many trials." },
      ],
    },
  ],
};
