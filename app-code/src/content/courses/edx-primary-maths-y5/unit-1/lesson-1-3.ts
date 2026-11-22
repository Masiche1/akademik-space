import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edpm5-u1-lesson-1-3",
  code: "1-3",
  title: "Factors, Multiples and the Highest Common Factor",
  goal: "I CAN find factors, multiples, prime numbers and the highest common factor (HCF).",
  standards: ["Year 5 Number"],
  vocabulary: [
    {
      term: "Highest common factor",
      definition:
        "The largest number that divides exactly into two or more numbers.",
    },
    {
      term: "Prime factorisation",
      definition: "Breaking a number into its prime factors.",
    },
    {
      term: "Prime number",
      definition: "A number with exactly two factors, e.g. 2, 3, 5, 7, 11...",
    },
    { term: "Composite", definition: "A number with more than two factors." },
  ],
  concepts: [
    {
      id: "edpm5-u1-factors",
      title: "Factors and multiples",
      skill: "Find factors, multiples and prime factorizations of numbers.",
      lesson: {
        sections: [
          {
            heading: "Factors and primes",
            body: "**Factors** divide exactly. **Prime factorisation** breaks a number into primes: 24 = 2 × 2 × 2 × 3 = 2³ × 3. Find by dividing by smallest prime repeatedly. 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.",
          },
          {
            heading: "Multiples and LCM",
            body: "**Multiples** are times-table entries. Common multiples of 6 and 8: 24, 48, 72... **LCM** = smallest = 24. **HCF** = largest shared factor: factors of 12 (1,2,3,4,6,12) and 18 (1,2,3,6,9,18) → HCF = 6.",
          },
        ],
        keyFormulas: [
          {
            name: "Prime factorisation",
            statement: "Break into primes: 24 = 2³ × 3",
          },
          {
            name: "HCF/LCM",
            statement:
              "HCF = biggest shared factor; LCM = smallest shared multiple",
          },
        ],
        workedExample: {
          problem: "Find the HCF of 24 and 36.",
          solution:
            "Factors of 24: 1,2,3,4,6,8,12,24. Of 36: 1,2,3,4,6,9,12,18,36. Common: 1,2,3,4,6,12. HCF = 12.",
        },
      },
      questions: [
        {
          id: "edpm5-u1-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the prime factorisation of 12?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 × 6" },
              { id: "b", text: "3 × 4" },
              { id: "c", text: "2 × 2 × 3" },
              { id: "d", text: "2 × 3 × 2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prime factorisation",
                statement: "12 = 2 × 2 × 3 (all primes).",
              },
            ],
            steps: [
              { reasoning: "12 = 2 × 6 = 2 × 2 × 3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 2 × 2 × 3",
            commonErrors: ["Leaving 6 — not prime."],
          },
        },
        {
          id: "edpm5-u1-fm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the HCF of 20 and 30.",
          response: {
            type: "numeric",
            parts: [{ label: "HCF", answer: 10, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HCF",
                statement:
                  "Factors of 20: 1,2,4,5,10,20; of 30: 1,2,3,5,6,10,15,30. Common: 1,2,5,10. HCF=10.",
              },
            ],
            steps: [
              { reasoning: "List factors of both.", marks: 1, markCode: "M" },
              {
                reasoning: "Common factors: 1, 2, 5, 10.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "HCF = 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 5 — not the highest."],
          },
        },
        {
          id: "edpm5-u1-fm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the LCM of 8 and 12?",
          response: {
            type: "numeric",
            parts: [{ label: "LCM", answer: 24, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LCM",
                statement: "Multiples of 8: 8,16,24; of 12: 12,24 → LCM 24.",
              },
            ],
            steps: [
              {
                reasoning: "List multiples of 8 and 12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "First shared: 24.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
            commonErrors: ["Answering 96 — a common multiple but not lowest."],
          },
        },
        {
          id: "edpm5-u1-fm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Find the HCF and LCM of 18 and 24.",
          parts: [
            { label: "a", prompt: "Find the HCF of 18 and 24.", marks: 4 },
            { label: "b", prompt: "Find the LCM of 18 and 24.", marks: 3 },
            {
              label: "c",
              prompt: "Check: HCF × LCM should equal 18 × 24. Verify.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HCF and LCM",
                statement: "HCF(18,24)=6; LCM=72; 6×72=432=18×24.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Factors of 18: 1,2,3,6,9,18; of 24: 1,2,3,4,6,8,12,24.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Common: 1,2,3,6. HCF = 6.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: 6.", marks: 1, markCode: "A" },
              {
                part: "a",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Multiples of 18: 18,36,54,72; of 24: 24,48,72.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "LCM = 72.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Answer: 72.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "HCF × LCM = 6 × 72 = 432.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "18 × 24 = 432. ✓",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Verified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HCF 6, LCM 72; check 6×72=432=18×24",
            commonErrors: ["Forgetting the HCF×LCM relationship check."],
          },
        },
      ],
    },
    {
      id: "edpm5-u1-primes",
      title: "Prime numbers to 100",
      skill: "Identify all prime numbers up to 100 and use divisibility tests.",
      lesson: {
        sections: [
          {
            heading: "Primes to 100",
            body: "There are 25 primes below 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97. **2 is the only even prime.** 1 is not prime.",
          },
          {
            heading: "Divisibility tests",
            body: "Quick checks: ÷2 if even; ÷3 if digit sum ÷3; ÷5 if ends in 0 or 5; ÷10 if ends in 0. For primes, also test ÷7, ÷11 etc. up to √n. 91 = 7 × 13 (not prime despite looking prime).",
          },
        ],
        keyFormulas: [
          { name: "Prime test", statement: "Only factors are 1 and itself" },
          { name: "25 primes", statement: "2,3,5,7,11,13,...,97 below 100" },
        ],
        workedExample: {
          problem: "Is 51 prime?",
          solution: "Digit sum 5+1=6, divisible by 3 → 51 = 3 × 17. Not prime.",
        },
      },
      questions: [
        {
          id: "edpm5-u1-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the only even prime number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prime",
                statement: "2 is prime; all other even numbers ÷2.",
              },
            ],
            steps: [
              {
                reasoning: "Only 2 is both even and prime.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 2",
            commonErrors: ["Forgetting 2 is prime."],
          },
        },
        {
          id: "edpm5-u1-pr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is 91 a prime number? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prime testing",
                statement: "91 = 7 × 13 — not prime.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Test divisibility: not even, digit sum 10 (not ÷3), doesn't end 0/5.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "91 ÷ 7 = 13 exactly.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: No, 91 = 7 × 13.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No — 7 × 13",
            commonErrors: ["Assuming it looks prime — must test factors."],
          },
        },
        {
          id: "edpm5-u1-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "List all prime numbers between 30 and 40.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primes",
                statement: "31 and 37 are prime; others composite.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Test 31: prime. 32 even, 33=3×11, 34 even, 35=5×7, 36 even, 37 prime, 38 even, 39=3×13.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Primes: 31 and 37.", marks: 1, markCode: "A" },
              { reasoning: "Both found.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "31 and 37",
            commonErrors: ["Including 33 or 39 — both divisible by 3."],
          },
        },
        {
          id: "edpm5-u1-pr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A number has exactly two factors: 1 and itself.",
          parts: [
            { label: "a", prompt: "What is this number called?", marks: 2 },
            { label: "b", prompt: "Give three examples below 20.", marks: 4 },
            {
              label: "c",
              prompt: "Explain why 1 is not a prime number.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prime definition",
                statement:
                  "Exactly 2 factors: 1 and itself; 1 has only 1 factor.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Prime number.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct term.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Any three of: 2, 3, 5, 7, 11, 13, 17, 19.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Three valid examples.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "All below 20.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "1 has only one factor: itself.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Primes need exactly two factors.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Correct conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Prime; e.g. 2, 3, 5; 1 not prime (only 1 factor)",
            commonErrors: [
              "Including 1 as prime — it fails the two-factor test.",
            ],
          },
        },
      ],
    },
  ],
};
