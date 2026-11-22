import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "langa-u3-lesson-3-3",
  code: "3-3",
  title: "Preparing Comparative Commentary",
  goal: "I CAN prepare and deliver a structured comparative commentary on two texts.",
  standards: ["Comparative", "Oral", "Commentary"],
  vocabulary: [
    {
      term: "Comparative commentary",
      definition:
        "A spoken or written analysis that relates two texts through shared and contrasting features.",
    },
    {
      term: "Framing",
      definition:
        "The opening statement that identifies both texts and the comparative focus.",
    },
    {
      term: "Transition",
      definition:
        "A phrase or move that shifts attention between Text A and Text B, or between points.",
    },
    {
      term: "Balanced treatment",
      definition:
        "Giving each text comparable analytical attention — neither dominating nor tokenised.",
    },
    {
      term: "Anchor point",
      definition:
        "A specific detail or quotation that grounds a comparative claim in evidence.",
    },
    {
      term: "Synthesis",
      definition:
        "The closing move that draws the comparison together into a final judgement.",
    },
  ],
  concepts: [
    {
      id: "langa-u3-commentary-structure",
      title: "Structuring the commentary",
      skill:
        "Organise a comparative commentary with a framing statement, paired points and a synthesising conclusion.",
      lesson: {
        sections: [
          {
            heading: "The commentary arc",
            body: "A comparative commentary has three movements: **framing** (name both texts, state the comparative focus), **development** (paired points of comparison — each point addresses both texts before moving to the next), and **synthesis** (a final judgement on how the texts relate).",
          },
          {
            heading: "Paired points",
            body: "The key discipline is **pairing**: discuss Text A's treatment of a theme, then immediately Text B's — 'where the first does X, the second does Y'. Do not analyse all of Text A then all of Text B; that is two commentaries, not one comparison.",
          },
          {
            heading: "Transitions",
            body: "Transitions are the connective tissue: 'by contrast', 'similarly', 'where Text A compresses, Text B expands'. They signal to the listener that the comparison is active, not sequential. Without transitions, the commentary becomes a list.",
          },
        ],
        keyFormulas: [
          {
            name: "Commentary structure",
            statement: "Frame → paired points → synthesize",
          },
          {
            name: "Pairing rule",
            statement: "Each point addresses both texts before advancing",
          },
        ],
        workedExample: {
          problem:
            "Frame a commentary on two poems about grief: one figures it as a house, the other as weather.",
          solution:
            "'Both poems treat grief as an inhabitable force, but where the first makes it architectural — a house with no doors — the second makes it meteorological — weather that arrives and leaves. I will compare how each form shapes the experience of loss.'",
        },
      },
      questions: [
        {
          id: "langa-u3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the correct structure for a comparative commentary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analyse Text A fully, then Text B" },
              { id: "b", text: "Summary of both texts" },
              { id: "c", text: "List similarities, then list differences" },
              { id: "d", text: "Frame, paired points, synthesis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Commentary structure",
                statement: "Frame → paired points → synthesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Paired points ensure active comparison rather than sequential analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Frame, paired points, synthesis",
          },
        },
        {
          id: "langa-u3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why analysing Text A completely before Text B is not a true comparison.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pairing discipline",
                statement:
                  "Sequential analysis produces two commentaries, not one comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Analysing A then B forces the listener to hold both in memory and do the comparing themselves — the work is not done.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Paired points make the comparison visible: 'where A does X, B does Y' shows the relationship in real time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The paired structure also prevents imbalance — each text gets attention at each stage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sequential analysis delegates the comparison to the listener; paired points perform it explicitly and keep treatment balanced.",
            commonErrors: [
              "Writing two separate analyses and calling it comparative.",
            ],
          },
        },
        {
          id: "langa-u3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Gates",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.\n\nPOEM B: Evening closed its wooden door\nand kept the dark outside\nlike a debt I had already paid.",
          },
          stem: "Write a framing statement and one paired comparative point for a commentary on these two poems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing and pairing",
                statement:
                  "Frame identifies texts and focus; paired point addresses both.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing example: 'Both poems figure a daily threshold — morning's gate and evening's door — as a transaction of light and dark. I will compare how each makes the threshold a matter of debt.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Paired point: 'Where Poem A's morning \"let the light in like a debt / I never agreed to pay\" — obligation imposed — Poem B's evening \"kept the dark outside / like a debt I had already paid\" — obligation fulfilled; the poems mirror each other across the day.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Framing: threshold as transaction. Paired point: A's unpaid morning debt vs B's paid evening debt — mirror structure across the day.",
            commonErrors: [
              "Framing that summarises rather than focuses the comparison; points that treat one text at a time.",
            ],
          },
        },
        {
          id: "langa-u3-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare the full structure of a comparative commentary (not the full delivery) on the following paired texts.",
          extract: {
            title: "Two Crossings",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\nI cross it anyway.\nThe toll is one memory\nat a time.\n\nPOEM B: The old road ended\nat the river's edge.\nWe built a ferry instead —\ntwo planks and a rope.\nMy father called it progress.\nI call it a rope\nthat will hold until it doesn't.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write the framing statement (2-3 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write three paired comparative points (each addressing both poems).",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write the synthesis — the final judgement on how the poems relate.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Commentary preparation",
                statement: "Frame + paired points + synthesis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Framing example: 'Both poems treat crossing a river as a problem of continuity — Poem A's rebuilt bridge and Poem B's improvised ferry. I will compare how each figures the cost of getting across.'",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 1 (structure of solution): A's bridge is restored by unnamed forces; B's ferry is built by 'we' — communal improvisation versus impersonal restoration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 2 (attitude to change): A's carpenters 'insist' it is the same — denial; B's father 'calls it progress' — celebration; the poems diverge on whether change is loss or improvement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 3 (the cost): A's toll is 'one memory at a time' — internal, cumulative; B's rope 'will hold until it doesn't' — external, precarious; both make crossing conditional.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 3 continued or alternative: the generational difference — A's speaker accepts the toll; B's speaker inherits the father's optimism and doubts it.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Synthesis example: 'The poems converge on crossing as necessary but divergent on its cost — A makes it a debt paid in memory, B makes it a rope that may fail; together they suggest that every crossing is both a continuation and a risk.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frame: crossing as continuity problem. Points: solution structure, attitude to change, cost of crossing. Synthesis: both make crossing necessary but cost differently — memory versus precarity.",
            commonErrors: [
              "Points that analyse one poem each; synthesis that repeats rather than resolves the comparison.",
            ],
          },
        },
        {
          id: "langa-u3-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'framing' of a comparative commentary should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List every theme in both texts" },
              {
                id: "b",
                text: "Name both texts and state the comparative focus",
              },
              { id: "c", text: "Summarise both texts fully" },
              { id: "d", text: "Give your personal opinion immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing",
                statement: "Identify texts and focus the comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing orients the listener — it names the texts and the lens, not the whole analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Name texts, state focus",
          },
        },
        {
          id: "langa-u3-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which opening is the best framing for a commentary on two poems about night?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "These are two poems about night. Here is my analysis.",
              },
              { id: "b", text: "I liked the second poem more than the first." },
              {
                id: "c",
                text: "Both poems treat night as a force that acts on the sleeper — but where the first makes it shelter, the second makes it surveillance. I will compare how each achieves this.",
              },
              {
                id: "d",
                text: "Poem 1 is about night. Poem 2 is also about night.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing",
                statement:
                  "Names texts, states the shared theme and the divergence to be explored.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choice (b) does all three framing jobs: shared theme (night as force), divergence (shelter versus surveillance), and announces the comparative method.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other options summarise, list topics or offer opinion without focusing the comparison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Shared theme + divergence + method",
          },
        },
        {
          id: "langa-u3-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'transition' in a comparative commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A quotation from the text" },
              { id: "b", text: "A summary of what was said" },
              { id: "c", text: "A pause for dramatic effect only" },
              {
                id: "d",
                text: "A phrase signalling a shift between texts or points, keeping the comparison audible",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition",
                statement: "Signposts that keep the comparison audible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transitions guide the listener through the comparison's structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Signalling shifts",
          },
        },
        {
          id: "langa-u3-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an effective paired comparative point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poem A line 3 says X. Poem B line 5 says Y." },
              { id: "b", text: "Poem A uses metaphor. Poem B uses metaphor." },
              {
                id: "c",
                text: "Where Poem A's night is 'a held breath' — suspension without threat — Poem B's night is 'a patient creditor' — debt and obligation; the poems share the agent but differ on its moral character.",
              },
              { id: "d", text: "Both poems have three stanzas." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paired point",
                statement:
                  "Addresses both texts in one analytical move and draws the comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choice (b) pairs the evidence and immediately interprets the divergence — the comparison is performed, not deferred.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The others list features or lines without performing the comparison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Paired evidence plus interpretation",
          },
        },
        {
          id: "langa-u3-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The 'synthesis' of a comparative commentary should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat the introduction" },
              {
                id: "b",
                text: "Deliver a final judgement on how the texts relate — resolving the comparison",
              },
              { id: "c", text: "Apologise for running out of time" },
              { id: "d", text: "Summarise each text separately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis",
                statement:
                  "The closing move draws the comparison into a single judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synthesis resolves the paired points into a claim about the texts' relationship — not a recap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Final judgement on the relationship",
          },
        },
        {
          id: "langa-u3-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Balanced treatment' in a commentary means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only comparing similarities" },
              {
                id: "b",
                text: "Each text anchors paired points throughout — neither dominates nor is tokenised",
              },
              { id: "c", text: "Giving each text equal word count" },
              { id: "d", text: "Avoiding the harder text" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced treatment",
                statement: "Comparable analytical weight at every stage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Balance is analytical, distributed across paired points — not a matter of word count.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Comparable weight throughout",
          },
        },
        {
          id: "langa-u3-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Seas",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The sea keeps what it takes —\nevery wreck a sentence\nit refuses to finish.\n\nPOEM B: The sea gives back what it borrows —\nshells, driftwood, names\nwritten in foam.",
          },
          stem: "Write a framing statement for a commentary on these two poems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing",
                statement:
                  "Name the shared theme, the divergence, and announce the focus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing example: 'Both poems figure the sea as an agent that keeps or returns what it takes — but where the first makes it a hoarder of unfinished stories, the second makes it a generous restorer. I will compare how each poems gives the sea a different moral character.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Effective framing names the shared agent (the sea), the divergence (keeps versus returns), and announces the lens (moral character).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model: names shared theme (sea as keeper/restorer), divergence (hoarder vs generous), and comparative focus.",
            commonErrors: [
              "Framing that summarises both poems rather than focusing the comparison.",
            ],
          },
        },
        {
          id: "langa-u3-q12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Two Winters",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Winter wrote its name\nin frost on every window —\na signature I could read\nbut never return.\n\nPOEM B: Winter came uninvited\nand stayed past its welcome —\nwe learned its grammar\nthe way you learn a difficult guest.",
          },
          stem: "Write one paired comparative point for a commentary on these poems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paired point",
                statement: "Address both texts in one analytical move.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point example: 'Where Poem A figures winter as a correspondent — it writes its name, leaves a readable signature — Poem B figures it as an unwelcome guest — uninvited, stayed past its welcome; the poems diverge on whether winter communicates or intrudes.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "The point pairs the evidence (signature versus guest) and draws the comparison (communication versus intrusion) in a single move.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A weaker version would describe each poem separately — the pairing must be visible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model: A's winter as correspondent (signature) versus B's winter as unwelcome guest — communication versus intrusion.",
            commonErrors: [
              "Writing two separate observations instead of one paired point.",
            ],
          },
        },
        {
          id: "langa-u3-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Exiles",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: I carry my country\nin a tin box under the bed —\nit fits, but it does not close.\n\nPOEM B: I carry my country\nin the shape of a sentence\nI am still learning to say.",
          },
          stem: "Write a framing statement, one paired point, and the transition you would use between them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing + pairing + transition",
                statement: "All three moves of the commentary arc.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing example: 'Both poems figure exile as something carried — but where the first makes it a physical object under the bed, the second makes it a language still being learned. I will compare what each form of carrying costs.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Paired point: 'Where Poem A's country fits, but does not close — preserved but unmanageable — Poem B's country is a sentence I am still learning to say — alive but incomplete; one exile is stored, the other spoken.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Transition example: 'So the first poem makes exile an object problem — it fits but will not close. The second makes it a language problem — the sentence is still being learned.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frame: exile as carried burden. Point: stored object versus spoken language. Transition: names the shift from object to language.",
            commonErrors: [
              "Paired point that treats the poems separately; transition that merely announces 'now for poem B'.",
            ],
          },
        },
        {
          id: "langa-u3-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare the full structure of a comparative commentary (not the full delivery) on the following paired texts.",
          extract: {
            title: "Two Rivers",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river took the village\nand gave it back changed —\nsame banks, same bend,\nbut the water had opinions now.\n\nPOEM B: The river never took anything.\nIt only moved what was already leaving —\nthe village went first,\nthe river just signed the paper.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write the framing statement (2-3 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write two paired comparative points (each addressing both poems).",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write the synthesis — the final judgement on how the poems relate.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Commentary preparation",
                statement: "Frame + paired points + synthesis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Framing example: 'Both poems stage a river's role in a village's disappearance — but where the first makes the river an agent that takes and returns, the second makes it a bureaucrat that only signs. I will compare how each assigns the river responsibility.'",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 1 (agency): 'the water had opinions now' (A) gives the river personality and intent; 'just signed the paper' (B) reduces it to administration — agent versus clerk.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 2 (sequence of loss): A's 'gave it back changed' makes the river the transformer; B's 'the village went first' makes the river the witness — cause versus record.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Synthesis example: 'The poems converge on the river as the figure through which loss becomes legible, but diverge on its culpability — A makes it a personality that acts, B makes it a signature that merely records; together they ask whether nature destroys or merely documents.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Frame: river's responsibility for loss. Points: agent versus clerk; transformer versus witness. Synthesis: nature as actor or as record.",
            commonErrors: [
              "Points that analyse one poem each; synthesis that repeats rather than resolves.",
            ],
          },
        },
        {
          id: "langa-u3-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite this weak commentary opening as an effective framing statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing",
                statement: "Name texts, shared theme, divergence, focus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weak opening: 'Here are two poems about waiting. I will talk about them.' — no focus, no divergence, no method.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strong rewrite example: 'Both poems figure waiting as a condition of time — but where the first makes it a life sentence, the second makes it a learnable skill. I will compare how each poem's form produces its different waiting.'",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "The rewrite names the theme (waiting), the divergence (fate versus skill), and announces the lens (form).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Model: theme + divergence + lens — 'waiting as life sentence versus learnable skill; I will compare how each form produces its waiting.'",
          },
        },
        {
          id: "langa-u3-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Prepare the structure of a comparative commentary on the following paired texts — framing, three paired points, synthesis.",
          extract: {
            title: "Two Gardens",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The garden was a argument\nwith the wilderness —\nevery hedge a sentence\nit refused to finish.\n\nPOEM B: The garden was a apology\nto the wilderness —\nevery bloom a word\nit finally said.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write the framing statement (2-3 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write three paired comparative points (each addressing both poems).",
              marks: 5,
            },
            {
              label: "c",
              prompt:
                "Write the synthesis — the final judgement on how the poems relate.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Full commentary structure",
                statement: "Frame + paired points + synthesis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Framing example: 'Both poems figure the garden as a conversation with the wilderness — but where the first makes it an argument, the second makes it an apology. I will compare how each assigns the garden a different rhetorical stance toward nature.'",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 1 (stance): 'an argument' (A) is adversarial; 'an apology' (B) is conciliatory — the poems diverge on whether gardening is conquest or contrition.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 2 (the unit of exchange): 'every hedge a sentence / it refused to finish' (A) makes the garden a text of unfinished refusal; 'every bloom a word / it finally said' (B) makes it a text of completed utterance.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 3 (agency of nature): A's wilderness is an opponent that refuses; B's is an addressee that receives — the poems diverge on whether nature speaks back.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Synthesis example: 'The poems converge on the garden as language — both make it a text addressed to nature — but diverge on its grammar: A's is argument, incomplete and resistant; B's is apology, finished and conciliatory. Together they suggest that every cultivated space is a sentence we are always in the middle of writing.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The synthesis resolves the comparison into a single claim — the garden as unfinished sentence — rather than summarising both poems.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Frame: garden as conversation with wilderness. Points: adversarial versus conciliatory stance; unfinished sentences versus completed words; nature as opponent versus addressee. Synthesis: the garden as a sentence always being written.",
            commonErrors: [
              "Points that analyse one poem each; synthesis that repeats rather than resolves the comparison.",
            ],
          },
        },
      ],
    },
    {
      id: "langa-u3-delivery",
      title: "Delivery and balance",
      skill:
        "Deliver a commentary with balanced attention, clear signposting and confident pacing.",
      lesson: {
        sections: [
          {
            heading: "Balanced attention",
            body: "Each text should receive comparable analytical weight. A common failure is giving Text A three developed points and Text B one sentence. Check your timing: if the commentary is 10 minutes, each text should anchor roughly half the paired points.",
          },
          {
            heading: "Signposting aloud",
            body: "In oral delivery, signposts are essential: 'Turning to the second poem', 'By contrast', 'Similarly'. They let the listener track the comparison without seeing the texts. Speak the comparison, not just the analysis.",
          },
          {
            heading: "Pacing and confidence",
            body: "A commentary is a performance of thought. Pause before a key comparative point; vary pace between description and analysis; end on the synthesis with conviction. The listener should hear the argument being built, not read from notes.",
          },
        ],
        keyFormulas: [
          {
            name: "Balance check",
            statement:
              "Each text anchors ~half the paired points; no text is tokenised",
          },
          {
            name: "Delivery checklist",
            statement:
              "Signpost transitions + pause for emphasis + end on synthesis",
          },
        ],
        workedExample: {
          problem:
            "Your commentary runs long on Text A and you have 30 seconds left. What do you do?",
          solution:
            "Signal the shift explicitly ('Turning now to the second poem'), deliver one sharp paired point, and move to synthesis — a brief balanced ending beats an unbalanced detailed one.",
        },
      },
      questions: [
        {
          id: "langa-u3-dq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'balanced treatment' mean in a comparative commentary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoiding any judgement" },
              { id: "b", text: "Giving both texts equal page count" },
              {
                id: "c",
                text: "Giving each text comparable analytical attention",
              },
              { id: "d", text: "Reading both texts aloud" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced treatment",
                statement: "Comparable analytical weight for each text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Balance means analytical attention, not length — each text should anchor paired points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Comparable analytical attention",
          },
        },
        {
          id: "langa-u3-dq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why signposting transitions are especially important in an oral comparative commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Oral signposting",
                statement:
                  "Listeners cannot re-read; transitions guide them through the comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In writing, structure is visible; in speech, the listener must be told when the focus shifts from Text A to Text B.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Phrases like 'by contrast' and 'turning to the second poem' make the comparison audible — the listener hears the relationship, not just the sequence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without signposting, the commentary becomes a monologue the listener must organise themselves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Oral listeners need explicit transitions to track the comparison; signposting makes the relationship audible.",
            commonErrors: [
              "Assuming the listener can follow structure without being guided.",
            ],
          },
        },
        {
          id: "langa-u3-dq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Waits (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: I have been waiting\nsince the house was built.\nThe door knows my footsteps\nbetter than my name.\n\nPOEM B: Waiting is a skill\nlike any other —\nyou learn the weight\nof an hour that does not end.",
          },
          stem: "Write a 30-second spoken transition that shifts from Poem A to Poem B and sets up the comparison.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spoken transition",
                statement:
                  "Name the shift, signal the contrast, prepare the listener.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transition example: 'So far we have seen waiting as a life sentence — the house older than the wait itself. But the second poem offers a different model: waiting as craft, as skill.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "The transition names what was just said (sentence), signals the turn ('but', 'different model'), and previews the contrast (fate vs skill).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model: 'So far... life sentence. But the second poem offers a different model: waiting as craft.' Names shift, signals contrast, previews comparison.",
            commonErrors: [
              "Transition that merely announces 'now for poem B' without setting up the comparison.",
            ],
          },
        },
        {
          id: "langa-u3-dq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a delivery plan for a 10-minute comparative commentary on the following paired texts, including timing, transitions and the synthesis.",
          extract: {
            title: "Two Griefs (reprise)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Grief is a house with no doors.\nYou move through it with your hands out.\n\nPOEM B: Grief is weather.\nIt arrives unannounced\nand leaves when it leaves.",
          },
          parts: [
            {
              label: "a",
              prompt: "Give the timing breakdown (framing, points, synthesis).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the three key transitions you would use.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write the synthesis — the final judgement delivered aloud.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery planning",
                statement: "Timing + transitions + spoken synthesis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Timing example: 1 minute framing, 7 minutes paired points (roughly 3.5 per text), 2 minutes synthesis and close.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Transition 1 (frame to first point): 'Both poems figure grief through metaphor — but they could not disagree more about what kind of thing grief is.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Transition 2 (A to B): 'Where the first poem makes grief a place you cannot leave, the second makes it a force that comes and goes — enclosure versus exposure.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Transition 3 (to synthesis): 'So the question the poems leave us with is whether grief is something we inhabit or something that happens to us.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Synthesis example: 'Together these poems suggest that grief is both — a condition we inhabit and a force we endure; the house and the weather are the same loss seen from inside and outside.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The synthesis resolves the comparison into a single judgement — not a summary of both poems but a claim about their relationship.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Timing: 1/7/2. Transitions signal frame→point, A→B, points→synthesis. Synthesis: grief as both inhabited condition and endured force.",
            commonErrors: [
              "No timing plan; transitions that announce rather than compare; synthesis that summarises instead of judging.",
            ],
          },
        },
        {
          id: "langa-u3-dq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Signposting transitions matter most in oral commentary because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Listeners cannot re-read; transitions make the comparison audible in real time",
              },
              { id: "b", text: "Examiners require them" },
              { id: "c", text: "They fill silence" },
              { id: "d", text: "They sound clever" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Oral signposting",
                statement: "Listeners need the comparison performed aloud.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In speech there is no visual structure to revisit — the listener must be guided through each shift.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Listeners cannot re-read",
          },
        },
        {
          id: "langa-u3-dq6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your commentary is running long and you have thirty seconds left. What is the best response?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Signal the shift, deliver one sharp paired point, and move to synthesis",
              },
              { id: "b", text: "Apologise and stop" },
              { id: "c", text: "Drop Text B entirely" },
              { id: "d", text: "Speed up and finish Text A" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Recovery under pressure",
                statement:
                  "A brief balanced ending beats an unbalanced detailed one.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The recovery preserves balance — one paired point touches both texts — and reaches the synthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Sharp paired point + synthesis",
          },
        },
        {
          id: "langa-u3-dq7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Effective pacing in a comparative commentary means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking as loudly as possible" },
              { id: "b", text: "Delivering in a monotone" },
              { id: "c", text: "Reading as fast as possible" },
              {
                id: "d",
                text: "Varying pace between description and analysis; pausing before key comparative points",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pacing",
                statement:
                  "Pace enacts the thought — slow for analysis, measured for description.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monotone delivery flattens the comparison; variation lets the listener hear the argument being built.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Varied pace, pauses for emphasis",
          },
        },
        {
          id: "langa-u3-dq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Doors",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The door opened inward —\nI had to decide\nwhether to enter.\n\nPOEM B: The door opened outward —\nit decided\nwhether I would leave.",
          },
          stem: "Write a 30-second spoken transition that shifts from Poem A to Poem B and sets up the comparison.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spoken transition",
                statement:
                  "Name the shift, signal the contrast, prepare the listener.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transition example: 'In the first poem, the door opens inward — the choice belongs to the speaker: whether to enter. But the second poem reverses the agency: the door opens outward, and it is the door that decides.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "The transition recaps A's point, signals the reversal ('But'), and previews the contrast (speaker's choice versus door's choice).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model: recap A's agency, signal reversal, preview the agency contrast.",
            commonErrors: [
              "Announcing 'now for poem B' without setting up the comparison.",
            ],
          },
        },
        {
          id: "langa-u3-dq9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A synthesis delivered aloud should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce a new point" },
              { id: "b", text: "End weakly with 'thank you'" },
              { id: "c", text: "Repeat everything that was said" },
              {
                id: "d",
                text: "Land the final judgement with conviction — the listener should hear the argument resolve",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Spoken synthesis",
                statement: "The close performs the argument's resolution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A synthesis is a judgement delivered with conviction — the listener should hear resolution, not recap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Conviction, resolution, no recap",
          },
        },
        {
          id: "langa-u3-dq10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An 'anchor point' in a commentary is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The podium" },
              { id: "b", text: "A famous quotation" },
              { id: "c", text: "A timer" },
              {
                id: "d",
                text: "A specific detail or quotation that grounds a comparative claim in evidence",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anchor point",
                statement: "Evidence that grounds a claim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anchor points are the textual details that hold up the comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Evidence grounding a claim",
          },
        },
        {
          id: "langa-u3-dq11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Convert this written comparative point into spoken commentary language with signposting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Oral rewriting",
                statement:
                  "Spoken language needs explicit signposts and shorter sentences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Written version: 'Where Poem A figures grief as a house with no doors, Poem B figures it as weather that arrives and leaves — the former suggests entrapment, the latter indifference.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Spoken version example: 'So far we have seen grief as a kind of house — a place you cannot leave. But the second poem gives us a different grief entirely: not a place but a weather — something that arrives unannounced and leaves when it leaves.'",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "The spoken version unpacks the compressed comparison into hearable units — 'so far', 'but', 'not X but Y' — and lets the listener track the turn.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Model: 'So far... a kind of house. But the second poem gives us a different grief entirely: not a place but a weather.'",
            commonErrors: [
              "Reading the written version verbatim — too compressed for the ear.",
            ],
          },
        },
        {
          id: "langa-u3-dq12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Two Paths",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: I took the path that was marked —\nthe one with the sign, the brochure,\nthe other walkers' agreement.\n\nPOEM B: I took the path that was not there —\nthe one the grass was still deciding\nwhether to keep.",
          },
          stem: "Give a timing breakdown for a 6-minute comparative commentary on these poems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery planning",
                statement:
                  "Timing distributes attention across frame, points, synthesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Timing example: 45 seconds framing, 4 minutes paired points (roughly 2 minutes per text), 75 seconds synthesis and close.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The breakdown ensures each poem anchors roughly half the development — balance is a scheduling problem before it is a rhetorical one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Synthesis gets real time because it is the judgement the whole commentary builds toward — it is not a leftover.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A workable plan also leaves a 15-second buffer for transitions that run long or a point that needs emphasis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Model: 0:45 frame / 4:00 paired points (~2:00 each) / 1:15 synthesis + buffer.",
            commonErrors: [
              "No timing plan; giving Text A most of the development.",
            ],
          },
        },
        {
          id: "langa-u3-dq13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Letters",
            author: "Written for Akademik Space",
            source: "Original paired letters",
            text: "LETTER A: I am well. The work is hard but honest. Do not worry — I have thought of you every day.\n\nLETTER B: I am not well. The work is hard and I am not sure it is honest. I have thought of you every hour, and I am tired of being brave about it.",
          },
          stem: "Write the spoken transition from Letter A to Letter B and the synthesis you would deliver aloud.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transition + synthesis",
                statement:
                  "Shift must be signalled; close must judge the relationship.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transition example: 'The first letter keeps its pain behind a wall of reassurance — I am well, do not worry. The second letter tears the wall down: I am not well, tired of being brave.'",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "The transition names the shared surface (hard work, thought of you) and the divergent interior (brave versus tired) — the listener hears the comparison being made.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Synthesis example: 'Together the letters suggest that letters are where we practise being someone we are not — the first performs wellness, the second confesses its cost; between them they show what correspondence is actually for.'",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Transition: names shared surface, signals torn wall. Synthesis: letters as practice in performed selves — wellness versus confession.",
            commonErrors: [
              "Transition that only announces the second letter; synthesis that summarises rather than judges.",
            ],
          },
        },
        {
          id: "langa-u3-dq14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rehearsal recording reveals three problems in a commentary draft. Diagnose and fix each.",
          response: {
            type: "open",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Problem 1: the speaker gives Text A four developed points and Text B one sentence. Diagnose and prescribe the fix.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Problem 2: the speaker says 'anyway, moving on' when switching texts. Rewrite it as an effective transition.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Problem 3: the synthesis ends with 'and that is all I have to say'. Rewrite it as a proper closing judgement.",
              marks: 3,
            },
          ],
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Diagnostic delivery",
                statement:
                  "Identify imbalance, weak transition, weak close — and prescribe fixes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Diagnosis: imbalance — Text B is tokenised, so the comparison is not actually comparative; the listener has received one commentary plus a footnote.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Prescription: redistribute the four points into two paired points — each pairing A and B on the same theme — so both texts anchor equal analytical weight.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check: after the fix, every point should touch both texts before advancing — the pairing rule restored.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Rewrite example: 'So far the first poem has shown us grief as a place you cannot leave. The second poem offers a different model entirely — grief not as architecture but as weather.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Diagnosis: the close announces exhaustion rather than delivering judgement — the argument dissolves instead of resolving.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Rewrite example: 'So the two poems leave us with a choice of metaphors — grief as the house we cannot leave, or the weather that will not stay. Perhaps it is both: we inhabit the loss and endure it at once.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Tokenised Text B → redistribute into paired points. (b) 'Moving on' → signposted contrast. (c) Exhaustion close → judgement that resolves the comparison.",
            commonErrors: [
              "Diagnosing problems without prescribing concrete fixes.",
            ],
          },
        },
        {
          id: "langa-u3-dq15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Which set of signposts is most effective for an oral comparative commentary?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: '"The first thing they share is...", "now the second poem answers with...", "so what do these add up to?"',
              },
              { id: "b", text: '"As I said", "repeating", "finally"' },
              { id: "c", text: '"Moving on", "next", "the end"' },
              { id: "d", text: '"Quote", "analysis", "conclusion"' },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Signposting",
                statement:
                  "Each transition names the structural move it performs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set (b) announces a point, signals the A-to-B contrast, and poses the synthesis question — each phrase does different work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other sets are generic or structural labels that do not guide the listener through the comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Effective signposts let the listener always know where they are in the argument.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "**(a)** Announces, contrasts, poses — each does different work",
          },
        },
        {
          id: "langa-u3-dq16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a complete delivery plan for an 8-minute comparative commentary on the following paired texts.",
          extract: {
            title: "Two Storms",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The storm came like an editor —\nit cut everything\nthat did not serve the sentence.\n\nPOEM B: The storm came like a gardener —\nit pruned the weak branches\nso the strong ones could hold the fruit.",
          },
          parts: [
            {
              label: "a",
              prompt: "Give the timing breakdown (framing, points, synthesis).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the three key transitions you would use.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write the synthesis — the final judgement delivered aloud.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery planning",
                statement: "Timing + transitions + spoken synthesis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Timing example: 1 minute framing, 5.5 minutes paired points (~2.75 per text), 1.5 minutes synthesis.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Transition 1 (frame to points): 'Both poems give the storm a profession — but they could not disagree more about what kind of work it does.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Transition 2 (A to B): 'Where the first storm is an editor — cutting what does not serve — the second is a gardener — pruning so the strong can hold.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Transition 3 (to synthesis): 'So the question these poems leave is whether destruction is editing or cultivation — whether the storm improves what it touches or merely serves its own sentence.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Synthesis example: 'The poems converge on the storm as purposeful — both give it a job — but diverge on its ethics: the editor serves the sentence, the gardener serves the fruit. Together they suggest that every violence has a rationale, and the rationale is the real subject.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The synthesis resolves the comparison into a judgement — violence always has a rationale, and the rationale is what matters — rather than summarising both poems.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Timing: 1 / 5.5 / 1.5. Transitions: frame→points, editor→gardener, points→question. Synthesis: destruction as editing or cultivation — violence always has a rationale.",
            commonErrors: [
              "No timing plan; transitions that announce rather than compare; synthesis that summarises.",
            ],
          },
        },
      ],
    },
  ],
};
