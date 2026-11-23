import type { Lesson } from "../../../types.ts";

const REVIEW_PROMPT = {
  title: "Writing Task: Review",
  author: "Written for Akademik Space",
  source: "Original task prompt",
  text: "You have just seen 'The Last Ferry' at the Grand Theatre. Write a review for the school magazine's arts page. Your review should give a clear recommendation, analyse specific aspects of the production (acting, set, structure), and address likely reader objections.",
};

const STRONG_REVIEW = {
  title: "Model Review",
  author: "Written for Akademik Space",
  source: "Original model answer",
  text: "The Last Ferry earns its five stars the moment the lights go down — but it makes you work for them first.\n\nThe lead performance is the production's engine. She carries every scene with a quiet intensity that never tips into showiness, and her final monologue — delivered facing the audience rather than the set — is the kind of moment theatre exists for. The harbour set, all ropes and lantern light, makes the stage feel like somewhere you could genuinely get lost.\n\nThe second act sags. A subplot about the ferry licence runs a good twenty minutes too long and flattens the tension the first act built so carefully. If the writer had trusted the audience with less, this would be flawless.\n\nStill — go. The final image of the boat leaving as the lights die is worth the ticket alone, and it's the rare play that stays with you on the walk home.",
};

const EVAL_PROMPT = {
  title: "Writing Task: Evaluative Essay",
  author: "Written for Akademik Space",
  source: "Original task prompt",
  text: "'Social media companies should be legally required to label algorithmically recommended content.' Write an essay evaluating this claim. You should consider at least two perspectives and reach a reasoned conclusion.",
};

const BLOG_POST = {
  title: "Blog Post Draft",
  author: "Year 11 student",
  source: "Original student draft for improvement",
  text: "Social media is bad for everyone. The algorithms are designed to addict you and the companies don't care. They should definitely be forced to label everything because it's basically propaganda. My cousin got depression from Instagram so this is obviously true. Also I think all social media should just be banned because teenagers are too stupid to use it responsibly. That's my opinion and it's definitely right.",
};

export const lesson83: Lesson = {
  id: "el11-u8-lesson-8-3",
  code: "8-3",
  title: "Writing Media Responses and Evaluations",
  goal: "I CAN write accurate, audience-aware media responses and construct evaluative arguments about media claims.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],

  vocabulary: [
    { term: "Review", definition: "An evaluative text that analyses a product, performance or event for a specific audience." },
    { term: "Recommendation", definition: "The reviewer's verdict — who should experience the thing, and why." },
    { term: "Evaluative argument", definition: "An essay that weighs a claim against evidence from multiple perspectives." },
    { term: "Counterargument", definition: "The strongest opposing view, addressed fairly before the conclusion." },
    { term: "Audience awareness", definition: "Calibrating content, tone and assumed knowledge to the intended readers." },
    { term: "Reasoned conclusion", definition: "A judgement that follows from the evidence weighed, not just asserted." },
  ],
  concepts: [
    {
      id: "el11-u8-media-review",
      title: "Writing effective reviews",
      skill: "Write a media review with a clear verdict, specific analysis and audience-appropriate tone.",
      lesson: {
        sections: [
          {
            heading: "The anatomy of a review",
            body: "A strong review has four moves: **hook** (an engaging opening that earns attention), **analysis** (specific aspects — acting, structure, design — not vague praise), **balance** (genuine criticism alongside praise) and **verdict** (a clear recommendation: who should see it, and why). The audience decides the register — a school magazine wants accessible analysis, a broadsheet wants expert judgement.",
          },
          {
            heading: "From description to evaluation",
            body: "The commonest review failure is description without judgement: 'the actor was good, the set was nice' tells the reader nothing. Convert every observation into evaluation: not 'the second act was long' but 'the licence subplot ran twenty minutes too long and flattened the tension'. Evaluation answers the reader's real question — **is it worth my time/money?**",
          },
          {
            heading: "Addressing objections",
            body: "A credible review anticipates the reader's doubts: 'you might find the pacing slow — I did, in act two — but the final image justifies it'. Conceding a weakness before defending the verdict builds trust; ignoring weaknesses makes praise look naive.",
          },
        ],
        keyFormulas: [
          { name: "Verdict", statement: "The reviewer's final judgement — who should experience the thing and why." },
          { name: "Balanced judgement", statement: "Praise and criticism held together; proportional verdicts follow from proportional evidence." },
          { name: "Audience calibration", statement: "Accessible language and assumed knowledge matched to the intended readers." },
        ],
        workedExample: {
          problem: "How does the model review of 'The Last Ferry' succeed?",
          solution: "It hooks with a superlative that immediately complicates ('earns its five stars... but it makes you work for them'), analyses specifics (the lead's 'quiet intensity', the 'ropes and lantern light' set, the twenty-minute subplot), balances honestly (the sagging second act is named and measured), and lands a clear recommendation ('go... worth the ticket alone'). Every claim is evaluative, not descriptive — 'the kind of moment theatre exists for' tells the reader why it matters.",
        },
      },
      questions: [
        {
          id: "el11-u8-media-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STRONG_REVIEW,
          stem: "What is the reviewer's overall verdict on 'The Last Ferry'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is flawed but worth seeing for the ending." },
              { id: "b", text: "It is a masterpiece with no weaknesses." },
              { id: "c", text: "It is not worth the ticket price." },
              { id: "d", text: "It is only for theatre experts." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verdict", statement: "The reviewer's final recommendation to the audience." },
            ],
            steps: [
              { reasoning: "The review names a real weakness ('second act sags') yet concludes 'go... worth the ticket alone' — a qualified recommendation.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It is flawed but worth seeing for the ending.",
            commonErrors: ["Choosing (b) — the review explicitly criticises act two.", "Choosing (c) — 'worth the ticket' is positive."],
          },
        },
        {
          id: "el11-u8-media-review-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: BLOG_POST,
          stem: "Identify two weaknesses in the student's blog post draft.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical review of writing", statement: "Evaluate drafts against purpose, evidence and tone." },
            ],
            steps: [
              { reasoning: "The draft asserts rather than argues: 'obviously true', 'definitely right' — no evidence, no counterargument, no nuance.", evidence: "obviously true", marks: 1, markCode: "AO2" },
              { reasoning: "It relies on anecdote ('My cousin got depression') presented as proof, and its extreme claims ('all social media should just be banned') alienate reasonable readers.", evidence: "all social media should just be banned", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The draft asserts without evidence ('obviously true'), uses anecdote as proof, and makes extreme claims ('all social media should just be banned') with no counterargument.",
            commonErrors: ["Saying 'it's too short' — length isn't the issue.", "Missing the evidence problem."],
          },
        },
        {
          id: "el11-u8-media-review-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: STRONG_REVIEW,
          stem: "Explain how the model review turns description into evaluation, using two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Evaluation over description", statement: "Every observation should answer 'so what?' for the reader." },
            ],
            steps: [
              { reasoning: "'quiet intensity that never tips into showiness' evaluates technique — it tells the reader the acting is controlled, not just present.", evidence: "quiet intensity", marks: 1, markCode: "AO2" },
              { reasoning: "'ran a good twenty minutes too long and flattened the tension' converts a plot observation into a judgement about pacing and effect.", evidence: "flattened the tension", marks: 1, markCode: "AO2" },
              { reasoning: "Both examples answer the reader's real question — is it worth seeing? — rather than merely reporting what happened.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The review evaluates rather than describes: 'quiet intensity' judges the acting's control, and 'twenty minutes too long... flattened the tension' judges the pacing's effect — each observation answers 'is it worth seeing?'.",
            commonErrors: ["Quoting without explaining the evaluative work.", "Missing that description alone doesn't review."],
          },
        },
        {
          id: "el11-u8-media-review-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: REVIEW_PROMPT,
          stem: "A pupil's review says: 'The play was good. The acting was good. The set was good. I recommend it.' Rewrite this as an evaluative opening paragraph for the school magazine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluative writing", statement: "Replace generic praise with specific, judgement-bearing analysis." },
              { kind: "technique", name: "Hook", statement: "An opening that earns attention through a specific, arguable claim." },
            ],
            steps: [
              { reasoning: "The original is four assertions of 'good' with no analysis — the rewrite must name specific aspects: the lead's restraint, the lantern-lit set, the sagging subplot.", marks: 1, markCode: "AO2" },
              { reasoning: "It should take a position early — e.g., 'The Last Ferry earns its recommendation in the final ten minutes' — giving the reader a thesis to test.", marks: 1, markCode: "AO1" },
              { reasoning: "It should include at least one evaluative judgement, not description: 'the second act loses the thread the first act found'.", marks: 1, markCode: "AO2" },
              { reasoning: "Tone should suit a school magazine — accessible, personal ('I nearly left at the interval'), not academic.", marks: 1, markCode: "AO1" },
              { reasoning: "The paragraph should end with a reason to keep reading — a promise of the verdict or a hook question.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A strong rewrite names specific aspects (lead's restraint, lantern set, sagging act two), takes an early position, judges rather than describes, keeps an accessible school-magazine tone, and hooks the reader toward the verdict.",
            commonErrors: ["Adding longer synonyms for 'good'.", "Writing an essay intro rather than a review hook."],
          },
        },
        {
          id: "el11-u8-media-review-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BLOG_POST,
          stem: "The student wants to write a persuasive blog post arguing social media companies should label algorithmic content. Identify three ways the current draft fails as persuasion and how to fix each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuasive revision", statement: "Persuasion needs evidence, counterargument and calibrated claims." },
            ],
            steps: [
              { reasoning: "Failure 1 — unsupported assertion ('obviously true'): fix by adding evidence, e.g. engagement-optimisation research or platform design documents.", marks: 1, markCode: "AO2" },
              { reasoning: "Failure 2 — anecdote as proof ('My cousin got depression'): fix by generalising carefully — 'research links heavy use to...' with attribution, or clearly framed as personal experience.", marks: 1, markCode: "AO1" },
              { reasoning: "Failure 3 — no counterargument ('that's my opinion and it's definitely right'): fix by steelmanning the opposition — platforms' free-speech and innovation arguments — then answering them.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix 4 — extreme claim ('all social media should just be banned') alienates undecided readers: narrow to the specific, defensible claim about labelling.", marks: 1, markCode: "AO1" },
              { reasoning: "Fix 5 — tone ('addicts', 'sheeple' energy) reads as rant not argument: adopt a measured register that invites the target audience (parents, policymakers) in.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: persuasion fails when it asserts what it should prove and attacks what it should address.", marks: 1, markCode: "AO1" },
            ],
                        levels: [
            { level: "Level 3", marks: "4-6", descriptor: "Identifies three distinct persuasive failures with specific fixes — evidence, steelmanning, narrowing, tone." },
            { level: "Level 2", marks: "2-3", descriptor: "Identifies some failures with partial fixes; analysis of why they fail is thin." },
            { level: "Level 1", marks: "1", descriptor: "Lists surface problems ('it's boring') without persuasive analysis or fixes." }
          ],
finalAnswer: "The draft fails by asserting without evidence, using anecdote as proof, ignoring counterarguments, making extreme claims and adopting a ranting tone — each fixable by evidence, steelmanning, narrowing and measured register.",
            commonErrors: ["Listing problems without fixes.", "Fixing tone but not evidence."],
          },
        },
        {
          id: "el11-u8-media-review-q6",
          difficulty: "core",
          totalMarks: 4,
          extract: STRONG_REVIEW,
          stem: "Why does the model review's opening — 'earns its five stars the moment the lights go down — but it makes you work for them first' — work better than 'The play was very good'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paradoxical hook", statement: "A claim that seems contradictory creates productive tension." },
              { kind: "technique", name: "Thesis in miniature", statement: "The opening encodes the review's whole argument: reward is real but earned." },
            ],
            steps: [
              { reasoning: "'earns its five stars... but makes you work for them' is paradoxical — it promises a verdict while admitting difficulty, creating intrigue.", evidence: "earns its five stars the moment the lights go down", marks: 1, markCode: "AO2" },
              { reasoning: "It compresses the review's thesis — high praise qualified by real criticism — into one sentence the reader can test.", marks: 1, markCode: "AO1" },
              { reasoning: "'very good' is generic — it could describe anything; the paradox is specific to THIS play's structure (slow build, earned climax).", marks: 1, markCode: "AO2" },
              { reasoning: "The hook also models the reviewer's voice: confident, precise, unafraid of qualification.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The paradoxical opening promises a verdict while admitting difficulty — compressing the review's whole thesis into an intriguing, specific claim, whereas 'very good' is generic and unarguable.",
            commonErrors: ["Saying it's 'more exciting' without analysing why.", "Missing the thesis-compression function."],
          },
        },
      ],
    },
    {
      id: "el11-u8-evaluative-argument",
      title: "Constructing evaluative arguments",
      skill: "Build evaluative essays that weigh a media claim against multiple perspectives and reach a reasoned conclusion.",
      lesson: {
        sections: [
          {
            heading: "The evaluative essay structure",
            body: "An evaluative essay is not a list of opinions — it is a **weighing**. Structure: **introduction** (state the claim and your position), **perspective 1** (the strongest case for), **perspective 2** (the strongest case against), **weighing** (which evidence is stronger and why), **conclusion** (a reasoned judgement that follows from the weighing — it can be qualified: 'yes, but only if...').",
          },
          {
            heading: "The steelman principle",
            body: "The weakest evaluative essays attack a **strawman** — a weakened version of the opposition. The strongest present the opposition's **best** case, then answer it. If you argue 'companies should label algorithmic content', your counterargument paragraph should state the platforms' real case — innovation, free expression, enforcement cost — in its strongest form before explaining why your side still wins.",
          },
          {
            heading: "Reasoned conclusions",
            body: "A conclusion earns marks when it **follows from the weighing**: 'The evidence favours labelling, but only if paired with transparent criteria — otherwise it becomes theatre.' Qualified conclusions ('yes, but...', 'partly, provided...') show the argument was genuinely weighed, not just asserted.",
          },
        ],
        keyFormulas: [
          { name: "Weighing", statement: "Comparing the strength of evidence on each side before judging." },
          { name: "Steelmanning", statement: "Presenting the opposition's strongest case before answering it." },
          { name: "Qualified conclusion", statement: "A judgement that acknowledges conditions — 'yes, but only if...' — showing real weighing." },
        ],
        workedExample: {
          problem: "How should an essay evaluate 'social media companies should label algorithmic content'?",
          solution: "Introduction: state the claim and a tentative position. For: labelling makes the persuasive architecture visible, empowers users, parallels advertising disclosure. Against (steelmanned): labels may be ignored (banner blindness), enforcement is costly, 'algorithmic' is hard to define, and labelling could legitimise harmful design. Weighing: the transparency benefit outweighs enforcement costs IF criteria are clear and audited. Conclusion: 'Yes — but only with independent auditing; voluntary labels would be meaningless.' The conclusion follows from the weighing, not precedes it.",
        },
      },
      questions: [
        {
          id: "el11-u8-evaluative-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EVAL_PROMPT,
          stem: "What makes an essay 'evaluative' rather than just argumentative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only presents one side of the issue." },
              { id: "b", text: "It weighs evidence from multiple perspectives before judging." },
              { id: "c", text: "It uses more emotive language than an argument." },
              { id: "d", text: "It is always longer than an argument." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluative argument", statement: "An essay that weighs a claim against evidence from multiple perspectives." },
            ],
            steps: [
              { reasoning: "'Evaluative' means judging by weighing — the essay must fairly present and compare competing cases before concluding.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** It weighs evidence from multiple perspectives before judging.",
            commonErrors: ["Thinking evaluation means criticising everything.", "Confusing length or tone with evaluation."],
          },
        },
        {
          id: "el11-u8-evaluative-argument-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: BLOG_POST,
          stem: "Identify two features that make the blog post an assertion rather than an evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Assertion vs evaluation", statement: "Assertions state; evaluations weigh." },
            ],
            steps: [
              { reasoning: "It presents only one side — every claim supports the writer's position with no opposing view acknowledged, let alone weighed.", evidence: "that's my opinion and it's definitely right", marks: 1, markCode: "AO2" },
              { reasoning: "Its claims are unqualified absolutes ('all social media should just be banned', 'obviously true') — no weighing, no conditions, no evidence considered.", evidence: "all social media should just be banned", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The post asserts one side only, with absolute unqualified claims and no acknowledged counterargument — it states rather than weighs.",
            commonErrors: ["Saying 'it's an opinion' — evaluations can have opinions; the missing weighing is the issue.", "Missing the absolutes."],
          },
        },
        {
          id: "el11-u8-evaluative-argument-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: EVAL_PROMPT,
          stem: "For the essay 'Social media companies should label algorithmic content', state the strongest argument FOR and the strongest argument AGAINST.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Steelmanning", statement: "Present each side's strongest case, not a weakened version." },
            ],
            steps: [
              { reasoning: "FOR (strongest): transparency — labelling makes the persuasive architecture visible, letting users recognise when engagement-optimisation is shaping what they see.", marks: 1, markCode: "AO2" },
              { reasoning: "AGAINST (strongest): enforcement and definition costs — 'algorithmic' is hard to define precisely, labels may be ignored like cookie banners, and the rule could legitimise harmful design by pretending disclosure solves it.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "FOR: transparency empowers users to see the persuasion. AGAINST: 'algorithmic' is undefinable, labels get ignored (banner blindness) and disclosure may legitimise rather than fix the design.",
            commonErrors: ["Giving weak strawman versions of each side.", "Only completing one side."],
          },
        },
        {
          id: "el11-u8-evaluative-argument-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: EVAL_PROMPT,
          stem: "A pupil's essay concludes: 'Therefore, social media companies should be forced to label algorithmic content because it is obviously the right thing to do.' Explain two reasons this conclusion fails as evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reasoned conclusion", statement: "A conclusion must follow from the weighing, not precede it." },
            ],
            steps: [
              { reasoning: "It asserts rather than weighs — 'obviously the right thing' skips the comparison of evidence the essay was meant to perform.", evidence: "obviously the right thing to do", marks: 1, markCode: "AO2" },
              { reasoning: "It is unqualified — no conditions, no acknowledgement that labelling might fail (banner blindness, definitional problems) — so it reads as assertion, not judgement.", marks: 1, markCode: "AO1" },
              { reasoning: "It doesn't follow from any weighing because none was done — a reasoned conclusion must be traceable to the evidence compared.", marks: 1, markCode: "AO2" },
              { reasoning: "It also uses 'forced', a coercive frame that ignores the enforcement-difficulty evidence a real weighing would surface.", marks: 1, markCode: "AO1" },
              { reasoning: "A strong conclusion would be qualified: 'yes, but only with independent auditing and clear criteria'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The conclusion fails because it asserts ('obviously') rather than weighs, is unqualified (ignores failure modes), doesn't follow from any comparison, and uses a coercive 'forced' frame — a reasoned conclusion must trace to weighed evidence and admit conditions.",
            commonErrors: ["Saying 'it's too short' — the problem is logical, not length.", "Missing the missing-weighing point."],
          },
        },
        {
          id: "el11-u8-evaluative-argument-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: EVAL_PROMPT,
          stem: "Write a model 'weighing' paragraph for the essay: present the strongest case for labelling, the strongest case against, and state which evidence you find more convincing and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Weighing", statement: "Compare the strength of evidence on each side before judging." },
              { kind: "technique", name: "Steelmanning", statement: "Give the opposition its best case." },
            ],
            steps: [
              { reasoning: "FOR case stated strongly: transparency — users can't resist design they can't see; labelling is the advertising-disclosure precedent applied to feeds.", marks: 1, markCode: "AO2" },
              { reasoning: "AGAINST case stated strongly: 'algorithmic' is undefinable at scale, labels suffer banner blindness, enforcement costs fall on smaller platforms, and disclosure can legitimise harmful design.", marks: 1, markCode: "AO1" },
              { reasoning: "Explicit comparison: the FOR evidence is principled but assumes users act on labels; the AGAINST evidence is practical — the mechanism's failure modes are documented (cookie banners ignored).", marks: 1, markCode: "AO2" },
              { reasoning: "A judgement is reached: transparency wins IF paired with independent auditing — voluntary labels would be meaningless.", marks: 1, markCode: "AO1" },
              { reasoning: "The weighing is explicit — 'more convincing because...' — not just a list of points.", marks: 1, markCode: "AO2" },
              { reasoning: "The paragraph sets up a qualified conclusion rather than a flat yes/no.", marks: 1, markCode: "AO1" },
            ],
                        levels: [
            { level: "Level 3", marks: "4-6", descriptor: "Both cases stated strongly and fairly; explicit weighing ('more convincing because'); judgement sets up a qualified conclusion." },
            { level: "Level 2", marks: "2-3", descriptor: "Both sides present but weighing is implicit or one side is a strawman." },
            { level: "Level 1", marks: "1", descriptor: "One-sided paragraph or list of points without comparison or judgement." }
          ],
finalAnswer: "A model weighing gives each side its strongest case, explicitly compares the evidence (principled transparency vs documented banner-blindness), judges transparency stronger only with auditing, and sets up a qualified conclusion.",
            commonErrors: ["Listing points without comparing them.", "Weighing but not judging."],
          },
        },
        {
          id: "el11-u8-evaluative-argument-q6",
          difficulty: "core",
          totalMarks: 4,
          extract: EVAL_PROMPT,
          stem: "Why is a qualified conclusion like 'yes, but only with independent auditing' stronger than a flat 'yes' in an evaluative essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Qualified conclusion", statement: "A judgement with conditions shows genuine weighing." },
            ],
            steps: [
              { reasoning: "'Yes, but only if...' demonstrates the weighing happened — the conditions come FROM the counterargument analysis.", evidence: "yes, but only with independent auditing", marks: 1, markCode: "AO2" },
              { reasoning: "It pre-empts the obvious objection — 'labels won't work without enforcement' — showing the writer engaged the strongest counter-case.", marks: 1, markCode: "AO1" },
              { reasoning: "A flat 'yes' ignores the AGAINST evidence the essay itself presented — it makes the weighing look decorative.", marks: 1, markCode: "AO2" },
              { reasoning: "Qualified conclusions are also more defensible: they survive the reader's own objections.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A qualified conclusion proves the weighing happened — its conditions derive from the counterargument, it pre-empts objections, and it makes the essay's own AGAINST section meaningful rather than decorative.",
            commonErrors: ["Thinking qualification sounds weaker — it signals stronger analysis.", "Missing the link between conditions and counterarguments."],
          },
        },
      ],
    },
  ],
  notes: [
    "Section B rewards evaluative writing: name the technique, quote the evidence, explain the effect on THIS audience.",
    "For evaluative essays, the weighing paragraph is where most marks live — practise comparing evidence explicitly ('more convincing because...').",
  ],
};
