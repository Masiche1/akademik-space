import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const ARGUE: TextExtract = {
  title: "Homework Should Be Optional",
  author: "Written for Akademik Space",
  source: "Student model: article",
  text: "Every evening, millions of students sit at kitchen tables, not learning but surviving. We are told homework builds discipline. Yet what discipline can there be in copying answers at eleven o'clock at night, too tired to think?\n\nConsider the evidence. Studies of schools across Europe suggest that heavy homework loads bring little extra benefit, but plenty of extra stress. Teachers know this. Parents know this. Students certainly know this.\n\nOf course, some argue that without homework students will simply switch on a screen. That is a fair worry. But the answer is to make homework worth doing, not to make it compulsory. Offer meaningful projects, and students will choose them.\n\nIt is time for schools to trust us. Give us the choice, and we will show you what we can do.",
};

const ADVISE: TextExtract = {
  title: "Getting the Most from Revision",
  author: "Written for Akademik Space",
  source: "Student model: leaflet",
  text: "Revising well is a skill, and like any skill it can be learned. Here are four simple steps.\n\n1. Plan your time. Divide the weeks before your exams into short sessions of thirty to forty minutes, and mark them on a calendar.\n\n2. Test yourself. Reading notes feels productive, but writing answers from memory is far more effective.\n\n3. Take proper breaks. A ten-minute walk will refresh you more than scrolling on a phone.\n\n4. Look after yourself. Sleep, water and regular meals help your memory work at its best.\n\nRemember: you do not need to revise perfectly, only consistently.",
};

const ARG_LEVELS: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, convincing argument with developed reasons, evidence and effective persuasive devices." },
  { level: "Level 2", marks: "3-4", descriptor: "Some argument with some support; persuasive devices occasionally used." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited points with little development." },
];

const LONG = (part: string): MarkLevel[] => [
  { part, level: "Level 5", marks: "13-15", descriptor: "Perceptive, convincing and sustained; assured control of purpose, audience and form; sophisticated devices." },
  { part, level: "Level 4", marks: "10-12", descriptor: "Thorough and effective; consistently appropriate to purpose and audience; well-chosen devices." },
  { part, level: "Level 3", marks: "7-9", descriptor: "Clear communication, generally appropriate to purpose and audience; some effective devices." },
  { part, level: "Level 2", marks: "4-6", descriptor: "Some communication; purpose and audience partly addressed; simple devices." },
  { part, level: "Level 1", marks: "1-3", descriptor: "Simple, limited; little sense of purpose or audience." },
];

export const lesson22: Lesson = {
  id: "el10-u2-lesson-2-2",
  code: "2-2",
  title: "Writing to Argue, Persuade, Advise and Inform",
  goal: "I CAN write persuasive and argumentative texts using rhetorical devices, and write clear advice and information.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO4"],
  vocabulary: [
    { term: "Argue", definition: "Present a reasoned case on a debatable issue, usually with counter-argument." },
    { term: "Persuade", definition: "Convince the reader to think, feel or act in a particular way." },
    { term: "Rhetorical question", definition: "A question asked for effect that does not expect an answer." },
    { term: "Counter-argument", definition: "An opposing view that the writer acknowledges and then answers." },
    { term: "Imperative", definition: "A command verb that tells the reader what to do, such as ‘Plan’ or ‘Test’." },
    { term: "Direct address", definition: "Speaking to the reader using ‘you’ or ‘we’." },
  ],
  concepts: [
    {
      id: "el10-u2-argue-persuade",
      title: "Writing to argue and persuade",
      skill: "Build a reasoned, persuasive case using a clear stance, evidence, counter-argument and rhetorical devices.",
      lesson: {
        sections: [
          {
            heading: "Stance and structure",
            body: "Decide your stance and keep to it. A strong argument has an engaging **opening** that states or hints at your view, **developed paragraphs** each with a reason and evidence, a **counter-argument** that you answer, and a **memorable ending**. In the model, the writer opens with an arresting image, ‘not learning but surviving’, and ends with a direct appeal.",
          },
          {
            heading: "Persuasive devices",
            body: "Use devices purposefully: **rhetorical questions** (‘what discipline can there be...?’), **triples** (‘Teachers know this. Parents know this. Students certainly know this.’), **direct address**, **emotive language**, **statistics** and **short sentences for emphasis**. One well-explained device is stronger than five scattered ones.",
          },
          {
            heading: "Counter-argument",
            body: "Acknowledging the other side makes you sound fair and your case stronger. Use phrases such as ‘Of course, some argue...’ and ‘That is a fair worry. But...’, then rebut with a reason. The model does exactly this in its third paragraph.",
          },
        ],
        keyFormulas: [
          { name: "Stance", statement: "Take a clear position and hold it throughout." },
          { name: "Devices", statement: "Rhetorical question, triple, direct address, emotive language, statistics, short sentence." },
          { name: "Counter-argument", statement: "Acknowledge the opposing view, then answer it with a reason." },
          { name: "Ending", statement: "Finish with a call to action or a memorable final image." },
        ],
        workedExample: {
          problem: "Identify and explain two persuasive techniques in the final paragraph of ‘Homework Should Be Optional’.",
          solution: "The direct address ‘Give us the choice’ speaks straight to teachers and the school, making the demand personal and urgent. The confident closing line, ‘we will show you what we can do’, uses the pronoun ‘we’ to unite students and ends on a positive promise, leaving the reader with an image of trust rewarded.",
        },
      },
      questions: [
        {
          id: "el10-u2-argue-persuade-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUE,
          stem: "‘Teachers know this. Parents know this. Students certainly know this.’ Which technique is used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetition in a triple" },
              { id: "b", text: "Personification" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "A simile" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Triple", statement: "Three parallel items create rhythm and emphasis." }],
            steps: [{ reasoning: "The repeated sentence pattern appears three times, building emphasis.", evidence: "Teachers know this. Parents know this.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Repetition in a triple.",
            commonErrors: ["Choosing a simile because no ‘like’ or ‘as’ appears.", "Choosing personification, as nothing is given human traits."],
          },
        },
        {
          id: "el10-u2-argue-persuade-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUE,
          stem: "Explain how the writer uses counter-argument in the third paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Counter-argument", statement: "Acknowledge an opposing view, then rebut." }],
            steps: [
              { reasoning: "The writer acknowledges the opposing view fairly.", evidence: "That is a fair worry", marks: 1, markCode: "AO4" },
              { reasoning: "The conjunction ‘But’ turns to the rebuttal.", evidence: "But the answer is to make homework worth doing", marks: 1, markCode: "AO4" },
              { reasoning: "The effect is that the writer sounds reasonable, strengthening the argument.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The writer concedes ‘a fair worry’ and then rebuts it with ‘But’, which makes the argument seem balanced and more convincing.",
            commonErrors: ["Describing the paragraph without identifying the technique.", "No effect."],
          },
        },
        {
          id: "el10-u2-argue-persuade-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write two paragraphs of a speech to your school arguing that mobile phones should be allowed in lessons for research. Use at least two persuasive devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech", statement: "Direct address and rhetorical devices for a live audience." },
              { kind: "technique", name: "Counter-argument", statement: "Acknowledge and rebut an opposing view." },
            ],
            steps: [
              { reasoning: "Clear stance with developed reasons.", marks: 2, markCode: "AO4" },
              { reasoning: "At least two persuasive devices used with purpose.", marks: 2, markCode: "AO4" },
              { reasoning: "Audience-aware tone and accurate writing.", marks: 1, markCode: "AO4" },
              { reasoning: "Technical accuracy.", marks: 1, markCode: "AO5" },
            ],
            levels: ARG_LEVELS,
            finalAnswer: "A speech with a clear stance (phones as research tools), developed reasons, devices such as a triple and a rhetorical question, and a counter-argument answered.",
            commonErrors: ["Only listing reasons with no devices.", "No stance."],
          },
        },
        {
          id: "el10-u2-argue-persuade-q4",
          difficulty: "challenge",
          totalMarks: 22,
          extract: ARGUE,
          stem: "Read ‘Homework Should Be Optional’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two reasons the writer offers against compulsory homework.", marks: 2 },
            { label: "b", prompt: "Explain how the writer's opening paragraph engages the reader.", marks: 5 },
            { label: "c", prompt: "Write an article for a school magazine arguing that school days should start later. Aim for around 350 words.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Opening hook", statement: "A vivid image or question engages the reader." },
              { kind: "convention", name: "Article", statement: "Headline, structured paragraphs, direct address, strong ending." },
            ],
            steps: [
              { part: "a", reasoning: "Students are too tired late at night to think.", evidence: "too tired to think", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Heavy loads bring little benefit but extra stress.", evidence: "little extra benefit, but plenty of extra stress", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Vivid scene of students at kitchen tables.", evidence: "kitchen tables", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Contrast ‘not learning but surviving’ is emotive.", evidence: "not learning but surviving", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Rhetorical question challenges the reader.", evidence: "what discipline can there be", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Clear stance, structure and headline.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Developed reasons with evidence and counter-argument.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Persuasive devices, tone and ending.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Accuracy of spelling, punctuation and grammar.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { part: "b", level: "Level 3", marks: "4-5", descriptor: "Clear, developed explanation of how the opening engages, with well-chosen evidence." },
              { part: "b", level: "Level 2", marks: "2-3", descriptor: "Some relevant explanation." },
              { part: "b", level: "Level 1", marks: "1", descriptor: "Simple, limited comment." },
              ...LONG("c"),
            ],
            finalAnswer: "(a) Students are too tired; heavy loads add stress with little benefit. (b) The kitchen-table image, the contrast ‘not learning but surviving’ and the rhetorical question hook the reader. (c) A headlined article arguing for later starts with reasons, evidence, counter-argument and a strong ending.",
            commonErrors: ["No counter-argument.", "A list of reasons with no development.", "A weak ending."],
          },
        },
      ],
    },
    {
      id: "el10-u2-advise-inform",
      title: "Writing to advise and inform",
      skill: "Give clear, organised advice and information in a helpful, reader-friendly tone.",
      lesson: {
        sections: [
          {
            heading: "Purpose and tone",
            body: "To **advise**, you guide the reader towards a good decision, using a supportive tone, imperatives (‘Plan’, ‘Test’, ‘Take’) and modal verbs (‘should’, ‘could’). To **inform**, you give accurate, clearly organised information in a balanced tone. Both purposes need clarity first and decoration second.",
          },
          {
            heading: "Organising information",
            body: "Use a clear title, an introduction stating the purpose, and logical sections or numbered steps. In the model leaflet, the numbered list and topic-first sentences (‘Test yourself’) help readers scan. Support each tip with a brief reason: ‘writing answers from memory is far more effective’.",
          },
          {
            heading: "Reader-friendly style",
            body: "Use direct address, short paragraphs and simple, precise vocabulary. A reassuring final line, such as ‘you do not need to revise perfectly, only consistently’, leaves the reader encouraged. Avoid pomposity and avoid overloading with information.",
          },
        ],
        keyFormulas: [
          { name: "Advice features", statement: "Imperatives, modal verbs (should, could), direct address, supportive tone." },
          { name: "Information features", statement: "Clear headings, facts, logical order, neutral tone." },
          { name: "Tip plus reason", statement: "Give the advice, then explain why it works." },
        ],
        workedExample: {
          problem: "Rewrite ‘Do some revision’ as helpful advice for Year 10 students.",
          solution: "‘Start your revision early and plan short sessions of thirty to forty minutes, so that your memory has time to absorb each topic.’ The imperative gives direction, the specific detail makes it useful and the reason explains why it works.",
        },
      },
      questions: [
        {
          id: "el10-u2-advise-inform-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ADVISE,
          stem: "Which feature of the leaflet makes it easy to scan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A long single paragraph" },
              { id: "b", text: "Numbered steps with clear topic sentences" },
              { id: "c", text: "Extended metaphors" },
              { id: "d", text: "Rhetorical questions in every sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Leaflet", statement: "Numbered steps and topic sentences support quick reading." }],
            steps: [{ reasoning: "Four numbered steps with short openings let the reader find advice quickly.", evidence: "Plan your time.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** Numbered steps with clear topic sentences.",
            commonErrors: ["Choosing a rhetorical device that is not present in the leaflet."],
          },
        },
        {
          id: "el10-u2-advise-inform-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ADVISE,
          stem: "Explain how the writer makes the advice about testing yourself convincing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tip plus reason", statement: "Advice backed by a reason is persuasive." }],
            steps: [
              { reasoning: "Uses an imperative to give clear direction.", evidence: "Test yourself.", marks: 1, markCode: "AO4" },
              { reasoning: "Contrasts reading notes with active recall, acknowledging a common habit.", evidence: "Reading notes feels productive", marks: 1, markCode: "AO4" },
              { reasoning: "States a reason that makes the advice convincing.", evidence: "far more effective", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The imperative ‘Test yourself’ is clear, the writer admits that reading notes ‘feels productive’ and then explains that writing from memory is ‘far more effective’.",
            commonErrors: ["Repeating the advice without explanation."],
          },
        },
        {
          id: "el10-u2-advise-inform-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the opening of an information leaflet for Year 7 students on how to settle into secondary school. Include a title and use a reassuring tone.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Leaflet", statement: "Title, purpose, short sections, reassuring tone." }],
            steps: [
              { reasoning: "Appropriate title and layout.", marks: 1, markCode: "AO4" },
              { reasoning: "Clear statement of purpose and audience awareness.", marks: 2, markCode: "AO4" },
              { reasoning: "Reassuring tone, with direct address.", marks: 2, markCode: "AO4" },
              { reasoning: "Technical accuracy.", marks: 1, markCode: "AO5" },
            ],
            levels: ARG_LEVELS,
            finalAnswer: "A titled leaflet opening that states its purpose, addresses new students directly and reassures them.",
            commonErrors: ["Too formal for eleven-year-olds.", "No title."],
          },
        },
        {
          id: "el10-u2-advise-inform-q4",
          difficulty: "challenge",
          totalMarks: 22,
          extract: ADVISE,
          stem: "Read the leaflet and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two pieces of advice about looking after yourself during revision.", marks: 2 },
            { label: "b", prompt: "Explain how the writer's tone makes the advice encouraging.", marks: 5 },
            { label: "c", prompt: "Write a guide for new Year 10 students on how to manage their time. Aim for around 350 words.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Guide", statement: "Title, organised sections, helpful tone." },
              { kind: "skill", name: "Tone", statement: "Supportive language and realistic goals encourage the reader." },
            ],
            steps: [
              { part: "a", reasoning: "Sleep well and drink water.", evidence: "Sleep, water and regular meals", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Eat regular meals.", evidence: "regular meals", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Opening reassures that revision is a skill that can be learned.", evidence: "it can be learned", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Direct address makes it personal.", evidence: "will refresh you", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Realistic closing line removes pressure.", evidence: "you do not need to revise perfectly, only consistently", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Appropriate form, title and organisation.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Clear, helpful advice supported by reasons.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Tone and vocabulary suited to the audience.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Accuracy.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { part: "b", level: "Level 3", marks: "4-5", descriptor: "Clear, developed explanation of tone with well-chosen evidence." },
              { part: "b", level: "Level 2", marks: "2-3", descriptor: "Some relevant comment." },
              { part: "b", level: "Level 1", marks: "1", descriptor: "Simple, limited comment." },
              ...LONG("c"),
            ],
            finalAnswer: "(a) Sleep and drink water; eat regular meals. (b) The reassuring opening, direct address and realistic closing line make the tone supportive. (c) A titled guide with organised advice, reasons and a helpful tone.",
            commonErrors: ["Commands with no reasons.", "Too many tips with no development."],
          },
        },
      ],
    },
  ],
};
