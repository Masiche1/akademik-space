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
              { id: "a", text: "Contrasts to highlight another" },
              { id: "b", text: "Main character" },
              { id: "c", text: "Villain" },
              { id: "d", text: "Narrator" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Implied meaning beneath words" },
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
              { id: "a", text: "Tragic flaw" },
              { id: "b", text: "Comic relief" },
              { id: "c", text: "Stage direction" },
              { id: "d", text: "Plot twist" },
            ],
            correctChoiceId: "a",
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
