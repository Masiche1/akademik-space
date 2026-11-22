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
            { id: "a", text: "The speaker's name" },
            { id: "b", text: "Every single word" },
            { id: "c", text: "The main idea and purpose" },
            { id: "d", text: "Only the numbers" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Gist", statement: "First listen = main idea." }], steps: [{ reasoning: "Gist listening targets the overall meaning.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** The main idea and purpose" },
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
        {
          id: "oles-u6-gi-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Before a listening task begins, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Close your eyes" },
            { id: "b", text: "Read the questions and predict" },
            { id: "c", text: "Start writing an essay" },
            { id: "d", text: "Ignore all instructions" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Prediction", statement: "Questions tell you what to listen for." }], steps: [{ reasoning: "Reading questions first focuses your listening.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Read questions and predict" },
        },
        {
          id: "oles-u6-gi-q6", difficulty: "core", totalMarks: 2,
          stem: "A question asks 'What is the talk mainly about?' — you are listening for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Every number mentioned" },
            { id: "b", text: "The gist — the main idea" },
            { id: "c", text: "Only the last sentence" },
            { id: "d", text: "The speaker's age" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Gist", statement: "Main idea, not detail." }], steps: [
            { reasoning: "'Mainly about' asks for the gist.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** the gist" },
        },
        {
          id: "oles-u6-gi-q7", difficulty: "foundation", totalMarks: 1,
          stem: "On a typical first listen, how many times should the recording play before you try to catch details?",
          response: { type: "numeric", parts: [ { label: "a", answer: 1 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Gist listening", statement: "First listen = gist only." }], steps: [
            { reasoning: "The first listen is for the main idea — details come on later plays.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "1" },
        },
        {
          id: "oles-u6-gi-q8", difficulty: "core", totalMarks: 2,
          stem: "A question mentions 'price'. You should predict listening for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Grammar rules" },
            { id: "b", text: "Names only" },
            { id: "c", text: "Colours and sizes" },
            { id: "d", text: "Numbers and money words" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Prediction", statement: "Questions predict the information type." }], steps: [
            { reasoning: "'Price' signals numbers and money vocabulary.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(d)** numbers and money words" },
        },
        {
          id: "oles-u6-gi-q9", difficulty: "core", totalMarks: 2,
          stem: "What three things should a first listen capture?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Gist listening", statement: "Topic, purpose, situation." }], steps: [
            { reasoning: "Topic, purpose and overall situation.", marks: 1, markCode: "AO2" },
            { reasoning: "All three stated.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Topic, purpose and overall situation." },
        },
        {
          id: "oles-u6-gi-q10", difficulty: "core", totalMarks: 1,
          stem: "How many of these are gist questions: 'What is the speaker mainly about?', 'What time is the meeting?', 'Why is the speaker calling?', 'What is the man's job?'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Gist", statement: "Gist = overall meaning questions." }], steps: [
            { reasoning: "'Mainly about' and 'Why is the speaker calling' ask for gist → 2.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u6-gi-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Why shouldn't you try to catch every word on the first listen?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recordings only play once anyway" },
            { id: "b", text: "It is impossible and makes you miss the main idea" },
            { id: "c", text: "Words are not important in English" },
            { id: "d", text: "It is rude to the speaker" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Gist", statement: "First listen targets the overall sense." }], steps: [
            { reasoning: "You cannot catch every word; focusing on the main idea is realistic and effective.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** impossible and distracts from the main idea" },
        },
        {
          id: "oles-u6-gi-q12", difficulty: "challenge", totalMarks: 2,
          stem: "How many categories does gist listening target: topic, purpose, situation?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Gist listening", statement: "Topic + purpose + situation." }], steps: [
            { reasoning: "topic, purpose, situation → 3.", marks: 1, markCode: "AO1" },
            { reasoning: "Count is correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u6-gi-q13", difficulty: "foundation", totalMarks: 1,
          stem: "'Gist' means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The written transcript" },
            { id: "b", text: "The speaker's name" },
            { id: "c", text: "Every exact detail" },
            { id: "d", text: "The general sense of what is heard" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Gist", statement: "General sense without detail." }], steps: [{ reasoning: "Gist = overall meaning.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** general sense" },
        },
        {
          id: "oles-u6-gi-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how context and prediction improve gist listening.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Prediction", statement: "Context + questions focus attention." }], steps: [
            { reasoning: "Background knowledge lets you predict likely topics and words.", marks: 1, markCode: "AO2" },
            { reasoning: "Reading questions before listening tells you what to listen for.", marks: 1, markCode: "AO2" },
            { reasoning: "This focuses attention so the main idea is caught on first hearing.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Context and prediction focus attention on the likely main idea." },
        },
        {
          id: "oles-u6-gi-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many times does a gist recording usually play in the exam — once or twice? Give the number.",
          response: { type: "numeric", parts: [ { label: "a", answer: 1, unit: "time" } ] },
          markscheme: { principles: [{ kind: "skill", name: "Gist listening", statement: "First play = gist." }], steps: [
            { reasoning: "The first (and usually only) play is for catching the gist.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "1" },
        },
        {
          id: "oles-u6-gi-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which is the best first-listen strategy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignore who is speaking" },
            { id: "b", text: "Catch the topic and the speaker's purpose" },
            { id: "c", text: "Guess all the answers immediately" },
            { id: "d", text: "Write down every word you hear" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Gist", statement: "Topic + purpose on first listen." }], steps: [
            { reasoning: "Topic and purpose are the gist targets.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** topic and purpose" },
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
            { id: "a", text: "Both" },
            { id: "b", text: "Monday" },
            { id: "c", text: "Neither" },
            { id: "d", text: "Tuesday" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Corrections", statement: "Corrections override earlier info." }], steps: [{ reasoning: "The correction 'Tuesday' replaces 'Monday'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Tuesday" },
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
        {
          id: "oles-u6-de-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Signal phrases like 'the meeting is on Tuesday' help you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Catch specific details" },
            { id: "b", text: "Spell the speaker's name" },
            { id: "c", text: "Predict the next topic" },
            { id: "d", text: "Understand the main idea only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Signal phrases", statement: "They flag specific information." }], steps: [{ reasoning: "Signal phrases mark where details follow.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** catch specific details" },
        },
        {
          id: "oles-u6-de-q6", difficulty: "core", totalMarks: 2,
          stem: "A speaker says 'The class is on Friday — sorry, Thursday.' What is the correct answer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Neither day" },
            { id: "b", text: "Thursday" },
            { id: "c", text: "Both days" },
            { id: "d", text: "Friday" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Corrections", statement: "The corrected version wins." }], steps: [
            { reasoning: "'Sorry' signals a correction → Thursday.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** Thursday" },
        },
        {
          id: "oles-u6-de-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many signal words are in this sequence: 'first... second... finally'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Signal phrases", statement: "Count the listed signals." }], steps: [
            { reasoning: "first, second, finally → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u6-de-q8", difficulty: "core", totalMarks: 2,
          stem: "You hear a phone number in a recording. What should you do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignore it completely" },
            { id: "b", text: "Memorise it for later" },
            { id: "c", text: "Write the digits immediately" },
            { id: "d", text: "Wait for the speaker to repeat" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Numbers", statement: "Write digits as you hear them." }], steps: [
            { reasoning: "Memory of exact numbers is unreliable — write immediately.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(c)** write digits immediately" },
        },
        {
          id: "oles-u6-de-q9", difficulty: "core", totalMarks: 2,
          stem: "Give two words or phrases that signal a speaker is correcting themselves.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Corrections", statement: "Correction signals flag the real answer." }], steps: [
            { reasoning: "Any two: 'sorry', 'I mean', 'actually', 'no wait', 'let me correct that'.", marks: 1, markCode: "AO2" },
            { reasoning: "Both valid.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'sorry' and 'I mean'." },
        },
        {
          id: "oles-u6-de-q10", difficulty: "core", totalMarks: 1,
          stem: "How many details are in this announcement: 'The tour meets at 9 at the museum'? (Count time and place only.)",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Details", statement: "Identify specific facts." }], steps: [
            { reasoning: "Time (9) and place (museum) → 2 details.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u6-de-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Why do speakers often mention a wrong option first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The speaker makes real mistakes" },
            { id: "b", text: "It tests whether you catch the correction" },
            { id: "c", text: "It is a speaking habit with no purpose" },
            { id: "d", text: "To make the recording longer" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Distractors", statement: "Wrong options test careful listening." }], steps: [
            { reasoning: "Wrong-then-correct is a deliberate test of attention.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** tests the correction" },
        },
        {
          id: "oles-u6-de-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A meeting is moved from 10 o'clock to 11 o'clock. How many hours later is it now?",
          response: { type: "numeric", parts: [ { label: "a", answer: 1, unit: "hour" } ] },
          markscheme: { principles: [{ kind: "skill", name: "Numbers", statement: "Calculate time differences." }], steps: [
            { reasoning: "11 − 10 = 1 hour later.", marks: 1, markCode: "AO1" },
            { reasoning: "Calculation correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "1 hour" },
        },
        {
          id: "oles-u6-de-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A 'distractor' in listening is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The main idea of the talk" },
            { id: "b", text: "A type of signal phrase" },
            { id: "c", text: "The speaker's correction" },
            { id: "d", text: "Information that sounds relevant but is not the answer" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Distractor", statement: "Sounds relevant but is not the answer." }], steps: [{ reasoning: "Distractors trick careless listeners.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** sounds relevant but wrong" },
        },
        {
          id: "oles-u6-de-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between listening for gist and listening for detail in an exam context.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Gist vs detail", statement: "Different strategies for different questions." }], steps: [
            { reasoning: "Gist questions ask the overall meaning — catch topic and purpose first.", marks: 1, markCode: "AO2" },
            { reasoning: "Detail questions ask specific facts — use signal phrases and corrections.", marks: 1, markCode: "AO2" },
            { reasoning: "They usually need different plays or different listening passes.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Gist = overall sense first; detail = facts via signals and corrections." },
        },
        {
          id: "oles-u6-de-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many correction signals appear in this sentence: 'Sorry, I mean Thursday, actually.'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Corrections", statement: "Count the correction signals." }], steps: [
            { reasoning: "'Sorry', 'I mean' and 'actually' → 3 signals.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u6-de-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which strategy best handles a fast spoken number like 'two thousand three hundred'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guess the number from context" },
            { id: "b", text: "Skip numbers you cannot catch" },
            { id: "c", text: "Write the digits as you hear them" },
            { id: "d", text: "Wait until the end to write anything" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Numbers", statement: "Immediate recording beats memory." }], steps: [
            { reasoning: "Writing digits immediately preserves accuracy.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(c)** write digits immediately" },
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
