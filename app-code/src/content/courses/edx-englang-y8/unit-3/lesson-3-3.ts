import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const DRAFT: TextExtract = {
  title: "Student draft: A Trip to the Museum",
  author: "Written for Akademik Space",
  text: "Last friday our class went to the city museum it was a long journey by coach. When we arrived we saw a huge dinosaur skeleton, its jaws were enormous. I liked the mummies best however my friend preferred the space gallery. Mr Patel told us to stay together but Sam wandered off, he got lost for ten minutes. We eat lunch outside the museum, the pigeons stole half of my sandwich. It was the best trip ever, we're going back next year.",
};

const MODEL: TextExtract = {
  title: "Model paragraph: The Same Trip, Edited",
  author: "Written for Akademik Space",
  text: "Last Friday, our class went to the city museum. It was a long journey by coach, but the huge dinosaur skeleton that greeted us made it worthwhile; its jaws were enormous. I liked the mummies best; however, my friend preferred the space gallery. Mr Patel told us to stay together, but Sam wandered off and was lost for ten minutes. We ate lunch outside, where the pigeons stole half of my sandwich. It was the best trip ever, and we are going back next year.",
};

const LEVELS_5 = (part: string): MarkLevel[] => [
  { part, level: "Level 5", marks: "13-15", descriptor: "Accurate, controlled and ambitious punctuation, grammar and sentence structures throughout; assured proofreading." },
  { part, level: "Level 4", marks: "10-12", descriptor: "Generally accurate with a range of punctuation and sentence forms; few errors." },
  { part, level: "Level 3", marks: "7-9", descriptor: "Mostly accurate with some variety; occasional errors that do not impede meaning." },
  { part, level: "Level 2", marks: "4-6", descriptor: "Some accuracy; frequent errors in punctuation or grammar." },
  { part, level: "Level 1", marks: "1-3", descriptor: "Simple sentences with frequent errors." },
];

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, accurate corrections with well-explained reasons." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some correct corrections; some explanation." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited corrections." },
];

export const lesson33: Lesson = {
  id: "el8-u3-lesson-3-3",
  code: "3-3",
  title: "Technical Accuracy",
  goal: "I CAN use commas, apostrophes and semicolons correctly and vary my sentences so my writing is accurate and controlled.",
  standards: ["KS3 Writing", "KS3 AO5"],
  vocabulary: [
    { term: "Comma splice", definition: "An error where two complete sentences are joined with only a comma." },
    { term: "Apostrophe of omission", definition: "An apostrophe showing missing letters, as in 'we're' for 'we are'." },
    { term: "Apostrophe of possession", definition: "An apostrophe showing ownership, as in 'the dog's lead'." },
    { term: "Semicolon", definition: "A punctuation mark that joins two closely related complete sentences." },
    { term: "Subordinate clause", definition: "A clause that adds information but cannot stand alone as a sentence." },
    { term: "Subject-verb agreement", definition: "Making the verb match its subject in number: 'the pigeons steal', 'the pigeon steals'." },
  ],
  concepts: [
    {
      id: "el8-u3-commas-apostrophes-semicolons",
      title: "Commas, apostrophes and semicolons",
      skill: "Punctuate accurately with commas, apostrophes and semicolons and avoid comma splices.",
      lesson: {
        sections: [
          {
            heading: "Commas and the comma splice",
            body: "Use commas in lists ('buses, trains and planes'), after fronted adverbials ('Last Friday, we went...') and around extra information ('Mr Patel, our teacher, waved'). Never join two complete sentences with only a comma: that is a **comma splice**. Use a full stop, a semicolon, or a conjunction instead: 'It was a long journey, but we enjoyed it.'",
          },
          {
            heading: "Apostrophes and semicolons",
            body: "An apostrophe shows **omission** ('we're' = we are) or **possession** (the dog's lead; the dogs' lead for several dogs). Never use one for plurals ('pigeon's' is wrong for more than one pigeon) and remember 'its' (belonging to it) has none, unlike 'it's' (it is). A **semicolon** joins two closely related complete sentences: 'I liked the mummies best; my friend preferred the space gallery.'",
          },
        ],
        keyFormulas: [
          { name: "Comma splice fix", statement: "Full stop, semicolon or a conjunction (and, but, so)." },
          { name: "Its / it's", statement: "its = belonging to it; it's = it is or it has." },
          { name: "Semicolon rule", statement: "Both sides must be complete sentences and closely linked." },
        ],
        workedExample: {
          problem: "Correct: 'The coach was late we waited for an hour, its engine had broken down.'",
          solution: "'The coach was late; we waited for an hour. Its engine had broken down.' The first comma splice is solved with a semicolon because the clauses are closely related; the second needs a full stop and a capital letter, and 'its' means 'belonging to it', so it has no apostrophe.",
        },
      },
      questions: [
        {
          id: "el8-u3-commas-apostrophes-semicolons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the apostrophe correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We cant wait for the trip." },
              { id: "b", text: "The dog wagged its tail." },
              { id: "c", text: "The dogs wagged their tail's." },
              { id: "d", text: "The dog wagged it's tail." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Its / it's", statement: "Possessive 'its' has no apostrophe." }],
            steps: [{ reasoning: "'Its' meaning 'belonging to it' takes no apostrophe.", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(b)** 'its tail' is correct. (b) wrongly uses it's, (c) wrongly uses an apostrophe for a plural, (d) needs can't.",
            commonErrors: ["Choosing (b) because it 'looks' possessive."],
          },
        },
        {
          id: "el8-u3-commas-apostrophes-semicolons-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct the comma splice in two different ways: 'The rain stopped, we went outside.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma splice", statement: "Replace the comma with a full stop, semicolon or conjunction." }],
            steps: [
              { reasoning: "Uses a semicolon or full stop correctly.", marks: 1, markCode: "AO5" },
              { reasoning: "Uses a conjunction with a comma, or another different correct method.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "'The rain stopped; we went outside.' / 'The rain stopped, so we went outside.' / 'The rain stopped. We went outside.'",
            commonErrors: ["Adding a second comma.", "Using a semicolon before a conjunction as well."],
          },
        },
        {
          id: "el8-u3-commas-apostrophes-semicolons-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this paragraph with correct punctuation: 'Its a long way to the lakes edge we cant stop now the childrens guide said theyre waiting for us.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophes", statement: "Omission and possession." },
              { kind: "convention", name: "Sentence boundaries", statement: "Capital letters, full stops and semicolons." },
            ],
            steps: [
              { reasoning: "'It's' (it is) is corrected with an apostrophe of omission.", marks: 1, markCode: "AO5" },
              { reasoning: "'Lake's edge' is corrected with a possessive apostrophe.", marks: 1, markCode: "AO5" },
              { reasoning: "Comma splice or run-on is repaired with a full stop or semicolon.", marks: 2, markCode: "AO5" },
              { reasoning: "'We can't', 'children's' and 'they're' are all correct.", marks: 2, markCode: "AO5" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "All or almost all errors corrected accurately." },
              { level: "Level 2", marks: "3-4", descriptor: "Most errors corrected; one or two omissions." },
              { level: "Level 1", marks: "1-2", descriptor: "Few corrections." },
            ],
            finalAnswer: "'It's a long way to the lake's edge; we can't stop now. The children's guide said they're waiting for us.'",
            commonErrors: ["Writing 'childrens'' or 'childrens's'.", "Adding a comma instead of a stop between sentences."],
          },
        },
        {
          id: "el8-u3-commas-apostrophes-semicolons-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts of this question about the student draft.",
          extract: DRAFT,
          parts: [
            { label: "a", prompt: "Find and correct two comma splices in the draft.", marks: 2 },
            { label: "b", prompt: "Find and correct one capitalisation error and one verb-tense error.", marks: 4 },
            { label: "c", prompt: "Rewrite the first two sentences of the draft with correct punctuation, and explain each change.", marks: 6 },
            { label: "d", prompt: "Write a paragraph of about 150 words describing a school trip or event you remember. Use commas, apostrophes and at least one semicolon accurately.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comma splice", statement: "Two sentences must not be joined by a comma alone." },
              { kind: "skill", name: "Proofreading", statement: "Read slowly for punctuation, tense and capital letters." },
            ],
            steps: [
              { part: "a", reasoning: "'to the city museum it was' needs a full stop or semicolon.", evidence: "city museum it was a long journey", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "'skeleton, its jaws' needs a semicolon or full stop.", evidence: "dinosaur skeleton, its jaws were enormous", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "'friday' should be 'Friday'.", evidence: "Last friday", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "'We eat lunch' should be 'We ate lunch' to stay in the past tense.", evidence: "We eat lunch outside", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Adds a capital 'Friday' and a comma after the fronted adverbial.", evidence: "Last friday our class", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Inserts a full stop or semicolon to separate the sentences.", evidence: "city museum it was", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Explains each change in terms of the rule applied.", marks: 2, markCode: "AO5" },
              { part: "d", reasoning: "Accurate use of commas, apostrophes and a semicolon.", marks: 5, markCode: "AO5" },
              { part: "d", reasoning: "Clear content and organisation with an appropriate tone.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Varied sentence structure and secure spelling.", marks: 5, markCode: "AO5" },
            ],
            levels: [...LEVELS_6("c"), ...LEVELS_5("d")],
            finalAnswer: "(a) 'Last Friday our class went to the city museum; it was a long journey by coach.' and 'a huge dinosaur skeleton; its jaws were enormous.' (b) 'Friday'; 'ate'. (c) 'Last Friday, our class went to the city museum. It was a long journey by coach.' with the capital, the comma after the adverbial and the full stop explained. (d) A paragraph using commas, apostrophes and a semicolon accurately.",
            commonErrors: ["Correcting some errors but introducing new ones.", "Overusing semicolons between clauses that are not complete sentences."],
            examinerNote: "Part (d): 10 marks for AO5 accuracy and 5 marks for AO4 content.",
          },
        },
      ],
    },
    {
      id: "el8-u3-sentence-variety-grammar",
      title: "Sentence variety and grammar",
      skill: "Use simple, compound and complex sentences with accurate grammar to control pace and meaning.",
      lesson: {
        sections: [
          {
            heading: "Three sentence types",
            body: "A **simple sentence** has one clause: 'Sam wandered off.' A **compound sentence** joins two with a conjunction such as 'and', 'but' or 'so': 'Sam wandered off, but he was found.' A **complex sentence** adds a subordinate clause: 'Although Mr Patel had warned him, Sam wandered off.' Using all three makes your writing fluent and controls pace.",
          },
          {
            heading: "Grammar accuracy",
            body: "Keep your tense consistent (past with past), make subjects and verbs agree ('the pigeons steal', not 'steals'), and avoid sentence fragments. Vary your sentence openings: start with an adverbial ('Suddenly,'), a verb with 'ing' ('Running down the hall, ...') or a subordinate clause. Proofread by reading aloud.",
          },
        ],
        keyFormulas: [
          { name: "Simple", statement: "One main clause." },
          { name: "Compound", statement: "Two main clauses joined by and, but, so, or." },
          { name: "Complex", statement: "A main clause plus a subordinate clause beginning with although, because, when, if." },
        ],
        workedExample: {
          problem: "Combine into one complex sentence: 'Sam wandered off. He was lost for ten minutes.'",
          solution: "'When Sam wandered off, he was lost for ten minutes.' or 'Sam, who wandered off, was lost for ten minutes.' The subordinate clause beginning with 'When' adds information about time and cannot stand alone.",
        },
      },
      questions: [
        {
          id: "el8-u3-sentence-variety-grammar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is a complex sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was raining, and we played outside." },
              { id: "b", text: "Although it was raining, we played outside." },
              { id: "c", text: "We played outside." },
              { id: "d", text: "Playing outside." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Complex sentence", statement: "A main clause with a subordinate clause." }],
            steps: [{ reasoning: "'Although it was raining' is a subordinate clause attached to a main clause.", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(b)** Complex. (b) is simple, (c) is compound and (d) is a fragment.",
            commonErrors: ["Choosing (c), which joins two main clauses and is compound."],
          },
        },
        {
          id: "el8-u3-sentence-variety-grammar-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite this sentence with a subject-verb agreement error corrected and a tense made consistent: 'The pigeons steals my sandwich while we eat lunch yesterday.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement and tense", statement: "Verbs match subjects and keep one tense." }],
            steps: [
              { reasoning: "Corrects 'steals' to 'stole' (past tense, and agrees with 'pigeons').", marks: 1, markCode: "AO5" },
              { reasoning: "Corrects 'eat' to 'ate' so both verbs are in the past tense.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "'The pigeons stole my sandwich while we ate lunch yesterday.'",
            commonErrors: ["Changing only one verb.", "Writing 'steal' (agrees but is present tense)."],
          },
        },
        {
          id: "el8-u3-sentence-variety-grammar-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite these four short sentences as two varied sentences, using one compound and one complex structure: 'The bell rang. We ran outside. It was raining. We did not care.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety", statement: "Combine ideas using conjunctions and subordinate clauses." },
              { kind: "convention", name: "Punctuation", statement: "Commas after subordinate clauses; capital letters." },
            ],
            steps: [
              { reasoning: "Creates an accurate compound sentence using a coordinating conjunction.", marks: 2, markCode: "AO5" },
              { reasoning: "Creates an accurate complex sentence with a subordinate clause.", marks: 2, markCode: "AO5" },
              { reasoning: "Punctuation is accurate and meaning is preserved.", marks: 2, markCode: "AO5" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Both sentences accurate and clearly varied." },
              { level: "Level 2", marks: "3-4", descriptor: "One structure accurate; some punctuation errors." },
              { level: "Level 1", marks: "1-2", descriptor: "Attempts combination with errors." },
            ],
            finalAnswer: "'The bell rang, and we ran outside. Although it was raining, we did not care.'",
            commonErrors: ["Joining with a comma only.", "Leaving the sentences simple."],
          },
        },
        {
          id: "el8-u3-sentence-variety-grammar-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts of this question about sentence variety.",
          extract: MODEL,
          parts: [
            { label: "a", prompt: "Write down one simple sentence and one compound sentence from the model paragraph.", marks: 2 },
            { label: "b", prompt: "Write down one complex sentence from the model paragraph and underline its subordinate clause.", marks: 4 },
            { label: "c", prompt: "Explain how the editing in the model paragraph makes the writing more accurate and more fluent than the original draft.", marks: 6 },
            { label: "d", prompt: "Write about 150 words describing a surprising incident at school. Use a variety of sentence types, a consistent tense and accurate punctuation.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence types", statement: "Simple, compound and complex." },
              { kind: "skill", name: "Editing", statement: "Improving accuracy and fluency." },
            ],
            steps: [
              { part: "a", reasoning: "A simple sentence with one clause.", evidence: "Last Friday, our class went to the city museum.", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "A compound sentence joined by a conjunction or semicolon.", evidence: "Mr Patel told us to stay together, but Sam wandered off", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "A complex sentence containing a subordinate clause.", evidence: "We ate lunch outside, where the pigeons stole half of my sandwich.", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "Identifies the subordinate clause correctly.", evidence: "where the pigeons stole half of my sandwich", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Comma splices are removed with semicolons or conjunctions.", evidence: "I liked the mummies best; however, my friend preferred the space gallery.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Tense and capital letters are corrected.", evidence: "We ate lunch outside", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Joining short ideas into compound and complex sentences improves flow.", evidence: "and we are going back next year", marks: 2, markCode: "AO5" },
              { part: "d", reasoning: "Wide range of sentence types used for effect, with accurate grammar.", marks: 5, markCode: "AO5" },
              { part: "d", reasoning: "Accurate punctuation and secure spelling.", marks: 5, markCode: "AO5" },
              { part: "d", reasoning: "Clear, engaging content with controlled structure.", marks: 5, markCode: "AO4" },
            ],
            levels: [...LEVELS_6("c"), ...LEVELS_5("d")],
            finalAnswer: "(a) Simple: 'Last Friday, our class went to the city museum.' Compound: 'Mr Patel told us to stay together, but Sam wandered off and was lost for ten minutes.' (b) 'We ate lunch outside, where the pigeons stole half of my sandwich.' (subordinate clause: 'where the pigeons stole half of my sandwich'). (c) The edit removes comma splices, corrects capitals and tense, and uses conjunctions to join ideas. (d) A paragraph with simple, compound and complex sentences and accurate punctuation.",
            commonErrors: ["Confusing compound and complex sentences.", "Switching tense midway."],
            examinerNote: "Part (d): 10 marks for AO5 technical accuracy and 5 marks for AO4 content.",
          },
        },
      ],
    },
  ],
};
