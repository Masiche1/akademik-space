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
              { id: "b", text: "This story is about a girl who learns a lesson." },
              { id: "c", text: "The letter arrived on Tuesday, three days before the exam." },
              { id: "d", text: "It was a dark and stormy night." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hook", statement: "Specific, intriguing openings engage; generic ones do not." },
            ],
            steps: [
              { reasoning: "(b) is specific and creates immediate tension.", working: "\\text{specific tension}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The letter arrived on Tuesday, three days before the exam.",
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
        {
          id: "cile-u4-open-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many of these openings use 'in medias res'? 'The letter arrived on Tuesday.' 'Once upon a time there was a girl.' 'She was already running when the alarm sounded.' 'This story is about a girl who learns a lesson.'",
          response: { type: "numeric", parts: [{ label: "In medias res openings", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "In medias res", statement: "Starting in the middle of the action, then filling in background later." },
            ],
            steps: [
              { reasoning: "'The letter arrived' and 'already running when the alarm sounded' start mid-action = 2; the others are generic or fairy-tale openings.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'once upon a time' — that is a traditional opening, not mid-action."],
          },
        },
        {
          id: "cile-u4-open-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many of these endings are CIRCULAR (return to the opening situation with changed meaning)? 'The same ferry, but she was different now.' 'And she was happy ever after.' 'He opened the letter again — the same words, but this time she smiled.' 'The end.'",
          response: { type: "numeric", parts: [{ label: "Circular endings", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circular ending", statement: "Returns to the opening situation with changed meaning." },
            ],
            steps: [
              { reasoning: "The ferry echo and the re-read letter return to an opening situation with new meaning = 2; 'happy ever after' is resolved, 'The end.' is dismissive.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'happy ever after' — resolved is not circular."],
          },
        },
        {
          id: "cile-u4-open-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what 'in medias res' means and why it is an effective opening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "In medias res", statement: "Starting mid-action creates immediate engagement; background can follow." },
            ],
            steps: [
              { reasoning: "Definition: begin in the middle of the action, not at the start.", working: "\\text{mid-action}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: immediate tension and curiosity — the reader asks 'what happened before this?'", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "In medias res starts the story mid-action, creating instant engagement and curiosity — the reader is dropped into tension and wants to know what led here.",
            commonErrors: ["Saying 'it is faster' without explaining the curiosity effect."],
          },
        },
        {
          id: "cile-u4-open-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write an example of a circular ending for a story that opens with a character waiting at a bus stop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Circular ending", statement: "Return to the opening image/situation with changed meaning." },
            ],
            steps: [
              { reasoning: "Ending returns to the bus stop — same place, new meaning.", working: "\\text{back to bus stop}", marks: 1, markCode: "AO2" },
              { reasoning: "Changed meaning: e.g. she now waits willingly, or for someone else.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Years later, she waited at the same bus stop — not for a bus, but for the daughter she had once been too afraid to call.' — same place, transformed meaning.",
            commonErrors: ["Repeating the opening verbatim without changing its meaning."],
          },
        },
        {
          id: "cile-u4-open-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many of these endings are WEAK (dismissive or moralising)? 'And that was the end of it.' 'She smiled — the first real smile in weeks.' 'And she learned that friendship matters.' 'Somewhere, a door opened. She did not look back.'",
          response: { type: "numeric", parts: [{ label: "Weak endings", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Weak ending", statement: "Dismissive ('that was the end') or moralising ('she learned') endings fail the reader." },
            ],
            steps: [
              { reasoning: "'That was the end of it' is dismissive and 'she learned that friendship matters' is moralising = 2; the other two are resonant/open.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the open ending as weak — deliberate open endings can be strong."],
          },
        },
        {
          id: "cile-u4-open-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate this ending for a mystery story: 'The detective closed her notebook. Somewhere, the truth was still out there.' Is it effective?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Open ending", statement: "Deliberate unresolved endings invite imagination — but must feel intentional." },
            ],
            steps: [
              { reasoning: "It is deliberately open — the case is not solved, truth 'still out there'.", working: "\\text{deliberate open}", marks: 1, markCode: "AO2" },
              { reasoning: "Strength: leaves the reader imagining the unresolved truth — fits a mystery.", marks: 1, markCode: "AO2" },
              { reasoning: "Weakness: 'the truth was still out there' is slightly vague — a more specific image would resonate more.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It is a deliberate open ending — appropriate for a mystery — but 'the truth was still out there' is slightly vague; a more concrete image would make the openness feel more crafted.",
            commonErrors: ["Calling it simply 'bad' — open endings are valid if deliberate."],
          },
        },
        {
          id: "cile-u4-open-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a resonant ending differs from a resolved ending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ending types", statement: "Resolved settles the conflict; resonant echoes a central image for thematic unity." },
            ],
            steps: [
              { reasoning: "Resolved: the central question is answered — closure.", working: "\\text{closure}", marks: 1, markCode: "AO2" },
              { reasoning: "Resonant: returns to an opening image or motif — unity and deeper meaning.", marks: 1, markCode: "AO2" },
              { reasoning: "A resonant ending can resolve AND echo — they are different tools.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Resolved endings answer the story's question and settle conflict; resonant endings echo the opening or a central image, creating thematic unity — a resonant ending may also resolve, but its power comes from the echo.",
            commonErrors: ["Treating them as opposites — a resonant ending can also be resolved."],
          },
        },
        {
          id: "cile-u4-open-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'The market smelled of charcoal and overripe mangoes.' What type of hook is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rhetorical question" },
              { id: "b", text: "In medias res" },
              { id: "c", text: "A flashback" },
              { id: "d", text: "A sensory hook" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory hook", statement: "Dropping the reader into a sensory scene engages immediately." },
            ],
            steps: [
              { reasoning: "Smell imagery ('charcoal', 'mangoes') is a sensory hook.", working: "\\text{smell}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** A sensory hook",
            commonErrors: ["Choosing (a) — it is not mid-action; it is a scene-setting sensory detail."],
          },
        },
        {
          id: "cile-u4-open-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "'And she learned that friendship matters.' What is wrong with this ending?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is unresolved" },
              { id: "b", text: "It is too short" },
              { id: "c", text: "It is moralising — it spells out the theme instead of trusting the reader" },
              { id: "d", text: "It uses the wrong tense" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Moralising ending", statement: "Stating the lesson explicitly is lazy — good endings show, not tell." },
            ],
            steps: [
              { reasoning: "'She learned that friendship matters' tells the theme directly — a moral.", working: "\\text{tells the theme}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** It is moralising — it spells out the theme instead of trusting the reader",
            commonErrors: ["Choosing (c) — it is resolved, just badly done."],
          },
        },
        {
          id: "cile-u4-open-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the 'opening and ending contract' and why it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Opening-ending contract", statement: "The opening promises something; the ending must deliver on it." },
            ],
            steps: [
              { reasoning: "An intriguing opening creates expectations — a question, a tension, a mystery.", working: "\\text{expectations}", marks: 1, markCode: "AO2" },
              { reasoning: "The ending must answer, echo, or deliberately subvert those expectations.", marks: 1, markCode: "AO2" },
              { reasoning: "If it does not, the story feels broken — the reader was promised something undelivered.", marks: 1, markCode: "AO2" },
              { reasoning: "The contract is what makes a story feel complete and crafted.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The opening sets up a promise — a question, tension or mystery — and the ending must deliver on it; if it does not, the story feels unfinished. The contract is what makes a story feel crafted and complete.",
            commonErrors: ["Saying 'they should match' without explaining the promise/payoff mechanism."],
          },
        },
        {
          id: "cile-u4-open-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing the opening and ending of a story about someone who finally apologises after years of silence.",
          parts: [
            { label: "a", prompt: "Write an opening hook (1-2 sentences).", marks: 2 },
            { label: "b", prompt: "Write an ending (2-3 sentences) that is resolved or resonant.", marks: 2 },
            { label: "c", prompt: "Explain how your ending delivers on the opening's promise.", marks: 2 },
            { label: "d", prompt: "Identify one thing you must avoid in the ending and why.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Opening-ending contract", statement: "Opening promises; ending delivers — resolved, resonant or open." },
            ],
            steps: [
              { part: "a", reasoning: "Hook is specific and creates tension/curiosity.", working: "\\text{specific hook}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Engaging — not generic.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Ending resolves or resonates — not dismissive.", working: "\\text{resolved/resonant}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Has emotional/thematic weight.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Link identified between opening promise and ending payoff.", working: "\\text{promise/payoff}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Explanation convincing.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Avoid: moralising ('she learned that apologies matter').", working: "\\text{moralising}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Or: 'and that was the end' — dismissive.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Justified: endings should show, not tell.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) specific hook (b) resolved/resonant ending (c) promise-payoff explained (d) avoid moralising or 'and that was the end' — show, don't tell",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Effective hook.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Generic.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Strong ending.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Dismissive.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Promise-payoff explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Avoidance identified and justified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) avoiding 'adjectives' — the real risk is moralising or dismissiveness."],
          },
        },
        {
          id: "cile-u4-open-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "You are evaluating openings and endings for a story about a lighthouse keeper's last night.",
          parts: [
            { label: "a", prompt: "Write two different opening hooks for this story.", marks: 2 },
            { label: "b", prompt: "Write two different ending types (e.g. resolved and open).", marks: 2 },
            { label: "c", prompt: "Explain which ending type suits this story best and why.", marks: 2 },
            { label: "d", prompt: "Identify the weakest possible ending and explain why it fails.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Craft choices", statement: "Different openings and endings serve different effects." },
            ],
            steps: [
              { part: "a", reasoning: "Hook 1: specific, intriguing.", working: "\\text{hook 1}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Hook 2: different technique (sensory, question, voice).", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Ending 1: resolved — conflict settled.", working: "\\text{resolved}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Ending 2: open/resonant — different effect.", working: "\\text{open/resonant}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Best type identified with justification.", working: "\\text{best type}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Justification links to story's themes.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Weakest ending identified (e.g. 'and that was the end').", working: "\\text{weakest}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Explained: dismissive/moralising — fails the contract.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) two distinct hooks (b) resolved + open/resonant endings (c) best type justified (d) weakest = 'and that was the end' — dismissive, fails contract",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two distinct effective hooks.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Generic or one only.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two distinct ending types.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Same type twice.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Best type justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Weakest ending identified and explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (d) naming a strong ending as the weakest — check for dismissiveness or moralising."],
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
              { id: "c", text: "It was a pleasant room to be in." },
              { id: "d", text: "The room had furniture and windows." },
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
        {
          id: "cile-u4-desc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different senses does this sentence engage? 'Sunlight caught the copper pans, the air smelled of burnt toast, and a radio hissed in the corner.'",
          response: { type: "numeric", parts: [{ label: "Senses engaged", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory detail", statement: "Each sense named counts once — sight, smell, sound, taste, touch." },
            ],
            steps: [
              { reasoning: "Sight (sunlight, pans), smell (burnt toast), sound (radio hissed) = 3 senses.", working: "3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'copper pans' twice — it is part of the sight detail."],
          },
        },
        {
          id: "cile-u4-desc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many of these are examples of pathetic fallacy (weather mirroring emotion)? 'The storm raged as she raged inside.' 'The wind whispered through the trees.' 'The sun smiled down on the picnic.' 'The city was a machine.'",
          response: { type: "numeric", parts: [{ label: "Pathetic fallacy examples", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pathetic fallacy", statement: "Weather/nature mirrors a character's emotional state." },
            ],
            steps: [
              { reasoning: "Storm mirroring her anger and sun 'smiling' on a happy picnic = 2; 'wind whispered' is personification, 'city was a machine' is metaphor.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting personification — pathetic fallacy must mirror EMOTION specifically."],
          },
        },
        {
          id: "cile-u4-desc-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two sentences describing a kitchen using at least two different senses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory description", statement: "Engaging multiple senses creates immersion." },
            ],
            steps: [
              { reasoning: "At least two distinct senses used with specific detail.", working: "\\text{2+ senses}", marks: 1, markCode: "AO2" },
              { reasoning: "Detail is specific and evocative, not generic.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Sunlight caught the copper pans, throwing warm reflections across the tiles. The air smelled of fresh bread and something sharper — lemon, maybe — and a radio murmured low in the corner.' — sight, smell and sound engaged.",
            commonErrors: ["Using only adjectives ('big', 'nice') without sensory specifics."],
          },
        },
        {
          id: "cile-u4-desc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between 'zooming in' and 'zooming out' in descriptive writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Zoom in/out", statement: "Broad→specific focuses attention; specific→broad gives context." },
            ],
            steps: [
              { reasoning: "Zoom in: move from wide scene to specific detail for focus.", working: "\\text{wide→specific}", marks: 1, markCode: "AO2" },
              { reasoning: "Zoom out: move from detail to wider context for perspective.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Zooming in moves from broad scene to specific detail to focus the reader; zooming out moves from detail to wider context. Both control where the reader's attention goes.",
            commonErrors: ["Reversing the definitions."],
          },
        },
        {
          id: "cile-u4-desc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A character with a fear of heights describes a cliff. Which detail shows SELECTIVE focus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The flowers at the cliff's base were beautiful" },
              { id: "b", text: "Birds circled far below" },
              { id: "c", text: "The cliff edge crumbled under her fingers" },
              { id: "d", text: "The path was well-marked" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Selective detail", statement: "Description chooses details that reflect the character's concerns." },
            ],
            steps: [
              { reasoning: "(b) focuses on the dangerous edge — what a fearful character would notice.", working: "\\text{fear-relevant}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The cliff edge crumbled under her fingers",
            commonErrors: ["Choosing (a) — beautiful flowers are not what a scared character would notice."],
          },
        },
        {
          id: "cile-u4-desc-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a writer might use pathetic fallacy in a scene where a character receives bad news.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pathetic fallacy", statement: "Weather mirrors emotion — externalises internal feeling." },
            ],
            steps: [
              { reasoning: "Choose weather matching the emotion — rain, grey skies, cold wind.", working: "\\text{matching weather}", marks: 1, markCode: "AO2" },
              { reasoning: "The weather externalises the character's inner state — makes emotion visible.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates atmosphere and reinforces the mood of the scene.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Rain began to fall as she read the letter — slow at first, then harder, like the sky was crying with her.' The storm mirrors her grief, making the emotion atmospheric and visible.",
            commonErrors: ["Using weather unrelated to the emotion — pathetic fallacy must mirror feeling."],
          },
        },
        {
          id: "cile-u4-desc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the effect of personification in description, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Giving human qualities to non-human things creates vividness and mood." },
            ],
            steps: [
              { reasoning: "Definition: attributes human actions/qualities to objects or nature.", working: "\\text{human qualities}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: makes description vivid, alive, emotionally resonant.", marks: 1, markCode: "AO2" },
              { reasoning: "Example given and its effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The old house groaned as the wind pushed against its windows' — the house seems to feel the wind, making the scene feel alive and slightly threatening.",
            commonErrors: ["Confusing with pathetic fallacy — personification gives human qualities; pathetic fallacy mirrors emotion specifically."],
          },
        },
        {
          id: "cile-u4-desc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many of these are METAPHORS (direct equation, no 'like' or 'as')? 'The classroom was a zoo.' 'She was as brave as a lion.' 'He ran like the wind.' 'The city was a machine.'",
          response: { type: "numeric", parts: [{ label: "Metaphors", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor vs simile", statement: "Metaphor states X is Y; simile uses 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "'Classroom was a zoo' and 'city was a machine' state X is Y = 2; 'as brave as' and 'like the wind' are similes.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting similes — check for 'like' or 'as'."],
          },
        },
        {
          id: "cile-u4-desc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A nervous character enters a room. Which detail BEST reveals their nervousness through description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Her fingers found the doorframe and held on" },
              { id: "b", text: "The floor was carpeted" },
              { id: "c", text: "There were six chairs" },
              { id: "d", text: "The room was painted blue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Description reveals character", statement: "Selective detail shows personality without stating it." },
            ],
            steps: [
              { reasoning: "(b) gripping the doorframe physically shows nervousness — shown, not told.", working: "\\text{gripping = nervous}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Her fingers found the doorframe and held on",
            commonErrors: ["Choosing (a) — room colour does not reveal the character's state."],
          },
        },
        {
          id: "cile-u4-desc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'The beach was nice.' Improve this using sensory detail, figurative language and selective focus to create a specific mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory + figurative + focus", statement: "Specific senses, comparisons and chosen details create mood." },
            ],
            steps: [
              { reasoning: "Problem: 'nice' is generic — no sensory specifics, no mood.", working: "\\text{generic}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: add senses — warm sand, salt spray, gull cries, wave rhythm.", working: "\\text{5 senses}", marks: 1, markCode: "AO2" },
              { reasoning: "Add figurative: 'waves folded over the shore like breathing'.", working: "\\text{figurative}", marks: 1, markCode: "AO2" },
              { reasoning: "Selective focus: choose details matching the intended mood (peaceful vs foreboding).", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The beach stretched empty under a wide sky. Waves folded over the shore like slow breathing; salt spray stung her lips and gulls cried somewhere far away. The sand was warm between her toes — almost hot.' — sensory detail and simile create a peaceful, slightly lonely mood.",
            commonErrors: ["Adding more adjectives ('very nice beach') without sensory specifics."],
          },
        },
        {
          id: "cile-u4-desc-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are describing a rainy city street for a narrative.",
          parts: [
            { label: "a", prompt: "Write 2-3 sentences of multi-sensory description.", marks: 3 },
            { label: "b", prompt: "Identify the mood created and link it to specific details.", marks: 2 },
            { label: "c", prompt: "Explain how a character might react to this scene.", marks: 2 },
            { label: "d", prompt: "Suggest one figurative technique to add and justify it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Descriptive craft", statement: "Senses + mood + character + figurative = immersive scene." },
            ],
            steps: [
              { part: "a", reasoning: "Multiple senses with specific detail.", working: "\\text{multi-sensory}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Vivid and atmospheric.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Purposeful — serves mood/character.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Mood accurately identified.", working: "\\text{mood}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Linked to specific details.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Character reaction described.", working: "\\text{reaction}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Reveals personality.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Technique suggested and justified.", working: "\\text{technique}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Justification links to mood/effect.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) multi-sensory description (b) mood linked to details (c) reaction revealing trait (d) figurative technique justified",
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
            commonErrors: ["In (a) listing senses rather than weaving them into a scene."],
          },
        },
        {
          id: "cile-u4-desc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "You are evaluating a student's descriptive paragraph about a forest.",
          parts: [
            { label: "a", prompt: "Identify two senses the student could add.", marks: 2 },
            { label: "b", prompt: "Suggest one figurative technique and explain its effect.", marks: 2 },
            { label: "c", prompt: "Explain how selective focus could improve the description.", marks: 2 },
            { label: "d", prompt: "Describe how the mood could be shifted from calm to ominous.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Descriptive evaluation", statement: "Senses, figurative, focus and mood all shape description." },
            ],
            steps: [
              { part: "a", reasoning: "Two senses identified (smell, sound, touch etc).", working: "\\text{2 senses}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Specific sensory details suggested.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Figurative technique identified.", working: "\\text{technique}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Selective focus explained — choose fear-relevant details.", working: "\\text{focus}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Linked to mood/character.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Mood shift identified — weather, light, sound changes.", working: "\\text{shift}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Specific techniques suggested.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2 senses added (b) figurative technique + effect (c) selective focus explained (d) mood shift via weather/light/sound",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two senses identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Technique + effect.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Focus explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Mood shift described.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'make it darker' without specifying how."],
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
