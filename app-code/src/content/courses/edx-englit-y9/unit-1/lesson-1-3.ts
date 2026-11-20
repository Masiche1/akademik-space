import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : ["10-12", "8-9", "5-7", "3-4", "1-2"];
  const text = top === 6
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating ${focus}; precise, well-chosen references and assured use of terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const LAB: TextExtract = {
  title: "The Night Experiment",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "The laboratory lay beneath the house, and nobody but Doctor Aldous Crane had ever been invited down.\nIt smelt of lamp oil and cold iron. Glass jars lined the walls, each holding some pale and shapeless thing,\nand in the centre, strapped to a slab of black marble, lay the work of eleven years.\n\nCrane bent over it, his hands shaking, and whispered, 'Live. Live, and I shall be the equal of God.'\n\nThe lamps guttered. A wire hummed. For a moment nothing happened, and he felt a wild, foolish hope\nthat he had failed, that the thing would stay a thing. Then the long fingers closed slowly around the edge of the slab,\nand the eyes, which were the colour of river water, opened and fixed on him with a look not of gratitude, but of question.\n\n'What have you done?' it seemed to ask.\n\nCrane stumbled backwards against the shelves. The jars rang like bells. He had sought glory,\nand he had found only a stranger he could never unmake.",
};

export const lesson13: Lesson = {
  id: "et9-u1-lesson-1-3",
  code: "1-3",
  title: "Extract Analysis and Victorian Context",
  goal: "I CAN analyse an extract in detail and explain how science, religion and Victorian anxieties shape gothic fiction.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Hubris", definition: "Excessive pride or self-confidence that leads to a character's downfall." },
    { term: "Context", definition: "The social, historical and cultural background in which a text was written or is set." },
    { term: "Blasphemy", definition: "Speech or action that shows contempt for God or sacred things." },
    { term: "Darwinism", definition: "The ideas of Charles Darwin, published in 1859, that species evolve by natural selection, challenging religious views of creation." },
    { term: "Galvanism", definition: "The use of electricity to make muscles move, an experiment that inspired early nineteenth-century fears about reanimating the dead." },
    { term: "Respectability", definition: "The Victorian ideal of correct, moral and orderly public behaviour." },
    { term: "Extract", definition: "A short passage taken from a longer text." },
  ],
  concepts: [
    {
      id: "et9-u1-extract-analysis",
      title: "Extract analysis",
      skill: "Write a focused analytical response to a gothic extract using precise quotation and terminology.",
      lesson: {
        sections: [
          {
            heading: "Reading with a question in mind",
            body: "Always begin with the **focus of the question** (for example 'how is Crane presented?'). Skim the extract, underline three or four quotations that answer it, and look for **shifts**: where does the mood change? Good answers move through the extract in order, because writers control **structure** as well as language.",
          },
          {
            heading: "Building an analytical paragraph",
            body: "Use the PETAL pattern. **P**oint: make a clear claim. **E**vidence: embed a short quotation. **T**echnique: name the method. **A**nalysis: explain the effect on the reader and the idea behind it. **L**ink: connect back to the question. Always try to say more than one thing about a single word, and consider the **writer's purpose**, not just what the character feels.",
          },
        ],
        keyFormulas: [
          { name: "PETAL", statement: "Point, Evidence, Technique, Analysis, Link: the structure of a strong analytical paragraph." },
          { name: "Shift", statement: "A change in mood, focus or perspective within an extract, often signalled by 'Then' or a short sentence." },
          { name: "Hubris", statement: "Over-reaching pride, a typical flaw of gothic scientists." },
        ],
        workedExample: {
          problem: "How does the writer present Doctor Crane's attitude to his experiment in lines 4-5?",
          solution: "The writer presents Crane as proud and reckless. His whispered command 'Live. Live, and I shall be the equal of God' uses the imperative and repetition to show obsessive urgency, while the claim that he will be 'the equal of God' reveals hubris: he believes science entitles him to take God's role. The whisper suggests he knows the act is forbidden, so the reader senses guilt behind the arrogance. The conditional 'and I shall be' makes his own glory, not the creature's life, the true motive, which foreshadows his later horror.",
        },
      },
      questions: [
        {
          id: "et9-u1-extract-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LAB,
          stem: "What does Crane's statement 'I shall be the equal of God' (line 5) show about him?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He is arrogant and ambitious" },
              { id: "b", text: "He is religious and devout" },
              { id: "c", text: "He is afraid of God" },
              { id: "d", text: "He is kind to others" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Hubris", statement: "Excessive pride, often shown by gothic scientists who claim godlike power." }],
            steps: [{ reasoning: "Claiming to equal God shows arrogance and overreaching ambition.", evidence: "I shall be the equal of God", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** He is arrogant and ambitious. Mentioning God does not make him devout.",
            commonErrors: ["Choosing (b) because God is mentioned."],
          },
        },
        {
          id: "et9-u1-extract-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LAB,
          stem: "Explain what the writer suggests about the creature in lines 8-9.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Read beyond the literal words to what they imply." }],
            steps: [
              { reasoning: "The creature is human-like and aware, with eyes that 'fixed on him'.", evidence: "fixed on him", marks: 1, markCode: "AO1" },
              { reasoning: "Its look is 'not of gratitude, but of question', so it is not a servant but a being that judges its maker.", evidence: "not of gratitude, but of question", marks: 1, markCode: "AO2" },
              { reasoning: "The simile-like 'colour of river water' makes it cold and natural, yet strange.", evidence: "the colour of river water", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The creature seems alive and conscious, and its questioning look suggests it judges Crane rather than thanking him, making Crane's act seem like a mistake.",
            commonErrors: ["Saying only 'it wakes up'.", "No quotation."],
          },
        },
        {
          id: "et9-u1-extract-analysis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: LAB,
          stem: "How does the writer use language and structure to show Crane's change of feeling from the start of the extract to the end?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural shift", statement: "A change in mood or focus guides the reader through a character's change of feeling." },
              { kind: "skill", name: "PETAL", statement: "Point, evidence, technique, analysis, link." },
            ],
            steps: [
              { reasoning: "At the start Crane is ambitious: the work of 'eleven years' shows obsessive dedication.", evidence: "the work of eleven years", marks: 1, markCode: "AO2" },
              { reasoning: "His whispered imperative shows urgent, proud desire.", evidence: "Live. Live, and I shall be the equal of God.", marks: 1, markCode: "AO2" },
              { reasoning: "The pause (the lamps 'guttered', a wire 'hummed') delays the moment and builds tension.", evidence: "For a moment nothing happened", marks: 1, markCode: "AO2" },
              { reasoning: "A 'wild, foolish hope' that he failed is a first sign of doubt, contradicting his earlier pride.", evidence: "a wild, foolish hope", marks: 1, markCode: "AO2" },
              { reasoning: "The shift 'Then' and the creature's gaze bring sudden fear.", evidence: "Then the long fingers closed slowly", marks: 1, markCode: "AO2" },
              { reasoning: "The final contrast between 'glory' and 'stranger he could never unmake' shows regret and horror.", evidence: "a stranger he could never unmake", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of language and structure", 6),
            finalAnswer: "The extract moves from proud obsession to horror. Crane begins as a driven scientist who has given 'eleven years' to his work and boasts that he will be 'the equal of God'. The pause and 'foolish hope' show doubt, and after the shift marked by 'Then' the creature's questioning gaze makes him a man who 'sought glory' and found only 'a stranger he could never unmake'.",
            commonErrors: ["Narrating the events without commenting on feeling.", "Ignoring structure."],
          },
        },
        {
          id: "et9-u1-extract-analysis-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: LAB,
          stem: "Read 'The Night Experiment' and answer the questions.",
          parts: [
            { label: "a", prompt: "Give two details about the laboratory from lines 1-3.", marks: 2 },
            { label: "b", prompt: "Explain how the writer creates a sinister atmosphere in lines 1-3.", marks: 6 },
            { label: "c", prompt: "How is the creature presented as a threat to its creator in lines 6-9?", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "The overreaching scientist", statement: "Gothic fiction warns against science that crosses moral limits." },
              { kind: "technique", name: "Sensory language", statement: "Smell and sight create a vivid, uneasy atmosphere." },
            ],
            steps: [
              { part: "a", reasoning: "It is underground, beneath the house.", evidence: "beneath the house", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It holds jars of pale, shapeless things.", evidence: "each holding some pale and shapeless thing", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The secluded location, known to nobody else, suggests secrecy.", evidence: "nobody but Doctor Aldous Crane", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Smell of 'lamp oil and cold iron' creates a cold, industrial, unwelcoming sense.", evidence: "lamp oil and cold iron", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Pale and shapeless' jarred specimens suggest unnatural, grotesque experiments.", evidence: "pale and shapeless thing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The marble slab suggests a tomb or altar, linking death and worship.", evidence: "slab of black marble", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Strapped' suggests violence or imprisonment.", evidence: "strapped to a slab", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The long final clause ends on 'the work of eleven years', hinting at obsession.", evidence: "the work of eleven years", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It moves independently: the fingers 'closed slowly', a sign of deliberate power.", evidence: "the long fingers closed slowly", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "It reverses the creator-creation relationship by judging Crane, not thanking him.", evidence: "not of gratitude, but of question", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Its silent question, 'What have you done?', makes it a moral accuser.", evidence: "'What have you done?' it seemed to ask", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Crane retreats physically, while the jars ringing 'like bells' sound like a warning.", evidence: "The jars rang like bells", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final line shows the threat is permanent: he can 'never unmake' it.", evidence: "a stranger he could never unmake", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Context: the creature embodies Victorian fears about science exceeding moral control.", marks: 2, markCode: "AO4" },
            ],
            levels: [...bands("analysis of the creature as a threat", 12, "c"), ...bands("analysis of atmosphere", 6, "b")],
            finalAnswer: "(a) It is beneath the house; it holds jars of pale, shapeless things. (b) Secrecy, cold smells, grotesque specimens and the 'strapped' body on a tomb-like slab create a sinister mood. (c) The creature is a threat because it acts with slow independence, reverses the roles by judging its creator, and leaves Crane permanently haunted by 'a stranger he could never unmake'.",
            commonErrors: ["Writing about Crane only in (c).", "Quoting whole sentences.", "Not using the line references."],
          },
        },
      ],
    },
    {
      id: "et9-u1-victorian-context",
      title: "Context: science, religion and Victorian anxiety",
      skill: "Link gothic writing to the scientific, religious and social worries of its time.",
      lesson: {
        sections: [
          {
            heading: "Science and the fear of playing God",
            body: "Frankenstein (1818) was written when experiments with electricity, such as galvanism, suggested that life might be restarted by science. By the late nineteenth century, Charles Darwin's **On the Origin of Species (1859)** suggested humans were descended from animals, shaking religious belief. Gothic writers expressed these fears through scientists who **overreach** and are punished, and through creatures that blur the line between human and beast.",
          },
          {
            heading: "Respectability and the hidden self",
            body: "Victorian society prized **respectability**, yet cities contained poverty, crime and secrets. Stevenson's Jekyll is a respected doctor who hides his desires in the form of Hyde, showing that a polished surface can conceal vice. Writers used gothic settings such as fog-bound London to show a society divided between the visible and the hidden. When you write about context, always link it to **a specific moment in the text** and explain how it explains the writer's choices.",
          },
        ],
        keyFormulas: [
          { name: "Context (AO4)", statement: "Link a feature of the text to the time, ideas or beliefs that shaped it." },
          { name: "Darwin, 1859", statement: "Evolution challenged the belief that humans were uniquely created by God." },
          { name: "Respectability", statement: "The Victorian ideal of an orderly public self, which gothic fiction exposes as fragile." },
        ],
        workedExample: {
          problem: "How does context help explain the presentation of Victor Frankenstein?",
          solution: "Shelley wrote when galvanism suggested life might be reanimated, so Victor's ambition to 'infuse a spark of being' into a 'lifeless thing' reflects both excitement and fear about science. His horror once the creature wakes ('the wretch') warns that scientists who reject responsibility for what they create invite disaster. A reader in 1818, close to the debates about religion and nature, would see Victor's act as playing God, and Shelley therefore presents his ambition as dangerous hubris.",
        },
      },
      questions: [
        {
          id: "et9-u1-victorian-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which idea from the nineteenth century made many people question the religious view that humans were created by God?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Darwin's theory of evolution" },
              { id: "b", text: "The invention of the telephone" },
              { id: "c", text: "The abolition of the slave trade" },
              { id: "d", text: "The building of railways" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Darwin", statement: "On the Origin of Species (1859) proposed evolution by natural selection." }],
            steps: [{ reasoning: "Darwin's theory suggested humans evolved from animals, challenging religious belief.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Darwin's theory of evolution.",
            commonErrors: ["Choosing a different nineteenth-century change that did not affect belief about creation."],
          },
        },
        {
          id: "et9-u1-victorian-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Victorian readers might have found the story of Jekyll and Hyde frightening. Refer to context in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Respectability", statement: "Victorians valued a respectable public self, so hidden vice was a social fear." }],
            steps: [
              { reasoning: "Jekyll is a respected doctor, so the story shows that respectability can hide vice.", marks: 1, markCode: "AO1" },
              { reasoning: "Readers feared secret behaviour in a society that valued reputation.", marks: 1, markCode: "AO4" },
              { reasoning: "Darwin's ideas suggested animal instincts lay under civilised surfaces, so Hyde seemed plausible and threatening.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Victorian society prized respectability, so a respected man hiding a violent double was threatening; Darwin's ideas also made readers fear animal instincts beneath civilisation.",
            commonErrors: ["Describing the plot only.", "Context given with no link to the text."],
          },
        },
        {
          id: "et9-u1-victorian-context-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how scientific ideas of the nineteenth century influenced the way gothic writers portrayed scientists. Refer to at least one text you have studied.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Science and anxiety", statement: "Advances such as galvanism and evolution created excitement and fear." },
              { kind: "skill", name: "Linking context", statement: "Connect contextual points to specific moments in the text." },
            ],
            steps: [
              { reasoning: "Galvanism suggested life could be restarted by electricity, inspiring Victor's experiment.", marks: 1, markCode: "AO4" },
              { reasoning: "Writers show scientists as proud ('hubris') and punished.", marks: 1, markCode: "AO1" },
              { reasoning: "In Frankenstein Victor flees from his creation, showing neglect of responsibility.", evidence: "the wretch", marks: 1, markCode: "AO1" },
              { reasoning: "Darwin made readers fear a thin line between human and animal, seen in Hyde.", marks: 1, markCode: "AO4" },
              { reasoning: "Religious belief made 'playing God' a moral crime.", marks: 1, markCode: "AO4" },
              { reasoning: "Therefore gothic novels act as warnings about progress without morality.", marks: 1, markCode: "AO2" },
            ],
            levels: bands("explanation of context", 6),
            finalAnswer: "Gothic writers responded to scientific change with warnings. Shelley's Victor, inspired by experiments with electricity, creates life and then rejects his 'wretch', showing hubris and neglect. After Darwin, Stevenson's Hyde suggested the animal lay beneath civilised surfaces. Together these show anxieties about science that ignores religion and morality.",
            commonErrors: ["Giving facts about Darwin with no link to the text.", "Ignoring the question's focus on scientists."],
          },
        },
        {
          id: "et9-u1-victorian-context-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "Answer the questions about gothic fiction and its context.",
          parts: [
            { label: "a", prompt: "State two features of Victorian society that created anxiety.", marks: 2 },
            { label: "b", prompt: "Explain how the gothic setting of a fog-bound city can reflect these anxieties.", marks: 6 },
            { label: "c", prompt: "'Gothic fiction is really about the fears of the society that produced it.' To what extent do you agree? Refer to at least one gothic text you have studied.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Victorian anxieties", statement: "Science, religion, crime, poverty and respectability all fed gothic fear." },
              { kind: "skill", name: "Evaluation", statement: "Weigh the statement, offering a clear argument supported by evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Fear of scientific change and the loss of religious certainty.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Fear of crime, poverty or hidden vice in cities.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Fog hides things, mirroring a society that concealed vice behind respectability.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It makes streets disorienting, symbolising moral confusion.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Darkness and isolation make crime seem possible.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Crowded city yet lonely characters reflects urban anxiety.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Pathetic fallacy links weather and moral mood.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The setting makes the unseen threat feel close, increasing fear.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Agreement: scientific ambition (Frankenstein) and dual selves (Jekyll and Hyde) reflect real worries of their times.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Specific textual evidence supports the claim, for example Victor's flight from his creation or Jekyll's statement that man is 'not truly one, but truly two'.", evidence: "not truly one, but truly two", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Counter-view: gothic also explores timeless fears such as death, guilt and the unknown, so it is not only about one society.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "A reasoned conclusion that weighs both views.", marks: 3, markCode: "AO1" },
            ],
            levels: [...bands("evaluation of context", 12, "c"), ...bands("analysis of setting and context", 6, "b")],
            finalAnswer: "(a) Scientific change and loss of religious certainty; crime and hidden vice in cities. (b) Fog conceals and disorients, mirroring hidden vice and moral confusion, and creates fear of unseen threats. (c) To a large extent: Frankenstein and Jekyll and Hyde reflect fears about science and respectability, yet gothic also explores timeless fears of death and guilt, so context explains much but not everything.",
            commonErrors: ["Context lists with no link to text.", "One-sided answer with no evaluation."],
          },
        },
      ],
    },
  ],
};
