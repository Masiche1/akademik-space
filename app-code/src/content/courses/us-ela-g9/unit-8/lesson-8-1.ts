import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const LIT1: TextExtract = {
  title: "Short Story Excerpt: 'The Waiting Room'",
  author: "Written for Akademik Space",
  text: "The waiting room had the particular stillness of places where people go to be anxious. Fluorescent lights hummed overhead, casting everything in a pale, tired light. Marcus sat in the plastic chair by the window, his phone face-down on his knee — not because he didn't want to check it, but because checking it would mean admitting he was waiting for something.\n\nThe receptionist called his name. 'Mr. Alvarez?'\n\nHe stood, smoothing his shirt — a gesture he'd learned from his father, who'd taught him that you always look put-together when you're about to hear something that might fall apart. The doctor's door was open. Inside, the resident was already reading from a folder.\n\n'Mr. Alvarez, your biopsy results came back. The cells we sampled —' she paused, chose her words carefully — 'they're not what we expected.'\n\nMarcus felt the room tilt slightly, the way it does in dreams when the floor becomes water. He'd known this might happen. He'd known since the first lump, since the first appointment, since his father died of the same thing at fifty-two. But knowing and hearing are different things.\n\n'Tell me,' he said.\n\n'The results are inconclusive. We need more tests.'",
};

const LIT2: TextExtract = {
  title: "Poem: 'Inheritance'",
  author: "Written for Akademik Space",
  text: "My father left me his watch —\nstill ticking, though he isn't.\nI wind it every morning\nand pretend it's his heartbeat\nkeeping time for me.\n\nHe left me his hands —\nsteady, patient, capable\nof fixing things I've broken\nand breaking things I've fixed.\nI hold them up to the light\nand see my own fingers there,\nsame knuckles, same scars.\n\nWhat else did he leave?\nThe silence between us,\nwordless, heavy as the watch\non my wrist — always present,\nalways ticking,\nalways asking what I inherited\nand what I chose.",
};

export const lesson81: Lesson = {
  id: "ela9-u8-lesson-8-1",
  code: "8-1",
  title: "Theme and Character Analysis in Literature",
  goal: "I CAN analyze theme development and complex characters in literary texts using evidence from the text.",
  standards: ["RL.9-10.2", "RL.9-10.3", "RL.9-10.4", "RL.9-10.6"],
  vocabulary: [
    {
      term: "Theme",
      definition: "Central insight or message developed across text.",
    },
    {
      term: "Characterization",
      definition: "How author reveals character traits.",
    },
    {
      term: "Dynamic character",
      definition: "Character who changes over story.",
    },
    {
      term: "Static character",
      definition: "Character who remains consistent.",
    },
    { term: "Foreshadowing", definition: "Hints of future events." },
    { term: "Symbolism", definition: "Objects representing larger ideas." },
  ],
  concepts: [
    {
      id: "ela9-u8-theme",
      title: "Theme development",
      skill:
        "Identify and analyze how themes develop through plot, character, and imagery.",
      lesson: {
        sections: [
          {
            heading: "Theme vs subject",
            body: "Subject = what text is about ('waiting for medical results'); theme = what it says about subject ('the anxiety of waiting for news that might change everything'). Theme emerges through pattern: Marcus's father's death from same illness (history), the watch imagery in poem (inheritance), the inconclusive results (uncertainty). Theme isn't stated — it's developed through accumulated details.",
          },
          {
            heading: "Theme evidence",
            body: "Collect evidence: 'knowing and hearing are different things' (anxiety theme), 'the floor becomes water' (disorientation), 'always asking what I inherited and what I chose' (identity/inheritance theme). Theme statements should be arguable — 'Waiting is hard' is obvious; 'The uncertainty of diagnosis mirrors life's unpredictability' is analytical.",
          },
        ],
        keyFormulas: [
          {
            name: "Theme = insight",
            statement: "What text reveals about subject.",
          },
          { name: "Evidence accumulation", statement: "Details build theme." },
          { name: "Arguable thesis", statement: "Not obvious, but supported." },
        ],
        workedExample: {
          problem: "What's the theme of 'The Waiting Room'?",
          solution:
            "The anxiety of waiting for news that might change everything — supported by father's death, inconclusive results, disorientation imagery.",
        },
      },
      questions: [
        {
          id: "ela9-u8-theme-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIT1,
          stem: "What is the theme of 'The Waiting Room'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Doctors are rude" },
              {
                id: "b",
                text: "The anxiety of waiting for news that might change everything",
              },
              { id: "c", text: "Waiting rooms are boring" },
              { id: "d", text: "Cancer is scary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme",
                statement: "Central insight.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Theme = anxiety of uncertain waiting — supported by father's death, inconclusive results, disorientation.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. The anxiety of waiting for news that might change everything.",
            commonErrors: ["Choosing obvious subject instead of theme."],
          },
        },
        {
          id: "ela9-u8-theme-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LIT1,
          stem: "Identify two pieces of evidence supporting the theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme evidence",
                statement: "Details support theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence 1: 'knowing and hearing are different things' — anticipatory anxiety.",
                evidence: "knowing and hearing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: 'floor becomes water' — disorientation, loss of control.",
                evidence: "floor becomes water",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 3: father's death from same illness — history repeating.",
                evidence: "father died",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Knowing and hearing are different things' (anticipation), 'floor becomes water' (disorientation), father's death (history repeating).",
            commonErrors: [
              "Choosing plot summary instead of thematic evidence.",
            ],
          },
        },
        {
          id: "ela9-u8-theme-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LIT2,
          stem: "Analyze how 'Inheritance' develops theme through symbolism and structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbolism analysis",
                statement: "Objects carry meaning.",
              },
              {
                kind: "skill",
                name: "Theme development",
                statement: "How theme emerges.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Watch symbolizes father's continuing presence — 'still ticking, though he isn't.'",
                evidence: "watch",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Hands symbolize inherited capability — 'same knuckles, same scars.'",
                evidence: "hands",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Silence symbolizes unspoken inheritance — 'always asking what I inherited and what I chose.'",
                evidence: "silence",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Poem uses objects (watch, hands, silence) as symbols of inheritance — physical (watch ticking), capability (hands), and emotional (silence). Theme: inheritance is both gift and burden — what we receive shapes but doesn't determine who we become.",
            commonErrors: ["Listing symbols without connecting to theme."],
          },
        },
        {
          id: "ela9-u8-theme-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LIT1,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between subject and theme?",
              marks: 2,
            },
            { label: "b", prompt: "Apply to 'The Waiting Room.'", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subject vs theme",
                statement: "Topic vs insight.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Subject = what text is about; theme = what it reveals about subject.",
                evidence: "subject vs theme",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Subject: waiting for biopsy results. Theme: anxiety of uncertain waiting that echoes life's unpredictability.",
                evidence: "apply",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Subject = topic; theme = insight about topic. (b) Subject: waiting for results. Theme: anxiety of uncertain waiting.",
            commonErrors: ["Confusing topic with theme."],
          },
        },
      ],
    },
    {
      id: "ela9-u8-character",
      title: "Character Analysis",
      skill:
        "Analyze complex characters through direct and indirect characterization, motivation, and change.",
      lesson: {
        sections: [
          {
            heading: "Characterization methods",
            body: "**Direct**: author states traits ('Marcus was anxious'). **Indirect**: actions ('phone face-down — not wanting to check'), dialogue ('Tell me'), thoughts ('He'd known since the first lump'), effects on others (receptionist's manner). Marcus is characterized indirectly: his father's gesture ('smoothing his shirt — learned from his father'), his controlled exterior vs internal turmoil ('felt the room tilt'). We infer anxiety from behavior, not statements.",
          },
          {
            heading: "Motivation and complexity",
            body: "Complex characters have conflicting motivations: Marcus wants answers but fears them; wants to be strong but remembers father's death. 'He'd known this might happen' — acceptance vs hope conflict. Dynamic vs static: Marcus may be static in this scene (anxiety doesn't change) but the story suggests potential for change. Complexity = contradictions — he's both prepared ('knowing') and unprepared ('hearing').",
          },
        ],
        keyFormulas: [
          {
            name: "Direct vs indirect",
            statement: "Stated vs inferred traits.",
          },
          {
            name: "Motivation conflicts",
            statement: "Characters want contradictory things.",
          },
          {
            name: "Complexity = contradiction",
            statement: "Prepared yet unprepared.",
          },
        ],
        workedExample: {
          problem: "How is Marcus characterized in 'The Waiting Room'?",
          solution:
            "Indirectly: controlled exterior ('smoothing shirt') vs internal turmoil ('room tilts'), learned father's gesture, anticipates bad news yet hopes — complexity through contradiction.",
        },
      },
      questions: [
        {
          id: "ela9-u8-character-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIT1,
          stem: "How is Marcus primarily characterized?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrator explains his traits" },
              { id: "b", text: "Direct statements about his personality" },
              { id: "c", text: "Other characters describe him" },
              {
                id: "d",
                text: "Indirect — through actions, thoughts, learned behaviors",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indirect characterization",
                statement: "Inferred through behavior.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marcus characterized through actions ('phone face-down'), thoughts ('knew since first lump'), learned behaviors ('father's gesture').",
                evidence: "indirect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Indirect — through actions, thoughts, learned behaviors.",
            commonErrors: ["Missing inference-based characterization."],
          },
        },
        {
          id: "ela9-u8-character-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LIT1,
          stem: "Identify two pieces of indirect characterization for Marcus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Indirect characterization",
                statement: "Actions reveal traits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Phone face-down' — avoidance, anxiety about checking.",
                evidence: "phone face-down",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Smoothing his shirt — gesture learned from father' — inherited composure, family history.",
                evidence: "smoothing shirt",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'He'd known since the first lump' — anticipatory anxiety, fatalism.",
                evidence: "known since first lump",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Phone face-down' (avoidance/anxiety), 'smoothing shirt learned from father' (inherited composure), 'knew since first lump' (anticipatory anxiety).",
            commonErrors: [
              "Choosing direct statements instead of inferred traits.",
            ],
          },
        },
        {
          id: "ela9-u8-character-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LIT1,
          stem: "Analyze Marcus's internal conflict and how it creates character complexity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Internal conflict analysis",
                statement: "Competing desires.",
              },
              {
                kind: "skill",
                name: "Character complexity",
                statement: "Contradictions.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Conflict: wants answers but fears them — 'knowing and hearing are different things.'",
                evidence: "conflict",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conflict: prepared (father's death) yet unprepared (inconclusive results) — expectation vs reality.",
                evidence: "prepared vs unprepared",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Complexity: controlled exterior vs internal turmoil — 'floor becomes water' vs 'smoothing shirt.'",
                evidence: "complexity",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Marcus experiences conflicting desires: wants answers yet fears them; prepared through father's death yet unprepared for inconclusive results; controlled exterior ('smoothing shirt') vs internal turmoil ('floor becomes water'). Complexity emerges from contradictions — he is simultaneously strong and vulnerable.",
            commonErrors: ["Simplifying character to single trait."],
          },
        },
        {
          id: "ela9-u8-character-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LIT2,
          parts: [
            {
              label: "a",
              prompt: "How does the speaker characterize the father?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Is the speaker dynamic or static?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Characterization in poetry",
                statement: "Through objects/imagery.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Father characterized through inherited objects: watch (presence), hands (capability), silence (unspoken bond).",
                evidence: "father",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Speaker appears static in moment — still questioning inheritance — but poem suggests ongoing process ('always asking').",
                evidence: "dynamic vs static",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Father characterized through inherited objects — watch (continuing presence), hands (capability), silence (unspoken bond). (b) Speaker appears static (still questioning) but 'always asking' suggests ongoing process.",
            commonErrors: ["Missing object-based characterization."],
          },
        },
      ],
    },
    {
      id: "ela9-u8-structure",
      title: "Text Structure and Narrative Techniques",
      skill:
        "Analyze how text structure — pacing, flashback, foreshadowing — creates meaning.",
      lesson: {
        sections: [
          {
            heading: "Structure creates meaning",
            body: "'The Waiting Room' uses **slow pacing** — waiting room described in detail before doctor appears. **Foreshadowing**: father's death mentioned before results — prepares reader for bad news. **In medias res**: starts mid-wait, not at beginning — creates immediacy. The structure mirrors theme: just as Marcus waits anxiously, reader waits for revelation. Form matches content.",
          },
          {
            heading: "Narrative techniques",
            body: "**Sensory detail**: 'fluorescent lights hummed,' 'plastic chair,' 'pale, tired light' — creates oppressive atmosphere. **Internal monologue**: 'He'd known since the first lump' — reveals thoughts. **Dialogue**: minimal ('Tell me') — emphasizes weight of moment. **Symbolism**: watch in poem, waiting room itself as liminal space. Each technique serves theme — anxiety made tangible.",
          },
        ],
        keyFormulas: [
          { name: "Structure = meaning", statement: "Form mirrors content." },
          {
            name: "Foreshadowing prepares",
            statement: "Hints before revelation.",
          },
          {
            name: "Technique serves theme",
            statement: "Every choice meaningful.",
          },
        ],
        workedExample: {
          problem: "How does 'The Waiting Room' structure mirror its theme?",
          solution:
            "Slow pacing mirrors anxious waiting; foreshadowing (father's death) prepares for bad news; in medias res creates immediacy — form matches content of uncertain anticipation.",
        },
      },
      questions: [
        {
          id: "ela9-u8-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIT1,
          stem: "What narrative technique does 'The Waiting Room' use to create immediacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chronological order" },
              { id: "b", text: "In medias res — starting mid-action" },
              { id: "c", text: "Flashback" },
              { id: "d", text: "Stream of consciousness" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "In medias res",
                statement: "Start mid-action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Story starts in waiting room, not at beginning — drops reader into moment.",
                evidence: "in medias res",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. In medias res — starting mid-action.",
            commonErrors: ["Missing that it starts mid-wait."],
          },
        },
        {
          id: "ela9-u8-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LIT1,
          stem: "Identify two foreshadowing elements and explain their function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Foreshadowing",
                statement: "Hints before events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Father's death from same illness — prepares reader for bad news.",
                evidence: "father died",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'He'd known since the first lump' — anticipates negative outcome.",
                evidence: "knew since first lump",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Function: creates tension, prepares reader emotionally.",
                evidence: "function",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Father's death (same illness) + 'knew since first lump' — both prepare reader for bad news, create tension.",
            commonErrors: ["Identifying without explaining function."],
          },
        },
        {
          id: "ela9-u8-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LIT2,
          stem: "Analyze how 'Inheritance' uses structure — stanzas, refrain-like repetition, progression — to develop theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetic structure",
                statement: "How form creates meaning.",
              },
              {
                kind: "skill",
                name: "Theme progression",
                statement: "How theme develops.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Three stanzas: watch (presence), hands (capability), silence (unspoken) — progression from physical to emotional.",
                evidence: "stanzas",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Repetition: 'left me' in each stanza — emphasizes inheritance theme.",
                evidence: "repetition",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Final stanza broadens: 'What else did he leave?' — moves from objects to questions.",
                evidence: "broadening",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Three stanzas progress from physical (watch) to capability (hands) to emotional (silence) inheritance. 'Left me' repetition emphasizes theme. Final stanza broadens to existential question — structure mirrors theme's development from concrete to abstract.",
            commonErrors: ["Describing structure without connecting to theme."],
          },
        },
        {
          id: "ela9-u8-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LIT1,
          parts: [
            {
              label: "a",
              prompt: "How does slow pacing serve the theme?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing analysis",
                statement: "Speed creates effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Slow pacing mirrors anxious waiting — reader experiences same tension as Marcus.",
                evidence: "pacing",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Waiting room described in detail ('fluorescent lights hummed,' 'plastic chair') before doctor appears — stretches time.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Slow pacing mirrors anxious waiting — reader experiences tension. (b) Detailed waiting room description stretches time before doctor appears.",
            commonErrors: ["Not connecting pacing to theme."],
          },
        },
      ],
    },
    {
      id: "ela9-u8-complex",
      title: "Complex Characters and Ambiguity",
      skill:
        "Analyze morally complex characters and texts with ambiguous meanings.",
      lesson: {
        sections: [
          {
            heading: "Moral complexity",
            body: "Grade 9 literature often features characters who aren't simply good/bad: Marcus is both strong (learned father's composure) and vulnerable (anxiety, anticipation); the doctor is professional but delivers life-altering news; even the father — dead, absent — is both gift (watch, hands) and burden (same illness, silence). Ambiguity = multiple valid interpretations. 'Inconclusive results' mirrors life's uncertainty — is Marcus relieved or disappointed? Text doesn't say.",
          },
          {
            heading: "Ambiguous endings and meanings",
            body: "The excerpt ends with 'inconclusive' — neither good nor bad news. This ambiguity is thematic: life doesn't provide clear answers. Reader must sit with uncertainty, just as Marcus must. Similarly, 'Inheritance' ends with question ('what I inherited and what I chose') — no resolution, ongoing process. Ambiguity isn't confusion — it's intentional complexity inviting reader interpretation.",
          },
        ],
        keyFormulas: [
          {
            name: "Moral complexity",
            statement: "Characters are neither good nor bad.",
          },
          {
            name: "Ambiguity = invitation",
            statement: "Multiple interpretations valid.",
          },
          {
            name: "Unresolved = thematic",
            statement: "Life's uncertainty mirrored.",
          },
        ],
        workedExample: {
          problem:
            "Why does 'The Waiting Room' end with 'inconclusive results'?",
          solution:
            "Ambiguity is thematic — mirrors life's uncertainty. Neither relief nor disappointment; reader must sit with uncertainty like Marcus. Intentional complexity, not confusion.",
        },
      },
      questions: [
        {
          id: "ela9-u8-complex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIT1,
          stem: "What makes Marcus a 'complex' character?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He's the main character" },
              {
                id: "b",
                text: "He shows contradictory traits — strength and vulnerability",
              },
              { id: "c", text: "He speaks a lot" },
              { id: "d", text: "He has a medical condition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex character",
                statement: "Contradictory traits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marcus shows contradictions: controlled exterior vs internal turmoil, prepared vs unprepared, strong vs vulnerable.",
                evidence: "complex",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. He shows contradictory traits — strength and vulnerability.",
            commonErrors: ["Thinking complexity = many traits."],
          },
        },
        {
          id: "ela9-u8-complex-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LIT1,
          stem: "Identify two sources of ambiguity in the excerpt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ambiguity identification",
                statement: "Multiple interpretations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Inconclusive results' — neither good nor bad; Marcus's reaction unclear.",
                evidence: "inconclusive",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Father's legacy — watch/hands are both gift and burden (same illness).",
                evidence: "father",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Tell me' — is Marcus demanding answers or accepting fate? Ambiguous.",
                evidence: "Tell me",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Inconclusive results' (neither good nor bad), father's legacy (gift and burden), 'Tell me' (demanding or accepting — ambiguous).",
            commonErrors: ["Missing subtle ambiguities."],
          },
        },
        {
          id: "ela9-u8-complex-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LIT2,
          stem: "Analyze how 'Inheritance' creates moral complexity through the father's dual nature as both gift and burden.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Moral complexity",
                statement: "Dual nature analysis.",
              },
              {
                kind: "skill",
                name: "Ambiguity",
                statement: "Multiple interpretations.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Gift: watch (presence), hands (capability) — positive inheritance.",
                evidence: "gift",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Burden: same illness that killed father, silence (unspoken trauma), 'what I chose' implies obligation.",
                evidence: "burden",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ambiguity: speaker doesn't resolve — 'always asking' suggests ongoing negotiation, not answer.",
                evidence: "ambiguity",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Father is both gift (watch = presence, hands = capability) and burden (same illness, silence = trauma, 'what I chose' = obligation). Speaker doesn't resolve — 'always asking' shows ongoing negotiation. Moral complexity: inheritance is neither purely positive nor negative.",
            commonErrors: [
              "Choosing one interpretation — ambiguity is intentional.",
            ],
          },
        },
        {
          id: "ela9-u8-complex-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: LIT1,
          parts: [
            {
              label: "a",
              prompt: "Why does ambiguity matter in literature?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from the text.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ambiguity significance",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ambiguity mirrors life's complexity — no easy answers, invites reader interpretation.",
                evidence: "ambiguity",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Inconclusive results' — mirrors life's uncertainty; reader must sit with ambiguity like Marcus.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Ambiguity mirrors life's complexity — invites interpretation, no easy answers. (b) 'Inconclusive results' mirrors uncertainty — reader sits with ambiguity like Marcus.",
            commonErrors: ["Thinking ambiguity = bad writing."],
          },
        },
      ],
    },
  ],
};
