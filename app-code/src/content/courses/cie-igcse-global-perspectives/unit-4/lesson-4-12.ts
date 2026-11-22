import type { Lesson } from "../../../types.ts";

export const lesson412: Lesson = {
  id: "ciegp-u4-lesson-4-12",
  code: "4-12",
  title: "Exam Practice: Final Mixed Set",
  goal: "I CAN apply all GP skills to a final mixed practice set.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: final practice",
  ],
  vocabulary: [
    {
      term: "Mixed practice",
      definition: "Questions spanning all skills and issues.",
    },
    {
      term: "Time pressure",
      definition: "Performing under exam time constraints.",
    },
    {
      term: "Recall under pressure",
      definition: "Retrieving knowledge quickly in exams.",
    },
    {
      term: "Error check",
      definition: "Final review for mistakes before submission.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l12-c1-mixed",
      title: "Mixed issue and skill questions",
      skill:
        "Apply analysis, evaluation and technique to varied global issues.",
      lesson: {
        sections: [
          {
            heading: "Final approach",
            body: "For each question: identify the issue → recall relevant evidence → analyse mechanisms → evaluate perspectives → qualified conclusion. Manage time; don't over-invest in one question.",
          },
        ],
        keyFormulas: [
          {
            name: "Universal answer frame",
            statement: "Issue → evidence → analysis → evaluation → judgement",
          },
        ],
        workedExample: {
          problem: "'To what extent is poverty a global issue?'",
          solution:
            "Poverty is global (1.1B extreme poor) but unevenly distributed; causes include inequality, conflict, weak governance; solutions need economic growth + social protection + governance — qualified conclusion.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l12c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in answering a GP question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write immediately" },
              { id: "b", text: "Choose a side" },
              {
                id: "c",
                text: "Identify the issue and what the question asks",
              },
              { id: "d", text: "List all facts you know" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Question decoding",
                statement: "Understand before answering.",
              },
            ],
            steps: [
              { reasoning: "Correct first step.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Identify issue and requirement",
            commonErrors: ["Writing before understanding."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is it important to 'evaluate' rather than just 'describe' in GP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Core assessed skill.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation is assessed skill.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Description alone scores low.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evaluation (weighing evidence, perspectives, reaching judgement) is the core skill GP assesses — description alone shows no critical thinking.",
            commonErrors: ["Confusing knowledge with evaluation."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one strength and one weakness of the UN in addressing global issues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UN assessment",
                statement: "Legitimacy vs power limits.",
              },
            ],
            steps: [
              { reasoning: "Strength identified.", marks: 1, markCode: "M" },
              { reasoning: "Weakness identified.", marks: 1, markCode: "M" },
              { reasoning: "Both explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Strength: universal legitimacy and coordination (e.g. SDGs, peacekeeping). Weakness: Security Council vetoes, funding gaps, limited enforcement power.",
            commonErrors: ["Generic praise/criticism without specifics."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the statement: 'Global problems need global solutions.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global solutions",
                statement: "Interdependence vs sovereignty/context.",
              },
            ],
            steps: [
              {
                reasoning: "For: transnational problems need coordination.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: local context matters; sovereignty limits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complication: implementation is local.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Climate, pandemics and trade are transnational — global frameworks coordinate action. But implementation is local and sovereignty limits enforcement; effective solutions combine global frameworks with local adaptation.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'stakeholder analysis' involve?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder analysis",
                statement: "Who is affected, how, and their power.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identifying all groups affected by an issue — their interests, impacts and power to influence outcomes — essential for balanced judgement.",
            commonErrors: ["Listing without analysis."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how inequality relates to conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality-conflict link",
                statement: "Grievance fuels violence.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "M" },
              { reasoning: "Nuance noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Economic and political inequality creates grievance that can fuel conflict — e.g. resource disputes, ethnic marginalisation; though inequality alone doesn't cause conflict without other triggers.",
            commonErrors: ["Simplistic 'inequality = conflict'."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a 'research question' in the GP project?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To focus investigation on a specific, answerable question",
              },
              { id: "b", text: "To list everything about an issue" },
              { id: "c", text: "To write the conclusion" },
              { id: "d", text: "To choose a topic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Research question",
                statement: "Focused, answerable inquiry.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Focused inquiry",
            commonErrors: ["Confusing with topic statement."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "'Evaluate the claim that aid creates dependency.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid dependency",
                statement: "Can reduce local initiative vs can build capacity.",
              },
            ],
            steps: [
              { reasoning: "Dependency case.", marks: 1, markCode: "M" },
              { reasoning: "Counter-case.", marks: 1, markCode: "M" },
              { reasoning: "Conditions matter.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Aid can create dependency when it substitutes for local capacity, but well-designed aid (capacity building, exit strategies) reduces dependency — design determines outcome.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should GP answers use specific examples rather than generalisations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Specificity",
                statement: "Examples make claims credible.",
              },
            ],
            steps: [
              { reasoning: "Credibility mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Vague claims weak.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Specific examples demonstrate the claim is evidence-based, not just opinion — 'vague generalities' like 'people think…' score poorly.",
            commonErrors: ["Thinking general statements are safer."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is meant by 'balanced judgement' in GP evaluation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balanced judgement",
                statement: "Weighing all evidence fairly.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why it matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A conclusion that fairly weighs evidence for and against — not a 50/50 dodge, but a reasoned position acknowledging both sides' merits.",
            commonErrors: ["Confusing with neutrality or indecision."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways climate change affects global health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate-health",
                statement: "Direct and indirect impacts.",
              },
            ],
            steps: [
              { reasoning: "Two valid impacts.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. heat waves and extreme weather cause direct mortality; changing disease vectors (mosquitoes) expand malaria/dengue range — plus water/food insecurity effects.",
            commonErrors: ["Only direct impacts."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do if you run out of time in a GP exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop writing" },
              {
                id: "b",
                text: "Ensure all questions have at least a brief answer before finishing",
              },
              { id: "c", text: "Only finish the current question" },
              { id: "d", text: "Leave remaining blank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time management",
                statement: "Brief answers beat blanks.",
              },
            ],
            steps: [
              { reasoning: "Correct strategy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Brief answers for all questions",
            commonErrors: ["Perfectionism on one question."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the strongest opening line for a GP evaluation answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A personal anecdote" },
              {
                id: "b",
                text: "A clear statement of the position being evaluated",
              },
              { id: "c", text: "A long list of definitions" },
              { id: "d", text: "'This is a very important issue.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Answer opening",
                statement: "State position early.",
              },
            ],
            steps: [
              { reasoning: "Clear position frames the evaluation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Clear statement of position",
            commonErrors: ["Warming up with vague statements."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An exam has 5 questions and the candidate spends 60% of time on the first two. What percentage of time remains for questions 3-5?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage remaining", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time budgeting",
                statement: "Remaining = 100% - spent.",
              },
            ],
            steps: [
              { reasoning: "100 - 60 = 40%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Front-loading too much time on early questions."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one example of an unintended consequence of a global policy and explain why it matters for evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unintended consequences",
                statement: "Side effects change net evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "Valid example e.g. plastic ban → black market alternatives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows why stated aims alone don't determine success.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. bans create black markets; evaluation must weigh side effects, not just stated goals.",
            commonErrors: ["Describing policy aim without side effects."],
          },
        },
        {
          id: "ciegp-q-u4l12c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "'To what extent is poverty a global issue rather than just a national one?' Outline your full evaluation approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Integrated evaluation",
                statement: "Frame→evidence→perspectives→judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Frame: poverty is global (~1.1bn extreme poor) but unevenly distributed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence: cross-border causes — trade, conflict, climate, debt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Perspectives: national sovereignty vs global responsibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Qualified judgement: largely global but responses are national.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Poverty is globally distributed and driven by cross-border forces, yet responses remain national — a largely global issue requiring coordinated action.",
            commonErrors: ["Treating as purely national or purely global."],
          },
        },
      ],
    },
  ],
};
