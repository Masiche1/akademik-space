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
              { id: "a", text: "Question" },
              { id: "b", text: "Conclusion" },
              { id: "c", text: "Main argument" },
              { id: "d", text: "Supporting detail" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Main argument stated in introduction." },
            ],
            steps: [
              { reasoning: "Thesis = main argument.", working: "main argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Main argument",
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
    {
      id: "cie-ol-el-as-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a thesis statement in an argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "The conclusion" },
          { id: "b", text: "The main argument stated in the introduction" },
          { id: "c", text: "A counterargument" },
          { id: "d", text: "A supporting detail" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Thesis", statement: "Main argument in introduction." },
        ],
        steps: [
          { reasoning: "Thesis = main argument in intro.", working: "thesis", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** The main argument stated in the introduction",
        commonErrors: ["Confusing thesis with conclusion."],
      },
    },
    {
      id: "cie-ol-el-as-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which comes FIRST in an argumentative essay structure?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Thesis statement" },
          { id: "b", text: "Rebuttal" },
          { id: "c", text: "Counterargument" },
          { id: "d", text: "Conclusion" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Structure", statement: "Thesis→points+evidence→counterarguments→rebuttals→conclusion." },
        ],
        steps: [
          { reasoning: "Thesis opens the argument.", working: "thesis", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Thesis statement",
        commonErrors: ["Starting with counterargument."],
      },
    },
    {
      id: "cie-ol-el-as-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "Why include counterarguments in an essay?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "It confuses the reader" },
          { id: "b", text: "It is required by law" },
          { id: "c", text: "It shows balance and strengthens your position" },
          { id: "d", text: "It weakens your argument" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Counterarguments", statement: "Acknowledging opposing views strengthens argument." },
        ],
        steps: [
          { reasoning: "Counterarguments show balance and strength.", working: "balance", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(c)** It shows balance and strengthens your position",
        commonErrors: ["Thinking counterarguments weaken the essay."],
      },
    },
    {
      id: "cie-ol-el-as-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which is a valid type of evidence in an argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Statistics" },
          { id: "b", text: "Random guesses" },
          { id: "c", text: "Personal feelings only" },
          { id: "d", text: "Unverified rumours" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Evidence", statement: "Statistics, expert opinions, examples, anecdotes, logic." },
        ],
        steps: [
          { reasoning: "Statistics are valid evidence.", working: "statistics", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Statistics",
        commonErrors: ["Using unsupported claims."],
      },
    },
    {
      id: "cie-ol-el-as-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should the conclusion of an argument do?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Ask questions only" },
          { id: "b", text: "Summarise points and restate thesis" },
          { id: "c", text: "Repeat the introduction verbatim" },
          { id: "d", text: "Introduce new arguments" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Conclusion", statement: "Summarise, restate thesis, final thought." },
        ],
        steps: [
          { reasoning: "Conclusion summarises and restates.", working: "summarise", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Summarise points and restate thesis",
        commonErrors: ["Adding new ideas in conclusion."],
      },
    },
    {
      id: "cie-ol-el-as-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "An argument has 5 structural elements. A student includes thesis, points, counterarguments, and conclusion but omits rebuttals. How many elements are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Structure", statement: "Thesis, points, counterarguments, rebuttals, conclusion." },
        ],
        steps: [
          { reasoning: "5 elements; rebuttals missing.", working: "5 - 4 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One element missing.", working: "1", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Forgetting rebuttals are separate from counterarguments."],
      },
    },
    {
      id: "cie-ol-el-as-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An essay task requires at least 200 words. A draft is 160 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 40 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "200 - 160 = 40 words short.", working: "200 - 160 = 40", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "40",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-as-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An argument has 4 main points. A student provides evidence for only 3. How many points lack evidence?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Evidence", statement: "Each point needs evidence." },
        ],
        steps: [
          { reasoning: "4 points; 3 have evidence.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One point lacks evidence.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Making claims without evidence."],
      },
    },
    {
      id: "cie-ol-el-as-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An essay must be between 250 and 300 words. A draft is 280 words, and the student adds a 25-word introduction. How many words can the body still grow by?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: -5 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count toward total." },
        ],
        steps: [
          { reasoning: "280 + 25 = 305 words after introduction.", working: "280 + 25 = 305", marks: 1, markCode: "AO3" },
          { reasoning: "305 exceeds 300 maximum by 5 words.", working: "305 - 300 = 5", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 5 words — answer is -5 (or 'cut 5').", working: "-5", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "-5",
        commonErrors: ["Not realising additions push over limit."],
      },
    },
    {
      id: "cie-ol-el-as-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the structure of an argumentative essay.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Structure", statement: "Thesis→points+evidence→counterarguments→rebuttals→conclusion." },
        ],
        steps: [
          { reasoning: "Introduction with thesis statement.", working: "thesis", marks: 1, markCode: "AO2" },
          { reasoning: "Body: main points with evidence, counterarguments and rebuttals.", working: "body", marks: 1, markCode: "AO2" },
          { reasoning: "Conclusion: summarise and restate thesis.", working: "conclusion", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Thesis→points+evidence→counterarguments→rebuttals→conclusion.",
        commonErrors: ["Missing counterarguments or rebuttals."],
      },
    },
    {
      id: "cie-ol-el-as-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain the difference between a counterargument and a rebuttal.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Counterargument vs rebuttal", statement: "Counter = opposing view; rebuttal = response to it." },
        ],
        steps: [
          { reasoning: "Counterargument: presents opposing view fairly.", working: "counter", marks: 1, markCode: "AO2" },
          { reasoning: "Rebuttal: responds to and refutes the counterargument.", working: "rebuttal", marks: 1, markCode: "AO2" },
          { reasoning: "Together they show balance and strength.", working: "balance", marks: 1, markCode: "AO2" },
          { reasoning: "Clear distinction made.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Counter=present opposing view; rebuttal=refute it.",
        commonErrors: ["Confusing the two concepts."],
      },
    },
    {
      id: "cie-ol-el-as-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about argumentative structure.",
      parts: [
        { label: "a", prompt: "What is a thesis statement?", marks: 2 },
        { label: "b", prompt: "Name two types of evidence.", marks: 2 },
        { label: "c", prompt: "Why include counterarguments?", marks: 2 },
        { label: "d", prompt: "What should the conclusion do?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Argument structure", statement: "Thesis, evidence, counterarguments, conclusion." },
        ],
        steps: [
          { part: "a", reasoning: "Main argument in introduction.", working: "thesis", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Statistics, expert opinions, examples, anecdotes.", working: "evidence", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid types.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Shows balance and strengthens position.", working: "balance", marks: 1, markCode: "AO2" },
          { part: "c", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Summarise points, restate thesis, final thought.", working: "conclusion", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Accurate.", working: "accurate", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) main argument (b) statistics/examples (c) shows balance (d) summarise+restate",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two types.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Confusing counterargument and rebuttal."],
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
              { id: "b", text: "Statement" },
              { id: "c", text: "Command" },
              { id: "d", text: "Real question" },
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
    {
      id: "cie-ol-el-at3-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a rhetorical question?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A question with a factual answer" },
          { id: "b", text: "A question asked for effect, not expecting an answer" },
          { id: "c", text: "A question in a textbook" },
          { id: "d", text: "A question that ends the essay" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Rhetorical question", statement: "Question for effect, not expecting answer." },
        ],
        steps: [
          { reasoning: "Rhetorical question = effect, not answer.", working: "rhetorical", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** A question asked for effect, not expecting an answer",
        commonErrors: ["Thinking it needs an answer."],
      },
    },
    {
      id: "cie-ol-el-at3-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which persuasive technique uses emotional language?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Expert opinions" },
          { id: "b", text: "Logical reasoning" },
          { id: "c", text: "Statistics" },
          { id: "d", text: "Emotive language" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Techniques", statement: "Emotive language appeals to feelings." },
        ],
        steps: [
          { reasoning: "Emotive language targets emotions.", working: "emotive", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Emotive language",
        commonErrors: ["Confusing emotive with logical appeal."],
      },
    },
    {
      id: "cie-ol-el-at3-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is the difference between logical and emotional appeals?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Logical uses facts; emotional uses feelings" },
          { id: "b", text: "Logical is weaker" },
          { id: "c", text: "They are identical" },
          { id: "d", text: "Emotional is always wrong" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Appeals", statement: "Logical=facts; emotional=feelings." },
        ],
        steps: [
          { reasoning: "Logical=facts, emotional=feelings.", working: "appeals", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(a)** Logical uses facts; emotional uses feelings",
        commonErrors: ["Thinking they are the same."],
      },
    },
    {
      id: "cie-ol-el-at3-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which tone is most appropriate for a formal argumentative essay?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Sarcastic" },
          { id: "b", text: "Shouting" },
          { id: "c", text: "Formal and measured" },
          { id: "d", text: "Slang and casual" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Tone", statement: "Formal/passionate — appropriate to context." },
        ],
        steps: [
          { reasoning: "Formal tone suits argumentative essays.", working: "formal", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Formal and measured",
        commonErrors: ["Using slang or shouting."],
      },
    },
    {
      id: "cie-ol-el-at3-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which technique makes readers feel included?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Inclusive language" },
          { id: "b", text: "Expert quotes" },
          { id: "c", text: "Technical jargon" },
          { id: "d", text: "Statistics" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Techniques", statement: "Inclusive language involves the reader." },
        ],
        steps: [
          { reasoning: "Inclusive language includes reader.", working: "inclusive", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Inclusive language",
        commonErrors: ["Confusing with exclusive language."],
      },
    },
    {
      id: "cie-ol-el-at3-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "An argument uses 4 persuasive techniques. A student includes rhetorical questions, statistics, and emotive language but omits expert opinions. How many techniques are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Techniques", statement: "Multiple techniques strengthen argument." },
        ],
        steps: [
          { reasoning: "4 techniques; 3 included.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One technique missing.", working: "1", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Using only one technique."],
      },
    },
    {
      id: "cie-ol-el-at3-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An essay requires at least 250 words. A draft is 200 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 50 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "250 - 200 = 50 words short.", working: "250 - 200 = 50", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "50",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-at3-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An argument uses 3 types of appeals: logical, emotional, and ethical. A student uses only logical. How many appeal types are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Appeals", statement: "Logical, emotional, ethical." },
        ],
        steps: [
          { reasoning: "3 types; 1 used.", working: "3 - 1 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two types missing (emotional, ethical).", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Using only logical appeal."],
      },
    },
    {
      id: "cie-ol-el-at3-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An essay may be 200-250 words. A draft is 230 words, and the student adds a 30-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "230 + 30 = 260 words after introduction.", working: "230 + 30 = 260", marks: 1, markCode: "AO3" },
          { reasoning: "260 - 250 = 10 words over.", working: "260 - 250 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-at3-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe three persuasive techniques used in argumentative writing.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Techniques", statement: "Rhetorical Q, emotive, statistics, expert, inclusive." },
        ],
        steps: [
          { reasoning: "Rhetorical questions engage reader.", working: "rhetorical", marks: 1, markCode: "AO2" },
          { reasoning: "Emotive language appeals to feelings.", working: "emotive", marks: 1, markCode: "AO2" },
          { reasoning: "Statistics/expert opinions provide evidence.", working: "statistics", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Rhetorical questions, emotive language, statistics/expert opinions.",
        commonErrors: ["Using only one technique."],
      },
    },
    {
      id: "cie-ol-el-at3-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain the difference between logical and emotional appeals and when to use each.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Appeals", statement: "Logical=facts; emotional=feelings." },
        ],
        steps: [
          { reasoning: "Logical appeal uses facts, reasoning, evidence.", working: "logical", marks: 1, markCode: "AO2" },
          { reasoning: "Emotional appeal uses feelings, values, empathy.", working: "emotional", marks: 1, markCode: "AO2" },
          { reasoning: "Logical suits formal/analytical contexts.", working: "formal", marks: 1, markCode: "AO2" },
          { reasoning: "Emotional suits persuasive/passionate contexts.", working: "persuasive", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Logical=facts for formal; emotional=feelings for persuasive.",
        commonErrors: ["Using only one type of appeal."],
      },
    },
    {
      id: "cie-ol-el-at3-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about persuasive techniques.",
      parts: [
        { label: "a", prompt: "Define rhetorical question.", marks: 2 },
        { label: "b", prompt: "Name two persuasive techniques.", marks: 2 },
        { label: "c", prompt: "What is emotive language?", marks: 2 },
        { label: "d", prompt: "Why vary tone?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Techniques", statement: "Rhetorical Q, emotive, statistics, tone." },
        ],
        steps: [
          { part: "a", reasoning: "Question for effect, not expecting answer.", working: "rhetorical", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Emotive language, statistics, expert opinions, inclusive.", working: "techniques", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid techniques.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Language that appeals to emotions.", working: "emotive", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Tone suits context — formal for essays, passionate for speeches.", working: "tone", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) effect question (b) emotive/statistics (c) emotional language (d) suits context",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two techniques.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Using wrong tone for context."],
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
              { id: "a", text: "Settled fact" },
              { id: "b", text: "Debatable issue" },
              { id: "c", text: "Personal preference" },
              { id: "d", text: "Boring subject" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic", statement: "Debatable issue — people can disagree." },
            ],
            steps: [
              { reasoning: "Debatable = arguable.", working: "debatable", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Debatable issue",
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
    {
      id: "cie-ol-el-ap-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What makes a good topic for an argumentative essay?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "It is debatable — people can disagree" },
          { id: "b", text: "It cannot be argued" },
          { id: "c", text: "It is a simple fact" },
          { id: "d", text: "It has only one correct answer" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Topic", statement: "Debatable issue — people can disagree." },
        ],
        steps: [
          { reasoning: "Good topics are debatable.", working: "debatable", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** It is debatable — people can disagree",
        commonErrors: ["Choosing non-debatable topics."],
      },
    },
    {
      id: "cie-ol-el-ap-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What should each main point in an argument include?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A quote only" },
          { id: "b", text: "Topic sentence, evidence, explanation" },
          { id: "c", text: "Only an opinion" },
          { id: "d", text: "A question" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Main point", statement: "Topic sentence, evidence, explanation." },
        ],
        steps: [
          { reasoning: "Each point needs topic sentence + evidence + explanation.", working: "point", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Topic sentence, evidence, explanation",
        commonErrors: ["Making claims without support."],
      },
    },
    {
      id: "cie-ol-el-ap-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What makes a conclusion strong in an argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Introduces new arguments" },
          { id: "b", text: "Repeats the introduction" },
          { id: "c", text: "Ends abruptly" },
          { id: "d", text: "Summarises points, restates thesis, final compelling thought" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Conclusion", statement: "Summarise, restate, compelling ending." },
        ],
        steps: [
          { reasoning: "Strong conclusion summarises and restates.", working: "strong", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "**(d)** Summarises points, restates thesis, final compelling thought",
        commonErrors: ["Weak or missing conclusion."],
      },
    },
    {
      id: "cie-ol-el-ap-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which is a debatable topic for an argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "When did WW2 end?" },
          { id: "b", text: "What is 2 + 2?" },
          { id: "c", text: "Should homework be abolished?" },
          { id: "d", text: "What is the capital of France?" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Topic", statement: "Debatable = people can disagree." },
        ],
        steps: [
          { reasoning: "Homework abolition is debatable.", working: "debatable", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Should homework be abolished?",
        commonErrors: ["Choosing factual questions."],
      },
    },
    {
      id: "cie-ol-el-ap-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you do with each main point in an argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Support it with evidence" },
          { id: "b", text: "Repeat it" },
          { id: "c", text: "Delete it" },
          { id: "d", text: "Ignore it" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Evidence", statement: "Each point needs evidence." },
        ],
        steps: [
          { reasoning: "Support points with evidence.", working: "evidence", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** Support it with evidence",
        commonErrors: ["Making unsupported claims."],
      },
    },
    {
      id: "cie-ol-el-ap-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "An essay requires at least 300 words. A draft is 240 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 60 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "300 - 240 = 60 words short.", working: "300 - 240 = 60", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "60",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-ap-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An argument has 6 main points. A student develops only 4. How many points are undeveloped?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Development", statement: "Each point needs development." },
        ],
        steps: [
          { reasoning: "6 - 4 = 2 points undeveloped.", working: "6 - 4 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Listing points without developing them."],
      },
    },
    {
      id: "cie-ol-el-ap-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An argument needs 3 supporting points. A student includes 2. How many points are missing?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Points", statement: "Multiple supporting points needed." },
        ],
        steps: [
          { reasoning: "3 required; 2 included.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One point missing.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Providing too few supporting points."],
      },
    },
    {
      id: "cie-ol-el-ap-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An essay must be between 180 and 220 words. A draft is 210 words, and the student adds a 20-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "210 + 20 = 230 words after introduction.", working: "210 + 20 = 230", marks: 1, markCode: "AO3" },
          { reasoning: "230 - 220 = 10 words over.", working: "230 - 220 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-ap-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how to choose a good topic for an argumentative essay.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Topic", statement: "Debatable, relevant, interesting." },
        ],
        steps: [
          { reasoning: "Choose debatable issue — people can disagree.", working: "debatable", marks: 1, markCode: "AO2" },
          { reasoning: "Ensure relevance and interest.", working: "relevant", marks: 1, markCode: "AO2" },
          { reasoning: "Avoid factual or trivial topics.", working: "avoid", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Debatable, relevant, interesting — not factual.",
        commonErrors: ["Choosing non-debatable topics."],
      },
    },
    {
      id: "cie-ol-el-ap-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to develop a strong main point in an argument.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Development", statement: "Topic sentence, evidence, explanation." },
        ],
        steps: [
          { reasoning: "Start with clear topic sentence.", working: "topic", marks: 1, markCode: "AO2" },
          { reasoning: "Support with evidence (statistics, examples, expert).", working: "evidence", marks: 1, markCode: "AO2" },
          { reasoning: "Explain how evidence supports the point.", working: "explain", marks: 1, markCode: "AO2" },
          { reasoning: "Link back to thesis.", working: "link", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Topic sentence→evidence→explanation→link to thesis.",
        commonErrors: ["Making claims without evidence."],
      },
    },
    {
      id: "cie-ol-el-ap-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about argumentative practice.",
      parts: [
        { label: "a", prompt: "What makes a topic debatable?", marks: 2 },
        { label: "b", prompt: "What should each point include?", marks: 2 },
        { label: "c", prompt: "What makes a conclusion strong?", marks: 2 },
        { label: "d", prompt: "Why is evidence important?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Argument practice", statement: "Topics, points, conclusion, evidence." },
        ],
        steps: [
          { part: "a", reasoning: "People can disagree — not factual.", working: "debatable", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Topic sentence, evidence, explanation.", working: "point", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "All three elements.", working: "all", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Summarise, restate, compelling ending.", working: "conclusion", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Accurate.", working: "accurate", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Supports claims — makes argument credible.", working: "credibility", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) debatable (b) topic+evidence+explanation (c) summarise+restate (d) credibility",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "All elements.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Unsupported claims."],
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
              { id: "a", text: "Long sentences" },
              { id: "b", text: "Complex words" },
              { id: "c", text: "Clear thesis and evidence" },
              { id: "d", text: "Emotional appeals only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strong argument", statement: "Clear thesis and evidence." },
            ],
            steps: [
              { reasoning: "Thesis + evidence = strong.", working: "thesis+evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Clear thesis and evidence",
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
    {
      id: "cie-ol-el-ae-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What indicates a STRONG argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Vague claims" },
          { id: "b", text: "No evidence" },
          { id: "c", text: "Emotional only" },
          { id: "d", text: "Clear thesis and sufficient evidence" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Strong argument", statement: "Clear thesis and evidence." },
        ],
        steps: [
          { reasoning: "Strong = clear thesis + evidence.", working: "strong", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Clear thesis and sufficient evidence",
        commonErrors: ["Thinking emotion alone makes strong."],
      },
    },
    {
      id: "cie-ol-el-ae-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which is a WEAKNESS in an argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Good structure" },
          { id: "b", text: "Counterarguments" },
          { id: "c", text: "Vague claims without evidence" },
          { id: "d", text: "Clear thesis" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Weaknesses", statement: "Vague claims, insufficient evidence, fallacies." },
        ],
        steps: [
          { reasoning: "Vague claims are a weakness.", working: "vague", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Vague claims without evidence",
        commonErrors: ["Thinking clear thesis is a weakness."],
      },
    },
    {
      id: "cie-ol-el-ae-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is a logical fallacy?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "An error in reasoning that weakens the argument" },
          { id: "b", text: "A clear thesis" },
          { id: "c", text: "A good conclusion" },
          { id: "d", text: "A strong piece of evidence" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Fallacy", statement: "Error in reasoning." },
        ],
        steps: [
          { reasoning: "Fallacy = reasoning error.", working: "fallacy", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(a)** An error in reasoning that weakens the argument",
        commonErrors: ["Thinking fallacies are valid arguments."],
      },
    },
    {
      id: "cie-ol-el-ae-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "How can you improve a weak argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Ignore counterarguments" },
          { id: "b", text: "Add more opinions" },
          { id: "c", text: "Strengthen evidence and address weaknesses" },
          { id: "d", text: "Remove structure" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Improvement", statement: "Strengthen evidence, address weaknesses, improve structure." },
        ],
        steps: [
          { reasoning: "Improve by strengthening evidence.", working: "evidence", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Strengthen evidence and address weaknesses",
        commonErrors: ["Adding opinions instead of evidence."],
      },
    },
    {
      id: "cie-ol-el-ae-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What should you assess when evaluating an argument?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only length" },
          { id: "b", text: "Only title" },
          { id: "c", text: "Only handwriting" },
          { id: "d", text: "Strengths and weaknesses" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Evaluation", statement: "Assess strengths and weaknesses." },
        ],
        steps: [
          { reasoning: "Evaluate strengths and weaknesses.", working: "strengths", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Strengths and weaknesses",
        commonErrors: ["Evaluating only one aspect."],
      },
    },
    {
      id: "cie-ol-el-ae-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "An essay requires at least 280 words. A draft is 220 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 60 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "280 - 220 = 60 words short.", working: "280 - 220 = 60", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "60",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-ae-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An argument has 5 evaluation criteria. An evaluator checks 3. How many criteria remain unchecked?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Evaluation", statement: "Check all criteria." },
        ],
        steps: [
          { reasoning: "5 - 3 = 2 criteria unchecked.", working: "5 - 3 = 2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Checking only some criteria."],
      },
    },
    {
      id: "cie-ol-el-ae-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "An argument has 4 weaknesses identified. A student fixes only 2. How many weaknesses remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 2 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Improvement", statement: "Address all weaknesses." },
        ],
        steps: [
          { reasoning: "4 weaknesses; 2 fixed.", working: "4 - 2 = 2", marks: 1, markCode: "AO2" },
          { reasoning: "Two weaknesses remain.", working: "2", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "2",
        commonErrors: ["Fixing only some weaknesses."],
      },
    },
    {
      id: "cie-ol-el-ae-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An essay must be between 220 and 260 words. A draft is 250 words, and the student adds a 20-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "250 + 20 = 270 words after introduction.", working: "250 + 20 = 270", marks: 1, markCode: "AO3" },
          { reasoning: "270 - 260 = 10 words over.", working: "270 - 260 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-ae-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the criteria for evaluating the strength of an argument.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Evaluation", statement: "Thesis, evidence, structure, counterarguments, tone." },
        ],
        steps: [
          { reasoning: "Clear thesis statement.", working: "thesis", marks: 1, markCode: "AO2" },
          { reasoning: "Sufficient evidence for each point.", working: "evidence", marks: 1, markCode: "AO2" },
          { reasoning: "Good structure, counterarguments, appropriate tone.", working: "structure", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Thesis, evidence, structure, counterarguments, tone.",
        commonErrors: ["Evaluating only one aspect."],
      },
    },
    {
      id: "cie-ol-el-ae-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to identify and fix logical fallacies in an argument.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Fallacies", statement: "Identify reasoning errors and correct them." },
        ],
        steps: [
          { reasoning: "Identify fallacy — error in reasoning.", working: "identify", marks: 1, markCode: "AO2" },
          { reasoning: "Common types: ad hominem, hasty generalisation, false dilemma.", working: "types", marks: 1, markCode: "AO2" },
          { reasoning: "Replace with valid reasoning and evidence.", working: "replace", marks: 1, markCode: "AO2" },
          { reasoning: "Check argument flows logically.", working: "flows", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Identify fallacy→replace with valid reasoning→check flow.",
        commonErrors: ["Not recognising fallacies."],
      },
    },
    {
      id: "cie-ol-el-ae-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about evaluating arguments.",
      parts: [
        { label: "a", prompt: "What makes an argument strong?", marks: 2 },
        { label: "b", prompt: "Name two weaknesses.", marks: 2 },
        { label: "c", prompt: "What is a logical fallacy?", marks: 2 },
        { label: "d", prompt: "How to improve a weak argument?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Evaluation", statement: "Strengths, weaknesses, fallacies, improvement." },
        ],
        steps: [
          { part: "a", reasoning: "Clear thesis and sufficient evidence.", working: "strong", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Good structure and tone.", working: "structure", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Vague claims, insufficient evidence, fallacies.", working: "weaknesses", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid weaknesses.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Error in reasoning.", working: "fallacy", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Strengthen evidence, address weaknesses, improve structure.", working: "improve", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) thesis+evidence (b) vague claims/fallacies (c) reasoning error (d) strengthen evidence",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two weaknesses.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Not identifying weaknesses."],
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
