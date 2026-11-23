import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpm6-u4-lesson-4-1",
  code: "4-1",
  title: "Number Theory: Factors, Primes and HCF/LCM",
  goal: "I CAN use number theory to solve problems.",
  standards: ["Year 6 Number"],
  vocabulary: [
    {
      term: "Prime number",
      definition: "A number with exactly two factors: 1 and itself.",
    },
    {
      term: "Composite number",
      definition: "A number with more than two factors.",
    },
    {
      term: "HCF",
      definition: "Highest Common Factor — largest number dividing both.",
    },
    {
      term: "LCM",
      definition: "Lowest Common Multiple — smallest number both divide into.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u4-primes",
      title: "Prime Numbers and Factorisation",
      skill: "Identify primes and find prime factors.",
      lesson: {
        sections: [
          {
            heading: "Prime numbers",
            body: "Primes have exactly two factors. First primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31. 1 is not prime (only one factor); 2 is the only even prime. Every composite number can be written as a product of primes — prime factorisation.",
          },
          {
            heading: "Prime factorisation",
            body: "Break a number into prime factors. 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Use factor trees or repeated division. Prime factorisation helps find HCF and LCM efficiently.",
          },
        ],
        keyFormulas: [
          {
            name: "Prime factorisation",
            statement: "Every composite = product of primes",
          },
        ],
        workedExample: {
          problem: "Find the prime factorisation of 72",
          solution: "72 = 8 × 9 = 2³ × 3².",
        },
      },
      questions: [
        {
          id: "edpm6-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a prime number?",
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
                statement: "Two factors only.",
              },
            ],
            steps: [
              {
                reasoning: "17 has factors 1 and 17 only.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 17",
            commonErrors: ["Wrong identification."],
          },
        },
        {
          id: "edpm6-u4-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the prime factorisation of 12?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 × 6" },
              { id: "b", text: "2² × 3" },
              { id: "c", text: "3 × 4" },
              { id: "d", text: "2 × 2 × 3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prime factorisation",
                statement: "12 = 2×2×3.",
              },
            ],
            steps: [
              { reasoning: "12 = 2 × 6 = 2 × 2 × 3.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(d)** 2×2×3 (= 2²×3)",
            commonErrors: ["Not prime factors."],
          },
        },
        {
          id: "edpm6-u4-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the prime factorisation of 84.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Prime factorisation",
                statement: "84 = 2² × 3 × 7.",
              },
            ],
            steps: [
              {
                reasoning: "84 = 2 × 42 = 2 × 2 × 21.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "21 = 3 × 7.", marks: 1, markCode: "M" },
              { reasoning: "84 = 2² × 3 × 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2² × 3 × 7",
            commonErrors: ["Wrong factorisation."],
          },
        },
        {
          id: "edpm6-u4-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Is 91 prime? Explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Primality",
                statement: "91 = 7 × 13, so not prime.",
              },
            ],
            steps: [
              {
                reasoning: "Test divisibility: not by 2, 3, or 5.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "91 ÷ 7 = 13.", marks: 1, markCode: "M" },
              {
                reasoning: "91 = 7 × 13, so composite.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "No, 91 = 7 × 13",
            commonErrors: ["Wrong conclusion."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-hcf",
      title: "HCF and LCM",
      skill: "Find highest common factors and lowest common multiples.",
      lesson: {
        sections: [
          {
            heading: "HCF",
            body: "The HCF is the largest number that divides both numbers exactly. Find by listing factors or using prime factorisation — take the lowest power of each common prime factor. HCF of 12 and 18 = 6; HCF of 24 and 36 = 12.",
          },
          {
            heading: "LCM",
            body: "The LCM is the smallest number both numbers divide into. Find by listing multiples or prime factorisation — take the highest power of each prime factor. LCM of 4 and 6 = 12; LCM of 8 and 12 = 24. Useful for finding when events coincide.",
          },
        ],
        keyFormulas: [
          { name: "HCF", statement: "Largest common factor" },
          { name: "LCM", statement: "Smallest common multiple" },
        ],
        workedExample: {
          problem: "Find HCF and LCM of 12 and 18",
          solution: "HCF = 6; LCM = 36.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-hc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the HCF of 8 and 12?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "24" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "HCF", statement: "HCF(8,12) = 4." },
            ],
            steps: [
              {
                reasoning:
                  "Factors of 8: 1,2,4,8; of 12: 1,2,3,4,6,12. Largest common = 4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Wrong factor."],
          },
        },
        {
          id: "edpm6-u4-hc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the LCM of 6 and 9?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18" },
              { id: "b", text: "27" },
              { id: "c", text: "36" },
              { id: "d", text: "54" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "LCM", statement: "LCM(6,9) = 18." },
            ],
            steps: [
              {
                reasoning:
                  "Multiples of 6: 6,12,18; of 9: 9,18. First common = 18.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 18",
            commonErrors: ["Wrong multiple."],
          },
        },
        {
          id: "edpm6-u4-hc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the HCF of 36 and 48.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "HCF", statement: "HCF = 12." },
            ],
            steps: [
              { reasoning: "36 = 2²×3²; 48 = 2⁴×3.", marks: 1, markCode: "M" },
              {
                reasoning: "Common primes: 2 and 3; lowest powers: 2² and 3¹.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "HCF = 4 × 3 = 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edpm6-u4-hc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two lighthouses flash every 12 seconds and every 18 seconds. They flash together at t=0. When do they next flash together?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "LCM application",
                statement: "LCM(12,18) = 36 seconds.",
              },
            ],
            steps: [
              {
                reasoning: "Need smallest common multiple of 12 and 18.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiples of 12: 12,24,36; of 18: 18,36. First common = 36.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They next flash together after 36 seconds.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "36 seconds",
            commonErrors: ["Wrong LCM."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-fractions",
      title: "Fractions: Operations and Ordering",
      skill: "Perform and order fraction calculations fluently.",
      lesson: {
        sections: [
          {
            heading: "Fraction operations",
            body: "Add/subtract: common denominator first. Multiply: top×top, bottom×bottom. Divide: flip and multiply. Mixed numbers: convert to improper fractions. Always simplify the final answer.",
          },
          {
            heading: "Ordering fractions",
            body: "Compare by converting to common denominator or decimals. For three or more fractions, find a common denominator for all. Benchmarks: 0, 1/2, 1 help estimate. Negative fractions: -1/4 > -1/2 (closer to zero).",
          },
        ],
        keyFormulas: [
          { name: "Division", statement: "a/b ÷ c/d = a/b × d/c" },
          { name: "Mixed to improper", statement: "a b/c = (a×c + b)/c" },
        ],
        workedExample: {
          problem: "Order: 2/3, 5/8, 1/2",
          solution:
            "Common denominator 24: 16/24, 15/24, 12/24. Order: 1/2 < 5/8 < 2/3.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3/4 × 2/5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5/9" },
              { id: "b", text: "6/20" },
              { id: "c", text: "3/10" },
              { id: "d", text: "8/9" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction multiplication",
                statement: "3×2=6; 4×5=20.",
              },
            ],
            steps: [
              { reasoning: "3/4 × 2/5 = 6/20.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 6/20 (= 3/10)",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm6-u4-fr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate 5/6 - 1/3",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4/3" },
              { id: "b", text: "4/6" },
              { id: "c", text: "1/2" },
              { id: "d", text: "2/3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction subtraction",
                statement: "5/6 - 2/6 = 3/6 = 1/2.",
              },
            ],
            steps: [
              {
                reasoning: "Common denominator 6: 5/6 - 2/6 = 3/6 = 1/2.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 1/2",
            commonErrors: ["Wrong denominator."],
          },
        },
        {
          id: "edpm6-u4-fr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 2/3 ÷ 4/5",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction division",
                statement: "2/3 × 5/4 = 10/12 = 5/6.",
              },
            ],
            steps: [
              {
                reasoning: "Flip and multiply: 2/3 × 5/4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "2 × 5 = 10; 3 × 4 = 12.", marks: 1, markCode: "M" },
              { reasoning: "10/12 = 5/6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/6",
            commonErrors: ["Forgot to flip."],
          },
        },
        {
          id: "edpm6-u4-fr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order from smallest to largest: 3/5, 7/10, 2/3",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering",
                statement: "Common denominator 30: 18/30, 21/30, 20/30.",
              },
            ],
            steps: [
              {
                reasoning: "3/5 = 18/30; 7/10 = 21/30; 2/3 = 20/30.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compare numerators: 18 < 20 < 21.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order: 3/5 < 2/3 < 7/10.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "3/5, 2/3, 7/10",
            commonErrors: ["Wrong order."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-percent",
      title: "Percentages and Ratio",
      skill: "Apply percentages and ratio to problems.",
      lesson: {
        sections: [
          {
            heading: "Percentages",
            body: "Percentage = out of 100. 15% = 15/100 = 0.15. Percentage change: (change ÷ original) × 100. Percentage increase: new = original × (1 + %/100). Reverse percentage: if £60 is 120% of original, original = 60 ÷ 1.2 = £50.",
          },
          {
            heading: "Ratio",
            body: "Ratio compares parts: 3:5 means 3 parts to 5 parts (8 total). Scale ratios up/down keeping proportion. Map scales: 1 cm : 5 km. Divide quantities in ratio by finding one part.",
          },
        ],
        keyFormulas: [
          { name: "% increase", statement: "New = Original × (1 + %/100)" },
          { name: "Ratio parts", statement: "One part = total ÷ total parts" },
        ],
        workedExample: {
          problem: "£80 increased by 15%",
          solution: "15% of 80 = 12; new = £92.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 35% of 200?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50" },
              { id: "b", text: "60" },
              { id: "c", text: "70" },
              { id: "d", text: "65" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage",
                statement: "10% = 20; 30% = 60; 5% = 10; total = 70.",
              },
            ],
            steps: [
              {
                reasoning: "35% = 30% + 5% = 60 + 10 = 70.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 70",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm6-u4-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A price of £50 is reduced by 10%. What is the new price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£40" },
              { id: "b", text: "£45" },
              { id: "c", text: "£55" },
              { id: "d", text: "£48" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "% decrease",
                statement: "10% of 50 = 5; new = 45.",
              },
            ],
            steps: [{ reasoning: "£50 - £5 = £45.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** £45",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "edpm6-u4-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share £120 in the ratio 3:5",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ratio share",
                statement: "Parts=8; one=15; shares 45 and 75.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts = 8; one part = 120 ÷ 8 = £15.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3 parts = £45; 5 parts = £75.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Shares: £45 and £75.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£45 and £75",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm6-u4-pe-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A map scale is 1 cm : 4 km. Two towns are 7.5 cm apart on the map. What is the real distance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Map scale",
                statement: "7.5 × 4 = 30 km.",
              },
            ],
            steps: [
              {
                reasoning: "Each cm represents 4 km.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "7.5 × 4 = 30 km.", marks: 1, markCode: "M" },
              { reasoning: "Real distance = 30 km.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "30 km",
            commonErrors: ["Wrong scale use."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-problems",
      title: "Problem Solving",
      skill: "Solve complex multi-step problems.",
      lesson: {
        sections: [
          {
            heading: "Multi-step strategy",
            body: "Break complex problems into stages. Identify what each stage needs. Work through systematically. Check intermediate results. Estimate first and compare. Look for efficient methods — e.g., find HCF before simplifying ratios.",
          },
          {
            heading: "Reasoning",
            body: "Explain each step with 'because', 'so', 'therefore'. Show all working for method marks. Check units and that answers are sensible. For algebra problems, define variables clearly before solving.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A number doubled and increased by 7 equals 25. Find the number.",
          solution: "2n + 7 = 25 → 2n = 18 → n = 9.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 3x + 5 = 20",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "3x = 15; x = 5.",
              },
            ],
            steps: [{ reasoning: "3x = 15; x = 5.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm6-u4-ps-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A rectangle has area 48 cm² and length 8 cm. What is its width?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6 cm" },
              { id: "b", text: "8 cm" },
              { id: "c", text: "40 cm" },
              { id: "d", text: "12 cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Area", statement: "48 ÷ 8 = 6 cm." },
            ],
            steps: [
              {
                reasoning: "Width = area ÷ length = 48 ÷ 8 = 6.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 6 cm",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm6-u4-ps-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shopkeeper buys 40 kg of rice at £0.80/kg and sells at £1.10/kg. What is the profit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit",
                statement: "Revenue £44 - cost £32 = £12.",
              },
            ],
            steps: [
              { reasoning: "Cost: 40 × 0.80 = £32.", marks: 1, markCode: "M" },
              {
                reasoning: "Revenue: 40 × 1.10 = £44.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit = £44 - £32 = £12.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£12",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm6-u4-ps-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three friends share £90 in the ratio 2:3:4. How much does each get?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ratio",
                statement: "Parts=9; one=10; shares 20,30,40.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts = 2 + 3 + 4 = 9; one part = £10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shares: 2×10=£20, 3×10=£30, 4×10=£40.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each gets £20, £30, £40.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "£20, £30, £40",
            commonErrors: ["Wrong calculation."],
          },
        },
      ],
    },
  ],
};
