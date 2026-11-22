import type { Lesson } from "../../../types.ts";

export const lesson241: Lesson = {
  id: "cial-e-u4-lesson-4-1",
  code: "4-1",
  title: "Prose: narrative voice and point of view",
  goal: "I CAN analyse narrative voice, point of view and focalisation in prose fiction.",
  standards: ["9093: prose analysis"],
  vocabulary: [
    {
      term: "Narrator",
      definition: "The voice telling the story — not necessarily the author.",
    },
    {
      term: "First person",
      definition: "Narrator is a character in the story ('I').",
    },
    {
      term: "Third person limited",
      definition:
        "Narrator outside story but sees through one character's eyes.",
    },
    {
      term: "Third person omniscient",
      definition: "Narrator knows all characters' thoughts and feelings.",
    },
    {
      term: "Focalisation",
      definition:
        "Whose perspective filters the narrative — internal vs external.",
    },
    {
      term: "Unreliable narrator",
      definition: "Narrator whose account is biased or untrustworthy.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u4-narrative-voice",
      title: "Narrative voice and point of view",
      skill: "Analyse how narrative perspective shapes meaning in prose.",
      lesson: {
        sections: [
          {
            heading: "Types of narration",
            body: "First person: intimate, subjective, potentially unreliable. Third person limited: focused on one consciousness — reader sees what they see. Third person omniscient: god-like access to all minds — authoritative but distant.",
          },
          {
            heading: "Focalisation",
            body: "Internal focalisation: reader experiences events through a character's perceptions. External: narrator observes without entering thoughts. The choice controls what the reader knows and when.",
          },
          {
            heading: "Unreliable narration",
            body: "First-person narrators may be biased, naive or deliberately deceptive. The gap between what the narrator says and what the reader infers creates dramatic irony and complexity.",
          },
        ],
        keyFormulas: [
          {
            name: "Narration",
            statement:
              "POV+focalisation+reliability=how story is told and perceived.",
          },
        ],
        workedExample: {
          problem: "How does first-person narration affect reader sympathy?",
          solution:
            "Creates intimacy — reader sees world through narrator's eyes, often more sympathetic to their perspective.",
        },
      },
      questions: [
        {
          id: "cial-e-u4-nv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'focalisation' in prose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The genre" },
              { id: "b", text: "The plot structure" },
              { id: "c", text: "The setting" },
              { id: "d", text: "Whose perspective filters the narrative" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Focalisation",
                statement: "Perspective through which narrative is filtered.",
              },
            ],
            steps: [
              {
                reasoning: "Focalisation = perspective filter.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Whose perspective filters narrative",
            commonErrors: ["Confusing with plot."],
          },
        },
        {
          id: "cial-e-u4-nv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'unreliable narrator'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unreliable narrator",
                statement: "Narrator whose account is biased or untrustworthy.",
              },
            ],
            steps: [
              {
                reasoning: "Biased or untrustworthy account.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Creates gap between narration and truth.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Narrator whose account is biased or untrustworthy.",
            commonErrors: ["Confusing with omniscient."],
          },
        },
        {
          id: "cial-e-u4-nv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does third-person limited narration differ from omniscient?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "POV types",
                statement: "Limited=one consciousness; omniscient=all minds.",
              },
            ],
            steps: [
              {
                reasoning: "Limited: one character's perspective only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Omniscient: access to all thoughts/feelings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Limited creates intimacy; omniscient creates breadth.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Limited=one mind; omniscient=all minds.",
            commonErrors: ["Thinking they're the same."],
          },
        },
        {
          id: "cial-e-u4-nv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Narrative voice.",
          parts: [
            { label: "a", prompt: "Define focalisation.", marks: 1 },
            { label: "b", prompt: "What is unreliable narration?", marks: 2 },
            { label: "c", prompt: "Limited vs omniscient?", marks: 3 },
            {
              label: "d",
              prompt: "How does POV affect reader response?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Narration",
                statement: "Focalisation+unreliable+POV types+effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Perspective filter.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Biased/untrustworthy account.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Creates dramatic irony.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Limited=one mind.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Omniscient=all minds.",
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
                reasoning: "POV identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect on reader explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to meaning clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) perspective (b) unreliable=biased (c) limited vs omniscient (d) POV→reader response",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Unreliable explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "POV types explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "POV effect clear.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Confusing narrator with author."],
          },
        },
        {
          id: "cial-e-u4-nv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is third-person omniscient narration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrator who never describes events" },
              { id: "b", text: "Narrator limited to one character's thoughts" },
              {
                id: "c",
                text: "Narrator outside story who knows all minds",
              },
              { id: "d", text: "Narrator who is a character using 'I'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Omniscient narration",
                statement: "God-like access to all characters' thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Omniscient = knows all minds.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Knows all characters' thoughts and feelings",
            commonErrors: ["Confusing with third-person limited."],
          },
        },
        {
          id: "cial-e-u4-nv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'internal focalisation'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reader sees events through a character's perceptions",
              },
              {
                id: "b",
                text: "Narrator observes without entering any thoughts",
              },
              { id: "c", text: "A character speaking directly to the reader" },
              { id: "d", text: "The plot's chronological order" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal focalisation",
                statement: "Events filtered through a character's perceptions.",
              },
            ],
            steps: [
              {
                reasoning: "Internal = character's perceptions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Through a character's perceptions",
            commonErrors: ["Confusing with external focalisation."],
          },
        },
        {
          id: "cial-e-u4-nv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A first-person narrator insists 'I never lied' while the reader suspects otherwise. What is this technique called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct address" },
              { id: "b", text: "Omniscient narration" },
              { id: "c", text: "Stream of consciousness" },
              { id: "d", text: "Unreliable narration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Unreliable narration",
                statement: "Gap between narrator's account and truth.",
              },
            ],
            steps: [
              {
                reasoning: "Biased/untrustworthy account.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Unreliable narration",
            commonErrors: ["Calling it omniscient narration."],
          },
        },
        {
          id: "cial-e-u4-nv-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which effect is most closely associated with first-person narration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete reliability" },
              { id: "b", text: "Intimacy and subjectivity" },
              { id: "c", text: "Objectivity and distance" },
              { id: "d", text: "Access to all characters' minds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "First person",
                statement: "Intimate, subjective, potentially unreliable.",
              },
            ],
            steps: [
              {
                reasoning: "'I' creates intimacy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Intimacy and subjectivity",
            commonErrors: ["Assuming first person is always reliable."],
          },
        },
        {
          id: "cial-e-u4-nv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which narrative mode allows the narrator to report several characters' private thoughts in one scene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage directions" },
              { id: "b", text: "External focalisation" },
              { id: "c", text: "Third-person omniscient" },
              { id: "d", text: "First-person limited" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Omniscient",
                statement: "Access to all characters' thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Omniscient knows all minds.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Third-person omniscient",
            commonErrors: ["Choosing first-person limited."],
          },
        },
        {
          id: "cial-e-u4-nv-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might an author deliberately choose an unreliable first-person narrator?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To make the plot easier to follow",
              },
              {
                id: "b",
                text: "To create a gap between narration and truth, generating dramatic irony",
              },
              { id: "c", text: "To describe every character's thoughts equally" },
              { id: "d", text: "To avoid using dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Unreliable narration",
                statement: "Gap creates dramatic irony and complexity.",
              },
            ],
            steps: [
              {
                reasoning: "Gap between narration and truth.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Creates dramatic irony via narration-truth gap",
            commonErrors: ["Thinking unreliability is just an error."],
          },
        },
        {
          id: "cial-e-u4-nv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does focalisation control what the reader knows?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Focalisation",
                statement: "Perspective filter controls knowledge and timing.",
              },
            ],
            steps: [
              {
                reasoning: "Internal focalisation limits to one consciousness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Controls when and what reader learns.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Focalisation filters events through a perspective, controlling what the reader knows and when they learn it.",
            commonErrors: ["Describing focalisation without effect."],
          },
        },
        {
          id: "cial-e-u4-nv-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'narrative distance' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative distance",
                statement: "Degree of closeness between narrator and events.",
              },
            ],
            steps: [
              {
                reasoning: "Closeness/detachment from events defined.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example given (e.g. intimate vs panoramic).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Degree of closeness between narrator and story — e.g. close third person feels intimate; panoramic omniscient feels distant.",
            commonErrors: ["Confusing distance with setting."],
          },
        },
        {
          id: "cial-e-u4-nv-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how narrative voice shapes meaning in a prose text you have studied.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Narrative voice",
                statement: "POV+focalisation+reliability shape meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Narrative voice/POV identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Evidence from text quoted or referenced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect on reader/meaning explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Link to theme or purpose clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Identify the narrative voice, support with evidence, explain its effect on reader response and meaning.",
            commonErrors: ["Summarising plot instead of analysing voice."],
          },
        },
        {
          id: "cial-e-u4-nv-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does first-person narration affect reader sympathy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "First person",
                statement: "Intimacy usually increases sympathy for narrator.",
              },
            ],
            steps: [
              {
                reasoning: "Reader sees world through narrator's eyes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Often more sympathetic to their perspective.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Creates intimacy — readers typically sympathise more with a first-person narrator's perspective.",
            commonErrors: ["Ignoring the unreliability complication."],
          },
        },
        {
          id: "cial-e-u4-nv-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare first-person and third-person limited narration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "POV comparison",
                statement: "First person=narrator character; limited=one consciousness.",
              },
            ],
            steps: [
              {
                reasoning: "First person: narrator is a character ('I').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Third limited: outside narrator, one mind.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Similar intimacy; different distance/reliability.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Both give single-consciousness intimacy, but first person makes the narrator a character and invites questions of reliability.",
            commonErrors: ["Treating them as identical."],
          },
        },
        {
          id: "cial-e-u4-nv-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the narrator never the same thing as the author?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrator vs author",
                statement: "Narrator is a constructed voice, not the writer.",
              },
            ],
            steps: [
              {
                reasoning: "Narrator is a constructed textual voice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Author may differ in perspective/bias.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The narrator is a constructed voice within the text — it may be biased, naive or deceptive in ways that differ from the author's own views.",
            commonErrors: ["Confusing narrator with author."],
          },
        },
      ],
    },
    {
      id: "cial-e-u4-characterisation",
      title: "Characterisation in prose",
      skill:
        "Analyse methods of characterisation: direct description, dialogue, action, thought.",
      lesson: {
        sections: [
          {
            heading: "Methods of characterisation",
            body: "Direct: narrator tells us traits ('she was brave'). Indirect: shown through action, dialogue, thoughts, appearance, others' reactions. Show don't tell — indirect is more convincing.",
          },
          {
            heading: "Dialogue as characterisation",
            body: "What characters say and how they say it reveals personality, education, mood, relationships. Subtext — what's unsaid — often more revealing than direct speech.",
          },
          {
            heading: "Character development",
            body: "Characters change through experience: epiphany, fall, transformation. Track arcs — does the character grow, decline, remain static? Change reveals theme.",
          },
        ],
        keyFormulas: [
          {
            name: "Characterisation",
            statement: "Direct+indirect+dialogue+development=full character.",
          },
        ],
        workedExample: {
          problem: "How does dialogue reveal character?",
          solution:
            "Word choice, tone, what's said/unsaid, interruptions — all signal personality and relationships.",
        },
      },
      questions: [
        {
          id: "cial-e-u4-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'indirect characterisation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrator describing traits directly" },
              {
                id: "b",
                text: "Revealing character through action, dialogue, thoughts",
              },
              { id: "c", text: "Naming the character" },
              { id: "d", text: "Listing physical features" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indirect characterisation",
                statement: "Revealing traits through action/dialogue/thought.",
              },
            ],
            steps: [
              {
                reasoning: "Indirect = shown, not told.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Through action/dialogue/thought",
            commonErrors: ["Confusing with direct description."],
          },
        },
        {
          id: "cial-e-u4-ch-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'show don't tell' more effective in prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Show don't tell",
                statement:
                  "Demonstrating traits is more convincing than stating them.",
              },
            ],
            steps: [
              {
                reasoning: "Action/dialogue more convincing than adjectives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reader infers — more engaging.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Showing lets readers infer character — more engaging.",
            commonErrors: ["Preferring direct description."],
          },
        },
        {
          id: "cial-e-u4-ch-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does dialogue function as characterisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dialogue",
                statement:
                  "Speech reveals personality, education, mood, relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Word choice and tone signal personality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "What's said vs unsaid (subtext).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interruptions/hesitations reveal emotion.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Dialogue reveals personality through word choice, tone and subtext.",
            commonErrors: ["Treating dialogue as just plot."],
          },
        },
        {
          id: "cial-e-u4-ch-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Characterisation.",
          parts: [
            { label: "a", prompt: "Indirect characterisation?", marks: 1 },
            { label: "b", prompt: "Why 'show don't tell'?", marks: 2 },
            { label: "c", prompt: "Dialogue as characterisation?", marks: 3 },
            {
              label: "d",
              prompt: "Analyse a character's development in a novel.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Characterisation",
                statement: "Indirect+show+dialogue+development.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Action/dialogue/thought reveal traits.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "More convincing than adjectives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Reader infers — engaging.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Word choice/tone reveal personality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Subtext matters.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Character named.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Change/arc described.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Methods identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to theme clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) indirect=shown (b) convincing (c) dialogue reveals (d) character analysis",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Show explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Dialogue explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Effective analysis.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Only direct description."],
          },
        },
        {
          id: "cial-e-u4-ch-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'direct characterisation'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Narrator states a character's traits directly",
              },
              { id: "b", text: "Another character describing someone" },
              { id: "c", text: "A character's inner monologue only" },
              {
                id: "d",
                text: "Traits revealed through action and dialogue",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direct characterisation",
                statement: "Narrator tells traits directly ('she was brave').",
              },
            ],
            steps: [
              {
                reasoning: "Direct = told, not shown.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Narrator states traits directly",
            commonErrors: ["Confusing with indirect methods."],
          },
        },
        {
          id: "cial-e-u4-ch-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'show don't tell' mean in prose characterisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Demonstrate traits through action, dialogue and thought",
              },
              { id: "b", text: "Avoid dialogue entirely" },
              { id: "c", text: "Describe every physical feature in detail" },
              { id: "d", text: "Let the narrator list adjectives" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Show don't tell",
                statement: "Demonstrating traits is more convincing.",
              },
            ],
            steps: [
              {
                reasoning: "Shown traits convince readers more.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Demonstrate traits through action/dialogue/thought",
            commonErrors: ["Preferring direct description."],
          },
        },
        {
          id: "cial-e-u4-ch-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A character is revealed through how other characters react to them. Which method is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct characterisation" },
              { id: "b", text: "Indirect characterisation" },
              { id: "c", text: "Narrative summary" },
              { id: "d", text: "Setting description" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Indirect characterisation",
                statement: "Traits shown through reactions, action, dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "Reactions = shown, not told.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Indirect characterisation",
            commonErrors: ["Calling it direct description."],
          },
        },
        {
          id: "cial-e-u4-ch-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'subtext' in dialogue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot summary" },
              {
                id: "b",
                text: "What characters mean but do not say directly",
              },
              { id: "c", text: "Stage directions in brackets" },
              { id: "d", text: "The narrator's explanation of a scene" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement: "Meaning beneath the surface of speech.",
              },
            ],
            steps: [
              {
                reasoning: "Subtext = unsaid meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Meaning characters don't say directly",
            commonErrors: ["Confusing with plot."],
          },
        },
        {
          id: "cial-e-u4-ch-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'character arc' in prose fiction?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The pattern of change a character undergoes through the story",
              },
              {
                id: "b",
                text: "The order in which characters first appear",
              },
              {
                id: "c",
                text: "The plot's chronological structure",
              },
              {
                id: "d",
                text: "A character's physical description",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character arc",
                statement: "Pattern of change — growth, fall or stasis.",
              },
            ],
            steps: [
              {
                reasoning: "Arc = change over the story.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Pattern of change through the story",
            commonErrors: ["Confusing arc with plot structure."],
          },
        },
        {
          id: "cial-e-u4-ch-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A character speaks in short, aggressive sentences and interrupts others. What does this primarily reveal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The narrator's opinion of events" },
              { id: "b", text: "Personality and mood through speech patterns" },
              { id: "c", text: "The setting of the scene" },
              { id: "d", text: "The plot's time frame" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dialogue",
                statement: "Speech patterns reveal personality and emotion.",
              },
            ],
            steps: [
              {
                reasoning: "Word choice and interruptions = character traits.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** Personality and mood through speech patterns",
            commonErrors: ["Treating speech as plot information only."],
          },
        },
        {
          id: "cial-e-u4-ch-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might an author leave a character 'flat' — unchanged and predictable throughout?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because flat characters require less dialogue",
              },
              {
                id: "b",
                text: "To contrast with dynamic characters or to symbolise a fixed social role",
              },
              {
                id: "c",
                text: "To make the plot easier to follow",
              },
              {
                id: "d",
                text: "Flat characters are always the protagonist",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Flat vs round character",
                statement: "Static characters contrast or symbolise roles.",
              },
            ],
            steps: [
              {
                reasoning: "Flatness is a deliberate structural choice.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(a)** Deliberate contrast or symbolic fixed role",
            commonErrors: ["Assuming flatness is a flaw rather than a choice."],
          },
        },
        {
          id: "cial-e-u4-ch-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can a character's actions characterise them more effectively than a direct description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Action",
                statement: "What characters do under pressure reveals true traits.",
              },
            ],
            steps: [
              {
                reasoning: "Actions demonstrate traits under pressure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reader infers — more convincing than adjectives.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Actions reveal how a character truly behaves, letting readers infer traits rather than being told them.",
            commonErrors: ["Listing actions without explaining what they reveal."],
          },
        },
        {
          id: "cial-e-u4-ch-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one example each of direct and indirect characterisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direct vs indirect",
                statement: "Direct=told by narrator; indirect=shown.",
              },
            ],
            steps: [
              {
                reasoning: "Direct example: narrator states a trait.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Indirect example: action/dialogue/thought shows trait.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Direct: 'she was brave'. Indirect: she shields a stranger from the rain.",
            commonErrors: ["Giving two indirect examples."],
          },
        },
        {
          id: "cial-e-u4-ch-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how subtext in a character's dialogue reveals more than their spoken words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Subtext",
                statement: "Unsaid meaning often reveals true feelings/relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Spoken words identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gap between said and meant explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "What subtext reveals about character/relationship.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear analysis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Identify the spoken line, explain the gap between surface and intended meaning, and link it to the character's true feelings or relationship.",
            commonErrors: ["Retelling dialogue without analysing subtext."],
          },
        },
        {
          id: "cial-e-u4-ch-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a character's development or lack of development reveals a text's theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character development",
                statement: "Arcs — growth, fall, stasis — embody thematic concerns.",
              },
            ],
            steps: [
              {
                reasoning: "Arc type identified (growth/fall/static).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Turning points in development described.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Link between change and theme made.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Clear argument.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Track the character's arc and show how the direction of their change embodies the text's central concerns.",
            commonErrors: ["Summarising events without linking to theme."],
          },
        },
        {
          id: "cial-e-u4-ch-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Characterisation methods.",
          parts: [
            { label: "a", prompt: "Define indirect characterisation.", marks: 1 },
            { label: "b", prompt: "What is 'subtext' in dialogue?", marks: 2 },
            {
              label: "c",
              prompt: "How does a character's arc relate to theme?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Analyse one character's development in a novel you have studied.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Characterisation",
                statement: "Indirect+subtext+arc+analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Traits shown via action/dialogue/thought.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Unsaid meaning beneath speech.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reveals true feelings/relationships.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Arc = pattern of change.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Change embodies thematic concerns.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear link.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Character named.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Arc described with evidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Methods identified (dialogue/action/etc).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to theme clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) shown not told (b) subtext=unsaid meaning (c) arc embodies theme (d) character development analysis",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Subtext explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Arc-theme link clear.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Effective analysis.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Plot summary instead of analysis."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u4-prose-notes",
      title: "Prose: voice and character — revision notes",
      summary: "Narrative perspective, focalisation, characterisation methods.",
      sections: [
        {
          heading: "Narrative voice",
          body: "First=I, third limited=one mind, omniscient=all minds. Unreliable narrator creates dramatic irony. Focalisation controls what reader knows.",
        },
        {
          heading: "Characterisation",
          body: "Direct=told; indirect=shown via action/dialogue/thought. Dialogue reveals personality. Track character arcs — growth, fall, static.",
        },
        {
          heading: "Exam checklist",
          body: "Is POV identified? Are methods of characterisation analysed? Is change tracked? Is subtext discussed?",
        },
      ],
    },
  ],
};
