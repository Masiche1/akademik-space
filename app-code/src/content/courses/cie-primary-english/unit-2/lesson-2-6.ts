import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "cipe-u2-lesson-2-6",
  code: "2-6",
  title: "Stage 4 — Discussion, Comprehension and Paragraphs",
  goal: "I CAN discuss texts, find key information and write in paragraphs.",
  standards: ["Cambridge Primary English 0058 Stage 4: speaking, listening, reading and writing",
  "Cambridge Primary English 0058 framework substrands: 4Ri, 4Ws, 4SLg, 4SLm, 4SLr"],
  stage: 4,
  vocabulary: [
    { term: "Discussion", definition: "Talking together about an idea, giving reasons." },
    { term: "Scan", definition: "Look quickly for a particular word or detail." },
    { term: "Summarise", definition: "Tell the main points in your own few words." },
    { term: "Paragraph", definition: "A group of sentences about one idea." },
    { term: "Present", definition: "Talk to an audience about something you have learned." },
  ],
  concepts: [
    {
      id: "cipe-u2-s6-discussion-paragraphs",
      title: "Discussion, comprehension strategies and paragraphs",
      skill: "Hold discussions, scan and summarise texts, and organise writing into paragraphs.",
      lesson: {
        sections: [
          {
            heading: "Speaking and listening",
            body: "In a discussion, share your view and give reasons — 'I think… because…'. Listen to others and build on what they say. When presenting, speak clearly, face the audience and organise your points in order.",
          },
          {
            heading: "Reading strategies and paragraphs",
            body: "Scanning means hunting for one detail quickly; summarising means keeping only the main points. In writing, each paragraph covers one idea — start with a topic sentence, add supporting details, then move to the next paragraph.",
          },
        ],
        keyFormulas: [
          { name: "Discussion", statement: "State view + give reasons + listen" },
          { name: "Paragraph", statement: "One idea per paragraph: topic sentence + details" },
        ],
        workedExample: {
          problem: "Summarise this in one sentence: 'The library opens at nine. Books can be borrowed for two weeks. Late books cost money.'",
          solution: "The library opens at nine and lets you borrow books for two weeks, with a fee for late returns.",
        },
      },
      questions: [
        {
          id: "cipe-u2-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a good way to start a discussion contribution?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'That is stupid.'" },
            { id: "b", text: "Silence" },
            { id: "c", text: "'Whatever.'" },
            { id: "d", text: "'I think… because…'" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Discussion", statement: "Give a view with a reason." }],
            steps: [{ reasoning: "Stating a view plus a reason is polite and clear.", marks: 1, markCode: "AO1" }],
            finalAnswer: "'I think… because…'",
          },
        },
        {
          id: "cipe-u2-dp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'scanning' a text mean?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Scanning", statement: "Quick search for a specific detail." }],
            steps: [
              { reasoning: "Scanning = looking quickly for one detail, not reading every word.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Looking quickly for a specific detail",
          },
        },
        {
          id: "cipe-u2-dp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A paragraph should mainly contain…",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Paragraph", statement: "One idea per paragraph with supporting details." }],
            steps: [
              { reasoning: "A topic sentence introduces the idea.", marks: 1, markCode: "AO2" },
              { reasoning: "Details/examples support it.", marks: 1, markCode: "AO2" },
              { reasoning: "New idea = new paragraph.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "One idea with supporting details",
          },
        },
        {
          id: "cipe-u2-dp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write one sentence summarising: 'Recycling saves energy. It reduces landfill. It helps wildlife.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Keep main points in own words." }],
            steps: [
              { reasoning: "Identify main idea: benefits of recycling.", marks: 1, markCode: "AO2" },
              { reasoning: "Combine points briefly.", marks: 1, markCode: "AO2" },
              { reasoning: "One sentence only.", marks: 1, markCode: "AO2" },
              { reasoning: "Coherent sentence with correct punctuation.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Recycling helps the environment by saving energy and protecting wildlife.'",
          },
        },
        {
          id: "cipe-u2-dp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'scanning' a text mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Writing a summary" },
            { id: "b", text: "Looking quickly for a specific detail" },
            { id: "c", text: "Reading aloud" },
            { id: "d", text: "Reading every word slowly" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Scanning", statement: "Quick search for one detail." }],
            steps: [{ reasoning: "Scanning hunts for a particular word or detail quickly.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Looking quickly for a specific detail",
          },
        },
        {
          id: "cipe-u2-dp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the job of a topic sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To tell the reader what the paragraph is about" },
            { id: "b", text: "To end the paragraph" },
            { id: "c", text: "To list every detail" },
            { id: "d", text: "To ask a question" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Topic sentence", statement: "Introduces the paragraph's idea." }],
            steps: [{ reasoning: "The topic sentence names the main idea of the paragraph.", marks: 1, markCode: "AO1" }],
            finalAnswer: "To tell what the paragraph is about",
          },
        },
        {
          id: "cipe-u2-dp-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A good discussion contribution has three parts: state your view, give a reason, and… what? Write the missing part.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discussion", statement: "View + reason + listen." }],
            steps: [
              { reasoning: "The third part is listening to/responding to others.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: listen to others / respond to their ideas.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Listen to others",
          },
        },
        {
          id: "cipe-u2-dp-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many sentences are in this summary: 'The park opens at eight. Dogs must be on leads. There is a café nearby.'? Write the number.",
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
          id: "cipe-u2-dp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence belongs in a paragraph about 'My pet dog'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "My dog loves to chase balls in the garden." },
            { id: "b", text: "The recipe needs two eggs." },
            { id: "c", text: "Volcanoes erupt with lava." },
            { id: "d", text: "I went to the dentist." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Paragraph unity", statement: "One idea per paragraph." }],
            steps: [{ reasoning: "Only option b is about the pet dog.", marks: 1, markCode: "AO2" }],
            finalAnswer: "My dog loves to chase balls in the garden.",
          },
        },
        {
          id: "cipe-u2-dp-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a topic sentence for a paragraph about your favourite hobby.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Topic sentence", statement: "One clear sentence about the idea." }],
            steps: [
              { reasoning: "The sentence names the hobby or its topic.", marks: 1, markCode: "AO2" },
              { reasoning: "Complete sentence with capital and full stop.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'My favourite hobby is drawing.'",
          },
        },
        {
          id: "cipe-u2-dp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between scanning and summarising?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Scanning finds one detail quickly; summarising keeps the main points" },
            { id: "b", text: "Scanning is for writing" },
            { id: "c", text: "Summarising is faster" },
            { id: "d", text: "They are the same" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reading strategies", statement: "Scan = one detail; summarise = main points." }],
            steps: [{ reasoning: "Scanning hunts a detail; summarising condenses the whole text.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Scanning finds one detail; summarising keeps main points",
          },
        },
        {
          id: "cipe-u2-dp-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Summarise this in one sentence: 'Bees collect nectar from flowers. They carry pollen between plants. This helps plants to grow.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Main points in own words." }],
            steps: [
              { reasoning: "Main idea: bees help plants by carrying pollen.", marks: 1, markCode: "AO2" },
              { reasoning: "One sentence only.", marks: 1, markCode: "AO2" },
              { reasoning: "Accurate and coherent.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Bees help plants grow by carrying pollen between flowers.'",
          },
        },
        {
          id: "cipe-u2-dp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A piece of writing has two paragraphs: one about what a volcano is, one about famous eruptions. How many paragraphs is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Paragraph", statement: "One idea per paragraph." }],
            steps: [
              { reasoning: "Two separate ideas = two paragraphs.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-dp-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is it important to listen to and build on others' ideas in a discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is a grammar rule" },
            { id: "b", text: "It makes the discussion shorter" },
            { id: "c", text: "So you can ignore them" },
            { id: "d", text: "It shows respect and creates a better shared understanding" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discussion", statement: "Listen and build on ideas." }],
            steps: [{ reasoning: "Building on others' ideas is respectful and improves the discussion.", marks: 1, markCode: "AO3" }],
            finalAnswer: "It shows respect and creates a better understanding",
          },
        },
        {
          id: "cipe-u2-dp-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a short two-paragraph piece about your school: paragraph 1 with a topic sentence and one detail, paragraph 2 with a new idea.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Paragraph writing", statement: "One idea per paragraph with details." }],
            steps: [
              { reasoning: "Paragraph 1 has a clear topic sentence about the school.", marks: 1, markCode: "AO2" },
              { reasoning: "A supporting detail follows in paragraph 1.", marks: 1, markCode: "AO2" },
              { reasoning: "Paragraph 2 covers a different idea.", marks: 1, markCode: "AO2" },
              { reasoning: "Each paragraph stays on its own topic.", marks: 1, markCode: "AO3" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. P1: 'My school is bright and welcoming. The hall is full of interesting displays.' P2: 'My favourite teacher is very kind. She helps us with our work.'",
          },
        },
        {
          id: "cipe-u2-dp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You are giving a short presentation about a hobby. Plan three points you will make, in order.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Presenting", statement: "Organise points clearly and logically." }],
            steps: [
              { reasoning: "An introduction point is planned.", marks: 1, markCode: "AO3" },
              { reasoning: "At least one main point about the hobby is planned.", marks: 1, markCode: "AO3" },
              { reasoning: "Points are in a sensible order.", marks: 1, markCode: "AO3" },
              { reasoning: "Three distinct, relevant points given.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 1. What my hobby is; 2. Why I enjoy it; 3. What I have made/achieved",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-dp-notes",
      title: "Discussion and paragraphs — revision notes",
      summary: "Discuss with reasons; scan for details; summarise main points; one idea per paragraph.",
      sections: [
        { heading: "Speaking", body: "'I think… because…'; listen to others; present clearly in order." },
        { heading: "Writing", body: "Topic sentence + details per paragraph; summarise in your own words." },
      ],
    },
  ],
};
