import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edm10-u1-lesson-1-1",
  code: "1-1",
  title: "Number Properties and Surds",
  goal: "I CAN use prime factors to find the HCF and LCM, convert recurring decimals to fractions, and simplify and rationalise surds.",
  standards: ["4MA1 1.1", "4MA1 1.4", "4MA1 1.8", "4MA1 1.9H"],
  vocabulary: [
    { term: "Prime factor", definition: "A factor of a number that is itself a prime number. Every integer greater than 1 is a product of prime factors in exactly one way." },
    { term: "Highest common factor (HCF)", definition: "The largest integer that divides exactly into each of two or more numbers." },
    { term: "Lowest common multiple (LCM)", definition: "The smallest positive integer that is a multiple of each of two or more numbers." },
    { term: "Recurring decimal", definition: "A decimal whose digits repeat forever, shown with dots over the first and last repeating digits, e.g. $0.\\dot{2}\\dot{7}$." },
    { term: "Surd", definition: "A root that cannot be written as a fraction of integers, such as $\\sqrt{2}$ or $\\sqrt{5}$. Its decimal form never ends or repeats." },
    { term: "Rationalising the denominator", definition: "Rewriting a fraction so that its denominator contains no surds, by multiplying top and bottom by a suitable surd or conjugate." },
    { term: "Conjugate", definition: "For $a+\\sqrt{b}$ the conjugate is $a-\\sqrt{b}$. Their product $a^2-b$ is rational." },
  ],
  concepts: [
    {
      id: "edm10-u1-prime-hcf-lcm-recurring",
      title: "Prime factors, HCF, LCM and recurring decimals",
      skill: "Write numbers as products of prime factors, use them to find the HCF and LCM, and convert recurring decimals to fractions.",
      lesson: {
        sections: [
          {
            heading: "Prime factors, HCF and LCM",
            body: "Break a number into primes using a factor tree or repeated division, and write it in index form. For example $180=2^2\\times3^2\\times5$.\n\nFor two numbers written as products of primes:\n\n- the **HCF** takes each common prime to its **lowest** power\n- the **LCM** takes every prime that appears to its **highest** power",
          },
          {
            heading: "Recurring decimals to fractions",
            body: "To convert a recurring decimal, multiply by a power of 10 so that the repeating parts line up, then subtract to cancel the infinite tail. If $x=0.\\dot{2}\\dot{7}$ then $100x=27.\\dot{2}\\dot{7}$ and $99x=27$, so $x=\\frac{27}{99}=\\frac{3}{11}$.\n\nIf the decimal has a non-repeating digit first, multiply so that the repeating part starts immediately after the point in two different multiples, then subtract.",
          },
          {
            heading: "Using the HCF and LCM in context",
            body: "Use the LCM when events repeat and you need the first time they coincide (buses, flashing lights). Use the HCF when you need the largest equal group or tile size that divides exactly into several lengths or amounts.",
          },
        ],
        keyFormulas: [
          { name: "HCF", statement: "Product of common primes, each to the lowest power." },
          { name: "LCM", statement: "Product of all primes, each to the highest power." },
          { name: "Recurring decimal", statement: "Multiply by $10^n$ (n = digits in repeat), subtract, divide." },
        ],
        workedExample: {
          problem: "Write $0.\\dot{4}\\dot{5}$ as a fraction in its simplest form.",
          solution: "Let $x=0.454545\\ldots$. Then $100x=45.454545\\ldots$. Subtracting, $99x=45$, so $x=\\frac{45}{99}=\\frac{5}{11}$.",
        },
      },
      questions: [
        {
          id: "edm10-u1-prime-hcf-lcm-recurring-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Write $180$ as a product of its prime factors.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\times3^2\\times5$" },
              { id: "b", text: "$2^2\\times3\\times5$" },
              { id: "c", text: "$2^2\\times9\\times5$" },
              { id: "d", text: "$2^2\\times3^2\\times5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of arithmetic", statement: "Every integer greater than 1 is a product of primes in exactly one way (apart from order)." },
            ],
            steps: [
              { reasoning: "Divide repeatedly by prime numbers until the quotient is 1.", working: "180=2\\times2\\times3\\times3\\times5", marks: 1, markCode: "M" },
              { reasoning: "Write the repeated primes in index form.", working: "2^2\\times3^2\\times5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2^2\\times3^2\\times5$",
            commonErrors: ["Giving $2^2\\times3\\times5=60$ by losing one factor of 3.", "Including $9$, which is not prime."],
            examinerNote: "Answers that are not fully in primes (such as $4\\times9\\times5$) score M1 only.",
          },
        },
        {
          id: "edm10-u1-prime-hcf-lcm-recurring-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Write $84$ and $126$ as products of prime factors. Hence work out the highest common factor (HCF) and the lowest common multiple (LCM) of $84$ and $126$.",
          response: {
            type: "numeric",
            parts: [
              { label: "HCF", answer: 42 },
              { label: "LCM", answer: 252 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common primes, each to its lowest power." },
              { kind: "principle", name: "LCM from primes", statement: "Multiply all the primes, each to its highest power." },
            ],
            steps: [
              { reasoning: "Express both numbers as products of primes.", working: "84=2^2\\times3\\times7,\\quad 126=2\\times3^2\\times7", marks: 1, markCode: "M" },
              { reasoning: "HCF uses the lowest power of each common prime.", working: "2\\times3\\times7=42", marks: 1, markCode: "A" },
              { reasoning: "LCM uses the highest power of each prime.", working: "2^2\\times3^2\\times7=252", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCF $=42$, LCM $=252$",
            commonErrors: ["Swapping lowest and highest powers.", "Multiplying the two numbers to get the LCM."],
            examinerNote: "Check: $252=3\\times84=2\\times126$. cao for each answer.",
          },
        },
        {
          id: "edm10-u1-prime-hcf-lcm-recurring-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "Show that the recurring decimal $0.1\\dot{3}$ can be written as the fraction $\\frac{2}{15}$. Enter the numerator and denominator of the fraction in its simplest form.",
          response: {
            type: "numeric",
            parts: [
              { label: "Numerator", answer: 2 },
              { label: "Denominator", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recurring decimals", statement: "Subtract two multiples of $x$ that have identical recurring tails to leave a terminating decimal." },
            ],
            steps: [
              { reasoning: "Let $x=0.1333\\ldots$ and form multiples with the same recurring tail.", working: "10x=1.333\\ldots,\\quad 100x=13.333\\ldots", marks: 1, markCode: "M" },
              { reasoning: "Subtract to eliminate the recurring part.", working: "90x=12", marks: 1, markCode: "M" },
              { reasoning: "Divide and simplify.", working: "x=\\frac{12}{90}=\\frac{2}{15}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{15}$",
            commonErrors: ["Using $10x$ and $x$, which leaves a recurring tail after subtracting.", "Not simplifying $\\frac{12}{90}$."],
            examinerNote: "A 'show that' question needs every step of the algebra to be shown.",
          },
        },
        {
          id: "edm10-u1-prime-hcf-lcm-recurring-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Two bells ring at regular intervals. Bell A rings every $360$ seconds and bell B rings every $420$ seconds. They ring together at noon.",
          parts: [
            { label: "a", prompt: "Write $360$ as a product of its prime factors.", marks: 2 },
            { label: "b", prompt: "Write $420$ as a product of its prime factors. Hence work out the HCF and the LCM of $360$ and $420$.", marks: 3 },
            { label: "c", prompt: "After how many minutes will the bells next ring together?", marks: 2 },
            { label: "d", prompt: "Find the smallest positive integer $k$ such that $360k$ is a square number.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) HCF", answer: 60 },
              { label: "(b) LCM", answer: 2520 },
              { label: "(c) minutes", answer: 42, unit: "minutes" },
              { label: "(d) k", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF and LCM from primes", statement: "HCF: lowest powers of common primes. LCM: highest powers of all primes." },
              { kind: "property", name: "Square numbers", statement: "A number is a perfect square exactly when every prime in its factorisation has an even power." },
            ],
            steps: [
              { part: "a", reasoning: "Repeated division by primes.", working: "360=2\\times2\\times2\\times3\\times3\\times5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Index form.", working: "360=2^3\\times3^2\\times5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise 420.", working: "420=2^2\\times3\\times5\\times7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "HCF: lowest powers of the common primes 2, 3, 5.", working: "2^2\\times3\\times5=60", marks: 1, markCode: "A" },
              { part: "b", reasoning: "LCM: highest power of every prime.", working: "2^3\\times3^2\\times5\\times7=2520", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The bells coincide at multiples of both intervals, so use the LCM in seconds.", working: "2520\\text{ s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to minutes.", working: "2520\\div60=42", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In $2^3\\times3^2\\times5$ the powers of 2 and 5 are odd, so multiply by $2\\times5$ to make all powers even.", working: "360\\times10=2^4\\times3^2\\times5^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The result is $3600=60^2$, so the smallest value is 10.", working: "k=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2^3\\times3^2\\times5$ (b) HCF $=60$, LCM $=2520$ (c) $42$ minutes (d) $k=10$",
            commonErrors: ["Using the HCF in part (c).", "Forgetting to convert 2520 seconds to minutes.", "Choosing $k=2\\times5\\times3$ by multiplying by every prime."],
            examinerNote: "In (d) the answer 10 gives $3600=60^2$, a useful check.",
          },
        },
      ],
    },
    {
      id: "edm10-u1-surds",
      title: "Simplifying surds and rationalising denominators",
      skill: "Simplify surds, expand brackets containing surds and rationalise denominators.",
      lesson: {
        sections: [
          {
            heading: "Simplifying surds",
            body: "Use $\\sqrt{ab}=\\sqrt{a}\\times\\sqrt{b}$ and look for the largest square factor. For example $\\sqrt{72}=\\sqrt{36}\\times\\sqrt{2}=6\\sqrt{2}$. Surds can be added or subtracted only when they have the same surd part: $5\\sqrt{2}+3\\sqrt{2}=8\\sqrt{2}$.",
          },
          {
            heading: "Expanding with surds",
            body: "Expand brackets as normal, using $\\sqrt{a}\\times\\sqrt{a}=a$. For example $(3+\\sqrt{5})(3-\\sqrt{5})=9-5=4$. A product of conjugates is always rational.",
          },
          {
            heading: "Rationalising the denominator",
            body: "To remove $\\sqrt{b}$ from a denominator, multiply top and bottom by $\\sqrt{b}$. For a denominator $a+\\sqrt{b}$, multiply top and bottom by the conjugate $a-\\sqrt{b}$, because $(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$.",
          },
        ],
        keyFormulas: [
          { name: "Product rule", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$" },
          { name: "Conjugates", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$" },
        ],
        workedExample: {
          problem: "Rationalise the denominator of $\\frac{4}{3+\\sqrt{5}}$.",
          solution: "Multiply top and bottom by $3-\\sqrt{5}$: $\\frac{4(3-\\sqrt{5})}{(3+\\sqrt{5})(3-\\sqrt{5})}=\\frac{12-4\\sqrt{5}}{9-5}=\\frac{12-4\\sqrt{5}}{4}=3-\\sqrt{5}$.",
        },
      },
      questions: [
        {
          id: "edm10-u1-surds-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 1,
          stem: "Write $\\sqrt{72}$ in the form $a\\sqrt{2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18\\sqrt{2}$" },
              { id: "b", text: "$2\\sqrt{36}$" },
              { id: "c", text: "$9\\sqrt{2}$" },
              { id: "d", text: "$6\\sqrt{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\times\\sqrt{b}$ for $a,b\\ge0$." },
            ],
            steps: [
              { reasoning: "Split off the largest square factor, $72=36\\times2$.", working: "\\sqrt{72}=\\sqrt{36}\\times\\sqrt{2}=6\\sqrt{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $6\\sqrt{2}$",
            commonErrors: ["Halving 36 to get $18\\sqrt{2}$.", "Writing $2\\sqrt{36}$, which equals 12, not $\\sqrt{72}$."],
          },
        },
        {
          id: "edm10-u1-surds-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "Show that $\\sqrt{50}+\\sqrt{18}$ can be written in the form $a\\sqrt{2}$, where $a$ is an integer. Enter the value of $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Product rule for surds", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$." },
              { kind: "principle", name: "Like surds", statement: "Surds with the same irrational part add like algebraic terms." },
            ],
            steps: [
              { reasoning: "Simplify each surd using a square factor.", working: "\\sqrt{50}=5\\sqrt{2},\\quad \\sqrt{18}=3\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Add the like surds.", working: "5\\sqrt{2}+3\\sqrt{2}=8\\sqrt{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\sqrt{2}$, so $a=8$",
            commonErrors: ["Adding under the root: $\\sqrt{50}+\\sqrt{18}=\\sqrt{68}$."],
          },
        },
        {
          id: "edm10-u1-surds-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "Rationalise the denominator of $\\frac{5}{2+\\sqrt{3}}$, giving your answer in the form $a+b\\sqrt{3}$ where $a$ and $b$ are integers. Enter $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: -5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference of two squares", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$." },
            ],
            steps: [
              { reasoning: "Multiply numerator and denominator by the conjugate $2-\\sqrt{3}$.", working: "\\frac{5(2-\\sqrt{3})}{(2+\\sqrt{3})(2-\\sqrt{3})}", marks: 1, markCode: "M" },
              { reasoning: "The denominator becomes rational.", working: "(2+\\sqrt{3})(2-\\sqrt{3})=4-3=1", marks: 1, markCode: "A" },
              { reasoning: "Expand the numerator.", working: "5(2-\\sqrt{3})=10-5\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10-5\\sqrt{3}$, so $a=10$, $b=-5$",
            commonErrors: ["Multiplying by $2+\\sqrt{3}$ instead of the conjugate.", "Expanding the denominator as $4+3$."],
          },
        },
        {
          id: "edm10-u1-surds-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A rectangle has width $(\\sqrt{5}+1)$ cm and length $(\\sqrt{5}+3)$ cm.",
          parts: [
            { label: "a", prompt: "Show that the area of the rectangle is $(8+4\\sqrt{5})$ cm$^2$.", marks: 3 },
            { label: "b", prompt: "Work out the perimeter of the rectangle in the form $a+b\\sqrt{5}$.", marks: 2 },
            { label: "c", prompt: "A different rectangle has area $(8+4\\sqrt{5})$ cm$^2$ and width $(\\sqrt{5}+1)$ cm. By rationalising a denominator, show that its length is $(3+\\sqrt{5})$ cm.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Surds multiplied", statement: "$\\sqrt{a}\\times\\sqrt{a}=a$." },
              { kind: "formula", name: "Conjugate pair", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the length by the width, expanding all four terms.", working: "(\\sqrt{5}+1)(\\sqrt{5}+3)=5+3\\sqrt{5}+\\sqrt{5}+3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use $\\sqrt{5}\\times\\sqrt{5}=5$ for the first term.", working: "=5+3+3\\sqrt{5}+\\sqrt{5}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Collect like terms to reach the given result.", working: "=8+4\\sqrt{5}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Perimeter is twice the sum of length and width.", working: "2\\left[(\\sqrt{5}+1)+(\\sqrt{5}+3)\\right]=2(2\\sqrt{5}+4)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand.", working: "8+4\\sqrt{5}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Length = area $\\div$ width.", working: "\\frac{8+4\\sqrt{5}}{\\sqrt{5}+1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply top and bottom by the conjugate $\\sqrt{5}-1$.", working: "\\frac{(8+4\\sqrt{5})(\\sqrt{5}-1)}{(\\sqrt{5}+1)(\\sqrt{5}-1)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Expand both: the numerator is $8\\sqrt{5}-8+20-4\\sqrt{5}$ and the denominator is $5-1$.", working: "\\frac{12+4\\sqrt{5}}{4}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide each term by 4.", working: "3+\\sqrt{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8+4\\sqrt{5}$ (b) $8+4\\sqrt{5}$ cm (c) length $=3+\\sqrt{5}$ cm",
            commonErrors: ["Writing $\\sqrt{5}\\times\\sqrt{5}=\\sqrt{10}$.", "Multiplying only the denominator by the conjugate.", "Forgetting the factor 2 in the perimeter."],
            examinerNote: "In (a) all steps must be seen. Part (c) uses the answer to (a); ft is allowed only if the area given in the question is used.",
          },
        },
      ],
    },
  ],
};
