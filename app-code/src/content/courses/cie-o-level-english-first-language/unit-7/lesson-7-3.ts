import type { Lesson } from "../../../types.ts";

export const lesson173: Lesson = {
  id: "cie-ol-fl-lesson-7-3",
  code: "7-3",
  title: "Paragraphing, cohesion and editing",
  goal: "I CAN organise ideas into coherent paragraphs, link them effectively and proofread accurately.",
  standards: ["1119 Writing: organisation and editing"],
  vocabulary: [
    {
      term: "Cohesion",
      definition: "The linking of ideas so the text flows logically.",
    },
    {
      term: "Topic sentence",
      definition: "The sentence that states a paragraph's main idea.",
    },
    {
      term: "Transition",
      definition:
        "A word or phrase that connects ideas between sentences or paragraphs.",
    },
    {
      term: "Referencing",
      definition:
        "Using pronouns or repeated key words to link back to earlier ideas.",
    },
    {
      term: "Proofreading",
      definition:
        "Checking a finished text for errors in spelling, punctuation and grammar.",
    },
    {
      term: "Editing",
      definition:
        "Improving content, structure and style beyond mere error correction.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-cohesion",
      title: "Paragraphing and cohesion",
      skill:
        "Organise writing into coherent paragraphs linked by transitions and referencing.",
      lesson: {
        sections: [
          {
            heading: "Paragraph structure",
            body: "Each paragraph should develop one idea: open with a topic sentence, support it with detail or evidence, and close with a linking or concluding sentence. One paragraph per point keeps the reader oriented.",
          },
          {
            heading: "Transitions and linking",
            body: "Connect ideas with appropriate transitions: 'however' (contrast), 'therefore' (result), 'for example' (illustration), 'in addition' (addition). Within paragraphs, use referencing — pronouns ('this', 'they') and repeated key words — to avoid repetition while maintaining flow.",
          },
          {
            heading: "Logical flow",
            body: "Check that each paragraph follows from the last. If the reader cannot see the connection, add a transition or reorder. Chronological order suits narrative; logical/importance order suits argument; spatial order suits description.",
          },
        ],
        keyFormulas: [
          {
            name: "Cohesion",
            statement: "Topic sentence+support+transition=coherent paragraph.",
          },
        ],
        workedExample: {
          problem:
            "Link two paragraphs: one on benefits of exercise, the next on diet.",
          solution:
            "'Exercise is only half the story. A balanced diet completes the picture.' — contrast/addition transition bridging ideas.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'topic sentence'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sentence stating a paragraph's main idea" },
              { id: "b", text: "The first sentence of an essay" },
              { id: "c", text: "A transition word" },
              { id: "d", text: "The concluding sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement:
                  "States the paragraph's central idea, usually at the start.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence = paragraph's main point.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sentence stating the paragraph's main idea",
            commonErrors: ["Confusing with introduction or conclusion."],
          },
        },
        {
          id: "cie-ol-fl-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are transitions important in writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Transitions",
                statement:
                  "Linking words signal relationships between ideas, guiding the reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They show logical relationships (contrast, result, example).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Without them, ideas feel disconnected and the argument is harder to follow.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Transitions signal relationships and guide the reader through the argument.",
            commonErrors: [
              "Listing transition words without explaining function.",
            ],
          },
        },
        {
          id: "cie-ol-fl-co-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between cohesion and coherence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion vs coherence",
                statement:
                  "Cohesion = surface linking; coherence = underlying logical sense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cohesion: transitions, pronouns, repeated key terms linking sentences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Coherence: the ideas themselves make sense and follow logically.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "A text can be cohesive (linked) but incoherent (illogical) — or vice versa.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear distinction with example.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Cohesion=surface links; coherence=logical sense.",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "cie-ol-fl-co-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Paragraphing and cohesion.",
          parts: [
            { label: "a", prompt: "Define topic sentence.", marks: 1 },
            {
              label: "b",
              prompt: "Name three types of transition with examples.",
              marks: 3,
            },
            { label: "c", prompt: "Explain cohesion vs coherence.", marks: 3 },
            {
              label: "d",
              prompt:
                "Add a transition to join: 'Exercise improves health. Sleep is equally important.'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cohesion",
                statement: "Topic+transitions+cohesion/coherence+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sentence stating paragraph's main idea.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Any three of contrast (however), result (therefore), example (for instance), addition (in addition).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correctly categorised.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Examples given.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Cohesion = surface linking devices.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Coherence = underlying logical sense.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Distinction clear.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Appropriate transition chosen, e.g. 'Similarly' or 'In addition'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Sentence grammatically correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Transition fits the relationship.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) main idea (b) however/therefore/for instance (c) surface vs sense (d) suitable transition",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Three with examples.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Distinction clear.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Correct transition.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Confusing cohesion and coherence."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-editing",
      title: "Editing and proofreading",
      skill: "Revise drafts for errors, clarity and improved expression.",
      lesson: {
        sections: [
          {
            heading: "Proofreading checklist",
            body: "Check systematically: spelling (especially homophones — their/there/they're), punctuation (apostrophes, commas, full stops), grammar (subject-verb agreement, tense consistency), and formatting (paragraph breaks, capital letters).",
          },
          {
            heading: "Editing beyond errors",
            body: "Editing improves content: strengthen weak verbs, remove repetition, vary sentence length, check that each paragraph has a clear point, and ensure the conclusion answers the question. Ask: does every sentence earn its place?",
          },
          {
            heading: "Time management",
            body: "Never submit a first draft. Reserve exam time for review — even five minutes of proofreading catches costly errors. Read aloud to catch awkward phrasing your eye skips over.",
          },
        ],
        keyFormulas: [
          {
            name: "Editing",
            statement:
              "Proofread errors+improve expression+reserve time=polished work.",
          },
        ],
        workedExample: {
          problem: "Edit: 'Their going to the park, its a nice day'.",
          solution:
            "'They're going to the park; it's a nice day.' — homophones corrected, punctuation added.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-edt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between proofreading and editing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Proofreading checks errors; editing improves content and style",
              },
              { id: "b", text: "They are identical" },
              {
                id: "c",
                text: "Proofreading is for essays; editing for letters",
              },
              { id: "d", text: "Editing is faster" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proofreading vs editing",
                statement:
                  "Proofreading = surface errors; editing = improving content, structure and style.",
              },
            ],
            steps: [
              {
                reasoning: "Editing is broader than error correction.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Proofreading=errors; editing=improvement",
            commonErrors: ["Treating them as the same process."],
          },
        },
        {
          id: "cie-ol-fl-edt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you proofread your work in an exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading value",
                statement:
                  "Error correction prevents lost marks and signals care and control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Spelling/punctuation errors can cost marks in language-based subjects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Clean presentation signals competence to the examiner.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Proofreading prevents lost marks and signals control.",
            commonErrors: ["Saying 'it looks nice' without mentioning marks."],
          },
        },
        {
          id: "cie-ol-fl-edt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What should you check when editing beyond surface errors?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deep editing",
                statement:
                  "Review content, structure, variety and relevance — not just correctness.",
              },
            ],
            steps: [
              {
                reasoning: "Does each paragraph develop one clear idea?",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Are there weak/repeated words or sentence structures to vary?",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Does the conclusion answer the actual question?",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear editing criteria.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Check paragraph focus, word/sentence variety, and relevance to the question.",
            commonErrors: ["Only checking spelling while ignoring content."],
          },
        },
        {
          id: "cie-ol-fl-edt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Editing and proofreading.",
          parts: [
            { label: "a", prompt: "Define proofreading.", marks: 1 },
            {
              label: "b",
              prompt: "Correct: 'their going to the park its a nice day'",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What does editing involve beyond proofreading?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Suggest a proofreading checklist for an exam.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Editing",
                statement: "Definition+correction+deep editing+checklist.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Checking for spelling, punctuation, grammar errors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "'They're going to the park; it's a nice day.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Both homophones corrected.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Punctuation added.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Improving content: weaker verbs, repetition, variety.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Checking paragraph focus and relevance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Ensuring conclusion answers the question.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Checklist includes spelling/homophones.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Punctuation and grammar checks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Capitalisation and paragraphing.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) error check (b) corrected homophones (c) content/style improvement (d) checklist",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Fully corrected.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Deep editing explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Usable checklist.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Submitting unproofread work; homophone errors."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-editing-notes",
      title: "Paragraphing, cohesion and editing — revision notes",
      summary:
        "Paragraph structure, transitions, cohesion vs coherence, proofreading and editing.",
      sections: [
        {
          heading: "Paragraphs",
          body: "One idea per paragraph: topic sentence, supporting detail, linking close. Use transitions (however, therefore, for example) to connect ideas.",
        },
        {
          heading: "Cohesion vs coherence",
          body: "Cohesion = surface links (pronouns, transitions, key words). Coherence = underlying logical sense. Both needed for readable writing.",
        },
        {
          heading: "Editing",
          body: "Proofreading: spelling, homophones, punctuation, grammar. Editing: improve verbs, reduce repetition, check paragraph focus and relevance to question.",
        },
        {
          heading: "Exam checklist",
          body: "Did I reserve time to proofread? Are there homophone errors? Does the conclusion answer the question? Does each paragraph have one clear point?",
        },
      ],
    },
  ],
};
