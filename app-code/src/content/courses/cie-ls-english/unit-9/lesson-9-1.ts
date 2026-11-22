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
              { id: "a", text: "To guide the audience through the structure" },
              { id: "b", text: "To show off vocabulary" },
              { id: "c", text: "To fill silence" },
              { id: "d", text: "To end the presentation early" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cile-u9-pres-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a presentation's opening hook?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To read your notes aloud" },
              { id: "b", text: "To give the conclusion first" },
              { id: "c", text: "To list every detail of the presentation" },
              { id: "d", text: "To grab the audience's attention and introduce the topic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hook", statement: "An attention-grabbing opening that introduces the topic." },
            ],
            steps: [
              { reasoning: "The hook engages the audience before the main points begin.", working: "\\text{engage}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To grab the audience's attention and introduce the topic",
            commonErrors: ["Choosing (a) — the hook is brief; detail comes in the body."],
          },
        },
        {
          id: "cile-u9-pres-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which delivery technique most helps the audience follow the structure of a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Signposting with words like 'first' and 'finally'" },
              { id: "b", text: "Speaking as fast as possible" },
              { id: "c", text: "Avoiding all pauses" },
              { id: "d", text: "Reading directly from notes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Signposting", statement: "Orienting phrases guide listeners through the structure." },
            ],
            steps: [
              { reasoning: "Signposts tell the audience where they are and what comes next.", working: "\\text{orient}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Signposting with words like 'first' and 'finally'",
            commonErrors: ["Choosing (a) — speed reduces comprehension, not structure."],
          },
        },
        {
          id: "cile-u9-pres-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should you use notes during a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read them as fast as you can" },
              { id: "b", text: "Hide them completely and never check" },
              { id: "c", text: "Memorise key points and glance at them occasionally" },
              { id: "d", text: "Read them word-for-word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Note use", statement: "Notes are prompts, not scripts — memorise points, glance for prompts." },
            ],
            steps: [
              { reasoning: "Memorised key points allow natural delivery with occasional glances for prompts.", working: "\\text{prompts}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Memorise key points and glance at them occasionally",
            commonErrors: ["Choosing (a) — word-for-word reading kills engagement."],
          },
        },
        {
          id: "cile-u9-pres-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A speaker's voice is too quiet for the back row to hear. Which technique should they use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turn their back to the audience" },
              { id: "b", text: "Whisper the key points" },
              { id: "c", text: "Speak faster so more words carry" },
              { id: "d", text: "Project their voice so everyone can hear" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Projection", statement: "Speak loudly and clearly enough for the whole room." },
            ],
            steps: [
              { reasoning: "Projection ensures audibility without shouting or rushing.", working: "\\text{project}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Project their voice so everyone can hear",
            commonErrors: ["Choosing (a) — faster speech is harder to hear, not easier."],
          },
        },
        {
          id: "cile-u9-pres-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of a deliberate pause before a key point in a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To check the time" },
              { id: "b", text: "To build anticipation and signal importance" },
              { id: "c", text: "To apologise for a mistake" },
              { id: "d", text: "To fill silence because the speaker forgot their words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pauses", statement: "Silence before key points builds anticipation." },
            ],
            steps: [
              { reasoning: "A planned pause makes the audience listen for what follows.", working: "\\text{anticipation}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** To build anticipation and signal importance",
            commonErrors: ["Choosing (a) — a planned pause is a technique, not a memory lapse."],
          },
        },
        {
          id: "cile-u9-pres-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 5-minute presentation is planned with a 1-minute opening, a 3-minute body and the rest for the conclusion. How many minutes are planned for the conclusion?",
          response: {
            type: "numeric",
            parts: [{ label: "conclusion", answer: 1, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timing", statement: "Plan time for each section so the presentation fits its slot." },
            ],
            steps: [
              { reasoning: "Total time is 5 minutes; opening takes 1 and body takes 3.", working: "5-1-3=1", marks: 1, markCode: "AO2" },
              { reasoning: "The remaining minute is for the conclusion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "1 minute",
            commonErrors: ["Answering 5 — the opening and body already take 4 minutes."],
          },
        },
        {
          id: "cile-u9-pres-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A presentation has a 30-second hook, three main points of 60 seconds each, and a 30-second conclusion. Give: (a) the total body time in seconds; (b) the total presentation time in seconds.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 180, unit: "s" },
              { label: "b", answer: 270, unit: "s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timing calculation", statement: "Body = sum of points; total = hook + body + conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Three points at 60 s each: 3 x 60 = 180 s.", working: "3 \\times 60 = 180", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Total = 30 + 180 + 30 = 270 s.", working: "30+180+30=270", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) 180 s (b) 270 s",
            commonErrors: ["Forgetting the hook and conclusion when finding the total."],
          },
        },
        {
          id: "cile-u9-pres-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A presentation task is worth 9 marks, split into four parts: opening 2, body points 4, conclusion 2 and delivery 1. Give: (a) the marks for the three body points combined; (b) the marks for opening plus conclusion; (c) the marks for delivery.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4 },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mark awareness", statement: "Check that mark allocations sum to the total and match the question's parts." },
            ],
            steps: [
              { part: "a", reasoning: "Body points carry 4 marks.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Opening plus conclusion = 2 + 2 = 4.", working: "2+2=4", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Delivery carries 1 mark.", marks: 1, markCode: "AO2" },
              { reasoning: "Check: 4 + 4 + 1 = 9, matching the total.", working: "4+4+1=9", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4 (b) 4 (c) 1",
            commonErrors: ["Answering part (b) as 2 — opening and conclusion are combined."],
          },
        },
        {
          id: "cile-u9-pres-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "You have 6 minutes to present. You allocate 1 minute to the opening and 1 minute to the conclusion. How many minutes remain for the body of the presentation?",
          response: {
            type: "numeric",
            parts: [{ label: "body", answer: 4, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time allocation", statement: "Body time = total minus opening and conclusion." },
            ],
            steps: [
              { reasoning: "Opening + conclusion = 2 minutes used.", working: "1+1=2", marks: 1, markCode: "AO2" },
              { reasoning: "Body = 6 - 2 = 4 minutes.", working: "6-2=4", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "4 minutes",
            commonErrors: ["Answering 6 — forgetting to subtract opening and conclusion."],
          },
        },
        {
          id: "cile-u9-pres-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why varying your pace during a presentation improves it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pace", statement: "Varying speed keeps the audience engaged and emphasises key points." },
            ],
            steps: [
              { reasoning: "A constant pace becomes monotonous — the audience tunes out.", working: "\\text{monotonous}", marks: 1, markCode: "AO2" },
              { reasoning: "Slowing for key points and speeding through transitions creates emphasis and momentum.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Varying pace prevents monotony, keeps attention and highlights important points — slow down for key ideas, move faster through transitions.",
            commonErrors: ["Saying 'it is more interesting' without explaining the mechanism."],
          },
        },
        {
          id: "cile-u9-pres-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speaker stares at their notes, speaks in a monotone and finishes in half the allotted time. Suggest two delivery improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Delivery improvement", statement: "Target specific weaknesses: eye contact, vocal variety, pace." },
            ],
            steps: [
              { reasoning: "Improvement 1: make eye contact — scan the room instead of staring at notes.", working: "\\text{eye contact}", marks: 1, markCode: "AO2" },
              { reasoning: "Improvement 2: vary pitch and pace — monotone delivery loses the audience.", marks: 1, markCode: "AO2" },
              { reasoning: "Improvement 2 also addresses the short finish: expand with examples or pauses.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Make eye contact and scan the room; vary pitch and pace, and use the full time by adding examples or deliberate pauses.",
            commonErrors: ["Suggesting 'practise more' without naming specific techniques."],
          },
        },
        {
          id: "cile-u9-pres-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your partner's presentation jumps randomly between topics with no clear opening or ending. Explain how you would advise them, giving two specific structural techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation structure", statement: "Hook → signposted points → confident close gives the audience a clear path." },
            ],
            steps: [
              { reasoning: "Diagnose: lack of structure leaves the audience lost.", working: "\\text{structure}", marks: 1, markCode: "AO2" },
              { reasoning: "Technique 1: plan an opening hook that states the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "Technique 2: order 2-3 main points and signpost them ('first', 'secondly', 'finally').", marks: 1, markCode: "AO2" },
              { reasoning: "Technique 3: end with a conclusion that summarises and closes confidently.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Advise planning a hook + topic statement, ordering and signposting 2-3 main points, and finishing with a summary conclusion — the hook-points-close structure.",
            commonErrors: ["Listing delivery tips only — the problem is structural, not vocal."],
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
              { id: "a", text: "Taking notes while others speak" },
              { id: "b", text: "Waiting for and respecting others' speaking turns" },
              { id: "c", text: "Speaking as fast as possible" },
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
        {
          id: "cile-u9-disc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'building on' someone's point in a discussion mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignoring their point and starting a new topic" },
              { id: "b", text: "Interrupting to finish their sentence" },
              { id: "c", text: "Agreeing with everything they say" },
              { id: "d", text: "Adding to or extending another speaker's idea" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Building on", statement: "Extending another's idea — e.g. 'Building on Sam's point...'" },
            ],
            steps: [
              { reasoning: "Building on adds to an existing contribution rather than replacing it.", working: "\\text{extend}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Adding to or extending another speaker's idea",
            commonErrors: ["Choosing (a) — building on can include respectful disagreement, not just agreement."],
          },
        },
        {
          id: "cile-u9-disc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase best introduces a respectful disagreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I see it differently because..." },
              { id: "b", text: "Whatever" },
              { id: "c", text: "You're completely wrong" },
              { id: "d", text: "That's the stupidest idea I've heard" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respectful disagreement", statement: "Acknowledge then counter — never attack the person." },
            ],
            steps: [
              { reasoning: "'I see it differently because...' acknowledges the view and offers reasoning.", working: "\\text{acknowledge + reason}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** I see it differently because...",
            commonErrors: ["Choosing (a) or (c) — these attack the person, not the idea."],
          },
        },
        {
          id: "cile-u9-disc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do if you want to speak while someone else is talking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Note your point and wait for a natural pause" },
              { id: "b", text: "Interrupt immediately so your point is heard" },
              { id: "c", text: "Speak louder than them" },
              { id: "d", text: "Leave the discussion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Turn-taking", statement: "Wait for a pause; note your point meanwhile." },
            ],
            steps: [
              { reasoning: "Respecting turns means waiting for a natural pause before contributing.", working: "\\text{wait}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Note your point and wait for a natural pause",
            commonErrors: ["Choosing (a) — interrupting disrespects others' turns."],
          },
        },
        {
          id: "cile-u9-disc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a formal debate, what is the opposition's main job after the proposition has spoken?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State their own case and refute the proposition's strongest point" },
              { id: "b", text: "Agree with the proposition to be polite" },
              { id: "c", text: "Refuse to speak until the judge asks" },
              { id: "d", text: "Repeat the proposition's arguments louder" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Debate structure", statement: "Opposition rebuts — targets the strongest opposing point." },
            ],
            steps: [
              { reasoning: "A debate requires refuting the opponent's case, not repeating your own.", working: "\\text{rebut}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** State their own case and refute the proposition's strongest point",
            commonErrors: ["Choosing (d) — agreeing abandons the opposition's role."],
          },
        },
        {
          id: "cile-u9-disc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A discussion stalls and no one is speaking. What is the best way to restart it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change the subject completely" },
              { id: "b", text: "Wait silently for someone else to start" },
              { id: "c", text: "Ask a question or offer a brief summary of the points so far" },
              { id: "d", text: "Declare the discussion over" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reviving discussion", statement: "Ask a question or summarise to restart stalled discussion." },
            ],
            steps: [
              { reasoning: "A question or summary gives others something to respond to.", working: "\\text{prompt}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Ask a question or offer a brief summary of the points so far",
            commonErrors: ["Choosing (a) — silence does not restart a stalled discussion."],
          },
        },
        {
          id: "cile-u9-disc-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A group discussion has 4 members and each person speaks for 3 minutes. How many minutes of speaking time are there in total?",
          response: {
            type: "numeric",
            parts: [{ label: "total", answer: 12, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discussion timing", statement: "Total speaking time = number of speakers x time each." },
            ],
            steps: [
              { reasoning: "Multiply members by minutes each: 4 x 3.", working: "4 \\times 3 = 12", marks: 1, markCode: "AO2" },
              { reasoning: "Total = 12 minutes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "12 minutes",
            commonErrors: ["Adding instead of multiplying — 4 + 3 = 7."],
          },
        },
        {
          id: "cile-u9-disc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A debate lasts 20 minutes: 6 minutes for the proposition's opening, 6 for the opposition's opening, and the rest for responses. How many minutes are left for responses?",
          response: {
            type: "numeric",
            parts: [{ label: "responses", answer: 8, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time allocation", statement: "Responses time = total minus both opening speeches." },
            ],
            steps: [
              { reasoning: "Openings use 6 + 6 = 12 minutes.", working: "6+6=12", marks: 1, markCode: "AO2" },
              { reasoning: "Responses = 20 - 12 = 8 minutes.", working: "20-12=8", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "8 minutes",
            commonErrors: ["Subtracting only one opening — both count."],
          },
        },
        {
          id: "cile-u9-disc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a discussion worth 8 marks, part (a) position carries 1 mark, part (b) reasons carry 3 marks and part (c) refutation carries the rest. Give: (a) the marks for refutation; (b) the marks for reasons plus refutation combined.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mark awareness", statement: "Missing marks = total minus the given parts." },
            ],
            steps: [
              { part: "a", reasoning: "Refutation = 8 - 1 - 3 = 4 marks.", working: "8-1-3=4", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Reasons plus refutation = 3 + 4 = 7 marks.", working: "3+4=7", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) 4 (b) 7",
            commonErrors: ["Forgetting the position mark when finding the remainder."],
          },
        },
        {
          id: "cile-u9-disc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A discussion guide lists four discussion skills: building on others, disagreeing respectfully, asking questions and respecting turns. How many of these involve actively contributing your own ideas?",
          response: {
            type: "numeric",
            parts: [{ label: "contributions", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contribution skills", statement: "Building, disagreeing and asking questions all add to the discussion." },
            ],
            steps: [
              { reasoning: "Building on, disagreeing and asking questions all contribute actively — 3 skills.", working: "\\text{3}", marks: 1, markCode: "AO2" },
              { reasoning: "Respecting turns is about listening order, not contributing ideas.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — respecting turns is not a contribution technique."],
          },
        },
        {
          id: "cile-u9-disc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why asking questions is a valuable contribution to a discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Asking questions", statement: "Questions clarify, deepen understanding and keep discussion moving." },
            ],
            steps: [
              { reasoning: "Questions like 'Could you explain what you mean by...?' clarify unclear points.", working: "\\text{clarify}", marks: 1, markCode: "AO2" },
              { reasoning: "They also invite others to contribute and reveal new angles.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Questions clarify speakers' meaning, deepen the discussion and prompt further contributions — a sign of active engagement.",
            commonErrors: ["Saying questions are 'rude' — genuine clarification questions are valuable."],
          },
        },
        {
          id: "cile-u9-disc-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this interrupting contribution as a respectful one: 'Stop — you're wrong, homework is useless.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respectful disagreement", statement: "Acknowledge the view, then offer a counter with reasoning." },
            ],
            steps: [
              { reasoning: "Problem: 'Stop — you're wrong' attacks the person and interrupts.", working: "\\text{ad hominem}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: acknowledge first — 'I see your point about homework...'", marks: 1, markCode: "AO2" },
              { reasoning: "Then counter with reasoning — '...but I think it builds independent skills.'", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'I see your point about homework, but I think it builds independent learning skills.' — acknowledges, then counters respectfully.",
            commonErrors: ["Keeping 'you're wrong' — must remove the personal attack."],
          },
        },
        {
          id: "cile-u9-disc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a debate on 'School uniforms should be compulsory', the opposition argues 'Uniforms restrict self-expression.' As proposition, explain how you would refute this point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Refutation", statement: "Target the opponent's reasoning with counter-evidence or a stronger principle." },
            ],
            steps: [
              { reasoning: "Identify the target: the claim that self-expression matters more than equality.", working: "\\text{target}", marks: 1, markCode: "AO2" },
              { reasoning: "Refute: clothing is a small part of self-expression — accessories, attitude and talent remain free.", marks: 1, markCode: "AO2" },
              { reasoning: "Counter-argument: uniforms promote equality and reduce bullying — outweighing limited clothing choice.", marks: 1, markCode: "AO2" },
              { reasoning: "Deliver clearly and stay on the debate's structure.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Refute by showing self-expression extends beyond clothing (accessories, attitude, talent) while uniforms deliver equality and reduce bullying — a stronger benefit.",
            commonErrors: ["Repeating the proposition's case without addressing the self-expression point."],
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
