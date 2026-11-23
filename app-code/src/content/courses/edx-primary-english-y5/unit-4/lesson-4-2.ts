import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpe5-u4-lesson-4-2",
  code: "4-2",
  title: "Persuasive and Discursive Writing",
  goal: "I CAN write persuasive and balanced discursive texts.",
  standards: ["Year 5 Writing"],
  vocabulary: [
    {
      term: "Persuasive writing",
      definition: "Writing that tries to convince the reader.",
    },
    {
      term: "Discursive writing",
      definition: "Balanced discussion exploring both sides.",
    },
    {
      term: "Anecdote",
      definition: "A short personal story used as evidence.",
    },
    {
      term: "Rhetorical question",
      definition: "A question asked for effect, not an answer.",
    },
  ],
  concepts: [
    {
      id: "edpe5-u4-persuasive",
      title: "Persuasive techniques",
      skill: "Use rhetorical questions, emotive language and evidence.",
      lesson: {
        sections: [
          {
            heading: "Convincing the reader",
            body: "Persuasive writing uses: emotive language ('devastating', 'incredible'), rhetorical questions ('Can we really ignore this?'), facts and statistics, expert opinions, anecdotes, and a clear call to action. Structure: hook → reasons → evidence → conclusion.",
          },
          {
            heading: "Discursive writing",
            body: "Discursive writing explores a topic fairly. Unlike persuasive writing (one side), discursive presents both for and against, then may conclude with a balanced view. Use 'on the one hand... on the other hand' and acknowledge counter-arguments.",
          },
        ],
        keyFormulas: [
          {
            name: "Persuasive",
            statement: "Hook + reasons + evidence + call to action",
          },
          { name: "Discursive", statement: "Both sides + balanced conclusion" },
        ],
        workedExample: {
          problem:
            "Write a persuasive opening for 'We need more school gardens'.",
          solution:
            "Imagine walking into a classroom where children learn biology by growing their own food. Is that not a better way to learn than textbooks alone?",
        },
      },
      questions: [
        {
          id: "edpe5-u4-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is emotive language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual language" },
              { id: "b", text: "Language that triggers emotion" },
              { id: "c", text: "Formal language" },
              { id: "d", text: "Simple language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Emotive language",
                statement: "Triggers feelings.",
              },
            ],
            steps: [
              {
                reasoning: "Emotive words stir emotions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Triggers emotion",
            commonErrors: ["Confusing with factual."],
          },
        },
        {
          id: "edpe5-u4-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question expecting an answer" },
              { id: "b", text: "A question asked for effect" },
              { id: "c", text: "A question in a letter" },
              { id: "d", text: "A quiz question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhetorical question",
                statement: "Effect not answer.",
              },
            ],
            steps: [
              {
                reasoning: "Rhetorical questions persuade, not inform.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** For effect",
            commonErrors: ["Confusing with real questions."],
          },
        },
        {
          id: "edpe5-u4-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a persuasive sentence using emotive language for 'Save the rainforests'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Emotive language",
                statement: "Powerful words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Uses emotive words: 'devastating', 'precious', 'irreversible'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates urgency or feeling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Persuasive, not just factual.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Emotive persuasive sentence",
            commonErrors: ["Factual only."],
          },
        },
        {
          id: "edpe5-u4-pe-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare persuasive and discursive writing. When would you use each?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Text types",
                statement: "One side vs both sides.",
              },
            ],
            steps: [
              {
                reasoning: "Persuasive: one viewpoint, tries to convince.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Discursive: both sides, explores fairly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justifies when each is appropriate.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Persuasive=convince; Discursive=explore both",
            commonErrors: ["No justification."],
          },
        },
      ],
    },
    {
      id: "edpe5-u4-cohesion",
      title: "Text Structure and Cohesion",
      skill: "Organise writing with paragraphs and cohesive devices.",
      lesson: {
        sections: [
          {
            heading: "Paragraph structure",
            body: "Each paragraph needs: topic sentence (main idea), supporting sentences (evidence, explanation, examples), and sometimes a concluding sentence. Paragraphs should flow logically — one idea per paragraph. Use topic sentences to guide the reader.",
          },
          {
            heading: "Cohesion devices",
            body: "Cohesion links ideas: connectives ('however', 'furthermore', 'as a result'), pronouns ('this', 'they', 'it'), repetition of key words, synonyms. These make writing flow smoothly instead of jumping between ideas.",
          },
        ],
        keyFormulas: [
          {
            name: "Cohesion",
            statement: "Connectives + pronouns + repetition + synonyms",
          },
        ],
        workedExample: {
          problem:
            "Improve cohesion: 'Dogs are loyal. Cats are independent. Dogs need walks. Cats need litter trays.'",
          solution:
            "Dogs are loyal companions that need daily walks. Cats, however, are more independent and require litter trays.",
        },
      },
      questions: [
        {
          id: "edpe5-u4-cs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The last sentence" },
              { id: "b", text: "The main idea of a paragraph" },
              { id: "c", text: "A question" },
              { id: "d", text: "A heading" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement: "Main idea.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence states paragraph's point.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Main idea",
            commonErrors: ["Wrong position."],
          },
        },
        {
          id: "edpe5-u4-cs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cohesion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing quickly" },
              { id: "b", text: "Linking ideas smoothly" },
              { id: "c", text: "Using long words" },
              { id: "d", text: "Writing in paragraphs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion",
                statement: "Smooth links.",
              },
            ],
            steps: [
              {
                reasoning: "Cohesion = ideas connect logically.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Linking ideas",
            commonErrors: ["Confusing with coherence."],
          },
        },
        {
          id: "edpe5-u4-cs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add a connective to improve flow: 'The experiment failed. The results were still useful.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connectives",
                statement: "However/although/nevertheless.",
              },
            ],
            steps: [
              {
                reasoning: "Chooses contrastive connective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'However, the results were still useful.' or 'Although the experiment failed...'",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Improved flow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "However/although + improved sentence",
            commonErrors: ["Wrong connective."],
          },
        },
        {
          id: "edpe5-u4-cs-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a topic sentence and two supporting sentences for a paragraph about 'The benefits of reading'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph writing",
                statement: "Topic + support.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence states main idea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two supporting sentences give reasons/examples.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Cohesive paragraph.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Topic + 2 supporting sentences",
            commonErrors: ["No topic sentence."],
          },
        },
      ],
    },
  ],
};
