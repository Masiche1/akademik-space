import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ciem-u1-lesson-1-2",
  code: "1-2",
  title: "Standard Form and Upper and Lower Bounds",
  goal: "I CAN write numbers in standard form, calculate with them, and find upper and lower bounds of measurements and calculations.",
  standards: ["0580 1.3"],
  vocabulary: [
    { term: "Standard form", definition: "A number written as $A\\times10^n$ where $1\\le A<10$ and $n$ is an integer." },
    { term: "Upper bound", definition: "The largest value a rounded measurement or calculation could actually have." },
    { term: "Lower bound", definition: "The smallest value a rounded measurement or calculation could actually have." },
    { term: "Degree of accuracy", definition: "The smallest unit to which a number is rounded, e.g. nearest metre, nearest 0.1, 3 significant figures." },
    { term: "Significant figures", definition: "Digits that carry meaning about precision; trailing zeros after a decimal point are significant." },
    { term: "Order of magnitude", definition: "The approximate size of a number expressed as a power of 10." },
  ],
  concepts: [
    {
      id: "ciem-u1-standard-form",
      title: "Standard form",
      skill: "Convert numbers to and from standard form and use index laws to calculate with them.",
      lesson: {
        sections: [
          {
            heading: "Writing numbers in standard form",
            body: "Standard form is $A\\times10^n$ with $1\\le A<10$ and $n$ an integer.\n\n- For large numbers, $n$ is positive: count how many places the decimal point moves left. $72\\,000\\,000=7.2\\times10^7$.\n- For small numbers, $n$ is negative: count how many places the decimal point moves right. $0.00045=4.5\\times10^{-4}$.\n\nThe power of 10 tells you the order of magnitude — handy for estimation before a calculator calculation.",
          },
          {
            heading: "Calculating in standard form",
            body: "Use the index laws on the powers of 10 and ordinary arithmetic on the $A$ values, then adjust so the result is again in standard form ($1\\le A<10$).\n\nFor example $(2.5\\times10^4)\\div(5\\times10^{-2})=\\frac{2.5}{5}\\times10^{4-(-2)}=0.5\\times10^6=5\\times10^5$. Note $0.5\\times10^6$ is not standard form — renormalise to $5\\times10^5$.",
          },
          {
            heading: "Standard form in context",
            body: "Science and geography use standard form constantly: the speed of light $3\\times10^8$ m/s, the distance to the Sun $1.5\\times10^{11}$ m, the mass of an electron $9.1\\times10^{-31}$ kg. When a question gives real-world quantities in standard form, convert back to ordinary numbers only if the context demands it.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$A\\times10^n$, where $1\\le A<10$ and $n\\in\\mathbb{Z}$" },
          { name: "Multiplication", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$, then renormalise." },
          { name: "Division", statement: "$\\frac{A\\times10^m}{B\\times10^n}=\\frac{A}{B}\\times10^{m-n}$, then renormalise." },
        ],
        workedExample: {
          problem: "Work out $\\frac{3.6\\times10^7}{1.2\\times10^4}$, giving your answer in standard form.",
          solution: "$\\frac{3.6}{1.2}\\times10^{7-4}=3\\times10^3=3000$. Already standard form.",
        },
      },
      questions: [
        {
          id: "ciem-u1-standard-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.00045$ in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5\\times10^{-3}$" },
              { id: "b", text: "$4.5\\times10^{-4}$" },
              { id: "c", text: "$45\\times10^{-5}$" },
              { id: "d", text: "$0.45\\times10^{-3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$; small numbers need a negative $n$." },
            ],
            steps: [
              { reasoning: "Move the decimal point 4 places right to get $A=4.5$; each right move makes $n$ one more negative.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4.5\\times10^{-4}$",
            commonErrors: ["Writing $4.5\\times10^{-3}$ by miscounting the decimal places.", "Choosing $45\\times10^{-5}$, which has $A=45\\ge10$ and is not standard form."],
          },
        },
        {
          id: "ciem-u1-standard-form-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $72\\,000\\,000$ in standard form. Enter the value of $A$ and the value of $n$ where the number is $A\\times10^n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "A", answer: 7.2 },
              { label: "n", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$; large numbers need a positive $n$." },
            ],
            steps: [
              { reasoning: "Move the decimal point 7 places left so $A=7.2$.", working: "72\\,000\\,000=7.2\\times10^7", marks: 1, markCode: "M" },
              { reasoning: "State $A$ and $n$ separately.", working: "A=7.2,\\ n=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.2\\times10^7$",
            commonErrors: ["Counting digits instead of decimal places and writing $10^8$.", "Writing $72\\times10^6$, which is not standard form."],
          },
        },
        {
          id: "ciem-u1-standard-form-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $(4.2\\times10^3)\\times(1.5\\times10^{-2})$, giving your answer in standard form. Enter the value of $A$ and the value of $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "A", answer: 6.3 },
              { label: "n", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(A\\times10^m)(B\\times10^n)=AB\\times10^{m+n}$, then renormalise to $1\\le A<10$." },
            ],
            steps: [
              { reasoning: "Multiply the $A$ values and add the indices.", working: "4.2\\times1.5=6.3,\\quad 10^{3+(-2)}=10^1", marks: 1, markCode: "M" },
              { reasoning: "Combine.", working: "6.3\\times10^1", marks: 1, markCode: "M" },
              { reasoning: "$6.3\\times10^1=63$ is already standard form with $A=6.3$, $n=1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.3\\times10^1$ (i.e. $63$)",
            commonErrors: ["Subtracting the indices instead of adding.", "Leaving the answer as $63$ without confirming it is standard form — $63=6.3\\times10^1$."],
          },
        },
        {
          id: "ciem-u1-standard-form-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Light travels at $3\\times10^8$ metres per second. The distance from the Sun to the Earth is approximately $1.5\\times10^{11}$ metres.",
          parts: [
            { label: "a", prompt: "Write $0.00082$ in standard form.", marks: 2 },
            { label: "b", prompt: "Write $45\\,600\\,000\\,000$ in standard form.", marks: 2 },
            { label: "c", prompt: "Calculate the time, in seconds, for light to travel from the Sun to the Earth, giving your answer in standard form.", marks: 3 },
            { label: "d", prompt: "Hence write down the approximate time in minutes.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) power of 10", answer: -4 },
              { label: "(b) power of 10", answer: 10 },
              { label: "(c) A", answer: 5, tolerance: 0.01 },
              { label: "(c) n", answer: 2 },
              { label: "(d) minutes", answer: 8.33, tolerance: 0.01, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$A\\times10^n$ with $1\\le A<10$." },
              { kind: "principle", name: "Time = distance ÷ speed", statement: "Use consistent units before dividing." },
            ],
            steps: [
              { part: "a", reasoning: "Move the decimal point 4 places right; $n$ is negative.", working: "0.00082=8.2\\times10^{-4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the power of 10.", working: "n=-4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Move the decimal point 10 places left.", working: "45\\,600\\,000\\,000=4.56\\times10^{10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the power of 10.", working: "n=10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Time = distance ÷ speed, both already in metres and m/s.", working: "t=\\frac{1.5\\times10^{11}}{3\\times10^8}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide coefficients and subtract indices.", working: "=0.5\\times10^{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Renormalise to standard form.", working: "=5\\times10^2\\text{ s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert seconds to minutes by dividing by 60.", working: "500\\div60\\approx8.33\\text{ min}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the approximate value.", working: "\\approx8.3\\text{ minutes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8.2\\times10^{-4}$ (b) $4.56\\times10^{10}$ (c) $5\\times10^2$ s (d) $\\approx8.3$ minutes",
            commonErrors: ["In (c) multiplying distance by speed instead of dividing.", "Forgetting to renormalise $0.5\\times10^3$.", "In (d) dividing by 100 instead of 60."],
            examinerNote: "In (c) accept $500$ s; the standard-form requirement applies to the method shown.",
          },
        },
      ],
    },
    {
      id: "ciem-u1-bounds",
      title: "Upper and lower bounds",
      skill: "Find the upper and lower bounds of a rounded measurement and of calculations built from rounded values.",
      lesson: {
        sections: [
          {
            heading: "Bounds of a single measurement",
            body: "A measurement is rounded to a stated degree of accuracy. The true value lies within half a unit of that accuracy on either side.\n\n| Measurement | Lower bound | Upper bound |\n|---|---|---|\n| $2.4$ (1 d.p.) | $2.35$ | $2.45$ |\n| $84$ m (nearest m) | $83.5$ m | $84.5$ m |\n| $0.03$ (2 d.p.) | $0.025$ | $0.035$ |\n\nThe bound is **inclusive**: a value of exactly $2.45$ rounds to $2.4$ under round-half-up conventions used in this course, so both bounds are possible true values.",
          },
          {
            heading: "Bounds of a calculation",
            body: "For a calculation, combine the bounds that give the extreme results:\n\n- **Addition/subtraction and products of positives**: maximum uses upper bounds, minimum uses lower bounds.\n- **Division of positives**: maximum = upper ÷ lower; minimum = lower ÷ upper.\n\nFor a sum like $a+b$, the greatest possible value uses the upper bound of each; the least possible uses the lower bound of each.",
          },
          {
            heading: "Why bounds matter",
            body: "Engineering tolerances, medicine doses and scientific measurement all depend on knowing the worst case. If a pill contains between $24.5$ mg and $25.5$ mg of active ingredient and a patient takes 2 pills, the dose could be as low as $49$ mg or as high as $51$ mg — the bounds of the calculation.",
          },
        ],
        keyFormulas: [
          { name: "Single measurement", statement: "Bounds = value $\\pm$ half the degree of accuracy." },
          { name: "Max of product", statement: "upper $\\times$ upper (for positive quantities)" },
          { name: "Min of product", statement: "lower $\\times$ lower (for positive quantities)" },
          { name: "Max of quotient", statement: "upper $\\div$ lower" },
        ],
        workedExample: {
          problem: "A length is recorded as $3.7$ cm correct to 1 decimal place. Write down its lower and upper bounds, and find the greatest possible value of $3.7 \\times 2.4$ where $2.4$ is also correct to 1 d.p.",
          solution: "Bounds of $3.7$: $3.65$ and $3.75$. Bounds of $2.4$: $2.35$ and $2.45$. Greatest product $=3.75\\times2.45=9.1875$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-bounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A length is measured as $2.4$ m correct to 1 decimal place. What is the upper bound of the measurement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.45$ m" },
              { id: "b", text: "$2.5$ m" },
              { id: "c", text: "$2.04$ m" },
              { id: "d", text: "$2.44$ m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Upper bound", statement: "Value + half the degree of accuracy; for 1 d.p. that is $+0.05$." },
            ],
            steps: [
              { reasoning: "Add half of $0.1$ to $2.4$.", working: "2.4+0.05=2.45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2.45$ m",
            commonErrors: ["Adding the full $0.1$ to get $2.5$.", "Subtracting $0.05$ to get the lower bound."],
          },
        },
        {
          id: "ciem-u1-bounds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A mass is recorded as $3.7$ kg correct to 1 decimal place. Enter the lower bound and the upper bound of the mass.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower bound", answer: 3.65, tolerance: 0.001 },
              { label: "Upper bound", answer: 3.75, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds", statement: "Value $\\pm$ half the degree of accuracy; 1 d.p. means $\\pm0.05$." },
            ],
            steps: [
              { reasoning: "Subtract and add $0.05$.", working: "3.7-0.05=3.65,\\quad 3.7+0.05=3.75", marks: 1, markCode: "M" },
              { reasoning: "State both bounds with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower bound $3.65$ kg, upper bound $3.75$ kg",
            commonErrors: ["Using $\\pm0.1$ instead of $\\pm0.05$.", "Swapping the bounds."],
          },
        },
        {
          id: "ciem-u1-bounds-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The sides of a rectangle are $12.6$ cm and $3.4$ cm, each measured correct to 1 decimal place. Find the greatest possible value of the area of the rectangle.",
          response: { type: "numeric", parts: [{ label: "Greatest area", answer: 43.6425, tolerance: 0.01, unit: "cm^2" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of a product", statement: "For positive quantities, the maximum product uses upper bound $\\times$ upper bound." },
            ],
            steps: [
              { reasoning: "Find the upper bounds of both sides.", working: "12.6\\to12.65,\\quad 3.4\\to3.45", marks: 1, markCode: "M" },
              { reasoning: "Multiply the upper bounds.", working: "12.65\\times3.45=43.6425", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "43.6425\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$43.6425$ cm$^2$ (accept $43.64$)",
            commonErrors: ["Multiplying the recorded values $12.6\\times3.4$ instead of the bounds.", "Using one upper and one lower bound."],
          },
        },
        {
          id: "ciem-u1-bounds-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangular field has length $84$ m and width $56$ m. Each measurement is correct to the nearest metre.",
          parts: [
            { label: "a", prompt: "Write down the lower and upper bounds of the length.", marks: 2 },
            { label: "b", prompt: "Write down the lower and upper bounds of the width.", marks: 2 },
            { label: "c", prompt: "Find the greatest possible perimeter of the field.", marks: 3 },
            { label: "d", prompt: "Find the least possible area of the field.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) lower", answer: 83.5, unit: "m" },
              { label: "(a) upper", answer: 84.5, unit: "m" },
              { label: "(b) lower", answer: 55.5, unit: "m" },
              { label: "(b) upper", answer: 56.5, unit: "m" },
              { label: "(c) greatest perimeter", answer: 282, unit: "m" },
              { label: "(d) least area", answer: 4634.25, tolerance: 0.01, unit: "m^2" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds of a measurement", statement: "Nearest metre means $\\pm0.5$ m." },
              { kind: "principle", name: "Bounds of perimeter/area", statement: "Greatest perimeter uses upper bounds; least area uses lower bounds (positive lengths)." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract and add half a metre.", working: "84-0.5=83.5,\\quad 84+0.5=84.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both bounds.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract and add half a metre for the width.", working: "56-0.5=55.5,\\quad 56+0.5=56.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both bounds.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greatest perimeter uses upper bounds of both sides.", working: "P=2(84.5+56.5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add inside the bracket.", working: "=2\\times141", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by 2.", working: "=282\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Least area uses lower bounds of both sides.", working: "A=83.5\\times55.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply.", working: "=4634.25\\text{ m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $83.5$ m and $84.5$ m (b) $55.5$ m and $56.5$ m (c) $282$ m (d) $4634.25$ m$^2$",
            commonErrors: ["Using $\\pm1$ m instead of $\\pm0.5$ m for nearest-metre accuracy.", "Using upper bounds for the least area.", "Forgetting the factor 2 in the perimeter."],
            examinerNote: "Accept $4634$ m$^2$ if an appropriate rounding is stated; exact value preferred.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u1-standard-form-bounds-notes",
      title: "Standard form and bounds — revision notes",
      summary: "Converting to and from standard form, calculating with it, and finding upper and lower bounds of measurements.",
      sections: [
        {
          heading: "Standard form rules",
          body: "Write every number as $A\\times10^n$ with **$1\\le A<10$** — this is the rule examiners check first.\n\n- Large number: decimal point moves **left**, $n$ **positive**. $72\\,000\\,000=7.2\\times10^7$.\n- Small number: decimal point moves **right**, $n$ **negative**. $0.00045=4.5\\times10^{-4}$.\n\nIf your $A$ comes out as $0.5$ or $45$, you have not finished — renormalise: $0.5\\times10^6=5\\times10^5$.",
        },
        {
          heading: "Calculating in standard form",
          body: "Treat it as two separate calculations: ordinary arithmetic on the $A$ values, index laws on the powers of 10.\n\n**Worked example.** $(4.2\\times10^3)\\times(1.5\\times10^{-2})$\n\n$=4.2\\times1.5\\times10^{3-2}=6.3\\times10^1=63$.\n\n**Worked example.** $\\frac{1.5\\times10^{11}}{3\\times10^8}$ (Sun–Earth distance ÷ light speed)\n\n$=\\frac{1.5}{3}\\times10^{11-8}=0.5\\times10^3=5\\times10^2$ s.\n\nNote the renormalisation step both times — $0.5\\times10^3$ is not standard form.",
        },
        {
          heading: "Upper and lower bounds",
          body: "A measurement rounded to a degree of accuracy $d$ has bounds value $\\pm\\frac{d}{2}$.\n\n| Recorded as | $d$ | Lower bound | Upper bound |\n|---|---|---|---|\n| $2.4$ (1 d.p.) | $0.1$ | $2.35$ | $2.45$ |\n| $84$ m (nearest m) | $1$ | $83.5$ | $84.5$ |\n| $0.03$ (2 d.p.) | $0.01$ | $0.025$ | $0.035$ |\n\nThe most common error is using $\\pm d$ instead of $\\pm\\frac{d}{2}$.",
        },
        {
          heading: "Bounds of calculations",
          body: "Choose bounds that produce the extreme result:\n\n- **Greatest** product/area/perimeter: upper $\\times$ upper (for positive quantities).\n- **Least** product/area: lower $\\times$ lower.\n- **Greatest** quotient: upper $\\div$ lower. **Least** quotient: lower $\\div$ upper.\n- **Sum/difference**: greatest uses the bound in the direction of the operation.\n\n**Worked example.** Sides $12.6$ cm and $3.4$ cm, each to 1 d.p. Greatest area:\n\nUpper bounds: $12.65$ and $3.45$, so max area $=12.65\\times3.45=43.6425$ cm$^2$.",
        },
        {
          heading: "Exam technique",
          body: "- Always state the degree of accuracy before finding bounds — 'correct to 1 d.p.' means $\\pm0.05$, not $\\pm0.1$.\n- In standard-form calculations, show the index subtraction/addition explicitly; method marks are awarded for it.\n- Bounds questions almost always want **both** bounds stated and units included.",
        },
      ],
    },
  ],
};
