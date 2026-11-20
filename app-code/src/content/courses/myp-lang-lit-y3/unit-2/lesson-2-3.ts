import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mll3-u2-lesson-2-3",
  code: "2-3",
  title: "Structure and Narrative Techniques",
  goal: "I CAN identify narrative techniques like flashback, foreshadowing and pacing, and explain how structure creates meaning.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion B: Organizing",
  ],
  vocabulary: [
    { term: "Flashback", definition: "A scene that jumps back in time to show earlier events." },
    { term: "Foreshadowing", definition: "Clues that hint at what will happen later." },
    { term: "Pacing", definition: "The speed at which events unfold — fast action vs slow description." },
    { term: "Frame narrative", definition: "A story within a story — an outer narrator tells an inner tale." },
    { term: "Cliffhanger", definition: "An ending that leaves the reader in suspense at a tense moment." },
    { term: "Circular structure", definition: "A story that ends where it began, creating a sense of completion." },
  ],
  concepts: [
    {
      id: "mll3-u2-structure-techniques",
      title: "Narrative structure",
      skill: "Identify flashbacks, foreshadowing, pacing and frame narratives and explain their effects.",
      lesson: {
        sections: [
          {
            heading: "Flashback",
            body: "A **flashback** interrupts the present to show earlier events. It adds depth — we understand why a character acts as they do. 'She froze at the sight of water. Ten years earlier, she had nearly drowned.' The flashback explains the present reaction.",
          },
          {
            heading: "Foreshadowing",
            body: "**Foreshadowing** plants clues about future events. 'The sky darkened; birds went silent' before a storm hints at coming danger. Good foreshadowing is subtle — it rewards careful readers without giving everything away.",
          },
          {
            heading: "Pacing and frame",
            body: "**Pacing** controls speed — short sentences and action scenes feel fast; long descriptions feel slow. A **frame narrative** wraps one story inside another — an older person telling a tale adds distance and often wisdom. **Circular structure** ends where it began, creating closure.",
          },
        ],
        keyFormulas: [
          { name: "Structure devices", statement: "Flashback = earlier events; Foreshadowing = future hints; Pacing = speed; Frame = story within story." },
        ],
        workedExample: {
          problem: "Why might a writer begin a story at the end and then flash back?",
          solution: "To create intrigue — the reader knows the outcome and watches how events lead there, building tension and meaning.",
        },
      },
      questions: [
        {
          id: "mll3-u2-structure-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'foreshadowing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the ending first" },
              { id: "b", text: "Clues that hint at future events" },
              { id: "c", text: "A type of poem" },
              { id: "d", text: "A flashback to the past" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Foreshadowing", statement: "Foreshadowing plants clues about what will happen." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): foreshadowing = future hints — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Clues that hint at future events",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "The sky turned the colour of bruises. Birds vanished from the trees. The old dog pressed itself against the doorframe and whimpered.",
          },
          stem: "What is being foreshadowed here, and how?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foreshadowing", statement: "Sensory details and animal behaviour hint at coming events." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a storm or disaster is foreshadowed — 'bruises' sky, vanishing birds, whimpering dog all signal danger.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the technique uses nature's signs — dark sky, fleeing birds — as omens before the event.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A storm/disaster is foreshadowed through ominous nature details — dark sky, vanishing birds, fearful dog.",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Frame",
            author: "Written for Akademik Space",
            text: "Grandpa sat by the fire and began: 'When I was your age, I crossed the desert alone.'\n\nHe told of sand so hot it burned his boots, of water so scarce he licked stones. The children leaned closer, forgetting the dark outside.",
          },
          stem: "Explain how the frame narrative (grandpa telling a story) affects the reader's experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Frame narrative", statement: "A story within a story adds distance, wisdom and intimacy." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the outer frame (grandpa by the fire) makes the inner story (desert crossing) feel like a remembered tale — passed down wisdom.", evidence: "Grandpa sat by the fire", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the children's reactions ('leaned closer') show the story's power — we're watching listeners, adding a layer.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the frame creates intimacy (family storytelling) and distance (it's a retelling) — we get both the tale and its telling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The frame makes it a remembered tale — wisdom passed down — while the listeners' reactions add intimacy; we experience both the story and its telling.",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Key",
            author: "Written for Akademik Space",
            text: "Mara found the key in her grandmother's attic, wrapped in a cloth that smelled of lavender.\n\nYears later, she would understand what it opened. But that afternoon, she only knew it was heavy — heavier than it looked — and that it was hers now.",
          },
          parts: [
            { label: "a", prompt: "Identify the narrative technique used in 'Years later, she would understand'.", marks: 1 },
            { label: "b", prompt: "Explain how this technique creates suspense.", marks: 2 },
            { label: "c", prompt: "What does the final sentence suggest about the story's structure?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Flash-forward and suspense", statement: "Looking ahead to future understanding creates curiosity about the present." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): it's a flash-forward — jumping to a future moment ('Years later') before returning to the present.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'she would understand what it opened' promises a revelation — the reader wants to know what the key opens.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'But that afternoon' returns to the present, delaying the answer — classic suspense technique.", evidence: "But that afternoon", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'heavier than it looked' and 'hers now' suggest the key's significance will unfold — the story is set up for discovery.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the structure (find key → flash-forward → return) creates a circular feeling of destiny — the key was always meant for her.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Flash-forward. (b) Promises future revelation, delays answer — suspense. (c) Sets up discovery; circular structure suggests destiny.",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'flashback' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A scene that jumps forward in time" },
              { id: "b", text: "A scene that jumps back to show earlier events" },
              { id: "c", text: "A sudden loud noise" },
              { id: "d", text: "The story's ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flashback", statement: "A flashback interrupts the present to show earlier events." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): flashback jumps back in time — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A scene that jumps back to show earlier events",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'pacing' control in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of characters" },
              { id: "b", text: "The speed at which events unfold" },
              { id: "c", text: "The book's price" },
              { id: "d", text: "The setting's location" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pacing", statement: "Pacing is the speed at which narrative events unfold." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): pacing controls the speed of events — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The speed at which events unfold",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Moment",
            author: "Written for Akademik Space",
            text: "She froze at the edge of the water. Ten years earlier, she had nearly drowned in this same river — the cold, the panic, the hands reaching for her that never came.",
          },
          stem: "What narrative technique does the second sentence use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Foreshadowing" },
              { id: "b", text: "Flashback" },
              { id: "c", text: "Frame narrative" },
              { id: "d", text: "Circular structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Flashback", statement: "'Ten years earlier' jumps back to explain her present reaction." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Ten years earlier' is a flashback to past trauma — (b).", evidence: "Ten years earlier", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Flashback",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Scene",
            author: "Written for Akademik Space",
            text: "The detective opened the envelope. Inside was a photograph — but of the wrong man. She stared at it for a long moment, then laughed, a short, bitter sound.",
          },
          stem: "Which pacing choice creates the most suspense here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Describing the detective's childhood" },
              { id: "b", text: "The stretched pause ('stared at it for a long moment') and the unexplained bitter laugh that delays meaning" },
              { id: "c", text: "Listing every object in the room" },
              { id: "d", text: "Explaining the plot immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing and suspense", statement: "Slow pacing ('stared for a long moment') stretches tension before a reaction." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the long stare and delayed, unexplained laugh stretch time and leave the reader guessing — suspense — (b).", evidence: "stared at it for a long moment", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The stretched pause and unexplained bitter laugh delay meaning and build suspense",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Storyteller",
            author: "Written for Akademik Space",
            text: "The old sailor sat by the harbour and told of storms that swallowed ships whole. The children gathered at his feet, eyes wide, as he described waves 'taller than houses' and crews 'gone before the echo faded'.\n\n'But we came home,' he always finished. 'Every one of us.'",
          },
          stem: "Explain how the frame narrative (the sailor telling a story) affects the reader's experience of the tales.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Frame narrative", statement: "A story within a story adds distance, wisdom and intimacy." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the outer frame (sailor by the harbour) makes the storm tales feel like remembered wisdom — passed down through experience.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the children's reactions ('eyes wide', 'gathered at his feet') show the stories' power — we're watching listeners, adding a layer of audience.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'But we came home. Every one of us.' — the frame gives the tales a moral and a survivor's authority; we get both the adventure and its meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The frame makes the tales feel like earned wisdom — the children's awe shows their power, and 'we came home' adds a survivor's moral to each story.",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Warning Signs",
            author: "Written for Akademik Space",
            text: "Tom noticed the birds gathering on the wires, unusually still. The air smelled wrong — metallic, like something about to break. His grandmother always said that when the robins went quiet, you paid attention.\n\nThat night, the storm came.",
          },
          parts: [
            { label: "a", prompt: "Identify the foreshadowing in the first paragraph.", marks: 2 },
            { label: "b", prompt: "Explain how the foreshadowing builds suspense.", marks: 2 },
            { label: "c", prompt: "What does 'That night, the storm came' reveal about the structure?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foreshadowing", statement: "Ominous details hint at coming events — subtle clues reward careful readers." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'birds gathering... unusually still', 'air smelled wrong — metallic', 'grandmother's saying' — all signal approaching danger.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): these are nature's omens — subtle clues that something is wrong before it's confirmed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the foreshadowing makes readers anxious — we sense danger before Tom does, creating dramatic tension.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'like something about to break' is itself a foreshadowing metaphor — it warns of rupture without naming it.", evidence: "like something about to break", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'That night, the storm came' pays off the foreshadowing — the structure withholds confirmation until the final line, then delivers it flatly for impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Still birds, metallic smell, grandmother's saying. (b) Ominous details create dread before confirmation. (c) The final line pays off the foreshadowing — suspense resolved in one flat statement.",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Three Devices",
            author: "Written for Akademik Space",
            text: "Device 1: jumping back to show a character's childhood\nDevice 2: hinting that a character will fail\nDevice 3: telling a story within a story",
          },
          stem: "How many of these describe flashbacks? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flashback", statement: "Only Device 1 (jumping back to childhood) is a flashback; 2 is foreshadowing, 3 is frame narrative." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Device 1 is flashback — 1 device.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'frame narrative'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A story that ends where it began" },
              { id: "b", text: "A story within a story — an outer narrator tells an inner tale" },
              { id: "c", text: "A flashback to the past" },
              { id: "d", text: "A cliffhanger ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frame narrative", statement: "A frame narrative wraps one story inside another." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): frame narrative = story within a story — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A story within a story — an outer narrator tells an inner tale",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Stories",
            author: "Written for Akademik Space",
            text: "Story A: 'Run! The building is collapsing!'\nStory B: 'The morning was quiet. Sunlight filtered through the curtains. She made tea, listening to birds outside.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many stories use fast pacing?", marks: 1 },
            { label: "b", prompt: "How many use slow pacing?", marks: 1 },
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
              { kind: "technique", name: "Pacing", statement: "Story A is fast (action); Story B is slow (description)." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Story A is fast-paced — 1.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Story B is slow-paced — 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 1",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might a writer use a circular structure (ending where the story began)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To confuse the reader" },
              { id: "b", text: "To create a sense of inevitability, timelessness or completion" },
              { id: "c", text: "To make the story longer" },
              { id: "d", text: "Because it's easier to write" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Circular structure", statement: "Ending where you began creates closure, fate or timelessness." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): circular structure creates inevitability/completion — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To create a sense of inevitability, timelessness or completion",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is subtle foreshadowing effective in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It tells the reader exactly what will happen" },
              { id: "b", text: "It hints at events without revealing them — rewarding attention while preserving suspense" },
              { id: "c", text: "It makes the story confusing" },
              { id: "d", text: "It speeds up the plot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Subtle foreshadowing", statement: "Good foreshadowing is subtle — it hints without revealing, rewarding attention." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): subtle foreshadowing hints without revealing — it rewards careful readers and preserves suspense — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It hints at events without revealing them — rewarding attention while preserving suspense",
          },
        },
        {
          id: "mll3-u2-structure-techniques-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Photograph",
            author: "Written for Akademik Space",
            text: "Years later, Ana would recognise the face in the photograph immediately. But that summer, she was too young to understand what she was looking at — the man in the doorway, the date on the back, the house she thought she'd never see again.\n\nShe tucked it into her pocket and forgot about it — until the day she knocked on that door herself.",
          },
          parts: [
            { label: "a", prompt: "Identify the narrative technique in 'Years later, Ana would recognise'.", marks: 1 },
            { label: "b", prompt: "Explain how this technique creates suspense.", marks: 2 },
            { label: "c", prompt: "What does 'until the day she knocked on that door herself' suggest about the story's structure?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Flash-forward and suspense", statement: "Looking ahead creates questions about the present — the reader wants to know what happens between." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'Years later' is a flash-forward — jumping to future knowledge before returning to the present.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'would recognise immediately' promises a revelation — the reader wants to know why the face matters.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'too young to understand' withholds the answer — suspense comes from the gap between what Ana knows now and will know later.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'knocked on that door herself' completes a circle — the photograph's mystery resolves when she revisits the house; circular structure suggests destiny.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the structure (photo → forget → return) shows how the past reaches forward — the story is about reconnection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Flash-forward. (b) Promises future recognition, withholds the why — suspense. (c) 'Knocked on that door' completes the circle — the past returns; circular structure suggests destiny/reconnection.",
          },
        },
      ],
    },
    {
      id: "mll3-u2-structure-effects",
      title: "How structure creates meaning",
      skill: "Analyse how narrative order, pacing and technique choices shape meaning and reader response.",
      lesson: {
        sections: [
          {
            heading: "Order matters",
            body: "The **order** of events shapes meaning. Telling a story **backwards** creates mystery. Starting **in the middle** (in medias res) drops us into action. Ending **before** the climax leaves us wanting more. Structure is a choice, not just a container.",
          },
          {
            heading: "Pacing for effect",
            body: "**Fast pacing** (short sentences, action) creates excitement or panic. **Slow pacing** (long descriptions, reflection) creates tension or contemplation. A writer might slow down for a crucial moment — 'time seemed to stop' — or speed up for chaos.",
          },
          {
            heading: "The reader's journey",
            body: "Structure controls what the reader **knows** and **when**. A linear story reveals in order; a non-linear story withholds and reveals strategically. The reader's experience of time and knowledge is shaped by structure.",
          },
        ],
        keyFormulas: [
          { name: "Structure and meaning", statement: "Order, pacing and technique control what readers know and feel." },
        ],
        workedExample: {
          problem: "Why might a writer tell a story starting with the ending?",
          solution: "To create dramatic irony — we know the outcome and watch events unfold toward it, building tension and meaning.",
        },
      },
      questions: [
        {
          id: "mll3-u2-structure-effects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'pacing' refer to in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of pages" },
              { id: "b", text: "The speed at which events unfold" },
              { id: "c", text: "The font size" },
              { id: "d", text: "The number of characters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pacing", statement: "Pacing is the speed at which narrative events unfold." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): pacing = speed of events — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The speed at which events unfold",
          },
        },
        {
          id: "mll3-u2-structure-effects-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Version A: 'The explosion rocked the building. Glass shattered. People ran.'\n\nVersion B: 'It was a quiet Tuesday morning. The sun came up over the hills, birds sang, and Sarah made coffee while thinking about her day.'",
          },
          stem: "Compare the pacing of these two openings and explain the effect of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing", statement: "Short sentences create urgency; long, descriptive sentences create calm or tension." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Version A is fast-paced — short sentences, immediate action ('explosion', 'shattered', 'ran') create urgency and shock.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Version B is slow-paced — long descriptive sentences create calm normality, making any later disruption more striking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Version A is fast/urgent (short sentences, action); Version B is slow/calm (long description) — pacing shapes mood and expectation.",
          },
        },
        {
          id: "mll3-u2-structure-effects-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Loop",
            author: "Written for Akademik Space",
            text: "She opened the door to the same room. The same bed, the same window, the same dust in the sunlight.\n\n'I've been here before,' she whispered. The clock on the wall read 3:17 — the exact time she'd arrived yesterday.",
          },
          stem: "This story seems to loop back on itself. Explain what this circular structure suggests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Circular structure", statement: "Ending where you began creates a sense of inevitability or timelessness." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'the same room... same bed... same window' repetition suggests she's trapped in a loop or cycle.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'I've been here before' confirms she's reliving events — time is repeating.", evidence: "I've been here before", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'the exact time she'd arrived yesterday' — identical clock time proves the loop is literal, creating eeriness and suggesting fate or a curse.", evidence: "the exact time she'd arrived yesterday", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The circular structure suggests she's trapped in a time loop — identical details and the same clock time show events repeating, creating eeriness and fate.",
          },
        },
        {
          id: "mll3-u2-structure-effects-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Last Page",
            author: "Written for Akademik Space",
            text: "The detective closed the file. The case was solved — he'd known it for weeks. But the letter in the evidence bag still sat on his desk, unopened, waiting.",
          },
          parts: [
            { label: "a", prompt: "Why does the writer begin with the case already solved?", marks: 2 },
            { label: "b", prompt: "What does the unopened letter suggest?", marks: 1 },
            { label: "c", prompt: "Explain how this structure creates suspense despite knowing the outcome.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "In medias res and suspense", statement: "Starting mid-story with a twist creates questions even when outcomes are known." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): starting with the solved case creates a puzzle — if it's solved, why is there a letter? — mystery within certainty.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): it subverts expectations — we think 'case closed' but the unopened letter suggests it's not.", evidence: "case was solved", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the letter suggests new evidence or a twist — it 'waited' implies it will change everything.", evidence: "unopened, waiting", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): suspense comes from the unknown letter, not the known outcome — we know the case is 'solved' but not whether it's truly solved.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the structure withholds the letter's contents, making readers desperate to know what it reveals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Creates puzzle — solved case but unopened letter suggests twist. (b) New evidence/a revelation. (c) Suspense comes from the unknown letter, not the known outcome.",
          },
        },
        {
          id: "mll3-u2-structure-effects-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'in medias res' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starting a story in the middle of the action" },
              { id: "b", text: "Ending a story early" },
              { id: "c", text: "Using a flashback" },
              { id: "d", text: "Writing in first person" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "In medias res", statement: "Starting mid-story drops readers into action and creates immediate engagement." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): in medias res = starting in the middle of action — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Starting a story in the middle of the action",
          },
        },
        {
          id: "mll3-u2-structure-effects-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Telling a story backwards (from end to beginning) most likely creates...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A boring, confusing experience" },
              { id: "b", text: "Mystery and curiosity about how events led to the ending" },
              { id: "c", text: "A faster story" },
              { id: "d", text: "No effect on the reader" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Non-linear order", statement: "Reversing time creates mystery — we know the ending and wonder how it happened." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): backwards structure creates mystery about cause — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mystery and curiosity about how events led to the ending",
          },
        },
        {
          id: "mll3-u2-structure-effects-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Version A: 'The bomb was already ticking. Marcus had four minutes.'\nVersion B: 'Marcus woke slowly, stretched, and wondered what the day would bring.'",
          },
          stem: "Which opening uses in medias res?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Version A — it drops us into the crisis" },
              { id: "b", text: "Version B — it describes waking up" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "In medias res", statement: "Version A starts mid-crisis; Version B starts at the beginning of the day." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Version A starts in the middle of action ('bomb was already ticking') — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Version A — it drops us into the crisis",
          },
        },
        {
          id: "mll3-u2-structure-effects-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Slow Moment",
            author: "Written for Akademik Space",
            text: "Time seemed to slow. Each drop of water from the tap seemed to hang in the air before falling. Her finger hovered over the phone — call or don't call? The silence stretched, thick and golden.",
          },
          stem: "How does the pacing create tension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It rushes through the scene quickly" },
              { id: "b", text: "It stretches a small decision into an eternity — 'time seemed to slow' and 'thick and golden' silence make the reader wait in suspense" },
              { id: "c", text: "It removes all description" },
              { id: "d", text: "It explains the character's thoughts directly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Slow pacing for tension", statement: "Stretching a moment makes small actions feel enormous — suspense through slowness." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): slow pacing stretches a small decision — the reader waits in suspense with her — (b).", evidence: "Time seemed to slow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It stretches a small decision into an eternity, making the reader wait in suspense",
          },
        },
        {
          id: "mll3-u2-structure-effects-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Confession",
            author: "Written for Akademik Space",
            text: "I killed him on a Tuesday. I remember because it was the day the clocks went forward — that extra hour of darkness.\n\nBut I'm getting ahead of myself. Let me start at the beginning.",
          },
          stem: "This story begins with the confession (the ending) before rewinding. Explain what this structure does for the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "In medias res and flashback", statement: "Starting with the outcome creates dramatic irony — we know what happens and watch how." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'I killed him on a Tuesday' reveals the ending first — we know the outcome before the story begins.", evidence: "I killed him on a Tuesday", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'But I'm getting ahead of myself. Let me start at the beginning' explicitly rewinds — the structure is confession-then-flashback.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): knowing the ending creates dramatic irony — we watch events unfold knowing where they lead; tension comes from 'how' and 'why', not 'what'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The confession-first structure creates dramatic irony — we know the ending and watch the story build toward it; tension comes from understanding, not surprise.",
          },
        },
        {
          id: "mll3-u2-structure-effects-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "The letter arrived on her seventieth birthday — fifty years after it was written. She recognised the handwriting immediately, though she hadn't seen it since she was twenty. Inside was a single line: 'I knew you would make it. I always knew.'\n\nShe sat down on the kitchen floor and cried — not from sadness, but from the shock of being remembered.",
          },
          parts: [
            { label: "a", prompt: "Why does the writer begin with the letter's arrival rather than the past?", marks: 2 },
            { label: "b", prompt: "What does 'fifty years after it was written' add to the story?", marks: 1 },
            { label: "c", prompt: "Explain how the structure creates emotional impact.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structure and emotion", statement: "Non-linear time (present first, past implied) creates mystery and emotional weight." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): starting with the letter's arrival creates immediate mystery — who wrote it? why now? — engaging the reader instantly.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'seventy years old', 'fifty years after' establish the time gap upfront — we know this is about lost time and memory.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'fifty years' makes the letter a relic — the delay itself is the emotional payload; it was written for a twenty-year-old, received by a seventy-year-old.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the structure withholds the past — we don't know who wrote it or why it took fifty years — so the revelation lands harder.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'cried... from the shock of being remembered' resolves the mystery with emotion — the structure builds from curiosity to feeling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) The letter's arrival creates mystery and the time gap frames the story. (b) 'Fifty years' makes it a relic — delay is the emotional payload. (c) Withholding the past makes the revelation land harder — curiosity becomes emotion.",
          },
        },
        {
          id: "mll3-u2-structure-effects-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Three Structures",
            author: "Written for Akademik Space",
            text: "Structure 1: starting at the story's climax\nStructure 2: telling events in order\nStructure 3: ending before the resolution",
          },
          stem: "How many of these are non-linear or suspense-building structures? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structure and suspense", statement: "Structures 1 and 3 manipulate order/withholding for effect; Structure 2 is linear." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Structures 1 and 3 are non-linear/suspense-building — 2; Structure 2 is straightforward linear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "mll3-u2-structure-effects-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'cliffhanger' mean in storytelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A happy ending" },
              { id: "b", text: "An ending that leaves the reader in suspense at a tense moment" },
              { id: "c", text: "A story about mountains" },
              { id: "d", text: "A very long chapter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cliffhanger", statement: "A cliffhanger ends at a tense moment, leaving the reader desperate to continue." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): cliffhanger = tense, unresolved ending — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An ending that leaves the reader in suspense at a tense moment",
          },
        },
        {
          id: "mll3-u2-structure-effects-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Stories",
            author: "Written for Akademik Space",
            text: "Story A: 'She opened the door. Behind it stood her brother — alive, smiling, impossible.'\nStory B: 'She woke early, made breakfast, and walked to school as usual.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many stories use an unexpected revelation to create intrigue?", marks: 1 },
            { label: "b", prompt: "How many use a mundane, linear opening?", marks: 1 },
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
              { kind: "technique", name: "Intrigue vs routine", statement: "Story A hooks with the impossible; Story B is ordinary routine." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Story A uses revelation ('alive, impossible') — 1.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Story B is mundane routine — 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 1",
          },
        },
        {
          id: "mll3-u2-structure-effects-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'withholding information' mean in narrative structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Telling the reader everything immediately" },
              { id: "b", text: "Delaying key information to build suspense or curiosity" },
              { id: "c", text: "Making the story confusing on purpose" },
              { id: "d", text: "Removing all description" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Withholding", statement: "Delaying key information controls what readers know and when — a suspense tool." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): withholding = delaying key info to build suspense — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Delaying key information to build suspense or curiosity",
          },
        },
        {
          id: "mll3-u2-structure-effects-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'withholding information' do in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It tells the reader everything at once" },
              { id: "b", text: "It delays key information to control suspense and curiosity" },
              { id: "c", text: "It removes all description" },
              { id: "d", text: "It makes the story confusing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Information control", statement: "Delaying key information controls what readers know and when — a suspense tool." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): withholding delays key information — it builds suspense by controlling what readers know — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It delays key information to control suspense and curiosity",
          },
        },
        {
          id: "mll3-u2-structure-effects-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story ending.",
          extract: {
            title: "The Door",
            author: "Written for Akademik Space",
            text: "She had rehearsed this moment a thousand times. The key was cold in her palm. Behind the door was everything she had left behind — the house, the garden, the version of herself that hadn't yet learned what she now knew.\n\nShe turned the key.",
          },
          parts: [
            { label: "a", prompt: "Why does the writer slow down at the moment of turning the key?", marks: 2 },
            { label: "b", prompt: "What does the ending withhold from the reader?", marks: 1 },
            { label: "c", prompt: "Explain how this structure creates emotional impact.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Climactic pacing", statement: "Slowing at the crucial moment stretches tension and makes the action feel enormous." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): slowing at the key-turn makes a small action feel monumental — the reader waits in suspense for what the door holds.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'rehearsed a thousand times' builds anticipation — this moment has been imagined, making its arrival charged.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the ending withholds what's behind the door — we never see it; the story ends on the threshold.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'everything she had left behind' and 'the version of herself that hadn't yet learned' make the door symbolic — opening it means confronting the past.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): ending on 'She turned the key' leaves the reader at the moment of decision — impact comes from anticipation, not resolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Slow pacing makes the key-turn monumental. (b) What's behind the door is withheld. (c) The door is symbolic — ending on the threshold leaves impact in anticipation.",
          },
        },
      ],
    },
  ],
};
