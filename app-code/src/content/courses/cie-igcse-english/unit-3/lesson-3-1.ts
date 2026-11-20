import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ciege-u3-lesson-3-1",
  code: "3-1",
  title: "Narrative Structure and Openings",
  goal: "I CAN plan and write an effective narrative opening.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: narrative"],
  vocabulary: [
    { term: "Narrative", definition: "A story with characters, setting and events." },
    { term: "Opening", definition: "The first part of a story that hooks the reader." },
    { term: "In medias res", definition: "Starting in the middle of the action." },
    { term: "Exposition", definition: "Background information at the start." },
    { term: "Hook", definition: "An attention-grabbing opening device." },
  ],
  concepts: [
    {
      id: "ciege-u3-s1-structure",
      title: "Story structure",
      skill: "Plan a narrative with clear beginning, middle and end.",
      lesson: {
        sections: [
          {
            heading: "The three parts",
            body: "Beginning: introduce character, setting and situation. Middle: the problem develops and events unfold. End: the problem resolves — the character changes or learns something.",
          },
          {
            heading: "Plot vs character",
            body: "A strong narrative links plot (what happens) to character (how they change). The best endings show growth — the character is different because of what happened.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a story about a lost dog. What is the structure?",
          solution: "Beginning: girl loses dog. Middle: searches, asks for help, finds clues. End: dog returns — girl learns about asking for help.",
        },
      },
      questions: [
        {
          id: "ciege-u3-s1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a narrative?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Title, middle, end" }, { id: "b", text: "Beginning, middle, end" }, { id: "c", text: "Characters, setting, problem" }, { id: "d", text: "Start, problem, solution" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Narrative structure", statement: "Beginning, middle, end." }],
            steps: [
              { reasoning: "Every story has beginning, middle and end.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Beginning, middle, end",
          },
        },
        {
          id: "ciege-u3-s1-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a topic sentence for the opening of a story about a mysterious package.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opening sentence", statement: "Hook the reader immediately." }],
            steps: [
              { reasoning: "The sentence introduces intrigue or a character.", marks: 1, markCode: "AO2" },
              { reasoning: "It is a complete, punctuated sentence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One engaging opening sentence",
          },
        },
        {
          id: "ciege-u3-s1-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences that could open a story set on a beach at sunset.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Descriptive opening", statement: "Setting + mood." }],
            steps: [
              { reasoning: "Both sentences describe the setting or mood.", marks: 1, markCode: "AO2" },
              { reasoning: "Uses sensory or descriptive language.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two descriptive sentences",
          },
        },
        {
          id: "ciege-u3-s1-st-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Plan a three-part outline for a story about finding a treasure map.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "Clear beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning introduces character and discovery of map.", marks: 1, markCode: "AO2" },
              { reasoning: "Middle develops the search and obstacles.", marks: 1, markCode: "AO2" },
              { reasoning: "End resolves — treasure found or lesson learned.", marks: 1, markCode: "AO2" },
              { reasoning: "All three parts are coherent.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-part outline",
          },
        },
      ],
    },
    {
      id: "ciege-u3-s1-openings",
      title: "Effective openings",
      skill: "Use hooks, dialogue and in medias res to open stories.",
      lesson: {
        sections: [
          {
            heading: "Hooks",
            body: "Start with action, a question, dialogue, or an unusual image. Avoid lengthy description or background — get to the point quickly.",
          },
          {
            heading: "In medias res",
            body: "Starting in the middle of the action ('The ship was sinking.') immediately creates tension and makes readers want to know what happened before.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write an opening using dialogue.",
          solution: "'Don't touch that,' whispered Mara, pointing at the strange box on the doorstep.",
        },
      },
      questions: [
        {
          id: "ciege-u3-s1-op-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'in medias res'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Starting at the beginning" }, { id: "b", text: "Starting in the middle of the action" }, { id: "c", text: "Ending the story" }, { id: "d", text: "Using flashback" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "In medias res", statement: "Start in the middle of action." }],
            steps: [
              { reasoning: "It means beginning mid-action for immediate interest.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Middle of action",
          },
        },
        {
          id: "ciege-u3-s1-op-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which opening is most likely to hook a reader?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It was a nice day." }, { id: "b", text: "The bomb was ticking." }, { id: "c", text: "I will tell you about my day." }, { id: "d", text: "There was a boy." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hook", statement: "Immediate tension or curiosity." }],
            steps: [
              { reasoning: "'The bomb was ticking' creates instant suspense.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The bomb was ticking.",
          },
        },
        {
          id: "ciege-u3-s1-op-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write an opening sentence for a story using dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue opening", statement: "Speech + attribution." }],
            steps: [
              { reasoning: "The sentence contains dialogue in inverted commas.", marks: 1, markCode: "AO2" },
              { reasoning: "It creates intrigue or character voice.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One dialogue opening",
          },
        },
        {
          id: "ciege-u3-s1-op-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two different opening sentences for the same story idea — one using action, one using description.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Varied openings", statement: "Different approaches." }],
            steps: [
              { reasoning: "First opening uses action or dialogue.", marks: 1, markCode: "AO2" },
              { reasoning: "Second uses descriptive language.", marks: 1, markCode: "AO2" },
              { reasoning: "Both are engaging and punctuated correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two different openings",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u3-s1-narr-notes",
      title: "Narrative structure and openings — revision notes",
      summary: "Beginning-middle-end, hooks, in medias res.",
      sections: [
        { heading: "Structure", body: "Plan beginning (character+setting), middle (problem develops), end (resolution + change)." },
        { heading: "Openings", body: "Use action, dialogue, question or striking image. In medias res drops readers into the action immediately." },
      ],
    },
  ],
};
