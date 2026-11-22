import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypms5-u1-lesson-1-3",
  code: "1-3",
  title: "Standard Form and Number Systems",
  goal: "I CAN perform complex calculations in standard form, classify numbers, and solve problems involving rational and irrational numbers.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Standard form", definition: "Writing a number as $a\\times10^n$ where $1\\le a<10$ and $n$ is an integer." },
    { term: "Rational number", definition: "Any number that can be written as $\\frac{p}{q}$ where $p,q$ are integers and $q\\ne0$; includes integers, fractions, terminating and recurring decimals." },
    { term: "Irrational number", definition: "A number that cannot be written as a fraction; its decimal expansion neither terminates nor repeats, e.g. $\\sqrt{2}$, $\\pi$." },
    { term: "Set notation", definition: "Using $\\in$, $\\notin$, $\\subseteq$ to describe membership and relationships between number sets." },
  ],
  concepts: [
    {
      id: "mypms5-u1-sci",
      title: "Standard form calculations",
      skill: "Perform multi-step calculations in standard form and give answers correctly rounded.",
      lesson: {
        sections: [
          {
            heading: "Multiplication and division",
            body: "Multiply mantissas, add powers of 10; divide mantissas, subtract powers. Check the result is in proper standard form — e.g. $12\\times10^7$ must become $1.2\\times10^8$.",
          },
          {
            heading: "Addition and subtraction",
            body: "For addition/subtraction, first write both numbers with the **same** power of 10, then add/subtract mantissas, and renormalise. Example: $3.2\\times10^6+4.5\\times10^5=3.2\\times10^6+0.45\\times10^6=3.65\\times10^6$.",
          },
          {
            heading: "Mixed operations and rounding",
            body: "For mixed operations, convert all numbers to standard form, calculate, then round to the required number of significant figures. For 'estimate' questions, round mantissas to 1 s.f. before calculating.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$a\\times10^n$, $1\\le a<10$" },
          { name: "Addition rule", statement: "Match powers of 10 first" },
          { name: "Significant figures", statement: "Count from first non-zero digit" },
        ],
        workedExample: {
          problem: "Calculate $\\frac{4.2\\times10^8\\times3.5\\times10^{-3}}{7.0\\times10^2}$.",
          solution: "Mantissas: $\\frac{4.2\\times3.5}{7.0}=2.1$; powers: $10^{8-3-2}=10^3$; result $=2.1\\times10^3$.",
        },
      },
      questions: [
        {
          id: "mypms5-u1-sci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 0.00045 in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5\\times10^{-5}$" },
              { id: "b", text: "$4.5\\times10^{4}$" },
              { id: "c", text: "$45\\times10^{-5}$" },
              { id: "d", text: "$4.5\\times10^{-4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form", statement: "Move decimal to after first digit: 0.00045 = $4.5\\times10^{-4}$." },
            ],
            steps: [
              { reasoning: "Count decimal places: 4 → $10^{-4}$.", working: "4.5\\times10^{-4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4.5\\times10^{-4}$",
            commonErrors: ["Writing $45\\times10^{-5}$ — mantissa must be $\\ge1$ and $<10$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u1-sci-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $2.4\\times10^5+7.8\\times10^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10.2\\times10^5$" },
              { id: "b", text: "$2.478\\times10^5$" },
              { id: "c", text: "$3.18\\times10^6$" },
              { id: "d", text: "$3.18\\times10^5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Matching powers", statement: "$7.8\\times10^4=0.78\\times10^5$; add mantissas." },
            ],
            steps: [
              { reasoning: "$2.4+0.78=3.18$; result $3.18\\times10^5$.", working: "3.18\\times10^5", marks: 1, markCode: "M" },
              { reasoning: "State the answer in standard form.", working: "3.18\\times10^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.18\\times10^5$",
            commonErrors: ["Adding powers instead of mantissas."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u1-sci-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A star is $4.3\\times10^{16}$ km from Earth. Light travels $3.0\\times10^5$ km/s. Estimate the time light takes to reach Earth, in seconds.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.4\\times10^{12}$ s" },
              { id: "b", text: "$1.4\\times10^{11}$ s" },
              { id: "c", text: "$7.2\\times10^{21}$ s" },
              { id: "d", text: "$1.3\\times10^{11}$ s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Divide in standard form", statement: "Time $=\\frac{\\text{distance}}{\\text{speed}}=\\frac{4.3}{3.0}\\times10^{16-5}=1.43\\times10^{11}$ s." },
            ],
            steps: [
              { reasoning: "Divide mantissas: $\\frac{4.3}{3.0}=1.4333...$; powers: $10^{11}$.", working: "1.43\\times10^{11}", marks: 1, markCode: "M" },
              { reasoning: "Round to 2 s.f.: $1.4\\times10^{11}$ s.", working: "1.4\\times10^{11}", marks: 1, markCode: "M" },
              { reasoning: "State the estimate.", working: "1.4\\times10^{11}\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.4\\times10^{11}$ s",
            commonErrors: ["Subtracting powers incorrectly or not rounding."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u1-sci-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Perform the following calculations, giving answers in standard form.",
          parts: [
            { label: "a", prompt: "$(3.2\\times10^6)(4.5\\times10^{-2})$.", marks: 2 },
            { label: "b", prompt: "$\\frac{9.6\\times10^9}{3.2\\times10^3}$.", marks: 2 },
            { label: "c", prompt: "$7.5\\times10^4-3.2\\times10^3$.", marks: 2 },
            { label: "d", prompt: "The population of a country is $6.8\\times10^7$ and grows by $1.5\\%$ per year. Estimate the population after 5 years (linear growth).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form ops", statement: "Match powers for +/−; multiply/divide mantissas and powers." },
            ],
            steps: [
              { part: "a", reasoning: "Mantissas: $3.2\\times4.5=14.4$; powers: $10^{4}$; renormalise: $1.44\\times10^5$.", working: "1.44\\times10^5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer.", working: "1.44\\times10^5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\frac{9.6}{3.2}=3.0$; $10^{9-3}=10^6$; result $3.0\\times10^6$.", working: "3.0\\times10^6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", working: "3.0\\times10^6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3.2\\times10^3=0.32\\times10^4$; $7.5\\times10^4-0.32\\times10^4=7.18\\times10^4$.", working: "7.18\\times10^4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "7.18\\times10^4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Growth $=6.8\\times10^7\\times0.015\\times5=6.8\\times10^7\\times0.075=5.1\\times10^6$.", working: "5.1\\times10^6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "New population: $6.8\\times10^7+5.1\\times10^6=7.31\\times10^7$ (accept $7.3\\times10^7$ to 2 s.f.).", working: "7.31\\times10^7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.44\\times10^5$ (b) $3.0\\times10^6$ (c) $7.18\\times10^4$ (d) $7.31\\times10^7$",
            commonErrors: ["In (d), compounding instead of linear growth."],
            examinerNote: "M1 A1 each for (a)-(c); M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u1-sci-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 7200000 in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7.2\\times10^5$" },
              { id: "b", text: "$7.2\\times10^6$" },
              { id: "c", text: "$72\\times10^5$" },
              { id: "d", text: "$0.72\\times10^7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard form", statement: "$a\\times10^n$ with $1\\le a<10$." }],
            steps: [{ reasoning: "Move the decimal six places: $7.2\\times10^6$.", working: "7.2\\times10^6", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $7.2\\times10^6$",
          },
        },
        {
          id: "mypms5-u1-sci-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $(2\\times10^3)(3\\times10^4)$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 600000000 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard form", statement: "Multiply mantissas and add powers: $6\\times10^7$." }],
            steps: [{ reasoning: "$6\\times10^7=600000000$.", working: "600000000", marks: 1, markCode: "B" }],
            finalAnswer: "$600000000$",
          },
        },
        {
          id: "mypms5-u1-sci-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\frac{8\\times10^9}{2\\times10^3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\times10^5$" },
              { id: "b", text: "$4\\times10^6$" },
              { id: "c", text: "$6\\times10^6$" },
              { id: "d", text: "$4\\times10^12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard form division", statement: "Divide mantissas and subtract powers." }],
            steps: [
              { reasoning: "$\\frac82=4$ and $10^{9-3}=10^6$.", working: "4\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "4\\times10^6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\times10^6$",
          },
        },
        {
          id: "mypms5-u1-sci-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $3\\times10^5+4\\times10^6$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 4300000 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Match powers", statement: "$3\\times10^5=0.3\\times10^6$; add mantissas." }],
            steps: [
              { reasoning: "$0.3\\times10^6+4\\times10^6=4.3\\times10^6$.", working: "4.3\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "Write as a decimal value.", working: "4300000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.3\\times10^6$",
          },
        },
        {
          id: "mypms5-u1-sci-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $5\\times10^6-2\\times10^5$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 4800000 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Match powers", statement: "$2\\times10^5=0.2\\times10^6$; subtract mantissas." }],
            steps: [
              { reasoning: "$5\\times10^6-0.2\\times10^6=4.8\\times10^6$.", working: "4.8\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "Write as a decimal value.", working: "4800000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.8\\times10^6$",
          },
        },
        {
          id: "mypms5-u1-sci-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $(5\\times10^7)(4\\times10^{-2})$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\times10^5$" },
              { id: "b", text: "$2\\times10^6$" },
              { id: "c", text: "$9\\times10^5$" },
              { id: "d", text: "$20\\times10^5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard form", statement: "Mantissas $5\\times4=20$; powers $10^{7-2}=10^5$; renormalise to $2\\times10^6$." }],
            steps: [
              { reasoning: "Multiply mantissas and add powers.", working: "20\\times10^5", marks: 1, markCode: "M" },
              { reasoning: "Renormalise: $2\\times10^6$.", working: "2\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "2\\times10^6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\times10^6$",
          },
        },
        {
          id: "mypms5-u1-sci-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A town has population $1.2\\times10^6$. It increases by 5% in one year. Find the new population.",
          response: { type: "numeric", parts: [{ label: "population", answer: 1260000 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Percentage increase", statement: "Increase $=1.2\\times10^6\\times0.05=6\\times10^4$." }],
            steps: [
              { reasoning: "Find the increase: $60000$.", working: "60000", marks: 1, markCode: "M" },
              { reasoning: "Add to original: $1200000+60000$.", working: "1260000", marks: 1, markCode: "M" },
              { reasoning: "State the population.", working: "1260000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.26\\times10^6$",
          },
        },
        {
          id: "mypms5-u1-sci-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Perform standard-form calculations.",
          parts: [
            { label: "a", prompt: "$(4.5\\times10^3)(2.0\\times10^2)$.", marks: 2 },
            { label: "b", prompt: "$\\frac{9.0\\times10^5}{3.0\\times10^2}$.", marks: 2 },
            { label: "c", prompt: "$6.4\\times10^4+8.0\\times10^3$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard form", statement: "Match powers for addition; combine mantissas and powers otherwise." }],
            steps: [
              { part: "a", reasoning: "$9.0\\times10^5$.", working: "9.0\\times10^5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result.", working: "9.0\\times10^5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$3.0\\times10^3$.", working: "3.0\\times10^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "3.0\\times10^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$6.4\\times10^4+0.8\\times10^4=7.2\\times10^4$.", working: "7.2\\times10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $9.0\\times10^5$ (b) $3.0\\times10^3$ (c) $7.2\\times10^4$",
          },
        },
        {
          id: "mypms5-u1-sci-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the value of $3.4\\times10^4$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 34000 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Standard form", statement: "Multiply the mantissa by the power of ten." }],
            steps: [{ reasoning: "$3.4\\times10000=34000$.", working: "34000", marks: 1, markCode: "B" }],
            finalAnswer: "$34000$",
          },
        },
        {
          id: "mypms5-u1-sci-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Estimate $\\frac{4.8\\times10^8}{2.4\\times10^{-2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\times10^6$" },
              { id: "b", text: "$2\\times10^{10}$" },
              { id: "c", text: "$2\\times10^4$" },
              { id: "d", text: "$2\\times10^{12}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard form division", statement: "$\\frac{4.8}{2.4}=2$; $10^{8-(-2)}=10^{10}$." }],
            steps: [
              { reasoning: "Divide mantissas and subtract powers.", working: "2\\times10^{10}", marks: 1, markCode: "M" },
              { reasoning: "State the estimate.", working: "2\\times10^{10}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\times10^{10}$",
          },
        },
        {
          id: "mypms5-u1-sci-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $(1.5\\times10^3)^2$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 2250000 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Powers", statement: "Square both mantissa and power: $(1.5)^2\\times10^6$." }],
            steps: [
              { reasoning: "$1.5^2=2.25$ and $(10^3)^2=10^6$.", working: "2.25\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "Write as a decimal value.", working: "2250000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.25\\times10^6$",
          },
        },
        {
          id: "mypms5-u1-sci-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why $12\\times10^7$ is not in standard form and rewrite it correctly. Then state the rule for the mantissa.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Standard form", statement: "Mantissa must satisfy $1\\le a<10$." }],
            steps: [
              { reasoning: "12 is greater than 10, so $12\\times10^7$ is not standard form.", working: "12\\ge10", marks: 1, markCode: "M" },
              { reasoning: "Rewrite as $1.2\\times10^8$ by moving the decimal one place and increasing the power by 1.", working: "1.2\\times10^8", marks: 1, markCode: "M" },
              { reasoning: "State the mantissa rule.", working: "1\\le a<10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.2\\times10^8$; $1\\le a<10$",
          },
        },
      ],
    },
    {
      id: "mypms5-u1-numbersets",
      title: "Number Sets and Classification",
      skill: "Classify numbers into rational and irrational sets, use set notation, and solve problems involving number types.",
      lesson: {
        sections: [
          {
            heading: "The number sets",
            body: "Every real number is either **rational** ($\\frac{p}{q}$ form) or **irrational** (cannot be written as a fraction). Rational includes integers, fractions, terminating decimals (0.75) and recurring decimals (0.333...). Irrational includes $\\sqrt{2}$, $\\pi$, $e$.",
          },
          {
            heading: "Identifying number types",
            body: "To classify: try to write as a fraction. $0.\\dot{6}=\\frac{2}{3}$ (rational). $\\sqrt{8}=2\\sqrt{2}$ (irrational). $\\frac{\\sqrt{4}}{2}=1$ (rational!). Simplify first before deciding.",
          },
          {
            heading: "Set notation and Venn diagrams",
            body: "Use $\\mathbb{N}$ (naturals), $\\mathbb{Z}$ (integers), $\\mathbb{Q}$ (rationals), $\\mathbb{R}$ (reals). For Venn diagrams, place numbers in the correct region: e.g. $\\sqrt{16}=4$ is rational AND integer; $\\sqrt{2}$ is real but irrational.",
          },
        ],
        keyFormulas: [
          { name: "Recurring decimal", statement: "$0.\\dot{3}=\\frac{1}{3}$" },
          { name: "Irrational test", statement: "Cannot be written as $\\frac{p}{q}$" },
          { name: "Set symbols", statement: "$\\in$ = member, $\\subseteq$ = subset, $\\cup$ = union, $\\cap$ = intersection" },
        ],
        workedExample: {
          problem: "Classify: (a) $0.\\dot{7}$ (b) $\\sqrt{18}$ (c) $\\frac{\\sqrt{9}}{3}$.",
          solution: "(a) $\\frac{7}{9}$ rational; (b) $3\\sqrt{2}$ irrational; (c) $\\frac{3}{3}=1$ rational.",
        },
      },
      questions: [
        {
          id: "mypms5-u1-numsets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.\\dot{4}$" },
              { id: "b", text: "$\\sqrt{9}$" },
              { id: "c", text: "$\\frac{22}{7}$" },
              { id: "d", text: "$\\sqrt{10}$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irrational", statement: "Cannot be written as $\\frac{p}{q}$; $\\sqrt{10}$ is irrational." },
            ],
            steps: [
              { reasoning: "$0.\\dot{4}=\\frac{4}{9}$, $\\sqrt{9}=3$, $\\frac{22}{7}$ — all rational; $\\sqrt{10}$ is irrational.", working: "\\sqrt{10}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\sqrt{10}$",
            commonErrors: ["Thinking $\\frac{22}{7}$ is irrational because it approximates $\\pi$."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypms5-u1-numsets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.\\dot{3}\\dot{6}$ as a fraction in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{11}{3}$" },
              { id: "b", text: "$\\frac{4}{11}$" },
              { id: "c", text: "$\\frac{36}{99}$" },
              { id: "d", text: "$\\frac{4}{99}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recurring decimals", statement: "$x=0.363636...$; $100x=36.3636...$; $99x=36$; $x=\\frac{36}{99}=\\frac{4}{11}$." },
            ],
            steps: [
              { reasoning: "Let $x=0.\\dot{3}\\dot{6}$; multiply by 100: $100x=36.\\dot{3}\\dot{6}$; subtract: $99x=36$.", working: "99x=36", marks: 1, markCode: "M" },
              { reasoning: "$x=\\frac{36}{99}=\\frac{4}{11}$.", working: "\\frac{4}{11}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{11}$",
            commonErrors: ["Using $10x$ instead of $100x$ for a 2-digit repeat."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u1-numsets-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Prove that $\\sqrt{5}$ is irrational.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Suppose $\\sqrt{5}=\\frac{p}{q}$ in lowest terms; then $p^2=5q^2$, so $p$ is divisible by 5, but then $q$ is too — contradiction." },
              { id: "b", text: "Assume $\\sqrt{5}=\\frac{p}{q}$; then $5=\\frac{p^2}{q^2}$, so $p^2=5q^2$; this means $p$ is divisible by 5; let $p=5k$; then $25k^2=5q^2$ so $q^2=5k^2$; so $q$ is divisible by 5 — contradiction since $\\frac{p}{q}$ was in lowest terms." },
              { id: "c", text: "All square roots of non-perfect squares are irrational by definition." },
              { id: "d", text: "$\\sqrt{5}$ cannot be written as a fraction because its decimal never repeats." },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proof by contradiction", statement: "Assume rational, derive contradiction with lowest terms." },
            ],
            steps: [
              { reasoning: "Assume $\\sqrt{5}=\\frac{p}{q}$ lowest terms → $p^2=5q^2$ → $p$ divisible by 5 → $q$ divisible by 5 → contradiction.", working: "p^2=5q^2", marks: 1, markCode: "M" },
              { reasoning: "The contradiction proves $\\sqrt{5}$ cannot be rational.", working: "\\sqrt{5}\\text{ irrational}", marks: 1, markCode: "M" },
              { reasoning: "State the conclusion.", working: "\\text{Proved}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proof by contradiction as shown",
            commonErrors: ["Not stating 'lowest terms' — the proof fails without it."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u1-numsets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the numbers: $\\sqrt{4}$, $\\sqrt{7}$, $0.\\dot{3}$, $\\pi$, $\\frac{6}{2}$, $\\sqrt{0.25}$.",
          parts: [
            { label: "a", prompt: "Simplify each number.", marks: 3 },
            { label: "b", prompt: "Identify which are rational and which are irrational.", marks: 2 },
            { label: "c", prompt: "Place them on a Venn diagram of $\\mathbb{Q}$ and $\\mathbb{R}$.", marks: 1 },
            { label: "d", prompt: "Explain why $\\pi$ and $\\sqrt{7}$ are irrational but $\\frac{22}{7}$ is rational.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Classification", statement: "Simplify first; then classify as $\\frac{p}{q}$ or not." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt{4}=2$, $\\sqrt{7}$ stays, $0.\\dot{3}=\\frac{1}{3}$, $\\pi$ stays, $\\frac{6}{2}=3$, $\\sqrt{0.25}=0.5=\\frac{1}{2}$.", working: "2,\\sqrt{7},\\frac{1}{3},\\pi,3,\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify surds and fractions.", working: "\\text{simplified}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All six correctly simplified.", working: "2,\\sqrt{7},\\frac{1}{3},\\pi,3,\\frac{1}{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rational: $2, \\frac{1}{3}, 3, \\frac{1}{2}$; Irrational: $\\sqrt{7}, \\pi$.", working: "\\text{rational: }2,\\frac{1}{3},3,\\frac{1}{2};\\text{ irrational: }\\sqrt{7},\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the classification.", working: "\\text{classified}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Venn: $\\mathbb{Q}$ inside $\\mathbb{R}$; $\\sqrt{7},\\pi$ in $\\mathbb{R}\\setminus\\mathbb{Q}$; rest in $\\mathbb{Q}$.", working: "\\text{Venn diagram}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\pi$ and $\\sqrt{7}$ cannot be written as fractions; $\\frac{22}{7}$ is already a fraction.", working: "\\text{explanation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the reason clearly.", working: "\\text{rational vs irrational}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rational: $2,\\frac{1}{3},3,\\frac{1}{2}$; Irrational: $\\sqrt{7},\\pi$",
            commonErrors: ["Classifying $\\sqrt{0.25}$ as irrational before simplifying to 0.5."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u1-numsets-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{16}$" },
              { id: "b", text: "$0.\\dot{5}$" },
              { id: "c", text: "$\\frac{17}{4}$" },
              { id: "d", text: "$\\sqrt{13}$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Irrational", statement: "Cannot be written as $\\frac{p}{q}$; $\\sqrt{13}$ is irrational." }],
            steps: [{ reasoning: "$\\sqrt{16}=4$, $0.\\dot5=\\frac59$, $\\frac{17}{4}$ are rational; $\\sqrt{13}$ is irrational.", working: "\\sqrt{13}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $\\sqrt{13}$",
          },
        },
        {
          id: "mypms5-u1-numsets-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\sqrt{0.16}+\\sqrt{0.25}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 0.9 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Square roots of decimals", statement: "Simplify before classifying or adding." }],
            steps: [{ reasoning: "$0.4+0.5=0.9$.", working: "0.9", marks: 1, markCode: "B" }],
            finalAnswer: "$0.9$",
          },
        },
        {
          id: "mypms5-u1-numsets-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Classify $\\sqrt{0.04}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Irrational, because 0.04 is not a perfect square" },
              { id: "b", text: "Irrational, because it is a square root" },
              { id: "c", text: "Rational, because all decimals are rational" },
              { id: "d", text: "Rational, because $\\sqrt{0.04}=0.2=\\frac15$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Simplify first", statement: "$\\sqrt{0.04}=0.2=\\frac15$, a rational number." }],
            steps: [
              { reasoning: "Compute the root: $0.2$.", working: "0.2", marks: 1, markCode: "M" },
              { reasoning: "Write as a fraction to classify.", working: "\\frac15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rational",
          },
        },
        {
          id: "mypms5-u1-numsets-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\sqrt{2}\\times\\sqrt{8}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Surd multiplication", statement: "$\\sqrt{2}\\times\\sqrt{8}=\\sqrt{16}=4$." }],
            steps: [
              { reasoning: "Combine radicands: $\\sqrt{16}$.", working: "\\sqrt{16}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $4$.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "mypms5-u1-numsets-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $0.\\dot{6}+0.\\dot{3}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Recurring decimals", statement: "$0.\\dot6=\\frac23$ and $0.\\dot3=\\frac13$." }],
            steps: [
              { reasoning: "Convert to fractions: $\\frac23+\\frac13$.", working: "\\frac23+\\frac13", marks: 1, markCode: "M" },
              { reasoning: "Sum is $1$.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
          },
        },
        {
          id: "mypms5-u1-numsets-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Where does $\\pi$ belong in the number sets?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not a real number" },
              { id: "b", text: "Integer because it is a constant" },
              { id: "c", text: "Rational because $\\frac{22}{7}$ approximates it" },
              { id: "d", text: "Real and irrational, but not rational" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Number sets", statement: "$\\pi$ is real but cannot be written as $\\frac{p}{q}$." }],
            steps: [
              { reasoning: "$\\pi$ is a real number.", working: "\\pi\\in\\mathbb{R}", marks: 1, markCode: "M" },
              { reasoning: "Its decimal neither terminates nor repeats, so it is irrational.", working: "\\text{irrational}", marks: 1, markCode: "M" },
              { reasoning: "State the classification.", working: "\\mathbb{R}\\setminus\\mathbb{Q}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Real and irrational",
          },
        },
        {
          id: "mypms5-u1-numsets-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\frac{\\sqrt{50}}{\\sqrt{2}}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Surd division", statement: "$\\frac{\\sqrt{50}}{\\sqrt{2}}=\\sqrt{25}=5$." }],
            steps: [
              { reasoning: "Combine under one root: $\\sqrt{25}$.", working: "\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $5$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u1-numsets-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Classify numbers carefully.",
          parts: [
            { label: "a", prompt: "Simplify $\\sqrt{36}$, $\\sqrt{0.09}$ and $0.\\dot{4}\\dot{5}$.", marks: 2 },
            { label: "b", prompt: "State which are rational and which are irrational.", marks: 2 },
            { label: "c", prompt: "Explain why a recurring decimal is rational.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Classification", statement: "Simplify first; recurring decimals can be written as fractions." }],
            steps: [
              { part: "a", reasoning: "$\\sqrt{36}=6$, $\\sqrt{0.09}=0.3$, $0.\\dot4\\dot5=\\frac5{11}$.", working: "6,0.3,\\frac5{11}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the simplified values.", working: "6,0.3,\\frac5{11}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All three are rational.", working: "\\text{rational}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the classification.", working: "\\text{rational}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A recurring decimal can be written as $\\frac{p}{q}$, so it is rational.", working: "\\frac{p}{q}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All rational; recurring decimals are rational",
          },
        },
        {
          id: "mypms5-u1-numsets-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\sqrt{0.09}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 0.3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Square root", statement: "$\\sqrt{0.09}=0.3$ because $0.3^2=0.09$." }],
            steps: [{ reasoning: "Use $0.3^2=0.09$.", working: "0.3", marks: 1, markCode: "B" }],
            finalAnswer: "$0.3$",
          },
        },
        {
          id: "mypms5-u1-numsets-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which number is rational but not an integer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{7}{2}$" },
              { id: "b", text: "$0.\\dot{7}\\dot{7}$ only if it cannot be a fraction" },
              { id: "c", text: "$\\sqrt{5}$" },
              { id: "d", text: "$\\pi$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Rational", statement: "A fraction $\\frac{p}{q}$ with $q\\ne0$; $\\frac72$ is not an integer." }],
            steps: [
              { reasoning: "$\\frac72=3.5$ is rational but not an integer.", working: "\\frac72", marks: 1, markCode: "M" },
              { reasoning: "Reject irrational options.", working: "\\frac72", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{7}{2}$",
          },
        },
        {
          id: "mypms5-u1-numsets-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\sqrt{0.04}+\\sqrt{0.09}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Square roots of decimals", statement: "Simplify each root before adding." }],
            steps: [
              { reasoning: "$0.2+0.3$.", working: "0.2+0.3", marks: 1, markCode: "M" },
              { reasoning: "Sum is $0.5$.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
          },
        },
        {
          id: "mypms5-u1-numsets-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Prove that $\\sqrt{3}$ is irrational using proof by contradiction. Outline the key steps and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Proof by contradiction", statement: "Assume $\\sqrt3=\\frac pq$ in lowest terms; derive a contradiction." }],
            steps: [
              { reasoning: "Assume $\\sqrt3=\\frac pq$ lowest terms; then $p^2=3q^2$, so $p$ is divisible by 3.", working: "p^2=3q^2", marks: 1, markCode: "M" },
              { reasoning: "Write $p=3k$; then $9k^2=3q^2$, so $q^2=3k^2$ and $q$ is also divisible by 3 — contradiction.", working: "q^2=3k^2", marks: 1, markCode: "M" },
              { reasoning: "Conclude $\\sqrt3$ cannot be rational.", working: "\\sqrt3\\text{ irrational}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proof by contradiction",
          },
        },
      ],
    },
  ],
};
