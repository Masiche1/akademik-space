import type { Lesson, MarkLevel } from "../../../types.ts";

function lv(top: 6 | 8, part?: string): MarkLevel[] {
  const six = top === 6;
  const ranges = six ? ["5-6", "3-4", "1-2"] : ["7-8", "5-6", "3-4", "1-2"];
  const text = six
    ? ["Thorough, well-chosen references; developed comment.", "Some understanding; some relevant references.", "Simple, limited comment; few references."]
    : ["Perceptive, assured; well-chosen, integrated references.", "Clear, relevant explanation; relevant references.", "Some understanding; some relevant references.", "Simple, limited comment; few references."];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", part }));
}

const LOVE = {
  title: "Romeo and Juliet, Act 1 Scene 5 (the sonnet)",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "ROMEO\nIf I profane with my unworthiest hand\nThis holy shrine, the gentle fine is this:\nMy lips, two blushing pilgrims, ready stand\nTo smooth that rough touch with a tender kiss.\n\nJULIET\nGood pilgrim, you do wrong your hand too much,\nWhich mannerly devotion shows in this;\nFor saints have hands that pilgrims' hands do touch,\nAnd palm to palm is holy palmers' kiss.",
};

const JULIET = {
  title: "Romeo and Juliet, Act 3 Scene 2 (Juliet)",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "Come, gentle night, come, loving, black-brow'd night,\nGive me my Romeo; and, when I shall die,\nTake him and cut him out in little stars,\nAnd he will make the face of heaven so fine\nThat all the world will be in love with night.",
};

export const lesson33: Lesson = {
  id: "et8-u3-lesson-3-3",
  code: "3-3",
  title: "Extract Analysis and Elizabethan Context",
  goal: "I CAN analyse a Shakespeare extract in detail and use knowledge of Elizabethan society and the theatre to explain the play's effects.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Shared sonnet", definition: "A sonnet divided between two speakers, as when Romeo and Juliet first meet." },
    { term: "Religious imagery", definition: "Language about saints, pilgrims and shrines, used here to present love as sacred." },
    { term: "Patriarchy", definition: "A society in which men hold the power; fathers controlled their daughters' marriages in Shakespeare's time." },
    { term: "Elizabethan", definition: "Relating to the reign of Elizabeth I (1558-1603)." },
    { term: "Groundlings", definition: "Poorer theatregoers who stood in the pit of the Globe Theatre." },
    { term: "Apostrophe", definition: "Addressing someone or something absent or non-human, such as night." },
  ],
  concepts: [
    {
      id: "et8-u3-extract-analysis",
      title: "Extract analysis",
      skill: "Analyse the language, form and structure of a Shakespeare extract with a clear line of argument.",
      lesson: {
        sections: [
          {
            heading: "Method for extract questions",
            body: "Read the question and underline the focus. Skim the extract for the big picture, then choose three or four quotations that best answer the question. For each, write a **point**, a **quotation** and an **explanation** that zooms in on key words, then link to the whole play. Include comment on **form** (sonnet, verse, speech) as well as language.",
          },
          {
            heading: "Reading the sonnet",
            body: "When Romeo and Juliet meet, they speak a shared sonnet filled with **religious imagery**: she is a 'holy shrine', he a 'pilgrim'. This makes love sacred and the kiss a prayer. The sonnet form shows harmony: their lines rhyme together, hinting at instant connection despite the feud.",
          },
        ],
        keyFormulas: [
          { name: "Zoom in", statement: "Analyse one or two key words." },
          { name: "Form", statement: "A shared sonnet shows harmony between lovers." },
          { name: "Religious imagery", statement: "Presents love as sacred and pure." },
          { name: "Link", statement: "Connect the extract to the whole play." },
        ],
        workedExample: {
          problem: "How does Shakespeare present the lovers' first meeting?",
          solution: "Shakespeare presents love as sacred. Romeo calls Juliet's hand a 'holy shrine' and himself a 'pilgrim', a metaphor which turns a kiss into an act of devotion. The metaphor shows reverence, but also a hint of danger because pilgrims travel dangerously. The lovers share the rhymes of a sonnet, so the form itself shows their instant harmony in contrast to the feud's discord.",
        },
      },
      questions: [
        {
          id: "et8-u3-extract-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LOVE,
          stem: "What does Romeo compare Juliet's hand to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A holy shrine" },
              { id: "b", text: "A rose" },
              { id: "c", text: "A pilgrim" },
              { id: "d", text: "A sword" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "Juliet's hand is a shrine; Romeo is the pilgrim." }],
            steps: [{ reasoning: "He calls her hand 'This holy shrine', and himself the pilgrim.", evidence: "This holy shrine", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** A holy shrine.",
            commonErrors: ["Choosing 'pilgrim', which describes Romeo's lips."],
          },
        },
        {
          id: "et8-u3-extract-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LOVE,
          stem: "Explain what Romeo's metaphor 'My lips, two blushing pilgrims' suggests about his feelings.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor and personification", statement: "Lips are pilgrims who journey and worship." }],
            steps: [
              { reasoning: "'Pilgrims' suggests devotion and reverence for Juliet.", evidence: "two blushing pilgrims", marks: 1, markCode: "AO2" },
              { reasoning: "'Blushing' shows shyness and nervous excitement.", evidence: "blushing", marks: 1, markCode: "AO2" },
              { reasoning: "The kiss is presented as sacred, not just physical.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "He sees his lips as pilgrims devoted to a holy shrine, and 'blushing' shows shy excitement; love is sacred.",
            commonErrors: ["Missing the religious meaning."],
          },
        },
        {
          id: "et8-u3-extract-analysis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LOVE,
          stem: "How does Shakespeare present the first meeting of Romeo and Juliet in this extract? Consider language and form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Religious imagery", statement: "Shrine, pilgrim, saints, palmers." },
              { kind: "convention", name: "Shared sonnet", statement: "Fourteen lines with rhyme shared between two speakers." },
            ],
            steps: [
              { reasoning: "Romeo's religious metaphors present Juliet as holy and himself as devoted.", evidence: "holy shrine", marks: 2, markCode: "AO2" },
              { reasoning: "Juliet answers in the same imagery, 'Good pilgrim', playing along wittily, which shows intelligence and equal feeling.", evidence: "Good pilgrim", marks: 2, markCode: "AO2" },
              { reasoning: "The shared sonnet form with matched rhymes suggests instant harmony.", evidence: "palm to palm is holy palmers' kiss", marks: 2, markCode: "AO2" },
              { reasoning: "The sacred language contrasts with the feud and foreshadows the lovers' sacrifice.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Shakespeare presents the meeting as sacred and harmonious: religious imagery turns a kiss into prayer, Juliet matches Romeo's wit, and the shared sonnet shows instant understanding in the middle of a feud.",
            levels: lv(8),
            commonErrors: ["Ignoring form.", "No quotations."],
          },
        },
        {
          id: "et8-u3-extract-analysis-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: JULIET,
          stem: "Read Juliet's speech and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things Juliet asks night to do.", marks: 2 },
            { label: "b", prompt: "Explain what 'cut him out in little stars' suggests about Juliet's love.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language in this speech to present Juliet's feelings, and how does it link to the rest of the play?", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Use exact words." },
              { kind: "technique", name: "Apostrophe and imperative", statement: "Juliet addresses night with commands." },
              { kind: "technique", name: "Foreshadowing", statement: "'When I shall die' hints at the ending." },
            ],
            steps: [
              { part: "a", reasoning: "Give her Romeo.", evidence: "Give me my Romeo", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Take Romeo and cut him into stars when she dies.", evidence: "Take him and cut him out in little stars", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She wants Romeo to be eternal and beautiful, a star to be admired by the world.", evidence: "he will make the face of heaven so fine", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The violent verb 'cut' mixes love with a hint of destruction, foreshadowing his death.", evidence: "cut him out", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The imperatives 'Come', 'Give', 'Take' show her passionate longing and impatience for her wedding night.", evidence: "Come, gentle night", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The apostrophe to night treats it as a friend, giving privacy to the secret lovers.", evidence: "loving, black-brow'd night", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "'When I shall die' foreshadows the tragedy and links love to death.", evidence: "when I shall die", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The star imagery links to the Prologue's 'star-cross'd lovers' and the theme of fate.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Give her Romeo; take him and cut him into stars. (b) She imagines Romeo as eternal and beautiful, but 'cut' hints at death. (c) Imperatives and the apostrophe to night show passionate longing, while 'when I shall die' and the stars foreshadow the tragedy.",
            levels: lv(8, "c"),
            commonErrors: ["Ignoring foreshadowing."],
          },
        },
      ],
    },
    {
      id: "et8-u3-elizabethan-context",
      title: "Elizabethan context and audience",
      skill: "Use knowledge of Elizabethan society, family and theatre to explain the play and its first audience.",
      lesson: {
        sections: [
          {
            heading: "Society and beliefs",
            body: "The play was written around 1595, in Queen Elizabeth I's reign. Society was **patriarchal**: fathers expected obedience from daughters and chose their marriages. Girls could marry young. Many believed in **fate and the stars**, and the Elizabethan idea of **honour** meant families defended their name by violence. These beliefs make Juliet's defiance and the feud more dramatic.",
          },
          {
            heading: "The theatre and audience",
            body: "Plays were performed at the **Globe Theatre** in daylight, with no scenery, so Shakespeare used words to create settings (night, moonlight). The audience included **groundlings** who stood in the pit and wealthier people in galleries. Soliloquies and asides made the audience feel close to the characters. Boys played the female roles.",
          },
        ],
        keyFormulas: [
          { name: "Patriarchy", statement: "Fathers controlled marriage; Juliet's refusal to obey is shocking." },
          { name: "Fate", statement: "Elizabethans believed the stars influenced life." },
          { name: "Globe Theatre", statement: "Open air, no scenery; language creates the setting." },
          { name: "Honour", statement: "Families defended their name with violence." },
        ],
        workedExample: {
          problem: "How does context help explain Capulet's anger when Juliet refuses to marry Paris?",
          solution: "In Elizabethan society, a father had absolute authority over his daughter's marriage, and disobedience was shameful. Capulet's furious language, which includes calling her 'green-sickness carrion', shows his fear of losing control and family honour. Juliet's refusal therefore challenges both patriarchal power and the social order, increasing the drama.",
        },
      },
      questions: [
        {
          id: "et8-u3-elizabethan-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Elizabethan society, who normally decided whom a young woman would marry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The local priest" },
              { id: "b", text: "Her father" },
              { id: "c", text: "The Queen" },
              { id: "d", text: "The young woman herself" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Patriarchy", statement: "Fathers controlled their daughters' marriages." }],
            steps: [{ reasoning: "Wealthy families arranged marriages to gain status, and fathers decided.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** Her father.",
            commonErrors: ["Applying modern ideas of free choice."],
          },
        },
        {
          id: "et8-u3-elizabethan-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the lack of scenery in the Globe Theatre affected the way Shakespeare wrote.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Globe Theatre", statement: "Open-air daytime performance with minimal scenery." }],
            steps: [
              { reasoning: "There was no scenery or artificial lighting.", marks: 1, markCode: "AO4" },
              { reasoning: "Shakespeare used words to create settings, such as night or moonlight.", marks: 1, markCode: "AO4" },
              { reasoning: "Audiences had to imagine the scene through rich imagery, such as 'gentle night' in Juliet's speech.", evidence: "Come, gentle night", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "With no scenery, Shakespeare used descriptive language and imagery to make the audience imagine settings, such as night in Juliet's speech.",
            commonErrors: ["Only listing facts about the theatre."],
          },
        },
        {
          id: "et8-u3-elizabethan-context-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "How might an Elizabethan audience have responded to Juliet's decision to marry Romeo in secret? Refer to context and the play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Obedience", statement: "Daughters were expected to obey." },
              { kind: "context", name: "Sympathy and shock", statement: "Audiences may have felt both." },
            ],
            steps: [
              { reasoning: "A secret marriage would shock audiences used to obedience to fathers.", marks: 2, markCode: "AO4" },
              { reasoning: "Yet Juliet's love and the family feud encourage sympathy, shown by her determined language.", marks: 2, markCode: "AO1" },
              { reasoning: "Shakespeare keeps the audience divided, which makes the tragedy richer; the consequences might warn about disobedience, or about parental harshness.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "An Elizabethan audience may have been shocked by Juliet's disobedience, but sympathetic given the feud, and Shakespeare makes them consider whether the tragedy was caused by defiance or by the parents' harsh authority.",
            levels: lv(6),
            commonErrors: ["Using modern attitudes only."],
          },
        },
        {
          id: "et8-u3-elizabethan-context-q4",
          difficulty: "challenge",
          totalMarks: 14,
          stem: "Answer these questions about context in Romeo and Juliet.",
          parts: [
            { label: "a", prompt: "State two facts about the Globe Theatre or its audience.", marks: 2 },
            { label: "b", prompt: "Explain how the Elizabethan belief in fate is reflected in the play.", marks: 4 },
            { label: "c", prompt: "'Context helps us understand Shakespeare's play.' How far do you agree? Refer to at least two aspects of Elizabethan society.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Globe Theatre", statement: "Open air, groundlings, no scenery." },
              { kind: "context", name: "Fate", statement: "Belief in stars' influence." },
              { kind: "skill", name: "Evaluation", statement: "Agree, qualify, conclude." },
            ],
            steps: [
              { part: "a", reasoning: "Plays were performed in daylight in an open-air theatre.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Groundlings stood in the pit and boys played women.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "The Prologue describes the lovers as 'star-cross'd', reflecting astrology.", evidence: "star-cross'd", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Romeo's 'I defy you, stars' shows belief in fate as an external power.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Agree: patriarchal marriage customs explain Capulet's anger and Juliet's risk.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Honour culture explains the feud and the fights between Tybalt and Mercutio.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Qualification: the emotional experience of love and loss is universal, so the play works without context.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "A reasoned conclusion that context deepens understanding but the play remains relevant.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "(a) Open-air daytime theatre; groundlings and boy actors. (b) 'Star-cross'd' and Romeo's defiance reflect astrology. (c) Context explains the father's authority and the honour code, but love and loss are universal, so context deepens but does not control understanding.",
            levels: lv(8, "c"),
            commonErrors: ["Fact-dropping without linking to the text."],
          },
        },
      ],
    },
  ],
};
