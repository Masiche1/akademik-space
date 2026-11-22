import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "langb-u4-lesson-4-1",
  code: "4-1",
  title: "Analysing Longer Texts and Arguments",
  goal: "I CAN analyse the structure and argument of longer texts and identify the writer's purpose and techniques.",
  standards: ["Comprehension", "Analysis", "Critical reading", "Language B SL"],
  vocabulary: [
    { term: "Argument", definition: "A reasoned case for or against a position, built from claims and evidence." },
    { term: "Claim", definition: "A statement the writer wants the reader to accept as true." },
    { term: "Evidence", definition: "Facts, examples, statistics or quotations used to support a claim." },
    { term: "Counter-argument", definition: "An opposing view that the writer acknowledges and answers." },
    { term: "Bias", definition: "A tendency to favour one side, often revealed by word choice and selection of evidence." },
    { term: "Structure of a text", definition: "The way paragraphs and sections are organised to build the writer's purpose." },
  ],
  concepts: [
    {
      id: "langb-u4-longer-texts",
      title: "Reading longer texts strategically",
      skill: "Navigate extended texts using structure, headings and paragraph openers to track the argument.",
      lesson: {
        sections: [
          {
            heading: "Structure is your map",
            body: "Longer texts are built from sections, and each section does a job. Read **headings and subheadings** first — they reveal the skeleton. Then read the **first sentence of each paragraph** to track the argument's progression. This gives you the whole structure in a fraction of the reading time, leaving you to zoom in on the parts the questions target.",
          },
          {
            heading: "Following the argument",
            body: "Arguments move through stages: the writer states a **claim**, provides **evidence**, may concede a **counter-argument**, and reaches a **conclusion**. As you read, ask at each stage: What is the writer trying to prove? What evidence supports it? Where might they be biased? This habit turns passive reading into analysis — the skill Language B rewards most.",
          },
          {
            heading: "Purpose and audience of longer texts",
            body: "Longer texts usually have a clear purpose: to inform, persuade, argue or analyse. Identify it early — it shapes how you read everything after. A persuasive text needs you to test its claims; an informative text needs you to extract and organise facts. Check the ending: conclusions often restate the purpose explicitly and are useful for gist questions.",
          },
        ],
        keyFormulas: [
          { name: "Structural scan", statement: "Headings + paragraph openers = the argument's skeleton in minutes" },
          { name: "Argument flow", statement: "Claim -> evidence -> (counter-argument) -> conclusion" },
        ],
        workedExample: {
          problem: "An article has headings 'The problem', 'Two solutions', 'Our recommendation'. How do you read it?",
          solution: "Scan headings first: problem stated, solutions compared, writer's position at the end. Read problem + recommendation carefully; skim solution details unless a question targets them.",
        },
      },
      questions: [
        {
          id: "langb-u4-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the best first step when reading a long text in an exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translate the whole text" },
              { id: "b", text: "Read the headings and first sentences to map the structure" },
              { id: "c", text: "Read every word carefully from start to finish" },
              { id: "d", text: "Read only the last paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structural reading", statement: "Headings and paragraph openers reveal the argument's skeleton efficiently." },
            ],
            steps: [
              { reasoning: "Structure-first reading maps the text before detailed reading.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Read the headings and first sentences to map the structure",
            commonErrors: ["Reading linearly and running out of time before the questions."],
          },
        },
        {
          id: "langb-u4-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the typical stages of an argument in a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Argument structure", statement: "Claim, evidence, counter-argument, conclusion." },
            ],
            steps: [
              { reasoning: "Claim: the position the writer wants accepted.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: facts, examples, statistics supporting the claim; possibly a counter-argument conceded and answered.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the final restatement or call to action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Claim -> evidence -> counter-argument -> conclusion.",
            commonErrors: ["Missing the counter-argument stage — acknowledging opposition strengthens an argument."],
          },
        },
        {
          id: "langb-u4-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why identifying a text's purpose changes how you read it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Purpose-driven reading", statement: "Purpose determines what counts as important — facts vs claims vs opinions." },
            ],
            steps: [
              { reasoning: "Purpose tells you what to extract: facts for informative texts, claims for persuasive ones.", marks: 1, markCode: "M" },
              { reasoning: "A persuasive text must be read critically — test claims, spot bias.", marks: 1, markCode: "R" },
              { reasoning: "An informative text is read for accurate extraction and organisation.", marks: 1, markCode: "M" },
              { reasoning: "Reading with purpose in mind prevents treating opinions as facts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose determines what matters — extraction vs critical evaluation — and prevents mistaking opinion for fact.",
            commonErrors: ["Reading all texts the same way regardless of purpose."],
          },
        },
        {
          id: "langb-u4-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Should schools ban phones?",
            author: "Written for Akademik Space",
            source: "Argument analysis practice",
            text: "Many schools now ban mobile phones in classrooms, arguing they distract students and damage concentration. Supporters point to studies showing that even a phone on the desk reduces learning. Critics respond that phones can support learning — students photograph notes and look up information instantly. The evidence, however, is mixed: benefits appear mainly when phones are used for specific tasks rather than general access. Perhaps the answer is not a total ban but clear rules: phones allowed for lessons that need them, restricted otherwise.",
          },
          parts: [
            { label: "a", prompt: "State the writer's overall position on phone bans.", marks: 2 },
            { label: "b", prompt: "Identify the counter-argument the writer acknowledges.", marks: 2 },
            { label: "c", prompt: "Explain how the writer uses evidence to reach a balanced conclusion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument analysis", statement: "Position + counter-argument + evidence-qualified conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "The writer favours rules over a total ban — a nuanced middle position.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Position accurately identified ('not a total ban but clear rules').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Counter-argument: critics say phones support learning — photos of notes, instant information.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correctly identified as the opposing view.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evidence is qualified: benefits appear only for specific tasks, not general access.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The 'however' signals the writer weighing evidence before concluding.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion synthesises both sides into a practical compromise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rules over total ban. (b) Phones can aid learning. (c) Evidence qualified by context leads to balanced compromise.",
            commonErrors: ["Reading the opening 'ban' argument as the writer's own position."],
          },
        },
        {
          id: "langb-u4-q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is it useful to read headings and subheadings before reading a long text in full?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They tell you the text's word count" },
              { id: "b", text: "They reveal the text's structure and organisation before detailed reading" },
              { id: "c", text: "They replace the need to read the text at all" },
              { id: "d", text: "They contain the exam answers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structural reading", statement: "Headings reveal the skeleton of the argument before detailed reading." },
            ],
            steps: [
              { reasoning: "Headings and subheadings show how sections are organised.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They reveal the text's structure and organisation before detailed reading",
            commonErrors: ["Thinking headings can substitute for reading — they only map the structure."],
          },
        },
        {
          id: "langb-u4-q26",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an argument, what is a 'claim'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fact that can be verified" },
              { id: "b", text: "A statement the writer wants the reader to accept as true" },
              { id: "c", text: "A quotation from another source" },
              { id: "d", text: "The writer's final conclusion only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Claim", statement: "The position or statement the writer wants the reader to accept." },
            ],
            steps: [
              { reasoning: "A claim is what the argument is trying to establish — it is supported by evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A statement the writer wants the reader to accept as true",
            commonErrors: ["Confusing claims with facts — a claim needs evidence to be convincing."],
          },
        },
        {
          id: "langb-u4-q27",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A paragraph opens 'However, critics argue that the policy ignores rural areas.' What does this signal in the argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The writer is presenting a counter-argument" },
              { id: "b", text: "The text has reached its conclusion" },
              { id: "c", text: "The writer has changed the topic completely" },
              { id: "d", text: "The writer agrees fully with the critics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Counter-argument signals", statement: "'However', 'critics argue', 'on the other hand' introduce opposing views." },
            ],
            steps: [
              { reasoning: "'However' plus 'critics argue' introduces an opposing view the writer must address.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The writer is presenting a counter-argument",
            commonErrors: ["Assuming 'however' always ends an argument — it often introduces the opposition."],
          },
        },
        {
          id: "langb-u4-q28",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is the conclusion of a long text especially useful when answering questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is never tested in questions" },
              { id: "b", text: "It repeats the introduction word for word" },
              { id: "c", text: "It often restates the writer's purpose and position explicitly" },
              { id: "d", text: "It contains the longest sentences" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose identification", statement: "Conclusions restate the writer's purpose and position — useful for gist questions." },
            ],
            steps: [
              { reasoning: "Conclusions typically summarise the argument and restate the position.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It often restates the writer's purpose and position explicitly",
            commonErrors: ["Skipping the conclusion — it is often the fastest route to the writer's purpose."],
          },
        },
        {
          id: "langb-u4-q29",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence would best serve as evidence for the claim that 'exercise improves concentration'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exercise is obviously good for everyone." },
              { id: "b", text: "Doctors should tell patients to exercise more" },
              { id: "c", text: "A 2023 study found students who exercised daily scored 15% higher on attention tests" },
              { id: "d", text: "Many people believe sport is enjoyable" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence quality", statement: "Strong evidence is specific, verifiable and directly relevant to the claim." },
            ],
            steps: [
              { reasoning: "Option (b) gives a specific study, date and measurable result directly relevant to the claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A 2023 study found students who exercised daily scored 15% higher on attention tests",
            commonErrors: ["Choosing statements that agree with the claim without checking they actually prove it."],
          },
        },
        {
          id: "langb-u4-q30",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a timed exam, why is 'skim-then-zoom' more effective than reading every word of a long text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Questions never require detailed understanding" },
              { id: "b", text: "It lets you skip the introduction" },
              { id: "c", text: "It reserves careful reading for the sections the questions target" },
              { id: "d", text: "Long texts contain too many words to understand" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam reading strategy", statement: "Map first, then zoom in on targeted sections — time-efficient." },
            ],
            steps: [
              { reasoning: "Structural scanning maps the text; detailed reading is then focused where needed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It reserves careful reading for the sections the questions target",
            commonErrors: ["Confusing efficiency with superficiality — you still read carefully, just selectively."],
          },
        },
        {
          id: "langb-u4-q31",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three benefits of reading the first sentence of each paragraph before reading in detail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structural reading", statement: "Paragraph openers track the argument's progression efficiently." },
            ],
            steps: [
              { reasoning: "Shows how the argument develops from paragraph to paragraph.", marks: 1, markCode: "M" },
              { reasoning: "Reveals the function of each paragraph — claim, evidence, counter-argument.", marks: 1, markCode: "M" },
              { reasoning: "Lets you decide which sections deserve careful reading for the questions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tracks progression, reveals paragraph function, guides targeted reading.",
            commonErrors: ["Only listing 'saves time' — the deeper benefit is tracking the argument's logic."],
          },
        },
        {
          id: "langb-u4-q32",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would identify whether a long text aims to inform, persuade or analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose identification", statement: "Purpose is revealed by structure, tone and the type of content selected." },
            ],
            steps: [
              { reasoning: "Check the text type and tone — neutral reporting suggests informing; emotional or modal language suggests persuading.", marks: 1, markCode: "M" },
              { reasoning: "Examine the ending — explicit recommendations or calls to action signal persuasion.", marks: 1, markCode: "M" },
              { reasoning: "Weighing multiple viewpoints signals analysis rather than simple persuasion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use structure, tone and ending: recommendations and calls to action = persuasive; balanced treatment of views = analytical; neutral facts = informative.",
            commonErrors: ["Deciding purpose from the first paragraph alone — conclusions often clarify it."],
          },
        },
        {
          id: "langb-u4-q33",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a writer might deliberately include a counter-argument in an otherwise persuasive text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Rhetorical strategy", statement: "Addressing opposition makes an argument appear fairer and more credible." },
            ],
            steps: [
              { reasoning: "Acknowledging opposition makes the writer seem fair-minded rather than one-sided.", marks: 1, markCode: "R" },
              { reasoning: "The writer can then answer the counter-argument, strengthening their own position.", marks: 1, markCode: "M" },
              { reasoning: "It anticipates reader objections — addressing doubts before they form.", marks: 1, markCode: "M" },
              { reasoning: "It creates an impression of balanced reasoning, which persuades more effectively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Counter-arguments build credibility, allow the writer to refute opposition and pre-empt reader doubts — strengthening persuasion.",
            commonErrors: ["Assuming a counter-argument means the writer agrees with the opposition."],
          },
        },
        {
          id: "langb-u4-q34",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Should homework be abolished?",
            author: "Written for Akademik Space",
            source: "Argument analysis practice",
            text: "Homework has been part of school life for generations, but the evidence for its benefits is surprisingly weak. Studies show that primary-age children gain little from nightly tasks, while the stress and lost family time are real costs. Proponents argue homework builds discipline and reinforces learning. Yet the same studies find that practice only helps when it is purposeful — busywork achieves nothing. Perhaps schools should replace routine homework with occasional projects chosen by students.",
          },
          parts: [
            { label: "a", prompt: "State the writer's position on homework.", marks: 2 },
            { label: "b", prompt: "Identify the counter-argument and how the writer responds to it.", marks: 2 },
            { label: "c", prompt: "Explain how the writer uses evidence to qualify their position.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument analysis", statement: "Position + counter-argument + evidence-qualified conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Writer questions homework's value and proposes replacing routine homework with chosen projects.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Position accurately identified as sceptical of routine homework.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Counter-argument: homework builds discipline and reinforces learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Writer answers it: practice only helps when purposeful — busywork achieves nothing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evidence cited: studies showing weak benefits for primary children, real stress costs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evidence is qualified — practice helps only when purposeful.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion proposes a nuanced alternative rather than total abolition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sceptical of routine homework; proposes student-chosen projects. (b) Discipline/learning claim answered by 'purposeful practice' point. (c) Studies qualify the position — purpose matters.",
            commonErrors: ["Missing that the writer criticises routine homework rather than all homework."],
          },
        },
        {
          id: "langb-u4-q35",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The case for four-day school weeks",
            author: "Written for Akademik Space",
            source: "Purpose and structure practice",
            text: "Across several countries, schools are experimenting with four-day weeks, and the early results challenge conventional assumptions. Teachers report less burnout and better lesson preparation on their day off. Parents describe fewer sick days and improved family time. Attendance, surprisingly, has risen in pilot programmes. The main obstacle is logistics: working parents need childcare on the fifth day, and exam timetables must be compressed. Supporters argue these problems are solvable, and that a happier, healthier teaching workforce ultimately benefits students more than an extra day of marginal lessons.",
          },
          parts: [
            { label: "a", prompt: "Identify the writer's overall purpose in this text.", marks: 2 },
            { label: "b", prompt: "List two pieces of evidence the writer uses to support the case.", marks: 2 },
            { label: "c", prompt: "Explain how the writer acknowledges and answers the counter-argument.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose and argument analysis", statement: "Persuasive purpose + selective evidence + acknowledged obstacle." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose: to persuade readers that four-day weeks are beneficial and worth trying.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Persuasive rather than purely informative — evidence is selected to support the case.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two of: teacher reports of less burnout, improved family time, rising attendance in pilots.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both examples accurately identified from the text.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Counter-argument acknowledged: logistics — childcare needs and compressed exam timetables.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Writer answers it: supporters argue problems are solvable.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reframes the benefit: happier teachers ultimately benefit students more.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The response is somewhat dismissive but completes the persuasive structure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Persuade readers of four-day week benefits. (b) Teacher wellbeing, family time, rising attendance. (c) Logistics obstacle answered by 'solvable' + long-term teacher benefit.",
            commonErrors: ["Missing the logistical counter-argument embedded in the middle paragraph."],
          },
        },
        {
          id: "langb-u4-q36",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student reads a long text linearly and runs out of time. Explain two strategies they should use instead, and why each helps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam strategy", statement: "Structural scanning plus targeted reading prevents time exhaustion." },
            ],
            steps: [
              { reasoning: "Strategy 1: scan headings and paragraph openers first to map the argument.", marks: 1, markCode: "M" },
              { reasoning: "This gives the structure quickly, leaving time for the questions.", marks: 1, markCode: "R" },
              { reasoning: "Strategy 2: read targeted sections carefully, skim the rest.", marks: 1, markCode: "M" },
              { reasoning: "Time is spent where marks are earned rather than on every word.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scan structure first, then read targeted sections carefully and skim the rest — time is spent where the questions need it.",
            commonErrors: ["Recommending faster linear reading instead of changing the reading strategy."],
          },
        },
      ],
    },
    {
      id: "langb-u4-argument-analysis",
      title: "Identifying claims, evidence and bias",
      skill: "Distinguish facts from opinions, evaluate evidence quality, and detect bias in a text.",
      lesson: {
        sections: [
          {
            heading: "Facts versus opinions",
            body: "A **fact** can be verified ('The school has 800 students'). An **opinion** is a judgement ('Homework is a waste of time'). Arguments mix both — the skill is separating them. Watch for opinion disguised as fact: 'Everyone knows that...', 'It is obvious that...', 'Studies show...' (which study?). Language reveals the difference: modal verbs ('should', 'must'), value words ('unfair', 'excellent') signal opinion.",
          },
          {
            heading: "Evaluating evidence",
            body: "Not all evidence is equal. Strong evidence is specific, recent, relevant and from credible sources. Weak evidence is vague ('many people say'), anecdotal or cherry-picked. Ask: Does the evidence actually prove the claim? A single example proves little; statistics need context. In Language B analysis tasks, commenting on evidence quality demonstrates critical thinking.",
          },
          {
            heading: "Detecting bias",
            body: "**Bias** is a tilt towards one side. Signals include: loaded words ('regime' vs 'government'), one-sided selection of facts, emotional language, and attacking opponents rather than arguments. Detecting bias does not mean dismissing the text — it means reading it as one perspective among possible others. Balanced texts acknowledge counter-arguments; heavily biased texts ignore them.",
          },
        ],
        keyFormulas: [
          { name: "Fact vs opinion", statement: "Verifiable = fact; judgement/value word = opinion; modals signal opinion" },
          { name: "Bias signals", statement: "Loaded words + one-sided evidence + emotional tone + ignored counter-arguments" },
        ],
        workedExample: {
          problem: "'Clearly, the mayor's terrible plan will destroy our town.' What reveals bias?",
          solution: "'Clearly' asserts without proof; 'terrible' and 'destroy' are loaded emotional words; no evidence offered. Strong bias signals.",
        },
      },
      questions: [
        {
          id: "langb-u4-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is an opinion rather than a fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bus arrives at 8.15." },
              { id: "b", text: "The school has three hundred students." },
              { id: "c", text: "The library opened in 1998." },
              { id: "d", text: "Homework should be banned in all schools." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opinion", statement: "A judgement or recommendation that cannot be verified as true or false." },
            ],
            steps: [
              { reasoning: "'Should be banned' is a recommendation — a judgement, not a verifiable fact.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Homework should be banned in all schools.",
            commonErrors: ["Mistaking any strong statement for a fact — check if it can be verified."],
          },
        },
        {
          id: "langb-u4-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three signals that a text may be biased.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias detection", statement: "Loaded words, one-sided evidence and emotional tone signal bias." },
            ],
            steps: [
              { reasoning: "Loaded/emotional words: 'terrible', 'wonderful', 'disastrous' carry judgement.", marks: 1, markCode: "M" },
              { reasoning: "One-sided evidence: only facts supporting one view are selected.", marks: 1, markCode: "M" },
              { reasoning: "Ignoring counter-arguments or attacking opponents personally.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loaded words, one-sided evidence selection, ignored counter-arguments.",
            commonErrors: ["Equating strong language with strong argument — emotion is not evidence."],
          },
        },
        {
          id: "langb-u4-q7",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what makes evidence 'strong' versus 'weak' in an argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence evaluation", statement: "Strong evidence is specific, relevant, credible and sufficient; weak evidence is vague or anecdotal." },
            ],
            steps: [
              { reasoning: "Strong evidence is specific: named sources, figures, dates — verifiable.", marks: 1, markCode: "M" },
              { reasoning: "It is relevant to the claim and sufficient in quantity to support it.", marks: 1, markCode: "M" },
              { reasoning: "Weak evidence is vague ('many people think'), anecdotal or cherry-picked.", marks: 1, markCode: "R" },
              { reasoning: "One example cannot prove a general claim; statistics need context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong = specific, relevant, credible, sufficient. Weak = vague, anecdotal, cherry-picked.",
            commonErrors: ["Accepting any evidence at face value without checking relevance."],
          },
        },
        {
          id: "langb-u4-q8",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The truth about fast food",
            author: "Written for Akademik Space",
            source: "Bias analysis practice",
            text: "Fast food is destroying our children's health — this is the shocking truth that nobody wants to admit. One study found that children who eat fast food weekly are more likely to be overweight. But fast food companies spend millions advertising to children, and the evidence is clear: regulation is urgently needed. Of course, some argue that personal choice matters more than rules. They would say that, wouldn't they? Parents should simply say no.",
          },
          parts: [
            { label: "a", prompt: "Identify two words or phrases that signal bias.", marks: 2 },
            { label: "b", prompt: "State the writer's claim about fast food regulation.", marks: 2 },
            { label: "c", prompt: "Explain how the writer dismisses the counter-argument, and why this weakens the argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias and counter-argument analysis", statement: "Loaded words + dismissive treatment of opposition = biased argument." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of: 'destroying', 'shocking truth', 'nobody wants to admit', 'urgently needed'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both examples identified with loaded/emotional force.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Claim: fast food should be regulated because companies target children.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Claim accurately stated including the reasoning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Counter-argument (personal choice) is dismissed with 'They would say that, wouldn't they?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This mocks opponents instead of answering their point — ad hominem fallacy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Ignoring rather than refuting opposition weakens credibility and reveals bias.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. 'destroying', 'shocking truth'. (b) Regulate fast food due to child-targeted advertising. (c) Mocked, not answered — weakens argument via ad hominem.",
            commonErrors: ["Accepting emotional language as evidence of truth."],
          },
        },
        {
          id: "langb-u4-q37",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence contains opinion disguised as fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is obvious that the new law will fail." },
              { id: "b", text: "The bus carries forty passengers." },
              { id: "c", text: "The museum opened in 2010." },
              { id: "d", text: "The café closes at nine." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fact vs opinion", statement: "Phrases like 'it is obvious' assert judgement without verification." },
            ],
            steps: [
              { reasoning: "'It is obvious that... will fail' is a prediction and judgement — cannot be verified as fact.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It is obvious that the new law will fail.",
            commonErrors: ["Missing that confident phrasing does not make a claim factual."],
          },
        },
        {
          id: "langb-u4-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is the strongest evidence for a claim about rising exam stress?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exams should be abolished anyway" },
              { id: "b", text: "My friend felt stressed before her exams" },
              { id: "c", text: "A national survey of 5,000 students found 62% reported exam anxiety" },
              { id: "d", text: "Everyone knows exams are stressful" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence evaluation", statement: "Specific, large-scale, measurable evidence outweighs vague or anecdotal claims." },
            ],
            steps: [
              { reasoning: "The survey gives scale (5,000 students), a figure (62%) and direct relevance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A national survey of 5,000 students found 62% reported exam anxiety",
            commonErrors: ["Choosing a personal anecdote — one case cannot prove a general trend."],
          },
        },
        {
          id: "langb-u4-q39",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A text says 'Only selfish people would oppose this wonderful idea.' Which bias signal is strongest here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It presents two balanced views" },
              { id: "b", text: "It attacks the character of opponents rather than their arguments" },
              { id: "c", text: "It cites a credible source" },
              { id: "d", text: "It uses a statistic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias detection", statement: "Attacking opponents' motives or character instead of arguments signals bias." },
            ],
            steps: [
              { reasoning: "'Only selfish people' dismisses opponents personally rather than addressing their reasoning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It attacks the character of opponents rather than their arguments",
            commonErrors: ["Missing that labelling opponents is an ad hominem-style bias signal."],
          },
        },
        {
          id: "langb-u4-q40",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word choice most strongly signals the writer's bias in a text about a politician?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The minister announced the policy on Tuesday" },
              { id: "b", text: "Supporters and critics debated the policy" },
              { id: "c", text: "The corrupt regime imposed its disastrous plan" },
              { id: "d", text: "The minister described the policy as a reform" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Loaded language", statement: "Value-laden words like 'corrupt' and 'disastrous' carry judgement, not neutral description." },
            ],
            steps: [
              { reasoning: "'Corrupt regime' and 'disastrous plan' are loaded words revealing strong negative judgement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The corrupt regime imposed its disastrous plan",
            commonErrors: ["Noticing strong tone but failing to link it to bias."],
          },
        },
        {
          id: "langb-u4-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does it mean when a text 'cherry-picks' its evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It selects only evidence supporting one side while ignoring the rest" },
              { id: "b", text: "It cites sources from many countries" },
              { id: "c", text: "It quotes experts accurately" },
              { id: "d", text: "It uses too many statistics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cherry-picking", statement: "Selecting only favourable evidence — a form of one-sided, biased argument." },
            ],
            steps: [
              { reasoning: "Cherry-picking means presenting a partial, favourable selection of facts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It selects only evidence supporting one side while ignoring the rest",
            commonErrors: ["Thinking cherry-picking means inventing evidence — it means selecting real evidence unfairly."],
          },
        },
        {
          id: "langb-u4-q42",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a writer use modal verbs like 'should', 'must' and 'ought to' frequently?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To describe past events accurately" },
              { id: "b", text: "To report facts objectively" },
              { id: "c", text: "To make the text easier to translate" },
              { id: "d", text: "To signal opinion, recommendation or moral judgement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Modal verbs as opinion signals", statement: "Modals express judgement or recommendation rather than verifiable fact." },
            ],
            steps: [
              { reasoning: "Modals like 'should' and 'must' express what ought to happen — a judgement, not a fact.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** To signal opinion, recommendation or moral judgement",
            commonErrors: ["Treating modal-heavy sentences as neutral statements of fact."],
          },
        },
        {
          id: "langb-u4-q43",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the difference between a fact and an opinion, and give one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact vs opinion", statement: "Facts can be verified; opinions are judgements or value statements." },
            ],
            steps: [
              { reasoning: "Fact: verifiable statement — e.g. 'The school has 800 students.'", marks: 1, markCode: "M" },
              { reasoning: "Opinion: judgement — e.g. 'School uniforms are boring.'", marks: 1, markCode: "M" },
              { reasoning: "The distinction matters because arguments rest on opinions needing evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fact = verifiable ('800 students'); opinion = judgement ('uniforms are boring'). Arguments need evidence for opinions.",
            commonErrors: ["Giving examples that are actually opinions disguised as facts."],
          },
        },
        {
          id: "langb-u4-q44",
          difficulty: "core",
          totalMarks: 3,
          stem: "A text argues that 'studies prove' a product works, but never names the studies. Explain two problems with this evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence evaluation", statement: "Unnamed, vague sources cannot be verified and may not exist." },
            ],
            steps: [
              { reasoning: "Problem 1: the claim cannot be checked — no study name, date or author is given.", marks: 1, markCode: "M" },
              { reasoning: "Problem 2: it is vague appeal to authority — 'studies show' is a common opinion-disguised-as-fact device.", marks: 1, markCode: "R" },
              { reasoning: "Credible evidence names sources so readers can verify relevance and quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unnamed studies cannot be verified and function as vague appeals — weak, possibly fabricated, evidence.",
            commonErrors: ["Accepting 'studies show' at face value without demanding specifics."],
          },
        },
        {
          id: "langb-u4-q45",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why detecting bias does not mean dismissing a text entirely.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Critical reading stance", statement: "Biased texts still contain information — read them as one perspective." },
            ],
            steps: [
              { reasoning: "Most texts have some bias — even reliable sources select and frame information.", marks: 1, markCode: "R" },
              { reasoning: "Bias detection reveals perspective, not necessarily falsehood — the underlying facts may still be useful.", marks: 1, markCode: "M" },
              { reasoning: "Reading a biased text as 'one perspective among others' lets you extract value while staying critical.", marks: 1, markCode: "M" },
              { reasoning: "Dismissing entirely would discard information; detecting bias improves rather than ends reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bias reveals perspective, not falsehood — extract value while reading critically rather than dismissing the text.",
            commonErrors: ["Equating 'biased' with 'useless' — biased texts can still inform."],
          },
        },
        {
          id: "langb-u4-q46",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Why we must save the library",
            author: "Written for Akademik Space",
            source: "Bias analysis practice",
            text: "Our wonderful town is facing a crisis — the library, that beloved institution, is about to close. Everyone agrees libraries are good, so there is no real debate here. The council's heartless decision ignores what residents actually want. Of course, some might say digital books make libraries unnecessary — but anyone who says that has clearly never stepped inside one. The truth is simple: without the library, our community loses its soul.",
          },
          parts: [
            { label: "a", prompt: "Identify two words or phrases that signal bias.", marks: 2 },
            { label: "b", prompt: "State the writer's claim about the library's closure.", marks: 2 },
            { label: "c", prompt: "Explain how the writer treats the counter-argument and why this weakens the argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias and counter-argument analysis", statement: "Loaded words + dismissive treatment of opposition = biased argument." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of: 'wonderful', 'beloved', 'heartless', 'clearly never stepped inside'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both examples identified with emotional or loaded force.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Claim: the council's decision to close the library is wrong and ignores residents.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Claim accurately stated including the accusation against the council.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Counter-argument (digital books make libraries unnecessary) is raised then dismissed as ignorance.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'Clearly never stepped inside one' attacks the opponent's experience — ad hominem.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Mocking rather than answering the digital-books point weakens credibility and reveals bias.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. 'heartless', 'beloved'. (b) Closure ignores residents and is wrong. (c) Counter-argument mocked via ad hominem — weakens argument.",
            commonErrors: ["Missing the sarcasm directed at the counter-argument supporters."],
          },
        },
        {
          id: "langb-u4-q47",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The truth about homework",
            author: "Written for Akademik Space",
            source: "Evidence evaluation practice",
            text: "Homework is essential — this is not an opinion but a proven fact. Research consistently shows that students who do more homework achieve higher grades. Teachers spend hours preparing meaningful tasks, and parents rightly expect their children to work hard outside school. Some students complain about the workload, but complaining does not make homework bad. The evidence is overwhelming: homework builds character, reinforces learning and prepares young people for the demands of adult life. Schools that reduce homework are failing their students.",
          },
          parts: [
            { label: "a", prompt: "Identify one piece of evidence the writer offers for the claim.", marks: 2 },
            { label: "b", prompt: "Explain two weaknesses in the writer's evidence.", marks: 3 },
            { label: "c", prompt: "Explain how the writer handles the counter-argument about workload complaints.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence evaluation", statement: "Vague appeals and unaddressed objections weaken an argument." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence offered: 'research consistently shows' higher grades for more homework.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurately identified — though vague (no study named).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weakness 1: 'research consistently shows' names no study, date or author — unverifiable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weakness 2: correlation assumed — more homework may reflect more motivated students, not cause higher grades.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Also 'essential — not an opinion but a proven fact' disguises opinion as fact.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Complaint is acknowledged but dismissed: 'complaining does not make homework bad'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The dismissal avoids engaging with whether the workload is excessive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Brief acknowledgement followed by dismissal is a weak counter-argument treatment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Research shows' higher grades — vague. (b) Unnamed source, correlation=causation, opinion-as-fact. (c) Complaints dismissed without engagement.",
            commonErrors: ["Accepting 'research shows' as strong evidence without checking specifics."],
          },
        },
        {
          id: "langb-u4-q48",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'everyone knows that...' and 'it goes without saying...' are unreliable argument devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical criticism", statement: "Appeals to universal agreement replace evidence with assumption." },
            ],
            steps: [
              { reasoning: "These phrases claim consensus without proving it — 'everyone' is rarely literally true.", marks: 1, markCode: "M" },
              { reasoning: "They pressure the reader to agree by implying dissent is unusual or ignorant.", marks: 1, markCode: "R" },
              { reasoning: "They disguise opinion as established fact, avoiding the need for evidence.", marks: 1, markCode: "M" },
              { reasoning: "Critical readers treat such phrases as signals to demand actual evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They fabricate consensus, pressure agreement and disguise opinion as fact — demanding evidence is the correct response.",
            commonErrors: ["Missing the pressure function — the phrase makes disagreement feel foolish."],
          },
        },
      ],
    },
  ],
};
