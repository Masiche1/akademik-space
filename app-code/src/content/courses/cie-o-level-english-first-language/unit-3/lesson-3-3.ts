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
              { id: "a", text: "They reveal performance intent" },
              { id: "b", text: "They're optional" },
              { id: "c", text: "They repeat dialogue" },
              { id: "d", text: "They're for actors only" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "Conflict is just action" },
              { id: "c", text: "Conflict is decoration" },
              { id: "d", text: "Conflict is random" },
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
              { id: "a", text: "Dialogue and stage directions" },
              { id: "b", text: "Only plot summary" },
              { id: "c", text: "Author's biography" },
              { id: "d", text: "Other reviews" },
            ],
            correctChoiceId: "a",
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
