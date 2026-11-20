import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "oles-u7-lesson-7-3",
  code: "7-3",
  title: "Listening and speaking exam practice",
  goal: "I CAN prepare for and perform in listening and speaking assessments.",
  standards: ["1120 Exam technique: listening and speaking"],
  vocabulary: [
    { term: "Listening test", definition: "An assessment where you answer questions about recordings." },
    { term: "Speaking test", definition: "An assessed conversation or presentation with an examiner." },
    { term: "Recording", definition: "The audio played in a listening test, often played twice." },
    { term: "Prompt", definition: "The examiner's question or cue that starts your answer." },
    { term: "Self-correction", definition: "Fixing your own mistake while speaking — acceptable in moderation." },
  ],
  concepts: [
    {
      id: "oles-u7-listening",
      title: "Listening test strategy",
      skill: "Maximise marks in recorded listening assessments.",
      lesson: {
        sections: [
          { heading: "Before the recording", body: "Read all questions first — you usually get time before the audio plays. Predict answers: a question about 'time' means listen for numbers; 'where' means listen for place names. This focuses your listening." },
          { heading: "During the recording", body: "Write answers as you hear them — never wait for the end. Use the second play (if allowed) to check and fill gaps, not to start over. If you miss an answer, keep listening — the recording will not wait for you." },
        ],
        keyFormulas: [
          { name: "Listening test", statement: "Read questions → predict → write immediately → use second play to check." },
        ],
        workedExample: {
          problem: "Question: 'What time does the library close?' before the recording.",
          solution: "Predict: listen for a time expression. Write the time digits as soon as you hear them — don't wait.",
        },
      },
      questions: [
        {
          id: "oles-u7-li-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Before a listening recording plays, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Read the questions and predict answers" },
            { id: "b", text: "Close your eyes" },
            { id: "c", text: "Write nothing" },
            { id: "d", text: "Memorise the questions" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Preparation", statement: "Predict before listening." }], steps: [{ reasoning: "Reading questions first focuses listening.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Read and predict" },
        },
        {
          id: "oles-u7-li-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the second play of a recording usually for?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Second play", statement: "Check and fill gaps." }], steps: [
            { reasoning: "To check answers and fill missed details.", marks: 1, markCode: "AO2" },
            { reasoning: "Not to start listening from scratch.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Check answers and fill gaps — not a fresh start." },
        },
        {
          id: "oles-u7-li-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why writing answers immediately during a recording is better than waiting.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Immediate writing", statement: "Memory fails; recording doesn't wait." }], steps: [
            { reasoning: "You cannot rewind mentally — write as you hear.", marks: 1, markCode: "AO2" },
            { reasoning: "Waiting means the answer is gone when you realise.", marks: 1, markCode: "AO2" },
            { reasoning: "Immediate writing captures details while fresh.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Write as you hear — you cannot recall exact details later." },
        },
        {
          id: "oles-u7-li-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Listening test review.",
          parts: [
            { label: "a", prompt: "What to do before the recording?", marks: 2 },
            { label: "b", prompt: "Why predict answers?", marks: 2 },
            { label: "c", prompt: "What is the second play for?", marks: 2 },
            { label: "d", prompt: "What if you miss an answer?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Listening test", statement: "Predict, write, check." }], steps: [
            { part: "a", reasoning: "Read all questions and predict likely answers.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct preparation.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Prediction focuses attention on expected information types.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct benefit.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Check answers and fill missed details.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct purpose.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Keep listening — the recording won't wait; guess if needed.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Practical advice.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) read+predict (b) focus (c) check+fill (d) keep going/guess",
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
      id: "oles-u7-speaking",
      title: "Speaking test strategy",
      skill: "Perform confidently in assessed speaking tasks.",
      lesson: {
        sections: [
          { heading: "Before the test", body: "Practise speaking English aloud daily — not just in your head. Record yourself answering sample prompts. The more you speak, the more natural fluency becomes. Prepare topic vocabulary but do not memorise full answers — examiners detect rehearsed scripts." },
          { heading: "During the test", body: "Greet the examiner, listen carefully to prompts, and answer fully — give reasons and examples, not one-word replies. If you make a mistake, correct yourself briefly and continue ('I mean...'). Pausing to think is fine; long silence is not." },
        ],
        keyFormulas: [
          { name: "Speaking test", statement: "Practise aloud → answer fully → self-correct → keep going." },
        ],
        workedExample: {
          problem: "Examiner asks 'What do you do in your free time?' Give a full answer.",
          solution: "'In my free time I enjoy reading and playing football. I read because it helps me relax, and I play football with friends every weekend.' — full answer with reasons.",
        },
      },
      questions: [
        {
          id: "oles-u7-sp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a speaking test, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Give full answers with reasons" },
            { id: "b", text: "Give one-word answers" },
            { id: "c", text: "Memorise a script" },
            { id: "d", text: "Avoid the examiner's eyes" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Full answers", statement: "Extend with reasons/examples." }], steps: [{ reasoning: "Full answers show range and fluency.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Full answers with reasons" },
        },
        {
          id: "oles-u7-sp-q2", difficulty: "core", totalMarks: 2,
          stem: "Why shouldn't you memorise full answers for a speaking test?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "No scripts", statement: "Examiners detect rehearsed answers." }], steps: [
            { reasoning: "Memorised scripts sound unnatural and break under unexpected prompts.", marks: 1, markCode: "AO2" },
            { reasoning: "Prepared vocabulary + spontaneous speech scores better.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Scripts sound fake and fail on unexpected questions." },
        },
        {
          id: "oles-u7-sp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to handle a mistake while speaking in the test.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Self-correction", statement: "Fix briefly, keep going." }], steps: [
            { reasoning: "Correct yourself briefly: 'I mean...' or 'Sorry, I meant...'.", marks: 1, markCode: "AO2" },
            { reasoning: "Do not dwell on the mistake or apologise repeatedly.", marks: 1, markCode: "AO2" },
            { reasoning: "Continue speaking — fluency and recovery matter most.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear technique.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Brief self-correction, then continue — don't dwell." },
        },
        {
          id: "oles-u7-sp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Speaking test review.",
          parts: [
            { label: "a", prompt: "How to prepare for speaking?", marks: 2 },
            { label: "b", prompt: "Why no memorised scripts?", marks: 2 },
            { label: "c", prompt: "How to handle mistakes?", marks: 2 },
            { label: "d", prompt: "What makes a full answer?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Speaking test", statement: "Practise, spontaneity, recovery, full answers." }], steps: [
            { part: "a", reasoning: "Speak aloud daily; record yourself; prepare vocabulary not scripts.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct preparation.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Scripts sound unnatural and fail on unexpected prompts.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Brief 'I mean' correction, then continue.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct technique.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Direct answer + reasons/examples, not one word.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Full response.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) practise aloud (b) fake+fragile (c) fix+continue (d) answer+reasons",
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
    { id: "oles-u7-7-3-notes", title: "Listening and speaking exams — notes", summary: "Prediction, immediate writing, spontaneous speech.",
      sections: [
        { heading: "Listening", body: "Read questions first, predict answers, write immediately, use second play to check." },
        { heading: "Speaking", body: "Practise aloud, give full answers with reasons, self-correct briefly, never memorise scripts." },
      ] },
  ],
};
