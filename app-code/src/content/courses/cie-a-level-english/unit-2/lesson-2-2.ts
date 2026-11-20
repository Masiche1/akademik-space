import type { Lesson } from "../../../types.ts";

export const lesson222: Lesson = {
  id: "cial-e-u2-lesson-2-2",
  code: "2-2",
  title: "Composition: discursive and transactional writing",
  goal: "I CAN write essays, articles, letters and reports with appropriate structure and register.",
  standards: ["9093 Paper 1: composition"],
  vocabulary: [
    {
      term: "Discursive writing",
      definition: "Discussion of a topic from multiple viewpoints.",
    },
    {
      term: "Transactional writing",
      definition:
        "Writing that achieves a practical purpose: letters, reports, proposals.",
    },
    { term: "Register", definition: "Level of formality suited to context." },
    { term: "Argument", definition: "A reasoned case supported by evidence." },
    {
      term: "Counter-argument",
      definition: "The opposing view, addressed to strengthen your own.",
    },
    {
      term: "Salutation",
      definition:
        "Letter greeting: 'Dear Sir or Madam' (formal) or 'Dear Mr Smith'.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u2-discursive",
      title: "Discursive and argumentative writing",
      skill:
        "Write essays and articles that explore issues from multiple viewpoints.",
      lesson: {
        sections: [
          {
            heading: "Structure of discursive writing",
            body: "Introduce the issue and its significance. Present each viewpoint fairly — for and against. Weigh evidence and acknowledge complexity. Conclude with a reasoned position, not just a summary.",
          },
          {
            heading: "Argumentative techniques",
            body: "Use evidence (statistics, examples, expert opinion) rather than bare assertion. Address counter-arguments — acknowledging opposition strengthens your case. Use rhetorical questions, tricolon and inclusive language strategically.",
          },
          {
            heading: "Tone and balance",
            body: "Discursive writing should be measured, not ranting. Acknowledge nuance: 'while X is true, Y must also be considered'. The strongest essays sound reasonable, not extreme.",
          },
        ],
        keyFormulas: [
          {
            name: "Discursive",
            statement:
              "Issue+viewpoints+evidence+counter-argument+reasoned conclusion.",
          },
        ],
        workedExample: {
          problem: "Plan an essay on 'Should homework be abolished?'",
          solution:
            "Intro: issue's importance. For: stress, family time. Against: consolidation, independence. Weigh. Conclude: modified homework policy.",
        },
      },
      questions: [
        {
          id: "cial-e-u2-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'discursive writing'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Discussion of a topic from multiple viewpoints",
              },
              { id: "b", text: "Writing about yourself" },
              { id: "c", text: "A story" },
              { id: "d", text: "A list of facts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discursive",
                statement: "Explores a topic from multiple viewpoints.",
              },
            ],
            steps: [
              {
                reasoning: "Discursive = multi-perspective discussion.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Multiple viewpoints",
            commonErrors: ["Confusing with descriptive or narrative."],
          },
        },
        {
          id: "cial-e-u2-di-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should an argumentative essay address counter-arguments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Counter-argument",
                statement:
                  "Addressing opposition strengthens credibility and reasoning.",
              },
            ],
            steps: [
              {
                reasoning: "Shows you've considered the issue fully.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Refuting opposition makes your case stronger.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Addressing opposition strengthens credibility and reasoning.",
            commonErrors: ["Ignoring the other side entirely."],
          },
        },
        {
          id: "cial-e-u2-di-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does tone affect the persuasiveness of an argumentative essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone and persuasion",
                statement:
                  "Measured, reasonable tone persuades; ranting alienates.",
              },
            ],
            steps: [
              {
                reasoning: "Extreme language makes readers defensive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balanced tone suggests fairness and credibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Nuance ('while X, Y') shows sophistication.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Measured tone persuades; extreme tone alienates.",
            commonErrors: ["Thinking passion equals persuasion."],
          },
        },
        {
          id: "cial-e-u2-di-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discursive writing.",
          parts: [
            { label: "a", prompt: "Define discursive writing.", marks: 1 },
            { label: "b", prompt: "Why address counter-arguments?", marks: 2 },
            {
              label: "c",
              prompt: "How does tone affect persuasion?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Plan an essay on 'uniforms in schools'.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Discursive",
                statement: "Definition+counter-argument+tone+plan.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Multiple viewpoints discussion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Strengthens credibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Refutes opposition.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Measured tone persuades.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Extreme tone alienates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Nuance shows sophistication.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Issue introduced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both viewpoints planned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evidence/evaluation planned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Reasoned conclusion planned.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) multi-viewpoint (b) credibility+refutation (c) measured=persuades (d) essay plan",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Reasons given.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Tone explained.",
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
                level: "Level 4",
                marks: "3-4",
                descriptor: "Full essay plan.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["One-sided ranting."],
          },
        },
      ],
    },
    {
      id: "cial-e-u2-transactional",
      title: "Transactional writing",
      skill:
        "Write formal letters, reports and proposals with correct conventions.",
      lesson: {
        sections: [
          {
            heading: "Letter conventions",
            body: "Formal letters: sender's address and date, recipient's address, salutation ('Dear Sir or Madam' or named), clear paragraphs stating purpose early, formal close ('Yours faithfully' with 'Dear Sir or Madam'; 'Yours sincerely' with named recipient). Polite, impersonal register.",
          },
          {
            heading: "Reports and proposals",
            body: "Reports inform: title, introduction (purpose), numbered or headed findings, conclusion or recommendations. Proposals persuade: problem, proposed solution, benefits, costs. Both use headings, objective language and factual tone.",
          },
          {
            heading: "Register control",
            body: "Match vocabulary to context: 'I am writing to enquire' not 'just checking'. Avoid contractions and slang in formal contexts. Consistency matters — accidental register shifts undermine credibility.",
          },
        ],
        keyFormulas: [
          {
            name: "Transactional",
            statement:
              "Format+register+purpose+audience=effective transactional writing.",
          },
        ],
        workedExample: {
          problem: "Open a formal letter of complaint.",
          solution:
            "'Dear Sir or Madam, I am writing to complain about the service received on [date]. I would appreciate a response within fourteen days. Yours faithfully, [Name]'",
        },
      },
      questions: [
        {
          id: "cial-e-u2-tx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which closing matches 'Dear Sir or Madam'?",
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
                statement: "'Yours faithfully' pairs with 'Dear Sir or Madam'.",
              },
            ],
            steps: [
              {
                reasoning: "Unknown recipient → 'Yours faithfully'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Yours faithfully",
            commonErrors: [
              "Choosing 'Yours sincerely' — needs named recipient.",
            ],
          },
        },
        {
          id: "cial-e-u2-tx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main difference between a report and an essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Report vs essay",
                statement:
                  "Report = factual, structured findings; essay = argued viewpoint.",
              },
            ],
            steps: [
              {
                reasoning: "Report presents facts in structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Essay argues a position.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Report=factual/structured; essay=argued/viewpoint.",
            commonErrors: ["Treating reports as essays."],
          },
        },
        {
          id: "cial-e-u2-tx-q3",
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
                  "Consistency maintains credibility and suits context.",
              },
            ],
            steps: [
              {
                reasoning: "Casual slips break formal tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inconsistency suggests carelessness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reader judges credibility on appropriate register.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Consistency maintains credibility and suits the context.",
            commonErrors: ["Listing features without explaining harm."],
          },
        },
        {
          id: "cial-e-u2-tx-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Transactional writing.",
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
            { label: "c", prompt: "Describe a report's structure.", marks: 3 },
            {
              label: "d",
              prompt: "Rewrite casually: 'I just wanna tell u it broke.'",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Transactional",
                statement: "Conventions+structure+register+rewrite.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any three of addresses, date, salutation, formal close.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Three valid.",
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
                reasoning: "Title, intro, findings, conclusion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Objective tone.",
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
                reasoning: "Formal rewrite begun.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Casualisms removed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Natural formal English.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "d", reasoning: "Effective.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "(a) three conventions (b) faithfully (c) title+findings+conclusion (d) formal rewrite",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Three conventions.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Structure clear.",
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
                level: "Level 4",
                marks: "3-4",
                descriptor: "Clean formal rewrite.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Attempted.",
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
            commonErrors: ["Register slips and wrong closings."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u2-transactional-notes",
      title: "Discursive and transactional writing — revision notes",
      summary:
        "Essays, articles, letters, reports: structure, register and audience.",
      sections: [
        {
          heading: "Discursive",
          body: "Introduce issue, present viewpoints fairly, weigh evidence, conclude with reasoned position. Address counter-arguments. Measured tone persuades.",
        },
        {
          heading: "Transactional",
          body: "Letters: addresses, salutation, purpose early, formal close ('Yours faithfully'/'sincerely'). Reports: title, findings, conclusion. Proposals: problem, solution, benefits.",
        },
        {
          heading: "Register",
          body: "Match formality to context. 'I am writing to enquire' not 'just checking'. Consistency matters — avoid accidental slips.",
        },
        {
          heading: "Exam checklist",
          body: "Is the format correct? Is register consistent? Is the audience addressed? Is there a clear purpose and conclusion?",
        },
      ],
    },
  ],
};
