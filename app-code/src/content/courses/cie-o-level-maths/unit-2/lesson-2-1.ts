import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olm-u2-lesson-2-1",
  code: "2-1",
  title: "Algebraic Expressions",
  goal: "I CAN manipulate algebraic expressions — expand, factorise and simplify.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Expression", definition: "Combination of terms without equals sign, e.g. $3x+2y$." },
    { term: "Term", definition: "Part of expression: coefficient × variable(s)." },
    { term: "Like terms", definition: "Terms with same variable powers — can be combined." },
    { term: "Factorise", definition: "Write expression as product of factors." },
  ],
  concepts: [
    {
      id: "olm-u2-s1-expand",
      title: "Expanding expressions",
      skill: "Expand brackets and collect like terms at O Level.",
      lesson: {
        sections: [
          { heading: "Expanding brackets", body: "Every term inside the bracket must multiply every term outside: $a(b+c)=ab+ac$. For two brackets $(a+b)(c+d)$, multiply each term in the first by each in the second — 'FOIL' for quadratics gives $ac+ad+bc+bd$. With negatives be careful: $-3(x-2)=-3x+6$, not $-3x-6$." },
          { heading: "Collecting like terms", body: "After expanding, combine terms with identical variable parts: $3x+5x=8x$, but $3x+5y$ stays as is. Powers matter: $x^2$ and $x$ are not like terms. Always write your answer in descending powers of the variable — it's the expected convention and makes checking easier." },
        ],
        keyFormulas: [
          { name: "Distributive", statement: "$a(b+c)=ab+ac$" },
          { name: "FOIL", statement: "$(a+b)(c+d)=ac+ad+bc+bd$" },
        ],
        workedExample: { problem: "Expand and simplify $(2x+3)(x-4)+5x$.", solution: "$(2x+3)(x-4)=2x^2-8x+3x-12=2x^2-5x-12$. Add $5x$: $2x^2-12$. Answer: $2x^2-12$." },
      },
      questions: [
        {
          id: "olm-u2-s1-ex-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Expand $3(x+4)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3x+12$" }, { id: "b", text: "$3x+4$" }, { id: "c", text: "$x+12$" }, { id: "d", text: "$3x+7$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Distributive", statement: "Multiply each term." }], steps: [{ reasoning: "$3x+12$.", marks: 1, markCode: "A" }], finalAnswer: "$3x+12$" },
        },
        {
          id: "olm-u2-s1-ex-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Simplify $5x+3y-2x+y$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Like terms", statement: "Combine same variables." }], steps: [
            { reasoning: "$5x-2x=3x$; $3y+y=4y$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3x+4y$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x+4y$" },
        },
        {
          id: "olm-u2-s1-ex-q3", difficulty: "core", totalMarks: 3,
          stem: "Expand $(x+5)(x-2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "FOIL", statement: "Two brackets." }], steps: [
            { reasoning: "$x^2-2x+5x-10=x^2+3x-10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x^2+3x-10$.", marks: 1, markCode: "M" },
            { reasoning: "Check by substituting $x=1$: $(6)(-1)=-6$; $1+3-10=-6$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^2+3x-10$" },
        },
        {
          id: "olm-u2-s1-ex-q4", difficulty: "core", totalMarks: 4,
          stem: "Expand and simplify $(2x-1)^2-(x+3)(x-3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand both", statement: "Square and difference of squares." }], steps: [
            { reasoning: "$(2x-1)^2=4x^2-4x+1$; $(x+3)(x-3)=x^2-9$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $4x^2-4x+1-(x^2-9)=4x^2-4x+1-x^2+9=3x^2-4x+10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3x^2-4x+10$.", marks: 1, markCode: "M" },
            { reasoning: "Careful with signs when subtracting the bracket. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x^2-4x+10$" },
        },
      ],
    },
    {
      id: "olm-u2-s1-factor",
      title: "Factorising",
      skill: "Factorise expressions at O Level.",
      lesson: {
        sections: [
          { heading: "Common factors", body: "Always look for a common factor first: $6x+9=3(2x+3)$. For quadratics $ax^2+bx+c$, find two numbers multiplying to $ac$ and adding to $b$ — or use the 'cross method' drawing an X. Difference of squares $a^2-b^2=(a+b)(a-b)$ is instant once spotted. Perfect squares $(a\\pm b)^2=a^2\\pm2ab+b^2$ also appear frequently." },
          { heading: "Strategy", body: "Work systematically: (1) take out any common factor, (2) check for difference of squares or perfect square, (3) try factorising the remaining quadratic. Always expand your answer to verify — factorisation errors are caught instantly by expansion. If the quadratic won't factorise over integers, leave it and use the formula instead (next lesson)." },
        ],
        keyFormulas: [
          { name: "Difference of squares", statement: "$a^2-b^2=(a+b)(a-b)$" },
          { name: "Perfect square", statement: "$(a+b)^2=a^2+2ab+b^2$" },
        ],
        workedExample: { problem: "Factorise $12x^2-27$.", solution: "Common factor 3: $3(4x^2-9)=3(2x-3)(2x+3)$ using difference of squares. Answer: $3(2x-3)(2x+3)$." },
      },
      questions: [
        {
          id: "olm-u2-s1-fa-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Factorise $5x+10$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$5(x+2)$" }, { id: "b", text: "$x+2$" }, { id: "c", text: "$5(x+10)$" }, { id: "d", text: "$(5x+10)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Common factor", statement: "Take out 5." }], steps: [{ reasoning: "$5(x+2)$.", marks: 1, markCode: "A" }], finalAnswer: "$5(x+2)$" },
        },
        {
          id: "olm-u2-s1-fa-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Factorise $x^2-16$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Diff of squares", statement: "$a^2-b^2$." }], steps: [
            { reasoning: "$(x-4)(x+4)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-4)(x+4)$" },
        },
        {
          id: "olm-u2-s1-fa-q3", difficulty: "core", totalMarks: 3,
          stem: "Factorise $x^2+7x+12$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic factorise", statement: "Find pair." }], steps: [
            { reasoning: "Need numbers multiplying to 12, adding to 7: 3 and 4.", marks: 1, markCode: "M" },
            { reasoning: "$(x+3)(x+4)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: expands to $x^2+7x+12$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x+3)(x+4)$" },
        },
        {
          id: "olm-u2-s1-fa-q4", difficulty: "core", totalMarks: 4,
          stem: "Factorise $2x^2-8x-10$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factor fully", statement: "Common factor then quadratic." }], steps: [
            { reasoning: "$2(x^2-4x-5)$.", marks: 1, markCode: "M" },
            { reasoning: "$x^2-4x-5=(x-5)(x+1)$ — numbers $-5$ and $+1$ multiply to $-5$, add to $-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2(x-5)(x+1)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify expansion. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$2(x-5)(x+1)$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s1-expr-notes", title: "Algebraic expressions — notes", summary: "Expanding and factorising.",
      sections: [
        { heading: "Expand", body: "Every term × every term; combine like terms; watch negative signs." },
        { heading: "Factorise", body: "Common factor → diff of squares → quadratic pairs; verify by expanding." },
      ] },
  ],
};
