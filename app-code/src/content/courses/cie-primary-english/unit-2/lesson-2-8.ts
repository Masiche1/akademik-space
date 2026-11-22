import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "cipe-u2-lesson-2-8",
  code: "2-8",
  title: "Stage 5 — Reports, Letters and Persuasive Writing",
  goal: "I CAN write reports, formal letters and persuasive texts.",
  standards: ["Cambridge Primary English 0058 Stage 5: writing",
  "Cambridge Primary English 0058 framework substrands: 5Wc, 5Wp"],
  stage: 5,
  vocabulary: [
    { term: "Report", definition: "Organised non-fiction about an event or topic." },
    { term: "Formal letter", definition: "Letter using polite, official language and set layout." },
    { term: "Persuasive", definition: "Writing that tries to convince the reader." },
    { term: "Heading", definition: "Title at the top telling the reader the topic." },
    { term: "Connective", definition: "Word linking ideas: however, therefore, for example." },
  ],
  concepts: [
    {
      id: "cipe-u2-s8-reports-letters",
      title: "Reports, letters and persuasion",
      skill: "Structure reports and formal letters and use persuasive techniques at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Reports and letters",
            body: "A report has a heading, an introduction, organised sections (often with sub-headings) and a conclusion — written in formal, factual language. A formal letter follows set layout: sender's address, date, recipient's address, greeting, clear paragraphs, closing and name.",
          },
          {
            heading: "Persuasive writing",
            body: "Persuasive texts aim to convince: state a clear opinion, give strong reasons, use emotive language and rhetorical questions ('Don't you want a safer school?'), and end with a call to action. Address the reader directly where appropriate.",
          },
        ],
        keyFormulas: [
          { name: "Report", statement: "Heading → intro → sections → conclusion" },
          { name: "Persuasive", statement: "Opinion + reasons + emotive language + call to action" },
        ],
        workedExample: {
          problem: "Write the opening sentence of a persuasive letter asking for a school trip.",
          solution: "'I am writing to ask for permission to organise a class trip to the Science Museum, because it would give us hands-on experience no textbook can offer.'",
        },
      },
      questions: [
        {
          id: "cipe-u2-rl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes first in a formal letter layout?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The signature" },
            { id: "b", text: "The sender's address and date" },
            { id: "c", text: "A heading" },
            { id: "d", text: "The main argument" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter layout", statement: "Address and date come first." }],
            steps: [{ reasoning: "Sender's address and date start a formal letter.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Sender's address and date",
          },
        },
        {
          id: "cipe-u2-rl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of a report's heading?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Heading", statement: "Tells the reader the topic at a glance." }],
            steps: [
              { reasoning: "Heading announces the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "To show what the report is about",
          },
        },
        {
          id: "cipe-u2-rl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which technique helps persuade a reader most?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive techniques", statement: "Reasons, emotive language, rhetorical questions." }],
            steps: [
              { reasoning: "Give strong reasons for the opinion.", marks: 1, markCode: "AO2" },
              { reasoning: "Emotive language/rhetorical question involves the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer identifies a valid technique.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. giving reasons and using emotive language",
          },
        },
        {
          id: "cipe-u2-rl-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the closing sentence of a persuasive letter to the headteacher asking for more sports equipment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Call to action", statement: "End by urging the reader to act." }],
            steps: [
              { reasoning: "Restates the request politely.", marks: 1, markCode: "AO2" },
              { reasoning: "Urges action or thanks the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal, polite tone.", marks: 1, markCode: "AO2" },
              { reasoning: "Coherent closing sentence.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'I hope you will consider this request — our team deserves the equipment to succeed.'",
          },
        },
        {
          id: "cipe-u2-rl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of a report's main parts?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sections, heading, introduction" },
            { id: "b", text: "Conclusion, heading, sections" },
            { id: "c", text: "Introduction, conclusion, heading" },
            { id: "d", text: "Heading, introduction, sections, conclusion" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Report structure", statement: "Heading → intro → sections → conclusion." }],
            steps: [{ reasoning: "A report starts with a heading and ends with a conclusion.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Heading, intro, sections, conclusion",
          },
        },
        {
          id: "cipe-u2-rl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What greeting is used in a formal letter when you do not know the recipient's name?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dear Sir or Madam" },
            { id: "b", text: "Yo" },
            { id: "c", text: "Hi there" },
            { id: "d", text: "Hey you" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal letter", statement: "Polite, official language." }],
            steps: [{ reasoning: "'Dear Sir or Madam' is the formal greeting.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Dear Sir or Madam",
          },
        },
        {
          id: "cipe-u2-rl-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A persuasive text has three key parts: state your opinion, give reasons, and end with a call to action. How many parts is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Persuasive structure", statement: "Opinion + reasons + call to action." }],
            steps: [
              { reasoning: "Three parts listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-rl-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the greeting 'Dear Headteacher'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "Dear-Headteacher = 2 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-rl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of a rhetorical question in persuasive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To end the letter" },
            { id: "b", text: "To give a fact" },
            { id: "c", text: "To ask for a real answer" },
            { id: "d", text: "To involve the reader and make them think about the issue" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetorical question", statement: "Involves the reader emotionally." }],
            steps: [{ reasoning: "Rhetorical questions make the reader consider the point.", marks: 1, markCode: "AO2" }],
            finalAnswer: "To involve the reader and make them think",
          },
        },
        {
          id: "cipe-u2-rl-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a formal greeting and closing for a letter to the local council.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal letter", statement: "Polite greetings and closings." }],
            steps: [
              { reasoning: "A formal greeting is written (e.g. 'Dear Sir or Madam').", marks: 1, markCode: "AO2" },
              { reasoning: "A formal closing is written (e.g. 'Yours faithfully').", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Dear Sir or Madam' … 'Yours faithfully'",
          },
        },
        {
          id: "cipe-u2-rl-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is emotive language used in persuasion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The meeting is at three." },
            { id: "b", text: "The bus leaves at nine." },
            { id: "c", text: "Our poor, suffering animals deserve help." },
            { id: "d", text: "There are ten chairs." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Emotive language", statement: "Words that stir feeling." }],
            steps: [{ reasoning: "'Poor, suffering' appeals to emotion.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Our poor, suffering animals deserve help.",
          },
        },
        {
          id: "cipe-u2-rl-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a persuasive opening sentence for a letter asking your school to plant more trees.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive opening", statement: "Clear opinion + reason, polite tone." }],
            steps: [
              { reasoning: "The sentence states a clear request/opinion.", marks: 1, markCode: "AO2" },
              { reasoning: "A reason is given.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal, polite tone appropriate for a letter.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I am writing to ask the school to plant more trees, because they would make our playground cooler and greener.'",
          },
        },
        {
          id: "cipe-u2-rl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many connectives are in this sentence: 'We should recycle, however, many people forget to sort their waste'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Connectives", statement: "Words that join ideas." }],
            steps: [
              { reasoning: "'however' is the connective = 1.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cipe-u2-rl-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main difference between a formal and an informal letter?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Formal letters are shorter" },
            { id: "b", text: "Formal letters use slang" },
            { id: "c", text: "Formal letters use polite language and a set layout; informal letters are relaxed" },
            { id: "d", text: "There is no difference" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter tone", statement: "Formal = polite and structured." }],
            steps: [{ reasoning: "Formal letters follow a set layout and polite tone.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Formal letters use polite language and a set layout",
          },
        },
        {
          id: "cipe-u2-rl-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan a report about 'Our School Trip'. Give a heading and three section headings with one fact or point for each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Report planning", statement: "Heading → sections → conclusion." }],
            steps: [
              { reasoning: "A clear report heading is given.", marks: 1, markCode: "AO2" },
              { reasoning: "Three sensible section headings are planned.", marks: 1, markCode: "AO2" },
              { reasoning: "Each section has a relevant point or fact.", marks: 1, markCode: "AO2" },
              { reasoning: "Sections follow a logical order.", marks: 1, markCode: "AO3" },
              { reasoning: "Factual, formal tone used.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "e.g. Heading: 'Our School Trip' — sections: 'Where we went', 'What we did', 'What we learned' with points under each.",
          },
        },
        {
          id: "cipe-u2-rl-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a persuasive paragraph (3-4 sentences) arguing that your school should have a lunch club, using at least one rhetorical question.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive writing", statement: "Opinion + reasons + rhetorical question." }],
            steps: [
              { reasoning: "Clear opinion stated.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one reason given.", marks: 1, markCode: "AO2" },
              { reasoning: "A rhetorical question is used effectively.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal tone and accurate punctuation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Our school should have a lunch club. It would give students somewhere safe and fun to spend lunchtimes. Wouldn't you rather see students chatting over healthy food than queuing for chips? I urge the headteacher to try it.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-rl-notes",
      title: "Reports, letters, persuasion — revision notes",
      summary: "Report: heading→sections→conclusion; formal letter layout; persuade with reasons.",
      sections: [
        { heading: "Formal writing", body: "Reports organise facts under headings; letters follow set layout and polite tone." },
        { heading: "Persuasion", body: "Clear opinion + reasons + emotive words + call to action." },
      ],
    },
  ],
};
