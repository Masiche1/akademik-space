import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edm8-u1-lesson-1-1",
  code: "1-1",
  title: "Integers, Powers and Roots",
  goal: "I CAN calculate with negative numbers, apply the order of operations, and use powers, roots, prime factors, HCF and LCM.",
  standards: ["Y8 Number"],
  vocabulary: [
    { term: "Integer", definition: "A whole number, which may be positive, negative or zero." },
    { term: "BIDMAS", definition: "The order of operations: Brackets, Indices, Division and Multiplication, Addition and Subtraction." },
    { term: "Prime number", definition: "A number greater than 1 whose only factors are 1 and itself." },
    { term: "Prime factorisation", definition: "Writing a number as a product of prime numbers, for example $12=2^2\\times3$." },
    { term: "Highest common factor (HCF)", definition: "The largest number that is a factor of two or more given numbers." },
    { term: "Lowest common multiple (LCM)", definition: "The smallest positive number that is a multiple of two or more given numbers." },
    { term: "Square root", definition: "A number that, multiplied by itself, gives the original number. For example $\\sqrt{49}=7$." },
  ],
  concepts: [
    {
      id: "edm8-u1-negatives-bidmas",
      title: "Negative numbers and order of operations",
      skill: "Add, subtract, multiply and divide with negative numbers and use BIDMAS to evaluate expressions.",
      lesson: {
        sections: [
          {
            heading: "Calculating with negative numbers",
            body: "Subtracting a negative number is the same as adding the positive: $5-(-2)=5+2=7$. When multiplying or dividing, two numbers with the **same** sign give a positive answer and two numbers with **different** signs give a negative answer. So $(-4)\\times(-3)=12$ but $18\\div(-6)=-3$.",
          },
          {
            heading: "The order of operations",
            body: "Work out Brackets first, then Indices (powers and roots), then Division and Multiplication from left to right, then Addition and Subtraction from left to right. Be careful with powers of negative numbers: $(-2)^2=4$ because the bracket is squared.",
          },
        ],
        keyFormulas: [
          { name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
          { name: "Signs in multiplication", statement: "$(-a)\\times(-b)=ab$ and $(-a)\\times b=-ab$" },
        ],
        workedExample: {
          problem: "Work out $2+3\\times(7-4)^2$.",
          solution: "Brackets first: $7-4=3$. Indices: $3^2=9$. Multiplication: $3\\times9=27$. Addition: $2+27=29$.",
        },
      },
      questions: [
        {
          id: "edm8-u1-negatives-bidmas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $-3-(-7)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-10$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$-4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
            ],
            steps: [
              { reasoning: "Subtracting $-7$ is the same as adding $7$.", working: "-3-(-7)=-3+7=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $4$",
            commonErrors: ["Treating the two minus signs as separate and giving $-10$.", "Giving $-4$ by subtracting 3 from 7 and keeping a negative sign."],
            examinerNote: "B1 for 4 cao.",
          },
        },
        {
          id: "edm8-u1-negatives-bidmas-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $3+4\\times(6-2)^2\\div8$.",
          response: { type: "numeric", parts: [{ label: "Answer" , answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "BIDMAS", statement: "Brackets, then indices, then division and multiplication (left to right), then addition and subtraction." },
            ],
            steps: [
              { reasoning: "Brackets first, then the index, then multiply and divide from left to right.", working: "3+4\\times 4^2\\div 8=3+4\\times16\\div8=3+64\\div8=3+8", marks: 1, markCode: "M" },
              { reasoning: "Finally add.", working: "3+8=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Adding 3 and 4 first.", "Squaring after multiplying, giving $(4\\times4)^2$."],
            examinerNote: "M1 for correct order of operations with at least two correct steps. A1 cao.",
          },
        },
        {
          id: "edm8-u1-negatives-bidmas-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $(-4)\\times(-3)-18\\div(-6)+(-2)^2$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 19 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Signs in multiplication and division", statement: "Same signs give a positive result; different signs give a negative result." },
              { kind: "principle", name: "BIDMAS", statement: "Evaluate indices, then multiplication and division, then addition and subtraction." },
            ],
            steps: [
              { reasoning: "Evaluate the product, the quotient and the power separately.", working: "(-4)\\times(-3)=12,\\quad 18\\div(-6)=-3,\\quad (-2)^2=4", marks: 1, markCode: "M" },
              { reasoning: "Substitute back, noting that subtracting $-3$ means adding 3.", working: "12-(-3)+4=12+3+4", marks: 1, markCode: "M" },
              { reasoning: "Add the terms.", working: "19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$19$",
            commonErrors: ["Writing $(-2)^2=-4$.", "Forgetting that subtracting a negative adds."],
            examinerNote: "M1 for two correct values from the first line. M1 for correct handling of the subtraction of a negative (oe). A1 cao.",
          },
        },
        {
          id: "edm8-u1-negatives-bidmas-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "At midnight the temperature in a town was $-5^\\circ\\text{C}$. By 6 am the temperature had fallen by $4^\\circ\\text{C}$. By noon it had risen by $11^\\circ\\text{C}$ from its 6 am value.",
          parts: [
            { label: "a", prompt: "Work out the temperature, in $^\\circ\\text{C}$, at 6 am.", marks: 1 },
            { label: "b", prompt: "Work out the temperature, in $^\\circ\\text{C}$, at noon.", marks: 2 },
            { label: "c", prompt: "At midnight a second town was at $-2^\\circ\\text{C}$. Work out how many degrees warmer the second town was than the first town at midnight.", marks: 2 },
            { label: "d", prompt: "Amir says that $(-5)\\times(-4)=-20$. Write down the correct answer and explain his mistake.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Temperature at 6 am", answer: -9, unit: "°C" },
              { label: "(b) Temperature at noon", answer: 2, unit: "°C" },
              { label: "(c) Difference at midnight", answer: 3, unit: "°C" },
              { label: "(d) Correct value of $(-5)\\times(-4)$", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number line", statement: "A fall in temperature subtracts; a rise adds." },
              { kind: "law", name: "Subtracting a negative", statement: "$a-(-b)=a+b$" },
              { kind: "law", name: "Signs in multiplication", statement: "The product of two negative numbers is positive." },
            ],
            steps: [
              { part: "a", reasoning: "A fall of 4 degrees means subtract 4 from the midnight value.", working: "-5-4=-9", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A rise of 11 degrees means add 11 to the 6 am value.", working: "-9+11", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The difference is the warmer minus the colder temperature.", working: "-2-(-5)=-2+5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiplying two negative numbers gives a positive number.", working: "(-5)\\times(-4)=20", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Amir has treated the product as negative. The two numbers have the same sign, so the product must be positive.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State the rule: same signs give a positive answer, different signs give a negative answer.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $-9^\\circ\\text{C}$ (b) $2^\\circ\\text{C}$ (c) $3^\\circ\\text{C}$ (d) $20$; two negatives multiply to give a positive.",
            commonErrors: ["Computing $-5+4=-1$ for a fall in temperature.", "Giving the difference in (c) as $-3$ or $7$."],
            examinerNote: "In (c) accept $-2-(-5)$ or counting up on a number line (oe). In (d) the reason must refer to both numbers having the same sign.",
          },
        },
      ],
    },
    {
      id: "edm8-u1-powers-roots-hcf-lcm",
      title: "Powers, roots, prime factors, HCF and LCM",
      skill: "Write numbers as products of prime factors and use them to find the HCF and LCM.",
      lesson: {
        sections: [
          {
            heading: "Powers and roots",
            body: "A power tells you how many times to multiply a number by itself: $5^3=5\\times5\\times5=125$. Squares and square roots are inverses, as are cubes and cube roots, so $\\sqrt{144}=12$ and $\\sqrt[3]{27}=3$.",
          },
          {
            heading: "Prime factorisation",
            body: "Split a number into a product of primes using a factor tree. For example $60=2\\times2\\times3\\times5=2^2\\times3\\times5$. Write the answer using index notation.",
          },
          {
            heading: "HCF and LCM from prime factors",
            body: "Write each number as a product of primes. The **HCF** uses only the primes common to both, each to the **lowest** power. The **LCM** uses every prime that appears, each to the **highest** power. For $24=2^3\\times3$ and $36=2^2\\times3^2$: HCF $=2^2\\times3=12$ and LCM $=2^3\\times3^2=72$.",
          },
        ],
        keyFormulas: [
          { name: "HCF", statement: "Common primes, lowest powers" },
          { name: "LCM", statement: "All primes, highest powers" },
        ],
        workedExample: {
          problem: "Find the HCF and LCM of 24 and 36.",
          solution: "$24=2^3\\times3$ and $36=2^2\\times3^2$. HCF $=2^2\\times3=12$. LCM $=2^3\\times3^2=8\\times9=72$.",
        },
      },
      questions: [
        {
          id: "edm8-u1-powers-roots-hcf-lcm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is 36 written as a product of its prime factors?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2^3\\times3$" },
              { id: "b", text: "$4\\times9$" },
              { id: "c", text: "$2\\times3^3$" },
              { id: "d", text: "$2^2\\times3^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime factorisation", statement: "A product made only of prime numbers." },
            ],
            steps: [
              { reasoning: "$36=2\\times2\\times3\\times3$, and 2 and 3 are both prime.", working: "36=2^2\\times3^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2^2\\times3^2$",
            commonErrors: ["Choosing $4\\times9$, where 4 and 9 are not prime.", "Choosing $2^3\\times3=24$ or $2\\times3^3=54$ without checking the product."],
          },
        },
        {
          id: "edm8-u1-powers-roots-hcf-lcm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the highest common factor (HCF) of 24 and 36.",
          response: { type: "numeric", parts: [{ label: "HCF", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common prime factors, each to the lowest power." },
            ],
            steps: [
              { reasoning: "Write both numbers as products of primes.", working: "24=2^3\\times3,\\quad 36=2^2\\times3^2", marks: 1, markCode: "M" },
              { reasoning: "Take the lowest power of each common prime.", working: "2^2\\times3=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Giving the LCM, 72.", "Using the highest powers instead of the lowest."],
            examinerNote: "M1 for a method showing at least a list of factors of both numbers (oe). A1 cao.",
          },
        },
        {
          id: "edm8-u1-powers-roots-hcf-lcm-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out the lowest common multiple (LCM) of 20 and 30. Show your method using prime factors.",
          response: { type: "numeric", parts: [{ label: "LCM", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "LCM from primes", statement: "Multiply every prime that appears, each to its highest power." },
            ],
            steps: [
              { reasoning: "Write both numbers as products of primes.", working: "20=2^2\\times5,\\quad 30=2\\times3\\times5", marks: 1, markCode: "M" },
              { reasoning: "Take each prime that appears, to its highest power.", working: "2^2\\times3\\times5", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "4\\times3\\times5=60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60$",
            commonErrors: ["Multiplying the two numbers to get 600.", "Giving the HCF, 10."],
            examinerNote: "Accept a correct listing of multiples method for full marks (oe).",
          },
        },
        {
          id: "edm8-u1-powers-roots-hcf-lcm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Bus A leaves a bus station every 12 minutes. Bus B leaves the same station every 18 minutes. Both buses leave together at 9:00 am.",
          parts: [
            { label: "a", prompt: "Write 12 and 18 each as a product of prime factors.", marks: 2 },
            { label: "b", prompt: "Find the highest common factor (HCF) of 12 and 18.", marks: 2 },
            { label: "c", prompt: "Find the lowest common multiple (LCM) of 12 and 18.", marks: 2 },
            { label: "d", prompt: "Work out how many minutes after 9:00 am the buses next leave together.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) HCF", answer: 6 },
              { label: "(c) LCM", answer: 36 },
              { label: "(d) Minutes after 9:00 am", answer: 36, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime factorisation", statement: "Every integer greater than 1 is a product of primes." },
              { kind: "principle", name: "HCF and LCM from primes", statement: "HCF: common primes, lowest powers. LCM: all primes, highest powers." },
              { kind: "principle", name: "Common multiples", statement: "Both buses are at the station at times that are common multiples of 12 and 18." },
            ],
            steps: [
              { part: "a", reasoning: "Use a factor tree for each number.", working: "12=2^2\\times3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Repeat for 18.", working: "18=2\\times3^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take the lowest power of each common prime.", working: "2\\times3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply.", working: "6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Take the highest power of each prime.", working: "2^2\\times3^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply.", working: "4\\times9=36", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The buses next leave together after a time that is the smallest common multiple of 12 and 18.", working: "\\text{LCM}=36", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the time in minutes after 9:00 am (that is 9:36 am).", working: "36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12=2^2\\times3$, $18=2\\times3^2$ (b) $6$ (c) $36$ (d) $36$ minutes (9:36 am)",
            commonErrors: ["Using the HCF in (d) and giving 6 minutes.", "Multiplying 12 and 18 to get 216."],
            examinerNote: "In (d) follow through from an incorrect LCM in (c) (ft).",
          },
        },
      ],
    },
  ],
};
