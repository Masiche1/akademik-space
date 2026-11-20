import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "tok-u2-lesson-2-1",
  code: "2-1",
  title: "Mathematics and the Natural Sciences",
  goal: "I CAN compare the nature of knowledge in mathematics and the natural sciences and evaluate their claims to certainty.",
  standards: ["TOK", "Areas of Knowledge", "Mathematics", "Natural Sciences"],
  vocabulary: [
    { term: "Area of knowledge", definition: "A recognised domain in which knowledge is produced and evaluated by characteristic methods." },
    { term: "Axiom", definition: "A statement accepted as true without proof, serving as a foundation for reasoning." },
    { term: "Empirical", definition: "Based on observation and experiment rather than pure reason or authority." },
    { term: "Hypothesis", definition: "A proposed explanation subject to testing against evidence." },
    { term: "Falsifiability", definition: "The property of a claim that it could in principle be proven false by evidence." },
    { term: "Paradigm", definition: "A dominant framework of assumptions and methods within a field of knowledge." },
  ],
  concepts: [
    {
      id: "tok-u2-mathematics",
      title: "Mathematics as an area of knowledge",
      skill: "Explain how mathematics produces certain knowledge and evaluate the role of intuition and proof.",
      lesson: {
        sections: [
          {
            heading: "The nature of mathematical knowledge",
            body: "Mathematics studies abstract structures — numbers, shapes, patterns — using definitions, axioms and deductive proof. Within a system, once axioms are accepted, conclusions are certain: a proved theorem cannot be 'probably true'. Mathematics is the paradigm of certain, objective knowledge.",
          },
          {
            heading: "The discovery-invention debate",
            body: "Do mathematicians discover truths that exist independently, or invent useful structures? Platonists say mathematical objects exist independently of minds; formalists say mathematics is a game of symbols. Either way, proofs guarantee internal truth — though whether mathematics describes the physical world is a separate question.",
          },
          {
            heading: "Limits and surprises",
            body: "Mathematics contains truths we cannot intuitively grasp (infinite sets, non-Euclidean geometries) and truths we cannot prove within a system (Gödel's incompleteness). Intuition guides discovery, but only proof confers certainty. Mathematics is certain about its own structures — its relationship to reality is mediated by the natural sciences.",
          },
        ],
        keyFormulas: [
          { name: "Mathematical certainty", statement: "Within accepted axioms, deductive proof guarantees truth" },
          { name: "Key limit", statement: "Certainty is internal — applies to the system, not necessarily to reality" },
        ],
        workedExample: {
          problem: "Is a mathematical theorem 'true' in the same way a scientific law is true?",
          solution: "No. A theorem is certain relative to its axioms and definitions — it cannot be false without contradiction. A scientific law is an empirical generalisation that remains open to revision. Mathematics gives certainty about abstract structure; science gives probable knowledge about the world.",
        },
      },
      questions: [
        {
          id: "tok-u2-l21c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In mathematics, knowledge is primarily produced through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Empirical experiment" },
              { id: "b", text: "Deductive proof from axioms" },
              { id: "c", text: "Authority and tradition" },
              { id: "d", text: "Emotional intuition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mathematical method", statement: "Mathematics builds knowledge through definitions, axioms and deductive proof." },
            ],
            steps: [
              { reasoning: "Mathematics proceeds by deduction from accepted axioms, not experiment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deductive proof from axioms",
            commonErrors: ["Confusing mathematics with empirical science."],
          },
        },
        {
          id: "tok-u2-l21c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why mathematical knowledge is considered certain while scientific knowledge is not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Certainty comparison", statement: "Mathematical theorems are certain within axioms; scientific laws are empirical generalisations open to revision." },
            ],
            steps: [
              { reasoning: "Mathematics proves conclusions necessarily from axioms — no counterexample is possible.", marks: 1, markCode: "M" },
              { reasoning: "Science relies on induction from finite observations, which remain revisable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore mathematics is certain about abstract structure; science is probable about the world.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mathematical proofs are deductively necessary within their systems; scientific claims are inductive and open to falsification.",
            commonErrors: ["Claiming mathematics is certain about physical reality — it is certain about its own structures."],
          },
        },
        {
          id: "tok-u2-l21c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that mathematics discovers truths rather than inventing them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Discovery vs invention", statement: "Mathematicians disagree: Platonists see discovery of independent truths; formalists see invention of useful systems." },
            ],
            steps: [
              { reasoning: "For discovery: theorems often surprise their discoverers, suggesting truths exist independently.", marks: 1, markCode: "M" },
              { reasoning: "For invention: mathematicians choose axioms and definitions; different axioms yield different valid systems.", marks: 1, markCode: "M" },
              { reasoning: "Pragmatic view: mathematics is invented as a system but discovers consequences within it.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: the question may be undecidable; what matters is that proofs guarantee internal truth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both views have merit; certainty comes from proof within a chosen system regardless of whether truths are discovered or invented.",
            commonErrors: ["Treating the debate as settled."],
          },
        },
        {
          id: "tok-u2-l21c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the claim that mathematics provides the most certain knowledge available.",
          parts: [
            { label: "a", prompt: "Explain how mathematics achieves certainty.", marks: 2 },
            { label: "b", prompt: "Explain two limits to mathematical certainty.", marks: 3 },
            { label: "c", prompt: "Evaluate whether mathematical certainty equals knowledge of reality.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mathematical certainty", statement: "Proof guarantees truth within axioms; limits include unprovable truths and abstraction from reality." },
            ],
            steps: [
              { part: "a", reasoning: "Deduction from accepted axioms produces conclusions that cannot be false without contradiction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verification is internal — proofs can be checked by anyone.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gödel: some truths cannot be proved within the system.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Axioms themselves are chosen, not proved — certainty rests on accepted foundations.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Mathematics describes abstract structures, not directly observable reality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Mathematical certainty is about the system, not about the world.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Applied mathematics describes reality only approximately and through modelling choices.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: most certain internally, but its relation to reality depends on the sciences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Deduction from axioms. (b) Gödel limits, chosen axioms, abstraction. (c) Certain internally, approximate about reality.",
            commonErrors: ["Assuming mathematical certainty automatically applies to the physical world."],
          },
        },
        {
          id: "tok-u2-l21c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What mainly distinguishes a mathematical proof from empirical evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It depends on repeated observation" },
              { id: "b", text: "It guarantees truth within the accepted axioms" },
              { id: "c", text: "It is accepted because authorities endorse it" },
              { id: "d", text: "It cannot be checked by other people" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deductive certainty", statement: "Within accepted axioms, a valid proof makes its conclusion necessarily true." },
            ],
            steps: [
              { reasoning: "A proof derives conclusions deductively rather than from observation alone.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It guarantees truth within the accepted axioms",
            commonErrors: ["Confusing deductive proof with inductive empirical support."],
          },
        },
        {
          id: "tok-u2-l21c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A Platonist about mathematics would most likely claim that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mathematics is only a useful notation" },
              { id: "b", text: "Mathematical objects exist independently of human minds" },
              { id: "c", text: "All mathematical truths are invented by convention" },
              { id: "d", text: "Mathematics has no connection to abstract structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mathematical Platonism", statement: "Mathematical objects and truths exist independently of human thought." },
            ],
            steps: [
              { reasoning: "Platonism treats mathematical entities as real and independent.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mathematical objects exist independently of human minds",
            commonErrors: ["Confusing Platonism with formalism."],
          },
        },
        {
          id: "tok-u2-l21c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "According to the formalist view, mathematics is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A description of physical reality" },
              { id: "b", text: "A game of symbols governed by rules" },
              { id: "c", text: "A set of religious revelations" },
              { id: "d", text: "An empirical science of quantity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mathematical formalism", statement: "Mathematics is a formal system of symbols and transformation rules." },
            ],
            steps: [
              { reasoning: "Formalism emphasises symbols and rules rather than independent objects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A game of symbols governed by rules",
            commonErrors: ["Treating formalism as the claim that mathematics is unreal or useless."],
          },
        },
        {
          id: "tok-u2-l21c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Gödel's incompleteness results are important for TOK because they suggest that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All mathematics is false" },
              { id: "b", text: "Some truths may be unprovable within a system" },
              { id: "c", text: "Proof is unnecessary in mathematics" },
              { id: "d", text: "Axioms can prove themselves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Gödel incompleteness", statement: "In sufficiently rich formal systems, some true statements cannot be proved within the system." },
            ],
            steps: [
              { reasoning: "Incompleteness shows limits on what a system can prove about itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Some truths may be unprovable within a system",
            commonErrors: ["Overstating Gödel as showing that mathematics is unreliable."],
          },
        },
        {
          id: "tok-u2-l21c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In mathematics, intuition is most accurately described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A substitute for proof" },
              { id: "b", text: "A guide to discovery that still requires proof for certainty" },
              { id: "c", text: "An empirical testing method" },
              { id: "d", text: "An authority accepted by all mathematicians" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Role of intuition", statement: "Intuition suggests possible truths, but deductive proof establishes certainty." },
            ],
            steps: [
              { reasoning: "Intuition can suggest conjectures but does not itself confer certainty.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A guide to discovery that still requires proof for certainty",
            commonErrors: ["Confusing mathematical intuition with proof."],
          },
        },
        {
          id: "tok-u2-l21c1q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Applied mathematics relates to the physical world most accurately when it is described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A direct and perfect description of reality" },
              { id: "b", text: "An approximate model whose adequacy is tested empirically" },
              { id: "c", text: "Irrelevant to scientific knowledge" },
              { id: "d", text: "Certain independently of observation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Applied mathematics", statement: "Mathematical models describe reality approximately and must be tested against evidence." },
            ],
            steps: [
              { reasoning: "Applied mathematics supplies models, but their fit to reality is empirical.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An approximate model whose adequacy is tested empirically",
            commonErrors: ["Assuming mathematical certainty automatically transfers to the physical world."],
          },
        },
        {
          id: "tok-u2-l21c1q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a proved theorem can be certain while a claim about the physical world remains revisable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Internal versus external certainty", statement: "Mathematical certainty is internal to a system; physical claims depend on evidence and can be revised." },
            ],
            steps: [
              { reasoning: "A theorem follows necessarily from accepted axioms and definitions.", marks: 1, markCode: "M" },
              { reasoning: "Its truth does not depend on observation of the physical world.", marks: 1, markCode: "M" },
              { reasoning: "Scientific claims are supported inductively and remain open to new evidence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: certainty belongs to the system; empirical knowledge remains probable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proof gives certainty within mathematics; empirical claims about the world remain revisable because they depend on evidence.",
            commonErrors: ["Equating certainty about abstract structure with certainty about physical reality."],
          },
        },
        {
          id: "tok-u2-l21c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the Platonist and formalist views of mathematical knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Platonism versus formalism", statement: "Platonism sees independent mathematical objects; formalism sees a system of symbols and rules." },
            ],
            steps: [
              { reasoning: "Platonism treats mathematical truths as discovered from an independent realm.", marks: 1, markCode: "M" },
              { reasoning: "Formalism treats mathematics as invented rules for manipulating symbols.", marks: 1, markCode: "M" },
              { reasoning: "Both can agree that proof guarantees truth within a system.", marks: 1, markCode: "R" },
              { reasoning: "The disagreement concerns the status of mathematical objects, not the reliability of proof.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Platonism sees discovery of independent truths; formalism sees invention of a consistent symbolic system.",
            commonErrors: ["Claiming one view makes mathematics unreliable."],
          },
        },
        {
          id: "tok-u2-l21c1q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the role of axioms in mathematical knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Axiom", statement: "A foundational statement accepted without proof within a system." },
            ],
            steps: [
              { reasoning: "Axioms provide starting points from which deductions can proceed.", marks: 1, markCode: "M" },
              { reasoning: "Different axiom systems can generate different valid mathematics.", marks: 1, markCode: "M" },
              { reasoning: "Because axioms are assumed rather than proved, certainty is conditional on them.", marks: 1, markCode: "R" },
              { reasoning: "Nevertheless, within the chosen system, conclusions remain deductively secure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Axioms are accepted foundations; certainty is conditional on them but secure within the resulting system.",
            commonErrors: ["Claiming axioms are proven facts."],
          },
        },
        {
          id: "tok-u2-l21c1q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that mathematics is a language rather than a description of reality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mathematics as language", statement: "Mathematics uses symbols and rules, but its applicability raises questions about representation." },
            ],
            steps: [
              { reasoning: "For the claim: mathematics has symbols, syntax and conventions like a language.", marks: 1, markCode: "M" },
              { reasoning: "Its internal truths do not depend on referring to physical objects.", marks: 1, markCode: "M" },
              { reasoning: "Against: applied mathematics predicts and explains the world with remarkable success.", marks: 1, markCode: "R" },
              { reasoning: "A better view may be that mathematics is a formal system that can be mapped onto reality.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: language-like in form, but not merely decorative because models can fail or succeed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mathematics is language-like in structure, but its predictive power suggests it can represent aspects of reality.",
            commonErrors: ["Dismissing mathematics as only notation without considering its empirical applications."],
          },
        },
        {
          id: "tok-u2-l21c1q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the limits of certainty in mathematics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of mathematical certainty", statement: "Certainty is real within systems but limited by incompleteness, chosen axioms and abstraction." },
            ],
            steps: [
              { reasoning: "Within fixed axioms, proof gives certainty about theorems.", marks: 1, markCode: "M" },
              { reasoning: "Gödel shows some systems cannot prove all their truths internally.", marks: 1, markCode: "M" },
              { reasoning: "Axioms are chosen for usefulness or elegance, not proven.", marks: 1, markCode: "R" },
              { reasoning: "Mathematical objects are abstract, so certainty does not directly describe the world.", marks: 1, markCode: "R" },
              { reasoning: "Applied models remain approximate and empirically testable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: mathematical certainty is powerful but bounded and not automatically about reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mathematics is certain within chosen systems, but incompleteness, axiomatic choice and abstraction limit what that certainty covers.",
            commonErrors: ["Treating mathematical certainty as unlimited or as direct knowledge of reality."],
          },
        },
        {
          id: "tok-u2-l21c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Assess whether mathematical knowledge requires empirical confirmation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pure versus applied mathematics", statement: "Pure mathematics is justified internally; applied mathematics also needs empirical adequacy." },
            ],
            steps: [
              { reasoning: "Pure mathematical truths are established by proof, not experiment.", marks: 1, markCode: "M" },
              { reasoning: "A theorem remains true within its system even if no physical case exists.", marks: 1, markCode: "R" },
              { reasoning: "Applied mathematics must be tested against observations and predictions.", marks: 1, markCode: "M" },
              { reasoning: "Empirical failure can show a model is inadequate even if the mathematics is valid.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: empirical confirmation matters for application, not for internal mathematical truth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pure mathematics does not require empirical confirmation; applied mathematics does when it is used to describe the world.",
            commonErrors: ["Claiming all mathematics must be experimentally verified or that applications need no testing."],
          },
        },
      ],
    },
    {
      id: "tok-u2-natural-sciences",
      title: "The natural sciences as an area of knowledge",
      skill: "Explain the scientific method and evaluate the status of scientific knowledge claims.",
      lesson: {
        sections: [
          {
            heading: "How science knows",
            body: "The natural sciences produce knowledge through observation, hypothesis formation, experimentation and induction. Science is **empirical**: claims must be testable against evidence. The scientific method is self-correcting — theories that fail tests are revised or abandoned, as when Newtonian mechanics gave way to relativity.",
          },
          {
            heading: "Strengths of scientific knowledge",
            body: "Science achieves remarkable predictive power and technological success — evidence that its models track reality. Peer review, replication and falsifiability give science strong self-correcting mechanisms. Scientific knowledge is the most reliable guide we have to the natural world.",
          },
          {
            heading: "Limits and controversies",
            body: "Science is underdetermined by evidence — multiple theories can fit the same data. Paradigm shifts show that what counts as 'scientific' changes over time. Science cannot answer normative questions (what ought we to do) and depends on values in choosing what to study. Scientific consensus is strong but never absolute.",
          },
        ],
        keyFormulas: [
          { name: "Scientific method", statement: "Observe → hypothesise → test → revise (self-correcting cycle)" },
          { name: "Falsifiability", statement: "A claim is scientific only if evidence could in principle refute it" },
        ],
        workedExample: {
          problem: "Is scientific knowledge certain?",
          solution: "No — it is probable and revisable. Theories are supported by evidence but remain open to refinement or replacement. However, well-established science (e.g. germ theory, evolution) is so strongly supported that doubt is unjustified for practical purposes.",
        },
      },
      questions: [
        {
          id: "tok-u2-l21c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The natural sciences primarily rely on which way of knowing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faith" },
              { id: "b", text: "Empirical observation and experiment" },
              { id: "c", text: "Revelation" },
              { id: "d", text: "Tradition alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical method", statement: "The natural sciences test claims against observation and experiment." },
            ],
            steps: [
              { reasoning: "Natural sciences are defined by empirical testing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Empirical observation and experiment",
            commonErrors: ["Confusing scientific knowledge with mathematical certainty."],
          },
        },
        {
          id: "tok-u2-l21c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why scientific knowledge is considered self-correcting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-correction", statement: "Scientific claims are tested against evidence and revised when they fail." },
            ],
            steps: [
              { reasoning: "Hypotheses and theories must be falsifiable — evidence can refute them.", marks: 1, markCode: "M" },
              { reasoning: "Peer review and replication expose errors and weak evidence.", marks: 1, markCode: "M" },
              { reasoning: "Paradigm shifts (e.g. Newton to Einstein) show theories are replaced when evidence demands.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science corrects itself through falsifiability, peer review, replication and willingness to revise theories.",
            commonErrors: ["Claiming science is dogmatic — it is precisely anti-dogmatic by method."],
          },
        },
        {
          id: "tok-u2-l21c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that scientific knowledge is the most reliable knowledge humans have.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reliability of science", statement: "Science combines empirical testability with self-correction, giving it strong reliability about the natural world." },
            ],
            steps: [
              { reasoning: "For: predictive success and technological achievement show science tracks reality.", marks: 1, markCode: "M" },
              { reasoning: "Against: science is underdetermined by data and paradigm-dependent; consensus can be wrong.", marks: 1, markCode: "M" },
              { reasoning: "Science answers 'what is' but not 'what ought to be' — normative questions need other areas.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: most reliable for empirical claims about nature, but not a complete guide to all knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science is the most reliable guide to the natural world but cannot answer value questions or guarantee certainty.",
            commonErrors: ["Claiming science can answer all questions or that it is infallible."],
          },
        },
        {
          id: "tok-u2-l21c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the status of knowledge in the natural sciences.",
          parts: [
            { label: "a", prompt: "Describe the scientific method.", marks: 2 },
            { label: "b", prompt: "Explain two strengths of scientific knowledge.", marks: 3 },
            { label: "c", prompt: "Evaluate whether scientific knowledge can ever be certain.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status of science", statement: "Science produces probable, self-correcting knowledge about the natural world." },
            ],
            steps: [
              { part: "a", reasoning: "Observation → hypothesis → experimentation → induction/revision cycle.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Claims must be testable and falsifiable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Predictive and technological success demonstrates correspondence with reality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Self-correction through peer review and replication maintains reliability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Falsifiability ensures claims remain accountable to evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Scientific claims remain open to revision — new evidence can overturn them.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Underdetermination: multiple theories can fit the same data.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclusion: probable and revisable, but well-supported science is practically certain for use.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Observe-hypothesise-test-revise. (b) Predictive power, self-correction. (c) Probable, not certain; practically reliable.",
            commonErrors: ["Equating scientific consensus with certainty."],
          },
        },
        {
          id: "tok-u2-l21c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Scientific knowledge is best characterised as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Certain and unchangeable" },
              { id: "b", text: "Empirical, testable and revisable" },
              { id: "c", text: "Based mainly on revelation" },
              { id: "d", text: "Independent of evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scientific knowledge", statement: "Knowledge produced through observation, testing and revision in light of evidence." },
            ],
            steps: [
              { reasoning: "Science depends on empirical evidence and remains open to revision.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Empirical, testable and revisable",
            commonErrors: ["Treating scientific claims as certain like mathematical proofs."],
          },
        },
        {
          id: "tok-u2-l21c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is falsifiability important for scientific claims?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes claims impossible to test" },
              { id: "b", text: "It ensures evidence could in principle refute the claim" },
              { id: "c", text: "It proves every hypothesis true" },
              { id: "d", text: "It removes the need for observation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Falsifiability", statement: "A scientific claim must be open to refutation by evidence." },
            ],
            steps: [
              { reasoning: "Falsifiability keeps claims accountable to possible counterevidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It ensures evidence could in principle refute the claim",
            commonErrors: ["Confusing falsifiability with proving claims false."],
          },
        },
        {
          id: "tok-u2-l21c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement best distinguishes a hypothesis from a well-supported theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A hypothesis is always false" },
              { id: "b", text: "A theory has broader explanatory and predictive support than a hypothesis" },
              { id: "c", text: "A theory cannot be revised" },
              { id: "d", text: "A hypothesis is proven by one observation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hypothesis and theory", statement: "A hypothesis is a testable proposal; a theory is a well-supported explanatory framework." },
            ],
            steps: [
              { reasoning: "Theories integrate many tested hypotheses and evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A theory has broader explanatory and predictive support than a hypothesis",
            commonErrors: ["Treating 'theory' as a guess rather than supported explanation."],
          },
        },
        {
          id: "tok-u2-l21c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paradigm shift in science refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A minor correction to data" },
              { id: "b", text: "A change in the dominant framework of assumptions and methods" },
              { id: "c", text: "The discovery of a new instrument" },
              { id: "d", text: "The rejection of all evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paradigm", statement: "A dominant framework of assumptions, methods and standards within a field." },
            ],
            steps: [
              { reasoning: "A paradigm shift changes the framework through which science interprets evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A change in the dominant framework of assumptions and methods",
            commonErrors: ["Reducing paradigm shifts to ordinary scientific correction."],
          },
        },
        {
          id: "tok-u2-l21c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Peer review and replication mainly support scientific knowledge by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guaranteeing every result is correct" },
              { id: "b", text: "Exposing errors and testing whether findings can be repeated" },
              { id: "c", text: "Replacing the need for evidence" },
              { id: "d", text: "Making science independent of interpretation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scientific self-correction", statement: "Peer review and replication help detect errors and confirm reliability." },
            ],
            steps: [
              { reasoning: "Review and replication test claims rather than guarantee truth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Exposing errors and testing whether findings can be repeated",
            commonErrors: ["Assuming peer review makes science infallible."],
          },
        },
        {
          id: "tok-u2-l21c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the scientific method produces self-correcting knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Scientific method", statement: "Observation, hypothesis, testing and revision form a self-correcting cycle." },
            ],
            steps: [
              { reasoning: "Claims are framed as hypotheses open to testing.", marks: 1, markCode: "M" },
              { reasoning: "Experiments and observations provide evidence for or against them.", marks: 1, markCode: "M" },
              { reasoning: "Failed predictions force revision or rejection of theories.", marks: 1, markCode: "R" },
              { reasoning: "Peer review and replication expose weaknesses and strengthen reliable findings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science corrects itself because hypotheses must survive testing and can be revised when evidence demands.",
            commonErrors: ["Describing science as a linear accumulation of proven facts."],
          },
        },
        {
          id: "tok-u2-l21c2q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two strengths of scientific knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strengths of science", statement: "Predictive power, technological success and self-correction make science reliable about nature." },
            ],
            steps: [
              { reasoning: "Scientific theories generate accurate predictions and technologies.", marks: 1, markCode: "M" },
              { reasoning: "This success suggests models track real features of the world.", marks: 1, markCode: "R" },
              { reasoning: "Falsifiability and replication allow errors to be detected and corrected.", marks: 1, markCode: "M" },
              { reasoning: "Therefore well-tested science provides dependable, though revisable, knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science is strong because it predicts successfully, produces useful technology and can correct itself through evidence.",
            commonErrors: ["Listing strengths without explaining why they count as strengths."],
          },
        },
        {
          id: "tok-u2-l21c2q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why evidence may not uniquely determine a scientific theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Underdetermination", statement: "The same evidence can be compatible with more than one theoretical explanation." },
            ],
            steps: [
              { reasoning: "Different theories may make the same observable predictions.", marks: 1, markCode: "M" },
              { reasoning: "Background assumptions and models influence how data are interpreted.", marks: 1, markCode: "M" },
              { reasoning: "New evidence or better explanatory power may be needed to choose between rivals.", marks: 1, markCode: "R" },
              { reasoning: "This limits certainty but does not make science arbitrary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evidence can underdetermine theory because rival explanations may fit the same data, requiring judgement and further testing.",
            commonErrors: ["Claiming science simply reads facts directly from data."],
          },
        },
        {
          id: "tok-u2-l21c2q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that scientific consensus means a claim is certainly true.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consensus and certainty", statement: "Consensus indicates strong support but does not eliminate revisability." },
            ],
            steps: [
              { reasoning: "Consensus usually reflects convergent evidence and repeated testing.", marks: 1, markCode: "M" },
              { reasoning: "Well-supported science, such as evolution or germ theory, is practically reliable.", marks: 1, markCode: "M" },
              { reasoning: "However, consensus is not proof; new evidence can overturn even dominant theories.", marks: 1, markCode: "R" },
              { reasoning: "Consensus can also reflect shared assumptions or institutional bias.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: consensus is strong evidence, not certainty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scientific consensus is powerful but remains revisable; it indicates strong support rather than absolute certainty.",
            commonErrors: ["Treating consensus as infallible or dismissing it as irrelevant."],
          },
        },
        {
          id: "tok-u2-l21c2q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the certainty of mathematical and scientific knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Mathematical versus scientific certainty", statement: "Mathematics is certain within systems; science is probable and evidence-dependent." },
            ],
            steps: [
              { reasoning: "Mathematical proof gives certainty relative to axioms.", marks: 1, markCode: "M" },
              { reasoning: "Scientific claims rely on induction from finite evidence.", marks: 1, markCode: "M" },
              { reasoning: "Science can be revised by new observations; proofs cannot fail without contradiction.", marks: 1, markCode: "R" },
              { reasoning: "Applied mathematics still needs empirical testing to describe reality.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: mathematics offers internal certainty; science offers reliable but revisable knowledge of the world.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mathematics is certain about abstract systems; science is probable and revisable about the physical world.",
            commonErrors: ["Claiming science is merely opinion or mathematics directly proves physical facts."],
          },
        },
        {
          id: "tok-u2-l21c2q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the limits of scientific knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of science", statement: "Science is bounded by evidence, interpretation, values and the questions it can test." },
            ],
            steps: [
              { reasoning: "Scientific knowledge depends on available observations and instruments.", marks: 1, markCode: "M" },
              { reasoning: "Underdetermination means data may support more than one explanation.", marks: 1, markCode: "R" },
              { reasoning: "Paradigm and disciplinary perspectives shape what counts as a valid question.", marks: 1, markCode: "R" },
              { reasoning: "Science describes and explains but cannot by itself decide what ought to be done.", marks: 1, markCode: "M" },
              { reasoning: "Values influence research priorities and interpretations of results.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: science is powerful within its scope but not a complete account of all knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science is limited by evidence, interpretation and values, and it cannot answer normative questions alone.",
            commonErrors: ["Either treating science as omniscient or dismissing it as arbitrary."],
          },
        },
        {
          id: "tok-u2-l21c2q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Assess whether the natural sciences provide the most reliable knowledge available.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reliability of science", statement: "Science is highly reliable for empirical claims but not for all kinds of knowledge." },
            ],
            steps: [
              { reasoning: "For: testability, replication and predictive success make science dependable about nature.", marks: 1, markCode: "M" },
              { reasoning: "For: self-correction reduces the risk of lasting error.", marks: 1, markCode: "M" },
              { reasoning: "Against: science remains revisable and cannot answer value or meaning questions.", marks: 1, markCode: "R" },
              { reasoning: "Other areas may be more reliable for their own kinds of claims, such as mathematics for internal structure.", marks: 1, markCode: "R" },
              { reasoning: "Reliability must be judged relative to the type of knowledge claimed.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: science is the strongest guide to the natural world, but not the only or complete form of knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science is highly reliable for empirical claims about nature, but reliability depends on the kind of knowledge being claimed.",
            commonErrors: ["Declaring science universally superior without qualifying the type of knowledge."],
          },
        },
      ],
    },
  ],
};
