import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mla2-u3-lesson-3-1",
  code: "3-1",
  title: "Accuracy: Past Simple, Questions and Negatives",
  goal: "I CAN form the past simple correctly, including questions and negatives with did/didn't, and spell common irregular verbs.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Past simple", definition: "The tense for completed past actions." },
    { term: "Irregular verb", definition: "A verb whose past form does not follow the -ed rule: go → went." },
    { term: "Auxiliary verb", definition: "A helping verb: did (past), do/does (present), am/is/are." },
    { term: "Negative", definition: "A sentence saying something did not happen: 'I didn't go.'" },
    { term: "Base form", definition: "The dictionary form of a verb: go, eat, see." },
  ],
  concepts: [
    {
      id: "mla2-u3-past-accuracy",
      title: "Past simple accuracy: statements, questions, negatives",
      skill: "Form all three past simple patterns correctly with regular and irregular verbs.",
      lesson: {
        sections: [
          {
            heading: "Three patterns to master",
            body: "Statement: 'I **played** football yesterday.' / 'She **went** home early.' Question: '**Did** you **play** football?' / '**Did** she **go** home?' Negative: 'I **didn't play**.' / 'She **didn't go**.' Notice: after did/didn't the main verb returns to **base form** — never 'did you went'.",
          },
          {
            heading: "Regular vs irregular",
            body: "Regular verbs add -ed: play→played, watch→watched, study→studied (y→ied). Irregular verbs must be memorised: go→went, eat→ate, see→saw, have→had, do→did, make→made, take→took, buy→bought, come→came, get→got, give→gave, find→found, tell→told, say→said.",
          },
          {
            heading: "Time expressions with past",
            body: "Past simple needs a past time marker: **yesterday, last night/week/month/year, ago, in 2020**. Without one, English often prefers present perfect (a later topic). For MYP 2, always pair past verbs with past time words: 'I saw a film **last night**.'",
          },
        ],
        keyFormulas: [
          { name: "Past patterns", statement: "S + past verb. | Did + S + base verb? | S + didn't + base verb" },
        ],
        workedExample: {
          problem: "Make a negative: 'She watched TV last night.'",
          solution: "'She didn't watch TV last night.' — didn't + base form 'watch'.",
        },
      },
      questions: [
        {
          id: "mla2-u3-past-accuracy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct negative sentence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I not go to school." },
              { id: "b", text: "I didn't goes to school." },
              { id: "c", text: "I didn't went to school." },
              { id: "d", text: "I didn't go to school." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "didn't + base form", statement: "After didn't the verb returns to base form." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'didn't go' is correct; 'went' cannot follow didn't.", working: "didn't go", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** I didn't go to school.",
            commonErrors: ["Keeping the past form after didn't."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the past simple of 'buy' and use it in a sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular past", statement: "buy → bought (irregular)." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct form 'bought'.", working: "bought", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct sentence with bought.", working: "I bought ... yesterday.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "bought — e.g. 'I bought a new book yesterday.'",
            commonErrors: ["'buyed' or 'buyed' — buy is irregular."],
            examinerNote: "Both form and sentence needed.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct this dialogue: A: 'Did you went to the cinema?' B: 'Yes, I did. I watch a great film.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "did + base form / past consistency", statement: "After did use base verb; answer must match question's tense." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Did you go to the cinema?' (go, not went).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'Yes, I did. I watched a great film.' (past form 'watched').", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains did + base form rule.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains tense consistency between question and answer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Did you go to the cinema?' 'Yes, I did. I watched a great film.'",
            commonErrors: ["Correcting only one error."],
            examinerNote: "Both errors must be fixed.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short interview-style exchange about what someone did last weekend.",
          parts: [
            { label: "a", prompt: "Write two past-simple questions with 'Did...'.", marks: 2 },
            { label: "b", prompt: "Write two answers: one positive, one negative (didn't).", marks: 3 },
            { label: "c", prompt: "Check: did + base verb in questions, didn't + base verb in negatives, correct irregulars.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past Q&A accuracy", statement: "did/didn't always take the base form; irregulars correct." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two did-questions about the weekend.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct question order and base verbs.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — positive answer with correct past form.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — negative with didn't + base verb.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — answers match the questions.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check confirms all did/didn't + base forms.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — irregular verbs correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — exchange reads naturally and accurately.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 questions + 1 positive + 1 negative answer, all accurate.",
            commonErrors: ["'Did you went?' / 'I didn't went.'"],
            examinerNote: "Base verb after did/didn't is the key criterion.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct past simple form of 'study'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "study" },
              { id: "b", text: "studied" },
              { id: "c", text: "studyed" },
              { id: "d", text: "studing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "y → i before -ed", statement: "Verbs ending in consonant + y change y to i: study → studied." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'studied' is correct.", working: "studied", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** studied",
            commonErrors: ["'studyed' — y must change to i."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct negative sentence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She didn't watch TV." },
              { id: "b", text: "She didn't watches TV." },
              { id: "c", text: "She didn't watched TV." },
              { id: "d", text: "She not watch TV." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "didn't + base form", statement: "After 'didn't' the verb returns to base form." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'didn't watch' is correct.", working: "didn't watch", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** She didn't watch TV.",
            commonErrors: ["Keeping the past form after didn't."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Does she went home early?" },
              { id: "b", text: "Did she go home early?" },
              { id: "c", text: "Did she goes home early?" },
              { id: "d", text: "Did she went home early?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "did + base form", statement: "After 'did' the verb returns to base form." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'did she go' uses base form correctly.", working: "Did she go home early?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Did she go home early?",
            commonErrors: ["'Did she went' — past form after did."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the past simple of 'make' and use it in a sentence about yesterday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular past", statement: "make → made (irregular)." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct form 'made'.", working: "made", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct sentence with 'made' and a past time word.", working: "I made ... yesterday.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "made — e.g. 'I made a cake yesterday.'",
            commonErrors: ["'maked' or 'maked' — make is irregular."],
            examinerNote: "Both form and sentence needed.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Football Final",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our team played in the final on Saturday. We scored three goals in the first half and won four–two. The crowd was amazing — over five hundred fans came to watch.",
          },
          stem: "Read the text and give two numbers: (a) how many goals our team scored (b) how many fans came.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 500 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'won four–two' → our team scored 4.", working: "4", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'over five hundred fans'.", working: "500", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4 (b) 500",
            commonErrors: ["Answering 3 — that was first-half goals; the final score is 4-2."],
            examinerNote: "Accept 4 and 500.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct these two sentences and explain each fix: (1) 'Did you went to the beach?' (2) 'I didn't saw the film.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "did/didn't + base form", statement: "did and didn't are followed by the base verb, never the past form." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Did you go to the beach?'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'I didn't see the film.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains did/didn't + base form rule.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains why 'went'/'saw' cannot follow did/didn't.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Did you go to the beach?' 'I didn't see the film.' — did/didn't take the base verb.",
            commonErrors: ["Correcting only one sentence."],
            examinerNote: "Both sentences must be fixed with explanations.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write an interview-style exchange about what someone did yesterday.",
          parts: [
            { label: "a", prompt: "Write two past-simple questions with 'Did...'.", marks: 2 },
            { label: "b", prompt: "Write two answers: one positive, one negative (didn't).", marks: 2 },
            { label: "c", prompt: "Check: did/didn't + base verb, correct irregulars, punctuation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past Q&A accuracy", statement: "did/didn't always take the base form; irregulars correct." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two did-questions about yesterday.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct question order and base verbs.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — positive answer with correct past form.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — negative with didn't + base verb.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check confirms all did/didn't + base forms.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — irregular verbs correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 questions + 1 positive + 1 negative answer, all accurate.",
            commonErrors: ["'Did you went?' / 'I didn't went.'"],
            examinerNote: "Base verb after did/didn't is essential.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct past simple form of 'take'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "taked" },
              { id: "b", text: "taking" },
              { id: "c", text: "took" },
              { id: "d", text: "taken" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular past forms", statement: "'Take' is irregular: take → took." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — past simple of 'take' is 'took'.", working: "took", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** took",
            commonErrors: ["Choosing 'taked' — take is irregular."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Long Journey",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "We drove to the coast last weekend. The journey took five hours, but it was worth it. We stayed in a small hotel for three nights and swam in the sea every day.",
          },
          stem: "Read the text and give two numbers: (a) how many hours the journey took (b) how many nights they stayed.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'took five hours'.", working: "5", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'three nights'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 5 (b) 3",
            commonErrors: ["Swapping the two numbers."],
            examinerNote: "Accept 5 and 3.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "When do we use 'did' in English questions and negatives?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only with 'will'" },
              { id: "b", text: "Never — it is not used" },
              { id: "c", text: "Only in the present" },
              { id: "d", text: "In past simple questions and negatives" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "did as auxiliary", statement: "'Did' marks past questions and negatives; the main verb returns to base form." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'did' is the past auxiliary: 'Did you go?' / 'I didn't go.'", working: "past questions/negatives", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** In past simple questions and negatives",
            commonErrors: ["Thinking 'did' is only for questions, not negatives."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Shopping Trip",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Yesterday I went shopping with my mum. We bought three shirts and two pairs of shoes. The total cost was fifty pounds.",
          },
          stem: "How much did the shopping cost in pounds? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'total cost was fifty pounds'.", working: "50", marks: 1, markCode: "B" },
            ],
            finalAnswer: "50",
            commonErrors: ["Answering 3 or 2 — those are item counts, not cost."],
            examinerNote: "Accept 50 only.",
          },
        },
        {
          id: "mla2-u3-past-accuracy-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a 'Find Someone Who...' interview task sheet for your class about the past.",
          parts: [
            { label: "a", prompt: "Write three 'Did you...' questions about past activities.", marks: 2 },
            { label: "b", prompt: "Write two 'I didn't...' negative sentences about things you did not do yesterday.", marks: 2 },
            { label: "c", prompt: "Check: did/didn't + base verb everywhere, correct irregulars, punctuation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past Q&A accuracy", statement: "did/didn't + base verb; irregulars correct." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three real did-questions.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct question order and base verbs.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two true negative sentences.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — didn't + base verb correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check confirms all did/didn't + base forms.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — irregular verbs correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — sheet reads clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 did-questions + 2 didn't-sentences + correct check.",
            commonErrors: ["'Did you went?' errors.", "Negatives without didn't."],
            examinerNote: "All forms must use base verbs after did/didn't.",
          },
        },
      ],
    },
    {
      id: "mla2-u3-comparatives-linking",
      title: "Comparatives and linking words",
      skill: "Compare things using comparatives and superlatives, and join sentences with and/but/because.",
      lesson: {
        sections: [
          {
            heading: "Comparing things",
            body: "Use **comparative** adjectives to compare two things: add **-er** (tall → taller, fast → faster) or use **more** for longer adjectives (more interesting, more beautiful). Irregular: good → better, bad → worse. For three or more use **the -est / the most**: 'the tallest', 'the most interesting'.",
          },
          {
            heading: "Linking words",
            body: "Join ideas with: **and** (add), **but** (contrast), **because** (reason), **so** (result), **or** (choice). 'I like football, **but** my brother prefers swimming.' 'I stayed home **because** it rained.' 'It rained, **so** we stayed inside.' These words make your English flow like a real speaker's.",
          },
          {
            heading: "Comparing in sentences",
            body: "Comparatives often use **than**: 'My room is bigger **than** yours', 'Football is more fun **than** homework'. Superlatives use **the**: 'Mount Everest is **the highest** mountain', 'This is **the best** film I've seen.'",
          },
        ],
        keyFormulas: [
          { name: "Comparatives", statement: "adj+er / more + adj ... than; the + adj+est / the most + adj" },
          { name: "Linkers", statement: "and, but, because, so, or" },
        ],
        workedExample: {
          problem: "Compare these: 'My bike is fast. Your bike is fast.' → one sentence.",
          solution: "'Your bike is faster than mine.' or 'My bike is as fast as yours.'",
        },
      },
      questions: [
        {
          id: "mla2-u3-comparatives-linking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct comparative of 'good'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "better" },
              { id: "b", text: "best" },
              { id: "c", text: "gooder" },
              { id: "d", text: "more good" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular comparatives", statement: "good → better → best; bad → worse → worst." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'better' is the irregular comparative of 'good'.", working: "better", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** better",
            commonErrors: ["'gooder' or 'more good' — 'good' is irregular."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Complete the sentence: 'A car is ___ (fast) than a bike.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparative + than", statement: "Short adjectives take -er ... than." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'faster than' is correct.", working: "faster", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete correct sentence.", working: "A car is faster than a bike.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A car is faster than a bike.",
            commonErrors: ["'more fast' — short adjective takes -er."],
            examinerNote: "Accept 'faster' only.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Join these two sentences with 'but' and 'because': 'I wanted to play football. It rained.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linking words", statement: "but = contrast; because = reason." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I wanted to play football, but it rained.' (contrast).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — alternative with because: 'I stayed home because it rained.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — both versions preserve meaning correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'I wanted to play football, but it rained.' / 'I couldn't play because it rained.'",
            commonErrors: ["Using 'so' instead of 'but' — changes the meaning."],
            examinerNote: "Either linker accepted if meaning is correct.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write three sentences comparing two hobbies or sports you enjoy.",
          parts: [
            { label: "a", prompt: "Write one comparative sentence with 'than'.", marks: 2 },
            { label: "b", prompt: "Write one superlative sentence with 'the'.", marks: 2 },
            { label: "c", prompt: "Write one sentence joined with 'but' or 'because'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparison + linking", statement: "Correct comparative/superlative forms and appropriate linkers." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — comparative adjective + 'than' correct.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — superlative with 'the' correct (the -est/the most).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct spelling.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — linker used appropriately for the meaning.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — joined sentence grammatically correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — punctuation (comma or full stop) correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1 comparative + 1 superlative + 1 linked sentence.",
            commonErrors: ["'more faster' — double comparative.", "Missing 'the' in superlative."],
            examinerNote: "All three structures must be correct.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the comparative form of 'tall'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "most tall" },
              { id: "b", text: "tallest" },
              { id: "c", text: "more tall" },
              { id: "d", text: "taller" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparatives", statement: "Short adjectives add -er: tall → taller." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'taller' is the comparative of 'tall'.", working: "taller", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** taller",
            commonErrors: ["Choosing 'tallest' — that is the superlative."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the superlative form of 'fast'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "faster" },
              { id: "b", text: "most fast" },
              { id: "c", text: "more fast" },
              { id: "d", text: "the fastest" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Superlatives", statement: "Superlatives use 'the' + -est for short adjectives: the fastest." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'the fastest' is the superlative.", working: "the fastest", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** the fastest",
            commonErrors: ["Missing 'the' or using comparative -er."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct comparative of 'bad'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "worse" },
              { id: "b", text: "more bad" },
              { id: "c", text: "badder" },
              { id: "d", text: "worst" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular comparatives", statement: "bad → worse → worst; good → better → best." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'worse' is the irregular comparative of 'bad'.", working: "worse", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** worse",
            commonErrors: ["'badder' or 'more bad' — 'bad' is irregular."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a comparative sentence comparing two sports or hobbies using 'than'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparative + than", statement: "Comparative adjective + 'than' compares two things." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct comparative form.", working: "...er/more ... than ...", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete correct sentence with 'than'.", working: "Football is more fun than homework.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Swimming is more fun than running.'",
            commonErrors: ["'more faster' — double comparative."],
            examinerNote: "Must include 'than'.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Cities",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "London is bigger than Oxford — it has over eight million people. Oxford is older, though — parts of the university are eight hundred years old. Both cities have excellent universities and many parks.",
          },
          stem: "Read the text and give two numbers: (a) London's approximate population in millions (b) approximately how old parts of Oxford university are.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 800 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in comparisons", statement: "Figures in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'over eight million people'.", working: "8", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'eight hundred years old'.", working: "800", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 8 (b) 800",
            commonErrors: ["Confusing 'bigger' (comparison) with numbers."],
            examinerNote: "Accept 8 and 800.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Join these sentence pairs with 'but', 'because' or 'so' (use each once): (1) 'I wanted to go swimming. The pool was closed.' (2) 'She studied hard. She passed the exam.' (3) 'It was raining. We stayed inside.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linking words", statement: "but = contrast; because = reason; so = result." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I wanted to go swimming, but the pool was closed.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'She studied hard, so she passed the exam.' or 'because'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'It was raining, so we stayed inside.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — all linkers used with correct meaning.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1. but (contrast) 2. so/because (reason→result) 3. so (result).",
            commonErrors: ["Using 'but' where 'so' is needed — changes meaning."],
            examinerNote: "Each linker must preserve the logical relationship.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write three sentences about your school comparing it to another school you know or have read about.",
          parts: [
            { label: "a", prompt: "Write one comparative sentence with 'than'.", marks: 2 },
            { label: "b", prompt: "Write one superlative sentence with 'the'.", marks: 2 },
            { label: "c", prompt: "Join two ideas with 'but' or 'because'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparison + linking", statement: "Correct comparative/superlative forms and appropriate linkers." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — comparative + 'than' correct.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — superlative with 'the' correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct spelling.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — linker used appropriately.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — joined sentence grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1 comparative + 1 superlative + 1 linked sentence.",
            commonErrors: ["'more faster' — double comparative.", "Missing 'the' in superlative."],
            examinerNote: "All three structures must be correct.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct comparative of 'interesting'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "interestingerest" },
              { id: "b", text: "more interesting" },
              { id: "c", text: "most interesting" },
              { id: "d", text: "interestinger" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Long adjectives", statement: "Long adjectives use 'more': more interesting, more beautiful." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'more interesting' is correct for a long adjective.", working: "more interesting", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** more interesting",
            commonErrors: ["Adding -er to a long adjective."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Exam Results",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "This year, more students passed the exam than last year — 85 out of 100, compared with only 70 last year. The best student scored 98 marks, but the average was 76.",
          },
          stem: "Read the text and give two numbers: (a) how many students passed this year (b) the best student's score.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 85 },
              { label: "b", answer: 98 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in comparisons", statement: "Figures in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — '85 out of 100'.", working: "85", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'scored 98 marks'.", working: "98", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 85 (b) 98",
            commonErrors: ["Answering 76 — that is the average, not the best score."],
            examinerNote: "Accept 85 and 98.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which linker shows CONTRAST (opposite ideas)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "because" },
              { id: "b", text: "so" },
              { id: "c", text: "but" },
              { id: "d", text: "and" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linkers", statement: "'But' joins contrasting ideas." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'but' marks contrast.", working: "but", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** but",
            commonErrors: ["Choosing 'because' — that gives a reason, not contrast."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Class Pets",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our class has three pets: a rabbit, a hamster and a fish. The rabbit is the biggest, and the fish is the smallest. All three live in the same corner of the classroom.",
          },
          stem: "How many pets does the class have? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'three pets'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — the superlatives mention two animals, but there are three pets."],
            examinerNote: "Accept 3 only.",
          },
        },
        {
          id: "mla2-u3-comparatives-linking-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short paragraph comparing your town or city with another place you know.",
          parts: [
            { label: "a", prompt: "Write two comparative sentences with 'than'.", marks: 2 },
            { label: "b", prompt: "Write one superlative sentence with 'the'.", marks: 2 },
            { label: "c", prompt: "Use 'but' or 'because' at least once to join ideas.", marks: 1 },
            { label: "d", prompt: "Check: correct forms, linkers, capitals and full stops.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparison writing", statement: "Correct comparative/superlative forms + appropriate linkers." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — two correct comparative sentences with 'than'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct superlative with 'the'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — accurate spelling.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — linker used appropriately.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion B: Reading — paragraph reads clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 comparatives + 1 superlative + 1 linker + correct check.",
            commonErrors: ["'more faster' — double comparative.", "Missing 'the' in superlative."],
            examinerNote: "All comparison structures must be correct.",
          },
        },
      ],
    },
  ],
};
