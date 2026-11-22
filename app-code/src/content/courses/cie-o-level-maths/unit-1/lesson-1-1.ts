import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olm-u1-lesson-1-1",
  code: "1-1",
  title: "Types of Number and Operations",
  goal: "I CAN classify numbers and apply the four operations accurately.",
  standards: ["4024: number"],
  vocabulary: [
    { term: "Natural numbers", definition: "Counting numbers 1, 2, 3, …" },
    { term: "Integers", definition: "Whole numbers including negatives and zero." },
    { term: "Rational numbers", definition: "Numbers expressible as $\\frac{p}{q}$ with integer $q\\neq0$." },
    { term: "Irrational numbers", definition: "Numbers that cannot be written as a fraction, e.g. $\\sqrt2$, $\\pi$." },
  ],
  concepts: [
    {
      id: "olm-u1-s1-classify",
      title: "Classifying numbers",
      skill: "Identify types of numbers at O Level.",
      lesson: {
        sections: [
          { heading: "The number sets", body: "Numbers nest inside each other: natural numbers $\\subset$ integers $\\subset$ rational numbers $\\subset$ real numbers. Rational numbers are fractions $\\frac{p}{q}$ — their decimals either terminate (like $0.75=\\frac34$) or recur (like $0.333\\ldots=\\frac13$). Irrational numbers have non-terminating, non-recurring decimals: $\\sqrt2$, $\\pi$, $e$. Prime numbers have exactly two factors; prime factorisation breaks any integer into primes uniquely." },
          { heading: "Operations order", body: "BIDMAS (or PEMDAS) governs evaluation: Brackets, Indices, Division and Multiplication (left to right), Addition and Subtraction (left to right). A common error is doing addition before multiplication. With fractions, find a common denominator before adding or subtracting; multiply fractions straight across and cancel before multiplying for efficiency." },
        ],
        keyFormulas: [
          { name: "Order of operations", statement: "BIDMAS: brackets → indices → ×÷ → +−" },
        ],
        workedExample: { problem: "Evaluate $3+4\\times(10-2^3)", solution: "Brackets first: $2^3=8$, so $10-8=2$. Then $4\\times2=8$. Then $3+8=11$. Answer: 11. (Doing $3+4$ first would wrongly give 15.)" },
      },
      questions: [
        {
          id: "olm-u1-s1-cl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is irrational?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.75$" },
            { id: "b", text: "$\\sqrt2$" },
            { id: "c", text: "$\\frac{22}{7}$" },
            { id: "d", text: "$-5$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Irrational", statement: "Non-terminating non-recurring." }], steps: [{ reasoning: "$\\sqrt2=1.414\\ldots$ never repeats; others are rational.", marks: 1, markCode: "A" }], finalAnswer: "$\\sqrt2$" },
        },
        {
          id: "olm-u1-s1-cl-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Write $0.\\dot{3}$ as a fraction.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimal", statement: "Standard conversion." }], steps: [
            { reasoning: "Let $x=0.333\\ldots$; $10x=3.333\\ldots$; subtract: $9x=3$ → $x=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u1-s1-cl-q3", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $2^3\\times3-\\frac{18}{3}+5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 23 }] },
          markscheme: { principles: [{ kind: "technique", name: "BIDMAS", statement: "Indices first." }], steps: [
            { reasoning: "$2^3=8$; $8\\times3=24$; $\\frac{18}{3}=6$.", marks: 1, markCode: "M" },
            { reasoning: "$24-6+5=23$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 23.", marks: 1, markCode: "A" },
          ], finalAnswer: "23" },
        },
        {
          id: "olm-u1-s1-cl-q4", difficulty: "core", totalMarks: 4,
          stem: "Simplify $\\frac{2}{3}+\\frac{5}{6}-\\frac14$, giving your answer as a fraction in lowest terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fraction arithmetic", statement: "Common denominator 12." }], steps: [
            { reasoning: "$\\frac{8}{12}+\\frac{10}{12}-\\frac{3}{12}=\\frac{15}{12}$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\frac54$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $0.667+0.833-0.25=1.25=\\frac54$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac54$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac54$" },
        },
        {
          id: "olm-u1-s1-cl-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these numbers is prime?",
          response: { type: "mcq", choices: [
            { id: "a", text: "21" },
            { id: "b", text: "15" },
            { id: "c", text: "27" },
            { id: "d", text: "29" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Prime", statement: "Exactly two factors: 1 and itself." }], steps: [{ reasoning: "29 has only factors 1 and 29; 15, 21 and 27 all have more factors.", marks: 1, markCode: "A" }], finalAnswer: "29" },
        },
        {
          id: "olm-u1-s1-cl-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Write $\\frac{9}{20}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.45 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }], steps: [
            { reasoning: "$\\frac{9}{20}=9\\div20=0.45$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.45.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.45" },
        },
        {
          id: "olm-u1-s1-cl-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Is $0.121212\\ldots$ a rational or an irrational number? Give a reason.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Rational", statement: "Recurring decimals are rational." }], steps: [
            { reasoning: "The digits 12 repeat forever, so it is a recurring decimal.", marks: 1, markCode: "M" },
            { reasoning: "Recurring decimals can be written as fractions ($\\frac4{33}$), so the number is rational.", marks: 1, markCode: "A" },
          ], finalAnswer: "Rational" },
        },
        {
          id: "olm-u1-s1-cl-q8", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $4+6\\div2\\times(5-3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "technique", name: "BIDMAS", statement: "Brackets, then ÷ and ×, then +." }], steps: [
            { reasoning: "Brackets first: $5-3=2$; then $6\\div2\\times2=3\\times2=6$.", marks: 1, markCode: "M" },
            { reasoning: "Add: $4+6=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u1-s1-cl-q9", difficulty: "core", totalMarks: 1,
          stem: "Which number set does $-\\frac{3}{4}$ belong to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Irrational numbers" },
            { id: "b", text: "Integers" },
            { id: "c", text: "Natural numbers" },
            { id: "d", text: "Rational numbers" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Rational", statement: "Any number expressible as $\\frac{p}{q}$ with integer $q\\neq0$." }], steps: [{ reasoning: "$-\\frac{3}{4}$ is a fraction of integers, so it is rational (but not an integer).", marks: 1, markCode: "A" }], finalAnswer: "Rational numbers" },
        },
        {
          id: "olm-u1-s1-cl-q10", difficulty: "core", totalMarks: 1,
          stem: "Which of these equals $\\frac34+\\frac16$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{4}{10}$" },
            { id: "b", text: "$\\frac23$" },
            { id: "c", text: "$\\frac{11}{12}$" },
            { id: "d", text: "$\\frac{9}{24}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Fraction addition", statement: "Use a common denominator." }], steps: [{ reasoning: "$\\frac{9}{12}+\\frac{2}{12}=\\frac{11}{12}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{11}{12}$" },
        },
        {
          id: "olm-u1-s1-cl-q11", difficulty: "core", totalMarks: 4,
          stem: "Evaluate $2^4-3^2\\times2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "BIDMAS", statement: "Indices before multiplication before subtraction." }], steps: [
            { reasoning: "Indices first: $2^4=16$ and $3^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "Multiply: $9\\times2=18$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $16-18=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: -2.", marks: 1, markCode: "A" },
          ], finalAnswer: "-2" },
        },
        {
          id: "olm-u1-s1-cl-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is equal to $\\sqrt{18}$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$9\\sqrt2$" },
            { id: "b", text: "$2\\sqrt3$" },
            { id: "c", text: "$3\\sqrt2$" },
            { id: "d", text: "$\\sqrt9$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Simplifying surds", statement: "Extract square factors." }], steps: [{ reasoning: "$\\sqrt{18}=\\sqrt{9\\times2}=\\sqrt9\\times\\sqrt2=3\\sqrt2$.", marks: 1, markCode: "A" }], finalAnswer: "$3\\sqrt2$" },
        },
        {
          id: "olm-u1-s1-cl-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Prove that the sum of two odd numbers is always even.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Algebraic proof", statement: "Use the $2n+1$ form for odd numbers." }], steps: [
            { reasoning: "Let the odd numbers be $2m+1$ and $2n+1$, where $m$ and $n$ are integers.", marks: 1, markCode: "M" },
            { reasoning: "Sum: $(2m+1)+(2n+1)=2m+2n+2$.", marks: 1, markCode: "M" },
            { reasoning: "$2m+2n+2=2(m+n+1)$, and $m+n+1$ is an integer.", marks: 1, markCode: "M" },
            { reasoning: "A multiple of 2 is even, so the sum of two odd numbers is always even. QED.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sum $=2(m+n+1)$, which is even." },
        },
        {
          id: "olm-u1-s1-cl-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Write $0.\\dot{1}\\dot{2}$ as a fraction in lowest terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimal", statement: "Let $x=$, multiply by 100, subtract." }], steps: [
            { reasoning: "Let $x=0.121212\\ldots$; then $100x=12.121212\\ldots$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $99x=12$, so $x=\\frac{12}{99}$.", marks: 1, markCode: "M" },
            { reasoning: "Simplify: $\\frac{12}{99}=\\frac{4}{33}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac4{33}$; check $\\frac4{33}=0.1212\\ldots$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac4{33}$" },
        },
        {
          id: "olm-u1-s1-cl-q15", difficulty: "foundation", totalMarks: 3,
          stem: "Evaluate $7-2\\times(8-5)+1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "BIDMAS", statement: "Brackets then multiplication then addition and subtraction." }], steps: [
            { reasoning: "Inside brackets: $8-5=3$; then $2\\times3=6$.", marks: 1, markCode: "M" },
            { reasoning: "$7-6+1=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u1-s1-cl-q16", difficulty: "core", totalMarks: 3,
          stem: "The product of two prime numbers is 143. Find the two prime numbers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Prime factorisation", statement: "Test small primes." }], steps: [
            { reasoning: "143 is not divisible by 2, 3 or 5 (digit sum is 8, does not end in 0 or 5).", marks: 1, markCode: "M" },
            { reasoning: "$143\\div11=13$; $143=11\\times13$ and both are prime.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 11 and 13.", marks: 1, markCode: "A" },
          ], finalAnswer: "11 and 13" },
        },
      ],
    },
    {
      id: "olm-u1-s1-negative",
      title: "Negative numbers",
      skill: "Apply rules for negative numbers at O Level.",
      lesson: {
        sections: [
          { heading: "The rules", body: "Two negatives make a positive when multiplying or dividing: $(-3)\\times(-4)=12$. A negative times a positive is negative. For addition and subtraction, think of a number line: $-3+5=2$ (move right), $-3-5=-8$ (move left). Subtracting a negative is the same as adding: $5-(-3)=8$." },
          { heading: "Common pitfalls", body: "Students often write $-3^2=-9$ correctly but then misread $(-3)^2=9$ — brackets matter. Also $\\sqrt{-4}$ is not real (undefined in real numbers), and the 'negative of a square' differs from 'square of a negative'. Temperature and money problems are classic contexts: a drop of $5°$ from $-2°$ gives $-7°$." },
        ],
        keyFormulas: [
          { name: "Signs", statement: "$(-)(-)=+$; $(-)(+)=-$" },
        ],
        workedExample: { problem: "Evaluate $(-2)^2-(-3)\\times4$.", solution: "$(-2)^2=4$; $(-3)\\times4=-12$; $4-(-12)=4+12=16$. Answer: 16." },
      },
      questions: [
        {
          id: "olm-u1-s1-ne-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$(-4)\\times(-5)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "-1" },
            { id: "b", text: "20" },
            { id: "c", text: "-20" },
            { id: "d", text: "9" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Sign rule", statement: "Neg × neg = pos." }], steps: [{ reasoning: "$(-4)(-5)=+20$.", marks: 1, markCode: "A" }], finalAnswer: "20" },
        },
        {
          id: "olm-u1-s1-ne-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $-3-(-7)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Subtract negative", statement: "Add instead." }], steps: [
            { reasoning: "$-3-(-7)=-3+7=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u1-s1-ne-q3", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $(-2)^3+(-3)^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Powers of negatives", statement: "Brackets matter." }], steps: [
            { reasoning: "$(-2)^3=-8$ (odd power stays negative); $(-3)^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "$-8+9=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u1-s1-ne-q4", difficulty: "core", totalMarks: 4,
          stem: "The temperature was $-5°$C and dropped by $8°$C, then rose by $12°$C. Find the final temperature.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Context", statement: "Model with negatives." }], steps: [
            { reasoning: "Start $-5$; drop 8 → $-13$.", marks: 1, markCode: "M" },
            { reasoning: "Rise 12 → $-13+12=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Final temperature $-1°$C.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-1°$C.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-1°$C" },
        },
        {
          id: "olm-u1-s1-ne-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$(-6)\\div(-2)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "-3" },
            { id: "c", text: "-12" },
            { id: "d", text: "12" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Sign rule", statement: "Neg ÷ neg = pos." }], steps: [{ reasoning: "Negative divided by negative is positive: $(-6)\\div(-2)=3$.", marks: 1, markCode: "A" }], finalAnswer: "3" },
        },
        {
          id: "olm-u1-s1-ne-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $-7+(-4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -11 }] },
          markscheme: { principles: [{ kind: "technique", name: "Number line", statement: "Adding a negative moves left." }], steps: [
            { reasoning: "$-7+(-4)=-7-4$ — adding a negative is the same as subtracting.", marks: 1, markCode: "M" },
            { reasoning: "Answer: -11.", marks: 1, markCode: "A" },
          ], finalAnswer: "-11" },
        },
        {
          id: "olm-u1-s1-ne-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Work out $9-(-3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Subtract negative", statement: "Add instead." }], steps: [
            { reasoning: "Subtracting a negative is the same as adding: $9-(-3)=9+3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olm-u1-s1-ne-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these has the smallest value?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-2)^2$" },
            { id: "b", text: "$-2^2$" },
            { id: "c", text: "$-(-2)$" },
            { id: "d", text: "$|-2|$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Order of operations", statement: "Powers before sign." }], steps: [{ reasoning: "$-2^2=-4$; the others are $4$, $2$ and $2$.", marks: 1, markCode: "A" }], finalAnswer: "$-2^2$" },
        },
        {
          id: "olm-u1-s1-ne-q9", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $(-3)\\times(-4)-(-5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: { principles: [{ kind: "property", name: "Sign rule", statement: "Neg × neg = pos; subtracting neg adds." }], steps: [
            { reasoning: "$(-3)\\times(-4)=12$.", marks: 1, markCode: "M" },
            { reasoning: "$12-(-5)=12+5=17$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
          ], finalAnswer: "17" },
        },
        {
          id: "olm-u1-s1-ne-q10", difficulty: "core", totalMarks: 3,
          stem: "A diver is 12 m below sea level. She rises 7 m and then sinks 9 m. Find her final position relative to sea level.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Context", statement: "Model depth with negatives." }], steps: [
            { reasoning: "Start at $-12$; rising 7 m gives $-12+7=-5$.", marks: 1, markCode: "M" },
            { reasoning: "Sinking 9 m gives $-5-9=-14$.", marks: 1, markCode: "M" },
            { reasoning: "She is 14 m below sea level.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-14$ m" },
        },
        {
          id: "olm-u1-s1-ne-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate $(-2)^4-(-1)^5\\times6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 22 }] },
          markscheme: { principles: [{ kind: "technique", name: "Powers of negatives", statement: "Even powers positive, odd powers negative." }], steps: [
            { reasoning: "$(-2)^4=16$ (even power of a negative is positive) and $(-1)^5=-1$.", marks: 1, markCode: "M" },
            { reasoning: "$(-1)\\times6=-6$.", marks: 1, markCode: "M" },
            { reasoning: "$16-(-6)=16+6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 22.", marks: 1, markCode: "A" },
          ], finalAnswer: "22" },
        },
        {
          id: "olm-u1-s1-ne-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is positive?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-2^2$" },
            { id: "b", text: "$-7+(-4)$" },
            { id: "c", text: "$(-3)^3$" },
            { id: "d", text: "$(-1)^4$" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Sign rule", statement: "Even power of negative is positive." }], steps: [{ reasoning: "$(-1)^4=1$; $(-3)^3=-27$, $-2^2=-4$ and $-7+(-4)=-11$ are all negative.", marks: 1, markCode: "A" }], finalAnswer: "$(-1)^4$" },
        },
        {
          id: "olm-u1-s1-ne-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why $-3^2$ and $(-3)^2$ are different, and evaluate each one.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Order of operations", statement: "Brackets change what is squared." }], steps: [
            { reasoning: "$-3^2=-(3^2)=-9$: the square is found first, then negated.", marks: 1, markCode: "M" },
            { reasoning: "$(-3)^2=(-3)(-3)=9$: the brackets make $-3$ the base.", marks: 1, markCode: "M" },
            { reasoning: "They differ because the brackets change which operation is performed first.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-3^2=-9$ and $(-3)^2=9$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-9$ and $9$" },
        },
        {
          id: "olm-u1-s1-ne-q14", difficulty: "foundation", totalMarks: 3,
          stem: "The temperature was $4$°C at noon and $-7$°C at midnight. Find the change in temperature.",
          response: { type: "numeric", parts: [{ label: "a", answer: -11 }] },
          markscheme: { principles: [{ kind: "technique", name: "Context", statement: "Change = final − initial." }], steps: [
            { reasoning: "Change $=-7-4$.", marks: 1, markCode: "M" },
            { reasoning: "$-7-4=-11$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-11$°C, a drop of 11°C.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-11$°C" },
        },
        {
          id: "olm-u1-s1-ne-q15", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{-18}{-6}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "-3" },
            { id: "b", text: "3" },
            { id: "c", text: "12" },
            { id: "d", text: "-12" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Sign rule", statement: "Neg ÷ neg = pos." }], steps: [{ reasoning: "Negative divided by negative is positive: $\\frac{-18}{-6}=3$.", marks: 1, markCode: "A" }], finalAnswer: "3" },
        },
        {
          id: "olm-u1-s1-ne-q16", difficulty: "challenge", totalMarks: 4,
          stem: "If $p=-3$ and $q=-4$, find the value of $p^2-q$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Replace values carefully." }], steps: [
            { reasoning: "$p^2=(-3)^2=9$ (brackets mean the negative is squared).", marks: 1, markCode: "M" },
            { reasoning: "$p^2-q=9-(-4)$.", marks: 1, markCode: "M" },
            { reasoning: "$9-(-4)=9+4=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
          ], finalAnswer: "13" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u1-s1-num-notes", title: "Number — notes", summary: "Number sets, BIDMAS, negatives.",
      sections: [
        { heading: "Sets", body: "Natural ⊂ integers ⊂ rational ⊂ real; irrationals like $\\sqrt2$, $\\pi$ sit outside rationals." },
        { heading: "Operations", body: "BIDMAS order; neg × neg = pos; subtracting a negative adds." },
      ] },
  ],
};
