import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypm1-u2-lesson-2-1",
  code: "2-1",
  title: "Algebraic Expressions",
  goal: "I CAN write algebraic expressions, collect like terms, expand a single bracket and substitute values, including negative numbers, into expressions and formulae.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Variable", definition: "A letter that stands for a number that can change or is not yet known." },
    { term: "Term", definition: "A single part of an expression, such as $3x$, $-5$ or $y^2$. Terms are separated by $+$ and $-$ signs." },
    { term: "Coefficient", definition: "The number that multiplies a variable. In $7x$ the coefficient is 7." },
    { term: "Like terms", definition: "Terms with exactly the same variable part, such as $4x$ and $-9x$. They can be added or subtracted." },
    { term: "Expand", definition: "Multiply every term inside a bracket by the term outside it, removing the bracket." },
    { term: "Substitution", definition: "Replacing each variable in an expression or formula with a given number and then calculating." },
    { term: "Formula", definition: "A rule written with variables that links quantities, such as $A = lw$ for the area of a rectangle." },
  ],
  concepts: [
    {
      id: "mypm1-u2-expressions",
      title: "Writing, simplifying and expanding expressions",
      skill: "Write expressions from words, collect like terms and expand one bracket.",
      lesson: {
        sections: [
          {
            heading: "Writing expressions from words",
            body: "A variable is a letter that stands for a number. \"3 times $n$, plus 5\" is written $3n+5$. Write $3\\times n$ as $3n$. Be careful about what is multiplied: \"3 times the sum of $n$ and 5\" needs a bracket, $3(n+5)$.",
          },
          {
            heading: "Collecting like terms",
            body: "Only like terms can be combined: $4x$ and $-9x$ both contain $x$, so $4x-9x=-5x$. But $3x$ and $3$ are not like terms, so $3x+3$ cannot be simplified. Keep the sign in front of each term with the term.",
          },
          {
            heading: "Expanding one bracket",
            body: "Multiply **every** term inside the bracket by the term outside: $3(x+4)=3x+12$ and $2(y-5)=2y-10$. A common mistake is to multiply only the first term. A minus sign in front of a bracket changes the sign of every term inside it: $-3(y-4)=-3y+12$.",
          },
        ],
        keyFormulas: [
          { name: "Collecting like terms", statement: "$ax+bx=(a+b)x$" },
          { name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
        ],
        workedExample: {
          problem: "Expand and simplify $4(x+3)+2(x-5)$.",
          solution: "Expand each bracket: $4x+12+2x-10$. Collect the $x$ terms: $4x+2x=6x$. Collect the numbers: $12-10=2$. So the answer is $6x+2$.",
        },
      },
      questions: [
        {
          id: "mypm1-u2-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression means \"5 more than 3 times $n$\"?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n+5$" },
              { id: "b", text: "$5n+3$" },
              { id: "c", text: "$3(n+5)$" },
              { id: "d", text: "$8n$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Algebraic expression", statement: "\"3 times $n$\" is $3n$ and \"5 more than\" means add 5." },
            ],
            steps: [
              { reasoning: "Write 3 times $n$ as $3n$, then add 5 to it.", working: "3n+5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3n+5$",
            commonErrors: ["Swapping the numbers to give $5n+3$.", "Adding before multiplying, giving $3(n+5)$.", "Adding the coefficients and the number, giving $8n$."],
            examinerNote: "B1 for 3n+5 oe.",
          },
        },
        {
          id: "mypm1-u2-expressions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $3(2x+5)-4x$. Give your answer in the form $ax+b$. Find the values of $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 2 },
              { label: "$b$", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$: multiply every term inside the bracket." },
              { kind: "property", name: "Like terms", statement: "Only terms with the same variable part can be combined." },
            ],
            steps: [
              { reasoning: "Multiply both terms in the bracket by 3.", working: "3(2x+5)-4x=6x+15-4x", marks: 1, markCode: "M" },
              { reasoning: "Collect the $x$ terms: $6x-4x=2x$.", working: "2x+15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x+15$, so $a=2$ and $b=15$",
            commonErrors: ["Writing $3(2x+5)=6x+5$ (only multiplying the first term).", "Combining $2x$ and $15$ into $17x$."],
            examinerNote: "M1 for 6x + 15 seen. A1 for 2x + 15.",
          },
        },
        {
          id: "mypm1-u2-expressions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Expand and simplify $5(2y-3)-3(y-4)$. Give your answer in the form $ay+b$. Find the values of $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 7 },
              { label: "$b$", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$." },
              { kind: "law", name: "Signs", statement: "Subtracting $3(y-4)$ changes the sign of every term inside the bracket: $-3\\times(-4)=+12$." },
            ],
            steps: [
              { reasoning: "Expand the first bracket.", working: "5(2y-3)=10y-15", marks: 1, markCode: "M" },
              { reasoning: "Expand the second bracket, taking care with the negative sign in front.", working: "-3(y-4)=-3y+12", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms.", working: "10y-3y-15+12=7y-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7y-3$, so $a=7$ and $b=-3$",
            commonErrors: ["Writing $-3(y-4)=-3y-12$.", "Giving $b=27$ by adding $15$ and $12$ with the wrong signs."],
            examinerNote: "M1 for each correct expansion. A1 for 7y - 3.",
          },
        },
        {
          id: "mypm1-u2-expressions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangle has length $(2x+3)$ cm and width $x$ cm, where $x$ is a whole number.",
          parts: [
            { label: "a", prompt: "Write the perimeter of the rectangle as a simplified expression in the form $px+q$. Give the values of $p$ and $q$.", marks: 2 },
            { label: "b", prompt: "Write an expression for the area of the rectangle, in $\\text{cm}^2$, and expand it.", marks: 2 },
            { label: "c", prompt: "Show, by expanding $6(x+1)$, that the perimeter equals $6(x+1)$. Hence explain why the perimeter is always a multiple of 6.", marks: 2 },
            { label: "d", prompt: "Maya expands $3(x+4)$ and writes $3x+4$. Explain her mistake and write the correct expansion.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $p$", answer: 6 },
              { label: "(a) $q$", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of a rectangle", statement: "$P=2l+2w$" },
              { kind: "formula", name: "Area of a rectangle", statement: "$A=lw$" },
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
            ],
            steps: [
              { part: "a", reasoning: "The perimeter is twice the length plus twice the width.", working: "P=2(2x+3)+2x=4x+6+2x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collect like terms.", working: "P=6x+6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area is length multiplied by width.", working: "A=x(2x+3)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply each term in the bracket by $x$.", working: "A=2x^2+3x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Expand the bracket and compare with part (a).", working: "6(x+1)=6x+6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The perimeter is 6 multiplied by the whole number $x+1$, so it is a multiple of 6.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Maya multiplied only the first term by 3. The 3 must multiply every term inside the bracket.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Multiply both terms by 3.", working: "3(x+4)=3x+12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6x+6$, so $p=6$, $q=6$ (b) $2x^2+3x$ (c) $6(x+1)=6x+6$, and $x+1$ is a whole number so the perimeter is a multiple of 6 (d) She did not multiply the 4 by 3; correct answer $3x+12$.",
            commonErrors: ["Adding length and width once only, giving $3x+3$.", "Writing the area as $2x+3x=5x$.", "Writing $x(2x+3)=2x+3$."],
            examinerNote: "In (b) accept $x(2x+3)$ unexpanded for M1. In (c) the reason must refer to the perimeter being 6 times a whole number.",
          },
        },
        {
          id: "mypm1-u2-expressions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression means \"7 less than 4 times $m$\"?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4m-7$" },
              { id: "b", text: "$7-4m$" },
              { id: "c", text: "$4(m-7)$" },
              { id: "d", text: "$11m$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Algebraic expression", statement: "\"4 times $m$\" is $4m$ and \"7 less than\" means subtract 7 from it." },
            ],
            steps: [
              { reasoning: "Write 4 times $m$ as $4m$, then subtract 7 from it.", working: "4m-7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4m-7$",
            commonErrors: ["Reversing the order to get $7-4m$.", "Subtracting inside the bracket to get $4(m-7)$."],
            examinerNote: "B1 for 4m - 7.",
          },
        },
        {
          id: "mypm1-u2-expressions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $5x+3x-2x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10x-2x$" },
              { id: "b", text: "$6x$" },
              { id: "c", text: "$8x$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Like terms", statement: "Terms with the same variable part can be combined by adding their coefficients." },
            ],
            steps: [
              { reasoning: "All terms contain $x$: $5+3-2=6$, so the result is $6x$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $6x$",
            commonErrors: ["Adding the variable part: $5x+3x=8x$ then forgetting the $-2x$.", "Combining to $6$ by dropping the $x$."],
            examinerNote: "B1 for 6x.",
          },
        },
        {
          id: "mypm1-u2-expressions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Expand $4(y+2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4y+2$" },
              { id: "b", text: "$4y+8$" },
              { id: "c", text: "$y+8$" },
              { id: "d", text: "$4y+6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$: multiply every term inside the bracket." },
            ],
            steps: [
              { reasoning: "Multiply both $y$ and 2 by 4.", working: "4y+8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4y+8$",
            commonErrors: ["Multiplying only the first term to get $4y+2$.", "Adding instead of multiplying: $y+8$."],
            examinerNote: "B1 for 4y + 8.",
          },
        },
        {
          id: "mypm1-u2-expressions-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $2(3p+1)-p$. Give your answer in the form $ap+b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 5 },
              { label: "$b$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
              { kind: "property", name: "Like terms", statement: "Only terms with the same variable part can be combined." },
            ],
            steps: [
              { reasoning: "Expand the bracket and collect the $p$ terms.", working: "6p+2-p=5p+2", marks: 1, markCode: "M" },
              { reasoning: "Identify $a$ and $b$.", working: "a=5,\\ b=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5p+2$, so $a=5$ and $b=2$",
            commonErrors: ["Writing $2(3p+1)=6p+1$.", "Combining $6p$ and $-p$ to get $-5p$."],
            examinerNote: "M1 for 5p + 2 seen. A1 for both values.",
          },
        },
        {
          id: "mypm1-u2-expressions-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $-2(x-5)$. Give your answer in the form $ax+b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: -2 },
              { label: "$b$", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Signs", statement: "A negative number outside a bracket changes the sign of every term inside it." },
            ],
            steps: [
              { reasoning: "Multiply each term inside by $-2$: $-2\\times(-5)=+10$.", working: "-2x+10", marks: 1, markCode: "M" },
              { reasoning: "Identify $a$ and $b$.", working: "a=-2,\\ b=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2x+10$, so $a=-2$ and $b=10$",
            commonErrors: ["Writing $-2x-10$ by keeping the minus sign on 10.", "Writing $2x-10$ by dropping the negative outside."],
            examinerNote: "M1 for -2x + 10 seen. A1 for both values.",
          },
        },
        {
          id: "mypm1-u2-expressions-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pair of terms are like terms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x$ and $3$" },
              { id: "b", text: "$2y^2$ and $5y$" },
              { id: "c", text: "$4ab$ and $-ab$" },
              { id: "d", text: "$7x$ and $7y$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Like terms", statement: "Terms with exactly the same variable part, including powers, can be combined." },
            ],
            steps: [
              { reasoning: "$4ab$ and $-ab$ both contain $ab$ exactly; the others differ in the variable part or have a missing variable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $4ab$ and $-ab$",
            commonErrors: ["Choosing $7x$ and $7y$ because the coefficients match, ignoring the variables.", "Choosing $2y^2$ and $5y$ because both contain $y$."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm1-u2-expressions-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Expand and simplify $3(2n-1)+4(n+2)$. Give your answer in the form $an+b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 10 },
              { label: "$b$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
              { kind: "property", name: "Like terms", statement: "Only terms with the same variable part can be combined." },
            ],
            steps: [
              { reasoning: "Expand each bracket.", working: "6n-3+4n+8", marks: 1, markCode: "M" },
              { reasoning: "Collect the $n$ terms and the numbers.", working: "10n+5", marks: 1, markCode: "M" },
              { reasoning: "Identify $a$ and $b$.", working: "a=10,\\ b=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10n+5$, so $a=10$ and $b=5$",
            commonErrors: ["Expanding $4(n+2)$ as $4n+2$.", "Adding $-3$ and $8$ with the wrong sign to get $-5$ or $11$."],
            examinerNote: "M1 for the correct expansion. M1 for 10n + 5. A1 for both values.",
          },
        },
        {
          id: "mypm1-u2-expressions-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle has length $(x+4)$ cm and width $x$ cm. Which expression gives its perimeter, in cm, in the form $px+q$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x+8$" },
              { id: "b", text: "$2x+4$" },
              { id: "c", text: "$x+4$" },
              { id: "d", text: "$4x+4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of a rectangle", statement: "$P=2l+2w$" },
            ],
            steps: [
              { reasoning: "$P=2(x+4)+2x=2x+8+2x=4x+8$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4x+8$",
            commonErrors: ["Adding length and width once only, giving $2x+4$.", "Forgetting to double the length, giving $x+4$ or $2x+4$."],
            examinerNote: "B1 for 4x + 8.",
          },
        },
        {
          id: "mypm1-u2-expressions-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Tariq writes that $3x+3$ can be simplified to $6x$.",
          parts: [
            { label: "a", prompt: "Explain why $3x+3$ cannot be simplified to $6x$.", marks: 2 },
            { label: "b", prompt: "Write down the correct simplified form of $3x+3x$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Like terms", statement: "Only terms with exactly the same variable part can be combined; $3x$ and $3$ are not like terms." },
            ],
            steps: [
              { part: "a", reasoning: "Identify that $3x$ contains a variable and $3$ does not, so they are not like terms.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Conclude the expression is already in its simplest form; combining them would change the value (e.g. at $x=1$ both give 6, but at $x=2$ the original gives 9 while $6x$ gives 12).", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Both terms contain $x$: $3+3=6$.", working: "6x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3x$ and $3$ are not like terms, so $3x+3$ is already simplest (b) $6x$",
            commonErrors: ["Saying the expression \"cannot be simplified\" without explaining why.", "Writing $3x+3x=6$ instead of $6x$."],
            examinerNote: "In (a) a counterexample or the like-terms definition earns the second mark.",
          },
        },
        {
          id: "mypm1-u2-expressions-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $9k-4k$. Give the coefficient of $k$ in your answer.",
          response: { type: "numeric", parts: [{ label: "Coefficient of $k$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Like terms", statement: "$ax-bx=(a-b)x$" },
            ],
            steps: [
              { reasoning: "Subtract the coefficients: $9-4=5$, so the answer is $5k$ and the coefficient is 5.", working: "5k", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5k$, coefficient $5$",
            commonErrors: ["Writing $9k-4k=5$ by dropping $k$.", "Adding to get $13k$."],
            examinerNote: "B1 for 5.",
          },
        },
        {
          id: "mypm1-u2-expressions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The perimeter of a rectangle can be written in the form $px+q$, where $p$ and $q$ are numbers.",
          parts: [
            { label: "a", prompt: "A rectangle has length $(2x+1)$ cm and width $x$ cm. Work out the perimeter and write it in the form $px+q$.", marks: 2 },
            { label: "b", prompt: "Write down the value of $p$.", marks: 1 },
            { label: "c", prompt: "Write down the value of $q$.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $p$", answer: 6 },
              { label: "(c) $q$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of a rectangle", statement: "$P=2l+2w$" },
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$" },
            ],
            steps: [
              { part: "a", reasoning: "Perimeter is twice the length plus twice the width.", working: "2(2x+1)+2x=4x+2+2x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collect like terms.", working: "6x+2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The coefficient of $x$ is 6.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The constant term is 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $6x+2$ (b) $p=6$ (c) $q=2$",
            commonErrors: ["Writing the perimeter as $3x+1$ by adding length and width once.", "Expanding $2(2x+1)$ as $2x+1$."],
            examinerNote: "Follow through from (a) in (b) and (c) (ft).",
          },
        },
        {
          id: "mypm1-u2-expressions-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Amara expands $5(x+3)$ and writes $5x+3$.",
          parts: [
            { label: "a", prompt: "Explain Amara's mistake.", marks: 2 },
            { label: "b", prompt: "Write the correct expansion of $5(x+3)$.", marks: 1 },
            { label: "c", prompt: "Show, by substituting $x=2$, why Amara's answer is wrong.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Expanding a bracket", statement: "$a(b+c)=ab+ac$: every term inside the bracket is multiplied by the outside term." },
            ],
            steps: [
              { part: "a", reasoning: "Amara multiplied only $x$ by 5 and left the 3 unchanged.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "The 5 must multiply every term inside the bracket, including the 3.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Multiply both terms by 5.", working: "5x+15", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check with $x=2$: correct $5(2+3)=25$ but Amara's $5\\times2+3=13$; they differ, so her answer is wrong.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) She did not multiply the 3 by 5 (b) $5x+15$ (c) at $x=2$: $25$ vs $13$",
            commonErrors: ["Saying only that the answer is wrong without identifying which term was missed."],
            examinerNote: "In (c) a numerical check with a chosen value must be shown.",
          },
        },
      ],
    },
    {
      id: "mypm1-u2-substitution",
      title: "Substitution into expressions and formulae",
      skill: "Substitute values, including negative numbers, into expressions and formulae.",
      lesson: {
        sections: [
          {
            heading: "Substituting numbers",
            body: "To substitute, replace each letter with its value and then work out the answer using the order of operations. Put a negative value in brackets so the sign is not lost: when $x=-3$, $2x+1=2\\times(-3)+1=-5$.",
          },
          {
            heading: "Squares and negative values",
            body: "Be careful with powers. If $b=-2$ then $b^2=(-2)\\times(-2)=4$, not $-4$. Also $3a$ means $3\\times a$, so when $a=4$, $3a=12$, not $34$.",
          },
          {
            heading: "Using formulae",
            body: "A formula links quantities. For example, the Fahrenheit temperature is $F=1.8C+32$ where $C$ is the temperature in degrees Celsius. Substitute the known value, then calculate step by step.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "Replace each variable by its value in brackets, then use BIDMAS" },
          { name: "Square of a negative", statement: "$(-b)^2=b^2$" },
        ],
        workedExample: {
          problem: "Find the value of $4a-b^2$ when $a=5$ and $b=-3$.",
          solution: "Substitute: $4\\times5-(-3)^2$. Evaluate the power first: $(-3)^2=9$. Multiply: $4\\times5=20$. Subtract: $20-9=11$.",
        },
      },
      questions: [
        {
          id: "mypm1-u2-substitution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the value of $2x+1$ when $x=-3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5$" },
              { id: "b", text: "$-7$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace the variable by its value, using brackets for a negative number." },
            ],
            steps: [
              { reasoning: "Substitute $x=-3$ and use the signs rule: $2\\times(-3)=-6$.", working: "2\\times(-3)+1=-6+1=-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-5$",
            commonErrors: ["Calculating $-6-1=-7$.", "Ignoring the negative sign and getting $7$."],
            examinerNote: "B1 for -5.",
          },
        },
        {
          id: "mypm1-u2-substitution-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $3a-b^2$ when $a=4$ and $b=-2$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution and BIDMAS", statement: "Substitute using brackets, then evaluate powers before multiplication and subtraction." },
              { kind: "law", name: "Square of a negative", statement: "$(-2)^2=4$." },
            ],
            steps: [
              { reasoning: "Substitute the values, keeping the negative number in brackets.", working: "3\\times4-(-2)^2=12-4", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Writing $(-2)^2=-4$ and getting $16$.", "Reading $3a$ as $34$."],
            examinerNote: "M1 for 12 - 4 or 12 - (-2)^2 seen. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-substitution-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The formula $F=1.8C+32$ converts a temperature from degrees Celsius ($C$) to degrees Fahrenheit ($F$). Find $F$ when $C=-15$.",
          response: { type: "numeric", parts: [{ label: "$F$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution into a formula", statement: "Replace the known variable by its value and evaluate." },
              { kind: "law", name: "Signs in multiplication", statement: "A positive number times a negative number is negative." },
            ],
            steps: [
              { reasoning: "Substitute $C=-15$ into the formula.", working: "F=1.8\\times(-15)+32", marks: 1, markCode: "M" },
              { reasoning: "Multiply first: $1.8\\times15=27$ and the answer is negative.", working: "F=-27+32", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "F=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Calculating $1.8\\times(-15)=27$ (losing the sign), giving $59$.", "Adding $1.8$ and $32$ before multiplying."],
            examinerNote: "M1 for correct substitution. M1 for -27 seen. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-substitution-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A taxi company in a city charges a fare, $C$ euros, for a journey of $d$ kilometres using the formula $C=3+2.5d$.",
          parts: [
            { label: "a", prompt: "Work out the fare, in euros, for a journey of 8 km.", marks: 2 },
            { label: "b", prompt: "By how much, in euros, does the fare increase for each extra kilometre? Explain how you can tell from the formula.", marks: 2 },
            { label: "c", prompt: "A second company uses the formula $C=5+2d$. For a 10 km journey, work out how much cheaper the second company is than the first.", marks: 2 },
            { label: "d", prompt: "Ana has 40 euros. Use the first company's formula to decide whether she can pay for a 15 km journey. Justify your answer.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Fare for 8 km (euros)", answer: 23 },
              { label: "(b) Increase per extra km (euros)", answer: 2.5 },
              { label: "(c) How much cheaper (euros)", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution into a formula", statement: "Replace $d$ by the distance, then multiply before adding." },
              { kind: "property", name: "Coefficient as a rate", statement: "In $C=3+2.5d$ the coefficient of $d$ is the cost of each extra kilometre." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $d=8$.", working: "C=3+2.5\\times8=3+20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "C=23", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The coefficient of $d$ is 2.5, so each extra kilometre adds 2.5 euros.", working: "2.5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Explain: the 3 is a fixed charge and does not change with distance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Find both fares for 10 km.", working: "3+2.5\\times10=28,\\quad 5+2\\times10=25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the cheaper from the dearer.", working: "28-25=3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $d=15$.", working: "C=3+2.5\\times15=3+37.5=40.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compare with her money: 40.5 euros is more than 40 euros, so she cannot pay.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 23 euros (b) 2.5 euros; the coefficient of $d$ (c) 3 euros (d) No: the fare is 40.5 euros, which is more than 40 euros.",
            commonErrors: ["Adding before multiplying: $(3+2.5)\\times8=44$.", "In (d) saying yes because 37.5 is less than 40, forgetting the fixed charge."],
            examinerNote: "In (d) follow through from an incorrect substitution if the comparison with 40 is correct.",
          },
        },
        {
          id: "mypm1-u2-substitution-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the value of $3x+2$ when $x=4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$34$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace the variable by its value, then use the order of operations." },
            ],
            steps: [
              { reasoning: "Substitute: $3\\times4+2=12+2=14$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $14$",
            commonErrors: ["Reading $3x$ as 34 and getting 36, or writing $3+4+2=9$."],
            examinerNote: "B1 for 14.",
          },
        },
        {
          id: "mypm1-u2-substitution-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the value of $x^2$ when $x=-3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-9$" },
              { id: "b", text: "$-6$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Square of a negative", statement: "$(-3)^2=(-3)\\times(-3)=9$." },
            ],
            steps: [
              { reasoning: "Multiply $-3$ by itself; two negatives give a positive.", working: "(-3)\\times(-3)=9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $9$",
            commonErrors: ["Writing $(-3)^2=-9$ or $-6$.", "Computing $2\\times(-3)=-6$."],
            examinerNote: "B1 for 9.",
          },
        },
        {
          id: "mypm1-u2-substitution-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the value of $5a-2b$ when $a=2$ and $b=-1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$-8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace each variable by its value in brackets, then use BIDMAS." },
            ],
            steps: [
              { reasoning: "Substitute: $5\\times2-2\\times(-1)=10+2=12$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $12$",
            commonErrors: ["Writing $-2\\times(-1)=-2$ and getting 8.", "Computing $5\\times2=10$ then $10-2=8$ by treating $b$ as 1."],
            examinerNote: "B1 for 12.",
          },
        },
        {
          id: "mypm1-u2-substitution-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $2p+3q$ when $p=5$ and $q=-2$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace each variable by its value in brackets, then use the order of operations." },
              { kind: "law", name: "Signs in multiplication", statement: "A positive number times a negative number is negative." },
            ],
            steps: [
              { reasoning: "Substitute the values, keeping the negative in brackets.", working: "2\\times5+3\\times(-2)=10-6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Computing $3\\times(-2)=6$ and getting 16.", "Reading $2p$ as 25."],
            examinerNote: "M1 for 10 - 6 seen. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-substitution-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The formula $F=1.8C+32$ converts degrees Celsius to degrees Fahrenheit. Find $F$ when $C=10$.",
          response: { type: "numeric", parts: [{ label: "$F$", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution into a formula", statement: "Replace the known variable by its value and evaluate." },
            ],
            steps: [
              { reasoning: "Substitute $C=10$ and multiply before adding.", working: "F=1.8\\times10+32=18+32", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "F=50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$",
            commonErrors: ["Computing $(1.8+32)\\times10$.", "Multiplying 1.8 by 10 to get 18 then adding 32 to get 50 — correct method but check arithmetic; a wrong answer such as 59 comes from adding before multiplying."],
            examinerNote: "M1 for 18 + 32 or 1.8 x 10 seen. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-substitution-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which substitution into $4a-b^2$ is worked out correctly when $a=3$ and $b=-2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\times3-(-2)^2=12-4=8$" },
              { id: "b", text: "$4\\times3-(-2)^2=12-(-4)=16$" },
              { id: "c", text: "$4\\times3+(-2)^2=12+4=16$" },
              { id: "d", text: "$4+3-(-2)^2=7-4=3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Square of a negative", statement: "$(-2)^2=(-2)\\times(-2)=4$, and $4a$ means $4\\times a$." },
            ],
            steps: [
              { reasoning: "Substitute: $4\\times3-(-2)^2=12-4=8$. Only (a) treats $4a$ as multiplication and $(-2)^2$ as $+4$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $12-4=8$",
            commonErrors: ["Treating $4a$ as 43 or adding instead of multiplying."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u2-substitution-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A gym charges a joining fee of 20 euros plus 12 euros per month. The total cost after $m$ months is $C=20+12m$ euros. Work out the total cost for 18 months.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 236, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution into a formula", statement: "Replace $m$ by 18, multiply before adding." },
            ],
            steps: [
              { reasoning: "Substitute $m=18$.", working: "C=20+12\\times18", marks: 1, markCode: "M" },
              { reasoning: "Multiply first.", working: "12\\times18=216", marks: 1, markCode: "M" },
              { reasoning: "Add the joining fee.", working: "C=236", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$236$ euros",
            commonErrors: ["Computing $20\\times12\\times18$.", "Forgetting the joining fee and giving 216."],
            examinerNote: "M1 for 12 x 18 = 216. M1 for adding 20. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-substitution-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The perimeter of a rectangle is $P=2l+2w$. Find $P$ when $l=5$ and $w=-2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$-14$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace each variable by its value, keeping negative values in brackets." },
            ],
            steps: [
              { reasoning: "Substitute: $2\\times5+2\\times(-2)=10-4=6$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: ["Computing $2\\times(-2)=4$ and getting 14.", "Adding the values first."],
            examinerNote: "B1 for 6.",
          },
        },
        {
          id: "mypm1-u2-substitution-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "When $x=-3$, Sam substitutes into $2x+1$ and writes $2\\times-3+1$ without brackets.",
          parts: [
            { label: "a", prompt: "Explain why Sam should write $2\\times(-3)+1$ with brackets.", marks: 2 },
            { label: "b", prompt: "Work out the correct value of $2x+1$ when $x=-3$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution with negatives", statement: "A negative value must be placed in brackets so that the sign is not lost or misread." },
            ],
            steps: [
              { part: "a", reasoning: "Without brackets the expression is ambiguous and can be misread as $2\\times-3+1$ being $(2\\times-3)+1$ in the wrong order or as $2\\times(-3+1)$.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Brackets make clear that $-3$ is the value being multiplied by 2, giving $2\\times(-3)=-6$.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Evaluate: $-6+1=-5$.", working: "-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) brackets keep the negative sign attached to the value (b) $-5$",
            commonErrors: ["Saying brackets are \"just a convention\" without explaining the sign issue."],
            examinerNote: "In (a) the explanation must mention the negative sign or ambiguity (oe).",
          },
        },
        {
          id: "mypm1-u2-substitution-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the value of $7-2x$ when $x=3$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution and BIDMAS", statement: "Multiply before subtracting." },
            ],
            steps: [
              { reasoning: "Substitute and multiply first: $7-2\\times3=7-6=1$.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Computing $(7-2)\\times3=15$ by working left to right."],
            examinerNote: "B1 for 1.",
          },
        },
        {
          id: "mypm1-u2-substitution-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two phone plans are compared. Plan A costs $C_A=15+0.4d$ euros and Plan B costs $C_B=25+0.2d$ euros, where $d$ is the data used in GB.",
          parts: [
            { label: "a", prompt: "Work out the cost of Plan A for 30 GB, in euros.", marks: 1 },
            { label: "b", prompt: "Work out the cost of Plan B for 30 GB, in euros.", marks: 1 },
            { label: "c", prompt: "Work out the cost of Plan A for 60 GB, in euros.", marks: 1 },
            { label: "d", prompt: "For which data allowance is Plan B cheaper than Plan A? Substitute $d=80$ to check your reasoning.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Plan A for 30 GB", answer: 27, unit: "euros" },
              { label: "(b) Plan B for 30 GB", answer: 31, unit: "euros" },
              { label: "(c) Plan A for 60 GB", answer: 39, unit: "euros" },
              { label: "(d) Cost difference at 80 GB (B minus A)", answer: 5, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution into a formula", statement: "Replace $d$ by the data amount, multiply before adding." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $d=30$: $15+0.4\\times30=15+12$.", working: "27", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute $d=30$: $25+0.2\\times30=25+6$.", working: "31", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Substitute $d=60$: $15+0.4\\times60=15+24$.", working: "39", marks: 1, markCode: "B" },
              { part: "d", reasoning: "At $d=80$: $C_A=15+32=47$ and $C_B=25+16=41$, so B is cheaper by 6 euros — Plan B is cheaper for large data use because its per-GB rate is lower.", working: "41-47=-6", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 27 euros (b) 31 euros (c) 39 euros (d) Plan B for large data use; at 80 GB, A costs 47 and B costs 41",
            commonErrors: ["Adding before multiplying.", "Comparing only at 30 GB and concluding A is always cheaper."],
            examinerNote: "In (d) accept the difference 6 euros or the costs 47 and 41 with the correct conclusion.",
          },
        },
        {
          id: "mypm1-u2-substitution-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Ben is substituting $a=4$ into $3a+5$. He writes: \"$3a$ means $3+4=7$, so the answer is $7+5=12$.\"",
          parts: [
            { label: "a", prompt: "Explain Ben's mistake.", marks: 2 },
            { label: "b", prompt: "Work out the correct value of $3a+5$ when $a=4$.", marks: 1 },
            { label: "c", prompt: "Write down what $3a$ means when $a=4$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Term", statement: "$3a$ means $3\\times a$, not $3+a$." },
            ],
            steps: [
              { part: "a", reasoning: "Ben treated $3a$ as $3+a$. In algebra, a number next to a letter means multiplication.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "The correct reading is $3\\times4$, which is 12, not 7.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Evaluate: $3\\times4+5=12+5$.", working: "17", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3a$ means $3\\times a$, which is $3\\times4=12$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $3a$ means $3\\times a$, not $3+a$ (b) $17$ (c) $3\\times4=12$",
            commonErrors: ["Saying only that the answer is wrong without naming the multiplication."],
            examinerNote: "In (a) both the mistake and the correct meaning of $3a$ are needed.",
          },
        },
      ],
    },
  ],
};
