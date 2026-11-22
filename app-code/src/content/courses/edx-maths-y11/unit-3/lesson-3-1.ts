import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edm11-u3-lesson-3-1",
  code: "3-1",
  title: "Proportion and Formulae",
  goal: "I CAN set up and use direct and inverse proportion relationships, and rearrange formulae to change the subject, including when the subject appears twice.",
  standards: ["4MA1 2.4H", "4MA1 2.3"],
  vocabulary: [
    { term: "Directly proportional", definition: "Two quantities are directly proportional when one is a constant multiple of the other, for example $y = kx$ or $y = kx^2$. The symbol $\\propto$ means 'is proportional to'." },
    { term: "Inversely proportional", definition: "$y$ is inversely proportional to $x$ when $y = \\frac{k}{x}$: as $x$ increases, $y$ decreases so that the product $xy$ stays constant." },
    { term: "Constant of proportionality", definition: "The fixed number $k$ in an equation such as $y = kx^n$ or $y = \\frac{k}{x^n}$." },
    { term: "Subject of a formula", definition: "The variable on its own on one side of a formula, for example $v$ in $v = u + at$." },
    { term: "Rearranging", definition: "Applying the same inverse operation to both sides of a formula to change which variable is the subject." },
    { term: "Factorising", definition: "Writing an expression as a product, used when the new subject appears in more than one term." },
  ],
  concepts: [
    {
      id: "edm11-u3-proportion",
      title: "Direct and inverse proportion",
      skill: "Write a proportionality statement as an equation, find the constant $k$ and use the equation to find missing values.",
      lesson: {
        sections: [
          {
            heading: "Turning a statement into an equation",
            body: "Replace $\\propto$ by $= k\\times$. So $y \\propto x^2$ becomes $y = kx^2$, and $y \\propto \\frac{1}{\\sqrt{x}}$ becomes $y = \\frac{k}{\\sqrt{x}}$. 'Inversely proportional' always puts the other quantity in the denominator.",
          },
          {
            heading: "Finding k and using it",
            body: "Substitute the known pair of values into the equation and solve for $k$. Write out the full equation with the value of $k$ in it, then substitute the second value. Always find $k$ first; do not try to scale values by 'ratios' unless you are confident with the power involved.",
          },
          {
            heading: "Percentage change questions",
            body: "If $y = kx^3$ and $x$ is multiplied by $1.2$, then $y$ is multiplied by $1.2^3$. Work with the multiplier, then convert back to a percentage change.",
          },
        ],
        keyFormulas: [
          { name: "Direct proportion", statement: "$y \\propto x^n \\Rightarrow y = kx^n$" },
          { name: "Inverse proportion", statement: "$y \\propto \\frac{1}{x^n} \\Rightarrow y = \\frac{k}{x^n}$" },
        ],
        workedExample: {
          problem: "$y$ is directly proportional to $x^2$. When $x = 3$, $y = 45$. Find $y$ when $x = 4$.",
          solution: "$y = kx^2$. Substituting, $45 = 9k$ so $k = 5$. Then $y = 5x^2$ and when $x = 4$, $y = 5 \\times 16 = 80$.",
        },
      },
      questions: [
        {
          id: "edm11-u3-proportion-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "$y$ is directly proportional to $x^2$. When $x = 4$, $y = 48$. Work out the value of $y$ when $x = 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$75$" },
              { id: "b", text: "$300$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$60$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Direct proportion to a square", statement: "$y \\propto x^2$ means $y = kx^2$ for a constant $k$." },
            ],
            steps: [
              { reasoning: "Write the equation and use the known pair of values to find $k$.", working: "48 = k \\times 4^2 \\Rightarrow k = 3", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 5$ into $y = 3x^2$.", working: "y = 3 \\times 25 = 75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $75$",
            commonErrors: ["Treating the relationship as direct proportion to $x$, giving $48\\times\\frac54 = 60$.", "Using $k = 48 \\div 4 = 12$ and then squaring $5$ to get $300$."],
            examinerNote: "Method mark for $y = kx^2$ with a correct substitution; cao for 75.",
          },
        },
        {
          id: "edm11-u3-proportion-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "$y$ is inversely proportional to the square of $x$. When $x = 4$, $y = 5$. Work out the value of $y$ when $x = 10$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 0.8 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion to a square", statement: "$y \\propto \\frac{1}{x^2}$ means $y = \\frac{k}{x^2}$." },
            ],
            steps: [
              { reasoning: "Write the equation for inverse proportion to the square of $x$.", working: "y = \\frac{k}{x^2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 4$, $y = 5$ to find $k$.", working: "5 = \\frac{k}{16} \\Rightarrow k = 80", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 10$ into $y = \\frac{80}{x^2}$.", working: "y = \\frac{80}{100} = 0.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 0.8$",
            commonErrors: ["Writing $y = kx^2$ (direct instead of inverse).", "Using $y = \\frac{k}{x}$ and getting $y = 2$."],
          },
        },
        {
          id: "edm11-u3-proportion-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "$y$ is inversely proportional to $\\sqrt{x}$. When $x = 16$, $y = 3$. Work out the value of $x$ when $y = 8$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2.25 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse proportion to a root", statement: "$y \\propto \\frac{1}{\\sqrt{x}}$ means $y = \\frac{k}{\\sqrt{x}}$." },
            ],
            steps: [
              { reasoning: "Write the equation and substitute $x = 16$, $y = 3$.", working: "3 = \\frac{k}{\\sqrt{16}} = \\frac{k}{4}", marks: 1, markCode: "M" },
              { reasoning: "Solve for $k$.", working: "k = 12", marks: 1, markCode: "A" },
              { reasoning: "Substitute $y = 8$ and rearrange for $\\sqrt{x}$.", working: "8 = \\frac{12}{\\sqrt{x}} \\Rightarrow \\sqrt{x} = 1.5", marks: 1, markCode: "M" },
              { reasoning: "Square both sides.", working: "x = 1.5^2 = 2.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 2.25$",
            commonErrors: ["Forgetting to square at the end and giving $x = 1.5$.", "Using $\\sqrt{16} = 8$."],
          },
        },
        {
          id: "edm11-u3-proportion-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "The power, $P$ watts, generated by a wind turbine is directly proportional to the cube of the wind speed, $v$ metres per second. When $v = 5$, $P = 2000$.",
          parts: [
            { label: "a", prompt: "Find a formula for $P$ in terms of $v$.", marks: 3 },
            { label: "b", prompt: "Work out the power generated when the wind speed is $8$ metres per second.", marks: 2 },
            { label: "c", prompt: "Work out the wind speed when the power generated is $6750$ watts.", marks: 3 },
            { label: "d", prompt: "The wind speed increases by $20\\%$. Work out the percentage increase in the power generated. Give your answer correct to $3$ significant figures if necessary.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) value of $k$", answer: 16 },
              { label: "(b) power in watts", answer: 8192 },
              { label: "(c) wind speed in m/s", answer: 7.5 },
              { label: "(d) percentage increase", answer: 72.8, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Direct proportion to a cube", statement: "$P \\propto v^3$ means $P = kv^3$." },
              { kind: "principle", name: "Multipliers", statement: "A $20\\%$ increase is a multiplier of $1.2$; if $P \\propto v^3$ the power is multiplied by $1.2^3$." },
            ],
            steps: [
              { part: "a", reasoning: "Write the proportionality as an equation.", working: "P = kv^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute $v = 5$, $P = 2000$ to find $k$.", working: "2000 = k \\times 125 \\Rightarrow k = 16", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the formula.", working: "P = 16v^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $v = 8$.", working: "P = 16 \\times 8^3 = 16 \\times 512", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "P = 8192", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $P = 6750$.", working: "6750 = 16v^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by $16$.", working: "v^3 = 421.875", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Take the cube root.", working: "v = 7.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The new speed is $1.2v$, so the power is multiplied by $1.2^3$.", working: "1.2^3 = 1.728", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert the multiplier to a percentage increase.", working: "1.728 - 1 = 0.728 \\Rightarrow 72.8\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P = 16v^3$. (b) $8192$ watts. (c) $7.5$ m/s. (d) $72.8\\%$ increase.",
            commonErrors: ["Giving $20\\%\\times 3 = 60\\%$ for part (d).", "Not taking the cube root in part (c)."],
            examinerNote: "In (d) accept 72.8 or 73 from correct working.",
          },
        },
      ],
    },
    {
      id: "edm11-u3-change-subject",
      title: "Changing the subject of a formula",
      skill: "Rearrange formulae, including those where the new subject appears more than once, by collecting and factorising.",
      lesson: {
        sections: [
          {
            heading: "Inverse operations in reverse order",
            body: "To make $x$ the subject, undo what has been done to $x$ in the reverse order. For $y = 3x + 5$, subtract $5$ and then divide by $3$ to get $x = \\frac{y-5}{3}$. Whatever you do to one side you must do to the whole of the other side.",
          },
          {
            heading: "Powers and roots",
            body: "If the subject is squared, take the square root of the whole other side. If the subject is under a root sign, square both sides first. Isolate the term containing the subject before squaring or rooting.",
          },
          {
            heading: "When the subject appears twice",
            body: "Clear any fractions by multiplying, expand brackets, then collect all terms containing the new subject on one side and everything else on the other. Factorise to take the subject out as a common factor, then divide.",
          },
        ],
        keyFormulas: [
          { name: "Strategy for subject appearing twice", statement: "Multiply out, collect terms in the subject, factorise, divide." },
        ],
        workedExample: {
          problem: "Make $x$ the subject of $y = \\frac{x+1}{x-4}$.",
          solution: "$y(x-4) = x + 1$, so $xy - 4y = x + 1$. Collect: $xy - x = 1 + 4y$. Factorise: $x(y-1) = 1 + 4y$. Therefore $x = \\frac{4y+1}{y-1}$.",
        },
      },
      questions: [
        {
          id: "edm11-u3-change-subject-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Make $x$ the subject of $y = 3x + 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = \\frac{y+5}{3}$" },
              { id: "b", text: "$x = 3(y-5)$" },
              { id: "c", text: "$x = \\frac{y-5}{3}$" },
              { id: "d", text: "$x = \\frac{y}{3} - 5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Undo the operations on $x$ in reverse order, doing the same to both sides." },
            ],
            steps: [
              { reasoning: "Subtract $5$ from both sides.", working: "y - 5 = 3x", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by $3$.", working: "x = \\frac{y-5}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $x = \\frac{y-5}{3}$",
            commonErrors: ["Dividing only $y$ by $3$ and not the $5$.", "Adding $5$ instead of subtracting.", "Multiplying by $3$ instead of dividing."],
          },
        },
        {
          id: "edm11-u3-change-subject-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "The perimeter of a rectangle is given by $P = 2(l + w)$.\n\nMake $w$ the subject of the formula and hence find the value of $w$ when $P = 38$ and $l = 11$.",
          response: { type: "numeric", parts: [{ label: "$w$", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Divide by the bracket's multiplier, then subtract the other term." },
            ],
            steps: [
              { reasoning: "Divide both sides by $2$.", working: "\\frac{P}{2} = l + w", marks: 1, markCode: "M" },
              { reasoning: "Subtract $l$ from both sides.", working: "w = \\frac{P}{2} - l", marks: 1, markCode: "A" },
              { reasoning: "Substitute $P = 38$ and $l = 11$.", working: "w = 19 - 11 = 8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$w = \\frac{P}{2} - l$; $w = 8$",
            commonErrors: ["Writing $w = P - 2l$ after forgetting to halve $P$ as well.", "Writing $w = \\frac{P - l}{2}$."],
          },
        },
        {
          id: "edm11-u3-change-subject-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Make $x$ the subject of $y = \\frac{3x + 1}{x - 2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subject appearing twice", statement: "Clear the fraction, collect terms in $x$, factorise and divide." },
            ],
            steps: [
              { reasoning: "Multiply both sides by $(x - 2)$ to remove the fraction.", working: "y(x-2) = 3x + 1", marks: 1, markCode: "M" },
              { reasoning: "Expand the bracket.", working: "xy - 2y = 3x + 1", marks: 1, markCode: "M" },
              { reasoning: "Collect the terms in $x$ on one side and factorise.", working: "xy - 3x = 2y + 1 \\Rightarrow x(y-3) = 2y + 1", marks: 1, markCode: "M" },
              { reasoning: "Divide by $(y - 3)$.", working: "x = \\frac{2y+1}{y-3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\frac{2y+1}{y-3}$",
            commonErrors: ["Not multiplying every term by $(x-2)$.", "Failing to factorise, leaving $x$ in two terms.", "Sign error when moving $2y$ across."],
          },
        },
        {
          id: "edm11-u3-change-subject-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "The time period, $T$ seconds, of a pendulum of length $l$ metres is given by the formula $T = 2\\pi\\sqrt{\\frac{l}{g}}$, where $g$ is a constant.",
          parts: [
            { label: "a", prompt: "Make $l$ the subject of the formula.", marks: 3 },
            { label: "b", prompt: "Find the value of $l$ when $T = 2.5$ and $g = 9.8$. Give your answer correct to $3$ significant figures.", marks: 2 },
            { label: "c", prompt: "Make $x$ the subject of $v = \\sqrt{\\frac{x+2}{x}}$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Undoing a square root", statement: "Isolate the root, then square both sides." },
              { kind: "principle", name: "Subject appearing twice", statement: "Collect terms in the subject on one side, factorise and divide." },
            ],
            steps: [
              { part: "a", reasoning: "Divide by $2\\pi$ to isolate the square root.", working: "\\frac{T}{2\\pi} = \\sqrt{\\frac{l}{g}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Square both sides.", working: "\\frac{T^2}{4\\pi^2} = \\frac{l}{g}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply by $g$.", working: "l = \\frac{gT^2}{4\\pi^2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $g = 9.8$ and $T = 2.5$.", working: "l = \\frac{9.8 \\times 6.25}{4\\pi^2} = \\frac{61.25}{39.478\\ldots}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to $3$ significant figures.", working: "l = 1.55", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Square both sides to remove the root.", working: "v^2 = \\frac{x+2}{x}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by $x$.", working: "v^2 x = x + 2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collect the terms in $x$ and factorise.", working: "v^2 x - x = 2 \\Rightarrow x(v^2 - 1) = 2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by $(v^2 - 1)$.", working: "x = \\frac{2}{v^2 - 1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $l = \\frac{gT^2}{4\\pi^2}$. (b) $l = 1.55$ m. (c) $x = \\frac{2}{v^2 - 1}$.",
            commonErrors: ["Squaring only part of the right-hand side, such as writing $T^2 = 2\\pi\\frac{l}{g}$.", "Forgetting to square the $2\\pi$ as well, giving $4\\pi^2$ as $4\\pi$."],
            examinerNote: "In (b) allow ft from an incorrect rearrangement in (a) provided the formula is of similar difficulty.",
          },
        },
      ],
    },
  ],
};
