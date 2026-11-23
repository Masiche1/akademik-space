import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpm3-u4-lesson-4-3",
  code: "4-3",
  title: "Measurement and Problem Solving",
  goal: "I CAN solve problems involving time, money and measurement.",
  standards: ["Year 3 Measurement and problem solving"],
  vocabulary: [
    { term: "Capacity", definition: "How much a container can hold." },
    { term: "Mass", definition: "How heavy something is." },
    {
      term: "Perimeter",
      definition: "The distance around the edge of a shape.",
    },
    { term: "Duration", definition: "How long something takes." },
  ],
  concepts: [
    {
      id: "edpm3-u4-measure",
      title: "Measurement Problems",
      skill: "Solve problems with length, mass and capacity.",
      lesson: {
        sections: [
          {
            heading: "Units",
            body: "Length: mm, cm, m, km. Mass: g, kg. Capacity: ml, l. Convert: 1 cm = 10 mm; 1 m = 100 cm; 1 kg = 1000 g; 1 l = 1000 ml. To compare, convert to the same unit first.",
          },
          {
            heading: "Perimeter problems",
            body: "Perimeter is the distance around a shape. For a rectangle: perimeter = 2 × (length + width). For irregular shapes, add all the side lengths. A square with side 5 cm has perimeter 20 cm.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle perimeter", statement: "2 × (length + width)" },
          {
            name: "Conversions",
            statement: "1 m = 100 cm; 1 kg = 1000 g; 1 l = 1000 ml",
          },
        ],
        workedExample: {
          problem: "Find the perimeter of a rectangle 8 cm by 4 cm.",
          solution: "2 × (8 + 4) = 24 cm.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a square with side 6 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 cm" },
              { id: "b", text: "18 cm" },
              { id: "c", text: "24 cm" },
              { id: "d", text: "36 cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Perimeter", statement: "4 × 6 = 24 cm." },
            ],
            steps: [
              { reasoning: "4 sides × 6 = 24.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 24 cm",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm3-u4-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many millilitres are in 2 litres?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "200 ml" },
              { id: "b", text: "1000 ml" },
              { id: "c", text: "2000 ml" },
              { id: "d", text: "5000 ml" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conversions",
                statement: "1 l = 1000 ml.",
              },
            ],
            steps: [{ reasoning: "2 l = 2000 ml.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 2000 ml",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm3-u4-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle is 15 cm long and 8 cm wide. What is its perimeter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter",
                statement: "2×(15+8) = 46 cm.",
              },
            ],
            steps: [
              { reasoning: "15 + 8 = 23.", marks: 1, markCode: "M" },
              { reasoning: "23 × 2 = 46 cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 46 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "46 cm",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm3-u4-ms-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which is heavier: 2.5 kg or 2400 g? Show the conversion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Converting units",
                statement: "2.5 kg = 2500 g > 2400 g.",
              },
            ],
            steps: [
              { reasoning: "2.5 kg = 2500 g.", marks: 1, markCode: "M" },
              { reasoning: "2500 > 2400.", marks: 1, markCode: "M" },
              { reasoning: "2.5 kg is heavier.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "2.5 kg",
            commonErrors: ["No conversion."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-time",
      title: "Time Problems",
      skill: "Solve problems involving time and duration.",
      lesson: {
        sections: [
          {
            heading: "Duration",
            body: "Duration is how long something takes. To find duration, subtract start time from end time. From 9:30 to 11:00 is 1 hour 30 minutes. Remember: 60 minutes = 1 hour; 24 hours = 1 day.",
          },
          {
            heading: "Time problems",
            body: "'A lesson starts at 10:15 and lasts 45 minutes. When does it end?' Add the duration: 10:15 + 45 min = 11:00. Always check your answer makes sense — if you add 45 minutes, the answer should be later than the start.",
          },
        ],
        keyFormulas: [
          { name: "Time", statement: "60 minutes = 1 hour; 24 hours = 1 day" },
        ],
        workedExample: {
          problem:
            "A film starts at 2:20 and lasts 1 hour 30 minutes. When does it end?",
          solution: "2:20 + 1h30m = 3:50.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many minutes are in 1 hour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30" },
              { id: "b", text: "45" },
              { id: "c", text: "60" },
              { id: "d", text: "100" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time",
                statement: "60 min = 1 hour.",
              },
            ],
            steps: [{ reasoning: "60 = 1 hour.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 60",
            commonErrors: ["Wrong number."],
          },
        },
        {
          id: "edpm3-u4-tm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What time is it 30 minutes after 4:15?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4:30" },
              { id: "b", text: "4:45" },
              { id: "c", text: "5:15" },
              { id: "d", text: "5:45" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time", statement: "4:15 + 30 = 4:45." },
            ],
            steps: [
              { reasoning: "4:15 + 30 min = 4:45.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4:45",
            commonErrors: ["Wrong addition."],
          },
        },
        {
          id: "edpm3-u4-tm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A journey starts at 8:45 and takes 1 hour 20 minutes. What time does it end?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time problems",
                statement: "8:45 + 1h20m = 10:05.",
              },
            ],
            steps: [
              { reasoning: "8:45 + 1 hour = 9:45.", marks: 1, markCode: "M" },
              { reasoning: "9:45 + 20 min = 10:05.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10:05.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10:05",
            commonErrors: ["Wrong time calc."],
          },
        },
        {
          id: "edpm3-u4-tm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How long is it from 7:20 to 9:10?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Duration",
                statement: "1 hour 50 minutes.",
              },
            ],
            steps: [
              { reasoning: "7:20 to 8:20 = 1 hour.", marks: 1, markCode: "M" },
              {
                reasoning: "8:20 to 9:10 = 50 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total: 1 hour 50 minutes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "1h 50min",
            commonErrors: ["Wrong duration."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-money",
      title: "Money and Problem Solving",
      skill: "Solve money problems using pounds and pence.",
      lesson: {
        sections: [
          {
            heading: "Money calculations",
            body: "£1 = 100p. To add: convert to pence, add, convert back. To find change: subtract price from amount paid. Always check change adds back to the total paid.",
          },
          {
            heading: "Multi-step money problems",
            body: "'I buy 3 pencils at 40p each and pay with £2. What change?' Step 1: 3 × 40 = 120p. Step 2: £2 = 200p. Step 3: 200 - 120 = 80p change. Break into steps.",
          },
        ],
        keyFormulas: [
          {
            name: "Money",
            statement: "£1 = 100p; always convert before calculating",
          },
        ],
        workedExample: {
          problem: "2 apples cost 60p each. You pay with £2. Change?",
          solution: "2 × 60 = 120p. 200 - 120 = 80p change.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How much is 3 × 50p?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£1.00" },
              { id: "b", text: "£1.50" },
              { id: "c", text: "£2.00" },
              { id: "d", text: "50p" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Money",
                statement: "3 × 50 = 150p = £1.50.",
              },
            ],
            steps: [{ reasoning: "150p = £1.50.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** £1.50",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm3-u4-mo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A toy costs £2.50. You pay with £5. What is the change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£1.50" },
              { id: "b", text: "£2.00" },
              { id: "c", text: "£2.50" },
              { id: "d", text: "£3.00" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Change",
                statement: "500 - 250 = 250p = £2.50.",
              },
            ],
            steps: [
              { reasoning: "£5 - £2.50 = £2.50.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(c)** £2.50",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm3-u4-mo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You buy 4 pens at 75p each. How much do you pay altogether?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Money multiplication",
                statement: "4 × 75 = 300p = £3.",
              },
            ],
            steps: [
              { reasoning: "4 × 75 = 300p.", marks: 1, markCode: "M" },
              { reasoning: "300p = £3.00.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£3",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm3-u4-mo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You have £5. You buy 2 books at £1.80 each and a pen for 60p. How much change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step money",
                statement: "Total=420p; change=80p.",
              },
            ],
            steps: [
              { reasoning: "Books: 2 × 180 = 360p.", marks: 1, markCode: "M" },
              { reasoning: "Total: 360 + 60 = 420p.", marks: 1, markCode: "M" },
              {
                reasoning: "Change: 500 - 420 = 80p.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "80p",
            commonErrors: ["Missed a step."],
          },
        },
      ],
    },
  ],
};
