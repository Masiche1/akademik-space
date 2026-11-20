import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

// Builds a level-based scheme whose top band equals the marks available.
const levels = (top: number, focus: string, part?: string): MarkLevel[] => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k: number) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen evidence`,
    `Thorough ${focus}; well-chosen, effective references`,
    `Clear, relevant ${focus}; appropriate references`,
    `Some understanding; ${focus} is partly developed with some relevant references`,
    `Simple, limited ${focus}; few or unselective references`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const TWO_TEXTS: TextExtract = {
  title: "Two accounts of the first day on a Himalayan trek",
  author: "Written for Akademik Space",
  source: "Text A: original travel diary; Text B: original magazine feature",
  lineNumbers: true,
  text:
    "TEXT A: from a travel diary\n\nDay one. I have never been so tired, and I have never been so happy. The path rose in front of us like a staircase built for giants, and by noon my legs were trembling. Our guide, Pasang, walked ahead at a pace so steady it seemed insulting. 'Slowly, slowly,' he kept saying, 'the mountain is not going anywhere.' By the time we reached the tea house, I could barely lift my cup. But when the clouds drew back from the peaks I forgot every blister and simply stared, open-mouthed, like a child at a firework display.\n\nTEXT B: from a magazine feature\n\nTrekking in the Himalayas is promoted as a life-changing adventure. For the thousands of visitors who arrive each season, it is also a major source of income for mountain villages. Yet the rising tide of walkers brings problems: overcrowded tea houses, rubbish along the trails and a growing strain on scarce water supplies. Local guides report that some visitors expect comfort at any price. 'They want the wilderness,' says one guide, 'but they also want a hot shower.' Tourism, it seems, is both the lifeline and the burden of these communities.",
};

const SPEECH: TextExtract = {
  title: "On Leaving the Island",
  author: "Written for Akademik Space",
  source: "Original travel essay",
  lineNumbers: true,
  text:
    "I had expected the ferry to feel like an ending. Instead it felt like a door left ajar. The island shrank behind us until it was a smudge, then a rumour, then nothing but a sky slightly paler on one side. The other passengers drifted indoors to the café, where a machine hissed out coffee that tasted of the cup. I stayed on deck, gripping the rail, unable to explain why my eyes stung.\n\nFor three weeks I had complained about everything: the dust, the heat, the bus that arrived when it chose. Now each complaint turned to a small, bright coin I had spent without noticing. A woman had given me figs from her own tree and refused payment. A boy had walked me twenty minutes to a shop that turned out to be shut, and he apologised as though he had shut it himself. I had not known how much I was being given until the distance began to count it out.",
};

export const lesson13: Lesson = {
  id: "el11-u1-lesson-1-3",
  code: "1-3",
  title: "Evaluative Comparison and Section A Exam Technique",
  goal: "I CAN compare two texts perceptively and evaluate a writer's success, and manage my time across a full Section A paper.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO3", "4EA1 AO1"],
  vocabulary: [
    { term: "Comparison", definition: "Exploring similarities and differences between texts in ideas, attitudes and methods." },
    { term: "Comparative connective", definition: "A word or phrase such as 'whereas', 'similarly' or 'in contrast' that links two texts in the same sentence." },
    { term: "Evaluate", definition: "Make a judgement about how successful or effective something is, supported by evidence." },
    { term: "Perspective", definition: "The point of view from which a text is written, shaped by the writer's experience and purpose." },
    { term: "Synthesis", definition: "Combining ideas from more than one text into a single, coherent response." },
    { term: "Timing plan", definition: "A set division of exam minutes between reading, planning and writing for each question." },
  ],
  concepts: [
    {
      id: "el11-u1-evaluative-comparison",
      title: "Evaluative comparison",
      skill: "Compare the ideas and methods of two texts in an integrated way and judge their effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Integrated, not separate",
            body: "A comparison answer is not two mini-essays stuck together. Each paragraph should deal with one **idea or method** and move between Text A and Text B using comparative connectives. Instead of 'Text A is joyful. Text B is critical.', write 'Whereas Text A presents the trek through the personal delight of 'like a child at a firework display', Text B adopts a detached, analytical voice that foregrounds the cost to local communities.'",
          },
          {
            heading: "Compare both ideas and methods",
            body: "Strong answers compare **what** each writer says (ideas, attitudes, perspectives) and **how** they say it (voice, structure, language, tone). Start from the difference or similarity of purpose, such as a private reflection against public reportage, and let this guide your choice of methods. The most perceptive responses notice subtle similarities as well as obvious differences.",
          },
          {
            heading: "Evaluating success",
            body: "Evaluation means judging. Say how effectively a writer achieves their purpose and why: Is the personal voice more persuasive than facts? Does the structure build or undermine the reader's sympathy? Use judgement verbs such as 'convincingly', 'less successfully' and 'undermines', but always justify with a quotation.",
          },
        ],
        keyFormulas: [
          { name: "Comparative connectives", statement: "Whereas, while, similarly, likewise, in contrast, by comparison, both writers, unlike." },
          { name: "Comparison paragraph", statement: "Make a link point, then Text A evidence and effect, then Text B evidence and effect, then a short judgement." },
          { name: "Evaluation", statement: "A reasoned judgement of how well a method serves the writer's purpose." },
        ],
        workedExample: {
          problem: "Compare how the writers of Text A and Text B present their attitudes to the trek.",
          solution: "Both writers recognise the power of the mountains, but they differ sharply in attitude. Text A is intimate and rapturous: the writer's exhaustion ('I could barely lift my cup') is overwhelmed by wonder as she stares 'like a child at a firework display', where the simile suggests an uncomplicated, almost innocent delight. By contrast, Text B adopts a measured, journalistic voice, listing 'overcrowded tea houses, rubbish along the trails' to expose the hidden costs of the trek. Whereas Text A's diary form and short opening declaration invite empathy, Text B's balanced final sentence, 'both the lifeline and the burden', gives a considered verdict. Together they show that the same experience can be a source of personal joy and a social problem; the diary is more emotionally engaging, but the feature is the more persuasive about wider consequences.",
        },
      },
      questions: [
        {
          id: "el11-u1-evaluative-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TWO_TEXTS,
          stem: "Which statement best describes a difference between the two texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text A is a personal, emotional account, whereas Text B is a detached, informative feature." },
              { id: "b", text: "Text A criticises the trek, whereas Text B celebrates it." },
              { id: "c", text: "Text A is written for local people and Text B is written for tourists." },
              { id: "d", text: "Both texts are written in the first person." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparing purpose and voice", statement: "Start comparison from the writer's purpose and voice." }],
            steps: [{ reasoning: "Text A uses 'I' and emotion; Text B is reportage with third-person statistics and quotations.", evidence: "I have never been so tired, and I have never been so happy", marks: 1, markCode: "AO3" }],
            finalAnswer: "**(a)** Text A is personal and emotional; Text B is detached and informative.",
            commonErrors: ["Reversing the attitudes of the two texts (b).", "Assuming both use the first person (d), when only Text A does."],
          },
        },
        {
          id: "el11-u1-evaluative-comparison-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: TWO_TEXTS,
          stem: "Compare how the two writers present the mountain guides. Use a short quotation from each text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Integrated comparison", statement: "Use a connective and evidence from both texts within one point." }],
            steps: [
              { reasoning: "Text A presents Pasang as calm, steady and wise; his repeated 'Slowly, slowly' and the proverb-like line show a patient guide.", evidence: "the mountain is not going anywhere", marks: 1, markCode: "AO1" },
              { reasoning: "Text B presents guides as observers who must meet visitors' demands, quoted with a wry comment.", evidence: "they also want a hot shower", marks: 1, markCode: "AO1" },
              { reasoning: "Makes a comparative link: in A the guide is a source of wisdom and reassurance, whereas in B he is a commentator who exposes visitor expectations.", marks: 1, markCode: "AO3" },
              { reasoning: "Explains the effect of the difference: A makes the guide admirable through the writer's affection, B gives him authority as an informed voice.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "In Text A, Pasang is a patient, almost philosophical figure ('the mountain is not going anywhere'), whereas in Text B guides are practical observers who wryly comment on tourists who 'also want a hot shower'. A creates affection; B gives credible local testimony.",
            commonErrors: ["Writing about Text A then Text B in two separate blocks.", "Quoting from only one text."],
          },
        },
        {
          id: "el11-u1-evaluative-comparison-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TWO_TEXTS,
          stem: "Compare how the writers of Text A and Text B use language and structure to convey their different attitudes to the Himalayan trek. Support your answer with evidence from both texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing methods", statement: "Compare voice, language and structure, linking each to the writers' purposes." },
              { kind: "technique", name: "Simile and semantic field", statement: "A child-like simile contrasts with a lexical field of problems." },
            ],
            steps: [
              { reasoning: "A's personal, confessional opening with antithesis conveys emotional intensity, in contrast to B's impersonal, promotional opening that is then undercut.", evidence: "I have never been so tired, and I have never been so happy", marks: 2, markCode: "AO3" },
              { reasoning: "A's imagery (staircase for giants, firework display) creates awe and playfulness; B's list of nouns conveys problems and strain.", evidence: "rising tide of walkers", marks: 2, markCode: "AO3" },
              { reasoning: "Structure: A moves from fatigue to wonder, ending on joy; B moves from praise to problems to a balanced verdict, so the reader's response changes direction.", evidence: "both the lifeline and the burden", marks: 2, markCode: "AO2" },
              { reasoning: "Evaluates: A succeeds in engaging emotion; B succeeds in informing, and each is effective for its own audience and purpose.", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "Text A uses a personal voice, antithesis and playful imagery to create joy; Text B uses a detached voice, lists and a balanced conclusion to expose costs. Both are effective for their purposes: one moves, the other informs.",
            levels: levels(8, "comparison of ideas and methods"),
            commonErrors: ["Treating the texts separately.", "Writing only about ideas and neglecting methods.", "Comparing without evidence from both texts."],
          },
        },
        {
          id: "el11-u1-evaluative-comparison-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: TWO_TEXTS,
          stem: "Read Text A and Text B.",
          parts: [
            { label: "a", prompt: "From Text B, give two problems caused by the rising number of trekkers.", marks: 2 },
            { label: "b", prompt: "Explain the writer's attitude in Text A towards the trek's challenges.", marks: 4 },
            { label: "c", prompt: "Evaluate how convincing the final sentence of Text B is as a conclusion to the feature.", marks: 4 },
            { label: "d", prompt: "Compare the writers' different perspectives on the trek, and evaluate which text presents its view more effectively. Support your answer with evidence from both texts.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Pick precise, relevant details from the stated text." },
              { kind: "skill", name: "Evaluation", statement: "Judge effectiveness and justify the judgement with evidence." },
              { kind: "skill", name: "Comparison", statement: "Integrate both texts in each point and give a reasoned overall judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Overcrowded tea houses.", evidence: "overcrowded tea houses", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Rubbish on the trails or strain on water supplies.", evidence: "rubbish along the trails", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She accepts the challenges with good humour: the exaggerating simile of 'a staircase built for giants' makes difficulty comic rather than daunting.", evidence: "a staircase built for giants", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'trembling' legs and inability to lift a cup show honest struggle.", evidence: "I could barely lift my cup", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The contrast 'But when the clouds drew back' shows that the reward outweighs the pain.", evidence: "I forgot every blister", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Overall attitude: exhausted but joyful and humbled; the challenge adds to the pleasure.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The sentence offers a balanced paradox in which tourism is both 'lifeline' and 'burden', summing up the feature's tension.", evidence: "both the lifeline and the burden", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "'it seems' is tentative and avoids judging, which gives a fair-minded tone but might feel inconclusive.", evidence: "it seems", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The metaphors are memorable and neat, supported by the evidence given earlier.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Evaluative judgement: convincing because it reflects both sides, though it offers no solution.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Compares perspectives: A is a personal, emotional insider's view of a visitor; B is an outsider's wide view of the social cost.", evidence: "like a child at a firework display", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Compares methods: first-person diary and imagery against third-person reportage, lists and the guide's quotation.", evidence: "'They want the wilderness,' says one guide", marks: 3, markCode: "AO3" },
              { part: "d", reasoning: "Notes similarity: both acknowledge the mountains' power and the human response to them.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Evaluates which is more effective and why, with justification (for example B because evidence supports its claims, or A because emotion persuades).", marks: 3, markCode: "AO3" },
            ],
            finalAnswer: "(a) Overcrowded tea houses; rubbish on the trails (or strain on water). (b) She welcomes the challenges: exaggeration and humour ('a staircase built for giants') make the climb a shared adventure, and the wonder at the end outweighs the blisters. (c) The sentence is convincing because the paradox neatly sums up the feature's evidence, though 'it seems' leaves it tentative. (d) Text A offers a personal, emotive account, Text B a balanced informative one; B is arguably more effective in persuading the reader to consider consequences, while A is more moving.",
            levels: [...levels(10, "comparison and evaluation", "d")],
            commonErrors: ["In (c) summarising rather than evaluating.", "In (d) writing about each text in separate blocks.", "Giving a verdict without evidence."],
          },
        },
      ],
    },
    {
      id: "el11-u1-section-a-technique",
      title: "Exam technique and timing for Section A",
      skill: "Plan time, read the question carefully and write focused answers that match the marks available.",
      lesson: {
        sections: [
          {
            heading: "Match effort to marks",
            body: "A rough rule is about a minute and a half per mark in a reading paper, including reading time. A 2-mark retrieval question needs two short points and no analysis; a 12-mark analysis question needs a developed argument. Spending ten minutes on a retrieval question costs marks later.",
          },
          {
            heading: "Read the question twice",
            body: "Underline the command word (explain, analyse, compare, evaluate), the focus (attitude, language, structure) and the lines to use. Answers that stray outside the specified section or ignore the focus lose marks even if well written. Annotate the text first: circle two or three striking words, bracket the shifts and mark contrasts.",
          },
          {
            heading: "Plan briefly and check",
            body: "For extended answers, take two minutes to plan three points and the best quotation for each. Leave two minutes at the end to reread, correct slips, and add a missing effect. Write in a focused style: short quotations, embedded in your own sentences, and precise verbs of analysis.",
          },
        ],
        keyFormulas: [
          { name: "Command words", statement: "Identify and retrieve require facts; explain requires inference; analyse requires methods and effects; compare requires links; evaluate requires a judgement." },
          { name: "Timing guide", statement: "Roughly 1.5 minutes per mark, with a short plan for 8 marks and above." },
          { name: "Embedded quotation", statement: "A short quotation built into your own sentence: the writer describes the ferry as 'a door left ajar'." },
        ],
        workedExample: {
          problem: "You have 15 minutes for a 10-mark question on 'On Leaving the Island': 'How does the writer present the narrator's feelings as the ferry leaves?' Plan your answer.",
          solution: "Underline 'how', 'narrator's feelings' and 'as the ferry leaves'. Annotate: 'door left ajar', 'smudge, then a rumour, then nothing', 'unable to explain why my eyes stung'. Plan three points: (1) ambiguity of feeling: 'a door left ajar' suggests openness and unfinished business rather than a clean ending; (2) the fading island, a three-stage list from 'smudge' to 'rumour' to 'nothing', shows memory dissolving and loss; (3) the narrator's isolation on deck against the coffee-drinking passengers and her unexplained tears show feelings that are deep but not yet understood. Write about 12 minutes, using the plan, then check quotations and spelling in the last two minutes.",
        },
      },
      questions: [
        {
          id: "el11-u1-section-a-technique-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A question asks you to 'explain' how a writer feels about a place. Which approach best matches this command word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say what the writer feels and support it with a short quotation, explaining what it suggests" },
              { id: "b", text: "Copy out the most relevant sentence from the text" },
              { id: "c", text: "List every language technique in the extract" },
              { id: "d", text: "Retell the events of the extract in order" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Command words", statement: "Explain requires a point, evidence and development of what the evidence suggests." }],
            steps: [{ reasoning: "'Explain' asks for reasons and inference, not copying, listing or retelling.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** State the feeling, support it with a short quotation and explain what it suggests.",
            commonErrors: ["Treating 'explain' as 'retrieve' (b).", "Treating every question as a language-technique hunt (c)."],
          },
        },
        {
          id: "el11-u1-section-a-technique-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: SPEECH,
          stem: "Read the first paragraph. Explain what the phrase 'a door left ajar' suggests about the narrator's feelings. Use a quotation from the extract in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "A door left ajar is an image of incompleteness and possibility." }],
            steps: [
              { reasoning: "Suggests the leaving is not final; some connection remains, giving a sense of unfinished business.", evidence: "a door left ajar", marks: 1, markCode: "AO1" },
              { reasoning: "Contrasts with the expected 'ending', signalling that her feelings surprise her.", evidence: "I had expected the ferry to feel like an ending", marks: 1, markCode: "AO1" },
              { reasoning: "Links to later detail showing that her emotions are unresolved: she cannot explain the sting in her eyes.", evidence: "unable to explain why my eyes stung", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the effect: ambiguity makes the narrator thoughtful and vulnerable and invites sympathy.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The metaphor 'a door left ajar' suggests the narrator has not fully left the island behind: she expected a clean ending, but the image of a door slightly open implies lingering connection and possibility, confirmed when she is 'unable to explain why my eyes stung'.",
            commonErrors: ["Simply saying 'it means she is sad'.", "Misreading 'ajar' as locked or slammed."],
          },
        },
        {
          id: "el11-u1-section-a-technique-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SPEECH,
          stem: "How does the writer present the narrator's change of attitude towards the island? You should use evidence from the whole extract, and plan your answer in 2 minutes before writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Choose three points and the best quotation for each before writing." },
              { kind: "technique", name: "Extended metaphor", statement: "Complaints become 'small, bright coins', treating memory as treasure." },
            ],
            steps: [
              { reasoning: "Early complaints show her original impatient attitude: a list of irritations.", evidence: "the dust, the heat, the bus that arrived when it chose", marks: 2, markCode: "AO1" },
              { reasoning: "The metaphor of complaints as coins spent 'without noticing' presents her regret and new valuing of the experience.", evidence: "a small, bright coin I had spent without noticing", marks: 2, markCode: "AO2" },
              { reasoning: "Anecdotes of generosity (figs; the boy) reveal what she had overlooked, with the boy's apology adding humour and tenderness.", evidence: "he apologised as though he had shut it himself", marks: 2, markCode: "AO2" },
              { reasoning: "Structure: the three-stage fading of the island and final reflection show attitude shifting from irritation to gratitude as distance grows.", evidence: "until the distance began to count it out", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The narrator moves from irritation to gratitude. Her list of complaints is replaced by the coin metaphor, which turns grievances into lost riches, and the acts of kindness she remembers, ending with distance that 'count[s] it out'.",
            levels: levels(8, "analysis of change in attitude"),
            commonErrors: ["Retelling the extract in order.", "Writing about the first paragraph only.", "No plan, leading to a rambling answer."],
          },
        },
        {
          id: "el11-u1-section-a-technique-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: SPEECH,
          stem: "This is a full Section A style sequence on 'On Leaving the Island'. You have 35 minutes: allow about 3 for (a), 6 for (b), 10 for (c) and 16 for (d), including planning.",
          parts: [
            { label: "a", prompt: "In the first paragraph, give two things the other passengers do or have.", marks: 2 },
            { label: "b", prompt: "Explain how the writer shows the narrator's feelings about the island in the second paragraph.", marks: 4 },
            { label: "c", prompt: "How does the writer use language to present the narrator's emotions in the extract? Support your answer with evidence.", marks: 9 },
            { label: "d", prompt: "Evaluate how successfully the writer uses structure to show the change in the narrator's feelings from the beginning to the end of the extract.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timing", statement: "Give each part time in proportion to its marks and leave minutes to check." },
              { kind: "technique", name: "Pathetic fallacy and sensory detail", statement: "The atmospheric images of the vanishing island and the coffee reveal mood." },
              { kind: "skill", name: "Evaluation of structure", statement: "Judge how effectively the order and shape of the text shape reader response." },
            ],
            steps: [
              { part: "a", reasoning: "They drift indoors.", evidence: "drifted indoors to the café", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "They have (or drink) coffee from the machine.", evidence: "a machine hissed out coffee", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She now values what she complained about: complaints become 'small, bright coins'.", evidence: "small, bright coin", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The kindness of strangers is shown through the figs given freely.", evidence: "refused payment", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The boy's apology implies warm, humble people she has underestimated.", evidence: "he apologised as though he had shut it himself", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The closing sentence suggests regret and realisation: she had not known the value until she was leaving.", evidence: "I had not known how much I was being given", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The door metaphor and fading list ('smudge, then a rumour, then nothing') capture loss and uncertainty.", evidence: "a smudge, then a rumour, then nothing", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The sensory contrast between hissing coffee that 'tasted of the cup' and her outdoor isolation shows she is out of step with shallow comfort.", evidence: "tasted of the cup", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Verbs such as 'gripping' and the physical 'stung' reveal controlled emotion that she cannot explain.", evidence: "gripping the rail", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Opening with an expectation of ending followed by a subversion, giving a reflective frame.", evidence: "I had expected the ferry to feel like an ending", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The structure moves from the physical departure to memory in the second paragraph, a shift from present to past that turns complaint into gratitude.", evidence: "For three weeks I had complained about everything", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The ending returns to the sea imagery and to distance counting out gifts, which is effective because the emotional realisation arrives late, just as the island is lost.", evidence: "until the distance began to count it out", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Evaluates: the structure is successful because it mimics the way regret grows, though the shift is signposted early with 'door left ajar'.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "(a) They drift indoors to the cafe; they have machine coffee. (b) She now values what she had complained about: complaints become 'small, bright coins', and the kindness of the fig woman and the apologising boy show the generosity she missed. (c) The writer uses metaphor, fading imagery and sensory contrast to show unresolved emotion. (d) The text is structured as a movement from departure to memory to realisation, and the late arrival of the insight is successful because it mirrors the way regret grows with distance.",
            levels: [...levels(9, "analysis of language", "c"), ...levels(10, "evaluation of structure", "d")],
            commonErrors: ["Overwriting (a) and underwriting (d).", "Language analysis in (d) instead of structure.", "Judging success without evidence."],
            examinerNote: "Part (c) is marked in three bands of 3 marks each.",
          },
        },
      ],
    },
  ],
};
