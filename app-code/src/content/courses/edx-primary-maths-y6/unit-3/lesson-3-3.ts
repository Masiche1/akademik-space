import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "edpm6-u3-lesson-3-3",
  code: "3-3",
  title: "Measurement and Money Problems",
  goal: "I CAN solve problems involving speed, time, money and capacity.",
  standards: ["Year 6 Measurement"],
  vocabulary: [
    {
      term: "Speed",
      definition: "Distance travelled per unit time: km/h, m/s.",
    },
    {
      term: "Distance",
      definition: "Length of path travelled — speed × time.",
    },
    {
      term: "Unit rate",
      definition: "Cost or quantity per single unit, e.g. £/kg.",
    },
    {
      term: "Conversion",
      definition: "Changing between units: 1 km = 1000 m, 1 h = 60 min.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u3-speed",
      title: "Speed, distance and time",
      skill:
        "Solve problems using speed = distance ÷ time and its rearrangements.",
      lesson: {
        sections: [
          {
            heading: "The formula triangle",
            body: "**Speed = distance ÷ time**; **Distance = speed × time**; **Time = distance ÷ speed**. A car travels 150 km in 2 hours → speed = 150 ÷ 2 = 75 km/h. Always match units.",
          },
          {
            heading: "Conversions",
            body: "Convert before calculating: 90 km/h = 1.5 km/min? Or keep in hours. 30 m/s → km/h: ×3.6 = 108 km/h? At primary level, use consistent units: distance in km, time in hours → km/h.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "speed = distance ÷ time" },
          { name: "Distance", statement: "distance = speed × time" },
          { name: "Time", statement: "time = distance ÷ speed" },
        ],
        workedExample: {
          problem: "A train travels 240 km in 3 hours. What is its speed?",
          solution: "240 ÷ 3 = 80 km/h.",
        },
      },
      questions: [
        {
          id: "edpm6-u3-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels 100 km in 2 hours. What is its speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50 km/h" },
              { id: "b", text: "200 km/h" },
              { id: "c", text: "98 km/h" },
              { id: "d", text: "102 km/h" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Speed",
                statement: "100 ÷ 2 = 50 km/h.",
              },
            ],
            steps: [{ reasoning: "Distance ÷ time.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 50 km/h",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "edpm6-u3-sp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cyclist rides at 15 km/h for 2 hours. How far does she travel?",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance", answer: 30, tolerance: 0, unit: "km" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance",
                statement: "15 × 2 = 30 km.",
              },
            ],
            steps: [
              {
                reasoning: "Distance = speed × time.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "15 × 2 = 30.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30 km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 km",
            commonErrors: ["Dividing 15 by 2 instead of multiplying."],
          },
        },
        {
          id: "edpm6-u3-sp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A train travels 180 km at 60 km/h. How long does it take?",
          response: {
            type: "numeric",
            parts: [{ label: "Time", answer: 3, tolerance: 0, unit: "hours" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Time",
                statement: "180 ÷ 60 = 3 hours.",
              },
            ],
            steps: [
              {
                reasoning: "Time = distance ÷ speed.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "180 ÷ 60 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 hours.", marks: 1, markCode: "A" },
              { reasoning: "Unit included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 hours",
            commonErrors: ["Multiplying 180 × 60 instead of dividing."],
          },
        },
        {
          id: "edpm6-u3-sp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A delivery van travels at 50 km/h for 1.5 hours, then at 40 km/h for 2 hours.",
          parts: [
            {
              label: "a",
              prompt: "How far does it travel in the first part?",
              marks: 3,
            },
            { label: "b", prompt: "How far in the second part?", marks: 3 },
            {
              label: "c",
              prompt: "What is the average speed for the whole journey?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-stage speed",
                statement:
                  "50×1.5=75; 40×2=80; total 155km; time 3.5h; avg=155/3.5≈44.3 km/h.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "50 × 1.5 = 75 km.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 75 km.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "40 × 2 = 80 km.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 80 km.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Total distance = 75 + 80 = 155 km.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Total time = 1.5 + 2 = 3.5 hours.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Avg speed = 155 ÷ 3.5 ≈ 44.3 km/h.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75 km; 80 km; ≈44.3 km/h",
            commonErrors: [
              "Averaging speeds (45) instead of total distance ÷ total time.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm6-u3-money",
      title: "Money and unit pricing",
      skill:
        "Solve problems with best-buy comparisons, unit rates and multi-step money calculations.",
      lesson: {
        sections: [
          {
            heading: "Unit rates",
            body: "Compare prices by cost per unit: £3.60 for 6 apples = £0.60 each; £5 for 10 = £0.50 each — second is better value. Find unit price first: total ÷ quantity.",
          },
          {
            heading: "Multi-step money",
            body: "Combine discount, tax-like additions and change: '20% off £50, then 5% service charge on sale price' → £40, then +£2 = £42. Track each step carefully.",
          },
        ],
        keyFormulas: [
          { name: "Unit price", statement: "total cost ÷ quantity" },
          { name: "Best buy", statement: "Lowest unit price wins" },
        ],
        workedExample: {
          problem: "Which is better value: 500g for £1.20 or 750g for £1.80?",
          solution:
            "£1.20÷500 = £0.0024/g; £1.80÷750 = £0.0024/g — same value.",
        },
      },
      questions: [
        {
          id: "edpm6-u3-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit price of 6 pens costing £3.60?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£0.50" },
              { id: "b", text: "£0.60" },
              { id: "c", text: "£0.36" },
              { id: "d", text: "£6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unit price",
                statement: "3.60 ÷ 6 = £0.60.",
              },
            ],
            steps: [
              {
                reasoning: "Divide total by quantity.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** £0.60",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "edpm6-u3-mo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is better value: 4 bottles for £2.40 or 6 bottles for £3.30?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Best buy",
                statement: "£0.60 vs £0.55 per bottle — second is better.",
              },
            ],
            steps: [
              { reasoning: "£2.40 ÷ 4 = £0.60 each.", marks: 1, markCode: "M" },
              { reasoning: "£3.30 ÷ 6 = £0.55 each.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: 6 bottles better value (lower unit price).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6 bottles",
            commonErrors: [
              "Choosing cheaper total without comparing unit prices.",
            ],
          },
        },
        {
          id: "edpm6-u3-mo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A £40 game is reduced by 15%. What is the sale price?",
          response: {
            type: "numeric",
            parts: [
              { label: "Sale price", answer: 34, tolerance: 0, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage discount",
                statement: "15% of £40 = £6; £40 − £6 = £34.",
              },
            ],
            steps: [
              {
                reasoning: "10% of £40 = £4; 5% = £2; 15% = £6.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "£40 − £6 = £34.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £34.", marks: 1, markCode: "A" },
              { reasoning: "Unit included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£34",
            commonErrors: [
              "Answering £46 — adding discount instead of subtracting.",
            ],
          },
        },
        {
          id: "edpm6-u3-mo-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You buy 3 kg of rice at £1.80/kg and 2 litres of oil at £2.50/litre. You have a £10 note.",
          parts: [
            { label: "a", prompt: "What is the total cost?", marks: 4 },
            { label: "b", prompt: "How much change do you get?", marks: 3 },
            {
              label: "c",
              prompt: "What is the cost per kilogram of rice?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unit pricing",
                statement:
                  "Rice £5.40 + oil £5 = £10.40; change −£0.40 (short £0.40); rice/kg £1.80.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rice: 3 × £1.80 = £5.40.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Oil: 2 × £2.50 = £5.00; total £10.40.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £10.40.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "£10.00 − £10.40 = −£0.40.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Not enough — short by 40p (or change is negative).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Recognised insufficient funds.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Cost per kg = £1.80 (given unit price).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Or £5.40 ÷ 3 = £1.80.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: £1.80/kg.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£10.40; short by £0.40; £1.80/kg",
            commonErrors: [
              "For part (b): £10 is not enough — total exceeds it.",
            ],
          },
        },
      ],
    },
  ],
};
