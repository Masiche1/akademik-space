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
              { id: "a", text: "The story's setting" },
              { id: "b", text: "The volume of the narration" },
              { id: "c", text: "The musical quality of a poem" },
              { id: "d", text: "The writer's attitude toward the subject" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cieilit-u1-mth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Diction' in literary analysis refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A writer's deliberate choice of words" },
              { id: "b", text: "The story's historical setting" },
              { id: "c", text: "The arrangement of sentences in a paragraph" },
              { id: "d", text: "The order in which events happen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diction",
                statement:
                  "Word choice — formal/informal, abstract/concrete, connotative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diction is word choice; why 'slithered' instead of 'walked' changes the whole effect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) A writer's deliberate choice of words.",
            commonErrors: [
              "Confusing diction with syntax (sentence structure).",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Short, clipped sentences in a tense scene most directly create:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Rapid pace and heightened tension",
              },
              { id: "b", text: "A comic or light-hearted tone" },
              { id: "c", text: "A distant, formal register" },
              { id: "d", text: "A calm, reflective mood" },
            ],
            correctChoiceId: "a",
          },
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
                  "Short sentences end quickly, propelling the reader forward and mirroring urgency — pace and tension rise.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Rapid pace and heightened tension.",
            commonErrors: [
              "Naming the technique without explaining its effect.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Imagery' in a literary text is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conversation between characters" },
              {
                id: "b",
                text: "Language creating sensory pictures for the reader",
              },
              { id: "c", text: "The order in which the plot unfolds" },
              { id: "d", text: "Counting the syllables in each line" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Imagery",
                statement:
                  "Language creating sensory pictures — visual, auditory, tactile, etc.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Imagery appeals to the senses — sight, sound, touch, smell, taste — to make scenes vivid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Language creating sensory pictures for the reader.",
            commonErrors: ["Confusing imagery with simple description."],
          },
        },
        {
          id: "cieilit-u1-mth-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A flashback used in a novel's structure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changes the narrative voice mid-story" },
              {
                id: "b",
                text: "Repeats the ending at the start of the story",
              },
              {
                id: "c",
                text: "Interrupts chronology to reveal or reframe past events",
              },
              {
                id: "d",
                text: "Always weakens the plot by interrupting action",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chronology",
                statement:
                  "Linear vs flashback structure changes how meaning is revealed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A flashback jumps back in time — revealing past events that reframe present action or character.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Interrupts chronology to reveal or reframe past events.",
            commonErrors: [
              "Assuming non-linear structure is a flaw rather than a deliberate choice.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer's tone can be ironic. Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone analysis",
                statement:
                  "Tone is the writer's attitude — irony creates a gap between surface and meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ironic tone says one thing while meaning another — praise that condemns, or understatement that exposes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: describing a boastful character as 'modest and unassuming' creates irony — the words contradict the reality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Irony lets the writer criticise indirectly, making the reader detect the gap between words and truth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ironic tone means the opposite of what is said — e.g. calling a boastful character 'modest' exposes the truth indirectly.",
            commonErrors: [
              "Describing irony as a plot event rather than a tone or attitude.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between 'tone' and 'mood' in literary analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tone vs mood",
                statement:
                  "Tone = writer's attitude; mood = reader's feeling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tone belongs to the writer — the attitude conveyed through word choice (angry, tender, ironic).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mood belongs to the reader — the feeling the text creates (dread, warmth, unease).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They interact — a writer's dark tone creates a gloomy mood — but analysis should distinguish them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tone is the writer's attitude; mood is the feeling created in the reader.",
            commonErrors: [
              "Using 'tone' and 'mood' interchangeably.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Alliteration' is the repetition of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Initial consonant sounds in nearby words",
              },
              { id: "b", text: "A word at the start of each stanza" },
              { id: "c", text: "Sentences of identical length" },
              { id: "d", text: "The same vowel sound at line endings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alliteration",
                statement:
                  "Repetition of initial consonant sounds — e.g. 'dark, damp days'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Alliteration repeats initial consonants; assonance repeats vowel sounds; rhyme repeats line endings.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Initial consonant sounds in nearby words.",
            commonErrors: [
              "Confusing alliteration with rhyme or assonance.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse how a writer might use structure to build suspense in a narrative.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe two structural techniques that could build suspense.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how each technique affects the reader's experience.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural suspense",
                statement:
                  "Pacing, chapter breaks and withheld information control tension.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Pacing: slowing description before a crisis makes the reader wait — time stretches as tension rises.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Withholding information: delaying the reveal of a secret keeps the reader guessing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cliff-hanger chapter endings or scene breaks interrupt action at peak tension.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Slow pacing makes danger feel imminent — every detail is scrutinised, so the reader shares the character's dread.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Withheld information creates anticipation — the reader constructs theories, investing emotionally in the outcome.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: structure controls WHEN the reader feels tension — the content supplies what, the structure supplies how intensely.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Slow pacing, withheld information, cliff-hangers. (b) Structure controls the timing and intensity of reader tension.",
            commonErrors: [
              "Listing suspense techniques without explaining reader effect.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a writer choose a long, flowing sentence instead of several short ones?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Syntax choice",
                statement:
                  "Sentence length and flow mirror content and control pace.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Long sentences create flow — they carry the reader through connected actions or flowing description without pause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They can mirror continuous motion, speech patterns or a character's racing thoughts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subordination within long sentences can also create hierarchy — showing which details matter most.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Long sentences create flow and continuity — mirroring motion, speech or unbroken thought where short sentences would fragment.",
            commonErrors: [
              "Saying long sentences are 'more descriptive' without explaining effect.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "First-person narration most often creates for the reader:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A sense of distance and objectivity",
              },
              {
                id: "b",
                text: "Intimacy and immediacy of the narrator's perspective",
              },
              { id: "c", text: "Complete knowledge of all characters" },
              { id: "d", text: "Access to multiple viewpoints at once" },
              { id: "e", text: "A detached, report-like tone" },
            ],
            correctChoiceId: "b",
          },
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
                  "'I' puts the reader inside the narrator's experience — intimate and immediate, though limited to what they know.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Intimacy and immediacy of the narrator's perspective.",
            commonErrors: [
              "Confusing first-person intimacy with omniscient knowledge.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A writer describes a character's fear without ever naming it. Analyse how language and structure might convey it.",
          parts: [
            {
              label: "a",
              prompt:
                "Give two language techniques that could convey fear indirectly.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how structure could reinforce the sense of fear.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Indirect characterisation",
                statement:
                  "Technique and structure together convey emotion without naming it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sensory imagery: trembling hands, cold sweat, sharp sounds — physical details readers associate with fear.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Fragmented syntax or sudden short sentences mirror panic — the form enacts the emotion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Loaded diction: 'shrieked', 'cowered', 'dread' — word choice with fearful connotations.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Pacing: accelerating short paragraphs before the feared event quickens the reader's pulse.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Withholding the feared object or delaying its arrival prolongs suspense and dread.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: indirect language keeps the reader inferring — active engagement makes the fear felt rather than stated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Sensory imagery, fragmented syntax, loaded diction. (b) Accelerating pacing and withheld information intensify fear.",
            commonErrors: [
              "Naming the emotion ('she was afraid') instead of showing it through technique.",
            ],
          },
        },
        {
          id: "cieilit-u1-mth-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the effects of first-person and third-person narration on a reader.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe one key effect of first-person narration.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Describe one key effect of third-person narration and how it differs.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative perspective",
                statement:
                  "Point of view controls intimacy, reliability and scope of knowledge.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First-person creates intimacy — the reader experiences events directly through the narrator's senses and feelings.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It can expose bias — an unreliable first-person narrator makes the reader question every claim.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Effect: emotional immediacy, but knowledge is limited to what the narrator perceives.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Third-person offers distance — the narrator can observe multiple characters and wider events.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It can feel more objective or omniscient — the reader sees beyond any single character's view.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: first-person trades breadth for intimacy; third-person trades intimacy for scope — choice serves the text's purpose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) First-person: intimacy and immediacy, limited knowledge. (b) Third-person: distance and breadth — intimacy traded for scope.",
            commonErrors: [
              "Claiming one perspective is 'better' without linking to purpose.",
            ],
          },
        },
      ],
    },
  ],
};
