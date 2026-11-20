import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "langa-u3-lesson-3-2",
  code: "3-2",
  title: "Critical Perspectives and Evaluative Reading",
  goal: "I CAN read critically from multiple perspectives and evaluate a text's achievements and limitations.",
  standards: ["Critical reading", "Evaluation", "Perspectives"],
  vocabulary: [
    {
      term: "Critical reading",
      definition:
        "Reading that questions assumptions, tests claims and evaluates effects rather than accepting them.",
    },
    {
      term: "Perspective",
      definition:
        "A lens or stance from which a text is read: feminist, Marxist, postcolonial, formalist, reader-response.",
    },
    {
      term: "Evaluative reading",
      definition:
        "Judging a text's success — its coherence, power, originality and limitations.",
    },
    {
      term: "Bias",
      definition:
        "A slant or prejudice in a text or reading; may be authorial, cultural or critical.",
    },
    {
      term: "Ambiguity",
      definition:
        "Productive uncertainty — a text sustaining multiple defensible readings.",
    },
    {
      term: "Limitation",
      definition:
        "A weakness or blind spot in a text — what it cannot or does not do.",
    },
  ],
  concepts: [
    {
      id: "langa-u3-perspectives",
      title: "Reading from perspectives",
      skill:
        "Apply different critical perspectives to a text and explain how each reveals different meanings.",
      lesson: {
        sections: [
          {
            heading: "Why perspectives matter",
            body: "No reading is neutral. A **formalist** reads for structure and language; a **feminist** reads for gendered power; a **Marxist** reads for class and economics; a **postcolonial** reader asks whose voice is centred and whose is silenced. Each perspective asks different questions and finds different answers.",
          },
          {
            heading: "Applying a perspective",
            body: "A perspective is not a label — it is a set of questions. Feminist reading asks: how are women represented? Who has power? Marxist reading asks: what are the economic relations? Postcolonial reading asks: what does the text assume about 'civilisation' and 'the other'? Apply the questions, not just the name.",
          },
          {
            heading: "Multiple perspectives",
            body: "The strongest analytical writing acknowledges that a text can sustain several readings. A poem can be formally masterful AND politically limited; a novel can be psychologically true AND culturally biased. Holding perspectives in tension is more sophisticated than choosing one.",
          },
        ],
        keyFormulas: [
          {
            name: "Perspective questions",
            statement:
              "Formalist: how is it made? Feminist: who has power? Marxist: what are the economics? Postcolonial: whose voice is centred?",
          },
          {
            name: "Tension principle",
            statement:
              "A text can be masterful and limited simultaneously — say both.",
          },
        ],
        workedExample: {
          problem:
            "Read 'the strong silent type' — a man who 'never complains' — from feminist and formalist perspectives.",
          solution:
            "Formalist: the clipped syntax and silence create stoic dignity. Feminist: 'never complains' may code emotional suppression as masculine virtue — the same feature reads as strength formally and as constraint politically.",
        },
      },
      questions: [
        {
          id: "langa-u3-pq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'critical perspective' is best understood as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A negative opinion about a text" },
              {
                id: "b",
                text: "A lens or set of questions that shapes interpretation",
              },
              { id: "c", text: "The author's stated intention" },
              { id: "d", text: "A summary of the plot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical perspective",
                statement:
                  "A lens — a set of questions — that shapes what a reader notices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A perspective is methodological, not evaluative — it shapes interpretation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A lens or set of questions",
          },
        },
        {
          id: "langa-u3-pq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Secretary",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She took dictation for twenty years. Her hands remembered the shorthand long after her mind forgot the words. When he died, they found her still at her desk, the letters neatly filed, the kettle on.",
          },
          stem: "Read this extract from a feminist perspective and explain what it reveals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Feminist reading",
                statement:
                  "Ask who has power, whose labour is invisible, how gender shapes the text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Feminist lens: the secretary's twenty years of skilled labour are defined entirely by service to 'him' — her work exists only as his dictation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The detail 'her hands remembered the shorthand long after her mind forgot the words' suggests her identity is bodily habit, not self — labour has replaced personhood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'They found her still at her desk' — she dies at work, literally and figuratively serving; the extract invites us to ask whether this is devotion or exploitation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Feminist reading reveals invisible skilled labour, identity subsumed by service, and a death that literalises lifelong subordination.",
            commonErrors: [
              "Labeling the reading 'feminist' without applying the perspective's questions.",
            ],
          },
        },
        {
          id: "langa-u3-pq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Empire's Garden",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The garden was the finest thing in the province — roses from York, fountains from Rome, soil carried from home in barrels. The gardener, a local man, had learned to prune them 'the English way', though he had never seen England.",
          },
          stem: "Analyse this extract from a postcolonial perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Postcolonial reading",
                statement:
                  "Ask whose culture is centred, whose labour is invisible, what 'civilisation' assumes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Postcolonial lens: the garden displays imperial power through imported nature — roses 'from York', fountains 'from Rome', soil 'carried from home' — the colony is made to resemble the metropole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The gardener's 'English way' of pruning, learned without seeing England, shows colonisation as internalised discipline — the colonised adopts the coloniser's standards as his own.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "His labour is invisible — he maintains the display but is not part of it; the garden's beauty depends on labour the text does not name.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The extract invites a reading where 'the finest thing in the province' is a monument to extraction — beauty purchased with transported soil and appropriated technique.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Postcolonial reading reveals the garden as imperial display: imported nature, internalised discipline, invisible labour — 'civilisation' as extraction.",
            commonErrors: [
              "Describing the garden without questioning the power relations it displays.",
            ],
          },
        },
        {
          id: "langa-u3-pq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Analyse the following extract from two different critical perspectives, showing what each reveals.",
          extract: {
            title: "The General",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The general reviewed his troops at dawn. They stood in perfect silence as he walked the line, touching each man's shoulder — a gesture he had performed ten thousand times, for men who would die before the week was out.\n\n'Dismissed,' he said, and meant it kindly.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Analyse from a formalist perspective (structure, language, technique).",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Analyse from a Marxist or political perspective (power, class, economics).",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple perspectives",
                statement:
                  "Formalist reading examines craft; political reading examines power.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Formalist: the extract's power lies in its restraint — 'perfect silence', the repeated gesture, the understatement of 'Dismissed'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The structure builds through accumulation: 'ten thousand times' compresses a career into one habitual act; 'who would die before the week was out' is a parenthetical that detonates the scene's calm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "'And meant it kindly' — the adverb lands as tragic irony; the general's kindness is real and irrelevant.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Marxist/political: the general's 'kindness' is the velvet of command — the shoulder-touch is paternalistic control, making obedience feel like affection.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The soldiers' silence is not consent but discipline — the extract shows power operating through ritual, not force.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "'Men who would die before the week was out' — the general's tenderness is spent on men already marked for death; the extract exposes the gap between personal kindness and systemic slaughter.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The final 'Dismissed' enacts the whole power structure in two syllables — command as courtesy, murder as administration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Formalist: restraint, accumulation, tragic irony. (b) Political: kindness as control, silence as discipline, command as administration of death.",
            commonErrors: [
              "Applying only one perspective or treating perspectives as labels rather than questions.",
            ],
          },
        },
        {
          id: "langa-u3-pq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A feminist reading of a text primarily asks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is the text beautiful?" },
              {
                id: "b",
                text: "How does gender shape representation and power in the text?",
              },
              { id: "c", text: "What is the plot?" },
              { id: "d", text: "Who published the text?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feminist perspective",
                statement:
                  "Asks how gendered power operates in representation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A perspective is a set of questions about power and representation, not a verdict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** How gender shapes power",
          },
        },
        {
          id: "langa-u3-pq6",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Chairman",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "He ran the meeting for thirty years. Nobody remembers what he decided; everyone remembers how he made them feel small.",
          },
          stem: "What does a political or Marxist reading of this extract reveal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The chairman's expensive car" },
              {
                id: "b",
                text: "Power operating through atmosphere and humiliation rather than decisions — authority maintained by diminishing others.",
              },
              { id: "c", text: "The meeting was simply boring" },
              { id: "d", text: "Women were absent from the room" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Political reading",
                statement:
                  "Ask how power is exercised and whose interests it serves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The extract shows power working through affect — 'feel small' — not through content or decision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "That is the political insight: authority persists by humiliation, not by merit or mandate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Power through humiliation",
          },
        },
        {
          id: "langa-u3-pq7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A postcolonial reading asks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is the text set in a colony?" },
              {
                id: "b",
                text: "Whose culture is centred, whose voice is silenced, and what does the text assume about 'civilisation'?",
              },
              { id: "c", text: "Does the text have a happy ending?" },
              { id: "d", text: "What year was the text written?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Postcolonial perspective",
                statement: "Asks whose culture is centred and whose is erased.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The perspective interrogates centring and silencing, not just setting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Whose culture is centred",
          },
        },
        {
          id: "langa-u3-pq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Missionary's House",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The mission stood on the hill, white as an apology. Inside, the children learned English songs and forgot the names of their own.",
          },
          stem: "What does a postcolonial reading of this extract reveal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mission was a kind institution" },
              {
                id: "b",
                text: "Education as cultural replacement — 'white as an apology' admits harm, and forgotten names mark erasure.",
              },
              { id: "c", text: "The children enjoyed the English songs" },
              { id: "d", text: "The hill was difficult to climb" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Postcolonial reading",
                statement:
                  "Ask what 'civilising' projects actually do to the colonised.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'White as an apology' concedes the mission's violence even as it describes it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Forgot the names of their own' makes education a mechanism of erasure — the postcolonial insight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Education as cultural replacement",
          },
        },
        {
          id: "langa-u3-pq9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Soldier's Letter",
            author: "Written for Akademik Space",
            source: "Original letter extract",
            text: "I fight for queen and country. I also fight so my daughter will not have to. I don't know which reason is the real one.",
          },
          stem: "Read this letter from two perspectives — patriotic duty and protective labour. What does holding both reveal?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The letter is contradictory and therefore weak",
              },
              {
                id: "b",
                text: "The letter sustains two readings — public duty and private protection — and the tension between them is the text's achievement.",
              },
              { id: "c", text: "The soldier secretly hates his country" },
              { id: "d", text: "The daughter is ungrateful" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tension principle",
                statement:
                  "A text can sustain several readings; holding them is more sophisticated than choosing one.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The patriotic reading finds duty to queen and country; the labour reading finds sacrifice for the daughter's future.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'I don't know which reason is the real one' makes the tension explicit — the uncertainty is the meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Two readings held in tension",
          },
        },
        {
          id: "langa-u3-pq10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Holding perspectives in tension' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choosing the perspective you like best" },
              {
                id: "b",
                text: "Acknowledging a text can sustain several readings and reporting them without forcing a single verdict",
              },
              { id: "c", text: "Reading the text twice" },
              { id: "d", text: "Ignoring historical context" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple perspectives",
                statement:
                  "Sophisticated reading holds competing interpretations simultaneously.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tension is methodological — report the readings a text sustains rather than crowning one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Report sustained readings",
          },
        },
        {
          id: "langa-u3-pq11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Dowry",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Her dowry was twenty goats. Her husband's family counted them twice — once for her, and once for the record.",
          },
          stem: "Read this extract from a feminist perspective and explain what it reveals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Feminist reading",
                statement:
                  "Ask who owns, who counts, whose labour and body are instrumentalised.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The dowry is counted 'twice' — once 'for her' and once 'for the record' — suggesting her value exists only as documentation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The double counting implies the goats serve the family's account, not the bride — she is a line item, not a person.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feminist insight: the extract shows marriage as transaction in which the woman's worth is administratively produced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Feminist reading reveals the bride as administratively produced value — counted for the record, not for herself.",
            commonErrors: [
              "Labeling the reading 'feminist' without applying its questions about ownership and counting.",
            ],
          },
        },
        {
          id: "langa-u3-pq12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Factory Whistle",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "At six the whistle blew and the town stood still. The men went in; the women went to the market; the children went to the mill school. Nobody chose.",
          },
          stem: "Analyse this extract from a Marxist perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Marxist reading",
                statement:
                  "Ask how labour, class and economic structure determine the subjects' lives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The whistle is the text's engine of determinism — 'the town stood still' makes the factory the town's clock.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The triadic distribution — men to work, women to market, children to mill school — shows the whole population allocated by the economic machine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Nobody chose' is the Marxist verdict: individual lives are functions of class position, not personal decision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Even childhood is conscripted — 'the mill school' suggests education itself serves the factory; no sphere escapes the economic order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Marxist reading reveals total economic determinism: the whistle allocates every class and age, and 'nobody chose' is the text's thesis.",
            commonErrors: [
              "Describing the schedule without analysing the class relations it enforces.",
            ],
          },
        },
        {
          id: "langa-u3-pq13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Explorer's Journal",
            author: "Written for Akademik Space",
            source: "Original journal extract",
            text: "Day 40. The people here have no word for 'property' — they laughed when I explained mine. Perhaps they are poor, or perhaps I am rich in the wrong currency.",
          },
          stem: "Analyse this journal entry from a postcolonial or anthropological perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Postcolonial reading",
                statement:
                  "Ask whose categories the text treats as universal and whose as deficient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The explorer treats his own category — 'property' — as the measure of civilisation; the people's laughter marks the encounter as asymmetrical.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Perhaps they are poor' is the colonial reflex — deficit read into the other; 'or perhaps I am rich in the wrong currency' is the crack in that certainty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The self-correction ('wrong currency') suggests the explorer half-recognises that his wealth is denominated in his own assumptions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Postcolonial insight: the journal stages the moment when the observer's framework becomes visible — 'property' is not a fact but a coin the explorer minted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The laughter is the people's verdict on the category — they decline the frame the explorer brings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: the entry is double-edged — it records imperial confidence and its first hairline fracture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Postcolonial reading reveals the explorer's categories as imperial coinage; 'wrong currency' is the text's self-aware crack — confidence and fracture in one entry.",
            commonErrors: [
              "Treating the explorer's account as neutral observation rather than a perspective with interests.",
            ],
          },
        },
        {
          id: "langa-u3-pq14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse the following extract from two different critical perspectives, showing what each reveals.",
          extract: {
            title: "The Headmistress",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She kept the school for forty years. Test scores rose; playground fights fell; parents praised her. The children called her 'the broom' behind her back — she swept everything clean, including the mess.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Analyse from a personal/psychological perspective (the children's view).",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Analyse from an institutional or political perspective (the school's order).",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain what holding both perspectives reveals about the text's achievement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple perspectives",
                statement:
                  "Different lenses reveal the institution's cost and its function simultaneously.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Personal: 'the broom' is children's counter-language — they experience her order as violence done to their play; 'swept everything clean' makes her love indistinguishable from erasure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The nickname survives 'behind her back' — dissent persists but is forced underground; the children have no public voice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Psychologically: her forty years of 'keeping' suggest a self made of maintenance — identity fused with institutional function.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Institutional: rising scores and falling fights measure her success entirely in the system's own metrics — the institution defines its own health.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "'Parents praised her' completes the closed loop: the institution's beneficiaries certify its administrator — no outside measure exists.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The extract thus shows order as self-certifying: cleanliness is the proof of cleanliness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Holding both reveals the text's achievement: it refuses to resolve whether she is devoted or destructive — the broom both cleans and erases, and the metrics cannot tell the difference.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Children experience order as violence; dissent survives only in a nickname. (b) The institution self-certifies through its own metrics. (c) The text's power is its refusal to resolve devotion from destruction.",
            commonErrors: [
              "Choosing one perspective and ignoring what the other reveals.",
            ],
          },
        },
        {
          id: "langa-u3-pq15",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Advertisement",
            author: "Written for Akademik Space",
            source: "Original advertisement",
            text: "Wanted: a cheerful, self-starting individual to join our family. Benefits include flexible hours and the satisfaction of being needed.",
          },
          stem: "Read this advertisement critically — what do its words actually offer, and what do they conceal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Critical reading",
                statement:
                  "Question the language's assumptions and what it makes invisible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Join our family' borrows intimacy to disguise employment — the worker is asked to give familial loyalty for wages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Cheerful, self-starting' demands emotional performance — the job requires not labour but a maintained mood.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'The satisfaction of being needed' replaces concrete benefits — the only reward offered is the employer's need itself.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Critical insight: the ad's language of care is also a language of extraction — 'needed' means exploitable; the advertisement sells belonging to purchase devotion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The ad offers intimacy language for an employment contract — 'family' disguises wages, 'satisfaction of being needed' replaces benefits; care language conceals extraction.",
            commonErrors: [
              "Reading the advertisement at face value without interrogating its language.",
            ],
          },
        },
        {
          id: "langa-u3-pq16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analyse the following extract from a feminist perspective and a formalist perspective, then evaluate what holding both reveals.",
          extract: {
            title: "The Queen's Visit",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The queen visited on Tuesday. She smiled for the cameras, laid the wreath, and answered three questions with identical phrases. Behind her, the mayor counted the seconds until she left.",
          },
          parts: [
            {
              label: "a",
              prompt: "Analyse from a feminist perspective.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Analyse from a formalist perspective (structure, repetition, detail).",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate what holding both perspectives reveals about the text's achievement.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple perspectives",
                statement:
                  "Political reading finds gendered performance; formalist reading finds crafted symmetry.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Feminist: the queen's 'identical phrases' mark her answers as script, not speech — her public voice is ventriloquised by ceremony.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Her power is real but her utterance is borrowed — she performs sovereignty while the institution speaks through her.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The 'smile for the cameras' is compulsory affect — feminine-coded grace deployed as state instrument.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Formalist: the extract is built on repetition and symmetry — 'smiled', 'laid', 'answered' is a triadic ritual; 'three questions with identical phrases' makes formula the subject.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The final sentence breaks the pattern: 'counted the seconds' shifts from ceremony's timelessness to the mayor's clock — form enacts the exposure of ritual as duration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "'Behind her' is the pivot — the camera's perspective is revealed as partial; the formal structure turns to expose what the ritual hid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Holding both reveals the text's double achievement: formally it dramatises the gap between ceremony and time; politically it shows female sovereignty as scripted performance within a structure that outlives her.",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The tension is productive: the formalist sees the craft of exposure, the feminist sees what is exposed — together they show the extract makes form itself the argument about power.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Feminist: scripted voice, compulsory grace, sovereignty ventriloquised. (b) Formalist: triadic ritual broken by the mayor's clock. (c) Together: the extract makes form the argument — ceremony exposed by structure itself.",
            commonErrors: [
              "Treating the two perspectives as separate analyses rather than holding them in tension.",
            ],
          },
        },
      ],
    },
    {
      id: "langa-u3-evaluation",
      title: "Evaluative reading",
      skill: "Judge a text's coherence, power and limitations with evidence.",
      lesson: {
        sections: [
          {
            heading: "What evaluation means",
            body: "Evaluation is not 'I liked it'. It is a **judgement with evidence**: does the text achieve its apparent purpose? Is it coherent — do its parts work together? Is it powerful — does it move, persuade, disturb? Is it original — does it do something unexpected? And what are its **limitations** — what can it not do, or what does it ignore?",
          },
          {
            heading: "Criteria for judgement",
            body: "Useful criteria: **coherence** (does the argument hold?), **craft** (is the language controlled?), **insight** (does it reveal something true?), **originality** (does it surprise?), **scope** (does it acknowledge complexity?). Evaluation should be **balanced** — a text can be masterful in craft and limited in vision.",
          },
          {
            heading: "The evaluative move",
            body: "A strong evaluative sentence has three parts: **judgement** ('the poem is masterful'), **evidence** ('its refrain enacts the obsession it describes'), and **qualification** ('though its formal perfection risks emotional distance'). Evaluation without evidence is opinion; evidence without judgement is description.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation criteria",
            statement:
              "Coherence + craft + insight + originality + scope = basis for judgement",
          },
          {
            name: "Evaluative sentence",
            statement: "Judgement + evidence + qualification",
          },
        ],
        workedExample: {
          problem: "Evaluate: 'The poem is very good.'",
          solution:
            "Weak: bare opinion. Strong: 'The poem is formally masterful — its terza rima enacts the circularity it describes — though its technical display occasionally overshadows the grief it claims to honour.' Judgement + evidence + qualification.",
        },
      },
      questions: [
        {
          id: "langa-u3-eq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the strongest evaluative statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The poem is very beautiful." },
              { id: "b", text: "The poem uses lots of metaphors." },
              {
                id: "c",
                text: "The poem's refrain enacts the obsession it describes, though its formal perfection risks emotional distance.",
              },
              { id: "d", text: "The poem is about grief." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative writing",
                statement: "Judgement + evidence + qualification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (c) gives a judgement ('masterful' implied), evidence ('refrain enacts') and qualification ('risks emotional distance').",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Judgement + evidence + qualification",
          },
        },
        {
          id: "langa-u3-eq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Machine",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The machine hums its one note\nall day and all night\nand does not tire,\nand does not dream,\nand does not ask\nwhy it was built.",
          },
          stem: "Evaluate this poem's effectiveness, giving one strength and one limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced evaluation",
                statement: "Strength + limitation, both evidenced.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: the anaphora 'does not tire / does not dream / does not ask' builds through negation — each absence deepens the pathos; the machine's limitations are the poem's subject.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The single-note hum ('its one note') is a brilliant formal constraint — the poem's sound enacts the machine's monotony.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: the poem's brevity and obviousness — 'does not ask why it was built' states the theme directly, leaving little room for ambiguity or complication; the reader is told rather than led.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strength: anaphoric negation and formal constraint enact monotony. Limitation: direct statement of theme limits ambiguity.",
            commonErrors: ["Evaluation that only praises or only criticises."],
          },
        },
        {
          id: "langa-u3-eq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Confession",
            author: "Revisit from Lesson 1-1",
            source: "Original prose extract",
            text: "I have lied about this before. The police will tell you I told the truth the first time, and perhaps I did, but only because the first time I was still deciding what the truth would be.",
          },
          stem: "Evaluate the effectiveness of this opening as the start of a narrative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative reading",
                statement:
                  "Judge craft, insight and limitations with evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effectiveness: the opening immediately establishes unreliability — 'I have lied about this before' is a masterful hook that makes the reader complicit in distrust.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The paradox 'only because the first time I was still deciding what the truth would be' is genuinely philosophical — it questions whether truth is found or made.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: the opening risks overstatement — by confessing deception immediately, the narrator may foreclose the suspense that slower revelation would build; the reader may feel manipulated rather than intrigued.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Balanced judgement: powerful but risky — the opening trades subtlety for immediacy, which may or may not pay off depending on the rest of the narrative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Powerful hook establishing unreliability and philosophical depth, but risks overstatement — immediate confession may foreclose suspense.",
            commonErrors: [
              "Evaluation without acknowledging both strengths and limitations.",
            ],
          },
        },
        {
          id: "langa-u3-eq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an evaluative paragraph (judgement, evidence, qualification) on the following poem.",
          extract: {
            title: "The Gate (extract)",
            author: "Revisit from Lessons 1-1, 2-2",
            source: "Original poem",
            text: "Morning opened its iron gate\nand let the light in like a debt\nI never agreed to pay.",
          },
          parts: [
            {
              label: "a",
              prompt: "State your evaluative judgement (1 sentence).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give two pieces of evidence for your judgement.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Add a qualification — what limits the poem's achievement?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative paragraph",
                statement: "Judgement + evidence + qualification.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Judgement example: 'The extract is economically powerful — three lines that construct an entire metaphysics of involuntary existence.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Evidence 1: 'iron gate' personifies morning as harsh mechanism; 'like a debt' converts light into obligation — compressed but complete imagery.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence 2: the enjambment 'light in like a debt / I never agreed to pay' forces the reader to carry the debt-image across the line break — form enacts the burden.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence 3: 'never agreed to pay' gives the speaker agency in refusal while admitting powerlessness — the paradox is the poem's engine.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Qualification example: 'However, the extract's compression borders on opacity — the debt metaphor is never resolved, and a reader who misses the personification may find the poem merely cryptic rather than profound.'",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Qualification acknowledges limitation: ambiguity can be depth or confusion; the poem's achievement depends on the reader's willingness to unpack it.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Judgement: economically powerful. Evidence: iron-gate personification, enjambed debt metaphor, refusal paradox. Qualification: compression risks opacity — ambiguity may read as confusion.",
            commonErrors: [
              "Evaluation that only praises or only criticises; evidence without analysis.",
            ],
          },
        },
        {
          id: "langa-u3-eq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluation differs from description because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always longer" },
              {
                id: "b",
                text: "Makes a judgement supported by evidence about a text's achievements and limitations",
              },
              { id: "c", text: "Summarises the plot" },
              { id: "d", text: "Uses more complicated vocabulary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Judgement + evidence + qualification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation judges; description only reports. The difference is the evaluative claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Judgement supported by evidence",
          },
        },
        {
          id: "langa-u3-eq6",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Quiet Poem",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "I am here.\nYou are there.\nThe distance between us\nis a country\nwith no name.",
          },
          stem: "Which is the strongest evaluative statement about this poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a nice poem." },
              {
                id: "b",
                text: "The poem's unnamed 'country' between speaker and listener converts distance into geography — a powerful image — though its abstraction may resist concrete feeling.",
              },
              { id: "c", text: "It has five short lines." },
              { id: "d", text: "It is about distance." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative writing",
                statement: "Judgement + evidence + qualification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choice (b) names the device ('country'), evaluates it ('powerful image') and qualifies it ('may resist concrete feeling').",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other choices are opinion, description or topic-statement without evaluation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Judgement + evidence + qualification",
          },
        },
        {
          id: "langa-u3-eq7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'limitation' of a text is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its length" },
              {
                id: "b",
                text: "What it cannot do or does not acknowledge — a blind spot in its vision",
              },
              { id: "c", text: "Its price" },
              { id: "d", text: "Its difficulty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limitation",
                statement:
                  "A blind spot — what the text cannot or does not do.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A limitation is a scope problem, not a physical or commercial property.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** What it cannot do",
          },
        },
        {
          id: "langa-u3-eq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Plea",
            author: "Written for Akademik Space",
            source: "Original speech extract",
            text: "Friends, we have suffered enough. The time for patience is over. I ask you — no, I beg you — to stand with me now.",
          },
          stem: "Evaluate the effectiveness of this speech extract's rhetoric.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is persuasive because it escalates from 'ask' to 'beg' and builds urgency through 'suffered enough' and 'time for patience is over' — though 'suffered' is never specified, so the emotion floats free of evidence.",
              },
              {
                id: "b",
                text: "It is weak because speeches should use statistics",
              },
              { id: "c", text: "It is effective because it is short" },
              { id: "d", text: "It fails because 'beg' is informal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative reading",
                statement: "Strength and limitation both evidenced.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The escalation 'ask' to 'beg' performs desperation — form enacts content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The limitation: 'suffered enough' names no suffering — pathos without evidence may move or may ring hollow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Strong escalation, vague evidence",
          },
        },
        {
          id: "langa-u3-eq9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Perfect House",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Everything was perfect — the house, the marriage, the children — which is how you knew something was wrong.",
          },
          stem: "Which is the strongest evaluation of this opening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a cliché" },
              {
                id: "b",
                text: "The paradox — perfection as the sign of wrongness — creates productive unease and an immediate narrative engine, though it risks telling the reader what to feel rather than earning the suspicion.",
              },
              { id: "c", text: "It is confusing and should be cut" },
              { id: "d", text: "It is boring because nothing happens" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative reading",
                statement: "Judge effect and risk with evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The paradox is genuinely effective: 'perfect' and 'something was wrong' invert expectation in one sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The qualification is also warranted: the opening announces its own suspicion, which may shortcut the slow build the rest of the narrative needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Powerful paradox, some risk of overstatement",
          },
        },
        {
          id: "langa-u3-eq10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Balanced evaluation' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Praising everything equally" },
              {
                id: "b",
                text: "Weighing strengths and limitations with evidence",
              },
              { id: "c", text: "Avoiding any judgement" },
              { id: "d", text: "Adopting the author's own view" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balanced evaluation",
                statement: "Strengths and limitations both evidenced.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Balance is evidential, not sentimental — both sides of the judgement are argued.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Strengths and limits, both evidenced",
          },
        },
        {
          id: "langa-u3-eq11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Ode to the Wheel",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "O wheel, O gear, O shining tooth —\nyou turn the world\nand call it progress.",
          },
          stem: "Evaluate this poem's effectiveness, giving one strength and one limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced evaluation",
                statement: "Strength + limitation, both evidenced.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: the triadic invocation 'O wheel, O gear, O shining tooth' borrows ode convention for a machine — the elevated register against industrial content is itself the irony.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Call it progress' compresses the poem's argument into three words — naming versus truth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: the poem is so compressed it risks aphorism — 'call it progress' states the thesis so directly that the reader is told rather than shown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strength: ode register ironised by machine content; thesis compressed. Limitation: over-compression borders on aphorism — told rather than shown.",
            commonErrors: [
              "Evaluation that only praises the imagery without weighing the directness.",
            ],
          },
        },
        {
          id: "langa-u3-eq12",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            source: "Original report extract",
            text: "Attendance improved 12%. Behaviour incidents fell 8%. The school is now 'outstanding' in all categories.",
          },
          stem: "Evaluate the effectiveness of this report extract as a piece of institutional writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative reading",
                statement:
                  "Judge craft and insight, including what the language conceals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The percentages give the writing procedural credibility — '12%', '8%' perform measurement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Outstanding in all categories' exposes the hollow centre: the category does the praising, not any observed good.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The writing is effective precisely because it is empty — the reader sees audit-speak producing the appearance of excellence without describing a single student.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluation: as institutional writing it succeeds at its real purpose — certification — but as description of a school it fails; the extract is a masterpiece of bureaucratic self-congratulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective as certification, empty as description — the percentages perform rigour while 'outstanding in all categories' reveals self-praise without content.",
            commonErrors: [
              "Judging the report as if it were literature rather than institutional discourse.",
            ],
          },
        },
        {
          id: "langa-u3-eq13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Retelling",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "I have told this story so many times I no longer know which parts are true. Perhaps that is the point.",
          },
          stem: "Evaluate the effectiveness of this confession as a narrative opening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative reading",
                statement: "Judge hook, insight and risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: 'so many times I no longer know' makes repetition itself the subject — the story's wear is dramatised, not hidden.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Perhaps that is the point' converts unreliability into design — the narrator claims the confusion is intentional.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The confession is intellectually strong: it asks whether truth survives retelling, a genuinely literary question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: the move is familiar — unreliable-narrator openings are a known device, and 'perhaps that is the point' risks the smugness of a narrator who has already solved his own problem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The claim 'that is the point' forecloses ambiguity — a narrator who announces the point may be explaining rather than enacting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Balanced judgement: conceptually rich but conventionally executed; its success depends on whether the rest of the narrative earns the claim it makes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rich concept (retelling erodes truth) executed through a familiar device; risk of announced meaning ('the point') and narrator smugness — effective but conventional.",
            commonErrors: ["Praising the idea without weighing the execution."],
          },
        },
        {
          id: "langa-u3-eq14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an evaluative paragraph (judgement, evidence, qualification) on the following poem.",
          extract: {
            title: "The Harbour",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The boats came in with the tide\nand went out with the arguments —\nthe harbourmaster logged them all\nas weather.",
          },
          parts: [
            {
              label: "a",
              prompt: "State your evaluative judgement (1-2 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give two pieces of evidence for your judgement.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Add a qualification — what limits the poem's achievement?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative paragraph",
                statement: "Judgement + evidence + qualification.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Judgement example: 'The extract is a compact study in institutional blindness — four lines that show a system recording human conflict as meteorology.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Evidence 1: 'went out with the arguments' transfers human quarrel to boats — the enjambed line makes the metaphor literal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence 2: 'logged them all / as weather' — the harbourmaster's verb reduces dispute to data; bureaucracy's language is the poem's subject.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence 3: the tidal rhythm ('came in', 'went out') gives the poem a natural cycle against which human noise is flattened.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Qualification example: 'However, the poem's neatness risks the very reduction it critiques — by ending on the satisfying rhyme-adjacent turn, it may aestheticise the blindness it exposes.'",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Qualification acknowledges limitation: the poem judges the harbourmaster but offers no alternative view — the critique is complete but partial.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Judgement: compact study in institutional blindness. Evidence: arguments transferred to boats, logged as weather, tidal cycle. Qualification: aesthetic neatness may replicate the reduction it critiques; no alternative perspective offered.",
            commonErrors: [
              "Evaluation without acknowledging what the poem itself cannot see.",
            ],
          },
        },
        {
          id: "langa-u3-eq15",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            source: "Original letter extract",
            text: "I write to say the garden is fine. The roses are fine. I am fine. (I am not fine.)",
          },
          stem: "Evaluate the effectiveness of the parenthesis in this letter.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a cliché that should be removed" },
              {
                id: "b",
                text: "It breaks the letter's surface — the form literally contains the truth the sentences deny — though the device is familiar and risks an engineered confession.",
              },
              { id: "c", text: "It proves the writer is dishonest" },
              {
                id: "d",
                text: "It has no effect because readers skip parentheses",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative reading",
                statement: "Judge a single device's effect and risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The parenthesis contains what the sentences deny — form enacts repression then confession; the repeated 'fine' builds the pressure it releases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The qualification: the 'I am fine (I am not)' move is conventional and may feel engineered rather than discovered.",
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
                  "Effective but conventional — the device's power depends on the surrounding letter earning it.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "**(b)** Contains truth the sentences deny — effective but conventional",
          },
        },
        {
          id: "langa-u3-eq16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an evaluative analysis (judgement, evidence across two criteria, qualification) of the following poem.",
          extract: {
            title: "The Cartographer",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "He maps the coast he has never seen —\neach inlet named for a lover's sigh,\neach rock for a debt unpaid.\nThe map is perfect.\nThat is the problem.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "State your evaluative judgement on coherence (does the poem's argument hold?).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give evidence on craft (language, imagery, structure).",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Give your qualification — what limits the poem's achievement or scope?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluative analysis",
                statement: "Coherence + craft + qualification, all evidenced.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Coherence judgement example: 'The poem is coherent — its argument builds cleanly from impossible cartography to the verdict that perfection is the flaw.'",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "The logic holds: a map of the unseen is 'perfect' because it is made of projections — names for 'a lover's sigh' and 'a debt unpaid' are interior, not coastal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "'That is the problem' lands as earned conclusion — the two-word line converts description into critique.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Craft evidence 1: the conditional 'he maps... he has never seen' makes the poem about representation itself — cartography as metaphor for all description.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Craft evidence 2: the naming triad — inlet for a sigh, rock for a debt — shows the map records the mapper's inner geography, not the coast's.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Craft evidence 3: the final short line breaks the poem's established length — form enacts the collapse of the map's pretence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Craft evidence 4: 'perfect' is the pivot-word — the poem's whole argument turns on the gap between accuracy and truth.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Qualification example: 'However, the poem's elegance risks its own subject — by ending so cleanly, it may perform the same perfection it critiques; the reader admires the map while being told maps lie.'",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Scope limitation: the poem universalises from one cartographer — whether all representation is projection is asserted, not tested; the argument is brilliant but narrow.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Coherent: argument builds from unseen coast to 'perfect... the problem'. Craft: representation theme, naming triad, line-length break, pivot 'perfect'. Qualification: elegant ending may enact the perfection it critiques; universal claim asserted, not tested.",
            commonErrors: [
              "Praising craft without testing whether the argument holds.",
            ],
          },
        },
      ],
    },
  ],
};
