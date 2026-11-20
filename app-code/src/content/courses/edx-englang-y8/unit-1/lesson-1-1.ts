import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const FERRY: TextExtract = {
  title: "The Last Ferry",
  author: "Written for Akademik Space",
  text: "The last ferry of the evening slid away from the harbour wall at ten past six. Maya stood at the rail with her rucksack at her feet and watched the lights of the town shrink to a scatter of yellow dots. A gull wheeled above the wake, screaming. Behind her, an old man in a green raincoat was feeding crusts of bread to the birds, though a sign beside him said clearly that this was forbidden.\n\nShe had told her aunt she would be on the four o'clock boat. She had not told her that she had spent two hours on the harbour bench, turning her phone over and over in her hands, unable to decide whether to ring home. Now the wind was rising, and a fine rain had begun to needle her cheeks. She zipped her jacket to the chin and tucked her hands under her arms.",
};

const LETTER: TextExtract = {
  title: "The Letter",
  author: "Written for Akademik Space",
  text: "Dev had read the letter three times before he folded it into quarters and slid it under the cushion of the sofa. In the kitchen, his mother was humming over the washing-up, a tuneless, cheerful sound that normally he found irritating. Tonight it made his stomach tighten.\n\n'Dev? Is that you? Come and have some tea.'\n\n'Not hungry,' he called. His voice came out thin and strange, like someone else's. He pulled his sleeves down over his knuckles and stared at the blank television, at his own pale reflection in the dark screen. The clock on the mantelpiece ticked on, unbothered. Somewhere above him a floorboard creaked, and he flinched as if it had been a gunshot.",
};

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant explanation of the effect of the writer's choices, supported by well-chosen references." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some understanding of the writer's choices, with some relevant references." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment with few or no references." },
];

export const lesson11: Lesson = {
  id: "el8-u1-lesson-1-1",
  code: "1-1",
  title: "Retrieval and Inference",
  goal: "I CAN find information in a fiction text and read between the lines to work out what characters think and feel.",
  standards: ["KS3 Reading", "KS3 AO1"],
  vocabulary: [
    { term: "Retrieve", definition: "To find and write down information that is stated directly in a text." },
    { term: "Explicit", definition: "Stated clearly and directly, so that nothing has to be worked out." },
    { term: "Implicit", definition: "Suggested rather than stated; the reader has to work it out." },
    { term: "Infer", definition: "To work out an idea from clues in the text." },
    { term: "Evidence", definition: "A short quotation or detail from the text that supports your point." },
    { term: "Synonym", definition: "A word with the same or a very similar meaning to another word." },
  ],
  concepts: [
    {
      id: "el8-u1-retrieving-information",
      title: "Retrieving explicit information",
      skill: "Find and select accurate details that are stated directly in a fiction extract.",
      lesson: {
        sections: [
          {
            heading: "What retrieval questions ask",
            body: "A retrieval question tests whether you can find facts the writer has stated directly. Command words include **give**, **list**, **identify** and **write down**. Read the question twice and underline the focus: if it says 'the first paragraph' or 'two details about the weather', your answer must come only from there.",
          },
          {
            heading: "Selecting and using your own words",
            body: "Keep quotations short. Copy exactly, but only the words you need. When a question asks you to answer 'in your own words', replace the writer's key words with synonyms: 'unable to decide' might become 'could not make up her mind'. Do not retell the whole passage; one clear detail earns one mark.",
          },
        ],
        keyFormulas: [
          { name: "Explicit information", statement: "Facts and details stated directly in the text, which can be retrieved without interpretation." },
          { name: "Focus words", statement: "The words in a question that tell you where to look and what to look for." },
          { name: "Own words", statement: "Rephrasing a detail using synonyms while keeping the same meaning." },
        ],
        workedExample: {
          problem: "Read the first paragraph of 'The Last Ferry'. Give two details about the old man. (2 marks)",
          solution: "Two details are stated directly: he wore 'a green raincoat', and he was 'feeding crusts of bread to the birds'. Each is a separate fact from the first paragraph, so each earns one mark. A third detail, such as the sign, is not needed, and writing more than the question asks does not earn extra credit.",
        },
      },
      questions: [
        {
          id: "el8-u1-retrieving-information-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FERRY,
          stem: "At what time did the ferry leave the harbour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four o'clock" },
              { id: "b", text: "Ten past four" },
              { id: "c", text: "Ten past six" },
              { id: "d", text: "Ten o'clock" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Retrieval", statement: "Find the detail the question asks for and check it against the text." }],
            steps: [{ reasoning: "The first sentence states that the ferry slid away 'at ten past six'.", evidence: "at ten past six", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Ten past six. The four o'clock boat is the one Maya told her aunt she would catch, which is a different detail.",
            commonErrors: ["Choosing four o'clock because it appears later in the passage, without checking what it refers to."],
          },
        },
        {
          id: "el8-u1-retrieving-information-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: FERRY,
          stem: "Read the first paragraph. Give two details about the old man.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Selecting details", statement: "One separate, accurate detail earns each mark." }],
            steps: [
              { reasoning: "He is described by what he is wearing.", evidence: "in a green raincoat", marks: 1, markCode: "AO1" },
              { reasoning: "He is described by what he is doing.", evidence: "feeding crusts of bread to the birds", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "He wore a green raincoat. He was feeding bread to the birds (accept: he was ignoring or breaking the sign that forbade it).",
            commonErrors: ["Giving two versions of the same detail, such as 'feeding bread' and 'feeding the gulls'.", "Using details about Maya instead of the old man."],
          },
        },
        {
          id: "el8-u1-retrieving-information-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: FERRY,
          stem: "Read the second paragraph. In your own words, explain what Maya had done earlier in the day and what she had not told her aunt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Own words", statement: "Replace key words with synonyms while keeping the meaning accurate." },
              { kind: "skill", name: "Synthesis", statement: "Combine separate details from one paragraph into a clear answer." },
            ],
            steps: [
              { reasoning: "She had promised to be on an earlier boat.", evidence: "she would be on the four o'clock boat", marks: 1, markCode: "AO1" },
              { reasoning: "She did not keep to that plan.", evidence: "had not told her", marks: 1, markCode: "AO1" },
              { reasoning: "She spent a long time sitting by the harbour.", evidence: "two hours on the harbour bench", marks: 1, markCode: "AO1" },
              { reasoning: "She could not decide whether to phone home.", evidence: "unable to decide whether to ring home", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Maya had said she would catch the four o'clock boat but did not. She sat on a bench by the harbour for two hours, holding her phone and unable to decide whether to call home, and she had not told her aunt any of this.",
            commonErrors: ["Copying whole sentences instead of selecting the key points.", "Adding guesses about why she did not ring home, which the question does not ask for."],
          },
        },
        {
          id: "el8-u1-retrieving-information-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: FERRY,
          stem: "Answer all parts of this question about 'The Last Ferry'.",
          parts: [
            { label: "a", prompt: "Give two details about the weather at the end of the extract.", marks: 2 },
            { label: "b", prompt: "In your own words, explain what the writer tells us about how Maya spent her time on the harbour bench.", marks: 4 },
            { label: "c", prompt: "How does the writer use details in the first paragraph to create a picture of the harbour as the ferry leaves?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval and own words", statement: "Select accurate details, then rephrase when asked." },
              { kind: "technique", name: "Sensory and visual detail", statement: "Writers choose specific sights and sounds to build a setting." },
            ],
            steps: [
              { part: "a", reasoning: "The wind is getting stronger.", evidence: "the wind was rising", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It is raining lightly.", evidence: "a fine rain had begun", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She waited for a long time, about two hours.", evidence: "two hours on the harbour bench", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "She fidgeted with her phone, undecided about contacting home.", evidence: "turning her phone over and over in her hands", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The shrinking lights show the town falling away as the ferry leaves, giving a sense of distance.", evidence: "shrink to a scatter of yellow dots", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The sound and movement of the gull add life and noise to the scene, a slightly harsh and restless note.", evidence: "A gull wheeled above the wake, screaming", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The old man ignoring the sign adds a small human detail and hints at a world of broken rules and ordinary people.", evidence: "a sign beside him said clearly that this was forbidden", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("c"),
            finalAnswer: "(a) The wind was rising; a fine rain had begun. (b) She waited about two hours and kept turning her phone over in her hands, unable to decide whether to ring home. (c) The writer picks out visual details such as the lights shrinking to 'a scatter of yellow dots', which shows the town receding, and sound and movement such as the gull 'screaming', which makes the harbour feel busy and slightly harsh. The old man ignoring the sign adds a realistic human touch.",
            commonErrors: ["In (a), describing Maya's clothing instead of the weather.", "In (c), listing details without saying what picture they create.", "Writing about the second paragraph when the question names the first."],
            examinerNote: "Part (c) rewards comment on the effect of the details, not just identification of them.",
          },
        },
      ],
    },
    {
      id: "el8-u1-inferring-feeling",
      title: "Inferring character and feeling",
      skill: "Use clues in actions, speech and description to work out what a character feels, and support the inference with evidence.",
      lesson: {
        sections: [
          {
            heading: "Reading between the lines",
            body: "Writers rarely say 'Dev was afraid'. Instead they show it through what a character does, says, notices and avoids. To **infer**, find a clue, then ask what it suggests about the character's thoughts or feelings. A good inference goes beyond the obvious: 'he hid the letter' suggests fear of someone's reaction, not just that he put it somewhere.",
          },
          {
            heading: "Point, evidence, explanation",
            body: "Build each answer in three moves. **Point**: state what the character feels. **Evidence**: embed a short quotation. **Explain**: say what the quotation suggests and which word does the work. For example: Dev is anxious. He 'pulled his sleeves down over his knuckles', which suggests he is making himself small and trying to protect himself.",
          },
        ],
        keyFormulas: [
          { name: "Inference", statement: "A reasoned conclusion about meaning, based on clues in the text." },
          { name: "Show, don't tell", statement: "Revealing feeling through actions, speech and description instead of naming the emotion." },
          { name: "PEE", statement: "Point, Evidence, Explanation: a three-step structure for a paragraph of analysis." },
        ],
        workedExample: {
          problem: "How does the writer show that Dev is nervous? (4 marks)",
          solution: "Dev is clearly nervous about the letter. The writer tells us that his mother's cheerful humming 'made his stomach tighten', which suggests a physical, sick feeling of dread. His voice 'came out thin and strange', implying that fear has made his voice weak and unlike itself. Finally, he 'flinched as if it had been a gunshot' at a creaking floorboard, which shows he is so tense that an ordinary noise feels like a threat.",
        },
      },
      questions: [
        {
          id: "el8-u1-inferring-feeling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LETTER,
          stem: "Which word best describes how Dev feels in this extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excited" },
              { id: "b", text: "Anxious" },
              { id: "c", text: "Furious" },
              { id: "d", text: "Relieved" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Combine several clues to identify a feeling." }],
            steps: [{ reasoning: "His tight stomach, thin voice and flinching all point to worry about the letter.", evidence: "it made his stomach tighten", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Anxious. Nothing in the extract suggests anger or relief, and he hides the letter rather than sharing good news.",
            commonErrors: ["Choosing 'furious' because Dev snaps 'Not hungry', which is better read as avoidance."],
          },
        },
        {
          id: "el8-u1-inferring-feeling-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LETTER,
          stem: "Dev 'slid it under the cushion of the sofa'. What does this detail suggest about how he feels about the letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He wants to hide it because he fears how his mother will react." },
              { id: "b", text: "He is saving it as a precious keepsake." },
              { id: "c", text: "He has forgotten it is important." },
              { id: "d", text: "He is angry and wants to destroy it." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference from action", statement: "Ask what an action suggests about motive." }],
            steps: [
              { reasoning: "Sliding the letter out of sight is secretive, suggesting he does not want it found.", evidence: "slid it under the cushion", marks: 1, markCode: "AO1" },
              { reasoning: "He has read it three times and his stomach tightens at his mother's voice, so the concealment links to fear of her reaction.", evidence: "read the letter three times", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** He is hiding the letter because he fears his mother's reaction. A keepsake would not be folded into quarters and hidden, and he has clearly not forgotten it.",
            commonErrors: ["Choosing 'destroy it': he hides the letter, not tears it up."],
          },
        },
        {
          id: "el8-u1-inferring-feeling-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: LETTER,
          stem: "How does the writer show that Dev is nervous? Support your answer with two quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "PEE", statement: "State a point, support it with a quotation and explain what the quotation suggests." },
              { kind: "technique", name: "Show, don't tell", statement: "Feeling is shown through physical reaction and behaviour." },
            ],
            steps: [
              { reasoning: "Point: his nerves are physical. His mother's cheerful sound now makes him feel sick with dread.", evidence: "Tonight it made his stomach tighten", marks: 1, markCode: "AO1" },
              { reasoning: "Explanation: the contrast with how he normally finds the humming merely 'irritating' shows how far his mood has changed.", evidence: "normally he found irritating", marks: 1, markCode: "AO1" },
              { reasoning: "Point and evidence: his voice and body language show fear and a wish to hide.", evidence: "pulled his sleeves down over his knuckles", marks: 1, markCode: "AO1" },
              { reasoning: "Explanation: covering his hands is a defensive, childlike gesture, and the 'thin and strange' voice shows he cannot sound calm.", evidence: "thin and strange", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Dev's nervousness is shown physically. His mother's humming, once merely irritating, now 'made his stomach tighten', implying sickening dread. He also 'pulled his sleeves down over his knuckles', a defensive, shrinking gesture, and his voice is 'thin and strange', suggesting fear has made him lose control of it.",
            commonErrors: ["Writing 'he is nervous because he is nervous' without explaining a quotation.", "Using long quotations instead of short, precise ones."],
          },
        },
        {
          id: "el8-u1-inferring-feeling-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: LETTER,
          stem: "Answer all parts of this question about 'The Letter'.",
          parts: [
            { label: "a", prompt: "Write down two quotations that show Dev's physical reactions.", marks: 2 },
            { label: "b", prompt: "The mother is 'humming' and calling cheerfully. What does the contrast between her mood and Dev's suggest about the situation?", marks: 4 },
            { label: "c", prompt: "How does the writer present Dev's fear of the letter?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference", statement: "Work out meaning from actions, speech and description." },
              { kind: "technique", name: "Contrast", statement: "Placing opposite moods side by side highlights each of them." },
            ],
            steps: [
              { part: "a", reasoning: "His body tenses.", evidence: "it made his stomach tighten", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He reacts to a small noise with a sudden movement.", evidence: "he flinched", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The mother is carefree and unaware of the letter, so the gap between them stresses how alone Dev feels with his secret.", evidence: "a tuneless, cheerful sound", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "The contrast suggests the news is bad and may disturb the happy household, raising tension about what will happen next.", evidence: "Come and have some tea", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "He tries to hide the letter, which suggests dread of what it will mean or how it will be received.", evidence: "slid it under the cushion", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "His physical reactions, the tight stomach and the flinch, show fear taking over his body.", evidence: "he flinched as if it had been a gunshot", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The setting reflects his isolation: the blank television, his pale reflection and the indifferent clock.", evidence: "The clock on the mantelpiece ticked on, unbothered", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("c"),
            finalAnswer: "(a) 'it made his stomach tighten'; 'he flinched'. (b) The mother's cheerfulness shows she knows nothing, which isolates Dev and suggests the letter holds bad news. (c) The writer shows fear through concealment ('slid it under the cushion'), through a body that reacts out of his control ('flinched as if it had been a gunshot'), and through a setting that reflects his isolation, such as the 'unbothered' clock.",
            commonErrors: ["Guessing what the letter says rather than commenting on how the writer presents Dev.", "Retelling the passage in order without selecting quotations."],
          },
        },
      ],
    },
  ],
};
