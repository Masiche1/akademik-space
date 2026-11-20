import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olm-u2-lesson-2-2",
  code: "2-2",
  title: "Solving Equations",
  goal: "I CAN solve linear and quadratic equations at O Level.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Linear equation", definition: "Equation where variable has power 1, e.g. $3x+5=14$." },
    { term: "Quadratic equation", definition: "$ax^2+bx+c=0$ with $a\\neq0$." },
    { term: "Subject of formula", definition: "The variable isolated on one side." },
    { term: "Simultaneous equations", definition: "Set of equations solved together." },
  ],
  concepts: [
    {
      id: "olm-u2-s2-linear",
      title: "Linear equations",
      skill: "Solve linear equations at O Level.",
      lesson: {
        sections: [
          { heading: "The balancing act", body: "Solving an equation means isolating the variable using inverse operations — whatever you do to one side, do to the other. Expand brackets first, collect variable terms on one side and constants on the other, then divide by the coefficient. For equations with fractions, multiply through by the lowest common denominator to clear them." },
          { heading: "Equations with fractions", body: "$\\frac{x}{3}+\\frac{x}{4}=7$ → multiply by 12: $4x+3x=84$ → $7x=84$ → $x=12$. For equations like $\\frac{2}{x-1}=3$, cross-multiply: $2=3(x-1)$ → $x=\\frac53$. Always check your answer by substituting back — especially for fractional equations where extraneous solutions can appear." },
        ],
        keyFormulas: [
          { name: "Balance", statement: "Same operation both sides" },
        ],
        workedExample: { problem: "Solve $\\frac{2x-1}{3}=\\frac{x+4}{2}$.", solution: "Cross-multiply: $2(2x-1)=3(x+4)$ → $4x-2=3x+12$ → $x=14$. Check: $\\frac{27}{3}=9$, $\\frac{18}{2}=9$ ✓." },
      },
      questions: [
        {
          id: "olm-u2-s2-li-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $3x+7=22$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=5$" }, { id: "b", text: "$x=6$" }, { id: "c", text: "$x=15$" }, { id: "d", text: "$x=9$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Inverse operations." }], steps: [{ reasoning: "$3x=15$ → $x=5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=5$" },
        },
        {
          id: "olm-u2-s2-li-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $5(x-2)=3x+4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Expand then collect." }], steps: [
            { reasoning: "$5x-10=3x+4$ → $2x=14$ → $x=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=7$" },
        },
        {
          id: "olm-u2-s2-li-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $\\frac{x}{2}+\\frac{x}{3}=10$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Clear fractions", statement: "Multiply by LCD." }], steps: [
            { reasoning: "Multiply by 6: $3x+2x=60$ → $5x=60$ → $x=12$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $6+4=10$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=12$" },
        },
        {
          id: "olm-u2-s2-li-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $\\frac{3}{x+1}=\\frac{2}{x-1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fractional equation", statement: "Cross-multiply." }], steps: [
            { reasoning: "$3(x-1)=2(x+1)$ → $3x-3=2x+2$ → $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Check denominators nonzero: $x=5$ gives $x+1=6$, $x-1=4$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $\\frac36=\\frac12$, $\\frac24=\\frac12$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=5$" },
        },
      ],
    },
    {
      id: "olm-u2-s2-quadratic",
      title: "Quadratic equations",
      skill: "Solve quadratic equations at O Level.",
      lesson: {
        sections: [
          { heading: "Three methods", body: "Factorise first — it's fastest when it works: $x^2-5x+6=0$ → $(x-2)(x-3)=0$ → $x=2,3$. If factorisation fails, use the quadratic formula $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$, which always works. Completing the square is the third method, useful for vertex form. The discriminant $b^2-4ac$ tells you how many real solutions exist." },
          { heading: "Choosing wisely", body: "Always try factorising first — look for two numbers multiplying to $c$ and adding to $b$ (when $a=1$). For $a\\neq1$, multiply through or use the formula directly. The formula handles all cases including irrational roots; leave answers exact with surds unless asked for decimals. Check solutions by substitution when quick." },
        ],
        keyFormulas: [
          { name: "Formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$" },
          { name: "Discriminant", statement: "$\\Delta=b^2-4ac$" },
        ],
        workedExample: { problem: "Solve $2x^2+5x-3=0$.", solution: "Try factorising: need $ac=-6$, $b=5$ → $6$ and $-1$. $(2x-1)(x+3)=0$ → $x=\\frac12$ or $x=-3$. Check: $2(\\frac14)+5(\\frac12)-3=\\frac12+\\frac52-3=0$ ✓." },
      },
      questions: [
        {
          id: "olm-u2-s2-qu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-9=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\pm3$" }, { id: "b", text: "$x=3$ only" }, { id: "c", text: "$x=9$" }, { id: "d", text: "$x=\\pm9$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic", statement: "Diff of squares." }], steps: [{ reasoning: "$(x-3)(x+3)=0$ → $x=\\pm3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm3$" },
        },
        {
          id: "olm-u2-s2-qu-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2+5x+6=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Quadratic." }], steps: [
            { reasoning: "$(x+2)(x+3)=0$ → $x=-2,-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2,-3$" },
        },
        {
          id: "olm-u2-s2-qu-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-4x-5=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find pair." }], steps: [
            { reasoning: "$(x-5)(x+1)=0$ → $x=5,-1$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $25-20-5=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=5,-1$" },
        },
        {
          id: "olm-u2-s2-qu-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $2x^2-7x+3=0$, giving exact answers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "Use formula." }], steps: [
            { reasoning: "$x=\\frac{7\\pm\\sqrt{49-24}}{4}=\\frac{7\\pm5}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "$x=3$ or $x=\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Check both in original. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=3, \\frac12$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3, \\frac12$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s2-eq-notes", title: "Solving equations — notes", summary: "Linear and quadratic methods.",
      sections: [
        { heading: "Linear", body: "Inverse operations both sides; clear fractions with LCD; check by substitution." },
        { heading: "Quadratic", body: "Factorise → formula → completing square; discriminant classifies roots." },
      ] },
  ],
};
