import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mll4-u3-lesson-3-2",
  code: "3-2",
  title: "Planning and Structuring Texts",
  goal: "I CAN plan a text by organizing ideas logically, choosing an appropriate structure, and creating a clear outline before writing.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Planning", definition: "Organizing ideas before writing — brainstorming, outlining, structuring." },
    { term: "Outline", definition: "A skeletal structure showing main points and their order." },
    { term: "Paragraph", definition: "A group of sentences developing one main idea." },
    { term: "Topic sentence", definition: "The first sentence of a paragraph stating its main idea." },
    { term: "Transition", definition: "Words/phrases linking ideas — however, therefore, for example." },
  ],
  concepts: [
    {
      id: "mll4-u3-planning",
      title: "Planning your writing",
      skill: "Generate and organize ideas before writing.",
      lesson: {
        sections: [
          {
            heading: "Why plan?",
            body: "Planning prevents **rambling** and **incoherence**. A plan ensures every paragraph has a purpose and ideas flow logically. It saves time — better to organize first than rewrite later.",
          },
          {
            heading: "Planning techniques",
            body: "**Brainstorm**: list everything you know/think about the topic. **Cluster/mind map**: group related ideas visually. **Outline**: organize ideas hierarchically — main points, then supporting details. **Questions**: who, what, when, where, why, how — answer for your topic.",
          },
          {
            heading: "Organizing ideas",
            body: "Group related ideas together. Decide on **order**: chronological (time), spatial (location), order of importance, or problem-solution. Eliminate irrelevant ideas. Your plan should be a **map** — you can always adjust while writing.",
          },
        ],
        keyFormulas: [
          { name: "Planning process", statement: "Brainstorm → Group → Order → Outline → Write." },
        ],
        workedExample: {
          problem: "Plan an essay on 'Should school uniforms be compulsory?'",
          solution: "Intro (thesis) → Argument for (cost, equality, focus) → Argument against (individuality, cost to families) → Conclusion (balanced judgment).",
        },
      },
      questions: [
        {
          id: "mll4-u3-planning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is planning important before writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the text longer" },
              { id: "b", text: "It impresses the teacher" },
              { id: "c", text: "It uses more paper" },
              { id: "d", text: "It prevents rambling and ensures logical flow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Planning", statement: "Planning ensures coherence and prevents rambling." }],
            steps: [{ reasoning: "Criterion B (Organizing): planning ensures logical flow — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** It prevents rambling and ensures logical flow",
          },
        },
        {
          id: "mll4-u3-planning-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two planning techniques and explain what each does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning techniques", statement: "Brainstorming generates ideas; outlining organizes them." }],
            steps: [
              { reasoning: "Criterion B (Organizing): brainstorming — generates all possible ideas without judgment.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): outlining — organizes ideas into hierarchy (main points → details).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Brainstorming (generates ideas) + outlining (organizes hierarchically).",
          },
        },
        {
          id: "mll4-u3-planning-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Outlines",
            author: "Written for Akademik Space",
            text: "Essay on 'The benefits of exercise':\n\nOutline A: Intro → Benefits for health → Benefits for mental health → Benefits for social life → Conclusion.\n\nOutline B: Intro → Exercise is good → People should exercise → Exercise is important → Conclusion.",
          },
          stem: "Which outline is more effective? Explain the difference in specificity and organization.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Effective outline", statement: "Specific, categorized points are more useful than vague generalizations." }],
            steps: [
              { reasoning: "Criterion B (Organizing): Outline A has specific categories (health, mental health, social life); Outline B is vague ('good', 'important').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): A organizes by benefit type — logical grouping; B repeats the same idea without development.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): A would produce a richer, more organized essay; B would be repetitive.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Outline A — specific categories (health, mental, social) enable organized development; B is vague and repetitive.",
          },
        },
        {
          id: "mll4-u3-planning-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Brainstorm 3+ ideas for an essay on 'Should homework be abolished?'", marks: 2 },
            { label: "b", prompt: "Group these ideas into categories (for/against/other).", marks: 1 },
            { label: "c", prompt: "Create a simple outline with introduction, 2-3 body points, and conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning process", statement: "Brainstorm → group → outline = organized writing." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): 3+ relevant ideas generated (e.g. stress, learning reinforcement, family time).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): ideas are varied and relevant to the topic.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): ideas correctly categorized — for abolition, against, or neutral considerations.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): outline has intro, 2-3 body points, conclusion — logical structure.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): points follow a logical order and relate to the thesis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ideas + categories + outline = organized plan for the essay.",
          },
        },
        {
          id: "mll4-u3-planning-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in planning an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write the introduction" },
              { id: "b", text: "Brainstorm ideas" },
              { id: "c", text: "Choose a font" },
              { id: "d", text: "Check spelling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Planning process", statement: "Brainstorm → group → order → outline → write." }],
            steps: [
              { reasoning: "Criterion B (Organizing): brainstorm first — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Brainstorm ideas",
          },
        },
        {
          id: "mll4-u3-planning-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between brainstorming and outlining.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning techniques", statement: "Brainstorming generates ideas; outlining organizes them." }],
            steps: [
              { reasoning: "Criterion B (Organizing): brainstorming = generate all ideas without judgment.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): outlining = organize ideas hierarchically into main points and details.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Brainstorming generates ideas; outlining organizes them into structure.",
          },
        },
        {
          id: "mll4-u3-planning-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which TWO are valid ways to organize ideas in a plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random and by length" },
              { id: "b", text: "Chronological (time order) and problem-solution" },
              { id: "c", text: "Only chronological" },
              { id: "d", text: "Alphabetical and by colour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Organization methods", statement: "Chronological, spatial, importance, problem-solution." }],
            steps: [
              { reasoning: "Criterion B (Organizing): chronological and problem-solution are valid — (a).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): spatial and importance also work; alphabetical/random don't.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Chronological (time order) and problem-solution",
          },
        },
        {
          id: "mll4-u3-planning-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Plans",
            author: "Written for Akademik Space",
            text: "Essay on 'The benefits of reading':\n\nPlan A: Intro → Improves vocabulary → Develops empathy → Reduces stress → Conclusion.\n\nPlan B: Intro → Reading is good → People should read → Reading helps → Conclusion.",
          },
          stem: "Which plan is more effective? Explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Effective planning", statement: "Specific, categorized points are more useful than vague generalizations." }],
            steps: [
              { reasoning: "Criterion B (Organizing): Plan A has specific benefits (vocabulary, empathy, stress); Plan B is vague ('good', 'helps').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): A organizes by benefit type — logical; B repeats same idea without development.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): A would produce richer essay; B would be repetitive.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Plan A more effective — specific categories vs vague repetition.",
          },
        },
        {
          id: "mll4-u3-planning-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the purpose of an outline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To organize ideas hierarchically before writing" },
              { id: "b", text: "To check spelling" },
              { id: "c", text: "To make the essay longer" },
              { id: "d", text: "To choose a topic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Outline", statement: "Skeletal structure showing main points and their order." }],
            steps: [
              { reasoning: "Criterion B (Organizing): outline = organize ideas — (b).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): shows hierarchy: main points → supporting details.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To organize ideas hierarchically before writing",
          },
        },
        {
          id: "mll4-u3-planning-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You must write an essay on 'Should schools ban mobile phones?'",
          extract: {
            title: "The Planning Task",
            author: "Written for Akademik Space",
            text: "Topic: 'Should schools ban mobile phones?'\n\nBrainstormed ideas: distraction in class, cyberbullying, emergency contact, learning apps, parent communication, social media addiction.",
          },
          stem: "Explain how you would organize these ideas into an effective plan.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning process", statement: "Group related ideas, order logically, eliminate irrelevant." }],
            steps: [
              { reasoning: "Criterion B (Organizing): group into categories — for ban (distraction, bullying, addiction) vs against (emergency, learning, parent contact).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): order by importance or problem-solution — strongest arguments first.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): create outline — intro (thesis) → arguments for → arguments against → conclusion (balanced judgment).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): eliminate or deprioritize weaker ideas; ensure logical flow.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Group into for/against categories, order by importance, create outline with intro/body/conclusion.",
          },
        },
        {
          id: "mll4-u3-planning-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "Essay topic: 'Is social media good or bad for teenagers?'",
          },
          parts: [
            { label: "a", prompt: "Brainstorm 4+ ideas for this essay.", marks: 2 },
            { label: "b", prompt: "Group them into categories (positive/negative/neutral).", marks: 1 },
            { label: "c", prompt: "Create a simple outline with intro, 2-3 body points, conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning process", statement: "Brainstorm → group → outline = organized writing." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): 4+ relevant ideas (e.g. connection, cyberbullying, mental health, information).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): ideas are varied and relevant to social media's impact.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): correctly categorized — positive (connection, learning), negative (bullying, addiction), or neutral.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): outline has intro, 2-3 body points, conclusion — logical structure.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): points follow logical order and relate to thesis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ideas + categories + outline = organized plan for social media essay.",
          },
        },
        {
          id: "mll4-u3-planning-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is planning important before writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It prevents rambling and ensures logical flow" },
              { id: "b", text: "It impresses the teacher" },
              { id: "c", text: "It makes writing faster" },
              { id: "d", text: "It uses more paper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Planning", statement: "Planning ensures coherence and prevents rambling." }],
            steps: [
              { reasoning: "Criterion B (Organizing): planning ensures logical flow — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It prevents rambling and ensures logical flow",
          },
        },
        {
          id: "mll4-u3-planning-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'mind map' or 'cluster' in planning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of essay" },
              { id: "b", text: "A list of words in alphabetical order" },
              { id: "c", text: "A visual diagram grouping related ideas around a central topic" },
              { id: "d", text: "A spelling check" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning techniques", statement: "Mind map = visual grouping of related ideas." }],
            steps: [
              { reasoning: "Criterion B (Organizing): mind map = visual diagram of related ideas — (b).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): helps see connections between ideas.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A visual diagram grouping related ideas around a central topic",
          },
        },
        {
          id: "mll4-u3-planning-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is NOT a good planning technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the essay without planning" },
              { id: "b", text: "Brainstorming" },
              { id: "c", text: "Making a mind map" },
              { id: "d", text: "Creating an outline" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Planning", statement: "Planning techniques organize ideas before writing." }],
            steps: [
              { reasoning: "Criterion B (Organizing): writing without planning = not a planning technique — (c).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): others are valid planning methods.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Writing the essay without planning",
          },
        },
        {
          id: "mll4-u3-planning-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Problem",
            author: "Written for Akademik Space",
            text: "You need to write a report on 'The impact of social media on teenagers'. Your brainstormed notes are a jumble: 'cyberbullying', 'better grades', 'sleep problems', 'staying in touch', 'addiction', 'learning resources', 'anxiety'.",
          },
          stem: "Explain how you would organize these notes into an effective plan for the report.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning process", statement: "Group related ideas, order logically, structure for report." }],
            steps: [
              { reasoning: "Criterion B (Organizing): group into categories — positive (grades, staying in touch, learning) vs negative (bullying, sleep, addiction, anxiety).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): order by importance or theme — mental health effects, social effects, academic effects.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): create report structure — introduction (scope) → findings by category → conclusion (balanced summary).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): ensure each category has supporting points; eliminate redundancy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Group into positive/negative categories, order by theme, create report structure with intro/findings/conclusion.",
          },
        },
        {
          id: "mll4-u3-planning-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two outlines for the same essay.",
          extract: {
            title: "Two Outlines",
            author: "Written for Akademik Space",
            text: "Essay: 'Should homework be abolished?'\n\nOutline A: Intro → Arguments for abolition (stress, family time, inequality) → Arguments against (reinforcement, discipline) → Conclusion (balanced view).\n\nOutline B: Intro → Homework → Should we have it? → Homework is homework → Conclusion.",
          },
          parts: [
            { label: "a", prompt: "Identify which outline is more effective.", marks: 1 },
            { label: "b", prompt: "Explain the difference in specificity.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement to the weaker outline.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Effective outline", statement: "Specific, categorized points enable organized development." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): Outline A more effective — specific categories vs B's vague repetition.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): A has specific arguments (stress, family time, inequality vs reinforcement, discipline); B just repeats 'homework'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): A organizes by position (for/against); B has no logical structure.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): improvement — add specific arguments, categorize for/against, create thesis.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): e.g. 'Intro (thesis: homework has mixed effects) → For abolition → Against → Conclusion'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) A more effective. (b) A specific/categorized; B vague/repetitive. (c) Add specific arguments and structure.",
          },
        },
      ],
    },
    {
      id: "mll4-u3-structure",
      title: "Structuring paragraphs and transitions",
      skill: "Write well-structured paragraphs with topic sentences and smooth transitions between ideas.",
      lesson: {
        sections: [
          {
            heading: "Paragraph structure",
            body: "Each paragraph should develop **one main idea**. Start with a **topic sentence** stating the idea, followed by **supporting sentences** (evidence, examples, explanation), and end with a **concluding sentence** that links to the next paragraph.",
          },
          {
            heading: "Transitions",
            body: "**Transitions** connect ideas: **addition** (furthermore, also), **contrast** (however, although), **cause/effect** (therefore, consequently), **example** (for instance, such as), **sequence** (firstly, then, finally). They guide the reader through your argument.",
          },
          {
            heading: "Coherence",
            body: "**Coherence** = ideas flow logically. Check: does each paragraph follow from the last? Are there clear links? Does the whole text build toward a conclusion? Transitions + logical order + clear topic sentences = coherent writing.",
          },
        ],
        keyFormulas: [
          { name: "Paragraph formula", statement: "Topic sentence + Support + Concluding/linking sentence = coherent paragraph." },
        ],
        workedExample: {
          problem: "Improve: 'Exercise is good. It helps your body. You should do it.'",
          solution: "Add topic sentence, supporting detail, transition: 'Regular exercise benefits both body and mind. Physically, it strengthens the heart and muscles. Mentally, it reduces stress and improves mood. Therefore, incorporating exercise into daily life is essential.'",
        },
      },
      questions: [
        {
          id: "mll4-u3-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The last sentence of a paragraph" },
              { id: "b", text: "The first sentence stating the paragraph's main idea" },
              { id: "c", text: "The title of the essay" },
              { id: "d", text: "A question in the middle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Topic sentence", statement: "First sentence stating the paragraph's main idea." }],
            steps: [{ reasoning: "Criterion B (Organizing): topic sentence = main idea — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The first sentence stating the paragraph's main idea",
          },
        },
        {
          id: "mll4-u3-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Paragraphs",
            author: "Written for Akademik Space",
            text: "Paragraph A: 'Exercise is good for you. It makes you healthy. You should exercise more.\n\nParagraph B: 'Regular exercise offers numerous health benefits. Physically, it strengthens the cardiovascular system and builds muscle. Mentally, it reduces stress and improves mood. Therefore, incorporating exercise into daily routines is essential.'",
          },
          stem: "Which paragraph is better structured? Identify the missing elements in the weaker one.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Paragraph structure", statement: "Topic sentence + support + transition = coherent paragraph." }],
            steps: [
              { reasoning: "Criterion B (Organizing): Paragraph B has topic sentence ('numerous health benefits'), specific support (cardiovascular, muscle, stress), transition ('Therefore').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): Paragraph A is vague — 'good', 'healthy' without specifics; no clear topic sentence or transition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Paragraph B better — has topic sentence, specific support, and transition; A is vague and unstructured.",
          },
        },
        {
          id: "mll4-u3-structure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Disconnected Ideas",
            author: "Written for Akademik Space",
            text: "'Recycling is important. My dog likes to play fetch. Plastic takes 450 years to decompose. I enjoy pizza on Fridays. Recycling reduces landfill waste.'",
          },
          stem: "This text lacks coherence. Explain the problem and suggest how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coherence", statement: "Coherent writing has ideas that logically connect and flow." }],
            steps: [
              { reasoning: "Criterion B (Organizing): problem — 'My dog' and 'pizza' are irrelevant to recycling; ideas don't connect.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): fix — remove irrelevant sentences, group recycling facts together, add transitions.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): e.g. 'Recycling is important. Plastic takes 450 years to decompose, so recycling reduces landfill waste. Additionally, it conserves natural resources.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Remove irrelevant ideas (dog, pizza), group related points, add transitions for logical flow.",
          },
        },
        {
          id: "mll4-u3-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a topic sentence for a paragraph about the benefits of reading.", marks: 1 },
            { label: "b", prompt: "List two types of supporting detail you could add.", marks: 1 },
            { label: "c", prompt: "Write a concluding sentence that links to the next paragraph about technology.", marks: 1 },
            { label: "d", prompt: "Explain why transitions matter between paragraphs.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Paragraph craft", statement: "Topic + support + transition + link = coherent paragraph." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): clear topic sentence about reading benefits.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): two types — e.g. statistics, examples, expert quotes, personal experience.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): concluding sentence linking reading to technology — e.g. 'While reading remains valuable, technology offers new ways to access stories.'", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): transitions guide reader — show relationships between ideas (contrast, addition, cause).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): without transitions, paragraphs feel disconnected — coherence breaks down.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Topic + support + link + transitions = coherent, well-structured paragraph.",
          },
        },
        {
          id: "mll4-u3-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To give an example" },
              { id: "b", text: "To state the paragraph's main idea" },
              { id: "c", text: "To ask a question" },
              { id: "d", text: "To end the paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Topic sentence", statement: "States the paragraph's main idea." }],
            steps: [
              { reasoning: "Criterion B (Organizing): topic sentence = main idea — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To state the paragraph's main idea",
          },
        },
        {
          id: "mll4-u3-structure-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Paragraphs",
            author: "Written for Akademik Space",
            text: "Paragraph A: 'Exercise helps you. It makes you strong. You should do it.\n\nParagraph B: 'Regular exercise strengthens both body and mind. Physically, it improves cardiovascular health and builds muscle. Mentally, it reduces stress and boosts mood.'",
          },
          stem: "Compare the structure of these two paragraphs — which is more effective?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Paragraph structure", statement: "Topic sentence + specific support = effective paragraph." }],
            steps: [
              { reasoning: "Criterion B (Organizing): A is vague ('helps', 'strong') with no topic sentence; B has clear topic ('strengthens body and mind') + specific support (cardiovascular, stress).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): B's structure is clearer and more developed — A is repetitive and shallow.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Paragraph B more effective — topic sentence + specific support vs A's vague repetition.",
          },
        },
        {
          id: "mll4-u3-structure-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which THREE are types of transitions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only 'and' and 'but'" },
              { id: "b", text: "Addition, contrast, and cause/effect" },
              { id: "c", text: "Past, present, and future" },
              { id: "d", text: "Nouns, verbs, and adjectives" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Transitions", statement: "Addition, contrast, cause/effect, example, sequence." }],
            steps: [
              { reasoning: "Criterion B (Organizing): addition, contrast, cause/effect are transition types — (a).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): example and sequence also exist.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Addition, contrast, and cause/effect",
          },
        },
        {
          id: "mll4-u3-structure-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'Reading improves vocabulary. It develops empathy. Reading reduces stress. Reading is important. You should read more.'",
          },
          stem: "This text lacks structure. Explain the problem and suggest how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coherence", statement: "Coherent writing has ideas that logically connect and flow." }],
            steps: [
              { reasoning: "Criterion B (Organizing): problem — repetitive ('Reading' starts every sentence), no development, no transitions.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): fix — group related points, add transitions, develop each idea with support.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): e.g. 'Reading offers numerous benefits. It improves vocabulary and develops empathy. Additionally, it reduces stress by providing escape. Therefore, regular reading is essential.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Repetitive, undeveloped ideas — fix with grouping, transitions, supporting details.",
          },
        },
        {
          id: "mll4-u3-structure-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is a transition showing contrast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Therefore" },
              { id: "b", text: "For example" },
              { id: "c", text: "However" },
              { id: "d", text: "Furthermore" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Transitions", statement: "'However' signals contrast." }],
            steps: [
              { reasoning: "Criterion B (Organizing): 'however' = contrast — (b).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): others = addition, cause, example.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** However",
          },
        },
        {
          id: "mll4-u3-structure-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "'I like sports. My dog is cute. Sports are fun. I have a cat. Exercise is good. It helps you stay healthy.'",
          },
          stem: "This text lacks coherence. Explain the problems and rewrite it coherently.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coherence", statement: "Coherent writing has related ideas that flow logically." }],
            steps: [
              { reasoning: "Criterion B (Organizing): problems — 'dog' and 'cat' irrelevant to sports; ideas don't connect; no transitions.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): fix — remove irrelevant sentences, group sports ideas, add topic sentence and transitions.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): e.g. 'I enjoy sports because they keep me healthy and active. Exercise improves fitness and reduces stress. Playing regularly also helps me make friends.'", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): coherent version has topic sentence, supporting ideas, logical flow.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Remove irrelevant ideas (pets), group sports points, add topic sentence and flow — coherent paragraph.",
          },
        },
        {
          id: "mll4-u3-structure-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Paragraph",
            author: "Written for Akademik Space",
            text: "'Exercise is good. It helps your body. You should do it more. It makes you happy. It gives you energy.'",
          },
          parts: [
            { label: "a", prompt: "Identify the problems with this paragraph's structure.", marks: 2 },
            { label: "b", prompt: "Rewrite it with a topic sentence and supporting details.", marks: 2 },
            { label: "c", prompt: "Add a transition to link it to a following paragraph about diet.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Paragraph structure", statement: "Topic sentence + support + transition = coherent paragraph." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): problems — no topic sentence, repetitive ('good', 'helps', 'makes you'), no development.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): ideas are related but vague — no specific benefits or evidence.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): rewrite — topic sentence 'Exercise offers numerous benefits'; support with specifics (cardiovascular, mood, energy).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): e.g. 'Regular exercise benefits both body and mind. It strengthens the heart, improves mood, and boosts energy levels.'", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): transition — e.g. 'In addition to exercise, a balanced diet is essential.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) No topic sentence, vague repetition. (b) Rewrite with topic + specifics. (c) 'In addition...' transition to diet.",
          },
        },
        {
          id: "mll4-u3-structure-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'coherence' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using big words" },
              { id: "b", text: "Correct spelling" },
              { id: "c", text: "Ideas that flow logically and connect" },
              { id: "d", text: "Long sentences" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Coherence", statement: "Coherence = ideas flow logically and connect." }],
            steps: [
              { reasoning: "Criterion B (Organizing): coherence = logical flow — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Ideas that flow logically and connect",
          },
        },
        {
          id: "mll4-u3-structure-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Paragraphs",
            author: "Written for Akademik Space",
            text: "Paragraph A: 'The school should ban phones. They distract students. However, some students need them for emergencies.\n\nParagraph B: 'The school should ban phones because they distract students during lessons. Additionally, phones enable cyberbullying and reduce face-to-face interaction.'",
          },
          stem: "Compare the structure of these two paragraphs — which is more coherent?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coherence", statement: "Coherent paragraphs develop one idea with supporting points." }],
            steps: [
              { reasoning: "Criterion B (Organizing): A introduces counter-argument ('however') without resolving it — incomplete thinking.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): B stays focused with supporting points ('additionally', 'cyberbullying') — coherent development.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Paragraph B more coherent — focused development vs A's unresolved counter-argument.",
          },
        },
        {
          id: "mll4-u3-structure-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the best concluding sentence for a paragraph about exercise benefits?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like sports." },
              { id: "b", text: "Exercise is fun." },
              { id: "c", text: "The end." },
              { id: "d", text: "Therefore, regular exercise is essential for health and wellbeing." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Concluding sentence", statement: "Summarizes and reinforces the paragraph's main idea." }],
            steps: [
              { reasoning: "Criterion B (Organizing): (b) summarizes benefits and links forward — best conclusion.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): 'therefore' signals conclusion; reinforces main idea.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Therefore, regular exercise is essential for health and wellbeing.",
          },
        },
        {
          id: "mll4-u3-structure-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "'There are many benefits to exercise. It is good for you. People should exercise. Exercise helps. It makes you feel good.'",
          },
          stem: "Rewrite this text to improve its structure and coherence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coherence", statement: "Topic sentence + specific support + transitions = coherent writing." }],
            steps: [
              { reasoning: "Criterion B (Organizing): problem — vague ('good', 'helps', 'feel good'), repetitive, no development.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): fix — topic sentence, specific benefits (physical, mental), transitions, conclusion.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): e.g. 'Regular exercise offers numerous benefits. Physically, it strengthens the heart and muscles. Mentally, it reduces stress and improves mood. Therefore, incorporating exercise into daily life is essential.'", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): coherent version has clear structure, specific points, logical flow.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Rewrite with topic sentence, specific benefits, transitions — coherent paragraph.",
          },
        },
        {
          id: "mll4-u3-structure-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two paragraphs.",
          extract: {
            title: "Two Paragraphs",
            author: "Written for Akademik Space",
            text: "Paragraph A: 'Exercise is good. It helps. You should do it. It makes you happy.\n\nParagraph B: 'Regular exercise offers significant health benefits. It improves cardiovascular fitness, builds muscle strength, and enhances mental wellbeing. Studies show that even 30 minutes daily can reduce stress and improve mood. Therefore, making exercise a daily habit is one of the most effective ways to maintain health.'",
          },
          parts: [
            { label: "a", prompt: "Identify the structural differences between the two paragraphs.", marks: 2 },
            { label: "b", prompt: "Explain which elements make Paragraph B more effective.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement to Paragraph A.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Paragraph structure", statement: "Topic + specific support + evidence + conclusion = effective paragraph." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): A is vague/repetitive ('good', 'helps', 'happy'); B has topic sentence, specific benefits, evidence, conclusion.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): A lacks structure; B has clear organization.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): B's elements — 'significant health benefits' (topic), specific benefits (cardiovascular, muscle, mental), evidence ('Studies show'), conclusion ('Therefore...').", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): specific + evidence-based + well-structured = more persuasive and clear.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B (Organizing): improvement — add topic sentence, specific benefits, supporting detail, conclusion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) A vague/repetitive; B structured/specific. (b) Topic + specifics + evidence + conclusion. (c) Add topic sentence and specifics.",
          },
        },
      ],
    },
  ],
};
