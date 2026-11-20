import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpm4-u1-lesson-1-3",
  code: "1-3",
  title: "Factors, Multiples, Primes and Square Numbers",
  goal: "I CAN find factors and multiples, identify prime, square and cube numbers.",
  standards: ["Year 4 Number"],
  vocabulary: [
    {
      term: "Factor",
      definition: "A number that divides exactly into another number.",
    },
    {
      term: "Multiple",
      definition: "The result of multiplying a number by a whole number.",
    },
    {
      term: "Prime number",
      definition:
        "A number greater than 1 with exactly two factors: 1 and itself.",
    },
    {
      term: "Square number",
      definition:
        "A number made by multiplying a whole number by itself: 1, 4, 9, 16...",
    },
    {
      term: "Cube number",
      definition:
        "A number made by multiplying a whole number by itself three times: 1, 8, 27...",
    },
  ],
  concepts: [
    {
      id: "edpm4-u1-factors",
      title: "Factors and multiples",
      skill: "Find all factors of numbers and list multiples.",
      lesson: {
        sections: [
          {
            heading: "Factors",
            body: "**Factors** divide exactly into a number. Factors of 12: 1, 2, 3, 4, 6, 12 — because 12 ÷ each gives a whole number. Find them in pairs: 1×12, 2×6, 3×4. A **factor pair** multiplies to the number.",
          },
          {
            heading: "Multiples",
            body: "**Multiples** are what you get multiplying by whole numbers. Multiples of 4: 4, 8, 12, 16, 20... (the 4 times table). Multiples of 6: 6, 12, 18, 24... Common multiples of 4 and 6: 12, 24, 36... The smallest is the **lowest common multiple (LCM)**.",
          },
        ],
        keyFormulas: [
          { name: "Factors", statement: "Numbers that divide exactly" },
          {
            name: "Multiples",
            statement: "Times table entries; LCM = smallest shared",
          },
        ],
        workedExample: {
          problem: "List all factors of 18.",
          solution: "Pairs: 1×18, 2×9, 3×6. Factors: 1, 2, 3, 6, 9, 18.",
        },
      },
      questions: [
        {
          id: "edpm4-u1-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a factor of 20?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "7" },
              { id: "c", text: "8" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Factor",
                statement: "20 ÷ 5 = 4 exactly.",
              },
            ],
            steps: [
              {
                reasoning: "20 ÷ 5 = 4; 6, 7, 8 do not divide 20 exactly.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 5",
            commonErrors: [
              "Thinking any smaller number is a factor — it must divide exactly.",
            ],
          },
        },
        {
          id: "edpm4-u1-fm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List all the factors of 24.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Factors",
                statement: "Pairs: 1×24, 2×12, 3×8, 4×6.",
              },
            ],
            steps: [
              {
                reasoning: "Find pairs: 1,2,3,4,6,8,12,24.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All eight factors listed.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Complete list.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1, 2, 3, 4, 6, 8, 12, 24",
            commonErrors: [
              "Missing factor pairs — listing only divisors found by trial.",
            ],
          },
        },
        {
          id: "edpm4-u1-fm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the lowest common multiple (LCM) of 4 and 6?",
          response: {
            type: "numeric",
            parts: [{ label: "LCM", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LCM",
                statement:
                  "Multiples of 4: 4,8,12,16...; of 6: 6,12,18...; first shared = 12.",
              },
            ],
            steps: [
              {
                reasoning: "List multiples of 4 and 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "First common multiple is 12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: [
              "Answering 24 — that's a common multiple but not the lowest.",
            ],
          },
        },
        {
          id: "edpm4-u1-fm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Consider the number 36.",
          parts: [
            { label: "a", prompt: "List all factors of 36.", marks: 4 },
            {
              label: "b",
              prompt: "Is 36 a square number? Show why.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What is the next square number after 36?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Factors and square numbers",
                statement: "36 = 6×6; factors in pairs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Pairs: 1×36, 2×18, 3×12, 4×9, 6×6 → factors 1,2,3,4,6,9,12,18,36.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All nine listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Complete and ordered.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "6 appears once (6×6).",
                marks: 1,
                markCode: "R",
              },
              { part: "b", reasoning: "36 = 6 × 6.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Yes, square number (6²).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Next square = 7 × 7 = 49.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Answer: 49.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1,2,3,4,6,9,12,18,36; yes (6×6); 49",
            commonErrors: ["Listing 6 twice as separate factors."],
          },
        },
      ],
    },
    {
      id: "edpm4-u1-primes",
      title: "Prime, square and cube numbers",
      skill: "Identify prime numbers and recognise square and cube numbers.",
      lesson: {
        sections: [
          {
            heading: "Prime numbers",
            body: "**Primes** have exactly two factors: 1 and themselves. 2, 3, 5, 7, 11, 13, 17, 19 are prime. 1 is NOT prime (only one factor). 4, 6, 8, 9, 10 are not prime (more than two factors). Test: try dividing by 2, 3, 5, 7...",
          },
          {
            heading: "Square and cube numbers",
            body: "**Square numbers**: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100. **Cube numbers**: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125. Spot them: square numbers end in 1,4,5,6,9 or 0; cubes end in 1,8.",
          },
        ],
        keyFormulas: [
          { name: "Prime", statement: "Exactly 2 factors: 1 and itself" },
          { name: "Squares", statement: "n×n: 1,4,9,16,25,36,49,64,81,100" },
          { name: "Cubes", statement: "n×n×n: 1,8,27,64,125" },
        ],
        workedExample: {
          problem: "Is 29 a prime number?",
          solution:
            "Check divisibility: not even, digit sum 11 (not ÷3), doesn't end in 0/5, 29÷7≈4.1. Only factors 1 and 29 → prime.",
        },
      },
      questions: [
        {
          id: "edpm4-u1-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a prime number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "15" },
              { id: "c", text: "17" },
              { id: "d", text: "21" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prime",
                statement: "17 has only factors 1 and 17.",
              },
            ],
            steps: [
              {
                reasoning:
                  "9=3×3, 15=3×5, 21=3×7 — all composite; 17 is prime.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 17",
            commonErrors: ["Thinking odd numbers are always prime."],
          },
        },
        {
          id: "edpm4-u1-pr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is 1 a prime number? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prime",
                statement:
                  "Primes have exactly 2 factors; 1 has only 1 factor.",
              },
            ],
            steps: [
              {
                reasoning: "1 has only one factor: itself.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Primes need exactly two factors.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer: No, 1 is not prime.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No — only one factor",
            commonErrors: ["Saying 1 is prime because nothing divides it."],
          },
        },
        {
          id: "edpm4-u1-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which of these is a cube number: 27, 32, 36, 45?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cube number",
                statement: "27 = 3×3×3.",
              },
            ],
            steps: [
              { reasoning: "Check: 3×3×3 = 27.", marks: 1, markCode: "M" },
              {
                reasoning: "32, 36, 45 are not cubes.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 27.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "27",
            commonErrors: ["Confusing 27 (cube) with 25 (square)."],
          },
        },
        {
          id: "edpm4-u1-pr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "List the prime numbers between 20 and 30.",
          parts: [
            {
              label: "a",
              prompt: "Test each number from 21 to 29 for primality.",
              marks: 4,
            },
            { label: "b", prompt: "Write the primes you found.", marks: 3 },
            {
              label: "c",
              prompt: "Explain why 23 is prime but 21 is not.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prime testing",
                statement: "Check divisibility by 2,3,5,7.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "21=3×7, 22 even, 23 prime, 24 even, 25=5×5, 26 even, 27=3×9, 28 even, 29 prime.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Method: test small factors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All nine tested.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Primes: 23 and 29.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Both listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "23: only factors 1 and 23.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "21 = 3 × 7 — has other factors.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Comparison clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "23 and 29; 23 prime (2 factors), 21 = 3×7 (composite)",
            commonErrors: ["Forgetting 29 or including 21."],
          },
        },
      ],
    },
  ],
};
