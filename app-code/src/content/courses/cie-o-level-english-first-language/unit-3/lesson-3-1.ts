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
              { id: "a", text: "Scene change" },
              { id: "b", text: "Dialogue between characters" },
              { id: "c", text: "Character speaks thoughts aloud alone" },
              { id: "d", text: "Stage direction" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cie-ol-fl-ds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'exposition' in a play?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sets up characters and conflict" },
              { id: "b", text: "The denouement" },
              { id: "c", text: "The climax" },
              { id: "d", text: "The resolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exposition", statement: "Opening section setting up characters and conflict." },
            ],
            steps: [
              { reasoning: "Exposition = setup.", working: "setup", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sets up characters and conflict",
            commonErrors: ["Choosing (c) — that's resolution."],
          },
        },
        {
          id: "cie-ol-fl-ds-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does rising action build tension in a play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rising action", statement: "Escalating conflict raises stakes toward climax." },
            ],
            steps: [
              { reasoning: "Conflict escalates, stakes rise.", working: "escalates", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Escalating conflict raises stakes toward climax.",
            commonErrors: ["Rising action without escalation."],
          },
        },
        {
          id: "cie-ol-fl-ds-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character's late 'entrance' on stage can create...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anticipation and tension" },
              { id: "b", text: "An aside" },
              { id: "c", text: "A soliloquy" },
              { id: "d", text: "A scene change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Entrances", statement: "Entrances/exits create tension and anticipation." },
            ],
            steps: [
              { reasoning: "Entrance = anticipation.", working: "anticipation", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Anticipation and tension",
            commonErrors: ["Choosing (c) — that's a speech device."],
          },
        },
        {
          id: "cie-ol-fl-ds-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between an 'act' and a 'scene'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Act vs scene", statement: "Act=major division; scene=subdivision within an act." },
            ],
            steps: [
              { reasoning: "Act is larger unit.", working: "act", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Act=major division of play; scene=subdivision within an act.",
            commonErrors: ["Using act and scene interchangeably."],
          },
        },
        {
          id: "cie-ol-fl-ds-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the climax function within dramatic structure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Climax", statement: "Peak tension, turning point, conflict begins resolving." },
            ],
            steps: [
              { reasoning: "Peak of dramatic tension.", working: "peak", marks: 1, markCode: "AO2" },
              { reasoning: "Turning point for plot.", working: "turning", marks: 1, markCode: "AO2" },
              { reasoning: "Conflict resolution begins after.", working: "resolution", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Peak tension+turning point+resolution begins.",
            commonErrors: ["Climax as just 'the exciting bit' — it's the turning point."],
          },
        },
        {
          id: "cie-ol-fl-ds-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Dramatic irony' occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actors forget lines" },
              { id: "b", text: "Characters speak alone" },
              { id: "c", text: "A scene ends" },
              { id: "d", text: "Audience knows what characters don't" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dramatic irony", statement: "Audience awareness contrasts with character ignorance." },
            ],
            steps: [
              { reasoning: "Audience knows more.", working: "audience", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Audience knows what characters don't",
            commonErrors: ["Confusing with verbal irony."],
          },
        },
        {
          id: "cie-ol-fl-ds-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do stage directions help a reader understand performance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Stage directions", statement: "Reveal movement, tone, mood and intent." },
            ],
            steps: [
              { reasoning: "Directions show how it would be performed.", working: "performed", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "They reveal movement, tone, mood and performance intent.",
            commonErrors: ["Skipping stage directions entirely."],
          },
        },
        {
          id: "cie-ol-fl-ds-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Denouement' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening scene" },
              { id: "b", text: "The main conflict" },
              { id: "c", text: "Comic relief" },
              { id: "d", text: "Resolution after the climax" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denouement", statement: "Resolution/unravelling after climax." },
            ],
            steps: [
              { reasoning: "Denouement = resolution.", working: "resolution", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Resolution after the climax",
            commonErrors: ["Choosing (b) — that's exposition."],
          },
        },
        {
          id: "cie-ol-fl-ds-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a play's central conflict structure the entire drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conflict structure", statement: "Conflict drives plot, tension and character choices." },
            ],
            steps: [
              { reasoning: "Conflict drives the plot.", working: "plot", marks: 1, markCode: "AO2" },
              { reasoning: "Creates ongoing dramatic tension.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Shapes character choices and development.", working: "choices", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Drives plot+creates tension+shapes choices.",
            commonErrors: ["Treating conflict as background rather than engine."],
          },
        },
        {
          id: "cie-ol-fl-ds-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character positioned 'upstage' often suggests...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Power or dominance" },
              { id: "b", text: "Silence" },
              { id: "c", text: "Weakness" },
              { id: "d", text: "Exit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Upstage", statement: "Upstage position suggests power/dominance." },
            ],
            steps: [
              { reasoning: "Upstage = power.", working: "power", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Power or dominance",
            commonErrors: ["Reversing upstage and downstage meanings."],
          },
        },
        {
          id: "cie-ol-fl-ds-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might silence be used as a dramatic device?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Silence", statement: "Creates tension, emphasises emotion, highlights subtext." },
            ],
            steps: [
              { reasoning: "Silence heightens tension/emotion.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creates tension, emphasises emotion, forces attention to subtext.",
            commonErrors: ["Silence as empty space rather than device."],
          },
        },
        {
          id: "cie-ol-fl-ds-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic structure — extended.",
          parts: [
            { label: "a", prompt: "Define dramatic irony.", marks: 1 },
            { label: "b", prompt: "Act vs scene?", marks: 2 },
            { label: "c", prompt: "How does climax function?", marks: 3 },
            { label: "d", prompt: "Name dramatic devices.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama structure", statement: "Irony, act/scene, climax, devices." },
            ],
            steps: [
              { part: "a", reasoning: "Audience knows what characters don't.", working: "irony", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Act=major division; scene=subdivision.", working: "act/scene", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Peak tension, turning point, resolution begins.", working: "climax", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple functions.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Aside, soliloquy, stage directions, entrances/exits, silence.", working: "devices", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) audience knows more (b) major vs subdivision (c) peak+turning point (d) aside/soliloquy/silence",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Functions clear.", part: "c" },
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
              { id: "b", text: "Act titles" },
              { id: "c", text: "Character dialogue" },
              { id: "d", text: "Plot summary" },
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
        {
          id: "cie-ol-fl-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character standing 'downstage' often suggests...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Silence" },
              { id: "b", text: "Exile" },
              { id: "c", text: "Dominance" },
              { id: "d", text: "Intimacy or approach" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Downstage", statement: "Downstage position suggests intimacy/approach to audience." },
            ],
            steps: [
              { reasoning: "Downstage = intimacy.", working: "intimacy", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Intimacy or approach",
            commonErrors: ["Confusing with upstage."],
          },
        },
        {
          id: "cie-ol-fl-st-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does sound design affect a play's audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sound design", statement: "Music and effects guide emotional response." },
            ],
            steps: [
              { reasoning: "Sound shapes mood/emotion.", working: "mood", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Guides emotional response — tension, joy, fear.",
            commonErrors: ["Treating sound as background only."],
          },
        },
        {
          id: "cie-ol-fl-st-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stage directions about lighting mainly reveal...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plot summary" },
              { id: "b", text: "Mood and atmosphere" },
              { id: "c", text: "Character names" },
              { id: "d", text: "Dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Lighting directions", statement: "Lighting creates atmosphere — bright=open, dark=mysterious." },
            ],
            steps: [
              { reasoning: "Lighting = atmosphere.", working: "atmosphere", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Mood and atmosphere",
            commonErrors: ["Ignoring lighting as decoration."],
          },
        },
        {
          id: "cie-ol-fl-st-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can costume and makeup contribute to a character's meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Costume", statement: "Visual presentation signals status, era, personality." },
            ],
            steps: [
              { reasoning: "Costume signals traits/status.", working: "signals", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Signals status, era, personality before dialogue begins.",
            commonErrors: ["Costume as mere decoration."],
          },
        },
        {
          id: "cie-ol-fl-st-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does pacing affect dramatic tension in performance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pacing", statement: "Fast/slow delivery controls audience tension." },
            ],
            steps: [
              { reasoning: "Fast pacing raises urgency.", working: "fast", marks: 1, markCode: "AO2" },
              { reasoning: "Slow pacing builds suspense.", working: "slow", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast in pacing intensifies effect.", working: "contrast", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fast=urgency; slow=suspense; contrast=intensifies.",
            commonErrors: ["Pacing as fixed rather than controlled."],
          },
        },
        {
          id: "cie-ol-fl-st-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bright, open lighting on stage typically suggests...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mystery" },
              { id: "b", text: "Danger" },
              { id: "c", text: "Openness or optimism" },
              { id: "d", text: "Exile" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Lighting meaning", statement: "Bright=open; dark=mysterious." },
            ],
            steps: [
              { reasoning: "Bright = open.", working: "open", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Openness or optimism",
            commonErrors: ["Reversing bright/dark effects."],
          },
        },
        {
          id: "cie-ol-fl-st-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an actor's delivery (tone, volume) change meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Delivery", statement: "Tone/volume reveal emotion and attitude beyond words." },
            ],
            steps: [
              { reasoning: "Delivery adds emotional layer.", working: "emotion", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Adds emotional/attitudinal layer beyond literal words.",
            commonErrors: ["Only analysing written dialogue."],
          },
        },
        {
          id: "cie-ol-fl-st-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A spotlight isolating one character typically achieves...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A scene change" },
              { id: "b", text: "Exit" },
              { id: "c", text: "Focus and isolation" },
              { id: "d", text: "Comic relief" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Spotlight", statement: "Focuses attention, isolates character." },
            ],
            steps: [
              { reasoning: "Spotlight = focus.", working: "focus", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Focus and isolation",
            commonErrors: ["Treating lighting as decoration only."],
          },
        },
        {
          id: "cie-ol-fl-st-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can stage movement show a power struggle between characters?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Movement and power", statement: "Position, distance and movement encode dominance." },
            ],
            steps: [
              { reasoning: "Physical dominance — looming, blocking.", working: "looming", marks: 1, markCode: "AO2" },
              { reasoning: "Who controls space shows power.", working: "space", marks: 1, markCode: "AO2" },
              { reasoning: "Retreat/advance shows shifting power.", working: "shifting", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Dominance+space control+shifting positions=power struggle.",
            commonErrors: ["Analysing dialogue only — miss staging."],
          },
        },
        {
          id: "cie-ol-fl-st-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Stage left' and 'stage right' are defined from...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The door" },
              { id: "b", text: "The actor's perspective" },
              { id: "c", text: "The audience's perspective" },
              { id: "d", text: "The director's seat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Stage directions", statement: "Left/right defined from actor's perspective." },
            ],
            steps: [
              { reasoning: "Actor's perspective.", working: "actor", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The actor's perspective",
            commonErrors: ["Using audience perspective — reversed."],
          },
        },
        {
          id: "cie-ol-fl-st-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are entrances and exits important dramatic devices?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Entrances/exits", statement: "Create tension, signal change, reveal character." },
            ],
            steps: [
              { reasoning: "Signal change/tension.", working: "change", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Create tension, signal change, reveal character state.",
            commonErrors: ["Entrances/exits as mere logistics."],
          },
        },
        {
          id: "cie-ol-fl-st-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Staging and performance — extended.",
          parts: [
            { label: "a", prompt: "Define stage directions.", marks: 1 },
            { label: "b", prompt: "Lighting effects?", marks: 2 },
            { label: "c", prompt: "Movement reveals?", marks: 3 },
            { label: "d", prompt: "Sound and pacing?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Staging", statement: "Directions, lighting, movement, sound/pacing." },
            ],
            steps: [
              { part: "a", reasoning: "Performance instructions.", working: "directions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Creates atmosphere — bright=open, dark=mysterious.", working: "lighting", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Distance, position, movement reveal relationships/power.", working: "movement", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Sound guides emotion; pacing controls tension.", working: "sound", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) instructions (b) atmosphere (c) distance+position+movement (d) emotion+pacing",
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
              { id: "a", text: "Stage direction" },
              { id: "b", text: "Act title" },
              { id: "c", text: "What isn't said but implied" },
              { id: "d", text: "Character's name" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cie-ol-fl-da-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Drama's 'dual nature' means it exists as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only text" },
              { id: "b", text: "Only performance" },
              { id: "c", text: "Text and performance" },
              { id: "d", text: "Only dialogue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dual nature", statement: "Plays exist as written text AND performance." },
            ],
            steps: [
              { reasoning: "Text + performance.", working: "both", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Text and performance",
            commonErrors: ["Analysing only the written text."],
          },
        },
        {
          id: "cie-ol-fl-da-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does performance affect interpretation of a play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Performance", statement: "Staging, delivery, lighting shape meaning." },
            ],
            steps: [
              { reasoning: "Performance elements add meaning.", working: "meaning", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Staging, delivery, lighting shape audience interpretation.",
            commonErrors: ["Ignoring performance dimension."],
          },
        },
        {
          id: "cie-ol-fl-da-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Audience response to live drama is typically...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delayed and private" },
              { id: "b", text: "Immediate and shared" },
              { id: "c", text: "Optional" },
              { id: "d", text: "Written" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Audience", statement: "Live audience shares immediate response." },
            ],
            steps: [
              { reasoning: "Immediate + shared.", working: "shared", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Immediate and shared",
            commonErrors: ["Treating audience like novel readers."],
          },
        },
        {
          id: "cie-ol-fl-da-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does character dialogue reveal relationships?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue relationships", statement: "Speech patterns, interruptions, subtext show ties." },
            ],
            steps: [
              { reasoning: "How characters speak to each other.", working: "speak", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Speech patterns, interruptions, subtext reveal relationships.",
            commonErrors: ["Analysing characters in isolation."],
          },
        },
        {
          id: "cie-ol-fl-da-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does drama explore social issues differently from prose fiction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama vs prose", statement: "Immediate performance, direct conflict, shared audience." },
            ],
            steps: [
              { reasoning: "Issues enacted live — visceral impact.", working: "enacted", marks: 1, markCode: "AO2" },
              { reasoning: "Conflict shown directly, not narrated.", working: "direct", marks: 1, markCode: "AO2" },
              { reasoning: "Audience witnesses together — shared experience.", working: "shared", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Enacted+direct+shared audience experience.",
            commonErrors: ["Treating drama like prose — miss performance."],
          },
        },
        {
          id: "cie-ol-fl-da-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Theme in drama mainly emerges through...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character names" },
              { id: "b", text: "Act titles" },
              { id: "c", text: "Stage directions only" },
              { id: "d", text: "Conflict, choices and resolution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Theme sources", statement: "Conflict, character choices, resolution." },
            ],
            steps: [
              { reasoning: "Conflict+choices+resolution.", working: "sources", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Conflict, choices and resolution",
            commonErrors: ["Theme as stated message."],
          },
        },
        {
          id: "cie-ol-fl-da-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do stage directions complement dialogue in analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Directions + dialogue", statement: "Directions reveal intent/tone words alone can't." },
            ],
            steps: [
              { reasoning: "Directions add performance layer.", working: "layer", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reveal intent, tone, emotion beyond spoken words.",
            commonErrors: ["Analysing dialogue without directions."],
          },
        },
        {
          id: "cie-ol-fl-da-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Analysing a play 'as text AND performance' requires considering...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only characters" },
              { id: "b", text: "Written and staged elements" },
              { id: "c", text: "Only plot" },
              { id: "d", text: "Only dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Text + performance", statement: "Both written elements and staging." },
            ],
            steps: [
              { reasoning: "Written + staged.", working: "both", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Written and staged elements",
            commonErrors: ["Ignoring performance half."],
          },
        },
        {
          id: "cie-ol-fl-da-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the audience's presence shape dramatic meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience presence", statement: "Shared witnessing creates collective meaning." },
            ],
            steps: [
              { reasoning: "Audience witnesses events together.", working: "witness", marks: 1, markCode: "AO2" },
              { reasoning: "Collective gasps/laughter amplify emotion.", working: "amplify", marks: 1, markCode: "AO2" },
              { reasoning: "Shared experience intensifies theme.", working: "intensifies", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Witness+amplify+shared experience=intensified meaning.",
            commonErrors: ["Audience as passive rather than active."],
          },
        },
        {
          id: "cie-ol-fl-da-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a performance element of drama?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lighting and sound" },
              { id: "b", text: "Character names" },
              { id: "c", text: "Page numbers" },
              { id: "d", text: "Act titles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Performance elements", statement: "Lighting, sound, movement, delivery." },
            ],
            steps: [
              { reasoning: "Lighting/sound = performance.", working: "performance", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Lighting and sound",
            commonErrors: ["Confusing text elements with performance."],
          },
        },
        {
          id: "cie-ol-fl-da-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is subtext often more important than surface dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtext", statement: "Implied meaning reveals true intent/relationship." },
            ],
            steps: [
              { reasoning: "Subtext = true intent.", working: "intent", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reveals true intent, emotion and relationship beneath words.",
            commonErrors: ["Only surface meaning — miss subtext."],
          },
        },
        {
          id: "cie-ol-fl-da-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Drama analysis — extended.",
          parts: [
            { label: "a", prompt: "Define subtext.", marks: 1 },
            { label: "b", prompt: "Dual nature of drama?", marks: 2 },
            { label: "c", prompt: "How audience shapes meaning?", marks: 3 },
            { label: "d", prompt: "Performance elements?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama analysis", statement: "Subtext, dual nature, audience, performance." },
            ],
            steps: [
              { part: "a", reasoning: "Implied meaning beneath words.", working: "subtext", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Exists as text AND performance.", working: "dual", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Witness together, amplify emotion, shared meaning.", working: "audience", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple effects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Lighting, sound, movement, delivery.", working: "elements", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) implied meaning (b) text+performance (c) witness+amplify+shared (d) lighting/sound/movement",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effects clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Ignoring performance dimension."],
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
