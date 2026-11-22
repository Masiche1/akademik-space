import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const EXAMTIP: TextExtract = {
  title: "Exam Strategy Guide",
  author: "Written for Akademik Space",
  text: "ELA exams typically include: multiple-choice questions testing comprehension and analysis, constructed-response questions requiring evidence-based answers, and writing tasks (argument, informative, or narrative). Time management is critical — you cannot answer every question perfectly.",
};

const STRATEGY: TextExtract = {
  title: "Question Type Breakdown",
  author: "Written for Akademik Space",
  text: "Multiple-choice: read question first, then passage; eliminate wrong answers; watch for 'except' questions. Constructed response: claim → evidence → explanation; use text quotes; manage length (2-3 paragraphs). Writing: outline first (5 min), write body (25 min), revise (10 min).",
};

export const lesson93: Lesson = {
  id: "ela8-u9-lesson-9-3",
  code: "9-3",
  title: "Exam Technique and Time Management",
  goal: "I CAN apply strategies for different question types and manage exam time effectively.",
  standards: ["RL.8.1", "RI.8.1", "W.8.1", "W.8.10", "SL.8.1"],
  vocabulary: [
    {
      term: "Time management",
      definition: "Allocating time wisely across exam sections.",
    },
    {
      term: "Multiple-choice strategy",
      definition: "Techniques for MCQ success.",
    },
    {
      term: "Process of elimination",
      definition: "Ruling out wrong answers to find correct one.",
    },
    { term: "Outlining", definition: "Planning structure before writing." },
    { term: "Pacing", definition: "Maintaining steady speed through exam." },
    {
      term: "Prioritization",
      definition: "Answering high-value questions first.",
    },
  ],
  concepts: [
    {
      id: "ela8-u9-mcq",
      title: "Multiple-choice strategy",
      skill:
        "Apply reading, elimination, and analysis strategies for MCQ success.",
      lesson: {
        sections: [
          {
            heading: "MCQ approach",
            body: "Read the **question first** — know what you're looking for before reading passage. Then read passage with question in mind. For each question: eliminate obviously wrong answers first, then compare remaining. Watch for absolute words ('always', 'never') — usually wrong. 'Except' questions ask for the ONE wrong answer — read carefully. If stuck, mark and return — don't waste time.",
          },
          {
            heading: "Common MCQ traps",
            body: "Traps: answer that's true but doesn't answer question; answer that's too extreme; answer that uses passage language but wrong meaning; 'all of the above' (usually wrong if any option wrong). Trust your analysis — first instinct often right. Don't change answers unless you find clear evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Question first",
            statement: "Read question before passage.",
          },
          { name: "Elimination", statement: "Rule out wrong answers first." },
          {
            name: "Absolute words",
            statement: "'Always/never' usually wrong.",
          },
          {
            name: "Except questions",
            statement: "Read carefully — asking for wrong answer.",
          },
        ],
        workedExample: {
          problem:
            "How do you handle 'Which of the following is NOT...' questions?",
          solution:
            "Read carefully — you're looking for the ONE wrong answer. Eliminate the three true statements; the remaining is your answer. Don't rush — easy to misread.",
        },
      },
      questions: [
        {
          id: "ela8-u9-mcq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAMTIP,
          stem: "What should you read first on a reading comprehension exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The passage" },
              { id: "b", text: "The answer choices" },
              { id: "c", text: "The title" },
              { id: "d", text: "The questions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam strategy",
                statement: "Question-first approach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Read questions first — know what you're looking for before reading passage.",
                evidence: "read question first",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. The questions — know what to look for.",
            commonErrors: [
              "Reading passage first — wastes time on irrelevant details.",
            ],
          },
        },
        {
          id: "ela8-u9-mcq-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRATEGY,
          stem: "Explain three MCQ strategies and why they work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "MCQ strategy",
                statement: "Systematic approach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Read question first — focus search for relevant information.",
                evidence: "read question first",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Eliminate wrong answers — narrows choices, increases odds.",
                evidence: "eliminate wrong answers",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Watch for absolute words — 'always/never' usually wrong in nuanced texts.",
                evidence: "absolute words",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. Read question first (focus). 2. Eliminate wrong answers (narrow choices). 3. Watch absolute words (usually wrong).",
            commonErrors: [
              "Listing strategies without explaining why they work.",
            ],
          },
        },
        {
          id: "ela8-u9-mcq-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STRATEGY,
          stem: "A student spends 10 minutes on one difficult MCQ. Explain why this is a problem and what they should do instead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Don't get stuck.",
              },
              {
                kind: "skill",
                name: "Prioritization",
                statement: "Answer easier questions first.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Problem: 10 minutes on one question wastes time that could answer 3-4 easier questions.",
                evidence: "spends 10 minutes",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Solution: mark difficult question, move on, return if time permits.",
                evidence: "mark and return",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strategy: answer all questions you're confident about first, then tackle difficult ones.",
                evidence: "prioritize",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "10 minutes on one question wastes time — could answer 3-4 easier ones. Mark difficult question, move on, return later. Prioritize confident answers first.",
            commonErrors: ["Thinking all questions deserve equal time."],
          },
        },
        {
          id: "ela8-u9-mcq-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRATEGY,
          parts: [
            {
              label: "a",
              prompt: "Why are 'always' and 'never' usually wrong in MCQ?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should you do if stuck on a question?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "MCQ awareness",
                statement: "Recognize patterns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Literature is nuanced — absolute statements rarely fully true.",
                evidence: "absolute words",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Mark it, move on, return if time permits — don't waste time.",
                evidence: "mark and return",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Nuanced texts rarely have absolute truths. (b) Mark, move on, return later.",
            commonErrors: ["Staying stuck — wastes valuable time."],
          },
        },
      ],
    },
    {
      id: "ela8-u9-timing",
      title: "Time management for writing tasks",
      skill:
        "Allocate time effectively for planning, writing, and revising extended responses.",
      lesson: {
        sections: [
          {
            heading: "Writing time allocation",
            body: "For a 45-minute essay: **5 min** outline (claim, reasons, evidence, counterargument, conclusion), **25 min** write body paragraphs, **10 min** revise/edit, **5 min** buffer. Don't start writing without outline — you'll lose organization. Don't skip revision — first drafts are never perfect. Time yourself during practice to build pacing.",
          },
          {
            heading: "Pacing strategies",
            body: "Check clock every 10 minutes — are you on track? If behind, write faster with simpler sentences rather than skipping sections. If ahead, add more evidence or deepen analysis. Reserve last 5 minutes for proofreading — catch errors that cost marks. Prioritize completing all sections over perfecting one.",
          },
        ],
        keyFormulas: [
          {
            name: "Outline first",
            statement: "5 min planning saves 15 min rewriting.",
          },
          { name: "Revise last", statement: "Reserve 10 min for revision." },
          { name: "Check clock", statement: "Every 10 min — adjust pace." },
          {
            name: "Complete > perfect",
            statement: "Finish all sections before polishing.",
          },
        ],
        workedExample: {
          problem: "How should you allocate 45 minutes for an argument essay?",
          solution:
            "5 min outline → 25 min write → 10 min revise → 5 min buffer/proofread. Don't skip outline — saves time later.",
        },
      },
      questions: [
        {
          id: "ela8-u9-timing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAMTIP,
          stem: "How much time should you spend outlining before writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Half the time" },
              { id: "b", text: "About 5 minutes" },
              { id: "c", text: "As much as possible" },
              { id: "d", text: "No time needed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Plan before writing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "5 minutes outlining saves time by preventing disorganized writing.",
                evidence: "outline first",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. About 5 minutes.",
            commonErrors: ["Skipping outline — leads to disorganized writing."],
          },
        },
        {
          id: "ela8-u9-timing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRATEGY,
          stem: "Create a time allocation plan for a 45-minute writing task.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time planning",
                statement: "Allocate wisely.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Outline: 5 min — claim, reasons, evidence, counterargument, conclusion.",
                evidence: "outline first",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Write: 25 min — body paragraphs with evidence.",
                evidence: "write body",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Revise: 10 min — check organization, evidence, grammar.",
                evidence: "revise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "5 min outline → 25 min write → 10 min revise → 5 min buffer/proofread.",
            commonErrors: [
              "Allocating all time to writing — no revision time.",
            ],
          },
        },
        {
          id: "ela8-u9-timing-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAMTIP,
          stem: "You're 15 minutes behind schedule on your essay. What strategies can you use to catch up without sacrificing quality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing adjustment",
                statement: "Adapt when behind.",
              },
              {
                kind: "skill",
                name: "Quality preservation",
                statement: "Don't sacrifice all sections.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Write faster with simpler sentences — don't skip sections entirely.",
                evidence: "write faster",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Prioritize completing all required elements — claim, reasons, counterargument, conclusion.",
                evidence: "complete all sections",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reduce revision time but don't eliminate — still need proofread.",
                evidence: "reduce revision",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Write faster with simpler sentences, prioritize completing all sections, reduce but don't eliminate revision time. Quality over perfection — complete essay scores better than incomplete perfect one.",
            commonErrors: [
              "Panicking and skipping sections — worse than slightly rushed complete essay.",
            ],
          },
        },
        {
          id: "ela8-u9-timing-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRATEGY,
          parts: [
            {
              label: "a",
              prompt: "Why is outlining important for time management?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should you do if you finish early?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Planning benefit",
                statement: "Outline saves time.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Prevents disorganized writing and rewriting — saves time overall.",
                evidence: "outline first",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Use extra time to add evidence, deepen analysis, or proofread thoroughly.",
                evidence: "finish early",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Prevents disorganization/rewriting — saves time. (b) Add evidence, deepen analysis, or proofread.",
            commonErrors: ["Thinking outline wastes time — it saves it."],
          },
        },
      ],
    },
    {
      id: "ela8-u9-review",
      title: "Exam review and self-assessment",
      skill:
        "Review mistakes, identify patterns, and develop improvement strategies.",
      lesson: {
        sections: [
          {
            heading: "Error analysis",
            body: "After each practice exam, categorize errors: **content** (didn't understand), **technique** (knew answer but misread), **time** (ran out), **careless** (knew but made mistake). Content errors need study; technique errors need strategy practice; time errors need pacing work; careless errors need proofreading habits. Track patterns — if you always miss inference questions, focus there.",
          },
          {
            heading: "Improvement strategies",
            body: "For content gaps: review texts, practice questions, ask teacher. For technique: practice timed sections, review strategies. For time: practice full exams under time pressure. For careless: build proofreading checklist (homophones, punctuation, agreement). Improvement requires targeted practice — not just 'study more' but 'practice inference questions for 20 minutes.'",
          },
        ],
        keyFormulas: [
          {
            name: "Categorize errors",
            statement: "Content vs technique vs time vs careless.",
          },
          {
            name: "Targeted practice",
            statement: "Practice specific weakness, not general review.",
          },
          {
            name: "Track patterns",
            statement: "Identify recurring error types.",
          },
        ],
        workedExample: {
          problem:
            "You missed 5 inference questions on practice exam. What should you do?",
          solution:
            "Categorize: if content errors, practice inference questions with evidence-citing exercises. If technique, review inference strategies. Target the specific weakness, not general review.",
        },
      },
      questions: [
        {
          id: "ela8-u9-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAMTIP,
          stem: "What should you do first after a practice exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Categorize your errors" },
              { id: "b", text: "Forget about it" },
              { id: "c", text: "Take another exam" },
              { id: "d", text: "Ask for the answers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Error analysis",
                statement: "Understand why you missed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Categorize errors to identify patterns and target improvement.",
                evidence: "categorize errors",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Categorize your errors.",
            commonErrors: ["Just checking score without analysis."],
          },
        },
        {
          id: "ela8-u9-review-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STRATEGY,
          stem: "You missed questions on inference and evidence citation. What targeted practice should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Targeted practice",
                statement: "Focus on specific weakness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inference practice: read passages, write inferences with evidence + reasoning.",
                evidence: "inference",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence citation: practice quoting/paraphrasing specific text details.",
                evidence: "evidence citation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Targeted: 20 minutes on inference questions, not general review.",
                evidence: "targeted practice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Practice inference questions with evidence-citing exercises — 20 min focused on this weakness, not general review.",
            commonErrors: ["Rereading everything — inefficient."],
          },
        },
        {
          id: "ela8-u9-review-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAMTIP,
          stem: "Create a personal exam improvement plan based on your typical errors. Include specific strategies for each error type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Improvement planning",
                statement: "Targeted strategies.",
              },
              {
                kind: "skill",
                name: "Self-awareness",
                statement: "Know your error patterns.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Identify typical errors: e.g., 'I miss inference questions and run out of time on essays.'",
                evidence: "improvement plan",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strategies: inference practice (20 min/day), timed essay practice (outline-first habit), proofreading checklist.",
                evidence: "specific strategies",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Timeline: practice before each exam, review after each — continuous improvement.",
                evidence: "personal plan",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example plan: 'My errors: inference questions (content) + essay time (time). Strategy: 20 min daily inference practice; timed essay practice weekly with outline-first; proofreading checklist before submission. Review after each exam to track progress.'",
            commonErrors: ["Generic plan without personal error analysis."],
          },
        },
        {
          id: "ela8-u9-review-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STRATEGY,
          parts: [
            { label: "a", prompt: "Name four types of exam errors.", marks: 2 },
            {
              label: "b",
              prompt: "Which type requires different strategy than the others?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Error taxonomy",
                statement: "Different errors need different fixes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Content, technique, time, careless.",
                evidence: "four types",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Content needs study; others need strategy/practice — different approaches.",
                evidence: "different strategy",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Content, technique, time, careless. (b) Content requires study; technique/time/careless require strategy.",
            commonErrors: [
              "Treating all errors same — different fixes needed.",
            ],
          },
        },
      ],
    },
  ],
};
