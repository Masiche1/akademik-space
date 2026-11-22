import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypm3-u2-lesson-2-1",
  code: "2-1",
  title: "Expanding and Factorising",
  goal: "I CAN expand products of brackets and factorise expressions including monic quadratics.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
  ],
  vocabulary: [
    { term: "Expanding", definition: "Removing brackets by multiplying out, e.g. $(x+2)(x+3)=x^2+5x+6$." },
    { term: "Factorising", definition: "The reverse of expanding: writing an expression as a product of brackets." },
    { term: "Monic quadratic", definition: "A quadratic expression where the $x^2$ coefficient is 1, e.g. $x^2+bx+c$." },
    { term: "Like terms", definition: "Terms with exactly the same algebraic part, e.g. $3x$ and $-5x$." },
  ],
  concepts: [
    {
      id: "mypm3-u2-expanding",
      title: "Expanding brackets",
      skill: "Expand single brackets and products of two binomials, and simplify the result.",
      lesson: {
        sections: [
          {
            heading: "Single brackets",
            body: `Multiply **every** term inside the bracket by the factor outside:

$3(x+4)=3x+12$, and $-2(x-5)=-2x+10$ — the minus sign must be distributed to **both** terms.`,
          },
          {
            heading: "Two brackets",
            body: `Use the **FOIL** pattern — First, Outer, Inner, Last:

$(x+a)(x+b)=x^2+bx+ax+ab=x^2+(a+b)x+ab$.

So $(x+2)(x+3)=x^2+2x+3x+6=x^2+5x+6$.`,
          },
          {
            heading: "Squares of brackets",
            body: "$(x+a)^2=(x+a)(x+a)=x^2+2ax+a^2$. The middle term is **twice** $ax$, not zero: $(x+3)^2=x^2+6x+9$, not $x^2+9$.",
          },
        ],
        keyFormulas: [
          { name: "Product of two binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$" },
          { name: "Square of a binomial", statement: "$(x+a)^2=x^2+2ax+a^2$" },
        ],
        workedExample: {
          problem: "Expand and simplify $(x-4)(x+7)$.",
          solution: "FOIL: $x^2+7x-4x-28=x^2+3x-28$.",
        },
      },
      questions: [
        {
          id: "mypm3-u2-expanding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $5(x-3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5x+15$" },
              { id: "b", text: "$x-15$" },
              { id: "c", text: "$5x-3$" },
              { id: "d", text: "$5x-15$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expanding a bracket", statement: "Multiply every term inside by the factor outside." },
            ],
            steps: [
              { reasoning: "Distribute 5 to both terms.", working: "5x-15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5x-15$",
            commonErrors: ["Multiplying only the $x$: $5x-3$.", "Sign error giving $5x+15$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-expanding-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $(x+6)(x-2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$" },
            ],
            steps: [
              { reasoning: "Apply FOIL or the formula with $a=6$, $b=-2$.", working: "x^2+(6-2)x+(6\\times(-2))=x^2+4x-12", marks: 1, markCode: "M" },
              { reasoning: "State the simplified expression.", working: "x^2+4x-12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+4x-12$",
            commonErrors: ["Sign error on the constant term: $+12$ instead of $-12$.", "Dropping the middle term to get $x^2-12$."],
            examinerNote: "M1 for correct expansion seen, A1 for simplified answer.",
          },
        },
        {
          id: "mypm3-u2-expanding-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangle has sides of length $(x+5)$ cm and $(x-1)$ cm. Write down an expression for its area in terms of $x$, expanded and simplified. Hence find the area when $x=4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "$\\text{area}=\\text{length}\\times\\text{width}$" },
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$" },
            ],
            steps: [
              { reasoning: "Area is the product of the sides.", working: "(x+5)(x-1)", marks: 1, markCode: "M" },
              { reasoning: "Expand and simplify.", working: "x^2+5x-x-5=x^2+4x-5", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=4$.", working: "4^2+4(4)-5=16+16-5=27\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Area $=x^2+4x-5\\text{ cm}^2$; when $x=4$, area $=27\\text{ cm}^2$",
            commonErrors: ["Forgetting units.", "Substituting before expanding and making an arithmetic slip."],
            examinerNote: "M1 for product, M1 for expansion, A1 for 27.",
          },
        },
        {
          id: "mypm3-u2-expanding-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the expressions $A=(x+3)^2$ and $B=x^2+9$.",
          parts: [
            { label: "a", prompt: "Expand $A$ fully.", marks: 2 },
            { label: "b", prompt: "Expand $(x-3)(x+3)$ fully.", marks: 2 },
            { label: "c", prompt: "A student claims $A=B$ for all $x$. Show that this is false by substituting $x=1$ into both expressions.", marks: 2 },
            { label: "d", prompt: "Find the value of $x$ for which $A=B$, showing your working.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(x+a)^2=x^2+2ax+a^2$" },
              { kind: "formula", name: "Difference of two squares", statement: "$(x+a)(x-a)=x^2-a^2$" },
            ],
            steps: [
              { part: "a", reasoning: "Expand $(x+3)^2=(x+3)(x+3)$.", working: "x^2+3x+3x+9=x^2+6x+9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State simplified.", working: "x^2+6x+9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply FOIL with $a=3$, $b=-3$.", working: "x^2-3x+3x-9=x^2-9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State simplified.", working: "x^2-9", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x=1$ into $A$.", working: "A=(1+3)^2=16", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $x=1$ into $B$ and compare.", working: "B=1+9=10\\ne16", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $A=B$: $x^2+6x+9=x^2+9$.", working: "x^2+6x+9=x^2+9", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify: $6x=0$ so $x=0$.", working: "x=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x^2+6x+9$ (b) $x^2-9$ (c) at $x=1$, $A=16$ but $B=10$, so $A\\ne B$ (d) $x=0$",
            commonErrors: ["In (a), writing $x^2+9$ and forgetting the middle term.", "In (d), trying to expand again instead of equating the simplified forms."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypm3-u2-expanding-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $5(x-3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5x-3$" },
              { id: "b", text: "$5x-15$" },
              { id: "c", text: "$5x+15$" },
              { id: "d", text: "$x-15$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expanding a bracket", statement: "Multiply every term inside the bracket by the outside factor." },
            ],
            steps: [
              { reasoning: "Distribute 5 to both terms.", working: "5x - 15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5x-15$",
            commonErrors: ["Multiplying only the first term."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-expanding-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $-3(x-4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x-12$" },
              { id: "b", text: "$-3x-4$" },
              { id: "c", text: "$-3x-12$" },
              { id: "d", text: "$-3x+12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expanding a bracket", statement: "The negative factor must be distributed to every term." },
            ],
            steps: [
              { reasoning: "$-3 \\times x = -3x$ and $-3 \\times (-4) = +12$.", working: "-3x + 12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $-3x+12$",
            commonErrors: ["Keeping the sign of -4 unchanged."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-expanding-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Expand and simplify $(x+5)(x-2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2+7x-10$" },
              { id: "b", text: "$x^2+3x-10$" },
              { id: "c", text: "$x^2-3x-10$" },
              { id: "d", text: "$x^2+3x+10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$." },
            ],
            steps: [
              { reasoning: "Middle term: $5x-2x=3x$; constant: $5 \\times (-2)=-10$.", working: "x^2+3x-10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x^2+3x-10$",
            commonErrors: ["Adding 5 and -2 to get 7x."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-expanding-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Expand and simplify $(x-6)^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2-12x+36$" },
              { id: "b", text: "$x^2-36$" },
              { id: "c", text: "$x^2-12x-36$" },
              { id: "d", text: "$x^2+36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(x+a)^2=x^2+2ax+a^2$." },
            ],
            steps: [
              { reasoning: "Here $a=-6$, so the middle term is $2 \\times x \\times (-6)=-12x$ and the constant is $36$.", working: "x^2-12x+36", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x^2-12x+36$",
            commonErrors: ["Writing $x^2+36$ and forgetting the middle term."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-expanding-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $(x+4)(x-1)$ and find its value when $x=3$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$." },
            ],
            steps: [
              { reasoning: "Expand first: $(x+4)(x-1)=x^2+3x-4$.", working: "x^2+3x-4", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=3$.", working: "9+9-4=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Substituting before expanding and making an arithmetic slip."],
            examinerNote: "M1 for expansion, A1 for 14.",
          },
        },
        {
          id: "mypm3-u2-expanding-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $(2x+1)(x-3)$ and state the coefficient of $x$.",
          response: { type: "numeric", parts: [{ label: "Coefficient of x", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product of binomials", statement: "Multiply each term in the first bracket by each term in the second." },
            ],
            steps: [
              { reasoning: "Expand: $2x^2-6x+x-3=2x^2-5x-3$.", working: "2x^2-5x-3", marks: 1, markCode: "M" },
              { reasoning: "Identify the coefficient of $x$.", working: "-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-5$",
            commonErrors: ["Reporting the constant term -3 instead of the coefficient of x."],
            examinerNote: "M1 for expansion, A1 for -5.",
          },
        },
        {
          id: "mypm3-u2-expanding-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $-2(x+5)+3(x-1)$ and find its value when $x=10$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expanding brackets", statement: "Distribute each factor, then collect like terms." },
            ],
            steps: [
              { reasoning: "Expand: $-2x-10+3x-3=x-13$.", working: "x-13", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=10$.", working: "10-13=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3$",
            commonErrors: ["Expanding $-2(x+5)$ as $-2x+10$."],
            examinerNote: "M1 for simplification, A1 for -3.",
          },
        },
        {
          id: "mypm3-u2-expanding-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the correct expansion of $(x+3)(x+3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2+9$" },
              { id: "b", text: "$x^2+3x+9$" },
              { id: "c", text: "$x^2+6x-9$" },
              { id: "d", text: "$x^2+6x+9$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(x+a)^2=x^2+2ax+a^2$; the middle term is not zero." },
            ],
            steps: [
              { reasoning: "Middle term is $2 \\times 3x = 6x$.", working: "x^2+6x+9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x^2+6x+9$",
            commonErrors: ["Writing $x^2+9$ and omitting the middle term."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-expanding-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle has sides $(x+2)$ cm and $(x+7)$ cm. Which expression gives its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x+9$ cm²" },
              { id: "b", text: "$x^2+5x+14$ cm²" },
              { id: "c", text: "$x^2+9x+9$ cm²" },
              { id: "d", text: "$x^2+9x+14$ cm²" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length × width." },
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$." },
            ],
            steps: [
              { reasoning: "Area = $(x+2)(x+7)=x^2+9x+14$.", working: "x^2+9x+14 cm²", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x^2+9x+14$ cm²",
            commonErrors: ["Adding the side lengths instead of multiplying."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-expanding-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A rectangle has sides $(x+2)$ cm and $(x+7)$ cm. Find its area when $x=3$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 50, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length × width." },
            ],
            steps: [
              { reasoning: "When $x=3$, sides are 5 cm and 10 cm.", working: "5 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "50 cm²", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ cm²",
            commonErrors: ["Using $x=3$ in only one side."],
            examinerNote: "M1 for side lengths, A1 for 50.",
          },
        },
        {
          id: "mypm3-u2-expanding-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student claims $(x+3)^2 = x^2+9$. Show that this is false when $x=1$ and explain what term is missing from the student's expansion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(x+a)^2=x^2+2ax+a^2$; the middle term is $2ax$." },
            ],
            steps: [
              { reasoning: "Correct expansion is $x^2+6x+9$.", working: "(x+3)^2=x^2+6x+9", marks: 1, markCode: "M" },
              { reasoning: "At $x=1$: correct value 16, student's value 10.", working: "16 \\ne 10", marks: 1, markCode: "M" },
              { reasoning: "The missing term is $6x$.", working: "missing 6x", marks: 1, markCode: "R" },
            ],
            finalAnswer: "False; correct expansion is $x^2+6x+9$, so the missing term is $6x$.",
            commonErrors: ["Saying the expressions are equal because the constant terms match."],
            examinerNote: "M1 for expansion, M1 for counterexample, R1 for missing term.",
          },
        },
        {
          id: "mypm3-u2-expanding-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangular patio has length $(x+5)$ m and width $(x-2)$ m. Write an expression for its area and find the area when $x=4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length × width." },
              { kind: "formula", name: "Product of binomials", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$." },
            ],
            steps: [
              { reasoning: "Area expression: $(x+5)(x-2)=x^2+3x-10$.", working: "x^2+3x-10 m²", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=4$.", working: "16+12-10=18", marks: 1, markCode: "M" },
              { reasoning: "State the area with units.", working: "18 m²", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Area $=x^2+3x-10$ m²; when $x=4$, area $=18$ m².",
            commonErrors: ["Forgetting units or substituting incorrectly."],
            examinerNote: "M1 for expansion, M1 for substitution, A1 for 18 m².",
          },
        },
      ],
    },
    {
      id: "mypm3-u2-factorising",
      title: "Factorising expressions",
      skill: "Factorise by common factors and factorise monic quadratics by inspection.",
      lesson: {
        sections: [
          {
            heading: "Common factors",
            body: `Factorising is the reverse of expanding. When every term shares a factor, take it outside:

$6x+9=3(2x+3)$, and $4x^2-8x=4x(x-2)$ — check by expanding back.`,
          },
          {
            heading: "Factorising monic quadratics",
            body: `For $x^2+bx+c$, find two numbers that **multiply to $c$** and **add to $b$**:

$x^2+5x+6$: need $\\times=6$, $+=5$ → 2 and 3 → $(x+2)(x+3)$.

$x^2-5x+6$: need $\\times=6$, $+=-5$ → $-2$ and $-3$ → $(x-2)(x-3)$.`,
          },
          {
            heading: "Checking",
            body: "Always expand your answer to check. If it doesn't return the original expression, the factor pair is wrong. For $x^2+7x+12$: pairs giving 12 are $(1,12),(2,6),(3,4)$ and negatives; only $3$ and $4$ add to 7, so $(x+3)(x+4)$.",
          },
        ],
        keyFormulas: [
          { name: "Factorising monic quadratic", statement: "$x^2+bx+c=(x+p)(x+q)$ where $p+q=b$ and $pq=c$" },
        ],
        workedExample: {
          problem: "Factorise $x^2-7x+10$.",
          solution: "Need two numbers multiplying to 10 and adding to $-7$: $-5$ and $-2$. So $(x-5)(x-2)$. Check: $x^2-2x-5x+10=x^2-7x+10$.",
        },
      },
      questions: [
        {
          id: "mypm3-u2-factorising-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Factorise $8x-12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4(2x+3)$" },
              { id: "b", text: "$4(2x-3)$" },
              { id: "c", text: "$8(x-12)$" },
              { id: "d", text: "$2(4x-6)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising by common factor", statement: "Take the highest common factor outside the brackets." },
            ],
            steps: [
              { reasoning: "HCF of 8 and 12 is 4; divide each term by 4.", working: "8x-12=4(2x-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4(2x-3)$",
            commonErrors: ["Choosing 2 instead of the HCF 4.", "Sign error: $4(2x+3)$ expands to $8x+12$."],
            examinerNote: "B1 for (a). Note (b) is also correct but not fully factorised; (a) is the best answer.",
          },
        },
        {
          id: "mypm3-u2-factorising-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factorise $x^2+8x+15$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "$x^2+bx+c=(x+p)(x+q)$ with $p+q=b$, $pq=c$." },
            ],
            steps: [
              { reasoning: "Find two numbers multiplying to 15 and adding to 8: 3 and 5.", working: "3\\times5=15,\\ 3+5=8", marks: 1, markCode: "M" },
              { reasoning: "Write the brackets.", working: "(x+3)(x+5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+3)(x+5)$",
            commonErrors: ["Choosing 1 and 15 (sum 16) or 5 and 3 in wrong sign.", "Writing $(x+3)(x+5)$ but not checking."],
            examinerNote: "M1 for correct pair, A1 for brackets.",
          },
        },
        {
          id: "mypm3-u2-factorising-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Factorise $x^2-9x+20$, and hence solve $x^2-9x+20=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "$x^2+bx+c=(x+p)(x+q)$ with $p+q=b$, $pq=c$." },
              { kind: "principle", name: "Zero product principle", statement: "If $(x+p)(x+q)=0$ then $x=-p$ or $x=-q$." },
            ],
            steps: [
              { reasoning: "Find two numbers multiplying to 20 and adding to $-9$: $-4$ and $-5$.", working: "(x-4)(x-5)", marks: 1, markCode: "M" },
              { reasoning: "Set each factor to zero.", working: "x-4=0\\Rightarrow x=4;\\quad x-5=0\\Rightarrow x=5", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=4\\text{ or }x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-4)(x-5)$; $x=4$ or $x=5$",
            commonErrors: ["Choosing $+4$ and $+5$ (sum $+9$).", "Giving only one solution."],
            examinerNote: "M1 for factorisation, M1 for setting factors to zero, A1 for both solutions.",
          },
        },
        {
          id: "mypm3-u2-factorising-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A garden is rectangular. Its length is $(x+7)$ metres and its width is $(x+2)$ metres.",
          parts: [
            { label: "a", prompt: "Write down an expression for the area of the garden, expanded and simplified.", marks: 2 },
            { label: "b", prompt: "Factorise your answer to part (a).", marks: 2 },
            { label: "c", prompt: "The area of the garden is 36 square metres. Form an equation and solve it to find $x$.", marks: 2 },
            { label: "d", prompt: "Explain why only one of the mathematical solutions is possible for the garden's dimensions, and find the actual length and width.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "$\\text{area}=\\text{length}\\times\\text{width}$" },
              { kind: "principle", name: "Zero product principle", statement: "If a product is zero, at least one factor is zero." },
            ],
            steps: [
              { part: "a", reasoning: "Area is the product of length and width.", working: "(x+7)(x+2)=x^2+2x+7x+14", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "x^2+9x+14\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reverse the expansion: need numbers multiplying to 14 and adding to 9: 2 and 7.", working: "(x+2)(x+7)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the factorisation.", working: "(x+2)(x+7)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set the area expression equal to 36.", working: "x^2+9x+14=36\\Rightarrow x^2+9x-22=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Factorise: numbers multiplying to $-22$ and adding to 9 are $11$ and $-2$.", working: "(x+11)(x-2)=0\\Rightarrow x=2\\text{ or }x=-11", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$x=-11$ would make width $x+2=-9$ m, impossible for a length.", working: "x+2=-9<0", marks: 1, markCode: "R" },
              { part: "d", reasoning: "For $x=2$: length $=9$ m, width $=4$ m, and area $=9\\times4=36\\text{ m}^2$ as required.", working: "(2+7)(2+2)=9\\times4=36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x^2+9x+14\\text{ m}^2$ (b) $(x+2)(x+7)$ (c) $x=2$ or $x=-11$ (d) $x=-11$ gives negative width; $x=2$ gives length 9 m and width 4 m",
            commonErrors: ["In (c), forgetting to move 36 to the left before factorising.", "In (d), rejecting $x=-11$ without verifying that $x=2$ gives the stated area."],
            examinerNote: "M1 A1 per part; R1 for rejecting the negative solution in (d).",
          },
        },
        {
          id: "mypm3-u2-factorising-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Factorise $9x+15$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3(3x+5)$" },
              { id: "b", text: "$(9x+15)$" },
              { id: "c", text: "$9(x+15)$" },
              { id: "d", text: "$3(3x+15)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising by common factor", statement: "Take the highest common factor outside the brackets." },
            ],
            steps: [
              { reasoning: "HCF of 9 and 15 is 3: $9x+15=3(3x+5)$.", working: "3(3x+5)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3(3x+5)$",
            commonErrors: ["Choosing 9 as the common factor even though 15 is not divisible by 9."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-factorising-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Factorise $x^2+7x+12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+2)(x+6)$" },
              { id: "b", text: "$(x+3)(x+4)$" },
              { id: "c", text: "$(x-3)(x-4)$" },
              { id: "d", text: "$(x+1)(x+12)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "Find two numbers with product 12 and sum 7." },
            ],
            steps: [
              { reasoning: "3 and 4 multiply to 12 and add to 7.", working: "(x+3)(x+4)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(x+3)(x+4)$",
            commonErrors: ["Choosing 2 and 6, which add to 8."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-factorising-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Factorise $x^2-4x-21$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-7)(x-3)$" },
              { id: "b", text: "$(x+21)(x-1)$" },
              { id: "c", text: "$(x-7)(x+3)$" },
              { id: "d", text: "$(x+7)(x-3)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "Need product -21 and sum -4." },
            ],
            steps: [
              { reasoning: "-7 and 3 multiply to -21 and add to -4.", working: "(x-7)(x+3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(x-7)(x+3)$",
            commonErrors: ["Choosing 7 and -3, which add to 4."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-factorising-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Factorise $4x^2-6x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x(4x-6)$" },
              { id: "b", text: "$2x(2x-3)$" },
              { id: "c", text: "$4x(x-6)$" },
              { id: "d", text: "$2(2x^2-3x)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising by common factor", statement: "Take out the highest common factor, including x." },
            ],
            steps: [
              { reasoning: "HCF is $2x$: $4x^2-6x=2x(2x-3)$.", working: "2x(2x-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2x(2x-3)$",
            commonErrors: ["Taking out only 2 and leaving $x$ inside."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-factorising-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $x^2+5x+6=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-2$ or $x=-3$" },
              { id: "b", text: "$x=-1$ or $x=-6$" },
              { id: "c", text: "$x=1$ or $x=6$" },
              { id: "d", text: "$x=2$ or $x=3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "$x^2+5x+6=(x+2)(x+3)$." },
              { kind: "principle", name: "Zero product principle", statement: "If a product is zero, one factor is zero." },
            ],
            steps: [
              { reasoning: "Factorise to $(x+2)(x+3)=0$, giving $x=-2$ or $x=-3$.", working: "x=-2,\\ -3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=-2$ or $x=-3$",
            commonErrors: ["Changing the signs of the roots."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-factorising-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The roots of $x^2+bx+18=0$ are -3 and -6. Find the value of $b$.",
          response: { type: "numeric", parts: [{ label: "b", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "For roots $r_1,r_2$, the quadratic is $(x-r_1)(x-r_2)=x^2-(r_1+r_2)x+r_1r_2$." },
            ],
            steps: [
              { reasoning: "Factor form: $(x+3)(x+6)=x^2+9x+18$.", working: "(x+3)(x+6)", marks: 1, markCode: "M" },
              { reasoning: "Compare with $x^2+bx+18$.", working: "b=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b=9$",
            commonErrors: ["Using the product of roots 18 as b."],
            examinerNote: "M1 for factor form, A1 for 9.",
          },
        },
        {
          id: "mypm3-u2-factorising-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2-8x+15=0$ and give the larger solution.",
          response: { type: "numeric", parts: [{ label: "Larger solution", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "Need product 15 and sum 8." },
            ],
            steps: [
              { reasoning: "Factorise: $(x-3)(x-5)=0$.", working: "x=3\\ \\text{or}\\ x=5", marks: 1, markCode: "M" },
              { reasoning: "State the larger solution.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Giving both solutions when only the larger is asked."],
            examinerNote: "M1 for factorisation, A1 for 5.",
          },
        },
        {
          id: "mypm3-u2-factorising-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2+2x-15=0$ and give the positive solution.",
          response: { type: "numeric", parts: [{ label: "Positive solution", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "Need product -15 and sum 2." },
            ],
            steps: [
              { reasoning: "Factorise: $(x+5)(x-3)=0$.", working: "x=-5\\ \\text{or}\\ x=3", marks: 1, markCode: "M" },
              { reasoning: "State the positive solution.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
            commonErrors: ["Forgetting there is also a negative solution."],
            examinerNote: "M1 for factorisation, A1 for 3.",
          },
        },
        {
          id: "mypm3-u2-factorising-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $x^2-11x+24=0$ and give the larger solution.",
          response: { type: "numeric", parts: [{ label: "Larger solution", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "Need product 24 and sum 11." },
            ],
            steps: [
              { reasoning: "Factorise: $(x-3)(x-8)=0$.", working: "x=3\\ \\text{or}\\ x=8", marks: 1, markCode: "M" },
              { reasoning: "State the larger solution.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=8$",
            commonErrors: ["Choosing factor pairs such as 4 and 6, which add to 10."],
            examinerNote: "M1 for factorisation, A1 for 8.",
          },
        },
        {
          id: "mypm3-u2-factorising-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The roots of $x^2+bx-12=0$ are 2 and -6. Find the value of $b$.",
          response: { type: "numeric", parts: [{ label: "b", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Factorising monic quadratic", statement: "Roots 2 and -6 give $(x-2)(x+6)$." },
            ],
            steps: [
              { reasoning: "Expand $(x-2)(x+6)=x^2+4x-12$.", working: "x^2+4x-12", marks: 1, markCode: "M" },
              { reasoning: "Compare with $x^2+bx-12$.", working: "b=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b=4$",
            commonErrors: ["Using the product -12 as b."],
            examinerNote: "M1 for expansion, A1 for 4.",
          },
        },
        {
          id: "mypm3-u2-factorising-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how to check that $x^2-7x+10=(x-5)(x-2)$ is correct, and show the check.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Checking by expanding", statement: "Factorising is the reverse of expanding, so expanding the answer must return the original." },
            ],
            steps: [
              { reasoning: "Expand the brackets.", working: "(x-5)(x-2)=x^2-2x-5x+10", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms.", working: "x^2-7x+10", marks: 1, markCode: "M" },
              { reasoning: "It matches the original expression, so the factorisation is correct.", working: "matches original", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Expanding $(x-5)(x-2)$ gives $x^2-7x+10$, so the factorisation is correct.",
            commonErrors: ["Claiming the check without expanding."],
            examinerNote: "M1 for expansion, M1 for simplification, R1 for conclusion.",
          },
        },
        {
          id: "mypm3-u2-factorising-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangular garden has length $(x+4)$ m and width $(x+2)$ m. Its area is 35 m². Form an equation, solve it, and find the actual length and width.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length × width." },
              { kind: "formula", name: "Factorising monic quadratic", statement: "Solve by factorising and using the zero product principle." },
            ],
            steps: [
              { reasoning: "Area expression: $(x+4)(x+2)=x^2+6x+8$; set equal to 35.", working: "x^2+6x+8=35", marks: 1, markCode: "M" },
              { reasoning: "Rearrange and factorise: $x^2+6x-27=(x+9)(x-3)=0$, so $x=3$ or $x=-9$.", working: "x=3\\ \\text{or}\\ x=-9", marks: 1, markCode: "M" },
              { reasoning: "Reject $x=-9$ because width would be negative; $x=3$ gives length 7 m and width 5 m.", working: "7 \\times 5 = 35 m²", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=3$; length $7$ m and width $5$ m.",
            commonErrors: ["Accepting $x=-9$ without checking dimensions."],
            examinerNote: "M1 for equation, M1 for solutions, R1 for rejecting invalid solution.",
          },
        },
      ],
    },
  ],
};
