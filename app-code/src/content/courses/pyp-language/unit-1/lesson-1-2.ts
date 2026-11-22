import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "pypl-u1-lesson-1-2",
  code: "1-2",
  title: "Asking Questions and Telling Stories",
  goal: "I CAN ask questions that help me learn and retell a story in order with a beginning, middle and end.",
  standards: [
    "PYP Language: Oral language",
    "PYP transdisciplinary theme: Who We Are",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Question", definition: "Words that ask for information, often starting with who, what, where, when, why or how." },
    { term: "Answer", definition: "What someone says or writes in reply to a question." },
    { term: "Story", definition: "A telling of events, real or imagined, usually with characters and a sequence of happenings." },
    { term: "Beginning", definition: "The first part of a story that introduces who and where." },
    { term: "Middle", definition: "The main part of a story where the important events happen." },
    { term: "End", definition: "The last part of a story where things finish or change." },
  ],
  concepts: [
    {
      id: "pypl-u1l2-c1-asking-questions",
      title: "Asking and answering questions",
      skill: "Ask questions that get useful answers and answer questions clearly.",
      lesson: {
        sections: [
          {
            heading: "Question words",
            body: "Question words help us find out information. **Who** asks about a person, **what** about a thing or event, **where** about a place, **when** about a time, **why** about a reason, and **how** about a way or method. 'Where did you go?' finds out a place; 'Why did you go?' finds out a reason.",
          },
          {
            heading: "Good answers",
            body: "A good answer gives the information that was asked for. If someone asks 'What did you eat for lunch?' the answer is the food, not 'I was hungry.' If you do not know the answer, it is honest to say 'I don't know' — a guess presented as fact is worse than an honest 'I don't know.'",
          },
        ],
        keyFormulas: [
          { name: "Question words", statement: "Who = person, What = thing, Where = place, When = time, Why = reason, How = way" },
        ],
        workedExample: {
          problem: "Your friend shows you a photo of a beach. Which question word finds out when the photo was taken?",
          solution: "'When' asks about a time, so ask 'When did you take this photo?'",
        },
      },
      questions: [
        {
          id: "pypl-q-u1l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question word would you use to find out the place where something happened?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where" },
              { id: "b", text: "How" },
              { id: "c", text: "When" },
              { id: "d", text: "Who" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "'Where' asks about a place." },
            ],
            steps: [
              { reasoning: "Where asks about a place, so it is the right question word.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Where",
            commonErrors: ["Choosing 'when' — that asks about a time, not a place."],
          },
        },
        {
          id: "pypl-q-u1l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your teacher asks: 'Why do we wear hats in the sun?' Give a good answer in a full sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Answering 'why'", statement: "A 'why' answer must give a reason." },
            ],
            steps: [
              { reasoning: "The question asks for a reason, so the answer must say why hats help in the sun.", marks: 1, markCode: "M" },
              { reasoning: "A good answer, e.g. 'We wear hats in the sun to shade our face and stop sunburn.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any answer giving a reason, e.g. hats shade our face and protect us from the sun.",
            commonErrors: ["Answering 'what' — e.g. 'A hat is on my head' — which does not give a reason."],
          },
        },
        {
          id: "pypl-q-u1l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Liam asks his friend: 'Did you like the film?' His friend answers: 'It was long.' Explain why this is not a good answer to the question, and write a better answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Matching answers to questions", statement: "A yes/no question needs a yes or no answer, possibly with a reason." },
            ],
            steps: [
              { reasoning: "The question asks for yes or no ('did you like it?'), so the answer must say yes or no first.", marks: 1, markCode: "M" },
              { reasoning: "'It was long' gives information but does not answer yes or no.", marks: 1, markCode: "R" },
              { reasoning: "Better answer, e.g. 'Yes, I liked it, but it was a bit long.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The question needs yes/no; better: 'Yes, I liked it, but it was long.'",
            commonErrors: ["Thinking any true sentence is a good answer — it must match the question type."],
          },
        },
        {
          id: "pypl-q-u1l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class is planning a visit to the zoo.",
          parts: [
            { label: "a", prompt: "Write one question a student could ask the teacher about the visit.", marks: 1 },
            { label: "b", prompt: "Write one question a student could ask a friend about the zoo.", marks: 1 },
            { label: "c", prompt: "Match each question word to what it asks about: who, when, why.", marks: 3 },
            { label: "d", prompt: "Explain why asking questions helps us learn about new places.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "Who = person, when = time, why = reason." },
              { kind: "skill", name: "Asking questions", statement: "Questions are how we find out information we do not already know." },
            ],
            steps: [
              { part: "a", reasoning: "A sensible question, e.g. 'When are we going to the zoo?' or 'What should we bring?'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A sensible question, e.g. 'Which animal do you most want to see?'", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Who asks about a person.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "When asks about a time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Why asks about a reason.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Questions let us find out facts we do not know.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Good questions about a place give us information to plan and to learn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Any relevant question. (b) Any relevant question. (c) who=person, when=time, why=reason. (d) Questions gather new information.",
            commonErrors: ["In (c), swapping 'when' and 'why' — 'when' is time, 'why' is reason."],
          },
        },
        {
          id: "pypl-q-u1l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question word asks about a person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who" },
              { id: "b", text: "What" },
              { id: "c", text: "Where" },
              { id: "d", text: "When" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "'Who' asks about a person." },
            ],
            steps: [
              { reasoning: "Who = person, so it is the right question word.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Who",
            commonErrors: ["Choosing 'what' — that asks about a thing, not a person."],
          },
        },
        {
          id: "pypl-q-u1l2c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main question words are there: who, what, where, when, why and how?",
          response: { type: "numeric", parts: [
            { label: "Question words", answer: 6 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "The six question words are who, what, where, when, why and how." },
            ],
            steps: [
              { reasoning: "Count them: who, what, where, when, why, how = 6.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 5 — missing one question word."],
          },
        },
        {
          id: "pypl-q-u1l2c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question word finds out a reason?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who" },
              { id: "b", text: "When" },
              { id: "c", text: "Why" },
              { id: "d", text: "Where" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "'Why' asks about a reason." },
            ],
            steps: [
              { reasoning: "Why asks for a reason, e.g. 'Why did you go?'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Why",
            commonErrors: ["Choosing 'when' — that asks about a time, not a reason."],
          },
        },
        {
          id: "pypl-q-u1l2c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your teacher asks: 'What did you do at break time?' Give a good answer in a full sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Answering 'what'", statement: "A 'what' answer must name the thing or activity asked about." },
            ],
            steps: [
              { reasoning: "The question asks what you did, so the answer must say the activity.", marks: 1, markCode: "M" },
              { reasoning: "A good answer, e.g. 'At break time I played football with my friends.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any answer naming an activity, e.g. 'I played football with my friends.'",
            commonErrors: ["Answering 'where' or 'when' — e.g. 'In the playground' — which does not say what you did."],
          },
        },
        {
          id: "pypl-q-u1l2c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many words are in the question 'Where is my hat?'",
          response: { type: "numeric", parts: [
            { label: "Words in the question", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "context", name: "Counting words", statement: "Words are counted by the spaces between them." },
            ],
            steps: [
              { reasoning: "Count: Where, is, my, hat = 4 words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting the question mark as a word — punctuation is not a word."],
          },
        },
        {
          id: "pypl-q-u1l2c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The teacher asks 'Do you like maths?' and a student answers 'Maths is numbers and shapes.' Explain why this is not a good answer and write a better one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Matching answers to questions", statement: "A yes/no question needs a yes or no answer first, then a reason if wanted." },
            ],
            steps: [
              { reasoning: "The question asks 'do you like it?' — yes or no — but the answer only describes maths.", marks: 1, markCode: "M" },
              { reasoning: "The student did not say whether they like maths.", marks: 1, markCode: "R" },
              { reasoning: "Better answer, e.g. 'Yes, I like maths because I enjoy solving puzzles.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The answer must start with yes or no; better: 'Yes, I like maths because...'",
            commonErrors: ["Thinking any true sentence answers the question — it must match what was asked."],
          },
        },
        {
          id: "pypl-q-u1l2c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You are looking at a photo your friend took. Which is the BEST question to ask about it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Is a photo a kind of picture?'" },
              { id: "b", text: "'When did you take this photo?'" },
              { id: "c", text: "'Do you like colours?'" },
              { id: "d", text: "'How old are you?'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Useful questions", statement: "A good question asks for new information about the topic." },
            ],
            steps: [
              { reasoning: "(a) finds out new information about the photo; the others are unrelated or already known.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 'When did you take this photo?'",
            commonErrors: ["Choosing (b) — it asks something obvious, not useful new information."],
          },
        },
        {
          id: "pypl-q-u1l2c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why it is better to say 'I don't know' than to guess an answer when someone asks you a question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Honest answers", statement: "An honest 'I don't know' is better than a guess presented as fact." },
            ],
            steps: [
              { reasoning: "A guess might be wrong, and the listener cannot tell it is a guess.", marks: 1, markCode: "M" },
              { reasoning: "Wrong information can spread and cause mistakes.", marks: 1, markCode: "M" },
              { reasoning: "Saying 'I don't know' is honest and lets you ask how to find the real answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Guessing can spread wrong information; 'I don't know' is honest and opens the door to finding the real answer.",
            commonErrors: ["Saying guesses are always wrong — the problem is presenting a guess as fact."],
          },
        },
        {
          id: "pypl-q-u1l2c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many question marks are needed in this writing: 'Where is Sam? What is he doing?'",
          response: { type: "numeric", parts: [
            { label: "Question marks", answer: 2 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question marks", statement: "Every question ends with a question mark." },
            ],
            steps: [
              { reasoning: "There are two questions, so two question marks are needed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1 — missing that each question needs its own question mark."],
          },
        },
        {
          id: "pypl-q-u1l2c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Someone asks: 'Where did you go on Saturday?' A good answer must tell you...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A reason" },
              { id: "b", text: "A place" },
              { id: "c", text: "A person" },
              { id: "d", text: "A time" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "'Where' asks about a place." },
            ],
            steps: [
              { reasoning: "Where = place, so the answer should name a place like 'the park'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A place",
            commonErrors: ["Choosing (b) — the question already gives the time (Saturday); it asks for a place."],
          },
        },
        {
          id: "pypl-q-u1l2c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is the BEST question to ask before a school trip?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Do you like trips?'" },
              { id: "b", text: "'When are we going and what should we bring?'" },
              { id: "c", text: "'Is the sky blue?'" },
              { id: "d", text: "'How many legs do I have?'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Useful questions", statement: "Good questions find out information you need, like when the trip is and what to bring." },
            ],
            steps: [
              { reasoning: "(a) asks useful planning questions; the others ask things you already know or that do not matter.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 'When are we going and what should we bring?'",
            commonErrors: ["Choosing (d) — it is silly and finds out nothing useful."],
          },
        },
        {
          id: "pypl-q-u1l2c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class is planning a picnic in the park.",
          parts: [
            { label: "a", prompt: "Write one 'who' question a student could ask about the picnic.", marks: 1 },
            { label: "b", prompt: "Write one 'what' question a student could ask about the picnic.", marks: 1 },
            { label: "c", prompt: "Write one 'where' or 'when' question about the picnic.", marks: 1 },
            { label: "d", prompt: "Explain why asking questions before the picnic helps the class.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Asking questions", statement: "Different question words find out different information: who, what, where, when, why, how." },
            ],
            steps: [
              { part: "a", reasoning: "A sensible 'who' question, e.g. 'Who is bringing the food?'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A sensible 'what' question, e.g. 'What should we pack?'", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A sensible 'where' or 'when' question, e.g. 'Where will we sit?' or 'When does the picnic start?'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Questions find out information the class does not know yet.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "They help everyone plan — knowing when, where and what to bring.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Good questions prevent problems, like forgetting food or not knowing the meeting place.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Asking shows curiosity and helps the group work together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Any 'who' question. (b) Any 'what' question. (c) Any 'where'/'when' question. (d) Questions gather planning information and prevent problems.",
            commonErrors: ["In (a)-(c), questions that do not match the question word, e.g. a 'who' question asking about a place."],
          },
        },
      ],
    },
    {
      id: "pypl-u1l2-c2-retelling-stories",
      title: "Retelling stories",
      skill: "Retell a story in order with a beginning, middle and end.",
      lesson: {
        sections: [
          {
            heading: "Parts of a story",
            body: "Most stories have three parts. The **beginning** introduces the characters and where the story happens. The **middle** tells the main events — the problem or adventure. The **end** shows how things finish, often with a surprise or a happy (or sad) ending. Retelling means saying the story again in your own words, in the same order.",
          },
          {
            heading: "How to retell",
            body: "Listen carefully first. Then think: **Who** is in the story? **What** happens? **Where** does it happen? Start with 'Once upon a time' or 'One day' for the beginning, and tell the events in order until the end. Do not add things that were not in the story.",
          },
        ],
        keyFormulas: [
          { name: "Story structure", statement: "Beginning (who and where) → Middle (main events) → End (how it finishes)" },
          { name: "Retelling questions", statement: "Who? What? Where? In what order?" },
        ],
        workedExample: {
          problem: "Story: 'A cat named Tom lives with Ana. One night Tom runs away. Ana finds him in the garden and brings him home.' Retell it in three parts.",
          solution: "Beginning: Tom the cat lives with Ana. Middle: Tom runs away one night. End: Ana finds him in the garden and brings him home.",
        },
      },
      questions: [
        {
          id: "pypl-q-u1l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a story, the part where the main events and problem happen is called the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beginning" },
              { id: "b", text: "End" },
              { id: "c", text: "Title" },
              { id: "d", text: "Middle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Story parts", statement: "Beginning introduces, middle holds the main events, end resolves." },
            ],
            steps: [
              { reasoning: "The middle is where the main events happen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Middle",
            commonErrors: ["Choosing 'end' — the end is where things finish, not where main events happen."],
          },
        },
        {
          id: "pypl-q-u1l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these story events in order: (1) The wolf huffs and puffs, (2) The three little pigs build houses, (3) The wolf tries to blow the houses down.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequencing", statement: "Events in a story happen in a logical order that must be kept when retelling." },
            ],
            steps: [
              { reasoning: "Building the houses comes first, then the wolf tries to blow them down, then the huffing and puffing.", marks: 1, markCode: "M" },
              { reasoning: "Correct order: (2), (3), (1).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(2), (3), (1)",
            commonErrors: ["Putting the wolf first — he appears after the pigs build."],
          },
        },
        {
          id: "pypl-q-u1l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ben read this story: 'Mia planted a seed. She watered it every day. A small green shoot appeared. It grew into a tall sunflower.' When Ben retells it, he says: 'Mia planted a sunflower and it grew tall.' What important parts did Ben leave out?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complete retelling", statement: "A good retelling keeps the key events in order, not just the start and end." },
            ],
            steps: [
              { reasoning: "Ben left out the middle: watering the seed every day.", marks: 1, markCode: "M" },
              { reasoning: "He also left out the small green shoot appearing — the first sign of growth.", marks: 1, markCode: "M" },
              { reasoning: "A complete retelling: planted a seed, watered it, a shoot appeared, it grew into a sunflower.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "He left out the watering and the shoot appearing.",
            commonErrors: ["Saying Ben 'changed' the story — he shortened it by missing middle events."],
          },
        },
        {
          id: "pypl-q-u1l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Listen to this story or read it: 'One sunny morning, Sam found a lost puppy near the shops. It was small and shivering. Sam wrapped it in his jacket and took it to the animal shelter. The next day, Sam's family adopted the puppy. They named it Lucky.'",
          parts: [
            { label: "a", prompt: "Identify the beginning of the story and say what it tells us.", marks: 2 },
            { label: "b", prompt: "Identify the middle and the problem it describes.", marks: 2 },
            { label: "c", prompt: "Identify the end and how it resolves the problem.", marks: 1 },
            { label: "d", prompt: "Retell the whole story in three or four sentences.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Beginning introduces who/where, middle has the problem, end resolves it." },
            ],
            steps: [
              { part: "a", reasoning: "Beginning: 'One sunny morning, Sam found a lost puppy near the shops.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It introduces Sam and the puppy and where it happened.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Middle: the puppy is small and shivering; Sam wraps it in his jacket and takes it to the shelter.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The problem: the puppy is lost and cold and needs help.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "End: the family adopts the puppy and names it Lucky — the problem is solved.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Retells all key events in order.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Uses own words, three or four sentences, correct order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sam finds lost puppy near shops. (b) Puppy shivering; Sam helps it to shelter. (c) Family adopts it, named Lucky. (d) Any accurate ordered retelling.",
            commonErrors: ["In (b), calling the shelter the problem — the problem is the lost, cold puppy."],
          },
        },
        {
          id: "pypl-q-u1l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The part of a story that introduces the characters and where the story happens is called the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "End" },
              { id: "b", text: "Beginning" },
              { id: "c", text: "Middle" },
              { id: "d", text: "Title" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Story parts", statement: "The beginning introduces who and where; the middle has the main events; the end resolves." },
            ],
            steps: [
              { reasoning: "The beginning introduces the characters and setting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Beginning",
            commonErrors: ["Choosing 'middle' — the middle is where the main events happen, not the introduction."],
          },
        },
        {
          id: "pypl-q-u1l2c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main parts does most stories have: beginning, middle and end?",
          response: { type: "numeric", parts: [
            { label: "Story parts", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Stories are built from a beginning, a middle and an end." },
            ],
            steps: [
              { reasoning: "Count the parts: beginning, middle, end = 3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting that all three parts make a story."],
          },
        },
        {
          id: "pypl-q-u1l2c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When retelling a story, which question word helps you say where it happened?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who" },
              { id: "b", text: "Why" },
              { id: "c", text: "When" },
              { id: "d", text: "Where" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "'Where' asks about a place." },
            ],
            steps: [
              { reasoning: "Where asks about the place where the story happens.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Where",
            commonErrors: ["Choosing 'when' — that asks about a time, not a place."],
          },
        },
        {
          id: "pypl-q-u1l2c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A story says: 'Once upon a time, a rabbit lived in a burrow. One day a fox came to visit.' Retell just the beginning in your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Retelling the beginning", statement: "The beginning introduces who and where — a rabbit in a burrow." },
            ],
            steps: [
              { reasoning: "Identify who: a rabbit; where: in a burrow.", marks: 1, markCode: "M" },
              { reasoning: "Retell in own words, e.g. 'A rabbit lived in a burrow under the ground.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any retelling of the rabbit living in a burrow, e.g. 'A rabbit lived in a burrow.'",
            commonErrors: ["Including the fox — that is the middle, not the beginning."],
          },
        },
        {
          id: "pypl-q-u1l2c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story has 5 main events. How many events should a good retelling keep?",
          response: { type: "numeric", parts: [
            { label: "Events to keep", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complete retelling", statement: "A good retelling keeps all the key events, not just the start and end." },
            ],
            steps: [
              { reasoning: "A complete retelling keeps all 5 main events in order.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering fewer — leaving out events makes the retelling incomplete."],
          },
        },
        {
          id: "pypl-q-u1l2c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ben was asked to retell a story about a lost kitten. He said only: 'A kitten got lost and then it was found.' What did Ben leave out, and how could he improve his retelling?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complete retelling", statement: "A good retelling keeps the key events in order, including the middle." },
            ],
            steps: [
              { reasoning: "Ben left out the middle: how the kitten got lost, who looked for it, where it was found.", marks: 1, markCode: "M" },
              { reasoning: "He also did not say who was in the story or where it happened.", marks: 1, markCode: "M" },
              { reasoning: "He should retell with beginning (kitten and owner), middle (it got lost), end (it was found) in order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "He left out the middle events and details; retell who, where, and each event in order.",
            commonErrors: ["Saying Ben's retelling is 'wrong' — it is too short, missing the middle."],
          },
        },
        {
          id: "pypl-q-u1l2c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the correct order to retell this story? (1) The princess wakes up, (2) The prince kisses the princess, (3) The princess falls asleep for 100 years.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(1), (2), (3)" },
              { id: "b", text: "(1), (3), (2)" },
              { id: "c", text: "(3), (2), (1)" },
              { id: "d", text: "(2), (3), (1)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequencing", statement: "Retelling keeps the story's original order of events." },
            ],
            steps: [
              { reasoning: "She sleeps first (3), then the kiss wakes her (2), then she wakes up (1).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** (3), (2), (1)",
            commonErrors: ["Choosing (d) — waking up cannot happen before the kiss that caused it."],
          },
        },
        {
          id: "pypl-q-u1l2c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "When retelling a story, why should you not add things that were not in the story?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Faithful retelling", statement: "A retelling repeats the story's real events; adding new things changes the story." },
            ],
            steps: [
              { reasoning: "Adding new events makes it a different story, not a retelling.", marks: 1, markCode: "M" },
              { reasoning: "Listeners would hear something that never happened and get confused.", marks: 1, markCode: "M" },
              { reasoning: "Keeping only the story's events respects the writer and keeps the meaning correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adding things changes the story; a retelling must keep only what really happened in it.",
            commonErrors: ["Saying adding details is 'creative' — retelling is repeating, not inventing."],
          },
        },
        {
          id: "pypl-q-u1l2c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many questions help you retell a story: who, what and where?",
          response: { type: "numeric", parts: [
            { label: "Retelling questions", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Retelling questions", statement: "Who, what and where are the key questions for retelling." },
            ],
            steps: [
              { reasoning: "Count: who, what, where = 3 questions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — there are three retelling questions listed."],
          },
        },
        {
          id: "pypl-q-u1l2c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should you do FIRST when someone tells you a story and you want to retell it later?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start talking before they finish" },
              { id: "b", text: "Close your eyes and daydream" },
              { id: "c", text: "Listen carefully and remember who, what and where" },
              { id: "d", text: "Write down a different story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retelling preparation", statement: "Listen first and hold the key details — who, what, where — before retelling." },
            ],
            steps: [
              { reasoning: "Careful listening gives you the events to retell; the other options lose the story.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Listen carefully and remember who, what and where",
            commonErrors: ["Choosing (a) — interrupting means you miss most of the story."],
          },
        },
        {
          id: "pypl-q-u1l2c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence is the BEST ending for a retelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I don't know what happened next.'" },
              { id: "b", text: "'They all lived happily ever after.'" },
              { id: "c", text: "'The end, I think.'" },
              { id: "d", text: "'And then something else happened.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Story endings", statement: "A retelling should end with how the story finished." },
            ],
            steps: [
              { reasoning: "'Happily ever after' is a real ending; the others do not say how the story finished.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'They all lived happily ever after.'",
            commonErrors: ["Choosing (a) — 'something else' is not the story's real ending."],
          },
        },
        {
          id: "pypl-q-u1l2c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read this story: 'Max has a red bike. Yesterday it got a flat tyre on the way to school. Max walked the rest of the way. His dad fixed the tyre that evening.'",
          parts: [
            { label: "a", prompt: "What is the beginning of the story and what does it tell us?", marks: 2 },
            { label: "b", prompt: "What is the middle and what problem happens?", marks: 2 },
            { label: "c", prompt: "What is the end and how does it finish the story?", marks: 1 },
            { label: "d", prompt: "Retell the whole story in two or three sentences.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Beginning introduces who/what, middle has the problem, end resolves it." },
            ],
            steps: [
              { part: "a", reasoning: "Beginning: Max has a red bike — introduces Max and his bike.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It tells us who and what the story is about.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Middle: the bike got a flat tyre on the way to school and Max walked.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The problem: the flat tyre stopped Max riding his bike.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "End: Max's dad fixed the tyre that evening — the problem is solved.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Retells all key events in order: bike, flat tyre, walked, dad fixed it.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Uses own words in two or three sentences with correct order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Max and his red bike. (b) Flat tyre; Max walked. (c) Dad fixed the tyre. (d) Any accurate ordered retelling.",
            commonErrors: ["In (b), calling walking to school the problem — the problem is the flat tyre."],
          },
        },
      ],
    },
  ],
};
