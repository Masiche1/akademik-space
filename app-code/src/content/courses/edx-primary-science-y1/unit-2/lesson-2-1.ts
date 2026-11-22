import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "edps1-u2-lesson-2-1",
  code: "2-1",
  title: "Everyday Materials",
  goal: "I CAN identify and sort everyday materials by their properties.",
  standards: ["Year 1 Science: Materials"],
  vocabulary: [
    {
      term: "Material",
      definition:
        "What something is made of: wood, metal, plastic, glass, fabric.",
    },
    {
      term: "Property",
      definition: "A feature of a material: hard, soft, bendy, waterproof.",
    },
    {
      term: "Natural material",
      definition: "Comes from nature: wood, wool, leather.",
    },
    {
      term: "Manufactured material",
      definition: "Made by people: plastic, metal, glass.",
    },
  ],
  concepts: [
    {
      id: "edps1-u2-materials",
      title: "Identifying materials",
      skill: "Name materials and describe their properties.",
      lesson: {
        sections: [
          {
            heading: "Common materials",
            body: "**Wood**: hard, strong, from trees. **Metal**: hard, shiny, strong. **Plastic**: light, waterproof, bendy. **Glass**: hard, transparent, breaks easily. **Fabric**: soft, flexible, made from fibres.",
          },
          {
            heading: "Properties",
            body: "Materials have properties: **hard/soft**, **bendy/rigid**, **transparent/opaque**, **waterproof/absorbent**, **light/heavy**. We choose materials for jobs based on properties.",
          },
        ],
        keyFormulas: [
          { name: "Hard/soft", statement: "Can it be scratched?" },
          { name: "Bendy/rigid", statement: "Can it bend?" },
          { name: "Waterproof", statement: "Keeps water out" },
        ],
        workedExample: {
          problem: "Why is a raincoat made of plastic?",
          solution: "Plastic is waterproof — keeps rain out.",
        },
      },
      questions: [
        {
          id: "edps1-u2-ma-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A shape" },
              { id: "b", text: "A size" },
              { id: "c", text: "What something is made of" },
              { id: "d", text: "A colour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Material",
                statement: "What it's made of.",
              },
            ],
            steps: [
              { reasoning: "Material = substance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** What something is made of",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps1-u2-ma-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which material is waterproof?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic" },
              { id: "b", text: "Paper" },
              { id: "c", text: "Sponge" },
              { id: "d", text: "Cloth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Properties",
                statement: "Plastic is waterproof.",
              },
            ],
            steps: [
              { reasoning: "Identify waterproof.", marks: 1, markCode: "M" },
              { reasoning: "Answer: plastic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Plastic",
            commonErrors: ["Wrong material."],
          },
        },
        {
          id: "edps1-u2-ma-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two properties of wood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material properties",
                statement: "Hard, strong, from trees, burnable.",
              },
            ],
            steps: [
              { reasoning: "Property 1.", marks: 1, markCode: "A" },
              { reasoning: "Property 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Hard; strong'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u2-ma-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Match materials to uses: plastic for a window, metal for a spoon, glass for a raincoat, fabric for a mirror.",
          parts: [
            { label: "a", prompt: "Window", marks: 1 },
            { label: "b", prompt: "Spoon", marks: 1 },
            { label: "c", prompt: "Raincoat", marks: 1 },
            { label: "d", prompt: "Mirror", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement:
                  "Window=glass; spoon=metal; raincoat=plastic/fabric; mirror=glass.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Glass for window.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Metal for spoon.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Plastic/fabric for raincoat.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Glass for mirror.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "glass=window/mirror, metal=spoon, plastic=raincoat",
            commonErrors: ["Wrong material choices."],
          },
        },
      ],
    },
    {
      id: "edps1-u2-uses",
      title: "Choosing materials",
      skill: "Explain why certain materials are chosen for objects.",
      lesson: {
        sections: [
          {
            heading: "Right material for the job",
            body: "We choose materials based on properties: windows need **transparent** (glass), umbrellas need **waterproof** (plastic/fabric), hammers need **hard and strong** (metal/wood handle), teddy bears need **soft** (fabric).",
          },
          {
            heading: "Changing materials",
            body: "Materials can be changed: wood can be cut, sanded, painted. Plastic can be melted and reshaped. Fabric can be sewn. We change materials to make useful objects.",
          },
        ],
        keyFormulas: [
          { name: "Match properties", statement: "Material suits purpose" },
          { name: "Change shape", statement: "Cut, bend, melt, sew" },
          { name: "Purpose", statement: "What the object does" },
        ],
        workedExample: {
          problem: "Why is a frying pan made of metal?",
          solution: "Metal conducts heat well and is strong.",
        },
      },
      questions: [
        {
          id: "edps1-u2-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is a window made of glass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's soft" },
              { id: "b", text: "It's cheap" },
              { id: "c", text: "It's bendy" },
              { id: "d", text: "It's transparent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement: "Transparent lets light through.",
              },
            ],
            steps: [
              { reasoning: "Property matches need.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** It's transparent",
            commonErrors: ["Wrong property."],
          },
        },
        {
          id: "edps1-u2-ch-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is an umbrella made of waterproof material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It keeps rain out" },
              { id: "b", text: "It's soft" },
              { id: "c", text: "It's colourful" },
              { id: "d", text: "It's cheap" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement: "Waterproof = keeps dry.",
              },
            ],
            steps: [
              { reasoning: "Property identified.", marks: 1, markCode: "M" },
              { reasoning: "Answer: keeps rain out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It keeps rain out",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps1-u2-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a spoon made of metal rather than wood?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement: "Metal is strong, hard, hygienic.",
              },
            ],
            steps: [
              { reasoning: "Property identified.", marks: 1, markCode: "M" },
              { reasoning: "Reason explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Metal is strong, hard and hygienic — better for eating",
            commonErrors: ["No property link."],
          },
        },
        {
          id: "edps1-u2-ch-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design: What material would you choose for a kite and why?",
          parts: [
            { label: "a", prompt: "Material chosen", marks: 1 },
            { label: "b", prompt: "Properties needed", marks: 1 },
            { label: "c", prompt: "Why it works", marks: 1 },
            { label: "d", prompt: "Alternative material", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement: "Light, strong fabric/plastic; properties match.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Material chosen.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Properties identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Justification given.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Alternative considered.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Light, strong fabric — needs to catch wind but not be heavy'",
            commonErrors: ["Poor choice or no reasoning."],
          },
        },
      ],
    },
  ],
};
