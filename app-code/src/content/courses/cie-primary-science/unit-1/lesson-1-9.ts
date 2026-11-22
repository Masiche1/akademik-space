import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cips-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Grouping Materials and Dissolving",
  goal: "I CAN group materials by properties and explain simple dissolving.",
  standards: ["Cambridge Primary Science 0097 Stage 3: materials",
  "Cambridge Primary Science 0097 framework substrands: 3Cm, 3Cp, 3Cc"],
  stage: 3,
  vocabulary: [
    { term: "Property", definition: "A feature you can observe or test." },
    { term: "Hard/soft", definition: "Resistance to being scratched or dented." },
    { term: "Rough/smooth", definition: "Texture of a surface." },
    { term: "Dissolve", definition: "When a solid mixes into a liquid and seems to disappear." },
    { term: "Solution", definition: "The liquid made when something dissolves." },
  ],
  concepts: [
    {
      id: "cips-u1-s9-materials",
      title: "Material properties and dissolving",
      skill: "Group materials by testable properties and describe dissolving at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Grouping by properties",
            body: "You can group materials by properties you can test: hard or soft (wood vs sponge), rough or smooth (sandpaper vs glass), bendy or stiff (rubber vs ruler), magnetic or not (iron vs plastic). Build a key — a list of properties and which materials belong to each group.",
          },
          {
            heading: "Dissolving",
            body: "When sugar or salt is stirred into water, it dissolves — the solid breaks into tiny pieces spread through the liquid, making a solution. The solid hasn't disappeared; it's still there, you just can't see it. Stirring speeds up dissolving; warm water dissolves faster than cold.",
          },
        ],
        keyFormulas: [
          { name: "Properties", statement: "hard/soft, rough/smooth, bendy/stiff, magnetic" },
          { name: "Dissolving", statement: "solid + liquid → solution (still contains the solid)" },
        ],
        workedExample: {
          problem: "Why does salt seem to disappear in water?",
          solution: "It dissolves — breaks into tiny pieces spread through the water, making a solution.",
        },
      },
      questions: [
        {
          id: "cips-u1-dm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is magnetic?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plastic" },
            { id: "b", text: "Wood" },
            { id: "c", text: "Glass" },
            { id: "d", text: "Iron" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic", statement: "Iron and steel are magnetic." }],
            steps: [{ reasoning: "Iron is magnetic; the others are not.", marks: 1, markCode: "A" }],
            finalAnswer: "Iron",
          },
        },
        {
          id: "cips-u1-dm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens when sugar is stirred into warm water?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dissolving", statement: "Solid spreads through liquid." }],
            steps: [
              { reasoning: "The sugar dissolves into the water.", marks: 1, markCode: "M" },
              { reasoning: "It makes a clear solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It dissolves, making a solution",
          },
        },
        {
          id: "cips-u1-dm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can you tell if something has really dissolved or just sunk?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing dissolving", statement: "Check for visible solid or filter." }],
            steps: [
              { reasoning: "If solid pieces remain visible, it hasn't dissolved.", marks: 1, markCode: "M" },
              { reasoning: "Dissolved = evenly spread, clear liquid.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains the test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Look for remaining solid pieces or test with a filter",
          },
        },
        {
          id: "cips-u1-dm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two glasses of water: one cold, one warm. The same amount of salt is added to each and stirred for 10 seconds. Which dissolves faster and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fair test reasoning", statement: "Only temperature differs." }],
            steps: [
              { reasoning: "Warm water dissolves faster.", marks: 1, markCode: "M" },
              { reasoning: "Warm particles move faster, spreading the salt quicker.", marks: 1, markCode: "M" },
              { reasoning: "Only temperature changed — fair comparison.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains the effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Warm water — particles move faster so dissolving is quicker",
          },
        },
        {
          id: "cips-u1-dm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is SOFT?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A sponge" },
            { id: "b", text: "Metal" },
            { id: "c", text: "Wood" },
            { id: "d", text: "Glass" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Soft", statement: "Easily squashed — sponge is soft." }],
            steps: [{ reasoning: "A sponge is soft; the others are hard.", marks: 1, markCode: "A" }],
            finalAnswer: "A sponge",
          },
        },
        {
          id: "cips-u1-dm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a solution?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The liquid made when something dissolves" },
            { id: "b", text: "A solid that won't dissolve" },
            { id: "c", text: "A type of rock" },
            { id: "d", text: "A sticky surface" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solution", statement: "Liquid formed when a solid dissolves." }],
            steps: [{ reasoning: "A solution is the liquid after dissolving.", marks: 1, markCode: "A" }],
            finalAnswer: "The liquid made when something dissolves",
          },
        },
        {
          id: "cips-u1-dm-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many property pairs can be used to group materials (hard/soft, rough/smooth, bendy/stiff, magnetic)?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "pairs" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Grouping materials", statement: "Four testable property pairs." }],
            steps: [{ reasoning: "There are 4 property pairs.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u1-dm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You stir salt into 4 glasses of water. 3 dissolve fully and 1 leaves grains at the bottom. How many did NOT dissolve fully?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1, unit: "glass" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Dissolving", statement: "Visible grains = not fully dissolved." }],
            steps: [
              { reasoning: "1 glass left grains.", marks: 1, markCode: "M" },
              { reasoning: "So 1 did not dissolve fully.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cips-u1-dm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which surface is ROUGH?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ice" },
            { id: "b", text: "A mirror" },
            { id: "c", text: "Glass" },
            { id: "d", text: "Sandpaper" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rough", statement: "Sandpaper has a rough surface." }],
            steps: [{ reasoning: "Sandpaper is rough; glass, ice, mirror are smooth.", marks: 1, markCode: "A" }],
            finalAnswer: "Sandpaper",
          },
        },
        {
          id: "cips-u1-dm-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things that make dissolving happen faster.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dissolving", statement: "Warm water and stirring speed dissolving." }],
            steps: [
              { reasoning: "Using warm water.", marks: 1, markCode: "M" },
              { reasoning: "Stirring the mixture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Warm water and stirring",
          },
        },
        {
          id: "cips-u1-dm-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why salt does not really 'disappear' when it dissolves in water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dissolving", statement: "Solid breaks into tiny pieces spread through liquid." }],
            steps: [
              { reasoning: "The salt breaks into tiny pieces too small to see.", marks: 1, markCode: "M" },
              { reasoning: "These pieces spread evenly through the water.", marks: 1, markCode: "M" },
              { reasoning: "The salt is still there — you can taste it or evaporate the water to recover it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Salt is still present, just spread invisibly",
          },
        },
        {
          id: "cips-u1-dm-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which material is BENDY?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A ruler" },
            { id: "b", text: "Wood" },
            { id: "c", text: "Glass" },
            { id: "d", text: "Rubber" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Bendy", statement: "Rubber bends easily." }],
            steps: [{ reasoning: "Rubber bends easily; ruler, glass, wood are stiff.", marks: 1, markCode: "A" }],
            finalAnswer: "Rubber",
          },
        },
        {
          id: "cips-u1-dm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 5 materials for magnetism. 2 are attracted to a magnet and 3 are not. What is the total number of magnetic materials found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Magnetic test", statement: "Count attracted materials." }],
            steps: [
              { reasoning: "2 materials were attracted.", marks: 1, markCode: "M" },
              { reasoning: "Total magnetic = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-dm-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why stirring helps sugar dissolve faster in water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dissolving", statement: "Stirring spreads particles faster." }],
            steps: [
              { reasoning: "Stirring mixes the water and sugar together.", marks: 1, markCode: "M" },
              { reasoning: "It spreads sugar particles through the water quicker.", marks: 1, markCode: "M" },
              { reasoning: "So the sugar dissolves faster than without stirring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stirring spreads particles faster → quicker dissolving",
          },
        },
        {
          id: "cips-u1-dm-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do you call the list of properties used to group materials?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A key" },
            { id: "b", text: "A ruler" },
            { id: "c", text: "A menu" },
            { id: "d", text: "A map" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Grouping materials", statement: "A key lists properties and members." }],
            steps: [{ reasoning: "A key lists properties and which materials belong to each.", marks: 1, markCode: "A" }],
            finalAnswer: "A key",
          },
        },
        {
          id: "cips-u1-dm-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name four properties used to group materials. (b) Give an example material for each of hard, soft, magnetic and bendy. (c) What is a solution? (d) What happens when salt dissolves in water? (e) Why doesn't the salt really disappear? (f) What two things make dissolving faster? (g) How can you tell if something has really dissolved? (h) Design a fair test to compare dissolving in cold vs warm water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Materials and dissolving", statement: "Integrated Stage 3 materials answer." }],
            steps: [
              { reasoning: "(a) Hard/soft, rough/smooth, bendy/stiff, magnetic/not.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. wood(hard), sponge(soft), iron(magnetic), rubber(bendy).", marks: 1, markCode: "M" },
              { reasoning: "(c) Liquid formed when a solid dissolves.", marks: 1, markCode: "M" },
              { reasoning: "(d) Salt breaks into tiny pieces spread through water.", marks: 1, markCode: "M" },
              { reasoning: "(e) Still present, just too small to see.", marks: 1, markCode: "M" },
              { reasoning: "(f) Warm water and stirring.", marks: 1, markCode: "M" },
              { reasoning: "(g) Look for remaining solid or test with a filter.", marks: 1, markCode: "M" },
              { reasoning: "(h) Same salt amount, same stirring, same time; only water temperature differs; time which dissolves first.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Properties, examples, solution, dissolving, not disappeared, faster dissolving, test, fair test design.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-dm-notes",
      title: "Materials and dissolving — revision notes",
      summary: "Group by hardness/texture/magnetism; dissolve → solution; warm dissolves faster.",
      sections: [
        { heading: "Properties", body: "Test hard/soft, rough/smooth, bendy/stiff, magnetic — make a key." },
        { heading: "Dissolving", body: "Solid breaks into liquid; warm + stirring speeds it up." },
      ],
    },
  ],
};
