import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "edps3-u1-lesson-1-2",
  code: "1-2",
  title: "Life Cycles",
  goal: "I CAN describe and compare life cycles of plants and animals.",
  standards: ["Year 3 Science: Life cycles"],
  vocabulary: [
    {
      term: "Life cycle",
      definition:
        "The stages an organism goes through from birth to reproduction.",
    },
    {
      term: "Larva/pupa",
      definition: "Young insect stage / resting stage before adult.",
    },
    {
      term: "Metamorphosis",
      definition: "Complete change in body form during life cycle.",
    },
    { term: "Seed/seedling", definition: "Plant's start / young plant." },
  ],
  concepts: [
    {
      id: "edps3-u1-lifecycle",
      title: "Animal life cycles",
      skill: "Describe life cycles of mammals, insects and amphibians.",
      lesson: {
        sections: [
          {
            heading: "Different cycles",
            body: "**Mammals**: born live → grow → adult → reproduce. **Insects**: egg → larva → pupa → adult (butterfly: caterpillar → chrysalis → butterfly). **Amphibians**: egg → tadpole → froglet → adult frog. Some insects (grasshoppers) skip the pupa stage.",
          },
          {
            heading: "Comparing cycles",
            body: "All cycles involve **birth, growth, reproduction**. Some change dramatically (metamorphosis: butterfly); others look similar at each stage (human babies look like adults).",
          },
        ],
        keyFormulas: [
          { name: "Mammal cycle", statement: "Live birth → grow → reproduce" },
          { name: "Insect cycle", statement: "Egg → larva → pupa → adult" },
          { name: "Metamorphosis", statement: "Complete body change" },
        ],
        workedExample: {
          problem: "Order the butterfly life cycle.",
          solution:
            "Egg → caterpillar (larva) → chrysalis (pupa) → butterfly (adult).",
        },
      },
      questions: [
        {
          id: "edps3-u1-lc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is metamorphosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sleeping" },
              { id: "b", text: "Growing bigger" },
              { id: "c", text: "Laying eggs" },
              { id: "d", text: "Complete body form change" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metamorphosis",
                statement: "Body form changes completely.",
              },
            ],
            steps: [
              {
                reasoning: "Metamorphosis = transformation.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Complete body form change",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps3-u1-lc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which stage comes after the caterpillar in a butterfly's life?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adult" },
              { id: "b", text: "Chrysalis/pupa" },
              { id: "c", text: "Egg" },
              { id: "d", text: "Tadpole" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Butterfly cycle",
                statement: "Egg → caterpillar → chrysalis → butterfly.",
              },
            ],
            steps: [
              { reasoning: "Recall order.", marks: 1, markCode: "M" },
              { reasoning: "Answer: pupa.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Chrysalis/pupa",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps3-u1-lc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the stages of a frog's life cycle in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Frog cycle",
                statement: "Egg → tadpole → froglet → adult.",
              },
            ],
            steps: [
              { reasoning: "Stage 1-2 correct.", marks: 1, markCode: "A" },
              { reasoning: "Stage 3-4 correct.", marks: 1, markCode: "A" },
              { reasoning: "Order correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Egg → tadpole → froglet → adult frog",
            commonErrors: ["Wrong order or missing stage."],
          },
        },
        {
          id: "edps3-u1-lc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the life cycle of a butterfly and a human.",
          parts: [
            { label: "a", prompt: "Butterfly stages", marks: 1 },
            { label: "b", prompt: "Human stages", marks: 1 },
            { label: "c", prompt: "Similarity", marks: 1 },
            { label: "d", prompt: "Key difference", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Life cycles",
                statement:
                  "Both birth→grow→reproduce; butterfly metamorphoses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Butterfly stages.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Human stages.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Similarity noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Difference noted.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Both go birth→growth→reproduction; butterfly undergoes metamorphosis while humans grow gradually",
            commonErrors: ["Incomplete comparison."],
          },
        },
      ],
    },
    {
      id: "edps3-u1-plantlife",
      title: "Plant life cycles",
      skill: "Describe plant growth from seed to reproduction.",
      lesson: {
        sections: [
          {
            heading: "Plant cycle",
            body: "**Seed → germination → seedling → mature plant → flower → pollination → seed/fruit → new seeds**. Seeds need water, warmth and air to germinate. Pollination moves pollen between flowers so seeds can form.",
          },
          {
            heading: "Parts involved",
            body: "**Roots** absorb water; **stem** supports; **leaves** make food; **flowers** reproduce. After fertilisation, flowers become fruits containing seeds.",
          },
        ],
        keyFormulas: [
          { name: "Germination", statement: "Seed needs water, warmth, air" },
          { name: "Pollination", statement: "Pollen transfer for seeds" },
          { name: "Fruit", statement: "Holds seeds" },
        ],
        workedExample: {
          problem: "What does a seed need to germinate?",
          solution:
            "Water, warmth and air — light isn't always needed initially.",
        },
      },
      questions: [
        {
          id: "edps3-u1-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a seed need to germinate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil only" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Water, warmth and air" },
              { id: "d", text: "Only light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germination",
                statement: "Needs water, warmth, air.",
              },
            ],
            steps: [
              { reasoning: "Conditions identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Water, warmth and air",
            commonErrors: ["Missing condition."],
          },
        },
        {
          id: "edps3-u1-pl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is pollination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cutting flowers" },
              { id: "b", text: "Watering plants" },
              { id: "c", text: "Growing leaves" },
              { id: "d", text: "Pollen transfer between flowers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pollination",
                statement: "Pollen moves between flowers.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: pollen transfer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Pollen transfer between flowers",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps3-u1-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these plant stages in order: flower, seed, seedling, mature plant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant cycle",
                statement: "Seed→seedling→mature→flower→seed.",
              },
            ],
            steps: [
              { reasoning: "Order attempted.", marks: 1, markCode: "A" },
              { reasoning: "Mostly correct.", marks: 1, markCode: "A" },
              { reasoning: "Fully correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Seed → seedling → mature plant → flower → (new) seed",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps3-u1-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test: does a seed need light to germinate?",
          parts: [
            { label: "a", prompt: "Controls", marks: 1 },
            { label: "b", prompt: "Variable changed", marks: 1 },
            { label: "c", prompt: "What you measure", marks: 1 },
            { label: "d", prompt: "Prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fair test",
                statement: "Same water/temperature/soil; only light differs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Controls listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Light varied.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Germination measured.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Prediction made.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Keep all same except light; count seeds that sprout; predict light doesn't affect germination",
            commonErrors: ["Unfair test."],
          },
        },
      ],
    },
  ],
};
