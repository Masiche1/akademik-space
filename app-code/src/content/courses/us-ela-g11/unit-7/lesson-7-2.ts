import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const GRAMMAR: TextExtract = {
  title: "Grammar Analysis: Agreement and Tense",
  author: "Written for Akademik Space",
  text: "Subject-verb agreement and tense consistency are fundamental to clear writing. Consider:\n\nAgreement error: 'The Senate have confirmed the nominee' (incorrect — 'Senate' is singular).\nCorrect: 'The Senate has confirmed the nominee.'\n\nTense shift error: 'The Senate confirmed the nominee yesterday, and the President will celebrate today' (inconsistent).\nCorrect: 'The Senate confirmed the nominee yesterday, and the President celebrated today.'\n\nThese errors aren't just grammatical pedantry — they create confusion. 'The Senate have confirmed' makes readers wonder if multiple senates exist. 'Confirmed... will celebrate' creates temporal disorientation. Grammar conventions exist to ensure clarity, not to be arbitrary rules.",
};

const REVISION: TextExtract = {
  title: "Revision Analysis: From Draft to Final",
  author: "Written for Akademik Space",
  text: "Draft: 'The service program is good because it helps people and students learn things and it is mandatory so everyone has to do it.'\n\nRevision 1: 'The service program benefits students by providing real-world experience. Because it is mandatory, every student participates.'\n\nRevision 2: 'The mandatory service program ensures all students gain community experience, regardless of personal initiative. However, implementation quality determines whether this produces civic engagement or resentment.'\n\nEach revision improves: Revision 1 adds specificity ('real-world experience') and clarifies causation ('because'). Revision 2 adds nuance ('however,' 'regardless') and sophistication ('implementation quality determines'). Revision isn't just fixing errors — it's refining thinking.",
};

export const lesson72: Lesson = {
  id: "ela11-u7-lesson-7-2",
  code: "7-2",
  title: "Grammar Conventions, Revision, and Spelling",
  goal: "I CAN apply grammar conventions precisely, revise drafts effectively, and demonstrate spelling mastery.",
  standards: [
    "L.11-12.1a",
    "L.11-12.1b",
    "L.11-12.2b",
    "L.11-12.2c",
    "L.11-12.2d",
    "L.11-12.3",
    "W.11-12.5",
  ],
  vocabulary: [
    {
      term: "Subject-verb agreement",
      definition: "Subject and verb match in number.",
    },
    { term: "Tense consistency", definition: "Maintaining same time frame." },
    { term: "Revision", definition: "Improving content and structure." },
    { term: "Editing", definition: "Correcting grammar and mechanics." },
    {
      term: "Homophone",
      definition: "Words sounding alike, different meanings.",
    },
    { term: "Proofreading", definition: "Final check for errors." },
  ],
  concepts: [
    {
      id: "ela11-u7-grammar",
      title: "Grammar conventions",
      skill: "Apply agreement, tense, and usage rules precisely.",
      lesson: {
        sections: [
          {
            heading: "Agreement rules",
            body: "Subject-verb agreement: singular subjects take singular verbs ('The Senate has'), plural take plural ('The senators have'). Collective nouns (Senate, committee) usually singular in American English. Compound subjects with 'and' take plural; with 'or' take nearest subject. Pronoun-antecedent agreement: pronouns must match antecedents in number and gender.",
          },
          {
            heading: "Tense consistency",
            body: "Maintain consistent tense unless shifting for effect. Past narrative stays past ('confirmed... celebrated'); present analysis stays present ('The Senate confirms'). Unintentional shifts confuse readers — 'confirmed... will celebrate' creates temporal disorientation. Tense shifts should be deliberate and clear.",
          },
        ],
        keyFormulas: [
          { name: "Agreement", statement: "Subject and verb match in number." },
          { name: "Tense", statement: "Consistent time frame." },
          { name: "Collective nouns", statement: "Usually singular in AmE." },
        ],
        workedExample: {
          problem:
            "Fix: 'The Senate have confirmed, and the senators will celebrate.'",
          solution:
            "'The Senate has confirmed, and the senators will celebrate' — Senate singular, senators plural.",
        },
      },
      questions: [
        {
          id: "ela11-u7-grammar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GRAMMAR,
          stem: "What's 'subject-verb agreement'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subject and verb match in number" },
              { id: "b", text: "Verbs agree with objects" },
              { id: "c", text: "Verbs agree with tense" },
              { id: "d", text: "Subjects agree with each other" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subject-verb agreement",
                statement: "Number match.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subject and verb must match in number — singular/plural.",
                evidence: "agreement",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Subject and verb match in number.",
            commonErrors: ["Not recognizing agreement."],
          },
        },
        {
          id: "ela11-u7-grammar-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GRAMMAR,
          stem: "Why does tense consistency matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tense consistency",
                statement: "Clarity function.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consistency maintains time frame — reader knows when events occur.",
                evidence: "time frame",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Shifts confuse: 'confirmed... will celebrate' creates temporal disorientation.",
                evidence: "confuse",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Deliberate shifts work: 'The Senate confirmed yesterday. Today, it confirms...' — clear transition.",
                evidence: "deliberate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Consistency maintains time frame; unintentional shifts confuse readers.",
            commonErrors: ["Not recognizing clarity function."],
          },
        },
        {
          id: "ela11-u7-grammar-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GRAMMAR,
          stem: "Analyze how grammar conventions serve clarity rather than arbitrary rules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Grammar purpose",
                statement: "Clarity function.",
              },
              {
                kind: "skill",
                name: "Convention analysis",
                statement: "Why rules exist.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Agreement errors create confusion: 'Senate have' makes readers wonder if multiple exist.",
                evidence: "agreement",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tense shifts disorient: 'confirmed... will celebrate' loses temporal clarity.",
                evidence: "tense",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conventions serve clarity — not arbitrary rules but communication tools.",
                evidence: "clarity",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Grammar conventions serve clarity: agreement errors confuse (multiple senates?), tense shifts disorient (temporal confusion). Rules exist for communication, not pedantry.",
            commonErrors: ["Thinking grammar is arbitrary."],
          },
        },
        {
          id: "ela11-u7-grammar-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GRAMMAR,
          parts: [
            { label: "a", prompt: "What are 'collective nouns'?", marks: 2 },
            {
              label: "b",
              prompt: "How do they function in American English?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Collective nouns",
                statement: "Group nouns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Nouns referring to groups — Senate, committee, team.",
                evidence: "collective",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Usually singular in American English — 'The Senate has.'",
                evidence: "singular",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Group nouns. (b) Usually singular in AmE.",
            commonErrors: ["Using plural verbs."],
          },
        },
      ],
    },
    {
      id: "ela11-u7-revision",
      title: "Revision and Editing",
      skill: "Distinguish revision from editing and apply both effectively.",
      lesson: {
        sections: [
          {
            heading: "Revision vs editing",
            body: "**Revision** = improving content, structure, ideas — 'what are you saying?' **Editing** = correcting grammar, mechanics, style — 'how are you saying it?' Revision happens first (big changes), editing second (fine-tuning). The excerpt shows revision: Draft (vague) → Rev1 (specific) → Rev2 (nuanced). Each revision refines thinking, not just fixing errors.",
          },
          {
            heading: "Effective revision strategies",
            body: "Revision techniques: **restructure** (reorganize for clarity), **specify** (replace vague with precise), **nuance** (add complexity/conditions), **strengthen** (sharpen claims, improve evidence). The excerpt demonstrates all: Revision 1 adds specificity ('real-world experience'), Revision 2 adds nuance ('however,' 'implementation quality'). Revision is thinking work, not just editing.",
          },
        ],
        keyFormulas: [
          { name: "Revision vs editing", statement: "Content vs mechanics." },
          {
            name: "Revision first",
            statement: "Big changes before fine-tuning.",
          },
          {
            name: "Strategies",
            statement: "Restructure, specify, nuance, strengthen.",
          },
        ],
        workedExample: {
          problem: "How does Revision 2 improve on Revision 1?",
          solution:
            "Adds nuance ('however,' 'regardless') and sophistication ('implementation quality determines') — refines thinking.",
        },
      },
      questions: [
        {
          id: "ela11-u7-revision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVISION,
          stem: "What's the difference between revision and editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Revision is spelling" },
              { id: "b", text: "No difference" },
              { id: "c", text: "Editing is first" },
              { id: "d", text: "Revision = content; editing = mechanics" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revision vs editing",
                statement: "Content vs mechanics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revision improves content/structure; editing corrects mechanics.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Revision = content; editing = mechanics.",
            commonErrors: ["Confusing the processes."],
          },
        },
        {
          id: "ela11-u7-revision-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REVISION,
          stem: "How does Revision 2 improve on Revision 1?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision analysis",
                statement: "Improvement strategies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revision 1: adds specificity ('real-world experience') and clarity ('because').",
                evidence: "rev1",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Revision 2: adds nuance ('however,' 'regardless') and sophistication ('implementation quality determines').",
                evidence: "rev2",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: each revision refines thinking — not just fixing errors.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Revision 2 adds nuance and sophistication — refines thinking, not just errors.",
            commonErrors: ["Thinking revision = editing."],
          },
        },
        {
          id: "ela11-u7-revision-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REVISION,
          stem: "Analyze how the revision process demonstrates thinking refinement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision analysis",
                statement: "How process works.",
              },
              {
                kind: "skill",
                name: "Thinking refinement",
                statement: "Revision as cognition.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Draft: vague ('good,' 'helps people') — initial thinking.",
                evidence: "draft",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rev1: specificity ('real-world experience') — clarifies idea.",
                evidence: "rev1",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rev2: nuance ('however,' 'implementation quality') — sophistication.",
                evidence: "rev2",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Revision demonstrates thinking refinement: draft vague → Rev1 specific → Rev2 nuanced. Each stage improves idea quality — revision is cognitive work, not mechanical fixing.",
            commonErrors: ["Thinking revision is just editing."],
          },
        },
        {
          id: "ela11-u7-revision-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REVISION,
          parts: [
            {
              label: "a",
              prompt: "What are four revision strategies?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which does Revision 2 demonstrate?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revision strategies",
                statement: "Improvement methods.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Restructure, specify, nuance, strengthen.",
                evidence: "strategies",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Revision 2 demonstrates nuance ('however,' 'regardless') and sophistication.",
                evidence: "demonstrates",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Restructure, specify, nuance, strengthen. (b) Nuance + sophistication.",
            commonErrors: ["Missing strategies."],
          },
        },
      ],
    },
    {
      id: "ela11-u7-spelling",
      title: "Spelling and Homophones",
      skill: "Master spelling conventions and distinguish homophones.",
      lesson: {
        sections: [
          {
            heading: "Homophones",
            body: "Homophones = words sounding alike, different meanings/spellings: **their/there/they're**, **your/you're**, **its/it's**, **affect/effect**, **principal/principle**, **accept/except**. Errors create confusion — 'their going' vs 'they're going' vs 'there going.' Spell-check doesn't catch homophone errors because they're spelled correctly but used incorrectly.",
          },
          {
            heading: "Spelling mastery",
            body: "Spelling strategies: **memorize common words**, **learn patterns** (i before e except after c), **use mnemonics**, **proofread carefully**. Academic writing requires precision — spelling errors undermine credibility. Homophone errors are particularly damaging because they suggest carelessness.",
          },
        ],
        keyFormulas: [
          { name: "Homophones", statement: "Sound alike, different meaning." },
          {
            name: "Common errors",
            statement: "their/there/they're, your/you're, its/it's.",
          },
          {
            name: "Spell-check limits",
            statement: "Catches spelling, not usage.",
          },
        ],
        workedExample: {
          problem: "Distinguish 'their,' 'there,' 'they're.'",
          solution: "Their = possessive; there = location; they're = they are.",
        },
      },
      questions: [
        {
          id: "ela11-u7-spelling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GRAMMAR,
          stem: "What's a 'homophone'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Word with same spelling" },
              { id: "b", text: "Technical term" },
              { id: "c", text: "Words sounding alike, different meanings" },
              { id: "d", text: "Long word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophone",
                statement: "Sound alike.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homophone = words sounding alike, different spellings/meanings.",
                evidence: "homophone",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Words sounding alike, different meanings.",
            commonErrors: ["Not recognizing homophones."],
          },
        },
        {
          id: "ela11-u7-spelling-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GRAMMAR,
          stem: "Distinguish 'their,' 'there,' 'they're.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Homophone usage",
                statement: "Correct application.",
              },
            ],
            steps: [
              {
                reasoning: "Their = possessive ('their books').",
                evidence: "their",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "There = location ('over there').",
                evidence: "there",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "They're = they are ('they're going').",
                evidence: "they're",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Their = possessive; there = location; they're = they are.",
            commonErrors: ["Confusing homophones."],
          },
        },
        {
          id: "ela11-u7-spelling-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GRAMMAR,
          stem: "Analyze why homophone errors are particularly damaging in academic writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Error analysis",
                statement: "Why homophones matter.",
              },
              {
                kind: "skill",
                name: "Credibility study",
                statement: "How errors affect perception.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Spell-check doesn't catch: words spelled correctly but used wrong.",
                evidence: "spell-check",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Creates confusion: 'their going' vs 'they're going' — different meanings.",
                evidence: "confusion",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Undermines credibility: suggests carelessness in academic context.",
                evidence: "credibility",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Homophone errors are damaging: spell-check doesn't catch them (spelled correctly, used wrong), creates confusion (different meanings), undermines credibility (suggests carelessness).",
            commonErrors: ["Thinking spell-check catches all errors."],
          },
        },
        {
          id: "ela11-u7-spelling-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GRAMMAR,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between 'its' and 'it's'?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "its vs it's",
                statement: "Possessive vs contraction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Its = possessive; it's = it is.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Examples: 'its color' (possessive), 'it's raining' (it is).",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Its = possessive; it's = it is. (b) 'Its color' vs 'it's raining.'",
            commonErrors: ["Confusing the two."],
          },
        },
      ],
    },
    {
      id: "ela11-u7-integrated-r2",
      title: "Integrated Language Conventions Practice",
      skill:
        "Integrate grammar, revision, and spelling in comprehensive language mastery.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Language mastery requires: **grammar** (agreement, tense), **revision** (content improvement), **spelling** (homophones, conventions). These work together: grammar ensures clarity, revision refines thinking, spelling maintains credibility. Exam questions often require editing passages for all three.",
          },
          {
            heading: "Exam application",
            body: "Comprehensive editing: check grammar → revise content → proofread spelling. Each skill alone is partial; together ensure polished writing.",
          },
        ],
        keyFormulas: [
          { name: "Three skills", statement: "Grammar + revision + spelling." },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine language checks." },
        ],
        workedExample: {
          problem: "How would you comprehensively edit a draft?",
          solution:
            "Grammar (agreement/tense) → revision (content) → spelling (homophones) → proofread.",
        },
      },
      questions: [
        {
          id: "ela11-u7-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVISION,
          stem: "What three language skills are needed for comprehensive editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only grammar" },
              { id: "b", text: "Only punctuation" },
              { id: "c", text: "Grammar + revision + spelling" },
              { id: "d", text: "Only spelling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive editing",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grammar + revision + spelling = comprehensive editing.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Grammar + revision + spelling.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u7-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: REVISION,
          stem: "Apply two language skills to the revision excerpt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revision: Rev1 adds specificity, Rev2 adds nuance — content improvement.",
                evidence: "revision",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Grammar: 'because it is mandatory' — correct agreement/tense.",
                evidence: "grammar",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Spelling: 'regardless,' 'implementation' — correct conventions.",
                evidence: "spelling",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Revision (specificity/nuance), grammar (correct agreement), spelling (conventions).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u7-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REVISION,
          stem: "Write an analysis paragraph on how revision improves writing beyond error correction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Draft: vague ('good,' 'helps people') — initial thinking.",
                evidence: "draft",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rev1: specificity ('real-world experience') — clarifies idea.",
                evidence: "rev1",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rev2: nuance ('however,' 'implementation quality') — sophistication.",
                evidence: "rev2",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Revision improves beyond errors: draft vague → Rev1 specific → Rev2 nuanced. Each stage refines thinking — revision is cognitive work improving idea quality, not just mechanical fixing.'",
            commonErrors: ["Thinking revision = editing."],
          },
        },
        {
          id: "ela11-u7-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: REVISION,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated editing stronger than single-skill?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together ensure polished writing.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: grammar+revision+spelling shows comprehensive quality — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together ensure quality. (b) Three skills show comprehensive polish.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
