import type { Lesson } from "../../../types.ts";

export const lesson512: Lesson = {
  id: "cial-e-u5-lesson-5-2",
  code: "5-2",
  title: "Structure and genre in drama",
  goal: "I CAN analyse dramatic structure and genre conventions.",
  standards: ["9093: drama analysis"],
  vocabulary: [
    {
      term: "Tragedy",
      definition:
        "Drama ending in disaster, often exploring fate and human flaw.",
    },
    {
      term: "Comedy",
      definition: "Drama with humorous elements, often ending happily.",
    },
    {
      term: "Tragic flaw",
      definition: "Character defect leading to downfall (hamartia).",
    },
    {
      term: "Catharsis",
      definition: "Emotional purification through tragic experience.",
    },
    { term: "Denouement", definition: "Final resolution after climax." },
    {
      term: "Rising action",
      definition: "Sequence building tension toward climax.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u5-structure",
      title: "Dramatic structure",
      skill:
        "Analyse the structure of plays including acts, scenes and climax.",
      lesson: {
        sections: [
          {
            heading: "Classical structure",
            body: "Prologue/exposition → rising action → climax → falling action → denouement. Acts and scenes organize time and space. Entrances/exits mark transitions.",
          },
          {
            heading: "Climax and resolution",
            body: "Climax: turning point of maximum tension. Resolution: conflict resolved (tragedy: disastrously; comedy: happily). Denouement: aftermath and reflection.",
          },
          {
            heading: "Time and space",
            body: "Unity of time: action within 24 hours (classical). Unity of place: single location. Modern drama breaks these rules for effect — fragmented time, multiple locations.",
          },
        ],
        keyFormulas: [
          {
            name: "Dramatic structure",
            statement: "Exposition→rising→climax→falling→denouement.",
          },
        ],
        workedExample: {
          problem: "How does Shakespeare structure Hamlet?",
          solution:
            "Five acts: exposition (ghost) → rising (play within play) → climax (duel) → falling (deaths) → denouement (Fortinbras).",
        },
      },
      questions: [
        {
          id: "cial-e-u5-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the climax of a play?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Point of maximum tension and turning point" },
              { id: "b", text: "The beginning" },
              { id: "c", text: "The ending" },
              { id: "d", text: "A scene change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement: "Maximum tension, turning point.",
              },
            ],
            steps: [
              {
                reasoning: "Climax = peak tension.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Maximum tension/turning point",
            commonErrors: ["Confusing with resolution."],
          },
        },
        {
          id: "cial-e-u5-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'rising action'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rising action",
                statement: "Sequence building tension toward climax.",
              },
            ],
            steps: [
              { reasoning: "Builds tension.", marks: 1, markCode: "AO1" },
              { reasoning: "Leads to climax.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Tension-building sequence toward climax.",
            commonErrors: ["Saying it's the resolution."],
          },
        },
        {
          id: "cial-e-u5-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does dramatic structure create effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement:
                  "Classical structure creates suspense and satisfaction.",
              },
            ],
            steps: [
              {
                reasoning: "Rising action builds anticipation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Climax delivers emotional peak.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Denouement provides resolution.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Structure builds tension→peak→resolution.",
            commonErrors: ["Describing without effect."],
          },
        },
        {
          id: "cial-e-u5-st-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Dramatic structure.",
          parts: [
            { label: "a", prompt: "Define climax.", marks: 1 },
            { label: "b", prompt: "What is rising action?", marks: 2 },
            {
              label: "c",
              prompt: "How does structure create effect?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Analyse structure in a play you know.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Climax+rising action+effect+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Max tension.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Builds tension.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Leads to climax.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Anticipation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Emotional peak.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Resolution.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Structure identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evidence used.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect analysed.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Clear judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) climax (b) rising action (c) tension→peak→resolution (d) structure analysis",
          },
        },
      ],
    },
    {
      id: "cial-e-u5-genre",
      title: "Genre in drama",
      skill: "Analyse tragedy, comedy and other dramatic genres.",
      lesson: {
        sections: [
          {
            heading: "Tragedy",
            body: "Protagonist falls from high estate due to tragic flaw (hamartia). Ends in death/disaster. Explores fate, free will, human weakness. Examples: Hamlet, Macbeth, Othello, Death of a Salesman.",
          },
          {
            heading: "Comedy",
            body: "Humorous elements, often ends happily. Types: comedy of manners (social satire), romantic comedy, farce (physical comedy). Explores social conventions, misunderstandings, reconciliation.",
          },
          {
            heading: "Other genres",
            body: "Tragicomedy: mixes tragic and comic elements. Absurdist drama: meaningless existence, fragmented language. Historical drama: period events. Problem play: social issues.",
          },
        ],
        keyFormulas: [
          {
            name: "Drama genres",
            statement:
              "Tragedy=downfall; comedy=happy; tragicomedy=mixed; absurdist=meaningless.",
          },
        ],
        workedExample: {
          problem: "What is hamartia in tragedy?",
          solution:
            "Tragic flaw — character defect leading to downfall (e.g., Macbeth's ambition).",
        },
      },
      questions: [
        {
          id: "cial-e-u5-gn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'hamartia'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tragic flaw leading to downfall" },
              { id: "b", text: "Happy ending" },
              { id: "c", text: "Comic relief" },
              { id: "d", text: "Stage direction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hamartia",
                statement: "Tragic flaw causing downfall.",
              },
            ],
            steps: [
              {
                reasoning: "Hamartia = tragic flaw.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Tragic flaw",
            commonErrors: ["Confusing with catharsis."],
          },
        },
        {
          id: "cial-e-u5-gn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is catharsis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catharsis",
                statement: "Emotional purification through tragic experience.",
              },
            ],
            steps: [
              { reasoning: "Emotional release.", marks: 1, markCode: "AO1" },
              { reasoning: "Through tragedy.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Emotional purification via tragedy.",
            commonErrors: ["Saying it's comedy."],
          },
        },
        {
          id: "cial-e-u5-gn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare tragedy and comedy in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre",
                statement: "Tragedy=downfall+flaw; comedy=humour+happy ending.",
              },
            ],
            steps: [
              {
                reasoning: "Tragedy: downfall, flaw, disaster.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comedy: humour, happy ending.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different purposes/effects.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Tragedy=downfall; comedy=humour+happy.",
            commonErrors: ["Only describing one genre."],
          },
        },
        {
          id: "cial-e-u5-gn-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Genre in drama.",
          parts: [
            { label: "a", prompt: "Define hamartia.", marks: 1 },
            { label: "b", prompt: "What is catharsis?", marks: 2 },
            { label: "c", prompt: "Compare tragedy and comedy.", marks: 3 },
            {
              label: "d",
              prompt: "Analyse genre in a play you know.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre",
                statement: "Hamartia+catharsis+comparison+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tragic flaw.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Emotional purification.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Through tragedy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Tragedy=downfall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Comedy=humour+happy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Different effects.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Genre identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evidence used.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Conventions analysed.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Clear judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) hamartia (b) catharsis (c) tragedy vs comedy (d) genre analysis",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u5-genre-notes",
      title: "Drama structure and genre — revision notes",
      summary: "Classical structure, tragedy, comedy and dramatic genres.",
      sections: [
        {
          heading: "Structure",
          body: "Exposition→rising action→climax→falling→denouement. Acts/scenes organize. Climax = max tension.",
        },
        {
          heading: "Genre",
          body: "Tragedy: hamartia (flaw)→downfall→catharsis. Comedy: humour→happy ending. Tragicomedy, absurdist, problem play.",
        },
        {
          heading: "Exam checklist",
          body: "Can you identify structure? Define hamartia/catharsis? Compare genres? Analyse genre conventions?",
        },
      ],
    },
  ],
};
