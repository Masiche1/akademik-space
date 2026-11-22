import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "cial-m-u2-lesson-2-1",
  code: "2-1",
  title: "Radians and arc length",
  goal: "I CAN convert between degrees and radians and use arc length and sector area formulae.",
  standards: ["9709 P1: trigonometry"],
  vocabulary: [
    {
      term: "Radian",
      definition:
        "The angle subtended at the centre of a circle by an arc equal to the radius; $180^\\circ = \\pi$ rad.",
    },
    {
      term: "Arc length",
      definition: "$s = r\\theta$ where $\\theta$ is in radians.",
    },
    {
      term: "Sector area",
      definition:
        "$A = \\tfrac{1}{2}r^2\\theta$ where $\\theta$ is in radians.",
    },
    {
      term: "Angular speed",
      definition:
        "Rate of change of angle, $\\omega = \\frac{d\\theta}{dt}$, in rad/s.",
    },
    {
      term: "Linear speed",
      definition:
        "$v = r\\omega$ — tangential speed of a point on a rotating object.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u2-radians",
      title: "Radians and conversion",
      skill: "Convert angles between degrees and radians.",
      lesson: {
        sections: [
          {
            heading: "Why radians",
            body: "Radians measure angles by arc length: one radian is the angle where the arc equals the radius. A full circle is $2\\pi$ radians. Radians make calculus and physics formulas simpler — always convert before using trig formulae in calculus.",
          },
          {
            heading: "Conversion",
            body: "$180^\\circ = \\pi$ rad. To convert degrees to radians: multiply by $\\frac{\\pi}{180}$. To convert radians to degrees: multiply by $\\frac{180}{\\pi}$. E.g. $60^\\circ = 60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3}$ rad; $\\frac{\\pi}{4}$ rad $= 45^\\circ$.",
          },
          {
            heading: "Common values",
            body: "Memorise: $30^\\circ = \\frac{\\pi}{6}$, $45^\\circ = \\frac{\\pi}{4}$, $60^\\circ = \\frac{\\pi}{3}$, $90^\\circ = \\frac{\\pi}{2}$, $180^\\circ = \\pi$, $360^\\circ = 2\\pi$.",
          },
        ],
        keyFormulas: [
          {
            name: "Conversion",
            statement:
              "degrees $\\times \\frac{\\pi}{180}$ = radians; radians $\\times \\frac{180}{\\pi}$ = degrees.",
          },
        ],
        workedExample: {
          problem: "Convert $135^\\circ$ to radians.",
          solution:
            "$135 \\times \\frac{\\pi}{180} = \\frac{135\\pi}{180} = \\frac{3\\pi}{4}$ rad.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many radians is $180^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pi$" },
              { id: "b", text: "$\\frac{\\pi}{2}$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$2\\pi$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radian",
                statement: "$180^\\circ = \\pi$ rad by definition.",
              },
            ],
            steps: [
              {
                reasoning: "$180^\\circ$ is half a turn $= \\pi$ rad.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$\\pi$ rad",
            commonErrors: ["Confusing with $360^\\circ = 2\\pi$."],
          },
        },
        {
          id: "cial-m-u2-ra-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $60^\\circ$ to radians, leaving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "degrees $\\times \\frac{\\pi}{180}$ = radians.",
              },
            ],
            steps: [
              {
                reasoning: "$60 \\times \\frac{\\pi}{180}$.",
                working: "60 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{\\pi}{3}$ rad.",
                working: "\\frac{\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\pi}{3}$ rad",
            commonErrors: ["Answering $60\\pi$ — forgetting to divide by 180."],
          },
        },
        {
          id: "cial-m-u2-ra-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert $\\frac{5\\pi}{6}$ radians to degrees.",
          response: {
            type: "numeric",
            parts: [{ label: "degrees", answer: 150, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "radians $\\times \\frac{180}{\\pi}$ = degrees.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{5\\pi}{6} \\times \\frac{180}{\\pi}$.",
                working: "\\frac{5\\pi}{6} \\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cancel $\\pi$: $\\frac{5 \\times 180}{6}$.",
                working: "\\frac{5 \\times 180}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{900}{6} = 150$.",
                working: "150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$150^\\circ$.",
                working: "150^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$150^\\circ$",
            commonErrors: [
              "Multiplying by $\\frac{\\pi}{180}$ instead of $\\frac{180}{\\pi}$.",
            ],
          },
        },
        {
          id: "cial-m-u2-ra-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Radians and conversion.",
          parts: [
            {
              label: "a",
              prompt: "How many radians in $180^\\circ$?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Convert $60^\\circ$ to radians (in terms of $\\pi$).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Convert $\\frac{5\\pi}{6}$ rad to degrees.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Convert $210^\\circ$ to radians (in terms of $\\pi$).",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement:
                  "degrees $\\times \\frac{\\pi}{180}$; radians $\\times \\frac{180}{\\pi}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\pi$ rad.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$60 \\times \\frac{\\pi}{180}$.",
                working: "60 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{\\pi}{3}$.",
                working: "\\frac{\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\frac{5\\pi}{6} \\times \\frac{180}{\\pi}$.",
                working: "\\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= \\frac{5 \\times 180}{6} = \\frac{900}{6}$.",
                working: "900/6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 150^\\circ$.",
                working: "150^\\circ",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$210 \\times \\frac{\\pi}{180}$.",
                working: "210 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{210\\pi}{180}$.",
                working: "\\frac{210\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Simplify: divide by 30: $\\frac{7\\pi}{6}$.",
                working: "\\frac{7\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) π (b) π/3 (c) 150° (d) 7π/6",
          },
        },
        {
          id: "cial-m-u2-ra-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many radians is $360^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\pi$" },
              { id: "b", text: "$2\\pi$" },
              { id: "c", text: "$\\pi$" },
              { id: "d", text: "$\\frac{\\pi}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radian",
                statement: "A full turn is $2\\pi$ radians.",
              },
            ],
            steps: [
              {
                reasoning: "$360^\\circ$ is a full turn $= 2\\pi$ rad.",
                working: "2\\pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2\\pi$ rad",
            commonErrors: ["Confusing with $180^\\circ = \\pi$."],
          },
        },
        {
          id: "cial-m-u2-ra-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $45^\\circ$ to radians, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "radians", answer: 0.785, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "degrees $\\times \\frac{\\pi}{180}$ = radians.",
              },
            ],
            steps: [
              {
                reasoning: "$45 \\times \\frac{\\pi}{180} = \\frac{\\pi}{4}$.",
                working: "45 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{\\pi}{4} \\approx 0.785$ rad.",
                working: "0.785",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.785$ rad",
            commonErrors: ["Forgetting to evaluate the decimal."],
          },
        },
        {
          id: "cial-m-u2-ra-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert $\\frac{\\pi}{6}$ radians to degrees.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$150^\\circ$" },
              { id: "b", text: "$30^\\circ$" },
              { id: "c", text: "$45^\\circ$" },
              { id: "d", text: "$60^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Common value",
                statement: "$30^\\circ = \\frac{\\pi}{6}$ rad.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{\\pi}{6} \\times \\frac{180}{\\pi} = 30$.",
                working: "30^\\circ",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$30^\\circ$",
            commonErrors: ["Multiplying by $\\frac{\\pi}{180}$ instead of $\\frac{180}{\\pi}$."],
          },
        },
        {
          id: "cial-m-u2-ra-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $240^\\circ$ to radians, leaving your answer in terms of $\\pi$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3\\pi}{4}$" },
              { id: "b", text: "$\\frac{4\\pi}{3}$" },
              { id: "c", text: "$\\frac{5\\pi}{6}$" },
              { id: "d", text: "$\\frac{2\\pi}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "degrees $\\times \\frac{\\pi}{180}$ = radians.",
              },
            ],
            steps: [
              {
                reasoning: "$240 \\times \\frac{\\pi}{180} = \\frac{240\\pi}{180}$.",
                working: "\\frac{240\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify by 60: $\\frac{4\\pi}{3}$ rad.",
                working: "\\frac{4\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{4\\pi}{3}$ rad",
            commonErrors: ["Simplifying incorrectly or inverting the fraction."],
          },
        },
        {
          id: "cial-m-u2-ra-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert $\\frac{5\\pi}{4}$ radians to degrees.",
          response: {
            type: "numeric",
            parts: [{ label: "degrees", answer: 225, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "radians $\\times \\frac{180}{\\pi}$ = degrees.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{5\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{5 \\times 180}{4}$.",
                working: "\\frac{5 \\times 180}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{900}{4} = 225^\\circ$.",
                working: "225^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$225^\\circ$",
            commonErrors: ["Multiplying by $\\frac{\\pi}{180}$ instead."],
          },
        },
        {
          id: "cial-m-u2-ra-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which of the following is equal to $330^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{7\\pi}{6}$" },
              { id: "b", text: "$\\frac{5\\pi}{6}$" },
              { id: "c", text: "$\\frac{4\\pi}{3}$" },
              { id: "d", text: "$\\frac{11\\pi}{6}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "degrees $\\times \\frac{\\pi}{180}$ = radians.",
              },
            ],
            steps: [
              {
                reasoning: "$330 \\times \\frac{\\pi}{180} = \\frac{330\\pi}{180}$.",
                working: "\\frac{330\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by 30: $\\frac{11\\pi}{6}$.",
                working: "\\frac{11\\pi}{6}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{11\\pi}{6}$ rad",
            commonErrors: ["Not simplifying the fraction fully."],
          },
        },
        {
          id: "cial-m-u2-ra-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert $2.5$ radians to degrees, giving your answer to 1 decimal place.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "radians $\\times \\frac{180}{\\pi}$ = degrees.",
              },
            ],
            steps: [
              {
                reasoning: "$2.5 \\times \\frac{180}{\\pi}$.",
                working: "2.5 \\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{450}{\\pi} \\approx 143.24$.",
                working: "143.24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "To 1 d.p.: $143.2^\\circ$.",
                working: "143.2^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$143.2^\\circ$",
            commonErrors: [
              "Multiplying by $\\frac{\\pi}{180}$ instead of $\\frac{180}{\\pi}$.",
            ],
          },
        },
        {
          id: "cial-m-u2-ra-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many radians are there in $360^\\circ$, giving your answer to 3 significant figures?",
          response: {
            type: "numeric",
            parts: [{ label: "radians", answer: 6.28, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radian",
                statement: "A full turn is $2\\pi$ radians.",
              },
            ],
            steps: [
              {
                reasoning: "$2\\pi \\approx 6.28$ rad.",
                working: "6.28",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$6.28$ rad",
            commonErrors: ["Leaving the answer as $2\\pi$ when a decimal is requested."],
          },
        },
        {
          id: "cial-m-u2-ra-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "To convert an angle from radians to degrees, you should",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "multiply by $\\frac{\\pi}{180}$" },
              { id: "b", text: "multiply by $180$" },
              { id: "c", text: "multiply by $\\frac{180}{\\pi}$" },
              { id: "d", text: "divide by $\\pi$ only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement:
                  "Since $\\pi$ rad $= 180^\\circ$, radians $\\times \\frac{180}{\\pi}$ = degrees.",
              },
            ],
            steps: [
              {
                reasoning: "Use $180^\\circ = \\pi$ rad as the bridge.",
                working: "180^\\circ = \\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by $\\frac{180}{\\pi}$.",
                working: "\\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Multiply by $\\frac{180}{\\pi}$",
            commonErrors: ["Using the degrees-to-radians factor."],
          },
        },
        {
          id: "cial-m-u2-ra-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $100^\\circ$ to radians, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "radians", answer: 1.75, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "degrees $\\times \\frac{\\pi}{180}$ = radians.",
              },
            ],
            steps: [
              {
                reasoning: "$100 \\times \\frac{\\pi}{180} = \\frac{5\\pi}{9}$.",
                working: "\\frac{5\\pi}{9}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{5\\pi}{9} \\approx 1.75$ rad.",
                working: "1.75",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.75$ rad",
            commonErrors: ["Arithmetic slip in simplifying $\\frac{100\\pi}{180}$."],
          },
        },
        {
          id: "cial-m-u2-ra-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert $\\frac{7\\pi}{4}$ radians to degrees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "radians $\\times \\frac{180}{\\pi}$ = degrees.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{7\\pi}{4} \\times \\frac{180}{\\pi}$.",
                working: "\\frac{7\\pi}{4} \\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cancel $\\pi$: $\\frac{7 \\times 180}{4}$.",
                working: "\\frac{7 \\times 180}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{1260}{4} = 315$.",
                working: "315",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$315^\\circ$.",
                working: "315^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$315^\\circ$",
            commonErrors: ["Arithmetic error in $7 \\times 180 \\div 4$."],
          },
        },
        {
          id: "cial-m-u2-ra-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Radians and conversion.",
          parts: [
            {
              label: "a",
              prompt: "How many radians is $180^\\circ$?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Convert $75^\\circ$ to radians (in terms of $\\pi$).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Convert $\\frac{4\\pi}{3}$ rad to degrees.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Convert $315^\\circ$ to radians (in terms of $\\pi$).",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement:
                  "degrees $\\times \\frac{\\pi}{180}$; radians $\\times \\frac{180}{\\pi}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\pi$ rad.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$75 \\times \\frac{\\pi}{180}$.",
                working: "75 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify by 15: $\\frac{5\\pi}{12}$.",
                working: "\\frac{5\\pi}{12}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\frac{4\\pi}{3} \\times \\frac{180}{\\pi}$.",
                working: "\\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Cancel $\\pi$: $\\frac{4 \\times 180}{3} = 240$.",
                working: "240",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$240^\\circ$.",
                working: "240^\\circ",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$315 \\times \\frac{\\pi}{180}$.",
                working: "315 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{315\\pi}{180}$.",
                working: "\\frac{315\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Simplify by 45: $\\frac{7\\pi}{4}$.",
                working: "\\frac{7\\pi}{4}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) π (b) 5π/12 (c) 240° (d) 7π/4",
          },
        },
      ],
    },
    {
      id: "cial-m-u2-arc-sector",
      title: "Arc length and sector area",
      skill:
        "Apply $s = r\\theta$ and $A = \\tfrac{1}{2}r^2\\theta$ in radians.",
      lesson: {
        sections: [
          {
            heading: "Arc length",
            body: "For a circle of radius $r$ and angle $\\theta$ (in radians): $s = r\\theta$. This is the same as $s = r \\times \\theta$ — remember radians are dimensionless, so $s$ has units of length.",
          },
          {
            heading: "Sector area",
            body: "$A = \\frac{1}{2}r^2\\theta$ — the sector is the fraction $\\frac{\\theta}{2\\pi}$ of the full circle's area $\\pi r^2$. For $\\theta = \\frac{\\pi}{2}$ (quarter turn): $A = \\frac{1}{2}r^2 \\cdot \\frac{\\pi}{2} = \\frac{\\pi r^2}{4}$.",
          },
          {
            heading: "Perimeter of a sector",
            body: "Sector perimeter = arc length + two radii: $P = r\\theta + 2r = r(\\theta + 2)$. Common exam trap — students forget the straight edges.",
          },
        ],
        keyFormulas: [
          {
            name: "Arc length",
            statement: "$s = r\\theta$ ($\\theta$ in radians).",
          },
          {
            name: "Sector area",
            statement: "$A = \\frac{1}{2}r^2\\theta$ ($\\theta$ in radians).",
          },
          { name: "Sector perimeter", statement: "$P = r(\\theta + 2)$." },
        ],
        workedExample: {
          problem:
            "A sector has radius 8 cm and angle $\\frac{\\pi}{4}$ rad. Find its arc length and area.",
          solution:
            "$s = 8 \\times \\frac{\\pi}{4} = 2\\pi$ cm. $A = \\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4} = 8\\pi$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-as-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has radius 5 cm and an arc subtends $1.2$ rad at the centre. What is the arc length?",
          response: {
            type: "numeric",
            parts: [
              { label: "arc length", answer: 6, unit: "cm", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc length",
                statement: "$s = r\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "$s = 5 \\times 1.2 = 6$.",
                working: "5 \\times 1.2 = 6",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$6$ cm",
            commonErrors: ["Using degrees — must be radians."],
          },
        },
        {
          id: "cial-m-u2-as-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sector has radius 8 cm and angle $\\frac{\\pi}{4}$ rad. Find its area, leaving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector area",
                statement: "$A = \\frac{1}{2}r^2\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A = \\frac{1}{2} \\times 8^2 \\times \\frac{\\pi}{4}$.",
                working: "\\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{64\\pi}{8} = 8\\pi$.",
                working: "8\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A = 8\\pi$ cm$^2$.",
                working: "8\\pi \\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8\\pi$ cm$^2$",
            commonErrors: [
              "Forgetting the $\\frac{1}{2}$ factor or using $\\pi r^2$ directly.",
            ],
          },
        },
        {
          id: "cial-m-u2-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sector has radius 10 cm and perimeter 25 cm. Find the angle $\\theta$ in radians.",
          response: {
            type: "numeric",
            parts: [
              { label: "theta", answer: 0.5, unit: "rad", tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector perimeter",
                statement: "$P = r\\theta + 2r = r(\\theta + 2)$.",
              },
            ],
            steps: [
              {
                reasoning: "$25 = 10\\theta + 20$.",
                working: "25 = 10\\theta + 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$10\\theta = 5$.",
                working: "10\\theta = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = 0.5$ rad.",
                working: "\\theta = 0.5",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 0.5$ rad",
            commonErrors: [
              "Forgetting the two radii in perimeter — using $P = r\\theta$ only.",
            ],
          },
        },
        {
          id: "cial-m-u2-as-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Arc length and sector area.",
          parts: [
            {
              label: "a",
              prompt: "Arc length: $r=5$, $\\theta=1.2$ rad.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Sector area: $r=8$, $\\theta=\\frac{\\pi}{4}$ rad (in terms of $\\pi$).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Sector perimeter: $r=10$, $\\theta=0.5$ rad.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A wheel of radius 0.4 m rotates through $3$ rad. How far does a point on the rim travel?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc/sector",
                statement:
                  "$s=r\\theta$; $A=\\frac{1}{2}r^2\\theta$; $P=r(\\theta+2)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$s = 5 \\times 1.2 = 6$.",
                working: "6",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Units cm.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning:
                  "$A = \\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}$.",
                working: "\\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= 8\\pi$.",
                working: "8\\pi",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$P = 10(0.5 + 2) = 25$.",
                working: "10 \\times 2.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 25$ cm.",
                working: "25",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Distance = arc length $= r\\theta = 0.4 \\times 3$.",
                working: "0.4 \\times 3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= 1.2$ m.",
                working: "1.2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 6 cm (b) 8π cm² (c) 25 cm (d) 1.2 m",
          },
        },
        {
          id: "cial-m-u2-as-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sector of radius $r$ and angle $\\theta$ radians has area",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A = r^2\\theta$" },
              { id: "b", text: "$A = \\frac{1}{2}r^2\\theta$" },
              { id: "c", text: "$A = \\pi r^2$" },
              { id: "d", text: "$A = r\\theta$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector area",
                statement: "$A = \\frac{1}{2}r^2\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "Sector area is $\\frac{1}{2}r^2\\theta$.",
                working: "\\frac{1}{2}r^2\\theta",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$A = \\frac{1}{2}r^2\\theta$",
            commonErrors: ["Confusing area with arc length $r\\theta$."],
          },
        },
        {
          id: "cial-m-u2-as-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle of radius $6$ cm has an arc subtending $\\frac{\\pi}{3}$ rad at the centre. Find the arc length.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pi$ cm" },
              { id: "b", text: "$3\\pi$ cm" },
              { id: "c", text: "$2\\pi$ cm" },
              { id: "d", text: "$6\\pi$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc length",
                statement: "$s = r\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "$s = 6 \\times \\frac{\\pi}{3}$.",
                working: "6 \\times \\frac{\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 2\\pi$ cm.",
                working: "2\\pi \\text{ cm}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2\\pi$ cm",
            commonErrors: ["Using the sector area formula instead."],
          },
        },
        {
          id: "cial-m-u2-as-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An arc of a circle of radius $4$ m subtends $0.5$ rad at the centre. Find its length.",
          response: {
            type: "numeric",
            parts: [
              { label: "arc length", answer: 2, unit: "m", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc length",
                statement: "$s = r\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "$s = 4 \\times 0.5 = 2$ m.",
                working: "4 \\times 0.5 = 2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2$ m",
            commonErrors: ["Forgetting units or using degrees."],
          },
        },
        {
          id: "cial-m-u2-as-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sector has radius $10$ cm and angle $\\frac{\\pi}{5}$ rad. Find its area, leaving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector area",
                statement: "$A = \\frac{1}{2}r^2\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\frac{1}{2} \\times 10^2 \\times \\frac{\\pi}{5}$.",
                working: "\\frac{1}{2} \\times 100 \\times \\frac{\\pi}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{100\\pi}{10} = 10\\pi$.",
                working: "10\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A = 10\\pi$ cm$^2$.",
                working: "10\\pi \\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10\\pi$ cm$^2$",
            commonErrors: ["Forgetting the $\\frac{1}{2}$ or squaring incorrectly."],
          },
        },
        {
          id: "cial-m-u2-as-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sector has radius $5$ cm and angle $1.2$ rad. Find its perimeter.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$ cm" },
              { id: "b", text: "$11$ cm" },
              { id: "c", text: "$16$ cm" },
              { id: "d", text: "$26$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector perimeter",
                statement: "$P = r\\theta + 2r = r(\\theta + 2)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P = 5(1.2 + 2) = 5 \\times 3.2$.",
                working: "5 \\times 3.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 16$ cm.",
                working: "16 \\text{ cm}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$16$ cm",
            commonErrors: ["Forgetting the two radii — using $r\\theta$ only."],
          },
        },
        {
          id: "cial-m-u2-as-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sector has radius $3$ cm and angle $2$ rad. Find its area.",
          response: {
            type: "numeric",
            parts: [{ label: "area", answer: 9, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector area",
                statement: "$A = \\frac{1}{2}r^2\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\frac{1}{2} \\times 3^2 \\times 2$.",
                working: "\\frac{1}{2} \\times 9 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{1}{2} \\times 18 = 9$ cm$^2$.",
                working: "9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct area.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9$ cm$^2$",
            commonErrors: ["Forgetting the $\\frac{1}{2}$ factor."],
          },
        },
        {
          id: "cial-m-u2-as-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sector has radius $12$ cm and angle $\\frac{\\pi}{6}$ rad. Find its arc length and its area, giving your answers in terms of $\\pi$ where appropriate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc/sector",
                statement: "$s = r\\theta$; $A = \\frac{1}{2}r^2\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "Arc: $s = 12 \\times \\frac{\\pi}{6}$.",
                working: "12 \\times \\frac{\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s = 2\\pi$ cm.",
                working: "2\\pi \\text{ cm}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Area: $A = \\frac{1}{2} \\times 144 \\times \\frac{\\pi}{6}$.",
                working: "\\frac{1}{2} \\times 144 \\times \\frac{\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A = 12\\pi$ cm$^2$.",
                working: "12\\pi \\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Arc $2\\pi$ cm, area $12\\pi$ cm$^2$",
            commonErrors: ["Using degrees instead of radians."],
          },
        },
        {
          id: "cial-m-u2-as-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the formulae $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$, the angle $\\theta$ must be measured in",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "either radians or degrees" },
              { id: "b", text: "degrees" },
              { id: "c", text: "radians" },
              { id: "d", text: "gradians" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radian",
                statement:
                  "Arc and sector formulae are only valid with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "The formulae require radians.",
                working: "\\text{radians}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Radians",
            commonErrors: ["Using degrees directly in the formulae."],
          },
        },
        {
          id: "cial-m-u2-as-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "An arc of length $8$ cm is part of a circle of radius $4$ cm. Find the angle $\\theta$ subtended at the centre and the area of the corresponding sector.",
          response: {
            type: "numeric",
            parts: [
              { label: "theta", answer: 2, unit: "rad", tolerance: 0.01 },
              { label: "area", answer: 16, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc/sector",
                statement: "$\\theta = \\frac{s}{r}$; $A = \\frac{1}{2}r^2\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\theta = \\frac{s}{r} = \\frac{8}{4}$.",
                working: "\\frac{8}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = 2$ rad.",
                working: "\\theta = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A = \\frac{1}{2} \\times 16 \\times 2 = 16$ cm$^2$.",
                working: "16 \\text{ cm}^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both values correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 2$ rad, $A = 16$ cm$^2$",
            commonErrors: ["Using $s = r\\theta$ incorrectly to find $\\theta$."],
          },
        },
        {
          id: "cial-m-u2-as-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sector of radius $10$ cm has perimeter $30$ cm. What is its angle $\\theta$ in radians?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$0.5$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector perimeter",
                statement: "$P = r(\\theta + 2)$.",
              },
            ],
            steps: [
              {
                reasoning: "$30 = 10(\\theta + 2) \\Rightarrow \\theta + 2 = 3$.",
                working: "\\theta + 2 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = 1$ rad.",
                working: "\\theta = 1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = 1$ rad",
            commonErrors: ["Forgetting the two radii in the perimeter."],
          },
        },
        {
          id: "cial-m-u2-as-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Arc length, sector area and perimeter.",
          parts: [
            {
              label: "a",
              prompt: "Arc length: $r = 5$, $\\theta = 1.4$ rad.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Sector area: $r = 5$, $\\theta = 1.4$ rad.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Perimeter of the same sector.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc/sector",
                statement: "$s = r\\theta$; $A = \\frac{1}{2}r^2\\theta$; $P = r(\\theta + 2)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$s = 5 \\times 1.4 = 7$.",
                working: "7",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$A = \\frac{1}{2} \\times 25 \\times 1.4$.",
                working: "\\frac{1}{2} \\times 25 \\times 1.4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= 17.5$.",
                working: "17.5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Arc is 7; add two radii: $7 + 2 \\times 5$.",
                working: "7 + 10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or $P = 5(1.4 + 2) = 17$.",
                working: "5 \\times 3.4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$P = 17$.",
                working: "17",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 7 (b) 17.5 (c) 17",
          },
        },
        {
          id: "cial-m-u2-as-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Arc length and sector area — mixed practice.",
          parts: [
            {
              label: "a",
              prompt: "Arc length: $r = 8$, $\\theta = \\frac{\\pi}{4}$ rad.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Sector area: $r = 8$, $\\theta = \\frac{\\pi}{4}$ rad, in terms of $\\pi$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Perimeter of a sector with $r = 10$, $\\theta = 0.8$ rad.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A wheel of radius $0.5$ m rotates through $\\frac{\\pi}{2}$ rad. How far does a point on the rim travel?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc/sector",
                statement: "$s = r\\theta$; $A = \\frac{1}{2}r^2\\theta$; $P = r(\\theta + 2)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$s = 8 \\times \\frac{\\pi}{4}$.",
                working: "8 \\times \\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$= 2\\pi$.",
                working: "2\\pi",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$A = \\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}$.",
                working: "\\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= 8\\pi$.",
                working: "8\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct with units cm$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$P = 10(0.8 + 2) = 28$.",
                working: "10 \\times 2.8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 28$.",
                working: "28",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Distance $=$ arc length $= r\\theta = 0.5 \\times \\frac{\\pi}{2}$.",
                working: "0.5 \\times \\frac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{\\pi}{4} \\approx 0.785$ m.",
                working: "0.785",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct distance with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2π (b) 8π (c) 28 (d) π/4 ≈ 0.785 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u2-radians-arc-length-notes",
      title: "Radians and arc length — revision notes",
      summary:
        "Degree–radian conversion, arc length $s=r\\theta$, and sector area $A=\\frac12 r^2\\theta$.",
      sections: [
        {
          heading: "Radians",
          body: "$180^\\circ=\\pi$ radians, so $x^\\circ=\\frac{\\pi x}{180}$ and $\\theta$ rad $=\\frac{180\\theta}{\\pi}$ degrees. Keep $\\theta$ in radians inside $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$ and the arc formulae — this is the most common error.",
        },
        {
          heading: "Arc and sector",
          body: "For a circle of radius $r$ and angle $\\theta$ (radians): arc length $s=r\\theta$; sector area $A=\\frac12 r^2\\theta$. Segment area $=$ sector $-$ triangle $=\\frac12r^2(\\theta-\\sin\\theta)$. Perimeter of a sector includes both radii: $2r+s$.",
        },
        {
          heading: "Worked pattern",
          body: "Given $s$ and $r$, find $\\theta=\\frac{s}{r}$ then $A=\\frac12rs$. Given degrees, convert first — e.g. $60^\\circ=\\frac{\\pi}{3}$.",
        },
        {
          heading: "Exam checklist",
          body: "Check whether the question asks for arc length, perimeter or area. Convert degrees to radians before substituting. Give answers to 3 s.f. unless told otherwise.",
        },
      ],
    },
  ],
};
