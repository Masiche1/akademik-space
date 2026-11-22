import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "langa-u3-lesson-3-1",
  code: "3-1",
  title: "Thematic Comparison Across Texts",
  goal: "I CAN compare texts through shared themes and explain how different texts treat the same theme differently.",
  standards: ["Comparative", "Analysis", "Themes"],
  vocabulary: [
    {
      term: "Theme",
      definition:
        "A central idea or concern explored across a text — love, power, memory, identity, loss.",
    },
    {
      term: "Motif",
      definition:
        "A recurring element (image, object, phrase) that develops a theme.",
    },
    {
      term: "Treatment",
      definition:
        "How a particular text approaches a theme — its angle, emphasis and judgement.",
    },
    {
      term: "Convergence",
      definition:
        "Where two texts reach similar conclusions about a theme through different means.",
    },
    {
      term: "Divergence",
      definition:
        "Where two texts reach different or contradictory conclusions about the same theme.",
    },
    {
      term: "Comparative thesis",
      definition:
        "A claim about how two texts relate — e.g. 'both explore grief but one figures it as enclosure, the other as weather.'",
    },
  ],
  concepts: [
    {
      id: "langa-u3-theme-finding",
      title: "Finding and comparing themes",
      skill:
        "Identify themes in individual texts and construct comparative claims about their treatments.",
      lesson: {
        sections: [
          {
            heading: "Themes across texts",
            body: "Texts from different periods, genres and cultures often share **themes** — love, power, mortality, belonging. The comparative task is not to say 'both are about loss' but to analyse **how each treats loss differently**: one figures it as enclosure, another as weather; one offers consolation, another refuses it.",
          },
          {
            heading: "Building the comparison",
            body: "Start with a **comparative thesis**: a claim about the relationship between treatments, not just a shared topic. Then organise evidence so that each point **pairs** the texts — 'where Text A does X, Text B does Y' — rather than analysing each in isolation.",
          },
          {
            heading: "Convergence and divergence",
            body: "**Convergence** — texts reach similar conclusions by different routes — is powerful evidence of a theme's universality. **Divergence** — texts disagree about the same theme — is equally valuable: it reveals how context, genre and purpose shape meaning. Both are analytical opportunities.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparative thesis",
            statement: "Shared theme + different treatment = the argument",
          },
          {
            name: "Paired evidence",
            statement: "Point about A immediately paired with point about B",
          },
        ],
        workedExample: {
          problem:
            "Compare how two poems treat night: one as 'a held breath', another as 'a patient creditor'.",
          solution:
            "Both figure night as something that acts upon the speaker, but differently: held breath suggests suspension and tension; patient creditor suggests debt and obligation. The comparison reveals night as either threat or accounting — different moral worlds.",
        },
      },
      questions: [
        {
          id: "langa-u3-hq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'comparative thesis' should primarily claim:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "That the texts were written in the same period",
              },
              { id: "b", text: "That one text is better than the other" },
              {
                id: "c",
                text: "How two texts treat a shared theme differently",
              },
              { id: "d", text: "That two texts share a topic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative thesis",
                statement:
                  "The claim is about the relationship between treatments, not the shared topic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A comparative thesis argues how treatments differ or converge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** How treatments differ",
          },
        },
        {
          id: "langa-u3-hq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Griefs",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Grief is a house with no doors.\nYou move through it with your hands out.\n\nPOEM B: Grief is weather.\nIt arrives unannounced\nand leaves when it leaves.",
          },
          stem: "Compare how these two poems treat grief.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative analysis",
                statement:
                  "Same theme (grief), different figurative treatment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both figure grief through extended metaphor — but one makes it architectural (house, doors, hands), the other meteorological (weather, arrival, departure).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem A's grief is inhabited and inescapable — 'no doors', 'hands out' suggests entrapment and disorientation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem B's grief is transient and impersonal — 'arrives unannounced', 'leaves when it leaves' suggests grief beyond the sufferer's control, almost indifferent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both use metaphor but diverge: grief as inescapable enclosure versus grief as indifferent weather.",
            commonErrors: [
              "Saying 'both are about grief' without analysing the different figurative treatments.",
            ],
          },
        },
        {
          id: "langa-u3-hq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Mornings",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.\n\nPOEM B: Morning came like a letter\nI had been expecting\nfor years —\nand opening it, I found\nonly my own handwriting.",
          },
          stem: "Compare the two poems' treatments of morning and beginnings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative imagery",
                statement:
                  "Both personify morning but with different moral implications.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both poems personify morning as an agent acting upon the speaker — but the agency is coercive in A ('iron gate', 'debt') and communicative in B ('like a letter').",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem A's morning is an imposition — light as debt, existence as obligation; the speaker is passive recipient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem B's morning is a message — but the message is 'my own handwriting', suggesting the expected external meaning resolves into self-recognition or self-deception.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divergence: A sees beginnings as imposed duty; B sees them as anticipated meaning that turns inward — morning as obligation versus morning as mirror.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both personify morning as agent, but A makes it coercive (debt, gate) while B makes it communicative (letter, handwriting) — obligation versus self-recognition.",
            commonErrors: [
              "Listing similarities without analysing the divergent implications.",
            ],
          },
        },
        {
          id: "langa-u3-hq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a comparative paragraph (point, paired evidence, analysis) on how these two extracts treat the theme of memory.",
          extract: {
            title: "Two Memories",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: The photograph had faded to the colour of weak tea. She held it anyway, turning it toward the window — as if light could restore what time had taken.\n\nTEXT B: He never kept photographs. 'Memory is not a thing you store,' he said. 'It is a thing you practise.'",
          },
          parts: [
            {
              label: "a",
              prompt: "Write a comparative thesis sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write one paired-evidence sentence comparing the two texts.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write the analysis explaining what the divergence reveals.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative writing",
                statement:
                  "Thesis about relationship + paired evidence + analysis of divergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Where Text A figures memory as a fragile object to be preserved, Text B figures it as a skill to be practised — the extracts diverge on whether memory is possession or performance.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Paired evidence: 'Text A's photograph \"faded to the colour of weak tea\" while Text B's speaker insists \"memory is not a thing you store\" — one preserves, the other rejects preservation.'",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Analysis: Text A's light-seeking ('turning it toward the window') suggests memory as recovery project; Text B's 'practise' suggests memory as ongoing discipline — the divergence reveals two philosophies: memory as archive versus memory as act.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Significance: the comparison shows memory is not a fixed human faculty but a culturally shaped practice — the texts' different media (photograph, speech) enact their different claims.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: memory as possession (A) versus memory as practice (B). Paired evidence: faded photograph vs 'not a thing you store'. Analysis: archive versus act — memory is culturally shaped.",
            commonErrors: [
              "Analysing each text separately without pairing evidence.",
            ],
          },
        },
        {
          id: "langa-u3-hq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Convergence' between two texts means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both texts use identical imagery" },
              {
                id: "b",
                text: "Both texts reach similar conclusions about a theme through different means",
              },
              { id: "c", text: "Both texts are about exactly the same topic" },
              { id: "d", text: "Both texts were written in the same century" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergence",
                statement:
                  "Texts reach similar conclusions about a theme by different routes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convergence is about the relationship of conclusions, not shared topics or dates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Similar conclusions through different means",
          },
        },
        {
          id: "langa-u3-hq6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of the following is the strongest comparative thesis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Where Poem A figures silence as protection, Poem B figures it as abandonment — the poems diverge on whether silence shelters or isolates.",
              },
              { id: "b", text: "Both poems are about silence." },
              { id: "c", text: "Poem A is better because it uses rhyme." },
              { id: "d", text: "Both poems repeat the word silence." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative thesis",
                statement:
                  "The claim must state how treatments relate, not merely that a topic is shared.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choice (b) names the shared theme (silence) and specifies the divergence in treatment (protection versus abandonment).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choices (a), (c) and (d) state a topic, a value judgement or an observation without analysing treatment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Claims the divergence in treatment",
          },
        },
        {
          id: "langa-u3-hq7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Paired evidence' in comparative writing means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A point about Text A immediately paired with a point about Text B",
              },
              { id: "b", text: "Alternating between texts every sentence" },
              { id: "c", text: "Quoting the same line from both texts" },
              {
                id: "d",
                text: "Listing all of Text A's evidence, then all of Text B's",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paired evidence",
                statement:
                  "Each analytical point addresses both texts before the next point begins.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pairing makes the comparison visible at each stage rather than deferred to the end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Point about A paired with point about B",
          },
        },
        {
          id: "langa-u3-hq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Homes",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Keep the door barred and the curtains drawn —\nhome is the wall that holds the dark out.\n\nPOEM B: Leave the door open and the kettle on —\nhome is the light you let in for strangers.",
          },
          stem: "How do these poems diverge in their treatment of home?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both poems reject the idea of home entirely" },
              {
                id: "b",
                text: "Both poems treat home as a private refuge to be defended",
              },
              {
                id: "c",
                text: "Poem A treats home as a fortress against the outside; Poem B treats it as hospitality toward the outside — the poems diverge on whether home excludes or welcomes.",
              },
              {
                id: "d",
                text: "Poem A is about safety; Poem B is about travel",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Divergence",
                statement:
                  "Same theme (home), opposite orientations toward the outside world.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poem A's 'barred' door and 'dark' kept out make home a boundary of defence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem B's 'open' door and 'light' for 'strangers' make home an act of welcome — the divergence is exclusion versus hospitality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Fortress versus hospitality",
          },
        },
        {
          id: "langa-u3-hq9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Machines",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The machine broke\nand we called it progress anyway.\n\nPOEM B: The machine works perfectly —\nand we broke anyway.",
          },
          stem: "Which statement best captures the comparative relationship between these poems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both poems condemn technology as evil" },
              { id: "b", text: "Both poems celebrate machines as liberation" },
              {
                id: "c",
                text: "Poem A is optimistic about machines; Poem B is pessimistic",
              },
              {
                id: "d",
                text: "Poem A figures progress as self-deception; Poem B figures it as mutual failure — the poems diverge on where the fault lies.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative relationship",
                statement:
                  "The poems share a theme (progress) but assign fault differently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In Poem A the machine fails and humans rename the failure 'progress' — self-deception is the fault.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In Poem B the machine works and humans still fail — fault is shared or human, not mechanical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Divergence on where the fault lies",
          },
        },
        {
          id: "langa-u3-hq10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The difference between a theme and a motif is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A theme is repeated; a motif is central" },
              {
                id: "b",
                text: "A theme is a central idea; a motif is a recurring element that develops that idea",
              },
              { id: "c", text: "A motif only appears in novels" },
              { id: "d", text: "They are identical terms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme and motif",
                statement:
                  "Theme is the central idea; motif is the recurring vehicle that develops it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A motif (a repeated image or object) is a means; a theme is the end it serves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Central idea versus recurring element",
          },
        },
        {
          id: "langa-u3-hq11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Departures",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: We left at dawn\nwhile the house was still asleep —\nthe kettle cooling,\nthe cat not knowing.\n\nPOEM B: We left with the house still awake —\nevery window lit, every door\nsaying stay.\nWe said goodbye anyway.",
          },
          stem: "Compare how these poems treat the act of leaving.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative treatment",
                statement:
                  "Same event (departure), different relational texture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poem A's departure is unilateral and unnoticed — 'the house was still asleep', 'the cat not knowing' — leaving as quiet abandonment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem B's departure is contested — 'every window lit', 'every door saying stay' — leaving as an act against a living pull.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divergence: A makes leaving easy and invisible; B makes it an act of courage against resistance — departure as escape versus departure as farewell.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A: unnoticed abandonment at dawn. B: resisted farewell against a wakeful house — leaving as escape versus as courage.",
            commonErrors: [
              "Describing both departures without analysing the divergence in resistance.",
            ],
          },
        },
        {
          id: "langa-u3-hq12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Two Inheritances",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: Grandmother left me her ring. I wear it on the wrong finger — it is too small, but I wear it anyway, because it was hers.\n\nTEXT B: Grandmother left me her debts. I paid them off in five years, and when the last one cleared, I felt nothing — it was never mine.",
          },
          stem: "Compare how the two texts treat the theme of inheritance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative theme",
                statement:
                  "Both inherit obligations, but one binds emotionally and the other is discharged.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both texts frame inheritance as something that does not quite fit — a ring 'too small', debts 'never mine'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Text A keeps the misfit — 'I wear it anyway, because it was hers' — inheritance as connection that persists despite discomfort.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Text B eliminates the misfit — 'I paid them off', 'I felt nothing' — inheritance as burden discharged without attachment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divergence: A's inheritance is emotional and enduring; B's is financial and severable — the texts diverge on whether inheritance is bond or bill.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both inherit obligations that do not fit; A keeps the bond despite the misfit, B pays off the debt and feels nothing — inheritance as bond versus bill.",
            commonErrors: [
              "Treating both texts as simply 'about inheritance' without analysing the different moral outcomes.",
            ],
          },
        },
        {
          id: "langa-u3-hq13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Summers",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: Summer came like a debt collector —\nevery day a payment\non a bill I never signed.\n\nPOEM B: Summer came like forgiveness —\nlong, unearned,\nand I spent it all on small mercies.",
          },
          stem: "Compare how the poems treat the season of youth and its passing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative personification",
                statement:
                  "Both personify summer, but as creditor and as gift.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both poems personify summer as something that arrives upon the speaker — 'came like' structures the comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem A's 'debt collector' makes summer an obligation — 'every day a payment', 'a bill I never signed' — time as imposition the speaker never chose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem B's 'forgiveness' makes summer a gift — 'long, unearned' — time as grace the speaker spends 'on small mercies'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convergence: both treat youth as finite and externally given. Divergence: A makes it owed, B makes it granted — the poems diverge on whether time is debt or gift.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The different objects ('bill' versus 'mercies') reveal different economies of time — extraction versus expenditure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: the poems share the season but diverge on its moral character — youth as liability or as resource.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both personify summer as an arrival; A makes it a debt collector (time as imposition), B makes it forgiveness (time as gift spent on mercy) — youth as liability versus resource.",
            commonErrors: [
              "Listing the metaphors without analysing the divergent moral economies.",
            ],
          },
        },
        {
          id: "langa-u3-hq14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a comparative paragraph (point, paired evidence, analysis) on how these two poems treat the theme of silence.",
          extract: {
            title: "Two Silences",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: We keep silence\nthe way the sea keeps wrecks —\nquietly, and at great depth.\n\nPOEM B: Silence is not empty.\nIt is full of answers\nwe are too loud to hear.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write a comparative thesis sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write one paired-evidence sentence comparing the two poems.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write the analysis explaining what the divergence reveals.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative writing",
                statement:
                  "Thesis about relationship + paired evidence + analysis of divergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Where Poem A figures silence as hidden accumulation — wrecks kept at depth — Poem B figures it as withheld answer; the poems diverge on whether silence conceals or contains.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Paired evidence: 'the sea keeps wrecks' (A) versus 'full of answers / we are too loud to hear' (B) — one makes silence a repository of the lost, the other a repository of the unsaid.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Analysis: A's silence is preservative but buried — 'at great depth' suggests what is kept cannot be recovered; B's silence is communicative but blocked — 'too loud to hear' suggests the answers exist but our noise prevents reception.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Significance: the comparison suggests silence is never empty — it either stores the past (A) or stores the future (B); the poems diverge on what silence keeps.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: silence as hidden archive (A) versus withheld communication (B). Evidence: sea keeps wrecks vs full of answers. Analysis: silence stores the lost versus stores the unheard.",
            commonErrors: [
              "Treating both poems as simply 'about silence' without analysing what silence contains.",
            ],
          },
        },
        {
          id: "langa-u3-hq15",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Borders",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: At the border they asked my name twice. I gave it once. The second time, I gave them a story.\n\nTEXT B: At the border they stamped my passport without looking up. I watched them look up at the next person, who was not me.",
          },
          stem: "Compare how the two texts treat the theme of identity at boundaries.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Text A makes identity a performance under scrutiny ('I gave them a story'); Text B makes it an erasure through routine ('who was not me') — asserted versus overlooked.",
              },
              { id: "b", text: "Both texts reject the idea of borders" },
              {
                id: "c",
                text: "Text A is about names; Text B is about passports",
              },
              {
                id: "d",
                text: "Both texts make the border a site of negotiation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative context",
                statement:
                  "Same setting (border), different relations to authority and self.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text A's speaker actively manipulates the examination — identity as performance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Text B's speaker is rendered invisible by efficiency — identity as erasure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Identity asserted versus overlooked",
          },
        },
        {
          id: "langa-u3-hq16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write a comparative paragraph (thesis, two paired-evidence points, analysis) on how these two poems treat the theme of water.",
          extract: {
            title: "Two Waters",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river remembers every stone\nit has ever moved —\neach one a small surrender\nit pretends was its own idea.\n\nPOEM B: The rain forgets the roof it fell on\nand the hands that aimed it —\nit only remembers how to fall,\nnot why.",
          },
          parts: [
            { label: "a", prompt: "Write a comparative thesis.", marks: 2 },
            {
              label: "b",
              prompt: "Write two paired-evidence points comparing the poems.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write the analysis explaining what the divergence reveals.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Extended comparative writing",
                statement: "Thesis + paired evidence + analysis of divergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Where Poem A figures water as a remembering agent — the river keeps every stone — Poem B figures it as an amnesiac force — the rain forgets; the poems diverge on whether water holds or releases the past.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point 1 (memory): 'remembers every stone' (A) versus 'forgets the roof it fell on' (B) — one water carries history, the other sheds it.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 2 (agency): 'pretends was its own idea' (A) gives the river deceptive intention; 'not why' (B) denies rain any purpose — one water acts, the other merely falls.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Analysis: A's river is a self-deceiving agent that narrates its own erosion as choice; B's rain is pure process without narrative — water as storyteller versus water as mechanism.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Significance: the divergence suggests memory is not a property of water but of the observer — A sees agency and guilt, B sees indifference; the poems reveal how we project meaning onto natural forces.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: water as remembering agent (A) versus amnesiac force (B). Evidence: remembers every stone vs forgets the roof. Analysis: storyteller versus mechanism — we project meaning onto nature.",
            commonErrors: [
              "Comparing the two waters without analysing the divergent attributions of memory and agency.",
            ],
          },
        },
      ],
    },
    {
      id: "langa-u3-treatments",
      title: "Comparing treatments",
      skill:
        "Analyse how genre, form and context shape a text's treatment of a shared theme.",
      lesson: {
        sections: [
          {
            heading: "Why treatments differ",
            body: "Two texts on the same theme differ because they are made of different **stuff**: a sonnet compresses; a novel develops; a speech persuades; a diary confesses. **Genre conventions**, **form**, **historical context** and **authorial purpose** all shape treatment. The comparative analyst asks not just 'what is the theme?' but 'what does this text's form allow it to do with that theme?'",
          },
          {
            heading: "Form shapes treatment",
            body: "A theme of grief in a **sonnet** must compress into fourteen lines — intensity through constraint. In a **novel**, grief can unfold across chapters — development through time. In a **speech**, grief becomes rhetoric — persuasion through address. The same theme, different formal possibilities.",
          },
          {
            heading: "Context shapes treatment",
            body: "A text written during a war treats courage differently from one written in peacetime; a colonial-era text treats 'civilisation' differently from a postcolonial response. Context is not background — it is an active ingredient in treatment.",
          },
        ],
        keyFormulas: [
          {
            name: "Treatment factors",
            statement:
              "Genre + form + context + purpose = why treatments differ",
          },
          {
            name: "Formal affordance",
            statement:
              "What can this form do with this theme that another cannot?",
          },
        ],
        workedExample: {
          problem:
            "Why might a theme of 'home' be treated differently in a poem and a novel?",
          solution:
            "A poem compresses 'home' into image and rhythm — often symbolic or nostalgic. A novel can develop 'home' through character, setting and plot — showing how it is built, lost or contested. The form determines whether home is a feeling or a process.",
        },
      },
      questions: [
        {
          id: "langa-u3-tq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which factor most directly shapes how a text treats a theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of pages" },
              { id: "b", text: "The text's genre and form" },
              { id: "c", text: "The author's favourite colour" },
              { id: "d", text: "The publisher's logo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Form and treatment",
                statement:
                  "Genre and form determine what a text can do with a theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genre and form constrain and enable treatment — a sonnet compresses, a novel develops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Genre and form",
          },
        },
        {
          id: "langa-u3-tq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Home",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "SONNET: Home is not a place\nbut a pause in the road\nwhere the heart remembers\nwhat the feet have known.\n\nNOVEL EXTRACT: She had lived in eleven houses before she was twenty. Home was not a place she had left; it was a practice she had never stopped.",
          },
          stem: "Explain how genre shapes each text's treatment of 'home'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre and treatment",
                statement:
                  "Sonnet compresses home into image; novel develops it through narrative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sonnet compresses 'home' into a single metaphor — 'a pause in the road' — treating it as a moment of recognition, not a place.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The novel excerpt develops 'home' through narrative accumulation — 'eleven houses', 'a practice' — treating it as a pattern of behaviour, not a location.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convergence: both reject 'home' as a fixed place; divergence: the sonnet offers a lyrical image, the novel offers a developmental argument — form determines whether home is felt or analysed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sonnet: home as lyrical pause. Novel: home as practised pattern. Both reject place, but form shapes whether home is felt or argued.",
            commonErrors: [
              "Saying 'both are about home' without analysing how form shapes treatment.",
            ],
          },
        },
        {
          id: "langa-u3-tq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Courage",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "SONNET: Courage is the quiet child\nwho stays when others run —\nwho does not know the word for fear\nbut knows the shape of it.\n\nSPEECH: We are told to be brave. Brave! As if fear were a choice, as if the pounding in your chest were a failure of character rather than proof of your humanity.",
          },
          stem: "Compare how the sonnet and the speech treat courage differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre and treatment",
                statement:
                  "Sonnet interiorises courage; speech politicises it through direct address.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sonnet treats courage as an inner quality — 'the quiet child who stays' — a private, almost innocent virtue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The speech treats courage as a social demand — 'We are told to be brave' — courage as an imposed expectation that pathologises fear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The sonnet's 'does not know the word for fear' idealises innocence; the speech's 'proof of your humanity' dignifies fear — opposite valuations of the same emotion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divergence: the sonnet offers a lyrical ideal; the speech offers a polemical correction — genre determines whether courage is celebrated or interrogated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sonnet: courage as innocent inner virtue. Speech: courage as imposed social demand that stigmatises fear. Genre shapes treatment.",
            commonErrors: [
              "Ignoring how genre (lyric vs oratory) shapes the treatment.",
            ],
          },
        },
        {
          id: "langa-u3-tq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a comparative paragraph analysing how these two texts treat the theme of 'waiting'.",
          extract: {
            title: "Two Waits",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: I have been waiting\nsince the house was built.\nThe door knows my footsteps\nbetter than my name.\n\nPOEM B: Waiting is a skill\nlike any other —\nyou learn the weight\nof an hour that does not end.",
          },
          parts: [
            { label: "a", prompt: "Write a comparative thesis.", marks: 2 },
            {
              label: "b",
              prompt: "Write paired evidence from both poems.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Analyse what the different treatments reveal.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative analysis",
                statement:
                  "Thesis + paired evidence + analysis of treatment divergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Where Poem A figures waiting as a life sentence — since the house was built — Poem B figures it as a learnable craft, a skill like any other; the poems diverge on whether waiting is fate or practice.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Paired evidence: 'the door knows my footsteps / better than my name' (A) versus 'you learn the weight / of an hour that does not end' (B) — one makes waiting habitual and dehumanising, the other disciplined and measured.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Analysis: Poem A's waiting is existential — the house's age equals the wait's length; Poem B's waiting is practical — 'an hour' is a unit of endurance. The divergence reveals waiting as either cosmic condition or daily discipline.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Thesis: waiting as fate (A) versus waiting as skill (B). Evidence: door-knows-footsteps vs learnable weight of hours. Analysis: cosmic condition versus daily practice.",
            commonErrors: [
              "Treating both poems as simply 'about waiting' without analysing treatment.",
            ],
          },
        },
        {
          id: "langa-u3-tq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A theme of love compressed into fourteen lines is shaped primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of people who will read it" },
              { id: "b", text: "The printer's choice of ink" },
              { id: "c", text: "The poet's favourite colour" },
              {
                id: "d",
                text: "The sonnet's formal constraints — compression forces intensity",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Form shapes treatment",
                statement:
                  "Genre constraints determine what a text can do with a theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sonnet's fourteen-line limit forces selection and compression — intensity through constraint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Formal constraints",
          },
        },
        {
          id: "langa-u3-tq6",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Fears",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "SONNET: Fear is the small cold hand\nthat turns the lock from inside.\n\nDIARY ENTRY: Today I was afraid of the dog.\nI wrote it down so it would be smaller.",
          },
          stem: "Explain how form shapes each text's treatment of fear.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Both texts treat fear as irrational and shameful",
              },
              {
                id: "b",
                text: "The sonnet universalises fear as an inner mechanism; the diary particularises it as a manageable daily event — form determines whether fear is symbolic or practical.",
              },
              {
                id: "c",
                text: "The sonnet is more frightening because it is longer",
              },
              {
                id: "d",
                text: "The diary entry is more poetic than the sonnet",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre and treatment",
                statement:
                  "Lyric compression produces symbol; diary accumulation produces practice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sonnet's 'small cold hand' figures fear as an interior mechanism — universal and symbolic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The diary's 'afraid of the dog' and 'wrote it down' figure fear as a specific, manageable event — practical and particular.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Symbolic versus practical treatment",
          },
        },
        {
          id: "langa-u3-tq7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Historical context shapes a text's treatment of a theme because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Context only matters for history books" },
              {
                id: "b",
                text: "The values and pressures of a text's time determine what its themes mean and how they can be treated",
              },
              { id: "c", text: "Modern texts have no context" },
              { id: "d", text: "Older texts are always boring" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Context as ingredient",
                statement:
                  "A text's moment supplies the pressures that shape treatment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Context is active, not background — wartime courage and peacetime courage are different subjects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Context determines treatment",
          },
        },
        {
          id: "langa-u3-tq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Freedoms",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "SPEECH: Freedom is not a gift. It is a debt we owe to those who came before.\n\nLETTER: Dearest — the garden gate is open again.\nThe roses are free. Come when you can.",
          },
          stem: "Compare how genre shapes each text's treatment of freedom.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither text actually mentions freedom" },
              {
                id: "b",
                text: "The speech politicises freedom as obligation to the dead; the letter domesticates it as invitation to the living — genre turns a public ideal into a private welcome.",
              },
              {
                id: "c",
                text: "Both texts treat freedom as something easily won",
              },
              { id: "d", text: "The speech is formal; the letter is informal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre and treatment",
                statement:
                  "Oratory makes freedom collective duty; correspondence makes it personal welcome.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The speech's 'debt we owe' makes freedom retrospective obligation — public and ancestral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The letter's 'open gate' and 'come when you can' make freedom present hospitality — private and immediate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Public obligation versus private welcome",
          },
        },
        {
          id: "langa-u3-tq9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Homes (Reprise)",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "EPIC: And so the hero built his hall\nwhere forty shields hung bright,\nand every spear was named.\n\nLYRIC: home is the kettle's small song\nand the door that knows your step\nbefore your hand reaches it.",
          },
          stem: "Which statement best captures how genre shapes the treatment of 'home' in these texts?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The epic treats home as communal monument built through action; the lyric treats it as intimate sensory detail — scale and mode differ.",
              },
              { id: "b", text: "The lyric is better because it is shorter" },
              { id: "c", text: "Both texts simply describe buildings" },
              { id: "d", text: "The epic is old; the lyric is new" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre affordance",
                statement:
                  "Epic scale produces monument; lyric compression produces sensation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The epic's 'hall', 'forty shields', 'every spear was named' make home a public structure of honour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The lyric's 'kettle's small song' and 'door that knows your step' make home a private sensory event.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Monument versus sensation",
          },
        },
        {
          id: "langa-u3-tq10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Authorial purpose shapes a text's treatment of a theme because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Purpose only matters in speeches" },
              { id: "b", text: "Purpose is irrelevant to analysis" },
              { id: "c", text: "All texts have the same purpose" },
              {
                id: "d",
                text: "A text designed to persuade treats its theme rhetorically; one designed to confess treats it intimately — purpose determines angle",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Purpose as shaping force",
                statement:
                  "What a text is for determines how it handles its subject.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Persuasion, confession, celebration and lament each produce different treatments of the same theme.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Purpose determines angle",
          },
        },
        {
          id: "langa-u3-tq11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Lands",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: This land is a ledger —\nevery field an entry,\nevery harvest a payment.\n\nPOEM B: This land is a lullaby —\nevery field a verse,\nevery harvest a promise kept.",
          },
          stem: "Compare how the poems treat the land they describe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative metaphor",
                statement:
                  "Same subject (land), different governing metaphors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poem A's 'ledger', 'entry', 'payment' figure land as accountancy — agriculture as economics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poem B's 'lullaby', 'verse', 'promise kept' figure land as song and covenant — agriculture as nurture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divergence: the same fields are either transactions or verses — the poems diverge on whether land is resource or relationship.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A: land as ledger (economics). B: land as lullaby (nurture). Same fields, different moral orders — resource versus relationship.",
            commonErrors: [
              "Saying 'both describe the land' without analysing the divergent metaphors.",
            ],
          },
        },
        {
          id: "langa-u3-tq12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Two Apprentices",
            author: "Written for Akademik Space",
            source: "Original paired prose extracts",
            text: "TEXT A: The master showed him the joint once, then watched. 'Your hands must learn what your eyes cannot.'\n\nTEXT B: The course promised mastery in six weeks. He watched nine videos and bought the certificate.",
          },
          stem: "Compare how the texts treat the theme of learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative purpose",
                statement:
                  "A reverent treatment of apprenticeship versus a satirical treatment of credentialism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text A figures learning as embodied and slow — 'showed him once, then watched', 'hands must learn' — knowledge in the body.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Text B figures learning as commodified and fast — 'mastery in six weeks', 'nine videos', 'bought the certificate' — knowledge as product.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The registers differ: A's dialogue carries authority and patience; B's 'promised' and 'bought' carry irony — the texts diverge on whether learning is formation or transaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Genre/purpose shapes treatment: narrative homage makes apprenticeship sacred; compressed satire makes credentialism absurd.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A: learning as slow embodied apprenticeship. B: learning as purchased credential. Formation versus transaction — purpose shapes the treatment.",
            commonErrors: [
              "Describing the two scenes without analysing the divergent valuations of learning.",
            ],
          },
        },
        {
          id: "langa-u3-tq13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two Returns",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "SONNET: I came back to the house\nthat had learned my name —\nthe door opened before I knocked.\n\nFREE VERSE: The house had been sold.\nI stood at the gate\nwith a key that opened nothing.",
          },
          stem: "Compare how the sonnet and the free-verse poem treat the experience of returning home.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre and treatment",
                statement:
                  "The sonnet's compression produces welcome; free verse's openness produces estrangement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sonnet's house 'had learned my name' and 'opened before I knocked' — return as recognition, home as living welcome.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The free-verse house 'had been sold' and the key 'opened nothing' — return as failure, home as alienated object.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Form shapes treatment: the sonnet's closed quatrains contain the reunion in formal embrace; the free verse's open lines enact the unbounded loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convergence: both figure home as something that responds (or refuses to respond) to the returning self. Divergence: recognition versus refusal — belonging restored versus belonging revoked.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The sonnet's 'before I knocked' grants agency to the house; the free verse's 'opened nothing' strips the key of meaning — the poems diverge on whether home remembers you.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: genre determines whether return is reunion or exclusion — the same threshold, opposite outcomes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sonnet: return as recognition ('door opened before I knocked'). Free verse: return as estrangement ('key that opened nothing'). Form shapes whether home welcomes or refuses.",
            commonErrors: [
              "Comparing the endings without analysing how form produces the different treatments.",
            ],
          },
        },
        {
          id: "langa-u3-tq14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a comparative paragraph analysing how genre shapes the treatment of 'silence' in these two texts.",
          extract: {
            title: "Two Silences",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "POEM: Silence is the unpaid debt\nof every word unsaid —\nit accrues interest\nin the dark.\n\nSTAGE DIRECTION: (A long pause. The actors do not move. The audience can hear the radiator tick.)",
          },
          parts: [
            { label: "a", prompt: "Write a comparative thesis.", marks: 2 },
            {
              label: "b",
              prompt: "Write paired evidence from both texts.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Analyse what the different treatments reveal about genre.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Genre and treatment",
                statement:
                  "Lyric interiorises silence as metaphor; drama materialises it as stage time.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Where the poem figures silence as private debt — accruing interest in the dark — the stage direction figures it as public duration — a pause the audience must endure; genre determines whether silence is felt or watched.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Paired evidence: 'unpaid debt / of every word unsaid' (poem) versus 'a long pause / the actors do not move' (stage direction) — one makes silence a psychological economy, the other a theatrical event.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Analysis: the poem's 'interest' metaphor makes silence quantifiable and internal; the stage direction's 'radiator tick' makes silence ambient and shared — lyric privacy versus dramatic publicity.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Significance: genre does not just contain the theme; it assigns it an audience — silence as private burden in lyric, as collective experience in theatre.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: silence as private debt (poem) versus public pause (drama). Evidence: unpaid debt versus long pause. Analysis: lyric interiority versus theatrical duration.",
            commonErrors: [
              "Describing both silences without analysing how genre assigns them different audiences.",
            ],
          },
        },
        {
          id: "langa-u3-tq15",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Two Crises",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "SPEECH: My people! The harvest fails, the borders burn — we must act as one, now, before it is too late!\n\nLETTER: The harvest fails and the borders burn. I write because someone must write what the speeches do not say — that we are tired, and we are not sure we want to be heroes.",
          },
          stem: "Compare how genre shapes each text's treatment of crisis.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The speech is more honest because it is public",
              },
              { id: "b", text: "Both texts mobilise the audience equally" },
              {
                id: "c",
                text: "The speech treats crisis as a call to collective action; the letter treats it as hidden exhaustion — genre determines what each text can honestly say.",
              },
              {
                id: "d",
                text: "The letter is more persuasive because it is private",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre and treatment",
                statement:
                  "Public rhetoric mobilises; private testimony confesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The speech's 'we must act as one' makes crisis a test of unity; the letter's 'what the speeches do not say' makes it a confession of limits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Genre constrains honesty: the speech cannot confess doubt without collapsing; the letter cannot mobilise without betraying its purpose.",
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
                  "The divergence is mobilisation versus confession — public performance versus private truth.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(c)** Mobilisation versus confession",
          },
        },
        {
          id: "langa-u3-tq16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write a comparative paragraph (thesis, two paired points, analysis) on how context shapes the treatment of 'duty' in these two texts.",
          extract: {
            title: "Two Duties",
            author: "Written for Akademik Space",
            source: "Original paired texts",
            text: "LETTER (1916): I write to you from the front. Duty is not what they told us it would be — it is colder, and quieter, and it does not end when the war does. I remain, because I said I would.\n\nMANIFESTO (2024): Duty is not a chain we inherit but a choice we renew. The old obligations are not ours to carry; we answer only to what we can justify now.",
          },
          parts: [
            { label: "a", prompt: "Write a comparative thesis.", marks: 2 },
            {
              label: "b",
              prompt: "Write two paired-evidence points comparing the texts.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write the analysis explaining what the different treatments reveal about context.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context and treatment",
                statement:
                  "Wartime letter treats duty as endured fidelity; modern manifesto treats it as renewable choice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Where the 1916 letter figures duty as inherited endurance — colder, quieter, unending — the 2024 manifesto figures it as chosen justification; context determines whether duty is fate or decision.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point 1 (nature of duty): 'it does not end when the war does' (letter) versus 'a choice we renew' (manifesto) — one makes duty permanent, the other renewable.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 2 (ground of obligation): 'I remain, because I said I would' (letter) grounds duty in promise; 'answer only to what we can justify now' (manifesto) grounds it in present reason — fidelity versus accountability.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Analysis: the letter's context — total war, conscription, honour culture — makes duty a survival strategy and a moral prison simultaneously; the manifesto's context — post-ideological individualism — makes duty an ethical project the self must justify.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Significance: context does not merely background the theme; it supplies the available meanings of 'duty' — the texts show how historical pressure transforms obligation from endurance into choice.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Thesis: duty as inherited endurance (1916) versus renewable choice (2024). Evidence: does not end versus choice we renew; because I said I would versus justify now. Analysis: context transforms obligation from survival into ethics.",
            commonErrors: [
              "Comparing the texts without analysing how historical context supplies different meanings of duty.",
            ],
          },
        },
      ],
    },
  ],
};
