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
              { id: "a", text: "The beginning" },
              { id: "b", text: "Point of maximum tension and turning point" },
              { id: "c", text: "The ending" },
              { id: "d", text: "A scene change" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-e-u5-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What follows the climax in classical dramatic structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rising action" },
              { id: "b", text: "Exposition" },
              { id: "c", text: "The prologue" },
              { id: "d", text: "Falling action and denouement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Falling action",
                statement: "Sequence after the climax leading to resolution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "After the climax comes falling action, then the denouement.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Falling action and denouement",
            commonErrors: ["Placing rising action after the climax."],
          },
        },
        {
          id: "cial-e-u5-st-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'unity of place' require in classical drama?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The action lasts one hour" },
              { id: "b", text: "The action is confined to a single location" },
              { id: "c", text: "The play has one character" },
              { id: "d", text: "The play has one act" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Unity of place",
                statement: "Classical rule: single location for the action.",
              },
            ],
            steps: [
              {
                reasoning: "Unity of place means one setting throughout.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Single location",
            commonErrors: ["Confusing with unity of time."],
          },
        },
        {
          id: "cial-e-u5-st-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the denouement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening exposition" },
              {
                id: "b",
                text: "The final resolution and aftermath after the climax",
              },
              { id: "c", text: "A scene transition" },
              { id: "d", text: "The moment of highest tension" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denouement",
                statement: "Final resolution and reflection after the climax.",
              },
            ],
            steps: [
              {
                reasoning: "Denouement = aftermath and resolution.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Final resolution and aftermath",
            commonErrors: ["Confusing with climax."],
          },
        },
        {
          id: "cial-e-u5-st-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a modern play deliberately break the unity of time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because audiences prefer short plays" },
              {
                id: "b",
                text: "Fragmented time can create disorientation and reflect modern experience",
              },
              { id: "c", text: "To reduce the number of scenes" },
              { id: "d", text: "It is always a mistake by the playwright" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Broken unity",
                statement:
                  "Fragmented time creates dramatic effect in modern drama.",
              },
            ],
            steps: [
              {
                reasoning: "Modern plays break classical rules deliberately.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fragmented time can disorient the audience and mirror modern experience.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(b)** Deliberate effect — disorientation, modern experience",
            commonErrors: ["Assuming rule-breaking is always an error."],
          },
        },
        {
          id: "cial-e-u5-st-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the main function of the rising action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To provide comic relief throughout" },
              { id: "b", text: "To introduce every character in the first scene" },
              {
                id: "c",
                text: "To build tension and complications towards the climax",
              },
              { id: "d", text: "To resolve the central conflict quickly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rising action",
                statement: "Builds tension and complications towards the climax.",
              },
            ],
            steps: [
              {
                reasoning: "Rising action escalates conflict and tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Its purpose is to lead into the climax.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(c)** Builds tension towards the climax",
            commonErrors: ["Confusing it with the resolution."],
          },
        },
        {
          id: "cial-e-u5-st-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which sequence gives the correct order of classical dramatic structure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Denouement → climax → rising action → exposition",
              },
              {
                id: "b",
                text: "Climax → rising action → exposition → denouement",
              },
              {
                id: "c",
                text: "Falling action → exposition → climax → rising action",
              },
              {
                id: "d",
                text: "Exposition → rising action → climax → falling action → denouement",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classical structure",
                statement:
                  "Exposition → rising action → climax → falling action → denouement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The correct order begins with exposition and ends with denouement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Only option (b) preserves the full sequence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Exposition→rising→climax→falling→denouement",
            commonErrors: ["Reversing the order of climax and falling action."],
          },
        },
        {
          id: "cial-e-u5-st-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A play is divided into 3 acts, each containing 4 scenes. How many scenes does the play contain in total?",
          response: {
            type: "numeric",
            parts: [{ label: "scenes", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Acts and scenes",
                statement: "Total scenes = acts × scenes per act.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply acts by scenes per act.",
                working: "3 \\times 4 = 12",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "12",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cial-e-u5-st-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A structured question has four parts worth 1, 2, 3 and 4 marks. Enter the total marks and the marks carried by the largest part.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 10 },
              { label: "largest", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Part marks",
                statement: "Part marks must sum to the question total.",
              },
            ],
            steps: [
              {
                reasoning: "Add all part marks for the total.",
                working: "1 + 2 + 3 + 4 = 10",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Identify the largest single part.",
                working: "\\max(1, 2, 3, 4) = 4",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 10, largest = 4",
            commonErrors: ["Forgetting one part when summing."],
          },
        },
        {
          id: "cial-e-u5-st-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Shakespearean sonnet has 14 lines arranged as 3 quatrains and 1 couplet. How many lines are contained in the three quatrains?",
          response: {
            type: "numeric",
            parts: [{ label: "lines", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Sonnet form",
                statement:
                  "Shakespearean sonnet: 3 quatrains (4 lines each) + couplet.",
              },
            ],
            steps: [
              {
                reasoning: "Three quatrains of four lines each.",
                working: "3 \\times 4 = 12",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "12",
            commonErrors: [
              "Answering 14 (total lines) instead of quatrain lines.",
            ],
          },
        },
        {
          id: "cial-e-u5-st-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A markscheme contains five steps worth 1, 2, 1, 3 and 2 marks. Enter the total marks, the number of steps, and the largest single step.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 9 },
              { label: "steps", answer: 5 },
              { label: "largest", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Markscheme totals",
                statement:
                  "Step marks must sum to totalMarks; count steps and find the maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the five step marks.",
                working: "1 + 2 + 1 + 3 + 2 = 9",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Count the steps listed.",
                working: "5",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Find the largest step.",
                working: "\\max(1, 2, 1, 3, 2) = 3",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 9, steps = 5, largest = 3",
            commonErrors: ["Miscounting the steps."],
          },
        },
        {
          id: "cial-e-u5-st-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A paper has 2 sections; Section A contains 3 questions and Section B contains 4 questions, each worth 4 marks. How many questions are there in total, and what is the total mark allocation?",
          response: {
            type: "numeric",
            parts: [
              { label: "questions", answer: 6 },
              { label: "marks", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paper totals",
                statement:
                  "Total questions = sum of section questions; total marks = questions × marks each.",
              },
            ],
            steps: [
              {
                reasoning: "Add questions across both sections.",
                working: "3 + 4 = 6",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply total questions by marks per question.",
                working: "6 \\times 4 = 24",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "questions = 6, marks = 24",
            commonErrors: ["Multiplying before adding sections."],
          },
        },
        {
          id: "cial-e-u5-st-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do entrances and exits function as structural devices in drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Entrances and exits",
                statement:
                  "Mark transitions, control pacing and reveal character relationships.",
              },
            ],
            steps: [
              {
                reasoning: "They mark scene and act transitions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "They control pacing and build suspense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "They reveal characterisation and relationships.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear, evaluative explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Entrances/exits mark transitions, pace the drama and expose character dynamics.",
            commonErrors: ["Describing them without linking to structure."],
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
              { id: "a", text: "Stage direction" },
              { id: "b", text: "Happy ending" },
              { id: "c", text: "Comic relief" },
              { id: "d", text: "Tragic flaw leading to downfall" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-e-u5-gn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'tragicomedy' combine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "History and fantasy" },
              { id: "b", text: "Tragic and comic elements" },
              { id: "c", text: "Verse and prose only" },
              { id: "d", text: "Two different plays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragicomedy",
                statement: "Genre mixing tragic and comic elements.",
              },
            ],
            steps: [
              {
                reasoning: "Tragicomedy blends tragedy and comedy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Tragic and comic elements",
            commonErrors: ["Thinking it is purely tragic."],
          },
        },
        {
          id: "cial-e-u5-gn-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a 'comedy of manners' primarily satirise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ancient mythology" },
              { id: "b", text: "Natural disasters" },
              { id: "c", text: "Social conventions and behaviour" },
              { id: "d", text: "Theatre itself" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Comedy of manners",
                statement: "Satirises social conventions and upper-class behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "It mocks social manners and conventions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Social conventions and behaviour",
            commonErrors: ["Confusing with farce."],
          },
        },
        {
          id: "cial-e-u5-gn-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What view of existence does absurdist drama typically present?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Existence is meaningless and fragmented" },
              { id: "b", text: "Life has clear moral purpose" },
              { id: "c", text: "History repeats in cycles" },
              { id: "d", text: "God controls all events" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absurdist drama",
                statement: "Presents existence as meaningless, with fragmented language.",
              },
            ],
            steps: [
              {
                reasoning: "Absurdism rejects inherent meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Meaningless and fragmented existence",
            commonErrors: ["Confusing with realism."],
          },
        },
        {
          id: "cial-e-u5-gn-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which of the following best illustrates hamartia in a tragic protagonist?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A hero's physical strength" },
              { id: "b", text: "A villain's accidental death" },
              { id: "c", text: "Macbeth's unchecked ambition" },
              { id: "d", text: "A character's good luck" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Hamartia",
                statement: "Tragic flaw in the protagonist causing downfall.",
              },
            ],
            steps: [
              {
                reasoning: "Hamartia is a character defect, not external luck or strength.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Macbeth's ambition is the classic example of tragic flaw.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Macbeth's unchecked ambition",
            commonErrors: ["Confusing hamartia with fate alone."],
          },
        },
        {
          id: "cial-e-u5-gn-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What primarily distinguishes a 'problem play'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no clear ending" },
              { id: "b", text: "It features supernatural elements" },
              { id: "c", text: "It is written in verse only" },
              { id: "d", text: "It centres on a social issue for debate" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Problem play",
                statement: "Drama that dramatises and debates a social issue.",
              },
            ],
            steps: [
              {
                reasoning: "Problem plays foreground social issues.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "They invite debate rather than simple resolution.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Centres on a social issue for debate",
            commonErrors: ["Confusing with tragedy."],
          },
        },
        {
          id: "cial-e-u5-gn-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What effect does catharsis produce in the audience of a tragedy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laughter and amusement" },
              { id: "b", text: "Confusion about the plot" },
              { id: "c", text: "Detachment from the characters" },
              { id: "d", text: "Emotional purification and release" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catharsis",
                statement: "Emotional purification through tragic experience.",
              },
            ],
            steps: [
              {
                reasoning: "Catharsis is an emotional, not comic, effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It purges and releases the audience's emotions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Emotional purification and release",
            commonErrors: ["Confusing catharsis with comic relief."],
          },
        },
        {
          id: "cial-e-u5-gn-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An essay has 3 body paragraphs worth 5 marks each plus an introduction worth 2 marks. What is the total mark allocation?",
          response: {
            type: "numeric",
            parts: [{ label: "total", answer: 17 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay mark allocation",
                statement: "Total marks = sum of all components.",
              },
            ],
            steps: [
              {
                reasoning: "Add paragraph and introduction marks.",
                working: "3 \\times 5 + 2 = 17",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "17",
            commonErrors: ["Forgetting the introduction marks."],
          },
        },
        {
          id: "cial-e-u5-gn-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A question on genre has sub-parts worth 2, 3, 4 and 1 marks. Enter the total marks and the marks carried by the largest part.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 10 },
              { label: "largest", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Part marks",
                statement: "Part marks must sum to the question total.",
              },
            ],
            steps: [
              {
                reasoning: "Add all part marks.",
                working: "2 + 3 + 4 + 1 = 10",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Identify the largest part.",
                working: "\\max(2, 3, 4, 1) = 4",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 10, largest = 4",
            commonErrors: ["Missing the 1-mark part."],
          },
        },
        {
          id: "cial-e-u5-gn-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Hamlet is divided into 5 acts. If a student analyses 2 scenes in each act, how many scenes does the student analyse in total?",
          response: {
            type: "numeric",
            parts: [{ label: "scenes", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scene counts",
                statement: "Total scenes analysed = acts × scenes per act.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply acts by scenes analysed per act.",
                working: "5 \\times 2 = 10",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 5 (acts only)."],
          },
        },
        {
          id: "cial-e-u5-gn-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A course covers 4 dramatic genres. A student writes 3 essays, each covering 2 genres. Enter the number of essays, the total genre-references across essays, and the number of genres covered.",
          response: {
            type: "numeric",
            parts: [
              { label: "essays", answer: 3 },
              { label: "references", answer: 6 },
              { label: "genres", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre coverage",
                statement: "Genre-references = essays × genres per essay.",
              },
            ],
            steps: [
              {
                reasoning: "Identify the number of essays.",
                working: "3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply essays by genres per essay.",
                working: "3 \\times 2 = 6",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Read the number of genres from the stem.",
                working: "4",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "essays = 3, references = 6, genres = 4",
            commonErrors: ["Confusing genre-references with genre count."],
          },
        },
        {
          id: "cial-e-u5-gn-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 16-mark question has parts worth 4, 4 and 8 marks. Enter the marks carried by the largest part and the marks carried by the smallest part.",
          response: {
            type: "numeric",
            parts: [
              { label: "largest", answer: 8 },
              { label: "smallest", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mark ranges",
                statement: "Identify maximum and minimum part marks.",
              },
            ],
            steps: [
              {
                reasoning: "Largest part is 8.",
                working: "\\max(4, 4, 8) = 8",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Smallest part is 4.",
                working: "\\min(4, 4, 8) = 4",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "largest = 8, smallest = 4",
            commonErrors: ["Assuming parts must differ."],
          },
        },
        {
          id: "cial-e-u5-gn-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does tragicomedy differ from pure tragedy and pure comedy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tragicomedy",
                statement: "Mixes tragic and comic elements within one genre.",
              },
            ],
            steps: [
              {
                reasoning: "Unlike tragedy it does not end purely in disaster.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unlike comedy it retains serious or tragic concerns.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The mixture itself creates tonal complexity and effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear comparative judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Tragicomedy blends tragic seriousness with comic elements, avoiding a purely disastrous or purely happy outcome.",
            commonErrors: ["Defining it without contrasting the two genres."],
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
