import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipe-u2-lesson-2-1",
  code: "2-1",
  title: "Stage 4 — Reading for Inference",
  goal: "I CAN read a passage and infer what is not directly stated.",
  standards: ["Cambridge Primary English 0058 Stage 4: reading",
  "Cambridge Primary English 0058 framework substrands: 4Ri"],
  stage: 4,
  vocabulary: [
    { term: "Inference", definition: "Working out meaning using clues in the text." },
    { term: "Literal", definition: "What the text says directly." },
    { term: "Mood", definition: "The feeling of a text." },
    { term: "Tone", definition: "The writer's attitude towards the subject." },
    { term: "Evidence", definition: "Words or details from the text that support an answer." },
  ],
  concepts: [
    {
      id: "cipe-u2-s4-inference",
      title: "Inferring meaning",
      skill: "Infer character feelings and events at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Literal vs inference",
            body: "Literal questions ask what the text says directly. Inference questions ask what you can work out from clues — feelings, reasons, or what happens next.",
          },
          {
            heading: "Finding clues",
            body: "Look for describing words, actions and speech. If a character 'stamped their feet', you can infer they are angry even if the text does not say so.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'Lily hugged her mum tightly and smiled.' How does Lily feel?",
          solution: "Lily feels happy and loving — the words 'hugged' and 'smiled' are the clues.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s4-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an inference?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Copying words from the text" }, { id: "b", text: "Working out meaning from clues" }, { id: "c", text: "Reading aloud" }, { id: "d", text: "Writing a summary" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Inference", statement: "Working out unstated meaning from clues." }],
            steps: [{ reasoning: "Inference means using clues to understand more than the literal words.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Working out meaning from clues",
          },
        },
        {
          id: "cipe-u2-s4-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Lost Scarf",
            author: "Written for Akademik Space",
            text: "Tom searched everywhere for his red scarf. He checked under the bed, behind the sofa and in every drawer. When he could not find it, he sat down and sighed.",
          },
          stem: "How does Tom feel when he cannot find the scarf?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use clues like 'sighed' to infer feelings." }],
            steps: [
              { reasoning: "The clue is 'he sat down and sighed'.", marks: 1, markCode: "AO2" },
              { reasoning: "Tom feels sad or worried because he cannot find his scarf.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Sad or worried",
          },
        },
        {
          id: "cipe-u2-s4-in-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Rainy Day",
            author: "Written for Akademik Space",
            text: "The sky turned dark grey. People hurried home with umbrellas. The rain hammered on the windows and the streets glistened.",
          },
          stem: "What does 'the streets glistened' tell you about the weather?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Infer meaning from describing words." }],
            steps: [
              { reasoning: "'Glistened' means the streets were wet and shiny.", marks: 1, markCode: "AO2" },
              { reasoning: "This tells us it had been raining and the ground was wet.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: the streets were wet from rain.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Streets were wet from rain",
          },
        },
        {
          id: "cipe-u2-s4-in-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Exam",
            author: "Written for Akademik Space",
            text: "Amara's hands trembled as she opened the exam paper. She took a deep breath, closed her eyes for a moment, then began to write.",
          },
          stem: "How does Amara feel before the exam? Use evidence from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference with evidence", statement: "Quote clues and explain the feeling." }],
            steps: [
              { reasoning: "Clue: 'her hands trembled'.", marks: 1, markCode: "AO2" },
              { reasoning: "Clue: 'took a deep breath'.", marks: 1, markCode: "AO2" },
              { reasoning: "These suggest she feels nervous or anxious.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: nervous/anxious, supported by the trembling hands.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Nervous — trembling hands",
          },
        },
      ],
    },
    {
      id: "cipe-u2-s4-compare",
      title: "Comparing and summarising",
      skill: "Compare texts and summarise main ideas at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Comparing texts",
            body: "When comparing two texts, look at what they have in common and how they differ — characters, settings, events or feelings.",
          },
          {
            heading: "Summarising",
            body: "A summary tells the main points in your own words. Do not include every small detail — just the most important events.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Summarise: 'A girl finds a lost dog and returns it to its owner.'",
          solution: "A girl finds a lost dog and returns it to its owner — this is already a short summary of the main event.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s4-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a summary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Every detail of the text" }, { id: "b", text: "The main points in your own words" }, { id: "c", text: "A list of characters" }, { id: "d", text: "The title" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Summary", statement: "Main points in your own words." }],
            steps: [{ reasoning: "A summary gives the key points briefly, not every detail.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Main points",
          },
        },
        {
          id: "cipe-u2-s4-cp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main event in this text? 'Sam planted a seed. He watered it every day. A week later, a small plant appeared.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Main idea", statement: "Identify the most important event." }],
            steps: [
              { reasoning: "The main event is that a plant grew from the seed.", marks: 1, markCode: "AO1" },
              { reasoning: "Sam planted and watered the seed, then it grew.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A plant grew",
          },
        },
        {
          id: "cipe-u2-s4-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'The market was crowded and noisy. Stalls sold fruit, bread and clothes.' What kind of place is described?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Identify the main description." }],
            steps: [
              { reasoning: "The text describes a market.", marks: 1, markCode: "AO1" },
              { reasoning: "It is crowded, noisy, and sells fruit, bread and clothes.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: a busy market selling food and clothes.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A busy market",
          },
        },
        {
          id: "cipe-u2-s4-cp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write one sentence summarising what happened in a story you have read.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Summary", statement: "One sentence with the main event." }],
            steps: [
              { reasoning: "The sentence includes the main character.", marks: 1, markCode: "AO1" },
              { reasoning: "It includes the main event or problem.", marks: 1, markCode: "AO1" },
              { reasoning: "It is in your own words, not copied.", marks: 1, markCode: "AO1" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One sentence summary",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-s4-infer-notes",
      title: "Stage 4 inference and summary — revision notes",
      summary: "Inferring feelings and events, summarising main ideas.",
      sections: [
        { heading: "Inference", body: "Use clues like actions and describing words. Quote the clue, then explain what it tells you." },
        { heading: "Summary", body: "Include only the main points in your own words. One good sentence can summarise a whole story." },
      ],
    },
  ],
};
