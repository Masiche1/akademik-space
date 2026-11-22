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
            { id: "a", text: "Write nothing" },
            { id: "b", text: "Close your eyes" },
            { id: "c", text: "Read the questions and predict answers" },
            { id: "d", text: "Memorise the questions" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Preparation", statement: "Predict before listening." }], steps: [{ reasoning: "Reading questions first focuses listening.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Read and predict" },
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
        {
          id: "oles-u7-li-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A listening question asking 'Where does the meeting take place?' means you should listen for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A place name or location" },
            { id: "b", text: "A person's name only" },
            { id: "c", text: "A time" },
            { id: "d", text: "A price" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Prediction", statement: "Question word signals answer type." }], steps: [{ reasoning: "'Where' questions need place names or locations.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** A place name or location" },
        },
        {
          id: "oles-u7-li-q6", difficulty: "core", totalMarks: 2,
          stem: "Why should you predict answers before the recording starts?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Prediction", statement: "Focuses attention." }], steps: [
            { reasoning: "Prediction tells you what kind of information to listen for.", marks: 1, markCode: "AO2" },
            { reasoning: "Focused listening means you catch the answer the first time.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "It focuses your attention on the expected type of information." },
        },
        {
          id: "oles-u7-li-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Why write listening answers as soon as you hear them?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Immediate writing", statement: "Details fade fast." }], steps: [
            { reasoning: "Exact details like numbers and names are hard to recall later.", marks: 1, markCode: "AO2" },
            { reasoning: "Writing immediately captures them while fresh.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Exact details are easy to lose; write them down the moment you hear them." },
        },
        {
          id: "oles-u7-li-q8", difficulty: "core", totalMarks: 3,
          stem: "How should you use the second play of a listening recording?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Second play", statement: "Check and fill gaps." }], steps: [
            { reasoning: "Check answers you already wrote for accuracy.", marks: 1, markCode: "AO2" },
            { reasoning: "Fill in gaps where you missed an answer.", marks: 1, markCode: "AO2" },
            { reasoning: "Do not start listening from scratch — focus on the missed parts.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Use it to verify answers and fill gaps, not to restart." },
        },
        {
          id: "oles-u7-li-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why 'the recording will not wait for you' and what to do if you miss an answer.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Missed answers", statement: "Keep going, guess if needed." }], steps: [
            { reasoning: "You cannot pause or rewind a live recording.", marks: 1, markCode: "AO2" },
            { reasoning: "Panicking over a missed answer makes you miss the next ones too.", marks: 1, markCode: "AO2" },
            { reasoning: "Keep listening for the following questions.", marks: 1, markCode: "AO2" },
            { reasoning: "Use spare time or the second play to attempt a best guess.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Keep listening; recover the missed answer later or make a best guess." },
        },
        {
          id: "oles-u7-li-q10", difficulty: "foundation", totalMarks: 1,
          stem: "If you miss a listening answer, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Leave the exam room" },
            { id: "b", text: "Keep listening for the next question" },
            { id: "c", text: "Write down everything you hear" },
            { id: "d", text: "Stop paying attention" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Recovery", statement: "Move on, recover later." }], steps: [{ reasoning: "Missing one answer does not mean missing the rest.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Keep listening for the next question" },
        },
        {
          id: "oles-u7-li-q11", difficulty: "core", totalMarks: 2,
          stem: "A question beginning 'When…' in a listening test requires you to listen for…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Question words", statement: "Each signals an answer type." }], steps: [
            { reasoning: "'When' questions need a time or date expression.", marks: 1, markCode: "AO2" },
            { reasoning: "Write the time or date digits as soon as you hear them.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A time or date — listen for clock times, days or dates." },
        },
        {
          id: "oles-u7-li-q12", difficulty: "core", totalMarks: 3,
          stem: "Describe the before-during-after routine for a listening test.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Listening routine", statement: "Predict → write → check." }], steps: [
            { reasoning: "Before: read all questions and predict answer types.", marks: 1, markCode: "AO2" },
            { reasoning: "During: write answers immediately as you hear them.", marks: 1, markCode: "AO2" },
            { reasoning: "After/second play: check answers and fill missed gaps.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Predict before, write during, check and fill gaps on the second play." },
        },
        {
          id: "oles-u7-li-q13", difficulty: "challenge", totalMarks: 1,
          stem: "The reading time before a listening recording plays is best spent…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Memorising the whole question paper" },
            { id: "b", text: "Predicting the type of answer each question needs" },
            { id: "c", text: "Closing your eyes to relax" },
            { id: "d", text: "Doing another section's writing" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Preparation time", statement: "Predict, don't memorise." }], steps: [{ reasoning: "Prediction focuses listening; memorising wastes the time.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Predicting the type of answer each question needs" },
        },
        {
          id: "oles-u7-li-q14", difficulty: "foundation", totalMarks: 2,
          stem: "Why is waiting until the recording ends to write answers a mistake?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Memory limits", statement: "You cannot rewind your memory." }], steps: [
            { reasoning: "Exact details fade quickly once the audio moves on.", marks: 1, markCode: "AO2" },
            { reasoning: "Writing later means guessing rather than recalling accurately.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Details are lost from memory; write them while you hear them." },
        },
        {
          id: "oles-u7-li-q15", difficulty: "core", totalMarks: 3,
          stem: "How can you practise listening skills at home without a formal test?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Home practice", statement: "Simulate test conditions." }], steps: [
            { reasoning: "Use English audio — podcasts, news, films — with comprehension questions.", marks: 1, markCode: "AO2" },
            { reasoning: "Play it once, write answers, then replay to check.", marks: 1, markCode: "AO2" },
            { reasoning: "Practise writing answers quickly under time pressure.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Listen to English audio, answer questions in one play, then verify on replay." },
        },
        {
          id: "oles-u7-li-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A student answers only 3 of 10 listening questions because they froze on the first one. Diagnose the problem and suggest fixes.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Listening recovery", statement: "One miss is not ten." }], steps: [
            { reasoning: "The student likely stopped listening after missing the first answer.", marks: 1, markCode: "AO2" },
            { reasoning: "Fix: train the habit of continuing to the next question immediately.", marks: 1, markCode: "AO2" },
            { reasoning: "Practise writing answers as heard and filling gaps on replay.", marks: 1, markCode: "AO2" },
            { reasoning: "Do timed practice sessions to build resilience.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Recover by always moving to the next question; missed answers can be guessed later." },
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
            { id: "a", text: "Give one-word answers" },
            { id: "b", text: "Avoid the examiner's eyes" },
            { id: "c", text: "Give full answers with reasons" },
            { id: "d", text: "Memorise a script" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Full answers", statement: "Extend with reasons/examples." }], steps: [{ reasoning: "Full answers show range and fluency.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Full answers with reasons" },
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
        {
          id: "oles-u7-sp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If you are unsure of an answer during the speaking test, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stay completely silent" },
            { id: "b", text: "Give up and leave" },
            { id: "c", text: "Ask the examiner to end the test" },
            { id: "d", text: "Pause briefly, then give your best answer" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Recovery", statement: "Pause briefly, answer fully." }], steps: [{ reasoning: "A short pause then an attempt beats silence or giving up.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Pause briefly, then give your best answer" },
        },
        {
          id: "oles-u7-sp-q6", difficulty: "core", totalMarks: 2,
          stem: "How can you extend a one-word answer like 'Yes' into a full answer?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Full answers", statement: "Extend with reasons and examples." }], steps: [
            { reasoning: "Add a reason or example: 'Yes, I do. I play football every weekend.'", marks: 1, markCode: "AO2" },
            { reasoning: "This shows range and fluency to the examiner.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Add reasons and examples after the direct answer." },
        },
        {
          id: "oles-u7-sp-q7", difficulty: "foundation", totalMarks: 1,
          stem: "At the start of a speaking test, it is good to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Greet the examiner politely" },
            { id: "b", text: "Ask for a written script" },
            { id: "c", text: "Look at the floor" },
            { id: "d", text: "Start talking before listening" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Test conduct", statement: "Greet, listen, answer." }], steps: [{ reasoning: "A polite greeting shows confidence and good manners.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Greet the examiner politely" },
        },
        {
          id: "oles-u7-sp-q8", difficulty: "core", totalMarks: 2,
          stem: "Why is speaking English aloud every day better than only reading it?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Daily practice", statement: "Speaking builds fluency and confidence." }], steps: [
            { reasoning: "Reading alone does not train pronunciation or spoken fluency.", marks: 1, markCode: "AO2" },
            { reasoning: "Regular speaking makes answers more natural under exam pressure.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Speaking aloud builds the fluency and confidence the test measures." },
        },
        {
          id: "oles-u7-sp-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the 'I mean' technique for self-correction and when to use it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Self-correction", statement: "Fix briefly, then continue." }], steps: [
            { reasoning: "Say 'I mean...' or 'Sorry, I meant...' followed by the correct word.", marks: 1, markCode: "AO2" },
            { reasoning: "Use it immediately after the mistake — don't wait.", marks: 1, markCode: "AO2" },
            { reasoning: "Keep speaking after correcting; do not dwell or apologise repeatedly.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear technique.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Brief 'I mean' correction, then continue speaking." },
        },
        {
          id: "oles-u7-sp-q10", difficulty: "foundation", totalMarks: 1,
          stem: "A 'prompt' in a speaking test is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A second examiner" },
            { id: "b", text: "The examiner's question or cue that starts your answer" },
            { id: "c", text: "A written script to memorise" },
            { id: "d", text: "A grammar rule" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Prompt", statement: "The cue that starts your answer." }], steps: [{ reasoning: "The prompt is the examiner's question or cue for your response.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** The examiner's question or cue" },
        },
        {
          id: "oles-u7-sp-q11", difficulty: "core", totalMarks: 2,
          stem: "Choose the best answer to 'Do you like sport?'",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yes." },
            { id: "b", text: "Sport." },
            { id: "c", text: "I don't know." },
            { id: "d", text: "Yes, I do. I play football every weekend because I enjoy it with my friends." },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Full answers", statement: "Answer + reason/example." }], steps: [
            { reasoning: "A full answer gives the direct answer plus a reason and example.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(d)** Yes, I do. I play football every weekend..." },
        },
        {
          id: "oles-u7-sp-q12", difficulty: "challenge", totalMarks: 9,
          stem: "Speaking test practice.",
          parts: [
            { label: "a", prompt: "How to prepare vocabulary without memorising scripts?", marks: 2 },
            { label: "b", prompt: "What is a full answer?", marks: 2 },
            { label: "c", prompt: "How to self-correct a mistake?", marks: 2 },
            { label: "d", prompt: "Why does spontaneous speech score better?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Speaking test", statement: "Vocabulary, full answers, recovery, spontaneity." }], steps: [
            { part: "a", reasoning: "Learn topic words and phrases, then practise using them in your own words.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct preparation.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Direct answer plus reasons and examples — not one word.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Brief 'I mean' correction, then continue without dwelling.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct technique.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Spontaneous speech sounds natural and copes with unexpected prompts.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Scripts break and sound rehearsed.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Justified answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) words not scripts (b) answer+reasons (c) fix+continue (d) natural+flexible",
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
          id: "oles-u7-sp-q13", difficulty: "core", totalMarks: 2,
          stem: "What is the difference between prepared topic vocabulary and a memorised script?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "No scripts", statement: "Words help; scripts hurt." }], steps: [
            { reasoning: "Vocabulary gives you words to use freely in your own sentences.", marks: 1, markCode: "AO2" },
            { reasoning: "A script is fixed wording that sounds fake and fails on unexpected prompts.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Vocabulary = flexible words; script = fixed wording that examiners detect." },
        },
        {
          id: "oles-u7-sp-q14", difficulty: "foundation", totalMarks: 1,
          stem: "During a speaking test, a brief pause to think is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only allowed once" },
            { id: "b", text: "Never allowed" },
            { id: "c", text: "Counted as a wrong answer" },
            { id: "d", text: "Fine — short pauses are better than rushed wrong answers" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Pausing", statement: "Think briefly, keep going." }], steps: [{ reasoning: "A short pause is natural; long silence is the problem.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Fine — short pauses are better than rushed wrong answers" },
        },
        {
          id: "oles-u7-sp-q15", difficulty: "challenge", totalMarks: 4,
          stem: "How should you answer a 'why' question, e.g. 'Why do you like your school?'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Extended answers", statement: "Answer + reason + example." }], steps: [
            { reasoning: "Give the direct answer first: 'I like my school because...'", marks: 1, markCode: "AO2" },
            { reasoning: "Give a reason, e.g. friendly teachers or interesting lessons.", marks: 1, markCode: "AO2" },
            { reasoning: "Add an example or detail to extend the answer.", marks: 1, markCode: "AO2" },
            { reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Answer + reason + example, e.g. 'I like my school because my teachers are helpful and the lessons are interesting.'" },
        },
        {
          id: "oles-u7-sp-q16", difficulty: "core", totalMarks: 2,
          stem: "How do you recover if you say the wrong word in the middle of an answer?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Recovery", statement: "Fix briefly, continue." }], steps: [
            { reasoning: "Correct briefly with 'I mean...' or 'Sorry, I meant...'.", marks: 1, markCode: "AO2" },
            { reasoning: "Then continue the answer — do not restart or dwell.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Brief self-correction, then carry on speaking." },
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
