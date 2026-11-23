import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpm2-u4-lesson-4-3",
  code: "4-3",
  title: "Time and Measurement Problems",
  goal: "I CAN solve problems involving time and measurement.",
  standards: ["Year 2 Time and measurement"],
  vocabulary: [
    { term: "Duration", definition: "How long something takes." },
    { term: "O'clock", definition: "Exact hour, e.g. 3 o'clock = 3:00." },
    { term: "Half past", definition: "30 minutes past the hour." },
    {
      term: "Quarter past/to",
      definition: "15 minutes past or 15 minutes before the hour.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u4-time",
      title: "Reading the Time",
      skill: "Read o'clock, half past, quarter past and quarter to.",
      lesson: {
        sections: [
          {
            heading: "Telling time",
            body: "A clock has an hour hand (short) and minute hand (long). O'clock: minute hand on 12, hour hand on the number — 3:00. Half past: minute hand on 6 — 3:30. Quarter past: minute hand on 3 — 3:15. Quarter to: minute hand on 9 — 3:45 (quarter to 4).",
          },
          {
            heading: "Duration",
            body: "Duration is how long something takes. From 2:00 to 3:00 is 1 hour. From 2:15 to 2:45 is 30 minutes. To find duration, count the minutes on the clock face — each number is 5 minutes (1 to 5 = 5 minutes, 6 to 10 = 10 minutes, etc.).",
          },
        ],
        keyFormulas: [
          {
            name: "Clock numbers",
            statement: "Each number = 5 minutes; minute hand on 12 = o'clock",
          },
        ],
        workedExample: {
          problem:
            "What time is it when the minute hand is on 6 and hour hand is between 4 and 5?",
          solution: "Half past 4 = 4:30.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'half past 3' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3:00" },
              { id: "b", text: "3:15" },
              { id: "c", text: "3:30" },
              { id: "d", text: "3:45" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time",
                statement: "Half past = :30.",
              },
            ],
            steps: [
              { reasoning: "Half past = 30 minutes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 3:30",
            commonErrors: ["Wrong time."],
          },
        },
        {
          id: "edpm2-u4-tm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What time is 'quarter to 5'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4:15" },
              { id: "b", text: "4:45" },
              { id: "c", text: "5:15" },
              { id: "d", text: "5:45" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time",
                statement: "Quarter to = :45.",
              },
            ],
            steps: [
              { reasoning: "Quarter to 5 = 4:45.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4:45",
            commonErrors: ["Wrong time."],
          },
        },
        {
          id: "edpm2-u4-tm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How long is it from 10:00 to 11:30?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Duration",
                statement: "1 hour 30 minutes.",
              },
            ],
            steps: [
              {
                reasoning: "10:00 to 11:00 = 1 hour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "11:00 to 11:30 = 30 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total: 1 hour 30 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1h 30min",
            commonErrors: ["Wrong duration."],
          },
        },
        {
          id: "edpm2-u4-tm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A film starts at 2:15 and ends at 3:45. How long is the film?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Duration",
                statement: "1 hour 30 minutes.",
              },
            ],
            steps: [
              { reasoning: "2:15 to 3:15 = 1 hour.", marks: 1, markCode: "M" },
              {
                reasoning: "3:15 to 3:45 = 30 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total: 1 hour 30 minutes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "1h 30min",
            commonErrors: ["Wrong calculation."],
          },
        },
      ],
    },
    {
      id: "edpm2-u4-measure",
      title: "Measurement Problems",
      skill: "Solve problems involving length, mass and capacity.",
      lesson: {
        sections: [
          {
            heading: "Units of measure",
            body: "Length: millimetres (mm), centimetres (cm), metres (m), kilometres (km). 1 cm = 10 mm; 1 m = 100 cm; 1 km = 1000 m. Mass: grams (g) and kilograms (kg). 1 kg = 1000 g. Capacity: millilitres (ml) and litres (l). 1 l = 1000 ml.",
          },
          {
            heading: "Comparing and converting",
            body: "To compare measurements, convert to the same unit. 'Which is longer: 50 cm or 0.6 m?' Convert 0.6 m = 60 cm. 60 cm > 50 cm. To convert: multiply by 10 for cm→mm, by 100 for m→cm, by 1000 for kg→g or l→ml.",
          },
        ],
        keyFormulas: [
          {
            name: "Conversions",
            statement:
              "1 cm = 10 mm; 1 m = 100 cm; 1 kg = 1000 g; 1 l = 1000 ml",
          },
        ],
        workedExample: {
          problem: "Which is heavier: 500 g or 0.6 kg?",
          solution: "0.6 kg = 600 g. 600 g > 500 g, so 0.6 kg is heavier.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many centimetres are in 1 metre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "50" },
              { id: "c", text: "100" },
              { id: "d", text: "1000" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conversions",
                statement: "1 m = 100 cm.",
              },
            ],
            steps: [{ reasoning: "1 m = 100 cm.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 100",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm2-u4-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many grams are in 1 kilogram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100" },
              { id: "b", text: "500" },
              { id: "c", text: "1000" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conversions",
                statement: "1 kg = 1000 g.",
              },
            ],
            steps: [{ reasoning: "1 kg = 1000 g.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 1000",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm2-u4-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is longer: 80 cm or 0.9 m? Show the conversion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Converting units",
                statement: "0.9 m = 90 cm > 80 cm.",
              },
            ],
            steps: [
              { reasoning: "0.9 m = 90 cm.", marks: 1, markCode: "M" },
              { reasoning: "90 cm > 80 cm.", marks: 1, markCode: "M" },
              { reasoning: "0.9 m is longer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9 m longer",
            commonErrors: ["No conversion."],
          },
        },
        {
          id: "edpm2-u4-ms-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bottle holds 750 ml. How many millilitres are in 2 bottles? How many litres is that?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Capacity",
                statement: "750 × 2 = 1500 ml = 1.5 l.",
              },
            ],
            steps: [
              { reasoning: "750 × 2 = 1500 ml.", marks: 1, markCode: "M" },
              { reasoning: "1500 ml = 1.5 l.", marks: 1, markCode: "M" },
              { reasoning: "Both answers given.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "1500 ml = 1.5 l",
            commonErrors: ["Wrong conversion."],
          },
        },
      ],
    },
    {
      id: "edpm2-u4-mixed",
      title: "Mixed Practice",
      skill: "Apply Year 2 skills across all topics.",
      lesson: {
        sections: [
          {
            heading: "Year 2 topics",
            body: "Number (place value to 100, addition/subtraction, multiplication/division, fractions), shape and position, measure (length, mass, capacity), time, money, data handling and problem solving.",
          },
          {
            heading: "Problem-solving tips",
            body: "Read carefully, identify the operation, show working, and check answers. For multi-step problems, break into smaller steps. Practise regularly to build fluency.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What are the main Year 2 maths topics?",
          solution: "Number, fractions, shape, measure, time, money, data.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-mix-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 25 + 17?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "32" },
              { id: "b", text: "42" },
              { id: "c", text: "52" },
              { id: "d", text: "62" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addition", statement: "25 + 17 = 42." },
            ],
            steps: [{ reasoning: "25 + 17 = 42.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 42",
            commonErrors: ["Wrong sum."],
          },
        },
        {
          id: "edpm2-u4-mix-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a quarter of 16?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fractions", statement: "16 ÷ 4 = 4." },
            ],
            steps: [{ reasoning: "16 ÷ 4 = 4.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Wrong division."],
          },
        },
        {
          id: "edpm2-u4-mix-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shop has 30 stickers. 12 are sold in the morning and 8 in the afternoon. How many are left?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step problems",
                statement: "30 - 12 - 8 = 10.",
              },
            ],
            steps: [
              { reasoning: "30 - 12 = 18.", marks: 1, markCode: "M" },
              { reasoning: "18 - 8 = 10.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
            commonErrors: ["Wrong steps."],
          },
        },
        {
          id: "edpm2-u4-mix-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle is 8 cm long and 3 cm wide. What is its perimeter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter",
                statement: "2×(8+3) = 22 cm.",
              },
            ],
            steps: [
              {
                reasoning: "Perimeter = add all sides.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "8 + 3 + 8 + 3 = 22 cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 22 cm.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "22 cm",
            commonErrors: ["Wrong formula."],
          },
        },
      ],
    },
  ],
};
