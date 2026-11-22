import type { Lesson, MarkLevel } from "../../../types.ts";

/** Level bands (highest first) for a 6-mark answer; optional part label. */
function sixLevels(part?: string): MarkLevel[] {
  return [
    { level: "Level 3", marks: "5-6", descriptor: "Thorough, well-chosen references; developed comment on the writer's methods.", part },
    { level: "Level 2", marks: "3-4", descriptor: "Some understanding; some relevant references.", part },
    { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment; few references.", part },
  ];
}

const SCROOGE = {
  title: "A Christmas Carol, Stave One (description of Scrooge)",
  author: "Charles Dickens",
  source: "A Christmas Carol (1843)",
  text: "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.",
};

export const lesson21: Lesson = {
  id: "et8-u2-lesson-2-1",
  code: "2-1",
  title: "Plot and Characterisation in A Christmas Carol",
  goal: "I CAN summarise the plot of A Christmas Carol stave by stave and explain how Dickens presents Scrooge.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Stave", definition: "Dickens's word for a chapter, borrowed from musical notation, to suit a 'carol'." },
    { term: "Novella", definition: "A short novel; A Christmas Carol is a novella." },
    { term: "Redemption", definition: "Being saved from a bad state; for Scrooge, being changed for the better." },
    { term: "Protagonist", definition: "The main character, here Ebenezer Scrooge." },
    { term: "Foil", definition: "A character who contrasts with another to highlight qualities, such as Fred or Bob Cratchit against Scrooge." },
    { term: "Characterisation", definition: "The methods a writer uses to create a character: description, speech, actions and others' reactions." },
  ],
  concepts: [
    {
      id: "et8-u2-plot-staves",
      title: "Plot and the five staves",
      skill: "Summarise the five staves and explain why their order matters to Scrooge's change.",
      lesson: {
        sections: [
          {
            heading: "The five staves",
            body: "**Stave One: Marley's Ghost.** Scrooge rejects charity and his nephew's invitation; Marley's ghost warns him of three spirits. **Stave Two: The First of the Three Spirits.** The Ghost of Christmas Past shows his lonely childhood, his sister Fan and his lost love Belle. **Stave Three: The Second of the Three Spirits.** Christmas Present shows the Cratchits and Tiny Tim, then Ignorance and Want. **Stave Four: The Last of the Spirits.** Christmas Yet to Come shows Scrooge's lonely death and Tiny Tim's. **Stave Five: The End of It.** Scrooge wakes, reformed, and helps the Cratchits.",
          },
          {
            heading: "Why the structure works",
            body: "The novella moves from past to present to future, so Scrooge sees the **cause** of his coldness, the **effect** on others, and the **consequence** for himself. The ghost story is also a moral fable: Dickens wants readers to learn from the journey. Know the purpose of each stave, not just what happens in it.",
          },
        ],
        keyFormulas: [
          { name: "Stave One", statement: "Scrooge rejects charity and is warned by Marley." },
          { name: "Stave Two", statement: "Past: loneliness and lost love." },
          { name: "Stave Three", statement: "Present: the poor, joy and Ignorance and Want." },
          { name: "Stave Four", statement: "Future: Scrooge's death, unmourned." },
          { name: "Stave Five", statement: "Redemption and generosity." },
        ],
        workedExample: {
          problem: "Why does Dickens include the Ghost of Christmas Yet to Come in Stave Four?",
          solution: "Dickens includes the final spirit to show Scrooge the consequence of his selfishness if he does not change. Scrooge sees his own death mocked and robbed, and he sees the Cratchits grieving for Tiny Tim. The silent, cloaked spirit adds fear, which pushes Scrooge from understanding to action. This tells readers that society's future depends on the choices made now.",
        },
      },
      questions: [
        {
          id: "et8-u2-plot-staves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which stave does Scrooge see his own grave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stave Five" },
              { id: "b", text: "Stave Three" },
              { id: "c", text: "Stave Four" },
              { id: "d", text: "Stave Two" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Knowledge of plot", statement: "The Ghost of Christmas Yet to Come appears in Stave Four." }],
            steps: [{ reasoning: "The final spirit shows Scrooge his neglected grave in Stave Four.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Stave Four.",
            commonErrors: ["Confusing Stave Three (Present) with the Future spirit."],
          },
        },
        {
          id: "et8-u2-plot-staves-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what Scrooge learns from the Ghost of Christmas Past in Stave Two.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Selecting events", statement: "Choose events that support the point and explain their significance." }],
            steps: [
              { reasoning: "He sees his lonely childhood at school, so he understands how loneliness shaped him.", marks: 1, markCode: "AO1" },
              { reasoning: "He sees his sister Fan and Fezziwig's kindness, recalling warmth and generosity.", marks: 1, markCode: "AO1" },
              { reasoning: "He sees Belle leave him because he chose money over love, and learns that greed destroyed his happiness.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "He learns that his loneliness began in childhood, that kindness such as Fezziwig's can bring joy, and that his greed cost him Belle's love.",
            commonErrors: ["Describing the ghost's appearance instead of what Scrooge learns."],
          },
        },
        {
          id: "et8-u2-plot-staves-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Why is Stave Three, in which Scrooge sees the Cratchit family, important to the novella as a whole? Refer to events and to Dickens's purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Social message", statement: "Dickens wanted to awaken readers to the plight of the poor." },
              { kind: "technique", name: "Pathos", statement: "Tiny Tim is used to evoke sympathy." },
            ],
            steps: [
              { reasoning: "The Cratchits, though poor, are loving and grateful, which contrasts with Scrooge's cold wealth.", marks: 2, markCode: "AO1" },
              { reasoning: "Tiny Tim's frailty makes the reader and Scrooge feel pity and hear his own words, 'surplus population', turned back on him.", marks: 2, markCode: "AO2" },
              { reasoning: "Dickens's purpose is to challenge wealthy Victorian readers to take responsibility for the poor.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Stave Three shows Scrooge the Cratchits' warmth despite poverty. Tiny Tim's illness arouses pity, turning Scrooge's heartless words against him, and Dickens uses the family to urge Victorian readers to act with compassion.",
            levels: sixLevels(),
            commonErrors: ["Retelling the dinner without linking to purpose."],
          },
        },
        {
          id: "et8-u2-plot-staves-q4",
          difficulty: "challenge",
          totalMarks: 14,
          stem: "Answer these questions about the structure of A Christmas Carol.",
          parts: [
            { label: "a", prompt: "Name the three spirits in the order that Scrooge meets them.", marks: 2 },
            { label: "b", prompt: "Explain why Dickens begins the novella with the death of Marley.", marks: 4 },
            { label: "c", prompt: "How does Dickens use the structure of the five staves to show Scrooge's change? Refer to at least three staves.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Knowledge", statement: "Accurate recall of the order of events." },
              { kind: "technique", name: "Opening hook", statement: "The opening 'Marley was dead' is blunt and sets a supernatural scene." },
              { kind: "convention", name: "Moral fable", statement: "A journey structure leads the protagonist to a lesson." },
            ],
            steps: [
              { part: "a", reasoning: "Christmas Past, then Christmas Present.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Then Christmas Yet to Come.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Dickens opens with the blunt line 'Marley was dead' to establish that the ghostly events that follow have a firm and shocking basis.", evidence: "Marley was dead", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Marley's death sets up his later warning, as a model of what Scrooge may become if he does not change.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Stave One establishes Scrooge as cold and isolated, giving a starting point for change.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Staves Two and Three expose causes and effects of his behaviour, moving him from self-pity to empathy.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Stave Four brings fear, driving a decision; Stave Five completes his redemption through action.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The past-present-future pattern makes the change seem logical and inevitable, which supports Dickens's moral message.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "(a) Christmas Past, Christmas Present, Christmas Yet to Come. (b) The blunt opening makes the supernatural events credible and prepares Marley's warning. (c) The staves move Scrooge from isolation to understanding, fear and action, showing redemption as a logical journey.",
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Perceptive, well-chosen references to at least three staves; assured analysis of structure.", part: "c" },
              { level: "Level 3", marks: "5-6", descriptor: "Clear explanation with relevant references to staves.", part: "c" },
              { level: "Level 2", marks: "3-4", descriptor: "Some understanding; some relevant references.", part: "c" },
              { level: "Level 1", marks: "1-2", descriptor: "Simple retelling, limited references.", part: "c" },
            ],
            commonErrors: ["Retelling each stave without discussing change."],
          },
        },
      ],
    },
    {
      id: "et8-u2-scrooge-character",
      title: "Scrooge's characterisation",
      skill: "Analyse how Dickens presents Scrooge through description, imagery and word choice.",
      lesson: {
        sections: [
          {
            heading: "Describing a miser",
            body: "Dickens introduces Scrooge with a **list of harsh verbs** ('squeezing, wrenching, grasping, scraping, clutching') that builds a sense of greed. Similes such as 'Hard and sharp as flint' present him as cold and unfeeling, while 'solitary as an oyster' shows him closed and defensive. Always zoom in on a single word.",
          },
          {
            heading: "Tracing change",
            body: "Characterisation is also about development. At the start Scrooge is isolated; by the end he says 'I am as light as a feather, I am as happy as an angel'. Compare starting and ending states to show how Dickens makes redemption convincing.",
          },
        ],
        keyFormulas: [
          { name: "Asyndeton or list", statement: "A list of adjectives or verbs builds an overwhelming impression." },
          { name: "Simile", statement: "'Hard and sharp as flint' compares Scrooge to a cold, hard stone." },
          { name: "Contrast", statement: "Scrooge's isolation against family warmth." },
        ],
        workedExample: {
          problem: "How does Dickens present Scrooge in this extract?",
          solution: "Dickens presents Scrooge as greedy and harsh. The list of verbs 'squeezing, wrenching, grasping, scraping, clutching' piles up in a way that mirrors his relentless hunt for money, and the violent verb 'wrenching' implies he takes it by force. The simile 'hard and sharp as flint' suggests he is cold and can hurt others, while 'solitary as an oyster' shows he keeps himself closed to people.",
        },
      },
      questions: [
        {
          id: "et8-u2-scrooge-character-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SCROOGE,
          stem: "What does the simile 'solitary as an oyster' suggest about Scrooge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That he enjoys eating alone" },
              { id: "b", text: "That he is soft and gentle inside" },
              { id: "c", text: "That he is closed off and keeps people out" },
              { id: "d", text: "That he is rich in pearls" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "An oyster is shut tight; Scrooge keeps himself closed to others." }],
            steps: [{ reasoning: "An oyster hides inside a closed shell, so Scrooge is secretive and shut away.", evidence: "secret, and self-contained, and solitary as an oyster", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** He is closed off and keeps people out.",
            commonErrors: ["Choosing gentleness because an oyster is soft inside, missing the shell."],
          },
        },
        {
          id: "et8-u2-scrooge-character-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SCROOGE,
          stem: "Explain what the phrase 'Hard and sharp as flint, from which no steel had ever struck out generous fire' suggests about Scrooge.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Extended simile", statement: "Flint produces sparks when struck, but Scrooge never does." }],
            steps: [
              { reasoning: "'Hard and sharp' suggests he is unfeeling and capable of hurting others.", evidence: "Hard and sharp as flint", marks: 1, markCode: "AO2" },
              { reasoning: "Flint gives a spark when struck, but no one has ever drawn warmth from Scrooge.", evidence: "no steel had ever struck out generous fire", marks: 1, markCode: "AO2" },
              { reasoning: "'Generous' links the image to his refusal to give, so he is mean as well as cold.", evidence: "generous fire", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The simile shows Scrooge as hard and cold. Flint normally gives a spark when struck, but Scrooge has never given 'generous fire', so he is ungenerous and unkind.",
            commonErrors: ["Saying only 'he is hard'."],
          },
        },
        {
          id: "et8-u2-scrooge-character-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SCROOGE,
          stem: "How does Dickens use language to present Scrooge in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "List of verbs", statement: "Building a series of strong verbs." },
              { kind: "technique", name: "Simile", statement: "Comparisons to flint and an oyster." },
            ],
            steps: [
              { reasoning: "The list of verbs builds relentlessly, mirroring the endless pursuit of money; 'wrenching' suggests violence.", evidence: "squeezing, wrenching, grasping, scraping, clutching", marks: 2, markCode: "AO2" },
              { reasoning: "'Covetous, old sinner' links his greed to moral wrongdoing, a judgement from the narrator.", evidence: "covetous, old sinner", marks: 2, markCode: "AO2" },
              { reasoning: "'Hard and sharp as flint' presents coldness and danger.", evidence: "Hard and sharp as flint", marks: 2, markCode: "AO2" },
              { reasoning: "'Solitary as an oyster' shows isolation and defensiveness, hinting that his loneliness is chosen.", evidence: "solitary as an oyster", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "Dickens presents Scrooge as a greedy, hard and isolated man. The list of harsh verbs, led by 'wrenching', shows relentless greed; 'sinner' passes moral judgement; the flint simile shows coldness; and the oyster simile shows a self-chosen isolation.",
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Perceptive analysis of a range of methods with well-chosen quotations.", part: undefined },
              { level: "Level 3", marks: "5-6", descriptor: "Clear explanation of methods with relevant quotations.", part: undefined },
              { level: "Level 2", marks: "3-4", descriptor: "Some comment on methods; some quotations.", part: undefined },
              { level: "Level 1", marks: "1-2", descriptor: "Simple identification, limited quotation.", part: undefined },
            ],
            commonErrors: ["Listing techniques without effects.", "Only discussing one quotation."],
          },
        },
        {
          id: "et8-u2-scrooge-character-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: SCROOGE,
          stem: "Read the extract and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two adjectives from the extract that describe Scrooge's greed.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the exclamation 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!'", marks: 4 },
            { label: "c", prompt: "At the end of the novella Scrooge says 'I am as light as a feather, I am as happy as an angel'. How does Dickens contrast this with the way Scrooge is presented in the extract?", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select exact words." },
              { kind: "technique", name: "Narrative voice", statement: "The narrator's exclamations are conversational and judgemental." },
              { kind: "technique", name: "Contrast", statement: "Opening and closing states highlight change." },
            ],
            steps: [
              { part: "a", reasoning: "Any one of: covetous, tight-fisted, grasping.", evidence: "covetous", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any other of these.", evidence: "tight-fisted", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The exclamation mark and 'Oh!' give a lively, gossipy narrator's voice that draws the reader in.", evidence: "Oh! But he was", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Tight-fisted hand at the grindstone' suggests hard, grudging labour and meanness, with the placing of 'Scrooge!' at the end delivering the name like a verdict.", evidence: "tight-fisted hand at the grindstone, Scrooge!", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "In the extract Scrooge is hard like flint and closed like an oyster, so he is cold and isolated.", evidence: "Hard and sharp as flint", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final similes 'light as a feather' and 'happy as an angel' present him as free and joyful, so the change is total.", evidence: "as light as a feather", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The same simile structure ('as ... as') is used in both, which highlights the reversal from hard and heavy to light and angelic.", evidence: "as happy as an angel", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Dickens shows redemption is possible for all, a hopeful message for Victorian readers.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "(a) Covetous; tight-fisted (or grasping). (b) The exclamatory, gossipy narration draws the reader in and delivers Scrooge's name like a judgement. (c) The hard, cold similes of the extract are reversed by the light, angelic similes at the end, showing a complete transformation and the possibility of redemption.",
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Perceptive, well-chosen contrast of two states with analysis of language.", part: "c" },
              { level: "Level 3", marks: "5-6", descriptor: "Clear contrast with relevant references.", part: "c" },
              { level: "Level 2", marks: "3-4", descriptor: "Some contrast; some relevant references.", part: "c" },
              { level: "Level 1", marks: "1-2", descriptor: "Simple statement of difference.", part: "c" },
            ],
            commonErrors: ["Discussing only the ending.", "Not quoting from the extract."],
          },
        },
      ],
    },
  ],
};
