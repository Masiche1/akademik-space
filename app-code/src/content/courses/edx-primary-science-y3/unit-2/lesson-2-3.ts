import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "edps3-u2-lesson-2-3",
  code: "2-3",
  title: "Plant Parts and Growth",
  goal: "I CAN identify plant parts and explain what each does.",
  standards: ["Year 3 Science: Plants"],
  vocabulary: [
    { term: "Roots", definition: "Anchor plant and absorb water/minerals." },
    { term: "Stem", definition: "Supports plant and carries water/nutrients." },
    {
      term: "Photosynthesis",
      definition: "Process making food from light, water, CO₂.",
    },
    { term: "Chlorophyll", definition: "Green pigment trapping light energy." },
  ],
  concepts: [
    {
      id: "edps3-u2-plantparts",
      title: "Plant parts and functions",
      skill: "Identify plant parts and their functions.",
      lesson: {
        sections: [
          {
            heading: "Root system",
            body: "**Roots**: anchor the plant, absorb water and minerals from soil, store food (carrots are roots!). Root hairs increase absorption surface.",
          },
          {
            heading: "Shoot system",
            body: "**Stem**: supports and transports water/nutrients. **Leaves**: main site of photosynthesis — large flat surface traps light. **Flowers**: reproduction; produce seeds. **Fruit**: protects and disperses seeds.",
          },
        ],
        keyFormulas: [
          { name: "Roots", statement: "Anchor + absorb water" },
          { name: "Stem", statement: "Support + transport" },
          { name: "Leaves", statement: "Photosynthesis" },
        ],
        workedExample: {
          problem: "Why are leaves usually flat and green?",
          solution:
            "Flat = large light-catching surface; green = chlorophyll pigment.",
        },
      },
      questions: [
        {
          id: "edps3-u2-pp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do roots mainly do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Store seeds" },
              { id: "b", text: "Attract bees" },
              { id: "c", text: "Make food" },
              { id: "d", text: "Anchor and absorb water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Roots",
                statement: "Anchor + absorb.",
              },
            ],
            steps: [{ reasoning: "Root function.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Anchor and absorb water",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "edps3-u2-pp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does photosynthesis mainly happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roots" },
              { id: "b", text: "Seeds" },
              { id: "c", text: "Leaves" },
              { id: "d", text: "Flowers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis",
                statement: "Happens in leaves.",
              },
            ],
            steps: [
              { reasoning: "Identify site.", marks: 1, markCode: "M" },
              { reasoning: "Answer: leaves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Leaves",
            commonErrors: ["Wrong part."],
          },
        },
        {
          id: "edps3-u2-pp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match each plant part to its function: stem, leaf, flower.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant functions",
                statement: "Stem=transport; leaf=food; flower=reproduction.",
              },
            ],
            steps: [
              { reasoning: "Stem correct.", marks: 1, markCode: "A" },
              { reasoning: "Leaf correct.", marks: 1, markCode: "A" },
              { reasoning: "Flower correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stem supports/transports; leaf makes food; flower reproduces",
            commonErrors: ["Mismatched functions."],
          },
        },
        {
          id: "edps3-u2-pp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant's roots are damaged. Predict and explain what happens.",
          parts: [
            { label: "a", prompt: "Immediate effect", marks: 1 },
            { label: "b", prompt: "Longer-term effect", marks: 1 },
            { label: "c", prompt: "Why it happens", marks: 1 },
            { label: "d", prompt: "Full prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Root damage",
                statement: "Can't absorb water → plant wilts/dies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Immediate effect.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Long-term effect.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reason explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Plant wilts then dies — roots can't absorb water/minerals so leaves can't photosynthesise",
            commonErrors: ["No water link."],
          },
        },
      ],
    },
    {
      id: "edps3-u2-photosyn",
      title: "Photosynthesis",
      skill: "Explain photosynthesis and what plants need.",
      lesson: {
        sections: [
          {
            heading: "Photosynthesis",
            body: "Plants make their own food (**glucose**) using **light energy**, **water** and **carbon dioxide**. **Chlorophyll** in leaves traps light. Oxygen is released as a by-product: light + water + CO₂ → glucose + oxygen.",
          },
          {
            heading: "What plants need",
            body: "Light, water (via roots), carbon dioxide (via leaves), minerals. Without light, plants become pale (**etiolated**) and can't make food.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis",
            statement: "Light+water+CO₂ → glucose+oxygen",
          },
          { name: "Chlorophyll", statement: "Green pigment trapping light" },
          { name: "Glucose", statement: "Plant's food" },
        ],
        workedExample: {
          problem: "What gas do plants release during photosynthesis?",
          solution: "Oxygen.",
        },
      },
      questions: [
        {
          id: "edps3-u2-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do plants need for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Only water" },
              { id: "c", text: "Only soil" },
              { id: "d", text: "Light, water and carbon dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis",
                statement: "Needs light, water, CO₂.",
              },
            ],
            steps: [
              { reasoning: "Ingredients identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Light, water and carbon dioxide",
            commonErrors: ["Missing ingredient."],
          },
        },
        {
          id: "edps3-u2-ph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What gas do plants release during photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis",
                statement: "Releases oxygen.",
              },
            ],
            steps: [
              { reasoning: "Recall by-product.", marks: 1, markCode: "M" },
              { reasoning: "Answer: oxygen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Oxygen",
            commonErrors: ["Wrong gas."],
          },
        },
        {
          id: "edps3-u2-ph-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is chlorophyll and why is it important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chlorophyll",
                statement: "Green pigment trapping light energy.",
              },
            ],
            steps: [
              { reasoning: "Definition given.", marks: 1, markCode: "A" },
              { reasoning: "Role explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Chlorophyll is the green pigment that traps light energy for photosynthesis",
            commonErrors: ["Incomplete answer."],
          },
        },
        {
          id: "edps3-u2-ph-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test: does a plant need light to grow well?",
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
                statement: "Same plant/water/soil; only light differs.",
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
                reasoning: "Growth measured.",
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
              "Keep all same except light; measure height/leaf growth; predict no-light plant grows poorly",
            commonErrors: ["Unfair test."],
          },
        },
      ],
    },
  ],
};
