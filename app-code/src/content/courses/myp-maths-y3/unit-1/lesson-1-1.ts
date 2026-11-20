import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypm3-u1-lesson-1-1",
  code: "1-1",
  title: "Number Systems",
  goal: "I CAN distinguish rational and irrational numbers, order and round numbers, and use absolute value and the order of operations correctly.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Rational number", definition: "A number that can be written as a fraction $\\frac{p}{q}$ where $p$ and $q$ are integers and $q \\ne 0$. Examples: $\\frac{3}{4}$, $-2$, $0.75$, $0.333\\ldots=\\frac{1}{3}$." },
    { term: "Irrational number", definition: "A number that cannot be written as a fraction of integers; its decimal expansion never ends and never repeats. Examples: $\\pi$ and $\\sqrt{2}$." },
    { term: "Recurring decimal", definition: "A decimal in which a block of digits repeats forever, such as $0.333\\ldots$ or $0.142857\\,142857\\ldots$" },
    { term: "Terminating decimal", definition: "A decimal that ends after a finite number of digits, such as $0.625$ or $-1.4$" },
    { term: "Absolute value", definition: "The distance of a number from zero, written $|x|$. It is always non-negative: $|-7|=7$ and $|7|=7$." },
  ],
  concepts: [
    {
      id: "mypm3-u1-rational-irrational",
      title: "Rational and irrational numbers",
      skill: "Classify numbers as rational or irrational and order and round sets of numbers.",
      lesson: {
        sections: [
          {
            heading: "Rational numbers",
            body: "A **rational** number can be written as $\\frac{p}{q}$ with $p$ and $q$ integers and $q\\ne0$. This includes integers ($-4=\\frac{-4}{1}$), fractions, terminating decimals ($0.625=\\frac{5}{8}$) and recurring decimals ($0.333\\ldots=\\frac{1}{3}$, $0.142857\\,142857\\ldots=\\frac{1}{7}$).",
          },
          {
            heading: "Irrational numbers",
            body: "An **irrational** number cannot be written as such a fraction. Its decimal expansion never ends and never repeats. The most famous are $\\pi$ and square roots of non-square integers, for example $\\sqrt{2}$ and $\\sqrt{3}$. Note $\\sqrt{4}=2$, which **is** rational.",
          },
          {
            heading: "Ordering and rounding",
            body: "To order mixed numbers, convert them all to decimals (or fractions) first. To round to a given number of significant figures or decimal places, look at the first digit **after** the last place you keep: 5 or more rounds up. Rounding $\\sqrt{2}\\approx1.4142$ to 3 s.f. gives $1.41$; to 2 d.p. gives $1.41$; to 1 d.p. gives $1.4$.",
          },
        ],
        keyFormulas: [
          { name: "Rational number test", statement: "A number is rational if it can be written as $\\frac{p}{q}$, $p,q\\in\\mathbb{Z}$, $q\\ne0$" },
          { name: "Absolute value", statement: "$|x|=x$ if $x\\ge0$, and $|x|=-x$ if $x<0$" },
        ],
        workedExample: {
          problem: "Put these numbers in order from smallest to largest: $\\sqrt{2}$, $\\frac{7}{5}$, $1.41$, $\\pi$.",
          solution: "Write each as a decimal: $\\sqrt{2}\\approx1.41421$, $\\frac{7}{5}=1.4$, $\\pi\\approx3.14159$. So the order is $\\frac{7}{5}<1.41<\\sqrt{2}<\\pi$.",
        },
      },
      questions: [
        {
          id: "mypm3-u1-rational-irrational-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these numbers is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.125$" },
              { id: "b", text: "$\\frac{22}{7}$" },
              { id: "c", text: "$\\sqrt{5}$" },
              { id: "d", text: "$0.777\\ldots$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irrational number", statement: "Cannot be written as $\\frac{p}{q}$; its decimal never ends and never repeats." },
            ],
            steps: [
              { reasoning: "$\\sqrt{5}$ is the square root of a non-square integer, so it is irrational. The others are terminating decimals, a fraction, or a recurring decimal — all rational.", working: "\\sqrt{5}\\approx2.2360679\\ldots\\text{ (no repeating block)}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\sqrt{5}$",
            commonErrors: ["Thinking $\\frac{22}{7}$ is irrational because it is close to $\\pi$ — it is a fraction, so it is rational.", "Thinking $0.777\\ldots$ is irrational — recurring decimals are rational."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.41666\\ldots$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recurring decimal", statement: "A decimal where a block of digits repeats forever; it can always be written as a fraction." },
            ],
            steps: [
              { reasoning: "Let $x=0.41666\\ldots=0.41\\overline{6}$. The recurring digit starts at the second decimal place, so use $100x$ and $1000x$.", working: "100x=41.666\\ldots,\\quad 1000x=416.666\\ldots", marks: 1, markCode: "M" },
              { reasoning: "Subtract to eliminate the recurring part: $900x=375$, so $x=\\frac{375}{900}=\\frac{5}{12}$.", working: "x=\\frac{375}{900}=\\frac{5}{12}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.41666\\ldots=\\frac{5}{12}$",
            commonErrors: ["Writing $x=0.4\\overline{1}$ and using the wrong multiplier.", "Forgetting to simplify $\\frac{375}{900}$."],
            examinerNote: "Check: $\\frac{5}{12}=0.41666\\ldots$.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: `Order these numbers from smallest to largest, giving each as a decimal correct to 3 significant figures:

$$\\sqrt{3},\\quad \\frac{11}{7},\\quad 1.58,\\quad \\pi-0.2$$`,
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing numbers", statement: "Convert every number to the same form (decimal) before comparing." },
            ],
            steps: [
              { reasoning: "Evaluate each as a decimal.", working: "\\sqrt{3}\\approx1.73205,\\quad \\frac{11}{7}\\approx1.57143,\\quad \\pi-0.2\\approx2.94159", marks: 1, markCode: "M" },
              { reasoning: "Compare the decimals.", working: "1.57143<1.58<1.73205<2.94159", marks: 1, markCode: "M" },
              { reasoning: "State the order with each value to 3 s.f.", working: "\\frac{11}{7}=1.57,\\ 1.58,\\ \\sqrt{3}=1.73,\\ \\pi-0.2=2.94", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{11}{7}<1.58<\\sqrt{3}<\\pi-0.2$",
            commonErrors: ["Comparing $\\sqrt{3}\\approx1.73$ with $1.58$ by size of the surd rather than the decimal.", "Rounding $\\frac{11}{7}$ to $1.6$ and then mis-ordering."],
            examinerNote: "M1 for three or more correct decimal values, M1 for correct comparison, A1 for stated order.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: `A student is investigating whether these numbers are rational or irrational:

$$a=0.252525\\ldots,\\quad b=\\sqrt{16},\\quad c=\\sqrt{18},\\quad d=2.7182818\\ldots,\\quad e=\\frac{\\pi}{2}$$`,
          parts: [
            { label: "a", prompt: "Write $a$ as a fraction in its simplest form.", marks: 2 },
            { label: "b", prompt: "Evaluate $b$ and state whether it is rational or irrational, giving a reason.", marks: 2 },
            { label: "c", prompt: "Write $c$ in the form $k\\sqrt{m}$ where $m$ is the smallest possible integer, and state whether $c$ is rational or irrational.", marks: 2 },
            { label: "d", prompt: "$d$ is the decimal expansion of $e$ to 7 decimal places. Explain why this does not prove that $d$ is rational.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "Can be written as $\\frac{p}{q}$; includes terminating and recurring decimals." },
              { kind: "definition", name: "Irrational number", statement: "Cannot be written as $\\frac{p}{q}$; decimal never ends and never repeats." },
              { kind: "principle", name: "Finite decimal evidence", statement: "A truncated decimal only shows the first digits; it does not show the full expansion." },
            ],
            steps: [
              { part: "a", reasoning: "Let $x=0.252525\\ldots=0.\\overline{25}$. Then $100x=25.252525\\ldots$ and subtracting gives $99x=25$.", working: "x=\\frac{25}{99}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The fraction is already in lowest terms since $\\gcd(25,99)=1$.", working: "\\frac{25}{99}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\sqrt{16}=4=\\frac{4}{1}$, an integer, so it is rational.", working: "b=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the classification with the reason.", working: "\\text{rational, because it is an integer / can be written as a fraction}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "$\\sqrt{18}=\\sqrt{9\\times2}=3\\sqrt{2}$.", working: "c=3\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Since $\\sqrt{2}$ is irrational, $3\\sqrt{2}$ is irrational.", working: "\\text{irrational}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The value $2.7182818$ is only the first 7 decimal places of $e$; the expansion continues beyond what is shown.", working: "\\text{truncated expansion}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A recurring decimal would have to show the repeating block repeating within the digits given; nothing here shows the full expansion, so rationality cannot be decided from this data alone.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{25}{99}$ (b) $b=4$, rational (c) $c=3\\sqrt{2}$, irrational (d) it is only a truncation of $e$'s expansion; the full expansion is needed to decide",
            commonErrors: ["Writing $a$ as $\\frac{25}{99}$ but failing to simplify — here it is already simplest.", "Claiming $\\sqrt{16}$ is irrational because it is a square root.", "Assuming any non-terminating-looking decimal is irrational without checking for a repeating block."],
            examinerNote: "R1 for reasoning about truncation in (d); do not require students to name $e$.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these numbers is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.125$" },
              { id: "b", text: "$7/9$" },
              { id: "c", text: "the square root of 5" },
              { id: "d", text: "$0.444...$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irrational number", statement: "Cannot be written as a fraction of integers; its decimal never ends and never repeats." },
            ],
            steps: [
              { reasoning: "The square root of 5 is not a perfect square, so its decimal expansion is non-terminating and non-repeating.", working: "irrational", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** the square root of 5",
            commonErrors: ["Choosing a recurring decimal such as $0.444...$, which is rational."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these numbers is rational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "√9" },
              { id: "b", text: "√10" },
              { id: "c", text: "pi" },
              { id: "d", text: "$0.1010010001...$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "Can be written as a fraction of integers." },
            ],
            steps: [
              { reasoning: "√9 = 3, an integer, so it is rational; the others have non-repeating non-terminating decimals.", working: "√9 = 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** √9",
            commonErrors: ["Thinking every square root is irrational; √9 is a perfect square."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Put these numbers in order from smallest to largest: $-2.5$, $-2.45$, $-2.6$, $-2.55$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2.6 < -2.55 < -2.5 < -2.45$" },
              { id: "b", text: "$-2.45 < -2.5 < -2.55 < -2.6$" },
              { id: "c", text: "$-2.6 < -2.5 < -2.55 < -2.45$" },
              { id: "d", text: "$-2.55 < -2.6 < -2.5 < -2.45$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ordering decimals", statement: "Compare place value carefully, especially for negative numbers where a larger magnitude is smaller." },
            ],
            steps: [
              { reasoning: "For negatives, the most negative number is smallest: -2.6 < -2.55 < -2.5 < -2.45.", working: "-2.6 < -2.55 < -2.5 < -2.45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-2.6 < -2.55 < -2.5 < -2.45$",
            commonErrors: ["Ordering by ignoring the negative signs."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.272727...$ as a fraction $p/q$ in its simplest form. Enter $p$ and $q$.",
          response: { type: "numeric", parts: [{ label: "p", answer: 3 }, { label: "q", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recurring decimal", statement: "A decimal with a repeating block can be written as a fraction." },
            ],
            steps: [
              { reasoning: "Let x = 0.272727...; then 100x = 27.272727... and subtracting gives 99x = 27.", working: "x = 27/99", marks: 1, markCode: "M" },
              { reasoning: "Simplify by dividing numerator and denominator by 9.", working: "p = 3, q = 11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.272727... = 3/11$",
            commonErrors: ["Using 9x instead of 99x for a two-digit repeat.", "Not simplifying 27/99."],
            examinerNote: "M1 for the recurring-decimal equation, A1 for 3/11.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The square root of 5 is $2.2360679...$. Round it to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Rounded value", answer: 2.24 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rounding", statement: "Look at the first digit after the required number of significant figures; 5 or more rounds up." },
            ],
            steps: [
              { reasoning: "Keep 3 significant figures: 2.23|60679; the next digit is 6, so round up.", working: "2.24", marks: 1, markCode: "M" },
              { reasoning: "State the rounded value.", working: "2.24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.24$",
            commonErrors: ["Rounding to 2.23 by stopping too early.", "Writing 2.236 and calling it 3 s.f."],
            examinerNote: "M1 for identifying the deciding digit, A1 for 2.24.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $5/8$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "Decimal", answer: 0.625 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Terminating decimal", statement: "A fraction with denominator factors of only 2 and 5 gives a decimal that ends." },
            ],
            steps: [
              { reasoning: "Divide 5 by 8 or use an equivalent fraction.", working: "5/8 = 0.625", marks: 1, markCode: "M" },
              { reasoning: "State the terminating decimal.", working: "0.625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.625$",
            commonErrors: ["Writing 0.58 or 0.85 instead of dividing correctly."],
            examinerNote: "M1 for division method, A1 for 0.625.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why √16 is rational but √18 is irrational.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "Can be written as a fraction of integers." },
              { kind: "definition", name: "Irrational number", statement: "Cannot be written as a fraction of integers; decimal never ends and never repeats." },
            ],
            steps: [
              { reasoning: "√16 = 4, which is an integer and therefore rational.", working: "√16 = 4", marks: 1, markCode: "R" },
              { reasoning: "√18 = 3√2 and is not a perfect square, so it cannot be written as a fraction of integers.", working: "√18 irrational", marks: 1, markCode: "R" },
              { reasoning: "Conclude with the contrast.", working: "√16 rational, √18 irrational", marks: 1, markCode: "A" },
            ],
            finalAnswer: "√16 = 4 is rational; √18 is irrational because it is not a perfect square.",
            commonErrors: ["Assuming all square roots are irrational."],
            examinerNote: "R1 for each classification, A1 for clear conclusion.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A calculator displays $2.7182818$ for e. Which statement is justified by this display alone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "e is rational because the display stops." },
              { id: "b", text: "e might be irrational because more digits may follow." },
              { id: "c", text: "e is equal to 22/7." },
              { id: "d", text: "e is a fraction of two integers." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Finite decimal evidence", statement: "A truncated decimal does not show the full expansion." },
            ],
            steps: [
              { reasoning: "The display is only part of the expansion, so it cannot prove the number is rational or irrational.", working: "truncated expansion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** e might be irrational because more digits may follow.",
            commonErrors: ["Treating a finite display as proof of a terminating decimal."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write $1.428571428571...$ as a fraction $p/q$ in lowest terms, and give $p+q$.",
          response: { type: "numeric", parts: [{ label: "p+q", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recurring decimal", statement: "A repeating block can be converted to a fraction." },
            ],
            steps: [
              { reasoning: "The repeating block 428571 has six digits; let x be the decimal and use 1000000x - x.", working: "x = 1428571/999999", marks: 1, markCode: "M" },
              { reasoning: "Simplify to 10/7, so p+q = 17.", working: "p+q = 10+7 = 17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$p+q = 17$",
            commonErrors: ["Using the wrong power of 10 for a six-digit repeat.", "Not simplifying the fraction before adding p and q."],
            examinerNote: "M1 for the recurring-decimal method, A1 for 17.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Order these numbers from smallest to largest: $3/11$, $2/7$, $0.28$, $0.29$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing numbers", statement: "Convert fractions to decimals before ordering." },
            ],
            steps: [
              { reasoning: "Convert the fractions to decimals.", working: "3/11 = 0.2727..., 2/7 = 0.2857...", marks: 1, markCode: "M" },
              { reasoning: "Compare all four values.", working: "0.2727 < 0.28 < 0.2857 < 0.29", marks: 1, markCode: "M" },
              { reasoning: "State the order using the original numbers.", working: "3/11 < 0.28 < 2/7 < 0.29", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3/11 < 0.28 < 2/7 < 0.29$",
            commonErrors: ["Comparing 2/7 with 0.29 by numerator only.", "Rounding 2/7 to 0.28 and then mis-ordering."],
            examinerNote: "M1 for decimal conversions, M1 for comparison, A1 for order.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Show that $0.185185...$ is rational by writing it as a fraction in lowest terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "A recurring decimal can be written as a fraction of integers." },
            ],
            steps: [
              { reasoning: "Let x = 0.185185...; the repeating block has three digits, so 1000x = 185.185185... and subtract x.", working: "999x = 185", marks: 1, markCode: "M" },
              { reasoning: "Solve and simplify.", working: "x = 185/999 = 5/27", marks: 1, markCode: "M" },
              { reasoning: "A fraction of integers proves the decimal is rational.", working: "rational", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$0.185185... = 5/27$, so it is rational.",
            commonErrors: ["Using 99x for a three-digit repeat.", "Stopping at 185/999 without simplifying."],
            examinerNote: "M1 for the equation, M1 for simplification, R1 for the rational conclusion.",
          },
        },
        {
          id: "mypm3-u1-rational-irrational-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which number is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$22/7$" },
              { id: "b", text: "$0.333...$" },
              { id: "c", text: "√5" },
              { id: "d", text: "$-12/5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irrational number", statement: "Cannot be written as a fraction of integers." },
            ],
            steps: [
              { reasoning: "22/7 and -12/5 are fractions; 0.333... is recurring; √5 is the only non-repeating, non-terminating value.", working: "√5 irrational", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** √5",
            commonErrors: ["Thinking 22/7 is irrational because it approximates pi."],
            examinerNote: "B1 for (c).",
          },
        },
      ],
    },
    {
      id: "mypm3-u1-absolute-value",
      title: "Absolute value and order of operations",
      skill: "Use absolute value, brackets and the correct order of operations with negative numbers and fractions.",
      lesson: {
        sections: [
          {
            heading: "Absolute value",
            body: "The **absolute value** $|x|$ is the distance of $x$ from zero, so it is never negative: $|-7|=7$, $|7|=7$, $|0|=0$. Expressions like $-|3|=-3$ (the minus sign is outside the bars) differ from $|-3|=3$.",
          },
          {
            heading: "Order of operations",
            body: "Work in this order: **B**rackets, **O**rders (powers and roots), **D**ivision and **M**ultiplication (left to right), then **A**ddition and **S**ubtraction (left to right). A fraction line acts like brackets: in $\\frac{a+b}{c-d}$ the whole top and bottom are evaluated first.",
          },
          {
            heading: "Negatives and fractions",
            body: "Be careful with signs: $-3^2=-9$ (the power is found before the minus) but $(-3)^2=9$. With fractions, $-\\frac{1}{2}+\\frac{1}{3}=-\\frac{1}{6}$, and multiplying or dividing by a negative flips the sign of the result.",
          },
        ],
        keyFormulas: [
          { name: "Absolute value", statement: "$|x|=\\begin{cases} x & x\\ge0 \\\\ -x & x<0 \\end{cases}$" },
          { name: "Order of operations", statement: "Brackets → Orders → Division/Multiplication → Addition/Subtraction" },
        ],
        workedExample: {
          problem: "Work out $|-4|+(-2)^3\\div(-4)-(-1)^2$.",
          solution: "Evaluate powers first: $(-2)^3=-8$ and $(-1)^2=1$. Then divide: $-8\\div(-4)=2$. Then combine: $4+2-1=5$.",
        },
      },
      questions: [
        {
          id: "mypm3-u1-absolute-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $-|-5|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$-5$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is the distance from zero, always non-negative." },
            ],
            steps: [
              { reasoning: "$|-5|=5$, then apply the leading minus sign.", working: "-|-5|=-(5)=-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $-5$",
            commonErrors: ["Ignoring the outer minus sign and answering 5.", "Thinking $|-5|=-5$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $3+(-2)^3\\times4-\\frac{10}{-5}$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: -25 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Orders before multiplication/division before addition/subtraction; division and multiplication left to right." },
            ],
            steps: [
              { reasoning: "Evaluate the power and the fraction first.", working: "(-2)^3=-8,\\quad \\frac{10}{-5}=-2", marks: 1, markCode: "M" },
              { reasoning: "Multiply, then add and subtract left to right.", working: "3+(-8)\\times4-(-2)=3-32+2=-25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-25$",
            commonErrors: ["Computing $(-2)^3=8$.", "Evaluating $3+(-2)=1$ before the multiplication.", "Sign error on $-(-2)$, giving $-29$."],
            examinerNote: "M1 for correct powers/division, A1 for -25.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A temperature sensor records $-3.5\\,^\\circ\\text{C}$ at midnight and $-12.0\\,^\\circ\\text{C}$ at 4 a.m. The absolute difference between the two readings is $|-3.5-(-12.0)|$. Work out the absolute difference and explain what it means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is the distance from zero, always non-negative." },
            ],
            steps: [
              { reasoning: "Compute inside the bars.", working: "-3.5-(-12.0)=-3.5+12.0=8.5", marks: 1, markCode: "M" },
              { reasoning: "Apply the absolute value.", working: "|8.5|=8.5", marks: 1, markCode: "M" },
              { reasoning: "Interpret: the temperature fell by $8.5\\,^\\circ\\text{C}$ between midnight and 4 a.m.", working: "8.5\\,^\\circ\\text{C}\\text{ drop}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$8.5\\,^\\circ\\text{C}$ — the temperature decreased by $8.5$ degrees",
            commonErrors: ["Computing $|-3.5|-|-12.0|=3.5-12=-8.5$ instead of the difference inside one pair of bars.", "Giving $-8.5$ as the final answer, forgetting absolute value is non-negative."],
            examinerNote: "M1 for $8.5$ inside bars, M1 for $|8.5|=8.5$, R1 for interpretation.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Work out the value of each expression.",
          parts: [
            { label: "a", prompt: "$(-3)^2+|-3|^2$", marks: 2 },
            { label: "b", prompt: "$\\frac{-12}{3}-(-2)(-3)$", marks: 2 },
            { label: "c", prompt: "$\\left|-2+5\\right|\\times\\left|1-4\\right|$", marks: 2 },
            { label: "d", prompt: "A student claims $-3^2=(-3)^2$. Explain why this is false and give the correct values.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Powers are evaluated before the leading minus sign; $-3^2=-(3^2)$." },
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is the distance from zero, always non-negative." },
            ],
            steps: [
              { part: "a", reasoning: "$(-3)^2=9$ and $|-3|^2=3^2=9$.", working: "9+9=18", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "18", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide first, then multiply.", working: "-4-(6)=-10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "-10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate inside each pair of bars.", working: "|3|\\times|-3|=3\\times3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply.", working: "9", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In $-3^2$ the power is found before the minus, so $-3^2=-(3^2)=-9$; in $(-3)^2$ the brackets make $-3$ the base, so $(-3)^2=9$.", working: "-3^2=-9\\ne9=(-3)^2", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude the claim is false.", working: "-3^2=-9,\\ (-3)^2=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $18$ (b) $-10$ (c) $9$ (d) false: $-3^2=-9$ but $(-3)^2=9$",
            commonErrors: ["Computing $(-3)^2=-9$ in (a).", "In (c), keeping the sign inside the product, $3\\times(-3)=-9$."],
            examinerNote: "Accept $9$ for $|-3|^2$ via $|-3|=3$.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $|-9|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$-9$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "The distance from zero, always non-negative." },
            ],
            steps: [
              { reasoning: "|-9| is the distance of -9 from 0.", working: "|-9| = 9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $9$",
            commonErrors: ["Keeping the negative sign."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $-|4|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-4$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is non-negative; a leading minus is applied after the bars." },
            ],
            steps: [
              { reasoning: "First |4| = 4, then apply the outer minus.", working: "-|4| = -(4) = -4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-4$",
            commonErrors: ["Ignoring the outer minus sign."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out $2^3-|-5|$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$13$" },
              { id: "c", text: "$-3$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Powers before subtraction; absolute value is evaluated inside the bars." },
            ],
            steps: [
              { reasoning: "Evaluate the power and the absolute value, then subtract.", working: "8 - 5 = 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Computing 2^3 as 6."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $(-4)^2-|-6|$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Evaluate the power and absolute value before subtracting." },
            ],
            steps: [
              { reasoning: "Evaluate each part: (-4)^2 = 16 and |-6| = 6.", working: "16 - 6", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Writing (-4)^2 = -16.", "Computing |-6| = -6."],
            examinerNote: "M1 for correct evaluations, A1 for 10.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $|-8|+(-2)^3\div(-4)$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Power, then division, then addition." },
            ],
            steps: [
              { reasoning: "Evaluate the power and division first: (-2)^3 = -8 and -8 ÷ (-4) = 2.", working: "8 + 2", marks: 1, markCode: "M" },
              { reasoning: "Add the absolute value result.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Computing (-2)^3 = 8.", "Dividing before evaluating the power."],
            examinerNote: "M1 for power and division, A1 for 10.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the absolute difference between $-2.5$ and $4.5$.",
          response: { type: "numeric", parts: [{ label: "Absolute difference", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "The absolute difference is the distance between two numbers, always non-negative." },
            ],
            steps: [
              { reasoning: "Compute the difference inside one pair of bars.", working: "-2.5 - 4.5 = -7", marks: 1, markCode: "M" },
              { reasoning: "Apply absolute value.", working: "|-7| = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Giving -7 as the final answer.", "Subtracting absolute values separately."],
            examinerNote: "M1 for the difference, A1 for 7.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $-3^2$ and $(-3)^2$ have different values, and write down both values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "In $-3^2$ the power is found before the leading minus; brackets make $-3$ the base in $(-3)^2$." },
            ],
            steps: [
              { reasoning: "For $-3^2$, evaluate $3^2 = 9$ first, then apply the minus.", working: "-3^2 = -9", marks: 1, markCode: "R" },
              { reasoning: "For $(-3)^2$, the brackets make -3 the base, so the result is positive.", working: "(-3)^2 = 9", marks: 1, markCode: "R" },
              { reasoning: "State both values clearly.", working: "-9 and 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3^2 = -9$ but $(-3)^2 = 9$.",
            commonErrors: ["Treating the two expressions as equal."],
            examinerNote: "R1 for each explanation, A1 for values.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which expression has value $-7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-|8|+1$" },
              { id: "b", text: "$|-8|+1$" },
              { id: "c", text: "$-|8|-1$" },
              { id: "d", text: "$-|-8|-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is non-negative; signs outside the bars matter." },
            ],
            steps: [
              { reasoning: "Evaluate each: -|8|+1 = -8+1 = -7.", working: "-7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-|8|+1$",
            commonErrors: ["Evaluating |-8| as -8."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Work out $3(-2)^2-|-12|\div(-3)$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Power first, then division, then multiplication and subtraction left to right." },
            ],
            steps: [
              { reasoning: "Evaluate the power and the division: (-2)^2 = 4 and |-12| ÷ (-3) = -4.", working: "3(4) - (-4)", marks: 1, markCode: "M" },
              { reasoning: "Multiply and subtract.", working: "12 + 4 = 16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
            commonErrors: ["Computing (-2)^2 = -4.", "Subtracting -4 as +(-4), giving 8."],
            examinerNote: "M1 for correct sub-results, A1 for 16.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A thermometer reads $-2.8$ degrees at noon and $-7.2$ degrees at 6 p.m. Find the absolute difference between the readings and explain what it tells you about the temperature change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "Absolute difference measures distance between values and is non-negative." },
            ],
            steps: [
              { reasoning: "Compute the difference inside the bars.", working: "-2.8 - (-7.2) = 4.4", marks: 1, markCode: "M" },
              { reasoning: "Apply absolute value.", working: "|4.4| = 4.4", marks: 1, markCode: "M" },
              { reasoning: "Interpret: the temperature fell by 4.4 degrees.", working: "4.4 degree drop", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$4.4$ degrees; the temperature decreased by $4.4$ degrees.",
            commonErrors: ["Subtracting in the wrong order and keeping a negative final answer."],
            examinerNote: "M1 for difference, M1 for absolute value, R1 for interpretation.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student claims that $-2^2=4$ and $(-2)^2=4$, so the two expressions are equal. Explain why this is wrong and give the correct values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "The power is evaluated before the leading minus sign unless brackets include the sign." },
            ],
            steps: [
              { reasoning: "In $-2^2$, find $2^2 = 4$ first, then apply the minus.", working: "-2^2 = -4", marks: 1, markCode: "R" },
              { reasoning: "In $(-2)^2$, the base is -2, so the square is positive.", working: "(-2)^2 = 4", marks: 1, markCode: "R" },
              { reasoning: "The expressions are not equal: -4 is not 4.", working: "-4 ≠ 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "False: $-2^2 = -4$ but $(-2)^2 = 4$.",
            commonErrors: ["Thinking the leading minus is part of the base in $-2^2$."],
            examinerNote: "R1 for each correct evaluation, A1 for inequality conclusion.",
          },
        },
        {
          id: "mypm3-u1-absolute-value-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which expression has the greatest value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-|-6|$" },
              { id: "b", text: "$|-6|$" },
              { id: "c", text: "$-(-6)$" },
              { id: "d", text: "$(-6)^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of operations", statement: "Evaluate powers, absolute values and signs before comparing." },
            ],
            steps: [
              { reasoning: "The values are -6, 6, 6 and 36, so (-6)^2 is greatest.", working: "36 is greatest", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $(-6)^2$",
            commonErrors: ["Computing (-6)^2 = -36."],
            examinerNote: "B1 for (d).",
          },
        },
      ],
    },
  ],
};
