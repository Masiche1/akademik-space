import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ciege-u6-lesson-6-1",
  code: "6-1",
  title: "Grammar and Punctuation Accuracy",
  goal: "I CAN identify and correct grammatical and punctuation errors.",
  standards: ["Cambridge IGCSE First Language English 0500: accuracy"],
  vocabulary: [
    { term: "Subject-verb agreement", definition: "The verb must match the subject in number." },
    { term: "Comma splice", definition: "Two complete sentences joined by only a comma." },
    { term: "Run-on", definition: "Two sentences joined without punctuation." },
    { term: "Modifier", definition: "A word or phrase describing another element." },
    { term: "Dangling modifier", definition: "A modifier that doesn't clearly attach to its subject." },
  ],
  concepts: [
    {
      id: "ciege-u6-s1-agreement",
      title: "Subject-verb agreement and sentence structure",
      skill: "Identify and correct common grammatical errors.",
      lesson: {
        sections: [
          {
            heading: "Agreement",
            body: "The verb must match the subject: 'The dogs bark' not 'The dogs barks'. Watch for phrases between subject and verb — 'The box of chocolates is' not 'are'.",
          },
          {
            heading: "Sentence fragments and run-ons",
            body: "Every sentence needs a subject and a verb. Fix run-ons with a full stop, semicolon, or conjunction: 'I ran; I was late' or 'I ran because I was late'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Correct: 'The team of players are winning.'",
          solution: "'The team of players is winning' — the subject is 'team' (singular), not 'players'.",
        },
      },
      questions: [
        {
          id: "ciege-u6-s1-ag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence has correct subject-verb agreement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dog barks are." },
            { id: "b", text: "The dogs bark." },
            { id: "c", text: "The dogs barks." },
            { id: "d", text: "The dog bark." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Verb matches subject." }],
            steps: [
              { reasoning: "'Dogs' is plural, so 'bark' is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The dogs bark.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct this sentence: 'The box of chocolates are empty.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Subject is 'box'." }],
            steps: [
              { reasoning: "The subject is 'box' (singular), not 'chocolates'.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The box of chocolates is empty.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The box of chocolates is empty.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct this run-on: 'I wanted to go but it rained we stayed home.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Run-on", statement: "Split into sentences." }],
            steps: [
              { reasoning: "Identify the two complete thoughts.", marks: 1, markCode: "AO2" },
              { reasoning: "Separate with a full stop or conjunction.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'I wanted to go but it rained. We stayed home.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Split into two sentences",
          },
        },
        {
          id: "ciege-u6-s1-ag-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct this comma splice: 'She was tired, she went to bed early.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma splice", statement: "Can't join sentences with comma alone." }],
            steps: [
              { reasoning: "Identify the comma splice.", marks: 1, markCode: "AO2" },
              { reasoning: "Replace comma with full stop or semicolon.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'She was tired. She went to bed early.' or 'She was tired; she went to bed early.'", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Full stop or semicolon",
          },
        },
        {
          id: "ciege-u6-s1-ag-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence has correct subject-verb agreement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The cats sleeps." },
            { id: "b", text: "The cat sleeps are." },
            { id: "c", text: "The cat sleep." },
            { id: "d", text: "The cats sleep." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Plural subject takes plural verb." }],
            steps: [
              { reasoning: "'Cats' is plural, so 'sleep' is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The cats sleep.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct this sentence: 'The list of names are on the desk.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Subject is 'list'." }],
            steps: [
              { reasoning: "The subject is 'list' (singular), not 'names'.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The list of names is on the desk.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The list of names is on the desk.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct verb: 'Neither of the answers ___ correct.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "be" },
            { id: "b", text: "were both" },
            { id: "c", text: "are" },
            { id: "d", text: "is" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "'Neither' is singular." }],
            steps: [
              { reasoning: "'Neither' refers to one of two, so singular 'is'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "is",
          },
        },
        {
          id: "ciege-u6-s1-ag-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct this run-on: 'We missed the bus we ran to the station anyway.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Run-on", statement: "Join clauses properly." }],
            steps: [
              { reasoning: "Identify the two complete thoughts.", marks: 1, markCode: "AO2" },
              { reasoning: "Separate or join with conjunction/semicolons.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'We missed the bus, so we ran to the station anyway.' or two sentences.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Split or joined with conjunction",
          },
        },
        {
          id: "ciege-u6-s1-ag-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Because it was raining." },
            { id: "b", text: "Running through the park." },
            { id: "c", text: "The children played outside." },
            { id: "d", text: "After the long journey." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Complete sentence", statement: "Needs subject and verb." }],
            steps: [
              { reasoning: "Only 'The children played outside' has a subject and a verb.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The children played outside.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct this sentence: 'Each of the students have a textbook.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "'Each' is singular." }],
            steps: [
              { reasoning: "'Each' takes a singular verb: 'has'.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'Each of the students has a textbook.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Each of the students has a textbook.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct verb: 'The news ___ shocking.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "have been" },
            { id: "b", text: "were" },
            { id: "c", text: "are" },
            { id: "d", text: "is" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "'News' is singular." }],
            steps: [
              { reasoning: "'News' looks plural but is singular: 'is shocking'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "is",
          },
        },
        {
          id: "ciege-u6-s1-ag-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct this sentence for grammar and sentence structure: 'the group of friends were late they missed the start of the film'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Multiple errors", statement: "Fix agreement and run-on." }],
            steps: [
              { reasoning: "Capital letter at the start.", marks: 1, markCode: "AO2" },
              { reasoning: "Subject is 'group' (singular): 'was late'.", marks: 1, markCode: "AO2" },
              { reasoning: "Split the run-on into two sentences or use a conjunction.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The group of friends was late. They missed the start of the film.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The group of friends was late. They missed the start of the film.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct verb: 'The teacher, along with the students, ___ excited.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "is" },
            { id: "b", text: "were" },
            { id: "c", text: "have been" },
            { id: "d", text: "are" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Phrases between subject and verb don't change number." }],
            steps: [
              { reasoning: "Subject is 'teacher' (singular); 'along with the students' is a phrase.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "is",
          },
        },
        {
          id: "ciege-u6-s1-ag-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What type of error is this? 'Hiking up the hill, the view was amazing.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Error identification", statement: "Name the error type." }],
            steps: [
              { reasoning: "It is a dangling modifier — the view cannot hike.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'Hiking up the hill, I saw an amazing view.' or similar.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Dangling modifier",
          },
        },
        {
          id: "ciege-u6-s1-ag-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Choose the correct correction for: 'There is many problems with this plan.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "There are much problem." },
            { id: "b", text: "There are many problems." },
            { id: "c", text: "There is many problem." },
            { id: "d", text: "There is much problems." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "'Problems' is plural." }],
            steps: [
              { reasoning: "'Problems' is plural so 'are' is needed.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "There are many problems.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this passage fixing all grammar errors: 'the team of girls was proud they had won the match everyones cheered loudly'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Editing", statement: "Fix all errors." }],
            steps: [
              { reasoning: "Capital letter at start; 'everyone' needs an apostrophe.", marks: 1, markCode: "AO2" },
              { reasoning: "Subject 'team' is singular: 'was proud' is correct.", marks: 1, markCode: "AO2" },
              { reasoning: "Split the run-on: 'They had won the match. Everyone's cheered loudly.'", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The team of girls was proud they had won the match. Everyone's cheered loudly.' (or with 'because')", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The team of girls was proud they had won the match. Everyone's cheered loudly.",
          },
        },
      ],
    },
    {
      id: "ciege-u6-s1-punctuation",
      title: "Punctuation and modifiers",
      skill: "Use punctuation precisely and avoid dangling modifiers.",
      lesson: {
        sections: [
          {
            heading: "Punctuation rules",
            body: "Commas separate items in lists and clauses. Apostrophes show possession ('the dog's bone') or contraction ('don't'). Colons introduce lists or explanations; semicolons join related clauses.",
          },
          {
            heading: "Modifiers",
            body: "A modifier must clearly describe what it modifies. 'Walking to school, the rain started' is wrong — the rain isn't walking. Fix: 'Walking to school, I got caught in the rain.'",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Correct: 'Running late, the bus was missed.'",
          solution: "'Running late, I missed the bus.' — the modifier must attach to the person running.",
        },
      },
      questions: [
        {
          id: "ciege-u6-s1-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses an apostrophe correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dogs bone." },
            { id: "b", text: "The dogs' bone." },
            { id: "c", text: "The dog bone." },
            { id: "d", text: "The dog's bone." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe", statement: "Shows possession." }],
            steps: [
              { reasoning: "'Dog's' shows the bone belongs to one dog.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The dog's bone.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct this dangling modifier: 'Walking to school, the rain started.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dangling modifier", statement: "Modifier must attach to subject." }],
            steps: [
              { reasoning: "The rain can't walk — the modifier is dangling.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'Walking to school, I got caught in the rain.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Walking to school, I got caught in the rain.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Punctuate this list correctly: 'I need to buy milk bread and eggs.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "List punctuation", statement: "Commas between items." }],
            steps: [
              { reasoning: "Identify the list items.", marks: 1, markCode: "AO2" },
              { reasoning: "Add commas: 'I need to buy milk, bread and eggs.'", marks: 1, markCode: "AO2" },
              { reasoning: "Full stop at end.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "milk, bread and eggs.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct this sentence for both grammar and punctuation: 'the childs toys are messy they need tidying up'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Multiple errors", statement: "Fix all errors." }],
            steps: [
              { reasoning: "'Childs' → 'children's' (irregular plural).", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter at start.", marks: 1, markCode: "AO2" },
              { reasoning: "Split into two sentences or use conjunction.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The children's toys are messy. They need tidying up.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The children's toys are messy. They need tidying up.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence shows correct plural possession?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The girls' bags are heavy." },
            { id: "b", text: "The girls's bags are heavy." },
            { id: "c", text: "The girls bags are heavy." },
            { id: "d", text: "The girl's bags are heavy." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe", statement: "Plural possessive: apostrophe after s." }],
            steps: [
              { reasoning: "'Girls' is already plural ending in s, so the apostrophe goes after it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The girls' bags are heavy.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct this comma splice: 'It was raining we stayed inside.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma splice", statement: "A comma alone can't join two sentences." }],
            steps: [
              { reasoning: "Replace the comma with a full stop or a joining word.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'It was raining, so we stayed inside.' or 'It was raining. We stayed inside.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Full stop or conjunction",
          },
        },
        {
          id: "ciege-u6-s1-pu-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses a semicolon correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "I like tea; however it is warm." },
            { id: "b", text: "I like tea; because it is warm." },
            { id: "c", text: "I like tea,; it is warm." },
            { id: "d", text: "I like tea; it is warm." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Semicolon", statement: "Joins two related complete sentences." }],
            steps: [
              { reasoning: "A semicolon joins two complete, related clauses without a conjunction.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I like tea; it is warm.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct this dangling modifier: 'After eating lunch, the homework was done.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dangling modifier", statement: "The doer must be the subject." }],
            steps: [
              { reasoning: "Homework can't eat lunch — the modifier dangles.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'After eating lunch, I did my homework.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "After eating lunch, I did my homework.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the apostrophe correctly for a contraction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Its' raining outside." },
            { id: "b", text: "It's raining outside." },
            { id: "c", text: "Its raining outside." },
            { id: "d", text: "It' raining outside." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe", statement: "'It's' = 'it is'." }],
            steps: [
              { reasoning: "'It's' with apostrophe means 'it is'; 'its' shows possession.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "It's raining outside.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Punctuate this list correctly: 'For the trip we need a tent a stove and warm clothes.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "List punctuation", statement: "Commas between items." }],
            steps: [
              { reasoning: "Identify the three items: tent, stove, warm clothes.", marks: 1, markCode: "AO2" },
              { reasoning: "Add commas: 'a tent, a stove and warm clothes'.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'For the trip we need a tent, a stove and warm clothes.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "a tent, a stove and warm clothes.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses a colon correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She bought: three things." },
            { id: "b", text: "She packed: her bag was heavy." },
            { id: "c", text: "She bought three things; a pen, a ruler and an eraser." },
            { id: "d", text: "She bought three things: a pen, a ruler and an eraser." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Colon", statement: "Introduces a list or explanation." }],
            steps: [
              { reasoning: "The colon introduces the list of items.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "She bought three things: a pen, a ruler and an eraser.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct this sentence for grammar and punctuation: 'the two brothers dogs are barking they wont stop'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Multiple errors", statement: "Fix all errors." }],
            steps: [
              { reasoning: "Capital letter at the start.", marks: 1, markCode: "AO2" },
              { reasoning: "Show possession with an apostrophe: 'brothers' or 'brothers'' dogs'.", marks: 1, markCode: "AO2" },
              { reasoning: "Split the run-on or add a conjunction.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The two brothers' dogs are barking. They won't stop.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The two brothers' dogs are barking. They won't stop.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence has all punctuation correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "We went to the park and we played football." },
            { id: "b", text: "We went to the park and, we played football." },
            { id: "c", text: "We went to the park, and we played football." },
            { id: "d", text: "We went to the park, and, we played football." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma before conjunction", statement: "Comma before 'and' joining two clauses." }],
            steps: [
              { reasoning: "A comma before 'and' is needed when joining two complete sentences.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "We went to the park, and we played football.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fix the apostrophes in this sentence: 'the teachers desk is full of the students books'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Possessive apostrophe", statement: "Apostrophe shows ownership." }],
            steps: [
              { reasoning: "'Teacher's desk' (one teacher) and 'students' books' (plural).", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The teacher's desk is full of the students' books.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The teacher's desk is full of the students' books.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Choose the correct sentence.",
          response: { type: "mcq", choices: [
            { id: "a", text: "The buses' arrived late." },
            { id: "b", text: "The bus's arrived late." },
            { id: "c", text: "The buses arrived late." },
            { id: "d", text: "The bus's' arrived late." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe", statement: "No apostrophe for plurals." }],
            steps: [
              { reasoning: "'Buses' is plural but not possessive, so no apostrophe.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The buses arrived late.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite these two sentences as one correctly punctuated sentence: 'The exam was difficult. I passed with a good grade.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Joining sentences", statement: "Use semicolon or conjunction." }],
            steps: [
              { reasoning: "Identify the two related sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Join with a semicolon or a conjunction such as 'but'/'and'.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The exam was difficult, but I passed with a good grade.' or 'The exam was difficult; I passed with a good grade.'", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter and full stop correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The exam was difficult, but I passed with a good grade.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u6-s1-grammar-notes",
      title: "Grammar and punctuation — revision notes",
      summary: "Agreement, run-ons, comma splices, modifiers, apostrophes.",
      sections: [
        { heading: "Grammar", body: "Verb matches subject. Every sentence needs subject + verb. Watch for phrases between them." },
        { heading: "Punctuation", body: "No comma splices or run-ons. Apostrophes for possession. Modifiers must clearly attach to their subject." },
      ],
    },
  ],
};
