import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const PAIR: TextExtract = {
  title: "Two Accounts of Working Nights",
  author: "Written for Akademik Space",
  source: "Text A: a diary entry. Text B: a newspaper article",
  text: "TEXT A: from a diary\n\nThursday, 3.15 am. The corridor lights hum and the ward is hushed except for the drip of a monitor. I have been on my feet since seven last night and my ankles ache, but I would not swap this for any desk. At two o'clock Mr Adeyemi finally slept, after three hours of pain, and his daughter squeezed my hand and whispered, ‘Thank you.’ That is the whole of my wage packet, really. Tomorrow I shall be exhausted. Tonight I am quietly, stubbornly happy.\n\nTEXT B: from a newspaper article\n\nThe night shift is a hidden health crisis. Studies show that people who work through the night are more likely to suffer heart disease, depression and serious accidents. Hospitals, factories and warehouses rely on thousands of such workers, yet their sleep, meals and social lives are routinely ignored. Employers must act. Every worker deserves rest breaks, a safe journey home and a proper say in their rota. Until that happens, we are asking some of our most dedicated colleagues to sacrifice their health for our convenience.",
};

const COMPARE_LEVELS: MarkLevel[] = [
  { part: "d", level: "Level 5", marks: "13-15", descriptor: "Perceptive, discriminating comparison of ideas and perspectives, and of methods used, with assured use of well-integrated evidence from both texts." },
  { part: "d", level: "Level 4", marks: "10-12", descriptor: "Thorough, well-supported comparison of ideas and methods with well-chosen evidence from both texts." },
  { part: "d", level: "Level 3", marks: "7-9", descriptor: "Clear, relevant comparison of ideas and some methods, with relevant references to both texts." },
  { part: "d", level: "Level 2", marks: "4-6", descriptor: "Some comparison of ideas, with some relevant references; methods are mentioned briefly; comparison may be uneven." },
  { part: "d", level: "Level 1", marks: "1-3", descriptor: "Simple, limited comparison; texts may be described separately; few references." },
];

const SIMPLE_LEVELS: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, developed comparison linked throughout, with well-chosen evidence from both texts." },
  { level: "Level 2", marks: "3-4", descriptor: "Some comparison with some relevant evidence from each text." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comparison; texts described separately." },
];

export const lesson13: Lesson = {
  id: "el10-u1-lesson-1-3",
  code: "1-3",
  title: "Comparing Two Texts",
  goal: "I CAN compare the ideas, perspectives and methods of two non-fiction texts, and plan a comparison answer that stays linked.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO3"],
  vocabulary: [
    { term: "Comparison", definition: "Showing similarities and differences between two texts." },
    { term: "Perspective", definition: "The viewpoint from which a writer sees and presents a subject." },
    { term: "Comparative connective", definition: "A word or phrase that links the two texts, such as ‘whereas’, ‘similarly’ or ‘in contrast’." },
    { term: "Register", definition: "The level of formality of language, chosen to suit audience and purpose." },
    { term: "Thesis", definition: "A central argument that shapes an entire answer." },
    { term: "Integrated comparison", definition: "Discussing both texts together in each paragraph, rather than one after the other." },
  ],
  concepts: [
    {
      id: "el10-u1-comparing-two-texts",
      title: "Comparing two texts",
      skill: "Compare the ideas, perspectives and methods of two texts using comparative connectives and evidence from both.",
      lesson: {
        sections: [
          {
            heading: "What AO3 asks for",
            body: "Comparison questions ask how two texts present a similar subject. You are rewarded for exploring **similarities and differences in ideas and perspectives** and for comparing **the methods** each writer uses. Do not retell Text A and then Text B. Instead, build every paragraph around a shared idea, with evidence from both.",
          },
          {
            heading: "Comparing ideas and perspectives",
            body: "In the pair above, both texts value night workers, but they differ in perspective. Text A is **personal and positive**: the writer finds meaning in comforting a patient. Text B is **critical and public**: the writer sees night work as a danger to health. Compare viewpoints with careful phrases such as ‘Both writers...’, ‘whereas’ and ‘in contrast’.",
          },
          {
            heading: "Comparing methods",
            body: "Methods include form, tone, sentence types and structure. Text A uses first person, a diary's intimate voice and a warm ending (‘quietly, stubbornly happy’). Text B uses statistics, a list of illnesses, short imperative-style sentences (‘Employers must act.’) and the pronoun ‘we’ to include the reader. Always say what each method achieves, not just that it exists.",
          },
        ],
        keyFormulas: [
          { name: "Comparative connectives", statement: "Similarly, likewise, both; whereas, however, in contrast, by comparison." },
          { name: "Ideas and methods", statement: "Compare what the writers say (ideas) and how they say it (methods), and link the two." },
          { name: "Equal weight", statement: "Give both texts balanced coverage, with evidence from each in every paragraph." },
        ],
        workedExample: {
          problem: "Compare how the writers of Text A and Text B present night workers.",
          solution: "Both writers present night workers as dedicated, but they do so with different emphasis. In Text A the diarist presents herself as fulfilled, describing her ‘quietly, stubbornly happy’ mood, an intimate, positive tone that suggests the work gives her purpose. In contrast, Text B presents workers as victims of a system, calling them people who ‘sacrifice their health for our convenience’, a critical tone that places blame on employers. Whereas Text A uses personal detail such as ‘his daughter squeezed my hand’, Text B uses statistics and a list of illnesses to give authority. Both texts therefore respect night workers, but one celebrates them and the other argues for their protection.",
        },
      },
      questions: [
        {
          id: "el10-u1-comparing-two-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PAIR,
          stem: "Which of these is a similarity between Text A and Text B?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are written in the first person." },
              { id: "b", text: "Both show respect for the people who work at night." },
              { id: "c", text: "Both use statistics to support their ideas." },
              { id: "d", text: "Both argue that night work should be banned." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Identifying a similarity", statement: "Check each statement against both texts." }],
            steps: [{ reasoning: "Text A values the work; Text B calls workers ‘most dedicated colleagues’, so both respect them.", evidence: "our most dedicated colleagues", marks: 1, markCode: "AO3" }],
            finalAnswer: "**(b)** Both respect night workers.",
            commonErrors: ["Choosing (a): only Text A uses first person singular.", "Choosing (c): only Text B refers to studies."],
          },
        },
        {
          id: "el10-u1-comparing-two-texts-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PAIR,
          stem: "Compare the tone of Text A and Text B.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparative connective", statement: "Use a link such as ‘whereas’ so both texts appear in one sentence." }],
            steps: [
              { reasoning: "Text A is warm, personal and contented.", evidence: "quietly, stubbornly happy", marks: 1, markCode: "AO3" },
              { reasoning: "Text B is serious, urgent and critical.", evidence: "hidden health crisis", marks: 1, markCode: "AO3" },
              { reasoning: "Uses a comparative link and explains the difference (private feeling versus public argument).", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Text A has a warm, personal tone, ‘quietly, stubbornly happy’, whereas Text B is urgent and critical, calling night work a ‘hidden health crisis’.",
            commonErrors: ["Describing each text in separate paragraphs with no link.", "Naming a tone without evidence."],
          },
        },
        {
          id: "el10-u1-comparing-two-texts-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: PAIR,
          stem: "Compare how the two writers use language to present their feelings about night work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparison", statement: "Each paragraph covers both texts." },
              { kind: "technique", name: "Modal verb", statement: "‘Must’ expresses obligation and urgency." },
            ],
            steps: [
              { reasoning: "Text A uses sensory detail and first person to share an intimate, positive experience.", evidence: "the drip of a monitor", marks: 2, markCode: "AO3" },
              { reasoning: "Text B uses emotive, imperative-style language and the modal ‘must’ to demand action.", evidence: "Employers must act.", marks: 2, markCode: "AO3" },
              { reasoning: "Comparison: Text A feels personal and rewarded; Text B feels public and concerned, though both appreciate workers.", evidence: "Thank you", marks: 2, markCode: "AO3" },
            ],
            levels: SIMPLE_LEVELS,
            finalAnswer: "Text A uses intimate sensory detail and a grateful ending to show quiet fulfilment, whereas Text B uses the forceful modal ‘must’ and a list of health risks to show concern. Both respect workers, but one celebrates and the other protests.",
            commonErrors: ["Writing about the texts separately.", "Giving only ideas, with no language comment."],
          },
        },
        {
          id: "el10-u1-comparing-two-texts-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: PAIR,
          stem: "Read Text A and Text B and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two things the diarist says about her working night in Text A.", marks: 2 },
            { label: "b", prompt: "Give three health or safety risks of night work mentioned in Text B.", marks: 3 },
            { label: "c", prompt: "Explain one difference in the attitudes of the two writers towards night work.", marks: 5 },
            { label: "d", prompt: "Compare the ideas and perspectives in the two texts and the methods the writers use to convey them. Support your answer with detailed reference to both texts.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ideas and methods", statement: "Compare what each writer says and how they say it." },
              { kind: "convention", name: "Form", statement: "A diary is private and personal; an article is public and persuasive." },
            ],
            steps: [
              { part: "a", reasoning: "She has been on her feet since seven.", evidence: "on my feet since seven", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "A patient finally slept and his daughter thanked her.", evidence: "Mr Adeyemi finally slept", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Heart disease.", evidence: "heart disease", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Depression.", evidence: "depression", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Serious accidents.", evidence: "serious accidents", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Text A finds night work rewarding and would not change it.", evidence: "I would not swap this for any desk", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Text B sees night work as harmful and unfair without change.", evidence: "sacrifice their health", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Clear difference identified: personal fulfilment versus criticism of the system.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Shared idea: both value night workers' dedication.", evidence: "most dedicated colleagues", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Different perspectives: personal contentment against public concern.", evidence: "quietly, stubbornly happy", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Methods: first-person diary voice and sensory detail versus statistics and lists.", evidence: "the drip of a monitor", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Methods: direct address and modal verbs in Text B create urgency.", evidence: "Employers must act.", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Overall comparison: one celebrates the individual, the other campaigns for change.", evidence: "sacrifice their health for our convenience", marks: 3, markCode: "AO3" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5", descriptor: "Clear difference explained with evidence from both texts." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "A difference is identified with some evidence." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "A simple, limited comment." },
              ...COMPARE_LEVELS,
            ],
            finalAnswer: "(a) She has been on her feet since seven; a patient finally slept and his daughter thanked her. (b) Heart disease; depression; serious accidents. (c) Text A finds night work fulfilling, whereas Text B sees it as harmful and in need of reform. (d) Both writers respect night workers but Text A is a warm, personal diary voice with sensory detail, whereas Text B is a public argument using statistics, lists and the modal ‘must’ to call for change.",
            commonErrors: ["Comparing the texts only in the final sentence.", "Writing only about ideas.", "Missing the diary and article forms."],
            examinerNote: "In (d), reward integrated paragraphs with evidence from both texts.",
          },
        },
      ],
    },
    {
      id: "el10-u1-planning-comparison",
      title: "Planning the comparison answer",
      skill: "Plan a linked comparison in a few minutes, with a thesis, matched points and evidence from both texts.",
      lesson: {
        sections: [
          {
            heading: "A five-minute plan",
            body: "Spend about five minutes planning a comparison. Write a short **thesis** that compares overall viewpoints, such as ‘Both respect night workers, but one celebrates and one defends them’. Then choose three points that apply to both texts, such as **attitude**, **tone** and **structure or form**.",
          },
          {
            heading: "Matching points and evidence",
            body: "Create a simple grid. For each point, note a short quotation from Text A and a matching quotation from Text B. For example: Point 1, attitude: A ‘would not swap this for any desk’; B ‘sacrifice their health’. Matching evidence guarantees that each paragraph is balanced and comparative.",
          },
          {
            heading: "Writing from the plan",
            body: "Open with your thesis. Give each paragraph one comparative idea, a connective and evidence from both texts. Conclude with a sentence that returns to the overall comparison. Keep to the plan: it prevents drifting into retelling or running out of time.",
          },
        ],
        keyFormulas: [
          { name: "Thesis", statement: "One sentence comparing the writers' overall views." },
          { name: "Matched grid", statement: "Point; evidence from Text A; evidence from Text B; comparative link." },
          { name: "Three-paragraph rule", statement: "Typically three comparative paragraphs and a brief conclusion fit the time available." },
        ],
        workedExample: {
          problem: "Plan a comparison of how Text A and Text B present night workers.",
          solution: "Thesis: both respect night workers, but Text A celebrates the personal reward whereas Text B defends workers against harm. Point 1, attitude: A ‘would not swap this for any desk’; B ‘sacrifice their health’. Point 2, tone: A warm and reflective, ‘quietly, stubbornly happy’; B urgent, ‘hidden health crisis’. Point 3, method: A sensory detail and first person; B statistics, list of illnesses and ‘Employers must act.’ Each point has a link word such as ‘whereas’.",
        },
      },
      questions: [
        {
          id: "el10-u1-planning-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PAIR,
          stem: "Which of these would make the best thesis for a comparison of Text A and Text B?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text A is a diary and Text B is an article." },
              { id: "b", text: "Both texts respect night workers, but Text A celebrates the work whereas Text B argues that it harms people." },
              { id: "c", text: "Night work is difficult." },
              { id: "d", text: "I will compare the texts." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparative thesis", statement: "A thesis states an overall similarity and difference in viewpoint." }],
            steps: [{ reasoning: "Option (b) links both texts and states a similarity and a difference.", marks: 1, markCode: "AO3" }],
            finalAnswer: "**(b)** It compares the writers' overall views.",
            commonErrors: ["Choosing (a), which only states form.", "Choosing (c), which is not comparative."],
          },
        },
        {
          id: "el10-u1-planning-comparison-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PAIR,
          stem: "Write one comparative sentence about the writers' feelings, using ‘whereas’ and a short quotation from each text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Linked sentence", statement: "One sentence containing both texts joined with a comparative connective." }],
            steps: [
              { reasoning: "Short, accurate quotation from Text A.", evidence: "quietly, stubbornly happy", marks: 1, markCode: "AO3" },
              { reasoning: "Short, accurate quotation from Text B.", evidence: "sacrifice their health", marks: 1, markCode: "AO3" },
              { reasoning: "Uses ‘whereas’ correctly to show a difference in feeling.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Text A feels ‘quietly, stubbornly happy’, whereas Text B is concerned that workers ‘sacrifice their health’.",
            commonErrors: ["Using ‘whereas’ without a real contrast.", "Using two separate sentences."],
          },
        },
        {
          id: "el10-u1-planning-comparison-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: PAIR,
          stem: "Write a short plan for a full comparison answer: a one-sentence thesis, then two matched points with a quotation from each text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Matched grid", statement: "Each point has evidence from both texts." }],
            steps: [
              { reasoning: "A clear comparative thesis.", marks: 2, markCode: "AO3" },
              { reasoning: "Point 1 (attitude) with matched quotations, for example ‘would not swap this for any desk’ and ‘sacrifice their health’.", evidence: "I would not swap this for any desk", marks: 2, markCode: "AO3" },
              { reasoning: "Point 2 (method or tone) with matched quotations, for example ‘quietly, stubbornly happy’ and ‘hidden health crisis’.", evidence: "hidden health crisis", marks: 2, markCode: "AO3" },
            ],
            levels: SIMPLE_LEVELS,
            finalAnswer: "Thesis: both admire night workers, but A celebrates, B defends. Point 1 attitude: ‘would not swap’ against ‘sacrifice their health’. Point 2 tone: ‘quietly, stubbornly happy’ against ‘hidden health crisis’.",
            commonErrors: ["Listing points for each text separately.", "Omitting quotations."],
          },
        },
        {
          id: "el10-u1-planning-comparison-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: PAIR,
          stem: "Read Text A and Text B and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "State two ways in which the form of Text A differs from the form of Text B.", marks: 2 },
            { label: "b", prompt: "Write a one-sentence thesis comparing the writers' overall attitudes.", marks: 2 },
            { label: "c", prompt: "Produce a plan with three matched points, each with a quotation from both texts.", marks: 6 },
            { label: "d", prompt: "Using your plan, write the first two paragraphs of a comparison of how the writers present night work.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A thesis and matched points drive a linked answer." },
              { kind: "convention", name: "Form", statement: "A diary is private and in first person; a newspaper article addresses a public audience." },
            ],
            steps: [
              { part: "a", reasoning: "Text A is a private diary in first person; Text B is a public article.", evidence: "I have been on my feet", marks: 1, markCode: "AO3" },
              { part: "a", reasoning: "Text A has a warm personal voice; Text B uses statistics and an argumentative voice.", evidence: "Studies show", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Thesis identifies a shared respect.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Thesis identifies a difference in view or emphasis.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Point 1: attitude, with matched quotations.", evidence: "would not swap this for any desk", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Point 2: tone, with matched quotations.", evidence: "hidden health crisis", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Point 3: method (voice, statistics, address), with matched quotations.", evidence: "Employers must act", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Opens with the thesis and a comparative connective.", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "First paragraph compares attitude with evidence from both texts.", evidence: "sacrifice their health for our convenience", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Second paragraph compares methods and effects, with evidence from both.", evidence: "his daughter squeezed my hand", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Evidence is embedded and effects are explained.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Three well-matched points with accurate, short evidence from both texts." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Two or three points with some matched evidence." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple points, with little matching." },
              { part: "d", level: "Level 5", marks: "9-10", descriptor: "Perceptive, integrated comparison, assured evidence and analysis of methods." },
              { part: "d", level: "Level 4", marks: "7-8", descriptor: "Thorough comparison with well-chosen evidence from both texts." },
              { part: "d", level: "Level 3", marks: "5-6", descriptor: "Clear, relevant comparison with relevant evidence." },
              { part: "d", level: "Level 2", marks: "3-4", descriptor: "Some comparison; evidence is limited." },
              { part: "d", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comparison." },
            ],
            finalAnswer: "(a) Text A is a private first-person diary; Text B is a public article using statistics. (b) Both writers respect night workers, but Text A celebrates the personal reward whereas Text B argues they are harmed. (c) Attitude, tone and method, each matched with quotations from both texts. (d) Two linked paragraphs that begin with the thesis and compare attitude and methods with evidence from both texts.",
            commonErrors: ["A plan listing Text A then Text B separately.", "No quotations in the grid.", "Paragraphs on one text only."],
          },
        },
      ],
    },
  ],
};
