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
            { id: "a", text: "50" },
            { id: "b", text: "100" },
            { id: "c", text: "150" },
            { id: "d", text: "75" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-pa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the expected frequency of tails in 100 flips of a fair coin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "75" },
            { id: "b", text: "25" },
            { id: "c", text: "50" },
            { id: "d", text: "100" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Expected frequency", statement: "n × P." }],
            steps: [{ reasoning: "$100 \\times \\frac{1}{2} = 50$.", marks: 1, markCode: "A" }],
            finalAnswer: "50",
          },
        },
        {
          id: "cipm-u2-pa-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Data: 2, 4, 4, 6, 8. Find the mean.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ count." }],
            steps: [
              { reasoning: "Sum $= 24$; count $= 5$; $24 \\div 5 = 4.8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.8",
          },
        },
        {
          id: "cipm-u2-pa-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The mode of a data set is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the smallest value" },
            { id: "b", text: "the middle value" },
            { id: "c", text: "the most frequent value" },
            { id: "d", text: "the largest value" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mode", statement: "Most frequent value." }],
            steps: [{ reasoning: "Mode = value that appears most often.", marks: 1, markCode: "A" }],
            finalAnswer: "the most frequent value",
          },
        },
        {
          id: "cipm-u2-pa-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Data: 6, 2, 9, 4, 9. Find the mode and range.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mode and range", statement: "Most frequent; max − min." }],
            steps: [
              { reasoning: "Mode = 9 (appears twice); range $= 9 - 2 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answers stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mode 9, range 7",
          },
        },
        {
          id: "cipm-u2-pa-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "P(event) = 0.4 and you run 250 trials. Expected frequency ≈",
          response: { type: "mcq", choices: [
            { id: "a", text: "150" },
            { id: "b", text: "40" },
            { id: "c", text: "100" },
            { id: "d", text: "250" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expected frequency", statement: "n × p." }],
            steps: [{ reasoning: "$250 \\times 0.4 = 100$.", marks: 1, markCode: "A" }],
            finalAnswer: "100",
          },
        },
        {
          id: "cipm-u2-pa-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Data: 5, 7, 9, 9, 11, 13. Find the mean and median.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean and median", statement: "Sum ÷ n; middle of ordered data." }],
            steps: [
              { reasoning: "Sum $= 54$; $54 \\div 6 = 9$ → mean 9.", marks: 1, markCode: "M" },
              { reasoning: "Median $= (9 + 9) \\div 2 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answers stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean 9, median 9",
          },
        },
        {
          id: "cipm-u2-pa-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "P(A) = 0.25 and P(B) = 0.45, mutually exclusive. P(A or B) =",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.20" },
            { id: "b", text: "1.00" },
            { id: "c", text: "0.11" },
            { id: "d", text: "0.70" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Combined probability", statement: "Mutually exclusive → add." }],
            steps: [{ reasoning: "$0.25 + 0.45 = 0.70$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.70",
          },
        },
        {
          id: "cipm-u2-pa-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Data: 3, 8, 8, 10, 16. Find the range.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Range", statement: "Max − min." }],
            steps: [
              { reasoning: "Range $= 16 - 3 = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cipm-u2-pa-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Data: 4, 6, 6, 8, 11 — find mean, median, mode. (b) P(win) = 0.2 on a game — expected wins in 300 plays? (c) P(not win)? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Averages and probability", statement: "Mean/median/mode; n × p; 1 − p." }],
            steps: [
              { reasoning: "(a) Sum $= 35$; mean $= 7$; median $= 6$; mode $= 6$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $300 \\times 0.2 = 60$ wins.", marks: 1, markCode: "M" },
              { reasoning: "(c) $1 - 0.2 = 0.8$.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mean 7, median 6, mode 6 (b) 60 (c) 0.8",
          },
        },
        {
          id: "cipm-u2-pa-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which average is best when data has an extreme outlier?",
          response: { type: "mcq", choices: [
            { id: "a", text: "median" },
            { id: "b", text: "mean" },
            { id: "c", text: "mode" },
            { id: "d", text: "range" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Choosing averages", statement: "Median resists outliers." }],
            steps: [{ reasoning: "Median is unaffected by extreme values.", marks: 1, markCode: "A" }],
            finalAnswer: "median",
          },
        },
        {
          id: "cipm-u2-pa-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A biased coin lands heads with P = 0.6. Expected heads in 400 flips?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expected frequency", statement: "n × p." }],
            steps: [
              { reasoning: "$400 \\times 0.6 = 240$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 240.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "240",
          },
        },
        {
          id: "cipm-u2-pa-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Data: 2, 5, 5, 7, 9, 20 — find mean, median, mode and range. (b) Which average best represents typical values and why? (c) P(red) = 0.3 in a spinner — expected red in 500 spins? (d) P(not red)? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Averages and probability", statement: "Sum ÷ n; ordered middle; max − min; n × p; 1 − p." }],
            steps: [
              { reasoning: "(a) Sum $= 48$; mean $= 8$; median $= (5+7)/2 = 6$; mode $= 5$; range $= 20 - 2 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Median 6 — resists the outlier 20.", marks: 1, markCode: "M" },
              { reasoning: "(c) $500 \\times 0.3 = 150$.", marks: 1, markCode: "M" },
              { reasoning: "(d) $1 - 0.3 = 0.7$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mean 8, median 6, mode 5, range 18 (b) median (c) 150 (d) 0.7",
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
