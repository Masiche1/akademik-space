import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cimg-u2-lesson-2-2",
  code: "2-2",
  title: "Formulae and Substitution",
  goal: "I CAN substitute values into formulae and change the subject.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: algebra"],
  vocabulary: [
    { term: "Formula", definition: "An equation relating quantities, like $A = \\pi r^2$." },
    { term: "Substitution", definition: "Replacing variables with values." },
    { term: "Subject", definition: "The variable alone on one side." },
    { term: "Rearrange", definition: "Change a formula to make a different variable the subject." },
    { term: "Units", definition: "What a quantity is measured in, e.g. cm²." },
  ],
  concepts: [
    {
      id: "cimg-u2-s2-substitution",
      title: "Substituting into formulae",
      skill: "Substitute values and evaluate formulae at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Substitution",
            body: "Replace each variable with its value, then evaluate using BIDMAS. $v = u + at$ with $u=3$, $a=2$, $t=4$: $v = 3 + 2 \\times 4 = 11$.",
          },
          {
            heading: "Units",
            body: "Always include units in your answer. If $r$ is in cm, $A = \\pi r^2$ gives cm². Check your answer is sensible.",
          },
        ],
        keyFormulas: [
          { name: "v = u + at", statement: "Velocity = initial velocity + acceleration × time" },
        ],
        workedExample: {
          problem: "Find $A = \\pi r^2$ when $r = 5$ cm.",
          solution: "$A = \\pi \\times 25 \\approx 78.5$ cm².",
        },
      },
      questions: [
        {
          id: "cimg-u2-s2-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find $y = 3x + 2$ when $x = 4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "14" }, { id: "b", text: "12" }, { id: "c", text: "10" }, { id: "d", text: "9" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace and evaluate." }],
            steps: [{ reasoning: "$y = 3 \\times 4 + 2 = 14$.", marks: 1, markCode: "A" }],
            finalAnswer: "14",
          },
        },
        {
          id: "cimg-u2-s2-su-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $C = 2\\pi r$ when $r = 7$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 43.98, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Circumference", statement: "$C = 2\\pi r$." }],
            steps: [
              { reasoning: "$C = 2 \\times \\pi \\times 7 = 14\\pi \\approx 43.98$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $14\\pi \\approx 43.98$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14\\pi \\approx 43.98$",
          },
        },
        {
          id: "cimg-u2-s2-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car accelerates at $a = 3$ m/s² for $t = 5$ s from rest ($u = 0$). Find final velocity $v = u + at$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "Substitute values." }],
            steps: [
              { reasoning: "$v = 0 + 3 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 15$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 m/s",
          },
        },
        {
          id: "cimg-u2-s2-su-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "The formula $F = \\frac{mv^2}{r}$ relates force, mass, velocity and radius. Find $F$ when $m = 2$, $v = 3$ and $r = 4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "F = mv²/r", statement: "Substitute all values." }],
            steps: [
              { reasoning: "$F = \\frac{2 \\times 3^2}{4} = \\frac{2 \\times 9}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$F = \\frac{18}{4} = 4.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.5.", marks: 1, markCode: "A" },
              { reasoning: "Check units if given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.5",
          },
        },
      ],
    },
    {
      id: "cimg-u2-s2-subject",
      title: "Changing the subject",
      skill: "Rearrange formulae at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Rearranging",
            body: "Treat the new subject like solving an equation. $v = u + at$ → make $t$ the subject: $t = \\frac{v - u}{a}$.",
          },
          {
            heading: "Fractions in formulae",
            body: "$A = \\frac{1}{2}bh$ → multiply both sides by 2: $2A = bh$ → divide by $h$: $b = \\frac{2A}{h}$.",
          },
        ],
        keyFormulas: [
          { name: "v = u + at", statement: "$t = \\frac{v - u}{a}$" },
        ],
        workedExample: {
          problem: "Make $h$ the subject of $A = \\frac{1}{2}bh$.",
          solution: "$2A = bh$ → $h = \\frac{2A}{b}$.",
        },
      },
      questions: [
        {
          id: "cimg-u2-s2-subj-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Make $x$ the subject of $y = x + 5$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = y - 5$" }, { id: "b", text: "$x = y + 5$" }, { id: "c", text: "$x = 5y$" }, { id: "d", text: "$x = y/5$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Inverse operation." }],
            steps: [{ reasoning: "Subtract 5 from both sides: $x = y - 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = y - 5$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Make $r$ the subject of $C = 2\\pi r$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Divide by $2\\pi$." }],
            steps: [
              { reasoning: "$r = \\frac{C}{2\\pi}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $r = \\frac{C}{2\\pi}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = \\frac{C}{2\\pi}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make $t$ the subject of $v = u + at$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Isolate $t$." }],
            steps: [
              { reasoning: "$v - u = at$.", marks: 1, markCode: "M" },
              { reasoning: "$t = \\frac{v - u}{a}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $t = \\frac{v - u}{a}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = \\frac{v - u}{a}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Make $b$ the subject of $A = \\frac{1}{2}(a + b)h$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Multi-step rearrangement." }],
            steps: [
              { reasoning: "$2A = (a + b)h$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{2A}{h} = a + b$.", marks: 1, markCode: "M" },
              { reasoning: "$b = \\frac{2A}{h} - a$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $b = \\frac{2A}{h} - a$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b = \\frac{2A}{h} - a$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u2-s2-formula-notes",
      title: "Formulae and substitution — revision notes",
      summary: "Substituting values, changing the subject.",
      sections: [
        { heading: "Substitution", body: "Replace variables with values, evaluate with BIDMAS. Always include units." },
        { heading: "Rearranging", body: "Treat like solving an equation. Do inverse operations to isolate the new subject." },
      ],
    },
  ],
};
