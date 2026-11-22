import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "pypl-u2-lesson-2-3",
  code: "2-3",
  title: "Viewing and Responding to Texts",
  goal: "I CAN view pictures, posters and screens, make predictions, and respond to texts with my own ideas.",
  standards: [
    "PYP Language: Viewing",
    "PYP transdisciplinary theme: How We Express Ourselves",
    "PYP transdisciplinary theme: Who We Are",
  ],
  vocabulary: [
    { term: "Viewing", definition: "Looking at and making sense of pictures, posters, photographs and screens." },
    { term: "Poster", definition: "A large printed picture with words, made to give information or advertise something." },
    { term: "Caption", definition: "The short words under a picture that explain or describe it." },
    { term: "Response", definition: "What you think or feel about a text — your opinion, prediction or question." },
    { term: "Clue", definition: "A detail in a picture or text that helps you work out what is happening." },
    { term: "Recommend", definition: "To tell someone a book or film is good and they should try it." },
  ],
  concepts: [
    {
      id: "pypl-u2l3-c1-viewing-visuals",
      title: "Reading pictures and posters",
      skill: "Use clues in pictures, posters and screens to understand meaning.",
      lesson: {
        sections: [
          {
            heading: "Pictures carry meaning",
            body: "Pictures are texts too. A **poster** uses pictures, colours, words and layout to send a message — 'Wash your hands!' or 'Library closes at 3'. Look at the **biggest** picture first, read the **caption**, then read any **headings**. Colours matter: red often means stop or danger, green can mean go or nature.",
          },
          {
            heading: "Reading screens",
            body: "On a screen we **view** videos, websites and pictures. Pause a video and look closely: **Who** is in it? **What** are they doing? **Where** is it? Screens often show things quickly, so stop and think about each **clue** — a worried face, a dark sky or a map — before deciding what is happening.",
          },
        ],
        keyFormulas: [
          { name: "Viewing checklist", statement: "Biggest picture → caption → headings → colours → clues" },
        ],
        workedExample: {
          problem: "A poster shows a dark rain cloud over a beach with the words 'Storm warning — stay safe'. What is its purpose?",
          solution: "It warns people about dangerous weather and tells them to stay safe. The dark cloud and red warning colours show danger.",
        },
      },
      questions: [
        {
          id: "pypl-q-u2l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The words written under a picture to explain it are called the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heading" },
              { id: "b", text: "Paragraph" },
              { id: "c", text: "Title" },
              { id: "d", text: "Caption" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Caption", statement: "A caption is the short text under a picture that explains it." },
            ],
            steps: [
              { reasoning: "The text under a picture is the caption.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Caption",
            commonErrors: ["Choosing 'title' — a title names the whole text, a caption sits under a picture."],
          },
        },
        {
          id: "pypl-q-u2l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A poster shows a bright yellow sun, green trees and the words 'Plant a tree today'. What is the poster mainly asking people to do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Reading posters", statement: "The words on a poster state its purpose; pictures and colours support the message." },
            ],
            steps: [
              { reasoning: "The caption/words say 'Plant a tree today' — that is the request.", marks: 1, markCode: "M" },
              { reasoning: "The sun and trees show nature, supporting the planting message.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plant a tree today",
            commonErrors: ["Describing the picture instead of reading the words that state the purpose."],
          },
        },
        {
          id: "pypl-q-u2l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A video shows children playing football, then cuts to dark storm clouds and flashing lightning. Explain how the viewer can use visual clues to understand what is happening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Viewing clues", statement: "Viewers combine what they see — faces, weather, actions — to work out meaning." },
            ],
            steps: [
              { reasoning: "First clue: children playing happily in sunshine — a calm, fun scene.", marks: 1, markCode: "M" },
              { reasoning: "Second clue: dark clouds and lightning signal a storm is coming.", marks: 1, markCode: "M" },
              { reasoning: "Together the clues tell a story: fun weather is turning dangerous, so the children may need to go inside.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clues: happy players + sunny scene, then storm clouds/lightning — meaning weather is turning dangerous.",
            commonErrors: ["Describing only one scene without linking the clues into a meaning."],
          },
        },
        {
          id: "pypl-q-u2l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class sees this poster: a picture of a smiling child watering a flower, green background, big words 'Save water — every drop counts', small words 'Turn off taps!'.",
          parts: [
            { label: "a", prompt: "What is the poster's main message?", marks: 1 },
            { label: "b", prompt: "Name two visual clues (picture or colour) that support the message.", marks: 2 },
            { label: "c", prompt: "Who is the poster probably trying to reach?", marks: 1 },
            { label: "d", prompt: "Suggest one action the poster wants viewers to take and explain how the small words help.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poster analysis", statement: "Message = words + pictures + colours + layout; small text gives the action." },
            ],
            steps: [
              { part: "a", reasoning: "Save water — every drop counts.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Smiling child watering a flower shows water helping living things.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Green background suggests nature/earth; the single drop idea is reinforced by one flower.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Children or families at home / the whole school community.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Action: turn off taps (or use less water).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The small words give a specific, doable step.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Big words give the message; small words tell exactly what to do.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Save water. (b) Flower-watering picture, green nature colours. (c) Children/families. (d) Turn off taps — small words give the action.",
            commonErrors: ["In (b), naming colours only without linking them to meaning."],
          },
        },
        {
          id: "pypl-q-u2l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a poster, the words written under a picture to explain it are called the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Title" },
              { id: "b", text: "Caption" },
              { id: "c", text: "Speech" },
              { id: "d", text: "Paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Caption", statement: "A caption is the short text under a picture that explains it." },
            ],
            steps: [
              { reasoning: "The words under a picture are the caption.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Caption",
            commonErrors: ["Choosing 'title' — a title names the whole text, a caption sits under a picture."],
          },
        },
        {
          id: "pypl-q-u2l3c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The viewing checklist has five things to look at: biggest picture, caption, headings, colours and clues. How many things are on the checklist?",
          response: { type: "numeric", parts: [
            { label: "Checklist items", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Viewing checklist", statement: "Viewers check the biggest picture, caption, headings, colours and clues." },
            ],
            steps: [
              { reasoning: "Count: picture, caption, headings, colours, clues = 5 items.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering 4 — forgetting one item such as colours."],
          },
        },
        {
          id: "pypl-q-u2l3c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "On many posters, the colour red often means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop or danger" },
              { id: "b", text: "Nature and growth" },
              { id: "c", text: "Calm and sleep" },
              { id: "d", text: "Nothing important" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Colours on posters", statement: "Red often means stop or danger; green can mean go or nature." },
            ],
            steps: [
              { reasoning: "Red is used for warnings and danger signs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stop or danger",
            commonErrors: ["Choosing (a) — green suggests nature/go, not red."],
          },
        },
        {
          id: "pypl-q-u2l3c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things you should look at when viewing a poster.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Viewing posters", statement: "Look at the biggest picture, caption, headings, colours and clues." },
            ],
            steps: [
              { reasoning: "One thing, e.g. the biggest picture or the caption.", marks: 1, markCode: "M" },
              { reasoning: "Second thing, e.g. headings, colours or clues in the picture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: biggest picture; caption; headings; colours; clues.",
            commonErrors: ["Saying 'just the words' — posters use pictures and colours too."],
          },
        },
        {
          id: "pypl-q-u2l3c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A poster has 1 caption and 2 headings. How many text parts does the poster have altogether?",
          response: { type: "numeric", parts: [
            { label: "Text parts", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "context", name: "Counting poster parts", statement: "Total text parts = captions plus headings (plus any big words)." },
            ],
            steps: [
              { reasoning: "1 caption + 2 headings = 3 text parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting to add the caption and both headings."],
          },
        },
        {
          id: "pypl-q-u2l3c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how colours on a poster can help you understand its message.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Colours and meaning", statement: "Colours carry meaning — red warns, green suggests nature or go." },
            ],
            steps: [
              { reasoning: "Colours send feelings — red can warn of danger, making you take the message seriously.", marks: 1, markCode: "M" },
              { reasoning: "Green can suggest nature or going ahead, matching a friendly message.", marks: 1, markCode: "M" },
              { reasoning: "So colours support the words and pictures to make the message clearer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Colours add meaning — red warns, green suggests nature/go — supporting the poster's message.",
            commonErrors: ["Saying colours are 'just pretty' — they carry meaning."],
          },
        },
        {
          id: "pypl-q-u2l3c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A video shows things happening very quickly. What should a viewer do to understand it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Close your eyes" },
              { id: "b", text: "Pause it and look for clues like faces, weather and actions" },
              { id: "c", text: "Watch it once quickly and guess" },
              { id: "d", text: "Turn the sound off forever" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Viewing screens", statement: "Pause videos and study clues — who, what, where — to understand meaning." },
            ],
            steps: [
              { reasoning: "Pausing lets you catch the clues that fast-moving video hides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pause it and look for clues like faces, weather and actions",
            commonErrors: ["Choosing (a) — fast watching misses the clues."],
          },
        },
        {
          id: "pypl-q-u2l3c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "When viewing a video or picture, what three questions can you ask to understand what is happening?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Viewing questions", statement: "Ask who is in it, what they are doing and where it happens." },
            ],
            steps: [
              { reasoning: "Who: ask who is in the picture or video.", marks: 1, markCode: "M" },
              { reasoning: "What: ask what the people or things are doing.", marks: 1, markCode: "M" },
              { reasoning: "Where: ask where the scene is happening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Who is in it? What are they doing? Where is it?",
            commonErrors: ["Asking 'is it nice?' — viewing questions should find out what is happening."],
          },
        },
        {
          id: "pypl-q-u2l3c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three questions help you view a picture: who, what and where. How many viewing questions are there?",
          response: { type: "numeric", parts: [
            { label: "Viewing questions", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Viewing questions", statement: "Who, what and where are the key questions for viewing." },
            ],
            steps: [
              { reasoning: "Count: who, what, where = 3 questions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — there are three viewing questions."],
          },
        },
        {
          id: "pypl-q-u2l3c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main purpose of a poster?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To be a poem" },
              { id: "b", text: "To tell a long story" },
              { id: "c", text: "To give information or advertise something" },
              { id: "d", text: "To list instructions only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poster", statement: "A poster uses pictures, colours, words and layout to give information or advertise." },
            ],
            steps: [
              { reasoning: "Posters inform or advertise — that is their purpose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** To give information or advertise something",
            commonErrors: ["Choosing (a) — posters are not long stories."],
          },
        },
        {
          id: "pypl-q-u2l3c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A poster shows a big picture of a dog with a bone and the words 'Walk your dog daily'. What is the poster mainly asking people to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buy a dog" },
              { id: "b", text: "Feed the dog bones only" },
              { id: "c", text: "Draw a picture of a dog" },
              { id: "d", text: "Walk their dog every day" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading posters", statement: "The words on the poster state its request; pictures support it." },
            ],
            steps: [
              { reasoning: "'Walk your dog daily' is the request — walk the dog every day.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Walk their dog every day",
            commonErrors: ["Choosing (a) — the poster is about walking, not buying."],
          },
        },
        {
          id: "pypl-q-u2l3c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class sees this poster: a picture of children putting rubbish in a bin, bright green background, big words 'Keep our park clean', small words 'Bin it, don't drop it!'.",
          parts: [
            { label: "a", prompt: "What is the poster's main message?", marks: 1 },
            { label: "b", prompt: "Name two visual clues that support the message.", marks: 2 },
            { label: "c", prompt: "Who is the poster probably trying to reach?", marks: 1 },
            { label: "d", prompt: "Suggest one action the poster wants viewers to take and explain how the small words help.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poster analysis", statement: "Message = words + pictures + colours; small text gives the action." },
            ],
            steps: [
              { part: "a", reasoning: "Keep our park clean.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Children putting rubbish in a bin shows the right behaviour.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Green background suggests nature/park.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Children or park visitors / the school community.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Action: put rubbish in the bin (don't drop litter).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The small words give a simple, doable instruction.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Big words give the message; small words tell exactly what to do.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Keep park clean. (b) Bin picture, green nature colour. (c) Children/park users. (d) Bin your rubbish — small words give the action.",
            commonErrors: ["In (b), naming colours without linking to meaning."],
          },
        },
      ],
    },
    {
      id: "pypl-u2l3-c2-responding-to-texts",
      title: "Responding to texts",
      skill: "Predict what happens next, share opinions and recommend texts.",
      lesson: {
        sections: [
          {
            heading: "Predicting and questioning",
            body: "A good reader always has an opinion about a text. **Predict** what will happen next using clues — 'The sky is going dark, so I think rain is coming.' **Question** the text: 'Why did the character do that?' Asking questions shows you are thinking, not just reading words.",
          },
          {
            heading: "Sharing your response",
            body: "After reading, share what you **liked**, what **surprised** you and what you **wonder**. You can **recommend** a book to a friend: 'I really liked this story because the ending surprised me — you should read it!' A response is your own — there is no single right answer, but it should be honest and linked to the text.",
          },
        ],
        keyFormulas: [
          { name: "Response starters", statement: "I predict... / I liked... because... / I wonder why... / I recommend this because..." },
        ],
        workedExample: {
          problem: "A story ends: 'The door creaked open. Something small and furry peeked inside.' Predict what happens next.",
          solution: "A sensible prediction: a small animal (mouse or kitten) comes into the room. It uses the clues 'small and furry' and 'peaked inside'.",
        },
      },
      questions: [
        {
          id: "pypl-q-u2l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Guessing what will happen next in a story, using clues, is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising" },
              { id: "b", text: "Rhyming" },
              { id: "c", text: "Predicting" },
              { id: "d", text: "Counting" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Predict", statement: "To predict is to guess what will happen next using clues." },
            ],
            steps: [
              { reasoning: "Guessing what happens next = predicting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Predicting",
            commonErrors: ["Choosing 'summarising' — that is retelling what already happened."],
          },
        },
        {
          id: "pypl-q-u2l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Lost Scarf",
            author: "Written for Akademik Space",
            source: "Original story opening",
            text: "Grandpa knitted a red scarf for Jo every winter. This year the scarf was extra long — so long it dragged on the ground. 'Perfect for a game of tag,' laughed Jo.",
          },
          stem: "Predict what might happen next in the story, using a clue from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prediction", statement: "Predictions use clues in the text and are reasonable guesses." },
            ],
            steps: [
              { reasoning: "The clue is the scarf is 'extra long' and 'perfect for a game of tag'.", marks: 1, markCode: "M" },
              { reasoning: "A good prediction: Jo and friends play tag with the long scarf.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any prediction linked to the long scarf/tag clue, e.g. Jo plays tag with it.",
            commonErrors: ["A prediction with no link to the text, e.g. 'The scarf turns into a dragon.'"],
          },
        },
        {
          id: "pypl-q-u2l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Library Book",
            author: "Written for Akademik Space",
            source: "Original story opening",
            text: "Max borrowed a book about sharks from the library. He read it under the covers with a torch. 'Sharks have been around for 400 million years,' he read, 'longer than trees!' Max looked out at the dark garden. He wondered if a shark could swim in the pond.",
          },
          stem: "Max wonders if a shark could swim in the pond. Explain whether this is a good question to ask, and what Max could do next.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Questioning a text", statement: "Good readers ask questions about texts and use books or research to find answers." },
            ],
            steps: [
              { reasoning: "Yes — wondering shows curiosity and thinking beyond the text.", marks: 1, markCode: "M" },
              { reasoning: "Max could read another book or ask a grown-up what sharks need to survive.", marks: 1, markCode: "M" },
              { reasoning: "He would learn that sharks need salt water, so the pond idea is impossible — curiosity leads to learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It is a good wondering question; Max could research what sharks need (salt water) to answer it.",
            commonErrors: ["Saying the question is 'silly' — wondering questions drive inquiry."],
          },
        },
        {
          id: "pypl-q-u2l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Big Race",
            author: "Written for Akademik Space",
            source: "Original story",
            text: "It was sports day. Kofi had practised his sprint every day for a month, but Eli had never run a race before. At the start both runners crouched low. Kofi shot ahead — but halfway round the bend, his shoelace came undone. Eli kept his eyes on the finish line and kept running smoothly. When Kofi bent to tie his shoe, Eli sailed past. Eli won by a second.",
          },
          stem: "Read the story, then answer.",
          parts: [
            { label: "a", prompt: "Who won the race and by how much?", marks: 1 },
            { label: "b", prompt: "Give two reasons why Eli might have won.", marks: 2 },
            { label: "c", prompt: "Write one sentence recommending this story to a friend, giving a reason.", marks: 2 },
            { label: "d", prompt: "Predict what Kofi might do next time and explain your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Responding to stories", statement: "Good responses use evidence from the text and connect to personal experience." },
            ],
            steps: [
              { part: "a", reasoning: "Eli won by a second.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Eli kept his eyes on the finish line — he stayed focused.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Eli had no shoe problem — Kofi's lace came undone and slowed him.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A recommendation with a reason, e.g. 'You should read this — the ending surprised me when Eli won.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The reason is linked to the story.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A sensible prediction, e.g. Kofi will practise tying his shoes or stay focused.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The prediction links to what went wrong (shoelace) or what Eli did well (focus).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Eli, by a second. (b) Focus + no distraction. (c) Any recommendation with story-linked reason. (d) Prediction linked to shoelace/focus clues.",
            commonErrors: ["In (b), saying 'Eli was faster' — the text never says that; focus and luck mattered."],
          },
        },
        {
          id: "pypl-q-u2l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sharing what you liked, wondered or predicted about a text is called your...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Title" },
              { id: "b", text: "Spelling" },
              { id: "c", text: "Response" },
              { id: "d", text: "Summary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Response", statement: "A response is what you think or feel about a text — your opinion, prediction or question." },
            ],
            steps: [
              { reasoning: "Your thoughts and feelings about a text are your response.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Response",
            commonErrors: ["Choosing 'summary' — a summary retells the text; a response shares your own thoughts."],
          },
        },
        {
          id: "pypl-q-u2l3c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Four response starters were listed: predict, liked, wonder and recommend. How many starters are there?",
          response: { type: "numeric", parts: [
            { label: "Response starters", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Response starters", statement: "'I predict...', 'I liked...', 'I wonder...' and 'I recommend...' are response starters." },
            ],
            steps: [
              { reasoning: "Count: predict, liked, wonder, recommend = 4 starters.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting one starter such as 'I wonder'."],
          },
        },
        {
          id: "pypl-q-u2l3c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good prediction about what happens next should be based on...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The book's cover only" },
              { id: "b", text: "A random guess with no reason" },
              { id: "c", text: "Clues in the text" },
              { id: "d", text: "What a friend said, not the text" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prediction", statement: "Predictions use clues from the text to make a reasonable guess." },
            ],
            steps: [
              { reasoning: "Clues in the text make a prediction sensible and connected.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Clues in the text",
            commonErrors: ["Choosing (a) — a guess without clues is not a good prediction."],
          },
        },
        {
          id: "pypl-q-u2l3c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one prediction starter and one recommendation starter you could use when responding to a book.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Response starters", statement: "'I predict...' guesses what happens next; 'I recommend...' tells others to try the text." },
            ],
            steps: [
              { reasoning: "A prediction starter, e.g. 'I predict that...' or 'I think next...'.", marks: 1, markCode: "M" },
              { reasoning: "A recommendation starter, e.g. 'I recommend this book because...' or 'You should read this because...'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any sensible pair, e.g. 'I predict that...' and 'I recommend this because...'.",
            commonErrors: ["Writing a summary instead of a personal response starter."],
          },
        },
        {
          id: "pypl-q-u2l3c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story ends: 'The door creaked open. Something small and furry peeked inside.' How many clues suggest what is coming?",
          response: { type: "numeric", parts: [
            { label: "Clues", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prediction clues", statement: "Clues like 'creaked', 'small' and 'furry' hint at what comes next." },
            ],
            steps: [
              { reasoning: "Count the clues: door creaked open, something small, furry, peeked = key clues point to a small animal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — the three strong clues are the creak, small and furry/peeked details."],
          },
        },
        {
          id: "pypl-q-u2l3c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why there is no single 'right answer' when you respond to a story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Personal response", statement: "A response is your own honest reaction to a text, linked to the story." },
            ],
            steps: [
              { reasoning: "Different readers notice different clues and feel different things.", marks: 1, markCode: "M" },
              { reasoning: "So many different predictions, likes and questions can all be good.", marks: 1, markCode: "M" },
              { reasoning: "But a good response must still be honest and linked to the text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Responses are personal — many answers can be good if they are honest and linked to the text.",
            commonErrors: ["Saying any answer is fine — it must connect to the text."],
          },
        },
        {
          id: "pypl-q-u2l3c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does it mean to 'recommend' a book to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To copy the book" },
              { id: "b", text: "To hide the book from them" },
              { id: "c", text: "To read it backwards" },
              { id: "d", text: "To tell them the book is good and they should try it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recommend", statement: "To recommend is to tell someone a book or film is good and they should try it." },
            ],
            steps: [
              { reasoning: "Recommending means suggesting others try the text because you liked it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** To tell them the book is good and they should try it",
            commonErrors: ["Choosing (c) — copying is not recommending."],
          },
        },
        {
          id: "pypl-q-u2l3c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how to link a prediction about a story to the clues in the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prediction and clues", statement: "Good predictions quote or use the clues that led to the guess." },
            ],
            steps: [
              { reasoning: "Find the clue in the text, e.g. 'the sky is going dark'.", marks: 1, markCode: "M" },
              { reasoning: "Use it to guess what happens next, e.g. 'I predict rain is coming'.", marks: 1, markCode: "M" },
              { reasoning: "Explaining the link shows your prediction is reasonable, not random.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point to the clue, then predict from it — e.g. dark sky → rain coming.",
            commonErrors: ["Giving a prediction with no clue — it looks like a random guess."],
          },
        },
        {
          id: "pypl-q-u2l3c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After reading, you can share three things: what you liked, what surprised you and what you wonder. How many things can you share?",
          response: { type: "numeric", parts: [
            { label: "Things to share", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing a response", statement: "Share what you liked, what surprised you and what you wonder." },
            ],
            steps: [
              { reasoning: "Count: liked, surprised, wonder = 3 things.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one thing such as 'what surprised you'."],
          },
        },
        {
          id: "pypl-q-u2l3c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the BEST response to a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'It was okay, I guess.'" },
              { id: "b", text: "'Everyone says it is boring.'" },
              { id: "c", text: "'I liked it because the ending surprised me.'" },
              { id: "d", text: "'I did not read it.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Honest response", statement: "A good response is honest and linked to the text — a reason makes it stronger." },
            ],
            steps: [
              { reasoning: "(b) gives an honest opinion with a reason from the story.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'I liked it because the ending surprised me.'",
            commonErrors: ["Choosing (d) — repeating others' opinions is not your own response."],
          },
        },
        {
          id: "pypl-q-u2l3c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A story ends: 'The lost dog barked softly at the gate.' Which prediction best uses the clues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Its owner will open the gate and take it home.'" },
              { id: "b", text: "'Nothing will happen.'" },
              { id: "c", text: "'The dog will become a cat.'" },
              { id: "d", text: "'The dog will fly to the moon.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prediction", statement: "Predictions use clues — a lost dog barking at a gate suggests its owner is near." },
            ],
            steps: [
              { reasoning: "A lost dog at a gate most likely wants its owner — (b) uses the clues well.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 'Its owner will open the gate and take it home.'",
            commonErrors: ["Choosing (a) — it ignores the clues completely."],
          },
        },
        {
          id: "pypl-q-u2l3c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Baking Day",
            author: "Written for Akademik Space",
            source: "Original story",
            text: "Sofia wanted to bake a cake for her mum's birthday. She followed the recipe carefully, but forgot the sugar. The cake came out flat and salty. Sofia's little brother laughed — then helped her make a second cake, this time with all the ingredients. When mum arrived, she smiled and said it was the best birthday ever.",
          },
          stem: "Read the story, then answer.",
          parts: [
            { label: "a", prompt: "What problem did Sofia face in the middle of the story?", marks: 1 },
            { label: "b", prompt: "Give two reasons why the first cake did not turn out well.", marks: 2 },
            { label: "c", prompt: "Write one sentence recommending this story to a friend, giving a reason.", marks: 2 },
            { label: "d", prompt: "Predict what Sofia might do differently next time and explain your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Responding to stories", statement: "Good responses use evidence from the text and connect to the story's events." },
            ],
            steps: [
              { part: "a", reasoning: "She forgot the sugar, so the cake came out flat and salty.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "She forgot the sugar — a key ingredient was missing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Without sugar the cake was flat and tasted salty/wrong.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A recommendation with a reason, e.g. 'You should read this — the second cake was a happy surprise.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The reason is linked to the story.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A sensible prediction, e.g. she will check the recipe list twice or ask for help.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The prediction links to what went wrong (forgetting sugar).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Forgot sugar; flat salty cake. (b) Missing sugar; wrong taste/texture. (c) Any recommendation with story-linked reason. (d) Prediction linked to checking ingredients.",
            commonErrors: ["In (b), saying she 'cannot bake' — the problem was forgetting an ingredient."],
          },
        },
      ],
    },
  ],
};
