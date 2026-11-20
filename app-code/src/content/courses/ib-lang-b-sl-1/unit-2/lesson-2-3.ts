import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "langb-u2-lesson-2-3",
  code: "2-3",
  title: "Structured Writing Tasks: Descriptions, Narratives and Instructions",
  goal: "I CAN write descriptions, short narratives and sets of instructions following each task's conventions.",
  standards: ["Writing", "Text types", "Productive skills", "Language B SL"],
  vocabulary: [
    { term: "Description", definition: "A text that presents a person, place or thing through sensory detail and organised observation." },
    { term: "Narrative", definition: "A text telling a story with characters, a setting, events and usually a resolution." },
    { term: "Instructions", definition: "A text giving ordered steps to complete a task, using imperatives." },
    { term: "Imperative", definition: "The command form of a verb used in instructions: 'Add', 'Turn', 'Press'." },
    { term: "Sequencing", definition: "Ordering steps or events logically, often with words like 'first', 'then', 'finally'." },
    { term: "Sensory detail", definition: "Description appealing to sight, sound, smell, taste or touch to create a vivid picture." },
  ],
  concepts: [
    {
      id: "langb-u2-descriptions-narratives",
      title: "Descriptions and narratives",
      skill: "Write vivid descriptions organised spatially or thematically, and short narratives with clear story structure.",
      lesson: {
        sections: [
          {
            heading: "Writing descriptions",
            body: "A **description** shows rather than tells. Organise details logically — top to bottom, near to far, or by theme (appearance, atmosphere, sounds). Use **sensory detail**: what you see, hear, smell. Choose precise vocabulary over generic words ('crumbling' not 'old'). Keep a consistent point of view and a clear organising principle.",
          },
          {
            heading: "Writing narratives",
            body: "A **narrative** tells a story. The basic shape is **orientation** (who, where, when), **complication** (a problem or event), **resolution** (how it ends). Use past tense for events, time connectives ('then', 'suddenly', 'after that'), and dialogue where appropriate. Even a short narrative needs a beginning, middle and end.",
          },
          {
            heading: "Common pitfalls",
            body: "Descriptions fail when they are just lists with no organising principle or when every sentence is 'there is/there are'. Narratives fail when events are random with no point of tension. In both, paragraphing matters: one paragraph per scene or aspect. Always re-read to check the reader can picture or follow what you wrote.",
          },
        ],
        keyFormulas: [
          { name: "Description order", statement: "Choose an organising principle: spatial, thematic or chronological" },
          { name: "Narrative shape", statement: "Orientation -> complication -> resolution" },
        ],
        workedExample: {
          problem: "Describe 'my bedroom' in three sentences.",
          solution: "'My bedroom is small but cosy. Sunlight streams through the pale blue curtains onto a desk covered with books. A poster of mountains hangs above the bed, where my football boots sit neatly by the door.' — spatial order, sensory detail, precise nouns.",
        },
      },
      questions: [
        {
          id: "langb-u2-q17",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of a description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To persuade the reader to buy something" },
              { id: "b", text: "To present a person, place or thing vividly" },
              { id: "c", text: "To give ordered steps" },
              { id: "d", text: "To argue a point" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Description", statement: "A text that portrays a subject through organised sensory detail." },
            ],
            steps: [
              { reasoning: "Description aims to make the reader see, hear or feel the subject.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To present a person, place or thing vividly",
            commonErrors: ["Confusing description with narration or instruction."],
          },
        },
        {
          id: "langb-u2-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the three stages of a simple narrative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative structure", statement: "Orientation sets the scene; complication introduces conflict; resolution concludes." },
            ],
            steps: [
              { reasoning: "Orientation: introduces who, where and when.", marks: 1, markCode: "M" },
              { reasoning: "Complication: the problem, surprise or challenge driving the story.", marks: 1, markCode: "M" },
              { reasoning: "Resolution: how the complication is resolved or ends.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Orientation, complication, resolution.",
            commonErrors: ["Starting at the climax with no orientation."],
          },
        },
        {
          id: "langb-u2-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'sensory detail' makes a description effective, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory detail", statement: "Appealing to multiple senses creates a vivid mental image for the reader." },
            ],
            steps: [
              { reasoning: "Readers cannot see your subject; sensory detail lets them imagine it.", marks: 1, markCode: "R" },
              { reasoning: "Sight alone is flat — sound, smell and touch add depth.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'The market hummed with noise; spice stalls filled the air with cinnamon and pepper.' — sound + smell.", marks: 1, markCode: "M" },
              { reasoning: "Precise sensory words ('hummed', 'cinnamon') beat generic ones ('nice', 'busy').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sensory detail creates vivid mental images; e.g. sound and smell words like 'hummed' and 'cinnamon'.",
            commonErrors: ["Listing senses without integrating them into organised description."],
          },
        },
        {
          id: "langb-u2-q20",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Describe a place you know well — a room, a park or a street.",
          parts: [
            { label: "a", prompt: "Write an opening sentence naming the place and its main feature.", marks: 2 },
            { label: "b", prompt: "Write two sentences of sensory detail in a logical order.", marks: 2 },
            { label: "c", prompt: "Explain the organising principle you used and how it helps the reader.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Organised description", statement: "Clear subject + sensory detail in logical order + stated organising principle." },
            ],
            steps: [
              { part: "a", reasoning: "Opening identifies the place and its dominant impression.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sentence is clear and specific, not vague.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two sentences include concrete sensory details (sight/sound/smell).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Details follow a logical sequence the reader can follow.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Names the organising principle (spatial, thematic, chronological).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explains how the order helps the reader visualise the place.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reflection is accurate and specific.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Specific opening. (b) Two sensory sentences in order. (c) Clear organising principle + explanation of its effect.",
            commonErrors: ["Random detail order or purely visual description with no organising principle."],
          },
        },
        {
          id: "langb-u2-q73",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do writers use sensory detail in a description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the reader see, hear or feel the subject vividly" },
              { id: "b", text: "To shorten the text" },
              { id: "c", text: "To list facts quickly" },
              { id: "d", text: "To persuade the reader to buy something" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory detail", statement: "Appealing to sight, sound, smell, taste or touch creates a vivid mental image." },
            ],
            steps: [
              { reasoning: "Readers cannot see your subject; sensory detail lets them imagine it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To make the reader see, hear or feel the subject vividly",
            commonErrors: ["Confusing description's purpose with narration or persuasion."],
          },
        },
        {
          id: "langb-u2-q74",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the correct order of the three stages of a simple narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resolution, orientation, complication" },
              { id: "b", text: "Orientation, complication, resolution" },
              { id: "c", text: "Complication, resolution, orientation" },
              { id: "d", text: "Orientation, resolution, complication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative structure", statement: "Orientation sets the scene; complication introduces the problem; resolution concludes." },
            ],
            steps: [
              { reasoning: "The story must be set before a problem can arise, and the problem before it can be resolved.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Orientation, complication, resolution",
            commonErrors: ["Starting at the climax with no orientation for the reader."],
          },
        },
        {
          id: "langb-u2-q75",
          difficulty: "core",
          totalMarks: 2,
          stem: "You are describing a tall building from the ground floor upwards. Which organising principle fits best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chronological order" },
              { id: "b", text: "Spatial order (bottom to top)" },
              { id: "c", text: "Alphabetical order" },
              { id: "d", text: "Random order" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Organising principle", statement: "Descriptions need a logical order — spatial, thematic or chronological — that the reader can follow." },
            ],
            steps: [
              { reasoning: "Moving upward through a building is a spatial arrangement of details.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Spatial order (bottom to top)",
            commonErrors: ["Listing details randomly instead of choosing a guiding order."],
          },
        },
        {
          id: "langb-u2-q76",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which tense is normally used to tell the events of a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Present tense" },
              { id: "b", text: "Future tense" },
              { id: "c", text: "Past tense" },
              { id: "d", text: "Imperative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative tense", statement: "Stories told after they happen conventionally use the past tense." },
            ],
            steps: [
              { reasoning: "Narratives recount events, so the past tense is the standard choice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Past tense",
            commonErrors: ["Shifting tense randomly between sentences of the same story."],
          },
        },
        {
          id: "langb-u2-q77",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do random, unrelated events weaken a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They make the story longer" },
              { id: "b", text: "There is no point of tension or development for the reader to follow" },
              { id: "c", text: "They use too much vocabulary" },
              { id: "d", text: "They are always funny" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Narrative purpose", statement: "A narrative needs a complication that develops toward a resolution; random events give the reader nothing to follow." },
            ],
            steps: [
              { reasoning: "Without tension and development, events feel like a list, not a story.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** There is no point of tension or development for the reader to follow",
            commonErrors: ["Thinking more events automatically make a better story."],
          },
        },
        {
          id: "langb-u2-q78",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Name the three stages of a narrative and describe what happens in the orientation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative structure", statement: "Orientation introduces who, where, when; complication brings the problem; resolution ends the story." },
            ],
            steps: [
              { reasoning: "Orientation introduces the characters, setting and time.", marks: 1, markCode: "M" },
              { reasoning: "Complication introduces the problem, surprise or challenge.", marks: 1, markCode: "M" },
              { reasoning: "Resolution shows how the complication ends or is resolved.", marks: 1, markCode: "M" },
              { reasoning: "All three stages are named in the correct order with accurate descriptions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Orientation (who/where/when), complication (the problem), resolution (the ending).",
            commonErrors: ["Describing stages without stating what the orientation contains."],
          },
        },
        {
          id: "langb-u2-q79",
          difficulty: "core",
          totalMarks: 4,
          stem: "You must describe a busy market. Choose an organising principle and explain how you would apply it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Description planning", statement: "Choose a logical order — spatial, thematic or chronological — then fill it with sensory detail." },
            ],
            steps: [
              { reasoning: "Names an organising principle, e.g. spatial (entering the market, moving through stalls) or thematic (food stalls, crafts, sounds).", marks: 1, markCode: "M" },
              { reasoning: "Explains the order details would follow under that principle.", marks: 1, markCode: "M" },
              { reasoning: "Includes sensory details such as sights, smells and sounds of the market.", marks: 1, markCode: "M" },
              { reasoning: "Justifies how the order helps the reader visualise the scene.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'I will move spatially from the entrance to the far side, describing each stall type with sights, smells and sounds.'",
            commonErrors: ["Choosing a principle but then listing details randomly anyway."],
          },
        },
        {
          id: "langb-u2-q80",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify two weaknesses in this description: 'The park is nice. There are trees. There is a bench. There is a pond. People sit there.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Description quality", statement: "Effective descriptions use precise sensory vocabulary and an organising principle, not bare 'there is' lists." },
            ],
            steps: [
              { reasoning: "Weakness 1: 'nice' is vague — no sensory or precise detail tells the reader what the park is like.", marks: 1, markCode: "M" },
              { reasoning: "Weakness 2: the 'there is/there are' sentences form a random list with no organising principle or point of view.", marks: 1, markCode: "M" },
              { reasoning: "A rewrite suggestion adds concrete detail, e.g. 'Sunlight filters through the oak trees onto a mossy bench beside a still pond.'", marks: 1, markCode: "M" },
              { reasoning: "Explanation of how the fix improves vividness and order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague adjective 'nice' + unordered 'there is' list; fix with precise sensory detail and a logical order.",
            commonErrors: ["Spotting only one weakness when two are present."],
          },
        },
        {
          id: "langb-u2-q81",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write the orientation and complication for a short story about a lost dog. Use past tense and one time connective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative opening", statement: "Orientation sets who/where/when; complication introduces the problem that drives the story." },
            ],
            steps: [
              { reasoning: "Orientation names who, where and when, e.g. 'Last summer, my family and I were staying at my grandmother's house by the sea.'", marks: 1, markCode: "M" },
              { reasoning: "Complication introduces the problem clearly, e.g. 'One morning, our dog Max slipped out of the garden and did not come back.'", marks: 1, markCode: "M" },
              { reasoning: "Past tense is used consistently for all events.", marks: 1, markCode: "M" },
              { reasoning: "A time connective such as 'then', 'suddenly' or 'after that' links the events.", marks: 1, markCode: "M" },
              { reasoning: "Orientation and complication form a coherent, followable opening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Last summer we were staying at my grandmother's house by the sea. One morning, our dog Max slipped out of the garden and did not come back.' — past tense, time connective included.",
            commonErrors: ["Jumping straight to the search without establishing who/where/when first."],
          },
        },
        {
          id: "langb-u2-q82",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short description of a person you know well (a family member or friend).",
          parts: [
            { label: "a", prompt: "Write an opening sentence naming the person and their most striking feature.", marks: 2 },
            { label: "b", prompt: "Write two sentences of detail about appearance and character.", marks: 2 },
            { label: "c", prompt: "Explain the organising principle you used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Person description", statement: "Clear subject + concrete appearance/character detail + stated organising order." },
            ],
            steps: [
              { part: "a", reasoning: "Opening identifies the person by name or relationship.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "A specific striking feature is named, not a vague compliment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two sentences give concrete details of appearance or character, e.g. 'She has short black hair and bright eyes. She laughs easily and always remembers small details about people.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vocabulary is precise rather than generic ('friendly', 'nice').", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Organising principle named, e.g. physical appearance then character, or head to toe.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explanation of how the order helps the reader build a picture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named person + striking feature. (b) Two concrete appearance/character details. (c) Stated order, e.g. appearance then character.",
            commonErrors: ["Listing traits with no order or connecting detail — 'She is kind. She is tall. She is funny.'"],
          },
        },
        {
          id: "langb-u2-q83",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which set of words are time connectives useful in a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "for example, such as" },
              { id: "b", text: "then, suddenly, after that" },
              { id: "c", text: "however, therefore" },
              { id: "d", text: "in conclusion, to sum up" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time connectives", statement: "Narratives use time markers like 'then', 'suddenly' and 'after that' to sequence events." },
            ],
            steps: [
              { reasoning: "Time connectives mark when events happen relative to each other; only (b) is a set of them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** then, suddenly, after that",
            commonErrors: ["Confusing time connectives with contrast or example connectives."],
          },
        },
        {
          id: "langb-u2-q84",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write an 80-100 word narrative about a day when something unexpected happened.",
          parts: [
            { label: "a", prompt: "Write the orientation: who, where, when.", marks: 2 },
            { label: "b", prompt: "Write the complication: the unexpected event.", marks: 2 },
            { label: "c", prompt: "Write the resolution and include at least one time connective.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative production", statement: "Orientation + complication + resolution, in past tense, with time connectives." },
            ],
            steps: [
              { part: "a", reasoning: "Who, where and when are all established.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Opening uses past tense consistently.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A clear unexpected event or problem is introduced.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The complication follows logically from the orientation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The resolution shows how the complication ends.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At least one time connective such as 'then' or 'suddenly' sequences the events.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The whole narrative reads coherently within the word range.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Who/where/when set in past tense. (b) Clear unexpected event. (c) Resolution + time connective; coherent 80-100 words.",
            commonErrors: ["Resolution that does not answer the complication, or tense shifts mid-story."],
          },
        },
      ],
    },
    {
      id: "langb-u2-instructions",
      title: "Writing instructions",
      skill: "Write clear instructions using imperatives, sequencing words and numbered steps.",
      lesson: {
        sections: [
          {
            heading: "The imperative convention",
            body: "Instructions use the **imperative** — the command form of the verb: 'Add two eggs', 'Turn left', 'Press the button'. No subject ('you') is needed. Steps must be in the correct order and each step should contain one action. Ambiguity is the enemy: 'Put it in the oven' fails if 'it' is unclear.",
          },
          {
            heading: "Sequencing and clarity",
            body: "Number the steps or use sequence markers: 'first', 'then', 'next', 'finally', 'after that'. Include all necessary materials and quantities. Write for someone who has never done the task — assume no shared knowledge. Check that every pronoun has a clear referent.",
          },
          {
            heading: "Language B contexts",
            body: "Language B tasks often ask for instructions: a recipe, directions, how to use an app, rules for a game. The conventions are identical across languages — imperative verbs, ordered steps, precise quantities. Mastering this text type in English-medium practice transfers directly to your target language's equivalent task.",
          },
        ],
        keyFormulas: [
          { name: "Imperative", statement: "Verb base form, no subject: 'Mix', 'Add', 'Press'" },
          { name: "Sequence markers", statement: "First -> then/next -> finally; or numbered steps 1, 2, 3" },
        ],
        workedExample: {
          problem: "Write the first two steps for 'how to make a cup of tea'.",
          solution: "1. Fill the kettle with fresh water and switch it on. 2. Put a tea bag in your cup. — Imperatives, one action per step, clear order.",
        },
      },
      questions: [
        {
          id: "langb-u2-q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What verb form is used for instructions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The past tense" },
              { id: "b", text: "The imperative" },
              { id: "c", text: "The future tense" },
              { id: "d", text: "The passive voice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperative mood", statement: "Instructions use base-form verbs without a subject: 'Add', 'Turn'." },
            ],
            steps: [
              { reasoning: "The imperative gives direct commands — the standard for instructions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The imperative",
            commonErrors: ["Writing 'You should add...' — instructions prefer direct imperatives."],
          },
        },
        {
          id: "langb-u2-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three features of well-written instructions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction features", statement: "Imperatives, numbered/sequenced steps, one action per step, clear quantities." },
            ],
            steps: [
              { reasoning: "Imperative verbs giving direct commands.", marks: 1, markCode: "M" },
              { reasoning: "Numbered or sequenced steps in correct order with markers like 'then', 'finally'.", marks: 1, markCode: "M" },
              { reasoning: "One clear action per step with precise quantities and no ambiguous pronouns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imperatives, ordered/numbered steps, one clear action per step.",
            commonErrors: ["Putting several actions in one step or reversing the order."],
          },
        },
        {
          id: "langb-u2-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify the problems in this instruction and rewrite step 2 correctly: '1. Crack an egg into the bowl. 2. You should then put it and the flour and sugar into it and mix it.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Instruction clarity", statement: "One action per step; clear referents; imperative mood throughout." },
            ],
            steps: [
              { reasoning: "Problems: 'should' weakens the imperative; multiple actions crammed into one step; ambiguous 'it'.", marks: 1, markCode: "M" },
              { reasoning: "Rewrite splits the step: '2. Add the flour and sugar to the bowl.'", marks: 1, markCode: "M" },
              { reasoning: "A further step '3. Mix everything together.' keeps one action per step.", marks: 1, markCode: "M" },
              { reasoning: "Clear nouns replace pronouns; imperative form maintained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Split into single-action imperative steps: 'Add the flour and sugar.' then 'Mix together.'",
            commonErrors: ["Keeping vague pronouns like 'it' with multiple possible referents."],
          },
        },
        {
          id: "langb-u2-q24",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write instructions for making your favourite simple dish or drink.",
          parts: [
            { label: "a", prompt: "List the ingredients and equipment needed.", marks: 2 },
            { label: "b", prompt: "Write three numbered steps using imperatives.", marks: 2 },
            { label: "c", prompt: "Explain how you ensured each step has one clear action.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Instruction writing", statement: "Ingredients + ordered single-action imperative steps." },
            ],
            steps: [
              { part: "a", reasoning: "Complete ingredient list with quantities and equipment named.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Nothing essential is missing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three numbered steps in correct logical order.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All steps use imperative verbs, one action each.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Identifies that each step contains exactly one action.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explains that clarity prevents reader error.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Self-check confirms no step combines actions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Full ingredient/equipment list. (b) Three ordered imperative steps. (c) Each step = one action, verified.",
            commonErrors: ["Steps with hidden multiple actions, e.g. 'chop and fry the onion'."],
          },
        },
        {
          id: "langb-u2-q85",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Instructions are written using which verb form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The past tense" },
              { id: "b", text: "The imperative" },
              { id: "c", text: "The future tense" },
              { id: "d", text: "The passive voice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperative mood", statement: "Instructions use base-form verbs without a subject: 'Add', 'Turn', 'Press'." },
            ],
            steps: [
              { reasoning: "The imperative gives direct commands — the standard form for instructions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The imperative",
            commonErrors: ["Writing 'You should add...' instead of the direct imperative."],
          },
        },
        {
          id: "langb-u2-q86",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phrase best marks the final step in a set of instructions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "first" },
              { id: "b", text: "meanwhile" },
              { id: "c", text: "finally" },
              { id: "d", text: "however" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence markers", statement: "'First', 'then', 'next' and 'finally' order the steps of a process." },
            ],
            steps: [
              { reasoning: "'Finally' signals the last step in a sequence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** finally",
            commonErrors: ["Using contrast words like 'however' to mark sequence."],
          },
        },
        {
          id: "langb-u2-q87",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should each step in instructions contain only one action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the text shorter" },
              { id: "b", text: "It prevents confusion and error for the reader" },
              { id: "c", text: "It allows more verbs" },
              { id: "d", text: "It is just a style rule with no purpose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Instruction clarity", statement: "One action per step lets the reader perform each action in order without missing or misreading steps." },
            ],
            steps: [
              { reasoning: "Multiple actions in one step hide ordering and cause readers to skip or combine actions wrongly.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It prevents confusion and error for the reader",
            commonErrors: ["Thinking the rule is cosmetic rather than error-preventing."],
          },
        },
        {
          id: "langb-u2-q88",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why must a recipe include an ingredients list before the steps?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "For decoration" },
              { id: "b", text: "So the reader knows what is needed and in what quantity before starting" },
              { id: "c", text: "To make the recipe longer" },
              { id: "d", text: "Recipes do not need one" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recipe conventions", statement: "Ingredients with quantities come first so the reader can gather everything before cooking." },
            ],
            steps: [
              { reasoning: "The cook must know materials and quantities before beginning the steps.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** So the reader knows what is needed and in what quantity before starting",
            commonErrors: ["Forgetting that quantities, not just names, are essential."],
          },
        },
        {
          id: "langb-u2-q89",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is 'Put it in the oven' unclear as an instruction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'It' and 'the oven' are too formal" },
              { id: "b", text: "'It' has no clear referent — the reader cannot tell what to put where" },
              { id: "c", text: "It is in the passive voice" },
              { id: "d", text: "It uses the wrong tense" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pronoun clarity", statement: "Every pronoun in an instruction must have one obvious referent; ambiguity causes errors." },
            ],
            steps: [
              { reasoning: "'It' could refer to anything mentioned — or nothing — so the instruction fails.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'It' has no clear referent — the reader cannot tell what to put where",
            commonErrors: ["Using pronouns whose referent is obvious to the writer but not the reader."],
          },
        },
        {
          id: "langb-u2-q90",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Rewrite these as imperatives: 'You should add the sugar.' 'It is necessary to stir the mixture.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperative form", statement: "Instructions use the base verb form with no subject: 'Add', 'Stir'." },
            ],
            steps: [
              { reasoning: "'You should add the sugar.' becomes 'Add the sugar.' — subject and 'should' removed.", marks: 1, markCode: "M" },
              { reasoning: "'It is necessary to stir the mixture.' becomes 'Stir the mixture.'", marks: 1, markCode: "M" },
              { reasoning: "Subjects ('you', 'it') and modal fillers ('should', 'it is necessary to') are all removed.", marks: 1, markCode: "M" },
              { reasoning: "Both results are direct commands with base-form verbs and clear objects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Add the sugar.' / 'Stir the mixture.'",
            commonErrors: ["Keeping 'you' or modal verbs like 'should' in instructions."],
          },
        },
        {
          id: "langb-u2-q91",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find and correct three errors in these instructions: '1. You should boil the water. 2. Add the pasta and stir it and then drain it. 3. Finally, eat it nicely.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Instruction editing", statement: "Imperative mood, one action per step, clear referents — errors in any of these must be fixed." },
            ],
            steps: [
              { reasoning: "Error 1: 'You should boil' → imperative 'Boil the water.'", marks: 1, markCode: "M" },
              { reasoning: "Error 2: step 2 combines three actions — split into 'Add the pasta.', 'Stir.', 'Drain.'", marks: 1, markCode: "M" },
              { reasoning: "Error 3: 'eat it nicely' has an ambiguous 'it' and vague manner — e.g. 'Eat the pasta while it is hot.'", marks: 1, markCode: "M" },
              { reasoning: "All corrections produce clear, single-action, imperative steps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1. Boil the water. 2. Add the pasta. 3. Stir. 4. Drain. 5. Eat the pasta while it is hot.",
            commonErrors: ["Fixing the mood but leaving the multi-action step or vague pronoun."],
          },
        },
        {
          id: "langb-u2-q92",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why instructions must be written 'for someone who has never done the task'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience of instructions", statement: "Instructions serve a reader with no shared knowledge, so every need must be stated explicitly." },
            ],
            steps: [
              { reasoning: "The reader lacks your experience — anything you take for granted must be spelled out.", marks: 1, markCode: "R" },
              { reasoning: "All necessary materials and quantities must be listed.", marks: 1, markCode: "M" },
              { reasoning: "Every pronoun needs a clear referent and every step a single action.", marks: 1, markCode: "M" },
              { reasoning: "Ambiguity causes errors, so clarity for a novice is the goal of the genre.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The reader has no shared knowledge, so all materials, quantities, actions and referents must be explicit to prevent errors.",
            commonErrors: ["Assuming the reader knows what 'it', 'the mixture' or 'the usual amount' means."],
          },
        },
        {
          id: "langb-u2-q93",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "These steps for making a sandwich are out of order: 'Spread the butter. Take two slices of bread. Put the cheese on top.' Put them in the correct order and justify your sequence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Step sequencing", statement: "Steps must follow logical dependency — each action enables the next." },
            ],
            steps: [
              { reasoning: "Correct order: take the bread first, then spread the butter, then add the cheese.", marks: 1, markCode: "M" },
              { reasoning: "Each step depends on the previous one — you cannot spread butter or add cheese before you have bread.", marks: 1, markCode: "M" },
              { reasoning: "The sequence follows the physical logic of the task, not preference.", marks: 1, markCode: "M" },
              { reasoning: "Sequence markers 'first', 'then', 'finally' (or numbers) can reinforce the order.", marks: 1, markCode: "M" },
              { reasoning: "The justification clearly links each step's position to its dependency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1. Take two slices of bread. 2. Spread the butter. 3. Put the cheese on top. — each step enables the next.",
            commonErrors: ["Ordering by what sounds nice rather than what the task physically requires."],
          },
        },
        {
          id: "langb-u2-q94",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write instructions for a simple task of your choice (for example making a drink, charging a phone or tying shoelaces).",
          parts: [
            { label: "a", prompt: "List the materials or equipment needed.", marks: 2 },
            { label: "b", prompt: "Write three numbered steps using imperatives.", marks: 2 },
            { label: "c", prompt: "Check each step has one action and explain how you verified it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Instruction production", statement: "Materials + ordered single-action imperative steps + self-check." },
            ],
            steps: [
              { part: "a", reasoning: "Materials/equipment listed completely, with quantities where relevant.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Nothing essential is missing for the chosen task.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three numbered steps in correct logical order.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All steps use imperative verbs with one action each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each step is confirmed to contain exactly one action.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Verification method described, e.g. re-reading each step and asking 'can I do this in one movement?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Complete materials list. (b) Three ordered imperative steps. (c) Each step verified as single-action.",
            commonErrors: ["Steps like 'chop and fry the onion' that hide two actions."],
          },
        },
        {
          id: "langb-u2-q95",
          difficulty: "core",
          totalMarks: 2,
          stem: "Are numbered steps and sequence words like 'first, then, finally' both acceptable in instructions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only numbered steps" },
              { id: "b", text: "Only sequence words" },
              { id: "c", text: "Yes, both are valid ways to show order" },
              { id: "d", text: "Neither — order does not matter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequencing options", statement: "Numbering and sequence markers are two accepted conventions for showing step order." },
            ],
            steps: [
              { reasoning: "Both conventions signal order clearly; writers may choose either or combine them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Yes, both are valid ways to show order",
            commonErrors: ["Thinking only one convention is 'correct' for IB tasks."],
          },
        },
        {
          id: "langb-u2-q96",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write instructions for a school activity — for example how to enter the library quietly or how to use the sports equipment.",
          parts: [
            { label: "a", prompt: "Write a materials or equipment line and a one-sentence statement of the aim.", marks: 2 },
            { label: "b", prompt: "Write four numbered steps using imperatives.", marks: 2 },
            { label: "c", prompt: "Add a safety note or reminder and explain why it is placed where it is.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Contextual instructions", statement: "Aim + equipment + ordered imperative steps + safety note placed at the point of risk." },
            ],
            steps: [
              { part: "a", reasoning: "Equipment/materials listed clearly for the chosen activity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "One-sentence aim states exactly what the instructions achieve.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Four numbered steps in correct order, each a single imperative action.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Steps are complete enough for someone who has never done the activity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A relevant safety note or reminder is included.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The note is placed immediately before the step where the risk occurs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explanation of placement is accurate — safety warnings work best at the point of action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Equipment + clear aim. (b) Four ordered single-action imperative steps. (c) Safety note placed just before the risky step.",
            commonErrors: ["Safety note buried at the end after the risky step has already happened."],
          },
        },
      ],
    },
  ],
};
