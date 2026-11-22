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
              { id: "a", text: "Onomatopoeia" },
              { id: "b", text: "Personification" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "A metaphor states one thing IS another; 'rain as sheets' is a direct equation." },
            ],
            steps: [
              { reasoning: "No 'like' or 'as' — it directly equates rain with sheets.", working: "\\text{no 'like/as'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Metaphor",
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
        {
          id: "cile-u2-fig-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: stormExtract,
          stem: "How many of these are SIMILES? 'The rain fell like nails.' 'The storm was a beast.' 'The wind whispered through the trees.' 'The rain was as cold as ice.'",
          response: { type: "numeric", parts: [{ label: "Similes", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simile", statement: "A comparison using 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "'Like nails' and 'as cold as ice' use 'like'/'as' = 2; the others are metaphor and personification.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'the storm was a beast' — that is a metaphor, no comparison word."],
          },
        },
        {
          id: "cile-u2-fig-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "'his knees complaining a little more each year' — what technique is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Onomatopoeia" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Giving a human action ('complaining') to a body part." },
            ],
            steps: [
              { reasoning: "Knees cannot literally complain; the human trait is given to them.", working: "\\text{'complaining'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Personification",
            commonErrors: ["Choosing metaphor — no comparison is being made; a human quality is simply given."],
          },
        },
        {
          id: "cile-u2-fig-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: stormExtract,
          stem: "Identify the technique in 'flattening the market awnings like a giant hand wiping a table' and state its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simile", statement: "'Like a giant hand wiping a table' compares wind to a huge human force." },
            ],
            steps: [
              { reasoning: "Technique: simile.", working: "\\text{simile}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: makes the wind feel huge and casually destructive — a giant casually wiping the town.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simile; it makes the wind feel enormous and casually destructive, as if a giant were wiping the town clean.",
            commonErrors: ["Naming the technique without explaining the effect."],
          },
        },
        {
          id: "cile-u2-fig-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: lighthouseExtract,
          stem: "Identify the technique in 'the path that the sea had tried many times to erase' and state its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "The sea is given a human intention — trying to erase the path." },
            ],
            steps: [
              { reasoning: "Technique: personification ('tried', 'erase' are human actions).", working: "\\text{personification}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the sea becomes an active enemy; the lighthouse's isolation feels besieged and hard-won.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Personification; it makes the sea a deliberate enemy trying to destroy the path, heightening the lighthouse's isolation and Elias's endurance.",
            commonErrors: ["Calling it a metaphor — the sea is not being compared to anything; it is given human intent."],
          },
        },
        {
          id: "cile-u2-fig-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: stormExtract,
          stem: "How many of these are METAPHORS (direct equation, no 'like' or 'as')? 'The storm was a beast.' 'The wind was a thief.' 'The rain fell like nails.' 'The town sounded like a drumskin.'",
          response: { type: "numeric", parts: [{ label: "Metaphors", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "Direct equation with no 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "'Storm was a beast' and 'wind was a thief' state X is Y = 2; the other two are similes.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the 'like' phrases — they are similes."],
          },
        },
        {
          id: "cile-u2-fig-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: lighthouseExtract,
          stem: "Analyse the effect of the metaphor in 'A light did not need to be thanked; it needed to be lit.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphor", statement: "The light stands for duty itself — it exists to be kept burning, not to be admired." },
            ],
            steps: [
              { reasoning: "The 'light' metaphorically stands for Elias's duty and the service it provides.", working: "\\text{light = duty}", marks: 1, markCode: "AO2" },
              { reasoning: "It rejects recognition ('thanked') in favour of function ('lit') — duty needs no audience.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: dignifies anonymous service; matches the theme of quiet, unseen duty.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The metaphor turns the light into a symbol of selfless duty — it exists to burn, not to be thanked — dignifying Elias's anonymous service.",
            commonErrors: ["Reading it literally as being about electricity rather than duty."],
          },
        },
        {
          id: "cile-u2-fig-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: stormExtract,
          stem: "Explain the effect of the personification in 'the boats strained at their moorings'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Boats are given human effort ('strained') — they resist the storm like people." },
            ],
            steps: [
              { reasoning: "'Strained' gives the boats a human-like effort against the force of the storm.", working: "\\text{'strained'}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the boats feel alive and vulnerable, fighting to stay put.", marks: 1, markCode: "AO2" },
              { reasoning: "It makes the storm's power tangible — even moored boats must resist it.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Personification makes the boats seem to strain like living things against the storm, making the wind and waves' power feel physical and threatening.",
            commonErrors: ["Saying it 'describes the boats' without identifying the human trait given."],
          },
        },
        {
          id: "cile-u2-fig-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "What type of image is 'a fist of black rock'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification" },
              { id: "b", text: "Onomatopoeia" },
              { id: "c", text: "Metaphor" },
              { id: "d", text: "Simile" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "The rock is directly equated with a clenched fist — no 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "The rock IS a fist; a direct equation.", working: "\\text{rock = fist}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Metaphor",
            commonErrors: ["Choosing simile — there is no comparison word."],
          },
        },
        {
          id: "cile-u2-fig-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: stormExtract,
          stem: "How many of these are SIMILES? 'The town sounded like a drumskin.' 'The rain arrived in sheets.' 'The wind shouldered through the streets.' 'The sky had been promising rain.'",
          response: { type: "numeric", parts: [{ label: "Similes", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simile", statement: "Comparison using 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "Only 'sounded like a drumskin' uses 'like' = 1; the others are metaphor and personification.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting 'arrived in sheets' — that is a metaphor, not a simile."],
          },
        },
        {
          id: "cile-u2-fig-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: stormExtract,
          stem: "The storm is given human or animal qualities throughout the extract. Explain how this consistent personification shapes the reader's experience of the storm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sustained personification", statement: "Giving nature human intent makes it feel deliberate, intelligent and threatening." },
            ],
            steps: [
              { reasoning: "Evidence: sky 'promising', wind 'shouldering', boats 'straining', storm 'spent itself'.", working: "\\text{sky/wind/boats/storm}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect 1: the storm feels like a conscious agent with intentions, not random weather.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect 2: it builds a sense of an enemy that plans and then tires — dramatic arc.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: the storm becomes a character; the reader experiences it as a threat with a personality.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sustained personification makes the storm a deliberate, almost conscious agent — it promises, shoulders, spends itself — so the reader experiences weather as a personal threat with its own intentions.",
            commonErrors: ["Listing personified words without explaining the cumulative effect."],
          },
        },
        {
          id: "cile-u2-fig-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: lighthouseExtract,
          stem: "You are analysing the figurative language in 'The Lighthouse Keeper'.",
          parts: [
            { label: "a", prompt: "Quote one example of personification.", marks: 2 },
            { label: "b", prompt: "Quote one example of metaphor.", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'the sea had tried many times to erase' the path.", marks: 2 },
            { label: "d", prompt: "How does the figurative language create the extract's mood of quiet endurance?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language", statement: "Personification and metaphor dignify routine work and render the setting hostile yet majestic." },
            ],
            steps: [
              { part: "a", reasoning: "Personification: 'the sea had tried many times to erase' the path.", working: "\\text{sea tried to erase}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate quotation.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Metaphor: 'a fist of black rock'.", working: "\\text{fist of black rock}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate quotation.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The sea is given human intent — trying to destroy the path.", working: "\\text{deliberate enemy}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Effect: the lighthouse's isolation feels besieged; Elias's daily climb is an act of defiance.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Figurative language dignifies routine labour — 'knees complaining', the sea as enemy.", working: "\\text{dignified labour}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It makes the setting hostile yet the keeper's work noble and unglamorous.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Link to mood: quiet endurance — the light must be lit even though no one thanks it.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'the sea had tried many times to erase' the path (b) 'a fist of black rock' (c) personification makes the sea a deliberate enemy, heightening isolation and defiance (d) figurative language dignifies routine duty, creating a mood of quiet, unglamorous endurance",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Accurate personification quotation.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Accurate metaphor quotation.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Technique and effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Mood linked convincingly through technique.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial link.", part: "d" },
            ],
            commonErrors: ["Quoting without naming the technique or explaining the effect."],
          },
        },
        {
          id: "cile-u2-fig-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: stormExtract,
          stem: "You are analysing the figurative language in 'The Storm'.",
          parts: [
            { label: "a", prompt: "Identify two different figures of speech used in the extract.", marks: 2 },
            { label: "b", prompt: "Explain the effect of 'the whole town sounded like a drumskin'.", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'the storm had spent itself'.", marks: 2 },
            { label: "d", prompt: "How does the figurative language control the extract's tension?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language", statement: "Personification, metaphor and simile give the storm agency and shape its dramatic arc." },
            ],
            steps: [
              { part: "a", reasoning: "Figure 1: personification — the sky 'promised' rain / wind 'shouldered'.", working: "\\text{personification}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Figure 2: simile — 'like a drumskin' / 'like a giant hand wiping a table'.", working: "\\text{simile}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Simile links rain noise to a taut drum surface — relentless, enveloping.", working: "\\text{drumskin}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Effect: removes all silence; the storm feels inescapable.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "'Spent itself' personifies the storm as a creature that tires — like a person after exertion.", working: "\\text{spent itself}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Effect: the storm's end feels natural and almost relieved; tension releases.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Figurative language gives the storm intent (promising) then exhaustion (spent) — tension rises and falls.", working: "\\text{intent then exhaustion}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The storm becomes a character whose arc controls the reader's tension.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) personification (sky promised rain); simile (sounded like a drumskin) (b) relentless, enveloping noise — no silence, no refuge (c) the storm tires like a person — natural release of tension (d) the storm's personified intent and exhaustion shape the rise and fall of tension",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two figures correctly identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Simile effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Personification effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Tension control explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid explanation.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it makes it exciting' without linking technique to tension."],
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
              { id: "a", text: "Sound" },
              { id: "b", text: "Sight" },
              { id: "c", text: "Touch" },
              { id: "d", text: "Smell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound imagery", statement: "'Drumming' describes a noise — rain on rooftops." },
            ],
            steps: [
              { reasoning: "Drumming is an auditory image.", working: "\\text{sound}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sound",
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
        {
          id: "cile-u2-imagery-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: stormExtract,
          stem: "Which sense does 'the streets steamed' primarily appeal to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Taste" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Sight" },
              { id: "d", text: "Smell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Visual imagery", statement: "'Steamed' describes what the streets look like after the rain." },
            ],
            steps: [
              { reasoning: "Steam rising from the streets is a visual image.", working: "\\text{visual}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Sight",
            commonErrors: ["Choosing smell — steam could carry smell, but the image is primarily visual."],
          },
        },
        {
          id: "cile-u2-imagery-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "How many of these images appeal mainly to TOUCH? 'His knees complained a little more each year.' 'The streets steamed after the storm.' 'The rain drummed on rooftops.' 'The light swept across the water.'",
          response: { type: "numeric", parts: [{ label: "Touch images", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Touch imagery", statement: "Physical sensation — pain, ache, effort — appeals to touch." },
            ],
            steps: [
              { reasoning: "Aching knees is a physical, tactile sensation = 1; the others are sight or sound.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting 'streets steamed' — that is primarily visual, not felt."],
          },
        },
        {
          id: "cile-u2-imagery-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: stormExtract,
          stem: "Quote one piece of physical/touch imagery in the extract and state its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Touch imagery", statement: "Physical pressure, strain or sensation makes danger felt on the body." },
            ],
            steps: [
              { reasoning: "Quote: 'the boats strained at their moorings' (or the wind 'shouldering').", working: "\\text{strained/shouldering}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: makes the storm's force physical — something the body must resist.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'the boats strained at their moorings' — it makes the storm's force feel physical, as if the boats must push back with effort.",
            commonErrors: ["Quoting a sight image (e.g. 'sheets of rain') when asked for touch imagery."],
          },
        },
        {
          id: "cile-u2-imagery-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: lighthouseExtract,
          stem: "What mood does 'a fist of black rock' create, and which sense does it appeal to?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery and mood", statement: "Visual image of a clenched fist → harsh, unyielding mood." },
            ],
            steps: [
              { reasoning: "Sense: sight — the rock's shape and colour are visual.", working: "\\text{sight}", marks: 1, markCode: "AO2" },
              { reasoning: "Mood: harsh, unyielding, defiant — matching the lighthouse's endurance.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sight imagery creating a harsh, unyielding, defiant mood — the rock clings to the point like a fist.",
            commonErrors: ["Naming the mood without identifying the sense."],
          },
        },
        {
          id: "cile-u2-imagery-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: stormExtract,
          stem: "How many of these images appear in the extract AFTER the storm has passed? 'The streets steamed.' 'The market awnings were flattened.' 'The boats strained at their moorings.' 'A dog barked twice.'",
          response: { type: "numeric", parts: [{ label: "Aftermath images", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mood", statement: "Physical struggle imagery — boats straining — makes danger most immediate." },
            ],
            steps: [
              { reasoning: "Steaming streets and the barking dog belong to the aftermath paragraph = 2; flattened awnings and straining boats occur during the storm.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the flattened awnings — that happens during the storm, not after."],
          },
        },
        {
          id: "cile-u2-imagery-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: stormExtract,
          stem: "Analyse how the final paragraph's imagery creates a mood of uneasy calm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Aftermath imagery", statement: "Quiet, sparse images after violence create relief mixed with strangeness." },
            ],
            steps: [
              { reasoning: "Evidence: 'The streets steamed', 'a dog barked twice', 'went back to sleep'.", working: "\\text{steamed; barked; asleep}", marks: 1, markCode: "AO2" },
              { reasoning: "The sensory scale shrinks — no thunder, just steam and one dog — so danger feels past.", marks: 1, markCode: "AO2" },
              { reasoning: "But 'checking that the world still existed' keeps a wry unease — everything feels new.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sparse quiet imagery — steaming streets, a single barking dog — releases the storm's tension, but the dog's 'checking' leaves a wry, uneasy sense that the world feels newly strange.",
            commonErrors: ["Calling the mood simply 'peaceful' — the unease is essential."],
          },
        },
        {
          id: "cile-u2-imagery-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: lighthouseExtract,
          stem: "How does the imagery of Elias's body — 'the hundred and twelve steps', 'his knees complaining' — characterise him?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery and character", statement: "What a character's body endures reveals their dedication and age." },
            ],
            steps: [
              { reasoning: "The precise count 'hundred and twelve steps' shows the ritual's long repetition.", working: "\\text{112 steps}", marks: 1, markCode: "AO2" },
              { reasoning: "'Knees complaining a little more each year' shows age and accumulated effort.", working: "\\text{knees complaining}", marks: 1, markCode: "AO2" },
              { reasoning: "Together they characterise Elias as aging but unwavering in his duty.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The body imagery characterises Elias as aging yet steadfast — nineteen years of climbing have cost his knees, but he keeps climbing; duty outweighs discomfort.",
            commonErrors: ["Saying he is 'old' without linking the physical detail to his dedication."],
          },
        },
        {
          id: "cile-u2-imagery-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "How many of these images appeal mainly to SIGHT? 'A fist of black rock.' 'The rain drummed on rooftops.' 'The streets steamed.' 'His knees complained.'",
          response: { type: "numeric", parts: [{ label: "Sight images", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Visual imagery", statement: "Shape and colour are seen; drumming is heard and aching knees are felt." },
            ],
            steps: [
              { reasoning: "'Fist of black rock' (shape/colour) and 'streets steamed' (visual) = 2; drummed = sound, knees = touch.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'drummed' — that appeals to sound."],
          },
        },
        {
          id: "cile-u2-imagery-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: stormExtract,
          stem: "Which image most strongly appeals to the sense of sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rain arrived in sheets" },
              { id: "b", text: "The market awnings were flattened" },
              { id: "c", text: "The streets steamed" },
              { id: "d", text: "The rain drummed on rooftops" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound imagery", statement: "'Drummed' describes a noise — rain on rooftops." },
            ],
            steps: [
              { reasoning: "Drumming is heard; the other options are visual.", working: "\\text{drummed = sound}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** The rain drummed on rooftops",
            commonErrors: ["Choosing (a) — 'sheets' is a visual image of rain."],
          },
        },
        {
          id: "cile-u2-imagery-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: lighthouseExtract,
          stem: "Explain how the accumulated imagery of isolation and effort creates the extract's mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cumulative imagery", statement: "Repeated images of isolation and physical effort build a mood of austere endurance." },
            ],
            steps: [
              { reasoning: "Isolation images: 'fist of black rock', 'path the sea had tried to erase', 'reachable only by a path'.", working: "\\text{isolation}", marks: 1, markCode: "AO2" },
              { reasoning: "Effort images: 'hundred and twelve steps', 'knees complaining', climbing 'every evening'.", working: "\\text{effort}", marks: 1, markCode: "AO2" },
              { reasoning: "Together they create a mood of austere, lonely endurance.", marks: 1, markCode: "AO2" },
              { reasoning: "This mood matches Elias's quiet, selfless duty — the light needs to be lit regardless.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Images of hostile isolation (black rock, erasing sea) and bodily effort (112 steps, aching knees) accumulate into a mood of austere endurance that mirrors Elias's selfless duty.",
            commonErrors: ["Listing images without explaining how they accumulate into mood."],
          },
        },
        {
          id: "cile-u2-imagery-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: stormExtract,
          stem: "You are analysing the imagery in 'The Storm'.",
          parts: [
            { label: "a", prompt: "Quote two pieces of sound imagery that build tension.", marks: 2 },
            { label: "b", prompt: "Explain how the sight imagery of the storm's arrival intensifies it.", marks: 2 },
            { label: "c", prompt: "How does the imagery change after 'By three the storm had spent itself'?", marks: 2 },
            { label: "d", prompt: "What mood does the final image create and why?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery and mood", statement: "Sound and sight imagery escalate tension; sparse aftermath imagery releases it into uneasy calm." },
            ],
            steps: [
              { part: "a", reasoning: "Sound image 1: 'drumming on rooftops'.", working: "\\text{drumming}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Sound image 2: 'the whole town sounded like a drumskin'.", working: "\\text{drumskin}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Sight images — 'sheets' of rain, 'flattening' awnings — make the storm visually overwhelming.", working: "\\text{sheets; flattening}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Scale: the whole town is affected, so the storm feels enormous.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "After: 'streets steamed', quiet, one dog — sensory scale shrinks.", working: "\\text{steamed; quiet}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Pace slows; danger replaced by aftermath.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Mood: uneasy calm, slightly absurd — 'checking that the world still existed'.", working: "\\text{uneasy calm}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The dog's behaviour personifies a world made strange by the storm.", working: "\\text{world feels new}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: releases tension while leaving wry unease.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'drumming on rooftops'; 'sounded like a drumskin' (b) sheets of rain and flattened awnings make the storm visually overwhelming (c) imagery shrinks to steam and silence — aftermath (d) wry uneasy calm; the dog's 'checking' suggests the world feels newly strange",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate sound imagery quotations.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Sight imagery explained as intensifying.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Aftermath change accurately described.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Mood identified and explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Mood named without explanation.", part: "d" },
            ],
            commonErrors: ["In (a) quoting sight images when sound is asked for."],
          },
        },
        {
          id: "cile-u2-imagery-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: lighthouseExtract,
          stem: "You are analysing the imagery in 'The Lighthouse Keeper'.",
          parts: [
            { label: "a", prompt: "Quote two pieces of imagery that create the lighthouse's isolation.", marks: 2 },
            { label: "b", prompt: "Explain how the imagery of the climb creates a mood of endurance.", marks: 2 },
            { label: "c", prompt: "What does 'Ships passed in the night and never knew his name' contribute to the mood?", marks: 2 },
            { label: "d", prompt: "How does the imagery support the theme of quiet, unseen duty?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery and theme", statement: "Isolation and effort imagery render anonymous service noble." },
            ],
            steps: [
              { part: "a", reasoning: "Isolation image 1: 'a fist of black rock'.", working: "\\text{black rock}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Isolation image 2: 'a path that the sea had tried many times to erase'.", working: "\\text{erasing sea}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Hundred and twelve steps', 'knees complaining' — repeated physical effort.", working: "\\text{112 steps; knees}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Effect: endurance — he climbs despite age and discomfort, every evening.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It emphasises anonymity — his work is unseen and unthanked.", working: "\\text{unseen}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "This deepens the mood of selfless duty: 'A light did not need to be thanked.'", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Isolation + effort + anonymity together make duty feel noble.", working: "\\text{noble duty}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The imagery supports the theme that quiet, unseen work still matters.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'fist of black rock'; 'path the sea had tried to erase' (b) repeated climbing imagery creates endurance (c) anonymity deepens the selfless-duty mood (d) isolation, effort and anonymity together render quiet duty noble",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate isolation images.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Endurance mood explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Anonymity contribution explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Theme link explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid link.", part: "d" },
            ],
            commonErrors: ["In (d) treating the theme as 'loneliness' rather than 'quiet duty'."],
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
