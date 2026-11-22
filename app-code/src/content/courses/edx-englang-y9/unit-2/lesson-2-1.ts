import type { Lesson, TextExtract } from "../../../types.ts";

const ALPINE_PASS: TextExtract = {
  title: "Over the Pass",
  author: "Written for Akademik Space",
  source: "Original travel writing in the style of a Victorian traveller's journal",
  text: "We left the inn at Andermatt a little after five, while the valley was still full of a cold blue shadow, and began the long ascent on foot. The mule-driver, a taciturn Swiss with a face like weathered oak, walked ahead of us and spoke only to his animals, whom he addressed with a tenderness he did not extend to his passengers.\n\nBy eight o'clock the sun had cleared the eastern ridge and the whole mountainside took fire. I confess that I had come to the Alps in a spirit of mild scepticism, having read a great many raptures upon them and suspecting most of the authors of exaggeration. I now withdraw my suspicions. There are sights which cannot be exaggerated, because the language does not contain words large enough to begin.\n\nThe path, however, was another matter. It was little more than a ledge of loose stone, and at one point it narrowed so alarmingly that my companion, a sturdy clergyman who had boasted of his head for heights, shut his eyes and proceeded for a hundred yards on the strength of prayer alone. I did not laugh, for I was gripping the mule's bridle with a force that left marks upon my palm.\n\nAt the summit we sat on a flat rock and ate bread and cold mutton. Below us lay the country we had left, small and bright and orderly, like a map spread on a table; and I understood for the first time why travellers will endure so much discomfort to be, for a single hour, so far above the common world.",
};

export const lesson21: Lesson = {
  id: "el9-u2-lesson-2-1",
  code: "2-1",
  title: "Meaning and Attitude in Non-fiction",
  goal: "I CAN distinguish explicit from implicit meaning in a non-fiction text and identify and explain the writer's attitude.",
  standards: ["KS3 Reading", "AO1"],
  vocabulary: [
    { term: "Explicit meaning", definition: "Information stated directly in the text." },
    { term: "Implicit meaning", definition: "Ideas suggested or hinted at but not stated directly." },
    { term: "Attitude", definition: "The writer's feelings and opinions about their subject." },
    { term: "Tone", definition: "The mood or feeling a writer's choice of words conveys, such as wry, admiring or critical." },
    { term: "Scepticism", definition: "A doubtful attitude, a tendency to question whether claims are true." },
    { term: "Understatement", definition: "Deliberately describing something as less significant than it is, often for humour or irony." },
    { term: "Taciturn", definition: "Saying very little; reserved in speech." },
  ],
  concepts: [
    {
      id: "el9-u2-explicit-implicit-meaning",
      title: "Explicit and implicit meaning",
      skill: "Separate what a non-fiction text states from what it implies, and support each with evidence.",
      lesson: {
        sections: [
          {
            heading: "Reading the surface and beneath it",
            body: "Non-fiction does not just state facts; it also suggests ideas. **Explicit** meaning is what the writer tells you outright: 'We left the inn at Andermatt a little after five.' **Implicit** meaning is what you work out from word choice and detail: the mule-driver speaks 'only to his animals', which implies he is reserved, perhaps unfriendly, but gentle with animals. Retrieval questions ask for the first; inference questions need the second.",
          },
          {
            heading: "How to answer inference questions",
            body: "Find the relevant part of the text, select a short quotation, then say what it **suggests** and why. Avoid simply paraphrasing. Instead of 'the path was narrow', write: 'the path \"narrowed so alarmingly\" which implies real danger, and the adverb \"alarmingly\" shows the writer's fear.' Using verbs such as 'implies', 'suggests' and 'hints' shows you are inferring.",
          },
        ],
        keyFormulas: [
          { name: "Explicit meaning", statement: "Stated directly; retrieve it accurately." },
          { name: "Implicit meaning", statement: "Suggested by word choice or detail; infer and explain it." },
          { name: "Inference sentence", statement: "Quotation + 'suggests/implies' + what it tells us + why." },
        ],
        workedExample: {
          problem: "What does the writer imply about the clergyman in the third paragraph?",
          solution: "The clergyman had 'boasted of his head for heights', yet on the narrow path he 'shut his eyes' and relied on 'prayer alone'. This implies that his confidence was exaggerated and that he is in fact frightened. The humorous phrase 'on the strength of prayer alone' gently mocks the gap between his boasting and his behaviour, while the narrator's remark 'I did not laugh' shows kindness, since he too is afraid.",
        },
      },
      questions: [
        {
          id: "el9-u2-explicit-implicit-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ALPINE_PASS,
          stem: "Which of these is explicitly stated in the first paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mule-driver disliked the travellers" },
              { id: "b", text: "The ascent was too dangerous to attempt" },
              { id: "c", text: "The travellers were short of money" },
              { id: "d", text: "The travellers left the inn at about five o'clock" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Retrieval", statement: "Explicit information can be found stated directly in the text." }],
            steps: [{ reasoning: "The first sentence states the time of departure directly.", evidence: "a little after five", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** The text states they left 'a little after five'. The other options are not stated, or only vaguely implied.",
            commonErrors: ["Choosing (b) because the driver is 'taciturn', but dislike is not stated."],
          },
        },
        {
          id: "el9-u2-explicit-implicit-meaning-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ALPINE_PASS,
          stem: "What does the description of the mule-driver in the first paragraph imply about him? Use quotations in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference", statement: "Explain what a detail suggests, not just what it says." },
              { kind: "skill", name: "Embedding quotations", statement: "Use short quotations within your sentences." },
            ],
            steps: [
              { reasoning: "He is reserved and unsociable with people: 'taciturn' and 'spoke only to his animals'.", evidence: "spoke only to his animals", marks: 1, markCode: "AO1" },
              { reasoning: "His 'face like weathered oak' implies he is tough, hardened by years outdoors.", evidence: "a face like weathered oak", marks: 1, markCode: "AO1" },
              { reasoning: "He treats animals with 'tenderness' he does not extend to passengers, implying a caring side but a preference for animals over people.", evidence: "a tenderness he did not extend to his passengers", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The driver is reserved and tough, 'taciturn' with a 'face like weathered oak', yet gentle with his animals; he seems to prefer them to his passengers.",
            commonErrors: ["Saying he is 'mean' without supporting it.", "Lifting whole sentences."],
          },
        },
        {
          id: "el9-u2-explicit-implicit-meaning-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ALPINE_PASS,
          stem: "What do you learn about the writer's feelings during the journey? Use the third and fourth paragraphs. Support your points with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference", statement: "Show what details suggest about a writer's feelings." },
              { kind: "technique", name: "Understatement and humour", statement: "Gentle humour reveals the writer's self-awareness." },
            ],
            steps: [
              { reasoning: "He is frightened on the narrow path: he grips the mule's bridle hard.", evidence: "gripping the mule's bridle with a force that left marks upon my palm", marks: 2, markCode: "AO1" },
              { reasoning: "He is considerate: he does not laugh at the clergyman, perhaps from fellow-feeling.", evidence: "I did not laugh", marks: 1, markCode: "AO1" },
              { reasoning: "At the summit he feels awe and perspective: the lands below are 'small and bright and orderly'.", evidence: "small and bright and orderly, like a map spread on a table", marks: 1, markCode: "AO1" },
              { reasoning: "He feels the effort is worthwhile: he 'understood for the first time' why travellers endure discomfort.", evidence: "I understood for the first time", marks: 1, markCode: "AO1" },
              { reasoning: "Shows development from fear to exhilaration, giving a rounded picture.", marks: 1, markCode: "AO1" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen inferences about the writer's feelings across both paragraphs, supported by evidence." },
              { level: "Level 2", marks: "3-4", descriptor: "Some inferences with some relevant evidence." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments, mostly paraphrase." },
            ],
            finalAnswer: "The writer is frightened on the ledge, gripping the bridle hard enough to mark his palm, yet sympathetic to the clergyman ('I did not laugh'). At the summit he feels awe and understanding: the world below is 'small and bright and orderly', which makes the discomfort worthwhile.",
            commonErrors: ["Retelling the climb.", "Writing about the clergyman's feelings instead of the writer's."],
          },
        },
        {
          id: "el9-u2-explicit-implicit-meaning-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: ALPINE_PASS,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two things the writer explicitly says he did at the summit.", marks: 2 },
            { label: "b", prompt: "What does the writer imply about his attitude to other travellers' accounts of the Alps in the second paragraph?", marks: 4 },
            { label: "c", prompt: "How does the writer show the difference between the sight of the mountains and the difficulty of the path? Refer to specific words and phrases.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select explicit details accurately." },
              { kind: "technique", name: "Contrast", statement: "Opposing descriptions of beauty and danger highlight both." },
              { kind: "technique", name: "Hyperbole as sincere praise", statement: "Exaggeration used to show the writer's real sense of awe." },
            ],
            steps: [
              { part: "a", reasoning: "He sat on a flat rock.", evidence: "sat on a flat rock", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He ate bread and cold mutton.", evidence: "ate bread and cold mutton", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He began sceptical: he suspected the authors of exaggeration.", evidence: "suspecting most of the authors of exaggeration", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Mild scepticism' shows he was not hostile but doubtful, proud of his own judgement.", evidence: "a spirit of mild scepticism", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He changes his mind: 'I now withdraw my suspicions'.", evidence: "I now withdraw my suspicions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The formal phrasing is wryly humorous, as if he is retracting a legal claim, showing self-aware honesty.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The mountains: 'the whole mountainside took fire' uses a metaphor of dawn light as flame, giving grandeur and energy.", evidence: "the whole mountainside took fire", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The inexpressibility claim, 'the language does not contain words large enough', conveys awe through hyperbole.", evidence: "the language does not contain words large enough to begin", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The path: 'a ledge of loose stone' and 'narrowed so alarmingly' emphasise danger through blunt, plain language that contrasts with the grand tone of the mountains.", evidence: "a ledge of loose stone", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The comic image of the clergyman proceeding 'on the strength of prayer alone' uses humour to deflate the drama.", evidence: "on the strength of prayer alone", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The contrast shows sublime beauty is inseparable from fear, so the experience is more intense.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "9-10", descriptor: "Perceptive, discriminating analysis of both the mountains and the path, with assured use of quotations." },
              { part: "c", level: "Level 4", marks: "7-8", descriptor: "Thorough analysis; well-chosen quotations with developed comment." },
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis of both sides of the contrast." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding; some relevant references." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
            ],
            finalAnswer: "(a) He sat on a flat rock and ate bread and cold mutton. (b) He was mildly sceptical, suspecting other writers of exaggeration, but the wry 'I now withdraw my suspicions' shows he has changed his mind and can laugh at himself. (c) The mountain is grand ('took fire', words not 'large enough'); the path is plain and dangerous ('ledge of loose stone', 'narrowed so alarmingly') with comic relief in the clergyman; the contrast shows beauty and fear intensify each other.",
            commonErrors: ["Describing only the mountains.", "Treating the clergyman's prayer as only serious.", "Copying long quotations."],
          },
        },
      ],
    },
    {
      id: "el9-u2-writers-attitude",
      title: "The writer's attitude",
      skill: "Identify the writer's attitude to a subject and explain how word choice and tone reveal it.",
      lesson: {
        sections: [
          {
            heading: "Spotting attitude through tone",
            body: "A writer's **attitude** is their feeling about the subject: admiring, critical, nostalgic, amused, disappointed. It is revealed through **tone**, which comes from word choice. Positive connotations (radiant, graceful) suggest admiration; negative ones (squalid, grim) suggest criticism. Notice where tone shifts: 'I had come in a spirit of mild scepticism ... I now withdraw my suspicions' shows a change from doubt to admiration.",
          },
          {
            heading: "Explaining attitude with evidence",
            body: "Name the attitude precisely: 'admiring', 'wry', 'frustrated' are stronger than 'good' or 'bad'. Then prove it with a quotation and zoom in on the key word. Remember that writers can have mixed attitudes, such as affectionate amusement or reluctant admiration, and that irony and understatement can hide a real feeling beneath a light surface.",
          },
        ],
        keyFormulas: [
          { name: "Attitude", statement: "The writer's feelings and opinions about the subject." },
          { name: "Tone", statement: "The mood conveyed by word choice, such as wry, admiring or critical." },
          { name: "Mixed attitude", statement: "A writer may feel two things at once, e.g. frightened but awed." },
        ],
        workedExample: {
          problem: "What is the writer's attitude to the mule-driver? Explain with evidence.",
          solution: "The writer's attitude is wryly observant, with a touch of gentle mockery and respect. The simile 'a face like weathered oak' respects the man's strength and resilience, but the observation that he shows animals 'a tenderness he did not extend to his passengers' is dryly humorous, hinting that the writer feels slightly overlooked. The tone is amused rather than angry, as 'taciturn' is a neutral descriptive word and not an insult.",
        },
      },
      questions: [
        {
          id: "el9-u2-writers-attitude-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ALPINE_PASS,
          stem: "Which word best describes the writer's attitude to the view from the summit in the last paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Awed" },
              { id: "b", text: "Resentful" },
              { id: "c", text: "Confused" },
              { id: "d", text: "Bored" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Positive, elevated language signals admiration." }],
            steps: [{ reasoning: "He understands why travellers 'endure so much discomfort' for the sight, showing awe.", evidence: "so far above the common world", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Awed: the view is worth the discomfort and lifts him 'above the common world'.",
            commonErrors: ["Choosing (d) because he says he 'understood for the first time', which shows clarity, not confusion."],
          },
        },
        {
          id: "el9-u2-writers-attitude-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ALPINE_PASS,
          stem: "In the second paragraph, how does the writer's attitude to the Alps change? Use quotations in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Shift in tone", statement: "A change of attitude within a passage." },
              { kind: "skill", name: "Embedding quotations", statement: "Use short quotations within sentences." },
            ],
            steps: [
              { reasoning: "He begins doubtful and suspicious about other writers' claims.", evidence: "a spirit of mild scepticism", marks: 1, markCode: "AO1" },
              { reasoning: "He is converted by the view itself: 'I now withdraw my suspicions'.", evidence: "I now withdraw my suspicions", marks: 1, markCode: "AO1" },
              { reasoning: "He ends in admiration, claiming no words are 'large enough' for what he sees.", evidence: "words large enough to begin", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "He begins with 'mild scepticism' about exaggerated accounts, but is won over: 'I now withdraw my suspicions', and he ends in awe, saying language has no 'words large enough'.",
            commonErrors: ["Describing only the final attitude.", "Not using any quotation."],
          },
        },
        {
          id: "el9-u2-writers-attitude-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ALPINE_PASS,
          stem: "How does the writer's tone convey humour and honesty in the third paragraph? Support your answer with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Wry understatement", statement: "Playing down serious things for humour." },
              { kind: "technique", name: "Self-deprecation", statement: "The writer gently mocks themselves." },
            ],
            steps: [
              { reasoning: "The clergyman's boast followed by shutting his eyes is gently comic; the writer notes the gap between boast and behaviour.", evidence: "who had boasted of his head for heights", marks: 1, markCode: "AO2" },
              { reasoning: "'On the strength of prayer alone' is an elevated, mock-formal phrase, humorously applied to fear.", evidence: "on the strength of prayer alone", marks: 2, markCode: "AO2" },
              { reasoning: "Honesty: the writer admits he too is afraid, gripping the bridle, rather than posing as brave.", evidence: "I did not laugh, for I was gripping the mule's bridle", marks: 2, markCode: "AO2" },
              { reasoning: "The specific detail of 'marks upon my palm' adds comic and truthful precision.", evidence: "marks upon my palm", marks: 1, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen analysis of how tone creates both humour and honesty." },
              { level: "Level 2", marks: "3-4", descriptor: "Some understanding of tone with some relevant references." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
            ],
            finalAnswer: "The humour comes from the gap between the clergyman's boast and his fear, expressed in the mock-formal 'on the strength of prayer alone'. The honesty is in the narrator admitting he too was afraid: 'I did not laugh, for I was gripping the mule's bridle'.",
            commonErrors: ["Saying the writer is cruel to the clergyman.", "Missing the writer's self-mockery."],
          },
        },
        {
          id: "el9-u2-writers-attitude-q4",
          difficulty: "challenge",
          totalMarks: 24,
          extract: ALPINE_PASS,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two words or phrases from the first paragraph which suggest the early morning is cold.", marks: 2 },
            { label: "b", prompt: "Explain what the phrase 'a tenderness he did not extend to his passengers' suggests about the writer's feelings towards the mule-driver.", marks: 4 },
            { label: "c", prompt: "The writer's attitude to the journey is entirely positive. How far do you agree? Refer to the whole extract.", marks: 18 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating attitude", statement: "Weigh evidence of positive and negative feelings to reach a judgement." },
              { kind: "technique", name: "Mixed attitude", statement: "Writers often combine admiration with fear or humour." },
              { kind: "skill", name: "Structured response", statement: "Judgement, evidence, explanation, counter-view and conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "'a cold blue shadow'.", evidence: "a cold blue shadow", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "'before the sun had cleared the ridge' implies chill (or 'still full of').", evidence: "while the valley was still full of", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It implies mild resentment: the writer feels slighted compared with the animals.", evidence: "he did not extend to his passengers", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "The dry understated humour suggests amusement rather than anger.", evidence: "a tenderness", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Positive: awe at the sunrise, 'took fire', and conversion from scepticism.", evidence: "the whole mountainside took fire", marks: 4, markCode: "AO1" },
              { part: "c", reasoning: "Positive: the summit view and the idea that travellers are right to endure discomfort.", evidence: "so far above the common world", marks: 4, markCode: "AO1" },
              { part: "c", reasoning: "Negative: the path is dangerous and frightening, and he is physically marked by fear.", evidence: "narrowed so alarmingly", marks: 4, markCode: "AO1" },
              { part: "c", reasoning: "Mild irritation or humour at the unsociable driver shows attitude is not wholly positive.", evidence: "taciturn Swiss", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Evaluative conclusion: attitude is largely positive but mixed, and the honesty about fear makes the praise more credible.", marks: 3, markCode: "AO1" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "16-18", descriptor: "Perceptive, discriminating evaluation across the extract; assured, balanced use of evidence." },
              { part: "c", level: "Level 4", marks: "13-15", descriptor: "Thorough evaluation with well-chosen evidence from across the extract." },
              { part: "c", level: "Level 3", marks: "9-12", descriptor: "Clear, relevant evaluation with appropriate evidence." },
              { part: "c", level: "Level 2", marks: "5-8", descriptor: "Some understanding of attitude with some relevant references." },
              { part: "c", level: "Level 1", marks: "1-4", descriptor: "Simple, limited comments, little evidence." },
            ],
            finalAnswer: "(a) 'a cold blue shadow'; the valley still in shadow. (b) It hints at mild resentment at being less valued than the animals, but the dry humour shows amusement. (c) I largely disagree with 'entirely': the writer is awed by the sunrise and summit and wins his scepticism over, but he is frightened on the path and mildly amused or slighted by the driver. The attitude is overall positive but honestly mixed, which makes his praise more believable.",
            commonErrors: ["Only agreeing with the statement.", "Ignoring the negative details.", "Not using the whole extract."],
          },
        },
      ],
    },
  ],
};
