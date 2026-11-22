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
              { id: "a", text: "Count the words" },
              { id: "b", text: "Write the conclusion" },
              { id: "c", text: "Plan the structure" },
              { id: "d", text: "Choose the longest sentences" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Plan the structure",
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
        {
          id: "cile-u10-s9-w-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'cohesion' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing without punctuation" },
              { id: "b", text: "Links between sentences and paragraphs that hold the text together" },
              { id: "c", text: "Using the longest words possible" },
              { id: "d", text: "Repeating the same sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion",
                statement: "Links — linking words, pronouns, repeated key terms — connect ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Cohesion is how sentences and paragraphs connect logically.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(b)** Links between sentences and paragraphs that hold the text together",
          },
        },
        {
          id: "cile-u10-s9-w-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is an effective topic sentence for a paragraph about school meals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are many things to say." },
              { id: "b", text: "Food is nice." },
              { id: "c", text: "I ate lunch today." },
              { id: "d", text: "Healthy school meals improve students' concentration and behaviour." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Topic sentence",
                statement: "States the paragraph's main idea clearly and specifically.",
              },
            ],
            steps: [
              {
                reasoning: "A topic sentence names the idea the paragraph will develop — (b) does this precisely.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(d)** Healthy school meals improve students' concentration and behaviour.",
          },
        },
        {
          id: "cile-u10-s9-w-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you vary in your writing to keep the reader engaged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence length and structure" },
              { id: "b", text: "Nothing — repetition is fine" },
              { id: "c", text: "The font size" },
              { id: "d", text: "Only the vocabulary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence variety",
                statement: "Mix short and long sentences for pace and emphasis.",
              },
            ],
            steps: [
              {
                reasoning: "Varying sentence length creates rhythm — short for impact, long for detail.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(a)** Sentence length and structure",
          },
        },
        {
          id: "cile-u10-s9-w-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which register is appropriate for a formal letter to the headteacher?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Casual — 'Hey, listen up'" },
              { id: "b", text: "Formal — 'Dear Headteacher, I am writing to...'" },
              { id: "c", text: "Text-speak — 'pls cn we hav fones'" },
              { id: "d", text: "Slang — 'Yo, this is about phones'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register matching",
                statement: "Audience and purpose set the level of formality.",
              },
            ],
            steps: [
              {
                reasoning: "A headteacher expects respectful, formal language — no slang or text-speak.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(b)** Formal — 'Dear Headteacher, I am writing to...'",
          },
        },
        {
          id: "cile-u10-s9-w-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'purpose' mean in a writing task?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of words required" },
              { id: "b", text: "The font you choose" },
              { id: "c", text: "The deadline" },
              { id: "d", text: "Why you are writing — inform, persuade or entertain" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Purpose",
                statement: "The reason for writing shapes content and tone.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose = inform, persuade or entertain — it guides every choice.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(d)** Why you are writing — inform, persuade or entertain",
          },
        },
        {
          id: "cile-u10-s9-w-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An essay plan has an introduction, a conclusion and body paragraphs. If the plan has 4 paragraphs in total, how many are body paragraphs?",
          response: {
            type: "numeric",
            parts: [{ label: "body", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay structure",
                statement: "Total = introduction + body + conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Introduction (1) + conclusion (1) = 2 fixed paragraphs.",
                working: "4-2",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Body = 4 - 2 = 2 paragraphs.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cile-u10-s9-w-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give: (a) the number of features of an effective paragraph (topic sentence, supporting detail, linking words); (b) if a 200-word story has 4 paragraphs of equal length, the words per paragraph.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 50, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph and budget",
                statement: "Paragraph = one idea fully developed; divide word count evenly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Three features: topic sentence, support, link.",
                working: "\\text{3}",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "200 / 4 = 50 words per paragraph.",
                working: "200 \\div 4 = 50",
                marks: 2,
                markCode: "AO5",
              },
            ],
            finalAnswer: "(a) 3 (b) 50",
          },
        },
        {
          id: "cile-u10-s9-w-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A story opening plan has four elements: hook, setting, character, tension. How many elements should your plan include?",
          response: {
            type: "numeric",
            parts: [{ label: "elements", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Narrative plan",
                statement: "Hook + setting + character + tension = complete opening plan.",
              },
            ],
            steps: [
              {
                reasoning: "Count the four listed elements.",
                working: "\\text{4}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Each element serves a different narrative function.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cile-u10-s9-w-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Count writing elements. Give: (a) the number of parts in a formal letter (introduction, body, closing); (b) the number of context factors to consider (audience, purpose, channel); (c) the number of sentence lengths to mix (short and long).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing toolkit",
                statement: "Letters have parts; context has three factors; sentences vary in two lengths.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Introduction, body, closing = 3 parts.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "Audience, purpose, channel = 3 factors.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning: "Short and long = 2 lengths.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "All three counts verified against the writing conventions.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "(a) 3 (b) 3 (c) 2",
          },
        },
        {
          id: "cile-u10-s9-w-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why varying sentence length improves your writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence variety",
                statement: "Short sentences give pace and emphasis; long sentences give detail.",
              },
            ],
            steps: [
              {
                reasoning: "Uniform sentences become monotonous — the reader disengages.",
                working: "\\text{monotonous}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Short sentences punch key points; long ones develop ideas — variety controls rhythm.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Varying length creates rhythm — short sentences emphasise, long sentences develop — keeping the reader engaged.",
          },
        },
        {
          id: "cile-u10-s9-w-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this sentence pair: 'The library is nice. It has books.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Precise vocabulary",
                statement: "Replace vague words with specific, interesting ones.",
              },
            ],
            steps: [
              {
                reasoning: "Problem: 'nice' and 'has books' are vague and dull.",
                working: "\\text{vague}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Fix: precise adjectives and verbs — 'The library shelters thousands of books' or similar.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Any improved version with specific vocabulary earns the mark.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Any improved version, e.g. 'The library shelters thousands of books, from dusty atlases to vivid graphic novels.'",
          },
        },
        {
          id: "cile-u10-s9-w-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a four-point plan for a letter persuading your school to allow mobile phones at lunchtime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasive plan",
                statement: "Introduction → reasons → request → closing.",
              },
            ],
            steps: [
              {
                reasoning: "Point 1: introduction stating the request clearly.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Point 2: reason — phones help students stay connected with family.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Point 3: reason — reasonable phone rules can address safety concerns.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Point 4: polite closing requesting a trial period.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Any four ordered points covering: clear request, two supporting reasons, and a polite closing.",
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
              { id: "a", text: "To fill time" },
              { id: "b", text: "It is not necessary" },
              { id: "c", text: "To memorise it" },
              { id: "d", text: "To catch all parts of the question" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** To catch all parts of the question",
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
        {
          id: "cile-u10-s9-e-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do FIRST when an exam paper is handed to you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read all the questions carefully" },
              { id: "b", text: "Check your spelling" },
              { id: "c", text: "Close your eyes and relax" },
              { id: "d", text: "Start writing the hardest question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam routine",
                statement: "Read → plan → write → check.",
              },
            ],
            steps: [
              {
                reasoning: "Reading the whole paper first shows what is required and how to budget time.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(a)** Read all the questions carefully",
          },
        },
        {
          id: "cile-u10-s9-e-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is answering easier questions first a good exam strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners prefer it" },
              { id: "b", text: "It avoids reading the hard questions" },
              { id: "c", text: "It secures marks quickly and leaves more time for hard questions" },
              { id: "d", text: "It uses up time that could be wasted" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Easy questions = quick marks; hard questions get the remaining time.",
              },
            ],
            steps: [
              {
                reasoning: "Securing easy marks early reduces pressure and maximises score.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(c)** It secures marks quickly and leaves more time for hard questions",
          },
        },
        {
          id: "cile-u10-s9-e-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do spelling and punctuation matter in exams?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They only matter in English, never in exams" },
              { id: "b", text: "They do not matter at all" },
              { id: "c", text: "They make writing longer" },
              { id: "d", text: "They can cost marks for accuracy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Accuracy",
                statement: "Spelling and punctuation are part of writing accuracy marks.",
              },
            ],
            steps: [
              {
                reasoning: "Errors in spelling/punctuation lose accuracy marks — checking prevents this.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(d)** They can cost marks for accuracy",
          },
        },
        {
          id: "cile-u10-s9-e-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a 'command word' in a question tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How many marks the question is worth" },
              { id: "b", text: "Who wrote the question" },
              { id: "c", text: "How long your answer should be in words" },
              { id: "d", text: "What kind of answer is required — describe, explain, evaluate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Command word",
                statement: "The verb that signals the required response type.",
              },
            ],
            steps: [
              {
                reasoning: "Command words like 'analyse' or 'describe' define what the answer must do.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(d)** What kind of answer is required — describe, explain, evaluate",
          },
        },
        {
          id: "cile-u10-s9-e-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you build buffer time into your exam plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To read the questions twice" },
              { id: "b", text: "To allow for checking and unexpected slow questions" },
              { id: "c", text: "It is unnecessary" },
              { id: "d", text: "To finish early and leave" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Buffer time",
                statement: "Reserve minutes for review and slower-than-expected questions.",
              },
            ],
            steps: [
              {
                reasoning: "Buffer time covers slow questions and final checking — prevents running out mid-answer.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(b)** To allow for checking and unexpected slow questions",
          },
        },
        {
          id: "cile-u10-s9-e-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 60-minute exam has 6 questions of equal value. If you spend 5 minutes checking at the end, how many minutes remain for answering?",
          response: {
            type: "numeric",
            parts: [{ label: "answering", answer: 55, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budget",
                statement: "Subtract reserved time from the total.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 60; checking = 5.",
                working: "60-5",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Answering = 60 - 5 = 55 minutes.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "55",
          },
        },
        {
          id: "cile-u10-s9-e-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 45-minute writing task is split: 5 minutes planning, 30 minutes writing, 10 minutes checking. Give: (a) the writing time in minutes; (b) the checking time as a percentage of the total, to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "minutes" },
              { label: "b", answer: 22.2, unit: "%", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Write the split times; convert fraction to percentage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Writing = 30 minutes.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "Checking % = 10/45 x 100 = 22.2%.",
                working: "10/45 \\times 100 = 22.2",
                marks: 2,
                markCode: "AO5",
              },
            ],
            finalAnswer: "(a) 30 (b) 22.2%",
          },
        },
        {
          id: "cile-u10-s9-e-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 60-minute exam has 6 questions each worth 8 marks. Give: (a) the total marks; (b) the marks for half the paper; (c) the average minutes per question.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 48 },
              { label: "b", answer: 24 },
              { label: "c", answer: 10, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam maths",
                statement: "Total = questions x marks; minutes = time / questions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Total = 6 x 8 = 48 marks.",
                working: "6 \\times 8 = 48",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "Half = 48 / 2 = 24 marks.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning: "Minutes per question = 60 / 6 = 10.",
                working: "60 \\div 6 = 10",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "All three values check out against the given data.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "(a) 48 (b) 24 (c) 10",
          },
        },
        {
          id: "cile-u10-s9-e-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many items should a final exam check cover? (no blank answers, spelling/punctuation, answers matching question type)",
          response: {
            type: "numeric",
            parts: [{ label: "checks", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking",
                statement: "Completeness, accuracy and relevance — three checks.",
              },
            ],
            steps: [
              {
                reasoning: "Count: all answered + spelling/punctuation + answers match question words.",
                working: "\\text{3}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Each check targets a different error type.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s9-e-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why spending the last 5 minutes checking your exam work improves your score.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking",
                statement: "Review catches fixable errors worth marks.",
              },
            ],
            steps: [
              {
                reasoning: "Checking catches spelling, punctuation and incomplete answers — errors that cost marks.",
                working: "\\text{errors}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "It ensures every question part is attempted — no marks left on the table.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Checking catches avoidable errors and ensures all parts are answered — small fixes that protect marks.",
          },
        },
        {
          id: "cile-u10-s9-e-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "You reach a question you cannot answer with 15 minutes left and two more questions after it. What is your best strategy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Difficult questions",
                statement: "Don't stall — attempt what you can, move on, return if time allows.",
              },
            ],
            steps: [
              {
                reasoning: "Write what you can — a partial structured answer beats a blank.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Move to the next question — easier marks may be available there.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Return to the hard question only if time remains after others are done.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Give it a brief attempt, move on to secure easier marks, and return only if time remains — never leave blanks.",
          },
        },
        {
          id: "cile-u10-s9-e-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe your complete exam routine for a 60-minute writing paper, from receiving the paper to handing it in.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam routine",
                statement: "Read → plan → write → check, with time allocated by marks.",
              },
            ],
            steps: [
              {
                reasoning: "Read all questions first; underline command words and check mark allocations.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Plan each answer briefly — 2 minutes per major question.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Write answers allocating time by marks; answer easier questions first.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Reserve final 5-10 minutes to check spelling, completeness and question coverage.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Read and underline key words → brief plan per question → write with time by marks, easy first → final check of spelling and completeness.",
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
              { id: "a", text: "Deleting the topic sentence" },
              { id: "b", text: "Linking words and a topic sentence" },
              { id: "c", text: "More exclamation marks" },
              { id: "d", text: "Longer words" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Linking words and a topic sentence",
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
        {
          id: "cile-u10-s9-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature of the cohesion toolkit uses words like 'however', 'therefore' and 'firstly'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exclamation marks" },
              { id: "b", text: "Pronouns" },
              { id: "c", text: "Bullet points" },
              { id: "d", text: "Linking words" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Cohesion toolkit",
                statement: "Linking words connect ideas — pronouns and repeated terms also help.",
              },
            ],
            steps: [
              {
                reasoning: "'However', 'therefore', 'firstly' are linking (connective) words.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(d)** Linking words",
          },
        },
        {
          id: "cile-u10-s9-mx-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes a paragraph 'developed'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is very short" },
              { id: "b", text: "It repeats the previous paragraph" },
              { id: "c", text: "It has a topic sentence fully supported with detail and a link" },
              { id: "d", text: "It contains only questions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paragraph development",
                statement: "One idea, fully explained, connected to the next.",
              },
            ],
            steps: [
              {
                reasoning: "Development = topic sentence + supporting detail + linking close.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(c)** It has a topic sentence fully supported with detail and a link",
          },
        },
        {
          id: "cile-u10-s9-mx-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you plan BEFORE writing an answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your spelling mistakes" },
              { id: "b", text: "How many pages are left" },
              { id: "c", text: "The examiner's name" },
              { id: "d", text: "The structure — introduction, paragraphs, conclusion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Planning",
                statement: "Plan structure before writing — prevents rambling.",
              },
            ],
            steps: [
              {
                reasoning: "Planning the paragraph structure ensures coverage and coherence.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(d)** The structure — introduction, paragraphs, conclusion",
          },
        },
        {
          id: "cile-u10-s9-mx-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which audience would need the simplest vocabulary and most explanation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newspaper editors" },
              { id: "b", text: "Younger students" },
              { id: "c", text: "Company directors" },
              { id: "d", text: "University professors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience",
                statement: "Simpler language for younger or less specialist readers.",
              },
            ],
            steps: [
              {
                reasoning: "Younger students need simple words and examples they relate to.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(b)** Younger students",
          },
        },
        {
          id: "cile-u10-s9-mx-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'register' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The level of formality appropriate to audience and purpose" },
              { id: "b", text: "The speed of your typing" },
              { id: "c", text: "The order of paragraphs" },
              { id: "d", text: "The number of words used" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Formality level — casual, neutral or formal — matched to context.",
              },
            ],
            steps: [
              {
                reasoning: "Register is about matching language formality to the situation.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(a)** The level of formality appropriate to audience and purpose",
          },
        },
        {
          id: "cile-u10-s9-mx-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The cohesion toolkit lists three tools: linking words, pronouns and repeated key terms. How many tools does it contain?",
          response: {
            type: "numeric",
            parts: [{ label: "tools", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Cohesion toolkit",
                statement: "Three tools: linking words, pronouns, repeated key terms.",
              },
            ],
            steps: [
              {
                reasoning: "Count the listed tools: 3.",
                working: "\\text{3}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Each serves a different linking function.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s9-mx-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Count the following. Give: (a) the number of features of an effective paragraph; (b) the number of steps in the exam routine 'read, plan, write, check'; (c) the number of sentence lengths to mix.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mixed counting",
                statement: "Paragraph features, exam steps and sentence types — count each set.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Topic sentence, support, link = 3.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "Read, plan, write, check = 4 steps.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning: "Short and long = 2 lengths.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "(a) 3 (b) 4 (c) 2",
          },
        },
        {
          id: "cile-u10-s9-mx-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 200-word essay is divided into 4 equal paragraphs. How many words should each paragraph contain?",
          response: {
            type: "numeric",
            parts: [{ label: "words", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word budget",
                statement: "Divide total words by paragraph count.",
              },
            ],
            steps: [
              {
                reasoning: "200 / 4 = 50 words per paragraph.",
                working: "200 \\div 4 = 50",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Even distribution keeps paragraphs balanced.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "50",
          },
        },
        {
          id: "cile-u10-s9-mx-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 45-minute writing task is split into planning, writing and checking. Give all four values: (a) planning minutes; (b) writing minutes; (c) checking minutes; (d) the total.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "minutes" },
              { label: "b", answer: 30, unit: "minutes" },
              { label: "c", answer: 10, unit: "minutes" },
              { label: "d", answer: 45, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time split",
                statement: "Plan ~5, write ~30, check ~10 in a 45-minute task.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Planning = 5 minutes.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "Writing = 30 minutes.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning: "Checking = 10 minutes.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "d",
                reasoning: "Total = 5 + 30 + 10 = 45 — matches.",
                working: "5+30+10=45",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "(a) 5 (b) 30 (c) 10 (d) 45",
          },
        },
        {
          id: "cile-u10-s9-mx-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how pronouns create cohesion in writing, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Pronoun cohesion",
                statement: "Pronouns link back to earlier nouns without repeating them.",
              },
            ],
            steps: [
              {
                reasoning: "Pronouns (it, they, this) refer back to ideas already mentioned — smooth links.",
                working: "\\text{reference}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Example: 'The chess club meets weekly. It helps students concentrate.' — 'It' links to the club.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Pronouns link sentences by referring back — 'The club meets weekly. It helps students focus.' 'It' connects without repetition.",
          },
        },
        {
          id: "cile-u10-s9-mx-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this choppy text adding cohesion: 'The school has a garden. The garden grows vegetables. Students eat the vegetables.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Cohesion",
                statement: "Combine short sentences with links and pronouns.",
              },
            ],
            steps: [
              {
                reasoning: "Problem: three short sentences feel choppy and repetitive.",
                working: "\\text{choppy}",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Fix: combine and link — 'Our school garden grows vegetables, which students eat at lunch.'",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Any cohesive rewrite with linking words or pronouns earns the mark.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Any cohesive version, e.g. 'Our school garden grows fresh vegetables, which students enjoy at lunch.'",
          },
        },
        {
          id: "cile-u10-s9-mx-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare how you would adapt one piece of information — 'the school is introducing a chess club' — for younger students versus the school council.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement: "Same facts, different register, detail and structure.",
              },
            ],
            steps: [
              {
                reasoning: "Younger students: simple words, friendly tone, examples they relate to.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "School council: formal register, evidence of benefits and logistics.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Structure differs: short engaging paragraphs vs formal sections with details.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "Purpose differs: inform students, persuade the council.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer:
              "Students get a simple, friendly announcement; the council gets a formal proposal with benefits and logistics — same fact, different register and purpose.",
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
