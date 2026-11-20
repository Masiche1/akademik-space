import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cieilit-u1-lesson-1-2",
  code: "1-2",
  title: "Analysing writers' methods: language and structure",
  goal: "I CAN analyse how writers use language and structure to create effects.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Section 1: Reading literature",
  ],
  vocabulary: [
    {
      term: "Imagery",
      definition:
        "Language creating sensory pictures — visual, auditory, tactile, etc.",
    },
    {
      term: "Tone",
      definition:
        "The writer's attitude toward the subject conveyed through word choice.",
    },
    {
      term: "Narrative voice",
      definition:
        "Who tells the story and from what perspective (first/third person, reliable/unreliable).",
    },
    {
      term: "Syntax",
      definition: "Sentence structure — length, complexity, rhythm.",
    },
    {
      term: "Structure",
      definition:
        "How a text is organised — plot order, flashbacks, chronology, pacing.",
    },
    {
      term: "Diction",
      definition:
        "Word choice — formal/informal, abstract/concrete, connotative.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u1-methods",
      title: "Language and structure analysis",
      skill:
        "Analyse writers' methods and explain their effects on the reader.",
      lesson: {
        sections: [
          {
            heading: "Language analysis",
            body: "Analyse **diction** (word choice — why 'slithered' not 'walked'?), **imagery** (what sensory pictures are created and why?), **tone** (is the voice angry, tender, ironic?), **syntax** (do short sentences create tension? do long ones create flow?) and **sound devices** (alliteration, rhythm, rhyme). Always link the method to its **effect** — what does it make the reader feel or understand?",
          },
          {
            heading: "Structure analysis",
            body: "Analyse **plot structure** — where is the climax? how is tension built? **Narrative voice** — first person creates intimacy, third person offers distance. **Chronology** — linear vs flashback changes meaning. **Pacing** — fast action vs slow description directs attention. **Framing** — openings and endings shape interpretation.",
          },
          {
            heading: "Linking method to meaning",
            body: "The key skill: never just identify a technique — explain its **effect**. 'The writer uses short sentences' is weak; 'The short, clipped sentences mirror the character's panic, making the reader share her fear' is analysis. Method → effect → meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Analysis chain",
            statement:
              "Method identified → effect on reader → contribution to meaning",
          },
          {
            name: "Evidence rule",
            statement:
              "Quote the shortest phrase containing the feature, then analyse the words",
          },
        ],
        workedExample: {
          problem: "Analyse: 'The rain hammered on the roof all night.'",
          solution:
            "'Hammered' gives the rain violent agency — it seems to attack. The auditory image and harsh verb create oppression, mirroring the character's emotional state.",
        },
      },
      questions: [
        {
          id: "cieilit-u1-mth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Tone' in literary analysis refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The musical quality of a poem" },
              { id: "b", text: "The writer's attitude toward the subject" },
              { id: "c", text: "The volume of the narration" },
              { id: "d", text: "The story's setting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tone",
                statement: "Writer's attitude conveyed through word choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tone = attitude (angry, tender, ironic); it is conveyed through diction and imagery.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The writer's attitude toward the subject.",
            commonErrors: [
              "Confusing tone with mood (reader's feeling) or setting.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse the effect of short, clipped sentences in a tense scene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Syntax analysis",
                statement:
                  "Sentence structure shapes pace, tension and reader response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short sentences create rapid pace — each ends quickly, propelling the reader forward.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They mirror urgency or panic — the form enacts the content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "During a crisis scene, this heightens tension and makes action feel immediate and breathless.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Short sentences accelerate pace and mirror urgency, heightening tension in action scenes.",
            commonErrors: [
              "Identifying 'short sentences' without explaining their effect.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a writer choose first-person narration? Give one effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative voice",
                statement:
                  "Point of view shapes intimacy, reliability and reader access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First-person creates intimacy — the reader sees events through the narrator's eyes and feelings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can create immediacy and emotional engagement, or expose an unreliable narrator's bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: a child's first-person voice makes adult events seem strange and revealing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "First-person gives intimacy and immediacy — or exposes narrator bias if unreliable.",
            commonErrors: [
              "Saying first-person is 'better' without explaining specific effects.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse how a writer might use imagery to convey a character's grief.",
          parts: [
            {
              label: "a",
              prompt: "Describe two types of imagery that could convey grief.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how structure could reinforce the grief theme.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery and structure",
                statement:
                  "Sensory images + structural choices together convey emotion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Visual imagery: grey, cold or empty images — a wilting garden, a darkened room — externalise inner loss.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Tactile/auditory: cold hands, silence, hollow sounds — physical sensations of absence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Recurring motifs (e.g. an unclaimed chair) accumulate grief through repetition.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Structure: placing grief scenes at the climax or ending gives them finality and weight.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Pacing: slowing description during grief forces the reader to linger in the emotion.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: imagery makes grief felt; structure controls when and how intensely the reader experiences it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Visual/tactile imagery + motifs. (b) Climax placement and slow pacing intensify grief.",
            commonErrors: [
              "Describing images without linking to grief or reader effect.",
            ],
          },
        },
      ],
    },
  ],
};
