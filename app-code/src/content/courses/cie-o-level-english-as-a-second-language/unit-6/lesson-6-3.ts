import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "oles-u6-lesson-6-3",
  code: "6-3",
  title: "Discussion and presentation skills",
  goal: "I CAN take part in discussions and deliver short presentations.",
  standards: ["1120 Speaking: interaction"],
  vocabulary: [
    { term: "Discussion", definition: "A talk between two or more people exchanging views." },
    { term: "Turn-taking", definition: "The polite rhythm of speaking and listening in conversation." },
    { term: "Presentation", definition: "A short talk given to an audience on a topic." },
    { term: "Eye contact", definition: "Looking at your audience while speaking." },
    { term: "Extension", definition: "Adding more to what someone said — 'That's interesting, and...'." },
  ],
  concepts: [
    {
      id: "oles-u6-discussion",
      title: "Taking part in discussions",
      skill: "Contribute, listen and extend in spoken interaction.",
      lesson: {
        sections: [
          { heading: "Turn-taking", body: "In a discussion, wait for a natural pause before speaking — interrupting constantly is impolite and loses marks. When the other person finishes, respond to what they said, then add your point." },
          { heading: "Extending and agreeing", body: "Useful phrases: 'That's a good point, and...', 'I agree because...', 'On the other hand...', 'Could you explain what you mean?' Extending shows you are really listening — a key speaking skill." },
        ],
        keyFormulas: [
          { name: "Discussion", statement: "Listen → respond → extend; wait for pauses; use linking phrases." },
        ],
        workedExample: {
          problem: "Partner says 'I think homework is useful.' How do you extend?",
          solution: "'I agree it helps learning, and it also teaches time management — what do you think?' — agrees, adds a new point, returns the turn.",
        },
      },
      questions: [
        {
          id: "oles-u6-di-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Turn-taking means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only listening" },
            { id: "b", text: "Waiting for a pause before speaking" },
            { id: "c", text: "Speaking as fast as possible" },
            { id: "d", text: "Interrupting constantly" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Turn-taking", statement: "Polite rhythm of speaking/listening." }], steps: [{ reasoning: "Wait for pauses; don't interrupt.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Waiting for pauses" },
        },
        {
          id: "oles-u6-di-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two phrases for extending a discussion.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Extension phrases", statement: "Add to and respond to partner's point." }], steps: [
            { reasoning: "Any two: 'That's interesting, and...', 'I agree because...', 'On the other hand...', 'Could you explain?'.", marks: 1, markCode: "AO2" },
            { reasoning: "Both valid.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'That's a good point, and...' / 'I agree because...'" },
        },
        {
          id: "oles-u6-di-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why responding to your partner's point matters in a discussion.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Interaction", statement: "Responding shows real listening." }], steps: [
            { reasoning: "A discussion is an exchange, not two monologues.", marks: 1, markCode: "AO2" },
            { reasoning: "Responding proves you heard and understood.", marks: 1, markCode: "AO2" },
            { reasoning: "Examiners reward genuine interaction over rehearsed speeches.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Responding shows listening and makes it a real exchange." },
        },
        {
          id: "oles-u6-di-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Discussion skills review.",
          parts: [
            { label: "a", prompt: "What is turn-taking?", marks: 2 },
            { label: "b", prompt: "Name two extension phrases.", marks: 2 },
            { label: "c", prompt: "Why is interrupting bad?", marks: 2 },
            { label: "d", prompt: "How do you show you are listening?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Discussion", statement: "Wait, respond, extend." }], steps: [
            { part: "a", reasoning: "The polite rhythm of waiting for pauses to speak.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two valid extension phrases.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "It is rude and breaks the exchange; you lose the other speaker's point.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Respond to their points, use their ideas, ask follow-up questions.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Concrete behaviours.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) wait for pauses (b) two phrases (c) rude+loses point (d) respond+ask",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u6-di-q5", difficulty: "foundation", totalMarks: 1,
          stem: "When your partner finishes speaking, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Interrupt them immediately" },
            { id: "b", text: "Respond to their point, then add your own" },
            { id: "c", text: "Change the subject completely" },
            { id: "d", text: "Stay silent for the rest" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Turn-taking", statement: "Listen → respond → extend." }], steps: [{ reasoning: "Responding then adding keeps the exchange going.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** respond then add" },
        },
        {
          id: "oles-u6-di-q6", difficulty: "core", totalMarks: 2,
          stem: "'That's a good point, and...' is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Interrupt the speaker" },
            { id: "b", text: "Only to agree" },
            { id: "c", text: "Extend the discussion" },
            { id: "d", text: "End the conversation" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Extension", statement: "Add to what was said." }], steps: [
            { reasoning: "It extends the partner's point with more.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** extend" },
        },
        {
          id: "oles-u6-di-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many extension phrases appear in: 'I agree because... On the other hand... That's interesting, and...'?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Extension phrases", statement: "Count the phrases." }], steps: [
            { reasoning: "'I agree because', 'On the other hand', 'That's interesting, and' → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u6-di-q8", difficulty: "core", totalMarks: 2,
          stem: "Which is the most polite way to disagree?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'Be quiet.'" },
            { id: "b", text: "'Whatever.'" },
            { id: "c", text: "'You're completely wrong.'" },
            { id: "d", text: "'I see your point, but...'" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Polite disagreement", statement: "Acknowledge then counter." }], steps: [
            { reasoning: "Acknowledging the partner's point before disagreeing is polite.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** acknowledge then disagree" },
        },
        {
          id: "oles-u6-di-q9", difficulty: "core", totalMarks: 2,
          stem: "Give two phrases for agreeing and two for disagreeing politely.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discussion phrases", statement: "Agree and disagree politely." }], steps: [
            { reasoning: "Agreeing: 'I agree', 'That's a good point'.", marks: 1, markCode: "AO2" },
            { reasoning: "Disagreeing politely: 'I see your point, but', 'On the other hand'.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Agree: 'I agree', 'good point'. Disagree: 'I see your point, but', 'on the other hand'." },
        },
        {
          id: "oles-u6-di-q10", difficulty: "core", totalMarks: 1,
          stem: "How many people should be speaking at the same time in a pair discussion?",
          response: { type: "numeric", parts: [ { label: "a", answer: 1 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Turn-taking", statement: "One speaker at a time." }], steps: [
            { reasoning: "Turn-taking means one speaker at a time → 1.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "1" },
        },
        {
          id: "oles-u6-di-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Why does responding to your partner's specific point score better than giving a memorised speech?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Examiners cannot hear memorised answers" },
            { id: "b", text: "It proves you are really listening and interacting" },
            { id: "c", text: "Partner's points are always correct" },
            { id: "d", text: "Memorised speeches are always wrong" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Interaction", statement: "Genuine exchange is rewarded." }], steps: [
            { reasoning: "Responding shows real listening — a key speaking skill.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** shows real interaction" },
        },
        {
          id: "oles-u6-di-q12", difficulty: "challenge", totalMarks: 2,
          stem: "How many people take part in a typical pair discussion?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Discussion", statement: "Pair = two speakers." }], steps: [
            { reasoning: "A pair discussion involves two speakers.", marks: 1, markCode: "AO1" },
            { reasoning: "Count is correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u6-di-q13", difficulty: "foundation", totalMarks: 1,
          stem: "'Could you explain what you mean?' is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ask for clarification" },
            { id: "b", text: "Show strong agreement" },
            { id: "c", text: "End the discussion" },
            { id: "d", text: "Change the subject" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Clarification", statement: "Ask when unsure." }], steps: [{ reasoning: "It asks the partner to explain further.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** ask for clarification" },
        },
        {
          id: "oles-u6-di-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how turn-taking and extension phrases work together in a good discussion.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Discussion", statement: "Wait, respond, extend." }], steps: [
            { reasoning: "Turn-taking means waiting for a pause before speaking.", marks: 1, markCode: "AO2" },
            { reasoning: "Extension phrases let you add to your partner's point.", marks: 1, markCode: "AO2" },
            { reasoning: "Together they create a polite, flowing exchange.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Wait for pauses, then respond and extend with linking phrases." },
        },
        {
          id: "oles-u6-di-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many main skills does the lesson name for discussions: listen, respond, extend?",
          response: { type: "numeric", parts: [ { label: "a", answer: 3 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Discussion", statement: "Count the skills." }], steps: [
            { reasoning: "listen, respond, extend → 3.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "3" },
        },
        {
          id: "oles-u6-di-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which behaviour shows the best discussion skills?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only listen and never speak" },
            { id: "b", text: "Talk about an unrelated topic" },
            { id: "c", text: "Wait for a pause, respond to the partner's point, add your own" },
            { id: "d", text: "Interrupt constantly to speak first" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Discussion", statement: "Listen → respond → extend." }], steps: [
            { reasoning: "This is the full polite exchange cycle.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** wait-respond-extend" },
        },
      ],
    },
    {
      id: "oles-u6-presentation",
      title: "Short presentations",
      skill: "Deliver a clear short talk with structure and presence.",
      lesson: {
        sections: [
          { heading: "Presentation structure", body: "Open with a greeting and your topic, give 2-3 main points in order, then close with a summary or thanks. Keep it simple — a clear short talk beats a confused long one." },
          { heading: "Delivery", body: "Speak to the audience, not your notes. Use eye contact, reasonable pace (not too fast), and clear pronunciation of key words. Pausing briefly at the end of a point sounds confident, not weak." },
        ],
        keyFormulas: [
          { name: "Presentation", statement: "Greeting → topic → 2-3 points → summary; eye contact + steady pace." },
        ],
        workedExample: {
          problem: "You must present 'My favourite hobby' for 2 minutes. Structure?",
          solution: "'Hello, today I'll talk about...' → what the hobby is → why you enjoy it → what you recommend. Close: 'Thank you.'",
        },
      },
      questions: [
        {
          id: "oles-u6-ps-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A good presentation should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Avoid eye contact" },
            { id: "b", text: "Have a clear opening, points and close" },
            { id: "c", text: "Speak as fast as possible" },
            { id: "d", text: "Read every word from notes" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Presentation", statement: "Structured open-points-close." }], steps: [{ reasoning: "Clear structure helps the audience follow.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Clear structure" },
        },
        {
          id: "oles-u6-ps-q2", difficulty: "core", totalMarks: 2,
          stem: "Why is eye contact important when presenting?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Eye contact", statement: "Connects speaker to audience." }], steps: [
            { reasoning: "It shows confidence and keeps the audience engaged.", marks: 1, markCode: "AO2" },
            { reasoning: "It helps you check the audience is following.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Eye contact engages the audience and shows confidence." },
        },
        {
          id: "oles-u6-ps-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to structure a two-minute presentation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Talk structure", statement: "Greeting, topic, 2-3 points, close." }], steps: [
            { reasoning: "Open with greeting and topic statement.", marks: 1, markCode: "AO2" },
            { reasoning: "Give 2-3 main points in a logical order.", marks: 1, markCode: "AO2" },
            { reasoning: "Close with a brief summary or thank you.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear structure.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Greeting → topic → 2-3 points → summary/thanks." },
        },
        {
          id: "oles-u6-ps-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Presentation skills review.",
          parts: [
            { label: "a", prompt: "Name the presentation parts.", marks: 2 },
            { label: "b", prompt: "Why use eye contact?", marks: 2 },
            { label: "c", prompt: "What pace should you speak at?", marks: 2 },
            { label: "d", prompt: "How many main points is ideal?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Presentation", statement: "Structure + presence + pace." }], steps: [
            { part: "a", reasoning: "Greeting, topic, main points, closing.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "All parts.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Engages audience and shows confidence.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Steady and clear — not too fast, not too slow.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct pace.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Two to three — enough to fill time without rushing.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Reasonable number.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Justified.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) four parts (b) engagement (c) steady (d) 2-3 points",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u6-ps-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A presentation should open with…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A greeting and your topic" },
            { id: "b", text: "Complete silence" },
            { id: "c", text: "Your conclusion" },
            { id: "d", text: "An unrelated joke" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Presentation", statement: "Greeting → topic → points → close." }], steps: [{ reasoning: "Open with greeting and topic statement.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** greeting and topic" },
        },
        {
          id: "oles-u6-ps-q6", difficulty: "core", totalMarks: 2,
          stem: "How many main points is ideal for a short presentation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Twenty" },
            { id: "b", text: "Two to three" },
            { id: "c", text: "One" },
            { id: "d", text: "Ten" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Presentation", statement: "2-3 main points fill time without rushing." }], steps: [
            { reasoning: "2-3 points is the recommended range.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** two to three" },
        },
        {
          id: "oles-u6-ps-q7", difficulty: "foundation", totalMarks: 1,
          stem: "How many parts does the recommended presentation structure have: greeting, topic, points, close?",
          response: { type: "numeric", parts: [ { label: "a", answer: 4 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Presentation structure", statement: "Count the parts." }], steps: [
            { reasoning: "greeting, topic, points, close → 4.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "4" },
        },
        {
          id: "oles-u6-ps-q8", difficulty: "core", totalMarks: 2,
          stem: "Reading every word from your notes while presenting…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shows excellent preparation" },
            { id: "b", text: "Is the best delivery method" },
            { id: "c", text: "Sounds unnatural and loses audience contact" },
            { id: "d", text: "Is required by examiners" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Delivery", statement: "Speak to the audience, not notes." }], steps: [
            { reasoning: "Reading from notes sounds unnatural and breaks eye contact.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** sounds unnatural" },
        },
        {
          id: "oles-u6-ps-q9", difficulty: "core", totalMarks: 2,
          stem: "Write an opening sentence for a two-minute talk about your favourite hobby.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Presentation", statement: "Greeting + topic." }], steps: [
            { reasoning: "Includes a greeting, e.g. 'Hello everyone'.", marks: 1, markCode: "AO2" },
            { reasoning: "States the topic, e.g. 'Today I'll talk about my favourite hobby'.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'Hello everyone, today I'll talk about my favourite hobby.'" },
        },
        {
          id: "oles-u6-ps-q10", difficulty: "core", totalMarks: 1,
          stem: "A 2-minute talk has 3 main points. Roughly how many seconds does each point get?",
          response: { type: "numeric", parts: [ { label: "a", answer: 40, unit: "s" } ] },
          markscheme: { principles: [{ kind: "skill", name: "Pacing", statement: "Distribute time across points." }], steps: [
            { reasoning: "120 seconds ÷ 3 points = 40 seconds each.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "40" },
        },
        {
          id: "oles-u6-ps-q11", difficulty: "challenge", totalMarks: 2,
          stem: "A brief pause at the end of a point in a presentation sounds…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Confident and controlled" },
            { id: "b", text: "Rude to the audience" },
            { id: "c", text: "Weak and unsure" },
            { id: "d", text: "Confusing" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Delivery", statement: "Pausing signals confidence." }], steps: [
            { reasoning: "A deliberate pause marks the end of a point confidently.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** confident" },
        },
        {
          id: "oles-u6-ps-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A talk has 4 main points and runs long. If you cut it to 2 points, how many points did you remove?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2 } ] },
          markscheme: { principles: [{ kind: "skill", name: "Presentation", statement: "2-3 points is ideal." }], steps: [
            { reasoning: "4 − 2 = 2 points removed.", marks: 1, markCode: "AO1" },
            { reasoning: "Calculation correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u6-ps-q13", difficulty: "foundation", totalMarks: 1,
          stem: "'Eye contact' means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reading your notes carefully" },
            { id: "b", text: "Making eye-shaped gestures" },
            { id: "c", text: "Speaking very quickly" },
            { id: "d", text: "Looking at your audience while speaking" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Eye contact", statement: "Looking at the audience." }], steps: [{ reasoning: "Eye contact connects speaker and audience.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** looking at the audience" },
        },
        {
          id: "oles-u6-ps-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a clear short talk beats a long confused one.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Presentation", statement: "Clarity beats length." }], steps: [
            { reasoning: "Audiences follow structure better than long unstructured talks.", marks: 1, markCode: "AO2" },
            { reasoning: "A confused talk loses the audience's attention and marks.", marks: 1, markCode: "AO2" },
            { reasoning: "A short clear talk covers the required points fully.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Clarity and structure beat length — the audience follows and marks are higher." },
        },
        {
          id: "oles-u6-ps-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many minutes is the example presentation given in the lesson?",
          response: { type: "numeric", parts: [ { label: "a", answer: 2, unit: "min" } ] },
          markscheme: { principles: [{ kind: "skill", name: "Presentation", statement: "Example talk length." }], steps: [
            { reasoning: "The worked example is a two-minute talk.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "2" },
        },
        {
          id: "oles-u6-ps-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Which closing is best for a presentation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stopping suddenly mid-sentence" },
            { id: "b", text: "'I forgot the rest.'" },
            { id: "c", text: "'Thank you for listening.'" },
            { id: "d", text: "'Um... that's all.'" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Presentation", statement: "Close politely." }], steps: [
            { reasoning: "A brief polite close signals the end confidently.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** thank you for listening" },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u6-6-3-notes", title: "Discussion and presentations — notes", summary: "Interact politely and present with structure.",
      sections: [
        { heading: "Discussion", body: "Wait for pauses, respond to partner's points, extend with linking phrases." },
        { heading: "Presentation", body: "Greeting → topic → 2-3 points → close. Eye contact, steady pace, clear pronunciation." },
      ] },
  ],
};
