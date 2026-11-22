import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cipe-u1-lesson-1-13",
  code: "1-13",
  title: "Stage 2 — Speaking, Listening and Responding",
  goal: "I CAN speak clearly, listen carefully, follow instructions and respond appropriately in talk.",
  standards: ["Cambridge Primary English 0058 Stage 2: speaking and listening",
  "Cambridge Primary English 0058 framework substrands: 2SLm, 2SLs, 2SLg, 2SLp, 2SLr"],
  stage: 2,
  vocabulary: [
    { term: "Audience", definition: "The people listening to you speak or perform." },
    { term: "Respond", definition: "Reply or react to what someone else says." },
    { term: "Instruction", definition: "Words that tell you what to do." },
    { term: "Take turns", definition: "Wait for your chance to speak in a conversation." },
    { term: "Performance", definition: "Reading or acting aloud for listeners." },
    { term: "Evaluate", definition: "Think about how well something was done." },
  ],
  concepts: [
    {
      id: "cipe-u1-s13-speaking",
      title: "Clear talk, careful listening and response",
      skill: "Use speaking and listening skills for everyday communication at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Making yourself understood",
            body: "Speak clearly and loudly enough for listeners. Give relevant information — answer the question asked. Use words your listener understands; adapt to who is listening (teacher vs friend). Show you are listening by responding to what was said.",
          },
          {
            heading: "Group work and performance",
            body: "In group talk, take turns, build on others' ideas and stay on the topic. For performance — reading aloud or simple drama — speak clearly, face the audience and use expression. Afterwards, evaluate: what went well, what could improve?",
          },
        ],
        keyFormulas: [
          { name: "Clear talk", statement: "audible, relevant, audience-appropriate" },
          { name: "Listening", statement: "respond to what was said, not what you expected" },
        ],
        workedExample: {
          problem: "In a group discussion about pets, how should you take part?",
          solution: "Wait for a turn, say your idea clearly, listen to others, then build on or respond to their points — e.g. 'I agree with Sam, and I think dogs need more exercise than cats.'",
        },
      },
      questions: [
        {
          id: "cipe-u1-sl2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When someone gives you an instruction like 'line up quietly', what should you do first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ask a different person" },
            { id: "b", text: "Listen carefully, then do it" },
            { id: "c", text: "Start talking about something else" },
            { id: "d", text: "Ignore it" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Showing understanding", statement: "Listen and respond appropriately." }],
            steps: [{ reasoning: "Follow the instruction after listening.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Listen carefully, then do it",
          },
        },
        {
          id: "cipe-u1-sl2-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two ways to show you are listening during a conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Active listening", statement: "Respond and show attention." }],
            steps: [
              { reasoning: "e.g. look at the speaker.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. respond to what they said or ask a question.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. eye contact, relevant response",
          },
        },
        {
          id: "cipe-u1-sl2-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your friend says 'I think football is the best sport.' Write a response that shows you listened and disagrees politely.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Polite response", statement: "Acknowledge then give own view." }],
            steps: [
              { reasoning: "Acknowledges friend's point.", marks: 1, markCode: "AO2" },
              { reasoning: "Gives own different view politely.", marks: 1, markCode: "AO2" },
              { reasoning: "Full sentence response.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'I see why you like it, but I think swimming is better because…'",
          },
        },
        {
          id: "cipe-u1-sl2-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Your class is preparing a short performance of a story. (a) Describe two ways to speak clearly to the audience. (b) Explain why taking turns matters in group rehearsal. (c) Give an example of building on someone else's idea in discussion. (d) After performing, write two sentences evaluating what went well and what could improve. (e) Why is it important to adapt how you speak for different listeners?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speaking and listening", statement: "Clarity, turn-taking, building, evaluating, adapting." }],
            steps: [
              { reasoning: "(a) Two valid clarity techniques (volume, pace, facing audience).", marks: 1, markCode: "AO2" },
              { reasoning: "(b) Turn-taking lets everyone contribute and avoids confusion.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Example extends another's idea.", marks: 1, markCode: "AO2" },
              { reasoning: "(d) Two evaluative sentences (positive + improvement).", marks: 2, markCode: "AO3" },
              { reasoning: "(e) Different audiences need different language/detail.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts addressed with appropriate detail.", marks: 1, markCode: "AO3" },
              { reasoning: "Accurate use of discussion/performance vocabulary.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Clear delivery, turn-taking, building on ideas, self-evaluation, audience adaptation.",
            levels: [
              { level: "3", marks: "7-8", descriptor: "All parts covered with clear, audience-aware detail and accurate vocabulary." },
              { level: "2", marks: "4-6", descriptor: "Most parts covered with some relevant detail; evaluation present but brief." },
              { level: "1", marks: "1-3", descriptor: "Limited coverage; few valid points; little detail." },
            ],
          },
        },
        {
          id: "cipe-u1-sl2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who is the 'audience' when you give a talk?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Your friends only" },
            { id: "b", text: "The people listening to you" },
            { id: "c", text: "The book you are reading" },
            { id: "d", text: "The teacher only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Audience", statement: "People listening to you speak." }],
            steps: [{ reasoning: "The audience is everyone listening.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The people listening to you",
          },
        },
        {
          id: "cipe-u1-sl2-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a group conversation, what does 'taking turns' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wait for your chance to speak" },
            { id: "b", text: "Everyone speaks at the same time" },
            { id: "c", text: "Only the loudest person talks" },
            { id: "d", text: "Nobody speaks" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Take turns", statement: "Wait for your chance to speak." }],
            steps: [{ reasoning: "Taking turns means waiting and letting others speak.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Wait for your chance to speak",
          },
        },
        {
          id: "cipe-u1-sl2-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the sentence 'Please listen carefully now'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "Please-listen-carefully-now = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u1-sl2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Your partner says 'I think summer is the best season.' Which reply best shows you listened and builds on their idea?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'I agree — and I love swimming in summer.'" },
            { id: "b", text: "'Summer is boring.'" },
            { id: "c", text: "'What is your favourite colour?'" },
            { id: "d", text: "'I am going now.'" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Building on ideas", statement: "Respond to what was said and extend it." }],
            steps: [{ reasoning: "Option b agrees and adds a related idea.", marks: 1, markCode: "AO2" }],
            finalAnswer: "'I agree — and I love swimming in summer.'",
          },
        },
        {
          id: "cipe-u1-sl2-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three of these are ways to show you are listening: look at the speaker, answer their question, daydream. How many are real ways to show listening? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Active listening", statement: "Attention and relevant response." }],
            steps: [
              { reasoning: "Looking at the speaker and answering show listening; daydreaming does not.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u1-sl2-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Give one thing you can do to help everyone hear you during a performance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Clear delivery", statement: "Speak audibly to the audience." }],
            steps: [{ reasoning: "e.g. speak loudly and clearly / face the audience.", marks: 1, markCode: "AO2" }],
            finalAnswer: "e.g. speak loudly and clearly",
          },
        },
        {
          id: "cipe-u1-sl2-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When is it most important to adapt how you speak?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only in writing" },
            { id: "b", text: "For different listeners, like a teacher or a younger child" },
            { id: "c", text: "Never" },
            { id: "d", text: "Only when talking to friends" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Audience adaptation", statement: "Match speech to the listener." }],
            steps: [{ reasoning: "Different audiences need different words and detail.", marks: 1, markCode: "AO3" }],
            finalAnswer: "For different listeners",
          },
        },
        {
          id: "cipe-u1-sl2-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the sentence 'We will perform tomorrow morning'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "We-will-perform-tomorrow-morning = 5 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u1-sl2-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why taking turns is important in a group discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Turn-taking", statement: "Fair contribution and clear talk." }],
            steps: [
              { reasoning: "Everyone gets a chance to contribute.", marks: 1, markCode: "AO2" },
              { reasoning: "It stops people talking over each other.", marks: 1, markCode: "AO2" },
              { reasoning: "Ideas are heard and built on fairly.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fair turns; no talking over; all ideas heard",
          },
        },
        {
          id: "cipe-u1-sl2-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is NOT a way to show you are listening?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Looking at the speaker" },
            { id: "b", text: "Fiddling with your pencil the whole time" },
            { id: "c", text: "Asking a question about what they said" },
            { id: "d", text: "Answering their question" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Active listening", statement: "Attention and relevant response." }],
            steps: [{ reasoning: "Fiddling shows inattention, not listening.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Fiddling with your pencil",
          },
        },
        {
          id: "cipe-u1-sl2-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan how you will take part in a class discussion about your favourite book. Give three things you will do.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discussion skills", statement: "Turn-taking, clarity, building." }],
            steps: [
              { reasoning: "Wait for my turn before speaking.", marks: 1, markCode: "AO3" },
              { reasoning: "Say my idea clearly and loudly enough.", marks: 1, markCode: "AO3" },
              { reasoning: "Listen to others and respond to their ideas.", marks: 1, markCode: "AO3" },
              { reasoning: "Three sensible, distinct contributions planned.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. take turns; speak clearly; listen and build on others",
          },
        },
        {
          id: "cipe-u1-sl2-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You must give the class an instruction, e.g. for a game. Describe three things you will do so everyone understands and follows it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Giving instructions", statement: "Clarity, order, checking." }],
            steps: [
              { reasoning: "Speak clearly and loudly so everyone hears.", marks: 1, markCode: "AO3" },
              { reasoning: "Give the steps in order, one at a time.", marks: 1, markCode: "AO3" },
              { reasoning: "Check that people understood, e.g. ask them to repeat it.", marks: 1, markCode: "AO3" },
              { reasoning: "Three distinct, sensible instruction-giving skills.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. speak clearly; give steps in order; check understanding",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-sl2-notes",
      title: "Speaking and listening — notes",
      summary: "Speak clearly for the audience, take turns, build on others' ideas, evaluate performances.",
      sections: [
        { heading: "Clear talk", body: "Volume, pace, facing the listener, relevant content." },
        { heading: "Listening", body: "Respond to what was actually said; show attention." },
      ],
    },
  ],
};
