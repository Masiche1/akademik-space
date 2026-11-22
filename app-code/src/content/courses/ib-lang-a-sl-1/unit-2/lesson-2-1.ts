import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "langa-u2-lesson-2-1",
  code: "2-1",
  title: "Analytical Paragraph Writing",
  goal: "I CAN write analytical paragraphs that embed short evidence and explain its significance.",
  standards: ["Writing", "Analysis", "Paragraph structure"],
  vocabulary: [
    {
      term: "Point",
      definition:
        "The single idea a paragraph argues; usually contained in a topic sentence.",
    },
    {
      term: "Evidence",
      definition:
        "A short embedded quotation or precise reference to the text that supports the point.",
    },
    {
      term: "Analysis",
      definition:
        "The explanation of how and why the evidence produces meaning.",
    },
    {
      term: "Topic sentence",
      definition:
        "The sentence stating the paragraph's controlling idea, usually first or near-first.",
    },
    {
      term: "Linking device",
      definition:
        "Words or phrases that connect ideas: 'this suggests', 'by contrast', 'the effect is'.",
    },
    {
      term: "Significance",
      definition:
        "Why the analysed detail matters to the whole text's meaning or effect.",
    },
  ],
  concepts: [
    {
      id: "langa-u2-paragraph-structure",
      title: "The analytical paragraph",
      skill:
        "Construct paragraphs using point, embedded evidence, analysis and significance in a controlled sequence.",
      lesson: {
        sections: [
          {
            heading: "Paragraph anatomy",
            body: "A strong analytical paragraph moves **point → evidence → analysis → significance**. The **point** is a defensible claim, not a plot summary. **Evidence** is embedded briefly — a few words in quotation marks, not a long block. **Analysis** explains the language, structure or technique. **Significance** widens the point to the whole text.",
          },
          {
            heading: "Embedding evidence",
            body: "Embed quotations economically: 'the speaker calls the sea a \"patient creditor\"' rather than dumping a full sentence. Choose the shortest phrase that carries the feature you analyse. Always analyse the **exact wording** — diction, imagery, sound — not the event it describes.",
          },
          {
            heading: "Avoiding common faults",
            body: "Three failure modes: **narrative retelling** ('then the character went home'), **device-spotting** ('this is a metaphor' with no effect), and **evidence dumping** (long quotations with no analysis). Every sentence should advance the argument.",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph formula",
            statement:
              "Point + embedded evidence + technique + effect + link to whole",
          },
          {
            name: "Evidence rule",
            statement:
              "Quote the shortest phrase that contains the feature; analyse the words, not the event.",
          },
        ],
        workedExample: {
          problem:
            "Turn this summary into analysis: 'The poem describes a storm at sea.'",
          solution:
            "Weak: 'The poem describes a storm at sea.' Strong: 'The storm is not described but enacted — the rigging screamed converts the boat's ropes into a voice of terror, so the reader hears the danger rather than merely picturing it.'",
        },
      },
      questions: [
        {
          id: "langa-u2-aq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an analytical paragraph, what should immediately follow the point (topic sentence)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary of the whole text" },
              { id: "b", text: "A conclusion" },
              { id: "c", text: "Evidence from the text" },
              { id: "d", text: "A new unrelated idea" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph sequence",
                statement: "Point → evidence → analysis → significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence is the support for the point and comes next.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Evidence from the text",
            commonErrors: ["Starting with evidence before stating the point."],
          },
        },
        {
          id: "langa-u2-aq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Old House",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The house had been empty so long that the silence had learned to walk. She opened the door and it exhaled — a smell of dust and old roses, as if the building had been holding its breath for years.",
          },
          stem: "Write one analytical paragraph (point, evidence, analysis) on how the extract personifies the house.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph construction",
                statement: "Point + embedded evidence + technique + effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: the house is personified so that abandonment itself feels alive and wounded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'the silence had learned to walk' and 'as if the building had been holding its breath for years' — embedded, short phrases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: personification gives the empty house agency and breath; 'exhaled' makes opening the door a release, so the building seems to have suffered the absence as a held breath finally let go.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model paragraph: point about personification, quoted phrases, analysis of agency and the held-breath metaphor's effect.",
            commonErrors: [
              "Quoting long passages without selecting the personifying phrases.",
            ],
          },
        },
        {
          id: "langa-u2-aq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Harvest",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "We cut the wheat and stacked it high\nand called it plenty.\nThe field, though, kept its own account:\nevery sheaf a small green debt.",
          },
          stem: "Analyse how the poem's structure and language create its meaning, using at least one analytical paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure and language",
                statement:
                  "The turn in the final couplet reframes abundance as debt.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: the poem's meaning pivots in the final couplet — 'plenty' is undercut by 'debt'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'called it plenty' versus 'every sheaf a small green debt' — embedded contrast.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: the personification 'the field kept its own account' gives nature a ledger; 'green' suggests both colour and money, deepening the economic metaphor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Significance: the poem suggests abundance is borrowed from the land — a quiet ecological warning beneath the harvest celebration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The final couplet reverses the harvest's celebration: 'plenty' becomes 'debt', framing abundance as borrowed from the land.",
            commonErrors: [
              "Describing the harvest scene without analysing the structural turn.",
            ],
          },
        },
        {
          id: "langa-u2-aq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a 3-paragraph analytical response to the following extract, ensuring each paragraph follows point, evidence, analysis, significance.",
          extract: {
            title: "The Station",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The last train pulled out, and the platform emptied of its noise but not its people. A man in a grey coat kept checking his watch, though there was nothing left to catch. The departure board still flashed DESTINATION — a word with no destination of its own, announcing nothing, forever almost arriving.\n\nShe stood at the edge of the yellow line and did not cross it.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Paragraph 1: analyse the description of the man in the grey coat.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Paragraph 2: analyse the 'DESTINATION' board and its irony.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Paragraph 3: analyse the yellow line and the woman's stillness as a structural ending.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical paragraphs",
                statement:
                  "Each paragraph: point + embedded evidence + technique analysis + significance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Point: the man's compulsive watch-checking embodies pointless habit after purpose has gone.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Evidence: 'nothing left to catch' — the detail exposes the ritual as meaningless; analysis links it to post-departure emptiness.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the flashing 'DESTINATION' is ironic — a word about arrival announcing nothing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'a word with no destination of its own, announcing nothing, forever almost arriving' — embedded phrases analysed for paradox.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: the oxymoron 'forever almost arriving' suspends time — the station becomes a metaphor for stalled lives; significance: the board outlives the trains it announces.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Point: the yellow line literalises a boundary the woman refuses to cross — departure suspended.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Analysis: ending on stillness rather than action mirrors the man's stasis; 'did not cross' is a choice, leaving the outcome open — the extract ends mid-decision.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Watch-checking = meaningless habit. (b) 'DESTINATION' irony = suspended time. (c) Yellow line = chosen stasis; open ending mirrors the theme.",
            commonErrors: [
              "Writing three plot summaries instead of three analytical paragraphs.",
            ],
          },
        },
        {
          id: "langa-u2-aq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which element should come last in a well-formed analytical paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A second topic sentence" },
              { id: "b", text: "A long quotation" },
              {
                id: "c",
                text: "A statement of significance linking the point to the whole text",
              },
              { id: "d", text: "A new piece of unrelated evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph sequence",
                statement: "Point → evidence → analysis → significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Significance widens the point to the whole text and closes the paragraph.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Significance linking to the whole text",
            commonErrors: [
              "Ending the paragraph on analysis without widening to significance.",
            ],
          },
        },
        {
          id: "langa-u2-aq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the most effective way to embed evidence in an analytical paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Place a long block quotation on its own line" },
              {
                id: "b",
                text: "Quote the shortest phrase containing the feature, inside your own sentence",
              },
              { id: "c", text: "Paraphrase the event without quoting" },
              { id: "d", text: "Copy the whole sentence from the text" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Embedding evidence",
                statement: "Quote briefly and analyse the exact wording.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Short embedded phrases keep analysis focused on wording, not event.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Shortest phrase, embedded in your own sentence",
            commonErrors: [
              "Evidence dumping — long quotations with no analysis.",
            ],
          },
        },
        {
          id: "langa-u2-aq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is genuine analysis rather than narrative retelling?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The poem has three stanzas and a rhyme scheme.",
              },
              { id: "b", text: "The ship was at sea during a bad storm." },
              {
                id: "c",
                text: "The storm then hits the boat and the sailors struggle.",
              },
              {
                id: "d",
                text: "'The rigging screamed' gives the ropes a voice of terror, so the storm is heard rather than merely seen.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis vs retelling",
                statement:
                  "Analysis explains how wording produces effect; retelling reports events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (b) quotes 'the rigging screamed' and explains its effect — technique plus effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The 'rigging screamed' sentence",
            commonErrors: [
              "Confusing description of the plot with analysis of language.",
            ],
          },
        },
        {
          id: "langa-u2-aq8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the primary job of a topic sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To summarise the entire essay" },
              {
                id: "b",
                text: "To quote the most important line of the extract",
              },
              { id: "c", text: "To introduce a new unrelated topic" },
              {
                id: "d",
                text: "To state the paragraph's controlling point or argument",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic sentence",
                statement:
                  "It states the paragraph's controlling idea, usually first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The topic sentence states the point that evidence and analysis will support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** State the paragraph's controlling point",
            commonErrors: [
              "Using the topic sentence to retell plot instead of argue a point.",
            ],
          },
        },
        {
          id: "langa-u2-aq9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student writes a paragraph that could be pasted unchanged into an essay on any text. What does this indicate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The paragraph is strong because it is general",
              },
              { id: "b", text: "The paragraph needs a longer quotation" },
              {
                id: "c",
                text: "The paragraph lacks significance — it is not yet analysis of this text",
              },
              {
                id: "d",
                text: "The paragraph should be moved to the introduction",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Significance test",
                statement:
                  "If a paragraph could fit any text, it has not analysed this text's meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transferable paragraphs are observations, not interpretations tied to this text's larger concern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** It lacks significance to the whole text",
            commonErrors: ["Mistaking generality for depth."],
          },
        },
        {
          id: "langa-u2-aq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student writes: 'This is a metaphor.' and stops. Which failure mode is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrative retelling" },
              { id: "b", text: "Significance" },
              { id: "c", text: "Device-spotting" },
              { id: "d", text: "Evidence dumping" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Failure modes",
                statement:
                  "Naming a device without explaining its effect is device-spotting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Labelling a technique without effect or significance is the classic device-spotting fault.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Device-spotting",
            commonErrors: ["Identifying techniques without analysing effect."],
          },
        },
        {
          id: "langa-u2-aq11",
          difficulty: "foundation",
          totalMarks: 4,
          extract: {
            title: "The Gate",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The gate complained on its hinges\nall winter, and I grew used\nto the complaint — until one morning\nthe silence was worse.",
          },
          stem: "Write one analytical paragraph (point, embedded evidence, analysis, significance) on how the poem uses sound.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph construction",
                statement:
                  "Point + embedded evidence + technique + effect + significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: the poem makes sound itself a presence whose absence is more disturbing than its presence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'complained on its hinges', 'I grew used', 'the silence was worse' — embedded phrases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: 'complained' personifies the gate; habituation ('grew used') makes the final silence a loss — the ear misses what it once ignored.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: the poem suggests we hear most clearly what we have lost — sound marks the passage of time.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Point on sound-as-presence; quoted phrases; analysis of personification and habituation; significance: absence heard.",
            commonErrors: [
              "Quoting whole lines instead of embedded phrases; describing the scene without analysing sound.",
            ],
          },
        },
        {
          id: "langa-u2-aq12",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The Corridor",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The corridor had been repainted, but the damp still bloomed through the new plaster in slow brown maps.",
          },
          stem: "Write one analytical paragraph analysing the metaphor 'slow brown maps' and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Metaphor and imagery",
                statement:
                  "Analyse the exact wording and its effect on meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: the metaphor makes decay seem cartographic — damage rendered as territory to be read.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'the damp still bloomed', 'slow brown maps' — embedded phrases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: 'bloomed' gives mould organic growth; 'maps' implies the damage has a pattern worth studying — the house records its own history in stains.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: 'still' defeats the repainting — cosmetic renewal cannot erase what the building remembers.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Damp-as-maps metaphor: decay becomes readable territory; 'still' shows memory outlasting cosmetic repair.",
            commonErrors: [
              "Explaining what a map is rather than analysing why damp is figured as one.",
            ],
          },
        },
        {
          id: "langa-u2-aq13",
          difficulty: "core",
          totalMarks: 6,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The letter was never sent.\nShe kept it anyway —\npaper does not judge.",
          },
          stem: "Analyse how the poem's structure and brevity create its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure and brevity",
                statement:
                  "Short lines and withholding enact the poem's theme of unsent feeling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: the poem's clipped structure performs the very act it describes — a statement held back.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'never sent', 'kept it anyway', 'paper does not judge' — three short statements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: the first line is a flat declarative; the second admits defiance ('anyway'); the third personifies paper as a silent confidant — the withheld letter becomes the only safe audience.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: the poem suggests some feelings are preserved precisely because they are never delivered — privacy as protection.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Brevity mirrors the withheld letter; personified paper as judge-free recipient; theme of preserved, undelivered feeling.",
            commonErrors: [
              "Analysing only the imagery and ignoring the structural withholding.",
            ],
          },
        },
        {
          id: "langa-u2-aq14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write one analytical paragraph for each task on the extract, each following point, evidence, analysis, significance.",
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "After the funeral, the garden kept blooming as if nothing had happened. The roses did not know. They opened their red faces to the sun, indifferent and beautiful, while she stood at the gate holding her mother's gloves.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Analyse the personification of the roses ('opened their red faces', 'indifferent').",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Analyse the contrast between the garden's indifference and the woman's grief.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Personification and contrast",
                statement:
                  "Analyse how figurative language creates thematic contrast.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Point: the roses are personified as spectators who do not know — beauty rendered as innocence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Evidence: 'opened their red faces', 'indifferent and beautiful', 'did not know'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Analysis: 'faces' makes the roses witnesses; 'did not know' is the cruelty — nature's continuation is not malice but ignorance, which is somehow worse.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the extract stages grief against nature's unbothered continuity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'as if nothing had happened' versus 'holding her mother's gloves' — embedded contrast.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: 'as if' signals the simile's failure — the garden cannot pretend; the gloves literalise the dead as a held object, small enough to carry.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Significance: the extract suggests mourning isolates the human from a nature that simply continues — grief is the one thing the garden cannot mirror.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Roses as ignorant witnesses. (b) Indifferent nature vs embodied grief — the gloves carry what the garden cannot.",
            commonErrors: [
              "Describing the garden without analysing the personification or the contrast.",
            ],
          },
        },
        {
          id: "langa-u2-aq15",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Window",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "He cleaned the window until it disappeared — no smears, no breath, no trace of his own hand. Outside, the street looked more real than the room. He sat down and waited for the glass to remember him.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Identify the two most productive details for analysis and justify each choice.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Write an analytical paragraph on your chosen detail, ending with significance.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence selection",
                statement:
                  "Specific, unexpected details yield the richest analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Best details: 'the window... disappeared' (unexpected — cleaning as erasure of self) and 'waited for the glass to remember him' (personification reversing subject/object).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Justification: both are specific and surprising; 'remember' reverses the expected direction of perception.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the extract figures self-effacement — the man erases his traces and waits to be seen.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'no smears, no breath, no trace of his own hand' — embedded list.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: the triple 'no' builds an inventory of absence; 'more real than the room' makes the outside self and the inside negation — he has removed himself from his own life.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Significance: waiting for the glass to 'remember' him suggests identity now depends on reflection — the self survives only as an image.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 'Disappeared' window and 'remember' personification — specific, unexpected. (b) Self-erasure paragraph ending on identity-as-reflection.",
            commonErrors: [
              "Choosing the most obvious detail rather than the most analytically productive one.",
            ],
          },
        },
        {
          id: "langa-u2-aq16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a three-paragraph analytical response (one paragraph per part) to the extract, each paragraph following point, evidence, analysis, significance.",
          extract: {
            title: "The Crossing",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The bridge had been closed for eleven years, but the town still crossed it in their minds. Children drew it in exercise books. Old men pretended to lean on its railings. When the engineers finally arrived, the first thing they found was not rust but ropes — hundreds of them, tied at intervals, as if the bridge were a harp nobody had dared to play.",
          },
          parts: [
            {
              label: "a",
              prompt: "Paragraph 1: analyse the town's imaginary crossings.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Paragraph 2: analyse the detail of ropes 'as if the bridge were a harp'.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Paragraph 3: analyse the engineers' arrival as a structural turn.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical paragraphs",
                statement:
                  "Each paragraph: point + embedded evidence + technique analysis + significance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Point: the town keeps the bridge alive in imagination — memory as a substitute for use.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Evidence: 'crossed it in their minds', 'drew it in exercise books', 'pretended to lean' — embedded phrases showing performed memory.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the ropes transform neglect into latent music — the simile refigures decay as instrument.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'hundreds of them', 'as if the bridge were a harp nobody had dared to play'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: 'nobody had dared' gives the ropes agency and fear — the town has been afraid to hear what its own neglect has built.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Point: the engineers' arrival reverses the extract's direction — from imagined crossings to literal repair.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evidence: 'the first thing they found was not rust but ropes' — the engineers encounter meaning, not damage.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Significance: outsiders read what locals stopped seeing — the extract ends poised between repair and whether the bridge will be played or merely fixed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Imagined crossings = memory substituting for use. (b) Ropes-as-harp: neglect refigured as feared music. (c) Engineers' arrival turns imagination into repair — an open ending.",
            commonErrors: [
              "Three summaries of bridge, ropes, engineers instead of three arguments.",
            ],
          },
        },
      ],
    },
    {
      id: "langa-u2-evidence-analysis",
      title: "Evidence selection and analysis",
      skill:
        "Select the most productive details and move from observation to interpretation.",
      lesson: {
        sections: [
          {
            heading: "Choosing evidence",
            body: "Not every detail is worth quoting. Select details that are **specific** (not generic), **patterned** (repeated or echoed elsewhere) and **unexpected** (where the text does something surprising). One precise detail analysed well beats five quoted.",
          },
          {
            heading: "Observation to interpretation",
            body: "**Observation** says what is there: 'the door is described as breathing.' **Interpretation** says what it means: 'the building is given life, suggesting the past is not dead but dormant.' Analysis lives in the movement between them.",
          },
          {
            heading: "Significance",
            body: "The strongest paragraphs end by widening: this detail matters because it reveals the text's larger concern — grief, power, memory, injustice. If your paragraph could be pasted into a different text unchanged, it is not analysis yet.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence criteria",
            statement: "Specific + patterned + unexpected = productive detail",
          },
          {
            name: "Depth ladder",
            statement:
              "Observation → technique → effect → significance to whole text",
          },
        ],
        workedExample: {
          problem:
            "Observation: 'She counts the stairs.' How deep can the analysis go?",
          solution:
            "Technique: the verb 'counts' is precise, ritualistic. Effect: counting suggests anxiety, habit, a mind seeking control. Significance: stairs as a threshold — the count delays or measures a decision the text is building toward.",
        },
      },
      questions: [
        {
          id: "langa-u2-bq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the best criterion for choosing textual evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first sentence of the extract" },
              { id: "b", text: "The longest quotation available" },
              { id: "c", text: "Any detail that mentions the main character" },
              {
                id: "d",
                text: "A detail that is specific, patterned or unexpected",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence selection",
                statement:
                  "Specific, patterned or unexpected details yield the richest analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Productive evidence is specific enough to analyse, repeated for pattern, or surprising for effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Specific, patterned or unexpected",
            commonErrors: [
              "Choosing evidence by length rather than analytical potential.",
            ],
          },
        },
        {
          id: "langa-u2-bq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Kitchen",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The kitchen was exactly as she had left it — except that the clock had stopped at 4:07 and someone had washed the dishes.",
          },
          stem: "Explain the difference between observation and interpretation using this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation vs interpretation",
                statement:
                  "Observation reports features; interpretation assigns meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation: 'the clock had stopped at 4:07' and 'someone had washed the dishes' — facts present in the text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interpretation: the stopped clock suggests suspended time; the washed dishes suggest an absent presence — someone else has been here, or the past is being erased.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis must connect them: 'exactly as she had left it' is contradicted by two changes, so familiarity itself is unstable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Observation = stopped clock, washed dishes. Interpretation = time suspended, presence implied, familiarity undermined.",
            commonErrors: [
              "Jumping to interpretation without quoting the observable detail.",
            ],
          },
        },
        {
          id: "langa-u2-bq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Instructions",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Fold the letter twice. Do not lick the envelope. The instructions were printed in three languages, each one more apologetic than the last.",
          },
          stem: "Analyse how the final sentence recontextualises the preceding instructions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Recontextualisation",
                statement:
                  "A later detail reframes earlier details, changing their meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initially the instructions read as neutral bureaucratic procedure — 'fold twice', 'do not lick'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The reveal that they exist in 'three languages, each one more apologetic' transforms them: the formality was compensating for something — perhaps an unwelcome or confusing message.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The word 'apologetic' personifies the translations — language itself is embarrassed, hinting the letter's content is awkward or unwelcome.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Significance: the extract ends before revealing the letter's content, so the reader's suspicion fills the gap — the structure withholds to create unease.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The 'apologetic' translations reframe bureaucratic instructions as embarrassment — formality masking an awkward message.",
            commonErrors: ["Analysing only the final sentence in isolation."],
          },
        },
        {
          id: "langa-u2-bq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an analytical paragraph for each of the following tasks on the extract, each ending with a statement of significance.",
          extract: {
            title: "The Wait",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "He arrived early and took the seat with the best light. The café was full of people waiting for someone else — a woman checking her phone every eleven seconds, a child drawing on the condensation, an old man asleep upright in his coat like a coat itself.\n\nWhen the door opened, every head turned at once. He stood up too quickly and knocked his cup.\n\nIt was the wrong person.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Analyse the simile 'asleep upright in his coat like a coat itself'.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Analyse the collective 'every head turned at once' and the spilled cup.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the ending 'It was the wrong person.' as a structural choice.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Detail, pattern and structure",
                statement:
                  "Similes, collective gestures and endings all carry meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Point: the simile collapses man and coat into one object — dehumanising or tender?",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Analysis: 'like a coat itself' suggests the man has become indistinguishable from his covering — waiting has erased his identity; significance: the café full of 'people waiting' are all becoming objects.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the synchronised head-turn shows waiting as a herd instinct — all attention is borrowed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'every head turned at once' and 'knocked his cup' — his eagerness spills over physically.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: the cup-knock is comic deflation — anticipation made clumsy; it primes the reader for disappointment.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The three-word ending lands after a paragraph of rising expectation — anticlimax as structure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "'Wrong person' is devastatingly flat: no grief, no explanation — the extract trusts the reader to supply the emotion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Significance: the café's whole choreography of waiting is revealed as possibly pointless — theme of expectation unfulfilled.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Man-as-coat simile: waiting erases identity. (b) Synchronised turning = herd anticipation; spilled cup deflates it. (c) Flat ending withholds emotion, trusting the reader — anticlimax enacts the theme.",
            commonErrors: [
              "Retelling the scene rather than analysing each requested feature.",
            ],
          },
        },
        {
          id: "langa-u2-bq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which detail is the most productive evidence for analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The longest sentence in the extract" },
              {
                id: "b",
                text: "A generic description that could appear anywhere",
              },
              {
                id: "c",
                text: "A specific detail that echoes a pattern elsewhere in the text",
              },
              {
                id: "d",
                text: "A detail mentioned only once and easily explained",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence selection",
                statement:
                  "Specific + patterned + unexpected details yield the richest analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Patterned details let the analyst connect local feature to whole-text meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Specific, patterned detail",
            commonErrors: [
              "Choosing evidence by prominence rather than analytical potential.",
            ],
          },
        },
        {
          id: "langa-u2-bq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Observation' in textual analysis means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reporting what is actually present in the text",
              },
              { id: "b", text: "Evaluating the author's skill" },
              { id: "c", text: "Summarising the plot" },
              { id: "d", text: "Asserting what the text means" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation vs interpretation",
                statement:
                  "Observation reports features; interpretation assigns meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation stays at the level of what is present — wording, image, structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Reporting what is present",
            commonErrors: ["Confusing observation with interpretation."],
          },
        },
        {
          id: "langa-u2-bq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an interpretation rather than an observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The clock had stopped at 4:07.'" },
              { id: "b", text: "'The kitchen is described in one sentence.'" },
              {
                id: "c",
                text: "'The stopped clock suggests time suspended mid-event.'",
              },
              { id: "d", text: "'Someone had washed the dishes.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation vs interpretation",
                statement:
                  "Interpretation assigns meaning to observed features.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (c) assigns significance ('time suspended') to the observed detail.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The interpretation about suspended time",
            commonErrors: [
              "Treating meaning-claims as if they were observations.",
            ],
          },
        },
        {
          id: "langa-u2-bq8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is an 'unexpected' detail often more productive than an obvious one?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because obvious details are always wrong" },
              {
                id: "b",
                text: "Because unexpected details never need analysis",
              },
              {
                id: "c",
                text: "Because surprise signals the text doing something deliberate that rewards analysis",
              },
              { id: "d", text: "Because it is always longer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence criteria",
                statement:
                  "Unexpected details signal deliberate choices with analysable effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surprise usually marks intentional pattern or irony — rich ground for interpretation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Surprise marks deliberate, analysable choice",
            commonErrors: [
              "Assuming obvious details are sufficient for deep analysis.",
            ],
          },
        },
        {
          id: "langa-u2-bq9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A detail appears once in a text and is never echoed. When is it still worth analysing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in the introduction" },
              {
                id: "b",
                text: "When it is specific and unexpected enough to carry thematic weight",
              },
              { id: "c", text: "Never — single mentions cannot be analysed" },
              { id: "d", text: "Only if it is a quotation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence criteria",
                statement:
                  "A single, specific, unexpected detail can carry the text's whole concern.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pattern is one route to productivity, but specificity plus surprise can suffice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** When specific and unexpected enough to carry thematic weight",
            commonErrors: [
              "Assuming every productive detail must be repeated.",
            ],
          },
        },
        {
          id: "langa-u2-bq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "On the 'depth ladder', which step comes immediately after observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion" },
              { id: "b", text: "Significance to the whole text" },
              { id: "c", text: "Technique — naming the device or feature" },
              { id: "d", text: "Evaluation of the author" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Depth ladder",
                statement: "Observation → technique → effect → significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "After observing what is there, name the technique that produces it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Technique",
            commonErrors: [
              "Skipping from observation straight to significance.",
            ],
          },
        },
        {
          id: "langa-u2-bq11",
          difficulty: "foundation",
          totalMarks: 4,
          extract: {
            title: "The Attic",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The attic stairs creaked in the same place every time — third step, left side — as if the house were clearing its throat before letting her up.",
          },
          stem: "Write a short paragraph moving from observation to interpretation for this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation to interpretation",
                statement:
                  "Report the feature, name the technique, assign meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation: the stairs 'creaked in the same place every time — third step, left side'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Technique: precise location plus personification — 'as if the house were clearing its throat'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interpretation/effect: the house has a body and a voice; the attic becomes a throat the speaker must pass — memory as a bodily trial.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: the house anticipates her — the past is not dead but waiting, with a cough of warning.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Observation (creak location) → personification → house-as-throat → significance: the past anticipates her.",
            commonErrors: [
              "Jumping to 'the house is scary' without grounding in the observed detail.",
            ],
          },
        },
        {
          id: "langa-u2-bq12",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The Recipe",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Her grandmother's recipe card was soft at the folds, the ink gone brown. 'A pinch of this,' it said, and 'until it feels right,' and in the margin, in a different hand: 'she never measured anything.'",
          },
          stem: "Analyse the significance of the marginal note 'she never measured anything.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Recontextualisation",
                statement: "A later detail reframes earlier details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation: the recipe uses imprecise measures — 'a pinch', 'until it feels right' — and the card is physically worn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Technique: the margin note is in 'a different hand' — a second voice interrupting the recipe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: the note explains the imprecision — cooking was intuitive, relational, unrecordable; 'never measured' means knowledge lived in the hands, not the card.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: the recipe preserves what it cannot transmit — the card is a monument to a skill that died with its practitioner.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "The margin note reveals intuitive, embodied knowledge — the card preserves a skill it cannot teach.",
            commonErrors: [
              "Treating the note as mere family trivia rather than the extract's hinge.",
            ],
          },
        },
        {
          id: "langa-u2-bq13",
          difficulty: "core",
          totalMarks: 6,
          extract: {
            title: "The Field",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The scarecrow wore a coat of straw\nand kept the crows honest\nwith nothing but a rope\nand the memory of arms.",
          },
          stem: "Analyse how the poem moves from observation of a literal object to an interpretation of what sustains order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Depth ladder",
                statement: "Observation → technique → effect → significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Observation: the scarecrow is literally straw, rope and a coat — 'kept the crows honest'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Technique: 'the memory of arms' — the scarecrow is defined by an absence; arms it never had.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: 'honest' personifies the crows and flatters the scarecrow — deterrence works only because something seems to threaten; the 'memory' suggests the arms are imagined, so the protection is belief, not force.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: the poem implies all order rests on symbols we agree to fear — authority survives on the memory of power, not power itself.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Literal scarecrow → 'memory of arms' reveals deterrence as belief — order sustained by symbols of absent power.",
            commonErrors: [
              "Describing the scarecrow without reaching the poem's claim about authority and belief.",
            ],
          },
        },
        {
          id: "langa-u2-bq14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "For each task, select evidence and write one analytical sentence explaining its significance.",
          extract: {
            title: "The Lighthouse (extract)",
            author: "Revisit from Lesson 2-2",
            source: "Original prose extract",
            text: "For thirty years he climbed the stairs each evening and lit the lamp, though the shipping lanes had moved a century ago. The town below had forgotten why the light mattered. He kept the logbook anyway, recording weather that no one would ever read.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Analyse 'recording weather that no one would ever read.'",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Analyse 'The town below had forgotten why the light mattered.'",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Detail analysis",
                statement:
                  "Analyse exact wording; connect detail to the text's larger concern.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Point: the logbook is an audience of one — record-keeping as pure ritual.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Evidence: 'recording weather that no one would ever read' — embedded clause.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Analysis: 'ever' is absolute — the keeper knows and continues anyway; the logbook is faith, not communication.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the town's forgetting isolates the keeper — memory is his alone to carry.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'forgotten why the light mattered' — 'why' rather than 'that'; the purpose, not the fact, is lost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: 'below' spatially ranks town under tower — knowledge literally flows downward and stops; the keeper's private ritual substitutes for communal memory.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Significance: the extract stages a tension between ritual fidelity and collective forgetting — meaning survives only where someone insists on it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Logbook = ritual without audience. (b) 'Why' lost while 'that' remains — private memory vs communal forgetting.",
            commonErrors: [
              "Quoting without analysing the exact words chosen ('why', 'ever', 'below').",
            ],
          },
        },
        {
          id: "langa-u2-bq15",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Clock",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Every clock in the house had stopped at a different hour, and she had arranged them anyway — eight broken times on eight shelves, a museum of almosts.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Identify which single detail is most productive and justify your choice.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Write an analytical paragraph on that detail, ending with significance.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence selection",
                statement:
                  "Specific, patterned, unexpected details yield richest analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Best detail: 'a museum of almosts' — a compressed metaphor that refigures broken clocks as curated near-misses.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Justification: it is specific, condensed and unexpected — one phrase carries the extract's whole concern.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the simile 'museum of almosts' frames failure as exhibition — stopped clocks become artefacts of near-time.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'eight broken times on eight shelves', 'arranged them anyway'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: 'arranged' gives the clocks deliberate placement — she curates her own losses; 'almosts' names the condition precisely: each stopped clock froze a moment just before it mattered.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Significance: the house becomes an archive of suspended moments — grief figured as curation, memory as display.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 'Museum of almosts' — condensed, unexpected, thematic. (b) Clocks as curated failures — grief as exhibition of near-misses.",
            commonErrors: [
              "Choosing 'different hour' — accurate but less generative than the metaphor.",
            ],
          },
        },
        {
          id: "langa-u2-bq16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a three-paragraph analytical response to the extract (one paragraph per part), each following point, evidence, analysis, significance.",
          extract: {
            title: "The Orchard",
            author: "Revisit from Lesson 1-3",
            source: "Original poem",
            text: "My grandfather kept an orchard\nof apples that never fruited —\nhe said he was saving them\nfor a famine that never came.\n\nHe pruned them anyway,\npatient as penance,\nconvinced that beauty\nis its own harvest.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Paragraph 1: analyse the imagery of futility in the first stanza.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Paragraph 2: analyse 'patient as penance' and the religious diction.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Paragraph 3: analyse the closing aphorism 'beauty / is its own harvest' and its ambiguity.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical paragraphs",
                statement:
                  "Each paragraph: point + embedded evidence + technique analysis + significance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Point: the first stanza builds futility through doubled negation — 'never fruited', 'never came'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Evidence: 'saving them / for a famine that never came' — the grandfather's hope is structured around an impossibility.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: 'penance' reframes futile labour as voluntary suffering — discipline sanctified.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'pruned them anyway, / patient as penance' — the simile and adverb 'anyway' insist on choice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: 'patient' is both adjective and noun — patience becomes a thing practised; penance implies guilt, so the labour atones for something unnamed — perhaps uselessness itself.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Point: the closing couplet either dignifies or ironically undercuts the devotion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evidence: 'beauty / is its own harvest' — the line break isolates 'beauty' before the claim lands.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Significance: read straight, it is consolation — the orchard's value needs no fruit; read ironically, 'harvest' mocks a crop that was always only aesthetic. The poem sustains both — that ambiguity is its meaning.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Doubled negation builds futility. (b) 'Penance' sanctifies useless labour. (c) Aphorism as consolation or irony — ambiguity is the point.",
            commonErrors: [
              "Resolving the irony too early instead of sustaining the poem's doubleness.",
            ],
          },
        },
      ],
    },
  ],
};
