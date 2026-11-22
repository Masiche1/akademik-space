import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cipe-u1-lesson-1-6",
  code: "1-6",
  title: "Stage 1 — Speaking, Listening and First Writing",
  goal: "I CAN listen, speak in sentences and write my first words.",
  standards: ["Cambridge Primary English 0058 Stage 1: speaking, listening and writing",
  "Cambridge Primary English 0058 framework substrands: 1SLm, 1SLs, 1SLg, 1SLp, 1Wc, 1SLr"],
  stage: 1,
  vocabulary: [
    { term: "Listen", definition: "Pay attention to sounds and words others make." },
    { term: "Sentence", definition: "A group of words that makes sense, like 'I like cats.'" },
    { term: "Label", definition: "A word that names a picture." },
    { term: "Rhyme", definition: "Words that end with the same sound, like cat and hat." },
    { term: "Take turns", definition: "Speak one at a time and let others have their turn." },
  ],
  concepts: [
    {
      id: "cipe-u1-s6-speaking-writing",
      title: "Speaking, listening and first writing",
      skill: "Use sentences when speaking, follow instructions and label pictures at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Speaking and listening",
            body: "Good listeners look at the speaker, wait for their turn and follow instructions. When you speak, use a whole sentence — 'I want the red one, please' is better than just 'red'. Rhyming games and songs build sound awareness that helps reading later.",
          },
          {
            heading: "First writing",
            body: "Stage 1 writers copy letters, write their own name and label pictures with words. Every sentence starts with a capital letter and ends with a full stop. Writing about things you can see and touch first makes it easier.",
          },
        ],
        keyFormulas: [
          { name: "Sentence", statement: "Capital start + words that make sense + full stop" },
          { name: "Label", statement: "Name the thing in the picture" },
        ],
        workedExample: {
          problem: "Write a label for a picture of a dog.",
          solution: "'Dog' — or a full sentence: 'This is a dog.' with capital and full stop.",
        },
      },
      questions: [
        {
          id: "cipe-u1-sw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a full sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "and the" },
            { id: "b", text: "The dog ran." },
            { id: "c", text: "running fast" },
            { id: "d", text: "dog" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sentence", statement: "Words that make complete sense together." }],
            steps: [{ reasoning: "'The dog ran.' makes complete sense.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The dog ran.",
          },
        },
        {
          id: "cipe-u1-sw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word rhymes with 'cat'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhyme", statement: "Words ending with the same sound." }],
            steps: [
              { reasoning: "'hat', 'bat', 'mat' end with the same sound as cat.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: e.g. hat.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "hat / bat / mat",
          },
        },
        {
          id: "cipe-u1-sw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a label for a picture of a sun.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Label writing", statement: "Name the picture with correct letters." }],
            steps: [
              { reasoning: "Identify the picture: a sun.", marks: 1, markCode: "AO2" },
              { reasoning: "Write the word 'sun' with a capital S.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'Sun' or 'This is the sun.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Sun",
          },
        },
        {
          id: "cipe-u1-sw-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "What should you do when someone else is talking?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Taking turns", statement: "Listen while others speak." }],
            steps: [
              { reasoning: "Look at the speaker.", marks: 1, markCode: "AO2" },
              { reasoning: "Wait quietly for your turn.", marks: 1, markCode: "AO2" },
              { reasoning: "Not interrupt or talk over them.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer complete.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Look, listen quietly, wait for your turn",
          },
        },
        {
          id: "cipe-u1-sw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word rhymes with 'hat'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "sun" },
            { id: "b", text: "dog" },
            { id: "c", text: "fish" },
            { id: "d", text: "bat" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhyme", statement: "Words ending with the same sound." }],
            steps: [{ reasoning: "bat ends with the same sound as hat.", marks: 1, markCode: "AO1" }],
            finalAnswer: "bat",
          },
        },
        {
          id: "cipe-u1-sw-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the sentence 'I see a dog'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "I-see-a-dog = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u1-sw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to ask for the red pencil?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'I want the red one, please.'" },
            { id: "b", text: "'Pencil pencil pencil.'" },
            { id: "c", text: "'Red!'" },
            { id: "d", text: "'Give me that.'" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full sentences", statement: "Use whole sentences when speaking." }],
            steps: [{ reasoning: "A full sentence with please is clear and polite.", marks: 1, markCode: "AO2" }],
            finalAnswer: "'I want the red one, please.'",
          },
        },
        {
          id: "cipe-u1-sw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best label for a picture of a cat?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Run" },
            { id: "b", text: "The" },
            { id: "c", text: "And" },
            { id: "d", text: "Cat" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Label writing", statement: "Name the thing in the picture." }],
            steps: [{ reasoning: "A cat is named 'cat' — capital C.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Cat",
          },
        },
        {
          id: "cipe-u1-sw-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the sentence 'This is a dog'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "This-is-a-dog = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u1-sw-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a label for a picture of a tree.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Label writing", statement: "Name the picture with a capital letter." }],
            steps: [
              { reasoning: "Identify the picture: a tree.", marks: 1, markCode: "AO2" },
              { reasoning: "Write 'Tree' with a capital T.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Tree",
          },
        },
        {
          id: "cipe-u1-sw-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is it important to take turns when talking with others?",
          response: { type: "mcq", choices: [
            { id: "a", text: "So only one person ever talks" },
            { id: "b", text: "So nobody can hear" },
            { id: "c", text: "It does not matter" },
            { id: "d", text: "So everyone gets a chance to speak" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Taking turns", statement: "Let others have their turn." }],
            steps: [{ reasoning: "Taking turns is fair — everyone can speak and be heard.", marks: 1, markCode: "AO2" }],
            finalAnswer: "So everyone gets a chance to speak",
          },
        },
        {
          id: "cipe-u1-sw-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence about something you can see, using a rhyming word. Example starter: 'I see a …'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence and rhyme", statement: "Full sentence with a rhyming word." }],
            steps: [
              { reasoning: "A complete sentence is written.", marks: 1, markCode: "AO2" },
              { reasoning: "It contains a rhyming word (e.g. see/tree, cat/hat).", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter and full stop correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I see a tree.'",
          },
        },
        {
          id: "cipe-u1-sw-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three words rhyme with 'sun': fun, run and bun. How many is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Rhyme spotting", statement: "Words ending with the same sound." }],
            steps: [
              { reasoning: "fun, run, bun all end with the -un sound.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-sw-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is it better to say 'I want the red one, please' than just 'red'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is shorter" },
            { id: "b", text: "It is a full sentence and clearer for the listener" },
            { id: "c", text: "It rhymes" },
            { id: "d", text: "It uses more words" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clear speaking", statement: "Whole sentences are clearer." }],
            steps: [{ reasoning: "Full sentences give the listener all the information.", marks: 1, markCode: "AO2" }],
            finalAnswer: "It is a full sentence and clearer",
          },
        },
        {
          id: "cipe-u1-sw-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Imagine three pictures: a dog, a bus and a book. Write a label for each one.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Label writing", statement: "Name each picture correctly." }],
            steps: [
              { reasoning: "Label for dog written (e.g. 'Dog' or 'This is a dog.').", marks: 1, markCode: "AO2" },
              { reasoning: "Label for bus written.", marks: 1, markCode: "AO2" },
              { reasoning: "Label for book written.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letters used correctly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Dog; Bus; Book (or full sentences)",
          },
        },
        {
          id: "cipe-u1-sw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a short talk about something you like. Give one idea for the beginning, one for the middle and one for the end.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Talk structure", statement: "Organise ideas into parts." }],
            steps: [
              { reasoning: "Beginning introduces the topic.", marks: 1, markCode: "AO3" },
              { reasoning: "Middle gives details or examples.", marks: 1, markCode: "AO3" },
              { reasoning: "End finishes the talk clearly.", marks: 1, markCode: "AO3" },
              { reasoning: "Three parts form a sensible plan.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. Start: 'I will tell you about my dog'; Middle: what he does; End: 'He is my best friend.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-sw-notes",
      title: "Speaking and first writing — revision notes",
      summary: "Listen with eyes on speaker; whole sentences; capital + full stop.",
      sections: [
        { heading: "Speaking", body: "Use full sentences; take turns; rhyming games help reading." },
        { heading: "Writing", body: "Copy letters, write your name, label pictures — always punctuate." },
      ],
    },
  ],
};
