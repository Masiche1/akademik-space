import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "langb-u2-lesson-2-1",
  code: "2-1",
  title: "Writing Paragraphs and Simple Essays",
  goal: "I CAN write a well-organised paragraph and a simple essay with introduction, body and conclusion.",
  standards: ["Writing", "Productive skills", "Language B SL"],
  vocabulary: [
    { term: "Paragraph", definition: "A group of sentences developing one main idea, usually starting with a topic sentence." },
    { term: "Topic sentence", definition: "The first sentence of a paragraph stating its main idea." },
    { term: "Cohesion", definition: "The linking of ideas using connectives like 'however', 'for example', 'in addition'." },
    { term: "Essay", definition: "A structured piece of writing with an introduction, body paragraphs and a conclusion." },
    { term: "Thesis statement", definition: "The sentence in an introduction stating the essay's main argument or position." },
    { term: "Supporting detail", definition: "Facts, examples or explanations that develop and prove a main idea." },
  ],
  concepts: [
    {
      id: "langb-u2-paragraphs",
      title: "Building strong paragraphs",
      skill: "Construct paragraphs with a clear topic sentence, supporting details and a closing link.",
      lesson: {
        sections: [
          {
            heading: "The anatomy of a paragraph",
            body: "A good paragraph does one job: develops a single idea. Start with a **topic sentence** that states the idea. Follow with **supporting details** — examples, reasons, facts — usually 2–4 sentences. End with a sentence that links back or forward. If a paragraph tries to do two jobs, split it.",
          },
          {
            heading: "Cohesion within the paragraph",
            body: "Ideas inside a paragraph must flow. Use **connectives**: 'for example', 'in addition', 'however', 'as a result'. Repeat key nouns or use pronouns ('it', 'this') to avoid clumsy repetition. Vary sentence length — short sentences for emphasis, longer ones for explanation.",
          },
          {
            heading: "Checking a paragraph",
            body: "Before moving on, ask: Does every sentence support the topic sentence? Is the order logical? Does it end cleanly? In Language B writing tasks, clear paragraphs are scored under organisation and coherence — accuracy alone will not carry a disorganised text.",
          },
        ],
        keyFormulas: [
          { name: "Paragraph structure", statement: "Topic sentence -> supporting details -> closing/linking sentence" },
          { name: "Cohesion tools", statement: "Connectives + pronouns + repeated keywords link sentences" },
        ],
        workedExample: {
          problem: "Improve: 'Dogs are good pets. They are loyal. Cats are different.'",
          solution: "'Dogs make excellent pets because they are loyal companions. For example, many dogs greet their owners excitedly every day. Cats, by contrast, are more independent.' — topic sentence, example support, contrast link.",
        },
      },
      questions: [
        {
          id: "langb-u2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the function of a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To summarise the whole essay" },
              { id: "b", text: "To end the paragraph" },
              { id: "c", text: "To list the sources used" },
              { id: "d", text: "To state the main idea of the paragraph" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "The opening sentence stating a paragraph's central idea." },
            ],
            steps: [
              { reasoning: "The topic sentence introduces and controls the paragraph's single idea.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** To state the main idea of the paragraph",
            commonErrors: ["Confusing the topic sentence with the essay's thesis."],
          },
        },
        {
          id: "langb-u2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three types of supporting detail you can use to develop a topic sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Supporting details", statement: "Examples, reasons and facts/explanations develop a paragraph's idea." },
            ],
            steps: [
              { reasoning: "Examples: specific instances that illustrate the idea.", marks: 1, markCode: "M" },
              { reasoning: "Reasons: explanations of why the idea is true.", marks: 1, markCode: "M" },
              { reasoning: "Facts or statistics: verifiable information that adds authority.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Examples, reasons, facts/statistics.",
            commonErrors: ["Repeating the topic sentence instead of adding new supporting content."],
          },
        },
        {
          id: "langb-u2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what 'cohesion' means in paragraph writing and give two techniques for achieving it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cohesion", statement: "The smooth linking of sentences and ideas so the text reads as one unit." },
            ],
            steps: [
              { reasoning: "Cohesion is the quality that makes sentences feel connected rather than a list.", marks: 1, markCode: "M" },
              { reasoning: "Technique 1: connectives ('however', 'for example', 'as a result') signal relationships.", marks: 1, markCode: "M" },
              { reasoning: "Technique 2: pronouns and repeated key nouns ('it', 'this', 'the festival') create links without repetition.", marks: 1, markCode: "M" },
              { reasoning: "Both techniques described with purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cohesion = connected flow; achieved via connectives and pronouns/keyword repetition.",
            commonErrors: ["Listing connectives without explaining the linking function."],
          },
        },
        {
          id: "langb-u2-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a paragraph about why learning a second language is useful, then analyse your own paragraph.",
          parts: [
            { label: "a", prompt: "Write a topic sentence and two supporting sentences.", marks: 2 },
            { label: "b", prompt: "Add one connective that links your supporting ideas.", marks: 2 },
            { label: "c", prompt: "Explain how your paragraph shows cohesion and a clear main idea.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph production", statement: "Topic sentence + supports + connective = coherent paragraph." },
            ],
            steps: [
              { part: "a", reasoning: "Topic sentence states one clear idea about language learning benefits.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two supporting sentences give reasons or examples.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A suitable connective (e.g. 'for example', 'in addition', 'also') joins the ideas.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Connective used correctly in context.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Identifies the main idea and how each sentence supports it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explains how the connective creates flow between ideas.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Self-assessment is accurate and specific.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear topic sentence + two supports. (b) Correct connective. (c) Accurate explanation of cohesion and main idea.",
            commonErrors: ["Topic sentence that is too broad or that the body does not support."],
          },
        },
        {
          id: "langb-u2-q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is the strongest topic sentence for a paragraph about why reading is good for students?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Books can be bought in many different shops." },
              { id: "b", text: "Reading regularly improves vocabulary, imagination and exam performance." },
              { id: "c", text: "Some students prefer watching films to reading." },
              { id: "d", text: "Reading is something that many people do." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "The opening sentence stating a paragraph's single central idea." },
            ],
            steps: [
              { reasoning: "A topic sentence must state one clear, arguable idea the paragraph can develop.", marks: 1, markCode: "M" },
              { reasoning: "Only (b) states a clear claim about the benefits of reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reading regularly improves vocabulary, imagination and exam performance.",
            commonErrors: ["Choosing an interesting sentence that does not state a claim."],
          },
        },
        {
          id: "langb-u2-q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which connective best signals a contrast between two ideas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "however" },
              { id: "b", text: "as a result" },
              { id: "c", text: "for example" },
              { id: "d", text: "in addition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Connectives", statement: "Connectives signal the logical relationship between ideas: addition, contrast, cause, example." },
            ],
            steps: [
              { reasoning: "Each connective signals a different relationship; 'however' signals contrast.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** however",
            commonErrors: ["Confusing contrast connectives with addition or cause connectives."],
          },
        },
        {
          id: "langb-u2-q27",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph about 'the benefits of regular exercise' contains the sentence 'Pizza is my favourite food.' What is the main problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is off-topic and does not support the paragraph's idea" },
              { id: "b", text: "It lacks a connective" },
              { id: "c", text: "It contains a spelling mistake" },
              { id: "d", text: "It is written in too formal a register" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supporting detail", statement: "Every sentence in a paragraph must develop the topic sentence's single idea." },
            ],
            steps: [
              { reasoning: "The paragraph's idea is exercise; pizza is unrelated to it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It is off-topic and does not support the paragraph's idea",
            commonErrors: ["Noticing surface errors while missing that the sentence breaks the paragraph's focus."],
          },
        },
        {
          id: "langb-u2-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence best closes a paragraph explaining why school uniforms are useful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For these reasons, uniforms help everyone feel part of the same community." },
              { id: "b", text: "In other news, the school canteen serves pizza on Fridays." },
              { id: "c", text: "Uniforms are good." },
              { id: "d", text: "The uniform rules are written in the student handbook." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Closing sentence", statement: "A closing or linking sentence ties the paragraph's details back to its main idea or links forward." },
            ],
            steps: [
              { reasoning: "A closing sentence should summarise or extend the paragraph's argument.", marks: 1, markCode: "M" },
              { reasoning: "Only (c) returns to the main idea about uniforms with a 'for these reasons' link.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** For these reasons, uniforms help everyone feel part of the same community.",
            commonErrors: ["Choosing a short statement that does not link back to the supporting details."],
          },
        },
        {
          id: "langb-u2-q29",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Rewrite this weak topic sentence so it is clear and specific: 'Technology is important.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic sentences", statement: "A strong topic sentence names one specific idea a paragraph can develop." },
            ],
            steps: [
              { reasoning: "The original is vague — 'important' does not say for whom or in what way.", marks: 1, markCode: "M" },
              { reasoning: "A specific rewrite names a benefit and audience, e.g. 'Technology helps students learn faster and stay connected with classmates.'", marks: 1, markCode: "M" },
              { reasoning: "The rewrite states exactly one clear idea the paragraph can support.", marks: 1, markCode: "M" },
              { reasoning: "Vague evaluative words like 'important' are replaced by concrete claims that can be explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Technology helps students learn faster and stay connected with classmates.'",
            commonErrors: ["Replacing 'important' with another vague adjective instead of adding specifics."],
          },
        },
        {
          id: "langb-u2-q30",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how pronouns and repeated key words create cohesion inside a paragraph, and give one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cohesion devices", statement: "Pronouns and keyword repetition link sentences without clumsy repetition." },
            ],
            steps: [
              { reasoning: "Cohesion makes sentences feel connected rather than a random list.", marks: 1, markCode: "M" },
              { reasoning: "Pronouns such as 'it', 'this' and 'they' refer back to nouns already mentioned.", marks: 1, markCode: "M" },
              { reasoning: "Repeating a key noun such as 'the festival' keeps the topic visible while avoiding awkward synonym-hunting.", marks: 1, markCode: "M" },
              { reasoning: "A valid example, e.g. 'The festival attracts visitors. It takes place every summer, and the festival always ends with fireworks.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pronouns refer back to earlier nouns; repeated key words keep the topic anchored — e.g. 'It' for 'the festival'.",
            commonErrors: ["Describing the devices without giving a concrete example sentence."],
          },
        },
        {
          id: "langb-u2-q31",
          difficulty: "core",
          totalMarks: 4,
          stem: "This paragraph has problems: 'Dogs are wonderful pets. They need walking every day. My sister plays tennis at weekends. Dogs are loyal animals.' Identify the problems and rewrite the paragraph coherently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph editing", statement: "Every sentence must support one idea; remove off-topic material and merge repeated points." },
            ],
            steps: [
              { reasoning: "'My sister plays tennis' is off-topic — it does not develop the idea about dogs.", marks: 1, markCode: "M" },
              { reasoning: "'Dogs are wonderful' and 'Dogs are loyal' repeat the same point without adding new support.", marks: 1, markCode: "M" },
              { reasoning: "A coherent rewrite keeps one idea and develops it, e.g. merging loyalty with an example of loyalty.", marks: 1, markCode: "M" },
              { reasoning: "A correct version such as 'Dogs are wonderful pets because they are loyal companions. For example, many dogs greet their owners excitedly every day, and they need a daily walk.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Remove the tennis sentence and merge the repeated points: 'Dogs are wonderful pets because they are loyal companions. For example, many dogs greet their owners excitedly every day, and they need a daily walk.'",
            commonErrors: ["Deleting sentences without checking that the remaining text still develops the topic."],
          },
        },
        {
          id: "langb-u2-q32",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a paragraph about why sleep is important for students.",
          parts: [
            { label: "a", prompt: "Write a topic sentence and one supporting detail.", marks: 2 },
            { label: "b", prompt: "Add two connectives that link your ideas.", marks: 2 },
            { label: "c", prompt: "Write a closing sentence and explain how your paragraph achieves cohesion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph production", statement: "Topic sentence + supporting details + connectives + closing link = coherent paragraph." },
            ],
            steps: [
              { part: "a", reasoning: "Topic sentence states one clear idea about sleep and students.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Supporting detail gives a specific reason or example.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two appropriate connectives such as 'for example' and 'as a result' are used.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The connectives are used correctly in context to show the logical link.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Closing sentence links back to the main idea or forward to a conclusion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explanation correctly identifies how connectives and pronouns create flow.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Self-assessment is accurate and specific to the written paragraph.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear topic sentence + specific detail. (b) Two correct connectives. (c) Linking closing sentence + accurate cohesion explanation.",
            commonErrors: ["Connectives dropped in mechanically rather than showing real logical relationships."],
          },
        },
        {
          id: "langb-u2-q33",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence best closes a paragraph about saving money?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather is nice in summer." },
              { id: "b", text: "Saving money is very hard." },
              { id: "c", text: "I like having money." },
              { id: "d", text: "Small habits like cooking at home can make saving money easier than it seems." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Closing sentence", statement: "The closing sentence should extend or summarise the paragraph's argument." },
            ],
            steps: [
              { reasoning: "A closing sentence develops the paragraph's idea rather than repeating a bare statement.", marks: 1, markCode: "M" },
              { reasoning: "Only (c) offers a concrete extension about saving habits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Small habits like cooking at home can make saving money easier than it seems.",
            commonErrors: ["Choosing a sentence that is true but adds nothing to the paragraph's argument."],
          },
        },
        {
          id: "langb-u2-q34",
          difficulty: "core",
          totalMarks: 4,
          stem: "Improve this weak paragraph: 'Exercise is good for you. It makes you healthy. You should do it.' Add a clear topic sentence, one example and one connective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph improvement", statement: "Weak paragraphs gain strength from a specific topic sentence, concrete detail and linking words." },
            ],
            steps: [
              { reasoning: "A topic sentence states one idea, e.g. 'Regular exercise improves both health and mood.'", marks: 1, markCode: "M" },
              { reasoning: "An example detail is added, e.g. 'For example, a daily walk can reduce stress.'", marks: 1, markCode: "M" },
              { reasoning: "A connective such as 'for example' or 'in addition' links the ideas correctly.", marks: 1, markCode: "M" },
              { reasoning: "The finished paragraph develops a single idea coherently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Regular exercise improves both health and mood. For example, a daily walk can reduce stress and help students concentrate in class.'",
            commonErrors: ["Adding detail that drifts away from the single paragraph idea."],
          },
        },
        {
          id: "langb-u2-q35",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is the 'one main idea per paragraph' rule important in IB Language B writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It allows the use of more vocabulary" },
              { id: "b", text: "It helps the organisation and coherence criterion by keeping each paragraph focused" },
              { id: "c", text: "It makes paragraphs longer" },
              { id: "d", text: "It removes the need for connectives" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment criteria", statement: "Language B writing is assessed on organisation and coherence; focused paragraphs score higher." },
            ],
            steps: [
              { reasoning: "One idea per paragraph keeps organisation clear and each paragraph easy to follow.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It helps the organisation and coherence criterion by keeping each paragraph focused",
            commonErrors: ["Thinking paragraph rules are just stylistic preferences with no mark impact."],
          },
        },
        {
          id: "langb-u2-q36",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse and improve this paragraph: 'School can be stressful. Students have many tests. Tests are difficult. Homework is also hard.'",
          parts: [
            { label: "a", prompt: "State the paragraph's main idea in one sentence.", marks: 2 },
            { label: "b", prompt: "Write a stronger topic sentence for it.", marks: 2 },
            { label: "c", prompt: "Add one connective and one closing sentence that links the ideas.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph analysis", statement: "Identify the controlling idea, sharpen the topic sentence, and link details with connectives." },
            ],
            steps: [
              { part: "a", reasoning: "The main idea is that school life can be stressful for students.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It is stated as a complete sentence, not just a topic.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A stronger topic sentence is specific, e.g. 'Many students find school stressful because of tests and homework.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The topic sentence states a position the details can support, not just the subject 'school'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A suitable connective such as 'in addition' or 'also' joins the ideas.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A closing sentence summarises or extends the point, e.g. 'Together, these pressures can make the school week feel overwhelming.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) School life can be stressful. (b) e.g. 'Many students find school stressful because of tests and homework.' (c) Connective + linking close, e.g. '...homework is also hard. Together, these pressures can feel overwhelming.'",
            commonErrors: ["Writing a topic sentence that only names the subject without taking a position."],
          },
        },
      ],
    },
    {
      id: "langb-u2-simple-essays",
      title: "Simple essay structure",
      skill: "Plan and write a simple essay with an introduction, body paragraphs and a conclusion.",
      lesson: {
        sections: [
          {
            heading: "From paragraph to essay",
            body: "An **essay** extends the paragraph idea to several paragraphs. The **introduction** hooks the reader and ends with a **thesis statement** — your main position. Each **body paragraph** develops one supporting point with its own topic sentence. The **conclusion** restates the thesis in new words and ends with a final thought. Aim for one idea per paragraph.",
          },
          {
            heading: "Planning before writing",
            body: "Never start writing immediately. Spend 3–5 minutes planning: decide your thesis, list 2–3 supporting points, and assign one paragraph to each. This plan becomes your essay's skeleton. In timed Language B tasks, planning time is an investment — unplanned essays ramble and lose marks for organisation.",
          },
          {
            heading: "Length and proportion",
            body: "For a short essay (150–200 words): introduction ~20–30 words, two or three body paragraphs of ~50–60 words each, conclusion ~20–30 words. Each body paragraph needs a topic sentence and at least one supporting detail. Do not pad with repetition — quality of development beats quantity of words.",
          },
        ],
        keyFormulas: [
          { name: "Essay skeleton", statement: "Introduction (hook + thesis) -> body paragraphs (one point each) -> conclusion" },
          { name: "Word budget", statement: "Intro ~15%, body ~70%, conclusion ~15% of total words" },
        ],
        workedExample: {
          problem: "Plan a 150-word essay on 'Why I like my school'.",
          solution: "Thesis: 'My school is a good place because of its teachers, activities and community.' Body 1: teachers. Body 2: activities. Conclusion: restate why it matters.",
        },
      },
      questions: [
        {
          id: "langb-u2-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a thesis statement do in an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It introduces the first body paragraph" },
              { id: "b", text: "It lists the essay's sources" },
              { id: "c", text: "It states the essay's main position or argument" },
              { id: "d", text: "It summarises each paragraph" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis statement", statement: "The sentence stating the essay's central argument or position, usually at the end of the introduction." },
            ],
            steps: [
              { reasoning: "The thesis controls the whole essay by declaring its main point.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It states the essay's main position or argument",
            commonErrors: ["Writing a thesis that is just a topic, not a position."],
          },
        },
        {
          id: "langb-u2-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the three main parts of a simple essay and state the job of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Essay structure", statement: "Introduction presents thesis; body develops points; conclusion restates and closes." },
            ],
            steps: [
              { reasoning: "Introduction: engages the reader and states the thesis.", marks: 1, markCode: "M" },
              { reasoning: "Body: one paragraph per supporting point, each with topic sentence and details.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: restates the main idea in new words and adds a closing thought.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Introduction (thesis), body (supporting points), conclusion (restatement).",
            commonErrors: ["Introducing new arguments in the conclusion instead of restating."],
          },
        },
        {
          id: "langb-u2-q7",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why planning an essay before writing improves the final mark in a timed Language B task.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A plan fixes the thesis and point-per-paragraph structure, preventing rambling." },
            ],
            steps: [
              { reasoning: "Planning fixes a clear thesis before writing begins.", marks: 1, markCode: "M" },
              { reasoning: "It allocates one paragraph per supporting point, ensuring balanced development.", marks: 1, markCode: "M" },
              { reasoning: "Under time pressure, writers without plans repeat ideas or drift off-task.", marks: 1, markCode: "R" },
              { reasoning: "A planned essay scores higher on organisation and task fulfilment criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Planning secures thesis + structure, preventing repetition and off-task drift under time pressure.",
            commonErrors: ["Starting to write immediately and 'seeing where it goes'."],
          },
        },
        {
          id: "langb-u2-q8",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan a simple essay on the topic 'The best thing about my town'.",
          parts: [
            { label: "a", prompt: "Write a thesis statement for the essay.", marks: 2 },
            { label: "b", prompt: "List two supporting points, one per body paragraph.", marks: 2 },
            { label: "c", prompt: "Explain how your conclusion should relate to your introduction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay planning", statement: "Thesis + one point per paragraph + conclusion that mirrors the introduction." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis states a clear position, e.g. 'My town is best for its people, nature and food.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Thesis is a position, not just the topic.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two distinct supporting points matching the thesis, e.g. friendly people and beautiful surroundings.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each point can sustain its own paragraph.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclusion restates the thesis in different words, not copied.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It may add a final thought or feeling about the topic.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No new arguments appear in the conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear positional thesis. (b) Two distinct points. (c) Conclusion restates thesis in new words, adds closing thought, no new ideas.",
            commonErrors: ["Conclusion that repeats the introduction word for word or introduces new points."],
          },
        },
        {
          id: "langb-u2-q37",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main job of an essay's introduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To list the sources used" },
              { id: "b", text: "To give the final conclusion" },
              { id: "c", text: "To hook the reader and present the thesis statement" },
              { id: "d", text: "To summarise every body paragraph" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction", statement: "The introduction engages the reader and ends with the thesis statement." },
            ],
            steps: [
              { reasoning: "The introduction's role is to engage and state the essay's position.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** To hook the reader and present the thesis statement",
            commonErrors: ["Confusing the introduction's job with the conclusion's job of restating."],
          },
        },
        {
          id: "langb-u2-q38",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which part of an essay should restate the main idea in new words?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The introduction" },
              { id: "b", text: "The conclusion" },
              { id: "c", text: "The title" },
              { id: "d", text: "A body paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conclusion", statement: "The conclusion restates the thesis in different words and adds a closing thought." },
            ],
            steps: [
              { reasoning: "Restating the main idea in fresh language is the conclusion's defining job.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The conclusion",
            commonErrors: ["Thinking the conclusion should introduce the argument for the first time."],
          },
        },
        {
          id: "langb-u2-q39",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the strongest thesis statement for an essay on school uniforms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uniforms are worn by students." },
              { id: "b", text: "School uniforms." },
              { id: "c", text: "School uniforms are beneficial because they reduce distraction and create equality." },
              { id: "d", text: "This essay will discuss uniforms." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis statement", statement: "A sentence stating the essay's position, giving reasons the body will develop." },
            ],
            steps: [
              { reasoning: "A thesis must take a position, not just name the topic or announce the essay.", marks: 1, markCode: "M" },
              { reasoning: "Only (c) states a position with supporting reasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** School uniforms are beneficial because they reduce distraction and create equality.",
            commonErrors: ["Writing a topic announcement ('This essay will discuss...') instead of a position."],
          },
        },
        {
          id: "langb-u2-q40",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should each body paragraph of a simple essay contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One main point with supporting details" },
              { id: "b", text: "Only a topic sentence" },
              { id: "c", text: "Several unrelated ideas" },
              { id: "d", text: "A new thesis statement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Body paragraphs", statement: "Each body paragraph develops exactly one supporting point with its own topic sentence and details." },
            ],
            steps: [
              { reasoning: "One point per paragraph keeps the essay organised and each paragraph focused.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** One main point with supporting details",
            commonErrors: ["Cramming two supporting points into one paragraph."],
          },
        },
        {
          id: "langb-u2-q41",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should you spend a few minutes planning before writing a timed essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is required to use a dictionary" },
              { id: "b", text: "It avoids checking spelling" },
              { id: "c", text: "It fixes the thesis and structure, preventing repetition and drifting off-task" },
              { id: "d", text: "It makes the essay longer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Planning secures thesis and point-per-paragraph structure before time pressure begins." },
            ],
            steps: [
              { reasoning: "Under time pressure, unplanned essays repeat ideas and lose organisation.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It fixes the thesis and structure, preventing repetition and drifting off-task",
            commonErrors: ["Seeing planning as lost writing time rather than an investment."],
          },
        },
        {
          id: "langb-u2-q42",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Name the three main parts of a simple essay and state the job of the introduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Essay structure", statement: "Introduction presents thesis; body develops points; conclusion restates and closes." },
            ],
            steps: [
              { reasoning: "Introduction: engages the reader and states the thesis statement.", marks: 1, markCode: "M" },
              { reasoning: "Body: one paragraph per supporting point with topic sentences and details.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: restates the main idea in new words and adds a closing thought.", marks: 1, markCode: "M" },
              { reasoning: "All three parts are named and each job is stated accurately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Introduction (hook + thesis), body (supporting points), conclusion (restatement + close).",
            commonErrors: ["Listing the parts but not stating the introduction's specific job."],
          },
        },
        {
          id: "langb-u2-q43",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between an essay's topic and its thesis statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic vs thesis", statement: "The topic is the general subject; the thesis is the specific position argued about it." },
            ],
            steps: [
              { reasoning: "The topic is the broad subject area, e.g. 'school meals'.", marks: 1, markCode: "M" },
              { reasoning: "The thesis takes a stance on that topic, e.g. 'school meals should be free for all students'.", marks: 1, markCode: "M" },
              { reasoning: "The thesis must be arguable and specific enough to organise the whole essay.", marks: 1, markCode: "R" },
              { reasoning: "Clear contrast between the two concepts demonstrated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Topic = general subject; thesis = specific arguable position on that subject that controls the essay.",
            commonErrors: ["Treating the topic and thesis as the same thing."],
          },
        },
        {
          id: "langb-u2-q44",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student must write a 180-word essay. Suggest a sensible word budget for the introduction, body and conclusion, and justify it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word budget", statement: "Intro ~15%, body ~70%, conclusion ~15% of total words for a short essay." },
            ],
            steps: [
              { reasoning: "Introduction around 25-30 words (about 15%).", marks: 1, markCode: "M" },
              { reasoning: "Body paragraphs around 50-60 words each, roughly 120-125 words total (about 70%).", marks: 1, markCode: "M" },
              { reasoning: "Conclusion around 25-30 words (about 15%).", marks: 1, markCode: "A" },
              { reasoning: "Justification: the body carries the argument so it needs the largest share; intro and conclusion frame it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intro ~25-30 words, body ~120-125 words, conclusion ~25-30 words — body largest because it develops the argument.",
            commonErrors: ["Giving the introduction or conclusion more space than the body."],
          },
        },
        {
          id: "langb-u2-q45",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a conclusion should relate to the introduction without simply repeating it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conclusion technique", statement: "The conclusion mirrors the introduction's thesis in fresh wording and may add a final thought." },
            ],
            steps: [
              { reasoning: "The conclusion restates the thesis in different words, not copied sentences.", marks: 1, markCode: "M" },
              { reasoning: "It may add a final thought, feeling or wider implication about the topic.", marks: 1, markCode: "M" },
              { reasoning: "Verbatim repetition looks mechanical and wastes the chance to leave an impression.", marks: 1, markCode: "R" },
              { reasoning: "The structure mirrors the introduction while the wording stays fresh.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Restate the thesis in new words, mirror the introduction's structure, and add a closing thought — never copy it.",
            commonErrors: ["Copying the introduction sentence-for-sentence into the conclusion."],
          },
        },
        {
          id: "langb-u2-q46",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan a short essay on 'The most useful subject at school'.",
          parts: [
            { label: "a", prompt: "Write a thesis statement.", marks: 2 },
            { label: "b", prompt: "List two supporting points, one per body paragraph.", marks: 2 },
            { label: "c", prompt: "Explain what your introduction and conclusion will each do.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay planning", statement: "Thesis + one point per paragraph + intro/conclusion roles planned in advance." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis states a clear position, e.g. 'Mathematics is the most useful subject because it builds problem-solving skills and opens many careers.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Thesis names a specific subject and justifies the choice rather than staying generic.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two distinct supporting points that match the thesis, e.g. everyday life skills and career opportunities.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each point can sustain its own body paragraph.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Introduction hooks the reader and ends with the thesis statement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion restates the thesis in new words and adds a closing thought.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No new arguments are planned for the conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear positional thesis naming a subject. (b) Two distinct points. (c) Intro hooks + thesis; conclusion restates + closes, no new ideas.",
            commonErrors: ["Thesis that lists subjects without arguing why one is most useful."],
          },
        },
        {
          id: "langb-u2-q47",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Where in an essay does the thesis statement usually appear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As the first word of the title" },
              { id: "b", text: "In a footnote" },
              { id: "c", text: "As the last sentence of the introduction" },
              { id: "d", text: "In the middle of a body paragraph" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis placement", statement: "The thesis statement typically closes the introduction so the body can develop it." },
            ],
            steps: [
              { reasoning: "Placing the thesis at the end of the introduction lets the hook come first and hands control to the body.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** As the last sentence of the introduction",
            commonErrors: ["Burying the thesis inside a body paragraph where it cannot control the essay."],
          },
        },
        {
          id: "langb-u2-q48",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write the introduction (about 40-50 words) for a short essay titled 'Why travelling teaches you about people'.",
          parts: [
            { label: "a", prompt: "Write a hook sentence that engages the reader.", marks: 2 },
            { label: "b", prompt: "Write one or two sentences giving context for the essay.", marks: 2 },
            { label: "c", prompt: "Write a clear thesis statement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Introduction writing", statement: "Hook + context + thesis = effective introduction within the word budget." },
            ],
            steps: [
              { part: "a", reasoning: "An engaging opener such as a question or striking statement about travel and people.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The hook is relevant to the essay's topic, not a generic greeting.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Context sentences narrow the topic and prepare the reader for the argument.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sentences are complete and clear, not lists of facts.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Thesis states a position linking travel and understanding people, e.g. 'Travelling teaches us about people because every journey reveals how differently others live and think.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The thesis previews what the body paragraphs will argue.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The thesis is grammatically complete and within the introduction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Engaging relevant hook. (b) 1-2 context sentences. (c) Clear positional thesis linking travel to understanding people.",
            commonErrors: ["Hook that is interesting but unrelated to the essay's argument."],
          },
        },
      ],
    },
  ],
};
