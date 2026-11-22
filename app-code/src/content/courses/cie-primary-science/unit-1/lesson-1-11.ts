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
            { id: "a", text: "Sweets" },
            { id: "b", text: "Bread and potatoes" },
            { id: "c", text: "Meat, fish, beans and eggs" },
            { id: "d", text: "Fruit and vegetables" },
          ], correctChoiceId: "c" },
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
        {
          id: "cips-u1-hl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which food group gives us calcium to keep bones strong?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Milk and cheese" },
            { id: "b", text: "Fruit and vegetables" },
            { id: "c", text: "Bread and rice" },
            { id: "d", text: "Sweets and cakes" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dairy", statement: "Milk and cheese give calcium for bones." }],
            steps: [{ reasoning: "Dairy foods like milk and cheese provide calcium.", marks: 1, markCode: "A" }],
            finalAnswer: "Milk and cheese",
          },
        },
        {
          id: "cips-u1-hl-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by a 'balanced diet'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Balanced diet", statement: "Eating the right amounts of all food groups." }],
            steps: [
              { reasoning: "It means eating all the food groups.", marks: 1, markCode: "M" },
              { reasoning: "In the right amounts — not too much of any one group.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Eating the right amounts of all food groups",
          },
        },
        {
          id: "cips-u1-hl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which food gives us energy from starch?",
          response: { type: "mcq", choices: [
            { id: "a", text: "An apple" },
            { id: "b", text: "Chicken" },
            { id: "c", text: "Bread" },
            { id: "d", text: "Cheese" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Starchy foods", statement: "Bread, potatoes and rice give energy." }],
            steps: [{ reasoning: "Bread is a starchy food that gives energy.", marks: 1, markCode: "A" }],
            finalAnswer: "Bread",
          },
        },
        {
          id: "cips-u1-hl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A balanced diet includes fruit/veg, bread/potatoes, protein foods, dairy and small fats/sugars. How many food groups is that?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "food groups" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Food groups", statement: "Five groups in a balanced diet." }],
            steps: [{ reasoning: "Fruit/veg, starch, protein, dairy, fats/sugars = 5.", marks: 1, markCode: "M" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u1-hl-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you brush your teeth twice every day?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dental hygiene", statement: "Brushing removes food and germs." }],
            steps: [
              { reasoning: "Brushing removes food bits and germs from teeth.", marks: 1, markCode: "M" },
              { reasoning: "This prevents tooth decay and keeps teeth healthy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Removes germs and food to prevent tooth decay",
          },
        },
        {
          id: "cips-u1-hl-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a main benefit of regular exercise?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It strengthens muscles and the heart" },
            { id: "b", text: "It makes you need less sleep" },
            { id: "c", text: "It replaces healthy eating" },
            { id: "d", text: "It prevents all illness" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Exercise", statement: "Physical activity that keeps the body strong." }],
            steps: [{ reasoning: "Exercise strengthens muscles and heart.", marks: 1, markCode: "A" }],
            finalAnswer: "It strengthens muscles and the heart",
          },
        },
        {
          id: "cips-u1-hl-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A child eats nothing but sweets and fizzy drinks for a whole day. Explain two health problems this could cause.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Unbalanced diet", statement: "Too much sugar/fat, missing other groups." }],
            steps: [
              { reasoning: "Too much sugar and fat causes weight gain and health problems.", marks: 1, markCode: "M" },
              { reasoning: "Missing protein, vitamins and calcium weakens growth and bones.", marks: 1, markCode: "M" },
              { reasoning: "Both problems explained clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weight gain and lack of nutrients for growth",
          },
        },
        {
          id: "cips-u1-hl-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For lunch you eat an apple, a cheese sandwich and a yogurt. If a balanced meal needs fruit/veg, starch, protein, dairy and fats/sugars, how many food groups are still missing?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "groups" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Food groups", statement: "Identify which groups are covered." }],
            steps: [
              { reasoning: "Covered: fruit/veg (apple), starch (bread), protein (ham), dairy (cheese, yogurt).", marks: 1, markCode: "M" },
              { reasoning: "Missing: fats/sugars and one more main group — 2 remaining.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-hl-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When is the MOST important time to wash your hands?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only when they look dirty" },
            { id: "b", text: "Once a week" },
            { id: "c", text: "Never" },
            { id: "d", text: "Before eating and after using the toilet" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hygiene", statement: "Wash hands before eating and after the toilet." }],
            steps: [{ reasoning: "Handwashing before eating and after the toilet prevents germs.", marks: 1, markCode: "A" }],
            finalAnswer: "Before eating and after using the toilet",
          },
        },
        {
          id: "cips-u1-hl-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is getting enough sleep important for a growing child?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sleep", statement: "Sleep lets the body grow and repair." }],
            steps: [
              { reasoning: "Sleep gives the body time to grow.", marks: 1, markCode: "M" },
              { reasoning: "It also repairs the body and restores energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sleep lets the body grow and repair",
          },
        },
        {
          id: "cips-u1-hl-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does protein in food help the body do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Give quick energy only" },
            { id: "b", text: "Make bones hard only" },
            { id: "c", text: "Help the body grow and repair" },
            { id: "d", text: "Nothing important" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protein", statement: "Protein is needed for growth and repair." }],
            steps: [{ reasoning: "Protein helps the body grow and repair itself.", marks: 1, markCode: "A" }],
            finalAnswer: "Grow and repair",
          },
        },
        {
          id: "cips-u1-hl-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Day 1 meals: cereal, cheese sandwich, apple, milk. Day 2 meals: sweets, crisps, cola. Which day is more balanced? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluating diets", statement: "Check all food groups are included." }],
            steps: [
              { reasoning: "Day 1 includes starch, protein, dairy and fruit.", marks: 1, markCode: "M" },
              { reasoning: "Day 2 has only fats, sugars and salt — missing most groups.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: Day 1 is balanced; reasons given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Day 1 — it has most food groups; Day 2 lacks them",
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
