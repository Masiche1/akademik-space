import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mll4-u3-lesson-3-1",
  code: "3-1",
  title: "Text Types and Purposes",
  goal: "I CAN identify different text types and explain how their purpose and audience shape their structure and language.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Text type", definition: "The genre or form of a text — narrative, descriptive, argument, letter, report." },
    { term: "Purpose", definition: "What the text aims to achieve — inform, persuade, entertain, describe." },
    { term: "Audience", definition: "Who the text is written for." },
    { term: "Structure", definition: "How the text is organized — beginning/middle/end, paragraphs, sections." },
    { term: "Register", definition: "Level of formality appropriate to the text type and audience." },
  ],
  concepts: [
    {
      id: "mll4-u3-text-types",
      title: "Choosing the right text type",
      skill: "Match text type to purpose and audience.",
      lesson: {
        sections: [
          {
            heading: "Common text types",
            body: "**Narrative**: tells a story (plot, character, setting). **Descriptive**: paints a picture (sensory detail). **Argumentative**: persuades with evidence. **Expository**: explains/informs. **Letter**: personal or formal communication. **Report**: factual information organized by topic. Each has conventions.",
          },
          {
            heading: "Purpose shapes structure",
            body: "A **narrative** needs a beginning, middle, end with conflict. An **argument** needs a claim, evidence, counter-argument, conclusion. A **report** needs an introduction, categorized facts, conclusion. Structure follows purpose — you can't argue like you narrate.",
          },
          {
            heading: "Audience shapes language",
            body: "The same purpose can have different text types for different audiences: a **formal letter** to a headteacher vs an **email** to a friend about the same issue. Register, vocabulary and structure all change with audience.",
          },
        ],
        keyFormulas: [
          { name: "Text type = Purpose + Audience + Structure", statement: "Choose text type based on what you want to achieve and who will read it." },
        ],
        workedExample: {
          problem: "You need to complain about a broken school computer. Which text type?",
          solution: "Formal letter or email to IT department — clear structure (problem, impact, request), formal register, specific details.",
        },
      },
      questions: [
        {
          id: "mll4-u3-text-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines the right text type for a piece of writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The length you want" },
              { id: "b", text: "Purpose and audience" },
              { id: "c", text: "The time available" },
              { id: "d", text: "The font you like" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Text type choice", statement: "Purpose + audience determine text type." }],
            steps: [{ reasoning: "Criterion B (Organizing): purpose + audience — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Purpose and audience",
          },
        },
        {
          id: "mll4-u3-text-types-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the text type: 'Once upon a time, in a small village, a girl found a mysterious box...'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Narrative", statement: "Narrative = story with plot, character, setting." }],
            steps: [
              { reasoning: "Criterion A (Analysing): narrative — 'Once upon a time' signals story opening, character, setting.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): features — story opening, character (girl), setting (village), mystery (box).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Narrative — story opening with character, setting and plot element.",
          },
        },
        {
          id: "mll4-u3-text-types-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'The school should ban phones because they distract students, damage mental health, and reduce face-to-face interaction. Studies show...'\n\nText B: 'Last Tuesday, I sat in math class trying to ignore my phone buzzing. My friend kept looking at hers. We both failed the quiz.'",
          },
          stem: "Identify each text type and explain why the author chose that type for their purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Text type and purpose", statement: "Argument uses evidence; narrative uses story to illustrate." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Text A is argumentative — makes claims ('should ban'), lists reasons, cites studies.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Text B is narrative — tells a personal story ('Last Tuesday', 'I sat'), uses experience.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B (Organizing): A argues logically with evidence; B illustrates with personal experience — different strategies for same topic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A = argumentative (evidence-based claims); B = narrative (personal story) — different persuasive strategies.",
          },
        },
        {
          id: "mll4-u3-text-types-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "You must inform parents about a school trip. Which text type and why?", marks: 2 },
            { label: "b", prompt: "List three features this text type requires.", marks: 2 },
            { label: "c", prompt: "What register would you use? Explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Text type selection", statement: "Informational purpose → letter/email/report; audience = parents → formal." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): letter or email — appropriate for parent communication.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): explains why — formal channel suits parents and provides necessary details.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): features — date, salutation, purpose, details (cost, dates, permission slip), closing.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): formal register appropriate to parents/school context.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): formal — 'Dear Parent/Guardian', polite request for permission, professional tone.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Letter/email — formal channel for parents. (b) Date, salutation, purpose, details, permission request. (c) Formal register — 'Dear Parent/Guardian'.",
          },
        },
        {
          id: "mll4-u3-text-types-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a narrative text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To inform with facts" },
              { id: "b", text: "To tell a story with plot, character and setting" },
              { id: "c", text: "To persuade the reader" },
              { id: "d", text: "To list information" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Narrative", statement: "Narrative = story with plot, character, setting." }],
            steps: [
              { reasoning: "Criterion B (Organizing): narrative = story — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To tell a story with plot, character and setting",
          },
        },
        {
          id: "mll4-u3-text-types-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'Dear Sir, I am writing to complain about the noise from the construction site. The work begins at 6am and continues until 10pm.'\n\nText B: 'Once upon a time, in a quiet village, a young girl discovered a hidden door in her grandmother's attic.'",
          },
          stem: "Identify the text type of each and explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Text type identification", statement: "Formal complaint vs narrative — different structures and purposes." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is a formal letter/complaint — 'Dear Sir', 'I am writing to complain', specific details (times).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is narrative — 'Once upon a time', character (girl), setting (village, attic), story opening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = formal complaint letter; B = narrative — different structures and purposes.",
          },
        },
        {
          id: "mll4-u3-text-types-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the main text types and their purposes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only narrative and poetry" },
              { id: "b", text: "Narrative (story), descriptive (paint), argumentative (persuade), report (inform)" },
              { id: "c", text: "Only letters and emails" },
              { id: "d", text: "Only fiction and non-fiction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Text types", statement: "Narrative (story), descriptive (paint), argumentative (persuade), expository (explain), report (inform)." }],
            steps: [
              { reasoning: "Criterion B (Organizing): narrative, descriptive, argumentative, report cover main types — (b).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): each has conventions — structure follows purpose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Narrative, descriptive, argumentative, report — each with specific purpose.",
          },
        },
        {
          id: "mll4-u3-text-types-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'Our school should introduce a recycling programme. It would reduce waste by 40% and teach students environmental responsibility.'\n\nText B: 'Every morning, I watch the recycling truck come down our street. My little brother waves at the driver. He wants to be one when he grows up.'",
          },
          stem: "Identify each text type and explain why the author chose that type.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Text type and purpose", statement: "Argument uses evidence; narrative uses story to illustrate." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is argumentative — proposal ('should introduce'), evidence ('40%', 'responsibility').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is narrative — personal story ('Every morning', 'my little brother'), character, emotion.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B (Organizing): A argues logically; B illustrates through personal experience — different strategies.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A = argumentative (evidence-based); B = narrative (personal story) — different strategies.",
          },
        },
        {
          id: "mll4-u3-text-types-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which text type would be best for explaining how to make a sandwich?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrative" },
              { id: "b", text: "Expository/instructional" },
              { id: "c", text: "Poetry" },
              { id: "d", text: "Persuasive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Text type choice", statement: "Instructions need expository/instructional format — clear steps." }],
            steps: [
              { reasoning: "Criterion B (Organizing): explaining = expository/instructional — (b).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): needs clear steps, not story or persuasion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Expository/instructional",
          },
        },
        {
          id: "mll4-u3-text-types-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'The government must invest in renewable energy. Fossil fuels are running out and damaging the planet.'\n\nText B: 'Last summer, we installed solar panels. Now our electricity bill is half what it was. My dad says we're saving the planet one panel at a time.'",
          },
          stem: "Identify each text type and evaluate which is more effective at promoting renewable energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Text type and persuasion", statement: "Argument uses logic; narrative uses personal experience — different persuasive power." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is argumentative — 'must invest', 'running out', 'damaging' — logical appeal.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is narrative — personal story ('Last summer', 'my dad') — emotional/relatable appeal.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A more effective for convincing skeptics (logic); B more effective for inspiring (emotion/relatability).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): depends on audience — argument for policy makers, narrative for general public.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = argumentative (logic); B = narrative (emotion). A convinces skeptics; B inspires — depends on audience.",
          },
        },
        {
          id: "mll4-u3-text-types-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Task",
            author: "Written for Akademik Space",
            text: "You need to write about 'Why reading is important'.",
          },
          parts: [
            { label: "a", prompt: "Choose the best text type for persuading students to read more. Justify.", marks: 2 },
            { label: "b", prompt: "List three features this text type requires.", marks: 2 },
            { label: "c", prompt: "What register would you use? Explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Text type selection", statement: "Persuasive purpose → argumentative; audience = students → engaging." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): argumentative — to persuade students to change behaviour.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): explains why — argument uses evidence and appeals to change minds.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): features — claim, evidence, counter-argument, conclusion.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): could also include examples, statistics, personal anecdotes.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D (Using language): engaging but respectful — not too formal, not too casual; relatable examples.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Argumentative — to persuade. (b) Claim, evidence, counter-argument, conclusion. (c) Engaging/respectful register.",
          },
        },
        {
          id: "mll4-u3-text-types-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'report' text type?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fictional story" },
              { id: "b", text: "Factual information organized by topic" },
              { id: "c", text: "A poem" },
              { id: "d", text: "A persuasive speech" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Report", statement: "Report = factual information organized by topic." }],
            steps: [
              { reasoning: "Criterion B (Organizing): report = factual organized info — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Factual information organized by topic",
          },
        },
        {
          id: "mll4-u3-text-types-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'Dear Editor, I am writing to express my concern about the proposed changes to the school timetable.'\n\nText B: 'The school bell rang at 8am. Students streamed through the gates, laughing and jostling.'",
          },
          stem: "Identify the text type of each and the audience they suit.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A = formal letter; B = narrative" },
              { id: "b", text: "A = narrative; B = formal letter" },
              { id: "c", text: "Both are formal letters" },
              { id: "d", text: "Both are narratives" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Text type and audience", statement: "Formal letter to editor vs narrative description." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is formal letter ('Dear Editor', 'express my concern'); B is narrative (scene, characters).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A suits editorial audience; B suits story readers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A = formal letter; B = narrative",
          },
        },
        {
          id: "mll4-u3-text-types-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which text type uses chronological structure (beginning, middle, end)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Argumentative" },
              { id: "b", text: "Narrative" },
              { id: "c", text: "Report" },
              { id: "d", text: "Descriptive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Narrative structure", statement: "Narratives use chronological plot structure." }],
            steps: [
              { reasoning: "Criterion B (Organizing): narrative = chronological — (b).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): story needs beginning, middle, end.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Narrative",
          },
        },
        {
          id: "mll4-u3-text-types-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Brochure",
            author: "Written for Akademik Space",
            text: "'Welcome to Sunnydale! Our resort offers 5-star accommodation, world-class dining, and endless entertainment. Book your dream holiday today — limited availability!'",
          },
          stem: "Identify the text type and evaluate whether the structure serves its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Text type and structure", statement: "Brochure = promotional text type with specific features." }],
            steps: [
              { reasoning: "Criterion A (Analysing): brochure/promotional — 'Welcome', '5-star', 'Book today' — designed to persuade purchase.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B (Organizing): structure — greeting, list of attractions, call to action — appropriate for brochure.", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): effective for purpose — creates desire, provides key info, urges booking.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): weakness — superlatives without evidence ('world-class', 'endless'); 'limited availability' is pressure tactic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Brochure — promotional structure appropriate; effective but uses superlatives and pressure tactics.",
          },
        },
        {
          id: "mll4-u3-text-types-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about a school trip.",
          extract: {
            title: "Two Announcements",
            author: "Written for Akademik Space",
            text: "Announcement A: 'Year 10 students are reminded that the museum trip is on Tuesday. Bring permission slips and £15 for lunch. Meet at the school gates at 8:30am.'\n\nAnnouncement B: 'Picture this: ancient mummies, hidden tombs, treasures from pharaohs. Our museum trip is like stepping into a movie — don't miss it!'",
          },
          parts: [
            { label: "a", prompt: "Identify the text type of each.", marks: 1 },
            { label: "b", prompt: "Compare their purposes and audiences.", marks: 2 },
            { label: "c", prompt: "Which is more effective? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Text type and purpose", statement: "Notice = inform; promotional = persuade — different purposes." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): A = notice/instruction; B = promotional announcement.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): A informs (logistics: date, money, meeting point); B persuades (imagery, excitement).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A suits students needing practical info; B suits students needing motivation — different purposes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): A more effective for practical purpose (clear instructions); B more effective for enthusiasm — depends on goal.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): ideally combine both — B's imagery could enhance A's information.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = notice; B = promotional. (b) A informs logistics; B persuades with imagery. (c) A better for instructions; B for enthusiasm — combine ideally.",
          },
        },
      ],
    },
    {
      id: "mll4-u3-purpose-audience",
      title: "Purpose and audience in writing",
      skill: "Define clear purpose and audience and adapt writing accordingly.",
      lesson: {
        sections: [
          {
            heading: "Defining purpose",
            body: "Every text has a **purpose**: to **inform** (explain facts), **persuade** (change minds), **entertain** (amuse/engage), **describe** (paint pictures), **narrate** (tell stories), **instruct** (give directions). Know your purpose before you write.",
          },
          {
            heading: "Analysing audience",
            body: "Who will read this? Consider: **age**, **knowledge**, **interests**, **relationship** to you. A text for experts can use jargon; a text for beginners needs explanation. What do they already know? What do they care about? Audience determines everything.",
          },
          {
            heading: "Adapting to audience",
            body: "Same content, different audience = different writing. Explaining climate change to a scientist vs a 10-year-old: different vocabulary, examples, depth. Always ask: 'Will my audience understand this? Will it interest them? Is the register right?'",
          },
        ],
        keyFormulas: [
          { name: "Writing formula", statement: "Purpose + Audience = Text type + Structure + Language." },
        ],
        workedExample: {
          problem: "Explain 'democracy' to a Year 7 student vs a political science student.",
          solution: "Y7: simple definition, everyday examples (class votes). PoliSci: complex definition, historical context, theoretical frameworks.",
        },
      },
      questions: [
        {
          id: "mll4-u3-purpose-audience-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the main purposes of writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only to inform" },
              { id: "b", text: "To inform, persuade, entertain, describe, narrate, instruct" },
              { id: "c", text: "Only to entertain" },
              { id: "d", text: "To fill pages" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Writing purposes", statement: "Inform, persuade, entertain, describe, narrate, instruct." }],
            steps: [{ reasoning: "Criterion C (Producing text): multiple purposes — (b).", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** To inform, persuade, entertain, describe, narrate, instruct",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why audience matters when choosing vocabulary and examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Vocabulary and examples must match audience knowledge and interests." }],
            steps: [
              { reasoning: "Criterion C (Producing text): audience knowledge determines vocabulary — jargon for experts, simple words for beginners.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): audience interests determine examples — relatable examples engage, irrelevant ones confuse.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Audience knowledge → vocabulary choice; audience interests → example selection.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Explanations",
            author: "Written for Akademik Space",
            text: "For scientists: 'Photosynthesis is the process by which photoautotrophs convert light energy into chemical energy via the Calvin cycle.'\n\nFor children: 'Plants are like tiny chefs. They use sunlight, water and air to cook their own food — that's called photosynthesis.'",
          },
          stem: "Compare how each explanation adapts to its audience — what changes and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Same content, different audience = different vocabulary, examples, depth." }],
            steps: [
              { reasoning: "Criterion C (Producing text): scientists get technical terms ('photoautotrophs', 'Calvin cycle'); children get analogy ('tiny chefs').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): depth differs — scientists get process details; children get simple concept.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): both accurate but appropriately pitched — vocabulary, examples and complexity all adapted.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Same concept, different adaptation — technical vs analogy, detailed vs simple, matched to audience.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Define the purpose and audience for this text: 'Attention Year 10 students! Our careers fair is this Friday — come meet employers!'", marks: 1 },
            { label: "b", prompt: "Identify two language features that suit this audience.", marks: 2 },
            { label: "c", prompt: "Rewrite it for parents of Year 10 students — what changes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience adaptation", statement: "Language, register and emphasis change with audience." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): purpose — inform/encourage attendance; audience — Year 10 students.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): 'Attention!' direct address; 'come meet' casual imperative; exclamation — informal, energetic.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): suits students — casual, exciting, direct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): parent version — more formal, emphasizes value/opportunity, 'Dear Parents' style.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): register shifted — formal vocabulary, polite request.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Inform/encourage; Year 10 students. (b) Direct address, casual imperative, exclamation. (c) More formal, emphasizes opportunity.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'purpose' of a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The length of the text" },
              { id: "b", text: "What the text aims to achieve — inform, persuade, entertain" },
              { id: "c", text: "The author's name" },
              { id: "d", text: "The topic only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Purpose", statement: "Purpose = what the text aims to achieve." }],
            steps: [
              { reasoning: "Criterion C (Producing text): purpose = aim — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** What the text aims to achieve",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Explanations",
            author: "Written for Akademik Space",
            text: "For adults: 'The policy will undergo a comprehensive review, with stakeholder consultations scheduled for Q3.'\n\nFor children: 'The grown-ups are going to look at the rules again and ask everyone what they think.'",
          },
          stem: "How does each explanation adapt to its audience? What changes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Same content, different audience = different vocabulary and complexity." }],
            steps: [
              { reasoning: "Criterion C (Producing text): adult version uses jargon ('comprehensive review', 'stakeholder consultations', 'Q3'); child version simplifies ('grown-ups', 'rules again', 'what they think').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): complexity and vocabulary adapted — adults get precise terms, children get simple words.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Same policy explained — jargon/complexity for adults, simple words for children.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which THREE factors should you consider when analysing an audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Age, knowledge level, and interests" },
              { id: "b", text: "Font, colour, and paper size" },
              { id: "c", text: "Price, length, and spelling" },
              { id: "d", text: "Only the author's name" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience analysis", statement: "Consider age, knowledge, interests, relationship to writer." }],
            steps: [
              { reasoning: "Criterion C (Producing text): age, knowledge, interests are key factors — (a).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): relationship to writer also matters.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** Age, knowledge level, and interests",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Explanations",
            author: "Written for Akademik Space",
            text: "For scientists: 'The enzyme catalyses the hydrolysis of peptide bonds at a rate of 10^3 per second.'\n\nFor children: 'This special protein in your body acts like tiny scissors, cutting up food so your body can use it.'",
          },
          stem: "Compare how each explanation adapts to its audience — what changes and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Vocabulary, examples and depth match audience knowledge." }],
            steps: [
              { reasoning: "Criterion C (Producing text): scientists get technical precision ('catalyses', 'hydrolysis', '10^3 per second'); children get analogy ('tiny scissors').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): depth differs — scientists get rate/mechanism; children get function ('cutting up food').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): both accurate but appropriately pitched — vocabulary and examples matched to audience.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Technical precision for scientists vs analogy for children — same concept, adapted to knowledge.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main purpose of an instruction manual?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To entertain" },
              { id: "b", text: "To instruct — tell the reader how to do something" },
              { id: "c", text: "To persuade" },
              { id: "d", text: "To describe" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Purpose", statement: "Instruction manuals aim to instruct — guide action." }],
            steps: [
              { reasoning: "Criterion C (Producing text): manual = instruct — (b).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): needs clear steps, not persuasion or entertainment.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** To instruct — tell the reader how to do something",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Instructions",
            author: "Written for Akademik Space",
            text: "For experts: 'Configure the database schema using the provided DDL scripts. Ensure referential integrity constraints are enforced.'\n\nFor beginners: 'To set up your new app, open it and tap the blue button. It will ask you some questions — just answer them honestly.'",
          },
          stem: "Compare how each instruction adapts to its audience. What would happen if they were swapped?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Technical precision for experts; simple steps for beginners." }],
            steps: [
              { reasoning: "Criterion C (Producing text): expert version uses jargon ('DDL scripts', 'referential integrity'); beginner uses simple actions ('tap blue button', 'answer questions').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): depth and vocabulary matched to knowledge — experts need precision, beginners need guidance.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): swapped would confuse both — beginners can't understand 'DDL scripts', experts would find 'tap blue button' patronising.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): audience determines everything — language, examples, depth all adapted.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Experts get jargon/precision; beginners get simple steps — swapped would confuse both audiences.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Task",
            author: "Written for Akademik Space",
            text: "You must explain 'climate change' to two audiences: a group of Year 7 students and a panel of scientists.",
          },
          parts: [
            { label: "a", prompt: "Define the purpose and audience for each version.", marks: 2 },
            { label: "b", prompt: "Describe how the language would differ.", marks: 2 },
            { label: "c", prompt: "Give one example of an analogy suitable for Year 7 students.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Same content, different audience = different vocabulary, examples, depth." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): purpose — inform/educate both; audiences differ in knowledge (Y7 vs scientists).", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion C (Producing text): Y7 needs simple explanation; scientists need technical detail.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): Y7 version — simple words, everyday examples, 'Earth is getting hotter'; scientists — technical terms ('greenhouse effect', 'radiative forcing').", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): depth differs — Y7 gets concept, scientists get mechanism/data.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C (Producing text): analogy — e.g. 'Earth is like a greenhouse — the blanket of air traps heat.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Inform both; Y7 simple vs scientists technical. (b) Simple words/analogies vs jargon/data. (c) 'Earth like a greenhouse'.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does audience matter when choosing vocabulary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because vocabulary shows off" },
              { id: "b", text: "Because vocabulary must match audience knowledge" },
              { id: "c", text: "Because big words are always better" },
              { id: "d", text: "Because audiences don't read" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Vocabulary must match audience knowledge level." }],
            steps: [
              { reasoning: "Criterion C (Producing text): vocabulary matches audience — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Because vocabulary must match audience knowledge",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "For architects: 'The building features a cantilevered facade with curtain-wall glazing.'\n\nFor children: 'The building has a fancy curved front made of big windows.'",
          },
          stem: "How does each description adapt to its audience?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Technical terms for experts; simple descriptions for children." }],
            steps: [
              { reasoning: "Criterion C (Producing text): architects get jargon ('cantilevered facade', 'curtain-wall glazing'); children get simple ('fancy curved front', 'big windows').", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): same feature described differently — precision vs accessibility.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Technical jargon for architects vs simple words for children — same building, adapted description.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the purpose of a 'how-to' guide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To entertain" },
              { id: "b", text: "To instruct — guide the reader through steps" },
              { id: "c", text: "To persuade" },
              { id: "d", text: "To describe scenery" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Purpose", statement: "How-to guides aim to instruct." }],
            steps: [
              { reasoning: "Criterion C (Producing text): how-to = instruct — (b).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): needs clear sequential steps.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** To instruct — guide the reader through steps",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Emails",
            author: "Written for Akademik Space",
            text: "To boss: 'Dear Mr Jones, I am writing to request annual leave for 3-7 August. I have completed all pending tasks and briefed my colleague.'\n\nTo friend: 'Hey! Can I get annual leave Aug 3-7? All my work's done. You're covering for me right? LOL'",
          },
          stem: "Compare these two emails — how does each adapt to its audience? Evaluate effectiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience adaptation", statement: "Formal for boss; informal for friend — register matches relationship." }],
            steps: [
              { reasoning: "Criterion A (Analysing): boss version formal — 'Dear Mr Jones', 'request', 'completed tasks', 'briefed colleague' — professional.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): friend version informal — 'Hey', 'work's done', 'LOL' — casual.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): boss version more effective — provides dates, confirms tasks done, mentions handover — professional and complete.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): friend version appropriate for casual context but would fail with boss — register must match audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Boss = formal/professional; friend = informal/casual — both adapted appropriately to audience.",
          },
        },
        {
          id: "mll4-u3-purpose-audience-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          extract: {
            title: "The Task",
            author: "Written for Akademik Space",
            text: "You need to explain 'photosynthesis' to a Year 5 class.",
          },
          parts: [
            { label: "a", prompt: "State the purpose and audience.", marks: 1 },
            { label: "b", prompt: "Describe the register and language features appropriate for this audience.", marks: 2 },
            { label: "c", prompt: "Give two examples or analogies that would work for Year 5 students.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience adaptation", statement: "Simple words, analogies, engaging examples for young audience." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): purpose — educate/inform; audience — Year 5 students (children, limited science knowledge).", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): simple vocabulary, short sentences, analogies, questions to engage.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C (Producing text): avoid jargon ('chlorophyll', 'stomata'); use everyday words.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C (Producing text): analogies — 'plants are like tiny chefs using sunlight to cook food'; 'leaves are solar panels'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion C (Producing text): relatable examples — plants in garden, food they eat.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Educate Year 5. (b) Simple words, analogies, engaging. (c) 'Plants like chefs', 'leaves like solar panels'.",
          },
        },
      ],
    },
  ],
};
