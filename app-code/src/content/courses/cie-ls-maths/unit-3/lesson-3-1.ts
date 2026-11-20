import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cilm-u3-lesson-3-1",
  code: "3-1",
  title: "Algebraic expressions",
  goal: "I CAN write, simplify and evaluate algebraic expressions including substitution.",
  standards: ["0862 Algebra: expressions"],
  vocabulary: [
    { term: "Variable", definition: "A letter standing for an unknown or changing number — $x$, $y$, $n$." },
    { term: "Term", definition: "A number, variable, or product of numbers and variables — $3x$, $5$, $2ab$." },
    { term: "Coefficient", definition: "The number multiplying a variable — in $5x$, the coefficient is $5$." },
    { term: "Like terms", definition: "Terms with identical variable parts — $3x$ and $7x$ are like terms; $3x$ and $3y$ are not." },
    { term: "Substitution", definition: "Replacing variables with numbers to find a value." },
    { term: "Expression", definition: "A mathematical phrase without an equals sign — $3x+2$." },
  ],
  concepts: [
    {
      id: "cilm-u3-expressions",
      title: "Simplifying expressions",
      skill: "Collect like terms, expand brackets and simplify expressions correctly.",
      lesson: {
        sections: [
          {
            heading: "Collecting like terms",
            body: "Only like terms can be combined:\n\n$3x + 5y + 2x - y = 5x + 4y$\n\n- $3x + 2x = 5x$ (same variable)\n- $5y - y = 4y$ (same variable)\n- $3x$ and $5y$ cannot combine (different variables)",
          },
          {
            heading: "Expanding brackets",
            body: "Multiply the outside term by everything inside:\n\n- $3(x + 2) = 3x + 6$\n- $2(x - 4) = 2x - 8$\n- $(x + 3)(x + 2) = x^2 + 5x + 6$ (FOIL: First, Outer, Inner, Last)",
          },
          {
            heading: "Order of operations in algebra",
            body: "Same BIDMAS rules apply. $2x + 3(x - 1) = 2x + 3x - 3 = 5x - 3$, NOT $5x - 1$.",
          },
        ],
        keyFormulas: [
          { name: "Like terms", statement: "Same variable parts can be added/subtracted; coefficients combine." },
          { name: "Expanding", statement: "Multiply outside term by each term inside the brackets." },
        ],
        workedExample: {
          problem: "Simplify $4x + 3(2x - 5) - x$.",
          solution: "$4x + 6x - 15 - x = 9x - 15$.",
        },
      },
      questions: [
        {
          id: "cilm-u3-expr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $3x + 2x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5x$" },
              { id: "b", text: "$6x$" },
              { id: "c", text: "$5x^2$" },
              { id: "d", text: "$x^5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Like terms", statement: "Add coefficients of identical variables." },
            ],
            steps: [
              { reasoning: "$3x+2x=(3+2)x=5x$.", working: "3+2=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5x$",
            commonErrors: ["Choosing (b) — multiplying coefficients instead of adding."],
          },
        },
        {
          id: "cilm-u3-expr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $5a + 3b - 2a + b$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Collecting like terms", statement: "Group same variables: $a$ terms and $b$ terms separately." },
            ],
            steps: [
              { reasoning: "$a$ terms: $5a - 2a = 3a$; $b$ terms: $3b + b = 4b$.", working: "3a + 4b", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3a + 4b$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3a + 4b$",
            commonErrors: ["$3a + 2b$ — forgetting $b + b = 2b$ not $b$; or combining $a$ and $b$ terms."],
          },
        },
        {
          id: "cilm-u3-expr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand and simplify $2(x + 3) + 3(x - 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Expanding brackets", statement: "Distribute each outside term, then collect like terms." },
            ],
            steps: [
              { reasoning: "$2(x+3)=2x+6$; $3(x-1)=3x-3$.", working: "2x+6 + 3x-3", marks: 1, markCode: "M" },
              { reasoning: "Combine: $2x+3x=5x$; $6-3=3$.", working: "5x+3", marks: 1, markCode: "M" },
              { reasoning: "Result: $5x + 3$.", marks: 1, markCode: "M" },
              { reasoning: "Check with $x=1$: original $=2(4)+3(0)=8$; answer $=5(1)+3=8$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5x + 3$",
            commonErrors: ["$2x+6+3x-1$ — forgetting to multiply $3$ by $-1$ gives $-3$, not $-1$."],
          },
        },
        {
          id: "cilm-u3-expr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangle's length is $(x+4)$ cm and width is $(x+1)$ cm.",
          parts: [
            { label: "a", prompt: "Write an expression for the perimeter.", marks: 2 },
            { label: "b", prompt: "Simplify your perimeter expression.", marks: 2 },
            { label: "c", prompt: "Write an expression for the area.", marks: 3 },
            { label: "d", prompt: "Find the perimeter when $x=3$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Geometry expressions", statement: "Perimeter = 2(l+w); area = l×w; expand and simplify." },
            ],
            steps: [
              { part: "a", reasoning: "Perimeter $=2[(x+4)+(x+1)]$ or $2(x+4)+2(x+1)$.", working: "2(x+4)+2(x+1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct expression.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$=2x+8+2x+2=4x+10$.", working: "4x+10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplified correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area $=(x+4)(x+1)=x^2+x+4x+4=x^2+5x+4$.", working: "x^2+5x+4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "FOIL applied correctly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplified correctly.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Perimeter $=4(3)+10=22$ cm.", working: "4\\times3+10=22", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2(x+4)+2(x+1)$ (b) $4x+10$ (c) $x^2+5x+4$ (d) $22$ cm",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Perimeter expression correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Simplified correctly.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Area expansion correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Substitution correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) writing $(x+4)(x+1)=x^2+4$ — forgetting the middle terms."],
          },
        },
      ],
    },
    {
      id: "cilm-u3-substitution",
      title: "Substitution and evaluation",
      skill: "Substitute values into expressions and formulae to find unknown quantities.",
      lesson: {
        sections: [
          {
            heading: "Substituting values",
            body: "Replace each variable with its value, then evaluate using BIDMAS:\n\n$3x + 2y$ when $x=4, y=1$: $3(4)+2(1)=12+2=14$.",
          },
          {
            heading: "Formulae",
            body: "A formula is a rule for calculating a quantity:\n\n- Speed: $s=\\frac{d}{t}$\n- Area of rectangle: $A=lw$\n- Perimeter: $P=2(l+w)$\n\nSubstitute known values to find the unknown.",
          },
          {
            heading: "Common mistakes",
            body: "- Forgetting brackets: $3x$ with $x=2+3$ means $3(2+3)=15$, not $3(2)+3=9$.\n- Sign errors with negatives: $x=-2$ in $x^2$ gives $+4$, not $-4$.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "Replace variables with values, then apply BIDMAS." },
        ],
        workedExample: {
          problem: "Find the value of $2a - 3b$ when $a=5$ and $b=-2$.",
          solution: "$2(5) - 3(-2) = 10 - (-6) = 10 + 6 = 16$.",
        },
      },
      questions: [
        {
          id: "cilm-u3-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $4x + 1$ when $x = 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$16$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Substitution", statement: "$4(3)+1=12+1=13$." },
            ],
            steps: [
              { reasoning: "$4 \\times 3 = 12$, then $+1 = 13$.", working: "12+1=13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $13$",
            commonErrors: ["Choosing (d) — forgetting the $+1$."],
          },
        },
        {
          id: "cilm-u3-sub-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $x^2 - 3x$ when $x = -2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negative substitution", statement: "Square first: $(-2)^2=+4$; then $-3(-2)=+6$." },
            ],
            steps: [
              { reasoning: "$x^2=(-2)^2=4$; $-3x=-3(-2)=+6$.", working: "4+6", marks: 1, markCode: "M" },
              { reasoning: "$4+6=10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["$-4+6=2$ — forgetting $(-2)^2=+4$, not $-4$."],
          },
        },
        {
          id: "cilm-u3-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The formula $C = 5 + 0.4n$ gives the cost in pounds of $n$ minutes of calls. Find the cost of a $30$-minute call and explain what the $5$ represents.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula application", statement: "Substitute $n$; interpret each term's meaning." },
            ],
            steps: [
              { reasoning: "$C = 5 + 0.4(30) = 5 + 12 = \\pounds17$.", working: "5+0.4\\times30=17", marks: 1, markCode: "M" },
              { reasoning: "Cost is $\\pounds17$.", marks: 1, markCode: "A" },
              { reasoning: "The $5$ is a fixed connection fee charged regardless of call length.", marks: 1, markCode: "M" },
              { reasoning: "The $0.4$ is the per-minute rate ($40\\text{p}$/min).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds17$; the $5$ is a fixed connection fee",
            commonErrors: ["Treating $5$ as part of the per-minute rate — it's a fixed charge."],
          },
        },
        {
          id: "cilm-u3-sub-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A taxi firm charges $C = 3 + 2d$ pounds where $d$ is distance in km.",
          parts: [
            { label: "a", prompt: "Find the cost of a $12$ km journey.", marks: 2 },
            { label: "b", prompt: "A passenger pays $\\pounds23$. How far did they travel?", marks: 3 },
            { label: "c", prompt: "Explain what each number in the formula represents.", marks: 2 },
            { label: "d", prompt: "Find the cost per km for a long journey (ignoring the fixed fee).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula problems", statement: "Substitute forward and reverse; interpret constants and rates." },
            ],
            steps: [
              { part: "a", reasoning: "$C=3+2(12)=3+24=\\pounds27$.", working: "3+24=27", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$23=3+2d$ → $2d=20$ → $d=10$ km.", working: "2d=20; d=10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rearrangement correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$10$ km correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3$ = fixed fare; $2$ = price per km.", working: "fixed + rate", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Per km rate $=\\pounds2$ — the $2$ coefficient.", working: "rate=2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds27$ (b) $10$ km (c) $3$ = fixed fare, $2$ = per-km rate (d) $\\pounds2$/km",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Cost correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Distance found correctly.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Terms explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Rate identified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (b) subtracting $23-3=20$ then forgetting to divide by $2$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u3-algebra-notes",
      title: "Algebraic expressions — revision notes",
      summary: "Like terms, expanding brackets, substitution and formulae.",
      sections: [
        {
          heading: "Expressions",
          body: "Collect like terms only (same variable parts). Expand brackets by distributing. $(-2)^2=+4$ — squares are always non-negative.",
        },
        {
          heading: "Substitution",
          body: "Replace variables with values, apply BIDMAS. In formulae like $C=3+2d$: constants are fixed fees, coefficients are rates.",
        },
      ],
    },
  ],
};
