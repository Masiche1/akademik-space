import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edm8-u2-lesson-2-1",
  code: "2-1",
  title: "Expressions and Formulae",
  goal: "I CAN simplify, expand and factorise expressions, substitute into formulae and write my own formulae.",
  standards: ["Y8 Algebra"],
  vocabulary: [
    { term: "Term", definition: "A single part of an expression, such as $3x$ or $-5$, separated from other parts by $+$ or $-$ signs." },
    { term: "Like terms", definition: "Terms with exactly the same letters raised to the same powers, such as $4x$ and $-x$." },
    { term: "Expand", definition: "Multiply out brackets, for example $3(x+2)=3x+6$." },
    { term: "Factorise", definition: "Write an expression as a product by taking out a common factor, for example $6x+9=3(2x+3)$." },
    { term: "Formula", definition: "A rule that links quantities using letters, such as $A=lw$." },
    { term: "Substitute", definition: "Replace a letter with a given number." },
  ],
  concepts: [
    {
      id: "edm8-u2-simplify-expand-factorise",
      title: "Simplifying, expanding and factorising",
      skill: "Collect like terms, expand single brackets and factorise by taking out the highest common factor.",
      lesson: {
        sections: [
          {
            heading: "Collecting like terms",
            body: "Only like terms can be combined. Keep the sign in front of each term: $3x+2y+4x-y=7x+y$. Terms such as $x$ and $x^2$ are not like terms.",
          },
          {
            heading: "Expanding brackets",
            body: "Multiply every term inside the bracket by the term outside: $3(2x+5)=6x+15$. A negative outside the bracket changes both signs: $-2(x-4)=-2x+8$.",
          },
          {
            heading: "Factorising",
            body: "Factorising is the reverse of expanding. Find the highest common factor of all terms, write it outside a bracket and divide each term by it. For $12x^2y+18xy^2$ the HCF is $6xy$, giving $6xy(2x+3y)$. Check by expanding.",
          },
        ],
        keyFormulas: [
          { name: "Distributive law", statement: "$a(b+c)=ab+ac$" },
        ],
        workedExample: {
          problem: "Expand and simplify $4(x+3)-2(x-1)$.",
          solution: "$4x+12-2x+2=2x+14$.",
        },
      },
      questions: [
        {
          id: "edm8-u2-simplify-expand-factorise-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $3x+2y+4x-y$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+y$" },
              { id: "b", text: "$7x+y$" },
              { id: "c", text: "$7x+3y$" },
              { id: "d", text: "$8xy$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like terms", statement: "Only terms with the same letters can be added or subtracted." },
            ],
            steps: [
              { reasoning: "Collect the $x$ terms and the $y$ terms separately.", working: "3x+4x=7x,\\quad 2y-y=y", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $7x+y$",
            commonErrors: ["Treating $-y$ as $+y$, giving $7x+3y$.", "Combining unlike terms to get $8xy$."],
          },
        },
        {
          id: "edm8-u2-simplify-expand-factorise-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand and simplify $3(2x+5)-2(x-4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive law", statement: "$a(b+c)=ab+ac$" },
            ],
            steps: [
              { reasoning: "Expand the first bracket.", working: "3(2x+5)=6x+15", marks: 1, markCode: "M" },
              { reasoning: "Expand the second bracket; the negative sign changes both signs.", working: "-2(x-4)=-2x+8", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms.", working: "6x-2x+15+8=4x+23", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4x+23$",
            commonErrors: ["Writing $-2(x-4)=-2x-8$.", "Forgetting to multiply the 5 by 3."],
            examinerNote: "M1 for either bracket expanded correctly. M1 for both. A1 cao.",
          },
        },
        {
          id: "edm8-u2-simplify-expand-factorise-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Factorise fully $12x^2y+18xy^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising", statement: "Take out the highest common factor of every term; check by expanding." },
            ],
            steps: [
              { reasoning: "The HCF of 12 and 18 is 6, and both terms contain $x$ and $y$.", working: "\\text{HCF}=6xy", marks: 1, markCode: "B" },
              { reasoning: "Divide each term by $6xy$.", working: "12x^2y\\div6xy=2x,\\quad 18xy^2\\div6xy=3y", marks: 1, markCode: "M" },
              { reasoning: "Write the factorised expression.", working: "6xy(2x+3y)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6xy(2x+3y)$",
            commonErrors: ["Taking out only part of the HCF, such as $6(2x^2y+3xy^2)$ or $3xy(4x+6y)$, which is not fully factorised."],
            examinerNote: "B1 for 6 or $xy$ identified as part of the HCF. M1 for dividing correctly by a common factor. A1 cao for the fully factorised form.",
          },
        },
        {
          id: "edm8-u2-simplify-expand-factorise-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangle has length $(3x+2)$ cm and width $5$ cm.",
          parts: [
            { label: "a", prompt: "Write down an expression for the perimeter of the rectangle. Give your answer in its simplest form.", marks: 2 },
            { label: "b", prompt: "Expand $5(3x+2)$ to write an expression for the area of the rectangle.", marks: 1 },
            { label: "c", prompt: "Factorise your expression for the perimeter from part (a).", marks: 2 },
            { label: "d", prompt: "Work out the perimeter (in cm) and the area (in cm$^2$) when $x=4$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(d) Perimeter (cm)", answer: 38, unit: "cm" },
              { label: "(d) Area (cm²)", answer: 70, unit: "cm²" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter and area of a rectangle", statement: "$P=2(l+w)$ and $A=lw$" },
              { kind: "law", name: "Distributive law", statement: "$a(b+c)=ab+ac$" },
            ],
            steps: [
              { part: "a", reasoning: "Perimeter is twice length plus width.", working: "2(3x+2+5)=2(3x+7)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand and simplify.", working: "6x+14", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply each term in the bracket by 5.", working: "15x+10", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The HCF of $6x$ and 14 is 2.", working: "6x+14=2(\\ldots)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide each term by 2.", working: "2(3x+7)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=4$ into the perimeter expression.", working: "6(4)+14=24+14=38", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Substitute $x=4$ into the area expression.", working: "15(4)+10=60+10=70", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both answers with units. Check: length $=14$, $2(14+5)=38$ and $14\\times5=70$.", working: "38\\text{ cm},\\quad 70\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6x+14$ (b) $15x+10$ (c) $2(3x+7)$ (d) $38$ cm and $70$ cm$^2$",
            commonErrors: ["Adding only one length and one width for the perimeter.", "Writing the area as $15x+2$, multiplying only the first term."],
            examinerNote: "(c) accept $2(3x+7)$ only. (d) ft from the expressions in (a) and (b).",
          },
        },
      ],
    },
    {
      id: "edm8-u2-substitution-formulae",
      title: "Substitution and writing formulae",
      skill: "Substitute values into expressions and formulae, including negative numbers, and write a formula from a context.",
      lesson: {
        sections: [
          {
            heading: "Substitution",
            body: "Replace each letter with its value, using brackets round negative numbers, then follow BIDMAS. For $3a-2b$ with $a=-4$ and $b=5$: $3(-4)-2(5)=-12-10=-22$. Note that $2x^2$ means $2\\times x^2$, so square first, then multiply.",
          },
          {
            heading: "Writing a formula",
            body: "Define what each letter stands for, then describe the rule. A taxi charges £3 plus £1.80 for each mile. With $C$ the cost in pounds and $n$ the number of miles: $C=3+1.8n$.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "Use brackets for negative values, then apply BIDMAS." },
        ],
        workedExample: {
          problem: "Work out the value of $2x^2$ when $x=3$.",
          solution: "Square first: $3^2=9$. Then multiply: $2\\times9=18$.",
        },
      },
      questions: [
        {
          id: "edm8-u2-substitution-formulae-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out the value of $2x^2$ when $x=3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$18$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "BIDMAS", statement: "Indices are evaluated before multiplication." },
            ],
            steps: [
              { reasoning: "Square 3 first, then multiply by 2.", working: "2\\times3^2=2\\times9=18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $18$",
            commonErrors: ["Calculating $(2\\times3)^2=36$.", "Calculating $2\\times3\\times2=12$."],
          },
        },
        {
          id: "edm8-u2-substitution-formulae-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the value of $3a-2b$ when $a=-4$ and $b=5$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: -22 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace letters with their values, using brackets for negatives." },
            ],
            steps: [
              { reasoning: "Substitute with brackets.", working: "3(-4)-2(5)=-12-10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-22", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-22$",
            commonErrors: ["Writing $3(-4)=12$.", "Computing $-12+10=-2$."],
          },
        },
        {
          id: "edm8-u2-substitution-formulae-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The formula $s=ut+\\frac{1}{2}at^2$ gives the distance $s$ travelled. Work out $s$ when $u=6$, $a=4$ and $t=3$.",
          response: { type: "numeric", parts: [{ label: "s", answer: 36 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "BIDMAS", statement: "Evaluate the power before multiplying." },
            ],
            steps: [
              { reasoning: "Substitute the values.", working: "s=6\\times3+\\frac{1}{2}\\times4\\times3^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each term: $t^2=9$ first.", working: "18+\\frac{1}{2}\\times4\\times9=18+18", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36$",
            commonErrors: ["Evaluating $(\\frac{1}{2}\\times4\\times3)^2$.", "Using $t^2=6$."],
          },
        },
        {
          id: "edm8-u2-substitution-formulae-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Taxi firm A charges a fixed fee of £3 plus £1.80 for each mile. The cost of a journey of $n$ miles is $\\text{£}C$.",
          parts: [
            { label: "a", prompt: "Write a formula for $C$ in terms of $n$.", marks: 2 },
            { label: "b", prompt: "Use your formula to work out the cost, in pounds, of a journey of 7 miles.", marks: 2 },
            { label: "c", prompt: "A journey costs £21. Work out the number of miles.", marks: 2 },
            { label: "d", prompt: "Taxi firm B uses the formula $D=2n+1.5$. Work out how much cheaper firm B is than firm A, in pounds, for a journey of 5 miles.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Cost of 7 miles (£)", answer: 15.6, tolerance: 0.001 },
              { label: "(c) Miles", answer: 10 },
              { label: "(d) Saving (£)", answer: 0.5, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming a formula", statement: "Total cost $=$ fixed charge $+$ (rate per mile $\\times$ miles)." },
              { kind: "principle", name: "Substitution", statement: "Replace the letter with its value and follow BIDMAS." },
            ],
            steps: [
              { part: "a", reasoning: "Each mile costs £1.80, so $n$ miles cost $1.8n$.", working: "1.8n", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add the fixed fee.", working: "C=3+1.8n", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $n=7$.", working: "C=3+1.8\\times7=3+12.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add.", working: "15.6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract the fixed fee, then divide by the rate per mile.", working: "21-3=18,\\quad 18\\div1.8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Firm A for 5 miles is $3+9=12$ and firm B is $2\\times5+1.5=11.5$.", working: "12\\text{ and }11.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract.", working: "12-11.5=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $C=3+1.8n$ (b) £15.60 (c) 10 miles (d) £0.50 (50p)",
            commonErrors: ["Writing $C=3\\times1.8n$ or $C=4.8n$.", "Dividing 21 by 1.8 without first subtracting the fixed fee."],
            examinerNote: "(a) accept $C=1.8n+3$ (oe). Must include $C=$ for the final A1.",
          },
        },
      ],
    },
  ],
};
