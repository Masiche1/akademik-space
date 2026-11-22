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
            { id: "a", text: "Imperative (command)" },
            { id: "b", text: "Past tense" },
            { id: "c", text: "Future tense" },
            { id: "d", text: "Conditional" },
          ], correctChoiceId: "a" },
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
        {
          id: "ciege-u5-s3-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which verb form is used in instructions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Passive voice" },
            { id: "b", text: "Future tense" },
            { id: "c", text: "Imperative (command)" },
            { id: "d", text: "Past tense" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Imperative", statement: "Command verbs." }],
            steps: [
              { reasoning: "Instructions use imperative verbs like 'Add', 'Mix', 'Turn'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Imperative",
          },
        },
        {
          id: "ciege-u5-s3-in-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In \"Boil the water. Add the pasta.\", how many sentences and how many imperative verbs are there?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 2 },
            { label: "Imperative verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "convention", name: "Imperative", statement: "Command verbs." }],
            steps: [
              { reasoning: "Two sentences — 'Boil...' and 'Add...'.", marks: 1, markCode: "AO2" },
              { reasoning: "'Boil' and 'Add' are the 2 imperative verbs.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 sentences, 2 imperative verbs",
          },
        },
        {
          id: "ciege-u5-s3-in-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should instructions use sequence words like 'first', 'then', 'finally'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To guide the reader through the steps in order" },
            { id: "b", text: "To sound formal" },
            { id: "c", text: "To fill space" },
            { id: "d", text: "To confuse the reader" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sequence words", statement: "Order steps clearly." }],
            steps: [
              { reasoning: "Sequence words tell the reader the order — essential for instructions.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Guide reader through steps",
          },
        },
        {
          id: "ciege-u5-s3-in-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many words are in \"First boil the kettle\"?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 4 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words accurately." }],
            steps: [
              { reasoning: "First / boil / the / kettle = 4 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciege-u5-s3-in-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which instruction is the clearest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Use stuff." },
            { id: "b", text: "Crack two eggs into the bowl." },
            { id: "c", text: "Do the thing with it." },
            { id: "d", text: "Handle appropriately." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Clarity", statement: "Precise, unambiguous steps." }],
            steps: [
              { reasoning: "'Crack two eggs into the bowl' is specific and unambiguous — clear instruction.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Crack two eggs into the bowl.",
          },
        },
        {
          id: "ciege-u5-s3-in-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"1. Chop the onion. 2. Fry it gently.\", how many steps and how many imperative verbs are there?",
          response: { type: "numeric", parts: [
            { label: "Steps", answer: 2 },
            { label: "Imperative verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "convention", name: "Imperative", statement: "Command verbs." }],
            steps: [
              { reasoning: "Two numbered steps — 2.", marks: 1, markCode: "AO2" },
              { reasoning: "'Chop' and 'Fry' are the 2 imperative verbs.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 steps, 2 imperative verbs",
          },
        },
        {
          id: "ciege-u5-s3-in-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should instructions include safety warnings?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To look professional" },
            { id: "b", text: "Because some steps involve danger" },
            { id: "c", text: "To fill space" },
            { id: "d", text: "To scare the reader" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Safety", statement: "Warn about hazards." }],
            steps: [
              { reasoning: "Warnings protect the user when steps involve heat, sharp tools or chemicals.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Some steps involve danger",
          },
        },
        {
          id: "ciege-u5-s3-in-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might instructions use numbered lists instead of paragraphs?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To make it longer" },
            { id: "b", text: "To make each step easy to find and follow" },
            { id: "c", text: "To look neat" },
            { id: "d", text: "Because they are required" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Instruction layout", statement: "Numbered steps aid clarity." }],
            steps: [
              { reasoning: "Numbered lists separate each action clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "The reader can follow and check off steps easily — clearer than paragraphs.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Easy to find and follow",
          },
        },
        {
          id: "ciege-u5-s3-in-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"Add 200g flour and 2 eggs\", how many numbers and how many nouns are there?",
          response: { type: "numeric", parts: [
            { label: "Numbers", answer: 2 },
            { label: "Nouns", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count numbers and nouns." }],
            steps: [
              { reasoning: "200 and 2 are the two numbers.", marks: 1, markCode: "AO2" },
              { reasoning: "Flour and eggs are the two nouns — 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 numbers, 2 nouns",
          },
        },
        {
          id: "ciege-u5-s3-in-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should each step in a set of instructions contain?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dialogue" },
            { id: "b", text: "One clear action" },
            { id: "c", text: "Two actions" },
            { id: "d", text: "Opinions" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Clarity", statement: "One action per step." }],
            steps: [
              { reasoning: "Each step should be a single clear action — no ambiguity.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One clear action",
          },
        },
        {
          id: "ciege-u5-s3-in-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many verbs are in \"Mix the flour, add the milk and stir\"?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action word." }],
            steps: [
              { reasoning: "Mix, add and stir — 3 verbs.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u5-s3-in-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should instructions 'assume nothing' about the reader?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Because readers are lazy" },
            { id: "b", text: "Because every step must be explicit to avoid mistakes" },
            { id: "c", text: "Because readers know the basics" },
            { id: "d", text: "To make it longer" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Clarity", statement: "Explicit steps prevent errors." }],
            steps: [
              { reasoning: "If a step is vague, the reader may do it wrong.", marks: 1, markCode: "AO2" },
              { reasoning: "Explicit instructions ensure everyone can follow them — assume nothing.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Every step must be explicit",
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
            { id: "a", text: "Present" },
            { id: "b", text: "Any tense" },
            { id: "c", text: "Future" },
            { id: "d", text: "Past" },
          ], correctChoiceId: "a" },
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
        {
          id: "ciege-u5-s3-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What tense is typically used in explanatory writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Future" },
            { id: "b", text: "Present" },
            { id: "c", text: "Past" },
            { id: "d", text: "Any tense" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Present tense", statement: "Facts in present tense." }],
            steps: [
              { reasoning: "Explanations state facts — present tense is standard.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Present",
          },
        },
        {
          id: "ciege-u5-s3-ex-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many words are in \"Water boils at 100 degrees\"?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 5 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words accurately." }],
            steps: [
              { reasoning: "Water / boils / at / 100 / degrees = 5 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciege-u5-s3-ex-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should explanations define technical terms?",
          response: { type: "mcq", choices: [
            { id: "a", text: "So the reader can understand" },
            { id: "b", text: "To look clever" },
            { id: "c", text: "It is required" },
            { id: "d", text: "To make it longer" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Clarity", statement: "Define terms for the reader." }],
            steps: [
              { reasoning: "Unfamiliar terms confuse readers — defining them aids understanding.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "So the reader can understand",
          },
        },
        {
          id: "ciege-u5-s3-ex-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sequence words are in \"First the water heats. Then it evaporates.\"?",
          response: { type: "numeric", parts: [
            { label: "Sequence words", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequence words", statement: "First, then order events." }],
            steps: [
              { reasoning: "'First' and 'Then' are the 2 sequence words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u5-s3-ex-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What structure should an explanation have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Title, author, date" },
            { id: "b", text: "Question, answer, opinion" },
            { id: "c", text: "Beginning, middle, end" },
            { id: "d", text: "Introduction, body, conclusion" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Explanatory structure", statement: "Intro, body, conclusion." }],
            steps: [
              { reasoning: "An explanation introduces the topic, develops it, and concludes.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Introduction, body, conclusion",
          },
        },
        {
          id: "ciege-u5-s3-ex-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"Plants need sunlight and water to grow\", how many words and how many verbs are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 7 },
            { label: "Verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and verbs." }],
            steps: [
              { reasoning: "Plants / need / sunlight / and / water / to / grow = 7 words.", marks: 1, markCode: "AO2" },
              { reasoning: "'Need' and 'grow' are the 2 verbs.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "7 words, 2 verbs",
          },
        },
        {
          id: "ciege-u5-s3-ex-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do explanations use cause-and-effect language?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To make it longer" },
            { id: "b", text: "To confuse the reader" },
            { id: "c", text: "To show how one thing leads to another" },
            { id: "d", text: "To fill space" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cause and effect", statement: "Shows relationships." }],
            steps: [
              { reasoning: "Cause-effect links show why things happen — the core of explanation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Show how things relate",
          },
        },
        {
          id: "ciege-u5-s3-ex-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does an explanation differ from a set of instructions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Explanations are always shorter" },
            { id: "b", text: "Instructions use present tense" },
            { id: "c", text: "They are the same" },
            { id: "d", text: "An explanation gives reasons; instructions give steps" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Explanation vs instructions", statement: "Reasons vs steps." }],
            steps: [
              { reasoning: "Instructions tell you what to do; explanations tell you why or how something works.", marks: 1, markCode: "AO2" },
              { reasoning: "Explanations focus on cause and effect; instructions focus on actions.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Reasons vs steps",
          },
        },
        {
          id: "ciege-u5-s3-ex-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"Photosynthesis uses light, water and carbon dioxide\", how many nouns and how many commas are there?",
          response: { type: "numeric", parts: [
            { label: "Nouns", answer: 5 },
            { label: "Commas", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count nouns and punctuation." }],
            steps: [
              { reasoning: "Photosynthesis, light, water, carbon, dioxide = 5 nouns.", marks: 1, markCode: "AO2" },
              { reasoning: "Two commas separate the listed items — 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5 nouns, 2 commas",
          },
        },
        {
          id: "ciege-u5-s3-ex-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should the introduction of an explanation do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "List the steps" },
            { id: "b", text: "End abruptly" },
            { id: "c", text: "Give personal opinions" },
            { id: "d", text: "State what is being explained" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Explanatory structure", statement: "Introduction states topic." }],
            steps: [
              { reasoning: "The introduction tells the reader what will be explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "State what is explained",
          },
        },
        {
          id: "ciege-u5-s3-ex-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the sentence \"The hot water turned into steam\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Hot' describes the water — 1 adjective.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciege-u5-s3-ex-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a three-sentence explanation of how a bicycle works.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explanatory writing", statement: "Clear process in present tense." }],
            steps: [
              { reasoning: "Three complete sentences explain the process.", marks: 1, markCode: "AO2" },
              { reasoning: "Present tense is used for facts.", marks: 1, markCode: "AO2" },
              { reasoning: "Cause and effect or sequence is clear.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-sentence explanation",
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
