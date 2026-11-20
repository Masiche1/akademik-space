import type { Lesson } from "../../../types.ts";

export const lesson1031: Lesson = {
  id: "cile-u10-lesson-10-3",
  code: "10-3",
  title: "Stage 9 Checkpoint — Writing and Exam Skills",
  goal: "I CAN plan and write clearly at Stage 9 checkpoint standard.",
  standards: ["0861 Checkpoint Stage 9: writing"],
  stage: 9,
  vocabulary: [
    {
      term: "Audience",
      definition: "Who the writing is for — affects tone and detail.",
    },
    {
      term: "Purpose",
      definition: "Why you are writing — inform, persuade, entertain.",
    },
    {
      term: "Paragraph",
      definition: "A group of sentences developing one idea.",
    },
    { term: "Cohesion", definition: "Links between sentences and paragraphs." },
  ],
  concepts: [
    {
      id: "cile-u10-s9-writing",
      title: "Stage 9 writing checkpoint",
      skill: "Plan, structure and write for purpose and audience.",
      lesson: {
        sections: [
          {
            heading: "Writing for purpose",
            body: "Stage 9 writing tasks ask for a clear purpose (inform, persuade, describe) and audience. Plan first: introduction, developed paragraphs, conclusion. Vary sentence length and choose precise vocabulary.",
          },
        ],
        keyFormulas: [
          {
            name: "Writing formula",
            statement: "Purpose + audience + plan = effective writing",
          },
        ],
        workedExample: {
          problem:
            "Write a plan for a letter persuading your school to start a chess club.",
          solution:
            "Introduction (why chess matters); benefits (concentration, friendships); request; closing.",
        },
      },
      questions: [
        {
          id: "cile-u10-s9-w-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do FIRST when given a writing task?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plan the structure" },
              { id: "b", text: "Write the conclusion" },
              { id: "c", text: "Count the words" },
              { id: "d", text: "Choose the longest sentences" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Planning",
                statement: "Plan before writing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Planning prevents rambling and missing the purpose.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(a)** Plan the structure",
          },
        },
        {
          id: "cile-u10-s9-w-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three features of an effective paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paragraph",
                statement: "One idea, developed fully.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence stating the idea.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Supporting detail or explanation.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Linking words for cohesion.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "Topic sentence, supporting detail, cohesive links.",
          },
        },
        {
          id: "cile-u10-s9-w-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does audience affect your writing? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience",
                statement: "Tone and detail suit the reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Younger audience → simpler words, more explanation.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Formal audience → formal register, no slang.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Example: letter to headteacher vs note to friend.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Audience sets tone and vocabulary — formal for a headteacher, casual for a friend.",
          },
        },
        {
          id: "cile-u10-s9-w-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a four-point plan for a story opening about a mysterious letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Narrative plan",
                statement: "Opening hooks, setting, character, tension.",
              },
            ],
            steps: [
              {
                reasoning: "Hook: unusual event or image.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Setting: where/when established.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Character: who finds/receives the letter.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Tension: mystery or question raised.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Any four ordered points covering hook, setting, character, tension.",
          },
        },
      ],
    },
    {
      id: "cile-u10-s9-exam",
      title: "Stage 9 exam skills checkpoint",
      skill: "Manage time, check answers and avoid common errors.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "Stage 9 checkpoint rewards method: read questions twice, answer easier ones first, check work, and leave time to review. Spelling and punctuation count.",
          },
        ],
        keyFormulas: [
          { name: "Exam routine", statement: "Read → plan → write → check" },
        ],
        workedExample: {
          problem:
            "You have 45 minutes for a writing task. How should you split it?",
          solution:
            "5 min plan, 30 min write, 10 min check — never start without a plan.",
        },
      },
      questions: [
        {
          id: "cile-u10-s9-e-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should you read a question twice before answering?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To catch all parts of the question" },
              { id: "b", text: "To fill time" },
              { id: "c", text: "To memorise it" },
              { id: "d", text: "It is not necessary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading",
                statement: "Questions often have multiple parts.",
              },
            ],
            steps: [
              {
                reasoning: "Second read catches sub-parts and keywords.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(a)** To catch all parts of the question",
          },
        },
        {
          id: "cile-u10-s9-e-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things to check in the final minutes of an exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking",
                statement: "Review for completeness and accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "Every question attempted; no blanks.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Spelling, punctuation, paragraphing.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "All questions answered; spelling/punctuation checked.",
          },
        },
        {
          id: "cile-u10-s9-e-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why answering the easier questions first is a good strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Secure marks early.",
              },
            ],
            steps: [
              {
                reasoning: "Easy questions = quick marks secured.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Leaves more time for harder questions.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Reduces panic and rushed errors.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Secures marks quickly and leaves maximum time for difficult questions, reducing panic.",
          },
        },
        {
          id: "cile-u10-s9-e-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe a checklist you would use in the last five minutes of a reading exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review",
                statement: "Systematic final check.",
              },
            ],
            steps: [
              {
                reasoning: "Check every answer has evidence from the text.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Verify inference answers are supported, not invented.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Check spellings of names and quotations.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Ensure answers match question words (who/why/how).",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Evidence present, inferences supported, spellings correct, answers match question type.",
          },
        },
      ],
    },
    {
      id: "cile-u10-s9-mx",
      title: "Stage 9 mixed checkpoint",
      skill: "Combine paragraph craft, cohesion and exam technique.",
      lesson: {
        sections: [
          {
            heading: "Mixed writing",
            body: "Final checkpoint questions mix sentence variety, cohesion, paragraph development and exam strategy. Plan before writing and always link back to purpose and audience.",
          },
        ],
        keyFormulas: [
          {
            name: "Cohesion toolkit",
            statement: "Linking words, pronouns, repeated key terms",
          },
          {
            name: "Sentence variety",
            statement: "Mix short and long sentences for pace and emphasis",
          },
        ],
        workedExample: {
          problem:
            "Improve: 'The club is good. It helps you think. You should join.'",
          solution:
            "Chess is a rewarding club: it sharpens concentration and builds friendships, so every student should try it.",
        },
      },
      questions: [
        {
          id: "cile-u10-s9-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature most improves cohesion between two paragraphs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linking words and a topic sentence" },
              { id: "b", text: "Longer words" },
              { id: "c", text: "More exclamation marks" },
              { id: "d", text: "Deleting the topic sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Cohesion",
                statement:
                  "Links between sentences and paragraphs hold a text together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Linking words and a clear topic sentence guide the reader between ideas.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(a)** Linking words and a topic sentence",
          },
        },
        {
          id: "cile-u10-s9-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite this sentence to make it more interesting: 'The dog ran fast.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence variety",
                statement: "Precise verbs and detail create interest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Replace 'ran fast' with a precise verb or add detail.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Example: 'The dog sprinted across the field.'",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Any improved version using precise vocabulary, e.g. 'The dog sprinted across the field.'",
          },
        },
        {
          id: "cile-u10-s9-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Plan a three-sentence paragraph arguing that schools should ban single-use plastics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Paragraph plan",
                statement:
                  "Topic sentence, supporting detail, linking conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence: states the argument clearly.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Support: evidence or reason, e.g. pollution of oceans and landfills.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Link: connects back to the argument or adds a consequence.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Topic sentence stating the ban argument; supporting reason about environmental harm; linking sentence reinforcing the case.",
          },
        },
        {
          id: "cile-u10-s9-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how you would adapt the same information for two different audiences: younger students and the school council.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience",
                statement: "Tone, detail and form change with the reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For younger students: simple vocabulary, friendly tone, examples they relate to.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "For the school council: formal register, evidence and cost/environmental data.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Structure adjusted: short engaging paragraphs vs formal headings/sections.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Purpose clear in both: inform younger readers, persuade the council.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Simpler, friendlier style for students; formal, evidence-based style for the council — same facts, different register and structure.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u10-stage9-writing-exam-notes",
      title: "Stage 9 writing and exam skills — revision notes",
      summary: "Purpose, audience, paragraphing and exam technique.",
      sections: [
        {
          heading: "Writing",
          body: "Plan first; one idea per paragraph; vary sentences; match tone to audience and purpose.",
        },
        {
          heading: "Exam",
          body: "Read twice, answer easy first, check all answers and spelling in final minutes.",
        },
      ],
    },
  ],
};
