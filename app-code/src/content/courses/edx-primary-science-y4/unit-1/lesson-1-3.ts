import type { Lesson } from "../../../types.ts";

export const lesson143: Lesson = {
  id: "edps4-u1-lesson-1-3",
  code: "1-3",
  title: "Seasonal Adaptations",
  goal: "I CAN describe how animals and plants adapt to seasonal changes.",
  standards: ["Year 4 Science: Seasonal change"],
  vocabulary: [
    {
      term: "Hibernation",
      definition: "Deep sleep through winter to conserve energy.",
    },
    {
      term: "Migration",
      definition: "Seasonal movement to warmer/colder areas.",
    },
    { term: "Dormancy", definition: "Plant resting state in winter." },
    { term: "Estivation", definition: "Summer sleep in hot/dry conditions." },
  ],
  concepts: [
    {
      id: "edps4-u1-animaladapt",
      title: "Animal seasonal adaptations",
      skill: "Describe hibernation, migration and other seasonal behaviours.",
      lesson: {
        sections: [
          {
            heading: "Winter strategies",
            body: "**Hibernation**: bears, hedgehogs sleep through winter (heart rate drops). **Migration**: birds, whales, caribou move to warmer areas. **Thick fur/feathers**: insulation. **Food storage**: squirrels, hamsters hoard food.",
          },
          {
            heading: "Summer strategies",
            body: "Some animals **aestivate** (summer sleep) in hot dry regions. Others change coat colour (arctic fox: white in winter, brown in summer). Some breed timed to food availability.",
          },
        ],
        keyFormulas: [
          { name: "Hibernation", statement: "Winter sleep" },
          { name: "Migration", statement: "Seasonal movement" },
          { name: "Aestivation", statement: "Summer sleep" },
        ],
        workedExample: {
          problem: "Why do arctic foxes change fur colour?",
          solution:
            "White in winter for camouflage in snow; brown in summer to blend with tundra.",
        },
      },
      questions: [
        {
          id: "edps4-u1-aa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is hibernation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing colour" },
              { id: "b", text: "Growing thicker fur" },
              { id: "c", text: "Moving south" },
              { id: "d", text: "Winter sleep to conserve energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hibernation",
                statement: "Winter sleep.",
              },
            ],
            steps: [
              {
                reasoning: "Hibernation = winter sleep.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Winter sleep to conserve energy",
            commonErrors: ["Confused with migration."],
          },
        },
        {
          id: "edps4-u1-aa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which animals migrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bears" },
              { id: "b", text: "Birds" },
              { id: "c", text: "Snakes (some)" },
              { id: "d", text: "Both b and c" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Migration",
                statement: "Birds and some snakes migrate.",
              },
            ],
            steps: [
              { reasoning: "Identify migrants.", marks: 1, markCode: "M" },
              { reasoning: "Answer: birds + snakes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Both birds and some snakes",
            commonErrors: ["Incomplete answer."],
          },
        },
        {
          id: "edps4-u1-aa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why animals migrate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Migration",
                statement: "For food, warmth, breeding.",
              },
            ],
            steps: [
              { reasoning: "Reason given.", marks: 1, markCode: "A" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "To find food, warmer temperatures and suitable breeding grounds as seasons change",
            commonErrors: ["Vague reason."],
          },
        },
        {
          id: "edps4-u1-aa-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare hibernation and migration as winter survival strategies.",
          parts: [
            { label: "a", prompt: "Hibernation description", marks: 1 },
            { label: "b", prompt: "Migration description", marks: 1 },
            { label: "c", prompt: "Similarity", marks: 1 },
            { label: "d", prompt: "Key difference", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Winter strategies",
                statement: "Stay+sleep vs move+stay active.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hibernation described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Migration described.",
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
              "Both survive winter; hibernation stays in place sleeping, migration moves to warmer areas staying active",
            commonErrors: ["No comparison."],
          },
        },
      ],
    },
    {
      id: "edps4-u1-plantadapt",
      title: "Plant seasonal adaptations",
      skill: "Describe how plants respond to seasonal changes.",
      lesson: {
        sections: [
          {
            heading: "Autumn/winter",
            body: "**Deciduous trees** drop leaves (reduce water loss, save energy). **Evergreens** keep leaves (waxy coating protects). **Bulbs/tubers** (tulips, potatoes) store food underground. Seeds remain dormant until spring.",
          },
          {
            heading: "Spring/summer",
            body: "**Germination** triggered by warmth and moisture. **Flowering** timed to pollinators. **Seed dispersal** before autumn. Some plants flower early to avoid competition.",
          },
        ],
        keyFormulas: [
          { name: "Deciduous", statement: "Drops leaves in autumn" },
          { name: "Evergreen", statement: "Keeps leaves year-round" },
          { name: "Dormancy", statement: "Resting state" },
        ],
        workedExample: {
          problem: "Why do deciduous trees drop leaves?",
          solution: "To save water and energy when it's cold and dry.",
        },
      },
      questions: [
        {
          id: "edps4-u1-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do deciduous trees do in autumn?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce fruit" },
              { id: "b", text: "Flower" },
              { id: "c", text: "Grow faster" },
              { id: "d", text: "Drop their leaves" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deciduous",
                statement: "Drops leaves.",
              },
            ],
            steps: [
              { reasoning: "Deciduous = leaf drop.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Drop their leaves",
            commonErrors: ["Wrong behaviour."],
          },
        },
        {
          id: "edps4-u1-pa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do plants store food in bulbs/tubers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To attract animals" },
              { id: "b", text: "To survive winter when photosynthesis stops" },
              { id: "c", text: "To reproduce" },
              { id: "d", text: "To look pretty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storage organs",
                statement: "Food store for winter.",
              },
            ],
            steps: [
              { reasoning: "Recall purpose.", marks: 1, markCode: "M" },
              { reasoning: "Answer: survive winter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To survive winter when photosynthesis stops",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps4-u1-pa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare deciduous and evergreen trees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deciduous vs evergreen",
                statement: "Drop leaves vs keep leaves.",
              },
            ],
            steps: [
              { reasoning: "Deciduous described.", marks: 1, markCode: "A" },
              { reasoning: "Evergreen described.", marks: 1, markCode: "A" },
              { reasoning: "Difference clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deciduous drop leaves in autumn; evergreens keep leaves year-round with waxy coating",
            commonErrors: ["Incomplete comparison."],
          },
        },
        {
          id: "edps4-u1-pa-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a tulip survives winter and grows in spring.",
          parts: [
            { label: "a", prompt: "Autumn/winter behaviour", marks: 1 },
            { label: "b", prompt: "Storage", marks: 1 },
            { label: "c", prompt: "Spring growth", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bulb survival",
                statement: "Stores food underground; sprouts in spring.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Winter described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Storage explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Spring described.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Tulip stores food in bulb underground through winter; in spring warmth triggers growth and flowering",
            commonErrors: ["No storage link."],
          },
        },
      ],
    },
  ],
};
