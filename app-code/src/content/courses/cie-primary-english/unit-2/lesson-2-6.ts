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
            { id: "a", text: "'I think… because…'" }, { id: "b", text: "'Whatever.'" }, { id: "c", text: "Silence" }, { id: "d", text: "'That is stupid.'" },
          ], correctChoiceId: "a" },
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
