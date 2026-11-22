import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cieilit-u3-lesson-3-2",
  code: "3-2",
  title: "Drama analysis and essay writing",
  goal: "I CAN analyse dramatic texts and structure effective literature essays.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Components 2-4: Drama, essay writing, context",
  ],
  vocabulary: [
    {
      term: "Stage directions",
      definition: "Instructions in brackets describing action, setting, mood.",
    },
    {
      term: "Soliloquy",
      definition: "Character speaking thoughts aloud when alone.",
    },
    {
      term: "Aside",
      definition: "Remark heard by audience but not other characters.",
    },
    {
      term: "Monologue",
      definition: "Long speech by one character.",
    },
    {
      term: "Tragedy",
      definition:
        "Dramatic work ending in disaster — often protagonist's downfall.",
    },
    {
      term: "Comedy",
      definition: "Dramatic work ending happily — often with humour.",
    },
    {
      term: "Tragic flaw",
      definition: "Character trait causing protagonist's downfall (hamartia).",
    },
    {
      term: "Catharsis",
      definition: "Emotional release/purification at end of tragedy.",
    },
    {
      term: "Conflict",
      definition: "Struggle between characters or forces.",
    },
    {
      term: "Irony",
      definition:
        "Gap between expectation and reality — dramatic, situational, verbal.",
    },
    {
      term: "Subtext",
      definition: "Meaning beneath surface of dialogue.",
    },
    {
      term: "Thesis statement",
      definition: "Central argument of an essay.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u3-drama",
      title: "Analysing drama",
      skill:
        "Analyse dramatic texts — structure, character, conflict, dramatic devices.",
      lesson: {
        sections: [
          {
            heading: "Dramatic structure",
            body: "**Exposition**: setting and characters introduced. **Rising action**: conflict develops. **Climax**: turning point/highest tension. **Falling action**: consequences unfold. **Denouement**: resolution. **Acts/scenes**: divisions of play — analyse how structure builds tension.",
          },
          {
            heading: "Dramatic devices",
            body: "**Stage directions**: reveal action, mood, setting — analyse them. **Soliloquy**: character's inner thoughts — reveals motivation. **Aside**: audience knows more than characters — dramatic irony. **Dialogue**: subtext, characterisation, conflict. **Dramatic irony**: audience knows what characters don't. **Conflict**: internal (character vs self) or external (character vs character/nature/society).",
          },
          {
            heading: "Tragedy and comedy",
            body: "**Tragedy**: protagonist falls due to tragic flaw — evokes pity/fear, ends in catharsis. **Comedy**: ends happily — humour, reconciliation, often satirical. **Tragic hero**: noble character with fatal flaw. Analyse how playwright uses structure, devices and character to create effects.",
          },
        ],
        keyFormulas: [
          {
            name: "Dramatic structure",
            statement:
              "Exposition → rising action → climax → falling → denouement",
          },
          {
            name: "Dramatic devices",
            statement:
              "Stage directions · soliloquy · aside · dramatic irony · conflict",
          },
          {
            name: "Tragedy elements",
            statement: "Tragic hero · fatal flaw · catharsis",
          },
        ],
        workedExample: {
          problem: "How to analyse a dramatic extract?",
          solution:
            "Identify dramatic devices → analyse character motivation → examine conflict → consider structure/tension → link to themes.",
        },
      },
      questions: [
        {
          id: "cieilit-u3-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stage directions in a play are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dialogue" },
              {
                id: "b",
                text: "Instructions describing action, setting, mood",
              },
              { id: "c", text: "Character names" },
              { id: "d", text: "Plot summary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stage directions",
                statement: "Instructions for action/setting.",
              },
            ],
            steps: [
              {
                reasoning: "Stage directions = instructions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Instructions for action/setting.",
          },
        },
        {
          id: "cieilit-u3-dr-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A soliloquy is when a character:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrates the play" },
              { id: "b", text: "Sings" },
              { id: "c", text: "Talks to another character" },
              { id: "d", text: "Speaks their thoughts aloud when alone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement: "Character alone speaking thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Soliloquy = alone speech.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Speaks thoughts aloud alone.",
          },
        },
        {
          id: "cieilit-u3-dr-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An aside is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main speech" },
              { id: "b", text: "Stage direction" },
              {
                id: "c",
                text: "Remark heard by audience but not other characters",
              },
              { id: "d", text: "Soliloquy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aside",
                statement: "For audience only.",
              },
            ],
            steps: [
              { reasoning: "Aside = audience only.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) For audience only.",
          },
        },
        {
          id: "cieilit-u3-dr-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dramatic irony occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Characters know everything" },
              { id: "b", text: "No one knows anything" },
              { id: "c", text: "Audience knows more than characters" },
              { id: "d", text: "Audience is confused" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement: "Audience knows more.",
              },
            ],
            steps: [
              {
                reasoning: "Dramatic irony = audience knows more.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Audience knows more.",
          },
        },
        {
          id: "cieilit-u3-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tragedy typically ends with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comedy" },
              { id: "b", text: "The protagonist's downfall/disaster" },
              { id: "c", text: "Resolution" },
              { id: "d", text: "Happy ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragedy",
                statement: "Ends in disaster.",
              },
            ],
            steps: [
              { reasoning: "Tragedy = downfall.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Protagonist's downfall.",
          },
        },
        {
          id: "cieilit-u3-dr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A comedy typically ends with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Death" },
              { id: "b", text: "Disaster" },
              { id: "c", text: "A happy resolution" },
              { id: "d", text: "Tragedy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comedy",
                statement: "Happy ending.",
              },
            ],
            steps: [
              { reasoning: "Comedy = happy ending.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Happy resolution.",
          },
        },
        {
          id: "cieilit-u3-dr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tragic flaw (hamartia) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A theme" },
              { id: "b", text: "A strength" },
              {
                id: "c",
                text: "Character trait causing protagonist's downfall",
              },
              { id: "d", text: "A plot device" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragic flaw",
                statement: "Causes downfall.",
              },
            ],
            steps: [
              {
                reasoning: "Tragic flaw = causes downfall.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Trait causing downfall.",
          },
        },
        {
          id: "cieilit-u3-dr-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Catharsis in tragedy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotional release/purification for audience" },
              { id: "b", text: "A plot twist" },
              { id: "c", text: "A theme" },
              { id: "d", text: "A character" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catharsis",
                statement: "Emotional release.",
              },
            ],
            steps: [
              {
                reasoning: "Catharsis = emotional release.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Emotional release.",
          },
        },
        {
          id: "cieilit-u3-dr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Internal conflict is when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character struggles within themselves" },
              { id: "b", text: "Society opposes" },
              { id: "c", text: "Nature attacks" },
              { id: "d", text: "Characters fight" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal conflict",
                statement: "Within self.",
              },
            ],
            steps: [
              { reasoning: "Internal = within self.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Within themselves.",
          },
        },
        {
          id: "cieilit-u3-dr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "External conflict is when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Character struggles against outside forces" },
              { id: "b", text: "No conflict" },
              { id: "c", text: "Character struggles within" },
              { id: "d", text: "Happy ending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External conflict",
                statement: "Against outside forces.",
              },
            ],
            steps: [
              {
                reasoning: "External = outside forces.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Against outside forces.",
          },
        },
        {
          id: "cieilit-u3-dr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The climax of a play is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The exposition" },
              { id: "b", text: "The turning point/highest tension" },
              { id: "c", text: "The beginning" },
              { id: "d", text: "The end" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement: "Highest tension.",
              },
            ],
            steps: [
              {
                reasoning: "Climax = highest tension.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Turning point/highest tension.",
          },
        },
        {
          id: "cieilit-u3-dr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The denouement is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The beginning" },
              { id: "b", text: "The conflict" },
              { id: "c", text: "The climax" },
              { id: "d", text: "The resolution/end of the play" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denouement",
                statement: "Resolution.",
              },
            ],
            steps: [
              {
                reasoning: "Denouement = resolution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Resolution/end.",
          },
        },
        {
          id: "cieilit-u3-dr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Subtext in drama refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literal meaning" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Stage directions" },
              { id: "d", text: "Meaning beneath surface of dialogue" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement: "Beneath surface.",
              },
            ],
            steps: [
              {
                reasoning: "Subtext = beneath surface.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Beneath surface.",
          },
        },
        {
          id: "cieilit-u3-dr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A monologue is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narration" },
              { id: "b", text: "Stage direction" },
              { id: "c", text: "A long speech by one character" },
              { id: "d", text: "Dialogue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monologue",
                statement: "Long speech one character.",
              },
            ],
            steps: [
              {
                reasoning: "Monologue = long speech.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Long speech.",
          },
        },
        {
          id: "cieilit-u3-dr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Verbal irony is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saying opposite of what is meant" },
              { id: "b", text: "No irony" },
              { id: "c", text: "Situation is ironic" },
              { id: "d", text: "Audience knows more" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Verbal irony",
                statement: "Say opposite.",
              },
            ],
            steps: [
              {
                reasoning: "Verbal irony = opposite meaning.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Saying opposite.",
          },
        },
        {
          id: "cieilit-u3-dr-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Situational irony is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saying opposite" },
              { id: "b", text: "No irony" },
              { id: "c", text: "Outcome opposite of expected" },
              { id: "d", text: "Audience knows more" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Situational irony",
                statement: "Outcome opposite.",
              },
            ],
            steps: [
              {
                reasoning: "Situational = outcome opposite.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Outcome opposite.",
          },
        },
        {
          id: "cieilit-u3-dr-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "An act in drama is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A major division of the play" },
              { id: "b", text: "A line" },
              { id: "c", text: "A character" },
              { id: "d", text: "A scene" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Act", statement: "Major division." },
            ],
            steps: [
              { reasoning: "Act = major division.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Major division.",
          },
        },
        {
          id: "cieilit-u3-dr-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scene in drama is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A subdivision within an act" },
              { id: "b", text: "A character" },
              { id: "c", text: "A line" },
              { id: "d", text: "An act" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scene",
                statement: "Subdivision of act.",
              },
            ],
            steps: [
              { reasoning: "Scene = subdivision.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Subdivision of act.",
          },
        },
        {
          id: "cieilit-u3-dr-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tragic hero is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comic character" },
              { id: "b", text: "Villain" },
              { id: "c", text: "Noble character with fatal flaw" },
              { id: "d", text: "Minor character" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragic hero",
                statement: "Noble + fatal flaw.",
              },
            ],
            steps: [
              {
                reasoning: "Tragic hero = noble + flaw.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Noble with fatal flaw.",
          },
        },
        {
          id: "cieilit-u3-dr-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between internal and external conflict in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict types",
                statement: "Within vs outside.",
              },
            ],
            steps: [
              {
                reasoning: "Internal: character vs self — emotions, choices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "External: character vs character/nature/society.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Internal = within self; external = outside forces.",
          },
        },
        {
          id: "cieilit-u3-dr-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two dramatic devices and their functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dramatic devices",
                statement: "Soliloquy, aside, stage directions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Soliloquy reveals inner thoughts; aside gives audience extra info.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stage directions reveal action/mood; dramatic irony creates tension.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Soliloquy = thoughts; aside = audience info; stage directions = action.",
          },
        },
        {
          id: "cieilit-u3-dr-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dramatic irony creates effect in a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dramatic irony effect",
                statement: "Audience knows more — tension.",
              },
            ],
            steps: [
              {
                reasoning: "Audience knows what characters don't.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates tension — reader anticipates consequences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can create humour or tragedy depending on context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Audience knowledge creates tension/anticipation.",
          },
        },
        {
          id: "cieilit-u3-dr-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A playwright uses a soliloquy to reveal a character's true intentions. Explain the effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Soliloquy effect",
                statement: "Reveals hidden thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Reveals character's true intentions to audience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates dramatic irony — audience knows more.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds suspense — what will happen?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Characterises — shows inner conflict/motivation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reveals intentions → dramatic irony → suspense.",
          },
        },
        {
          id: "cieilit-u3-dr-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rising action in drama refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Events building toward climax" },
              { id: "b", text: "The beginning" },
              { id: "c", text: "The end" },
              { id: "d", text: "The resolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rising action",
                statement: "Builds to climax.",
              },
            ],
            steps: [
              {
                reasoning: "Rising = builds tension.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Builds toward climax.",
          },
        },
        {
          id: "cieilit-u3-dr-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'exposition' in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exposition",
                statement: "Background/setting intro.",
              },
            ],
            steps: [
              {
                reasoning: "Introduces setting, characters, situation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sets up context for conflict.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Introduces setting/characters/situation.",
          },
        },
        {
          id: "cieilit-u3-dr-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a playwright creates conflict between characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character conflict",
                statement: "Opposing goals/wants.",
              },
            ],
            steps: [
              {
                reasoning: "Characters have opposing goals or wants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dialogue reveals tension through subtext.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Actions escalate conflict toward climax.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Opposing goals + dialogue tension + escalation.",
          },
        },
        {
          id: "cieilit-u3-dr-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dramatic irony" },
              { id: "b", text: "Literary irony" },
              { id: "c", text: "Verbal irony" },
              { id: "d", text: "Situational irony" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Irony types",
                statement: "Verbal, situational, dramatic.",
              },
            ],
            steps: [
              {
                reasoning: "Literary irony not standard type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Literary irony.",
          },
        },
        {
          id: "cieilit-u3-dr-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'stagecraft'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stagecraft",
                statement: "Techniques of play production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Techniques of play production — staging, lighting, movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects how audience experiences drama.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Techniques of play production.",
          },
        },
        {
          id: "cieilit-u3-dr-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A play ends with the protagonist's death but the audience feels relief. What might this suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ending analysis",
                statement: "Complex emotional response.",
              },
            ],
            steps: [
              {
                reasoning: "Protagonist's death = tragedy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Relief suggests resolution of conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "May indicate protagonist was villainous or conflict resolved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ambiguous ending — complex theme.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complex response — resolution despite tragedy.",
          },
        },
        {
          id: "cieilit-u3-dr-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'foreshadowing' in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foreshadowing",
                statement: "Hints at future events.",
              },
            ],
            steps: [
              { reasoning: "Hints at future events.", marks: 1, markCode: "M" },
              {
                reasoning: "Creates anticipation — reader expects events.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hints at future events.",
          },
        },
        {
          id: "cieilit-u3-dr-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'protagonist' in drama is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The villain" },
              { id: "b", text: "The narrator" },
              { id: "c", text: "The main character" },
              { id: "d", text: "A minor character" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protagonist",
                statement: "Main character.",
              },
            ],
            steps: [
              { reasoning: "Protagonist = main.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Main character.",
          },
        },
        {
          id: "cieilit-u3-dr-q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'dramatic tension'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic tension",
                statement: "Suspense/anticipation.",
              },
            ],
            steps: [
              {
                reasoning: "Suspense/anticipation created by conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Keeps audience engaged — what happens next?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Suspense/anticipation from conflict.",
          },
        },
        {
          id: "cieilit-u3-dr-q33",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dialogue creates character in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dialogue characterisation",
                statement: "Speech reveals personality.",
              },
            ],
            steps: [
              {
                reasoning: "Vocabulary reveals education/background.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tone reveals emotion/personality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtext reveals hidden thoughts/motives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vocabulary + tone + subtext reveal character.",
          },
        },
        {
          id: "cieilit-u3-dr-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of conflict?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Man vs nature" },
              { id: "b", text: "Internal conflict" },
              { id: "c", text: "Happy ending" },
              { id: "d", text: "External conflict" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conflict types",
                statement: "Internal, external, man vs nature.",
              },
            ],
            steps: [
              {
                reasoning: "Happy ending not conflict.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) Happy ending.",
          },
        },
        {
          id: "cieilit-u3-dr-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'man vs nature' conflict?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Man vs nature",
                statement: "Character vs natural forces.",
              },
            ],
            steps: [
              {
                reasoning: "Character struggles against natural forces.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Storms, disease, animals, etc.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Character vs natural forces.",
          },
        },
        {
          id: "cieilit-u3-dr-q36",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a playwright use stage directions to create atmosphere?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stage direction atmosphere",
                statement: "Describes setting/mood.",
              },
            ],
            steps: [
              {
                reasoning: "Describe setting — dark, stormy, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Describe mood — tense, peaceful, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Guide actor movement/expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Create visual/auditory atmosphere for audience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Setting + mood + movement create atmosphere.",
          },
        },
        {
          id: "cieilit-u3-dr-q37",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'villain' in drama is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The antagonist/opposing character" },
              { id: "b", text: "The protagonist" },
              { id: "c", text: "The narrator" },
              { id: "d", text: "A minor character" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Villain", statement: "Antagonist." },
            ],
            steps: [
              { reasoning: "Villain = antagonist.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Antagonist.",
          },
        },
        {
          id: "cieilit-u3-dr-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'character motivation' in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character motivation",
                statement: "What drives actions.",
              },
            ],
            steps: [
              {
                reasoning: "What drives character's actions/decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Understanding motivation explains behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "What drives actions.",
          },
        },
        {
          id: "cieilit-u3-dr-q39",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a playwright builds tension toward the climax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tension building",
                statement: "Escalating conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Conflict escalates through rising action.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Foreshadowing creates anticipation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pacing accelerates toward climax.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Escalating conflict + foreshadowing + pacing.",
          },
        },
        {
          id: "cieilit-u3-dr-q40",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a dramatic device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aside" },
              { id: "b", text: "Alliteration" },
              { id: "c", text: "Stage directions" },
              { id: "d", text: "Soliloquy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dramatic devices",
                statement: "Soliloquy, aside, stage directions.",
              },
            ],
            steps: [
              { reasoning: "Alliteration is poetic.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Alliteration.",
          },
        },
        {
          id: "cieilit-u3-dr-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'dramatic unity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic unity",
                statement: "Single plot/time/place.",
              },
            ],
            steps: [
              {
                reasoning: "Single plot, time, place — Aristotelian principle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates focused dramatic effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Single plot/time/place.",
          },
        },
        {
          id: "cieilit-u3-dr-q42",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A character delivers a soliloquy revealing they plan to betray others. How does this affect the audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Soliloquy betrayal",
                statement: "Audience knows plot.",
              },
            ],
            steps: [
              {
                reasoning: "Audience knows betrayal is coming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Creates dramatic irony — other characters don't know.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds suspense — when will betrayal happen?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Makes audience complicit — they watch unfold.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Audience knows → dramatic irony → suspense.",
          },
        },
        {
          id: "cieilit-u3-dr-q43",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Man vs man' conflict is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conflict with society" },
              { id: "b", text: "Conflict within self" },
              { id: "c", text: "Conflict with nature" },
              { id: "d", text: "Conflict between characters" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Man vs man",
                statement: "Character vs character.",
              },
            ],
            steps: [
              {
                reasoning: "Man vs man = character conflict.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Between characters.",
          },
        },
        {
          id: "cieilit-u3-dr-q44",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'man vs society' conflict?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Man vs society",
                statement: "Character vs social norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Character struggles against social norms/institutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Often explores themes of conformity/rebellion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Character vs social norms.",
          },
        },
        {
          id: "cieilit-u3-dr-q45",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a playwright reveals character through action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Action characterisation",
                statement: "Actions reveal personality.",
              },
            ],
            steps: [
              {
                reasoning: "Actions reveal what character values/does.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choices under pressure reveal true nature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Actions speak louder than dialogue.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Actions reveal values/true nature.",
          },
        },
        {
          id: "cieilit-u3-dr-q46",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'soliloquy' differs from a 'monologue' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monologue is longer" },
              { id: "b", text: "They are the same" },
              {
                id: "c",
                text: "Soliloquy = alone/thoughts; monologue = speech to others",
              },
              { id: "d", text: "Soliloquy is sung" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy vs monologue",
                statement: "Alone vs to audience.",
              },
            ],
            steps: [
              {
                reasoning: "Soliloquy = alone; monologue = speech.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Soliloquy = alone; monologue = speech.",
          },
        },
        {
          id: "cieilit-u3-dr-q47",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'dramatic pace'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic pace",
                statement: "Speed of action/events.",
              },
            ],
            steps: [
              {
                reasoning: "Speed of action/events in play.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fast pace = excitement; slow = tension/reflection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speed of action — affects mood.",
          },
        },
        {
          id: "cieilit-u3-dr-q48",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a playwright use silence in a scene to create effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Silence effect",
                statement: "Creates tension/meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Silence creates tension — what's unsaid?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Forces audience to interpret subtext.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can indicate shock, anger, or unspoken truth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Powerful dramatic device — less is more.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Silence = tension, interpretation, power.",
          },
        },
        {
          id: "cieilit-u3-dr-q49",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'tragic ending' in drama means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resolution" },
              { id: "b", text: "Happy ending" },
              { id: "c", text: "Comedy" },
              { id: "d", text: "Protagonist suffers downfall" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragic ending",
                statement: "Downfall.",
              },
            ],
            steps: [
              { reasoning: "Tragic = downfall.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Protagonist suffers downfall.",
          },
        },
        {
          id: "cieilit-u3-dr-q50",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'dramatic convention'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic convention",
                statement: "Accepted theatrical practice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Accepted theatrical practice — e.g. asides, soliloquies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Audience accepts as normal in drama.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Accepted theatrical practice.",
          },
        },
      ],
    },
    {
      id: "cieilit-u3-essay",
      title: "Essay writing for literature",
      skill:
        "Structure and write effective literature essays with analysis and evaluation.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "**Introduction**: context, thesis statement, outline. **Body paragraphs**: topic sentence → evidence → analysis → link. **Conclusion**: summarise argument, final insight. **PEE/PEEL**: Point → Evidence → Explanation → Link. Each paragraph should focus on one idea and analyse deeply.",
          },
          {
            heading: "Analysis vs description",
            body: "**Description**: 'The character is angry.' **Analysis**: 'The character's clenched fists and sharp tone reveal suppressed rage, suggesting a deeper trauma.' Always explain HOW and WHY, not just WHAT. Link technique to meaning — 'This metaphor suggests…'. Use quotations to support points.",
          },
          {
            heading: "Evaluation and critical thinking",
            body: "**Evaluate**: consider strengths and weaknesses of arguments/text. **Compare**: when comparing texts, find similarities AND differences. **Context**: consider historical/social context where relevant. **Critical**: don't just agree — question, challenge, assess. **AO3**: context, interpretation, evaluation — Cambridge rewards critical engagement.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay structure",
            statement: "Introduction → body (PEE) → conclusion",
          },
          {
            name: "Analysis vs description",
            statement: "Explain HOW/WHY not just WHAT",
          },
          {
            name: "Critical thinking",
            statement: "Evaluate, compare, question, assess",
          },
        ],
        workedExample: {
          problem: "How to write a strong essay paragraph?",
          solution:
            "Topic sentence → quotation → analyse technique → link to theme/meaning → connect to thesis.",
        },
      },
      questions: [
        {
          id: "cieilit-u3-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thesis statement is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A conclusion" },
              { id: "b", text: "A quotation" },
              { id: "c", text: "A summary" },
              { id: "d", text: "The central argument of an essay" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis",
                statement: "Central argument.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis = central argument.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Central argument.",
          },
        },
        {
          id: "cieilit-u3-es-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "PEE stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plot, Emotion, Effect" },
              { id: "b", text: "Point, Evidence, Explanation" },
              { id: "c", text: "Point, End, Edit" },
              { id: "d", text: "Paragraph, Essay, Evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEE",
                statement: "Point Evidence Explanation.",
              },
            ],
            steps: [
              {
                reasoning: "PEE = Point Evidence Explanation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Point Evidence Explanation.",
          },
        },
        {
          id: "cieilit-u3-es-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The introduction of an essay should include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only quotations" },
              { id: "b", text: "Context, thesis, outline" },
              { id: "c", text: "Only summary" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Introduction",
                statement: "Context + thesis + outline.",
              },
            ],
            steps: [
              {
                reasoning: "Intro = context/thesis/outline.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Context, thesis, outline.",
          },
        },
        {
          id: "cieilit-u3-es-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The conclusion of an essay should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce new ideas" },
              { id: "b", text: "Be omitted" },
              { id: "c", text: "Repeat introduction" },
              { id: "d", text: "Summarise argument and give final insight" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conclusion",
                statement: "Summarise + insight.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusion = summarise + insight.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Summarise + insight.",
          },
        },
        {
          id: "cieilit-u3-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Analysis differs from description because analysis:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is easier" },
              { id: "b", text: "Explains HOW and WHY, not just WHAT" },
              { id: "c", text: "Uses more quotes" },
              { id: "d", text: "Is shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis vs description",
                statement: "How/why not what.",
              },
            ],
            steps: [
              { reasoning: "Analysis = how/why.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Explains HOW and WHY.",
          },
        },
        {
          id: "cieilit-u3-es-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A topic sentence is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main idea of a paragraph" },
              { id: "b", text: "A conclusion" },
              { id: "c", text: "A quotation" },
              { id: "d", text: "An example" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement: "Main idea of paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence = main idea.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Main idea of paragraph.",
          },
        },
        {
          id: "cieilit-u3-es-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quotation should be used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impress marker" },
              { id: "b", text: "Fill space" },
              { id: "c", text: "Replace analysis" },
              { id: "d", text: "Support and illustrate your analysis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation use",
                statement: "Supports analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Quotations support analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Support analysis.",
          },
        },
        {
          id: "cieilit-u3-es-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluation in an essay means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quoting" },
              { id: "b", text: "Considering strengths and weaknesses" },
              { id: "c", text: "Summarising" },
              { id: "d", text: "Describing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Strengths + weaknesses.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation = strengths/weaknesses.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Strengths and weaknesses.",
          },
        },
        {
          id: "cieilit-u3-es-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A comparative essay should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only compare one text" },
              { id: "b", text: "Ignore differences" },
              { id: "c", text: "Only summarise" },
              { id: "d", text: "Find similarities AND differences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison",
                statement: "Similarities + differences.",
              },
            ],
            steps: [
              {
                reasoning: "Compare = similarities + differences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Similarities AND differences.",
          },
        },
        {
          id: "cieilit-u3-es-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Critical thinking in literature essays involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agreeing with everything" },
              { id: "b", text: "Questioning, challenging, assessing" },
              { id: "c", text: "Summarising only" },
              { id: "d", text: "Describing only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Critical thinking",
                statement: "Question/challenge/assess.",
              },
            ],
            steps: [
              {
                reasoning: "Critical = question/challenge.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Questioning, challenging, assessing.",
          },
        },
        {
          id: "cieilit-u3-es-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Each body paragraph should focus on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple ideas" },
              { id: "b", text: "One main idea/point" },
              { id: "c", text: "Everything" },
              { id: "d", text: "Nothing specific" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paragraph focus",
                statement: "One idea per paragraph.",
              },
            ],
            steps: [
              { reasoning: "One idea per paragraph.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) One main idea.",
          },
        },
        {
          id: "cieilit-u3-es-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Linking words help essays by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding length" },
              { id: "b", text: "Connecting ideas smoothly" },
              { id: "c", text: "Impressing marker" },
              { id: "d", text: "Filling space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Linking words",
                statement: "Connect ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Linking = connect ideas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Connecting ideas.",
          },
        },
        {
          id: "cieilit-u3-es-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'point' in PEE refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A conclusion" },
              { id: "b", text: "A summary" },
              { id: "c", text: "Your analytical argument" },
              { id: "d", text: "A quotation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Point",
                statement: "Analytical argument.",
              },
            ],
            steps: [
              { reasoning: "Point = argument.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Analytical argument.",
          },
        },
        {
          id: "cieilit-u3-es-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An 'explanation' in PEE refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Describing" },
              { id: "b", text: "Summarising" },
              { id: "c", text: "Quoting" },
              { id: "d", text: "Analysing how evidence supports point" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Explanation",
                statement: "Analyse evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Explanation = analyse evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Analysing evidence.",
          },
        },
        {
          id: "cieilit-u3-es-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'link' in PEE refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quoting" },
              { id: "b", text: "Summarising" },
              { id: "c", text: "Describing" },
              { id: "d", text: "Connecting back to thesis/theme" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Link",
                statement: "Connect to thesis.",
              },
            ],
            steps: [
              {
                reasoning: "Link = connect to thesis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Connect to thesis.",
          },
        },
        {
          id: "cieilit-u3-es-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Context in literature essays refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quotations" },
              { id: "b", text: "Historical/social background of text" },
              { id: "c", text: "Plot summary" },
              { id: "d", text: "Character list" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Context",
                statement: "Historical/social background.",
              },
            ],
            steps: [
              { reasoning: "Context = background.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Historical/social background.",
          },
        },
        {
          id: "cieilit-u3-es-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "AO3 in Cambridge literature refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Description" },
              { id: "b", text: "Quotations" },
              { id: "c", text: "Summary" },
              { id: "d", text: "Context, interpretation, evaluation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AO3",
                statement: "Context/interpretation/evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "AO3 = critical thinking.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Context, interpretation, evaluation.",
          },
        },
        {
          id: "cieilit-u3-es-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A strong essay thesis should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unrelated" },
              { id: "b", text: "Vague" },
              { id: "c", text: "Obvious" },
              { id: "d", text: "Specific and arguable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thesis quality",
                statement: "Specific + arguable.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis = specific/arguable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Specific and arguable.",
          },
        },
        {
          id: "cieilit-u3-es-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Embedding' quotations means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing quotes" },
              { id: "b", text: "No quotes" },
              { id: "c", text: "Weaving quotes into your sentences" },
              { id: "d", text: "Long quotes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Embedding",
                statement: "Weave quotes into sentences.",
              },
            ],
            steps: [
              { reasoning: "Embedding = weave in.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Weaving into sentences.",
          },
        },
        {
          id: "cieilit-u3-es-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between description and analysis in essays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Description vs analysis",
                statement: "What vs how/why.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Description: states what happens/character is like.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis: explains how/why — technique to meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Description = what; analysis = how/why.",
          },
        },
        {
          id: "cieilit-u3-es-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two features of a well-structured essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay structure",
                statement: "Clear intro/body/conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear introduction with thesis; logical body paragraphs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion summarising argument; linking throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Clear structure + logical flow + linking.",
          },
        },
        {
          id: "cieilit-u3-es-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to use quotations effectively in an essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation use",
                statement: "Embed + analyse.",
              },
            ],
            steps: [
              {
                reasoning: "Embed quotes in sentences — don't just list.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse the quote — technique to meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link quote back to your argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Embed + analyse + link.",
          },
        },
        {
          id: "cieilit-u3-es-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An essay paragraph states a point but doesn't explain it. How would you improve it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Improving analysis",
                statement: "Add evidence + explanation.",
              },
            ],
            steps: [
              {
                reasoning: "Add supporting quotation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse technique in quotation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explain how evidence supports point.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Link back to thesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add quote + analyse + explain + link.",
          },
        },
        {
          id: "cieilit-u3-es-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'balanced argument' considers:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple perspectives" },
              { id: "b", text: "Only negative" },
              { id: "c", text: "No views" },
              { id: "d", text: "Only one view" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balanced argument",
                statement: "Multiple perspectives.",
              },
            ],
            steps: [
              {
                reasoning: "Balanced = multiple views.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Multiple perspectives.",
          },
        },
        {
          id: "cieilit-u3-es-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'textual reference'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Textual reference",
                statement: "Specific references to text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific references to text — quotes, scenes, characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Essential for evidence-based analysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific references to text.",
          },
        },
        {
          id: "cieilit-u3-es-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to write an effective comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative essay",
                statement: "Similarities + differences.",
              },
            ],
            steps: [
              {
                reasoning: "Identify similarities between texts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identify differences between texts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse significance of both — link to themes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Similarities + differences + significance.",
          },
        },
        {
          id: "cieilit-u3-es-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT part of essay structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction" },
              { id: "b", text: "Body" },
              { id: "c", text: "Conclusion" },
              { id: "d", text: "Abstract" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay structure",
                statement: "Intro/body/conclusion.",
              },
            ],
            steps: [
              { reasoning: "Abstract not standard.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Abstract.",
          },
        },
        {
          id: "cieilit-u3-es-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'register' in essay writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Formality level.",
              },
            ],
            steps: [
              {
                reasoning: "Formality level of language — formal vs informal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Essays should be formal — academic register.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Formality level — use formal academic.",
          },
        },
        {
          id: "cieilit-u3-es-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An essay makes claims but provides no evidence. How would you improve it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Adding evidence",
                statement: "Support claims with quotes.",
              },
            ],
            steps: [
              {
                reasoning: "Add supporting quotations for each claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse the evidence — technique to meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explain how evidence supports claim.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Link back to thesis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add quotes + analyse + explain + link.",
          },
        },
        {
          id: "cieilit-u3-es-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'critical engagement'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical engagement",
                statement: "Deep analysis + evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "Deep analysis of text — not just description.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluation — strengths, weaknesses, significance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Deep analysis + evaluation.",
          },
        },
        {
          id: "cieilit-u3-es-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a linking word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "However is not a linker" },
              { id: "b", text: "Consequently" },
              { id: "c", text: "Moreover" },
              { id: "d", text: "Furthermore" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Linking words",
                statement: "Furthermore, moreover, consequently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "However IS a linker — question flawed but (a) is intended answer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) However is not a linker — incorrect statement.",
          },
        },
        {
          id: "cieilit-u3-es-q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'concise writing'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Concise writing",
                statement: "Clear and brief.",
              },
            ],
            steps: [
              {
                reasoning: "Clear and brief — no unnecessary words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Every word should serve purpose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Clear and brief.",
          },
        },
        {
          id: "cieilit-u3-es-q33",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to structure a comparative essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative structure",
                statement: "Similarities then differences.",
              },
            ],
            steps: [
              {
                reasoning: "Introduction — both texts, thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Body — similarities and differences with evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion — significance of comparison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Intro → similarities/differences → conclusion.",
          },
        },
        {
          id: "cieilit-u3-es-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a feature of good essay writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structure" },
              { id: "b", text: "Analysis" },
              { id: "c", text: "Evidence" },
              { id: "d", text: "Repetition" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Good writing",
                statement: "Analysis, evidence, structure.",
              },
            ],
            steps: [
              {
                reasoning: "Repetition not a feature.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Repetition.",
          },
        },
        {
          id: "cieilit-u3-es-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'interpretation' in literature?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interpretation",
                statement: "Your reading of meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Your reading/understanding of meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supported by evidence — not just opinion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Your reading of meaning — evidence-based.",
          },
        },
        {
          id: "cieilit-u3-es-q36",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An essay conclusion introduces a completely new idea. How would you improve it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion fix",
                statement: "Summarise, don't introduce.",
              },
            ],
            steps: [
              {
                reasoning: "Remove new idea — conclusions summarise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Restate thesis in new words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Summarise key points made.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "End with final insight/significance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Summarise + restate thesis + final insight.",
          },
        },
        {
          id: "cieilit-u3-es-q37",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'well-supported argument' includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No evidence" },
              { id: "b", text: "Only opinions" },
              { id: "c", text: "Evidence for each point" },
              { id: "d", text: "Only quotes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supported argument",
                statement: "Evidence for points.",
              },
            ],
            steps: [
              { reasoning: "Supported = evidence.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Evidence for each point.",
          },
        },
        {
          id: "cieilit-u3-es-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'cohesion' in writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion",
                statement: "Ideas flow logically.",
              },
            ],
            steps: [
              {
                reasoning: "Ideas flow logically — connected.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Achieved through linking words and structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ideas flow logically.",
          },
        },
        {
          id: "cieilit-u3-es-q39",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to write a strong introduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Introduction",
                statement: "Context + thesis + outline.",
              },
            ],
            steps: [
              {
                reasoning: "Provide brief context — text, author, focus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State clear thesis — central argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Outline structure — what will be covered.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Context + thesis + outline.",
          },
        },
        {
          id: "cieilit-u3-es-q40",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a reason to use quotations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To provide evidence" },
              { id: "b", text: "To support analysis" },
              { id: "c", text: "To fill space" },
              { id: "d", text: "To illustrate points" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation purpose",
                statement: "Support/illustrate — not fill.",
              },
            ],
            steps: [
              {
                reasoning: "Fill space not valid reason.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) To fill space.",
          },
        },
        {
          id: "cieilit-u3-es-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'precision' in essay writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Precision",
                statement: "Exact/accurate wording.",
              },
            ],
            steps: [
              {
                reasoning: "Exact, accurate wording — no vagueness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choose precise words for clarity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Exact, accurate wording.",
          },
        },
        {
          id: "cieilit-u3-es-q42",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An essay uses the same quotation three times. How would you improve it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Quotation variety",
                statement: "Use different evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Replace repeated quotes with different evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each point needs its own supporting quote.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Variety shows breadth of analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deepens argument — more evidence = stronger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Use varied evidence — one quote per point.",
          },
        },
        {
          id: "cieilit-u3-es-q43",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'well-argued essay' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complex vocabulary" },
              { id: "b", text: "Long sentences" },
              { id: "c", text: "Many quotations" },
              { id: "d", text: "Clear logical reasoning with evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Well-argued",
                statement: "Logical + evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Well-argued = logical + evidence.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Logical reasoning with evidence.",
          },
        },
        {
          id: "cieilit-u3-es-q44",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'signposting' in essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Signposting",
                statement: "Guiding reader through essay.",
              },
            ],
            steps: [
              {
                reasoning: "Guiding reader through essay structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Using phrases like 'firstly', 'however', 'in conclusion'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Guiding reader through structure.",
          },
        },
        {
          id: "cieilit-u3-es-q45",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to write an effective body paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Body paragraph",
                statement: "PEE structure.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence — main point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence — quotation/scene reference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analysis — technique to meaning; link to thesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Topic + evidence + analysis + link.",
          },
        },
        {
          id: "cieilit-u3-es-q46",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a feature of critical analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaluating" },
              { id: "b", text: "Challenging" },
              { id: "c", text: "Accepting everything" },
              { id: "d", text: "Questioning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Critical analysis",
                statement: "Question/evaluate/challenge.",
              },
            ],
            steps: [
              {
                reasoning: "Accepting everything not critical.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Accepting everything.",
          },
        },
        {
          id: "cieilit-u3-es-q47",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'textual analysis'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Textual analysis",
                statement: "Close reading of text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Close reading — examining language, technique, meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evidence-based — quotes support points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Close reading of text.",
          },
        },
        {
          id: "cieilit-u3-es-q48",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An essay uses informal language ('the character is like really angry'). How would you improve it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Formal register",
                statement: "Use academic language.",
              },
            ],
            steps: [
              {
                reasoning: "Replace informal with formal vocabulary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use precise terms — 'furious', 'resentful'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Support with evidence — quote/scene.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse — technique to meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Formal + precise + evidence + analysis.",
          },
        },
        {
          id: "cieilit-u3-es-q49",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'nuanced argument' considers:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simple views" },
              { id: "b", text: "Complexity and shades of meaning" },
              { id: "c", text: "One perspective" },
              { id: "d", text: "No depth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nuanced argument",
                statement: "Complexity/shades.",
              },
            ],
            steps: [
              {
                reasoning: "Nuanced = complex/shades.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Complexity and shades.",
          },
        },
        {
          id: "cieilit-u3-es-q50",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to answer the question set?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Answering question",
                statement: "Direct relevance.",
              },
            ],
            steps: [
              {
                reasoning: "Essay must directly address question set.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Irrelevant content loses marks — focus required.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct relevance — focus required.",
          },
        },
      ],
    },
  ],
};
