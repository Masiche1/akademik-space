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
            { id: "a", text: "The conclusion" }, { id: "b", text: "The main argument" }, { id: "c", text: "A fact" }, { id: "d", text: "A title" },
          ], correctChoiceId: "b" },
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
            { id: "a", text: "Three paragraphs" }, { id: "b", text: "Listing three items for effect" }, { id: "c", text: "Three arguments" }, { id: "d", text: "Three sentences" },
          ], correctChoiceId: "b" },
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
