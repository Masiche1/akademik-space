import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const DRAFT: TextExtract = {
  title: "A First Draft",
  author: "Written for Akademik Space",
  source: "Student draft",
  text: "Our town needs a new youth centre. At the moment there is nothing for teenagers to do in the evenings and this is a problem. Firstly young people get bored and they hang around the streets which makes some residents feel unsafe. Also a youth centre would give students a place to do homework. Another reason is that it could employ local people. In conclusion we need a youth centre.",
};

const IMPROVED: TextExtract = {
  title: "The Improved Version",
  author: "Written for Akademik Space",
  source: "Student redraft",
  text: "Our town desperately needs a new youth centre. At present, teenagers have nowhere to go in the evenings, and the consequences are plain to see: bored young people gather on street corners, and some residents, understandably, feel uneasy.\n\nMoreover, a youth centre would be more than a refuge from boredom. It would offer a quiet space for homework, a place to learn new skills and, crucially, a source of jobs for local people.\n\nIf we truly value our young people, the question is not whether we can afford a youth centre, but whether we can afford to be without one.",
};

const ACC: TextExtract = {
  title: "Sentences to Correct",
  author: "Written for Akademik Space",
  source: "Practice sentences",
  text: "1. The students was waiting outside the hall, they were nervous.\n2. Its important that everyone bring there coursework on time.\n3. The headteacher who is very experienced said that the plans, would begin in September.\n4. We went to the museum, it was closed.",
};

const LONG = (part: string): MarkLevel[] => [
  { part, level: "Level 5", marks: "13-15", descriptor: "Perceptive, assured; convincing control of structure and cohesion; sophisticated, accurate vocabulary and punctuation." },
  { part, level: "Level 4", marks: "10-12", descriptor: "Thorough and effective; well-organised and cohesive; wide vocabulary; mostly accurate." },
  { part, level: "Level 3", marks: "7-9", descriptor: "Clear communication; appropriately organised; generally accurate with some variety." },
  { part, level: "Level 2", marks: "4-6", descriptor: "Some organisation and accuracy; errors may sometimes impede meaning." },
  { part, level: "Level 1", marks: "1-3", descriptor: "Simple, limited; frequent errors; little organisation." },
];

const SHORT: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, relevant, controlled and mostly accurate writing, with effective paragraphing or correction." },
  { level: "Level 2", marks: "3-4", descriptor: "Some control; some errors or weak organisation remain." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited; frequent errors." },
];

export const lesson23: Lesson = {
  id: "el10-u2-lesson-2-3",
  code: "2-3",
  title: "Organisation and Accuracy",
  goal: "I CAN organise writing into purposeful paragraphs with discourse markers, and use accurate spelling, punctuation and grammar.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO4", "4EA1 AO5"],
  vocabulary: [
    { term: "Discourse marker", definition: "A word or phrase that signals how ideas connect, such as ‘moreover’, ‘however’ or ‘as a result’." },
    { term: "Topic sentence", definition: "The sentence that introduces the main idea of a paragraph." },
    { term: "Cohesion", definition: "The way parts of a text link together so that it flows." },
    { term: "Comma splice", definition: "An error in which two complete sentences are joined only by a comma." },
    { term: "Subject-verb agreement", definition: "Making a verb match its subject in number: ‘the students were’, not ‘the students was’." },
    { term: "Apostrophe", definition: "A punctuation mark showing missing letters (it's) or possession (the student's book)." },
  ],
  concepts: [
    {
      id: "el10-u2-paragraphing-discourse-markers",
      title: "Paragraphing and discourse markers",
      skill: "Organise ideas into clear paragraphs and link them with a range of discourse markers.",
      lesson: {
        sections: [
          {
            heading: "One idea per paragraph",
            body: "Each paragraph should develop **one main idea**, introduced by a topic sentence and supported with detail, evidence or an example. Start a new paragraph for a new idea, a new speaker, a shift in time or a change of focus. In the draft, all ideas are crammed into one block, so the reader cannot see the argument's shape.",
          },
          {
            heading: "Linking with discourse markers",
            body: "Discourse markers guide the reader. To add: **moreover**, **furthermore**. To contrast: **however**, **on the other hand**. To show consequence: **as a result**, **consequently**. To sequence: **initially**, **subsequently**. Vary them: ‘Firstly... Also... Another reason’ repeats and feels mechanical, whereas ‘At present... Moreover... If we truly value...’ feels deliberate.",
          },
          {
            heading: "Beginnings and endings",
            body: "A confident opening states or hints at your purpose; the ending should return to it with force rather than merely repeating ‘In conclusion’. The improved version ends with a balanced, memorable sentence that leaves the reader thinking.",
          },
        ],
        keyFormulas: [
          { name: "TiP", statement: "New paragraph for a change of Time, Place, Person or topic." },
          { name: "Discourse markers", statement: "Add: moreover. Contrast: however. Result: consequently. Sequence: subsequently." },
          { name: "Topic sentence", statement: "Open each paragraph with its main idea." },
        ],
        workedExample: {
          problem: "Improve the connective ‘Also a youth centre would give students a place to do homework’ in the draft.",
          solution: "‘Moreover, a youth centre would offer students a quiet space to do their homework.’ ‘Moreover’ is a more sophisticated additive marker than ‘Also’, the comma after it is correct, and the improved verb phrase ‘offer a quiet space’ is more precise.",
        },
      },
      questions: [
        {
          id: "el10-u2-paragraphing-discourse-markers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "Which discourse marker would best replace ‘Also’ to add a point more formally?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moreover" },
              { id: "b", text: "Therefore" },
              { id: "c", text: "Meanwhile" },
              { id: "d", text: "However" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Additive markers", statement: "Moreover and furthermore add a point." }],
            steps: [{ reasoning: "‘Moreover’ adds a further point formally; ‘however’ contrasts, ‘therefore’ shows result.", evidence: "Also a youth centre would give", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** Moreover.",
            commonErrors: ["Choosing ‘However’, which signals contrast."],
          },
        },
        {
          id: "el10-u2-paragraphing-discourse-markers-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "The draft is written as a single paragraph. Explain where you would divide it into paragraphs and why.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "One idea per paragraph", statement: "A new idea needs a new paragraph." }],
            steps: [
              { reasoning: "Introduction stating the proposal should be separate.", evidence: "Our town needs a new youth centre.", marks: 1, markCode: "AO4" },
              { reasoning: "The reason about safety and boredom forms its own paragraph.", evidence: "hang around the streets", marks: 1, markCode: "AO4" },
              { reasoning: "The other reasons (homework, jobs) and the conclusion are separate ideas that need their own paragraphs.", evidence: "Another reason is that it could employ local people", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Separate the opening claim, the safety reason, the homework and jobs reasons, and the conclusion, because each is a distinct idea.",
            commonErrors: ["Saying ‘make it longer’ rather than dividing by idea."],
          },
        },
        {
          id: "el10-u2-paragraphing-discourse-markers-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DRAFT,
          stem: "Rewrite the draft's second and third reasons as a single well-organised paragraph with a topic sentence and at least two different discourse markers.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Cohesion", statement: "Topic sentence, developed support and varied markers." }],
            steps: [
              { reasoning: "Clear topic sentence.", marks: 2, markCode: "AO4" },
              { reasoning: "At least two different discourse markers used accurately.", evidence: "Moreover", marks: 2, markCode: "AO4" },
              { reasoning: "Improved vocabulary and accurate punctuation.", marks: 2, markCode: "AO5" },
            ],
            levels: SHORT,
            finalAnswer: "A centre would also support learning and the local economy. It would offer a quiet space for homework; moreover, it would create jobs for local people, which would strengthen the whole community.",
            commonErrors: ["Repeating ‘also’.", "No topic sentence."],
          },
        },
        {
          id: "el10-u2-paragraphing-discourse-markers-q4",
          difficulty: "challenge",
          totalMarks: 24,
          extract: DRAFT,
          stem: "Read the first draft and the improved version above (the improved version begins ‘Our town desperately needs...’). Answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two discourse markers used in the improved version.", marks: 2 },
            { label: "b", prompt: "Explain two ways in which the improved version is better organised than the draft.", marks: 4 },
            { label: "c", prompt: "Write a three-paragraph article arguing that your town needs a new library, with a clear opening, developed middle and memorable ending.", marks: 18 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraphing", statement: "One idea per paragraph with a clear topic sentence." },
              { kind: "skill", name: "Discourse markers", statement: "A range of markers shows relationships between ideas." },
            ],
            steps: [
              { part: "a", reasoning: "‘Moreover’ adds a point.", evidence: "Moreover", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "‘At present’ sets the current situation.", evidence: "At present", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Ideas are split into three paragraphs with distinct purposes.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "The conclusion returns to the argument memorably rather than repeating ‘In conclusion’.", evidence: "whether we can afford to be without one", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Clear structure and cohesion.", marks: 6, markCode: "AO4" },
              { part: "c", reasoning: "Developed ideas and purposeful ending.", marks: 6, markCode: "AO4" },
              { part: "c", reasoning: "Vocabulary, sentence variety and punctuation.", marks: 6, markCode: "AO5" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "16-18", descriptor: "Perceptive, assured, with sophisticated structure, vocabulary and accuracy." },
              { part: "c", level: "Level 4", marks: "13-15", descriptor: "Thorough and effective structure and expression; mostly accurate." },
              { part: "c", level: "Level 3", marks: "9-12", descriptor: "Clear and generally accurate; appropriately organised." },
              { part: "c", level: "Level 2", marks: "5-8", descriptor: "Some organisation; errors sometimes impede meaning." },
              { part: "c", level: "Level 1", marks: "1-4", descriptor: "Simple, limited; frequent errors." },
            ],
            finalAnswer: "(a) ‘Moreover’; ‘At present’. (b) The improved version separates its ideas into three paragraphs and ends with a balanced, memorable sentence. (c) A three-paragraph article that opens with a claim, develops reasons with markers and ends with a striking final line.",
            commonErrors: ["No paragraph breaks.", "Using ‘Firstly... Also... In conclusion’ mechanically."],
          },
        },
      ],
    },
    {
      id: "el10-u2-ao5-accuracy",
      title: "AO5 accuracy",
      skill: "Use accurate spelling, punctuation and grammar, avoiding comma splices, agreement errors and misplaced apostrophes.",
      lesson: {
        sections: [
          {
            heading: "What AO5 rewards",
            body: "**AO5** rewards a range of vocabulary and sentence structures, and accurate spelling, punctuation and grammar. Errors that impede meaning cost most. Common culprits are comma splices, subject-verb disagreement, apostrophe misuse and confused homophones (their, there, they're).",
          },
          {
            heading: "Fixing common errors",
            body: "A **comma splice** joins two sentences with only a comma: ‘We went to the museum, it was closed.’ Fix it with a full stop, a semicolon, or a conjunction: ‘We went to the museum, but it was closed.’ **Agreement**: ‘The students were waiting’. **Apostrophes**: ‘it's’ means ‘it is’; ‘its’ shows possession. **Homophones**: ‘their’ (belonging), ‘there’ (place), ‘they're’ (they are).",
          },
          {
            heading: "Showing range",
            body: "Vary sentence length and structure: simple, compound and complex sentences; a short sentence for impact; a subordinate clause for detail. Use precise vocabulary rather than vague words such as ‘nice’ or ‘bad’, but only words you can spell and use securely.",
          },
        ],
        keyFormulas: [
          { name: "Comma splice fix", statement: "Use a full stop, semicolon or coordinating conjunction, not a comma alone." },
          { name: "Its and it's", statement: "It's = it is or it has; its = belonging to it." },
          { name: "Agreement", statement: "The verb matches its subject: the students were; the headteacher was." },
          { name: "Commas around extra information", statement: "Use a pair of commas around non-essential information." },
        ],
        workedExample: {
          problem: "Correct: ‘We went to the museum, it was closed.’",
          solution: "‘We went to the museum, but it was closed.’ The coordinating conjunction ‘but’ joins the two clauses correctly and shows the contrast. A semicolon or full stop would also be accurate.",
        },
      },
      questions: [
        {
          id: "el10-u2-ao5-accuracy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its' important that everyone arrives on time." },
              { id: "b", text: "It's important that everyone arrives on time." },
              { id: "c", text: "Is important that everyone arrives on time." },
              { id: "d", text: "Its important that everyone arrives on time." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Apostrophe of omission", statement: "It's = it is." }],
            steps: [{ reasoning: "The sentence needs ‘it is’, so the apostrophe is required.", evidence: "It's important", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(b)** It's important...",
            commonErrors: ["Choosing ‘Its’ without the apostrophe.", "Writing ‘Its'’."],
          },
        },
        {
          id: "el10-u2-ao5-accuracy-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: ACC,
          stem: "Correct sentence 1: ‘The students was waiting outside the hall, they were nervous.’",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Agreement and comma splice", statement: "Plural subject needs ‘were’; two sentences need more than a comma." }],
            steps: [
              { reasoning: "Corrects ‘was’ to ‘were’.", evidence: "The students were waiting", marks: 1, markCode: "AO5" },
              { reasoning: "Corrects the comma splice with a full stop, semicolon or conjunction.", evidence: "outside the hall; they were nervous", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "The students were waiting outside the hall; they were nervous.",
            commonErrors: ["Fixing agreement but leaving the comma splice."],
          },
        },
        {
          id: "el10-u2-ao5-accuracy-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ACC,
          stem: "Correct sentences 2, 3 and 4 and explain each correction briefly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Proofreading", statement: "Identify the error type and correct it precisely." }],
            steps: [
              { reasoning: "Sentence 2: ‘It's important that everyone bring their coursework on time’: apostrophe and homophone corrected.", evidence: "It's important", marks: 2, markCode: "AO5" },
              { reasoning: "Sentence 3: ‘The headteacher, who is very experienced, said that the plans would begin in September’: commas around extra information; the unnecessary comma removed.", evidence: "The headteacher, who is very experienced", marks: 2, markCode: "AO5" },
              { reasoning: "Sentence 4: ‘We went to the museum, but it was closed.’: comma splice corrected.", evidence: "but it was closed", marks: 2, markCode: "AO5" },
            ],
            levels: SHORT,
            finalAnswer: "2. It's important that everyone bring their coursework on time. 3. The headteacher, who is very experienced, said that the plans would begin in September. 4. We went to the museum, but it was closed.",
            commonErrors: ["Correcting one error and missing the other in sentences 2 and 3."],
          },
        },
        {
          id: "el10-u2-ao5-accuracy-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: ACC,
          stem: "Use the practice sentences to answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Name the error in sentence 4 and correct it.", marks: 2 },
            { label: "b", prompt: "Write three sentences about your journey to school, each using a different sentence type: simple, compound and complex. Label them.", marks: 3 },
            { label: "c", prompt: "Write a short piece of around 250 words describing a busy school corridor at lunchtime, showing a range of sentence structures, ambitious vocabulary and accurate punctuation.", marks: 20 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence types", statement: "Simple: one clause. Compound: two main clauses. Complex: a main clause with a subordinate clause." },
              { kind: "skill", name: "AO5", statement: "Accuracy together with range of vocabulary and structures." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies a comma splice.", evidence: "We went to the museum, it was closed.", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "Corrects it, for example with ‘but’ or a semicolon.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "A correct simple sentence.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "A correct compound sentence.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "A correct complex sentence.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Range and control of sentence structures.", marks: 7, markCode: "AO5" },
              { part: "c", reasoning: "Ambitious, accurate vocabulary and spelling.", marks: 7, markCode: "AO5" },
              { part: "c", reasoning: "Accurate punctuation and a sense of purpose and organisation.", marks: 6, markCode: "AO4" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "17-20", descriptor: "Perceptive, assured; wide, ambitious vocabulary; varied structures; almost entirely accurate." },
              { part: "c", level: "Level 4", marks: "13-16", descriptor: "Thorough and effective; wide vocabulary; mostly accurate." },
              { part: "c", level: "Level 3", marks: "9-12", descriptor: "Clear; generally accurate; some variety." },
              { part: "c", level: "Level 2", marks: "5-8", descriptor: "Some accuracy and range; errors sometimes impede meaning." },
              { part: "c", level: "Level 1", marks: "1-4", descriptor: "Simple, limited; frequent errors." },
            ],
            finalAnswer: "(a) Comma splice: ‘We went to the museum, but it was closed.’ (b) For example: simple, ‘I walk to school.’; compound, ‘I walk to school, and my friend meets me at the gate.’; complex, ‘Although it was raining, I walked to school.’ (c) A controlled, vividly worded description with varied sentences.",
            commonErrors: ["Ambitious words used incorrectly.", "Sentences that are all the same length."],
            examinerNote: "Reward accuracy with ambition. A secure simple word outweighs an insecure ornate word.",
          },
        },
      ],
    },
  ],
};
