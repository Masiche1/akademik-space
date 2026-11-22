import type { Lesson } from "../../../types.ts";
import {
  audiencePurposeQuestions,
  purposeTypesQuestions,
} from "./expanded-questions.ts";

export const lesson31: Lesson = {
  id: "mll2-u3-lesson-3-1",
  code: "3-1",
  title: "Audience and Purpose",
  goal: "I CAN identify who a text is for and why it was written, and adjust my own writing to match.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Audience", definition: "The people a text is written for." },
    { term: "Purpose", definition: "The reason a text is written — to inform, persuade, entertain or express." },
    { term: "Register", definition: "The level of formality in language — casual, neutral or formal." },
    { term: "Tone", definition: "The attitude of the writer toward the subject and reader." },
    { term: "Context", definition: "The situation a text is written in — who, where, when and why." },
  ],
  concepts: [
    {
      id: "mll2-u3-audience-purpose",
      title: "Who and why",
      skill: "Identify a text's audience and purpose and choose appropriate language.",
      lesson: {
        sections: [
          {
            heading: "Audience",
            body: "Every text is written **for someone** — its **audience**. A birthday card is for a friend; a newspaper report is for the general public; a text message is for one person. The audience decides how formal your language should be.",
          },
          {
            heading: "Purpose",
            body: "Every text is written **for a reason** — its **purpose**. Common purposes: **inform** (news report), **persuade** (advertisement), **entertain** (story), **express** (diary, poem). Your purpose decides what you say and how.",
          },
          {
            heading: "Matching language to audience",
            body: "With a friend you can be casual: 'Hey, wanna hang out?' With a teacher or stranger you need politeness: 'Dear Mr Silva, I would like to ask...' Match **tone**, **vocabulary** and **structure** to who will read it.",
          },
        ],
        keyFormulas: [
          { name: "Audience + purpose", statement: "Ask: Who is this for? Why am I writing it? Then choose language to match." },
        ],
        workedExample: {
          problem: "Identify audience and purpose: 'Attention shoppers! Buy one, get one free this weekend only!'",
          solution: "Audience: shoppers/customers. Purpose: to persuade people to buy — it's an advertisement.",
        },
      },
      questions: [
        {
          id: "mll2-u3-audience-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'audience' of a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The person who wrote it" },
              { id: "b", text: "The length of the text" },
              { id: "c", text: "The people the text is written for" },
              { id: "d", text: "The setting of the story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The audience is the intended reader(s) of a text." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): audience = who it's written for — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The people the text is written for",
          },
        },
        {
          id: "mll2-u3-audience-purpose-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Invitations",
            author: "Written for Akademik Space",
            text: "To a friend: 'Hey! Party at mine Saturday — bring snacks!'\n\nTo parents: 'Dear Mr and Mrs Patel, we are hosting a birthday party for our son on Saturday at 3pm. We would be delighted if you could attend.'",
          },
          stem: "Explain how the two invitations differ in audience and language.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register and audience", statement: "Casual language suits friends; formal language suits parents and adults." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): audience — friend vs parents; register — casual ('Hey!', 'wanna' style) vs formal ('Dear', 'we would be delighted').", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): the formal version gives more details (time, host) and polite phrasing because adults expect clarity and courtesy.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Friend version is casual and brief; parents version is formal with full details and polite phrasing — language matches the audience.",
          },
        },
        {
          id: "mll2-u3-audience-purpose-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            text: "TO ALL STUDENTS: The school library will be closed this Friday for stocktaking. Please return all borrowed books by Thursday. We apologize for any inconvenience.",
          },
          stem: "Identify the audience, purpose and tone of this notice. Explain how the language suits them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context and register", statement: "Formal notices use clear, polite, impersonal language for a defined audience." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): audience — all students; purpose — to inform about the closure and request book returns.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): tone is formal and polite — 'TO ALL STUDENTS', 'We apologize for any inconvenience'.", evidence: "We apologize for any inconvenience", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): the structure — headline, instruction, deadline, apology — is clear and scannable for busy readers.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Audience: students. Purpose: inform + request action. Tone: formal/polite. Language is clear, structured and courteous.",
          },
        },
        {
          id: "mll2-u3-audience-purpose-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the same message ('library closed Friday') as (i) a note to a friend and (ii) a formal school notice.", marks: 3 },
            { label: "b", prompt: "Explain two language choices that differ between your two versions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Audience adaptation", statement: "Same content, different register — casual vs formal." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): friend version is casual — 'Hey, library's shut Friday, return your books!'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion C (Producing text): formal version — 'Dear Students, the library will be closed this Friday...'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): both versions are correct and complete for their purpose.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): vocabulary difference — slang/abbreviations ('shut', 'books!') vs formal ('closed', 'borrowed materials').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): tone/politeness difference — exclamation and directness vs apology and courtesy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Casual note vs formal notice — both convey the closure. (b) Slang vs formal vocabulary; casual vs polite tone.",
          },
        },
        ...audiencePurposeQuestions,
      ],
    },
    {
      id: "mll2-u3-purpose-types",
      title: "Purposes of texts",
      skill: "Identify whether a text aims to inform, persuade, entertain or express and explain how.",
      lesson: {
        sections: [
          {
            heading: "To inform",
            body: "**Informative** texts give facts: news reports, recipes, instructions, textbooks. They use clear language, facts, lists and explanations. Example: 'The library opens at 9am and closes at 5pm.'",
          },
          {
            heading: "To persuade",
            body: "**Persuasive** texts try to change your mind or make you act: advertisements, speeches, opinion pieces. They use persuasive techniques — 'everyone knows', 'don't miss out', emotional language, calls to action.",
          },
          {
            heading: "To entertain and express",
            body: "**Entertaining** texts are for enjoyment: stories, poems, jokes. **Expressive** texts share feelings: diaries, letters, songs. Many texts combine purposes — a story can entertain AND express.",
          },
        ],
        keyFormulas: [
          { name: "Four purposes", statement: "Inform (facts) / Persuade (change minds) / Entertain (enjoy) / Express (share feelings)." },
        ],
        workedExample: {
          problem: "What is the purpose of: 'Vote for me — I'll make our school the best!'?",
          solution: "To persuade — it's trying to convince people to vote for the speaker.",
        },
      },
      questions: [
        {
          id: "mll2-u3-purpose-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recipe's main purpose is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inform you how to cook a dish" },
              { id: "b", text: "Entertain you with a story" },
              { id: "c", text: "Express the chef's feelings" },
              { id: "d", text: "Persuade you to buy ingredients" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informative purpose", statement: "Informative texts give instructions or facts." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a recipe informs — it tells you how to cook — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Inform you how to cook a dish",
          },
        },
        {
          id: "mll2-u3-purpose-types-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'The museum is open Tuesday to Sunday, 10am to 6pm. Entry is free for children under 12.'\n\nText B: 'Imagine standing before a million-year-old dinosaur! Don't miss this once-in-a-lifetime exhibition!'",
          },
          stem: "Identify the purpose of each text and one language feature that shows it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Purpose and features", statement: "Informative texts use facts and times; persuasive texts use emotional language and commands." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Text A informs — facts (times, prices, rules); Text B persuades — 'Imagine', 'Don't miss', 'once-in-a-lifetime'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the language features match — factual/neutral vs emotional/commanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text A informs (facts, times); Text B persuades ('Imagine', 'Don't miss', emotional appeal).",
          },
        },
        {
          id: "mll2-u3-purpose-types-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "I loved this film. The animation was breathtaking and the story made me cry. But the second half dragged, and some jokes fell flat. Overall, a beautiful film with a few rough edges.",
          },
          stem: "What are the purposes of this film review? Explain how it balances different purposes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Multiple purposes", statement: "A review informs (about the film), expresses (personal reaction) and persuades (recommend/avoid)." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): it informs — tells us the animation is good, second half drags.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): it expresses — 'I loved this film', 'made me cry' share personal feelings.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): it persuades — 'Overall, a beautiful film' recommends it despite flaws — balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The review informs (describes the film), expresses (personal feelings) and persuades (recommends it) — most good texts serve multiple purposes.",
          },
        },
        {
          id: "mll2-u3-purpose-types-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write one sentence that informs (e.g., about a school event).", marks: 1 },
            { label: "b", prompt: "Write one sentence that persuades (e.g., to attend the event).", marks: 1 },
            { label: "c", prompt: "Write one sentence that expresses a feeling about the event.", marks: 1 },
            { label: "d", prompt: "Explain how these three sentences could appear in one text together.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Combined purposes", statement: "Texts often mix informing, persuading and expressing in one piece." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an informative sentence, e.g. 'The concert is on Friday at 7pm in the hall.'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): a persuasive sentence, e.g. 'You won't want to miss the best show of the year!'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C (Producing text): an expressive sentence, e.g. 'I can't wait — I've been looking forward to this all term!'", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion B (Organizing): a poster or announcement could inform (details), persuade (call to action) and express (enthusiasm) together.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion A (Analysing): most real texts serve multiple purposes at once.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'The concert is on Friday at 7pm.' (b) 'You won't want to miss it!' (c) 'I can't wait!' (d) They could form one announcement combining purposes.",
          },
        },
        ...purposeTypesQuestions,
      ],
    },
  ],
};
