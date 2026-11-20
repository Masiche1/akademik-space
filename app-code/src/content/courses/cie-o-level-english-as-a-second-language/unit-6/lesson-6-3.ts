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
            { id: "a", text: "Waiting for a pause before speaking" },
            { id: "b", text: "Speaking as fast as possible" },
            { id: "c", text: "Interrupting constantly" },
            { id: "d", text: "Only listening" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Have a clear opening, points and close" },
            { id: "b", text: "Read every word from notes" },
            { id: "c", text: "Speak as fast as possible" },
            { id: "d", text: "Avoid eye contact" },
          ], correctChoiceId: "a" },
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
