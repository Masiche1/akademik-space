import type { Lesson } from "../../../types.ts";
import {
  compareRespondQuestions,
  opinionEvidenceQuestions,
} from "./expanded-questions.ts";

export const lesson13: Lesson = {
  id: "mll2-u1-lesson-1-3",
  code: "1-3",
  title: "Using Evidence to Support Opinions",
  goal: "I CAN give an opinion about a text and support it with short quotations as evidence.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion C: Producing text",
  ],
  vocabulary: [
    { term: "Opinion", definition: "What you think or believe about a text — 'I think the ending was sad'." },
    { term: "Evidence", definition: "Details from the text that support your opinion — a quotation or described moment." },
    { term: "Quotation", definition: "The exact words copied from a text, shown in quotation marks." },
    { term: "Justify", definition: "To give reasons and evidence for what you think." },
    { term: "Response", definition: "Your personal reaction to a text — what you liked, felt or thought." },
  ],
  concepts: [
    {
      id: "mll2-u1-opinion-evidence",
      title: "Opinions with evidence",
      skill: "State an opinion about a text and back it up with a quotation.",
      lesson: {
        sections: [
          {
            heading: "Opinion vs fact",
            body: "A **fact** is something the text tells you: 'the door was red'. An **opinion** is what you think about it: 'the red door made the house feel welcoming'. Opinions need **evidence** — details from the text that prove your point.",
          },
          {
            heading: "Using quotations",
            body: "A **quotation** copies the text's exact words. Put it in **quotation marks** and keep it **short**. 'The text says the character \"couldn't meet his eyes\"' is better than copying a whole paragraph.",
          },
          {
            heading: "The PEA structure",
            body: "A strong response uses **Point** (your opinion), **Evidence** (the quotation), **Analysis** (why it supports your point). 'I think Sam is brave (P). When he \"ran into the smoke\" (E), it shows courage because he risked his life (A).'",
          },
        ],
        keyFormulas: [
          { name: "PEA", statement: "Point + Evidence (quotation) + Analysis (explanation)." },
        ],
        workedExample: {
          problem: "Give an opinion with evidence: 'The storm was loud.'",
          solution: "I think the storm felt scary (Point). The text says it 'screamed like a living thing' (Evidence), which makes it seem almost alive and threatening (Analysis).",
        },
      },
      questions: [
        {
          id: "mll2-u1-opinion-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'evidence' in a text response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your personal feelings with no reason" },
              { id: "b", text: "The author's biography" },
              { id: "c", text: "Details or quotations from the text that support your point" },
              { id: "d", text: "A summary of the whole story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evidence", statement: "Evidence is textual detail that supports an opinion." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): evidence = details/quotations supporting your point — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Details or quotations from the text that support your point",
          },
        },
        {
          id: "mll2-u1-opinion-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Interview",
            author: "Written for Akademik Space",
            text: "When asked about her worst moment, Ana looked out of the window for a long time. Then she smiled: 'I failed my first exam. It taught me more than the pass did.'",
          },
          stem: "Give one opinion about Ana's character and support it with a short quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "PEA structure", statement: "Point + quotation evidence + brief explanation." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): opinion — Ana is resilient and positive about failure.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): evidence — she 'smiled' and said failing 'taught me more than the pass did' (in quotation marks).", evidence: "It taught me more than the pass did", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Ana is resilient — she smiled and said failure \"taught me more than the pass did\".'",
          },
        },
        {
          id: "mll2-u1-opinion-evidence-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Argument",
            author: "Written for Akademik Space",
            text: "'You never listen to me,' Sara shouted. Tom opened his mouth to reply, then closed it. He picked up his bag and left without a word.",
          },
          stem: "A student writes: 'Tom is a bad person.' Explain why this opinion is weak, and rewrite it as a stronger, evidence-based opinion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fair judgement", statement: "Opinions should describe specific behaviour, not make sweeping judgements." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'bad person' is a sweeping judgement — the text only shows one moment of silence, not a whole character.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): a stronger opinion names specific behaviour — e.g. 'Tom seems unable to communicate when emotions run high'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): evidence — 'opened his mouth to reply, then closed it' and 'left without a word' show withdrawal, not cruelty.", evidence: "left without a word", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Bad person' is unfair — one silent moment isn't the whole character. Better: 'Tom withdraws when conflict gets emotional' with the evidence quoted.",
          },
        },
        {
          id: "mll2-u1-opinion-evidence-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The New Student",
            author: "Written for Akademik Space",
            text: "Kofi arrived in the middle of term, speaking little English. On his first day, a boy named Ravi showed him where everything was. By Friday, Kofi had learned Ravi's name and Ravi had learned to say 'shukran' — thank you.",
          },
          parts: [
            { label: "a", prompt: "Give an opinion about the friendship between Kofi and Ravi.", marks: 1 },
            { label: "b", prompt: "Support it with a quotation from the passage.", marks: 2 },
            { label: "c", prompt: "Explain how the quotation supports your opinion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "PEA response", statement: "Opinion + exact quotation + explanation of why the quotation matters." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): opinion — their friendship is warm, mutual and grows quickly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): quotation — 'Ravi had learned to say \"shukran\" — thank you' (or Kofi learning Ravi's name).", evidence: "Ravi had learned to say 'shukran'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D (Using language): quotation marks used and words copied exactly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): Ravi learning Kofi's language shows he values him — friendship is two-way, not just helping.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): this supports 'warm and mutual' because both characters give to each other.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Warm, mutual friendship. (b) 'Ravi had learned to say shukran' — exact quotation. (c) It shows Ravi values Kofi enough to learn his language — the friendship is two-way.",
          },
        },
        ...opinionEvidenceQuestions,
      ],
    },
    {
      id: "mll2-u1-compare-respond",
      title: "Comparing responses",
      skill: "Compare two texts or two responses and explain similarities and differences.",
      lesson: {
        sections: [
          {
            heading: "Comparing texts",
            body: "To **compare** two texts, look at: **characters** (same or different?), **settings**, **events**, **feelings** and **purposes**. Use connectives: **both**, **similarly**, **whereas**, **on the other hand**, **in contrast**.",
          },
          {
            heading: "Comparing responses",
            body: "Two readers can respond differently to the same text. One may find a character 'brave', another 'foolish'. Both can be valid — the difference is in **which evidence** each reader focuses on. Comparing responses means comparing the evidence.",
          },
          {
            heading: "Balanced comparison",
            body: "A good comparison gives **both sides**. Don't just say what's different — say what's the **same** too. 'Both stories are about loss, but Story A shows it through a funeral while Story B shows it through an empty chair.'",
          },
        ],
        keyFormulas: [
          { name: "Compare connectives", statement: "Both / similarly / whereas / in contrast / on the other hand." },
        ],
        workedExample: {
          problem: "Compare two stories: one ends happily, one sadly. How would you structure a comparison?",
          solution: "Start with what's the same (both about friendship), then contrast endings ('whereas', 'in contrast'), and conclude which ending is more effective and why.",
        },
      },
      questions: [
        {
          id: "mll2-u1-compare-respond-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connective best shows a difference between two texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Similarly" },
              { id: "b", text: "Both" },
              { id: "c", text: "Whereas" },
              { id: "d", text: "And" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comparison connectives", statement: "'Whereas' and 'in contrast' signal difference; 'both' and 'similarly' signal similarity." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'whereas' shows contrast — (c).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Whereas",
          },
        },
        {
          id: "mll2-u1-compare-respond-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two readers respond to the same story. Amy says the ending is 'sad and unfair'. Ben says it's 'realistic and honest'. Explain how both can be valid responses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subjective response", statement: "Different readers can interpret the same ending differently based on values and evidence." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'sad and unfair' focuses on the character's loss; 'realistic and honest' focuses on the truth of the situation.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both are valid because they respond to different aspects — emotion vs realism — and use the same ending differently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both are valid — Amy responds emotionally (sadness/unfairness), Ben responds analytically (realism); the same ending supports different readings.",
          },
        },
        {
          id: "mll2-u1-compare-respond-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Stories",
            author: "Written for Akademik Space",
            text: "Story A: A girl plants a seed and waits months for it to grow.\n\nStory B: A girl plants a seed and digs it up the next day to see if it's working.",
          },
          stem: "Compare the two stories' approaches to patience. What does each girl's action suggest about her character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative analysis", statement: "Comparing actions reveals different character traits and themes." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Story A's girl is patient and trusting — she waits months; Story B's girl is impatient and curious — she checks daily.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both actions come from love of the plant, but patience vs checking show different relationships with time.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the contrast suggests different themes — faith/trust in Story A, anxiety/impatience in Story B.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Story A shows patience and trust; Story B shows impatience and anxiety. Same action (planting), different character revealed.",
          },
        },
        {
          id: "mll2-u1-compare-respond-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two passages about the same event.",
          extract: {
            title: "The Fire",
            author: "Written for Akademik Space",
            text: "Version A: 'The fire spread fast. People ran. The old cinema burned to the ground.'\n\nVersion B: 'Flames leapt from window to window like living things. Neighbours grabbed whatever they could carry and ran into the street, watching their street burn.'",
          },
          parts: [
            { label: "a", prompt: "Describe one similarity between the two versions.", marks: 1 },
            { label: "b", prompt: "Describe two differences in how they describe the fire.", marks: 2 },
            { label: "c", prompt: "Explain which version creates more emotion and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative stylistic analysis", statement: "Different word choices and detail levels create different emotional effects." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): both describe the same event — a fire spreading and people fleeing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Version A is brief and factual; Version B uses imagery ('leapt', 'like living things') and detail ('grabbed whatever they could carry').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Version A tells; Version B shows — B paints a picture, A reports facts.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): Version B creates more emotion — the personified flames and the neighbours' actions make us feel the panic and loss.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): Version A is flat and distant — we learn what happened but not how it felt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Same event — fire spreading, people fleeing. (b) A is brief/factual; B uses imagery and detail. (c) B is more emotional — imagery and human detail make us feel it.",
          },
        },
        ...compareRespondQuestions,
      ],
    },
  ],
};
