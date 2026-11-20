import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipe-u1-lesson-1-3",
  code: "1-3",
  title: "Stage 3 — Reading Stories and Writing Sentences",
  goal: "I CAN read short stories and write about what happens.",
  standards: ["Cambridge Primary English 0058 Stage 3: reading and writing",
  "Cambridge Primary English 0058 framework substrands: 3Ri, 3Wc, 3Ws"],
  stage: 3,
  vocabulary: [
    { term: "Story", definition: "A telling of events, often with characters and a problem." },
    { term: "Character", definition: "A person or animal in a story." },
    { term: "Setting", definition: "Where and when a story happens." },
    { term: "Retell", definition: "Say what happened in the story in your own words." },
    { term: "Paragraph", definition: "A group of sentences about one idea." },
  ],
  concepts: [
    {
      id: "cipe-u1-s3-stories",
      title: "Understanding stories",
      skill: "Identify characters, settings and events in stories at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Story parts",
            body: "Every story has characters (who), a setting (where and when), and events (what happens). The problem is what the character must solve.",
          },
          {
            heading: "Retelling",
            body: "To retell a story, say what happened at the start, middle and end. Use the characters' names and key events.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Story: 'A fox lost his tail in the forest.' What is the problem?",
          solution: "The fox lost his tail — that is the problem he needs to solve.",
        },
      },
      questions: [
        {
          id: "cipe-u1-s3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a story, who is the character?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The place where it happens" }, { id: "b", text: "The person or animal in the story" }, { id: "c", text: "The title" }, { id: "d", text: "The ending" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Character", statement: "Person or animal in a story." }],
            steps: [{ reasoning: "Characters are the people or animals in the story.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Person or animal",
          },
        },
        {
          id: "cipe-u1-s3-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read: 'Sara put on her boots and went outside.' What did Sara do first?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Identify the order of events." }],
            steps: [
              { reasoning: "The text says Sara put on her boots first.", marks: 1, markCode: "AO1" },
              { reasoning: "Then she went outside.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Put on her boots",
          },
        },
        {
          id: "cipe-u1-s3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'Tom found a box in the garden. Inside was a tiny bird.' Where did Tom find the box?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the place in the text." }],
            steps: [
              { reasoning: "The text says Tom found the box in the garden.", marks: 1, markCode: "AO1" },
              { reasoning: "Quote or refer to 'in the garden'.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: in the garden.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "In the garden",
          },
        },
        {
          id: "cipe-u1-s3-st-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a sentence about what a character in your favourite story does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story response", statement: "Use story knowledge in a clear sentence." }],
            steps: [
              { reasoning: "The sentence names the character.", marks: 1, markCode: "AO1" },
              { reasoning: "It describes an action the character does.", marks: 1, markCode: "AO1" },
              { reasoning: "Capital letter and full stop used correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One clear sentence",
          },
        },
      ],
    },
    {
      id: "cipe-u1-s3-writing",
      title: "Writing simple paragraphs",
      skill: "Write a short paragraph with a topic sentence at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "What is a paragraph?",
            body: "A paragraph is a group of sentences about one idea. It starts with a topic sentence that tells the reader what the paragraph is about.",
          },
          {
            heading: "Describing",
            body: "Use describing words (adjectives) to make your writing interesting. Instead of 'the dog', write 'the fluffy brown dog'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a topic sentence for a paragraph about your school.",
          solution: "'My school is a busy place.' — this tells the reader what the paragraph is about.",
        },
      },
      questions: [
        {
          id: "cipe-u1-s3-wr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a topic sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The last sentence of a paragraph" }, { id: "b", text: "The first sentence that tells what the paragraph is about" }, { id: "c", text: "A question" }, { id: "d", text: "A title" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Topic sentence", statement: "First sentence telling the paragraph's idea." }],
            steps: [{ reasoning: "A topic sentence introduces the main idea.", marks: 1, markCode: "AO2" }],
            finalAnswer: "First sentence about the idea",
          },
        },
        {
          id: "cipe-u1-s3-wr-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a describing word?",
          response: { type: "mcq", choices: [
            { id: "a", text: "run" }, { id: "b", text: "fluffy" }, { id: "c", text: "quickly" }, { id: "d", text: "and" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word that describes a noun." }],
            steps: [{ reasoning: "Fluffy describes what something is like.", marks: 1, markCode: "AO2" }],
            finalAnswer: "fluffy",
          },
        },
        {
          id: "cipe-u1-s3-wr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a topic sentence for a paragraph about your favourite animal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Topic sentence", statement: "One clear sentence about the topic." }],
            steps: [
              { reasoning: "The sentence is about an animal.", marks: 1, markCode: "AO2" },
              { reasoning: "It is a complete sentence with a verb.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter and full stop correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One clear topic sentence",
          },
        },
        {
          id: "cipe-u1-s3-wr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences describing your favourite animal using describing words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Descriptive writing", statement: "Use adjectives and full sentences." }],
            steps: [
              { reasoning: "Both sentences are complete and punctuated.", marks: 1, markCode: "AO2" },
              { reasoning: "Describing words are used (e.g. fluffy, fast, gentle).", marks: 1, markCode: "AO2" },
              { reasoning: "The sentences describe the animal clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two descriptive sentences",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-s3-story-notes",
      title: "Stage 3 stories and paragraphs — revision notes",
      summary: "Story parts, retelling, topic sentences and describing words.",
      sections: [
        { heading: "Stories", body: "Look for characters, setting and events. Retell the story in order: start, middle, end." },
        { heading: "Paragraphs", body: "Start with a topic sentence. Use describing words like fluffy, enormous, tiny to make writing interesting." },
      ],
    },
  ],
};
