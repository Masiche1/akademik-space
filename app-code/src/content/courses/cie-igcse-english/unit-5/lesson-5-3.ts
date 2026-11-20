import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciege-u5-lesson-5-3",
  code: "5-3",
  title: "Instructions and Explanatory Texts",
  goal: "I CAN write clear instructions and explanations.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: transactional"],
  vocabulary: [
    { term: "Instructions", definition: "Step-by-step directions for doing something." },
    { term: "Imperative", definition: "Command form verb: 'Add', 'Mix', 'Turn'." },
    { term: "Sequence words", definition: "First, then, next, finally — ordering steps." },
    { term: "Explanation", definition: "Text that makes something clear or understandable." },
    { term: "Procedural", definition: "Describing a process or procedure." },
  ],
  concepts: [
    {
      id: "ciege-u5-s3-instructions",
      title: "Writing instructions",
      skill: "Write clear step-by-step instructions at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Instruction features",
            body: "Use imperative verbs ('Add', 'Turn'), sequence words ('First', 'Then', 'Finally'), and numbered or bullet-point steps. Be precise and concise — assume nothing.",
          },
          {
            heading: "Clarity",
            body: "Each step should be one clear action. Avoid ambiguity: 'Put the lid on' not 'Do the lid thing'. Include safety warnings if needed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the first two steps for making a cup of tea.",
          solution: "'1. Boil the kettle. 2. Place a tea bag in the cup and pour the boiling water over it.'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s3-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What verb form is used in instructions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Past tense" }, { id: "b", text: "Imperative (command)" }, { id: "c", text: "Future tense" }, { id: "d", text: "Conditional" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Imperative", statement: "Command verbs." }],
            steps: [
              { reasoning: "Instructions use imperative verbs like 'Add', 'Mix'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Imperative",
          },
        },
        {
          id: "ciege-u5-s3-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the first step for instructions on how to make toast.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Instruction step", statement: "Clear action." }],
            steps: [
              { reasoning: "The step is a clear action.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses imperative form.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Place the bread in the toaster.",
          },
        },
        {
          id: "ciege-u5-s3-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two steps for instructions on how to plant a seed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Instruction writing", statement: "Sequential, clear." }],
            steps: [
              { reasoning: "Both steps are clear actions.", marks: 1, markCode: "AO2" },
              { reasoning: "They are in logical order.", marks: 1, markCode: "AO2" },
              { reasoning: "Imperative verbs used.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two instruction steps",
          },
        },
        {
          id: "ciege-u5-s3-in-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a set of instructions (3 steps) for making a sandwich.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full instructions", statement: "Complete, clear steps." }],
            steps: [
              { reasoning: "Three clear sequential steps.", marks: 1, markCode: "AO2" },
              { reasoning: "Imperative verbs used throughout.", marks: 1, markCode: "AO2" },
              { reasoning: "Steps are logical and complete.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-step instructions",
          },
        },
      ],
    },
    {
      id: "ciege-u5-s3-explain",
      title: "Explanatory texts",
      skill: "Write clear explanations of processes and concepts.",
      lesson: {
        sections: [
          {
            heading: "Explaining processes",
            body: "Use present tense for facts ('Water evaporates when heated'). Explain cause and effect clearly. Use technical terms where needed but define them.",
          },
          {
            heading: "Structure",
            body: "Introduction: what you're explaining. Body: step-by-step or cause-effect development. Conclusion: summary or significance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain how rain forms in two sentences.",
          solution: "'Water evaporates from the sea and rises as water vapour. When the vapour cools, it condenses into droplets that fall as rain.'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s3-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What tense is used in explanatory writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Past" }, { id: "b", text: "Present" }, { id: "c", text: "Future" }, { id: "d", text: "Any tense" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Present tense", statement: "Facts in present." }],
            steps: [
              { reasoning: "Explanations use present tense for facts.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Present",
          },
        },
        {
          id: "ciege-u5-s3-ex-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence explaining what photosynthesis is.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explanation", statement: "Clear definition." }],
            steps: [
              { reasoning: "The sentence defines photosynthesis.", marks: 1, markCode: "AO2" },
              { reasoning: "It is clear and accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One explanatory sentence",
          },
        },
        {
          id: "ciege-u5-s3-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences explaining how a volcano erupts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Process explanation", statement: "Cause and effect." }],
            steps: [
              { reasoning: "The sentences explain the process.", marks: 1, markCode: "AO2" },
              { reasoning: "Cause and effect are clear.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two explanatory sentences",
          },
        },
        {
          id: "ciege-u5-s3-ex-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a paragraph explaining how recycling helps the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explanatory paragraph", statement: "Clear, factual, logical." }],
            steps: [
              { reasoning: "The paragraph explains the process clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses facts and present tense.", marks: 1, markCode: "AO2" },
              { reasoning: "It could include cause-effect links.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Explanatory paragraph",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u5-s3-trans-notes",
      title: "Instructions and explanations — revision notes",
      summary: "Imperative verbs, sequence words, present tense, cause-effect.",
      sections: [
        { heading: "Instructions", body: "Use imperative verbs, number steps, sequence words (first, then, finally). Be precise." },
        { heading: "Explanations", body: "Present tense for facts. Explain cause and effect clearly. Define technical terms." },
      ],
    },
  ],
};
