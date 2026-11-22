import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mla1-u2-lesson-2-3",
  code: "2-3",
  title: "Speaking and Writing About My World",
  goal: "I CAN talk and write simply about my family, home, school and hobbies using correct basic English.",
  standards: [
    "MYP Language Acquisition",
    "Criterion C: Speaking",
    "Criterion D: Writing",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Hobby", definition: "Something you enjoy doing in your free time, like drawing or football." },
    { term: "Family member", definition: "A person in your family: mother, father, sister, brother, grandmother." },
    { term: "Free time", definition: "Time when you do not have to work or study." },
    { term: "Paragraph", definition: "A group of sentences about one topic." },
    { term: "Linking word", definition: "A word that joins ideas, such as 'and', 'but' or 'because'." },
  ],
  concepts: [
    {
      id: "mla1-u2-talking-about-me",
      title: "Talking about yourself, family and school",
      skill: "Speak simply about personal topics: name, age, family, home and school.",
      lesson: {
        sections: [
          {
            heading: "Useful personal topics",
            body: "At MYP 1 level you will often talk about: **your name and age**, **your family** ('I have got one brother'), **your home** ('I live in a flat / a house'), **your school** ('I go to school every day') and **your likes** ('I like music'). Each topic has simple question-and-answer patterns you can memorise.",
          },
          {
            heading: "Question and answer patterns",
            body: "Learn these pairs: 'How old are you?' — 'I am ten.' / 'Where do you live?' — 'I live in Madrid.' / 'What is your favourite subject?' — 'My favourite subject is science.' / 'Do you have any brothers or sisters?' — 'Yes, I have got one sister.' Short, correct answers are better than long, wrong ones.",
          },
          {
            heading: "Adding detail with 'and' and 'because'",
            body: "To make your answers longer, join two ideas with **and**: 'I like football and swimming.' Give a reason with **because**: 'I like science because it is interesting.' These small linkers make simple speech sound more natural.",
          },
        ],
        keyFormulas: [
          { name: "Personal Q&A", statement: "How old are you? / Where do you live? / What is your favourite...?" },
        ],
        workedExample: {
          problem: "Answer: 'Do you have any pets?' — say yes and give one detail.",
          solution: "'Yes, I have got a dog. It is called Max and it is very friendly.'",
        },
      },
      questions: [
        {
          id: "mla1-u2-talking-about-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which answer correctly responds to 'How old are you?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am ten years old." },
              { id: "b", text: "I ten." },
              { id: "c", text: "My age is ten old." },
              { id: "d", text: "I have ten." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Age expressions", statement: "Age is expressed with 'I am ... years old' or 'I am ...'." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'I am ten years old' is the correct, natural answer.", working: "I am ten years old.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** I am ten years old.",
            commonErrors: ["Translating 'I have ten years' directly."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Answer this question in one sentence: 'Do you have any brothers or sisters?' (Answer for yourself.)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Personal description", statement: "Answers use 'have got' for family members plus number/detail." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — answers yes or no with correct structure.", working: "Yes, I have got ... / No, I haven't.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar, capitals and full stop.", working: "... .", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Yes, I have got one brother.' / 'No, I haven't got any brothers or sisters.'",
            commonErrors: ["'I have two sister' — wrong plural form."],
            examinerNote: "Accept true personal answers only.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A classmate asks: 'What do you like doing in your free time?' Answer in two sentences, using 'and' or 'because'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extending simple answers", statement: "Linking words 'and'/'because' connect ideas into longer natural answers." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — two sentences about free-time activities.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — uses 'and' or 'because' to link ideas.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar and word order in both sentences.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct punctuation and spelling.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'In my free time I like reading and drawing. I like football because it is fun.'",
            commonErrors: ["Two unrelated sentences with no linker.", "'I like football because fun it is' — wrong order after because."],
            examinerNote: "Linker must actually join ideas, not just appear.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare a short spoken introduction about yourself for a video to an English class in another country.",
          parts: [
            { label: "a", prompt: "Write 4-5 sentences covering: name, age, where you live, family and one hobby.", marks: 4 },
            { label: "b", prompt: "Include at least one 'because' or 'and' sentence.", marks: 2 },
            { label: "c", prompt: "Check your sentences for correct word order and punctuation, then fix any errors you find.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-presentation", statement: "A personal introduction combines fixed phrases, details and linkers with accurate grammar." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — all five topics covered in simple English.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct 'I am/I have got/I live' structures.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate vocabulary for family, home and hobbies.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion C: Speaking — content is true to the student's own life.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — at least one 'because' or 'and' sentence used correctly.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — the linking sentence is grammatically correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check identifies and fixes at least one real error (or states sentences are accurate).", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version has correct capitals and full stops throughout.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "4-5 correct sentences covering all topics, with a linker and accurate punctuation.",
            commonErrors: ["Covering only name and age.", "Leaving word-order errors in the final version."],
            examinerNote: "Must sound natural when spoken aloud.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which answer correctly responds to 'Where do you live?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am Madrid." },
              { id: "b", text: "I live in Madrid." },
              { id: "c", text: "I have Madrid." },
              { id: "d", text: "Madrid is me." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Personal Q&A", statement: "'Where do you live?' — 'I live in + place'." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'I live in Madrid' is the correct answer pattern.", working: "I live in Madrid.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** I live in Madrid.",
            commonErrors: ["Translating 'I am from' into 'I live' questions."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which answer correctly responds to 'Do you have any pets?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dogs are nice." },
              { id: "b", text: "Yes, I have got a dog." },
              { id: "c", text: "I like dogs." },
              { id: "d", text: "I am a dog." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Have got for possession", statement: "'Do you have...?' — 'Yes, I have got...' answers possession." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Yes, I have got a dog' answers the yes/no question correctly.", working: "Yes, I have got a dog.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Yes, I have got a dog.",
            commonErrors: ["Answering with a statement that does not match the question."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q7",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "About Me",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: How old are you?\nB: I am ten years old.\nA: What is your favourite subject?\nB: My favourite subject is science.",
          },
          stem: "Read the exchange and write the number: how old is B?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) B's age", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in exchanges", statement: "Age is the key number in personal Q&A." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'I am ten years old.'", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 10",
            commonErrors: ["Writing 'ten' as a word — a digit is expected."],
            examinerNote: "Accept 'ten'.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Answer this question in one sentence: 'What is your favourite subject?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Favourite pattern", statement: "'My favourite subject is...' or 'I like...' answers preference questions." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a correct answer pattern such as 'My favourite subject is science.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — capital letter and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My favourite subject is science.'",
            commonErrors: ["'I favourite subject science' — missing 'is'."],
            examinerNote: "Accept 'I like...' as an alternative.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am two sisters." },
              { id: "b", text: "I have two sister." },
              { id: "c", text: "I have got two sisters." },
              { id: "d", text: "I has two sisters." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "have got + plural", statement: "'I have got' + plural noun: 'two sisters'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I have got two sisters' has correct verb form and plural.", working: "I have got two sisters.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I have got two sisters.",
            commonErrors: ["'sister' should be 'sisters' for two; 'has' is for he/she/it."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word 'because' do in a sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ends the sentence" },
              { id: "b", text: "It asks a question" },
              { id: "c", text: "It gives a reason" },
              { id: "d", text: "It joins two names" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Because", statement: "'Because' introduces a reason: 'I like science because it is interesting.'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'because' signals a reason.", working: "gives a reason", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It gives a reason",
            commonErrors: ["Confusing 'because' with 'and'."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "About My Family",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: How many brothers have you got?\nB: I have got one brother.\nA: Do you have any pets?\nB: Yes, I have got two dogs.",
          },
          stem: "Read the exchange and write two numbers: how many brothers, and how many dogs?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Brothers", answer: 1 },
              { label: "(b) Dogs", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in exchanges", statement: "Quantities in personal Q&A answer how-many questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'I have got one brother.'", working: "1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'two dogs'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 1 (b) 2",
            commonErrors: ["Swapping brothers and dogs."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A classmate asks: 'What do you like doing in your free time?' Answer in two sentences, using 'and' or 'because'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extending answers", statement: "Linkers 'and'/'because' join ideas into natural longer answers." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — two sentences about free-time activities.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — 'and' or 'because' correctly links ideas.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar, punctuation and spelling.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I like reading and drawing. I like football because it is fun.'",
            commonErrors: ["No linker — two unrelated sentences."],
            examinerNote: "Linker must genuinely connect the ideas.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence joins ideas correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like football and swimming." },
              { id: "b", text: "Because football I like." },
              { id: "c", text: "I like and football." },
              { id: "d", text: "I like football because swimming." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linking words", statement: "'And' joins two similar ideas: 'football and swimming'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I like football and swimming' is grammatically correct.", working: "I like football and swimming.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I like football and swimming.",
            commonErrors: ["Choosing a sentence where 'because' has no reason."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Sisters",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: Do you have any brothers or sisters?\nB: Yes, I have got one sister. She is eight years old.",
          },
          stem: "What does B have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One sister" },
              { id: "b", text: "One brother" },
              { id: "c", text: "No brothers or sisters" },
              { id: "d", text: "Two sisters" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following exchanges", statement: "The answer 'I have got one sister' gives the family detail." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'I have got one sister.'", working: "one sister", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** One sister",
            commonErrors: ["Choosing 'no siblings' — B says 'Yes'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prepare spoken answers about yourself for a new friend.",
          parts: [
            { label: "a", prompt: "Answer three questions: your age, where you live and one hobby.", marks: 2 },
            { label: "b", prompt: "Add one 'because' sentence giving a reason for a like.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Personal description", statement: "Personal answers use correct patterns: 'I am...', 'I live in...', 'I like...' + linkers." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three correct personal answers.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct grammar, word order and punctuation in all three.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — a 'because' sentence giving a real reason.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — the 'because' clause is grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three correct personal answers + one correct 'because' sentence.",
            commonErrors: ["'Because' with no reason after it.", "Answers that are not about the student."],
            examinerNote: "All answers must be true to the student.",
          },
        },
        {
          id: "mla1-u2-talking-about-me-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "My Family",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "There are four people in my family: my mum, my dad, my sister and me. My sister is six years old. I am ten years old.",
          },
          stem: "Read the text and write three numbers: family members, the sister's age and the speaker's age.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Family members", answer: 4 },
              { label: "(b) Sister's age", answer: 6 },
              { label: "(c) Speaker's age", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in personal texts", statement: "Quantities and ages in a personal text are key details." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'four people in my family'.", working: "4", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'My sister is six years old.'", working: "6", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'I am ten years old.'", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4 (b) 6 (c) 10",
            commonErrors: ["Swapping the two ages."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
    {
      id: "mla1-u2-writing-paragraph",
      title: "Writing a short paragraph about yourself",
      skill: "Organise three or four sentences into a simple paragraph with a topic sentence.",
      lesson: {
        sections: [
          {
            heading: "What is a paragraph?",
            body: "A **paragraph** is a group of sentences about **one topic**. For MYP 1, your first paragraph can be about 'me' or 'my family'. Start with a **topic sentence** that names the topic: 'I have got a small family.' Then add detail sentences: 'There are four people in my family. I have got a brother and a sister.'",
          },
          {
            heading: "Order of ideas",
            body: "Put ideas in a **logical order**: first the main fact, then the details, then maybe a feeling or opinion at the end. 'I live in a big house. It has a garden. I like my garden because I can play football there.' Each sentence should give **new information** — do not repeat the same idea.",
          },
          {
            heading: "Editing checklist",
            body: "Before you finish, check your paragraph: (1) Does every sentence start with a capital and end with a full stop? (2) Are the verbs correct ('I am', 'she has')? (3) Does each sentence add something new? (4) Can a reader understand it easily? Fix small errors — they matter for Criterion D.",
          },
        ],
        keyFormulas: [
          { name: "Paragraph shape", statement: "Topic sentence + detail sentences (+ opinion/feeling)" },
        ],
        workedExample: {
          problem: "Write a topic sentence for a paragraph about your school.",
          solution: "'I go to a big school near my house.' — it names the topic (school) and gives one main fact.",
        },
      },
      questions: [
        {
          id: "mla1-u2-writing-paragraph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first sentence of a simple paragraph called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The question" },
              { id: "b", text: "The topic sentence" },
              { id: "c", text: "The last sentence" },
              { id: "d", text: "The detail sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "The first sentence that introduces what the paragraph is about." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — the topic sentence introduces the paragraph's subject.", working: "topic sentence", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The topic sentence",
            commonErrors: ["Calling it a 'detail' sentence — details come after."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a topic sentence for a paragraph about your favourite animal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic sentence", statement: "It names the topic and states one main fact in a complete sentence." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentence names the topic (favourite animal) with a main fact.", working: "My favourite animal is ...", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete sentence with capital and full stop.", working: "... .", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My favourite animal is the panda.'",
            commonErrors: ["A fragment like 'Favourite animal panda.' without a verb."],
            examinerNote: "Must be a full sentence, not just a topic phrase.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A Paragraph in the Wrong Order",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "1. I have got two brothers.\n2. I like my family very much.\n3. My family is big and happy.\n4. My father is a teacher and my mother is a nurse.",
          },
          stem: "These four sentences are a paragraph but they are in the wrong order. Rewrite them in a logical order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph organisation", statement: "Topic sentence first, then supporting details, then feeling/opinion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence 'My family is big and happy.' comes first.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — detail sentences follow: two brothers, then parents' jobs.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — opinion 'I like my family very much' comes last.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — the order makes sense: idea -> details -> feeling.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "My family is big and happy. I have got two brothers. My father is a teacher and my mother is a nurse. I like my family very much.",
            commonErrors: ["Putting the opinion sentence first.", "Changing the sentences instead of only reordering."],
            examinerNote: "Only reordering is needed; sentences should not be altered.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short paragraph (4-5 sentences) about your best friend or a family member.",
          parts: [
            { label: "a", prompt: "Write a topic sentence.", marks: 1 },
            { label: "b", prompt: "Write three detail sentences: name, what they are like, and something you do together.", marks: 4 },
            { label: "c", prompt: "Check capitals, full stops and verb accuracy, then write your final paragraph.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Paragraph accuracy", statement: "Correct word order, punctuation and verb forms (am/is/are/have got) throughout." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — topic sentence names the person/topic.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — three sentences give name, description and shared activity.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — accurate verbs and word order in all three sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — accurate spelling of names and common words.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — each sentence ends with a full stop.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check step completed with corrections noted.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final paragraph is coherent and accurate.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — the paragraph can be understood easily by a reader.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A 4-5 sentence paragraph: topic sentence + 3 details + correct punctuation/grammar.",
            commonErrors: ["Repeating the same detail in different words.", "Missing full stops in the final version."],
            examinerNote: "All four required content elements must appear.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title of a book" },
              { id: "b", text: "A list of names" },
              { id: "c", text: "A group of sentences about one topic" },
              { id: "d", text: "One single word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paragraph", statement: "A paragraph is a group of sentences about one topic." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — a paragraph = sentences + one topic.", working: "group of sentences about one topic", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** A group of sentences about one topic",
            commonErrors: ["Thinking a paragraph is just one sentence."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence should come first in a simple paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question" },
              { id: "b", text: "The last detail" },
              { id: "c", text: "A list" },
              { id: "d", text: "The topic sentence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Paragraph shape", statement: "Topic sentence first, then details, then maybe an opinion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — the topic sentence introduces the paragraph.", working: "topic sentence", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** The topic sentence",
            commonErrors: ["Choosing a detail — details come after the topic sentence."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q7",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "My Family",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "My family is big. I have got two brothers. My father is a teacher. I like my family very much.",
          },
          stem: "Read the paragraph and write the number: how many sentences does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of sentences", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence counting", statement: "Count each sentence ending with a full stop." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — four sentences end with full stops.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4",
            commonErrors: ["Counting 'I like my family very much' as two sentences."],
            examinerNote: "Answer is 4.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a topic sentence for a paragraph about your school.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic sentence", statement: "It names the topic and gives one main fact in a complete sentence." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentence names the topic (school) with a main fact.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete sentence with capital and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I go to a big school near my house.'",
            commonErrors: ["A fragment like 'My school big.' with no verb."],
            examinerNote: "Must be a full sentence about school.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which order is correct for a paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Details only, no topic" },
              { id: "b", text: "Topic sentence, details, opinion" },
              { id: "c", text: "Opinion, topic sentence, details" },
              { id: "d", text: "Detail, detail, topic sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph organisation", statement: "Logical order: main idea first, then supporting details, then feeling/opinion." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — topic -> details -> opinion is the logical order.", working: "topic, details, opinion", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Topic sentence, details, opinion",
            commonErrors: ["Putting the opinion first — it belongs at the end."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence does NOT belong in a paragraph about 'my pet'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "My school is near my house." },
              { id: "b", text: "Rex likes to play." },
              { id: "c", text: "Rex is very friendly." },
              { id: "d", text: "My dog is called Rex." },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph unity", statement: "Every sentence in a paragraph should be about the same topic." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'My school...' is about school, not the pet.", working: "My school is near my house.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** My school is near my house.",
            commonErrors: ["Choosing a sentence that is still about the pet."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "My Cat",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "I have got a cat. It is called Milo. Milo is black and white. He likes to sleep all day.",
          },
          stem: "Read the paragraph and write two numbers: how many sentences, and how many describing words for Milo's colour ('black', 'white').",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of sentences", answer: 4 },
              { label: "(b) Colour describing words", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting in paragraphs", statement: "Sentences end with full stops; describing words tell colour/size/etc." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — four sentences end with full stops.", working: "4", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'black' and 'white' are the two colour words.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4 (b) 2",
            commonErrors: ["Counting 'called' or 'sleep' as describing words."],
            examinerNote: "(b) counts only the two colour adjectives.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a three-sentence paragraph about your favourite food.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Paragraph structure", statement: "Topic sentence + two detail sentences about one topic." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence names the favourite food.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — two detail sentences with new information each.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — all sentences correct with capitals and full stops.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My favourite food is pizza. I like it because it has cheese and tomatoes. I eat it with my family on Fridays.'",
            commonErrors: ["Three sentences about different topics.", "Repeating the same idea."],
            examinerNote: "All sentences must be about the one food.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes a paragraph easy for a reader to understand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No punctuation" },
              { id: "b", text: "Very long sentences" },
              { id: "c", text: "Many different topics" },
              { id: "d", text: "One topic, logical order and correct sentences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph clarity", statement: "One topic + logical order + correct sentences = clear paragraph." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — clarity comes from unity, order and accuracy.", working: "one topic, logical order, correct sentences", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** One topic, logical order and correct sentences",
            commonErrors: ["Choosing 'many topics' — that makes it confusing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Mixed-up Sentences",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "1. I like my room very much.\n2. My room is small but nice.\n3. There is a bed, a desk and a wardrobe.\n4. I have got a small room.",
          },
          stem: "Which sentence is the best topic sentence for this paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence 4" },
              { id: "b", text: "Sentence 2" },
              { id: "c", text: "Sentence 1" },
              { id: "d", text: "Sentence 3" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic sentence choice", statement: "The topic sentence introduces the subject — 'I have got a small room' names the topic best." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — sentence 4 states the main fact about the room.", working: "Sentence 4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Sentence 4",
            commonErrors: ["Choosing sentence 1 — that is an opinion, which comes last."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short paragraph (4 sentences) about your best friend.",
          parts: [
            { label: "a", prompt: "Write a topic sentence naming your friend.", marks: 1 },
            { label: "b", prompt: "Write three detail sentences: name, what they are like, and something you do together.", marks: 2 },
            { label: "c", prompt: "Check capitals, full stops and verbs, then write your final paragraph.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Paragraph accuracy", statement: "Correct word order, punctuation and verb forms throughout." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — topic sentence names the friend.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — three sentences covering name, description and shared activity.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — accurate verbs and word order in all three.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final paragraph has correct capitals and full stops.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A 4-sentence paragraph: topic + 3 details + correct punctuation.",
            commonErrors: ["Repeating the same detail.", "Missing full stops."],
            examinerNote: "All four content elements must appear.",
          },
        },
        {
          id: "mla1-u2-writing-paragraph-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "My Books",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "There are five books on my desk. I read two of them yesterday. I have got three new books.",
          },
          stem: "Read the text and write three numbers: books on the desk, books read yesterday and new books.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Books on desk", answer: 5 },
              { label: "(b) Books read yesterday", answer: 2 },
              { label: "(c) New books", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities pair with their nouns in the text." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'five books on my desk'.", working: "5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'read two of them yesterday'.", working: "2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'three new books'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 5 (b) 2 (c) 3",
            commonErrors: ["Confusing 'read yesterday' with 'new books'."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
  ],
};
