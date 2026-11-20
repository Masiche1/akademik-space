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
            { id: "a", text: "$\\frac{1}{6}$" }, { id: "b", text: "$\\frac{1}{3}$" }, { id: "c", text: "$\\frac{1}{2}$" }, { id: "d", text: "1" },
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
