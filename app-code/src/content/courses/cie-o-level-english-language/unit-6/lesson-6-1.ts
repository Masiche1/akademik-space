import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cie-ol-el-lesson-6-1",
  code: "6-1",
  title: "Argumentative writing structure",
  goal: "I CAN construct well-structured arguments.",
  standards: ["1123 Writing: argumentative"],
  vocabulary: [
    { term: "Argument", definition: "Set of reasons supporting a claim." },
    { term: "Thesis", definition: "Main argument or position." },
    { term: "Evidence", definition: "Facts, statistics, examples supporting points." },
    { term: "Counterargument", definition: "Opposing view that must be addressed." },
    { term: "Rebuttal", definition: "Response refuting counterargument." },
    { term: "Conclusion", definition: "Summary of argument and final position." },
  ],
  concepts: [
    {
      id: "cie-ol-el-argument-structure",
      title: "Argument structure",
      skill: "Build arguments with thesis, evidence and counterarguments.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "Introduction (thesis) → main points with evidence → counterarguments → rebuttals → conclusion. Each point needs support.",
          },
          {
            heading: "Thesis statement",
            body: "Clear, specific, arguable position stated in introduction. Not a fact — something people could disagree with.",
          },
          {
            heading: "Evidence types",
            body: "Statistics, expert opinions, examples, anecdotes, logical reasoning. Vary evidence types for strength.",
          },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Thesis→points+evidence→counterarguments→rebuttals→conclusion." },
        ],
        workedExample: {
          problem: "Write argument for school uniforms.",
          solution: "Thesis: uniforms beneficial. Points: equality, focus, safety. Evidence: studies, examples. Address counterarguments. Conclude strongly.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-as-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'thesis statement'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main argument" },
              { id: "b", text: "Supporting detail" },
              { id: "c", text: "Question" },
              { id: "d", text: "Conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Main argument stated in introduction." },
            ],
            steps: [
              { reasoning: "Thesis = main argument.", working: "main argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main argument",
            commonErrors: ["Choosing (c) — that's question."],
          },
        },
        {
          id: "cie-ol-el-as-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence", statement: "Statistics, expert opinions, examples, anecdotes, logic." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Statistics, expert opinions, examples, anecdotes, logic (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are counterarguments important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterarguments", statement: "Acknowledging opposing views strengthens argument — shows balance." },
            ],
            steps: [
              { reasoning: "Acknowledging opposing views shows fairness.", working: "fairness", marks: 1, markCode: "AO2" },
              { reasoning: "Refuting with evidence strengthens position.", working: "refute", marks: 1, markCode: "AO2" },
              { reasoning: "Shows you've considered all sides.", working: "considered", marks: 1, markCode: "AO2" },
              { reasoning: "Importance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fairness, strengthens argument, shows consideration.",
            commonErrors: ["Ignoring opposing views — weakens argument."],
          },
        },
        {
          id: "cie-ol-el-as-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Construct and evaluate arguments.",
          parts: [
            { label: "a", prompt: "Describe argument structure.", marks: 2 },
            { label: "b", prompt: "Name evidence types.", marks: 3 },
            { label: "c", prompt: "Why counterarguments?", marks: 2 },
            { label: "d", prompt: "How to conclude strongly?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argumentation", statement: "Structure, evidence, counterarguments, conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis→points+evidence→counterarguments→rebuttals→conclusion.", working: "structure", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Statistics, expert opinions, examples, anecdotes, logic.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Fairness, strengthens argument, shows consideration.", working: "counter", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Summarise points, restate thesis, call to action.", working: "conclusion", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) structure (b) evidence types (c) counterarguments=balance (d) summary+restatement+CTA",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ types.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No counterarguments — one-sided."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-argument-techniques",
      title: "Argumentative techniques",
      skill: "Use persuasive techniques effectively.",
      lesson: {
        sections: [
          {
            heading: "Persuasive techniques",
            body: "Rhetorical questions, emotive language, statistics, expert endorsements, inclusive language ('we'), direct address ('you').",
          },
          {
            heading: "Logical vs emotional appeals",
            body: "Logical: facts, statistics, reasoning. Emotional: feelings, values, fears, hopes. Both effective together.",
          },
          {
            heading: "Tone",
            body: "Formal for serious issues, passionate for causes. Firm but respectful — avoid insults.",
          },
        ],
        keyFormulas: [
          { name: "Techniques", statement: "Rhetorical Q, emotive, statistics, inclusive; logical+emotional; formal/passionate." },
        ],
        workedExample: {
          problem: "How to persuade readers about environmental issues?",
          solution: "Use statistics (logical), emotive language about future generations (emotional), expert endorsements, inclusive 'we'.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-at3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'rhetorical question'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question not expecting answer" },
              { id: "b", text: "Real question" },
              { id: "c", text: "Command" },
              { id: "d", text: "Statement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question", statement: "Question for effect, not expecting answer." },
            ],
            steps: [
              { reasoning: "Rhetorical = for effect.", working: "effect", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Question not expecting answer",
            commonErrors: ["Thinking it's a real question."],
          },
        },
        {
          id: "cie-ol-el-at3-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Rhetorical Q, emotive, statistics, expert, inclusive." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical Q, emotive, statistics, expert, inclusive (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-at3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain logical vs emotional appeals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Appeals", statement: "Logical=facts/reasoning; emotional=feelings/values; both effective." },
            ],
            steps: [
              { reasoning: "Logical appeals use facts, statistics, reasoning.", working: "logical", marks: 1, markCode: "AO2" },
              { reasoning: "Emotional appeals use feelings, values, fears, hopes.", working: "emotional", marks: 1, markCode: "AO2" },
              { reasoning: "Both together create stronger persuasion.", working: "together", marks: 1, markCode: "AO2" },
              { reasoning: "Difference explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Logical=facts/reasoning; emotional=feelings/values; both effective.",
            commonErrors: ["Only one type — best uses both."],
          },
        },
        {
          id: "cie-ol-el-at3-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply argumentative techniques.",
          parts: [
            { label: "a", prompt: "Define rhetorical question.", marks: 1 },
            { label: "b", prompt: "Name persuasive techniques.", marks: 3 },
            { label: "c", prompt: "Explain logical vs emotional.", marks: 2 },
            { label: "d", prompt: "How to choose tone?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Techniques", statement: "Rhetorical Q, techniques, appeals, tone." },
            ],
            steps: [
              { part: "a", reasoning: "Question for effect, not expecting answer.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Rhetorical Q, emotive, statistics, expert, inclusive.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Logical=facts; emotional=feelings; both effective.", working: "appeals", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal for serious, passionate for causes — firm but respectful.", working: "tone", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple tones.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) rhetorical Q (b) techniques (c) appeals (d) tone selection",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Tone explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Wrong tone — too casual or too aggressive."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-argument-practice",
      title: "Argumentative writing practice",
      skill: "Write effective arguments for different topics.",
      lesson: {
        sections: [
          {
            heading: "Choosing topics",
            body: "Debatable issues — school uniforms, social media, environment, education. Not settled facts.",
          },
          {
            heading: "Developing points",
            body: "Each main point needs: topic sentence, evidence, explanation. Build paragraph by paragraph.",
          },
          {
            heading: "Strong conclusion",
            body: "Summarise main points, restate thesis, leave reader with compelling final thought or call to action.",
          },
        ],
        keyFormulas: [
          { name: "Practice", statement: "Debatable topics; each point needs evidence; strong conclusion." },
        ],
        workedExample: {
          problem: "Write argument for/against homework.",
          solution: "Thesis: homework beneficial/harmful. Points: reinforcement, time management, stress. Evidence: studies, examples. Address counterarguments. Strong conclusion.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a good argumentative topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debatable issue" },
              { id: "b", text: "Settled fact" },
              { id: "c", text: "Personal preference" },
              { id: "d", text: "Boring subject" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic", statement: "Debatable issue — people can disagree." },
            ],
            steps: [
              { reasoning: "Debatable = arguable.", working: "debatable", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Debatable issue",
            commonErrors: ["Choosing (b) — can't argue facts."],
          },
        },
        {
          id: "cie-ol-el-ap-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should each main point include?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Main point", statement: "Topic sentence, evidence, explanation." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Topic sentence, evidence, explanation (any two).",
            commonErrors: ["Only claim — need evidence."],
          },
        },
        {
          id: "cie-ol-el-ap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to write a strong conclusion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conclusion", statement: "Summarise points, restate thesis, final compelling thought/CTA." },
            ],
            steps: [
              { reasoning: "Summarise main points briefly.", working: "summarise", marks: 1, markCode: "AO2" },
              { reasoning: "Restate thesis clearly.", working: "restate", marks: 1, markCode: "AO2" },
              { reasoning: "End with compelling thought or call to action.", working: "final", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Summarise→restate thesis→final compelling thought/CTA.",
            commonErrors: ["Weak ending — no impact."],
          },
        },
        {
          id: "cie-ol-el-ap-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply argumentative writing skills.",
          parts: [
            { label: "a", prompt: "What makes good topic?", marks: 1 },
            { label: "b", prompt: "What should main points include?", marks: 2 },
            { label: "c", prompt: "How to write conclusion?", marks: 3 },
            { label: "d", prompt: "Common mistakes?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argumentative practice", statement: "Topics, main points, conclusion, mistakes." },
            ],
            steps: [
              { part: "a", reasoning: "Debatable issue — people can disagree.", working: "topic", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Topic sentence, evidence, explanation.", working: "points", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple elements.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Summarise, restate thesis, final thought/CTA.", working: "conclusion", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "No evidence, one-sided, weak conclusion, wrong tone.", working: "mistakes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) debatable (b) point elements (c) conclusion structure (d) mistakes",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple elements.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple mistakes.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["No evidence — unsupported claims."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-argument-evaluation",
      title: "Evaluating arguments",
      skill: "Assess arguments for strength and weaknesses.",
      lesson: {
        sections: [
          {
            heading: "Strength assessment",
            body: "Clear thesis? Strong evidence? Logical structure? Addresses counterarguments? Appropriate tone?",
          },
          {
            heading: "Weakness identification",
            body: "Vague claims? Insufficient evidence? Logical fallacies? Ignored counterarguments? Emotional manipulation?",
          },
          {
            heading: "Improvement",
            body: "Strengthen evidence, address weaknesses, improve structure, adjust tone.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "Strength: thesis/evidence/structure/counterarguments/tone; weakness: vague/insufficient/fallacies." },
        ],
        workedExample: {
          problem: "Evaluate an argument for school uniforms.",
          solution: "Strengths: clear thesis, statistics, structure. Weaknesses: no counterarguments, emotional appeals. Improve: add counterarguments, more evidence.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-ae-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an argument strong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clear thesis and evidence" },
              { id: "b", text: "Emotional appeals only" },
              { id: "c", text: "Long sentences" },
              { id: "d", text: "Complex words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strong argument", statement: "Clear thesis and evidence." },
            ],
            steps: [
              { reasoning: "Thesis + evidence = strong.", working: "thesis+evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Clear thesis and evidence",
            commonErrors: ["Choosing (b) — emotion alone isn't enough."],
          },
        },
        {
          id: "cie-ol-el-ae-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two argument weaknesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Weaknesses", statement: "Vague claims, insufficient evidence, logical fallacies." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "weaknesses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Vague claims, insufficient evidence, logical fallacies, ignored counterarguments (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-ae-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to improve a weak argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Improvement", statement: "Strengthen evidence, address weaknesses, improve structure, adjust tone." },
            ],
            steps: [
              { reasoning: "Strengthen evidence — add facts/statistics.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Address weaknesses — add counterarguments.", working: "weaknesses", marks: 1, markCode: "AO2" },
              { reasoning: "Improve structure and tone.", working: "structure+tone", marks: 1, markCode: "AO2" },
              { reasoning: "Methods clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Strengthen evidence, address weaknesses, improve structure/tone.",
            commonErrors: ["Not identifying weaknesses — can't improve."],
          },
        },
        {
          id: "cie-ol-el-ae-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate arguments.",
          parts: [
            { label: "a", prompt: "What makes argument strong?", marks: 2 },
            { label: "b", prompt: "Name weaknesses.", marks: 2 },
            { label: "c", prompt: "How to improve?", marks: 3 },
            { label: "d", prompt: "Common logical fallacies?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Strengths, weaknesses, improvement, fallacies." },
            ],
            steps: [
              { part: "a", reasoning: "Clear thesis, strong evidence, logical structure, counterarguments.", working: "strength", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Multiple elements.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Vague claims, insufficient evidence, fallacies, ignored counters.", working: "weakness", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Strengthen evidence, address weaknesses, improve structure/tone.", working: "improve", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple methods.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Ad hominem, straw man, false dilemma, slippery slope.", working: "fallacies", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) strengths (b) weaknesses (c) improvement (d) fallacies",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Multiple strengths.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple weaknesses.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Methods clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple fallacies.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Not identifying fallacies — weak arguments use them."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-argument-notes",
      title: "Argumentative writing — revision notes",
      summary: "Argument structure, techniques, practice, evaluation.",
      sections: [
        {
          heading: "Arguments",
          body: "Structure: thesis→points+evidence→counterarguments→conclusion. Techniques: rhetorical Q, emotive, statistics. Evaluate: strengths/weaknesses/fallacies.",
        },
      ],
    },
  ],
};
