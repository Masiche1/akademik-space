import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mla4-u2-lesson-2-1",
  code: "2-1",
  title: "Participating in Discussions and Presentations",
  goal: "I CAN take part in formal discussions and give a short structured presentation with clear language and examples.",
  standards: [
    "MYP Language Acquisition",
    "Criterion C: Speaking",
    "Criterion D: Writing",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Discussion", definition: "A conversation in which people exchange ideas about a topic." },
    { term: "Presentation", definition: "A short organised talk that explains or argues an idea." },
    { term: "Audience", definition: "The people listening to a presentation or discussion." },
    { term: "Example", definition: "A specific case used to support an idea." },
    { term: "Conclusion", definition: "The final statement that summarises the main point." },
  ],
  concepts: [
    {
      id: "mla4-u2-class-discussion",
      title: "Joining class discussions",
      skill: "Use polite phrases, agree or disagree clearly and ask useful questions in class discussions.",
      lesson: {
        sections: [
          {
            heading: "Useful discussion language",
            body: "To join a discussion, use phrases such as 'I agree because...', 'I see your point, but...', 'Could you explain...?' and 'For example...'. These phrases show respect and help the conversation stay organised.",
          },
          {
            heading: "Agreeing and disagreeing",
            body: "Agree politely: 'I agree with that because...'. Disagree respectfully: 'I see your point, but I think...'. Give a reason instead of only saying 'no'. This makes your contribution stronger and easier for others to understand.",
          },
          {
            heading: "Asking questions",
            body: "Good questions move discussion forward: 'What evidence supports that?', 'Can you give an example?', 'How does that affect students?' Questions show interest and help everyone think more deeply.",
          },
        ],
        keyFormulas: [
          { name: "Discussion phrases", statement: "I agree because / I see your point, but / Could you explain / For example" },
        ],
        workedExample: {
          problem: "Peer says: 'Homework is useless.' Respond politely and give a reason.",
          solution: "'I see your point, but homework can help us practise. For example, maths homework builds our skills.'",
        },
      },
      questions: [
        {
          id: "mla4-u2-class-discussion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase politely shows disagreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'You are wrong.'" },
              { id: "b", text: "'I see your point, but I think...'" },
              { id: "c", text: "'Whatever.'" },
              { id: "d", text: "'That is stupid.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Polite disagreement", statement: "Respectful language acknowledges the other person before disagreeing." }],
            steps: [{ reasoning: "Criterion C: Speaking — option b is polite and gives a position.", working: "polite", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** 'I see your point, but I think...'",
            commonErrors: ["Choosing rude or vague responses."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-class-discussion-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'I think school uniforms are good because they reduce bullying.'\nStudent B: 'I agree they may reduce some differences. However, they can also limit students' freedom to express themselves.'",
          },
          stem: "Identify how Student B agrees and disagrees.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced discussion", statement: "Acknowledge a point, then add a different view with a reason." }],
            steps: [
              { reasoning: "Criterion C: Speaking — Student B agrees partially: uniforms may reduce differences.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — Student B adds a concern: limits freedom of expression.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — language is polite and clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Student B partly agrees (less bullying) but adds a different view (limits expression).",
            commonErrors: ["Missing the partial agreement."],
            examinerNote: "Both agreement and disagreement should be identified.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Class Debate",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Motion: 'Phones should be allowed in class.'\nFor: 'Phones help students learn and stay safe.'\nAgainst: 'Phones distract students and can be misused.'",
          },
          stem: "Give one argument for each side and explain which is stronger.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debate evaluation", statement: "Compare arguments and justify a position." }],
            steps: [
              { reasoning: "Criterion C: Speaking — for: phones may support learning and safety.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — against: phones may distract and be misused.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — chooses a side and gives a reason.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — explanation is clear and relevant.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "For: learning/safety; against: distraction/misuse. Stronger side depends on context and evidence.",
            commonErrors: ["Listing arguments without choosing or explaining."],
            examinerNote: "A justified position is required.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Discussion Task",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Topic: 'Should students choose their own homework?' Work in pairs or groups and write your contribution.",
          },
          stem: "Write your discussion contribution.",
          parts: [
            { label: "a", prompt: "State your position in one sentence.", marks: 1 },
            { label: "b", prompt: "Give two reasons for your position.", marks: 2 },
            { label: "c", prompt: "Acknowledge one point from the other side.", marks: 2 },
            { label: "d", prompt: "Write a closing sentence that invites response.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discussion production", statement: "Clear position, reasons, acknowledgement and response prompt." }],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — position is clear.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — reason 1 is relevant.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — reason 2 is relevant.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — acknowledges opposing point.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — acknowledges it respectfully.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — closing invites response.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — language is accurate and appropriate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — expression is clear and polite.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) position (b) two reasons (c) acknowledgement (d) response-inviting close.",
            commonErrors: ["Giving only reasons without acknowledging other views."],
            examinerNote: "Contribution should be balanced and polite.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase politely agrees with a classmate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'You are completely wrong.'" },
              { id: "b", text: "'I agree because...'." },
              { id: "c", text: "'Boring.'" },
              { id: "d", text: "'Whatever you say.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite agreement", statement: "Agreement phrases show support and can add reasons." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'I agree because...' is polite agreement.", working: "agree", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** 'I agree because...'.",
            commonErrors: ["Choosing rude or dismissive options."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-class-discussion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question helps move a class discussion forward?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'What evidence supports that?'" },
              { id: "b", text: "'Can we stop talking?'" },
              { id: "c", text: "'That is boring.'" },
              { id: "d", text: "'I do not care.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discussion questions", statement: "Good questions seek evidence or examples." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — asking for evidence deepens discussion.", working: "evidence", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** 'What evidence supports that?'",
            commonErrors: ["Choosing questions that shut down discussion."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla4-u2-class-discussion-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'I think online classes are better than classroom classes.'\nStudent B: 'I see your point about flexibility. However, I miss face-to-face discussion.'",
          },
          stem: "How does Student B respond to Student A?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced response", statement: "Acknowledge then add a different view politely." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — B acknowledges A's point (flexibility).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — B adds a concern politely ('however', misses face-to-face).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "B partly agrees (flexibility) but adds a concern (misses face-to-face).",
            commonErrors: ["Missing the partial agreement."],
            examinerNote: "Both parts needed.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Discussion Snippet",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A gives two reasons for longer breaks: students concentrate better and teachers can prepare. Student B gives one reason against: the school day becomes too short.",
          },
          stem: "How many reasons does Student B give?",
          response: {
            type: "numeric",
            parts: [
              { label: "reasons", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail tracking", statement: "Count reasons per speaker." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — Student B gives one reason: day too short.", working: "1", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**1**",
            commonErrors: ["Counting Student A's reasons instead."],
            examinerNote: "C1 for 1.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'Group work helps us learn from each other.'\nStudent B: 'That is true, but in my experience some students do not contribute.'",
          },
          stem: "What does 'That is true, but' signal in Student B's response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete agreement" },
              { id: "b", text: "Partial agreement followed by a different view" },
              { id: "c", text: "Strong disagreement" },
              { id: "d", text: "Ending the discussion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Discussion signals", statement: "'True, but' = partial agreement then counterpoint." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'That is true' agrees partially; 'but' introduces a concern.", working: "partial agree", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — language is polite and clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Partial agreement followed by a different view",
            commonErrors: ["Reading it as full agreement or full disagreement."],
            examinerNote: "C2 for (b).",
          },
        },
        {
          id: "mla4-u2-class-discussion-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'I think school should start later.'\nStudent B: 'Later starts help teenagers sleep more, but they may clash with parents' work schedules.'\nStudent C: 'Could you explain what you mean by 'clash'?'",
          },
          stem: "Identify how each student contributes to the discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion roles", statement: "Position, balanced view and clarifying question." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — Student A states a position (later starts).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — Student B gives balanced view (sleep vs schedules).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — Student C asks a clarifying question.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A: position; B: balanced view; C: clarification.",
            commonErrors: ["Missing Student C's clarifying role."],
            examinerNote: "All three roles needed.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'I believe exams are the best way to test learning.'\nStudent B: 'I disagree. Exams only test memory, not real skills.'",
          },
          stem: "Rewrite Student B's response to be more polite while keeping the same view.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite disagreement", statement: "Acknowledge then disagree with a reason." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — keeps the view: exams test memory not skills.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — adds acknowledgement e.g. 'I see your point, but...'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — tone is respectful, not blunt ('I disagree' alone is harsh).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I see your point, but exams only test memory, not real skills.'",
            commonErrors: ["Keeping the blunt 'I disagree' without softening."],
            examinerNote: "Must keep the view but soften the tone.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase should you avoid in a polite class discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Could you explain that?'" },
              { id: "b", text: "'You are stupid.'" },
              { id: "c", text: "'For example...'" },
              { id: "d", text: "'I see your point.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Respectful language", statement: "Avoid insulting or dismissive language." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'You are stupid' is insulting and inappropriate.", working: "rude", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** 'You are stupid.'",
            commonErrors: ["Choosing phrases that are actually polite."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-class-discussion-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'Uniforms are pointless.'\nStudent B: 'I partly agree, but I see value in them for special events.'",
          },
          stem: "What does Student B's response suggest about their position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They fully support uniforms" },
              { id: "b", text: "They mostly agree but see limited value" },
              { id: "c", text: "They completely reject uniforms" },
              { id: "d", text: "They have no opinion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nuanced position", statement: "Partial agreement shows a qualified stance." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'partly agree' + 'value for special events' = mostly agree with limits.", working: "mostly agree", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — language is polite and precise.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** They mostly agree but see limited value",
            commonErrors: ["Reading 'partly' as full agreement or rejection."],
            examinerNote: "C2 for (b).",
          },
        },
        {
          id: "mla4-u2-class-discussion-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'I think students should choose their own subjects.'\nStudent B: 'Choice is good, but students may not know what suits them yet.'\nStudent C: 'What if we had a trial period before choosing?'",
          },
          stem: "Analyse the discussion: identify each student's position and the problem-solving suggestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion analysis", statement: "Positions + constructive suggestion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — A: for free subject choice.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — B: cautious (students may not know what suits them).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — C: suggests trial period as a solution.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — analysis is clear and complete.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A for choice; B cautious; C proposes trial period.",
            commonErrors: ["Missing the constructive suggestion."],
            examinerNote: "All three contributions needed.",
          },
        },
        {
          id: "mla4-u2-class-discussion-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Discussion Exchange",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Student A: 'I am not sure, but I would like to hear more about your idea.'",
          },
          stem: "What does this statement show about Student A's attitude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are hostile" },
              { id: "b", text: "They are open-minded and curious" },
              { id: "c", text: "They disagree strongly" },
              { id: "d", text: "They want to leave" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude inference", statement: "'Not sure, but want to hear more' = open curiosity." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'not sure' + 'hear more' = open and curious.", working: "curious", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** They are open-minded and curious",
            commonErrors: ["Reading 'not sure' as disagreement."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-class-discussion-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Discussion Task",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Topic: 'Should our school ban junk food in the canteen?'",
          },
          stem: "Prepare your discussion contribution on this topic.",
          parts: [
            { label: "a", prompt: "State your position in one sentence.", marks: 1 },
            { label: "b", prompt: "Give two reasons for your position.", marks: 2 },
            { label: "c", prompt: "Acknowledge one point from the other side politely.", marks: 2 },
            { label: "d", prompt: "Ask one question to continue the discussion.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion production", statement: "Position, reasons, acknowledgement, question." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — clear position stated.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — reason 1 relevant.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — reason 2 relevant.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — opposing point acknowledged.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — acknowledgement is polite.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — question continues discussion appropriately.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) position (b) two reasons (c) polite acknowledgement (d) discussion question.",
            commonErrors: ["No acknowledgement of other views."],
            examinerNote: "Contribution should be balanced and polite.",
          },
        },
      ],
    },
    {
      id: "mla4-u2-presentation",
      title: "Short structured presentations",
      skill: "Plan and deliver a short presentation with introduction, main points, examples and conclusion.",
      lesson: {
        sections: [
          {
            heading: "Presentation structure",
            body: "A good presentation has four parts: **introduction** (what the topic is), **main points** (two or three ideas), **examples** (to explain the ideas) and **conclusion** (what you want the audience to remember).",
          },
          {
            heading: "Using examples",
            body: "Examples make ideas clearer. Use real-life situations, short stories or facts. Introduce them with 'For example...', 'For instance...' or 'A good example is...'. Do not add too many examples; choose the clearest ones.",
          },
          {
            heading: "Delivery tips",
            body: "Speak clearly, look at the audience and use simple signals such as 'First...', 'Another point is...' and 'To sum up...'. If you forget a word, pause and continue; accuracy matters more than speed.",
          },
        ],
        keyFormulas: [
          { name: "Presentation parts", statement: "Introduction -> Main points -> Examples -> Conclusion" },
          { name: "Example signals", statement: "For example / For instance / A good example is" },
        ],
        workedExample: {
          problem: "Topic: 'Why reading is important.' Give a one-sentence conclusion.",
          solution: "'Reading improves knowledge, imagination and communication, so students should read regularly.'",
        },
      },
      questions: [
        {
          id: "mla4-u2-presentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a presentation should come first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion" },
              { id: "b", text: "Introduction" },
              { id: "c", text: "Questions from audience" },
              { id: "d", text: "References" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Presentation order", statement: "Introduction comes before main points and conclusion." }],
            steps: [{ reasoning: "Criterion C: Speaking — introduction is first.", working: "intro", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** Introduction",
            commonErrors: ["Starting with details before context."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-presentation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Presentation Plan",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Topic: 'The benefits of exercise.'\nIntroduction: many students sit too much.\nMain point 1: exercise improves health. Main point 2: exercise helps concentration. Conclusion: students should be active every day.",
          },
          stem: "Identify the introduction, one main point and the conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Presentation analysis", statement: "Identify structural parts of a presentation." }],
            steps: [
              { reasoning: "Criterion C: Speaking — introduction: many students sit too much.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — main point: exercise improves health or concentration.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — conclusion: students should be active daily.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Intro: sitting too much; point: health/concentration; conclusion: daily activity.",
            commonErrors: ["Confusing main points with conclusion."],
            examinerNote: "All three parts must be identified.",
          },
        },
        {
          id: "mla4-u2-presentation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Presentation Draft",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Speaker: 'Exercise is good. My friend runs every morning. She says she feels better. So you should exercise too.'",
          },
          stem: "Evaluate the presentation and suggest two improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Presentation evaluation", statement: "Clear structure and examples improve presentation." }],
            steps: [
              { reasoning: "Criterion C: Speaking — issue 1: vague opening 'Exercise is good' lacks context.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — issue 2: only one example and weak conclusion.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — improvement 1: add clear introduction and thesis.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — improvement 2: add another example or main point.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Needs clearer structure, more than one point/example and a stronger conclusion.",
            commonErrors: ["Suggesting only delivery changes, not content structure."],
            examinerNote: "Improvements must be specific.",
          },
        },
        {
          id: "mla4-u2-presentation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Presentation Task",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Prepare a two-minute presentation: 'Why teamwork is important in projects.'",
          },
          stem: "Write your presentation notes.",
          parts: [
            { label: "a", prompt: "Write an introduction sentence.", marks: 1 },
            { label: "b", prompt: "Write two main points with one example each.", marks: 2 },
            { label: "c", prompt: "Write a conclusion sentence.", marks: 2 },
            { label: "d", prompt: "Write one sentence for audience questions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Presentation production", statement: "Introduction, points, examples, conclusion and Q&A readiness." }],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — introduction introduces topic clearly.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — point 1 with example.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — point 2 with example.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — conclusion summarises main idea.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — conclusion is clear and accurate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — Q&A sentence invites questions politely.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — language is accurate and appropriate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — response shows readiness for questions.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) intro (b) two points+examples (c) conclusion (d) Q&A sentence.",
            commonErrors: ["Writing a list without structure or examples."],
            examinerNote: "Presentation should be clear, organised and audience-aware.",
          },
        },
        {
          id: "mla4-u2-presentation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a presentation should come last?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction" },
              { id: "b", text: "Main points" },
              { id: "c", text: "Conclusion" },
              { id: "d", text: "Examples" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation order", statement: "Conclusion comes after main points." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — conclusion is the final part.", working: "conclusion", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** Conclusion",
            commonErrors: ["Confusing order of parts."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla4-u2-presentation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase introduces an example in a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'In conclusion...'" },
              { id: "b", text: "'For example...'" },
              { id: "c", text: "'Good morning...'" },
              { id: "d", text: "'Thank you...'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Example signals", statement: "'For example' introduces an example." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'For example' signals an example.", working: "example", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** 'For example...'",
            commonErrors: ["Choosing conclusion or greeting phrases."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-presentation-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Presentation Plan",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Topic: 'Why music is important.'\nIntroduction: music is part of daily life.\nMain point: music helps relaxation. Conclusion: everyone should listen to music.",
          },
          stem: "Identify the introduction and conclusion of this presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation structure", statement: "Identify intro and conclusion parts." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — introduction: 'music is part of daily life'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — conclusion: 'everyone should listen to music'.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Intro: music in daily life; conclusion: everyone should listen.",
            commonErrors: ["Confusing main point with conclusion."],
            examinerNote: "Both parts needed.",
          },
        },
        {
          id: "mla4-u2-presentation-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Presentation Plan",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Topic: 'Three benefits of reading.'\nThe speaker lists: better vocabulary, more imagination, stronger writing skills.",
          },
          stem: "How many benefits does the speaker list?",
          response: {
            type: "numeric",
            parts: [
              { label: "benefits", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail counting", statement: "Count listed main points." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — vocabulary, imagination, writing = 3 benefits.", working: "3", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**3**",
            commonErrors: ["Miscounting the list."],
            examinerNote: "C1 for 3.",
          },
        },
        {
          id: "mla4-u2-presentation-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Presentation Draft",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Speaker: 'Good morning. Today I will talk about why we should protect forests. First, forests give us oxygen. Second, they are home to animals. For example, many birds live only in forests.'",
          },
          stem: "Which presentation parts are present in this draft?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction and main points, but no conclusion" },
              { id: "b", text: "Only an introduction" },
              { id: "c", text: "Introduction, main points and conclusion" },
              { id: "d", text: "Conclusion only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure recognition", statement: "Identify which parts appear." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — greeting + 'Today I will talk' = intro; First/Second = main points.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — no conclusion or summary present.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** Introduction and main points, but no conclusion",
            commonErrors: ["Assuming a conclusion exists."],
            examinerNote: "C2 for (a).",
          },
        },
        {
          id: "mla4-u2-presentation-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Presentation Draft",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Speaker: 'Exercise is good. My friend runs every morning. She says she feels better. Exercise is good for everyone.'",
          },
          stem: "Suggest two improvements to this presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation improvement", statement: "Clear structure and varied content improve presentations." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — improvement 1: clearer introduction stating topic and purpose.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — improvement 2: more than one main point or a stronger example.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — improvements are specific.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Clearer intro + more points/examples or stronger conclusion.",
            commonErrors: ["Vague suggestions like 'speak louder'."],
            examinerNote: "Improvements must target content structure.",
          },
        },
        {
          id: "mla4-u2-presentation-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Presentation Draft",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Speaker: 'Good afternoon. I will explain three ways students can save money. First, plan a weekly budget. Second, buy only what you need. For instance, make a shopping list before going to the market.'",
          },
          stem: "Identify the introduction, one main point with its example, and note what is missing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation analysis", statement: "Identify parts and missing elements." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — introduction: 'I will explain three ways to save money'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — main point + example: budget + shopping list ('For instance').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — missing: third point and conclusion.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Intro + budget point with example; missing third point and conclusion.",
            commonErrors: ["Missing that the conclusion is absent."],
            examinerNote: "All three observations needed.",
          },
        },
        {
          id: "mla4-u2-presentation-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should you do if you forget a word during a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop and apologise repeatedly" },
              { id: "b", text: "Pause briefly and continue" },
              { id: "c", text: "End the presentation immediately" },
              { id: "d", text: "Shout the word louder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Delivery tips", statement: "Pause and continue; accuracy over speed." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — pause and continue keeps flow.", working: "pause", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Pause briefly and continue",
            commonErrors: ["Choosing to stop or apologise excessively."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-presentation-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Presentation Draft",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Speaker: 'Our class trip was great. We saw many things. It was fun. I liked it.'",
          },
          stem: "Why is this presentation weak? Choose the best answer.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no structure, detail or examples" },
              { id: "b", text: "It is too long" },
              { id: "c", text: "It uses too much formal language" },
              { id: "d", text: "It is perfectly structured" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation critique", statement: "Weak presentations lack structure, detail and examples." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — vague, no structure, no examples or conclusion.", working: "no structure", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — evaluation is accurate.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** It has no structure, detail or examples",
            commonErrors: ["Not identifying the missing structure."],
            examinerNote: "C2 for (a).",
          },
        },
        {
          id: "mla4-u2-presentation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Presentation Draft",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Speaker: 'I will talk about water conservation. First, fix leaking taps. Second, take shorter showers. For example, a five-minute shower uses less water than a ten-minute one. In conclusion, small actions save water.'",
          },
          stem: "Evaluate this presentation and explain why it is effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation evaluation", statement: "Effective = clear structure + examples + conclusion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — clear introduction states topic.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — organised main points (First/Second) with example.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — conclusion summarises ('small actions save water').", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — evaluation is justified and clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Effective: clear structure, organised points, concrete example, strong conclusion.",
            commonErrors: ["Listing features without explaining effectiveness."],
            examinerNote: "Must link features to effectiveness.",
          },
        },
        {
          id: "mla4-u2-presentation-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Presentation Draft",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Speaker: 'To sum up, reading improves knowledge, imagination and communication.'",
          },
          stem: "What is the function of 'To sum up' in this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It introduces a new topic" },
              { id: "b", text: "It signals the conclusion or summary" },
              { id: "c", text: "It asks a question" },
              { id: "d", text: "It gives an example" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Signposting", statement: "'To sum up' signals conclusion." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'To sum up' marks the conclusion.", working: "conclusion", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It signals the conclusion or summary",
            commonErrors: ["Confusing it with an example signal."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-presentation-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Presentation Task",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Topic: 'Why students should learn a second language.'",
          },
          stem: "Write your presentation outline.",
          parts: [
            { label: "a", prompt: "Write an introduction sentence.", marks: 1 },
            { label: "b", prompt: "Write two main points with one example each.", marks: 2 },
            { label: "c", prompt: "Write a conclusion sentence.", marks: 1 },
            { label: "d", prompt: "Write one sentence inviting audience questions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation production", statement: "Intro, points+examples, conclusion, Q&A." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — introduction introduces topic.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — point 1 with example.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — point 2 with example.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — conclusion summarises clearly.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — question invitation is polite.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — language is accurate.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) intro (b) two points+examples (c) conclusion (d) Q&A invitation.",
            commonErrors: ["Points without examples."],
            examinerNote: "Each main point needs an example.",
          },
        },
      ],
    },
  ],
};
