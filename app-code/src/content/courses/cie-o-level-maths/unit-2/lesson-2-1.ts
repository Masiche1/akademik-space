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
            { id: "a", text: "$3x+12$" },
            { id: "b", text: "$3x+4$" },
            { id: "c", text: "$3x+7$" },
            { id: "d", text: "$x+12$" },
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
        {
          id: "olm-u2-s1-ex-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Expand $2(x-3)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x-6$" },
            { id: "b", text: "$2x+6$" },
            { id: "c", text: "$2x-6$" },
            { id: "d", text: "$2x-3$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Distributive", statement: "Multiply each term inside by 2." }], steps: [{ reasoning: "$2x-6$.", marks: 1, markCode: "A" }], finalAnswer: "$2x-6$" },
        },
        {
          id: "olm-u2-s1-ex-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Given the expression $3x-2y$, find its value when $x=5$ and $y=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Replace variables with values." }], steps: [
            { reasoning: "$3(5)-2(4)=15-8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u2-s1-ex-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Simplify $4x+2x-3x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Like terms", statement: "Combine terms with the same variable." }], steps: [
            { reasoning: "$4x+2x=6x$; $6x-3x=3x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3x$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x$" },
        },
        {
          id: "olm-u2-s1-ex-q8", difficulty: "core", totalMarks: 1,
          stem: "Expand $(x+2)(x+5)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2+10x+7$" },
            { id: "b", text: "$x^2+7x+10$" },
            { id: "c", text: "$x^2+3x+10$" },
            { id: "d", text: "$x^2+7x+7$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "FOIL", statement: "Multiply each term by each term." }], steps: [{ reasoning: "$x^2+5x+2x+10=x^2+7x+10$.", marks: 1, markCode: "A" }], finalAnswer: "$x^2+7x+10$" },
        },
        {
          id: "olm-u2-s1-ex-q9", difficulty: "core", totalMarks: 3,
          stem: "Expand $(3x-2)(x+4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "FOIL", statement: "Two brackets." }], steps: [
            { reasoning: "$3x^2+12x-2x-8$.", marks: 1, markCode: "M" },
            { reasoning: "Simplify: $3x^2+10x-8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x^2+10x-8$" },
        },
        {
          id: "olm-u2-s1-ex-q10", difficulty: "core", totalMarks: 1,
          stem: "Simplify $2(x+3)-3(x-1)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x+9$" },
            { id: "b", text: "$-5x+9$" },
            { id: "c", text: "$-x+9$" },
            { id: "d", text: "$-x+3$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Distributive", statement: "Expand both brackets then collect." }], steps: [{ reasoning: "$2x+6-3x+3=-x+9$.", marks: 1, markCode: "A" }], finalAnswer: "$-x+9$" },
        },
        {
          id: "olm-u2-s1-ex-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate $x^2-3x+1$ when $x=-2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Bracket negative values carefully." }], steps: [
            { reasoning: "Substitute: $(-2)^2-3(-2)+1$.", marks: 1, markCode: "M" },
            { reasoning: "$=4+6+1$.", marks: 1, markCode: "M" },
            { reasoning: "$=11$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 11.", marks: 1, markCode: "A" },
          ], finalAnswer: "11" },
        },
        {
          id: "olm-u2-s1-ex-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Expand and simplify $(x-4)^2-(x+1)(x-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand both", statement: "Perfect square and difference of squares." }], steps: [
            { reasoning: "$(x-4)^2=x^2-8x+16$; $(x+1)(x-1)=x^2-1$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $x^2-8x+16-(x^2-1)=x^2-8x+16-x^2+1$.", marks: 1, markCode: "M" },
            { reasoning: "Simplify: $-8x+17$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-8x+17$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-8x+17$" },
        },
        {
          id: "olm-u2-s1-ex-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Expand $(2x+y)(3x-y)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6x^2-5xy-y^2$" },
            { id: "b", text: "$6x^2+xy+y^2$" },
            { id: "c", text: "$6x^2-xy-y^2$" },
            { id: "d", text: "$6x^2+xy-y^2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "FOIL", statement: "Multiply each term by each term." }], steps: [{ reasoning: "$6x^2-2xy+3xy-y^2=6x^2+xy-y^2$.", marks: 1, markCode: "A" }], finalAnswer: "$6x^2+xy-y^2$" },
        },
        {
          id: "olm-u2-s1-ex-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Evaluate $5a+2b$ when $a=3$ and $b=7$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 29 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Replace variables with values." }], steps: [
            { reasoning: "$5(3)+2(7)=15+14$.", marks: 1, markCode: "M" },
            { reasoning: "$=29$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 29.", marks: 1, markCode: "A" },
          ], finalAnswer: "29" },
        },
        {
          id: "olm-u2-s1-ex-q15", difficulty: "core", totalMarks: 3,
          stem: "Expand and simplify $x(2x-3)+4(x^2+1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Distributive", statement: "Expand both parts then collect like terms." }], steps: [
            { reasoning: "$x(2x-3)=2x^2-3x$; $4(x^2+1)=4x^2+4$.", marks: 1, markCode: "M" },
            { reasoning: "Add: $6x^2-3x+4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6x^2-3x+4$" },
        },
        {
          id: "olm-u2-s1-ex-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Show that $(x+3)^2-(x-3)^2=12x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perfect squares", statement: "Expand both squares and subtract." }], steps: [
            { reasoning: "$(x+3)^2=x^2+6x+9$; $(x-3)^2=x^2-6x+9$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $x^2+6x+9-(x^2-6x+9)$.", marks: 1, markCode: "M" },
            { reasoning: "$=x^2+6x+9-x^2+6x-9=12x$.", marks: 1, markCode: "M" },
            { reasoning: "Hence $(x+3)^2-(x-3)^2=12x$. QED.", marks: 1, markCode: "A" },
          ], finalAnswer: "$12x$" },
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
            { id: "a", text: "$(5x+10)$" },
            { id: "b", text: "$x+2$" },
            { id: "c", text: "$5(x+10)$" },
            { id: "d", text: "$5(x+2)$" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u2-s1-fa-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Factorise $8x-12$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4(2x-3)$" },
            { id: "b", text: "$8(x-12)$" },
            { id: "c", text: "$4(x-3)$" },
            { id: "d", text: "$2(4x-6)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Common factor", statement: "Take out the highest common factor." }], steps: [{ reasoning: "HCF of 8 and 12 is 4: $4(2x-3)$.", marks: 1, markCode: "A" }], finalAnswer: "$4(2x-3)$" },
        },
        {
          id: "olm-u2-s1-fa-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Factorise $x^2-25$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x-25)(x+1)$" },
            { id: "b", text: "$(x+5)^2$" },
            { id: "c", text: "$(x-5)(x+5)$" },
            { id: "d", text: "$(x-5)^2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Diff of squares", statement: "$a^2-b^2=(a+b)(a-b)$." }], steps: [{ reasoning: "$x^2-25=(x-5)(x+5)$.", marks: 1, markCode: "A" }], finalAnswer: "$(x-5)(x+5)$" },
        },
        {
          id: "olm-u2-s1-fa-q7", difficulty: "foundation", totalMarks: 2,
          stem: "If $x^2-9=(x-a)(x+a)$, find the value of $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Diff of squares", statement: "$a^2-b^2=(a+b)(a-b)$." }], steps: [
            { reasoning: "$x^2-9=(x-3)(x+3)$, so $a=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u2-s1-fa-q8", difficulty: "core", totalMarks: 1,
          stem: "Factorise $x^2+5x+6$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x+1)(x+6)$" },
            { id: "b", text: "$(x+2)(x+3)$" },
            { id: "c", text: "$(x-2)(x-3)$" },
            { id: "d", text: "$(x+5)(x+1)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic factorise", statement: "Find pair multiplying to 6, adding to 5." }], steps: [{ reasoning: "2 and 3 multiply to 6 and add to 5: $(x+2)(x+3)$.", marks: 1, markCode: "A" }], finalAnswer: "$(x+2)(x+3)$" },
        },
        {
          id: "olm-u2-s1-fa-q9", difficulty: "core", totalMarks: 3,
          stem: "Factorise $x^2-2x-15$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic factorise", statement: "Find pair multiplying to $-15$, adding to $-2$." }], steps: [
            { reasoning: "Numbers $-5$ and $3$: $-5\\times3=-15$, $-5+3=-2$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-5)(x+3)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: expands to $x^2-2x-15$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-5)(x+3)$" },
        },
        {
          id: "olm-u2-s1-fa-q10", difficulty: "core", totalMarks: 1,
          stem: "Factorise $3x^2+6x$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3x(x+2)$" },
            { id: "b", text: "$6x(x+1)$" },
            { id: "c", text: "$x(3x+6)$" },
            { id: "d", text: "$3(x^2+2x)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Common factor", statement: "Take out $3x$." }], steps: [{ reasoning: "$3x^2+6x=3x(x+2)$.", marks: 1, markCode: "A" }], finalAnswer: "$3x(x+2)$" },
        },
        {
          id: "olm-u2-s1-fa-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Factorise $x^3-4x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factor fully", statement: "Common factor then difference of squares." }], steps: [
            { reasoning: "Take out $x$: $x(x^2-4)$.", marks: 1, markCode: "M" },
            { reasoning: "$x^2-4=(x-2)(x+2)$ — difference of squares.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x(x-2)(x+2)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify expansion. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$x(x-2)(x+2)$" },
        },
        {
          id: "olm-u2-s1-fa-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Factorise $2x^2+7x+3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic factorise", statement: "For $a\\neq1$, find factor pair of $a$ and pair of $c$." }], steps: [
            { reasoning: "Split $2x^2$ as $(2x)(x)$; need numbers multiplying to $3\\times1=3$.", marks: 1, markCode: "M" },
            { reasoning: "Try $1$ and $3$: cross terms $x+6x=7x$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "$(2x+1)(x+3)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify expansion. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2x+1)(x+3)$" },
        },
        {
          id: "olm-u2-s1-fa-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is a factor of $x^2-5x-14$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x+14)$" },
            { id: "b", text: "$(x-7)$" },
            { id: "c", text: "$(x+7)$" },
            { id: "d", text: "$(x-2)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic factorise", statement: "Factor pairs of $-14$ summing to $-5$." }], steps: [{ reasoning: "$-7$ and $2$: $-7\\times2=-14$, $-7+2=-5$ → $(x-7)(x+2)$.", marks: 1, markCode: "A" }], finalAnswer: "$(x-7)$" },
        },
        {
          id: "olm-u2-s1-fa-q14", difficulty: "foundation", totalMarks: 2,
          stem: "If $(x+4)(x-4)=x^2-k$, find the value of $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: { principles: [{ kind: "formula", name: "Diff of squares", statement: "$(x+a)(x-a)=x^2-a^2$." }], steps: [
            { reasoning: "$(x+4)(x-4)=x^2-16$, so $k=16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 16.", marks: 1, markCode: "A" },
          ], finalAnswer: "16" },
        },
        {
          id: "olm-u2-s1-fa-q15", difficulty: "core", totalMarks: 3,
          stem: "Factorise $6x^2-13x+6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic factorise", statement: "Find factor pair of $36$ summing to $-13$." }], steps: [
            { reasoning: "Numbers $-9$ and $-4$: multiply to $36$, add to $-13$.", marks: 1, markCode: "M" },
            { reasoning: "Split middle term: $(2x-3)(3x-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $6x^2-4x-9x+6=6x^2-13x+6$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2x-3)(3x-2)$" },
        },
        {
          id: "olm-u2-s1-fa-q16", difficulty: "challenge", totalMarks: 4,
          stem: "The expression $x^2+bx+c$ factorises as $(x+3)(x-5)$. Find the value of $b+c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -17 }] },
          markscheme: { principles: [{ kind: "technique", name: "Expand to compare", statement: "Match coefficients." }], steps: [
            { reasoning: "Expand: $(x+3)(x-5)=x^2-2x-15$.", marks: 1, markCode: "M" },
            { reasoning: "So $b=-2$ and $c=-15$.", marks: 1, markCode: "M" },
            { reasoning: "$b+c=-2+(-15)=-17$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: -17.", marks: 1, markCode: "A" },
          ], finalAnswer: "-17" },
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
