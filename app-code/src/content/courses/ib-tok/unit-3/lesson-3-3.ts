import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "tok-u3-lesson-3-3",
  code: "3-3",
  title: "Critical Reflection on Knowledge Claims",
  goal: "I CAN reflect critically on knowledge claims and evaluate their justification across different contexts.",
  standards: ["TOK", "Reflection", "Critical Thinking", "Ways of Knowing"],
  vocabulary: [
    { term: "Critical reflection", definition: "Deliberate examination of one's own beliefs, methods and assumptions about knowledge." },
    { term: "Justification", definition: "The reasons or evidence offered for a knowledge claim." },
    { term: "Epistemology", definition: "The branch of philosophy concerned with the nature, scope and justification of knowledge." },
    { term: "Scepticism", definition: "A questioning attitude toward claims of knowledge — doubting before accepting." },
    { term: "Confirmation bias", definition: "The tendency to seek and favour evidence that supports existing beliefs." },
    { term: "Knowledge claim", definition: "A statement asserted to be true or justified — the object of TOK inquiry." },
  ],
  concepts: [
    {
      id: "tok-u3-critical-reflection",
      title: "The practice of critical reflection",
      skill: "Apply critical reflection to evaluate knowledge claims and one's own assumptions.",
      lesson: {
        sections: [
          {
            heading: "What critical reflection means",
            body: "Critical reflection is not just thinking — it is **thinking about your thinking**. It asks: What do I believe? Why do I believe it? What evidence supports or challenges it? What am I assuming? Reflection is a core TOK skill tested in both the essay and exhibition, and it is how TOK thinking becomes habit.",
          },
          {
            heading: "Reflecting on knowledge claims",
            body: "When evaluating a claim, ask: What is being claimed? What evidence is offered? What ways of knowing are used? What are the limitations? What would count as disconfirmation? This systematic questioning applies to scientific claims, historical interpretations, moral judgements and everyday beliefs.",
          },
          {
            heading: "Reflecting on yourself",
            body: "TOK also asks you to examine your own knowledge: your biases, your reliance on particular ways of knowing, your cultural assumptions. Confirmation bias — seeking evidence for what you already believe — is the most common obstacle. Critical reflection means actively looking for what you might be wrong about.",
          },
        ],
        keyFormulas: [
          { name: "Reflection questions", statement: "What is claimed? What evidence? What assumptions? What would disconfirm?" },
          { name: "Self-check", statement: "Am I seeking confirmation or genuine understanding?" },
        ],
        workedExample: {
          problem: "Reflect on the claim 'vaccines are safe'.",
          solution: "The claim is supported by extensive clinical trials, epidemiological data and scientific consensus. My assumptions: I trust peer review and regulatory systems. What would change my mind? Robust evidence of harm at scale. Critical reflection means examining whether my trust in science is justified rather than automatic.",
        },
      },
      questions: [
        {
          id: "tok-u3-l33c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Critical reflection primarily involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorising facts" },
              { id: "b", text: "Examining one's own beliefs and assumptions" },
              { id: "c", text: "Avoiding difficult questions" },
              { id: "d", text: "Accepting all claims at face value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical reflection", statement: "Deliberate examination of one's own beliefs, methods and assumptions about knowledge." },
            ],
            steps: [
              { reasoning: "Critical reflection examines one's own thinking and assumptions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Examining one's own beliefs and assumptions",
            commonErrors: ["Confusing reflection with mere opinion."],
          },
        },
        {
          id: "tok-u3-l33c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what questions a critical reflector should ask about a knowledge claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questioning", statement: "Ask what is claimed, what evidence supports it, what assumptions underlie it, and what would disconfirm it." },
            ],
            steps: [
              { reasoning: "Identify the claim and the evidence offered for it.", marks: 1, markCode: "M" },
              { reasoning: "Examine the ways of knowing and assumptions used.", marks: 1, markCode: "M" },
              { reasoning: "Consider what evidence would count against the claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ask what is claimed, what evidence supports it, what assumptions underlie it, and what would disconfirm it.",
            commonErrors: ["Asking only 'is it true?' without examining justification."],
          },
        },
        {
          id: "tok-u3-l33c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that critical reflection can overcome all biases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of reflection", statement: "Reflection reduces bias but cannot eliminate it entirely." },
            ],
            steps: [
              { reasoning: "For: systematic questioning exposes hidden assumptions and confirmation bias.", marks: 1, markCode: "M" },
              { reasoning: "Against: biases operate unconsciously; we may not recognise our own blind spots.", marks: 1, markCode: "M" },
              { reasoning: "Reflection itself can be biased — we reflect through the lens of our existing views.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: reflection mitigates bias but cannot guarantee objectivity; it is a practice, not a cure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Critical reflection reduces bias but cannot eliminate it; it is an ongoing practice rather than a complete solution.",
            commonErrors: ["Claiming reflection guarantees unbiased thinking."],
          },
        },
        {
          id: "tok-u3-l33c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of critical reflection in TOK.",
          parts: [
            { label: "a", prompt: "Define critical reflection and explain its purpose.", marks: 2 },
            { label: "b", prompt: "Describe three questions used in critical reflection.", marks: 3 },
            { label: "c", prompt: "Evaluate the limits of critical reflection.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Critical reflection", statement: "Systematic examination of beliefs and assumptions about knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: deliberate examination of one's own thinking about knowledge.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Purpose: improve the quality and justification of knowledge claims.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "What is claimed and what evidence supports it?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What assumptions or ways of knowing are used?", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What would count as disconfirmation?", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflection cannot eliminate unconscious bias entirely.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It operates within the limits of language and available evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: valuable practice that improves but does not perfect knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Examining one's own thinking. (b) Claim, evidence, assumptions, disconfirmation. (c) Reduces but does not eliminate bias.",
            commonErrors: ["Treating reflection as a one-time fix rather than ongoing practice."],
          },
        },
        {
          id: "tok-u3-l33c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluating a knowledge claim through reflection requires asking:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only whether it is true" },
              { id: "b", text: "What evidence and assumptions support it" },
              { id: "c", text: "How widely it is believed" },
              { id: "d", text: "Who originally asserted it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical reflection", statement: "Deliberate examination of the evidence, assumptions and limits behind a knowledge claim." },
            ],
            steps: [
              { reasoning: "Reflection examines the justification of a claim, not just its truth value.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What evidence and assumptions support it",
            commonErrors: ["Reducing reflection to asking 'is it true?'."],
          },
        },
        {
          id: "tok-u3-l33c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Confirmation bias is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seeking and favouring evidence that supports existing beliefs" },
              { id: "b", text: "A mathematical fallacy" },
              { id: "c", text: "A type of logical proof" },
              { id: "d", text: "Rejecting all evidence equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Confirmation bias", statement: "The tendency to seek and favour evidence confirming existing beliefs while discounting challenges." },
            ],
            steps: [
              { reasoning: "Confirmation bias is selective attention to supporting evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Seeking and favouring evidence that supports existing beliefs",
            commonErrors: ["Confusing confirmation bias with open-minded scepticism."],
          },
        },
        {
          id: "tok-u3-l33c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 'disconfirming' piece of evidence is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence from an authority" },
              { id: "b", text: "Evidence that would count against the claim" },
              { id: "c", text: "Evidence that feels intuitively right" },
              { id: "d", text: "Evidence that repeats the claim" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Disconfirmation", statement: "Evidence that would count against a knowledge claim if it were found." },
            ],
            steps: [
              { reasoning: "Disconfirming evidence challenges rather than supports a claim.", marks: 1, markCode: "M" },
              { reasoning: "Identifying what would count against a claim is a core reflective question.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evidence that would count against the claim",
            commonErrors: ["Believing only supporting evidence is relevant to evaluation."],
          },
        },
        {
          id: "tok-u3-l33c1q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between ordinary thinking and critical reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical reflection", statement: "Thinking about one's own thinking — examining beliefs, assumptions and methods." },
            ],
            steps: [
              { reasoning: "Ordinary thinking processes information and reaches conclusions.", marks: 1, markCode: "M" },
              { reasoning: "Critical reflection turns back on the process itself: why do I believe this, what am I assuming?", marks: 1, markCode: "M" },
              { reasoning: "Reflection is therefore metacognitive — it evaluates the quality of one's own reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ordinary thinking produces conclusions; critical reflection examines the beliefs, evidence and assumptions behind those conclusions.",
            commonErrors: ["Equating reflection with simply thinking harder."],
          },
        },
        {
          id: "tok-u3-l33c1q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the best reflective question to ask about the claim 'social media improves democracy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What evidence would count against this claim?" },
              { id: "b", text: "Who first said it?" },
              { id: "c", text: "How many people use it?" },
              { id: "d", text: "Is social media popular?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Critical questioning", statement: "Ask what is claimed, what evidence supports it, what is assumed, and what would disconfirm it." },
            ],
            steps: [
              { reasoning: "Critical reflection probes justification, including what evidence would count against the claim.", marks: 1, markCode: "M" },
              { reasoning: "Option (b) targets disconfirmation — a core reflective move.", marks: 1, markCode: "M" },
              { reasoning: "The others seek facts rather than examining the claim's justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What evidence would count against this claim?",
            commonErrors: ["Gathering only confirming evidence about social media."],
          },
        },
        {
          id: "tok-u3-l33c1q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Examine self-reflection as part of TOK practice.",
          parts: [
            { label: "a", prompt: "Define what reflecting on oneself about knowledge involves.", marks: 2 },
            { label: "b", prompt: "Identify two personal assumptions or biases worth examining.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-reflection", statement: "TOK includes examining one's own biases, habits of knowing and cultural assumptions." },
            ],
            steps: [
              { part: "a", reasoning: "It involves examining which ways of knowing one relies on and which evidence one tends to accept or reject.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It also means recognising how one's background shapes what counts as knowledge for them.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example 1: confirmation bias — favouring evidence for existing views.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example 2: over-reliance on intuition or authority as a way of knowing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Examining one's own ways of knowing, biases and cultural assumptions. (b) E.g. confirmation bias and over-reliance on authority.",
            commonErrors: ["Treating self-reflection as confession rather than analysis of knowledge habits."],
          },
        },
        {
          id: "tok-u3-l33c1q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why might critical reflection fail to eliminate bias entirely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because evidence is always unavailable" },
              { id: "b", text: "Because reflection takes too long" },
              { id: "c", text: "Because many biases operate below conscious awareness" },
              { id: "d", text: "Because people dislike thinking" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of reflection", statement: "Unconscious biases can shape reflection itself, so reflection mitigates but cannot remove bias." },
            ],
            steps: [
              { reasoning: "Many biases operate unconsciously and may not be detectable by introspection.", marks: 1, markCode: "M" },
              { reasoning: "Reflection is itself conducted through the lens of existing views.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) identifies the deepest reason.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because many biases operate below conscious awareness",
            commonErrors: ["Assuming conscious reflection can access all sources of bias."],
          },
        },
        {
          id: "tok-u3-l33c1q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the role of scepticism within critical reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scepticism", statement: "Scepticism questions claims before accepting them; it is a method within reflection." },
            ],
            steps: [
              { reasoning: "Scepticism guards against credulity by demanding justification for claims.", marks: 1, markCode: "M" },
              { reasoning: "It is essential for evaluating sources, evidence and authority.", marks: 1, markCode: "M" },
              { reasoning: "However, excessive scepticism paralyses judgement — nothing could ever be accepted.", marks: 1, markCode: "R" },
              { reasoning: "Total doubt is as unreflective as total credulity; both avoid evaluation.", marks: 1, markCode: "R" },
              { reasoning: "The reflective stance weighs evidence and commits provisionally.", marks: 1, markCode: "A" },
              { reasoning: "Judgement: scepticism is a necessary tool of reflection but must be balanced by warranted acceptance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scepticism strengthens reflection by demanding justification, but unbounded doubt prevents any knowledge; balance is required.",
            commonErrors: ["Treating scepticism as an end in itself rather than a method."],
          },
        },
        {
          id: "tok-u3-l33c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine reflection as a skill in TOK.",
          parts: [
            { label: "a", prompt: "Describe what critical reflection involves.", marks: 3 },
            { label: "b", prompt: "Explain how reflection applies to evaluating knowledge claims.", marks: 3 },
            { label: "c", prompt: "Evaluate the limits of reflection as a method.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection as skill", statement: "Reflection is a trainable practice of examining beliefs, evidence and assumptions." },
            ],
            steps: [
              { part: "a", reasoning: "It involves questioning one's own beliefs and the reasons for holding them.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It examines the ways of knowing relied upon and the assumptions made.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It is deliberate and systematic rather than casual musing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Applied to claims: identify the claim, evidence, assumptions and possible disconfirmation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It works across domains — scientific, historical, moral and everyday claims.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It improves the quality of judgement about what is justified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflection cannot access unconscious biases or guarantee objectivity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It is bounded by available evidence and the limits of language.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Systematic examination of beliefs, assumptions and ways of knowing. (b) Applies the claim-evidence-assumption-disconfirmation sequence across domains. (c) Powerful but bounded by unconscious bias and available evidence.",
            commonErrors: ["Presenting reflection as a complete solution to all epistemic problems."],
          },
        },
        {
          id: "tok-u3-l33c1q14",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one example of an assumption a person might hold about knowledge, and explain why examining it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Assumption examination", statement: "Hidden assumptions shape what counts as knowledge; reflection exposes them." },
            ],
            steps: [
              { reasoning: "Example assumption: 'if it is on the internet, it must be reliable' or 'my own experience is always representative'.", marks: 1, markCode: "M" },
              { reasoning: "The assumption matters because it silently governs which evidence is accepted or rejected.", marks: 1, markCode: "M" },
              { reasoning: "Exposing it allows the person to test it rather than be governed by it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. assuming internet sources are reliable: it shapes trust in evidence, so examining it improves judgement about knowledge claims.",
            commonErrors: ["Naming a belief rather than an assumption about how knowledge works."],
          },
        },
        {
          id: "tok-u3-l33c1q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Epistemology is the study of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logical fallacies exclusively" },
              { id: "b", text: "The emotions and their effects" },
              { id: "c", text: "Ancient philosophical texts only" },
              { id: "d", text: "The nature, scope and justification of knowledge" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Epistemology", statement: "The branch of philosophy concerned with the nature, scope and justification of knowledge." },
            ],
            steps: [
              { reasoning: "Epistemology asks what knowledge is, how it is acquired and what justifies it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The nature, scope and justification of knowledge",
            commonErrors: ["Confusing epistemology with psychology or general philosophy."],
          },
        },
        {
          id: "tok-u3-l33c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare critical reflection with simple doubt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection vs doubt", statement: "Doubt questions; reflection examines the reasons and evidence behind questioning." },
            ],
            steps: [
              { reasoning: "Simple doubt rejects or questions claims without examining why.", marks: 1, markCode: "M" },
              { reasoning: "Critical reflection asks structured questions: what is claimed, what evidence, what assumptions, what would disconfirm.", marks: 1, markCode: "M" },
              { reasoning: "Doubt alone can be unproductive — it neither accepts nor evaluates.", marks: 1, markCode: "R" },
              { reasoning: "Reflection aims at warranted judgement, not endless questioning.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: reflection is structured, evaluative scepticism; doubt is only its starting impulse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Doubt questions without method; critical reflection systematically examines claims to reach warranted judgement.",
            commonErrors: ["Treating doubt as equivalent to critical thinking."],
          },
        },
      ],
    },
    {
      id: "tok-u3-justification",
      title: "Evaluating knowledge claims",
      skill: "Apply criteria of justification to assess knowledge claims across different contexts.",
      lesson: {
        sections: [
          {
            heading: "What counts as justification",
            body: "A knowledge claim is justified when supported by appropriate evidence for its domain: empirical claims need observation and testability; mathematical claims need proof; moral claims need reasoned argument and consistency; religious claims rest on faith and tradition. The standard of justification differs by area of knowledge.",
          },
          {
            heading: "Cross-domain evaluation",
            body: "TOK asks you to compare how different areas justify knowledge: science by experiment, mathematics by proof, history by sources, ethics by argument, religion by faith. Can one standard apply to all? Or does each area have its own criteria? This is the problem of **epistemic pluralism**.",
          },
          {
            heading: "Real-world application",
            body: "In daily life we constantly evaluate claims: Is this news source reliable? Does this study prove causation? Is this moral judgement justified? Critical evaluation of justification is the practical payoff of TOK — it makes you a more careful consumer of knowledge claims.",
          },
        ],
        keyFormulas: [
          { name: "Justification criteria", statement: "Science: evidence; Math: proof; Ethics: argument; Religion: faith" },
          { name: "Epistemic pluralism", statement: "Different areas of knowledge may require different standards of justification" },
        ],
        workedExample: {
          problem: "Evaluate 'This diet causes weight loss' as a knowledge claim.",
          solution: "The claim needs empirical evidence: controlled studies, replication, effect sizes. Correlation is not causation — confounding variables must be ruled out. The justification standard is scientific: testable, falsifiable, replicated.",
        },
      },
      questions: [
        {
          id: "tok-u3-l33c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Justification for a knowledge claim refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who asserts it" },
              { id: "b", text: "The evidence or reasons offered for it" },
              { id: "c", text: "How often it is repeated" },
              { id: "d", text: "The emotional intensity behind it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Justification", statement: "The reasons or evidence offered for a knowledge claim." },
            ],
            steps: [
              { reasoning: "Justification is the evidence or reasons supporting a claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The evidence or reasons offered for it",
            commonErrors: ["Confusing justification with repetition or authority."],
          },
        },
        {
          id: "tok-u3-l33c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how standards of justification differ between mathematics and religion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Epistemic pluralism", statement: "Different areas of knowledge use different criteria for justification." },
            ],
            steps: [
              { reasoning: "Mathematics justifies by deductive proof within axioms — certainty is internal.", marks: 1, markCode: "M" },
              { reasoning: "Religion justifies by faith, revelation and tradition — claims are not empirically testable.", marks: 1, markCode: "M" },
              { reasoning: "Applying one standard to the other would be a category error.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mathematics uses proof and deduction; religion uses faith and revelation — different standards of justification.",
            commonErrors: ["Applying scientific standards to religious claims or vice versa."],
          },
        },
        {
          id: "tok-u3-l33c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether one universal standard of justification can apply to all knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Universal vs pluralist justification", statement: "A single standard may not fit all areas of knowledge." },
            ],
            steps: [
              { reasoning: "For universalism: consistency demands the same evidential standards everywhere.", marks: 1, markCode: "M" },
              { reasoning: "Against: different domains have different subject matter — proof suits math, faith suits religion.", marks: 1, markCode: "M" },
              { reasoning: "A universal standard may privilege empirical science over other forms of knowledge.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: pluralist standards are more appropriate, though some minimal rationality should be universal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A single standard is inadequate; different areas of knowledge require different but minimally rational criteria.",
            commonErrors: ["Assuming empirical standards should govern all knowledge."],
          },
        },
        {
          id: "tok-u3-l33c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how knowledge claims are justified across different areas of knowledge.",
          parts: [
            { label: "a", prompt: "Explain what justification means for a knowledge claim.", marks: 2 },
            { label: "b", prompt: "Describe how two different areas of knowledge justify their claims.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the same standard of justification should apply everywhere.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification across AoKs", statement: "Different areas use different standards: proof, evidence, argument, faith." },
            ],
            steps: [
              { part: "a", reasoning: "Justification is the evidence or reasons offered for a claim.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The standard of justification depends on the type of claim.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mathematics: deductive proof from axioms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Natural sciences: empirical evidence and falsifiability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both correctly contrasted.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For universal standard: consistency and comparability across domains.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Against: domain-specific criteria fit different subject matters.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: pluralist standards with minimal rationality as the common floor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence/reasons for claim. (b) Math: proof; science: evidence. (c) Pluralist with minimal rationality.",
            commonErrors: ["Demanding empirical proof for non-empirical claims."],
          },
        },
        {
          id: "tok-u3-l33c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the natural sciences, a knowledge claim is primarily justified by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Religious faith" },
              { id: "b", text: "Tradition and custom" },
              { id: "c", text: "Authority alone" },
              { id: "d", text: "Empirical evidence and testability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification criteria", statement: "Scientific claims are justified by empirical evidence that is testable and replicable." },
            ],
            steps: [
              { reasoning: "The standard of justification in the natural sciences is empirical and testable evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Empirical evidence and testability",
            commonErrors: ["Applying faith-based or authority-based standards to scientific claims."],
          },
        },
        {
          id: "tok-u3-l33c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A mathematical theorem is justified by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expert consensus" },
              { id: "b", text: "Deductive proof from axioms" },
              { id: "c", text: "Divine revelation" },
              { id: "d", text: "Repeated experiment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mathematical justification", statement: "Mathematical claims are justified by deductive proof within an axiomatic system." },
            ],
            steps: [
              { reasoning: "Mathematics justifies claims through logical deduction from axioms, not empirical testing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deductive proof from axioms",
            commonErrors: ["Applying empirical standards to mathematical knowledge."],
          },
        },
        {
          id: "tok-u3-l33c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Epistemic pluralism holds that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All knowledge uses a single standard of justification" },
              { id: "b", text: "Only the sciences produce genuine knowledge" },
              { id: "c", text: "Different areas of knowledge may require different standards of justification" },
              { id: "d", text: "Religion is necessarily irrational" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Epistemic pluralism", statement: "The view that different areas of knowledge have different, appropriate standards of justification." },
            ],
            steps: [
              { reasoning: "Pluralism recognises domain-specific criteria: proof, evidence, argument, faith.", marks: 1, markCode: "M" },
              { reasoning: "It rejects imposing one standard on all knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Different areas of knowledge may require different standards of justification",
            commonErrors: ["Confusing pluralism with relativism — standards still must be rational within their domain."],
          },
        },
        {
          id: "tok-u3-l33c2q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why correlation does not equal causation when evaluating scientific claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Causal claims", statement: "Scientific justification of causal claims requires ruling out confounding variables, not just observing association." },
            ],
            steps: [
              { reasoning: "Correlation shows two variables move together; causation claims one produces the other.", marks: 1, markCode: "M" },
              { reasoning: "A third variable may cause both, or the direction of causation may be reversed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore causal claims need controlled studies, replication and confounder analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Correlation only shows association; establishing causation requires evidence that rules out confounders and alternative explanations.",
            commonErrors: ["Treating a correlation study as proof of causation."],
          },
        },
        {
          id: "tok-u3-l33c2q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The strongest objection to the moral claim 'lying is always wrong' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Some people lie frequently" },
              { id: "b", text: "Lying is difficult to define" },
              { id: "c", text: "There are cases where lying prevents greater harm" },
              { id: "d", text: "Lying is sometimes enjoyable" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moral justification", statement: "Moral claims are tested by reasoned counterexamples and consideration of consequences." },
            ],
            steps: [
              { reasoning: "The word 'always' makes the claim vulnerable to counterexamples.", marks: 1, markCode: "M" },
              { reasoning: "Cases where lying prevents greater harm directly challenge the universal claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is the strongest objection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** There are cases where lying prevents greater harm",
            commonErrors: ["Demanding scientific evidence for a moral claim."],
          },
        },
        {
          id: "tok-u3-l33c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Examine justification in the discipline of history.",
          parts: [
            { label: "a", prompt: "Describe what counts as evidence for a historical claim.", marks: 2 },
            { label: "b", prompt: "Evaluate the limits of historical justification.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical justification", statement: "Historical claims are justified by sources, corroboration and interpretation." },
            ],
            steps: [
              { part: "a", reasoning: "Primary and secondary sources, documents, artefacts and testimony serve as evidence.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Corroboration across independent sources strengthens justification.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sources are incomplete and biased; interpretation always mediates evidence.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Historical knowledge is therefore probable and revisable rather than certain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sources and corroboration justify historical claims. (b) Incomplete, biased sources make historical knowledge probable and revisable.",
            commonErrors: ["Treating historical accounts as directly observed facts."],
          },
        },
        {
          id: "tok-u3-l33c2q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A religious claim such as 'God exists' cannot be settled by scientific method primarily because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It involves no reasoning" },
              { id: "b", text: "Scientists are inherently biased" },
              { id: "c", text: "It is not empirically testable in the way scientific claims are" },
              { id: "d", text: "The claim is false" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Domain standards", statement: "Religious claims rest on faith, revelation and tradition — standards different from empirical testability." },
            ],
            steps: [
              { reasoning: "Scientific method requires empirical testability; religious claims concern a transcendent reality not directly observable.", marks: 1, markCode: "M" },
              { reasoning: "Applying the wrong standard would be a category error, not a refutation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It is not empirically testable in the way scientific claims are",
            commonErrors: ["Assuming failure of empirical test proves a claim false."],
          },
        },
        {
          id: "tok-u3-l33c2q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether empirical standards should govern all knowledge claims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Universal vs pluralist standards", statement: "Empirical standards fit science but may not fit mathematics, ethics or religion." },
            ],
            steps: [
              { reasoning: "For: empirical evidence is publicly testable and has produced reliable knowledge.", marks: 1, markCode: "M" },
              { reasoning: "For: uniform standards would allow cross-domain comparison.", marks: 1, markCode: "M" },
              { reasoning: "Against: mathematical proof, moral argument and religious faith address different subject matters.", marks: 1, markCode: "R" },
              { reasoning: "Against: universal empiricism privileges one way of knowing and may exclude genuine knowledge.", marks: 1, markCode: "R" },
              { reasoning: "A minimal floor of rationality can be universal even if specific standards differ.", marks: 1, markCode: "A" },
              { reasoning: "Judgement: pluralist standards with a shared requirement of rational justification are most defensible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Empirical standards cannot govern all knowledge; domain-appropriate standards with minimal rationality offer the best account.",
            commonErrors: ["Assuming what cannot be empirically tested is therefore unjustified."],
          },
        },
        {
          id: "tok-u3-l33c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine standards of justification across areas of knowledge.",
          parts: [
            { label: "a", prompt: "Define what justification means for a knowledge claim.", marks: 2 },
            { label: "b", prompt: "Compare the standards of justification in two different areas of knowledge.", marks: 3 },
            { label: "c", prompt: "Evaluate whether one universal standard of justification is possible.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justification standards", statement: "Justification is domain-relative: proof, evidence, argument and faith serve different areas." },
            ],
            steps: [
              { part: "a", reasoning: "Justification is the evidence or reasons offered for a claim.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The appropriate standard depends on the type of claim being made.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. mathematics: deductive proof from axioms; natural sciences: empirical evidence and falsifiability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each standard fits its subject matter and method of inquiry.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The contrast shows standards are not interchangeable.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For a universal standard: consistency and comparability across domains.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Against: a single standard would privilege empirical science and exclude other forms of knowledge.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: pluralist standards with minimal rationality as the common floor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence/reasons for a claim. (b) E.g. math proof vs scientific evidence — domain-specific. (c) A single standard is inadequate; pluralism with minimal rationality fits best.",
            commonErrors: ["Judging all claims by the standards of one area of knowledge."],
          },
        },
        {
          id: "tok-u3-l33c2q14",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Identify the type of justification appropriate for a historical claim and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical justification", statement: "Historical claims are justified by documentary sources and corroboration, not direct observation or proof." },
            ],
            steps: [
              { reasoning: "Historical claims concern the past, which cannot be directly observed or experimentally tested.", marks: 1, markCode: "M" },
              { reasoning: "Appropriate justification: primary sources, documents and corroborating evidence.", marks: 1, markCode: "M" },
              { reasoning: "This yields probable, revisable knowledge rather than certainty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Historical claims are justified by sources and corroboration, producing probable and revisable knowledge.",
            commonErrors: ["Demanding experimental proof for claims about the past."],
          },
        },
        {
          id: "tok-u3-l33c2q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A knowledge claim is 'falsifiable' when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has already been proven" },
              { id: "b", text: "It cannot be tested at all" },
              { id: "c", text: "It is possible in principle to find evidence against it" },
              { id: "d", text: "It is widely believed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Falsifiability", statement: "A claim is falsifiable if evidence that would count against it could in principle be found." },
            ],
            steps: [
              { reasoning: "Falsifiability means the claim is open to refutation by evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It is possible in principle to find evidence against it",
            commonErrors: ["Confusing falsifiability with having been falsified."],
          },
        },
        {
          id: "tok-u3-l33c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the standards of justification in the arts and the natural sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Arts vs sciences", statement: "Arts justify through interpretation and coherence; sciences through evidence and replication." },
            ],
            steps: [
              { reasoning: "In the arts, justification rests on interpretation, coherence, cultural context and expressive power.", marks: 1, markCode: "M" },
              { reasoning: "In the sciences, justification rests on empirical evidence, testability and replication.", marks: 1, markCode: "M" },
              { reasoning: "Both have internal standards appropriate to their subject matter.", marks: 1, markCode: "M" },
              { reasoning: "Neither standard can simply be imposed on the other domain.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: pluralist standards recognise that different kinds of knowledge require different kinds of justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The arts justify through interpretation and coherence; sciences through evidence and replication — each with domain-appropriate standards.",
            commonErrors: ["Judging artistic claims by scientific standards or vice versa."],
          },
        },
      ],
    },
  ],
};
