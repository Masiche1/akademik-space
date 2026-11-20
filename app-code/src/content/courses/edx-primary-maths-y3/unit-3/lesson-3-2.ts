import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edpm3-u3-lesson-3-2",
  code: "3-2",
  title: "Measuring Length, Mass and Capacity",
  goal: "I CAN measure and compare length, mass and capacity using appropriate units.",
  standards: ["Year 3 Measure"],
  vocabulary: [
    {
      term: "Length",
      definition: "How long something is — measured in cm, m, km.",
    },
    {
      term: "Mass",
      definition:
        "How heavy something is — measured in grams (g) and kilograms (kg).",
    },
    {
      term: "Capacity",
      definition:
        "How much liquid a container holds — measured in millilitres (ml) and litres (l).",
    },
    {
      term: "Kilogram",
      definition: "1000 grams — about the mass of a bag of sugar.",
    },
    {
      term: "Litre",
      definition: "1000 millilitres — about a large bottle of water.",
    },
    {
      term: "Perimeter",
      definition: "The distance around the edge of a shape.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u3-measure",
      title: "Length, mass and capacity",
      skill:
        "Choose appropriate units and compare measurements of length, mass and capacity.",
      lesson: {
        sections: [
          {
            heading: "Length",
            body: "Measure length in **cm** for small objects (pencil ~15 cm), **m** for medium (classroom ~8 m), **km** for long distances (home to school ~2 km). 1 m = 100 cm. Use a ruler for cm, a trundle wheel or tape for m.",
          },
          {
            heading: "Mass and capacity",
            body: "**Mass** = how heavy: grams for light things (apple ~100 g), kilograms for heavy (bag of flour ~1 kg). 1 kg = 1000 g. **Capacity** = how much liquid fits: millilitres for small (cup ~250 ml), litres for large (bucket ~10 l). 1 l = 1000 ml.",
          },
          {
            heading: "Comparing measurements",
            body: "Always compare in the same unit. Convert if needed: 2 kg = 2000 g, so 1500 g < 2 kg. 500 ml < 1 l because 1 l = 1000 ml. Choose the sensible unit: don't measure a classroom in mm or a pencil in km.",
          },
        ],
        keyFormulas: [
          {
            name: "Units",
            statement: "1 m = 100 cm; 1 kg = 1000 g; 1 l = 1000 ml",
          },
          {
            name: "Choosing units",
            statement: "Small→g/ml/cm; medium→kg/l/m; long→km",
          },
        ],
        workedExample: {
          problem: "Which is heavier: 750 g or 1 kg?",
          solution: "1 kg = 1000 g. 750 g < 1000 g, so 1 kg is heavier.",
        },
      },
      questions: [
        {
          id: "edpm3-u3-meas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which unit measures the mass of a bag of sugar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grams" },
              { id: "b", text: "Kilograms" },
              { id: "c", text: "Millilitres" },
              { id: "d", text: "Centimetres" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Units",
                statement: "Bag of sugar ~1 kg.",
              },
            ],
            steps: [
              {
                reasoning: "Sugar bag is heavy → kilograms.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Kilograms",
            commonErrors: ["Choosing grams — too small a unit."],
          },
        },
        {
          id: "edpm3-u3-meas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is more: 500 ml or 1 litre?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing units",
                statement: "1 l = 1000 ml > 500 ml.",
              },
            ],
            steps: [
              { reasoning: "Convert: 1 l = 1000 ml.", marks: 1, markCode: "M" },
              { reasoning: "1000 ml > 500 ml.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: 1 litre is more.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1 litre",
            commonErrors: ["Comparing 500 and 1 without converting."],
          },
        },
        {
          id: "edpm3-u3-meas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe needs 250 ml of milk. You have a 1 litre carton. How many millilitres are left after using the recipe amount?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Millilitres left",
                answer: 750,
                tolerance: 0,
                unit: "ml",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capacity problems",
                statement: "1 l = 1000 ml; 1000 − 250 = 750.",
              },
            ],
            steps: [
              { reasoning: "Convert 1 l to 1000 ml.", marks: 1, markCode: "M" },
              { reasoning: "1000 − 250 = 750.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 750 ml.", marks: 1, markCode: "A" },
              { reasoning: "Unit included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "750 ml",
            commonErrors: ["Subtracting 250 from 1 instead of 1000."],
          },
        },
        {
          id: "edpm3-u3-meas-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A rectangle is 8 cm long and 5 cm wide.",
          parts: [
            { label: "a", prompt: "What is its perimeter?", marks: 3 },
            {
              label: "b",
              prompt:
                "If you double the length to 16 cm, what is the new perimeter?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why doubling one side doesn't double the perimeter.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perimeter",
                statement:
                  "Perimeter = sum of all sides; only one side changed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Perimeter = 8 + 5 + 8 + 5 = 26 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Or 2 × (8 + 5) = 26.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 26 cm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "New perimeter = 16 + 5 + 16 + 5 = 42 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Or 2 × (16 + 5) = 42.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 42 cm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Only length doubled; width stayed 5.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Perimeter increased by 16 (8 extra on each long side).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "26 → 42 is +16, not doubled.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "26 cm; 42 cm; only one side changed so perimeter doesn't double",
            commonErrors: [
              "Doubling the whole perimeter instead of adding the extra length.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm3-u3-perimeter",
      title: "Perimeter of shapes",
      skill:
        "Calculate perimeter of rectangles and compound rectilinear shapes.",
      lesson: {
        sections: [
          {
            heading: "Perimeter of a rectangle",
            body: "Perimeter = distance around the edge = sum of all sides. For a rectangle: P = 2 × (length + width). An 8 cm × 5 cm rectangle: P = 2 × (8 + 5) = 26 cm. Always include units.",
          },
          {
            heading: "Perimeter of compound shapes",
            body: "For L-shaped or compound rectilinear shapes, add all outer edges. Break into rectangles or trace the boundary carefully. A square with side 4 cm: P = 4 × 4 = 16 cm. An equilateral triangle with side 6 cm: P = 3 × 6 = 18 cm.",
          },
          {
            heading: "Using perimeter in context",
            body: "'How much fencing needed' = perimeter. 'Distance around a field' = perimeter. If a garden is 10 m × 6 m, fencing = 2 × (10 + 6) = 32 m. Think about which sides need fencing — sometimes not all sides.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "P = 2 × (length + width)" },
          { name: "Square", statement: "P = 4 × side" },
          { name: "Equilateral triangle", statement: "P = 3 × side" },
        ],
        workedExample: {
          problem: "Find the perimeter of a square with side 7 cm.",
          solution: "P = 4 × 7 = 28 cm.",
        },
      },
      questions: [
        {
          id: "edpm3-u3-per-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a square with side 5 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 cm" },
              { id: "b", text: "20 cm" },
              { id: "c", text: "25 cm" },
              { id: "d", text: "15 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Square perimeter",
                statement: "P = 4 × side = 4 × 5 = 20.",
              },
            ],
            steps: [
              { reasoning: "4 sides × 5 cm = 20 cm.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 20 cm",
            commonErrors: [
              "Multiplying 5 × 5 = 25 — that's area not perimeter.",
            ],
          },
        },
        {
          id: "edpm3-u3-per-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle is 12 cm long and 7 cm wide. What is its perimeter?",
          response: {
            type: "numeric",
            parts: [
              { label: "Perimeter", answer: 38, tolerance: 0, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rectangle perimeter",
                statement: "P = 2 × (12 + 7) = 38.",
              },
            ],
            steps: [
              { reasoning: "12 + 7 = 19.", marks: 1, markCode: "M" },
              { reasoning: "19 × 2 = 38.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 38 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "38 cm",
            commonErrors: ["Answering 84 — that's area (12 × 7)."],
          },
        },
        {
          id: "edpm3-u3-per-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An equilateral triangle has sides of 9 cm. What is its perimeter?",
          response: {
            type: "numeric",
            parts: [
              { label: "Perimeter", answer: 27, tolerance: 0, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Equilateral triangle",
                statement: "P = 3 × side = 3 × 9 = 27.",
              },
            ],
            steps: [
              {
                reasoning: "Equilateral = 3 equal sides.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "9 × 3 = 27.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 27 cm.", marks: 1, markCode: "A" },
              { reasoning: "Unit included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "27 cm",
            commonErrors: ["Adding 9 + 9 = 18 — forgetting the third side."],
          },
        },
        {
          id: "edpm3-u3-per-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A garden is 15 m long and 10 m wide. Fencing costs £2 per metre.",
          parts: [
            {
              label: "a",
              prompt: "What is the perimeter of the garden?",
              marks: 3,
            },
            { label: "b", prompt: "How much does the fencing cost?", marks: 3 },
            {
              label: "c",
              prompt:
                "If a gate takes up 2 m, how much fencing is actually needed?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Perimeter in context",
                statement:
                  "Perimeter = fencing needed; subtract gate; multiply by cost.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "P = 2 × (15 + 10) = 50 m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 50 m.",
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
                reasoning: "50 × £2 = £100.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: £100.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Gate = 2 m, fencing needed = 50 − 2 = 48 m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Cost = 48 × £2 = £96.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answers: 48 m and £96.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "50 m; £100; 48 m / £96",
            commonErrors: ["Not subtracting the gate from the perimeter."],
          },
        },
      ],
    },
  ],
};
