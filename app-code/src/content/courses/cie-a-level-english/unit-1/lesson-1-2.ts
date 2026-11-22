import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cial-e-u1-lesson-1-2",
  code: "1-2",
  title: "Analysing structure and form",
  goal: "I CAN analyse how text structure, openings, endings and narrative form create meaning.",
  standards: ["9093 Paper 2: structure and form"],
  vocabulary: [
    {
      term: "Structure",
      definition:
        "The way a text is organised — chronological, thematic, cyclical.",
    },
    {
      term: "Form",
      definition:
        "The genre or shape of a text: essay, letter, poem, report, narrative.",
    },
    {
      term: "Framing device",
      definition: "An opening and closing that encloses the main content.",
    },
    {
      term: "Circular structure",
      definition: "A text that ends where it began, creating symmetry.",
    },
    {
      term: "Juxtaposition",
      definition: "Placing contrasting elements side by side for effect.",
    },
    {
      term: "Enjambment",
      definition: "Running a sentence across a line break in poetry.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u1-text-structure",
      title: "Text structure and organisation",
      skill:
        "Analyse how texts are organised and how structure creates effect.",
      lesson: {
        sections: [
          {
            heading: "Organisational patterns",
            body: "Texts organise information differently: chronological (time order), thematic (by topic), spatial (by location), problem/solution, cause/effect, compare/contrast. Identifying the pattern reveals the writer's logic — a chronological narrative builds suspense differently from a thematic essay.",
          },
          {
            heading: "Openings and endings",
            body: "Openings establish voice, context and purpose — a question hooks, a statistic shocks, a scene immerses. Endings resolve, linger, surprise or circle back. Analyse what the ending does: does it satisfy, unsettle, or reframe the whole text?",
          },
          {
            heading: "Juxtaposition and contrast",
            body: "Placing unlike elements together creates meaning through contrast: rich/poor, past/present, speech/silence. Structural juxtaposition (scene changes, paragraph breaks) can be as powerful as linguistic devices.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure analysis",
            statement:
              "Pattern+openings+endings+juxtaposition=structural meaning.",
          },
        ],
        workedExample: {
          problem: "A story begins with a funeral and ends with a birth.",
          solution:
            "Circular/contrastive structure — death and birth frame the narrative, suggesting renewal or the cyclical nature of life.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-ts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'circular structure'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A text organised by theme" },
              { id: "b", text: "A text with no ending" },
              { id: "c", text: "A text about circles" },
              { id: "d", text: "A text that ends where it began" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circular structure",
                statement:
                  "Ending mirrors or returns to the opening, creating symmetry.",
              },
            ],
            steps: [
              {
                reasoning: "Circular = returns to start.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Ends where it began",
            commonErrors: ["Confusing with chronological structure."],
          },
        },
        {
          id: "cial-e-u1-ts-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and analyse its structure.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "She found the letter on a Tuesday, in the pocket of a coat she hadn't worn in years.\n\nIt began simply: 'I should have written sooner.' And ended the same way, the ink faded to the colour of weak tea.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure analysis",
                statement: "Framing device and circularity create meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing: letter within narrative — nested structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Circular echo: 'should have written sooner' at both ends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect: regret and belatedness emphasised.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Framed narrative with circular echo emphasises regret and delay.",
            commonErrors: ["Describing content without analysing structure."],
          },
        },
        {
          id: "cial-e-u1-ts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a text's ending shape the reader's interpretation of the whole?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ending function",
                statement:
                  "Endings resolve, complicate, or reframe — they colour everything before them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resolution satisfies; complication unsettles; reframe changes meaning retroactively.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "A circular ending returns meaning to the opening.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "An open ending leaves interpretation to the reader.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Accurate explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Endings resolve, complicate or reframe — colouring the whole text.",
            commonErrors: [
              "Saying 'the ending is important' without specifics.",
            ],
          },
        },
        {
          id: "cial-e-u1-ts-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Text structure and form.",
          parts: [
            { label: "a", prompt: "Define circular structure.", marks: 1 },
            {
              label: "b",
              prompt: "Identify the structure in the extract about the letter.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How does framing affect meaning?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Name three organisational patterns and their effects.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure",
                statement: "Definition+identification+framing+patterns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ends where it began.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Framed narrative: letter within story.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Circular echo of 'should have written sooner'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effect: regret emphasised.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Framing distances or contextualises content.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Creates layers of meaning.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning:
                  "Any three of chronological, thematic, spatial, problem/solution.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Effects linked.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Three valid.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) ends=begins (b) framed+circular (c) layers meaning (d) three patterns",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Structure analysed.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Framing explained.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Three patterns+effects.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Two or partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Ignoring structural features."],
          },
        },
        {
          id: "cial-e-u1-ts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organisational pattern presents events in time order?",
          response: { type: "mcq", choices: [ { id: "a", text: "Chronological" }, { id: "b", text: "Thematic" }, { id: "c", text: "Circular" }, { id: "d", text: "Spatial" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Chronological structure", statement: "Events are ordered by time." }], steps: [{ reasoning: "Time order defines chronological organisation.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Chronological", commonErrors: ["Confusing chronological with circular structure."] },
        },
        {
          id: "cial-e-u1-ts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which opening is most likely to create suspense?",
          response: { type: "mcq", choices: [ { id: "a", text: "A summary of the plot" }, { id: "b", text: "A question about the narrator's disappearance" }, { id: "c", text: "A list of characters" }, { id: "d", text: "A statistic about rainfall" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Suspenseful opening", statement: "An unanswered question withholds information and creates anticipation." }], steps: [{ reasoning: "The disappearance question withholds key information.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Question about the disappearance", commonErrors: ["Choosing a neutral factual opening."] },
        },
        {
          id: "cial-e-u1-ts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main effect of structural juxtaposition?",
          response: { type: "mcq", choices: [ { id: "a", text: "It speeds up every paragraph" }, { id: "b", text: "It places contrasting elements together to create meaning" }, { id: "c", text: "It repeats the same idea" }, { id: "d", text: "It removes all punctuation" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Juxtaposition", statement: "Contrast beside contrast highlights difference and meaning." }], steps: [{ reasoning: "Juxtaposition works through placed contrast.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Contrasting elements create meaning", commonErrors: ["Describing juxtaposition as mere description."] },
        },
        {
          id: "cial-e-u1-ts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which ending best creates circular structure?",
          response: { type: "mcq", choices: [ { id: "a", text: "The same image or situation returns" }, { id: "b", text: "A moral is stated directly" }, { id: "c", text: "The narrator falls asleep" }, { id: "d", text: "A new problem begins" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Circular structure", statement: "The ending returns to or mirrors the opening." }], steps: [{ reasoning: "Returning to the opening image creates circularity.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Same image returns", commonErrors: ["Confusing circularity with a sequel hook."] },
        },
        {
          id: "cial-e-u1-ts-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a framing device do?",
          response: { type: "mcq", choices: [ { id: "a", text: "Removes the narrator" }, { id: "b", text: "Lists all the themes" }, { id: "c", text: "Changes the tense" }, { id: "d", text: "Encloses the main content between an opening and closing" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Framing device", statement: "An opening and closing enclose the central material." }], steps: [{ reasoning: "Framing encloses content at both ends.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Opening and closing enclose content", commonErrors: ["Confusing framing with flashback."] },
        },
        {
          id: "cial-e-u1-ts-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main organisational patterns are introduced in the lesson?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "definition", name: "Organisational patterns", statement: "Chronological, thematic, spatial, problem/solution, cause/effect and compare/contrast." }], steps: [{ reasoning: "Six patterns are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "6", commonErrors: ["Counting only chronological and thematic patterns."] },
        },
        {
          id: "cial-e-u1-ts-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a simple framing device, how many boundary elements enclose the content?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "Framing device", statement: "An opening and a closing boundary." }], steps: [{ reasoning: "Opening plus closing gives two boundaries.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Counting only the opening."] },
        },
        {
          id: "cial-e-u1-ts-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many contrasting pairs are commonly used to create structural juxtaposition in the lesson examples?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Juxtaposed contrasts", statement: "Rich/poor, past/present and speech/silence are contrast pairs." }], steps: [{ reasoning: "Three contrast pairs are exemplified.", marks: 1, markCode: "AO2" }], finalAnswer: "3", commonErrors: ["Listing contrasts as separate effects rather than pairs."] },
        },
        {
          id: "cial-e-u1-ts-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many endings are identified as possible functions of a text's close?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Ending functions", statement: "Endings can resolve, linger, surprise or circle back." }], steps: [{ reasoning: "Four ending functions are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting the reframing effect of endings."] },
        },
        {
          id: "cial-e-u1-ts-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how an opening can establish a text's purpose.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Opening function", statement: "Openings signal voice, context and purpose through their chosen method." }], steps: [{ reasoning: "A strong answer links the opening device to the writer's likely purpose, such as shocking, involving or informing the reader.", marks: 2, markCode: "AO2" }], finalAnswer: "The opening signals purpose by choosing a hook, statistic, scene or question that frames the reader's expectations.", commonErrors: ["Describing the opening without explaining its purpose."] },
        },
        {
          id: "cial-e-u1-ts-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the effects of chronological and thematic organisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Structural patterns", statement: "Chronology builds sequence; theme builds conceptual links." }], steps: [{ reasoning: "A strong answer contrasts suspense or development in time order with synthesis or emphasis in thematic order.", marks: 2, markCode: "AO2" }], finalAnswer: "Chronological structure develops events through time, while thematic structure groups ideas to build an argument or pattern.", commonErrors: ["Naming the patterns without comparing their effects."] },
        },
        {
          id: "cial-e-u1-ts-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why an ending might 'reframe' a whole text.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Reframing ending", statement: "A final revelation can change the meaning of earlier events." }], steps: [{ reasoning: "A strong answer explains that retrospective meaning makes earlier details seem different and rewards rereading.", marks: 2, markCode: "AO3" }], finalAnswer: "A reframing ending changes how earlier events are understood, giving the whole text a new interpretive layer.", commonErrors: ["Saying the ending is surprising without explaining reinterpretation."] },
        },
      ],
    },
    {
      id: "cial-e-u1-form-devices",
      title: "Form and poetic/dramatic devices",
      skill:
        "Analyse how form (poetry, drama, prose) shapes meaning in unseen texts.",
      lesson: {
        sections: [
          {
            heading: "Poetic form",
            body: "Line breaks, stanza shape, rhyme, rhythm and enjambment are meaning-making choices. A sonnet's constraints, a villanelle's refrains, free verse's openness — form enacts content. Analyse why the poet chose this shape.",
          },
          {
            heading: "Dramatic form",
            body: "Plays use dialogue, stage directions, soliloquies, asides and dramatic irony. Stage directions reveal what characters hide; pauses and gestures carry subtext. Consider how the scene might be performed.",
          },
          {
            heading: "Prose form",
            body: "Prose varies sentence length, paragraph structure and narrative voice. Stream of consciousness mimics thought; short declarative sentences create tension; long periodic sentences build suspense. Voice (first/third person, reliable/unreliable) shapes everything.",
          },
        ],
        keyFormulas: [
          {
            name: "Form analysis",
            statement:
              "Form enacts meaning — analyse why this shape was chosen.",
          },
        ],
        workedExample: {
          problem: "A poem uses irregular line lengths and no rhyme.",
          solution:
            "Free verse — the irregularity mirrors the chaotic or natural subject; absence of rhyme creates openness or realism.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-fd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'enjambment'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A stage direction" },
              { id: "b", text: "A type of rhyme" },
              { id: "c", text: "A stanza break" },
              { id: "d", text: "Running a sentence across a line break" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enjambment",
                statement:
                  "Sentence continues across a line break without punctuation.",
              },
            ],
            steps: [
              {
                reasoning: "Enjambment = line-break mid-sentence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sentence across line break",
            commonErrors: ["Confusing with end-stopped lines."],
          },
        },
        {
          id: "cial-e-u1-fd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the play extract and analyse its form.",
          extract: {
            title: "The Confession",
            author: "Written for Akademik Space",
            source: "Play extract",
            text: "ELENA: (to herself, not looking at DEV) I saw the letter.\n\nDEV: What letter?\n\nELENA: (finally meeting his eyes) The one you think I never found.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic form",
                statement: "Stage directions+dialogue+subtext=create meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stage direction 'to herself' creates secrecy — the audience sees what DEV may not.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Short dialogue + pause builds tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Dramatic irony: Elena knows about the letter; Dev's 'what letter' is innocent or feigned.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Stage directions and dramatic irony create tension and hidden meaning.",
            commonErrors: ["Ignoring stage directions."],
          },
        },
        {
          id: "cial-e-u1-fd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is 'form enacts meaning' a useful critical approach?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form-function",
                statement:
                  "The shape of a text often mirrors or amplifies its content.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A sonnet's constraints can mirror emotional containment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Free verse's openness can mirror natural or chaotic subjects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Circular structure enacts cyclical themes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate explanation with examples.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Form often mirrors content — the shape enacts the meaning.",
            commonErrors: ["Describing form without linking to meaning."],
          },
        },
        {
          id: "cial-e-u1-fd-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Form and devices.",
          parts: [
            { label: "a", prompt: "Define enjambment.", marks: 1 },
            {
              label: "b",
              prompt: "How do stage directions create meaning?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why might a poet choose free verse?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Analyse the form of the play extract about Elena and Dev.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form",
                statement:
                  "Definition+stage directions+free verse+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sentence across line break.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reveal action and gesture beyond words.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Create subtext — words vs actions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Guide performance and audience reception.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Openness suits natural/chaotic subjects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Absence of rhyme creates realism or freedom.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Stage direction 'to herself' = secrecy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Dramatic irony: Dev's 'what letter' vs Elena's knowledge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Tension from pause and short dialogue.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) line-break mid-sentence (b) action+subtext (c) openness=freedom (d) secrecy+irony+tension",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Directions analysed.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Free verse explained.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Form analysed.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Ignoring stage directions and form."],
          },
        },
        {
          id: "cial-e-u1-fd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a soliloquy in drama?",
          response: { type: "mcq", choices: [ { id: "a", text: "A list of characters" }, { id: "b", text: "A stage direction" }, { id: "c", text: "A speech spoken to the audience by one character alone" }, { id: "d", text: "A type of rhyme" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Soliloquy", statement: "A character speaks private thoughts aloud, usually alone." }], steps: [{ reasoning: "Soliloquy reveals inner thought directly.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Private speech to the audience", commonErrors: ["Confusing soliloquy with dialogue."] },
        },
        {
          id: "cial-e-u1-fd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What creates dramatic irony?",
          response: { type: "mcq", choices: [ { id: "a", text: "A poem is read aloud" }, { id: "b", text: "The audience knows more than at least one character" }, { id: "c", text: "The audience knows less than the characters" }, { id: "d", text: "Two characters speak in rhyme" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Dramatic irony", statement: "The audience's superior knowledge creates tension." }], steps: [{ reasoning: "Dramatic irony depends on audience knowledge exceeding a character's.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Audience knows more than a character", commonErrors: ["Reversing the knowledge gap."] },
        },
        {
          id: "cial-e-u1-fd-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature most clearly defines free verse?",
          response: { type: "mcq", choices: [ { id: "a", text: "Exactly fourteen lines" }, { id: "b", text: "A repeated refrain" }, { id: "c", text: "Absence of regular metre and rhyme" }, { id: "d", text: "A fixed rhyme scheme" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Free verse", statement: "Poetry without regular metre or rhyme." }], steps: [{ reasoning: "Free verse rejects fixed metrical and rhyme patterns.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** No regular metre or rhyme", commonErrors: ["Assuming free verse has no structure."] },
        },
        {
          id: "cial-e-u1-fd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are stage directions analytically important?",
          response: { type: "mcq", choices: [ { id: "a", text: "They list the audience" }, { id: "b", text: "They reveal action, gesture and subtext beyond spoken words" }, { id: "c", text: "They prove the play is long" }, { id: "d", text: "They replace dialogue" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Stage directions", statement: "Directions show performance and hidden meaning." }], steps: [{ reasoning: "Directions add visual and psychological information.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** They reveal action and subtext", commonErrors: ["Treating directions as optional scenery notes."] },
        },
        {
          id: "cial-e-u1-fd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which prose choice most directly controls narrative intimacy?",
          response: { type: "mcq", choices: [ { id: "a", text: "A contents page" }, { id: "b", text: "A bibliography" }, { id: "c", text: "A long title" }, { id: "d", text: "First-person narration" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Narrative voice", statement: "First person creates closeness to the narrator's consciousness." }], steps: [{ reasoning: "First-person voice gives direct subjective access.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** First-person narration", commonErrors: ["Confusing voice with tense."] },
        },
        {
          id: "cial-e-u1-fd-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many major forms of writing are contrasted in the lesson: poetry, drama and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Major forms", statement: "Poetry, drama and prose." }], steps: [{ reasoning: "Three major forms are studied.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Forgetting prose as a form."] },
        },
        {
          id: "cial-e-u1-fd-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many basic narrative perspective types are described: first, second and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Perspective types", statement: "First, second and third person." }], steps: [{ reasoning: "Three person-based perspectives are named.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Counting omniscient and limited as separate persons rather than third-person modes."] },
        },
        {
          id: "cial-e-u1-fd-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the play extract, how many parenthetical stage directions are printed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Stage directions", statement: "Parentheses mark performance information." }], steps: [{ reasoning: "Two parenthetical directions appear in the extract.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Counting character names as directions."] },
        },
        {
          id: "cial-e-u1-fd-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many common types of poetic line ending are contrasted: end-stopped and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Line endings", statement: "End-stopped lines and enjambed lines." }], steps: [{ reasoning: "Two line-ending types are contrasted.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Confusing line endings with rhyme sounds."] },
        },
        {
          id: "cial-e-u1-fd-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a playwright can create subtext through form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Subtext", statement: "Stage directions, pauses and delivery can contradict or deepen dialogue." }], steps: [{ reasoning: "A strong answer explains that performance cues reveal what characters conceal, creating a gap between words and meaning.", marks: 2, markCode: "AO2" }], finalAnswer: "Subtext arises when stage directions, pauses or gestures reveal meanings the spoken dialogue hides.", commonErrors: ["Listing dramatic devices without explaining the gap between speech and action."] },
        },
        {
          id: "cial-e-u1-fd-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a poet choose irregular lines and no rhyme?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Free verse effect", statement: "Informal shape can mirror natural, chaotic or intimate subject matter." }], steps: [{ reasoning: "A strong answer links the open form to freedom, realism or emotional irregularity rather than treating form as accidental.", marks: 2, markCode: "AO3" }], finalAnswer: "Irregular free verse can make the poem feel natural, spontaneous or emotionally unrestrained, suiting open or chaotic subjects.", commonErrors: ["Saying free verse is random rather than meaningful."] },
        },
        {
          id: "cial-e-u1-fd-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare how poetry and drama use form to create meaning.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Poetic and dramatic form", statement: "Poetry shapes sound and line; drama shapes performance and audience awareness." }], steps: [{ reasoning: "A strong answer contrasts line-based effects with stage-based effects while noting both can control pace and meaning.", marks: 2, markCode: "AO2" }], finalAnswer: "Poetry uses line, stanza and sound to shape meaning; drama uses dialogue, directions and performance to shape meaning for an audience.", commonErrors: ["Describing one form while ignoring the other."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u1-structure-notes",
      title: "Structure and form — revision notes",
      summary:
        "Text organisation, openings/endings, form and poetic/dramatic devices.",
      sections: [
        {
          heading: "Structure",
          body: "Chronological, thematic, spatial, problem/solution, circular. Openings hook; endings resolve, complicate or reframe. Juxtaposition creates contrast.",
        },
        {
          heading: "Form",
          body: "Poetry: line breaks, stanzas, enjambment, rhyme. Drama: dialogue, stage directions, subtext, dramatic irony. Prose: sentence length, paragraphing, narrative voice.",
        },
        {
          heading: "Key principle",
          body: "Form enacts meaning — analyse why this shape was chosen, not just what it is.",
        },
        {
          heading: "Exam checklist",
          body: "Did I identify the organisational pattern? Did I analyse openings/endings? Did I consider form's effect on meaning?",
        },
      ],
    },
  ],
};
