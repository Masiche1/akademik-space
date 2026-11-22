import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edps2-u1-lesson-1-3",
  code: "1-3",
  title: "Plants: Parts, Needs and Growth",
  goal: "I CAN describe plant parts, what plants need, and how they grow.",
  standards: ["Year 2 Science: Plants"],
  vocabulary: [
    { term: "Germination", definition: "When a seed starts to grow." },
    {
      term: "Pollination",
      definition: "Transfer of pollen to fertilise flowers.",
    },
    {
      term: "Seed dispersal",
      definition: "How seeds spread away from parent plant.",
    },
    {
      term: "Photosynthesis",
      definition: "Process where leaves make food using sunlight.",
    },
  ],
  concepts: [
    {
      id: "edps2-u1-parts",
      title: "Plant parts and needs",
      skill: "Identify plant parts and their functions.",
      lesson: {
        sections: [
          {
            heading: "Plant parts",
            body: "**Roots**: absorb water, anchor plant. **Stem**: supports plant, carries water/nutrients. **Leaves**: make food via photosynthesis. **Flowers**: produce seeds. **Fruit**: protects and carries seeds.",
          },
          {
            heading: "What plants need",
            body: "Plants need: **sunlight** (food), **water** (roots absorb), **air** (carbon dioxide), **soil nutrients**. Different plants need different amounts — cacti need little water, water lilies need lots.",
          },
        ],
        keyFormulas: [
          { name: "Roots/stem", statement: "Water / support" },
          { name: "Leaves", statement: "Make food" },
          { name: "Flowers/fruit", statement: "Seeds / protect seeds" },
        ],
        workedExample: {
          problem: "What does photosynthesis need?",
          solution:
            "Sunlight, water and carbon dioxide — leaves produce food (glucose) and oxygen.",
        },
      },
      questions: [
        {
          id: "edps2-u1-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant part makes food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flowers" },
              { id: "b", text: "Stem" },
              { id: "c", text: "Roots" },
              { id: "d", text: "Leaves" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis",
                statement: "Leaves make food.",
              },
            ],
            steps: [
              { reasoning: "Leaves make food.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Leaves",
            commonErrors: ["Wrong part."],
          },
        },
        {
          id: "edps2-u1-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a plant need most for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind" },
              { id: "b", text: "Soil only" },
              { id: "c", text: "Sunlight" },
              { id: "d", text: "Cold" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis",
                statement: "Needs sunlight.",
              },
            ],
            steps: [
              { reasoning: "Identify need.", marks: 1, markCode: "M" },
              { reasoning: "Answer: sunlight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sunlight",
            commonErrors: ["Wrong need."],
          },
        },
        {
          id: "edps2-u1-pt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two ways seeds are dispersed (spread).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seed dispersal",
                statement: "Wind, animals, water, explosion.",
              },
            ],
            steps: [
              { reasoning: "Method 1.", marks: 1, markCode: "A" },
              { reasoning: "Method 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Wind; animals'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps2-u1-pt-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a plant gets water from soil to leaves.",
          parts: [
            { label: "a", prompt: "Roots' role", marks: 1 },
            { label: "b", prompt: "Stem's role", marks: 1 },
            { label: "c", prompt: "Path described", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water transport",
                statement: "Roots absorb → stem carries → leaves use.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Roots absorb.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Stem carries.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Path clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Roots absorb water from soil; stem carries it up to leaves",
            commonErrors: ["Incomplete path."],
          },
        },
      ],
    },
    {
      id: "edps2-u1-growth",
      title: "Growing and seasonal change",
      skill: "Describe plant growth and seasonal changes.",
      lesson: {
        sections: [
          {
            heading: "Growth stages",
            body: "**Seed** → **germination** (root/shoot emerge) → **seedling** → **adult plant** → **flower** → **fruit with seeds** → seeds disperse → new plants. We can measure growth over weeks.",
          },
          {
            heading: "Seasonal change",
            body: "Plants respond to seasons: spring = new growth/flowers; summer = full growth/fruits; autumn = leaves change colour and fall; winter = dormant (resting). Deciduous trees lose leaves; evergreens stay green.",
          },
        ],
        keyFormulas: [
          {
            name: "Growth stages",
            statement: "Seed → seedling → adult → flower",
          },
          { name: "Dormant", statement: "Resting in winter" },
          { name: "Deciduous", statement: "Loses leaves in autumn" },
        ],
        workedExample: {
          problem: "What happens to deciduous trees in autumn?",
          solution:
            "Leaves change colour and fall off; tree rests until spring.",
        },
      },
      questions: [
        {
          id: "edps2-u1-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is germination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When a seed starts to grow" },
              { id: "b", text: "When fruit ripens" },
              { id: "c", text: "A flower opening" },
              { id: "d", text: "When leaves fall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Germination",
                statement: "Seed starts growing.",
              },
            ],
            steps: [
              {
                reasoning: "Germination = seed growth.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** When a seed starts to grow",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps2-u1-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to deciduous trees in autumn?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They grow faster" },
              { id: "b", text: "Nothing changes" },
              { id: "c", text: "Leaves change colour and fall" },
              { id: "d", text: "They produce flowers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seasonal change",
                statement: "Leaves fall in autumn.",
              },
            ],
            steps: [
              { reasoning: "Identify change.", marks: 1, markCode: "M" },
              { reasoning: "Answer: leaves fall.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Leaves change colour and fall",
            commonErrors: ["Wrong change."],
          },
        },
        {
          id: "edps2-u1-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these: flower, seed, seedling, adult plant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth order",
                statement: "seed → seedling → adult → flower.",
              },
            ],
            steps: [
              { reasoning: "Seed first.", marks: 1, markCode: "A" },
              { reasoning: "Seedling next.", marks: 1, markCode: "A" },
              { reasoning: "Adult then flower.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "seed → seedling → adult plant → flower",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps2-u1-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do some plants lose their leaves in winter? Explain the advantage.",
          parts: [
            { label: "a", prompt: "Why lose leaves", marks: 1 },
            { label: "b", prompt: "Energy saving", marks: 1 },
            { label: "c", prompt: "Survival benefit", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dormancy",
                statement: "Losing leaves saves energy in winter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Reason given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Energy saved.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Benefit explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Losing leaves saves energy — no need to maintain them in cold/dark winter",
            commonErrors: ["No benefit or incomplete."],
          },
        },
      ],
    },
  ],
};
