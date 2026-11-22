import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ciem-u1-lesson-1-1",
  code: "1-1",
  title: "Types of Numbers and the Laws of Indices",
  goal: "I CAN classify numbers, use prime factorisation to find HCF and LCM, convert recurring decimals to fractions, and apply the laws of indices including fractional and negative indices.",
  standards: ["0580 1.1", "0580 1.2"],
  vocabulary: [
    { term: "Prime number", definition: "A whole number greater than 1 whose only factors are 1 and itself, such as 7 or 13." },
    { term: "Prime factorisation", definition: "Writing a whole number as a product of prime numbers, usually in index form, e.g. $72=2^3\\times3^2$." },
    { term: "Highest common factor (HCF)", definition: "The largest number that divides exactly into each of two or more numbers." },
    { term: "Lowest common multiple (LCM)", definition: "The smallest positive number that is a multiple of each of two or more numbers." },
    { term: "Recurring decimal", definition: "A decimal in which one or more digits repeat forever, e.g. $0.\\dot{3}=0.333\\ldots$" },
    { term: "Irrational number", definition: "A real number that cannot be written as a fraction of two integers; its decimal expansion never ends or repeats, e.g. $\\pi$ or $\\sqrt{2}$." },
    { term: "Index law", definition: "A rule for combining powers, e.g. $a^m \\times a^n=a^{m+n}$, valid for integer, fractional and negative indices." },
  ],
  concepts: [
    {
      id: "ciem-u1-number-types",
      title: "Number types, prime factorisation and recurring decimals",
      skill: "Classify numbers, factorise into primes, find HCF and LCM, and write recurring decimals as fractions.",
      lesson: {
        sections: [
          {
            heading: "Sets of numbers",
            body: "The number sets nest inside each other: natural numbers $\\subset$ integers $\\subset$ rational numbers $\\subset$ real numbers.\n\n- **Natural numbers**: 1, 2, 3, ...\n- **Integers**: natural numbers, their negatives, and 0.\n- **Rational numbers**: any number that can be written as $\\frac{a}{b}$ where $a$ and $b$ are integers and $b\\ne0$. This includes fractions, terminating decimals and **recurring decimals**.\n- **Irrational numbers**: real numbers that cannot be written as a fraction, such as $\\pi$ and $\\sqrt{2}$. Their decimals never end or repeat.\n\nEvery rational number has a decimal expansion that either terminates or recurs; every irrational number's expansion does neither.",
          },
          {
            heading: "Prime factorisation, HCF and LCM",
            body: "Break each number into primes using a factor tree or repeated division, then write it in index form. For example $252=2^2\\times3^2\\times7$.\n\nFor two numbers in prime factorised form:\n\n- the **HCF** takes each **common** prime to its **lowest** power\n- the **LCM** takes **every** prime that appears to its **highest** power\n\nCheck your answer: $\\text{HCF}\\times\\text{LCM}=\\text{product of the two numbers}$.",
          },
          {
            heading: "Recurring decimals as fractions",
            body: "Let $x$ be the recurring decimal and multiply by a power of 10 so the repeating tails line up, then subtract. For $x=0.\\dot{3}$: $10x=3.333\\ldots$, so $9x=3$ and $x=\\frac{1}{3}$.\n\nIf a non-repeating digit comes first, e.g. $x=0.1\\dot{3}$, use $10x=1.333\\ldots$ and $100x=13.333\\ldots$; subtracting gives $90x=12$, so $x=\\frac{2}{15}$.",
          },
        ],
        keyFormulas: [
          { name: "HCF", statement: "Product of common primes, each to the lowest power." },
          { name: "LCM", statement: "Product of all primes, each to the highest power." },
          { name: "Recurring decimal", statement: "Multiply by $10^n$ so the repeats align, subtract, divide." },
          { name: "Check", statement: "$\\text{HCF}\\times\\text{LCM}=\\text{number}_1\\times\\text{number}_2$" },
        ],
        workedExample: {
          problem: "Write $0.2\\dot{7}$ as a fraction in its simplest form.",
          solution: "Let $x=0.2777\\ldots$. Then $10x=2.777\\ldots$ and $100x=27.777\\ldots$. Subtracting, $90x=25$, so $x=\\frac{25}{90}=\\frac{5}{18}$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-number-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following numbers is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{7}{9}$" },
              { id: "b", text: "$\\sqrt{4}$" },
              { id: "c", text: "$0.375$" },
              { id: "d", text: "$\\pi$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "A number that can be written as $\\frac{a}{b}$ with integers $a$, $b$ and $b\\ne0$; its decimal terminates or recurs." },
              { kind: "definition", name: "Irrational number", statement: "A real number that cannot be written as $\\frac{a}{b}$; its decimal never ends or repeats." },
            ],
            steps: [
              { reasoning: "$0.375=\\frac{3}{8}$, $\\sqrt{4}=2$ and $\\frac{7}{9}$ is already a fraction, so all three are rational.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\pi$",
            commonErrors: ["Choosing $\\sqrt{4}$, forgetting that $\\sqrt{4}=2$ is rational.", "Thinking all decimals are irrational — only non-terminating, non-recurring ones are."],
            examinerNote: "Award the mark for identifying $\\pi$ as the only number that cannot be written as a fraction.",
          },
        },
        {
          id: "ciem-u1-number-types-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the recurring decimal $0.\\dot{7}$ as a fraction in its simplest form. Enter the numerator and the denominator.",
          response: {
            type: "numeric",
            parts: [
              { label: "Numerator", answer: 7 },
              { label: "Denominator", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recurring decimal method", statement: "Multiply by $10^n$ so the recurring parts match, subtract to remove the infinite tail, then divide." },
            ],
            steps: [
              { reasoning: "Let $x=0.777\\ldots$; then $10x=7.777\\ldots$ and $x$ subtracted leaves a terminating decimal.", working: "10x-x=7.777\\ldots-0.777\\ldots\\Rightarrow 9x=7", marks: 1, markCode: "M" },
              { reasoning: "Divide and simplify — 7 and 9 share no factor.", working: "x=\\frac{7}{9}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{9}$",
            commonErrors: ["Writing $\\frac{7}{10}$ by treating it as a terminating decimal.", "Forgetting to subtract $x$ from $10x$."],
          },
        },
        {
          id: "ciem-u1-number-types-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the number of factors of 36, including 1 and 36 itself.",
          response: { type: "numeric", parts: [{ label: "Number of factors", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Number of factors", statement: "If $n=p_1^{a_1}p_2^{a_2}\\cdots p_k^{a_k}$ then $n$ has $(a_1+1)(a_2+1)\\cdots(a_k+1)$ factors." },
            ],
            steps: [
              { reasoning: "Factorise 36 into primes.", working: "36=2^2\\times3^2", marks: 1, markCode: "M" },
              { reasoning: "Increase each power by 1 and multiply.", working: "(2+1)(2+1)=9", marks: 1, markCode: "M" },
              { reasoning: "The factors are 1, 2, 3, 4, 6, 9, 12, 18, 36 — nine in total, confirming the count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 factors",
            commonErrors: ["Listing only factors greater than 1 and forgetting 1 and 36.", "Counting prime factors only."],
          },
        },
        {
          id: "ciem-u1-number-types-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two ropes have lengths 252 cm and 378 cm. Each rope is cut into pieces of equal length, and the pieces are to be as long as possible.",
          parts: [
            { label: "a", prompt: "Write 252 as a product of its prime factors.", marks: 2 },
            { label: "b", prompt: "Write 378 as a product of its prime factors. Hence write down the HCF and the LCM of 252 and 378.", marks: 3 },
            { label: "c", prompt: "Find the length of each piece of rope.", marks: 2 },
            { label: "d", prompt: "Find the total number of pieces obtained from both ropes.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) HCF", answer: 126, unit: "cm" },
              { label: "(b) LCM", answer: 756 },
              { label: "(c) piece length", answer: 126, unit: "cm" },
              { label: "(d) total pieces", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common primes, each to its lowest power." },
              { kind: "principle", name: "LCM from primes", statement: "Multiply all the primes, each to its highest power." },
              { kind: "principle", name: "Largest equal pieces", statement: "The longest equal piece length dividing both ropes is their HCF." },
            ],
            steps: [
              { part: "a", reasoning: "Repeated division by primes.", working: "252=2\\times126=2^2\\times63=2^2\\times3^2\\times7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Index form.", working: "252=2^2\\times3^2\\times7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise 378.", working: "378=2\\times189=2\\times3^3\\times7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "HCF: lowest powers of the common primes 2, 3 and 7.", working: "2\\times3^2\\times7=126", marks: 1, markCode: "A" },
              { part: "b", reasoning: "LCM: highest power of every prime.", working: "2^2\\times3^3\\times7=756", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The longest possible equal pieces have length equal to the HCF.", working: "\\text{piece}=126\\text{ cm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the length with units.", working: "126\\text{ cm}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide each rope length by the piece length.", working: "252\\div126=2,\\quad 378\\div126=3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the two counts.", working: "2+3=5\\text{ pieces}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2^2\\times3^2\\times7$ (b) HCF $=126$, LCM $=756$ (c) $126$ cm (d) $5$ pieces",
            commonErrors: ["Using the LCM instead of the HCF for the piece length.", "Swapping lowest and highest powers.", "Forgetting to add the piece counts from both ropes."],
            examinerNote: "Check in (b): $126\\times756=95256=252\\times378$.",
          },
        },
        {
          id: "ciem-u1-number-types-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following numbers is rational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{3}$" },
              { id: "b", text: "$\\sqrt{12}$" },
              { id: "c", text: "$\\pi$" },
              { id: "d", text: "$0.\\dot{6}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "A number that can be written as $\\frac{a}{b}$ with integers $a$, $b$ and $b\\ne0$; recurring decimals are rational." },
              { kind: "definition", name: "Irrational number", statement: "A real number that cannot be written as $\\frac{a}{b}$; its decimal never ends or repeats." },
            ],
            steps: [
              { reasoning: "$0.\\dot{6}=0.666\\ldots$ is a recurring decimal, so it can be written as a fraction and is rational; $\\sqrt{3}$, $\\pi$ and $\\sqrt{12}=2\\sqrt{3}$ are irrational.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $0.\\dot{6}$",
            commonErrors: ["Thinking every decimal is irrational — recurring decimals are rational.", "Choosing $\\sqrt{12}$ without simplifying it to $2\\sqrt{3}$."],
          },
        },
        {
          id: "ciem-u1-number-types-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the recurring decimal $0.\\dot{4}$ as a fraction in its simplest form. Enter the numerator and the denominator.",
          response: {
            type: "numeric",
            parts: [
              { label: "Numerator", answer: 4 },
              { label: "Denominator", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recurring decimal method", statement: "Multiply by $10^n$ so the recurring parts match, subtract to remove the infinite tail, then divide." },
            ],
            steps: [
              { reasoning: "Let $x=0.444\ldots$; then $10x=4.444\ldots$ and subtracting removes the tail.", working: "10x-x=4.444\ldots-0.444\ldots\\Rightarrow 9x=4", marks: 1, markCode: "M" },
              { reasoning: "Divide and simplify — 4 and 9 share no factor.", working: "x=\\frac{4}{9}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{9}$",
            commonErrors: ["Writing $\\frac{4}{10}$ by treating it as a terminating decimal.", "Using $100x$ when $10x$ already aligns the repeats."],
          },
        },
        {
          id: "ciem-u1-number-types-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the highest common factor of 12 and 18.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "The HCF is the product of the common primes, each to its lowest power." },
            ],
            steps: [
              { reasoning: "$12=2^2\\times3$ and $18=2\\times3^2$, so the HCF is $2\\times3=6$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: ["Answering 36, which is the LCM not the HCF.", "Listing only the common prime 2 and missing the factor 3."],
          },
        },
        {
          id: "ciem-u1-number-types-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given that $45=3^2\\times5$ and $75=3\\times5^2$, find the HCF and the LCM of 45 and 75.",
          response: {
            type: "numeric",
            parts: [
              { label: "HCF", answer: 15 },
              { label: "LCM", answer: 225 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Product of common primes to their lowest powers: $3\\times5=15$." },
              { kind: "principle", name: "LCM from primes", statement: "Product of all primes to their highest powers: $3^2\\times5^2=225$." },
            ],
            steps: [
              { reasoning: "HCF uses lowest powers of the common primes 3 and 5.", working: "3^1\\times5^1=15", marks: 1, markCode: "M" },
              { reasoning: "LCM uses highest powers of every prime.", working: "3^2\\times5^2=225", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCF $=15$, LCM $=225$",
            commonErrors: ["Swapping lowest and highest powers, giving HCF $225$.", "Forgetting that 3 and 5 both appear in both numbers."],
          },
        },
        {
          id: "ciem-u1-number-types-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $0.1\\dot{2}$ can be written as $\\frac{11}{90}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recurring decimal method", statement: "Multiply by powers of 10 so the repeating tails align, subtract, then divide." },
            ],
            steps: [
              { reasoning: "Let $x=0.1222\ldots$; the non-repeating digit means we need both $10x$ and $100x$.", working: "10x=1.222\ldots,\\quad 100x=12.222\ldots", marks: 1, markCode: "M" },
              { reasoning: "Subtract to eliminate the recurring tail.", working: "100x-10x=12.222\ldots-1.222\ldots\\Rightarrow 90x=11", marks: 1, markCode: "M" },
              { reasoning: "Divide to obtain the fraction.", working: "x=\\frac{11}{90}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.1\\dot{2}=\\frac{11}{90}$",
            commonErrors: ["Using $x=0.1\\dot{2}$ but writing $9x$ instead of $90x$.", "Multiplying by $1000$ unnecessarily and complicating the subtraction."],
            examinerNote: "All algebraic steps must be shown for a 'show that' question.",
          },
        },
        {
          id: "ciem-u1-number-types-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the number of factors of 60, including 1 and 60 itself.",
          response: { type: "numeric", parts: [{ label: "Number of factors", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Number of factors", statement: "If $n=p_1^{a_1}p_2^{a_2}\\cdots p_k^{a_k}$ then $n$ has $(a_1+1)(a_2+1)\\cdots(a_k+1)$ factors." },
            ],
            steps: [
              { reasoning: "Factorise 60 into primes.", working: "60=2^2\\times3\\times5", marks: 1, markCode: "M" },
              { reasoning: "Increase each power by 1 and multiply.", working: "(2+1)(1+1)(1+1)=12", marks: 1, markCode: "M" },
              { reasoning: "The factors are 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 — twelve in total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 factors",
            commonErrors: ["Forgetting the factor $+1$ on each power.", "Counting only prime factors."],
          },
        },
        {
          id: "ciem-u1-number-types-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two positive integers have HCF $4$ and LCM $60$. One of the integers is $12$.",
          parts: [
            { label: "a", prompt: "Write down the product of the two integers.", marks: 2 },
            { label: "b", prompt: "Hence find the other integer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "HCF × LCM", statement: "For two numbers, $\\text{HCF}\\times\\text{LCM}$ equals the product of the two numbers." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the product relationship.", working: "4\\times60=240", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the product.", working: "240", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the product by the known number 12.", working: "240\\div12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute and verify: HCF(12, 20) = 4 and LCM(12, 20) = 60 ✓.", working: "=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $240$ (b) $20$",
            commonErrors: ["Dividing LCM by the number instead of the product.", "Not verifying that 20 is consistent with the given HCF and LCM."],
          },
        },
        {
          id: "ciem-u1-number-types-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Express the recurring decimal $0.\\dot{3}\\dot{7}$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recurring decimal method", statement: "A two-digit repeat needs $10^2$ so the tails align; subtract and divide." },
            ],
            steps: [
              { reasoning: "Let $x=0.373737\ldots$; multiply by 100 so the repeat aligns.", working: "100x=37.373737\ldots", marks: 1, markCode: "M" },
              { reasoning: "Subtract $x$ from $100x$ to remove the infinite tail.", working: "99x=37", marks: 1, markCode: "M" },
              { reasoning: "Divide to get the fraction.", working: "x=\\frac{37}{99}", marks: 1, markCode: "M" },
              { reasoning: "37 is prime and does not divide 99, so it is already simplest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{37}{99}$",
            commonErrors: ["Using $10x$ instead of $100x$, which does not align the two-digit repeat.", "Writing $\\frac{37}{100}$ and losing the recurring nature."],
          },
        },
        {
          id: "ciem-u1-number-types-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an integer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{5}$" },
              { id: "b", text: "$0.\\dot{3}$" },
              { id: "c", text: "$-3$" },
              { id: "d", text: "$\\sqrt{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Integer", statement: "A whole number — positive, negative or zero — with no fractional part." },
            ],
            steps: [
              { reasoning: "$-3$ is a whole number; $\\frac{2}{5}$, $\\sqrt{2}$ and $0.\\dot{3}$ all have non-zero fractional parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $-3$",
            commonErrors: ["Thinking $0.\\dot{3}$ is not rational — it is rational but not an integer.", "Forgetting that negative whole numbers are integers."],
          },
        },
        {
          id: "ciem-u1-number-types-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the HCF and the LCM of 18 and 27.",
          response: {
            type: "numeric",
            parts: [
              { label: "HCF", answer: 9 },
              { label: "LCM", answer: 54 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF and LCM from primes", statement: "$18=2\\times3^2$, $27=3^3$; HCF takes common primes to lowest power, LCM all primes to highest power." },
            ],
            steps: [
              { reasoning: "Factorise both numbers: the only common prime is 3.", working: "18=2\\times3^2,\\quad 27=3^3", marks: 1, markCode: "M" },
              { reasoning: "HCF $=3^2=9$; LCM $=2\\times3^3=54$.", working: "\\text{HCF}=9,\\quad \\text{LCM}=54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCF $=9$, LCM $=54$",
            commonErrors: ["Including the prime 2 in the LCM only once is correct — forgetting it entirely gives 27."],
          },
        },
        {
          id: "ciem-u1-number-types-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the lowest common multiple of 12, 18 and 30.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "LCM from primes", statement: "The LCM is the product of every prime that appears, each to its highest power." },
            ],
            steps: [
              { reasoning: "Factorise all three numbers.", working: "12=2^2\\times3,\\quad 18=2\\times3^2,\\quad 30=2\\times3\\times5", marks: 1, markCode: "M" },
              { reasoning: "Take the highest power of each prime: $2^2$, $3^2$ and $5^1$.", working: "2^2\\times3^2\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=180", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$180$",
            commonErrors: ["Using only two of the three numbers.", "Taking lowest powers instead of highest."],
          },
        },
        {
          id: "ciem-u1-number-types-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write $360$ as $2^a\\times3^b\\times5^c$, where $a$, $b$ and $c$ are positive integers. Find the values of $a$, $b$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Prime factorisation", statement: "Repeated division by primes until only 1 remains." },
            ],
            steps: [
              { reasoning: "Divide out the factors of 2.", working: "360=2\\times180=2^2\\times90=2^3\\times45", marks: 1, markCode: "M" },
              { reasoning: "Factorise the remaining 45.", working: "45=3^2\\times5\\Rightarrow 360=2^3\\times3^2\\times5", marks: 1, markCode: "M" },
              { reasoning: "Read off the indices.", working: "a=3,\\ b=2,\\ c=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$360=2^3\\times3^2\\times5^1$, so $a=3$, $b=2$, $c=1$",
            commonErrors: ["Stopping the factorisation at $2^3\\times45$ without splitting 45."],
          },
        },
      ],
    },
    {
      id: "ciem-u1-laws-of-indices",
      title: "The laws of indices",
      skill: "Apply the index laws to simplify expressions and solve equations with integer, fractional and negative indices.",
      lesson: {
        sections: [
          {
            heading: "The index laws",
            body: "For $a\\ne0$ and rational $m,n$:\n\n- $a^m\\times a^n=a^{m+n}$\n- $a^m\\div a^n=a^{m-n}$\n- $(a^m)^n=a^{mn}$\n- $a^0=1$\n- $a^{-n}=\\frac{1}{a^n}$\n- $a^{\\frac{1}{n}}=\\sqrt[n]{a}$, so $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$\n\nThese laws let you rewrite every expression with the same base, or the same power, before combining.",
          },
          {
            heading: "Choosing a common base",
            body: "To simplify a quotient or product of powers with different bases, rewrite each base as a power of a common number. For example $8=2^3$ and $4=2^2$, so $\\frac{8^2}{4^3}=\\frac{(2^3)^2}{(2^2)^3}=\\frac{2^6}{2^6}=1$.",
          },
          {
            heading: "Solving index equations",
            body: "If both sides can be written with the same base, equate the indices. For example $5^{2x-1}=125=5^3$ gives $2x-1=3$, so $x=2$. If the bases cannot be matched, take logarithms — but at IGCSE, matching bases is the expected method.",
          },
        ],
        keyFormulas: [
          { name: "Product", statement: "$a^m\\times a^n=a^{m+n}$" },
          { name: "Quotient", statement: "$a^m\\div a^n=a^{m-n}$" },
          { name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
          { name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$" },
          { name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$" },
        ],
        workedExample: {
          problem: "Evaluate $27^{-\\frac{2}{3}}$.",
          solution: "$27=3^3$, so $27^{-\\frac{2}{3}}=(3^3)^{-\\frac{2}{3}}=3^{-2}=\\frac{1}{9}$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-laws-of-indices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $(2^3)^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$216$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$64$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$." },
            ],
            steps: [
              { reasoning: "Multiply the indices: $(2^3)^2=2^{3\\times2}=2^6$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $64$",
            commonErrors: ["Multiplying the base by the outer index to get 12.", "Adding indices inside to get $2^5=32$.", "Computing $6^3=216$ by multiplying bases."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{3^8}{3^5}$. Enter the answer as a single number.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 27 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Quotient law", statement: "$a^m\\div a^n=a^{m-n}$ for $a\\ne0$." },
            ],
            steps: [
              { reasoning: "Subtract the indices with the same base.", working: "3^{8-5}=3^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power.", working: "3^3=27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27$",
            commonErrors: ["Subtracting to get $3^3$ but evaluating as $3\\times3=9$.", "Dividing the indices: $3^{8\\div5}$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $5^{2x-1}=125$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index equation method", statement: "If $a^m=a^n$ with $a\\ne0,1$ then $m=n$; rewrite both sides with the same base first." },
            ],
            steps: [
              { reasoning: "Write 125 as a power of 5.", working: "125=5^3", marks: 1, markCode: "M" },
              { reasoning: "Equate the indices.", working: "2x-1=3", marks: 1, markCode: "M" },
              { reasoning: "Solve the linear equation.", working: "2x=4\\Rightarrow x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$",
            commonErrors: ["Equating $2x-1$ to 125 instead of to the index 3.", "Sign error: $2x-1=3$ giving $x=1$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate each expression, giving exact answers.",
          parts: [
            { label: "a", prompt: "Evaluate $27^{\\frac{2}{3}}$.", marks: 3 },
            { label: "b", prompt: "Evaluate $16^{-\\frac{3}{4}}$.", marks: 3 },
            { label: "c", prompt: "Solve $2^{x+1}=32$ for $x$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 9 },
              { label: "(b)", answer: 0.125 },
              { label: "(c) x", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m=(a^m)^{\\frac{1}{n}}$" },
              { kind: "law", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$" },
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
            ],
            steps: [
              { part: "a", reasoning: "Write 27 as a power of 3.", working: "27=3^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the fractional index: cube root then square (or power then root).", working: "27^{\\frac{2}{3}}=(\\sqrt[3]{27})^2=3^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "3^2=9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write 16 as a power of 2 and apply the negative fractional index.", working: "16^{-\\frac{3}{4}}=(2^4)^{-\\frac{3}{4}}=2^{-3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply the negative index law.", working: "2^{-3}=\\frac{1}{2^3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{1}{8}=0.125", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write 32 as a power of 2.", working: "32=2^5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equate the indices.", working: "x+1=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $9$ (b) $\\frac{1}{8}$ (c) $x=4$",
            commonErrors: ["Reading $a^{\\frac{m}{n}}$ as $\\frac{a^m}{a^n}$ or $\\frac{a^m}{n}$.", "In (b) computing $2^{-3}$ as $-8$ instead of $\\frac{1}{8}$.", "In (c) equating $x+1$ to 32 rather than to 5."],
            examinerNote: "Exact answers are required in (a) and (b); $0.125$ is accepted for (b) but $\\frac{1}{8}$ is preferred.",
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $5^3\\times5^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5^6$" },
              { id: "b", text: "$10^5$" },
              { id: "c", text: "$5^5$" },
              { id: "d", text: "$25^5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$a^m\\times a^n=a^{m+n}$ for the same base $a$." },
            ],
            steps: [
              { reasoning: "Add the indices, keeping the base unchanged.", working: "5^{3+2}=5^5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $5^5$",
            commonErrors: ["Multiplying the indices to get $5^6$.", "Multiplying the bases to get $10^5$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $2^{-4}$, giving your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.0625 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$." },
            ],
            steps: [
              { reasoning: "Apply the negative index law.", working: "2^{-4}=\\frac{1}{2^4}=\\frac{1}{16}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "\\frac{1}{16}=0.0625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0625$",
            commonErrors: ["Writing $-16$ instead of $\\frac{1}{16}$.", "Computing $2^4=8$ instead of 16."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is equal to $16^{\\frac{1}{4}}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac{1}{n}}=\\sqrt[n]{a}$; the fourth root of 16 is 2." },
            ],
            steps: [
              { reasoning: "The index $\\frac14$ means the fourth root; $\\sqrt[4]{16}=2$ since $2^4=16$.", working: "16^{\\frac14}=\\sqrt[4]{16}=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $2$",
            commonErrors: ["Reading $\\frac14$ as division and computing $16\\div4=4$.", "Taking the square root to get 4."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $8^{\\frac{2}{3}}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$; with $8=2^3$, take the cube root then square." },
            ],
            steps: [
              { reasoning: "Write 8 as a power of 2 and apply the fractional index.", working: "8^{\\frac23}=(2^3)^{\\frac23}=2^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^2=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Computing $8^{\\frac23}$ as $\\frac{8^2}{3}$ or $\\frac{64}{3}$.", "Taking the cube root as 4 instead of 2."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{2^5\\times2^{-2}}{2^3}$, giving your answer as a single power of 2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Product and quotient laws", statement: "$a^m\\times a^n=a^{m+n}$ and $\\frac{a^m}{a^n}=a^{m-n}$; combine the indices $5-2-3=0$." },
            ],
            steps: [
              { reasoning: "Combine the numerator using the product law.", working: "2^5\\times2^{-2}=2^{5-2}=2^3", marks: 1, markCode: "M" },
              { reasoning: "Apply the quotient law.", working: "\\frac{2^3}{2^3}=2^{3-3}=2^0", marks: 1, markCode: "M" },
              { reasoning: "Use $a^0=1$.", working: "=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Adding indices with wrong signs: $5-2+3=6$.", "Leaving the answer as $2^0$ without evaluating."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\left(\\frac{1}{27}\\right)^{-\\frac{1}{3}}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$; a negative fractional index combines the reciprocal and the root." },
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac{1}{n}}=\\sqrt[n]{a}$." },
            ],
            steps: [
              { reasoning: "Rewrite the base as a power of 3.", working: "\\frac{1}{27}=3^{-3}", marks: 1, markCode: "M" },
              { reasoning: "Apply the power of a power law.", working: "(3^{-3})^{-\\frac13}=3^{(-3)\\times(-\\frac13)}=3^1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Forgetting that a negative times a negative index gives a positive index.", "Taking the cube root of 27 as 9 instead of 3."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify $\\frac{2^6\\times4^2}{8^2}$, giving your answer as a single number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common base", statement: "Rewrite all bases as powers of 2: $4=2^2$ and $8=2^3$." },
            ],
            steps: [
              { reasoning: "Rewrite 4 and 8 as powers of 2.", working: "4^2=(2^2)^2=2^4,\\quad 8^2=(2^3)^2=2^6", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the expression.", working: "\\frac{2^6\\times2^4}{2^6}", marks: 1, markCode: "M" },
              { reasoning: "Combine indices in numerator and denominator.", working: "=2^{6+4-6}=2^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^4=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
            commonErrors: ["Computing $4^2$ and $8^2$ numerically and losing track of the shared base.", "Subtracting indices incorrectly: $6+4-6=4$, not 16 as an index error gives $2^{16}$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $9^x=27$ for $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Matching bases", statement: "Rewrite both sides with the same base: $9=3^2$ and $27=3^3$, then equate indices." },
            ],
            steps: [
              { reasoning: "Write both sides as powers of 3.", working: "9^x=(3^2)^x=3^{2x},\\quad 27=3^3", marks: 1, markCode: "M" },
              { reasoning: "Equate the indices.", working: "2x=3", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x=\\frac{3}{2}=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1.5$",
            commonErrors: ["Equating $x$ directly to 3 without converting the base.", "Writing $9=3^3$ and getting $x=1$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $7^0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "undefined" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Zero index", statement: "$a^0=1$ for any $a\\ne0$." },
            ],
            steps: [
              { reasoning: "Any non-zero number to the power 0 equals 1.", working: "7^0=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $1$",
            commonErrors: ["Answering 0, confusing the index with the value.", "Answering 7 by ignoring the exponent."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{5^6}{5^2\\times5^3}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Product and quotient laws", statement: "$\\frac{a^m}{a^n\\times a^p}=a^{m-n-p}$." },
            ],
            steps: [
              { reasoning: "Combine the denominator using the product law.", working: "5^2\\times5^3=5^5", marks: 1, markCode: "M" },
              { reasoning: "Apply the quotient law and evaluate.", working: "\\frac{5^6}{5^5}=5^{6-5}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Dividing the indices: $6\\div(2\\times3)$.", "Subtracting to get $5^{6-2+3}=5^7$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Show that $16^{\\frac{3}{4}}=8$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$; use a matching base first." },
            ],
            steps: [
              { reasoning: "Write 16 as a power of 2.", working: "16=2^4", marks: 1, markCode: "M" },
              { reasoning: "Apply the fractional index: $\\frac34$ of the power.", working: "(2^4)^{\\frac34}=2^{4\\times\\frac34}=2^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and conclude.", working: "2^3=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16^{\\frac34}=8$",
            commonErrors: ["Computing $16^{\\frac34}$ as $\\frac{16^3}{4}$ or $\\frac{4096}{4}$.", "Using $\\frac{4}{3}$ instead of $\\frac{3}{4}$."],
            examinerNote: "The power-of-a-power step must be visible in a 'show that' question.",
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate each expression, giving exact answers.",
          parts: [
            { label: "a", prompt: "Evaluate $32^{\\frac{3}{5}}$.", marks: 2 },
            { label: "b", prompt: "Evaluate $125^{-\\frac{1}{3}}$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 8 },
              { label: "(b)", answer: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m=(a^m)^{\\frac1n}$." },
              { kind: "law", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Write 32 as a power of 2.", working: "32=2^5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the fractional index.", working: "(2^5)^{\\frac35}=2^3=8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write 125 as a power of 5 and apply the negative fractional index.", working: "125^{-\\frac13}=(5^3)^{-\\frac13}=5^{-1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply the negative index law.", working: "5^{-1}=\\frac{1}{5}=0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8$ (b) $\\frac{1}{5}$",
            commonErrors: ["In (a) taking the fifth root of 32 as 2 but forgetting to cube it.", "In (b) writing $5^{-1}$ as $-5$ instead of $\\frac15$."],
            examinerNote: "$\\frac15$ is preferred for (b); $0.2$ is accepted.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u1-number-indices-notes",
      title: "Number types, factors and indices — revision notes",
      summary: "Number sets, prime factorisation, HCF/LCM, recurring decimals and every index law with worked examples.",
      sections: [
        {
          heading: "Number sets at a glance",
          body: "Memorise the nesting: naturals $\\subset$ integers $\\subset$ rationals $\\subset$ reals. Irrationals sit inside the reals alongside the rationals.\n\nA quick test for rational: can it be written $\\frac{a}{b}$? Terminating decimals and recurring decimals are rational; $\\pi$, $\\sqrt{2}$, $\\sqrt{3}$ are not. Perfect squares and perfect cubes of integers are rational even though they look like roots: $\\sqrt{4}=2$, $\\sqrt[3]{8}=2$.",
        },
        {
          heading: "Prime factorisation, HCF and LCM",
          body: "Write each number in index form first — it makes the comparison mechanical.\n\n- **HCF**: for each prime that appears in *both* factorizations, take the *lowest* power.\n- **LCM**: for *every* prime that appears in *either* factorization, take the *highest* power.\n\nSanity check that almost always catches errors: $\\text{HCF}\\times\\text{LCM}$ should equal the product of the two numbers.\n\n**Worked example.** Find the HCF and LCM of $252=2^2\\times3^2\\times7$ and $378=2\\times3^3\\times7$.\n\n- HCF $=2^1\\times3^2\\times7=126$\n- LCM $=2^2\\times3^3\\times7=756$\n- Check: $126\\times756=95\\,256=252\\times378$ ✓",
        },
        {
          heading: "Recurring decimals",
          body: "The method is always the same: multiply by $10^n$ until two copies have identical repeating tails, subtract, divide.\n\n- $0.\\dot{7}$: $10x=7.777\\ldots$, $9x=7$, $x=\\frac{7}{9}$\n- $0.1\\dot{3}$: $100x=13.333\\ldots$, $90x=12$, $x=\\frac{2}{15}$\n- $0.2\\dot{7}$: $100x=27.777\\ldots$, $90x=25$, $x=\\frac{5}{18}$\n\nCommon trap: if the repeat has $k$ digits, you need $10^k$ (or $10^{k+1}$ when a non-repeating digit leads).",
        },
        {
          heading: "Laws of indices — the complete set",
          body: "For $a\\ne0$:\n\n| Law | Rule | Example |\n|---|---|---|\n| Product | $a^m\\times a^n=a^{m+n}$ | $2^3\\times2^4=2^7$ |\n| Quotient | $a^m\\div a^n=a^{m-n}$ | $\\frac{3^8}{3^5}=3^3$ |\n| Power | $(a^m)^n=a^{mn}$ | $(2^3)^2=2^6=64$ |\n| Zero | $a^0=1$ | $5^0=1$ |\n| Negative | $a^{-n}=\\frac{1}{a^n}$ | $2^{-3}=\\frac18$ |\n| Fractional | $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$ | $27^{\\frac23}=(\\sqrt[3]{27})^2=9$ |\n\n**Worked example.** Evaluate $16^{-\\frac34}$.\n\n$16=2^4$, so $16^{-\\frac34}=(2^4)^{-\\frac34}=2^{-3}=\\frac{1}{8}$.\n\n**Worked example.** Solve $5^{2x-1}=125$.\n\n$125=5^3$, so $2x-1=3$, giving $x=2$.",
        },
        {
          heading: "Exam technique",
          body: "- In 'show that' and 'hence' questions, every algebraic step must be visible — don't jump to the answer.\n- For HCF/LCM questions, write the prime factorisations even if the question only asks for the answers; the method marks depend on them.\n- For index equations, always rewrite the constant as a power of the same base before equating indices.\n- Fractional indices: denominator = root, numerator = power. $a^{\\frac{m}{n}}$ means 'take the $n$th root, then raise to the $m$'.",
        },
      ],
    },
  ],
};
