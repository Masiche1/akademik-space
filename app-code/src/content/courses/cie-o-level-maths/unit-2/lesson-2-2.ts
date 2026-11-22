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
            { id: "a", text: "$x=5$" },
            { id: "b", text: "$x=9$" },
            { id: "c", text: "$x=6$" },
            { id: "d", text: "$x=15$" },
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
        {
          id: "olm-u2-s2-li-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $2x=14$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=28$" },
            { id: "b", text: "$x=12$" },
            { id: "c", text: "$x=7$" },
            { id: "d", text: "$x=16$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Divide both sides by the coefficient." }], steps: [{ reasoning: "$x=\\frac{14}{2}=7$.", marks: 1, markCode: "A" }], finalAnswer: "$x=7$" },
        },
        {
          id: "olm-u2-s2-li-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $4x-3=17$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Inverse operations." }], steps: [
            { reasoning: "$4x=20$ → $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=5$" },
        },
        {
          id: "olm-u2-s2-li-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $6x+5=2x+21$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Collect $x$ terms on one side." }], steps: [
            { reasoning: "$4x=16$ → $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$" },
        },
        {
          id: "olm-u2-s2-li-q8", difficulty: "core", totalMarks: 1,
          stem: "Solve $3(x-1)=2x+4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=9$" },
            { id: "b", text: "$x=1$" },
            { id: "c", text: "$x=5$" },
            { id: "d", text: "$x=7$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Expand then collect." }], steps: [{ reasoning: "$3x-3=2x+4$ → $x=7$.", marks: 1, markCode: "A" }], finalAnswer: "$x=7$" },
        },
        {
          id: "olm-u2-s2-li-q9", difficulty: "core", totalMarks: 3,
          stem: "Solve $\\frac{x}{4}-\\frac{x}{6}=1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Clear fractions", statement: "Multiply by LCD 12." }], steps: [
            { reasoning: "$3x-2x=12$ → $x=12$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{12}{4}-\\frac{12}{6}=3-2=1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=12$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=12$" },
        },
        {
          id: "olm-u2-s2-li-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $5-2x=11$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Move constant, then divide by $-2$." }], steps: [
            { reasoning: "$-2x=6$ → $x=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $5-2(-3)=5+6=11$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-3$" },
        },
        {
          id: "olm-u2-s2-li-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $\\frac{2}{x}=\\frac{3}{x-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fractional equation", statement: "Cross-multiply." }], steps: [
            { reasoning: "$2(x-1)=3x$ → $2x-2=3x$ → $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Check denominators: $x=-2$ gives $x=-2$ and $x-1=-3$, both nonzero ✓.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $\\frac{2}{-2}=-1$ and $\\frac{3}{-3}=-1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2$" },
        },
        {
          id: "olm-u2-s2-li-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $\\frac{3x-1}{2}=\\frac{x+5}{4}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fractional equation", statement: "Cross-multiply." }], steps: [
            { reasoning: "$4(3x-1)=2(x+5)$ → $12x-4=2x+10$ → $10x=14$ → $x=\\frac{7}{5}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{3(1.4)-1}{2}=\\frac{3.2}{2}=1.6$; $\\frac{1.4+5}{4}=\\frac{6.4}{4}=1.6$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\frac75$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac75$" },
        },
        {
          id: "olm-u2-s2-li-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Solve $0.3x+1.2=2.1$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=3$" },
            { id: "b", text: "$x=4$" },
            { id: "c", text: "$x=1$" },
            { id: "d", text: "$x=0.3$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Isolate $x$." }], steps: [{ reasoning: "$0.3x=0.9$ → $x=3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3$" },
        },
        {
          id: "olm-u2-s2-li-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Solve $7x+2=30$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Inverse operations." }], steps: [
            { reasoning: "$7x=28$ → $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $7(4)+2=30$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$" },
        },
        {
          id: "olm-u2-s2-li-q15", difficulty: "core", totalMarks: 4,
          stem: "A number is doubled and then 7 is added to give 31. Find the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Form equation", statement: "Let the number be $x$: $2x+7=31$." }], steps: [
            { reasoning: "Form equation: $2x+7=31$.", marks: 1, markCode: "M" },
            { reasoning: "$2x=24$ → $x=12$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2(12)+7=31$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olm-u2-s2-li-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $\\frac{x+2}{3}-\\frac{x-1}{4}=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Clear fractions", statement: "Multiply by LCD 12." }], steps: [
            { reasoning: "$4(x+2)-3(x-1)=24$ → $4x+8-3x+3=24$ → $x+11=24$ → $x=13$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{15}{3}-\\frac{12}{4}=5-3=2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=13$" },
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
            { id: "a", text: "$x=9$" },
            { id: "b", text: "$x=\\pm9$" },
            { id: "c", text: "$x=3$ only" },
            { id: "d", text: "$x=\\pm3$" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u2-s2-qu-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2=25$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\pm5$" },
            { id: "b", text: "$x=5$ only" },
            { id: "c", text: "$x=\\pm25$" },
            { id: "d", text: "$x=25$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic", statement: "Square root gives two solutions." }], steps: [{ reasoning: "$x=\\pm\\sqrt{25}=\\pm5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm5$" },
        },
        {
          id: "olm-u2-s2-qu-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-5x+4=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }, { label: "b", answer: 4 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Quadratic." }], steps: [
            { reasoning: "$(x-1)(x-4)=0$ → $x=1$ or $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=1, 4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1, 4$" },
        },
        {
          id: "olm-u2-s2-qu-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2+2x-8=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find pair multiplying to $-8$, adding to $2$." }], steps: [
            { reasoning: "$(x+4)(x-2)=0$ → $x=-4, 2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-4, 2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-4, 2$" },
        },
        {
          id: "olm-u2-s2-qu-q8", difficulty: "core", totalMarks: 1,
          stem: "How many real solutions does $x^2+4x+4=0$ have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "Infinitely many" },
            { id: "c", text: "0" },
            { id: "d", text: "2" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$\\Delta=b^2-4ac$; $\\Delta=0$ gives one repeated root." }], steps: [{ reasoning: "$\\Delta=16-16=0$ → one repeated solution $x=-2$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olm-u2-s2-qu-q9", difficulty: "core", totalMarks: 3,
          stem: "Solve $2x^2-8=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }, { label: "b", answer: 2 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic", statement: "Rearrange then square root." }], steps: [
            { reasoning: "$2x^2=8$ → $x^2=4$ → $x=\\pm2$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2(4)-8=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\pm2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\pm2$" },
        },
        {
          id: "olm-u2-s2-qu-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-6x+9=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perfect square", statement: "$(x-3)^2=0$." }], steps: [
            { reasoning: "$(x-3)^2=0$ → $x=3$ (repeated root).", marks: 1, markCode: "M" },
            { reasoning: "Check: $9-18+9=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
        {
          id: "olm-u2-s2-qu-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $x^2-4x-1=0$, giving exact answers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$." }], steps: [
            { reasoning: "$x=\\frac{4\\pm\\sqrt{16+4}}{2}=\\frac{4\\pm\\sqrt{20}}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sqrt{20}=2\\sqrt5$, so $x=\\frac{4\\pm2\\sqrt5}{2}=2\\pm\\sqrt5$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(2+\\sqrt5)^2-4(2+\\sqrt5)-1=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2\\pm\\sqrt5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2\\pm\\sqrt5$" },
        },
        {
          id: "olm-u2-s2-qu-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $2x^2-3x-2=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.5 }, { label: "b", answer: 2 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find factor pair of $2\\times(-2)=-4$ summing to $-3$." }], steps: [
            { reasoning: "$(2x+1)(x-2)=0$ → $x=-\\frac12$ or $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Check $x=2$: $8-6-2=0$ ✓; check $x=-\\frac12$: $\\frac12+\\frac32-2=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2, -\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2, -\\frac12$" },
        },
        {
          id: "olm-u2-s2-qu-q13", difficulty: "challenge", totalMarks: 1,
          stem: "The discriminant of $x^2-6x+9=0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "-3" },
            { id: "b", text: "6" },
            { id: "c", text: "36" },
            { id: "d", text: "0" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$\\Delta=b^2-4ac$." }], steps: [{ reasoning: "$\\Delta=36-36=0$.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "olm-u2-s2-qu-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Solve $(x-4)^2=9$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }, { label: "b", answer: 7 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Square root method", statement: "$x-4=\\pm3$." }], steps: [
            { reasoning: "$x-4=3$ → $x=7$; $x-4=-3$ → $x=1$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(7-4)^2=9$ and $(1-4)^2=9$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=1, 7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1, 7$" },
        },
        {
          id: "olm-u2-s2-qu-q15", difficulty: "core", totalMarks: 3,
          stem: "Solve $3x^2+5x-2=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find factor pair of $3\\times(-2)=-6$ summing to $5$." }], steps: [
            { reasoning: "$(3x-1)(x+2)=0$ → $x=\\frac13$ or $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Check $x=-2$: $12-10-2=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\frac13, -2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac13, -2$" },
        },
        {
          id: "olm-u2-s2-qu-q16", difficulty: "challenge", totalMarks: 4,
          stem: "The product of two consecutive integers is 56. Find the two integers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Form quadratic", statement: "Let integers be $n$ and $n+1$." }], steps: [
            { reasoning: "$n(n+1)=56$ → $n^2+n-56=0$.", marks: 1, markCode: "M" },
            { reasoning: "Factorise: $(n+8)(n-7)=0$ → $n=7$ or $n=-8$.", marks: 1, markCode: "M" },
            { reasoning: "If $n=7$, integers are 7 and 8; if $n=-8$, they are $-8$ and $-7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7 and 8 (or $-8$ and $-7$).", marks: 1, markCode: "A" },
          ], finalAnswer: "7 and 8" },
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
