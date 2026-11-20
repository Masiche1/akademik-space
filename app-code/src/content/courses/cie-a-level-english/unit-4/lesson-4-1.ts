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
              { id: "a", text: "Whose perspective filters the narrative" },
              { id: "b", text: "The plot structure" },
              { id: "c", text: "The setting" },
              { id: "d", text: "The genre" },
            ],
            correctChoiceId: "a",
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
              {
                id: "a",
                text: "Revealing character through action, dialogue, thoughts",
              },
              { id: "b", text: "Narrator describing traits directly" },
              { id: "c", text: "Listing physical features" },
              { id: "d", text: "Naming the character" },
            ],
            correctChoiceId: "a",
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
