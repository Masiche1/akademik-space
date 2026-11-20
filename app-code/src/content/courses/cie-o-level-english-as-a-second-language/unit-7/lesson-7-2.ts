import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "oles-u7-lesson-7-2",
  code: "7-2",
  title: "Reading and writing exam practice",
  goal: "I CAN apply exam strategies to reading comprehension and writing tasks.",
  standards: ["1120 Exam technique: reading and writing"],
  vocabulary: [
    { term: "Comprehension question", definition: "A question testing understanding of a text." },
    { term: "Directed task", definition: "A writing task with a set scenario and requirements." },
    { term: "Model answer", definition: "An example of what a strong answer looks like." },
    { term: "Time check", definition: "Periodically verifying you are on schedule." },
    { term: "Review pass", definition: "A final read-through to catch errors and gaps." },
  ],
  concepts: [
    {
      id: "oles-u7-reading",
      title: "Reading exam practice",
      skill: "Apply comprehension techniques under timed conditions.",
      lesson: {
        sections: [
          { heading: "Practice routine", body: "Practise with real past papers under timed conditions. After each attempt, analyse errors: did you misread the question, miss a clue, or run out of time? Each error type has a different fix." },
          { heading: "Question spotting", body: "Learn to recognise question types instantly: 'According to the text' = literal; 'suggests/implies' = inference; 'in your own words' = paraphrase; 'give two reasons' = select and justify." },
        ],
        keyFormulas: [
          { name: "Practice", statement: "Timed practice → error analysis → targeted fix." },
        ],
        workedExample: {
          problem: "You keep losing marks on inference questions. What is the fix?",
          solution: "Practise finding clues first, then inferring — and always attach evidence. Do 5 inference questions daily until automatic.",
        },
      },
      questions: [
        {
          id: "oles-u7-re-q1", difficulty: "foundation", totalMarks: 1,
          stem: "'According to the text' signals a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Literal question" }, { id: "b", text: "Inference question" }, { id: "c", text: "Summary task" }, { id: "d", text: "Grammar task" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Question types", statement: "'According to' = literal." }], steps: [{ reasoning: "Stated fact required.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Literal" },
        },
        {
          id: "oles-u7-re-q2", difficulty: "core", totalMarks: 2,
          stem: "What should you analyse after a practice test?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Error analysis", statement: "Why marks were lost." }], steps: [
            { reasoning: "Why each mark was lost — misreading, missing clues, or time.", marks: 1, markCode: "AO2" },
            { reasoning: "Each error type needs a different fix.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The cause of each lost mark — not just the score." },
        },
        {
          id: "oles-u7-re-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why practising under timed conditions matters.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Timed practice", statement: "Simulates exam pressure." }], steps: [
            { reasoning: "Untimed practice doesn't build speed or pressure management.", marks: 1, markCode: "AO2" },
            { reasoning: "Timed practice reveals which sections need more time.", marks: 1, markCode: "AO2" },
            { reasoning: "It builds the stamina for a full exam.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Timed practice builds speed, reveals weaknesses, and builds stamina." },
        },
        {
          id: "oles-u7-re-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Reading exam review.",
          parts: [
            { label: "a", prompt: "What does 'suggests' signal?", marks: 2 },
            { label: "b", prompt: "Why skim first?", marks: 2 },
            { label: "c", prompt: "What is error analysis?", marks: 2 },
            { label: "d", prompt: "Why practise timed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Reading exam", statement: "Question types + skim + analysis + timing." }], steps: [
            { part: "a", reasoning: "An inference question — implied meaning.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct signal.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Builds a map of the text for faster answers.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Examining why marks were lost to fix weaknesses.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Builds speed, reveals timing issues, builds stamina.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Multiple benefits.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) inference (b) map for answers (c) why marks lost (d) speed+stamina",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
    {
      id: "oles-u7-writing",
      title: "Writing exam practice",
      skill: "Apply writing strategies to summaries and compositions.",
      lesson: {
        sections: [
          { heading: "Summary practice", body: "Practise summaries with strict word counts — 30, 50, 80 words. The skill is selection under pressure: identify key points fast, draft, count, trim. Use past papers to calibrate how much detail fits." },
          { heading: "Composition practice", body: "Write compositions weekly under timed conditions. After each, check: tense consistency, paragraph control, vocabulary variety, and whether the ending resolves the story or argument. Compare with model answers to see the difference." },
        ],
        keyFormulas: [
          { name: "Writing practice", statement: "Timed drafts → checklist review → compare with model answers." },
        ],
        workedExample: {
          problem: "Your compositions keep ending abruptly. What is the fix?",
          solution: "Plan the ending in your outline — narrative needs resolution, argument needs a firm conclusion. Write the ending paragraph with the same care as the opening.",
        },
      },
      questions: [
        {
          id: "oles-u7-wr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "When practising summaries, you should vary…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The word limits you practise with" },
            { id: "b", text: "Only the topics" },
            { id: "c", text: "Nothing — same limit always" },
            { id: "d", text: "Only the genre" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Practice variety", statement: "Different limits build adaptability." }], steps: [{ reasoning: "Different word limits train selection under pressure.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Word limits" },
        },
        {
          id: "oles-u7-wr-q2", difficulty: "core", totalMarks: 2,
          stem: "What four things should you check in a composition draft?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Composition check", statement: "Tense, paragraphs, vocabulary, ending." }], steps: [
            { reasoning: "Tense consistency, paragraph control, vocabulary variety, ending.", marks: 1, markCode: "AO2" },
            { reasoning: "All four checked.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Tense; paragraphs; vocabulary; ending." },
        },
        {
          id: "oles-u7-wr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the value of comparing your writing with model answers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Model answers", statement: "Show the quality gap." }], steps: [
            { reasoning: "Model answers show what 'good' looks like concretely.", marks: 1, markCode: "AO2" },
            { reasoning: "Comparing reveals your specific weaknesses.", marks: 1, markCode: "AO2" },
            { reasoning: "You can then target those weaknesses in practice.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Models show the quality gap and reveal what to improve." },
        },
        {
          id: "oles-u7-wr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Writing exam review.",
          parts: [
            { label: "a", prompt: "Summary practice key skill?", marks: 2 },
            { label: "b", prompt: "Composition: check what?", marks: 2 },
            { label: "c", prompt: "Why vary word limits?", marks: 2 },
            { label: "d", prompt: "Why compare with models?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Writing practice", statement: "Selection, checks, variety, comparison." }], steps: [
            { part: "a", reasoning: "Selecting key points under a strict word limit.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct skill.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Tense, paragraphs, vocabulary, ending.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "All checks.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Builds adaptability for different exam limits.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Shows quality gap and reveals weaknesses to fix.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains benefit.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) selection under limit (b) four checks (c) adaptability (d) shows gap",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u7-7-2-notes", title: "Reading and writing practice — notes", summary: "Timed practice, error analysis and model comparison.",
      sections: [
        { heading: "Reading", body: "Recognise question types instantly; analyse why marks were lost after each practice." },
        { heading: "Writing", body: "Vary word limits; check tense/paragraphs/vocabulary/ending; compare with model answers." },
      ] },
  ],
};
