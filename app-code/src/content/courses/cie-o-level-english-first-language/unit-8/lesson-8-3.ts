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
              { id: "b", text: "Reading notes repeatedly" },
              { id: "c", text: "Highlighting key points" },
              { id: "d", text: "Watching revision videos" },
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
              { id: "a", text: "Prepare materials and sleep well" },
              { id: "b", text: "Cram all night" },
              { id: "c", text: "Skip dinner" },
              { id: "d", text: "Watch TV late" },
            ],
            correctChoiceId: "a",
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
