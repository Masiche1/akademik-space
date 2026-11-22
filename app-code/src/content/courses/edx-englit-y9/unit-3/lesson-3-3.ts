import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12 | 15, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : top === 12 ? ["10-12", "8-9", "5-7", "3-4", "1-2"] : ["13-15", "10-12", "7-9", "4-6", "1-3"];
  const text = top === 6
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating ${focus}; precise, well-chosen references and assured use of terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const BRUTUS_SOLIL: TextExtract = {
  title: "Brutus in his orchard",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 2 Scene 1",
  lineNumbers: true,
  text: "It must be by his death: and for my part,\nI know no personal cause to spurn at him,\nBut for the general. He would be crown'd:\nHow that might change his nature, there's the question.\nIt is the bright day that brings forth the adder;\nAnd that craves wary walking. Crown him?\u2014that;\nAnd then, I grant, we put a sting in him,\nThat at his will he may do danger with.",
};

const ANTONY_MURDER: TextExtract = {
  title: "Antony over Caesar's body",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 3 Scene 1",
  lineNumbers: true,
  text: "O pardon me, thou bleeding piece of earth,\nThat I am meek and gentle with these butchers!\nThou art the ruins of the noblest man\nThat ever lived in the tide of times.\nWoe to the hand that shed this costly blood!\nOver thy wounds now do I prophesy,\nWhich, like dumb mouths, do ope their ruby lips,\nTo beg the voice and utterance of my tongue.",
};

export const lesson33: Lesson = {
  id: "et9-u3-lesson-3-3",
  code: "3-3",
  title: "Extract Analysis and the Whole-play Essay",
  goal: "I CAN analyse a Shakespeare extract closely and write a whole-play essay with a clear argument.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Soliloquy", definition: "A speech in which a character speaks their thoughts aloud, alone on stage." },
    { term: "Blank verse", definition: "Unrhymed lines of iambic pentameter, the usual form of Shakespeare's noble characters' speech." },
    { term: "Adder", definition: "A poisonous snake, used by Brutus as a metaphor for the danger of crowning Caesar." },
    { term: "Hyperbole", definition: "Deliberate exaggeration for effect." },
    { term: "Imagery", definition: "Descriptive language that creates pictures in the reader's mind." },
    { term: "Argument", definition: "A line of reasoning in an essay supported by evidence." },
    { term: "Counter-argument", definition: "An alternative view that you consider in an essay to show balance." },
  ],
  concepts: [
    {
      id: "et9-u3-jc-extract-analysis",
      title: "Extract analysis",
      skill: "Analyse language, structure and dramatic effect in a Shakespeare extract.",
      lesson: {
        sections: [
          {
            heading: "A method for Shakespeare extracts",
            body: "Read the question first, then the extract slowly. Underline three or four words or images. For each, ask: **what does it suggest, and why did Shakespeare choose it?** Comment on **imagery**, **verbs**, **verse form** (does the rhythm change?) and **stage action** (a soliloquy is an unguarded look into a mind). Track the **shifts** in thought: Brutus moves from reluctance to decision.",
          },
          {
            heading: "Brutus's reasoning",
            body: "In Brutus's soliloquy the audience hears the real reasoning behind the plot. He admits Caesar has done nothing wrong ('I know no personal cause to spurn at him') but fears what power might do. Notice the **conditional** language ('would be crown'd', 'might change') and the **adder metaphor**: Brutus kills a potential danger, not a real one. This makes the murder a **moral gamble** and shows his flawed reasoning.",
          },
        ],
        keyFormulas: [
          { name: "Soliloquy", statement: "A character's private thoughts spoken aloud, revealing true motives." },
          { name: "Metaphor", statement: "A direct comparison, such as Caesar as an adder that will sting when crowned." },
          { name: "Conditional language", statement: "Words like 'would' and 'might' show that a threat is possible, not certain." },
        ],
        workedExample: {
          problem: "How does Shakespeare present Brutus's reasoning in lines 1-4?",
          solution: "Shakespeare presents Brutus as a reluctant idealist whose reasoning is based on fear of the future, not past wrongs. The blunt opening, 'It must be by his death', is stark and final, but he immediately admits 'I know no personal cause to spurn at him', which shows he has no grudge. His justification rests on a conditional: Caesar 'would be crown'd', and Brutus can only wonder how that 'might change his nature'. The tentative language reveals that his case rests on speculation, which makes the plan both noble and dangerously weak.",
        },
      },
      questions: [
        {
          id: "et9-u3-jc-extract-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BRUTUS_SOLIL,
          stem: "What does Brutus mean by 'I know no personal cause to spurn at him' (line 2)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He wants to kick Caesar" },
              { id: "b", text: "He hates Caesar for personal reasons" },
              { id: "c", text: "He has no personal reason to hate Caesar" },
              { id: "d", text: "He does not know Caesar" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Spurn", statement: "To reject with contempt or to kick at." }],
            steps: [{ reasoning: "Brutus admits that his reason is political, not personal.", evidence: "no personal cause to spurn at him", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** He has no personal reason to hate Caesar.",
            commonErrors: ["Choosing (c) by reading 'spurn' literally."],
          },
        },
        {
          id: "et9-u3-jc-extract-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: BRUTUS_SOLIL,
          stem: "Explain what the metaphor of the adder (lines 5-8) suggests about Brutus's fears.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "A direct comparison that creates a picture." }],
            steps: [
              { reasoning: "The adder is dangerous but harmless when not roused; Caesar is safe now but could become a threat.", evidence: "the bright day that brings forth the adder", marks: 1, markCode: "AO2" },
              { reasoning: "Crowning Caesar is like giving the snake a sting.", evidence: "we put a sting in him", marks: 1, markCode: "AO2" },
              { reasoning: "Brutus fears Caesar will misuse power 'at his will'.", evidence: "at his will he may do danger", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Caesar is like a snake: harmless now, but a crown would give him a sting, so Brutus fears future tyranny.",
            commonErrors: ["Saying Caesar is already cruel."],
          },
        },
        {
          id: "et9-u3-jc-extract-analysis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ANTONY_MURDER,
          stem: "How does Shakespeare use language to present Antony's feelings about Caesar's death in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery", statement: "Vivid images of wounds and mouths convey grief and anger." },
              { kind: "technique", name: "Apostrophe", statement: "Addressing a dead or absent person directly." },
            ],
            steps: [
              { reasoning: "Addressing the body directly ('O pardon me') shows intimate grief.", evidence: "O pardon me, thou bleeding piece of earth", marks: 1, markCode: "AO2" },
              { reasoning: "'Butchers' labels the conspirators as brutal, not noble.", evidence: "these butchers", marks: 1, markCode: "AO2" },
              { reasoning: "'Ruins of the noblest man' praises Caesar as a fallen monument.", evidence: "the ruins of the noblest man", marks: 1, markCode: "AO2" },
              { reasoning: "The curse 'Woe to the hand' predicts vengeance.", evidence: "Woe to the hand that shed this costly blood", marks: 1, markCode: "AO2" },
              { reasoning: "Personified wounds as 'dumb mouths' with 'ruby lips' make the body speak.", evidence: "dumb mouths, do ope their ruby lips", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast of beauty ('ruby') and horror shows grief mixed with rage and plans.", marks: 1, markCode: "AO1" },
            ],
            levels: bands("analysis of Antony's feelings", 6),
            finalAnswer: "Antony's apostrophe to Caesar's body shows deep grief, while 'butchers' and a curse on the killers show anger. His image of wounds as 'dumb mouths' with 'ruby lips' personifies the body, hinting that he will speak for Caesar and avenge him.",
            commonErrors: ["Missing his private anger compared with his public calm."],
          },
        },
        {
          id: "et9-u3-jc-extract-analysis-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: ANTONY_MURDER,
          stem: "Read Antony's speech from Act 3 Scene 1 and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two ways Antony describes the conspirators or their deed.", marks: 2 },
            { label: "b", prompt: "Explain how Shakespeare uses the image of Caesar's wounds in lines 7-8.", marks: 6 },
            { label: "c", prompt: "How does Shakespeare present Antony as a dangerous opponent to the conspirators in this extract? Refer to language and dramatic effect.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Wounds speak as mouths." },
              { kind: "convention", name: "Aside and private speech", statement: "Antony speaks this while the conspirators are away, so the audience hears his true feelings." },
            ],
            steps: [
              { part: "a", reasoning: "They are 'butchers'.", evidence: "these butchers", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Their hand shed 'costly blood'.", evidence: "Woe to the hand that shed this costly blood", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Wounds as 'dumb mouths' are silent victims.", evidence: "dumb mouths", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Ruby lips' gives beauty to violence.", evidence: "ruby lips", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "They 'beg the voice' of his tongue, so Antony will speak for Caesar.", evidence: "beg the voice and utterance of my tongue", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Personification makes the body seem to demand justice.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It foreshadows the funeral speech in which Antony points to the wounds.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The image of lips and speech links to rhetoric and persuasion.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Antony publicly pretends meekness but privately curses the killers.", evidence: "I am meek and gentle with these butchers", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "His prophecy of vengeance shows he will act.", evidence: "Over thy wounds now do I prophesy", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Dramatic effect: the audience sees the real Antony, increasing tension.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: Antony's loyalty and rhetorical skill threaten the conspirators.", marks: 3, markCode: "AO4" },
            ],
            levels: [...bands("analysis of Antony as a threat", 12, "c"), ...bands("analysis of the wounds image", 6, "b")],
            finalAnswer: "(a) They are 'butchers'; their hand shed 'costly blood'. (b) The wounds become 'dumb mouths' with 'ruby lips' that beg Antony to speak, so Caesar's body demands vengeance and foreshadows the funeral speech. (c) Antony hides his anger from the conspirators but curses them privately and prophesies vengeance, which makes him a dangerous, skilled opponent.",
            commonErrors: ["Retelling.", "No dramatic effect."],
          },
        },
      ],
    },
    {
      id: "et9-u3-jc-essay",
      title: "The whole-play essay",
      skill: "Plan and write a structured essay about the whole play with a clear argument.",
      lesson: {
        sections: [
          {
            heading: "From extract to whole play",
            body: "A whole-play question often asks about a **theme** or **character**. Begin with a **thesis** that answers the question. Then choose **three moments** from the beginning, middle and end of the play, and show how the idea **develops**. Link each moment to the thesis. Use a **counter-argument** to show balance, and refer to **context** briefly where it adds insight.",
          },
          {
            heading: "Writing with control",
            body: "Use **topic sentences** that answer the question. Embed short quotations. Use a formal, precise style: 'Shakespeare presents...', 'This suggests...', 'Conversely...'. Finish with a **conclusion** that gives a considered judgement. Do not just retell the plot: every sentence should make a point about **how** Shakespeare conveys an idea.",
          },
        ],
        keyFormulas: [
          { name: "Thesis", statement: "A clear argument that answers the question in the introduction." },
          { name: "Development", statement: "Showing how an idea changes across the play." },
          { name: "Counter-argument", statement: "An alternative view that shows balance and depth." },
        ],
        workedExample: {
          problem: "'Brutus is the true tragic hero of Julius Caesar.' How far do you agree?",
          solution: "I largely agree that Brutus is the tragic hero, since he is noble but undone by a fatal flaw. In Act 2 his soliloquy shows his idealism: he has 'no personal cause' but kills for Rome. His flaw is misplaced trust, seen when he allows Antony to speak at the funeral, a decision that destroys the conspirators. By Act 5 he dies honourably, and Antony calls him 'the noblest Roman of them all', confirming his tragic stature. However, Caesar's death gives the play its title and some argue he is the central figure; nevertheless, it is Brutus's internal conflict and downfall that give the play its tragic shape.",
        },
      },
      questions: [
        {
          id: "et9-u3-jc-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best opening to an essay response about Julius Caesar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A biography of Shakespeare" },
              { id: "b", text: "A long summary of the plot" },
              { id: "c", text: "A clear thesis that answers the question" },
              { id: "d", text: "A list of every character" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Thesis", statement: "A direct answer to the question sets the essay's argument." }],
            steps: [{ reasoning: "A thesis gives focus and shows you have understood the question.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** A clear thesis that answers the question.",
            commonErrors: ["Beginning with plot summary."],
          },
        },
        {
          id: "et9-u3-jc-essay-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this weak sentence so that it is analytical and uses a quotation: 'Brutus is honourable in the play.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Embedding quotations", statement: "Weave short quotations into analytical sentences." }],
            steps: [
              { reasoning: "A clear point about Brutus's honour or its limits.", marks: 1, markCode: "AO1" },
              { reasoning: "A short quotation, such as 'no personal cause to spurn at him'.", evidence: "no personal cause to spurn at him", marks: 1, markCode: "AO1" },
              { reasoning: "Analysis of what the quotation suggests about his motives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Model: Shakespeare presents Brutus as honourable by showing that he has 'no personal cause to spurn at' Caesar, which suggests he acts from principle rather than envy, although his reasoning rests on fear of what Caesar might become.",
            commonErrors: ["Quote with no explanation."],
          },
        },
        {
          id: "et9-u3-jc-essay-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a plan for the question 'How does Shakespeare present the theme of loyalty in Julius Caesar?' Include a thesis, three moments from the play with a short quotation or reference for each, and a counter-argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A thesis, three developed moments and a counter-argument." },
              { kind: "skill", name: "Whole-play coverage", statement: "Use moments from the beginning, middle and end." },
            ],
            steps: [
              { reasoning: "A clear thesis: loyalty is tested and divided between friends and state.", marks: 1, markCode: "AO1" },
              { reasoning: "Early moment: Brutus's divided loyalty, 'not that I loved Caesar less, but that I loved Rome more'.", marks: 1, markCode: "AO1" },
              { reasoning: "Middle moment: Antony's loyalty to Caesar in the funeral speech.", marks: 1, markCode: "AO1" },
              { reasoning: "Late moment: loyalty and the quarrel of Brutus and Cassius, or Brutus's death.", marks: 1, markCode: "AO1" },
              { reasoning: "A counter-argument, for example loyalty as self-interest.", marks: 1, markCode: "AO2" },
              { reasoning: "A link to context (honour, divine right, Elizabethan order).", marks: 1, markCode: "AO4" },
            ],
            levels: bands("planning", 6),
            finalAnswer: "Thesis: loyalty in the play is always divided. Moments: Brutus's loyalty to Rome over friendship; Antony's loyalty to Caesar in his funeral speech; the quarrel and deaths of Brutus and Cassius. Counter-argument: some loyalty is self-interested. Context: Elizabethan values of honour and order.",
            commonErrors: ["No thesis.", "All moments from one scene."],
          },
        },
        {
          id: "et9-u3-jc-essay-q4",
          difficulty: "challenge",
          totalMarks: 15,
          stem: "'In Julius Caesar, Shakespeare shows that those who seek power are always destroyed by it.' How far do you agree? Write an essay and refer to the whole play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument", statement: "A sustained argument supported by evidence from across the play." },
              { kind: "context", name: "Elizabethan politics", statement: "Audiences feared rebellion and tyranny." },
              { kind: "technique", name: "Dramatic irony", statement: "The audience knows what characters do not, increasing tragedy." },
            ],
            steps: [
              { reasoning: "A clear thesis responding to 'how far': power destroys Caesar, Brutus and Cassius, but Antony and Octavius survive.", marks: 3, markCode: "AO1" },
              { reasoning: "Caesar: ambition and hubris, ignoring the soothsayer and his wife.", evidence: "He is a dreamer; let us leave him", marks: 3, markCode: "AO2" },
              { reasoning: "Brutus and Cassius: misjudgement and civil war leading to suicide.", marks: 3, markCode: "AO1" },
              { reasoning: "A counter-argument: Antony rises to power, so power does not always destroy.", marks: 3, markCode: "AO2" },
              { reasoning: "Context and conclusion: Elizabethan fears of tyranny and rebellion.", marks: 3, markCode: "AO4" },
            ],
            levels: [
              { level: "Level 5", marks: "13-15", descriptor: "Perceptive, discriminating argument; assured analysis of methods; precise references from across the play; thoughtful context." },
              { level: "Level 4", marks: "10-12", descriptor: "Thorough argument; well-chosen references; developed analysis of Shakespeare's methods." },
              { level: "Level 3", marks: "7-9", descriptor: "Clear, relevant argument; appropriate references; some analysis." },
              { level: "Level 2", marks: "4-6", descriptor: "Some understanding; some relevant references; mostly narrative." },
              { level: "Level 1", marks: "1-3", descriptor: "Simple, limited comments; few references." },
            ],
            finalAnswer: "A top response argues that power destroys those who seize it unjustly or blindly (Caesar's hubris, Brutus's idealism, Cassius's envy) but qualifies the claim: Antony and Octavius prosper by using power cunningly, so the play suggests that those who misjudge power are destroyed. It supports this with precise references and Elizabethan context.",
            commonErrors: ["Plot retelling.", "One-sided answer.", "No quotations."],
          },
        },
      ],
    },
  ],
};
