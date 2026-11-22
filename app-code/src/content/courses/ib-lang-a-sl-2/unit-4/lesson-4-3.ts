import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "langa-u4-lesson-4-3",
  code: "4-3",
  title: "Stylistic Analysis",
  goal: "I CAN perform fine-grained stylistic analysis of diction, syntax, register and deviation.",
  standards: ["Stylistics", "Close reading", "Analysis"],
  vocabulary: [
    { term: "Stylistics", definition: "The study of style — how linguistic choices create meaning and effect." },
    { term: "Diction", definition: "Word choice — the specific vocabulary a text uses, including connotation and register." },
    { term: "Syntax", definition: "Sentence structure — how clauses, phrases and punctuation are arranged." },
    { term: "Register", definition: "Level of formality: formal, neutral, informal, colloquial, technical." },
    { term: "Deviation", definition: "A departure from expected linguistic norms — unusual word order, neologism, or register mixing." },
    { term: "Foregrounding", definition: "Linguistic features that stand out — deviation or parallelism that draws attention to themselves." },
  ],
  concepts: [
    {
      id: "langa-u4-stylistics",
      title: "Stylistic analysis",
      skill: "Analyse diction, syntax, register and deviation to explain how style creates meaning.",
      lesson: {
        sections: [
          {
            heading: "What stylistics analyses",
            body: "Stylistics asks **how** a text means, not just **what** it means. It examines **diction** (word choice), **syntax** (sentence structure), **register** (formality), **sound** and **deviation** (departure from norms). Style is not decoration — it is the mechanism of meaning.",
          },
          {
            heading: "Diction and register",
            body: "**Diction** includes connotation — 'slim' vs 'skinny', 'frugal' vs 'stingy'. **Register** ranges from formal ('furthermore', 'one might argue') to colloquial ('gonna', 'stuff'). A text that mixes registers — formal syntax with slang vocabulary — creates tension or characterises a voice.",
          },
          {
            heading: "Syntax and deviation",
            body: "**Syntax** is the architecture of sentences: short sentences create urgency; long periodic sentences create suspense; fragments create emphasis. **Deviation** — breaking expected patterns — foregrounds meaning: 'He came. He saw. He conquered' is syntactically deviant and therefore memorable.",
          },
        ],
        keyFormulas: [
          { name: "Stylistic checklist", statement: "Diction + syntax + register + deviation + sound = style analysis" },
          { name: "Deviation principle", statement: "Breaking norms foregrounds meaning — ask why the text departs." },
        ],
        workedExample: {
          problem: "Analyse: 'The data indicates suboptimal outcomes.' versus 'The numbers show things aren't working.'",
          solution: "First: formal register, Latinate diction ('indicates', 'suboptimal'), nominalisation ('outcomes') — bureaucratic distance. Second: colloquial ('aren't', 'things'), concrete verbs — directness. Same content, different style = different relationship to truth.",
        },
      },
      questions: [
        {
          id: "langa-u4-sq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Stylistics' is the study of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How linguistic choices create meaning" },
              { id: "b", text: "Historical context" },
              { id: "c", text: "Character psychology" },
              { id: "d", text: "Plot structure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stylistics", statement: "The study of how style — linguistic choices — creates meaning." },
            ],
            steps: [
              { reasoning: "Stylistics analyses language choices: diction, syntax, register, sound.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How linguistic choices create meaning",
          },
        },
        {
          id: "langa-u4-sq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The committee has determined that the proposal, while containing certain merit, does not presently align with strategic imperatives. Further review is recommended.",
          },
          stem: "Analyse the stylistic features of this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register and diction", statement: "Formal register, nominalisation and euphemism create bureaucratic distance." },
            ],
            steps: [
              { reasoning: "Register: formal bureaucratic — 'the committee has determined', 'strategic imperatives', 'further review is recommended'.",
              marks: 1, markCode: "M" },
              { reasoning: "Diction: nominalisation ('alignment', 'review') and Latinate vocabulary ('imperatives', 'presently') abstract the decision — the proposal is never plainly rejected.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the style enacts bureaucratic caution — 'while containing certain merit' is a euphemism for 'we think it's bad but won't say so'; the language protects the committee from accountability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal register, nominalisation and euphemism create bureaucratic distance — the style protects the institution by obscuring the decision.",
            commonErrors: ["Describing the content without analysing the stylistic choices that produce the effect."],
          },
        },
        {
          id: "langa-u4-sq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Protest",
            author: "Written for Akademik Space",
            source: "Original speech extract",
            text: "They tell us to wait. They tell us to be patient. They tell us the time is not right.\n\nThe time is always not right. That is what they count on.",
          },
          stem: "Analyse the stylistic techniques in this speech extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anaphora and register", statement: "Repetition builds momentum; the shift from reported speech to direct claim creates urgency." },
            ],
            steps: [
              { reasoning: "Anaphora: 'They tell us' repeated three times — the triple structure mimics the relentless pressure of delay.", marks: 1, markCode: "M" },
              { reasoning: "The reported speech ('They tell us to wait') is answered by direct assertion ('The time is always not right') — the shift from 'they say' to 'I say' enacts the break from deference.", marks: 1, markCode: "M" },
              { reasoning: "Short sentences in the second paragraph ('That is what they count on') create percussive urgency — the syntax accelerates as the argument tightens.", marks: 1, markCode: "M" },
              { reasoning: "Register: the speech moves from reported deferral to direct accusation — style enacts the political break it demands.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anaphora mimics delay's relentlessness; the shift to direct assertion enacts defiance; short sentences accelerate the argument.",
            commonErrors: ["Identifying 'repetition' without analysing its rhythmic and argumentative function."],
          },
        },
        {
          id: "langa-u4-sq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a stylistic analysis paragraph on the following extract, addressing diction, syntax and register.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Dear Margaret,\n\nI write to you in a state of some agitation. The matter is delicate. I have considered all angles, weighed every contingency, and arrived at a conclusion which I shall not commit to paper.\n\nYours, as ever, T.",
          },
          parts: [
            { label: "a", prompt: "Analyse the register and its relationship to the letter's content.", marks: 3 },
            { label: "b", prompt: "Analyse the syntax — sentence length and structure.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect of the closing 'I shall not commit to paper'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register, syntax and effect", statement: "Formal register + controlled syntax + withheld content = style as character." },
            ],
            steps: [
              { part: "a", reasoning: "Register: formal, impersonal — 'some agitation' (understatement), 'delicate', 'every contingency' — the language of diplomacy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The register is deliberately controlled: the writer performs composure even while confessing agitation — style contradicts content.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Dear Margaret' and 'Yours, as ever, T.' frame the formality — intimacy of address, distance of signature.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Syntax: the middle sentence is long and periodic — 'I have considered all angles, weighed every contingency, and arrived at a conclusion' — the accumulation mirrors the deliberation it describes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The final clause 'which I shall not commit to paper' is a syntactic turn — the long sentence breaks its own promise, the grammar enacting the withholding.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Short sentences elsewhere ('The matter is delicate.') punctuate the controlled rhythm — the letter's style is a performance of self-command.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'I shall not commit to paper' — the ultimate stylistic irony: a letter that announces it will not say what it came to say; the form contradicts its own purpose.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Effect: the reader is left with the agitation but not the matter — the style has created a mystery the content refuses to resolve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Formal register performs composure over agitation. (b) Periodic syntax mirrors deliberation; the final clause breaks its own promise. (c) The letter announces its own silence — style as self-contradiction.",
            commonErrors: ["Analysing content without analysing the linguistic choices that produce it."],
          },
        },
        {
          id: "langa-u4-sq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Diction' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Word choice, including connotation and register" },
              { id: "b", text: "The plot's development" },
              { id: "c", text: "The physical setting" },
              { id: "d", text: "Sentence length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diction", statement: "Word choice — vocabulary, connotation and register." },
            ],
            steps: [
              { reasoning: "Diction is word choice at the level of individual words and their associations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Word choice and connotation",
          },
        },
        {
          id: "langa-u4-sq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Register' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of characters" },
              { id: "b", text: "The weather described in the text" },
              { id: "c", text: "The level of formality of the language" },
              { id: "d", text: "The rhyme scheme" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register", statement: "Formality level: formal, neutral, informal, colloquial, technical." },
            ],
            steps: [
              { reasoning: "Register measures how formal or colloquial the language is.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Level of formality",
          },
        },
        {
          id: "langa-u4-sq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "The difference between 'frugal' and 'stingy' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spelling only" },
              { id: "b", text: "Grammatical tense" },
              { id: "c", text: "Connotation: 'frugal' approves the trait, 'stingy' condemns it" },
              { id: "d", text: "Word length" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "Near-synonyms carry different attitudes — diction is argument." },
            ],
            steps: [
              { reasoning: "Both words describe careful spending, but 'frugal' carries approval and 'stingy' carries contempt.", marks: 1, markCode: "M" },
              { reasoning: "The difference is evaluative, not denotative — connotation does the work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Connotation — approval vs contempt",
          },
        },
        {
          id: "langa-u4-sq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Weather Report",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Precipitation is anticipated across the region, with a sixty percent probability of measurable moisture. Residents are advised to employ appropriate outer garments.",
          },
          stem: "Analyse the stylistic features of this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register and diction", statement: "Technical register and Latinate diction create institutional distance from ordinary experience." },
            ],
            steps: [
              { reasoning: "Register: formal-technical — 'precipitation', 'anticipated', 'measurable moisture' replace 'rain', 'expected', 'rain' with institutional vocabulary.", marks: 1, markCode: "M" },
              { reasoning: "Diction: 'employ appropriate outer garments' — the bureaucratic periphrasis avoids saying 'wear a coat'; abstraction replaces the concrete.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the style treats weather as data — the extract's diction enacts the institutional perspective it describes; meaning is produced by register, not just content.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Technical register and Latinate diction ('precipitation', 'measurable moisture', 'employ outer garments') treat rain as data — style enacts institutional distance.",
            commonErrors: ["Summarising the forecast without analysing the technical diction that produces its voice."],
          },
        },
        {
          id: "langa-u4-sq9",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Run. Don't look back. The bridge is out — I saw the sign — run.",
          },
          stem: "Analyse the syntax of this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Syntax as meaning", statement: "Sentence structure enacts what it describes — fragments create urgency." },
            ],
            steps: [
              { reasoning: "The extract is built from fragments and imperatives — 'Run.' 'Don't look back.' — syntax stripped to command.", marks: 1, markCode: "M" },
              { reasoning: "The interrupted clause 'The bridge is out — I saw the sign — run' embeds a justification inside the panic; the dashes make information arrive in gasps.", marks: 1, markCode: "M" },
              { reasoning: "The repeated 'run' at both ends creates a frame — the command begins and ends the extract, enclosing the explanation in urgency.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the syntax enacts flight — no subordinate clauses, no time for subordination; the grammar itself runs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Syntax enacts flight: fragments and imperatives strip language to command; the framed 'run' encloses justification in urgency — grammar itself runs.",
            commonErrors: ["Describing the action without analysing how sentence structure produces the urgency."],
          },
        },
        {
          id: "langa-u4-sq10",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Interview",
            author: "Written for Akademik Space",
            source: "Original dialogue",
            text: "Look, mate, the situation is, like, complicated, yeah? Budget-wise we're, um, constrained, but morale-wise we're, like, through the roof.",
          },
          stem: "Analyse the register mixing in this extract.",
          parts: [
            { label: "a", prompt: "Identify the registers being mixed.", marks: 3 },
            { label: "b", prompt: "Analyse the effect of the mixing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register mixing", statement: "Colliding registers characterise voice and expose institutional language." },
            ],
            steps: [
              { part: "a", reasoning: "Informal register: 'mate', 'like', 'yeah', 'um' — colloquial Australian/British workplace speech.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Corporate register: 'budget-wise', 'constrained', 'morale-wise', 'through the roof' — management jargon.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The '-wise' constructions are pseudo-technical — they borrow analytical form to dress up evasion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The mixing characterises the speaker: casual enough to seem honest, jargon enough to avoid commitment — 'constrained' means 'no money' without saying so.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Morale-wise we're through the roof' — the jargon inflates a claim the colloquial frame cannot support; register mixing exposes spin.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect: the extract dramatises how institutional language colonises ordinary speech — the speaker's 'mate' is corporate before he finishes the sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Colloquial ('mate', 'like', 'yeah') mixed with corporate jargon ('budget-wise', 'constrained', 'morale-wise'). (b) The mixing characterises evasion — casual frame, institutional content; jargon inflates what the speaker won't commit to.",
            commonErrors: ["Listing slang and jargon without analysing what the collision reveals about the speaker."],
          },
        },
        {
          id: "langa-u4-sq11",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "The Orphanage",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The rain came down in sheets of tin. The tin roof sang its one note, over and over, like a bell with no clapper.",
          },
          stem: "Analyse the sound and imagery of this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound and imagery", statement: "Phonaesthetic patterns and sensory images create atmosphere and meaning." },
            ],
            steps: [
              { reasoning: "'Sheets of tin' — the simile makes rain metallic; the sibilance of 'sheets' mimics the hiss of rain on iron.", marks: 1, markCode: "M" },
              { reasoning: "'Tin' is repeated across both sentences — the word itself becomes the sound it describes; diction enacts the noise.", marks: 1, markCode: "M" },
              { reasoning: "'Sang its one note' — the roof is personified as a singer, but 'one note' reduces music to monotony; the simile 'bell with no clapper' completes the image of sound without meaning.", marks: 1, markCode: "M" },
              { reasoning: "'Over and over' — the temporal phrase mimics the repetition it describes; the syntax loops like the rain.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the extract's sound-patterning produces claustrophobic monotony — the orphanage's isolation is enacted by language that cannot stop repeating itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sound enacts meaning: 'tin' repeated becomes the noise it names; 'sheets' hisses; 'over and over' loops syntactically — the extract's monotony is its meaning.",
            commonErrors: ["Identifying devices (simile, personification) without analysing how sound patterns produce effect."],
          },
        },
        {
          id: "langa-u4-sq12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'periodic sentence' is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delays its main clause until the end, building suspense" },
              { id: "b", text: "Ends immediately" },
              { id: "c", text: "Has no verb" },
              { id: "d", text: "Is always short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Periodic sentence", statement: "Main clause deferred to the end for suspense." },
            ],
            steps: [
              { reasoning: "A periodic sentence withholds its main clause, accumulating modifiers first.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Main clause delayed to the end",
          },
        },
        {
          id: "langa-u4-sq13",
          difficulty: "core",
          totalMarks: 3,
          stem: "'Nominalisation' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using slang vocabulary" },
              { id: "b", text: "Repeating key words" },
              { id: "c", text: "Turning verbs into nouns, e.g. 'decided' becomes 'arrived at a decision'" },
              { id: "d", text: "Making sentences shorter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Nominalisation", statement: "Verb-to-noun conversion creates abstraction and bureaucratic distance." },
            ],
            steps: [
              { reasoning: "Nominalisation converts actions into things — 'we decided' becomes 'a decision was reached'.", marks: 1, markCode: "M" },
              { reasoning: "It hides agency and creates abstraction — the actor disappears into the process.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Turning verbs into nouns",
          },
        },
        {
          id: "langa-u4-sq14",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Memo",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Per our earlier correspondence, the undersigned wishes to express the view that the aforementioned matter might possibly warrant further consideration at a subsequent juncture.",
          },
          stem: "Analyse how this sentence's style obscures meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Obscuring style", statement: "Bureaucratic syntax and abstraction delay or avoid commitment." },
            ],
            steps: [
              { reasoning: "'Per our earlier correspondence' — the prepositional opener delays the subject; the sentence begins with procedure, not content.", marks: 1, markCode: "M" },
              { reasoning: "'The undersigned wishes to express the view' — triple nominalisation ('undersigned', 'view', 'express') buries the actor and the claim; who thinks what is never stated.", marks: 1, markCode: "M" },
              { reasoning: "'Might possibly warrant further consideration at a subsequent juncture' — four hedges in a row ('might', 'possibly', 'further', 'subsequent') ensure nothing is committed; the sentence's grammar is pure avoidance.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the style IS the meaning — the sentence performs what it says: endless deferral. A direct version ('I think we should discuss it again') would be a sentence; this is a non-sentence that mimics one.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The memo's obscurity is its meaning: nominalisation hides agency, hedge-stacking prevents commitment, and procedural openers delay content — style as institutional evasion.",
            commonErrors: ["Paraphrasing the sentence's content without analysing how its syntax produces the evasion."],
          },
        },
        {
          id: "langa-u4-sq15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Short sentences and fragments typically create:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal distance" },
              { id: "b", text: "Longer descriptions" },
              { id: "c", text: "Urgency, emphasis or interruption" },
              { id: "d", text: "Boredom" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sentence length and effect", statement: "Short units accelerate; fragments emphasise or interrupt." },
            ],
            steps: [
              { reasoning: "Short sentences and fragments produce percussive rhythm — urgency, emphasis, interruption.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Urgency, emphasis or interruption",
          },
        },
        {
          id: "langa-u4-sq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            source: "Original notice",
            text: "NOTICE: The library will be CLOSED on Tuesday. This is not a request. This is a statement of fact. Bring your books on Monday or face the consequences, which are severe and probably fines.",
          },
          stem: "Write a stylistic analysis paragraph on this extract, addressing diction, syntax and register.",
          parts: [
            { label: "a", prompt: "Analyse the diction and register.", marks: 2 },
            { label: "b", prompt: "Analyse the syntax.", marks: 3 },
            { label: "c", prompt: "Evaluate the overall effect of the notice's style.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Diction, syntax and effect", statement: "Style produces authority — the notice's formality enacts institutional power." },
            ],
            steps: [
              { part: "a", reasoning: "Diction: 'CLOSED' in capitals, 'statement of fact', 'consequences' — the vocabulary of authority and legal finality.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Register: formal-imperative — the notice speaks as institution, not person; 'This is not a request' asserts unilateral power.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Syntax: the short declaratives 'This is not a request. This is a statement of fact.' create percussive authority — each sentence a hammer blow.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The conditional 'or face the consequences' shifts to threat — syntax becomes intimidation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Which are severe and probably fines' — the relative clause collapses into a fragment; the syntax itself trails off, enacting the vagueness of the threat.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Effect: the notice's style produces bureaucratic menace — a library closure (a trivial event) is elevated to constitutional gravity; the disproportion IS the joke and the critique.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'Probably fines' — the hedge undermines the threat's certainty; the style almost apologises for its own power, revealing authority's dependence on voluntary compliance.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: the notice is effective satire — its over-formality exposes how institutions inflate trivial rules into commands; style reveals power's theatre.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Authoritarian diction ('CLOSED', 'statement of fact') and imperative register. (b) Peremptory short sentences; conditional threat; trailing relative clause enacts vagueness. (c) Bureaucratic menace — disproportionate formality satirises institutional power's theatre.",
            commonErrors: ["Summarising the notice's content without analysing how its style manufactures authority."],
          },
        },
      ],
    },
    {
      id: "langa-u4-deviation",
      title: "Deviation and foregrounding",
      skill: "Identify linguistic deviations and explain how foregrounding directs reader attention.",
      lesson: {
        sections: [
          {
            heading: "What is deviation?",
            body: "Deviation is a **departure from linguistic norms** — unusual word order, neologism, register mixing, grammatical irregularity. In literary texts, deviation is often deliberate: it makes language strange so that meaning becomes visible. 'The camels are coming' said normally is information; 'Camels! The camels are coming!' with exclamation is event.",
          },
          {
            heading: "Foregrounding",
            body: "**Foregrounding** is the umbrella term for linguistic features that stand out — deviation AND parallelism. When a text repeats a structure ('He came. He saw. He conquered.'), the parallelism foregrounds the pattern. Foregrounded features demand attention — the reader is made to notice the language itself.",
          },
          {
            heading: "Why it matters",
            body: "Foregrounding is meaning-making: the poet who breaks metre wants you to hear the break; the novelist who uses fragments wants you to feel the interruption. Ask: **what is being foregrounded, and why?** The answer is almost always about emphasis, emotion or theme.",
          },
        ],
        keyFormulas: [
          { name: "Deviation types", statement: "Word order + neologism + register mixing + grammatical irregularity" },
          { name: "Foregrounding test", statement: "What stands out? Why does the text want you to notice it?" },
        ],
        workedExample: {
          problem: "Analyse: 'The road goes. The road goes on.' versus 'The road goes on and on.'",
          solution: "The first fragments the sentence — each 'goes' is a separate beat, enacting the road's endlessness through syntax. The second is smoother, more conventional. Deviation (fragmentation) foregrounds the road's relentlessness.",
        },
      },
      questions: [
        {
          id: "langa-u4-dq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Deviation' in stylistics refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A spelling error" },
              { id: "b", text: "A departure from linguistic norms" },
              { id: "c", text: "A change in plot" },
              { id: "d", text: "A new character" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deviation", statement: "Departure from expected linguistic patterns." },
            ],
            steps: [
              { reasoning: "Deviation is a stylistic departure from norms, not an error.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Departure from linguistic norms",
          },
        },
        {
          id: "langa-u4-dq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The City",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The city does not sleep.\nIt blinks.\nIt breathes through its vents\nand dreams in traffic.",
          },
          stem: "Identify and analyse the deviations in this poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Deviation analysis", statement: "Fragments, personification and register shifts foreground meaning." },
            ],
            steps: [
              { reasoning: "Deviation: 'It blinks.' — a one-word sentence fragment that breaks the expected flow, foregrounding the city's mechanical alertness.", marks: 1, markCode: "M" },
              { reasoning: "Personification: 'dreams in traffic' — the city is given unconscious life; the deviation from literal description creates the poem's central image.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the deviations make the city seem alive but not human — 'blinks' and 'breathes' are mechanical, 'dreams' is ambiguous; the poem's style enacts the city's ambiguous status between organism and machine.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fragment ('It blinks'), personification ('dreams in traffic') foreground the city's ambiguous life — style enacts the theme.",
            commonErrors: ["Listing deviations without explaining their foregrounding effect."],
          },
        },
        {
          id: "langa-u4-dq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Sermon",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The preacher spoke of sin the way a dentist speaks of cavities — clinically, precisely, with a little fear in it. 'You are all infected,' he said. 'The question is not whether you will decay, but how much.'",
          },
          stem: "Analyse the stylistic deviation in the dentist comparison.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simile and register", statement: "The dentist simile mixes clinical and religious registers — a deviation that reframes sin." },
            ],
            steps: [
              { reasoning: "The simile 'the way a dentist speaks of cavities' is a register deviation — religious discourse borrows dental clinical language.", marks: 1, markCode: "M" },
              { reasoning: "'Clinically, precisely, with a little fear in it' — the adverbial list specifies the dentist's manner, importing its emotional temperature into the preacher's.", marks: 1, markCode: "M" },
              { reasoning: "The effect: sin is reframed as disease — not moral failing but infection, decay, something to be treated rather than confessed; the deviation reveals the sermon as public health, not theology.", marks: 1, markCode: "M" },
              { reasoning: "'How much' at the end — the quantification of sin continues the dental metaphor: decay is measurable, progressive, preventable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The dentist simile is a register deviation that reframes sin as disease — clinical language transforms theology into public health.",
            commonErrors: ["Identifying the simile without analysing the register mixing it creates."],
          },
        },
        {
          id: "langa-u4-dq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a stylistic analysis paragraph on the following extract, identifying deviations and their foregrounding effects.",
          extract: {
            title: "The Machine",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The machine does not sleep.\nIt does not dream.\nIt does not ask\nwhy it was built.\n\nIt only hums\nits one note\nand waits\nfor the next instruction.",
          },
          parts: [
            { label: "a", prompt: "Identify two deviations or foregrounding features.", marks: 2 },
            { label: "b", prompt: "Analyse how the anaphora 'does not' structures the poem's argument.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect of the final image 'waits / for the next instruction'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Foregrounding and structure", statement: "Anaphora, fragments and negation build the poem's meditation on machine consciousness." },
            ],
            steps: [
              { part: "a", reasoning: "Deviation 1: 'It does not ask / why it was built' — the negation of the most human question foregrounds the machine's lack of purpose-awareness.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Deviation 2: the line break 'waits / for the next instruction' — the enjambment separates waiting from its object, making the machine's passivity literal in the syntax.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The anaphora 'does not' repeated three times builds a litany of absences — sleep, dream, question — each negation deepening the machine's emptiness.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The structure moves from negation (what it lacks) to action (what it does): 'only hums / its one note' — the 'only' is the poem's pivot, reducing existence to a single function.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The syntactic parallelism ('does not' ×3, then 'only') enacts the machine's binary logic — it either lacks or performs, nothing between.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'Waits / for the next instruction' — the final image is devastating: the machine's only future is another command; its 'waiting' is not hope but programming.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The enjambment makes 'waits' a complete beat — a full stop in the middle of the sentence — so the machine's waiting is enacted as a pause with no resolution.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: the poem's stylistic restraint — short lines, repetition, negation — mirrors the machine's own minimalism; form and content are identical.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Negation of 'why', enjambed 'waits'. (b) Anaphora builds litany of absences; 'only' pivots to pure function. (c) 'Waits for the next instruction' — waiting as programming; form mirrors machine minimalism.",
            commonErrors: ["Listing devices without analysing how they enact the poem's meditation on consciousness."],
          },
        },
        {
          id: "langa-u4-dq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Foregrounding' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linguistic features that stand out and demand attention" },
              { id: "b", text: "Footnotes in poetry" },
              { id: "c", text: "Hiding meaning from the reader" },
              { id: "d", text: "Stage directions in drama" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Foregrounding", statement: "Features that stand out — deviation or parallelism — and direct attention." },
            ],
            steps: [
              { reasoning: "Foregrounding makes linguistic features visible so the reader notices the language itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Features that stand out and demand attention",
          },
        },
        {
          id: "langa-u4-dq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'neologism' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An old proverb" },
              { id: "b", text: "A foreign loanword only" },
              { id: "c", text: "A newly coined word or phrase" },
              { id: "d", text: "A spelling mistake" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neologism", statement: "Newly invented word — a deliberate deviation from the lexicon." },
            ],
            steps: [
              { reasoning: "A neologism is a word coined for the occasion — invention as deviation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Newly coined word",
          },
        },
        {
          id: "langa-u4-dq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "In 'He came. He saw. He conquered.', the deviation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The subject pronoun" },
              { id: "b", text: "The vocabulary used" },
              { id: "c", text: "Syntactic parallelism that foregrounds the triadic structure" },
              { id: "d", text: "The past tense" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallelism", statement: "Repeated structure foregrounds pattern — meaning through form." },
            ],
            steps: [
              { reasoning: "The three clauses share identical syntax — subject-verb, escalating verbs — a foregrounded pattern.", marks: 1, markCode: "M" },
              { reasoning: "The parallelism makes the conquest memorable and mechanical — form enacts the inevitability of victory.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Syntactic parallelism foregrounding triadic structure",
          },
        },
        {
          id: "langa-u4-dq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Coast",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The sea. The gulls. The rope.\nNothing else.",
          },
          stem: "Identify and analyse the deviations in this poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Deviation analysis", statement: "Fragments and minimal syntax foreground what the poem refuses to say." },
            ],
            steps: [
              { reasoning: "Deviation: three noun-phrase fragments — 'The sea. The gulls. The rope.' — sentences reduced to objects; syntax itself is stripped.", marks: 1, markCode: "M" },
              { reasoning: "'Nothing else' — the final line is a negation that completes the fragments; the poem's whole syntax is a catalogue of what is present and what is absent.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the deviation enacts desolation — a voice so reduced it can only name three things and deny the rest; the rope (suggesting a noose or mooring) hangs unexplained, its ambiguity load-bearing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fragments ('The sea. The gulls. The rope.') and the negating 'Nothing else' foreground absence — syntax stripped to catalogue, desolation enacted by what grammar refuses.",
            commonErrors: ["Listing 'fragments' without analysing what the reduction of syntax conveys."],
          },
        },
        {
          id: "langa-u4-dq9",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Argument",
            author: "Written for Akademik Space",
            source: "Original dialogue",
            text: "She said — and I quote — that the plan was 'suboptimal', which is, like, corporate for rubbish, and honestly? Fair enough.",
          },
          stem: "Analyse the register deviations in this dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register deviation", statement: "Mixing formal and colloquial registers characterises speakers and exposes institutional language." },
            ],
            steps: [
              { reasoning: "'Suboptimal' is corporate register — the quoted word is flagged by scare quotes and the gloss 'corporate for rubbish', marking it as institutional euphemism.", marks: 1, markCode: "M" },
              { reasoning: "'And I quote' — the speaker performs quotation, stepping outside her own report to comment on its language; the meta-commentary is itself colloquial.", marks: 1, markCode: "M" },
              { reasoning: "'Which is, like, corporate for rubbish' — the colloquial frame ('like') translates the jargon into plain speech; the deviation exposes what 'suboptimal' conceals.", marks: 1, markCode: "M" },
              { reasoning: "'And honestly? Fair enough.' — the sentence-final tag question plus verdict compresses judgement into casual rhythm; the register drops to vernacular for the conclusion, so the dismissal lands as common sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Register deviation: corporate 'suboptimal' is quoted, glossed and dismissed in colloquial frame — the mixing exposes institutional euphemism and delivers judgement as common sense.",
            commonErrors: ["Identifying 'suboptimal' as jargon without analysing how the colloquial frame weaponises it."],
          },
        },
        {
          id: "langa-u4-dq10",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Instruction",
            author: "Written for Akademik Space",
            source: "Original notice",
            text: "Do not touch the exhibits. Do not touch the exhibits. Do NOT touch — the glass is older than your country.",
          },
          stem: "Analyse the deviations and foregrounding in this notice.",
          parts: [
            { label: "a", prompt: "Identify the deviations and foregrounding features.", marks: 3 },
            { label: "b", prompt: "Analyse their effect.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Deviation and foregrounding", statement: "Repetition, capitalisation and hyperbole foreground the notice's escalating warning." },
            ],
            steps: [
              { part: "a", reasoning: "Repetition: 'Do not touch the exhibits' twice verbatim — the duplicated command foregrounds itself; the reader notices the wording before the content.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Capitalisation deviation: 'Do NOT touch' breaks the sentence-case norm — orthographic emphasis signals rising urgency.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hyperbole: 'the glass is older than your country' — deliberate exaggeration that foregrounds the object's value over the visitor's status.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The escalation — repeat, caps, hyperbole — enacts a warning that starts reasonable and ends absurd; the notice's style performs the institution's thin patience.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Older than your country' inverts the expected hierarchy — the object outranks the nation's history; the hyperbole reveals what the museum actually values.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect: the foregrounded language makes the reader hear the notice as voice — repetition becomes insistence, caps become anger, hyperbole becomes desperate dignity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Verbatim repetition, capitalisation shift, hyperbole. (b) Escalation enacts rising institutional irritation; 'older than your country' reveals the object's priority over the visitor — foregrounding makes the notice a voice.",
            commonErrors: ["Listing 'repetition' without analysing the escalation from command to hyperbole."],
          },
        },
        {
          id: "langa-u4-dq11",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "The Litany",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "We came. We saw. We built. We stayed. We forgot we came.",
          },
          stem: "Analyse the parallelism and its final deviation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallelism and volta", statement: "A repeated pattern builds expectation; the break in the pattern is the meaning." },
            ],
            steps: [
              { reasoning: "Four clauses share 'We + past verb' — 'came', 'saw', 'built', 'stayed' — a litany of colonial or settler action; the parallelism foregrounds the pattern of possession.", marks: 1, markCode: "M" },
              { reasoning: "The verbs escalate from observation ('saw') to construction ('built') to permanence ('stayed') — the syntax narrates settlement as inevitability.", marks: 1, markCode: "M" },
              { reasoning: "The final line breaks the pattern: 'We forgot we came' adds a reflexive verb and reverses the litany's direction — the conquerors' own erasure begins.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the deviation at the end retroactively poisons the parallelism — every 'we' action now reads as a step toward the forgetting; form enacts the arc from presence to absence.", marks: 1, markCode: "M" },
              { reasoning: "The poem's meaning lives in the break: the colonists' triumph is already their amnesia; parallelism built the empire, deviation dismantles it in five words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parallel 'We + verb' clauses build a litany of settlement; the final deviation — 'We forgot we came' — reverses the pattern and poisons it retroactively: form enacts empire's self-erasure.",
            commonErrors: ["Describing the repetition without analysing how the final line's break changes everything before it."],
          },
        },
        {
          id: "langa-u4-dq12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Parallelism foregrounds meaning by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Confusing the reader" },
              { id: "b", text: "Hiding the theme" },
              { id: "c", text: "Speeding up the plot" },
              { id: "d", text: "Repeating structure so the pattern itself becomes visible and meaningful" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallelism", statement: "Repeated structure draws attention to pattern." },
            ],
            steps: [
              { reasoning: "Parallelism makes the repeated structure itself the object of attention.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Making the pattern visible",
          },
        },
        {
          id: "langa-u4-dq13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Deliberate grammatical irregularity functions as deviation when it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is accidental" },
              { id: "b", text: "Appears in textbooks" },
              { id: "c", text: "Corrects grammar mistakes" },
              { id: "d", text: "Breaks expected patterns to make the reader notice the language itself" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Grammatical deviation", statement: "Breaking norms foregrounds — the irregularity is the message." },
            ],
            steps: [
              { reasoning: "Deviation requires intent — the irregularity must make the reader stop and notice.", marks: 1, markCode: "M" },
              { reasoning: "The break in expectation is what produces meaning; smooth grammar is invisible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Breaks patterns to foreground the language",
          },
        },
        {
          id: "langa-u4-dq14",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Arrival",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Into the room walked the stranger, backwards, smiling.",
          },
          stem: "Analyse the deviation in word order in this sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word-order deviation", statement: "Unusual syntax foregrounds — fronted adverbials and displaced participles create strangeness." },
            ],
            steps: [
              { reasoning: "'Into the room' is fronted — the locative phrase precedes the subject, delaying 'the stranger' and making the room the sentence's centre.", marks: 1, markCode: "M" },
              { reasoning: "'Walked' before 'the stranger' — the verb precedes its subject in effect; the stranger arrives as action before identity.", marks: 1, markCode: "M" },
              { reasoning: "'Backwards, smiling' — two trailing modifiers with no conjunction; the stranger's direction and expression are appended like afterthoughts, deepening the wrongness.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the syntax enacts the strangeness it describes — a normal entrance ('The stranger walked into the room') would be invisible; the deviation makes the reader experience the wrongness before understanding it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Word-order deviation: fronted locative, verb-before-identity effect, unconnected trailing modifiers — syntax enacts strangeness before the reader can name it.",
            commonErrors: ["Noting 'unusual word order' without analysing how each displacement contributes to the effect."],
          },
        },
        {
          id: "langa-u4-dq15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Writers use deviation primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid editing" },
              { id: "b", text: "Fill space" },
              { id: "c", text: "Imitate errors" },
              { id: "d", text: "Foreground meaning — making language strange so meaning becomes visible" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose of deviation", statement: "Deviation makes the familiar strange so attention is forced." },
            ],
            steps: [
              { reasoning: "Deviation's function is foregrounding — estrangement reveals what habit conceals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Foreground meaning through estrangement",
          },
        },
        {
          id: "langa-u4-dq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Flood",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The river came up\ntook the bridge\ntook the church bell\ntook the names\nof everyone we loved\nand left the houses standing\nso we could see\nwhat we had lost.",
          },
          stem: "Write a stylistic analysis paragraph on this poem, identifying deviations and foregrounding features.",
          parts: [
            { label: "a", prompt: "Identify two deviations or foregrounding features.", marks: 2 },
            { label: "b", prompt: "Analyse how the anaphora 'took' structures the poem's argument.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect of the final turn 'so we could see / what we had lost'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anaphora, deviation and volta", statement: "Repetition builds a pattern; the turn at the end redefines it." },
            ],
            steps: [
              { part: "a", reasoning: "Deviation 1: 'took the names / of everyone we loved' — the river takes abstractions (names) as readily as objects; the deviation literalises grief.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Deviation 2: 'left the houses standing' — the flood's selectivity is grammatically odd; destruction that spares the shell foregrounds what remains versus what is gone.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The anaphora 'took' repeats four times — bridge, bell, names, loved ones — building a litany of escalating loss; each repetition raises the stakes from infrastructure to persons.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The escalation moves from public (bridge) to sacred (church bell) to intimate (names, loved ones) — the syntax orders loss from civic to personal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The single subject 'The river' carries all the verbs — the flood is agent, the community passive; grammar enacts helplessness.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'So we could see / what we had lost' — the volta: destruction becomes instrument; the flood's cruelty is reframed as revelation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The enjambment 'see / what' separates seeing from its object — vision itself is deferred, mirroring how loss must be faced before it can be named.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: the turn risks sentimentality — 'could see what we had lost' is almost too neat; but the poem earns it because the litany made the loss concrete first; form prepares the emotional payoff.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) River 'took the names'; flood 'left the houses standing'. (b) 'Took' anaphora escalates from bridge to loved ones; river as sole agent enacts helplessness. (c) The volta reframes destruction as revelation — earned by the concrete litany, though bordering on neatness.",
            commonErrors: ["Listing 'anaphora' without analysing the escalation from public to intimate loss."],
          },
        },
      ],
    },
  ],
};
