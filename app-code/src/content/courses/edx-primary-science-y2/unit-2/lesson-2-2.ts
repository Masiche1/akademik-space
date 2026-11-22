import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "edps2-u2-lesson-2-2",
  code: "2-2",
  title: "Grouping Materials",
  goal: "I CAN group materials by their properties and sources.",
  standards: ["Year 2 Science: Materials"],
  vocabulary: [
    {
      term: "Natural material",
      definition: "Comes from nature: wood, wool, leather, stone.",
    },
    {
      term: "Manufactured material",
      definition: "Made by people: plastic, metal, glass.",
    },
    { term: "Transparent/opaque", definition: "See through / blocks light." },
    { term: "Magnetic", definition: "Attracted to magnets: iron, steel." },
  ],
  concepts: [
    {
      id: "edps2-u2-grouping",
      title: "Grouping by properties",
      skill: "Group materials by transparency, absorbency and source.",
      lesson: {
        sections: [
          {
            heading: "By source",
            body: "**Natural**: wood (trees), wool (sheep), leather (animals), stone (rocks), cotton (plants). **Manufactured**: plastic (oil), metal (ores), glass (sand), paper (wood pulp).",
          },
          {
            heading: "By properties",
            body: "Group by: transparent (glass, clear plastic) vs opaque (wood, fabric); waterproof (plastic, glass) vs absorbent (paper, fabric); magnetic (iron, steel) vs non-magnetic (plastic, wood).",
          },
        ],
        keyFormulas: [
          { name: "Natural", statement: "From nature" },
          { name: "Manufactured", statement: "Made by people" },
          { name: "Magnetic", statement: "Iron and steel" },
        ],
        workedExample: {
          problem: "Group: wood, plastic, wool, metal.",
          solution: "Natural: wood, wool; manufactured: plastic, metal.",
        },
      },
      questions: [
        {
          id: "edps2-u2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a natural material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wood" },
              { id: "b", text: "Metal" },
              { id: "c", text: "Plastic" },
              { id: "d", text: "Glass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural material",
                statement: "From nature.",
              },
            ],
            steps: [{ reasoning: "Wood is natural.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Wood",
            commonErrors: ["Choosing manufactured."],
          },
        },
        {
          id: "edps2-u2-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which material is magnetic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wood" },
              { id: "b", text: "Glass" },
              { id: "c", text: "Iron" },
              { id: "d", text: "Plastic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnetic",
                statement: "Iron/steel are magnetic.",
              },
            ],
            steps: [
              { reasoning: "Identify magnetic.", marks: 1, markCode: "M" },
              { reasoning: "Answer: iron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Iron",
            commonErrors: ["Wrong material."],
          },
        },
        {
          id: "edps2-u2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Group these into natural and manufactured: cotton, plastic, leather, glass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material source",
                statement:
                  "Natural: cotton, leather; manufactured: plastic, glass.",
              },
            ],
            steps: [
              { reasoning: "Natural correct.", marks: 1, markCode: "A" },
              { reasoning: "Manufactured correct.", marks: 1, markCode: "A" },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Natural: cotton, leather; manufactured: plastic, glass",
            commonErrors: ["Wrong grouping."],
          },
        },
        {
          id: "edps2-u2-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort these into transparent and opaque: clear plastic, wood, glass, fabric, clear film.",
          parts: [
            { label: "a", prompt: "Transparent", marks: 1 },
            { label: "b", prompt: "Opaque", marks: 1 },
            { label: "c", prompt: "Property tested", marks: 1 },
            { label: "d", prompt: "Explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transparency",
                statement: "clear plastic, glass, clear film = transparent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Transparent correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Opaque correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Property identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Transparent: clear plastic, glass, clear film; opaque: wood, fabric",
            commonErrors: ["Wrong grouping."],
          },
        },
      ],
    },
    {
      id: "edps2-u2-change",
      title: "Changing materials",
      skill: "Describe ways materials can be changed: cut, bend, melt, mix.",
      lesson: {
        sections: [
          {
            heading: "Changing materials",
            body: "We can change materials: **cut** (wood, paper, fabric), **bend** (plastic, metal), **melt** (chocolate, wax, some plastics), **mix** (flour + water = dough), **shape** (clay, playdough).",
          },
          {
            heading: "Reversible vs permanent",
            body: "Some changes can be undone: bending paper slightly, melting chocolate then cooling (reversible). Some are permanent: cutting wood, burning paper, mixing chemicals.",
          },
        ],
        keyFormulas: [
          { name: "Cut/bend", statement: "Change shape" },
          { name: "Melt/mix", statement: "Change state/composition" },
          { name: "Reversible", statement: "Can be undone" },
        ],
        workedExample: {
          problem: "Is melting chocolate reversible?",
          solution: "Yes — it solidifies again when cooled.",
        },
      },
      questions: [
        {
          id: "edps2-u2-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a way to change a material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cut it" },
              { id: "b", text: "Colour it" },
              { id: "c", text: "Hide it" },
              { id: "d", text: "Rename it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Changing materials",
                statement: "Cut changes shape.",
              },
            ],
            steps: [{ reasoning: "Cut = change.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cut it",
            commonErrors: ["Wrong change."],
          },
        },
        {
          id: "edps2-u2-ch-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is melting chocolate reversible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No" },
              { id: "b", text: "Only sometimes" },
              { id: "c", text: "Yes — it solidifies again" },
              { id: "d", text: "Depends on colour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reversible change",
                statement: "Melting can be reversed by cooling.",
              },
            ],
            steps: [
              { reasoning: "Identify reversibility.", marks: 1, markCode: "M" },
              { reasoning: "Answer: yes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Yes — it solidifies again",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edps2-u2-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one reversible and one permanent change to materials.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Changes",
                statement: "Reversible: melt/bend; permanent: cut/burn.",
              },
            ],
            steps: [
              { reasoning: "Reversible given.", marks: 1, markCode: "A" },
              { reasoning: "Permanent given.", marks: 1, markCode: "A" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Bending paper (reversible); cutting wood (permanent)'",
            commonErrors: ["Wrong classification."],
          },
        },
        {
          id: "edps2-u2-ch-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how we could change a lump of clay into a useful object.",
          parts: [
            { label: "a", prompt: "Ways to change clay", marks: 1 },
            { label: "b", prompt: "Steps described", marks: 1 },
            { label: "c", prompt: "Useful object example", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Changing materials",
                statement: "Shape/mould clay into object.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Methods given.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Steps clear.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Example given.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Clay can be shaped/moulded while soft, then fired to harden — e.g. a bowl or pot",
            commonErrors: ["Incomplete or no example."],
          },
        },
      ],
    },
  ],
};
