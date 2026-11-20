import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "cie-ol-fl-lesson-3-1",
  code: "3-1",
  title: "Drama: structure and performance",
  goal: "I CAN analyse dramatic structure and staging.",
  standards: ["1119 Reading: drama"],
  vocabulary: [
    { term: "Play", definition: "Dramatic work performed by actors." },
    { term: "Act", definition: "Major division of a play." },
    { term: "Scene", definition: "Subdivision within an act." },
    { term: "Stage directions", definition: "Instructions for actors/director." },
    { term: "Aside", definition: "Character speaks to audience, others don't hear." },
    { term: "Soliloquy", definition: "Character speaks thoughts aloud alone." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-dramatic-structure",
      title: "Dramatic structure",
      skill: "Analyse play structure, acts and dramatic devices.",
      lesson: {
        sections: [
          {
            heading: "Play structure",
            body: "Acts and scenes organise drama like chapters. Exposition sets up conflict; rising action builds tension; climax reaches peak; resolution concludes.",
          },
          {
            heading: "Dramatic devices",
            body: "Aside: reveals character thoughts to audience. Soliloquy: character alone voices inner conflict. Entrances/exits create tension. Stage directions guide performance.",
          },
          {
            heading: "Conflict",
            body: "Central conflict drives drama — character vs character, self, society, fate. Conflict creates dramatic tension.",
          },
        ],
        keyFormulas: [
          { name: "Dramatic structure", statement: "Acts/scenes+devices+conflict=create dramatic tension." },
        ],
        workedExample: {
          problem: "Character delivers long soliloquy alone on stage.",
          solution: "Soliloquy reveals inner thoughts/conflict — audience gains insight characters lack. Creates intimacy and tension.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'soliloquy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character speaks thoughts aloud alone" },
              { id: "b", text: "Dialogue between characters" },
              { id: "c", text: "Stage direction" },
              { id: "d", text: "Scene change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Soliloquy", statement: "Character speaks inner thoughts aloud while alone." },
            ],
            steps: [
              { reasoning: "Soliloquy = alone, thoughts aloud.", working: "alone", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Character speaks thoughts aloud alone",
            commonErrors: ["Choosing (b) — that's dialogue."],
          },
        },
        {
          id: "cie-ol-fl-ds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an 'aside' differ from dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Aside vs dialogue", statement: "Aside=audience hears, characters don't; dialogue=characters hear." },
            ],
            steps: [
              { reasoning: "Aside reveals thoughts to audience only.", working: "audience", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Aside=audience hears, characters don't; dialogue=all hear.",
            commonErrors: ["Confusing aside with dialogue."],
          },
        },
        {
          id: "cie-ol-fl-ds-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does conflict create dramatic tension?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conflict-tension", statement: "Unresolved conflict creates suspense — will they overcome?" },
            ],
            steps: [
              { reasoning: "Unresolved conflict creates suspense.", working: "suspense", marks: 1, markCode: "AO2" },
              { reasoning: "Audience anticipates outcome.", working: "anticipates", marks: 1, markCode: "AO2" },
              { reasoning: "Rising action intensifies tension.", working: "rising", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Unresolved conflict+suspense+anticipation+escalation=tension.",
            commonErrors: ["Conflict without stakes — no tension."],
          },
        },
        {
          id: "cie-ol-fl-ds-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic structure.",
          parts: [
            { label: "a", prompt: "Define soliloquy.", marks: 1 },
            { label: "b", prompt: "Aside vs dialogue?", marks: 2 },
            { label: "c", prompt: "How conflict creates tension?", marks: 3 },
            { label: "d", prompt: "Name dramatic devices.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama", statement: "Soliloquy, aside, conflict, devices." },
            ],
            steps: [
              { part: "a", reasoning: "Alone, thoughts aloud.", working: "soliloquy", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Aside=audience only; dialogue=all.", working: "aside", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Suspense, anticipation, escalation.", working: "tension", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Aside, soliloquy, stage directions, entrances/exits.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) alone thoughts (b) audience vs all (c) suspense+escalation (d) aside/soliloquy/directions",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Tension clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Devices listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing dramatic devices."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-staging",
      title: "Staging and performance",
      skill: "Analyse stage directions and performance elements.",
      lesson: {
        sections: [
          {
            heading: "Stage directions",
            body: "Instructions for actors/director — movement, tone, lighting, sound. Reveal character state and mood.",
          },
          {
            heading: "Lighting and sound",
            body: "Lighting creates atmosphere — bright=open, dark=mysterious. Sound (music, effects) guides emotional response.",
          },
          {
            heading: "Character movement",
            body: "Where characters stand/sit/move on stage reveals relationships and power dynamics. Upstage=power, downstage=intimacy.",
          },
        ],
        keyFormulas: [
          { name: "Staging", statement: "Directions+lighting+sound+movement=create performance meaning." },
        ],
        workedExample: {
          problem: "Character enters stage right, hesitant.",
          solution: "Stage direction reveals nervousness/uncertainty — movement communicates before dialogue.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are 'stage directions'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Instructions for actors" },
              { id: "b", text: "Character dialogue" },
              { id: "c", text: "Plot summary" },
              { id: "d", text: "Act titles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stage directions", statement: "Instructions for actors/director on performance." },
            ],
            steps: [
              { reasoning: "Directions = performance instructions.", working: "instructions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Instructions for actors",
            commonErrors: ["Choosing (b) — that's dialogue."],
          },
        },
        {
          id: "cie-ol-fl-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does lighting affect a play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Lighting", statement: "Creates atmosphere — bright=open, dark=mysterious." },
            ],
            steps: [
              { reasoning: "Lighting sets mood/atmosphere.", working: "atmosphere", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creates atmosphere — bright=open, dark=mysterious.",
            commonErrors: ["Ignoring lighting as decoration."],
          },
        },
        {
          id: "cie-ol-fl-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does character movement reveal relationships?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Movement", statement: "Position/distance on stage shows power, intimacy, tension." },
            ],
            steps: [
              { reasoning: "Physical distance shows emotional distance.", working: "distance", marks: 1, markCode: "AO2" },
              { reasoning: "Upstage=power, downstage=intimacy.", working: "position", marks: 1, markCode: "AO2" },
              { reasoning: "Movement reveals relationships.", working: "relationships", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Distance+position+movement=reveal relationships/power.",
            commonErrors: ["Only analysing dialogue."],
          },
        },
        {
          id: "cie-ol-fl-st-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Staging and performance.",
          parts: [
            { label: "a", prompt: "Define stage directions.", marks: 1 },
            { label: "b", prompt: "Lighting effects?", marks: 2 },
            { label: "c", prompt: "Movement reveals?", marks: 3 },
            { label: "d", prompt: "Sound effects?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Staging", statement: "Directions, lighting, movement, sound." },
            ],
            steps: [
              { part: "a", reasoning: "Performance instructions.", working: "directions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Creates atmosphere — bright=open, dark=mysterious.", working: "lighting", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Distance, position, movement reveal relationships/power.", working: "movement", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Music/effects guide emotional response — tension, joy, fear.", working: "sound", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) instructions (b) atmosphere (c) distance+position+movement (d) emotional response",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring staging elements."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-drama-analysis",
      title: "Analysing dramatic texts",
      skill: "Analyse plays as literature and performance.",
      lesson: {
        sections: [
          {
            heading: "Dual nature of drama",
            body: "Plays exist as text AND performance. Analyse both: written elements (dialogue, structure) and performance elements (staging, delivery).",
          },
          {
            heading: "Dialogue analysis",
            body: "Character speech reveals personality, relationships, themes. Subtext — what isn't said — often more important.",
          },
          {
            heading: "Theme in drama",
            body: "Themes emerge through conflict, character choices, resolution. Drama often explores social issues directly.",
          },
        ],
        keyFormulas: [
          { name: "Drama analysis", statement: "Text+performance+dialogue+theme=complete dramatic analysis." },
        ],
        workedExample: {
          problem: "Characters argue but underlying issue is betrayal.",
          solution: "Subtext — surface argument masks deeper conflict. Analyse both dialogue and what's implied.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-da-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'subtext' in drama?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What isn't said but implied" },
              { id: "b", text: "Character's name" },
              { id: "c", text: "Stage direction" },
              { id: "d", text: "Act title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "Implied meaning beneath surface dialogue." },
            ],
            steps: [
              { reasoning: "Subtext = implied.", working: "implied", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** What isn't said but implied",
            commonErrors: ["Choosing (b) — that's just text."],
          },
        },
        {
          id: "cie-ol-fl-da-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does dialogue reveal character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue", statement: "Word choice, tone, topics reveal personality and relationships." },
            ],
            steps: [
              { reasoning: "Speech patterns show personality.", working: "patterns", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Word choice, tone, topics reveal personality and relationships.",
            commonErrors: ["Only surface meaning — miss subtext."],
          },
        },
        {
          id: "cie-ol-fl-da-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does drama explore themes differently from prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama vs prose", statement: "Immediate performance, direct conflict, audience interaction." },
            ],
            steps: [
              { reasoning: "Performance makes themes immediate/visceral.", working: "immediate", marks: 1, markCode: "AO2" },
              { reasoning: "Conflict enacted directly — audience witnesses.", working: "enacted", marks: 1, markCode: "AO2" },
              { reasoning: "Audience presence creates shared experience.", working: "shared", marks: 1, markCode: "AO2" },
              { reasoning: "Differences clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Immediate performance+direct conflict+shared audience experience.",
            commonErrors: ["Treating drama like prose — miss performance dimension."],
          },
        },
        {
          id: "cie-ol-fl-da-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Drama analysis.",
          parts: [
            { label: "a", prompt: "Define subtext.", marks: 1 },
            { label: "b", prompt: "Dialogue reveals?", marks: 2 },
            { label: "c", prompt: "Drama vs prose?", marks: 3 },
            { label: "d", prompt: "Theme in drama?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama analysis", statement: "Subtext, dialogue, drama vs prose, theme." },
            ],
            steps: [
              { part: "a", reasoning: "Implied meaning beneath dialogue.", working: "subtext", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Word choice, tone, topics reveal character.", working: "dialogue", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Immediate, direct conflict, shared experience.", working: "drama", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple differences.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Themes via conflict, choices, resolution — often social issues.", working: "theme", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple sources.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) implied meaning (b) personality+relationships (c) immediate+direct+shared (d) conflict+choices+resolution",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Differences clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Theme clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ignoring subtext in dialogue."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-drama-notes-1",
      title: "Drama — revision notes",
      summary: "Dramatic structure, staging, analysis.",
      sections: [
        {
          heading: "Drama",
          body: "Structure: acts/scenes, conflict, climax. Devices: aside, soliloquy, stage directions. Staging: lighting, sound, movement. Analysis: subtext, dialogue, theme.",
        },
      ],
    },
  ],
};
