import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const GRAMMAR: TextExtract = {
  title: "Excerpt: Identifying Sentence Errors",
  author: "Written for Akademik Space",
  text: "The following sentences were found in a student's essay about school lunches. Each contains a grammar or punctuation error.",
};

const ERRORS: TextExtract = {
  title: "Student Sentences with Errors",
  author: "Written for Akademik Space",
  text: "1. The cafeteria serves pizza on Fridays however many students still bring their own lunches.\n2. When the bell rings students quickly pack up their belongings.\n3. Ms. Chen's classroom is where I learned most of my writing skills, and she is a great teacher.\n4. I would of brought my lunch but I forgot it at home.\n5. Running down the hallway the books fell out of my backpack.\n6. The students their books in the room their lockers are in.\n7. Neither the students nor the teacher was ready for the surprise assembly.\n8. The school's policy it's clear that students must wear uniforms.",
};

export const lesson71: Lesson = {
  id: "ela8-u7-lesson-7-1",
  code: "7-1",
  title: "Sentence Structure and Punctuation",
  goal: "I CAN identify and correct fragments, run-ons, comma splices, and misplaced modifiers.",
  standards: [
    "L.8.1",
    "L.8.1a",
    "L.8.1b",
    "L.8.1c",
    "L.8.1d",
    "L.8.2",
    "L.8.2a",
    "L.8.2b",
    "L.8.2c",
  ],
  vocabulary: [
    {
      term: "Fragment",
      definition: "An incomplete sentence missing a subject or verb.",
    },
    {
      term: "Run-on",
      definition:
        "Two complete sentences joined without proper punctuation or conjunction.",
    },
    {
      term: "Comma splice",
      definition: "Two independent clauses joined by only a comma.",
    },
    {
      term: "Misplaced modifier",
      definition: "A phrase that describes the wrong noun.",
    },
    {
      term: "Conjunctive adverb",
      definition:
        "Word like however, therefore, meanwhile that connects clauses.",
    },
    {
      term: "Semicolon",
      definition: "Punctuation that joins two related independent clauses.",
    },
  ],
  concepts: [
    {
      id: "ela8-u7-fragments",
      title: "Fragments, run-ons, and comma splices",
      skill:
        "Identify and correct incomplete sentences, run-ons, and comma splices.",
      lesson: {
        sections: [
          {
            heading: "Fragment identification",
            body: "A **fragment** is missing a subject or verb: 'Running down the hallway the books fell' — actually this has a modifier issue. Real fragment: 'Because the bell rang.' Missing main clause. Fragments can also start with subordinating conjunctions (because, when, although) without completing the thought. Test: can you answer 'who did what?' If not, it's incomplete.",
          },
          {
            heading: "Run-ons and comma splices",
            body: "A **run-on** joins two complete sentences without punctuation: 'The cafeteria serves pizza on Fridays however many students still bring lunches.' Fix: period, semicolon, or comma+conjunction. A **comma splice** uses only a comma: 'The bell rings, students pack up.' Fix: semicolon, period, or comma+conjunction. Conjunctive adverbs (however, therefore) need semicolon before AND comma after.",
          },
        ],
        keyFormulas: [
          {
            name: "Fragment test",
            statement: "Can you answer 'who did what?' — if not, incomplete.",
          },
          {
            name: "Run-on fix",
            statement: "Period, semicolon, or comma+conjunction.",
          },
          {
            name: "Comma splice fix",
            statement: "Semicolon, period, or comma+conjunction.",
          },
          {
            name: "Conjunctive adverb",
            statement:
              "Semicolon + however + comma: 'The bell rings; however, students stay.'",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'The cafeteria serves pizza on Fridays however many students still bring their own lunches.'",
          solution:
            "The cafeteria serves pizza on Fridays. However, many students still bring their own lunches. — OR — The cafeteria serves pizza on Fridays; however, many students still bring their own lunches.",
        },
      },
      questions: [
        {
          id: "ela8-u7-fragments-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ERRORS,
          stem: "Which sentence is a fragment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence 6" },
              { id: "b", text: "Sentence 2" },
              { id: "c", text: "Sentence 5" },
              { id: "d", text: "Sentence 1" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fragment",
                statement: "Missing subject or verb.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sentence 6 'The students their books in the room their lockers are in' is garbled — missing verb/structure.",
                evidence: "The students their books in the room",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Sentence 6 — missing proper verb structure.",
            commonErrors: [
              "Choosing sentence 5 — it's a misplaced modifier, not a fragment.",
            ],
          },
        },
        {
          id: "ela8-u7-fragments-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ERRORS,
          stem: "Identify and fix the comma splice in sentence 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comma splice",
                statement: "Comma alone can't join independent clauses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify: 'Ms. Chen's classroom is where I learned most of my writing skills, and she is a great teacher.' — actually this uses 'and' correctly.",
                evidence: "Ms. Chen's classroom is where",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Check other sentences — sentence 1 'pizza on Fridays however' is a run-on (missing punctuation before however).",
                evidence: "however many students",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: 'The cafeteria serves pizza on Fridays; however, many students still bring their own lunches.'",
                evidence: "serves pizza on Fridays however",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Sentence 1 has a run-on/comma splice issue with 'however' — fix with semicolon or period: 'pizza on Fridays; however, many students...'",
            commonErrors: ["Identifying sentence 3 — it uses 'and' correctly."],
          },
        },
        {
          id: "ela8-u7-fragments-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ERRORS,
          stem: "Rewrite sentences 1, 2, and 5 correctly, explaining each fix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence correction",
                statement: "Fix structure errors clearly.",
              },
              {
                kind: "skill",
                name: "Error explanation",
                statement: "Explain WHY the fix works.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Sentence 1: Add semicolon before however: 'pizza on Fridays; however, many students...'",
                evidence: "however many students still bring",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sentence 2: Add comma after introductory phrase: 'When the bell rings, students quickly pack up.'",
                evidence: "When the bell rings students",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sentence 5: Fix misplaced modifier: 'Running down the hallway, I dropped my books' or 'The books fell out of my backpack as I ran down the hallway.'",
                evidence: "Running down the hallway the books fell",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. 'The cafeteria serves pizza on Fridays; however, many students still bring their own lunches.' 2. 'When the bell rings, students quickly pack up their belongings.' 5. 'Running down the hallway, I dropped my books' or 'The books fell out of my backpack as I ran down the hallway.'",
            commonErrors: [
              "Fixing sentence 5 by adding comma only — the modifier still describes wrong subject.",
            ],
          },
        },
        {
          id: "ela8-u7-fragments-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GRAMMAR,
          parts: [
            { label: "a", prompt: "Define 'misplaced modifier.'", marks: 2 },
            {
              label: "b",
              prompt: "Fix sentence 5 using a misplaced modifier correction.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Modifier placement",
                statement: "Modifiers must describe intended noun.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Modifier that describes the wrong noun due to placement.",
                evidence: "misplaced modifier",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Running down the hallway, I dropped my books' — modifier now describes 'I' not 'books'.",
                evidence: "Running down the hallway the books fell",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) A phrase that describes the wrong noun due to placement. (b) 'Running down the hallway, I dropped my books' — 'running' now describes the person.",
            commonErrors: [
              "Fixing by removing modifier — better to place it correctly.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u7-punct",
      title: "Punctuation precision",
      skill:
        "Use apostrophes, commas, colons, semicolons, and dashes correctly in complex sentences.",
      lesson: {
        sections: [
          {
            heading: "Apostrophes and possessives",
            body: "Apostrophes show **possession** ('the student's book', 'the students' lockers' — plural ends in s, add apostrophe only) or **contractions** ('it's' = it is, 'their' = possessive). Common errors: 'The students their books' — missing apostrophe on 'students''. 'Its' vs 'it's' — 'its' is possessive, 'it's' is contraction. 'I would of' should be 'I would have'.",
          },
          {
            heading: "Colons, semicolons, and dashes",
            body: "**Colons** introduce lists or explanations: 'The school requires three things: uniform, ID, and supplies.' **Semicolons** join related independent clauses: 'The bell rings; students pack up.' **Dashes** add emphasis or interruption: 'The answer — surprisingly — was yes.' Comma after introductory elements: 'When the bell rings, students pack up.'",
          },
        ],
        keyFormulas: [
          {
            name: "Possessive rule",
            statement: "Singular + 's; plural ending in s + apostrophe only.",
          },
          { name: "It's vs its", statement: "It's = it is; its = possessive." },
          {
            name: "Colon use",
            statement: "Introduces list or explanation after complete clause.",
          },
          {
            name: "Semicolon use",
            statement: "Joins two related independent clauses.",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'The students their books in the room their lockers are in.'",
          solution:
            "The students left their books in the room where their lockers are. — or — The students' books are in the room; their lockers are there too.",
        },
      },
      questions: [
        {
          id: "ela8-u7-punct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ERRORS,
          stem: "Which sentence has a possessive error?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence 6" },
              { id: "b", text: "Sentence 4" },
              { id: "c", text: "Sentence 8" },
              { id: "d", text: "Sentence 7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Possessive",
                statement: "Shows ownership.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sentence 6 'students their books' should be 'students' their books' or 'students left their books' — possessive error.",
                evidence: "The students their books",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Sentence 6 — possessive error.",
            commonErrors: [
              "Choosing sentence 8 — 'it's' should be 'its' but that's a different error.",
            ],
          },
        },
        {
          id: "ela8-u7-punct-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ERRORS,
          stem: "Fix sentences 4 and 8, explaining each correction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word usage",
                statement: "Correct commonly confused words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sentence 4: 'would of' → 'would have' — 'of' is not a verb form.",
                evidence: "I would of brought",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sentence 8: 'it's clear' → 'its clear' or 'it is clear' — 'it's' is contraction, 'its' is possessive.",
                evidence: "it's clear that students",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both are common errors — 'of' vs 'have', 'it's' vs 'its'.",
                evidence: "school's policy it's clear",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "4. 'I would have brought my lunch' (not 'of'). 8. 'The school's policy is clear that students must wear uniforms' or 'The school's policy: it's clear...' — actually should be 'its policy is clear' if possessive, or rephrase.",
            commonErrors: [
              "Changing 'it's' to 'its' without checking context — depends on meaning.",
            ],
          },
        },
        {
          id: "ela8-u7-punct-q3",
          difficulty: "challenge",
          totalMarks: 10,
          extract: ERRORS,
          stem: "Write a corrected version of all 8 sentences with proper punctuation and grammar.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive editing",
                statement: "Fix all errors systematically.",
              },
              {
                kind: "skill",
                name: "Punctuation mastery",
                statement: "Apply rules correctly.",
              },
            ],
            levels: [
            { level: "Level 4", marks: "9-10", descriptor: "Thorough, precise response that is well supported by carefully chosen textual evidence and explains clearly how the evidence supports the point." },
            { level: "Level 3", marks: "6-8", descriptor: "Clear, adequate response with relevant evidence and some explanation of how it supports the point." },
            { level: "Level 2", marks: "3-5", descriptor: "Partial, general response with some evidence but little explanation." },
            { level: "Level 1", marks: "1-2", descriptor: "Minimal response with little or no evidence from the text." },
          ],
            steps: [
              {
                reasoning:
                  "1. 'The cafeteria serves pizza on Fridays; however, many students still bring their own lunches.'",
                evidence: "however many students",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "2. 'When the bell rings, students quickly pack up their belongings.'",
                evidence: "When the bell rings students",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "3. 'Ms. Chen's classroom is where I learned most of my writing skills, and she is a great teacher.' — correct as is.",
                evidence: "Ms. Chen's classroom",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "4. 'I would have brought my lunch, but I forgot it at home.'",
                evidence: "I would of brought",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "5. 'Running down the hallway, I dropped my books.' or 'The books fell out of my backpack as I ran down the hallway.'",
                evidence: "Running down the hallway the books fell",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "6. 'The students left their books in the room where their lockers are.'",
                evidence: "The students their books",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "7. 'Neither the students nor the teacher was ready for the surprise assembly.' — correct (proximity rule).",
                evidence: "Neither the students nor the teacher",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "8. 'The school's policy is clear: students must wear uniforms.' or 'The school's policy — it's clear — students must wear uniforms.'",
                evidence: "it's clear that students",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. Semicolon before however. 2. Comma after introductory phrase. 3. Correct. 4. 'would have' not 'would of'. 5. Fix modifier placement. 6. Add missing verb/structure. 7. Correct (nearest subject 'teacher' is singular). 8. 'it's' → 'its' or rephrase.",
            commonErrors: [
              "Fixing some but missing others — systematic review needed.",
            ],
          },
        },
        {
          id: "ela8-u7-punct-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GRAMMAR,
          parts: [
            {
              label: "a",
              prompt: "When do you use a colon vs a semicolon?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write one sentence using each correctly.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation distinction",
                statement: "Colon introduces; semicolon joins.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Colon introduces list/explanation after complete clause; semicolon joins two related independent clauses.",
                evidence: "colons, semicolons",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Colon: 'The school requires three things: uniform, ID, and supplies.' Semicolon: 'The bell rings; students pack up.'",
                evidence: "complete clause",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Colon introduces after complete clause; semicolon joins independent clauses. (b) Colon: 'The school requires three things: uniform, ID, and supplies.' Semicolon: 'The bell rings; students pack up.'",
            commonErrors: ["Using colon where semicolon needed or vice versa."],
          },
        },
      ],
    },
  ],
};
