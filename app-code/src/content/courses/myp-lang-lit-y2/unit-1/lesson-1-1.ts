import type { Lesson } from "../../../types.ts";
import {
  characterChangeQuestions,
  narrativeVoiceQuestions,
} from "./expanded-questions.ts";

export const lesson11: Lesson = {
  id: "mll2-u1-lesson-1-1",
  code: "1-1",
  title: "Who Is Telling the Story?",
  goal: "I CAN identify first-person and third-person narration and explain how the narrator's voice shapes the story.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Narrator", definition: "The voice or person telling the story." },
    { term: "First person", definition: "Narration using 'I' and 'me' — the narrator is a character in the story." },
    { term: "Third person", definition: "Narration using 'he', 'she', 'they' or names — the narrator is outside the story." },
    { term: "Narrative voice", definition: "The personality and attitude the narrator's words create." },
    { term: "Perspective", definition: "The point of view from which events are told." },
  ],
  concepts: [
    {
      id: "mll2-u1-narrative-voice",
      title: "First person and third person",
      skill: "Distinguish first-person from third-person narration and describe the effect of each.",
      lesson: {
        sections: [
          {
            heading: "First person",
            body: "A **first-person narrator** tells the story with 'I'. The narrator is **inside** the story — usually a character. This makes the story feel close and personal, but the reader only sees what that character sees and knows.",
          },
          {
            heading: "Third person",
            body: "A **third-person narrator** uses 'he', 'she', 'they' or names. The narrator stands **outside** the story and can move between characters, describe wider events, and even comment on what happens. It feels more like a storyteller watching.",
          },
          {
            heading: "Why it matters",
            body: "The same event feels different in each voice. 'I was so scared I couldn't move' (first person) puts you inside the fear. 'She froze, unable to move' (third person) lets you watch her from outside. The narrator's choice shapes how you judge the events.",
          },
        ],
        keyFormulas: [
          { name: "Narrator test", statement: "Look for 'I/me' (first person) vs 'he/she/they/names' (third person)." },
        ],
        workedExample: {
          problem: "Which voice? 'I crept down the stairs, heart pounding. Every sound made me freeze.'",
          solution: "First person — 'I' and 'me' put the reader inside the character's fear.",
        },
      },
      questions: [
        {
          id: "mll2-u1-narrative-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story begins: 'I never told anyone about the summer at the lake.' Who is telling the story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An outside observer" },
              { id: "b", text: "The character who lived through it" },
              { id: "c", text: "The author's parent" },
              { id: "d", text: "A detective" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "First person", statement: "'I' narration means the narrator is a character inside the story." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I never told anyone' is first person — the narrator lived the events, so (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The character who lived through it",
          },
        },
        {
          id: "mll2-u1-narrative-voice-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Version 1: 'I watched the kite snap its string and drift over the fence.'\n\nVersion 2: 'Nadia watched the kite snap its string and drift over the fence.'",
          },
          stem: "Which version is first person and which is third person? Explain one difference in effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrative voice", statement: "First person creates intimacy; third person creates distance and flexibility." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Version 1 is first person ('I watched'); Version 2 is third person ('Nadia watched').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): first person puts the reader inside Nadia's experience; third person lets an outside narrator describe her.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Version 1 = first person, Version 2 = third person. First person feels closer and more personal; third person is more distant and can describe more.",
          },
        },
        {
          id: "mll2-u1-narrative-voice-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Confession",
            author: "Written for Akademik Space",
            text: "I lied to protect her. I know it was wrong — but at the time, all I could see was her frightened face.\n\nYears later, she still doesn't know. And I still don't know how to tell her.",
          },
          stem: "This is a first-person narrative. Explain two effects of the narrator's choice of 'I' for this confession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "First-person effect", statement: "First person creates intimacy, bias and a sense of confession." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I' makes the reader hear the confession directly — it feels personal and honest.", evidence: "I lied to protect her", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the reader is trapped in the narrator's guilt — 'I know it was wrong' shows self-awareness and bias.", evidence: "I know it was wrong", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'I still don't know how to tell her' ends on the narrator's unresolved feeling — first person lets us share the burden.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First person makes it a direct, intimate confession; we share the narrator's guilt and uncertainty — impossible with a distant third-person voice.",
          },
        },
        {
          id: "mll2-u1-narrative-voice-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this extract.",
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "I had never seen lightning like this. It split the sky in two, and for a moment the whole valley lit up — the river, the roofs, my mother's face at the window.",
          },
          parts: [
            { label: "a", prompt: "Identify the narrative perspective and give one word of evidence.", marks: 1 },
            { label: "b", prompt: "Explain two effects the 'I' narrator creates in this scene.", marks: 2 },
            { label: "c", prompt: "Rewrite the extract in third person, keeping the wonder but changing the distance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Perspective shift", statement: "Changing 'I' to 'she/he/they' moves the reader from inside to outside the experience." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): first person — 'I had never seen'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): intimacy — we see the storm through one person's amazed eyes ('I had never seen').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): limited knowledge — we only know what the narrator notices, making 'my mother's face' feel personal.", evidence: "my mother's face at the window", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): a third-person rewrite, e.g. 'She had never seen lightning like this. It split the sky...'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): explains the shift — third person distances us, describing the scene more objectively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) First person ('I had never seen'). (b) Intimacy and limited, personal view. (c) e.g. 'She had never seen lightning like this...' — more distant.",
          },
        },
        ...narrativeVoiceQuestions,
      ],
    },
    {
      id: "mll2-u1-character-change",
      title: "Character and change",
      skill: "Describe how a character changes through a story and support it with evidence.",
      lesson: {
        sections: [
          {
            heading: "Static and dynamic characters",
            body: "A **static** character stays the same from start to finish. A **dynamic** character **changes** — usually because of what happens to them. Most interesting stories have at least one character who grows or changes.",
          },
          {
            heading: "Tracking change",
            body: "To see change, compare the character at the **beginning** and the **end**. Look at what they **do**, **say** and **think**. A character who 'worried about everything' at the start might 'smile for the first time' at the end.",
          },
          {
            heading: "Motivation",
            body: "**Motivation** is why a character does something. Characters act because they want something — safety, friendship, revenge, freedom. Understanding motivation explains behaviour that might otherwise seem strange.",
          },
        ],
        keyFormulas: [
          { name: "Character questions", statement: "What does the character want? How do they change? What evidence shows it?" },
        ],
        workedExample: {
          problem: "A character starts afraid to swim and ends teaching others. Is she static or dynamic?",
          solution: "Dynamic — she changed from afraid to confident, shown by her actions at the end.",
        },
      },
      questions: [
        {
          id: "mll2-u1-character-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'dynamic' character?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A character who is very active" },
              { id: "b", text: "A character who changes during the story" },
              { id: "c", text: "A character who is always angry" },
              { id: "d", text: "A character in a sports story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic character", statement: "A dynamic character undergoes change across the story." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): dynamic = changes during the story — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A character who changes during the story",
          },
        },
        {
          id: "mll2-u1-character-change-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The First Day",
            author: "Written for Akademik Space",
            text: "On the first day, Tom hid behind the bookshelf and refused to join in. By the last day, he was the one organizing the games at break.",
          },
          stem: "Describe how Tom changes and give one piece of evidence for each stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character arc", statement: "Change is shown through actions at the beginning versus the end." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): at the start Tom is shy and withdrawn — 'hid behind the bookshelf and refused to join in'.", evidence: "hid behind the bookshelf", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): by the end he is confident and sociable — 'organizing the games at break'.", evidence: "organizing the games at break", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tom changes from shy and withdrawn to confident and outgoing — from hiding behind the bookshelf to organizing games.",
          },
        },
        {
          id: "mll2-u1-character-change-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Grandma's Keys",
            author: "Written for Akademik Space",
            text: "Grandma kept her keys on a hook by the door. Nobody else was allowed to touch them.\n\nWhen she fell ill, her grandson found the keys still hanging there. He held them carefully — they were heavier than they looked, and they opened a drawer full of letters she'd never sent.",
          },
          stem: "Explain what the keys might represent for Grandma and how the ending changes what we think about her.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbol and character", statement: "Objects can symbolize a character's secrets or emotions; endings can reframe earlier details." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the keys may represent secrets Grandma kept hidden — 'nobody else was allowed to touch them' suggests privacy or control.", evidence: "nobody else was allowed to touch them", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the drawer of 'letters she'd never sent' reveals regret or unspoken feelings — a hidden emotional life.", evidence: "letters she'd never sent", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the ending makes us rethink her — the strict keeper of keys was also someone who held back words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The keys symbolize Grandma's hidden secrets; the unsent letters reveal a private, regretful side — the ending deepens our understanding of her.",
          },
        },
        {
          id: "mll2-u1-character-change-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story.",
          extract: {
            title: "The Borrowed Jacket",
            author: "Written for Akademik Space",
            text: "Leo hated the bright yellow jacket his mum had bought him. He wore it to school anyway, keeping his arms folded.\n\nOn the last day, his friend Marco laughed: 'Is that a sunflower?' Leo's face went red. That evening he hung the jacket in his wardrobe — and didn't take it out again for a year.",
          },
          parts: [
            { label: "a", prompt: "What does Leo think of the jacket at the start? Give evidence.", marks: 2 },
            { label: "b", prompt: "What changes at the end, and what causes it?", marks: 2 },
            { label: "c", prompt: "Is Leo's change permanent? Explain your answer.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character motivation and change", statement: "Characters act from feelings; change needs a cause and evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Leo hates the jacket — 'hated the bright yellow jacket'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): he wears it but hides it — 'keeping his arms folded' shows embarrassment.", evidence: "keeping his arms folded", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Marco's 'sunflower' joke makes Leo's face go red — public embarrassment.", evidence: "Is that a sunflower?", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): he stops wearing it for a year — the teasing caused him to reject the jacket entirely.", evidence: "didn't take it out again for a year", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it seems lasting — a whole year — but 'again' hints he may eventually return to it, so it is partly permanent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) He hates it but wears it anyway, embarrassed — folded arms. (b) Marco's joke humiliates him; he stops wearing it for a year. (c) Mostly permanent — a year — though 'again' leaves room for return.",
          },
        },
        ...characterChangeQuestions,
      ],
    },
  ],
};
