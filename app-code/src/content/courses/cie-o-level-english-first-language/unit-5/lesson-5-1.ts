import type { Lesson } from "../../../types.ts";

export const lesson151: Lesson = {
  id: "cie-ol-fl-lesson-5-1",
  code: "5-1",
  title: "Descriptive writing",
  goal: "I CAN write vivid descriptive passages using sensory detail and imagery.",
  standards: ["1119 Writing: description"],
  vocabulary: [
    { term: "Imagery", definition: "Language that appeals to the senses." },
    { term: "Simile", definition: "Comparison using 'like' or 'as'." },
    {
      term: "Metaphor",
      definition: "Direct comparison saying one thing is another.",
    },
    {
      term: "Personification",
      definition: "Giving human qualities to non-human things.",
    },
    {
      term: "Dominant impression",
      definition: "The single mood or feeling a description creates.",
    },
    {
      term: "Show, don't tell",
      definition:
        "Revealing qualities through detail rather than stating them.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-sensory-imagery",
      title: "Sensory detail and imagery",
      skill:
        "Use the five senses and figurative language to create vivid description.",
      lesson: {
        sections: [
          {
            heading: "The five senses",
            body: "Strong description engages more than sight. Smell ('the sour tang of rain'), sound ('a low hum of traffic'), touch ('the rough bark') and taste all make a scene real. Vary which senses you use — do not rely on visual detail alone.",
          },
          {
            heading: "Figurative language",
            body: "Similes and metaphors compare unlike things to sharpen an image ('the sky was bruised purple'). Personification animates the scene ('the wind whispered through the reeds'). Use them sparingly and purposefully — one fresh image beats five tired ones.",
          },
          {
            heading: "Precise word choice",
            body: "Replace general words with specific ones: not 'walked' but 'trudged', 'strolled' or 'staggered' depending on mood. The verb and the adjective carry the atmosphere; choose them deliberately.",
          },
        ],
        keyFormulas: [
          {
            name: "Descriptive toolkit",
            statement: "Senses+imagery+precise verbs/nouns=show don't tell.",
          },
        ],
        workedExample: {
          problem: "Improve: 'The garden was nice.'",
          solution:
            "'Sunlight dripped through the apple trees, and the air smelled of warm soil and crushed mint.'",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-si-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which device compares two things using 'like' or 'as'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Alliteration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Simile",
                statement: "Comparison introduced by 'like' or 'as'.",
              },
            ],
            steps: [
              {
                reasoning: "'like'/'as' signal a simile.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Simile",
            commonErrors: [
              "Confusing simile with metaphor, which states the comparison directly.",
            ],
          },
        },
        {
          id: "cie-ol-fl-si-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a description use more than the sense of sight?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Multi-sensory description",
                statement:
                  "Engaging several senses makes a scene vivid and immersive.",
              },
            ],
            steps: [
              {
                reasoning: "Sight alone gives a flat, visual-only picture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Sound, smell, touch and taste add layers that make the reader feel present.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "It creates a richer, more immersive experience for the reader.",
            commonErrors: [
              "Repeating 'it is more interesting' without explaining how.",
            ],
          },
        },
        {
          id: "cie-ol-fl-si-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a writer can use precise verbs and adjectives to 'show, not tell'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show don't tell",
                statement:
                  "Specific word choice conveys meaning through detail rather than direct statement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Replace general verbs with ones that carry manner and mood (trudged vs walked).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Adjectives that suggest texture, temperature or condition add sensory information.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The reader infers the character's state instead of being told it, which engages them more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear link between technique and effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Precise words imply meaning through detail, letting the reader infer rather than be told.",
            commonErrors: [
              "Listing adjectives without linking them to effect.",
            ],
          },
        },
        {
          id: "cie-ol-fl-si-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Planning a descriptive passage about a crowded market.",
          parts: [
            {
              label: "a",
              prompt: "Name three senses you would use.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give one example of imagery suitable for the scene.",
              marks: 2,
            },
            { label: "c", prompt: "Explain how precise verbs help.", marks: 3 },
            {
              label: "d",
              prompt: "Describe the dominant impression you would create.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sensory description",
                statement:
                  "Senses+imagery+verbs+impression=coherent description.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three of sight, sound, smell, touch, taste.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "All three named correctly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "A suitable simile/metaphor/personification, e.g. 'the noise pressed in like a wall'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Example fits the market scene.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Verbs carry manner and pace (haggled, jostled, darted).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Links verb choice to the busy atmosphere.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear explanation of effect.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Names a mood such as chaotic, lively or overwhelming.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Explains how detail choices support that mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Coherent dominant impression.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) three senses (b) fitting image (c) verbs convey pace/manner (d) one clear mood",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Senses named.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Fewer than two.",
                part: "a",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Image fits scene.",
                part: "b",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No image or irrelevant.",
                part: "b",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Verbs linked to effect.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial link.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No explanation.",
                part: "c",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Mood supported by detail.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Mood named only.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No impression.",
                part: "d",
              },
            ],
            commonErrors: ["Listing senses without tying them to the scene."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-structure-mood",
      title: "Structure and mood in description",
      skill: "Organise descriptive detail to build a consistent mood.",
      lesson: {
        sections: [
          {
            heading: "Ordering detail",
            body: "Choose an organising principle: spatial (near to far), chronological (as the eye travels), or thematic (grouping similar details). A logical order lets the reader follow your gaze.",
          },
          {
            heading: "Building the dominant impression",
            body: "Every detail should reinforce one mood. For a depressing scene, choose grey colours, slow verbs and harsh sounds — not bright cheerful images. Consistency makes description powerful.",
          },
          {
            heading: "Paragraphing",
            body: "One paragraph per aspect or location. Open with an orienting sentence, develop the sense detail, and close with a line that deepens the mood or hints at feeling.",
          },
        ],
        keyFormulas: [
          {
            name: "Mood control",
            statement: "Detail selection+ordering+consistent impression=mood.",
          },
        ],
        workedExample: {
          problem: "Describe an abandoned house with a melancholy mood.",
          solution:
            "Order details from the broken gate inward; use faded colours, draught sounds and stillness; end on a line suggesting neglect and loss.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'dominant impression'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The single mood or feeling a description creates",
              },
              { id: "b", text: "The first sentence" },
              { id: "c", text: "The number of paragraphs" },
              { id: "d", text: "The longest description" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dominant impression",
                statement:
                  "The unified mood created by all descriptive details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It is the overall feeling, not a structural feature.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The single mood a description creates",
            commonErrors: ["Confusing it with structure or length."],
          },
        },
        {
          id: "cie-ol-fl-sm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways a writer can organise descriptive detail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Ordering detail",
                statement:
                  "Spatial, chronological or thematic ordering are all valid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two of spatial (near to far), chronological (order of viewing) and thematic (grouping by sense or subject).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct, coherent naming of the principles.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Spatial, chronological or thematic ordering.",
            commonErrors: [
              "Saying 'random order' — description needs a guiding principle.",
            ],
          },
        },
        {
          id: "cie-ol-fl-sm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does consistency of detail affect the mood of a description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mood consistency",
                statement:
                  "Details chosen to reinforce one feeling create a unified, powerful impression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each detail carries connotations — bright colours feel cheerful, grey ones gloomy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Mixing contradictory details confuses the reader's sense of mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Consistent selection reinforces the dominant impression throughout.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of cause and effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Consistent detail selection reinforces the dominant impression; contradictions weaken it.",
            commonErrors: [
              "Asserting consistency matters without explaining why.",
            ],
          },
        },
        {
          id: "cie-ol-fl-sm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Structure and mood.",
          parts: [
            { label: "a", prompt: "Define dominant impression.", marks: 1 },
            { label: "b", prompt: "Name two ordering principles.", marks: 2 },
            { label: "c", prompt: "How do details create mood?", marks: 3 },
            {
              label: "d",
              prompt: "Plan paragraphs for describing a stormy coastline.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Descriptive structure",
                statement: "Impression+ordering+detail+mood.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The single unified mood a description creates.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two of spatial, chronological, thematic.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Correctly named.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Details carry connotations; selection shapes feeling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Consistency reinforces the impression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Accurate explanation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "A coherent paragraph plan, e.g. sea, sky, shore, ending line.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Details chosen suit a stormy mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Organised and logical.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) unified mood (b) spatial/chronological/thematic (c) connotations shape feeling (d) coherent plan",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Two named.",
                part: "b",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Fewer than two.",
                part: "b",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Mood mechanism clear.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No explanation.",
                part: "c",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Coherent plan.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Some plan.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No plan.",
                part: "d",
              },
            ],
            commonErrors: [
              "Listing devices without explaining their effect on mood.",
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-description-notes",
      title: "Descriptive writing — revision notes",
      summary:
        "Sensory detail, imagery and mood control for descriptive composition.",
      sections: [
        {
          heading: "Core technique",
          body: "Show, don't tell: replace statements with concrete sensory detail. Use all five senses, not just sight. Choose precise verbs and adjectives.",
        },
        {
          heading: "Imagery",
          body: "Simile (like/as), metaphor (direct comparison), personification (human qualities). One fresh image beats five clichés.",
        },
        {
          heading: "Mood and structure",
          body: "Every detail should reinforce one dominant impression. Organise spatially, chronologically or thematically. Paragraph by aspect or location; close paragraphs with a mood-deepening line.",
        },
        {
          heading: "Exam checklist",
          body: "Is the mood consistent? Are at least three senses used? Are verbs specific? Does the ending line deepen the impression?",
        },
      ],
    },
  ],
};
