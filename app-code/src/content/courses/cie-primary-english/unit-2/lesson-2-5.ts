import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cipe-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 5 — Instructions, Explanations and Recounts",
  goal: "I CAN write instructions, explanations and personal recounts.",
  standards: ["Cambridge Primary English 0058 Stage 5: writing non-fiction",
  "Cambridge Primary English 0058 framework substrands: 5Wc, 5Ws"],
  stage: 5,
  vocabulary: [
    { term: "Instructions", definition: "Step-by-step directions telling someone how to do something." },
    { term: "Explanation", definition: "Writing that tells how or why something happens." },
    { term: "Recount", definition: "A retelling of something that happened to you." },
    { term: "Sequencing", definition: "Putting events in the order they happened." },
    { term: "Imperative", definition: "Command verb like 'add' or 'mix' used in instructions." },
  ],
  concepts: [
    {
      id: "cipe-u2-s5-nonfiction",
      title: "Instructions, explanations and recounts",
      skill: "Structure procedural, explanatory and personal writing at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Instructions and explanations",
            body: "Instructions use numbered steps, imperative verbs ('Add', 'Mix', 'Stir') and present tense. Explanations answer 'how?' or 'why?' with clear logical order — cause before effect. Both need every step a reader could follow without asking questions.",
          },
          {
            heading: "Recounts",
            body: "A recount retells real events in time order: opening (who/when/where), the events in sequence, and a closing feeling or result. Use time connectives like 'first', 'then', 'after that', 'finally' to guide the reader.",
          },
        ],
        keyFormulas: [
          { name: "Instructions", statement: "Numbered steps + imperative verbs" },
          { name: "Recount", statement: "Opening → events in order → closing" },
        ],
        workedExample: {
          problem: "Write the opening of a recount about a school trip.",
          solution: "'Last Friday our class went to the Science Museum. We travelled by coach and arrived just after ten o'clock.'",
        },
      },
      questions: [
        {
          id: "cipe-u2-ie-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Instructions usually use which type of verb?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Question words" },
            { id: "b", text: "Imperative (commands like 'Add')" },
            { id: "c", text: "Past tense" },
            { id: "d", text: "Adjectives" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Instructions", statement: "Step-by-step directions using command verbs." }],
            steps: [{ reasoning: "Instructions use imperatives like 'Add', 'Mix'.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Imperative verbs",
          },
        },
        {
          id: "cipe-u2-ie-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which connective best orders recount events?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequencing", statement: "Time connectives order events." }],
            steps: [
              { reasoning: "'First/then/finally' show order; 'because' shows reason.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'then' or 'after that'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "then / after that",
          },
        },
        {
          id: "cipe-u2-ie-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these instruction steps in order: 'Serve warm', 'Boil the water', 'Add the pasta', 'Stir for 10 minutes'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing instructions", statement: "Order steps logically before writing." }],
            steps: [
              { reasoning: "Water must boil before pasta is added.", marks: 1, markCode: "AO2" },
              { reasoning: "Stir after adding; serve last.", marks: 1, markCode: "AO2" },
              { reasoning: "Order: boil → add → stir → serve.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Boil → add → stir → serve",
          },
        },
        {
          id: "cipe-u2-ie-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the first two sentences of a recount about your last birthday.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Recount opening", statement: "Opening gives who/when/where." }],
            steps: [
              { reasoning: "Opening names the event and when.", marks: 1, markCode: "AO2" },
              { reasoning: "Past tense used.", marks: 1, markCode: "AO2" },
              { reasoning: "Details of where/what happened included.", marks: 1, markCode: "AO2" },
              { reasoning: "Coherent sentences with correct punctuation.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'On my last birthday, my family took me to the beach. We built a sandcastle and ate ice cream.'",
          },
        },
        {
          id: "cipe-u2-ie-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'recount'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A list of instructions" },
            { id: "b", text: "A retelling of real events that happened" },
            { id: "c", text: "A poem" },
            { id: "d", text: "A made-up story" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Recount", statement: "Retelling real events in order." }],
            steps: [{ reasoning: "A recount tells what really happened, in time order.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A retelling of real events",
          },
        },
        {
          id: "cipe-u2-ie-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best opening for a recount about a sports day?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The end." },
            { id: "b", text: "I like running." },
            { id: "c", text: "Sports are fun." },
            { id: "d", text: "Last Tuesday our school held its annual sports day." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Recount opening", statement: "Opening gives who/when/where." }],
            steps: [{ reasoning: "Option b gives when (last Tuesday) and what (sports day).", marks: 1, markCode: "AO2" }],
            finalAnswer: "Last Tuesday our school held its annual sports day.",
          },
        },
        {
          id: "cipe-u2-ie-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "These time connectives order recount events: 'first', 'then', 'finally'. How many is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequencing", statement: "Time connectives order events." }],
            steps: [
              { reasoning: "first, then, finally = 3.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-ie-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the instruction step 'Boil the water'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "Boil-the-water = 3 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-ie-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word is an imperative verb used in instructions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Beautiful" },
            { id: "b", text: "Slowly" },
            { id: "c", text: "Was" },
            { id: "d", text: "Add" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Imperative", statement: "Command verb like 'add' or 'mix'." }],
            steps: [{ reasoning: "'Add' is a command verb telling the reader what to do.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Add",
          },
        },
        {
          id: "cipe-u2-ie-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the first step of instructions for making a jam sandwich.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Instructions", statement: "Numbered imperative steps." }],
            steps: [
              { reasoning: "The step uses an imperative verb.", marks: 1, markCode: "AO2" },
              { reasoning: "It is a sensible first step, e.g. 'Take two slices of bread.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Take two slices of bread.'",
          },
        },
        {
          id: "cipe-u2-ie-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "An explanation text mainly answers which questions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'Who?' and 'When?'" }, { id: "b", text: "'How?' and 'Why?'" }, { id: "c", text: "'What colour?' only" }, { id: "d", text: "None of these" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Explanation", statement: "Tells how or why something happens." }],
            steps: [{ reasoning: "Explanations answer how and why.", marks: 1, markCode: "AO1" }],
            finalAnswer: "'How?' and 'Why?'",
          },
        },
        {
          id: "cipe-u2-ie-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences explaining why leaves change colour in autumn.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explanation", statement: "Clear logical order, cause before effect." }],
            steps: [
              { reasoning: "The sentences explain a cause and effect.", marks: 1, markCode: "AO2" },
              { reasoning: "Scientific/logical reasoning is used (less sunlight, chlorophyll breaks down).", marks: 1, markCode: "AO2" },
              { reasoning: "Complete sentences with correct punctuation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'In autumn there is less sunlight. The green chlorophyll breaks down, so the leaves show other colours.'",
          },
        },
        {
          id: "cipe-u2-ie-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sentences are in this recount: 'We arrived at the museum. First we saw the dinosaurs. Then we had lunch in the café.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each full stop ends a sentence." }],
            steps: [
              { reasoning: "Three full stops = three sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-ie-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do instructions use numbered steps?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Because numbers are easier to spell" },
            { id: "b", text: "So the reader can follow the order clearly" },
            { id: "c", text: "To make them look longer" },
            { id: "d", text: "It is a spelling rule" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Instructions", statement: "Numbered steps show sequence." }],
            steps: [{ reasoning: "Numbers make the order of steps clear.", marks: 1, markCode: "AO2" }],
            finalAnswer: "So the reader can follow the order clearly",
          },
        },
        {
          id: "cipe-u2-ie-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a set of five numbered instructions for making a fruit salad.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Instructions", statement: "Numbered imperative steps in order." }],
            steps: [
              { reasoning: "Five numbered steps written.", marks: 1, markCode: "AO3" },
              { reasoning: "Each step uses an imperative verb.", marks: 1, markCode: "AO2" },
              { reasoning: "Steps are in a logical order.", marks: 1, markCode: "AO3" },
              { reasoning: "Each step is clear enough to follow alone.", marks: 1, markCode: "AO3" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 1. Wash the fruit. 2. Peel the apple. 3. Chop the fruit into pieces. 4. Put it in a bowl. 5. Serve it.",
          },
        },
        {
          id: "cipe-u2-ie-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a recount about a day out. Give the opening (who/when/where), one middle event and a closing feeling or result.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Recount planning", statement: "Opening → events → closing." }],
            steps: [
              { reasoning: "Opening includes who, when and where.", marks: 1, markCode: "AO3" },
              { reasoning: "At least one middle event is planned in order.", marks: 1, markCode: "AO3" },
              { reasoning: "A closing feeling or result is planned.", marks: 1, markCode: "AO3" },
              { reasoning: "Time connectives would be used (first, then, finally).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Opening: 'On Saturday my family visited the zoo'; Middle: 'We saw the lions first'; Closing: 'It was the best day ever.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-ie-notes",
      title: "Non-fiction writing — revision notes",
      summary: "Instructions = numbered imperatives; recount = opening→sequence→closing.",
      sections: [
        { heading: "Instructions", body: "Numbered steps, command verbs, present tense, exact quantities." },
        { heading: "Recount", body: "Who/when/where first, events in order with connectives, closing feeling." },
      ],
    },
  ],
};
