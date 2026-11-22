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
            { id: "a", text: "Summary task" },
            { id: "b", text: "Inference question" },
            { id: "c", text: "Grammar task" },
            { id: "d", text: "Literal question" },
          ], correctChoiceId: "d" },
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
        {
          id: "oles-u7-re-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The instruction 'Answer in your own words' signals that you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Copy the sentence exactly" },
            { id: "b", text: "Paraphrase the answer" },
            { id: "c", text: "Translate the text" },
            { id: "d", text: "Give your personal opinion" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Own words", statement: "Paraphrase, don't copy." }], steps: [{ reasoning: "'Own words' means restate the meaning without copying the text.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Paraphrase the answer" },
        },
        {
          id: "oles-u7-re-q6", difficulty: "core", totalMarks: 1,
          stem: "A question asking you to 'give two reasons' requires you to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Write a long essay" },
            { id: "b", text: "Answer yes or no" },
            { id: "c", text: "Invent two reasons from memory" },
            { id: "d", text: "Select points from the text and justify them" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Select and justify", statement: "Evidence-based reasons." }], steps: [{ reasoning: "You must pick relevant points and explain why they answer the question.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Select points from the text and justify them" },
        },
        {
          id: "oles-u7-re-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Why should you practise reading comprehension with real past papers?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Past papers", statement: "Real format and pressure." }], steps: [
            { reasoning: "Past papers match the real exam format, length and difficulty.", marks: 1, markCode: "AO2" },
            { reasoning: "They reveal your true weaknesses under timed conditions.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "They match real exam conditions and expose genuine weaknesses." },
        },
        {
          id: "oles-u7-re-q8", difficulty: "core", totalMarks: 2,
          stem: "What is 'question spotting' and why is it useful?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Question spotting", statement: "Recognise types instantly." }], steps: [
            { reasoning: "It means recognising instantly whether a question is literal, inference, paraphrase or justification.", marks: 1, markCode: "AO2" },
            { reasoning: "Knowing the type tells you the strategy to use — saving time and marks.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Instantly identifying question types so you apply the right strategy." },
        },
        {
          id: "oles-u7-re-q9", difficulty: "core", totalMarks: 3,
          stem: "What should you do when you cannot answer a reading question immediately?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Stuck questions", statement: "Move on, then return." }], steps: [
            { reasoning: "Do not waste time — mark it and move to the next question.", marks: 1, markCode: "AO2" },
            { reasoning: "Return to it on the second pass with fresh eyes.", marks: 1, markCode: "AO2" },
            { reasoning: "If still stuck near the end, give a best-effort answer rather than leaving it blank.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Skip it temporarily, return on the second pass, and guess if needed." },
        },
        {
          id: "oles-u7-re-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to improve your inference answers with textual evidence.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Evidence-based inference", statement: "Clues → inference → citation." }], steps: [
            { reasoning: "Underline the words or actions in the text that hint at the implied meaning.", marks: 1, markCode: "AO2" },
            { reasoning: "Decide what those clues suggest when combined.", marks: 1, markCode: "AO2" },
            { reasoning: "State the inference and attach the supporting evidence.", marks: 1, markCode: "AO2" },
            { reasoning: "Practise daily until attaching evidence becomes automatic.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Find clues, combine them, state the inference, and cite the evidence." },
        },
        {
          id: "oles-u7-re-q11", difficulty: "foundation", totalMarks: 1,
          stem: "When scanning a text for an answer, you should also look for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The longest paragraph" },
            { id: "b", text: "Pictures in the text" },
            { id: "c", text: "Synonyms of the question's keywords" },
            { id: "d", text: "Only the exact words" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Synonym scan", statement: "Texts paraphrase questions." }], steps: [{ reasoning: "The text often uses different words for the same idea.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Synonyms of the question's keywords" },
        },
        {
          id: "oles-u7-re-q12", difficulty: "core", totalMarks: 2,
          stem: "What does a 'select and justify' question require?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Select and justify", statement: "Choose points, then explain." }], steps: [
            { reasoning: "You select relevant points or details from the text.", marks: 1, markCode: "AO2" },
            { reasoning: "You justify them — explain why each one answers the question.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Pick relevant text points and explain why they answer the question." },
        },
        {
          id: "oles-u7-re-q13", difficulty: "core", totalMarks: 3,
          stem: "Describe a routine for timed reading comprehension practice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Reading practice routine", statement: "Timed → analyse → fix." }], steps: [
            { reasoning: "Attempt a past-paper section under timed conditions.", marks: 1, markCode: "AO2" },
            { reasoning: "Mark it and analyse why each mark was lost.", marks: 1, markCode: "AO2" },
            { reasoning: "Fix the specific weakness — e.g. more inference practice — and repeat.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Timed attempt → error analysis → targeted fix → repeat." },
        },
        {
          id: "oles-u7-re-q14", difficulty: "challenge", totalMarks: 1,
          stem: "After a reading practice test, the most useful next step is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Put the paper away and forget it" },
            { id: "b", text: "Only check the total score" },
            { id: "c", text: "Memorise the whole text" },
            { id: "d", text: "Analyse why each mark was lost" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Error analysis", statement: "Find causes, not just scores." }], steps: [{ reasoning: "Knowing why marks were lost tells you what to fix.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Analyse why each mark was lost" },
        },
        {
          id: "oles-u7-re-q15", difficulty: "foundation", totalMarks: 2,
          stem: "Why should you underline keywords in each comprehension question?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Keyword underline", statement: "Focus the scan." }], steps: [
            { reasoning: "Underlining focuses your attention on what the question really asks.", marks: 1, markCode: "AO2" },
            { reasoning: "It makes scanning the text for the right information faster.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "It focuses your search so you find the right information faster." },
        },
        {
          id: "oles-u7-re-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A student keeps losing marks on inference questions. Design a weekly practice plan to fix this.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Targeted practice", statement: "Daily drills on the weak area." }], steps: [
            { reasoning: "Do 5 inference questions daily, finding clues before answering.", marks: 1, markCode: "AO2" },
            { reasoning: "Always attach evidence from the text to each answer.", marks: 1, markCode: "AO2" },
            { reasoning: "Once a week, attempt a full timed reading section.", marks: 1, markCode: "AO2" },
            { reasoning: "Review errors weekly and adjust the plan.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Daily clue-finding drills with evidence, plus weekly timed sections." },
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
            { id: "a", text: "Only the topics" },
            { id: "b", text: "Nothing — same limit always" },
            { id: "c", text: "The word limits you practise with" },
            { id: "d", text: "Only the genre" },
          ], correctChoiceId: "c" },
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
        {
          id: "oles-u7-wr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Summary tasks in the ESL exam are defined by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No need to read the text" },
            { id: "b", text: "Complete freedom of length" },
            { id: "c", text: "Only grammar marking" },
            { id: "d", text: "Strict word limits and key-point selection" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Summary rules", statement: "Strict limits, select key points." }], steps: [{ reasoning: "Summaries have strict word counts and test selection.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Strict word limits and key-point selection" },
        },
        {
          id: "oles-u7-wr-q6", difficulty: "core", totalMarks: 1,
          stem: "The correct order for a summary draft is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Copy the whole text → submit" },
            { id: "b", text: "Draft → count words → trim if needed" },
            { id: "c", text: "Trim → draft → never count" },
            { id: "d", text: "Count words → draft → forget to check" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Summary order", statement: "Draft then count then adjust." }], steps: [{ reasoning: "Write first, then measure against the limit and adjust.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Draft → count words → trim if needed" },
        },
        {
          id: "oles-u7-wr-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Why must you count the words in a summary before finishing?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Word count", statement: "Limits are enforced." }], steps: [
            { reasoning: "Exceeding or falling short of the limit can cost marks.", marks: 1, markCode: "AO2" },
            { reasoning: "Counting lets you trim or add before time runs out.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "To stay within the limit and avoid losing marks for poor control." },
        },
        {
          id: "oles-u7-wr-q8", difficulty: "core", totalMarks: 2,
          stem: "What does 'selection under pressure' mean in summary writing?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Selection under pressure", statement: "Choose key points fast." }], steps: [
            { reasoning: "You must quickly identify the most important points in the text.", marks: 1, markCode: "AO2" },
            { reasoning: "The word limit forces you to drop minor details — choose wisely.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Choosing only the key points quickly because the word limit leaves no room for everything." },
        },
        {
          id: "oles-u7-wr-q9", difficulty: "core", totalMarks: 3,
          stem: "Explain the select-draft-count-check routine for writing a summary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Summary routine", statement: "Select → draft → count → check." }], steps: [
            { reasoning: "Select: identify the key points the summary must cover.", marks: 1, markCode: "AO2" },
            { reasoning: "Draft: write the summary in your own words within the limit.", marks: 1, markCode: "AO2" },
            { reasoning: "Count and check: verify the word count and that all key points are included.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Select key points, draft within the limit, then count and verify coverage." },
        },
        {
          id: "oles-u7-wr-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Why does an abrupt or unresolved ending cost marks in a composition?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Ending quality", statement: "Resolution is rewarded." }], steps: [
            { reasoning: "Examiners reward completeness — the ending must resolve the story or answer the question.", marks: 1, markCode: "AO2" },
            { reasoning: "An abrupt ending suggests poor planning or running out of time.", marks: 1, markCode: "AO2" },
            { reasoning: "Plan the ending in your outline before writing.", marks: 1, markCode: "AO2" },
            { reasoning: "Write the final paragraph with the same care as the opening.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Unresolved endings signal poor planning; plan and craft the ending deliberately." },
        },
        {
          id: "oles-u7-wr-q11", difficulty: "foundation", totalMarks: 1,
          stem: "Comparing your composition with a model answer mainly shows you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nothing useful" },
            { id: "b", text: "That your answer is already perfect" },
            { id: "c", text: "Only spelling mistakes" },
            { id: "d", text: "The gap between your work and a strong answer" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Model answers", statement: "Reveal the quality gap." }], steps: [{ reasoning: "Models show concretely what 'good' looks like.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** The gap between your work and a strong answer" },
        },
        {
          id: "oles-u7-wr-q12", difficulty: "core", totalMarks: 2,
          stem: "What should you include in a composition outline before writing?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Outline", statement: "Structure before prose." }], steps: [
            { reasoning: "Paragraph plan, key ideas, tense and the ending.", marks: 1, markCode: "AO2" },
            { reasoning: "For narratives also plan the arc: opening, problem, resolution.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Paragraph plan, key ideas, tense consistency and a planned ending." },
        },
        {
          id: "oles-u7-wr-q13", difficulty: "core", totalMarks: 3,
          stem: "How can you fix tense inconsistency in a composition draft?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Tense consistency", statement: "One tense, checked." }], steps: [
            { reasoning: "Decide the main tense (usually past for narratives) and keep it throughout.", marks: 1, markCode: "AO2" },
            { reasoning: "Scan each sentence for verbs that slipped into the wrong tense.", marks: 1, markCode: "AO2" },
            { reasoning: "Use your review pass specifically to check verb forms.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Fix one main tense and scan every verb during your final check." },
        },
        {
          id: "oles-u7-wr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The strongest ending for a narrative composition is one that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Introduces an unrelated new character" },
            { id: "b", text: "Repeats the first sentence" },
            { id: "c", text: "Resolves the main problem or answers the question" },
            { id: "d", text: "Stops mid-action" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Narrative ending", statement: "Resolution earns marks." }], steps: [{ reasoning: "A resolved ending shows control and completeness.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Resolves the main problem" },
        },
        {
          id: "oles-u7-wr-q15", difficulty: "foundation", totalMarks: 2,
          stem: "Why practise summaries at different word limits (30, 50, 80 words)?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Limit variety", statement: "Adapt selection to length." }], steps: [
            { reasoning: "Different limits train you to adjust how much detail you include.", marks: 1, markCode: "AO2" },
            { reasoning: "You become ready for whatever limit the real exam sets.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "It builds the adaptability to select the right amount of detail for any limit." },
        },
        {
          id: "oles-u7-wr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A practice composition has weak vocabulary and an abrupt ending. Suggest a four-step improvement plan.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Improvement plan", statement: "Target weaknesses systematically." }], steps: [
            { reasoning: "Plan the ending in the outline so it resolves properly.", marks: 1, markCode: "AO2" },
            { reasoning: "Build a personal word bank of varied, topic-relevant vocabulary.", marks: 1, markCode: "AO2" },
            { reasoning: "Rewrite one paragraph using the new vocabulary.", marks: 1, markCode: "AO2" },
            { reasoning: "Re-check against the composition checklist: tense, paragraphs, ending.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Plan ending, build word bank, rewrite with variety, then run the checklist." },
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
