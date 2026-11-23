import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpm5-u4-lesson-4-2",
  code: "4-2",
  title: "Fractions, Decimals and Percentages",
  goal: "I CAN convert between fractions, decimals and percentages and apply them.",
  standards: ["Year 5 Fractions and Percentages"],
  vocabulary: [
    {
      term: "Equivalent fractions",
      definition: "Fractions with the same value.",
    },
    { term: "Percentage", definition: "A number out of 100." },
    { term: "Decimal", definition: "A number written with a decimal point." },
    {
      term: "Percentage change",
      definition: "Increase or decrease expressed as a percentage.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u4-convert",
      title: "Converting Between Forms",
      skill: "Convert fractions to decimals and percentages.",
      lesson: {
        sections: [
          {
            heading: "Key conversions",
            body: "1/2 = 0.5 = 50%; 1/4 = 0.25 = 25%; 3/4 = 0.75 = 75%; 1/5 = 0.2 = 20%; 1/10 = 0.1 = 10%; 1/8 = 0.125 = 12.5%. To convert a fraction to a percentage, divide numerator by denominator then multiply by 100. 3/5 = 0.6 = 60%.",
          },
          {
            heading: "Percentage problems",
            body: "To find 20% of a number, find 10% (divide by 10) then double. 20% of 80 = 16. To find 5%, divide by 20. Percentage increase: new - old as a percentage of old. A price rises from £50 to £60: increase = £10, percentage increase = 10/50 × 100 = 20%.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction to %",
            statement: "(numerator ÷ denominator) × 100",
          },
          { name: "% change", statement: "(change ÷ original) × 100" },
        ],
        workedExample: {
          problem: "Write 7/20 as a percentage",
          solution: "7 ÷ 20 = 0.35 = 35%.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-cv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 1/4 as a percentage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20%" },
              { id: "b", text: "25%" },
              { id: "c", text: "40%" },
              { id: "d", text: "15%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conversions",
                statement: "1/4 = 25%.",
              },
            ],
            steps: [
              { reasoning: "1/4 = 0.25 = 25%.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 25%",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm5-u4-cv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 30% of 150?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30" },
              { id: "b", text: "45" },
              { id: "c", text: "60" },
              { id: "d", text: "35" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage of",
                statement: "10% = 15, 30% = 45.",
              },
            ],
            steps: [
              {
                reasoning: "10% of 150 = 15; 30% = 3 × 15 = 45.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 45",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm5-u4-cv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A price increases from £40 to £50. What is the percentage increase?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "% change",
                statement: "(10 ÷ 40) × 100 = 25%.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = £50 - £40 = £10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage = (10 ÷ 40) × 100.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Wrong base."],
          },
        },
        {
          id: "edpm5-u4-cv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write 13/40 as a percentage, then find 15% of £200.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conversions",
                statement: "13/40 = 32.5%; 15% of 200 = £30.",
              },
            ],
            steps: [
              {
                reasoning: "13 ÷ 40 = 0.325 = 32.5%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "10% of £200 = £20; 5% = £10.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "15% = £20 + £10 = £30.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "32.5% and £30",
            commonErrors: ["Wrong calculation."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-fdp",
      title: "Fraction Operations",
      skill: "Add, subtract, multiply and divide fractions and mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "Adding and subtracting fractions",
            body: "Same denominator: add/subtract numerators (3/8 + 2/8 = 5/8). Different denominators: find equivalent fractions with a common denominator first. Mixed numbers: convert to improper fractions or handle whole parts and fractions separately.",
          },
          {
            heading: "Multiplying and dividing",
            body: "Multiply: multiply numerators and denominators (2/3 × 3/4 = 6/12 = 1/2). Divide: flip the second fraction and multiply (2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3). Always simplify answers.",
          },
        ],
        keyFormulas: [
          { name: "Fraction division", statement: "a/b ÷ c/d = a/b × d/c" },
          {
            name: "Mixed numbers",
            statement: "Convert to improper fractions for calculation",
          },
        ],
        workedExample: {
          problem: "Calculate 2/5 + 1/4",
          solution: "Common denominator 20: 8/20 + 5/20 = 13/20.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-fd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3/7 + 2/7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5/14" },
              { id: "b", text: "5/7" },
              { id: "c", text: "1/7" },
              { id: "d", text: "6/7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction addition",
                statement: "Same denominator: add numerators.",
              },
            ],
            steps: [{ reasoning: "3/7 + 2/7 = 5/7.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 5/7",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm5-u4-fd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 3/4 × 2/5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6/20" },
              { id: "b", text: "5/9" },
              { id: "c", text: "6/9" },
              { id: "d", text: "3/10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction multiplication",
                statement: "3 × 2 = 6; 4 × 5 = 20.",
              },
            ],
            steps: [
              {
                reasoning: "3/4 × 2/5 = 6/20 (= 3/10).",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 6/20 (= 3/10)",
            commonErrors: ["Wrong multiplication."],
          },
        },
        {
          id: "edpm5-u4-fd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 1/2 + 1/3",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction addition",
                statement: "Common denominator 6: 3/6 + 2/6 = 5/6.",
              },
            ],
            steps: [
              { reasoning: "Common denominator = 6.", marks: 1, markCode: "M" },
              { reasoning: "1/2 = 3/6; 1/3 = 2/6.", marks: 1, markCode: "M" },
              { reasoning: "3/6 + 2/6 = 5/6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/6",
            commonErrors: ["Wrong denominator."],
          },
        },
        {
          id: "edpm5-u4-fd-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 2/3 ÷ 1/6",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction division",
                statement: "2/3 × 6/1 = 12/3 = 4.",
              },
            ],
            steps: [
              {
                reasoning: "Flip and multiply: 2/3 × 6/1.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "2 × 6 = 12; 3 × 1 = 3.", marks: 1, markCode: "M" },
              { reasoning: "12/3 = 4.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Wrong method."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-perimeter",
      title: "Perimeter, Area and Volume",
      skill: "Calculate perimeter, area and volume of shapes.",
      lesson: {
        sections: [
          {
            heading: "Perimeter and area",
            body: "Perimeter = distance around. Rectangle: P = 2(l + w), A = l × w. Triangle: A = ½ × base × height. Compound shapes: break into rectangles/triangles and add. Area always uses square units (cm², m²).",
          },
          {
            heading: "Volume",
            body: "Volume = space inside, in cubic units (cm³, m³). Rectangular prism: V = l × w × h. Year 5 may also meet volume by counting cubes. 1 cm³ = 1 ml; 1 litre = 1000 cm³ = 1000 ml.",
          },
        ],
        keyFormulas: [
          { name: "Triangle area", statement: "A = ½bh" },
          { name: "Prism volume", statement: "V = lwh" },
        ],
        workedExample: {
          problem:
            "Find the area of a triangle with base 10 cm and height 6 cm",
          solution: "A = ½ × 10 × 6 = 30 cm².",
        },
      },
      questions: [
        {
          id: "edpm5-u4-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a rectangle 8 cm by 5 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13 cm²" },
              { id: "b", text: "40 cm²" },
              { id: "c", text: "26 cm²" },
              { id: "d", text: "80 cm²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Area", statement: "8 × 5 = 40 cm²." },
            ],
            steps: [{ reasoning: "8 × 5 = 40.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 40 cm²",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm5-u4-pa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the volume of a box 4 cm × 3 cm × 5 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 cm³" },
              { id: "b", text: "60 cm³" },
              { id: "c", text: "47 cm³" },
              { id: "d", text: "120 cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Volume",
                statement: "4 × 3 × 5 = 60 cm³.",
              },
            ],
            steps: [
              {
                reasoning: "4 × 3 = 12; 12 × 5 = 60.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 60 cm³",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm5-u4-pa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area of a triangle with base 12 cm and height 7 cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Triangle area",
                statement: "½ × 12 × 7 = 42 cm².",
              },
            ],
            steps: [
              { reasoning: "½ × 12 = 6.", marks: 1, markCode: "M" },
              { reasoning: "6 × 7 = 42.", marks: 1, markCode: "M" },
              { reasoning: "Area = 42 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "42 cm²",
            commonErrors: ["Forgot ½."],
          },
        },
        {
          id: "edpm5-u4-pa-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An L-shape is made of two rectangles: 10 cm × 4 cm and 6 cm × 3 cm. Find the total area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Compound area",
                statement: "40 + 18 = 58 cm².",
              },
            ],
            steps: [
              {
                reasoning: "Rectangle 1: 10 × 4 = 40 cm².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rectangle 2: 6 × 3 = 18 cm².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total: 40 + 18 = 58 cm².",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "58 cm²",
            commonErrors: ["Wrong decomposition."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-problem",
      title: "Problem Solving",
      skill: "Solve multi-step problems across Year 5 topics.",
      lesson: {
        sections: [
          {
            heading: "Multi-step strategy",
            body: "Read the question twice. Identify given information and what's asked. Plan steps before calculating. Use estimation to check answers. Look for hidden information: 'increased by 25%' means add 25% of original; 'remaining' means subtract.",
          },
          {
            heading: "Common problems",
            body: "Percentage problems: find the percentage then add/subtract. Ratio problems: find one part then scale. Algebra problems: write an equation first. Always check units and that the answer is sensible.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A jacket costs £80. It is reduced by 25%. What is the sale price?",
          solution: "25% of £80 = £20. Sale price = £80 - £20 = £60.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 0.75 as a fraction in simplest form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/4" },
              { id: "b", text: "75/100" },
              { id: "c", text: "7/5" },
              { id: "d", text: "1/4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decimal to fraction",
                statement: "0.75 = 75/100 = 3/4.",
              },
            ],
            steps: [{ reasoning: "0.75 = 3/4.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 3/4",
            commonErrors: ["Not simplified."],
          },
        },
        {
          id: "edpm5-u4-ps-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shop sells 3 pens for £2.40. How much do 7 pens cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£4.80" },
              { id: "b", text: "£5.20" },
              { id: "c", text: "£5.60" },
              { id: "d", text: "£6.00" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unit price",
                statement: "80p each; 7 × 80p = £5.60.",
              },
            ],
            steps: [
              {
                reasoning: "£2.40 ÷ 3 = £0.80; 7 × £0.80 = £5.60.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** £5.60",
            commonErrors: ["Wrong unit price."],
          },
        },
        {
          id: "edpm5-u4-ps-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class has 30 students. 40% are boys. How many girls are there?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentages",
                statement: "Boys = 12; girls = 18.",
              },
            ],
            steps: [
              { reasoning: "40% of 30 = 12 boys.", marks: 1, markCode: "M" },
              { reasoning: "Girls = 30 - 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 18 girls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
            commonErrors: ["Wrong percentage."],
          },
        },
        {
          id: "edpm5-u4-ps-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A tank holds 240 litres. It is 3/8 full. How many litres are in it? Then how many more litres to fill it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fractions of quantity",
                statement: "3/8 of 240 = 90; remaining = 150.",
              },
            ],
            steps: [
              {
                reasoning: "1/8 of 240 = 30; 3/8 = 90 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "To fill: 240 - 90 = 150 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answers: 90 litres and 150 litres.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "90 and 150 litres",
            commonErrors: ["Wrong fraction."],
          },
        },
      ],
    },
  ],
};
