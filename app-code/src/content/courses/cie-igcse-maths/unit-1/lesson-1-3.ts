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
              { id: "a", text: "$6\\sqrt{2}$" },
              { id: "b", text: "$18\\sqrt{2}$" },
              { id: "c", text: "$8\\sqrt{2}$" },
              { id: "d", text: "$2\\sqrt{36}$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$\\frac{\\sqrt{5}}{5}$" },
              { id: "b", text: "$\\frac{5}{\\sqrt{5}}$" },
              { id: "c", text: "$\\sqrt{5}$" },
              { id: "d", text: "$\\frac{1}{5}$" },
            ],
            correctChoiceId: "a",
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
