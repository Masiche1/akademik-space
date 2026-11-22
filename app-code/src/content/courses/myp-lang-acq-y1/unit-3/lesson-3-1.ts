import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mla1-u3-lesson-3-1",
  code: "3-1",
  title: "Articles, Plurals and High-Frequency Vocabulary",
  goal: "I CAN use 'a', 'an' and 'the' correctly, make simple plurals, and use common classroom and everyday vocabulary.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Article", definition: "A small word before a noun: 'a', 'an' or 'the'." },
    { term: "Plural", definition: "More than one of something; most English plurals add -s or -es." },
    { term: "Vowel", definition: "The sounds a, e, i, o, u — 'an' is used before vowel sounds." },
    { term: "High-frequency vocabulary", definition: "The most common words of English, learned first." },
    { term: "Word family", definition: "Words related to one another, like 'teach', 'teacher' and 'teaching'." },
  ],
  concepts: [
    {
      id: "mla1-u3-articles-plurals",
      title: "Articles and plurals",
      skill: "Choose a/an/the correctly and form simple plurals.",
      lesson: {
        sections: [
          {
            heading: "A, an and the",
            body: "**A/an** is used for one thing that is not special: 'a book', 'an apple' (an before vowels). **The** is used for a specific thing everyone knows: 'the sun', 'the school'. When you talk about your own things or one of many, use a/an: 'I have got a dog.' When there is only one, use the: 'the moon'.",
          },
          {
            heading: "Making plurals",
            body: "Most words just add **-s**: cat → cats, book → books. Words ending in **-s, -sh, -ch, -x** add **-es**: bus → buses, watch → watches. Words ending in a consonant + **y** change y to **ies**: baby → babies. A few are irregular — learn 'child → children' and 'person → people' early.",
          },
          {
            heading: "Articles with plurals",
            body: "You cannot use 'a' or 'an' with plurals! 'I have got a cats' is wrong. Use no article for general plurals ('I like cats') or **the** for specific ones ('The cats are black'). Remember: a/an = one thing; plural = no a/an.",
          },
        ],
        keyFormulas: [
          { name: "Plural rules", statement: "+s; -s/-sh/-ch/-x → +es; consonant+y → ies" },
          { name: "Article choice", statement: "a/an = one, not specific; the = specific/unique; plural = no a/an" },
        ],
        workedExample: {
          problem: "Choose the correct word: 'I saw ___ elephant at the zoo.' / '___ elephants are big.'",
          solution: "'I saw **an** elephant' (one, vowel sound). '**Elephants** are big' (plural, no article).",
        },
      },
      questions: [
        {
          id: "mla1-u3-articles-plurals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct word: 'She has got ___ apple.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "some" },
              { id: "b", text: "an" },
              { id: "c", text: "a" },
              { id: "d", text: "the" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "a vs an", statement: "'An' is used before words that start with a vowel sound." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'apple' starts with a vowel sound, so 'an'.", working: "an apple", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** an",
            commonErrors: ["Choosing 'a' — 'apple' begins with a vowel."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the plural of each word: watch, baby, box.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plural formation", statement: "-es after s/sh/ch/x; consonant+y → ies; otherwise +s." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'watch' ends in -ch, so +es.", working: "watches", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'baby' ends consonant+y, so y → ies.", working: "babies", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'box' ends in -x, so +es.", working: "boxes", marks: 1, markCode: "D" },
            ],
            finalAnswer: "watches; babies; boxes",
            commonErrors: ["'watchs' and 'boxs' — missing -es.", "'babys' — keeping y instead of ies."],
            examinerNote: "Each correct plural earns 1 mark.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Correct this sentence: 'I have got a dogs and a cats in my house.' Explain the rule you used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "a/an with plurals", statement: "'A/an' is only for singular nouns; plurals take no article or 'the'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — corrected sentence removes 'a' before plurals: 'I have got dogs and cats...'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — explains that a/an is singular only.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — shows understanding of the rule by applying it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'I have got dogs and cats in my house.' — 'a' cannot be used with plurals.",
            commonErrors: ["Changing 'dogs' to 'dog' instead of removing 'a'.", "Correcting without explaining the rule."],
            examinerNote: "Either correction accepted if the rule is explained.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short description of your classroom or bedroom using correct articles and plurals.",
          parts: [
            { label: "a", prompt: "Write 3-4 sentences describing the room.", marks: 3 },
            { label: "b", prompt: "Underline or list every article (a/an/the) you used and check each choice.", marks: 2 },
            { label: "c", prompt: "Check every plural noun ends correctly (-s, -es or -ies).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article and plural accuracy", statement: "a/an for one non-specific thing, the for specific, no article for general plurals." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — 3-4 sentences describing a real room.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct sentence structures and word order.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — articles listed and each choice justified correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — choices show understanding of the article rules.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — all plurals correctly formed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version has no article-plural errors.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A 3-4 sentence description with correct articles and plurals, plus a correct check.",
            commonErrors: ["'a chairs' or 'an desks' — article with plural.", "'childs' or 'foots' plurals."],
            examinerNote: "The check in (b) must be accurate, not just listed.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct word: 'I saw ___ elephant at the zoo.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a" },
              { id: "b", text: "some" },
              { id: "c", text: "an" },
              { id: "d", text: "the" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "a vs an", statement: "'An' is used before words starting with a vowel sound; 'elephant' starts with 'e'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'elephant' begins with a vowel sound, so 'an'.", working: "an elephant", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** an",
            commonErrors: ["Choosing 'a' — 'elephant' starts with a vowel."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the plural of 'bus'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "buseses" },
              { id: "b", text: "buses" },
              { id: "c", text: "bu" },
              { id: "d", text: "buss" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plural rules", statement: "Words ending in -s, -sh, -ch, -x add -es: bus -> buses." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'bus' ends in -s, so add -es.", working: "buses", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** buses",
            commonErrors: ["'buss' — just doubling the s is wrong."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many articles are in the sentence 'I have got a dog and a cat'? Write the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of articles", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Article", statement: "Articles are 'a', 'an' and 'the' — here two 'a's appear." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 'a dog' and 'a cat' = two articles.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 2",
            commonErrors: ["Counting 'got' as an article — only a/an/the count."],
            examinerNote: "Answer is 2.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the plural of each word: baby, watch.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plural formation", statement: "Consonant + y -> ies; -ch -> +es." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'baby' -> 'babies' (y -> ies).", working: "babies", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'watch' -> 'watches' (+es after -ch).", working: "watches", marks: 1, markCode: "D" },
            ],
            finalAnswer: "babies; watches",
            commonErrors: ["'babys' and 'watchs' — wrong endings."],
            examinerNote: "Each correct plural earns 1 mark.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have got cats." },
              { id: "b", text: "I have got an cats." },
              { id: "c", text: "I have got the cats are black." },
              { id: "d", text: "I have got a cats." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Articles with plurals", statement: "Plurals take no 'a/an' for general meaning: 'I have got cats.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — general plural needs no article.", working: "I have got cats.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I have got cats.",
            commonErrors: ["Keeping 'a' before a plural."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "When do we usually use 'the'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For a specific thing everyone knows, like 'the sun'" },
              { id: "b", text: "For any one thing, like 'a book'" },
              { id: "c", text: "Before every plural noun" },
              { id: "d", text: "Never in English" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article choice", statement: "'The' marks a specific or unique thing: 'the sun', 'the school'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'the' = specific/unique.", working: "the sun", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** For a specific thing everyone knows, like 'the sun'",
            commonErrors: ["Confusing 'the' with 'a/an'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "My Room",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "There is a desk and two chairs in my room. The desk is big. I like my room.",
          },
          stem: "Read the text and write two numbers: how many chairs, and how many desks?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Chairs", answer: 2 },
              { label: "(b) Desks", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities pair with their nouns; 'a desk' = one." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'two chairs'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'a desk' = one desk.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 1",
            commonErrors: ["Counting 'room' — it is singular, not asked."],
            examinerNote: "'a desk' means one; accept 'one'.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct these sentences: (1) 'I have got a dogs.' (2) 'She has got an book.' (3) 'The childs are happy.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article and plural rules", statement: "No a/an with plurals; 'an' only before vowels; irregular plurals like children." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I have got dogs.' (remove 'a' before plural).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'She has got a book.' ('book' starts with consonant).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'The children are happy.' (child -> children).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(1) I have got dogs. (2) She has got a book. (3) The children are happy.",
            commonErrors: ["'childs' — the plural of child is children."],
            examinerNote: "Each correction earns 1 mark.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which plural is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "babys" },
              { id: "b", text: "babies" },
              { id: "c", text: "babyeses" },
              { id: "d", text: "babyes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plural rules", statement: "Consonant + y -> ies: baby -> babies." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'baby' ends consonant+y, so y -> ies.", working: "babies", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** babies",
            commonErrors: ["'babys' — keeping y is wrong."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Sentences",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The cat is on the mat. A dog is in the garden.",
          },
          stem: "How many times does the word 'the' appear in the text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting words", statement: "'The' appears twice: 'The cat' and 'the mat'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'The cat' and 'the mat' = two 'the's.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 2",
            commonErrors: ["Missing the second 'the' before 'mat'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write about your bedroom or classroom using articles and plurals correctly.",
          parts: [
            { label: "a", prompt: "Write three sentences describing the room with correct articles (a/an/the).", marks: 2 },
            { label: "b", prompt: "List every plural noun you used and check its ending.", marks: 1 },
            { label: "c", prompt: "Explain in one sentence why you chose 'a/an' or 'the' in one place.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article and plural accuracy", statement: "a/an for one non-specific thing, the for specific, no article for general plurals." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three true sentences describing a real room.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct articles and grammar in all three.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — plurals listed with correct endings (-s/-es/-ies).", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — explanation shows correct understanding of the rule.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Three correct sentences + plural check + correct rule explanation.",
            commonErrors: ["'a chairs' — article with plural.", "Explanation that contradicts the choice."],
            examinerNote: "The explanation in (c) must match the actual choice made.",
          },
        },
        {
          id: "mla1-u3-articles-plurals-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Our Class Books",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "There are twenty-four students in our class. Each student has got one pencil case and two books. We have got a big library too.",
          },
          stem: "Write three numbers from the text: students, books each, and total books in the class.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Students", answer: 24 },
              { label: "(b) Books each", answer: 2 },
              { label: "(c) Total books", answer: 48 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Total = students x books each: 24 x 2 = 48." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'twenty-four students'.", working: "24", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'two books' each.", working: "2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 24 students x 2 books = 48 books.", working: "48", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 24 (b) 2 (c) 48",
            commonErrors: ["Writing 26 for (c) — that adds instead of multiplying."],
            examinerNote: "(c) requires 24 x 2.",
          },
        },
      ],
    },
    {
      id: "mla1-u3-classroom-vocabulary",
      title: "Classroom and everyday vocabulary",
      skill: "Learn and use high-frequency classroom objects, actions and everyday words.",
      lesson: {
        sections: [
          {
            heading: "Classroom words",
            body: "Learn the words you hear every day in class: **pen, pencil, book, bag, ruler, eraser, desk, chair, board, door, window**. Group them: things you write with (pen, pencil), things you carry (book, bag), things in the room (desk, chair, board). Grouping words helps you remember them.",
          },
          {
            heading: "Action verbs for class",
            body: "Classroom instructions use simple verbs: **open, close, read, write, listen, look, sit, stand, put, take, give, come, go, stop, start**. These are called **imperatives** — the verb comes first with no subject: 'Open your books', 'Sit down'. Learn them as chunks, not single words.",
          },
          {
            heading: "Building word families",
            body: "Many English words belong to a family. From 'teach' come **teacher** (person), **teaching** (activity), **taught** (past). From 'read': **reader**, **reading**. When you learn one word, look for its family — you will recognise more words in texts and use them better in speaking and writing.",
          },
        ],
        keyFormulas: [
          { name: "Imperatives", statement: "Verb first, no subject: 'Open your books.'" },
        ],
        workedExample: {
          problem: "Which word family does 'writer' belong to? Write two other family members.",
          solution: "'Write' family: write, writer, writing, wrote.",
        },
      },
      questions: [
        {
          id: "mla1-u3-classroom-vocabulary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a classroom object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quickly" },
              { id: "b", text: "Ruler" },
              { id: "c", text: "Happy" },
              { id: "d", text: "Between" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classroom vocabulary", statement: "Classroom objects are nouns you can touch: ruler, pen, book, desk." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'ruler' is a physical classroom object; the others are adjective/adverb/preposition.", working: "ruler", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** Ruler",
            commonErrors: ["Choosing a describing word instead of an object noun."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the word family for 'read': give three related words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family", statement: "Related words share a root: read, reader, reading, reads." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'read' itself or 'reads' as base form.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'reader' (person) correctly formed.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'reading' (activity) correctly formed.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "read, reads, reader, reading",
            commonErrors: ["Giving unrelated words like 'book'.", "Inventing non-words like 'readable' (acceptable but not core)."],
            examinerNote: "Any three real family members accepted.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A new student does not understand the teacher's instruction: 'Put your books on the table and sit down.' Rewrite it using simpler words and say what each part means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Simplifying language", statement: "Breaking instructions into small known chunks aids comprehension." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — simpler rewrite, e.g. 'Take your books. Put them on the table. Now sit down.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — explains each part: books -> table -> sit.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — rewrite uses correct imperatives and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'Take your books. Put them on the table. Sit down.' — put books on table, then sit.",
            commonErrors: ["Adding new complicated words instead of simplifying."],
            examinerNote: "Simplification must keep the original meaning.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a mini word-bank for a new English learner joining your class.",
          parts: [
            { label: "a", prompt: "Write 8 classroom or everyday words with a simple picture description or translation note.", marks: 3 },
            { label: "b", prompt: "Group the words into two categories (e.g. objects / actions) and label each group.", marks: 2 },
            { label: "c", prompt: "Write three classroom instructions using your words (imperatives).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary learning strategy", statement: "Grouping words and learning them in chunks improves retention." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 8 correct, useful words with accurate notes.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — words are correctly spelled and belong to real word families where relevant.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion C: Speaking — choices suit a beginner learner.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B: Reading — two clear, correct categories with labels.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — every word placed in a sensible group.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C: Speaking — three correct imperative instructions.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — imperatives have verb-first order and full stops.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — instructions use the word-bank vocabulary accurately.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "8 words + descriptions, 2 labelled groups, 3 correct imperatives.",
            commonErrors: ["Invented words or wrong spellings.", "Instructions in statement form ('You open...')."],
            examinerNote: "Categories must be sensible; 'objects/actions' or similar accepted.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is something you write with?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pen" },
              { id: "b", text: "Book" },
              { id: "c", text: "Chair" },
              { id: "d", text: "Ruler" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classroom objects", statement: "Pens and pencils are for writing; rulers measure; books are read." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'pen' is a writing tool.", working: "Pen", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Pen",
            commonErrors: ["Choosing 'ruler' — that is for measuring, not writing."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'ruler' used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing letters" },
              { id: "b", text: "Drawing straight lines and measuring" },
              { id: "c", text: "Carrying books" },
              { id: "d", text: "Sitting on" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ruler", statement: "A ruler is a flat tool for drawing straight lines and measuring length." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a ruler measures and draws straight lines.", working: "measuring and straight lines", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** Drawing straight lines and measuring",
            commonErrors: ["Confusing it with a pen."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many classroom objects are listed here: pen, pencil, book, bag, ruler, eraser? Write the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of objects", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting vocabulary", statement: "Count each separated word in the list." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — six object words are listed.", working: "6", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 6",
            commonErrors: ["Missing one word in the count."],
            examinerNote: "Answer is 6.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two classroom instructions as imperatives (verb first, no subject).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperatives", statement: "Imperatives start with the verb: 'Open your books.', 'Sit down.'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a correct imperative such as 'Open your books.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — second imperative with capital letter and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Open your books.' / 'Sit down, please.'",
            commonErrors: ["'You open your books' — imperatives have no subject."],
            examinerNote: "Any two correct imperatives accepted.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an imperative instruction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening your books." },
              { id: "b", text: "Books open you." },
              { id: "c", text: "Open your books." },
              { id: "d", text: "You open your books." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperatives", statement: "An imperative starts with the verb and has no subject." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Open your books.' is verb-first with no subject.", working: "Open your books.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Open your books.",
            commonErrors: ["Choosing (a) — that is a statement, not an imperative."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word belongs to the same group as 'pen' and 'pencil' (things you write with)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eraser" },
              { id: "b", text: "Crayon" },
              { id: "c", text: "Desk" },
              { id: "d", text: "Ruler" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word grouping", statement: "Grouping words by function helps memory: pen, pencil, crayon are all for writing." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'crayon' is a writing tool like pen and pencil.", working: "crayon", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Crayon",
            commonErrors: ["Choosing 'eraser' — that removes writing, not makes it."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "On the Table",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "On the table there is one ruler, two pens and three books. My bag is under the chair.",
          },
          stem: "Read the text and write two numbers: how many pens, and how many books?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Pens", answer: 2 },
              { label: "(b) Books", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities pair with their nouns." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'two pens'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'three books'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 3",
            commonErrors: ["Swapping pens and books."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the word family for 'teach': give three related words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family", statement: "Related words share a root: teach, teacher, teaching, taught." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'teach' or 'teaches' as the base.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'teacher' (person) correctly formed.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'teaching' or 'taught' correctly formed.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "teach, teacher, teaching, taught",
            commonErrors: ["Giving unrelated words like 'school'."],
            examinerNote: "Any three real family members accepted.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main rule for making an imperative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use only nouns" },
              { id: "b", text: "Always end with 'please'" },
              { id: "c", text: "Always use 'you' first" },
              { id: "d", text: "Verb first, no subject" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperatives", statement: "Imperatives put the verb first with no subject: 'Listen!', 'Write your name.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — verb-first, no subject is the rule.", working: "verb first, no subject", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Verb first, no subject",
            commonErrors: ["Thinking 'you' must appear — imperatives drop the subject."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Our Classroom",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Things in our classroom: a board, two windows, three doors and a clock.",
          },
          stem: "How many doors are in the classroom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "4" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in lists", statement: "Quantities in a list pair with their nouns." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'three doors'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 3",
            commonErrors: ["Choosing 'two' — that is the windows."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create a mini word-bank for a new English learner joining your class.",
          parts: [
            { label: "a", prompt: "Write five classroom or everyday words with a simple note for each.", marks: 2 },
            { label: "b", prompt: "Group the words into two categories and label each group.", marks: 1 },
            { label: "c", prompt: "Write two classroom instructions (imperatives) using your words.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary strategy", statement: "Grouping words and learning them in chunks improves retention." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — five correct words with accurate notes.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion C: Speaking — words suit a beginner learner.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B: Reading — two clear, correct categories with labels.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — two correct imperatives (verb first, full stops).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Five words + notes, two labelled groups, two correct imperatives.",
            commonErrors: ["Invented words.", "Instructions in statement form."],
            examinerNote: "Categories must be sensible.",
          },
        },
        {
          id: "mla1-u3-classroom-vocabulary-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "My School Bag",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "In my bag there is one pencil case, two books and a ruler. The pencil case has got three pens and an eraser.",
          },
          stem: "Write three numbers from the text: pencil cases, books and pens.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Pencil cases", answer: 1 },
              { label: "(b) Books", answer: 2 },
              { label: "(c) Pens", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities pair with their nouns, including inside 'has got'." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'one pencil case'.", working: "1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'two books'.", working: "2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'three pens'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 1 (b) 2 (c) 3",
            commonErrors: ["Confusing books with pens."],
            examinerNote: "Accept 'one' for (a).",
          },
        },
      ],
    },
  ],
};
