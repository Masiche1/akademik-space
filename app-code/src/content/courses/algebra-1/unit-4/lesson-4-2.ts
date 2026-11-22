import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "alg1-u4-4-2",
  code: "4-2",
  title: "Factoring Polynomials",
  goal: "I CAN factor polynomials using a greatest common factor, trinomial patterns, and special products, and I can check that a factorization is complete.",
  standards: ["HSA-SSE.A.2"],
  vocabulary: [
    { term: "Factor", definition: "An expression multiplied by another expression to produce a given product." },
    { term: "Greatest common factor (GCF)", definition: "The greatest expression that divides every term of a polynomial." },
    { term: "Factored form", definition: "A product of polynomial factors equivalent to the original polynomial." },
    { term: "Zero pair", definition: "Two numbers whose sum is the middle coefficient and whose product is the constant term of a monic trinomial." },
    { term: "Difference of squares", definition: "A binomial in the form $a^2-b^2$, which factors as $(a-b)(a+b)$." },
    { term: "Perfect square trinomial", definition: "A trinomial in the form $a^2+2ab+b^2=(a+b)^2$ or $a^2-2ab+b^2=(a-b)^2$." },
    { term: "Factor completely", definition: "Write a polynomial as a product in which no factor can be factored further over the integers." },
  ],
  concepts: [
    {
      id: "alg1-u4-gcf-trinomials",
      title: "Factor out a GCF and factor trinomials",
      skill: "Factor out the greatest common factor, then factor monic and nonmonic quadratic trinomials over the integers.",
      lesson: {
        sections: [
          {
            heading: "Always check for a common factor first",
            body: "The greatest common factor is the largest number and variable factor shared by every term. Factor it out before using another pattern. For example, $6x^2+15x=3x(2x+5)$. To check, multiply the factors back together and confirm every original term appears.",
          },
          {
            heading: "Factor a monic trinomial",
            body: "For $x^2+bx+c$, find integers $m$ and $n$ such that $m+n=b$ and $mn=c$. Then $x^2+bx+c=(x+m)(x+n)$. The signs matter: if $c$ is negative, the integers have opposite signs; if $c$ is positive, they have the same sign.",
          },
          {
            heading: "Factor a nonmonic trinomial",
            body: "For $ax^2+bx+c$ with $a\\ne1$, find two numbers whose product is $ac$ and whose sum is $b$. Split the middle term using those numbers, then factor by grouping. For $6x^2+11x+3$, the numbers 9 and 2 multiply to 18 and add to 11: $6x^2+9x+2x+3=3x(2x+3)+1(2x+3)=(3x+1)(2x+3)$.",
          },
        ],
        keyFormulas: [
          { name: "Greatest common factor", statement: "$ab+ac=a(b+c)$" },
          { name: "Monic trinomial", statement: "$x^2+bx+c=(x+m)(x+n)$ when $m+n=b$ and $mn=c$." },
          { name: "AC method", statement: "For $ax^2+bx+c$, find $m,n$ with $mn=ac$ and $m+n=b$, then split $bx$ and factor by grouping." },
        ],
        workedExample: {
          problem: "Factor $8x^2+14x+3$ completely.",
          solution: "First check for a GCF; there is none. Find two numbers with product $8\\cdot3=24$ and sum 14: 12 and 2. Split the middle term and group: $8x^2+12x+2x+3=4x(2x+3)+1(2x+3)=(4x+1)(2x+3)$. Multiplying back gives $8x^2+12x+2x+3=8x^2+14x+3$.",
        },
      },
      questions: [
        {
          id: "alg1-u4-gcf-trinomials-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Factor $12x^3-18x^2$ by taking out the greatest common factor.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6x(2x^2-3x)$" },
              { id: "b", text: "$6x^2(2x-3)$" },
              { id: "c", text: "$3x^2(4x-6)$" },
              { id: "d", text: "$6x^2(2x+3)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greatest common factor", statement: "The GCF is the largest factor shared by all terms, including the smallest exponent of each shared variable." },
              { kind: "property", name: "Factoring out a common factor", statement: "$ab+ac=a(b+c)$; dividing each term by the common factor gives the remaining factor." },
            ],
            steps: [
              { reasoning: "The coefficients 12 and 18 have GCF 6, and both terms contain at least $x^2$.", working: "\\operatorname{GCF}(12x^3,18x^2)=6x^2", marks: 1, markCode: "M" },
              { reasoning: "Divide each term by $6x^2$ to obtain the factor in parentheses.", working: "12x^3-18x^2=6x^2(2x-3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6x^2(2x-3)$",
            commonErrors: ["Not taking the largest possible variable factor.", "Changing subtraction to addition while factoring."],
          },
        },
        {
          id: "alg1-u4-gcf-trinomials-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Factor $x^2+7x+12$ over the integers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Monic trinomial factoring", statement: "$x^2+bx+c=(x+m)(x+n)$ when $m+n=b$ and $mn=c$." },
              { kind: "property", name: "Product check", statement: "Expanding a correct factorization reproduces the original polynomial." },
            ],
            steps: [
              { reasoning: "Find integers whose product is 12 and sum is 7.", working: "3\\cdot4=12,\\quad 3+4=7", marks: 1, markCode: "M" },
              { reasoning: "Use those integers as the constants in the two binomial factors.", working: "x^2+7x+12=(x+3)(x+4)", marks: 1, markCode: "A" },
              { reasoning: "Check the middle term and constant by expanding.", working: "(x+3)(x+4)=x^2+7x+12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$(x+3)(x+4)$",
            commonErrors: ["Choosing 2 and 6 because their product is 12 but their sum is 8.", "Giving factors with a negative constant product."],
          },
        },
        {
          id: "alg1-u4-gcf-trinomials-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Factor $6x^2-x-2$ over the integers. Show how you choose the split middle terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "AC method", statement: "For $ax^2+bx+c$, choose numbers with product $ac$ and sum $b$ to split the middle term." },
              { kind: "property", name: "Factoring by grouping", statement: "Factor each pair of grouped terms; a common binomial factor then gives the product." },
            ],
            steps: [
              { reasoning: "Compute the product of the leading and constant coefficients and find a pair summing to the middle coefficient.", working: "ac=6(-2)=-12;\\quad 3(-4)=-12,\\quad 3+(-4)=-1", marks: 1, markCode: "M" },
              { reasoning: "Split the middle term using the selected pair.", working: "6x^2+3x-4x-2", marks: 1, markCode: "M" },
              { reasoning: "Group terms and factor out each group's GCF.", working: "3x(2x+1)-2(2x+1)", marks: 1, markCode: "A" },
              { reasoning: "Factor the shared binomial and confirm it expands to the original expression.", working: "(3x-2)(2x+1)=6x^2-x-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3x-2)(2x+1)$",
            commonErrors: ["Choosing numbers that multiply to $ac$ but do not sum to $b$.", "Factoring $-2(2x+1)$ as $-2(2x-1)$."],
          },
        },
        {
          id: "alg1-u4-gcf-trinomials-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangular garden has an area modeled by $A(x)=6x^2+15x+6$ square feet, where $x$ is a positive whole number representing a design dimension in feet.",
          parts: [
            { label: "a", prompt: "Factor out the greatest common factor from $A(x)$.", marks: 2 },
            { label: "b", prompt: "Factor the remaining trinomial completely over the integers.", marks: 4 },
            { label: "c", prompt: "Write the full factored area model and verify it by expanding.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greatest common factor", statement: "Factor out the largest coefficient and variable factor common to every term." },
              { kind: "law", name: "AC method", statement: "For $ax^2+bx+c$, select two numbers with product $ac$ and sum $b$." },
              { kind: "property", name: "Factoring by grouping", statement: "Group the split trinomial into two pairs and factor the shared binomial." },
              { kind: "property", name: "Equivalent expressions", statement: "A factorization is verified when expansion reproduces the original polynomial." },
            ],
            steps: [
              { part: "a", reasoning: "The coefficients 6, 15, and 6 share a GCF of 3; no variable is common to the constant term.", working: "6x^2+15x+6=3(2x^2+5x+2)", marks: 2, markCode: "M" },
              { part: "b", reasoning: "For the remaining trinomial, $ac=2\\cdot2=4$; 4 and 1 multiply to 4 and add to 5.", working: "2x^2+5x+2=2x^2+4x+x+2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Group and factor each pair, producing a common binomial factor.", working: "2x(x+2)+1(x+2)=(2x+1)(x+2)", marks: 2, markCode: "M" },
              { part: "b", reasoning: "State the complete factorization of the trinomial inside the parentheses.", working: "2x^2+5x+2=(2x+1)(x+2)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Keep the original GCF with both trinomial factors.", working: "A(x)=3(2x+1)(x+2)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply the binomials, then multiply by 3 to verify the original coefficients.", working: "3(2x^2+5x+2)=6x^2+15x+6", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $3(2x^2+5x+2)$. (b) $(2x+1)(x+2)$. (c) $A(x)=3(2x+1)(x+2)$; expanding gives $6x^2+15x+6$.",
            commonErrors: ["Forgetting to retain the GCF of 3 in the full factorization.", "Choosing 2 and 2 for the split because their product is 4, despite their sum being 4 rather than 5."],
          },
        },
      ],
    },
    {
      id: "alg1-u4-special-factoring",
      title: "Use special patterns and factor completely",
      skill: "Recognize and factor differences of squares and perfect square trinomials, including expressions with a common factor.",
      lesson: {
        sections: [
          {
            heading: "Difference of squares",
            body: "If both terms are perfect squares and are separated by subtraction, use $a^2-b^2=(a-b)(a+b)$. A sum of squares, such as $x^2+25$, does not factor into real linear factors using this pattern. The difference of squares factors into conjugates, whose middle terms cancel when multiplied.",
          },
          {
            heading: "Perfect square trinomials",
            body: "A trinomial is a perfect square when its first and last terms are squares and its middle term is plus or minus twice the product of their square roots. Thus $x^2+10x+25=(x+5)^2$ and $x^2-10x+25=(x-5)^2$. Check both the end terms and the middle term before applying the pattern.",
          },
          {
            heading: "Factor completely",
            body: "First remove any GCF, then look for a special pattern or trinomial factorization in every factor. Continue until no factor can be factored over the integers. For instance, $3x^2-27=3(x^2-9)=3(x-3)(x+3)$; stopping at $3(x^2-9)$ is not complete.",
          },
        ],
        keyFormulas: [
          { name: "Difference of squares", statement: "$a^2-b^2=(a-b)(a+b)$" },
          { name: "Perfect square trinomials", statement: "$a^2+2ab+b^2=(a+b)^2$ and $a^2-2ab+b^2=(a-b)^2$" },
        ],
        workedExample: {
          problem: "Factor $2x^2-18$ completely.",
          solution: "First factor out the GCF 2: $2(x^2-9)$. The expression in parentheses is a difference of squares: $x^2-9=(x-3)(x+3)$. Therefore the complete factorization is $2(x-3)(x+3)$.",
        },
      },
      questions: [
        {
          id: "alg1-u4-special-factoring-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Factor $x^2-49$ over the integers.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-7)(x+7)$" },
              { id: "b", text: "$(x-49)(x+1)$" },
              { id: "c", text: "$(x-7)^2$" },
              { id: "d", text: "$(x-7)(x-7)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference of squares", statement: "$a^2-b^2=(a-b)(a+b)$." },
              { kind: "property", name: "Perfect squares", statement: "$49=7^2$, so $x^2-49=x^2-7^2$." },
            ],
            steps: [
              { reasoning: "Recognize both terms as squares separated by subtraction.", working: "x^2-49=x^2-7^2", marks: 1, markCode: "M" },
              { reasoning: "Apply the difference-of-squares pattern using opposite signs.", working: "(x-7)(x+7)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(x-7)(x+7)$",
            commonErrors: ["Factoring as a square trinomial despite having only two terms.", "Using two factors with the same sign, which creates a middle term."],
          },
        },
        {
          id: "alg1-u4-special-factoring-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Factor $x^2-12x+36$ completely over the integers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perfect square trinomial", statement: "$a^2-2ab+b^2=(a-b)^2$." },
              { kind: "property", name: "Middle-term check", statement: "For $x^2+bx+c$, the square pattern requires $b=\\u00b12\\sqrt{c}$ when $c$ is a perfect square." },
            ],
            steps: [
              { reasoning: "The first and last terms are squares, with square roots $x$ and 6.", working: "x^2-12x+36=x^2-2(x)(6)+6^2", marks: 1, markCode: "M" },
              { reasoning: "The middle term is negative twice the product of the square roots.", working: "-2(x)(6)=-12x", marks: 1, markCode: "R" },
              { reasoning: "Apply the negative perfect-square pattern.", working: "(x-6)^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-6)^2$",
            commonErrors: ["Writing $(x-6)(x+6)$, which expands to a difference of squares.", "Using $(x+6)^2$ and getting a positive middle term."],
          },
        },
        {
          id: "alg1-u4-special-factoring-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Factor $5x^3-45x$ completely over the integers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Factor out the GCF first", statement: "Every term's common numerical and variable factors should be removed before further factoring." },
              { kind: "formula", name: "Difference of squares", statement: "$a^2-b^2=(a-b)(a+b)$." },
              { kind: "definition", name: "Factor completely", statement: "Continue factoring each factor until none can be factored further over the integers." },
            ],
            steps: [
              { reasoning: "The GCF of both terms is $5x$; remove it first.", working: "5x^3-45x=5x(x^2-9)", marks: 1, markCode: "M" },
              { reasoning: "Recognize the remaining binomial as a difference of squares.", working: "x^2-9=x^2-3^2", marks: 1, markCode: "M" },
              { reasoning: "Factor the difference into conjugate binomials.", working: "5x(x-3)(x+3)", marks: 1, markCode: "A" },
              { reasoning: "The factors are fully factored over the integers; none has a further common factor or special factorization.", working: "5x(x-3)(x+3)\\text{ is complete}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$5x(x-3)(x+3)$",
            commonErrors: ["Stopping at $5x(x^2-9)$ without factoring the difference of squares.", "Factoring $x^2-9$ as $(x-3)^2$."],
          },
        },
        {
          id: "alg1-u4-special-factoring-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A square display panel has area $x^2+14x+49$ square inches. A different rectangular panel has area $x^2-64$ square inches, where $x>8$.",
          parts: [
            { label: "a", prompt: "Factor the square panel's area polynomial and state the side length of the square in terms of $x$.", marks: 3 },
            { label: "b", prompt: "Factor the rectangular panel's area polynomial using a special pattern.", marks: 3 },
            { label: "c", prompt: "Explain how the factors in part (b) produce the original area, and why they are not equal side lengths of a square.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perfect square trinomial", statement: "$a^2+2ab+b^2=(a+b)^2$." },
              { kind: "formula", name: "Difference of squares", statement: "$a^2-b^2=(a-b)(a+b)$." },
              { kind: "principle", name: "Rectangle area", statement: "Area equals the product of the rectangle's side lengths." },
              { kind: "property", name: "Square side lengths", statement: "A square has equal side lengths; a general product of unequal factors describes a rectangle, not a square." },
            ],
            steps: [
              { part: "a", reasoning: "The first and last terms are squares, and the middle term is twice the product of their roots.", working: "x^2+14x+49=x^2+2(x)(7)+7^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the positive perfect-square pattern.", working: "x^2+14x+49=(x+7)^2", marks: 1, markCode: "A" },
              { part: "a", reasoning: "A square whose area is $(x+7)^2$ has side length $x+7$ (positive since $x>8$).", working: "\\text{side length}=x+7\\text{ inches}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Recognize the polynomial as a difference of squares.", working: "x^2-64=x^2-8^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factor using conjugates.", working: "x^2-64=(x-8)(x+8)", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Multiplying the binomial factors gives the two squared terms because the opposite cross terms cancel.", working: "(x-8)(x+8)=x^2-64", marks: 1, markCode: "M" },
              { part: "c", reasoning: "For $x>8$, the side lengths $x-8$ and $x+8$ are positive but unequal.", working: "x-8\\ne x+8\\quad (x>8)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Thus the two factors are rectangle side lengths, not equal side lengths of a square.", working: "\\text{The panel is not a square.}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(x+7)^2$, side $x+7$ inches. (b) $(x-8)(x+8)$. (c) The factors multiply to $x^2-64$ as conjugates, but for $x>8$ they are unequal, so they are not square side lengths.",
            commonErrors: ["Treating $x^2-64$ as a perfect square trinomial.", "Claiming the rectangle factors are equal because the area expression has no linear term."],
          },
        },
      ],
    },
  ],
};
