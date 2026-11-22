import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mll1-u2-lesson-2-1",
  code: "2-1",
  title: "Sentences and Punctuation",
  goal: "I CAN write a complete sentence with a capital letter and a full stop, and use question marks, exclamation marks and commas correctly.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Sentence", definition: "A group of words that makes a complete idea and can stand alone." },
    { term: "Capital letter", definition: "The big form of a letter, used at the start of a sentence and for names." },
    { term: "Full stop", definition: "The dot (.) that ends a statement sentence." },
    { term: "Question mark", definition: "The mark (?) that ends a question." },
    { term: "Exclamation mark", definition: "The mark (!) that shows strong feeling, like surprise or excitement." },
    { term: "Comma", definition: "A small pause mark (,) used in lists and after openers like 'After school,'." },
  ],
  concepts: [
    {
      id: "mll1-u2-sentence-basics",
      title: "Building a sentence",
      skill: "Write complete sentences starting with a capital and ending with the right punctuation.",
      lesson: {
        sections: [
          {
            heading: "What makes a sentence",
            body: "A **sentence** needs two things: it must make a **complete idea**, and it must start with a **capital letter** and end with a **full stop**, **question mark** or **exclamation mark**. 'The dog ran.' is a sentence. 'Running fast.' is not — it does not say who or what ran.",
          },
          {
            heading: "Ending marks",
            body: "**Statements** end with a **full stop**: 'The bell rang.' **Questions** end with a **question mark**: 'Did the bell ring?' **Exclamations** end with an **exclamation mark** when the feeling is strong: 'Watch out!' Use exclamation marks only when you really mean it.",
          },
          {
            heading: "Four sentence types",
            body: "**Statements** tell something. **Questions** ask something. **Commands** tell someone to do something ('Close the door.'). **Exclamations** show strong feeling. Knowing which type you are writing helps you pick the right ending mark.",
          },
        ],
        keyFormulas: [
          { name: "Sentence checklist", statement: "Capital letter + complete idea + correct ending mark." },
        ],
        workedExample: {
          problem: "Fix this: 'where is my hat'",
          solution: "It is a question, so it needs a capital letter and a question mark: 'Where is my hat?'",
        },
      },
      questions: [
        {
          id: "mll1-u2-sentence-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cat slept on the mat." },
              { id: "b", text: "Running down the hill quickly." },
              { id: "c", text: "Under the big blue table." },
              { id: "d", text: "Because it was raining." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence", statement: "A sentence expresses a complete idea with a subject and usually a verb." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): only 'The cat slept on the mat.' makes a complete idea — the others are fragments.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The cat slept on the mat.",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add the correct ending punctuation and capital letter to each: (a) 'my bike has a flat tyre' (b) 'can you help me fix it'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital and ending mark", statement: "Every sentence starts with a capital letter and ends with the mark that matches its type." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): (a) is a statement — 'My bike has a flat tyre.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): (b) is a question — 'Can you help me fix it?'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) My bike has a flat tyre. (b) Can you help me fix it?",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Rewrite this messy writing as three proper sentences: 'we went to the park on saturday we played football then we had ice cream it was a great day'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence boundaries", statement: "Each complete idea needs its own capital letter and ending mark." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): split at the ideas — park/football is one sentence, ice cream another, the feeling a third.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): correct output such as 'We went to the park on Saturday. We played football, then we had ice cream. It was a great day.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): every sentence has a capital letter, 'Saturday' is capitalized as a day name, and each ends with a full stop.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "We went to the park on Saturday. We played football, then we had ice cream. It was a great day.",
            commonErrors: ["Forgetting to capitalize 'Saturday' — days of the week are proper nouns."],
          },
        },
        {
          id: "mll1-u2-sentence-basics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a command sentence telling a friend to close the window.", marks: 1 },
            { label: "b", prompt: "Write a question asking what time dinner is.", marks: 1 },
            { label: "c", prompt: "Write an exclamation showing surprise that it is snowing in June.", marks: 1 },
            { label: "d", prompt: "Explain why the exclamation mark in (c) is appropriate but would not be appropriate in (b).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ending marks by type", statement: "Commands and statements take full stops, questions take question marks, strong feelings take exclamation marks." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): a command such as 'Close the window, please.' — capital, imperative verb, full stop.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): a question such as 'What time is dinner?' — capital and question mark.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): an exclamation such as 'It is snowing in June!' — exclamation mark shows surprise.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D (Using language): the exclamation mark matches strong surprise in (c).", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D (Using language): a question only asks for information, so a question mark is correct in (b); using '!' would wrongly suggest shouting or strong feeling.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) e.g. 'Close the window, please.' (b) 'What time is dinner?' (c) 'It is snowing in June!' (d) '!' shows strong feeling; questions take '?'.",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After the long movie." },
              { id: "b", text: "Because of the rain." },
              { id: "c", text: "Running very fast." },
              { id: "d", text: "We ate pizza for dinner." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Complete sentence", statement: "A sentence must express a complete idea." }],
            steps: [{ reasoning: "Criterion D (Using language): only 'We ate pizza for dinner.' is complete — the others are fragments, (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** We ate pizza for dinner.",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ending mark should this sentence have? 'Look out for the car!'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comma" },
              { id: "b", text: "Full stop" },
              { id: "c", text: "Question mark" },
              { id: "d", text: "Exclamation mark" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Ending marks", statement: "Strong feeling uses an exclamation mark." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Look out!' shows urgent feeling — exclamation mark, (c).", marks: 1, markCode: "D" }],
            finalAnswer: "**(c)** Exclamation mark",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is a QUESTION?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shop closes at nine." },
              { id: "b", text: "What time does the shop close?" },
              { id: "c", text: "The shop is very busy!" },
              { id: "d", text: "Close the shop door." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Sentence types", statement: "Questions ask something and end with a question mark." }],
            steps: [{ reasoning: "Criterion D (Using language): 'What time does the shop close?' asks for information — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** What time does the shop close?",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add capitals and ending marks: (a) 'the concert starts at seven' (b) 'did you bring your ticket'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital and ending mark", statement: "Sentences start with capitals and end with the mark matching their type." }],
            steps: [
              { reasoning: "Criterion D (Using language): (a) is a statement — 'The concert starts at seven.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): (b) is a question — 'Did you bring your ticket?'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) The concert starts at seven. (b) Did you bring your ticket?",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fix this run-on: 'i woke up late i missed the bus i was sad all day'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sentence boundaries", statement: "Each complete idea needs a capital and an ending mark." }],
            steps: [
              { reasoning: "Criterion D (Using language): split into sentences, e.g. 'I woke up late. I missed the bus. I was sad all day.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): capitals on 'I' and each sentence start, full stops at each end.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "I woke up late. I missed the bus. I was sad all day.",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write one sentence for each type: a statement, a question, a command and an exclamation. All must be about a football match.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sentence types", statement: "Statements tell, questions ask, commands order, exclamations show feeling." }],
            steps: [
              { reasoning: "Criterion D (Using language): a statement such as 'Our team won the match.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): a question such as 'Did you see the goal?' and a command such as 'Pass me the ball.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): an exclamation such as 'What a goal!' with an exclamation mark.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Our team won the match.' / 'Did you see the goal?' / 'Pass me the ball.' / 'What a goal!'",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should you NOT use an exclamation mark in 'What time is dinner?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too long a sentence" },
              { id: "b", text: "Questions can never have punctuation" },
              { id: "c", text: "A question only asks for information; '!' wrongly suggests shouting or strong feeling" },
              { id: "d", text: "Exclamation marks are only for names" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Ending marks by type", statement: "The ending mark must match the sentence type and feeling." }],
            steps: [{ reasoning: "Criterion D (Using language): a plain question takes '?'; '!' would wrongly add emotion — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** '!' wrongly suggests shouting or strong feeling",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "This sentence is wrong: 'because it was raining we stayed inside and played cards all afternoon and it was fun.' Explain what is wrong and rewrite it correctly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sentence boundaries", statement: "Long strings of ideas need splitting into complete sentences." }],
            steps: [
              { reasoning: "Criterion B (Organizing): several complete ideas are joined with no punctuation — it is a run-on.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D (Using language): correct split, e.g. 'Because it was raining, we stayed inside. We played cards all afternoon. It was fun.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): a comma may follow the opener 'Because it was raining' and capitals begin each sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "It is a run-on; e.g. 'Because it was raining, we stayed inside. We played cards all afternoon. It was fun.'",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a statement about your favourite food.", marks: 1 },
            { label: "b", prompt: "Write a question asking a friend what their favourite food is.", marks: 1 },
            { label: "c", prompt: "Write an exclamation showing excitement about a meal.", marks: 1 },
            { label: "d", prompt: "Explain why each ending mark you used is correct.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Ending marks", statement: "Statements take '.', questions take '?', strong feelings take '!'" }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): a statement with capital and full stop, e.g. 'My favourite food is pasta.'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): a question with '?' such as 'What is your favourite food?'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): an exclamation such as 'This cake is amazing!'", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D (Using language): '.' for a statement, '?' for a question — marks match sentence type.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D (Using language): '!' is correct in (c) because it shows real excitement.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) e.g. 'My favourite food is pasta.' (b) 'What is your favourite food?' (c) 'This cake is amazing!' (d) Marks match type and feeling.",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT a complete sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog barked at the postman." },
              { id: "b", text: "Running down the hill." },
              { id: "c", text: "We watched a film." },
              { id: "d", text: "She finished her homework." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Complete sentence", statement: "A complete sentence expresses a full idea with a subject and verb." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Running down the hill.' is a fragment — it does not say who is running, (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Running down the hill.",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is a COMMAND?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Put on your shoes." },
              { id: "b", text: "My shoes are new." },
              { id: "c", text: "What nice shoes!" },
              { id: "d", text: "Where is my shoe?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Commands", statement: "Commands tell someone to do something." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Put on your shoes.' orders someone to act — a command, (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Put on your shoes.",
          },
        },
        {
          id: "mll1-u2-sentence-basics-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write two sentences about a rainy day — one statement and one exclamation.", marks: 2 },
            { label: "b", prompt: "Explain why the exclamation fits the situation better than a full stop.", marks: 1 },
            { label: "c", prompt: "Rewrite 'we stayed home because of the rain' as two proper sentences.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sentence types and boundaries", statement: "Each idea gets its own capital, punctuation and ending mark." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): a statement such as 'The rain fell all afternoon.'", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): an exclamation such as 'What a storm!' with '!' showing feeling.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): the exclamation matches strong feeling (surprise/excitement at the storm); a full stop would sound flat.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): correct split such as 'We stayed home. It was because of the rain.' or 'Because of the rain, we stayed home.' as one clean sentence.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): capitals and punctuation correct in the rewrite.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) e.g. 'The rain fell all afternoon.' / 'What a storm!' (b) '!' matches the strong feeling. (c) e.g. 'We stayed home. It was because of the rain.'",
          },
        },
      ],
    },
    {
      id: "mll1-u2-punctuation-commas",
      title: "Commas and capital letters",
      skill: "Use commas in lists and after openers, and capitalize names and sentence starts.",
      lesson: {
        sections: [
          {
            heading: "Commas in lists",
            body: "Use a **comma** to separate items in a list: 'I packed a hat, sunscreen and a water bottle.' The last item often follows 'and' or 'or' — no comma is needed before it.",
          },
          {
            heading: "Commas after openers",
            body: "When a sentence begins with a little starter like **After school**, **On Monday** or **Because it rained**, put a comma after it: 'After school, we walked home.' This shows where the starter ends.",
          },
          {
            heading: "Capital letters",
            body: "Capitalize the **first letter of every sentence**, **names of people** ('Amara'), **places** ('Lisbon'), **days and months** ('Friday', 'June') and the pronoun **I**.",
          },
        ],
        keyFormulas: [
          { name: "Comma rules", statement: "Commas separate list items and follow opening words like 'After lunch,'." },
          { name: "Capital rules", statement: "Capitalize sentence starts, names, places, days, months and the word 'I'." },
        ],
        workedExample: {
          problem: "Punctuate: 'on tuesday we bought apples oranges and bread then we went home'",
          solution: "'On Tuesday, we bought apples, oranges and bread. Then we went home.'",
        },
      },
      questions: [
        {
          id: "mll1-u2-punctuation-commas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does the comma go? 'I like pizza pasta and salad.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like pizza, pasta, and salad." },
              { id: "b", text: "I like pizza, pasta and salad." },
              { id: "c", text: "I like pizza pasta and, salad." },
              { id: "d", text: "I, like pizza pasta and salad." },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comma in lists", statement: "Commas separate list items; the item before 'and' does not need one." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): commas go between 'pizza' and 'pasta'; the 'and' before 'salad' needs no comma — (c).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** I like pizza, pasta and salad.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add commas and capitals where needed: 'after lunch we walked to the park on friday'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Opener comma and capitals", statement: "A comma follows an opening time phrase; days and sentence starts are capitalized." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'After lunch,' takes a comma because it opens the sentence.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): correct output — 'After lunch, we walked to the park on Friday.' Capitals on 'After' and 'Friday', comma after the opener, full stop at the end.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "After lunch, we walked to the park on Friday.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Correct the punctuation in this sentence and explain each change: 'my friend zoe visited me on sunday we played chess and ate pizza'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital and comma rules", statement: "Capitalize names, days and sentence starts; use commas in lists." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): corrected sentence — 'My friend Zoe visited me on Sunday. We played chess and ate pizza.' (or one sentence with commas: 'My friend Zoe visited me on Sunday, and we played chess and ate pizza.')", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'My' and 'Zoe' and 'Sunday' are capitalized as sentence start, name and day.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): two complete ideas were joined with no punctuation — a full stop (or comma + 'and') separates them.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "My friend Zoe visited me on Sunday. We played chess and ate pizza.",
            commonErrors: ["Capitalizing 'friend' or 'visited' — only names, days, months and sentence starts take capitals."],
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Rewrite with correct punctuation: 'when school finishes i walk home with my sister ana'", marks: 2 },
            { label: "b", prompt: "Explain why a comma goes after 'when school finishes'.", marks: 1 },
            { label: "c", prompt: "Write a sentence of your own that begins with an opening time phrase and contains a list of three things you do at home.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas and capitals", statement: "Openers take a comma; names and 'I' are capitalized; list items are separated by commas." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): 'When school finishes, I walk home with my sister Ana.'", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): capitals on 'When', 'I', 'Ana'; comma after the opener.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): the opener 'when school finishes' is a separate chunk; the comma marks where it ends and the main sentence begins.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D (Using language): an original sentence such as 'After dinner, I wash the dishes, feed the cat and read a book.'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): it has the opener comma, capital letters and commas separating the three list items.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 'When school finishes, I walk home with my sister Ana.' (b) The comma marks the end of the opening time phrase. (c) e.g. 'After dinner, I wash the dishes, feed the cat and read a book.'",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence has the commas in the right place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I packed a hat, sunscreen and a water bottle." },
              { id: "b", text: "I, packed a hat sunscreen and a water bottle." },
              { id: "c", text: "I packed, a hat sunscreen, and a water bottle." },
              { id: "d", text: "I packed a hat sunscreen and a water bottle." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma in lists", statement: "Commas separate list items." }],
            steps: [{ reasoning: "Criterion D (Using language): commas go between 'hat' and 'sunscreen'; none needed before 'and' — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** I packed a hat, sunscreen and a water bottle.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word should be capitalized? 'my friend calls me on monday.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "on" },
              { id: "b", text: "monday" },
              { id: "c", text: "calls" },
              { id: "d", text: "friend" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital letters", statement: "Days of the week are capitalized." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Monday' is a day name — it takes a capital, (c).", marks: 1, markCode: "D" }],
            finalAnswer: "**(c)** monday → Monday",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where does the comma go? 'On Sunday morning we went to the beach.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On Sunday morning, we went to the beach." },
              { id: "b", text: "On Sunday morning we, went to the beach." },
              { id: "c", text: "On Sunday, morning we went to the beach." },
              { id: "d", text: "On, Sunday morning we went to the beach." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma after opener", statement: "A comma follows an opening time phrase." }],
            steps: [{ reasoning: "Criterion D (Using language): 'On Sunday morning' is the opener — comma after it, (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** On Sunday morning, we went to the beach.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add commas and capitals: 'in june we visited my aunt in paris'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capitals and commas", statement: "Months and places are capitalized; openers take commas." }],
            steps: [
              { reasoning: "Criterion D (Using language): capitals — 'In', 'June', 'Paris' (sentence start, month, place).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): correct output — 'In June, we visited my aunt in Paris.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "In June, we visited my aunt in Paris.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add commas where needed: 'For breakfast I had eggs toast and orange juice.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma in lists", statement: "Commas separate items in a list." }],
            steps: [
              { reasoning: "Criterion D (Using language): commas between 'eggs' and 'toast' — 'For breakfast, I had eggs, toast and orange juice.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): the opener 'For breakfast' also takes a comma, and 'I' is capitalized.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "For breakfast, I had eggs, toast and orange juice.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Correct this: 'my dog rex loves to chase balls in the park on saturdays' and explain each change.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital and comma rules", statement: "Names of pets/people and days take capitals; openers take commas." }],
            steps: [
              { reasoning: "Criterion D (Using language): corrected — 'My dog Rex loves to chase balls in the park on Saturdays.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): capitals — 'My' (sentence start), 'Rex' (pet's name), 'Saturdays' (day name).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): no comma is needed because there is no list or opener — the sentence flows as one idea.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "My dog Rex loves to chase balls in the park on Saturdays.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence uses capitals correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "my Friend sam lives in london." },
              { id: "b", text: "My friend sam lives in London." },
              { id: "c", text: "My Friend sam Lives in london." },
              { id: "d", text: "My friend Sam lives in London." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital letters", statement: "Capitalize sentence starts, names and places only." }],
            steps: [{ reasoning: "Criterion D (Using language): 'My', 'Sam' and 'London' need capitals; 'friend' and 'lives' do not — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** My friend Sam lives in London.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Punctuate this and explain the commas: 'because it rained we stayed inside and played monopoly until dinner'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Opener comma", statement: "A comma follows an opening word group like 'Because it rained'." }],
            steps: [
              { reasoning: "Criterion D (Using language): correct output — 'Because it rained, we stayed inside and played Monopoly until dinner.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): 'Because' is capitalized as the sentence start and 'Monopoly' as a game name.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D (Using language): the comma after 'rained' marks the end of the opening reason-phrase.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Because it rained, we stayed inside and played Monopoly until dinner.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Rewrite with correct punctuation: 'on wednesday we bought milk eggs and bread at the shop'", marks: 2 },
            { label: "b", prompt: "Explain why there is no comma before 'and bread'.", marks: 1 },
            { label: "c", prompt: "Write a sentence beginning with a place name and containing a list of three items.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas and capitals", statement: "Openers and lists take commas; names take capitals." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): 'On Wednesday, we bought milk, eggs and bread at the shop.'", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): capitals on 'On', 'Wednesday'; commas after the opener and between list items.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): the last list item follows 'and' — no comma is needed before it.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): an original sentence such as 'In Lisbon, we saw the castle, the beach and the old tram.'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): correct capitals, opener comma and list commas.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'On Wednesday, we bought milk, eggs and bread at the shop.' (b) No comma before 'and' in a simple list. (c) e.g. 'In Lisbon, we saw the castle, the beach and the old tram.'",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'i visited my cousin in june', which words need capital letters?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I and June" },
              { id: "b", text: "cousin and june" },
              { id: "c", text: "visited and cousin" },
              { id: "d", text: "my and in" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Capitals", statement: "The pronoun 'I' and months are capitalized." }],
            steps: [{ reasoning: "Criterion D (Using language): 'I' and 'June' need capitals — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** I and June",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is punctuated correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "for my birthday i got a bike, a helmet and a bell." },
              { id: "b", text: "For my birthday I got a bike a helmet and a bell." },
              { id: "c", text: "For my birthday I got, a bike, a helmet and a bell." },
              { id: "d", text: "For my birthday, I got a bike, a helmet and a bell." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas and capitals", statement: "Opener takes a comma; list items are separated; 'I' is capitalized." }],
            steps: [{ reasoning: "Criterion D (Using language): (b) has the opener comma, list commas, capital 'I' and a full stop.", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** For my birthday, I got a bike, a helmet and a bell.",
          },
        },
        {
          id: "mll1-u2-punctuation-commas-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Rewrite with correct punctuation: 'every morning i walk to school with my friend ben'", marks: 2 },
            { label: "b", prompt: "Explain why 'Every morning' needs a comma after it.", marks: 1 },
            { label: "c", prompt: "Write your own sentence with an opener, a list of two things, and a capitalized name or place.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Punctuation conventions", statement: "Openers take commas; names take capitals; lists take commas." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): 'Every morning, I walk to school with my friend Ben.'", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): capital 'I' and 'Ben'; comma after the opener.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): 'Every morning' is an opening time phrase; the comma marks where it ends.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D (Using language): an original sentence such as 'After lunch, I ate soup and bread at the café.'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): correct punctuation throughout.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'Every morning, I walk to school with my friend Ben.' (b) Comma ends the opener. (c) e.g. 'After lunch, I ate soup and bread at the café.'",
          },
        },
      ],
    },
  ],
};
