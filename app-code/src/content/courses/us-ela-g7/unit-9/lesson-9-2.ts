import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const EDITDRAFT: TextExtract = {
  title: "Student Draft: Editing Practice",
  author: "Written for Akademik Space",
  text: "Their going to the park tomorrow. Its going to be fun. We should bring are snacks and there drinks. Me and my friend are going to play soccer. Its important to stay hydrated. You should'nt forget your sunscreen. Were going to have a blast.",
};

export const lesson92: Lesson = {
  id: "ela7-u9-lesson-9-2",
  code: "9-2",
  title: "Editing: Grammar, Usage, and Mechanics",
  goal: "I CAN identify and correct grammar, usage, and mechanics errors in writing.",
  standards: ["L.7.1", "L.7.2", "L.7.3"],
  vocabulary: [
    {
      term: "Subject-verb agreement",
      definition:
        "The verb must match the subject in number — 'she walks' not 'she walk'.",
    },
    {
      term: "Pronoun case",
      definition:
        "Subject pronouns (I, he, she) vs object pronouns (me, him, her).",
    },
    {
      term: "Homophone",
      definition:
        "Words that sound alike but differ in meaning — their/there/they're.",
    },
    {
      term: "Run-on",
      definition: "Two independent clauses joined without proper punctuation.",
    },
    {
      term: "Comma splice",
      definition: "Two independent clauses joined by only a comma.",
    },
    {
      term: "Modifier",
      definition:
        "A word or phrase that describes another word — misplaced modifiers create confusion.",
    },
  ],
  concepts: [
    {
      id: "ela7-u9-edit",
      title: "Common grammar errors",
      skill:
        "Identify and fix subject-verb agreement, pronoun case, and homophone errors.",
      lesson: {
        sections: [
          {
            heading: "Subject-verb agreement and pronouns",
            body: "The verb must agree with the subject: 'She walks' not 'She walk'. **Pronoun case**: use subject pronouns for subjects ('I went', 'he ran') and object pronouns for objects ('gave it to me', 'told him'). 'Me and my friend' is wrong — 'My friend and I' is correct because 'I' is a subject.",
          },
          {
            heading: "Homophones",
            body: "**Their** = possession ('their house'); **There** = location ('over there'); **They're** = they are ('they're coming'). **Its** = possession ('its color'); **It's** = it is ('it's raining'). **Your** = possession; **You're** = you are. **Shouldn't** never has an apostrophe — it's already a contraction of 'should not'.",
          },
        ],
        keyFormulas: [
          {
            name: "Subject-verb agreement",
            statement: "Singular subject → singular verb; plural → plural.",
          },
          {
            name: "Pronoun case",
            statement: "I/he/she = subjects; me/him/her = objects.",
          },
          {
            name: "Homophone check",
            statement: "Their=possession, There=location, They're=they are.",
          },
          {
            name: "Contractions",
            statement:
              "Don't add apostrophe to already-contracted words like shouldn't.",
          },
        ],
        workedExample: {
          problem:
            "Correct: 'Their going to the park tomorrow. Its going to be fun.'",
          solution:
            "'They're going to the park tomorrow. It's going to be fun.' — 'Their' should be 'They're' (they are), and 'Its' should be 'It's' (it is).",
        },
      },
      questions: [
        {
          id: "ela7-u9-edit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EDITDRAFT,
          stem: "Which word in 'Their going to the park' is incorrect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their" },
              { id: "b", text: "park" },
              { id: "c", text: "tomorrow" },
              { id: "d", text: "going" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophones",
                statement: "Their vs they're vs there.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Their going' needs 'they are going' — the contraction 'They're', not possessive 'Their'.",
                evidence: "Their going to the park",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. 'Their' should be 'They're' (they are).",
            commonErrors: [
              "Choosing 'going' — the verb is fine; the pronoun is wrong.",
            ],
          },
        },
        {
          id: "ela7-u9-edit-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EDITDRAFT,
          stem: "Correct all homophone errors in the first two sentences: 'Their going to the park tomorrow. Its going to be fun.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Homophone correction",
                statement: "Distinguish their/there/they're and its/it's.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Their' → 'They're' because it means 'they are going'.",
                evidence: "Their going",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Its' → 'It's' because it means 'it is going to be fun'.",
                evidence: "Its going to be fun",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Corrected: 'They're going to the park tomorrow. It's going to be fun.'",
                evidence: "tomorrow",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'They're going to the park tomorrow. It's going to be fun.'",
            commonErrors: [
              "Fixing only one error — both 'their' and 'its' need correction.",
            ],
          },
        },
        {
          id: "ela7-u9-edit-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EDITDRAFT,
          stem: "Edit the entire passage for grammar, usage, and mechanics errors. Show your corrected version.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive editing",
                statement: "Fix all grammar, usage, mechanics errors.",
              },
              {
                kind: "skill",
                name: "Homophone mastery",
                statement:
                  "Correct their/there/they're, its/it's, your/you're.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Fix homophones: 'Their' → 'They're', 'Its' → 'It's', 'are' → 'our', 'there' → 'their', 'Me' → 'My friend and I'.",
                evidence: "We should bring are snacks and there drinks",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix pronoun case: 'Me and my friend' → 'My friend and I' (subject pronoun).",
                evidence: "Me and my friend are going",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix apostrophe errors: 'should'nt' → 'shouldn't' (already contracted, apostrophe replaces 'o').",
                evidence: "You should'nt forget",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix 'Were' → 'We're' (we are) and any remaining errors.",
                evidence: "Were going to have a blast",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'They're going to the park tomorrow. It's going to be fun. We should bring our snacks and their drinks. My friend and I are going to play soccer. It's important to stay hydrated. You shouldn't forget your sunscreen. We're going to have a blast.'",
            commonErrors: [
              "Missing 'shouldn't' apostrophe or adding extra apostrophes to plurals.",
            ],
          },
        },
        {
          id: "ela7-u9-edit-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EDITDRAFT,
          parts: [
            {
              label: "a",
              prompt: "Identify the error in 'Me and my friend are going.'",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Correct it and explain the pronoun case rule.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pronoun case",
                statement: "I is subject; me is object.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'Me' should be 'I' — subject pronoun needed.",
                evidence: "Me and my friend",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Correct: 'My friend and I are going.' 'I' is the subject pronoun; 'me' is object ('gave it to me'). Test: remove 'my friend and' — 'I am going' works, 'me am going' doesn't.",
                evidence: "are going to play soccer",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Me' should be 'I'. (b) 'My friend and I are going.' — 'I' is subject pronoun; test by removing 'my friend and' — 'I am going' is correct.",
            commonErrors: [
              "Keeping 'me' because it sounds natural — formal writing requires 'I' as subject.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u9-edit2",
      title: "Sentence boundaries and modifiers",
      skill: "Fix run-ons, comma splices, and misplaced modifiers.",
      lesson: {
        sections: [
          {
            heading: "Run-ons and comma splices",
            body: "A **run-on** joins two independent clauses without punctuation: 'We went to the park we played soccer.' A **comma splice** uses only a comma: 'We went to the park, we played soccer.' Fix with: period ('We went to the park. We played soccer.'), semicolon ('We went to the park; we played soccer.'), or comma+conjunction ('We went to the park, and we played soccer.').",
          },
          {
            heading: "Misplaced modifiers",
            body: "A **modifier** describes a word — it must be next to what it modifies. 'Running quickly, the ball was caught' is wrong — the ball isn't running; the player is. Fix: 'Running quickly, the player caught the ball.' 'She served sandwiches to the children on paper plates' — are the children on plates? Fix: 'She served sandwiches on paper plates to the children.'",
          },
        ],
        keyFormulas: [
          {
            name: "Run-on fixes",
            statement:
              "Period, semicolon, or comma+conjunction between independent clauses.",
          },
          {
            name: "Comma splice",
            statement: "Comma alone between independent clauses is incorrect.",
          },
          {
            name: "Modifier placement",
            statement: "Modifiers must be next to the words they describe.",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'We played soccer it was fun' — and 'Running quickly, the ball was caught.'",
          solution:
            "'We played soccer, and it was fun' (comma splice fix) or 'We played soccer. It was fun.' For the modifier: 'Running quickly, the player caught the ball' — the player is running, not the ball.",
        },
      },
      questions: [
        {
          id: "ela7-u9-edit2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EDITDRAFT,
          stem: "What type of error is 'We should bring are snacks and there drinks'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homophone error" },
              { id: "b", text: "Subject-verb agreement" },
              { id: "c", text: "Run-on" },
              { id: "d", text: "Comma splice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophone",
                statement: "Words that sound alike but differ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'are' should be 'our' (possession) and 'there' should be 'their' (possession) — homophone errors.",
                evidence: "are snacks and there drinks",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Homophone error — 'are'→'our', 'there'→'their'.",
            commonErrors: ["Choosing (c) — no punctuation issue here."],
          },
        },
        {
          id: "ela7-u9-edit2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EDITDRAFT,
          stem: "Correct 'We should bring are snacks and there drinks' and explain each correction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Homophone mastery",
                statement: "Distinguish similar-sounding words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'are' → 'our' — 'our snacks' means belonging to us.",
                evidence: "are snacks",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'there' → 'their' — 'their drinks' means belonging to them.",
                evidence: "there drinks",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Corrected: 'We should bring our snacks and their drinks.'",
                evidence: "We should bring",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'We should bring our snacks and their drinks.' — 'are'→'our' (possession), 'there'→'their' (possession).",
            commonErrors: [
              "Fixing only one word — both 'are' and 'there' are wrong.",
            ],
          },
        },
        {
          id: "ela7-u9-edit2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EDITDRAFT,
          stem: "Write a corrected version of 'Me and my friend are going to play soccer. Its important to stay hydrated.' Fix all errors and explain each type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pronoun case",
                statement: "I is subject; me is object.",
              },
              {
                kind: "skill",
                name: "Homophone mastery",
                statement: "Its vs it's.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "'Me and my friend' → 'My friend and I' — subject pronoun 'I', not object 'me'.",
                evidence: "Me and my friend are going",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Its important' → 'It's important' — contraction of 'it is'.",
                evidence: "Its important to stay hydrated",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Check for run-ons or comma splices — 'play soccer. Its' needs period or conjunction.",
                evidence: "play soccer. Its",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Final: 'My friend and I are going to play soccer. It's important to stay hydrated.'",
                evidence: "to play soccer",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'My friend and I are going to play soccer. It's important to stay hydrated.' — pronoun case fix ('Me'→'I') and homophone fix ('Its'→'It's').",
            commonErrors: [
              "Keeping 'me' — formal writing requires 'I' as subject.",
            ],
          },
        },
        {
          id: "ela7-u9-edit2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EDITDRAFT,
          parts: [
            {
              label: "a",
              prompt:
                "Identify a misplaced modifier in this sentence: 'Running quickly, the ball was caught.'",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Fix it and explain why the original is wrong.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Modifier placement",
                statement: "Modifiers must be next to what they describe.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Running quickly' modifies 'the ball' — but balls don't run.",
                evidence: "Running quickly, the ball was caught",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Fix: 'Running quickly, the player caught the ball.' The player is running; the ball is caught. The modifier must be next to the word it describes.",
                evidence: "the ball was caught",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Running quickly' wrongly modifies 'ball'. (b) 'Running quickly, the player caught the ball' — the player runs, not the ball.",
            commonErrors: [
              "Moving the modifier to the end — 'The ball was caught running quickly' still implies the ball runs.",
            ],
          },
        },
      ],
    },
  ],
};
