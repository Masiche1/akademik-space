import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cial-e-u7-lesson-7-2",
  code: "7-2",
  title: "Exam Technique and Timing",
  goal: "I CAN plan and execute timed exam answers effectively across all papers.",
  standards: ["9093: Exam technique"],
  vocabulary: [
    {
      term: "Command words",
      definition:
        "Words indicating required response type (analyze, compare, evaluate).",
    },
    {
      term: "Time allocation",
      definition: "Dividing exam time proportionally to marks.",
    },
    { term: "Planning", definition: "Brief outline before writing." },
    {
      term: "AO marks",
      definition: "Assessment objectives — knowledge, analysis, evaluation.",
    },
    {
      term: "Proofreading",
      definition: "Checking work for errors after writing.",
    },
    { term: "Selection", definition: "Choosing which questions to answer." },
  ],
  concepts: [
    {
      id: "cial-e-u7-exam-technique",
      title: "Command Words and Timing",
      skill: "Use command words correctly and allocate exam time effectively.",
      lesson: {
        sections: [
          {
            heading: "Command words",
            body: "Analyse: break down components, examine relationships. Compare/contrast: similarities AND differences. Evaluate: weigh evidence, judge strength. Discuss: explore multiple viewpoints. Describe: state features without evaluation. Explain: give reasons/mechanisms. 'To what extent': evaluate degree.",
          },
          {
            heading: "Time management",
            body: "Read all questions first; choose easiest/highest-mark questions. Allocate time ∝ marks — e.g., 25-mark essay = ~50 min in 2hr paper. Plan briefly (2-3 min), write continuously, reserve 5-10 min proofreading. Don't leave blanks — partial answers earn marks.",
          },
          {
            heading: "Answer structure",
            body: "Direct answer first, then support. For essays: introduction with thesis, body paragraphs with PEE, conclusion answering question. For short answers: point + evidence + brief explanation. Always answer the question asked — check command word matches response.",
          },
        ],
        keyFormulas: [
          {
            name: "Exam technique",
            statement:
              "Command words guide response; time ∝ marks; plan-write-proofread.",
          },
        ],
        workedExample: {
          problem: "How much time for a 25-mark essay in a 2-hour paper?",
          solution:
            "~50 minutes (2 min per mark) — plan 3 min, write 40 min, proofread 5 min.",
        },
      },
      questions: [
        {
          id: "cial-e-u7-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'analyse' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarise briefly" },
              {
                id: "b",
                text: "Break down components and examine relationships",
              },
              { id: "c", text: "Give personal opinion" },
              { id: "d", text: "List features only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analyse",
                statement: "Break down+examine.",
              },
            ],
            steps: [
              {
                reasoning: "Break down components.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Break down components and examine relationships",
            commonErrors: ["Confusing with describe."],
          },
        },
        {
          id: "cial-e-u7-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should exam time be allocated?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time allocation",
                statement: "Time proportional to marks.",
              },
            ],
            steps: [
              {
                reasoning: "More marks = more time.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "~2 min per mark rule.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Allocate time proportionally to marks — roughly 2 minutes per mark, reserve time for proofreading.",
            commonErrors: ["Equal time per question."],
          },
        },
        {
          id: "cial-e-u7-et-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is planning important before writing an essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning",
                statement: "Ensures structure and coverage.",
              },
            ],
            steps: [
              {
                reasoning: "Ensures clear structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prevents missing points.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Saves time later.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Planning ensures clear structure, prevents missing key points, and saves time — brief outline beats rewriting.",
            commonErrors: ["Skipping planning."],
          },
        },
        {
          id: "cial-e-u7-et-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Exam technique.",
          parts: [
            { label: "a", prompt: "Command words?", marks: 3 },
            { label: "b", prompt: "Time management?", marks: 2 },
            { label: "c", prompt: "Answer structure?", marks: 2 },
            { label: "d", prompt: "Proofreading?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exam technique",
                statement: "Command words+timing+structure+proofreading.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Analyse/compare/evaluate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Different responses needed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Match to question.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Time ∝ marks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reserve proofreading time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Direct answer+support.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "PEE structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Check errors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Catch mistakes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) command words (b) timing (c) structure (d) proofreading",
          },
        },
        {
          id: "cial-e-u7-et-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'compare' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary only" },
              { id: "b", text: "Only similarities" },
              { id: "c", text: "A personal opinion" },
              { id: "d", text: "Both similarities and differences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compare",
                statement: "Similarities AND differences.",
              },
            ],
            steps: [
              {
                reasoning: "Both aspects needed.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Both similarities and differences",
            commonErrors: ["Only listing similarities."],
          },
        },
        {
          id: "cial-e-u7-et-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'evaluate' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy the question" },
              { id: "b", text: "Weigh evidence and judge strength" },
              { id: "c", text: "List features" },
              { id: "d", text: "Describe events" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluate",
                statement: "Weigh+judge.",
              },
            ],
            steps: [
              {
                reasoning: "Weigh evidence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Weigh evidence and judge strength",
            commonErrors: ["Confusing with describe."],
          },
        },
        {
          id: "cial-e-u7-et-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Discuss' as a command word requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A personal anecdote" },
              { id: "b", text: "Only factual listing" },
              { id: "c", text: "A one-sided argument" },
              { id: "d", text: "Exploring multiple viewpoints on the issue" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discuss",
                statement: "Multiple viewpoints.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple viewpoints.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Exploring multiple viewpoints on the issue",
            commonErrors: ["Arguing only one side."],
          },
        },
        {
          id: "cial-e-u7-et-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The phrase 'to what extent' signals that you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid evaluation" },
              { id: "b", text: "Give a yes/no answer" },
              { id: "c", text: "Evaluate the degree to which a claim is true" },
              { id: "d", text: "Describe only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "To what extent",
                statement: "Degree evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "Degree evaluation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Evaluate the degree to which a claim is true",
            commonErrors: ["Ignoring the degree aspect."],
          },
        },
        {
          id: "cial-e-u7-et-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Describe' differs from 'analyse' because describe:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Needs comparisons" },
              { id: "b", text: "Demands conclusions" },
              { id: "c", text: "Requires judgement" },
              { id: "d", text: "States features without evaluation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Describe vs analyse",
                statement: "Features vs breakdown.",
              },
            ],
            steps: [
              {
                reasoning: "Features, no evaluation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** States features without evaluation",
            commonErrors: ["Over-analysing a describe question."],
          },
        },
        {
          id: "cial-e-u7-et-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a 2-hour paper worth 100 marks, how many minutes should you allow per mark on average?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 minutes" },
              { id: "b", text: "60 minutes" },
              { id: "c", text: "0.1 minutes" },
              { id: "d", text: "1.2 minutes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time per mark",
                statement: "120 min / 100 marks = 1.2 min.",
              },
            ],
            steps: [
              {
                reasoning: "120/100 = 1.2.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** 1.2 minutes",
            commonErrors: ["Equal time per question."],
          },
        },
        {
          id: "cial-e-u7-et-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you underline command words in exam questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Command words",
                statement: "They dictate response type.",
              },
            ],
            steps: [
              {
                reasoning: "Reminds required response.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prevents wrong answer type.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Underlining command words reminds you of the required response type and prevents answering with the wrong approach (e.g. describing when asked to evaluate).",
            commonErrors: ["Reading questions too quickly."],
          },
        },
        {
          id: "cial-e-u7-et-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the purpose of proofreading at the end of an exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proofreading",
                statement: "Catches errors for lost marks.",
              },
            ],
            steps: [
              {
                reasoning: "Finds spelling/grammar errors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Recovers avoidable marks.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Proofreading catches spelling, grammar and punctuation errors that would otherwise cost marks — reserve 5-10 minutes for it.",
            commonErrors: ["Skipping proofreading entirely."],
          },
        },
        {
          id: "cial-e-u7-et-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it better to leave no blank answers in an exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partial answers",
                statement: "Attempt earns marks.",
              },
            ],
            steps: [
              {
                reasoning: "Partial answers earn marks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Blank = zero guaranteed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows understanding partially.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Even partial or imperfect answers can earn marks for knowledge and technique — a blank guarantees zero. Always attempt every question.",
            commonErrors: ["Leaving questions blank."],
          },
        },
        {
          id: "cial-e-u7-et-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Exam technique practice.",
          parts: [
            { label: "a", prompt: "Command words?", marks: 3 },
            { label: "b", prompt: "Time management?", marks: 2 },
            { label: "c", prompt: "Answer structure?", marks: 2 },
            { label: "d", prompt: "Proofreading?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exam technique",
                statement: "Command words+timing+structure+proofreading.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Analyse/compare/evaluate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Different responses needed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Match to question.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Time ∝ marks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reserve proofreading time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Direct answer+support.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "PEE structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Check errors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Catch mistakes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) command words (b) timing (c) structure (d) proofreading",
          },
        },
        {
          id: "cial-e-u7-et-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which should you do FIRST in an exam paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choose the hardest question" },
              { id: "b", text: "Read all questions to plan your choices" },
              { id: "c", text: "Start writing immediately" },
              { id: "d", text: "Proofread" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exam sequence",
                statement: "Scan questions first.",
              },
            ],
            steps: [
              {
                reasoning: "Read all first.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Read all questions to plan your choices",
            commonErrors: ["Rushing into first question."],
          },
        },
        {
          id: "cial-e-u7-et-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the PEE structure used for in exam answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEE",
                statement: "Point-Evidence-Explanation.",
              },
            ],
            steps: [
              {
                reasoning: "Point+Evidence+Explanation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Structures paragraphs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Point (main idea), Evidence (quotation/example), Explanation (analysis of how it supports the point) — a clear paragraph structure.",
            commonErrors: ["Listing evidence without explanation."],
          },
        },
      ],
    },
    {
      id: "cial-e-u7-revision",
      title: "Revision and Preparation",
      skill: "Plan effective revision and prepare for exam day.",
      lesson: {
        sections: [
          {
            heading: "Revision strategies",
            body: "Active recall: test yourself, don't just re-read. Spaced repetition: review at increasing intervals. Practice essays under timed conditions — exam technique matters. Make summary notes, mind maps, flashcards. Focus on weak areas identified through practice.",
          },
          {
            heading: "Literature revision",
            body: "Know set texts thoroughly — key quotations, themes, contexts, characters. Practice comparative essays — identify common themes across texts. Review critical approaches — be ready to apply. Memorise 3-5 key quotations per text maximum — quality over quantity.",
          },
          {
            heading: "Exam day",
            body: "Arrive early, bring required materials. Read questions carefully — underline command words. Choose questions wisely — play to strengths. Manage time — don't spend too long on one question. Stay calm — partial answers earn marks. Proofread if time permits.",
          },
        ],
        keyFormulas: [
          {
            name: "Revision",
            statement:
              "Active recall+spaced repetition+timed practice; literature=quotations+themes+context.",
          },
        ],
        workedExample: {
          problem: "What's the most effective revision method?",
          solution:
            "Active recall — test yourself with practice questions rather than passively re-reading notes.",
        },
      },
      questions: [
        {
          id: "cial-e-u7-rv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is active recall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading notes repeatedly" },
              { id: "b", text: "Testing yourself rather than re-reading" },
              { id: "c", text: "Highlighting text" },
              { id: "d", text: "Watching videos" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active recall",
                statement: "Self-testing.",
              },
            ],
            steps: [{ reasoning: "Self-testing.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Testing yourself rather than re-reading",
            commonErrors: ["Passive review."],
          },
        },
        {
          id: "cial-e-u7-rv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should literature revision focus on?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Literature revision",
                statement: "Quotations+themes+context+comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Key quotations/themes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Context+comparison practice.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Key quotations, themes, contexts, character knowledge, and practice comparative essays.",
            commonErrors: ["Only plot summary."],
          },
        },
        {
          id: "cial-e-u7-rv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is timed practice important for literature essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Timed practice",
                statement: "Builds speed+technique under pressure.",
              },
            ],
            steps: [
              {
                reasoning: "Practises time management.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Builds writing speed.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Identifies weaknesses.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Timed practice builds writing speed, time management skills and reveals weaknesses — exam conditions differ from relaxed study.",
            commonErrors: ["Only untimed practice."],
          },
        },
        {
          id: "cial-e-u7-rv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Revision and preparation.",
          parts: [
            { label: "a", prompt: "Revision strategies?", marks: 3 },
            { label: "b", prompt: "Literature revision?", marks: 2 },
            { label: "c", prompt: "Exam day?", marks: 2 },
            { label: "d", prompt: "Key principles?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revision",
                statement: "Strategies+literature+exam day+principles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Active recall/spaced repetition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Timed practice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Weak areas focus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Quotations/themes/context.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Comparative practice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Early arrival/careful reading.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Time management/proofread.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Consistency+effort.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Quality over quantity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) strategies (b) literature (c) exam day (d) principles",
          },
        },
        {
          id: "cial-e-u7-rv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'spaced repetition' in revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Highlighting everything" },
              { id: "b", text: "Reviewing material at increasing intervals" },
              { id: "c", text: "Reading notes once" },
              { id: "d", text: "Cramming the night before" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spaced repetition",
                statement: "Review at intervals.",
              },
            ],
            steps: [
              {
                reasoning: "Increasing intervals.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reviewing material at increasing intervals",
            commonErrors: ["Confusing with cramming."],
          },
        },
        {
          id: "cial-e-u7-rv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which revision method is most effective for memorising quotations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing them out and testing yourself" },
              { id: "b", text: "Only re-reading the text" },
              { id: "c", text: "Memorising whole chapters" },
              { id: "d", text: "Underlining in the book" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation revision",
                statement: "Active recall of key quotes.",
              },
            ],
            steps: [
              {
                reasoning: "Active recall best.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Writing them out and testing yourself",
            commonErrors: ["Passive re-reading only."],
          },
        },
        {
          id: "cial-e-u7-rv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you focus revision on weak areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They offer the biggest mark gains" },
              { id: "b", text: "Weak areas are easier to revise" },
              { id: "c", text: "It saves all time" },
              { id: "d", text: "Strong areas need no attention ever" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weak areas",
                statement: "Biggest improvement potential.",
              },
            ],
            steps: [
              {
                reasoning: "Biggest mark gains.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** They offer the biggest mark gains",
            commonErrors: ["Only revising favourite topics."],
          },
        },
        {
          id: "cial-e-u7-rv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "On exam day, why arrive early?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no benefit" },
              { id: "b", text: "To start the exam early" },
              { id: "c", text: "To settle nerves and check materials" },
              { id: "d", text: "To socialise" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exam day",
                statement: "Arrive early, prepare calmly.",
              },
            ],
            steps: [
              {
                reasoning: "Settle+check materials.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** To settle nerves and check materials",
            commonErrors: ["Arriving rushed and late."],
          },
        },
        {
          id: "cial-e-u7-rv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many key quotations per text should you memorise at most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3-5" },
              { id: "b", text: "The entire text" },
              { id: "c", text: "None" },
              { id: "d", text: "50-100" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation strategy",
                statement: "Quality over quantity.",
              },
            ],
            steps: [
              {
                reasoning: "3-5 key quotes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 3-5",
            commonErrors: ["Memorising too many quotes."],
          },
        },
        {
          id: "cial-e-u7-rv-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is practising comparative essays important for Paper 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is only for Paper 1" },
              { id: "b", text: "It replaces learning set texts" },
              { id: "c", text: "It builds skill in weaving comparison throughout" },
              { id: "d", text: "It guarantees full marks" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative practice",
                statement: "Weave comparison throughout.",
              },
            ],
            steps: [
              {
                reasoning: "Comparison skill.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** It builds skill in weaving comparison throughout",
            commonErrors: ["Practising texts separately."],
          },
        },
        {
          id: "cial-e-u7-rv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is re-reading notes less effective than active recall?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Active recall",
                statement: "Testing beats re-reading.",
              },
            ],
            steps: [
              {
                reasoning: "Re-reading feels familiar.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Recall exposes gaps.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Re-reading creates false familiarity; active recall tests retrieval, which strengthens memory and reveals what you actually don't know.",
            commonErrors: ["Confusing familiarity with knowledge."],
          },
        },
        {
          id: "cial-e-u7-rv-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you bring to the exam hall?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exam materials",
                statement: "Check requirements beforehand.",
              },
            ],
            steps: [
              {
                reasoning: "Pens/pencils/eraser.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "ID+water if allowed.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Pens, pencils, eraser, sharpener, ID, water (if permitted), and any paper-specific materials — check the exam regulations in advance.",
            commonErrors: ["Forgetting required materials."],
          },
        },
        {
          id: "cial-e-u7-rv-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is consistency more important than last-minute cramming?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consistency",
                statement: "Regular revision beats cramming.",
              },
            ],
            steps: [
              {
                reasoning: "Spaced learning consolidates.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cramming causes stress.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Identifies weak areas early.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Regular revision uses spaced repetition to consolidate memory and reveal weaknesses early; cramming overloads short-term memory, increases stress and rarely transfers to exam performance.",
            commonErrors: ["Relying on last-minute cramming."],
          },
        },
        {
          id: "cial-e-u7-rv-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Revision and preparation practice.",
          parts: [
            { label: "a", prompt: "Revision strategies?", marks: 3 },
            { label: "b", prompt: "Literature revision?", marks: 2 },
            { label: "c", prompt: "Exam day?", marks: 2 },
            { label: "d", prompt: "Key principles?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revision",
                statement: "Strategies+literature+exam day+principles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Active recall/spaced repetition.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Timed practice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Weak areas focus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Quotations/themes/context.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Comparative practice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Early arrival/careful reading.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Time management/proofread.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Consistency+effort.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Quality over quantity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) strategies (b) literature (c) exam day (d) principles",
          },
        },
        {
          id: "cial-e-u7-rv-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'mind map' useful for in revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replacing all written notes" },
              { id: "b", text: "Memorising quotations word-for-word" },
              { id: "c", text: "Timing practice essays" },
              { id: "d", text: "Visually organising connections between ideas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mind map",
                statement: "Visual organisation.",
              },
            ],
            steps: [
              {
                reasoning: "Visual connections.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Visually organising connections between ideas",
            commonErrors: ["Thinking it replaces active recall."],
          },
        },
        {
          id: "cial-e-u7-rv-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How should you choose which exam questions to answer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question selection",
                statement: "Play to strengths.",
              },
            ],
            steps: [
              {
                reasoning: "Read all questions first.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Choose known/strong topics.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Check marks/time trade-off.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Read all questions, identify those on your strongest set texts/topics and highest marks achievable, then allocate time proportionally — never commit to an unfamiliar question.",
            commonErrors: ["Choosing the first question seen."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u7-7-2-notes",
      title: "Exam technique and revision — notes",
      summary:
        "Command words, timing, answer structure; revision strategies, literature prep, exam day.",
      sections: [
        {
          heading: "Technique",
          body: "Command words guide response; time ∝ marks; plan-write-proofread.",
        },
        {
          heading: "Revision",
          body: "Active recall; timed practice; quotations/themes/context; exam day management.",
        },
      ],
    },
  ],
};
