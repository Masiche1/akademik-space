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
            { id: "a", text: "10 minutes minimum" },
            { id: "b", text: "None" },
            { id: "c", text: "Half the time" },
            { id: "d", text: "About 5 minutes" },
          ], correctChoiceId: "d" },
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
        {
          id: "ciege-u6-s2-pl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first thing you should do when you receive a directed writing prompt?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Check your spelling" },
            { id: "b", text: "Start writing immediately" },
            { id: "c", text: "Write the title last" },
            { id: "d", text: "Read the prompt carefully" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prompt analysis", statement: "Understand before writing." }],
            steps: [
              { reasoning: "Read the prompt twice and underline requirements first.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Read the prompt carefully",
          },
        },
        {
          id: "ciege-u6-s2-pl-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things you should identify from a writing prompt before you start.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Task analysis", statement: "Audience and purpose." }],
            steps: [
              { reasoning: "Audience and purpose identified.", marks: 1, markCode: "AO2" },
              { reasoning: "Format or other requirements also noted.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Audience and purpose",
          },
        },
        {
          id: "ciege-u6-s2-pl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a quick plan, should you write full sentences or short notes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the title" },
            { id: "b", text: "A rough draft" },
            { id: "c", text: "Full sentences" },
            { id: "d", text: "Short notes or bullet points" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning", statement: "Brief outline, not full writing." }],
            steps: [
              { reasoning: "Planning uses quick notes; full sentences waste time.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Short notes or bullet points",
          },
        },
        {
          id: "ciege-u6-s2-pl-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a quick 3-point plan for a speech about recycling.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Quick planning", statement: "Three relevant points." }],
            steps: [
              { reasoning: "Three points relevant to recycling identified.", marks: 1, markCode: "AO2" },
              { reasoning: "Points are logical and cover the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "Plan is concise.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-point plan",
          },
        },
        {
          id: "ciege-u6-s2-pl-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A prompt says 'Write a formal letter to your headteacher.' What two features must your plan include?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bullet points only" },
            { id: "b", text: "Formal register and letter format" },
            { id: "c", text: "A poem structure" },
            { id: "d", text: "Slang and a story ending" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prompt requirements", statement: "Match format and register." }],
            steps: [
              { reasoning: "The prompt demands a formal letter, so plan for formal register and letter format.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal register and letter format",
          },
        },
        {
          id: "ciege-u6-s2-pl-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to check the required format (e.g. letter, article, speech) during planning?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Format awareness", statement: "Format affects structure." }],
            steps: [
              { reasoning: "Different formats need different structures and openings.", marks: 1, markCode: "AO2" },
              { reasoning: "Checking early avoids writing the wrong text type.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Format affects structure",
          },
        },
        {
          id: "ciege-u6-s2-pl-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You have 40 minutes for a writing task. Which time split is best?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10 min plan, 10 min write, 20 min check" },
            { id: "b", text: "0 min plan, 40 min write" },
            { id: "c", text: "5 min plan, 30 min write, 5 min check" },
            { id: "d", text: "20 min plan, 15 min write, 5 min check" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time management", statement: "Most time on writing." }],
            steps: [
              { reasoning: "Planning should be brief; writing needs the bulk of the time.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5 min plan, 30 min write, 5 min check",
          },
        },
        {
          id: "ciege-u6-s2-pl-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a quick plan (3 bullet points) for a review of a film you enjoyed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Quick planning", statement: "Three relevant points." }],
            steps: [
              { reasoning: "Three points relevant to a film review identified.", marks: 1, markCode: "AO2" },
              { reasoning: "Points cover opinion, evidence and recommendation.", marks: 1, markCode: "AO2" },
              { reasoning: "Plan is concise.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-point plan",
          },
        },
        {
          id: "ciege-u6-s2-pl-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the risk of spending too long planning in the exam?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time management", statement: "Planning must be brief." }],
            steps: [
              { reasoning: "Too much planning leaves too little time to write.", marks: 1, markCode: "AO2" },
              { reasoning: "An unfinished response scores poorly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Leaves too little writing time",
          },
        },
        {
          id: "ciege-u6-s2-pl-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the three elements you should note when reading a prompt.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Task analysis", statement: "Audience, purpose, format." }],
            steps: [
              { reasoning: "Audience and purpose noted.", marks: 1, markCode: "AO2" },
              { reasoning: "Format/word count or other requirements noted.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Audience, purpose, format",
          },
        },
        {
          id: "ciege-u6-s2-pl-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A prompt asks for a story, but you planned an essay. What should you do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Write both" },
            { id: "b", text: "Re-plan to match the required format" },
            { id: "c", text: "Change the prompt" },
            { id: "d", text: "Write the essay anyway" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prompt fidelity", statement: "Answer the actual question." }],
            steps: [
              { reasoning: "The plan must match the required format; adjust the plan, not the prompt.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Re-plan to match the format",
          },
        },
        {
          id: "ciege-u6-s2-pl-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A prompt reads: 'Write a letter to a friend describing your first day at a new school.' Write a 4-point plan including audience, purpose, format and key content.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full plan", statement: "All requirements covered." }],
            steps: [
              { reasoning: "Audience and purpose identified (friend; share experience).", marks: 1, markCode: "AO2" },
              { reasoning: "Format noted (informal letter).", marks: 1, markCode: "AO2" },
              { reasoning: "Key content points listed (arrival, classes, feelings, ending).", marks: 1, markCode: "AO2" },
              { reasoning: "Plan is concise and ordered logically.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Complete 4-point plan",
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
            { id: "a", text: "Whether it answers the question" },
            { id: "b", text: "Spelling" },
            { id: "c", text: "Punctuation" },
            { id: "d", text: "Paragraph length" },
          ], correctChoiceId: "a" },
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
        {
          id: "ciege-u6-s2-ed-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you check in your writing besides spelling and punctuation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The colour of the paper" },
            { id: "b", text: "How long it is" },
            { id: "c", text: "Whether you liked the topic" },
            { id: "d", text: "Whether it answers the question" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Editing", statement: "Content before surface errors." }],
            steps: [
              { reasoning: "Always verify the response answers the actual prompt.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Whether it answers the question",
          },
        },
        {
          id: "ciege-u6-s2-ed-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things on an editing checklist for exam writing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Editing checklist", statement: "Two valid checks." }],
            steps: [
              { reasoning: "Any two of: answers the question, register, spelling, punctuation, flow.", marks: 1, markCode: "AO2" },
              { reasoning: "Both items are valid checklist entries.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two checklist items",
          },
        },
        {
          id: "ciege-u6-s2-ed-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "You wrote an informal letter but the prompt asked for a formal one. What is the problem?",
          response: { type: "mcq", choices: [
            { id: "a", text: "There is no problem" },
            { id: "b", text: "Register is wrong for the task" },
            { id: "c", text: "Spelling is wrong" },
            { id: "d", text: "The title is missing" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register", statement: "Tone must match the audience." }],
            steps: [
              { reasoning: "A formal letter needs formal register; informal language would lose marks.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Register is wrong",
          },
        },
        {
          id: "ciege-u6-s2-ed-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the final three sentences of a letter to your headteacher requesting a change to school rules.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal closing", statement: "Polite request + sign-off." }],
            steps: [
              { reasoning: "The sentences politely restate the request.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register is maintained throughout.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal closing sentences",
          },
        },
        {
          id: "ciege-u6-s2-ed-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'register' mean in writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The tone or level of formality" },
            { id: "b", text: "The number of paragraphs" },
            { id: "c", text: "The margin width" },
            { id: "d", text: "The font size" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Register", statement: "Tone matched to audience." }],
            steps: [
              { reasoning: "Register is the level of formality appropriate to the audience and purpose.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Tone or level of formality",
          },
        },
        {
          id: "ciege-u6-s2-ed-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why you should check that your writing 'flows logically'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Coherence", statement: "Ideas must connect." }],
            steps: [
              { reasoning: "Logical flow keeps the reader following the argument or story.", marks: 1, markCode: "AO2" },
              { reasoning: "Checking catches jumps or missing links between ideas.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Keeps ideas connected",
          },
        },
        {
          id: "ciege-u6-s2-ed-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You finish writing with 3 minutes left. What should you do first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stop and submit immediately" },
            { id: "b", text: "Add more detail to paragraph one" },
            { id: "c", text: "Rewrite the introduction" },
            { id: "d", text: "Go through the editing checklist" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Final check", statement: "Use remaining time to check." }],
            steps: [
              { reasoning: "The last few minutes should be spent checking against the editing checklist.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Go through the editing checklist",
          },
        },
        {
          id: "ciege-u6-s2-ed-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a checklist of three items you would check in an essay before submitting.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Editing checklist", statement: "Three valid checks." }],
            steps: [
              { reasoning: "Answers the question / thesis supported.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling and punctuation accurate.", marks: 1, markCode: "AO2" },
              { reasoning: "Paragraphs flow logically / register appropriate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three checklist items",
          },
        },
        {
          id: "ciege-u6-s2-ed-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you do if you run out of ideas halfway through writing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Completeness", statement: "Finish the response." }],
            steps: [
              { reasoning: "Write a placeholder or move to another section rather than leaving blanks.", marks: 1, markCode: "AO2" },
              { reasoning: "Return to it later; completeness matters more than perfection.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Use a placeholder and return later",
          },
        },
        {
          id: "ciege-u6-s2-ed-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it better to write a complete draft first and polish later?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Drafting", statement: "Completeness first." }],
            steps: [
              { reasoning: "It guarantees you answer every part of the prompt.", marks: 1, markCode: "AO2" },
              { reasoning: "Polishing a complete draft is safer than perfecting one section.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Completeness is secured first",
          },
        },
        {
          id: "ciege-u6-s2-ed-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the final minute of an exam, what is the most valuable use of your time?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Writing a new paragraph" },
            { id: "b", text: "Reading the whole paper again" },
            { id: "c", text: "Checking spelling and punctuation" },
            { id: "d", text: "Nothing" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Last-minute check", statement: "Catch surface errors." }],
            steps: [
              { reasoning: "A quick scan for spelling and punctuation can still earn easy marks.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Checking spelling and punctuation",
          },
        },
        {
          id: "ciege-u6-s2-ed-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You wrote a speech but forgot the greeting 'Good morning, everyone.' Describe exactly what you would do to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Problem solving", statement: "Fix format errors." }],
            steps: [
              { reasoning: "Identify the missing speech convention.", marks: 1, markCode: "AO2" },
              { reasoning: "Insert the greeting at the start of the response.", marks: 1, markCode: "AO2" },
              { reasoning: "Check other speech features (closing, direct address).", marks: 1, markCode: "AO2" },
              { reasoning: "This shows editing and format awareness.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Add the greeting and check other conventions",
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
