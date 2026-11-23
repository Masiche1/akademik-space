import type { Lesson } from "../../../types.ts";

const CHARITY_AD = {
  title: "Advertisement: 'Give a Child a Tomorrow'",
  author: "Harbour Aid Trust",
  source: "Original charity advertisement",
  text: "Every year, 12 million children in our region start school without the basic tools they need. A pencil case costs less than your morning coffee. A uniform costs less than a pizza night.\n\nThis October, Harbour Aid Trust needs your help. Donate online, by text, or at any collection point. Every pound provides a child with books, uniforms and a fair start.\n\nDon't let another child begin the year without hope. Give a child a tomorrow — donate today.",
};

const HEADLINE_PAIR = {
  title: "Two Headlines, One Story",
  author: "Written for Akademik Space",
  source: "Original headlines for analysis",
  text: "Headline A: 'Council U-turn as cycle lane plan shelved after resident backlash'\n\nHeadline B: 'Cycle lane abandoned: thousands say project was badly designed'\n\nBoth headlines report the same council decision. Headline A reports what happened and why. Headline B adds an evaluative claim — 'thousands' and 'badly designed' — that the underlying story may not support.",
};

const REVIEW = {
  title: "Review: 'The Last Ferry' at the Grand Theatre",
  author: "A. Whitfield",
  source: "Original theatre review",
  text: "The Last Ferry had me gripping my seat for two hours — a rare thing for a play about a harbour town. The lead actor carried every scene with a quiet intensity that never tipped into showiness, and the harbour set, all ropes and lantern light, made the stage feel like somewhere you could actually get lost.\n\nThe second act sagged. A subplot about the ferry licence ran on too long and dulled the tension the first act had built so well. If the writer had cut twenty minutes, this would have been flawless.\n\nStill, the final image — the boat leaving as the lights go down — is worth the ticket alone. Four stars, and the best new play I've seen this year.",
};

const SPEECH = {
  title: "Extract from a Headteacher's Speech",
  author: "Written for Akademik Space",
  source: "Original speech extract",
  text: "When I started teaching thirty years ago, we were told technology would transform education. And it has — but not in the way anyone predicted. The tablet didn't replace the teacher; it replaced the textbook. The real transformation has been quieter: children who once struggled to stay seated now lean forward when a story is projected on the wall.\n\nI am not a believer in gadgets for gadgets' sake. But I am a believer in children. And children, it turns out, will learn anything if you find the door they walk through. Our job is not to force them through the door we built. It is to find theirs.",
};

export const lesson81: Lesson = {
  id: "el11-u8-lesson-8-1",
  code: "8-1",
  title: "Purpose, Audience and Bias in Media Texts",
  goal: "I CAN identify the purpose and intended audience of media texts, and explain how bias and persuasion shape their choices.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO1", "4EA1 AO2"],

  vocabulary: [
    { term: "Purpose", definition: "The overall aim a writer or producer has for a text: to inform, persuade, sell, entertain or evaluate." },
    { term: "Audience", definition: "The group a media text is designed to reach, which determines its tone, vocabulary and platform." },
    { term: "Bias", definition: "A tendency to favour one side or viewpoint, shown through selection, language and omission." },
    { term: "Sensationalism", definition: "Emphasis on dramatic or shocking detail to attract attention rather than inform accurately." },
    { term: "Persuasive technique", definition: "A deliberate choice — emotive language, statistics, expert appeal — designed to influence the reader." },
    { term: "Omission", definition: "Leaving out information that would give a fuller or fairer picture of an event." },
  ],
  concepts: [
    {
      id: "el11-u8-media-purpose",
      title: "Purpose, audience and bias in adverts and headlines",
      skill: "Identify the purpose and audience of an advertisement or headline, and explain how bias or persuasion shapes it.",
      lesson: {
        sections: [
          {
            heading: "Reading adverts and headlines",
            body: "Every advert and headline has a **purpose** (sell a product, raise money, win votes) and an **audience** (parents, donors, voters, commuters). Ask what the text wants from you: an advert wants money or clicks, a headline wants readers. Then ask who it assumes you are — its register, vocabulary and assumptions reveal the audience.",
          },
          {
            heading: "Spotting bias",
            body: "Bias shows through **word choice** ('backlash' versus 'concerns'), **selection** (which facts are included), **omission** (what is left out), and **generalisation** ('thousands say' without a source). A headline can be technically true and still biased by what it emphasises or buries.",
          },
          {
            heading: "Building the answer",
            body: "Use the chain: **purpose** (what the text wants), **audience** (who it addresses), **technique** (how it persuades) and **evidence** (a quotation). For bias questions, always name the missing or slanted element, not just the present one.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "The overall aim of a media text: to inform, persuade, sell, entertain or evaluate a particular audience." },
          { name: "Bias", statement: "A tendency to favour one side, revealed through word choice, selection, omission and generalisation." },
          { name: "Sensationalism", statement: "Emphasis on dramatic detail to attract attention, often at the cost of accuracy." },
        ],
        workedExample: {
          problem: "How does 'Give a Child a Tomorrow' persuade its audience?",
          solution: "The charity advert aims to raise donations, targeting people who can give 'less than your morning coffee'. It uses comparison to shrink the cost ('a pencil case costs less than your morning coffee'), emotive framing ('12 million children', 'without hope'), urgency ('donate today') and inclusive verbs ('Give', 'your help'). The audience is reassured by concreteness — named charity, multiple donation methods — while guilt and hope do the persuading.",
        },
      },
      questions: [
        {
          id: "el11-u8-media-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CHARITY_AD,
          stem: "What is the main purpose of 'Give a Child a Tomorrow'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To explain how school funding works." },
              { id: "b", text: "To persuade readers to donate to the charity." },
              { id: "c", text: "To criticise the education system." },
              { id: "d", text: "To advertise stationery products." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "A writer's purpose is the overall aim of the text." },
            ],
            steps: [
              { reasoning: "The advert repeatedly asks for donations ('Donate online', 'Give a child a tomorrow'), so its aim is to win money for the charity.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To persuade readers to donate to the charity.",
            commonErrors: ["Choosing (a) because the text mentions school; education is the cause, not the purpose.", "Choosing (d) because stationery is named; products are examples of what donations buy."],
          },
        },
        {
          id: "el11-u8-media-purpose-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: CHARITY_AD,
          stem: "Who is the intended audience of the advert, and what feature of the language shows this? Give two points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience identification", statement: "Identify who a text addresses, then prove it with a feature of the writing." },
            ],
            steps: [
              { reasoning: "The audience is adults with disposable income — people who could give 'less than your morning coffee' or the cost of 'a pizza night'.", evidence: "less than your morning coffee", marks: 1, markCode: "AO1" },
              { reasoning: "The comparison to everyday spending assumes readers make small daily purchases, i.e. working adults with some spare money.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The audience is adults with small amounts of spare money; comparing donation costs to 'your morning coffee' and 'a pizza night' shows the writer expects readers who buy such things.",
            commonErrors: ["Naming 'children' as the audience — children are the beneficiaries, not the readers.", "Saying 'everyone' without linking a language feature."],
          },
        },
        {
          id: "el11-u8-media-purpose-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: CHARITY_AD,
          stem: "Explain two persuasive techniques the charity advert uses to encourage donations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotive language", statement: "Words chosen to trigger an emotional response rather than inform." },
              { kind: "technique", name: "Minimisation", statement: "Making the requested action seem small and achievable." },
            ],
            steps: [
              { reasoning: "It minimises the cost by comparing donations to small everyday treats — 'less than your morning coffee' — making giving seem effortless.", evidence: "less than your morning coffee", marks: 1, markCode: "AO2" },
              { reasoning: "It uses emotive statistics and framing ('12 million children', 'without hope') to make the problem feel urgent and personal.", marks: 1, markCode: "AO1" },
              { reasoning: "It creates urgency and a direct call to action with 'donate today' and the imperative 'Give a child a tomorrow'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The advert minimises the cost ('less than your morning coffee'), uses emotive statistics ('12 million children') and ends with a direct imperative call to action ('donate today').",
            commonErrors: ["Listing techniques without explaining their effect.", "Identifying information as persuasion — the statistics persuade but only when framed emotionally."],
          },
        },
        {
          id: "el11-u8-media-purpose-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: HEADLINE_PAIR,
          stem: "Explain how Headline B is more biased than Headline A, referring to specific words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word choice", statement: "A single adjective or quantifier can carry an evaluative load." },
              { kind: "skill", name: "Evidence-led analysis", statement: "Every claim about bias should be tied to a precise quotation." },
            ],
            steps: [
              { reasoning: "Headline A reports neutrally: 'shelved' and 'resident backlash' describe events without judging them.", evidence: "shelved after resident backlash", marks: 1, markCode: "AO1" },
              { reasoning: "Headline B adds an evaluative claim — 'badly designed' — which judges the project rather than reporting the decision.", evidence: "badly designed", marks: 1, markCode: "AO2" },
              { reasoning: "'thousands say' is an unverified generalisation; no source or figure is given, inflating the scale of opposition.", evidence: "thousands say", marks: 1, markCode: "AO1" },
              { reasoning: "'abandoned' is more emotive than 'shelved', suggesting carelessness rather than a considered reversal.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall, Headline B selects and frames details to make residents' objections look justified and the council look incompetent.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Headline B is more biased because 'badly designed' judges rather than reports, 'thousands say' is an unsourced generalisation and 'abandoned' is more emotive than 'shelved'.",
            commonErrors: ["Saying B is 'wrong' — bias is about framing, not necessarily falsehood.", "Comparing the stories rather than the headlines' language."],
          },
        },
        {
          id: "el11-u8-media-purpose-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: HEADLINE_PAIR,
          stem: "A pupil claims: 'Both headlines are equally biased because they cover the same story.' Evaluate this view.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluative argument", statement: "Weigh a claim against evidence, acknowledging partial truth." },
              { kind: "technique", name: "Degree of bias", statement: "Bias exists on a spectrum; compare degree, not just presence." },
            ],
            steps: [
              { reasoning: "There is partial truth: both headlines select the same event and both foreground resident opposition over other angles.", marks: 1, markCode: "AO1" },
              { reasoning: "However, degree matters: Headline A's 'shelved' and 'backlash' report without explicit judgement, while B's 'badly designed' and 'thousands say' add evaluation and an unsourced quantifier.", marks: 2, markCode: "AO2" },
              { reasoning: "A also attributes the reversal to 'resident backlash', which is a causal claim, so it is not perfectly neutral.", marks: 1, markCode: "AO1" },
              { reasoning: "Overall the pupil is half right — both frame the story around opposition — but wrong to call them equally biased, since B loads more evaluative and unverifiable language.", marks: 2, markCode: "AO1" },
            ],
                        levels: [
            { level: "Level 3", marks: "4-6", descriptor: "Evaluates the claim precisely — same story does not mean same purpose — with specific reference to how each headline frames the event." },
            { level: "Level 2", marks: "2-3", descriptor: "Challenges the claim but with limited analysis of purpose or framing." },
            { level: "Level 1", marks: "1", descriptor: "Agrees or disagrees without analysis." }
          ],
finalAnswer: "Partly true: both select the same oppositional angle, but Headline B is more biased through 'badly designed', 'thousands say' and 'abandoned', so they are not equally biased.",
            commonErrors: ["Agreeing or disagreeing without evidence.", "Ignoring that A also makes a causal claim ('after resident backlash')."],
          },
        },
        {
          id: "el11-u8-media-purpose-q6",
          difficulty: "core",
          totalMarks: 4,
          extract: CHARITY_AD,
          stem: "The charity advert says 'Every pound provides a child with books, uniforms and a fair start.' Explain how this sentence reassures donors while still persuading them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reassurance through specificity", statement: "Concrete outcomes make giving feel accountable rather than risky." },
              { kind: "technique", name: "Value framing", statement: "Linking money to a moral outcome ('a fair start') merges fact with persuasion." },
            ],
            steps: [
              { reasoning: "Listing concrete outcomes ('books, uniforms') shows donors exactly what their money buys, reducing uncertainty.", evidence: "books, uniforms", marks: 1, markCode: "AO2" },
              { reasoning: "'a fair start' adds a moral frame — it is not just goods but equality — which elevates the donation's meaning.", marks: 1, markCode: "AO1" },
              { reasoning: "The word 'Every' implies reliability and coverage, reassuring that no donation is wasted.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall the sentence balances reassurance (specific, accountable outcomes) with persuasion (moral framing), a typical advert strategy.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The sentence reassures by specifying concrete outcomes ('books, uniforms') and implying accountability ('Every pound'), while persuading through the moral frame 'a fair start'.",
            commonErrors: ["Calling it purely factual — 'a fair start' is evaluative.", "Missing the reassurance function entirely."],
          },
        },
      ],
    },
    {
      id: "el11-u8-persuasive-media",
      title: "Analysing speeches, reviews and articles",
      skill: "Analyse how speakers and writers use rhetorical techniques, evaluation and structure to persuade or inform an audience.",
      lesson: {
        sections: [
          {
            heading: "Techniques in spoken and written persuasion",
            body: "Speeches and articles persuade through **rhetorical questions**, **contrast** ('not the way anyone predicted'), **inclusive pronouns** ('our job', 'we were told'), **anecdote** and **emotive but controlled language**. Reviews evaluate through **balanced judgement** — praise and criticism held together — and **superlatives** ('the best new play I've seen this year').",
          },
          {
            heading: "Structure as persuasion",
            body: "Look at how the text is built: a speech may move from anecdote to claim to appeal; a review usually gives verdict-relevant detail before the final judgement. Structure signals confidence — a speaker who concedes a point ('I am not a believer in gadgets') then pivots to a stronger claim ('I am a believer in children') controls the audience's attention.",
          },
          {
            heading: "Building the answer",
            body: "Name the technique, quote it, then explain its effect on THIS audience. For reviews, distinguish description (what happens) from evaluation (what it is worth) — examiners reward that distinction.",
          },
        ],
        keyFormulas: [
          { name: "Rhetorical question", statement: "A question asked for effect, not an answer — it positions the audience to agree." },
          { name: "Concession and pivot", statement: "Admitting a limitation before asserting a stronger claim — builds credibility then redirects." },
          { name: "Balanced judgement", statement: "Holding praise and criticism together before a verdict — the mark of a credible review." },
        ],
        workedExample: {
          problem: "How does the headteacher persuade her audience in the speech extract?",
          solution: "She opens with a concession that disarms scepticism ('we were told technology would transform education... not in the way anyone predicted'), then pivots to a personal credo ('I am a believer in children'). Inclusive 'we' pulls the audience into shared experience, the anecdote of the wall-projection makes the claim concrete, and the closing aphorism ('find the door they walk through') gives a memorable, quotable conclusion. The structure — concession, anecdote, credo, aphorism — is a classic persuasive arc.",
        },
      },
      questions: [
        {
          id: "el11-u8-persuasive-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPEECH,
          stem: "What is the headteacher's main purpose in the speech extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To argue that schools should buy more tablets." },
              { id: "b", text: "To argue that education should focus on children, not technology." },
              { id: "c", text: "To describe how projection systems work in classrooms." },
              { id: "d", text: "To complain about parents' attitudes to homework." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "The overall aim of a text or speech." },
            ],
            steps: [
              { reasoning: "The speech concludes 'Our job is not to force them through the door we built. It is to find theirs' — arguing education should serve children's own ways of learning, not technology or systems.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To argue that education should focus on children, not technology.",
            commonErrors: ["Choosing (a) — technology is discussed but rejected as the main point.", "Choosing (c) — the projection anecdote is evidence, not the purpose."],
          },
        },
        {
          id: "el11-u8-persuasive-media-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: SPEECH,
          stem: "Identify two persuasive techniques in the speech extract and state their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Concession and pivot", statement: "Admitting a limitation before a stronger claim builds credibility." },
              { kind: "technique", name: "Inclusive pronouns", statement: "'We' and 'our' position speaker and audience as a shared group." },
            ],
            steps: [
              { reasoning: "She concedes technology's limits ('not in the way anyone predicted') then pivots to 'I am a believer in children', which strengthens her claim by contrast.", marks: 1, markCode: "AO2" },
              { reasoning: "She uses inclusive 'we' ('we were told', 'Our job') to make the audience complicit in the argument — the job is theirs too.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The speaker concedes a point about technology before pivoting to 'a believer in children', and uses inclusive 'we'/'our' to bind the audience to her argument.",
            commonErrors: ["Naming techniques without explaining effects.", "Missing the concession-pivot structure."],
          },
        },
        {
          id: "el11-u8-persuasive-media-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: REVIEW,
          stem: "Explain how the reviewer balances praise and criticism in the theatre review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balanced judgement", statement: "Holding praise and criticism together is the mark of a credible review." },
            ],
            steps: [
              { reasoning: "Praise is specific and evidenced: 'gripping my seat', 'quiet intensity', 'the best new play I've seen this year' — superlatives earned by detail.", evidence: "the best new play I've seen this year", marks: 1, markCode: "AO1" },
              { reasoning: "Criticism is equally specific: 'The second act sagged', 'ran on too long', with a constructive suggestion ('cut twenty minutes').", evidence: "cut twenty minutes", marks: 1, markCode: "AO1" },
              { reasoning: "The verdict ('Four stars') is proportional — high but not unqualified — showing the criticism genuinely moderated the praise.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The reviewer pairs specific praise ('quiet intensity', 'best new play') with equally specific criticism ('second act sagged', 'cut twenty minutes'), arriving at a qualified four-star verdict.",
            commonErrors: ["Listing likes and dislikes without analysing balance.", "Ignoring the evaluative verdict."],
          },
        },
        {
          id: "el11-u8-persuasive-media-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: SPEECH,
          stem: "A pupil says the speech is 'persuasive because it uses lots of emotional language'. Evaluate this judgement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluative argument", statement: "Weigh a claim against evidence from the text." },
              { kind: "technique", name: "Persuasion spectrum", statement: "Persuasion can be logical, ethical or emotional; evaluate which dominates." },
            ],
            steps: [
              { reasoning: "Partial truth: the speech does use emotive framing — 'gripped', 'credo', the vivid 'door they walk through' image.", marks: 1, markCode: "AO1" },
              { reasoning: "However, the dominant strategy is ethical/logical: concession ('not in the way anyone predicted') and anecdote (wall-projection) build credibility rather than raw emotion.", marks: 2, markCode: "AO2" },
              { reasoning: "The emotional peak is saved for the closing aphorism, a structural choice — emotion punctuates a mainly reasonable argument.", marks: 1, markCode: "AO1" },
              { reasoning: "Verdict: the pupil identifies a real feature but overstates it; the speech persuades mainly through credibility and structure, with emotion as seasoning.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Partly true: emotional language appears, but the speech persuades mainly through concession, anecdote and structure — emotion is the climax, not the method.",
            commonErrors: ["Agreeing fully without checking the balance of techniques.", "Claiming there is no emotion at all."],
          },
        },
        {
          id: "el11-u8-persuasive-media-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: REVIEW,
          stem: "Compare the ways the reviewer and the headteacher win their audiences. You should consider purpose, technique and structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel comparison", statement: "Keep the two texts strictly parallel: same point about each before moving on." },
              { kind: "technique", name: "Audience awareness", statement: "Each writer calibrates technique to what their audience will accept." },
            ],
            steps: [
              { reasoning: "Purposes differ: the reviewer judges a play for potential ticket-buyers; the headteacher argues a professional philosophy to colleagues and parents.", marks: 1, markCode: "AO1" },
              { reasoning: "The reviewer's technique is evaluative balance — specific praise and criticism held together until a four-star verdict.", marks: 1, markCode: "AO2" },
              { reasoning: "The headteacher's technique is concessive persuasion — admitting limits, then pivoting to a credo.", marks: 1, markCode: "AO2" },
              { reasoning: "Structurally, the review moves description → evaluation → verdict; the speech moves concession → anecdote → credo → aphorism.", marks: 1, markCode: "AO1" },
              { reasoning: "Both control audience response through structure: the review earns its verdict, the speech earns its conclusion.", marks: 1, markCode: "AO1" },
              { reasoning: "The review can afford qualified praise; the speech needs decisive conviction — each matches technique to stakes.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
            { level: "Level 3", marks: "4-6", descriptor: "Compares purpose, technique and structure in parallel, with specific evidence from both texts and a clear overall judgement." },
            { level: "Level 2", marks: "2-3", descriptor: "Some comparison of the two texts but uneven coverage of the required aspects." },
            { level: "Level 1", marks: "1", descriptor: "Describes the texts separately without comparing, or comparison is vague." }
          ],
finalAnswer: "The reviewer wins through balanced, evidence-led evaluation ending in a verdict; the headteacher wins through concession, anecdote and a memorable credo — different structures for different purposes.",
            commonErrors: ["Comparing topics rather than methods.", "Ignoring structure entirely."],
          },
        },
        {
          id: "el11-u8-persuasive-media-q6",
          difficulty: "core",
          totalMarks: 4,
          extract: SPEECH,
          stem: "Explain the effect of the headteacher's final sentence: 'Our job is not to force them through the door we built. It is to find theirs.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Aphorism", statement: "A short, memorable formulation that crystallises the argument's message." },
              { kind: "technique", name: "Antithesis", statement: "Contrasting two balanced clauses to sharpen the point." },
            ],
            steps: [
              { reasoning: "The antithesis 'not to force... It is to find' sharpens the distinction between system-led and child-led education.", evidence: "not to force them through the door we built", marks: 1, markCode: "AO2" },
              { reasoning: "The extended metaphor of 'the door' makes an abstract idea concrete and visual — teachers literally find each child's entrance.", marks: 1, markCode: "AO1" },
              { reasoning: "As the closing line it functions as an aphorism — compact, quotable, and emotionally resonant, leaving the audience with the credo.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall it converts the speech's argument into a memorable principle the audience can repeat.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The final sentence uses antithesis and the 'door' metaphor to crystallise the speech's credo — education should find each child's own way in — and ends memorably enough to be repeated.",
            commonErrors: ["Paraphrasing without analysing technique.", "Missing the structural role of a closing aphorism."],
          },
        },
      ],
    },
  ],
  notes: [
    "Media texts are everywhere in Paper 1 Section B — practise identifying purpose and audience in the first minute of any text.",
    "For bias questions, always argue degree: 'more/less biased because...' beats 'biased because...'.",
  ],
};
