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
              { id: "a", text: "The first sentence of an essay" },
              { id: "b", text: "The sentence stating a paragraph's main idea" },
              { id: "c", text: "A transition word" },
              { id: "d", text: "The concluding sentence" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-fl-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which transition best signals contrast between ideas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Therefore" },
              { id: "b", text: "For example" },
              { id: "c", text: "In addition" },
              { id: "d", text: "However" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition types",
                statement:
                  "'However' signals contrast; 'therefore' result; 'for example' illustration; 'in addition' addition.",
              },
            ],
            steps: [
              {
                reasoning: "'However' introduces a contrasting idea.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** However",
            commonErrors: ["Choosing a result or addition transition."],
          },
        },
        {
          id: "cie-ol-fl-co-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'referencing' in cohesive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating every word exactly" },
              {
                id: "b",
                text: "Using pronouns or repeated key words to link back to earlier ideas",
              },
              { id: "c", text: "Adding a bibliography" },
              { id: "d", text: "Quoting the text directly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Referencing",
                statement:
                  "Pronouns and repeated key terms connect sentences without clumsy repetition.",
              },
            ],
            steps: [
              {
                reasoning: "Referencing links back to earlier ideas.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Pronouns/key words linking back",
            commonErrors: ["Confusing referencing with quotation."],
          },
        },
        {
          id: "cie-ol-fl-co-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which order of ideas best suits a narrative essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alphabetical order" },
              { id: "b", text: "Order of importance only" },
              { id: "c", text: "Random order" },
              { id: "d", text: "Chronological order" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering",
                statement:
                  "Chronological suits narrative; logical/importance suits argument; spatial suits description.",
              },
            ],
            steps: [
              {
                reasoning: "Narrative follows time — chronological order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Other orders do not fit a story's sequence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Chronological order",
            commonErrors: ["Applying importance order to a narrative."],
          },
        },
        {
          id: "cie-ol-fl-co-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph jumps abruptly from one idea to an unrelated one. What is the best remedy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Add a transition or reorder the sentences",
              },
              { id: "b", text: "Delete the topic sentence" },
              { id: "c", text: "Make the paragraph longer" },
              { id: "d", text: "Add more adjectives" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Logical flow",
                statement:
                  "If the reader cannot see the connection, add a transition or reorder.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transitions or reordering restore the logical connection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Length and adjectives do not fix broken flow.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Add a transition or reorder the sentences",
            commonErrors: ["Adding detail instead of fixing the connection."],
          },
        },
        {
          id: "cie-ol-fl-co-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A well-formed paragraph contains a topic sentence, three supporting sentences and one linking sentence. How many sentences does it contain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph structure",
                statement:
                  "Topic sentence + support + linking close = coherent paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "1 + 3 + 1 = 5 sentences.",
                working: "1 + 3 + 1 = 5",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only the supporting sentences."],
          },
        },
        {
          id: "cie-ol-fl-co-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a text of 10 sentences, 4 use pronouns and 3 repeat key words to link back to earlier ideas. How many sentences use surface linking devices?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Surface linking",
                statement:
                  "Pronouns and repeated key terms are cohesion devices at sentence level.",
              },
            ],
            steps: [
              {
                reasoning: "4 + 3 = 7 sentences with linking devices.",
                working: "4 + 3 = 7",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both device types count as surface cohesion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "7",
            commonErrors: ["Counting only one type of device."],
          },
        },
        {
          id: "cie-ol-fl-co-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An essay plan contains 6 paragraphs. Each paragraph needs one topic sentence and two supporting sentences. How many sentences are planned in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph planning",
                statement:
                  "Each paragraph = 1 topic sentence + supporting sentences.",
              },
            ],
            steps: [
              {
                reasoning: "Each paragraph needs 1 + 2 = 3 sentences.",
                working: "1 + 2 = 3",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "6 x 3 = 18 sentences.",
                working: "6 x 3 = 18",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "18",
            commonErrors: ["Forgetting the topic sentences."],
          },
        },
        {
          id: "cie-ol-fl-co-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one example of referencing and explain how it links ideas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Referencing",
                statement:
                  "Pronouns and repeated key words connect sentences without repetition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Valid example, e.g. 'The match was cancelled. It had been postponed twice.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'It' links back to 'the match', avoiding repetition while maintaining flow.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "E.g. 'The match was cancelled. It had been postponed twice.' — 'it' refers back to 'the match'.",
            commonErrors: ["Giving an example without explaining the link."],
          },
        },
        {
          id: "cie-ol-fl-co-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would choose between chronological, logical and spatial order for three different text types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering",
                statement:
                  "Match the order to the text type: narrative=chronological, argument=logical, description=spatial.",
              },
            ],
            steps: [
              {
                reasoning: "Chronological for narrative — follows time.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Logical/importance order for argument or explanation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Spatial order for description — organised by place.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Narrative=chronological, argument=logical, description=spatial.",
            commonErrors: ["Using one order for every text type."],
          },
        },
        {
          id: "cie-ol-fl-co-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The sentences 'The match was cancelled. The pitch was flooded.' lack a clear link. Rewrite the pair with an appropriate transition and explain your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Transition choice",
                statement:
                  "Match the transition to the logical relationship — here, cause and result.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appropriate rewrite, e.g. 'The match was cancelled because the pitch was flooded.' or 'The pitch was flooded; as a result, the match was cancelled.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Transition signals cause/result relationship correctly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sentence remains grammatically correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Explanation identifies the cause-effect relationship.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "E.g. 'The match was cancelled because the pitch was flooded.' — 'because' signals cause.",
            commonErrors: ["Choosing a transition that signals the wrong relationship."],
          },
        },
        {
          id: "cie-ol-fl-co-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main reason for keeping one main idea per paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners count paragraphs" },
              {
                id: "b",
                text: "It keeps the reader oriented and the argument clear",
              },
              { id: "c", text: "It makes the essay look longer" },
              { id: "d", text: "It saves writing time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph focus",
                statement:
                  "One idea per paragraph keeps the reader oriented and the structure clear.",
              },
            ],
            steps: [
              {
                reasoning: "Focused paragraphs aid clarity and readability.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Keeps the reader oriented",
            commonErrors: ["Thinking paragraphing is just a formatting rule."],
          },
        },
        {
          id: "cie-ol-fl-co-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'Exercise is good. It helps you. You should do it.' Identify two cohesion weaknesses and rewrite the sentences to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cohesion repair",
                statement:
                  "Vague pronouns and repetition weaken cohesion; specific wording and transitions strengthen it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness identified: vague pronouns ('it', 'you') and repetition of 'good/helps/do'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Rewrite uses specific wording, e.g. 'Regular exercise improves fitness and mood, so everyone should include it in their routine.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rewrite is grammatically correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Both weaknesses addressed in the rewrite.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "E.g. 'Regular exercise improves fitness and mood, so everyone should include it in their routine.'",
            commonErrors: ["Identifying weaknesses without a coherent rewrite."],
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
              { id: "a", text: "They are identical" },
              { id: "b", text: "Editing is faster" },
              {
                id: "c",
                text: "Proofreading is for essays; editing for letters",
              },
              {
                id: "d",
                text: "Proofreading checks errors; editing improves content and style",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-fl-edt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word correctly completes the sentence: '___ going to the library.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're" },
              { id: "b", text: "There" },
              { id: "c", text: "Theirs" },
              { id: "d", text: "Their" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophones",
                statement:
                  "'They're' = they are; 'their' = possession; 'there' = place.",
              },
            ],
            steps: [
              {
                reasoning: "'They're' is the contraction of 'they are'.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** They're",
            commonErrors: ["Confusing their/there/they're."],
          },
        },
        {
          id: "cie-ol-fl-edt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'homophone'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very long words" },
              { id: "b", text: "Words that rhyme perfectly" },
              {
                id: "c",
                text: "Words that sound alike but have different meanings and spellings",
              },
              { id: "d", text: "Words with the same meaning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophone",
                statement:
                  "Words pronounced alike but differing in meaning and spelling — e.g. their/there/they're.",
              },
            ],
            steps: [
              {
                reasoning: "Homophones sound alike, differ in meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sound alike, different meanings",
            commonErrors: ["Confusing homophones with synonyms."],
          },
        },
        {
          id: "cie-ol-fl-edt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the strongest edit of 'The man walked quickly into the room'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The man, walking, quickly, into the room",
              },
              {
                id: "b",
                text: "The man walked quickly into the room very fast",
              },
              { id: "c", text: "The man strode into the room" },
              { id: "d", text: "The guy went into the room" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Strong verbs",
                statement:
                  "Editing strengthens weak verbs and removes redundancy for clearer expression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Strode' replaces 'walked quickly' with one precise verb.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Other options add redundancy, weaken register or break grammar.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** The man strode into the room",
            commonErrors: ["Choosing an option that adds words instead of removing them."],
          },
        },
        {
          id: "cie-ol-fl-edt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence uses the apostrophe correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's a beautiful day." },
              { id: "b", text: "You're book is here." },
              { id: "c", text: "The dog's are barking." },
              { id: "d", text: "Its raining outside." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Apostrophes",
                statement:
                  "'It's' = it is; 'its' = possession. Contractions need apostrophes.",
              },
            ],
            steps: [
              {
                reasoning: "'It's' correctly contracts 'it is'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "B and D misuse contractions; C uses apostrophe for plural.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** It's a beautiful day.",
            commonErrors: ["Using 'its' for 'it is'."],
          },
        },
        {
          id: "cie-ol-fl-edt-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A directed writing task allows a maximum of 250 words. A draft contains 200 words. How many more words can be added?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Word limit",
                statement: "Drafts must stay within the stated maximum word count.",
              },
            ],
            steps: [
              {
                reasoning: "250 - 200 = 50 words available.",
                working: "250 - 200 = 50",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "50",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "cie-ol-fl-edt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A proofreading checklist has 8 items. A student has completed 5 of them. How many items remain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading checklist",
                statement:
                  "Systematic checking covers spelling, punctuation, grammar and formatting.",
              },
            ],
            steps: [
              {
                reasoning: "8 - 5 = 3 items remaining.",
                working: "8 - 5 = 3",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Remaining items must still be checked before submission.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "3",
            commonErrors: ["Stopping the checklist halfway through."],
          },
        },
        {
          id: "cie-ol-fl-edt-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A draft is 180 words. The writer wants to add a 25-word quotation and keep the total within a 190-word limit. How many words must be cut from the draft?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Word limit",
                statement:
                  "Additions count toward the total; the final length must not exceed the maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Adding the quotation gives 180 + 25 = 205 words.",
                working: "180 + 25 = 205",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "205 exceeds the 190-word limit by 15 words.",
                working: "205 - 190 = 15",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning: "The draft must lose 15 words.",
                working: "15",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "15",
            commonErrors: ["Forgetting the added quotation counts toward the limit."],
          },
        },
        {
          id: "cie-ol-fl-edt-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is reading your work aloud useful when proofreading?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Proofreading technique",
                statement:
                  "Reading aloud exposes awkward phrasing and errors the eye skips over.",
              },
            ],
            steps: [
              {
                reasoning: "The ear catches what silent reading misses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Awkward grammar, missing words and rhythm problems become obvious.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Reading aloud reveals awkward phrasing and errors silent reading skips.",
            commonErrors: ["Claiming it only helps with spelling."],
          },
        },
        {
          id: "cie-ol-fl-edt-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three pairs of homophones to check when proofreading and give one correct use for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Homophone pairs",
                statement:
                  "Common pairs: their/there/they're, its/it's, your/you're, to/too/two, hear/here.",
              },
            ],
            steps: [
              {
                reasoning: "Any three valid homophone pairs identified.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct uses given for each pair.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Uses are accurate and distinct.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "E.g. their/there/they're, its/it's, your/you're — with correct uses.",
            commonErrors: ["Listing pairs without correct uses."],
          },
        },
        {
          id: "cie-ol-fl-edt-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Edit this sentence for all errors: 'their going too the park, its to late to play football'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Error correction",
                statement:
                  "Fix homophones, punctuation and word choice systematically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corrected version: 'They're going to the park; it's too late to play football.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'their' → 'they're', 'too' → 'to', 'its' → 'it's', 'to late' → 'too late'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Punctuation added (semicolon or full stop).",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "All four errors identified and corrected.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "'They're going to the park; it's too late to play football.'",
            commonErrors: ["Correcting spelling but missing 'to/too' confusion."],
          },
        },
        {
          id: "cie-ol-fl-edt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you reserve time for proofreading in an exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review time",
                statement:
                  "Even a few minutes of proofreading catches costly errors.",
              },
            ],
            steps: [
              {
                reasoning: "Errors in spelling, punctuation and grammar cost marks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Finishing early leaves no time for a final check if you run late.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Reserved time catches errors that would otherwise cost marks.",
            commonErrors: ["Assuming first drafts are good enough."],
          },
        },
        {
          id: "cie-ol-fl-edt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the difference between a proofreading pass and an editing pass, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-stage revision",
                statement:
                  "Proofreading fixes surface errors; editing improves content, structure and style.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proofreading = surface check: spelling, homophones, punctuation, grammar.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Editing = improvement: stronger verbs, less repetition, varied sentences, paragraph focus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example of proofreading, e.g. 'their' → 'they're'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example of editing, e.g. 'walked quickly' → 'strode'.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Proofreading fixes errors (their→they're); editing improves expression (walked quickly→strode).",
            commonErrors: ["Treating both passes as the same task."],
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
