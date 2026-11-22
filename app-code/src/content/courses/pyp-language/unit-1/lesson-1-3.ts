import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "pypl-u1-lesson-1-3",
  code: "1-3",
  title: "Working Together in Talk",
  goal: "I CAN take turns in a discussion, share my ideas politely, and present something to an audience.",
  standards: [
    "PYP Language: Oral language",
    "PYP transdisciplinary theme: Who We Are",
    "PYP transdisciplinary theme: How We Express Ourselves",
  ],
  vocabulary: [
    { term: "Discussion", definition: "A talk where people share ideas about a topic, listening to each other." },
    { term: "Idea", definition: "A thought or suggestion that someone shares with a group." },
    { term: "Turn-taking", definition: "Waiting for your turn to speak in a group so everyone can join in." },
    { term: "Presentation", definition: "Showing or telling something to an audience, like a show-and-tell or a talk." },
    { term: "Audience", definition: "The people who listen to or watch a speaker or performer." },
    { term: "Non-verbal", definition: "Communication without words, such as facial expressions, gestures and body posture." },
  ],
  concepts: [
    {
      id: "pypl-u1l3-c1-discussion-turn-taking",
      title: "Discussion and turn-taking",
      skill: "Join a group discussion politely, take turns and build on others' ideas.",
      lesson: {
        sections: [
          {
            heading: "Talking together",
            body: "A **discussion** is when a group talks about a topic and shares ideas. Good discussion needs **turn-taking**: one person speaks at a time while others listen. You can agree ('I think so too'), disagree politely ('I see it differently because...'), or add to an idea ('And another reason is...').",
          },
          {
            heading: "Polite discussion habits",
            body: "1. Wait for a pause or for the teacher to invite you in.\n2. Keep your point short so others can join.\n3. Listen to what others say before you answer.\n4. Use kind words — never laugh at someone's idea.",
          },
        ],
        keyFormulas: [
          { name: "Discussion sentence starters", statement: "I agree because... / I see it differently because... / Can I add something? / What do you think?" },
        ],
        workedExample: {
          problem: "The class discusses: 'What is the best season?' Two friends want to speak at once. What should they do?",
          solution: "They should take turns: one speaks while the other listens, then swap. The listener can agree or add a different idea politely.",
        },
      },
      questions: [
        {
          id: "pypl-q-u1l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a group discussion, what does 'taking turns' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the teacher may speak" },
              { id: "b", text: "Everyone talks at the same time" },
              { id: "c", text: "The loudest voice wins" },
              { id: "d", text: "One person speaks at a time while others listen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "Turn-taking means one speaker at a time with listeners waiting for their turn." },
            ],
            steps: [
              { reasoning: "Turn-taking is about sharing speaking time fairly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** One person speaks at a time while others listen",
            commonErrors: ["Choosing (a) — talking at once is not a discussion."],
          },
        },
        {
          id: "pypl-q-u1l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your friend says 'I think cats make better pets than dogs.' Give one polite way to disagree with them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Polite disagreement", statement: "Disagree by acknowledging the other idea first, then giving your own reason kindly." },
            ],
            steps: [
              { reasoning: "The response should be polite, not rude or mocking.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'I see it differently — I think dogs are better because they love to play fetch.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any polite disagreement with a reason, e.g. 'I see it differently because dogs love to play.'",
            commonErrors: ["A rude reply like 'You're wrong' — discussions need kind words."],
          },
        },
        {
          id: "pypl-q-u1l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a discussion about 'What makes a good school?', Ben keeps talking and will not let anyone else speak. Explain two ways Ben's behaviour harms the discussion and what he could do better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Group discussion norms", statement: "A discussion only works when everyone takes turns and ideas are shared." },
            ],
            steps: [
              { reasoning: "Problem 1: others cannot share their ideas, so the group only hears one view.", marks: 1, markCode: "M" },
              { reasoning: "Problem 2: people who are interrupted may stop joining in or feel unimportant.", marks: 1, markCode: "R" },
              { reasoning: "Better: Ben should say his point briefly, then listen and invite others, e.g. 'What do you think?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It stops others sharing ideas and makes them feel unwelcome; Ben should take shorter turns and invite others to speak.",
            commonErrors: ["Saying Ben is 'rude' without explaining the effect on the discussion."],
          },
        },
        {
          id: "pypl-q-u1l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class is discussing: 'Should our school have a vegetable garden?'",
          parts: [
            { label: "a", prompt: "Write one sentence you could say to share your own idea.", marks: 1 },
            { label: "b", prompt: "Write one sentence you could say to agree with a classmate and give a reason.", marks: 2 },
            { label: "c", prompt: "Write one sentence you could say to politely disagree.", marks: 2 },
            { label: "d", prompt: "Explain why it is important that everyone in a discussion takes a turn.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discussion moves", statement: "Sharing, agreeing with a reason, and disagreeing politely are the building blocks of discussion." },
            ],
            steps: [
              { part: "a", reasoning: "A clear opinion sentence, e.g. 'I think we should have a garden because we could grow food.'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Agreement with a reason, e.g. 'I agree — a garden would teach us where food comes from.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The reason supports the agreement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Polite disagreement, e.g. 'I see it differently — a garden might take too much time.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is kind in tone and gives a reason.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Turn-taking lets everyone share ideas.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Different people have different ideas; hearing them all helps the group make a better decision.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Any clear opinion. (b) Agreement + reason. (c) Polite disagreement + reason. (d) Everyone's ideas matter; turns make discussion fair.",
            commonErrors: ["In (c), a rude or reason-less disagreement."],
          },
        },
        {
          id: "pypl-q-u1l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a good group discussion, how many people should speak at the same time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two or three" },
              { id: "b", text: "One at a time" },
              { id: "c", text: "Nobody" },
              { id: "d", text: "Everyone at once" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "A discussion works when one person speaks at a time and others listen." },
            ],
            steps: [
              { reasoning: "One speaker at a time lets everyone hear and take a turn.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** One at a time",
            commonErrors: ["Choosing (a) — everyone talking at once is noise, not discussion."],
          },
        },
        {
          id: "pypl-q-u1l3c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many people should be talking at the same moment during a good discussion?",
          response: { type: "numeric", parts: [
            { label: "People talking", answer: 1 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "Only one person speaks at a time in a discussion." },
            ],
            steps: [
              { reasoning: "Good turn-taking means exactly 1 speaker at a time.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 'everyone' — that is not a discussion."],
          },
        },
        {
          id: "pypl-q-u1l3c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a polite way to disagree with a classmate's idea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say nothing and laugh at them" },
              { id: "b", text: "'Shut up, I don't agree.'" },
              { id: "c", text: "'I see it differently because...'" },
              { id: "d", text: "'You're wrong, that's silly.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Polite disagreement", statement: "Disagree kindly by acknowledging the idea, then giving your own reason." },
            ],
            steps: [
              { reasoning: "'I see it differently because...' is polite and gives a reason; the others are rude.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'I see it differently because...'",
            commonErrors: ["Choosing (a) — calling an idea 'silly' is not polite."],
          },
        },
        {
          id: "pypl-q-u1l3c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write two sentence starters you could use in a discussion — one to agree and one to add an idea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discussion sentence starters", statement: "Starters like 'I agree because...' and 'Can I add something?' help you join a discussion politely." },
            ],
            steps: [
              { reasoning: "An agreeing starter, e.g. 'I agree because...' or 'I think so too.'", marks: 1, markCode: "M" },
              { reasoning: "An adding starter, e.g. 'Can I add something?' or 'And another reason is...'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two suitable starters, e.g. 'I agree because...' and 'Can I add something?'",
            commonErrors: ["Writing rude or unclear starters instead of polite discussion moves."],
          },
        },
        {
          id: "pypl-q-u1l3c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The polite discussion habits are: wait for a pause, keep your point short, listen to others and use kind words. How many habits are there?",
          response: { type: "numeric", parts: [
            { label: "Discussion habits", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite discussion habits", statement: "Good discussion habits keep talk fair and kind." },
            ],
            steps: [
              { reasoning: "Count: wait, keep short, listen, kind words = 4 habits.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting one habit such as using kind words."],
          },
        },
        {
          id: "pypl-q-u1l3c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two friends start talking at the same time during a discussion, and neither hears the other. Explain the problem and what they should do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Turn-taking", statement: "One person speaks at a time so everyone can hear the ideas." },
            ],
            steps: [
              { reasoning: "Problem: both talk at once, so neither idea is heard clearly.", marks: 1, markCode: "M" },
              { reasoning: "They should stop and take turns — one speaks while the other listens.", marks: 1, markCode: "M" },
              { reasoning: "Then they can swap, or wait for a pause in the group discussion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Talking at once means no one is heard; take turns — one speaks, one listens, then swap.",
            commonErrors: ["Saying they should 'both keep talking louder' — louder is not turn-taking."],
          },
        },
        {
          id: "pypl-q-u1l3c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should you keep your point short during a group discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "So others get a chance to join in" },
              { id: "b", text: "So only you get to talk" },
              { id: "c", text: "It does not matter" },
              { id: "d", text: "Because short sentences are easier to spell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair discussion", statement: "Short turns give everyone a chance to share ideas." },
            ],
            steps: [
              { reasoning: "Keeping points short leaves time for others — that is fair turn-taking.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** So others get a chance to join in",
            commonErrors: ["Choosing (a) — the point is sharing, not hogging the talk."],
          },
        },
        {
          id: "pypl-q-u1l3c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why it is important to listen to what others say before you answer in a discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion skills", statement: "Listening first means your answer responds to what was actually said." },
            ],
            steps: [
              { reasoning: "If you do not listen, your answer may not match what was said.", marks: 1, markCode: "M" },
              { reasoning: "Listening lets you agree, disagree or add to the real idea.", marks: 1, markCode: "M" },
              { reasoning: "It also shows respect and helps the group build on each other's ideas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Listening first lets you respond to the actual idea, show respect and build a better discussion.",
            commonErrors: ["Saying listening is 'just being quiet' — it is active thinking about others' ideas."],
          },
        },
        {
          id: "pypl-q-u1l3c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sentence starters did we learn for discussions: agree, disagree, add something and ask what others think?",
          response: { type: "numeric", parts: [
            { label: "Sentence starters", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discussion sentence starters", statement: "Agree, disagree, add and ask are useful discussion moves." },
            ],
            steps: [
              { reasoning: "Count: agree, disagree, add, ask = 4 starters.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — missing one of the four discussion moves."],
          },
        },
        {
          id: "pypl-q-u1l3c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'building on others' ideas' mean in a discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying someone's exact words" },
              { id: "b", text: "Adding to or improving an idea someone else shared" },
              { id: "c", text: "Ignoring what others say" },
              { id: "d", text: "Talking over everyone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Building on ideas", statement: "Building on an idea means adding to it, like 'And another reason is...'" },
            ],
            steps: [
              { reasoning: "Building on ideas adds to what someone said rather than ignoring or copying it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Adding to or improving an idea someone else shared",
            commonErrors: ["Choosing (c) — copying is not building; building adds something new."],
          },
        },
        {
          id: "pypl-q-u1l3c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "During a discussion about 'best pets', Mia says 'I think dogs are best.' Which reply is the MOST polite and useful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I was talking, not you.'" },
              { id: "b", text: "'Dogs are boring.'" },
              { id: "c", text: "'Whatever.'" },
              { id: "d", text: "'I agree — dogs are loyal and fun to play with.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Polite agreement", statement: "Agreeing with a reason builds the discussion kindly." },
            ],
            steps: [
              { reasoning: "(b) agrees politely and adds a reason; the others are rude or unhelpful.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 'I agree — dogs are loyal and fun to play with.'",
            commonErrors: ["Choosing (a) — it disagrees rudely with no reason."],
          },
        },
        {
          id: "pypl-q-u1l3c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class is discussing: 'What makes a good friend?'",
          parts: [
            { label: "a", prompt: "Write one sentence sharing your own idea about good friends.", marks: 1 },
            { label: "b", prompt: "Write one sentence agreeing with an idea and giving a reason.", marks: 2 },
            { label: "c", prompt: "Write one sentence politely disagreeing with an idea.", marks: 2 },
            { label: "d", prompt: "Explain why turn-taking matters in this discussion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discussion moves", statement: "Sharing, agreeing with a reason and disagreeing politely are the building blocks of discussion." },
            ],
            steps: [
              { part: "a", reasoning: "A clear opinion sentence, e.g. 'I think a good friend is someone who shares.'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Agreement with a reason, e.g. 'I agree — sharing shows you care.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The reason supports the agreement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Polite disagreement, e.g. 'I see it differently — a good friend also listens.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is kind in tone and gives a reason or new idea.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Turn-taking lets everyone share their ideas.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Different people have different ideas about friends; hearing them all helps the group learn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Any clear opinion. (b) Agreement + reason. (c) Polite disagreement. (d) Turns make discussion fair and share all ideas.",
            commonErrors: ["In (c), a rude or reason-less disagreement."],
          },
        },
      ],
    },
    {
      id: "pypl-u1l3-c2-presenting-performing",
      title: "Presenting and performing",
      skill: "Present an object or idea to an audience and use non-verbal communication well.",
      lesson: {
        sections: [
          {
            heading: "Presenting to an audience",
            body: "A **presentation** is when you show or tell something to a group — like show-and-tell, a talk about your holiday, or a class play. Prepare first: know what you will say and in what order. Stand where everyone can see you, speak clearly, and let the **audience** listen. A short presentation is better than a long, rushed one.",
          },
          {
            heading: "Non-verbal communication",
            body: "We communicate without words too. **Facial expressions** show feelings — a smile or a frown. **Gestures** help explain — pointing at your photo, holding up an object. **Body posture** shows confidence — standing tall. In a play, actors use these non-verbal signals so the audience understands the story.",
          },
        ],
        keyFormulas: [
          { name: "Presentation checklist", statement: "Prepare → stand tall → speak clearly → show object → finish strongly" },
          { name: "Non-verbal signals", statement: "Face, hands and posture all send messages" },
        ],
        workedExample: {
          problem: "Nia is doing show-and-tell with her toy robot. How can she make it interesting?",
          solution: "Nia should hold up the robot so everyone sees it, say its name and one or two interesting facts, smile, and finish with 'Thank you for listening.'",
        },
      },
      questions: [
        {
          id: "pypl-q-u1l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of non-verbal communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Smiling at someone" },
              { id: "b", text: "Saying 'hello'" },
              { id: "c", text: "Reading a book aloud" },
              { id: "d", text: "Writing a letter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-verbal communication", statement: "Messages sent without words: facial expressions, gestures, posture." },
            ],
            steps: [
              { reasoning: "A smile sends a message without words — it is non-verbal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Smiling at someone",
            commonErrors: ["Choosing (c) — reading aloud uses words, so it is verbal."],
          },
        },
        {
          id: "pypl-q-u1l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things you should do before giving a presentation to your class.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation preparation", statement: "Good presenters prepare what they will say, practise, and check their voice and materials." },
            ],
            steps: [
              { reasoning: "One preparation step, e.g. plan what to say or practise first.", marks: 1, markCode: "M" },
              { reasoning: "Second step, e.g. check you have the object/photos ready or speak loudly enough to be heard.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: plan the talk; practise; prepare the object or pictures; check volume; stand where everyone can see.",
            commonErrors: ["Answers about the audience (e.g. 'be quiet') instead of preparing yourself."],
          },
        },
        {
          id: "pypl-q-u1l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a class play, the actor playing the giant forgets their lines and stands still with a blank face. The audience cannot tell if the giant is angry or sad. Explain how the actor could use non-verbal communication to fix this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Non-verbal acting", statement: "Actors use face, gesture and posture to show feelings and meaning to the audience." },
            ],
            steps: [
              { reasoning: "The actor could use a facial expression — a frown for angry, a sad face for sad.", marks: 1, markCode: "M" },
              { reasoning: "Gestures and posture help too — stamping feet for anger, slumping shoulders for sadness.", marks: 1, markCode: "M" },
              { reasoning: "With these signals the audience can understand the giant's feelings even without words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use facial expressions, gestures and posture to show whether the giant is angry or sad.",
            commonErrors: ["Saying the actor should 'shout louder' — the problem is missing non-verbal signals."],
          },
        },
        {
          id: "pypl-q-u1l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You must give a two-minute talk to your class about your favourite animal.",
          parts: [
            { label: "a", prompt: "Write the three things you would prepare before the talk.", marks: 2 },
            { label: "b", prompt: "Describe how you would use your voice during the talk.", marks: 2 },
            { label: "c", prompt: "Describe one gesture or facial expression you could use.", marks: 1 },
            { label: "d", prompt: "Explain how the audience can tell you are confident.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effective presentation", statement: "Preparation, clear voice, non-verbal signals and confidence all make a good presentation." },
            ],
            steps: [
              { part: "a", reasoning: "Plan what to say in order (beginning, facts, end).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Practise and prepare any pictures or objects.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Speak loudly enough and at a steady pace, not too fast.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Say words clearly and pause at the end of sentences.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any sensible gesture/expression, e.g. smile, hold up a picture, point at the class.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Confidence shows through standing tall and looking at the audience.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It also shows through a steady voice and not rushing or hiding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Plan, practise, prepare materials. (b) Loud enough, steady, clear. (c) Any sensible gesture. (d) Tall posture, eye contact, steady voice.",
            commonErrors: ["In (d), saying confidence is 'not being nervous' — signs of confidence are observable behaviours."],
          },
        },
        {
          id: "pypl-q-u1l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The people who listen to or watch a presentation are called the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Audience" },
              { id: "b", text: "Speakers" },
              { id: "c", text: "Actors" },
              { id: "d", text: "Writers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The audience is the group of people who listen to or watch a speaker or performer." },
            ],
            steps: [
              { reasoning: "The people watching a presentation are the audience.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Audience",
            commonErrors: ["Choosing 'actors' — actors perform; the audience watches."],
          },
        },
        {
          id: "pypl-q-u1l3c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The presentation checklist has five steps: prepare, stand tall, speak clearly, show the object and finish strongly. How many steps are on the checklist?",
          response: { type: "numeric", parts: [
            { label: "Checklist steps", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation checklist", statement: "The checklist covers preparing, posture, voice, showing the object and finishing." },
            ],
            steps: [
              { reasoning: "Count the steps: prepare, stand tall, speak clearly, show object, finish = 5.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering 4 — forgetting one step such as finishing strongly."],
          },
        },
        {
          id: "pypl-q-u1l3c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of non-verbal communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saying 'thank you'" },
              { id: "b", text: "Holding up a photo for everyone to see" },
              { id: "c", text: "Writing a letter" },
              { id: "d", text: "Reading a story aloud" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-verbal communication", statement: "Messages sent without words: gestures, facial expressions and posture." },
            ],
            steps: [
              { reasoning: "Holding up a photo is a gesture — it communicates without words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Holding up a photo for everyone to see",
            commonErrors: ["Choosing (a) — 'thank you' uses words, so it is verbal."],
          },
        },
        {
          id: "pypl-q-u1l3c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things you should do to prepare before giving a presentation to your class.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation preparation", statement: "Good presenters plan what to say, practise and prepare their materials and voice." },
            ],
            steps: [
              { reasoning: "One preparation step, e.g. plan what to say or practise first.", marks: 1, markCode: "M" },
              { reasoning: "Second step, e.g. get the object or pictures ready, or check your voice is loud enough.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: plan the talk; practise; prepare object/pictures; check volume; decide where to stand.",
            commonErrors: ["Answers about the audience (e.g. 'be quiet') instead of preparing yourself."],
          },
        },
        {
          id: "pypl-q-u1l3c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Three non-verbal signals were named: facial expressions, gestures and body posture. How many signals are there?",
          response: { type: "numeric", parts: [
            { label: "Non-verbal signals", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-verbal communication", statement: "Face, hands and posture all send messages without words." },
            ],
            steps: [
              { reasoning: "Count: facial expressions, gestures, body posture = 3 signals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one signal such as body posture."],
          },
        },
        {
          id: "pypl-q-u1l3c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a class play, the actor playing the queen forgets a line and stands still with a blank face. The audience cannot tell how the queen feels. Explain how the actor could use non-verbal communication to fix this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Non-verbal acting", statement: "Actors use face, gestures and posture to show feelings to the audience." },
            ],
            steps: [
              { reasoning: "The actor could use a facial expression — a smile for happy, a frown for cross.", marks: 1, markCode: "M" },
              { reasoning: "Gestures and posture help too — arms crossed for angry, slumped shoulders for sad.", marks: 1, markCode: "M" },
              { reasoning: "With these signals the audience understands the queen's feelings even without the line.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use facial expressions, gestures and posture to show the queen's feelings.",
            commonErrors: ["Saying the actor should 'shout the line louder' — the problem is missing non-verbal signals."],
          },
        },
        {
          id: "pypl-q-u1l3c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Where should you stand when giving a presentation so the audience can see you best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It does not matter" },
              { id: "b", text: "In the corner facing the wall" },
              { id: "c", text: "Where everyone can see you" },
              { id: "d", text: "Behind a big desk" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation position", statement: "Stand where the whole audience can see you." },
            ],
            steps: [
              { reasoning: "Visible position lets everyone see your face, gestures and the object.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Where everyone can see you",
            commonErrors: ["Choosing (a) — hiding behind furniture blocks the audience's view."],
          },
        },
        {
          id: "pypl-q-u1l3c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is a short, well-prepared presentation better than a long, rushed one?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effective presenting", statement: "Short presentations are easier to deliver clearly and more enjoyable to watch." },
            ],
            steps: [
              { reasoning: "A short talk gives you time to speak clearly and not rush.", marks: 1, markCode: "M" },
              { reasoning: "Preparation means you know exactly what to say in order.", marks: 1, markCode: "M" },
              { reasoning: "A rushed long talk is confusing and tiring for the audience; a short strong one finishes well.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Short and prepared lets you speak clearly, finish strongly and keep the audience interested.",
            commonErrors: ["Saying longer is always better — clarity matters more than length."],
          },
        },
        {
          id: "pypl-q-u1l3c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many facial expressions were named as examples: a smile and a frown?",
          response: { type: "numeric", parts: [
            { label: "Facial expressions", answer: 2 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Facial expressions", statement: "A smile and a frown are facial expressions that show feelings." },
            ],
            steps: [
              { reasoning: "Count: smile, frown = 2 expressions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1 — there are two examples."],
          },
        },
        {
          id: "pypl-q-u1l3c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these shows that a presenter is confident?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Looking at the floor" },
              { id: "b", text: "Hiding behind the teacher" },
              { id: "c", text: "Standing tall and looking at the audience" },
              { id: "d", text: "Reading as fast as possible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Showing confidence", statement: "Confidence shows through tall posture, eye contact and a steady voice." },
            ],
            steps: [
              { reasoning: "Standing tall and looking at the audience are clear signs of confidence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Standing tall and looking at the audience",
            commonErrors: ["Choosing (d) — looking at the floor shows nervousness, not confidence."],
          },
        },
        {
          id: "pypl-q-u1l3c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST way to finish a show-and-tell presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keep talking until someone stops you" },
              { id: "b", text: "Walk away without a word" },
              { id: "c", text: "'That's everything, bye.'" },
              { id: "d", text: "'Thank you for listening.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Finishing a presentation", statement: "A polite thank-you gives the talk a strong, friendly finish." },
            ],
            steps: [
              { reasoning: "'Thank you for listening' politely closes the presentation; the others end carelessly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 'Thank you for listening.'",
            commonErrors: ["Choosing (a) — 'that's everything' sounds unfinished, not a strong finish."],
          },
        },
        {
          id: "pypl-q-u1l3c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are doing show-and-tell with a model bridge you built.",
          parts: [
            { label: "a", prompt: "Write two things you would prepare before your turn.", marks: 2 },
            { label: "b", prompt: "Describe how you would use your voice during the talk.", marks: 2 },
            { label: "c", prompt: "Describe one gesture you could use to show the bridge.", marks: 1 },
            { label: "d", prompt: "Explain how the audience can tell you are confident.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effective presentation", statement: "Preparation, clear voice, non-verbal signals and confidence make a good presentation." },
            ],
            steps: [
              { part: "a", reasoning: "Plan what to say in order (beginning, facts, end).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Practise and make sure the bridge is ready to show.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Speak loudly enough and at a steady pace.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Say words clearly and pause at the end.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any sensible gesture, e.g. hold up the bridge, point at its parts, spread arms wide.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Confidence shows through standing tall and looking at the audience.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It also shows through a steady voice and not rushing or hiding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Plan + practise/prepare bridge. (b) Loud enough, steady, clear. (c) Any sensible gesture. (d) Tall posture, eye contact, steady voice.",
            commonErrors: ["In (c), a gesture that blocks the object instead of showing it."],
          },
        },
      ],
    },
  ],
};
