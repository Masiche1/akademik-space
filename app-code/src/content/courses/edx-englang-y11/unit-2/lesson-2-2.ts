import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

// Builds a level-based scheme whose top band equals the marks available.
const levels = (top: number, focus: string, part?: string): MarkLevel[] => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k: number) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen detail`,
    `Thorough, convincing ${focus}; well-chosen, effective detail`,
    `Clear, relevant ${focus}; appropriate detail`,
    `Some control; ${focus} is partly developed with some relevant detail`,
    `Simple, limited ${focus}; little control or development`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const SOURCE: TextExtract = {
  title: "Town to trial a four-day school week",
  author: "Written for Akademik Space",
  source: "Original news report",
  lineNumbers: true,
  text:
    "Pupils at Marlow Park Academy will attend lessons for only four days a week from January, under a one-year trial announced yesterday by headteacher Dr Helen Okafor.\n\nThe school day will be extended by 55 minutes, with Fridays set aside for independent study, clubs and work experience. Dr Okafor said the change would 'give young people room to breathe' and cut the 12 per cent of lessons currently lost to teacher absence.\n\nParents have responded with mixed feelings. A survey of 400 families found that 46 per cent supported the plan, 38 per cent opposed it and 16 per cent were undecided. Several parents said they could not afford childcare on Fridays. 'I work shifts,' said one mother. 'Who looks after a fifteen-year-old on a day off?'\n\nThe trial will be reviewed in December. If results show no fall in attainment, the school hopes to make the pattern permanent.",
};

const SAMPLE_REVIEW: TextExtract = {
  title: "Review: The Lantern Cafe",
  author: "Written for Akademik Space",
  source: "Original review",
  text:
    "There is a moment, as you step out of the drizzle into The Lantern Cafe, when the world quietens: steam curls above the counter, a record crackles, and someone nearby laughs without self-consciousness. It is a promising start, and for the most part the cafe delivers.\n\nThe coffee is expertly made, though the flat white arrived slightly too hot to drink. The lemon cake, by contrast, was a revelation: moist, sharp and absurdly generous. Service was warm but slow; we waited twenty minutes for a sandwich that, when it finally came, was merely ordinary.\n\nAt around six pounds for a light lunch, The Lantern is not cheap, yet it is the atmosphere you are paying for. Recommended for a long afternoon, less so for a quick bite.",
};

export const lesson22: Lesson = {
  id: "el11-u2-lesson-2-2",
  code: "2-2",
  title: "Writing from Sources, Reports and Reviews",
  goal: "I CAN write effectively in response to a source text, and shape a report or review for its audience and purpose.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO4", "4EA1 AO5"],
  vocabulary: [
    { term: "Source text", definition: "A provided piece of writing that you may use as a basis for your own response." },
    { term: "Synthesis", definition: "Selecting and combining information from a source into your own coherent argument." },
    { term: "Report", definition: "A formal text that presents findings in an organised way, often with headings and recommendations." },
    { term: "Review", definition: "A text that evaluates something, giving opinions supported by reasons and evidence." },
    { term: "Formal register", definition: "Language that is objective, precise and avoids slang, contractions and chatty phrases." },
    { term: "Recommendation", definition: "A suggested course of action at the end of a report, based on the evidence presented." },
  ],
  concepts: [
    {
      id: "el11-u2-writing-from-source",
      title: "Writing in response to a source text",
      skill: "Use information from a source selectively and critically, adding your own voice and viewpoint.",
      lesson: {
        sections: [
          {
            heading: "Use, do not copy",
            body: "When a task gives you a source, the examiner wants your writing, informed by the source. Select two or three key facts or quotations, **paraphrase** most of them and show a reaction to them. Copying large chunks, or retelling the source, earns little. A response should have its own argument, shaped for its own audience.",
          },
          {
            heading: "Select, challenge, extend",
            body: "Pick the details that best support your viewpoint, challenge details that undermine it ('The 46 per cent figure sounds impressive until one notices that more than half the families did not back the plan'), and extend by adding experience, reasoning or an example. Statistics need interpretation, not just repetition.",
          },
          {
            heading: "Match the form",
            body: "A letter to the headteacher, a speech to parents or an opinion column will each handle the same source differently. Use the conventions of the form: salutation and sign-off for letters, direct address for speeches, a headline and strong opinion voice for columns.",
          },
        ],
        keyFormulas: [
          { name: "Select-challenge-extend", statement: "Choose facts, question their meaning, and add your own reasoning or example." },
          { name: "Paraphrase", statement: "Restate a source detail in your own words, keeping the meaning but changing structure and vocabulary." },
          { name: "Quotation use", statement: "Quote only short, powerful phrases and always comment on them." },
        ],
        workedExample: {
          problem: "Using the news report, write two paragraphs of a letter to Dr Okafor opposing the trial.",
          solution: "Model: 'Dear Dr Okafor, I write as a parent who admires the ambition of the four-day proposal but cannot support it as it stands. You describe Fridays as time for pupils to \"breathe\"; for the many families who work shifts, however, an unsupervised Friday is not breathing space but a gap in the safety net. Your own survey makes the point: more than half of the 400 families did not support the plan, and several said plainly that they cannot afford childcare. A policy that works best for families with flexible jobs risks widening the very inequalities a school should narrow.' The letter paraphrases, interprets a statistic, quotes briefly and keeps a respectful formal register.",
        },
      },
      questions: [
        {
          id: "el11-u2-writing-from-source-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCE,
          stem: "Which of these is the best way to use the statistic 'a survey of 400 families found that 46 per cent supported the plan' in an opinion piece opposing the trial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore the statistic because it comes from the source." },
              { id: "b", text: "Point out that 54 per cent of families did not back the plan, and comment on what that suggests." },
              { id: "c", text: "Say that 46 per cent is a high figure and everyone agrees." },
              { id: "d", text: "Copy the whole sentence into your answer without comment." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Interpreting evidence", statement: "Turn a statistic into an argument by interpreting what it shows." }],
            steps: [{ reasoning: "Reinterpreting 46 per cent as less than half supports the opposing argument and shows critical use of the source.", evidence: "46 per cent supported the plan", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** Reframe it to show a majority did not back the plan.",
            commonErrors: ["Copying without comment (b).", "Misreading 46 per cent as a majority (d)."],
          },
        },
        {
          id: "el11-u2-writing-from-source-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: SOURCE,
          stem: "Write one paragraph (about 80 words) for a speech to parents supporting the trial. Use at least one detail from the report, in your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Paraphrase and respond", statement: "Use a source detail in your own words and add your reasoning." }],
            steps: [
              { reasoning: "Uses at least one detail from the report accurately and selectively, such as the 12 per cent of lessons lost.", marks: 1, markCode: "AO4" },
              { reasoning: "Paraphrases rather than copies and comments on the detail.", marks: 1, markCode: "AO4" },
              { reasoning: "Uses direct address and an appropriate spoken register, with rhetorical features.", marks: 1, markCode: "AO4" },
              { reasoning: "Accurate and controlled sentences and punctuation.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "Model: 'Friends, imagine a school where one lesson in eight is lost to cover and chaos. That is our reality, and it is why I welcome a trial that gives teachers a day to prepare and pupils a day to grow. Change always feels risky; standing still costs more.'",
            commonErrors: ["Copying a sentence from the report.", "Ignoring the audience of parents."],
          },
        },
        {
          id: "el11-u2-writing-from-source-q3",
          difficulty: "challenge",
          totalMarks: 12,
          extract: SOURCE,
          stem: "Write an article for the school newsletter (about 300 words) giving your view of the four-day week. Use ideas from the news report but develop your own viewpoint and examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Select-challenge-extend", statement: "Use the source as a springboard, not a script." },
              { kind: "convention", name: "Newsletter article", statement: "Headline, clear viewpoint, structure, an engaged voice for a school audience." },
            ],
            steps: [
              { reasoning: "Selects and interprets source details with a clear viewpoint, without copying.", marks: 4, markCode: "AO4" },
              { reasoning: "Adds original examples or reasoning, and includes a counter-argument.", marks: 3, markCode: "AO4" },
              { reasoning: "Sustained voice and register for the audience, with a strong opening and ending.", marks: 3, markCode: "AO4" },
              { reasoning: "Technical accuracy, sentence variety and vocabulary.", marks: 2, markCode: "AO5" },
            ],
            finalAnswer: "A top-band article treats the report as evidence to be weighed, adds personal examples, concedes the childcare concern, and ends with a memorable and balanced judgement.",
            levels: levels(12, "writing from a source"),
            commonErrors: ["Retelling the report.", "A viewpoint that disappears halfway.", "No original ideas."],
          },
        },
        {
          id: "el11-u2-writing-from-source-q4",
          difficulty: "challenge",
          totalMarks: 28,
          extract: SOURCE,
          stem: "Read the news report on the four-day school week.",
          parts: [
            { label: "a", prompt: "Give two reasons the headteacher gives for the trial.", marks: 2 },
            { label: "b", prompt: "Explain why the parent's question 'Who looks after a fifteen-year-old on a day off?' is effective in the report.", marks: 4 },
            { label: "c", prompt: "Write a formal letter (about 450 words) to Dr Okafor giving your view of the proposal. Use details from the report where relevant.", marks: 22 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select two accurate reasons from the text." },
              { kind: "technique", name: "Rhetorical question", statement: "A question that exposes a practical problem and invites sympathy." },
              { kind: "convention", name: "Formal letter", statement: "Address, salutation, clear purpose, formal register and correct sign-off." },
            ],
            steps: [
              { part: "a", reasoning: "It would give young people room to breathe.", evidence: "give young people room to breathe", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It would reduce the 12 per cent of lessons lost to teacher absence.", evidence: "12 per cent of lessons currently lost", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It puts a real, personal worry in the report, giving a human voice to the statistics.", evidence: "I work shifts", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The rhetorical question makes the reader consider the answer for themselves, creating sympathy.", evidence: "Who looks after a fifteen-year-old on a day off?", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'a day off' contrasts with the school's idea of purposeful study, hinting that families see Fridays as empty time.", evidence: "a day off", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The mother's quoted speech adds credibility and balance to the news report.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Clear purpose and viewpoint, with details from the report used selectively and interpreted, not copied.", marks: 7, markCode: "AO4" },
              { part: "c", reasoning: "A fair counter-argument and a rebuttal, with developed reasoning and original examples.", marks: 5, markCode: "AO4" },
              { part: "c", reasoning: "Formal register, correct letter conventions, tone fitted to a headteacher, convincing opening and ending.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Technical accuracy: varied punctuation, sentence structures, spelling and ambitious vocabulary.", marks: 6, markCode: "AO5" },
            ],
            finalAnswer: "(a) To give young people room to breathe; to cut the 12 per cent of lessons lost to absence. (b) The question gives a worried parent a voice and makes readers think of the practical problem for working families. (c) A top-band letter is formal, builds a reasoned case using the report's evidence critically, concedes and rebuts, and ends with a constructive proposal.",
            levels: levels(22, "writing a formal letter", "c"),
            commonErrors: ["Informal register in a letter to a headteacher.", "Forgetting 'Yours sincerely' or 'Yours faithfully' conventions.", "Copying details wholesale."],
          },
        },
      ],
    },
    {
      id: "el11-u2-reports-reviews",
      title: "Reports and reviews",
      skill: "Structure a report with headings and recommendations, and a review with balanced, evidenced judgements.",
      lesson: {
        sections: [
          {
            heading: "Reports: clear and objective",
            body: "A report informs a specific reader (a council, headteacher, committee). Use a title, a short introduction stating purpose, headed sections, and a **recommendation**. Formal register, impersonal constructions ('It was found that') and precise facts are the norm. Avoid emotive exaggeration: authority comes from accuracy.",
          },
          {
            heading: "Reviews: voice and judgement",
            body: "A review is subjective but must be justified. Begin by setting the scene, describe the main features with specific detail, make contrasts between strengths and weaknesses, and give a verdict. A lively, confident voice and precise, sensory vocabulary lift a review; vague words like 'nice' and 'good' limit it.",
          },
          {
            heading: "Audience and purpose",
            body: "Consider who will read the text and why. A report for a busy committee needs a summary at the top; a review for a magazine can digress with wit. In both, plan the structure first: sections for a report, a movement from first impression to verdict for a review.",
          },
        ],
        keyFormulas: [
          { name: "Report structure", statement: "Title, introduction, headed findings, conclusion and recommendation." },
          { name: "Review structure", statement: "First impression, specific strengths, specific weaknesses, value, verdict." },
          { name: "Balanced judgement", statement: "'Although X, the real strength is Y' keeps a review fair and sophisticated." },
        ],
        workedExample: {
          problem: "Write the opening paragraph and recommendation of a report to the headteacher on litter at school.",
          solution: "Model: 'Report on Litter in the Lower School Yard. Purpose: This report examines the quantity and causes of litter in the Lower School yard and recommends action. Findings were gathered through observation at three break times and a survey of 60 pupils. ... Recommendation: It is recommended that two additional bins be placed near the canteen door and that form groups take weekly responsibility for a zone of the yard, with the position reviewed after one term.' This uses a clear title, a purpose statement, impersonal verbs and a practical, evidence-linked recommendation.",
        },
      },
      questions: [
        {
          id: "el11-u2-reports-reviews-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature is most typical of a formal report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct address such as 'Hello, readers!'" },
              { id: "b", text: "A cliffhanger ending" },
              { id: "c", text: "Headed sections and a recommendation at the end" },
              { id: "d", text: "Slang and chatty humour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Report conventions", statement: "Headings, objective language and recommendations." }],
            steps: [{ reasoning: "Reports use headings and recommendations to help decision-makers.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(c)** Headed sections and a recommendation.",
            commonErrors: ["Choosing (d), confusing a report with a blog or speech."],
          },
        },
        {
          id: "el11-u2-reports-reviews-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SAMPLE_REVIEW,
          stem: "Explain how the writer of the review keeps the judgement of The Lantern Cafe balanced. Use quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Balanced review", statement: "Strengths and weaknesses are both given specific evidence." }],
            steps: [
              { reasoning: "Praises with specific detail.", evidence: "moist, sharp and absurdly generous", marks: 1, markCode: "AO2" },
              { reasoning: "Criticises with specific detail.", evidence: "merely ordinary", marks: 1, markCode: "AO2" },
              { reasoning: "Uses contrast connectives ('though', 'by contrast', 'yet') to weigh them and reaches a qualified verdict.", evidence: "Recommended for a long afternoon, less so for a quick bite", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer praises the lemon cake as 'moist, sharp and absurdly generous' but calls the sandwich 'merely ordinary', using connectives like 'by contrast' and 'yet' and a qualified verdict.",
            commonErrors: ["Saying 'it has good and bad points' without evidence."],
          },
        },
        {
          id: "el11-u2-reports-reviews-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write a review (about 250 words) of a place you have visited recently, such as a museum, restaurant or park. Include an opening that sets the scene and a qualified verdict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review structure", statement: "Scene, specific detail, contrast, verdict." },
              { kind: "technique", name: "Sensory detail", statement: "Precise sensory vocabulary brings a review alive." },
            ],
            steps: [
              { reasoning: "Engaging opening that sets the scene and establishes an authoritative voice.", marks: 3, markCode: "AO4" },
              { reasoning: "Specific, evidenced strengths and weaknesses with sensory detail.", marks: 3, markCode: "AO4" },
              { reasoning: "A balanced, qualified verdict and sense of audience.", marks: 2, markCode: "AO4" },
              { reasoning: "Accurate, varied sentences and ambitious vocabulary.", marks: 2, markCode: "AO5" },
            ],
            finalAnswer: "A top-band review has a vivid opening, precise details of both praise and criticism, a controlled witty voice and a qualified verdict that says who the place suits.",
            levels: levels(10, "review writing"),
            commonErrors: ["Vague adjectives such as 'nice' and 'good'.", "No criticism at all.", "Ending without a verdict."],
          },
        },
        {
          id: "el11-u2-reports-reviews-q4",
          difficulty: "challenge",
          totalMarks: 24,
          stem: "Your school council has asked you to investigate whether the school library should open on Saturday mornings.",
          parts: [
            { label: "a", prompt: "Write a suitable title and a three-sentence introduction stating the purpose of a report.", marks: 4 },
            { label: "b", prompt: "Write the Findings section (about 150 words) with at least two sub-headings and specific, realistic evidence.", marks: 8 },
            { label: "c", prompt: "Write the Conclusion and Recommendation (about 100 words), and then explain in two sentences how your report differs in tone from a magazine review.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "Title, purpose, headed findings, recommendation." },
              { kind: "convention", name: "Formal register", statement: "Impersonal, objective language." },
              { kind: "skill", name: "Evidence", statement: "Precise, plausible evidence supports every claim." },
            ],
            steps: [
              { part: "a", reasoning: "Appropriate, specific title.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "A clear statement of purpose and method in formal, accurate prose.", marks: 3, markCode: "AO4" },
              { part: "b", reasoning: "At least two sub-headings and logically organised findings.", marks: 3, markCode: "AO4" },
              { part: "b", reasoning: "Specific evidence such as survey numbers, usage figures or costs.", marks: 3, markCode: "AO4" },
              { part: "b", reasoning: "Formal register and accurate expression.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "A clear conclusion that follows from the findings.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "A practical, justified recommendation with a review date or conditions.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Correctly identifies the difference in tone: reports are objective and impersonal whereas reviews are subjective and voice-led.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Technical accuracy and formal vocabulary.", marks: 2, markCode: "AO5" },
            ],
            finalAnswer: "A top response gives a precise title and purpose, organised and evidenced findings under sub-headings, and a conclusion and recommendation that follow logically. It notes that a report uses impersonal, objective language, while a review uses a personal voice and opinion.",
            levels: [...levels(8, "report findings", "b"), ...levels(12, "conclusion and recommendation", "c")],
            commonErrors: ["No headings.", "Opinions with no evidence.", "Chatty register."],
          },
        },
      ],
    },
  ],
};
