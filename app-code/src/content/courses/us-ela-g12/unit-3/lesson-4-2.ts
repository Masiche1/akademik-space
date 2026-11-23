import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const ORWELL: TextExtract = {
  title: "Politics and the English Language",
  author: "George Orwell",
  source: "1946",
  text: "Political language is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind.",
};

const BUTLER: TextExtract = {
  title: "Kindred",
  author: "Octavia E. Butler",
  source: "1979",
  text: "I lost an arm on my last trip home. My Dana. That's why we came.",
};

export const lesson142: Lesson = {
  id: "ela12-u3-lesson-4-2",
  code: "4-2",
  title: "Argument and Evidence",
  goal: "I CAN construct and evaluate arguments that use evidence, counterarguments, and logical reasoning.",
  standards: ["W.11-12.1", "W.11-12.9", "RI.11-12.8"],
  vocabulary: [
    { term: "Claim", definition: "The main argument or position a writer takes." },
    { term: "Evidence", definition: "Facts, quotations, or examples that support a claim." },
    { term: "Warrant", definition: "The reasoning that connects evidence to claim." },
    { term: "Counterargument", definition: "The opposing view a writer acknowledges and refutes." },
    { term: "Refutation", definition: "The act of showing why a counterargument fails." },
    { term: "Logical fallacy", definition: "A flawed pattern of reasoning that weakens an argument." },
    { term: "Straw man", definition: "Misrepresenting an opponent's argument to make it easier to attack." },
  ],
  concepts: [
    {
      id: "ela12-u3-argument-structure",
      title: "Building a defensible argument",
      skill: "Construct claims supported by evidence and warrants, and anticipate counterarguments.",
      lesson: {
        sections: [
          {
            heading: "Claim-evidence-warrant",
            body: "A strong argument has three parts:\n1. **Claim**: what you assert\n2. **Evidence**: what supports it (facts, quotes, examples)\n3. **Warrant**: the reasoning that connects evidence to claim — why does this evidence prove the claim?\n\nMost weak arguments fail at the warrant: they present evidence without explaining why it matters.",
          },
          {
            heading: "Counterargument and refutation",
            body: "Addressing the strongest opposing view makes an argument stronger, not weaker. Acknowledge the counterargument fairly, then refute it with evidence or reasoning. Ignoring opposition makes the argument look naive; misrepresenting it (straw man) makes it look dishonest.",
          },
          {
            heading: "Orwell's warning",
            body: "Orwell's 'Politics and the English Language' is itself an argument about language: political language 'makes lies sound truthful.' His claim is that clarity is a moral duty — vague language enables deception.",
          },
        ],
        keyFormulas: [
          { name: "Claim-evidence-warrant", statement: "Evidence without warrant is assertion; warrant connects proof to conclusion." },
          { name: "Counterargument", statement: "Acknowledging opposition strengthens credibility." },
        ],
        workedExample: {
          problem: "Evaluate this argument: 'The novel is great because it has beautiful language.'",
          solution: "Weak: 'great' is vague, 'beautiful language' is asserted not demonstrated, and no warrant connects language to greatness. A strong version would specify which techniques, quote examples, and explain why they produce the claimed effect.",
        },
      },
      questions: [
        {
          id: "ela12-u3-argument-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between evidence and warrant in an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same thing." },
              { id: "b", text: "Evidence is what supports the claim; warrant is the reasoning connecting them." },
              { id: "c", text: "Evidence is opinion; warrant is fact." },
              { id: "d", text: "Warrant is the conclusion." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Evidence vs warrant", statement: "Evidence is the support; warrant is the bridge to the claim." }],
            steps: [{ reasoning: "Evidence provides facts/quotes; the warrant explains why that evidence proves the claim.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Evidence supports; warrant connects.",
            commonErrors: ["Confusing the two components."],
          },
        },
        {
          id: "ela12-u3-argument-structure-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: ORWELL,
          stem: "Analyze Orwell's claim that 'political language is designed to make lies sound truthful.' What evidence does he provide, and what warrant connects it to his conclusion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument analysis", statement: "Identify claim, evidence, and warrant in a real text." },
              { kind: "technique", name: "Warrant", statement: "The reasoning connecting evidence to claim." },
            ],
            steps: [
              { reasoning: "Claim: political language is designed to deceive — 'make lies sound truthful.'", evidence: "make lies sound truthful", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'an appearance of solidity to pure wind' — language that sounds substantial but means nothing.", evidence: "pure wind", marks: 1, markCode: "AO2" },
              { reasoning: "Warrant: if language can make emptiness sound solid, then clarity is the only defense against manipulation — the connection is that deceptive language requires deceptive intent.", marks: 1, markCode: "AO3" },
              { reasoning: "The argument is circular in a productive way: Orwell's own clear prose demonstrates the alternative he advocates.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Orwell claims political language deceives; his evidence is its ability to make emptiness sound solid; the warrant is that clarity is the antidote.",
            commonErrors: ["Not identifying the warrant — the reasoning that links evidence to claim."],
          },
        },
        {
          id: "ela12-u3-argument-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BUTLER,
          stem: "Construct an argument about Octavia Butler's Kindred using claim-evidence-warrant structure. Then identify one counterargument and refute it.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Argument construction", statement: "Build claim, evidence, warrant, and refutation." },
              { kind: "technique", name: "Refutation", statement: "Acknowledge and answer the strongest opposing view." },
            ],
            steps: [
              { reasoning: "States a clear claim about the novel (e.g., 'Kindred argues that slavery's violence is not past but continuously present').", marks: 1, markCode: "AO3" },
              { reasoning: "Provides specific evidence (Dana's time travel, her lost arm, the novel's framing of slavery as ongoing).", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the warrant — why this evidence proves the claim (the arm's loss literalizes how the past maims the present).", marks: 1, markCode: "AO3" },
              { reasoning: "Identifies a counterargument (e.g., 'time travel is just a plot device, not a thematic argument').", marks: 1, markCode: "AO4" },
              { reasoning: "Refutes it fairly — the time travel isn't decorative; it's the mechanism that makes history physically present.", marks: 1, markCode: "AO3" },
              { reasoning: "Concludes the argument is stronger for having addressed opposition.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "A strong argument has claim, evidence, warrant, and refutation — addressing opposition strengthens rather than weakens it.",
            commonErrors: ["Asserting a claim without warrant, or attacking a weak version of the opposition."],
          },
        },
      ],
    },
    {
      id: "ela12-u3-fallacies",
      title: "Recognizing fallacies",
      skill: "Identify and explain common logical fallacies in arguments.",
      lesson: {
        sections: [
          {
            heading: "Common fallacies",
            body: "- **Ad hominem**: attacking the person instead of the argument\n- **Straw man**: misrepresenting an opponent's view to attack it easily\n- **False dilemma**: presenting only two options when more exist\n- **Appeal to authority**: using a source's status instead of evidence\n- **Slippery slope**: claiming one step leads inevitably to extreme outcomes\n- **Circular reasoning**: using the conclusion as evidence for itself",
          },
          {
            heading: "Why fallacies matter",
            body: "Fallacies aren't just wrong — they're persuasive because they feel right. Recognizing them is a skill of citizenship: a voter who can't spot a straw man is easier to manipulate.",
          },
          {
            heading: "The subtle ones",
            body: "The most dangerous fallacies are the subtle ones: a statistic without context, a quote without attribution, a 'everyone knows' that replaces evidence. Orwell's warning applies — vague language enables fallacious thinking.",
          },
        ],
        keyFormulas: [
          { name: "Fallacy", statement: "A flawed reasoning pattern that produces a false or weak conclusion." },
          { name: "Straw man", statement: "Attacking a misrepresented version of the opponent's argument." },
        ],
        workedExample: {
          problem: "Identify the fallacy: 'You can't trust her opinion on climate change — she drives a gas-powered car.'",
          solution: "Ad hominem: attacking the person's behavior instead of her argument. Her car doesn't refute her evidence.",
        },
      },
      questions: [
        {
          id: "ela12-u3-fallacies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a straw man fallacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attacking the person instead of the argument" },
              { id: "b", text: "Misrepresenting an opponent's argument to attack it easily" },
              { id: "c", text: "Presenting only two options" },
              { id: "d", text: "Using evidence that doesn't support the claim" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Straw man", statement: "Attacking a distorted version of the opponent's view." }],
            steps: [{ reasoning: "Straw man replaces the real argument with a weaker, easier-to-defeat version.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Misrepresenting to attack easily.",
            commonErrors: ["Confusing with ad hominem."],
          },
        },
        {
          id: "ela12-u3-fallacies-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify the fallacy in each argument and explain why it's fallacious:\n(a) 'If we allow students to retake tests, soon they'll never study.'\n(b) 'Dr. Smith says the policy works, and Dr. Smith is a Nobel laureate.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fallacy identification", statement: "Name the fallacy and explain the reasoning flaw." }],
            steps: [
              { reasoning: "(a) Slippery slope — assumes one step leads inevitably to extreme outcome without evidence.", marks: 1, markCode: "AO2" },
              { reasoning: "(b) Appeal to authority — uses Smith's status instead of evidence that the policy works.", marks: 1, markCode: "AO2" },
              { reasoning: "Both substitute a persuasive shortcut for actual reasoning — one assumes inevitability, the other assumes expertise proves truth.", marks: 1, markCode: "AO3" },
              { reasoning: "Neither argument addresses the actual question (should students retake? does the policy work?) with evidence.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "(a) Slippery slope (b) Appeal to authority — both replace reasoning with shortcuts.",
            commonErrors: ["Naming the fallacy without explaining the reasoning flaw."],
          },
        },
        {
          id: "ela12-u3-fallacies-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Construct an argument containing a deliberate fallacy, then explain how a critical reader would identify and refute it.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Fallacy construction", statement: "Building an argument requires knowing how to break it." },
              { kind: "skill", name: "Critical reading", statement: "Identifying the flaw is the first step to refutation." },
            ],
            steps: [
              { reasoning: "Constructs an argument with a clear fallacy (e.g., 'Everyone supports this policy' — bandwagon appeal).", marks: 1, markCode: "AO2" },
              { reasoning: "Explains why it's fallacious — popularity doesn't equal truth.", marks: 1, markCode: "AO3" },
              { reasoning: "Identifies what evidence would actually support the claim.", marks: 1, markCode: "AO4" },
              { reasoning: "Shows how a critical reader would spot the substitution of consensus for evidence.", marks: 1, markCode: "AO3" },
              { reasoning: "Refutes the argument by providing the missing evidence or reasoning.", marks: 1, markCode: "AO2" },
              { reasoning: "Concludes that recognizing fallacies is a skill of both writing and reading.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Constructing and refuting fallacious arguments teaches both sides of critical thinking.",
            commonErrors: ["Identifying a fallacy without showing how to refute it."],
          },
        },
      ],
    },
  ],
};
