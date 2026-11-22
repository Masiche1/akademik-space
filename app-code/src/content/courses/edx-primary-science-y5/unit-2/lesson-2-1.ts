import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "edps5-u2-lesson-2-1",
  code: "2-1",
  title: "Balanced Diet and Nutrition",
  goal: "I CAN describe a balanced diet and the roles of different nutrients.",
  standards: ["Year 5 Science: Nutrition"],
  vocabulary: [
    {
      term: "Carbohydrate",
      definition: "Energy source — sugars and starches.",
    },
    { term: "Protein", definition: "Growth and repair — meat, fish, beans." },
    { term: "Fat", definition: "Energy store and insulation." },
    { term: "Vitamin/mineral", definition: "Small amounts needed for health." },
  ],
  concepts: [
    {
      id: "edps5-u2-nutrition",
      title: "Nutrients and a balanced diet",
      skill: "Identify nutrient roles and plan a balanced diet.",
      lesson: {
        sections: [
          {
            heading: "Nutrient roles",
            body: "**Carbohydrates**: quick energy (bread, rice). **Proteins**: growth/repair (meat, fish, eggs, beans). **Fats**: energy store + insulation (oils, nuts). **Vitamins/minerals**: small amounts for health — vitamin C (fruit), calcium (dairy→bones), iron (meat→blood).",
          },
          {
            heading: "Balanced diet",
            body: "Eat a variety: **5 portions fruit/veg** daily, protein, carbohydrates, dairy, limited sugar/fat/salt. Too much → obesity; too little → malnutrition. Water essential — ~2 litres daily.",
          },
        ],
        keyFormulas: [
          { name: "Carbohydrate", statement: "Energy" },
          { name: "Protein", statement: "Growth/repair" },
          { name: "Balanced diet", statement: "Variety + 5-a-day" },
        ],
        workedExample: {
          problem: "Why do athletes need more protein?",
          solution: "Protein repairs and builds muscle after exercise.",
        },
      },
      questions: [
        {
          id: "edps5-u2-nu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is mainly for growth and repair?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sugar" },
              { id: "b", text: "Protein" },
              { id: "c", text: "Carbohydrate" },
              { id: "d", text: "Fat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protein",
                statement: "Growth/repair.",
              },
            ],
            steps: [{ reasoning: "Protein role.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Protein",
            commonErrors: ["Wrong nutrient."],
          },
        },
        {
          id: "edps5-u2-nu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a balanced diet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lots of meat" },
              { id: "b", text: "Variety of all food groups in right amounts" },
              { id: "c", text: "Only vegetables" },
              { id: "d", text: "No sugar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balanced diet",
                statement: "Variety in right amounts.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: variety.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Variety of all food groups in right amounts",
            commonErrors: ["Incomplete definition."],
          },
        },
        {
          id: "edps5-u2-nu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two vitamins/minerals and their roles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vitamins/minerals",
                statement: "Vitamin C=immunity; calcium=bones; iron=blood.",
              },
            ],
            steps: [
              { reasoning: "Nutrient 1.", marks: 1, markCode: "A" },
              { reasoning: "Nutrient 2.", marks: 1, markCode: "A" },
              { reasoning: "Roles correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Vitamin C for immunity; calcium for strong bones'",
            commonErrors: ["Wrong roles."],
          },
        },
        {
          id: "edps5-u2-nu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a balanced day's meals for a child. Explain your choices.",
          parts: [
            { label: "a", prompt: "Breakfast", marks: 1 },
            { label: "b", prompt: "Lunch", marks: 1 },
            { label: "c", prompt: "Dinner", marks: 1 },
            { label: "d", prompt: "All justified", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Balanced diet",
                statement: "Variety across food groups.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Breakfast balanced.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Lunch balanced.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Dinner balanced.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Justified.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'Oats+fruit (carbs+vitamins); chicken+rice+veg (protein+carbs); fish+pasta+veg (protein+omega-3)'",
            commonErrors: ["Missing food groups."],
          },
        },
      ],
    },
    {
      id: "edps5-u2-teeth",
      title: "Teeth and Digestion",
      skill: "Describe teeth types and the digestive process in detail.",
      lesson: {
        sections: [
          {
            heading: "Teeth types",
            body: "**Incisors** (cut), **canines** (tear), **premolars** (crush), **molars** (grind). Adults have 32 teeth; children have 20 milk teeth. Enamel is hardest substance in body — protects teeth.",
          },
          {
            heading: "Digestion",
            body: "**Mechanical** (chewing) + **chemical** (enzymes) breakdown. Mouth→oesophagus→stomach (acid+churn)→small intestine (absorption via villi)→large intestine (water absorption)→anus. Accessory organs: liver (bile), pancreas (enzymes), gallbladder (stores bile).",
          },
        ],
        keyFormulas: [
          { name: "Incisors", statement: "Cut" },
          { name: "Molars", statement: "Grind" },
          { name: "Enamel", statement: "Hardest substance" },
        ],
        workedExample: {
          problem: "Why are molars at the back?",
          solution:
            "Grinding needs force — back teeth are larger and stronger.",
        },
      },
      questions: [
        {
          id: "edps5-u2-te-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which teeth grind food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Incisors" },
              { id: "b", text: "Molars" },
              { id: "c", text: "Wisdom teeth" },
              { id: "d", text: "Canines" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Molars", statement: "Grind food." },
            ],
            steps: [{ reasoning: "Molars grind.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Molars",
            commonErrors: ["Wrong teeth."],
          },
        },
        {
          id: "edps5-u2-te-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the hardest substance in the human body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tooth enamel" },
              { id: "b", text: "Bone" },
              { id: "c", text: "Muscle" },
              { id: "d", text: "Skin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enamel",
                statement: "Hardest substance.",
              },
            ],
            steps: [
              { reasoning: "Recall fact.", marks: 1, markCode: "M" },
              { reasoning: "Answer: enamel.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tooth enamel",
            commonErrors: ["Wrong substance."],
          },
        },
        {
          id: "edps5-u2-te-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the path of food through the digestive system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digestion path",
                statement:
                  "Mouth→oesophagus→stomach→small intestine→large intestine.",
              },
            ],
            steps: [
              { reasoning: "Start correct.", marks: 1, markCode: "A" },
              { reasoning: "Middle correct.", marks: 1, markCode: "A" },
              { reasoning: "End correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps5-u2-te-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of the liver and gallbladder in digestion.",
          parts: [
            { label: "a", prompt: "Liver role", marks: 1 },
            { label: "b", prompt: "Gallbladder role", marks: 1 },
            { label: "c", prompt: "Bile function", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bile",
                statement: "Emulsifies fats; stored in gallbladder.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Liver makes bile.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Gallbladder stores.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Bile function.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Liver makes bile; gallbladder stores/releases it; bile emulsifies fats for digestion",
            commonErrors: ["Incomplete roles."],
          },
        },
      ],
    },
  ],
};
