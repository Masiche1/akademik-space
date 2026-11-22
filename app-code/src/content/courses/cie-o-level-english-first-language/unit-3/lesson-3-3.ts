import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "cie-ol-fl-lesson-3-3",
  code: "3-3",
  title: "Drama extracts and essay writing",
  goal: "I CAN write analytical essays on dramatic extracts.",
  standards: ["1119 Reading: drama analysis"],
  vocabulary: [
    { term: "Extract", definition: "Passage from play for analysis." },
    { term: "Dramatic tension", definition: "Suspense/audience anticipation." },
    { term: "Climactic scene", definition: "Highest tension moment." },
    { term: "Character motivation", definition: "Why character acts as they do." },
    { term: "Stagecraft", definition: "Art of staging performance." },
    { term: "Denouement", definition: "Resolution after climax." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-extract-analysis-d",
      title: "Analysing dramatic extracts",
      skill: "Analyse plays closely — dialogue, staging, tension.",
      lesson: {
        sections: [
          {
            heading: "Reading drama extracts",
            body: "Read stage directions carefully — they reveal performance intent. Note where extract sits in play — build-up, climax, resolution.",
          },
          {
            heading: "Analysing dialogue",
            body: "Look for subtext, power dynamics, character state. What characters say vs what they mean.",
          },
          {
            heading: "Analysing staging",
            body: "Consider: lighting, sound, movement, positioning — how would this be performed? What effect on audience?",
          },
        ],
        keyFormulas: [
          { name: "Extract analysis", statement: "Position+dialogue+staging+tension=dramatic analysis." },
        ],
        workedExample: {
          problem: "Extract ends with character's entrance.",
          solution: "Entrance creates anticipation — analyse how staging/dialogue builds tension before reveal.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why read stage directions carefully?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They repeat dialogue" },
              { id: "b", text: "They're optional" },
              { id: "c", text: "They're for actors only" },
              { id: "d", text: "They reveal performance intent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Stage directions", statement: "Reveal performance intent — movement, tone, mood." },
            ],
            steps: [
              { reasoning: "Directions = performance intent.", working: "intent", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** They reveal performance intent",
            commonErrors: ["Choosing (b) — they're essential."],
          },
        },
        {
          id: "cie-ol-fl-ed-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does extract position matter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Position", statement: "Extract's place in play affects meaning — build-up vs climax." },
            ],
            steps: [
              { reasoning: "Position affects interpretation.", working: "position", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Position affects meaning — build-up vs climax vs resolution.",
            commonErrors: ["Analysing extract in isolation."],
          },
        },
        {
          id: "cie-ol-fl-ed-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to analyse dramatic tension in an extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dramatic tension", statement: "Conflict, stakes, pacing, audience anticipation." },
            ],
            steps: [
              { reasoning: "Identify conflict and stakes.", working: "conflict", marks: 1, markCode: "AO2" },
              { reasoning: "Consider pacing — fast/slow sections.", working: "pacing", marks: 1, markCode: "AO2" },
              { reasoning: "Audience anticipation — what will happen?", working: "anticipation", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Conflict+stakes+pacing+anticipation=tension.",
            commonErrors: ["Missing audience perspective."],
          },
        },
        {
          id: "cie-ol-fl-ed-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic extract analysis.",
          parts: [
            { label: "a", prompt: "Why stage directions matter?", marks: 1 },
            { label: "b", prompt: "Why position matters?", marks: 2 },
            { label: "c", prompt: "How to analyse tension?", marks: 3 },
            { label: "d", prompt: "What to consider in staging?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extract", statement: "Directions, position, tension, staging." },
            ],
            steps: [
              { part: "a", reasoning: "Reveal performance intent.", working: "directions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Affects meaning — build-up vs climax.", working: "position", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Conflict, stakes, pacing, anticipation.", working: "tension", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Lighting, sound, movement, positioning.", working: "staging", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) performance intent (b) build-up vs climax (c) conflict+stakes+pacing (d) lighting+sound+movement",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Ignoring staging elements."],
          },
        },
        {
          id: "cie-ol-fl-ed-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where an extract sits within a play affects...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only page numbers" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Its meaning and interpretation" },
              { id: "d", text: "Actor names" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Extract position", statement: "Position shapes meaning — build-up vs climax." },
            ],
            steps: [
              { reasoning: "Position affects meaning.", working: "meaning", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Its meaning and interpretation",
            commonErrors: ["Analysing extract in isolation."],
          },
        },
        {
          id: "cie-ol-fl-ed-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why note what happens just before a dramatic extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Context", statement: "Prior events build tension the extract relies on." },
            ],
            steps: [
              { reasoning: "Prior events build tension.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Prior events build the tension the extract depends on.",
            commonErrors: ["Ignoring context before extract."],
          },
        },
        {
          id: "cie-ol-fl-ed-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'climactic scene' of a play is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening" },
              { id: "b", text: "A comic scene" },
              { id: "c", text: "The moment of peak tension" },
              { id: "d", text: "The ending" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Climactic scene", statement: "Highest tension/turning point." },
            ],
            steps: [
              { reasoning: "Climax = peak.", working: "peak", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The moment of peak tension",
            commonErrors: ["Confusing with denouement."],
          },
        },
        {
          id: "cie-ol-fl-ed-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does pacing (fast/slow action) affect extract analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pacing", statement: "Controls urgency and suspense." },
            ],
            steps: [
              { reasoning: "Pacing controls tension.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fast=pacing urgency; slow=suspense — affects tension.",
            commonErrors: ["Ignoring pacing shifts."],
          },
        },
        {
          id: "cie-ol-fl-ed-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how a dramatic extract might build toward its climax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Building tension", statement: "Conflict, pacing, entrances, dialogue escalate." },
            ],
            steps: [
              { reasoning: "Conflict/stakes escalate.", working: "conflict", marks: 1, markCode: "AO2" },
              { reasoning: "Pacing quickens toward peak.", working: "pacing", marks: 1, markCode: "AO2" },
              { reasoning: "Stagecraft (entrances, lighting) heightens.", working: "stagecraft", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Conflict+pacing+stagecraft=build toward climax.",
            commonErrors: ["Describing without analysing build-up."],
          },
        },
        {
          id: "cie-ol-fl-ed-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Denouement' refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The conflict" },
              { id: "b", text: "The opening" },
              { id: "c", text: "An entrance" },
              { id: "d", text: "The resolution after the climax" },
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
            finalAnswer: "**(a)** The resolution after the climax",
            commonErrors: ["Confusing with climax."],
          },
        },
        {
          id: "cie-ol-fl-ed-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you note about character entrances in an extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Entrances", statement: "Create anticipation, signal change, shift power." },
            ],
            steps: [
              { reasoning: "Entrances create anticipation.", working: "anticipation", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "They create anticipation and may shift power/tension.",
            commonErrors: ["Entrances as mere logistics."],
          },
        },
        {
          id: "cie-ol-fl-ed-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stage directions within an extract reveal...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing important" },
              { id: "b", text: "Only actor names" },
              { id: "c", text: "Performance intent and mood" },
              { id: "d", text: "Plot summary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Stage directions", statement: "Reveal intent, tone, mood." },
            ],
            steps: [
              { reasoning: "Directions = intent.", working: "intent", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Performance intent and mood",
            commonErrors: ["Skipping stage directions."],
          },
        },
        {
          id: "cie-ol-fl-ed-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does audience anticipation work within a dramatic extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Anticipation", statement: "Withheld information and pacing create suspense." },
            ],
            steps: [
              { reasoning: "Withheld info creates suspense.", working: "withheld", marks: 1, markCode: "AO2" },
              { reasoning: "Pacing controls release of tension.", working: "pacing", marks: 1, markCode: "AO2" },
              { reasoning: "Audience anticipates outcome.", working: "outcome", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Withheld info+pacing+anticipation=suspense.",
            commonErrors: ["Missing audience perspective."],
          },
        },
        {
          id: "cie-ol-fl-ed-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Extract analysis requires considering...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only characters" },
              { id: "b", text: "Only plot" },
              { id: "c", text: "Both text and performance" },
              { id: "d", text: "Only dialogue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Extract analysis", statement: "Text + performance elements." },
            ],
            steps: [
              { reasoning: "Text + performance.", working: "both", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Both text and performance",
            commonErrors: ["Text-only analysis."],
          },
        },
        {
          id: "cie-ol-fl-ed-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why link extract analysis to the whole play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Whole-play context", statement: "Extract gains meaning from its place in the drama." },
            ],
            steps: [
              { reasoning: "Place in play = meaning.", working: "place", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Extract's place in the drama gives it meaning.",
            commonErrors: ["Extract in isolation."],
          },
        },
        {
          id: "cie-ol-fl-ed-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic extract analysis — extended.",
          parts: [
            { label: "a", prompt: "Why stage directions matter?", marks: 1 },
            { label: "b", prompt: "Why position matters?", marks: 2 },
            { label: "c", prompt: "How to analyse tension?", marks: 3 },
            { label: "d", prompt: "What to consider in staging?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extract", statement: "Directions, position, tension, staging." },
            ],
            steps: [
              { part: "a", reasoning: "Reveal performance intent.", working: "directions", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Affects meaning — build-up vs climax.", working: "position", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Conflict, stakes, pacing, anticipation.", working: "tension", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Lighting, sound, movement, positioning.", working: "staging", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) performance intent (b) build-up vs climax (c) conflict+stakes+pacing (d) lighting+sound+movement",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Elements listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Ignoring staging elements."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-theme-analysis",
      title: "Theme and meaning in drama",
      skill: "Analyse themes emerging from dramatic conflict.",
      lesson: {
        sections: [
          {
            heading: "Theme through conflict",
            body: "Dramatic conflict embodies themes — power struggle=social hierarchy, betrayal=trust, ambition=corruption.",
          },
          {
            heading: "Character choices",
            body: "What characters choose reveals values. Tragic choices show flaws; noble choices show ideals.",
          },
          {
            heading: "Resolution and meaning",
            body: "How conflict resolves suggests author's view — justice served? Tragedy? Ambiguity? Resolution carries thematic weight.",
          },
        ],
        keyFormulas: [
          { name: "Dramatic theme", statement: "Conflict+choices+resolution=theme and meaning." },
        ],
        workedExample: {
          problem: "Play ends with villain unpunished.",
          solution: "Resolution suggests theme of moral ambiguity — author questions whether justice exists.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-dt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does conflict reveal theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conflict embodies ideas" },
              { id: "b", text: "Conflict is random" },
              { id: "c", text: "Conflict is just action" },
              { id: "d", text: "Conflict is decoration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conflict-theme", statement: "Conflict embodies thematic ideas." },
            ],
            steps: [
              { reasoning: "Conflict embodies ideas.", working: "embodies", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Conflict embodies ideas",
            commonErrors: ["Choosing (b) — conflict has meaning."],
          },
        },
        {
          id: "cie-ol-fl-dt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do character choices reveal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choices", statement: "Reveal values, flaws, ideals — drive theme." },
            ],
            steps: [
              { reasoning: "Choices reveal values/flaws.", working: "values", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reveal values, flaws, ideals — drive theme.",
            commonErrors: ["Ignoring motivation behind choices."],
          },
        },
        {
          id: "cie-ol-fl-dt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does resolution carry thematic weight?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resolution", statement: "How conflict ends suggests author's view on justice/meaning." },
            ],
            steps: [
              { reasoning: "Justice served=social order theme.", working: "justice", marks: 1, markCode: "AO2" },
              { reasoning: "Tragedy=flawed humanity theme.", working: "tragedy", marks: 1, markCode: "AO2" },
              { reasoning: "Ambiguity=questions about meaning.", working: "ambiguity", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Justice/tragedy/ambiguity=author's thematic view.",
            commonErrors: ["Resolution as afterthought — it carries meaning."],
          },
        },
        {
          id: "cie-ol-fl-dt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic theme analysis.",
          parts: [
            { label: "a", prompt: "How conflict reveals theme?", marks: 1 },
            { label: "b", prompt: "What choices reveal?", marks: 2 },
            { label: "c", prompt: "Resolution thematic weight?", marks: 3 },
            { label: "d", prompt: "Common drama themes?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme", statement: "Conflict, choices, resolution, common themes." },
            ],
            steps: [
              { part: "a", reasoning: "Conflict embodies ideas.", working: "conflict", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Values, flaws, ideals.", working: "choices", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Justice, tragedy, ambiguity=author's view.", working: "resolution", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple outcomes.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Power, betrayal, ambition, justice, identity, society.", working: "themes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) embodies ideas (b) values+flaws+ideals (c) justice/tragedy/ambiguity (d) power/betrayal/ambition",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Outcomes clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Themes listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Theme without conflict/choices analysis."],
          },
        },
        {
          id: "cie-ol-fl-dt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Theme' in a play is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The central idea being explored" },
              { id: "b", text: "A character" },
              { id: "c", text: "The plot" },
              { id: "d", text: "The setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "Central idea explored through drama." },
            ],
            steps: [
              { reasoning: "Theme = central idea.", working: "idea", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The central idea being explored",
            commonErrors: ["Theme as plot summary."],
          },
        },
        {
          id: "cie-ol-fl-dt-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do character choices reveal values?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choices", statement: "Decisions expose what characters (and author) value." },
            ],
            steps: [
              { reasoning: "Choices expose values.", working: "values", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Decisions expose what characters and author value.",
            commonErrors: ["Choices without motivation."],
          },
        },
        {
          id: "cie-ol-fl-dt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A play ending with the villain punished suggests a theme of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humour" },
              { id: "b", text: "Fate" },
              { id: "c", text: "Justice or moral order" },
              { id: "d", text: "Chaos" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Resolution themes", statement: "Punishment = justice/restoration." },
            ],
            steps: [
              { reasoning: "Punished villain = justice.", working: "justice", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Justice or moral order",
            commonErrors: ["Resolution as afterthought."],
          },
        },
        {
          id: "cie-ol-fl-dt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an ambiguous resolution affect a play's theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity", statement: "Questions justice/meaning — invites interpretation." },
            ],
            steps: [
              { reasoning: "Ambiguity questions meaning.", working: "questions", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Questions justice/meaning — leaves theme open.",
            commonErrors: ["Ambiguity as weak ending."],
          },
        },
        {
          id: "cie-ol-fl-dt-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do recurring motifs or images develop theme in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motifs", statement: "Repeated symbols accumulate thematic meaning." },
            ],
            steps: [
              { reasoning: "Repetition builds association.", working: "repetition", marks: 1, markCode: "AO2" },
              { reasoning: "Symbols accumulate meaning.", working: "meaning", marks: 1, markCode: "AO2" },
              { reasoning: "Links scenes/ideas across play.", working: "links", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Repetition+symbols+links=develop theme.",
            commonErrors: ["Motifs as decoration only."],
          },
        },
        {
          id: "cie-ol-fl-dt-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A central power struggle as conflict suggests a theme of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comedy" },
              { id: "b", text: "Nature" },
              { id: "c", text: "Social hierarchy or control" },
              { id: "d", text: "Friendship" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conflict-theme link", statement: "Power struggle = hierarchy/control." },
            ],
            steps: [
              { reasoning: "Power = hierarchy.", working: "hierarchy", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Social hierarchy or control",
            commonErrors: ["Conflict as plot only."],
          },
        },
        {
          id: "cie-ol-fl-dt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do different characters embody different thematic views?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Character viewpoints", statement: "Each character represents a position on theme." },
            ],
            steps: [
              { reasoning: "Characters = positions.", working: "positions", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Each character embodies a different position on theme.",
            commonErrors: ["One character = one theme only."],
          },
        },
        {
          id: "cie-ol-fl-dt-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Themes in drama most often emerge through...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage directions only" },
              { id: "b", text: "Character names" },
              { id: "c", text: "Conflict, choices and resolution" },
              { id: "d", text: "Act titles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Theme sources", statement: "Conflict, choices, resolution." },
            ],
            steps: [
              { reasoning: "Three sources.", working: "sources", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Conflict, choices and resolution",
            commonErrors: ["Theme as stated message."],
          },
        },
        {
          id: "cie-ol-fl-dt-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does setting contribute to a play's theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Setting and theme", statement: "Place/time reflect or contrast thematic ideas." },
            ],
            steps: [
              { reasoning: "Setting reflects theme.", working: "reflects", marks: 1, markCode: "AO2" },
              { reasoning: "Or contrasts it for effect.", working: "contrasts", marks: 1, markCode: "AO2" },
              { reasoning: "Atmosphere reinforces meaning.", working: "atmosphere", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reflects+contrasts+atmosphere=setting supports theme.",
            commonErrors: ["Setting as backdrop only."],
          },
        },
        {
          id: "cie-ol-fl-dt-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'moral dilemma' in a play typically explores...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conflicting values and choices" },
              { id: "b", text: "Setting" },
              { id: "c", text: "Only plot" },
              { id: "d", text: "Humour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Moral dilemma", statement: "Conflicting values force difficult choice." },
            ],
            steps: [
              { reasoning: "Dilemma = values.", working: "values", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Conflicting values and choices",
            commonErrors: ["Dilemma as simple choice."],
          },
        },
        {
          id: "cie-ol-fl-dt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is theme rarely stated directly in effective drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Implicit theme", statement: "Shown through action — audience draws conclusion." },
            ],
            steps: [
              { reasoning: "Shown not told.", working: "shown", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shown through action — audience draws the conclusion.",
            commonErrors: ["Theme as lecture."],
          },
        },
        {
          id: "cie-ol-fl-dt-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic theme analysis — extended.",
          parts: [
            { label: "a", prompt: "How conflict reveals theme?", marks: 1 },
            { label: "b", prompt: "What choices reveal?", marks: 2 },
            { label: "c", prompt: "Resolution thematic weight?", marks: 3 },
            { label: "d", prompt: "Common drama themes?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme", statement: "Conflict, choices, resolution, common themes." },
            ],
            steps: [
              { part: "a", reasoning: "Conflict embodies ideas.", working: "conflict", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Values, flaws, ideals.", working: "choices", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Justice, tragedy, ambiguity=author's view.", working: "resolution", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple outcomes.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Power, betrayal, ambition, justice, identity.", working: "themes", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) embodies ideas (b) values+flaws+ideals (c) justice/tragedy/ambiguity (d) power/betrayal/ambition",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Outcomes clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Themes listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Theme without conflict/choices analysis."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-dramatic-essay",
      title: "Writing essays on drama",
      skill: "Structure analytical essays on plays.",
      lesson: {
        sections: [
          {
            heading: "Drama essay structure",
            body: "Introduction: play context + thesis. Body: analyse elements — character, conflict, staging, theme. Conclusion: significance.",
          },
          {
            heading: "Evidence from drama",
            body: "Quote dialogue and stage directions. Reference act/scene numbers. Consider performance implications.",
          },
          {
            heading: "Analytical focus",
            body: "Focus on how/why — techniques, effects, meaning. Avoid plot summary — analyse dramatic choices.",
          },
        ],
        keyFormulas: [
          { name: "Drama essay", statement: "Intro+thesis→evidence paragraphs→conclusion. Dialogue+directions+analysis." },
        ],
        workedExample: {
          problem: "Write essay on 'the role of women' in a play.",
          solution: "Intro: thesis on portrayal. Body: character evidence + staging + dialogue. Conclusion: significance to theme.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What evidence should drama essays use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Other reviews" },
              { id: "b", text: "Only plot summary" },
              { id: "c", text: "Dialogue and stage directions" },
              { id: "d", text: "Author's biography" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence", statement: "Dialogue and stage directions as primary evidence." },
            ],
            steps: [
              { reasoning: "Dialogue+directions=evidence.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Dialogue and stage directions",
            commonErrors: ["Choosing (b) — that's summary."],
          },
        },
        {
          id: "cie-ol-fl-de-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How to cite drama in essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Citation", statement: "Act/scene numbers, character names, brief quotes." },
            ],
            steps: [
              { reasoning: "Reference act/scene.", working: "act/scene", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Act/scene numbers+character names+brief quotes.",
            commonErrors: ["Long quotes — keep brief."],
          },
        },
        {
          id: "cie-ol-fl-de-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to avoid plot summary in drama essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis vs summary", statement: "Analyse how/why — techniques, effects, meaning." },
            ],
            steps: [
              { reasoning: "Ask 'how' and 'why' not 'what'.", working: "how/why", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse dramatic techniques.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Link to theme/meaning.", working: "theme", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "How/why+techniques+effects+theme — not plot summary.",
            commonErrors: ["Retelling play instead of analysing."],
          },
        },
        {
          id: "cie-ol-fl-de-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Drama essay writing.",
          parts: [
            { label: "a", prompt: "What evidence to use?", marks: 1 },
            { label: "b", prompt: "How to cite?", marks: 2 },
            { label: "c", prompt: "Avoid plot summary?", marks: 3 },
            { label: "d", prompt: "Essay structure?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama essay", statement: "Evidence, citation, analysis, structure." },
            ],
            steps: [
              { part: "a", reasoning: "Dialogue and stage directions.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Act/scene+character names+quotes.", working: "citation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "How/why+techniques+effects+theme.", working: "analysis", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Intro+thesis→evidence paragraphs→conclusion.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple parts.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) dialogue+directions (b) act/scene+names (c) how/why not what (d) intro-body-conclusion",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Analysis clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Plot summary instead of analysis."],
          },
        },
        {
          id: "cie-ol-fl-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thesis statement in a drama essay should...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarise the plot" },
              { id: "b", text: "Present the main argument" },
              { id: "c", text: "List characters" },
              { id: "d", text: "Quote the play" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thesis", statement: "Main argument guiding essay." },
            ],
            steps: [
              { reasoning: "Thesis = argument.", working: "argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Present the main argument",
            commonErrors: ["Thesis as plot summary."],
          },
        },
        {
          id: "cie-ol-fl-de-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should a drama essay introduction work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction", statement: "Context + thesis statement." },
            ],
            steps: [
              { reasoning: "Context then thesis.", working: "thesis", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Give context then state thesis/argument.",
            commonErrors: ["Introduction as plot summary."],
          },
        },
        {
          id: "cie-ol-fl-de-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The best evidence for a drama essay is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Other reviews" },
              { id: "b", text: "Author biography" },
              { id: "c", text: "Dialogue and stage directions" },
              { id: "d", text: "Plot summary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evidence", statement: "Dialogue and stage directions." },
            ],
            steps: [
              { reasoning: "Dialogue+directions.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Dialogue and stage directions",
            commonErrors: ["Choosing (b) — that's summary."],
          },
        },
        {
          id: "cie-ol-fl-de-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should a drama essay conclusion work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conclusion", statement: "Summarises argument + significance." },
            ],
            steps: [
              { reasoning: "Restate significance.", working: "significance", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Restate argument and explain significance — no new evidence.",
            commonErrors: ["New arguments in conclusion."],
          },
        },
        {
          id: "cie-ol-fl-de-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should a comparative drama essay be structured?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative essay", statement: "Point-by-point or play-by-play comparison." },
            ],
            steps: [
              { reasoning: "Choose comparison method.", working: "method", marks: 1, markCode: "AO2" },
              { reasoning: "Balanced evidence from both.", working: "balanced", marks: 1, markCode: "AO2" },
              { reasoning: "Link similarities/differences to theme.", working: "theme", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Method+balanced evidence+theme links.",
            commonErrors: ["Two separate essays — not comparative."],
          },
        },
        {
          id: "cie-ol-fl-de-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Citing 'Act 3 Scene 2' in a drama essay is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Page numbers" },
              { id: "b", text: "Wrong format" },
              { id: "c", text: "Correct act/scene referencing" },
              { id: "d", text: "Optional" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Citation", statement: "Act/scene numbers for drama." },
            ],
            steps: [
              { reasoning: "Act/scene = correct.", working: "correct", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Correct act/scene referencing",
            commonErrors: ["Using page numbers for plays."],
          },
        },
        {
          id: "cie-ol-fl-de-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does historical/contextual knowledge strengthen a drama essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context", statement: "Explains authorial choices and social attitudes." },
            ],
            steps: [
              { reasoning: "Context explains choices.", working: "explains", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Explains authorial choices and social attitudes of the time.",
            commonErrors: ["Context as irrelevant trivia."],
          },
        },
        {
          id: "cie-ol-fl-de-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'topic sentence' should...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Signal the paragraph's analytical focus" },
              { id: "b", text: "Summarise plot" },
              { id: "c", text: "Quote the play" },
              { id: "d", text: "Be a question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic sentence", statement: "Signals paragraph's analytical point." },
            ],
            steps: [
              { reasoning: "Topic = focus.", working: "focus", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Signal the paragraph's analytical focus",
            commonErrors: ["Topic sentence as plot point."],
          },
        },
        {
          id: "cie-ol-fl-de-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should quotations be integrated into a drama essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Quotation", statement: "Brief, embedded, analysed — not dropped." },
            ],
            steps: [
              { reasoning: "Keep quotes brief.", working: "brief", marks: 1, markCode: "AO2" },
              { reasoning: "Embed in own sentence.", working: "embed", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse significance after.", working: "analyse", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Brief+embedded+analysed.",
            commonErrors: ["Long quotes without analysis."],
          },
        },
        {
          id: "cie-ol-fl-de-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Body paragraphs in a drama essay should focus on...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character lists" },
              { id: "b", text: "Plot retelling" },
              { id: "c", text: "Analysis, not plot summary" },
              { id: "d", text: "Quotes only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Body paragraphs", statement: "Analysis of how/why." },
            ],
            steps: [
              { reasoning: "Analysis not summary.", working: "analysis", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Analysis, not plot summary",
            commonErrors: ["Retelling the play."],
          },
        },
        {
          id: "cie-ol-fl-de-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why evaluate significance in a drama essay conclusion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Significance", statement: "Shows why analysis matters to theme/audience." },
            ],
            steps: [
              { reasoning: "Significance = why it matters.", working: "matters", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shows why the analysis matters to theme and audience.",
            commonErrors: ["Conclusion as repetition only."],
          },
        },
        {
          id: "cie-ol-fl-de-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Drama essay writing — extended.",
          parts: [
            { label: "a", prompt: "Define thesis.", marks: 1 },
            { label: "b", prompt: "How to cite?", marks: 2 },
            { label: "c", prompt: "Avoid plot summary?", marks: 3 },
            { label: "d", prompt: "Essay structure?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Drama essay", statement: "Thesis, citation, analysis, structure." },
            ],
            steps: [
              { part: "a", reasoning: "Main argument.", working: "thesis", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Act/scene+character names+quotes.", working: "citation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "How/why+techniques+effects+theme.", working: "analysis", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Intro+thesis→evidence paragraphs→conclusion.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple parts.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) main argument (b) act/scene+names (c) how/why not what (d) intro-body-conclusion",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Analysis clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Plot summary instead of analysis."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-drama-notes-3",
      title: "Drama analysis — revision notes",
      summary: "Extract analysis, theme, essay writing.",
      sections: [
        {
          heading: "Drama analysis",
          body: "Extract: position+dialogue+staging+tension. Theme: conflict+choices+resolution. Essay: dialogue+directions evidence, act/scene citations, how/why analysis.",
        },
      ],
    },
  ],
};
