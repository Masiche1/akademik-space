import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mll3-u2-lesson-2-1",
  code: "2-1",
  title: "Figurative Language",
  goal: "I CAN identify and explain the effect of simile, metaphor, personification, hyperbole and idiom in texts.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Figurative language", definition: "Language that goes beyond literal meaning to create images or ideas." },
    { term: "Simile", definition: "A comparison using 'like' or 'as' — 'brave as a lion'." },
    { term: "Metaphor", definition: "A direct comparison — 'he is a rock', 'time is money'." },
    { term: "Personification", definition: "Giving human qualities to non-human things — 'the wind whispered'." },
    { term: "Hyperbole", definition: "Deliberate exaggeration — 'I've told you a million times'." },
    { term: "Idiom", definition: "A phrase meaning something different from its literal words — 'it's raining cats and dogs'." },
  ],
  concepts: [
    {
      id: "mll3-u2-figurative-language",
      title: "Types of figurative language",
      skill: "Identify similes, metaphors, personification, hyperbole and idioms and explain their effect.",
      lesson: {
        sections: [
          {
            heading: "Comparisons: simile and metaphor",
            body: "**Simile** compares using 'like' or 'as': 'as brave as a lion'. **Metaphor** compares directly: 'he is a lion in battle'. Metaphors are stronger — they say one thing **is** another, not just like it.",
          },
          {
            heading: "Personification and hyperbole",
            body: "**Personification** gives human traits to non-humans: 'the wind whispered secrets'. **Hyperbole** is deliberate exaggeration for effect: 'I'm so hungry I could eat a horse'. Both make writing vivid and memorable.",
          },
          {
            heading: "Idiom",
            body: "An **idiom** is a phrase whose meaning isn't literal: 'break a leg' (good luck), 'piece of cake' (easy), 'under the weather' (ill). Idioms are cultural — they must be learned, not decoded.",
          },
        ],
        keyFormulas: [
          { name: "Figurative devices", statement: "Simile = like/as; Metaphor = is; Personification = human traits; Hyperbole = exaggeration; Idiom = non-literal phrase." },
        ],
        workedExample: {
          problem: "Identify the device: 'The classroom was a zoo before the bell.'",
          solution: "Metaphor — the classroom is compared directly to a zoo (chaotic), not 'like' one.",
        },
      },
      questions: [
        {
          id: "mll3-u2-figurative-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'She is as brave as a lion' is an example of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metaphor" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Hyperbole" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simile", statement: "Simile compares using 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'as brave as' uses 'as' — simile — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Simile",
          },
        },
        {
          id: "mll3-u2-figurative-language-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "The wind screamed through the valley. Rain lashed the windows like tiny fists.",
          },
          stem: "Identify two figurative language devices in these lines and explain what each does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative devices", statement: "Personification and simile create vivid, emotional images." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'the wind screamed' is personification — giving the wind a human action (screaming).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'like tiny fists' is a simile — comparing rain to fists, suggesting violence and impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Wind screamed' = personification; 'like tiny fists' = simile — both make the storm feel violent and alive.",
          },
        },
        {
          id: "mll3-u2-figurative-language-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Exam",
            author: "Written for Akademik Space",
            text: "The exam was a mountain. I climbed it for three hours, and when I finally reached the summit, my legs were jelly.",
          },
          stem: "Explain how the extended metaphor of the mountain shapes the reader's understanding of the exam experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "Sustaining one comparison across a passage deepens its effect." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'the exam was a mountain' sets up the metaphor — the exam is huge and difficult.", evidence: "The exam was a mountain", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'climbed it for three hours' continues the metaphor — the exam felt like an endurance climb.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'reached the summit', 'legs were jelly' completes it — finishing felt like conquering a peak, leaving exhaustion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The mountain metaphor makes the exam feel like a huge, exhausting climb — difficult to start, tiring to finish, triumphant to complete.",
          },
        },
        {
          id: "mll3-u2-figurative-language-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Old House",
            author: "Written for Akademik Space",
            text: "The house groaned as the wind pushed against its walls. Shadows stretched across the floor like long fingers. Somewhere upstairs, a door banged — once, twice, then silence.",
          },
          parts: [
            { label: "a", prompt: "Identify three figurative language devices.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each device on the mood.", marks: 2 },
            { label: "c", prompt: "Why might the writer choose figurative language over literal description here?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language and mood", statement: "Devices create atmosphere and emotion that literal language cannot." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'groaned' = personification; 'like long fingers' = simile; ' Shadows stretched' could be personification too.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'a door banged — once, twice, then silence' uses repetition/suspense.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'groaned' makes the house seem alive and in pain — unsettling.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'long fingers' suggests something reaching/grabbing — creepy; the banging door builds suspense.", evidence: "like long fingers", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): figurative language creates atmosphere and fear that 'the house was old and windy' could never achieve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Personification ('groaned'), simile ('like long fingers'), suspense ('once, twice, then silence'). (b) Each creates unease and fear. (c) Figurative language builds atmosphere literal description can't.",
          },
        },
        {
          id: "mll3-u2-figurative-language-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'The classroom was a zoo before the bell.' This is an example of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Idiom" },
              { id: "d", text: "Hyperbole" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "Metaphor compares directly — says one thing IS another." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'was a zoo' is a direct comparison — metaphor — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Metaphor",
          },
        },
        {
          id: "mll3-u2-figurative-language-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'The wind whispered through the trees.' This is an example of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Hyperbole" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Idiom" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personification", statement: "Personification gives human qualities to non-human things." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'whispered' gives the wind a human action — personification — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Personification",
          },
        },
        {
          id: "mll3-u2-figurative-language-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Line",
            author: "Written for Akademik Space",
            text: "I'm so tired I could sleep for a week.",
          },
          stem: "What figurative device is used in this line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Hyperbole" },
              { id: "d", text: "Personification" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hyperbole", statement: "Hyperbole is deliberate exaggeration for effect." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'sleep for a week' exaggerates tiredness — hyperbole — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Hyperbole",
          },
        },
        {
          id: "mll3-u2-figurative-language-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Morning",
            author: "Written for Akademik Space",
            text: "The sun rose like a golden coin tossed into a blue sea. Dew clung to the grass as if reluctant to leave.",
          },
          stem: "Which pair of devices does this passage use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile ('like a golden coin') and personification ('as if reluctant to leave')" },
              { id: "b", text: "Onomatopoeia and alliteration only" },
              { id: "c", text: "A stage direction and a cast list" },
              { id: "d", text: "Statistics and a graph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative devices", statement: "Simile and personification create vivid, emotional images." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'like a golden coin' is a simile making the sunrise precious; 'as if reluctant to leave' personifies the dew — (a).", evidence: "like a golden coin", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Simile ('like a golden coin') and personification ('as if reluctant to leave')",
          },
        },
        {
          id: "mll3-u2-figurative-language-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The City",
            author: "Written for Akademik Space",
            text: "The city never sleeps — it just changes shifts. Neon signs flicker like tired eyes; the subway groans beneath our feet like an old dog.",
          },
          stem: "Explain how the extended metaphor of the city 'changing shifts' shapes our understanding of urban life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "Sustaining one comparison across a passage deepens its effect." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'never sleeps — just changes shifts' is the controlling metaphor — the city is like a worker with rotating hours.", evidence: "changes shifts", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Neon signs flicker like tired eyes' and 'subway groans like an old dog' extend the metaphor — the city is tired, ageing, weary.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the metaphor makes urban life feel exhausting yet continuous — the city never rests, it only tires.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The 'changing shifts' metaphor makes the city feel like an overworked, ageing being — always active but never fresh — capturing urban exhaustion.",
          },
        },
        {
          id: "mll3-u2-figurative-language-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Kitchen",
            author: "Written for Akademik Space",
            text: "Grandma's kitchen was a warm hug in a room — flour dusted the counters like first snow, and the oven ticked like a patient clock. Every spoon hung on its hook, waiting for the next batch of biscuits.",
          },
          parts: [
            { label: "a", prompt: "Identify three figurative language devices.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each on the mood.", marks: 2 },
            { label: "c", prompt: "Why might the writer choose figurative language over literal description here?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language and mood", statement: "Devices create warmth, comfort and nostalgia that literal description can't." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'a warm hug in a room' is a metaphor; 'like first snow' is a simile; 'tick-tocked like a patient clock' is personification/simile.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'waiting for the next batch' is personification — spoons seem to anticipate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'warm hug' makes the kitchen feel comforting and loving — a place of affection.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'first snow' and 'patient clock' create a gentle, nostalgic, timeless mood — childhood memory.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the kitchen is about feeling, not facts — figurative language conveys warmth and memory that 'the kitchen had a stove and counters' never could.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Metaphor ('warm hug'), simile ('first snow'), personification ('waiting spoons'). (b) Each creates warmth, nostalgia and comfort. (c) The kitchen is about feeling — figurative language conveys memory and warmth facts can't.",
          },
        },
        {
          id: "mll3-u2-figurative-language-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Four Lines",
            author: "Written for Akademik Space",
            text: "The rain fell like silver needles.\nThe wind howled at the door.\nTime is money, they say.\nI've told you a million times.",
          },
          stem: "How many of these four lines use figurative language? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative devices", statement: "Simile, personification, metaphor and hyperbole all appear here." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): simile ('like silver needles'), personification ('wind howled'), metaphor ('time is money'), hyperbole ('a million times') — all four are figurative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "mll3-u2-figurative-language-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "'She has a heart of gold.' This is an example of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Hyperbole" },
              { id: "c", text: "Metaphor" },
              { id: "d", text: "Idiom" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "Metaphor compares directly — her heart IS gold, meaning she is kind." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'heart of gold' is a direct comparison meaning kindness — metaphor — (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Metaphor",
          },
        },
        {
          id: "mll3-u2-figurative-language-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Crowd",
            author: "Written for Akademik Space",
            text: "The crowd was a wave that swallowed the street. People bobbed on its surface like corks.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many metaphorical comparisons appear in the extract?", marks: 1 },
            { label: "b", prompt: "How many similes (using 'like' or 'as') appear?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphor vs simile", statement: "'Was a wave' is metaphor (direct); 'like corks' is simile ('like')." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'crowd was a wave' — 1 metaphor.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'like corks' — 1 simile.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 1",
          },
        },
        {
          id: "mll3-u2-figurative-language-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between a simile and a metaphor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Similes are always longer" },
              { id: "b", text: "Simile compares using 'like' or 'as'; metaphor compares directly" },
              { id: "c", text: "Metaphors are only in poetry" },
              { id: "d", text: "There is no difference" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simile vs metaphor", statement: "Simile uses 'like'/'as'; metaphor states one thing IS another." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the key difference is 'like'/'as' vs direct comparison — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Simile compares using 'like' or 'as'; metaphor compares directly",
          },
        },
        {
          id: "mll3-u2-figurative-language-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the idiom 'break a leg' actually mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To fracture a limb" },
              { id: "b", text: "Good luck" },
              { id: "c", text: "To run quickly" },
              { id: "d", text: "To stop trying" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Idiom", statement: "An idiom's meaning isn't literal — 'break a leg' means good luck." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'break a leg' is said to wish someone good luck — the meaning is cultural, not literal — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Good luck",
          },
        },
        {
          id: "mll3-u2-figurative-language-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "The storm was a beast unleashed. Rain hammered the roof like fists on a door. Lightning split the sky — white, sudden, terrifying. Inside, we huddled together, small and warm against the world's anger.",
          },
          parts: [
            { label: "a", prompt: "Identify three figurative devices.", marks: 2 },
            { label: "b", prompt: "Explain how each contributes to the mood of fear.", marks: 2 },
            { label: "c", prompt: "Why is 'the storm was a beast' stronger than 'the storm was strong'?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language and fear", statement: "Devices make the storm feel alive and threatening — fear through image, not statement." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'beast unleashed' = metaphor; 'like fists on a door' = simile; 'world's anger' = personification/metaphor.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'white, sudden, terrifying' uses sensory/ominous description — atmosphere.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'beast' makes the storm a predator — it hunts, it's wild; 'fists' makes rain violent and personal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'world's anger' makes nature seem hostile and intentional — we're small victims.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'beast' gives the storm wildness, hunger and threat — 'strong' is flat and abstract; metaphor makes us feel the danger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Metaphor ('beast'), simile ('fists'), personification ('world's anger'). (b) Each makes the storm predatory, violent and hostile. (c) 'Beast' conveys wild threat that 'strong' can't.",
          },
        },
      ],
    },
    {
      id: "mll3-u2-figurative-effects",
      title: "Why writers use figurative language",
      skill: "Explain how figurative language creates meaning, mood and emphasis beyond literal description.",
      lesson: {
        sections: [
          {
            heading: "Beyond literal",
            body: "Literal language tells facts: 'he was angry'. Figurative language shows the **quality** of the anger: 'his face was thunder', 'rage boiled inside him'. It doesn't just describe — it makes you **feel**.",
          },
          {
            heading: "Creating mood",
            body: "Figurative language is the writer's main tool for **mood**. 'The forest was dark' is neutral. 'The forest watched, patient and hungry' is menacing. The device chosen shapes how you feel about the scene.",
          },
          {
            heading: "Compression",
            body: "Figurative language **compresses** meaning. 'Time is money' packs a whole philosophy into three words. A metaphor can say in one image what a paragraph of explanation couldn't.",
          },
        ],
        keyFormulas: [
          { name: "Figurative purpose", statement: "Figurative language creates mood, compresses meaning, and makes readers feel rather than just know." },
        ],
        workedExample: {
          problem: "Compare: 'She was nervous' vs 'Her hands wouldn't stop shaking'. Which is more effective and why?",
          solution: "'Hands wouldn't stop shaking' is more effective — it shows the nervousness through physical detail rather than just naming it.",
        },
      },
      questions: [
        {
          id: "mll3-u2-figurative-effects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does figurative language do that literal language doesn't?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes sentences longer" },
              { id: "b", text: "It creates images and feelings beyond literal meaning" },
              { id: "c", text: "It uses bigger words" },
              { id: "d", text: "It is always more accurate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative purpose", statement: "Figurative language creates images, mood and compressed meaning." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): figurative language creates images and feelings — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It creates images and feelings beyond literal meaning",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Ways",
            author: "Written for Akademik Space",
            text: "Literal: 'The room was messy.'\n\nFigurative: 'The room looked like a bomb had gone off — clothes everywhere, papers flying, the bed buried under a mountain of stuff.'",
          },
          stem: "Explain how the figurative version creates a stronger picture than the literal one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative vs literal", statement: "Figurative language uses images and hyperbole to make scenes vivid and emotional." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'bomb had gone off' (hyperbole/simile) exaggerates the mess dramatically — we picture chaos.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'clothes everywhere, papers flying, mountain of stuff' adds sensory detail — the figurative version shows rather than just states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The figurative version uses hyperbole ('bomb had gone off'), simile and specific details to make the mess vivid — 'messy' is flat by comparison.",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a writer might use metaphor to make an abstract idea (like 'justice' or 'time') concrete and understandable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphor for abstraction", statement: "Metaphors make abstract ideas tangible by comparing them to physical things." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Justice is a blindfolded scale' makes an abstract concept visual — we picture balance and fairness.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Time is a thief' makes time feel like something that steals — personification makes it active and threatening.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the concrete image carries the abstract idea's qualities — scale = fairness, thief = loss — making the idea felt, not just understood.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metaphors make abstract ideas tangible — 'justice is a scale' or 'time is a thief' gives the idea physical qualities we can picture and feel.",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "Grief",
            author: "Written for Akademik Space",
            text: "Grief is a heavy coat\nI can't take off.\nIt hangs on my shoulders\nin winter and in spring.\nSome days it fits.\nSome days it weighs a ton.",
          },
          parts: [
            { label: "a", prompt: "What is the central metaphor of the poem?", marks: 1 },
            { label: "b", prompt: "Explain how the metaphor develops across the stanzas.", marks: 2 },
            { label: "c", prompt: "Why is a metaphor more powerful than saying 'grief is hard to bear'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "Sustained metaphor lets an abstract feeling be explored through a concrete image." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): grief is a heavy coat that can't be removed — a burden worn constantly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): stanza 1 establishes it ('heavy coat', 'can't take off'); stanza 2 shows its constancy ('winter and spring'); stanza 3 varies its weight ('fits' vs 'weighs a ton').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the coat's weight changes mirror grief's intensity — some days bearable, some overwhelming.", evidence: "weighs a ton", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'heavy coat' is concrete — we feel the physical burden; 'hard to bear' is abstract and flat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the metaphor lets the poem explore grief's texture — its weight, its persistence, its variation — in a way a direct statement couldn't.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Grief as a heavy coat. (b) It develops from burden → constancy → variable weight. (c) The concrete image lets us feel grief's physical and emotional weight.",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does figurative language add that literal language cannot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More facts" },
              { id: "b", text: "Images, mood and compressed meaning" },
              { id: "c", text: "Longer sentences" },
              { id: "d", text: "Better spelling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative purpose", statement: "Figurative language creates images, mood and compressed meaning." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): figurative language adds images, mood and compression — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Images, mood and compressed meaning",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is more effective: 'She was nervous' or 'Her hands wouldn't stop shaking'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'She was nervous' — it's clearer" },
              { id: "b", text: "'Her hands wouldn't stop shaking' — it shows the nervousness" },
              { id: "c", text: "Both are equally effective" },
              { id: "d", text: "Neither is effective" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show don't tell", statement: "Showing through physical detail is more vivid than naming an emotion." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'hands wouldn't stop shaking' shows nervousness physically — more vivid — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Her hands wouldn't stop shaking' — it shows the nervousness",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "Literal: 'The test was hard.'\n\nFigurative: 'The test was a beast that devoured three hours of my life.'",
          },
          stem: "Which description is more vivid, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The test was hard' — it's accurate" },
              { id: "b", text: "'The test was a beast' — it gives the difficulty a wild, threatening image" },
              { id: "c", text: "Both are equally vivid" },
              { id: "d", text: "Neither is vivid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative vividness", statement: "Metaphor gives abstract difficulty a concrete, threatening image." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'beast that devoured' makes the test feel predatory and exhausting — more vivid — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'The test was a beast' — it gives the difficulty a wild, threatening image",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Ways to Grieve",
            author: "Written for Akademik Space",
            text: "Literal: 'She felt sad after the funeral.'\n\nFigurative: 'She moved through the days like a ghost — present, but not quite there.'",
          },
          stem: "Why is the figurative version more powerful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is shorter" },
              { id: "b", text: "'Like a ghost — present, but not quite there' captures grief's unreality and detachment, which 'sad' cannot convey" },
              { id: "c", text: "It uses bigger words only" },
              { id: "d", text: "It avoids mentioning the funeral" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative emotion", statement: "Figurative language shows the quality of an emotion, not just names it." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the ghost metaphor captures grief's unreality and numbness — 'sad' is flat by comparison — (b).", evidence: "like a ghost", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The ghost metaphor captures grief's unreality and detachment, which 'sad' cannot convey",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a writer might use hyperbole to make a point memorable, and why exaggeration can be more effective than literal accuracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hyperbole for emphasis", statement: "Deliberate exaggeration makes a point vivid and unforgettable." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I've told you a million times' exaggerates frustration — it makes the feeling of being ignored unforgettable.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'This bag weighs a ton' makes the bag feel impossibly heavy — exaggeration conveys the emotional experience, not the measurement.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): hyperbole works because it captures truth through exaggeration — the feeling is real even if the number isn't; it prioritises impact over accuracy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hyperbole makes points unforgettable — 'a million times', 'a ton' exaggerate to capture the feeling; the emotion is true even when the number isn't.",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Office",
            author: "Written for Akademik Space",
            text: "The office was a pressure cooker. Deadlines bubbled and hissed; the manager's voice was a whip that cracked across the room. By Friday, everyone was raw — nerves flayed open, tempers at breaking point.",
          },
          parts: [
            { label: "a", prompt: "Identify the central metaphor and two supporting images.", marks: 2 },
            { label: "b", prompt: "Explain how these images create the mood of stress.", marks: 2 },
            { label: "c", prompt: "Why is 'pressure cooker' more effective than 'stressful workplace'?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "A sustained metaphor (pressure cooker) unifies scattered images into one overwhelming mood." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): central metaphor — 'pressure cooker'; supporting images — 'deadlines bubbled and hissed', 'voice was a whip'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'raw — nerves flayed open' extends the cooker/heat image into violence and exposure.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the cooker metaphor makes stress feel contained, building, dangerous — it will explode.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'whip' and 'bubbling' add violence and agitation — everything is tense, nothing is calm.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'pressure cooker' gives stress a physical, dangerous form — heat, pressure, explosion; 'stressful workplace' is a flat label.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Central: 'pressure cooker'; supporting: 'bubbled and hissed', 'voice was a whip'. (b) They make stress feel contained, violent and about to explode. (c) 'Pressure cooker' gives stress physical danger that a label can't.",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Three Pairs",
            author: "Written for Akademik Space",
            text: "Pair 1: 'He was angry' vs 'His face was thunder'\nPair 2: 'She was kind' vs 'She had a heart of gold'\nPair 3: 'It was late' vs 'The clock had given up hours ago'",
          },
          stem: "How many of the three second versions use figurative language? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language", statement: "All three second versions use metaphor or personification." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'face was thunder' (metaphor), 'heart of gold' (metaphor), 'clock had given up' (personification) — all three are figurative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might a writer choose 'Her eyes were stars' over 'Her eyes were bright'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it's shorter" },
              { id: "b", text: "Because the metaphor makes her eyes seem magical and distant" },
              { id: "c", text: "Because 'bright' is a spelling mistake" },
              { id: "d", text: "Because stars are bigger than eyes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphor for effect", statement: "Metaphor adds connotation — 'stars' suggests beauty, distance and wonder." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'stars' adds wonder and distance that 'bright' lacks — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because the metaphor makes her eyes seem magical and distant",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Compression",
            author: "Written for Akademik Space",
            text: "'Time is money.'\n\nExpanded: 'Time is valuable, and wasting it is like losing money you could have earned or saved.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many words does the proverb 'Time is money' contain?", marks: 1 },
            { label: "b", prompt: "How many words does the expanded version contain?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Compression", statement: "Figurative language packs meaning into few words." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'Time is money' = 3 words.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'Time is valuable, and wasting it is like losing money you could have earned or saved' = Time(1) is(2) valuable(3) and(4) wasting(5) it(6) is(7) like(8) losing(9) money(10) you(11) could(12) have(13) earned(14) or(15) saved(16) — actually 16 words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 (b) 16 — the metaphor compresses a whole idea into 3 words",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does it mean that figurative language 'compresses' meaning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes texts shorter by removing words" },
              { id: "b", text: "It packs complex ideas into a single vivid image" },
              { id: "c", text: "It hides meaning from readers" },
              { id: "d", text: "It uses smaller fonts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Compression", statement: "One metaphor can carry what a paragraph of explanation would need." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): compression = packing complex meaning into one image — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It packs complex ideas into a single vivid image",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A travel brochure says 'Paradise awaits — where every sunset is a painting.' Which technique makes this persuasive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistics about the weather" },
              { id: "b", text: "Metaphor and elevated imagery that make the place feel desirable" },
              { id: "c", text: "A list of hotel prices" },
              { id: "d", text: "A formal report structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative persuasion", statement: "Figurative language makes places feel desirable, not just described." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Paradise awaits' and 'sunset is a painting' are metaphors — they sell a feeling, not facts — (b).", evidence: "Paradise awaits", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Metaphor and elevated imagery that make the place feel desirable",
          },
        },
        {
          id: "mll3-u2-figurative-effects-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this poem.",
          extract: {
            title: "The House",
            author: "Written for Akademik Space",
            text: "Our house was a ship\nwe sailed through storms.\nIts walls were strong, its roof a sail,\nand we were crew — together, all the while.",
          },
          parts: [
            { label: "a", prompt: "What is the central metaphor of the poem?", marks: 1 },
            { label: "b", prompt: "Explain how the metaphor develops across the lines.", marks: 2 },
            { label: "c", prompt: "Why is the ship metaphor more powerful than saying 'our family was united'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "A sustained metaphor lets an abstract idea (family unity) be explored through a concrete image (ship)." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the house/family is a ship sailing through storms — a vessel of unity facing hardship.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): stanza 1 sets it up ('house was a ship'); stanza 2 extends it ('walls were strong, roof a sail', 'we were crew').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'we were crew — together' makes unity active and purposeful — the family works together like sailors.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the ship metaphor is concrete — we picture walls as hull, family as crew, storms as hardship; 'united' is abstract and flat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it adds adventure and peril — unity isn't just a feeling, it's survival against storms; the metaphor makes the idea felt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) House/family as a ship. (b) It develops from vessel → crew → shared purpose. (c) The concrete image makes unity feel active, perilous and earned — 'united' can't.",
          },
        },
      ],
    },
  ],
};
