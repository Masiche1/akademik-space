import type { Lesson } from "../../../types.ts";

export const lesson171: Lesson = {
  id: "cie-ol-fl-lesson-7-1",
  code: "7-1",
  title: "Sentence craft",
  goal: "I CAN use varied sentence structures and accurate punctuation to control meaning and pace.",
  standards: ["1119 Writing: grammar and punctuation"],
  vocabulary: [
    { term: "Simple sentence", definition: "One independent clause." },
    {
      term: "Compound sentence",
      definition:
        "Two independent clauses joined by a conjunction or semicolon.",
    },
    {
      term: "Complex sentence",
      definition: "An independent clause plus one or more dependent clauses.",
    },
    {
      term: "Sentence fragment",
      definition: "An incomplete sentence missing a subject or verb.",
    },
    {
      term: "Comma splice",
      definition: "Two independent clauses joined by only a comma.",
    },
    {
      term: "Fronted adverbial",
      definition:
        "An opening phrase of time/place/manner, usually followed by a comma.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-sentence-variety",
      title: "Sentence variety",
      skill:
        "Combine simple sentences into compound and complex structures for control and pace.",
      lesson: {
        sections: [
          {
            heading: "Three sentence types",
            body: "Simple: 'The rain stopped.' Compound: 'The rain stopped, and the street steamed.' Complex: 'When the rain stopped, the street steamed.' Vary types deliberately — all simple reads choppy; all complex reads slow and tangled.",
          },
          {
            heading: "Joining sentences",
            body: "Use conjunctions (and, but, so, because, although) to create compound or complex sentences. Use relative clauses ('the book that I lost') to add information without a new sentence. Avoid comma splices — fix them with a conjunction, semicolon or full stop.",
          },
          {
            heading: "Pace through length",
            body: "Short sentences create urgency or emphasis: 'He ran.' Longer, layered sentences slow the reader and build atmosphere. Match length to moment — action scenes favour short; reflection favours long.",
          },
        ],
        keyFormulas: [
          {
            name: "Sentence variety",
            statement: "Simple+compound+complex=controlled pace and clarity.",
          },
        ],
        workedExample: {
          problem:
            "Combine: 'The bell rang. The class fell silent. The teacher smiled.'",
          solution:
            "'When the bell rang, the class fell silent, and the teacher smiled.' — one complex-compound sentence uniting the moment.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-sv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a sentence 'complex'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An independent clause plus a dependent clause",
              },
              { id: "b", text: "Two independent clauses" },
              { id: "c", text: "A very long sentence" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex sentence",
                statement: "Main clause + subordinate/dependent clause(s).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complexity = dependent clause added to main clause.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Independent + dependent clause",
            commonErrors: ["Confusing complex with compound."],
          },
        },
        {
          id: "cie-ol-fl-sv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Combine into one complex sentence: 'She finished the race. She was exhausted.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence combining",
                statement:
                  "Subordinating conjunctions or participles merge clauses while showing logical relation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify the relation: exhaustion is a result or accompaniment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Combine using 'although/when/and'-type linkage, e.g. 'Although exhausted, she finished the race.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Grammatically correct single sentence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "e.g. 'Although she was exhausted, she finished the race.'",
            commonErrors: [
              "Comma splice: 'She finished the race, she was exhausted.'",
            ],
          },
        },
        {
          id: "cie-ol-fl-sv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might a writer deliberately use a series of short sentences?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Short sentences",
                statement:
                  "Brief sentences accelerate pace and create emphasis or tension.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each short sentence lands as a beat — creating rhythm and urgency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "They suit action, crisis or realisation moments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Overuse becomes monotonous; contrast with longer sentences heightens effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect explained, not just stated.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Short sentences create pace, emphasis and tension — best used in contrast.",
            commonErrors: ["Claiming short sentences are 'bad grammar'."],
          },
        },
        {
          id: "cie-ol-fl-sv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sentence craft.",
          parts: [
            {
              label: "a",
              prompt: "Define compound and complex sentences.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Correct the comma splice: 'The door opened, nobody was there.'",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Combine: 'The sun rose. The birds sang. She woke.'",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain when a writer should use short sentences.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence craft",
                statement: "Types+punctuation+combining+effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Compound = two independent clauses; complex = main + dependent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Both definitions correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Fix with conjunction/semicolon/full stop, e.g. 'The door opened, but nobody was there.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Grammatically correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "One combined sentence attempted, e.g. 'When the sun rose and the birds sang, she woke.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Logical link chosen sensibly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Grammatically correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Short sentences suit urgency, action, emphasis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Links to pace and contrast with longer sentences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Nuanced explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two clause types (b) fixed splice (c) combined sentence (d) short=pace/emphasis",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Definitions.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Wrong/none.",
                part: "a",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Splice fixed.",
                part: "b",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Unfixed.",
                part: "b",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Logical combination.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Effect explained.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Comma splices and run-on sentences."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-punctuation",
      title: "Punctuation and sentence accuracy",
      skill:
        "Use punctuation correctly to control meaning and clarify sentences.",
      lesson: {
        sections: [
          {
            heading: "Core punctuation",
            body: "Full stops end statements; question marks end questions; exclamation marks show strong feeling (use sparingly). Commas separate clauses, items in lists, and after fronted adverbials. Apostrophes show possession or contraction — never plurals.",
          },
          {
            heading: "Semicolons and colons",
            body: "A semicolon joins two closely related independent clauses or separates complex list items. A colon introduces a list, explanation or quotation. Dashes add emphasis or interruption; brackets add supplementary information.",
          },
          {
            heading: "Common errors",
            body: "Watch for: apostrophe misuse ('its' vs 'it's', 'students'' vs 'students'), comma splices, missing commas after openers, and over-punctuation that fragments meaning. Accuracy in punctuation signals control.",
          },
        ],
        keyFormulas: [
          {
            name: "Punctuation control",
            statement: "Correct marks+appropriate variety=clarity and polish.",
          },
        ],
        workedExample: {
          problem: "Fix: 'the dogs tail wagged its was happy'.",
          solution:
            "'The dog's tail wagged; it was happy.' — apostrophe for possession, semicolon joining related clauses.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pun-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should an apostrophe be used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For possession or contraction, not plurals" },
              { id: "b", text: "To make words plural" },
              { id: "c", text: "At the end of every sentence" },
              { id: "d", text: "To show emphasis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Apostrophe",
                statement:
                  "Marks possession or missing letters in contractions — never plural nouns.",
              },
            ],
            steps: [
              {
                reasoning: "Plurals never take apostrophes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Possession or contraction",
            commonErrors: ["Writing 'student's' for plural students."],
          },
        },
        {
          id: "cie-ol-fl-pun-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between 'its' and 'it's'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "its vs it's",
                statement: "'Its' = possessive; 'it's' = 'it is'.",
              },
            ],
            steps: [
              {
                reasoning: "'Its' shows belonging: 'the dog wagged its tail'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'It's' expands to 'it is': 'it's raining'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "its=possessive; it's=it is.",
            commonErrors: ["Using 'it's' for possession."],
          },
        },
        {
          id: "cie-ol-fl-pun-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the function of a semicolon and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semicolon",
                statement:
                  "Joins closely related independent clauses or separates complex list items.",
              },
            ],
            steps: [
              {
                reasoning: "Links two complete thoughts of equal weight.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Signals a closer relationship than a full stop but less abrupt than 'and'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example provided, e.g. 'She studied hard; she deserved the result.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate function and usage.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Semicolon joins related independent clauses — 'She studied; she passed.'",
            commonErrors: [
              "Using semicolon before a dependent clause or in a simple list.",
            ],
          },
        },
        {
          id: "cie-ol-fl-pun-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Punctuation and sentence accuracy.",
          parts: [
            {
              label: "a",
              prompt:
                "Correct: 'the students books were left in the classroom'",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Correct: 'its a beautiful day isnt it'",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain comma use after fronted adverbials.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Punctuate: 'when she arrived everyone clapped'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation",
                statement: "Apostrophes+commas+adverbials=accurate sentences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'The students' books were left in the classroom.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Correct possessive apostrophe.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "'It's a beautiful day, isn't it?'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "'It's' = it is; comma before tag.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Question mark correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Comma marks the boundary between opener and main clause.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Improves clarity and prevents misreading.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "'When she arrived, everyone clapped.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Comma after fronted clause.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Capitalisation and full stop.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) students' (b) It's...isn't it? (c) boundary comma (d) When she arrived, everyone clapped.",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Corrected.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Fully corrected.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Rule explained.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Punctuated correctly.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: [
              "Apostrophe for plurals and missing commas after openers.",
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-sentence-notes",
      title: "Sentence craft and punctuation — revision notes",
      summary:
        "Sentence variety, punctuation rules and common errors for accurate, controlled writing.",
      sections: [
        {
          heading: "Sentence types",
          body: "Simple = one clause. Compound = two independent clauses (conjunction/semicolon). Complex = main + dependent clause. Vary deliberately for pace.",
        },
        {
          heading: "Punctuation rules",
          body: "Apostrophes: possession/contraction, never plurals. 'its' vs 'it's'. Comma after fronted adverbials. Semicolon joins related clauses. Colon introduces lists/explanations.",
        },
        {
          heading: "Common errors",
          body: "Comma splices, apostrophe misuse, run-ons, over-punctuation. Fix splices with conjunction, semicolon or full stop.",
        },
        {
          heading: "Exam checklist",
          body: "Is there sentence variety? Are splices fixed? Are apostrophes correct? Does punctuation match the intended pace?",
        },
      ],
    },
  ],
};
