import type { Lesson } from "../../../types.ts";
import {
  pronounsQuestions,
  reportedSpeechQuestions,
} from "./expanded-questions.ts";

export const lesson23: Lesson = {
  id: "mll2-u2-lesson-2-3",
  code: "2-3",
  title: "Pronouns and Reported Speech",
  goal: "I CAN use pronouns correctly and report what someone said using correct tense and pronoun changes.",
  standards: [
    "MYP Language and Literature",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Pronoun", definition: "A word that replaces a noun — I, you, he, she, it, we, they, me, him, her, us, them." },
    { term: "Subject pronoun", definition: "The pronoun doing the action — 'She ran', 'They left'." },
    { term: "Object pronoun", definition: "The pronoun receiving the action — 'He saw her', 'Give it to me'." },
    { term: "Reported speech", definition: "Telling what someone said without using their exact words." },
    { term: "Reporting verb", definition: "The verb that introduces reported speech — said, told, asked, replied." },
  ],
  concepts: [
    {
      id: "mll2-u2-pronouns",
      title: "Using pronouns",
      skill: "Choose correct subject and object pronouns and avoid repetition.",
      lesson: {
        sections: [
          {
            heading: "What are pronouns?",
            body: "**Pronouns** replace nouns so we don't repeat them. 'Amara picked up the bag. Amara carried the bag' is clumsy. 'Amara picked up the bag. **She** carried it' is smooth. Pronouns keep writing flowing.",
          },
          {
            heading: "Subject vs object",
            body: "**Subject pronouns** do the action: I, you, he, she, it, we, they — 'She runs'. **Object pronouns** receive it: me, you, him, her, it, us, them — 'He saw her'. 'Me' never starts a sentence as the subject: 'Me and Sam went' is wrong — 'Sam and I went' or 'We went'.",
          },
          {
            heading: "Clear references",
            body: "Make sure it's always clear **who** a pronoun refers to. 'When Ana met Lena, she was happy' — who is 'she'? Ambiguous. Rewrite: 'Ana was happy to meet Lena.' Clear pronoun reference avoids confusion.",
          },
        ],
        keyFormulas: [
          { name: "Pronoun pairs", statement: "Subject: I, he, she, we, they. Object: me, him, her, us, them." },
        ],
        workedExample: {
          problem: "Fix: 'Me and Tom went to the shop.'",
          solution: "'Tom and I went to the shop' or 'We went to the shop' — 'me' is an object pronoun and can't be a subject.",
        },
      },
      questions: [
        {
          id: "mll2-u2-pronouns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pronoun correctly completes: '___ and I went to the park.' (referring to Sam and you)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Me" },
              { id: "b", text: "Us" },
              { id: "c", text: "Sam" },
              { id: "d", text: "Him" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pronoun case", statement: "Use subject pronouns (or names) as subjects; object pronouns only for objects." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'me' can't be a subject; 'Sam' (the name) or 'We' works — (c).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Sam — 'Sam and I went to the park.'",
          },
        },
        {
          id: "mll2-u2-pronouns-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite to remove repetition using pronouns: 'Maria picked up the book. Maria opened the book. Maria read the book.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pronoun use", statement: "Pronouns replace repeated nouns to improve flow." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'Maria picked up the book. She opened it. She read it.' — pronouns replace 'Maria' and 'the book'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'she' refers to Maria and 'it' refers to the book — references are clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Maria picked up the book. She opened it. She read it.",
          },
        },
        {
          id: "mll2-u2-pronouns-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why this sentence is confusing and fix it: 'When Leo met Omar, he was wearing a red hat.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pronoun reference", statement: "Pronouns must clearly refer to one specific noun." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'he' is ambiguous — it could be Leo or Omar; the reader can't tell who wears the hat.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): fix by repeating the noun — 'When Leo met Omar, Leo was wearing a red hat.' or restructuring.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): clear reference removes ambiguity and helps the reader follow who does what.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'He' could mean Leo or Omar — rewrite as 'When Leo met Omar, Leo was wearing a red hat' (or similar).",
          },
        },
        {
          id: "mll2-u2-pronouns-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Correct this: 'Him and me went to the shop.'", marks: 2 },
            { label: "b", prompt: "Rewrite using pronouns to avoid repeating 'the twins': 'The twins played football. The twins scored a goal. The twins celebrated.'", marks: 2 },
            { label: "c", prompt: "Explain why 'Me and Sam' is wrong but 'Sam and I' is right.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pronoun case and reference", statement: "Subject pronouns (I, we, they) for subjects; object pronouns (me, us, them) for objects." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): 'He and I went to the shop' or 'We went to the shop' — subject pronouns needed.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): 'him' and 'me' are object pronouns and cannot be subjects.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): 'The twins played football. They scored a goal. They celebrated.'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): pronouns 'they' clearly refer back to 'the twins'.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): 'I' is a subject pronoun (the one doing the action); 'me' is an object pronoun — subjects need 'I'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'He and I went...' or 'We went...'. (b) 'They scored a goal. They celebrated.' (c) 'I' is a subject pronoun; 'me' is an object pronoun.",
          },
        },
        ...pronounsQuestions,
      ],
    },
    {
      id: "mll2-u2-reported-speech",
      title: "Reported speech",
      skill: "Convert direct speech into reported speech with correct pronoun and tense changes.",
      lesson: {
        sections: [
          {
            heading: "Direct vs reported",
            body: "**Direct speech** quotes exact words: 'I am tired,' said Sam. **Reported speech** tells what was said: 'Sam said he was tired.' No speech marks, and pronouns/verbs shift.",
          },
          {
            heading: "The changes",
            body: "When reporting: **pronouns** change to match ('I' → 'he/she'), **tenses** often shift back one step ('am' → 'was', 'will' → 'would'), and **time words** change ('today' → 'that day', 'tomorrow' → 'the next day').",
          },
          {
            heading: "Reporting verbs",
            body: "Use the right verb: **said** (neutral), **told** (needs a person: 'told me'), **asked** (for questions), **replied**, **explained**, **admitted**. 'She asked where I lived' reports a question without question marks.",
          },
        ],
        keyFormulas: [
          { name: "Reported speech shifts", statement: "I → he/she; am/is → was; will → would; today → that day; tomorrow → the next day." },
        ],
        workedExample: {
          problem: "Report: 'I will come tomorrow,' said Ana.",
          solution: "Ana said she would come the next day. (I→she, will→would, tomorrow→the next day)",
        },
      },
      questions: [
        {
          id: "mll2-u2-reported-speech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is reported speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She said she was happy." },
              { id: "b", text: "'Are you happy?' he asked." },
              { id: "c", text: "'I am happy,' she said." },
              { id: "d", text: "She shouted 'Hooray!'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reported speech", statement: "Reported speech has no speech marks and shifts pronouns/tenses." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'She said she was happy' is reported — no marks, 'I'→'she', 'am'→'was'. (b)", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** She said she was happy.",
          },
        },
        {
          id: "mll2-u2-reported-speech-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Report this: 'I can't come today,' said Ben.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reported speech shifts", statement: "I→he, can't→couldn't, today→that day." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'Ben said he couldn't come that day.' — pronoun, tense and time word all shift.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'I' → 'he' (Ben), 'can't' → 'couldn't' (tense shift), 'today' → 'that day' (time word).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Ben said he couldn't come that day.",
          },
        },
        {
          id: "mll2-u2-reported-speech-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Convert to reported speech and explain each change: 'Where do you live?' asked the stranger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reported questions", statement: "Questions become statements in reported speech; word order changes." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'The stranger asked where I lived.' — question becomes statement order.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'you' → 'I' (the person being spoken to becomes 'I' in report), 'do live' → 'lived' (tense shift).", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): no question mark or inversion — reported questions follow statement word order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The stranger asked where I lived. — 'you'→'I', 'do'→past, question order removed.",
          },
        },
        {
          id: "mll2-u2-reported-speech-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Report: 'I will finish my homework tonight,' said Maya.", marks: 2 },
            { label: "b", prompt: "Report: 'Can you help me?' asked Tom.", marks: 2 },
            { label: "c", prompt: "Explain why reported speech uses 'said' or 'asked' rather than keeping the question form.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reported speech rules", statement: "Shift pronouns, tenses and time words; questions become statements." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): 'Maya said she would finish her homework that night.' — I→she, will→would, tonight→that night.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): all shifts applied correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): 'Tom asked if I could help him.' — question becomes 'if' clause, can→could.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): pronouns shift (you→I, me→him) and statement word order used.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): reported speech distances the original words — 'said/asked' signals we're relaying, not quoting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Maya said she would finish her homework that night.' (b) 'Tom asked if I could help him.' (c) Reporting signals relayed speech, not exact words.",
          },
        },
        ...reportedSpeechQuestions,
      ],
    },
  ],
};
