import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "langa-u2-lesson-2-3",
  code: "2-3",
  title: "Timed Writing and Text-Type Awareness",
  goal: "I CAN adapt analytical writing to different text types and manage time under exam conditions.",
  standards: ["Writing", "Text types", "Timed practice"],
  vocabulary: [
    {
      term: "Text type",
      definition:
        "A form defined by purpose and audience: article, review, letter, speech, blog.",
    },
    {
      term: "Register",
      definition:
        "Degree of formality in language, matched to audience and purpose.",
    },
    {
      term: "Article",
      definition:
        "A journalistic text type: headline, byline, structured paragraphs, often balanced or persuasive.",
    },
    {
      term: "Review",
      definition:
        "A evaluative text type assessing a work, product or event — opinion supported by criteria.",
    },
    {
      term: "Letter",
      definition:
        "A correspondence text type with salutation, body and sign-off; formal or informal register.",
    },
    {
      term: "Timed writing",
      definition:
        "Producing a coherent response within a fixed period — planning, writing and checking compressed.",
    },
  ],
  concepts: [
    {
      id: "langa-u2-text-types",
      title: "Text-type awareness",
      skill:
        "Identify the conventions of articles, reviews and letters and adapt analytical writing to each.",
      lesson: {
        sections: [
          {
            heading: "Articles and journalism",
            body: "Newspaper **articles** use headlines, bylines, short paragraphs and often balance quotation with commentary. An analytical article may inform, persuade or investigate. When analysing, ask whether the writer's voice is **objective** (reporting) or **subjective** (arguing).",
          },
          {
            heading: "Reviews",
            body: "A **review** evaluates against implicit criteria — does it achieve its purpose? Reviews are opinionated but structured: verdict, evidence, judgement. Analysing a review means assessing both the object and the reviewer's criteria.",
          },
          {
            heading: "Letters and speeches",
            body: "**Letters** have salutation, body, sign-off and a clear relationship between writer and recipient. **Speeches** address an audience directly, use rhetorical devices (repetition, direct address, rhythm) and are shaped by occasion. Each text type has conventions that analysis must respect.",
          },
        ],
        keyFormulas: [
          {
            name: "Text-type checklist",
            statement:
              "Purpose + audience + register + structural conventions = text type",
          },
          {
            name: "Register spectrum",
            statement:
              "Formal (speech, official letter) → neutral (article) → informal (personal letter, blog)",
          },
        ],
        workedExample: {
          problem:
            "A text begins 'Dear Sir or Madam' and ends 'Yours faithfully'. What text type and register?",
          solution:
            "A formal letter — the salutation and sign-off are conventions of formal correspondence; register is impersonal and respectful, suited to an unknown or official recipient.",
        },
      },
      questions: [
        {
          id: "langa-u2-xq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most clearly identifies a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage directions" },
              { id: "b", text: "A headline and byline" },
              { id: "c", text: "Stanzas and rhyme" },
              { id: "d", text: "A salutation and sign-off" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter conventions",
                statement:
                  "Salutation and sign-off are structural markers of correspondence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Salutation ('Dear...') and sign-off ('Yours...') are unique to letters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Salutation and sign-off",
          },
        },
        {
          id: "langa-u2-xq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Review",
            author: "Written for Akademik Space",
            source: "Original theatre review",
            text: "The play opens with such confidence that the second act feels like a different, lesser work — the lighting goes flat, the dialogue loses its edge, and the ending arrives a full minute before we are ready for it.\n\nThat said: the lead performance is worth the ticket alone. She carries the second act on sheer will.",
          },
          stem: "Analyse how this review balances criticism and praise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Review conventions",
                statement:
                  "Reviews judge against criteria, often balancing verdict with qualification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criticism is specific and technical: 'lighting goes flat', 'dialogue loses its edge' — the reviewer diagnoses craft failures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The concession 'That said' pivots to praise — 'worth the ticket alone' is a strong verdict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The balance is honest rather than diplomatic: the reviewer admires the lead while condemning the production's second half — the review's authority comes from not being a simple thumbs-up.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The review earns credibility through specific criticism balanced by a qualified verdict — praise is conditional, not blanket.",
            commonErrors: [
              "Treating the review as simple opinion without analysing its evaluative criteria.",
            ],
          },
        },
        {
          id: "langa-u2-xq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Speech",
            author: "Written for Akademik Space",
            source: "Original speech extract",
            text: "We did not come here to be liked. We came here to be counted. And when the history of this town is written — and it will be written, make no mistake — it will say that we were here, we were few, and we refused to leave.",
          },
          stem: "Analyse the rhetorical techniques in this speech extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Speech rhetoric",
                statement:
                  "Antithesis, direct address and triadic structure are hallmarks of public address.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Antithesis: 'not... to be liked' versus 'to be counted' — the negation sets up a dignified alternative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Anaphora/triadic structure: 'we were here, we were few, and we refused to leave' — three parallel clauses build momentum toward the defiant final phrase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Direct address 'make no mistake' and the future-tense 'it will be written' appeal to posterity — the speech is performed for an audience beyond the room.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effect: the rhetoric converts a small group into a historical force — 'few' becomes a badge of honour through the rhythm of the triad.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Antithesis, triadic anaphora and appeal to posterity turn a small gathering into a claim on history.",
            commonErrors: [
              "Listing rhetorical devices without linking them to the speech's persuasive purpose.",
            ],
          },
        },
        {
          id: "langa-u2-xq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short analytical review (or article paragraph) of the following extract, matching the conventions of the chosen text type.",
          extract: {
            title: "The Crossing",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\n\nI cross it anyway.\nThe toll is one memory\nat a time.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Write the opening paragraph establishing your evaluative stance (2-3 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write the analytical paragraph analysing the central metaphor.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Write the closing verdict (1-2 sentences).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review writing",
                statement:
                  "Opening stance + analytical paragraph + verdict — evaluative, not descriptive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Opening states evaluative stance, e.g. 'The Crossing is a small poem with a large claim: that memory is the price of continuity.' Sets up judgement.",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the river-as-memory metaphor structures the poem — the bridge is rebuilt, but the crossing costs memory.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'The toll is one memory / at a time' — embedded, analysed as the poem's thesis in miniature.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: the carpenters' insistence ('the same') versus the river's transformation enacts the poem's central tension — continuity is asserted but not guaranteed; the toll metaphor makes memory a currency spent on passage.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Verdict gives a final judgement, e.g. 'A poem about the cost of continuity — concise, unsettling, and quietly profound.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Review: stance → analysis of river/bridge/memory metaphor → verdict. Must be evaluative, not paraphrase.",
            commonErrors: [
              "Writing a summary instead of a review; omitting the verdict.",
            ],
          },
        },
        {
          id: "langa-u2-xq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most clearly identifies a newspaper article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A headline and byline" },
              { id: "b", text: "Direct address to an audience" },
              { id: "c", text: "Stanzas and rhyme" },
              { id: "d", text: "A salutation and sign-off" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Article conventions",
                statement: "Headline and byline are journalistic markers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Headlines and bylines belong to journalism, distinguishing articles from letters or speeches.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Headline and byline",
            commonErrors: [
              "Confusing articles with editorials or opinion columns.",
            ],
          },
        },
        {
          id: "langa-u2-xq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Register' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot's setting" },
              { id: "b", text: "The number of paragraphs" },
              { id: "c", text: "The font used in the text" },
              {
                id: "d",
                text: "The degree of formality matched to audience and purpose",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Register",
                statement: "Register is formality level matched to audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Register ranges from formal to informal and signals the writer-recipient relationship.",
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
              "**(b)** Degree of formality matched to audience and purpose",
            commonErrors: [
              "Treating register as decoration rather than a communicative choice.",
            ],
          },
        },
        {
          id: "langa-u2-xq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A review differs from a summary because a review must:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Judge against criteria and deliver a verdict" },
              { id: "b", text: "Retell the whole plot in order" },
              { id: "c", text: "Remain completely objective" },
              { id: "d", text: "Avoid all quotation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Review conventions",
                statement:
                  "Reviews evaluate against implicit criteria and end in judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The review's purpose is evaluative — verdict supported by criteria-based evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Judge against criteria and deliver a verdict",
            commonErrors: ["Writing plot summary and calling it a review."],
          },
        },
        {
          id: "langa-u2-xq8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a typical feature of a speech that an article would lack?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Balanced quotation of sources" },
              { id: "b", text: "Direct address and rhetorical repetition" },
              { id: "c", text: "Short news paragraphs" },
              { id: "d", text: "A byline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Speech conventions",
                statement:
                  "Speeches use direct address and rhetorical devices shaped by occasion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direct address ('we', 'you') and repetition are hallmarks of oral public address.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Direct address and rhetorical repetition",
            commonErrors: [
              "Analysing a speech as if it were a written article.",
            ],
          },
        },
        {
          id: "langa-u2-xq9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An article that quotes many sources but offers no authorial voice is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A personal letter" },
              { id: "b", text: "A poem" },
              { id: "c", text: "Objective/reporting in register" },
              { id: "d", text: "Subjective/arguing in register" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Journalistic voice",
                statement:
                  "Articles range from objective reporting to subjective argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Heavy quotation without commentary signals the reporting/objective pole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Objective/reporting",
            commonErrors: ["Assuming all journalism argues."],
          },
        },
        {
          id: "langa-u2-xq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "'Yours sincerely' versus 'Yours faithfully' signals:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Whether the recipient was named or unknown — register matching",
              },
              { id: "b", text: "The letter's length" },
              { id: "c", text: "The letter's topic" },
              {
                id: "d",
                text: "Whether the letter is formal or informal in all cases",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter conventions",
                statement:
                  "Sign-off choice encodes the writer-recipient relationship.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convention pairs 'Dear Mr X' with 'Yours sincerely' and unnamed recipients with 'Yours faithfully' — the sign-off tracks formality and known-ness.",
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
              "**(b)** Recipient named vs unknown — register matching",
            commonErrors: ["Treating sign-offs as interchangeable."],
          },
        },
        {
          id: "langa-u2-xq11",
          difficulty: "foundation",
          totalMarks: 4,
          extract: {
            title: "Letter",
            author: "Written for Akademik Space",
            source: "Original informal letter",
            text: "Hi Mum,\n\nThe exam went okay — I think. Mr Doyle said my essay 'showed real promise', which is teacher for 'you barely passed'. Don't worry. Love, Jo",
          },
          stem: "Identify the text type and register, and explain two features that reveal them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Text-type identification",
                statement: "Purpose + audience + register + conventions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text type: informal personal letter — 'Hi Mum', 'Love, Jo', direct address to a known recipient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feature 1: register is intimate and playful — 'teacher for you barely passed' shows shared private knowledge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Feature 2: withheld emotion ('Don't worry') and colloquial hedging ('I think', 'okay') create the casual register of family correspondence.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: the gap between 'real promise' and her translation reveals how register carries family intimacy — the joke only works because the reader shares the code.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Informal letter; intimate register; features: 'Hi Mum'/'Love, Jo', private joke, hedging — family code.",
            commonErrors: [
              "Identifying 'letter' but missing the informal register's features.",
            ],
          },
        },
        {
          id: "langa-u2-xq12",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Article",
            author: "Written for Akademik Space",
            source: "Original news article",
            text: "The town council voted 7-2 on Tuesday to close the public library's evening hours, citing budget pressures. 'This is a short-sighted decision,' said local teacher Ana Reyes, who runs the library's homework club. 'For many children, that club is the only quiet room they have.'\n\nThe council defended the move, noting that usage of evening hours had fallen 18% since 2022.",
          },
          stem: "Analyse how this article balances reported speech with the journalist's framing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Journalistic balance",
                statement:
                  "Articles juxtapose quotation and framing commentary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: the article reports both sides — the vote, the teacher's objection, the council's defence — but framing details tilt interpretation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'citing budget pressures' (neutral attribution) versus 'For many children, that club is the only quiet room they have' (quoted human consequence).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: the teacher's quotation is longer, more emotive and placed first — position and length give her the stronger framing; 'only quiet room' appeals to vulnerability.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: the article is nominally balanced (7-2 vote reported, both voices quoted) but structurally weighted — analysis must distinguish report from emphasis.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Quoted voices balanced on surface; framing (quotation order, length, emotive detail) weights the teacher's side — balance is structural, not equal.",
            commonErrors: [
              "Assuming quotation of both sides equals neutrality.",
            ],
          },
        },
        {
          id: "langa-u2-xq13",
          difficulty: "core",
          totalMarks: 6,
          extract: {
            title: "Speech (extract)",
            author: "Written for Akademik Space",
            source: "Original speech extract",
            text: "Friends, neighbours, people of this valley —\nWe have waited long enough.\nLong enough for promises.\nLong enough for studies.\nLong enough for the rain to do our work for us.\nTonight, we begin.",
          },
          stem: "Analyse the rhetorical structure of this speech's opening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Speech rhetoric",
                statement:
                  "Direct address, anaphora and climax build persuasive momentum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: the opening constructs impatience through accumulated repetition — 'Long enough' becomes a drumbeat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence: 'Friends, neighbours, people of this valley' — triple direct address; 'Long enough for...' repeated three times; 'Tonight, we begin' as two-word climax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis: the anaphora escalates from abstract ('promises', 'studies') to natural ('the rain') — the speaker claims even nature has failed them, justifying action.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance: 'we begin' converts complaint into collective agency — the speech's purpose is mobilisation, and the rhythm performs the urgency it describes.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Triple address + anaphora of 'Long enough' escalates grievance; two-word climax 'we begin' converts complaint to mobilisation.",
            commonErrors: [
              "Listing devices without linking them to the speech's persuasive purpose.",
            ],
          },
        },
        {
          id: "langa-u2-xq14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short analytical review paragraph (stance, evidence, verdict) of the following poem.",
          extract: {
            title: "The Ferry",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The ferry crosses at first light\nand the river keeps its own hours —\nit arrives when it arrives.\nWe stand on the deck pretending\nto read the timetable\nof a river that was never scheduled.",
          },
          parts: [
            {
              label: "a",
              prompt: "Write the opening stance (2 sentences).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write the analytical paragraph on the river/timetable conceit.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Write the closing verdict (1-2 sentences).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review writing",
                statement:
                  "Stance + analysis + verdict — evaluative throughout.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Stance states judgement, e.g. 'A small poem with a large patience: the river's unscheduled arrivals become a figure for living without guarantees.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point: the timetable conceit figures human impatience against natural rhythm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'keeps its own hours', 'arrives when it arrives', 'pretending / to read the timetable', 'never scheduled'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: 'pretending' exposes the passengers' self-deception — the timetable is a fiction of control; 'never scheduled' makes the river absolute in its freedom, and the poem's quiet irony is that we board anyway.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Verdict gives final judgement, e.g. 'Concise, unhurried, quietly profound — a poem about waiting well.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stance → timetable/river analysis → verdict; must be evaluative, not paraphrase.",
            commonErrors: [
              "Describing the ferry scene without evaluative stance or verdict.",
            ],
          },
        },
        {
          id: "langa-u2-xq15",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Notice",
            author: "Written for Akademik Space",
            source: "Original public notice",
            text: "NOTICE: The swimming pool will be closed on Thursday for essential maintenance. We apologise for any inconvenience. Regular service resumes Friday at 6 a.m. — the management.",
          },
          parts: [
            {
              label: "a",
              prompt: "Identify the text type and its conventions.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Analyse how the impersonal register serves the notice's purpose.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether 'We apologise for any inconvenience' is effective — is formulaic apology adequate here?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Text-type analysis",
                statement: "Purpose + audience + register + conventions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Public notice — conventions: heading 'NOTICE', factual announcement, dates/times, anonymous institutional sign-off 'the management'.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point: the impersonal register ('will be closed', 'essential maintenance', 'the management') constructs institutional authority — no individual is responsible or reachable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis: 'We apologise' briefly breaks the impersonal frame with first-person plural — a conventional courtesy that acknowledges inconvenience without accepting blame; 'any inconvenience' minimises by abstraction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Effect: the register serves the purpose — efficient information delivery to an anonymous public; accountability is deliberately diffuse.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Verdict: formulaic but adequate for the genre — a notice needs information, not empathy; the apology's vagueness ('any') is characteristic of institutional language.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Public notice with institutional conventions. (b) Impersonal register = diffuse authority, 'any inconvenience' minimises. (c) Formulaic apology adequate for genre.",
            commonErrors: ["Treating the notice as a letter or article."],
          },
        },
        {
          id: "langa-u2-xq16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a complete analytical review plan (stance, two analytical points with evidence, verdict) for the following text.",
          extract: {
            title: "The Crossing (extract)",
            author: "Revisit from Lesson 2-3",
            source: "Original poem",
            text: "The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\n\nI cross it anyway.\nThe toll is one memory\nat a time.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "Write the opening stance (evaluative claim about the poem).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write two analytical points, each with embedded evidence and technique.",
              marks: 4,
            },
            { label: "c", prompt: "Write the closing verdict.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review structure",
                statement: "Stance + analytical points + verdict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Stance example: 'The Crossing compresses a large argument into eight lines — that continuity is purchased, not given.'",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point 1: the river/bridge transformation — 'took... gave it back', 'a different bridge' — personification makes change look like return.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 1 analysis: the carpenters' insistence ('it is the same') versus the poem's own 'they say' creates competing authorities — identity is asserted, not proven.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Point 2: the toll metaphor — 'The toll is one memory / at a time' — makes memory a currency spent per crossing; 'I cross it anyway' adds chosen endurance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Point 2 analysis: the toll figure converts the abstract (memory) into the economic (payment) — continuity literally costs the self.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Verdict gives final evaluative judgement, e.g. 'A poem about the price of continuity — concise, unsettling, quietly profound.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stance on continuity-as-purchase; points on river conceit and toll metaphor; verdict must be evaluative.",
            commonErrors: [
              "Points that paraphrase the poem without evaluative framing.",
            ],
          },
        },
      ],
    },
    {
      id: "langa-u2-timed-writing",
      title: "Timed writing strategy",
      skill:
        "Plan, write and check an analytical response within a fixed time limit.",
      lesson: {
        sections: [
          {
            heading: "The exam clock",
            body: "For a timed analytical essay (typically 45-60 minutes), allocate roughly: **10% planning** (thesis + paragraph skeleton), **75% writing**, **15% checking**. Planning prevents the fatal error of discovering your thesis in paragraph three.",
          },
          {
            heading: "Planning fast",
            body: "Write the thesis first — even a rough one — then three topic sentences. If time runs short, you can still produce a coherent essay. Never start writing without a thesis; you will have to backtrack and lose marks.",
          },
          {
            heading: "Checking efficiently",
            body: "In the final minutes, check: thesis present? Paragraphs ordered logically? Evidence embedded (not dumped)? Conclusion resolves rather than repeats? Fix errors of **meaning** before errors of grammar — a missing thesis costs more than a comma.",
          },
        ],
        keyFormulas: [
          { name: "Time split", statement: "10% plan + 75% write + 15% check" },
          {
            name: "Priority check",
            statement:
              "Thesis → paragraph order → evidence → conclusion → grammar",
          },
        ],
        workedExample: {
          problem:
            "You have 45 minutes for an essay. How should you allocate time?",
          solution:
            "Plan 5 minutes (thesis + 3 topic sentences), write 32 minutes, check 8 minutes — prioritising thesis presence and paragraph logic over surface errors.",
        },
      },
      questions: [
        {
          id: "langa-u2-tq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you write first when starting a timed analytical essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A thesis statement" },
              { id: "b", text: "The conclusion" },
              { id: "c", text: "The introduction's first sentence" },
              { id: "d", text: "The first body paragraph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed planning",
                statement:
                  "Thesis first — it controls everything that follows.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The thesis determines the essay's direction; write it before anything else.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A thesis statement",
          },
        },
        {
          id: "langa-u2-tq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why checking for a thesis and paragraph logic should take priority over grammar in the final minutes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking priorities",
                statement:
                  "Structural errors cost more marks than surface errors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A missing or unclear thesis means the essay has no argument — the examiner cannot award marks for analysis that doesn't serve a claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Illogical paragraph order breaks the cumulative argument — the essay becomes a list.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Grammar errors, while undesirable, do not prevent the examiner from following the argument; structural failures do.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Structural coherence determines whether analysis can be rewarded at all; grammar is a surface refinement.",
            commonErrors: [
              "Spending final minutes on punctuation while the thesis is missing.",
            ],
          },
        },
        {
          id: "langa-u2-tq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You have 40 minutes to write an analytical essay on a poem you have not seen. Outline your time plan and first three actions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed strategy",
                statement:
                  "Plan before writing; thesis before introduction; evidence before elaboration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Time plan: 4 minutes reading + planning, 30 minutes writing, 6 minutes checking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "First action: read the poem twice — once for sense, once annotating devices, imagery and structural turns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second action: write a thesis — even a provisional one — identifying the poem's central tension or concern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Third action: draft three topic sentences that build the argument cumulatively; if time runs short, the skeleton still produces a coherent essay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "4/30/6 split; read twice, thesis, three topic sentences — structure first, prose second.",
            commonErrors: [
              "Starting to write before reading carefully or planning.",
            ],
          },
        },
        {
          id: "langa-u2-tq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a timed essay (45 minutes) on the following extract, including time allocation and a paragraph-by-paragraph outline.",
          extract: {
            title: "The Crossing (extract)",
            author: "Revisit from Lesson 2-3",
            source: "Original poem",
            text: "The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\n\nI cross it anyway.\nThe toll is one memory\nat a time.",
          },
          parts: [
            {
              label: "a",
              prompt: "Give your time allocation for 45 minutes.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write a thesis and three topic sentences.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "List the three most important checks for the final 5 minutes.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed essay plan",
                statement:
                  "Time split + thesis + cumulative topic sentences + priority checks.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "~5 minutes reading/planning, ~32 minutes writing, ~8 minutes checking — or similar justified split.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Time allocation is realistic and reserves checking time.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Thesis example: 'The poem figures continuity as a transaction — the bridge is rebuilt but memory is the toll, and the speaker pays willingly because crossing is still necessary.'",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1 topic sentence: the river's transformation ('took... gave it back') establishes change disguised as return.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2 topic sentence: the carpenters' insistence versus the river's difference — competing claims about identity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P3 topic sentence: 'I cross it anyway' — the speaker chooses continuity despite knowing it is different; the toll metaphor makes memory the currency of passage.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Check 1: thesis present and arguable; Check 2: paragraphs in cumulative order; Check 3: evidence embedded and analysed, conclusion resolves.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Plan: 5/32/8. Thesis: continuity as transaction. P1 change-as-return, P2 identity dispute, P3 chosen crossing. Checks: thesis, order, evidence+conclusion.",
            commonErrors: [
              "No time reserved for checking; topic sentences that are plot summaries.",
            ],
          },
        },
        {
          id: "langa-u2-tq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a 45-minute timed essay, roughly how much time should planning take?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 5 minutes (roughly 10%)" },
              { id: "b", text: "About 2 minutes" },
              { id: "c", text: "About 20 minutes" },
              { id: "d", text: "No planning time is needed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "~10% plan, ~75% write, ~15% check.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ten percent of 45 minutes is about 4-5 minutes — enough for thesis plus topic sentences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** About 5 minutes (~10%)",
            commonErrors: ["Skipping planning entirely or over-planning."],
          },
        },
        {
          id: "langa-u2-tq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When checking a timed essay, which should be fixed first?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Whether the thesis is present and paragraphs are logically ordered",
              },
              { id: "b", text: "Spelling of difficult words" },
              { id: "c", text: "Comma placement" },
              { id: "d", text: "Capital letters" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking priorities",
                statement: "Meaning before mechanics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structural failures cost more marks than surface errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Thesis presence and paragraph logic",
            commonErrors: [
              "Polishing grammar while the argument is incoherent.",
            ],
          },
        },
        {
          id: "langa-u2-tq7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why write the thesis before the introduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because examiners only read the thesis" },
              { id: "b", text: "Because it saves time on evidence" },
              {
                id: "c",
                text: "Because the thesis controls everything that follows — writing it first prevents backtracking",
              },
              {
                id: "d",
                text: "Because introductions are always written last",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed planning",
                statement: "Thesis first — it controls the essay's direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A thesis written mid-essay forces reordering of everything already written.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The thesis controls everything that follows",
            commonErrors: ["Discovering the argument in paragraph three."],
          },
        },
        {
          id: "langa-u2-tq8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If time runs short mid-essay, the safest fallback is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write only a conclusion" },
              { id: "b", text: "Stop and hand in" },
              { id: "c", text: "Abandon the essay and start over" },
              {
                id: "d",
                text: "Continue with planned topic sentences, even briefly developed",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed strategy",
                statement: "A skeleton plan still produces a coherent essay.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Topic sentences preserve the argument's shape even when development is cut short.",
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
              "**(b)** Continue with planned topic sentences, briefly developed",
            commonErrors: [
              "Panicking and abandoning structure under time pressure.",
            ],
          },
        },
        {
          id: "langa-u2-tq9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which use of checking time is most efficient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reread the whole essay slowly" },
              { id: "b", text: "Check only the last paragraph" },
              {
                id: "c",
                text: "Check thesis, paragraph order, evidence, conclusion in that priority order",
              },
              { id: "d", text: "Check spelling word by word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking priorities",
                statement: "Thesis → order → evidence → conclusion → grammar.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prioritised checking fixes the costliest errors first within limited minutes.",
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
              "**(b)** Thesis, order, evidence, conclusion — in priority order",
            commonErrors: ["Spending check time on low-cost errors first."],
          },
        },
        {
          id: "langa-u2-tq10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The biggest risk of starting to write before planning is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using too much evidence" },
              { id: "b", text: "Writing too quickly" },
              {
                id: "c",
                text: "Discovering the thesis in paragraph three and having to backtrack",
              },
              { id: "d", text: "Choosing a difficult text" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed planning",
                statement: "No planning = discovering the argument too late.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without a thesis first, early paragraphs may argue against the eventual claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Discovering the thesis late and backtracking",
            commonErrors: ["Treating the first paragraph as disposable."],
          },
        },
        {
          id: "langa-u2-tq11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "You have 30 minutes for a timed analytical paragraph. Allocate your time and state your first action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time allocation",
                statement: "Plan before writing; check before finishing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Time plan: ~3 minutes reading/annotating, ~22 minutes writing, ~5 minutes checking — or equivalent justified split.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "First action: annotate the extract for specific, unexpected details — candidate evidence before choosing the point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second action: write the point/topic sentence first so evidence and analysis have a target.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "~3/22/5 split; first annotate for evidence, then write the point before quoting.",
            commonErrors: [
              "Starting to quote before deciding the paragraph's point.",
            ],
          },
        },
        {
          id: "langa-u2-tq12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain the difference between a 'checking' pass and an 'editing' pass, and why timed writing prioritises checking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Checking priorities",
                statement: "Check structure and meaning before style.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Checking verifies presence and logic: thesis exists, paragraphs ordered, evidence analysed, conclusion resolves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Editing refines expression: word choice, sentence variety, style — improvements that assume the argument already works.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Timed writing prioritises checking because structural gaps cannot be fixed by polish — a missing thesis or dumped evidence costs more marks than weak phrasing.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "The 15% check budget is best spent on the highest-cost items first: thesis → order → evidence → conclusion → grammar.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Checking = verifying structure/meaning; editing = refining style. Timed checking prioritises because argument-level faults cost the most marks.",
            commonErrors: [
              "Using final minutes for stylistic rewrites while the thesis is absent.",
            ],
          },
        },
        {
          id: "langa-u2-tq13",
          difficulty: "core",
          totalMarks: 6,
          extract: {
            title: "The Window (extract)",
            author: "Revisit from Lesson 2-1",
            source: "Original prose extract",
            text: "He cleaned the window until it disappeared — no smears, no breath, no trace of his own hand. Outside, the street looked more real than the room. He sat down and waited for the glass to remember him.",
          },
          stem: "Plan a timed paragraph (5 minutes planning): give the point, two pieces of evidence, and the significance you will reach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fast planning",
                statement: "Point + evidence + target significance in minutes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point example: 'The window-cleaning enacts self-erasure — the man removes every sign he was there.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence 1: 'until it disappeared' and 'no smears, no breath, no trace of his own hand' — the triple 'no' inventory of absence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence 2: 'waited for the glass to remember him' — personification reversing who perceives whom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis direction: the 'no' list builds erasure; 'remember' makes identity depend on reflection.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Significance target: self survives only as image — the room is negated ('more real' outside), so he exists where he is not.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Plan completes point + evidence + significance in under five minutes — structure secured before prose begins.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Point on self-erasure; 'no' list + 'remember' personification; significance: identity as reflection only.",
            commonErrors: [
              "Planning quotations without deciding what they will prove.",
            ],
          },
        },
        {
          id: "langa-u2-tq14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You have 40 minutes for an unseen poem essay. Give your minute-by-minute plan for the first 10 minutes and justify the split.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed strategy",
                statement:
                  "Front-load structure; protect writing and checking time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Minutes 0-3: read twice — sense, then annotate devices, imagery, structural turns, tone shifts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Minutes 3-6: write thesis (even provisional) and three topic sentences — the essay's skeleton.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Minutes 6-8: select evidence per paragraph — short phrases only; note line numbers or keywords.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Minutes 8-10: sequence check — confirm paragraphs build cumulatively; adjust order before writing.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Justification: structure decided before prose means writing time produces argument, not discovery; remaining ~30 min writes, ~5-6 checks.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "The plan banks a coherent essay early — even if writing is cut short, thesis + topic sentences survive.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "0-3 read/annotate, 3-6 thesis+topics, 6-8 evidence, 8-10 sequence; justification: bank structure first.",
            commonErrors: [
              "Spending planning time re-reading instead of deciding.",
            ],
          },
        },
        {
          id: "langa-u2-tq15",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The Orchard (extract)",
            author: "Revisit from Lesson 1-3",
            source: "Original poem",
            text: "My grandfather kept an orchard\nof apples that never fruited —\nhe said he was saving them\nfor a famine that never came.\n\nHe pruned them anyway,\npatient as penance,\nconvinced that beauty\nis its own harvest.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "You have 8 minutes to plan. Write the thesis and three topic sentences only.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "List the four checks you will perform in the final 5 minutes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed planning",
                statement: "Thesis + topic sentences + priority checks.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'The poem figures futile labour as devotion — beauty, pruned patiently, becomes its own harvest.'",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "P1: 'never fruited', 'never came' — doubled negation grounds the poem in futility.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "P2: 'patient as penance' — labour sanctified into discipline.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "P3: 'beauty / is its own harvest' — the aphorism redefines harvest; ambiguity is the point.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Checks: thesis present and arguable; paragraphs cumulative; evidence embedded and analysed; conclusion resolves.",
                marks: 3,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Thesis + 3 topic sentences as above. (b) Four priority checks: thesis, order, evidence, conclusion.",
            commonErrors: [
              "Spending the 8 minutes drafting prose instead of banking the skeleton.",
            ],
          },
        },
        {
          id: "langa-u2-tq16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a complete timed-writing plan (time allocation, thesis, three topic sentences, check priorities) for a 45-minute essay on the following extract.",
          extract: {
            title: "The Suitcase (extract)",
            author: "Revisit from Lesson 2-2",
            source: "Original prose extract",
            text: "She had packed for a life she was not leaving. Three pairs of shoes, none of them comfortable for walking. A photograph of a place she had never been. At the bottom, wrapped in a scarf, the letter she had decided not to send.",
          },
          parts: [
            {
              label: "a",
              prompt: "Give your time allocation for 45 minutes.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write a thesis and three cumulative topic sentences.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "List the three highest-priority checks for the final minutes.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timed essay plan",
                statement:
                  "Time split + thesis + cumulative topics + priority checks.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "~5 minutes reading/planning, ~32 minutes writing, ~8 minutes checking — or justified equivalent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Allocation reserves real checking time and front-loads structure.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Thesis example: 'The suitcase figures departure as rehearsal for a leaving already cancelled — every object is packed for a life un-lived.'",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "P1: opening contradiction plus 'none comfortable for walking' — preparation without conviction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P2: 'a photograph of a place she had never been' — futures, not memories, in the bag.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "P3: 'wrapped in a scarf, the letter she had decided not to send' — hidden confession completes the rehearsal pattern.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Checks: thesis present and arguable; paragraph order cumulative; evidence embedded and analysed, conclusion resolves (grammar last).",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "5/32/8 split; thesis on cancelled departure; P1 inconsequential packing, P2 futures-not-memories, P3 hidden letter; priority checks listed.",
            commonErrors: [
              "No checking reserve; topic sentences that list objects rather than argue.",
            ],
          },
        },
      ],
    },
  ],
};
