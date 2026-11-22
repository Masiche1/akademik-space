import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cipm-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 2 — Times Tables and Measurement",
  goal: "I CAN recall times tables and measure length, mass and capacity.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: multiplication and measures",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Ni, 2Gg"],
  stage: 2,
  vocabulary: [
    { term: "Times table", definition: "A list of multiplication facts for one number." },
    { term: "Length", definition: "How long something is; measured in cm or m." },
    { term: "Mass", definition: "How heavy something is; measured in grams or kilograms." },
    { term: "Capacity", definition: "How much a container holds; measured in ml or litres." },
    { term: "Ruler", definition: "Tool for measuring length in centimetres." },
  ],
  concepts: [
    {
      id: "cipm-u1-s5-times-measure",
      title: "Times tables and measuring amounts",
      skill: "Use ×2, ×5 and ×10 facts and compare measurements at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Times tables",
            body: "Stage 2 focuses on the 2, 5 and 10 times tables. The 10 times table is the easiest — just add a zero. The 2 times table is doubling, and the 5 times table ends in 5 or 0. Knowing these facts helps with division too: 20 ÷ 5 = 4 because 5 × 4 = 20.",
          },
          {
            heading: "Measuring",
            body: "Length uses cm/m with a ruler; mass uses g/kg with scales; capacity uses ml/l with jugs. Always line up the zero end of the ruler with the start of the object, and read at eye level. Compare measurements using more than, less than and equal to.",
          },
        ],
        keyFormulas: [
          { name: "Times tables", statement: "×2 = double; ×10 = add zero" },
          { name: "Units", statement: "length: cm/m; mass: g/kg; capacity: ml/l" },
        ],
        workedExample: {
          problem: "A pencil is 14 cm long. Is it longer or shorter than a 20 cm ruler?",
          solution: "14 cm is less than 20 cm, so the pencil is shorter than the ruler.",
        },
      },
      questions: [
        {
          id: "cipm-u1-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 5 × 6?",
          response: { type: "mcq", choices: [
            { id: "a", text: "25" },
            { id: "b", text: "35" },
            { id: "c", text: "11" },
            { id: "d", text: "30" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "5 times table", statement: "5 × 6 = 30." }],
            steps: [{ reasoning: "5 × 6 = 30.", marks: 1, markCode: "A" }],
            finalAnswer: "30",
          },
        },
        {
          id: "cipm-u1-tm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which unit would you use to measure the mass of a bag of sugar?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mass units", statement: "Mass is measured in grams or kilograms." }],
            steps: [
              { reasoning: "Mass is measured with scales in g or kg.", marks: 1, markCode: "M" },
              { reasoning: "Answer: grams or kilograms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Grams or kilograms",
          },
        },
        {
          id: "cipm-u1-tm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 5 apples in each of 4 bags. How many apples altogether?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication as groups", statement: "4 groups of 5 = 4 × 5." }],
            steps: [
              { reasoning: "4 bags × 5 apples = 20.", marks: 1, markCode: "M" },
              { reasoning: "Or count in fives: 5, 10, 15, 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20 apples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipm-u1-tm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A jug holds 750 ml and is half full. How much water is in it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half of a capacity", statement: "Half of 750 ml = 375 ml." }],
            steps: [
              { reasoning: "Half means divide by 2.", marks: 1, markCode: "M" },
              { reasoning: "750 ÷ 2 = 375.", marks: 1, markCode: "M" },
              { reasoning: "Units stay in ml.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 375 ml.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "375 ml",
          },
        },
        {
          id: "cipm-u1-tm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $10 \\times 7$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "70" },
            { id: "b", text: "700" },
            { id: "c", text: "107" },
            { id: "d", text: "17" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "10 times table", statement: "Multiply by 10 = add a zero." }],
            steps: [{ reasoning: "$10 \\times 7 = 70$.", marks: 1, markCode: "A" }],
            finalAnswer: "70",
          },
        },
        {
          id: "cipm-u1-tm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $5 \\times 8$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "5 times table", statement: "Count in fives." }],
            steps: [
              { reasoning: "$5 \\times 8 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 40.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40",
          },
        },
        {
          id: "cipm-u1-tm-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which unit would you use to measure the capacity of a water bottle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "grams" },
            { id: "b", text: "centimetres" },
            { id: "c", text: "kilograms" },
            { id: "d", text: "millilitres" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Capacity units", statement: "Capacity is measured in ml or litres." }],
            steps: [{ reasoning: "Capacity uses millilitres or litres.", marks: 1, markCode: "A" }],
            finalAnswer: "millilitres",
          },
        },
        {
          id: "cipm-u1-tm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag of flour has a mass of 2 kg. What is its mass in grams?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2000, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Unit conversion", statement: "1 kg = 1000 g." }],
            steps: [
              { reasoning: "2 kg = 2 × 1000 g.", marks: 1, markCode: "M" },
              { reasoning: "= 2000 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2000 g",
          },
        },
        {
          id: "cipm-u1-tm-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $2 \\times 9$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "20" },
            { id: "b", text: "81" },
            { id: "c", text: "11" },
            { id: "d", text: "18" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "2 times table", statement: "Doubling." }],
            steps: [{ reasoning: "$2 \\times 9 = 18$ — double 9.", marks: 1, markCode: "A" }],
            finalAnswer: "18",
          },
        },
        {
          id: "cipm-u1-tm-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) There are 10 stickers in each of 3 packs — how many stickers altogether? (b) A ribbon is 45 cm long. Is it longer or shorter than a metre? Explain. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Times tables and comparing units", statement: "Groups multiply; 1 m = 100 cm." }],
            steps: [
              { reasoning: "(a) 3 × 10 = 30 stickers.", marks: 1, markCode: "M" },
              { reasoning: "(b) 1 m = 100 cm; 45 cm < 100 cm.", marks: 1, markCode: "M" },
              { reasoning: "So the ribbon is shorter than a metre.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 (b) shorter than a metre",
          },
        },
        {
          id: "cipm-u1-tm-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) What is $5 \\times 9$? (b) Use your answer to write a division fact: $45 \\div 5 = ?$",
          response: { type: "numeric", parts: [
            { label: "a", answer: 45 },
            { label: "b", answer: 9 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Division undoes multiplication." }],
            steps: [
              { reasoning: "(a) $5 \\times 9 = 45$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $45 \\div 5 = 9$ since $5 \\times 9 = 45$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 45 (b) 9",
          },
        },
        {
          id: "cipm-u1-tm-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A jug holds 500 ml and is half full. How much water is in the jug?",
          response: { type: "mcq", choices: [
            { id: "a", text: "250 ml" },
            { id: "b", text: "750 ml" },
            { id: "c", text: "1000 ml" },
            { id: "d", text: "50 ml" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half of a capacity", statement: "Divide by 2." }],
            steps: [{ reasoning: "500 ÷ 2 = 250 ml.", marks: 1, markCode: "A" }],
            finalAnswer: "250 ml",
          },
        },
        {
          id: "cipm-u1-tm-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A pencil is 9 cm long. Two pencils joined end to end make what length? (b) A book has mass 300 g. Is it heavier or lighter than a 1 kg mass? (c) A bottle holds 1 litre. How many millilitres is that? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Measures", statement: "Length adds; 1 kg = 1000 g; 1 l = 1000 ml." }],
            steps: [
              { reasoning: "(a) 9 + 9 = 18 cm.", marks: 1, markCode: "M" },
              { reasoning: "(b) 1 kg = 1000 g; 300 g < 1000 g → lighter.", marks: 1, markCode: "M" },
              { reasoning: "(c) 1 litre = 1000 ml.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 18 cm (b) lighter (c) 1000 ml",
          },
        },
        {
          id: "cipm-u1-tm-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the longest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1 m" },
            { id: "b", text: "2 m" },
            { id: "c", text: "80 cm" },
            { id: "d", text: "15 cm" },
          ], correctChoiceIb: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing lengths", statement: "Convert to the same unit." }],
            steps: [{ reasoning: "2 m = 200 cm, longer than 100 cm (1 m), 80 cm and 15 cm.", marks: 1, markCode: "A" }],
            finalAnswer: "2 m",
          },
        },
        {
          id: "cipm-u1-tm-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bottle holds 330 ml of juice. Half the bottle is drunk. How much juice is left?",
          response: { type: "numeric", parts: [{ label: "a", answer: 165, unit: "ml" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Halving capacity", statement: "Half remains after half is drunk." }],
            steps: [
              { reasoning: "Half of 330 ml = 165 ml.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 165 ml.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "165 ml",
          },
        },
        {
          id: "cipm-u1-tm-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Work out $10 \\times 6$ and $10 \\times 9$. (b) A ribbon 60 cm long is cut into 5 equal pieces — how long is each piece? (c) A cat has mass 4 kg and a dog has mass 9 kg — which is heavier and by how much? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Times tables and measures", statement: "×10 facts, equal sharing of length, comparing mass." }],
            steps: [
              { reasoning: "(a) $10 \\times 6 = 60$; $10 \\times 9 = 90$.", marks: 1, markCode: "M" },
              { reasoning: "(b) 60 ÷ 5 = 12 cm each.", marks: 1, markCode: "M" },
              { reasoning: "(c) Dog is heavier; 9 − 4 = 5 kg more.", marks: 1, markCode: "M" },
              { reasoning: "Units used correctly throughout.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 60 and 90 (b) 12 cm (c) dog, by 5 kg",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-tm-notes",
      title: "Times tables and measurement — revision notes",
      summary: "×2 double, ×5 ends 0/5, ×10 add zero; cm/m, g/kg, ml/l.",
      sections: [
        { heading: "Tables", body: "Learn 2, 5, 10 tables; use them for matching division facts." },
        { heading: "Measuring", body: "Line up zero; read at eye level; match unit to what you measure." },
      ],
    },
  ],
};
