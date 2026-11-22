import type { Lesson, MarkLevel } from "../../../types.ts";

function lv(top: 6 | 8 | 10, part?: string): MarkLevel[] {
  const sets: Record<number, string[]> = {
    6: ["5-6", "3-4", "1-2"],
    8: ["7-8", "5-6", "3-4", "1-2"],
    10: ["9-10", "7-8", "5-6", "3-4", "1-2"],
  };
  const text = [
    "Perceptive, assured, discriminating; well-chosen, integrated references.",
    "Thorough understanding; well-chosen references; developed analysis.",
    "Clear, relevant understanding; relevant references.",
    "Some understanding; some relevant references.",
    "Simple, limited comment; few references.",
  ];
  const ranges = sets[top] ?? [];
  const offset = text.length - ranges.length;
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i + offset] ?? "", part }));
}

const MARLEY = {
  title: "A Christmas Carol, Stave One (Marley's ghost)",
  author: "Charles Dickens",
  source: "A Christmas Carol (1843)",
  text: "\"You are fettered,\" said Scrooge, trembling. \"Tell me why?\"\n\n\"I wear the chain I forged in life,\" replied the Ghost. \"I made it link by link, and yard by yard; I girded it on of my own free will, and of my own free will I wore it. Is its pattern strange to you?\"\n\nScrooge trembled more and more.",
};

const FIVE = {
  title: "A Christmas Carol, Stave Five (the awakening)",
  author: "Charles Dickens",
  source: "A Christmas Carol (1843)",
  text: "\"I don't know what day of the month it is,\" said Scrooge. \"I don't know how long I've been among the Spirits. I don't know anything. I'm quite a baby. Never mind. I don't care. I'd rather be a baby. Hallo! Whoop! Hallo here!\"",
};

export const lesson23: Lesson = {
  id: "et8-u2-lesson-2-3",
  code: "2-3",
  title: "Extract Analysis and Whole-text Writing",
  goal: "I CAN analyse an extract closely and write about the whole text with a clear line of argument.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Extract", definition: "A short passage taken from a longer text." },
    { term: "Line of argument", definition: "The central idea that links every paragraph of an essay." },
    { term: "Imagery of imprisonment", definition: "Language about chains or confinement, used here to present Marley's and Scrooge's guilt." },
    { term: "Moral", definition: "The lesson a story teaches." },
    { term: "Zoom in / zoom out", definition: "Analysing a single word (zoom in) and then linking to the wider text (zoom out)." },
    { term: "Conclusion", definition: "The final paragraph that sums up the argument." },
  ],
  concepts: [
    {
      id: "et8-u2-extract-analysis",
      title: "Extract analysis",
      skill: "Analyse language and structure in a short extract and link it to the whole novella.",
      lesson: {
        sections: [
          {
            heading: "Read, annotate, zoom in",
            body: "Read the question first, then the extract, highlighting words that answer it. Start with the **big picture** (what is happening and how the writer feels), then **zoom in** on key words and devices, then **zoom out** by linking to a theme elsewhere in the text. Aim for three to four developed points.",
          },
          {
            heading: "Methods to look for",
            body: "Look for **imagery** (the chain), **repetition** ('link by link, and yard by yard'; 'of my own free will'), **sentence structure** (long, rolling sentences vs short ones), and **verbs** that show action or emotion. Always consider how the reader is meant to feel and what moral point Dickens is making.",
          },
        ],
        keyFormulas: [
          { name: "Big picture", statement: "Summarise what is happening and the main idea." },
          { name: "Zoom in", statement: "Analyse a single word or device." },
          { name: "Zoom out", statement: "Link the idea to other parts of the text." },
        ],
        workedExample: {
          problem: "How does Dickens present Marley's regret in this extract?",
          solution: "Dickens presents Marley's regret through the image of a chain: 'the chain I forged in life'. The verb 'forged' implies deliberate making, so Marley's suffering is self-inflicted. The repetition of 'of my own free will' emphasises that he alone is to blame, and the list 'link by link, and yard by yard' shows the chain growing from small selfish acts. Scrooge's trembling suggests he realises he is following the same path.",
        },
      },
      questions: [
        {
          id: "et8-u2-extract-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MARLEY,
          stem: "What does the chain in the extract represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The burden of the selfish choices Marley made in life" },
              { id: "b", text: "Marley's wealth, which he carries with him" },
              { id: "c", text: "A punishment forced on him by Scrooge" },
              { id: "d", text: "A decoration Marley wore at Christmas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolism", statement: "The chain is built from Marley's own choices." }],
            steps: [{ reasoning: "He says he made it himself, 'link by link', so it symbolises selfish acts that now weigh him down.", evidence: "the chain I forged in life", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** The burden of the selfish choices Marley made in life.",
            commonErrors: ["Taking the chain literally as wealth."],
          },
        },
        {
          id: "et8-u2-extract-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MARLEY,
          stem: "Explain the effect of the repetition of 'of my own free will' in the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition", statement: "Repeated phrases stress an idea." }],
            steps: [
              { reasoning: "The repetition emphasises that Marley chose his own fate, so he is responsible.", evidence: "of my own free will", marks: 1, markCode: "AO2" },
              { reasoning: "It acts as a warning to Scrooge that he too has a choice.", marks: 1, markCode: "AO1" },
              { reasoning: "The formal, solemn rhythm suggests the voice of someone beyond the grave, adding gravity.", evidence: "I girded it on of my own free will", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The repetition stresses that Marley's suffering was his own choice, which warns Scrooge that he can still choose differently, and gives the ghost a solemn voice.",
            commonErrors: ["Noting repetition without effect."],
          },
        },
        {
          id: "et8-u2-extract-analysis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MARLEY,
          stem: "How does Dickens use language and structure in this extract to make the reader feel Marley's warning is serious?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery", statement: "The chain is an extended image of guilt." },
              { kind: "technique", name: "Triple/parallel structure", statement: "Parallel phrases create a heavy rhythm." },
            ],
            steps: [
              { reasoning: "'Forged' implies deliberate hard work, so the chain is the product of Marley's own actions.", evidence: "chain I forged in life", marks: 2, markCode: "AO2" },
              { reasoning: "The parallel phrases 'link by link, and yard by yard' create a slow, heavy rhythm like a chain being dragged, showing the accumulation of guilt.", evidence: "link by link, and yard by yard", marks: 2, markCode: "AO2" },
              { reasoning: "The rhetorical question 'Is its pattern strange to you?' makes Scrooge, and the reader, see that the same chain is being made.", evidence: "Is its pattern strange to you?", marks: 2, markCode: "AO2" },
              { reasoning: "Scrooge's reaction, trembling 'more and more', shows fear rising and the warning taking effect.", evidence: "trembled more and more", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Dickens makes the warning serious through the extended chain image, the heavy parallel rhythm of 'link by link, and yard by yard', the direct question to Scrooge and Scrooge's escalating fear.",
            levels: lv(8),
            commonErrors: ["Retelling the ghost scene.", "Spotting devices only."],
          },
        },
        {
          id: "et8-u2-extract-analysis-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: FIVE,
          stem: "Read the extract from Stave Five and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things that Scrooge says he does not know.", marks: 2 },
            { label: "b", prompt: "Explain what the word 'baby' suggests about how Scrooge feels.", marks: 4 },
            { label: "c", prompt: "How does Dickens use language and structure in this extract to present Scrooge's redemption? Link it to the beginning of the novella.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select exact details." },
              { kind: "technique", name: "Metaphor", statement: "'Baby' stands for rebirth." },
              { kind: "technique", name: "Short sentences and exclamations", statement: "Express excitement and release." },
            ],
            steps: [
              { part: "a", reasoning: "What day of the month it is.", evidence: "I don't know what day of the month it is", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "How long he has been among the Spirits (or 'anything').", evidence: "I don't know how long I've been among the Spirits", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Baby' suggests rebirth: Scrooge has a new innocence and starts life again.", evidence: "I'm quite a baby", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "He says 'I'd rather be a baby', so he is happy to give up his old, knowing, hard self.", evidence: "I'd rather be a baby", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The short, repeated sentences ('I don't know...') show confusion turning into joy.", evidence: "I don't know anything", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The exclamations 'Hallo! Whoop! Hallo here!' show uncontrolled happiness, unlike the closed man of Stave One.", evidence: "Hallo! Whoop! Hallo here!", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Link to the start: Scrooge was 'secret, and self-contained'; he now shouts openly.", evidence: "secret, and self-contained", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Dickens shows redemption as joyful, encouraging readers to change.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "(a) What day of the month it is; how long he has been among the Spirits. (b) 'Baby' suggests rebirth and innocence, and he is glad to leave behind his old self. (c) Short sentences and exclamations show joy and openness, the opposite of the closed Scrooge of Stave One, presenting redemption as a happy rebirth.",
            levels: lv(8, "c"),
            commonErrors: ["No link to the start.", "Retelling Stave Five."],
          },
        },
      ],
    },
    {
      id: "et8-u2-whole-text-essay",
      title: "Writing about the whole text",
      skill: "Plan and write an essay that argues a clear view across the whole novella.",
      lesson: {
        sections: [
          {
            heading: "Planning an essay",
            body: "Read the question and underline the **key words** (character or theme, 'how does Dickens present'). Write a one-sentence **line of argument**, then plan three or four paragraphs covering beginning, middle and end. For each paragraph choose one quotation, one technique and one link to context. This takes five minutes but makes the essay coherent.",
          },
          {
            heading: "Structure and conclusion",
            body: "Open with a thesis that answers the question directly. Use **topic sentences**, comparative language ('At first... but by Stave Five...') and a conclusion that returns to the question and to Dickens's purpose. Avoid retelling. Aim for precise quotations and tentative analytical verbs: 'suggests', 'implies', 'conveys'.",
          },
        ],
        keyFormulas: [
          { name: "Thesis", statement: "A one-sentence answer to the question." },
          { name: "Topic sentence", statement: "The first sentence of a paragraph states its point." },
          { name: "Conclusion", statement: "Return to the question and the writer's purpose." },
        ],
        workedExample: {
          problem: "Plan an essay: 'How does Dickens present the theme of generosity in A Christmas Carol?'",
          solution: "Thesis: Dickens presents generosity as the true source of happiness, which Scrooge discovers too late. Paragraph 1: Stave One, Scrooge's refusal of charity (surplus population). Paragraph 2: Stave Two, Fezziwig's generous party contrasts with Scrooge's meanness. Paragraph 3: Stave Three, the Cratchits are poor but generous in spirit. Paragraph 4: Stave Five, Scrooge's gifts show redemption. Conclusion: generosity is a moral duty Dickens urges on readers.",
        },
      },
      questions: [
        {
          id: "et8-u2-whole-text-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the best opening line of argument for an essay on Scrooge's change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dickens shows that Scrooge's change comes from seeing the consequences of his actions, which makes redemption convincing." },
              { id: "b", text: "A Christmas Carol is long." },
              { id: "c", text: "Scrooge is a character in a book by Dickens." },
              { id: "d", text: "In this essay I will write about Stave One." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Thesis", statement: "A line of argument gives a clear, arguable answer to the question." }],
            steps: [{ reasoning: "Option b makes a clear argument that can be developed with evidence.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** It gives a clear, arguable answer.",
            commonErrors: ["Choosing a description with no argument."],
          },
        },
        {
          id: "et8-u2-whole-text-essay-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a topic sentence and a supporting quotation for a paragraph about how Scrooge treats Bob Cratchit in Stave One.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Topic sentence", statement: "State the point, then support it." }],
            steps: [
              { reasoning: "A clear topic sentence about Scrooge's mean treatment of Bob.", marks: 1, markCode: "AO1" },
              { reasoning: "An accurate short quotation or reference (for example the single coal, the cold office, or 'Bob' being paid fifteen shillings a week).", marks: 1, markCode: "AO1" },
              { reasoning: "Explanation of how this shows Scrooge's meanness.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "Dickens presents Scrooge as a mean employer: Bob must work in a cold office with only a tiny fire, which shows that Scrooge values coal more than the health of his clerk.",
            commonErrors: ["Giving a plot summary rather than a point."],
          },
        },
        {
          id: "et8-u2-whole-text-essay-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a plan (a thesis and four paragraph points with a quotation or reference to a stave for each) for the question: 'How does Dickens present the importance of family in A Christmas Carol?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Thesis plus ordered paragraphs with evidence." },
              { kind: "context", name: "Christmas", statement: "Dickens promoted family-centred Christmas." },
            ],
            steps: [
              { reasoning: "A clear thesis: family love matters more than wealth.", marks: 2, markCode: "AO1" },
              { reasoning: "Paragraph on Fred's welcoming Christmas versus Scrooge's isolation.", marks: 2, markCode: "AO1" },
              { reasoning: "Paragraph on the Cratchits' joy despite poverty and Tiny Tim's 'God bless us, every one'.", marks: 2, markCode: "AO2" },
              { reasoning: "Paragraph on Scrooge's final inclusion in Fred's family and Dickens's message that Christmas should be shared.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Thesis: Dickens presents family as the true wealth. Paragraphs: Scrooge's isolation and Fred; the Cratchit dinner; Fan and the loss of Belle; Stave Five reunion with Fred. Conclusion: family love is a moral lesson for Victorian readers.",
            levels: lv(8),
            commonErrors: ["No quotations or references.", "Plan has no argument."],
          },
        },
        {
          id: "et8-u2-whole-text-essay-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "Answer these questions about Dickens's presentation of Scrooge across the whole novella.",
          parts: [
            { label: "a", prompt: "Give two ways Scrooge treats others badly in Stave One.", marks: 2 },
            { label: "b", prompt: "Explain one way Dickens shows Scrooge beginning to change in Stave Two or Three.", marks: 4 },
            { label: "c", prompt: "Write a full essay: 'How does Dickens present Scrooge's change from selfishness to generosity?' Write about the whole novella.", marks: 14 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Accurate recall." },
              { kind: "skill", name: "Essay structure", statement: "Thesis, developed paragraphs, conclusion." },
              { kind: "context", name: "Purpose", statement: "Dickens wanted to persuade readers to be charitable." },
            ],
            steps: [
              { part: "a", reasoning: "He refuses Fred's invitation or charity donations.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He is hard on Bob Cratchit (the cold office, grudging day off).", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Any valid example, such as Scrooge crying for his younger self or showing regret over Belle.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Explanation of how Dickens uses the scene to show the beginning of empathy.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Starting point: cold, greedy, isolated (the flint, oyster, 'surplus population').", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Development: the spirits' lessons and the effect of pity, fear and shame.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Ending: Scrooge's actions in Stave Five and his joy.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Analysis of methods: language, structure, symbolism.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Purpose and Victorian context.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "(a) Refuses charity; mistreats Bob. (b) Any developed example, such as weeping for his younger self. (c) A top essay argues that Dickens makes redemption convincing through a gradual journey from the flint-hard miser to the joyful giver, supported by quotations, structure and context.",
            levels: [
              { level: "Level 5", marks: "13-14", descriptor: "Perceptive and assured argument; judicious references; analysis of language and structure; integrated context.", part: "c" },
              { level: "Level 4", marks: "10-12", descriptor: "Thorough, well-chosen references and developed analysis.", part: "c" },
              { level: "Level 3", marks: "7-9", descriptor: "Clear, relevant explanation with relevant references.", part: "c" },
              { level: "Level 2", marks: "4-6", descriptor: "Some understanding, some relevant references.", part: "c" },
              { level: "Level 1", marks: "1-3", descriptor: "Simple, limited comment.", part: "c" },
            ],
            commonErrors: ["Retelling the plot.", "No quotations or context.", "Only writing about the start or the end."],
          },
        },
      ],
    },
  ],
};
