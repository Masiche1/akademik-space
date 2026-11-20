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
            { id: "a", text: "Imperative (commands like 'Add')" }, { id: "b", text: "Past tense" }, { id: "c", text: "Question words" }, { id: "d", text: "Adjectives" },
          ], correctChoiceId: "a" },
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
