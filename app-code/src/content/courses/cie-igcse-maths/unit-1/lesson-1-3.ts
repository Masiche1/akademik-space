import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ciem-u1-lesson-1-3",
  code: "1-3",
  title: "Surds",
  goal: "I CAN simplify surds, expand expressions containing surds, and rationalise denominators.",
  standards: ["0580 1.4"],
  vocabulary: [
    { term: "Surd", definition: "An irrational root written exactly, such as $\\sqrt{2}$ or $\\sqrt[3]{5}$, whose decimal never ends or repeats." },
    { term: "Conjugate", definition: "For $a+\\sqrt{b}$ the conjugate is $a-\\sqrt{b}$; their product $a^2-b$ is rational." },
    { term: "Rationalising the denominator", definition: "Rewriting a fraction so its denominator contains no surds, by multiplying top and bottom by a suitable surd or conjugate." },
    { term: "Like surds", definition: "Surds with the same irrational part, e.g. $5\\sqrt{2}$ and $3\\sqrt{2}$, which can be added or subtracted like algebraic terms." },
    { term: "Simplest surd form", definition: "A surd with no square (or higher) factor left in the root, e.g. $6\\sqrt{2}$ rather than $\\sqrt{72}$." },
  ],
  concepts: [
    {
      id: "ciem-u1-simplifying-surds",
      title: "Simplifying and operating with surds",
      skill: "Simplify surds, combine like surds, and expand brackets containing surds.",
      lesson: {
        sections: [
          {
            heading: "Simplifying surds",
            body: "Use $\\sqrt{ab}=\\sqrt{a}\\times\\sqrt{b}$ and extract the largest square factor. For example $\\sqrt{72}=\\sqrt{36}\\times\\sqrt{2}=6\\sqrt{2}$.\n\nLike surds add and subtract exactly like algebraic terms: $5\\sqrt{2}+3\\sqrt{2}=8\\sqrt{2}$. Surds with different irrational parts cannot be combined: $\\sqrt{2}+\\sqrt{3}$ stays as it is.",
          },
          {
            heading: "Expanding with surds",
            body: "Expand brackets as usual, remembering $\\sqrt{a}\\times\\sqrt{a}=a$. For example $(\\sqrt{7}+2)(\\sqrt{7}-2)=7-4=3$. A product of conjugates always gives a rational answer because the surd terms cancel.",
          },
          {
            heading: "Surds in area and perimeter problems",
            body: "Geometry problems often give sides like $(\\sqrt{3}+1)$ cm. Area = length $\\times$ width; perimeter = $2(\\text{length}+\\text{width})$. Expand carefully and collect the rational and surd parts separately — the answer is usually requested in the form $a+b\\sqrt{c}$.",
          },
        ],
        keyFormulas: [
          { name: "Product rule", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$" },
          { name: "Square of a surd", statement: "$(\\sqrt{a})^2=a$" },
          { name: "Conjugate product", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$" },
        ],
        workedExample: {
          problem: "Simplify $\\sqrt{50}+\\sqrt{18}$, giving your answer in the form $a\\sqrt{2}$.",
          solution: "$\\sqrt{50}=5\\sqrt{2}$ and $\\sqrt{18}=3\\sqrt{2}$, so the sum is $5\\sqrt{2}+3\\sqrt{2}=8\\sqrt{2}$. Hence $a=8$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-simplifying-surds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $\\sqrt{72}$ in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\sqrt{2}$" },
              { id: "b", text: "$18\\sqrt{2}$" },
              { id: "c", text: "$6\\sqrt{2}$" },
              { id: "d", text: "$2\\sqrt{36}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$." },
            ],
            steps: [
              { reasoning: "Extract the largest square factor: $72=36\\times2$.", working: "\\sqrt{72}=\\sqrt{36}\\times\\sqrt{2}=6\\sqrt{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $6\\sqrt{2}$",
            commonErrors: ["Splitting as $\\sqrt{8}\\times\\sqrt{9}$ and stopping early.", "Choosing $2\\sqrt{36}$, which equals 12, not $\\sqrt{72}\\approx8.49$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Show that $\\sqrt{50}+\\sqrt{18}$ can be written in the form $a\\sqrt{2}$, where $a$ is an integer. Enter the value of $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$." },
              { kind: "principle", name: "Like surds", statement: "Surds with the same irrational part add like algebraic terms." },
            ],
            steps: [
              { reasoning: "Simplify each surd using square factors.", working: "\\sqrt{50}=5\\sqrt{2},\\quad \\sqrt{18}=3\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Add the like surds and read off $a$.", working: "5\\sqrt{2}+3\\sqrt{2}=8\\sqrt{2}\\Rightarrow a=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\sqrt{2}$, so $a=8$",
            commonErrors: ["Adding under one root: $\\sqrt{50}+\\sqrt{18}=\\sqrt{68}$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $(\\sqrt{7}+2)(\\sqrt{7}-2)$, giving your answer as an integer.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference of two squares", statement: "$(a+b)(a-b)=a^2-b^2$; here $a=\\sqrt{7}$, $b=2$." },
              { kind: "property", name: "Square of a surd", statement: "$(\\sqrt{7})^2=7$." },
            ],
            steps: [
              { reasoning: "Recognise a conjugate pair, or expand all four terms.", working: "(\\sqrt{7})^2-2^2", marks: 1, markCode: "M" },
              { reasoning: "Use $(\\sqrt{7})^2=7$.", working: "7-4", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Writing $(\\sqrt{7})^2=\\sqrt{49}$ or leaving $\\sqrt{7}\\times\\sqrt{7}=\\sqrt{14}$.", "Sign error giving $7+4=11$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangle has width $(\\sqrt{3}+1)$ cm and length $(\\sqrt{3}+3)$ cm.",
          parts: [
            { label: "a", prompt: "Show that the area of the rectangle is $(6+4\\sqrt{3})$ cm$^2$.", marks: 3 },
            { label: "b", prompt: "Work out the perimeter of the rectangle in the form $a+b\\sqrt{3}$, where $a$ and $b$ are integers.", marks: 2 },
            { label: "c", prompt: "A different rectangle has area $(6+4\\sqrt{3})$ cm$^2$ and width $(\\sqrt{3}+1)$ cm. By rationalising a denominator, show that its length is $(3+\\sqrt{3})$ cm.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Surds multiplied", statement: "$\\sqrt{a}\\times\\sqrt{a}=a$." },
              { kind: "formula", name: "Conjugate pair", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$; here $(\\sqrt{3}+1)(\\sqrt{3}-1)=2$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply length by width, expanding all four terms.", working: "(\\sqrt{3}+1)(\\sqrt{3}+3)=3+3\\sqrt{3}+\\sqrt{3}+3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use $\\sqrt{3}\\times\\sqrt{3}=3$ and collect like terms.", working: "=6+4\\sqrt{3}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result with units.", working: "(6+4\\sqrt{3})\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Perimeter is twice the sum of length and width.", working: "2\\left[(\\sqrt{3}+1)+(\\sqrt{3}+3)\\right]=2(2\\sqrt{3}+4)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand and identify $a$ and $b$.", working: "=8+4\\sqrt{3}\\Rightarrow a=8,\\ b=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Length = area $\\div$ width.", working: "\\frac{6+4\\sqrt{3}}{\\sqrt{3}+1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply top and bottom by the conjugate $\\sqrt{3}-1$.", working: "\\frac{(6+4\\sqrt{3})(\\sqrt{3}-1)}{(\\sqrt{3}+1)(\\sqrt{3}-1)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Denominator becomes $3-1=2$; numerator expands to $6\\sqrt{3}-6+12-4\\sqrt{3}=6+2\\sqrt{3}$.", working: "\\frac{6+2\\sqrt{3}}{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide each term by 2.", working: "=3+\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6+4\\sqrt{3}$ cm$^2$ (b) $a=8$, $b=4$ (c) length $=3+\\sqrt{3}$ cm",
            commonErrors: ["Writing $\\sqrt{3}\\times\\sqrt{3}=\\sqrt{6}$ or $\\sqrt{9}$.", "Multiplying only the numerator by the conjugate.", "Forgetting the factor 2 in the perimeter."],
            examinerNote: "In (a) all expansion steps must be seen. In (c) accept the unsimplified fraction as an intermediate step.",
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $\\sqrt{48}$ in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\sqrt{6}$" },
              { id: "b", text: "$16\\sqrt{3}$" },
              { id: "c", text: "$2\\sqrt{12}$" },
              { id: "d", text: "$4\\sqrt{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
            ],
            steps: [
              { reasoning: "Extract the largest square factor: $48=16\\times3$.", working: "\\sqrt{48}=\\sqrt{16}\\times\\sqrt{3}=4\\sqrt{3}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $4\\sqrt{3}$",
            commonErrors: ["Stopping at $2\\sqrt{12}$, which still contains a square factor.", "Writing $\\sqrt{48}=\\sqrt{16}\\times\\sqrt{3}$ then miscomputing as $16\\sqrt{3}$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Simplify $\\sqrt{20}+\\sqrt{45}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{65}$" },
              { id: "b", text: "$5\\sqrt{5}$" },
              { id: "c", text: "$5\\sqrt{10}$" },
              { id: "d", text: "65" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
              { kind: "principle", name: "Like surds", statement: "Surds with the same irrational part add and subtract like algebraic terms." },
            ],
            steps: [
              { reasoning: "$\\sqrt{20}=2\\sqrt{5}$ and $\\sqrt{45}=3\\sqrt{5}$; like surds add.", working: "2\\sqrt{5}+3\\sqrt{5}=5\\sqrt{5}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $5\\sqrt{5}$",
            commonErrors: ["Adding under one root to get $\\sqrt{65}$.", "Multiplying the surds instead of adding."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Expand $(3+\\sqrt{5})^2$, giving your answer in the form $a+b\\sqrt{5}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9+6\\sqrt{5}$" },
              { id: "b", text: "$14+6\\sqrt{5}$" },
              { id: "c", text: "$14+\\sqrt{30}$" },
              { id: "d", text: "19" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(a+b)^2=a^2+2ab+b^2$; here $(\\sqrt{5})^2=5$." },
            ],
            steps: [
              { reasoning: "Expand all three terms: $9+6\\sqrt{5}+5$.", working: "(3+\\sqrt{5})^2=9+2\\times3\\times\\sqrt{5}+5=14+6\\sqrt{5}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $14+6\\sqrt{5}$",
            commonErrors: ["Writing $(3+\\sqrt{5})^2=9+5=14$ and losing the middle term.", "Treating $2\\times3\\times\\sqrt{5}$ as $\\sqrt{30}$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\sqrt{200}$ in its simplest form $a\\sqrt{b}$, where $a$ and $b$ are integers with $b$ square-free. Enter $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }, { label: "b", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
            ],
            steps: [
              { reasoning: "Extract the largest square factor: $200=100\\times2$.", working: "\\sqrt{200}=\\sqrt{100}\\times\\sqrt{2}=10\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Read off $a$ and $b$.", working: "a=10,\\ b=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\sqrt{2}$, so $a=10$, $b=2$",
            commonErrors: ["Writing $5\\sqrt{8}$ — $b=8$ is not square-free.", "Splitting the factor incorrectly."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $3\\sqrt{12}-\\sqrt{27}$, giving your answer in the form $a\\sqrt{3}$ where $a$ is an integer. Enter the value of $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
              { kind: "principle", name: "Like surds", statement: "Surds with the same irrational part add and subtract like algebraic terms." },
            ],
            steps: [
              { reasoning: "Simplify each surd.", working: "3\\sqrt{12}=6\\sqrt{3},\\quad \\sqrt{27}=3\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the like surds and read off $a$.", working: "6\\sqrt{3}-3\\sqrt{3}=3\\sqrt{3}\\Rightarrow a=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\sqrt{3}$, so $a=3$",
            commonErrors: ["Writing $\\sqrt{12}=3\\sqrt{2}$ instead of $2\\sqrt{3}$.", "Adding the surds instead of subtracting."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A square has side length $(\\sqrt{5}+1)$ cm. Find its area, giving your answer in the form $a+b\\sqrt{5}$ where $a$ and $b$ are integers. Enter $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }, { label: "b", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Square of a surd", statement: "$(\\sqrt{a})^2=a$ and $(\\sqrt{a}+b)(\\sqrt{a}-b)=a-b^2$." },
            ],
            steps: [
              { reasoning: "Area = side squared; expand $(\\sqrt{5}+1)^2$.", working: "(\\sqrt{5}+1)^2=5+2\\sqrt{5}+1", marks: 1, markCode: "M" },
              { reasoning: "Use $(\\sqrt{5})^2=5$ and collect like terms.", working: "=6+2\\sqrt{5}", marks: 1, markCode: "M" },
              { reasoning: "Read off $a$ and $b$.", working: "a=6,\\ b=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Area $=6+2\\sqrt{5}$ cm$^2$, so $a=6$, $b=2$",
            commonErrors: ["Writing $(\\sqrt{5}+1)^2=5+1=6$ and losing the middle term.", "Sign error giving $6-2\\sqrt{5}$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangle has length $(2\\sqrt{3}+1)$ cm and width $(2\\sqrt{3}-1)$ cm.",
          parts: [
            { label: "a", prompt: "Show that the area of the rectangle is $11$ cm$^2$.", marks: 3 },
            { label: "b", prompt: "Find the perimeter of the rectangle, giving your answer in simplest surd form.", marks: 2 },
            { label: "c", prompt: "Find the area of a square with side $2\\sqrt{3}$ cm.", marks: 2 },
            { label: "d", prompt: "Hence find the difference between the area of the square and the area of the rectangle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Square of a surd", statement: "$(\\sqrt{a})^2=a$ and $(\\sqrt{a}+b)(\\sqrt{a}-b)=a-b^2$." },
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply length by width and expand, using $(2\\sqrt{3})^2=12$.", working: "(2\\sqrt{3}+1)(2\\sqrt{3}-1)=12-1=11", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the area with units.", working: "11\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Confirm the conjugate structure: the surd terms cancel.", working: "(a+b)(a-b)=a^2-b^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perimeter = $2(\\text{length}+\\text{width})=2(4\\sqrt{3})$.", working: "2[(2\\sqrt{3}+1)+(2\\sqrt{3}-1)]=8\\sqrt{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the perimeter.", working: "8\\sqrt{3}\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area of a square with side $2\\sqrt{3}$: $(2\\sqrt{3})^2=4\\times3$.", working: "=12\\text{ cm}^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the square's area.", working: "12\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Difference = $12-11$.", working: "=1\\text{ cm}^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the difference.", working: "1\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $11$ cm$^2$ (b) $8\\sqrt{3}$ cm (c) $12$ cm$^2$ (d) $1$ cm$^2$",
            commonErrors: ["Writing $(2\\sqrt{3})^2=4\\sqrt{3}$ or $2\\sqrt{9}$ instead of $12$.", "Forgetting the factor 2 in the perimeter."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $\\sqrt{2}+\\sqrt{3}$ cannot be simplified further, but $\\sqrt{8}+\\sqrt{18}$ can.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like surds", statement: "Surds with the same irrational part add and subtract like algebraic terms." },
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
            ],
            steps: [
              { reasoning: "$\\sqrt{2}$ and $\\sqrt{3}$ have different irrational parts, so they are not like surds.", marks: 1, markCode: "M" },
              { reasoning: "Therefore $\\sqrt{2}+\\sqrt{3}$ has no like terms to combine.", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{8}=2\\sqrt{2}$ and $\\sqrt{18}=3\\sqrt{2}$ share the same irrational part, combining to $5\\sqrt{2}$.", working: "\\sqrt{8}+\\sqrt{18}=2\\sqrt{2}+3\\sqrt{2}=5\\sqrt{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unlike surds cannot combine; $\\sqrt{8}+\\sqrt{18}=5\\sqrt{2}$",
            commonErrors: ["Claiming $\\sqrt{2}+\\sqrt{3}=\\sqrt{5}$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Simplify $\\sqrt{72}-\\sqrt{50}+\\sqrt{8}$, giving your answer in the form $a\\sqrt{2}$ where $a$ is an integer. Find $a$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
              { kind: "principle", name: "Like surds", statement: "Surds with the same irrational part add and subtract like algebraic terms." },
            ],
            steps: [
              { reasoning: "Simplify each surd using square factors.", working: "\\sqrt{72}=6\\sqrt{2},\\quad \\sqrt{50}=5\\sqrt{2},\\quad \\sqrt{8}=2\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Rewrite the expression in like surds.", working: "6\\sqrt{2}-5\\sqrt{2}+2\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Combine the coefficients: $6-5+2=3$.", working: "=3\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Read off $a$.", working: "a=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\sqrt{2}$, so $a=3$",
            commonErrors: ["Sign error: computing $6-5-2=1$ instead of $6-5+2=3$.", "Simplifying $\\sqrt{8}$ as $4\\sqrt{2}$ instead of $2\\sqrt{2}$."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A triangle has base $(\\sqrt{7}+1)$ cm and perpendicular height $(\\sqrt{7}-1)$ cm. (a) Show that its area is $3$ cm$^2$. (b) A student claims the area must be greater than $4$ cm$^2$ because both dimensions are 'large'. Explain whether the student is correct.",
          parts: [
            { label: "a", prompt: "Show that its area is $3$ cm$^2$.", marks: 3 },
            { label: "b", prompt: "Explain whether the student is correct.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Square of a surd", statement: "$(\\sqrt{a})^2=a$ and $(\\sqrt{a}+b)(\\sqrt{a}-b)=a-b^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Area = $\\frac{1}{2}\\times\\text{base}\\times\\text{height}$.", working: "A=\\frac{1}{2}(\\sqrt{7}+1)(\\sqrt{7}-1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use the conjugate product $(\\sqrt{7})^2-1^2=7-1=6$.", working: "=\\frac{1}{2}\\times6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the area.", working: "=3\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The student's claim is wrong: the product of the dimensions is $6$, not more than $8$.", working: "(\\sqrt{7}+1)(\\sqrt{7}-1)=6<8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain that the difference of squares gives a small rational result despite the surds.", working: "7-1=6,\\ A=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ cm$^2$ (b) the student is wrong; the area is $3$ cm$^2$",
            commonErrors: ["Multiplying out and keeping surd terms instead of using the conjugate shortcut.", "In (b) agreeing with the student without computing the actual area."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $(\\sqrt{3}+\\sqrt{6})(\\sqrt{3}-\\sqrt{6})$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "$-2\\sqrt{3}$" },
              { id: "c", text: "$2\\sqrt{3}$" },
              { id: "d", text: "-3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Square of a surd", statement: "$(\\sqrt{a})^2=a$ and $(\\sqrt{a}+b)(\\sqrt{a}-b)=a-b^2$." },
            ],
            steps: [
              { reasoning: "This is a conjugate pair: $(\\sqrt{3})^2-(\\sqrt{6})^2=3-6$.", working: "3-6=-3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $-3$",
            commonErrors: ["Computing $3-6=3$ with a sign slip.", "Trying to combine $\\sqrt{3}-\\sqrt{6}$ as a single surd."],
          },
        },
        {
          id: "ciem-u1-simplifying-surds-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the exact value of $\\sqrt{6}\\times\\sqrt{24}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\sqrt{6}$" },
              { id: "b", text: "144" },
              { id: "c", text: "12" },
              { id: "d", text: "$\\sqrt{30}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$ for $a,b\\ge0$; extract the largest square factor." },
            ],
            steps: [
              { reasoning: "$\\sqrt{6}\\times\\sqrt{24}=\\sqrt{144}=12$.", working: "\\sqrt{6\\times24}=\\sqrt{144}=12", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $12$",
            commonErrors: ["Adding under the root: $\\sqrt{6+24}=\\sqrt{30}$.", "Writing $144$ without taking the root."],
          },
        },
      ],
    },
    {
      id: "ciem-u1-rationalising",
      title: "Rationalising denominators",
      skill: "Remove surds from denominators using conjugate pairs and express results in exact form.",
      lesson: {
        sections: [
          {
            heading: "Single surd denominators",
            body: "To remove $\\sqrt{b}$ from a denominator, multiply numerator and denominator by $\\sqrt{b}$. For example $\\frac{4}{\\sqrt{5}}=\\frac{4\\sqrt{5}}{5}$. This works because $\\sqrt{b}\\times\\sqrt{b}=b$ is rational.",
          },
          {
            heading: "Conjugate denominators",
            body: "For a denominator $a+\\sqrt{b}$, multiply top and bottom by the **conjugate** $a-\\sqrt{b}$. The denominator becomes $a^2-b$, which is rational.\n\nFor example $\\frac{4}{2+\\sqrt{3}}=\\frac{4(2-\\sqrt{3})}{(2+\\sqrt{3})(2-\\sqrt{3})}=\\frac{8-4\\sqrt{3}}{4-3}=8-4\\sqrt{3}$.",
          },
          {
            heading: "Results in the form $\\frac{p+q\\sqrt{r}}{s}$",
            body: "Examiners often ask for the answer in a specified form such as $\\frac{p+q\\sqrt{2}}{7}$. Rationalise fully, collect the rational and surd terms in the numerator, and simplify the fraction — then read off $p$, $q$ and the denominator.",
          },
        ],
        keyFormulas: [
          { name: "Single surd", statement: "$\\frac{a}{\\sqrt{b}}=\\frac{a\\sqrt{b}}{b}$" },
          { name: "Conjugate product", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$" },
        ],
        workedExample: {
          problem: "Rationalise the denominator of $\\frac{3}{2+\\sqrt{2}}$, giving your answer in simplest form.",
          solution: "Multiply top and bottom by $2-\\sqrt{2}$: $\\frac{3(2-\\sqrt{2})}{(2+\\sqrt{2})(2-\\sqrt{2})}=\\frac{6-3\\sqrt{2}}{4-2}=\\frac{6-3\\sqrt{2}}{2}=3-\\frac{3}{2}\\sqrt{2}$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-rationalising-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rationalise the denominator of $\\frac{1}{\\sqrt{5}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{5}$" },
              { id: "b", text: "$\\frac{\\sqrt{5}}{5}$" },
              { id: "c", text: "$\\frac{5}{\\sqrt{5}}$" },
              { id: "d", text: "$\\sqrt{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{a}\\times\\sqrt{a}=a$." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by $\\sqrt{5}$; the denominator becomes 5.", working: "\\frac{\\sqrt{5}}{\\sqrt{5}\\times\\sqrt{5}}=\\frac{\\sqrt{5}}{5}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{\\sqrt{5}}{5}$",
            commonErrors: ["Multiplying only the numerator.", "Writing $\\frac{1}{5}$ by cancelling the surds."],
          },
        },
        {
          id: "ciem-u1-rationalising-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rationalise the denominator of $\\frac{4}{2+\\sqrt{3}}$, giving your answer in the form $a+b\\sqrt{3}$ where $a$ and $b$ are integers. Enter $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: -4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conjugate product", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$; here $(2+\\sqrt{3})(2-\\sqrt{3})=1$." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by the conjugate $2-\\sqrt{3}$.", working: "\\frac{4(2-\\sqrt{3})}{(2+\\sqrt{3})(2-\\sqrt{3})}", marks: 1, markCode: "M" },
              { reasoning: "Denominator is $4-3=1$; expand the numerator.", working: "4(2-\\sqrt{3})=8-4\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8-4\\sqrt{3}$, so $a=8$, $b=-4$",
            commonErrors: ["Multiplying by $2+\\sqrt{3}$ instead of the conjugate.", "Sign error on $b$ — the answer is $8-4\\sqrt{3}$, not $8+4\\sqrt{3}$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Express $\\frac{2+\\sqrt{3}}{2-\\sqrt{3}}$ in the form $a+b\\sqrt{3}$ where $a$ and $b$ are integers. Enter $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conjugate product", statement: "$(2+\\sqrt{3})(2+\\sqrt{3})$ in the denominator position gives $(2-\\sqrt{3})(2+\\sqrt{3})=4-3=1$." },
              { kind: "property", name: "Square of a binomial", statement: "$(2+\\sqrt{3})^2=4+4\\sqrt{3}+3=7+4\\sqrt{3}$." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by the conjugate of the denominator, $2+\\sqrt{3}$.", working: "\\frac{(2+\\sqrt{3})(2+\\sqrt{3})}{(2-\\sqrt{3})(2+\\sqrt{3})}", marks: 1, markCode: "M" },
              { reasoning: "Denominator is $4-3=1$; expand the numerator.", working: "(2+\\sqrt{3})^2=7+4\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "State $a$ and $b$.", working: "a=7,\\ b=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7+4\\sqrt{3}$",
            commonErrors: ["Multiplying numerator and denominator by $2-\\sqrt{3}$, which does not rationalise.", "Expanding $(2+\\sqrt{3})^2$ as $4+3=7$ and losing the middle term."],
          },
        },
        {
          id: "ciem-u1-rationalising-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A fraction has denominator $(3+\\sqrt{2})$.",
          parts: [
            { label: "a", prompt: "Write down the conjugate of $3+\\sqrt{2}$, and explain why multiplying by it removes the surd from the denominator.", marks: 2 },
            { label: "b", prompt: "Rationalise the denominator of $\\frac{5}{3+\\sqrt{2}}$, giving your answer in the form $\\frac{p+q\\sqrt{2}}{7}$ where $p$ and $q$ are integers. Find $p$ and $q$.", marks: 4 },
            { label: "c", prompt: "Hence write $\\frac{5}{3+\\sqrt{2}}$ as a decimal correct to 2 decimal places.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) p", answer: 15 },
              { label: "(b) q", answer: -5 },
              { label: "(c)", answer: 1.13, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$." },
            ],
            steps: [
              { part: "a", reasoning: "State the conjugate.", working: "3-\\sqrt{2}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Explain the product is rational: $(3+\\sqrt{2})(3-\\sqrt{2})=9-2=7$.", working: "9-2=7", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply numerator and denominator by $3-\\sqrt{2}$.", working: "\\frac{5(3-\\sqrt{2})}{(3+\\sqrt{2})(3-\\sqrt{2})}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Denominator is $9-2=7$; expand the numerator.", working: "\\frac{15-5\\sqrt{2}}{7}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Identify $p$ and $q$.", working: "p=15,\\ q=-5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Confirm the fraction is in lowest terms (5, 15 share no factor with 7 denominator issues).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate the exact value approximately: $\\sqrt{2}\\approx1.4142$.", working: "\\frac{15-5(1.4142)}{7}=\\frac{15-7.071}{7}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute the numerator.", working: "\\frac{7.929}{7}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide and round to 2 d.p.", working: "=1.13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3-\\sqrt{2}$; product $=7$ (b) $p=15$, $q=-5$ (c) $1.13$",
            commonErrors: ["Writing $q=5$ instead of $q=-5$.", "Forgetting the denominator becomes exactly 7.", "Rounding $1.1327$ to $1.1$ instead of $1.13$."],
            examinerNote: "Part (c) requires the use of the exact form from (b); a direct calculator evaluation is acceptable if the exact form is also seen.",
          },
        },
        {
          id: "ciem-u1-rationalising-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rationalise the denominator of $\\frac{3}{\\sqrt{7}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{7\\sqrt{7}}$" },
              { id: "b", text: "$\\frac{21}{\\sqrt{7}}$" },
              { id: "c", text: "$\\frac{3\\sqrt{7}}{49}$" },
              { id: "d", text: "$\\frac{3\\sqrt{7}}{7}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{b}\\times\\sqrt{b}=b$; multiply top and bottom by $\\sqrt{b}$ to clear a single surd." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by $\\sqrt{7}$; the denominator becomes $7$.", working: "\\frac{3\\sqrt{7}}{\\sqrt{7}\\times\\sqrt{7}}=\\frac{3\\sqrt{7}}{7}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\frac{3\\sqrt{7}}{7}$",
            commonErrors: ["Multiplying only the numerator.", "Dividing by $7$ twice to get $\\frac{3\\sqrt{7}}{49}$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the conjugate of $5-\\sqrt{2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5+\\sqrt{2}$" },
              { id: "b", text: "$5\\sqrt{2}$" },
              { id: "c", text: "$5+\\sqrt{2}$" },
              { id: "d", text: "$\\sqrt{2}-5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "The conjugate changes the sign of the surd term only.", working: "5-\\sqrt{2}\\ \\longrightarrow\\ 5+\\sqrt{2}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $5+\\sqrt{2}$",
            commonErrors: ["Changing the sign of the whole expression to get $-5+\\sqrt{2}$.", "Multiplying instead of changing the sign."],
          },
        },
        {
          id: "ciem-u1-rationalising-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Rationalise the denominator of $\\frac{1}{\\sqrt{6}-\\sqrt{2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\sqrt{6}+\\sqrt{2}$" },
              { id: "d", text: "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by the conjugate $\\sqrt{6}+\\sqrt{2}$; the denominator becomes $6-2=4$.", working: "\\frac{\\sqrt{6}+\\sqrt{2}}{(\\sqrt{6}-\\sqrt{2})(\\sqrt{6}+\\sqrt{2})}=\\frac{\\sqrt{6}+\\sqrt{2}}{4}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\frac{\\sqrt{6}+\\sqrt{2}}{4}$",
            commonErrors: ["Multiplying by $\\sqrt{6}-\\sqrt{2}$ again, which does not rationalise.", "Forgetting the denominator becomes $4$, not $1$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rationalise the denominator of $\\frac{6}{\\sqrt{3}}$, giving your answer in the form $a\\sqrt{3}$ where $a$ is an integer. Enter the value of $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{b}\\times\\sqrt{b}=b$; multiply top and bottom by $\\sqrt{b}$ to clear a single surd." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by $\\sqrt{3}$.", working: "\\frac{6\\sqrt{3}}{3}", marks: 1, markCode: "M" },
              { reasoning: "Simplify and read off $a$.", working: "=2\\sqrt{3}\\Rightarrow a=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{3}$, so $a=2$",
            commonErrors: ["Writing $6\\sqrt{3}$ without dividing by $3$.", "Cancelling $6$ and $3$ incorrectly to get $a=3$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rationalise the denominator of $\\frac{4}{1+\\sqrt{3}}$, giving your answer in the form $a+b\\sqrt{3}$ where $a$ and $b$ are integers. Enter $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }, { label: "b", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by the conjugate $1-\\sqrt{3}$.", working: "\\frac{4(1-\\sqrt{3})}{(1+\\sqrt{3})(1-\\sqrt{3})}", marks: 1, markCode: "M" },
              { reasoning: "Denominator is $1-3=-2$; expand the numerator.", working: "\\frac{4-4\\sqrt{3}}{-2}", marks: 1, markCode: "M" },
              { reasoning: "Divide each term by $-2$ and read off $a$ and $b$.", working: "=-2+2\\sqrt{3}\\Rightarrow a=-2,\\ b=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2+2\\sqrt{3}$, so $a=-2$, $b=2$",
            commonErrors: ["Sign error: writing $2-2\\sqrt{3}$ instead of $-2+2\\sqrt{3}$.", "Using denominator $1+3=4$ instead of $1-3=-2$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Express $\\frac{5}{2-\\sqrt{3}}$ in the form $a+b\\sqrt{3}$ where $a$ and $b$ are integers. Enter $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }, { label: "b", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by the conjugate $2+\\sqrt{3}$.", working: "\\frac{5(2+\\sqrt{3})}{(2-\\sqrt{3})(2+\\sqrt{3})}", marks: 1, markCode: "M" },
              { reasoning: "Denominator is $4-3=1$; expand the numerator.", working: "=10+5\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Read off $a$ and $b$.", working: "a=10,\\ b=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10+5\\sqrt{3}$",
            commonErrors: ["Multiplying by $2-\\sqrt{3}$ instead of its conjugate.", "Expanding $(2-\\sqrt{3})(2+\\sqrt{3})$ as $4+3=7$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q11",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A fraction has denominator $(4+\\sqrt{5})$.",
          parts: [
            { label: "a", prompt: "Write down the conjugate of $4+\\sqrt{5}$ and the value of $(4+\\sqrt{5})(4-\\sqrt{5})$.", marks: 2 },
            { label: "b", prompt: "Rationalise the denominator of $\\frac{7}{4+\\sqrt{5}}$, giving your answer in the form $\\frac{p+q\\sqrt{5}}{11}$ where $p$ and $q$ are integers. Find $p$ and $q$.", marks: 3 },
            { label: "c", prompt: "Hence write $\\frac{7}{4+\\sqrt{5}}$ as a decimal correct to 2 decimal places.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) p", answer: 28 },
              { label: "(b) q", answer: -7 },
              { label: "(c)", answer: 1.12, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { part: "a", reasoning: "Write down the conjugate of $4+\\sqrt{5}$.", working: "4-\\sqrt{5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute the product: $(4+\\sqrt{5})(4-\\sqrt{5})=16-5$.", working: "=11", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply numerator and denominator of $\\frac{7}{4+\\sqrt{5}}$ by $4-\\sqrt{5}$.", working: "\\frac{7(4-\\sqrt{5})}{11}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand the numerator and identify $p$ and $q$.", working: "\\frac{28-7\\sqrt{5}}{11}\\Rightarrow p=28,\\ q=-7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Confirm the fraction is in simplest terms.", working: "28,7,11\\text{ share no common factor}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate approximately using $\\sqrt{5}\\approx2.236$.", working: "\\frac{28-7(2.236)}{11}=\\frac{28-15.652}{11}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide and round to 2 d.p.", working: "=1.12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) conjugate $4-\\sqrt{5}$, product $11$ (b) $p=28$, $q=-7$ (c) $1.12$",
            commonErrors: ["Writing $q=7$ instead of $q=-7$.", "Forgetting the denominator becomes $11$, not $16+5=21$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why multiplying the numerator and denominator by the conjugate removes the surd from the denominator.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "For a denominator $a+\\sqrt{b}$, the conjugate is $a-\\sqrt{b}$.", marks: 1, markCode: "M" },
              { reasoning: "Their product is $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$, which is rational.", marks: 1, markCode: "M" },
              { reasoning: "So after multiplication the denominator contains no surd, even though the numerator may still contain one.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The conjugate product $a^2-b$ is rational, so the denominator is surd-free.",
            commonErrors: ["Claiming the numerator also becomes rational — only the denominator is guaranteed rational."],
          },
        },
        {
          id: "ciem-u1-rationalising-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rationalise the denominator of $\\frac{\\sqrt{3}+1}{\\sqrt{3}-1}$, giving your answer in the form $a+b\\sqrt{3}$ where $a$ and $b$ are integers. Find $a$ and $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by the conjugate $\\sqrt{3}+1$.", working: "\\frac{(\\sqrt{3}+1)(\\sqrt{3}+1)}{(\\sqrt{3}-1)(\\sqrt{3}+1)}", marks: 1, markCode: "M" },
              { reasoning: "The denominator is $3-1=2$.", working: "(\\sqrt{3})^2-1^2=2", marks: 1, markCode: "M" },
              { reasoning: "Expand the numerator: $(\\sqrt{3}+1)^2=3+2\\sqrt{3}+1=4+2\\sqrt{3}$.", working: "4+2\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2 and read off $a$ and $b$.", working: "\\frac{4+2\\sqrt{3}}{2}=2+\\sqrt{3}\\Rightarrow a=2,\\ b=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2+\\sqrt{3}$, so $a=2$, $b=1$",
            commonErrors: ["Expanding $(\\sqrt{3}+1)^2$ as $3+1=4$ and losing the middle term.", "Dividing only the rational part of the numerator by 2."],
          },
        },
        {
          id: "ciem-u1-rationalising-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Show that $\\frac{1}{\\sqrt{n+1}+\\sqrt{n}}=\\sqrt{n+1}-\\sqrt{n}$ for positive integer $n$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "Multiply numerator and denominator by the conjugate $\\sqrt{n+1}-\\sqrt{n}$.", working: "\\frac{\\sqrt{n+1}-\\sqrt{n}}{(\\sqrt{n+1}+\\sqrt{n})(\\sqrt{n+1}-\\sqrt{n})}", marks: 1, markCode: "M" },
              { reasoning: "The denominator becomes a difference of squares.", working: "(n+1)-n", marks: 1, markCode: "M" },
              { reasoning: "Simplify the denominator to 1.", working: "=1", marks: 1, markCode: "M" },
              { reasoning: "The numerator is unchanged.", working: "\\sqrt{n+1}-\\sqrt{n}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the identity.", working: "\\frac{1}{\\sqrt{n+1}+\\sqrt{n}}=\\sqrt{n+1}-\\sqrt{n}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{\\sqrt{n+1}+\\sqrt{n}}=\\sqrt{n+1}-\\sqrt{n}$",
            commonErrors: ["Multiplying the numerator by the conjugate as well — the numerator is just 1.", "Writing the denominator as $(n+1)+n$ instead of $(n+1)-n$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rationalise the denominator of $\\frac{2}{3-\\sqrt{2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6+2\\sqrt{2}$" },
              { id: "b", text: "$\\frac{6+2\\sqrt{2}}{7}$" },
              { id: "c", text: "$\\frac{2(3-\\sqrt{2})}{7}$" },
              { id: "d", text: "$\\frac{6-2\\sqrt{2}}{7}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "Multiply by the conjugate $3+\\sqrt{2}$; the denominator becomes $9-2=7$.", working: "\\frac{2(3+\\sqrt{2})}{7}=\\frac{6+2\\sqrt{2}}{7}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\frac{6+2\\sqrt{2}}{7}$",
            commonErrors: ["Multiplying by $3-\\sqrt{2}$ again, giving choice (d)'s numerator.", "Using denominator $9+2=11$."],
          },
        },
        {
          id: "ciem-u1-rationalising-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the exact value of $\\frac{4}{\\sqrt{5}-1}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{5}-1$" },
              { id: "b", text: "$\\frac{\\sqrt{5}+1}{4}$" },
              { id: "c", text: "$\\sqrt{5}+1$" },
              { id: "d", text: "$4\\sqrt{5}+4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conjugate", statement: "The conjugate of $a+\\sqrt{b}$ is $a-\\sqrt{b}$; $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$ is rational." },
            ],
            steps: [
              { reasoning: "Multiply by the conjugate $\\sqrt{5}+1$; the denominator becomes $5-1=4$.", working: "\\frac{4(\\sqrt{5}+1)}{4}=\\sqrt{5}+1", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\sqrt{5}+1$",
            commonErrors: ["Forgetting to multiply the numerator by 4 as well, giving choice (d).", "Using denominator $5+1=6$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u1-surds-notes",
      title: "Surds — revision notes",
      summary: "Simplifying surds, expanding with surds, and rationalising denominators with worked examples.",
      sections: [
        {
          heading: "What a surd is",
          body: "A surd is an exact irrational root: $\\sqrt{2}$, $\\sqrt{50}$, $\\sqrt[3]{5}$. We keep surds exact because decimals would be approximations.\n\n**Simplest form** means no square factor remains inside the root: $\\sqrt{72}=6\\sqrt{2}$, never $\\sqrt{72}$ or $2\\sqrt{18}$. Always extract the **largest** square factor.",
        },
        {
          heading: "Operating with surds",
          body: "- Like surds combine: $5\\sqrt{2}+3\\sqrt{2}=8\\sqrt{2}$.\n- Unlike surds do not: $\\sqrt{2}+\\sqrt{3}$ cannot be simplified.\n- $\\sqrt{a}\\times\\sqrt{a}=a$ — this is the single most-used fact.\n- $(\\sqrt{a})^2=a$, and $(\\sqrt{a}+b)(\\sqrt{a}-b)=a-b^2$ (conjugate pair gives a rational).\n\n**Worked example.** Simplify $\\sqrt{50}+\\sqrt{18}$.\n\n$\\sqrt{50}=5\\sqrt{2}$, $\\sqrt{18}=3\\sqrt{2}$, sum $=8\\sqrt{2}$.",
        },
        {
          heading: "Rationalising denominators",
          body: "Never leave a surd in a denominator in an exact answer.\n\n- Denominator $\\sqrt{b}$: multiply top and bottom by $\\sqrt{b}$. $\\frac{4}{\\sqrt{5}}=\\frac{4\\sqrt{5}}{5}$.\n- Denominator $a+\\sqrt{b}$: multiply by the conjugate $a-\\sqrt{b}$. The denominator becomes $a^2-b$.\n\n**Worked example.** Rationalise $\\frac{4}{2+\\sqrt{3}}$.\n\n$\\frac{4(2-\\sqrt{3})}{(2+\\sqrt{3})(2-\\sqrt{3})}=\\frac{8-4\\sqrt{3}}{4-3}=8-4\\sqrt{3}$.",
        },
        {
          heading: "Surds in geometry",
          body: "Sides given as surds lead to area and perimeter answers in the form $a+b\\sqrt{c}$. Expand fully, then collect rational parts and surd parts separately.\n\n**Worked example.** Rectangle $w=(\\sqrt{3}+1)$, $l=(\\sqrt{3}+3)$.\n\nArea $=(\\sqrt{3}+1)(\\sqrt{3}+3)=3+3\\sqrt{3}+\\sqrt{3}+3=6+4\\sqrt{3}$ cm$^2$.\nPerimeter $=2[(\\sqrt{3}+1)+(\\sqrt{3}+3)]=2(2\\sqrt{3}+4)=8+4\\sqrt{3}$ cm.",
        },
        {
          heading: "Exam technique",
          body: "- 'Show that' questions need every expansion step visible — do not jump to $6+4\\sqrt{3}$.\n- When asked for the form $a+b\\sqrt{c}$ or $\\frac{p+q\\sqrt{r}}{s}$, give exact integers for $a,b,p,q$ — decimals lose all marks.\n- Check conjugate products: $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$, not $a^2+b$ or $a^2-b^2$.",
        },
      ],
    },
  ],
};
