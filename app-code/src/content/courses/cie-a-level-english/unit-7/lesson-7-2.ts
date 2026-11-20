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
              {
                id: "a",
                text: "Break down components and examine relationships",
              },
              { id: "b", text: "Give personal opinion" },
              { id: "c", text: "List features only" },
              { id: "d", text: "Summarise briefly" },
            ],
            correctChoiceId: "a",
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
              "**(a)** Break down components and examine relationships",
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
              { id: "a", text: "Testing yourself rather than re-reading" },
              { id: "b", text: "Reading notes repeatedly" },
              { id: "c", text: "Highlighting text" },
              { id: "d", text: "Watching videos" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Testing yourself rather than re-reading",
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
