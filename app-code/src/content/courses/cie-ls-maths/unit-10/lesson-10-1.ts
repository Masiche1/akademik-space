import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "cilm-u10-lesson-10-1",
  code: "10-1",
  title: "Stage 7 Checkpoint — Number and Operations",
  goal: "I CAN apply place value, factors, fractions and percentages at Stage 7 checkpoint standard.",
  standards: ["Cambridge Lower Secondary Checkpoint Stage 7: number"],
  stage: 7,
  vocabulary: [
    {
      term: "Place value",
      definition: "Value of a digit based on its position.",
    },
    {
      term: "Prime number",
      definition: "Number with exactly two factors: 1 and itself.",
    },
    {
      term: "Highest common factor",
      definition: "Largest number dividing two numbers exactly.",
    },
    {
      term: "Lowest common multiple",
      definition: "Smallest number divisible by two numbers.",
    },
    { term: "Percentage", definition: "Part per hundred." },
  ],
  concepts: [
    {
      id: "cilm-u10-s7-number",
      title: "Stage 7 number checkpoint",
      skill: "Apply number skills at Stage 7 standard.",
      lesson: {
        sections: [
          {
            heading: "Core skills",
            body: "Stage 7 covers place value to millions, factors and multiples, fractions, decimals, percentages and order of operations. Checkpoint questions mix these in short exam-style items.",
          },
        ],
        keyFormulas: [
          {
            name: "HCF/LCM",
            statement:
              "HCF = largest common factor; LCM = smallest common multiple",
          },
          {
            name: "Percentage",
            statement:
              "$\\% = \\frac{\\text{part}}{\\text{whole}} \\times 100$",
          },
        ],
        workedExample: {
          problem: "Find HCF and LCM of 12 and 18.",
          solution:
            "Factors of 12: 1,2,3,4,6,12; of 18: 1,2,3,6,9,18. HCF = 6. LCM = 36.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s7-n-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the HCF of 8 and 12?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "24" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HCF",
                statement: "Largest common factor.",
              },
            ],
            steps: [
              {
                reasoning: "Common factors of 8 and 12: 1,2,4; largest is 4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cilm-u10-s7-n-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{3}{4}$ as a decimal and a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conversion",
                statement: "Fraction → decimal → percentage.",
              },
            ],
            steps: [
              { reasoning: "$3 \\div 4 = 0.75$.", marks: 1, markCode: "M" },
              { reasoning: "$0.75 = 75\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.75$, $75\\%$",
          },
        },
        {
          id: "cilm-u10-s7-n-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shirt costs $40 and is reduced by 25%. Find the sale price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Percentage",
                statement: "Discount = percentage of original.",
              },
            ],
            steps: [
              {
                reasoning: "Discount $= 0.25 \\times 40 = 10$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sale price $= 40 - 10 = 30$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\$30$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$30$",
          },
        },
        {
          id: "cilm-u10-s7-n-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $3 + 4 \\times (10 - 6) \\div 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "BIDMAS",
                statement:
                  "Brackets, Indices, Division, Multiplication, Addition, Subtraction.",
              },
            ],
            steps: [
              { reasoning: "Brackets: $10 - 6 = 4$.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Division/multiplication: $4 \\times 4 \\div 2 = 8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Addition: $3 + 8 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Answer $11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cilm-u10-s7-n-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the number $4\\,563\\,208$, what is the value of the digit 6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6\\,000$" },
              { id: "b", text: "$60\\,000$" },
              { id: "c", text: "$600$" },
              { id: "d", text: "$600\\,000$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "Each digit's value depends on its position.",
              },
            ],
            steps: [
              {
                reasoning: "The 6 is in the ten-thousands place: $6 \\times 10\\,000 = 60\\,000$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $60\\,000$",
          },
        },
        {
          id: "cilm-u10-s7-n-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the highest common factor (HCF) of 24 and 36.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HCF",
                statement: "Largest number that divides both numbers exactly.",
              },
            ],
            steps: [
              {
                reasoning: "Common factors include 1, 2, 3, 4, 6 and 12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The largest is $12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cilm-u10-s7-n-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $0.64$ as a fraction in its simplest form and as a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Decimal conversion",
                statement: "Decimals, fractions and percentages are equivalent forms.",
              },
            ],
            steps: [
              {
                reasoning: "$0.64 = \\frac{64}{100}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{64}{100} = \\frac{16}{25}$ after dividing by 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$0.64 = 64\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{16}{25}$, $64\\%$",
          },
        },
        {
          id: "cilm-u10-s7-n-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Evaluate $2 + 3 \\times (8 - 5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "29" },
              { id: "c", text: "15" },
              { id: "d", text: "17" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "BIDMAS",
                statement: "Brackets and multiplication before addition.",
              },
            ],
            steps: [
              {
                reasoning: "$2 + 3 \\times 3 = 2 + 9 = 11$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 11",
          },
        },
        {
          id: "cilm-u10-s7-n-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $35\\%$ of $80$?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 28 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage of",
                statement: "Convert percentage to decimal and multiply.",
              },
            ],
            steps: [
              { reasoning: "$0.35 \\times 80 = 28$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "cilm-u10-s7-n-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction is equivalent to $0.375$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{8}$" },
              { id: "b", text: "$\\frac{3}{5}$" },
              { id: "c", text: "$\\frac{7}{8}$" },
              { id: "d", text: "$\\frac{5}{8}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Equivalent fractions",
                statement: "A terminating decimal can be written over a power of 10.",
              },
            ],
            steps: [
              {
                reasoning: "$0.375 = \\frac{375}{1000} = \\frac{3}{8}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{3}{8}$",
          },
        },
        {
          id: "cilm-u10-s7-n-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bicycle costs $\\$120$. It is reduced by $15\\%$. Find the sale price.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 102 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Percentage change",
                statement: "Discount = percentage of original price.",
              },
            ],
            steps: [
              {
                reasoning: "Discount $= 0.15 \\times 120 = \\$18$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sale price $= 120 - 18 = 102$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The sale price is $\\$102$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$102$",
          },
        },
        {
          id: "cilm-u10-s7-n-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number is prime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "33" },
              { id: "b", text: "35" },
              { id: "c", text: "27" },
              { id: "d", text: "29" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prime number",
                statement: "A number with exactly two factors.",
              },
            ],
            steps: [
              {
                reasoning: "29 has only factors 1 and 29; the others have more.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 29",
          },
        },
        {
          id: "cilm-u10-s7-n-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $10\\,000$ more than $478\\,362$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$578\\,362$" },
              { id: "b", text: "$488\\,362$" },
              { id: "c", text: "$479\\,362$" },
              { id: "d", text: "$487\\,362$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Place value",
                statement: "Add 1 to the ten-thousands digit.",
              },
            ],
            steps: [
              {
                reasoning: "$478\\,362 + 10\\,000 = 488\\,362$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $488\\,362$",
          },
        },
        {
          id: "cilm-u10-s7-n-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $48 \\div (6 - 2) + 3 \\times 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "BIDMAS",
                statement: "Brackets, division and multiplication before addition.",
              },
            ],
            steps: [
              {
                reasoning: "Brackets and multiplication: $48 \\div 4 + 6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$12 + 6 = 18$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
          },
        },
        {
          id: "cilm-u10-s7-n-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $3\\,057\\,214$, what is the value of the digit $5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50\\,000$" },
              { id: "b", text: "$5\\,000$" },
              { id: "c", text: "$500\\,000$" },
              { id: "d", text: "$500$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "The 5 is in the ten-thousands place.",
              },
            ],
            steps: [
              {
                reasoning: "The 5 represents $5 \\times 10\\,000 = 50\\,000$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$50\\,000$",
          },
        },
        {
          id: "cilm-u10-s7-n-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the lowest common multiple (LCM) of $18$ and $24$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LCM",
                statement: "Smallest number divisible by both numbers.",
              },
            ],
            steps: [
              {
                reasoning: "Multiples of 24 include $24,48,72$; $72$ is divisible by 18.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The LCM is $72$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "72",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s7-fractions",
      title: "Stage 7 fractions and ratios",
      skill:
        "Simplify fractions, add fractions and solve simple ratio problems.",
      lesson: {
        sections: [
          {
            heading: "Fractions",
            body: "Equivalent fractions, simplifying by common factors, adding with common denominators. Ratios compare quantities — simplify like fractions.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction addition",
            statement: "$\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}$",
          },
          { name: "Ratio", statement: "Simplify by dividing by common factor" },
        ],
        workedExample: {
          problem:
            "Simplify $\\frac{12}{18}$ and add $\\frac{1}{4} + \\frac{1}{6}$.",
          solution:
            "$\\frac{12}{18} = \\frac{2}{3}$. $\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s7-f-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\frac{15}{25}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{5}$" },
              { id: "b", text: "$\\frac{3}{15}$" },
              { id: "c", text: "$\\frac{5}{3}$" },
              { id: "d", text: "$\\frac{3}{5}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simplify",
                statement: "Divide numerator and denominator by HCF.",
              },
            ],
            steps: [
              {
                reasoning: "HCF of 15 and 25 is 5: $15/5 \\div 25/5 = 3/5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{5}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\frac{2}{3} + \\frac{1}{6}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Common denominator",
                statement: "Convert to same denominator before adding.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{5}{6}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Divide $60 in the ratio 2:3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio",
                statement: "Total parts = 5; each part = $60/5 = 12$.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts $= 2 + 3 = 5$; one part $= 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shares: $2 \\times 12 = 24$ and $3 \\times 12 = 36$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\$24$ and $\\$36$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$24$, $\\$36$",
          },
        },
        {
          id: "cilm-u10-s7-f-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe uses flour and sugar in ratio 5:2. For 350 g flour, how much sugar?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio scaling",
                statement: "Scale ratio parts proportionally.",
              },
            ],
            steps: [
              {
                reasoning: "5 parts = 350 g → 1 part = 70 g.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sugar = 2 parts = 140 g.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Check: 350:140 = 5:2.", marks: 1, markCode: "B" },
              { reasoning: "$140\\ g$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$140\\ g$",
          },
        },
        {
          id: "cilm-u10-s7-f-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\frac{20}{45}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{9}$" },
              { id: "b", text: "$\\frac{5}{9}$" },
              { id: "c", text: "$\\frac{4}{5}$" },
              { id: "d", text: "$\\frac{2}{5}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simplify",
                statement: "Divide numerator and denominator by HCF 5.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{20}{45}=\\frac{4}{9}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{4}{9}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Share $\\$90$ in the ratio $2:3$ and find the smaller share.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio",
                statement: "Total parts $=5$; each part $=18$.",
              },
            ],
            steps: [
              {
                reasoning: "One part is $90\\div5=18$; smaller share is $2\\times18=36$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The smaller share is $\\$36$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$36$",
          },
        },
        {
          id: "cilm-u10-s7-f-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to $\\frac{6}{15}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{5}{6}$" },
              { id: "c", text: "$\\frac{2}{5}$" },
              { id: "d", text: "$\\frac{3}{5}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Equivalent fractions",
                statement: "Divide numerator and denominator by 3.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{6}{15}=\\frac{2}{5}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{2}{5}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write $\\frac{5}{8}$ as a decimal.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.625 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fraction to decimal",
                statement: "Divide numerator by denominator.",
              },
            ],
            steps: [
              { reasoning: "$5\\div8=0.625$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.625",
          },
        },
        {
          id: "cilm-u10-s7-f-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $\\frac{1}{3}+\\frac{1}{6}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{9}$" },
              { id: "b", text: "$\\frac{2}{3}$" },
              { id: "c", text: "$\\frac{2}{9}$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Common denominator",
                statement: "$\\frac{2}{6}+\\frac{1}{6}=\\frac{3}{6}=\\frac12$.",
              },
            ],
            steps: [
              {
                reasoning: "Use denominator 6 and simplify.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $\\frac{3}{4}-\\frac{1}{6}$ and give your answer as a decimal correct to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.583, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fraction subtraction",
                statement: "Common denominator 12 gives $\\frac{9}{12}-\\frac{2}{12}=\\frac{7}{12}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{7}{12}=0.58333\\ldots\\approx0.583$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The decimal is $0.583$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.583",
          },
        },
        {
          id: "cilm-u10-s7-f-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the ratio $14:21$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7:3$" },
              { id: "b", text: "$2:3$" },
              { id: "c", text: "$7:10$" },
              { id: "d", text: "$3:2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simplify ratio",
                statement: "Divide both parts by HCF 7.",
              },
            ],
            steps: [
              {
                reasoning: "$14:21=2:3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2:3$",
          },
        },
        {
          id: "cilm-u10-s7-f-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $\\frac{5}{6}-\\frac{1}{4}$ and give your answer in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fraction subtraction",
                statement: "Use common denominator 12.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{10}{12}-\\frac{3}{12}=\\frac{7}{12}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{7}{12}$ is already simplest.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer is $\\frac{7}{12}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{12}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\frac{3}{8}$ of $96$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fraction of quantity",
                statement: "Divide by denominator then multiply by numerator.",
              },
            ],
            steps: [
              {
                reasoning: "$96\\div8=12$, then $12\\times3=36$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The result is $36$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36",
          },
        },
        {
          id: "cilm-u10-s7-f-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 12 boys and 18 girls in a class. What is the ratio of boys to girls in simplest form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3:2$" },
              { id: "b", text: "$2:3$" },
              { id: "c", text: "$12:18$" },
              { id: "d", text: "$1:2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio",
                statement: "$12:18$ simplifies by dividing by 6.",
              },
            ],
            steps: [
              {
                reasoning: "$12:18=2:3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2:3$",
          },
        },
        {
          id: "cilm-u10-s7-f-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A fruit salad uses apples, pears and grapes in the ratio $3:2:5$. Find the mass of pears in a $200$ g salad, then find the mass of apples in a $300$ g salad.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio scaling",
                statement: "Share each total by the same ratio parts.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts $=10$; for $200$ g one part is $20$ g, so pears are $2\\times20=40$ g.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "For $300$ g one part is $30$ g.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apples are $3\\times30=90$ g.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pears $40$ g; apples $90$ g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pears $40$ g; apples $90$ g",
            commonErrors: ["Using different total parts for the two masses."],
          },
        },
        {
          id: "cilm-u10-s7-f-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to $45\\%$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{5}$" },
              { id: "b", text: "$\\frac{9}{20}$" },
              { id: "c", text: "$\\frac{9}{10}$" },
              { id: "d", text: "$\\frac{5}{9}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage to fraction",
                statement: "$45\\%=\\frac{45}{100}=\\frac{9}{20}$.",
              },
            ],
            steps: [
              {
                reasoning: "Simplify $\\frac{45}{100}$ by dividing by 5.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{9}{20}$",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s7-mx",
      title: "Stage 7 mixed checkpoint",
      skill: "Apply number, fraction, ratio and percentage skills together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine place value, fractions, ratios and percentages in multi-step problems. Read carefully and show each step.",
          },
        ],
        keyFormulas: [
          {
            name: "Percentage change",
            statement:
              "$\\text{change} = \\text{rate} \\times \\text{original}$",
          },
          {
            name: "Ratio sharing",
            statement:
              "Divide total by sum of parts, then multiply by each part",
          },
        ],
        workedExample: {
          problem: "Increase $50 by 20% then decrease the result by 10%.",
          solution: "$50 \\times 1.2 = 60$; then $60 \\times 0.9 = 54$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s7-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $15\\%$ of $200$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30" },
              { id: "b", text: "25" },
              { id: "c", text: "20" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage of",
                statement: "Multiply by percentage as decimal.",
              },
            ],
            steps: [
              {
                reasoning: "$0.15 \\times 200 = 30$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "cilm-u10-s7-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $\\frac{2}{3} \\times 48$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fraction of quantity",
                statement: "Divide by denominator, multiply by numerator.",
              },
            ],
            steps: [
              { reasoning: "$48 \\div 3 = 16$.", marks: 1, markCode: "M" },
              { reasoning: "$16 \\times 2 = 32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "cilm-u10-s7-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Red and blue pens are in the ratio $4:5$. There are 36 pens in total. How many are blue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio sharing",
                statement: "Find value of one part, then multiply.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts $= 4 + 5 = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One part $= 36 \\div 9 = 4$ pens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Blue pens $= 5 \\times 4 = 20$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cilm-u10-s7-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A jacket costs $\\$60$. It is reduced by $20\\%$, then the sale price is increased by $10\\%$. Find the final price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Successive percentages",
                statement: "Apply each percentage change to the new price.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discount $= 0.20 \\times 60 = 12$, so sale price $= 48$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increase $= 0.10 \\times 48 = 4.80$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final price $= 48 + 4.80 = 52.80$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\$52.80$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$52.80$",
          },
        },
        {
          id: "cilm-u10-s7-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which decimal is equivalent to $12\\%$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$0.012$" },
              { id: "c", text: "$0.12$" },
              { id: "d", text: "$1.2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage conversion",
                statement: "Divide by 100.",
              },
            ],
            steps: [
              {
                reasoning: "$12\\div100=0.12$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.12$",
          },
        },
        {
          id: "cilm-u10-s7-mx-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the highest common factor of $30$ and $42$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HCF",
                statement: "Largest common factor of both numbers.",
              },
            ],
            steps: [
              {
                reasoning: "Common factors include 1, 2, 3 and 6; the largest is 6.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "HCF $=6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cilm-u10-s7-mx-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $20-6\\times3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "18" },
              { id: "c", text: "-16" },
              { id: "d", text: "42" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "BIDMAS",
                statement: "Multiplication before subtraction.",
              },
            ],
            steps: [
              {
                reasoning: "$20-18=2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilm-u10-s7-mx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\frac{5}{8}$ of $120$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fraction of quantity",
                statement: "Divide by 8 then multiply by 5.",
              },
            ],
            steps: [
              {
                reasoning: "$120\\div8=15$, then $15\\times5=75$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "The result is $75$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75",
          },
        },
        {
          id: "cilm-u10-s7-mx-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ratio is equivalent to $8:12$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4:6$" },
              { id: "b", text: "$8:3$" },
              { id: "c", text: "$2:3$" },
              { id: "d", text: "$3:4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Equivalent ratio",
                statement: "Divide both parts by 4.",
              },
            ],
            steps: [
              {
                reasoning: "$8:12=2:3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2:3$",
          },
        },
        {
          id: "cilm-u10-s7-mx-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Increase $60$ by $15\\%$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 69 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage increase",
                statement: "Multiply by $1.15$.",
              },
            ],
            steps: [
              {
                reasoning: "$60\\times1.15=69$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "New value is $69$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "69",
          },
        },
        {
          id: "cilm-u10-s7-mx-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is better value: $\\pounds6$ for $12$ pencils or $\\pounds4.80$ for $8$ pencils?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal" },
              { id: "b", text: "Second pack" },
              { id: "c", text: "Cannot compare" },
              { id: "d", text: "First pack" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Unit price",
                statement: "Compare cost per pencil.",
              },
            ],
            steps: [
              {
                reasoning: "Unit prices are $6\\div12=0.50$ and $4.80\\div8=0.60$; the first is cheaper.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** First pack",
          },
        },
        {
          id: "cilm-u10-s7-mx-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A price increases by $20\\%$ and then decreases by $20\\%$. Starting from $50$, find the final price and explain why it is not $50$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Successive percentages",
                statement: "$1.2\\times0.8=0.96$, a $4\\%$ decrease.",
              },
            ],
            steps: [
              {
                reasoning: "After increase: $50\\times1.2=60$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "After decrease: $60\\times0.8=48$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final price is $48$, not $50$, because percentages apply to different bases.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Final price $48$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$",
          },
        },
        {
          id: "cilm-u10-s7-mx-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $20\\%$ of $240$ plus $\\frac{3}{4}$ of $80$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 108 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mixed calculation",
                statement: "Calculate each part before adding.",
              },
            ],
            steps: [
              {
                reasoning: "$0.20\\times240=48$ and $\\frac34\\times80=60$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total is $48+60=108$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer is $108$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "108",
          },
        },
        {
          id: "cilm-u10-s7-mx-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which calculation follows BIDMAS for $3+4\\times(9-5)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3+4\\times4$" },
              { id: "b", text: "$(3+4)\\times4$" },
              { id: "c", text: "$(3+4\\times9)-5$" },
              { id: "d", text: "$3+(4\\times9)-5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "BIDMAS",
                statement: "Brackets first, then multiplication, then addition.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluate $9-5=4$, then multiply by 4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $3+4\\times4$",
          },
        },
        {
          id: "cilm-u10-s7-mx-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A prize of $\\$240$ is shared between Ana, Ben and Cy in the ratio $1:2:3$. The total is then reduced by $10\\%$ for tax. Find the amount Ana receives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ratio and percentage",
                statement: "Share by ratio, then apply percentage reduction.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts $=6$, so one part is $240\\div6=40$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ana's share is $1\\times40=40$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "After $10\\%$ reduction Ana receives $40\\times0.9=36$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The $10\\%$ reduction applies proportionally, so Ana keeps $90\\%$ of her share.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ana receives $\\$36$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$36$",
            commonErrors: ["Applying the $10\\%$ reduction twice or using the wrong ratio part."],
          },
        },
        {
          id: "cilm-u10-s7-mx-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $35\\%$ of $140$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "45" },
              { id: "b", text: "49" },
              { id: "c", text: "51" },
              { id: "d", text: "42" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage of",
                statement: "$0.35\\times140=49$.",
              },
            ],
            steps: [
              {
                reasoning: "$0.35\\times140=49$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "49",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u10-stage7-number-notes",
      title: "Stage 7 checkpoint number — revision notes",
      summary:
        "Place value, HCF/LCM, fractions, decimals, percentages, BIDMAS.",
      sections: [
        {
          heading: "Key skills",
          body: "HCF/LCM via factor lists; fractions need common denominators; percentages = parts per hundred; BIDMAS for order of operations.",
        },
        {
          heading: "Exam tips",
          body: "Show working for multi-step problems; check answers are in simplest form.",
        },
      ],
    },
  ],
};
