import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edm7-u1-lesson-1-2",
  code: "1-2",
  title: "Factors, Multiples and Primes",
  goal: "I CAN find factors and multiples, identify prime numbers and use prime factorisation.",
  standards: ["Edexcel KS3 Maths — Number"],
  vocabulary: [
    {
      term: "Factor",
      definition:
        "A number that divides exactly into another — e.g. 3 is a factor of 12.",
    },
    {
      term: "Multiple",
      definition:
        "The result of multiplying a number by an integer — e.g. 15 is a multiple of 5.",
    },
    {
      term: "Prime number",
      definition:
        "A number greater than 1 with exactly two factors: 1 and itself.",
    },
    {
      term: "Prime factorisation",
      definition:
        "Writing a number as a product of prime factors, e.g. $12 = 2^2 \\times 3$.",
    },
  ],
  concepts: [
    {
      id: "edm7-u1-factors",
      title: "Factors and Multiples",
      skill: "Find factors, multiples, HCF and LCM of integers.",
      lesson: {
        sections: [
          {
            heading: "Factors and multiples",
            body: "**Factors** divide exactly into a number: factors of 12 are $1, 2, 3, 4, 6, 12$ — found in pairs $(1 \\times 12), (2 \\times 6), (3 \\times 4)$. **Multiples** are the times-table results: multiples of 4 are $4, 8, 12, 16, \\ldots$ — infinite.\n\n**HCF** (highest common factor): the largest factor shared by two numbers — HCF of 12 and 18 is 6. **LCM** (lowest common multiple): the smallest multiple shared — LCM of 4 and 6 is 12. Factor pairs help find all factors systematically.",
          },
          {
            heading: "Primes and prime factorisation",
            body: "**Prime numbers** have exactly two factors: $2, 3, 5, 7, 11, 13, \\ldots$ — 1 is NOT prime (only one factor), 2 is the only even prime. **Prime factorisation** breaks numbers into primes: $60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$.\n\n**Prime factor trees** find this visually — split numbers into factor pairs until all primes remain. Useful for HCF/LCM and simplifying fractions.",
          },
        ],
        keyFormulas: [
          {
            name: "Prime definition",
            statement:
              "Exactly two factors: 1 and itself (2 is the only even prime).",
          },
          {
            name: "HCF/LCM",
            statement:
              "HCF = largest shared factor; LCM = smallest shared multiple.",
          },
        ],
        workedExample: {
          problem: "Find HCF and LCM of 12 and 18.",
          solution:
            "Factors of 12: $1,2,3,4,6,12$; of 18: $1,2,3,6,9,18$. Shared: $1,2,3,6$ → HCF $= 6$. Multiples of 12: $12,24,36$; of 18: $18,36$ → LCM $= 36$.",
        },
      },
      questions: [
        {
          id: "edm7-u1-factors-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a prime number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "21" },
              { id: "c", text: "17" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prime",
                statement: "Exactly two factors: 1 and itself.",
              },
            ],
            steps: [
              {
                reasoning:
                  "17 has only factors 1 and 17 — the others have more.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 17",
            commonErrors: ["Choosing 15 — odd doesn't mean prime."],
          },
        },
        {
          id: "edm7-u1-factors-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write 48 as a product of prime factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Prime factorisation",
                statement:
                  "Break into factor pairs until all primes: $48 = 2^4 \\times 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$48 = 2 \\times 24$ or $6 \\times 8$ etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Continue splitting: $48 = 2^4 \\times 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All factors prime, correct product.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$48 = 2^4 \\times 3$",
            commonErrors: [
              "Leaving a composite factor like 6.",
              "Wrong prime powers.",
            ],
          },
        },
        {
          id: "edm7-u1-factors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the HCF of 36 and 54.",
          response: {
            type: "numeric",
            parts: [{ label: "HCF", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "HCF via factors or primes",
                statement:
                  "List factors or use prime factorisation — largest shared factor.",
              },
            ],
            steps: [
              {
                reasoning: "Factors of 36: $1,2,3,4,6,9,12,18,36$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Factors of 54: $1,2,3,6,9,18,27,54$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shared factors: $1,2,3,6,9,18$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Largest = $18$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Answering 6 — not checking all shared factors."],
          },
        },
        {
          id: "edm7-u1-factors-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two ropes measure 48 cm and 72 cm. They must be cut into equal pieces as long as possible.",
          parts: [
            {
              label: "a",
              prompt: "Explain why the HCF gives the piece length.",
              marks: 2,
            },
            { label: "b", prompt: "Calculate the piece length.", marks: 2 },
            {
              label: "c",
              prompt: "Calculate how many pieces each rope gives.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HCF problems",
                statement:
                  "HCF = largest equal piece; divide each length by HCF for piece count.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HCF is largest factor of both → longest equal piece.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Both lengths divide exactly by HCF.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "HCF of 48 and 72 = 24 cm.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$48 \\div 24 = 2$ pieces.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$72 \\div 24 = 3$ pieces.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Division shown for both ropes.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answers with units/context.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) HCF = longest common piece (b) 24 cm (c) 2 and 3 pieces",
            commonErrors: [
              "Using LCM instead of HCF.",
              "Not dividing by piece length.",
            ],
          },
        },
      ],
    },
    {
      id: "edm7-u1-rounding",
      title: "Rounding, Estimation and BIDMAS",
      skill:
        "Round numbers to given places, estimate calculations and apply order of operations.",
      lesson: {
        sections: [
          {
            heading: "Rounding and estimation",
            body: "**Rounding**: look at the digit after the target place — 5 or more rounds up, less stays. $347$ to nearest 10 = $350$ (7 ≥ 5); to nearest 100 = $300$ (4 < 5). **Estimation** rounds first, then calculates — useful for checking answers.\n\n**Upper/lower bounds**: rounding gives a range — $3.4$ rounded to 1 d.p. could be $3.35$ to $3.45$. Useful in real measurements where exact values are unknown.",
          },
          {
            heading: "BIDMAS",
            body: "**Order of operations**: **B**rackets, **I**ndices (powers), **D**ivision and **M**ultiplication (left to right), **A**ddition and **S**ubtraction (left to right).\n\n$3 + 4 \\times 2 = 3 + 8 = 11$ (not 14!). Brackets override: $(3 + 4) \\times 2 = 14$. Indices before ×/÷: $2 + 3^2 = 2 + 9 = 11$. When unsure, evaluate step by step showing each stage.",
          },
        ],
        keyFormulas: [
          {
            name: "BIDMAS",
            statement:
              "Brackets → Indices → Division/Multiplication → Addition/Subtraction.",
          },
          {
            name: "Rounding rule",
            statement: "Digit ≥ 5 rounds up, < 5 stays.",
          },
        ],
        workedExample: {
          problem: "Evaluate $20 - 3 \\times (4 + 1)$.",
          solution: "Brackets first: $20 - 3 \\times 5 = 20 - 15 = 5$.",
        },
      },
      questions: [
        {
          id: "edm7-u1-rounding-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Round 467 to the nearest 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 470 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Rounding",
                statement: "Look at ones digit: 7 ≥ 5 → round tens up.",
              },
            ],
            steps: [
              {
                reasoning: "7 ≥ 5 so $460 \\to 470$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$470$",
            commonErrors: ["Answering 460 — ignoring rounding rule."],
          },
        },
        {
          id: "edm7-u1-rounding-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $15 - 2 \\times 4$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "BIDMAS",
                statement: "Multiplication before subtraction.",
              },
            ],
            steps: [
              {
                reasoning: "$2 \\times 4 = 8$ first.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$15 - 8$.", marks: 1, markCode: "M" },
              { reasoning: "$= 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Answering 52 — doing $15 - 2$ first."],
          },
        },
        {
          id: "edm7-u1-rounding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $3 + 4 \\times (10 - 6) \\div 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "BIDMAS multi-step",
                statement: "Brackets → division → multiplication → addition.",
              },
            ],
            steps: [
              {
                reasoning: "$(10 - 6) = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$4 \\div 2 = 2$ then $4 \\times 2 = 8$ (or $4 \\times 4 \\div 2 = 8$).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$3 + 8$.", marks: 1, markCode: "M" },
              { reasoning: "$= 11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Wrong order — adding before multiplying."],
          },
        },
        {
          id: "edm7-u1-rounding-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Estimate $48.7 \\times 5.2$ by rounding each number to 1 significant figure.",
          parts: [
            {
              label: "a",
              prompt: "Round each number to 1 significant figure.",
              marks: 2,
            },
            { label: "b", prompt: "Calculate the estimate.", marks: 3 },
            {
              label: "c",
              prompt: "Explain why estimation is useful.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Estimation",
                statement:
                  "Round first, then calculate — checks reasonableness of exact answers.",
              },
            ],
            steps: [
              {
                reasoning: "$48.7 \\to 50$, $5.2 \\to 5$.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Both rounded correctly to 1 s.f.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$50 \\times 5 = 250$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct multiplication.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Estimate stated clearly.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Checks if exact answer is reasonable.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Quick mental check without calculator.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Catches gross errors.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) $50 \\times 5$ (b) $250$ (c) sanity check on exact answers",
            commonErrors: ["Rounding to wrong s.f.", "No purpose explained."],
          },
        },
      ],
    },
  ],
};
