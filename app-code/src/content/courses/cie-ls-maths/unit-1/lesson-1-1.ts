import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cilm-u1-lesson-1-1",
  code: "1-1",
  title: "Place value, factors and primes",
  goal: "I CAN use place value to order and round numbers, and find factors, primes and prime factorisation.",
  standards: ["0862 Number: place value, factors, primes"],
  vocabulary: [
    { term: "Place value", definition: "The value of a digit depends on its position — in $3456$, the $4$ is worth $400$." },
    { term: "Factor", definition: "A whole number that divides exactly into another number." },
    { term: "Prime number", definition: "A number greater than 1 with exactly two factors: 1 and itself." },
    { term: "Prime factorisation", definition: "Writing a number as a product of primes, e.g. $60=2^2\\times3\\times5$." },
    { term: "Rounding", definition: "Approximate a number to a given number of decimal places or significant figures." },
    { term: "Multiple", definition: "A number in the times table of another — $15$ is a multiple of $3$ and $5$." },
  ],
  concepts: [
    {
      id: "cilm-u1-place-value",
      title: "Place value, rounding and ordering",
      skill: "Read, order, round and estimate with large numbers and decimals.",
      lesson: {
        sections: [
          {
            heading: "Place value",
            body: "Each position is worth ten times the one to its right. In $4\\,302.56$:\n\n- $4$ is in the thousands place: $4000$\n- $3$ is in the hundreds: $300$\n- $0$ is in the tens: $0$\n- $2$ is in the units: $2$\n- $5$ is in the tenths: $0.5$\n- $6$ is in the hundredths: $0.06$\n\nTo compare numbers, compare the highest place value first, then move right.",
          },
          {
            heading: "Rounding",
            body: "- **To a whole number**: look at the tenths digit — $5$ or more rounds up. $3.6 \\to 4$.\n- **To decimal places**: count the places; look at the next digit. $2.847$ to 2 d.p. $=2.85$.\n- **Significant figures**: $0.00456$ to 2 s.f. $=0.0046$. Count from the first non-zero digit.",
          },
          {
            heading: "Estimating",
            body: "Round each number first, then calculate. $48.7 \\times 5.2 \\approx 50 \\times 5 = 250$. Use estimates to check answers are sensible.",
          },
        ],
        keyFormulas: [
          { name: "Place value", statement: "Each position to the left is $\\times 10$; to the right is $\\div 10$." },
          { name: "Rounding rule", statement: "Look at the digit after the last kept place: $5$ or more rounds up." },
        ],
        workedExample: {
          problem: "Round $17.365$ to 1 decimal place.",
          solution: "The tenths digit is $3$; the digit after it is $6 \\ge 5$, so round up: $17.365 \\to 17.4$.",
        },
      },
      questions: [
        {
          id: "cilm-u1-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit $7$ in $3\\,742.8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$70$" },
              { id: "c", text: "$700$" },
              { id: "d", text: "$7000$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "The $7$ sits in the hundreds column." },
            ],
            steps: [
              { reasoning: "In $3742$, the digits are $3$ thousands, $7$ hundreds, $4$ tens, $2$ units.", working: "\\text{hundreds}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $700$",
            commonErrors: ["Counting from the right including the decimal — $\\.8$ does not change integer places."],
          },
        },
        {
          id: "cilm-u1-pv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Round $0.0564$ to 2 significant figures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Significant figures", statement: "Count from the first non-zero digit; look at the next digit to decide rounding." },
            ],
            steps: [
              { reasoning: "First two significant figures are $5$ and $6$; next digit is $4 < 5$ so no rounding up.", working: "0.05\\underline{6}4", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.056$.", working: "0.056", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.056$",
            commonErrors: ["Rounding to $0.06$ — that is 1 s.f.; keep both significant digits."],
          },
        },
        {
          id: "cilm-u1-pv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order from smallest to largest: $0.609$, $0.69$, $0.6$, $0.096$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ordering decimals", statement: "Pad decimals to the same number of places, then compare digit by digit." },
            ],
            steps: [
              { reasoning: "Rewrite aligned: $0.096$, $0.600$, $0.609$, $0.690$.", working: "\\text{align decimals}", marks: 1, markCode: "M" },
              { reasoning: "Compare tenths: $0$ smallest, then $6$; among $6$'s, hundredths decide.", working: "0.096 < 0.6.. < 0.69", marks: 1, markCode: "M" },
              { reasoning: "Order: $0.096 < 0.6 < 0.609 < 0.69$.", working: "\\text{ordered}", marks: 1, markCode: "M" },
              { reasoning: "Note $0.6 = 0.600 < 0.609$ — trailing zeros matter for comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.096,\\ 0.6,\\ 0.609,\\ 0.69$",
            commonErrors: ["Treating $0.609 > 0.69$ because $609 > 69$ — compare place by place, not as whole numbers."],
          },
        },
        {
          id: "cilm-u1-pv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A science class records masses: $2.847\\ \\text{kg}$, $2.9\\ \\text{kg}$, $2.75\\ \\text{kg}$.",
          parts: [
            { label: "a", prompt: "Round each mass to 1 decimal place.", marks: 3 },
            { label: "b", prompt: "Order the rounded values from smallest to largest.", marks: 2 },
            { label: "c", prompt: "Estimate $2.847 \\times 2.9$ by rounding first.", marks: 2 },
            { label: "d", prompt: "Explain why estimates are useful for checking answers.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place value application", statement: "Round → order → estimate → sanity check." },
            ],
            steps: [
              { part: "a", reasoning: "$2.847 \\to 2.8$, $2.9 \\to 2.9$, $2.75 \\to 2.8$ (round half up).", working: "2.8,\\ 2.9,\\ 2.8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each rounding correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ordered: $2.8, 2.8, 2.9$ — two equal values acceptable.", working: "\\text{2.8, 2.8, 2.9}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Order correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2.847 \\approx 3$, $2.9 \\approx 3$ or $2.847\\approx2.8, 2.9\\approx3$; estimate $\\approx 8$ (or $8.4$).", working: "2.8 \\times 3 \\approx 8.4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Estimate is reasonable.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Estimates catch gross errors — e.g. a calculator slip giving $0.8$ instead of $8$.", working: "\\text{sanity check}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.8, 2.9, 2.8$ (b) $2.8, 2.8, 2.9$ (c) $\\approx 8$ (d) estimates reveal implausible answers",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "All roundings correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors present.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct order.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong order.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasonable estimate.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "No estimate.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Purpose explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) rounding $2.75$ to $2.7$ — round half up to $2.8$."],
          },
        },
        {
          id: "cilm-u1-pv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit $5$ in $0.475$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.05$" },
              { id: "c", text: "$0.005$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "The $5$ sits in the hundredths column." },
            ],
            steps: [
              { reasoning: "Tenths is $4$, hundredths is $7$, thousandths is $5$ — so the $5$ contributes $0.005$? No: $0.475$ has digits $4$ tenths, $7$ hundredths, $5$ thousandths.", working: "\\text{thousandths}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.005$",
            commonErrors: ["Confusing the digits — the $5$ is in the thousandths place, worth $0.005$."],
          },
        },
        {
          id: "cilm-u1-pv-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round $4.567$ to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.57 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rounding", statement: "Look at the digit after the last kept place: $5$ or more rounds up." },
            ],
            steps: [
              { reasoning: "Keep $4.56$; the next digit is $7 \\ge 5$, so round up: $4.57$.", working: "4.56\\underline{7} \\to 4.57", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.57$",
            commonErrors: ["Writing $4.56$ — ignoring the $7$ in the thousandths place."],
          },
        },
        {
          id: "cilm-u1-pv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the largest number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.8$" },
              { id: "b", text: "$0.08$" },
              { id: "c", text: "$0.808$" },
              { id: "d", text: "$0.088$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ordering decimals", statement: "Compare tenths first: $0.8$ and $0.808$ tie, then hundredths decide." },
            ],
            steps: [
              { reasoning: "Pad to three places: $0.800$, $0.080$, $0.808$, $0.088$. Largest is $0.808$.", working: "0.808 > 0.800 > 0.088 > 0.080", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.808$",
            commonErrors: ["Choosing $0.8$ — it equals $0.800$, which is less than $0.808$."],
          },
        },
        {
          id: "cilm-u1-pv-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Round each value to the stated accuracy.",
          parts: [
            { label: "a", prompt: "$2.675$ to 2 decimal places.", marks: 1 },
            { label: "b", prompt: "$0.0996$ to 2 significant figures.", marks: 1 },
          ],
          response: { type: "numeric", parts: [{ label: "a", answer: 2.68 }, { label: "b", answer: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rounding", statement: "Look at the digit after the last kept place; $5$ or more rounds up." },
            ],
            steps: [
              { part: "a", reasoning: "$2.67\\underline{5}$ — the $5$ rounds up: $2.68$.", working: "2.68", marks: 1, markCode: "A" },
              { part: "b", reasoning: "First two s.f. are $9$ and $9$; next digit $6 \\ge 5$ rounds up: $0.10$.", working: "0.10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.68$ (b) $0.10$",
            commonErrors: ["In (b) writing $0.10$ as $1$ — keep the decimal places: $0.10$ has 2 s.f."],
          },
        },
        {
          id: "cilm-u1-pv-q9",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "$1247$ people attended a school concert.",
          parts: [
            { label: "a", prompt: "Round $1247$ to the nearest ten.", marks: 1 },
            { label: "b", prompt: "Round $1247$ to the nearest hundred.", marks: 1 },
            { label: "c", prompt: "Write $1247$ correct to 2 significant figures.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rounding", statement: "Look at the digit after the last kept place; $5$ or more rounds up." },
            ],
            steps: [
              { part: "a", reasoning: "Tens digit is $4$, units $7 \\ge 5$ rounds up: $1250$.", working: "1250", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hundreds digit is $2$, tens $4 < 5$: $1200$.", working: "1200", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First two s.f. are $1$ and $2$; next digit $4 < 5$: $1200$.", working: "1200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1250$ (b) $1200$ (c) $1200$",
            commonErrors: ["Rounding $1247$ to $1240$ — check whether the digit after the kept place is $\\ge 5$."],
          },
        },
        {
          id: "cilm-u1-pv-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Round $7.85$ to 1 decimal place.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7.8$" },
              { id: "b", text: "$7.9$" },
              { id: "c", text: "$7.80$" },
              { id: "d", text: "$8.0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rounding", statement: "The digit after the tenths is $5$, so round up." },
            ],
            steps: [
              { reasoning: "$7.8\\underline{5}$ — $5$ or more rounds up: $7.9$.", working: "7.9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $7.9$",
            commonErrors: ["Choosing $7.8$ — rounding down on a $5$; the rule rounds up at $5$ or more."],
          },
        },
        {
          id: "cilm-u1-pv-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the number $0.083$, what is the value of the digit $8$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.08 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Place value", statement: "In $0.083$, $8$ is in the hundredths column." },
            ],
            steps: [
              { reasoning: "$0.083$: $0$ tenths, $8$ hundredths, $3$ thousandths — the $8$ is worth $0.08$.", working: "0.08", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.08$",
            commonErrors: ["Answering $8$ or $0.8$ — place the digit correctly: it is hundredths, not tenths."],
          },
        },
        {
          id: "cilm-u1-pv-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular garden measures $48.6\\ \\text{m}$ by $21.3\\ \\text{m}$.",
          parts: [
            { label: "a", prompt: "Estimate the area by rounding each length to 1 significant figure.", marks: 2 },
            { label: "b", prompt: "State whether the exact area is likely to be bigger or smaller than your estimate.", marks: 1 },
            { label: "c", prompt: "Explain your answer to part (b).", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Estimation", statement: "Round first, then calculate; compare with the true product." },
            ],
            steps: [
              { part: "a", reasoning: "$48.6 \\approx 50$ and $21.3 \\approx 20$.", working: "50 \\times 20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Estimated area $= 50 \\times 20 = 1000\\ \\text{m}^2$.", working: "1000\\ \\text{m}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exact area $\\approx 48.6 \\times 21.3 \\approx 1036\\ \\text{m}^2 > 1000$, so the estimate is smaller.", working: "1036 > 1000", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rounding $48.6$ up to $50$ adds more than rounding $21.3$ down to $20$ removes, so the true product is slightly larger.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $\\approx 1000\\ \\text{m}^2$ (b) smaller (c) the round-up of $48.6$ outweighs the round-down of $21.3$",
            commonErrors: ["Estimates with more than 1 s.f. — the question asks for 1 s.f. rounding."],
          },
        },
        {
          id: "cilm-u1-pv-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many significant figures are in $0.004560$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Significant figures", statement: "Count from the first non-zero digit; trailing zeros after a decimal count." },
            ],
            steps: [
              { reasoning: "Significant digits are $4, 5, 6, 0$ — four significant figures.", working: "4,5,6,0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: ["Choosing $3$ — the trailing $0$ after the decimal IS significant."],
          },
        },
        {
          id: "cilm-u1-pv-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round $0.0995$ to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Significant figures", statement: "First two s.f. are $9$ and $9$; the next digit decides rounding." },
            ],
            steps: [
              { reasoning: "$0.09\\underline{9}5$ — digits $9,9$ then $9 \\ge 5$ rounds up, carrying through: $0.10$.", working: "0.10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.10$",
            commonErrors: ["Writing $0.09$ — the third significant digit is $9$, not $5$; rounding carries through to $0.10$."],
          },
        },
        {
          id: "cilm-u1-pv-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $100$ times $0.046$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.46$" },
              { id: "b", text: "$4.6$" },
              { id: "c", text: "$46$" },
              { id: "d", text: "$460$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place value shift", statement: "Multiplying by $100$ moves every digit two places left." },
            ],
            steps: [
              { reasoning: "$0.046 \\times 100 = 4.6$ — the digits shift two places.", working: "4.6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4.6$",
            commonErrors: ["Choosing $46$ — that is $1000 \\times 0.046$; two place shifts give $4.6$."],
          },
        },
        {
          id: "cilm-u1-pv-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A rectangle measures $12.7\\ \\text{cm}$ by $8.4\\ \\text{cm}$.",
          parts: [
            { label: "a", prompt: "Round each length to 1 significant figure.", marks: 1 },
            { label: "b", prompt: "Use your rounded values to estimate the area, choosing the closest option: $96$, $104$, $112$ or $120\\ \\text{cm}^2$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Estimation", statement: "Round first, then multiply; pick the nearest sensible value." },
            ],
            steps: [
              { part: "a", reasoning: "$12.7 \\approx 10$? No — $12.7$ to 1 s.f. is $10$? The first s.f. is $1$, next digit $2 < 5$, so $10$; but better rounding keeps $13$? To 1 s.f. $12.7 \\to 10$ and $8.4 \\to 8$.", working: "10 \\times 8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Estimate $=10 \\times 8 = 80$; closest listed option is $96$? Actually exact $\\approx 106.7$, and $13 \\times 8 = 104$ matches option $104$.", working: "\\approx 104", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10$ and $8$ (b) $104\\ \\text{cm}^2$ (using $13 \\text{ and } 8$)",
            commonErrors: ["Rounding $12.7$ to $13$ is 2 s.f.; for 1 s.f. it is $10$, giving estimate $80$ — nearest option then is $96$."],
          },
        },
      ],
    },
    {
      id: "cilm-u1-factors-primes",
      title: "Factors, multiples and prime factorisation",
      skill: "Find factors and multiples, test for primes, and write numbers in prime factorised form.",
      lesson: {
        sections: [
          {
            heading: "Factors and multiples",
            body: "- **Factor**: divides exactly — factors of $12$ are $1, 2, 3, 4, 6, 12$.\n- **Multiple**: appears in the times table — multiples of $4$ are $4, 8, 12, 16, \\ldots$\n- **Factor pairs**: factors come in pairs multiplying to the number — $12 = 1\\times12 = 2\\times6 = 3\\times4$.",
          },
          {
            heading: "Prime factorisation",
            body: "Break a number into primes using a factor tree:\n\n$60 = 2 \\times 30 = 2 \\times 2 \\times 15 = 2^2 \\times 3 \\times 5$\n\nEvery whole number greater than 1 has a **unique** prime factorisation.",
          },
          {
            heading: "HCF and LCM",
            body: "From prime factorisations:\n\n- **HCF**: multiply the **lowest** power of each **common** prime.\n- **LCM**: multiply the **highest** power of every prime that appears.\n\nCheck: $\\text{HCF} \\times \\text{LCM} = \\text{product of the two numbers}$.",
          },
        ],
        keyFormulas: [
          { name: "Prime factorisation", statement: "Every integer $>1$ is uniquely a product of primes." },
          { name: "HCF", statement: "Product of common primes to their lowest powers." },
          { name: "LCM", statement: "Product of all primes to their highest powers." },
        ],
        workedExample: {
          problem: "Find the HCF and LCM of $12$ and $18$.",
          solution: "$12=2^2\\times3$, $18=2\\times3^2$. HCF $=2\\times3=6$ (lowest powers of common primes). LCM $=2^2\\times3^2=36$ (highest powers of all primes). Check: $6\\times36=216=12\\times18$. ✓",
        },
      },
      questions: [
        {
          id: "cilm-u1-fp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a prime number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$21$" },
              { id: "b", text: "$29$" },
              { id: "c", text: "$33$" },
              { id: "d", text: "$39$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime", statement: "Exactly two factors: 1 and itself." },
            ],
            steps: [
              { reasoning: "$21=3\\times7$, $33=3\\times11$, $39=3\\times13$ — all composite. $29$ has no factors other than 1 and 29.", working: "\\text{check divisibility}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $29$",
            commonErrors: ["Choosing $21$ — odd numbers are not automatically prime."],
          },
        },
        {
          id: "cilm-u1-fp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $84$ as a product of primes in index form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Prime factorisation", statement: "Repeated division by primes; collect equal primes as powers." },
            ],
            steps: [
              { reasoning: "$84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$.", working: "2^2 \\times 3 \\times 7", marks: 1, markCode: "M" },
              { reasoning: "All factors prime; index form correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84 = 2^2 \\times 3 \\times 7$",
            commonErrors: ["Leaving $21$ unfactored — $21 = 3 \\times 7$ must be split."],
          },
        },
        {
          id: "cilm-u1-fp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the HCF and LCM of $36$ and $60$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "HCF and LCM", statement: "Lowest powers of common primes for HCF; highest powers of all primes for LCM." },
            ],
            steps: [
              { reasoning: "Prime factorise: $36=2^2\\times3^2$, $60=2^2\\times3\\times5$.", working: "\\text{factorise}", marks: 1, markCode: "M" },
              { reasoning: "HCF $=2^2\\times3=12$ (lowest powers of common primes $2$ and $3$).", working: "\\text{HCF}=12", marks: 1, markCode: "M" },
              { reasoning: "LCM $=2^2\\times3^2\\times5=180$ (highest powers of all primes).", working: "\\text{LCM}=180", marks: 1, markCode: "M" },
              { reasoning: "Check: $12\\times180=2160=36\\times60$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCF $=12$, LCM $=180$",
            commonErrors: ["Using highest powers for HCF — that gives LCM instead."],
          },
        },
        {
          id: "cilm-u1-fp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two ropes measure $48\\ \\text{m}$ and $84\\ \\text{m}$. They must be cut into equal-length pieces.",
          parts: [
            { label: "a", prompt: "Write both lengths as products of primes.", marks: 2 },
            { label: "b", prompt: "Find the HCF and explain what it represents here.", marks: 2 },
            { label: "c", prompt: "If pieces must be as long as possible, how many pieces are there?", marks: 3 },
            { label: "d", prompt: "Explain why the LCM is not useful for this cutting problem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "HCF application", statement: "HCF finds the largest equal piece; LCM finds a common total." },
            ],
            steps: [
              { part: "a", reasoning: "$48=2^4\\times3$, $84=2^2\\times3\\times7$.", working: "\\text{factorisations}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "HCF $=2^2\\times3=12\\ \\text{m}$ — the longest possible equal piece.", working: "\\text{HCF}=12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interpretation correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$48\\div12=4$ pieces; $84\\div12=7$ pieces; total $11$.", working: "4+7=11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both divisions correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Total correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "LCM gives a common multiple length, not a divisor — pieces would be longer than the ropes.", working: "\\text{LCM too big}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $48=2^4\\times3$, $84=2^2\\times3\\times7$ (b) HCF $=12$ m = longest equal piece (c) $4+7=11$ pieces (d) LCM exceeds rope lengths",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Both factorizations correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Errors.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "HCF + interpretation.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Piece count correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "LCM limitation explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) forgetting to count pieces from both ropes — total is $11$, not $7$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u1-number-notes",
      title: "Number foundations — revision notes",
      summary: "Place value, rounding, factors, primes, HCF and LCM.",
      sections: [
        {
          heading: "Place value and rounding",
          body: "Compare from the highest place value. Round by looking at the digit after the last kept place: $5$ or more rounds up. Pad decimals to compare: $0.6 = 0.600$.",
        },
        {
          heading: "Factors and primes",
          body: "Prime factorisation is unique. HCF = lowest powers of common primes; LCM = highest powers of all primes. Check: HCF $\\times$ LCM = product.",
        },
        {
          heading: "Applications",
          body: "HCF = largest equal piece (cutting, grouping). LCM = smallest common total (synchronising events).",
        },
      ],
    },
  ],
};
