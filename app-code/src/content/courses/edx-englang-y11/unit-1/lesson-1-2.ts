import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

// Builds a level-based scheme whose top band equals the marks available.
const levels = (top: number, focus: string, part?: string): MarkLevel[] => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k: number) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen evidence`,
    `Thorough ${focus}; well-chosen, effective references`,
    `Clear, relevant ${focus}; appropriate references`,
    `Some understanding; ${focus} is partly developed with some relevant references`,
    `Simple, limited ${focus}; few or unselective references`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const GETTYSBURG: TextExtract = {
  title: "The Gettysburg Address (opening)",
  author: "Abraham Lincoln",
  source: "Speech delivered at Gettysburg, Pennsylvania, 19 November 1863",
  lineNumbers: true,
  text:
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\n\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.\n\nBut, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here.",
};

const LIBRARY: TextExtract = {
  title: "Keep the Lights On",
  author: "Written for Akademik Space",
  source: "Original campaign speech",
  lineNumbers: true,
  text:
    "Friends, neighbours, readers: look around you. These shelves have held this town's stories for ninety years. Tonight, the council wants to turn them into a car park.\n\nWhat will a car park give us? Tarmac. Silence. A place to leave something behind. And what will we lose? A refuge for the child whose home is too loud for homework. A lifeline for the pensioner whose only conversation today was with the librarian. A door that has never once asked anyone to pay before it opened.\n\nThe council says the building is old. So is every good idea. They say the budget is tight. Yet money was found, and quickly, for the new office block across the road. Money is never missing; it is merely misplaced.\n\nSo I ask you: do we want to be the generation that closed the door? Or the one that kept the lights on? Tonight, stand up. Speak up. Vote no.",
};

export const lesson12: Lesson = {
  id: "el11-u1-lesson-1-2",
  code: "1-2",
  title: "Rhetoric and Integrated Analysis of Language and Structure",
  goal: "I CAN analyse rhetorical devices in speeches and combine language and structural analysis into one convincing argument about effect.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO2", "4EA1 AO1"],
  vocabulary: [
    { term: "Rhetoric", definition: "The art of speaking or writing persuasively, using deliberate techniques." },
    { term: "Anaphora", definition: "Repetition of a word or phrase at the start of successive clauses or sentences." },
    { term: "Tricolon", definition: "A list of three parallel words, phrases or clauses, creating rhythm and emphasis." },
    { term: "Inclusive pronoun", definition: "A pronoun such as 'we' or 'us' that includes the audience in the speaker's viewpoint." },
    { term: "Antithesis", definition: "Placing contrasting ideas side by side in a balanced structure." },
    { term: "Direct address", definition: "Speaking straight to the audience, for instance with 'you' or a vocative." },
    { term: "Cyclical structure", definition: "A text that returns at the end to an idea or image used at the start." },
  ],
  concepts: [
    {
      id: "el11-u1-rhetoric-speeches",
      title: "Rhetoric in speeches",
      skill: "Identify rhetorical devices and explain how each one persuades, moves or unites an audience.",
      lesson: {
        sections: [
          {
            heading: "Speeches are performed",
            body: "A speech is written to be heard. That is why speakers favour devices that work on the ear: repetition, lists of three, balanced pairs and short, punchy sentences. When you analyse a speech, imagine the audience in the room and ask what each device makes them think or feel at that moment.",
          },
          {
            heading: "Key rhetorical devices",
            body: "**Anaphora** builds rhythm and urgency. A **tricolon** gives a sense of completeness. **Antithesis** presents a clear choice. **Inclusive pronouns** create unity. **Rhetorical questions** invite the audience to agree silently. Emotive vocabulary, an appeal to values and a direct call to action complete the persuasive toolkit.",
          },
          {
            heading: "Beyond naming devices",
            body: "Naming a device earns little. Top answers explain its purpose in context: Lincoln's triple 'we can not dedicate, we can not consecrate, we can not hallow' is a rising sequence in which each verb is more sacred than the last, so the speaker appears humble by insisting the dead have already done what words cannot. Always connect the device, the exact words and the effect on the audience.",
          },
        ],
        keyFormulas: [
          { name: "Anaphora", statement: "Repeated opening words that drive rhythm and emphasis: 'we can not ... we can not ... we can not'." },
          { name: "Tricolon", statement: "Three parallel items that give a persuasive sense of completeness or climax." },
          { name: "Inclusive pronoun", statement: "'We' and 'us' bind speaker and audience into a single group." },
          { name: "Rhetorical question", statement: "A question that expects no answer, steering the audience towards the speaker's conclusion." },
        ],
        workedExample: {
          problem: "How does Lincoln use language to unite his audience in the first paragraph of the Gettysburg Address?",
          solution: "Lincoln begins with the inclusive possessive 'our fathers', which makes the audience heirs of a shared history rather than separate individuals. The nation is 'conceived in Liberty', a birth metaphor that presents the country as a living thing owing its existence to a principle, and the formal 'dedicated to the proposition that all men are created equal' elevates equality to a founding promise. The long, balanced sentence, with its stately rhythm, gives the opening a ceremonial weight appropriate to a memorial. By anchoring the war in these ideals before mentioning conflict, Lincoln encourages his listeners to see the struggle as the defence of their common inheritance.",
        },
      },
      questions: [
        {
          id: "el11-u1-rhetoric-speeches-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GETTYSBURG,
          stem: "Read the third paragraph. Which technique is used in 'we can not dedicate, we can not consecrate, we can not hallow'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anaphora, with a rising sequence of verbs" },
              { id: "b", text: "A rhetorical question" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "Alliteration of the letter c" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Anaphora", statement: "Repetition of the same opening words ('we can not') across successive clauses." }],
            steps: [{ reasoning: "The repeated phrase 'we can not' at the start of three clauses is anaphora; the verbs climb in solemnity.", evidence: "we can not dedicate, we can not consecrate, we can not hallow", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Anaphora with a rising sequence of verbs.",
            commonErrors: ["Choosing alliteration because of the repeated 'c' sound in 'can' and 'consecrate'; the technique is repetition of a phrase, not a sound.", "Confusing a listing structure with a question."],
          },
        },
        {
          id: "el11-u1-rhetoric-speeches-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GETTYSBURG,
          stem: "Explain the effect of the sentence 'The world will little note, nor long remember what we say here, but it can never forget what they did here.' Use a quotation in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Antithesis", statement: "Balanced contrast ('what we say' against 'what they did') that clarifies a value judgement." }],
            steps: [
              { reasoning: "Identifies the contrast between the speaker's words and the soldiers' deeds (antithesis).", evidence: "what we say here ... what they did here", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the paradox that the speaker belittles his own speech to honour the dead, which creates humility.", evidence: "little note, nor long remember", marks: 1, markCode: "AO2" },
              { reasoning: "Notes the effect on the audience: they are led to value action over words and to feel reverence.", evidence: "can never forget", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Lincoln sets 'what we say' against 'what they did' in a balanced contrast. By saying the world will 'little note' his words, he humbly places the soldiers' actions above speech, which makes the audience feel reverence and adds weight to the word 'never'.",
            commonErrors: ["Paraphrasing the sentence with no comment on method.", "Calling it 'a persuasive technique' without naming or explaining it."],
          },
        },
        {
          id: "el11-u1-rhetoric-speeches-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LIBRARY,
          stem: "How does the speaker use rhetorical techniques to persuade the audience to oppose the closure of the library? Support your answer with evidence from the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical question and contrast", statement: "Asking what is gained and lost presents the closure as a bad bargain." },
              { kind: "technique", name: "Tricolon and imperatives", statement: "Lists of three and short commands generate momentum and urge action." },
              { kind: "skill", name: "Audience focus", statement: "Explain how each device affects the listeners in the room." },
            ],
            steps: [
              { reasoning: "Direct address and inclusive nouns ('Friends, neighbours, readers') create community and urgency from the start.", evidence: "Friends, neighbours, readers", marks: 2, markCode: "AO2" },
              { reasoning: "The rhetorical question, followed by minimal answers ('Tarmac. Silence.'), shows the council's plan to be empty and heartless, with the sentence fragments making the loss feel stark.", evidence: "What will a car park give us? Tarmac. Silence.", marks: 2, markCode: "AO2" },
              { reasoning: "Anaphora of 'A refuge ... A lifeline ... A door' appeals emotionally by individualising people who use the library; the final image of the door that 'never once asked anyone to pay' stresses fairness.", evidence: "A door that has never once asked anyone to pay", marks: 2, markCode: "AO2" },
              { reasoning: "The final binary question and three imperatives close with a clear choice and call to action, leaving the audience little room to be neutral.", evidence: "Tonight, stand up. Speak up. Vote no.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The speaker unites the audience with direct address, dramatises the loss through a rhetorical question and emotive triplet of benefits, and drives them to act with a stark choice and a crisp tricolon of commands.",
            levels: levels(8, "analysis of rhetorical techniques and their effect on the audience"),
            commonErrors: ["Feature-spotting ('there is a list of three') without effect.", "Ignoring the structure of the speech from opening to call to action.", "Quoting long chunks instead of key words."],
          },
        },
        {
          id: "el11-u1-rhetoric-speeches-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: LIBRARY,
          stem: "Read the whole of 'Keep the Lights On'.",
          parts: [
            { label: "a", prompt: "From the second paragraph, give two things the town would lose if the library closed.", marks: 2 },
            { label: "b", prompt: "Explain what the speaker means by 'Money is never missing; it is merely misplaced.'", marks: 4 },
            { label: "c", prompt: "How does the speaker use the structure of the speech to build to a persuasive conclusion? Support your answer with evidence from the extract.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select precise details from the stated paragraph." },
              { kind: "technique", name: "Antithesis and epigram", statement: "A balanced, memorable statement (the money epigram) turns a statistic into an accusation." },
              { kind: "technique", name: "Structure of a speech", statement: "Attention-grabbing opening, problem, rebuttal, then a rising call to action." },
            ],
            steps: [
              { part: "a", reasoning: "Credit 'a refuge for the child whose home is too loud for homework'.", evidence: "A refuge for the child", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Credit the lifeline for lonely pensioners or the free door.", evidence: "A lifeline for the pensioner", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Means the council claims there is no money, but funds exist and are being spent elsewhere.", evidence: "money was found, and quickly, for the new office block", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The antithesis 'never missing ... merely misplaced' turns the budget excuse into an accusation of bad priorities.", evidence: "never missing; it is merely misplaced", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The semicolon and balanced rhythm make the line memorable, like an epigram.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The reader hears the council's choices as deliberate, not forced, so the audience feels anger and distrust.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The opening direct address and 'ninety years' establish shared history and stakes before naming the threat.", evidence: "These shelves have held this town's stories for ninety years", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The middle section moves from emotional appeal (what we lose) to logical rebuttal of the council's excuses, with short sentences giving a brisk, confident rhythm.", evidence: "The council says the building is old. So is every good idea.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The shift to a rhetorical choice between two identities ('closed the door' or 'kept the lights on') personalises the decision as a matter of legacy and echoes the title, giving a cyclical frame.", evidence: "Or the one that kept the lights on?", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The accelerating imperatives at the end convert persuasion into action.", evidence: "stand up. Speak up. Vote no.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) A refuge for a child who cannot study at home; a lifeline for a lonely pensioner. (b) She means the council's claim of a tight budget is false, because money is found when it suits them: the library is a matter of priorities. (c) The speech moves from warm direct address and shared history, through contrast and rebuttal, to a personal choice and a rapid sequence of commands, with the title phrase reappearing in the closing question to create a satisfying circular shape.",
            levels: levels(10, "analysis of structure", "c"),
            commonErrors: ["In (c) writing about language only and ignoring structure.", "Describing the order of the speech without saying why it persuades.", "In (b) paraphrasing with no comment on the antithesis."],
          },
        },
      ],
    },
    {
      id: "el11-u1-integrating-analysis",
      title: "Integrating language and structure analysis",
      skill: "Write analysis that links word-level choices to the shape of the whole text and its effect on the reader.",
      lesson: {
        sections: [
          {
            heading: "Why integrate?",
            body: "Language and structure are not two separate lists. A single word means more because of where it sits: a short sentence after a long one, a shift in focus, a final image. Strong answers move between the two scales of the text in one paragraph and keep the effect on the reader at the centre.",
          },
          {
            heading: "A flexible paragraph model",
            body: "Try **Point, Evidence, Technique, Effect, Link (PETEL)**. State the point about writer's purpose or effect, embed a short quotation, name the technique precisely, explain the effect on the reader, then link to where the idea develops elsewhere in the text. The link sentence is what turns a paragraph about a word into an argument about structure.",
          },
          {
            heading: "Tracking the shape of a text",
            body: "Ask: where does the text begin and end? Where does the focus zoom in or out? Where does the tone shift? Does the text return to its opening? A **cyclical structure**, a **shift** from description to reflection, or an accumulation of detail leading to a climax all create meaning and can be cited as evidence.",
          },
        ],
        keyFormulas: [
          { name: "PETEL", statement: "Point, Evidence, Technique, Effect, Link: a paragraph model that joins language and structure." },
          { name: "Shift in focus", statement: "A change of subject, scale, time or tone that signals development in the writer's argument." },
          { name: "Cyclical structure", statement: "Ending with an echo of the opening to give a sense of closure or irony." },
        ],
        workedExample: {
          problem: "How does the writer of 'Keep the Lights On' use language and structure to build a sense of loss?",
          solution: "The speaker first creates the image of a haven, 'These shelves have held this town's stories for ninety years', in which the verb 'held' personifies the library as a protective guardian. This warm opening makes the abrupt blow of the final clause, 'a car park', feel brutal, and the short fragments that follow, 'Tarmac. Silence.', strip away every comfort in a clipped rhythm that mirrors the emptiness being described. The speech then moves from loss to a call for action, ending on 'kept the lights on', which echoes the title and turns a literal image into a symbol of hope. The movement from warm description to bare fragments, and back to a hopeful image, structures the audience's emotions from comfort through dread to resolve.",
        },
      },
      questions: [
        {
          id: "el11-u1-integrating-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIBRARY,
          stem: "Read the second paragraph. Which of these best describes the effect of the very short sentences 'Tarmac. Silence.' in the second paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They slow the speech down so that the audience can relax." },
              { id: "b", text: "They show the speaker is running out of ideas." },
              { id: "c", text: "They emphasise how empty and bleak the council's plan is." },
              { id: "d", text: "They create a warm, comforting atmosphere." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence length for effect", statement: "Minor sentences create emphasis and a blunt, stark rhythm." }],
            steps: [{ reasoning: "One-word minor sentences strip the car park to its bare features, conveying emptiness.", evidence: "Tarmac. Silence.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(c)** They emphasise how empty and bleak the plan is.",
            commonErrors: ["Treating short sentences as a sign of weak writing.", "Assuming short sentences are always fast or tense, rather than reading the context."],
          },
        },
        {
          id: "el11-u1-integrating-analysis-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: LIBRARY,
          stem: "Explain how the shift from the second paragraph to the third paragraph changes the way the speaker argues. Use short quotations in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Shift in focus", statement: "Track how an argument moves from one kind of appeal to another." }],
            steps: [
              { reasoning: "The second paragraph appeals to emotion by naming vulnerable people who depend on the library.", evidence: "A lifeline for the pensioner", marks: 1, markCode: "AO1" },
              { reasoning: "The third paragraph shifts to logic and rebuttal, answering the council's reasons directly.", evidence: "The council says the building is old", marks: 1, markCode: "AO2" },
              { reasoning: "The witty reversal makes the council's excuse sound weak.", evidence: "So is every good idea", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the combined effect: emotion wins sympathy, then logic removes the audience's possible objections.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The speaker moves from emotional appeal ('A lifeline for the pensioner') to rebuttal ('The council says the building is old. So is every good idea'). Pathos wins sympathy, then logic and wit remove the council's excuses.",
            commonErrors: ["Describing both paragraphs without comparing them.", "Using no quotations."],
          },
        },
        {
          id: "el11-u1-integrating-analysis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GETTYSBURG,
          stem: "How does Lincoln use language and structure to present the soldiers' sacrifice as greater than the speech itself? Support your answer with evidence from the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "PETEL", statement: "Point, evidence, technique, effect, link joins language and structure in one paragraph." },
              { kind: "technique", name: "Climax", statement: "A rising sequence builds to the speaker's most important claim." },
            ],
            steps: [
              { reasoning: "The speech starts with the founding ideals and moves to the war, then to the dead, so the structure narrows from nation to individuals.", evidence: "Four score and seven years ago", marks: 2, markCode: "AO2" },
              { reasoning: "The anaphoric triplet climbs through ever more sacred verbs, culminating in 'hallow', before the turn 'But' reverses the claim to credit the dead.", evidence: "we can not dedicate, we can not consecrate, we can not hallow", marks: 2, markCode: "AO2" },
              { reasoning: "Reference to 'our poor power to add or detract' makes the speaker modest, using self-effacement to raise the soldiers' status.", evidence: "our poor power to add or detract", marks: 2, markCode: "AO2" },
              { reasoning: "The final antithesis places words beneath deeds and ends the extract on action, which leaves the audience feeling reverence.", evidence: "what we say here ... what they did here", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "Lincoln structures the extract from national ideals to the battlefield to the dead. The climbing triplet and the turn at 'But' make the soldiers' consecration exceed ceremony, while the speaker's modest language and final antithesis place deeds above words.",
            levels: levels(8, "integration of language and structure"),
            commonErrors: ["Treating the extract as a list of techniques with no overview of shape.", "Paraphrasing the speech rather than analysing."],
          },
        },
        {
          id: "el11-u1-integrating-analysis-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: LIBRARY,
          stem: "Read the whole of 'Keep the Lights On'.",
          parts: [
            { label: "a", prompt: "Give two reasons the council gives for closing the library.", marks: 2 },
            { label: "b", prompt: "Explain how the speaker presents the library in the opening paragraph.", marks: 4 },
            { label: "c", prompt: "Analyse how the writer uses language and structure to persuade the audience to act. Write a developed answer with several quotations.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Pick the reasons actually given in the speech." },
              { kind: "technique", name: "Personification", statement: "Shelves that 'hold' stories are given the guardianship of a person." },
              { kind: "skill", name: "PETEL", statement: "Join language, structure and effect for each point." },
            ],
            steps: [
              { part: "a", reasoning: "The building is old.", evidence: "The council says the building is old", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The budget is tight.", evidence: "They say the budget is tight", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "As a treasured, long-standing guardian of community memory.", evidence: "held this town's stories for ninety years", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The verb 'held' is a personification that suggests care and protection.", evidence: "held", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The contrast with the sudden threat 'a car park' makes the library appear vulnerable.", evidence: "turn them into a car park", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The inclusive 'this town's' makes the library a shared possession, so the audience feels personally affected.", evidence: "this town's stories", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Opening direct address and inclusive pronouns forge a collective identity.", evidence: "Friends, neighbours, readers", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Contrasting lists of gain and loss, with minimal 'Tarmac. Silence.' versus vivid human beneficiaries, exploit pathos and make the closure seem inhuman.", evidence: "A refuge for the child", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Rebuttal paragraph uses wit and antithesis to dismantle the opposition, shifting the structure to logic.", evidence: "Money is never missing; it is merely misplaced", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Closing choice, cyclical echo of the title and imperative tricolon bring the speech to a decisive call to action.", evidence: "kept the lights on", marks: 4, markCode: "AO2" },
            ],
            finalAnswer: "(a) The building is old; the budget is tight. (b) The library is presented as a cherished guardian of the town's memory: 'held' personifies the shelves, while 'ninety years' and 'this town's' stress history and shared ownership, so the threat of a car park shocks. (c) A strong answer traces the speech from collective address, through emotional contrast and clever rebuttal, to a binary choice and imperatives, linking each device to the audience's growing urgency and noting the circular echo of the title.",
            levels: levels(12, "integrated analysis of language and structure", "c"),
            commonErrors: ["In (a) copying a whole sentence.", "In (c) separate paragraphs on language and structure with no link.", "In (c) covering only the opening and ignoring the ending."],
          },
        },
      ],
    },
  ],
};
