import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cie-ol-fl-lesson-1-1",
  code: "1-1",
  title: "Narrative elements in prose",
  goal: "I CAN identify and analyse the core elements of narrative prose.",
  standards: ["1119 Reading: prose narratives"],
  vocabulary: [
    { term: "Narrative", definition: "A story told through events and characters." },
    { term: "Plot", definition: "The sequence of events in a story." },
    { term: "Exposition", definition: "The opening that establishes setting and characters." },
    { term: "Climax", definition: "The point of highest tension in a story." },
    { term: "Resolution", definition: "How the story's conflicts end." },
    { term: "Setting", definition: "Time and place where events occur." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-narrative-elements",
      title: "Core narrative elements",
      skill: "Identify plot, character, setting and theme in prose.",
      lesson: {
        sections: [
          {
            heading: "Plot structure",
            body: "Most narratives follow: exposition (setup) → rising action → climax → falling action → resolution. Not all stories are linear — some use flashbacks or parallel plots.",
          },
          {
            heading: "Character and setting",
            body: "Characters drive the plot through their desires and conflicts. Setting — time, place, atmosphere — shapes what characters can do and how readers feel.",
          },
          {
            heading: "Theme",
            body: "Theme is the underlying idea the author explores — love, power, identity, society. It emerges from the whole text, not a single event.",
          },
        ],
        keyFormulas: [
          { name: "Narrative elements", statement: "Plot+character+setting+theme = complete narrative analysis." },
        ],
        workedExample: {
          problem: "Identify the climax in a story where the hero confronts the villain.",
          solution: "The confrontation is the climax — highest tension, decisive moment. Resolution follows showing consequences.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ne-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'exposition' in a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening that sets up story" },
              { id: "b", text: "Highest tension point" },
              { id: "c", text: "Story's ending" },
              { id: "d", text: "Character's speech" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exposition", statement: "Opening that establishes setting and characters." },
            ],
            steps: [
              { reasoning: "Exposition = setup/opening.", working: "setup", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Opening that sets up story",
            commonErrors: ["Choosing (b) — that's climax."],
          },
        },
        {
          id: "cie-ol-fl-ne-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does setting affect a narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Setting", statement: "Time/place shapes possible actions and reader mood." },
            ],
            steps: [
              { reasoning: "Setting constrains and enables character action.", working: "constrains", marks: 1, markCode: "AO2" },
              { reasoning: "Creates atmosphere affecting reader response.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Setting shapes possible actions and creates atmosphere.",
            commonErrors: ["Treating setting as background only."],
          },
        },
        {
          id: "cie-ol-fl-ne-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do plot and character interact?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plot-character link", statement: "Characters' desires drive plot; plot events change characters." },
            ],
            steps: [
              { reasoning: "Character desires create goals that drive events.", working: "desires", marks: 1, markCode: "AO2" },
              { reasoning: "Plot events force characters to change or react.", working: "events", marks: 1, markCode: "AO2" },
              { reasoning: "This interaction creates the story's meaning.", working: "meaning", marks: 1, markCode: "AO2" },
              { reasoning: "Interaction explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Character desires drive plot; plot events change characters.",
            commonErrors: ["Analysing them separately."],
          },
        },
        {
          id: "cie-ol-fl-ne-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse narrative elements.",
          parts: [
            { label: "a", prompt: "Define exposition and climax.", marks: 2 },
            { label: "b", prompt: "How does setting affect narrative?", marks: 2 },
            { label: "c", prompt: "How do plot and character interact?", marks: 2 },
            { label: "d", prompt: "What is theme?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative elements", statement: "Plot stages, setting, character interaction, theme." },
            ],
            steps: [
              { part: "a", reasoning: "Exposition=setup; climax=highest tension.", working: "definitions", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Setting shapes actions and atmosphere.", working: "setting", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Desires drive plot; events change characters.", working: "interaction", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Underlying idea explored — love, power, identity.", working: "theme", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Examples valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) setup+tension (b) actions+atmosphere (c) desires/events (d) underlying idea",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Theme clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing climax with resolution."],
          },
        },
        {
          id: "cie-ol-fl-ne-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'climax' in a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The point of highest tension" },
              { id: "b", text: "The opening setup" },
              { id: "c", text: "The final resolution" },
              { id: "d", text: "A character's introduction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climax", statement: "Point of highest tension where the central conflict peaks." },
            ],
            steps: [
              { reasoning: "Climax = peak tension of the story.", working: "peak", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The point of highest tension",
            commonErrors: ["Choosing (c) — that is the resolution."],
          },
        },
        {
          id: "cie-ol-fl-ne-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "List the five stages of a linear narrative plot in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plot stages", statement: "Exposition, rising action, climax, falling action, resolution." },
            ],
            steps: [
              { reasoning: "Correct order of the five stages.", working: "exposition→rising→climax→falling→resolution", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Exposition, rising action, climax, falling action, resolution.",
            commonErrors: ["Putting resolution before climax."],
          },
        },
        {
          id: "cie-ol-fl-ne-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does a flashback affect the structure of a narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Flashback", statement: "Interrupts chronological order to reveal earlier events." },
            ],
            steps: [
              { reasoning: "Breaks linear time order.", working: "non-linear", marks: 1, markCode: "AO2" },
              { reasoning: "Reveals past events that explain present motivations or conflicts.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Interrupts chronological order and reveals past events that explain present motivations and conflicts.",
            commonErrors: ["Treating a flashback as part of the rising action only."],
          },
        },
        {
          id: "cie-ol-fl-ne-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a protagonist and an antagonist.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Protagonist/antagonist", statement: "Main character vs opposing force." },
            ],
            steps: [
              { reasoning: "Protagonist drives the plot; antagonist opposes or creates conflict.", working: "drive/opposes", marks: 1, markCode: "AO1" },
              { reasoning: "Clear distinction drawn.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Protagonist is the main character who drives the plot; antagonist opposes them and creates conflict.",
            commonErrors: ["Assuming the antagonist is always a villain."],
          },
        },
        {
          id: "cie-ol-fl-ne-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the main types of conflict that can drive a narrative plot?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conflict types", statement: "Character vs character, self, society, nature, fate." },
            ],
            steps: [
              { reasoning: "Character vs character/society/nature/fate.", working: "external", marks: 1, markCode: "AO1" },
              { reasoning: "Character vs self (internal).", working: "internal", marks: 1, markCode: "AO1" },
              { reasoning: "Types identified accurately.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Character vs character, self, society, nature and fate/destiny.",
            commonErrors: ["Listing only external conflict and missing internal conflict."],
          },
        },
        {
          id: "cie-ol-fl-ne-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a non-linear plot differ from a linear plot, and what effect can it create?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Non-linear plot", statement: "Flashbacks and parallel plots disrupt chronological order." },
            ],
            steps: [
              { reasoning: "Linear plot follows chronological order; non-linear does not.", working: "chronological", marks: 1, markCode: "AO1" },
              { reasoning: "Non-linear uses flashbacks or parallel storylines.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Can create suspense by withholding causes or revealing consequences first.", working: "suspense", marks: 1, markCode: "AO2" },
              { reasoning: "Effect on reader explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Non-linear plot uses flashbacks/parallel plots to disrupt chronology, creating suspense and deepening character understanding.",
            commonErrors: ["Describing the technique without explaining its effect."],
          },
        },
        {
          id: "cie-ol-fl-ne-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is the resolution important in a narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Resolution", statement: "Shows consequences of the climax and provides closure." },
            ],
            steps: [
              { reasoning: "Shows consequences of the climax.", working: "consequences", marks: 1, markCode: "AO1" },
              { reasoning: "Provides closure for the reader.", working: "closure", marks: 1, markCode: "AO2" },
              { reasoning: "Reveals how characters have changed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It shows the consequences of the climax, provides closure, and reveals how characters have changed.",
            commonErrors: ["Confusing resolution with the climax."],
          },
        },
        {
          id: "cie-ol-fl-ne-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'theme' in a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The underlying idea explored" },
              { id: "b", text: "The main character" },
              { id: "c", text: "The story's setting" },
              { id: "d", text: "The sequence of events" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "Underlying idea explored across the whole text, e.g. love, power, identity." },
            ],
            steps: [
              { reasoning: "Theme = underlying idea, not a single event.", working: "idea", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The underlying idea explored",
            commonErrors: ["Choosing (d) — that is plot."],
          },
        },
        {
          id: "cie-ol-fl-ne-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can setting foreshadow events in a narrative?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foreshadowing", statement: "Setting details hint at future events." },
            ],
            steps: [
              { reasoning: "Details of place or weather hint at coming events.", working: "hints", marks: 1, markCode: "AO2" },
              { reasoning: "Creates anticipation or unease in the reader.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Setting details can hint at future events, creating anticipation or unease in the reader.",
            commonErrors: ["Describing setting without linking it to future events."],
          },
        },
        {
          id: "cie-ol-fl-ne-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Narrative structure questions.",
          parts: [
            { label: "a", prompt: "Define 'rising action'.", marks: 1 },
            { label: "b", prompt: "Explain how conflict drives the plot.", marks: 2 },
            { label: "c", prompt: "How does theme emerge from a whole text?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative structure", statement: "Rising action, conflict, theme." },
            ],
            steps: [
              { part: "a", reasoning: "Events that build tension towards the climax.", working: "build-up", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Conflict creates obstacles characters must overcome.", working: "obstacles", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "These events form the plot's sequence.", working: "events", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Theme is the underlying idea, not a single event.", working: "underlying", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "It emerges across the whole text through plot, character and setting.", working: "whole text", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Examples of themes valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) build-up to climax (b) conflict=engine of events (c) emerges across whole text",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "b" },
              { level: "Level 3", marks: "3", descriptor: "Theme clear.", part: "c" },
              { level: "Level 2", marks: "2", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Defining theme as the plot."],
          },
        },
        {
          id: "cie-ol-fl-ne-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how plot, character and setting interact in a narrative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Element interaction", statement: "Characters drive plot; setting enables/constrains; events change characters." },
            ],
            steps: [
              { reasoning: "Character desires drive the plot events.", working: "desires", marks: 1, markCode: "AO2" },
              { reasoning: "Setting shapes what characters can do.", working: "setting", marks: 1, markCode: "AO2" },
              { reasoning: "Plot events force characters to change.", working: "change", marks: 1, markCode: "AO2" },
              { reasoning: "Interaction explained coherently.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Character desires drive plot; setting shapes possible actions; plot events change characters — together they create meaning.",
            commonErrors: ["Analysing each element in isolation without linking them."],
          },
        },
        {
          id: "cie-ol-fl-ne-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Comprehensive narrative analysis.",
          parts: [
            { label: "a", prompt: "Name the five stages of a linear plot.", marks: 2 },
            { label: "b", prompt: "Explain the function of the climax.", marks: 2 },
            { label: "c", prompt: "Distinguish theme from plot.", marks: 2 },
            { label: "d", prompt: "Analyse how narrative elements work together in a story you know.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Narrative elements", statement: "Plot stages, climax, theme vs plot, element interaction." },
            ],
            steps: [
              { part: "a", reasoning: "Exposition, rising action, climax, falling action, resolution.", working: "stages", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All five correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Highest tension where central conflict peaks.", working: "tension", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It is the turning point of the story.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Plot = sequence of events; theme = underlying idea.", working: "plot/theme", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Distinction clear.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Elements identified in the chosen story.", working: "elements", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Interaction between elements analysed.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Analysis coherent and supported.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) five stages (b) peak tension/turning point (c) events vs idea (d) elements interact",
            levels: [
              { level: "Level 2", marks: "2", descriptor: "All stages.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Function clear.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "2", descriptor: "Distinction clear.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Confused.", part: "c" },
              { level: "Level 3", marks: "3", descriptor: "Analysis strong.", part: "d" },
              { level: "Level 2", marks: "2", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0-1", descriptor: "Descriptive only.", part: "d" },
            ],
            commonErrors: ["Confusing theme with plot."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-character-analysis",
      title: "Character analysis",
      skill: "Analyse characters through direct and indirect methods.",
      lesson: {
        sections: [
          {
            heading: "Direct characterisation",
            body: "Author tells us directly: 'She was brave.' Physical description, narrator's comments, other characters' opinions.",
          },
          {
            heading: "Indirect characterisation",
            body: "We infer from: actions, dialogue, thoughts, appearance, what others say, how others react.",
          },
          {
            heading: "Character development",
            body: "Flat characters stay the same; round characters change. Protagonist drives story; antagonist opposes. Track how characters evolve.",
          },
        ],
        keyFormulas: [
          { name: "Characterisation", statement: "Direct (told) vs indirect (shown through actions/dialogue/thoughts)." },
        ],
        workedExample: {
          problem: "Character helps stranger despite risk — what does this show?",
          solution: "Indirect characterisation — action reveals kindness/courage without author stating it.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'indirect characterisation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Revealed through actions/dialogue" },
              { id: "b", text: "Author states directly" },
              { id: "c", text: "Character's age" },
              { id: "d", text: "Physical description only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Indirect characterisation", statement: "Character revealed through actions, dialogue, thoughts." },
            ],
            steps: [
              { reasoning: "Indirect = shown not told.", working: "shown", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Revealed through actions/dialogue",
            commonErrors: ["Choosing (b) — that's direct."],
          },
        },
        {
          id: "cie-ol-fl-ca-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two methods of indirect characterisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Indirect methods", statement: "Actions, dialogue, thoughts, appearance, others' reactions." },
            ],
            steps: [
              { reasoning: "Any two valid methods.", working: "methods", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Actions, dialogue, thoughts, appearance, others' reactions (any two).",
            commonErrors: ["Listing direct methods."],
          },
        },
        {
          id: "cie-ol-fl-ca-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a character's dialogue reveal personality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue", statement: "Word choice, tone, topics reveal education, attitude, relationships." },
            ],
            steps: [
              { reasoning: "Word choice shows education and attitude.", working: "word choice", marks: 1, markCode: "AO2" },
              { reasoning: "Tone reveals emotion and confidence.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Topics show interests and priorities.", working: "topics", marks: 1, markCode: "AO2" },
              { reasoning: "Analysis clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice, tone, topics reveal personality.",
            commonErrors: ["Ignoring subtext — what isn't said matters."],
          },
        },
        {
          id: "cie-ol-fl-ca-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Character analysis techniques.",
          parts: [
            { label: "a", prompt: "Define indirect characterisation.", marks: 2 },
            { label: "b", prompt: "Name two methods.", marks: 2 },
            { label: "c", prompt: "How dialogue reveals personality?", marks: 2 },
            { label: "d", prompt: "Flat vs round characters?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Characterisation", statement: "Indirect methods, dialogue, flat/round." },
            ],
            steps: [
              { part: "a", reasoning: "Character shown through actions/dialogue/thoughts.", working: "indirect", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Actions, dialogue, thoughts, appearance, reactions.", working: "methods", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Two+ valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Word choice, tone, topics reveal personality.", working: "dialogue", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Flat=unchanging; round=develops/changes.", working: "flat/round", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Distinction clear.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) shown not told (b) methods (c) word choice/tone/topics (d) flat=static/round=dynamic",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two methods.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Distinction clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Confusing flat and round characters."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-point-of-view",
      title: "Point of view and narration",
      skill: "Analyse narrative perspective and its effects.",
      lesson: {
        sections: [
          {
            heading: "First person",
            body: "'I' narrator — intimate access to one mind, but limited to what they know/see. Can be reliable or unreliable.",
          },
          {
            heading: "Third person",
            body: "'He/she/they' — omniscient (knows all thoughts) or limited (follows one character). More distance, broader view.",
          },
          {
            heading: "Effect on reader",
            body: "First person creates empathy; third person creates objectivity. Unreliable narrators make readers question events.",
          },
        ],
        keyFormulas: [
          { name: "Point of view", statement: "First=intimate/limited; third=broader/objective; unreliable=question narrator." },
        ],
        workedExample: {
          problem: "A child narrates events they don't fully understand.",
          solution: "First-person unreliable narrator — child's limited understanding creates dramatic irony for the reader.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'omniscient narrator' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knows all thoughts/events" },
              { id: "b", text: "Only one character's view" },
              { id: "c", text: "First person 'I'" },
              { id: "d", text: "Unreliable narrator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Omniscient", statement: "Narrator knows all characters' thoughts and events." },
            ],
            steps: [
              { reasoning: "Omniscient = all-knowing.", working: "all", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Knows all thoughts/events",
            commonErrors: ["Choosing (b) — that's limited third person."],
          },
        },
        {
          id: "cie-ol-fl-pov-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does first-person narration affect the reader?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "First person effect", statement: "Creates intimacy and empathy; limited to narrator's knowledge." },
            ],
            steps: [
              { reasoning: "Intimate access builds empathy.", working: "empathy", marks: 1, markCode: "AO2" },
              { reasoning: "Limited knowledge may distort events.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creates intimacy/empathy; limited to narrator's knowledge.",
            commonErrors: ["Assuming narrator is always reliable."],
          },
        },
        {
          id: "cie-ol-fl-pov-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might an author use an unreliable narrator?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unreliable narrator", statement: "Creates mystery, dramatic irony, questions truth." },
            ],
            steps: [
              { reasoning: "Creates mystery — reader questions what's true.", working: "mystery", marks: 1, markCode: "AO2" },
              { reasoning: "Dramatic irony — reader knows more than narrator.", working: "irony", marks: 1, markCode: "AO2" },
              { reasoning: "Explores subjectivity of truth/memory.", working: "subjectivity", marks: 1, markCode: "AO2" },
              { reasoning: "Reasons explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Mystery, dramatic irony, explores subjectivity of truth.",
            commonErrors: ["Thinking it's just a mistake."],
          },
        },
        {
          id: "cie-ol-fl-pov-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Narrative perspective analysis.",
          parts: [
            { label: "a", prompt: "Define omniscient narrator.", marks: 1 },
            { label: "b", prompt: "First vs third person effects?", marks: 3 },
            { label: "c", prompt: "Why unreliable narrators?", marks: 2 },
            { label: "d", prompt: "How POV shapes meaning?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Point of view", statement: "Omniscient, first/third effects, unreliable, meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Knows all thoughts/events.", working: "omniscient", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "First=intimate/limited; third=broader/objective.", working: "effects", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Mystery, irony, subjectivity of truth.", working: "unreliable", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple reasons.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "POV controls what reader knows — shapes interpretation and empathy.", working: "meaning", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) all-knowing (b) intimate vs objective (c) mystery/irony/subjectivity (d) controls knowledge+empathy",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasons valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Meaning clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring POV effect on interpretation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-prose-notes-1",
      title: "Prose foundations — revision notes",
      summary: "Narrative elements, characterisation, point of view.",
      sections: [
        {
          heading: "Prose analysis",
          body: "Plot stages: exposition→rising→climax→falling→resolution. Character: direct vs indirect (actions/dialogue/thoughts). POV: first=intimate, third=broader, unreliable=question truth.",
        },
      ],
    },
  ],
};
