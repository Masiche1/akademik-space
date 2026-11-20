import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cile-u8-lesson-8-1",
  code: "8-1",
  title: "Sentence types and clause structure",
  goal: "I CAN identify and use simple, compound and complex sentences to control meaning and style.",
  standards: ["0861 Grammar: sentence structure"],
  vocabulary: [
    { term: "Clause", definition: "A group of words containing a subject and a verb." },
    { term: "Simple sentence", definition: "One independent clause — one complete thought." },
    { term: "Compound sentence", definition: "Two or more independent clauses joined by a conjunction or semicolon." },
    { term: "Complex sentence", definition: "One independent clause plus one or more dependent clauses." },
    { term: "Dependent clause", definition: "A clause that cannot stand alone — it depends on the main clause." },
    { term: "Conjunction", definition: "A word that joins clauses or sentences — 'and', 'but', 'because', 'although'." },
  ],
  concepts: [
    {
      id: "cile-u8-sentence-types",
      title: "Sentence types",
      skill: "Identify and construct simple, compound and complex sentences for clarity and effect.",
      lesson: {
        sections: [
          {
            heading: "The three types",
            body: "- **Simple**: one independent clause — 'The bell rang.' Clear, direct.\n- **Compound**: two independent clauses joined — 'The bell rang, and the class rushed out.' Balanced.\n- **Complex**: independent + dependent clause — 'Because the bell rang, the class rushed out.' Shows cause/effect.",
          },
          {
            heading: "Choosing the right type",
            body: "- **Simple**: for impact, clarity, or a series of actions.\n- **Compound**: for equal ideas joined together.\n- **Complex**: when one idea depends on another — cause, contrast, condition, time.",
          },
          {
            heading: "Sentence variety",
            body: "Mixing types creates rhythm. A paragraph of only simple sentences feels choppy; only complex sentences feel heavy. Variety keeps the reader engaged.",
          },
        ],
        keyFormulas: [
          { name: "Sentence types", statement: "Simple (one clause) → compound (equal clauses) → complex (dependent + independent)." },
        ],
        workedExample: {
          problem: "Classify: 'Although it was raining, we went outside.'",
          solution: "Complex — 'Although it was raining' is a dependent clause; 'we went outside' is independent. The dependent clause shows contrast.",
        },
      },
      questions: [
        {
          id: "cile-u8-sent-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a simple sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bell rang, and the class rushed out." },
              { id: "b", text: "Because the bell rang, the class rushed out." },
              { id: "c", text: "The bell rang." },
              { id: "d", text: "When the bell rang, everyone left." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simple sentence", statement: "One independent clause only." },
            ],
            steps: [
              { reasoning: "Only (c) has a single independent clause.", working: "\\text{one clause}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The bell rang.",
            commonErrors: ["Choosing (a) — that is compound (two independent clauses)."],
          },
        },
        {
          id: "cile-u8-sent-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Combine these into a complex sentence showing cause: 'The road was icy. We drove slowly.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complex sentence", statement: "Dependent clause + independent clause joined by subordinating conjunction." },
            ],
            steps: [
              { reasoning: "Identify cause-effect relationship: icy road → slow driving.", working: "\\text{cause→effect}", marks: 1, markCode: "AO2" },
              { reasoning: "Use subordinating conjunction: 'Because the road was icy, we drove slowly.'", working: "\\text{'because'}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Because the road was icy, we drove slowly.' — complex sentence showing cause.",
            commonErrors: ["Using 'and' — that creates compound, not complex, and loses the causal link."],
          },
        },
        {
          id: "cile-u8-sent-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A paragraph uses only simple sentences: 'The room was dark. The floor was cold. The walls were bare. I sat down.' Rewrite it using a mix of sentence types for better style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety", statement: "Mixing types creates rhythm; all simple = choppy." },
            ],
            steps: [
              { reasoning: "Problem: four simple sentences feel choppy and list-like.", working: "\\text{choppy}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: combine some — 'The room was dark, the floor cold, the walls bare.' (compound/complex)", working: "\\text{combine}", marks: 1, markCode: "AO2" },
              { reasoning: "Keep one simple for impact: 'I sat down.'", working: "\\text{keep simple}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: varied rhythm, better flow.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'The room was dark, the floor cold, the walls bare. I sat down.' — combined description with a short impact sentence.",
            commonErrors: ["Making everything one long complex sentence — variety requires mix."],
          },
        },
        {
          id: "cile-u8-sent-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a descriptive paragraph and want to control rhythm.",
          parts: [
            { label: "a", prompt: "Write one simple sentence for impact.", marks: 2 },
            { label: "b", prompt: "Write one compound sentence joining two related ideas.", marks: 2 },
            { label: "c", prompt: "Write one complex sentence showing cause or contrast.", marks: 3 },
            { label: "d", prompt: "Explain how the variety affects the paragraph's rhythm.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety", statement: "Different types create different rhythms — variety keeps reader engaged." },
            ],
            steps: [
              { part: "a", reasoning: "Simple sentence is clear and direct.", working: "\\text{simple}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Creates impact.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Compound joins two independent clauses correctly.", working: "\\text{compound}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Conjunction or semicolon used correctly.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Complex has dependent + independent clause.", working: "\\text{complex}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Subordinating conjunction shows relationship.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Grammatically correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Variety explained — fast/slow, emphasis/flow.", working: "\\text{rhythm}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) impactful simple (b) correct compound (c) correct complex with relationship (d) rhythm analysis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Impactful simple sentence.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct compound.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong type.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Correct complex with relationship.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Rhythm explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) using 'and' — that makes compound, not complex."],
          },
        },
      ],
    },
    {
      id: "cile-u8-clause-types",
      title: "Clause types and sentence combining",
      skill: "Distinguish independent and dependent clauses and combine them correctly for meaning.",
      lesson: {
        sections: [
          {
            heading: "Independent vs dependent",
            body: "- **Independent**: can stand alone — 'The rain stopped.'\n- **Dependent**: cannot stand alone — 'Because the rain stopped' (incomplete).\n- Dependent clauses begin with subordinating conjunctions: because, although, when, if, while, since.",
          },
          {
            heading: "Combining clauses",
            body: "- **Two independent**: compound — 'The rain stopped, and the sun came out.'\n- **Independent + dependent**: complex — 'Because the rain stopped, the sun came out.'\n- **Dependent + independent**: complex, reversed — 'The sun came out because the rain stopped.'\n\nPunctuation matters: dependent clause first → comma; independent first → no comma.",
          },
        ],
        keyFormulas: [
          { name: "Clause combining", statement: "Independent + independent = compound. Independent + dependent = complex. Dependent first = comma." },
        ],
        workedExample: {
          problem: "Punctuate: 'Because it was late we went home.'",
          solution: "'Because it was late, we went home.' — dependent clause first requires a comma.",
        },
      },
      questions: [
        {
          id: "cile-u8-clause-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a dependent clause?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rain stopped." },
              { id: "b", text: "Because the rain stopped" },
              { id: "c", text: "The sun came out." },
              { id: "d", text: "We went home." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dependent clause", statement: "Cannot stand alone — begins with subordinating conjunction." },
            ],
            steps: [
              { reasoning: "'Because the rain stopped' is incomplete — needs a main clause.", working: "\\text{'because'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Because the rain stopped",
            commonErrors: ["Choosing (a) — that is independent."],
          },
        },
        {
          id: "cile-u8-clause-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Punctuate correctly: 'When the bell rang the class rushed out.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comma after dependent clause", statement: "Dependent clause first requires a comma before the independent clause." },
            ],
            steps: [
              { reasoning: "'When the bell rang' is dependent — needs comma.", working: "\\text{dependent first}", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'When the bell rang, the class rushed out.'", working: "\\text{comma}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'When the bell rang, the class rushed out.'",
            commonErrors: ["No comma — dependent clause first requires one."],
          },
        },
        {
          id: "cile-u8-clause-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Combine these into one complex sentence: 'The test was hard. I passed.' Show the relationship clearly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complex sentence", statement: "Dependent clause shows the relationship (contrast, cause, time)." },
            ],
            steps: [
              { reasoning: "Relationship: contrast — hard but passed.", working: "\\text{contrast}", marks: 1, markCode: "AO2" },
              { reasoning: "Use 'although' or 'even though': 'Although the test was hard, I passed.'", working: "\\text{'although'}", marks: 1, markCode: "AO2" },
              { reasoning: "Dependent first → comma required.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct punctuation and structure.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Although the test was hard, I passed.' — complex sentence showing contrast with correct punctuation.",
            commonErrors: ["'Although the test was hard I passed' — missing comma."],
          },
        },
        {
          id: "cile-u8-clause-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are combining clauses for a narrative.",
          parts: [
            { label: "a", prompt: "Write a compound sentence joining two independent clauses.", marks: 2 },
            { label: "b", prompt: "Write a complex sentence with a dependent clause first.", marks: 3 },
            { label: "c", prompt: "Write the same complex sentence with the independent clause first.", marks: 2 },
            { label: "d", prompt: "Explain the punctuation difference between (b) and (c).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Clause combining", statement: "Dependent first = comma; independent first = no comma (usually)." },
            ],
            steps: [
              { part: "a", reasoning: "Two independent clauses joined correctly.", working: "\\text{compound}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Conjunction or semicolon used.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Dependent clause first, comma before independent.", working: "\\text{dep first}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Relationship clear.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct punctuation.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Independent first, dependent after — no comma needed.", working: "\\text{ind first}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct punctuation.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Comma rule explained accurately.", working: "\\text{comma rule}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) correct compound (b) dependent-first complex with comma (c) independent-first complex without comma (d) comma rule explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct compound.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Correct complex with comma.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Missing comma.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct complex no comma.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong punctuation.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Rule explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'always use comma' — the rule depends on clause order."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u8-sentence-structure-notes",
      title: "Sentence types and clauses — revision notes",
      summary: "Simple, compound, complex sentences; independent vs dependent clauses; punctuation rules.",
      sections: [
        {
          heading: "Sentence types",
          body: "Simple = one clause. Compound = two independent clauses (conjunction/semicolon). Complex = independent + dependent (subordinating conjunction).",
        },
        {
          heading: "Clauses and punctuation",
          body: "Independent = complete thought. Dependent = cannot stand alone (because, although, when). Dependent first = comma; independent first = usually no comma.",
        },
        {
          heading: "Style",
          body: "Mix sentence types for rhythm. Simple = impact. Compound = balance. Complex = cause/contrast/condition. Variety keeps readers engaged.",
        },
      ],
    },
  ],
};
