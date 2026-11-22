import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ciealehist-u6-lesson-6-2",
  code: "6-2",
  title: "Essay Writing and Historical Argument",
  goal: "I CAN construct historical arguments, structure essays and evaluate evidence.",
  standards: ["Cambridge A Level History 9489", "Unit 6: essay skills"],
  vocabulary: [
    { term: "Thesis", definition: "Central argument of essay." },
    {
      term: "Argument",
      definition: "Reasoned position supported by evidence.",
    },
    { term: "Counter-argument", definition: "Opposing view addressed." },
    { term: "Evidence", definition: "Facts/examples supporting argument." },
    { term: "Evaluation", definition: "Weighing strengths/weaknesses." },
    {
      term: "Historiographical essay",
      definition: "Comparing historians' views.",
    },
  ],
  concepts: [
    {
      id: "ciealehist-u6l2-c1-argument",
      title: "Constructing historical arguments",
      skill:
        "Formulate theses, structure arguments and use evidence effectively.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "**Introduction**: context + thesis (clear argument). **Body**: paragraphs each advancing argument — topic sentence, evidence, analysis, link to thesis. **Counter-argument**: address opposing view, refute or concede partially. **Conclusion**: restate thesis, summarise, evaluate overall.",
          },
          {
            heading: "Evidence use",
            body: "**Specificity**: named events, dates, places, people — not vague generalities. **Relevance**: evidence must support argument, not just be 'about' topic. **Analysis**: explain WHY evidence matters — don't just list facts. **Balance**: acknowledge complexity, counter-evidence where appropriate.",
          },
        ],
        keyFormulas: [
          { name: "Thesis", statement: "Clear argument" },
          {
            name: "Paragraph",
            statement: "Topic sentence → evidence → analysis",
          },
          { name: "Evaluation", statement: "Weighing + judgement" },
        ],
        workedExample: {
          problem: "Essay: 'The Cold War was inevitable.' Construct a thesis.",
          solution:
            "Thesis: 'While ideological rivalry made conflict likely, specific decisions (Truman Doctrine, Berlin Blockade, nuclear arms race) made Cold War escalation probable but not inevitable — contingency mattered.'",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u6l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'thesis' in an essay is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence" },
              { id: "b", text: "Central argument" },
              { id: "c", text: "Conclusion" },
              { id: "d", text: "Introduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Argument." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Argument",
            commonErrors: ["Section confused."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes 'good evidence' in historical essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Good evidence",
                statement: "Specific + relevant.",
              },
            ],
            steps: [
              { reasoning: "Specificity.", marks: 1, markCode: "M" },
              { reasoning: "Relevance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Specific (named events, dates, people) and relevant (directly supports argument) — vague generalities and irrelevant facts weaken essays.",
            commonErrors: ["Any facts."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to 'analyse' rather than just 'describe' in history essays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis",
                statement: "Why it matters.",
              },
            ],
            steps: [
              { reasoning: "Description.", marks: 1, markCode: "M" },
              { reasoning: "Analysis.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Description states what happened; analysis explains WHY it happened, its significance, causes, consequences — e.g. not 'Germany invaded Poland' but 'invasion revealed flaws in appeasement policy'.",
            commonErrors: ["Facts only."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How should counter-arguments be handled in essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counter-argument",
                statement: "Address opposition.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Methods.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Acknowledge opposing view → refute with evidence OR concede partially while showing why thesis still holds — strengthens argument by showing awareness of complexity.",
            commonErrors: ["Ignore opposition."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse what distinguishes 'first-class' history essays from mediocre ones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay quality",
                statement: "Depth + argument.",
              },
            ],
            steps: [
              { reasoning: "First-class features.", marks: 1, markCode: "M" },
              { reasoning: "Mediocre features.", marks: 1, markCode: "M" },
              { reasoning: "Key difference.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "First-class: clear thesis, sophisticated argument, specific evidence, analysis not description, evaluation, historiographical awareness. Mediocre: narrative summary, vague generalities, no argument.",
            commonErrors: ["Length only."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'historiographical essay'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hist essay",
                statement: "Compare historians.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Structure.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Essay comparing different historians' interpretations — analyse their arguments, evidence, biases; evaluate which most convincing — tests understanding of interpretation debates.",
            commonErrors: ["Standard essay."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'topic sentence' of a paragraph should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give evidence" },
              { id: "b", text: "State the paragraph's main point" },
              { id: "c", text: "Ask question" },
              { id: "d", text: "Summarise essay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Topic sentence",
                statement: "Main point.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Main point",
            commonErrors: ["Evidence."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to strengthen an argument in a history essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Strengthening",
                statement: "Evidence + analysis.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. use specific named examples (shows knowledge) and analyse causes/consequences (shows understanding) — also address counter-arguments, use historiography.",
            commonErrors: ["Vague claims."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is 'evaluation' important in history essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "Weighing." },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Shows sophistication — weighs evidence quality, acknowledges limitations, makes justified judgement; e.g. 'while X argues Y, Z's evidence is stronger because...' — moves beyond description.",
            commonErrors: ["Optional."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of 'structure' in historical argumentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure",
                statement: "Logical flow.",
              },
            ],
            steps: [
              { reasoning: "Chronological.", marks: 1, markCode: "M" },
              { reasoning: "Thematic.", marks: 1, markCode: "M" },
              { reasoning: "Argument-led.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Chronological for narrative, thematic for comparisons, argument-led for analytical essays — structure must serve argument; clear signposting helps examiner follow reasoning.",
            commonErrors: ["Random structure."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'introduction' of a history essay should include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biographies" },
              { id: "b", text: "Conclusion first" },
              { id: "c", text: "All evidence" },
              { id: "d", text: "Context and a clear thesis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Introduction",
                statement: "Context+thesis.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Context+thesis",
            commonErrors: ["Evidence dump."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'linking' and why does it matter in essay paragraphs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Linking",
                statement: "Connect to thesis.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Connecting each paragraph's point back to the thesis — shows the paragraph advances the argument, not just presents information; prevents essays becoming lists of facts.",
            commonErrors: ["Disconnected paragraphs."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'specificity' strengthens historical arguments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specificity",
                statement: "Named detail.",
              },
            ],
            steps: [
              { reasoning: "What specificity means.", marks: 1, markCode: "M" },
              { reasoning: "Why it helps.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Named events, dates, places, people demonstrate knowledge and precision — 'the 1948 Berlin Blockade' is stronger than 'post-war crises'; vague claims invite doubt, specific claims invite verification.",
            commonErrors: ["Vague generalities."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways to write an effective 'conclusion' in a history essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Conclusion",
                statement: "Restate+evaluate.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. restate the thesis in light of the evidence presented, and evaluate the overall argument's strengths/limitations — do not introduce new evidence or simply repeat the introduction.",
            commonErrors: ["New evidence."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "How should a 'thesis' be formulated for a 'to what extent' essay question?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thesis formulation",
                statement: "Nuanced judgement.",
              },
            ],
            steps: [
              { reasoning: "Key features.", marks: 1, markCode: "M" },
              { reasoning: "Weighing element.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Thesis should take a qualified position acknowledging partial truth of the claim — e.g. 'X was significant BUT Y/Z mattered more' or 'partly true, depending on perspective' — reflects weighing rather than binary yes/no.",
            commonErrors: ["Binary thesis."],
          },
        },
        {
          id: "ciealehist-q-u6l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how 'contingency' can be used to build a historical argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contingency",
                statement: "Decisions shaped outcomes.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Argument use.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Contingency = outcomes depended on specific decisions, accidents, choices — argues against inevitability; e.g. Cold War escalation hinged on Truman Doctrine, Berlin Blockade responses — human agency mattered, not just structural forces.",
            commonErrors: ["Determinism only."],
          },
        },
      ],
    },
    {
      id: "ciealehist-u6l2-c2-exam",
      title: "Exam technique and time management",
      skill:
        "Apply exam strategies, manage time and answer question types effectively.",
      lesson: {
        sections: [
          {
            heading: "Question types",
            body: "**Source-based**: analyse provided sources + essay. **Essay**: extended argument. **Structured**: shorter answers, specific focus. **Historiographical**: compare interpretations. Each demands different approach — read carefully, identify command words (analyse, evaluate, discuss, to what extent).",
          },
          {
            heading: "Time management",
            body: "**Plan**: spend 5-10 min outlining before writing. **Marks = time**: allocate proportionally (e.g. 20-mark essay = ~45 min). **Prioritise**: answer all questions, spend more on high-mark questions. **Review**: leave 5-10 min to check structure, spelling, completeness.",
          },
        ],
        keyFormulas: [
          { name: "Command words", statement: "Analyse, evaluate, discuss" },
          { name: "Marks = time", statement: "Proportional" },
          { name: "Plan first", statement: "5-10 min" },
        ],
        workedExample: {
          problem:
            "1.5 hour exam, two essays (25 marks each) + source question (10 marks). Allocate time.",
          solution:
            "Source Q: 20 min. Essay 1: 35 min. Essay 2: 35 min. Review: 10 min. Total 100 min — leaves buffer for planning within each section.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u6l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'To what extent' questions require:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List" },
              { id: "b", text: "Yes/no answer" },
              { id: "c", text: "Weighing evidence and making judgement" },
              { id: "d", text: "Definition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Command word", statement: "Weighing." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Weighing",
            commonErrors: ["Binary."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is planning important before writing history essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning",
                statement: "Structure first.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Time saving.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ensures coherent argument, covers all points, avoids repetition — 5-10 min planning saves time and improves quality vs writing then organising.",
            commonErrors: ["Waste of time."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should time be allocated in a 2-hour history exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Time allocation",
                statement: "Proportional.",
              },
            ],
            steps: [
              { reasoning: "Principle.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Review time.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Marks = time: e.g. 40-mark essay = 60 min, 20-mark essay = 30 min, source question = 20 min, review = 10 min — adjust for question count/marks.",
            commonErrors: ["Equal time."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the difference between 'source-based' and 'essay' questions in history exams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question types",
                statement: "Different demands.",
              },
            ],
            steps: [
              { reasoning: "Source-based.", marks: 1, markCode: "M" },
              { reasoning: "Essay.", marks: 1, markCode: "M" },
              { reasoning: "Skills needed.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Source-based: analyse provided documents (reliability, utility, corroboration) + broader essay; essay: extended argument from knowledge — source questions test evaluation skills, essays test argumentation.",
            commonErrors: ["Same skills."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate strategies for handling unfamiliar essay questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unfamiliar questions",
                statement: "Adaptability.",
              },
            ],
            steps: [
              { reasoning: "Strategies.", marks: 1, markCode: "M" },
              { reasoning: "Limits.", marks: 1, markCode: "M" },
              { reasoning: "Preparation.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Break down keywords, connect to known content, use broader themes — preparation (reading widely, practising essays) reduces unfamiliarity; can't prepare everything but skills transfer.",
            commonErrors: ["Panic."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'evaluate' require in history essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluate",
                statement: "Weigh + judge.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Components.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weigh strengths and weaknesses of argument/evidence, make justified judgement — requires balanced consideration + conclusion, not just description.",
            commonErrors: ["Describe."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Discuss' questions require:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List of facts" },
              { id: "b", text: "Definition only" },
              { id: "c", text: "Exploring different perspectives" },
              { id: "d", text: "One-sided argument" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Discuss", statement: "Perspectives." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Perspectives",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two common mistakes in history exam essays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Common errors",
                statement: "Narrative + no argument.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. narrative summary without argument (story-telling) and vague generalities without specific examples (no evidence) — both lose marks despite knowledge.",
            commonErrors: ["Perfect answers."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should 'review time' be reserved in exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Review",
                statement: "Check + improve.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "What to check.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Check completeness (all questions answered), structure (coherent argument), spelling/grammar — catch errors, add missing points, ensure time wasn't misallocated.",
            commonErrors: ["No review."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of 'case studies' in history exams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Case studies",
                statement: "Specific examples.",
              },
            ],
            steps: [
              { reasoning: "Function.", marks: 1, markCode: "M" },
              { reasoning: "Selection.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Specific examples (events, places, people) make arguments concrete — choose relevant, well-known cases; use to illustrate general points, not as isolated stories; depth over breadth.",
            commonErrors: ["Random examples."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Analyse' questions in history require:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing facts" },
              { id: "b", text: "Agreeing with all views" },
              { id: "c", text: "Defining terms only" },
              {
                id: "d",
                text: "Breaking down causes, effects and significance",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Analyse",
                statement: "Breakdown.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Breakdown",
            commonErrors: ["Description."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should you 'answer all questions' in a history exam?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "All questions",
                statement: "Marks available.",
              },
            ],
            steps: [
              { reasoning: "Reason.", marks: 1, markCode: "M" },
              { reasoning: "Strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unanswered questions score zero regardless of difficulty — attempt every question, prioritising high-mark ones; partial answers earn partial marks even when full answer isn't possible.",
            commonErrors: ["Skip hard ones."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How should 'source-based' exam questions be approached differently from standard essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Source questions",
                statement: "Evaluate+argue.",
              },
            ],
            steps: [
              { reasoning: "Source skills needed.", marks: 1, markCode: "M" },
              { reasoning: "Approach.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Must evaluate provided sources (provenance, reliability, utility, corroboration) before using them — don't just quote; assess each source's value for the question, then build argument — different from essay which relies on own knowledge.",
            commonErrors: ["Ignore sources."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two strategies for 'historiographical' exam questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Hist essay strategy",
                statement: "Compare+evaluate.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. identify each historian's argument and evidence before comparing, and evaluate which interpretation is most convincing using specific reasons — structure by historian or by theme, but always compare explicitly.",
            commonErrors: ["Summary only."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why might 'prioritising' questions improve exam performance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prioritising",
                statement: "Marks per minute.",
              },
            ],
            steps: [
              { reasoning: "Principle.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Risk management.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High-mark questions offer more marks per minute — spend time where it counts; ensures enough time for extended essays; avoids running out mid-question — but still attempt all questions for partial marks.",
            commonErrors: ["Equal time all."],
          },
        },
        {
          id: "ciealehist-q-u6l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how 'command words' should shape exam answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Command words",
                statement: "Differentiate response.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Command words dictate required response — 'analyse' needs breakdown, 'evaluate' needs weighing+judgement, 'discuss' needs multiple perspectives, 'to what extent' needs qualification — answering the wrong way loses marks despite knowledge.",
            commonErrors: ["Ignore instructions."],
          },
        },
      ],
    },
  ],
};
