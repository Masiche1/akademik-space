import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cipe-u2-lesson-2-11",
  code: "2-11",
  title: "Stage 5 — Diary, Biography and Explanation Texts",
  goal: "I CAN write diary entries, biographies and explanations.",
  standards: ["Cambridge Primary English 0058 Stage 5: writing",
  "Cambridge Primary English 0058 framework substrands: 5Wc"],
  stage: 5,
  vocabulary: [
    { term: "Diary entry", definition: "Personal account of a day's events written as if for yourself." },
    { term: "Biography", definition: "Account of someone's life, usually in time order." },
    { term: "Explanation text", definition: "Writing that tells how or why something works/happens." },
    { term: "First person", definition: "Writing using 'I' and 'my'." },
    { term: "Chronological", definition: "In time order." },
  ],
  concepts: [
    {
      id: "cipe-u2-s11-diary-biography",
      title: "Diary, biography and explanation writing",
      skill: "Structure personal, biographical and explanatory texts at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Diary and biography",
            body: "A diary entry uses first person ('I'), a date heading, and records personal events and feelings in time order — informal but organised. A biography recounts a real person's life chronologically: birth/early life, key events, achievements, later life. Both need accurate, ordered detail.",
          },
          {
            heading: "Explanation texts",
            body: "Explanations answer 'how?' or 'why?' — structure: introduce the topic, explain stages or causes in logical order, conclude. Use technical vocabulary accurately (e.g. 'evaporation', 'condensation'), present tense for facts, and clear sequencing: 'First… then… finally…'.",
          },
        ],
        keyFormulas: [
          { name: "Diary", statement: "Date + first person + events/feelings in order" },
          { name: "Explanation", statement: "Topic → stages in order → conclusion" },
        ],
        workedExample: {
          problem: "Write the opening of a diary entry for a rainy day.",
          solution: "'Monday 14th May — It rained all day so we couldn't play football at break. I was bored until art lesson…'",
        },
      },
      questions: [
        {
          id: "cipe-u2-db-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pronoun does a diary entry typically use?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He" }, { id: "b", text: "I" }, { id: "c", text: "They" }, { id: "d", text: "You" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Diary/first person", statement: "Personal account uses 'I'." }],
            steps: [{ reasoning: "Diaries are personal — first person 'I'.", marks: 1, markCode: "AO1" }],
            finalAnswer: "I",
          },
        },
        {
          id: "cipe-u2-db-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What order should a biography follow?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Biography", statement: "Chronological order of a life." }],
            steps: [
              { reasoning: "Life events in time order: birth → childhood → achievements → later life.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: chronological.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Chronological (time) order",
          },
        },
        {
          id: "cipe-u2-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What tense should an explanation of a process (like making bread) usually use?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Explanation tense", statement: "Present tense for facts/processes." }],
            steps: [
              { reasoning: "Processes are described in present tense.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. 'You mix the flour…' not 'You mixed…'", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: present tense.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Present tense",
          },
        },
        {
          id: "cipe-u2-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Write a 4-sentence diary entry about a day you visited the seaside. Include: date heading, first person, two events in order, and a feeling. Then explain what makes it a diary entry.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Diary writing", statement: "Date + first person + ordered events + feelings." }],
            steps: [
              { reasoning: "Date heading present (e.g. 'Saturday 2nd June').", marks: 1, markCode: "AO2" },
              { reasoning: "First person used throughout ('I', 'my').", marks: 1, markCode: "AO2" },
              { reasoning: "Two events in time order.", marks: 1, markCode: "AO2" },
              { reasoning: "Feeling included (happy/tired/excited).", marks: 1, markCode: "AO2" },
              { reasoning: "Explanation identifies diary features correctly.", marks: 1, markCode: "AO3" },
              { reasoning: "Events sequenced with time connectives.", marks: 1, markCode: "AO3" },
              { reasoning: "Punctuation and grammar accurate.", marks: 1, markCode: "AO2" },
              { reasoning: "Coherent complete entry.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Saturday 2nd June — We drove to the seaside. I built a sandcastle…'",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "Complete diary entry with all features and accurate explanation." },
              { level: "Level 2", marks: "4-6", descriptor: "Most features present; explanation partly accurate." },
              { level: "Level 1", marks: "1-3", descriptor: "Partial entry; limited feature use." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-db-notes",
      title: "Diary, biography, explanation — notes",
      summary: "Diary = date+first person+order; biography = chronological; explanation = present tense stages.",
      sections: [
        { heading: "Personal texts", body: "Diaries: date, 'I', events, feelings. Biographies: life in order." },
        { heading: "Explanations", body: "Present tense, logical stages, technical words accurately." },
      ],
    },
  ],
};
