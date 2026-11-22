import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "langab-u2-lesson-2-1",
  code: "2-1",
  title: "Signs, labels and public notices",
  goal: "I CAN understand simple signs, labels and public notices and follow their instructions.",
  standards: ["Reading", "Listening", "Vocabulary"],
  vocabulary: [
    { term: "Sign", definition: "A board or notice giving information or instructions in a public place." },
    { term: "Label", definition: "A small sign on a product or object that gives its name or information." },
    { term: "Notice", definition: "A short public message about an event or rule." },
    { term: "Open / closed", definition: "Words showing whether a place is available or not." },
    { term: "Entrance", definition: "The way into a building or place." },
    { term: "Exit", definition: "The way out of a building or place." },
  ],
  concepts: [
    {
      id: "langab-u2-signs-labels",
      title: "Reading signs and labels",
      skill: "Recognise common signs and labels and understand what they tell you to do.",
      lesson: {
        sections: [
          {
            heading: "Common signs",
            body: "Signs use short words and pictures. **Stop**, **Enter**, **Exit**, **Open**, **Closed**, **No smoking**, **No entry**. A red circle with a line usually means something is not allowed. Pictures help you understand even when words are new.",
          },
          {
            heading: "Labels on products",
            body: "Labels on food, drink and objects give the name, price and sometimes ingredients or size. Look for key words: **water**, **milk**, **juice**, **fresh**, **price**. Labels are short, so you can find the information quickly.",
          },
          {
            heading: "Following instructions",
            body: "Signs often give commands: **Keep left**, **Push**, **Pull**, **Do not touch**. Commands usually start with the verb. Always read signs before you act — they keep people safe and help things run smoothly.",
          },
        ],
        keyFormulas: [
          { name: "Sign vocabulary", statement: "Stop, Enter, Exit, Open, Closed, No entry, No smoking." },
          { name: "Commands", statement: "Verb + object (Keep left / Do not touch)." },
        ],
        workedExample: {
          problem: "A door has a sign: EXIT. What does it tell you?",
          solution: "Exit means the way out of the building. Use this door to leave.",
        },
      },
      questions: [
        {
          id: "langab-u2-l21q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a sign saying EXIT mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A place to buy tickets" },
              { id: "b", text: "The way out of the building" },
              { id: "c", text: "A warning about fire" },
              { id: "d", text: "The way into the building" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exit", statement: "Exit marks the way out of a building or place." },
            ],
            steps: [
              { reasoning: "Exit means the way out.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The way out of the building",
            commonErrors: ["Confusing entrance and exit."],
          },
        },
        {
          id: "langab-u2-l21q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Look at these signs and write what each one means in one sentence: 1) No smoking 2) Open 3) Keep left.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpreting signs", statement: "Translate the sign's command or state into a full sentence." },
            ],
            steps: [
              { reasoning: "No smoking = smoking is not allowed here.", marks: 1, markCode: "M" },
              { reasoning: "Open = the place is open for business now.", marks: 1, markCode: "M" },
              { reasoning: "Keep left = walk or drive on the left side.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Smoking is not allowed. / The place is open. / Stay on the left.",
            commonErrors: ["Translating word by word instead of meaning."],
          },
        },
        {
          id: "langab-u2-l21q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the notice and answer the questions.",
          extract: {
            title: "Library notice",
            author: "Written for Akademik Space",
            text: "LIBRARY CLOSED\nMonday 3 May\nReopens Tuesday 4 May\nPlease return your books before Friday.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading notices", statement: "A notice gives key facts: what, when, and any action needed." },
            ],
            steps: [
              { reasoning: "The library is closed on Monday 3 May.", marks: 1, markCode: "M" },
              { reasoning: "It reopens Tuesday 4 May.", marks: 1, markCode: "M" },
              { reasoning: "Students must return books before Friday.", marks: 1, markCode: "A" },
              { reasoning: "All facts are taken correctly from the notice.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Closed Monday 3 May; reopens Tuesday 4 May; return books before Friday.",
            commonErrors: ["Missing the action the notice asks for."],
          },
        },
        {
          id: "langab-u2-l21q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Create a sign for your school or classroom.",
          parts: [
            { label: "a", prompt: "Choose a place and one rule or instruction (e.g. No running).", marks: 2 },
            { label: "b", prompt: "Write the sign in two to four words.", marks: 1 },
            { label: "c", prompt: "Write one sentence explaining what your sign means.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign design", statement: "Good signs are short, clear and use common command words." },
            ],
            steps: [
              { part: "a", reasoning: "A sensible place and rule chosen.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The sign uses correct, short command form.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explanation matches the sign meaning.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Place + rule. (b) Short sign. (c) Explanation sentence.",
            commonErrors: ["Writing a long sentence on the sign instead of a short command."],
          },
        },
        {
          id: "langab-u2-l21q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sign says 'No entry'. What does it tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You can go into this place" },
              { id: "b", text: "The entrance is free today" },
              { id: "c", text: "You must buy a ticket first" },
              { id: "d", text: "You cannot go into this place" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "No entry", statement: "No entry means you are not allowed to go in." },
            ],
            steps: [
              { reasoning: "'No entry' is a prohibition sign meaning entry is not allowed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** You cannot go into this place",
            commonErrors: ["Thinking 'no' signs give permission."],
          },
        },
        {
          id: "langab-u2-l21q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A command on a sign usually starts with...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a noun like 'door'" },
              { id: "b", text: "the word 'please' always" },
              { id: "c", text: "a number like 'two'" },
              { id: "d", text: "a verb like 'push' or 'wait'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commands", statement: "Commands on signs start with a verb: Push, Pull, Keep left, Do not touch." },
            ],
            steps: [
              { reasoning: "Commands are built from verbs that tell you what to do.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A verb like 'push' or 'wait'",
            commonErrors: ["Confusing commands with descriptions."],
          },
        },
        {
          id: "langab-u2-l21q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A red circle with a line through it on a sign usually means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "something is not allowed" },
              { id: "b", text: "something is free" },
              { id: "c", text: "something is very expensive" },
              { id: "d", text: "there is danger ahead" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Prohibition signs", statement: "A red circle with a line usually means the action is not allowed." },
            ],
            steps: [
              { reasoning: "The crossed-out circle is the international sign for 'not allowed'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Something is not allowed",
            commonErrors: ["Thinking it means 'warning' or 'danger'."],
          },
        },
        {
          id: "langab-u2-l21q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A food label says 'FRESH MILK'. The word 'fresh' tells you the milk is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "frozen solid" },
              { id: "b", text: "very expensive" },
              { id: "c", text: "old and near its date" },
              { id: "d", text: "new and recently made" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fresh", statement: "Fresh describes food that is new and recently made or picked." },
            ],
            steps: [
              { reasoning: "Fresh means recently produced, so the milk is new.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** New and recently made",
            commonErrors: ["Confusing fresh with frozen or long-life."],
          },
        },
        {
          id: "langab-u2-l21q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shop door says 'CLOSED'. This means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the shop will open soon" },
              { id: "b", text: "the shop has moved" },
              { id: "c", text: "the shop is not open now" },
              { id: "d", text: "the shop is for sale" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Open / closed", statement: "Closed means a place is not available for business at the moment." },
            ],
            steps: [
              { reasoning: "Closed is the opposite of open: the shop is shut now.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The shop is not open now",
            commonErrors: ["Thinking closed means it will never open again."],
          },
        },
        {
          id: "langab-u2-l21q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word on a sign tells you the way out of a building?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Open" },
              { id: "b", text: "Push" },
              { id: "c", text: "Entrance" },
              { id: "d", text: "Exit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exit", statement: "Exit marks the way out of a building or place." },
            ],
            steps: [
              { reasoning: "Exit is the word for the way out; entrance is the way in.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Exit",
            commonErrors: ["Confusing entrance and exit."],
          },
        },
        {
          id: "langab-u2-l21q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is 'Do not touch' called a command?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it gives a price" },
              { id: "b", text: "Because it tells you not to do something" },
              { id: "c", text: "Because it asks a question" },
              { id: "d", text: "Because it describes a place" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Negative commands", statement: "'Do not + verb' tells the reader not to do the action." },
            ],
            steps: [
              { reasoning: "'Do not touch' orders you to avoid touching — it is an instruction, not a question or description.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because it tells you not to do something",
            commonErrors: ["Thinking all commands must be positive."],
          },
        },
        {
          id: "langab-u2-l21q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bottle label says '750 ml'. This tells you...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the price of the drink" },
              { id: "b", text: "the weight in kilograms" },
              { id: "c", text: "the country where it was made" },
              { id: "d", text: "the amount of liquid in the bottle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volume on labels", statement: "ml and litre measure the amount of liquid in a container." },
            ],
            steps: [
              { reasoning: "750 ml is a volume measurement — how much liquid the bottle holds.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The amount of liquid in the bottle",
            commonErrors: ["Confusing ml with price or weight."],
          },
        },
        {
          id: "langab-u2-l21q17",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write what each sign means in one full sentence: 1) Enter 2) Quiet please 3) No photos.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpreting signs", statement: "Translate the sign into a complete sentence that gives its meaning." },
            ],
            steps: [
              { reasoning: "Enter = you may go in / this is the way in.", marks: 1, markCode: "M" },
              { reasoning: "Quiet please = do not make noise here.", marks: 1, markCode: "M" },
              { reasoning: "No photos = taking photographs is not allowed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "You may go in. / Please do not make noise. / You cannot take photographs.",
            commonErrors: ["Translating word by word instead of giving the meaning."],
          },
        },
        {
          id: "langab-u2-l21q18",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Read the sign and answer the questions.",
          extract: {
            title: "Swimming pool rules",
            author: "Written for Akademik Space",
            text: "POOL RULES\nOpen: 6:00 - 21:00\nClosed: Mondays\nNo running. No food or drinks.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading signs", statement: "Find the times and rules stated on the sign." },
            ],
            steps: [
              { reasoning: "The pool is open from 6:00 to 21:00.", marks: 1, markCode: "M" },
              { reasoning: "It is closed on Mondays.", marks: 1, markCode: "M" },
              { reasoning: "Rules: no running and no food or drinks.", marks: 1, markCode: "A" },
              { reasoning: "All answers taken correctly from the sign.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Open 6:00-21:00; closed Mondays; no running; no food or drinks.",
            commonErrors: ["Missing one of the two rules."],
          },
        },
        {
          id: "langab-u2-l21q19",
          difficulty: "core",
          totalMarks: 5,
          stem: "Design a safety sign for a school corridor.",
          parts: [
            { label: "a", prompt: "Choose one rule or instruction for the corridor.", marks: 2 },
            { label: "b", prompt: "Write the sign in two to five words.", marks: 1 },
            { label: "c", prompt: "Write one sentence explaining what your sign means.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign design", statement: "Good signs are short, clear and use common command or prohibition words." },
            ],
            steps: [
              { part: "a", reasoning: "A sensible corridor rule chosen, e.g. 'No running'.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The sign is short and uses correct command form.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The explanation matches the sign's meaning in a full sentence.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Rule chosen. (b) Short sign. (c) Explanation sentence.",
            commonErrors: ["Writing a long sentence instead of a short sign."],
          },
        },
        {
          id: "langab-u2-l21q20",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the notice and answer the questions.",
          extract: {
            title: "Science lab notice",
            author: "Written for Akademik Space",
            text: "SCIENCE LAB\nClosed on Friday for cleaning\nReopens Monday\nStudents must wear safety glasses.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading notices", statement: "A notice gives the main news, dates and any action needed." },
            ],
            steps: [
              { reasoning: "The lab is closed for cleaning on Friday.", marks: 1, markCode: "M" },
              { reasoning: "It reopens on Monday.", marks: 1, markCode: "M" },
              { reasoning: "Students must wear safety glasses.", marks: 1, markCode: "A" },
              { reasoning: "All facts correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Closed Friday for cleaning; reopens Monday; wear safety glasses.",
            commonErrors: ["Missing the requirement to wear safety glasses."],
          },
        },
        {
          id: "langab-u2-l21q21",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the full meaning of each command as a sentence: 1) Do not park here 2) Keep right 3) Wait here.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Commands", statement: "Commands use the verb first; negative commands use 'do not'." },
            ],
            steps: [
              { reasoning: "Do not park here = parking here is not allowed.", marks: 1, markCode: "M" },
              { reasoning: "Keep right = stay on the right side.", marks: 1, markCode: "M" },
              { reasoning: "Wait here = stay in this place until someone comes.", marks: 1, markCode: "A" },
              { reasoning: "All three are written as complete sentences.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "You cannot park here. / Stay on the right. / Stay here and wait.",
            commonErrors: ["Forgetting the negative meaning of 'do not'."],
          },
        },
        {
          id: "langab-u2-l21q22",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design two signs for a museum.",
          parts: [
            { label: "a", prompt: "Choose two rules or instructions for visitors.", marks: 2 },
            { label: "b", prompt: "Write the two signs in two to five words each.", marks: 2 },
            { label: "c", prompt: "Write one sentence explaining what each sign means.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign design", statement: "Signs are short, use common words and give clear instructions." },
            ],
            steps: [
              { part: "a", reasoning: "Two sensible museum rules chosen, e.g. 'No food' and 'Do not touch'.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Both signs are short with correct command or prohibition form.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Each explanation matches its sign in a full sentence.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Two rules. (b) Two short signs. (c) Two explanation sentences.",
            commonErrors: ["Signs that are too long or unclear."],
          },
        },
        {
          id: "langab-u2-l21q23",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read the sign and answer the questions.",
          extract: {
            title: "Staff car park",
            author: "Written for Akademik Space",
            text: "CAR PARK\nStaff only\nMaximum stay: 2 hours\nNo parking on the grass",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading signs", statement: "Extract who, how long and where from a parking sign." },
            ],
            steps: [
              { reasoning: "Only staff can park here — visitors cannot.", marks: 1, markCode: "M" },
              { reasoning: "The maximum stay is two hours.", marks: 1, markCode: "M" },
              { reasoning: "You must not park on the grass.", marks: 1, markCode: "A" },
              { reasoning: "'Staff only' is interpreted correctly as not for the public.", marks: 1, markCode: "R" },
              { reasoning: "All answers come from the sign.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Staff only; maximum 2 hours; not on the grass.",
            commonErrors: ["Missing that visitors are not allowed."],
          },
        },
        {
          id: "langab-u2-l21q24",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A sign on the classroom door says 'QUIET - EXAMS IN PROGRESS'. Explain what it tells students to do and why the sign is there.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpreting signs", statement: "Explain both the instruction and the reason behind a sign." },
            ],
            steps: [
              { reasoning: "The sign tells students to be quiet / not to talk loudly.", marks: 1, markCode: "M" },
              { reasoning: "It applies while exams are in progress.", marks: 1, markCode: "M" },
              { reasoning: "The reason is so other students can concentrate and not be disturbed.", marks: 2, markCode: "A" },
              { reasoning: "The explanation uses clear, appropriate language.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Students must be quiet during exams so others can concentrate.",
            commonErrors: ["Explaining what it says but not why it is there."],
          },
        },
      ],
    },
    {
      id: "langab-u2-public-texts",
      title: "Notices, labels and directions",
      skill: "Understand public notices, product labels and simple directions in everyday situations.",
      lesson: {
        sections: [
          {
            heading: "Public notices",
            body: "Notices tell you about events and changes: \"Swimming pool closed for cleaning\", \"Bus stop moved to the corner\", \"Sale this week only\". Read the first line for the main news, then look for dates and times.",
          },
          {
            heading: "Product labels",
            body: "Labels tell you what a product is and how much it costs. Key words: **price**, **size**, **weight**, **ingredients**, **use by** (safe to eat before this date), **best before** (best quality date).",
          },
          {
            heading: "Simple directions",
            body: "Directions use position words: **left**, **right**, **straight on**, **next to**, **opposite**, **between**, **near**. Example: \"Go straight on, then turn left. The station is on your right.\" Follow one instruction at a time.",
          },
        ],
        keyFormulas: [
          { name: "Position words", statement: "left, right, straight on, next to, opposite, between, near." },
          { name: "Label key words", statement: "price, size, ingredients, use by, best before." },
        ],
        workedExample: {
          problem: "A label says: MILK - 1 litre - 1.50. What do the numbers tell you?",
          solution: "The milk is one litre and costs 1.50.",
        },
      },
      questions: [
        {
          id: "langab-u2-l21q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On a label, what does 'use by' tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The price of the product" },
              { id: "b", text: "The size of the product" },
              { id: "c", text: "The date after which food may be unsafe" },
              { id: "d", text: "The best quality date" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Use by date", statement: "Use by is the safety date; food should not be eaten after it." },
            ],
            steps: [
              { reasoning: "Use by marks the last safe date for eating.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The date after which food may be unsafe",
            commonErrors: ["Confusing use by with best before."],
          },
        },
        {
          id: "langab-u2-l21q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the position words needed: The bank is ___ the post office. (directly across from) The park is ___ the school and the shop. (in the space between two things)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position words", statement: "Opposite = across from; between = in the middle of two things." },
            ],
            steps: [
              { reasoning: "Across from = opposite.", marks: 1, markCode: "M" },
              { reasoning: "In the space between two things = between.", marks: 1, markCode: "M" },
              { reasoning: "Both answers spelled correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opposite; between.",
            commonErrors: ["Using 'next to' for opposite."],
          },
        },
        {
          id: "langab-u2-l21q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the directions and answer the questions.",
          extract: {
            title: "Directions to the museum",
            author: "Written for Akademik Space",
            text: "Go straight on for two minutes. Turn left at the traffic lights. Walk past the bank. The museum is on your right, next to the post office.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following directions", statement: "Track each instruction in order: straight, turn, landmark, final position." },
            ],
            steps: [
              { reasoning: "First go straight on for two minutes.", marks: 1, markCode: "M" },
              { reasoning: "Then turn left at the traffic lights.", marks: 1, markCode: "M" },
              { reasoning: "The museum is on the right, next to the post office.", marks: 1, markCode: "A" },
              { reasoning: "The order of instructions is followed correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Straight on, left at lights, past bank; museum on right next to post office.",
            commonErrors: ["Turning right instead of left."],
          },
        },
        {
          id: "langab-u2-l21q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a notice for your school.",
          parts: [
            { label: "a", prompt: "Choose an event or change (e.g. sports day, closed day).", marks: 1 },
            { label: "b", prompt: "Write the notice in three to five short lines.", marks: 2 },
            { label: "c", prompt: "Include the day and date.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Notice format", statement: "A notice has a clear headline, the key facts and a date." },
            ],
            steps: [
              { part: "a", reasoning: "A clear event or change chosen.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Short lines with the main information.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Correct day and date included.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Event. (b) 3-5 short lines. (c) Day + date.",
            commonErrors: ["Writing one long paragraph instead of short lines."],
          },
        },
        {
          id: "langab-u2-l21q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On a food label, 'best before' tells you...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the size of the pack" },
              { id: "b", text: "the last safe day to eat the food" },
              { id: "c", text: "the date when the food is at its best quality" },
              { id: "d", text: "the price of the product" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Best before", statement: "Best before is the date until which the food keeps its best quality." },
            ],
            steps: [
              { reasoning: "Best before marks quality, not safety.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The date when the food is at its best quality",
            commonErrors: ["Confusing best before with use by."],
          },
        },
        {
          id: "langab-u2-l21q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The word 'opposite' in directions means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "across from, facing each other" },
              { id: "b", text: "very far away" },
              { id: "c", text: "right next to" },
              { id: "d", text: "behind you" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opposite", statement: "Opposite means across from — the two places face each other." },
            ],
            steps: [
              { reasoning: "Opposite describes two things facing each other across a space.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Across from, facing each other",
            commonErrors: ["Confusing opposite with next to."],
          },
        },
        {
          id: "langab-u2-l21q27",
          difficulty: "core",
          totalMarks: 2,
          stem: "'The café is next to the bank.' Where is the café?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Far from the bank" },
              { id: "b", text: "Opposite the bank" },
              { id: "c", text: "Inside the bank" },
              { id: "d", text: "Beside the bank" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Next to", statement: "Next to means beside or very close to something." },
            ],
            steps: [
              { reasoning: "Next to = beside, so the café is beside the bank.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Beside the bank",
            commonErrors: ["Confusing next to with opposite."],
          },
        },
        {
          id: "langab-u2-l21q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Directions say: 'Turn left at the traffic lights.' What is the first thing you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Go straight on" },
              { id: "b", text: "Turn left" },
              { id: "c", text: "Stop the car" },
              { id: "d", text: "Turn right" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following directions", statement: "Follow each instruction in the order given." },
            ],
            steps: [
              { reasoning: "The first instruction is to turn left at the traffic lights.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Turn left",
            commonErrors: ["Turning the wrong way."],
          },
        },
        {
          id: "langab-u2-l21q29",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A notice says 'SALE — this week only'. This tells you...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "everything is free on Saturday" },
              { id: "b", text: "prices are reduced only during this week" },
              { id: "c", text: "the shop is closed this week" },
              { id: "d", text: "the shop moves this week" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading notices", statement: "The first line gives the main news; other words give the time limit." },
            ],
            steps: [
              { reasoning: "A sale means lower prices, and 'this week only' limits the time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Prices are reduced only during this week",
            commonErrors: ["Missing the time limit 'this week only'."],
          },
        },
        {
          id: "langab-u2-l21q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between 'use by' and 'best before' on a label?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use by is the price; best before is the size" },
              { id: "b", text: "Use by is about safety; best before is about quality" },
              { id: "c", text: "They mean exactly the same thing" },
              { id: "d", text: "Best before means the food is frozen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Use by vs best before", statement: "Use by = last safe date; best before = best quality date." },
            ],
            steps: [
              { reasoning: "Use by concerns safety, best before concerns quality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Use by is about safety; best before is about quality",
            commonErrors: ["Treating the two dates as identical."],
          },
        },
        {
          id: "langab-u2-l21q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "Someone says 'The station is on your right.' This means the station is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "very far away" },
              { id: "b", text: "behind you" },
              { id: "c", text: "on your left side" },
              { id: "d", text: "on your right side" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "On your right/left", statement: "'On your right' means to the right side of the person walking." },
            ],
            steps: [
              { reasoning: "The phrase directly states the station is on the right side.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** On your right side",
            commonErrors: ["Confusing left and right."],
          },
        },
        {
          id: "langab-u2-l21q32",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Directions: 'Go straight on, turn right at the bank. The museum is opposite the park.' Where is the museum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Next to the park" },
              { id: "b", text: "Across from the park" },
              { id: "c", text: "Inside the park" },
              { id: "d", text: "Behind the bank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opposite", statement: "Opposite means across from — the museum faces the park." },
            ],
            steps: [
              { reasoning: "'Opposite the park' means the museum is across from the park.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Across from the park",
            commonErrors: ["Ignoring the final landmark description."],
          },
        },
        {
          id: "langab-u2-l21q33",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the missing position words: 1) The park is ___ the school and the shop. (in the space between two things) 2) The café is ___ the bank. (across from) 3) The station is ___ the hotel. (very close to)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position words", statement: "Between = in the middle of two things; opposite = across from; next to = beside." },
            ],
            steps: [
              { reasoning: "In the space between two things = between.", marks: 1, markCode: "M" },
              { reasoning: "Across from = opposite.", marks: 1, markCode: "M" },
              { reasoning: "Very close to = next to.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Between; opposite; next to.",
            commonErrors: ["Using 'near' for 'next to' or mixing up between and opposite."],
          },
        },
        {
          id: "langab-u2-l21q34",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Read the label and answer the questions: What is the size? What is the price? What is the 'best before' date? Name one ingredient.",
          extract: {
            title: "Orange juice label",
            author: "Written for Akademik Space",
            text: "ORANGE JUICE\n1 litre\nPrice: 2.50\nBest before: 20 June\nIngredients: water, oranges, sugar",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading labels", statement: "Find size, price, date and ingredients on a product label." },
            ],
            steps: [
              { reasoning: "Size: 1 litre.", marks: 1, markCode: "M" },
              { reasoning: "Price: 2.50.", marks: 1, markCode: "M" },
              { reasoning: "Best before: 20 June.", marks: 1, markCode: "A" },
              { reasoning: "One ingredient named, e.g. oranges or water.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "1 litre; 2.50; 20 June; e.g. oranges.",
            commonErrors: ["Confusing price with size."],
          },
        },
        {
          id: "langab-u2-l21q35",
          difficulty: "core",
          totalMarks: 5,
          stem: "Read the directions and answer the questions.",
          extract: {
            title: "Directions from the hotel",
            author: "Written for Akademik Space",
            text: "From the hotel, go straight on for one minute. Turn left at the park. Walk past the school. The museum is on your right, opposite the library.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following directions", statement: "Track each instruction: direction, landmark and final position." },
            ],
            steps: [
              { reasoning: "First go straight on for one minute.", marks: 1, markCode: "M" },
              { reasoning: "Then turn left at the park.", marks: 1, markCode: "M" },
              { reasoning: "Walk past the school — a landmark on the way.", marks: 1, markCode: "A" },
              { reasoning: "The museum is on the right.", marks: 1, markCode: "A" },
              { reasoning: "It is opposite the library.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Straight on, left at the park, past the school; museum on right, opposite the library.",
            commonErrors: ["Turning right instead of left."],
          },
        },
        {
          id: "langab-u2-l21q36",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write directions from your school to the bus stop.",
          parts: [
            { label: "a", prompt: "Write the first instruction: go straight on or turn.", marks: 2 },
            { label: "b", prompt: "Give one landmark on the way.", marks: 1 },
            { label: "c", prompt: "Say where the bus stop is at the end.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Direction language", statement: "Directions use go straight on, turn left/right, past, next to, opposite." },
            ],
            steps: [
              { part: "a", reasoning: "A clear first instruction, e.g. 'Go straight on' or 'Turn left'.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A real landmark such as a shop, park or bank.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The final position uses on your left/right, next to or opposite.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) First instruction. (b) Landmark. (c) Final position.",
            commonErrors: ["Giving a place name without direction words."],
          },
        },
        {
          id: "langab-u2-l21q37",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the notice and answer the questions: On which day is the sports day? What time does it start? What must students bring? What must they not bring?",
          extract: {
            title: "Sports day notice",
            author: "Written for Akademik Space",
            text: "SPORTS DAY\nFriday 20 June\nStart: 9:00 am\nBring a water bottle\nNo mobile phones",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading notices", statement: "Find the day, time and instructions in a notice." },
            ],
            steps: [
              { reasoning: "Sports day is on Friday 20 June.", marks: 1, markCode: "M" },
              { reasoning: "It starts at 9:00 am.", marks: 1, markCode: "M" },
              { reasoning: "Students must bring a water bottle.", marks: 1, markCode: "A" },
              { reasoning: "Mobile phones are not allowed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Friday 20 June; 9:00 am; water bottle; no mobile phones.",
            commonErrors: ["Confusing what to bring with what not to bring."],
          },
        },
        {
          id: "langab-u2-l21q38",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design a label for a new drink called 'Sun Cola'.",
          parts: [
            { label: "a", prompt: "Give the name and the size.", marks: 2 },
            { label: "b", prompt: "Give the price and a 'best before' date.", marks: 2 },
            { label: "c", prompt: "Add one more detail, e.g. flavour or ingredients.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Label format", statement: "A label shows name, size, price, date and often ingredients." },
            ],
            steps: [
              { part: "a", reasoning: "Name 'Sun Cola' and a size such as 330 ml or 1 litre.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A price and a best before date are both given.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One extra detail such as 'cola flavour' or an ingredient.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name + size. (b) Price + date. (c) Extra detail.",
            commonErrors: ["Missing the date line or the size."],
          },
        },
        {
          id: "langab-u2-l21q39",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read the two direction texts and answer the question.",
          extract: {
            title: "Two sets of directions",
            author: "Written for Akademik Space",
            text: "A: Go to the museum.\nB: Go straight on for two minutes. Turn left at the bank. The museum is on your right, next to the post office.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating directions", statement: "Good directions give steps in order, landmarks and the final position." },
            ],
            steps: [
              { reasoning: "Text B is clearer because it gives step-by-step instructions.", marks: 1, markCode: "M" },
              { reasoning: "B uses landmarks: the bank and the post office.", marks: 1, markCode: "M" },
              { reasoning: "B says the position: on your right, next to the post office.", marks: 1, markCode: "A" },
              { reasoning: "Text A only names the destination with no way to get there.", marks: 1, markCode: "R" },
              { reasoning: "The conclusion is justified by these points.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "B is better: it gives ordered steps, landmarks and the final position.",
            commonErrors: ["Saying A is better because it is shorter."],
          },
        },
        {
          id: "langab-u2-l21q40",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a notice and three directions for a school open day.",
          parts: [
            { label: "a", prompt: "Write a notice with a headline and the date.", marks: 2 },
            { label: "b", prompt: "Write three direction steps from the school gate.", marks: 2 },
            { label: "c", prompt: "Say where visitors should go at the end.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Notice and directions", statement: "A notice gives the event and date; directions give ordered steps with landmarks." },
            ],
            steps: [
              { part: "a", reasoning: "A clear headline like 'OPEN DAY' plus a correct date.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Three ordered steps using go straight on / turn / past.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A final position such as 'the hall is on your left'.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Notice + date. (b) Three steps. (c) Final position.",
            commonErrors: ["Directions without order or landmarks."],
          },
        },
      ],
    },
  ],
};
