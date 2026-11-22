import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m7-u2-lesson-2-1",
  code: "2-1",
  title: "Operations with Rational Numbers",
  goal: "I CAN add, subtract, multiply and divide rational numbers, use absolute value as distance, and convert fractions to terminating or repeating decimals.",
  standards: ["7.NS.A.1", "7.NS.A.2"],
  vocabulary: [
    { term: "Rational number", definition: "Any number that can be written as a fraction $\\frac{a}{b}$ where $a$ and $b$ are integers and $b \\ne 0$. Integers, fractions and terminating or repeating decimals are all rational." },
    { term: "Absolute value", definition: "The distance of a number from $0$ on the number line, written $|x|$. For example $|-6|=6$." },
    { term: "Additive inverse", definition: "The opposite of a number. A number and its additive inverse add to $0$, for example $5$ and $-5$." },
    { term: "Terminating decimal", definition: "A decimal that ends after a finite number of digits, such as $0.375$." },
    { term: "Repeating decimal", definition: "A decimal with a digit or block of digits that repeats forever, such as $0.\\overline{45}$." },
    { term: "Reciprocal", definition: "The number you multiply by to get $1$. The reciprocal of $\\frac{a}{b}$ is $\\frac{b}{a}$." },
  ],
  concepts: [
    {
      id: "m7-u2-add-subtract-rationals",
      title: "Adding and subtracting rational numbers",
      skill: "Add and subtract integers, fractions and decimals on the number line and interpret absolute value as distance.",
      lesson: {
        sections: [
          {
            heading: "Adding on the number line",
            body: "Start at the first number. Adding a positive number moves **right**; adding a negative number moves **left**. When two numbers have opposite signs, subtract their absolute values and keep the sign of the number with the larger absolute value: $-8+5=-3$ because $|-8|>|5|$.",
          },
          {
            heading: "Subtracting is adding the opposite",
            body: "To subtract, add the additive inverse: $a-b=a+(-b)$. So $4-(-6)=4+6=10$. This works for fractions and decimals too: $-2.5-(-4)=-2.5+4=1.5$.",
          },
          {
            heading: "Absolute value as distance",
            body: "The distance between two numbers on the number line is $|a-b|$. The points $-3.5$ and $2.25$ are $|-3.5-2.25|=|-5.75|=5.75$ units apart. Distance is never negative.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction", statement: "$a-b=a+(-b)$" },
          { name: "Distance between two numbers", statement: "$\\text{distance}=|a-b|$" },
        ],
        workedExample: {
          problem: "A submarine is at $-120.5$ meters (below sea level). It rises $45.75$ meters. Find its new depth, then find how far it is from the surface.",
          solution: "New position: $-120.5+45.75=-74.75$ meters. Distance from the surface (sea level, $0$): $|-74.75|=74.75$ meters.",
        },
      },
      questions: [
        {
          id: "m7-u2-add-subtract-rationals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $-2.5-(-4)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-6.5$" },
              { id: "b", text: "$-1.5$" },
              { id: "c", text: "$6.5$" },
              { id: "d", text: "$1.5$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
            ],
            steps: [
              { reasoning: "Subtracting $-4$ is the same as adding $4$. Starting at $-2.5$, move $4$ units right.", working: "-2.5-(-4)=-2.5+4=1.5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1.5$",
            commonErrors: ["Adding the absolute values and keeping the negative sign, giving $-6.5$.", "Subtracting $4-2.5$ and giving the wrong sign, $-1.5$."],
          },
        },
        {
          id: "m7-u2-add-subtract-rationals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $-5.6-(-2.35)-4$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: -7.25 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtracting is adding the opposite", statement: "$a-b=a+(-b)$" },
            ],
            steps: [
              { reasoning: "Subtract a negative by adding its opposite, then evaluate the first two terms.", working: "-5.6+2.35=-3.25", marks: 1, markCode: "M" },
              { reasoning: "Subtract $4$ by moving $4$ units left.", working: "-3.25-4=-7.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-7.25$",
            commonErrors: ["Computing $-5.6-2.35$ and ignoring the negative sign on $-2.35$.", "Lining up decimal places incorrectly."],
            examinerNote: "M1 for $-3.25$ or an equivalent correct partial result. A1 cao.",
          },
        },
        {
          id: "m7-u2-add-subtract-rationals-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A diver is at an elevation of $-12.5$ meters relative to sea level. A bird flies directly above the diver at an elevation of $8.75$ meters. Find the vertical distance, in meters, between the bird and the diver.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 21.25, unit: "meters" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Distance on a number line", statement: "The distance between $a$ and $b$ is $|a-b|$." },
            ],
            steps: [
              { reasoning: "Write the distance as the absolute value of the difference of the elevations.", working: "|8.75-(-12.5)|", marks: 1, markCode: "M" },
              { reasoning: "Subtracting a negative means adding its opposite.", working: "8.75+12.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "21.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21.25$ meters",
            commonErrors: ["Computing $8.75-12.5=-3.75$ by ignoring the sign of the diver's elevation.", "Giving a negative distance."],
            examinerNote: "Accept the sum of the distances from sea level: $8.75+12.5$ (oe).",
          },
        },
        {
          id: "m7-u2-add-subtract-rationals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Maya's checking account has a balance of $-\\$18.50$ (the account is overdrawn). She deposits $\\$45.25$. Later she pays a bill of $\\$62.10$.",
          parts: [
            { label: "a", prompt: "Find Maya's balance, in dollars, after the deposit.", marks: 2 },
            { label: "b", prompt: "Find Maya's balance, in dollars, after she pays the bill.", marks: 2 },
            { label: "c", prompt: "Find the absolute value of the balance in part (b) and explain what it represents in this situation.", marks: 2 },
            { label: "d", prompt: "Find the difference, in dollars, between her highest balance and her lowest balance of the three balances (start, after deposit, after bill).", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Balance after deposit", answer: 26.75, unit: "dollars" },
              { label: "(b) Balance after bill", answer: -35.35, unit: "dollars" },
              { label: "(c) Absolute value", answer: 35.35, unit: "dollars" },
              { label: "(d) Highest minus lowest", answer: 62.1, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding rational numbers", statement: "A deposit adds and a payment subtracts. With opposite signs, subtract absolute values and keep the sign of the larger." },
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is the distance of $x$ from $0$." },
            ],
            steps: [
              { part: "a", reasoning: "A deposit adds to the balance.", working: "-18.50+45.25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract the absolute values, $45.25-18.50$; the larger absolute value is positive.", working: "26.75", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Paying a bill subtracts from the balance.", working: "26.75-62.10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The payment is larger than the balance, so the result is negative.", working: "-35.35", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Absolute value removes the sign.", working: "|-35.35|=35.35", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is the distance of the balance from $0$: Maya owes the bank $\\$35.35$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The balances are $-18.50$, $26.75$ and $-35.35$. Highest minus lowest.", working: "26.75-(-35.35)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtracting a negative means adding.", working: "26.75+35.35=62.10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$26.75$ (b) $-\\$35.35$ (c) $35.35$; Maya is overdrawn by $\\$35.35$ (d) $\\$62.10$",
            commonErrors: ["Computing $18.50-45.25$ in part (a) and getting a negative answer.", "Saying the absolute value is a balance of $\\$35.35$ rather than the amount owed."],
            examinerNote: "In (b) follow through from an incorrect (a) (ft). In (c) the interpretation must mention owing or being overdrawn.",
          },
        },
      ],
    },
    {
      id: "m7-u2-multiply-divide-rationals",
      title: "Multiplying and dividing rational numbers",
      skill: "Multiply and divide rational numbers and convert fractions to terminating or repeating decimals.",
      lesson: {
        sections: [
          {
            heading: "Sign rules",
            body: "Multiplying or dividing two numbers with the **same** sign gives a positive result; **different** signs give a negative result. So $(-\\frac{3}{4})\\times(-\\frac{2}{3})=\\frac{1}{2}$ and $-2.4\\div0.8=-3$. With several factors, count the negatives: an even count gives a positive product.",
          },
          {
            heading: "Dividing fractions",
            body: "Dividing by a fraction means multiplying by its reciprocal: $\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\times\\frac{d}{c}$. Convert mixed numbers to improper fractions first: $-2\\frac{1}{4}=-\\frac{9}{4}$.",
          },
          {
            heading: "Fractions as decimals",
            body: "Every rational number can be written as a decimal using long division, and the decimal either **terminates** or **repeats**. A fraction in simplest form terminates exactly when its denominator has no prime factors other than $2$ and $5$. So $\\frac{3}{8}=0.375$ terminates, but $\\frac{7}{12}=0.58\\overline{3}$ repeats because $12=2^2\\times3$.",
          },
        ],
        keyFormulas: [
          { name: "Dividing fractions", statement: "$\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\times\\frac{d}{c}$" },
          { name: "Sign rule", statement: "Same signs give a positive result; different signs give a negative result." },
        ],
        workedExample: {
          problem: "Evaluate $\\left(-\\frac{5}{6}\\right)\\div\\left(\\frac{10}{9}\\right)$.",
          solution: "Multiply by the reciprocal: $-\\frac{5}{6}\\times\\frac{9}{10}=-\\frac{45}{60}=-\\frac{3}{4}$. The signs differ, so the answer is negative.",
        },
      },
      questions: [
        {
          id: "m7-u2-multiply-divide-rationals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $\\left(-\\frac{3}{4}\\right)\\times\\frac{8}{9}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{2}{3}$" },
              { id: "b", text: "$-\\frac{27}{32}$" },
              { id: "c", text: "$\\frac{2}{3}$" },
              { id: "d", text: "$\\frac{27}{32}$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Multiplying fractions", statement: "$\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd}$; different signs give a negative product." },
            ],
            steps: [
              { reasoning: "Multiply numerators and denominators, then simplify. The signs differ, so the product is negative.", working: "-\\frac{3\\times8}{4\\times9}=-\\frac{24}{36}=-\\frac{2}{3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $-\\frac{2}{3}$",
            commonErrors: ["Ignoring the sign and choosing $\\frac{2}{3}$.", "Dividing instead of multiplying, giving $-\\frac{27}{32}$."],
          },
        },
        {
          id: "m7-u2-multiply-divide-rationals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $(-2.4)\\div0.8\\times(-1.5)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 4.5 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Sign rules", statement: "Same signs give a positive result; different signs give a negative result." },
              { kind: "principle", name: "Order of operations", statement: "Multiplication and division are done from left to right." },
            ],
            steps: [
              { reasoning: "Work from left to right. Different signs give a negative quotient.", working: "(-2.4)\\div0.8=-3", marks: 1, markCode: "M" },
              { reasoning: "Two negatives multiply to give a positive.", working: "(-3)\\times(-1.5)=4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.5$",
            commonErrors: ["Multiplying first: $0.8\\times(-1.5)$, then dividing.", "Giving $-4.5$ by losing a sign."],
            examinerNote: "M1 for $-3$ seen. A1 cao.",
          },
        },
        {
          id: "m7-u2-multiply-divide-rationals-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\left(-2\\frac{1}{4}\\right)\\div\\frac{3}{8}\\times\\left(-\\frac{1}{3}\\right)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Dividing by a fraction", statement: "Dividing by $\\frac{c}{d}$ is the same as multiplying by $\\frac{d}{c}$." },
              { kind: "property", name: "Sign rules", statement: "Same signs give a positive result; different signs give a negative result." },
            ],
            steps: [
              { reasoning: "Convert the mixed number to an improper fraction and multiply by the reciprocal of $\\frac{3}{8}$.", working: "-\\frac{9}{4}\\times\\frac{8}{3}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "-\\frac{72}{12}=-6", marks: 1, markCode: "A" },
              { reasoning: "Multiply by $-\\frac{1}{3}$; two negatives give a positive.", working: "(-6)\\times\\left(-\\frac{1}{3}\\right)=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Not converting the mixed number, treating $-2\\frac{1}{4}$ as $-2+\\frac{1}{4}$.", "Multiplying by $\\frac{3}{8}$ instead of its reciprocal."],
            examinerNote: "M1 for $-\\frac{9}{4}\\times\\frac{8}{3}$ (oe). A1 for $-6$. A1 cao.",
          },
        },
        {
          id: "m7-u2-multiply-divide-rationals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Sam is studying the fractions $\\frac{3}{8}$ and $\\frac{7}{12}$. A weather station also records that the temperature in a freezer room changes by $-1.25^\\circ\\text{C}$ every hour.",
          parts: [
            { label: "a", prompt: "Write $\\frac{3}{8}$ as a decimal.", marks: 1 },
            { label: "b", prompt: "Use long division to write $\\frac{7}{12}$ as a decimal. Give your answer rounded to three decimal places.", marks: 2 },
            { label: "c", prompt: "Without dividing, explain which of $\\frac{3}{8}$ and $\\frac{7}{12}$ is a terminating decimal and which is a repeating decimal.", marks: 3 },
            { label: "d", prompt: "Find the total change in temperature, in $^\\circ\\text{C}$, after $6$ hours.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\frac{3}{8}$ as a decimal", answer: 0.375, tolerance: 0.0005 },
              { label: "(b) $\\frac{7}{12}$ to 3 d.p.", answer: 0.583, tolerance: 0.001 },
              { label: "(d) Total temperature change", answer: -7.5, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Terminating and repeating decimals", statement: "In simplest form, $\\frac{a}{b}$ terminates exactly when the only prime factors of $b$ are $2$ and $5$." },
              { kind: "property", name: "Sign rules", statement: "A positive number times a negative number is negative." },
            ],
            steps: [
              { part: "a", reasoning: "Divide $3$ by $8$.", working: "\\frac{3}{8}=0.375", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Long division of $7$ by $12$ gives $0.58333\\ldots$, where the $3$ repeats.", working: "\\frac{7}{12}=0.58\\overline{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round to three decimal places.", working: "0.583", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Factor each denominator into primes.", working: "8=2^3,\\quad 12=2^2\\times3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The denominator $8$ has only the prime factor $2$, so $\\frac{3}{8}$ is a terminating decimal.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The denominator $12$ has the prime factor $3$ (not $2$ or $5$), and $\\frac{7}{12}$ is already in simplest form, so it is a repeating decimal.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Multiply the hourly change by the number of hours; the signs differ so the product is negative.", working: "6\\times(-1.25)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "-7.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.375$ (b) $0.583$ (c) $\\frac{3}{8}$ terminates, $\\frac{7}{12}$ repeats (d) $-7.5^\\circ\\text{C}$",
            commonErrors: ["Rounding $0.58333\\ldots$ up to $0.584$.", "Saying a decimal repeats because the numerator is not a multiple of the denominator."],
            examinerNote: "In (c) the explanation must refer to the prime factors of the denominator in simplest form.",
          },
        },
      ],
    },
  ],
};
