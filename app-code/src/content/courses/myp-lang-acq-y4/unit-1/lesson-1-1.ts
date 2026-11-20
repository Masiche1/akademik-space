import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mla4-u1-lesson-1-1",
  code: "1-1",
  title: "Understanding Discussions and Debates",
  goal: "I CAN follow a structured discussion or debate, identify each speaker's position and the arguments used, and ask clarifying questions.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Debate", definition: "A formal discussion where speakers argue for or against a motion." },
    { term: "Position", definition: "A speaker's stance or opinion on an issue." },
    { term: "Argument", definition: "A reason given to support a position." },
    { term: "Counter-argument", definition: "An argument against the opposing side's position." },
    { term: "Clarify", definition: "To make something clearer or easier to understand." },
  ],
  concepts: [
    {
      id: "mla4-u1-discussions",
      title: "Following discussions and debates",
      skill: "Track positions, arguments and counter-arguments in a multi-speaker discussion.",
      lesson: {
        sections: [
          {
            heading: "Structure of a debate",
            body: "A debate usually has: a **motion** (the topic, e.g. 'School uniforms should be compulsory'), speakers **for** and **against**, each giving **arguments** (reasons), possible **counter-arguments** ('You say X, but what about Y?'), and sometimes a **vote** at the end. Your job as listener: track who holds which position.",
          },
          {
            heading: "Signal phrases in debates",
            body: "Learn the language of argument: **'I would argue that...'**, **'The evidence suggests...'**, **'On the other hand...'**, **'However, critics say...'**, **'In response to that...'**, **'To sum up...'**. These phrases mark position changes and help you follow the debate's logic.",
          },
          {
            heading: "Asking for clarification",
            body: "In discussions, ask when unclear: 'Could you explain what you mean by...?', 'Sorry, did you say...?', 'What evidence do you have for that?'. Good listeners ask questions — it shows engagement and helps everyone understand.",
          },
        ],
        keyFormulas: [
          { name: "Debate phrases", statement: "I would argue / On the other hand / In response / To sum up" },
        ],
        workedExample: {
          problem: "Speaker A: 'Uniforms save time.' Speaker B: 'But they limit self-expression.' Who disagrees and why?",
          solution: "Speaker B disagrees — they argue uniforms restrict individuality.",
        },
      },
      questions: [
        {
          id: "mla4-u1-discussions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a debate, what is the 'motion'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of speech" },
              { id: "b", text: "The topic or statement being debated" },
              { id: "c", text: "A voting system" },
              { id: "d", text: "The judges" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motion", statement: "The proposition or topic under debate." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — motion = the debated statement.", working: "debated topic", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The topic or statement being debated",
            commonErrors: ["Confusing motion with a speech."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-discussions-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Debate Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Speaker A: 'I would argue that homework helps students learn. The evidence shows regular practice improves results.'\nSpeaker B: 'On the other hand, homework causes stress. Many students already spend eight hours at school. In response to that, schools should reduce homework, not increase it.'",
          },
          stem: "What is each speaker's position on homework?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Position tracking", statement: "Each speaker states a clear position with reasons." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — A supports homework (helps learn, improves results).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — B opposes/increases (causes stress; reduce not increase).", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — both positions correctly identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A: for homework; B: against (reduce it).",
            commonErrors: ["Missing that B wants LESS homework, not no homework."],
            examinerNote: "Both positions with reasons needed.",
          },
        },
        {
          id: "mla4-u1-discussions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Discussion: Should School Start Later?",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Teacher: 'Later starts would help students sleep more. Research shows teenagers need nine hours.'\nParent: 'But it would mess up working parents' schedules. Many can't drop children off later.'\nStudent: 'I agree with the teacher. I'm always tired in the morning. However, I understand the parent's point.'",
          },
          stem: "Identify each speaker's position and the main argument for or against later starts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multi-speaker analysis", statement: "Track each position + key argument." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Teacher + Student: for later starts (sleep, tiredness).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Parent: against (work schedules).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — key argument: teenagers need 9 hours sleep.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — analysis is balanced and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Teacher/Student for (sleep need); Parent against (schedules); argument: 9 hours sleep.",
            commonErrors: ["Missing the student's mixed position (agrees but acknowledges parent)."],
            examinerNote: "Must identify all three speakers.",
          },
        },
        {
          id: "mla4-u1-discussions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Panel Discussion: Phones in School",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Moderator: 'Our topic today is mobile phones in school. Anna, you're against — why?'\nAnna: 'Phones distract students. In my experience, notifications interrupt learning constantly.'\nBen: 'I see that point, but phones are essential for safety. Parents need to reach children in emergencies.'\nAnna: 'That's a fair point. Perhaps a compromise: phones allowed at break time only.'\nModerator: 'Interesting — it seems we're moving towards a middle ground.'",
          },
          stem: "Read the discussion and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main topic?", marks: 1 },
            { label: "b", prompt: "What is Anna's main argument against phones?", marks: 1 },
            { label: "c", prompt: "What counter-argument does Ben give?", marks: 1 },
            { label: "d", prompt: "What compromise is suggested?", marks: 1 },
            { label: "e", prompt: "Write two questions you could ask the panel to clarify their positions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Debate comprehension + clarification", statement: "Track topic, arguments, counter-arguments, compromise; produce clarifying questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — mobile phones in school.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — phones distract / notifications interrupt.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — phones essential for safety/emergencies.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A: Listening — phones at break time only.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Criterion C: Speaking — two relevant clarifying questions.", marks: 1, markCode: "C" },
              { part: "e", reasoning: "Criterion D: Writing — correct question forms.", marks: 1, markCode: "D" },
              { part: "e", reasoning: "Criterion C: Speaking — questions probe positions/reasons.", marks: 1, markCode: "C" },
              { part: "e", reasoning: "Criterion D: Writing — accurate grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) phones in school (b) distraction (c) safety (d) break-time only (e) two clarifying questions.",
            commonErrors: ["Questions that don't seek clarification."],
            examinerNote: "(e) must be genuine clarifying questions.",
          },
        },
        {
          id: "mla4-u1-discussions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a debate, what do we call a speaker who argues for the motion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An opponent" },
              { id: "b", text: "A proposer (speaker for)" },
              { id: "c", text: "A judge" },
              { id: "d", text: "An audience member" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proposer", statement: "A speaker who argues in favour of the motion." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'for' speakers support the motion.", working: "for = proposer", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A proposer (speaker for)",
            commonErrors: ["Confusing proposer with opponent."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-discussions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase most clearly signals a counter-argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'To sum up...'" },
              { id: "b", text: "'You say uniforms save time, but what about self-expression?'" },
              { id: "c", text: "'Good morning, everyone.'" },
              { id: "d", text: "'The debate is now finished.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Counter-argument signals", statement: "Phrases like 'You say X, but...' challenge the other side." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — option b challenges the other side's point.", working: "counter", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'You say uniforms save time, but what about self-expression?'",
            commonErrors: ["Choosing 'to sum up' — that signals a conclusion, not a counter."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-discussions-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Quick Exchange",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Student A: 'I think our school should have a vegetable garden.'\nStudent B: 'That sounds nice, but we do not have enough space in the playground.'",
          },
          stem: "Who supports the garden and who raises a concern?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Position tracking", statement: "Each speaker's position must be identified." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Student A supports the garden ('should have').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Student B has a concern: not enough space.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A: for the garden; B: concerned about space.",
            commonErrors: ["Missing that B is not fully against — only worried about space."],
            examinerNote: "Both positions needed.",
          },
        },
        {
          id: "mla4-u1-discussions-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Debate Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "On the motion 'Students should wear uniforms': Speaker A gives two reasons — uniforms save time and look smart. Speaker B gives one reason — uniforms limit self-expression.",
          },
          stem: "How many reasons does Speaker A give?",
          response: {
            type: "numeric",
            parts: [
              { label: "reasons", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail scanning", statement: "Count the reasons stated for each speaker." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Speaker A gives two reasons: save time, look smart.", working: "2 reasons", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**2** reasons",
            commonErrors: ["Counting Speaker B's reason instead."],
            examinerNote: "A1 for 2.",
          },
        },
        {
          id: "mla4-u1-discussions-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Panel Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Moderator: 'Should homework be banned?'\nSara: 'Yes — it takes away family time and causes stress.'\nOmar: 'No — regular practice helps us remember what we learn.'",
          },
          stem: "Which statement best summarises the two positions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both speakers want homework banned" },
              { id: "b", text: "Sara is against homework; Omar supports it" },
              { id: "c", text: "Both speakers support homework" },
              { id: "d", text: "Neither speaker gives a reason" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Position summary", statement: "Summarise each speaker's stance accurately." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Sara wants homework banned; Omar supports it.", working: "Sara against, Omar for", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — each gives a reason (stress vs practice).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sara is against homework; Omar supports it",
            commonErrors: ["Missing that the positions are opposite."],
            examinerNote: "A2 for (b).",
          },
        },
        {
          id: "mla4-u1-discussions-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Discussion Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Amina: 'Longer breaks would help students concentrate.'\nBen: 'I agree breaks are important. However, longer breaks would make the school day shorter for learning.'",
          },
          stem: "Identify Amina's argument and Ben's counter-argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument + counter-argument", statement: "Track the claim and the response to it." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Amina's argument: longer breaks improve concentration.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Ben agrees breaks matter but counters: less learning time.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — both argument and counter correctly separated.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Amina: breaks help concentration; Ben: less time for learning.",
            commonErrors: ["Missing that Ben partially agrees first."],
            examinerNote: "Both sides needed.",
          },
        },
        {
          id: "mla4-u1-discussions-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Discussion Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Teacher: 'Our new reading programme improved results last year.'\nParent: 'That is interesting. Which classes improved the most?'\nTeacher: 'Mostly the older students. The younger ones need more support.'",
          },
          stem: "Write two questions you could ask to clarify the discussion further.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarifying questions", statement: "Questions should probe details or evidence." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — question 1 probes evidence or detail (e.g. which results improved).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — question 2 probes a different aspect (e.g. support for younger students).", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — questions are grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Two relevant clarifying questions, e.g. 'How much did results improve?' and 'What support will younger students get?'",
            commonErrors: ["Questions that repeat information rather than clarify."],
            examinerNote: "Questions must seek new information.",
          },
        },
        {
          id: "mla4-u1-discussions-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question is the best clarifying question in a discussion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'What evidence supports that claim?'" },
              { id: "b", text: "'I totally agree, right?'" },
              { id: "c", text: "'That was a long speech.'" },
              { id: "d", text: "'Can we stop now?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Clarifying question", statement: "A good clarifying question seeks evidence or detail." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — option a asks for evidence, which clarifies.", working: "evidence", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** 'What evidence supports that claim?'",
            commonErrors: ["Choosing agreement or comments that add no information."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla4-u1-discussions-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Debate Close",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Chair: 'We have heard arguments for and against later school starts. It seems most of us now agree a compromise might work — starting thirty minutes later on Mondays only.'",
          },
          stem: "What does the chair's final comment suggest about the debate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The debate ended with no agreement" },
              { id: "b", text: "A compromise position is emerging" },
              { id: "c", text: "Everyone rejected later starts" },
              { id: "d", text: "The chair will decide alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Debate outcome inference", statement: "Read how positions shift towards compromise." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'compromise might work' signals emerging agreement.", working: "compromise", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — 'most of us now agree' confirms a shift.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A compromise position is emerging",
            commonErrors: ["Missing the shift towards compromise."],
            examinerNote: "A2 for (b).",
          },
        },
        {
          id: "mla4-u1-discussions-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Group Discussion",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Leila: 'I believe online lessons are more flexible.'\nMarco: 'Flexibility is useful, but online lessons reduce face-to-face contact.'\nPriya: 'I partly agree with both. Perhaps a mix of online and classroom lessons is best.'",
          },
          stem: "Identify each speaker's position on online lessons and the main argument used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multi-speaker analysis", statement: "Track position and argument for each speaker." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Leila: for online lessons (flexibility).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Marco: against/qualified (less face-to-face contact).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Priya: middle ground (mix of both).", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — all three positions and their reasons clearly stated.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Leila for (flexible); Marco against (no face-to-face); Priya compromise (mix).",
            commonErrors: ["Missing Priya's middle position."],
            examinerNote: "All three speakers must be identified.",
          },
        },
        {
          id: "mla4-u1-discussions-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Discussion Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Jamal: 'I see strong arguments on both sides. I am not ready to decide yet.'",
          },
          stem: "What does Jamal's statement imply about his position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He strongly supports one side" },
              { id: "b", text: "He is undecided and open to more information" },
              { id: "c", text: "He wants to end the discussion" },
              { id: "d", text: "He disagrees with both sides" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Implied position", statement: "'Not ready to decide' implies an open, undecided stance." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'not ready to decide' = undecided/open.", working: "undecided", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** He is undecided and open to more information",
            commonErrors: ["Reading 'not ready' as rejection of both sides."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-discussions-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Class Debate",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Motion: 'Should students wear school uniforms?'\nFor: 'Uniforms reduce bullying and save time getting ready.'\nAgainst: 'Uniforms limit self-expression and can be uncomfortable.'\nModerator: 'We will now take questions from the audience.'",
          },
          stem: "Read the debate and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the motion.", marks: 1 },
            { label: "b", prompt: "Give one argument for and one against.", marks: 2 },
            { label: "c", prompt: "Write two questions a listener could ask to clarify positions.", marks: 2 },
            { label: "d", prompt: "What does the moderator announce next?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Debate comprehension + clarification", statement: "Extract motion, arguments, and produce clarifying questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — motion: uniforms in school.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — for: reduce bullying/save time; against: limit expression/uncomfortable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — both sides represented.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C: Speaking — question 1 seeks clarification (e.g. about bullying evidence).", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C: Speaking — question 2 seeks clarification (e.g. about comfort or expression).", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion A: Listening — audience questions next.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) uniforms motion (b) bullying/time vs expression/comfort (c) two questions (d) audience questions.",
            commonErrors: ["Questions that do not seek clarification."],
            examinerNote: "(c) must be genuine clarifying questions.",
          },
        },
      ],
    },
    {
      id: "mla4-u1-media-articles",
      title: "Reading media reports and opinion pieces",
      skill: "Read news articles and opinion columns, identify bias and evaluate the reliability of sources.",
      lesson: {
        sections: [
          {
            heading: "News vs opinion",
            body: "**News reports** aim to inform with facts: who, what, when, where. **Opinion pieces** (columns, editorials) argue a viewpoint. The same event can be reported differently depending on the source's perspective. Learn to ask: Is this reporting facts or persuading me?",
          },
          {
            heading: "Spotting bias",
            body: "Bias appears through: **word choice** ('regime' vs 'government'), **selective facts** (only one side's evidence), **loaded adjectives** ('disastrous policy', 'wonderful success'), and **omission** (leaving out important context). A biased article is not necessarily false — but it is one-sided.",
          },
          {
            heading: "Evaluating sources",
            body: "Ask: Who wrote this? What is their purpose? What evidence do they give? Do they acknowledge other views? Reliable sources cite evidence, attribute claims, and present balanced perspectives. Be sceptical of sources that only give one side or use extreme language.",
          },
        ],
        keyFormulas: [
          { name: "Bias signals", statement: "Loaded adjectives + selective facts + one-sided + extreme language" },
        ],
        workedExample: {
          problem: "Article says 'The terrible new law will destroy our schools.' Is it biased?",
          solution: "Yes — 'terrible' and 'destroy' are loaded words showing strong negative bias, not neutral reporting.",
        },
      },
      questions: [
        {
          id: "mla4-u1-media-articles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'bias' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A writing mistake" },
              { id: "b", text: "A one-sided preference that affects presentation" },
              { id: "c", text: "A type of headline" },
              { id: "d", text: "A factual error" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bias", statement: "One-sided presentation favouring a particular view." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — bias = one-sided preference.", working: "one-sided", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A one-sided preference that affects presentation",
            commonErrors: ["Confusing bias with factual error."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-media-articles-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Headlines",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Headline A: 'New Recycling Law Passes After Years of Debate'\n\nHeadline B: 'Disastrous Recycling Law Forces Painful Changes on Families'",
          },
          stem: "Which headline is more biased? Give two language clues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Headline bias detection", statement: "Loaded adjectives reveal bias." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Headline B is biased.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — clue 1: 'Disastrous' is a strong negative adjective.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — clue 2: 'Painful changes' frames it negatively.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Headline B — 'disastrous' and 'painful' are loaded negative words.",
            commonErrors: ["Choosing A — it is neutral factual reporting."],
            examinerNote: "Two clues required.",
          },
        },
        {
          id: "mla4-u1-media-articles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The government's new education policy is a disaster for our children. Scores have dropped, teachers are overworked, and parents are furious. Everyone agrees this policy must be scrapped immediately. Sources tell us the minister knew about these problems months ago but said nothing.",
          },
          stem: "Identify three signs of bias in this article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias identification", statement: "Loaded words, one-sided claims, unverified assertions." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'disaster' is a loaded negative adjective.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Everyone agrees' is an unsupported generalisation.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Sources tell us' is vague, unverified attribution.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — no opposing view presented.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Disaster', 'everyone agrees', vague 'sources', no balance.",
            commonErrors: ["Missing the subtle 'sources tell us' vagueness."],
            examinerNote: "Three or more bias signals needed.",
          },
        },
        {
          id: "mla4-u1-media-articles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Student Phone Ban",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The school board voted to ban phones during lessons. Proponents argue phones distract students and harm learning. 'We need to protect students' attention,' said board member Sarah Chen. Opponents counter that phones are essential for emergencies and that bans punish responsible students. The policy takes effect next month.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the news event?", marks: 1 },
            { label: "b", prompt: "Give one argument for the ban and one against.", marks: 2 },
            { label: "c", prompt: "Is this article balanced or biased? Explain with evidence.", marks: 3 },
            { label: "d", prompt: "Write your own opinion in two sentences with a reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Media analysis", statement: "Extract event, arguments, evaluate balance, give own view." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — school board banned phones during lessons.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — for: distraction/harm learning; against: emergencies/responsible students.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both sides represented.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — balanced: presents both sides fairly.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — evidence: 'proponents' and 'opponents' both quoted.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — clear justification.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — clear personal opinion.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — reason + correct sentences.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) phone ban (b) distraction vs emergencies (c) balanced — both sides (d) own opinion + reason.",
            commonErrors: ["Calling it biased without evidence."],
            examinerNote: "(c) must cite specific evidence of balance/bias.",
          },
        },
        {
          id: "mla4-u1-media-articles-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main difference between a news report and an opinion piece?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "News reports always use longer sentences" },
              { id: "b", text: "News reports inform with facts; opinion pieces argue a view" },
              { id: "c", text: "Opinion pieces never mention facts" },
              { id: "d", text: "There is no difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "News vs opinion", statement: "News informs; opinion persuades." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — reports give facts; opinion argues a view.", working: "inform vs persuade", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** News reports inform with facts; opinion pieces argue a view",
            commonErrors: ["Thinking opinion pieces contain no facts."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-media-articles-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is most likely to appear in a biased article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'policy'" },
              { id: "b", text: "'disastrous'" },
              { id: "c", text: "'according to'" },
              { id: "d", text: "'reported'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded words", statement: "Strong adjectives like 'disastrous' signal bias." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'disastrous' is a loaded negative adjective.", working: "loaded", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'disastrous'",
            commonErrors: ["Choosing neutral academic words."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-media-articles-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Two Sentences",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Sentence A: 'The council approved the new bike lanes on Monday.'\nSentence B: 'The council foolishly forced painful bike lanes on our streets.'",
          },
          stem: "Which sentence is biased and what words show it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias detection", statement: "Loaded adjectives reveal a one-sided view." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Sentence B is biased.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'foolishly' and 'painful' are loaded negative words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Sentence B — 'foolishly' and 'painful' are loaded words.",
            commonErrors: ["Choosing A, which is neutral reporting."],
            examinerNote: "Both the choice and the clues needed.",
          },
        },
        {
          id: "mla4-u1-media-articles-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The new library opened last week. It has 5,000 books, 20 computers and a quiet study area.",
          },
          stem: "How many computers does the library have?",
          response: {
            type: "numeric",
            parts: [
              { label: "computers", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail scanning", statement: "Scan for the specific fact asked." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — text states '20 computers'.", working: "20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**20**",
            commonErrors: ["Answering 5,000 (books) instead."],
            examinerNote: "B1 for 20.",
          },
        },
        {
          id: "mla4-u1-media-articles-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Opinion Piece",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "I believe students should have shorter school days. Long days leave no time for family or hobbies. Of course, some teachers may disagree, but the evidence from other countries supports my view.",
          },
          stem: "How does the writer handle the other side's view?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They ignore it completely" },
              { id: "b", text: "They acknowledge it briefly, then dismiss it" },
              { id: "c", text: "They give it equal space" },
              { id: "d", text: "They agree with it fully" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Handling opposing views", statement: "Opinion writers may acknowledge then dismiss other views." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'some teachers may disagree' acknowledges, then 'evidence supports my view' dismisses.", working: "acknowledge then dismiss", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — not equal space: opinion clearly dominates.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They acknowledge it briefly, then dismiss it",
            commonErrors: ["Thinking a brief mention makes the piece balanced."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u1-media-articles-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Column Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The mayor's plan will transform our city. Crumbling roads will be repaired, parks will be renovated, and every family will benefit. No reasonable person could oppose such obvious progress.",
          },
          stem: "Identify two signs of bias in this column.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias identification", statement: "Loaded words and dismissive claims signal bias." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'transform', 'crumbling', 'obvious progress' are loaded/positive framing.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'No reasonable person could oppose' dismisses any opposing view.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — no evidence or opposing perspective offered.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Loaded positive words ('transform', 'obvious progress') + dismissive claim ('no reasonable person could oppose') + no balance.",
            commonErrors: ["Missing the dismissive generalisation."],
            examinerNote: "Two or more bias signals needed.",
          },
        },
        {
          id: "mla4-u1-media-articles-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The school canteen will introduce a new menu next term. It will include more vegetables, wholegrain bread and fruit. The head teacher said the change responds to parents' requests for healthier options.",
          },
          stem: "Write three questions a critical reader could ask about this article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questioning", statement: "Questions probe purpose, evidence and balance." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — question about evidence or cost (e.g. who pays for the change?).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — question about other perspectives (e.g. do students agree?).", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — questions are clear and grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three relevant questions, e.g. 'What evidence shows healthier is better?', 'Do students support this?', 'How much will it cost?'",
            commonErrors: ["Questions unrelated to evaluating the article."],
            examinerNote: "Questions should test reliability, not just content.",
          },
        },
        {
          id: "mla4-u1-media-articles-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is most likely from a reliable news report rather than an opinion piece?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'This terrible policy will ruin everything.'" },
              { id: "b", text: "'The council voted 7-2 to approve the policy on Tuesday.'" },
              { id: "c", text: "'Everyone knows this is a disaster.'" },
              { id: "d", text: "'I believe this is the best decision ever.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Neutral reporting", statement: "News reports use facts and precise details." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — option b gives factual detail (vote count, date).", working: "factual", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'The council voted 7-2 to approve the policy on Tuesday.'",
            commonErrors: ["Choosing emotionally charged options."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-media-articles-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Critics say the mayor's housing plan will fail. Supporters argue it is the best chance our city has had in years. Both sides agree the housing problem is urgent.",
          },
          stem: "What does this excerpt suggest about the article's balance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is fully balanced and fair" },
              { id: "b", text: "It presents both sides but leans towards one view" },
              { id: "c", text: "It only gives critics' views" },
              { id: "d", text: "It only gives supporters' views" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balance evaluation", statement: "Both sides may appear while language still favours one." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — both critics and supporters are quoted.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'best chance in years' is positive loaded phrasing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It presents both sides but leans towards one view",
            commonErrors: ["Calling it fully balanced despite loaded wording."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u1-media-articles-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Editorial Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Our school must ban single-use plastics. Every year, tonnes of plastic enter our oceans and harm wildlife. Other schools have already made the switch, and students here support the change. There is simply no excuse for delay.",
          },
          stem: "Evaluate this editorial: identify its purpose, one strength and one weakness in its argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Editorial evaluation", statement: "Identify persuasive purpose, evidence and gaps." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — purpose: persuade readers to support the ban.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — strength: cites environmental harm and other schools' example.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — weakness: no opposing view or cost/practicality discussion.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — evaluation is balanced and justified.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Persuasive editorial; strength: evidence + precedent; weakness: no opposing view.",
            commonErrors: ["Ignoring the one-sided presentation."],
            examinerNote: "Must identify both a strength and a weakness.",
          },
        },
        {
          id: "mla4-u1-media-articles-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Article Excerpt",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "The minister declined to comment on the allegations, saying only that 'an investigation is ongoing.'",
          },
          stem: "Why might a reporter include this sentence in a news article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To prove the minister is guilty" },
              { id: "b", text: "To show the minister has not yet confirmed or denied the claims" },
              { id: "c", text: "To fill space with irrelevant detail" },
              { id: "d", text: "To praise the minister's honesty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Neutral attribution", statement: "Reporting a refusal to comment keeps the article factual." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the sentence reports no confirmation or denial — factual neutrality.", working: "no comment", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To show the minister has not yet confirmed or denied the claims",
            commonErrors: ["Assuming silence equals guilt."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u1-media-articles-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Reports",
            author: "Written for Akademik Space",
            source: "Media literacy practice",
            text: "Report 1: 'The festival attracted 10,000 visitors. Organisers called it a success. Some local residents complained about noise.'\nReport 2: 'The festival was a triumph for the city, drawing record crowds and proving our community's spirit. Complaints about noise are exaggerated by a few unhappy neighbours.'",
          },
          stem: "Compare the two reports and complete the tasks.",
          parts: [
            { label: "a", prompt: "What fact do both reports share?", marks: 1 },
            { label: "b", prompt: "Give one word or phrase from Report 2 that shows bias.", marks: 2 },
            { label: "c", prompt: "How does Report 1 treat the noise complaints differently?", marks: 1 },
            { label: "d", prompt: "Write one sentence explaining which report is more reliable and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative media analysis", statement: "Compare fact selection and language across sources." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — both report the festival drew large crowds (10,000 / record).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'triumph' or 'proving our community's spirit' or 'exaggerated' — loaded words.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'few unhappy neighbours' dismisses the complaints.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — Report 1 mentions complaints neutrally without judging them.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — Report 1 is more reliable: neutral wording, includes complaints.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — explanation is clear and accurate.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) large crowds (b) 'triumph'/'exaggerated' (c) neutral mention (d) Report 1 — balanced.",
            commonErrors: ["Choosing Report 2 because it sounds more positive."],
            examinerNote: "(d) must justify with language evidence.",
          },
        },
      ],
    },
  ],
};
