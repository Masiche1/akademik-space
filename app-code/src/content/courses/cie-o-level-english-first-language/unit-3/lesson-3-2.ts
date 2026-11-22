import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "cie-ol-fl-lesson-3-2",
  code: "3-2",
  title: "Character in drama",
  goal: "I CAN analyse characterisation in plays.",
  standards: ["1119 Reading: drama characters"],
  vocabulary: [
    { term: "Protagonist", definition: "Main character driving plot." },
    { term: "Antagonist", definition: "Character opposing protagonist." },
    { term: "Stock character", definition: "Type character representing category." },
    { term: "Character foil", definition: "Character highlighting another's traits." },
    { term: "Dynamic character", definition: "Character who changes." },
    { term: "Static character", definition: "Character who doesn't change." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-dramatic-characters",
      title: "Character types in drama",
      skill: "Identify and analyse dramatic character types.",
      lesson: {
        sections: [
          {
            heading: "Protagonist and antagonist",
            body: "Protagonist drives action; antagonist creates obstacles. Conflict between them structures plot.",
          },
          {
            heading: "Stock and foil characters",
            body: "Stock: represents type (the fool, the hero). Foil: contrasts with another character to highlight traits.",
          },
          {
            heading: "Dynamic vs static",
            body: "Dynamic characters change through play; static remain constant. Tragic heroes often dynamic — fall from grace.",
          },
        ],
        keyFormulas: [
          { name: "Character types", statement: "Protagonist+antagonist+stock+foil+dynamic/static=character analysis." },
        ],
        workedExample: {
          problem: "Character contrasts with protagonist's weakness.",
          solution: "Foil character — contrast highlights protagonist's traits. Analyse relationship, not just individual.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'foil' character?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrator" },
              { id: "b", text: "Contrasts to highlight another" },
              { id: "c", text: "Villain" },
              { id: "d", text: "Main character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Foil", statement: "Character contrasting with another to highlight traits." },
            ],
            steps: [
              { reasoning: "Foil = contrast highlights.", working: "contrast", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Contrasts to highlight another",
            commonErrors: ["Choosing (b) — that's protagonist."],
          },
        },
        {
          id: "cie-ol-fl-dc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'dynamic character'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic character", statement: "Character who changes/develops through play." },
            ],
            steps: [
              { reasoning: "Changes through play.", working: "changes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Character who changes/develops through the play.",
            commonErrors: ["Confusing with static."],
          },
        },
        {
          id: "cie-ol-fl-dc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a foil character function?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Foil function", statement: "Contrast highlights traits — brave vs cowardly." },
            ],
            steps: [
              { reasoning: "Contrast makes traits visible.", working: "contrast", marks: 1, markCode: "AO2" },
              { reasoning: "Differences emphasise characteristics.", working: "emphasise", marks: 1, markCode: "AO2" },
              { reasoning: "Analysing relationship reveals meaning.", working: "relationship", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Contrast highlights traits; relationship reveals meaning.",
            commonErrors: ["Analysing characters in isolation."],
          },
        },
        {
          id: "cie-ol-fl-dc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic character analysis.",
          parts: [
            { label: "a", prompt: "Define foil.", marks: 1 },
            { label: "b", prompt: "Dynamic vs static?", marks: 2 },
            { label: "c", prompt: "How foil functions?", marks: 3 },
            { label: "d", prompt: "Name character types.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Characters", statement: "Foil, dynamic/static, function, types." },
            ],
            steps: [
              { part: "a", reasoning: "Contrast highlights traits.", working: "foil", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Dynamic=changes; static=unchanging.", working: "dynamic/static", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contrast highlights; relationship reveals meaning.", working: "function", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Protagonist, antagonist, stock, foil, dynamic, static.", working: "types", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) contrast (b) changes vs static (c) highlight traits (d) protagonist/antagonist/stock/foil",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Function clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing character relationships."],
          },
        },
        {
          id: "cie-ol-fl-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'protagonist' is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A minor character" },
              { id: "b", text: "The narrator" },
              { id: "c", text: "The villain" },
              { id: "d", text: "The main character driving the plot" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Protagonist", statement: "Main character who drives the action." },
            ],
            steps: [
              { reasoning: "Protagonist = main driver.", working: "main", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The main character driving the plot",
            commonErrors: ["Choosing (b) — that's antagonist."],
          },
        },
        {
          id: "cie-ol-fl-dc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an antagonist structure conflict in a play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Antagonist", statement: "Creates obstacles opposing the protagonist." },
            ],
            steps: [
              { reasoning: "Antagonist = obstacles.", working: "obstacles", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Creates obstacles that oppose the protagonist's goals.",
            commonErrors: ["Antagonist as always 'evil' — can be circumstance."],
          },
        },
        {
          id: "cie-ol-fl-dc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'stock character' is one who...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Represents a familiar type or category" },
              { id: "b", text: "Controls the plot" },
              { id: "c", text: "Never speaks" },
              { id: "d", text: "Changes completely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stock character", statement: "Represents a type — the fool, the hero." },
            ],
            steps: [
              { reasoning: "Stock = type.", working: "type", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Represents a familiar type or category",
            commonErrors: ["Confusing with foil."],
          },
        },
        {
          id: "cie-ol-fl-dc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does character change (dynamic vs static) matter in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dynamic vs static", statement: "Change shows development; stasis shows rigidity." },
            ],
            steps: [
              { reasoning: "Change = development.", working: "development", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Change shows development; stasis can show rigidity or strength.",
            commonErrors: ["Assuming all characters should change."],
          },
        },
        {
          id: "cie-ol-fl-dc-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does analysing character relationships reveal theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Relationships and theme", statement: "Interactions embody ideas — power, trust, loyalty." },
            ],
            steps: [
              { reasoning: "Relationships embody themes.", working: "embody", marks: 1, markCode: "AO2" },
              { reasoning: "Conflict between characters = thematic conflict.", working: "conflict", marks: 1, markCode: "AO2" },
              { reasoning: "Foils/alliances highlight values.", working: "values", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Relationships embody+conflict=thematic ideas.",
            commonErrors: ["Analysing characters alone."],
          },
        },
        {
          id: "cie-ol-fl-dc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character who remains unchanged throughout a play is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dynamic" },
              { id: "b", text: "A foil" },
              { id: "c", text: "A stock type" },
              { id: "d", text: "Static" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Static", statement: "Character who does not change." },
            ],
            steps: [
              { reasoning: "Static = unchanged.", working: "unchanged", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Static",
            commonErrors: ["Confusing static with dynamic."],
          },
        },
        {
          id: "cie-ol-fl-dc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a tragic hero's 'fall from grace' reveal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tragic fall", statement: "Reveals flaw, fate, or moral weakness." },
            ],
            steps: [
              { reasoning: "Fall reveals flaw/fate.", working: "flaw", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reveals flaw, fate or moral weakness leading to downfall.",
            commonErrors: ["Fall as random rather than caused."],
          },
        },
        {
          id: "cie-ol-fl-dc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A foil character's main purpose is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contrast and highlight another's traits" },
              { id: "b", text: "Provide comic relief only" },
              { id: "c", text: "End the play" },
              { id: "d", text: "Drive the plot alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Foil", statement: "Contrasts to highlight traits." },
            ],
            steps: [
              { reasoning: "Foil = contrast.", working: "contrast", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Contrast and highlight another's traits",
            commonErrors: ["Analysing foil in isolation."],
          },
        },
        {
          id: "cie-ol-fl-dc-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do character choices drive both plot and theme?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Choices", statement: "Decisions create events and reveal values." },
            ],
            steps: [
              { reasoning: "Choices create plot events.", working: "events", marks: 1, markCode: "AO2" },
              { reasoning: "Choices reveal character values.", working: "values", marks: 1, markCode: "AO2" },
              { reasoning: "Values connect to theme.", working: "theme", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Choices→events+values→theme.",
            commonErrors: ["Choices without consequences."],
          },
        },
        {
          id: "cie-ol-fl-dc-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Protagonist and antagonist are best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hero and sidekick" },
              { id: "b", text: "Stock and foil" },
              { id: "c", text: "Driver and obstructer" },
              { id: "d", text: "Static and dynamic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Protagonist/antagonist", statement: "Driver vs obstructer of goals." },
            ],
            steps: [
              { reasoning: "Driver vs obstructer.", working: "roles", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Driver and obstructer",
            commonErrors: ["Antagonist always human villain."],
          },
        },
        {
          id: "cie-ol-fl-dc-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why analyse characters together rather than alone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Character relationships", statement: "Relationships reveal meaning individuals can't." },
            ],
            steps: [
              { reasoning: "Relationships add meaning.", working: "relationships", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Relationships, foils and conflicts reveal deeper meaning.",
            commonErrors: ["Isolated character study."],
          },
        },
        {
          id: "cie-ol-fl-dc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic characters — extended.",
          parts: [
            { label: "a", prompt: "Define foil.", marks: 1 },
            { label: "b", prompt: "Dynamic vs static?", marks: 2 },
            { label: "c", prompt: "How foil functions?", marks: 3 },
            { label: "d", prompt: "Name character types.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Characters", statement: "Foil, dynamic/static, function, types." },
            ],
            steps: [
              { part: "a", reasoning: "Contrast highlights traits.", working: "foil", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Dynamic=changes; static=unchanging.", working: "dynamic/static", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contrast highlights; relationship reveals meaning.", working: "function", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Protagonist, antagonist, stock, foil, dynamic, static.", working: "types", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) contrast (b) changes vs static (c) highlight traits (d) protagonist/antagonist/foil",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Function clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Types listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Missing character relationships."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-dialogue-analysis",
      title: "Dialogue analysis in drama",
      skill: "Analyse character speech and subtext.",
      lesson: {
        sections: [
          {
            heading: "Surface vs subtext",
            body: "Characters say one thing, mean another. 'I'm fine' may mean 'I'm devastated'. Analyse both levels.",
          },
          {
            heading: "Speech patterns",
            body: "Vocabulary, sentence length, interruptions, pauses reveal character state — educated vs uneducated, confident vs nervous.",
          },
          {
            heading: "Power in dialogue",
            body: "Who controls conversation? Who interrupts? Who stays silent? Dialogue reveals power dynamics.",
          },
        ],
        keyFormulas: [
          { name: "Dialogue", statement: "Surface+subtext+speech patterns+power dynamics=reveal character." },
        ],
        workedExample: {
          problem: "Character says 'whatever you say' while rolling eyes.",
          solution: "Subtext — agreement is sarcastic; stage direction reveals true attitude.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-dlg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'subtext' in dialogue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Act title" },
              { id: "b", text: "Character's name" },
              { id: "c", text: "Stage direction" },
              { id: "d", text: "Implied meaning beneath words" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "Implied meaning beneath surface dialogue." },
            ],
            steps: [
              { reasoning: "Subtext = implied.", working: "implied", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Implied meaning beneath words",
            commonErrors: ["Choosing (c) — that's direction."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do speech patterns reveal character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech patterns", statement: "Vocabulary, length, interruptions, pauses reveal state." },
            ],
            steps: [
              { reasoning: "Patterns show education/confidence/state.", working: "patterns", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Vocabulary, length, interruptions, pauses reveal character state.",
            commonErrors: ["Only surface meaning."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does dialogue reveal power dynamics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power in dialogue", statement: "Who controls, interrupts, stays silent reveals relationships." },
            ],
            steps: [
              { reasoning: "Who controls conversation shows power.", working: "controls", marks: 1, markCode: "AO2" },
              { reasoning: "Interruptions show dominance/aggression.", working: "interruptions", marks: 1, markCode: "AO2" },
              { reasoning: "Silence can show power or submission.", working: "silence", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Controls+interruptions+silence=reveal power dynamics.",
            commonErrors: ["Missing power dynamics in dialogue."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dialogue analysis.",
          parts: [
            { label: "a", prompt: "Define subtext.", marks: 1 },
            { label: "b", prompt: "Speech patterns reveal?", marks: 2 },
            { label: "c", prompt: "Power dynamics?", marks: 3 },
            { label: "d", prompt: "Surface vs subtext?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue", statement: "Subtext, patterns, power, surface/subtext." },
            ],
            steps: [
              { part: "a", reasoning: "Implied meaning beneath words.", working: "subtext", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Vocabulary, length, interruptions, pauses.", working: "patterns", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Controls, interruptions, silence reveal power.", working: "power", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Surface=what's said; subtext=what's meant — analyse both.", working: "levels", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Both levels.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) implied (b) patterns (c) controls+interruptions+silence (d) surface vs subtext",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Power clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Levels clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Only surface dialogue — miss subtext."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Frequent interruptions in dialogue often signal...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dominance or conflict" },
              { id: "b", text: "Agreement" },
              { id: "c", text: "Exposition" },
              { id: "d", text: "Silence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Interruptions", statement: "Signal dominance, aggression or conflict." },
            ],
            steps: [
              { reasoning: "Interruptions = dominance.", working: "dominance", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Dominance or conflict",
            commonErrors: ["Treating interruptions as neutral."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do pauses affect meaning in dramatic dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pauses", statement: "Create suspense, hesitation, emphasis." },
            ],
            steps: [
              { reasoning: "Pauses add tension/emphasis.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Create suspense, hesitation and emphasis.",
            commonErrors: ["Pauses as empty space."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Short, clipped sentences in dialogue often reveal...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tension or agitation" },
              { id: "b", text: "Exposition" },
              { id: "c", text: "Education level" },
              { id: "d", text: "Calm reflection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence length", statement: "Short sentences signal agitation; long suggest reflection." },
            ],
            steps: [
              { reasoning: "Short = agitation.", working: "agitation", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Tension or agitation",
            commonErrors: ["Ignoring sentence rhythm."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can silence be as meaningful as speech in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Silence", statement: "Conveys emotion, power, or what cannot be said." },
            ],
            steps: [
              { reasoning: "Silence conveys emotion/power.", working: "conveys", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Conveys emotion, power or the unsayable.",
            commonErrors: ["Silence as absence of meaning."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how power can shift within a single conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power shifts", statement: "Topic control, interruptions, silence track dominance." },
            ],
            steps: [
              { reasoning: "Topic control = power.", working: "topic", marks: 1, markCode: "AO2" },
              { reasoning: "Interruptions assert dominance.", working: "interrupt", marks: 1, markCode: "AO2" },
              { reasoning: "Silence can be power or submission.", working: "silence", marks: 1, markCode: "AO2" },
              { reasoning: "Shifts clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Topic+interruptions+silence=power shifts.",
            commonErrors: ["Static power assumption."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character saying 'whatever you say' while rolling their eyes shows...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exposition" },
              { id: "b", text: "Sarcasm and subtext" },
              { id: "c", text: "Agreement" },
              { id: "d", text: "Neutrality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subtext", statement: "Surface words vs implied attitude." },
            ],
            steps: [
              { reasoning: "Words vs stage direction = subtext.", working: "subtext", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sarcasm and subtext",
            commonErrors: ["Taking words literally."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does colloquial or dialect language characterise speakers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialect", statement: "Reveals background, class, region, informality." },
            ],
            steps: [
              { reasoning: "Dialect reveals background.", working: "background", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reveals background, class, region and informality.",
            commonErrors: ["Dialect as error rather than characterisation."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who controls a conversation is shown by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Topic-setting and interruptions" },
              { id: "b", text: "Sentence length" },
              { id: "c", text: "Stage lighting" },
              { id: "d", text: "Who speaks first only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conversation control", statement: "Topic-setting and interruptions show control." },
            ],
            steps: [
              { reasoning: "Topic+interruptions.", working: "control", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Topic-setting and interruptions",
            commonErrors: ["Only listening to content, not control."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a character's speech patterns change across a play, and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Changing speech", statement: "Shifts in register/patterns track development or pressure." },
            ],
            steps: [
              { reasoning: "Changes track character development.", working: "development", marks: 1, markCode: "AO2" },
              { reasoning: "Register shifts show status/emotion.", working: "register", marks: 1, markCode: "AO2" },
              { reasoning: "Pressure/conflict alters patterns.", working: "pressure", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Development+register shifts+pressure=changing speech.",
            commonErrors: ["Assuming speech stays constant."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Subtext' in dialogue means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Implied meaning beneath the words" },
              { id: "b", text: "Stage directions" },
              { id: "c", text: "The plot" },
              { id: "d", text: "The loudest line" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subtext", statement: "Implied meaning beneath surface words." },
            ],
            steps: [
              { reasoning: "Subtext = implied.", working: "implied", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Implied meaning beneath the words",
            commonErrors: ["Confusing with stage directions."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why must analysts consider stage directions alongside dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Directions + dialogue", statement: "Directions reveal true tone/intent." },
            ],
            steps: [
              { reasoning: "Directions reveal intent.", working: "intent", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "They reveal tone, emotion and true intent behind words.",
            commonErrors: ["Dialogue without directions = incomplete."],
          },
        },
        {
          id: "cie-ol-fl-dlg-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dialogue analysis — extended.",
          parts: [
            { label: "a", prompt: "Define subtext.", marks: 1 },
            { label: "b", prompt: "Speech patterns reveal?", marks: 2 },
            { label: "c", prompt: "Power dynamics?", marks: 3 },
            { label: "d", prompt: "Surface vs subtext?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue", statement: "Subtext, patterns, power, levels." },
            ],
            steps: [
              { part: "a", reasoning: "Implied meaning beneath words.", working: "subtext", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Vocabulary, length, interruptions, pauses.", working: "patterns", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Controls, interruptions, silence reveal power.", working: "power", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Surface=said; subtext=meant — analyse both.", working: "levels", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Both levels.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) implied (b) patterns (c) controls+interruptions+silence (d) surface vs subtext",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Power clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Levels clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Only surface dialogue — miss subtext."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-tragedy-comedy",
      title: "Tragedy and comedy in drama",
      skill: "Distinguish dramatic genres and their effects.",
      lesson: {
        sections: [
          {
            heading: "Tragedy",
            body: "Serious tone, protagonist falls from grace, often through flaw (hamartia). Audience feels pity/fear — catharsis.",
          },
          {
            heading: "Comedy",
            body: "Humorous, ends happily, often satirises society. Types: romantic, social, farce.",
          },
          {
            heading: "Tragicomedy",
            body: "Mixes both — serious themes with humour. Modern drama often blends genres.",
          },
        ],
        keyFormulas: [
          { name: "Genres", statement: "Tragedy=fallback+catharsis; comedy=humour+happy; tragicomedy=mix." },
        ],
        workedExample: {
          problem: "Hero with fatal flaw causes own downfall.",
          solution: "Tragedy — hamartia (tragic flaw) leads to catastrophe; audience experiences catharsis.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-tc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'hamartia'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comic relief" },
              { id: "b", text: "Plot twist" },
              { id: "c", text: "Tragic flaw" },
              { id: "d", text: "Stage direction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hamartia", statement: "Tragic flaw leading to protagonist's downfall." },
            ],
            steps: [
              { reasoning: "Hamartia = tragic flaw.", working: "flaw", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Tragic flaw",
            commonErrors: ["Choosing (d) — that's different."],
          },
        },
        {
          id: "cie-ol-fl-tc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'catharsis' in tragedy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catharsis", statement: "Emotional release/purification audience feels." },
            ],
            steps: [
              { reasoning: "Emotional release for audience.", working: "release", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emotional release/purification audience experiences.",
            commonErrors: ["Thinking it's just sadness."],
          },
        },
        {
          id: "cie-ol-fl-tc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does comedy differ from tragedy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comedy vs tragedy", statement: "Tone, outcome, purpose, audience response." },
            ],
            steps: [
              { reasoning: "Comedy=humorous/happy; tragedy=serious/tragic.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Comedy ends well; tragedy ends badly.", working: "outcome", marks: 1, markCode: "AO2" },
              { reasoning: "Comedy satirises; tragedy evokes pity/fear.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tone+outcome+purpose+audience response differ.",
            commonErrors: ["Comedy can be serious — not just jokes."],
          },
        },
        {
          id: "cie-ol-fl-tc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic genres.",
          parts: [
            { label: "a", prompt: "Define hamartia.", marks: 1 },
            { label: "b", prompt: "What is catharsis?", marks: 2 },
            { label: "c", prompt: "Comedy vs tragedy?", marks: 3 },
            { label: "d", prompt: "What is tragicomedy?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Genres", statement: "Hamartia, catharsis, comedy/tragedy, tragicomedy." },
            ],
            steps: [
              { part: "a", reasoning: "Tragic flaw.", working: "hamartia", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Emotional release/purification.", working: "catharsis", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Tone, outcome, purpose, audience response.", working: "comparison", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Mixes serious themes with humour — neither pure comedy nor tragedy.", working: "tragicomedy", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Blend clear.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) tragic flaw (b) emotional release (c) tone+outcome+purpose (d) serious+humour mix",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Differences clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Blend clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Comedy = just jokes — misses satire/serious themes."],
          },
        },
        {
          id: "cie-ol-fl-tc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tragedy typically ends...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "With catastrophe or downfall" },
              { id: "b", text: "With a wedding" },
              { id: "c", text: "With comedy" },
              { id: "d", text: "Happily" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tragedy ending", statement: "Ends badly — catastrophe/downfall." },
            ],
            steps: [
              { reasoning: "Tragedy = bad end.", working: "catastrophe", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** With catastrophe or downfall",
            commonErrors: ["Confusing with comedy."],
          },
        },
        {
          id: "cie-ol-fl-tc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'comic relief' and why is it used?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comic relief", statement: "Humour inserted to ease tension." },
            ],
            steps: [
              { reasoning: "Eases tension before climax.", working: "tension", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Humour easing tension — often before serious climax.",
            commonErrors: ["Comic relief as pointless interruption."],
          },
        },
        {
          id: "cie-ol-fl-tc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Satire in comedy typically targets...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grammar" },
              { id: "b", text: "Only jokes" },
              { id: "c", text: "Nature only" },
              { id: "d", text: "Society or human folly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Satire", statement: "Humour exposing/mocking social folly." },
            ],
            steps: [
              { reasoning: "Satire = social mockery.", working: "society", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Society or human folly",
            commonErrors: ["Satire as mere jokes."],
          },
        },
        {
          id: "cie-ol-fl-tc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does 'farce' differ from other forms of comedy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Farce", statement: "Physical/situational comedy, exaggerated, fast-paced." },
            ],
            steps: [
              { reasoning: "Farce = physical/situational.", working: "physical", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Physical, exaggerated, fast-paced situational humour.",
            commonErrors: ["Farce = all comedy."],
          },
        },
        {
          id: "cie-ol-fl-tc-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does tragicomedy reflect modern experience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tragicomedy", statement: "Mixes serious themes with humour — life is both." },
            ],
            steps: [
              { reasoning: "Reflects life's mixed nature.", working: "mixed", marks: 1, markCode: "AO2" },
              { reasoning: "Humour makes serious themes bearable.", working: "bearable", marks: 1, markCode: "AO2" },
              { reasoning: "Avoids pure genre extremes.", working: "extremes", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Mixed life+humour softens serious themes.",
            commonErrors: ["Tragicomedy as confused genre."],
          },
        },
        {
          id: "cie-ol-fl-tc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Catharsis' in tragedy refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage directions" },
              { id: "b", text: "Emotional release for the audience" },
              { id: "c", text: "A character type" },
              { id: "d", text: "A comic scene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catharsis", statement: "Emotional release/purification." },
            ],
            steps: [
              { reasoning: "Catharsis = release.", working: "release", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Emotional release for the audience",
            commonErrors: ["Thinking it's just sadness."],
          },
        },
        {
          id: "cie-ol-fl-tc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does 'hamartia' (tragic flaw) cause a downfall?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Hamartia", statement: "Character's flaw leads to catastrophe." },
            ],
            steps: [
              { reasoning: "Flaw → catastrophic choice.", working: "flaw", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Flaw leads to fatal choices and catastrophe.",
            commonErrors: ["Downfall as pure bad luck."],
          },
        },
        {
          id: "cie-ol-fl-tc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which genre typically 'ends happily'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Epic" },
              { id: "b", text: "Tragedy" },
              { id: "c", text: "Melodrama" },
              { id: "d", text: "Comedy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comedy ending", statement: "Ends happily/resolved." },
            ],
            steps: [
              { reasoning: "Comedy = happy end.", working: "happy", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Comedy",
            commonErrors: ["Confusing genres."],
          },
        },
        {
          id: "cie-ol-fl-tc-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does comedy use humour to make serious points?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comedy and satire", statement: "Humour exposes folly — safer than direct criticism." },
            ],
            steps: [
              { reasoning: "Humour exposes folly.", working: "folly", marks: 1, markCode: "AO2" },
              { reasoning: "Safer than direct criticism.", working: "safer", marks: 1, markCode: "AO2" },
              { reasoning: "Makes audience reflect on society.", working: "reflect", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Exposes folly+safer criticism+reflection.",
            commonErrors: ["Comedy as only entertainment."],
          },
        },
        {
          id: "cie-ol-fl-tc-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tragicomedy combines...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only tragedy" },
              { id: "b", text: "Serious themes with humour" },
              { id: "c", text: "Only comedy" },
              { id: "d", text: "No conflict" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tragicomedy", statement: "Serious themes blended with humour." },
            ],
            steps: [
              { reasoning: "Serious + humour.", working: "blend", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Serious themes with humour",
            commonErrors: ["Tragicomedy as confused genre."],
          },
        },
        {
          id: "cie-ol-fl-tc-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a play mix comedy into a tragedy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Genre mixing", statement: "Relief, realism, contrast, complexity." },
            ],
            steps: [
              { reasoning: "Relief/contrast/complexity.", working: "contrast", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Provides relief, contrast and realistic complexity.",
            commonErrors: ["Genre mixing as inconsistency."],
          },
        },
        {
          id: "cie-ol-fl-tc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Dramatic genres — extended.",
          parts: [
            { label: "a", prompt: "Define hamartia.", marks: 1 },
            { label: "b", prompt: "What is catharsis?", marks: 2 },
            { label: "c", prompt: "Comedy vs tragedy?", marks: 3 },
            { label: "d", prompt: "What is tragicomedy?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Genres", statement: "Hamartia, catharsis, comedy/tragedy, tragicomedy." },
            ],
            steps: [
              { part: "a", reasoning: "Tragic flaw.", working: "hamartia", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Emotional release/purification.", working: "catharsis", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Tone, outcome, purpose, audience response.", working: "comparison", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Mixes serious themes with humour.", working: "tragicomedy", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Blend clear.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) tragic flaw (b) emotional release (c) tone+outcome+purpose (d) serious+humour mix",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Differences clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Blend clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Comedy = just jokes."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-drama-notes-2",
      title: "Drama characters — revision notes",
      summary: "Character types, dialogue, genres.",
      sections: [
        {
          heading: "Characters & genres",
          body: "Types: protagonist, antagonist, stock, foil, dynamic, static. Dialogue: subtext, speech patterns, power dynamics. Genres: tragedy (hamartia/catharsis), comedy, tragicomedy.",
        },
      ],
    },
  ],
};
