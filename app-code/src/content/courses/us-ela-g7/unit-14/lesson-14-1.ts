import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const REGISTEREXTRACT: TextExtract = {
  title: "Register Practice",
  author: "Written for Akademik Space",
  text: "Informal: 'Hey, what's up? Wanna hang out later?'\n\nFormal: 'Good afternoon. Would you like to meet for refreshments this evening?'\n\nNeutral: 'Hi, do you want to meet later?'",
};

export const lesson141: Lesson = {
  id: "ela7-u14-lesson-14-1",
  code: "14-1",
  title: "Language Usage: Register, Voice, and Style",
  goal: "I CAN adjust language register and style for different audiences and purposes.",
  standards: ["L.7.3a", "L.7.3b"],
  vocabulary: [
    {
      term: "Register",
      definition: "Level of formality in language — formal, informal, neutral.",
    },
    {
      term: "Voice",
      definition: "The author's style — active vs passive, word choice, tone.",
    },
    {
      term: "Active voice",
      definition: "Subject performs action — 'The dog chased the ball.'",
    },
    {
      term: "Passive voice",
      definition: "Subject receives action — 'The ball was chased by the dog.'",
    },
    {
      term: "Tone",
      definition: "The author's attitude — formal, casual, serious, playful.",
    },
    {
      term: "Audience",
      definition:
        "Who will read/hear the writing — determines appropriate register.",
    },
  ],
  concepts: [
    {
      id: "ela7-u14-register",
      title: "Register and audience",
      skill:
        "Choose appropriate formality level for different audiences and purposes.",
      lesson: {
        sections: [
          {
            heading: "Formal vs informal",
            body: "**Formal**: complete sentences, no contractions ('do not'), precise vocabulary, no slang — used in essays, letters to officials, academic writing. **Informal**: contractions, slang, fragments, casual tone — texts to friends, social media. **Neutral**: middle ground — most classroom writing. Match register to audience: 'Hey, what's up?' to a friend vs 'Good afternoon. Would you like to meet?' to a principal.",
          },
          {
            heading: "Voice and tone",
            body: "**Active voice** is stronger: 'The dog chased the ball' (subject does action). **Passive voice** is weaker: 'The ball was chased by the dog' (subject receives action). Use active voice for clarity and energy; passive when the actor is unknown or unimportant. **Tone** matches purpose: serious for arguments, playful for stories, formal for reports.",
          },
        ],
        keyFormulas: [
          {
            name: "Register spectrum",
            statement:
              "Informal (friends) → neutral (classroom) → formal (officials/essays).",
          },
          {
            name: "Active voice",
            statement: "Subject + verb + object — 'Dog chased ball'.",
          },
          {
            name: "Passive voice",
            statement:
              "Object + was/were + past participle — 'Ball was chased'.",
          },
          {
            name: "Audience matching",
            statement: "Register must fit who will read it.",
          },
        ],
        workedExample: {
          problem:
            "Rewrite 'Hey, wanna hang out?' for a formal invitation to a teacher.",
          solution:
            "'Good afternoon, Ms. Smith. Would you be available to meet for refreshments this evening?' — formal register, complete sentences, no contractions, respectful tone.",
        },
      },
      questions: [
        {
          id: "ela7-u14-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REGISTEREXTRACT,
          stem: "Which version is appropriate for writing to a school principal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal" },
              { id: "b", text: "Neutral" },
              { id: "c", text: "Formal" },
              { id: "d", text: "Slang" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Formality level matches audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Principal = authority figure — formal register is appropriate.",
                evidence:
                  "Formal: 'Good afternoon. Would you like to meet for refreshments this evening?'",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Formal — appropriate for authority figures.",
            commonErrors: [
              "Choosing (a) — informal is for friends, not principals.",
            ],
          },
        },
        {
          id: "ela7-u14-register-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REGISTEREXTRACT,
          stem: "Rewrite 'Hey, what's up? Wanna hang out later?' in formal register for a teacher.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register adjustment",
                statement: "Match formality to audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Replace informal greeting: 'Hey, what's up?' → 'Good afternoon' or 'Hello'.",
                evidence: "Hey, what's up?",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Replace casual request: 'Wanna hang out later?' → 'Would you be available to meet this evening?'",
                evidence: "Wanna hang out later?",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Remove contractions and slang — use complete sentences and formal vocabulary.",
                evidence:
                  "Good afternoon. Would you like to meet for refreshments this evening?",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Good afternoon, Ms. Smith. Would you be available to meet for refreshments this evening?'",
            commonErrors: [
              "Keeping contractions — formal register requires 'would you' not 'wanna'.",
            ],
          },
        },
        {
          id: "ela7-u14-register-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REGISTEREXTRACT,
          stem: "Rewrite the informal version in three registers: formal, neutral, and casual. Explain how each suits different audiences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register control",
                statement: "Adjust formality for audience.",
              },
              {
                kind: "skill",
                name: "Audience analysis",
                statement: "Match language to reader.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Formal: 'Good afternoon. Would you be available to meet for refreshments this evening?' — complete sentences, no contractions.",
                evidence:
                  "Formal: 'Good afternoon. Would you like to meet for refreshments this evening?'",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Neutral: 'Hi, do you want to meet later?' — friendly but not overly casual.",
                evidence: "Neutral: 'Hi, do you want to meet later?'",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Casual: 'Hey, wanna hang out later?' — contractions, slang, fragments.",
                evidence: "Informal: 'Hey, what's up? Wanna hang out later?'",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each suits different audiences: formal for officials, neutral for classmates, casual for friends.",
                evidence: "different audiences",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Formal: 'Good afternoon. Would you be available to meet for refreshments this evening?' Neutral: 'Hi, do you want to meet later?' Casual: 'Hey, wanna hang out later?' — each matches different audience expectations.",
            commonErrors: [
              "Using same register for all — must adapt to audience.",
            ],
          },
        },
        {
          id: "ela7-u14-register-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REGISTEREXTRACT,
          parts: [
            {
              label: "a",
              prompt:
                "Convert 'The ball was chased by the dog' to active voice.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why active voice is usually stronger.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Active vs passive",
                statement: "Active is clearer and more direct.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'The dog chased the ball' — subject (dog) performs action.",
                evidence: "The ball was chased by the dog",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Active voice is more direct — subject does action; passive is wordier and less clear.",
                evidence: "Active voice",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'The dog chased the ball.' (b) Active is more direct — subject performs action; passive is wordier and weaker.",
            commonErrors: [
              "Keeping passive — 'The ball was chased' buries the actor.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u14-register2",
      title: "Style and voice in writing",
      skill:
        "Develop consistent voice and style appropriate to genre and purpose.",
      lesson: {
        sections: [
          {
            heading: "Voice consistency",
            body: "**Voice** is the author's personality in writing — consistent across the piece. A formal essay has serious, measured voice; a story can have playful, conversational voice. Consistency means not shifting randomly: don't start formal then become casual without reason. Voice should match genre and purpose.",
          },
          {
            heading: "Style elements",
            body: "**Style** includes: sentence length (short = punchy, long = flowing), word choice (simple vs sophisticated), imagery (figurative language), rhythm (repetition, parallel structure). Style serves purpose — persuasive writing uses strong, direct style; descriptive writing uses vivid imagery; narrative uses varied pacing.",
          },
        ],
        keyFormulas: [
          {
            name: "Voice",
            statement: "Author's personality — consistent across piece.",
          },
          {
            name: "Style",
            statement: "Sentence length, word choice, imagery, rhythm.",
          },
          {
            name: "Genre matching",
            statement: "Style should fit genre and purpose.",
          },
        ],
        workedExample: {
          problem:
            "What's inconsistent about: 'The data shows correlation. Yo, this is super cool though!' in an essay?",
          solution:
            "Voice shift — 'The data shows correlation' is formal/academic; 'Yo, this is super cool' is casual/slang. Inconsistent register undermines credibility. Choose one voice and maintain it.",
        },
      },
      questions: [
        {
          id: "ela7-u14-register2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REGISTEREXTRACT,
          stem: "What is 'voice' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's personality/style in writing" },
              { id: "b", text: "The narrator's gender" },
              { id: "c", text: "The volume you speak at" },
              { id: "d", text: "The author's accent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Voice",
                statement: "Author's personality in writing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Voice = author's style/personality expressed through word choice, tone, rhythm.",
                evidence: "the author's style",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. The author's personality/style in writing.",
            commonErrors: ["Confusing with spoken voice — it's written style."],
          },
        },
        {
          id: "ela7-u14-register2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REGISTEREXTRACT,
          stem: "Identify the voice inconsistency: 'The data shows correlation. Yo, this is super cool though!'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice consistency",
                statement: "Maintain consistent style.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'The data shows correlation' — formal/academic voice.",
                evidence: "The data shows correlation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Yo, this is super cool though!' — casual/slang voice.",
                evidence: "Yo, this is super cool though!",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Inconsistent register undermines credibility — choose one voice for the piece.",
                evidence: "inconsistent",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Formal 'The data shows' vs casual 'Yo, super cool' — inconsistent voice undermines credibility.",
            commonErrors: ["Saying it's 'fine' — mixing registers is jarring."],
          },
        },
        {
          id: "ela7-u14-register2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REGISTEREXTRACT,
          stem: "Rewrite the passage maintaining a consistent formal voice throughout. Show your revision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice maintenance",
                statement: "Consistent style throughout.",
              },
              {
                kind: "skill",
                name: "Formal register",
                statement: "Appropriate for academic writing.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Keep formal: 'The data shows a correlation between variables.'",
                evidence: "The data shows correlation",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Replace casual: 'Yo, this is super cool though!' → 'This finding is particularly noteworthy.'",
                evidence: "Yo, this is super cool though!",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Maintain formal register throughout — complete sentences, precise vocabulary, no slang.",
                evidence: "super cool",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The revision reads as cohesive academic writing with consistent voice.",
                evidence: "correlation",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The data shows a correlation between the variables. This finding is particularly noteworthy.' — consistent formal voice throughout.",
            commonErrors: [
              "Keeping some casual elements — must be consistent.",
            ],
          },
        },
        {
          id: "ela7-u14-register2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REGISTEREXTRACT,
          parts: [
            {
              label: "a",
              prompt: "Name two style elements that create voice.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how sentence length affects style.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Style analysis",
                statement: "Elements create voice and effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sentence length and word choice (or imagery/rhythm).",
                evidence: "the author's style",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Short sentences = punchy/urgent; long sentences = flowing/thoughtful — affects rhythm and tone.",
                evidence: "sentence length",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Sentence length and word choice. (b) Short = punchy/urgent; long = flowing/thoughtful — affects rhythm and tone.",
            commonErrors: ["Listing elements without explaining effect."],
          },
        },
      ],
    },
  ],
};
