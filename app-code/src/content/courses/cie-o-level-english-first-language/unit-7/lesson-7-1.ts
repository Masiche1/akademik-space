import type { Lesson } from "../../../types.ts";

export const lesson171: Lesson = {
  id: "cie-ol-fl-lesson-7-1",
  code: "7-1",
  title: "Sentence craft",
  goal: "I CAN use varied sentence structures and accurate punctuation to control meaning and pace.",
  standards: ["1119 Writing: grammar and punctuation"],
  vocabulary: [
    { term: "Simple sentence", definition: "One independent clause." },
    {
      term: "Compound sentence",
      definition:
        "Two independent clauses joined by a conjunction or semicolon.",
    },
    {
      term: "Complex sentence",
      definition: "An independent clause plus one or more dependent clauses.",
    },
    {
      term: "Sentence fragment",
      definition: "An incomplete sentence missing a subject or verb.",
    },
    {
      term: "Comma splice",
      definition: "Two independent clauses joined by only a comma.",
    },
    {
      term: "Fronted adverbial",
      definition:
        "An opening phrase of time/place/manner, usually followed by a comma.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-sentence-variety",
      title: "Sentence variety",
      skill:
        "Combine simple sentences into compound and complex structures for control and pace.",
      lesson: {
        sections: [
          {
            heading: "Three sentence types",
            body: "Simple: 'The rain stopped.' Compound: 'The rain stopped, and the street steamed.' Complex: 'When the rain stopped, the street steamed.' Vary types deliberately — all simple reads choppy; all complex reads slow and tangled.",
          },
          {
            heading: "Joining sentences",
            body: "Use conjunctions (and, but, so, because, although) to create compound or complex sentences. Use relative clauses ('the book that I lost') to add information without a new sentence. Avoid comma splices — fix them with a conjunction, semicolon or full stop.",
          },
          {
            heading: "Pace through length",
            body: "Short sentences create urgency or emphasis: 'He ran.' Longer, layered sentences slow the reader and build atmosphere. Match length to moment — action scenes favour short; reflection favours long.",
          },
        ],
        keyFormulas: [
          {
            name: "Sentence variety",
            statement: "Simple+compound+complex=controlled pace and clarity.",
          },
        ],
        workedExample: {
          problem:
            "Combine: 'The bell rang. The class fell silent. The teacher smiled.'",
          solution:
            "'When the bell rang, the class fell silent, and the teacher smiled.' — one complex-compound sentence uniting the moment.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-sv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a sentence 'complex'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An independent clause plus a dependent clause",
              },
              { id: "b", text: "A very long sentence" },
              { id: "c", text: "Two independent clauses" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complex sentence",
                statement: "Main clause + subordinate/dependent clause(s).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complexity = dependent clause added to main clause.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Independent + dependent clause",
            commonErrors: ["Confusing complex with compound."],
          },
        },
        {
          id: "cie-ol-fl-sv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Combine into one complex sentence: 'She finished the race. She was exhausted.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence combining",
                statement:
                  "Subordinating conjunctions or participles merge clauses while showing logical relation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify the relation: exhaustion is a result or accompaniment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Combine using 'although/when/and'-type linkage, e.g. 'Although exhausted, she finished the race.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Grammatically correct single sentence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "e.g. 'Although she was exhausted, she finished the race.'",
            commonErrors: [
              "Comma splice: 'She finished the race, she was exhausted.'",
            ],
          },
        },
        {
          id: "cie-ol-fl-sv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might a writer deliberately use a series of short sentences?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Short sentences",
                statement:
                  "Brief sentences accelerate pace and create emphasis or tension.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each short sentence lands as a beat — creating rhythm and urgency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "They suit action, crisis or realisation moments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Overuse becomes monotonous; contrast with longer sentences heightens effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect explained, not just stated.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Short sentences create pace, emphasis and tension — best used in contrast.",
            commonErrors: ["Claiming short sentences are 'bad grammar'."],
          },
        },
        {
          id: "cie-ol-fl-sv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sentence craft.",
          parts: [
            {
              label: "a",
              prompt: "Define compound and complex sentences.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Correct the comma splice: 'The door opened, nobody was there.'",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Combine: 'The sun rose. The birds sang. She woke.'",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain when a writer should use short sentences.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence craft",
                statement: "Types+punctuation+combining+effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Compound = two independent clauses; complex = main + dependent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Both definitions correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Fix with conjunction/semicolon/full stop, e.g. 'The door opened, but nobody was there.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Grammatically correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "One combined sentence attempted, e.g. 'When the sun rose and the birds sang, she woke.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Logical link chosen sensibly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Grammatically correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Short sentences suit urgency, action, emphasis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Links to pace and contrast with longer sentences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Nuanced explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two clause types (b) fixed splice (c) combined sentence (d) short=pace/emphasis",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Definitions.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Wrong/none.",
                part: "a",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Splice fixed.",
                part: "b",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Unfixed.",
                part: "b",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Logical combination.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Effect explained.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Comma splices and run-on sentences."],
          },
        },
        {
          id: "cie-ol-fl-sv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a complex sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was late, she kept working." },
              { id: "b", text: "It was late; she kept working." },
              { id: "c", text: "It was late and she kept working." },
              { id: "d", text: "Although it was late, she kept working." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complex sentence", statement: "Independent clause plus dependent clause(s)." },
            ],
            steps: [
              { reasoning: "Only (a) contains a dependent clause opened by 'although'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Although it was late, she kept working.",
            commonErrors: ["Choosing (b) or (c) — those are compound sentences."],
          },
        },
        {
          id: "cie-ol-fl-sv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a sentence fragment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence fragment", statement: "An incomplete sentence missing a subject or a main verb." },
            ],
            steps: [
              { reasoning: "Fragment = incomplete; lacks subject or verb, e.g. 'Running down the street.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "An incomplete sentence missing a subject or a main verb.",
            commonErrors: ["Calling any short sentence a fragment."],
          },
        },
        {
          id: "cie-ol-fl-sv-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Combine into one sentence: 'The match ended. We went home. We were exhausted.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence combining", statement: "Subordinating or coordinating links merge clauses and show logical relation." },
            ],
            steps: [
              { reasoning: "Choose a link showing the relation, e.g. 'when' or 'and'.", marks: 1, markCode: "AO2" },
              { reasoning: "Result is one grammatically correct sentence.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'When the match ended, we went home exhausted.'",
            commonErrors: ["Leaving two sentences or creating a comma splice."],
          },
        },
        {
          id: "cie-ol-fl-sv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'run-on sentence' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sentence missing a verb" },
              { id: "b", text: "Any sentence that is very long" },
              { id: "c", text: "Independent clauses joined with no punctuation or conjunction" },
              { id: "d", text: "Two clauses correctly joined by a semicolon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Run-on sentence", statement: "Independent clauses fused with no punctuation or linking word." },
            ],
            steps: [
              { reasoning: "Run-on = clauses fused together with no punctuation or conjunction.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Independent clauses joined with no punctuation or conjunction",
            commonErrors: ["Confusing a run-on with a comma splice."],
          },
        },
        {
          id: "cie-ol-fl-sv-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can a writer use sentence length to control pace?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence length and pace", statement: "Short sentences accelerate; long sentences slow and layer." },
            ],
            steps: [
              { reasoning: "Short sentences create speed, urgency or emphasis.", marks: 1, markCode: "AO2" },
              { reasoning: "Long, layered sentences slow the reader and build atmosphere.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Short sentences speed the pace and add emphasis; long sentences slow it and build atmosphere — vary them deliberately.",
            commonErrors: ["Claiming length has no effect on meaning."],
          },
        },
        {
          id: "cie-ol-fl-sv-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Combine into one complex-compound sentence: 'The storm began. The power failed. We lit candles.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complex-compound combining", statement: "Merge clauses using subordination plus coordination in one sentence." },
            ],
            steps: [
              { reasoning: "Identify the causal link between storm/power failure.", marks: 1, markCode: "AO2" },
              { reasoning: "Combine with a subordinating and coordinating link, e.g. 'When the storm began and the power failed, we lit candles.'", marks: 1, markCode: "AO2" },
              { reasoning: "Single grammatically correct sentence.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'When the storm began and the power failed, we lit candles.'",
            commonErrors: ["Producing two separate sentences or a comma splice."],
          },
        },
        {
          id: "cie-ol-fl-sv-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which revision correctly fixes the comma splice 'I wanted to go, I was too tired'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I wanted to go I was too tired." },
              { id: "b", text: "I wanted to go, but I was too tired." },
              { id: "c", text: "I wanted to go, I was too tired." },
              { id: "d", text: "I wanted to go; but I was too tired." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fixing comma splices", statement: "Use a conjunction, semicolon (without conjunction) or full stop." },
            ],
            steps: [
              { reasoning: "Only (a) adds a conjunction without breaking punctuation rules.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** I wanted to go, but I was too tired.",
            commonErrors: ["Choosing (d) — a semicolon cannot be followed by 'but'."],
          },
        },
        {
          id: "cie-ol-fl-sv-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A writer uses three short sentences followed by one long sentence. Explain the likely effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Short-long contrast", statement: "A run of short sentences builds rhythm, then a long sentence releases or deepens it." },
            ],
            steps: [
              { reasoning: "Short sentences build tension or pace like beats.", marks: 1, markCode: "AO2" },
              { reasoning: "The long sentence contrasts, slowing the reader for reflection or detail.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect on reader response explained, not just described.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The short sentences build urgency and rhythm; the long sentence slows the pace, creating contrast that heightens the moment.",
            commonErrors: ["Describing structure without explaining effect."],
          },
        },
        {
          id: "cie-ol-fl-sv-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how sentence variety shapes meaning in: 'He ran. He jumped. He caught the ball. As the crowd erupted around him, he raised his arms and smiled.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence variety", statement: "Short sentences accelerate action; the final complex sentence slows and celebrates it." },
            ],
            steps: [
              { reasoning: "Three short sentences mirror the speed of the action.", marks: 1, markCode: "AO2" },
              { reasoning: "The long final sentence slows the pace at the moment of triumph.", marks: 1, markCode: "AO2" },
              { reasoning: "Variety creates rhythm matching the emotional arc.", marks: 1, markCode: "AO2" },
              { reasoning: "Analysis links structure to meaning coherently.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Short sentences mirror the speed of the chase; the long complex sentence slows the moment of triumph, so variety mirrors the emotional arc.",
            commonErrors: ["Identifying sentence types without linking to effect."],
          },
        },
        {
          id: "cie-ol-fl-sv-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Sentence types and correction.",
          parts: [
            { label: "a", prompt: "Distinguish between a compound and a complex sentence.", marks: 2 },
            { label: "b", prompt: "Correct the run-on: 'We missed the bus we walked home instead.'", marks: 2 },
            { label: "c", prompt: "Combine: 'The film ended. The credits rolled. People left.'", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence types and correction", statement: "Compound = two independent clauses; complex = main + dependent; fix fusions; combine logically." },
            ],
            steps: [
              { part: "a", reasoning: "Compound = two independent clauses joined by conjunction/semicolon.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Complex = independent clause plus dependent clause.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Fix with punctuation/link, e.g. 'We missed the bus, so we walked home instead.'", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Grammatically correct single result.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Combined sentence attempted, e.g. 'When the film ended and the credits rolled, people left.'", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Grammatically correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) compound=two main clauses; complex=main+dependent (b) fixed run-on (c) combined sentence",
            levels: [
              { level: "Level 2", marks: "2", descriptor: "Both types correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Confused.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Run-on fixed.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Unfixed.", part: "b" },
              { level: "Level 2", marks: "2", descriptor: "Combined correctly.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Uncombined.", part: "c" },
            ],
            commonErrors: ["Confusing compound and complex sentences."],
          },
        },
        {
          id: "cie-ol-fl-sv-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might you vary sentence structure when writing a description of a busy market?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Varied structure for description", statement: "Mix simple, compound and complex sentences to match sensory detail and pace." },
            ],
            steps: [
              { reasoning: "Short sentences for sudden sights, sounds or actions.", marks: 1, markCode: "AO2" },
              { reasoning: "Longer sentences for layered description of atmosphere.", marks: 1, markCode: "AO2" },
              { reasoning: "Relative clauses add detail without breaking flow.", marks: 1, markCode: "AO2" },
              { reasoning: "Link between structure and effect on reader.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Use short sentences for sharp details and action, longer layered sentences for atmosphere, and relative clauses to weave description together.",
            commonErrors: ["Writing every sentence in the same pattern."],
          },
        },
        {
          id: "cie-ol-fl-sv-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Comprehensive sentence-craft practice.",
          parts: [
            { label: "a", prompt: "Name three ways to join two simple sentences.", marks: 2 },
            { label: "b", prompt: "Correct: 'She sings she dances she acts.'", marks: 2 },
            { label: "c", prompt: "Explain why comma splices weaken writing.", marks: 2 },
            { label: "d", prompt: "Analyse how short and long sentences create pace in a narrative you know.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence craft", statement: "Joining devices, splice errors, pace control." },
            ],
            steps: [
              { part: "a", reasoning: "Conjunctions, semicolons or relative clauses.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Three valid methods named.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Corrected, e.g. 'She sings, dances and acts.'", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Grammatically correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Comma splice joins clauses illegally, confusing the reader.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Signals weak grammatical control.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Short and long sentences identified in the narrative.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Pace effect of each explained.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Analysis coherent and supported.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) conjunctions/semicolons/relative clauses (b) fixed (c) splices confuse+signal weak control (d) length controls pace",
            levels: [
              { level: "Level 2", marks: "2", descriptor: "Three methods.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Corrected.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Unfixed.", part: "b" },
              { level: "Level 2", marks: "2", descriptor: "Reason explained.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "3", descriptor: "Strong analysis.", part: "d" },
              { level: "Level 2", marks: "2", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0-1", descriptor: "Descriptive only.", part: "d" },
            ],
            commonErrors: ["Leaving run-ons and comma splices uncorrected."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-punctuation",
      title: "Punctuation and sentence accuracy",
      skill:
        "Use punctuation correctly to control meaning and clarify sentences.",
      lesson: {
        sections: [
          {
            heading: "Core punctuation",
            body: "Full stops end statements; question marks end questions; exclamation marks show strong feeling (use sparingly). Commas separate clauses, items in lists, and after fronted adverbials. Apostrophes show possession or contraction — never plurals.",
          },
          {
            heading: "Semicolons and colons",
            body: "A semicolon joins two closely related independent clauses or separates complex list items. A colon introduces a list, explanation or quotation. Dashes add emphasis or interruption; brackets add supplementary information.",
          },
          {
            heading: "Common errors",
            body: "Watch for: apostrophe misuse ('its' vs 'it's', 'students'' vs 'students'), comma splices, missing commas after openers, and over-punctuation that fragments meaning. Accuracy in punctuation signals control.",
          },
        ],
        keyFormulas: [
          {
            name: "Punctuation control",
            statement: "Correct marks+appropriate variety=clarity and polish.",
          },
        ],
        workedExample: {
          problem: "Fix: 'the dogs tail wagged its was happy'.",
          solution:
            "'The dog's tail wagged; it was happy.' — apostrophe for possession, semicolon joining related clauses.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pun-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should an apostrophe be used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make words plural" },
              { id: "b", text: "At the end of every sentence" },
              { id: "c", text: "To show emphasis" },
              { id: "d", text: "For possession or contraction, not plurals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Apostrophe",
                statement:
                  "Marks possession or missing letters in contractions — never plural nouns.",
              },
            ],
            steps: [
              {
                reasoning: "Plurals never take apostrophes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Possession or contraction",
            commonErrors: ["Writing 'student's' for plural students."],
          },
        },
        {
          id: "cie-ol-fl-pun-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between 'its' and 'it's'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "its vs it's",
                statement: "'Its' = possessive; 'it's' = 'it is'.",
              },
            ],
            steps: [
              {
                reasoning: "'Its' shows belonging: 'the dog wagged its tail'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "'It's' expands to 'it is': 'it's raining'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "its=possessive; it's=it is.",
            commonErrors: ["Using 'it's' for possession."],
          },
        },
        {
          id: "cie-ol-fl-pun-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the function of a semicolon and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semicolon",
                statement:
                  "Joins closely related independent clauses or separates complex list items.",
              },
            ],
            steps: [
              {
                reasoning: "Links two complete thoughts of equal weight.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Signals a closer relationship than a full stop but less abrupt than 'and'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example provided, e.g. 'She studied hard; she deserved the result.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate function and usage.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Semicolon joins related independent clauses — 'She studied; she passed.'",
            commonErrors: [
              "Using semicolon before a dependent clause or in a simple list.",
            ],
          },
        },
        {
          id: "cie-ol-fl-pun-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Punctuation and sentence accuracy.",
          parts: [
            {
              label: "a",
              prompt:
                "Correct: 'the students books were left in the classroom'",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Correct: 'its a beautiful day isnt it'",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain comma use after fronted adverbials.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Punctuate: 'when she arrived everyone clapped'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation",
                statement: "Apostrophes+commas+adverbials=accurate sentences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'The students' books were left in the classroom.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Correct possessive apostrophe.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "'It's a beautiful day, isn't it?'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "'It's' = it is; comma before tag.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Question mark correct.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Comma marks the boundary between opener and main clause.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Improves clarity and prevents misreading.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "'When she arrived, everyone clapped.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Comma after fronted clause.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Capitalisation and full stop.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) students' (b) It's...isn't it? (c) boundary comma (d) When she arrived, everyone clapped.",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Corrected.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Fully corrected.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Rule explained.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Punctuated correctly.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: [
              "Apostrophe for plurals and missing commas after openers.",
            ],
          },
        },
        {
          id: "cie-ol-fl-pun-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the apostrophe correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The childrens' room was tidy." },
              { id: "b", text: "The children's' room was tidy." },
              { id: "c", text: "The childs' room was tidy." },
              { id: "d", text: "The children's room was tidy." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plural possessive", statement: "Plural noun ending in -s takes apostrophe after the s; irregular plurals take 's." },
            ],
            steps: [
              { reasoning: "'Children' is an irregular plural, so the apostrophe goes before the s.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The children's room was tidy.",
            commonErrors: ["Writing 'childrens'' or 'childrens'."],
          },
        },
        {
          id: "cie-ol-fl-pun-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of a colon?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Colon", statement: "Introduces a list, explanation or quotation after a complete clause." },
            ],
            steps: [
              { reasoning: "Colon introduces lists, explanations or quotations.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A colon introduces a list, an explanation or a quotation.",
            commonErrors: ["Using a colon after an incomplete clause."],
          },
        },
        {
          id: "cie-ol-fl-pun-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct the punctuation and capitalisation: 'my brother and i went to the shop it was closed'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence punctuation", statement: "Capital letters start sentences; full stops end them; splices need fixing." },
            ],
            steps: [
              { reasoning: "Capitals for 'My' and 'I'; full stop or conjunction between clauses.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct result, e.g. 'My brother and I went to the shop, but it was closed.'", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'My brother and I went to the shop, but it was closed.'",
            commonErrors: ["Lower-case 'i' and a comma splice."],
          },
        },
        {
          id: "cie-ol-fl-pun-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is punctuated correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She bought apples oranges, and bread." },
              { id: "b", text: "She bought, apples oranges and bread." },
              { id: "c", text: "She bought apples, oranges, and bread." },
              { id: "d", text: "She bought apples, oranges and, bread." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "List punctuation", statement: "Items in a list are separated by commas (a final 'and' before the last item is acceptable)." },
            ],
            steps: [
              { reasoning: "Only (a) places commas correctly between list items.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** She bought apples, oranges, and bread.",
            commonErrors: ["Commas in the wrong positions or missing."],
          },
        },
        {
          id: "cie-ol-fl-pun-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Punctuate this sentence: 'however the plan failed we tried again'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuating openers", statement: "Conjunctive adverbs like 'however' need a comma after them." },
            ],
            steps: [
              { reasoning: "Comma after the fronted 'however'.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct result: 'However, the plan failed; we tried again.' (or comma + 'but').", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'However, the plan failed; we tried again.'",
            commonErrors: ["Missing comma after 'however'."],
          },
        },
        {
          id: "cie-ol-fl-pun-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Punctuate this sentence so it introduces a list: 'she bought three things bread milk and cheese'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Colon for lists", statement: "A colon after a complete clause introduces the list." },
            ],
            steps: [
              { reasoning: "Colon placed after 'three things'.", marks: 1, markCode: "AO2" },
              { reasoning: "Commas separating 'bread, milk and cheese'.", marks: 1, markCode: "AO2" },
              { reasoning: "Capitalisation and full stop correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'She bought three things: bread, milk and cheese.'",
            commonErrors: ["Missing colon or missing commas in the list."],
          },
        },
        {
          id: "cie-ol-fl-pun-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence uses brackets correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The film (which we had waited months for finally arrived." },
              { id: "b", text: "The film which we had waited months for) finally arrived (" },
              { id: "c", text: "The film (which we had waited months for) finally arrived." },
              { id: "d", text: "The film which (we had waited months for) finally arrived." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Brackets", statement: "Brackets enclose supplementary information; both marks are required." },
            ],
            steps: [
              { reasoning: "Only (a) has a complete bracketed phrase with both marks.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The film (which we had waited months for) finally arrived.",
            commonErrors: ["Missing one bracket or misplaced brackets."],
          },
        },
        {
          id: "cie-ol-fl-pun-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference in effect between using a dash and using brackets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dashes and brackets", statement: "Dashes add emphasis or interruption; brackets add quiet supplementary detail." },
            ],
            steps: [
              { reasoning: "Dash creates emphasis, interruption or sudden aside.", marks: 1, markCode: "AO1" },
              { reasoning: "Brackets contain quieter, optional extra information.", marks: 1, markCode: "AO1" },
              { reasoning: "Effect on reader explained for each.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "A dash adds emphasis or interruption; brackets quietly add supplementary detail — different tones of interruption.",
            commonErrors: ["Treating dashes and brackets as interchangeable."],
          },
        },
        {
          id: "cie-ol-fl-pun-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct all errors in: 'the teams captain said its time we should leave were all going home'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading punctuation", statement: "Apostrophes for possession/contraction; correct clause punctuation." },
            ],
            steps: [
              { reasoning: "'The team's' — possessive apostrophe.", marks: 1, markCode: "AO2" },
              { reasoning: "'It's' = it is (contraction).", marks: 1, markCode: "AO2" },
              { reasoning: "'We're' = we are.", marks: 1, markCode: "AO2" },
              { reasoning: "Capitalisation, comma/semicolon and full stop correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The team's captain said it's time we should leave; we're all going home.'",
            commonErrors: ["Missing apostrophes in 'team's', 'it's' and 'we're'."],
          },
        },
        {
          id: "cie-ol-fl-pun-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Punctuation rules practice.",
          parts: [
            { label: "a", prompt: "State the rule for apostrophes with plural possessives.", marks: 2 },
            { label: "b", prompt: "Punctuate: 'when i arrived the meeting had started'", marks: 2 },
            { label: "c", prompt: "Explain when to choose a semicolon over a full stop.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation rules", statement: "Plural possessives, fronted clauses, semicolon function." },
            ],
            steps: [
              { part: "a", reasoning: "Plural ending in -s: apostrophe after s (students'); irregular plurals: 's (children's).", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Rule stated accurately.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'When I arrived, the meeting had started.'", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Capitalisation and full stop correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Semicolon joins closely related independent clauses.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Full stop separates more distinct ideas.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) apostrophe after s for regular plurals (b) comma after opener (c) semicolon=closely related clauses",
            levels: [
              { level: "Level 2", marks: "2", descriptor: "Rule correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Punctuated.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors remain.", part: "b" },
              { level: "Level 2", marks: "2", descriptor: "Contrast clear.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Apostrophes for plurals."],
          },
        },
        {
          id: "cie-ol-fl-pun-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does punctuation contribute to tone and meaning? Refer to at least two marks of punctuation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Punctuation and tone", statement: "Exclamation marks add energy; dashes add interruption; brackets add quiet detail." },
            ],
            steps: [
              { reasoning: "Exclamation marks convey strong feeling or urgency.", marks: 1, markCode: "AO2" },
              { reasoning: "Dashes create interruption or emphasis.", marks: 1, markCode: "AO2" },
              { reasoning: "Commas and full stops control rhythm and clarity.", marks: 1, markCode: "AO2" },
              { reasoning: "Link between marks and tone explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Punctuation shapes tone: exclamation marks add energy, dashes interrupt for emphasis, and commas/full stops control rhythm and clarity.",
            commonErrors: ["Listing marks without explaining their effect."],
          },
        },
        {
          id: "cie-ol-fl-pun-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Comprehensive punctuation practice.",
          parts: [
            { label: "a", prompt: "Correct: 'its a shame that the dogs bone was stolen'", marks: 2 },
            { label: "b", prompt: "Explain the use of a colon with an example.", marks: 2 },
            { label: "c", prompt: "Punctuate direct speech: 'come here she said'", marks: 2 },
            { label: "d", prompt: "Analyse how punctuation shapes meaning in a sentence of your choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation mastery", statement: "Apostrophes, colons, direct speech, punctuation effect." },
            ],
            steps: [
              { part: "a", reasoning: "'It's a shame that the dog's bone was stolen.'", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Both apostrophes correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Colon introduces list/explanation after complete clause.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate example given.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "e.g. '“Come here,” she said.'", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Speech marks, comma and capitalisation correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Sentence chosen and punctuation identified.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Effect of punctuation on meaning explained.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Analysis coherent.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) It's...dog's (b) colon=introduces (c) 'Come here,' she said. (d) punctuation shapes meaning",
            levels: [
              { level: "Level 2", marks: "2", descriptor: "Both fixed.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Rule+example.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "2", descriptor: "Speech punctuated.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "c" },
              { level: "Level 3", marks: "3", descriptor: "Strong analysis.", part: "d" },
              { level: "Level 2", marks: "2", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0-1", descriptor: "Descriptive.", part: "d" },
            ],
            commonErrors: ["Apostrophe misuse in contractions and possession."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-sentence-notes",
      title: "Sentence craft and punctuation — revision notes",
      summary:
        "Sentence variety, punctuation rules and common errors for accurate, controlled writing.",
      sections: [
        {
          heading: "Sentence types",
          body: "Simple = one clause. Compound = two independent clauses (conjunction/semicolon). Complex = main + dependent clause. Vary deliberately for pace.",
        },
        {
          heading: "Punctuation rules",
          body: "Apostrophes: possession/contraction, never plurals. 'its' vs 'it's'. Comma after fronted adverbials. Semicolon joins related clauses. Colon introduces lists/explanations.",
        },
        {
          heading: "Common errors",
          body: "Comma splices, apostrophe misuse, run-ons, over-punctuation. Fix splices with conjunction, semicolon or full stop.",
        },
        {
          heading: "Exam checklist",
          body: "Is there sentence variety? Are splices fixed? Are apostrophes correct? Does punctuation match the intended pace?",
        },
      ],
    },
  ],
};
