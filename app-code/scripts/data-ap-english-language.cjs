// AP English Language and Composition — rhetorical analysis, argument, synthesis. Spec for scripts/gen-us-elementary.cjs.
// English rules: AO1-AO5 mark codes, English principle kinds only, no "$" characters anywhere.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "AO2", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const sumMarks = (steps) => steps.reduce((a, s) => a + s.marks, 0);
const mcq = (difficulty, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks: sumMarks(steps), stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, stem, principles, steps, finalAnswer, commonErrors, extract, levels) => ({
  difficulty, totalMarks: sumMarks(steps), stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}), ...(extract ? { extract } : {}), ...(levels ? { levels } : {}),
});
const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });

const apEngLang = {
  id: "ap-english-language",
  exportName: "apEnglishLanguage",
  prefix: "apel",
  title: "AP English Language and Composition",
  shortTitle: "AP Lang",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description:
    "Rhetorical analysis, argumentative and synthesis writing — the AP English Language exam in exam-style questions with scored practice responses.",
  ap: { exam: "english-language" },
  units: [
    {
      id: "apel-u1",
      title: "Rhetorical Analysis",
      description: "Identify and analyze claims, evidence, appeals, and stylistic choices in nonfiction texts.",
      lessons: [
        lesson("claims-evidence", "Claims, Evidence, and Appeals", "I CAN identify an author's claim and evaluate how evidence and appeals support it.", ["AP Lang 1.x"],
          [["Claim", "The central argument or position an author advances."], ["Evidence", "Facts, examples, data, or testimony used to support a claim."], ["Ethos", "Appeal to credibility — the speaker's character or authority."], ["Pathos", "Appeal to emotion — intended to make readers feel."], ["Logos", "Appeal to logic — reasoning, evidence, and structure."], ["Warrant", "The unstated assumption connecting evidence to claim."]],
          {
            title: "Claims, evidence, and appeals",
            skill: "Identify the claim and analyze the rhetorical strategies supporting it.",
            sections: [
              ["Claims and warrants", "Every argument rests on a **claim** supported by **evidence**. The connection between them is the **warrant** — often unstated. Strong analysis asks: what assumption must a reader accept for this evidence to prove the claim? Challenging the warrant is often the sharpest critical move."],
              ["The rhetorical appeals", "**Ethos** builds credibility through expertise, character, or shared values. **Pathos** engages emotion — vivid imagery, personal anecdote, charged language. **Logos** relies on logic — statistics, causal reasoning, analogies. Most effective arguments blend all three; analysis should identify which dominates and why."],
            ],
            formulas: [
              ["Appeals", "Ethos = credibility; pathos = emotion; logos = logic"],
              ["Warrant", "Unstated link between evidence and claim"],
            ],
            worked: {
              problem: "A columnist writes: 'As a nurse for twenty years, I can tell you that vaccination saves lives — last year my ward saw three unvaccinated children nearly die of measles.' Identify claim, evidence, appeal.",
              solution: "Claim: vaccination saves lives. Evidence: twenty years of experience and three specific cases. Appeals: ethos (professional credibility as a nurse) blended with pathos (vivid, emotional cases).",
            },
            questions: [
              mcq("foundation", "An appeal to the speaker's credibility or authority is ___.", [["a", "pathos"], ["b", "ethos"], ["c", "logos"], ["d", "kairos"]], "b",
                [P("definition", "Ethos", "Credibility-based appeal.")],
                [S("Ethos relies on the speaker's character, expertise, or trustworthiness.", 1, "AO1")], "Ethos", ["Confusing ethos with the other appeals."]),
              mcq("core", "A writer cites 'studies show' repeatedly without naming them. This weakens ___.", [["a", "ethos"], ["b", "logos — unverifiable evidence"], ["c", "pathos"], ["d", "the claim itself"]], "b",
                [P("context", "Evidence quality", "Vague sourcing undermines logical appeal.")],
                [S("Unverifiable 'studies' weaken logos — readers cannot evaluate the reasoning.", 1, "AO2")], "Logos", ["Thinking named studies are required for ethos."]),
              op("core", "Identify the claim, one piece of evidence, and one appeal in this sentence: 'Having buried dozens of neighbors lost to smoking, I urge every parent: ban flavored vapes from schools before another child is hooked.'",
                [P("skill", "Rhetorical identification", "Claim + evidence + appeal in one sentence.")],
                [S("Claim: flavored vapes should be banned from schools.", 1, "AO1"), S("Evidence: 'dozens of neighbors lost to smoking' — anecdotal loss; appeal: pathos (grief, parental fear) with implied ethos of community member.", 1, "AO2")], "Claim: ban vapes; evidence: neighbors' deaths; appeal: pathos/ethos", ["Missing that the claim is embedded in the imperative 'urge'."]),
              op("challenge", "Analyze how an author might use a concession ('I grant that opponents have a point, but...') rhetorically. Explain both its risk and benefit.",
                [P("technique", "Concession", "Acknowledging opposing view builds ethos."), P("skill", "Strategic analysis", "Appears fair while steering back to claim.")],
                [S("Concession acknowledges the opposing side — builds ethos by appearing fair-minded and strengthens the eventual rebuttal.", 1, "AO2"), S("Risk: if the concession is too generous, it can undermine the author's own position; if too token, it looks insincere.", 1, "AO2"), S("Benefit: it pre-empts counterarguments and makes the author's claim seem more reasonable by contrast.", 1, "AO3")], "Concession builds ethos and pre-empts rebuttal, but risks weakening the claim", ["Treating concession as weakness rather than strategy."]),
            ],
          }),
        lesson("style-devices", "Style and Rhetorical Devices", "I CAN analyze diction, syntax, imagery, and figurative language.", ["AP Lang 2.x"],
          [["Diction", "Word choice — formal/informal, concrete/abstract, denotative/connotative."], ["Syntax", "Sentence structure — length, variety, parallelism, periodic vs cumulative."], ["Imagery", "Sensory language appealing to sight, sound, touch, taste, smell."], ["Metaphor", "Direct comparison: 'the classroom was a battlefield'."], ["Simile", "Comparison with 'like' or 'as'."], ["Tone", "The author's attitude toward subject and audience."], ["Parallelism", "Repeated grammatical structure for emphasis and rhythm."]],
          {
            title: "Analyzing style",
            skill: "Connect specific language choices to rhetorical effect.",
            sections: [
              ["Diction and tone", "Word choice carries attitude: 'slim' vs 'scrawny', 'frugal' vs 'cheap'. Analyzing diction means naming the specific words and explaining their connotation and cumulative effect on tone — not just labeling tone as 'angry' or 'sarcastic'."],
              ["Syntax and figures", "Sentence structure controls pace: short declaratives punch; long periodic sentences build suspense. **Parallelism** creates rhythm and emphasis ('of the people, by the people, for the people'). **Imagery** makes abstractions concrete. Strong analysis always links device to effect to purpose."],
            ],
            formulas: [
              ["Analysis chain", "Device → specific example → effect → purpose"],
              ["Tone", "Attitude conveyed through diction, syntax, imagery"],
            ],
            worked: {
              problem: "Analyze: 'The bill died quietly in committee, its supporters' hopes buried with it.'",
              solution: "Metaphor ('died', 'buried') personifies legislation, framing defeat as death — likely mocking or lamenting tone. The quiet adverbs suggest ineffectuality or resignation.",
            },
            questions: [
              mcq("foundation", "The repetition of 'We shall fight on the beaches, we shall fight on the landing grounds' is ___.", [["a", "metaphor"], ["b", "parallelism"], ["c", "synecdoche"], ["d", "hyperbole"]], "b",
                [P("definition", "Parallelism", "Repeated grammatical structure.")],
                [S("Repeated 'we shall fight on...' structure creates rhythm and mounting determination.", 1, "AO1")], "Parallelism", ["Calling every repetition a metaphor."]),
              mcq("core", "In analysis, 'diction' refers to ___.", [["a", "sentence length"], ["b", "word choice and its connotations"], ["c", "paragraph structure"], ["d", "punctuation"]], "b",
                [P("definition", "Diction", "The selection of words and their associations.")],
                [S("Diction analysis examines specific word choices and their connotative weight.", 1, "AO1")], "(b)", ["Confusing diction with syntax."]),
              op("core", "Analyze the effect of this sentence's structure: 'Short sentences. Then longer ones that wind through qualifications until the reader almost loses the point — and then, suddenly, the verdict.'",
                [P("technique", "Syntax variation", "Short-to-long shift controls pacing."), P("skill", "Effect analysis", "Structure mimics the suspense described.")],
                [S("The opening fragments and short sentences create abrupt tension; the winding long sentence enacts the 'qualifications' it describes.", 1, "AO2"), S("The final short sentence delivers the 'verdict' with punch — form mirrors content.", 1, "AO2")], "Syntax mirrors suspense; short verdict lands hard", ["Describing devices without linking to effect."]),
              op("challenge", "A student writes: 'The author uses imagery.' Rewrite this as a strong analytical sentence that names the specific image, its sensory quality, and its effect.",
                [P("skill", "Specific analysis", "Name device + content + effect."), P("convention", "Analytical writing", "Avoid vague labels.")],
                [S("Weak version labels without analyzing; strong version must specify WHICH imagery, WHAT sense it engages, and WHAT effect it creates.", 1, "AO2"), S("Model: 'The olfactory image of \"burning sugar\" converts abstract dread into a bodily sensation, making the character's anxiety physically present to the reader.'", 1, "AO2"), S("The rewrite demonstrates device + sensory detail + effect — the full analysis chain.", 1, "AO4")], "Name the image, sensory channel, and effect — not just 'imagery'", ["Keeping the vague label 'imagery' without specifics."]),
            ],
          }),
        lesson("rhetorical-analysis-frq", "The Rhetorical Analysis Essay", "I CAN structure a rhetorical analysis essay with a defensible thesis and integrated evidence.", ["AP Lang 3.x"],
          [["Rhetorical analysis", "Examining HOW a text persuades — the author's choices, not whether you agree."], ["Thesis", "A defensible claim about the author's rhetorical strategies and their effect."], ["SOAPSTone", "Speaker, Occasion, Audience, Purpose, Subject, Tone — context for analysis."], ["Rhetorical situation", "The context (speaker, audience, purpose, occasion) shaping every text."], ["Integration", "Weaving quotations into your own sentences with commentary."], ["Commentary", "Your explanation of how evidence supports the thesis — the analytical 'so what'."]],
          {
            title: "Writing the rhetorical analysis",
            skill: "Construct a thesis and body paragraphs that analyze strategy, not content.",
            sections: [
              ["The analysis stance", "Rhetorical analysis asks HOW the text works, not WHAT it says or whether you agree. A strong thesis names the author's strategy and its effect: 'Through sustained medical metaphor and second-person address, Smith reframes vaccination as a civic duty rather than a personal choice.'"],
              ["Structure and commentary", "Intro: context (SOAPSTone) + thesis. Body paragraphs: one strategy each — introduce the device, quote precisely, analyze its effect on THIS audience for THIS purpose, connect back to thesis. Commentary is the engine: every quotation needs 2-3 sentences of 'how' and 'why it matters'."],
            ],
            formulas: [
              ["Thesis formula", "Author + strategy + effect on audience/purpose"],
              ["Paragraph pattern", "Device → quote → analysis → thesis link"],
            ],
            worked: {
              problem: "Write a thesis for an analysis of a speech using statistics and emotional anecdotes.",
              solution: "'By alternating cold statistical evidence with intimate anecdote, the speaker constructs vaccination as both a rational imperative and a moral obligation, making refusal seem simultaneously foolish and cruel.'",
            },
            questions: [
              mcq("foundation", "A rhetorical analysis essay focuses on ___.", [["a", "whether the argument is correct"], ["b", "how the author persuades"], ["c", "summarizing the text"], ["d", "the author's biography"]], "b",
                [P("definition", "Rhetorical analysis", "Analyze strategies and effects, not truth or summary.")],
                [S("The task is analyzing HOW persuasion works — devices, appeals, audience adaptation.", 1, "AO1")], "(b)", ["Confusing analysis with summary or agreement."]),
              mcq("core", "SOAPSTone stands for ___.", [["a", "a text's grammatical features"], ["b", "Speaker, Occasion, Audience, Purpose, Subject, Tone"], ["c", "the five appeals"], ["d", "essay paragraph types"]], "b",
                [P("definition", "SOAPSTone", "Framework for rhetorical situation.")],
                [S("Speaker, Occasion, Audience, Purpose, Subject, Tone — establishes context for analysis.", 1, "AO1")], "(b)", ["Misremembering the acronym's components."]),
              op("core", "Write a thesis sentence analyzing a hypothetical editorial that uses personal narrative and statistical evidence to argue for later school start times.",
                [P("skill", "Thesis construction", "Author + strategy + effect."), P("convention", "Defensible claim", "Must be arguable, not obvious.")],
                [S("Thesis must name the dual strategy (narrative + data) and its combined effect on the audience.", 1, "AO4"), S("Model: 'By grounding statistical evidence in a student's firsthand account of exhaustion, the editorial transforms abstract policy data into an urgent moral claim about adolescent wellbeing.'", 1, "AO4"), S("Thesis is specific, arguable, and names strategy plus effect — not a summary.", 1, "AO2")], "Thesis naming strategy + audience effect, e.g., 'narrative humanizes data into moral urgency'", ["Writing 'The author uses evidence' — too vague to analyze."]),
              op("challenge", "Read this passage and write a thesis for a rhetorical analysis of the writer's strategies.",
                [P("skill", "Thesis from text", "Identify strategy and effect."), P("context", "Rhetorical situation", "Bureaucratic dismissal vs personal concern."), P("technique", "Juxtaposition/irony", "Mass-produced 'concern' vs individual address.")],
                [S("Identifies the central strategy: cataloging impersonal form letters against the personal 'Dear concerned citizen' salutation — bureaucratic mass production versus genuine individual concern.", 2, "AO2"), S("Thesis articulates the effect: the irony exposes institutional indifference masquerading as responsiveness.", 2, "AO2"), S("Thesis is defensible and specific — names strategy (catalog/juxtaposition) and effect (exposing bureaucratic indifference).", 2, "AO4"), S("Response demonstrates sophisticated understanding of how form mirrors content.", 2, "AO3")],
                "Sample thesis: 'Through the cataloging of identical form letters, the writer exposes bureaucratic indifference masquerading as concern — mass-produced sympathy that addresses no one.'",
                ["Thesis summarizes rather than analyzes the rhetoric."],
                { title: "Passage for analysis", author: "Written for Akademik Space", text: "Every autumn, the same letters arrive.\n\nDear concerned citizen, our records show...\n\nYours sincerely, the Board.\n\nThe writer catalogs these identical form letters — each bearing a different bureaucratic form number — then concludes: 'A thousand copies of concern, none of it addressed to me.'" },
                [
                  { level: "Level 4", marks: "7-8", descriptor: "Thesis precisely names the rhetorical strategy (cataloging/juxtaposition of form letters) and its effect (exposing bureaucratic indifference); analysis is sophisticated and specific to the text." },
                  { level: "Level 3", marks: "5-6", descriptor: "Thesis identifies a relevant strategy and effect but is somewhat general; analysis engages the text but misses nuance." },
                  { level: "Level 2", marks: "3-4", descriptor: "Thesis gestures at theme or summarizes content rather than analyzing rhetoric; limited strategic insight." },
                  { level: "Level 1", marks: "1-2", descriptor: "Minimal or irrelevant response; merely summarizes the passage or states an obvious observation." },
                ]),
            ],
          }),
      ],
    },
    {
      id: "apel-u2",
      title: "Argumentative and Synthesis Writing",
      description: "Building arguments with evidence and synthesizing multiple sources.",
      lessons: [
        lesson("argument-structure", "Building an Argument", "I CAN construct a thesis-driven argument with reasoning and evidence.", ["AP Lang 4.x"],
          [["Argument", "A reasoned position supported by evidence and reasoning."], ["Reasoning", "The logical connection explaining HOW evidence supports the claim."], ["Evidence", "Facts, examples, data, expert testimony, or textual details."], ["Counterargument", "The strongest opposing position — addressing it strengthens your argument."], ["Refutation", "Explaining why the counterargument fails or is insufficient."], ["Qualifiers", "Words like 'often', 'in most cases' — show intellectual honesty."]],
          {
            title: "Argument structure",
            skill: "Develop claims with reasoning, evidence, and counterargument.",
            sections: [
              ["The argument engine", "Claim → reasoning → evidence. Reasoning is the often-neglected middle: it explains WHY the evidence proves the claim. 'Studies show X' is weak; 'Because X operates through mechanism Y, we should expect Z' is strong."],
              ["Counterargument and nuance", "Addressing the strongest opposing view demonstrates intellectual honesty and strengthens your position. Effective refutation concedes what's true in the opposition, then shows why your claim still prevails. Strategic qualifiers ('in most cases', 'when resources allow') make arguments more defensible."],
            ],
            formulas: [
              ["Argument chain", "Claim → reasoning → evidence"],
              ["Refutation", "Concede → distinguish → rebut"],
            ],
            worked: {
              problem: "Strengthen: 'Schools should start later because students are tired.'",
              solution: "Add reasoning and evidence: 'Later start times align the school day with adolescent circadian rhythms, which shift roughly two hours during puberty — a biological reality, not a preference. Districts that delayed start saw measurable gains in attendance and grades.'",
            },
            questions: [
              mcq("foundation", "The strongest element distinguishing a good argument from an assertion is ___.", [["a", "strong feelings"], ["b", "reasoning connecting evidence to claim"], ["c", "long sentences"], ["d", "expert quotes"]], "b",
                [P("context", "Reasoning", "The 'how' and 'why' linking evidence to claim.")],
                [S("Reasoning transforms evidence into argument — it's the analytical middle most students skip.", 1, "AO2")], "(b)", ["Thinking evidence alone makes an argument."]),
              mcq("core", "A concession in an argument ___.", [["a", "weakens your position"], ["b", "acknowledges a point of the opposition strategically"], ["c", "changes your thesis"], ["d", "is never useful"]], "b",
                [P("technique", "Concession", "Strategic acknowledgment builds credibility.")],
                [S("Conceding a limited point strengthens ethos and pre-empts rebuttal — weakness only if you concede your core claim.", 1, "AO2")], "(b)", ["Thinking any concession loses the argument."]),
              op("core", "Write the reasoning link for this claim-evidence pair: Claim: 'The city should expand public transit.' Evidence: 'Bus ridership rose 15% last year.'",
                [P("skill", "Reasoning", "Explain the mechanism connecting evidence to claim.")],
                [S("Weak: restates evidence. Strong: 'Ridership growth demonstrates latent demand — expanding service would convert occasional riders into regular commuters, reducing road congestion and emissions.'", 1, "AO2"), S("The reasoning links observed demand to projected outcomes — the 'so what' of the evidence.", 1, "AO4")], "Reasoning: ridership growth shows unmet demand that expansion would serve", ["Just repeating the statistic without explaining its significance."]),
              op("challenge", "Explain why addressing a counterargument usually strengthens rather than weakens an argument, and describe how to do it effectively.",
                [P("context", "Counterargument", "Acknowledging opposition builds ethos."), P("skill", "Refutation", "Concede-then-distinguish-then-rebut.")],
                [S("Addressing counterarguments shows you've considered the issue fully — enhances ethos and pre-empts objections readers might raise.", 1, "AO3"), S("Effective refutation concedes the valid part, distinguishes your context, then shows why your claim still holds.", 1, "AO2"), S("Ignoring the opposition entirely leaves your argument vulnerable — readers supply the counterargument themselves.", 1, "AO3")], "Counterargument strengthens ethos; concede-distinguish-rebut", ["Thinking counterarguments only give opponents ammunition."]),
            ],
          }),
        lesson("synthesis-writing", "Synthesis Writing", "I CAN integrate multiple sources into a coherent argument.", ["AP Lang 5.x"],
          [["Synthesis", "Combining ideas from multiple sources into your own argument."], ["Source integration", "Introducing, quoting, paraphrasing, and citing sources."], ["Attribution", "Crediting source ideas — required for academic integrity."], ["Source tension", "Sources that agree, complicate, or contradict each other."], ["Vox populi / straw man / either-or", "Rhetorical moves sources may use — recognize and respond."], ["Synthesis thesis", "Your own position built FROM sources, not a summary of them."]],
          {
            title: "Synthesis",
            skill: "Weave sources into an original argument with proper attribution.",
            sections: [
              ["Source integration", "Introduce sources by name and credibility ('According to Dr. Chen's longitudinal study...'), quote precisely when wording matters, paraphrase when exact language doesn't. Every source idea needs attribution — synthesis without citation is plagiarism."],
              ["Building your own argument", "A synthesis thesis is YOUR position informed by sources — not 'Source A says X, Source B says Y'. Group sources by their relationship to your claim: supporting, complicating, contradicting. Address tensions directly — acknowledging complexity strengthens credibility."],
            ],
            formulas: [
              ["Synthesis pattern", "Your claim → source support → source complication → your resolution"],
              ["Integration", "Introduce → quote/paraphrase → explain significance"],
            ],
            worked: {
              problem: "Source 1: 'Remote work increases productivity 13%.' Source 2: 'Remote workers report higher isolation.' Write a synthesis thesis on remote work.",
              solution: "'While remote work demonstrably boosts productivity metrics, its isolation costs suggest hybrid models — not fully remote or fully office — best serve both output and wellbeing.'",
            },
            questions: [
              mcq("foundation", "In synthesis, sources should ___.", [["a", "be summarized one by one"], ["b", "support and complicate YOUR argument"], ["c", "replace your own voice"], ["d", "be ignored if they disagree"]], "b",
                [P("definition", "Synthesis", "Your argument built from multiple sources.")],
                [S("Sources serve YOUR thesis — you orchestrate them, not the reverse.", 1, "AO1")], "(b)", ["Writing a source-by-source summary instead of synthesis."]),
              mcq("core", "Two sources contradict each other on a key point. The best response is ___.", [["a", "ignore both"], ["b", "choose one and dismiss the other"], ["c", "acknowledge the tension and explain how it informs your position"], ["d", "average their claims"]], "c",
                [P("skill", "Source tension", "Contradictions reveal complexity — engage them.")],
                [S("Acknowledging tension demonstrates sophistication; your thesis can account for both.", 1, "AO2")], "(c)", ["Pretending sources agree or arbitrarily picking one."]),
              op("core", "Write one sentence that integrates this source into an argument about screen time: Source: 'The average teen spends 7+ hours daily on screens (Pew Research, 2023).'",
                [P("skill", "Source integration", "Introduce + cite + connect to claim.")],
                [S("Model: 'Pew Research's finding that teens average over seven daily screen hours (2023) suggests the problem isn't occasional use but structural saturation of daily life.'", 1, "AO4"), S("Integration includes attribution, exact data, and connection to argument — not just the quote.", 1, "AO2")], "Introduce source + data + connect to argument, e.g., 'Pew's 7-hour finding suggests structural saturation'", ["Quoting without attribution or context."]),
              op("challenge", "Explain the difference between summarizing sources and synthesizing them, and why synthesis earns higher scores.",
                [P("context", "Summary", "Reports what sources say."), P("context", "Synthesis", "Builds YOUR argument using sources.")],
                [S("Summary reports each source's content sequentially — descriptive, not analytical.", 1, "AO1"), S("Synthesis organizes sources around YOUR claim — selecting, arranging, and commenting on how they support or complicate your position.", 1, "AO2"), S("Synthesis demonstrates higher-order thinking: evaluation, organization, original argument — exactly what the exam rewards.", 1, "AO3")], "Synthesis = your argument using sources; summary = reporting sources", ["Thinking longer summaries score better — synthesis quality matters, not length."]),
            ],
          }),
      ],
    },
    {
      id: "apel-u3",
      title: "Style, Voice, and Exam Mastery",
      description: "Developing a distinctive style, using rhetorical questions and irony, and exam strategies.",
      lessons: [
        lesson("voice-style", "Developing Voice and Style", "I CAN use rhetorical questions, irony, and stylistic variation effectively.", ["AP Lang 6.x"],
          [["Voice", "The distinctive personality of the writer conveyed through style choices."], ["Rhetorical question", "Question asked for effect, not answer — engages reader."], ["Irony", "Saying one thing to mean another — creates distance and critique."], ["Understatement", "Deliberately saying less than reality — dry humor or irony."], ["Stylistic variation", "Mixing sentence lengths and structures for rhythm and emphasis."], ["Emphasis techniques", "Repetition, antithesis, tricolon, climax — devices that heighten impact."]],
          {
            title: "Voice and style",
            skill: "Use stylistic devices purposefully to create effect.",
            sections: [
              ["Voice through choices", "Voice emerges from consistent choices: sentence length patterns, vocabulary level, humor, formality, perspective. Analysis of voice asks HOW the writer's personality comes through — not just naming it 'witty' or 'formal'."],
              ["Powerful stylistic moves", "**Rhetorical questions** pull readers into the argument. **Irony** creates productive distance — saying 'What a relief' about disaster. **Understatement** ('a minor setback' after catastrophe) can be devastating. **Tricolon** (three-part structure) and **climax** (arranging items in increasing importance) build momentum."],
            ],
            formulas: [
              ["Voice", "Consistent pattern of stylistic choices"],
              ["Effect devices", "Question → engagement; irony → critique; understatement → dry emphasis"],
            ],
            worked: {
              problem: "Revise flat: 'The policy failed badly.' Add voice.",
              solution: "Options: understatement — 'The policy encountered difficulties.' Irony — 'The policy worked exactly as planned.' Rhetorical — 'Who could have predicted such a triumph?' Each creates different voice and effect.",
            },
            questions: [
              mcq("foundation", "Understatement involves ___.", [["a", "exaggerating for effect"], ["b", "deliberately minimizing for ironic effect"], ["c", "direct literal statement"], ["d", "formal vocabulary"]], "b",
                [P("definition", "Understatement", "Saying less than is true — often ironic.")],
                [S("Calling a disaster 'a bit inconvenient' minimizes deliberately for effect.", 1, "AO1")], "(b)", ["Confusing understatement with hyperbole."]),
              mcq("core", "A rhetorical question differs from a regular question because it ___.", [["a", "expects no answer — it's for effect"], ["b", "is always sarcastic"], ["c", "uses different grammar"], ["d", "must be answered"]], "a",
                [P("definition", "Rhetorical question", "Asked for effect, not information.")],
                [S("Rhetorical questions engage the reader's imagination rather than seeking an answer.", 1, "AO1")], "(a)", ["Thinking rhetorical questions are just questions with question marks."]),
              op("core", "Explain how a writer creates 'voice' through stylistic choices, giving two specific examples.",
                [P("context", "Voice", "Personality through consistent choices."), P("skill", "Example-driven analysis", "Show, don't just define.")],
                [S("Voice = the recognizable personality emerging from patterns: e.g., short punchy sentences create urgency; elevated vocabulary creates formality; first-person anecdotes create intimacy.", 1, "AO2"), S("Two distinct examples show HOW choices produce effect — e.g., 'The clipped syntax (\"We tried. We failed. We tried again.\") conveys grim determination.'", 1, "AO2")], "Voice emerges from consistent stylistic patterns creating recognizable personality", ["Defining voice without showing how choices create it."]),
              op("challenge", "Analyze this sentence's voice: 'Oh, splendid. Another meeting about meetings.'",
                [P("technique", "Irony", "Saying 'splendid' means the opposite."), P("skill", "Voice analysis", "Diction + punctuation + context reveal attitude.")],
                [S("'Splendid' is ironic — clearly meaning the opposite of splendid; the exclamation and period create sarcasm.", 1, "AO2"), S("The repetition of 'meeting' with the dismissive tone conveys weary cynicism — voice of someone fatigued by bureaucracy.", 1, "AO2"), S("Punctuation (period after exclamation-style opener) sharpens the deadpan effect.", 1, "AO2")], "Ironic 'splendid' + deadpan punctuation = cynical, weary voice", ["Reading 'splendid' literally or missing the irony."]),
            ],
          }),
        lesson("exam-strategies", "Exam Strategies and Timed Practice", "I CAN plan and execute the AP English Language exam efficiently.", ["AP Lang 7.x"],
          [["Exam format", "Multiple choice (45 questions, 60 min) + three essays (120 min)."], ["Rhetorical analysis essay", "Analyze ONE provided nonfiction text's rhetorical strategies — 40 min suggested."], ["Argument essay", "Defend YOUR position on a complex issue — 40 min."], ["Synthesis essay", "Use multiple provided sources to build YOUR argument — 40 min."], ["Reading the prompt", "Underline key terms; identify what's actually asked before writing."], ["Time allocation", "Suggested: ~10 min planning, ~25 min writing, ~5 min revision per essay."]],
          {
            title: "Exam mastery",
            skill: "Approach each essay type strategically within time constraints.",
            sections: [
              ["Question strategy", "MCQ: read questions BEFORE the passage to know what to hunt for; process of elimination works on every question. Essays: spend 8-10 minutes annotating/planning before writing — a clear plan prevents rambling. Read the prompt TWICE — the verbs matter ('analyze' vs 'argue' vs 'synthesize')."],
              ["Essay execution", "Rhetorical analysis: identify 2-3 strategies, not everything. Argument: clear thesis + 2-3 developed reasons with counterargument. Synthesis: your thesis first, then sources grouped by relationship to it. Every paragraph needs a clear topic sentence and commentary — quotes without analysis score low."],
            ],
            formulas: [
              ["Essay timing", "~10 min plan, ~25 min write, ~5 min revise"],
              ["Paragraph test", "Topic sentence + evidence + commentary + thesis link"],
            ],
            worked: {
              problem: "You have 40 minutes for a synthesis essay. How should you allocate time?",
              solution: "5 min: read prompt + skim sources. 5 min: plan thesis and source groupings. 22 min: write. 5 min: revise thesis alignment and citations. 3 min: buffer.",
            },
            questions: [
              mcq("foundation", "On the AP Lang exam, the three essays are ___.", [["a", "summary, analysis, opinion"], ["b", "rhetorical analysis, argument, synthesis"], ["c", "persuasive, narrative, descriptive"], ["d", "two analysis and one summary"]], "b",
                [P("definition", "Exam format", "Rhetorical analysis + argument + synthesis.")],
                [S("The three essays test analysis of provided text, original argument, and multi-source synthesis.", 1, "AO1")], "(b)", ["Confusing with other AP exam formats."]),
              mcq("core", "Before writing an AP Lang essay, you should first ___.", [["a", "start writing immediately"], ["b", "read the prompt carefully and plan"], ["c", "write the conclusion"], ["d", "count words"]], "b",
                [P("skill", "Planning", "Prompt analysis prevents misreading the task.")],
                [S("Reading the prompt twice and planning prevents writing the wrong essay type.", 1, "AO4")], "(b)", ["Rushing into writing without understanding the task."]),
              op("core", "In 40 minutes for a rhetorical analysis essay, how would you allocate your time? Justify each phase.",
                [P("skill", "Time management", "Planning prevents rambling.")],
                [S("Model allocation: 8 min reading/annotating text + prompt, 5 min outlining thesis and paragraph topics, 22 min writing, 5 min revision — justified because analysis requires identifying strategies BEFORE writing.", 1, "AO4"), S("The key insight: analysis essays fail from writing before identifying strategies.", 1, "AO3")], "~8 min analyze, ~5 plan, ~22 write, ~5 revise", ["Allocating all time to writing with no planning."]),
              op("challenge", "A classmate says 'I'll just write more — longer essays score higher.' Evaluate this strategy.",
                [P("context", "Quality over quantity", "Scores reward analysis, not length."), P("skill", "Strategic advice", "Focused development beats padding.")],
                [S("Longer essays only score higher if the additional length adds analysis — padding with summary or repetition doesn't earn points.", 1, "AO3"), S("The rubric rewards thesis, evidence, commentary, sophistication — all qualities of focused development, not word count.", 1, "AO2"), S("Better strategy: fully develop 2-3 points with commentary than superficially list 6 — depth over breadth.", 1, "AO4")], "Length doesn't equal score; focused analysis with commentary beats padding", ["Agreeing that longer = better without qualification."]),
            ],
          }),
      ],
    },
  ],
};

module.exports = { courses: [apEngLang] };
