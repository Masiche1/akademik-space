import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cile-u9-lesson-9-1",
  code: "9-1",
  title: "Speaking skills: presentations and discussion",
  goal: "I CAN plan and deliver a clear spoken presentation and contribute effectively to group discussion.",
  standards: ["0861 Speaking: presentation and discussion"],
  vocabulary: [
    { term: "Presentation", definition: "A structured spoken delivery of information to an audience." },
    { term: "Eye contact", definition: "Looking at audience members to engage them and show confidence." },
    { term: "Pace", definition: "The speed of delivery — too fast loses the audience, too slow bores them." },
    { term: "Projection", definition: "Speaking loudly and clearly enough for everyone to hear." },
    { term: "Discussion", definition: "A structured exchange of views between speakers." },
    { term: "Turn-taking", definition: "Waiting for and respecting others' speaking turns." },
  ],
  concepts: [
    {
      id: "cile-u9-presentation-skills",
      title: "Delivering a presentation",
      skill: "Plan structure, engage the audience and deliver a clear spoken presentation.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "1. **Opening**: greet audience, state topic, give a hook.\n2. **Body**: 2-3 main points with examples.\n3. **Conclusion**: summarise key points, end confidently.\n\nUse signposting: 'First... secondly... finally...'",
          },
          {
            heading: "Delivery",
            body: "- **Eye contact**: scan the room, don't stare at notes.\n- **Pace**: slow down for key points, vary speed.\n- **Volume**: project so the back row hears.\n- **Body language**: stand tall, use gestures naturally.\n- **Pauses**: silence before key points builds anticipation.",
          },
          {
            heading: "Common mistakes",
            body: "- Reading word-for-word from notes — memorise key points instead.\n- Speaking too fast — nerves speed us up.\n- No structure — audience gets lost.\n- Ignoring the audience — presentation is a two-way exchange.",
          },
        ],
        keyFormulas: [
          { name: "Presentation formula", statement: "Hook → signposted points → confident close. Delivery: eye contact, pace, volume, body language." },
        ],
        workedExample: {
          problem: "Presentation on 'Why reading matters' — plan the structure.",
          solution: "Hook: 'Imagine a world without stories.' Points: (1) reading builds vocabulary, (2) reading develops empathy, (3) reading is lifelong learning. Close: 'Reading opens doors — start today.'",
        },
      },
      questions: [
        {
          id: "cile-u9-pres-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of signposting in a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show off vocabulary" },
              { id: "b", text: "To guide the audience through the structure" },
              { id: "c", text: "To fill silence" },
              { id: "d", text: "To end the presentation early" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Signposting", statement: "Guides audience through structure — 'first', 'secondly', 'finally'." },
            ],
            steps: [
              { reasoning: "Signposts orient the listener to where they are in the presentation.", working: "\\text{orientation}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To guide the audience through the structure",
            commonErrors: ["Choosing (a) — signposting is about clarity, not vocabulary display."],
          },
        },
        {
          id: "cile-u9-pres-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is reading word-for-word from notes ineffective in a presentation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Delivery vs reading", statement: "Reading removes eye contact, natural pace and audience engagement." },
            ],
            steps: [
              { reasoning: "Reading from notes means no eye contact and flat delivery.", working: "\\text{no eye contact}", marks: 1, markCode: "AO2" },
              { reasoning: "Presentations should sound like natural speech — memorise points, not scripts.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reading word-for-word removes eye contact, natural pacing and engagement — it sounds like reading, not speaking. Memorising key points allows natural delivery.",
            commonErrors: ["Saying 'it is boring' — the issue is delivery quality, not content."],
          },
        },
        {
          id: "cile-u9-pres-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A speaker races through their presentation in 2 minutes when they were given 5. List three consequences and suggest fixes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pace control", statement: "Too fast loses the audience; practise timing and slowing down." },
            ],
            steps: [
              { reasoning: "Consequence: audience cannot follow or absorb information.", working: "\\text{can't follow}", marks: 1, markCode: "AO2" },
              { reasoning: "Consequence: speaker looks nervous or unprepared.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: practise with timing, add pauses, slow down deliberately.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: prepare more content or expand examples.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Consequences: audience can't follow, speaker looks nervous. Fixes: practise timing, add deliberate pauses, expand content with examples, slow down.",
            commonErrors: ["Only listing consequences without fixes — the question asks for both."],
          },
        },
        {
          id: "cile-u9-pres-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are preparing a 3-minute presentation on a topic of your choice.",
          parts: [
            { label: "a", prompt: "Write your opening hook and introduction.", marks: 2 },
            { label: "b", prompt: "List your three main points with signposting.", marks: 3 },
            { label: "c", prompt: "Write your conclusion.", marks: 2 },
            { label: "d", prompt: "List two delivery techniques you will use.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Presentation planning", statement: "Hook → signposted points → confident close, delivered with engagement techniques." },
            ],
            steps: [
              { part: "a", reasoning: "Hook engages; introduction states topic clearly.", working: "\\text{hook}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Appropriate for audience.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Three points present and logical.", working: "\\text{points}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Signposting used.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Points are developed enough for 3 minutes.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Conclusion summarises and ends confidently.", working: "\\text{close}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "No new information introduced.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Two delivery techniques listed.", working: "\\text{techniques}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Techniques are specific and applicable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) engaging hook + intro (b) three signposted points (c) confident conclusion (d) two delivery techniques",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Engaging opening.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three developed signposted points.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Confident conclusion.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Weak.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Two specific techniques.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) listing topics without signposting or development."],
          },
        },
      ],
    },
    {
      id: "cile-u9-discussion-skills",
      title: "Discussion and debate skills",
      skill: "Contribute to discussion with relevant points, respectful disagreement and active listening.",
      lesson: {
        sections: [
          {
            heading: "Contributing effectively",
            body: "- **Build on others**: 'Building on Sam's point...'\n- **Disagree respectfully**: 'I see it differently because...' not 'You're wrong.'\n- **Ask questions**: 'Could you explain what you mean by...?'\n- **Stay on topic**: contribute relevant points, not tangents.",
          },
          {
            heading: "Turn-taking",
            body: "- Wait for a natural pause before speaking.\n- Don't interrupt — note your point and contribute when it's your turn.\n- If the discussion stalls, ask a question or offer a summary.",
          },
          {
            heading: "Debate structure",
            body: "In a formal debate: **Proposition** states case → **Opposition** rebuts → **Proposition** responds → judge decides. Key skill: refuting the opponent's strongest point, not just repeating your own.",
          },
        ],
        keyFormulas: [
          { name: "Discussion skills", statement: "Build + disagree respectfully + ask questions + respect turns = effective discussion." },
        ],
        workedExample: {
          problem: "Discussing 'Homework should be banned.' Give a respectful disagreement.",
          solution: "'I see your point about stress, but I think homework builds independent learning skills. Could you explain how you'd replace it?' — acknowledges their view, offers counter, asks for elaboration.",
        },
      },
      questions: [
        {
          id: "cile-u9-disc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is turn-taking in a discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking as fast as possible" },
              { id: "b", text: "Waiting for and respecting others' speaking turns" },
              { id: "c", text: "Taking notes while others speak" },
              { id: "d", text: "Agreeing with everything" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "Respecting speaking order — wait, don't interrupt." },
            ],
            steps: [
              { reasoning: "Turn-taking = orderly exchange of speaking opportunities.", working: "\\text{orderly}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Waiting for and respecting others' speaking turns",
            commonErrors: ["Choosing (a) — speed is irrelevant to turn-taking."],
          },
        },
        {
          id: "cile-u9-disc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite disrespectfully: 'You're completely wrong about that.' into a respectful disagreement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respectful disagreement", statement: "Acknowledge the view, then offer a counter — never attack the person." },
            ],
            steps: [
              { reasoning: "Problem: 'completely wrong' attacks the person, not the idea.", working: "\\text{ad hominem}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'I see it differently — I think...' or 'I understand your view, but...'", working: "\\text{acknowledge + counter}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'I see it differently — I think the evidence suggests otherwise.' or 'I understand your view, but I have a different interpretation.'",
            commonErrors: ["'I disagree' alone — need to acknowledge then counter, not just negate."],
          },
        },
        {
          id: "cile-u9-disc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a debate on 'Uniforms should be compulsory', give one strong proposition argument and explain how to refute it as opposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Debate", statement: "Strong arguments have evidence; refutation targets the strongest point." },
            ],
            steps: [
              { reasoning: "Proposition argument: uniforms reduce bullying based on clothing and promote equality.", working: "\\text{argument}", marks: 1, markCode: "AO2" },
              { reasoning: "Refutation strategy: target the equality claim — uniforms don't stop other forms of bullying.", working: "\\text{refute}", marks: 1, markCode: "AO2" },
              { reasoning: "Counter-evidence: bullying continues in uniformed schools via other markers.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear, logical exchange.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Proposition: uniforms reduce clothing-based bullying and promote equality. Refutation: bullying persists through other markers (accessories, attitude); uniforms restrict self-expression without eliminating inequality.",
            commonErrors: ["Repeating your own case instead of addressing the opponent's point."],
          },
        },
        {
          id: "cile-u9-disc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are participating in a group discussion on 'Should school uniforms be compulsory?'",
          parts: [
            { label: "a", prompt: "State your position in one sentence.", marks: 1 },
            { label: "b", prompt: "Give two supporting reasons.", marks: 3 },
            { label: "c", prompt: "Anticipate and refute one counter-argument.", marks: 3 },
            { label: "d", prompt: "Write a sentence that builds on someone else's point.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion contribution", statement: "Position → reasons → refutation → building on others = full contribution." },
            ],
            steps: [
              { part: "a", reasoning: "Clear position stated.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two relevant reasons given.", working: "\\text{reasons}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Reasons are developed.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Reasons are logical.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Counter-argument identified accurately.", working: "\\text{counter}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Refutation addresses the point directly.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Refutation is logical.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Builds on another's point explicitly.", working: "\\text{build}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Extension adds new insight.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clear position (b) two developed reasons (c) counter-argument refuted logically (d) point built upon",
            levels: [
              { level: "Level 2", marks: "1-3", descriptor: "Position and reasons clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Counter-argument refuted logically.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Point built upon effectively.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (c) attacking the person rather than the argument."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u9-speaking-notes",
      title: "Speaking skills — revision notes",
      summary: "Presentations, discussion and debate skills.",
      sections: [
        {
          heading: "Presentations",
          body: "Hook → signposted points → confident close. Delivery: eye contact, varied pace, projected volume, natural body language. Never read word-for-word.",
        },
        {
          heading: "Discussion",
          body: "Build on others, disagree respectfully ('I see it differently because...'), ask questions, respect turn-taking. Never interrupt.",
        },
        {
          heading: "Debate",
          body: "Position → reasons → refute opponent's strongest point → build on others. Attack ideas, not people.",
        },
      ],
    },
  ],
};
