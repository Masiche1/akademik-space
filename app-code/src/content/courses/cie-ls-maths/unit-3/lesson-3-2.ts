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
              { id: "c", text: "$x = -5$" },
              { id: "d", text: "$x = 4$" },
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
              { id: "a", text: "$2x = 18$" },
              { id: "b", text: "$x + 2 = 18$" },
              { id: "c", text: "$x^2 = 18$" },
              { id: "d", text: "$2x + 18 = 0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "'Doubled' means $\\times 2$." },
            ],
            steps: [
              { reasoning: "Doubled = $2x$; equals 18 → $2x=18$.", working: "2x=18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2x = 18$",
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
