import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cile-u4-lesson-4-3",
  code: "4-3",
  title: "Narrative writing: openings, endings and description",
  goal: "I CAN write effective narrative openings and endings, and use descriptive techniques to immerse the reader.",
  standards: ["0861 Writing: narrative craft"],
  vocabulary: [
    { term: "Hook", definition: "The opening technique that grabs the reader's attention immediately." },
    { term: "In medias res", definition: "Starting in the middle of the action, then filling in background later." },
    { term: "Circular ending", definition: "An ending that returns to the story's opening image or situation." },
    { term: "Sensory detail", definition: "Description engaging sight, sound, smell, taste, touch." },
    { term: "Pathetic fallacy", definition: "Weather or nature mirroring a character's emotions." },
    { term: "Zooming in/out", definition: "Moving from broad setting to specific detail (or vice versa) for focus." },
  ],
  concepts: [
    {
      id: "cile-u4-openings-endings",
      title: "Openings and endings",
      skill: "Write hooks that engage immediately and endings that satisfy — resolved, resonant or deliberately open.",
      lesson: {
        sections: [
          {
            heading: "Effective openings",
            body: "- **In medias res**: start mid-action — 'The letter arrived on Tuesday, three days before the exam.'\n- **Sensory hook**: drop the reader into a scene — 'The market smelled of charcoal and overripe mangoes.'\n- **Question or statement**: provoke curiosity — 'Nobody had ever survived the night shift.'\n- **Character voice**: let the narrator's personality grab attention.",
          },
          {
            heading: "Effective endings",
            body: "- **Resolved**: the conflict is settled — satisfying closure.\n- **Resonant**: the ending echoes the opening or a central image — thematic unity.\n- **Open**: deliberately unresolved — invites the reader to imagine what happens next.\n- **Circular**: returns to the opening situation with changed meaning — 'the same ferry, but she was different now.'",
          },
          {
            heading: "Avoiding weak endings",
            body: "- **Telling**: 'And that was the end of it.' — lazy, dismissive.\n- **Unresolved without purpose**: leaving threads dangling accidentally, not deliberately.\n- **Moralising**: spelling out the theme — 'And she learned that friendship matters.' Trust the reader.",
          },
        ],
        keyFormulas: [
          { name: "Opening + ending contract", statement: "The opening promises something; the ending must deliver on that promise — resolved, resonant, or deliberately open." },
        ],
        workedExample: {
          problem: "Story about a student nervous about a speech. Weak vs strong ending?",
          solution: "Weak: 'And she gave the speech and it went fine.' Strong: 'When she stepped off the stage, the applause was loud — but it was the silence before she spoke that she would remember most.'",
        },
      },
      questions: [
        {
          id: "cile-u4-open-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which opening is the strongest hook for a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Once upon a time there was a girl who lived in a village." },
              { id: "b", text: "The letter arrived on Tuesday, three days before the exam." },
              { id: "c", text: "This story is about a girl who learns a lesson." },
              { id: "d", text: "It was a dark and stormy night." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hook", statement: "Specific, intriguing openings engage; generic ones do not." },
            ],
            steps: [
              { reasoning: "(b) is specific and creates immediate tension.", working: "\\text{specific tension}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The letter arrived on Tuesday, three days before the exam.",
            commonErrors: ["Choosing (d) — cliché, not a real hook."],
          },
        },
        {
          id: "cile-u4-open-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between a resolved and an open ending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ending types", statement: "Resolved = conflict settled; open = deliberately unresolved." },
            ],
            steps: [
              { reasoning: "Resolved: the central question is answered, conflict settled.", working: "\\text{settled}", marks: 1, markCode: "AO2" },
              { reasoning: "Open: threads left dangling deliberately — invites reader imagination.", working: "\\text{deliberate}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "A resolved ending settles the central conflict and answers the story's question; an open ending deliberately leaves it unresolved, inviting the reader to imagine what comes next.",
            commonErrors: ["Confusing 'open' with 'unfinished' — open is deliberate, unfinished is accidental."],
          },
        },
        {
          id: "cile-u4-open-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's story ends with: 'And that was the end of it.' Rewrite this ending to be resonant rather than dismissive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Resonant ending", statement: "Echo the opening or central image with changed meaning." },
            ],
            steps: [
              { reasoning: "Problem: 'that was the end' dismisses the story — no resonance.", working: "\\text{dismissive}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: return to an opening image or situation with new meaning.", working: "\\text{echo}", marks: 1, markCode: "AO2" },
              { reasoning: "Example: if the story began with rain, end with the rain stopping.", working: "\\text{rain echo}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: ending feels complete and meaningful.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The rain had stopped. The street was still wet, but the sky was clearing — and for the first time in weeks, she could see the horizon.' — echoes the weather motif with changed emotional meaning.",
            commonErrors: ["Adding more summary ('And she learned a lesson') — resonance requires imagery, not explanation."],
          },
        },
        {
          id: "cile-u4-open-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing the opening and ending of a narrative about a student who finally tells the truth about something important.",
          parts: [
            { label: "a", prompt: "Write an opening hook (1-2 sentences).", marks: 2 },
            { label: "b", prompt: "Explain why this hook engages the reader.", marks: 2 },
            { label: "c", prompt: "Write an ending that is resolved or resonant (2-3 sentences).", marks: 2 },
            { label: "d", prompt: "Explain how your ending delivers on the opening's promise.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Opening-ending contract", statement: "The opening sets expectations; the ending must fulfil them." },
            ],
            steps: [
              { part: "a", reasoning: "Hook is specific and intriguing.", working: "\\text{specific}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Hook creates immediate tension or curiosity.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Effect explained — curiosity, tension, voice.", working: "\\text{effect}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate and specific.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Ending is resolved or resonant — not dismissive.", working: "\\text{resolved/resonant}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Ending has emotional or thematic weight.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Link between opening promise and ending payoff identified.", working: "\\text{promise/payoff}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Explanation is convincing.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion is clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) specific hook (b) effect explained (c) resolved/resonant ending (d) promise-payoff link explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Effective hook.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Generic.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Strong ending.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Dismissive.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Promise-payoff convincingly explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'the ending matches the beginning' without explaining how."],
          },
        },
      ],
    },
    {
      id: "cile-u4-description",
      title: "Descriptive writing techniques",
      skill: "Use sensory detail, figurative language and perspective to create vivid, immersive description.",
      lesson: {
        sections: [
          {
            heading: "Sensory description",
            body: "Engage all five senses:\n\n- **Sight**: colour, light, shape, movement.\n- **Sound**: volume, rhythm, quality — 'a low hum', 'sharp echo'.\n- **Smell**: often triggers memory — 'old books and dust', 'rain on hot pavement'.\n- **Taste**: salt, bitterness, sweetness — links to emotion.\n- **Touch**: texture, temperature, pressure — 'rough bark', 'cold metal'.",
          },
          {
            heading: "Figurative language in description",
            body: "- **Simile**: 'as quiet as snow'.\n- **Metaphor**: 'the city was a machine'.\n- **Personification**: 'the wind whispered'.\n- **Pathetic fallacy**: weather mirroring mood — storm for anger, sunshine for joy.",
          },
          {
            heading: "Perspective and focus",
            body: "- **Zoom in**: broad scene → specific detail ('The market was loud. Near the spice stall, cardamom hung thick in the air.').\n- **Zoom out**: detail → wider context.\n- **Selective detail**: choose what matters — a character's fear of heights notices cliffs, not flowers.",
          },
        ],
        keyFormulas: [
          { name: "Description toolkit", statement: "Five senses + figurative language + selective focus = immersive description that reveals character and mood." },
        ],
        workedExample: {
          problem: "Describe a room to convey loneliness.",
          solution: "'The room was very clean and very quiet. A single cup sat on the table, still warm. Outside, footsteps passed and faded — nobody knocked.' — sensory detail (warmth, footsteps) and selective focus (single cup) convey loneliness without stating it.",
        },
      },
      questions: [
        {
          id: "cile-u4-desc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the most senses effectively?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The room was nice and bright." },
              { id: "b", text: "Sunlight slanted through the blinds, catching dust that smelled of old paper; somewhere a radiator hissed." },
              { id: "c", text: "The room had furniture and windows." },
              { id: "d", text: "It was a pleasant room to be in." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory detail", statement: "Multiple senses engaged = immersive description." },
            ],
            steps: [
              { reasoning: "(b) engages sight (sunlight, dust), smell (old paper), sound (hissed).", working: "\\text{3 senses}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Sunlight slanted through the blinds, catching dust that smelled of old paper; somewhere a radiator hissed.",
            commonErrors: ["Choosing (a) — 'nice and bright' is generic, not sensory."],
          },
        },
        {
          id: "cile-u4-desc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the effect of pathetic fallacy in descriptive writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pathetic fallacy", statement: "Weather/nature mirrors character emotion — storm for anger, sunshine for joy." },
            ],
            steps: [
              { reasoning: "Definition: nature reflects the character's emotional state.", working: "\\text{nature mirrors emotion}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: externalises internal feeling — makes emotion visible and atmospheric.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Pathetic fallacy uses weather or nature to mirror a character's emotions — a storm for anger, sunshine for joy — externalising feeling and creating atmosphere.",
            commonErrors: ["Confusing with personification — pathetic fallacy specifically mirrors emotion."],
          },
        },
        {
          id: "cile-u4-desc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'The forest was big and dark.' Improve this using sensory detail and figurative language to create a specific mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory + figurative", statement: "Specific senses and comparisons create mood; generic adjectives do not." },
            ],
            steps: [
              { reasoning: "Problem: 'big and dark' is vague — no sensory specifics.", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: add sound (branches creaking), smell (moss, damp earth), touch (cold air).", working: "\\text{sound/smell/touch}", marks: 1, markCode: "AO2" },
              { reasoning: "Add figurative: 'trees like silent giants', 'shadows pooled'.", working: "\\text{metaphor}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: specific, atmospheric, mood-creating.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The forest pressed in around her, trees like silent giants. Branches creaked overhead; the air smelled of damp moss and cold stone. Shadows pooled between the trunks like dark water.' — sensory detail and metaphor create an oppressive, mysterious mood.",
            commonErrors: ["Adding more adjectives ('very big and very dark') without sensory specifics."],
          },
        },
        {
          id: "cile-u4-desc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are describing a market scene for a narrative.",
          parts: [
            { label: "a", prompt: "Write 2-3 sentences of sensory description.", marks: 3 },
            { label: "b", prompt: "Identify the mood this description creates.", marks: 2 },
            { label: "c", prompt: "Explain how a character might react to this setting.", marks: 2 },
            { label: "d", prompt: "Suggest one figurative language technique you would add and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Descriptive craft", statement: "Sensory detail + mood + character reaction + figurative language = immersive scene." },
            ],
            steps: [
              { part: "a", reasoning: "Multiple senses engaged with specific detail.", working: "\\text{sensory}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Vivid and atmospheric.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Purposeful — serves mood/character.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Mood accurately identified.", working: "\\text{mood}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Linked to specific details.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Character reaction described.", working: "\\text{reaction}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Reaction reveals personality.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Technique suggested and justified.", working: "\\text{technique}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Justification links to mood/effect.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) sensory description (b) mood identified (c) character reaction revealing trait (d) figurative technique justified",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Vivid multi-sensory description.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Some sensory detail.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Mood linked to details.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reaction reveals trait.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Technique justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) listing senses separately rather than weaving them into a scene."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u4-opening-ending-desc-notes",
      title: "Openings, endings and description — revision notes",
      summary: "Hooks, ending types, sensory description and figurative language.",
      sections: [
        {
          heading: "Openings and endings",
          body: "Openings: in medias res, sensory hook, question, voice. Endings: resolved (closure), resonant (echo), open (deliberate), circular (return with change). Avoid 'and that was the end'.",
        },
        {
          heading: "Description",
          body: "Five senses + figurative language + selective focus. Pathetic fallacy mirrors emotion. Zoom in/out for focus. Description should reveal character and mood, not just decorate.",
        },
        {
          heading: "Writing checklist",
          body: "Does the opening hook immediately? Does the ending deliver on the promise? Is description sensory and purposeful? Is figurative language earning its place?",
        },
      ],
    },
  ],
};
