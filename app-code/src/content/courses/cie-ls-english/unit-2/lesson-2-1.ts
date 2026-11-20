import type { Lesson } from "../../../types.ts";

const stormExtract = {
  title: "The Storm",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "The sky had been promising rain since breakfast, but by noon it had stopped promising and started delivering.\n\nFirst came the wind, shouldering through the streets and flattening the market awnings like a giant hand wiping a table. Then the rain arrived in sheets, drumming on rooftops until the whole town sounded like a drumskin.\n\nIn the harbour the boats strained at their moorings. Old Tom grabbed the wheel of his dinghy and pulled it high above the waterline, cursing under his breath — a habit he had kept for forty years and showed no sign of outgrowing.\n\nBy three the storm had spent itself. The streets steamed. Somewhere a dog barked twice, as if checking that the world still existed, then thought better of it and went back to sleep.",
};

const lighthouseExtract = {
  title: "The Lighthouse Keeper",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Elias had kept the light on Greyrock Point for nineteen years, and in nineteen years he had never once let it go dark.\n\nThe lighthouse stood on a fist of black rock at the end of the headland, reachable only by a path that the sea had tried many times to erase. Every evening Elias climbed the hundred and twelve steps to the lamp room, his knees complaining a little more each year, and set the great lens turning.\n\nShips passed in the night and never knew his name. That, he told himself, was the point. A light did not need to be thanked; it needed to be lit.\n\nWhen the automation letters finally arrived, offering him a cottage in the village and a pension, Elias read them twice, then walked up the hundred and twelve steps one last time. The lamp, he knew, would keep turning without him. Someone, somewhere, would still need it to.",
};

export const lesson21: Lesson = {
  id: "cile-u2-lesson-2-1",
  code: "2-1",
  title: "Imagery and figurative language",
  goal: "I CAN identify and analyse imagery, simile, metaphor and personification, and explain their effects.",
  standards: ["0861 Reading: figurative language and imagery"],
  vocabulary: [
    { term: "Imagery", definition: "Language that appeals to the senses — sight, sound, smell, taste, touch." },
    { term: "Simile", definition: "A comparison using 'like' or 'as' (e.g. 'as brave as a lion')." },
    { term: "Metaphor", definition: "A direct comparison stating one thing IS another (e.g. 'the classroom was a zoo')." },
    { term: "Personification", definition: "Giving human qualities to non-human things (e.g. 'the wind whispered')." },
    { term: "Sensory detail", definition: "Description appealing to the five senses." },
    { term: "Connotation", definition: "The associations and feelings a word carries beyond its literal meaning." },
  ],
  concepts: [
    {
      id: "cile-u2-figurative-language",
      title: "Figurative language",
      skill: "Recognise simile, metaphor and personification and analyse the effect each creates.",
      lesson: {
        sections: [
          {
            heading: "The main figures of speech",
            body: "- **Simile**: compares using 'like' or 'as' — 'the rain fell like nails'.\n- **Metaphor**: states a direct comparison — 'the storm was a beast'. Stronger and more compressed than simile.\n- **Personification**: gives human traits to objects or forces — 'the wind shouldered through the streets', 'the sky promised rain'.",
          },
          {
            heading: "Analysing effect",
            body: "For every figure, ask three questions:\n\n1. **What is being compared?** (tenor and vehicle)\n2. **What quality does the comparison share?** (the storm and the beast are both powerful/uncontrollable)\n3. **What feeling or image does it create?** (fear, awe, danger)",
          },
          {
            heading: "Connotation",
            body: "Words carry associations. 'Slim' vs 'skinny', 'frugal' vs 'stingy' — same idea, different attitude. Identifying connotation shows you understand the writer's attitude, not just the meaning.",
          },
        ],
        keyFormulas: [
          { name: "Figure + effect", statement: "Name the technique, quote it, identify the shared quality, then state the effect on the reader." },
        ],
        workedExample: {
          problem: "'The wind shouldered through the streets.' Technique and effect?",
          solution: "Personification — the wind is given a human action ('shouldered'). Effect: makes the wind feel aggressive and physical, like a person forcing a way through a crowd; increases the storm's menace.",
        },
      },
      questions: [
        {
          id: "cile-u2-fig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: stormExtract,
          stem: "'The rain arrived in sheets.' What type of imagery is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "A metaphor states one thing IS another; 'rain as sheets' is a direct equation." },
            ],
            steps: [
              { reasoning: "No 'like' or 'as' — it directly equates rain with sheets.", working: "\\text{no 'like/as'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Metaphor",
            commonErrors: ["Choosing simile — there is no 'like' or 'as' in the phrase."],
          },
        },
        {
          id: "cile-u2-fig-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: stormExtract,
          stem: "Identify the technique in 'the whole town sounded like a drumskin' and state its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simile", statement: "Comparison with 'like/as'; links rain noise to a drum's tight surface." },
            ],
            steps: [
              { reasoning: "Technique: simile ('like a drumskin').", working: "\\text{simile}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: makes the rain's noise vivid and overwhelming — a continuous, taut drumming.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simile; it makes the sound of the rain vivid and enveloping, like the relentless beating of a drum.",
            commonErrors: ["Naming the technique without stating its effect on the reader."],
          },
        },
        {
          id: "cile-u2-fig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: stormExtract,
          stem: "Explain the effect of the personification in 'the sky had been promising rain since breakfast'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Giving human action to nature makes the storm feel deliberate and almost sentient." },
            ],
            steps: [
              { reasoning: "Identify: 'promising' is a human action given to the sky.", working: "\\text{'promising'}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect 1: makes the approaching storm feel intentional, as if nature has decided.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect 2: 'since breakfast' extends the personification across time, building anticipation.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: creates unease — the storm is coming whether people like it or not.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The personification makes the storm feel deliberate and almost conscious; 'promising since breakfast' builds slow-burn anticipation and makes the storm's arrival feel inevitable, creating unease.",
            commonErrors: ["Saying 'it makes the text interesting' — effects must be specific to the technique."],
          },
        },
        {
          id: "cile-u2-fig-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: lighthouseExtract,
          stem: "The extract uses figurative language to portray the lighthouse.",
          parts: [
            { label: "a", prompt: "Quote one example of personification.", marks: 2 },
            { label: "b", prompt: "Quote one example of metaphor or simile.", marks: 2 },
            { label: "c", prompt: "Explain the effect of the 'fist of black rock' image.", marks: 2 },
            { label: "d", prompt: "How does the figurative language support the extract's theme of quiet duty?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Figurative language", statement: "Personification, metaphor and imagery create mood and meaning beyond literal statement." },
            ],
            steps: [
              { part: "a", reasoning: "Personification: 'the sea had tried many times to erase' the path.", working: "\\text{sea tried to erase}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate quotation.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Metaphor: 'a fist of black rock'.", working: "\\text{fist of black rock}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate quotation.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The rock is clenched like a fist — hard, defiant, unyielding.", working: "\\text{clenched/defiant}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It endows the lighthouse's setting with strength and stubbornness, matching Elias's endurance.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Figurative language dignifies routine labour — 'knees complaining', 'the lamp turning'.", working: "\\text{dignified routine}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It makes the unseen work feel heroic and purposeful.", working: "\\text{heroic/purposeful}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Link to theme: quiet duty is rendered noble, not tedious.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'the sea had tried many times to erase' the path (b) 'a fist of black rock' (c) clenched, defiant image mirrors Elias's endurance (d) figurative language dignifies routine work, making quiet duty feel noble",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Accurate quotation of personification.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Accurate quotation of metaphor/simile.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Image explained and linked to character.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Partial or no explanation.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Theme linked convincingly through technique.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial link.", part: "d" },
            ],
            commonErrors: ["Quoting without identifying the technique correctly (e.g. calling 'fist of black rock' a simile)."],
          },
        },
      ],
    },
    {
      id: "cile-u2-imagery",
      title: "Imagery and sensory description",
      skill: "Analyse how sensory imagery creates mood, atmosphere and characterisation in a text.",
      lesson: {
        sections: [
          {
            heading: "The five senses in writing",
            body: "Strong description engages the senses:\n\n- **Sight**: colour, light, shape, movement — the most common.\n- **Sound**: onomatopoeia ('drumming', 'hummed'), volume, rhythm.\n- **Smell and taste**: often linked; can trigger memory and emotion.\n- **Touch**: texture, temperature, pressure — 'the cold metal', 'rough bark'.\n\nWriters select senses for **effect**: smell and sound create atmosphere more subtly than sight.",
          },
          {
            heading: "Mood and atmosphere",
            body: "Imagery builds **mood** — the emotional atmosphere of a passage. A 'silent, grey, dripping alley' feels threatening; a 'warm, golden, honeyed evening' feels safe. When analysing, always connect the imagery to the mood it creates.",
          },
          {
            heading: "Imagery and character",
            body: "What a character notices reveals who they are: a sailor notices ropes and tides; a child notices colours and sweets. Selective detail is characterisation.",
          },
        ],
        keyFormulas: [
          { name: "Imagery → mood", statement: "Identify the sense appealed to, the connotations of the image, then the mood it creates." },
        ],
        workedExample: {
          problem: "'The streets steamed. Somewhere a dog barked twice, as if checking that the world still existed.' What mood does this create?",
          solution: "Sound imagery (dog barking) and a wry simile ('checking that the world still existed'). Mood: post-storm quiet, slightly absurd and uneasy — the world feels newly strange.",
        },
      },
      questions: [
        {
          id: "cile-u2-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: stormExtract,
          stem: "Which sense does 'drumming on rooftops' primarily appeal to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Smell" },
              { id: "d", text: "Touch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound imagery", statement: "'Drumming' describes a noise — rain on rooftops." },
            ],
            steps: [
              { reasoning: "Drumming is an auditory image.", working: "\\text{sound}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Sound",
            commonErrors: ["Choosing sight — 'drumming' is heard, not seen."],
          },
        },
        {
          id: "cile-u2-imagery-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: stormExtract,
          stem: "Quote one example of smell or taste imagery in the extract, or explain why there is none.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Olfactory imagery", statement: "Smell/taste imagery uses scent or flavour words." },
            ],
            steps: [
              { reasoning: "Check the text: there is no smell or taste description.", working: "\\text{no scent/flavour words}", marks: 1, markCode: "AO2" },
              { reasoning: "The imagery is sound and sight — rain noise, flattened awnings, steaming streets.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "There is no smell or taste imagery; the extract relies on sound (drumming, barking) and sight (sheets of rain, flattened awnings, steaming streets).",
            commonErrors: ["Inventing a smell that is not in the text."],
          },
        },
        {
          id: "cile-u2-imagery-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: lighthouseExtract,
          stem: "Analyse how the description of the lighthouse setting creates mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atmosphere", statement: "Setting imagery creates mood; isolation + endurance imagery creates solemn, respectful mood." },
            ],
            steps: [
              { reasoning: "Evidence: 'fist of black rock', 'path the sea had tried to erase'.", working: "\\text{black rock; erasing sea}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: isolation and hostility of the environment.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'hundred and twelve steps', 'knees complaining' — physical effort imagery.", working: "\\text{112 steps; knees}", marks: 1, markCode: "AO2" },
              { reasoning: "Overall mood: austere, enduring, quietly heroic — matching Elias's dedication.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The hostile, isolated imagery — black rock, an erasing sea, 112 steps — creates an austere, enduring mood that mirrors Elias's quiet heroism.",
            commonErrors: ["Listing images without connecting them to mood."],
          },
        },
        {
          id: "cile-u2-imagery-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: stormExtract,
          stem: "The storm extract builds tension and then releases it.",
          parts: [
            { label: "a", prompt: "Quote two pieces of imagery that build tension before the storm peaks.", marks: 2 },
            { label: "b", prompt: "Explain how the sound imagery intensifies the storm's arrival.", marks: 2 },
            { label: "c", prompt: "How does the description change after 'By three the storm had spent itself'?", marks: 2 },
            { label: "d", prompt: "What mood does the final image of the dog create, and why?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tension and release", statement: "Imagery can escalate pressure then relax it; contrast in sense and pace controls mood." },
            ],
            steps: [
              { part: "a", reasoning: "'The sky had been promising rain since breakfast' — slow-building threat.", working: "\\text{promising since breakfast}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "'First came the wind, shouldering through' — aggressive personification.", working: "\\text{shouldering through}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Sound images — 'drumming on rooftops', 'the whole town sounded like a drumskin' — make the storm enveloping.", working: "\\text{drumming; drumskin}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The constant noise removes silence — no refuge for the reader.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "After: 'streets steamed', quiet, a single dog barking — sensory scale shrinks.", working: "\\text{steamed; quiet}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Pace slows; danger replaced by aftermath.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Mood: uneasy calm, slightly absurd ('checking that the world still existed').", working: "\\text{uneasy calm}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The dog's behaviour personifies the world's disorientation — everything feels new and strange.", working: "\\text{world feels new}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: releases tension while leaving a wry, lingering unease.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'promising rain since breakfast'; 'shouldering through the streets' (b) drumming/drumskin sound imagery makes the storm all-enveloping (c) imagery shrinks to steam and silence — aftermath (d) wry uneasy calm; the dog's 'checking' personifies a world made strange",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate quotations of tension-building imagery.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Sound imagery explained as intensifying.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Change after the storm accurately described.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Mood identified and explained through the dog's personification.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Mood named without explanation.", part: "d" },
            ],
            commonErrors: ["In (d) calling the mood 'happy' — the tone is wry and uneasy, not joyful."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u2-fig-imagery-notes",
      title: "Figurative language and imagery — revision notes",
      summary: "Simile, metaphor, personification, sensory imagery and how each creates mood.",
      sections: [
        {
          heading: "Figures of speech",
          body: "Simile = 'like/as' comparison. Metaphor = direct equation. Personification = human traits for the non-human. Always analyse: what is compared, what quality is shared, what effect is created.",
        },
        {
          heading: "Imagery",
          body: "Sight, sound, smell, taste, touch. Sound and smell build atmosphere more subtly than sight. Imagery creates mood — always connect image to feeling.",
        },
        {
          heading: "Exam technique",
          body: "Quote the technique, name it, explain the effect on the reader, then link to mood or theme. 'Interesting' is not an effect.",
        },
      ],
    },
  ],
};
