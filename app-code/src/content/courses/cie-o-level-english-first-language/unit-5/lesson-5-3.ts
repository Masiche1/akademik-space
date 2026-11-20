import type { Lesson } from "../../../types.ts";

export const lesson153: Lesson = {
  id: "cie-ol-fl-lesson-5-3",
  code: "5-3",
  title: "Discursive and transactional writing",
  goal: "I CAN write formal letters, speeches, reports, reviews and articles for different purposes and audiences.",
  standards: ["1119 Writing: transactional"],
  vocabulary: [
    {
      term: "Transactional writing",
      definition:
        "Writing that achieves a practical purpose: letters, reports, emails.",
    },
    {
      term: "Formal register",
      definition: "Polite, impersonal language for official contexts.",
    },
    {
      term: "Salutation",
      definition: "The greeting opening a letter, e.g. 'Dear Sir or Madam'.",
    },
    {
      term: "Discursive writing",
      definition: "Discussion of a topic from multiple viewpoints.",
    },
    {
      term: "Tone",
      definition: "The writer's attitude toward the subject and reader.",
    },
    {
      term: "Audience",
      definition:
        "The intended reader or listener, who shapes content and style.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-letters-reports",
      title: "Formal letters and reports",
      skill:
        "Write letters and reports with correct conventions and appropriate register.",
      lesson: {
        sections: [
          {
            heading: "Letter conventions",
            body: "Formal letters need: sender's address and date, recipient's address, salutation ('Dear Sir or Madam' when the name is unknown), clear paragraphs stating purpose early, and a formal close ('Yours faithfully' with no named recipient, 'Yours sincerely' with one). Keep the tone polite and impersonal — avoid contractions and slang.",
          },
          {
            heading: "Report structure",
            body: "Reports inform rather than persuade. Standard structure: title, introduction (purpose), numbered sections or bullet points of findings, and a conclusion or recommendations. Use headings, past tense for events, and factual, objective language.",
          },
          {
            heading: "Register control",
            body: "Match vocabulary and sentence length to the context. 'I am writing to enquire' suits a formal letter; 'I just wanted to ask' does not. Consistency of register matters as much as correctness.",
          },
        ],
        keyFormulas: [
          {
            name: "Formal letter",
            statement: "Addresses+salutation+purpose+close=formal letter.",
          },
          {
            name: "Report",
            statement: "Title+intro+numbered findings+conclusion=report.",
          },
        ],
        workedExample: {
          problem: "Open a letter of complaint to a shop.",
          solution:
            "'Dear Sir or Madam, I am writing to complain about... I would appreciate a response within fourteen days. Yours faithfully, [Name]'",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-lr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which closing is correct when the recipient's name is unknown?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours faithfully" },
              { id: "b", text: "Yours sincerely" },
              { id: "c", text: "Best wishes" },
              { id: "d", text: "Love" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter closings",
                statement:
                  "'Yours faithfully' pairs with 'Dear Sir or Madam'; 'Yours sincerely' pairs with a named recipient.",
              },
            ],
            steps: [
              {
                reasoning: "Unknown recipient calls for 'Yours faithfully'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Yours faithfully",
            commonErrors: [
              "Choosing 'Yours sincerely' — that requires a named recipient.",
            ],
          },
        },
        {
          id: "cie-ol-fl-lr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main purpose of a report, as distinct from an essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Report purpose",
                statement:
                  "A report presents factual findings in a structured, objective format for a practical purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It informs with facts and structure rather than arguing a viewpoint.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "It serves a practical purpose, e.g. recording findings or recommending action.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "To present factual, structured findings for a practical purpose.",
            commonErrors: ["Treating a report like a persuasive essay."],
          },
        },
        {
          id: "cie-ol-fl-lr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does register consistency matter in formal writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register",
                statement:
                  "Consistent formality signals competence and respect for the context.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Slipping into casual language ('gonna', 'stuff') breaks the formal tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Inconsistent register makes the writer seem careless or insincere.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The audience judges credibility partly on appropriate register.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear link between consistency and effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Consistent register maintains credibility and suits the context.",
            commonErrors: [
              "Listing formal features without explaining why consistency matters.",
            ],
          },
        },
        {
          id: "cie-ol-fl-lr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Formal letters and reports.",
          parts: [
            {
              label: "a",
              prompt: "List three conventions of a formal letter.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which closing matches 'Dear Sir or Madam'?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Describe the structure of a report.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Rewrite casually: 'I just wanna tell u the thing is broken.'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter/report conventions",
                statement:
                  "Addresses+salutation+close / title+findings+conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any three of sender/recipient addresses, date, salutation, formal close, stated purpose.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Three valid conventions.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "'Yours faithfully'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Title, introduction/purpose, numbered or headed findings, conclusion/recommendations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Objective factual tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Structure coherent.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Formal rewrite begun, e.g. 'I am writing to inform you that...'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Casualisms fully removed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Rewrite is natural formal English.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) addresses/salutation/close (b) Yours faithfully (c) title+findings+conclusion (d) formal rewrite",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Three conventions.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Fewer than three.",
                part: "a",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "b",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Wrong close.",
                part: "b",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Full structure.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No structure.",
                part: "c",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Clean formal rewrite.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempt.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Still casual.",
                part: "d",
              },
            ],
            commonErrors: ["Using 'Yours sincerely' with 'Dear Sir or Madam'."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-speeches-articles",
      title: "Speeches, reviews and articles",
      skill:
        "Write discursive and evaluative texts suited to purpose and audience.",
      lesson: {
        sections: [
          {
            heading: "Speeches",
            body: "A speech addresses a live audience: open with a hook, use direct address ('you', 'we'), rhetorical questions and rhythm. Vary sentence length for spoken effect; short punchy lines land best at the end of points.",
          },
          {
            heading: "Reviews",
            body: "A review evaluates — a film, book, restaurant or event. Give a balanced judgement: strengths and weaknesses, then an overall verdict. Use evaluative language ('gripping', 'predictable', 'thoroughly enjoyable') and keep the tone personal but fair.",
          },
          {
            heading: "Articles and discussions",
            body: "For/against articles and discussion pieces explore a topic from multiple viewpoints. Structure: introduce the issue, present each side fairly, weigh the evidence, conclude with a reasoned position.",
          },
        ],
        keyFormulas: [
          {
            name: "Discursive writing",
            statement:
              "Audience+purpose+balanced viewpoints+reasoned conclusion.",
          },
        ],
        workedExample: {
          problem:
            "Plan an article on whether school uniforms should be compulsory.",
          solution:
            "Intro: state issue. For: equality, focus. Against: self-expression, cost. Weigh evidence. Conclude: recommend with reasons.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ssa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To evaluate and give a judgement" },
              { id: "b", text: "To retell the plot" },
              { id: "c", text: "To advertise a product" },
              { id: "d", text: "To report facts only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Review",
                statement:
                  "An evaluative text that judges the merits of a work, event or product.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation is the defining purpose.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** To evaluate and give a judgement",
            commonErrors: ["Confusing review with synopsis or advertisement."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do speeches use direct address and rhetorical questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Speech techniques",
                statement:
                  "Direct address and rhetorical questions engage a live audience and create involvement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'You' and 'we' make listeners feel personally addressed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Rhetorical questions prompt the audience to think without expecting answers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "They involve the audience and prompt reflection.",
            commonErrors: [
              "Treating rhetorical questions as genuine questions needing answers.",
            ],
          },
        },
        {
          id: "cie-ol-fl-ssa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What makes a balanced discursive article convincing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discursive balance",
                statement:
                  "Fair treatment of viewpoints plus reasoned evidence produces a convincing argument.",
              },
            ],
            steps: [
              {
                reasoning: "Presenting each side fairly builds credibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Evidence and examples support claims rather than bare opinion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "A clear, reasoned conclusion gives the discussion direction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate explanation of persuasive effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Fair viewpoints+evidence+reasoned conclusion=convincing.",
            commonErrors: ["One-sided ranting mistaken for argument."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discursive and evaluative writing.",
          parts: [
            { label: "a", prompt: "State the purpose of a review.", marks: 1 },
            {
              label: "b",
              prompt: "Name two speech techniques and their effect.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What makes discursive writing balanced?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Plan a short speech arguing for longer school lunches.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discursive writing",
                statement: "Purpose+techniques+balance+plan.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "To evaluate and give a judgement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Any two of direct address, rhetorical questions, repetition, inclusive 'we'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Each linked to audience engagement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effects accurate.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Fair treatment of both viewpoints.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Evidence supports claims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reasoned conclusion.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Hook plus arguments for longer lunches.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Uses speech techniques and direct address.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Coherent, persuasive plan.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) evaluate (b) two techniques+effect (c) fair+evidence+conclusion (d) coherent speech plan",
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
                descriptor: "Two techniques with effects.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One or partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Balance explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No explanation.",
                part: "c",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Coherent plan.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Some plan.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No plan.",
                part: "d",
              },
            ],
            commonErrors: ["Confusing a review with a plot summary."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-transactional-notes",
      title: "Discursive and transactional writing — revision notes",
      summary:
        "Letters, reports, speeches, reviews and articles: conventions and audience awareness.",
      sections: [
        {
          heading: "Formal letters",
          body: "Addresses, date, salutation ('Dear Sir or Madam' or named recipient), purpose stated early, formal close ('Yours faithfully' unknown recipient / 'Yours sincerely' named). Polite, impersonal register.",
        },
        {
          heading: "Reports",
          body: "Title, introduction stating purpose, numbered/headed findings, conclusion or recommendations. Factual, objective, often past tense.",
        },
        {
          heading: "Speeches and reviews",
          body: "Speeches: hook, direct address, rhetorical questions, short punchy lines. Reviews: balanced strengths/weaknesses plus verdict. Discursive articles: fair viewpoints, evidence, reasoned conclusion.",
        },
        {
          heading: "Exam checklist",
          body: "Does the format match the task? Is the register consistent? Is the audience addressed? Is there a clear purpose and conclusion?",
        },
      ],
    },
  ],
};
