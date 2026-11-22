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
              { id: "a", text: "Love" },
              { id: "b", text: "Best wishes" },
              { id: "c", text: "Yours sincerely" },
              { id: "d", text: "Yours faithfully" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-fl-lr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which salutation is correct for a named recipient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dear Sir or Madam" },
              { id: "b", text: "To whom it may concern" },
              { id: "c", text: "Hey there" },
              { id: "d", text: "Dear Mr Khan" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Salutation",
                statement:
                  "A named recipient takes 'Dear [Name]'; unknown takes 'Dear Sir or Madam'.",
              },
            ],
            steps: [
              {
                reasoning: "Named recipient = 'Dear Mr Khan'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Dear Mr Khan",
            commonErrors: ["Using 'Dear Sir or Madam' when the name is known."],
          },
        },
        {
          id: "cie-ol-fl-lr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is 'Yours sincerely' incorrect with 'Dear Sir or Madam'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too long" },
              { id: "b", text: "That pairing requires 'Yours faithfully'" },
              { id: "c", text: "It is too informal" },
              { id: "d", text: "There is no rule" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter pairings",
                statement:
                  "'Dear Sir or Madam' pairs with 'Yours faithfully'; 'Dear [Name]' pairs with 'Yours sincerely'.",
              },
            ],
            steps: [
              {
                reasoning: "Unknown recipient demands 'Yours faithfully'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** That pairing requires 'Yours faithfully'",
            commonErrors: ["Mixing formal closings incorrectly."],
          },
        },
        {
          id: "cie-ol-fl-lr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What tense is typically used in reports and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Report tense",
                statement:
                  "Reports usually use past tense for events already observed or completed.",
              },
            ],
            steps: [
              {
                reasoning: "Findings describe events that already happened.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Past tense keeps the report factual and objective.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Past tense, because reports record events and findings that have already occurred.",
            commonErrors: ["Using present tense as if narrating live."],
          },
        },
        {
          id: "cie-ol-fl-lr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do headings and numbered sections help a report?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Report structure",
                statement:
                  "Headings and numbering organise findings for quick reference.",
              },
            ],
            steps: [
              {
                reasoning: "Headings signal what each section covers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Numbering makes findings easy to locate and cite.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This serves the reader's practical purpose.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "They organise findings clearly and let the reader locate information quickly.",
            commonErrors: ["Thinking structure is only decorative."],
          },
        },
        {
          id: "cie-ol-fl-lr-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to write a clear recommendation in a report's conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Recommendations",
                statement:
                  "A recommendation should be specific, actionable and based on the findings.",
              },
            ],
            steps: [
              {
                reasoning: "Base the recommendation on the report's findings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Make it specific and actionable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Keep the language objective and formal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear, decisive phrasing.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "A recommendation should be specific, actionable, evidence-based and objectively phrased.",
            commonErrors: ["Vague suggestions like 'do something about it'."],
          },
        },
        {
          id: "cie-ol-fl-lr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where should the purpose of a formal letter appear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Early, in the first paragraph" },
              { id: "b", text: "In the sender's address" },
              { id: "c", text: "In the signature" },
              { id: "d", text: "In the last line only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter purpose",
                statement:
                  "The reason for writing should be stated early so the reader knows the letter's point.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose goes early, first paragraph.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Early, in the first paragraph",
            commonErrors: ["Burying the purpose at the end."],
          },
        },
        {
          id: "cie-ol-fl-lr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase is appropriate in a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stuff is broken" },
              { id: "b", text: "Just wanna ask..." },
              { id: "c", text: "Gimme the info" },
              { id: "d", text: "I am writing to enquire about..." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal register",
                statement:
                  "Formal letters use polite, impersonal phrasing without contractions or slang.",
              },
            ],
            steps: [
              {
                reasoning: "'I am writing to enquire' is formal.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** I am writing to enquire about...",
            commonErrors: ["Choosing casual phrasing."],
          },
        },
        {
          id: "cie-ol-fl-lr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features that distinguish a report from an essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Report vs essay",
                statement:
                  "Reports are factual, structured and objective; essays argue a viewpoint.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of structure, objectivity, factual tone, purpose.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both correctly distinguished.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Structured headings, factual objectivity, practical purpose.",
            commonErrors: ["Saying reports are 'shorter' — the difference is purpose and style."],
          },
        },
        {
          id: "cie-ol-fl-lr-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can a report remain objective rather than persuasive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Objectivity",
                statement:
                  "Factual language, balanced presentation and evidence keep a report objective.",
              },
            ],
            steps: [
              {
                reasoning: "Use factual, neutral language without emotive words.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Present findings fairly, including unflattering ones.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Support claims with evidence rather than opinion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Neutral language+fair presentation+evidence=objective report.",
            commonErrors: ["Using persuasive or emotive language."],
          },
        },
        {
          id: "cie-ol-fl-lr-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Writing a letter of application.",
          parts: [
            { label: "a", prompt: "Give the salutation and closing for a named recipient.", marks: 2 },
            { label: "b", prompt: "State the purpose in an opening sentence.", marks: 2 },
            { label: "c", prompt: "Give two formal phrases you would use.", marks: 2 },
            { label: "d", prompt: "Plan the three paragraphs of the letter.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal letter",
                statement: "Salutation+purpose+formal register+paragraph plan.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'Dear [Name]' and 'Yours sincerely'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Correct pairing.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "An opening stating the application purpose.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Clear and early.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "First formal phrase, e.g. 'I am writing to apply'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Second formal phrase, e.g. 'I look forward to hearing from you'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "A coherent three-paragraph plan.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Logical ordering.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) Dear [Name]/Yours sincerely (b) early purpose (c) two formal phrases (d) three-paragraph plan",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct pairings.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Purpose stated.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two formal phrases.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Coherent plan.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Casual register slipping into a formal letter."],
          },
        },
        {
          id: "cie-ol-fl-lr-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Report writing.",
          parts: [
            { label: "a", prompt: "State the main purpose of a report.", marks: 1 },
            { label: "b", prompt: "List two structural features of a report.", marks: 2 },
            { label: "c", prompt: "Explain how to keep a report objective.", marks: 3 },
            { label: "d", prompt: "Draft a title and introduction for a report on a school trip.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Report writing",
                statement: "Purpose+structure+objectivity+draft.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "To present factual findings for a practical purpose.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two of headings, numbered sections, conclusion, title.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Both correctly identified.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Neutral factual language.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Balanced presentation of findings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Evidence over opinion.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A clear title and purpose-stating introduction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Factual, formal register.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Controlled and appropriate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) factual findings (b) two structures (c) neutral+balanced+evidence (d) title+intro",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two features.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Objectivity explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear draft.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Attempted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Persuasive rather than factual language."],
          },
        },
        {
          id: "cie-ol-fl-lr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how audience shapes the register and content of a formal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience and register",
                statement:
                  "Audience determines formality, vocabulary and what details to include.",
              },
            ],
            steps: [
              {
                reasoning: "A formal audience demands formal register.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Vocabulary and sentence length adapt to the reader.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Content selects details relevant to that audience.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Audience determines register, vocabulary and which details to include.",
            commonErrors: ["Using the same style regardless of recipient."],
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
              { id: "b", text: "To advertise a product" },
              { id: "c", text: "To retell the plot" },
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
        {
          id: "cie-ol-fl-ssa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'direct address' in a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading from a script" },
              { id: "b", text: "Speaking to the audience using 'you' and 'we'" },
              { id: "c", text: "Writing a formal letter" },
              { id: "d", text: "Describing scenery" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Direct address",
                statement:
                  "Using 'you'/'we' makes the audience feel directly involved.",
              },
            ],
            steps: [
              {
                reasoning: "Direct address involves the audience with 'you'/'we'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Speaking to the audience using 'you' and 'we'",
            commonErrors: ["Confusing with narration or description."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best verdict line for a film review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I went to the cinema on Saturday." },
              { id: "b", text: "Tickets cost twelve dollars." },
              { id: "c", text: "The film was 120 minutes long." },
              { id: "d", text: "Overall, a gripping and rewarding film." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Review verdict",
                statement:
                  "A verdict gives an evaluative overall judgement, not a fact.",
              },
            ],
            steps: [
              {
                reasoning: "(a) is evaluative; others are facts.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Overall, a gripping and rewarding film.",
            commonErrors: ["Confusing facts with evaluation."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do speeches use rhetorical questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rhetorical question",
                statement:
                  "Questions without expected answers involve the audience and prompt reflection.",
              },
            ],
            steps: [
              {
                reasoning: "They make the audience think rather than just listen.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "They create a sense of shared enquiry with 'we'.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "They involve the audience and prompt reflection, creating engagement.",
            commonErrors: ["Thinking rhetorical questions need answers."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should a review balance strengths and weaknesses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Balanced review",
                statement:
                  "A fair review acknowledges both merits and flaws before judging.",
              },
            ],
            steps: [
              {
                reasoning: "Identify genuine strengths with evaluative language.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify weaknesses fairly, not just to criticise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weigh them into an overall verdict.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Strengths+weaknesses+weighed verdict=fair, credible review.",
            commonErrors: ["One-sided praise or criticism."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a for/against article should present opposing viewpoints fairly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Discursive writing",
                statement:
                  "Both sides should be presented fairly before a reasoned conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "State the issue clearly in the introduction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Present each side's strongest arguments fairly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weigh the evidence on both sides.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conclude with a reasoned position.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Issue+fair viewpoints+weighed evidence+reasoned conclusion.",
            commonErrors: ["Straw-manning the opposing side."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'hook' in a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speech's ending" },
              { id: "b", text: "An opening that grabs the audience's attention" },
              { id: "c", text: "A type of microphone" },
              { id: "d", text: "A stage prop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Hook",
                statement:
                  "An attention-grabbing opening that draws the audience in.",
              },
            ],
            steps: [
              {
                reasoning: "Hook = attention-grabbing opening.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** An opening that grabs the audience's attention",
            commonErrors: ["Confusing hook with conclusion."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should a speech vary sentence length?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To confuse the audience" },
              { id: "b", text: "There is no reason" },
              { id: "c", text: "To fill time" },
              { id: "d", text: "Short lines land punchily while longer ones build rhythm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Spoken rhythm",
                statement:
                  "Varying sentence length controls emphasis and keeps listeners engaged.",
              },
            ],
            steps: [
              {
                reasoning: "Variety controls emphasis and rhythm for listeners.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Short lines land punchily while longer ones build rhythm",
            commonErrors: ["Writing speeches like essays with uniform sentences."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two features of evaluative language in a review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluative language",
                statement:
                  "Adjectives and phrases that judge quality, e.g. 'gripping', 'predictable'.",
              },
            ],
            steps: [
              {
                reasoning: "Any two evaluative adjectives or judgement phrases.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both express judgement, not fact.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Judgement adjectives/phrases like 'gripping', 'thoroughly enjoyable'.",
            commonErrors: ["Listing factual details instead of judgements."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can a discussion article signal a reasoned conclusion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reasoned conclusion",
                statement:
                  "The conclusion should weigh the evidence and state a justified position.",
              },
            ],
            steps: [
              {
                reasoning: "Refer back to the key points of both sides.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weigh the evidence explicitly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "State a clear, justified position.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Summarise points+weigh evidence+state justified position.",
            commonErrors: ["Ending with an unsupported opinion."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Planning a speech on keeping fit.",
          parts: [
            { label: "a", prompt: "Give a hook idea for the opening.", marks: 1 },
            { label: "b", prompt: "Name two rhetorical devices you would use.", marks: 2 },
            { label: "c", prompt: "Give an example of direct address.", marks: 2 },
            { label: "d", prompt: "Write a closing line that lands punchily.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Speech planning",
                statement: "Hook+devices+direct address+closing=effective speech.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "An attention-grabbing opening idea.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "First device, e.g. rhetorical question or rule of three.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Second device correctly named.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "A 'you'/'we' sentence addressing the audience.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clearly direct address.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A short, emphatic closing line.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Punchy and memorable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Fitting for spoken delivery.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) hook (b) two devices (c) direct-address line (d) punchy close",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Hook given.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two devices.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Direct address.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Punchy close.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Attempted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Speech written like an essay, without spoken devices."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Writing a review.",
          parts: [
            { label: "a", prompt: "Define what a review does.", marks: 1 },
            { label: "b", prompt: "Give two evaluative adjectives for a film.", marks: 2 },
            { label: "c", prompt: "Explain what a balanced judgement means.", marks: 3 },
            { label: "d", prompt: "Plan the structure of a short review.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review writing",
                statement: "Evaluation+adjectives+balance+structure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Evaluates and gives a judgement on a work.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "First evaluative adjective.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Second evaluative adjective.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Weighing strengths and weaknesses fairly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Neither pure praise nor pure criticism.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A coherent structure, e.g. intro+points+verdict.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Elements ordered logically.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Ends with a verdict.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) evaluates+judges (b) two adjectives (c) strengths+weaknesses weighed (d) intro+points+verdict",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two adjectives.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Balance explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Coherent plan.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Some plan.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No plan.", part: "d" },
            ],
            commonErrors: ["A plot summary instead of an evaluation."],
          },
        },
        {
          id: "cie-ol-fl-ssa-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how purpose and audience shape the tone of a speech or article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose and tone",
                statement:
                  "Purpose and audience determine whether the tone is formal, humorous, critical or persuasive.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose decides the overall attitude needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Audience decides the level of formality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tone is built through word choice and sentence style.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Purpose sets the attitude; audience sets the formality; together they shape tone.",
            commonErrors: ["Choosing a tone without considering purpose or audience."],
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
