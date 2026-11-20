import type { Lesson } from "../../../types.ts";

export const lesson220: Lesson = {
  id: "cipm-u2-lesson-2-20",
  code: "2-20",
  title: "Stage 6 — Probability and Averages",
  goal: "I CAN calculate probabilities of combined events, use expected frequency and find mean, median and mode from data.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 6: statistics and probability",
  "Cambridge Primary Mathematics 0096 framework substrands: 6Sp, 6Ss, 6Ni"],
  stage: 6,
  vocabulary: [
    { term: "Expected frequency", definition: "Number of trials × probability of the event." },
    { term: "Mutually exclusive", definition: "Events that cannot both happen on one trial." },
    { term: "Mean", definition: "Sum of values ÷ number of values." },
    { term: "Median", definition: "Middle value when data is in order." },
    { term: "Mode", definition: "The most frequent value." },
    { term: "Range", definition: "Largest value − smallest value." },
  ],
  concepts: [
    {
      id: "cipm-u2-s20-prob-stats",
      title: "Probability predictions and data averages",
      skill: "Use probability to predict frequencies and calculate all three averages at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Expected frequency",
            body: "If P(event) = p and you run n trials, expected frequency ≈ n × p. A biased coin lands heads with P = 0.6; in 200 flips expect ≈ 120 heads. For mutually exclusive events, probabilities add: P(1 or 2 on a dice) = 1/6 + 1/6 = 1/3.",
          },
          {
            heading: "Averages",
            body: "Mean = total ÷ count. Median = middle value of ordered data (average the two middle values for even counts). Mode = most frequent value; range = max − min. Choose the average that best answers the question — median resists outliers.",
          },
        ],
        keyFormulas: [
          { name: "Expected frequency", statement: "n × P(event)" },
          { name: "Mean", statement: "Σx ÷ n" },
          { name: "Median", statement: "middle ordered value (mean of two middles if even n)" },
        ],
        workedExample: {
          problem: "Data: 4, 7, 7, 9, 12, 15. Find mean, median, mode and range. Then: P(even) on a dice = 1/2 — expected even results in 100 rolls?",
          solution: "Sum = 54, n = 6 → mean = 9. Ordered middle = (7+9)/2 = 8 → median 8. Mode = 7. Range = 15−4 = 11. Expected evens = 100 × 1/2 = 50.",
        },
      },
      questions: [
        {
          id: "cipm-u2-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the expected frequency of heads in 150 flips of a fair coin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "75" }, { id: "b", text: "50" }, { id: "c", text: "100" }, { id: "d", text: "150" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Expected frequency", statement: "n × P." }],
            steps: [{ reasoning: "150 × 1/2 = 75.", marks: 1, markCode: "M" }],
            finalAnswer: "75",
          },
        },
        {
          id: "cipm-u2-pa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Data: 3, 5, 5, 8, 10. Find the median and the range.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Median and range", statement: "Middle value; max − min." }],
            steps: [
              { reasoning: "Median = 5 (middle of ordered data).", marks: 1, markCode: "M" },
              { reasoning: "Range = 10 − 3 = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Median 5, range 7",
          },
        },
        {
          id: "cipm-u2-pa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bag has 6 red, 4 blue counters. Find P(red or blue on one draw) and the expected number of red draws in 50 draws.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Combined probability", statement: "Add mutually exclusive probabilities." }],
            steps: [
              { reasoning: "P(red or blue) = 6/10 + 4/10 = 1 (certain).", marks: 1, markCode: "M" },
              { reasoning: "Expected red = 50 × 6/10 = 30.", marks: 1, markCode: "M" },
              { reasoning: "Answers stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 (certain); 30 red",
          },
        },
        {
          id: "cipm-u2-pa-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Scores in a game: 12, 8, 15, 8, 20, 10, 8, 25. (a) Find mean, median, mode and range. (b) Which average best represents a typical score? Why? (c) A spinner lands on A with P = 0.3 — expected A's in 200 spins? (d) P(A or B) where P(A)=0.3, P(B)=0.5, mutually exclusive. (e) In 100 spins, is getting exactly 30 A's guaranteed? Explain. (f) Find P(not A).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Statistics and probability", statement: "Averages, expected frequency, combined probabilities." }],
            steps: [
              { reasoning: "(a) Sum=106, mean=13.25; ordered middle=(10+12)/2=11; mode=8; range=17.", marks: 2, markCode: "M" },
              { reasoning: "(b) Median 11 — resists the high outlier 25.", marks: 1, markCode: "M" },
              { reasoning: "(c) 200 × 0.3 = 60.", marks: 1, markCode: "M" },
              { reasoning: "(d) 0.3 + 0.5 = 0.8.", marks: 1, markCode: "M" },
              { reasoning: "(e) No — expected ≈60 in 200; exactly 30 in 100 is possible but not guaranteed.", marks: 1, markCode: "M" },
              { reasoning: "(f) 1 − 0.3 = 0.7.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) mean 13.25, median 11, mode 8, range 17 (b) median (c) 60 (d) 0.8 (e) no (f) 0.7",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-pa-notes",
      title: "Probability and averages — notes",
      summary: "Expected frequency = n × P. Mutually exclusive probabilities add. Mean/median/mode/range — median resists outliers.",
      sections: [
        { heading: "Probability", body: "P(not A) = 1 − P(A). Expected ≠ guaranteed." },
        { heading: "Averages", body: "Order data for median; mode needs no ordering." },
      ],
    },
  ],
};
