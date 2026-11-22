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
              { id: "a", text: "$x^5$" },
              { id: "b", text: "$5x$" },
              { id: "c", text: "$6x$" },
              { id: "d", text: "$5x^2$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cilm-u3-expr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $6x - 2x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x^2$" },
              { id: "b", text: "$8x$" },
              { id: "c", text: "$4x$" },
              { id: "d", text: "$12x^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Like terms", statement: "Subtract coefficients: $6-2=4$." },
            ],
            steps: [
              { reasoning: "$6x-2x=(6-2)x=4x$.", working: "6-2=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4x$",
            commonErrors: ["Choosing (b) — adding instead of subtracting coefficients."],
          },
        },
        {
          id: "cilm-u3-expr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Simplify $3a + 2b + a - b$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4a + 3b$" },
              { id: "b", text: "$3a + b$" },
              { id: "c", text: "$2a + b$" },
              { id: "d", text: "$4a + b$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Collecting like terms", statement: "$a$ terms: $3+1=4$; $b$ terms: $2-1=1$." },
            ],
            steps: [
              { reasoning: "$3a+a=4a$; $2b-b=b$ → $4a+b$.", working: "4a+b", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4a + b$",
            commonErrors: ["Choosing (b) — forgetting $-b$ reduces the $b$ coefficient to 1, not 3."],
          },
        },
        {
          id: "cilm-u3-expr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Expand $4(x - 2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x - 8$" },
              { id: "b", text: "$x - 8$" },
              { id: "c", text: "$4x - 2$" },
              { id: "d", text: "$4x + 8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Expanding brackets", statement: "Multiply 4 by each term inside." },
            ],
            steps: [
              { reasoning: "$4\\times x=4x$; $4\\times(-2)=-8$ → $4x-8$.", working: "4x-8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4x - 8$",
            commonErrors: ["Choosing (b) — only multiplying $x$, forgetting $4\\times(-2)$."],
          },
        },
        {
          id: "cilm-u3-expr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Simplify $2(x + 3) + x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x + 3$" },
              { id: "b", text: "$3x + 6$" },
              { id: "c", text: "$2x + 6$" },
              { id: "d", text: "$5x + 6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Expanding then collecting", statement: "$2x+6+x=3x+6$." },
            ],
            steps: [
              { reasoning: "$2(x+3)=2x+6$; then $2x+6+x=3x+6$.", working: "3x+6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3x + 6$",
            commonErrors: ["Choosing (c) — forgetting the extra $+x$ term."],
          },
        },
        {
          id: "cilm-u3-expr-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Expand and simplify $(x + 2)(x + 3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x + 5$" },
              { id: "b", text: "$x^2 + 6$" },
              { id: "c", text: "$x^2 + 5x + 6$" },
              { id: "d", text: "$x^2 + 5x + 5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Double brackets (FOIL)", statement: "$x^2+3x+2x+6=x^2+5x+6$." },
            ],
            steps: [
              { reasoning: "FOIL: $x^2+3x+2x+6=x^2+5x+6$.", working: "x^2+5x+6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x^2 + 5x + 6$",
            commonErrors: ["Choosing (b) — forgetting the middle terms $3x+2x$."],
          },
        },
        {
          id: "cilm-u3-expr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $5x - 3$ when $x = 4$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Substitution", statement: "Replace $x$ with $4$ and evaluate." },
            ],
            steps: [
              { reasoning: "$5(4)-3=20-3=17$.", working: "20-3=17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17$",
            commonErrors: ["$5(4-3)=5$ — brackets not needed here but order matters; $5x-3$ at $x=4$ is 17."],
          },
        },
        {
          id: "cilm-u3-expr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Find the value of $2x + 5$ when $x = 7$. (b) Find the value of $x^2 - 1$ when $x = 6$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 19 },
              { label: "(b)", answer: 35 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Substitution", statement: "Substitute then apply BIDMAS." },
            ],
            steps: [
              { reasoning: "(a) $2(7)+5=14+5=19$.", working: "14+5=19", marks: 1, markCode: "A" },
              { reasoning: "(b) $6^2-1=36-1=35$.", working: "36-1=35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $19$ (b) $35$",
            commonErrors: ["In (b) $6^2-1$ — square before subtracting."],
          },
        },
        {
          id: "cilm-u3-expr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangle has length $(x + 3)$ cm and width $(x + 1)$ cm. Find its perimeter when $x = 2$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 16, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula substitution", statement: "Perimeter $=2(l+w)$; substitute $x=2$ first." },
            ],
            steps: [
              { reasoning: "When $x=2$: length $=5$, width $=3$; perimeter $=2(5+3)=16$ cm.", working: "2(5+3)=16", marks: 1, markCode: "M" },
              { reasoning: "Alternatively perimeter $=4x+8=16$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$ cm",
            commonErrors: ["$2x+4=8$ — perimeter needs $2(l+w)$, not $l+w$."],
          },
        },
        {
          id: "cilm-u3-expr-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $5x + 2(3x - 4) - x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Expanding brackets", statement: "Expand $2(3x-4)=6x-8$ first, then collect." },
            ],
            steps: [
              { reasoning: "$2(3x-4)=6x-8$, so expression $=5x+6x-8-x$.", working: "5x+6x-8-x", marks: 1, markCode: "M" },
              { reasoning: "Collect: $5x+6x-x=10x$; constant $-8$.", working: "10x-8", marks: 1, markCode: "M" },
              { reasoning: "Answer: $10x - 8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10x - 8$",
            commonErrors: ["$10x-4$ — forgetting to multiply $-4$ by 2 gives $-8$."],
          },
        },
        {
          id: "cilm-u3-expr-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand and simplify $(x + 5)(x - 2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Double brackets", statement: "FOIL: $x^2-2x+5x-10$; collect middle terms." },
            ],
            steps: [
              { reasoning: "FOIL gives $x^2-2x+5x-10$.", working: "x^2-2x+5x-10", marks: 1, markCode: "M" },
              { reasoning: "Collect: $-2x+5x=3x$ → $x^2+3x-10$.", working: "x^2+3x-10", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2 + 3x - 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 + 3x - 10$",
            commonErrors: ["$x^2+3x-7$ — sign error on the constant term $5\\times(-2)=-10$."],
          },
        },
        {
          id: "cilm-u3-expr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A square has side length $(x + 2)$ cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Geometry expressions", statement: "Perimeter $=4\\times$ side; area $=$ side squared; expand both." },
            ],
            steps: [
              { reasoning: "Perimeter $=4(x+2)=4x+8$ cm.", working: "4x+8", marks: 1, markCode: "M" },
              { reasoning: "Area $=(x+2)(x+2)=x^2+4x+4$ cm².", working: "x^2+4x+4", marks: 1, markCode: "M" },
              { reasoning: "Both expansions correct.", marks: 1, markCode: "M" },
              { reasoning: "Answers: perimeter $4x+8$ cm; area $x^2+4x+4$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perimeter $=4x+8$ cm; area $=x^2+4x+4$ cm²",
            commonErrors: ["Area $=x^2+4$ — forgetting the middle term $2\\times x\\times2=4x$."],
          },
        },
        {
          id: "cilm-u3-expr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify and evaluate expressions.",
          parts: [
            { label: "a", prompt: "Simplify $4x + 3y - 2x + y$.", marks: 2 },
            { label: "b", prompt: "Simplify $3(2x - 1) + x$.", marks: 2 },
            { label: "c", prompt: "Expand and simplify $(x + 4)(x - 1)$.", marks: 2 },
            { label: "d", prompt: "Find the value of $2x^2 - 3x$ when $x = -2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Algebraic manipulation", statement: "Collect like terms; expand brackets; substitute carefully with negatives." },
            ],
            steps: [
              { part: "a", reasoning: "$x$ terms: $4x-2x=2x$; $y$ terms: $3y+y=4y$ → $2x+4y$.", working: "2x+4y", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$6x-3+x=7x-3$.", working: "7x-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "FOIL: $x^2-x+4x-4=x^2+3x-4$.", working: "x^2+3x-4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2(-2)^2-3(-2)=2(4)+6=8+6=14$.", working: "8+6=14", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Negative handled correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2x+4y$ (b) $7x-3$ (c) $x^2+3x-4$ (d) $14$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Negative substitution correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (d) $(-2)^2=-4$ — square is positive; $-3(-2)=+6$."],
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
              { id: "a", text: "$15$" },
              { id: "b", text: "$16$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$13$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cilm-u3-sub-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $3x + 2$ when $x = 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$14$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Substitution", statement: "$3(4)+2=12+2=14$." },
            ],
            steps: [
              { reasoning: "$12+2=14$.", working: "12+2=14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $14$",
            commonErrors: ["Choosing (d) — forgetting the $+2$."],
          },
        },
        {
          id: "cilm-u3-sub-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $x^2 + 1$ when $x = 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Substitution", statement: "Square first: $3^2+1=9+1=10$." },
            ],
            steps: [
              { reasoning: "$9+1=10$.", working: "9+1=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $10$",
            commonErrors: ["Choosing (b) — computing $3^2=6$ wrongly or $(3+1)^2$ misread."],
          },
        },
        {
          id: "cilm-u3-sub-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $5 - 2x$ when $x = -3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$-1$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$-11$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negative substitution", statement: "$-2(-3)=+6$; $5+6=11$." },
            ],
            steps: [
              { reasoning: "$5-2(-3)=5+6=11$.", working: "5+6=11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $11$",
            commonErrors: ["Choosing (b) — $-2(-3)=-6$ is wrong; negative times negative is positive."],
          },
        },
        {
          id: "cilm-u3-sub-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The area of a rectangle is $A = lw$. Find $A$ when $l = 8$ and $w = 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$45$" },
              { id: "d", text: "$26$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formula substitution", statement: "$A=8\\times5=40$." },
            ],
            steps: [
              { reasoning: "$8\\times5=40$.", working: "8\\times5=40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $40$",
            commonErrors: ["Choosing (b) — adding $l+w$ gives perimeter-like value, not area."],
          },
        },
        {
          id: "cilm-u3-sub-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Evaluate $2a - b$ when $a = -1$ and $b = 3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$-5$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negative substitution", statement: "$2(-1)-3=-2-3=-5$." },
            ],
            steps: [
              { reasoning: "$-2-3=-5$.", working: "-2-3=-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-5$",
            commonErrors: ["Choosing (d) — $2(-1)=-2$, not $+2$; then $-2-3=-5$."],
          },
        },
        {
          id: "cilm-u3-sub-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $4x - 7$ when $x = 5$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Substitution", statement: "$4(5)-7=20-7=13$." },
            ],
            steps: [
              { reasoning: "$20-7=13$.", working: "20-7=13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["$4(5-7)$ — the $-7$ is outside the multiplication."],
          },
        },
        {
          id: "cilm-u3-sub-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Find the value of $3x + 4y$ when $x = 2$ and $y = 3$. (b) Find the value of $x^2 - 2x$ when $x = 5$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 18 }, { label: "(b)", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Substitution", statement: "Substitute all values, then BIDMAS." },
            ],
            steps: [
              { reasoning: "(a) $3(2)+4(3)=6+12=18$.", working: "6+12=18", marks: 1, markCode: "A" },
              { reasoning: "(b) $25-10=15$.", working: "25-10=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $18$ (b) $15$",
            commonErrors: ["In (b) $x^2-2x=25-10$ requires squaring first."],
          },
        },
        {
          id: "cilm-u3-sub-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The formula $v = u + at$ gives final velocity. Find $v$ when $u = 10$, $a = 2$ and $t = 5$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula substitution", statement: "$v=10+2\\times5=20$." },
            ],
            steps: [
              { reasoning: "$10+10=20$.", working: "10+2\\times5=20", marks: 1, markCode: "M" },
              { reasoning: "Correct value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$",
            commonErrors: ["$(10+2)\\times5=60$ — the $t$ multiplies only $a$, not $u+at$ as a whole wrongly grouped."],
          },
        },
        {
          id: "cilm-u3-sub-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $2(x - 3)^2$ when $x = 5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substitution with brackets", statement: "Evaluate inside brackets first, then square, then multiply." },
            ],
            steps: [
              { reasoning: "Inside brackets: $5-3=2$.", working: "5-3=2", marks: 1, markCode: "M" },
              { reasoning: "Square: $2^2=4$; then $2\\times4=8$.", working: "2\\times4=8", marks: 1, markCode: "M" },
              { reasoning: "Answer: $8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["$2(5-3)^2=2\\times2=4$ — must square the bracket before multiplying by 2."],
          },
        },
        {
          id: "cilm-u3-sub-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "The perimeter of a rectangle is $P = 2(l + w)$. Find $P$ when $l = 12$ cm and $w = 7.5$ cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula substitution", statement: "Add inside brackets first, then multiply by 2." },
            ],
            steps: [
              { reasoning: "$l+w=12+7.5=19.5$.", working: "12+7.5=19.5", marks: 1, markCode: "M" },
              { reasoning: "$P=2\\times19.5=39$ cm.", working: "2\\times19.5=39", marks: 1, markCode: "M" },
              { reasoning: "Answer: $39$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$39$ cm",
            commonErrors: ["$2(12)+7.5=31.5$ — the whole $(l+w)$ must be doubled."],
          },
        },
        {
          id: "cilm-u3-sub-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gym charges a joining fee plus monthly membership: total cost after $n$ months is $C = 30 + 12n$ pounds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula application", statement: "Substitute $n$; interpret fixed fee and rate." },
            ],
            steps: [
              { reasoning: "Cost for $8$ months: $C=30+12(8)=30+96=\\pounds126$.", working: "30+96=126", marks: 1, markCode: "M" },
              { reasoning: "Cost correct.", marks: 1, markCode: "A" },
              { reasoning: "The $30$ is the one-off joining fee; $12$ is the monthly membership rate ($\\pounds12$/month).", working: "30=fee, 12=rate", marks: 1, markCode: "M" },
              { reasoning: "Clear interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds126$; $30$ = joining fee, $12$ = monthly rate",
            commonErrors: ["Treating $30$ as a monthly charge — it's a one-off fee."],
          },
        },
        {
          id: "cilm-u3-sub-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A taxi firm charges $C = 4 + 1.5d$ pounds where $d$ is the distance in km.",
          parts: [
            { label: "a", prompt: "Find the cost of a $10$ km journey.", marks: 2 },
            { label: "b", prompt: "A passenger pays $\\pounds22$. How far did they travel?", marks: 3 },
            { label: "c", prompt: "Explain what the numbers $4$ and $1.5$ represent.", marks: 1 },
            { label: "d", prompt: "Find the cost per km for a long journey, ignoring the flagfall.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula problems", statement: "Substitute forward and reverse; constants vs rates." },
            ],
            steps: [
              { part: "a", reasoning: "$C=4+1.5(10)=4+15=\\pounds19$.", working: "4+15=19", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$22=4+1.5d$ → $1.5d=18$ → $d=12$ km.", working: "1.5d=18; d=12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rearrangement correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$12$ km correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$4$ = flagfall/fixed fare; $1.5$ = price per km.", working: "fixed + rate", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\pounds1.50$ per km (the coefficient of $d$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds19$ (b) $12$ km (c) $4$ = flagfall, $1.5$ = per-km rate (d) $\\pounds1.50$/km",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Cost correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Distance found correctly.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Terms explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Rate identified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (b) forgetting to subtract the flagfall before dividing by 1.5."],
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
