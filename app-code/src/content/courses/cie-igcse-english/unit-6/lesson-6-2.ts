import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ciege-u6-lesson-6-2",
  code: "6-2",
  title: "Directed Writing Technique",
  goal: "I CAN plan and execute a directed writing task under exam conditions.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: technique"],
  vocabulary: [
    { term: "Directed writing", definition: "Writing to a specific prompt, purpose and audience." },
    { term: "Prompt", definition: "The task or stimulus given in the exam." },
    { term: "Planning", definition: "Organising ideas before writing." },
    { term: "Drafting", definition: "Writing the first version." },
    { term: "Editing", definition: "Checking and improving the draft." },
  ],
  concepts: [
    {
      id: "ciege-u6-s2-planning",
      title: "Planning under time pressure",
      skill: "Plan quickly and effectively for exam writing.",
      lesson: {
        sections: [
          {
            heading: "Quick planning",
            body: "Spend 5 minutes planning: identify audience, purpose, key points. Jot a rough outline — don't write full sentences. This saves time and improves structure.",
          },
          {
            heading: "Adapting to the prompt",
            body: "Read the prompt twice. Underline the key requirements — format, audience, purpose. Check you're answering the right question, not just writing about the topic.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a letter to a friend about a school trip in 5 minutes.",
          solution: "Audience: friend. Purpose: share experience. Points: where we went, what we did, best moment. Format: informal letter.",
        },
      },
      questions: [
        {
          id: "ciege-u6-s2-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How much time should you spend planning in an exam?",
          response: { type: "mcq", choices: [
            { id: "a", text: "None" }, { id: "b", text: "About 5 minutes" }, { id: "c", text: "Half the time" }, { id: "d", text: "10 minutes minimum" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning time", statement: "Brief but effective." }],
            steps: [
              { reasoning: "A few minutes of planning improves structure.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "About 5 minutes",
          },
        },
        {
          id: "ciege-u6-s2-pl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you identify before writing a directed task?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Task analysis", statement: "Audience + purpose." }],
            steps: [
              { reasoning: "Audience and purpose.", marks: 1, markCode: "AO2" },
              { reasoning: "Also format and key requirements.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Audience, purpose, format",
          },
        },
        {
          id: "ciege-u6-s2-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a quick plan (3 bullet points) for an article about your school.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Quick planning", statement: "Three key points." }],
            steps: [
              { reasoning: "Three relevant points identified.", marks: 1, markCode: "AO2" },
              { reasoning: "Points are logical and cover the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "Plan is concise.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-point plan",
          },
        },
        {
          id: "ciege-u6-s2-pl-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "You have 45 minutes to write a story. How would you divide your time? Give a breakdown.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Time management", statement: "Planning + writing + checking." }],
            steps: [
              { reasoning: "Planning takes a small portion (5-10 min).", marks: 1, markCode: "AO2" },
              { reasoning: "Writing takes the majority.", marks: 1, markCode: "AO2" },
              { reasoning: "Checking/editing time is reserved.", marks: 1, markCode: "AO2" },
              { reasoning: "Breakdown is realistic.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 5 plan, 35 write, 5 check",
          },
        },
      ],
    },
    {
      id: "ciege-u6-s2-editing",
      title: "Drafting and editing",
      skill: "Write a complete draft then check for errors.",
      lesson: {
        sections: [
          {
            heading: "Drafting",
            body: "Write your full response — don't leave sections blank. If stuck, write a placeholder and come back. Aim for completeness first, polish second.",
          },
          {
            heading: "Editing checklist",
            body: "Check: Does it answer the prompt? Is the register appropriate? Are there spelling/punctuation errors? Does it flow logically? Spend the last few minutes on this.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What should you check in the last 5 minutes of an exam?",
          solution: "Answer the question? Register? Spelling? Punctuation? Flow? — go through your editing checklist.",
        },
      },
      questions: [
        {
          id: "ciege-u6-s2-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most important thing to check first when editing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Spelling" }, { id: "b", text: "Whether it answers the question" }, { id: "c", text: "Punctuation" }, { id: "d", text: "Paragraph length" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Editing", statement: "Answer the question first." }],
            steps: [
              { reasoning: "Always check it answers the actual question.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Answers the question",
          },
        },
        {
          id: "ciege-u6-s2-ed-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence checking whether your writing answers the prompt.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Self-check", statement: "Verify requirements met." }],
            steps: [
              { reasoning: "The sentence checks the prompt is answered.", marks: 1, markCode: "AO2" },
              { reasoning: "It could mention audience/purpose/format.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One self-check sentence",
          },
        },
        {
          id: "ciege-u6-s2-ed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write three things to check in your writing before submitting.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Editing checklist", statement: "Three checks." }],
            steps: [
              { reasoning: "Spelling and punctuation.", marks: 1, markCode: "AO2" },
              { reasoning: "Answers the question / register.", marks: 1, markCode: "AO2" },
              { reasoning: "Flow and clarity.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three checks listed",
          },
        },
        {
          id: "ciege-u6-s2-ed-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "You have written a letter but forgot to include the closing. What do you do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Problem solving", statement: "Fix structural issues." }],
            steps: [
              { reasoning: "Identify what's missing.", marks: 1, markCode: "AO2" },
              { reasoning: "Add the appropriate closing.", marks: 1, markCode: "AO2" },
              { reasoning: "Check format requirements (formal/informal).", marks: 1, markCode: "AO2" },
              { reasoning: "This shows editing awareness.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Add correct closing",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u6-s2-tech-notes",
      title: "Directed writing technique — revision notes",
      summary: "Planning, drafting, editing under exam conditions.",
      sections: [
        { heading: "Planning", body: "5 minutes max. Identify audience, purpose, format, key points. Rough outline only." },
        { heading: "Editing", body: "Check question answered, register, spelling, punctuation, flow. Do this in the last few minutes." },
      ],
    },
  ],
};
