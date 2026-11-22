import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ciege-u4-lesson-4-1",
  code: "4-1",
  title: "Structuring Arguments",
  goal: "I CAN plan and structure an argumentative essay.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: argument"],
  vocabulary: [
    { term: "Argument", definition: "Writing that presents a viewpoint with reasons." },
    { term: "Thesis", definition: "The main argument or position." },
    { term: "Paragraph", definition: "A group of sentences developing one idea." },
    { term: "Evidence", definition: "Facts or examples supporting a point." },
    { term: "Conclusion", definition: "The final paragraph summarising and reinforcing the argument." },
  ],
  concepts: [
    {
      id: "ciege-u4-s1-structure",
      title: "Essay structure",
      skill: "Organise an argument into introduction, body and conclusion.",
      lesson: {
        sections: [
          {
            heading: "The three parts",
            body: "Introduction: state your thesis clearly. Body: one paragraph per reason, each with evidence. Conclusion: restate the thesis and summarise why it matters.",
          },
          {
            heading: "Topic sentences",
            body: "Each paragraph should start with a topic sentence stating the point. Then give reasons and evidence. End with a linking sentence.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan an argument for 'School uniforms should be compulsory'.",
          solution: "Intro: uniforms create equality. Body 1: reduces peer pressure. Body 2: saves money. Body 3: builds school identity. Conclusion: benefits outweigh costs.",
        },
      },
      questions: [
        {
          id: "ciege-u4-s1-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a thesis statement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fact" },
            { id: "b", text: "A title" },
            { id: "c", text: "The conclusion" },
            { id: "d", text: "The main argument" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Thesis", statement: "Main position." }],
            steps: [
              { reasoning: "The thesis is the main argument.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Main argument",
          },
        },
        {
          id: "ciege-u4-s1-arg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a thesis statement for the topic 'Homework should be banned'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Thesis", statement: "Clear position." }],
            steps: [
              { reasoning: "The statement takes a clear position.", marks: 1, markCode: "AO2" },
              { reasoning: "It is a complete sentence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One thesis statement",
          },
        },
        {
          id: "ciege-u4-s1-arg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a topic sentence for a paragraph arguing that exercise improves concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Topic sentence", statement: "States paragraph point." }],
            steps: [
              { reasoning: "The sentence states the point about exercise and concentration.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be developed with reasons.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One topic sentence",
          },
        },
        {
          id: "ciege-u4-s1-arg-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Outline a three-paragraph argument for 'Pets should be allowed in school'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Argument planning", statement: "Three supporting points." }],
            steps: [
              { reasoning: "Three distinct supporting reasons.", marks: 1, markCode: "AO2" },
              { reasoning: "Each could be a paragraph.", marks: 1, markCode: "AO2" },
              { reasoning: "Points are relevant and logical.", marks: 1, markCode: "AO2" },
              { reasoning: "Would have intro and conclusion.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-point outline",
          },
        },
        {
          id: "ciege-u4-s1-arg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an argumentative essay, which part should contain the thesis statement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The title" },
            { id: "b", text: "The introduction" },
            { id: "c", text: "A body paragraph" },
            { id: "d", text: "The conclusion" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Thesis placement", statement: "Thesis opens the essay." }],
            steps: [
              { reasoning: "The thesis is stated in the introduction.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** The introduction",
          },
        },
        {
          id: "ciege-u4-s1-arg-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a thesis statement for 'Secondary school students should study a foreign language'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Thesis", statement: "Clear position on the topic." }],
            steps: [
              { reasoning: "The statement takes a clear position.", marks: 1, markCode: "AO2" },
              { reasoning: "It is a complete, punctuated sentence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One thesis statement",
          },
        },
        {
          id: "ciege-u4-s1-arg-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a topic sentence for a paragraph arguing that music helps students relax.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Topic sentence", statement: "States the paragraph's point." }],
            steps: [
              { reasoning: "The sentence states the point about music and relaxation.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be developed with reasons and evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One topic sentence",
          },
        },
        {
          id: "ciege-u4-s1-arg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the correct order of sections in an argumentative essay?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Conclusion, body, introduction" },
            { id: "b", text: "Introduction, conclusion, body" },
            { id: "c", text: "Body, introduction, conclusion" },
            { id: "d", text: "Introduction, body, conclusion" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Essay structure", statement: "Intro → body → conclusion." }],
            steps: [
              { reasoning: "The essay opens with the thesis, develops reasons, then concludes.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Introduction, body, conclusion",
          },
        },
        {
          id: "ciege-u4-s1-arg-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a linking sentence that connects a paragraph about cost to a paragraph about quality.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Linking sentence", statement: "Connects ideas between paragraphs." }],
            steps: [
              { reasoning: "The sentence links the two ideas logically.", marks: 1, markCode: "AO2" },
              { reasoning: "It could use a connective such as 'furthermore' or 'however'.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One linking sentence",
          },
        },
        {
          id: "ciege-u4-s1-arg-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write three topic sentences for an argument that 'Reading makes you smarter' — one each for vocabulary, imagination and knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Topic sentences", statement: "One point per paragraph." }],
            steps: [
              { reasoning: "Three distinct, relevant points are covered.", marks: 1, markCode: "AO2" },
              { reasoning: "Each could begin its own paragraph.", marks: 1, markCode: "AO2" },
              { reasoning: "Sentences are complete and punctuated.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three topic sentences",
          },
        },
        {
          id: "ciege-u4-s1-arg-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write an introduction (2-3 sentences) for an essay arguing that 'Students should be allowed to use phones in class'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Essay introduction", statement: "Hook + thesis." }],
            steps: [
              { reasoning: "The introduction engages the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "It states a clear thesis/position.", marks: 1, markCode: "AO2" },
              { reasoning: "It introduces the main line of argument.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Essay introduction",
          },
        },
        {
          id: "ciege-u4-s1-arg-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan an argumentative essay for 'Social media does more harm than good to teenagers' — write the thesis, three paragraph topic sentences, and a conclusion sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Essay planning", statement: "Complete argument structure." }],
            steps: [
              { reasoning: "A clear thesis is stated.", marks: 1, markCode: "AO2" },
              { reasoning: "Three distinct supporting points are given.", marks: 1, markCode: "AO2" },
              { reasoning: "Each point could form a paragraph.", marks: 1, markCode: "AO2" },
              { reasoning: "A conclusion sentence restates or reinforces the thesis.", marks: 1, markCode: "AO2" },
              { reasoning: "Points are relevant, logical and well punctuated.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Thesis + 3 points + conclusion",
          },
        },
        {
          id: "ciege-u4-s1-arg-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the strongest topic sentence for an argument about homework?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Homework is a topic that schools often debate." },
            { id: "b", text: "Some people think homework is useful but others do not." },
            { id: "c", text: "Homework should be banned because it causes stress and leaves students no time to rest." },
            { id: "d", text: "There are many reasons why homework is bad." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Topic sentence", statement: "Specific point, not vague." }],
            steps: [
              { reasoning: "Option b states a clear, specific argument with reasons.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Homework should be banned because it causes stress and leaves students no time to rest.",
          },
        },
        {
          id: "ciege-u4-s1-arg-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a conclusion (2-3 sentences) for an argument that 'Zoos should be replaced by wildlife sanctuaries'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion", statement: "Restate + reinforce." }],
            steps: [
              { reasoning: "The conclusion restates the main position.", marks: 1, markCode: "AO2" },
              { reasoning: "It summarises the key reasons briefly.", marks: 1, markCode: "AO2" },
              { reasoning: "It ends with a strong or memorable point.", marks: 1, markCode: "AO2" },
              { reasoning: "It does not introduce new arguments.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Concluding paragraph",
          },
        },
        {
          id: "ciege-u4-s1-arg-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a topic sentence plus two supporting reasons for the argument that 'School should start later in the morning'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Argument development", statement: "Point + reasons." }],
            steps: [
              { reasoning: "A clear topic sentence states the point.", marks: 1, markCode: "AO2" },
              { reasoning: "First reason is relevant and logical.", marks: 1, markCode: "AO2" },
              { reasoning: "Second reason is distinct from the first.", marks: 1, markCode: "AO2" },
              { reasoning: "Reasons could be supported by evidence or examples.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Topic sentence + two reasons",
          },
        },
        {
          id: "ciege-u4-s1-arg-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write an introduction and conclusion (2-3 sentences each) for an argumentative essay on 'The internet has made teenagers less sociable'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full essay frame", statement: "Intro thesis + conclusion." }],
            steps: [
              { reasoning: "The introduction hooks the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "The introduction states a clear thesis.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion restates the thesis.", marks: 1, markCode: "AO2" },
              { reasoning: "The conclusion weighs the argument and reinforces the position.", marks: 1, markCode: "AO2" },
              { reasoning: "No new points are introduced in the conclusion.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate throughout.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
                        ],
            finalAnswer: "Introduction + conclusion",
          },
        },
      ],
    },
    {
      id: "ciege-u4-s1-techniques",
      title: "Persuasive techniques",
      skill: "Use rhetorical devices to strengthen arguments.",
      lesson: {
        sections: [
          {
            heading: "Rhetorical devices",
            body: "Rule of three ('safe, simple, and strong'), rhetorical questions ('Do we really want...?'), emotive language, and direct address ('We must...') all persuade.",
          },
          {
            heading: "Counter-arguments",
            body: "Strong arguments acknowledge opposing views then refute them: 'Some may argue X, but the evidence shows Y.' This makes your case seem balanced and confident.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a sentence using the rule of three.",
          solution: "'We need schools that are safe, fair, and inspiring.'",
        },
      },
      questions: [
        {
          id: "ciege-u4-s1-te-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'rule of three' in persuasive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Listing three items for effect" },
            { id: "b", text: "Three arguments" },
            { id: "c", text: "Three sentences" },
            { id: "d", text: "Three paragraphs" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rule of three", statement: "Three-part list." }],
            steps: [
              { reasoning: "Listing three items creates rhythm and emphasis.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-item list",
          },
        },
        {
          id: "ciege-u4-s1-te-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence using a rhetorical question.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Rhetorical question", statement: "Question not expecting answer." }],
            steps: [
              { reasoning: "The sentence asks a question.", marks: 1, markCode: "AO2" },
              { reasoning: "It persuades rather than seeks information.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One rhetorical question",
          },
        },
        {
          id: "ciege-u4-s1-te-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence acknowledging a counter-argument.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Counter-argument", statement: "Acknowledge opposing view." }],
            steps: [
              { reasoning: "The sentence acknowledges an opposing view.", marks: 1, markCode: "AO2" },
              { reasoning: "It could then refute or balance it.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One counter-argument sentence",
          },
        },
        {
          id: "ciege-u4-s1-te-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences persuading readers to recycle, using different techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive techniques", statement: "Two different devices." }],
            steps: [
              { reasoning: "First sentence uses a technique (rule of three, question, emotive).", marks: 1, markCode: "AO2" },
              { reasoning: "Second uses a different technique.", marks: 1, markCode: "AO2" },
              { reasoning: "Both persuade effectively.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two persuasive sentences",
          },
        },
        {
          id: "ciege-u4-s1-te-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'emotive language' in persuasive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Technical vocabulary" },
            { id: "b", text: "A formal greeting" },
            { id: "c", text: "Language full of facts and figures" },
            { id: "d", text: "Language that describes feelings and provokes emotion" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Emotive language", statement: "Words that provoke feeling." }],
            steps: [
              { reasoning: "Emotive language uses feeling words like 'heartbreaking' or 'wonderful'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** Language that describes feelings and provokes emotion",
          },
        },
        {
          id: "ciege-u4-s1-te-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence using direct address ('you' or 'we') to persuade someone to save water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Direct address", statement: "Speaks to reader directly." }],
            steps: [
              { reasoning: "The sentence uses 'you', 'we' or 'our' to address the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "It persuades the reader to save water.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One direct-address sentence",
          },
        },
        {
          id: "ciege-u4-s1-te-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence using emotive language to persuade people to adopt animals from shelters.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Emotive language", statement: "Feeling words persuade." }],
            steps: [
              { reasoning: "The sentence uses feeling words such as 'loving' or 'abandoned'.", marks: 1, markCode: "AO2" },
              { reasoning: "It persuades readers to adopt.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One emotive sentence",
          },
        },
        {
          id: "ciege-u4-s1-te-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a rhetorical question?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Where is the nearest hospital?" },
            { id: "b", text: "What time does the library close?" },
            { id: "c", text: "How many students are in Year 10?" },
            { id: "d", text: "Do we really want to destroy our oceans?" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhetorical question", statement: "Persuasive, not informational." }],
            steps: [
              { reasoning: "Option b persuades rather than seeking information.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Do we really want to destroy our oceans?",
          },
        },
        {
          id: "ciege-u4-s1-te-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence using the rule of three to persuade readers that a school trip was enjoyable.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Rule of three", statement: "Three-item list." }],
            steps: [
              { reasoning: "The sentence lists three items or ideas.", marks: 1, markCode: "AO2" },
              { reasoning: "The three items are parallel in form.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One rule-of-three sentence",
          },
        },
        {
          id: "ciege-u4-s1-te-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A writer writes: 'Imagine a world without trees — is that the future we want?' Name the technique used and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Technique analysis", statement: "Name + effect." }],
            steps: [
              { reasoning: "The rhetorical question and emotive 'imagine' are identified.", marks: 1, markCode: "AO2" },
              { reasoning: "The technique engages the reader emotionally.", marks: 1, markCode: "AO2" },
              { reasoning: "The explanation is clear.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Rhetorical question + emotive language",
          },
        },
        {
          id: "ciege-u4-s1-te-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences persuading readers to protect bees, each using a different persuasive technique.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive techniques", statement: "Two different devices." }],
            steps: [
              { reasoning: "First sentence uses a clear technique (rule of three, question, emotive, direct address).", marks: 1, markCode: "AO2" },
              { reasoning: "Second sentence uses a different technique.", marks: 1, markCode: "AO2" },
              { reasoning: "Both sentences persuade effectively.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two persuasive sentences",
          },
        },
        {
          id: "ciege-u4-s1-te-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a short persuasive paragraph (4-5 sentences) arguing that 'bottled water should be banned in schools', using at least three different techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Persuasive paragraph", statement: "Multiple techniques, coherent." }],
            steps: [
              { reasoning: "The paragraph argues the position clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "At least three different techniques are used.", marks: 1, markCode: "AO2" },
              { reasoning: "The techniques are used purposefully, not forced.", marks: 1, markCode: "AO2" },
              { reasoning: "The paragraph has a logical flow.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Persuasive paragraph with 3+ techniques",
          },
        },
        {
          id: "ciege-u4-s1-te-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which technique does this sentence use? 'Every day, tonnes of plastic choke our oceans — and our future.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rule of three" },
            { id: "b", text: "Rhetorical question" },
            { id: "c", text: "Direct address" },
            { id: "d", text: "Emotive language" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Emotive language", statement: "Feeling words create impact." }],
            steps: [
              { reasoning: "'Choke' and 'our future' are emotive, feeling words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Emotive language",
          },
        },
        {
          id: "ciege-u4-s1-te-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a short paragraph refuting the counter-argument 'Homework helps students learn' in an essay arguing that homework should be reduced.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Refutation", statement: "Acknowledge then counter." }],
            steps: [
              { reasoning: "The opposing view is acknowledged fairly.", marks: 1, markCode: "AO2" },
              { reasoning: "A counter-argument or evidence is given against it.", marks: 1, markCode: "AO2" },
              { reasoning: "The writer's own position is reinforced.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives such as 'however' or 'although' link the ideas.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Refutation paragraph",
          },
        },
        {
          id: "ciege-u4-s1-te-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence acknowledges a counter-argument?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Uniforms, uniforms, uniforms." },
            { id: "b", text: "While some argue uniforms restrict freedom, they actually promote equality." },
            { id: "c", text: "Uniforms are the best thing ever invented." },
            { id: "d", text: "Everyone knows uniforms are boring." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Counter-argument", statement: "Acknowledge then refute." }],
            steps: [
              { reasoning: "Option b concedes the opposing view before countering it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** While some argue uniforms restrict freedom, they actually promote equality.",
          },
        },
        {
          id: "ciege-u4-s1-te-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the opening paragraph of a persuasive speech arguing that 'students should have a say in school decisions', using direct address and a rhetorical question.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speech opening", statement: "Audience + technique." }],
            steps: [
              { reasoning: "The paragraph addresses the audience directly.", marks: 1, markCode: "AO2" },
              { reasoning: "It includes a rhetorical question.", marks: 1, markCode: "AO2" },
              { reasoning: "It states or previews the main argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It engages and persuades the listeners.", marks: 1, markCode: "AO2" },
              { reasoning: "The tone is appropriate for a speech.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
                        ],
            finalAnswer: "Speech opening paragraph",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u4-s1-arg-notes",
      title: "Structuring arguments — revision notes",
      summary: "Thesis, paragraphs, topic sentences, rhetorical devices.",
      sections: [
        { heading: "Structure", body: "Intro (thesis) → body (one reason per paragraph) → conclusion (restate). Topic sentences state each point." },
        { heading: "Techniques", body: "Rule of three, rhetorical questions, emotive language, counter-arguments. Use them purposefully." },
      ],
    },
  ],
};
