import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "oles-u4-lesson-4-3",
  code: "4-3",
  title: "Planning compositions",
  goal: "I CAN plan a composition quickly and write with paragraph control.",
  standards: ["1120 Writing: planning"],
  vocabulary: [
    { term: "Plan", definition: "A brief outline of ideas before writing." },
    { term: "Paragraph", definition: "A block of sentences developing one idea." },
    { term: "Topic sentence", definition: "The first sentence stating a paragraph's main idea." },
    { term: "Transition", definition: "A word or phrase linking paragraphs and ideas." },
    { term: "Draft", definition: "A first version improved before final submission." },
  ],
  concepts: [
    {
      id: "oles-u4-plan",
      title: "Planning a composition",
      skill: "Create a quick outline covering opening, development and ending.",
      lesson: {
        sections: [
          { heading: "The three-part plan", body: "Every composition plan needs: an opening (hook + introduce idea), development (2-3 paragraphs each with one point), and an ending (conclusion or resolution). Write the plan as bullet points — it takes 5 minutes and saves rewriting." },
          { heading: "Choosing the genre", body: "Match your plan to the task: narrative → story arc; descriptive → sensory focus list; argumentative → opinion + reason list. If the question gives a scenario, your plan must fit it exactly." },
        ],
        keyFormulas: [
          { name: "Plan", statement: "Opening + development points + ending, as bullet points." },
        ],
        workedExample: {
          problem: "Plan a 40-minute composition on 'A day I will never forget'.",
          solution: "Opening: what makes it unforgettable. Dev 1: the morning. Dev 2: the problem. Dev 3: how it ended. Ending: why it matters.",
        },
      },
      questions: [
        {
          id: "oles-u4-pl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A composition plan should include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opening, development and ending" },
            { id: "b", text: "Only the ending" },
            { id: "c", text: "Every word of the essay" },
            { id: "d", text: "Nothing — just write" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Plan", statement: "Opening, development, ending." }], steps: [{ reasoning: "Three-part structure covers the composition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Opening, development, ending" },
        },
        {
          id: "oles-u4-pl-q2", difficulty: "core", totalMarks: 2,
          stem: "What form should a quick plan take?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Plan format", statement: "Bullet points, not full sentences." }], steps: [
            { reasoning: "Bullet points or short phrases — fast to write.", marks: 1, markCode: "AO2" },
            { reasoning: "Full sentences waste planning time.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Brief bullet points or short phrases." },
        },
        {
          id: "oles-u4-pl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a plan prevents 'waffling' in a composition.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Plan benefit", statement: "Keeps writing focused." }], steps: [
            { reasoning: "Without a plan, writers repeat ideas or drift off-topic.", marks: 1, markCode: "AO2" },
            { reasoning: "A plan gives each paragraph one clear job.", marks: 1, markCode: "AO2" },
            { reasoning: "This produces tighter, more coherent writing.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A plan assigns each paragraph one job, preventing repetition and drift." },
        },
        {
          id: "oles-u4-pl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Planning compositions review.",
          parts: [
            { label: "a", prompt: "Name the three plan parts.", marks: 2 },
            { label: "b", prompt: "What form should the plan take?", marks: 2 },
            { label: "c", prompt: "How does genre affect the plan?", marks: 2 },
            { label: "d", prompt: "Why is a topic sentence useful?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Planning", statement: "Three parts; bullets; genre fit; topic sentences." }], steps: [
            { part: "a", reasoning: "Opening, development, ending.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Bullet points or short phrases.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct format.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Narrative uses story arc; argument uses opinion+reasons.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct link.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "It states the paragraph's main idea for reader and writer.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Improves coherence.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Links to quality.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) three parts (b) bullets (c) genre fit (d) states paragraph idea",
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
      id: "oles-u4-paragraphs",
      title: "Paragraph control",
      skill: "Write paragraphs that each develop one clear idea.",
      lesson: {
        sections: [
          { heading: "One idea per paragraph", body: "A paragraph develops a single idea: topic sentence first, then explanation, example and detail. If you notice a second idea starting, begin a new paragraph. Short paragraphs (4-6 sentences) are readable; walls of text lose marks." },
          { heading: "Transitions", body: "Link paragraphs with transitions: 'Furthermore' (add), 'However' (contrast), 'For example' (illustrate), 'As a result' (consequence), 'In conclusion' (ending). They show the examiner your ideas connect." },
        ],
        keyFormulas: [
          { name: "Paragraph", statement: "Topic sentence → explanation → example → detail; one idea each." },
        ],
        workedExample: {
          problem: "A paragraph starts 'Exercise is good for health.' then lists heart, weight and stress benefits. Good structure?",
          solution: "Yes — topic sentence states the idea, the three benefits are explanation/detail of that one idea.",
        },
      },
      questions: [
        {
          id: "oles-u4-pa-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A paragraph should develop…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One main idea" },
            { id: "b", text: "Five unrelated ideas" },
            { id: "c", text: "Only examples" },
            { id: "d", text: "The title" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Paragraph", statement: "One idea per paragraph." }], steps: [{ reasoning: "Each paragraph has a single focus.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** One main idea" },
        },
        {
          id: "oles-u4-pa-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two transition words and their functions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Transitions", statement: "However=contrast; for example=illustration." }], steps: [
            { reasoning: "Any two correct pairs, e.g. 'however' (contrast), 'for example' (example), 'as a result' (consequence).", marks: 1, markCode: "AO2" },
            { reasoning: "Functions correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'however' = contrast; 'for example' = illustration." },
        },
        {
          id: "oles-u4-pa-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why very long paragraphs lose marks.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Paragraph length", statement: "Readability and organisation." }], steps: [
            { reasoning: "Long paragraphs blur multiple ideas together.", marks: 1, markCode: "AO2" },
            { reasoning: "The examiner cannot see clear organisation of ideas.", marks: 1, markCode: "AO2" },
            { reasoning: "Short focused paragraphs show control.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "They blur ideas and hide organisation — short focused paragraphs score better." },
        },
        {
          id: "oles-u4-pa-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Paragraph control review.",
          parts: [
            { label: "a", prompt: "What is the topic sentence?", marks: 2 },
            { label: "b", prompt: "Name two transition words.", marks: 2 },
            { label: "c", prompt: "Why one idea per paragraph?", marks: 2 },
            { label: "d", prompt: "What makes paragraphs readable?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Paragraphs", statement: "Topic sentence + one idea + transitions + readable length." }], steps: [
            { part: "a", reasoning: "First sentence stating the paragraph's main idea.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two: however, furthermore, for example, as a result, in addition.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Keeps each paragraph focused and easy to follow.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Short length, clear topic sentence, logical order, transitions.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Multiple features.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Comprehensive answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) states idea (b) two transitions (c) focus (d) length+topic+transitions",
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
    { id: "oles-u4-4-3-notes", title: "Planning and paragraphs — notes", summary: "Outline first, then write focused paragraphs.",
      sections: [
        { heading: "Planning", body: "Bullet-point plan: opening, development, ending. Match the plan to the genre." },
        { heading: "Paragraphs", body: "One idea each; topic sentence first; transitions link; 4-6 sentences is readable." },
      ] },
  ],
};
