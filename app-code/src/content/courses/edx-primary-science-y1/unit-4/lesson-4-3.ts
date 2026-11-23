import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edps1-u4-lesson-4-3",
  code: "4-3",
  title: "Safety and Being a Scientist",
  goal: "I CAN work safely and know what scientists do.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Hazard", definition: "Something that could cause harm." },
    { term: "Risk", definition: "The chance of harm happening." },
    { term: "Safety rule", definition: "A rule that keeps you safe." },
    { term: "Equipment", definition: "Tools scientists use." },
  ],
  concepts: [
    {
      id: "edps1-u4-safety",
      title: "Staying safe in science",
      skill: "Identify hazards and follow safety rules.",
      lesson: {
        sections: [
          {
            heading: "Hazards and risks",
            body: "A hazard is anything that could hurt you: hot things, sharp objects, chemicals, heavy items, trip hazards. Risk is how likely harm is. Scientists always check for hazards first and follow safety rules — goggles for eye protection, gloves for chemicals, careful handling of hot or sharp things.",
          },
          {
            heading: "Safety habits",
            body: "Always: listen to instructions, wear safety gear, wash hands after handling materials, tell an adult about spills or accidents, never taste or smell unknown substances, and put equipment away safely. Safety comes first in every investigation.",
          },
        ],
        keyFormulas: [
          {
            name: "Safety",
            statement: "Check hazards + follow rules + wear protection",
          },
        ],
        workedExample: {
          problem:
            "What safety rule applies when using a magnifying glass in sunlight?",
          solution:
            "Never focus sunlight through a magnifying glass — it can start fires and damage eyes.",
        },
      },
      questions: [
        {
          id: "edps1-u4-sf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a hazard?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A safety rule" },
              { id: "b", text: "Something that could cause harm" },
              { id: "c", text: "A science tool" },
              { id: "d", text: "A result" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hazard",
                statement: "Potential harm.",
              },
            ],
            steps: [
              { reasoning: "Hazard = danger source.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Could cause harm",
            commonErrors: ["Confusing with risk."],
          },
        },
        {
          id: "edps1-u4-sf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When should you wear safety goggles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When reading a book" },
              {
                id: "b",
                text: "When using chemicals or tools that could splash",
              },
              { id: "c", text: "Always, even at lunch" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Safety gear",
                statement: "Goggles for eye protection.",
              },
            ],
            steps: [
              {
                reasoning: "Goggles protect eyes from splashes.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Chemicals/splashing tools",
            commonErrors: ["Over or under-use."],
          },
        },
        {
          id: "edps1-u4-sf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three safety rules for an investigation with hot water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Safety rules",
                statement: "Three valid rules.",
              },
            ],
            steps: [
              {
                reasoning: "Adult supervision / careful handling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wear gloves or use tools.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Don't splash or touch hot containers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Three hot-water safety rules",
            commonErrors: ["Generic or unsafe advice."],
          },
        },
        {
          id: "edps1-u4-sf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do scientists always record what they did, even if the experiment 'failed'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scientific method",
                statement: "All results have value.",
              },
            ],
            steps: [
              {
                reasoning: "'Failed' tests still give information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Records let others check and learn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Science builds on all evidence, not just successes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "All results teach + allow checking",
            commonErrors: ["Thinking only success matters."],
          },
        },
      ],
    },
    {
      id: "edps1-u4-scientist",
      title: "What Scientists Do",
      skill: "Understand the role of scientists and scientific careers.",
      lesson: {
        sections: [
          {
            heading: "Scientists at work",
            body: "Scientists ask questions about the world and test answers through observation and experiments. They work in many fields: biologists study living things, chemists study materials, physicists study forces and energy, geologists study rocks and Earth. All use the same scientific method.",
          },
          {
            heading: "Science careers",
            body: "Scientists might work in labs, hospitals, farms, weather stations, museums or space. They might discover medicines, improve crops, predict weather or explore space. Science skills — observing, measuring, analysing — are useful in many jobs.",
          },
        ],
        keyFormulas: [
          {
            name: "Science careers",
            statement: "Biology + chemistry + physics + Earth science",
          },
        ],
        workedExample: {
          problem: "What does a marine biologist study?",
          solution: "Sea creatures and ocean life — a branch of biology.",
        },
      },
      questions: [
        {
          id: "edps1-u4-sci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do scientists do first when investigating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write a book" },
              { id: "b", text: "Ask a question" },
              { id: "c", text: "Buy equipment" },
              { id: "d", text: "Give a speech" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Scientific method",
                statement: "Question first.",
              },
            ],
            steps: [
              {
                reasoning: "Science starts with a question.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Ask a question",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps1-u4-sci-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which scientist studies rocks and the Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biologist" },
              { id: "b", text: "Chemist" },
              { id: "c", text: "Geologist" },
              { id: "d", text: "Physicist" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Science fields",
                statement: "Geology = rocks/Earth.",
              },
            ],
            steps: [
              { reasoning: "Geologists study Earth.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(c)** Geologist",
            commonErrors: ["Wrong field."],
          },
        },
        {
          id: "edps1-u4-sci-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two places scientists might work and what they study there.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Science careers",
                statement: "Two valid examples.",
              },
            ],
            steps: [
              {
                reasoning: "Lab/hospital/space/weather etc.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "What is studied there.", marks: 1, markCode: "M" },
              {
                reasoning: "Clear link between place and work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Two science work examples",
            commonErrors: ["Vague answers."],
          },
        },
        {
          id: "edps1-u4-sci-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do you think scientists share their results with other scientists? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Science community",
                statement: "Verification + building knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Others can check if results are correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds on each other's work.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Speeds up discoveries.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Verification + building knowledge",
            commonErrors: ["One reason only."],
          },
        },
      ],
    },
  ],
};
