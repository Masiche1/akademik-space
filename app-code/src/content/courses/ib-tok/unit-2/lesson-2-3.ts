import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "tok-u2-lesson-2-3",
  code: "2-3",
  title: "Ethics, the Arts and Religion",
  goal: "I CAN compare how ethics, the arts and religion produce knowledge and evaluate their distinctive methods and claims.",
  standards: ["TOK", "Areas of Knowledge", "Ethics", "Arts", "Religion"],
  vocabulary: [
    { term: "Ethics", definition: "The study of right and wrong, moral duty and the justification of action." },
    { term: "Moral relativism", definition: "The view that moral truths depend on cultural or individual perspective." },
    { term: "Aesthetic judgement", definition: "Evaluation of beauty, form or artistic value — often felt rather than reasoned." },
    { term: "Religion", definition: "Systems of belief involving the sacred, often grounded in faith and revelation." },
    { term: "Deontological ethics", definition: "Ethics based on duties and rules rather than consequences." },
    { term: "Consequentialism", definition: "Ethics judged by the outcomes or consequences of actions." },
  ],
  concepts: [
    {
      id: "tok-u2-ethics",
      title: "Ethics as an area of knowledge",
      skill: "Compare ethical frameworks and evaluate whether moral knowledge is objective or relative.",
      lesson: {
        sections: [
          {
            heading: "How ethics knows",
            body: "Ethics asks what we ought to do. Major approaches: **deontology** (duty-based — Kant's categorical imperative), **consequentialism** (outcome-based — greatest good for the greatest number), **virtue ethics** (character-based — what would a good person do?). Each produces knowledge through reasoning, but they can conflict — a duty may contradict the best outcome.",
          },
          {
            heading: "Is moral knowledge objective?",
            body: "Moral relativists argue ethics depends on culture — what is right varies by society. Moral objectivists argue some actions are wrong regardless of belief. Evidence for objectivity: moral emotions seem universal (horror at cruelty). Evidence for relativism: practices accepted in one culture horrify another (foot-binding, honour killing).",
          },
          {
            heading: "TOK significance",
            body: "Ethics is a favourite TOK territory because it exposes how reason alone cannot settle value questions. Emotions, culture and faith all play roles. The key question: is there a fact of the matter about right and wrong, or only agreements and disagreements between perspectives?",
          },
        ],
        keyFormulas: [
          { name: "Ethical frameworks", statement: "Deontology (duty) vs consequentialism (outcome) vs virtue ethics (character)" },
          { name: "Key question", statement: "Is morality objective or relative to culture/individual?" },
        ],
        workedExample: {
          problem: "A culture practices a custom others find cruel. Is it wrong?",
          solution: "This exposes the objectivity debate. A relativist says wrongness depends on cultural norms; an objectivist says cruelty violates a universal moral principle. TOK answers should acknowledge both the cultural embeddedness of ethics and the persistence of moral intuitions across cultures.",
        },
      },
      questions: [
        {
          id: "tok-u2-l23c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Consequentialist ethics judges actions by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether they follow a rule" },
              { id: "b", text: "Their outcomes or consequences" },
              { id: "c", text: "The character of the agent" },
              { id: "d", text: "Divine command" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consequentialism", statement: "Ethical evaluation based on the outcomes or consequences of actions." },
            ],
            steps: [
              { reasoning: "Consequentialism evaluates by results, not rules or character.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Their outcomes or consequences",
            commonErrors: ["Confusing consequentialism with deontology."],
          },
        },
        {
          id: "tok-u2-l23c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between deontological and consequentialist ethics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deontology vs consequentialism", statement: "Deontology judges by duty/rules; consequentialism judges by outcomes." },
            ],
            steps: [
              { reasoning: "Deontology: actions are right or wrong based on adherence to duty, regardless of outcome.", marks: 1, markCode: "M" },
              { reasoning: "Consequentialism: actions are right or wrong based on the goodness of their results.", marks: 1, markCode: "M" },
              { reasoning: "They can conflict: a duty may produce bad outcomes, or good outcomes may require breaking rules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deontology judges by duty; consequentialism judges by outcomes — they can reach different verdicts on the same act.",
            commonErrors: ["Treating the two frameworks as interchangeable."],
          },
        },
        {
          id: "tok-u2-l23c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that moral knowledge is relative to culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moral relativism", statement: "Moral truths vary by culture — evidence for both sides exists." },
            ],
            steps: [
              { reasoning: "For relativism: practices accepted in one culture horrify another; norms clearly vary.", marks: 1, markCode: "M" },
              { reasoning: "Against: moral emotions (horror at cruelty) appear universal across cultures.", marks: 1, markCode: "M" },
              { reasoning: "Relativism faces self-refutation: claiming 'all morality is relative' is itself a universal claim.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: ethics is culturally influenced but may contain universal elements; the debate remains open.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moral knowledge is culturally influenced but universal moral intuitions suggest possible objectivity; the question is unresolved.",
            commonErrors: ["Assuming either complete relativism or complete objectivity."],
          },
        },
        {
          id: "tok-u2-l23c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the nature of moral knowledge.",
          parts: [
            { label: "a", prompt: "Describe two major ethical frameworks.", marks: 2 },
            { label: "b", prompt: "Explain two ways cultures influence moral knowledge.", marks: 3 },
            { label: "c", prompt: "Evaluate whether there are universal moral truths.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moral knowledge", statement: "Ethics produces argued judgements about right and wrong, shaped by culture and reason." },
            ],
            steps: [
              { part: "a", reasoning: "Deontology (duty) and consequentialism (outcome) described.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly characterised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cultural norms define what counts as acceptable behaviour.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Socialisation shapes moral intuitions from childhood.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Different cultures produce different but internally coherent ethical systems.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evidence for universality: moral emotions, prohibitions on murder and deceit.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evidence against: cultural variation in practices and justifications.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: possible universal core with culturally variable expression.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deontology, consequentialism. (b) Norms, socialisation, cultural systems. (c) Possible universal core, culturally variable.",
            commonErrors: ["Ignoring the role of culture in shaping ethics."],
          },
        },
        {
          id: "tok-u2-l23c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Deontological ethics primarily judges actions by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their consequences" },
              { id: "b", text: "Whether they conform to duty or rules" },
              { id: "c", text: "The pleasure they produce" },
              { id: "d", text: "The wealth of the agent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deontology", statement: "Duty-based ethics judges actions by conformity to moral rules rather than outcomes." },
            ],
            steps: [
              { reasoning: "Deontology focuses on duty and rules.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whether they conform to duty or rules",
            commonErrors: ["Confusing deontology with consequentialism."],
          },
        },
        {
          id: "tok-u2-l23c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Virtue ethics asks mainly:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What rule was followed" },
              { id: "b", text: "What outcome was produced" },
              { id: "c", text: "What a person of good character would do" },
              { id: "d", text: "What the majority prefers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Virtue ethics", statement: "Ethics centred on the character and virtues of the moral agent." },
            ],
            steps: [
              { reasoning: "Virtue ethics evaluates character rather than only rules or outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** What a person of good character would do",
            commonErrors: ["Reducing virtue ethics to rule-following or outcome calculation."],
          },
        },
        {
          id: "tok-u2-l23c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Moral relativism claims that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Some moral truths are universal" },
              { id: "b", text: "Moral rightness depends on cultural or individual perspective" },
              { id: "c", text: "Ethics can be proven mathematically" },
              { id: "d", text: "All cultures share identical values" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moral relativism", statement: "The view that moral truths vary with cultural or individual perspective." },
            ],
            steps: [
              { reasoning: "Relativism makes morality dependent on perspective.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Moral rightness depends on cultural or individual perspective",
            commonErrors: ["Confusing relativism with the claim that all moral views are equally justified."],
          },
        },
        {
          id: "tok-u2-l23c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which observation is often cited as evidence for universal moral intuitions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different cultures have different foods" },
              { id: "b", text: "Moral emotions such as horror at cruelty appear across cultures" },
              { id: "c", text: "Laws differ between countries" },
              { id: "d", text: "Languages use different words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moral emotions", statement: "Shared emotional responses may indicate elements of universal morality." },
            ],
            steps: [
              { reasoning: "Cross-cultural moral emotions suggest possible shared moral responses.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Moral emotions such as horror at cruelty appear across cultures",
            commonErrors: ["Confusing cultural difference with absence of shared moral responses."],
          },
        },
        {
          id: "tok-u2-l23c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which example is most often used to support moral relativism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mathematical proofs are universal" },
              { id: "b", text: "Practices accepted in one culture may horrify another" },
              { id: "c", text: "Experiments can be replicated" },
              { id: "d", text: "Religions use sacred texts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural variation", statement: "Differing moral practices across cultures support relativist claims." },
            ],
            steps: [
              { reasoning: "Cultural variation shows that accepted practices can differ sharply.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Practices accepted in one culture may horrify another",
            commonErrors: ["Using examples of difference without addressing moral judgement."],
          },
        },
        {
          id: "tok-u2-l23c1q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is ethics difficult to settle through reason alone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because moral claims are always true" },
              { id: "b", text: "Because competing values, emotions and cultures shape moral judgement" },
              { id: "c", text: "Because ethics has no questions" },
              { id: "d", text: "Because reason is never used in ethics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of reason in ethics", statement: "Moral judgement involves values, emotions and cultural frameworks, not only logic." },
            ],
            steps: [
              { reasoning: "Reason can analyse arguments but cannot by itself choose ultimate values.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because competing values, emotions and cultures shape moral judgement",
            commonErrors: ["Claiming reason has no role or that it can settle all values."],
          },
        },
        {
          id: "tok-u2-l23c1q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare deontological, consequentialist and virtue ethics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Ethical frameworks", statement: "Deontology judges duty, consequentialism judges outcomes, virtue ethics judges character." },
            ],
            steps: [
              { reasoning: "Deontology asks whether an action conforms to moral duty or rules.", marks: 1, markCode: "M" },
              { reasoning: "Consequentialism asks whether the action produces good outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Virtue ethics asks what a person of good character would do.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: each framework can justify different verdicts on the same action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deontology judges duty, consequentialism judges outcomes and virtue ethics judges character; they can conflict.",
            commonErrors: ["Treating the three frameworks as identical."],
          },
        },
        {
          id: "tok-u2-l23c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the debate over whether moral knowledge is objective or relative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moral objectivity debate", statement: "Evidence exists for both universal moral intuitions and culturally variable practices." },
            ],
            steps: [
              { reasoning: "Relativists point to cultural variation in accepted practices.", marks: 1, markCode: "M" },
              { reasoning: "Objectivists point to shared moral emotions and prohibitions on cruelty.", marks: 1, markCode: "M" },
              { reasoning: "The debate concerns whether there is a fact of the matter about right and wrong.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: moral knowledge may contain universal elements but remains culturally influenced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moral knowledge may be culturally shaped yet contain universal elements; the objectivity debate remains open.",
            commonErrors: ["Assuming either complete relativism or complete objectivity."],
          },
        },
        {
          id: "tok-u2-l23c1q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that all morality is culturally relative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of relativism", statement: "Cultural variation supports relativism, but universal moral responses complicate it." },
            ],
            steps: [
              { reasoning: "For: practices and justifications differ sharply across cultures.", marks: 1, markCode: "M" },
              { reasoning: "For: socialisation and institutions shape moral norms.", marks: 1, markCode: "M" },
              { reasoning: "Against: moral emotions and prohibitions appear across cultures.", marks: 1, markCode: "R" },
              { reasoning: "A purely relativist claim also faces the problem of asserting a universal rule.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: morality is culturally influenced, but complete relativism is difficult to sustain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moral norms are culturally influenced, but evidence for shared moral responses makes complete relativism problematic.",
            commonErrors: ["Ignoring counterevidence from cross-cultural moral emotions."],
          },
        },
        {
          id: "tok-u2-l23c1q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Apply two ethical frameworks to a dilemma in which keeping a promise causes harm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applying ethical frameworks", statement: "Different frameworks may reach different verdicts on the same dilemma." },
            ],
            steps: [
              { reasoning: "Deontology may prioritise the duty to keep promises.", marks: 1, markCode: "M" },
              { reasoning: "Consequentialism may prioritise avoiding harm if outcomes are worse.", marks: 1, markCode: "M" },
              { reasoning: "Virtue ethics may ask what honesty, compassion and integrity require together.", marks: 1, markCode: "M" },
              { reasoning: "The frameworks expose a genuine conflict rather than one automatic answer.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the choice depends on which ethical priority is defended.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deontology may favour keeping the promise; consequentialism may favour preventing harm; virtue ethics balances character.",
            commonErrors: ["Applying only one framework and calling it the only moral answer."],
          },
        },
        {
          id: "tok-u2-l23c1q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether moral knowledge is a genuine form of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status of moral knowledge", statement: "Ethics produces argued judgements constrained by reason, evidence and values." },
            ],
            steps: [
              { reasoning: "For: moral claims can be reasoned about, compared and tested against consequences.", marks: 1, markCode: "M" },
              { reasoning: "For: shared intuitions and ethical traditions provide some stability.", marks: 1, markCode: "M" },
              { reasoning: "Against: moral truths are not empirically verified in the same way as scientific claims.", marks: 1, markCode: "R" },
              { reasoning: "Values and culture mean reasonable people may disagree deeply.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: moral knowledge is genuine but interpretive, contested and less certain than proof or experiment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moral knowledge is genuine but contested: it is argued and reasoned, not experimentally proven.",
            commonErrors: ["Dismissing ethics as mere opinion or treating moral judgements as certain facts."],
          },
        },
        {
          id: "tok-u2-l23c1q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine how culture, emotion and reason shape moral knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sources of moral knowledge", statement: "Ethics combines reasoning, emotion and cultural socialisation." },
            ],
            steps: [
              { reasoning: "Reason allows moral arguments to be analysed and defended.", marks: 1, markCode: "M" },
              { reasoning: "Emotion supplies moral responses such as empathy and disgust.", marks: 1, markCode: "M" },
              { reasoning: "Culture socialises individuals into norms and practices.", marks: 1, markCode: "M" },
              { reasoning: "Together they shape what counts as right or wrong in a community.", marks: 1, markCode: "R" },
              { reasoning: "This makes moral knowledge interpretive and contested rather than purely objective.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: ethics is a form of knowledge shaped by multiple ways of knowing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moral knowledge is shaped by reason, emotion and culture, making it argued and culturally embedded rather than purely objective.",
            commonErrors: ["Reducing ethics to logic alone or to cultural custom alone."],
          },
        },
      ],
    },
    {
      id: "tok-u2-arts-religion",
      title: "The arts and religion as areas of knowledge",
      skill: "Compare how art and religion produce knowledge and evaluate their claims to truth.",
      lesson: {
        sections: [
          {
            heading: "The arts: knowledge through form and feeling",
            body: "Art produces knowledge through aesthetic experience — a painting, novel or symphony can reveal truths about human experience that propositional statements cannot capture. Art is judged by coherence, insight and emotional resonance rather than empirical test. The arts give knowledge **of meaning and experience**, not of facts.",
          },
          {
            heading: "Religion: knowledge through faith and revelation",
            body: "Religious knowledge claims access to truths beyond empirical reason — through scripture, revelation, tradition and faith. It addresses ultimate questions: meaning, mortality, the divine. Religious knowledge is internally coherent within traditions but cannot be verified externally — different religions make incompatible claims about the same reality.",
          },
          {
            heading: "Comparison and tension",
            body: "Both arts and religion offer knowledge that science cannot provide: meaning, value, transcendence. Both are resistant to falsification. The tension: religion claims **truth about reality** while art claims **truth about experience**. Can subjective experience yield objective knowledge? That is the central TOK question.",
          },
        ],
        keyFormulas: [
          { name: "Art knowledge", statement: "Truth of experience and meaning — judged by insight, not experiment" },
          { name: "Religion knowledge", statement: "Truth of revelation and faith — internally coherent, externally unverifiable" },
        ],
        workedExample: {
          problem: "Does a novel 'tell the truth' about human nature?",
          solution: "It can reveal truths about experience, emotion and possibility that factual accounts miss — but these are truths of insight, not verifiable fact. A novel's truth is tested by whether it resonates as authentic, not whether its events occurred.",
        },
      },
      questions: [
        {
          id: "tok-u2-l23c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Religious knowledge is primarily grounded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Empirical experiment" },
              { id: "b", text: "Faith and revelation" },
              { id: "c", text: "Deductive proof" },
              { id: "d", text: "Statistical analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Religious knowledge", statement: "Knowledge grounded in faith, revelation and tradition rather than empirical proof." },
            ],
            steps: [
              { reasoning: "Religious knowledge rests on faith and revelation, not experiment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Faith and revelation",
            commonErrors: ["Confusing religious knowledge with scientific knowledge."],
          },
        },
        {
          id: "tok-u2-l23c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the arts can produce knowledge without making factual claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Artistic knowledge", statement: "Art reveals truths about human experience, emotion and meaning through form and feeling." },
            ],
            steps: [
              { reasoning: "Art expresses and evokes experiences — grief, joy, absurdity — that propositions cannot capture.", marks: 1, markCode: "M" },
              { reasoning: "Aesthetic judgement tests authenticity and insight, not factual accuracy.", marks: 1, markCode: "M" },
              { reasoning: "Art reveals possibilities and meanings about human life that expand understanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Art gives knowledge of experience and meaning through aesthetic insight rather than factual statement.",
            commonErrors: ["Dismissing art as 'mere opinion' without knowledge content."],
          },
        },
        {
          id: "tok-u2-l23c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that religious knowledge is a genuine form of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Religious knowledge", statement: "Religious claims are internally coherent and meaningful but externally unverifiable." },
            ],
            steps: [
              { reasoning: "For: religious traditions have rich internal coherence, long history and provide meaning.", marks: 1, markCode: "M" },
              { reasoning: "Against: claims cannot be verified or falsified; incompatible religions contradict each other.", marks: 1, markCode: "M" },
              { reasoning: "Religious knowledge may be knowledge of faith and meaning rather than of empirical fact.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: genuine as a form of belief and meaning-making, weak as verifiable knowledge of reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Religious knowledge is meaningful and coherent within traditions but unverifiable; it yields belief rather than checkable knowledge.",
            commonErrors: ["Treating religious claims as either proven fact or meaningless."],
          },
        },
        {
          id: "tok-u2-l23c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare the arts and religion as areas of knowledge.",
          parts: [
            { label: "a", prompt: "Describe how each produces knowledge.", marks: 3 },
            { label: "b", prompt: "Explain two similarities between them.", marks: 2 },
            { label: "c", prompt: "Evaluate which provides more reliable knowledge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Arts and religion", statement: "Both offer non-empirical knowledge — art of experience, religion of the transcendent." },
            ],
            steps: [
              { part: "a", reasoning: "Art: aesthetic experience reveals truths about human experience and meaning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Religion: faith and revelation claim truths about ultimate reality.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both resist empirical falsification and rely on interpretation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both address meaning, value and questions beyond science.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Art's knowledge is about experience — testable through resonance and insight.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Religion's knowledge claims about reality are unverifiable and contradictory across traditions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: art gives more reliable knowledge of experience; religion gives meaning but weaker verifiable knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Art: experience; religion: revelation. (b) Non-falsifiable, interpretive. (c) Art more reliable for experience; religion for meaning.",
            commonErrors: ["Treating art and religion as identical in their knowledge claims."],
          },
        },
        {
          id: "tok-u2-l23c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Knowledge produced by the arts is most accurately described as knowledge of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Empirical facts only" },
              { id: "b", text: "Experience, meaning and aesthetic insight" },
              { id: "c", text: "Mathematical certainty" },
              { id: "d", text: "Revealed doctrine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Artistic knowledge", statement: "Art gives knowledge of experience, meaning and aesthetic judgement rather than empirical fact." },
            ],
            steps: [
              { reasoning: "Art communicates through form, feeling and interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Experience, meaning and aesthetic insight",
            commonErrors: ["Expecting art to produce knowledge only through factual statements."],
          },
        },
        {
          id: "tok-u2-l23c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Religious knowledge is primarily grounded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeatable experiment" },
              { id: "b", text: "Faith, revelation and tradition" },
              { id: "c", text: "Statistical evidence" },
              { id: "d", text: "Deductive mathematics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Religious knowledge", statement: "Religious claims rest on faith, revelation, scripture and tradition." },
            ],
            steps: [
              { reasoning: "Religious knowledge is grounded in faith and revelation rather than experiment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Faith, revelation and tradition",
            commonErrors: ["Confusing religious knowledge with empirical science."],
          },
        },
        {
          id: "tok-u2-l23c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the current TOK guide, religion is best classified as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One of the five compulsory areas of knowledge" },
              { id: "b", text: "An optional theme for exploring how religion shapes knowledge" },
              { id: "c", text: "A way of knowing" },
              { id: "d", text: "A mathematical method" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Current TOK structure", statement: "The five compulsory AOKs are Natural Sciences, Human Sciences, Mathematics, History and The Arts; religion is an optional theme." },
            ],
            steps: [
              { reasoning: "Religion is not one of the five compulsory AOKs but can be an optional theme.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An optional theme for exploring how religion shapes knowledge",
            commonErrors: ["Listing religion as a compulsory area of knowledge under the current guide."],
          },
        },
        {
          id: "tok-u2-l23c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Aesthetic judgement in the arts is mainly evaluated through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laboratory experiment" },
              { id: "b", text: "Coherence, insight, resonance and interpretive judgement" },
              { id: "c", text: "Mathematical proof" },
              { id: "d", text: "Religious revelation alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aesthetic judgement", statement: "Artistic value is judged through interpretation, coherence and felt significance." },
            ],
            steps: [
              { reasoning: "Art is assessed by interpretive and aesthetic criteria rather than experiment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Coherence, insight, resonance and interpretive judgement",
            commonErrors: ["Expecting artistic knowledge to be tested like a scientific hypothesis."],
          },
        },
        {
          id: "tok-u2-l23c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Religious claims are often described as internally coherent but externally unverifiable because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make no sense within their traditions" },
              { id: "b", text: "Can be checked by every observer" },
              { id: "c", text: "Are coherent within a tradition but cannot be independently tested against reality" },
              { id: "d", text: "Depend only on mathematics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Religious knowledge status", statement: "Religious claims may be coherent within traditions but are not empirically verifiable." },
            ],
            steps: [
              { reasoning: "Internal coherence does not provide external verification.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Are coherent within a tradition but cannot be independently tested against reality",
            commonErrors: ["Treating internal coherence as proof of external truth."],
          },
        },
        {
          id: "tok-u2-l23c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the arts can produce knowledge without making factual claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Artistic knowledge", statement: "Art reveals truths about experience, emotion and meaning through form and interpretation." },
            ],
            steps: [
              { reasoning: "Art expresses experiences that propositional statements may miss.", marks: 1, markCode: "M" },
              { reasoning: "It can reveal possibilities, perspectives and emotional truths.", marks: 1, markCode: "M" },
              { reasoning: "Aesthetic judgement tests insight and authenticity rather than factual accuracy.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: art gives knowledge of meaning and experience, not verifiable fact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Art produces knowledge through aesthetic insight into experience and meaning rather than factual assertion.",
            commonErrors: ["Dismissing art as mere opinion or demanding it prove facts."],
          },
        },
        {
          id: "tok-u2-l23c2q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how religion claims to produce knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Religious knowledge", statement: "Religious traditions claim knowledge through revelation, scripture, tradition and faith." },
            ],
            steps: [
              { reasoning: "Religious knowledge claims access to ultimate truths beyond ordinary observation.", marks: 1, markCode: "M" },
              { reasoning: "Scripture, tradition and revelation are treated as authoritative sources.", marks: 1, markCode: "M" },
              { reasoning: "Faith accepts these claims without empirical verification.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: religious knowledge is meaningful within traditions but externally unverifiable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Religion claims knowledge through revelation, scripture, tradition and faith, producing beliefs not empirically verified.",
            commonErrors: ["Assuming religious claims are proven facts or meaningless."],
          },
        },
        {
          id: "tok-u2-l23c2q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Compare the arts and religion as sources of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Arts versus religion", statement: "Art gives knowledge of experience and meaning; religion gives claimed knowledge of the transcendent." },
            ],
            steps: [
              { reasoning: "Art is judged through interpretation, coherence and aesthetic insight.", marks: 1, markCode: "M" },
              { reasoning: "Religion is grounded in faith, revelation and tradition.", marks: 1, markCode: "M" },
              { reasoning: "Both resist straightforward empirical falsification.", marks: 1, markCode: "R" },
              { reasoning: "Art claims truth about experience; religion claims truth about reality.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: both offer non-empirical knowledge but with different objects and justifications.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Art yields interpretive knowledge of experience; religion yields faith-based claims about ultimate reality.",
            commonErrors: ["Treating art and religion as identical in method or claims."],
          },
        },
        {
          id: "tok-u2-l23c2q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that religious knowledge is a genuine form of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Religious knowledge status", statement: "Religious knowledge is coherent within traditions but unverifiable externally." },
            ],
            steps: [
              { reasoning: "For: religious traditions provide meaning, community and coherent systems of belief.", marks: 1, markCode: "M" },
              { reasoning: "For: religious claims can be examined through reason and interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Against: core claims cannot be tested and incompatible religions contradict each other.", marks: 1, markCode: "R" },
              { reasoning: "Religious knowledge may be knowledge of faith rather than knowledge of empirical fact.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: genuine as belief and meaning-making, weaker as verifiable knowledge of reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Religious knowledge is meaningful and coherent within traditions but unverifiable as empirical knowledge.",
            commonErrors: ["Either accepting all religious claims as proven or rejecting them as meaningless."],
          },
        },
        {
          id: "tok-u2-l23c2q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the reliability of artistic and religious knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Reliability of art and religion", statement: "Art can be judged by resonance and insight; religious claims about reality are harder to verify." },
            ],
            steps: [
              { reasoning: "Artistic claims can be assessed through interpretation and shared aesthetic criteria.", marks: 1, markCode: "M" },
              { reasoning: "Religious claims about ultimate reality cannot be independently tested.", marks: 1, markCode: "M" },
              { reasoning: "Different religions make incompatible claims about the same reality.", marks: 1, markCode: "R" },
              { reasoning: "Art's knowledge is about experience; religion's is about transcendent claims.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: art offers more checkable knowledge of experience; religion offers meaning but weaker verifiable knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Art provides more checkable knowledge of experience; religion provides meaning but less verifiable knowledge of reality.",
            commonErrors: ["Ranking the two without specifying what kind of knowledge is meant."],
          },
        },
        {
          id: "tok-u2-l23c2q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine whether subjective experience can yield objective knowledge in art or religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subjective experience and objectivity", statement: "Personal experience can reveal shared truths but remains mediated by interpretation." },
            ],
            steps: [
              { reasoning: "Artistic experience is subjective but can resonate across audiences.", marks: 1, markCode: "M" },
              { reasoning: "Religious experience is personal and shaped by tradition and culture.", marks: 1, markCode: "M" },
              { reasoning: "Shared criteria and communities can make judgements intersubjective.", marks: 1, markCode: "R" },
              { reasoning: "However, interpretations remain contested and not directly verifiable.", marks: 1, markCode: "R" },
              { reasoning: "Objectivity here means robust shared judgement rather than scientific proof.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: subjective experience can support knowledge claims, but objectivity is approximate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subjective experience can yield intersubjectively supported knowledge, but not the certainty of proof or experiment.",
            commonErrors: ["Either denying all value in subjective experience or treating it as automatically objective."],
          },
        },
        {
          id: "tok-u2-l23c2q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Assess the status of the arts and religion under the current TOK guide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Current TOK structure", statement: "The Arts are a compulsory AOK; religion is an optional theme, not a compulsory AOK." },
            ],
            steps: [
              { reasoning: "The Arts are one of the five compulsory areas of knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Artistic knowledge is analysed through methods, perspectives and aesthetic judgement.", marks: 1, markCode: "M" },
              { reasoning: "Religion is not a compulsory AOK but can be an optional theme.", marks: 1, markCode: "M" },
              { reasoning: "The optional theme asks how religion shapes knowledge, not whether it is an AOK.", marks: 1, markCode: "R" },
              { reasoning: "Both can be examined for their ways of knowing and claims to truth.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the guide classifies them differently while still allowing rich TOK analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The Arts are a compulsory AOK; religion is an optional theme, though both raise questions about knowledge and belief.",
            commonErrors: ["Calling religion a compulsory area of knowledge under the current guide."],
          },
        },
      ],
    },
  ],
};
