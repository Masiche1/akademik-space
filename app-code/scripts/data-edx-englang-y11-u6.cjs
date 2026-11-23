module.exports = [
  {
    file: "lesson-6-1.ts", exportName: "lesson61",
    lesson: {
      id: "el11-u6-lesson-6-1", code: "6-1",
      title: "Punctuation for Clarity and Effect",
      goal: "I CAN use punctuation accurately for clarity and deploy it deliberately for effect in my own writing.",
      standards: ["4EA1 AO4", "4EA1 AO5", "4EA1 Paper 1"],
      vocabulary: [
        { term: "Clause", definition: "A group of words containing a subject and verb; may be main or subordinate." },
        { term: "Comma splice", definition: "Joining two independent clauses with only a comma — a punctuation error." },
        { term: "Semicolon", definition: "A punctuation mark joining two closely related independent clauses or separating items in a complex list." },
        { term: "Dash", definition: "A mark used for interruption, emphasis or an aside — more dramatic than brackets." },
        { term: "Apostrophe", definition: "Marks possession ('the girl's bag') or contraction ('don't')." },
        { term: "Ellipsis", definition: "Three dots (...) indicating omission, hesitation or trailing off." },
      ],
      concepts: [
        {
          id: "el11-u6-punctuation-clarity",
          title: "Punctuation for clarity",
          skill: "Use commas, semicolons, dashes and colons accurately to make sentences clear and well-structured.",
          sections: [
            { heading: "The main tools", body: "**Commas** separate clauses, items in lists and parenthetical asides. **Semicolons** join two closely related independent clauses or separate complex list items containing commas. **Colons** introduce explanations, lists or quotations. **Dashes** set off dramatic asides or interruptions. Each has a precise job — using the wrong one creates confusion." },
            { heading: "Avoiding the comma splice", body: "A **comma splice** joins two complete sentences with only a comma: 'I like coffee, she likes tea.' This is an error. Fix it with a full stop, a semicolon, a conjunction ('and', 'but') or a colon if the second part explains the first. The semicolon is the most elegant solution when the clauses are closely related." },
            { heading: "Choosing for effect", body: "Beyond correctness, punctuation creates rhythm. Short sentences with full stops feel abrupt and punchy. Semicolons create a measured, balanced pace. Dashes create drama and suddenness. Colons build anticipation. In creative writing, punctuation is a tool for controlling the reader's breathing and attention." },
          ],
          keyFormulas: [
            { name: "Comma splice fix", statement: "Independent clause + comma + independent clause = error; use full stop, semicolon, conjunction or colon." },
            { name: "Semicolon use", statement: "Joins related independent clauses or separates complex list items." },
            { name: "Colon use", statement: "Introduces an explanation, list or quotation." },
          ],
          workedExample: {
            problem: "Fix the comma splice: 'The meeting ran late, we missed the bus.'",
            solution: "Three correct options: (1) Full stop: 'The meeting ran late. We missed the bus.' (2) Semicolon: 'The meeting ran late; we missed the bus.' (3) Conjunction: 'The meeting ran late, so we missed the bus.' The semicolon is best if you want to show the clauses are closely connected consequences.",
          },
          questions: [
            {
              id: "el11-u6-punctuation-clarity-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is a 'comma splice'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Using too many commas" },
                  { id: "b", text: "Joining two complete sentences with only a comma" },
                  { id: "c", text: "A comma in the wrong place" },
                  { id: "d", text: "A missing comma" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Comma splice", statement: "Two independent clauses joined by comma alone." }],
                steps: [{ reasoning: "Comma splice = comma joining two complete sentences — a punctuation error.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** Joining two complete sentences with only a comma.",
                commonErrors: ["Thinking any comma misuse is a splice (a, c)."],
              },
            },
            {
              id: "el11-u6-punctuation-clarity-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Identify the punctuation error in: 'She finished her work, then she went home.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Punctuation correction", statement: "Recognising comma splices and fixing them." }],
                steps: [
                  { reasoning: "Identifies comma splice: two independent clauses joined by comma alone.", marks: 1, markCode: "AO4" },
                  { reasoning: "Suggests fix: semicolon, conjunction ('and then') or full stop.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Comma splice — needs semicolon, conjunction or full stop between the clauses.",
                commonErrors: ["Saying there's no error."],
              },
            },
            {
              id: "el11-u6-punctuation-clarity-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain when to use a semicolon rather than a comma or full stop, giving an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Semicolon", statement: "Joins closely related independent clauses." }],
                steps: [
                  { reasoning: "Explains semicolon joins two independent clauses that are closely related in meaning.", marks: 1, markCode: "AO4" },
                  { reasoning: "Distinguishes from comma (too weak, creates splice) and full stop (too strong, separates too much).", marks: 1, markCode: "AO4" },
                  { reasoning: "Valid example: 'The rain stopped; the sun came out.'", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Semicolons join related independent clauses; stronger than comma, weaker than full stop. E.g. 'The rain stopped; the sun came out.'",
                commonErrors: ["Using semicolon before a dependent clause."],
              },
            },
            {
              id: "el11-u6-punctuation-clarity-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Rewrite this sentence using a colon and a semicolon to improve its structure: 'She bought three things apples oranges and bread.'",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Colon and semicolon use", statement: "Structuring lists and clauses precisely." },
                  { kind: "skill", name: "Punctuation craft", statement: "Choosing marks for clarity and rhythm." },
                ],
                steps: [
                  { reasoning: "Uses colon to introduce the list: 'She bought three things: ...'", marks: 1, markCode: "AO4" },
                  { reasoning: "Uses commas or semicolons appropriately within list — commas for simple items, semicolons if items contain commas.", marks: 1, markCode: "AO4" },
                  { reasoning: "Correct version, e.g. 'She bought three things: apples, oranges and bread.'", marks: 2, markCode: "AO4" },
                  { reasoning: "Explains choice: colon signals the list is coming; commas separate simple items.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "'She bought three things: apples, oranges and bread.' — colon introduces the list, commas separate items.",
                commonErrors: ["Using semicolon between simple list items unnecessarily.", "Missing colon before list."],
              },
            },
            {
              id: "el11-u6-punctuation-clarity-q5",
              difficulty: "challenge",
              totalMarks: 6,
              parts: [
                { label: "a", prompt: "Punctuate this sentence correctly: 'the meeting which was supposed to end at three oclock ran until five'", marks: 3 },
                { label: "b", prompt: "Explain the punctuation choices you made.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Punctuation application", statement: "Applying rules accurately." },
                  { kind: "technique", name: "Clause punctuation", statement: "Commas for subordinate clauses and apostrophe for 'o'clock'." },
                ],
                steps: [
                  { part: "a", reasoning: "Correct version, e.g. 'The meeting, which was supposed to end at three o'clock, ran until five.'", marks: 3, markCode: "AO4" },
                  { part: "b", reasoning: "Commas set off the non-defining relative clause 'which was supposed to end at three o'clock'.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Apostrophe in 'o'clock' marks omission of 'of the clock'.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Capital letter and full stop complete the sentence.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "'The meeting, which was supposed to end at three o'clock, ran until five.' — commas for the clause, apostrophe for contraction.",
                  levels: [
                  { level: "Level 3", marks: "5-6", descriptor: "Perceptive, secure and well-developed answer with precise terminology and integrated evidence." },
                  { level: "Level 2", marks: "3-4", descriptor: "Clear, relevant points with some development and supporting detail." },
                  { level: "Level 1", marks: "1-2", descriptor: "Simple or partial points; limited development or relevance." },
                  ],
                commonErrors: ["Missing commas around the relative clause.", "Missing apostrophe in 'o'clock'."],
              },
            },
            {
              id: "el11-u6-punctuation-clarity-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Write about 200 words explaining how punctuation controls meaning and effect in writing. Cover at least three punctuation marks and explain how each can change the reader's response.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Punctuation effect", statement: "Marks control rhythm, emphasis and meaning." },
                  { kind: "skill", name: "Explanatory writing", statement: "Clear account with examples." },
                ],
                steps: [
                  { reasoning: "Covers at least three marks (comma, semicolon, dash, colon, full stop).", marks: 2, markCode: "AO4" },
                  { reasoning: "Each mark's effect on rhythm/meaning explained.", marks: 3, markCode: "AO4" },
                  { reasoning: "Examples given for at least two marks.", marks: 2, markCode: "AO4" },
                  { reasoning: "Clear organisation and conclusion.", marks: 2, markCode: "AO4" },
                ],
                finalAnswer: "Punctuation controls clarity and effect: commas for pauses, semicolons for balance, dashes for drama, colons for anticipation, full stops for impact.",
                levels: [
                  { level: "Level 3", marks: "8-9", descriptor: "Three marks explained with examples and effect." },
                  { level: "Level 2", marks: "5-7", descriptor: "Two marks explained, some examples." },
                  { level: "Level 1", marks: "1-4", descriptor: "Vague or one mark only." },
                ],
                commonErrors: ["Listing marks without explaining effect."],
              },
            },
          ],
        },
        {
          id: "el11-u6-punctuation-effect",
          title: "Punctuation for effect in creative writing",
          skill: "Use apostrophes, quotation marks, ellipses and expressive punctuation deliberately to create effects in writing.",
          sections: [
            { heading: "Apostrophes and quotation marks", body: "**Apostrophes** show possession ('the dog's bone') or contraction ('it's', 'don't'). Common error: 'its' (possessive) vs 'it's' (it is). **Quotation marks** enclose speech or quoted text; single quotes inside double quotes for nested quotes. In creative writing, punctuation around dialogue controls pace and clarity." },
            { heading: "Ellipsis, dash and exclamation", body: "**Ellipsis** (...) shows trailing off, hesitation, or omitted text — 'I thought... maybe...'. **Dash** creates interruption or sudden emphasis — 'The door opened — and there it was.' **Exclamation mark** conveys strong emotion or emphasis — use sparingly for impact; overuse weakens effect. **Question mark** in dialogue signals genuine or rhetorical questioning." },
            { heading: "Punctuation as voice", body: "In creative writing, punctuation is part of voice. A character who uses ellipses constantly sounds hesitant; one who uses exclamation marks sounds excitable; one who uses semicolons sounds formal. Punctuation choices characterise speakers as much as their words do." },
          ],
          keyFormulas: [
            { name: "its vs it's", statement: "'Its' = possessive; 'it's' = it is/it has." },
            { name: "Ellipsis effect", statement: "Trailing dots create hesitation, uncertainty or trailing off." },
            { name: "Dash effect", statement: "Dash creates interruption, emphasis or sudden reveal." },
          ],
          workedExample: {
            problem: "Rewrite for effect: 'She was happy. She was also scared.' using punctuation to create a more dramatic version.",
            solution: "'She was happy — and then, without warning, scared.' The dash creates sudden interruption; the comma and 'without warning' build suspense; removing the second 'she was' tightens the rhythm. Punctuation and structure combine to create tension that the original flat sentences lack.",
          },
          questions: [
            {
              id: "el11-u6-punctuation-effect-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which is correct: 'its' or 'it's' for 'The dog wagged ___ tail.'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "it's" },
                  { id: "b", text: "its" },
                  { id: "c", text: "its'" },
                  { id: "d", text: "it is" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "its vs it's", statement: "'Its' is possessive; 'it's' = it is." }],
                steps: [{ reasoning: "Possessive needs 'its' (no apostrophe); 'it's' would mean 'it is wagged tail' — wrong.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** its.",
                commonErrors: ["Adding apostrophe to possessive pronoun (a)."],
              },
            },
            {
              id: "el11-u6-punctuation-effect-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What effect does an ellipsis (...) create in writing?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Ellipsis", statement: "Indicates trailing off, hesitation or omission." }],
                steps: [
                  { reasoning: "Defines ellipsis as three dots showing trailing off or pause.", marks: 1, markCode: "AO4" },
                  { reasoning: "Effect: creates hesitation, uncertainty, or suggests unspoken thoughts.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Ellipsis creates trailing off, hesitation or unspoken implication — e.g. 'I thought... maybe...'.",
                commonErrors: ["Thinking it only shows omitted text in quotations."],
              },
            },
            {
              id: "el11-u6-punctuation-effect-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: {
                title: "A dramatic moment",
                author: "Written for Akademik Space",
                source: "Creative writing model",
                text: "She reached for the letter. Her hands wouldn't stop shaking. The seal was already broken — someone had been here before her.",
              },
              stem: "Analyse how the dash in 'broken — someone' affects the reader's experience of this moment.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Dash effect", statement: "Creates sudden interruption or revelation." },
                  { kind: "skill", name: "Effect analysis", statement: "Explaining punctuation's impact on reader." },
                ],
                steps: [
                  { reasoning: "The dash replaces a full stop or comma, creating a sudden break in rhythm.", evidence: "broken — someone had been here", marks: 1, markCode: "AO4" },
                  { reasoning: "It mimics the character's shock — the realisation hits as suddenly as the dash appears.", marks: 1, markCode: "AO2" },
                  { reasoning: "Effect: accelerates the reveal, making 'someone had been here' feel like a jolt rather than a separate sentence.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The dash creates a sudden break that mirrors the character's shock, accelerating the reveal of the broken seal and making the discovery feel immediate.",
                commonErrors: ["Identifying the dash without explaining its rhythmic/emotional effect."],
              },
            },
            {
              id: "el11-u6-punctuation-effect-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Rewrite this flat sentence for dramatic effect using punctuation: 'He was angry. He opened the door.'",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Punctuation for drama", statement: "Dash, ellipsis, short sentences create tension." },
                  { kind: "skill", name: "Creative rewriting", statement: "Using punctuation to control pace and mood." },
                ],
                steps: [
                  { reasoning: "Dramatic rewrite, e.g. 'He was angry — then he opened the door.' or 'Angry. He opened the door.'", marks: 2, markCode: "AO4" },
                  { reasoning: "Explains dash creates sudden connection/transition between emotion and action.", marks: 1, markCode: "AO4" },
                  { reasoning: "Or explains fragment 'Angry.' creates abrupt emphasis.", marks: 1, markCode: "AO4" },
                  { reasoning: "Links punctuation choice to tension/momentum.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "E.g. 'He was angry — then he opened the door.' The dash links emotion to action with sudden force; or fragment 'Angry.' for punch.",
                commonErrors: ["Adding punctuation without explaining effect."],
              },
            },
            {
              id: "el11-u6-punctuation-effect-q5",
              difficulty: "challenge",
              totalMarks: 6,
              parts: [
                { label: "a", prompt: "Correct the apostrophe error: 'The dog wagged it's tail.'", marks: 2 },
                { label: "b", prompt: "Explain why the error occurs and how to avoid it.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Apostrophe rules", statement: "Possessive pronouns never take apostrophes." },
                  { kind: "skill", name: "Error prevention", statement: "Understanding the its/it's confusion." },
                ],
                steps: [
                  { part: "a", reasoning: "Correct: 'The dog wagged its tail.' (remove apostrophe)", marks: 2, markCode: "AO4" },
                  { part: "b", reasoning: "Error occurs because 'its' looks like it needs an apostrophe like other possessives ('dog's').", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "But 'its' is a possessive pronoun like 'his'/'hers' — no apostrophe.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "'It's' always means 'it is' or 'it has' — test by expanding.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Proofreading tip: read aloud and expand contractions mentally.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) 'its' — no apostrophe for possessive. (b) 'Its' is a possessive pronoun like 'his'; 'it's' = 'it is'. Test by expanding.",
                  levels: [
                  { level: "Level 3", marks: "5-6", descriptor: "Perceptive, secure and well-developed answer with precise terminology and integrated evidence." },
                  { level: "Level 2", marks: "3-4", descriptor: "Clear, relevant points with some development and supporting detail." },
                  { level: "Level 1", marks: "1-2", descriptor: "Simple or partial points; limited development or relevance." },
                  ],
                commonErrors: ["Still using apostrophe in possessive."],
              },
            },
            {
              id: "el11-u6-punctuation-effect-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Write about 200 words on how punctuation creates voice and character in creative writing. Use at least two examples of punctuation choices and explain their effect on characterisation or mood.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Punctuation as voice", statement: "Marks characterise speakers and create mood." },
                  { kind: "skill", name: "Analytical writing", statement: "Examples + effects + organisation." },
                ],
                steps: [
                  { reasoning: "Two or more punctuation choices identified with examples.", marks: 2, markCode: "AO4" },
                  { reasoning: "Each choice's effect on character/mood explained.", marks: 3, markCode: "AO2" },
                  { reasoning: "Connects to voice/characterisation.", marks: 2, markCode: "AO2" },
                  { reasoning: "Clear organisation and conclusion.", marks: 2, markCode: "AO4" },
                ],
                finalAnswer: "Punctuation is part of voice: ellipses suggest hesitation, dashes suggest drama, exclamation marks suggest excitement — shaping character and mood.",
                levels: [
                  { level: "Level 3", marks: "8-9", descriptor: "Two choices well explained with character/mood effects." },
                  { level: "Level 2", marks: "5-7", descriptor: "Choices present, partial effects." },
                  { level: "Level 1", marks: "1-4", descriptor: "Vague or one example." },
                ],
                commonErrors: ["Listing marks without character/mood effect."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el11-u6-punctuation-notes", title: "Punctuation — notes",
      summary: "Commas for clarity, semicolons for balance, dashes for drama, ellipses for hesitation. its vs it's is the most common error.",
      sections: [
        { heading: "Clarity marks", body: "Comma (pause), semicolon (related clauses), colon (introduces), dash (interruption)." },
        { heading: "Effect marks", body: "Ellipsis = hesitation; dash = sudden; exclamation = strong emotion (use sparingly)." },
        { heading: "Common error", body: "its (possessive) vs it's (it is) — test by expanding." },
      ],
    },
  },
  {
    file: "lesson-6-2.ts", exportName: "lesson62",
    lesson: {
      id: "el11-u6-lesson-6-2", code: "6-2",
      title: "Grammar and Sentence Control",
      goal: "I CAN use a range of sentence structures accurately and control tense and agreement for clear, effective writing.",
      standards: ["4EA1 AO4", "4EA1 AO5", "4EA1 Paper 1"],
      vocabulary: [
        { term: "Clause", definition: "Group of words with subject and verb; main clause makes sense alone." },
        { term: "Phrase", definition: "Group of words without a finite verb; adds detail but can't stand alone." },
        { term: "Fragment", definition: "An incomplete sentence missing subject or verb — used deliberately in creative writing." },
        { term: "Subject-verb agreement", definition: "Verb must match subject in number: 'she walks' not 'she walk'." },
        { term: "Tense consistency", definition: "Maintaining the same time frame throughout a piece unless deliberately shifting." },
        { term: "Modal verb", definition: "Verb expressing possibility/necessity: can, could, may, might, must, should." },
      ],
      concepts: [
        {
          id: "el11-u6-sentence-types",
          title: "Sentence types and variety",
          skill: "Use simple, compound and complex sentences effectively, and understand when fragments work.",
          sections: [
            { heading: "The three types", body: "**Simple**: one main clause ('She ran.'). **Compound**: two main clauses joined by conjunction or semicolon ('She ran, and he walked.'). **Complex**: main clause + subordinate clause ('She ran because she was late.'). Variety matters — a page of only simple sentences feels childish; only complex sentences feel convoluted." },
            { heading: "Fragments: error or effect?", body: "A **fragment** lacks a subject or verb ('Running through the rain.'). In formal writing it's an error; in creative writing it's a deliberate effect — creating urgency, fragmentation of thought, or mimicking speech. 'The door opened. Silence. Nothing.' — the fragment 'Silence.' hits harder than a full sentence." },
            { heading: "Controlling rhythm", body: "Sentence length controls pace. Short sentences accelerate; long complex sentences slow and build. Writers manipulate this: action scenes use short sentences; reflective passages use longer ones. Match structure to purpose — don't write a eulogy in staccato fragments or a chase scene in meandering clauses." },
          ],
          keyFormulas: [
            { name: "Simple sentence", statement: "One main clause only." },
            { name: "Compound sentence", statement: "Two or more main clauses joined by conjunction/semicolon." },
            { name: "Complex sentence", statement: "Main clause + subordinate clause(s)." },
            { name: "Fragment effect", statement: "Incomplete sentence for urgency or emphasis in creative writing." },
          ],
          workedExample: {
            problem: "Rewrite 'The dog barked. The cat ran. The bird flew away.' using varied sentence structures for better effect.",
            solution: "'The dog barked, and the cat ran; the bird flew away.' — compound-turned-complex structure linking the actions with cause-effect rhythm. Or more dramatic: 'The dog barked. The cat ran — and the bird was gone.' The semicolon/dash versions create flow; the fragment option adds punch. Variety prevents monotony.",
          },
          questions: [
            {
              id: "el11-u6-sentence-types-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is a 'complex sentence'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A very long sentence" },
                  { id: "b", text: "A sentence with one main clause and at least one subordinate clause" },
                  { id: "c", text: "A sentence with a difficult word" },
                  { id: "d", text: "A sentence with many commas" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Complex sentence", statement: "Main + subordinate clause." }],
                steps: [{ reasoning: "Complex = independent main clause + dependent subordinate clause.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** Main clause + subordinate clause.",
                commonErrors: ["Confusing 'complex' with 'complicated' (a)."],
              },
            },
            {
              id: "el11-u6-sentence-types-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Identify the sentence type: 'Although it was raining, we went out.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Complex sentence", statement: "Subordinate clause + main clause." }],
                steps: [
                  { reasoning: "Identifies as complex: 'Although it was raining' is subordinate; 'we went out' is main.", marks: 1, markCode: "AO4" },
                  { reasoning: "Explains the subordinate clause adds contrast/dependency.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Complex sentence — subordinate clause 'Although it was raining' + main clause 'we went out'.",
                commonErrors: ["Calling it compound because it has two parts."],
              },
            },
            {
              id: "el11-u6-sentence-types-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain why varying sentence length improves writing, using an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sentence variety", statement: "Mixing lengths controls rhythm and emphasis." }],
                steps: [
                  { reasoning: "Explains that uniform sentence length creates monotony.", marks: 1, markCode: "AO4" },
                  { reasoning: "Short sentences create urgency/punch; long create reflection/build-up.", marks: 1, markCode: "AO4" },
                  { reasoning: "Example given of contrast, e.g. 'She ran. Faster. The finish line was close.' vs single long version.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Varied sentence length controls rhythm — short for urgency, long for reflection; uniformity creates monotony.",
                commonErrors: ["Saying variety is 'nice' without explaining effect."],
              },
            },
            {
              id: "el11-u6-sentence-types-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Rewrite this monotonous passage using varied sentence types: 'The man walked to the shop. He bought some bread. He walked home. He ate the bread.'",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sentence variety", statement: "Mixing simple/compound/complex for rhythm." },
                  { kind: "skill", name: "Rewriting craft", statement: "Applying variety deliberately." },
                ],
                steps: [
                  { reasoning: "Varied rewrite, e.g. 'The man walked to the shop and bought bread; then he walked home and ate it.' or 'Walking to the shop, he bought bread; walking home, he ate it.'", marks: 2, markCode: "AO4" },
                  { reasoning: "Uses compound/complex structures to link related actions.", marks: 1, markCode: "AO4" },
                  { reasoning: "Could use fragment for effect: 'Bread. Then home.'", marks: 1, markCode: "AO4" },
                  { reasoning: "Explains how variety improves flow or emphasis.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "E.g. 'The man walked to the shop, bought bread and walked home; he ate it on the doorstep.' — compound structure creates flow.",
                commonErrors: ["Just joining with 'and' repeatedly."],
              },
            },
            {
              id: "el11-u6-sentence-types-q5",
              difficulty: "challenge",
              totalMarks: 6,
              parts: [
                { label: "a", prompt: "Is 'Running through the rain.' a fragment? Explain.", marks: 3 },
                { label: "b", prompt: "Explain when a fragment might be effective in creative writing.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Fragment", statement: "Incomplete sentence lacking subject or finite verb." },
                  { kind: "technique", name: "Fragment effect", statement: "Deliberate incompleteness for urgency/emphasis." },
                ],
                steps: [
                  { part: "a", reasoning: "Yes — 'Running' is participle, no subject or finite verb ('is running' would fix it).", marks: 3, markCode: "AO4" },
                  { part: "b", reasoning: "Fragments work in creative writing for urgency, fragmentation, or mimicking speech/thought.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Example: 'The door opened. Silence. Nothing.' — fragment hits harder.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "In formal/exam writing, fragments are usually errors unless deliberately marked.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) Yes — participle 'running' lacks subject/finite verb. (b) Fragments create urgency or mimic thought in creative writing; avoid in formal contexts.",
                  levels: [
                  { level: "Level 3", marks: "5-6", descriptor: "Perceptive, secure and well-developed answer with precise terminology and integrated evidence." },
                  { level: "Level 2", marks: "3-4", descriptor: "Clear, relevant points with some development and supporting detail." },
                  { level: "Level 1", marks: "1-2", descriptor: "Simple or partial points; limited development or relevance." },
                  ],
                commonErrors: ["Calling all short sentences fragments."],
              },
            },
            {
              id: "el11-u6-sentence-types-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Write about 200 words on how sentence structure affects meaning and effect in writing. Cover at least two sentence types and explain when each is most effective.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sentence structure effect", statement: "Types and lengths control rhythm and emphasis." },
                  { kind: "skill", name: "Explanatory writing", statement: "Clear account with examples." },
                ],
                steps: [
                  { reasoning: "Covers at least two types (simple, compound, complex, fragment).", marks: 2, markCode: "AO4" },
                  { reasoning: "Each type's effect explained.", marks: 3, markCode: "AO4" },
                  { reasoning: "Examples given.", marks: 2, markCode: "AO4" },
                  { reasoning: "Clear organisation and conclusion.", marks: 2, markCode: "AO4" },
                ],
                finalAnswer: "Sentence types control rhythm: simple for punch, compound for balance, complex for nuance, fragments for urgency — matching structure to purpose.",
                levels: [
                  { level: "Level 3", marks: "8-9", descriptor: "Two types explained with examples and effects." },
                  { level: "Level 2", marks: "5-7", descriptor: "Types present, partial effects." },
                  { level: "Level 1", marks: "1-4", descriptor: "Vague account." },
                ],
                commonErrors: ["No examples.", "Types not explained."],
              },
            },
          ],
        },
        {
          id: "el11-u6-verb-tense-agreement",
          title: "Tense, agreement and verb control",
          skill: "Maintain tense consistency, ensure subject-verb agreement and use modal verbs accurately.",
          sections: [
            { heading: "Subject-verb agreement", body: "The verb must match the subject in number: 'The dog barks' (singular) vs 'The dogs bark' (plural). Tricky cases: collective nouns ('the team is/are' — both acceptable in British English), 'each' and 'every' take singular ('each student is'), 'neither/nor' takes the nearer subject. Errors here undermine credibility instantly." },
            { heading: "Tense consistency", body: "Keep the same time frame unless deliberately shifting. 'She walks in and sat down' mixes present and past — an error. Narrative usually stays in past tense; reports in present. Deliberate shifts signal flashbacks or general truths: 'She remembered how he always said: kindness costs nothing.'" },
            { heading: "Modal verbs", body: "**Modals** (can, could, may, might, must, should, will, would, shall) express possibility, permission, obligation, prediction. They add nuance: 'You must go' (obligation) vs 'You should go' (advice) vs 'You might go' (possibility). In formal writing, 'must' for obligation is stronger than 'should'." },
          ],
          keyFormulas: [
            { name: "Agreement rule", statement: "Singular subject + singular verb; plural subject + plural verb." },
            { name: "Tense consistency", statement: "Maintain one time frame unless deliberately shifting for effect." },
            { name: "Modal meanings", statement: "must=obligation, should=advice, might=possibility, will=prediction." },
          ],
          workedExample: {
            problem: "Correct: 'Each of the students were happy with their results.'",
            solution: "'Each of the students was happy with their results.' — 'Each' is singular, so 'was' not 'were'. ('Their' is acceptable as singular they, though 'his or her' is more formal.) The trap is the plural 'students' distracting from the singular 'each'.",
          },
          questions: [
            {
              id: "el11-u6-verb-tense-agreement-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which is correct: 'The team is winning' or 'The team are winning'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Only 'is' is correct" },
                  { id: "b", text: "Only 'are' is correct" },
                  { id: "c", text: "Both are acceptable in British English" },
                  { id: "d", text: "Neither is correct" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Collective nouns", statement: "Can take singular or plural verb in British English." }],
                steps: [{ reasoning: "Collective nouns like 'team' can take either depending on emphasis — both are acceptable.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(c)** Both are acceptable in British English.",
                commonErrors: ["Insisting only one is correct."],
              },
            },
            {
              id: "el11-u6-verb-tense-agreement-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Identify the tense error: 'She walks into the room and sat down.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Tense consistency", statement: "Maintain same time frame." }],
                steps: [
                  { reasoning: "Identifies mixed tenses: 'walks' (present) + 'sat' (past).", marks: 1, markCode: "AO4" },
                  { reasoning: "Suggests fix: 'walked...sat' or 'walks...sits' for consistency.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Mixed tense error — 'walks' should be 'walked' (or 'sat' should be 'sits').",
                commonErrors: ["Not noticing the tense shift."],
              },
            },
            {
              id: "el11-u6-verb-tense-agreement-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain the difference between 'must', 'should' and 'might' with examples.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Modal verbs", statement: "Express obligation, advice, possibility." }],
                steps: [
                  { reasoning: "'Must' = strong obligation: 'You must submit by Friday.'", marks: 1, markCode: "AO4" },
                  { reasoning: "'Should' = advice/recommendation: 'You should see a doctor.'", marks: 1, markCode: "AO4" },
                  { reasoning: "'Might' = possibility: 'It might rain later.'", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Must=obligation, should=advice, might=possibility — each adds different force to the verb.",
                commonErrors: ["Using them interchangeably."],
              },
            },
            {
              id: "el11-u6-verb-tense-agreement-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Correct and explain: 'Neither the teacher nor the students was ready for the test.'",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Subject-verb agreement", statement: "Verb agrees with nearer subject in 'neither/nor' constructions." },
                  { kind: "technique", name: "Proximity rule", statement: "Verb matches the closest subject." },
                ],
                steps: [
                  { reasoning: "Correct: 'Neither the teacher nor the students were ready...' — 'were' agrees with nearer subject 'students'.", marks: 2, markCode: "AO4" },
                  { reasoning: "Explains proximity rule: with 'neither/nor', verb matches the subject closest to it.", marks: 1, markCode: "AO4" },
                  { reasoning: "Alternative acceptable: 'Neither the students nor the teacher was ready' — 'was' matches 'teacher'.", marks: 1, markCode: "AO4" },
                  { reasoning: "Notes the original 'was' is wrong because 'students' (plural) is nearer.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Correct: 'Neither the teacher nor the students were ready' — verb agrees with nearer plural subject 'students'.",
                commonErrors: ["Keeping 'was' because 'teacher' is singular — ignoring proximity rule."],
              },
            },
            {
              id: "el11-u6-verb-tense-agreement-q5",
              difficulty: "challenge",
              totalMarks: 6,
              parts: [
                { label: "a", prompt: "Correct: 'Each of the players have their own locker.'", marks: 3 },
                { label: "b", prompt: "Explain the agreement rule that applies.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Subject-verb agreement", statement: "'Each' is singular." },
                  { kind: "technique", name: "Distraction rule", statement: "Plural noun between subject and verb can mislead." },
                ],
                steps: [
                  { part: "a", reasoning: "Correct: 'Each of the players has their own locker.' (or 'his or her own locker')", marks: 3, markCode: "AO4" },
                  { part: "b", reasoning: "'Each' is singular — it refers to individuals one at a time.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "'Players' is plural but doesn't control the verb — it's part of the prepositional phrase.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "Rule: find the true subject ('each'), ignore intervening plural nouns.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) 'Each of the players has their own locker.' (b) 'Each' is singular; 'players' is just a distractor in the prepositional phrase.",
                  levels: [
                  { level: "Level 3", marks: "5-6", descriptor: "Perceptive, secure and well-developed answer with precise terminology and integrated evidence." },
                  { level: "Level 2", marks: "3-4", descriptor: "Clear, relevant points with some development and supporting detail." },
                  { level: "Level 1", marks: "1-2", descriptor: "Simple or partial points; limited development or relevance." },
                  ],
                commonErrors: ["Keeping 'have' because 'players' is plural."],
              },
            },
            {
              id: "el11-u6-verb-tense-agreement-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Write about 200 words on how grammar control affects the quality of writing. Cover at least two areas (agreement, tense, sentence structure, modals) and explain why accuracy matters.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Grammar control", statement: "Accuracy builds credibility and clarity." },
                  { kind: "skill", name: "Explanatory writing", statement: "Areas + importance explained." },
                ],
                steps: [
                  { reasoning: "Covers at least two grammar areas.", marks: 2, markCode: "AO4" },
                  { reasoning: "Each area explained with example of error/effect.", marks: 3, markCode: "AO4" },
                  { reasoning: "Explains why accuracy matters (clarity, credibility, marks).", marks: 2, markCode: "AO4" },
                  { reasoning: "Clear organisation and conclusion.", marks: 2, markCode: "AO4" },
                ],
                finalAnswer: "Grammar control (agreement, tense, sentence variety, modals) ensures clarity and credibility; errors distract readers and undermine the writer's authority.",
                levels: [
                  { level: "Level 3", marks: "8-9", descriptor: "Two areas explained with examples and importance." },
                  { level: "Level 2", marks: "5-7", descriptor: "Areas present, partial explanation." },
                  { level: "Level 1", marks: "1-4", descriptor: "Vague account." },
                ],
                commonErrors: ["No examples.", "No link to quality."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el11-u6-grammar-notes", title: "Grammar and sentence control — notes",
      summary: "Vary sentence types for rhythm; maintain tense consistency; agreement rules (each=singular, neither/nor=nearer subject).",
      sections: [
        { heading: "Sentence types", body: "Simple=1 clause, compound=2 main clauses, complex=main+subordinate. Fragments work in creative writing only." },
        { heading: "Agreement traps", body: "'Each' is singular; 'neither/nor' takes nearer subject; collective nouns can take either." },
        { heading: "Modals", body: "must=obligation, should=advice, might=possibility, will=prediction." },
      ],
    },
  },
  {
    file: "lesson-6-3.ts", exportName: "lesson63",
    lesson: {
      id: "el11-u6-lesson-6-3", code: "6-3",
      title: "Spelling and Proofreading",
      goal: "I CAN apply spelling rules and patterns accurately and use systematic proofreading strategies to eliminate errors.",
      standards: ["4EA1 AO4", "4EA1 AO5", "4EA1 Paper 1"],
      vocabulary: [
        { term: "Homophone", definition: "Words that sound alike but differ in meaning/spelling: their/there/they're." },
        { term: "Silent letter", definition: "Letter not pronounced but required in spelling: 'knight', 'wrist', 'debt'." },
        { term: "Suffix rules", definition: "Patterns for adding endings: drop 'e' before vowel suffix, double consonant after short vowel." },
        { term: "Proofreading", definition: "Systematic final check for errors before submission." },
        { term: "Editing", definition: "Revising content and structure — different from proofreading (surface errors)." },
        { term: "Mnemonics", definition: "Memory aids for tricky spellings, e.g. 'because = big elephants can always understand small elephants'." },
      ],
      concepts: [
        {
          id: "el11-u6-spelling-patterns",
          title: "Spelling patterns and rules",
          skill: "Apply spelling rules for suffixes, silent letters and common patterns, and distinguish homophones.",
          sections: [
            { heading: "Suffix rules", body: "Adding endings follows patterns: drop silent 'e' before vowel suffix ('hope' -> 'hoping', not 'hopeing'); keep 'e' before consonant suffix ('hopeful', 'safely'); double final consonant after short vowel + stressed syllable ('run' -> 'running', 'prefer' -> 'preferred'). 'I before E except after C' has exceptions ('weird', 'seize', 'height')." },
            { heading: "Silent letters and patterns", body: "Silent letters are common: 'kn-' ('knife', 'knee'), 'wr-' ('write', 'wrong'), 'mb' ('lamb', 'climb'), 'gh' ('night', 'thought'). Patterns help: 'i before e' ('believe', 'receive'), 'ough' has multiple sounds ('though', 'through', 'cough')." },
            { heading: "Homophones", body: "Homophones cause most errors: **their/there/they're**, **your/you're**, **its/it's**, **to/too/two**, **affect/effect**, **practice/practise** (noun/verb in British English), **accept/except**. No spelling rule helps — only careful checking. Read sentences aloud and expand contractions mentally." },
          ],
          keyFormulas: [
            { name: "Suffix rule", statement: "Drop 'e' before vowel suffix; double consonant after short stressed vowel." },
            { name: "I before E", statement: "'I before E except after C' — with exceptions." },
            { name: "Homophone test", statement: "Read aloud and expand contractions to check meaning." },
          ],
          workedExample: {
            problem: "Correct these: 'I hopeing to recieve the package tomorow; their going to be late.'",
            solution: "'I hoping to receive the package tomorrow; they're going to be late.' — 'hopeing' -> 'hoping' (drop e before -ing); 'recieve' -> 'receive' (i before e after c); 'tomorow' -> 'tomorrow' (double r); 'their' -> 'they're' (they are). Four different spelling error types in one sentence.",
          },
          questions: [
            {
              id: "el11-u6-spelling-patterns-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which spelling is correct: 'hopeing' or 'hoping'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "hopeing" },
                  { id: "b", text: "hoping" },
                  { id: "c", text: "hopping" },
                  { id: "d", text: "hoppeing" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Suffix rule", statement: "Drop silent 'e' before vowel suffix." }],
                steps: [{ reasoning: "'Hope' + 'ing' -> drop 'e' -> 'hoping'. 'Hopping' is from 'hop'.", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** hoping.",
                commonErrors: ["Keeping 'e' before vowel suffix (a)."],
              },
            },
            {
              id: "el11-u6-spelling-patterns-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Choose the correct homophone: '___ going to the park.' (their/there/they're)",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Homophones", statement: "their=possessive, there=place, they're=they are." }],
                steps: [
                  { reasoning: "Correct: 'They're going to the park' = 'They are going'.", marks: 1, markCode: "AO4" },
                  { reasoning: "Explains 'their' = possession, 'there' = place — both wrong here.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "They're — contraction of 'they are'.",
                commonErrors: ["Using 'their' for 'they are'."],
              },
            },
            {
              id: "el11-u6-spelling-patterns-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain the 'i before e except after c' rule and give one exception.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "I before E rule", statement: "Spelling pattern with exceptions." }],
                steps: [
                  { reasoning: "States rule: 'i' before 'e' ('believe', 'field') except after 'c' ('receive', 'ceiling').", marks: 1, markCode: "AO4" },
                  { reasoning: "Gives valid exception: 'weird', 'seize', 'height', 'neighbour', 'either'.", marks: 1, markCode: "AO4" },
                  { reasoning: "Notes the rule is a guideline, not absolute — many exceptions exist.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "'I before E except after C' — e.g. 'believe' but 'receive'; exceptions include 'weird', 'seize', 'height'.",
                commonErrors: ["No exceptions given."],
              },
            },
            {
              id: "el11-u6-spelling-patterns-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Correct all spelling errors in this sentence and identify the type of each: 'The goverment recieves alot of complaints becuase the service is to bad.'",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Error identification", statement: "Recognising spelling error types." },
                  { kind: "skill", name: "Spelling correction", statement: "Applying rules and patterns." },
                ],
                steps: [
                  { reasoning: "'goverment' -> 'government' (missing 'n' — pattern: -ment suffix).", marks: 1, markCode: "AO4" },
                  { reasoning: "'recieves' -> 'receives' (i before e after c).", marks: 1, markCode: "AO4" },
                  { reasoning: "'alot' -> 'a lot' (two words — common error).", marks: 1, markCode: "AO4" },
                  { reasoning: "'becuase' -> 'because' (transposition error).", marks: 1, markCode: "AO4" },
                  { reasoning: "'to bad' -> 'too bad' (homophone/meaning error).", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "'The government receives a lot of complaints because the service is too bad.' — five different error types.",
                commonErrors: ["Missing some errors.", "Not identifying error types."],
              },
            },
            {
              id: "el11-u6-spelling-patterns-q5",
              difficulty: "challenge",
              totalMarks: 6,
              parts: [
                { label: "a", prompt: "Correct: 'She writting a letter to her freind tomorow.'", marks: 3 },
                { label: "b", prompt: "Explain the spelling rules or patterns behind two of the errors.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Spelling correction", statement: "Applying rules accurately." },
                  { kind: "definition", name: "Spelling patterns", statement: "Rules for suffixes, doubling, homophones." },
                ],
                steps: [
                  { part: "a", reasoning: "Correct: 'She is writing a letter to her friend tomorrow.' (or 'She wrote...')", marks: 3, markCode: "AO4" },
                  { part: "b", reasoning: "'writting' -> 'writing' — drop 'e' before -ing ('write' -> 'writing').", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "'freind' -> 'friend' — 'i before e' rule (no 'c', so 'ie').", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "'tomorow' -> 'tomorrow' — double 'r' pattern.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) 'She is writing a letter to her friend tomorrow.' (b) 'Writing' drops 'e'; 'friend' follows i-before-e; 'tomorrow' doubles 'r'.",
                  levels: [
                  { level: "Level 3", marks: "5-6", descriptor: "Perceptive, secure and well-developed answer with precise terminology and integrated evidence." },
                  { level: "Level 2", marks: "3-4", descriptor: "Clear, relevant points with some development and supporting detail." },
                  { level: "Level 1", marks: "1-2", descriptor: "Simple or partial points; limited development or relevance." },
                  ],
                commonErrors: ["'Writeing' with 'e' kept; 'freind' with wrong vowel order."],
              },
            },
            {
              id: "el11-u6-spelling-patterns-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Write about 200 words on strategies for improving spelling accuracy. Cover at least two methods (rules, patterns, mnemonics, proofreading) and explain why spelling matters in exams.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Spelling strategies", statement: "Rules, patterns, mnemonics, checking." },
                  { kind: "skill", name: "Exam awareness", statement: "Why accuracy affects marks." },
                ],
                steps: [
                  { reasoning: "Two or more strategies explained.", marks: 3, markCode: "AO4" },
                  { reasoning: "Examples given for at least one strategy.", marks: 2, markCode: "AO4" },
                  { reasoning: "Explains exam impact (credibility, marks, clarity).", marks: 2, markCode: "AO4" },
                  { reasoning: "Clear organisation and conclusion.", marks: 2, markCode: "AO4" },
                ],
                finalAnswer: "Improve spelling through rules (suffixes), patterns (i-before-e), mnemonics and proofreading; errors undermine credibility and cost marks.",
                levels: [
                  { level: "Level 3", marks: "8-9", descriptor: "Two strategies explained with examples and exam relevance." },
                  { level: "Level 2", marks: "5-7", descriptor: "Strategies present, partial examples." },
                  { level: "Level 1", marks: "1-4", descriptor: "Vague account." },
                ],
                commonErrors: ["No strategies named.", "No exam relevance."],
              },
            },
          ],
        },
        {
          id: "el11-u6-proofreading",
          title: "Proofreading and editing strategies",
          skill: "Use systematic proofreading techniques to catch and correct errors before submitting work.",
          sections: [
            { heading: "Proofreading vs editing", body: "**Editing** revises content, structure and style — big-picture changes. **Proofreading** checks surface errors — spelling, punctuation, grammar — after editing is done. Do editing first (does it say what you want?), then proofreading (is it error-free?)." },
            { heading: "Systematic proofreading techniques", body: "Don't just re-read quickly — you see what you expect, not what's there. Techniques: (1) read **aloud** — your ear catches errors your eye misses; (2) read **backwards** — forces focus on individual words; (3) check **one error type at a time** — spellings, then punctuation, then agreement; (4) leave a **time gap** — fresh eyes see more; (5) use a **checklist** — your common errors." },
            { heading: "Common exam errors", body: "The most frequent errors in exams: its/it's, their/there/they're, your/you're, to/too/two, affect/effect, missing apostrophes, comma splices, tense slips, subject-verb disagreement. Build a personal 'error list' — the mistakes YOU make — and check for those specifically." },
          ],
          keyFormulas: [
            { name: "Edit then proofread", statement: "Content/structure first, surface errors last." },
            { name: "Read aloud", statement: "Ear catches what eye misses." },
            { name: "One error type at a time", statement: "Systematic checking beats general re-reading." },
            { name: "Personal error list", statement: "Check for YOUR recurring mistakes specifically." },
          ],
          workedExample: {
            problem: "You have 5 minutes left in an exam. What's your proofreading strategy?",
            solution: "Don't try to proofread everything — prioritise: (1) check your most common errors (your personal list), (2) read the introduction and conclusion carefully (first impressions and final thoughts), (3) scan for its/it's, their/there, your/you're, to/too, affect/effect, (4) check question numbers match answers, (5) if time remains, read aloud the first paragraph of each section.",
          },
          questions: [
            {
              id: "el11-u6-proofreading-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the difference between editing and proofreading?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "They're the same thing" },
                  { id: "b", text: "Editing = content/structure; proofreading = surface errors" },
                  { id: "c", text: "Editing = spelling; proofreading = ideas" },
                  { id: "d", text: "Proofreading comes first" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Editing vs proofreading", statement: "Content revision vs surface error check." }],
                steps: [{ reasoning: "Editing is big-picture (content, structure); proofreading is surface (spelling, punctuation, grammar).", marks: 1, markCode: "AO4" }],
                finalAnswer: "**(b)** Editing = content/structure; proofreading = surface errors.",
                commonErrors: ["Confusing the two (c, d)."],
              },
            },
            {
              id: "el11-u6-proofreading-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Name two proofreading techniques.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Proofreading techniques", statement: "Systematic error-catching methods." }],
                steps: [
                  { reasoning: "Any two valid: read aloud, read backwards, one error type at a time, time gap, checklist, spell-check.", marks: 1, markCode: "AO4" },
                  { reasoning: "Second valid technique.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "E.g. read aloud and check one error type at a time (or read backwards, time gap, checklist).",
                commonErrors: ["Saying 'read it again' — not a technique."],
              },
            },
            {
              id: "el11-u6-proofreading-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain why reading your work aloud helps catch errors that silent reading misses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Reading aloud", statement: "Auditory processing catches different errors." }],
                steps: [
                  { reasoning: "Silent reading often 'autocorrects' — you see what you expect, not what's written.", marks: 1, markCode: "AO4" },
                  { reasoning: "Reading aloud engages hearing — awkward phrasing, missing words, wrong punctuation become audible.", marks: 1, markCode: "AO4" },
                  { reasoning: "Grammar errors that 'sound wrong' are caught by ear but missed by eye.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "Reading aloud bypasses visual autocorrection — your ear catches awkward grammar, missing words and punctuation errors your eye skips.",
                commonErrors: ["Saying it's just 'easier' without explaining mechanism."],
              },
            },
            {
              id: "el11-u6-proofreading-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: {
                title: "A paragraph with hidden errors",
                author: "Written for Akademik Space",
                source: "Student draft",
                text: "The students' project was a great sucess. They're results impressed the judges, and its clear that the team worked hard. The goverment should of supported them more.",
              },
              stem: "Find and correct ALL errors in this paragraph.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Error detection", statement: "Systematic identification of all error types." },
                  { kind: "skill", name: "Proofreading application", statement: "Applying knowledge to real text." },
                ],
                steps: [
                  { reasoning: "'sucess' -> 'success' (double c pattern).", marks: 1, markCode: "AO4" },
                  { reasoning: "'They're results' -> 'Their results' (possessive, not 'they are').", marks: 1, markCode: "AO4" },
                  { reasoning: "'its clear' -> 'it's clear' (it is).", marks: 1, markCode: "AO4" },
                  { reasoning: "'goverment' -> 'government' (missing n).", marks: 1, markCode: "AO4" },
                  { reasoning: "'should of' -> 'should have' (common error — 'of' vs 'have').", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "'The students' project was a great success. Their results impressed the judges, and it's clear that the team worked hard. The government should have supported them more.' — five errors.",
                commonErrors: ["Missing 'should of'.", "Missing its/it's distinction."],
              },
            },
            {
              id: "el11-u6-proofreading-q5",
              difficulty: "challenge",
              totalMarks: 6,
              parts: [
                { label: "a", prompt: "You have 5 minutes left in an exam. Outline your proofreading priorities.", marks: 3 },
                { label: "b", prompt: "Explain why checking your personal 'error list' is more effective than general re-reading.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Exam proofreading strategy", statement: "Prioritising limited time." },
                  { kind: "skill", name: "Targeted checking", statement: "Personal errors beat general review." },
                ],
                steps: [
                  { part: "a", reasoning: "Priorities: check most common errors, intro/conclusion, question numbers, key homophones (its/it's, their/there).", marks: 3, markCode: "AO4" },
                  { part: "b", reasoning: "Personal error list targets YOUR recurring mistakes — you know them, so you check specifically.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "General re-reading sees what you expect; targeted checking looks for known problems.", marks: 1, markCode: "AO4" },
                  { part: "b", reasoning: "More efficient — you spend time where errors actually occur.", marks: 1, markCode: "AO4" },
                ],
                finalAnswer: "(a) Prioritise common errors, intro/conclusion, question numbers. (b) Personal error list targets known weaknesses — more efficient than general re-reading.",
                  levels: [
                  { level: "Level 3", marks: "5-6", descriptor: "Perceptive, secure and well-developed answer with precise terminology and integrated evidence." },
                  { level: "Level 2", marks: "3-4", descriptor: "Clear, relevant points with some development and supporting detail." },
                  { level: "Level 1", marks: "1-2", descriptor: "Simple or partial points; limited development or relevance." },
                  ],
                commonErrors: ["Trying to proofread everything equally."],
              },
            },
            {
              id: "el11-u6-proofreading-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Write about 200 words on effective proofreading strategies for exam conditions. Cover at least two techniques and explain how to prioritise when time is short.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Proofreading strategies", statement: "Techniques for catching errors." },
                  { kind: "skill", name: "Time management", statement: "Prioritising under pressure." },
                ],
                steps: [
                  { reasoning: "Two or more techniques explained.", marks: 3, markCode: "AO4" },
                  { reasoning: "Time-short prioritisation explained.", marks: 2, markCode: "AO4" },
                  { reasoning: "Personal error list mentioned.", marks: 1, markCode: "AO4" },
                  { reasoning: "Clear organisation and conclusion.", marks: 3, markCode: "AO4" },
                ],
                finalAnswer: "Effective proofreading uses targeted techniques (read aloud, error checklist, one-type-at-a-time) and prioritises common errors and key sections when time is short.",
                levels: [
                  { level: "Level 3", marks: "8-9", descriptor: "Two techniques explained, prioritisation clear." },
                  { level: "Level 2", marks: "5-7", descriptor: "Techniques present, partial prioritisation." },
                  { level: "Level 1", marks: "1-4", descriptor: "Vague account." },
                ],
                commonErrors: ["No prioritisation.", "Generic 'check carefully' advice."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el11-u6-proofreading-notes", title: "Spelling and proofreading — notes",
      summary: "Suffix rules, i-before-e, homophones. Edit content first, then proofread surface errors using targeted techniques.",
      sections: [
        { heading: "Spelling rules", body: "Drop 'e' before vowel suffix; double consonant after short vowel; 'i before e except after c' (with exceptions)." },
        { heading: "Proofreading order", body: "Edit (content) → proofread (errors). Read aloud, one error type at a time, personal error list." },
        { heading: "Exam errors", body: "its/it's, their/there/they're, your/you're, to/too/two, should of->should have, affect/effect." },
      ],
    },
  },
];
