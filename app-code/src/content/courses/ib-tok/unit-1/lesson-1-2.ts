import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "tok-u1-lesson-1-2",
  code: "1-2",
  title: "Reason, Intuition and Memory",
  goal: "I CAN explain how reason, intuition and memory operate as ways of knowing and evaluate the reliability of each.",
  standards: ["TOK", "Ways of Knowing", "Reason", "Intuition", "Memory"],
  vocabulary: [
    { term: "Reason", definition: "The faculty of logical thinking, including deduction from premises and induction from evidence." },
    { term: "Deduction", definition: "Reasoning from general premises to a specific conclusion that is guaranteed if the premises hold." },
    { term: "Induction", definition: "Reasoning from specific observations to a general conclusion that is probable, not certain." },
    { term: "Intuition", definition: "Immediate knowing or 'gut feeling' without conscious reasoning." },
    { term: "Memory", definition: "The faculty of storing and retrieving past experiences, knowledge and information." },
    { term: "Fallibility", definition: "The quality of being capable of error; no way of knowing is infallible." },
  ],
  concepts: [
    {
      id: "tok-u1-reason",
      title: "Reason as a way of knowing",
      skill: "Distinguish deductive and inductive reasoning and evaluate reason's powers and limits.",
      lesson: {
        sections: [
          {
            heading: "Two forms of reasoning",
            body: "**Deduction** moves from general premises to specific conclusions: if all humans are mortal and Socrates is human, Socrates is mortal. If the premises are true, the conclusion is guaranteed. **Induction** moves from observations to general laws: 'every swan I have seen is white, so all swans are white' — probable but never certain, since one black swan refutes it.",
          },
          {
            heading: "Powers of reason",
            body: "Reason is the primary tool of mathematics, logic and much of science. It detects contradictions, structures arguments and tests hypotheses. Mathematics achieves certainty through deduction within axiomatic systems; the natural sciences rely on inductive generalisation tested against evidence.",
          },
          {
            heading: "Limits of reason",
            body: "Reason cannot operate on empty premises — it needs input from perception, memory or faith. It is also constrained by language and can produce internally consistent but false systems. Reason tells us what follows from assumptions; it cannot by itself guarantee that the assumptions match reality.",
          },
        ],
        keyFormulas: [
          { name: "Deduction", statement: "General premises → specific conclusion (certain if premises true)" },
          { name: "Induction", statement: "Specific observations → general law (probable, never certain)" },
        ],
        workedExample: {
          problem: "Is 'All observed metals conduct electricity, so all metals conduct electricity' deduction or induction?",
          solution: "It is induction: specific observations support a general claim. It remains probable, not certain — a new metal could in principle violate the pattern. Deduction would require the conclusion to follow necessarily from accepted premises.",
        },
      },
      questions: [
        {
          id: "tok-u1-l12c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Deductive reasoning differs from inductive reasoning in that deduction:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relies on gut feelings" },
              { id: "b", text: "Requires sensory evidence" },
              { id: "c", text: "Goes from general premises to specific conclusions" },
              { id: "d", text: "Goes from specific observations to general conclusions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deduction", statement: "Reasoning from general premises to a specific conclusion that follows necessarily." },
            ],
            steps: [
              { reasoning: "Deduction moves from general to particular with certainty.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** From general premises to specific conclusions",
            commonErrors: ["Reversing deduction and induction."],
          },
        },
        {
          id: "tok-u1-l12c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why inductive reasoning can never produce certain knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Problem of induction", statement: "No finite set of observations can guarantee a universal claim." },
            ],
            steps: [
              { reasoning: "Induction generalises from observed cases to all cases.", marks: 1, markCode: "M" },
              { reasoning: "Unobserved cases may behave differently — a single counterexample refutes the law.", marks: 1, markCode: "M" },
              { reasoning: "Therefore inductive conclusions are probable and revisable, not certain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Finite observations cannot cover all possible cases, so inductive generalisations remain probabilistic.",
            commonErrors: ["Claiming induction is useless — it is the basis of empirical science despite its limits."],
          },
        },
        {
          id: "tok-u1-l12c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that reason is the most reliable way of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reliability of reason", statement: "Reason is systematic and testable but depends on premises it cannot verify alone." },
            ],
            steps: [
              { reasoning: "For: reason detects contradictions and guarantees conclusions within valid systems like mathematics.", marks: 1, markCode: "M" },
              { reasoning: "Against: reason cannot supply its own premises; garbage in, garbage out — false premises yield valid but unsound arguments.", marks: 1, markCode: "M" },
              { reasoning: "Reason is also limited by language and human cognitive biases in applying it.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: highly reliable as a tool but must be combined with perception, evidence and other ways of knowing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reason is powerful but not self-sufficient; it needs true premises and is best used alongside other ways of knowing.",
            commonErrors: ["Treating reason as infallible or irrelevant."],
          },
        },
        {
          id: "tok-u1-l12c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of reason in producing knowledge.",
          parts: [
            { label: "a", prompt: "Distinguish between deduction and induction with an example of each.", marks: 3 },
            { label: "b", prompt: "Explain two areas of knowledge that depend heavily on reason.", marks: 2 },
            { label: "c", prompt: "Evaluate whether reason alone can establish truth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reason in knowledge", statement: "Reason structures and tests knowledge but cannot generate premises from nothing." },
            ],
            steps: [
              { part: "a", reasoning: "Deduction: general to specific, certain (e.g. syllogism about mortality).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Induction: specific to general, probable (e.g. all observed swans white).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly distinguished with examples.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mathematics: proof and logical deduction within axioms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Natural sciences: hypothesis testing and inductive generalisation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reason alone cannot verify its premises match reality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Consistency is not truth — internally valid arguments can rest on false assumptions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: reason establishes implications, not facts; truth needs evidence from other ways of knowing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deduction certain, induction probable. (b) Mathematics and sciences. (c) Reason gives validity, not truth.",
            commonErrors: ["Confusing logical validity with factual truth."],
          },
        },
        {
          id: "tok-u1-l12c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Deduction guarantees its conclusion because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The conclusion follows necessarily if the premises are true" },
              { id: "b", text: "It uses gut feelings about correctness" },
              { id: "c", text: "It is based on many observations" },
              { id: "d", text: "It has been repeated many times" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deductive guarantee", statement: "If premises are true and the inference valid, the conclusion cannot be false." },
            ],
            steps: [
              { reasoning: "Deduction is truth-preserving: true premises yield a necessarily true conclusion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The conclusion follows necessarily from true premises",
            commonErrors: ["Thinking deduction depends on probability."],
          },
        },
        {
          id: "tok-u1-l12c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'All observed swans are white, so all swans are white' is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faith" },
              { id: "b", text: "Induction" },
              { id: "c", text: "Perception alone" },
              { id: "d", text: "Deduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Induction", statement: "Reasoning from specific observations to a general conclusion that is probable, not certain." },
            ],
            steps: [
              { reasoning: "The argument moves from observed cases to a universal claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Induction",
            commonErrors: ["Confusing induction with deduction."],
          },
        },
        {
          id: "tok-u1-l12c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A logically valid argument that begins with a false premise will produce:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A contradiction in all cases" },
              { id: "b", text: "No conclusion at all" },
              { id: "c", text: "A conclusion that is certainly true" },
              { id: "d", text: "A conclusion that may be false — valid but unsound" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Validity vs soundness", statement: "Validity concerns the inference; soundness additionally requires true premises." },
            ],
            steps: [
              { reasoning: "Validity preserves truth only if premises are true; false premises can yield false conclusions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A possibly false conclusion — valid but unsound",
            commonErrors: ["Confusing validity with truth."],
          },
        },
        {
          id: "tok-u1-l12c1q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a logically valid argument and a true conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Validity vs truth", statement: "Validity is about the structure of inference; truth is about correspondence with reality." },
            ],
            steps: [
              { reasoning: "Validity means the conclusion follows necessarily from the premises.", marks: 1, markCode: "M" },
              { reasoning: "An argument can be valid even when its premises — and hence its conclusion — are false.", marks: 1, markCode: "M" },
              { reasoning: "Truth requires the premises to match reality, which reason alone cannot verify.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: reason guarantees validity of inference, not truth of premises.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Validity concerns inference structure; truth requires premises that correspond to reality.",
            commonErrors: ["Equating a valid argument with a true one."],
          },
        },
        {
          id: "tok-u1-l12c1q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why reason cannot produce knowledge without input from other ways of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reason's dependence", statement: "Reason operates on premises supplied by perception, memory, language, emotion or faith." },
            ],
            steps: [
              { reasoning: "Reason transforms given premises; it cannot generate premises from nothing.", marks: 1, markCode: "M" },
              { reasoning: "Perception supplies observations, memory supplies stored facts, language supplies meanings.", marks: 1, markCode: "M" },
              { reasoning: "If premises are false or absent, even perfect reasoning yields unsound conclusions.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: reason is a tool that depends on other ways of knowing for its raw material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reason needs premises from perception, memory, language or other ways of knowing to operate.",
            commonErrors: ["Presenting reason as self-sufficient."],
          },
        },
        {
          id: "tok-u1-l12c1q10",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain why the reliability of reasoning depends on the reliability of its premises.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Premise dependence", statement: "Reason preserves truth but cannot create it; errors in premises propagate to conclusions." },
            ],
            steps: [
              { reasoning: "Deduction guarantees the conclusion only if premises are true.", marks: 1, markCode: "M" },
              { reasoning: "Induction generalises from evidence, so weak or biased evidence weakens the conclusion.", marks: 1, markCode: "M" },
              { reasoning: "Premises come from perception, memory, testimony or authority — each fallible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore a flawless inference can still deliver a false conclusion.", marks: 1, markCode: "R" },
              { reasoning: "Checking premises requires other ways of knowing, not more reasoning alone.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: reasoning is only as reliable as the claims it starts from.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reason propagates rather than corrects errors in premises, so its reliability depends on its inputs.",
            commonErrors: ["Blaming reasoning for failures that originate in false premises."],
          },
        },
        {
          id: "tok-u1-l12c1q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how induction is used in the natural sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Induction in science", statement: "Science generalises from repeated observations and experiments to laws and theories." },
            ],
            steps: [
              { reasoning: "Scientists observe phenomena and collect data through controlled experiments.", marks: 1, markCode: "M" },
              { reasoning: "They generalise patterns into hypotheses, laws and theories.", marks: 1, markCode: "M" },
              { reasoning: "These generalisations remain probabilistic and are revised when counterevidence appears.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: induction underpins scientific knowledge but keeps it revisable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science uses induction to build general laws from observations, keeping them open to revision.",
            commonErrors: ["Claiming scientific laws are certain like mathematical theorems."],
          },
        },
        {
          id: "tok-u1-l12c1q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that deductive reasoning provides certain knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Certainty of deduction", statement: "Deduction is certain within its premises, but certainty does not extend to the premises themselves." },
            ],
            steps: [
              { reasoning: "For: given true premises, deduction yields conclusions that cannot be false.", marks: 1, markCode: "M" },
              { reasoning: "For: mathematics achieves certainty through deduction within axiom systems.", marks: 1, markCode: "M" },
              { reasoning: "Against: the certainty is conditional — premises must be independently established.", marks: 1, markCode: "R" },
              { reasoning: "Against: axioms and definitions are chosen, so certainty is relative to a system.", marks: 1, markCode: "R" },
              { reasoning: "Deduction guarantees implications, not the truth of starting claims.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: deduction provides certainty about what follows, not about what is.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deduction gives certainty within a system but cannot certify its premises; certainty is conditional.",
            commonErrors: ["Treating deductive certainty as unconditional truth."],
          },
        },
        {
          id: "tok-u1-l12c1q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of reason in the production of knowledge.",
          parts: [
            { label: "a", prompt: "Distinguish deduction from induction with an example of each.", marks: 3 },
            { label: "b", prompt: "Explain two ways reason depends on other ways of knowing.", marks: 2 },
            { label: "c", prompt: "Evaluate whether reason can produce knowledge entirely by itself.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reason in knowledge", statement: "Reason structures and tests knowledge but cannot generate premises from nothing." },
            ],
            steps: [
              { part: "a", reasoning: "Deduction: general to specific, certain if premises true.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Induction: specific to general, probable and revisable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly exemplified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Premises come from perception, memory, language and testimony.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Meaning and definitions are supplied by language and shared conventions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reason alone cannot verify premises match reality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Consistency is not truth — valid arguments can rest on false assumptions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: reason establishes implications; other ways of knowing supply and check facts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deduction certain, induction probable. (b) Depends on premises and meanings from others. (c) Reason gives validity, not truth.",
            commonErrors: ["Treating reason as a self-sufficient source of knowledge."],
          },
        },
        {
          id: "tok-u1-l12c1q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement about inductive reasoning is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its conclusions are probable and open to revision" },
              { id: "b", text: "It requires no observations" },
              { id: "c", text: "Its conclusions are certain" },
              { id: "d", text: "It always produces contradictions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inductive probability", statement: "Induction yields probable conclusions that remain revisable." },
            ],
            steps: [
              { reasoning: "Finite observations cannot guarantee a universal claim.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Probable and open to revision",
            commonErrors: ["Believing induction can be certain."],
          },
        },
        {
          id: "tok-u1-l12c1q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "The phrase 'garbage in, garbage out' describes the problem that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reasoning preserves and propagates errors in its premises" },
              { id: "b", text: "Reasoning computers produce errors randomly" },
              { id: "c", text: "Language cannot express numbers" },
              { id: "d", text: "Memory always fails" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Premise propagation", statement: "Reason preserves the truth-status of premises; false premises yield unreliable conclusions." },
            ],
            steps: [
              { reasoning: "Reason transforms premises faithfully, including their errors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reasoning propagates errors in premises",
            commonErrors: ["Thinking reasoning can correct bad premises."],
          },
        },
        {
          id: "tok-u1-l12c1q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "The primary role of reason in mathematics is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testing claims against physical evidence" },
              { id: "b", text: "Appealing to authority and tradition" },
              { id: "c", text: "Deductive proof from definitions and axioms" },
              { id: "d", text: "Generating hypotheses through imagination" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reason in mathematics", statement: "Mathematics builds knowledge through deductive proof within axiom systems." },
            ],
            steps: [
              { reasoning: "Mathematical knowledge is produced by deduction, not experiment or authority.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Deductive proof from axioms",
            commonErrors: ["Confusing mathematics with empirical science."],
          },
        },
        {
          id: "tok-u1-l12c1q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a logically valid argument can still lead to a false conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Validity without soundness", statement: "Validity guarantees the inference form only; false premises can yield false conclusions." },
            ],
            steps: [
              { reasoning: "Validity means the conclusion follows necessarily from the premises as stated.", marks: 1, markCode: "M" },
              { reasoning: "If a premise is false, the conclusion may be false even though the inference is valid.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'All cats are mammals; all mammals are fish; therefore all cats are fish' is valid but false.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: checking premises is as important as checking the inference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Valid inference preserves truth only when premises are true; false premises produce false conclusions.",
            commonErrors: ["Assuming validity guarantees truth."],
          },
        },
        {
          id: "tok-u1-l12c1q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two people use reason to reach opposite conclusions about the same evidence. Evaluate what this shows about the reliability of reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reason and disagreement", statement: "Reason is a tool; disagreement often reflects different premises, values or starting assumptions." },
            ],
            steps: [
              { reasoning: "Reason applied to the same premises should converge, so disagreement suggests different premises or interpretations.", marks: 1, markCode: "M" },
              { reasoning: "Values and frameworks can act as hidden premises in reasoning.", marks: 1, markCode: "M" },
              { reasoning: "This shows reason is reliable as a tool but not self-correcting about its inputs.", marks: 1, markCode: "R" },
              { reasoning: "It also shows reasoning can be deployed to justify prior commitments (motivated reasoning).", marks: 1, markCode: "R" },
              { reasoning: "Careful examination of premises can often resolve the disagreement.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: reason is dependable in method but must be checked against evidence and shared premises.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Disagreement shows reason depends on premises and frameworks; it is reliable as a method, not self-sufficient.",
            commonErrors: ["Concluding reason is worthless because people disagree."],
          },
        },
        {
          id: "tok-u1-l12c1q19",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Knowledge question: To what extent can reason alone produce knowledge?",
          parts: [
            { label: "a", prompt: "Explain two things reason can accomplish by itself.", marks: 3 },
            { label: "b", prompt: "Explain two things reason cannot accomplish by itself.", marks: 2 },
            { label: "c", prompt: "Reach a justified conclusion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Autonomy of reason", statement: "Reason can establish implications and internal consistency but cannot verify premises alone." },
            ],
            steps: [
              { part: "a", reasoning: "Reason can derive necessary implications from accepted premises.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reason can detect contradictions and test internal consistency.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reason can prove theorems within axiom systems.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reason cannot supply the premises themselves — they come from other ways of knowing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reason cannot verify that premises match reality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Within a system, reason produces certain knowledge.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "About the world, reason needs empirical and other inputs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: reason alone produces conditional and internal knowledge, not knowledge of reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Implications, consistency, proofs. (b) Premises, correspondence to reality. (c) Conditional and internal knowledge only.",
            commonErrors: ["Either exalting or dismissing reason entirely."],
          },
        },
        {
          id: "tok-u1-l12c1q20",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The claim that 'reason is self-sufficient' is best refuted by noting that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reason is too slow to be useful" },
              { id: "b", text: "Reason only works in mathematics" },
              { id: "c", text: "Reason cannot generate its own premises from nothing" },
              { id: "d", text: "Reason contradicts perception in all cases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Non-autonomy of reason", statement: "Reason needs premises supplied by perception, memory, language or other ways of knowing." },
            ],
            steps: [
              { reasoning: "Reason transforms inputs; it does not create raw material for knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reason cannot generate its own premises",
            commonErrors: ["Treating reason as independent of other ways of knowing."],
          },
        },
      ],
    },
    {
      id: "tok-u1-intuition-memory",
      title: "Intuition and memory as ways of knowing",
      skill: "Evaluate immediate knowing through intuition and the reliability of memory as a source of knowledge.",
      lesson: {
        sections: [
          {
            heading: "Intuition: knowing without reasoning",
            body: "Intuition is immediate, non-inferential knowing — a 'gut feeling' or flash of insight. Experts often rely on intuition trained by thousands of hours of practice (chess masters 'seeing' moves, doctors sensing diagnoses). Intuition can be remarkably accurate when grounded in experience, but it is also susceptible to bias, emotion and wishful thinking.",
          },
          {
            heading: "Memory: the archive of knowledge",
            body: "Memory stores and retrieves what we have learned — facts, skills, experiences. Without memory, every perception would be new and no learning could accumulate. But memory is reconstructive: each recall rebuilds the memory and can introduce errors, distortions and contamination from later information.",
          },
          {
            heading: "When to trust them",
            body: "Intuition deserves trust when it is trained and the stakes allow it; memory deserves trust when corroborated by records or other witnesses. Both ways of knowing are fast but fragile — they are best used as prompts for further investigation rather than final authorities.",
          },
        ],
        keyFormulas: [
          { name: "Intuition", statement: "Immediate knowing without conscious reasoning — fast but bias-prone" },
          { name: "Memory", statement: "Reconstructive storage and retrieval — useful but distortable" },
        ],
        workedExample: {
          problem: "A chess master instantly chooses a strong move without analysis. Is this intuition or reason?",
          solution: "It is trained intuition: pattern recognition built by experience. It is reliable in the expert's domain but should still be checked in novel or high-stakes situations — intuition is expertise compressed, not magic.",
        },
      },
      questions: [
        {
          id: "tok-u1-l12c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Intuition is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interpretation of sensory data" },
              { id: "b", text: "Storage of past events" },
              { id: "c", text: "Immediate knowing without conscious reasoning" },
              { id: "d", text: "Logical deduction from premises" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intuition", statement: "Immediate knowing or 'gut feeling' without conscious reasoning." },
            ],
            steps: [
              { reasoning: "Intuition is non-inferential immediate awareness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Immediate knowing without conscious reasoning",
            commonErrors: ["Confusing intuition with memory or perception."],
          },
        },
        {
          id: "tok-u1-l12c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why memory is described as 'reconstructive' rather than a perfect recording.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reconstructive memory", statement: "Each recall rebuilds the memory and can introduce errors and distortions." },
            ],
            steps: [
              { reasoning: "Memory does not replay a fixed recording; it rebuilds the event at recall.", marks: 1, markCode: "M" },
              { reasoning: "Later information, expectations and emotion reshape what is remembered.", marks: 1, markCode: "M" },
              { reasoning: "Consequence: eyewitness testimony and personal recollection can be confidently wrong.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Memory rebuilds rather than replays, so recall is shaped by later knowledge and emotion and can distort the original event.",
            commonErrors: ["Assuming confident memory equals accurate memory."],
          },
        },
        {
          id: "tok-u1-l12c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the reliability of intuition as a way of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reliability of intuition", statement: "Trained intuition can be accurate; untrained intuition is bias-prone." },
            ],
            steps: [
              { reasoning: "For: experts' intuition reflects compressed experience and can outperform slow analysis in familiar domains.", marks: 1, markCode: "M" },
              { reasoning: "Against: intuition is vulnerable to bias, emotion, stereotyping and overconfidence.", marks: 1, markCode: "M" },
              { reasoning: "Domain matters: reliable within trained areas, unreliable outside them.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: intuition is a useful heuristic but should be verified when stakes are high.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intuition is reliable when trained within its domain but dangerous as a general method; verify when possible.",
            commonErrors: ["Treating all intuition as either magic or worthless."],
          },
        },
        {
          id: "tok-u1-l12c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the roles of intuition and memory in knowledge.",
          parts: [
            { label: "a", prompt: "Define intuition and memory and give an example of each producing knowledge.", marks: 3 },
            { label: "b", prompt: "Explain two ways each can lead to false beliefs.", marks: 3 },
            { label: "c", prompt: "Evaluate when these ways of knowing should be trusted.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intuition and memory", statement: "Both are fast, experience-based ways of knowing that are useful but fallible." },
            ],
            steps: [
              { part: "a", reasoning: "Intuition defined: immediate knowing; example: expert pattern recognition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Memory defined: storage/retrieval; example: recalling a learned fact or skill.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly exemplified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Intuition: bias, emotion and stereotyping produce wrong 'gut feelings'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Memory: reconstructive recall introduces errors and false details.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second limitation for either: overconfidence in the output.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Trust trained intuition in familiar domains; verify novel/high-stakes cases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Corroborate memory with records, witnesses or reasoning before relying on it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Both defined and exemplified. (b) Intuition: bias; memory: distortion. (c) Trust with domain-awareness and corroboration.",
            commonErrors: ["Ignoring the difference between trained and untrained intuition."],
          },
        },
        {
          id: "tok-u1-l12c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Trained intuition is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random guessing with no basis" },
              { id: "b", text: "Logical deduction performed quickly" },
              { id: "c", text: "Pattern recognition built up through extensive experience" },
              { id: "d", text: "Memorised facts recalled instantly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trained intuition", statement: "Expert intuition is compressed pattern recognition from thousands of hours of practice." },
            ],
            steps: [
              { reasoning: "Trained intuition reflects experience encoded as rapid pattern recognition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Pattern recognition from experience",
            commonErrors: ["Treating all intuition as untrained guessing."],
          },
        },
        {
          id: "tok-u1-l12c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Memory is described as 'reconstructive' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each recall rebuilds the memory and can introduce distortions" },
              { id: "b", text: "It stores events as perfect recordings" },
              { id: "c", text: "It only works for recent events" },
              { id: "d", text: "It deletes all emotional content" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reconstructive memory", statement: "Recall rebuilds rather than replays, allowing errors and contamination." },
            ],
            steps: [
              { reasoning: "Memory reconstructs events at recall rather than replaying fixed recordings.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Recall rebuilds and can distort the memory",
            commonErrors: ["Imagining memory as a video recording."],
          },
        },
        {
          id: "tok-u1-l12c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A chess master instantly choosing a strong move without analysis illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faulty memory" },
              { id: "b", text: "Trained intuition through pattern recognition" },
              { id: "c", text: "Coincidence" },
              { id: "d", text: "Deductive reasoning" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expert pattern recognition", statement: "Experts perceive familiar patterns instantly through trained intuition." },
            ],
            steps: [
              { reasoning: "The master's instant choice reflects compressed experience, not slow analysis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Trained intuition through pattern recognition",
            commonErrors: ["Calling expert skill 'guessing'."],
          },
        },
        {
          id: "tok-u1-l12c2q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why trained intuition can be reliable within an expert's domain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Domain-specific intuition", statement: "Intuition built by extensive practice encodes valid patterns for that domain." },
            ],
            steps: [
              { reasoning: "Repeated practice stores thousands of patterns linking cues to outcomes.", marks: 1, markCode: "M" },
              { reasoning: "In familiar situations these patterns yield accurate rapid judgments.", marks: 1, markCode: "M" },
              { reasoning: "The reliability depends on the domain matching the training.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: trained intuition is reliable within its domain, not universally.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Trained intuition encodes valid domain patterns, making it accurate within areas of expertise.",
            commonErrors: ["Generalising expert intuition to unrelated domains."],
          },
        },
        {
          id: "tok-u1-l12c2q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why memory is essential for the accumulation of knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Memory as archive", statement: "Without memory every perception would be new and no learning could accumulate." },
            ],
            steps: [
              { reasoning: "Memory stores learned facts, skills and experiences for later use.", marks: 1, markCode: "M" },
              { reasoning: "Learning builds on what is remembered — new knowledge extends stored knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Language, science and culture all depend on transmitted and stored knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: memory is the condition for cumulative knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Memory enables knowledge to accumulate across time by storing and retrieving what has been learned.",
            commonErrors: ["Treating memory as a minor cognitive accessory."],
          },
        },
        {
          id: "tok-u1-l12c2q10",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate the claim that intuition is 'just guessing.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nature of intuition", statement: "Intuition ranges from untrained bias to expert pattern recognition." },
            ],
            steps: [
              { reasoning: "Against the claim: trained intuition reflects real experience and can outperform analysis.", marks: 1, markCode: "M" },
              { reasoning: "Against: intuition sometimes arrives as genuine insight before reasoning catches up.", marks: 1, markCode: "M" },
              { reasoning: "For the claim: untrained intuition is often bias, emotion or stereotyping.", marks: 1, markCode: "M" },
              { reasoning: "For: intuition gives no reasons, so it cannot be examined or corrected easily.", marks: 1, markCode: "R" },
              { reasoning: "The distinction is training and domain, not intuition per se.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: intuition is not mere guessing but is unreliable without training and verification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intuition is not just guessing — trained intuition can be highly accurate — but it needs domain match and verification.",
            commonErrors: ["One-sided dismissal or uncritical acceptance of intuition."],
          },
        },
        {
          id: "tok-u1-l12c2q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how memory can produce false memories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "False memory", statement: "Memory reconstruction can blend real events with suggestions, producing confident but false recollections." },
            ],
            steps: [
              { reasoning: "Each recall rebuilds the memory, allowing later information to merge with the original.", marks: 1, markCode: "M" },
              { reasoning: "Suggestions, leading questions and repeated retelling can implant false details.", marks: 1, markCode: "M" },
              { reasoning: "Emotion and imagination fill gaps in incomplete memories.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: memory can be sincerely held yet factually wrong.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reconstructive recall lets suggestions and later information blend into memory, creating false but confident recollections.",
            commonErrors: ["Assuming confidence in a memory proves its accuracy."],
          },
        },
        {
          id: "tok-u1-l12c2q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the reliability of memory as a way of knowing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reliability of memory", statement: "Memory is indispensable but reconstructive and vulnerable to distortion." },
            ],
            steps: [
              { reasoning: "For: memory makes cumulative knowledge, skill and identity possible.", marks: 1, markCode: "M" },
              { reasoning: "For: well-encoded, rehearsed and corroborated memories are often accurate.", marks: 1, markCode: "M" },
              { reasoning: "Against: reconstructive recall introduces errors, omissions and false details.", marks: 1, markCode: "M" },
              { reasoning: "Against: emotion, suggestion and bias systematically distort memory.", marks: 1, markCode: "R" },
              { reasoning: "Memory is strongest for meaning and gist rather than exact detail.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: memory is a useful but fallible way of knowing that requires corroboration for important claims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Memory is essential but fallible; important memories should be corroborated by records or other evidence.",
            commonErrors: ["Either trusting memory completely or dismissing it entirely."],
          },
        },
        {
          id: "tok-u1-l12c2q13",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the roles of intuition and memory in knowledge.",
          parts: [
            { label: "a", prompt: "Define intuition and memory and give an example of each producing knowledge.", marks: 3 },
            { label: "b", prompt: "Explain two ways each can lead to false beliefs.", marks: 3 },
            { label: "c", prompt: "Evaluate when these ways of knowing should be trusted.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intuition and memory", statement: "Both are fast, experience-based ways of knowing that are useful but fallible." },
            ],
            steps: [
              { part: "a", reasoning: "Intuition defined: immediate knowing; example: expert pattern recognition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Memory defined: storage/retrieval; example: recalling a learned fact or skill.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly exemplified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Intuition: bias, emotion and stereotyping produce wrong 'gut feelings'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Memory: reconstructive recall introduces errors and false details.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second limitation for either: overconfidence in the output.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Trust trained intuition in familiar domains; verify novel or high-stakes cases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Corroborate memory with records, witnesses or reasoning before relying on it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Both defined and exemplified. (b) Intuition: bias; memory: distortion. (c) Trust with domain-awareness and corroboration.",
            commonErrors: ["Ignoring the difference between trained and untrained intuition."],
          },
        },
        {
          id: "tok-u1-l12c2q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which situation best illustrates intuition rather than deliberate reasoning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A firefighter sensing danger and evacuating before analysing the situation" },
              { id: "b", text: "A judge reading a written verdict aloud" },
              { id: "c", text: "A student checking each step of a long calculation" },
              { id: "d", text: "A scientist recording data in a table" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intuition in action", statement: "Intuition is immediate knowing that precedes conscious analysis." },
            ],
            steps: [
              { reasoning: "The firefighter's instant sense of danger is non-inferential immediate knowing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Sensing danger before analysing",
            commonErrors: ["Confusing quick reasoning with intuition."],
          },
        },
        {
          id: "tok-u1-l12c2q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Intuition is most likely to be reliable when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The person has no relevant experience" },
              { id: "b", text: "The decision is purely emotional" },
              { id: "c", text: "The stakes are extremely high and unfamiliar" },
              { id: "d", text: "The person is trained in that domain and the situation is familiar" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conditions for reliable intuition", statement: "Trained intuition is reliable within familiar domains." },
            ],
            steps: [
              { reasoning: "Training builds the patterns that make intuition accurate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Trained and in a familiar domain",
            commonErrors: ["Trusting intuition outside areas of expertise."],
          },
        },
        {
          id: "tok-u1-l12c2q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Eyewitness misidentification often results from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deliberate lying by all witnesses" },
              { id: "b", text: "Reconstructive memory and information learned after the event" },
              { id: "c", text: "Perfect memory recordings" },
              { id: "d", text: "Instruments measuring too precisely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eyewitness error", statement: "Memory reconstruction and post-event information contaminate eyewitness accounts." },
            ],
            steps: [
              { reasoning: "Recall rebuilds memory and later suggestions can alter it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reconstructive memory and post-event information",
            commonErrors: ["Assuming eyewitness error implies dishonesty."],
          },
        },
        {
          id: "tok-u1-l12c2q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why an expert's intuition can outperform slow deliberate analysis in familiar situations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expertise compression", statement: "Years of practice compress into pattern recognition that operates faster and often more accurately than analysis." },
            ],
            steps: [
              { reasoning: "Experts have encoded vast numbers of domain patterns through experience.", marks: 1, markCode: "M" },
              { reasoning: "Recognition of a familiar pattern triggers the right response almost instantly.", marks: 1, markCode: "M" },
              { reasoning: "Deliberate analysis is slower and may miss the holistic pattern the expert sees.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: in familiar domains intuition can exceed analysis; in novel ones it fails.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expert intuition compresses experience into fast accurate pattern recognition that beats slow analysis in familiar domains.",
            commonErrors: ["Claiming experts think less, therefore think worse."],
          },
        },
        {
          id: "tok-u1-l12c2q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether intuition should be trusted in high-stakes decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intuition under stakes", statement: "High stakes demand verification; intuition is a fast heuristic, not a final authority." },
            ],
            steps: [
              { reasoning: "For: trained intuition in familiar domains can be more accurate than rushed analysis.", marks: 1, markCode: "M" },
              { reasoning: "For: sometimes no time exists for full analysis — intuition is the only option.", marks: 1, markCode: "M" },
              { reasoning: "Against: intuition is invisible — it cannot be examined, audited or corrected.", marks: 1, markCode: "R" },
              { reasoning: "Against: high stakes amplify the cost of bias and error.", marks: 1, markCode: "R" },
              { reasoning: "Intuition should trigger further checks, not terminate them.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: trust trained intuition as a prompt, but verify before irreversible high-stakes acts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intuition may guide but should not decide high-stakes matters; verification is essential.",
            commonErrors: ["All-or-nothing trust or distrust of intuition."],
          },
        },
        {
          id: "tok-u1-l12c2q19",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Knowledge question: Can memory ever be a reliable way of knowing?",
          parts: [
            { label: "a", prompt: "Describe two strengths of memory as a source of knowledge.", marks: 2 },
            { label: "b", prompt: "Explain three ways memory can mislead.", marks: 3 },
            { label: "c", prompt: "Reach a justified conclusion about memory's reliability.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Memory reliability", statement: "Memory enables cumulative knowledge but is reconstructive and fallible." },
            ],
            steps: [
              { part: "a", reasoning: "Makes learning and skill accumulation possible.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Preserves experiences and knowledge across time for later use.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reconstructive recall introduces errors and omissions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Post-event information and suggestion contaminate memory.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Emotion and bias distort what is remembered.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Memory is reliable for gist and meaning more than exact detail.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Important memories need corroboration by records, witnesses or reasoning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: memory is a reliable way of knowing in degree, when corroborated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Enables accumulation, preserves experience. (b) Reconstruction, contamination, bias. (c) Reliable in degree with corroboration.",
            commonErrors: ["Treating memory as either infallible or useless."],
          },
        },
        {
          id: "tok-u1-l12c2q20",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The best way to check a vivid personal memory is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ask someone with the same memory" },
              { id: "b", text: "Corroborate it with records, witnesses or reasoning" },
              { id: "c", text: "Discard it because memory is always wrong" },
              { id: "d", text: "Trust it because it feels clear" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Corroborating memory", statement: "Vividness does not guarantee accuracy; external checks are needed." },
            ],
            steps: [
              { reasoning: "Memory is reconstructive, so independent corroboration is required.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Corroborate with records, witnesses or reasoning",
            commonErrors: ["Equating vividness with accuracy."],
          },
        },
      ],
    },
  ],
};
