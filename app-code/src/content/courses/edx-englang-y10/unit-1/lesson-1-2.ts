import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const STORM: TextExtract = {
  title: "Night Shift at the Lighthouse",
  author: "Written for Akademik Space",
  source: "Magazine feature",
  text: "By midnight the sea had stopped being water and become an enemy. Waves hurled themselves at the rocks below the lighthouse, and the whole tower shuddered like a frightened animal. Inside, Marta Quill climbed the spiral staircase for the fortieth time that night, one hand trailing along the cold wall, counting each step as she had done for twenty years.\n\nShe was not afraid. Fear, she liked to say, was a luxury for people with somewhere else to be. Instead she polished the great lens until it glowed, and when its beam swept out across the blackness she felt a quiet pride. Somewhere out there a captain was watching for her light. Somewhere a family was waiting for a ship to come home.\n\nAt three o'clock the storm broke. The wind sank to a murmur; the sea heaved and sighed and settled. Marta stepped onto the gallery and let the rain-washed air fill her lungs. Dawn was a thin silver line on the horizon. She had kept her watch.",
};

const FRUIT: TextExtract = {
  title: "Why Our Cities Need Trees",
  author: "Written for Akademik Space",
  source: "Newspaper article",
  text: "Walk down any high street at noon in July and you will feel it: the heat rising from the pavement like breath from an oven. Concrete does not merely sit in the sun; it hoards it. By evening, our cities are giving back the day's fierce warmth long after the sun has set.\n\nTrees are the solution, and they are astonishingly cheap. A single mature tree can cool the air around it by several degrees, soak up rainwater that would otherwise flood our drains, and give a home to birds, insects and, quite possibly, a sense of calm. Yet councils continue to cut them down to widen roads.\n\nFirst, consider the cost. Planting a street tree costs less than a single parking space. Second, consider the benefit. Residents of leafy streets report lower stress and better health. Finally, consider the alternative: a concrete desert where nothing grows and nobody wishes to linger. The choice, surely, is obvious.",
};

const LA_LEVELS: MarkLevel[] = [
  { part: "d", level: "Level 5", marks: "13-15", descriptor: "Perceptive, discriminating analysis of language and structure; assured use of terminology; judicious, well-integrated evidence." },
  { part: "d", level: "Level 4", marks: "10-12", descriptor: "Thorough analysis of language and structure with well-chosen evidence and effective terminology." },
  { part: "d", level: "Level 3", marks: "7-9", descriptor: "Clear, relevant analysis of language and/or structure, with relevant evidence and some use of terminology." },
  { part: "d", level: "Level 2", marks: "4-6", descriptor: "Some understanding of language and structure; some relevant references, but analysis is partial." },
  { part: "d", level: "Level 1", marks: "1-3", descriptor: "Simple, limited comments, mostly feature-spotting or description; few references." },
];

const LA_Q3_LEVELS: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, developed analysis of how the writer's language creates effects, with well-chosen evidence and relevant terminology." },
  { level: "Level 2", marks: "3-4", descriptor: "Some understanding of effects; some relevant references; analysis is partial." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment; features identified without effect." },
];

const EV_LEVELS: MarkLevel[] = [
  { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, relevant evidence is selected and embedded fluently, with developed explanation of what each quotation shows." },
  { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some relevant evidence is selected; embedding and explanation are sometimes secure." },
  { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited evidence, often long or unfocused, with little explanation." },
];

export const lesson12: Lesson = {
  id: "el10-u1-lesson-1-2",
  code: "1-2",
  title: "Language, Structure and Evidence",
  goal: "I CAN analyse how a writer uses language and structure for effect, and select and embed precise evidence.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO2"],
  vocabulary: [
    { term: "Connotation", definition: "The ideas or feelings a word suggests beyond its literal meaning." },
    { term: "Personification", definition: "Giving human qualities or actions to something that is not human." },
    { term: "Simile", definition: "A comparison using ‘like’ or ‘as’." },
    { term: "Structure", definition: "The way a writer organises and sequences ideas, events or paragraphs." },
    { term: "Embedded quotation", definition: "A short quotation built into your own sentence so that it fits grammatically." },
    { term: "Tricolon", definition: "A list of three, often used for emphasis and rhythm." },
  ],
  concepts: [
    {
      id: "el10-u1-language-structure-analysis",
      title: "Analysing language and structure",
      skill: "Identify a technique, select evidence and explain the effect on the reader using precise terminology.",
      lesson: {
        sections: [
          {
            heading: "From feature to effect",
            body: "**AO2** rewards analysis, not labelling. Naming a technique is worth very little unless you explain what it makes the reader think or feel and why. A dependable approach is *Point, Evidence, Explain, Link*: make a point about the writer's method, give a short quotation, explain the effect, and link back to the purpose of the whole text. Always ask: why this word, not another?",
          },
          {
            heading: "Language: words, images, sentences",
            body: "Examine **word choice** (connotations, verbs, adjectives), **imagery** (simile, metaphor, personification), and **sentence form** (short sentences for impact, lists for accumulation, triples for emphasis). In ‘Night Shift at the Lighthouse’, ‘the sea had stopped being water and become an enemy’ is a metaphor that casts the storm as hostile, and ‘shuddered like a frightened animal’ combines a simile with personification, making the tower vulnerable.",
          },
          {
            heading: "Structure: movement across the text",
            body: "Structure covers openings, shifts in focus, patterns and endings. Consider how the extract moves from the **violent storm** to **Marta's calm** and finally to **dawn**. The contrast between a chaotic opening and a tranquil close shapes the reader's sense of relief. Use words such as ‘opens’, ‘shifts’, ‘builds’ and ‘concludes’ to show you are tracking the whole text.",
          },
        ],
        keyFormulas: [
          { name: "Point, Evidence, Explain, Link", statement: "Make a point about method, support it with a short quotation, explain the effect, link to purpose." },
          { name: "Metaphor", statement: "Describing one thing as if it were another: ‘an enemy’ implies the sea is hostile." },
          { name: "Structural shift", statement: "A change of focus, tone or pace, for example from storm to calm, which guides how the reader feels." },
          { name: "Sentence variety", statement: "Short sentences create emphasis or tension; long sentences can create accumulation or flow." },
        ],
        workedExample: {
          problem: "How does the writer use language to present the storm in the first paragraph of ‘Night Shift at the Lighthouse’?",
          solution: "The writer presents the storm as a violent, living threat. The metaphor ‘the sea had stopped being water and become an enemy’ suggests the sea is no longer natural but hostile, setting up conflict from the first sentence. The verb ‘hurled’ gives the waves aggression and force, as if they are deliberately attacking the rocks. The simile ‘shuddered like a frightened animal’ personifies the tower, making it seem vulnerable, so the reader feels sympathy for the building and for Marta inside. Together these choices create a tense, dramatic atmosphere.",
        },
      },
      questions: [
        {
          id: "el10-u1-language-structure-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORM,
          stem: "‘the whole tower shuddered like a frightened animal’. Which technique is used here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile and personification" },
              { id: "b", text: "Alliteration" },
              { id: "c", text: "Rhetorical question" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile and personification", statement: "‘Like’ marks the simile; the tower is given the feelings of an animal." }],
            steps: [{ reasoning: "The comparison uses ‘like’, and gives the tower a human or animal fear.", evidence: "shuddered like a frightened animal", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Simile and personification, because it compares the tower to a frightened animal.",
            commonErrors: ["Choosing alliteration because of the repeated sounds in ‘frightened’ and ‘shuddered’; they are not the same sound.", "Choosing onomatopoeia because ‘shuddered’ sounds dramatic."],
          },
        },
        {
          id: "el10-u1-language-structure-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STORM,
          stem: "Explain the effect of the writer's choice of the verb ‘hurled’ in the first paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Zoom in on a word", statement: "Identify connotations of the chosen word and explain the effect on the reader." }],
            steps: [
              { reasoning: "‘Hurled’ suggests violent, forceful throwing, so the waves seem aggressive.", evidence: "Waves hurled themselves", marks: 1, markCode: "AO2" },
              { reasoning: "The reflexive ‘themselves’ makes the waves seem deliberate and determined, almost personified.", evidence: "hurled themselves at the rocks", marks: 1, markCode: "AO2" },
              { reasoning: "This creates a dangerous, threatening atmosphere that builds tension for the reader.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "‘Hurled’ has connotations of violence and force, so the waves seem aggressive and deliberate, creating a tense, threatening mood.",
            commonErrors: ["Writing ‘it is a good verb’ with no explanation.", "Describing the waves without discussing the word."],
          },
        },
        {
          id: "el10-u1-language-structure-analysis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: STORM,
          stem: "How does the writer use language in the second paragraph to present Marta? Support your answer with examples from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Point, Evidence, Explain, Link", statement: "Each point needs a short quotation and an explanation of effect." },
              { kind: "technique", name: "Aphorism", statement: "A short, wise saying such as ‘Fear... was a luxury’ presents character through philosophy." },
            ],
            steps: [
              { reasoning: "The metaphor of fear as a ‘luxury’ shows Marta's courage and practical outlook; she has no time for fear.", evidence: "Fear... was a luxury for people with somewhere else to be", marks: 2, markCode: "AO2" },
              { reasoning: "‘Polished the great lens until it glowed’: the verbs show diligence and care, and ‘glowed’ links her work to warmth and hope.", evidence: "polished the great lens until it glowed", marks: 2, markCode: "AO2" },
              { reasoning: "Repetition of ‘Somewhere’ shows she thinks beyond herself to others, presenting her as selfless and proud of her duty.", evidence: "Somewhere out there... Somewhere a family", marks: 2, markCode: "AO2" },
            ],
            levels: LA_Q3_LEVELS,
            finalAnswer: "Marta is presented as brave, dedicated and selfless. Fear is a ‘luxury’ she cannot afford, she polishes the lens until it ‘glowed’, and the repeated ‘Somewhere’ shows she thinks about the sailors and families who depend on her.",
            commonErrors: ["Retelling what Marta does without analysing wording.", "Labelling ‘repetition’ without saying what it suggests."],
          },
        },
        {
          id: "el10-u1-language-structure-analysis-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: STORM,
          stem: "Read ‘Night Shift at the Lighthouse’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two details that show the storm is dangerous.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the simile ‘shuddered like a frightened animal’.", marks: 3 },
            { label: "c", prompt: "How does the writer use structure in the third paragraph to create a sense of relief? Refer to specific features.", marks: 5 },
            { label: "d", prompt: "How does the writer use language and structure to create tension and then calm? Support your answer with detailed reference to the text.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Language and structure", statement: "Combine word-level analysis with comments on shifts, patterns and endings." },
              { kind: "technique", name: "Contrast", statement: "Opposing atmospheres (storm and calm) heighten the effect of each." },
            ],
            steps: [
              { part: "a", reasoning: "The waves hurl themselves at the rocks.", evidence: "Waves hurled themselves at the rocks", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "The tower shudders, showing the force of the storm.", evidence: "the whole tower shuddered", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The comparison suggests the tower is helpless and alive with fear.", evidence: "like a frightened animal", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Personification makes the reader feel sympathy and sense the storm's power.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "A solid tower being vulnerable heightens the danger.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The short sentence marks a decisive turning point.", evidence: "At three o'clock the storm broke.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Sentence rhythm slows with the soothing verbs, mirroring the sea settling.", evidence: "heaved and sighed and settled", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The gradual shift from storm to dawn creates a sense of release.", evidence: "Dawn was a thin silver line", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The final short sentence concludes with pride and achievement.", evidence: "She had kept her watch.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Contrast with the opening makes the calm more powerful.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The opening metaphor presents the sea as hostile, creating immediate tension.", evidence: "become an enemy", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Violent verbs and personification build danger around the tower.", evidence: "hurled themselves", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Marta's calm routine (counting steps) contrasts with chaos, building admiration and focus.", evidence: "counting each step", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The structural turning point at three o'clock shifts mood from tension to peace.", evidence: "the storm broke", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Soft, gentle imagery in the ending creates calm and hope; the circular watch concludes with triumph.", evidence: "rain-washed air", marks: 3, markCode: "AO2" },
            ],
            levels: [
              ...LA_LEVELS,
            ],
            finalAnswer: "(a) Waves hurl themselves at the rocks; the tower shudders. (b) The simile makes the tower seem alive and afraid, creating sympathy and showing the storm's power. (c) Short sentence 'the storm broke', soothing verbs, silver dawn and the final short sentence mark relief. (d) Tension is built by hostile metaphor, violent verbs and personification; calm emerges through a structural turning point, softer imagery and a quietly triumphant ending.",
            commonErrors: ["Spotting techniques with no effect.", "Only analysing the first paragraph in (d).", "Ignoring structure in (d) and discussing only words."],
            examinerNote: "For (d), the best answers track the whole text and link language and structure to the shift from threat to peace.",
          },
        },
      ],
    },
    {
      id: "el10-u1-selecting-embedding-evidence",
      title: "Selecting and embedding evidence",
      skill: "Choose short, precise quotations and weave them into your own sentences.",
      lesson: {
        sections: [
          {
            heading: "Choosing the right evidence",
            body: "The best evidence is **short** and **focused**: often one to five words that carry the point. Long quotations hide your analysis and waste time. Choose words that can be explained, such as a vivid verb or metaphor. In ‘Why Our Cities Need Trees’, ‘hoards’ is more useful than the whole sentence around it.",
          },
          {
            heading: "Embedding quotations",
            body: "Embed a quotation so that it fits your own sentence: *The writer suggests that concrete ‘hoards’ the sun, implying it is greedy and unwilling to let heat go.* Avoid ‘The quote says...’. Because the quotation sits inside your grammar, the answer reads fluently and your comment on the word follows naturally.",
          },
          {
            heading: "Using several pieces of evidence",
            body: "A strong paragraph uses a small range of quotations from different places in the text. This shows breadth, and allows you to comment on patterns, such as the writer moving from a vivid problem to a list of reasons and then to a rhetorical conclusion. Always explain each quotation separately.",
          },
        ],
        keyFormulas: [
          { name: "Short and precise", statement: "Choose the fewest words that prove the point." },
          { name: "Embedding", statement: "Make the quotation part of your sentence: The writer describes concrete as ‘hoarding’ heat." },
          { name: "Range", statement: "Use evidence from the beginning, middle and end to show how the text develops." },
        ],
        workedExample: {
          problem: "Write a sentence that embeds a quotation to show how the writer presents concrete in the first paragraph of ‘Why Our Cities Need Trees’.",
          solution: "The writer presents concrete as selfish and greedy: it does not ‘merely sit in the sun’ but ‘hoards’ it, a verb that implies concrete deliberately keeps hold of heat, making the city uncomfortably hot long after sunset. The embedded words are short, and the comment on ‘hoards’ develops the idea.",
        },
      },
      questions: [
        {
          id: "el10-u1-selecting-embedding-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FRUIT,
          stem: "Which of these is the best example of an embedded quotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quote: hoards." },
              { id: "b", text: "The writer says, ‘Concrete does not merely sit in the sun; it hoards it.’" },
              { id: "c", text: "‘Hoards’ is a quote from the first paragraph." },
              { id: "d", text: "The writer suggests that concrete ‘hoards’ heat, implying it is greedy." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Embedding", statement: "A short quotation is woven into the grammar of your own sentence and followed by comment." }],
            steps: [{ reasoning: "Option (b) uses one word inside a sentence and adds an interpretation of it.", evidence: "hoards", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** It embeds one word and explains it.",
            commonErrors: ["Choosing (a), which uses the longest quotation without comment.", "Choosing (c) or (d), which label rather than embed."],
          },
        },
        {
          id: "el10-u1-selecting-embedding-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FRUIT,
          stem: "Write one sentence that embeds a short quotation from the second paragraph to show the writer's attitude to trees, and explain what the quotation suggests.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Embed and explain", statement: "A short quotation inside your own sentence, followed by an explanation of what it suggests." }],
            steps: [
              { reasoning: "Selects a short, relevant quotation from the second paragraph.", evidence: "astonishingly cheap", marks: 1, markCode: "AO2" },
              { reasoning: "Embeds it grammatically within the sentence.", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the suggestion: the adverb ‘astonishingly’ shows the writer is amazed that such a valuable solution costs so little.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer presents trees as a bargain, describing them as ‘astonishingly cheap’, an adverb that conveys his surprise that the benefits cost so little and strengthens his argument for planting them.",
            commonErrors: ["Starting with ‘The quote says’.", "Quoting an entire sentence and not commenting on any word."],
          },
        },
        {
          id: "el10-u1-selecting-embedding-evidence-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FRUIT,
          stem: "Write a paragraph analysing how the writer persuades the reader in the final paragraph. Embed at least three short quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Embedding", statement: "Three or more short quotations, each followed by comment." },
              { kind: "technique", name: "Tricolon", statement: "‘First... Second... Finally’ creates a structured, building argument." },
            ],
            steps: [
              { reasoning: "The sequencing words ‘First’, ‘Second’ and ‘Finally’ present a logical argument and sound unarguable.", evidence: "First, consider the cost", marks: 2, markCode: "AO2" },
              { reasoning: "The comparison of a tree to a parking space gives a vivid, relatable cost which makes the argument concrete.", evidence: "less than a single parking space", marks: 2, markCode: "AO2" },
              { reasoning: "The final image and rhetorical conclusion, ‘a concrete desert’, makes the alternative seem bleak and the choice ‘obvious’.", evidence: "a concrete desert", marks: 2, markCode: "AO2" },
            ],
            levels: LA_Q3_LEVELS,
            finalAnswer: "The writer builds a logical case with the sequence ‘First’, ‘Second’ and ‘Finally’, makes the cost relatable by comparing a tree with ‘a single parking space’, and warns of ‘a concrete desert’, a bleak image that makes the final choice seem ‘obvious’.",
            commonErrors: ["Using long quotations with no comment.", "Retelling the paragraph."],
          },
        },
        {
          id: "el10-u1-selecting-embedding-evidence-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: FRUIT,
          stem: "Read ‘Why Our Cities Need Trees’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Identify two words from the first paragraph that suggest the heat is uncomfortable.", marks: 2 },
            { label: "b", prompt: "Explain how the writer uses the simile ‘like breath from an oven’ to affect the reader.", marks: 3 },
            { label: "c", prompt: "Select and embed four short quotations to show how the writer builds a case for planting trees. Explain each one.", marks: 6 },
            { label: "d", prompt: "Write one sentence about the writer's purpose, with an embedded quotation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence selection", statement: "Short, embedded, explained." },
              { kind: "technique", name: "Simile", statement: "A comparison using ‘like’ or ‘as’." },
            ],
            steps: [
              { part: "a", reasoning: "‘Hoards’ suggests heat is stored and unrelenting.", evidence: "hoards", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "‘Fierce’ suggests the warmth is aggressive.", evidence: "fierce warmth", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The simile compares the heat to a hot oven, making it uncomfortable and suffocating.", evidence: "like breath from an oven", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "‘Breath’ personifies the pavement, making the heat feel alive and invasive.", evidence: "breath", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The domestic image is familiar, helping the reader feel the discomfort immediately.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Astonishingly cheap’ presents trees as great value.", evidence: "astonishingly cheap", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Soak up rainwater’ suggests trees solve flooding.", evidence: "soak up rainwater", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Cut them down to widen roads’ shows councils' misguided priorities.", evidence: "cut them down to widen roads", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "‘Lower stress and better health’ appeals to personal benefit.", evidence: "lower stress and better health", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Quotations are embedded and fluent.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Explanations identify the effect on the reader for each quotation.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correctly identifies purpose as persuading or arguing.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Embeds a short quotation accurately.", evidence: "The choice, surely, is obvious", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Explains how the quotation serves the purpose.", marks: 1, markCode: "AO2" },
            ],
            levels: EV_LEVELS,
            finalAnswer: "(a) ‘hoards’, ‘fierce’. (b) The simile likens hot pavement to oven air; ‘breath’ personifies it, making the heat suffocating. (c) Quotations show value (‘astonishingly cheap’), flood control (‘soak up rainwater’), foolish councils (‘cut them down to widen roads’) and health (‘lower stress’). (d) The writer aims to persuade, closing with the confident ‘The choice, surely, is obvious’, which invites agreement.",
            commonErrors: ["Using whole sentences as quotations.", "Not explaining the effect of each quotation."],
          },
        },
      ],
    },
  ],
};
