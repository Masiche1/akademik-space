import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "oles-u6-lesson-6-1",
  code: "6-1",
  title: "Listening for gist and detail",
  goal: "I CAN listen for the main idea and specific details in spoken English.",
  standards: ["1120 Listening: comprehension"],
  vocabulary: [
    { term: "Gist", definition: "The general sense of what is heard, without detail." },
    { term: "Detail", definition: "Specific facts, names, numbers or instructions." },
    { term: "Speaker", definition: "The person whose voice you hear." },
    { term: "Context", definition: "Background knowledge that helps you predict what is said." },
    { term: "Distractor", definition: "A word or phrase that sounds relevant but is not the answer." },
  ],
  concepts: [
    {
      id: "oles-u6-gist",
      title: "Listening for gist",
      skill: "Catch the main idea of a recording on first listen.",
      lesson: {
        sections: [
          { heading: "First listen = gist", body: "On the first listen, do not try to catch every word — you cannot. Listen for the topic, the speaker's purpose and the overall situation. Ask: what is this about? Who is speaking? Why?" },
          { heading: "Prediction helps", body: "Before listening, read any questions or look at pictures — they tell you what to listen for. Predict likely words: a question about 'price' means listen for numbers and money words." },
        ],
        keyFormulas: [
          { name: "Gist listening", statement: "First listen = topic + purpose + situation; details come later." },
        ],
        workedExample: {
          problem: "A recording plays once. Question asks 'What is the speaker mainly about?'",
          solution: "Listen for the topic and purpose on first hearing — the main idea — not every detail.",
        },
      },
      questions: [
        {
          id: "oles-u6-gi-q1", difficulty: "foundation", totalMarks: 1,
          stem: "On a first listen, you should focus on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The main idea and purpose" },
            { id: "b", text: "Every single word" },
            { id: "c", text: "Only the numbers" },
            { id: "d", text: "The speaker's name" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Gist", statement: "First listen = main idea." }], steps: [{ reasoning: "Gist listening targets the overall meaning.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** The main idea and purpose" },
        },
        {
          id: "oles-u6-gi-q2", difficulty: "core", totalMarks: 2,
          stem: "Why read questions before listening?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Prediction", statement: "Questions tell you what to listen for." }], steps: [
            { reasoning: "Questions reveal the required information type.", marks: 1, markCode: "AO2" },
            { reasoning: "This focuses attention and reduces missed answers.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "They tell you what to listen for, so you catch the right details." },
        },
        {
          id: "oles-u6-gi-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between listening for gist and listening for detail.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Gist vs detail", statement: "Gist = overall; detail = specifics." }], steps: [
            { reasoning: "Gist = topic, purpose, situation — the 'what is this about'.", marks: 1, markCode: "AO2" },
            { reasoning: "Detail = names, numbers, times, instructions — the 'exact facts'.", marks: 1, markCode: "AO2" },
            { reasoning: "They need different listening strategies and usually different plays.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Gist = overall sense; detail = specific facts; different strategies." },
        },
        {
          id: "oles-u6-gi-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Gist listening review.",
          parts: [
            { label: "a", prompt: "What is gist?", marks: 2 },
            { label: "b", prompt: "What should a first listen capture?", marks: 2 },
            { label: "c", prompt: "Why predict before listening?", marks: 2 },
            { label: "d", prompt: "What is a distractor?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Gist listening", statement: "Overall sense first; predict; beware distractors." }], steps: [
            { part: "a", reasoning: "The general sense of what is heard.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Topic, purpose and overall situation.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct targets.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Prediction focuses attention on expected information.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct benefit.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "A word or phrase that sounds relevant but is not the answer.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains the trap.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "How to avoid it.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) general sense (b) topic/purpose (c) focus attention (d) sound-alike trap",
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
      id: "oles-u6-detail",
      title: "Listening for detail",
      skill: "Catch specific facts: names, numbers, times and instructions.",
      lesson: {
        sections: [
          { heading: "Detail signals", body: "Details often follow signal phrases: 'the meeting is on Tuesday at three', 'your reference number is', 'first... second... finally'. Numbers are usually spoken clearly — write digits as you hear them, then check." },
          { heading: "Handling distractors", body: "Speakers often mention a wrong option first, then correct it: 'not Monday — sorry, Tuesday'. Listen for corrections ('actually', 'I mean', 'sorry') — the corrected version is the answer." },
        ],
        keyFormulas: [
          { name: "Detail listening", statement: "Signal phrases + corrections + number accuracy = correct details." },
        ],
        workedExample: {
          problem: "You hear: 'The class is on Friday, no wait, it's on Thursday at 10.' What is the answer?",
          solution: "Thursday at 10 — the speaker corrected Friday to Thursday. Corrections override earlier information.",
        },
      },
      questions: [
        {
          id: "oles-u6-de-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If a speaker says 'not Monday — Tuesday', the answer is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tuesday" }, { id: "b", text: "Monday" }, { id: "c", text: "Both" }, { id: "d", text: "Neither" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Corrections", statement: "Corrections override earlier info." }], steps: [{ reasoning: "The correction 'Tuesday' replaces 'Monday'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Tuesday" },
        },
        {
          id: "oles-u6-de-q2", difficulty: "core", totalMarks: 2,
          stem: "What should you do with numbers you hear?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Numbers", statement: "Write digits immediately, check later." }], steps: [
            { reasoning: "Write digits as you hear them — memory fails fast.", marks: 1, markCode: "AO2" },
            { reasoning: "Check them in any review time.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Write digits immediately, then verify." },
        },
        {
          id: "oles-u6-de-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how signal phrases help detail listening.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Signal phrases", statement: "They flag important information." }], steps: [
            { reasoning: "Phrases like 'the meeting is on' flag that a detail follows.", marks: 1, markCode: "AO2" },
            { reasoning: "'First, second, finally' signal lists — listen for each item.", marks: 1, markCode: "AO2" },
            { reasoning: "Recognising signals focuses attention at the right moment.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Signal phrases flag where important details are coming." },
        },
        {
          id: "oles-u6-de-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Detail listening review.",
          parts: [
            { label: "a", prompt: "What are signal phrases?", marks: 2 },
            { label: "b", prompt: "How do corrections work?", marks: 2 },
            { label: "c", prompt: "Why write numbers immediately?", marks: 2 },
            { label: "d", prompt: "What is a listening distractor?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Detail listening", statement: "Signals + corrections + immediate recording." }], steps: [
            { part: "a", reasoning: "Phrases flagging that specific information follows.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Corrections replace earlier information — use the corrected version.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct rule.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Memory of exact numbers is unreliable; write digits at once.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Information that sounds relevant but is not the answer.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains the trap.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "How to handle.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) flag details (b) correction wins (c) memory fails (d) sound-alike trap",
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
    { id: "oles-u6-6-1-notes", title: "Listening skills — notes", summary: "Gist first, then details, corrections and distractors.",
      sections: [
        { heading: "Gist", body: "First listen = topic + purpose. Read questions first to predict what to catch." },
        { heading: "Detail", body: "Signal phrases flag facts; write numbers immediately; corrections override earlier info." },
      ] },
  ],
};
