import type { Lesson } from "../../../types.ts";

export const lesson242: Lesson = {
  id: "cial-e-u4-lesson-4-2",
  code: "4-2",
  title: "Prose: setting, theme and structure",
  goal: "I CAN analyse setting, theme and narrative structure in prose fiction.",
  standards: ["9093: prose analysis"],
  vocabulary: [
    {
      term: "Setting",
      definition:
        "Time and place of the narrative — physical and social context.",
    },
    {
      term: "Theme",
      definition: "Central idea or message explored in the text.",
    },
    { term: "Motif", definition: "Recurring element that develops theme." },
    {
      term: "Symbolism",
      definition: "Objects, characters or events representing abstract ideas.",
    },
    {
      term: "Foreshadowing",
      definition: "Hints of future events planted earlier in the narrative.",
    },
    {
      term: "Flashback",
      definition: "Narrative interruption showing earlier events.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u4-setting-theme",
      title: "Setting and theme",
      skill: "Analyse how setting and theme interact in prose fiction.",
      lesson: {
        sections: [
          {
            heading: "Setting as meaning",
            body: "Setting is never neutral — it reflects and shapes character and theme. A decaying house suggests decline; a bustling city suggests anonymity. Physical details carry symbolic weight.",
          },
          {
            heading: "Theme and motif",
            body: "Theme is the central idea (e.g. 'the corrupting nature of power'). Motifs — recurring images, colours, objects — reinforce theme. Track patterns: repeated symbols reveal what the author emphasises.",
          },
          {
            heading: "Symbolism",
            body: "Objects, weather, animals and colours often symbolise abstract ideas. Light/dark = hope/despair; seasons = cycles of life; weather = emotional states. Don't assume — analyse context.",
          },
        ],
        keyFormulas: [
          {
            name: "Setting/theme",
            statement:
              "Setting reflects theme; motifs reinforce; symbols carry meaning.",
          },
        ],
        workedExample: {
          problem: "How does weather function symbolically?",
          solution:
            "Storm = turmoil; sunshine = hope; fog = confusion. Weather mirrors emotional or narrative states.",
        },
      },
      questions: [
        {
          id: "cial-e-u4-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'motif' in prose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main character" },
              { id: "b", text: "The setting" },
              { id: "c", text: "A recurring element that develops theme" },
              { id: "d", text: "The plot" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motif",
                statement: "Recurring element developing theme.",
              },
            ],
            steps: [
              {
                reasoning: "Motif = recurring thematic element.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Recurring element developing theme",
            commonErrors: ["Confusing with theme itself."],
          },
        },
        {
          id: "cial-e-u4-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does setting contribute to theme in prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Setting",
                statement:
                  "Physical/social environment reflects and reinforces theme.",
              },
            ],
            steps: [
              {
                reasoning: "Setting reflects theme.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Details carry symbolic weight.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Setting reflects and reinforces theme through symbolic detail.",
            commonErrors: ["Describing setting without linking to theme."],
          },
        },
        {
          id: "cial-e-u4-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do motifs function differently from symbols?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Motif vs symbol",
                statement:
                  "Motif=repeated element developing theme; symbol=object representing idea.",
              },
            ],
            steps: [
              {
                reasoning: "Motif recurs and develops over time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Symbol represents abstract idea.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Motif is structural; symbol is figurative.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Motif repeats to develop theme; symbol represents an idea.",
            commonErrors: ["Using terms interchangeably."],
          },
        },
        {
          id: "cial-e-u4-st-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Setting and theme.",
          parts: [
            { label: "a", prompt: "Define motif.", marks: 1 },
            {
              label: "b",
              prompt: "How does setting contribute to theme?",
              marks: 2,
            },
            { label: "c", prompt: "Motif vs symbol?", marks: 3 },
            {
              label: "d",
              prompt: "Analyse setting in a novel of your choice.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Setting/theme",
                statement: "Motif+setting+symbol+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Recurring thematic element.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reflects/reinforces theme.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Symbolic detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Motif=repeated/developing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Symbol=represents idea.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Setting described.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Symbolic meaning identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to theme clear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Analytical point made.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) recurring element (b) reflects theme (c) motif vs symbol (d) setting analysis",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Setting explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Distinction clear.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Effective analysis.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Describing setting without analysis."],
          },
        },
        {
          id: "cial-e-u4-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean that setting is never neutral?",
          response: { type: "mcq", choices: [ { id: "a", text: "It reflects and shapes character and theme" }, { id: "b", text: "It is always outdoors" }, { id: "c", text: "It cannot be analysed" }, { id: "d", text: "It has no description" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Setting meaning", statement: "Place carries symbolic and thematic weight." }], steps: [{ reasoning: "Setting is interpretively loaded.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Reflects and shapes meaning", commonErrors: ["Treating setting as background only."] },
        },
        {
          id: "cial-e-u4-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of a motif?",
          response: { type: "mcq", choices: [ { id: "a", text: "It recurs to reinforce theme" }, { id: "b", text: "It names the narrator" }, { id: "c", text: "It appears once" }, { id: "d", text: "It replaces the plot" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Motif", statement: "Recurring element developing theme." }], steps: [{ reasoning: "Repetition builds thematic emphasis.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Recurs to reinforce theme", commonErrors: ["Confusing motif with theme."] },
        },
        {
          id: "cial-e-u4-st-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What might light and dark symbolise?",
          response: { type: "mcq", choices: [ { id: "a", text: "Hope and despair" }, { id: "b", text: "Dialogue and silence" }, { id: "c", text: "Time and place only" }, { id: "d", text: "Names and dates" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Symbolism", statement: "Light/dark often figure hope/despair." }], steps: [{ reasoning: "Light-dark is a conventional symbolic pair.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Hope and despair", commonErrors: ["Assuming symbols have fixed meanings without context."] },
        },
        {
          id: "cial-e-u4-st-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How can weather function symbolically?",
          response: { type: "mcq", choices: [ { id: "a", text: "It mirrors emotional or narrative states" }, { id: "b", text: "It prevents analysis" }, { id: "c", text: "It only gives temperature" }, { id: "d", text: "It replaces dialogue" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Weather symbolism", statement: "Storm, sunshine and fog can mirror states." }], steps: [{ reasoning: "Weather is used to echo inner or plot states.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Mirrors emotional/narrative states", commonErrors: ["Describing weather literally only."] },
        },
        {
          id: "cial-e-u4-st-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should symbols be analysed in context rather than assumed?",
          response: { type: "mcq", choices: [ { id: "a", text: "Meaning depends on the text's usage" }, { id: "b", text: "Context removes symbolism" }, { id: "c", text: "Symbols are always identical" }, { id: "d", text: "It makes essays shorter" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Symbolic context", statement: "Symbols gain meaning from their textual environment." }], steps: [{ reasoning: "Context determines a symbol's specific effect.", marks: 1, markCode: "AO3" }], finalAnswer: "**(a)** Meaning depends on usage", commonErrors: ["Using a fixed symbol dictionary mechanically."] },
        },
        {
          id: "cial-e-u4-st-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many components are in the setting/theme formula: setting reflects theme, motifs reinforce and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Setting/theme formula", statement: "Setting reflects; motifs reinforce; symbols carry meaning." }], steps: [{ reasoning: "Three components are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Omitting symbolism."] },
        },
        {
          id: "cial-e-u4-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many categories of symbolic elements are named: objects, weather, animals and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Symbolic elements", statement: "Objects, weather, animals and colours." }], steps: [{ reasoning: "Four categories are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Forgetting colours."] },
        },
        {
          id: "cial-e-u4-st-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many examples of motifs are given: recurring images, colours and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Motif examples", statement: "Images, colours and objects." }], steps: [{ reasoning: "Three motif examples are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Confusing motifs with symbols only."] },
        },
        {
          id: "cial-e-u4-st-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many weather states are exemplified: storm, sunshine and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Weather symbolism", statement: "Storm, sunshine and fog." }], steps: [{ reasoning: "Three weather examples are given.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Treating weather as mere setting."] },
        },
        {
          id: "cial-e-u4-st-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how setting can reflect theme in prose.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Setting-theme link", statement: "Place details embody or contrast the central idea." }], steps: [{ reasoning: "A strong answer links physical details such as decay or anonymity to thematic meaning.", marks: 2, markCode: "AO2" }], finalAnswer: "Setting reflects theme when its details physically embody or contrast the central idea, such as decay suggesting decline.", commonErrors: ["Describing setting without thematic link."] },
        },
        {
          id: "cial-e-u4-st-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how tracking motifs can reveal what an author emphasises.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Motif tracking", statement: "Repeated images show thematic priorities." }], steps: [{ reasoning: "A strong answer explains that recurrence signals importance and develops meaning.", marks: 2, markCode: "AO2" }], finalAnswer: "Motifs recur to reinforce theme; tracking them shows which ideas the author returns to and develops.", commonErrors: ["Listing recurring details without explaining emphasis."] },
        },
        {
          id: "cial-e-u4-st-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analyse how weather can symbolise emotional states.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Weather symbolism", statement: "Weather mirrors inner or narrative states." }], steps: [{ reasoning: "A strong answer links storm, sunshine or fog to turmoil, hope or confusion with textual evidence.", marks: 2, markCode: "AO2" }], finalAnswer: "Weather symbolises emotion when its conditions mirror or contrast the character's inner or narrative state.", commonErrors: ["Assuming fixed meanings without textual support."] },
        },
      ],
    },
    {
      id: "cial-e-u4-prose-structure",
      title: "Narrative structure in prose",
      skill: "Analyse plot structure, pacing and narrative techniques.",
      lesson: {
        sections: [
          {
            heading: "Plot structure",
            body: "Exposition → rising action → climax → falling action → resolution. Flashbacks interrupt chronology; foreshadowing plants future events. Circular structure returns to opening; linear moves forward.",
          },
          {
            heading: "Pacing and tension",
            body: "Pacing controls narrative speed: slow for reflection/emotion, fast for action/crisis. Tension built through suspense, conflict, withheld information. Chapter breaks create pauses.",
          },
          {
            heading: "Narrative techniques",
            body: "Frame narrative: story within a story. In medias res: starting mid-action. Stream of consciousness: unfiltered thought. Non-linear: time jumps. Each technique shapes how readers experience events.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure",
            statement: "Plot+pacing+tension+technique=how story unfolds.",
          },
        ],
        workedExample: {
          problem: "What does 'in medias res' achieve?",
          solution:
            "Drops reader into action — creates immediate engagement and mystery about what came before.",
        },
      },
      questions: [
        {
          id: "cial-e-u4-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'in medias res'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending with a cliffhanger" },
              { id: "b", text: "A circular structure" },
              { id: "c", text: "Using flashbacks" },
              {
                id: "d",
                text: "Starting the narrative in the middle of action",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "In medias res",
                statement: "Beginning in the middle of action.",
              },
            ],
            steps: [
              {
                reasoning: "Latin for 'in the middle of things'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Middle of action",
            commonErrors: ["Confusing with flashback."],
          },
        },
        {
          id: "cial-e-u4-ps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'stream of consciousness'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stream of consciousness",
                statement:
                  "Unfiltered flow of thoughts mimicking mental processes.",
              },
            ],
            steps: [
              {
                reasoning: "Unfiltered thought flow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Mimics mental processes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Unfiltered flow of thoughts mimicking consciousness.",
            commonErrors: ["Confusing with dialogue."],
          },
        },
        {
          id: "cial-e-u4-ps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does pacing affect reader experience in prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pacing",
                statement: "Controls narrative speed and emotional intensity.",
              },
            ],
            steps: [
              {
                reasoning: "Slow pacing = reflection, tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fast pacing = action, urgency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Contrast creates dramatic effect.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Pacing controls speed and intensity; contrast creates effect.",
            commonErrors: ["Thinking pacing is just plot speed."],
          },
        },
        {
          id: "cial-e-u4-ps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Narrative structure.",
          parts: [
            { label: "a", prompt: "Define in medias res.", marks: 1 },
            { label: "b", prompt: "Stream of consciousness?", marks: 2 },
            {
              label: "c",
              prompt: "How does pacing affect experience?",
              marks: 3,
            },
            { label: "d", prompt: "Analyse structure in a novel.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "In medias res+stream+pacing+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Middle of action.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Unfiltered thought flow.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Mimics consciousness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Slow=reflection, fast=action.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Contrast creates effect.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Structure identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to meaning clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) mid-action (b) stream=thought flow (c) pacing effect (d) structure analysis",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Stream explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Pacing explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Effective analysis.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Plot summary instead of structure analysis."],
          },
        },
        {
          id: "cial-e-u4-ps-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a flashback?",
          response: { type: "mcq", choices: [ { id: "a", text: "A narrative interruption showing earlier events" }, { id: "b", text: "The climax" }, { id: "c", text: "A chapter title" }, { id: "d", text: "A forward prediction" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Flashback", statement: "Earlier events interrupt the main chronology." }], steps: [{ reasoning: "Flashback revisits past events.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Earlier events interrupt", commonErrors: ["Confusing flashback with foreshadowing."] },
        },
        {
          id: "cial-e-u4-ps-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'in medias res' achieve?",
          response: { type: "mcq", choices: [ { id: "a", text: "Slow exposition" }, { id: "b", text: "Immediate engagement and mystery" }, { id: "c", text: "A moral ending" }, { id: "d", text: "A neat chronological order" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "In medias res", statement: "Starting mid-action creates urgency and questions." }], steps: [{ reasoning: "Mid-action opening withholds prior context.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Immediate engagement and mystery", commonErrors: ["Thinking it is just an unusual opening."] },
        },
        {
          id: "cial-e-u4-ps-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What characterises stream of consciousness?",
          response: { type: "mcq", choices: [ { id: "a", text: "Unfiltered flow of thoughts" }, { id: "b", text: "Ordered plot summary" }, { id: "c", text: "Dialogue only" }, { id: "d", text: "A circular plot" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Stream of consciousness", statement: "Mimics continuous inner thought." }], steps: [{ reasoning: "The technique reproduces mental flow.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Unfiltered flow of thoughts", commonErrors: ["Confusing it with dialogue."] },
        },
        {
          id: "cial-e-u4-ps-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a frame narrative?",
          response: { type: "mcq", choices: [ { id: "a", text: "A list of chapters" }, { id: "b", text: "A story within a story" }, { id: "c", text: "A story with no ending" }, { id: "d", text: "A flashback" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Frame narrative", statement: "An outer story encloses an inner story." }], steps: [{ reasoning: "Framing nests narratives.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Story within a story", commonErrors: ["Confusing frame with flashback."] },
        },
        {
          id: "cial-e-u4-ps-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How does pacing affect tension?",
          response: { type: "mcq", choices: [ { id: "a", text: "Chapter breaks speed everything up" }, { id: "b", text: "Fast pacing always relaxes the reader" }, { id: "c", text: "Pacing has no effect" }, { id: "d", text: "Slow reflection and fast crisis control suspense" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Pacing and tension", statement: "Speed variation builds or releases suspense." }], steps: [{ reasoning: "Pacing modulates emotional pressure.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Speed variation controls suspense", commonErrors: ["Equating pacing only with plot speed."] },
        },
        {
          id: "cial-e-u4-ps-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are in the plot structure: exposition, rising action, climax, falling action and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "convention", name: "Plot structure", statement: "Exposition, rising, climax, falling and resolution." }], steps: [{ reasoning: "Five stages are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Omitting falling action."] },
        },
        {
          id: "cial-e-u4-ps-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many narrative techniques are named: frame narrative, in medias res, stream of consciousness and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Narrative techniques", statement: "Frame, in medias res, stream of consciousness and non-linear." }], steps: [{ reasoning: "Four techniques are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Forgetting non-linear narrative."] },
        },
        {
          id: "cial-e-u4-ps-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many broad pacing directions are used: slow for reflection and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Pacing directions", statement: "Slow for emotion; fast for action." }], steps: [{ reasoning: "Two pacing directions are given.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Thinking pacing only slows down."] },
        },
        {
          id: "cial-e-u4-ps-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many components form the structure formula: plot, pacing, tension and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "skill", name: "Structure formula", statement: "Plot + pacing + tension + technique." }], steps: [{ reasoning: "Four components are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting technique."] },
        },
        {
          id: "cial-e-u4-ps-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how plot structure organises a prose narrative.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Plot structure", statement: "Stages build from exposition to resolution." }], steps: [{ reasoning: "A strong answer links each stage to its function in developing conflict and resolution.", marks: 2, markCode: "AO2" }], finalAnswer: "Plot structure organises events through exposition, rising action, climax, falling action and resolution, shaping how tension develops.", commonErrors: ["Listing stages without explaining function."] },
        },
        {
          id: "cial-e-u4-ps-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how pacing and withheld information create tension.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Pacing and suspense", statement: "Controlled speed and gaps sustain anticipation." }], steps: [{ reasoning: "A strong answer shows slow reflection or fast crisis plus deliberate information control.", marks: 2, markCode: "AO2" }], finalAnswer: "Pacing controls speed while withheld information creates uncertainty; together they sustain tension and suspense.", commonErrors: ["Confusing tension with mere confusion."] },
        },
        {
          id: "cial-e-u4-ps-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analyse the effect of starting a story in medias res.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "In medias res", statement: "Mid-action opening creates engagement and questions." }], steps: [{ reasoning: "A strong answer explains immediate immersion, mystery and later revelation of context.", marks: 2, markCode: "AO3" }], finalAnswer: "In medias res immerses the reader immediately and creates mystery about prior events, which can be revealed later.", commonErrors: ["Describing the technique without its effect."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u4-prose-structure-notes",
      title: "Prose structure — revision notes",
      summary: "Setting, theme, motifs, narrative techniques and pacing.",
      sections: [
        {
          heading: "Setting and theme",
          body: "Setting reflects theme; motifs recur to develop it; symbols carry abstract meaning. Weather, seasons, objects all symbolic.",
        },
        {
          heading: "Structure",
          body: "Plot: exposition→rising→climax→falling→resolution. Techniques: flashback, foreshadowing, in medias res, stream of consciousness, frame narrative.",
        },
        {
          heading: "Exam checklist",
          body: "Is structure identified? Are motifs/symbols tracked? Is pacing analysed? Is technique linked to effect?",
        },
      ],
    },
  ],
};
