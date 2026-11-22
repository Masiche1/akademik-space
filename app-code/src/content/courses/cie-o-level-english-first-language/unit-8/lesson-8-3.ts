import type { Lesson } from "../../../types.ts";

export const lesson183: Lesson = {
  id: "cie-ol-fl-lesson-8-3",
  code: "8-3",
  title: "Revision and exam day",
  goal: "I CAN revise effectively, use past papers and manage the final exam day.",
  standards: ["1119 Exam preparation"],
  vocabulary: [
    {
      term: "Active recall",
      definition: "Testing yourself on material rather than re-reading it.",
    },
    {
      term: "Past paper",
      definition: "A previous exam paper used for practice.",
    },
    {
      term: "Mark scheme",
      definition: "The examiner's guide showing what earns marks.",
    },
    {
      term: "Weak spots",
      definition: "Topics or skills where performance is lowest.",
    },
    {
      term: "Cramming",
      definition: "Last-minute intensive study, generally ineffective.",
    },
    {
      term: "Exam day routine",
      definition:
        "Preparation steps before and during the exam for best performance.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-revision",
      title: "Effective revision",
      skill: "Use active recall, past papers and targeted practice to prepare.",
      lesson: {
        sections: [
          {
            heading: "Active recall beats re-reading",
            body: "Close the book and test yourself: write what you remember, answer practice questions, explain concepts aloud. Retrieval strengthens memory far more than passive review. Use this course's questions as retrieval practice.",
          },
          {
            heading: "Past papers and markschemes",
            body: "Practise under timed conditions with real past papers. Mark yourself strictly against the markscheme — note not just wrong answers but missing steps or weak explanations. Track recurring weaknesses and target them.",
          },
          {
            heading: "Spaced, targeted revision",
            body: "Revise in short sessions over days rather than one long cram. Prioritise weak areas and high-mark topics. For English: practise timed essays, extract analysis and unseen reading weekly so skills stay sharp.",
          },
        ],
        keyFormulas: [
          {
            name: "Revision method",
            statement: "Active recall+timed past papers+targeted weak spots.",
          },
        ],
        workedExample: {
          problem: "You keep losing marks on analysis questions.",
          solution:
            "Target that skill: rewrite three analyses using device→evidence→effect, then re-attempt a past paper section under time.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-rev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'active recall'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Testing yourself on material rather than re-reading",
              },
              { id: "b", text: "Highlighting key points" },
              { id: "c", text: "Watching revision videos" },
              { id: "d", text: "Reading notes repeatedly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active recall",
                statement:
                  "Retrieving information from memory through self-testing.",
              },
            ],
            steps: [
              {
                reasoning: "Active recall = retrieval practice.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Testing yourself on material",
            commonErrors: ["Confusing with passive review."],
          },
        },
        {
          id: "cie-ol-fl-rev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why practise with past papers under timed conditions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Past papers",
                statement:
                  "Timed practice builds exam technique, stamina and reveals real weaknesses.",
              },
            ],
            steps: [
              {
                reasoning: "Simulates exam pressure and timing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Markscheme feedback identifies specific gaps.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Builds technique and reveals weaknesses under realistic conditions.",
            commonErrors: ["Practising untimed or without marking."],
          },
        },
        {
          id: "cie-ol-fl-rev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is spaced revision more effective than cramming?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spaced revision",
                statement:
                  "Distributed practice with retrieval builds durable memory better than massed practice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Spacing allows forgetting-and-retrieval cycles that strengthen memory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Short sessions maintain focus and allow targeted work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cramming produces fragile, short-term recall.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Spacing+retrieval builds durable memory; cramming is fragile.",
            commonErrors: ["Believing longer single sessions are better."],
          },
        },
        {
          id: "cie-ol-fl-rev-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Effective revision.",
          parts: [
            { label: "a", prompt: "Define active recall.", marks: 1 },
            { label: "b", prompt: "Why use past papers?", marks: 2 },
            {
              label: "c",
              prompt: "How should you use a markscheme when self-marking?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Plan a one-week revision schedule.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision",
                statement: "Recall+past papers+markscheme+schedule.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Testing yourself on material.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Timed practice builds technique.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Reveals weaknesses via markscheme feedback.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Mark strictly against published criteria.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Note missing steps, not just wrong answers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Target recurring weaknesses.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Schedule has daily sessions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Includes practice questions/papers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Targets weak areas specifically.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Realistic and balanced.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) self-testing (b) technique+feedback (c) strict marking+targeting (d) daily targeted plan",
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
                descriptor: "Markscheme use clear.",
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
                descriptor: "Realistic schedule.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Some structure.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Passive re-reading and last-minute cramming."],
          },
        },
        {
          id: "cie-ol-fl-rev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which revision method is most effective for remembering material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active recall and self-testing" },
              { id: "b", text: "Re-reading notes repeatedly" },
              { id: "c", text: "Watching videos passively" },
              { id: "d", text: "Highlighting key points" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active recall",
                statement:
                  "Retrieving information from memory strengthens it far more than re-reading.",
              },
            ],
            steps: [
              {
                reasoning: "Self-testing forces retrieval — the strongest memory builder.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Active recall and self-testing",
            commonErrors: ["Choosing passive review methods."],
          },
        },
        {
          id: "cie-ol-fl-rev-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'spaced revision'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Studying only on weekends" },
              { id: "b", text: "Short study sessions spread over several days" },
              { id: "c", text: "One long session the night before" },
              { id: "d", text: "Leaving gaps between words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spaced revision",
                statement:
                  "Distributed practice over days builds durable memory better than massed practice.",
              },
            ],
            steps: [
              {
                reasoning: "Spacing spreads sessions across days.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Short sessions over several days",
            commonErrors: ["Confusing spacing with cramming."],
          },
        },
        {
          id: "cie-ol-fl-rev-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you mark yourself strictly against the markscheme after a past paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is required by the exam board" },
              { id: "b", text: "It makes the paper longer" },
              { id: "c", text: "It replaces real feedback" },
              {
                id: "d",
                text: "It reveals missing steps and weak explanations, not just wrong answers",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Markscheme feedback",
                statement:
                  "Strict marking identifies specific gaps — missing steps, weak reasoning.",
              },
            ],
            steps: [
              {
                reasoning: "Markschemes show exactly what earns each mark.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Gaps found this way become targets for revision.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Reveals missing steps and weak explanations",
            commonErrors: ["Marking generously and missing the gaps."],
          },
        },
        {
          id: "cie-ol-fl-rev-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you record after each past paper to improve your revision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only your total score" },
              { id: "b", text: "The questions you found easy" },
              { id: "c", text: "Nothing — just move on" },
              {
                id: "d",
                text: "Recurring weaknesses to target",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Targeted revision",
                statement:
                  "Track recurring weaknesses and prioritise them in revision.",
              },
            ],
            steps: [
              {
                reasoning: "Patterns across papers reveal real weak spots.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Targeted practice fixes weaknesses efficiently.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Recurring weaknesses to target",
            commonErrors: ["Recording scores without analysing patterns."],
          },
        },
        {
          id: "cie-ol-fl-rev-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A revision plan covers 6 topics with 45 minutes allocated to each. How many minutes of revision are planned in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 270 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision planning",
                statement: "Total revision time = topics x time per topic.",
              },
            ],
            steps: [
              {
                reasoning: "6 x 45 = 270 minutes.",
                working: "6 x 45 = 270",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "270",
            commonErrors: ["Multiplying by the wrong number of topics."],
          },
        },
        {
          id: "cie-ol-fl-rev-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A past paper is worth 90 marks and lasts 105 minutes. You reserve 15 minutes for checking. How many minutes are available for writing?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed practice",
                statement: "Simulate exam conditions including reserved check time.",
              },
            ],
            steps: [
              {
                reasoning: "105 - 15 = 90 minutes for writing.",
                working: "105 - 15 = 90",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Forgetting the reserve in timed practice."],
          },
        },
        {
          id: "cie-ol-fl-rev-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student answers 20 practice questions and gets 12 correct. What percentage of questions are answered correctly?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Performance tracking",
                statement: "Track scores to measure improvement over time.",
              },
            ],
            steps: [
              {
                reasoning: "12 / 20 = 0.6.",
                working: "12 / 20 = 0.6",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "0.6 x 100 = 60%.",
                working: "0.6 x 100 = 60",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "60",
            commonErrors: ["Reporting 12/20 instead of a percentage."],
          },
        },
        {
          id: "cie-ol-fl-rev-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is re-reading notes less effective than self-testing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Active recall",
                statement: "Retrieval strengthens memory; passive review creates familiarity, not recall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Re-reading feels productive but tests nothing — you recognise, not recall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Self-testing exposes gaps and builds exam-ready recall.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Re-reading creates familiarity; self-testing builds actual recall.",
            commonErrors: ["Mistaking familiarity for mastery."],
          },
        },
        {
          id: "cie-ol-fl-rev-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should you use markscheme feedback after self-marking a past paper?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Markscheme feedback",
                statement: "Markschemes reveal exactly what earns marks — use them to target gaps.",
              },
            ],
            steps: [
              {
                reasoning: "Mark strictly against the published criteria.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Note missing steps and weak explanations, not just wrong answers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Turn recurring gaps into revision targets.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Strict marking + gap analysis + targeted revision.",
            commonErrors: ["Marking generously and ignoring the markscheme."],
          },
        },
        {
          id: "cie-ol-fl-rev-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student always loses marks on analysis questions. Outline a targeted revision plan to fix this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Targeted revision",
                statement: "Identify the weak skill, practise it specifically, then re-test.",
              },
            ],
            steps: [
              {
                reasoning: "Diagnose the exact gap via markscheme feedback.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Practise the skill: rewrite analyses using device → evidence → effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Re-attempt a past paper section under timed conditions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Self-mark again to verify improvement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Diagnose → targeted practice → timed re-test → verify with markscheme.",
            commonErrors: ["Revising everything equally instead of the weak skill."],
          },
        },
        {
          id: "cie-ol-fl-rev-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should English skills like timed essays be practised weekly rather than only before the exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skill maintenance",
                statement: "Skills decay without regular practice — weekly keeps them sharp.",
              },
            ],
            steps: [
              {
                reasoning: "Regular practice builds automatic technique.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Last-minute practice cannot build the stamina timed writing needs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Weekly practice keeps skills automatic and builds exam stamina.",
            commonErrors: ["Treating English as knowledge rather than skill."],
          },
        },
        {
          id: "cie-ol-fl-rev-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim 'one long revision session the night before is as good as spaced revision'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spaced revision",
                statement:
                  "Spaced sessions with retrieval build durable memory; massed practice is fragile.",
              },
            ],
            steps: [
              {
                reasoning: "Claim evaluated — cramming produces fragile short-term recall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Spacing allows forgetting-and-retrieval cycles that strengthen memory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Short sessions maintain focus and allow targeted weak-area work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balanced judgement on the claim.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The claim is false — spaced retrieval builds durable memory; cramming is fragile.",
            commonErrors: ["Agreeing with the claim without evidence."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-exam-day",
      title: "Exam day strategy",
      skill:
        "Prepare physically and mentally and execute a strong exam performance.",
      lesson: {
        sections: [
          {
            heading: "Before the exam",
            body: "Prepare materials the night before: pens, pencils, ruler, watch, ID. Sleep well — fatigue hurts more than extra revision helps. Eat a proper breakfast. Arrive early to avoid stress.",
          },
          {
            heading: "During the exam",
            body: "Use reading time to scan the whole paper. Plan your order and time budget. Write legibly — markers cannot award marks they cannot read. If stuck, move on and return; fresh eyes often solve the problem. Attempt every question.",
          },
          {
            heading: "Mindset",
            body: "Nerves are normal; channel them into focus. If you blank on one question, skip it — dwelling wastes time and confidence. Trust your preparation: you have done the work, now execute it calmly.",
          },
        ],
        keyFormulas: [
          {
            name: "Exam day",
            statement:
              "Prepare+sleep+plan+attempt all+stay calm=best performance.",
          },
        ],
        workedExample: {
          problem: "You blank on question 3 of 8.",
          solution:
            "Mark it, move to question 4, return later with fresh eyes. Partial attempts still earn marks.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-eday-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do the night before an exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cram all night" },
              { id: "b", text: "Prepare materials and sleep well" },
              { id: "c", text: "Skip dinner" },
              { id: "d", text: "Watch TV late" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam preparation",
                statement: "Materials ready+rest=sleep better than cramming.",
              },
            ],
            steps: [
              {
                reasoning: "Rest and preparation beat last-minute cramming.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Prepare materials and sleep well",
            commonErrors: ["All-night cramming."],
          },
        },
        {
          id: "cie-ol-fl-eday-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is legibility important in handwritten exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Legibility",
                statement:
                  "Markers cannot award marks they cannot read — clarity is a mark-earning skill.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Illegible answers may be marked as wrong or incomplete.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear presentation aids the examiner's marking.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Illegible work cannot be fairly marked — clarity protects marks.",
            commonErrors: ["Writing fast and carelessly."],
          },
        },
        {
          id: "cie-ol-fl-eday-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What should you do when you get stuck on an exam question?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stuck questions",
                statement:
                  "Move on and return — fresh perspective often resolves blocks; blank answers earn nothing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mark the question and continue to secure other marks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Return later with fresh eyes — often the block clears.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Never leave blank — attempt partially for credit.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear strategy.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Move on, return later, attempt partially — never leave blank.",
            commonErrors: ["Staring at one question and losing time."],
          },
        },
        {
          id: "cie-ol-fl-eday-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Exam day strategy.",
          parts: [
            {
              label: "a",
              prompt: "Name two things to prepare the night before.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Why is sleep important before an exam?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What should you do in reading time?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "You blank on a question — what is your strategy?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam day",
                statement: "Preparation+rest+reading time+strategy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any two of materials, sleep, food, route planning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Two valid items.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Rest supports concentration and recall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Fatigue impairs performance more than revision helps.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Scan whole paper for structure and difficulty.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Plan order and time budget.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Identify which questions to attempt first.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Mark it, move on, return later.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Attempt partially — never leave blank.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Stay calm, trust preparation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) materials+sleep (b) rest=cognition (c) scan+plan (d) move on+attempt",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Two items.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Fewer than two.",
                part: "a",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Sleep explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Reading time use clear.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Strategy clear.",
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
            commonErrors: ["Panicking and leaving questions blank."],
          },
        },
        {
          id: "cie-ol-fl-eday-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first when you sit down for the exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Close your eyes and relax" },
              { id: "b", text: "Check your phone" },
              { id: "c", text: "Start writing immediately" },
              {
                id: "d",
                text: "Use reading time to scan the paper and plan",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading time",
                statement: "Scan the whole paper and plan order and time budget.",
              },
            ],
            steps: [
              {
                reasoning: "Reading time exists for scanning and planning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Scan the paper and plan",
            commonErrors: ["Starting to write without scanning the paper."],
          },
        },
        {
          id: "cie-ol-fl-eday-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You blank on a question during the exam. What is the best immediate action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leave it completely blank" },
              {
                id: "b",
                text: "Mark it, move on and return later",
              },
              { id: "c", text: "Give up on the whole paper" },
              { id: "d", text: "Keep staring until it comes to you" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stuck questions",
                statement:
                  "Move on and return — fresh eyes often clear the block.",
              },
            ],
            steps: [
              {
                reasoning: "Moving on secures other marks and clears the mental block.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Mark it, move on, return later",
            commonErrors: ["Dwelling on one question and losing time."],
          },
        },
        {
          id: "cie-ol-fl-eday-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is arriving early for the exam beneficial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners prefer early arrivals" },
              {
                id: "b",
                text: "It reduces stress and avoids rushed preparation",
              },
              { id: "c", text: "It lets you leave materials at home" },
              { id: "d", text: "You get extra writing time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam day routine",
                statement: "Arriving early removes avoidable stress.",
              },
            ],
            steps: [
              {
                reasoning: "Buffer time prevents travel-related panic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Calm arrival supports focus from the start.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Reduces stress and avoids rushing",
            commonErrors: ["Arriving just in time and starting flustered."],
          },
        },
        {
          id: "cie-ol-fl-eday-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is eating breakfast before an exam important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It replaces sleep" },
              { id: "b", text: "It is a tradition" },
              { id: "c", text: "It fuels concentration and stable energy" },
              { id: "d", text: "It makes you write faster" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam day routine",
                statement: "Proper food supports concentration during long exams.",
              },
            ],
            steps: [
              {
                reasoning: "Food provides steady energy for the exam duration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hunger and low blood sugar impair focus and recall.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Fuels concentration and stable energy",
            commonErrors: ["Skipping breakfast to save time."],
          },
        },
        {
          id: "cie-ol-fl-eday-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An exam lasts 2 hours with a 10-minute break. How many minutes are spent actually writing?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 110 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam timing",
                statement: "Break time must be subtracted from the total.",
              },
            ],
            steps: [
              {
                reasoning: "120 - 10 = 110 minutes writing.",
                working: "120 - 10 = 110",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "110",
            commonErrors: ["Forgetting to subtract the break."],
          },
        },
        {
          id: "cie-ol-fl-eday-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "You have 11 questions and 110 writing minutes. At equal allocation, how many minutes does each question receive?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time budgeting",
                statement: "Time per question = total writing time / number of questions.",
              },
            ],
            steps: [
              {
                reasoning: "110 / 11 = 10 minutes per question.",
                working: "110 / 11 = 10",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "10",
            commonErrors: ["Dividing by the wrong number of questions."],
          },
        },
        {
          id: "cie-ol-fl-eday-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An exam day involves 40 minutes travel, 15 minutes check-in, a 150-minute exam and 30 minutes lunch. How many minutes in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 235 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Day planning",
                statement: "Total day time = all segments summed.",
              },
            ],
            steps: [
              {
                reasoning: "40 + 15 + 150 + 30 = 235 minutes.",
                working: "40 + 15 + 150 + 30 = 235",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning: "Planning the whole day prevents time pressure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "235",
            commonErrors: ["Leaving out one of the segments."],
          },
        },
        {
          id: "cie-ol-fl-eday-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is sleep the night before an exam more valuable than late-night cramming?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rest",
                statement: "Rest supports concentration and recall better than extra revision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sleep consolidates memory and restores cognitive function.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fatigue impairs performance more than a few extra revision hours help.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Sleep consolidates learning and restores focus — fatigue hurts more than revision helps.",
            commonErrors: ["All-night cramming before the exam."],
          },
        },
        {
          id: "cie-ol-fl-eday-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should you use reading time effectively at the start of an exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading time",
                statement: "Scan the whole paper and plan before writing.",
              },
            ],
            steps: [
              {
                reasoning: "Scan the whole paper for structure and difficulty.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Plan the order of attack and time budget.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify which questions to attempt first.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Scan + plan order + set time budget during reading time.",
            commonErrors: ["Wasting reading time or starting to write immediately."],
          },
        },
        {
          id: "cie-ol-fl-eday-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You finish the exam paper with 15 minutes left. What should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reserve time",
                statement: "Reserved time is for checking, finishing and proofreading.",
              },
            ],
            steps: [
              {
                reasoning: "Check every question has been attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Finish any incomplete answers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Proofread for spelling, punctuation and grammar errors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ensure answers are legible.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Check coverage, finish incomplete answers, proofread, check legibility.",
            commonErrors: ["Sitting idle or starting unnecessary new work."],
          },
        },
        {
          id: "cie-ol-fl-eday-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can you manage exam nerves productively?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mindset",
                statement: "Nerves are normal; channel them into focus, not panic.",
              },
            ],
            steps: [
              {
                reasoning: "Accept nerves as normal rather than fighting them.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Use preparation and process focus to stay calm.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Accept nerves, focus on process and preparation, keep executing calmly.",
            commonErrors: ["Panicking and dwelling on one blank question."],
          },
        },
        {
          id: "cie-ol-fl-eday-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create an exam-morning checklist covering preparation, arrival and the first ten minutes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam day routine",
                statement: "Prepare materials, arrive early, use reading time to plan.",
              },
            ],
            steps: [
              {
                reasoning: "Preparation: materials ready, eat, sleep well.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Arrival: early, calm, seated and ready.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "First ten minutes: scan paper, plan order and time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Checklist is complete and practical.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Prepare → arrive early → scan/plan in reading time → begin with budget.",
            commonErrors: ["Checklist missing reading-time planning."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-exam-prep-notes",
      title: "Revision and exam day — revision notes",
      summary:
        "Active recall, past papers, markscheme self-marking, and exam day execution.",
      sections: [
        {
          heading: "Revision",
          body: "Active recall > re-reading. Timed past papers under exam conditions. Self-mark strictly against markschemes. Target weak areas. Space sessions over days.",
        },
        {
          heading: "Before the exam",
          body: "Prepare materials the night before. Sleep well — rest beats cramming. Eat properly. Arrive early.",
        },
        {
          heading: "During the exam",
          body: "Use reading time to scan and plan. Budget time by marks. Write legibly. If stuck, move on and return. Attempt every question — partial credit exists.",
        },
        {
          heading: "Mindset",
          body: "Nerves are normal. Trust your preparation. One blank doesn't define the exam — keep executing.",
        },
      ],
    },
  ],
};
