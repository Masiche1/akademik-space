import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "langa-u2-lesson-2-2",
  code: "2-2",
  title: "Essay Structure and Thesis Development",
  goal: "I CAN plan and write a thesis-led analytical essay with a clear introduction, developed paragraphs and conclusion.",
  standards: ["Writing", "Essay structure", "Thesis"],
  vocabulary: [
    {
      term: "Thesis",
      definition:
        "A single arguable claim that the whole essay proves; not a topic or a summary.",
    },
    {
      term: "Introduction",
      definition:
        "The opening paragraph establishing context, the text under discussion and the thesis.",
    },
    {
      term: "Topic sentence",
      definition:
        "The first sentence of a body paragraph, stating its controlling argument.",
    },
    {
      term: "Development",
      definition:
        "Expanding a point through evidence, analysis and links — the middle of the essay.",
    },
    {
      term: "Conclusion",
      definition:
        "The final paragraph that resolves the argument, not merely repeats the introduction.",
    },
    {
      term: "Signposting",
      definition:
        "Phrases that guide the reader through the argument: 'firstly', 'more significantly', 'ultimately'.",
    },
  ],
  concepts: [
    {
      id: "langa-u2-thesis-argument",
      title: "Thesis and argument",
      skill:
        "Formulate a defensible thesis and organise body paragraphs as steps in a cumulative argument.",
      lesson: {
        sections: [
          {
            heading: "What a thesis is",
            body: "A thesis is an **arguable claim about meaning**, not a topic ('This essay will discuss imagery' is not a thesis). Strong theses are **specific** ('the poem figures memory as a house with locked rooms'), **arguable** (a reasonable reader could disagree) and **generative** (each paragraph can be a step toward proving it).",
          },
          {
            heading: "Building the argument",
            body: "Each body paragraph should advance the thesis — not just analyse a different feature. Sequence paragraphs so each **builds on** the last: from language to structure to overall effect, or from surface to depth. The essay should feel like one sustained line of reasoning, not three separate notes.",
          },
          {
            heading: "Signposting",
            body: "Guide the reader explicitly: 'While the opening suggests X, the ending complicates it' signals a turn. Signposts show the **logic** of the argument — why this point comes next, not just what it is.",
          },
        ],
        keyFormulas: [
          {
            name: "Thesis test",
            statement: "Specific + arguable + generative = workable thesis",
          },
          {
            name: "Paragraph logic",
            statement:
              "Each paragraph advances the thesis; sequence shows cumulative reasoning",
          },
        ],
        workedExample: {
          problem: "Improve this thesis: 'The poem is about grief.'",
          solution:
            "Weak: topic only. Strong: 'The poem figures grief not as absence but as a house the mourner must learn to inhabit — memory becomes domestic, and the self becomes a tenant rather than an owner.' Arguable, specific, generative.",
        },
      },
      questions: [
        {
          id: "langa-u2-t1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the strongest thesis statement?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The poem figures grief as a house the mourner must learn to inhabit.",
              },
              {
                id: "b",
                text: "The poem uses many different literary devices.",
              },
              { id: "c", text: "The poem was written by a famous poet." },
              {
                id: "d",
                text: "This essay will discuss the poem's use of imagery.",
              },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis quality",
                statement:
                  "A thesis is specific, arguable and generative — it claims a meaning, not a topic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (c) makes a specific, arguable claim about how grief is figured.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The grief-as-house thesis",
            commonErrors: ["Confusing a topic announcement with a thesis."],
          },
        },
        {
          id: "langa-u2-t1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why essay paragraphs should be sequenced as a cumulative argument rather than as separate analyses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cumulative argument",
                statement:
                  "Sequenced paragraphs build a single line of reasoning toward the thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Separate analyses produce a list, not an argument — the reader cannot see how points relate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cumulative sequencing lets each paragraph presuppose the last: 'building on the imagery established earlier, the structure...' creates logical momentum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The conclusion can then resolve the whole line of reasoning rather than summarising disconnected points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sequencing turns analysis into argument: each paragraph earns the next, and the conclusion resolves the accumulated reasoning.",
            commonErrors: [
              "Treating paragraphs as independent observations rather than steps in proof.",
            ],
          },
        },
        {
          id: "langa-u2-t1q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She wrote the letter four times. The first draft said what she meant; the second said what she thought he wanted to hear; the third said nothing at all, just her name at the top of the page.\n\nShe posted the fourth.",
          },
          stem: "Analyse how the extract's structure supports a thesis about language and self-censorship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structural argument",
                statement:
                  "The four drafts enact a thesis: language moves from honesty to silence to performance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A workable thesis: the extract dramatises how language is progressively censored until only performance remains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'said what she meant' → 'what he wanted to hear' → 'nothing at all' → the posted fourth — a four-stage descent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: the drafts are not versions of a letter but versions of a self; each revision removes more of her.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Significance: 'She posted the fourth' withholds what the fourth says — the reader must infer whether it is silence, performance, or something else; the structure mirrors the theme of withheld meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The draft sequence enacts self-censorship: honesty → performance → silence → an unreadable fourth. Structure is the argument.",
            commonErrors: [
              "Summarising the four drafts without building them into an argument about language.",
            ],
          },
        },
        {
          id: "langa-u2-t1q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan and outline an essay on the following extract, giving a thesis and three paragraph topic sentences that form a cumulative argument.",
          extract: {
            title: "The Lighthouse",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "For thirty years he climbed the stairs each evening and lit the lamp, though the shipping lanes had moved a century ago. The town below had forgotten why the light mattered. He kept the logbook anyway, recording weather that no one would ever read.\n\nOn the last night of his watch, a ship answered his beam — one horn, low and clear, as if the sea had finally remembered his name.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write a thesis statement (1-2 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write three topic sentences forming a cumulative argument.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain how the final paragraph of your essay would resolve the argument.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement:
                  "Thesis + cumulative topic sentences + resolving conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The extract suggests that meaning persists not through recognition but through faithful repetition — the keeper lights a lamp for no audience, and it is precisely this uselessness that makes the final acknowledgement sacred.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1 topic sentence: the repetition of ritual without audience — 'thirty years', 'each evening' — creates meaning through discipline alone.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2 topic sentence: the community's forgetting ('the town had forgotten') isolates the keeper — his logbook is a private language.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P3 topic sentence: the ship's horn answers — recognition arrives only after meaning is no longer needed, or: the ending suggests the ritual was always a dialogue with an absent other.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The conclusion should resolve the tension: whether the ship's answer redeems the useless ritual or reveals it was always secretly meaningful.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "A strong conclusion avoids mere repetition — it states what the argument has proven about ritual, memory and recognition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: meaning through faithful repetition; the final acknowledgement is sacred because it arrives after usefulness ends. P1 ritual, P2 isolation, P3 ambiguous redemption.",
            commonErrors: [
              "Topic sentences that each analyse a separate feature without cumulative logic.",
            ],
          },
        },
        {
          id: "langa-u2-t1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement is a valid thesis rather than a topic announcement?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Light functions as a measure of moral visibility in the novel.",
              },
              { id: "b", text: "The author wrote the novel in three parts." },
              {
                id: "c",
                text: "This essay discusses the use of light in the novel.",
              },
              { id: "d", text: "The novel contains several symbols." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis quality",
                statement:
                  "A thesis claims a specific, arguable meaning — not a topic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (b) makes a claim about what light does in the text — arguable and generative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Light as moral visibility",
            commonErrors: ["Announcing a topic instead of arguing a claim."],
          },
        },
        {
          id: "langa-u2-t1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes a thesis 'arguable'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A reasonable reader could disagree with it" },
              { id: "b", text: "It mentions many techniques" },
              { id: "c", text: "It is very long" },
              { id: "d", text: "It is so obvious everyone agrees" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis quality",
                statement:
                  "Arguable = a claim a reasonable reader could contest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If no one could disagree, there is nothing to prove; arguability creates the essay's purpose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A reasonable reader could disagree",
            commonErrors: ["Writing claims so safe they require no evidence."],
          },
        },
        {
          id: "langa-u2-t1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'generative' thesis is one where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It generates many quotations" },
              { id: "b", text: "It lists every device in the text" },
              { id: "c", text: "It can be proven in one sentence" },
              {
                id: "d",
                text: "Each body paragraph can be a step toward proving it",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis quality",
                statement: "Generative = each paragraph can advance the proof.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A generative thesis yields multiple lines of evidence and reasoning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Each paragraph can be a step toward proving it",
            commonErrors: ["Writing a thesis too narrow to sustain an essay."],
          },
        },
        {
          id: "langa-u2-t1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which signpost best signals a turn in the argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Finally, the poem ends.'" },
              {
                id: "b",
                text: "'While the opening suggests X, the ending complicates it.'",
              },
              { id: "c", text: "'In addition, there is a metaphor.'" },
              { id: "d", text: "'The poem also contains imagery.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Signposting",
                statement:
                  "Signposts show the logic of the argument, including turns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'While... complicates' explicitly signals a shift from one position to another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The 'while... complicates' signpost",
            commonErrors: [
              "Using 'also' and 'finally' as empty fillers rather than logical markers.",
            ],
          },
        },
        {
          id: "langa-u2-t1q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Essay paragraphs that each analyse a different device with no relation to each other produce:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A list of separate observations, not an argument",
              },
              { id: "b", text: "A strong cumulative argument" },
              { id: "c", text: "A clearer introduction" },
              { id: "d", text: "A better conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cumulative argument",
                statement: "Disconnected paragraphs cannot prove a thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without sequential logic, the reader cannot see how points build toward the claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A list of observations, not an argument",
            commonErrors: [
              "Treating paragraph count as a substitute for argument.",
            ],
          },
        },
        {
          id: "langa-u2-t1q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which thesis would best sustain a three-paragraph essay on a poem about a journey?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The journey figures the self's passage from certainty to acceptance of uncertainty.",
              },
              { id: "b", text: "The poem uses many images of roads." },
              { id: "c", text: "The poem describes a journey." },
              { id: "d", text: "The journey happens in three stages." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis quality",
                statement:
                  "Strong theses claim a pattern of meaning across the whole text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (b) is specific, arguable and yields multiple lines of evidence (stages, images, tone).",
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
              "**(b)** Journey as passage from certainty to acceptance",
            commonErrors: ["Choosing a thesis that merely restates the plot."],
          },
        },
        {
          id: "langa-u2-t1q11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Improve this weak thesis into a strong one and explain what you changed: 'The extract is about a lighthouse.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Specific + arguable + generative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness identified: it names a topic, not a claim — nothing to prove.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved example: 'The lighthouse figures vigilance as a private, unreciprocated devotion — the keeper's light persists precisely because no one needs it.'",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Explanation: adds an arguable claim (devotion, unreciprocation) that language, structure and ending can each support.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Any thesis that converts 'lighthouse' into a claim about meaning (e.g. devotion, uselessness, recognition) with explanation of specificity and arguability.",
            commonErrors: ["Adding adjectives without adding a claim."],
          },
        },
        {
          id: "langa-u2-t1q12",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The Crossing (extract)",
            author: "Revisit from Lesson 2-3",
            source: "Original poem",
            text: "The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\n\nI cross it anyway.\nThe toll is one memory\nat a time.",
          },
          stem: "Write a thesis statement for an essay on this poem, then explain why it is specific, arguable and generative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Specific + arguable + generative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis example: 'The poem figures continuity as a transaction the speaker knowingly repeats — memory is the toll paid for crossing a bridge that is no longer the same.'",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Specific: anchored in 'toll', 'memory', 'cross it anyway' — not a general claim about rivers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Arguable: a reader could argue the poem celebrates endurance rather than irony — the transaction could be noble or futile.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Generative: supports three paragraphs — the river's transformation, the carpenters' dispute, the speaker's chosen crossing.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Thesis on continuity-as-transaction; explained against the three thesis criteria.",
            commonErrors: [
              "Writing 'the poem is about a bridge' — topic, not claim.",
            ],
          },
        },
        {
          id: "langa-u2-t1q13",
          difficulty: "core",
          totalMarks: 6,
          extract: {
            title: "The Night Train",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "We left the city stitching shut behind us\nand the fields came unbuttoned.\nNobody spoke. The carriage\nrocked us like letters\naddressed to no one in particular.",
          },
          stem: "Propose a thesis and two topic sentences that build cumulatively toward it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cumulative argument",
                statement: "Topic sentences must each advance the thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis example: 'The poem figures departure as release without destination — freedom figured as letters addressed to no one.'",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "P1 topic sentence: the city 'stitching shut' versus fields 'unbuttoned' — clothing imagery figures leaving as undressing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2 topic sentence: 'addressed to no one in particular' — the rocking carriage delivers the passengers nowhere; freedom is also anonymity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sequence builds from image to implication: P1 establishes the clothing conceit, P2 extends it to the poem's bleak freedom.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Thesis: departure as release without destination. P1 clothing imagery, P2 anonymity of freedom — cumulative.",
            commonErrors: [
              "Topic sentences that describe stanza one and stanza two separately.",
            ],
          },
        },
        {
          id: "langa-u2-t1q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate this essay plan's argument: does the paragraph sequence build cumulatively toward the thesis?",
          extract: {
            title: "The Lighthouse (extract)",
            author: "Revisit from Lesson 2-2",
            source: "Original prose extract",
            text: "For thirty years he climbed the stairs each evening and lit the lamp, though the shipping lanes had moved a century ago. The town below had forgotten why the light mattered. He kept the logbook anyway, recording weather that no one would ever read.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write the thesis this plan serves (1-2 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Give three topic sentences forming a cumulative sequence.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain what makes the sequence cumulative rather than a list.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement: "Thesis + cumulative topic sentences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The extract argues that meaning survives not through use but through faithful repetition — the lamp is lit for no one, and that uselessness is what makes it sacred.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1: ritual repetition without audience — 'thirty years', 'each evening' — meaning made by discipline.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2: the town's forgetting isolates the keeper — the logbook is a private, unread language.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P3: 'anyway' — persistence despite knowledge of uselessness; the final beat tests whether ritual is faith or folly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Each paragraph presupposes the last: P2's isolation only matters because P1 established the ritual's purity; P3's 'anyway' is the thesis's crux.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The sequence moves from what the ritual is, to what it costs, to what it proves — escalating, not additive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis on useless devotion; P1 ritual, P2 isolation, P3 persistence-as-proof; sequence escalates rather than lists.",
            commonErrors: [
              "Topic sentences covering separate details without presupposing each other.",
            ],
          },
        },
        {
          id: "langa-u2-t1q15",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Suitcase",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She had packed for a life she was not leaving. Three pairs of shoes, none of them comfortable for walking. A photograph of a place she had never been. At the bottom, wrapped in a scarf, the letter she had decided not to send.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write a thesis for an essay on this extract.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write two topic sentences that build on each other cumulatively.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Identify which detail best supports your thesis and explain why.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis and evidence",
                statement:
                  "Thesis, cumulative topic sentences, supporting detail.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The suitcase figures departure as rehearsal for a leaving that will not happen — she packs an alternate life she has already decided against.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1: the details of the packing ('three pairs of shoes, none comfortable') show preparation without conviction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2: 'the letter she had decided not to send' — the final object confirms the pattern: even the withheld message is packed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Cumulative: P2's letter lands the thesis — every object rehearses a departure already cancelled.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Best detail: 'wrapped in a scarf' — the unsent letter is hidden inside another object, mirroring how the whole departure is concealed inside ordinary packing.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: packing as rehearsal for a cancelled leaving. P1 convincing details of preparation, P2 withheld letter confirms. 'Wrapped in a scarf' = hidden departure.",
            commonErrors: [
              "Choosing 'a photograph of a place she had never been' without linking it to the rehearsal thesis.",
            ],
          },
        },
        {
          id: "langa-u2-t1q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a complete essay plan (thesis, three cumulative topic sentences, conclusion direction) for the following extract.",
          extract: {
            title: "The Orchard (extract)",
            author: "Revisit from Lesson 1-3",
            source: "Original poem",
            text: "My grandfather kept an orchard\nof apples that never fruited —\nhe said he was saving them\nfor a famine that never came.\n\nHe pruned them anyway,\npatient as penance,\nconvinced that beauty\nis its own harvest.",
          },
          parts: [
            { label: "a", prompt: "Write the thesis statement.", marks: 2 },
            {
              label: "b",
              prompt: "Write three cumulative topic sentences.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "State what the conclusion resolves and how it avoids repetition.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement:
                  "Thesis + cumulative paragraphs + resolving conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The poem argues that devotion creates its own harvest — the grandfather's unfruiting orchard is not failure but a practice of attention that yields beauty as its crop.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1: doubled negation ('never fruited', 'never came') establishes futility as the poem's ground.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2: 'patient as penance' transforms labour into discipline — religious diction sanctifies the useless work.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P3: 'beauty / is its own harvest' — the aphorism redefines harvest itself, resolving the futility established in P1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Sequence: futility → discipline → redefinition — each paragraph earns the next.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Conclusion resolves the irony/consolation question: whether 'beauty is its own harvest' dignifies or mocks the devotion — stated as what the argument proves, not a restatement.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: devotion creates its own harvest. P1 futility, P2 penance, P3 redefinition. Conclusion resolves the aphorism's doubleness.",
            commonErrors: [
              "Topic sentences that each cover a stanza rather than building one argument.",
            ],
          },
        },
      ],
    },
    {
      id: "langa-u2-essay-architecture",
      title: "Essay architecture",
      skill:
        "Structure an essay's introduction, body and conclusion so each performs a distinct function.",
      lesson: {
        sections: [
          {
            heading: "Introduction",
            body: "An IB-style introduction typically: identifies the text and genre in a phrase, offers minimal context, and ends with the **thesis**. Avoid plot summary — the examiner knows the text. The introduction's job is to frame the argument, not to prove it.",
          },
          {
            heading: "Body paragraphs",
            body: "Each body paragraph needs a **topic sentence** (the point), **embedded evidence** (short quotations), **analysis** (technique + effect) and a **link** (back to the thesis or forward to the next point). Aim for one idea per paragraph.",
          },
          {
            heading: "Conclusion",
            body: "The conclusion should **resolve**, not repeat. Restate the thesis in sharper form, draw together the line of reasoning, and — where appropriate — acknowledge complexity or limitation. A conclusion that says 'in conclusion, the poem is about grief' has failed.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay skeleton",
            statement:
              "Introduction (frame + thesis) → Body (point + evidence + analysis + link) × n → Conclusion (resolve)",
          },
          {
            name: "Conclusion test",
            statement:
              "Does it resolve the argument, or merely repeat the introduction?",
          },
        ],
        workedExample: {
          problem:
            "What is wrong with this introduction? 'In this poem, the poet describes a storm. Storms are powerful. This essay will look at the storm imagery.'",
          solution:
            "It summarises, announces a topic rather than a thesis, and uses a dead metaphor ('powerful'). A better introduction names the text, suggests the argument in one line, and ends with a specific claim about how the storm is figured.",
        },
      },
      questions: [
        {
          id: "langa-u2-t2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the primary function of an essay's introduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To summarise the whole plot" },
              { id: "b", text: "To repeat the conclusion" },
              { id: "c", text: "To frame the argument and state the thesis" },
              { id: "d", text: "To list all the literary devices used" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction function",
                statement:
                  "Frame context and state the thesis — not summarise or prove.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The introduction sets up the argument and ends with the thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Frame the argument and state the thesis",
          },
        },
        {
          id: "langa-u2-t2q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Gate (extract)",
            author: "Revisit from Lesson 1-1",
            source: "Original poem",
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.",
          },
          stem: "Write an introduction (3-4 sentences) for an essay on this extract, ending with a thesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction writing",
                statement:
                  "Identify text, frame context briefly, end with specific thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Names the text and its opening image — morning as a gate — without summarising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Frames the poem's concern: involuntary existence, imposed obligation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ends with a specific thesis, e.g. 'The poem figures existence as an iron gate opened without consent — personification, debt imagery and irregular rhythm all construct a world the speaker never chose.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model: brief identification + framing + specific thesis about personification, debt imagery and rhythm.",
            commonErrors: [
              "Writing a plot summary instead of a thesis-led introduction.",
            ],
          },
        },
        {
          id: "langa-u2-t2q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Lighthouse (extract)",
            author: "Revisit from Lesson 2-2",
            source: "Original prose extract",
            text: "On the last night of his watch, a ship answered his beam — one horn, low and clear, as if the sea had finally remembered his name.",
          },
          stem: "Write a conclusion (3-4 sentences) for an essay arguing that the extract presents ritual as a dialogue with an absent other.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion writing",
                statement:
                  "Resolve the argument in sharper form; do not repeat the introduction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Restates the thesis in resolved form: the thirty years of solitary ritual were a one-sided conversation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Draws together the evidence: the logbook, the forgotten town, the unanswered beam — all pointed toward this moment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adds a final interpretive turn: the horn answers 'as if the sea had finally remembered his name' — recognition arrives as personification, suggesting the absent other was always the sea itself, or that meaning was projected onto it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Ends on the ambiguity rather than a neat moral — the extract's power lies in whether the answer is real or imagined.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model conclusion: resolves the ritual-as-dialogue thesis, gathers the evidence, and ends on the ambiguity of the horn's answer.",
            commonErrors: [
              "Repeating the introduction verbatim or adding new evidence in the conclusion.",
            ],
          },
        },
        {
          id: "langa-u2-t2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a full essay plan (introduction thesis, three topic sentences, conclusion direction) for an essay on the following extract.",
          extract: {
            title: "The Orchard (extract)",
            author: "Revisit from Lesson 1-3",
            source: "Original poem",
            text: "My grandfather kept an orchard\nof apples that never fruited —\nhe said he was saving them\nfor a famine that never came.\n\nHe pruned them anyway,\npatient as penance,\nconvinced that beauty\nis its own harvest.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write the introduction's final thesis sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write three cumulative topic sentences for body paragraphs.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write the direction of the conclusion (what it resolves, not its full text).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement:
                  "Thesis + cumulative topic sentences + resolving conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The poem presents futile labour as a form of devotion — the grandfather's unharvested orchard becomes a site where beauty, penance and meaning are made to coincide.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1: the imagery of unfruiting ('never fruited', 'famine that never came') establishes futility as the poem's ground.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2: 'pruned them anyway, / patient as penance' — the verbs and religious diction transform labour into discipline.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P3: 'beauty / is its own harvest' — the closing aphorism either dignifies or ironically undercuts the devotion; the poem's ambiguity is the point.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Sequence builds from description to interpretation to ambiguity — cumulative, not a list.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Conclusion resolves whether 'beauty is its own harvest' is consolation or irony — the poem sustains both, and the essay should say which reading its argument supports.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Ends by stating what the poem proves about labour, memory and the dignity of useless work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: futile labour as devotion. P1 futility, P2 penance, P3 ambiguous aphorism. Conclusion resolves the irony/consolation question.",
            commonErrors: [
              "Topic sentences that each cover a separate device without cumulative logic.",
            ],
          },
        },
        {
          id: "langa-u2-t2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which element should an introduction avoid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Minimal context" },
              { id: "b", text: "Identifying the text and genre" },
              { id: "c", text: "Ending with a thesis" },
              { id: "d", text: "Detailed plot summary" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction function",
                statement: "Frame the argument; do not summarise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The examiner knows the text; plot summary wastes the introduction's framing function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Detailed plot summary",
            commonErrors: ["Using the introduction to retell the text."],
          },
        },
        {
          id: "langa-u2-t2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What four elements should every body paragraph contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction, body, conclusion, bibliography" },
              { id: "b", text: "Topic sentence, evidence, analysis, link" },
              { id: "c", text: "Quotation, paraphrase, summary, opinion" },
              { id: "d", text: "Title, author, date, genre" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Body paragraph anatomy",
                statement: "Point + embedded evidence + analysis + link.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The four-part structure keeps each paragraph argumentative and connected.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Topic sentence, evidence, analysis, link",
            commonErrors: [
              "Writing paragraphs of quotation and commentary without a linking move.",
            ],
          },
        },
        {
          id: "langa-u2-t2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A conclusion that begins 'In conclusion, the poem is about grief' has failed because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is too short" },
              { id: "b", text: "Uses the wrong tense" },
              {
                id: "c",
                text: "Repeats a topic rather than resolving the argument",
              },
              { id: "d", text: "Mentions the poem" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion function",
                statement:
                  "Resolve the argument in sharper form — do not repeat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'About grief' names a topic; a conclusion must state what the argument has proven.",
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
              "**(b)** Repeats a topic rather than resolving the argument",
            commonErrors: ["Summarising instead of resolving."],
          },
        },
        {
          id: "langa-u2-t2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of a 'link' at the end of a body paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To introduce a quotation" },
              { id: "b", text: "To list devices" },
              { id: "c", text: "To repeat the topic sentence" },
              {
                id: "d",
                text: "To connect back to the thesis or forward to the next point",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph links",
                statement: "Links maintain the cumulative argument's momentum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Links show how the paragraph serves the thesis or sets up the next step.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Connect back to thesis or forward to next point",
            commonErrors: [
              "Ending paragraphs abruptly without a linking move.",
            ],
          },
        },
        {
          id: "langa-u2-t2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which introduction best follows IB-style conventions?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Names the text, frames context briefly, ends with a specific thesis",
              },
              {
                id: "b",
                text: "Copies the essay question as the first sentence",
              },
              { id: "c", text: "A full paragraph summarising every stanza" },
              { id: "d", text: "Lists all literary devices before any claim" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction conventions",
                statement: "Identify, frame, thesis — nothing more.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The three-part introduction frames the argument without proving or summarising it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Names text, frames context, ends with thesis",
            commonErrors: ["Front-loading summary and device lists."],
          },
        },
        {
          id: "langa-u2-t2q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A conclusion may legitimately include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A verbatim repeat of the introduction" },
              { id: "b", text: "A list of further texts to read" },
              {
                id: "c",
                text: "An acknowledgement of complexity or limitation in the argument",
              },
              { id: "d", text: "Brand-new evidence not discussed in the body" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion function",
                statement: "Resolve; acknowledge complexity where earned.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledging limits shows the argument's maturity; new evidence belongs in the body.",
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
              "**(b)** An acknowledgement of complexity or limitation",
            commonErrors: [
              "Introducing new evidence or repeating the introduction.",
            ],
          },
        },
        {
          id: "langa-u2-t2q11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Rewrite this faulty introduction's final sentence into a proper thesis: 'This essay will look at the poem's storm imagery and what it means.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Specific + arguable + generative claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fault identified: 'will look at' announces a topic; 'what it means' defers the claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved example: 'The poem figures the storm not as an event but as a force the speaker must learn to inhabit — destruction becomes a form of attention.'",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Explanation: claims something specific and arguable about how the storm functions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Any specific, arguable claim about the storm's function — e.g. storm-as-habitation thesis with explanation.",
            commonErrors: [
              "Keeping the announcement structure while adding adjectives.",
            ],
          },
        },
        {
          id: "langa-u2-t2q12",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The Door",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The door was never locked, which everyone knew and no one said. She opened it each morning as if permission had been granted — though the house had given none.",
          },
          stem: "Write an introduction (3-4 sentences) for an essay on this extract, ending with a thesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction writing",
                statement: "Identify, frame briefly, end with thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies the extract's central image — an unlocked door — and its quiet social situation without summarising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Frames the concern: permission, knowledge and unspoken rules within a household.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Thesis example: 'The extract figures domestic freedom as a permission never granted — the unlocked door is open only because no one has forbidden it, and her daily opening is a rehearsal of a right she does not possess.'",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Introduction naming the door image, framing the permission theme, ending with a specific thesis about ungranted freedom.",
            commonErrors: [
              "Writing 'In this extract a woman opens a door' — summary without argument.",
            ],
          },
        },
        {
          id: "langa-u2-t2q13",
          difficulty: "core",
          totalMarks: 6,
          stem: "Write a body paragraph (topic sentence, embedded evidence, analysis, link) on the following extract.",
          extract: {
            title: "The Station",
            author: "Revisit from Lesson 2-1",
            source: "Original prose extract",
            text: "The departure board still flashed DESTINATION — a word with no destination of its own, announcing nothing, forever almost arriving.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Body paragraph",
                statement: "Point + embedded evidence + analysis + link.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Topic sentence states a point, e.g. 'The departure board turns arrival into a permanent deferral.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'DESTINATION', 'a word with no destination of its own', 'forever almost arriving' — embedded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: the oxymoron 'forever almost arriving' suspends time — the board outlives the trains, making the station a metaphor for stalled expectation.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Link: connects to thesis on suspended lives / stasis, or forward to the next paragraph.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Paragraph contains all four elements in order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model paragraph: point on deferred arrival; quoted phrases; oxymoron analysis; link to wider stasis theme.",
            commonErrors: [
              "Quoting 'DESTINATION' without analysing the paradox built around it.",
            ],
          },
        },
        {
          id: "langa-u2-t2q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a conclusion for an essay arguing that the extract below presents memory as a room the speaker must keep visiting.",
          extract: {
            title: "The Room",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The room had been sealed for twenty years, but she still set a chair outside the door on Sundays — not to enter, only to sit where the light fell. Inside, she knew, the dust had arranged itself into the shape of waiting.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Write a 2-3 sentence conclusion resolving the memory-as-room thesis.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain how your conclusion avoids repeating the introduction.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion writing",
                statement:
                  "Resolve the argument in sharper form; gather the line of reasoning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Conclusion restates the thesis resolved: memory persists as ritual proximity — she does not enter because entering would end the waiting.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Gathers evidence: 'sealed for twenty years', 'set a chair outside', 'the shape of waiting' — the room functions as a shrine to suspended grief.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Adds final turn: 'the dust had arranged itself' personifies absence — the room keeps vigil even unopened; memory needs no entry, only proximity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Ends on the ambiguity: whether the Sunday chair is devotion or inability to let go.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Avoids repetition by stating what the argument has proven (memory as ritual, not storage) rather than restating the claim.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Introduces a final interpretive position — devotion vs inability — that the body earned but the introduction could not assume.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Uses the extract's own imagery ('shape of waiting') as the closing resonance rather than paraphrase.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Resolved conclusion: memory as ritual proximity; dust 'waiting' personifies absence. (b) Adds interpretive turn, no paraphrase, ends on earned ambiguity.",
            commonErrors: [
              "Ending with 'In conclusion, memory is like a room' — paraphrase, not resolution.",
            ],
          },
        },
        {
          id: "langa-u2-t2q15",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Window (extract)",
            author: "Revisit from Lesson 2-1",
            source: "Original prose extract",
            text: "He cleaned the window until it disappeared — no smears, no breath, no trace of his own hand. Outside, the street looked more real than the room. He sat down and waited for the glass to remember him.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write a topic sentence for a paragraph on self-erasure.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write the evidence and analysis sentences for that paragraph.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write the linking sentence back to a thesis about identity and reflection.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Body paragraph",
                statement: "Point + evidence + analysis + link.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Topic sentence states the point, e.g. 'The window-cleaning enacts a deliberate self-erasure.'",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'until it disappeared', 'no smears, no breath, no trace of his own hand'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: the triple 'no' builds an inventory of absence — he removes every sign that he was there; the street's 'more real' quality makes the room a negation.",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Link connects to thesis: 'If the self survives only as reflection — the glass must 'remember' him because he has erased himself from the room — then identity here is image, not inhabitant.'",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Topic sentence on self-erasure; quoted 'no' list analysed; link fusing reflection motif with identity thesis.",
            commonErrors: [
              "Listing the three 'no' phrases without explaining their cumulative effect.",
            ],
          },
        },
        {
          id: "langa-u2-t2q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a complete essay plan (introduction thesis, three cumulative topic sentences, conclusion direction) for the following extract.",
          extract: {
            title: "The Suitcase (extract)",
            author: "Revisit from Lesson 2-2",
            source: "Original prose extract",
            text: "She had packed for a life she was not leaving. Three pairs of shoes, none of them comfortable for walking. A photograph of a place she had never been. At the bottom, wrapped in a scarf, the letter she had decided not to send.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write the introduction's final thesis sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write three cumulative topic sentences.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "State the conclusion's direction (what it resolves).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay planning",
                statement:
                  "Thesis + cumulative topic sentences + resolving conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The suitcase figures departure as rehearsal — every object is packed for a leaving she has already decided against, so the bag becomes an archive of a life un-lived.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1: the opening line states the contradiction — packing 'for a life she was not leaving' — and the details ('none comfortable for walking') confirm inconsequence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2: 'a photograph of a place she had never been' — aspiration without experience; the suitcase contains futures, not memories.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P3: 'wrapped in a scarf, the letter she had decided not to send' — the final object hides the withheld message; the whole departure is concealed inside ordinary packing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Sequence: stated contradiction → aspirational object → hidden confession — each detail deepens the rehearsal thesis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Conclusion resolves whether the packing is hope or grief — whether rehearsing a departure is preparation or mourning; avoids repeating the thesis by stating which reading the evidence earned.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: suitcase as archive of un-lived departure. P1 inconsequential packing, P2 future-not-memory, P3 hidden letter. Conclusion resolves hope vs grief.",
            commonErrors: [
              "Topic sentences that describe objects without advancing the rehearsal argument.",
            ],
          },
        },
      ],
    },
  ],
};
