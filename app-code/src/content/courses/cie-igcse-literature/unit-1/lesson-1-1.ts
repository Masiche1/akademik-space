import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cieilit-u1-lesson-1-1",
  code: "1-1",
  title: "Reading literature: theme and meaning",
  goal: "I CAN identify themes and meanings in literary texts and explain how they develop.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Section 1: Reading literature",
  ],
  vocabulary: [
    {
      term: "Theme",
      definition: "The central idea or message explored throughout a text.",
    },
    {
      term: "Motif",
      definition: "A recurring image, symbol or idea that develops a theme.",
    },
    {
      term: "Symbolism",
      definition:
        "Using objects, people or events to represent abstract ideas.",
    },
    {
      term: "Irony",
      definition:
        "A contrast between appearance and reality — situational, dramatic or verbal.",
    },
    {
      term: "Ambiguity",
      definition: "Deliberate openness to multiple interpretations.",
    },
    {
      term: "Context",
      definition:
        "The circumstances — historical, social, cultural — surrounding a text's creation.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u1-theme",
      title: "Themes and meaning in literature",
      skill:
        "Identify themes and analyse how writers develop them through language and structure.",
      lesson: {
        sections: [
          {
            heading: "Finding themes",
            body: "A **theme** is what a text is fundamentally about — love, power, loss, identity, justice. Look for **motifs** (recurring images), character struggles and turning points. Themes are rarely stated directly — they emerge from patterns across the whole text. Common IGCSE themes include conflict, coming of age, society vs individual, and the passage of time.",
          },
          {
            heading: "How writers develop themes",
            body: "Writers use **language** (word choice, imagery, tone), **structure** (narrative order, pacing, climax) and **character** (choices, conflicts, development) to explore themes. **Symbolism** deepens meaning — e.g. a storm symbolising emotional turmoil. **Irony** creates gaps between appearance and reality that reveal deeper truths.",
          },
          {
            heading: "Context and interpretation",
            body: "A text's **context** — when and where it was written — shapes its themes. A poem about war written during wartime carries different weight than one written centuries later. Context helps explain attitudes, values and references, but interpretation should always be grounded in the text itself.",
          },
        ],
        keyFormulas: [
          {
            name: "Theme evidence",
            statement:
              "Recurring motifs + character choices + turning points reveal themes",
          },
          {
            name: "Context lens",
            statement:
              "When/where written → attitudes and values → interpretation",
          },
        ],
        workedExample: {
          problem:
            "A novel repeatedly shows a character torn between duty to family and personal desire. What theme is emerging?",
          solution:
            "The theme is conflict between individual desire and social/family obligation — developed through the character's repeated dilemmas.",
        },
      },
      questions: [
        {
          id: "cieilit-u1-thm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A theme in literature is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot summary of a text" },
              { id: "b", text: "The central idea or message explored" },
              { id: "c", text: "The writer's biography" },
              { id: "d", text: "The setting of the story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme",
                statement:
                  "The central idea or message explored throughout a text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Theme = underlying idea (love, power, loss); plot, biography and setting are different elements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) The central idea or message explored.",
            commonErrors: ["Confusing theme with plot or setting."],
          },
        },
        {
          id: "cieilit-u1-thm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a 'motif' is and how it helps develop a theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motif",
                statement:
                  "Recurring image/symbol developing a theme through repetition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A motif is a recurring image, symbol or idea — e.g. light, darkness, journeys, broken objects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Its repetition reinforces the theme — e.g. recurring darkness images develop a theme of despair or secrecy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Tracking motifs shows how the writer builds meaning cumulatively rather than stating it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A recurring image/symbol whose repetition develops a theme through accumulation.",
            commonErrors: [
              "Confusing motif with theme itself or with a single symbol.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can context help interpret a literary text? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contextual interpretation",
                statement:
                  "Historical/social setting shapes attitudes and meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Context = when and where the text was written — it shapes the writer's attitudes and available ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: a Victorian novel's treatment of women reflects contemporary gender attitudes — knowing this deepens interpretation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Context explains references and values but analysis must still be grounded in the text itself.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Context explains attitudes and references — e.g. Victorian gender views shape a novel's portrayal of women.",
            commonErrors: [
              "Writing about context without linking it to specific textual features.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse how a writer might develop the theme of 'power' in a text.",
          parts: [
            {
              label: "a",
              prompt:
                "Give two textual features that could develop this theme.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how structure could reinforce the theme.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme development",
                statement:
                  "Language, character and structure work together to explore themes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Language: loaded word choices, metaphors of domination or submission reveal attitudes to power.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Character: a character's rise or fall shows power's costs and corruptions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Imagery/symbolism: e.g. chains, thrones or caged birds symbolise power relations.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Structure: placing power struggles at climaxes or turning points emphasises their importance.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Pacing: slowing during confrontation scenes forces attention on power dynamics.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: theme emerges from cumulative choices — structure amplifies what language and character establish.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Language choices, character arcs, symbolism. (b) Climax placement and pacing amplify the theme.",
            commonErrors: [
              "Listing features without explaining how they develop the theme.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'motif' in a literary text is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main plot event of the story" },
              {
                id: "b",
                text: "A recurring image or idea that develops a theme",
              },
              { id: "c", text: "The writer's personal opinion" },
              { id: "d", text: "The story's stated moral lesson" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motif",
                statement:
                  "A recurring image, symbol or idea that develops a theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A motif is a recurring element — e.g. light, journeys, broken objects — whose repetition builds meaning.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) A recurring image or idea that develops a theme.",
            commonErrors: ["Confusing a motif with the theme it develops."],
          },
        },
        {
          id: "cieilit-u1-thm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Symbolism' in literature means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Using objects or events to represent abstract ideas",
              },
              { id: "b", text: "Repeating the same word for emphasis" },
              { id: "c", text: "Describing a setting in great detail" },
              { id: "d", text: "Writing the story in first person" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symbolism",
                statement:
                  "Using objects, people or events to represent abstract ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Symbolism lets concrete things stand for abstract ideas — e.g. a caged bird representing freedom lost.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Using objects or events to represent abstract ideas.",
            commonErrors: ["Confusing symbolism with simple description."],
          },
        },
        {
          id: "cieilit-u1-thm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A poem about soldiers written during wartime carries extra emotional weight mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses a regular rhyme scheme" },
              {
                id: "b",
                text: "Its context gives it contemporary urgency and shared attitudes",
              },
              { id: "c", text: "It is longer than other poems" },
              { id: "d", text: "It contains a volta" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contextual interpretation",
                statement:
                  "Historical/social setting shapes attitudes and meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Written during wartime, the poem speaks to lived experience — readers share the attitudes and fears of the moment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Its context gives it contemporary urgency and shared attitudes.",
            commonErrors: [
              "Attributing weight to form alone rather than context.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how situational irony can develop a theme of appearances versus reality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Irony and theme",
                statement:
                  "The gap between appearance and reality reveals deeper truths.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Situational irony occurs when events contradict expectations — e.g. a praised 'hero' is revealed to be selfish.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The contrast between what seems true and what is true exposes the theme — surfaces deceive, reality differs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeated ironic reversals accumulate into an argument that appearances cannot be trusted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Situational irony exposes the gap between appearance and reality, developing the theme through repeated reversals.",
            commonErrors: [
              "Describing the ironic event without linking it to the theme.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can a writer use a recurring symbol to develop the theme of memory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbol and motif",
                statement:
                  "A recurring symbol accumulates associations that develop a theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The writer chooses an object tied to memory — e.g. a faded photograph, an old key, a letter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each recurrence adds associations — decay, warmth, regret — so the symbol gathers meaning over the text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "By the end the symbol embodies the theme: memory preserves, distorts or haunts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A recurring symbol accumulates associations until it embodies the theme of memory.",
            commonErrors: [
              "Naming a symbol without explaining how repetition develops meaning.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways a character's choices can reveal a theme in a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character and theme",
                statement:
                  "Choices under pressure reveal values and develop themes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choices under pressure reveal values — e.g. choosing duty over desire dramatises the theme of obligation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consequences show the cost of the theme — the character's suffering or reward embodies its argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A pattern of similar choices across the text builds a cumulative argument about the theme.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Choices reveal values under pressure; consequences and patterns embody the theme's costs and argument.",
            commonErrors: [
              "Summarising what the character does without analysing the choice's significance.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Analyse how a writer might use contrast between two settings to develop a theme of freedom and confinement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setting and theme",
                statement:
                  "Contrasting settings externalise opposing poles of a theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One setting is rendered as open and liberating — wide spaces, light, movement — representing freedom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other is rendered as enclosed and restrictive — small rooms, bars of shadow, stillness — representing confinement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Movement between settings dramatises the theme — the character's fate turns on which space they can enter.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Contrasting settings externalise freedom and confinement; movement between them dramatises the theme.",
            commonErrors: [
              "Describing both settings without analysing their thematic contrast.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'ambiguity' can be seen as a strength in theme development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ambiguity",
                statement:
                  "Deliberate openness allows multiple interpretations of meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ambiguity leaves key moments open — e.g. an ending that could be read as hope or despair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It invites the reader to participate, weighing evidence for different interpretations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sustained multiple readings make the theme richer and more enduring than a single stated message.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ambiguity invites multiple readings, deepening and sustaining the theme's meaning.",
            commonErrors: [
              "Treating ambiguity as an error rather than a deliberate technique.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question best helps identify a text's theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What happens in the final chapter?" },
              {
                id: "b",
                text: "What idea is explored repeatedly through images, choices and turning points?",
              },
              { id: "c", text: "How many pages does the book have?" },
              { id: "d", text: "Who was the book's publisher?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme identification",
                statement:
                  "Themes emerge from patterns of image, choice and structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Themes are found in recurring patterns — motifs, dilemmas, turning points — not in plot summary or publication details.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) What idea is explored repeatedly through images, choices and turning points?",
            commonErrors: [
              "Confusing theme with plot events or publication facts.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan an essay on how a novel develops the theme of 'coming of age'.",
          parts: [
            {
              label: "a",
              prompt:
                "Give a thesis and two textual features that could develop this theme.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how structure could track the character's growth.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay planning",
                statement:
                  "Thesis + integrated evidence + structural analysis = coherent argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The novel presents coming of age as a loss of innocence bought at a price.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Feature 1: the protagonist's key decision under pressure reveals new awareness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Feature 2: recurring images of childhood (e.g. toys, schoolyard) contrasted with adult spaces.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Structure: episodes ordered chronologically track the character's successive awakenings.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "A climax at the moment of realisation gives the theme its decisive weight.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: structure enacts the theme — the reader experiences growth through the plot's progression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis on lost innocence + decision and imagery features. (b) Chronology and climax enact the growth.",
            commonErrors: [
              "Listing events of growing up without analysing how they develop the theme.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a writer's tone toward a subject shape a text's theme? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone and theme",
                statement:
                  "Attitude conveyed through word choice colours the theme's meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tone is the writer's attitude — e.g. elegiac, satirical, reverent — conveyed through diction and imagery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: a nostalgic tone toward a lost childhood develops a theme of innocence's fragility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The same subject treated with different tones yields different themes — tone directs interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tone shapes theme by colouring the subject — e.g. nostalgia turns childhood into a theme of lost innocence.",
            commonErrors: [
              "Describing tone without connecting it to thematic meaning.",
            ],
          },
        },
        {
          id: "cieilit-u1-thm-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse how a writer might develop the theme of 'loss' through both language and structure.",
          parts: [
            {
              label: "a",
              prompt:
                "Give two language features that could convey loss.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how structure could reinforce the theme of loss.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme development",
                statement:
                  "Language and structure work together to explore themes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Language: sparse, elegiac diction — words of absence ('empty', 'silent', 'gone') externalise loss.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Imagery: hollow, cold or fading images — an unlit room, a wilting flower — embody absence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Recurring motifs (e.g. an untouched chair) accumulate grief through repetition.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Structure: placing the moment of loss at the climax gives it irreversible weight.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Pacing: slowing after the loss forces the reader to linger in grief.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: language makes loss felt; structure controls when and how intensely it is experienced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Sparse diction and fading imagery convey absence. (b) Climax placement and slowed pacing intensify loss.",
            commonErrors: [
              "Identifying techniques without explaining their effect on the theme.",
            ],
          },
        },
      ],
    },
  ],
};
