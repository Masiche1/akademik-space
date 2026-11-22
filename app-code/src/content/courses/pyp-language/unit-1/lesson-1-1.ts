import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "pypl-u1-lesson-1-1",
  code: "1-1",
  title: "Listening and Speaking Clearly",
  goal: "I CAN listen actively, follow instructions, and speak clearly so others can understand me.",
  standards: [
    "PYP Language: Oral language",
    "PYP transdisciplinary theme: Who We Are",
    "PYP transdisciplinary theme: How We Express Ourselves",
  ],
  vocabulary: [
    { term: "Active listening", definition: "Listening with your whole body — eyes, ears and mind — to really understand what someone says." },
    { term: "Speaker", definition: "The person who is talking; everyone else is a listener until it is their turn." },
    { term: "Listener", definition: "The person who pays attention to the speaker and waits for their turn to talk." },
    { term: "Turn-taking", definition: "Taking it in turns to speak in a conversation so everyone gets a chance." },
    { term: "Volume", definition: "How loud or quiet your voice is; a good speaker matches volume to the room." },
  ],
  concepts: [
    {
      id: "pypl-u1l1-c1-active-listening",
      title: "Active listening",
      skill: "Listen carefully, follow instructions and retell what was said.",
      lesson: {
        sections: [
          {
            heading: "Why listening matters",
            body: "Listening is how we learn about the world and how we show respect to others. A good listener uses their **eyes** to watch the speaker, their **ears** to hear the words, and their **mind** to think about what the words mean. When we listen well, we can follow instructions, answer questions and remember stories.",
          },
          {
            heading: "Steps for good listening",
            body: "1. Look at the speaker and stop what you are doing.\n2. Wait for the speaker to finish — do not interrupt.\n3. Think about the important words: who, what, where, when.\n4. If you are not sure, ask a question.",
          },
        ],
        keyFormulas: [
          { name: "Good listening checklist", statement: "Eyes on speaker, quiet mouth, thinking mind, question if unsure" },
        ],
        workedExample: {
          problem: "The teacher says: 'Put your pencils in the box, then line up by the door.' What should you do?",
          solution: "Listen for the two actions in order: first put the pencils in the box, then line up by the door. Do them in that order — listening helps you remember the steps.",
        },
      },
      questions: [
        {
          id: "pypl-q-u1l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "While a friend is telling a story, what should a good listener do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watch the speaker and wait for their turn to talk" },
              { id: "b", text: "Talk about their own story at the same time" },
              { id: "c", text: "Look out of the window" },
              { id: "d", text: "Start talking before they finish" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Active listening", statement: "A good listener watches the speaker, stays quiet and waits for their turn." },
            ],
            steps: [
              { reasoning: "Active listening means watching the speaker and not interrupting; talking at the same time or looking away means you are not listening.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Watch the speaker and wait for their turn to talk",
            commonErrors: ["Choosing (d) — interrupting stops the speaker and shows poor listening."],
          },
        },
        {
          id: "pypl-q-u1l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two things a good listener does while someone is talking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Active listening skills", statement: "Good listeners look at the speaker, stay quiet, think about the words, and ask questions if unsure." },
            ],
            steps: [
              { reasoning: "First habit, e.g. looking at the speaker or staying quiet and not interrupting.", marks: 1, markCode: "M" },
              { reasoning: "Second habit, e.g. thinking about the important words or being ready to retell what was said.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: look at the speaker; stay quiet; think about the words; wait for your turn; ask a question if unsure.",
            commonErrors: ["Listing habits without saying what the listener actually does."],
          },
        },
        {
          id: "pypl-q-u1l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The teacher says: 'First tidy your table, then get your reading book, and finally line up quietly.' Priya starts lining up before tidying her table. Explain what Priya did wrong and what she should do instead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following instructions in order", statement: "Instructions with 'first', 'then' and 'finally' must be done in the order given." },
            ],
            steps: [
              { reasoning: "Priya did the last step first; the instructions gave a clear order: tidy, then get the book, then line up.", marks: 1, markCode: "M" },
              { reasoning: "She probably stopped listening after the first words or was in a hurry.", marks: 1, markCode: "R" },
              { reasoning: "She should tidy the table, then get the reading book, then line up — repeating the steps in her head helps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Priya ignored the order; she should tidy the table, get the book, then line up.",
            commonErrors: ["Saying Priya 'cannot listen' — the problem is order, not hearing."],
          },
        },
        {
          id: "pypl-q-u1l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Jo tells his class this short story: 'Yesterday I went to the park. I saw a big brown dog. It was chasing a ball. My friend Ben was there too.'",
          parts: [
            { label: "a", prompt: "What should the listeners do while Jo is telling the story?", marks: 1 },
            { label: "b", prompt: "Retell Jo's story in order, using the words beginning, middle and end.", marks: 2 },
            { label: "c", prompt: "Write one question you could ask Jo about his story.", marks: 2 },
            { label: "d", prompt: "Explain why retelling a story helps us remember it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retelling", statement: "A good retelling keeps the order of events and uses the key words who, what, where." },
            ],
            steps: [
              { part: "a", reasoning: "Look at Jo, stay quiet and listen carefully.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Retell in order: beginning (went to the park), middle (saw the dog chasing a ball), end (Ben was there).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three parts included in the correct order.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A sensible question, e.g. 'What did the dog look like?' or 'Did you play with the dog?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The question is about the story and shows curiosity.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Retelling makes us think about each part again.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Putting events in order links them together, which makes the story easier to remember.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Listen quietly and watch Jo. (b) Beginning: park; middle: dog chasing ball; end: Ben was there. (c) Any relevant question. (d) Retelling repeats the events in order, helping memory.",
            commonErrors: ["In (b), starting with the dog instead of going to the park — order matters."],
          },
        },
        {
          id: "pypl-q-u1l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these shows that someone is listening actively?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Looking at the speaker, staying quiet and thinking about the words" },
              { id: "b", text: "Looking out of the window" },
              { id: "c", text: "Drawing pictures while the teacher talks" },
              { id: "d", text: "Talking to a friend at the same time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Active listening", statement: "Active listening uses eyes, ears and mind: watch the speaker, hear the words, think about the meaning." },
            ],
            steps: [
              { reasoning: "Only (b) shows eyes, ears and mind working together; the others mean the listener is not paying attention.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Looking at the speaker, staying quiet and thinking about the words",
            commonErrors: ["Choosing (a) — drawing may be allowed sometimes, but it is not listening with your whole body."],
          },
        },
        {
          id: "pypl-q-u1l1c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story has a beginning, a middle and an end. How many parts does the story have?",
          response: { type: "numeric", parts: [
            { label: "Story parts", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Story structure", statement: "Most stories have three parts: beginning, middle and end." },
            ],
            steps: [
              { reasoning: "Count the parts: beginning, middle, end = 3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting that the beginning, middle and end are all parts."],
          },
        },
        {
          id: "pypl-q-u1l1c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "You cannot hear part of what the teacher said. What is the best thing to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guess what was said and hope it is right" },
              { id: "b", text: "Ask the teacher to repeat it, or ask a friend quietly" },
              { id: "c", text: "Copy what the person next to you does" },
              { id: "d", text: "Ignore it and hope it does not matter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarifying instructions", statement: "If you are not sure what was said, asking a question is part of good listening." },
            ],
            steps: [
              { reasoning: "Asking for a repeat fixes the problem honestly; guessing or ignoring can lead to mistakes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ask the teacher to repeat it, or ask a friend quietly",
            commonErrors: ["Choosing (a) — a guess may be wrong, and asking is a sign of listening, not weakness."],
          },
        },
        {
          id: "pypl-q-u1l1c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two reasons why it is important to listen carefully when the teacher gives instructions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Purpose of listening", statement: "Listening helps us follow instructions, learn new things and show respect to the speaker." },
            ],
            steps: [
              { reasoning: "One reason, e.g. so you know what to do and do not miss a step.", marks: 1, markCode: "M" },
              { reasoning: "Second reason, e.g. so you learn what the teacher is teaching or show respect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: know what to do; not miss steps; learn new information; show respect to the speaker.",
            commonErrors: ["Saying 'because the teacher said so' without explaining the real benefit."],
          },
        },
        {
          id: "pypl-q-u1l1c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The teacher says: 'First put your book away, then line up by the door, and finally be quiet.' How many steps must you do?",
          response: { type: "numeric", parts: [
            { label: "Number of steps", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for instructions", statement: "Signal words like 'first', 'then' and 'finally' tell you how many steps there are." },
            ],
            steps: [
              { reasoning: "Count the actions: put book away, line up, be quiet = 3 steps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'first', 'then' and 'finally' as steps — they are signal words, not actions."],
          },
        },
        {
          id: "pypl-q-u1l1c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sara was reading her book while the teacher gave the instructions, so she missed them and did the wrong thing. Explain what Sara should have done instead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Active listening habits", statement: "A good listener stops what they are doing, watches the speaker and listens with their whole body." },
            ],
            steps: [
              { reasoning: "Sara's problem: she was doing something else, so her ears and mind were not on the instructions.", marks: 1, markCode: "M" },
              { reasoning: "She should have put her book down, looked at the teacher and listened quietly.", marks: 1, markCode: "M" },
              { reasoning: "Then she could have followed each step in order and asked a question if unsure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sara should have stopped reading, watched the teacher and listened; then followed the steps in order.",
            commonErrors: ["Saying Sara 'cannot listen' — she chose to read instead, which is fixable."],
          },
        },
        {
          id: "pypl-q-u1l1c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The instruction is: 'First tidy your desk, then get your reading book, then line up quietly.' Which shows someone following it correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I did all three things at the same time.'" },
              { id: "b", text: "'I got my book, tidied my desk, then lined up.'" },
              { id: "c", text: "'I lined up, then got my book, then tidied my desk.'" },
              { id: "d", text: "'I tidied my desk, got my book, then lined up quietly.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Order words", statement: "'First', 'then' and 'finally' give the order; the steps must be done in that order." },
            ],
            steps: [
              { reasoning: "Only (b) does tidy → book → line up, matching the order given.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 'I tidied my desk, got my book, then lined up quietly.'",
            commonErrors: ["Choosing (d) — doing everything at once ignores the order of the instructions."],
          },
        },
        {
          id: "pypl-q-u1l1c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why it helps to retell what someone said after they finish talking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retelling", statement: "Retelling repeats the information in your own words, which strengthens memory and checks understanding." },
            ],
            steps: [
              { reasoning: "Retelling makes you think about each part of what was said again.", marks: 1, markCode: "M" },
              { reasoning: "It helps you check you understood — if you cannot retell it, you missed something.", marks: 1, markCode: "M" },
              { reasoning: "Repeating the information in order helps it stay in your memory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Retelling checks understanding and repeats the ideas in order, helping you remember them.",
            commonErrors: ["Saying retelling is 'just copying' — it is saying it in your own words to check understanding."],
          },
        },
        {
          id: "pypl-q-u1l1c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many question words did we learn: who, what, where, when, why and how?",
          response: { type: "numeric", parts: [
            { label: "Question words", answer: 6 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "Who, what, where, when, why and how are the six main question words." },
            ],
            steps: [
              { reasoning: "Count them: who, what, where, when, why, how = 6.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 5 — missing one of the six question words."],
          },
        },
        {
          id: "pypl-q-u1l1c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of good turn-taking in a conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two friends talk at the same time" },
              { id: "b", text: "The loudest voice gets to speak" },
              { id: "c", text: "One person speaks while the other listens, then they swap" },
              { id: "d", text: "Nobody gets a turn to talk" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "Turn-taking means one person speaks at a time while others listen, then it is their turn." },
            ],
            steps: [
              { reasoning: "Good turn-taking shares speaking time fairly — one speaks, one listens, then swap.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** One person speaks while the other listens, then they swap",
            commonErrors: ["Choosing (a) — talking at the same time is not turn-taking."],
          },
        },
        {
          id: "pypl-q-u1l1c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The instruction was: 'Put away your pencil, then open your book.' Jo opened his book first, then put his pencil away. What does this show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jo did both jobs, so it does not matter" },
              { id: "b", text: "Jo was listening carefully" },
              { id: "c", text: "Jo did not follow the order of the instruction" },
              { id: "d", text: "Jo was too quick" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Order of instructions", statement: "Instructions with 'then' must be followed in the order given." },
            ],
            steps: [
              { reasoning: "Jo did the second step first — the order was wrong even though both jobs were done.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Jo did not follow the order of the instruction",
            commonErrors: ["Choosing (c) — in instructions, order matters even if all steps are done."],
          },
        },
        {
          id: "pypl-q-u1l1c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Nia tells the class this short story: 'On Sunday I helped my dad wash the car. It was covered in mud. Then we had ice cream to celebrate.'",
          parts: [
            { label: "a", prompt: "What should the listeners do while Nia is telling the story?", marks: 1 },
            { label: "b", prompt: "Retell Nia's story in order, using beginning, middle and end.", marks: 2 },
            { label: "c", prompt: "Write one question you could ask Nia about her story.", marks: 2 },
            { label: "d", prompt: "Explain one way good listening helps you in class.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening and retelling", statement: "Good listeners watch, stay quiet, remember the order, and can ask questions or retell what was said." },
            ],
            steps: [
              { part: "a", reasoning: "Look at Nia, stay quiet and listen carefully.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Retell in order: beginning (helped dad wash car on Sunday), middle (car was covered in mud), end (had ice cream).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three parts included in the correct order.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A sensible question, e.g. 'Was the car very dirty?' or 'What flavour was the ice cream?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The question is about the story and shows curiosity.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Good listening helps you follow instructions and answer questions correctly.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It also helps you learn and remember what the teacher says.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Listen quietly and watch Nia. (b) Beginning: washing car; middle: mud; end: ice cream. (c) Any relevant question. (d) Follows instructions and remembers learning.",
            commonErrors: ["In (b), mixing up the order — washing the car must come before the ice cream."],
          },
        },
      ],
    },
    {
      id: "pypl-u1l1-c2-speaking-clearly",
      title: "Speaking clearly",
      skill: "Speak at a good volume and pace, pronounce words clearly, and give polite responses.",
      lesson: {
        sections: [
          {
            heading: "Clear speech",
            body: "A good speaker is easy to understand. Speak at a **volume** that suits the room — louder in the playground, quieter in the library. Speak at a steady **pace**: not too fast, not too slow. Say each **sound** clearly, and look at your listeners so they know you are talking to them.",
          },
          {
            heading: "Polite and helpful talk",
            body: "Good speakers use kind words. Say **please** when you ask for something, **thank you** when you receive it, and **sorry** when you make a mistake. When you answer a question, give the whole answer, not just one word — unless the question only needs one word.",
          },
        ],
        keyFormulas: [
          { name: "Clear speaking checklist", statement: "Right volume, steady pace, clear sounds, eyes on listeners, polite words" },
        ],
        workedExample: {
          problem: "Sam wants to borrow a pencil. How should he ask?",
          solution: "Sam should look at his friend, speak clearly and say 'Please may I borrow a pencil?' When the pencil is returned he says 'Thank you.'",
        },
      },
      questions: [
        {
          id: "pypl-q-u1l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When you speak to a class in a large hall, what should your voice do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be as quiet as possible" },
              { id: "b", text: "Stay the same as when talking to one friend" },
              { id: "c", text: "Be loud enough for everyone to hear" },
              { id: "d", text: "Shout as fast as possible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volume", statement: "Volume is how loud or quiet your voice is; it should match the size of the room." },
            ],
            steps: [
              { reasoning: "A large hall needs a louder voice so everyone can hear; whispering fails and shouting is not clear.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Be loud enough for everyone to hear",
            commonErrors: ["Choosing (c) — a voice for one friend is too quiet for a whole class."],
          },
        },
        {
          id: "pypl-q-u1l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two ways you can speak so that other people understand you easily.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clear speaking", statement: "Clear speakers use the right volume, a steady pace and clear sounds, and look at their listeners." },
            ],
            steps: [
              { reasoning: "One way, e.g. speak loudly enough and not too fast.", marks: 1, markCode: "M" },
              { reasoning: "Second way, e.g. say each word clearly, look at listeners, or use polite words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: right volume; steady pace; clear sounds; look at listeners; polite words.",
            commonErrors: ["Saying 'speak louder' for a small group — volume must fit the room."],
          },
        },
        {
          id: "pypl-q-u1l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Amina is giving a talk about her holiday. She speaks very fast and looks at the floor. Explain two problems with how she is speaking and how she can fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effective speaking", statement: "A clear speaker uses a steady pace, the right volume, clear sounds and looks at the audience." },
            ],
            steps: [
              { reasoning: "Problem 1: speaking too fast makes it hard for listeners to follow.", marks: 1, markCode: "M" },
              { reasoning: "Problem 2: looking at the floor means listeners cannot see her face or feel she is talking to them.", marks: 1, markCode: "M" },
              { reasoning: "Fixes: slow down to a steady pace and look up at the audience while speaking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Too fast and not looking at listeners; slow down and look at the audience.",
            commonErrors: ["Naming the problems but not saying how to fix them."],
          },
        },
        {
          id: "pypl-q-u1l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are showing your class a photo of your pet and telling them about it.",
          parts: [
            { label: "a", prompt: "What should you do with your voice before you start talking?", marks: 1 },
            { label: "b", prompt: "Describe two ways to make your voice easy to hear.", marks: 2 },
            { label: "c", prompt: "Write one polite sentence you could say when someone asks you a question.", marks: 2 },
            { label: "d", prompt: "Explain why looking at your listeners matters when you speak.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presenting", statement: "Good presenters prepare their voice, speak clearly and connect with the audience." },
            ],
            steps: [
              { part: "a", reasoning: "Take a breath, check the volume suits the room, and speak at a steady pace.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Speak loudly enough for everyone and not too fast.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Say each word clearly and look at the listeners.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A polite sentence such as 'Yes, my dog likes to run in the park' or 'Thank you for your question.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The sentence answers or acknowledges politely.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Eye contact shows you are talking to the listeners.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It helps listeners follow you and shows respect; looking away can make them lose interest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Prepare voice/volume. (b) Loud enough, steady pace, clear words. (c) Any polite answer sentence. (d) Eye contact connects speaker and listeners.",
            commonErrors: ["In (d), saying eye contact is 'polite' only — it also helps communication."],
          },
        },
        {
          id: "pypl-q-u1l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are reading a story to your class in the library. How should your voice sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You cannot speak at all" },
              { id: "b", text: "As loud as possible" },
              { id: "c", text: "Exactly the same as shouting in the playground" },
              { id: "d", text: "Quiet, so other classes are not disturbed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volume", statement: "Volume is how loud or quiet your voice is; it should match the room — quiet in the library, louder in the playground." },
            ],
            steps: [
              { reasoning: "The library needs a quiet voice; loud would disturb others and whispering may not be heard.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Quiet, so other classes are not disturbed",
            commonErrors: ["Choosing (a) — the volume must fit the room, not be as loud as possible."],
          },
        },
        {
          id: "pypl-q-u1l1c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many polite words can you use when speaking politely: please, thank you and sorry?",
          response: { type: "numeric", parts: [
            { label: "Polite words", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polite words", statement: "'Please', 'thank you' and 'sorry' are kind words good speakers use." },
            ],
            steps: [
              { reasoning: "Count the polite words: please, thank you, sorry = 3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — there are only three polite words listed."],
          },
        },
        {
          id: "pypl-q-u1l1c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which describes a good speaking pace?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stopping and starting randomly" },
              { id: "b", text: "As fast as possible so you finish quickly" },
              { id: "c", text: "Very slow so you can think" },
              { id: "d", text: "A steady pace — not too fast, not too slow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pace", statement: "Pace is how fast you speak; a steady pace lets listeners follow." },
            ],
            steps: [
              { reasoning: "Too fast is hard to follow and too slow is boring — steady is best.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A steady pace — not too fast, not too slow",
            commonErrors: ["Choosing (a) — fast speaking makes it hard for listeners to understand."],
          },
        },
        {
          id: "pypl-q-u1l1c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two ways you can speak so that other people understand you easily.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clear speaking", statement: "Clear speakers use the right volume, a steady pace, clear sounds and look at their listeners." },
            ],
            steps: [
              { reasoning: "One way, e.g. speak loudly enough and at a steady pace.", marks: 1, markCode: "M" },
              { reasoning: "Second way, e.g. say each word clearly, look at listeners or use polite words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: right volume; steady pace; clear sounds; look at listeners; polite words.",
            commonErrors: ["Repeating the same idea twice, e.g. 'speak loudly' and 'be loud'."],
          },
        },
        {
          id: "pypl-q-u1l1c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A speaker says three polite phrases: 'Please may I borrow this?', 'Thank you for listening' and 'Sorry for the noise'. How many polite phrases did they say?",
          response: { type: "numeric", parts: [
            { label: "Polite phrases", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "context", name: "Polite phrases", statement: "Each 'please', 'thank you' or 'sorry' sentence is a polite phrase." },
            ],
            steps: [
              { reasoning: "Count the phrases: borrow/please, thank you, sorry = 3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting each polite word inside the phrases — the question asks for phrases."],
          },
        },
        {
          id: "pypl-q-u1l1c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ben is giving a talk but he mumbles, looks at his shoes and finishes with 'That's all.' Explain two problems with how he speaks and how he could fix each one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effective speaking", statement: "A clear speaker uses volume, pace, clear sounds, eye contact and a polite, strong finish." },
            ],
            steps: [
              { reasoning: "Problem 1: mumbling makes it hard for listeners to hear the words.", marks: 1, markCode: "M" },
              { reasoning: "Problem 2: looking at his shoes means listeners cannot connect with him.", marks: 1, markCode: "M" },
              { reasoning: "Fixes: speak up clearly and look at the audience; finish with a polite sentence like 'Thank you for listening.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mumbling and no eye contact; fix by speaking clearly, looking up, and ending politely.",
            commonErrors: ["Naming the problems but not explaining how to fix them."],
          },
        },
        {
          id: "pypl-q-u1l1c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When you are giving a presentation to your class, where should you look most of the time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the window" },
              { id: "b", text: "At your listeners" },
              { id: "c", text: "At your notes the whole time" },
              { id: "d", text: "At your shoes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Eye contact", statement: "Looking at your listeners shows you are talking to them and helps them follow you." },
            ],
            steps: [
              { reasoning: "Eye contact with the audience is a key part of speaking clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** At your listeners",
            commonErrors: ["Choosing (c) — notes help you remember, but looking at listeners keeps them engaged."],
          },
        },
        {
          id: "pypl-q-u1l1c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "When someone asks you a question, why is it better to give a whole answer instead of just one word?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Answering questions", statement: "A full answer gives the information asked for and helps the listener understand." },
            ],
            steps: [
              { reasoning: "A one-word answer gives very little information.", marks: 1, markCode: "M" },
              { reasoning: "A whole answer explains more, so the listener really knows what you mean.", marks: 1, markCode: "M" },
              { reasoning: "Unless the question only needs one word (like 'yes' or 'no'), a full sentence is more helpful and polite.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A whole answer gives more information and helps the listener understand; one word is too little unless the question only needs it.",
            commonErrors: ["Saying one-word answers are 'rude' always — sometimes 'yes' is the right answer."],
          },
        },
        {
          id: "pypl-q-u1l1c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before speaking, a checklist has four things: right volume, steady pace, clear sounds and polite words. How many things are on the checklist?",
          response: { type: "numeric", parts: [
            { label: "Checklist items", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clear speaking checklist", statement: "The checklist covers volume, pace, sounds and polite words." },
            ],
            steps: [
              { reasoning: "Count: volume, pace, sounds, polite words = 4.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting one item such as polite words."],
          },
        },
        {
          id: "pypl-q-u1l1c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the most polite way to ask a friend for a pencil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just take the pencil without asking" },
              { id: "b", text: "'I want that pencil now.'" },
              { id: "c", text: "'Please may I borrow your pencil?'" },
              { id: "d", text: "'Give me your pencil.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Polite requests", statement: "Polite requests use 'please', ask permission and can include 'may I'." },
            ],
            steps: [
              { reasoning: "(b) uses 'please' and asks permission politely; the others are demanding or rude.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'Please may I borrow your pencil?'",
            commonErrors: ["Choosing (a) — it is a command, not a polite request."],
          },
        },
        {
          id: "pypl-q-u1l1c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence is said by a speaker who is preparing to finish their talk politely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Okay, done.'" },
              { id: "b", text: "'That's all, I guess.'" },
              { id: "c", text: "'Bye everyone, see ya.'" },
              { id: "d", text: "'Thank you for listening.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Finishing a talk", statement: "A polite finish thanks the audience for listening." },
            ],
            steps: [
              { reasoning: "'Thank you for listening' is a polite, clear ending; the others sound careless.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 'Thank you for listening.'",
            commonErrors: ["Choosing (a) — 'I guess' sounds unsure, not polite."],
          },
        },
        {
          id: "pypl-q-u1l1c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are giving a short talk to your class about your favourite hobby.",
          parts: [
            { label: "a", prompt: "What should you do to prepare your voice before you start?", marks: 1 },
            { label: "b", prompt: "Describe two ways to make your voice easy to hear in a classroom.", marks: 2 },
            { label: "c", prompt: "Write one polite sentence you could say at the end of your talk.", marks: 2 },
            { label: "d", prompt: "Explain why a steady pace matters when you speak.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presenting", statement: "Good speakers prepare their voice, use volume and pace well, look at listeners and finish politely." },
            ],
            steps: [
              { part: "a", reasoning: "Take a breath, check the volume suits the room and speak at a steady pace.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Speak loudly enough for everyone and not too fast.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Say each word clearly and look at the listeners.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A polite sentence such as 'Thank you for listening' or 'I hope you enjoyed my talk.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The sentence politely closes the talk.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A steady pace gives listeners time to understand each word.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Too fast is confusing; too slow is boring — steady keeps everyone following.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Prepare voice/volume. (b) Loud enough, steady, clear. (c) Any polite closing sentence. (d) Steady pace lets listeners follow.",
            commonErrors: ["In (c), a rude or casual ending — presentations should finish politely."],
          },
        },
      ],
    },
  ],
};
