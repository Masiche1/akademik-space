import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";
import { MLK } from "./lesson-3-1.ts";

const ROOSEVELT: TextExtract = {
  title: "The Man in the Arena",
  author: "Theodore Roosevelt",
  source: "Citizenship in a Republic (1910)",
  text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again.",
};

const JFK: TextExtract = {
  title: "Ask Not",
  author: "John F. Kennedy",
  source: "Inaugural Address (1961)",
  text: "Ask not what your country can do for you; ask what you can do for your country.",
};

export const lesson132: Lesson = {
  id: "ela12-u2-lesson-3-2",
  code: "3-2",
  title: "Tools of Rhetorical Analysis",
  goal: "I CAN identify and analyze ethos, pathos, logos, rhetorical questions, anaphora, and antithesis in political and ceremonial speech.",
  standards: ["SL.11-12.3", "RI.11-12.6", "RL.11-12.4"],
  vocabulary: [
    { term: "Ethos", definition: "Appeal to credibility — the speaker's character or authority." },
    { term: "Pathos", definition: "Appeal to emotion — moving the audience's feelings." },
    { term: "Logos", definition: "Appeal to reason — arguments from logic and evidence." },
    { term: "Anaphora", definition: "Repetition of a word or phrase at the start of successive clauses or sentences." },
    { term: "Antithesis", definition: "A figure placing two contrasting ideas in balanced parallel structure." },
    { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
    { term: "Allusion", definition: "An indirect reference to another text, event, or person." },
  ],
  concepts: [
    {
      id: "ela12-u2-appeals",
      title: "Ethos, pathos, and logos",
      skill: "Identify and evaluate how speakers combine the three appeals.",
      lesson: {
        sections: [
          {
            heading: "The three appeals",
            body: "Aristotle defined three ways to persuade:\n- **Ethos**: credibility — 'trust me because of who I am'\n- **Pathos**: emotion — 'feel this'\n- **Logos**: reason — 'here is the logic and evidence'\n\nStrong speeches rarely use only one; they weave them so emotion carries reason and reason justifies emotion.",
          },
          {
            heading: "Roosevelt's arena",
            body: "Roosevelt's 'Man in the Arena' is pathos-dominant: 'face marred by dust and sweat and blood' is vivid, bodily, emotional. But it carries logos too — the contrast between critic and doer is a logical claim about where credit belongs.",
          },
          {
            heading: "Kennedy's inversion",
            body: "'Ask not what your country can do for you; ask what you can do for your country' is pure antithesis — two balanced clauses reversed. It is also an implicit logos argument: invert the question and you invert the relationship.",
          },
        ],
        keyFormulas: [
          { name: "Ethos/pathos/logos", statement: "Credibility, emotion, and reason — the three modes of persuasion." },
          { name: "Antithesis", statement: "Balanced opposition of ideas; creates memorable contrast." },
        ],
        workedExample: {
          problem: "Is Roosevelt's 'Man in the Arena' primarily ethos, pathos, or logos?",
          solution: "Primarily pathos (the visceral image of the arena) supported by logos (the logical contrast critic/doer). Ethos is implied — Roosevelt speaks as one who has been in arenas.",
        },
      },
      questions: [
        {
          id: "ela12-u2-appeals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ROOSEVELT,
          stem: "Which appeal does 'face is marred by dust and sweat and blood' primarily use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethos — establishing credibility" },
              { id: "b", text: "Pathos — evoking emotion through vivid physical imagery" },
              { id: "c", text: "Logos — presenting logical evidence" },
              { id: "d", text: "None — it is purely descriptive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Pathos", statement: "Vivid bodily imagery is designed to move the audience." }],
            steps: [{ reasoning: "'Dust and sweat and blood' is sensory and emotional — it makes the listener feel the arena rather than reason about it.", evidence: "dust and sweat and blood", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Pathos.",
            commonErrors: ["Calling all vivid description 'logos.'"],
          },
        },
        {
          id: "ela12-u2-appeals-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: JFK,
          stem: "Analyze the rhetorical structure of 'Ask not what your country can do for you; ask what you can do for your country.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Antithesis", statement: "The two clauses mirror each other with reversed roles, creating balance and emphasis." },
              { kind: "skill", name: "Sentence-level rhetoric", statement: "Analyze how grammar enacts the argument's logic." },
            ],
            steps: [
              { reasoning: "The two clauses are grammatically identical but semantically reversed — 'your country... for you' becomes 'you... for your country.'", evidence: "Ask not... ask what you can do", marks: 1, markCode: "AO2" },
              { reasoning: "The antithesis enacts the inversion it describes: the grammatical reversal mirrors the relational reversal.", marks: 1, markCode: "AO3" },
              { reasoning: "The balanced structure makes the line memorable — it is easy to repeat and impossible to forget.", marks: 1, markCode: "AO2" },
              { reasoning: "The implicit logos: invert the question and you invert the citizen-government relationship — a complete argument in eleven words.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Antithesis enacts inversion; the balanced grammar makes the argument memorable and self-demonstrating.",
            commonErrors: ["Noting it's 'balanced' without explaining what the balance achieves."],
          },
        },
        {
          id: "ela12-u2-appeals-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate how a speaker combines ethos, pathos, and logos effectively — or ineffectively. Use at least two examples from the speeches studied (Declaration, Lincoln, King, Roosevelt, Kennedy).",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Multi-appeal analysis", statement: "Identify which appeal dominates and whether the combination persuades." },
              { kind: "skill", name: "Evaluation", statement: "Judge effectiveness, not just identify devices." },
            ],
            steps: [
              { reasoning: "Identifies the dominant appeal in at least two speeches (e.g., King's pathos+logos, Lincoln's ethos+pathos).", marks: 1, markCode: "AO2" },
              { reasoning: "Explains how secondary appeals support the dominant one (King's Declaration allusion = logos grounding his emotional dream).", marks: 1, markCode: "AO3" },
              { reasoning: "Evaluates whether the combination works: does emotion overwhelm reason, or does reason give emotion direction?", marks: 1, markCode: "AO3" },
              { reasoning: "Notes cases where appeals might conflict or one dominates at the expense of others.", marks: 1, markCode: "AO4" },
              { reasoning: "Uses specific textual evidence (quotations or paraphrase) for each claim.", marks: 1, markCode: "AO2" },
              { reasoning: "Concludes with a judgment about overall effectiveness, not just description.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Effective speeches weave appeals so each supports the others; evaluation requires judging whether emotion serves reason or overwhelms it.",
            commonErrors: ["Listing devices without evaluating their combined effect."],
          },
        },
      ],
    },
    {
      id: "ela12-u2-devices",
      title: "Anaphora, antithesis, and rhetorical questions",
      skill: "Analyze how anaphora builds momentum, antithesis creates contrast, and rhetorical questions implicate the audience.",
      lesson: {
        sections: [
          {
            heading: "Anaphora: the engine of repetition",
            body: "Anaphora repeats a phrase at the start of clauses to build rhythm and insistence. King's 'I have a dream' and Lincoln's 'of the people, by the people, for the people' both use it. Unlike random repetition, anaphora creates expectation — the listener waits for the next variation.",
          },
          {
            heading: "Antithesis: the engine of contrast",
            body: "Antithesis places opposites in balanced structure: 'Ask not what your country can do for you; ask what you can do for your country.' The balance makes the contrast feel inevitable — the two halves are grammatically identical, so the reversal is the only difference.",
          },
          {
            heading: "Rhetorical questions",
            body: "A rhetorical question has no expected answer — it forces the audience to supply one, which makes them complicit in the conclusion. 'Can we afford to fail?' isn't asking for information; it's demanding agreement.",
          },
        ],
        keyFormulas: [
          { name: "Anaphora", statement: "Initial repetition builds momentum and expectation." },
          { name: "Rhetorical question", statement: "Unanswered question that implicates the audience in the conclusion." },
        ],
        workedExample: {
          problem: "Why is 'of the people, by the people, for the people' more powerful than simply saying 'democracy'?",
          solution: "The triple repetition defines democracy by three relationships (possession, agency, purpose) rather than naming it — the audience experiences the concept instead of being told it.",
        },
      },
      questions: [
        {
          id: "ela12-u2-devices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is anaphora?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetition of a word at the end of clauses" },
              { id: "b", text: "Repetition of a word or phrase at the start of successive clauses" },
              { id: "c", text: "A question that needs no answer" },
              { id: "d", text: "A comparison using 'like' or 'as'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Anaphora", statement: "Repetition at the start of clauses builds rhythm." }],
            steps: [{ reasoning: "Anaphora is specifically initial repetition — 'I have a dream... I have a dream...'", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Repetition at the start of clauses.",
            commonErrors: ["Confusing with epistrophe (end repetition)."],
          },
        },
        {
          id: "ela12-u2-devices-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: MLK,
          stem: "Analyze how King's use of 'I have a dream' differs from simple repetition. What does the refrain accomplish that a single statement could not?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anaphora", statement: "Initial repetition creates expectation and cumulative force." },
              { kind: "skill", name: "Cumulative meaning", statement: "Each repetition adds a new element, building the vision." },
            ],
            steps: [
              { reasoning: "Each 'I have a dream' introduces a new image — children, table, content of character — so repetition accumulates rather than merely repeats.", evidence: "I have a dream", marks: 1, markCode: "AO2" },
              { reasoning: "The refrain gives listeners a phrase to anticipate and remember — it is designed for oral delivery to a crowd.", marks: 1, markCode: "AO3" },
              { reasoning: "The accumulation builds emotional momentum toward the climax; a single statement couldn't sustain the rising arc.", marks: 1, markCode: "AO3" },
              { reasoning: "The personal 'I' repeated makes the collective struggle feel individual — King speaks for himself and everyone.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Anaphora accumulates meaning and builds emotional momentum; it is structural, not decorative.",
            commonErrors: ["Calling it 'repetition' without noting the cumulative development."],
          },
        },
        {
          id: "ela12-u2-devices-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare anaphora and antithesis as rhetorical devices. How does each create meaning differently? Use examples from at least two speeches.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Device comparison", statement: "Define each device's mechanism, then contrast their effects." },
              { kind: "technique", name: "Formal analysis", statement: "Link device to specific textual evidence." },
            ],
            steps: [
              { reasoning: "Defines anaphora as initial repetition building cumulative force (King's 'I have a dream').", marks: 1, markCode: "AO2" },
              { reasoning: "Defines antithesis as balanced opposition creating contrast (Kennedy's 'Ask not... ask...').", marks: 1, markCode: "AO2" },
              { reasoning: "Explains anaphora creates momentum and expectation — the listener waits for the next variation.", marks: 1, markCode: "AO3" },
              { reasoning: "Explains antithesis creates balance and memorability — the contrast is the meaning.", marks: 1, markCode: "AO3" },
              { reasoning: "Uses examples from at least two speeches with specific evidence.", marks: 1, markCode: "AO2" },
              { reasoning: "Concludes they serve different purposes: anaphora builds, antithesis contrasts — a speech may use both.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Anaphora builds cumulative momentum through repetition; antithesis creates meaning through balanced contrast. Both are structural, not decorative.",
            commonErrors: ["Listing definitions without comparing effects."],
          },
        },
      ],
    },
  ],
};
