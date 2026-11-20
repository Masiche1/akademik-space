import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cips-u1-lesson-1-11",
  code: "1-11",
  title: "Stage 3 — Healthy Living: Food, Exercise and Hygiene",
  goal: "I CAN describe a balanced diet and healthy daily habits.",
  standards: ["Cambridge Primary Science 0097 Stage 3: humans and healthy living",
  "Cambridge Primary Science 0097 framework substrands: 3Bp, 3SIC"],
  stage: 3,
  vocabulary: [
    { term: "Balanced diet", definition: "Eating the right amounts of all food groups." },
    { term: "Food group", definition: "Category of foods: fruit/veg, bread/potatoes, meat/beans, dairy, fats/sugars." },
    { term: "Nutrient", definition: "Substance in food the body needs: vitamins, protein, carbohydrates." },
    { term: "Exercise", definition: "Physical activity that keeps the body strong." },
    { term: "Hygiene", definition: "Clean habits that prevent illness." },
  ],
  concepts: [
    {
      id: "cips-u1-s11-healthy",
      title: "Balanced diet and healthy habits",
      skill: "Describe food groups, balanced eating and hygiene at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Balanced diet",
            body: "A balanced diet includes all food groups in the right amounts: fruit and vegetables (vitamins), bread/potatoes/rice (energy), meat/fish/beans/eggs (protein for growth), milk/cheese (calcium for bones), and small amounts of fats and sugars. Too much sugar and fat causes health problems; too little of any group leaves the body lacking.",
          },
          {
            heading: "Exercise and hygiene",
            body: "Regular exercise strengthens muscles and heart and helps maintain a healthy weight. Hygiene prevents illness: wash hands before eating and after using the toilet, cover coughs and sneezes, brush teeth twice daily, and keep clean surroundings. Sleep gives the body time to grow and repair.",
          },
        ],
        keyFormulas: [
          { name: "Food groups", statement: "fruit/veg + starch + protein + dairy + small fats/sugars" },
          { name: "Healthy habits", statement: "balanced diet + exercise + hygiene + sleep" },
        ],
        workedExample: {
          problem: "Is a meal of only chips and cola balanced?",
          solution: "No — it lacks fruit/veg, protein and dairy; too much fat and sugar.",
        },
      },
      questions: [
        {
          id: "cips-u1-hl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which food group gives us protein for growth?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fruit and vegetables" }, { id: "b", text: "Meat, fish, beans and eggs" }, { id: "c", text: "Bread and potatoes" }, { id: "d", text: "Sweets" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protein foods", statement: "Meat/fish/beans/eggs = protein." }],
            steps: [{ reasoning: "Protein comes from meat, fish, beans, eggs, dairy.", marks: 1, markCode: "A" }],
            finalAnswer: "Meat, fish, beans and eggs",
          },
        },
        {
          id: "cips-u1-hl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two hygiene habits that prevent illness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hygiene", statement: "Clean habits prevent germs." }],
            steps: [
              { reasoning: "Any two: handwashing, covering coughs, brushing teeth, clean surroundings.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. washing hands and covering coughs",
          },
        },
        {
          id: "cips-u1-hl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do we need some fat and sugar in our diet, but only small amounts?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fats and sugars", statement: "Needed in small amounts; excess causes problems." }],
            steps: [
              { reasoning: "Body needs some fat/sugar for energy.", marks: 1, markCode: "M" },
              { reasoning: "Too much leads to weight gain and health problems.", marks: 1, markCode: "M" },
              { reasoning: "Answer balances need vs excess.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Needed for energy but excess causes health problems",
          },
        },
        {
          id: "cips-u1-hl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Plan a balanced packed lunch for a school day. Include: one item from each major food group, explain why each is included, and one hygiene habit to practise at lunch. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning balanced meals", statement: "All food groups + hygiene." }],
            steps: [
              { reasoning: "Fruit/veg item included (vitamins).", marks: 1, markCode: "M" },
              { reasoning: "Starch item (bread/rice — energy).", marks: 1, markCode: "M" },
              { reasoning: "Protein item (meat/beans/egg — growth).", marks: 1, markCode: "M" },
              { reasoning: "Dairy item (milk/cheese — calcium).", marks: 1, markCode: "M" },
              { reasoning: "Each item's role explained.", marks: 1, markCode: "M" },
              { reasoning: "Small fat/sugar noted appropriately.", marks: 1, markCode: "M" },
              { reasoning: "Hygiene habit included (handwashing).", marks: 1, markCode: "M" },
              { reasoning: "Complete balanced plan.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. sandwich (bread+cheese+ham), apple, yogurt, water — wash hands first",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-hl-notes",
      title: "Healthy living — notes",
      summary: "All food groups in balance; protein=growth, dairy=calcium; hygiene prevents illness.",
      sections: [
        { heading: "Diet", body: "Fruit/veg + starch + protein + dairy; fats/sugars in small amounts." },
        { heading: "Habits", body: "Exercise strengthens; hygiene (handwashing, teeth) prevents germs." },
      ],
    },
  ],
};
