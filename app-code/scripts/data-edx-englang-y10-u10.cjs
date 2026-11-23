// Data file for edx-englang-y10 unit 10: Imaginative Writing — Description, Dialogue and Revision.
// Pipeline: coordinator runs gen-lesson.cjs on this file. Do not edit generated .ts files.

const LEVELS_3 = [
  { level: "Level 2", marks: "2-3", descriptor: "Clear, effective use of the required technique with some developed detail; mostly accurate." },
  { level: "Level 1", marks: "1", descriptor: "Limited or partial attempt; technique present but underdeveloped or inaccurate." },
];

const LEVELS_3_PART = [
  { part: "c", level: "Level 2", marks: "2-3", descriptor: "Clear, effective use of the required technique with some developed detail; mostly accurate." },
  { part: "c", level: "Level 1", marks: "1", descriptor: "Limited or partial attempt; technique present but underdeveloped or inaccurate." },
];

const LEVELS_6_PART = [
  { part: "c", level: "Level 3", marks: "5-6", descriptor: "Assured, imaginative and well-controlled writing; techniques sustained and integrated; virtually error-free." },
  { part: "c", level: "Level 2", marks: "3-4", descriptor: "Effective writing with several well-chosen techniques; mostly controlled and accurate." },
  { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited writing; few techniques and frequent errors." },
];

module.exports = [
  // ============================ LESSON 10-1 ============================
  {
    file: "lesson-10-1.ts", exportName: "lesson101",
    lesson: {
      id: "el10-u10-lesson-10-1", code: "10-1",
      title: "Descriptive Writing: Showing Not Telling",
      goal: "I CAN use sensory detail and figurative language to show a scene rather than tell it.",
      standards: ["4EA1 Paper 2 Section B", "4EA1 AO4", "4EA1 AO5"],
      vocabulary: [
        { term: "Sensory detail", definition: "Concrete description engaging one or more of the five senses." },
        { term: "Connotation", definition: "The associations a word carries beyond its dictionary meaning." },
        { term: "Simile", definition: "A comparison using ‘like’ or ‘as’." },
        { term: "Metaphor", definition: "A direct comparison stating that one thing is another." },
        { term: "Personification", definition: "Giving human qualities or actions to non-human things." },
        { term: "Show, don’t tell", definition: "Replacing abstract judgement with concrete sensory evidence." },
      ],
      concepts: [
        {
          id: "el10-u10-sensory-figurative",
          title: "Sensory detail and figurative language",
          skill: "Use sensory detail, similes, metaphors and personification to bring a description to life.",
          sections: [
            {
              heading: "Beyond sight: engaging the senses",
              body: "Strong description uses all five senses, not just sight. ‘The market was busy’ tells; ‘the air thick with spice and shouting’ shows. The rule of **show, don’t tell**: replace adjectives that name a quality (‘nice’, ‘scary’, ‘cold’) with evidence the reader can perceive. A cold room is better shown by a detail — ‘my breath fogged the window’ — than stated.",
            },
            {
              heading: "Figurative language",
              body: "**Similes** compare using ‘like’ or ‘as’; **metaphors** state the comparison directly; **personification** gives human qualities to the non-human. Each should sharpen the image, not decorate it. ‘The old fridge grumbled awake’ tells us more about the kitchen’s personality than ‘the old fridge made a noise’. Choose comparisons that are fresh and precise — avoid the first idea that comes to mind if it is a cliché.",
            },
            {
              heading: "Connotation and precision",
              body: "Every word carries **connotation** — associations beyond the dictionary. ‘Slim’ and ‘scrawny’ both mean thin, but one flatters and one insults. In descriptive writing, check each adjective: does its connotation serve the **dominant impression** you want? A word that sounds impressive but means nothing precise (‘very’, ‘really’, ‘nice’) weakens the image — replace it with a specific noun or verb.",
            },
          ],
          keyFormulas: [
            { name: "Sensory detail", statement: "Concrete description engaging sight, sound, smell, touch or taste." },
            { name: "Simile", statement: "Comparison using ‘like’ or ‘as’: ‘quiet as a held breath’." },
            { name: "Metaphor", statement: "Direct comparison: ‘the city was a machine’." },
            { name: "Personification", statement: "Human qualities given to the non-human: ‘the wind declared itself’." },
            { name: "Connotation", statement: "The associations a word carries beyond its dictionary meaning." },
          ],
          workedExample: {
            problem: "Improve this telling sentence: ‘The old house was scary.’",
            solution: "The old house groaned in the wind, its windows like blind eyes, and the garden had grown wild enough to hide anything. — Now the reader sees the movement, feels the menace and supplies the fear themselves.",
          },
          questions: [
            {
              id: "el10-u10-sensfig-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which sentence best ‘shows’ rather than ‘tells’?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The market was busy and noisy." },
                  { id: "b", text: "Stalls squeezed together, the air thick with spice and shouting, coins flashing between fingers." },
                  { id: "c", text: "It was a very exciting place to be." },
                  { id: "d", text: "Everyone felt happy there." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "technique", name: "Show don’t tell", statement: "Concrete sensory evidence replaces abstract judgement." }],
                steps: [{ reasoning: "Only (b) supplies concrete sensory detail — sight, sound and smell — instead of naming feelings or categories.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** It shows the scene through sensory detail rather than telling us it was busy.",
                commonErrors: ["Choosing (a): ‘busy and noisy’ still names categories rather than showing images."],
              },
            },
            {
              id: "el10-u10-sensfig-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Rewrite ‘The soup was nice’ as one sentence that shows the soup through a sensory detail.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sensory substitution", statement: "Replace the telling adjective with evidence from one of the five senses." }],
                steps: [
                  { reasoning: "The sentence contains a concrete sensory detail — sight, smell, taste, touch or sound.", marks: 1, markCode: "AO4" },
                  { reasoning: "The telling phrase ‘was nice’ is gone and the sentence is controlled and accurate.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘Steam carried thyme and black pepper to the back of my throat as the first spoonful warmed my hands.’",
                commonErrors: ["Keeping ‘nice’ or ‘delicious’ — still telling.", "Generic detail like ‘it smelled good’ that shows nothing specific."],
              },
            },
            {
              id: "el10-u10-sensfig-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Write two sentences describing a kitchen at dawn. One sentence must contain a simile and the other a personification.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Simile and personification", statement: "Comparisons and human qualities must be accurate and serve the image." },
                  { kind: "skill", name: "Sentence control", statement: "Crafted sentences need accurate punctuation, spelling and grammar." },
                ],
                steps: [
                  { reasoning: "A simile using ‘like’ or ‘as’ is used accurately.", marks: 1, markCode: "AO4" },
                  { reasoning: "A personification gives a non-human thing a human quality or action.", marks: 1, markCode: "AO4" },
                  { reasoning: "Both sentences are anchored in sensory detail of the scene.", marks: 1, markCode: "AO4" },
                  { reasoning: "Sentences are controlled, punctuated and free of errors.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘Light came in like spilled milk across the cold counter. The old fridge grumbled awake, complaining at the dark.’",
                commonErrors: ["Writing a metaphor while calling it a simile, or plain description while calling it personification.", "Devices that decorate rather than sharpen the image."],
              },
            },
            {
              id: "el10-u10-sensfig-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Describe a busy market in four sentences, concentrating on sound and smell.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sensory focus", statement: "Restricting to sound and smell forces inventive, non-visual description." },
                  { kind: "skill", name: "Sentence variety", statement: "Varying sentence length controls the pace of description." },
                ],
                steps: [
                  { reasoning: "At least four distinct sensory impressions are given, mainly sound and smell.", marks: 1, markCode: "AO4" },
                  { reasoning: "Figurative language or a precise verb is used at least once.", marks: 1, markCode: "AO4" },
                  { reasoning: "Details are specific and original rather than generic.", marks: 1, markCode: "AO4" },
                  { reasoning: "Sentence lengths vary to control pace.", marks: 1, markCode: "AO4" },
                  { reasoning: "Punctuation, spelling and grammar are accurate throughout.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "A four-sentence passage rich in sound and smell, e.g. ‘The market announced itself before I saw it — a tide of shouting, the clang of shutters, knives on stone. Spices hit the back of my throat: turmeric, cumin, something sweet I could not name. Stalls called their prices over each other in different languages, and my ears rang pleasantly for an hour afterwards. By the time I left, my clothes smelled of smoke and my pockets of warm bread.’",
                commonErrors: ["Defaulting to sight despite the sound-and-smell focus.", "Generic sensory words like ‘nice smells’ or ‘loud noises’."],
              },
            },
            {
              id: "el10-u10-sensfig-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Write a short descriptive paragraph (about 60-80 words) about a beach at sunset.",
              parts: [
                { label: "a", prompt: "Plan: name three sensory details you will use and the sense each appeals to.", marks: 2 },
                { label: "b", prompt: "Write the opening two sentences of the paragraph.", marks: 2 },
                { label: "c", prompt: "Complete the paragraph with a strong closing image.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Planning description", statement: "Sensory planning prevents generic, unfocused description." },
                  { kind: "technique", name: "Closing image", statement: "A final concrete image gives a description shape and resonance." },
                ],
                steps: [
                  { part: "a", reasoning: "At least two distinct senses are identified with specific details.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "Details are concrete rather than generic.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The opening sentences establish the scene with sensory or figurative detail.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The sentences are controlled and punctuated accurately.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The closing image is concrete, memorable and fits the dominant impression.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Figurative language or precise word choice is sustained into the ending.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The paragraph is cohesive and largely error-free.", marks: 1, markCode: "AO5" },
                ],
                levels: LEVELS_3_PART,
                finalAnswer: "A 60-80 word paragraph with planned sensory detail, a strong opening and a resonant closing image — e.g. opening ‘The tide withdrew like a held breath…’ and closing on the last red line of light sinking into the wet sand.",
                commonErrors: ["Skipping the plan and producing generic description.", "Ending abruptly with no closing image."],
              },
            },
            {
              id: "el10-u10-sensfig-q6",
              difficulty: "challenge",
              totalMarks: 12,
              stem: "Write a descriptive passage of about 120 words about a scene of your choice.",
              parts: [
                { label: "a", prompt: "List five pieces of sensory detail you will include.", marks: 3 },
                { label: "b", prompt: "Write three sentences — one simile, one metaphor and one personification.", marks: 3 },
                { label: "c", prompt: "Write the complete polished passage.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sustained sensory description", statement: "Multiple senses and figurative devices must work together toward one impression." },
                  { kind: "skill", name: "Polished craft", statement: "Top-band description integrates technique, variety and accuracy." },
                ],
                steps: [
                  { part: "a", reasoning: "Five sensory details are listed across at least three different senses.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The details are specific rather than generic.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The details support a coherent dominant impression.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The simile is accurate and uses ‘like’ or ‘as’ correctly.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The metaphor states the comparison directly and freshly.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The personification gives a non-human thing a convincing human quality.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "A clear dominant impression is sustained throughout.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Figurative language is integrated naturally, not bolted on.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "A wide range of senses is engaged.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sentence lengths vary to control pace.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Vocabulary is precise and largely error-free.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The passage forms a coherent, satisfying whole.", marks: 1, markCode: "AO4" },
                ],
                levels: LEVELS_6_PART,
                finalAnswer: "A ~120-word passage demonstrating planned sensory detail, all three figurative devices, a sustained dominant impression, varied sentences and accurate, precise language.",
                commonErrors: ["Listing devices without integrating them into the scene.", "Generic sensory detail and inconsistent tone."],
              },
            },
          ],
        },
        {
          id: "el10-u10-structuring-description",
          title: "Structuring a description",
          skill: "Structure a description around a dominant impression, using zooming, perspective and a strong opening and close.",
          sections: [
            {
              heading: "Dominant impression",
              body: "Every good description has a **dominant impression** — the single mood or idea it builds towards: decay, warmth, menace, freedom. Decide it first, then select only details that serve it. A ‘cozy’ café description needs lamplight and steam, not the flickering tube light above the counter. Every detail is a vote for or against the impression.",
            },
            {
              heading: "Zooming in",
              body: "Control the reader’s eye by **zooming**: start wide (the street, the sky, the crowd) and narrow to a single detail (a crack in the pavement, a wilting flower). Alternatively zoom out from a small object to its setting. The order of presentation is structure — it decides what the reader notices first and what they return to. Plan the sequence before writing.",
            },
            {
              heading: "Perspective, opening and closing",
              body: "Choose a **perspective**: first person puts the reader inside the scene (‘I smelled…’); third person gives a more detached, observational view. The **opening** should establish place and mood immediately; the **closing** should land on a resonant image — an object, a sound, a thought — rather than trailing off. A strong close echoes or completes the opening’s impression.",
            },
          ],
          keyFormulas: [
            { name: "Dominant impression", statement: "The single mood or idea a description builds towards; every detail serves it." },
            { name: "Zooming in", statement: "Ordering detail from wide to narrow (or narrow to wide) to control what the reader notices." },
            { name: "Perspective", statement: "The viewpoint chosen — first-person immersion or third-person observation." },
          ],
          workedExample: {
            problem: "Plan the structure for a description of an old library with a dominant impression of peaceful decay.",
            solution: "Perspective: third person, slightly detached. Opening: wide shot of the quiet street outside. Zoom: the heavy door, the smell of dust and paper, shafts of light. Close: a single detail — dust motes in the light, or a book left open mid-sentence — echoing the stillness. Every detail chosen serves ‘peaceful decay’.",
          },
          questions: [
            {
              id: "el10-u10-structdesc-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is a ‘dominant impression’ in descriptive writing?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The first sentence of the description." },
                  { id: "b", text: "The single mood or idea the whole description builds towards." },
                  { id: "c", text: "The longest sentence in the passage." },
                  { id: "d", text: "A list of all five senses." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Dominant impression", statement: "The unifying mood or idea that all details serve." }],
                steps: [{ reasoning: "A dominant impression is the single effect — decay, warmth, menace — that every selected detail supports.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** The single mood or idea the description builds towards.",
                commonErrors: ["Confusing it with the opening line or a technique."],
              },
            },
            {
              id: "el10-u10-structdesc-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Write an opening sentence for a description of an abandoned house that establishes a dominant impression of decay.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Impression-led opening", statement: "The first sentence should establish mood through a concrete image." }],
                steps: [
                  { reasoning: "The sentence conveys decay through a concrete image or figurative detail.", marks: 1, markCode: "AO4" },
                  { reasoning: "The sentence is controlled, punctuated and accurate.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘The garden had forgotten the house existed, brambles stitching themselves through the porch where the door hung open like a dropped jaw.’",
                commonErrors: ["Telling us it was ‘run down’ instead of showing decay.", "An opening with no mood at all."],
              },
            },
            {
              id: "el10-u10-structdesc-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Describe a single object (for example an old pocket watch) in three sentences, zooming in from overall appearance to fine detail.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Zooming in", statement: "Ordering detail from whole to part controls the reader’s attention." },
                  { kind: "skill", name: "Sustained focus", statement: "Three sentences must stay on one object while narrowing." },
                ],
                steps: [
                  { reasoning: "Details move logically from overall appearance to fine detail.", marks: 1, markCode: "AO4" },
                  { reasoning: "Sensory detail is used throughout.", marks: 1, markCode: "AO4" },
                  { reasoning: "At least one figurative or precise language choice sharpens the image.", marks: 1, markCode: "AO4" },
                  { reasoning: "Sentences are controlled and accurate.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘The watch lay in my palm, heavy as a small stone, its brass gone green at the edges. The glass was cracked in a star across the face, but the hands still pointed somewhere — ten past, always ten past. Up close I could see the maker’s mark worn smooth, a name nobody alive could read.’",
                commonErrors: ["Jumping between unrelated details instead of zooming.", "Describing the room rather than the object."],
              },
            },
            {
              id: "el10-u10-structdesc-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Plan and begin a description of a storm approaching: state your perspective, the order of details, and write the first three sentences.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Structural planning", statement: "Perspective and detail order must be decided before writing." },
                  { kind: "technique", name: "Build-up", statement: "The opening should move from stillness to disturbance." },
                ],
                steps: [
                  { reasoning: "A clear perspective is stated (first or third person).", marks: 1, markCode: "AO4" },
                  { reasoning: "The order of details is logical — e.g. sky, wind, then impact.", marks: 1, markCode: "AO4" },
                  { reasoning: "The first three sentences show a build from calm to disturbance.", marks: 1, markCode: "AO4" },
                  { reasoning: "Sensory detail and at least one figurative choice are used.", marks: 1, markCode: "AO4" },
                  { reasoning: "Language is controlled and accurate.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Plan + three sentences showing stillness breaking into storm, e.g. third-person view moving from a motionless garden to the first gust and the sky ‘turning the colour of a held breath’.",
                commonErrors: ["Writing before planning, producing a shapeless opening.", "Starting at the storm’s peak rather than building to it."],
              },
            },
            {
              id: "el10-u10-structdesc-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Write the opening section (about 50 words) of a description of a place you know well.",
              parts: [
                { label: "a", prompt: "State the dominant impression you will create and why that impression suits the place.", marks: 2 },
                { label: "b", prompt: "List the order in which you will present details (wide to narrow, or narrow to wide).", marks: 2 },
                { label: "c", prompt: "Write the first two sentences of the description.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Impression planning", statement: "The dominant impression must be chosen and justified before details." },
                  { kind: "technique", name: "Ordered detail", statement: "The sequence of details is itself a structural choice." },
                ],
                steps: [
                  { part: "a", reasoning: "A single dominant impression is named clearly.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The choice is justified by a feature of the place.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The order of details is logical and serves the impression.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "A zoom direction (wide-to-narrow or reverse) is identified.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The opening sentences establish place and mood immediately.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sensory or figurative detail is used.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sentences are controlled and accurate.", marks: 1, markCode: "AO5" },
                ],
                levels: LEVELS_3_PART,
                finalAnswer: "A planned opening: clear dominant impression, justified detail order, and two sentences that establish place and mood with sensory or figurative detail.",
                commonErrors: ["Choosing details before choosing the impression.", "An opening that describes everything at once rather than focusing."],
              },
            },
            {
              id: "el10-u10-structdesc-q6",
              difficulty: "challenge",
              totalMarks: 12,
              stem: "Write a complete descriptive passage (about 120 words) about a place or object.",
              parts: [
                { label: "a", prompt: "Plan: state the dominant impression, your perspective and the order of detail.", marks: 3 },
                { label: "b", prompt: "Write three sentences that establish the scene.", marks: 3 },
                { label: "c", prompt: "Write the complete polished passage.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Structural control", statement: "Impression, perspective and order must be planned before drafting." },
                  { kind: "technique", name: "Sustained description", statement: "The whole passage must serve one dominant impression." },
                ],
                steps: [
                  { part: "a", reasoning: "A single dominant impression is named.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "Perspective (first or third person) is chosen deliberately.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The order of detail (zoom sequence) is logical.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The three sentences establish place and mood.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Sensory and figurative detail is present.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The sentences are controlled and accurate.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The dominant impression is sustained throughout.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The zoom structure guides the reader’s attention.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Figurative language is integrated naturally.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "A resonant closing image completes the structure.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sentence variety and precise vocabulary are controlled.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The passage is coherent and largely error-free.", marks: 1, markCode: "AO4" },
                ],
                levels: LEVELS_6_PART,
                finalAnswer: "A ~120-word passage showing planned impression, perspective and zoom; scene-establishing opening; sustained sensory and figurative detail; resonant close; controlled, accurate prose.",
                commonErrors: ["No plan, so details wander without focus.", "A flat ending that trails off instead of closing the impression."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u10-l11-notes", title: "Descriptive writing — notes",
      summary: "Show don't tell: sensory detail, figurative language and a dominant impression give description shape and power.",
      sections: [
        { heading: "Key idea", body: "Choose one dominant impression, plan your detail order (zoom in or out), and select only details that serve the mood." },
        { heading: "Exam technique", body: "Plan before writing: impression first, then senses, then sequence. Close on a resonant image rather than trailing off." },
      ],
    },
  },

  // ============================ LESSON 10-2 ============================
  {
    file: "lesson-10-2.ts", exportName: "lesson102",
    lesson: {
      id: "el10-u10-lesson-10-2", code: "10-2",
      title: "Narrative Voice, Dialogue and Pacing",
      goal: "I CAN use dialogue, distinct character voices and sentence control to pace a narrative.",
      standards: ["4EA1 Paper 2 Section B", "4EA1 AO4", "4EA1 AO5"],
      vocabulary: [
        { term: "Dialogue", definition: "Written speech between characters; reveals character and advances plot." },
        { term: "Subtext", definition: "What a character means beneath what they literally say." },
        { term: "Character voice", definition: "The distinct way each character speaks — word choice, rhythm, register." },
        { term: "Pacing", definition: "The speed at which a narrative unfolds, controlled by sentence and paragraph length." },
        { term: "Sentence fragment", definition: "A sentence missing a main verb or subject, used deliberately for impact." },
        { term: "Climax", definition: "The point of highest tension in a narrative." },
      ],
      concepts: [
        {
          id: "el10-u10-dialogue-voice",
          title: "Dialogue and character voice",
          skill: "Write dialogue that reveals character through distinct voices, subtext and accurate speech punctuation.",
          sections: [
            {
              heading: "Dialogue reveals character",
              body: "Dialogue should never be filler. Every line must reveal character, advance the plot or both. A nervous character speaks in short, hedged sentences; a confident one in longer, declarative ones. **Subtext** — what is meant beneath what is said — is where depth lives: ‘Fine. Whatever you want.’ says far more than its literal meaning.",
            },
            {
              heading: "Distinct voices",
              body: "Give each character a recognisable voice: different sentence lengths, vocabulary level, habits (‘like’, ‘you know’, formal vs slang) and what they avoid saying. Test it: cover the names — could you still tell who is speaking? If every character sounds the same, the dialogue is failing. Voices should also reflect relationships: a teenager and a grandparent do not share a register.",
            },
            {
              heading: "Punctuating speech",
              body: "AO5 accuracy matters in dialogue: inverted commas (or speech marks), commas inside the punctuation, new paragraphs for each speaker, and correct punctuation of the reporting clause. ‘I’m fine,’ she said, not looking up. — the comma lives inside the quote, the reporting clause follows lowercase. Errors here are among the most visible in the exam.",
            },
          ],
          keyFormulas: [
            { name: "Dialogue", statement: "Written speech that reveals character and advances plot; never filler." },
            { name: "Subtext", statement: "What a character means beneath what they literally say." },
            { name: "Character voice", statement: "Each speaker’s distinct diction, rhythm and register." },
            { name: "Speech punctuation", statement: "Quotes, internal commas, new paragraph per speaker, lowercase reporting clause." },
          ],
          workedExample: {
            problem: "Write two lines of dialogue where a character is angry without saying ‘angry’ or any synonym.",
            solution: "‘You had ONE job.’ / ‘Don’t. Just don’t.’ — the capital letter, the clipped second line and the unfinished first sentence all convey rage without naming it; the punctuation does the work.",
          },
          questions: [
            {
              id: "el10-u10-dialvoice-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the main purpose of dialogue in narrative writing?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "To fill space between action scenes." },
                  { id: "b", text: "To reveal character and advance the plot." },
                  { id: "c", text: "To show off different accents." },
                  { id: "d", text: "To slow the pace of the story." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "convention", name: "Function of dialogue", statement: "Dialogue earns its place by revealing character or moving the plot." }],
                steps: [{ reasoning: "Dialogue that does neither is padding; its two legitimate jobs are characterisation and plot.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** To reveal character and advance the plot.",
                commonErrors: ["Choosing (d): dialogue can speed or slow pace, but that is an effect, not its purpose."],
              },
            },
            {
              id: "el10-u10-dialvoice-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Write two lines of dialogue in which a character is angry without using the word ‘angry’ or any synonym.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Implied emotion in dialogue", statement: "Anger is shown through clipped phrasing, punctuation and subtext." }],
                steps: [
                  { reasoning: "The anger is conveyed through word choice, rhythm or punctuation rather than named.", marks: 1, markCode: "AO4" },
                  { reasoning: "Speech punctuation is accurate.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘You had ONE job.’ / ‘Don’t. Just don’t.’ — caps, fragments and a trailing-off line imply fury.",
                commonErrors: ["Using ‘furious’ or ‘mad’ — still naming the emotion.", "Flat statements with no emotional signal."],
              },
            },
            {
              id: "el10-u10-dialvoice-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Write a short exchange of four to six lines between two characters who disagree about something. Make their voices distinct through word choice and rhythm.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Distinct voices", statement: "Each speaker needs recognisable diction and rhythm." },
                  { kind: "technique", name: "Subtext", statement: "Disagreement lands harder when the real issue sits beneath the surface." },
                ],
                steps: [
                  { reasoning: "A clear disagreement or conflict is established.", marks: 1, markCode: "AO4" },
                  { reasoning: "The two voices are distinguishable by word choice or rhythm.", marks: 1, markCode: "AO4" },
                  { reasoning: "Subtext adds depth — characters may avoid saying the real issue.", marks: 1, markCode: "AO4" },
                  { reasoning: "Speech punctuation and paragraphing are accurate throughout.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "A 4-6 line exchange where, e.g., one character speaks in clipped sentences and the other in long defensive ones, disagreeing about something small that stands for something larger.",
                commonErrors: ["Both characters sounding identical.", "Characters stating their feelings outright, killing subtext."],
              },
            },
            {
              id: "el10-u10-dialvoice-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Write a passage of five to seven sentences that introduces a character through dialogue and action.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Characterisation through dialogue", statement: "Speech plus action together build a character faster than description." },
                  { kind: "skill", name: "Integrated craft", statement: "Dialogue and narration must work together seamlessly." },
                ],
                steps: [
                  { reasoning: "The dialogue reveals at least one clear trait of the character.", marks: 1, markCode: "AO4" },
                  { reasoning: "Action or gesture complements and reinforces what is said.", marks: 1, markCode: "AO4" },
                  { reasoning: "The character’s voice is consistent and convincing.", marks: 1, markCode: "AO4" },
                  { reasoning: "Subtext or nuance is present — not everything is stated.", marks: 1, markCode: "AO4" },
                  { reasoning: "Punctuation, spelling and grammar are accurate.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "A 5-7 sentence passage where dialogue and action jointly reveal character — e.g. a character who claims not to care while their hands do the opposite.",
                commonErrors: ["Dialogue that could belong to anyone — no distinctive voice.", "Action and speech contradicting each other accidentally rather than for effect."],
              },
            },
            {
              id: "el10-u10-dialvoice-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Write a short dialogue scene between two characters.",
              parts: [
                { label: "a", prompt: "Plan: give each character a distinct voice — describe how each speaks and why.", marks: 2 },
                { label: "b", prompt: "Write the first two lines of dialogue.", marks: 2 },
                { label: "c", prompt: "Write the rest of the exchange.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Voice planning", statement: "Distinct voices are easier to sustain when planned first." },
                  { kind: "technique", name: "Dialogue accuracy", statement: "Speech punctuation is an AO5 priority." },
                ],
                steps: [
                  { part: "a", reasoning: "Each character is given a distinct voice trait.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The trait is justified by the character’s nature or relationship.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The opening lines are in-voice and punctuated accurately.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "The lines establish the relationship or tension.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Subtext or tension develops through the exchange.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Voices remain distinct and consistent.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Speech punctuation is accurate throughout.", marks: 1, markCode: "AO5" },
                ],
                levels: LEVELS_3_PART,
                finalAnswer: "A planned and punctuated dialogue scene with two recognisably different voices and developing tension or subtext.",
                commonErrors: ["Voices converging to the same register halfway through.", "Speech punctuation errors throughout."],
              },
            },
            {
              id: "el10-u10-dialvoice-q6",
              difficulty: "challenge",
              totalMarks: 12,
              stem: "Write a scene of about 100-120 words built around a conversation between two characters.",
              parts: [
                { label: "a", prompt: "Character notes: what does each character want, and how does each speak?", marks: 3 },
                { label: "b", prompt: "Write the dialogue exchange itself.", marks: 3 },
                { label: "c", prompt: "Write the complete scene, including narration around the dialogue.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Scene construction", statement: "Dialogue, narration and subtext must be orchestrated for effect." },
                  { kind: "skill", name: "Integrated accuracy", statement: "Top-band scenes combine craft and AO5 control." },
                ],
                steps: [
                  { part: "a", reasoning: "Each character’s want or motive is clear.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "Each character’s voice is distinct and justified.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The relationship between them is understood.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The exchange has a clear dramatic purpose.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Voices remain distinct throughout.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Speech punctuation is accurate.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Narration frames and complements the dialogue.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Subtext adds depth beneath the surface talk.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Action or gesture reinforces what is said.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Tension or change occurs within the scene.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sentence variety and precise vocabulary are controlled.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The scene is coherent and largely error-free.", marks: 1, markCode: "AO4" },
                ],
                levels: LEVELS_6_PART,
                finalAnswer: "A ~100-120 word scene: clear motives, two distinct voices, accurate speech punctuation, narration that complements rather than competes with dialogue, subtext, and a controlled, error-light finish.",
                commonErrors: ["Dialogue floating without narration or purpose.", "Identical voices and missing subtext cap the mark."],
              },
            },
          ],
        },
        {
          id: "el10-u10-pacing-sentences",
          title: "Pacing and sentence control",
          skill: "Control narrative pace through sentence length, fragments, paragraphing and climax placement.",
          sections: [
            {
              heading: "Sentence length is pace",
              body: "Short sentences hit fast; long sentences flow slow. In tense moments, writers strip sentences to fragments — ‘Footsteps.’ — and in reflective moments they let clauses accumulate. The reader’s breathing literally follows the sentence rhythm. Analyse your own drafts: does the pace match the emotion of the moment?",
            },
            {
              heading: "Fragments, questions and repetition",
              body: "Deliberate **fragments** (‘No going back now.’) create urgency and voice. **Rhetorical questions** pull the reader inside a character’s panic. **Anaphora** — repeating a sentence opening — builds momentum: ‘It took the washing. It took the lid. It took everything.’ Used sparingly, these devices turn prose into rhythm.",
            },
            {
              heading: "Paragraphing and climax",
              body: "Paragraph breaks are pauses — a one-line paragraph is a held breath before impact. Place the **climax** where the paragraphing is sparsest and the sentences shortest: maximum compression at maximum tension. Then release — longer sentences in the aftermath let the reader breathe. Pace is structure, not just style.",
            },
          ],
          keyFormulas: [
            { name: "Pacing", statement: "Narrative speed controlled by sentence length, fragments and paragraph breaks." },
            { name: "Sentence fragment", statement: "A deliberately incomplete sentence used for impact or voice." },
            { name: "Anaphora", statement: "Repeating the opening of successive sentences to build momentum." },
            { name: "Climax", statement: "The point of highest tension, best served by compressed sentences and sparse paragraphing." },
          ],
          workedExample: {
            problem: "Rewrite this flat sentence to increase pace: ‘She walked slowly down the long dark corridor and could hear something following her.’",
            solution: "She walked down the corridor. Something followed. — splitting the sentence and fragmenting the second half turns a report into a jolt.",
          },
          questions: [
            {
              id: "el10-u10-pacing-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What effect do very short sentences have in a tense scene?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "They slow the reader down." },
                  { id: "b", text: "They create speed, impact and urgency." },
                  { id: "c", text: "They confuse the reader." },
                  { id: "d", text: "They reduce the tension." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "technique", name: "Sentence length and pace", statement: "Short sentences accelerate pace and heighten impact." }],
                steps: [{ reasoning: "Short sentences strike quickly and give moments weight — the opposite of slowing or confusing.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** They create speed, impact and urgency.",
                commonErrors: ["Thinking short sentences are ‘lazy’ rather than deliberate."],
              },
            },
            {
              id: "el10-u10-pacing-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Rewrite this sentence as two shorter sentences to increase pace: ‘She walked slowly down the long dark corridor and could hear something following her.’",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sentence splitting", statement: "Breaking a long sentence creates beats and urgency." }],
                steps: [
                  { reasoning: "The sentence is split into two shorter sentences, ideally ending on a fragment or short punch.", marks: 1, markCode: "AO4" },
                  { reasoning: "The rewrite is accurate and punctuated correctly.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘She walked down the corridor. Something followed.’ or ‘She walked. Something followed.’",
                commonErrors: ["Splitting without changing the effect — two equally long sentences.", "Losing the meaning of the original."],
              },
            },
            {
              id: "el10-u10-pacing-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Write a tense moment in three or four sentences using varied sentence lengths.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Varied sentence length", statement: "Alternating long and short sentences creates rhythm and tension." },
                  { kind: "skill", name: "Controlled prose", statement: "Variety must still be accurate and coherent." },
                ],
                steps: [
                  { reasoning: "Sentence lengths genuinely vary — not four identical structures.", marks: 1, markCode: "AO4" },
                  { reasoning: "The variation builds or releases tension appropriately.", marks: 1, markCode: "AO4" },
                  { reasoning: "At least one very short sentence or fragment provides impact.", marks: 1, markCode: "AO4" },
                  { reasoning: "The writing is accurate and coherent.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "A 3-4 sentence tense moment with clear length variation — e.g. a long breathless sentence followed by a two-word detonation.",
                commonErrors: ["All sentences the same length — no pace control.", "Fragments used randomly rather than for impact."],
              },
            },
            {
              id: "el10-u10-pacing-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Write the opening of a chase scene in three or four sentences that gradually increases pace.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Gradual acceleration", statement: "Pace should build sentence by sentence toward the chase." }],
                steps: [
                  { reasoning: "The opening starts relatively calm before accelerating.", marks: 1, markCode: "AO4" },
                  { reasoning: "Sentence length visibly decreases as tension rises.", marks: 1, markCode: "AO4" },
                  { reasoning: "Sensory detail conveys motion and urgency.", marks: 1, markCode: "AO4" },
                  { reasoning: "The final sentence or fragment lands with maximum impact.", marks: 1, markCode: "AO4" },
                  { reasoning: "Language is accurate throughout.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "An opening that moves from a longer establishing sentence to shorter, faster beats ending on a punch — e.g. distant engine, nearer, then ‘Go.’",
                commonErrors: ["Starting at full speed — no build means no acceleration.", "No variation in sentence length."],
              },
            },
            {
              id: "el10-u10-pacing-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Write a chase scene of about 80-100 words.",
              parts: [
                { label: "a", prompt: "Plan the pace: which moments will be slow, fast and climactic?", marks: 2 },
                { label: "b", prompt: "Write the build-up (the first half).", marks: 2 },
                { label: "c", prompt: "Write the climax and ending.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Pace planning", statement: "Deliberate variation across the scene prevents monotony." },
                  { kind: "technique", name: "Climactic compression", statement: "The climax earns its impact through compressed sentences and paragraph breaks." },
                ],
                steps: [
                  { part: "a", reasoning: "Slow, fast and climactic moments are identified in the plan.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The plan links pace to the scene’s emotional shape.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The build-up uses longer sentences and accumulating detail.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The half ends on a turn or acceleration.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The climax uses the shortest sentences and sparsest paragraphing.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The ending releases pace — longer sentences or a reflective close.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Language is accurate and coherent throughout.", marks: 1, markCode: "AO5" },
                ],
                levels: LEVELS_3_PART,
                finalAnswer: "A planned ~80-100 word chase: slower build, accelerating middle, compressed climax, released ending — with varied sentence lengths throughout.",
                commonErrors: ["Uniform pace — no contrast between build and climax.", "Climax written in long sentences, deflating the peak."],
              },
            },
            {
              id: "el10-u10-pacing-q6",
              difficulty: "challenge",
              totalMarks: 12,
              stem: "Write a suspenseful scene of about 120 words.",
              parts: [
                { label: "a", prompt: "Plan: your sentence-length pattern, paragraph breaks and climax point.", marks: 3 },
                { label: "b", prompt: "Write the opening that establishes unease.", marks: 3 },
                { label: "c", prompt: "Write the complete scene.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Pace architecture", statement: "Sentence pattern, paragraphing and climax placement form one design." },
                  { kind: "technique", name: "Suspense through form", statement: "Unease is built as much by structure as by content." },
                ],
                steps: [
                  { part: "a", reasoning: "A sentence-length pattern is planned (e.g. long-short-long).", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "Paragraph breaks are placed for dramatic pauses.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "A clear climax point is identified.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The opening establishes unease through detail or voice.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The opening uses controlled, varied sentences.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "The opening hints at disturbance without revealing it.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Pace visibly builds toward the climax.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The climax is compressed and impactful.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Paragraph breaks create effective pauses.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The ending releases or withholds tension deliberately.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sentence variety and precise vocabulary are sustained.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The scene is coherent and largely error-free.", marks: 1, markCode: "AO4" },
                ],
                levels: LEVELS_6_PART,
                finalAnswer: "A ~120-word suspenseful scene demonstrating planned sentence-length variation, dramatic paragraph breaks, a compressed climax and a deliberate ending — coherent and mostly accurate.",
                commonErrors: ["No planned pace — tension arrives randomly.", "Overlong climax sentences that dissipate impact."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u10-l12-notes", title: "Dialogue and pacing — notes",
      summary: "Dialogue reveals character through distinct voices and subtext; sentence length and paragraphing control narrative pace.",
      sections: [
        { heading: "Key idea", body: "Every line of dialogue must reveal character or advance plot; cover the names test — if voices are identical, rewrite." },
        { heading: "Exam technique", body: "Match pace to emotion: build with longer sentences, strike with fragments at the climax, then release. Plan the breaks before writing." },
      ],
    },
  },

  // ============================ LESSON 10-3 ============================
  {
    file: "lesson-10-3.ts", exportName: "lesson103",
    lesson: {
      id: "el10-u10-lesson-10-3", code: "10-3",
      title: "Revising and Polishing Your Writing",
      goal: "I CAN revise drafts for ambitious vocabulary, appropriate register and AO5 accuracy.",
      standards: ["4EA1 Paper 2 Section B", "4EA1 AO4", "4EA1 AO5"],
      vocabulary: [
        { term: "Register", definition: "The level of formality in writing, matched to audience and purpose." },
        { term: "Cliché", definition: "An overused phrase that has lost its impact through repetition." },
        { term: "Editing", definition: "Improving content and style — word choice, imagery, structure." },
        { term: "Proofreading", definition: "Checking for mechanical errors — spelling, punctuation, grammar." },
        { term: "Homophone", definition: "Words that sound alike but differ in meaning and spelling (their/there/they’re)." },
        { term: "Tense consistency", definition: "Keeping the same time frame throughout a piece of writing." },
      ],
      concepts: [
        {
          id: "el10-u10-vocabulary-register",
          title: "Ambitious vocabulary and register",
          skill: "Replace vague words and clichés with precise, ambitious vocabulary suited to the register.",
          sections: [
            {
              heading: "Precise verbs and adjectives",
              body: "Weak writing leans on ‘said’, ‘went’, ‘nice’, ‘bad’, ‘very’. **Precise verbs** carry the action: not ‘he went’ but ‘he slouched’, ‘he crept’, ‘he marched’. Precise adjectives carry judgement: not ‘bad storm’ but ‘a screaming gale’. One well-chosen verb can replace an adverb and a whole clause — ‘whispered’ beats ‘said quietly’.",
            },
            {
              heading: "Connotation and register",
              body: "Every upgrade must check **connotation** and **register**. ‘Slender’ flatters where ‘scrawny’ insults; ‘kids’ suits informal narrative but not a formal report. Ambitious vocabulary is not the rarest word — it is the most precise word. If a simpler word says exactly what you mean, keep it; precision beats obscurity every time.",
            },
            {
              heading: "Killing clichés",
              body: "Clichés — ‘busy as a bee’, ‘dark as night’, ‘at the end of the day’ — are tired images the reader has already seen. They signal lazy writing. Replace them with fresh, specific comparisons drawn from your own scene. If you notice a phrase you have heard before, it probably does not belong in your draft.",
            },
          ],
          keyFormulas: [
            { name: "Precise verb", statement: "A specific action word that replaces ‘said/went’ and often removes the need for an adverb." },
            { name: "Connotation", statement: "The emotional colouring of a word; must match the intended impression." },
            { name: "Register", statement: "The level of formality matched to audience and purpose." },
            { name: "Cliché", statement: "An overused expression that weakens description through familiarity." },
          ],
          workedExample: {
            problem: "Revise: ‘The city was big and busy.’",
            solution: "Skyscrapers shoulder each other above a river of headlights, and the pavement hums with a thousand voices. — ‘Big and busy’ becomes scale (skyscrapers), conflict (shoulder) and sound (hums), in a register that matches an energetic scene.",
          },
          questions: [
            {
              id: "el10-u10-vocabreg-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "In ‘The old man moved slowly into the room’, which verb is most precise if he enters nervously?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "crept" },
                  { id: "b", text: "strolled" },
                  { id: "c", text: "marched" },
                  { id: "d", text: "sprinted" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [{ kind: "technique", name: "Precise verb", statement: "The verb must match the intended connotation — nervousness here." }],
                steps: [{ reasoning: "Only ‘crept’ conveys nervous, hesitant movement; the others imply confidence, leisure or panic.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(a)** ‘Crept’ — it alone carries nervous connotation.",
                commonErrors: ["Choosing the rarest word rather than the most fitting."],
              },
            },
            {
              id: "el10-u10-vocabreg-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Improve these weak phrases with stronger alternatives: ‘The food was nice’ and ‘He said he was sad.’",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Upgrading weak language", statement: "Replace telling adjectives and ‘said/sad’ with precise, connotative alternatives." }],
                steps: [
                  { reasoning: "Both phrases are improved with precise, connotative language.", marks: 1, markCode: "AO5" },
                  { reasoning: "The improvements keep the original meaning and suit the register.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "e.g. ‘The stew simmered with thyme and dark beer’ and ‘His shoulders sagged; he traced the rim of his cup without drinking.’",
                commonErrors: ["Swapping ‘nice’ for a different vague word like ‘good’.", "Losing the meaning while reaching for sophistication."],
              },
            },
            {
              id: "el10-u10-vocabreg-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Rewrite ‘The dog ran across the field’ using a precise verb and one adjective chosen deliberately for its connotation.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Connotation", statement: "The adjective’s emotional colouring must serve the scene’s mood." },
                  { kind: "skill", name: "Precision", statement: "One precise word can replace several weak ones." },
                ],
                steps: [
                  { reasoning: "A precise verb replaces ‘ran’ (e.g. bounded, sprinted, careered).", marks: 1, markCode: "AO5" },
                  { reasoning: "The adjective’s connotation is deliberate and explained by the image.", marks: 1, markCode: "AO4" },
                  { reasoning: "The sentence gains sensory or figurative detail.", marks: 1, markCode: "AO4" },
                  { reasoning: "The sentence is accurate and controlled.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘The dog bounded across the wind-bruised field, ears flat against the approaching storm.’",
                commonErrors: ["Choosing a ‘posh’ word whose connotation fights the scene.", "Overloading the sentence until it loses clarity."],
              },
            },
            {
              id: "el10-u10-vocabreg-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Revise the flat sentence ‘The city was big and busy’ into an ambitious sentence of your own.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Imagery over abstraction", statement: "Replace abstract size/energy with concrete, sensory scale." },
                  { kind: "skill", name: "Register match", statement: "Ambition must suit the voice and purpose of the piece." },
                ],
                steps: [
                  { reasoning: "‘Big and busy’ is replaced by concrete imagery rather than synonyms.", marks: 1, markCode: "AO5" },
                  { reasoning: "At least one figurative or sensory choice sharpens the image.", marks: 1, markCode: "AO4" },
                  { reasoning: "The sentence has controlled rhythm.", marks: 1, markCode: "AO5" },
                  { reasoning: "The result is original, not a recycled cliché.", marks: 1, markCode: "AO4" },
                  { reasoning: "The sentence is accurate and punctuated correctly.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "e.g. ‘Skyscrapers shoulder each other above a river of headlights, and the pavement hums with a thousand voices.’",
                commonErrors: ["Replacing with ‘enormous and hectic’ — still abstract."],
                commonErrorsFix: null,
              },
            },
            {
              id: "el10-u10-vocabreg-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Revise this weak paragraph: ‘It was a nice day. The sun was hot. We went to the park. It was fun.’",
              parts: [
                { label: "a", prompt: "Identify three weak or vague words/phrases and say why each is weak.", marks: 2 },
                { label: "b", prompt: "Replace two of them with ambitious alternatives.", marks: 2 },
                { label: "c", prompt: "Rewrite the whole sentence set as one polished sentence or two.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Diagnosing weak prose", statement: "Vague evaluative words are the enemy of description." },
                  { kind: "technique", name: "Compression", statement: "Polished prose often merges weak sentences into one strong one." },
                ],
                steps: [
                  { part: "a", reasoning: "At least two genuinely vague items are identified (‘nice’, ‘hot’, ‘fun’).", marks: 1, markCode: "AO5" },
                  { part: "a", reasoning: "Each is explained as vague rather than merely listed.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Two replacements are precise and connotatively apt.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "The replacements suit the register of a sunny park scene.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The rewrite is compressed into one or two strong sentences.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sensory or figurative detail replaces the vague evaluations.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The result is accurate and well punctuated.", marks: 1, markCode: "AO5" },
                ],
                levels: LEVELS_3_PART,
                finalAnswer: "e.g. ‘The sun beat down on the park, and we sprawled across the grass, too warm and too happy to move.’ — vague evaluations become heat, posture and feeling.",
                commonErrors: ["Identifying weak words but unable to replace them.", "Rewriting into something longer rather than stronger."],
              },
            },
            {
              id: "el10-u10-vocabreg-q6",
              difficulty: "challenge",
              totalMarks: 12,
              stem: "Revise this paragraph for ambitious vocabulary and register: ‘It was a bad storm. The wind was very strong. Things broke. We were scared. It was loud.’",
              parts: [
                { label: "a", prompt: "List five weak words/phrases and give a stronger replacement for each.", marks: 3 },
                { label: "b", prompt: "Rewrite two of the sentences with figurative or sensory detail.", marks: 3 },
                { label: "c", prompt: "Write the complete revised paragraph.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Full-paragraph revision", statement: "Weak evaluative prose must become specific, sensory, connotative writing." },
                  { kind: "skill", name: "Register consistency", statement: "The revised register must stay consistent with a storm narrative." },
                ],
                steps: [
                  { part: "a", reasoning: "At least three genuinely weak items are identified with apt replacements.", marks: 1, markCode: "AO5" },
                  { part: "a", reasoning: "Replacements show connotative awareness, not just synonyms.", marks: 1, markCode: "AO4" },
                  { part: "a", reasoning: "The list covers both adjectives and verbs.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "At least one sentence gains figurative detail.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "At least one sentence gains sensory detail.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "The rewrites keep the original information.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The paragraph has a consistent narrative register.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Precise verbs and adjectives replace all weak evaluations.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Figurative or sensory detail is sustained.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Sentence variety controls pace.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Clichés are avoided.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "The revised paragraph is coherent and accurate.", marks: 1, markCode: "AO5" },
                ],
                levels: LEVELS_6_PART,
                finalAnswer: "A revised paragraph where ‘bad’, ‘very strong’, ‘things broke’, ‘scared’, ‘loud’ become connotative, sensory, precise language — e.g. ‘The storm came like a fist: slates screamed off the roof, the fence bowed double, and we pressed ourselves flat against the wall, counting seconds between thunderclaps.’",
                commonErrors: ["Using bigger words that are less precise.", "Inconsistent register or surviving clichés."],
              },
            },
          ],
        },
        {
          id: "el10-u10-accuracy-editing",
          title: "Editing and proofreading for AO5",
          skill: "Identify and correct errors in spelling, punctuation, grammar and tense to maximise AO5 accuracy marks.",
          sections: [
            {
              heading: "Editing versus proofreading",
              body: "**Editing** improves content — word choice, imagery, structure. **Proofreading** is the mechanical final check: spelling, punctuation, grammar, tense consistency. In the exam, leave five minutes specifically for proofreading; AO5 is a separate assessment objective worth real marks, and errors in dialogue punctuation or apostrophes are the most visible.",
            },
            {
              heading: "The usual suspects",
              body: "The errors that recur most: **apostrophes** (its/it’s, their/there/they’re, childrens/children’s), **commas** (after opening clauses, around parenthesis), **homophones** (your/you’re, to/too/two, hear/here), **tense slips** (was/were, begun/began) and **double negatives or agreement slips** (me and him → he and I). Learn the checklist; most errors are one of five types.",
            },
            {
              heading: "A reliable proofreading routine",
              body: "Read the draft once for sense, then once **aloud** — your ear catches what your eye skips. Check one error type at a time: apostrophes first, then commas, then homophones, then tense. Finally, verify every capital letter and full stop. A clean final pass is worth more than a rushed first draft ever was.",
            },
          ],
          keyFormulas: [
            { name: "Editing", statement: "Improving content and style before the mechanical check." },
            { name: "Proofreading", statement: "The final mechanical check for spelling, punctuation, grammar and tense." },
            { name: "Homophone", statement: "Sound-alike words needing context to distinguish: their/there/they’re, its/it’s." },
            { name: "AO5 checklist", statement: "Vocabulary, sentence structure, spelling, punctuation and grammar — checked separately." },
          ],
          workedExample: {
            problem: "Correct this sentence: ‘The childs’ toys are over their.’",
            solution: "The children’s toys are over there. — ‘childs’ needs an apostrophe before the s (children’s); ‘their’ is a homophone error for ‘there’.",
          },
          questions: [
            {
              id: "el10-u10-accuracy-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which sentence uses apostrophes correctly?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The childrens’ toys are over their." },
                  { id: "b", text: "The children’s toys are over there." },
                  { id: "c", text: "The childrens toys are over they’re." },
                  { id: "d", text: "The children’s toy’s are over there." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Apostrophe of possession", statement: "Possessive plural takes apostrophe after the s; ‘there’ is not ‘their/they’re’." }],
                steps: [{ reasoning: "Only (b) gets both the possessive ‘children’s’ and the place adverb ‘there’ right.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** children’s toys / over there.",
                commonErrors: ["Confusing there/their/they’re — the classic homophone trap."],
              },
            },
            {
              id: "el10-u10-accuracy-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Correct the errors in this sentence: ‘The dogs were chasing it’s tail in they’re garden.’",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "its versus it’s", statement: "‘Its’ is possessive; ‘it’s’ means ‘it is’. ‘Their’ is possessive; ‘they’re’ means ‘they are’." }],
                steps: [
                  { reasoning: "‘It’s tail’ should be ‘its tail’ — possession, not ‘it is’.", marks: 1, markCode: "AO5" },
                  { reasoning: "‘They’re garden’ should be ‘their garden’ — possession, not ‘they are’.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "The dogs were chasing its tail in their garden.",
                commonErrors: ["Correcting only one of the two homophone errors."],
              },
            },
            {
              id: "el10-u10-accuracy-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Identify and correct four errors in this sentence: ‘After the bell rang we ran to are classrooms but its to late to line up.’",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Comma after opening clause", statement: "A subordinate clause before the main clause takes a comma." },
                  { kind: "definition", name: "Homophones and agreement", statement: "our/are, it’s/its, too/to are tested constantly." },
                ],
                steps: [
                  { reasoning: "A comma is needed after ‘rang’ to close the opening clause.", marks: 1, markCode: "AO5" },
                  { reasoning: "‘Are classrooms’ should be ‘our classrooms’ — wrong word.", marks: 1, markCode: "AO5" },
                  { reasoning: "‘Its to late’ should be ‘it’s too late’ — contraction and too/to.", marks: 1, markCode: "AO5" },
                  { reasoning: "The fourth error — e.g. the missing comma or any other slip in the sentence — is identified and corrected.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "After the bell rang, we ran to our classrooms, but it’s too late to line up. (Errors: comma after ‘rang’, are→our, its→it’s, to→too.)",
                commonErrors: ["Fixing the words but forgetting the comma.", "Changing meaning while correcting errors."],
              },
            },
            {
              id: "el10-u10-accuracy-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "This paragraph contains five errors. Identify and correct each one: ‘When we arrived at the cabin, it’s roof was leaking. Me and my cousin fixed it with are tarpaulin. The rain stoped by noon. Their was a fox in the trees.’",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Systematic proofreading", statement: "Check one error type at a time across the whole paragraph." }],
                steps: [
                  { reasoning: "‘It’s roof’ should be ‘its roof’ — possession.", marks: 1, markCode: "AO5" },
                  { reasoning: "‘Me and my cousin’ should be ‘My cousin and I’ — formal subject order and case.", marks: 1, markCode: "AO5" },
                  { reasoning: "‘Are tarpaulin’ should be ‘a tarpaulin’ — wrong word.", marks: 1, markCode: "AO5" },
                  { reasoning: "‘Stoped’ should be ‘stopped’ — spelling.", marks: 1, markCode: "AO5" },
                  { reasoning: "‘Their was a fox’ should be ‘There was a fox’ — homophone.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "When we arrived at the cabin, its roof was leaking. My cousin and I fixed it with a tarpaulin. The rain stopped by noon. There was a fox in the trees.",
                commonErrors: ["Finding four errors and missing the fifth.", "Over-correcting: changing words that were already right."],
              },
            },
            {
              id: "el10-u10-accuracy-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Edit the following writing for accuracy.",
              parts: [
                { label: "a", prompt: "Correct the errors in: ‘The childs’ toys are over their.’", marks: 2 },
                { label: "b", prompt: "Add the missing commas in: ‘The dog which was old and grey slept in the sun.’", marks: 2 },
                { label: "c", prompt: "Explain two reasons why checking accuracy matters in imaginative writing.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Relative clause commas", statement: "Commas bracket a non-defining relative clause." },
                  { kind: "skill", name: "Why AO5 matters", statement: "Accuracy protects clarity and earns its own marks." },
                ],
                steps: [
                  { part: "a", reasoning: "‘Childs’ becomes ‘children’s’ — possessive plural apostrophe.", marks: 1, markCode: "AO5" },
                  { part: "a", reasoning: "‘Their’ becomes ‘there’ — homophone.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "A comma is added before ‘which’ and after ‘grey’ to bracket the clause.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "Both commas are placed correctly.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Errors distract the reader and break immersion in the narrative.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "AO5 is a separately assessed objective — accuracy directly earns marks.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "A third valid reason — e.g. errors can change meaning or look careless — is given.", marks: 1, markCode: "AO4" },
                ],
                levels: LEVELS_3_PART,
                finalAnswer: "(a) The children’s toys are over there. (b) The dog, which was old and grey, slept in the sun. (c) Errors break immersion; AO5 is separately marked; careless errors can change meaning.",
                commonErrors: ["Adding only one comma around the relative clause.", "Listing generic reasons without linking to imaginative writing."],
              },
            },
            {
              id: "el10-u10-accuracy-q6",
              difficulty: "challenge",
              totalMarks: 12,
              stem: "You have written a first draft of an imaginative piece. Plan and carry out a final accuracy check.",
              parts: [
                { label: "a", prompt: "Identify and correct three errors in: ‘She dont no were going.’", marks: 3 },
                { label: "b", prompt: "Correct three punctuation/capitalisation errors in: ‘the dog ran fast its tail wagging’", marks: 3 },
                { label: "c", prompt: "Describe three checks you would make to an imaginative draft and why each matters.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Accuracy checklist", statement: "Systematic checks catch different error types." },
                  { kind: "technique", name: "Proofreading routine", statement: "Reading aloud and one-type-at-a-time checks are most reliable." },
                ],
                steps: [
                  { part: "a", reasoning: "‘Dont’ becomes ‘don’t’ — apostrophe.", marks: 1, markCode: "AO5" },
                  { part: "a", reasoning: "‘No’ becomes ‘know’ — homophone.", marks: 1, markCode: "AO5" },
                  { part: "a", reasoning: "‘Were going’ becomes ‘we’re going’ — homophone.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "A capital ‘T’ is needed for ‘The’.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "A comma is needed after ‘fast’ before the participle clause.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "‘Its’ becomes ‘it’s’ — contraction.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Check apostrophes and homophones — most frequent errors.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Read aloud for sense and tense consistency.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Check commas, capitals and full stops in a separate pass.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Verify dialogue punctuation specifically.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Each check is justified by the error type it catches.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The routine is described as systematic rather than random.", marks: 1, markCode: "AO4" },
                ],
                levels: LEVELS_6_PART,
                finalAnswer: "(a) She don’t know we’re going → She doesn’t know we’re going. (b) The dog ran fast, it’s tail wagging → The dog ran fast, its tail wagging. (c) A systematic routine: homophones/apostrophes, read-aloud for tense and sense, punctuation pass, dialogue check — each targeting a distinct error type.",
                commonErrors: ["Listing checks without explaining what each catches.", "Random proofreading rather than a systematic routine."],
                examinerNote: "Part (b) accepts equivalent valid corrections; the comma placement may vary.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u10-l13-notes", title: "Revising and proofreading — notes",
      summary: "Ambitious vocabulary means precise, connotative words; AO5 accuracy is earned through systematic proofreading.",
      sections: [
        { heading: "Key idea", body: "Editing improves content; proofreading fixes mechanics. Leave exam time for a separate mechanical pass." },
        { heading: "Exam technique", body: "Work through one error type at a time — apostrophes, commas, homophones, tense — and read dialogue punctuation extra carefully." },
      ],
    },
  },
];
