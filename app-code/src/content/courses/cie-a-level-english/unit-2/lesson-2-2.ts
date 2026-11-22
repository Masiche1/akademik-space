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
              { id: "a", text: "A list of facts" },
              { id: "b", text: "A story" },
              {
                id: "c",
                text: "Discussion of a topic from multiple viewpoints",
              },
              { id: "d", text: "Writing about yourself" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-e-u2-di-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the strongest form of support in an argumentative essay?",
          response: { type: "mcq", choices: [ { id: "a", text: "Repeated opinion" }, { id: "b", text: "Evidence such as statistics, examples or expert opinion" }, { id: "c", text: "A longer introduction" }, { id: "d", text: "Bare assertion" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Evidence", statement: "Reasoned support is stronger than assertion." }], steps: [{ reasoning: "Evidence gives the argument credibility.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Statistics, examples or expert opinion", commonErrors: ["Relying on unsupported claims."] },
        },
        {
          id: "cial-e-u2-di-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why acknowledge a counter-argument?",
          response: { type: "mcq", choices: [ { id: "a", text: "It replaces evidence" }, { id: "b", text: "It shows fairness and lets you refute opposition" }, { id: "c", text: "It shortens the essay" }, { id: "d", text: "It weakens your conclusion" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Counter-argument", statement: "Addressing opposition strengthens credibility." }], steps: [{ reasoning: "Fair treatment of opposition makes the case more convincing.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Shows fairness and refutes opposition", commonErrors: ["Ignoring the opposing view."] },
        },
        {
          id: "cial-e-u2-di-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which tone is most persuasive in discursive writing?",
          response: { type: "mcq", choices: [ { id: "a", text: "Confused and vague" }, { id: "b", text: "Measured and reasonable" }, { id: "c", text: "Aggressive and insulting" }, { id: "d", text: "Dismissive and jokey" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Persuasive tone", statement: "Reasonableness persuades; extremity alienates." }], steps: [{ reasoning: "A measured tone maintains credibility.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Measured and reasonable", commonErrors: ["Thinking emotional intensity equals persuasion."] },
        },
        {
          id: "cial-e-u2-di-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should a discursive conclusion do?",
          response: { type: "mcq", choices: [ { id: "a", text: "List every argument again" }, { id: "b", text: "Repeat the introduction word for word" }, { id: "c", text: "Offer a reasoned position after weighing viewpoints" }, { id: "d", text: "Introduce a new topic" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Discursive conclusion", statement: "A reasoned position synthesises the discussion." }], steps: [{ reasoning: "The conclusion should judge the balance of views.", marks: 1, markCode: "AO3" }], finalAnswer: "**(b)** Reasoned position", commonErrors: ["Summarising without taking a position."] },
        },
        {
          id: "cial-e-u2-di-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which phrase best shows nuanced discursive balance?",
          response: { type: "mcq", choices: [ { id: "a", text: "This is obviously stupid" }, { id: "b", text: "Everyone agrees" }, { id: "c", text: "While X has force, Y must also be considered" }, { id: "d", text: "I do not care" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Nuance", statement: "Concessive phrasing acknowledges complexity." }], steps: [{ reasoning: "The concessive structure balances competing claims.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** While X has force, Y must also be considered", commonErrors: ["Using absolute claims that ignore complexity."] },
        },
        {
          id: "cial-e-u2-di-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many broad viewpoints should a balanced discursive essay present?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "convention", name: "Discursive balance", statement: "For and against viewpoints." }], steps: [{ reasoning: "Two broad viewpoints are balanced.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Presenting only one side."] },
        },
        {
          id: "cial-e-u2-di-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main rhetorical techniques are highlighted: rhetorical questions, tricolon and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rhetorical techniques", statement: "Rhetorical questions, tricolon and inclusive language." }], steps: [{ reasoning: "Three techniques are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Forgetting inclusive language."] },
        },
        {
          id: "cial-e-u2-di-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main stages are needed in discursive structure: introduce, present viewpoints, weigh and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "convention", name: "Discursive structure", statement: "Introduction, viewpoints, weighing and conclusion." }], steps: [{ reasoning: "Four stages are identified.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting the weighing stage."] },
        },
        {
          id: "cial-e-u2-di-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many types of support are recommended: statistics, examples and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evidence types", statement: "Statistics, examples and expert opinion." }], steps: [{ reasoning: "Three evidence types are named.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Using unsupported personal opinion only."] },
        },
        {
          id: "cial-e-u2-di-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why evidence is stronger than bare assertion.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Evidence vs assertion", statement: "Evidence can be checked and persuades sceptical readers." }], steps: [{ reasoning: "A strong answer explains that evidence gives reasons others can verify, while assertion only states a view.", marks: 2, markCode: "AO2" }], finalAnswer: "Evidence supports claims with checkable material, making the argument more credible than unsupported opinion.", commonErrors: ["Repeating the claim instead of supporting it."] },
        },
        {
          id: "cial-e-u2-di-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does measured tone make an argument more persuasive?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Measured tone", statement: "Reasonableness invites agreement; extremity provokes resistance." }], steps: [{ reasoning: "A strong answer links calm, balanced phrasing to fairness and credibility.", marks: 2, markCode: "AO2" }], finalAnswer: "A measured tone sounds fair and reasonable, so readers are more likely to trust and accept the argument.", commonErrors: ["Confusing passion with credibility."] },
        },
        {
          id: "cial-e-u2-di-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plan an essay structure for 'Should homework be abolished?'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Discursive plan", statement: "Issue, viewpoints, evidence, counter-argument and conclusion." }], steps: [{ reasoning: "A strong plan introduces the issue, presents for and against views, adds evidence and ends with a reasoned position.", marks: 2, markCode: "AO2" }], finalAnswer: "Introduce homework's importance; present abolition and retention arguments; weigh evidence; conclude with a modified policy.", commonErrors: ["Planning only one side or a plot-like sequence."] },
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
              { id: "a", text: "Yours sincerely" },
              { id: "b", text: "Yours faithfully" },
              { id: "c", text: "Love" },
              { id: "d", text: "Best wishes" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-e-u2-tx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which salutation is appropriate when the recipient's name is unknown?",
          response: { type: "mcq", choices: [ { id: "a", text: "Hi there" }, { id: "b", text: "Yo" }, { id: "c", text: "To whom it may not concern" }, { id: "d", text: "Dear Sir or Madam" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Formal salutation", statement: "Unknown recipient uses 'Dear Sir or Madam'." }], steps: [{ reasoning: "Formal unknown-recipient letters use the standard salutation.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Dear Sir or Madam", commonErrors: ["Using an informal greeting."] },
        },
        {
          id: "cial-e-u2-tx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which closing pairs with 'Dear Mr Smith'?",
          response: { type: "mcq", choices: [ { id: "a", text: "Yours faithfully" }, { id: "b", text: "See you" }, { id: "c", text: "Yours sincerely" }, { id: "d", text: "TTYL" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Letter closings", statement: "Named recipient pairs with 'Yours sincerely'." }], steps: [{ reasoning: "Named recipient requires 'Yours sincerely'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Yours sincerely", commonErrors: ["Mixing named and unnamed conventions."] },
        },
        {
          id: "cial-e-u2-tx-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main purpose of headings in a report?",
          response: { type: "mcq", choices: [ { id: "a", text: "To replace evidence" }, { id: "b", text: "To organise findings and guide the reader" }, { id: "c", text: "To decorate the page" }, { id: "d", text: "To make the report longer" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Report headings", statement: "Headings structure factual information." }], steps: [{ reasoning: "Headings organise and signpost findings.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Organise findings", commonErrors: ["Using headings decoratively without structure."] },
        },
        {
          id: "cial-e-u2-tx-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature most distinguishes a proposal from a report?",
          response: { type: "mcq", choices: [ { id: "a", text: "A proposal is longer" }, { id: "b", text: "A proposal has no audience" }, { id: "c", text: "A proposal avoids headings" }, { id: "d", text: "A proposal argues for a solution and its benefits" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Proposal", statement: "Problem, solution, benefits and costs." }], steps: [{ reasoning: "Proposals persuade toward a recommended action.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** It argues for a solution", commonErrors: ["Treating a proposal as purely factual."] },
        },
        {
          id: "cial-e-u2-tx-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should the purpose of a formal letter appear early?",
          response: { type: "mcq", choices: [ { id: "a", text: "It allows casual language" }, { id: "b", text: "It makes the letter look longer" }, { id: "c", text: "It saves the reader time and frames the request" }, { id: "d", text: "It hides the complaint" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Purpose early", statement: "Clear early purpose suits transactional efficiency." }], steps: [{ reasoning: "Early purpose lets the reader act quickly.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Saves time and frames request", commonErrors: ["Burying the purpose in the final paragraph."] },
        },
        {
          id: "cial-e-u2-tx-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many standard elements does a formal letter include: addresses, date, salutation and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "convention", name: "Formal letter elements", statement: "Addresses, date, salutation and formal close." }], steps: [{ reasoning: "Four standard elements are counted.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting the recipient's address."] },
        },
        {
          id: "cial-e-u2-tx-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main sections does a simple report contain: title, introduction, findings and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "convention", name: "Report structure", statement: "Title, introduction, findings and conclusion." }], steps: [{ reasoning: "Four sections are identified.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Forgetting the conclusion or recommendations."] },
        },
        {
          id: "cial-e-u2-tx-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many formal closings are paired with the two main salutations discussed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "convention", name: "Closing pairs", statement: "Yours faithfully and Yours sincerely." }], steps: [{ reasoning: "Two formal closings are matched to recipients.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Mixing the two closings."] },
        },
        {
          id: "cial-e-u2-tx-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many components are typically needed in a proposal: problem, solution, benefits and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "convention", name: "Proposal components", statement: "Problem, proposed solution, benefits and costs." }], steps: [{ reasoning: "Four components are identified.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting costs or benefits."] },
        },
        {
          id: "cial-e-u2-tx-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between 'Yours faithfully' and 'Yours sincerely'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Closing choice", statement: "Recipient known or unknown determines the close." }], steps: [{ reasoning: "A strong answer links 'faithfully' to unnamed recipients and 'sincerely' to named recipients.", marks: 2, markCode: "AO1" }], finalAnswer: "Use 'Yours faithfully' with 'Dear Sir or Madam'; use 'Yours sincerely' with a named recipient.", commonErrors: ["Choosing closings randomly."] },
        },
        {
          id: "cial-e-u2-tx-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does a report need objective rather than persuasive language?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Objective report tone", statement: "Factual findings require neutral presentation." }], steps: [{ reasoning: "A strong answer explains that objectivity supports credibility and lets recommendations rest on evidence.", marks: 2, markCode: "AO2" }], finalAnswer: "Objective language makes findings trustworthy and separates evidence from argument.", commonErrors: ["Writing a report like a persuasive essay."] },
        },
        {
          id: "cial-e-u2-tx-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Rewrite this casual sentence formally: 'I just wanna tell u it broke.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Register control", statement: "Formal transactional writing avoids contractions, slang and abbreviations." }], steps: [{ reasoning: "A strong rewrite uses standard English and precise wording, e.g. 'I am writing to inform you that it is broken.'", marks: 2, markCode: "AO2" }], finalAnswer: "Example: 'I am writing to inform you that the item is damaged.'", commonErrors: ["Keeping slang or letter abbreviations."] },
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
