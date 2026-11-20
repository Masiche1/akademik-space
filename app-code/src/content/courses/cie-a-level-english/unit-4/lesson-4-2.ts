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
              { id: "a", text: "A recurring element that develops theme" },
              { id: "b", text: "The main character" },
              { id: "c", text: "The plot" },
              { id: "d", text: "The setting" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Recurring element developing theme",
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
              {
                id: "a",
                text: "Starting the narrative in the middle of action",
              },
              { id: "b", text: "Ending with a cliffhanger" },
              { id: "c", text: "Using flashbacks" },
              { id: "d", text: "A circular structure" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Middle of action",
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
