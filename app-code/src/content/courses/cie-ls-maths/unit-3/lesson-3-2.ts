import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cilm-u3-lesson-3-2",
  code: "3-2",
  title: "Solving equations",
  goal: "I CAN solve linear equations, including those with brackets and unknowns on both sides.",
  standards: ["0862 Algebra: solving equations"],
  vocabulary: [
    { term: "Equation", definition: "A statement that two expressions are equal — $2x+3=11$." },
    { term: "Solution", definition: "The value of the variable that makes the equation true." },
    { term: "Inverse operation", definition: "The operation that undoes another — addition undoes subtraction, division undoes multiplication." },
    { term: "Linear equation", definition: "An equation where the variable appears only to power 1 — $ax+b=c$." },
    { term: "Check", definition: "Substituting the solution back into the original equation to verify." },
    { term: "Unknown on both sides", definition: "Equations like $3x+2=x+10$ — collect variable terms first." },
  ],
  concepts: [
    {
      id: "cilm-u3-solving-basic",
      title: "Solving linear equations",
      skill: "Solve one-step and two-step equations using inverse operations, then check.",
      lesson: {
        sections: [
          {
            heading: "The balance principle",
            body: "An equation is a balance — whatever you do to one side, do to the other. To isolate $x$, undo operations in reverse order (BIDMAS backwards):\n\n$3x + 5 = 20$ → subtract 5 → $3x = 15$ → divide by 3 → $x = 5$.",
          },
          {
            heading: "Two-step equations",
            body: "1. Undo addition/subtraction first.\n2. Undo multiplication/division.\n3. Check by substituting back.\n\n$2x - 7 = 11$ → $2x = 18$ → $x = 9$. Check: $2(9)-7=18-7=11$ ✓.",
          },
          {
            heading: "Brackets and fractions",
            body: "Expand brackets first: $2(x+3)=14$ → $2x+6=14$ → $2x=8$ → $x=4$.\n\nFor fractions, multiply both sides by the denominator: $\\frac{x}{3}=5$ → $x=15$.",
          },
        ],
        keyFormulas: [
          { name: "Solving rule", statement: "Apply inverse operations to both sides; isolate $x$; always check." },
        ],
        workedExample: {
          problem: "Solve $5x - 8 = 3x + 12$.",
          solution: "Collect $x$ terms: $5x - 3x = 12 + 8$ → $2x = 20$ → $x = 10$. Check: $5(10)-8=42$ and $3(10)+12=42$ ✓.",
        },
      },
      questions: [
        {
          id: "cilm-u3-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + 7 = 12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 5$" },
              { id: "b", text: "$x = 19$" },
              { id: "c", text: "$x = 4$" },
              { id: "d", text: "$x = -5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverse operations", statement: "Subtract 7 from both sides." },
            ],
            steps: [
              { reasoning: "$x = 12 - 7 = 5$.", working: "x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = 5$",
            commonErrors: ["Choosing (b) — adding instead of subtracting."],
          },
        },
        {
          id: "cilm-u3-eq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x + 4 = 19$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Two-step equations", statement: "Subtract constant first, then divide by coefficient." },
            ],
            steps: [
              { reasoning: "$3x = 19 - 4 = 15$.", working: "3x=15", marks: 1, markCode: "M" },
              { reasoning: "$x = 15 \\div 3 = 5$.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$",
            commonErrors: ["$x = 19 \\div 3$ — must subtract 4 first."],
          },
        },
        {
          id: "cilm-u3-eq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $4(x - 2) = 3x + 5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equations with brackets and x on both sides", statement: "Expand, collect x terms, solve." },
            ],
            steps: [
              { reasoning: "Expand: $4x - 8 = 3x + 5$.", working: "4x-8=3x+5", marks: 1, markCode: "M" },
              { reasoning: "Collect: $4x - 3x = 5 + 8$ → $x = 13$.", working: "x=13", marks: 1, markCode: "M" },
              { reasoning: "Check: $4(13-2)=44$; $3(13)+5=44$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=13$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 13$",
            commonErrors: ["$4x-8=3x+5$ → $x=5+8=13$ is right; sign errors when moving $-8$ to the right."],
          },
        },
        {
          id: "cilm-u3-eq-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two numbers have a relationship described by an equation.",
          parts: [
            { label: "a", prompt: "Solve $2x + 3 = 17$.", marks: 2 },
            { label: "b", prompt: "Solve $5 - 2x = 11$.", marks: 3 },
            { label: "c", prompt: "Solve $\\frac{x+1}{3} = 4$.", marks: 2 },
            { label: "d", prompt: "A number doubled plus 5 equals 21. Write and solve the equation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equation solving", statement: "Inverse operations; handle negative coefficients and fractions." },
            ],
            steps: [
              { part: "a", reasoning: "$2x=14$, $x=7$.", working: "x=7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$-2x=6$, $x=-3$.", working: "-2x=6; x=-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Negative result handled.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$x+1=12$, $x=11$.", working: "x+1=12; x=11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Equation: $2x+5=21$ → $2x=16$ → $x=8$.", working: "2x+5=21; x=8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct equation and solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=7$ (b) $x=-3$ (c) $x=11$ (d) $2x+5=21$, $x=8$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Negative solution correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Sign error.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Fraction equation solved.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Equation formed and solved.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (b) getting $x=3$ instead of $-3$ — check by substituting."],
          },
        },
        {
          id: "cilm-u3-eq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x = 14$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 12$" },
              { id: "b", text: "$x = 7$" },
              { id: "c", text: "$x = 28$" },
              { id: "d", text: "$x = 16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverse operations", statement: "Divide both sides by 2." },
            ],
            steps: [
              { reasoning: "$x = 14 \\div 2 = 7$.", working: "x=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x = 7$",
            commonErrors: ["Choosing (b) — subtracting 2 instead of dividing."],
          },
        },
        {
          id: "cilm-u3-eq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x - 5 = 8$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 40$" },
              { id: "b", text: "$x = 3$" },
              { id: "c", text: "$x = 13$" },
              { id: "d", text: "$x = -3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverse operations", statement: "Add 5 to both sides." },
            ],
            steps: [
              { reasoning: "$x = 8 + 5 = 13$.", working: "x=13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $x = 13$",
            commonErrors: ["Choosing (b) — $8-5$ subtracts instead of undoing subtraction."],
          },
        },
        {
          id: "cilm-u3-eq-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $3x + 1 = 16$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 4$" },
              { id: "b", text: "$x = 15$" },
              { id: "c", text: "$x = 6$" },
              { id: "d", text: "$x = 5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Two-step equations", statement: "Subtract 1, then divide by 3." },
            ],
            steps: [
              { reasoning: "$3x = 15$ → $x = 5$.", working: "x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $x = 5$",
            commonErrors: ["Choosing (b) — $16-1=15$, $15\\div3=5$ not 4."],
          },
        },
        {
          id: "cilm-u3-eq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $2(x + 3) = 14$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 8$" },
              { id: "b", text: "$x = 4$" },
              { id: "c", text: "$x = 5$" },
              { id: "d", text: "$x = 11$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Brackets first", statement: "Either expand ($2x+6=14$) or divide first ($x+3=7$)." },
            ],
            steps: [
              { reasoning: "$x+3=7$ → $x=4$.", working: "x=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x = 4$",
            commonErrors: ["Choosing (c) — $14\\div2=7$ gives $x+3$, not $x$; subtract 3."],
          },
        },
        {
          id: "cilm-u3-eq-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $4x - 8 = 3x + 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = -13$" },
              { id: "b", text: "$x = 13$" },
              { id: "c", text: "$x = 11$" },
              { id: "d", text: "$x = 3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unknown on both sides", statement: "Collect $x$ terms and constants separately." },
            ],
            steps: [
              { reasoning: "$4x-3x = 5+8$ → $x = 13$.", working: "x=13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x = 13$",
            commonErrors: ["Choosing (d) — $-8$ must move to the right as $+8$."],
          },
        },
        {
          id: "cilm-u3-eq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $5x - 4 = 21$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Two-step equations", statement: "Add 4, then divide by 5." },
            ],
            steps: [
              { reasoning: "$5x = 25$ → $x = 5$.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$",
            commonErrors: ["$x = 21 \\div 5$ — must add 4 first."],
          },
        },
        {
          id: "cilm-u3-eq-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve (a) $3x + 7 = 22$ (b) $4 - 2x = 10$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 5 }, { label: "(b)", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverse operations", statement: "Handle negative results carefully." },
            ],
            steps: [
              { reasoning: "(a) $3x = 15$ → $x = 5$.", working: "x=5", marks: 1, markCode: "A" },
              { reasoning: "(b) $-2x = 6$ → $x = -3$.", working: "x=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x = 5$ (b) $x = -3$",
            commonErrors: ["In (b) $x = 3$ — check: $4-2(-3)=10$ ✓ but $4-2(3)=-2$ ✗."],
          },
        },
        {
          id: "cilm-u3-eq-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{x + 1}{4} = 3$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fractional equations", statement: "Multiply both sides by the denominator." },
            ],
            steps: [
              { reasoning: "$x+1 = 12$ → $x = 11$.", working: "x=11", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{11+1}{4}=3$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 11$",
            commonErrors: ["$x = 3 \\times 4 = 12$ — forgot to subtract 1 after multiplying."],
          },
        },
        {
          id: "cilm-u3-eq-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $6x + 5 = 29$. Check your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Two-step equations", statement: "Undo addition, then multiplication; verify." },
            ],
            steps: [
              { reasoning: "$6x = 24$ → $x = 4$.", working: "x=4", marks: 1, markCode: "M" },
              { reasoning: "Solution found.", marks: 1, markCode: "A" },
              { reasoning: "Check: $6(4)+5=24+5=29$ ✓.", working: "6\\times4+5=29", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
            commonErrors: ["Not checking — substituting back catches sign and arithmetic slips."],
          },
        },
        {
          id: "cilm-u3-eq-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2(2x - 1) = 3x + 4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Brackets and x on both sides", statement: "Expand first, then collect." },
            ],
            steps: [
              { reasoning: "Expand: $4x - 2 = 3x + 4$.", working: "4x-2=3x+4", marks: 1, markCode: "M" },
              { reasoning: "Collect: $x = 6$.", working: "x=6", marks: 1, markCode: "M" },
              { reasoning: "Check: $2(2\\times6-1)=22$ and $3(6)+4=22$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 6$",
            commonErrors: ["Expanding as $4x-1$ — the $-1$ inside brackets must also be doubled."],
          },
        },
        {
          id: "cilm-u3-eq-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $5 - 3x = 20$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negative coefficients", statement: "Subtract 5, divide by $-3$ — keep track of signs." },
            ],
            steps: [
              { reasoning: "$-3x = 15$.", working: "-3x=15", marks: 1, markCode: "M" },
              { reasoning: "$x = 15 \\div (-3) = -5$.", working: "x=-5", marks: 1, markCode: "M" },
              { reasoning: "Check: $5-3(-5)=5+15=20$ ✓.", working: "5+15=20", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = -5$ — negative solutions are valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -5$",
            commonErrors: ["$x = 5$ — sign error when dividing by $-3$."],
          },
        },
        {
          id: "cilm-u3-eq-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation.",
          parts: [
            { label: "a", prompt: "Solve $x + 9 = 15$.", marks: 2 },
            { label: "b", prompt: "Solve $4x = 28$.", marks: 2 },
            { label: "c", prompt: "Solve $3x - 5 = 16$.", marks: 2 },
            { label: "d", prompt: "Solve $2(x + 4) = 18$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverse operations", statement: "Isolate $x$ step by step; check each answer." },
            ],
            steps: [
              { part: "a", reasoning: "$x = 6$.", working: "x=6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x = 7$.", working: "x=7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3x = 21$ → $x = 7$.", working: "x=7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$x+4=9$ → $x=5$.", working: "x=5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=6$ (b) $x=7$ (c) $x=7$ (d) $x=5$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (d) $18\\div2=9$ is $x+4$ — subtract 4 to get $x=5$."],
          },
        },
      ],
    },
    {
      id: "cilm-u3-equations-context",
      title: "Equations in context",
      skill: "Translate word problems into equations and solve them.",
      lesson: {
        sections: [
          {
            heading: "Translating words to algebra",
            body: "- 'a number $x$' → $x$\n- 'double the number' → $2x$\n- '5 more than' → $+5$\n- '3 less than twice' → $2x-3$\n- 'is equal to' → $=$",
          },
          {
            heading: "Problem-solving steps",
            body: "1. Identify the unknown — call it $x$.\n2. Write expressions for each quantity.\n3. Form the equation from the relationship.\n4. Solve and check the answer makes sense.",
          },
          {
            heading: "Example types",
            body: "- 'Three consecutive integers sum to 48' → $x+(x+1)+(x+2)=48$.\n- 'A number plus its double is 30' → $x+2x=30$.\n- 'Perimeter is 40, length is twice width' → $2(l+w)=40$, $l=2w$.",
          },
        ],
        keyFormulas: [
          { name: "Word to algebra", statement: "Unknown → variable; relationships → equation; solve → check." },
        ],
        workedExample: {
          problem: "The sum of three consecutive integers is 63. Find the integers.",
          solution: "Let them be $x, x+1, x+2$. $x+(x+1)+(x+2)=63$ → $3x+3=63$ → $3x=60$ → $x=20$. Integers: $20, 21, 22$.",
        },
      },
      questions: [
        {
          id: "cilm-u3-ctx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write an equation for: 'A number doubled is 18.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2 = 18$" },
              { id: "b", text: "$x + 2 = 18$" },
              { id: "c", text: "$2x + 18 = 0$" },
              { id: "d", text: "$2x = 18$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "'Doubled' means $\\times 2$." },
            ],
            steps: [
              { reasoning: "Doubled = $2x$; equals 18 → $2x=18$.", working: "2x=18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $2x = 18$",
            commonErrors: ["Choosing (b) — 'plus 2' is not 'doubled'."],
          },
        },
        {
          id: "cilm-u3-ctx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A number plus 7 equals 20. Find the number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word problems", statement: "Form equation $x+7=20$, solve." },
            ],
            steps: [
              { reasoning: "$x+7=20$ → $x=13$.", working: "x=13", marks: 1, markCode: "M" },
              { reasoning: "Check: $13+7=20$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["$x=27$ — adding 7 instead of subtracting."],
          },
        },
        {
          id: "cilm-u3-ctx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The sum of three consecutive even numbers is 54. Find them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Consecutive numbers", statement: "Even numbers differ by 2: $x, x+2, x+4$." },
            ],
            steps: [
              { reasoning: "Let them be $x, x+2, x+4$ (even → step 2, not 1).", working: "x, x+2, x+4", marks: 1, markCode: "M" },
              { reasoning: "$x+(x+2)+(x+4)=54$ → $3x+6=54$ → $3x=48$ → $x=16$.", working: "x=16", marks: 1, markCode: "M" },
              { reasoning: "Numbers: $16, 18, 20$.", working: "16,18,20", marks: 1, markCode: "M" },
              { reasoning: "Check: $16+18+20=54$ ✓ and all even.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16, 18, 20$",
            commonErrors: ["Using $x, x+1, x+2$ — those are consecutive integers, not even numbers."],
          },
        },
        {
          id: "cilm-u3-ctx-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangle's length is 3 cm more than twice its width. Its perimeter is 42 cm.",
          parts: [
            { label: "a", prompt: "Write expressions for length and width in terms of $w$.", marks: 2 },
            { label: "b", prompt: "Form an equation for the perimeter and solve for $w$.", marks: 4 },
            { label: "c", prompt: "Find the length and width.", marks: 2 },
            { label: "d", prompt: "Verify your answer using the perimeter formula.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Geometry equations", statement: "Define variables → express relationships → form equation → solve → verify." },
            ],
            steps: [
              { part: "a", reasoning: "Width $=w$; length $=2w+3$.", working: "w, 2w+3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2(w + 2w + 3) = 42$ or $2l + 2w = 42$.", working: "2(w+2w+3)=42", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct equation formed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$6w + 6 = 42$ → $6w = 36$ → $w = 6$.", working: "w=6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct solution.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Width $=6$ cm; length $=2(6)+3=15$ cm.", working: "6, 15", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2(15+6)=2(21)=42$ ✓.", working: "2(15+6)=42", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $w$, $2w+3$ (b) $w=6$ (c) $6$ cm $\\times$ $15$ cm (d) $2(15+6)=42$ ✓",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Expressions correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "3-4", descriptor: "Equation + solution correct.", part: "b" },
              { level: "Level 2", marks: "2", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Dimensions correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Verified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (b) writing $2w+3+2w=42$ — perimeter needs BOTH pairs of sides."],
          },
        },
        {
          id: "cilm-u3-ctx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write an equation for: 'A number tripled is 27.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x = 27$" },
              { id: "b", text: "$x^3 = 27$" },
              { id: "c", text: "$x + 3 = 27$" },
              { id: "d", text: "$3x + 27 = 0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "'Tripled' means $\\times 3$." },
            ],
            steps: [
              { reasoning: "Tripled $=3x$; equals 27 → $3x=27$.", working: "3x=27", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3x = 27$",
            commonErrors: ["Choosing (b) — 'plus 3' is not 'tripled'."],
          },
        },
        {
          id: "cilm-u3-ctx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write an equation for: '5 less than a number is 12.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5x = 12$" },
              { id: "b", text: "$x + 5 = 12$" },
              { id: "c", text: "$x - 5 = 12$" },
              { id: "d", text: "$5 - x = 12$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "'5 less than $x$' means $x-5$." },
            ],
            steps: [
              { reasoning: "$x-5=12$.", working: "x-5=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $x - 5 = 12$",
            commonErrors: ["Choosing (b) — '5 less than a number' subtracts from the number, not the reverse."],
          },
        },
        {
          id: "cilm-u3-ctx-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write an equation for: 'Twice a number plus 3 is equal to 11.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x + 3 = 11$" },
              { id: "b", text: "$2x - 3 = 11$" },
              { id: "c", text: "$2(x + 3) = 11$" },
              { id: "d", text: "$x + 6 = 11$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "'Twice a number' = $2x$; 'plus 3' = $+3$." },
            ],
            steps: [
              { reasoning: "$2x+3=11$.", working: "2x+3=11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2x + 3 = 11$",
            commonErrors: ["Choosing (b) — 'twice (number plus 3)' differs from 'twice number plus 3'."],
          },
        },
        {
          id: "cilm-u3-ctx-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which equation represents 'three consecutive integers sum to 45'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x + (x+3) + (x+6) = 45$" },
              { id: "b", text: "$3x = 45$ only" },
              { id: "c", text: "$x + x + x = 45$" },
              { id: "d", text: "$x + (x+1) + (x+2) = 45$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Consecutive integers", statement: "Consecutive integers differ by 1." },
            ],
            steps: [
              { reasoning: "Consecutive integers are $x, x+1, x+2$ (differ by 1, not 3): $x+(x+1)+(x+2)=45$.", working: "x+(x+1)+(x+2)=45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $x + (x+1) + (x+2) = 45$",
            commonErrors: ["Choosing (d) — step 3 applies to multiples of 3, not consecutive integers."],
          },
        },
        {
          id: "cilm-u3-ctx-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write an equation for: 'A number divided by 4 is equal to 6.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{x}{4} = 6$" },
              { id: "b", text: "$\\frac{4}{x} = 6$" },
              { id: "c", text: "$x - 4 = 6$" },
              { id: "d", text: "$4x = 6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "'Divided by 4' puts $x$ over 4." },
            ],
            steps: [
              { reasoning: "$\\frac{x}{4}=6$.", working: "\\frac{x}{4}=6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{x}{4} = 6$",
            commonErrors: ["Choosing (c) — 'divided by' is not 'multiplied by'."],
          },
        },
        {
          id: "cilm-u3-ctx-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A number plus 9 is 20. Find the number.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word problems", statement: "Form $x+9=20$ and solve." },
            ],
            steps: [
              { reasoning: "$x = 20 - 9 = 11$.", working: "x=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["$29$ — adding instead of subtracting."],
          },
        },
        {
          id: "cilm-u3-ctx-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) A number doubled is 18. Find the number. (b) A number minus 7 is 15. Find the number.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 9 }, { label: "(b)", answer: 22 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word problems", statement: "Translate to equations and solve." },
            ],
            steps: [
              { reasoning: "(a) $2x=18$ → $x=9$.", working: "x=9", marks: 1, markCode: "A" },
              { reasoning: "(b) $x-7=15$ → $x=22$.", working: "x=22", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $9$ (b) $22$",
            commonErrors: ["In (a) $x=36$ — halving needed after doubling."],
          },
        },
        {
          id: "cilm-u3-ctx-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The sum of three consecutive even numbers is $48$. Find the smallest number.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Consecutive even numbers", statement: "Step is 2: $x, x+2, x+4$; sum $=3x+6=48$." },
            ],
            steps: [
              { reasoning: "$3x+6=48$ → $3x=42$ → $x=14$.", working: "x=14", marks: 1, markCode: "M" },
              { reasoning: "Check: $14+16+18=48$ ✓ all even.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Using step 1 — consecutive even numbers differ by 2."],
          },
        },
        {
          id: "cilm-u3-ctx-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "The sum of a number and its double is $36$. Find the number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word problems", statement: "Number $=x$, double $=2x$; $x+2x=36$." },
            ],
            steps: [
              { reasoning: "Equation: $x+2x=36$ → $3x=36$.", working: "3x=36", marks: 1, markCode: "M" },
              { reasoning: "$x = 12$.", working: "x=12", marks: 1, markCode: "M" },
              { reasoning: "Check: $12+24=36$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Writing $x+2=36$ — 'its double' is $2x$, not 2."],
          },
        },
        {
          id: "cilm-u3-ctx-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A number plus three times itself is $28$. Find the number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word problems", statement: "$x+3x=28$ → $4x=28$." },
            ],
            steps: [
              { reasoning: "Equation: $x+3x=28$ → $4x=28$.", working: "4x=28", marks: 1, markCode: "M" },
              { reasoning: "$x = 7$.", working: "x=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $7+21=28$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["$4x=7$ — dividing before collecting like terms."],
          },
        },
        {
          id: "cilm-u3-ctx-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two consecutive integers have a sum of $57$. Find the integers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Consecutive integers", statement: "$x+(x+1)=57$ → $2x=56$." },
            ],
            steps: [
              { reasoning: "Let integers be $x$ and $x+1$: $x+(x+1)=57$.", working: "x+(x+1)=57", marks: 1, markCode: "M" },
              { reasoning: "$2x+1=57$ → $2x=56$ → $x=28$.", working: "x=28", marks: 1, markCode: "M" },
              { reasoning: "Integers: $28$ and $29$.", working: "28,29", marks: 1, markCode: "M" },
              { reasoning: "Check: $28+29=57$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28$ and $29$",
            commonErrors: ["$28.5$ each — integers differ by 1, not equal shares."],
          },
        },
        {
          id: "cilm-u3-ctx-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangle's length is twice its width. Its perimeter is $36$ cm.",
          parts: [
            { label: "a", prompt: "Write expressions for the width $w$ and length $l$.", marks: 2 },
            { label: "b", prompt: "Form an equation for the perimeter and solve for $w$.", marks: 3 },
            { label: "c", prompt: "Find the width and length.", marks: 2 },
            { label: "d", prompt: "Verify using the perimeter formula.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Geometry word problems", statement: "Define variables → express relationships → equation → solve → verify." },
            ],
            steps: [
              { part: "a", reasoning: "Width $=w$; length $=2w$.", working: "w, 2w", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2(w+2w)=36$ or $2l+2w=36$ with $l=2w$.", working: "2(w+2w)=36", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$6w=36$ → $w=6$.", working: "w=6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct solution.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Width $=6$ cm; length $=12$ cm.", working: "6, 12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2(12+6)=2(18)=36$ ✓.", working: "2(18)=36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $w$, $2w$ (b) $w=6$ (c) $6$ cm $\\times$ $12$ cm (d) $2(18)=36$ ✓",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Expressions correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Equation + solution correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Dimensions correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Verified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (b) $2w+2w=36$ — perimeter uses $l+w$ inside the 2, i.e. $2(w+2w)$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u3-equations-notes",
      title: "Solving equations — revision notes",
      summary: "Inverse operations, equations with brackets and unknowns on both sides, word problems.",
      sections: [
        {
          heading: "Method",
          body: "Balance principle: same operation both sides. Undo in reverse order — add/subtract first, then multiply/divide. Expand brackets; collect x terms.",
        },
        {
          heading: "Word problems",
          body: "Unknown → $x$; consecutive integers differ by 1, consecutive evens by 2; 'twice' = $2x$; check answer in context.",
        },
      ],
    },
  ],
};
