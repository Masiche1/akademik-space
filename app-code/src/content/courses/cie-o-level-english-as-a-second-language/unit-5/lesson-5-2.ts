import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "oles-u5-lesson-5-2",
  code: "5-2",
  title: "Common learner errors",
  goal: "I CAN recognise and correct typical ESL grammar mistakes.",
  standards: ["1120 Grammar: accuracy"],
  vocabulary: [
    { term: "Article", definition: "'a', 'an' or 'the' — words that introduce nouns." },
    { term: "Preposition", definition: "A word showing position or relation — in, on, at, for, to." },
    { term: "Countable noun", definition: "A noun you can count — book, apple, idea." },
    { term: "Uncountable noun", definition: "A noun you cannot count — water, advice, information." },
    { term: "Double negative", definition: "Two negatives in one sentence creating confusion — 'I don't know nothing'." },
  ],
  concepts: [
    {
      id: "oles-u5-articles",
      title: "Articles and nouns",
      skill: "Choose a/an/the correctly and handle countable vs uncountable nouns.",
      lesson: {
        sections: [
          { heading: "A, an, the", body: "'A/an' introduces something new or one of many: 'I saw a dog.' 'The' refers to something specific or already mentioned: 'The dog was brown.' Use 'an' before vowel sounds ('an hour'). No article for general plurals and uncountables: 'Dogs are loyal', 'Water is essential'." },
          { heading: "Countable vs uncountable", body: "Countable nouns take a/an and plurals: 'two books'. Uncountable nouns take no article in general and no plural: 'advice', 'information', 'furniture' — say 'some advice', 'a piece of advice', never 'advices' or 'informations'." },
        ],
        keyFormulas: [
          { name: "Articles", statement: "a/an = new/one; the = specific; none = general plural/uncountable." },
        ],
        workedExample: {
          problem: "Correct: 'She gave me an advice about my essay.'",
          solution: "'Advice' is uncountable → 'She gave me some advice about my essay' or 'a piece of advice'.",
        },
      },
      questions: [
        {
          id: "oles-u5-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which is correct? 'I need ___ advice.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "advices" },
            { id: "b", text: "some" },
            { id: "c", text: "a" },
            { id: "d", text: "an" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Uncountable", statement: "Advice takes no article/plural." }], steps: [{ reasoning: "Advice is uncountable → 'some advice'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** some" },
        },
        {
          id: "oles-u5-ar-q2", difficulty: "core", totalMarks: 2,
          stem: "Choose: '___ hour' — a or an?",
          response: { type: "mcq", choices: [
            { id: "a", text: "no article" },
            { id: "b", text: "a" },
            { id: "c", text: "an" },
            { id: "d", text: "the" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "An before vowels", statement: "Use 'an' before vowel sounds." }], steps: [
            { reasoning: "'Hour' starts with a vowel sound → 'an hour'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(c)** an" },
        },
        {
          id: "oles-u5-ar-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain when to use 'a/an' versus 'the'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Articles", statement: "a/an = new/one of many; the = specific." }], steps: [
            { reasoning: "'A/an' introduces something new or one of many.", marks: 1, markCode: "AO2" },
            { reasoning: "'The' refers to something specific or already mentioned.", marks: 1, markCode: "AO2" },
            { reasoning: "Example: 'I saw a dog. The dog was brown.'", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "a/an = new or one of many; the = specific or known." },
        },
        {
          id: "oles-u5-ar-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Articles and nouns review.",
          parts: [
            { label: "a", prompt: "When do you use 'a' vs 'an'?", marks: 2 },
            { label: "b", prompt: "What is an uncountable noun?", marks: 2 },
            { label: "c", prompt: "Give two uncountable nouns.", marks: 2 },
            { label: "d", prompt: "How do you quantify uncountables?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Articles/nouns", statement: "a/an by sound; uncountables take some/piece." }], steps: [
            { part: "a", reasoning: "'A' before consonant sounds, 'an' before vowel sounds.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct rule.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "A noun you cannot count — no plural form.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Any two: advice, information, water, furniture, homework.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Use 'some' or 'a piece of' — never a plural.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct quantifiers.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) sound rule (b) cannot count (c) two nouns (d) some/piece of",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u5-ar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which sentence uses articles correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "I saw the dog and a dog was brown." },
            { id: "b", text: "I saw a dog and the dog was brown." },
            { id: "c", text: "I saw an dog in the park." },
            { id: "d", text: "I saw a informations on the board." },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Articles", statement: "a/an = new; the = specific; none for uncountables." }], steps: [{ reasoning: "Only (a) uses 'a' for a new dog and 'the' for the known dog.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** I saw a dog and the dog was brown." },
        },
        {
          id: "oles-u5-ar-q6", difficulty: "core", totalMarks: 2,
          stem: "Choose the correct article: 'She is ___ honest person.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "no article" },
            { id: "b", text: "a" },
            { id: "c", text: "the" },
            { id: "d", text: "an" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "An before vowels", statement: "Use 'an' before vowel sounds." }], steps: [
            { reasoning: "'Honest' starts with a vowel sound → 'an honest person'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(d)** an" },
        },
        {
          id: "oles-u5-ar-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many articles appear in this sentence: 'I saw a dog. The dog was brown.'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Articles", statement: "Count a/an/the in the sentence." }], steps: [
            { reasoning: "'a' and 'The' are the two articles; 'the' appears once, 'a' once → 2.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u5-ar-q8", difficulty: "core", totalMarks: 2,
          stem: "Which of these nouns is uncountable?",
          response: { type: "mcq", choices: [
            { id: "a", text: "book" },
            { id: "b", text: "advice" },
            { id: "c", text: "apple" },
            { id: "d", text: "chair" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Uncountable", statement: "Cannot be counted or pluralised." }], steps: [
            { reasoning: "Advice is uncountable; apple, book and chair are countable.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** advice" },
        },
        {
          id: "oles-u5-ar-q9", difficulty: "core", totalMarks: 1,
          stem: "How many words are in the phrase 'a piece of advice'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Quantifying uncountables", statement: "'a piece of' is the counting phrase." }], steps: [
            { reasoning: "a / piece / of / advice → 4 words.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u5-ar-q10", difficulty: "core", totalMarks: 2,
          stem: "Correct the error: 'I have a lot of homeworks to do.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Uncountable", statement: "Homework takes no plural." }], steps: [
            { reasoning: "'Homework' is uncountable → 'I have a lot of homework to do.'", marks: 1, markCode: "AO2" },
            { reasoning: "Corrected version given.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "I have a lot of homework to do." },
        },
        {
          id: "oles-u5-ar-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Why is 'much waters' wrong?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Water is uncountable — use 'much water'" },
            { id: "b", text: "It is correct English" },
            { id: "c", text: "'Waters' needs the article 'the'" },
            { id: "d", text: "'Much' is only used with countable nouns" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Much/many", statement: "Much with uncountables, many with countables." }], steps: [
            { reasoning: "Water is uncountable → 'much water', never 'many/much waters'.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** much water" },
        },
        {
          id: "oles-u5-ar-q12", difficulty: "foundation", totalMarks: 1,
          stem: "How many of these nouns are uncountable: furniture, chair, luggage, table, bread?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Uncountables", statement: "Identify nouns with no plural form." }], steps: [
            { reasoning: "Furniture, luggage and bread are uncountable → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u5-ar-q13", difficulty: "foundation", totalMarks: 1,
          stem: "'___ university' — which article?",
          response: { type: "mcq", choices: [
            { id: "a", text: "a" },
            { id: "b", text: "no article" },
            { id: "c", text: "an" },
            { id: "d", text: "the" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "An before vowels", statement: "Sound, not spelling, decides." }], steps: [
            { reasoning: "'University' starts with a /j/ consonant sound → 'a university'.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "**(a)** a" },
        },
        {
          id: "oles-u5-ar-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between countable and uncountable nouns, giving two examples of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Countability", statement: "Countable = can be counted/pluralised." }], steps: [
            { reasoning: "Countable nouns can be counted and pluralised: book, apple.", marks: 1, markCode: "AO2" },
            { reasoning: "Uncountable nouns cannot be counted or pluralised: advice, information.", marks: 1, markCode: "AO2" },
            { reasoning: "Two correct examples given for each type.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Countable: book, apple (can pluralise). Uncountable: advice, information (no plural)." },
        },
        {
          id: "oles-u5-ar-q15", difficulty: "challenge", totalMarks: 2,
          stem: "A student writes 'advices', 'informations' and 'homeworks'. How many uncountable nouns were wrongly given a plural?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Uncountables", statement: "These nouns never take a plural." }], steps: [
            { reasoning: "Advice, information and homework are all uncountable → 3 errors.", marks: 1, markCode: "AO2" },
            { reasoning: "Count is correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u5-ar-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which sentence is fully correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She gave me some advice." },
            { id: "b", text: "She gave me an advice." },
            { id: "c", text: "She gave me a advice." },
            { id: "d", text: "She gave me advices." },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Uncountable", statement: "Advice takes 'some' or 'a piece of'." }], steps: [
            { reasoning: "Advice is uncountable → 'some advice' is correct.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** She gave me some advice." },
        },
      ],
    },
    {
      id: "oles-u5-prep",
      title: "Prepositions and common errors",
      skill: "Use correct prepositions and eliminate typical mistakes.",
      lesson: {
        sections: [
          { heading: "Fixed prepositions", body: "Many words take fixed prepositions: 'interested in', 'good at', 'afraid of', 'depend on', 'listen to', 'arrive at/in', 'married to', 'different from'. These must be memorised as chunks — they are the most common ESL error area." },
          { heading: "Other common errors", body: "Double negatives ('I don't know nothing' → 'I don't know anything'); 'much/many' with uncountables ('much water' not 'many waters'); 'since/for' time ('since 2010', 'for three years'); and 'say/tell' ('say something', 'tell someone')." },
        ],
        keyFormulas: [
          { name: "Fixed prepositions", statement: "interested in, good at, afraid of, depend on, listen to." },
        ],
        workedExample: {
          problem: "Correct: 'I am interesting in science.'",
          solution: "Adjective form needed: 'I am interested in science' — 'interesting' describes the thing, 'interested' describes the person.",
        },
      },
      questions: [
        {
          id: "oles-u5-pp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "'Interested ___ what?' — which preposition?",
          response: { type: "mcq", choices: [
            { id: "a", text: "at" },
            { id: "b", text: "for" },
            { id: "c", text: "on" },
            { id: "d", text: "in" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Fixed preposition", statement: "interested in." }], steps: [{ reasoning: "'Interested' always takes 'in'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** in" },
        },
        {
          id: "oles-u5-pp-q2", difficulty: "core", totalMarks: 2,
          stem: "Correct the error: 'I don't know nothing about it.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Double negative", statement: "One negative only." }], steps: [
            { reasoning: "Double negative is incorrect → 'I don't know anything about it.'", marks: 1, markCode: "AO2" },
            { reasoning: "Corrected version given.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "I don't know anything about it." },
        },
        {
          id: "oles-u5-pp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why 'I am interesting in maths' is wrong and how to fix it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "-ed/-ing adjectives", statement: "interested = feeling; interesting = causing." }], steps: [
            { reasoning: "'Interesting' describes things that cause interest.", marks: 1, markCode: "AO2" },
            { reasoning: "'Interested' describes the person who feels interest.", marks: 1, markCode: "AO2" },
            { reasoning: "Fix: 'I am interested in maths.'", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Use 'interested' for the person: 'I am interested in maths.'" },
        },
        {
          id: "oles-u5-pp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Prepositions and common errors review.",
          parts: [
            { label: "a", prompt: "What is a fixed preposition?", marks: 2 },
            { label: "b", prompt: "Give two examples.", marks: 2 },
            { label: "c", prompt: "Why are double negatives wrong?", marks: 2 },
            { label: "d", prompt: "How do you learn prepositions?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Prepositions", statement: "Fixed chunks; learn as units; one negative." }], steps: [
            { part: "a", reasoning: "A preposition that always follows a specific word.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two: interested in, good at, afraid of, depend on.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Two negatives create confusion and are ungrammatical in standard English.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Learn them in chunks with example sentences; practise in writing.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Effective method.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete advice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) fixed partner (b) two examples (c) ungrammatical (d) learn as chunks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u5-pp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "'Good ___ maths' — which preposition?",
          response: { type: "mcq", choices: [
            { id: "a", text: "in" },
            { id: "b", text: "for" },
            { id: "c", text: "on" },
            { id: "d", text: "at" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Fixed preposition", statement: "good at." }], steps: [{ reasoning: "'Good' always takes 'at'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** at" },
        },
        {
          id: "oles-u5-pp-q6", difficulty: "core", totalMarks: 2,
          stem: "Correct the error: 'I am good in maths.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "I am good at maths." },
            { id: "b", text: "I am good of maths." },
            { id: "c", text: "I am good on maths." },
            { id: "d", text: "I am good for maths." },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Fixed preposition", statement: "good at." }], steps: [
            { reasoning: "'Good' takes 'at' → 'good at maths'.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** good at maths" },
        },
        {
          id: "oles-u5-pp-q7", difficulty: "foundation", totalMarks: 1,
          stem: "'Afraid ___ spiders' — which preposition?",
          response: { type: "mcq", choices: [
            { id: "a", text: "from" },
            { id: "b", text: "with" },
            { id: "c", text: "about" },
            { id: "d", text: "of" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Fixed preposition", statement: "afraid of." }], steps: [{ reasoning: "'Afraid' always takes 'of'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** of" },
        },
        {
          id: "oles-u5-pp-q8", difficulty: "foundation", totalMarks: 1,
          stem: "How many of these are correct fixed prepositions: 'interested in', 'good on', 'afraid of', 'depend at', 'listen to'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "convention", name: "Fixed prepositions", statement: "interested in, good at, afraid of, depend on, listen to." }], steps: [
            { reasoning: "Correct: interested in, afraid of, listen to → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u5-pp-q9", difficulty: "core", totalMarks: 2,
          stem: "Correct the error: 'I have lived here since three years.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Since/for", statement: "Since + point in time; for + duration." }], steps: [
            { reasoning: "'Three years' is a duration → 'for three years'.", marks: 1, markCode: "AO2" },
            { reasoning: "Corrected version given.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "I have lived here for three years." },
        },
        {
          id: "oles-u5-pp-q10", difficulty: "core", totalMarks: 2,
          stem: "Which verb completes the sentence: 'Please ___ me the truth.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "say" },
            { id: "b", text: "tell" },
            { id: "c", text: "talk" },
            { id: "d", text: "speak" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Say/tell", statement: "Tell + person; say + thing." }], steps: [
            { reasoning: "'Tell' is used with a person: 'tell me'.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** tell" },
        },
        {
          id: "oles-u5-pp-q11", difficulty: "core", totalMarks: 1,
          stem: "How many prepositions are in this sentence: 'I am interested in science and good at maths'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Prepositions", statement: "Count the linking words." }], steps: [
            { reasoning: "'in' and 'at' → 2 prepositions.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u5-pp-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between 'say' and 'tell' with an example of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Say/tell", statement: "Tell + person; say + thing." }], steps: [
            { reasoning: "'Tell' takes a person: 'tell me', 'tell him'.", marks: 1, markCode: "AO2" },
            { reasoning: "'Say' takes the thing said: 'say hello', 'say that...'.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct examples for each verb.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Tell + person ('tell me'); say + thing ('say hello')." },
        },
        {
          id: "oles-u5-pp-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Which is correct: 'I have lived here ___ 2010'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "from" },
            { id: "b", text: "for" },
            { id: "c", text: "since" },
            { id: "d", text: "during" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Since/for", statement: "Since + point in time." }], steps: [
            { reasoning: "'2010' is a point in time → 'since 2010'.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(c)** since" },
        },
        {
          id: "oles-u5-pp-q14", difficulty: "challenge", totalMarks: 2,
          stem: "A student writes 'depend at' three times in an essay. How many should be changed to 'depend on'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "convention", name: "Fixed preposition", statement: "depend on." }], steps: [
            { reasoning: "All three uses of 'depend at' are wrong → 3 corrections.", marks: 1, markCode: "AO2" },
            { reasoning: "Count is correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u5-pp-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many of these are correct: 'arrive at school', 'arrive on school', 'arrive in school', 'arrive to school'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "convention", name: "Arrive", statement: "arrive at (place), arrive in (city/country)." }], steps: [
            { reasoning: "'arrive at school' and 'arrive in school' are acceptable → 2.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u5-pp-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which sentence uses the correct fixed preposition?",
          response: { type: "mcq", choices: [
            { id: "a", text: "I am married with my best friend." },
            { id: "b", text: "I am married on my best friend." },
            { id: "c", text: "I am married to my best friend." },
            { id: "d", text: "I am married for my best friend." },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Fixed preposition", statement: "married to." }], steps: [
            { reasoning: "'Married' always takes 'to'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(c)** married to" },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u5-5-2-notes", title: "Articles, prepositions, errors — notes", summary: "The highest-frequency ESL accuracy fixes.",
      sections: [
        { heading: "Articles", body: "a/an = new/one; the = specific; uncountables (advice, information) take 'some' or 'a piece of'." },
        { heading: "Prepositions", body: "interested in, good at, afraid of, depend on, listen to — learn as fixed chunks." },
      ] },
  ],
};
