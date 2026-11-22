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
              { id: "a", text: "Personification" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Metaphor" },
              { id: "d", text: "Alliteration" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Simile",
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
        {
          id: "cie-ol-fl-si-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense is most often neglected in weak descriptive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Touch" },
              { id: "b", text: "Smell" },
              { id: "c", text: "Sight" },
              { id: "d", text: "Sound" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensory range",
                statement:
                  "All five senses can be used; smell and taste are commonly neglected.",
              },
            ],
            steps: [
              {
                reasoning: "Sight dominates weak description; smell is neglected.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Smell",
            commonErrors: ["Choosing sight — it is the most used, not neglected."],
          },
        },
        {
          id: "cie-ol-fl-si-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The wind howled like a wolf' uses which device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metaphor" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Alliteration" },
              { id: "d", text: "Personification" },
            ],
            correctChoiceId: "b",
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
                reasoning: "'like' signals a simile.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Simile",
            commonErrors: ["Confusing with metaphor, which states the comparison directly."],
          },
        },
        {
          id: "cie-ol-fl-si-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does personification create atmosphere in a description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Personification",
                statement:
                  "Giving human qualities to non-human things makes a scene feel alive and expressive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Human actions or feelings are attributed to objects or weather.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "This animates the setting and can mirror or amplify the mood.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It gives human qualities to the scene, making it feel alive and emotionally expressive.",
            commonErrors: ["Identifying the device without explaining its effect."],
          },
        },
        {
          id: "cie-ol-fl-si-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a writer can use smell and sound to make a market scene vivid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Multi-sensory detail",
                statement:
                  "Non-visual senses add layers that make a scene feel present.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Smell details (spices, fruit, petrol) anchor the reader in the place.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Sound details (calls, haggling, engines) convey energy and chaos.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Together they create an immersive market atmosphere.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Smell and sound details make the market feel real, busy and immersive.",
            commonErrors: ["Listing senses without linking them to atmosphere."],
          },
        },
        {
          id: "cie-ol-fl-si-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how precise verbs and adjectives replace 'telling' with 'showing'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show don't tell",
                statement:
                  "Specific words convey manner and condition so the reader infers meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Verbs carry manner and pace (trudged vs walked, darted vs went).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Adjectives add texture, temperature or condition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The reader infers the state rather than being told it directly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear link between word choice and effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Precise words imply meaning through detail, so the reader infers rather than being told.",
            commonErrors: ["Listing adjectives without explaining their effect."],
          },
        },
        {
          id: "cie-ol-fl-si-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rewrite best 'shows' rather than 'tells'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yummy food" },
              { id: "b", text: "A good soup" },
              { id: "c", text: "The soup steamed, fragrant with ginger and lemongrass" },
              { id: "d", text: "It was really nice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show don't tell",
                statement:
                  "Sensory detail lets the reader experience rather than receive a label.",
              },
            ],
            steps: [
              {
                reasoning: "(a) gives sensory detail instead of a label.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** The soup steamed, fragrant with ginger and lemongrass",
            commonErrors: ["Choosing vague praise like 'really nice'."],
          },
        },
        {
          id: "cie-ol-fl-si-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the effect of engaging several senses in one description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It creates a richer, more immersive picture" },
              { id: "b", text: "It makes the text longer only" },
              { id: "c", text: "It confuses the reader" },
              { id: "d", text: "It displays the writer's vocabulary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Multi-sensory description",
                statement:
                  "Several senses add layers that immerse the reader.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple senses = layered, immersive effect.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** It creates a richer, more immersive picture",
            commonErrors: ["Thinking more senses is always better — relevance matters."],
          },
        },
        {
          id: "cie-ol-fl-si-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should figurative language be used sparingly in description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery control",
                statement:
                  "One fresh image beats five tired ones; overuse dulls impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Too many images compete and weaken each other's effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Clichéd or overcrowded imagery feels artificial.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Sparing use keeps each image fresh and powerful; overuse weakens impact.",
            commonErrors: ["Saying 'less is more' without explaining why."],
          },
        },
        {
          id: "cie-ol-fl-si-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can contrasting sensory details create tension in a description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Contrast",
                statement:
                  "Opposing sensory impressions can unsettle the reader and build unease.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Placing harsh and gentle sensations side by side creates dissonance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The contrast suggests something wrong or unstable in the scene.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "This tension mirrors or foreshadows the mood of the passage.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Opposing sensory details create dissonance that unsettles the reader and builds tension.",
            commonErrors: ["Describing contrast without linking it to tension."],
          },
        },
        {
          id: "cie-ol-fl-si-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describing a rainy day.",
          parts: [
            { label: "a", prompt: "Name two non-visual senses you would use.", marks: 2 },
            { label: "b", prompt: "Give one simile suitable for the rain.", marks: 1 },
            { label: "c", prompt: "Explain how precise verbs would help.", marks: 3 },
            { label: "d", prompt: "State the dominant impression you would create.", marks: 2 },
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
                reasoning: "Any two of sound, smell, touch, taste.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Both named correctly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "A fitting simile, e.g. 'rain needled the windows like static'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Verbs carry manner and pace (drummed, seeped, lashed).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Links verb choice to the rainy atmosphere.",
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
                reasoning: "A mood such as gloomy, oppressive or refreshing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Impression consistent with the detail choices.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two non-visual senses (b) fitting simile (c) verbs convey manner (d) one clear mood",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two senses named.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Fewer than two.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Image fits rain.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "No image.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Verbs linked to effect.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "No explanation.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Mood consistent.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No impression.", part: "d" },
            ],
            commonErrors: ["Naming senses without tying them to the scene."],
          },
        },
        {
          id: "cie-ol-fl-si-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Imagery practice.",
          parts: [
            { label: "a", prompt: "Define 'metaphor'.", marks: 1 },
            { label: "b", prompt: "Give one example of imagery for a forest.", marks: 2 },
            { label: "c", prompt: "Explain the effect of personification.", marks: 3 },
            { label: "d", prompt: "Rewrite 'The room was cold' using two senses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Imagery",
                statement: "Metaphor+example+personification+multi-sensory rewrite.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A direct comparison stating one thing is another.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "A fitting image, e.g. 'the trees stood like silent sentries'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Suited to the forest scene.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Human qualities are given to non-human things.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "It animates the scene and mirrors mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Effect clearly explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A rewrite engaging two senses, e.g. 'A draught crept under the door; the air smelled of dust.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Two distinct senses clearly present.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Controlled, vivid phrasing.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) direct comparison (b) fitting image (c) animates scene+mirrors mood (d) two-sense rewrite",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Fitting image.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effect explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two senses shown.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One sense.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No rewrite.", part: "d" },
            ],
            commonErrors: ["Rewriting with labels like 'cold' instead of sensory detail."],
          },
        },
        {
          id: "cie-ol-fl-si-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how sentence variety controls pace in descriptive writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement:
                  "Short sentences speed up and emphasise; long sentences slow down and build atmosphere.",
              },
            ],
            steps: [
              {
                reasoning: "Short sentences create urgency or impact.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Long sentences allow flowing, reflective description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Alternating them controls the reader's pace.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion of control.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Short sentences speed up; long ones slow down; variety controls the reader's pace.",
            commonErrors: ["Not linking sentence length to pace."],
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
              { id: "a", text: "The first sentence" },
              {
                id: "b",
                text: "The single mood or feeling a description creates",
              },
              { id: "c", text: "The longest description" },
              { id: "d", text: "The number of paragraphs" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** The single mood a description creates",
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
        {
          id: "cie-ol-fl-sm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'spatial ordering' in a description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organising details randomly" },
              { id: "b", text: "Organising details alphabetically" },
              { id: "c", text: "Organising details by place, e.g. near to far" },
              { id: "d", text: "Organising details by time" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Spatial ordering",
                statement:
                  "Details arranged by location, e.g. near to far or foreground to background.",
              },
            ],
            steps: [
              {
                reasoning: "Spatial = by place.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Organising details by place, e.g. near to far",
            commonErrors: ["Confusing spatial with chronological ordering."],
          },
        },
        {
          id: "cie-ol-fl-sm-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which detail best supports a 'melancholy' mood for a garden?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bright balloons and loud music" },
              { id: "b", text: "Faded roses and a broken swing" },
              { id: "c", text: "Children laughing and chasing" },
              { id: "d", text: "Neon signs and crowds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Detail and mood",
                statement:
                  "Details with gloomy connotations support a melancholy impression.",
              },
            ],
            steps: [
              {
                reasoning: "Faded/broken details carry sadness.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Faded roses and a broken swing",
            commonErrors: ["Choosing cheerful details that contradict the mood."],
          },
        },
        {
          id: "cie-ol-fl-sm-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an orienting sentence help a descriptive paragraph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Orienting sentence",
                statement:
                  "It establishes place, time or focus so the reader knows where the description begins.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It grounds the reader in the setting before detail begins.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This gives the detail that follows a logical base.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It establishes place/time/focus so the detail that follows has context.",
            commonErrors: ["Thinking it must be interesting rather than orienting."],
          },
        },
        {
          id: "cie-ol-fl-sm-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important that every detail reinforces the dominant impression?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mood consistency",
                statement:
                  "Consistent detail selection reinforces one feeling; contradictions weaken it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each detail carries connotations that push the reader toward a mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Contradictory details confuse the reader's sense of the mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Consistency makes the dominant impression powerful and unified.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Consistency reinforces the mood; contradictory details confuse and weaken it.",
            commonErrors: ["Asserting consistency matters without explaining why."],
          },
        },
        {
          id: "cie-ol-fl-sm-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a writer can use paragraph endings to deepen mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Closing lines",
                statement:
                  "A final line can shift or intensify the mood and linger with the reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A closing line can hint at feeling or add a reflective image.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "It can echo or contrast earlier details for emphasis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "It gives the paragraph a sense of closure or lingering unease.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Closing lines can hint feeling, echo earlier details and deepen the mood.",
            commonErrors: ["Ending paragraphs abruptly without a mood line."],
          },
        },
        {
          id: "cie-ol-fl-sm-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organising principle fits describing a journey in time order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random ordering" },
              { id: "b", text: "Spatial ordering" },
              { id: "c", text: "Chronological ordering" },
              { id: "d", text: "Alphabetical ordering" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Chronological ordering",
                statement:
                  "Details arranged in the order events or observations occur.",
              },
            ],
            steps: [
              {
                reasoning: "Time order = chronological.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Chronological ordering",
            commonErrors: ["Confusing chronological with spatial ordering."],
          },
        },
        {
          id: "cie-ol-fl-sm-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the effect of mixing cheerful and gloomy details in one description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the description more interesting" },
              { id: "b", text: "It has no effect on mood" },
              { id: "c", text: "It strengthens the mood" },
              { id: "d", text: "It confuses or weakens the dominant impression" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mood consistency",
                statement:
                  "Contradictory details undermine the dominant impression.",
              },
            ],
            steps: [
              {
                reasoning: "Contradictions confuse the mood.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** It confuses or weakens the dominant impression",
            commonErrors: ["Thinking variety of mood is always good."],
          },
        },
        {
          id: "cie-ol-fl-sm-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two organising principles for descriptive detail.",
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
                  "Any two of spatial, chronological, thematic.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correctly named.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Spatial, chronological or thematic ordering.",
            commonErrors: ["Saying 'random order' — description needs a guiding principle."],
          },
        },
        {
          id: "cie-ol-fl-sm-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can colour imagery contribute to mood in a description?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Colour imagery",
                statement:
                  "Colours carry connotations that push the reader toward a feeling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Warm colours (red, gold) feel energetic; cool colours (grey, blue) feel calm or gloomy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Dull or faded colours suggest decay or melancholy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Colour choice should match the dominant impression.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Colours carry connotations; choosing them to match the mood reinforces it.",
            commonErrors: ["Listing colours without linking them to mood."],
          },
        },
        {
          id: "cie-ol-fl-sm-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describing a busy train station.",
          parts: [
            { label: "a", prompt: "Choose a dominant impression for the scene.", marks: 1 },
            { label: "b", prompt: "Name the ordering principle you would use.", marks: 1 },
            { label: "c", prompt: "Give two sensory details that support the impression.", marks: 3 },
            { label: "d", prompt: "Describe a closing line that deepens the mood.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Descriptive planning",
                statement:
                  "Impression+ordering+details+closing line=mood control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A mood such as chaotic, hurried or restless.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Spatial, chronological or thematic.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "First detail fitting the impression, e.g. shouted announcements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Second detail, e.g. smell of coffee and diesel.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Both details support the mood.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A closing line that echoes or intensifies the mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Line is vivid and controlled.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Deepens rather than repeats the impression.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) one mood (b) one ordering (c) two fitting details (d) mood-deepening closing line",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Mood named.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Principle named.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Details support mood.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One detail.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Deepening line.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Attempted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Details that contradict the chosen impression."],
          },
        },
        {
          id: "cie-ol-fl-sm-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mood control.",
          parts: [
            { label: "a", prompt: "Define 'dominant impression'.", marks: 1 },
            { label: "b", prompt: "Contrast two different moods for the same place.", marks: 2 },
            { label: "c", prompt: "Explain how verbs affect mood.", marks: 3 },
            { label: "d", prompt: "Rewrite 'The garden was lovely' as a gloomy description.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mood control",
                statement: "Impression+contrast+verbs+rewrite.",
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
                reasoning: "Two distinct moods, e.g. tranquil vs eerie.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Both plausible for the same place.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Verbs carry manner and energy (burst vs lingered).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Fast verbs feel urgent; slow verbs feel heavy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear link to mood.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A gloomy rewrite with fitting detail.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Gloomy connotations consistent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Controlled and vivid.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) unified mood (b) two contrasting moods (c) verbs carry pace/energy (d) gloomy rewrite",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two moods contrasted.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Verb-mood link clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Convincing rewrite.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Attempted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Still cheerful.", part: "d" },
            ],
            commonErrors: ["Rewriting without changing the connotations."],
          },
        },
        {
          id: "cie-ol-fl-sm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how paragraphing supports clarity and mood in descriptive writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraphing",
                statement:
                  "One paragraph per aspect or location keeps detail organised and mood focused.",
              },
            ],
            steps: [
              {
                reasoning: "Each paragraph can focus on one aspect or place.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This prevents detail from becoming jumbled.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "A mood-deepening closing line can end each paragraph.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Paragraphs organise detail by aspect/place and can each deepen the mood.",
            commonErrors: ["One long undifferentiated paragraph."],
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
