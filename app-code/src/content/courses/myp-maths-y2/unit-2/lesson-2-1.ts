import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypm2-u2-lesson-2-1",
  code: "2-1",
  title: "Expanding and Factorising",
  goal: "I CAN expand single brackets and products of two binomials, factorise by taking out common factors, and justify algebraic identities from number patterns.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Expand", definition: "Remove brackets by multiplying every term inside by the term or terms outside." },
    { term: "Binomial", definition: "An expression with two terms, such as $x+3$ or $2y-5$." },
    { term: "Factorise", definition: "Write an expression as a product, usually by taking out a common factor. It is the reverse of expanding." },
    { term: "Common factor", definition: "A number or letter that divides exactly into every term of an expression." },
    { term: "Highest common factor", definition: "The largest common factor. Factorising fully means taking out the highest common factor." },
    { term: "Identity", definition: "An equation that is true for every value of the variable, such as $(n+1)^2-n^2=2n+1$." },
  ],
  concepts: [
    {
      id: "mypm2-u2-expand-brackets",
      title: "Expanding brackets",
      skill: "Expand and simplify single brackets and products of two binomials.",
      lesson: {
        sections: [
          {
            heading: "Single brackets",
            body: "Multiply every term inside the bracket by the term outside: $4(x-3)=4x-12$ and $x(x+5)=x^2+5x$. A negative factor changes every sign inside: $-2(x-6)=-2x+12$. After expanding, collect like terms.",
          },
          {
            heading: "Two binomials",
            body: "To expand $(x+a)(x+b)$, multiply **each** term in the first bracket by **each** term in the second. This gives four terms: $x\\times x$, $x\\times b$, $a\\times x$ and $a\\times b$. The two middle terms are like terms, so $(x+a)(x+b)=x^2+(a+b)x+ab$. Take care with signs: $(x+7)(x-4)=x^2-4x+7x-28=x^2+3x-28$.",
          },
          {
            heading: "A common mistake",
            body: "$(x+3)^2$ means $(x+3)(x+3)$, which is $x^2+6x+9$. It is **not** $x^2+9$. Test any expansion by substituting a value: if $x=2$ then $(2+3)^2=25$ and $2^2+6\\times2+9=25$, but $2^2+9=13$.",
          },
        ],
        keyFormulas: [
          { name: "Single bracket", statement: "$a(b+c)=ab+ac$" },
          { name: "Two binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$" },
        ],
        workedExample: {
          problem: "Expand and simplify $(x+5)(x-2)$.",
          solution: "Multiply each term in the first bracket by each term in the second: $x^2-2x+5x-10$. Collect the like terms $-2x+5x=3x$. The answer is $x^2+3x-10$. Check with $x=1$: $(6)(-1)=-6$ and $1+3-10=-6$.",
        },
      },
      questions: [
        {
          id: "mypm2-u2-expand-brackets-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $4(x-3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x+12$" },
              { id: "b", text: "$4x-12$" },
              { id: "c", text: "$4x-3$" },
              { id: "d", text: "$x-12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$: multiply every term inside the bracket." },
            ],
            steps: [
              { reasoning: "Multiply both terms by 4: $4\\times x=4x$ and $4\\times(-3)=-12$.", working: "4(x-3)=4x-12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4x-12$",
            commonErrors: ["Multiplying only the first term, giving $4x-3$.", "Getting the sign wrong, giving $4x+12$.", "Multiplying only the number, giving $x-12$."],
            examinerNote: "B1 for 4x - 12.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $(x+3)(x+5)$. Give your answer in the form $x^2+bx+c$. Find the values of $b$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$b$", answer: 8 },
              { label: "$c$", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$" },
            ],
            steps: [
              { reasoning: "Multiply each term in the first bracket by each term in the second to get four terms.", working: "(x+3)(x+5)=x^2+5x+3x+15", marks: 1, markCode: "M" },
              { reasoning: "Collect the like terms $5x+3x=8x$.", working: "x^2+8x+15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+8x+15$, so $b=8$ and $c=15$",
            commonErrors: ["Writing $x^2+15$ by multiplying only the first and last terms.", "Writing $x^2+8x+8$ by adding the numbers for the constant instead of multiplying."],
            examinerNote: "M1 for four correct terms seen. A1 for x^2 + 8x + 15.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand and simplify $(x+7)(x-4)$. Give your answer in the form $x^2+bx+c$. Find the values of $b$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$b$", answer: 3 },
              { label: "$c$", answer: -28 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
              { kind: "law", name: "Signs", statement: "A positive number times a negative number is negative: $7\\times(-4)=-28$." },
            ],
            steps: [
              { reasoning: "Write all four products.", working: "x^2-4x+7x-28", marks: 1, markCode: "M" },
              { reasoning: "Collect the like terms: $-4x+7x=3x$.", working: "x^2+3x-28", marks: 1, markCode: "M" },
              { reasoning: "State the values of the coefficients.", working: "b=3,\\quad c=-28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+3x-28$, so $b=3$ and $c=-28$",
            commonErrors: ["Writing $-4\\times7=+28$ or getting the sign of the constant wrong.", "Writing $b=11$ by ignoring the minus sign in $(x-4)$."],
            examinerNote: "M1 for four terms with at least three correct. M1 for collecting like terms. A1 for both b and c.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A square garden has side length $(x+3)$ metres. A rectangular patio has length $(x+6)$ metres and width $(x-2)$ metres. Here $x$ is a whole number greater than 2.",
          parts: [
            { label: "a", prompt: "Show that the area of the garden is $x^2+6x+9$ square metres. Give the coefficient of $x$ and the constant term.", marks: 2 },
            { label: "b", prompt: "Sam says the area of the garden is $x^2+9$. Use $x=2$ to show that Sam is wrong, and state which term he left out.", marks: 2 },
            { label: "c", prompt: "Expand and simplify the area of the patio, $(x+6)(x-2)$. Give the coefficient of $x$ in your answer.", marks: 2 },
            { label: "d", prompt: "When $x=5$, use your expansion in part (c) to find the area of the patio in square metres. Check your answer by multiplying the length by the width.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) coefficient of $x$", answer: 6 },
              { label: "(a) constant term", answer: 9 },
              { label: "(c) coefficient of $x$", answer: 4 },
              { label: "(d) area of patio (square metres)", answer: 33 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a square", statement: "$A=s^2$, so the area is $(x+3)(x+3)$." },
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
              { kind: "principle", name: "Checking by substitution", statement: "An expansion must give the same value as the original expression for any value of $x$." },
            ],
            steps: [
              { part: "a", reasoning: "The area of a square is side times side, so expand the product of two identical brackets.", working: "(x+3)(x+3)=x^2+3x+3x+9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collect like terms. The coefficient of $x$ is 6 and the constant is 9.", working: "x^2+6x+9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "When $x=2$ the side is 5 m, so the area is 25 square metres. Sam's expression gives a different value.", working: "(2+3)^2=25,\\quad 2^2+9=13", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The values differ, so Sam is wrong. He left out the middle term $6x$ (here $6\\times2=12$, and $13+12=25$).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Multiply each term in the first bracket by each term in the second.", working: "(x+6)(x-2)=x^2-2x+6x-12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collect like terms: $-2x+6x=4x$.", working: "x^2+4x-12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=5$ into the expansion.", working: "5^2+4\\times5-12=25+20-12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The area is 33 square metres. Check: the length is 11 m and the width is 3 m, and $11\\times3=33$.", working: "33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x^2+6x+9$; coefficient 6, constant 9 (b) At $x=2$ the area is 25 but $x^2+9=13$; Sam left out $6x$ (c) $x^2+4x-12$; coefficient 4 (d) 33 square metres",
            commonErrors: ["Squaring each term, so $(x+3)^2=x^2+9$.", "Writing $(x+6)(x-2)=x^2-12$, ignoring the middle terms.", "Getting $x^2+8x-12$ by ignoring the minus sign on the 2."],
            examinerNote: "In (b) accept any valid substitution that shows the two expressions differ. In (d) the check by multiplying 11 by 3 is needed for A1.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $3(x+4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x+7$" },
              { id: "b", text: "$3x+4$" },
              { id: "c", text: "$3x+12$" },
              { id: "d", text: "$x+12$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$: multiply every term inside by the term outside." },
            ],
            steps: [
              { reasoning: "Multiply both terms inside by 3.", working: "3x+12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3x+12$",
            commonErrors: ["Multiplying only the first term, giving $3x+4$.", "Adding 3 and 4 instead of multiplying."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $-2(x-5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2x+10$" },
              { id: "b", text: "$2x-10$" },
              { id: "c", text: "$-2x-10$" },
              { id: "d", text: "$-2x+7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$; a negative factor changes every sign inside." },
            ],
            steps: [
              { reasoning: "Multiply both terms by $-2$: $-2\\times x=-2x$ and $-2\\times(-5)=+10$.", working: "-2x+10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $-2x+10$",
            commonErrors: ["Keeping the sign of $-5$ unchanged, giving $-2x-10$.", "Dropping the minus on $x$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $(x+2)(x+6)$. Give your answer in the form $x^2+bx+c$. Find the values of $b$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$b$", answer: 8 },
              { label: "$c$", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
            ],
            steps: [
              { reasoning: "Multiply each term in the first bracket by each term in the second.", working: "x^2+6x+2x+12", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms: $6x+2x=8x$.", working: "x^2+8x+12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+8x+12$, so $b=8$ and $c=12$",
            commonErrors: ["Writing $x^2+12$ by multiplying only the outer terms.", "Writing $b=14$ by adding all numbers."],
            examinerNote: "M1 for four correct terms seen. A1 for both values.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $(x-3)(x+4)$. Give your answer in the form $x^2+bx+c$. Find the values of $b$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$b$", answer: 1 },
              { label: "$c$", answer: -12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
            ],
            steps: [
              { reasoning: "Multiply each term in the first bracket by each term in the second, taking care with signs.", working: "x^2+4x-3x-12", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms: $4x-3x=x$.", working: "x^2+x-12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+x-12$, so $b=1$ and $c=-12$",
            commonErrors: ["Writing $c=12$ by losing the negative sign.", "Writing $b=-7$ by subtracting instead of collecting."],
            examinerNote: "M1 for four terms with at least three correct. A1 for both values.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which expression is equal to $(x+1)(x+1)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2+1$" },
              { id: "b", text: "$2x+2$" },
              { id: "c", text: "$x^2+2x+1$" },
              { id: "d", text: "$x^2+x+1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
            ],
            steps: [
              { reasoning: "$(x+1)(x+1)=x^2+x+x+1=x^2+2x+1$.", working: "x^2+2x+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x^2+2x+1$",
            commonErrors: ["Choosing (a), the classic error of squaring only the terms."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $2(x+3)+3(x-1)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of $x$", answer: 5 },
              { label: "Constant term", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$; expand each bracket then collect like terms." },
            ],
            steps: [
              { reasoning: "Expand both brackets.", working: "2x+6+3x-3", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms: $2x+3x=5x$ and $6-3=3$.", working: "5x+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5x+3$, so coefficient 5 and constant 3",
            commonErrors: ["Writing $5x+9$ by adding the constants instead of subtracting.", "Writing $6x+3$ by adding the coefficients twice."],
            examinerNote: "M1 for correct expansion of both brackets. A1 for both values.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle has length $(x+5)$ cm and width $(x+1)$ cm. Its area is $(x+5)(x+1)$ cm$^2$. Work out the area when $x=4$, in cm$^2$, by first expanding and then substituting.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 45, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "$A=\\text{length}\\times\\text{width}$" },
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
            ],
            steps: [
              { reasoning: "Expand the product.", working: "(x+5)(x+1)=x^2+6x+5", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=4$.", working: "16+24+5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, or check by multiplying $9\\times5=45$.", working: "45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$ cm$^2$",
            commonErrors: ["Substituting before expanding and getting the same answer but no evidence of expansion — still award marks if the expansion is seen."],
            examinerNote: "M1 for the expansion. M1 for substitution. A1 for 45.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pair of brackets expands to give $x^2-5x+6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-2)(x-3)$" },
              { id: "b", text: "$(x+1)(x-6)$" },
              { id: "c", text: "$(x-1)(x-6)$" },
              { id: "d", text: "$(x+2)(x+3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$" },
            ],
            steps: [
              { reasoning: "Need $a+b=-5$ and $ab=6$; $-2$ and $-3$ work.", working: "(x-2)(x-3)=x^2-5x+6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(x-2)(x-3)$",
            commonErrors: ["Choosing (a), which gives $x^2+5x+6$."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Show that $(x+2)(x+3)-(x+1)(x+4)=2$ for every value of $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
            ],
            steps: [
              { reasoning: "Expand the first product.", working: "(x+2)(x+3)=x^2+5x+6", marks: 1, markCode: "M" },
              { reasoning: "Expand the second product.", working: "(x+1)(x+4)=x^2+5x+4", marks: 1, markCode: "M" },
              { reasoning: "Subtract: all $x$ terms cancel, leaving 2 for every $x$.", working: "(x^2+5x+6)-(x^2+5x+4)=2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$2$ for every value of $x$",
            commonErrors: ["Expanding only one of the products."],
            examinerNote: "The R mark is for noting the $x$ terms cancel for all $x$.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims that $(x+4)^2=x^2+16$. Test the claim with $x=3$ and explain what is wrong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Checking by substitution", statement: "An expansion must give the same value as the original expression for any value of $x$." },
              { kind: "law", name: "Expanding two binomials", statement: "$(x+a)^2=(x+a)(x+a)=x^2+2ax+a^2$." },
            ],
            steps: [
              { reasoning: "When $x=3$, $(3+4)^2=7^2=49$.", working: "49", marks: 1, markCode: "M" },
              { reasoning: "The student's expression gives $3^2+16=25$, which is not 49.", working: "9+16=25", marks: 1, markCode: "M" },
              { reasoning: "The claim is wrong. Expanding correctly: $(x+4)^2=x^2+8x+16$; the student left out the middle term $8x$.", working: "x^2+8x+16", marks: 1, markCode: "R" },
              { reasoning: "Check with $x=3$: $9+24+16=49$, which matches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At $x=3$ the true value is 49 but $x^2+16$ gives 25; the correct expansion is $x^2+8x+16$.",
            commonErrors: ["Only stating the claim is wrong without a numerical test."],
            examinerNote: "Accept any valid substitution, not just $x=3$.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The perimeter of a rectangle is made from two lengths of $(2x+1)$ cm and two widths of $(x+4)$ cm.",
          parts: [
            { label: "a", prompt: "Write an expression for the perimeter and expand it fully.", marks: 2 },
            { label: "b", prompt: "Find the perimeter, in cm, when $x=3$.", marks: 2 },
            { label: "c", prompt: "A classmate says the perimeter is $6x+10$. Use $x=1$ to check whether this is correct.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Perimeter", answer: 28, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of a rectangle", statement: "$P=2l+2w$" },
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
            ],
            steps: [
              { part: "a", reasoning: "Perimeter $=2(2x+1)+2(x+4)$.", working: "4x+2+2x+8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collect like terms.", working: "6x+10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=3$.", working: "6\\times3+10=28", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. Check by adding sides: $2(7)+2(7)=28$.", working: "28", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The classmate's expression $6x+10$ matches the correct expansion, so it is correct.", working: "6x+10=6x+10", marks: 1, markCode: "R" },
              { part: "c", reasoning: "At $x=1$: perimeter $=2(3)+2(5)=16$ and $6(1)+10=16$, so they agree.", working: "16=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6x+10$ cm (b) $28$ cm (c) correct — both give 16 at $x=1$",
            commonErrors: ["Using $2x+1$ as both length and width.", "Forgetting to double the width."],
            examinerNote: "In (c) the check must show both expressions give the same value.",
          },
        },
        {
          id: "mypm2-u2-expand-brackets-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three expressions are used in a puzzle: $A=(x+3)(x+2)$, $B=(x+1)(x+4)$ and $C=2x(x-1)$.",
          parts: [
            { label: "a", prompt: "Expand and simplify $A$ and $B$.", marks: 3 },
            { label: "b", prompt: "Expand and simplify $C$.", marks: 1 },
            { label: "c", prompt: "Work out $A-B$ and show that it does not depend on $x$.", marks: 2 },
            { label: "d", prompt: "Work out the value of $C$ when $x=5$, and check it by substituting into the unexpanded form.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(d) Value of C", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding two binomials", statement: "Multiply each term in the first bracket by each term in the second." },
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
            ],
            steps: [
              { part: "a", reasoning: "Expand $A$.", working: "A=x^2+5x+6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand $B$.", working: "B=x^2+5x+4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both are already simplified.", working: "x^2+5x+6,\\ x^2+5x+4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply each term inside by $2x$.", working: "C=2x^2-2x", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract $B$ from $A$.", working: "(x^2+5x+6)-(x^2+5x+4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The $x^2$ and $x$ terms cancel, leaving 2 for every $x$.", working: "=2", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Substitute $x=5$ into the expansion.", working: "2(25)-2(5)=50-10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate; check: $2(5)(5-1)=10\\times4=40$.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A=x^2+5x+6$, $B=x^2+5x+4$ (b) $C=2x^2-2x$ (c) $A-B=2$, independent of $x$ (d) $40$",
            commonErrors: ["In (c) getting $A-B=2x$ by mishandling the subtraction.", "In (d) substituting into $2x(x-1)$ incorrectly as $10(5-1)$ only after computing $2x=10$ — that is actually correct; the error is forgetting the factor of 2."],
            examinerNote: "In (d) the check by substitution into the unexpanded form is required for A1.",
          },
        },
      ],
    },
    {
      id: "mypm2-u2-factorise-identities",
      title: "Factorising and algebraic identities",
      skill: "Factorise by taking out common factors and justify identities from number patterns.",
      lesson: {
        sections: [
          {
            heading: "Taking out a common factor",
            body: "Factorising is the reverse of expanding. Find the highest common factor (HCF) of all the terms, including letters, write it outside a bracket, and divide each term by it. For $12x^2-8x$, the HCF of 12 and 8 is 4 and both terms contain $x$, so the HCF is $4x$ and $12x^2-8x=4x(3x-2)$. If you only take out part of the HCF, the expression is not fully factorised: $12x^2-8x=2(6x^2-4x)$ is incomplete.",
          },
          {
            heading: "Checking your answer",
            body: "Expand your answer. If you get the original expression back, the factorising is correct. For example $3(2x+5)=6x+15$.",
          },
          {
            heading: "Investigating patterns and identities",
            body: "Look at $2^2-1^2=3$, $3^2-2^2=5$, $4^2-3^2=7$. The differences are odd numbers that equal the sum of the two numbers. To justify this for **all** numbers, use algebra: $(n+1)^2-n^2=n^2+2n+1-n^2=2n+1$. An algebraic argument works for every value, while examples only show it works for the numbers tried.",
          },
        ],
        keyFormulas: [
          { name: "Factorising", statement: "$ab+ac=a(b+c)$" },
          { name: "Difference of consecutive squares", statement: "$(n+1)^2-n^2=2n+1$" },
        ],
        workedExample: {
          problem: "Factorise fully $15a^2+10ab$.",
          solution: "The HCF of 15 and 10 is 5, and both terms contain $a$. So the HCF is $5a$. Divide each term: $15a^2\\div5a=3a$ and $10ab\\div5a=2b$. The answer is $5a(3a+2b)$. Check: $5a\\times3a=15a^2$ and $5a\\times2b=10ab$.",
        },
      },
      questions: [
        {
          id: "mypm2-u2-factorise-identities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Factorise fully $6x+15$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3(2x+15)$" },
              { id: "b", text: "$3(2x+5)$" },
              { id: "c", text: "$21x$" },
              { id: "d", text: "$6(x+9)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "$ab+ac=a(b+c)$, taking out the highest common factor." },
            ],
            steps: [
              { reasoning: "The HCF of 6 and 15 is 3. Divide each term by 3.", working: "6x+15=3(2x+5)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3(2x+5)$",
            commonErrors: ["Dividing only the first term by 3, giving $3(2x+15)$.", "Taking out 6 from both terms without dividing 15 correctly.", "Adding the terms together, giving $21x$."],
            examinerNote: "B1 for 3(2x + 5). Check by expanding.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factorise fully $12x^2-8x$. Write your answer in the form $px(qx-r)$. Find the values of $p$, $q$ and $r$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$p$", answer: 4 },
              { label: "$q$", answer: 3 },
              { label: "$r$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "$ab+ac=a(b+c)$. Take out the highest common factor of the numbers and of the letters." },
            ],
            steps: [
              { reasoning: "The HCF of 12 and 8 is 4, and both terms contain $x$, so the HCF is $4x$. Taking out at least a correct partial factor earns the method mark.", working: "12x^2-8x=4x(\\ldots)", marks: 1, markCode: "M" },
              { reasoning: "Divide each term by $4x$: $12x^2\\div4x=3x$ and $8x\\div4x=2$.", working: "4x(3x-2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4x(3x-2)$, so $p=4$, $q=3$ and $r=2$",
            commonErrors: ["Taking out only 4, giving $4(3x^2-2x)$, which is not fully factorised.", "Taking out only $x$, giving $x(12x-8)$."],
            examinerNote: "M1 for a correct partial factorisation. A1 for fully factorised form.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Factorise fully $18xy+24y^2$. Write your answer in the form $ky(px+qy)$. Find the values of $k$, $p$ and $q$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 6 },
              { label: "$p$", answer: 3 },
              { label: "$q$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "$ab+ac=a(b+c)$." },
              { kind: "definition", name: "Highest common factor", statement: "The HCF includes the largest number and every letter that divides all terms." },
            ],
            steps: [
              { reasoning: "The HCF of 18 and 24 is 6, so the number part of the common factor is 6.", working: "\\text{HCF}(18,24)=6", marks: 1, markCode: "M" },
              { reasoning: "Both terms contain $y$, so the common factor is $6y$.", working: "18xy+24y^2=6y(\\ldots)", marks: 1, markCode: "M" },
              { reasoning: "Divide each term by $6y$: $18xy\\div6y=3x$ and $24y^2\\div6y=4y$.", working: "6y(3x+4y)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6y(3x+4y)$, so $k=6$, $p=3$ and $q=4$",
            commonErrors: ["Using 2 or 3 as the number factor, which does not factorise fully.", "Forgetting the letter $y$ and writing $6(3xy+4y^2)$."],
            examinerNote: "M1 for 6 or y as a factor. M1 for 6y. A1 for the fully factorised form. Check by expanding.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mia investigates the differences between the squares of whole numbers. She notices that $2^2-1^2=3$, $3^2-2^2=5$, $4^2-3^2=7$ and $5^2-4^2=9$.",
          parts: [
            { label: "a", prompt: "Work out $6^2-5^2$ and $10^2-9^2$. Describe the pattern in the results.", marks: 2 },
            { label: "b", prompt: "Mia suggests that for any whole number $n$, $(n+1)^2-n^2=2n+1$. Prove that she is correct by expanding.", marks: 2 },
            { label: "c", prompt: "Use the identity to find $51^2-50^2$ without a calculator. Explain which value of $n$ you used.", marks: 2 },
            { label: "d", prompt: "Show that $(n+2)^2-n^2=4(n+1)$. Use this to work out $12^2-10^2$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $6^2-5^2$", answer: 11 },
              { label: "(a) $10^2-9^2$", answer: 19 },
              { label: "(c) $51^2-50^2$", answer: 101 },
              { label: "(d) $12^2-10^2$", answer: 44 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a binomial squared", statement: "$(n+1)^2=(n+1)(n+1)=n^2+2n+1$." },
              { kind: "principle", name: "Proof by algebra", statement: "An algebraic argument holds for every value of $n$. Checking examples does not prove a rule." },
              { kind: "law", name: "Factorising", statement: "$4n+4=4(n+1)$, taking out the common factor 4." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate each difference of squares.", working: "6^2-5^2=36-25=11,\\quad 10^2-9^2=100-81=19", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Each result is odd and equals the sum of the two numbers: $6+5=11$ and $10+9=19$.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Expand the squared bracket.", working: "(n+1)^2=n^2+2n+1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract $n^2$. The result $2n+1$ is true for every whole number $n$, so Mia is correct.", working: "n^2+2n+1-n^2=2n+1", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Write $51^2-50^2$ as $(n+1)^2-n^2$ with $n=50$.", working: "2\\times50+1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate. Check: $2601-2500=101$.", working: "101", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Expand $(n+2)^2$, subtract $n^2$, then factorise the result.", working: "n^2+4n+4-n^2=4n+4=4(n+1)", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Use $n=10$ so that $n+2=12$.", working: "4\\times11=44", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 11 and 19; each difference is the sum of the two numbers, so odd (b) $(n+1)^2-n^2=n^2+2n+1-n^2=2n+1$ (c) $2\\times50+1=101$ with $n=50$ (d) $(n+2)^2-n^2=4n+4=4(n+1)$; $12^2-10^2=44$",
            commonErrors: ["Writing $(n+1)^2=n^2+1$, so the difference is 1.", "Testing a few more numbers and calling this a proof.", "Using $n=51$ instead of $n=50$ in part (c), giving 103."],
            examinerNote: "In (b) the final statement that the result holds for every n is needed for R1. In (c) the value of n must be identified as 50.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Factorise fully $4x+8$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4(x+2)$" },
              { id: "b", text: "$4(x+8)$" },
              { id: "c", text: "$2(2x+4)$" },
              { id: "d", text: "$12x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "$ab+ac=a(b+c)$, taking out the highest common factor." },
            ],
            steps: [
              { reasoning: "The HCF of 4 and 8 is 4. Divide each term by 4.", working: "4x+8=4(x+2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4(x+2)$",
            commonErrors: ["Taking out only 2, which is not fully factorised (answer b).", "Dividing only the first term."],
            examinerNote: "B1 for choice (a). Check by expanding.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Factorise fully $5x-10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5(x-2)$" },
              { id: "b", text: "$5(x-10)$" },
              { id: "c", text: "$x(-5)$" },
              { id: "d", text: "$-5(x-2)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "$ab+ac=a(b+c)$, taking out the highest common factor." },
            ],
            steps: [
              { reasoning: "The HCF is 5; divide each term by 5, keeping the minus sign.", working: "5x-10=5(x-2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5(x-2)$",
            commonErrors: ["Writing $5(x-10)$ by not dividing 10 by 5.", "Getting the sign wrong inside the bracket."],
            examinerNote: "B1 for choice (b). Check: $5(x-2)=5x-10$.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factorise fully $6x^2+9x$. Write your answer in the form $px(qx+r)$. Find the values of $p$, $q$ and $r$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$p$", answer: 3 },
              { label: "$q$", answer: 2 },
              { label: "$r$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "Take out the highest common factor of the numbers and the letters." },
            ],
            steps: [
              { reasoning: "The HCF of 6 and 9 is 3, and both terms contain $x$, so the HCF is $3x$.", working: "6x^2+9x=3x(\\ldots)", marks: 1, markCode: "M" },
              { reasoning: "Divide each term by $3x$: $6x^2\\div3x=2x$ and $9x\\div3x=3$.", working: "3x(2x+3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x(2x+3)$, so $p=3$, $q=2$ and $r=3$",
            commonErrors: ["Taking out only 3, giving $3(2x^2+3x)$, which is not fully factorised."],
            examinerNote: "M1 for a correct partial factor. A1 for the fully factorised form.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factorise fully $8y-12$. Write your answer in the form $k(px-q)$. Find the values of $k$, $p$ and $q$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 4 },
              { label: "$p$", answer: 2 },
              { label: "$q$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "$ab+ac=a(b+c)$ with the highest common factor." },
            ],
            steps: [
              { reasoning: "The HCF of 8 and 12 is 4. Divide each term by 4.", working: "8y-12=4(2y-3)", marks: 1, markCode: "M" },
              { reasoning: "State the values: $k=4$, $p=2$, $q=3$.", working: "k=4,\\ p=2,\\ q=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4(2y-3)$, so $k=4$, $p=2$ and $q=3$",
            commonErrors: ["Taking out 2 instead of the HCF 4, giving $2(4y-6)$."],
            examinerNote: "M1 for any correct factor. A1 for fully factorised form.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the fully factorised form of $10x^2+15x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x(10x+15)$" },
              { id: "b", text: "$5x(2x+3)$" },
              { id: "c", text: "$25x(2x+3)$" },
              { id: "d", text: "$5(2x^2+3x)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "Take out the highest common factor of the numbers and the letters." },
            ],
            steps: [
              { reasoning: "The HCF of 10 and 15 is 5 and both terms contain $x$, so the HCF is $5x$.", working: "10x^2+15x=5x(2x+3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5x(2x+3)$",
            commonErrors: ["Choosing (a), which is only partially factorised because $x$ is still common inside."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how you can check that $7x(3x-4)=21x^2-28x$ is a correct factorisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Checking factorising", statement: "Expand the answer; if you get the original expression back, the factorising is correct." },
            ],
            steps: [
              { reasoning: "Multiply each term inside the bracket by $7x$.", working: "7x\\times3x=21x^2,\\quad7x\\times(-4)=-28x", marks: 1, markCode: "M" },
              { reasoning: "The expansion gives $21x^2-28x$, which is the original expression, so the factorisation is correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Expanding gives back $21x^2-28x$, so it is correct.",
            commonErrors: ["Checking by substituting only one value and calling it proof for all values."],
            examinerNote: "Accept a substitution check as partial evidence, but expanding is the full method.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Factorise fully $12a^2b+18ab^2$. Write your answer in the form $kxy(px+qy)$. Find the values of $k$, $p$ and $q$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 6 },
              { label: "$p$", answer: 2 },
              { label: "$q$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "Take out the highest common factor of the numbers and of every letter." },
            ],
            steps: [
              { reasoning: "The HCF of 12 and 18 is 6, and both terms contain $a$ and $b$, so the HCF is $6ab$.", working: "6ab(\\ldots)", marks: 1, markCode: "M" },
              { reasoning: "Divide each term by $6ab$: $12a^2b\\div6ab=2a$ and $18ab^2\\div6ab=3b$.", working: "6ab(2a+3b)", marks: 1, markCode: "M" },
              { reasoning: "State the values: $k=6$, $p=2$, $q=3$.", working: "k=6,\\ p=2,\\ q=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6ab(2a+3b)$, so $k=6$, $p=2$ and $q=3$",
            commonErrors: ["Taking out only 6, giving $6(2a^2b+3ab^2)$, which is not fully factorised."],
            examinerNote: "M1 for 6 or a letter factor. M1 for $6ab$. A1 for the fully factorised form.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the fully factorised form of $14x^2-21x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14x(x-7)$" },
              { id: "b", text: "$7x(2x-3)$" },
              { id: "c", text: "$7(2x^2-3x)$" },
              { id: "d", text: "$x(14x-21)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "Take out the highest common factor of the numbers and the letters." },
            ],
            steps: [
              { reasoning: "The HCF of 14 and 21 is 7 and both terms contain $x$, so the HCF is $7x$.", working: "14x^2-21x=7x(2x-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $7x(2x-3)$",
            commonErrors: ["Choosing (a), which leaves a common factor of $x$ inside."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use the identity $(n+1)^2-n^2=2n+1$ to find $41^2-40^2$ without a calculator. Explain which value of $n$ you used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Difference of consecutive squares", statement: "$(n+1)^2-n^2=2n+1$" },
            ],
            steps: [
              { reasoning: "Write $41^2-40^2$ as $(n+1)^2-n^2$ with $n=40$.", working: "n=40", marks: 1, markCode: "M" },
              { reasoning: "Apply the identity.", working: "2\\times40+1=81", marks: 1, markCode: "M" },
              { reasoning: "Check by direct calculation if desired: $1681-1600=81$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$81$, using $n=40$",
            commonErrors: ["Using $n=41$, giving 83."],
            examinerNote: "M1 for identifying $n=40$. M1 for applying the identity. A1 for 81.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that $(n+2)^2-(n-2)^2=8n$ for every value of $n$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a binomial squared", statement: "$(n+a)^2=n^2+2an+a^2$ and $(n-a)^2=n^2-2an+a^2$." },
            ],
            steps: [
              { reasoning: "Expand $(n+2)^2$.", working: "n^2+4n+4", marks: 1, markCode: "M" },
              { reasoning: "Expand $(n-2)^2$.", working: "n^2-4n+4", marks: 1, markCode: "M" },
              { reasoning: "Subtract; the $n^2$ and 4 terms cancel.", working: "(n^2+4n+4)-(n^2-4n+4)", marks: 1, markCode: "M" },
              { reasoning: "The result $8n$ holds for every $n$, so the identity is proved.", working: "8n", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$(n+2)^2-(n-2)^2=8n$ for every $n$",
            commonErrors: ["Writing $(n-2)^2=n^2-4$ instead of $n^2-4n+4$."],
            examinerNote: "The R mark is for the conclusion that it holds for every $n$.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Factorise these expressions fully.",
          parts: [
            { label: "a", prompt: "Factorise $9x+21$.", marks: 2 },
            { label: "b", prompt: "Factorise $14y^2-35y$.", marks: 2 },
            { label: "c", prompt: "Factorise $8pq+12p^2$. Write your answer in the form $kp(ax+by)$. Find $k$, $a$ and $b$.", marks: 2 },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Factorising", statement: "$ab+ac=a(b+c)$ with the highest common factor of numbers and letters." },
            ],
            steps: [
              { part: "a", reasoning: "The HCF of 9 and 21 is 3.", working: "9x+21=3(3x+7)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check by expanding: $3\\times3x=9x$ and $3\\times7=21$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The HCF of 14 and 35 is 7 and both terms contain $y$, so the HCF is $7y$.", working: "14y^2-35y=7y(2y-5)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide each term by $7y$: $14y^2\\div7y=2y$ and $35y\\div7y=5$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The HCF of 8 and 12 is 4 and both terms contain $p$, so the HCF is $4p$.", working: "8pq+12p^2=4p(2q+3p)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide each term by $4p$: $8pq\\div4p=2q$ and $12p^2\\div4p=3p$, so $k=4$, $a=2$, $b=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3(3x+7)$ (b) $7y(2y-5)$ (c) $4p(2q+3p)$; $k=4$, $a=2$, $b=3$",
            commonErrors: ["In (b) taking out 7 but not $y$.", "In (c) missing the $p$ in the common factor."],
            examinerNote: "Check each answer by expanding.",
          },
        },
        {
          id: "mypm2-u2-factorise-identities-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Jae is investigating number patterns. He notices $3^2-2^2=5$, $4^2-3^2=7$ and $5^2-4^2=9$.",
          parts: [
            { label: "a", prompt: "Work out $6^2-5^2$ and $12^2-11^2$. Describe the pattern.", marks: 2 },
            { label: "b", prompt: "Show that $(n+1)^2-n^2=2n+1$ for every whole number $n$.", marks: 2 },
            { label: "c", prompt: "Use the identity to find $31^2-30^2$ without a calculator.", marks: 2 },
            { label: "d", prompt: "Jae claims that checking the identity for $n=1,2,3,4,5$ proves it for all $n$. Explain what is wrong with this claim and what would prove it.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $6^2-5^2$", answer: 11 },
              { label: "(a) $12^2-11^2$", answer: 23 },
              { label: "(c) $31^2-30^2$", answer: 61 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a binomial squared", statement: "$(n+1)^2=n^2+2n+1$" },
              { kind: "principle", name: "Proof by algebra", statement: "An algebraic argument holds for every value; checking examples does not prove a rule." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate each difference of squares.", working: "6^2-5^2=36-25=11,\\ 12^2-11^2=144-121=23", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Each result is odd and equals the sum of the two numbers: $6+5=11$ and $12+11=23$.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Expand and subtract.", working: "(n+1)^2-n^2=n^2+2n+1-n^2=2n+1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The result holds for every whole number $n$ because the algebra does not depend on a particular value.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Use $n=30$ in the identity.", working: "2\\times30+1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate; check: $961-900=61$.", working: "61", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Checking a few values only shows the rule works for those values; it cannot cover infinitely many others.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The algebraic proof in part (b) works for every $n$, so it is a valid proof.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 11 and 23, each the sum of the two numbers (b) $(n+1)^2-n^2=2n+1$ for all $n$ (c) $61$ (d) examples are not a proof; the algebraic argument proves it",
            commonErrors: ["Using $n=31$ in part (c), giving 63.", "Accepting numerical checks as a proof."],
            examinerNote: "In (d) the explanation must contrast examples with a general argument.",
          },
        },
      ],
    },
  ],
};
