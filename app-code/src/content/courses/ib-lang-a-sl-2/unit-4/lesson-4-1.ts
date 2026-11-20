import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "langa-u4-lesson-4-1",
  code: "4-1",
  title: "Critical Theory and Interpretive Frameworks",
  goal: "I CAN apply critical frameworks (feminist, Marxist, postcolonial, formalist) to generate interpretations of texts.",
  standards: ["Critical theory", "Analysis", "Interpretation"],
  vocabulary: [
    { term: "Critical theory", definition: "A systematic framework for interpreting texts — e.g. feminist, Marxist, postcolonial, psychoanalytic." },
    { term: "Feminist criticism", definition: "Reading that examines gendered power, representation of women, and patriarchal structures in texts." },
    { term: "Marxist criticism", definition: "Reading that examines class, economic relations and ideology in texts." },
    { term: "Postcolonial criticism", definition: "Reading that examines colonial power, representation of the 'other', and cultural hybridity." },
    { term: "Formalist criticism", definition: "Reading that focuses on the text's internal structure, language and form, excluding external context." },
    { term: "Psychoanalytic criticism", definition: "Reading that applies concepts like repression, desire and the unconscious to characters and texts." },
  ],
  concepts: [
    {
      id: "langa-u4-frameworks",
      title: "Critical frameworks",
      skill: "Apply feminist, Marxist, postcolonial and formalist frameworks to generate distinct interpretations of the same text.",
      lesson: {
        sections: [
          {
            heading: "What frameworks do",
            body: "A critical framework is a **generative lens** — it produces interpretations that a neutral reading might miss. Feminist criticism asks about gendered power; Marxist about class and economics; postcolonial about empire and the 'other'; formalist about structure and language alone. Each framework has characteristic questions.",
          },
          {
            heading: "Frameworks in practice",
            body: "Applying a framework means asking its questions of the text: **feminist** — who has power? how are women represented? **Marxist** — what are the economic relations? what is the ideology? **Postcolonial** — whose culture is centred? what does 'civilisation' assume? **Formalist** — how does the text's structure and language create meaning?",
          },
          {
            heading: "Frameworks as arguments",
            body: "A framework is not a label to attach — it is an argument to build. 'This is a feminist reading' is not analysis; 'the text figures female silence as complicity in patriarchal order' is. The framework generates the claim; the text provides the evidence.",
          },
        ],
        keyFormulas: [
          { name: "Framework questions", statement: "Feminist: power/gender | Marxist: class/economics | Postcolonial: empire/other | Formalist: structure/language" },
          { name: "Framework test", statement: "Does the reading generate a claim the text can support?" },
        ],
        workedExample: {
          problem: "Apply a Marxist reading to: 'The factory whistle blew at six, and the workers filed out like cattle.'",
          solution: "Marxist lens: the simile 'like cattle' dehumanises labour — workers reduced to animals in the industrial machine. The whistle's regimentation enacts the discipline of wage labour; the text exposes how industrial capitalism organises bodies.",
        },
      },
      questions: [
        {
          id: "langa-u4-fq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which question belongs to a postcolonial critical framework?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How does the rhyme scheme create meaning?" },
              { id: "b", text: "Whose culture is centred and whose is silenced?" },
              { id: "c", text: "What are the economic relations between characters?" },
              { id: "d", text: "How are women represented?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Postcolonial questions", statement: "Whose voice is centred, whose is silenced, what does 'civilisation' assume." },
            ],
            steps: [
              { reasoning: "Postcolonial criticism asks about empire, representation of the 'other', and cultural power.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whose culture is centred",
          },
        },
        {
          id: "langa-u4-fq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Boardroom",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She presented the quarterly figures with perfect composure. When the chairman suggested her analysis was 'a little emotional', she smiled and agreed to 'revisit' it — though everyone in the room knew she was right.",
          },
          stem: "Analyse this extract from a feminist perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feminist analysis", statement: "Gendered power: her competence is dismissed as emotion; her correctness is overridden by gender." },
            ],
            steps: [
              { reasoning: "Feminist lens: the chairman's 'a little emotional' is a gendered dismissal — her analytical rigour is recoded as feeling.", marks: 1, markCode: "M" },
              { reasoning: "Her 'smiled and agreed' performs compliance — the extract shows how patriarchal workplaces extract deference even from the competent.", marks: 1, markCode: "M" },
              { reasoning: "'Though everyone in the room knew she was right' intensifies the injustice — the room's silent knowledge makes the dismissal a collective act, not just one man's prejudice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feminist reading reveals gendered power: competence dismissed as emotion, correctness overridden, silence as complicity.",
            commonErrors: ["Identifying 'feminist' as a label without analysing the power dynamics."],
          },
        },
        {
          id: "langa-u4-fq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Estate",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The landlord collected the rents himself, in person, every quarter. He knew each tenant's name, each family's circumstances, each child's birthday. The tenants called him 'the father of the estate'.\n\nHe raised the rents by ten percent and called it 'a necessary adjustment'.",
          },
          stem: "Analyse this extract from a Marxist perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Marxist analysis", statement: "Class relations: paternalism as ideology masking exploitation." },
            ],
            steps: [
              { reasoning: "Marxist lens: the landlord's personal knowledge of tenants ('each child's birthday') is not benevolence but surveillance — power operating through intimacy.", marks: 1, markCode: "M" },
              { reasoning: "'The father of the estate' — the tenants' nickname reveals ideology: exploitation is reframed as paternal care, naturalising hierarchy.", marks: 1, markCode: "M" },
              { reasoning: "'A necessary adjustment' — the euphemism masks the rent rise as economic inevitability rather than choice; the landlord's language depoliticises his power.", marks: 1, markCode: "M" },
              { reasoning: "The extract's structure — intimacy then extraction — enacts how capitalism sustains itself through personalised domination rather than anonymous force.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Marxist reading: paternalism as ideology — personal knowledge as surveillance, 'father' as naturalised hierarchy, euphemism as depoliticisation.",
            commonErrors: ["Reading the landlord as simply kind or cruel without analysing the class structure."],
          },
        },
        {
          id: "langa-u4-fq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse the following extract from two different critical frameworks, showing what each reveals.",
          extract: {
            title: "The Missionary",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The missionary had learned the local language fluently — he could quote their proverbs, describe their festivals, sit cross-legged at their fires. He believed he understood them better than they understood themselves.\n\nHe wrote home: 'They are a noble people, trapped in darkness.'",
          },
          parts: [
            { label: "a", prompt: "Analyse from a postcolonial perspective.", marks: 4 },
            { label: "b", prompt: "Analyse from a formalist perspective.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multiple frameworks", statement: "Postcolonial asks about power/representation; formalist asks about structure/language." },
            ],
            steps: [
              { part: "a", reasoning: "Postcolonial: the missionary's fluency is not respect but appropriation — he 'understands them better than they understood themselves' is the colonial claim to epistemic superiority.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'A noble people, trapped in darkness' — the noble-savage binary: elevation and condemnation in one phrase, the classic colonial rhetoric.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "His cultural knowledge (proverbs, festivals, cross-legged) is displayed as conquest — understanding as possession.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The letter 'home' reveals the audience: his understanding is performed for the metropole, not offered to the people he claims to know.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formalist: the extract's power lies in its ironic structure — the catalogue of cultural competence ('proverbs', 'festivals', 'cross-legged') builds toward the revelation of its purpose.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The shift from 'he had learned' (active mastery) to 'he believed' (subjective certainty) to 'he wrote' (public performance) traces the construction of colonial authority through three verbs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Better than they understood themselves' — the superlative is the extract's formal pivot: knowledge becomes hierarchy through a single comparative phrase.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The final quotation is a volta — the private catalogue of competence is revealed as public justification for 'darkness', making the extract's form (catalogue → conclusion) enact its argument (knowledge → conquest).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Postcolonial: fluency as appropriation, noble-savage binary, knowledge as conquest, letter as performance. (b) Formalist: catalogue structure, verb progression, superlative pivot, catalogue-to-conclusion form enacting the argument.",
            commonErrors: ["Using frameworks as labels rather than generating claims from them."],
          },
        },
        {
          id: "langa-u4-fq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which question belongs to a Marxist critical framework?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How does the rhyme scheme structure the poem?" },
              { id: "b", text: "What economic relations and class positions organise the text's world?" },
              { id: "c", text: "How are the female characters represented?" },
              { id: "d", text: "What does the allusion to the myth add?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Marxist questions", statement: "Class, economic relations and ideology." },
            ],
            steps: [
              { reasoning: "Marxist criticism asks about class position and economic relations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Economic relations and class positions",
          },
        },
        {
          id: "langa-u4-fq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A formalist critic would argue that a text's meaning resides primarily in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's biography" },
              { id: "b", text: "The text's internal language and structure" },
              { id: "c", text: "The historical events of its period" },
              { id: "d", text: "The reader's personal response" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formalist scope", statement: "Meaning is produced by the text's own form and language." },
            ],
            steps: [
              { reasoning: "Formalism brackets external context — biography, history and reader response are excluded.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The text's internal language and structure",
          },
        },
        {
          id: "langa-u4-fq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which pairing correctly matches a framework to its characteristic question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Feminist — 'What are the economic relations between the characters?'" },
              { id: "b", text: "Postcolonial — 'How does the syntax create suspense?'" },
              { id: "c", text: "Formalist — 'Whose culture is centred in the text?'" },
              { id: "d", text: "Psychoanalytic — 'What does the character's silence repress?'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framework domains", statement: "Each framework has a characteristic domain of questions." },
            ],
            steps: [
              { reasoning: "Economic relations belong to Marxist, not feminist criticism; syntax belongs to formalist, not postcolonial; cultural centring belongs to postcolonial, not formalist.", marks: 1, markCode: "M" },
              { reasoning: "Repression and the unconscious are psychoanalytic concepts, so (d) pairs correctly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Psychoanalytic — repression",
          },
        },
        {
          id: "langa-u4-fq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Petition",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The petition had been signed by two hundred women. The clerk read it aloud in a voice that made it sound like weather — something that happened to the room rather than something the room had to answer. They voted to 'receive' it, which meant to note it and forget it.",
          },
          stem: "Analyse this extract from a feminist perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feminist analysis", statement: "Gendered power operates through language and procedure, not only through individuals." },
            ],
            steps: [
              { reasoning: "'Sound like weather' depersonalises two hundred women into a natural phenomenon — the clerk's delivery erases their agency before the vote even begins.", marks: 1, markCode: "M" },
              { reasoning: "'Receive' is a bureaucratic euphemism: the institution's vocabulary absorbs protest into procedure, so dissent is recorded and dismissed in the same act.", marks: 1, markCode: "M" },
              { reasoning: "The extract shows patriarchy not as a villain but as a system — the room does not refuse the petition, it processes it; feminist reading reveals power operating through ordinary procedure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feminist reading: the women's voice is depersonalised into 'weather'; 'receive' converts protest into paperwork — patriarchy as procedure, not person.",
            commonErrors: ["Looking for a male villain instead of analysing how institutional language neutralises women's demands."],
          },
        },
        {
          id: "langa-u4-fq9",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Shop",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The shop opened at nine. The manager counted the till twice — once for the owners, once for the record — and the difference, a few coins, was called 'shrinkage'. The assistants called it 'the tax'.",
          },
          stem: "Analyse this extract from a Marxist perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Marxist analysis", statement: "Class relations are produced through language: different words for the same extraction reveal different positions." },
            ],
            steps: [
              { reasoning: "The double counting — 'once for the owners, once for the record' — exposes that the books are not neutral: there are two versions of reality, one for capital and one for appearance.", marks: 1, markCode: "M" },
              { reasoning: "'Shrinkage' is management's euphemism — it converts theft-by-wages into an inventory accident, hiding who actually loses the coins.", marks: 1, markCode: "M" },
              { reasoning: "'The tax' is the workers' counter-name — they correctly identify the extraction as a levy imposed on them, naming the power relation the manager's vocabulary conceals.", marks: 1, markCode: "M" },
              { reasoning: "The extract's structure — two names for one act — enacts class consciousness: the assistants' language is truer than the owners' because it names who pays and who profits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Marxist reading: two vocabularies for one extraction — 'shrinkage' conceals wage-theft as accident, 'the tax' names it as class power.",
            commonErrors: ["Treating 'shrinkage' as merely dishonest bookkeeping without connecting it to the class relation between owners and assistants."],
          },
        },
        {
          id: "langa-u4-fq10",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Translator",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She translated for both sides and trusted neither. When the soldiers asked her to change a word — 'occupied' to 'administered' — she did, and felt the sentence change shape in her mouth like something swallowed.",
          },
          stem: "Analyse this extract from two different critical frameworks.",
          parts: [
            { label: "a", prompt: "Analyse from a postcolonial perspective.", marks: 3 },
            { label: "b", prompt: "Analyse from a psychoanalytic perspective.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multiple frameworks", statement: "Postcolonial asks about empire and language; psychoanalytic asks about repression and the body." },
            ],
            steps: [
              { part: "a", reasoning: "Postcolonial: 'occupied' to 'administered' is colonial euphemism in miniature — the soldiers' request is the civilising mission at the level of a single word.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "She 'trusted neither' — the translator occupies the hybrid position of the colonial intermediary, complicit with power yet outside it.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The extract shows language itself as a colonised territory: meaning is not neutral but fought over word by word.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Psychoanalytic: 'the sentence change shape in her mouth like something swallowed' — complicity is figured as ingestion, a physical act with bodily consequence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Her participation produces guilt she cannot vomit — the swallowed sentence becomes a repressed object she must carry.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Like something swallowed' makes linguistic betrayal somatic — the psyche registers what the professional role forbids her to feel.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Postcolonial: euphemism as colonial power, translator as hybrid intermediary, language as contested territory. (b) Psychoanalytic: complicity swallowed, guilt repressed, linguistic betrayal made somatic.",
            commonErrors: ["Applying one framework twice instead of letting each generate its own distinct claim."],
          },
        },
        {
          id: "langa-u4-fq11",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "The Archivist",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The archivist catalogued the letters by their silence. Where a name should have been, she wrote 'unidentified'. Where a date should have been, she wrote 'circa'. She believed she was being precise.",
          },
          stem: "Analyse this extract from a Marxist perspective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Marxist analysis", statement: "Official records are not neutral — they encode the power that produced them." },
            ],
            steps: [
              { reasoning: "Marxist lens: the archive is an instrument of power — who is named and who is 'unidentified' is a political decision disguised as cataloguing.", marks: 1, markCode: "M" },
              { reasoning: "'Circa' for a date is ideology in miniature: approximation replaces fact, and the record's vagueness protects the power that erased the specifics.", marks: 1, markCode: "M" },
              { reasoning: "The archivist 'believed she was being precise' — her faith in procedure is the mechanism by which the system reproduces itself; she is not its enemy but its functionary.", marks: 1, markCode: "M" },
              { reasoning: "The letters' 'silence' — the absent names and dates — is the trace of those the record excludes; the archive documents erasure as faithfully as it documents events.", marks: 1, markCode: "M" },
              { reasoning: "The extract's quiet horror: violence here is bureaucratic — people disappear into 'unidentified' not through dramatic action but through honest procedure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Marxist reading: the archive as instrument of power — 'unidentified' and 'circa' are erasure dressed as precision, and the archivist's belief in procedure is the system's alibi.",
            commonErrors: ["Reading the archivist as a neutral professional rather than an agent of the record's ideology."],
          },
        },
        {
          id: "langa-u4-fq12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A psychoanalytic critic would most likely focus on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rhyme scheme and metre" },
              { id: "b", text: "Characters' repressed desires and the unconscious" },
              { id: "c", text: "The economic structure of the plot" },
              { id: "d", text: "The historical period of composition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Psychoanalytic scope", statement: "Repression, desire and the unconscious." },
            ],
            steps: [
              { reasoning: "Psychoanalytic criticism applies concepts of the unconscious, repression and desire.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Repressed desires and the unconscious",
          },
        },
        {
          id: "langa-u4-fq13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes: 'This is a feminist text because the heroine is female.' Why is this claim weak?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Feminist criticism can only be applied to texts by women" },
              { id: "b", text: "It confuses subject matter with analysis — it labels the text rather than arguing a claim about power" },
              { id: "c", text: "Heroines cannot appear in feminist readings" },
              { id: "d", text: "It ignores the text's plot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Frameworks as arguments", statement: "A framework generates claims; naming a feature is not analysis." },
            ],
            steps: [
              { reasoning: "'The heroine is female' identifies a subject-matter fact, not a claim about gendered power.", marks: 1, markCode: "M" },
              { reasoning: "A strong claim would argue something — e.g. that the text figures female agency as constrained — using evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Labels rather than argues",
          },
        },
        {
          id: "langa-u4-fq14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Waiting",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "He waited. The letter did not come. He waited. The rain came instead.",
          },
          stem: "Analyse this extract from a formalist perspective, focusing on its structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formalist analysis", statement: "Meaning is produced by the text's internal arrangement — syntax, repetition, structure." },
            ],
            steps: [
              { reasoning: "The extract is built from four sentences of near-identical length — a chiasmic structure where 'waited' and 'came' alternate in a controlled pattern.", marks: 1, markCode: "M" },
              { reasoning: "'He waited' is repeated verbatim — the repetition is not rhetorical emphasis but mechanical insistence, enacting the waiting it describes.", marks: 1, markCode: "M" },
              { reasoning: "The substitution at the end — 'The rain came instead' — breaks the pattern: the expected noun (the letter) is replaced by weather, and the syntax itself enacts disappointment.", marks: 1, markCode: "M" },
              { reasoning: "Formalist reading: the extract's meaning is its structure — desire (waiting) and its frustration (the wrong 'came') are expressed purely through arrangement, not statement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formalist reading: the chiasmic structure — 'waited'/'came' alternating — enacts desire and disappointment through arrangement alone; the final substitution breaks the pattern meaningfully.",
            commonErrors: ["Describing the plot (he waited for a letter) without analysing how the sentence structure produces the effect."],
          },
        },
        {
          id: "langa-u4-fq15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the STRONGEST way to state a critical claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The text is basically about women.'" },
              { id: "b", text: "'The text figures female silence as complicity in patriarchal order.'" },
              { id: "c", text: "'I think the author probably supported women's rights.'" },
              { id: "d", text: "'This poem uses lots of imagery.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Quality of claims", statement: "Strong claims are specific, arguable and textually grounded." },
            ],
            steps: [
              { reasoning: "(b) makes a specific, arguable claim about how the text represents power — it can be tested against evidence.", marks: 1, markCode: "M" },
              { reasoning: "The others are vague, biographical or merely descriptive — they cannot be argued with evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Figures female silence as complicity in patriarchal order'",
          },
        },
        {
          id: "langa-u4-fq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Archive",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "In the archive, the rebel's name appears only in a margin note: 'Shot, 3rd March.' The official record calls him 'a local agitator, deceased.'",
          },
          stem: "Analyse this extract from two different critical frameworks and evaluate which yields deeper insight.",
          parts: [
            { label: "a", prompt: "Analyse from a postcolonial perspective.", marks: 3 },
            { label: "b", prompt: "Analyse from a formalist perspective.", marks: 3 },
            { label: "c", prompt: "Evaluate which framework yields deeper insight here.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multiple frameworks + evaluation", statement: "Each framework generates a distinct claim; evaluation compares their yield." },
            ],
            steps: [
              { part: "a", reasoning: "Postcolonial: 'local agitator' is the colonial archive's naming of resistance — the rebel is defined by the order he opposed, not by his own voice.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "His real name survives only in a margin — the unofficial trace — showing how colonial records marginalise the very people they document.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Deceased' is bureaucratic euphemism for 'shot' — the official language sanitises political murder into administration.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formalist: the extract's power is the contrast between margin and record — the name literally occupies the edge of the page, mirroring his marginal status.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Shot, 3rd March' versus 'a local agitator, deceased' — two registers collide: the terse factual margin note against the euphemistic official phrase.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The quotation marks around 'a local agitator, deceased' mark it as cited language — the extract quotes the archive quoting power.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Postcolonial reading yields the political claim — the archive as instrument of domination; formalist yields the formal claim — margin versus record as spatial metaphor.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Deeper insight: the postcolonial reading explains WHY the formal contrast exists — the margin/record structure is the material form of colonial power; form and politics are the same argument here.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Postcolonial: rebel named by the order he opposed; name survives only in margin; 'deceased' sanitises murder. (b) Formalist: margin vs record as spatial metaphor; register collision; quoted archive. (c) Postcolonial deeper — it explains the formal structure as the material form of power.",
            commonErrors: ["Treating the two frameworks as interchangeable rather than letting each generate its own claim."],
          },
        },
      ],
    },
    {
      id: "langa-u4-interpretation",
      title: "Interpretation and ambiguity",
      skill: "Generate and evaluate multiple defensible interpretations of a text.",
      lesson: {
        sections: [
          {
            heading: "Interpretation vs opinion",
            body: "An **interpretation** is a claim about meaning supported by textual evidence; an **opinion** is a preference ('I liked it'). Interpretations can be **defensible** (evidence supports them) or **speculative** (evidence is thin). The best interpretations acknowledge their own limits.",
          },
          {
            heading: "Ambiguity as resource",
            body: "Some texts are deliberately ambiguous — they sustain multiple readings. A poem about a door can be about opportunity or threat; a character's silence can be wisdom or fear. Ambiguity is not a problem to solve but a feature to analyse: **why** does the text refuse to settle?",
          },
          {
            heading: "Evaluating interpretations",
            body: "Ask: is the interpretation **grounded** in specific textual features? Is it **consistent** — does it account for the whole text, not just one detail? Is it **generative** — does it reveal something that changes how we read? An interpretation that only restates the plot has failed.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation test", statement: "Grounded + consistent + generative = defensible" },
          { name: "Ambiguity questions", statement: "Why does the text refuse to settle? What does the uncertainty achieve?" },
        ],
        workedExample: {
          problem: "A character smiles at a funeral. Give two defensible interpretations.",
          solution: "Interpretation 1: the smile is grief — a private memory of the deceased. Interpretation 2: the smile is performance — social convention overriding feeling. Both are grounded in 'smiles at a funeral'; the text's ambiguity is the point — we cannot know which.",
        },
      },
      questions: [
        {
          id: "langa-u4-iq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An 'interpretation' differs from an 'opinion' because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always correct" },
              { id: "b", text: "Is supported by textual evidence" },
              { id: "c", text: "Is longer" },
              { id: "d", text: "Is written by the author" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretation vs opinion", statement: "Interpretations are evidence-based claims about meaning." },
            ],
            steps: [
              { reasoning: "Interpretations are grounded in textual evidence; opinions are preferences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Supported by textual evidence",
          },
        },
        {
          id: "langa-u4-iq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Smile",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "At the funeral, she smiled. Not the smile of someone who had lost, but the smile of someone who had finally stopped pretending she hadn't.",
          },
          stem: "Give two defensible interpretations of the smile and explain what the extract's ambiguity achieves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity analysis", statement: "Multiple readings + analysis of why the text refuses to settle." },
            ],
            steps: [
              { reasoning: "Interpretation 1: the smile is authentic grief — 'finally stopped pretending' suggests a lifetime of suppression released.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation 2: the smile is still performance — 'not the smile of someone who had lost' could mean she never loved, or her grief is different.", marks: 1, markCode: "M" },
              { reasoning: "Ambiguity: the extract refuses to resolve whether the smile is truth or mask — the final clause 'stopped pretending' can mean either honesty or the end of a performance that was itself the truth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two readings: authentic release vs continued performance. The ambiguity makes the extract about the unknowability of others' grief.",
            commonErrors: ["Choosing one interpretation and ignoring the evidence for the other."],
          },
        },
        {
          id: "langa-u4-iq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Door",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The door was neither open nor closed. She stood before it for an hour, her hand on the handle, feeling the wood's cool indifference.\n\nThen she walked away — not because she had decided, but because the door had not.",
          },
          stem: "Analyse the ambiguity of the door and evaluate whether it enriches or weakens the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity evaluation", statement: "Does ambiguity deepen meaning or confuse? Judge with evidence." },
            ],
            steps: [
              { reasoning: "The door's state — 'neither open nor closed' — makes it a pure symbol: it represents choice, threshold, the undecidable.", marks: 1, markCode: "M" },
              { reasoning: "Her 'hand on the handle' and 'the wood's cool indifference' personify the door as withholding — the threshold refuses to decide for her.", marks: 1, markCode: "M" },
              { reasoning: "Enrichment: the ending 'she walked away — not because she had decided, but because the door had not' is a brilliant paradox — agency is asserted through refusal to choose, suggesting that sometimes not-choosing is the choice.", marks: 1, markCode: "M" },
              { reasoning: "Weakness risk: the extract's opacity may frustrate readers who want resolution — the door's meaning is never anchored to a concrete stakes (what is behind it?). Ambiguity works when it deepens, not when it merely withholds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ambiguity enriches: the undecidable door enacts the extract's theme of choice as non-choice. Risk: opacity without stakes may frustrate.",
            commonErrors: ["Praising ambiguity without testing whether it earns its obscurity."],
          },
        },
        {
          id: "langa-u4-iq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an interpretive paragraph on the following extract, offering one defensible interpretation and acknowledging its limits.",
          extract: {
            title: "The Lighthouse (extract)",
            author: "Revisit from Year 1",
            source: "Original prose extract",
            text: "On the last night of his watch, a ship answered his beam — one horn, low and clear, as if the sea had finally remembered his name.",
          },
          parts: [
            { label: "a", prompt: "State your interpretation (1-2 sentences).", marks: 2 },
            { label: "b", prompt: "Give three pieces of textual evidence.", marks: 3 },
            { label: "c", prompt: "Acknowledge one alternative reading or limitation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretive writing", statement: "Claim + evidence + acknowledged limits." },
            ],
            steps: [
              { part: "a", reasoning: "Interpretation example: 'The extract suggests that recognition arrives only after usefulness ends — the keeper's thirty years of unseen labour are answered precisely when they no longer matter.'", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Evidence 1: 'the last night of his watch' — the timing is cruel; recognition coincides with retirement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence 2: 'one horn, low and clear' — the minimal response suggests the answer was always possible, merely delayed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence 3: 'as if the sea had finally remembered his name' — the simile makes the sea a person, suggesting the keeper's true interlocutor was never human.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation example: 'Alternatively, the horn may be imagined — the extract's 'as if' hedges the moment, leaving open whether the answer is real or projected; the poem may be about the human need to believe we are remembered, not about being remembered.'", marks: 2, markCode: "R" },
              { part: "c", reasoning: "Acknowledging the alternative strengthens the interpretation — it shows the reader has tested the evidence rather than assumed it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interpretation: recognition arrives after usefulness ends. Evidence: last night, single horn, sea-as-person simile. Limitation: 'as if' hedges — the answer may be projected.",
            commonErrors: ["Interpretation without evidence; refusing to acknowledge alternative readings."],
          },
        },
        {
          id: "langa-u4-iq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'speculative' interpretation is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always wrong" },
              { id: "b", text: "Is supported by thin or absent textual evidence" },
              { id: "c", text: "Is written quickly" },
              { id: "d", text: "Concerns minor characters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Defensible vs speculative", statement: "Speculation outruns the evidence the text provides." },
            ],
            steps: [
              { reasoning: "Speculative readings make claims the text cannot support — the evidence is thin or missing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Thin or absent evidence",
          },
        },
        {
          id: "langa-u4-iq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Ambiguity in a literary text is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A flaw to be corrected" },
              { id: "b", text: "A feature that sustains multiple defensible readings" },
              { id: "c", text: "A sign the author failed" },
              { id: "d", text: "Irrelevant to analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity as resource", statement: "Ambiguity is a feature to analyse, not a problem to solve." },
            ],
            steps: [
              { reasoning: "Ambiguity allows several readings to be grounded in the same evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sustains multiple defensible readings",
          },
        },
        {
          id: "langa-u4-iq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A character smiles at bad news. Which pair of interpretations is MOST defensible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'She is happy' / 'She hates the news'" },
              { id: "b", text: "'The smile performs composure under grief' / 'The smile conceals relief that a threat has passed'" },
              { id: "c", text: "'She is a liar' / 'She is kind'" },
              { id: "d", text: "'The author dislikes her' / 'The author loves her'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating interpretations", statement: "Defensible readings are grounded, specific and about the text — not verdicts on character or author." },
            ],
            steps: [
              { reasoning: "(a) makes unsupported claims about feeling; (c) judges character rather than interpreting the smile; (d) speculates about the author.", marks: 1, markCode: "M" },
              { reasoning: "(b) offers two readings grounded in the act of smiling at bad news — performance versus concealed feeling.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Composure under grief / concealed relief",
          },
        },
        {
          id: "langa-u4-iq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Mirror",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She looked in the mirror and did not recognise the woman looking back. Then she smiled, and the woman in the glass smiled too — but it was not quite her smile.",
          },
          stem: "Give two defensible interpretations of the final image and explain what the extract's ambiguity achieves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity analysis", statement: "Multiple grounded readings + analysis of why the text refuses to settle." },
            ],
            steps: [
              { reasoning: "Interpretation 1: the 'not quite her smile' suggests the self has become alien — she performs a self she no longer inhabits; the mirror shows a stranger she is impersonating.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation 2: the doubled smile suggests divided consciousness — the woman in the glass is a second self, more honest than the face she shows the world.", marks: 1, markCode: "M" },
              { reasoning: "Ambiguity: 'not quite' refuses to say whether the glass-smile is truer or falser — the extract makes self-recognition undecidable, which is its theme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two readings: alienated self-performance vs divided honest self. Ambiguity makes self-recognition itself undecidable.",
            commonErrors: ["Forcing a single reading where the text deliberately sustains two."],
          },
        },
        {
          id: "langa-u4-iq9",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Will",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The will was read aloud. Everything went to the housekeeper — the house, the money, the dog. The lawyer said nothing. The family said nothing. Only the dog, old now, put its head on the housekeeper's knee, as if it had always known.",
          },
          stem: "Analyse the ambiguity of this extract and evaluate whether it enriches or weakens it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity evaluation", statement: "Does ambiguity deepen meaning or merely withhold? Judge with evidence." },
            ],
            steps: [
              { reasoning: "Interpretation 1: the will is genuine — the testator truly preferred the housekeeper; the family's silence is stunned injustice.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation 2: the will is suspect — 'as if it had always known' hints the dog recognised a rehearsed arrangement; the lawyer's silence implies complicity.", marks: 1, markCode: "M" },
              { reasoning: "The ambiguity is structural: two silences (lawyer, family) withhold the verdict — the extract refuses to tell us whether justice or fraud has occurred.", marks: 1, markCode: "M" },
              { reasoning: "Enrichment: the dog's gesture is the only 'evidence' and it is ambiguous — the extract makes the reader complicit in judging, which mirrors the family's position; ambiguity earns its keep by distributing judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ambiguity enriches: genuine will vs suspected fraud stays unresolved, and the dog's ambiguous gesture makes the reader share the family's judging position.",
            commonErrors: ["Deciding the will is fake (or real) without acknowledging the evidence supports both."],
          },
        },
        {
          id: "langa-u4-iq10",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "He wrote 'I am fine' and posted it before he could change his mind. The lie was small — he had eaten, he had slept — but the handwriting was large, the way lies get when they are trying to be believed.",
          },
          stem: "Analyse the ambiguity of the handwriting detail.",
          parts: [
            { label: "a", prompt: "Give two defensible interpretations of the handwriting.", marks: 3 },
            { label: "b", prompt: "Evaluate which interpretation the extract better supports.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretive evaluation", statement: "Offer competing readings, then test them against the whole text." },
            ],
            steps: [
              { part: "a", reasoning: "Interpretation 1: the large handwriting is performative — he writes boldly because the lie needs visibility; the hand betrays the intent the words conceal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Interpretation 2: the large handwriting is compensatory — the letters are big because he is trying to fill the page with reassurance, overproducing 'fine' to cover what is missing.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both readings share the premise that the hand reveals what the sentence conceals — they differ on whether the lie is aggressive or anxious.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Posted it before he could change his mind' supports the anxious reading — haste suggests fear of revision, not confidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'The way lies get when they are trying to be believed' supports the performative reading — the handwriting is legible as effort.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verdict: the extract supports both but tilts anxious — the hurry to post outweighs the boldness of the hand; the strongest reading is overcompensation masking fear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Performative boldness vs anxious overcompensation — both read the hand as betraying the lie. (b) Evidence tilts anxious: the haste to post suggests fear, not confidence.",
            commonErrors: ["Choosing a reading without testing it against all the textual evidence."],
          },
        },
        {
          id: "langa-u4-iq11",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "The Departure",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She left before dawn. The house was exactly as she had found it — except for the door, which she had left open a crack, 'in case,' she told no one.",
          },
          stem: "Analyse the ambiguity of 'in case' and evaluate whether it enriches or weakens the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ambiguity evaluation", statement: "Identify the withheld meaning, then judge whether the withholding earns its place." },
            ],
            steps: [
              { reasoning: "'In case' has no stated object — in case of what? Return, intruder, memory: the phrase is deliberately incomplete.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation 1: the open door is an act of hope — she leaves a possibility for return, for reconciliation, for the future she claims to leave.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation 2: the open door is an act of fear — she cannot fully close the house because closing it would confirm the departure is final.", marks: 1, markCode: "M" },
              { reasoning: "'She told no one' adds a third layer — the gesture is private, almost shameful; its meaning is withheld even from the person performing it.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation: ambiguity enriches — the door's openness is the extract's argument: departure without closure, a leaving that cannot finish itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'In case' withholds its object; readings of hope vs fear both hold; ambiguity enriches — the unfinished leaving is enacted by the unfinished phrase.",
            commonErrors: ["Guessing one specific meaning for 'in case' instead of analysing why the text withholds it."],
          },
        },
        {
          id: "langa-u4-iq12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'defensible' interpretation must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long" },
              { id: "b", text: "Grounded in specific textual evidence" },
              { id: "c", text: "Popular with readers" },
              { id: "d", text: "Written in the first person" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Defensibility", statement: "Defensible = grounded + consistent + generative." },
            ],
            steps: [
              { reasoning: "Defensibility requires textual grounding — evidence a reader can verify.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Grounded in textual evidence",
          },
        },
        {
          id: "langa-u4-iq13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which question best tests whether an interpretation is 'consistent'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is the interpretation interesting?" },
              { id: "b", text: "Does it account for the whole text rather than a single detail?" },
              { id: "c", text: "Does it use technical vocabulary?" },
              { id: "d", text: "Does it agree with the author's stated intention?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Consistency test", statement: "A consistent interpretation accounts for the whole text." },
            ],
            steps: [
              { reasoning: "Consistency means the reading holds across the entire text — it is not contradicted by other details.", marks: 1, markCode: "M" },
              { reasoning: "A reading built on one detail while ignoring the rest fails the consistency test.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Accounts for the whole text",
          },
        },
        {
          id: "langa-u4-iq14",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Photograph",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "In the photograph, everyone is smiling except the youngest child, who is looking past the camera — at something the photographer could not have known was there.",
          },
          stem: "Write an interpretive paragraph on this extract: state one interpretation, support it with evidence, and acknowledge one limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretive writing", statement: "Claim + evidence + acknowledged limits." },
            ],
            steps: [
              { reasoning: "Interpretation: the child's gaze figures a reality outside the frame — the family photograph's performed happiness is punctured by a witness to something the camera cannot capture.", marks: 1, markCode: "A" },
              { reasoning: "Evidence: 'everyone is smiling except' isolates the child as the sole non-performer; 'past the camera' makes the unseen visible; 'could not have known' gives the photographer (and reader) limited vision.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: the child's look 'at something' is unspecified — the extract withholds what is seen, making the look itself the subject.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: the extract does not say what the child sees — the interpretation may project (a threat? freedom? the future?) onto an absence the text refuses to fill.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Interpretation: the child's off-frame gaze punctures the photograph's performed happiness. Limitation: 'something' is unspecified — the reading may over-project.",
            commonErrors: ["Inventing what the child sees instead of analysing the act of looking."],
          },
        },
        {
          id: "langa-u4-iq15",
          difficulty: "core",
          totalMarks: 2,
          stem: "The BEST way to acknowledge a limitation of an interpretation is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Abandon the interpretation entirely" },
              { id: "b", text: "Admit the evidence is ambiguous and another reading is possible" },
              { id: "c", text: "Say vaguely that 'some might disagree'" },
              { id: "d", text: "Ignore counter-evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Acknowledging limits", statement: "Strong interpretations name the alternative they cannot exclude." },
            ],
            steps: [
              { reasoning: "Acknowledging limits means specifying the competing reading the evidence also permits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Name the alternative reading",
          },
        },
        {
          id: "langa-u4-iq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Bell",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The bell rang thirteen times. The village counted twelve and went to bed.",
          },
          stem: "Write an interpretive paragraph on this extract, offering one defensible interpretation and acknowledging its limits.",
          parts: [
            { label: "a", prompt: "State your interpretation (1-2 sentences).", marks: 2 },
            { label: "b", prompt: "Give three pieces of textual evidence.", marks: 3 },
            { label: "c", prompt: "Acknowledge one alternative reading or limitation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpretive writing", statement: "Claim + evidence + acknowledged limits." },
            ],
            steps: [
              { part: "a", reasoning: "Interpretation example: 'The extract suggests a community that survives by not counting — the thirteenth ring is a truth the village refuses, and its refusal is also its protection.'", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Evidence 1: 'thirteen times' — the impossible number is stated flatly, as if the narrative itself does not flinch.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence 2: 'counted twelve' — the village's arithmetic is a deliberate miscount; they know and choose twelve.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evidence 3: 'went to bed' — the response is domestic, not fearful; the community absorbs the anomaly into routine.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Alternative reading: the miscount may be innocent error, not refusal — 'counted twelve' could be fatigue or custom, making the extract about normalised strangeness rather than chosen denial.", marks: 2, markCode: "R" },
              { part: "c", reasoning: "Limitation: the extract withholds what the thirteenth ring means — omen, error, miracle — so the 'refusal' reading projects motive onto an unexplained event.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interpretation: the village survives by miscounting — refusal as protection. Evidence: thirteen rings, counted twelve, went to bed. Limitation: motive is projected; the thirteenth ring's meaning is withheld.",
            commonErrors: ["Asserting the miscount is deliberate without acknowledging the innocent-error reading."],
          },
        },
      ],
    },
  ],
};
