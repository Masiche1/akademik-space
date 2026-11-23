import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const WOOLF: TextExtract = {
  title: "A Room of One's Own",
  author: "Virginia Woolf",
  source: "1929",
  text: "A woman must have money and a room of her own if she is to write fiction.\n\nBut, you may say, we asked you to speak about women and fiction — what has that got to do with a room of one's own?",
};

const ANKOMAH: TextExtract = {
  title: "The Cartographer",
  author: "Written for Akademik Space",
  source: "Original passage",
  text: "Every map is an argument. The cartographer decides what to leave out, and the leaving out is where the politics lives. When the map shows roads but not footpaths, it is saying that cars matter and people do not. When it names the capital but not the villages, it is saying that power lives in one place and nowhere else.",
};

const PLATH: TextExtract = {
  title: "Daddy",
  author: "Sylvia Plath",
  source: "Ariel (1965)",
  text: "Daddy, I have had to kill you.\nYou died before I had time—\nMarble-heavy, a bag full of God,\nGhastly statue with one gray toe",
};

export const lesson141: Lesson = {
  id: "ela12-u3-lesson-4-1",
  code: "4-1",
  title: "Close Reading and Ambiguity",
  goal: "I CAN perform close reading that identifies ambiguity, tracks patterns, and evaluates competing interpretations.",
  standards: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4"],
  vocabulary: [
    { term: "Close reading", definition: "Careful, line-by-line analysis of how a text produces meaning." },
    { term: "Ambiguity", definition: "Deliberate openness supporting multiple valid readings." },
    { term: "Pattern", definition: "A repeated element (image, word, structure) that carries thematic weight." },
    { term: "Competing interpretation", definition: "Two or more defensible readings of the same text." },
    { term: "Evidence-based claim", definition: "An interpretive statement anchored to specific textual details." },
    { term: "Textual warrant", definition: "The specific words or details that justify an interpretation." },
  ],
  concepts: [
    {
      id: "ela12-u3-close-reading",
      title: "The discipline of close reading",
      skill: "Anchor every interpretive claim to specific textual evidence.",
      lesson: {
        sections: [
          {
            heading: "What close reading is",
            body: "Close reading means slowing down: track individual words, sentence structures, patterns of imagery, and shifts in tone. Every claim must be anchored to a specific detail — 'the text suggests X' is incomplete; 'the word Y in line Z does X because...' is analysis.",
          },
          {
            heading: "Patterns as arguments",
            body: "Repeated elements accumulate meaning. Plath's 'Daddy' repeats 'black,' 'marble,' and 'boot' — the pattern builds toward a nightmarish fusion of father, husband, and oppressor. The pattern is the argument; no single line contains it.",
          },
          {
            heading: "Ambiguity as method",
            body: "Some texts are designed to resist single readings. Woolf's rhetorical question in 'A Room of One's Own' — 'what has that got to do with a room of one's own?' — is both a genuine objection and a setup for her answer. Ambiguity is not vagueness; it is structure that rewards multiple readings.",
          },
        ],
        keyFormulas: [
          { name: "Close reading", statement: "Every claim anchored to a specific word, line, or pattern." },
          { name: "Pattern", statement: "Repetition accumulates meaning across a text." },
        ],
        workedExample: {
          problem: "Analyze Woolf's rhetorical question in 'A Room of One's Own.'",
          solution: "The question voices the skeptical reader's objection — 'what does a room have to do with fiction?' — then Woolf answers it by building her entire argument: material conditions (money, room) produce creative freedom. The question is a structural hinge, not a digression.",
        },
      },
      questions: [
        {
          id: "ela12-u3-close-reading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WOOLF,
          stem: "What is Woolf's main argument in 'A Room of One's Own'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Women should not write fiction." },
              { id: "b", text: "Women need money and private space to write." },
              { id: "c", text: "Fiction is less valuable than essays." },
              { id: "d", text: "Men have more talent than women." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Woolf's thesis", statement: "Material conditions — money and privacy — enable women's creative work." }],
            steps: [{ reasoning: "The opening sentence states the thesis directly: 'money and a room of her own' are the conditions for writing fiction.", evidence: "money and a room of her own", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Money and private space.",
            commonErrors: ["Reading the rhetorical question as the thesis instead of the setup."],
          },
        },
        {
          id: "ela12-u3-close-reading-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: WOOLF,
          stem: "Analyze how Woolf's rhetorical question functions structurally in the passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical question", statement: "The question voices the audience's objection to set up the answer." },
              { kind: "skill", name: "Structural analysis", statement: "Identify where a device sits in the argument's architecture." },
            ],
            steps: [
              { reasoning: "The question 'what has that got to do with a room of one's own?' voices the skeptical reader — it anticipates the objection before raising it.", evidence: "what has that got to do with a room of one's own?", marks: 1, markCode: "AO2" },
              { reasoning: "By voicing the objection herself, Woolf controls it — she frames the question rather than letting critics frame it for her.", marks: 1, markCode: "AO3" },
              { reasoning: "The question marks a transition: from thesis statement to the evidence and argument that will answer it.", marks: 1, markCode: "AO3" },
              { reasoning: "The device makes the essay feel like a conversation — Woolf argues with herself on the reader's behalf.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The rhetorical question voices and controls the audience's objection, serving as a structural hinge into Woolf's argument.",
            commonErrors: ["Treating the question as a digression rather than a structural device."],
          },
        },
        {
          id: "ela12-u3-close-reading-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ANKOMAH,
          stem: "Analyze how the passage argues that 'every map is an argument.' Track the specific examples and explain how each supports the claim.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Evidence-based analysis", statement: "Each example must be tied to the claim it supports." },
              { kind: "technique", name: "Argument by example", statement: "Specific cases (roads vs footpaths, capital vs villages) illustrate the abstract claim." },
            ],
            steps: [
              { reasoning: "The thesis 'every map is an argument' is stated immediately — the passage is itself a mini-argument.", evidence: "Every map is an argument", marks: 1, markCode: "AO2" },
              { reasoning: "'Leaving out is where the politics lives' locates the argument in omission, not inclusion — the cartographer's power is subtractive.", marks: 1, markCode: "AO3" },
              { reasoning: "The roads/footpaths example shows how a map's choices encode values — cars over people.", evidence: "shows roads but not footpaths", marks: 1, markCode: "AO2" },
              { reasoning: "The capital/villages example extends the argument to power geography — naming is an act of political recognition.", evidence: "names the capital but not the villages", marks: 1, markCode: "AO2" },
              { reasoning: "The passage itself practices what it preaches: it omits the obvious (a map shows places) to reveal the hidden (a map argues values).", marks: 1, markCode: "AO4" },
              { reasoning: "Concludes the passage is self-demonstrating — its argument about maps is also an argument about how language and representation work.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The passage argues maps are arguments through omission; its own structure (focusing on what's left out) demonstrates the claim.",
            commonErrors: ["Summarizing examples without explaining how they support the thesis."],
          },
        },
      ],
    },
    {
      id: "ela12-u3-ambiguity",
      title: "Competing interpretations",
      skill: "Evaluate multiple valid readings of an ambiguous text and defend one with evidence.",
      lesson: {
        sections: [
          {
            heading: "What counts as ambiguity",
            body: "Ambiguity exists when the text supports two readings that the evidence can't fully separate. Plath's 'Daddy' can be read as about a literal father, a husband, or both — the poem's power comes from refusing to choose. This is different from vagueness (sloppy writing) or confusion (unclear writing).",
          },
          {
            heading: "How to evaluate readings",
            body: "For each interpretation: (1) state the claim clearly, (2) provide textual evidence, (3) explain how the evidence produces the meaning, (4) acknowledge what the reading doesn't account for. The strongest reading isn't the one with the most evidence — it's the one that explains the most with the least strain.",
          },
          {
            heading: "When ambiguity is the point",
            body: "Some texts are designed to resist resolution. Frost's 'Road Not Taken' is ambiguous about whether the speaker is sincere or self-deceiving — and that ambiguity is the poem's meaning. The reader's uncertainty mirrors life's own uncertainty about choices.",
          },
        ],
        keyFormulas: [
          { name: "Ambiguity vs vagueness", statement: "Ambiguity is deliberate structure; vagueness is imprecision." },
          { name: "Strongest reading", statement: "Explains the most with the least strain on the text." },
        ],
        workedExample: {
          problem: "Evaluate two readings of Plath's 'Daddy': literal father vs. husband/oppressor.",
          solution: "Both readings are supported: 'Daddy' is a common term for father, but 'boot' and 'swastika' suggest a larger oppressor. The poem's ambiguity is productive — it refuses to separate the personal from the political.",
        },
      },
      questions: [
        {
          id: "ela12-u3-ambiguity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PLATH,
          stem: "What makes 'Daddy' an ambiguous poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is written in free verse with no clear subject." },
              { id: "b", text: "The 'Daddy' figure can be read as father, husband, or larger oppressor." },
              { id: "c", text: "The poem has no coherent meaning." },
              { id: "d", text: "It uses only abstract language." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Plath's ambiguity", statement: "The poem deliberately refuses to fix the 'Daddy' figure's identity." }],
            steps: [{ reasoning: "'Daddy' can be literal father, husband (Brass Tacks), or fascist oppressor (swastika) — the poem sustains all readings.", evidence: "Daddy, I have had to kill you", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Multiple identities for the 'Daddy' figure.",
            commonErrors: ["Reading ambiguity as lack of meaning."],
          },
        },
        {
          id: "ela12-u3-ambiguity-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: PLATH,
          stem: "Analyze how Plath's repetition of 'black' and 'marble' creates a pattern that supports multiple interpretations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pattern", statement: "Repetition accumulates meaning across the poem." },
              { kind: "skill", name: "Multi-read", statement: "Show how a pattern supports different readings." },
            ],
            steps: [
              { reasoning: "'Marble-heavy' describes the statue-like father — cold, lifeless, immovable.", evidence: "Marble-heavy, a bag full of God", marks: 1, markCode: "AO2" },
              { reasoning: "'Black' recurs as a color of oppression — it could be literal hair, clothing, or the swastika's shadow.", marks: 1, markCode: "AO2" },
              { reasoning: "The pattern of stone/death imagery supports readings of the father as both personal abuser and historical oppressor.", marks: 1, markCode: "AO3" },
              { reasoning: "The repetition refuses to resolve which 'Daddy' dominates — the ambiguity is structural.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The stone/black pattern sustains both personal and political readings, making the poem's ambiguity productive rather than vague.",
            commonErrors: ["Listing repeated words without explaining their cumulative effect."],
          },
        },
        {
          id: "ela12-u3-ambiguity-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: PLATH,
          stem: "Evaluate the strongest interpretation of 'Daddy.' Which reading — personal, political, or both — best explains the poem's imagery and structure? Defend with evidence.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Weigh competing readings by how well they explain the whole text." },
              { kind: "technique", name: "Evidence-based defense", statement: "The strongest reading accounts for the most details." },
            ],
            steps: [
              { reasoning: "States a clear thesis about which reading is strongest.", marks: 1, markCode: "AO3" },
              { reasoning: "Provides evidence for the chosen reading (e.g., 'boot,' 'swastika,' 'vampire' for political; 'Daddy,' 'Achoo' for personal).", marks: 1, markCode: "AO2" },
              { reasoning: "Addresses what competing readings explain but the chosen one also accounts for.", marks: 1, markCode: "AO3" },
              { reasoning: "Acknowledges the poem's deliberate ambiguity — the strongest reading doesn't eliminate alternatives but explains their coexistence.", marks: 1, markCode: "AO4" },
              { reasoning: "Explains how the poem's structure (villanelle-like repetition, escalating violence) supports the interpretation.", marks: 1, markCode: "AO2" },
              { reasoning: "Concludes that the poem's power comes from refusing to separate personal trauma from historical oppression.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The strongest reading treats 'Daddy' as both personal abuser and political oppressor — the poem's ambiguity is its meaning.",
            commonErrors: ["Choosing a reading without addressing what alternatives explain."],
          },
        },
      ],
    },
  ],
};
