import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "pypl-u2-lesson-2-1",
  code: "2-1",
  title: "Reading for Meaning",
  goal: "I CAN use reading strategies to understand a text and answer questions about what I read.",
  standards: [
    "PYP Language: Reading",
    "PYP transdisciplinary theme: How We Express Ourselves",
    "PYP transdisciplinary theme: Who We Are",
  ],
  vocabulary: [
    { term: "Text", definition: "Anything written or printed to read: a story, a poem, a sign, an instruction." },
    { term: "Comprehension", definition: "Understanding what a text says and means." },
    { term: "Literal question", definition: "A question answered directly from the words in the text." },
    { term: "Inference", definition: "Working out something the text does not say directly, using clues." },
    { term: "Context clue", definition: "Words around an unknown word that help you guess its meaning." },
    { term: "Predict", definition: "To guess what will happen next before you read on." },
  ],
  concepts: [
    {
      id: "pypl-u2l1-c1-reading-strategies",
      title: "Reading strategies",
      skill: "Use pictures, context clues and rereading to understand difficult words and texts.",
      lesson: {
        sections: [
          {
            heading: "Strategies that help",
            body: "Good readers use strategies when a word or text is tricky. Look at the **pictures** — they often show what the words describe. Read the **whole sentence** for **context clues** — the words around an unknown word can reveal its meaning. If you are still stuck, **reread** the sentence slowly. Never give up on the first try.",
          },
          {
            heading: "Tracking the story",
            body: "As you read, keep track of **who** is in the story, **where** it happens and **what** has happened so far. If you lose the thread, go back and reread the paragraph. Stopping to **predict** — 'I think the dog will find the bone' — keeps your mind active and makes reading fun.",
          },
        ],
        keyFormulas: [
          { name: "Reading strategy steps", statement: "Look at pictures → read the sentence → use context clues → reread if stuck" },
        ],
        workedExample: {
          problem: "You read: 'The arid desert had almost no rain for months.' You do not know 'arid'. What can you do?",
          solution: "Use context clues: the sentence says 'almost no rain', so 'arid' must mean very dry. You could also look at a picture or look the word up.",
        },
      },
      questions: [
        {
          id: "pypl-q-u2l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You come to a word you do not know while reading. What is the BEST first strategy to try?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Close the book and stop reading" },
              { id: "b", text: "Guess a random meaning" },
              { id: "c", text: "Read the whole sentence for clues and look at any pictures" },
              { id: "d", text: "Skip the word and never think about it again" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context clues", statement: "The words around an unknown word usually reveal its meaning." },
            ],
            steps: [
              { reasoning: "Reading the sentence and checking pictures gives clues to the word's meaning — the best first strategy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Read the whole sentence for clues and look at any pictures",
            commonErrors: ["Choosing (b) — guessing without clues usually gives the wrong meaning."],
          },
        },
        {
          id: "pypl-q-u2l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the sentence 'The tiny mouse hid under the cupboard when the cat walked in', what does the word 'tiny' most likely mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Context clues", statement: "Nearby words show that 'tiny' describes a small size — a mouse that hides under a cupboard is small." },
            ],
            steps: [
              { reasoning: "The clue is that the mouse hides under a cupboard — only a small animal fits there.", marks: 1, markCode: "M" },
              { reasoning: "So 'tiny' means very small.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Very small",
            commonErrors: ["Saying 'tiny' means fast or quiet — the context points to size."],
          },
        },
        {
          id: "pypl-q-u2l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student reads a story about a whale and says 'I did not understand it, so I stopped reading.' Explain two strategies the student could use instead of giving up.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading strategies", statement: "Pictures, context clues and rereading help when a text is difficult." },
            ],
            steps: [
              { reasoning: "Strategy 1: look at the pictures or diagrams to see what the text describes.", marks: 1, markCode: "M" },
              { reasoning: "Strategy 2: reread the difficult sentence slowly and use the words around it for clues.", marks: 1, markCode: "M" },
              { reasoning: "Both strategies keep the reader engaged instead of stopping.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use pictures and reread with context clues rather than giving up.",
            commonErrors: ["Suggesting 'read faster' — speed does not solve comprehension problems."],
          },
        },
        {
          id: "pypl-q-u2l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Rainy Day",
            author: "Written for Akademik Space",
            source: "Original short story",
            text: "The rain hammered on the window all morning. Tom pressed his nose to the glass and watched the gutters fill with brown water. 'Bored,' he sighed. Then he spotted something bright in the garden — his red kite, tangled in the washing line. 'A project!' he shouted, grabbing his wellies.",
          },
          stem: "Read the story, then answer the questions about it.",
          parts: [
            { label: "a", prompt: "What is the weather like in the story?", marks: 1 },
            { label: "b", prompt: "What does 'hammered' most likely mean here?", marks: 2 },
            { label: "c", prompt: "Why does Tom say 'A project!' when he sees the kite?", marks: 2 },
            { label: "d", prompt: "Predict what Tom might do next and explain your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comprehension strategies", statement: "Literal answers come from the text; 'why' and predictions use clues plus reasoning." },
            ],
            steps: [
              { part: "a", reasoning: "It is raining heavily all morning.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Hammered' is a strong verb; context clues (rain on window, gutters filling) show it means hit hard and fast.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Meaning: the rain was hitting the window very hard.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tom is bored, so the tangled kite gives him something to do.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Untangling the kite is a 'project' — an interesting task to keep him busy.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A sensible prediction, e.g. Tom untangles the kite or plays in the rain.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The prediction links to the story clues (he grabbed his wellies, called it a project).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Heavy rain. (b) Hit hard/fast. (c) The kite gives him something to do when bored. (d) Any prediction linked to clues.",
            commonErrors: ["In (b), defining 'hammered' only as a tool — context shows it describes the rain."],
          },
        },
        {
          id: "pypl-q-u2l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You come to a word you do not know. What is the BEST first thing to try?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Close the book and give up" },
              { id: "b", text: "Read the whole sentence and look at the pictures for clues" },
              { id: "c", text: "Guess any meaning quickly" },
              { id: "d", text: "Skip the word forever" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context clues", statement: "The words around an unknown word and any pictures give clues to its meaning." },
            ],
            steps: [
              { reasoning: "Reading the sentence and checking pictures is the best first strategy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Read the whole sentence and look at the pictures for clues",
            commonErrors: ["Choosing (c) — guessing without clues is often wrong."],
          },
        },
        {
          id: "pypl-q-u2l1c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three reading strategies were named: look at pictures, use context clues and reread. How many strategies are there?",
          response: { type: "numeric", parts: [
            { label: "Reading strategies", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading strategies", statement: "Pictures, context clues and rereading help when reading is tricky." },
            ],
            steps: [
              { reasoning: "Count: pictures, context clues, reread = 3 strategies.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one strategy such as rereading."],
          },
        },
        {
          id: "pypl-q-u2l1c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What are 'context clues'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The words around an unknown word that help you guess its meaning" },
              { id: "b", text: "Pictures at the end of a book" },
              { id: "c", text: "The title of the story" },
              { id: "d", text: "Words that rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Context clue", statement: "Context clues are the words around an unknown word that reveal its meaning." },
            ],
            steps: [
              { reasoning: "Context clues come from the sentence around the word.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The words around an unknown word that help you guess its meaning",
            commonErrors: ["Choosing (b) — pictures can help too, but context clues are the words around the word."],
          },
        },
        {
          id: "pypl-q-u2l1c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two strategies you can use when you meet a word you do not know while reading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading strategies", statement: "Pictures, context clues and rereading help with difficult words." },
            ],
            steps: [
              { reasoning: "One strategy, e.g. read the whole sentence for context clues or look at the pictures.", marks: 1, markCode: "M" },
              { reasoning: "Second strategy, e.g. reread the sentence slowly, or look the word up / ask someone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: read the sentence for clues; look at pictures; reread slowly; look it up or ask.",
            commonErrors: ["Saying 'guess' without clues — a clue-based guess is a strategy, a random guess is not."],
          },
        },
        {
          id: "pypl-q-u2l1c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "While reading, a good reader keeps track of three things: who is in the story, where it happens and what has happened. How many things are tracked?",
          response: { type: "numeric", parts: [
            { label: "Things tracked", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tracking the story", statement: "Keeping track of who, where and what keeps the reader following the story." },
            ],
            steps: [
              { reasoning: "Count: who, where, what happened = 3 things.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one of who, where or what."],
          },
        },
        {
          id: "pypl-q-u2l1c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student reads a story and guesses a random meaning for every difficult word. Explain why this is a poor strategy and what the student should do instead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Smart guessing", statement: "Guesses should use clues from the sentence and pictures, not be random." },
            ],
            steps: [
              { reasoning: "Random guessing is often wrong, which makes the whole story confusing.", marks: 1, markCode: "M" },
              { reasoning: "Instead, read the whole sentence and look at pictures to find clues.", marks: 1, markCode: "M" },
              { reasoning: "If still stuck, reread the sentence slowly or look the word up.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random guessing gives wrong meanings; use context clues, pictures and rereading instead.",
            commonErrors: ["Saying 'never guess' — smart guessing with clues is allowed; random guessing is the problem."],
          },
        },
        {
          id: "pypl-q-u2l1c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does it mean to 'predict' while reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To guess what will happen next using clues" },
              { id: "b", text: "To copy the story word for word" },
              { id: "c", text: "To count the pages" },
              { id: "d", text: "To skip the difficult parts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Predict", statement: "To predict is to guess what will happen next using clues from the text." },
            ],
            steps: [
              { reasoning: "Predicting = guessing what happens next from the clues.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To guess what will happen next using clues",
            commonErrors: ["Choosing (b) — copying is not predicting."],
          },
        },
        {
          id: "pypl-q-u2l1c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why rereading a difficult sentence slowly can help you understand it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rereading", statement: "Reading again slowly lets you notice words and clues you missed the first time." },
            ],
            steps: [
              { reasoning: "The first read may have been too fast to notice the important words.", marks: 1, markCode: "M" },
              { reasoning: "Reading slowly gives time to spot context clues around hard words.", marks: 1, markCode: "M" },
              { reasoning: "It also lets the meaning sink in, so the sentence makes more sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rereading slowly lets you catch clues and words you missed, so the meaning becomes clearer.",
            commonErrors: ["Saying rereading is 'wasting time' — it is a key strategy for hard sentences."],
          },
        },
        {
          id: "pypl-q-u2l1c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The reading strategy steps are: look at pictures, read the sentence, use context clues, reread if stuck. How many steps are there?",
          response: { type: "numeric", parts: [
            { label: "Strategy steps", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading strategy steps", statement: "The strategy has four steps from pictures to rereading." },
            ],
            steps: [
              { reasoning: "Count: pictures, sentence, clues, reread = 4 steps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting one step such as rereading if stuck."],
          },
        },
        {
          id: "pypl-q-u2l1c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you lose track of what is happening in a story, what should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keep reading faster and hope it makes sense" },
              { id: "b", text: "Stop and never read that book again" },
              { id: "c", text: "Go back and reread the paragraph" },
              { id: "d", text: "Skip to the end" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rereading", statement: "If you lose the thread, going back and rereading helps you catch up." },
            ],
            steps: [
              { reasoning: "Rereading the paragraph lets you pick up who, where and what again.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Go back and reread the paragraph",
            commonErrors: ["Choosing (a) — reading faster when confused makes it worse."],
          },
        },
        {
          id: "pypl-q-u2l1c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You read: 'The enormous whale sprayed water high into the air.' You do not know 'enormous'. Using the sentence as a clue, what does 'enormous' most likely mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very small" },
              { id: "b", text: "Very fast" },
              { id: "c", text: "Very big" },
              { id: "d", text: "Very old" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context clues", statement: "A whale spraying water high suggests it is very big — the clue is the scale of the spray." },
            ],
            steps: [
              { reasoning: "Whales are famously huge and the spray goes 'high', so 'enormous' means very big.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Very big",
            commonErrors: ["Choosing (b) — speed is not suggested by the sentence."],
          },
        },
        {
          id: "pypl-q-u2l1c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Big Snow",
            author: "Written for Akademik Space",
            source: "Original short story",
            text: "Snow began to fall just after breakfast. By lunch the garden was gone under a thick white blanket. 'No school tomorrow!' shouted Mia, pressing her nose to the window. Her brother was already pulling on his boots. 'Race you to the garden!' he laughed.",
          },
          stem: "Read the story, then answer the questions about it.",
          parts: [
            { label: "a", prompt: "What is the weather doing in the story?", marks: 1 },
            { label: "b", prompt: "What does 'under a thick white blanket' most likely describe?", marks: 2 },
            { label: "c", prompt: "How can you tell Mia is excited about the snow?", marks: 2 },
            { label: "d", prompt: "Predict what the brother and Mia will do next and explain your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comprehension strategies", statement: "Literal answers come from the text; 'how' and predictions use clues plus reasoning." },
            ],
            steps: [
              { part: "a", reasoning: "Snow is falling and covering the garden.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Blanket' is compared to snow — the garden is covered in deep snow.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Meaning: the garden is buried under thick snow.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Clues: she shouts 'No school tomorrow!' and presses her nose to the window.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "These show she is excited and eager to play in the snow.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A sensible prediction, e.g. they will run outside to play in the snow.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The prediction links to clues: pulling on boots and 'race you to the garden'.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Snow falling. (b) Garden covered in thick snow. (c) Shouting and pressing to window show excitement. (d) Any prediction linked to boots/race clues.",
            commonErrors: ["In (c), saying she is 'cold' — the clues show excitement, not discomfort."],
          },
        },
      ],
    },
    {
      id: "pypl-u2l1-c2-comprehension",
      title: "Understanding what you read",
      skill: "Answer literal questions and make simple inferences from a text.",
      lesson: {
        sections: [
          {
            heading: "Literal and inference questions",
            body: "A **literal question** asks for something the text says directly: 'What colour was the kite?' — find the word in the text. An **inference** question asks you to work out something not said directly: 'Why did Tom feel bored?' — use clues like 'he sighed' and the rain. Answers to 'why' questions are almost always inferences.",
          },
          {
            heading: "Finding the evidence",
            body: "For every answer, find the **evidence** — the words in the text that support it. If your answer cannot be found or guessed from the text, check it again. Writers often **show** feelings instead of naming them: 'Her hands shook' means she was nervous — you must infer the feeling yourself.",
          },
        ],
        keyFormulas: [
          { name: "Question types", statement: "What/who/where = find it in the text; why/how = infer from clues" },
        ],
        workedExample: {
          problem: "Text: 'Mia tiptoed into the kitchen so she would not wake the baby.' What can you infer about Mia?",
          solution: "Mia is being careful and quiet — she does not want to wake the baby. The words 'tiptoed' and 'so she would not wake' are the clues.",
        },
      },
      questions: [
        {
          id: "pypl-q-u2l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A question like 'What did Sam eat for lunch?' is answered by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guessing what Sam probably ate" },
              { id: "b", text: "Finding the answer in the words of the text" },
              { id: "c", text: "Asking Sam's friend" },
              { id: "d", text: "Looking at the pictures only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literal comprehension", statement: "Literal answers are stated directly in the text." },
            ],
            steps: [
              { reasoning: "'What did Sam eat' is a literal question — the answer is in the text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Finding the answer in the words of the text",
            commonErrors: ["Choosing (a) — literal questions do not need guessing."],
          },
        },
        {
          id: "pypl-q-u2l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'The team ran onto the field as the crowd cheered loudly.' How do you know the crowd was excited?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference from clues", statement: "Feelings can be inferred from actions and descriptive words in the text." },
            ],
            steps: [
              { reasoning: "The clue is 'cheered loudly' — people cheer loudly when excited.", marks: 1, markCode: "M" },
              { reasoning: "So we infer the crowd was excited.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Because the crowd 'cheered loudly' — loud cheering shows excitement.",
            commonErrors: ["Saying the text 'tells us' the crowd was excited — it shows it through cheering."],
          },
        },
        {
          id: "pypl-q-u2l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The First Day",
            author: "Written for Akademik Space",
            source: "Original short story",
            text: "Sara pressed her nose against the classroom window. Inside, children laughed and shared crayons. Her hands felt sweaty inside her new uniform. 'I hope someone sits with me,' she whispered to her mum.",
          },
          stem: "Read the extract, then answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference", statement: "Feelings are shown through actions and words; the reader must infer them." },
            ],
            steps: [
              { reasoning: "The question asks how we know Sara is nervous — she is on her first day.", marks: 1, markCode: "M" },
              { reasoning: "Clues: sweaty hands, whispering 'I hope someone sits with me', pressing her nose to the window.", marks: 1, markCode: "M" },
              { reasoning: "These clues together let us infer she is nervous and a little scared.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "We infer nervousness from her sweaty hands, whispering hope, and watching from outside the classroom.",
            commonErrors: ["Quoting one clue only — strong inferences use several clues."],
          },
        },
        {
          id: "pypl-q-u2l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Grandma's Garden",
            author: "Written for Akademik Space",
            source: "Original short story",
            text: "Every Saturday, Ana helps her grandma in the garden. They pull weeds, plant seeds and water the tomatoes. 'Plants are like people,' grandma always says. 'They need water, light and kindness to grow.' Last spring Ana planted a sunflower seed. By August it was taller than the fence.",
          },
          stem: "Read the story, then answer the questions.",
          parts: [
            { label: "a", prompt: "What does Ana do in the garden every Saturday?", marks: 1 },
            { label: "b", prompt: "What does grandma say plants need to grow?", marks: 1 },
            { label: "c", prompt: "Explain what grandma means by 'Plants are like people.'", marks: 2 },
            { label: "d", prompt: "Infer how Ana probably feels about gardening and explain your answer using evidence from the story.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literal and inference answers", statement: "(a)-(b) are literal; (c)-(d) require interpreting clues and explaining with evidence." },
            ],
            steps: [
              { part: "a", reasoning: "She helps her grandma — pulls weeds, plants seeds and waters the tomatoes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water, light and kindness.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both plants and people need care (water/light/kindness) to grow well — a comparison.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is a kind of metaphor linking plant care to caring for living things.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Inference: Ana probably enjoys gardening.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evidence: she helps every Saturday, remembers grandma's saying, and is proud of her sunflower.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Links the feeling to specific story evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Helps grandma garden. (b) Water, light, kindness. (c) Plants and people both need care to thrive. (d) Likely enjoys it — regular help, remembers saying, proud sunflower.",
            commonErrors: ["In (d), giving a feeling with no evidence from the text."],
          },
        },
        {
          id: "pypl-q-u2l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A question like 'What colour was the kite?' is answered by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guessing what colour it probably was" },
              { id: "b", text: "Finding the colour in the words of the text" },
              { id: "c", text: "Asking a friend" },
              { id: "d", text: "Looking at any picture, even a different one" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literal comprehension", statement: "Literal answers are stated directly in the text." },
            ],
            steps: [
              { reasoning: "'What colour' is a literal question — find the word in the text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Finding the colour in the words of the text",
            commonErrors: ["Choosing (a) — literal questions are answered from the text, not guessed."],
          },
        },
        {
          id: "pypl-q-u2l1c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many kinds of comprehension questions were named: literal and inference?",
          response: { type: "numeric", parts: [
            { label: "Question types", answer: 2 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question types", statement: "There are literal questions (found in the text) and inference questions (worked out from clues)." },
            ],
            steps: [
              { reasoning: "Count the types: literal and inference = 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 3 — there are only two main types."],
          },
        },
        {
          id: "pypl-q-u2l1c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A question like 'Why did Tom feel bored?' needs you to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Find the exact words 'Tom felt bored'" },
              { id: "b", text: "Guess randomly" },
              { id: "c", text: "Use clues in the text to work out the reason" },
              { id: "d", text: "Ask the writer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference", statement: "'Why' questions are answered by inferring from clues in the text." },
            ],
            steps: [
              { reasoning: "'Why' answers are inferences — use clues like sighing or the weather.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Use clues in the text to work out the reason",
            commonErrors: ["Choosing (a) — writers often show feelings without naming them."],
          },
        },
        {
          id: "pypl-q-u2l1c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'The baby was crying loudly, so Mum picked him up quickly.' What clue tells you the baby needed comfort?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference from clues", statement: "Actions and descriptions in the text are clues to what characters need or feel." },
            ],
            steps: [
              { reasoning: "Identify the clue: the baby was crying loudly.", marks: 1, markCode: "M" },
              { reasoning: "Crying loudly shows the baby is upset and needs comfort — Mum picks him up.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The clue is 'crying loudly' — crying shows the baby needs comfort.",
            commonErrors: ["Saying 'Mum picked him up' is the clue — that is the result; crying is the clue."],
          },
        },
        {
          id: "pypl-q-u2l1c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Three question words find literal answers: what, who and where. How many question words find literal answers?",
          response: { type: "numeric", parts: [
            { label: "Literal question words", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Question types", statement: "What, who and where questions are answered directly from the text." },
            ],
            steps: [
              { reasoning: "Count: what, who, where = 3 question words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — 'why' and 'how' need inference, not literal answers."],
          },
        },
        {
          id: "pypl-q-u2l1c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between a literal question and an inference question, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Literal vs inference", statement: "Literal answers are found in the text; inference answers are worked out from clues." },
            ],
            steps: [
              { reasoning: "Literal: answered directly from the words, e.g. 'What did Sam eat?' — find it in the text.", marks: 1, markCode: "M" },
              { reasoning: "Inference: worked out from clues, e.g. 'Why did Sam feel tired?' — use evidence like 'he yawned'.", marks: 1, markCode: "M" },
              { reasoning: "Clear contrast: literal = find it; inference = work it out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Literal = find in text (e.g. 'What colour?'); inference = work out from clues (e.g. 'Why was she sad?').",
            commonErrors: ["Giving two literal questions — one example must be an inference."],
          },
        },
        {
          id: "pypl-q-u2l1c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Writers often ___ feelings instead of naming them — for example, 'Her hands shook' means she was nervous.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "hide" },
              { id: "b", text: "show" },
              { id: "c", text: "forget" },
              { id: "d", text: "spell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Showing feelings", statement: "Writers show feelings through actions so readers must infer them." },
            ],
            steps: [
              { reasoning: "'Her hands shook' shows nervousness — writers show rather than name feelings.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** show",
            commonErrors: ["Choosing 'hide' — the text does not hide feelings; it shows them through actions."],
          },
        },
        {
          id: "pypl-q-u2l1c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Read this sentence: 'Tom crept into the kitchen on tiptoe so he would not wake his little sister.' Explain how you know Tom is trying to be quiet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference from clues", statement: "Actions like 'crept' and 'tiptoe' plus the reason 'so he would not wake' are clues." },
            ],
            steps: [
              { reasoning: "Clue 1: 'crept' and 'tiptoe' describe very quiet movement.", marks: 1, markCode: "M" },
              { reasoning: "Clue 2: 'so he would not wake his little sister' gives the reason for being quiet.", marks: 1, markCode: "M" },
              { reasoning: "Together they let us infer Tom is trying hard not to make noise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Crept', 'tiptoe' and 'so he would not wake' show Tom is trying to be quiet.",
            commonErrors: ["Saying the text 'tells us' — it shows the quietness through actions; we infer it."],
          },
        },
        {
          id: "pypl-q-u2l1c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three things help you answer questions: finding literal answers, making inferences and finding evidence. How many things are there?",
          response: { type: "numeric", parts: [
            { label: "Answer skills", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comprehension skills", statement: "Literal answers, inferences and evidence are the core comprehension skills." },
            ],
            steps: [
              { reasoning: "Count: literal, inference, evidence = 3 skills.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one skill such as evidence."],
          },
        },
        {
          id: "pypl-q-u2l1c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'evidence' in reading comprehension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The words in the text that support your answer" },
              { id: "b", text: "A guess you make up" },
              { id: "c", text: "The book's cover" },
              { id: "d", text: "Your own opinion only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evidence", statement: "Evidence is the words or clues in the text that support your answer." },
            ],
            steps: [
              { reasoning: "Evidence comes from the text and backs up your answer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The words in the text that support your answer",
            commonErrors: ["Choosing (d) — opinions need text evidence to be strong answers."],
          },
        },
        {
          id: "pypl-q-u2l1c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Text: 'Nina's eyes lit up when she saw the puppy.' Why does Nina feel happy? Give the clue from the text.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Her eyes lit up when she saw the puppy" },
              { id: "b", text: "She was walking home" },
              { id: "c", text: "It was raining" },
              { id: "d", text: "The puppy was sleeping" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference evidence", statement: "'Eyes lit up' is the clue showing Nina is happy about the puppy." },
            ],
            steps: [
              { reasoning: "The clue 'eyes lit up' shows excitement/happiness at seeing the puppy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Her eyes lit up when she saw the puppy",
            commonErrors: ["Choosing (d) — the text does not say the puppy was sleeping."],
          },
        },
        {
          id: "pypl-q-u2l1c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            source: "Original short story",
            text: "The sky turned dark grey and the wind began to howl. Mum pulled the curtains closed and lit a candle. 'Stay inside,' she said, 'until the storm passes.' Tom pressed his face to the window and watched the lightning flash. He hoped the storm would finish soon so he could play football.",
          },
          stem: "Read the story, then answer the questions.",
          parts: [
            { label: "a", prompt: "What is happening outside in the story?", marks: 1 },
            { label: "b", prompt: "What does 'the wind began to howl' tell us about the storm?", marks: 2 },
            { label: "c", prompt: "How do you know Tom is watching the storm carefully?", marks: 2 },
            { label: "d", prompt: "Infer how Tom feels about the storm and explain with evidence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literal and inference answers", statement: "(a) is literal; (b)-(d) use clues and evidence to infer meaning." },
            ],
            steps: [
              { part: "a", reasoning: "A storm is happening — dark sky, wind, lightning.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Howl' describes a loud, wild wind sound.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It shows the storm is strong and noisy.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evidence: he 'pressed his face to the window' and 'watched the lightning flash'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "These actions show he is watching closely.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Inference: Tom is a little scared but mostly wants to play.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evidence: Mum says stay inside (danger), but he hopes it finishes for football (eagerness).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A storm. (b) Strong, noisy wind. (c) Face pressed to window, watched lightning. (d) Scared of storm but eager to play — cited evidence.",
            commonErrors: ["In (d), giving a feeling with no evidence from the text."],
          },
        },
      ],
    },
  ],
};
