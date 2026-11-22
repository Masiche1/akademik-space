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
            { id: "a", text: "9" },
            { id: "b", text: "10" },
            { id: "c", text: "14" },
            { id: "d", text: "12" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u2-s2-su-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find $y = 2x - 3$ when $x = 5$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "13" },
            { id: "b", text: "7" },
            { id: "c", text: "-7" },
            { id: "d", text: "10" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace and evaluate." }],
            steps: [{ reasoning: "$y = 2 \\times 5 - 3 = 7$.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cimg-u2-s2-su-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $A = \\pi r^2$ when $r = 2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12.57, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Area of circle", statement: "$A = \\pi r^2$." }],
            steps: [
              { reasoning: "$A = \\pi \\times 2^2 = 4\\pi \\approx 12.57$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4\\pi \\approx 12.57$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\pi \\approx 12.57$",
          },
        },
        {
          id: "cimg-u2-s2-su-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $v = u + at$, find $v$ when $u = 2$, $a = 3$ and $t = 4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "9" },
            { id: "c", text: "24" },
            { id: "d", text: "14" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "Substitute all values." }],
            steps: [{ reasoning: "$v = 2 + 3 \\times 4 = 14$.", marks: 1, markCode: "A" }],
            finalAnswer: "14",
          },
        },
        {
          id: "cimg-u2-s2-su-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distance $d$ metres is given by $d = rt$ where $r$ is speed in m/s and $t$ is time in seconds. Find $d$ when $r = 60$ and $t = 2.5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 150, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Multiply speed by time." }],
            steps: [
              { reasoning: "$d = 60 \\times 2.5$.", marks: 1, markCode: "M" },
              { reasoning: "$d = 150$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 150 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 m",
          },
        },
        {
          id: "cimg-u2-s2-su-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find $P = 2(l + w)$ when $l = 5$ and $w = 3$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "30" },
            { id: "b", text: "10" },
            { id: "c", text: "16" },
            { id: "d", text: "8" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "BIDMAS: inside bracket first." }],
            steps: [{ reasoning: "$P = 2(5 + 3) = 2 \\times 8 = 16$.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cimg-u2-s2-su-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The volume of a cylinder is $V = \\pi r^2 h$. Find $V$ when $r = 3$ cm and $h = 2$ cm.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Volume of cylinder", statement: "$V = \\pi r^2 h$." }],
            steps: [
              { reasoning: "$V = \\pi \\times 3^2 \\times 2 = \\pi \\times 9 \\times 2$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 18\\pi \\approx 56.5$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $18\\pi \\approx 56.5$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18\\pi \\approx 56.5$ cm³",
          },
        },
        {
          id: "cimg-u2-s2-su-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distance fallen is $h = \\frac{1}{2}gt^2$ with $g = 10$ m/s². Find $h$ when $t = 3$ s.",
          response: { type: "numeric", parts: [{ label: "a", answer: 45, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "h = ½gt²", statement: "Square before multiplying." }],
            steps: [
              { reasoning: "$h = \\frac{1}{2} \\times 10 \\times 3^2 = 5 \\times 9$.", marks: 1, markCode: "M" },
              { reasoning: "$h = 45$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 45 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45 m",
          },
        },
        {
          id: "cimg-u2-s2-su-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Find $A = \\frac{1}{2}(a + b)h$ when $a = 4$, $b = 6$ and $h = 5$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "30" },
            { id: "b", text: "15" },
            { id: "c", text: "50" },
            { id: "d", text: "25" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "BIDMAS with fractions." }],
            steps: [{ reasoning: "$A = \\frac{1}{2}(4 + 6) \\times 5 = \\frac{1}{2} \\times 10 \\times 5 = 25$.", marks: 1, markCode: "A" }],
            finalAnswer: "25",
          },
        },
        {
          id: "cimg-u2-s2-su-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using $v = u + at$, find $v$ when $u = -5$, $a = 2$ and $t = 10$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "v = u + at", statement: "Handle negative values carefully." }],
            steps: [
              { reasoning: "$v = -5 + 2 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "$v = -5 + 20 = 15$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 m/s.", marks: 1, markCode: "M" },
              { reasoning: "Check: positive final velocity makes sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 m/s",
          },
        },
        {
          id: "cimg-u2-s2-su-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $N = 2x^2 - y$ when $x = 3$ and $y = 4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Square first, then subtract." }],
            steps: [
              { reasoning: "$2 \\times 3^2 = 2 \\times 9 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "$18 - 4 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $N = 14$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 14.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cimg-u2-s2-su-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $y = x^2 + 1$ when $x = 4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Square before adding." }],
            steps: [
              { reasoning: "$y = 4^2 + 1 = 16 + 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y = 17$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u2-s2-su-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Temperature $C$ in °C is given by $C = \\frac{5}{9}(F - 32)$ where $F$ is in °F. Find $C$ when $F = 212$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 100, unit: "°C" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Temperature conversion", statement: "Subtract 32 first." }],
            steps: [
              { reasoning: "$C = \\frac{5}{9}(212 - 32) = \\frac{5}{9} \\times 180$.", marks: 1, markCode: "M" },
              { reasoning: "$C = 100$ °C.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 100 °C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 °C",
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
            { id: "a", text: "$x = y - 5$" },
            { id: "b", text: "$x = 5y$" },
            { id: "c", text: "$x = y + 5$" },
            { id: "d", text: "$x = y/5$" },
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
        {
          id: "cimg-u2-s2-subj-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Make $x$ the subject of $y = 3x - 2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = \\frac{y - 2}{3}$" },
            { id: "b", text: "$x = \\frac{y}{3} - 2$" },
            { id: "c", text: "$x = \\frac{y + 2}{3}$" },
            { id: "d", text: "$x = 3y + 2$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Add 2, then divide by 3." }],
            steps: [{ reasoning: "$y + 2 = 3x$ → $x = \\frac{y + 2}{3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = \\frac{y + 2}{3}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Make $x$ the subject of $y = x - 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Add 7 to both sides." }],
            steps: [
              { reasoning: "$x = y + 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = y + 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = y + 7$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Make $x$ the subject of $y = 4x$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = \\frac{4}{y}$" },
            { id: "b", text: "$x = y - 4$" },
            { id: "c", text: "$x = \\frac{y}{4}$" },
            { id: "d", text: "$x = 4y$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Divide by 4." }],
            steps: [{ reasoning: "$x = \\frac{y}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = \\frac{y}{4}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make $h$ the subject of $A = \\frac{1}{2}bh$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Multiply by 2, then divide by $b$." }],
            steps: [
              { reasoning: "$2A = bh$.", marks: 1, markCode: "M" },
              { reasoning: "$h = \\frac{2A}{b}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $h = \\frac{2A}{b}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$h = \\frac{2A}{b}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Make $u$ the subject of $v = u + at$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$u = v - at$" },
            { id: "b", text: "$u = \\frac{v}{at}$" },
            { id: "c", text: "$u = at - v$" },
            { id: "d", text: "$u = v + at$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Subtract $at$ from both sides." }],
            steps: [{ reasoning: "$u = v - at$.", marks: 1, markCode: "A" }],
            finalAnswer: "$u = v - at$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Make $a$ the subject of $v = u + at$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Isolate $at$ then divide by $t$." }],
            steps: [
              { reasoning: "$v - u = at$.", marks: 1, markCode: "M" },
              { reasoning: "$a = \\frac{v - u}{t}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a = \\frac{v - u}{t}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: substitute back gives $v = u + at$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = \\frac{v - u}{t}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make $d$ the subject of $C = \\pi d$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Divide by $\\pi$." }],
            steps: [
              { reasoning: "$d = \\frac{C}{\\pi}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $d = \\frac{C}{\\pi}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\pi \\times \\frac{C}{\\pi} = C$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$d = \\frac{C}{\\pi}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Make $x$ the subject of $y = \\frac{5}{x}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Multiply both sides by $x$ first." }],
            steps: [
              { reasoning: "$xy = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$x = \\frac{5}{y}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = \\frac{5}{y}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{5}{5/y} = y$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\frac{5}{y}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Make $h$ the subject of $V = \\pi r^2 h$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$h = \\frac{V}{\\pi r^2}$" },
            { id: "b", text: "$h = \\frac{\\pi r^2}{V}$" },
            { id: "c", text: "$h = V \\pi r^2$" },
            { id: "d", text: "$h = \\frac{V}{\\pi r}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Divide by $\\pi r^2$." }],
            steps: [{ reasoning: "$h = \\frac{V}{\\pi r^2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$h = \\frac{V}{\\pi r^2}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Make $v$ the subject of $T = \\frac{v - u}{a}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Multiply by $a$, then add $u$." }],
            steps: [
              { reasoning: "$Ta = v - u$.", marks: 1, markCode: "M" },
              { reasoning: "$v = u + aT$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $v = u + aT$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{(u + aT) - u}{a} = T$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = u + aT$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make $x$ the subject of $y = \\frac{3x}{4} + 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Subtract 1, then multiply by $\\frac{4}{3}$." }],
            steps: [
              { reasoning: "$y - 1 = \\frac{3x}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$x = \\frac{4}{3}(y - 1)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = \\frac{4(y - 1)}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\frac{4(y - 1)}{3}$",
          },
        },
        {
          id: "cimg-u2-s2-subj-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Make $g$ the subject of $h = \\frac{gt}{2}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$g = \\frac{2t}{h}$" },
            { id: "b", text: "$g = \\frac{ht}{2}$" },
            { id: "c", text: "$g = \\frac{h}{2t}$" },
            { id: "d", text: "$g = \\frac{2h}{t}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging", statement: "Multiply by 2, then divide by $t$." }],
            steps: [{ reasoning: "$2h = gt$ → $g = \\frac{2h}{t}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$g = \\frac{2h}{t}$",
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
