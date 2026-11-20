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

const DRAFTS: TextExtract = {
  title: "Two drafts of a paragraph on city noise",
  author: "Written for Akademik Space",
  source: "Original student drafts",
  text:
    "DRAFT 1: The city is very noisy. There are lots of cars and they are loud. People shout and there is building work. It makes it hard to sleep and I get tired. The council should do something about it.\n\nDRAFT 2: By midnight the city has not so much fallen quiet as lowered its voice. Lorries grumble through the dark, a distant siren stitches the silence together, and somewhere above, a neighbour's drill resumes its patient assault on the plaster. Sleep, in such conditions, is not a right but a rumour; and a council that tolerates this is, in effect, taxing its citizens in hours of rest.",
};

const CLAUSES: TextExtract = {
  title: "A paragraph for proofreading",
  author: "Written for Akademik Space",
  source: "Original draft containing errors",
  text:
    "Its generally accepted that teenagers need more sleep than adults, yet most schools start early in the morning. Research suggest that a later start improves concentration, behaviour and attendance, it also reduces accidents on the way to school. Critics argue that parents work early, however they ignore the evidence from schools that have already changed there timetables.",
};

export const lesson23: Lesson = {
  id: "el11-u2-lesson-2-3",
  code: "2-3",
  title: "Top-Band Crafting and Sophistication",
  goal: "I CAN craft writing with a distinctive voice, controlled structure and sophisticated, accurate language.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO4", "4EA1 AO5"],
  vocabulary: [
    { term: "Register", definition: "The level of formality of language, chosen to suit audience and purpose." },
    { term: "Voice", definition: "The distinctive personality of a piece of writing, created through diction, rhythm and perspective." },
    { term: "Syntactic variety", definition: "Using a deliberate mix of simple, compound, complex and minor sentences." },
    { term: "Subordinate clause", definition: "A clause that adds information to a main clause but cannot stand alone." },
    { term: "Semicolon", definition: "A punctuation mark joining two closely related independent clauses." },
    { term: "Comma splice", definition: "An error in which two independent clauses are joined by only a comma." },
    { term: "Nominalisation", definition: "Turning a verb or adjective into a noun to create a formal, abstract tone." },
  ],
  concepts: [
    {
      id: "el11-u2-ao4-crafting",
      title: "Top-band AO4 crafting",
      skill: "Shape voice, structure and imagery deliberately for audience and purpose.",
      lesson: {
        sections: [
          {
            heading: "A controlled voice",
            body: "Top-band writing sounds like one person with a clear attitude. Decide your voice (wry columnist, impassioned campaigner, measured analyst) and keep it consistent. Voice comes from **diction** (precise, vivid nouns and verbs), **rhythm** (a long sentence answered by a short one) and **stance** (what you are willing to commit to).",
          },
          {
            heading: "Craft at sentence level",
            body: "Replace generic words with exact ones: not 'loud' but 'grating'; not 'a big problem' but 'a quiet crisis'. Use imagery and extended metaphor sparingly, to illuminate the argument. Draft 2 above personifies the city, lowering 'its voice', and the drill's 'patient assault' fuses military and domestic images to comic and persuasive effect.",
          },
          {
            heading: "Craft at whole-text level",
            body: "Structure is persuasive. Open with a hook, move through reasoned paragraphs with varied topic sentences, place the strongest point where it will resonate, and close with an echo or call to action. Use discourse markers sparingly and vary them (**moreover**, **nevertheless**, **admittedly**). Plan so every paragraph has a clear job.",
          },
        ],
        keyFormulas: [
          { name: "Precise diction", statement: "Choose the exact noun or verb instead of intensifiers such as 'very' and 'really'." },
          { name: "Sentence rhythm", statement: "Pair a long, developing sentence with a short, decisive one for emphasis." },
          { name: "Purposeful imagery", statement: "A metaphor should clarify or intensify the argument, not simply decorate." },
        ],
        workedExample: {
          problem: "Improve this sentence: 'Social media is very bad for young people and makes them unhappy.'",
          solution: "Model: 'Social media does not so much connect young people as measure them: every post a verdict, every silence a sentence passed.' The revision replaces the vague 'very bad' with a precise claim, uses antithesis ('not so much ... as') to make the point sharply, and builds a short, balanced metaphor that gives the sentence rhythm and voice. It still makes the argument, but the argument now has personality.",
        },
      },
      questions: [
        {
          id: "el11-u2-ao4-crafting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFTS,
          stem: "Which technique is used in 'the city has not so much fallen quiet as lowered its voice'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification with a balanced contrast" },
              { id: "b", text: "Onomatopoeia" },
              { id: "c", text: "Direct address" },
              { id: "d", text: "Statistics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Giving a city human actions such as lowering its voice." }],
            steps: [{ reasoning: "The city is given a voice it lowers, and the 'not so much ... as' structure balances two ideas.", evidence: "lowered its voice", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Personification with a balanced contrast.",
            commonErrors: ["Choosing onomatopoeia because the sentence is about noise."],
          },
        },
        {
          id: "el11-u2-ao4-crafting-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFTS,
          stem: "Explain four ways in which Draft 2 is more skilfully crafted than Draft 1.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating craft", statement: "Compare drafts using precise reference to diction, imagery, rhythm and structure." }],
            steps: [
              { reasoning: "Precise, vivid verbs ('grumble', 'stitches') replace generic 'are loud'.", evidence: "Lorries grumble through the dark", marks: 1, markCode: "AO4" },
              { reasoning: "Imagery of the drill's 'patient assault' adds wit and a distinctive voice.", evidence: "patient assault on the plaster", marks: 1, markCode: "AO4" },
              { reasoning: "Varied sentence length and the semicolon give rhythm, unlike the short repetitive sentences of Draft 1.", marks: 1, markCode: "AO5" },
              { reasoning: "Ends with a witty, pointed claim that turns noise into a taxation of rest, linking description to argument.", evidence: "taxing its citizens in hours of rest", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Draft 2 uses precise verbs, original imagery, varied sentence rhythm and a pointed final metaphor, whereas Draft 1 relies on vague, repetitive, simple sentences.",
            commonErrors: ["Saying 'Draft 2 is longer'.", "Naming features with no comparison."],
          },
        },
        {
          id: "el11-u2-ao4-crafting-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Rewrite Draft 1 (from the extract about city noise) as a paragraph (about 120 words) for a magazine feature, with a distinctive voice and at least one extended image.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Voice and imagery", statement: "A consistent voice with a purposeful image elevates a paragraph." },
              { kind: "skill", name: "Syntactic variety", statement: "Combine long and short sentences for effect." },
            ],
            steps: [
              { reasoning: "A distinctive, consistent voice appropriate to a magazine feature.", marks: 3, markCode: "AO4" },
              { reasoning: "A well-developed image or extended metaphor that supports the argument.", marks: 3, markCode: "AO4" },
              { reasoning: "Varied sentence forms, controlled punctuation and secure spelling.", marks: 2, markCode: "AO5" },
              { reasoning: "Precise, ambitious vocabulary used accurately.", marks: 2, markCode: "AO5" },
            ],
            finalAnswer: "A strong rewrite keeps the content (noise, lost sleep, council responsibility) but dramatises it through precise diction, a sustained image and rhythmic variety.",
            levels: levels(10, "crafting of voice and imagery"),
            commonErrors: ["Overloading with adjectives.", "Mixed metaphors.", "Losing the argument in decoration."],
          },
        },
        {
          id: "el11-u2-ao4-crafting-q4",
          difficulty: "challenge",
          totalMarks: 30,
          stem: "Task: Write a speech for a school assembly arguing that young people should spend more time outdoors. Plan and write your response in the following stages.",
          parts: [
            { label: "a", prompt: "Write a plan with five paragraph topics, your hook and your closing line.", marks: 5 },
            { label: "b", prompt: "Write your first two paragraphs (about 200 words) with a hook and a distinctive voice.", marks: 10 },
            { label: "c", prompt: "Write your final paragraph and a call to action (about 100 words), echoing your hook.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning for structure", statement: "Each paragraph has a role and the strongest point is placed with care." },
              { kind: "technique", name: "Voice, rhetoric and imagery", statement: "Rhetorical devices and imagery used purposefully." },
              { kind: "convention", name: "Speech", statement: "Direct address, rhythm and a memorable ending." },
            ],
            steps: [
              { part: "a", reasoning: "Logical, varied paragraph topics that build a case.", marks: 3, markCode: "AO4" },
              { part: "a", reasoning: "A defined hook and an echoing closing line.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Distinctive, engaging hook and voice for a school assembly.", marks: 4, markCode: "AO4" },
              { part: "b", reasoning: "Developed points with evidence, example or imagery.", marks: 3, markCode: "AO4" },
              { part: "b", reasoning: "Accurate, varied sentence structures and punctuation.", marks: 3, markCode: "AO5" },
              { part: "c", reasoning: "Final paragraph that builds to a climax and echoes the hook.", marks: 6, markCode: "AO4" },
              { part: "c", reasoning: "Effective call to action using rhetorical devices.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Technical accuracy, ambitious vocabulary and controlled style.", marks: 5, markCode: "AO5" },
            ],
            finalAnswer: "A top-band response plans clearly, opens with a distinctive hook, develops points with imagery and evidence, and closes by echoing the opening and issuing a call to action, all in accurate and varied prose.",
            levels: [...levels(10, "opening and voice", "b"), ...levels(15, "closing and control", "c")],
            commonErrors: ["Ignoring the plan.", "No echo of the hook.", "Overlong opening and rushed ending."],
          },
        },
      ],
    },
    {
      id: "el11-u2-ao5-sophistication",
      title: "Top-band AO5 sophistication",
      skill: "Use accurate, varied punctuation, sentence structures and vocabulary to achieve precision and style.",
      lesson: {
        sections: [
          {
            heading: "Accuracy first",
            body: "Sophisticated writing is accurate writing. Common errors that cap AO5 include comma splices, confusion of its and it's, subject-verb agreement slips ('Research suggest'), and wrong homophones (there/their). Proofread systematically: read once for sense, once for punctuation, once for spelling.",
          },
          {
            heading: "Punctuation as style",
            body: "Control a full range: **semicolons** to link related clauses, **colons** to introduce explanations or lists, **dashes** or **brackets** for asides, and **commas** for subordinate clauses. Use each only where it improves meaning. A paragraph packed with exotic punctuation is as weak as one with only full stops.",
          },
          {
            heading: "Vocabulary and sentence structure",
            body: "Ambitious vocabulary must be exact: use 'ubiquitous' only when you mean 'found everywhere'. Vary sentence openings with participles ('Having considered...'), subordinate clauses ('Although...') and adverbials. Nominalisation ('the decline in reading') suits a formal register but can bury the action if overused.",
          },
        ],
        keyFormulas: [
          { name: "Semicolon rule", statement: "Join two related, complete sentences: 'Reading is a pleasure; it is also a discipline.'" },
          { name: "Comma splice fix", statement: "Replace the comma with a full stop, semicolon or conjunction." },
          { name: "Proofreading routine", statement: "Check sense, then punctuation, then spelling, then subject-verb agreement." },
        ],
        workedExample: {
          problem: "Correct this sentence: 'The council has made it's decision, however many residents are unhappy about it.'",
          solution: "Model: 'The council has made its decision; however, many residents are unhappy about it.' 'its' (possessive) replaces 'it's' (it is). The comma splice before 'however' is repaired by a semicolon, and a comma follows 'however' because it is a conjunctive adverb. The corrected sentence keeps its formal tone while achieving a controlled rhythm.",
        },
      },
      questions: [
        {
          id: "el11-u2-ao5-sophistication-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses a semicolon correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The library was silent; the only sound was a clock." },
              { id: "b", text: "The library was; silent, the only sound was a clock." },
              { id: "c", text: "Although the library was silent; the clock ticked." },
              { id: "d", text: "The library; silent and calm." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Semicolon", statement: "A semicolon joins two complete, related clauses." }],
            steps: [{ reasoning: "Both sides of the semicolon in (a) can stand alone as sentences.", evidence: "The library was silent; the only sound was a clock", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(a)** Both clauses are complete and closely related.",
            commonErrors: ["Using a semicolon after a subordinate clause (c).", "Using it like a comma (b, d)."],
          },
        },
        {
          id: "el11-u2-ao5-sophistication-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: CLAUSES,
          stem: "Identify and correct four errors in the paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Proofreading", statement: "Systematically check agreement, apostrophes, comma splices and homophones." }],
            steps: [
              { reasoning: "'Its' should be 'It's' (it is).", evidence: "Its generally accepted", marks: 1, markCode: "AO5" },
              { reasoning: "'Research suggest' should be 'Research suggests' (subject-verb agreement).", evidence: "Research suggest", marks: 1, markCode: "AO5" },
              { reasoning: "The comma before 'it also reduces' is a comma splice; use a semicolon or full stop.", evidence: "attendance, it also reduces", marks: 1, markCode: "AO5" },
              { reasoning: "'there timetables' should be 'their timetables' (possessive).", evidence: "there timetables", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "It's; suggests; a semicolon in place of the comma splice; their. (A comma splice also occurs before 'however': use a semicolon and a comma after it.)",
            commonErrors: ["Missing the agreement error.", "Correcting by deleting words rather than repairing punctuation."],
          },
        },
        {
          id: "el11-u2-ao5-sophistication-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Rewrite this passage using varied sentence structures, accurate punctuation and more ambitious vocabulary: 'Phones are everywhere. People use them all the time. They are useful but they can be bad. We should think about how we use them.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Syntactic variety", statement: "Combine and recast sentences using subordination and varied openings." },
              { kind: "convention", name: "Punctuation", statement: "Use semicolons, colons, dashes and commas accurately." },
            ],
            steps: [
              { reasoning: "Combines simple sentences into varied, controlled complex structures.", marks: 3, markCode: "AO5" },
              { reasoning: "Accurate use of a range of punctuation, including at least one semicolon or colon.", marks: 2, markCode: "AO5" },
              { reasoning: "Ambitious vocabulary, used precisely, such as ubiquitous or indispensable.", marks: 2, markCode: "AO5" },
              { reasoning: "Retains clear meaning and a suitable register throughout.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Model: 'Phones are now ubiquitous; we consult them on buses, at tables, even in bed. Indispensable though they are, they carry a cost: attention, once given freely, is now harvested. The question is not whether we should use them, but whether they should use us.'",
            levels: levels(8, "technical accuracy and vocabulary"),
            commonErrors: ["Using ambitious words wrongly.", "Piling up semicolons.", "Changing the meaning of the original."],
          },
        },
        {
          id: "el11-u2-ao5-sophistication-q4",
          difficulty: "challenge",
          totalMarks: 28,
          extract: CLAUSES,
          stem: "Study the draft paragraph on school start times.",
          parts: [
            { label: "a", prompt: "Rewrite the paragraph with all errors corrected.", marks: 6 },
            { label: "b", prompt: "Explain two choices you made in your correction, naming the punctuation or grammatical rule.", marks: 4 },
            { label: "c", prompt: "Extend the paragraph into a full article (about 400 words) arguing for a later school start, with sophisticated vocabulary and a controlled range of punctuation.", marks: 18 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading", statement: "Find and repair errors accurately." },
              { kind: "convention", name: "Grammar rules", statement: "Name the rule that justifies each correction." },
              { kind: "skill", name: "Sophistication", statement: "Integrate range, accuracy and ambitious vocabulary in extended writing." },
            ],
            steps: [
              { part: "a", reasoning: "Corrects its/it's and subject-verb agreement.", marks: 2, markCode: "AO5" },
              { part: "a", reasoning: "Repairs the two comma splices with a full stop or semicolon.", marks: 2, markCode: "AO5" },
              { part: "a", reasoning: "Corrects the homophone and keeps meaning and tone.", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "Names a rule accurately, such as a semicolon joins two independent clauses.", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "Names a second rule, such as 'its' is possessive and 'it's' is a contraction.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Develops a sustained, persuasive argument with clear structure.", marks: 8, markCode: "AO4" },
              { part: "c", reasoning: "Wide range of punctuation and sentence forms used accurately.", marks: 5, markCode: "AO5" },
              { part: "c", reasoning: "Ambitious and precise vocabulary, with secure spelling.", marks: 5, markCode: "AO5" },
            ],
            finalAnswer: "(a) It's generally accepted that teenagers need more sleep than adults, yet most schools start early in the morning. Research suggests that a later start improves concentration, behaviour and attendance; it also reduces accidents on the way to school. Critics argue that parents work early; however, they ignore the evidence from schools that have already changed their timetables. (b) The semicolon joins two related independent clauses; 'it's' is the contraction of 'it is' whereas 'its' shows possession. (c) A top-band article is structured, accurate and stylish.",
            levels: levels(18, "extended writing with technical control", "c"),
            commonErrors: ["Ignoring the comma splice before 'however'.", "Using ambitious vocabulary inaccurately."],
          },
        },
      ],
    },
  ],
};
