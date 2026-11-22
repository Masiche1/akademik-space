import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const GLACIER: TextExtract = {
  title: "Glaciers: Rivers of Ice",
  author: "Adapted for Akademik Space",
  text: "A glacier is not a frozen river, though the name suggests it. It is a slow-moving mass of ice that forms over decades as snow compresses under its own weight. Some glaciers crawl at less than a meter per day; others surge forward in sudden jumps.\n\nGlaciers are Earth's great sculptors. As they flow downhill, they pick up rocks and gravel, grinding the bedrock beneath them like sandpaper. When the ice finally melts, it leaves behind U-shaped valleys, moraines (ridges of rock debris), and lakes dammed by ice. The Great Lakes of North America were carved by glaciers that retreated only twelve thousand years ago.\n\nToday, glaciers are shrinking almost everywhere. In the Alps, the Morteratsch Glacier has lost over a kilometer of length since 1870. Scientists measure this retreat with stakes driven into the ice and satellite images from orbit. The stakes tell the story year by year; the satellites show the bigger pattern — a world where frozen rivers are running out of ice.",
};

const CYCLEDIAGRAM: TextExtract = {
  title: "Diagram: The Water Cycle",
  author: "Diagram for class analysis",
  text: "[Diagram description] A circular diagram showing the water cycle with four labeled stages connected by arrows: (1) EVALUATION — arrows rise from ocean and land surfaces labeled 'evaporation'; (2) CONDENSATION — arrows curve upward into clouds labeled 'condensation'; (3) PRECIPITATION — arrows fall from clouds to land and ocean labeled 'rain and snow'; (4) COLLECTION — arrows flow from land back to ocean labeled 'runoff and groundwater'. A sun icon shines on the ocean surface. Small plants and mountains appear on the land. Each arrow is labeled with its process name.",
};

export const lesson52: Lesson = {
  id: "ela7-u5-lesson-5-2",
  code: "5-2",
  title: "Informational Text: Media Integration and Author's Craft",
  goal: "I CAN integrate information from text and visual media, and analyze how an author's word choices and perspective shape meaning.",
  standards: ["RI.7.7", "RI.7.6", "RI.7.8", "RI.7.9"],
  vocabulary: [
    {
      term: "Media integration",
      definition:
        "Combining information from text, diagrams, images, and other formats.",
    },
    {
      term: "Diagram",
      definition:
        "A visual representation using labels, arrows, and shapes to show relationships.",
    },
    {
      term: "Author's craft",
      definition:
        "The deliberate choices a writer makes — word choice, structure, tone — to shape meaning.",
    },
    {
      term: "Point of view",
      definition: "The perspective from which information is presented.",
    },
    {
      term: "Tone",
      definition:
        "The author's attitude toward the subject, conveyed through word choice.",
    },
    {
      term: "Synthesis across media",
      definition:
        "Building a complete understanding by combining what text and visuals each contribute.",
    },
  ],
  concepts: [
    {
      id: "ela7-u5-media",
      title: "Integrating text and visual media",
      skill:
        "Combine information from written text and diagrams to build complete understanding.",
      lesson: {
        sections: [
          {
            heading: "Text and visuals do different jobs",
            body: "A diagram shows **relationships** that words describe slowly. The water cycle text would take a paragraph to explain that evaporation rises, condensation forms clouds, precipitation falls, and water returns to the ocean. The diagram shows all four stages and their connections in one glance. But the diagram cannot tell you *why* the sun drives evaporation or *what happens* when the cycle is disrupted — that is the text's job.",
          },
          {
            heading: "Reading both together",
            body: "Strong readers treat text and visuals as partners. The text gives context, explanation, and nuance; the visual gives structure and overview. When they agree, your understanding is confirmed. When they seem to differ, look carefully — a diagram may simplify what the text complicates, or the text may add detail the diagram omits. The skill is knowing what each medium contributes and combining them.",
          },
        ],
        keyFormulas: [
          {
            name: "Text vs visual",
            statement:
              "Text explains and nuances; visuals show structure and relationships.",
          },
          {
            name: "Complementary media",
            statement:
              "Each medium adds what the other lacks — together they give complete understanding.",
          },
          {
            name: "Cross-check",
            statement:
              "When text and visual agree, confidence increases; when they differ, investigate which is simplified.",
          },
        ],
        workedExample: {
          problem:
            "How do the glacier text and a hypothetical glacier diagram complement each other?",
          solution:
            "The text explains *how* glaciers form (snow compression over decades) and *why* they matter (carving valleys, damming lakes). A diagram could show the glacier's layers — accumulation zone, ablation zone, bedrock, moraines — making spatial relationships visible. The text gives the story; the diagram gives the map. Neither alone is complete.",
        },
      },
      questions: [
        {
          id: "ela7-u5-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CYCLEDIAGRAM,
          stem: "What does the water cycle diagram show that a paragraph of text would describe more slowly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The chemical composition of water" },
              { id: "b", text: "The history of the water cycle" },
              {
                id: "c",
                text: "The four stages and how they connect in a cycle",
              },
              { id: "d", text: "The exact temperature of the ocean" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual advantage",
                statement:
                  "Diagrams show relationships and structure at a glance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The diagram shows four labeled stages with arrows forming a cycle — relationships that would take a paragraph to describe in words.",
                evidence: "four labeled stages connected by arrows",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. The diagram shows the cycle's structure and connections visually.",
            commonErrors: [
              "Choosing (a) — the diagram shows processes, not measurements.",
            ],
          },
        },
        {
          id: "ela7-u5-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GLACIER,
          stem: "A diagram of a glacier shows two zones: 'accumulation' (where snow builds up) and 'ablation' (where ice melts). Using the text, explain what each zone means and how they interact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media + text integration",
                statement:
                  "Use text knowledge to interpret visual information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Accumulation zone: where snow compresses into ice over decades — 'snow compresses under its own weight'.",
                evidence:
                  "It is a slow-moving mass of ice that forms over decades as snow compresses",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ablation zone: where ice melts — the text mentions glaciers melting and retreating.",
                evidence: "Today, glaciers are shrinking almost everywhere",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "They interact as a balance: accumulation adds ice, ablation removes it; when ablation exceeds accumulation, the glacier retreats.",
                evidence:
                  "the Morteratsch Glacier has lost over a kilometer of length",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Accumulation builds ice from compressed snow; ablation melts it. The glacier grows when accumulation wins and shrinks when ablation wins — the diagram's two zones map onto the text's formation and retreat processes.",
            commonErrors: [
              "Treating the zones as separate facts without explaining their balance relationship.",
            ],
          },
        },
        {
          id: "ela7-u5-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GLACIER,
          stem: "The text says scientists use 'stakes driven into the ice and satellite images.' Explain what each tool measures and why using both gives a better picture than either alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing methods",
                statement:
                  "Different tools measure different scales of the same phenomenon.",
              },
              {
                kind: "skill",
                name: "Synthesis",
                statement:
                  "Explain why combining methods gives more complete information.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Stakes measure local, year-by-year change — 'the stakes tell the story year by year' gives precise short-term data.",
                evidence:
                  "scientists measure this retreat with stakes driven into the ice",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Satellites measure the big pattern — 'satellite images from orbit' show regional and global trends.",
                evidence: "satellite images from orbit",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stakes alone would miss the global pattern; satellites alone would miss the fine detail — together they confirm and contextualize each other.",
                evidence: "the satellites show the bigger pattern",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This mirrors media integration generally: different tools capture different aspects, and combining them gives complete understanding.",
                evidence: "a world where frozen rivers are running out of ice",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Stakes give precise year-by-year local measurements; satellites show the global pattern. Stakes alone miss the big picture; satellites alone miss detail — together they provide both precision and context, the same principle as combining text and visuals.",
            commonErrors: [
              "Saying one tool is 'better' — the point is they measure different scales and complement each other.",
            ],
          },
        },
        {
          id: "ela7-u5-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: CYCLEDIAGRAM,
          parts: [
            {
              label: "a",
              prompt:
                "Name the four stages of the water cycle shown in the diagram.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The diagram shows the sun shining on the ocean. Explain what role the sun plays that the arrows alone do not show.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading diagrams",
                statement: "Extract both labeled processes and implied causes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Evaporation, condensation, precipitation, collection.",
                evidence:
                  "evaporation... condensation... precipitation... collection",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The sun provides the energy that drives evaporation — the arrows show the process but not its cause.",
                evidence: "A sun icon shines on the ocean surface",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Evaporation, condensation, precipitation, collection. (b) The sun supplies the energy for evaporation — the arrows show what happens, the sun shows why.",
            commonErrors: [
              "Listing stages without explaining the sun's causal role.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u5-craft",
      title: "Author's craft and perspective in informational text",
      skill:
        "Analyze how word choice, tone, and structure reveal an author's perspective and purpose.",
      lesson: {
        sections: [
          {
            heading: "Word choice reveals attitude",
            body: "Informational texts are not neutral — authors choose words that carry attitude. 'Glaciers are shrinking' is factual; 'frozen rivers are running out of ice' is poetic and urgent. 'The rover is patient and careful' sounds admiring; 'the rover is slow and stubborn' sounds critical. Same facts, different framing. Grade 7 readers notice these choices because they reveal what the author wants you to feel.",
          },
          {
            heading: "Structure builds argument",
            body: "An author's **structure** — the order of ideas — is an argument in itself. Starting with a problem ('glaciers are shrinking') before explaining the mechanism makes the problem feel urgent. Ending with a consequence ('a world where frozen rivers are running out of ice') leaves the reader with the stakes. The order of information shapes how you feel about it.",
          },
        ],
        keyFormulas: [
          {
            name: "Word choice = attitude",
            statement:
              "Every word carries connotation — 'shrinking' vs 'dying' tells you how the author feels.",
          },
          {
            name: "Structure = argument",
            statement:
              "The order of ideas (problem first? solution first?) reveals the author's persuasive strategy.",
          },
          {
            name: "Craft reveals purpose",
            statement:
              "Why did the author choose these words and this order? What do they want you to think or feel?",
          },
        ],
        workedExample: {
          problem:
            "Why does the glacier text end with 'a world where frozen rivers are running out of ice' instead of 'glaciers are shrinking'?",
          solution:
            "The ending uses a metaphor ('frozen rivers') and vivid language ('running out of ice') to make the abstract statistic personal and urgent. 'Shrinking' is clinical; 'running out of ice' sounds like a crisis. The author chose the more emotional phrasing to leave readers with a sense of loss and urgency — craft serving purpose.",
        },
      },
      questions: [
        {
          id: "ela7-u5-craft-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GLACIER,
          stem: "Which word choice shows the author's urgent attitude toward glacier loss?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glaciers are shrinking" },
              { id: "b", text: "Frozen rivers are running out of ice" },
              { id: "c", text: "Scientists measure retreat with stakes" },
              { id: "d", text: "Glaciers form over decades" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation",
                statement:
                  "Vivid, emotional language signals the author's attitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Running out of ice' is more urgent and emotional than 'shrinking' — it frames glacier loss as a crisis.",
                evidence: "a world where frozen rivers are running out of ice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. The metaphor and vivid phrasing convey urgency.",
            commonErrors: [
              "Choosing (a) because it is the topic — the question asks about attitude, not topic.",
            ],
          },
        },
        {
          id: "ela7-u5-craft-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GLACIER,
          stem: "Explain how the text's structure — starting with formation, then sculpting, then decline — builds its argument about glaciers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure analysis",
                statement: "The order of ideas reveals the author's strategy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Starting with formation ('how glaciers form') establishes what glaciers are — necessary context.",
                evidence:
                  "It is a slow-moving mass of ice that forms over decades",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Middle section on sculpting shows their importance — 'Earth's great sculptors' — building their value.",
                evidence: "Glaciers are Earth's great sculptors",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ending with decline and loss creates the argument: something valuable is being destroyed — the structure builds from wonder to concern.",
                evidence: "Today, glaciers are shrinking almost everywhere",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Formation → importance → decline: the structure moves from understanding to valuing to fearing loss, building the argument that glacier retreat matters.",
            commonErrors: [
              "Describing the order without explaining its persuasive effect.",
            ],
          },
        },
        {
          id: "ela7-u5-craft-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GLACIER,
          stem: "The text calls glaciers 'Earth's great sculptors' and 'frozen rivers.' Analyze how these two metaphors work together to shape the reader's view of glaciers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Metaphor analysis",
                statement: "Explain what each metaphor contributes to meaning.",
              },
              {
                kind: "skill",
                name: "Craft synthesis",
                statement:
                  "Show how multiple word choices work together for a unified effect.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "'Great sculptors' emphasizes glaciers' creative power — they shape landscapes over millennia, making them seem majestic and purposeful.",
                evidence: "Glaciers are Earth's great sculptors",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Frozen rivers' emphasizes their movement and flow — connecting ice to the familiar image of flowing water, making them seem alive and dynamic.",
                evidence: "a world where frozen rivers are running out of ice",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Together they create a portrait of glaciers as powerful, living forces — which makes their decline feel like a tragedy, not just a statistic.",
                evidence: "they pick up rocks and gravel, grinding the bedrock",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The metaphors serve the author's purpose: by making glaciers seem noble and alive, their loss becomes emotionally significant.",
                evidence: "running out of ice",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Great sculptors' shows glaciers' creative power; 'frozen rivers' shows their flowing life. Together they portray glaciers as majestic, living forces — so their decline feels like losing something noble, which is exactly the author's persuasive goal.",
            commonErrors: [
              "Analyzing each metaphor separately without showing how they work together.",
            ],
          },
        },
        {
          id: "ela7-u5-craft-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GLACIER,
          parts: [
            {
              label: "a",
              prompt: "Identify the author's tone toward glacier loss.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Cite two word choices that support your answer.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone identification",
                statement:
                  "Tone is the author's attitude, revealed through word choice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The tone is urgent and concerned — the author wants readers to care about glacier loss.",
                evidence: "Today, glaciers are shrinking almost everywhere",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Running out of ice' — vivid, crisis language; 'great sculptors' — admiring the glaciers being lost.",
                evidence: "frozen rivers are running out of ice",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Urgent and concerned. (b) 'Running out of ice' conveys crisis; 'great sculptors' conveys admiration for what is being lost.",
            commonErrors: [
              "Saying the tone is 'neutral' because the text is factual — tone can be urgent even in informational writing.",
            ],
          },
        },
      ],
    },
  ],
};
