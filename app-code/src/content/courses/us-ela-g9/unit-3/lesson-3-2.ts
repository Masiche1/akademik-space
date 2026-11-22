import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const TIDES: TextExtract = {
  title: "The Science of Tides (excerpt)",
  author: "Written for Akademik Space",
  text: "Tides are the regular rise and fall of the ocean, and they are caused mainly by the gravitational pull of the Moon. Because the Moon pulls hardest on the water facing it, the ocean bulges toward the Moon; a second bulge forms on the opposite side of Earth. As Earth rotates, a coastline passes through both bulges each day, which produces two high tides and two low tides. The Sun also pulls on the oceans, though its effect is weaker. When the Sun, Moon and Earth line up, their combined pull creates spring tides, the highest of the month. When they form a right angle, the pulls partly cancel, producing the smaller neap tides.",
};

const SHORE: TextExtract = {
  title: "The Ferry Home (draft)",
  author: "Written for Akademik Space",
  text: "The last ferry was leaving, and Marisol was still on the wrong side of the harbor. She ran. At the dock, the ropes were already coiled.\n\nTwo hours earlier, she had promised her grandmother she would be home before dark. Her grandmother had waited on that same dock thirty years ago, watching for a boat that never came. Marisol knew the story by heart.\n\nThe engine rumbled. She jumped, landed hard on the deck, and the ferry pulled away. Behind her, the lights of the town went small and gold. She was going home, and she was not the same girl who had left that morning.",
};

export const lesson32: Lesson = {
  id: "ela9-u3-lesson-3-2",
  code: "3-2",
  title: "Informative and Narrative Writing",
  goal: "I CAN organize complex ideas in an informative text with precise vocabulary and varied transitions, and craft a narrative with multiple plot lines, controlled pacing, reflection and a resolution.",
  standards: [
    "W.9-10.2",
    "W.9-10.2a",
    "W.9-10.2c",
    "W.9-10.2d",
    "W.9-10.3",
    "W.9-10.3a",
    "W.9-10.3b",
    "W.9-10.3c",
    "W.9-10.3e",
  ],
  vocabulary: [
    {
      term: "Domain-specific vocabulary",
      definition:
        "Precise terms belonging to a particular subject, such as 'neap tide' in oceanography.",
    },
    {
      term: "Organizing structure",
      definition:
        "The pattern that arranges ideas, such as cause and effect, compare and contrast, or sequence.",
    },
    {
      term: "Transition",
      definition:
        "A word or phrase that links ideas and shows how they relate.",
    },
    {
      term: "Plot line",
      definition:
        "A sequence of connected events; a narrative may weave together more than one.",
    },
    {
      term: "Pacing",
      definition:
        "The speed at which a story moves, controlled by sentence length, detail and summary versus scene.",
    },
    {
      term: "Reflection",
      definition:
        "A narrator's or character's thoughts about the meaning of events.",
    },
    {
      term: "Resolution",
      definition:
        "The part of a narrative that resolves the conflict and shows what has changed.",
    },
  ],
  concepts: [
    {
      id: "ela9-u3-informative-writing",
      title: "Informative writing: organization, vocabulary and transitions",
      skill:
        "Organize complex ideas, concepts and information so that each element builds on the last, using precise domain-specific vocabulary and varied transitions.",
      lesson: {
        sections: [
          {
            heading: "Organizing complex ideas",
            body: "An **informative or explanatory text** examines a topic and conveys ideas clearly and accurately. Begin with a **controlling idea** that tells the reader what the text will explain. Then choose a structure that fits the content: **cause and effect** for processes, **compare and contrast** for two subjects, **sequence** for steps. Each paragraph should build on the one before so the reader's understanding deepens. Use headings, definitions, examples, quotations and facts as needed. Choose the most significant and relevant facts, and leave out interesting but unrelated details.",
          },
          {
            heading: "Precise vocabulary and varied transitions",
            body: "Use **precise language and domain-specific vocabulary** to explain the topic, and define terms the audience may not know. 'Spring tides' is exact, while 'big tides' is not. Use **varied transitions** to link major sections and to clarify relationships among ideas: 'because' and 'as a result' (cause), 'in contrast' and 'whereas' (comparison), 'for example' (illustration), 'as Earth rotates' (time and sequence). Repeating the same transition throughout, such as 'also', makes writing mechanical. Keep a formal style and an objective tone, and end with a conclusion that follows from the information presented.",
          },
        ],
        keyFormulas: [
          {
            name: "Controlling idea",
            statement:
              "A sentence that tells the reader what the text will explain.",
          },
          {
            name: "Organizing structure",
            statement:
              "Cause and effect, compare and contrast, sequence or problem and solution, chosen to fit the content.",
          },
          {
            name: "Domain-specific vocabulary",
            statement:
              "Precise subject terms, defined when the audience might not know them.",
          },
          {
            name: "Varied transitions",
            statement:
              "Match each transition to its relationship: because, in contrast, for example, as a result.",
          },
        ],
        workedExample: {
          problem:
            "Improve: 'Tides are big sometimes and small sometimes. Also the Sun and Moon do stuff. Also it matters where they are.'",
          solution:
            "Improved: 'Tides vary in height because the Sun and Moon pull on the oceans from different positions. When the two align, their combined pull produces high spring tides; in contrast, when they form a right angle, their pulls partly cancel and neap tides result.' The revision names the cause, replaces 'stuff' with precise explanation, uses domain-specific terms, and varies transitions ('because', 'when', 'in contrast') instead of repeating 'Also'.",
        },
      },
      questions: [
        {
          id: "ela9-u3-informative-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TIDES,
          stem: "Which organizing structure does the passage mainly use to explain why high and low tides occur?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Chronological narrative of one day at the beach",
              },
              { id: "b", text: "Argument with counterclaims" },
              { id: "c", text: "Cause and effect" },
              { id: "d", text: "Problem and solution" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Cause and effect",
                statement:
                  "An explanatory structure showing how one event or force produces another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The passage explains how the Moon's gravity causes bulges, which produce tides: a causal chain.",
                evidence: "caused mainly by the gravitational pull of the Moon",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)**. The passage traces causes (gravity, rotation, alignment) to their effects (tides).",
            commonErrors: [
              "Choosing (a) because the passage mentions 'each day'.",
            ],
          },
        },
        {
          id: "ela9-u3-informative-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: TIDES,
          stem: 'Which transition could follow the semicolon in "the ocean bulges toward the Moon; a second bulge forms on the opposite side of Earth" to show the relationship most precisely?',
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "the ocean bulges toward the Moon; in addition, a second bulge forms on the opposite side",
              },
              {
                id: "b",
                text: "the ocean bulges toward the Moon; as a result, a second bulge forms",
              },
              {
                id: "c",
                text: "the ocean bulges toward the Moon; however, a second bulge forms on the opposite side",
              },
              {
                id: "d",
                text: "the ocean bulges toward the Moon; for example, a second bulge forms",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Matching transitions",
                statement:
                  "A transition must name the real relationship between two ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The second bulge is an added, parallel fact about tides, so 'in addition' fits.",
                evidence: "a second bulge forms on the opposite side of Earth",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "'As a result' would make the second bulge a direct effect of the first and 'however' implies contrast; neither is stated, and the second bulge is not an example.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer: "**(b)**. The sentence adds a second, parallel fact.",
            commonErrors: [
              "Choosing (a), assuming every second fact is caused by the first.",
            ],
          },
        },
        {
          id: "ela9-u3-informative-writing-q3",
          difficulty: "core",
          totalMarks: 8,
          extract: TIDES,
          stem: "Write an informative paragraph (about 100 words) explaining the difference between spring tides and neap tides, using the passage. Include at least three domain-specific terms, two different transitions, and one sentence that begins with a controlling idea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Informative paragraph",
                statement:
                  "Controlling idea, accurate facts, precise vocabulary and varied transitions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Opens with a controlling idea, such as: tides vary in height depending on how the Sun and Moon line up.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Accurately explains spring tides: Sun, Moon and Earth align, combined pull, highest tides.",
                evidence:
                  "When the Sun, Moon and Earth line up, their combined pull creates spring tides",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Accurately explains neap tides: right angle, pulls partly cancel, smaller tides.",
                evidence:
                  "When they form a right angle, the pulls partly cancel",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Uses at least three domain-specific terms (for example gravitational pull, spring tides, neap tides, bulge).",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Uses at least two different transitions appropriately, such as 'when', 'in contrast' or 'as a result'.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Correct grammar, spelling and punctuation in a formal style.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 8),
            finalAnswer:
              "Model: 'Ocean tides change in height depending on how the Sun and Moon line up. When the Sun, Moon and Earth form a straight line, their gravitational pulls combine, producing spring tides, the highest of the month. In contrast, when the Sun and Moon form a right angle with Earth, their pulls partly cancel, so the ocean rises less and neap tides result. The alignment, not the season, therefore determines how large a tide will be.'",
            commonErrors: [
              "Confusing spring tides with the season spring.",
              "Copying sentences from the passage without reorganizing.",
              "Repeating 'also' as the only transition.",
            ],
          },
        },
        {
          id: "ela9-u3-informative-writing-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: TIDES,
          stem: 'Answer all parts about "The Science of Tides".',
          parts: [
            {
              label: "a",
              prompt:
                "Identify two domain-specific terms in the passage and explain why using them improves an informative text.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Analyze how the author organizes the passage so that each idea builds on the previous one. Refer to at least three details.",
              marks: 6,
            },
            {
              label: "c",
              prompt:
                "Write an informative text (about 150 words, two paragraphs) explaining a process or phenomenon you know well, such as how a vaccine works or how a bill becomes law. Use a controlling idea, an appropriate organizing structure, precise vocabulary, varied transitions and a concluding statement.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Building ideas",
                statement:
                  "Each paragraph or sentence should lead logically to the next.",
              },
              {
                kind: "convention",
                name: "Informative text",
                statement:
                  "Controlling idea, organized development, precise vocabulary, transitions and a conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Names two terms such as 'spring tides' and 'neap tides' or 'gravitational pull'.",
                evidence: "spring tides",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Explains that precise terms give exact meaning and show subject knowledge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The opening defines tides and states the main cause.",
                evidence: "caused mainly by the gravitational pull of the Moon",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The author explains the bulges before connecting them to Earth's rotation.",
                evidence:
                  "As Earth rotates, a coastline passes through both bulges",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The result, two high and two low tides daily, follows from the cause.",
                evidence: "two high tides and two low tides",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The Sun is introduced after the Moon, as a weaker secondary factor.",
                evidence: "though its effect is weaker",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The final sentences contrast spring and neap tides, using alignment as the organizing idea.",
                evidence: "producing the smaller neap tides",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Evaluates the overall effect: a clear, logical progression from general cause to specific variation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear controlling idea at the start.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "An appropriate organizing structure with accurate, relevant information.",
                marks: 3,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Precise, domain-specific vocabulary, defined where needed.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Varied, accurate transitions that clarify relationships.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "A concluding statement that follows from the information.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning: "Formal style and correct conventions.",
                marks: 2,
                markCode: "AO5",
              },
            ],
            levels: [
              ...levels("analysis", 6, "b"),
              ...levels("writing", 10, "c"),
            ],
            finalAnswer:
              "(a) Terms: 'spring tides', 'neap tides'. Precise terms give exact meaning and show expertise. (b) The author defines tides and their main cause, explains the bulges, links them to Earth's rotation to explain two daily high and low tides, adds the weaker Sun, and finally contrasts spring and neap tides by alignment. Each step builds on the one before. (c) Answers vary: a top response has a controlling idea, a fitting structure (such as sequence for how a bill becomes law), exact vocabulary, varied transitions and a concluding statement.",
            commonErrors: [
              "Retelling the passage instead of analyzing its organization.",
              "In (c), listing facts with no controlling idea.",
              "Using the same transition repeatedly.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u3-narrative-writing",
      title: "Narrative writing: plot lines, pacing, reflection and resolution",
      skill:
        "Engage the reader with a narrative that uses multiple plot lines, controlled pacing, sensory detail, reflection and a resolution that follows from the events.",
      lesson: {
        sections: [
          {
            heading: "Plot lines and pacing",
            body: "A strong narrative **engages the reader** by establishing a problem, situation or observation and a point of view, then unfolding events in a logical sequence. Many narratives braid **multiple plot lines**: a present-day action and a remembered event, for example, that eventually connect. **Pacing** is the speed at which the story moves. Slow it down with sensory detail, dialogue and longer sentences in moments of importance; speed it up with short sentences and summary: 'She ran. At the dock, the ropes were already coiled.' Choose where to linger, because the reader pays most attention to the moments where the writing slows.",
          },
          {
            heading: "Reflection and resolution",
            body: "Use **narrative techniques** such as dialogue, description, reflection and multiple plot lines to develop experiences, events and characters. Use **precise words and phrases, telling details and sensory language** so the reader can picture the scene: the 'lights of the town went small and gold' beats 'the town looked nice'. Provide a **conclusion that follows from and reflects on** what has happened. Reflection shows what a character has learned or how they changed, without stating a moral in a flat sentence. A resolution should answer the central conflict and connect back to the story's earlier plot lines.",
          },
        ],
        keyFormulas: [
          {
            name: "Multiple plot lines",
            statement:
              "Two or more sequences of events (such as past and present) that connect by the end.",
          },
          {
            name: "Pacing",
            statement:
              "Slow with detail and dialogue for key moments; speed up with short sentences and summary.",
          },
          {
            name: "Sensory detail",
            statement:
              "Specific sights, sounds and textures that let the reader experience the scene.",
          },
          {
            name: "Reflection and resolution",
            statement:
              "The ending answers the conflict and shows how a character has changed.",
          },
        ],
        workedExample: {
          problem:
            "Revise to slow the pace at a key moment: 'He opened the letter. It said he got in.'",
          solution:
            "Revised: 'His thumb slid under the flap, and the paper tore with a soft rip. He unfolded it slowly. The first word was \"Congratulations,\" and for a moment the letters swam. He read it again, then sat down on the stairs.' The revision slows the moment with physical detail, sensory language and sentence variety, so the reader feels the tension and relief.",
        },
      },
      questions: [
        {
          id: "ela9-u3-narrative-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SHORE,
          stem: "In the draft, the second paragraph moves back in time to the grandmother's story. What does this create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A change of narrator" },
              { id: "b", text: "A conclusion to the story" },
              {
                id: "c",
                text: "A second plot line that adds meaning to the present action",
              },
              { id: "d", text: "A list of setting details" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Multiple plot lines",
                statement:
                  "A remembered or parallel story that deepens the main action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The grandmother's earlier wait on the dock gives Marisol's present rush added emotional weight.",
                evidence: "watching for a boat that never came",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "**(a)**. The past story is a second plot line linked to Marisol's present race.",
            commonErrors: [
              "Choosing (b); the narrator remains the same third-person voice.",
            ],
          },
        },
        {
          id: "ela9-u3-narrative-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SHORE,
          stem: 'Which choice best explains how the sentence "She ran." affects pacing?',
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The short sentence introduces a flashback." },
              {
                id: "b",
                text: "The short sentence slows the pace by adding sensory detail.",
              },
              {
                id: "c",
                text: "The short sentence speeds the pace and creates urgency.",
              },
              {
                id: "d",
                text: "The short sentence reflects on the meaning of events.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pacing",
                statement:
                  "Short sentences and summary quicken the pace; detail and long sentences slow it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A three-word sentence reads quickly and mirrors the sudden action.",
                evidence: "She ran.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "It follows a longer sentence, so the contrast heightens urgency; it contains no sensory detail, flashback or reflection.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)**. The brevity speeds the pace and creates urgency.",
            commonErrors: [
              "Choosing (b); short sentences usually speed, not slow, the pace.",
            ],
          },
        },
        {
          id: "ela9-u3-narrative-writing-q3",
          difficulty: "core",
          totalMarks: 8,
          extract: SHORE,
          stem: 'Rewrite the final paragraph of "The Ferry Home" so that the resolution is stronger. Slow the pace at the key moment of the jump with sensory detail, and add a brief reflection that shows how Marisol has changed without stating a moral directly (about 100 words).',
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pacing and sensory detail",
                statement:
                  "Linger on the key moment with precise sensory language.",
              },
              {
                kind: "technique",
                name: "Reflection",
                statement:
                  "Show the character's change through thought or image rather than a stated moral.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Slows the pace at the jump with specific sensory detail (sound, motion, feeling).",
                marks: 2,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Varies sentence length so the key moment stands out.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Includes a reflective thought or image showing Marisol's change.",
                marks: 2,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Connects the resolution to the grandmother's plot line.",
                evidence: "watching for a boat that never came",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Avoids stating the moral in a flat sentence, keeping the ending implied.",
                marks: 1,
                markCode: "AO4",
              },
              {
                reasoning:
                  "Correct conventions, including punctuation of dialogue or fragments, if used.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: levels("writing", 8),
            finalAnswer:
              "Model: 'The gap of black water widened as the ferry shuddered away from the dock. Marisol pushed off the planks, hung for one breath in the diesel-scented air, and hit the deck so hard her teeth rang. The rail was cold and slick under her hands. Behind her, the dock shrank to a row of small lights, and she thought of her grandmother standing there once with no boat coming. Tonight, someone would be waiting, and someone was arriving.'",
            commonErrors: [
              "Ending with 'She learned to never give up.'",
              "Summarizing the jump in one sentence.",
              "Ignoring the grandmother plot line.",
            ],
          },
        },
        {
          id: "ela9-u3-narrative-writing-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: SHORE,
          stem: 'Answer all parts about the draft "The Ferry Home".',
          parts: [
            {
              label: "a",
              prompt: "Identify the two plot lines in the draft.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Analyze how the writer varies pacing in the draft and the effect on the reader. Refer to at least three details.",
              marks: 8,
            },
            {
              label: "c",
              prompt:
                "Write a narrative of about 200 words that braids two plot lines (for example, a present event and a memory), uses dialogue or sensory detail, varies pacing, and ends with a reflection and a resolution that links the plot lines.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pacing",
                statement:
                  "The writer controls speed through sentence length, detail and summary versus scene.",
              },
              {
                kind: "convention",
                name: "Narrative structure",
                statement:
                  "Engaging opening, developing events, reflection and a resolution that follows from the conflict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Present plot line: Marisol racing to catch the last ferry.",
                evidence: "The last ferry was leaving",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "Past plot line: the grandmother waiting for a boat thirty years ago.",
                evidence: "watching for a boat that never came",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Short sentences at the start create speed and urgency.",
                evidence: "She ran.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The flashback paragraph slows the pace with explanation and background.",
                evidence: "Two hours earlier, she had promised her grandmother",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The pace quickens again with a series of actions at the jump.",
                evidence: "She jumped, landed hard on the deck",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The slow, imagistic ending suits reflection and closure.",
                evidence: "the lights of the town went small and gold",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Evaluates effect: the contrasts keep the reader tense and then let them absorb the meaning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Engaging opening that establishes a situation and point of view.",
                marks: 1,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning: "Two plot lines developed and connected.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Effective narrative techniques: sensory detail, dialogue and precise words.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Pacing is varied purposefully, with slowing at important moments.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "A reflection and resolution that follow from the events and link the plot lines.",
                marks: 2,
                markCode: "AO4",
              },
              {
                part: "c",
                reasoning:
                  "Correct spelling, grammar and punctuation, including dialogue.",
                marks: 1,
                markCode: "AO5",
              },
            ],
            levels: [
              ...levels("analysis", 8, "b"),
              ...levels("writing", 10, "c"),
            ],
            finalAnswer:
              "(a) Marisol's race to catch the last ferry (present) and her grandmother's long-ago wait on the dock (past). (b) Short sentences ('She ran.') speed the opening; the flashback paragraph slows the story; the string of actions at the jump quickens it; the closing image slows it again for reflection. The shifts create tension and then closure. (c) Answers vary: a top response weaves two plot lines, varies pacing, uses sensory detail, and ends with a resolution that reflects on how the events changed the narrator.",
            commonErrors: [
              "Describing the plot in (b) without explaining pacing.",
              "In (c), writing two separate stories that never connect.",
              "Telling the moral instead of showing the change.",
            ],
          },
        },
      ],
    },
  ],
};
