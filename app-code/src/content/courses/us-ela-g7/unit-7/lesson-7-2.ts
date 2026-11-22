import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const PUNCPASSAGE: TextExtract = {
  title: "Student Writing Sample",
  author: "Written for Akademik Space",
  text: "me and my friend went to the store we bought snacks and drinks then we went to the park it was fun we played soccer and ate our snacks it was a good day",
};

export const lesson72: Lesson = {
  id: "ela7-u7-lesson-7-2",
  code: "7-2",
  title: "Punctuation and Capitalization",
  goal: "I CAN use correct punctuation and capitalization to clarify meaning and create professional writing.",
  standards: ["L.7.2", "L.7.2a", "L.7.2b"],
  vocabulary: [
    {
      term: "Capitalization",
      definition:
        "Using uppercase letters for proper nouns and sentence starts.",
    },
    { term: "Apostrophe", definition: "Shows possession or contraction." },
    { term: "Comma", definition: "Separates items, clauses, or shows pauses." },
    {
      term: "Quotation marks",
      definition: "Enclose direct speech or quoted material.",
    },
    { term: "Colon", definition: "Introduces a list or explanation." },
    {
      term: "Semicolon",
      definition: "Joins related independent clauses without a conjunction.",
    },
  ],
  concepts: [
    {
      id: "ela7-u7-punct",
      title: "Capitalization and apostrophes",
      skill:
        "Apply capitalization rules and apostrophes for possession and contraction.",
      lesson: {
        sections: [
          {
            heading: "Capitalization rules",
            body: "Capitalize: **sentence starts** ('The storm came'), **proper nouns** ('Monday', 'Mrs. Smith', 'Paris'), **titles** ('The Great Gatsby'), and **pronoun I**. Don't capitalize common nouns ('the store', 'a good day'). The passage 'me and my friend' needs 'My friend and I' — capitalize 'I' and start the sentence.",
          },
          {
            heading: "Apostrophes",
            body: "Apostrophes show **possession** (the dog's bone, the students' books) or **contraction** (don't, it's, we're). For singular possession add 's; for plural possession add s' (students'). Don't confuse 'its' (possessive) with 'it's' (it is). 'The bike's tire' = belonging to the bike; 'The bikes' tires' = belonging to multiple bikes.",
          },
        ],
        keyFormulas: [
          {
            name: "Capitalization",
            statement: "Sentence starts, proper nouns, titles, pronoun I.",
          },
          {
            name: "Apostrophe possession",
            statement: "Singular: 's (dog's); Plural: s' (students').",
          },
          {
            name: "Apostrophe contraction",
            statement: "Replaces missing letters: don't = do not.",
          },
          {
            name: "its vs it's",
            statement: "'Its' = belonging to it; 'It's' = it is.",
          },
        ],
        workedExample: {
          problem:
            "Correct: 'me and my friend went to the store we bought snacks'",
          solution:
            "'My friend and I went to the store; we bought snacks.' — capitalize 'I', start the sentence, add punctuation. Also fix 'me' → 'I' as the subject pronoun.",
        },
      },
      questions: [
        {
          id: "ela7-u7-punct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PUNCPASSAGE,
          stem: "Which word in the passage needs capitalization?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "me" },
              { id: "b", text: "park" },
              { id: "c", text: "store" },
              { id: "d", text: "snacks" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capitalization",
                statement: "Pronoun I is always capitalized.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Me' should be 'I' as the subject pronoun, and 'I' is always capitalized.",
                evidence: "me and my friend",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. 'me' should be 'I' — always capitalized.",
            commonErrors: [
              "Choosing 'store' — common nouns aren't capitalized.",
            ],
          },
        },
        {
          id: "ela7-u7-punct-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PUNCPASSAGE,
          stem: "Correct the capitalization and punctuation in: 'me and my friend went to the store we bought snacks and drinks'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation correction",
                statement: "Apply capitalization and punctuation rules.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capitalize 'I' and fix subject pronoun: 'me' → 'I' or 'My friend and I'.",
                evidence: "me and my friend",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add punctuation between independent clauses: semicolon or period.",
                evidence: "the store we bought snacks",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'My friend and I went to the store; we bought snacks and drinks.'",
                evidence: "we bought snacks and drinks",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'My friend and I went to the store; we bought snacks and drinks.' — or with a period: 'My friend and I went to the store. We bought snacks and drinks.'",
            commonErrors: [
              "Using comma splice: 'My friend and I went to the store, we bought snacks' — needs semicolon or period.",
            ],
          },
        },
        {
          id: "ela7-u7-punct-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PUNCPASSAGE,
          stem: "Rewrite the entire passage with correct capitalization, punctuation, and paragraph breaks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complete punctuation",
                statement: "Apply all capitalization and punctuation rules.",
              },
              {
                kind: "skill",
                name: "Paragraphing",
                statement: "Break into logical paragraphs.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Fix opening: 'My friend and I went to the store. We bought snacks and drinks.'",
                evidence: "me and my friend went to the store",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add paragraph break before 'then we went to the park' — new location = new paragraph.",
                evidence: "then we went to the park",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Punctuate the rest: 'It was fun. We played soccer and ate our snacks.'",
                evidence: "it was fun we played soccer",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Final sentence: 'It was a good day.' — capitalize 'I' where needed.",
                evidence: "it was a good day",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'My friend and I went to the store. We bought snacks and drinks.\n\nThen we went to the park. It was fun — we played soccer and ate our snacks. It was a good day.'",
            commonErrors: [
              "Forgetting to capitalize 'I' throughout, or missing punctuation between sentences.",
            ],
          },
        },
        {
          id: "ela7-u7-punct-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PUNCPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Add apostrophes to show possession: 'the bikes tires' (multiple bikes)",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain the difference between 'its' and 'it's.'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Apostrophe usage",
                statement: "Show possession and distinguish contractions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'The bikes' tires' — plural possession adds s' after s.",
                evidence: "the bikes tires",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Its' = belonging to it (no apostrophe); 'It's' = it is (contraction).",
                evidence: "its vs it's",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'The bikes' tires.' (b) 'Its' shows possession (the bike lost its tire); 'It's' is a contraction (it's raining).",
            commonErrors: [
              "Using 'it's' for possession — 'the bike lost it's tire' is wrong.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u7-punct2",
      title: "Commas, colons, and semicolons",
      skill:
        "Use commas, colons, and semicolons correctly in lists, clauses, and formal writing.",
      lesson: {
        sections: [
          {
            heading: "Comma rules",
            body: "Use commas for: **lists** ('apples, oranges, and bananas'), **compound sentences** ('I ran, and she walked'), **introductory elements** ('After the storm, we went outside'), and **nonessential information** ('My brother, who lives in Texas, is visiting'). Don't use commas between subject and verb or before 'that' in essential clauses.",
          },
          {
            heading: "Colons and semicolons",
            body: "**Colons** introduce lists or explanations: 'We bought three things: snacks, drinks, and sunscreen.' **Semicolons** join related independent clauses without a conjunction: 'The storm passed; we went outside.' Use semicolons in complex lists: 'We visited Paris, France; London, England; and Rome, Italy.'",
          },
        ],
        keyFormulas: [
          {
            name: "Comma uses",
            statement:
              "Lists, compound sentences, introductions, nonessential info.",
          },
          {
            name: "Colon",
            statement:
              "Introduces a list or explanation after a complete sentence.",
          },
          {
            name: "Semicolon",
            statement: "Joins related independent clauses without conjunction.",
          },
        ],
        workedExample: {
          problem:
            "Correct: 'We bought snacks drinks and sunscreen then we went to the park'",
          solution:
            "'We bought snacks, drinks, and sunscreen; then we went to the park.' — commas in the list, semicolon between independent clauses.",
        },
      },
      questions: [
        {
          id: "ela7-u7-punct2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PUNCPASSAGE,
          stem: "Where should a comma go in 'We played soccer and ate our snacks it was fun'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After 'snacks'" },
              { id: "b", text: "After 'fun'" },
              { id: "c", text: "After 'it'" },
              { id: "d", text: "After 'soccer'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comma usage",
                statement: "Separate independent clauses or items.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'We played soccer and ate our snacks' and 'it was fun' are two independent clauses — need punctuation between them.",
                evidence: "We played soccer and ate our snacks it was fun",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. After 'snacks' — separates the two independent clauses.",
            commonErrors: [
              "Choosing (a) — 'soccer and ate' isn't a clause boundary.",
            ],
          },
        },
        {
          id: "ela7-u7-punct2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PUNCPASSAGE,
          stem: "Add commas to the list in: 'we bought snacks and drinks' — then explain why commas are needed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "List punctuation",
                statement: "Commas separate items in a series.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add Oxford comma: 'snacks, drinks, and sunscreen' or just commas between items.",
                evidence: "we bought snacks and drinks",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Commas separate items so the reader knows each is a distinct thing bought.",
                evidence: "snacks and drinks",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Without commas, 'snacks and drinks' could be misread as one item or unclear what was bought.",
                evidence: "and drinks",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'We bought snacks, drinks, and sunscreen.' Commas separate list items for clarity.",
            commonErrors: [
              "Forgetting the comma before 'and' in a list — Oxford comma is standard in formal writing.",
            ],
          },
        },
        {
          id: "ela7-u7-punct2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PUNCPASSAGE,
          stem: "Rewrite the passage using proper punctuation: commas for lists and clauses, a semicolon or period between independent clauses, and a colon if you add a list.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive punctuation",
                statement: "Apply all punctuation rules correctly.",
              },
              {
                kind: "skill",
                name: "Sentence boundaries",
                statement: "Separate independent clauses properly.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "First sentence: 'My friend and I went to the store. We bought snacks, drinks, and sunscreen.'",
                evidence:
                  "me and my friend went to the store we bought snacks and drinks",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add colon for list: 'We bought three things: snacks, drinks, and sunscreen.'",
                evidence: "snacks and drinks",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Second paragraph: 'Then we went to the park. It was fun — we played soccer and ate our snacks.'",
                evidence: "then we went to the park it was fun",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Final: 'It was a good day.' — capitalize and punctuate correctly.",
                evidence: "it was a good day",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'My friend and I went to the store. We bought three things: snacks, drinks, and sunscreen.\n\nThen we went to the park. It was fun — we played soccer and ate our snacks. It was a good day.'",
            commonErrors: [
              "Using comma splice instead of semicolon/period between independent clauses.",
            ],
          },
        },
        {
          id: "ela7-u7-punct2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PUNCPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Choose between a comma and semicolon to join 'we bought snacks' and 'we went to the park.' Explain your choice.",
              marks: 2,
            },
            { label: "b", prompt: "Write the corrected sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comma vs semicolon",
                statement:
                  "Semicolon joins related independent clauses without conjunction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Semicolon is better — these are two independent clauses with no conjunction. Comma alone would create a comma splice.",
                evidence:
                  "we bought snacks and drinks then we went to the park",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'We bought snacks and drinks; then we went to the park.' or 'We bought snacks and drinks. Then we went to the park.'",
                evidence: "then we went to the park",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Semicolon — joins two independent clauses without a conjunction. (b) 'We bought snacks and drinks; then we went to the park.'",
            commonErrors: ["Using comma alone — creates comma splice."],
          },
        },
      ],
    },
  ],
};
