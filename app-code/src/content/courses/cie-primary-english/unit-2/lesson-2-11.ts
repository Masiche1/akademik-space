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
            { id: "a", text: "They" },
            { id: "b", text: "You" },
            { id: "c", text: "He" },
            { id: "d", text: "I" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipe-u2-db-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a diary entry usually begin with?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A glossary" },
            { id: "b", text: "A chapter title" },
            { id: "c", text: "A formal greeting" },
            { id: "d", text: "A date heading" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Diary entry", statement: "Date + first person + events." }],
            steps: [{ reasoning: "Diary entries start with a date.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A date heading",
          },
        },
        {
          id: "cipe-u2-db-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which text tells the story of a real person's life in time order?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fairy tale" },
            { id: "b", text: "A biography" },
            { id: "c", text: "A recipe" },
            { id: "d", text: "A poem" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Biography", statement: "Account of someone's life chronologically." }],
            steps: [{ reasoning: "A biography recounts a real life in order.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A biography",
          },
        },
        {
          id: "cipe-u2-db-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An explanation has three parts: introduce the topic, explain the stages, and… what? Write the missing part.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Explanation structure", statement: "Topic → stages → conclusion." }],
            steps: [
              { reasoning: "The third part is a conclusion/summary.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: conclude/sum up.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Conclude/sum up",
          },
        },
        {
          id: "cipe-u2-db-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many events are in this diary entry: 'I woke up early. We ate breakfast. Then we went to the park.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Counting events", statement: "Each action described is an event." }],
            steps: [
              { reasoning: "Waking, breakfast and the park = 3 events.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-db-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence belongs in a biography of a famous scientist?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Once upon a time…" },
            { id: "b", text: "He made up a story about dragons." },
            { id: "c", text: "I think scientists are cool." },
            { id: "d", text: "She discovered a new species of plant in 1952." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Biography", statement: "Factual life events in order." }],
            steps: [{ reasoning: "A real discovery is a biographical fact.", marks: 1, markCode: "AO1" }],
            finalAnswer: "She discovered a new species of plant in 1952.",
          },
        },
        {
          id: "cipe-u2-db-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the date heading for a diary entry about today.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Diary format", statement: "Date at the top." }],
            steps: [
              { reasoning: "A day and date are given (e.g. 'Monday 5th May').", marks: 1, markCode: "AO2" },
              { reasoning: "Format is clear.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Monday 5th May'",
          },
        },
        {
          id: "cipe-u2-db-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the first stage of an explanation of how rain forms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explanation", statement: "Stages in logical order, present tense." }],
            steps: [
              { reasoning: "The stage introduces the topic clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "Present tense used for the fact.", marks: 1, markCode: "AO2" },
              { reasoning: "Accurate content (sun heats water, evaporation).", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'The sun heats water in rivers, lakes and seas, causing it to evaporate into the air.'",
          },
        },
        {
          id: "cipe-u2-db-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sentences are in this biography extract: 'Marie Curie was born in Poland in 1867. She became a famous scientist. She won two Nobel Prizes.'? Write the number.",
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
          id: "cipe-u2-db-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does a biography need to be in chronological order?",
          response: { type: "mcq", choices: [
            { id: "a", text: "So the reader understands the person's life as a sequence of events" },
            { id: "b", text: "Because it is shorter" },
            { id: "c", text: "Because biographies cannot have feelings" },
            { id: "d", text: "It does not matter" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chronological order", statement: "Life events in time order." }],
            steps: [{ reasoning: "Time order lets the reader follow the life clearly.", marks: 1, markCode: "AO2" }],
            finalAnswer: "So the reader follows the life in sequence",
          },
        },
        {
          id: "cipe-u2-db-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a 3-sentence explanation of how to make a cup of tea, using present tense and 'first/then/finally'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explanation writing", statement: "Present tense, logical stages." }],
            steps: [
              { reasoning: "Three sentences describing the process.", marks: 1, markCode: "AO2" },
              { reasoning: "Present tense used throughout.", marks: 1, markCode: "AO2" },
              { reasoning: "Sequencing connectives used (first/then/finally).", marks: 1, markCode: "AO2" },
              { reasoning: "Accurate, clear instructions.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'First, boil some water. Then, pour it into a cup with a tea bag. Finally, add milk and sugar if you like.'",
          },
        },
        {
          id: "cipe-u2-db-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the opening of a biography about a famous person: give their name, when they were born and one early-life fact.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Biography opening", statement: "Name, birth, early life." }],
            steps: [
              { reasoning: "The person's name is given.", marks: 1, markCode: "AO2" },
              { reasoning: "Birth date/place is included.", marks: 1, markCode: "AO2" },
              { reasoning: "One early-life fact is included.", marks: 1, markCode: "AO2" },
              { reasoning: "Factual, chronological tone.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Nelson Mandela was born in 1918 in South Africa. He grew up in a village and became interested in justice from an early age.'",
          },
        },
        {
          id: "cipe-u2-db-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three sentences of a diary entry about a school concert, using first person and including one feeling.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Diary writing", statement: "First person, events, feelings." }],
            steps: [
              { reasoning: "First person ('I', 'my') used.", marks: 1, markCode: "AO2" },
              { reasoning: "Events described in order.", marks: 1, markCode: "AO2" },
              { reasoning: "A feeling is included.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I performed in the school concert tonight. My hands shook before I went on. When I finished, I felt proud and relieved.'",
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
