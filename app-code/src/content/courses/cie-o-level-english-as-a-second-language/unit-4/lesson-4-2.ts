import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "oles-u4-lesson-4-2",
  code: "4-2",
  title: "Descriptive and argumentative writing",
  goal: "I CAN write vivid descriptions and balanced arguments.",
  standards: ["1120 Writing: descriptive and argumentative"],
  vocabulary: [
    { term: "Description", definition: "Writing that creates a picture using the five senses." },
    { term: "Sensory detail", definition: "Words about sight, sound, smell, taste and touch." },
    { term: "Argument", definition: "Writing that gives reasons for and against an opinion." },
    { term: "Balanced", definition: "Showing both sides of an argument fairly." },
    { term: "Emotive language", definition: "Words chosen to create feelings in the reader." },
  ],
  concepts: [
    {
      id: "oles-u4-describe",
      title: "Descriptive writing",
      skill: "Use sensory detail and precise vocabulary to create pictures.",
      lesson: {
        sections: [
          { heading: "The five senses", body: "Strong description uses more than sight: sounds ('the crunch of gravel'), smells ('the sharp smell of pine'), textures ('rough bark'), tastes ('bitter coffee'). One or two precise sensory details beat a paragraph of vague adjectives." },
          { heading: "Precise vocabulary", body: "Replace general words with specific ones: not 'nice food' but 'hot, spicy noodles'; not 'nice day' but 'golden afternoon light'. Good adjectives and strong verbs do the work — avoid piling up adjectives." },
        ],
        keyFormulas: [
          { name: "Description", statement: "Senses + precise words + one clear focus = vivid picture." },
        ],
        workedExample: {
          problem: "Describe a beach using two senses.",
          solution: "Sight: 'turquoise waves folded onto white sand.' Sound: 'the hiss of the tide and cries of gulls.' Two senses, precise words.",
        },
      },
      questions: [
        {
          id: "oles-u4-de-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The five senses used in description are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sight, sound, smell, taste, touch" },
            { id: "b", text: "Only sight and sound" },
            { id: "c", text: "Only taste and touch" },
            { id: "d", text: "Only smell and sight" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Five senses", statement: "Sight, sound, smell, taste, touch." }], steps: [{ reasoning: "All five senses can be used.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** All five senses" },
        },
        {
          id: "oles-u4-de-q2", difficulty: "core", totalMarks: 2,
          stem: "Why is 'the hiss of the tide' better than 'the sea was loud'?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Precise vocabulary", statement: "Specific words create clearer pictures." }], steps: [
            { reasoning: "'Hiss' is a precise sound word; 'loud' is vague.", marks: 1, markCode: "AO2" },
            { reasoning: "The reader can actually hear the specific sound.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Precise words let the reader picture/hear the exact thing." },
        },
        {
          id: "oles-u4-de-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to write a strong descriptive paragraph.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Description method", statement: "One focus + sensory details + precise words." }], steps: [
            { reasoning: "Choose one clear focus — a place, object or moment.", marks: 1, markCode: "AO2" },
            { reasoning: "Add sensory details for at least two or three senses.", marks: 1, markCode: "AO2" },
            { reasoning: "Use precise verbs and adjectives instead of general ones.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear method.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "One focus; sensory details; precise vocabulary." },
        },
        {
          id: "oles-u4-de-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Descriptive writing review.",
          parts: [
            { label: "a", prompt: "Name the five senses.", marks: 2 },
            { label: "b", prompt: "What makes vocabulary 'precise'?", marks: 2 },
            { label: "c", prompt: "Why use more than one sense?", marks: 2 },
            { label: "d", prompt: "What is the risk of too many adjectives?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Description", statement: "Senses + precision + restraint." }], steps: [
            { part: "a", reasoning: "Sight, sound, smell, taste, touch.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All five.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Specific words that create an exact picture.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct meaning.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Multiple senses make the description vivid and realistic.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Adjective piles weaken writing — choose the strongest few.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains the problem.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Advises restraint.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) five senses (b) exact picture (c) vivid realism (d) weaken — choose few",
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
      id: "oles-u4-argument",
      title: "Argumentative writing",
      skill: "Present a clear opinion supported by balanced reasons.",
      lesson: {
        sections: [
          { heading: "Structure of an argument", body: "State your opinion clearly in the introduction. Then give your strongest reasons, each in its own paragraph with an example or explanation. Acknowledge the opposite view briefly — it makes your argument stronger, not weaker." },
          { heading: "Persuasive techniques", body: "Use strong topic sentences ('The main reason is...'), evidence ('For example...'), and persuasive connectives ('therefore', 'as a result', 'this shows that'). End with a firm conclusion restating your position." },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Opinion → reasons with evidence → acknowledge other side → firm conclusion." },
        ],
        workedExample: {
          problem: "Topic: 'School uniforms should be compulsory.' Write the introduction sentence.",
          solution: "'School uniforms should be compulsory because they reduce distraction, promote equality, and create a sense of community.' Opinion + preview of reasons.",
        },
      },
      questions: [
        {
          id: "oles-u4-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An argumentative essay should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "State an opinion and support it with reasons" },
            { id: "b", text: "List facts only" },
            { id: "c", text: "Tell a story" },
            { id: "d", text: "Describe a place" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Argument", statement: "Opinion + reasons." }], steps: [{ reasoning: "Arguments need a stance and supporting reasons.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Opinion supported by reasons" },
        },
        {
          id: "oles-u4-ar-q2", difficulty: "core", totalMarks: 2,
          stem: "Why acknowledge the opposite view in an argument?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Balance", statement: "Addressing the other side strengthens credibility." }], steps: [
            { reasoning: "It shows you have considered all sides.", marks: 1, markCode: "AO2" },
            { reasoning: "It makes your own argument more convincing.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Acknowledging the other side adds credibility and strengthens your case." },
        },
        {
          id: "oles-u4-ar-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between a reason and an example in an argument.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Reason vs example", statement: "Reason = why; example = proof." }], steps: [
            { reasoning: "A reason explains why the opinion is true.", marks: 1, markCode: "AO2" },
            { reasoning: "An example gives a specific case proving the reason.", marks: 1, markCode: "AO2" },
            { reasoning: "Together they form: claim → reason → evidence.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Reason = the why; example = specific proof of that why." },
        },
        {
          id: "oles-u4-ar-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Argumentative writing review.",
          parts: [
            { label: "a", prompt: "What does an argument need?", marks: 2 },
            { label: "b", prompt: "Why acknowledge the other side?", marks: 2 },
            { label: "c", prompt: "Name two persuasive connectives.", marks: 2 },
            { label: "d", prompt: "How should the conclusion work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Argument", statement: "Opinion + reasons + balance + firm conclusion." }], steps: [
            { part: "a", reasoning: "A clear opinion and supporting reasons with evidence.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct essentials.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Shows fairness and strengthens credibility.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Any two: therefore, as a result, this shows, however, consequently.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Restate the position firmly and briefly summarise reasons.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "No new arguments.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct technique.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) opinion+reasons (b) credibility (c) two connectives (d) restate firmly",
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
    { id: "oles-u4-4-2-notes", title: "Description and argument — notes", summary: "Sensory detail and balanced reasoning.",
      sections: [
        { heading: "Description", body: "Use multiple senses, precise words, and restraint — few strong adjectives beat many weak ones." },
        { heading: "Argument", body: "Opinion → reasons → evidence → acknowledge other side → firm conclusion." },
      ] },
  ],
};
