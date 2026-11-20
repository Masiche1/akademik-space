import type { Lesson } from "../../../types.ts";

const reviewExtract = {
  title: "Film Review: 'The Long Way Home'",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "The Long Way Home is the kind of film that stays with you long after the credits roll — not because it is perfect, but because it is honest.\n\nThe story follows a teenager, Mara, who drives her late grandmother's unreliable van across the country to scatter her ashes. The road movie format is familiar, but director Imani Cole refuses to let it become sentimental. Mara's grief is shown through small actions: she cannot throw the ashes until she has driven past every place her grandmother ever mentioned.\n\nThe film's weakness is its middle hour, which drags through landscapes that look identical. But the final scene — Mara alone at the cliff edge, finally letting go — is worth the wait. It is a film about how grief works in real life: slowly, awkwardly, and without ceremony.\n\nRecommended for anyone who has ever lost someone they loved. Not for viewers seeking light entertainment.",
};

const speechExtract = {
  title: "Speech to the School Council",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Members of the council, I am here today to talk about something that affects every single one of us in this room, whether we admit it or not: the state of our toilets.\n\nNow, I know what you are thinking. 'A student is talking about toilets. How charming.' But hear me out, because this is not about vanity — it is about dignity. When the third-floor toilets have been out of order for six weeks, when students are walking to the other side of the building and missing lessons, that is not a facilities problem. That is a message that we do not matter.\n\nI have collected four hundred signatures on a petition. I have photographs. I have a list of every day each toilet has been unusable since September. I am not asking you to fix them today — I am asking you to acknowledge that this is happening, and to give us a date when it will stop.\n\nWe are not asking for the moon. We are asking for the basics. Thank you.",
};

const lighthouseExtract = {
  title: "The Lighthouse Keeper",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Elias had kept the light on Greyrock Point for nineteen years, and in nineteen years he had never once let it go dark.\n\nThe lighthouse stood on a fist of black rock at the end of the headland, reachable only by a path that the sea had tried many times to erase. Every evening Elias climbed the hundred and twelve steps to the lamp room, his knees complaining a little more each year, and set the great lens turning.\n\nShips passed in the night and never knew his name. That, he told himself, was the point. A light did not need to be thanked; it needed to be lit.\n\nWhen the automation letters finally arrived, offering him a cottage in the village and a pension, Elias read them twice, then walked up the hundred and twelve steps one last time. The lamp, he knew, would keep turning without him. Someone, somewhere, would still need it to.",
};

export const lesson23: Lesson = {
  id: "cile-u2-lesson-2-3",
  code: "2-3",
  title: "Structure of texts",
  goal: "I CAN analyse how the overall structure of a text — chronological, problem-solution, flashback, frame — shapes meaning.",
  standards: ["0861 Reading: whole-text structure"],
  vocabulary: [
    { term: "Chronological order", definition: "Events told in the order they happened." },
    { term: "Flashback", definition: "A scene that jumps back in time to reveal earlier events." },
    { term: "Problem–solution structure", definition: "A text organised around a problem and its resolution." },
    { term: "Frame narrative", definition: "A story within a story — an outer narrative frames an inner one." },
    { term: "Climax", definition: "The point of highest tension or turning point in a narrative." },
    { term: "Circular structure", definition: "A text that ends by returning to its beginning or central image." },
  ],
  concepts: [
    {
      id: "cile-u2-text-structure",
      title: "Analysing text structure",
      skill: "Identify the organising structure of a text and explain how it shapes meaning and reader response.",
      lesson: {
        sections: [
          {
            heading: "Common structures",
            body: "- **Chronological**: events in time order — simple, clear, builds to an ending.\n- **Problem–solution**: a difficulty is established, explored, resolved — common in speeches and articles.\n- **Flashback**: jumps back to reveal background — creates mystery, deepens character.\n- **Frame**: a story inside a story — the outer frame comments on the inner tale.\n- **Circular**: ends where it began — suggests inevitability or completion.",
          },
          {
            heading: "Why structure matters",
            body: "Structure controls **when** the reader learns information and **how** tension builds. A flashback delays revelation; a problem–solution structure creates expectation of resolution; a circular ending gives a sense of closure or fate.",
          },
          {
            heading: "Analysing structure",
            body: "1. Map the sections: what happens in each?\n2. Identify the pattern: time order? problem–solution? frame?\n3. Ask: why this structure? What would be lost if it were told differently?",
          },
        ],
        keyFormulas: [
          { name: "Structure → meaning", statement: "The order in which information is released shapes what the reader understands and feels." },
        ],
        workedExample: {
          problem: "The film review: 'not because it is perfect, but because it is honest' — how does the opening structure the review?",
          solution: "The concession ('not perfect') before the claim ('honest') creates a balanced, credible judgement — the structure signals this is a thoughtful review, not a fan piece.",
        },
      },
      questions: [
        {
          id: "cile-u2-struct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: reviewExtract,
          stem: "What structure does the film review use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem–solution" },
              { id: "b", text: "Flashback" },
              { id: "c", text: "Chronological summary of the plot" },
              { id: "d", text: "Circular narrative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronological structure", statement: "The review follows the film's narrative order: setup, journey, climax, verdict." },
            ],
            steps: [
              { reasoning: "The review describes the story in order before giving a verdict.", working: "\\text{plot order}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Chronological summary of the plot",
            commonErrors: ["Choosing (a) — there is no problem being solved for the reader."],
          },
        },
        {
          id: "cile-u2-struct-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: speechExtract,
          stem: "Identify the structure of the speech and state its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Problem–solution", statement: "The speech establishes a problem (broken toilets) and demands a solution (repairs and a date)." },
            ],
            steps: [
              { reasoning: "Structure: problem established, evidence presented, demand made.", working: "\\text{problem → evidence → demand}", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose: to persuade the council to act on the toilet repairs.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Problem–solution structure: it establishes the broken-toilet problem, backs it with evidence, and demands repairs — designed to persuade the council.",
            commonErrors: ["Describing content without identifying the organising structure."],
          },
        },
        {
          id: "cile-u2-struct-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: reviewExtract,
          stem: "Explain how the review's structure — praise first, weakness in the middle, verdict at the end — shapes the reader's response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Delayed verdict", statement: "Holding the recommendation until after balanced analysis builds trust." },
            ],
            steps: [
              { reasoning: "Opening praise ('stays with you', 'honest') establishes credibility.", working: "\\text{early praise}", marks: 1, markCode: "AO2" },
              { reasoning: "Middle admits weakness ('middle hour drags') — balanced judgement.", working: "\\text{admits flaw}", marks: 1, markCode: "AO2" },
              { reasoning: "Final verdict ('Recommended for...') lands after trust is built.", working: "\\text{delayed verdict}", marks: 1, markCode: "AO2" },
              { reasoning: "Structure makes the recommendation feel earned, not hyped.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The balanced structure — praise, then honest flaw, then verdict — builds trust so the final recommendation feels credible rather than promotional.",
            commonErrors: ["Saying the structure is 'good' without explaining how it affects the reader."],
          },
        },
        {
          id: "cile-u2-struct-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: speechExtract,
          stem: "The speech uses a deliberate structure to persuade the council.",
          parts: [
            { label: "a", prompt: "Identify the opening hook and its effect.", marks: 2 },
            { label: "b", prompt: "How does the speaker anticipate and counter the council's likely reaction?", marks: 2 },
            { label: "c", prompt: "Explain the effect of the evidence list ('four hundred signatures... photographs... list').", marks: 2 },
            { label: "d", prompt: "Why does the speaker end with 'We are not asking for the moon'?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive structure", statement: "Hook → anticipated objection → evidence → modest demand → memorable close." },
            ],
            steps: [
              { part: "a", reasoning: "Hook: 'the state of our toilets' — deliberately mundane subject made serious.", working: "\\text{mundane made serious}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Effect: disarms mockery by owning it ('How charming').", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "She voices the objection: 'A student is talking about toilets.'", working: "\\text{voices objection}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Then reframes: 'not about vanity — it is about dignity.'", working: "\\text{reframes as dignity}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "List of three concrete proofs — signatures, photos, dates — makes the claim undeniable.", working: "\\text{signatures/photos/dates}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Specificity signals preparation and seriousness.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "'Not asking for the moon' minimises the demand — repairs are basic rights.", working: "\\text{minimal demand}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It makes refusal seem unreasonable — who denies the basics?", working: "\\text{refusal unreasonable}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The idiom gives a memorable, quotable ending.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) mundane subject made serious; owns the mockery (b) voices then reframes the objection as dignity (c) concrete evidence proves preparedness (d) minimises demand so refusal seems unreasonable; quotable close",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Hook identified with effect explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Objection handling accurately described.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Evidence list's effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Closing strategy explained convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it sounds nice' without explaining the persuasive logic."],
          },
        },
      ],
    },
    {
      id: "cile-u2-narrative-structure",
      title: "Narrative structure",
      skill: "Analyse how narrative structure — opening, build-up, climax, resolution — creates tension and meaning.",
      lesson: {
        sections: [
          {
            heading: "The shape of a story",
            body: "Most narratives follow a pattern:\n\n- **Opening**: establishes character, setting, and the status quo.\n- **Build-up**: introduces conflict or complication; tension rises.\n- **Climax**: the turning point — highest tension, the moment everything changes.\n- **Resolution**: aftermath; how characters and situations settle.",
          },
          {
            heading: "Pace and tension",
            body: "Writers control tension through **pacing**: short paragraphs and sentences speed things up; long descriptions slow them down. The climax often uses the shortest, most dramatic sentences. The resolution slows again, allowing reflection.",
          },
          {
            heading: "Structural choices in narrative",
            body: "- **In medias res**: starting mid-action, then flashing back — immediate engagement.\n- **Circular**: ending where it began — suggests fate or completion.\n- **Frame**: a narrator tells the story — adds reliability questions.",
          },
        ],
        keyFormulas: [
          { name: "Narrative arc", statement: "Opening (status quo) → build-up (conflict) → climax (turning point) → resolution (aftermath)." },
        ],
        workedExample: {
          problem: "In the lighthouse extract, where is the climax?",
          solution: "The climax is Elias climbing the steps one last time and accepting the automation — the moment he lets go of his life's work. The resolution is his understanding that the light will 'still need' to be lit.",
        },
      },
      questions: [
        {
          id: "cile-u2-narr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: lighthouseExtract,
          stem: "Which part of the narrative arc is 'When the automation letters finally arrived'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening" },
              { id: "b", text: "Build-up" },
              { id: "c", text: "Climax" },
              { id: "d", text: "Resolution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Build-up", statement: "The complication that raises tension before the climax." },
            ],
            steps: [
              { reasoning: "The letters introduce the central conflict — the lighthouse will be automated.", working: "\\text{conflict introduced}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Build-up",
            commonErrors: ["Choosing (c) — the climax is his final climb, not the arrival of the letters."],
          },
        },
        {
          id: "cile-u2-narr-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: lighthouseExtract,
          stem: "Identify the climax of the extract and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "The turning point of highest tension where the central conflict peaks." },
            ],
            steps: [
              { reasoning: "Climax: Elias climbing the steps 'one last time' and accepting automation.", working: "\\text{final climb}", marks: 1, markCode: "AO2" },
              { reasoning: "Why: it is the moment he confronts and accepts the end of his life's work — maximum emotional tension.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The climax is Elias's final climb up the 112 steps and his acceptance that the lamp will turn without him — the peak of his emotional conflict.",
            commonErrors: ["Choosing the opening (introducing Elias) — that is the status quo, not the turning point."],
          },
        },
        {
          id: "cile-u2-narr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: lighthouseExtract,
          stem: "Explain how the pacing of the extract creates tension before the climax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing", statement: "Sentence and paragraph length control tension; longer build-up, shorter climax." },
            ],
            steps: [
              { reasoning: "Evidence: early paragraphs are descriptive and steady — routine established.", working: "\\text{steady routine}", marks: 1, markCode: "AO2" },
              { reasoning: "The automation letters introduce disruption — pace quickens slightly.", working: "\\text{disruption}", marks: 1, markCode: "AO2" },
              { reasoning: "Final paragraph: short, decisive sentences — 'The lamp, he knew, would keep turning without him.'", working: "\\text{short decisive}", marks: 1, markCode: "AO2" },
              { reasoning: "The acceleration mirrors Elias's emotional climax.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Steady descriptive pacing establishes routine; the letters disrupt it; the final paragraph's short, decisive sentences accelerate into the climax, mirroring Elias's emotional peak.",
            commonErrors: ["Describing events without linking pacing to tension."],
          },
        },
        {
          id: "cile-u2-narr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: lighthouseExtract,
          stem: "The extract is a short narrative about Elias, the lighthouse keeper.",
          parts: [
            { label: "a", prompt: "Identify the opening's function in establishing character and setting.", marks: 2 },
            { label: "b", prompt: "How does the build-up create the central conflict?", marks: 2 },
            { label: "c", prompt: "Explain the climax and its emotional impact.", marks: 2 },
            { label: "d", prompt: "What does the resolution suggest about the value of quiet, unnoticed work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative arc", statement: "Opening establishes status quo; build-up creates conflict; climax resolves it; resolution shows aftermath." },
            ],
            steps: [
              { part: "a", reasoning: "Opening: 'nineteen years... never once let it go dark' — establishes dedication.", working: "\\text{dedication}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Setting: isolated rock, 112 steps — physical and emotional remoteness.", working: "\\text{isolation}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Build-up: routine detailed, then automation letters arrive.", working: "\\text{routine → letters}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Conflict: his life's work vs inevitable technological change.", working: "\\text{work vs change}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Climax: final climb, acceptance that the lamp continues without him.", working: "\\text{final climb}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Impact: grief transformed into understanding — he lets go with dignity.", working: "\\text{grief → dignity}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Resolution: 'Someone, somewhere, would still need it to' — purpose outlives the person.", working: "\\text{purpose outlives}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Suggests quiet work matters even when unseen and unthanked.", working: "\\text{unseen matters}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion linking structure to theme.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) dedication and isolation established (b) routine disrupted by automation letters (c) final climb = letting go with dignity (d) unseen work still matters — purpose outlives the person",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Opening function accurately identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Conflict accurately described.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Climax identified with impact explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Theme argued convincingly through resolution.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'the lighthouse is important' without linking to the theme of unseen work."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u2-structure-notes",
      title: "Text and narrative structure — revision notes",
      summary: "Chronological, problem–solution, flashback, frame; narrative arc and pacing.",
      sections: [
        {
          heading: "Text structures",
          body: "Chronological (time order), problem–solution (difficulty → resolution), flashback (delayed revelation), frame (story within story), circular (ends where it began). Structure controls when the reader learns what.",
        },
        {
          heading: "Narrative arc",
          body: "Opening (status quo) → build-up (conflict) → climax (turning point) → resolution (aftermath). Pacing: long build-up, short climax, slow resolution.",
        },
        {
          heading: "Exam technique",
          body: "Identify the structure, map the sections, then ask why this structure was chosen — what would be lost if it were different?",
        },
      ],
    },
  ],
};
