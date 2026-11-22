import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cimg-u7-lesson-7-1",
  code: "7-1",
  title: "Probability",
  goal: "I CAN calculate probabilities of single and combined events.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: probability"],
  vocabulary: [
    { term: "Probability", definition: "Likelihood of an event, from 0 to 1." },
    { term: "Mutually exclusive", definition: "Events that cannot both occur." },
    { term: "Independent", definition: "One event does not affect the other." },
    { term: "Sample space", definition: "All possible outcomes." },
  ],
  concepts: [
    {
      id: "cimg-u7-s1-probability",
      title: "Basic and combined probability",
      skill: "Calculate probabilities at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Basic probability",
            body: "$P(\\text{event}) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$. A fair die: $P(6) = \\frac{1}{6}$. Probability of an event not happening: $1 - P(\\text{event})$ — often quicker than counting the complement directly.",
          },
          {
            heading: "Mutually exclusive and independent",
            body: "Mutually exclusive events cannot both happen: $P(A \\text{ or } B) = P(A) + P(B)$. Independent events: $P(A \\text{ and } B) = P(A) \\times P(B)$ — e.g. two coin tosses. For 'at least one' questions, use the complement: $P(\\text{at least one}) = 1 - P(\\text{none})$.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "$P = \\frac{\\text{favourable}}{\\text{total}}$" },
          { name: "Independent AND", statement: "$P(A)\\times P(B)$" },
        ],
        workedExample: {
          problem: "A bag has 3 red and 5 blue balls. Find P(red).",
          solution: "$P(\\text{red}) = \\frac{3}{8}$.",
        },
      },
      questions: [
        {
          id: "cimg-u7-s1-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair die is rolled. What is P(rolling a 6)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{6}$" },
            { id: "b", text: "$\\frac{1}{3}$" },
            { id: "c", text: "1" },
            { id: "d", text: "$\\frac{1}{2}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Probability", statement: "favourable/total." }],
            steps: [{ reasoning: "$P(6) = \\frac{1}{6}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{6}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bag has 4 red and 6 blue balls. Find P(blue).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Count outcomes." }],
            steps: [
              { reasoning: "$P(\\text{blue}) = \\frac{6}{10} = \\frac{3}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{5}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A coin is tossed twice. Find P(two heads).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Combined probability", statement: "Multiply probabilities." }],
            steps: [
              { reasoning: "P(H) = $\\frac{1}{2}$ each time.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{HH}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bag contains 3 red, 2 blue and 3 green balls. Find P(not red).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complementary probability", statement: "$1 - P(\\text{red})$." }],
            steps: [
              { reasoning: "$P(\\text{red}) = \\frac{3}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{not red}) = 1 - \\frac{3}{8} = \\frac{5}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{5}{8}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{8}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair die is rolled. What is P(rolling an even number)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{3}$" },
            { id: "b", text: "$\\frac{1}{6}$" },
            { id: "c", text: "$\\frac{2}{3}$" },
            { id: "d", text: "$\\frac{1}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Probability", statement: "favourable/total." }],
            steps: [{ reasoning: "Even numbers: 2, 4, 6 → $P = \\frac{3}{6} = \\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bag has 3 yellow and 7 green balls. Find P(green).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Count outcomes." }],
            steps: [
              { reasoning: "$P(\\text{green}) = \\frac{7}{10} = 0.7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.7",
          },
        },
        {
          id: "cimg-u7-s1-pr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A fair die is rolled. Find P(rolling a number less than 3 or greater than 4).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mutually exclusive events", statement: "Add probabilities." }],
            steps: [
              { reasoning: "Favourable: 1, 2, 5, 6 → $\\frac{4}{6} = \\frac{2}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{2}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{3}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fair coin is tossed twice. What is P(at least one head)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{2}$" },
            { id: "b", text: "$\\frac{3}{4}$" },
            { id: "c", text: "1" },
            { id: "d", text: "$\\frac{1}{4}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(\\text{none})$." }],
            steps: [{ reasoning: "$P(TT) = \\frac{1}{4}$, so $P(\\text{at least one H}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{3}{4}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 5 red and 3 blue balls. Find P(red).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.625 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Count outcomes." }],
            steps: [
              { reasoning: "$P(\\text{red}) = \\frac{5}{8} = 0.625$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.625.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.625",
          },
        },
        {
          id: "cimg-u7-s1-pr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two fair dice are rolled. Find P(the sum of the two numbers is 7).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sample space", statement: "List favourable outcomes." }],
            steps: [
              { reasoning: "Favourable: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — 6 outcomes.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{6}{36} = \\frac{1}{6}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{6}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{6}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two fair dice are rolled. What is P(at least one 6)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{11}{36}$" },
            { id: "b", text: "$\\frac{7}{36}$" },
            { id: "c", text: "$\\frac{1}{18}$" },
            { id: "d", text: "$\\frac{1}{6}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(\\text{no 6})$." }],
            steps: [
              { reasoning: "$P(\\text{no 6}) = \\frac{25}{36}$, so $P(\\text{at least one 6}) = 1 - \\frac{25}{36} = \\frac{11}{36}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{11}{36}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{11}{36}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner lands on outcome A with probability 0.3 and outcome B with probability 0.5. These are the only outcomes. Find P(neither A nor B).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Complementary probability", statement: "$1 - P(A) - P(B)$." }],
            steps: [
              { reasoning: "$P(A \\text{ or } B) = 0.3 + 0.5 = 0.8$; $P(\\text{neither}) = 1 - 0.8 = 0.2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2",
          },
        },
        {
          id: "cimg-u7-s1-pr-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A fair coin is tossed three times. Find P(exactly two heads).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sample space", statement: "Count favourable sequences." }],
            steps: [
              { reasoning: "Favourable: HHT, HTH, THH — 3 of 8 outcomes.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{3}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{8}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8}$",
          },
        },
        {
          id: "cimg-u7-s1-pr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bag contains only red balls. One ball is picked at random. What is P(red)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It depends on the number of balls" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "0" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "Certain event has probability 1." }],
            steps: [{ reasoning: "Every ball is red, so $P(\\text{red}) = 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cimg-u7-s1-pr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A game is won with probability 0.4 on each of two independent attempts. Find P(win on exactly one attempt).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.48 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Independent events", statement: "Multiply then add orders." }],
            steps: [
              { reasoning: "$P(\\text{win then lose}) = 0.4 \\times 0.6 = 0.24$.", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{lose then win}) = 0.6 \\times 0.4 = 0.24$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 0.24 + 0.24 = 0.48$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.48",
          },
        },
        {
          id: "cimg-u7-s1-pr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A fair coin is tossed and a fair die is rolled. Find P(head and an even number).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Independent events", statement: "Multiply probabilities." }],
            steps: [
              { reasoning: "$P(\\text{head}) = \\frac{1}{2}$ and $P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u7-s1-prob-notes",
      title: "Probability — revision notes",
      summary: "Basic probability, combined events, complement.",
      sections: [
        { heading: "Basics", body: "$P = $ favourable/total. Complement: $1 - P$." },
        { heading: "Combined", body: "Exclusive OR: add. Independent AND: multiply. 'At least one' via $1 - P(\\text{none})$." },
      ],
    },
  ],
};
