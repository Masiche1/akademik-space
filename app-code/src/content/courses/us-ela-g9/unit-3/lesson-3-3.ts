import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const TRAIL: TextExtract = {
  title: "The Ridge Trail (draft)",
  author: "Written for Akademik Space",
  text: "Hiking the ridge trail demands strength, patience, and to plan carefully. Because the morning fog was thick, the guide, who had led the route for twenty years, delayed the start. The hikers, tired but determined, climbed steadily along the narrow path. Weather permitting, they would reach the summit by noon. Reaching the top, they discovered that the valley below was glowing.",
};

const BUS: TextExtract = {
  title: "The Bus Vote (draft)",
  author: "Written for Akademik Space",
  text: "The council debated the new bus routes for three hours. Some members wanted express lines downtown, others wanted more stops in the suburbs. Riders had waited years for a decision, therefore the vote felt urgent. The final plan has two goals, to shorten commutes and to reach every neighborhood. Residents will see three changes: a faster downtown line, extra suburban stops, and Sunday service. However the budget remains uncertain.",
};

export const lesson33: Lesson = {
  id: "ela9-u3-lesson-3-3",
  code: "3-3",
  title: "Conventions",
  goal: "I CAN use parallel structure, a range of phrases and clauses, and correct semicolons, conjunctive adverbs and colons to write precise, varied sentences.",
  standards: [
    "L.9-10.1",
    "L.9-10.1a",
    "L.9-10.1b",
    "L.9-10.2",
    "L.9-10.2a",
    "L.9-10.2b",
  ],
  vocabulary: [
    {
      term: "Parallel structure",
      definition:
        "Using the same grammatical form for items in a series or pair, such as 'strength, patience, and careful planning'.",
    },
    {
      term: "Absolute phrase",
      definition:
        "A noun plus a participle (and any modifiers) that modifies a whole sentence, as in 'Weather permitting, we will leave'.",
    },
    {
      term: "Participial phrase",
      definition:
        "A phrase headed by an -ing or -ed/-en verb form that acts as an adjective, such as 'Reaching the top'.",
    },
    {
      term: "Relative clause",
      definition:
        "A dependent clause beginning with who, which, that, whose or where that modifies a noun.",
    },
    {
      term: "Noun clause",
      definition:
        "A dependent clause that acts as a noun, such as 'that the valley was glowing' after 'discovered'.",
    },
    {
      term: "Conjunctive adverb",
      definition:
        "An adverb such as however, therefore or moreover that links two independent clauses and follows a semicolon.",
    },
    {
      term: "Colon",
      definition:
        "A mark (:) used after a complete independent clause to introduce a list, explanation or quotation.",
    },
  ],
  concepts: [
    {
      id: "ela9-u3-parallel-phrases-clauses",
      title: "Parallel structure, phrases and clauses",
      skill:
        "Use parallel structure, and use noun, verb, adjectival, adverbial, participial, prepositional and absolute phrases and independent, dependent, noun, relative and adverbial clauses to add variety and interest.",
      lesson: {
        sections: [
          {
            heading: "Parallel structure",
            body: "Items in a series or in a pair joined by 'and', 'or', 'but' or 'not only...but also' should take the **same grammatical form**. Faulty: 'The trail demands strength, patience, and to plan carefully.' (two nouns, then an infinitive). Parallel: 'The trail demands strength, patience, and careful planning.' Faulty: 'She likes hiking, to swim, and riding bikes.' Parallel: 'She likes hiking, swimming, and biking.' Parallel structure makes writing clear, balanced and easy to follow. Check lists, comparisons and sentences with paired conjunctions.",
          },
          {
            heading: "Phrases and clauses",
            body: "A **phrase** is a group of words that works as one part of speech and has no subject-verb pair of its own. Types: **noun phrase** ('the narrow path'), **verb phrase** ('had been climbing'), **adjectival** ('tired but determined'), **adverbial**, **prepositional** ('along the narrow path'), **participial** ('Reaching the top') and **absolute** ('Weather permitting'), which modifies the whole sentence. A **clause** has a subject and a verb. An **independent clause** can stand alone. **Dependent clauses** cannot: an **adverbial clause** ('Because the fog was thick'), a **relative clause** ('who had led the route'), which modifies a noun, and a **noun clause** ('that the valley was glowing'), which acts as a subject or object. Mixing these structures varies rhythm and lets you show relationships among ideas.",
          },
        ],
        keyFormulas: [
          {
            name: "Parallel structure",
            statement:
              "Give each item in a series or pair the same grammatical form.",
          },
          {
            name: "Participial phrase",
            statement:
              "Verb form acting as an adjective, placed next to the noun it modifies: 'Reaching the top, they cheered.'",
          },
          {
            name: "Absolute phrase",
            statement:
              "Noun + participle modifying the whole sentence: 'Weather permitting, we will go.'",
          },
          {
            name: "Dependent clauses",
            statement:
              "Adverbial (when, because, although), relative (who, which, that) and noun (that, what, whether).",
          },
        ],
        workedExample: {
          problem:
            "Identify the clause type in 'The hiker who carried the map led us.' and make 'She enjoys reading, to write, and painting' parallel.",
          solution:
            "'Who carried the map' has a subject (who) and a verb (carried), cannot stand alone, and modifies the noun 'hiker', so it is a relative (adjective) clause. For the second sentence, 'reading' and 'painting' are gerunds, so 'to write' must become 'writing': 'She enjoys reading, writing, and painting.'",
        },
      },
      questions: [
        {
          id: "ela9-u3-parallel-phrases-clauses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TRAIL,
          stem: "Which revision of the first sentence uses parallel structure correctly?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Hiking the ridge trail demands strength, patience, and careful planning.",
              },
              {
                id: "b",
                text: "Hiking the ridge trail demands to be strong, patience, and planning carefully.",
              },
              {
                id: "c",
                text: "Hiking the ridge trail demands strength, being patient, and careful planning.",
              },
              {
                id: "d",
                text: "Hiking the ridge trail demands being strong, patience, and to plan carefully.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Parallel structure",
                statement: "Items in a series share the same grammatical form.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only (a) has three nouns in the series: strength, patience, planning. Each of the others mixes noun, gerund and infinitive forms.",
                evidence: "strength, patience, and careful planning",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(a)**. All three items are nouns.",
            commonErrors: [
              "Choosing (c) because two items match; all three must match.",
            ],
          },
        },
        {
          id: "ela9-u3-parallel-phrases-clauses-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: TRAIL,
          stem: 'In the second sentence, what type of clause is "who had led the route for twenty years" and what does it do?',
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An adverbial clause that gives a reason" },
              { id: "b", text: "A noun clause that acts as the subject" },
              {
                id: "c",
                text: "A relative clause that modifies the noun guide",
              },
              {
                id: "d",
                text: "An independent clause that states the main action",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative clause",
                statement:
                  "A dependent clause beginning with who, which or that that modifies a noun.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It begins with the relative pronoun 'who' and cannot stand alone, so it is a dependent clause.",
                evidence: "who had led the route",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "It describes the guide, so it is a relative clause that modifies a noun, not an adverbial clause.",
                evidence: "the guide, who had led the route",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(c)**. It modifies the noun 'guide'.",
            commonErrors: [
              "Choosing (d) because the sentence begins with the adverbial clause 'Because the morning fog was thick'.",
            ],
          },
        },
        {
          id: "ela9-u3-parallel-phrases-clauses-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: TRAIL,
          stem: 'For each underlined phrase, name the type of phrase and say what it modifies:\n\n(1) "tired but determined" (sentence 3)\n(2) "Weather permitting" (sentence 4)\n(3) "Reaching the top" (sentence 5)',
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phrase types",
                statement:
                  "Adjectival, absolute and participial phrases differ in form and in what they modify.",
              },
            ],
            steps: [
              {
                reasoning: "(1) is an adjectival phrase.",
                evidence: "tired but determined",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "(1) It modifies the noun 'hikers'.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "(2) is an absolute phrase (noun + participle).",
                evidence: "Weather permitting",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "(2) It modifies the whole sentence, not one word.",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "(3) is a participial phrase.",
                evidence: "Reaching the top",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning: "(3) It modifies the pronoun 'they'.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 6),
            finalAnswer:
              "(1) Adjectival phrase modifying 'hikers'. (2) Absolute phrase modifying the whole sentence. (3) Participial phrase modifying 'they'.",
            commonErrors: [
              "Calling (2) a participial phrase; an absolute phrase has its own noun and does not modify one word.",
              "Naming the phrase without saying what it modifies.",
            ],
          },
        },
        {
          id: "ela9-u3-parallel-phrases-clauses-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: TRAIL,
          stem: 'Answer all parts about "The Ridge Trail".',
          parts: [
            {
              label: "a",
              prompt:
                'Identify the type of each dependent clause: "Because the morning fog was thick" and "that the valley below was glowing".',
              marks: 2,
            },
            {
              label: "b",
              prompt:
                'Make these sentences parallel: (1) "Hiking the ridge trail demands strength, patience, and to plan carefully." (2) "The guide told the hikers to bring water, that they should wear boots, and checking the forecast."',
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write a paragraph (five to seven sentences) about preparing for a challenge, such as a test or a performance. Include a parallel series, a relative clause, an adverbial clause, a noun clause, a participial phrase and an absolute phrase. Underline or label each feature.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Parallel structure",
                statement: "Items in a series share the same grammatical form.",
              },
              {
                kind: "convention",
                name: "Varied sentence structures",
                statement:
                  "Phrases and clauses add variety and show relationships among ideas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Because the morning fog was thick' is an adverbial clause (reason).",
                evidence: "Because the morning fog was thick",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "a",
                reasoning:
                  "'that the valley below was glowing' is a noun clause, the object of 'discovered'.",
                evidence: "that the valley below was glowing",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "(1) is corrected so that all three items are nouns: 'strength, patience, and careful planning'.",
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "(2) is corrected so that all items are infinitives: 'to bring water, to wear boots, and to check the forecast'.",
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning: "A correct parallel series.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning: "A correct relative clause modifying a noun.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "A correct adverbial clause with a comma if it opens the sentence.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "A correct noun clause functioning as subject or object.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "A participial phrase placed next to the word it modifies.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "A correctly formed absolute phrase set off by a comma.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "The paragraph is focused and coherent, with a natural flow rather than a list of examples.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Correct punctuation, spelling and capitalization throughout.",
                marks: 2,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 10, "c"),
            finalAnswer:
              "(a) Adverbial clause; noun clause. (b) (1) Hiking the ridge trail demands strength, patience, and careful planning. (2) The guide told the hikers to bring water, to wear boots, and to check the forecast. (c) Model: 'Preparing for the debate demanded focus, discipline, and teamwork. Our coach, who had judged tournaments for years, insisted that we rehearse every rebuttal. Because the topic was complex, we divided the research. Weather permitting, we practiced outdoors, our notes spread across the picnic tables. Reviewing the evidence one final time, I realized that we were ready.'",
            commonErrors: [
              "Writing a dangling participial phrase such as 'Reaching the top, the view was beautiful.'",
              "Forgetting the comma after an introductory adverbial clause.",
              "Giving a list of features rather than a connected paragraph.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u3-semicolons-colons",
      title: "Semicolons, conjunctive adverbs and colons",
      skill:
        "Use a semicolon to link two or more closely related independent clauses, with or without a conjunctive adverb, and use a colon to introduce a list or explanation.",
      lesson: {
        sections: [
          {
            heading: "Semicolons and conjunctive adverbs",
            body: "Use a **semicolon** to link two closely related **independent clauses** without a conjunction: 'The vote was close; the plan passed.' A comma alone cannot join them: that error is a **comma splice**. A semicolon is also used before a **conjunctive adverb** (however, therefore, moreover, consequently, nevertheless, for example) that links two independent clauses, and the adverb is followed by a comma: 'The vote was close; however, the plan passed.' Do not use a semicolon before a dependent clause or a fragment, and do not confuse a conjunctive adverb with a coordinating conjunction: 'but' needs only a comma ('The vote was close, but the plan passed.').",
          },
          {
            heading: "Colons",
            body: "Use a **colon** after a complete independent clause to introduce a list, an explanation, a quotation or an example: 'Residents will see three changes: a faster downtown line, extra suburban stops, and Sunday service.' The words before the colon must be able to stand alone. Do not write 'The changes are: a faster line...' because the clause before the colon is incomplete; write 'The changes are a faster line...' instead. Colons and semicolons are not interchangeable. A semicolon joins two equal, related clauses, while a colon says 'here comes what I just promised'.",
          },
        ],
        keyFormulas: [
          {
            name: "Semicolon",
            statement: "Independent clause ; independent clause.",
          },
          {
            name: "Conjunctive adverb",
            statement: "Independent clause ; however, independent clause.",
          },
          {
            name: "Colon",
            statement:
              "Complete independent clause : list, explanation or quotation.",
          },
          {
            name: "Comma splice",
            statement:
              "Two independent clauses joined by only a comma is an error; use a semicolon, period or conjunction.",
          },
        ],
        workedExample: {
          problem:
            "Correct: 'The storm was strong, however the game continued. We needed three things, tents, food, and water.'",
          solution:
            "First sentence: 'however' links two independent clauses, so it needs a semicolon before it and a comma after: 'The storm was strong; however, the game continued.' Second sentence: the clause before the break is complete, and what follows is a list, so a colon is correct: 'We needed three things: tents, food, and water.'",
        },
      },
      questions: [
        {
          id: "ela9-u3-semicolons-colons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses a semicolon correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The council voted; and the plan passed." },
              { id: "b", text: "The council voted; passing the plan." },
              { id: "c", text: "Although the council voted; the plan passed." },
              { id: "d", text: "The council voted; the plan passed." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Semicolon",
                statement: "A semicolon joins two independent clauses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In (b) both sides are independent clauses. (a) adds a conjunction, (c) has a dependent clause before the semicolon and (d) has a fragment after it.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(d)**. Both parts can stand alone.",
            commonErrors: [
              "Choosing (a) because 'and' feels natural; with 'and' a comma is used instead.",
            ],
          },
        },
        {
          id: "ela9-u3-semicolons-colons-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence punctuates the conjunctive adverb correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The vote was close however, the plan passed." },
              {
                id: "b",
                text: "The vote was close; however, the plan passed.",
              },
              { id: "c", text: "The vote was close; however the plan passed." },
              { id: "d", text: "The vote was close, however the plan passed." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Conjunctive adverbs",
                statement:
                  "Use a semicolon before the adverb and a comma after it when it links two independent clauses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A semicolon, not a comma, must separate the two independent clauses.",
                evidence: "close; however",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "A comma follows the conjunctive adverb; (c) omits it, and (b) and (d) place the break incorrectly.",
                evidence: "however, the plan passed",
                marks: 1,
                markCode: "AO5",
              },
            ],
            finalAnswer: "**(b)**. Semicolon before, comma after.",
            commonErrors: ["Choosing (b), a comma splice."],
          },
        },
        {
          id: "ela9-u3-semicolons-colons-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: BUS,
          stem: "Sentences 2, 3 and 4 of the draft contain punctuation errors. For each sentence, name the error and rewrite the sentence correctly (use a semicolon in sentence 2, a semicolon with a conjunctive adverb in sentence 3, and a colon in sentence 4).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Semicolons and colons",
                statement:
                  "Semicolons join independent clauses; colons introduce what a complete clause has promised.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence 2 is a comma splice.",
                evidence: "downtown, others wanted",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Corrected: 'Some members wanted express lines downtown; others wanted more stops in the suburbs.'",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Sentence 3 joins independent clauses with a comma before the conjunctive adverb 'therefore'.",
                evidence: "decision, therefore the vote",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Corrected: 'Riders had waited years for a decision; therefore, the vote felt urgent.'",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Sentence 4 uses a comma where a colon should introduce the goals.",
                evidence: "two goals, to shorten commutes",
                marks: 1,
                markCode: "AO5",
              },
              {
                reasoning:
                  "Corrected: 'The final plan has two goals: to shorten commutes and to reach every neighborhood.'",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 6),
            finalAnswer:
              "S2: comma splice; 'Some members wanted express lines downtown; others wanted more stops in the suburbs.' S3: comma before conjunctive adverb; 'Riders had waited years for a decision; therefore, the vote felt urgent.' S4: comma instead of colon; 'The final plan has two goals: to shorten commutes and to reach every neighborhood.'",
            commonErrors: [
              "Using a semicolon in sentence 4, where a colon introduces the explanation.",
              "Forgetting the comma after 'therefore'.",
            ],
          },
        },
        {
          id: "ela9-u3-semicolons-colons-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: BUS,
          stem: 'Answer all parts about "The Bus Vote".',
          parts: [
            {
              label: "a",
              prompt:
                'Explain why the colon in sentence 5 ("Residents will see three changes: a faster downtown line, extra suburban stops, and Sunday service.") is correct, and correct the final sentence of the draft ("However the budget remains uncertain.").',
              marks: 2,
            },
            {
              label: "b",
              prompt:
                'Explain the difference between a semicolon and a colon, and between the conjunctive adverb "however" and the coordinating conjunction "but". Give a correct example of each of the four.',
              marks: 6,
            },
            {
              label: "c",
              prompt:
                "Write a paragraph (about 100 words) on a problem in your school or community. Use at least two semicolons, two conjunctive adverbs correctly punctuated and one colon introducing a list or explanation.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Semicolons, conjunctive adverbs and colons",
                statement:
                  "Semicolons join related independent clauses; conjunctive adverbs take a comma after them; colons follow a complete clause and introduce what follows.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The colon is correct because 'Residents will see three changes' is a complete independent clause and a list follows.",
                evidence: "Residents will see three changes:",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "a",
                reasoning:
                  "Corrected: 'However, the budget remains uncertain.'",
                evidence: "However the budget",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "Semicolon: links two closely related independent clauses.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "Colon: follows a complete clause and introduces a list, explanation or quotation.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "'However' is a conjunctive adverb; it is preceded by a semicolon and followed by a comma.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning:
                  "'But' is a coordinating conjunction; it needs only a comma before it.",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "Gives two correct examples (semicolon and colon).",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "b",
                reasoning: "Gives two correct examples ('however' and 'but').",
                marks: 1,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "At least two semicolons that link independent clauses.",
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "At least two conjunctive adverbs with correct semicolons and commas.",
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "A colon after a complete clause introducing a list or explanation.",
                marks: 2,
                markCode: "AO5",
              },
              {
                part: "c",
                reasoning:
                  "A focused, coherent paragraph with a clear point about the problem.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Other conventions (spelling, capitalization, commas) are correct.",
                marks: 2,
                markCode: "AO5",
              },
            ],
            levels: [
              ...levels("writing", 6, "b"),
              ...levels("writing", 10, "c"),
            ],
            finalAnswer:
              "(a) The words before the colon form a complete clause, and a list follows. Correct: 'However, the budget remains uncertain.' (b) A semicolon joins related independent clauses ('The vote was close; the plan passed.'); a colon introduces what a complete clause promises ('We need three things: time, money, and support.'). 'However' follows a semicolon and takes a comma ('...; however, ...'), whereas 'but' needs only a comma ('..., but ...'). (c) Model: 'Our cafeteria has a waste problem; students throw away half of every tray. The causes are clear: large portions, limited choices, and short lunch periods. The school could offer smaller servings; moreover, it could lengthen lunch by ten minutes. Some students prefer the current system; however, the waste costs the district money every day.'",
            commonErrors: [
              "Using a colon after an incomplete clause such as 'The causes are:'.",
              "Using a semicolon before 'but'.",
              "Omitting the comma after the conjunctive adverb.",
            ],
          },
        },
      ],
    },
  ],
};
