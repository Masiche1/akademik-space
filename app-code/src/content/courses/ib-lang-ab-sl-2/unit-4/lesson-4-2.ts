import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "langab-u4-lesson-4-2",
  code: "4-2",
  title: "Simple sentence structures",
  goal: "I CAN build simple sentences with correct word order using subjects, verbs, objects and basic adjectives.",
  standards: ["Writing", "Reading", "Grammar"],
  vocabulary: [
    { term: "Sentence", definition: "A group of words that expresses a complete idea." },
    { term: "Subject", definition: "The person or thing that does the action, usually at the start." },
    { term: "Verb", definition: "The action or state word, such as is, like, go." },
    { term: "Object", definition: "The thing that receives the action, after the verb." },
    { term: "Adjective", definition: "A word that describes a noun, placed before it." },
    { term: "Word order", definition: "The correct order of words in a sentence: subject + verb + object." },
  ],
  concepts: [
    {
      id: "langab-u4-svo",
      title: "Subject-verb-object order",
      skill: "Build sentences in the correct order: subject + verb + object.",
      lesson: {
        sections: [
          {
            heading: "The SVO pattern",
            body: "English sentences usually follow **Subject + Verb + Object**: \"I like music.\" (I = subject, like = verb, music = object). \"She reads books.\" (She, reads, books). This order is fixed — changing it makes the sentence wrong.",
          },
          {
            heading: "Adding adjectives",
            body: "Put adjectives before the noun: \"I like **big** dogs.\" or \"She reads **interesting** books.\" Two adjectives are fine: \"a **big red** car\". Remember: article (a/an/the) comes before the adjective.",
          },
          {
            heading: "Common mistakes",
            body: "Beginners often put the object before the verb (\"Music I like\") or forget the verb. Every sentence needs a subject and a verb. Check your sentences: does it have who does what, in the right order?",
          },
        ],
        keyFormulas: [
          { name: "SVO", statement: "Subject + Verb + Object (She reads books)." },
          { name: "With adjective", statement: "Subject + Verb + article + adjective + noun (I like a big dog)." },
        ],
        workedExample: {
          problem: "Put these words in order: books / reads / She / interesting.",
          solution: "She reads interesting books.",
        },
      },
      questions: [
        {
          id: "langab-u4-l42q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the correct English word order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Verb + Subject + Object" },
              { id: "b", text: "Subject + Verb + Object" },
              { id: "c", text: "Object + Verb + Subject" },
              { id: "d", text: "Any order is fine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "English word order", statement: "English uses Subject-Verb-Object order." },
            ],
            steps: [
              { reasoning: "Subject-Verb-Object is the standard English order.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Subject + Verb + Object",
            commonErrors: ["Using the order of your first language."],
          },
        },
        {
          id: "langab-u4-l42q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Put these words in order to make sentences: 1) like / I / music 2) plays / football / He 3) reads / She / books.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence building", statement: "Subject + verb + object." },
            ],
            steps: [
              { reasoning: "I like music.", marks: 1, markCode: "M" },
              { reasoning: "He plays football.", marks: 1, markCode: "M" },
              { reasoning: "She reads books.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I like music. / He plays football. / She reads books.",
            commonErrors: ["Putting the object first."],
          },
        },
        {
          id: "langab-u4-l42q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct these sentences: 1) Book reads she. 2) Music I like. 3) The dog big is.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error correction", statement: "Fix word order and adjective position." },
            ],
            steps: [
              { reasoning: "Book reads she -> She reads books.", marks: 1, markCode: "M" },
              { reasoning: "Music I like -> I like music.", marks: 1, markCode: "M" },
              { reasoning: "The dog big is -> The dog is big (adjective after is).", marks: 1, markCode: "A" },
              { reasoning: "All three corrected correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "She reads books. / I like music. / The dog is big.",
            commonErrors: ["Forgetting the verb is in sentence 3."],
          },
        },
        {
          id: "langab-u4-l42q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write five sentences about your daily routine using SVO order.",
          parts: [
            { label: "a", prompt: "Two sentences about the morning.", marks: 2 },
            { label: "b", prompt: "Two sentences about school or work.", marks: 2 },
            { label: "c", prompt: "One sentence about the evening.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Routine sentences", statement: "Each sentence = subject + verb + (object), in order." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct morning sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct school/work sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct evening sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 morning sentences. (b) 2 school sentences. (c) 1 evening sentence.",
            commonErrors: ["Sentences without a verb or in wrong order."],
          },
        },
        {
          id: "langab-u4-l42q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the sentence 'She reads books', what is the subject?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "reads" },
              { id: "b", text: "books" },
              { id: "c", text: "She reads" },
              { id: "d", text: "She" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subject", statement: "The subject is who does the action, at the start." },
            ],
            steps: [
              { reasoning: "She is the person doing the action of reading.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** She",
            commonErrors: ["Confusing subject with verb or object."],
          },
        },
        {
          id: "langab-u4-l42q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Put the words in order: like / They / football.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Football they like." },
              { id: "b", text: "They like football." },
              { id: "c", text: "Football like they." },
              { id: "d", text: "Like they football." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "SVO order", statement: "Subject + verb + object." },
            ],
            steps: [
              { reasoning: "They (subject) + like (verb) + football (object).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They like football.",
            commonErrors: ["Putting the object before the verb."],
          },
        },
        {
          id: "langab-u4-l42q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences in SVO order about your family.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "SVO sentences", statement: "Subject + verb + (object), correct order." },
            ],
            steps: [
              { reasoning: "First sentence correct with subject, verb, object.", marks: 1, markCode: "M" },
              { reasoning: "Second sentence correct.", marks: 1, markCode: "M" },
              { reasoning: "Third sentence correct English.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. My father works in a bank. My sister plays tennis. I love my family.",
            commonErrors: ["Missing verb or wrong order."],
          },
        },
        {
          id: "langab-u4-l42q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does the adjective go in 'I like a big red car'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Before the noun, after the article" },
              { id: "b", text: "Anywhere in the sentence" },
              { id: "c", text: "At the start of the sentence" },
              { id: "d", text: "After the noun" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective position", statement: "Article + adjective + noun." },
            ],
            steps: [
              { reasoning: "Adjectives come before the noun they describe, after the article.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Before the noun, after the article",
            commonErrors: ["Putting the adjective after the noun."],
          },
        },
        {
          id: "langab-u4-l42q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct these sentences.",
          extract: {
            title: "Mixed order",
            author: "Written for Akademik Space",
            text: "1) Music likes she.\n2) The students good are.\n3) Park goes he to the.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error correction", statement: "Fix word order and adjective position." },
            ],
            steps: [
              { reasoning: "Music likes she -> She likes music.", marks: 1, markCode: "M" },
              { reasoning: "The students good are -> The students are good.", marks: 1, markCode: "M" },
              { reasoning: "Park goes he to the -> He goes to the park.", marks: 1, markCode: "A" },
              { reasoning: "All three corrected correctly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "She likes music. / The students are good. / He goes to the park.",
            commonErrors: ["Leaving the verb in the wrong place."],
          },
        },
        {
          id: "langab-u4-l42q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence has correct word order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Books my brother reads." },
              { id: "b", text: "Books reads my brother." },
              { id: "c", text: "Reads books my brother." },
              { id: "d", text: "My brother reads books." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "SVO order", statement: "Subject + verb + object is fixed in English." },
            ],
            steps: [
              { reasoning: "My brother (subject) + reads (verb) + books (object).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** My brother reads books.",
            commonErrors: ["Using object-first order from another language."],
          },
        },
        {
          id: "langab-u4-l42q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write five sentences about your favourite food using SVO order and adjectives.",
          parts: [
            { label: "a", prompt: "Two sentences about what you like to eat.", marks: 2 },
            { label: "b", prompt: "Two sentences about where or when you eat.", marks: 2 },
            { label: "c", prompt: "One sentence using two adjectives.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Food sentences", statement: "SVO order with adjectives before nouns." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct food sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct place/time sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One sentence with two adjectives correctly placed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 food sentences. (b) 2 place/time sentences. (c) 1 sentence with 2 adjectives.",
            commonErrors: ["Adjectives after the noun or missing verbs."],
          },
        },
        {
          id: "langab-u4-l42q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Put these words in order: a / red / car / has / She.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence building", statement: "Subject + verb + article + adjective + noun." },
            ],
            steps: [
              { reasoning: "She is the subject.", marks: 1, markCode: "M" },
              { reasoning: "has is the verb.", marks: 1, markCode: "M" },
              { reasoning: "a red car is correct order after the verb.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "She has a red car.",
            commonErrors: ["Putting the adjective before the article."],
          },
        },
        {
          id: "langab-u4-l42q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence correctly uses an adjective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like a red car." },
              { id: "b", text: "I like red a car." },
              { id: "c", text: "I like car a red." },
              { id: "d", text: "I like a car red." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective position", statement: "Article + adjective + noun." },
            ],
            steps: [
              { reasoning: "A red car follows article + adjective + noun.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I like a red car.",
            commonErrors: ["Placing the adjective after the noun."],
          },
        },
        {
          id: "langab-u4-l42q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the subject, verb and object of each sentence.",
          extract: {
            title: "Parts of sentences",
            author: "Written for Akademik Space",
            text: "1) My brother plays football.\n2) We watch films.\n3) The teacher gives homework.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence parts", statement: "Identify subject, verb and object." },
            ],
            steps: [
              { reasoning: "My brother / plays / football.", marks: 1, markCode: "M" },
              { reasoning: "We / watch / films.", marks: 1, markCode: "M" },
              { reasoning: "The teacher / gives / homework.", marks: 1, markCode: "A" },
              { reasoning: "All parts correctly identified.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "1) My brother-plays-football. 2) We-watch-films. 3) The teacher-gives-homework.",
            commonErrors: ["Calling the object the subject."],
          },
        },
        {
          id: "langab-u4-l42q19",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word is the verb in 'The cat sleeps on the chair'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "chair" },
              { id: "b", text: "cat" },
              { id: "c", text: "the" },
              { id: "d", text: "sleeps" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verb", statement: "The verb shows the action or state." },
            ],
            steps: [
              { reasoning: "Sleeps is the action word.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** sleeps",
            commonErrors: ["Choosing a noun instead of the action word."],
          },
        },
        {
          id: "langab-u4-l42q20",
          difficulty: "core",
          totalMarks: 5,
          stem: "Describe your bedroom in five SVO sentences with adjectives.",
          parts: [
            { label: "a", prompt: "Two sentences about furniture.", marks: 2 },
            { label: "b", prompt: "Two sentences about what you do there.", marks: 2 },
            { label: "c", prompt: "One sentence using two adjectives.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Room description", statement: "SVO sentences with correctly placed adjectives." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct furniture sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct activity sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One sentence with two adjectives before the noun.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 furniture sentences. (b) 2 activity sentences. (c) 1 sentence with 2 adjectives.",
            commonErrors: ["Adjectives after nouns or missing subjects."],
          },
        },
        {
          id: "langab-u4-l42q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have big a dog." },
              { id: "b", text: "I have a dog big." },
              { id: "c", text: "I have a big dog." },
              { id: "d", text: "I have dog a big." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective position", statement: "Article + adjective + noun." },
            ],
            steps: [
              { reasoning: "A big dog is the correct order.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I have a big dog.",
            commonErrors: ["Putting the adjective after the noun."],
          },
        },
        {
          id: "langab-u4-l42q22",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Write the missing words to complete these SVO sentences: 1) I ___ my homework. 2) She ___ to school. 3) They ___ football.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verb choice", statement: "A verb must fit the subject and object." },
            ],
            steps: [
              { reasoning: "A verb for homework, e.g. do.", marks: 1, markCode: "M" },
              { reasoning: "A verb for going to school, e.g. go/walk.", marks: 1, markCode: "M" },
              { reasoning: "A verb for playing football, e.g. play.", marks: 1, markCode: "A" },
              { reasoning: "All verbs agree with their subjects.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "do; go/walk; play (any sensible verb).",
            commonErrors: ["Verbs that do not collocate with the object."],
          },
        },
        {
          id: "langab-u4-l42q23",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short paragraph (four sentences) describing your typical day using SVO order and adjectives.",
          parts: [
            { label: "a", prompt: "Two sentences about the morning.", marks: 2 },
            { label: "b", prompt: "One sentence about school.", marks: 2 },
            { label: "c", prompt: "One sentence about the evening using two adjectives.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph writing", statement: "SVO order + adjective placement throughout." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct morning sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "One correct school sentence.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One evening sentence with two adjectives correctly placed.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) 2 morning sentences. (b) 1 school sentence. (c) 1 evening sentence with 2 adjectives.",
            commonErrors: ["Adjectives after nouns or sentences missing subjects/verbs."],
          },
        },
        {
          id: "langab-u4-l42q24",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 'The students are good', which word is the verb?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are" },
              { id: "b", text: "good" },
              { id: "c", text: "The" },
              { id: "d", text: "students" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verb", statement: "Are is the verb (a form of be)." },
            ],
            steps: [
              { reasoning: "Are is the verb showing the state.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** are",
            commonErrors: ["Choosing the adjective good as the verb."],
          },
        },
      ],
    },
    {
      id: "langab-u4-sentence-types",
      title: "Statements, questions and negatives",
      skill: "Make negative sentences and questions from simple statements.",
      lesson: {
        sections: [
          {
            heading: "Negative sentences",
            body: "To make a negative, add **not** after the verb: \"I like music\" -> \"I **don't** like music.\" \"She is happy\" -> \"She **isn't** happy.\" For he/she/it use **doesn't** for action verbs: \"He plays football\" -> \"He **doesn't** play football.\"",
          },
          {
            heading: "Questions from statements",
            body: "For yes/no questions, put **do/does** before the subject: \"You like music\" -> \"**Do** you like music?\" \"He plays football\" -> \"**Does** he play football?\" With **to be** just swap: \"You are happy\" -> \"**Are** you happy?\"",
          },
          {
            heading: "Short answers",
            body: "Answer yes/no questions briefly: \"Do you like music?\" -> \"**Yes, I do.** / **No, I don't.**\" \"Is she happy?\" -> \"**Yes, she is.** / **No, she isn't.**\" The short answer uses the same auxiliary as the question.",
          },
        ],
        keyFormulas: [
          { name: "Negatives", statement: "don't / doesn't + verb (I don't like; He doesn't play)." },
          { name: "Yes/no questions", statement: "Do/Does + subject + verb? (Do you like? Does he play?)" },
        ],
        workedExample: {
          problem: "Make this negative and a question: She plays tennis.",
          solution: "She doesn't play tennis. / Does she play tennis? Yes, she does. / No, she doesn't.",
        },
      },
      questions: [
        {
          id: "langab-u4-l42q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Make this sentence negative: I like coffee.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Don't I like coffee." },
              { id: "b", text: "I no like coffee." },
              { id: "c", text: "I not like coffee." },
              { id: "d", text: "I don't like coffee." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Negatives", statement: "Use don't (I/you/we/they) or doesn't (he/she/it) + verb." },
            ],
            steps: [
              { reasoning: "I + don't + like is the correct negative.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I don't like coffee.",
            commonErrors: ["Putting not directly before the verb without do-support."],
          },
        },
        {
          id: "langab-u4-l42q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the question form and a short answer for: He plays football. (answer: yes)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question formation", statement: "Does + subject + verb? and Yes, he does." },
            ],
            steps: [
              { reasoning: "Question: Does he play football?", marks: 1, markCode: "M" },
              { reasoning: "Short answer: Yes, he does.", marks: 1, markCode: "M" },
              { reasoning: "Both forms correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Does he play football? — Yes, he does.",
            commonErrors: ["Saying 'Yes, he play' or 'Does he plays'."],
          },
        },
        {
          id: "langab-u4-l42q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Transform these sentences: make them negative, then turn them into questions.",
          extract: {
            title: "Sentence practice",
            author: "Written for Akademik Space",
            text: "1) She likes tea.\n2) They play chess.\n3) We go to the park on Sunday.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transformations", statement: "Negative = don't/doesn't + base verb; question = Do/Does + subject + base verb." },
            ],
            steps: [
              { reasoning: "She doesn't like tea. / Does she like tea?", marks: 2, markCode: "M" },
              { reasoning: "They don't play chess. / Do they play chess?", marks: 1, markCode: "M" },
              { reasoning: "We don't go to the park... / Do we go to the park...?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1) doesn't like / Does she like? 2) don't play / Do they play? 3) don't go / Do we go?",
            commonErrors: ["Keeping -s on the verb after doesn't/does."],
          },
        },
        {
          id: "langab-u4-l42q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a mini-interview: three questions and three short answers about hobbies.",
          parts: [
            { label: "a", prompt: "Write three yes/no questions with do/does.", marks: 2 },
            { label: "b", prompt: "Write three short answers (yes or no).", marks: 2 },
            { label: "c", prompt: "Write one question word question (what, where, when).", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question-answer pairs", statement: "Questions must match their short answers." },
            ],
            steps: [
              { part: "a", reasoning: "Three correct do/does questions.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Three matching short answers.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct wh- question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 do/does questions. (b) 3 matching answers. (c) 1 wh- question.",
            commonErrors: ["Answers that do not match the question auxiliary."],
          },
        },
        {
          id: "langab-u4-l42q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Make this sentence negative: She likes tea.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She no likes tea." },
              { id: "b", text: "She don't like tea." },
              { id: "c", text: "She not likes tea." },
              { id: "d", text: "She doesn't like tea." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Negatives", statement: "He/she/it + doesn't + base verb." },
            ],
            steps: [
              { reasoning: "She + doesn't + like (base form) is correct.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** She doesn't like tea.",
            commonErrors: ["Keeping -s on the verb after doesn't."],
          },
        },
        {
          id: "langab-u4-l42q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Make this sentence a question: They play chess.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Play they chess?" },
              { id: "b", text: "Does they play chess?" },
              { id: "c", text: "They play chess?" },
              { id: "d", text: "Do they play chess?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Yes/no questions", statement: "Do/Does + subject + base verb." },
            ],
            steps: [
              { reasoning: "They takes do, then base verb play.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Do they play chess?",
            commonErrors: ["Using does with they."],
          },
        },
        {
          id: "langab-u4-l42q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the negative and the question for: I like coffee.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negatives and questions", statement: "don't + verb; Do + subject + verb?" },
            ],
            steps: [
              { reasoning: "Negative: I don't like coffee.", marks: 1, markCode: "M" },
              { reasoning: "Question: Do I like coffee?", marks: 1, markCode: "M" },
              { reasoning: "Both forms correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I don't like coffee. / Do I like coffee?",
            commonErrors: ["Wrong auxiliary for I."],
          },
        },
        {
          id: "langab-u4-l42q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is the correct negative of 'He goes to school by bus'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He don't go to school by bus." },
              { id: "b", text: "He not go to school by bus." },
              { id: "c", text: "He doesn't go to school by bus." },
              { id: "d", text: "He doesn't goes to school by bus." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Negatives", statement: "doesn't + base verb (go, not goes)." },
            ],
            steps: [
              { reasoning: "After doesn't the verb returns to base form go.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** He doesn't go to school by bus.",
            commonErrors: ["Keeping -s or -es on the verb after doesn't."],
          },
        },
        {
          id: "langab-u4-l42q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Transform these sentences into questions and write a short answer for each.",
          extract: {
            title: "Question practice",
            author: "Written for Akademik Space",
            text: "1) You like music.\n2) She is happy.\n3) They go to the park.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question formation", statement: "Do/Does for action verbs; invert be for to be." },
            ],
            steps: [
              { reasoning: "Do you like music? — Yes, I do. / No, I don't.", marks: 1, markCode: "M" },
              { reasoning: "Is she happy? — Yes, she is. / No, she isn't.", marks: 1, markCode: "M" },
              { reasoning: "Do they go to the park? — Yes, they do. / No, they don't.", marks: 1, markCode: "A" },
              { reasoning: "Short answers use the matching auxiliary.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "1) Do you like music? Yes, I do. 2) Is she happy? Yes, she is. 3) Do they go to the park? Yes, they do.",
            commonErrors: ["Answering 'Yes, she do' or mismatching auxiliaries."],
          },
        },
        {
          id: "langab-u4-l42q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the correct short answer to 'Does he play tennis?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, does he." },
              { id: "b", text: "Yes, he is." },
              { id: "c", text: "Yes, he play." },
              { id: "d", text: "Yes, he does." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Short answers", statement: "Short answers repeat the question auxiliary." },
            ],
            steps: [
              { reasoning: "Does-question takes Yes, he does.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Yes, he does.",
            commonErrors: ["Repeating the main verb instead of the auxiliary."],
          },
        },
        {
          id: "langab-u4-l42q31",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write five questions about school life and give short answers.",
          parts: [
            { label: "a", prompt: "Three questions with do/does.", marks: 2 },
            { label: "b", prompt: "One question with is/are.", marks: 1 },
            { label: "c", prompt: "One wh- question (what, where, when, who).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question variety", statement: "Correct question forms with matching answers." },
            ],
            steps: [
              { part: "a", reasoning: "Three correct do/does questions with short answers.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "One correct is/are question with short answer.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One correct wh- question.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) 3 do/does Q+A. (b) 1 is/are Q+A. (c) 1 wh- question.",
            commonErrors: ["Questions missing inversion or matching answers."],
          },
        },
        {
          id: "langab-u4-l42q32",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the negative of each sentence: 1) I am happy. 2) She is kind. 3) We are students.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Be-negatives", statement: "am not / isn't / aren't." },
            ],
            steps: [
              { reasoning: "I am not happy.", marks: 1, markCode: "M" },
              { reasoning: "She isn't kind.", marks: 1, markCode: "M" },
              { reasoning: "We aren't students.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I am not happy. / She isn't kind. / We aren't students.",
            commonErrors: ["Using don't with the verb be."],
          },
        },
        {
          id: "langab-u4-l42q33",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which question is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She does like music?" },
              { id: "b", text: "Does she likes music?" },
              { id: "c", text: "Does she like music?" },
              { id: "d", text: "Do she like music?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Yes/no questions", statement: "She takes does + base verb." },
            ],
            steps: [
              { reasoning: "Does + she + like (base form) is correct.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Does she like music?",
            commonErrors: ["Wrong auxiliary or verb with -s."],
          },
        },
        {
          id: "langab-u4-l42q34",
          difficulty: "core",
          totalMarks: 4,
          stem: "Make these sentences negative, then turn them into questions.",
          extract: {
            title: "Transform practice",
            author: "Written for Akademik Space",
            text: "1) He watches TV.\n2) They eat rice.\n3) You read books.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transformations", statement: "Negatives and questions with correct auxiliaries." },
            ],
            steps: [
              { reasoning: "He doesn't watch TV. / Does he watch TV?", marks: 2, markCode: "M" },
              { reasoning: "They don't eat rice. / Do they eat rice?", marks: 1, markCode: "M" },
              { reasoning: "You don't read books. / Do you read books?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1) doesn't watch / Does he watch? 2) don't eat / Do they eat? 3) don't read / Do you read?",
            commonErrors: ["Keeping -s/-es on verbs after doesn't/don't."],
          },
        },
        {
          id: "langab-u4-l42q35",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the negative of 'I like tea'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am not like tea." },
              { id: "b", text: "I not like tea." },
              { id: "c", text: "I doesn't like tea." },
              { id: "d", text: "I don't like tea." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Negatives", statement: "I/you/we/they + don't + base verb." },
            ],
            steps: [
              { reasoning: "I takes don't + like.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I don't like tea.",
            commonErrors: ["Using doesn't with I."],
          },
        },
        {
          id: "langab-u4-l42q36",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which short answer matches 'Are you students?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, are we." },
              { id: "b", text: "Yes, we does." },
              { id: "c", text: "Yes, we are." },
              { id: "d", text: "Yes, we do." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Short answers", statement: "Be-questions take be in the short answer." },
            ],
            steps: [
              { reasoning: "Are-question answered with are: Yes, we are.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Yes, we are.",
            commonErrors: ["Mixing do-support with be-questions."],
          },
        },
        {
          id: "langab-u4-l42q37",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short dialogue: three questions about hobbies with answers.",
          parts: [
            { label: "a", prompt: "Two yes/no questions with short answers.", marks: 2 },
            { label: "b", prompt: "One wh- question with an answer.", marks: 2 },
            { label: "c", prompt: "One negative sentence about a hobby.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue writing", statement: "Correct question forms + matching answers." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct do/does questions with matching short answers.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "One correct wh- question with a full answer.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct negative sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 Q+A pairs. (b) 1 wh- Q+A. (c) 1 negative.",
            commonErrors: ["Answers not matching the question form."],
          },
        },
        {
          id: "langab-u4-l42q38",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the question and negative for: We like the beach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transformations", statement: "Do + subject + verb?; don't + verb." },
            ],
            steps: [
              { reasoning: "Question: Do we like the beach?", marks: 1, markCode: "M" },
              { reasoning: "Negative: We don't like the beach.", marks: 1, markCode: "M" },
              { reasoning: "Both forms correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Do we like the beach? / We don't like the beach.",
            commonErrors: ["Using does with we."],
          },
        },
        {
          id: "langab-u4-l42q39",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write six sentences about your daily routine: three statements, two negatives and one question.",
          parts: [
            { label: "a", prompt: "Three statements in SVO order.", marks: 2 },
            { label: "b", prompt: "Two negative sentences.", marks: 2 },
            { label: "c", prompt: "One yes/no question with a short answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed sentence types", statement: "Statements, negatives and questions all correct." },
            ],
            steps: [
              { part: "a", reasoning: "Three correct SVO statements.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct negative sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct question with matching short answer.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) 3 statements. (b) 2 negatives. (c) 1 question + answer.",
            commonErrors: ["Negatives with -s on the verb or wrong auxiliaries."],
          },
        },
        {
          id: "langab-u4-l42q40",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is correct: '___ you like pizza?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is" },
              { id: "b", text: "Does" },
              { id: "c", text: "Do" },
              { id: "d", text: "Are" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Yes/no questions", statement: "You takes do with action verbs." },
            ],
            steps: [
              { reasoning: "You + like (action verb) needs do.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Do",
            commonErrors: ["Using does with you."],
          },
        },
      ],
    },
  ],
};
