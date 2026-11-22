import type { Lesson, MarkLevel } from "../../../types.ts";

/** Level bands (highest first). Four bands for 8 marks, three for 6. */
function lv(top: 6 | 8, part?: string): MarkLevel[] {
  const six = top === 6;
  const ranges = six ? ["5-6", "3-4", "1-2"] : ["7-8", "5-6", "3-4", "1-2"];
  const text = six
    ? ["Thorough, well-chosen references; developed comment.", "Some understanding; some relevant references.", "Simple, limited comment; few references."]
    : ["Perceptive, assured; well-chosen, integrated references.", "Clear, relevant explanation; relevant references.", "Some understanding; some relevant references.", "Simple, limited comment; few references."];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", part }));
}

const SURPLUS = {
  title: "A Christmas Carol, Stave One (the charity collectors)",
  author: "Charles Dickens",
  source: "A Christmas Carol (1843)",
  text: "\"Are there no prisons?\"\n\"Plenty of prisons,\" said the gentleman, laying down the pen again.\n\"And the Union workhouses?\" demanded Scrooge. \"Are they still in operation?\"\n\"They are. Still,\" returned the gentleman, \"I wish I could say they were not.\"\n\"If they would rather die,\" said Scrooge, \"they had better do it, and decrease the surplus population.\"",
};

const WANT = {
  title: "A Christmas Carol, Stave Three (Ignorance and Want)",
  author: "Charles Dickens",
  source: "A Christmas Carol (1843)",
  text: "\"They are Man's,\" said the Spirit, looking down upon them. \"And they cling to me, appealing from their fathers. This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom, unless the writing be erased.\"",
};

export const lesson22: Lesson = {
  id: "et8-u2-lesson-2-2",
  code: "2-2",
  title: "Themes and Context in A Christmas Carol",
  goal: "I CAN explain the themes of redemption, poverty and family, and link them to Victorian society and Dickens's purpose.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO4"],
  vocabulary: [
    { term: "Theme", definition: "A central idea that a text explores, such as poverty or redemption." },
    { term: "Workhouse", definition: "A Victorian institution where the poorest people lived and worked in harsh conditions in return for food and shelter." },
    { term: "Poor Law", definition: "Laws that made the poor enter workhouses to receive help, based on the idea that poverty was a personal fault." },
    { term: "Malthusian", definition: "Following Thomas Malthus's idea that the population would outgrow food supplies, which Scrooge echoes with 'surplus population'." },
    { term: "Philanthropy", definition: "Generosity towards others, especially through giving money to good causes." },
    { term: "Allegory", definition: "A story in which characters and events stand for bigger ideas, such as Ignorance and Want." },
    { term: "Context", definition: "The social, historical and cultural background to a text." },
  ],
  concepts: [
    {
      id: "et8-u2-themes",
      title: "Themes: redemption, poverty and family",
      skill: "Explain how Dickens develops the themes of redemption, poverty and family with supporting evidence.",
      lesson: {
        sections: [
          {
            heading: "Redemption",
            body: "**Redemption** is Scrooge's journey from isolated miser to generous man. Dickens shows it is possible for anyone to change, but only if they open their eyes to others and act. The final stave shows Scrooge turning words into actions: he sends the turkey and raises Bob's salary.",
          },
          {
            heading: "Poverty and family",
            body: "Dickens attacks social indifference to poverty. The Cratchits are poor but close, while Scrooge is rich but alone, so love, not wealth, is the real measure of a good life. The children **Ignorance and Want** act as a warning that unless society cares for the poor, disaster will follow. Always link themes to the writer's purpose: Dickens wanted readers to feel responsible.",
          },
        ],
        keyFormulas: [
          { name: "Redemption", statement: "Change from selfishness to generosity, through awareness and action." },
          { name: "Poverty", statement: "Society's neglect of the poor; wealth is shown as a duty." },
          { name: "Family", statement: "Warmth and love, in contrast with Scrooge's isolation." },
        ],
        workedExample: {
          problem: "How does Dickens use the words of the Spirit in the extract to present poverty?",
          solution: "Dickens turns poverty into a warning by personifying it as two children, 'Ignorance' and 'Want'. By making them children, he evokes pity and suggests that society's neglect is innocent victims' tragedy. The capitalised abstract nouns and the Spirit's command 'Beware them both' make the passage feel like a sermon, and the word 'Doom' foretells disaster if nothing changes. Dickens thus urges Victorian readers to act.",
        },
      },
      questions: [
        {
          id: "et8-u2-themes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WANT,
          stem: "In the extract, what do the children Ignorance and Want represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Cratchit children" },
              { id: "b", text: "The problems of poor people that society ignores" },
              { id: "c", text: "Scrooge's two nephews" },
              { id: "d", text: "The ghosts of Marley's friends" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Allegory", statement: "The children embody social evils." }],
            steps: [{ reasoning: "They are 'Man's' children and a warning, symbolising the neglect and need that society allows.", evidence: "They are Man's", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The problems of poor people that society ignores.",
            commonErrors: ["Taking them literally as relatives of Scrooge."],
          },
        },
        {
          id: "et8-u2-themes-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SURPLUS,
          stem: "What does the extract reveal about Scrooge's attitude to the poor? Refer to the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Poor Law", statement: "Prisons and workhouses were seen as the answer to poverty." }],
            steps: [
              { reasoning: "He believes prisons and workhouses are enough, showing he thinks poverty is a crime or a fault.", evidence: "Are there no prisons?", marks: 1, markCode: "AO1" },
              { reasoning: "He is callous about death: the poor should die rather than burden society.", evidence: "they had better do it", marks: 1, markCode: "AO1" },
              { reasoning: "'Surplus population' dehumanises the poor, treating them as an excess to remove.", evidence: "decrease the surplus population", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Scrooge is callous. He thinks prisons and workhouses suffice and says the poor should 'decrease the surplus population', which treats them as a problem rather than as people.",
            commonErrors: ["Not quoting.", "Saying he is 'mean' without evidence."],
          },
        },
        {
          id: "et8-u2-themes-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: WANT,
          stem: "How does Dickens use language in the extract to warn the reader about poverty?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification and allegory", statement: "Abstract ideas become children." },
              { kind: "technique", name: "Imperative", statement: "'Beware' commands the reader." },
            ],
            steps: [
              { reasoning: "Ignorance and Want are children, so their suffering is innocent and arouses pity and guilt.", evidence: "This boy is Ignorance. This girl is Want.", marks: 2, markCode: "AO2" },
              { reasoning: "The imperative 'Beware' acts as a direct warning to the reader, making the passage a sermon.", evidence: "Beware them both", marks: 2, markCode: "AO2" },
              { reasoning: "'Doom' and 'unless the writing be erased' suggest that disaster is certain unless society acts, giving hope as well as threat.", evidence: "that written which is Doom", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Dickens personifies ignorance and want as children to arouse pity and guilt, uses the imperative 'Beware' to address the reader directly, and the word 'Doom' warns that disaster will follow unless the writing is 'erased', that is, unless society changes.",
            levels: lv(6),
            commonErrors: ["Not exploring the effect of children.", "Ignoring Dickens's purpose."],
          },
        },
        {
          id: "et8-u2-themes-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: SURPLUS,
          stem: "Read the extract and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two places Scrooge says the poor could go to.", marks: 2 },
            { label: "b", prompt: "Explain what Scrooge's reply 'decrease the surplus population' shows about his character.", marks: 4 },
            { label: "c", prompt: "How does Dickens present the theme of redemption in the novella? Refer to Scrooge's attitude here and to later events.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select exact words." },
              { kind: "context", name: "Malthusian ideas", statement: "Some Victorians argued that helping the poor made the population grow." },
              { kind: "technique", name: "Contrast", statement: "Scrooge's later generosity reverses his earlier attitude." },
            ],
            steps: [
              { part: "a", reasoning: "Prisons.", evidence: "Are there no prisons?", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Union workhouses.", evidence: "the Union workhouses", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He is cold and unsympathetic: he treats the poor as numbers.", evidence: "surplus population", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "He echoes contemporary Malthusian ideas, so Dickens criticises selfish Victorian views.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "In Stave One Scrooge rejects charity, so he begins at the moral lowest point.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The Spirit throws his words back at him, saying 'What the surplus is, and Where it is', so he feels shame.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "In Stave Five he sends the turkey and increases Bob's salary, showing actions match words.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Dickens shows redemption is open to all and implies society should do likewise.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "(a) Prisons; Union workhouses. (b) The phrase treats the poor as numbers and shows he is callous, echoing Malthusian ideas Dickens criticises. (c) Scrooge begins by rejecting charity but is shamed by his own words and becomes generous in Stave Five, showing that anyone can change.",
            levels: lv(8, "c"),
            commonErrors: ["Writing about redemption without referring to the starting point.", "Not referring to Dickens's purpose."],
          },
        },
      ],
    },
    {
      id: "et8-u2-context",
      title: "Victorian context",
      skill: "Use knowledge of Victorian society, the Poor Law and Dickens's purposes to deepen analysis.",
      lesson: {
        sections: [
          {
            heading: "A divided society",
            body: "In 1843 Britain was rich from industry but millions lived in poverty. The **1834 Poor Law** pushed the poor into **workhouses**, where families were split and conditions were harsh. Child labour was common, and Dickens himself worked in a factory as a boy when his father was imprisoned for debt. This personal experience fuels his sympathy.",
          },
          {
            heading: "Using context well",
            body: "Context (AO4) earns marks only when it explains the text. Do not drop in facts. Say: 'Dickens, who knew poverty as a child, uses Tiny Tim to make wealthy readers feel pity.' Link the fact to a quotation and to Dickens's purpose: to persuade readers to be charitable, and to make Christmas a time of generosity.",
          },
        ],
        keyFormulas: [
          { name: "1834 Poor Law", statement: "Workhouses made harsh so only the desperate would enter." },
          { name: "Dickens's childhood", statement: "Worked in a blacking factory at 12; shaped his sympathy for the poor." },
          { name: "Christmas traditions", statement: "Dickens helped popularise generous, family-centred Christmases." },
        ],
        workedExample: {
          problem: "Why might Dickens have written A Christmas Carol in 1843?",
          solution: "Dickens wrote it to expose how the wealthy ignored the poor, at a time when the Poor Law left many in workhouses. He hoped a ghost story with a happy ending would reach many readers and persuade them to be charitable. Through Tiny Tim he makes poverty personal and emotional.",
        },
      },
      questions: [
        {
          id: "et8-u2-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was a workhouse in Victorian Britain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A place where the poor lived and worked in return for food and shelter" },
              { id: "b", text: "A factory where the rich invested" },
              { id: "c", text: "A school for poor children" },
              { id: "d", text: "A hospital for the sick" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Workhouses", statement: "Harsh institutions for the poor." }],
            steps: [{ reasoning: "Workhouses gave basic food and shelter in return for hard labour.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** A place where the poor lived and worked in return for food and shelter.",
            commonErrors: ["Confusing workhouses with schools or hospitals."],
          },
        },
        {
          id: "et8-u2-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How might Dickens's own childhood have influenced the way he presents the Cratchit family?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Biography", statement: "Dickens worked at 12 when his father was imprisoned for debt." }],
            steps: [
              { reasoning: "Dickens knew poverty personally, so he can portray it sympathetically.", marks: 1, markCode: "AO4" },
              { reasoning: "The Cratchits are poor but loving, showing that poor people deserve respect.", marks: 1, markCode: "AO1" },
              { reasoning: "Tiny Tim invites pity, urging readers to act.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Dickens worked in a factory as a boy, so he presents the poor Cratchits sympathetically, as loving and decent, with Tiny Tim inviting readers to feel pity and act.",
            commonErrors: ["Listing biography facts without linking to the text."],
          },
        },
        {
          id: "et8-u2-context-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SURPLUS,
          stem: "How does this extract reflect attitudes to poverty in Victorian society, and what is Dickens's purpose in including it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Poor Law", statement: "Many believed workhouses and prisons were the solution." },
              { kind: "context", name: "Purpose", statement: "Dickens aimed to shame uncaring readers." },
            ],
            steps: [
              { reasoning: "Scrooge's questions about prisons and workhouses reflect the Poor Law view that the poor should be dealt with by institutions.", evidence: "Are there no prisons?", marks: 2, markCode: "AO4" },
              { reasoning: "'Surplus population' echoes Malthusian ideas, making Scrooge a representative of wealthy indifference.", evidence: "surplus population", marks: 2, markCode: "AO4" },
              { reasoning: "The gentleman's mild reply 'I wish I could say they were not' shows a more humane view, inviting readers to side with him.", evidence: "I wish I could say they were not", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "Scrooge reflects Poor Law views and Malthusian thinking, treating the poor as a surplus. The collector's moral reply shows the alternative view, and Dickens uses the contrast to shame readers into compassion.",
            levels: lv(6),
            commonErrors: ["Context facts with no link to the extract."],
          },
        },
        {
          id: "et8-u2-context-q4",
          difficulty: "challenge",
          totalMarks: 14,
          stem: "Answer these questions about context in A Christmas Carol.",
          parts: [
            { label: "a", prompt: "State two facts about the 1834 Poor Law or workhouses.", marks: 2 },
            { label: "b", prompt: "Explain why Dickens wrote a ghost story rather than a factual essay about poverty.", marks: 4 },
            { label: "c", prompt: "'Dickens wrote A Christmas Carol to change the way readers thought about the poor.' How far do you agree? Refer to events in the novella and to context.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Poor Law", statement: "Workhouses were deliberately harsh and families were separated." },
              { kind: "context", name: "Audience", statement: "A story reached more readers than a pamphlet." },
              { kind: "skill", name: "Evaluation", statement: "Argue a view and support it." },
            ],
            steps: [
              { part: "a", reasoning: "Workhouses gave food and shelter in return for work.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Conditions were made harsh, and families were separated.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "A ghost story with a happy ending appeals to a wide audience and is memorable.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Emotional characters such as Tiny Tim make readers feel, not just think, so they are more likely to act.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Agree: Tiny Tim and Ignorance and Want are designed to arouse sympathy and warn the reader.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Scrooge's change, from rejecting charity to giving generously, models how readers should behave.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Context: Dickens's own poverty and the 1834 Poor Law motivated the message.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Qualification: it also entertains and celebrates Christmas, so persuasion is gentle rather than angry.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "(a) Workhouses provided shelter in exchange for labour; conditions were harsh and families were split. (b) A story reaches more readers and Tiny Tim makes people feel pity. (c) Largely agree: characters, warnings and Scrooge's example aim to change attitudes, though entertainment and festive warmth also matter.",
            levels: lv(8, "c"),
            commonErrors: ["Giving context only with no link.", "Not weighing the statement."],
          },
        },
      ],
    },
  ],
};
