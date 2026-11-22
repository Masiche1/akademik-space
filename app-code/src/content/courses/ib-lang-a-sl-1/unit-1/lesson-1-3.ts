import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "langa-u1-lesson-1-3",
  code: "1-3",
  title: "Context and Authorial Purpose",
  goal: "I CAN identify contextual influences on a text and analyse an author's purpose and audience.",
  standards: ["Reading", "Analysis", "Context"],
  vocabulary: [
    { term: "Context", definition: "The circumstances surrounding a text's production: historical period, culture, author's life, intended audience." },
    { term: "Authorial purpose", definition: "What the writer intends the text to achieve: inform, persuade, entertain, provoke or commemorate." },
    { term: "Audience", definition: "The intended or assumed readers; texts are shaped by what the writer believes they know and value." },
    { term: "Intertextuality", definition: "The way a text echoes, quotes or responds to other texts, genres or cultural references." },
    { term: "Register", definition: "The level of formality of language, adapted to audience and purpose." },
    { term: "Occasion", definition: "The specific event or moment that prompts a text, e.g. a coronation, a war, an anniversary." },
  ],
  concepts: [
    {
      id: "langa-u1-context-purpose",
      title: "Context and purpose",
      skill: "Infer authorial purpose and audience from textual features and relate them to plausible contexts.",
      lesson: {
        sections: [
          {
            heading: "Reading purpose from the text",
            body: "Before researching context, infer it from the text itself. Look for **register** (formal, colloquial, technical), **content choices**, **structure** and **address** (does the writer speak to 'you', to a crowd, to posterity?). A text that lists facts plainly aims to inform; one that deploys emotional imagery aims to persuade or move.",
          },
          {
            heading: "Context as evidence",
            body: "Context explains **why** a text says what it says: a poem written during a war reads differently from one written in peacetime; a novel serialised in a magazine was shaped by its monthly deadlines and readers. Context is a lens, not a substitute for analysis — every contextual claim must be tied to a textual feature.",
          },
          {
            heading: "Audience and occasion",
            body: "Texts are written **for** someone **on** some occasion. A royal speech, a newspaper editorial and a private letter share subject matter but differ in diction, structure and assumed knowledge. Identifying the audience explains choices that otherwise seem arbitrary.",
          },
        ],
        keyFormulas: [
          { name: "Purpose signals", statement: "Register + structure + imagery + direct address → infer purpose (inform/persuade/move/record)" },
          { name: "Context test", statement: "Every contextual claim must point to a specific textual feature it explains." },
        ],
        workedExample: {
          problem: "A speech opens 'My fellow citizens' and ends 'May God bless this great nation.' What can be inferred?",
          solution: "The formal address and closing blessing indicate a public ceremonial occasion, a patriotic purpose and an audience of citizens — likely a political or commemorative speech.",
        },
      },
      questions: [
        {
          id: "langa-u1-cq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most directly signals a text's intended audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's nationality" },
              { id: "b", text: "The year of publication alone" },
              { id: "c", text: "The publisher's location" },
              { id: "d", text: "Direct forms of address and register" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience signals", statement: "Address terms and register reveal who the writer assumes is reading." },
            ],
            steps: [
              { reasoning: "'You', 'my fellow citizens' and formal or informal diction directly encode the intended reader.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Direct address and register",
            commonErrors: ["Assuming publication details alone determine audience."],
          },
        },
        {
          id: "langa-u1-cq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways context can change a reader's interpretation of a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Contextual interpretation", statement: "Historical, cultural and biographical context alters what words mean." },
            ],
            steps: [
              { reasoning: "Historical context: a text about empire reads differently once the reader knows the colonial reality behind it — irony or critique may become visible.", marks: 1, markCode: "M" },
              { reasoning: "Cultural context: references, allusions and assumptions that seem obscure can unlock the text's argument when explained.", marks: 1, markCode: "M" },
              { reasoning: "Biographical context: knowing the author's circumstances can explain preoccupations, but risks reducing the text to biography — it should illuminate, not replace, analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context reveals irony, decodes references and explains preoccupations — while analysis must still ground every claim in the text.",
            commonErrors: ["Using context as a substitute for textual analysis."],
          },
        },
        {
          id: "langa-u1-cq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The New Library",
            author: "Written for Akademik Space",
            source: "Original newspaper article",
            text: "The long-awaited public library opens its doors this Saturday, and officials promise 'a resource for every citizen'. The building, a converted warehouse on Foundry Lane, houses 40,000 volumes and a children's reading room.\n\n'This is not just a building,' said the mayor at Tuesday's ceremony. 'It is a statement of what this town believes in.' Critics note, however, that the nearest branch remains a two-hour bus ride away for residents in the northern districts.",
          },
          stem: "Analyse the author's purpose and audience in this article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Purpose and audience", statement: "The article informs but also subtly critiques through selective quotation and counter-evidence." },
            ],
            steps: [
              { reasoning: "Primary purpose: inform the public about the library's opening — facts, date, location, contents.", marks: 1, markCode: "M" },
              { reasoning: "Secondary purpose: balanced journalism — the mayor's quotation is followed by 'critics note', giving both celebration and criticism.", marks: 1, markCode: "M" },
              { reasoning: "The phrase 'a statement of what this town believes in' is reported speech that invites scepticism — the writer maintains distance from official rhetoric.", marks: 1, markCode: "R" },
              { reasoning: "Audience: local newspaper readers — assumed knowledge of Foundry Lane and bus routes; the critique of northern access targets civic-minded residents.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inform with journalistic balance: reports the opening while giving critics space, subtly questioning official optimism.",
            commonErrors: ["Assuming the writer endorses the mayor's view because the article reports it."],
          },
        },
        {
          id: "langa-u1-cq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Analyse how context and authorial purpose shape the following text.",
          extract: {
            title: "Lines for a Public Occasion",
            author: "Written for Akademik Space",
            source: "Original commemorative poem",
            text: "They are gone, the ones who kept the shore —\nwe light a candle for each name\nand let the sea take back the flame.\n\nLet no one say we have forgotten:\nwe walk this beach at first light still,\nthough all the names are only syllables\nagainst a wind that never stills.",
          },
          parts: [
            { label: "a", prompt: "Identify the likely occasion and audience for this poem.", marks: 2 },
            { label: "b", prompt: "Explain two ways the poem's form and language serve its commemorative purpose.", marks: 3 },
            { label: "c", prompt: "Evaluate the significance of 'all the names are only syllables' for the poem's treatment of memory.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Commemorative poetry", statement: "Public memorial verse balances private grief with collective ritual." },
            ],
            steps: [
              { part: "a", reasoning: "Occasion: an annual memorial — likely a remembrance day at a coastal town, given 'the shore' and 'the beach'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Audience: the community gathered for the ceremony; the poem's 'we' directly includes them.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The regular quatrain form with rhymed couplets gives the poem ceremonial order — suitable for public recitation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sensory ritual imagery (candles, first light, sea) grounds abstract grief in shared actions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The direct imperative 'Let no one say' addresses the audience, turning private mourning into collective vow.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "'Only syllables' reduces names to sound — memory survives as ritual sound rather than recoverable identity, a quietly devastating admission.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Yet 'the wind that never stills' insists the ritual continues — the poem finds dignity in persistence despite inevitable forgetting.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Memorial ceremony for a coastal community. (b) Formal quatrains suit public recitation; ritual imagery and direct address create collective vow. (c) Names decay to sound, but the ritual endures — memory as practice, not possession.",
            commonErrors: ["Ignoring the poem's public ceremonial context and reading it as private lament only."],
          },
        },
        {
          id: "langa-u1-cq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A text's 'register' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the level of formality of its language" },
              { id: "b", text: "the genre of the text" },
              { id: "c", text: "the number of its readers" },
              { id: "d", text: "its publication date" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register", statement: "Register is the level of formality — formal, neutral or colloquial — adapted to audience and purpose." },
            ],
            steps: [
              { reasoning: "Register describes how formal the language is, not what kind of text it is.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The level of formality of its language",
            commonErrors: ["Confusing register with genre — a formal letter and a formal report share register but differ in type."],
          },
        },
        {
          id: "langa-u1-cq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'occasion' of a text is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the length of the text" },
              { id: "b", text: "the author's nationality" },
              { id: "c", text: "the price of the publication" },
              { id: "d", text: "the specific event or moment that prompts the text" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Occasion", statement: "Occasion is the specific event or moment — a coronation, a war, an anniversary — that prompts a text." },
            ],
            steps: [
              { reasoning: "Occasion names the triggering event, not the text's form or market.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The specific event or moment that prompts the text",
            commonErrors: ["Confusing occasion with context generally — occasion is the specific trigger within the wider context."],
          },
        },
        {
          id: "langa-u1-cq7",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "A Letter",
            author: "Written for Akademik Space",
            source: "Original letter",
            text: "Dear Dr. Almeida,\n\nI am writing to complain about the repair carried out at my flat last Tuesday. The work was left unfinished and the noise continued until midnight. I would like a full explanation and, if possible, a partial refund.\n\nYours sincerely,\nR. Okafor",
          },
          stem: "What is the writer's primary purpose in this letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To complain formally and request redress" },
              { id: "b", text: "To persuade the reader to buy a product" },
              { id: "c", text: "To inform the reader about a new building" },
              { id: "d", text: "To entertain the reader with a story" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose signals", statement: "The verb 'complain', the formal register and the explicit request for 'explanation' and 'refund' reveal purpose." },
            ],
            steps: [
              { reasoning: "The letter states its purpose in its own words: 'to complain' and to request 'explanation' and 'refund'.", marks: 1, markCode: "M" },
              { reasoning: "The formal salutation and 'Yours sincerely' confirm a formal complaint letter.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To complain formally and request redress",
            commonErrors: ["Reading the letter as merely informative — it also demands action."],
          },
        },
        {
          id: "langa-u1-cq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Editorial",
            author: "Written for Akademik Space",
            source: "Original newspaper editorial",
            text: "The council's decision is not merely unwise; it is unlawful. For a body elected to serve the public, this is not a policy difference — it is a betrayal of the mandate. We call on the mayor to reverse it before the courts are forced to act.",
          },
          stem: "What is the dominant tone and purpose of this editorial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Persuasive condemnation urging reversal" },
              { id: "b", text: "Humorous commentary on local politics" },
              { id: "c", text: "Neutral reporting of a council meeting" },
              { id: "d", text: "A balanced review of two policy options" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose signals", statement: "Loaded diction ('betrayal', 'unlawful') and the imperative 'We call on' signal persuasion, not neutrality." },
            ],
            steps: [
              { reasoning: "Value-laden words ('betrayal of the mandate') and the direct call for reversal mark a persuasive, condemnatory purpose.", marks: 1, markCode: "M" },
              { reasoning: "The editorial speaks as 'we', claiming a public-advocate voice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Persuasive condemnation urging reversal",
            commonErrors: ["Assuming editorials are neutral because they report facts — this one argues."],
          },
        },
        {
          id: "langa-u1-cq9",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Film Review",
            author: "Written for Akademik Space",
            source: "Original review",
            text: "This film is not for everyone. That is precisely its virtue. If you need your stories to reassure you, look elsewhere; if you can bear a work that trusts its audience to sit with discomfort, this is essential viewing.",
          },
          stem: "How does the reviewer use audience definition to serve the review's purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By recommending the film to children" },
              { id: "b", text: "By claiming the film will please all viewers" },
              { id: "c", text: "By refusing to evaluate the film at all" },
              { id: "d", text: "By excluding a mainstream audience in order to flatter and challenge a niche one" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience shaping", statement: "Defining who a text is 'not for' can flatter the intended reader and raise the text's prestige." },
            ],
            steps: [
              { reasoning: "'Not for everyone' first excludes the mass audience, then 'its virtue' converts exclusion into praise.", marks: 1, markCode: "M" },
              { reasoning: "The conditional 'if you can bear...' defines the ideal reader as patient and brave — the reviewer's own audience.", marks: 1, markCode: "M" },
              { reasoning: "The purpose is thus both evaluative and promotional: it sells difficulty as a virtue.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Excluding a mainstream audience flatters and challenges a niche one",
            commonErrors: ["Reading 'not for everyone' as a criticism — it is a strategy of prestige."],
          },
        },
        {
          id: "langa-u1-cq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A self-help chapter repeatedly addresses the reader as 'you' and gives direct commands. What does this direct address most likely indicate about the text's purpose and audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It aims to inform a general academic audience" },
              { id: "b", text: "It aims to entertain through narrative" },
              { id: "c", text: "It aims to advise and empower an individual reader seeking practical change" },
              { id: "d", text: "It aims to record history for future scholars" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience and purpose", statement: "Direct address and imperatives signal an advisory purpose aimed at an individual reader." },
            ],
            steps: [
              { reasoning: "'You' plus commands ('do this', 'try that') creates a coaching relationship with a single reader.", marks: 1, markCode: "M" },
              { reasoning: "The purpose is to persuade the reader to act — advice, not information or record.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Advising and empowering an individual reader seeking change",
            commonErrors: ["Confusing advisory 'you' with narrative 'you' — commands signal purpose."],
          },
        },
        {
          id: "langa-u1-cq11",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Address to the Assembly",
            author: "Written for Akademik Space",
            source: "Original speech excerpt",
            text: "My neighbours, you have heard the statistics. You have seen the hospital corridors. Tonight I ask only one thing: that you remember the faces behind the numbers.",
          },
          stem: "Analyse the speaker's purpose and intended audience in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose and audience", statement: "Direct address, shared knowledge ('you have seen') and a single request define the occasion and audience." },
            ],
            steps: [
              { reasoning: "The vocative 'My neighbours' and repeated 'you' create a communal, face-to-face audience — likely a public meeting or ceremony.", marks: 1, markCode: "M" },
              { reasoning: "'You have heard... you have seen' presumes shared experience — the speaker claims authority through common memory.", marks: 1, markCode: "M" },
              { reasoning: "The contrast between 'statistics'/'numbers' and 'faces' is the speech's argument: restore the human to policy debate.", marks: 1, markCode: "M" },
              { reasoning: "The request is deliberately minimal ('only one thing') — the speaker lowers resistance by asking for remembrance, not action.", marks: 1, markCode: "M" },
              { reasoning: "The purpose is thus commemorative-persuasion: to move an assembly from data to empathy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The speaker addresses a communal assembly, claims shared knowledge, and asks only for remembrance — converting statistics back into faces.",
            commonErrors: ["Describing the speech's content without analysing how 'you' and the single request shape its persuasive strategy."],
          },
        },
        {
          id: "langa-u1-cq12",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Wedding Speech",
            author: "Written for Akademik Space",
            source: "Original speech",
            text: "When Ana asked me to speak today, I said I would need a map. Because honestly, I have known her brother longer than I've known her — we survived three summers of the same roof. (Laughter) Now I get to know her properly. So here's what I know so far: she laughs at her own jokes first, and she once carried a sofa up four flights because the lift was 'a conspiracy'.",
          },
          stem: "Analyse the speaker's purpose, tone and audience in this wedding speech.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose and audience", statement: "Wedding speeches balance personal anecdote, celebration and entertainment for a mixed audience." },
            ],
            steps: [
              { reasoning: "The opening joke ('I would need a map') disarms the formality of the occasion and establishes comic self-deprecation.", marks: 1, markCode: "M" },
              { reasoning: "'Survived three summers of the same roof' uses mock-survival language — the anecdote is exaggerated for effect, typical of best-man rhetoric.", marks: 1, markCode: "M" },
              { reasoning: "The parenthetical '(Laughter)' reminds us this is performance: the speech is written to land, not merely to inform.", marks: 1, markCode: "M" },
              { reasoning: "'She laughs at her own jokes first' — the affectionate detail both compliments and gently teases; the tone is warm teasing rather than formal praise.", marks: 1, markCode: "M" },
              { reasoning: "The audience is the wedding party — assumed knowledge of the couple and shared comic expectations.", marks: 1, markCode: "M" },
              { reasoning: "The purpose is celebratory entertainment: the speech performs intimacy for a crowd, converting private knowledge into public tribute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The speech performs celebratory intimacy: jokes and mock-survival anecdotes entertain the wedding party while converting private knowledge into public tribute.",
            commonErrors: ["Reading the speech as sincere biography without noticing its performed, comic conventions."],
          },
        },
        {
          id: "langa-u1-cq13",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "The River Again",
            author: "Written for Akademik Space",
            source: "Original newspaper editorial",
            text: "For the third year running, the river has flooded the lower market. For the third year running, we have been told a solution is 'under review'. The market traders have stopped counting on promises; they count on sandbags now.\n\nThis is not a natural disaster. It is a budget decision wearing a raincoat.",
          },
          stem: "Analyse how context and authorial purpose shape this editorial.",
          parts: [
            { label: "a", prompt: "Identify the likely occasion and the editorial's target audience.", marks: 2 },
            { label: "b", prompt: "Analyse two persuasive techniques used in the extract.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of the final line, 'a budget decision wearing a raincoat'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Editorial persuasion", statement: "Editorials convert recurring events into arguments about responsibility." },
            ],
            steps: [
              { part: "a", reasoning: "Occasion: the third consecutive flood — the repetition makes this a chronic failure, not an accident.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Audience: local readers affected by flooding plus civic-minded citizens who fund municipal budgets.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Anaphora: 'For the third year running' repeated twice builds a rhythm of grievance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The sandbags detail grounds abstraction in lived experience — traders have adapted because promises failed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The final metaphor 'a budget decision wearing a raincoat' compresses the editorial's thesis: the flood is policy, disguised as weather.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The metaphor is effective because it is economical and unforgettable — it recasts 'natural disaster' as human choice in six words.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Its slight whimsy ('raincoat') softens the accusation, making the critique more quotable and shareable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Third-year flood; local and civic readers. (b) Anaphora and the sandbag detail build grievance; the raincoat metaphor compresses blame. (c) The final line is effective — economical, quotable, and converts disaster into policy failure.",
            commonErrors: ["Summarising the editorial's argument without analysing how repetition and metaphor build it."],
          },
        },
        {
          id: "langa-u1-cq14",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Instructions for Parents",
            author: "Written for Akademik Space",
            source: "Original school newsletter",
            text: "Dear Parents,\n\nThis term, Year 9 will study a text that some families may find challenging. We want to be transparent: the novel contains depictions of conflict and loss.\n\nYou are not required to read it yourselves. Your child will be supported throughout, and you will receive guidance notes. If you have concerns, please contact the office — we would rather hear from you early than late.\n\nThe text has been chosen because it asks students to think honestly about difficult things. We believe young people can hold complexity. We also believe they should never feel alone in doing so.",
          },
          stem: "Analyse how the letter manages its audience and purpose.",
          parts: [
            { label: "a", prompt: "Identify the primary and secondary audiences for this letter.", marks: 2 },
            { label: "b", prompt: "Analyse how the register balances reassurance and authority.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect of the closing sentence's two parallel claims.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Institutional communication", statement: "Schools must inform, reassure and assert authority simultaneously." },
            ],
            steps: [
              { part: "a", reasoning: "Primary audience: parents of Year 9 students — addressed directly as 'Dear Parents'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Secondary audience: students and governors — the letter also performs the school's values to itself.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'We want to be transparent' — the school claims honesty as a virtue, pre-empting suspicion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'You are not required to read it yourselves' — removes burden while asserting the school's duty to teach.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The register is formal but warm ('early than late') — institutional authority softened by courtesy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The two 'We believe' clauses pair capability with care: students 'can hold complexity' and 'should never feel alone'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The parallelism gives the closing a vow-like rhythm — the school commits to both challenge and support.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The effect is to reframe a potentially controversial choice as principled pedagogy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Parents primarily; students and governors secondarily. (b) Formal-warm register balances transparency, burden-removal and authority. (c) The parallel 'We believe' claims reframe controversy as principled care.",
            commonErrors: ["Reading the letter as a simple announcement rather than a negotiation of trust with parents."],
          },
        },
        {
          id: "langa-u1-cq15",
          difficulty: "core",
          totalMarks: 6,
          extract: {
            title: "Flyer",
            author: "Written for Akademik Space",
            source: "Original advertisement",
            text: "GRAND OPENING — THE OLD CLOCK SHOP, REBORN. Same creaking floorboards. Same stubborn grandfather clock that has outlived three owners. New hours, new faces, same promise: we fix what others call broken.",
          },
          stem: "Analyse the advertisement's purpose, audience and persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Advertising purpose", statement: "Advertisements sell through nostalgia, repetition and promise." },
            ],
            steps: [
              { reasoning: "The purpose is to announce a reopening while reassuring regulars that the shop's character survives.", marks: 1, markCode: "M" },
              { reasoning: "The triple 'Same' repetition creates a litany of continuity — the shop as institution, not just a business.", marks: 1, markCode: "M" },
              { reasoning: "'Creaking floorboards' and 'outlived three owners' use sensory and historical detail to manufacture authenticity.", marks: 1, markCode: "M" },
              { reasoning: "The audience is local — people who remember or value the old shop; the nostalgia presumes shared memory.", marks: 1, markCode: "M" },
              { reasoning: "'We fix what others call broken' is the slogan: it positions the shop as contrarian and skilled, selling competence through defiance.", marks: 1, markCode: "M" },
              { reasoning: "The register is colloquial and punchy — 'reborn', 'stubborn', 'broken' — matching a small-business voice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The flyer sells continuity through nostalgic repetition and a contrarian slogan; its audience is the local community that values the shop's history.",
            commonErrors: ["Describing the flyer's content without analysing how 'Same' repetition and nostalgia do the persuading."],
          },
        },
        {
          id: "langa-u1-cq16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "A Letter Home",
            author: "Written for Akademik Space",
            source: "Original letter",
            text: "Mum, the hostel is fine. The food is actually good — don't tell Gran I said that, she'll think I've gone soft. Classes are harder than I expected but I like that. There's a courtyard with a tree I sit under when the language gets too loud. I think I'll stay for the winter. Sorry. I know you wanted me home for Christmas — I'll come back after, I promise, but I need this. Love, Jo",
          },
          stem: "Analyse how the letter's register and content reveal the relationship between Jo and her mother.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Epistolary register", statement: "Letters to family blend intimacy, reassurance and quiet assertion of independence." },
            ],
            steps: [
              { reasoning: "The colloquial register ('gone soft', 'the language gets too loud') signals intimate, unguarded address — a daughter speaking as herself.", marks: 1, markCode: "M" },
              { reasoning: "'Don't tell Gran I said that' creates a conspiratorial aside — the letter manages multiple family relationships at once.", marks: 1, markCode: "M" },
              { reasoning: "The reassurance sequence ('the hostel is fine', 'I like that') is followed by 'Sorry' — Jo manages her mother's anticipated disappointment while asserting her choice.", marks: 1, markCode: "M" },
              { reasoning: "'I need this' is the letter's pivot: dependence on family is repaid with an honest claim of need for autonomy.", marks: 1, markCode: "M" },
              { reasoning: "The audience is singular and known — the letter presumes shared history ('you wanted me home').", marks: 1, markCode: "M" },
              { reasoning: "The purpose is thus relational maintenance: honesty wrapped in reassurance, independence wrapped in apology.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The colloquial register and aside about Gran create family intimacy; Jo's 'Sorry' and 'I need this' negotiate independence against her mother's expectations.",
            commonErrors: ["Reading the letter as a simple report — its real work is managing the mother-daughter relationship."],
          },
        },
      ],
    },
    {
      id: "langa-u1-intertextuality",
      title: "Intertextuality and reference",
      skill: "Recognise allusions and intertextual references and explain how they enrich a text's meaning.",
      lesson: {
        sections: [
          {
            heading: "What is intertextuality?",
            body: "Every text exists in a web of others. **Allusion** briefly references another work, person or event; **quotation** borrows directly; **parody and pastiche** imitate a style. Recognising a reference unlocks layers: a line echoing a famous poem carries that poem's emotional freight into the new context.",
          },
          {
            heading: "Types of reference",
            body: "References range from **literary allusion** (echoing Shakespeare or the Bible) to **cultural allusion** (myths, history, popular culture) and **genre reference** (a film noir opening, a fairy-tale ending). Some references are explicit ('as Hamlet said'); others are buried and require the reader to catch them.",
          },
          {
            heading: "Analysing reference",
            body: "Ask three questions: what is being referenced, how does the new text transform it, and what does the borrowed meaning add? A parody of a solemn form creates irony; a serious use of a folk tale deepens a character's symbolic weight.",
          },
        ],
        keyFormulas: [
          { name: "Intertextual questions", statement: "What is referenced? How is it transformed? What does the borrowed meaning contribute?" },
          { name: "Effect spectrum", statement: "Allusion can honour, ironise, parody or deepen — the verb matters." },
        ],
        workedExample: {
          problem: "A modern poem describes dawn as 'the city's amber warning'. What might this echo?",
          solution: "The phrasing may allude to earlier 'dawn' imagery in Romantic poetry — but 'warning' twists it toward menace, transforming a symbol of hope into one of threat.",
        },
      },
      questions: [
        {
          id: "langa-u1-tq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An 'allusion' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The narrator's voice" },
              { id: "b", text: "A poem's rhyme scheme" },
              { id: "c", text: "A direct quotation with citation" },
              { id: "d", text: "An indirect reference to another text, person or event" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Allusion", statement: "An indirect reference that relies on the reader recognising the source." },
            ],
            steps: [
              { reasoning: "Allusion gestures at a source without quoting it directly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** An indirect reference",
            commonErrors: ["Confusing allusion with direct quotation."],
          },
        },
        {
          id: "langa-u1-tq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Revision",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "They say April is the cruellest month —\nbut here it is only March, and already\nthe syllabus opens like a wound\nthat never quite healed from last year.",
          },
          stem: "Explain the effect of the allusion in this poem's opening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Literary allusion", statement: "The Eliot echo imports a whole poem's sense of disillusioned spring." },
            ],
            steps: [
              { reasoning: "'April is the cruellest month' echoes T.S. Eliot's The Waste Land — instantly invoking modernist desolation and spiritual aridity.", marks: 1, markCode: "M" },
              { reasoning: "The poem then corrects it: 'but here it is only March' — relocating the cruelty earlier, making the student's year worse than Eliot's spring.", marks: 1, markCode: "M" },
              { reasoning: "The borrowed authority of Eliot dignifies a mundane complaint, producing ironic self-importance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The Eliot allusion lends literary weight to student anxiety, then the 'only March' twist ironically worsens it.",
            commonErrors: ["Identifying the allusion without explaining the ironic transformation."],
          },
        },
        {
          id: "langa-u1-tq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Dragon",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The letter arrived on a Tuesday, sealed with green wax. She knew the handwriting before she opened it — she had been copying it in her dreams for years, the same looping letters, the same pauses where a comma should be.\n\n'You will come home,' it said. 'We have need of you.' It was signed, as always, with a name she had never spoken aloud.",
          },
          stem: "Analyse how this extract uses fairy-tale intertextuality to create meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fairy-tale intertext", statement: "Summons home, forbidden names and fate objects invoke tale conventions that the text then complicates." },
            ],
            steps: [
              { reasoning: "The summons 'You will come home... We have need of you' echoes fairy-tale imperatives — the hero called back to duty.", marks: 1, markCode: "M" },
              { reasoning: "The 'name she had never spoken aloud' invokes the fairy-tale taboo on naming — here made psychological rather than magical.", marks: 1, markCode: "M" },
              { reasoning: "Green wax and looping handwriting give the summons a Gothic, almost magical authority, as if the past itself writes.", marks: 1, markCode: "M" },
              { reasoning: "The dreams detail subverts the convention: the fairy-tale call is internalised — she has rehearsed obedience in sleep, suggesting compulsion rather than destiny.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fairy-tale conventions (summons, taboo name, fate letter) are internalised — destiny becomes psychological compulsion.",
            commonErrors: ["Listing fairy-tale elements without showing how the extract complicates them."],
          },
        },
        {
          id: "langa-u1-tq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Analyse how the following poem uses allusion and intertextual reference.",
          extract: {
            title: "The Orchard",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "My grandfather kept an orchard\nof apples that never fruited —\nhe said he was saving them\nfor a famine that never came.\n\nHe pruned them anyway,\npatient as penance,\nconvinced that beauty\nis its own harvest.",
          },
          parts: [
            { label: "a", prompt: "Identify two intertextual or archetypal references in the poem.", marks: 2 },
            { label: "b", prompt: "Explain how the grandfather figure echoes older literary or cultural types.", marks: 3 },
            { label: "c", prompt: "Evaluate the significance of 'beauty / is its own harvest' for the poem's treatment of futile labour.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Archetype and allusion", statement: "The orchard-keeper echoes pastoral and biblical traditions of patient cultivation." },
            ],
            steps: [
              { part: "a", reasoning: "The unfruiting orchard evokes the biblical 'tree planted by streams of water' tradition — cultivation as virtue regardless of yield.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Penance' alludes to religious discipline; the grandfather echoes the wise-old-man archetype.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The grandfather as patient cultivator echoes the farmer of parables and pastoral elegy — labour dignified by devotion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "But the fruitlessness subverts the pastoral: this is a landscape of unharvested labour, closer to Beckett than Wordsworth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The poem thus uses the archetype ironically — the wise elder's wisdom may be beautiful but useless.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'Beauty is its own harvest' dignifies futile labour: the reward is internal, not productive — but the line break isolates 'beauty', giving it ambiguous weight.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Whether this is consolation or irony depends on the reader — the poem sustains both readings, which is its strength.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Biblical/pastoral orchard tradition, penance, wise-elder archetype. (b) The grandfather echoes pastoral wisdom inverted into futile devotion. (c) The aphorism dignifies or ironically undercuts futile labour — ambiguity is deliberate.",
            commonErrors: ["Identifying archetypes without analysing how the poem transforms them."],
          },
        },
        {
          id: "langa-u1-tq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Parody differs from pastiche in that parody:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "imitates a style with affectionate reverence" },
              { id: "b", text: "imitates a style or text in order to mock or critique it" },
              { id: "c", text: "avoids all reference to other texts" },
              { id: "d", text: "quotes a text directly with citation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parody vs pastiche", statement: "Parody imitates to mock; pastiche imitates to honour." },
            ],
            steps: [
              { reasoning: "Parody's imitation is critical — it exaggerates the source's features to expose them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Imitates a style or text in order to mock or critique it",
            commonErrors: ["Confusing parody with pastiche — pastiche is admiring imitation."],
          },
        },
        {
          id: "langa-u1-tq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'genre reference' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a character's name" },
              { id: "b", text: "a text echoing the conventions of a genre — e.g. a film noir opening or a fairy-tale ending" },
              { id: "c", text: "a poem's rhyme scheme" },
              { id: "d", text: "a direct quotation from a famous novel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genre reference", statement: "A genre reference invokes a whole set of conventions — readers recognise the type and its expectations." },
            ],
            steps: [
              { reasoning: "Genre reference works through convention, not quotation — the reader supplies the whole genre.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A text echoing the conventions of a genre",
            commonErrors: ["Confusing genre reference with literary allusion — one evokes conventions, the other a specific source."],
          },
        },
        {
          id: "langa-u1-tq7",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Manager",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The boss was no King Lear — he had no daughters, only creditors, and his madness was a budget forecast.",
          },
          stem: "What is the effect of the King Lear allusion in this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It proves the manager is actually named Lear" },
              { id: "b", text: "It dignifies the manager by comparing him to a tragic hero" },
              { id: "c", text: "It creates irony by invoking tragic grandeur and then deflating it with 'creditors' and 'budget forecast'" },
              { id: "d", text: "It has no effect because Shakespeare is not mentioned" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Allusion and irony", statement: "Borrowed grandeur set against mundane reality produces irony." },
            ],
            steps: [
              { reasoning: "King Lear carries associations of tragic grandeur, filial betrayal and downfall.", marks: 1, markCode: "M" },
              { reasoning: "The comparison is immediately deflated: 'creditors' and 'budget forecast' replace tragic elements with financial ones.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Irony — tragic grandeur invoked then deflated by creditors and budget forecasts",
            commonErrors: ["Taking the allusion literally or missing the deflation that creates the irony."],
          },
        },
        {
          id: "langa-u1-tq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Traffic Report",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The traffic report called the jam 'a modern purgatory — souls inching toward a heaven of suburbs'.",
          },
          stem: "What does the allusion to 'purgatory' contribute to the phrase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It mocks commuters by casting their delay as a spiritual trial — movement without progress" },
              { id: "b", text: "It makes the traffic jam sound holy" },
              { id: "c", text: "It suggests the jam will end soon" },
              { id: "d", text: "It proves the drivers are actually dead" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Allusion", statement: "Purgatory — a state of waiting and purification — maps onto a traffic jam's endless, meaningless motion." },
            ],
            steps: [
              { reasoning: "Purgatory implies waiting, trial and deferred reward — exactly what a jam feels like.", marks: 1, markCode: "M" },
              { reasoning: "'Souls inching toward a heaven of suburbs' extends the religious frame ironically — the destination is banal, not blessed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It mocks commuters — delay figured as spiritual trial toward a banal 'heaven'",
            commonErrors: ["Reading the allusion as sincere rather than ironic — the 'heaven of suburbs' deflates it."],
          },
        },
        {
          id: "langa-u1-tq9",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Press Release",
            author: "Written for Akademik Space",
            source: "Original corporate announcement",
            text: "Once upon a time, in a market not far from here, two companies agreed to merge. The deal, sources say, is 'happily ever after'.",
          },
          stem: "What effect does the fairy-tale framing create in this corporate announcement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces irony by applying a children's story register to a commercial deal" },
              { id: "b", text: "It creates sincere celebration of the merger" },
              { id: "c", text: "It confuses the reader about what kind of text this is" },
              { id: "d", text: "It suggests the merger involved actual magic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre parody", statement: "Applying a fairy-tale register to corporate language creates ironic distance." },
            ],
            steps: [
              { reasoning: "'Once upon a time' and 'happily ever after' are fairy-tale markers.", marks: 1, markCode: "M" },
              { reasoning: "Set against 'merge' and 'sources say', the register mismatch produces irony — the press release is gently mocked.", marks: 1, markCode: "M" },
              { reasoning: "The effect is to expose how corporate language borrows storybook innocence to disguise calculation.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Irony — fairy-tale register applied to a commercial deal exposes corporate self-mythologising",
            commonErrors: ["Reading the fairy-tale opening as sincere celebration rather than ironic framing."],
          },
        },
        {
          id: "langa-u1-tq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a direct quotation and an allusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An allusion is always longer than a quotation" },
              { id: "b", text: "A quotation is always ironic" },
              { id: "c", text: "A quotation repeats words exactly; an allusion references a source indirectly" },
              { id: "d", text: "They are identical — both cite sources" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quotation vs allusion", statement: "Quotation borrows words; allusion borrows meaning — the reader must recognise the source." },
            ],
            steps: [
              { reasoning: "Quotation reproduces text verbatim; allusion only gestures at it, requiring the reader's recognition.", marks: 1, markCode: "M" },
              { reasoning: "Allusion therefore carries borrowed meaning without borrowed words — the source stays implicit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Quotation repeats words exactly; allusion references indirectly",
            commonErrors: ["Assuming all references are quotations — allusion relies on the reader supplying the source."],
          },
        },
        {
          id: "langa-u1-tq11",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The Platform",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "'I wandered lonely as a cloud' — the commuters say the same,\nthough their clouds are made of steel\nand announcements.",
          },
          stem: "Analyse how the poem transforms the Wordsworth allusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Allusion and transformation", statement: "The Wordsworth echo imports Romantic joy, then the poem relocates it into urban alienation." },
            ],
            steps: [
              { reasoning: "The opening quotation directly echoes Wordsworth's daffodils — 'lonely as a cloud' is lifted from 'Daffodils'.", marks: 1, markCode: "M" },
              { reasoning: "In Wordsworth the cloud is a vehicle of joy; here 'the commuters say the same' makes the phrase a shared but hollow ritual.", marks: 1, markCode: "M" },
              { reasoning: "The transformation: 'clouds made of steel and announcements' — nature's soft vehicle becomes industrial infrastructure.", marks: 1, markCode: "M" },
              { reasoning: "The allusion's original consolation is thus inverted: what was solace in Romanticism is now alienation in the commute.", marks: 1, markCode: "R" },
              { reasoning: "The poem uses the borrowed line as a measuring stick — the gap between Wordsworth's joy and the commuters' steel shows what modernity has cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The Wordsworth allusion imports Romantic consolation, then 'steel and announcements' transform it into urban alienation — the gap measures modern loss.",
            commonErrors: ["Identifying the allusion without analysing how 'steel' and 'announcements' invert Wordsworth's meaning."],
          },
        },
        {
          id: "langa-u1-tq12",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Last Shift",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The factory whistle blew its single, flat note — a sound the town had been taught to read like a last post. By the time the gates opened, the queue already knew the script: ID, bag search, the handshake from the man who'd 'seen it all'.",
          },
          stem: "Analyse how this extract uses cultural and genre references to create meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cultural allusion and genre reference", statement: "References to mourning rituals and procedural drama encode a town's history in its sounds and gestures." },
            ],
            steps: [
              { reasoning: "'A last post' — the bugle call played at military funerals — transforms the whistle into a death knell for the factory.", marks: 1, markCode: "M" },
              { reasoning: "'The town had been taught to read' it — the allusion is collective knowledge, showing how industrial decline is culturally memorised.", marks: 1, markCode: "M" },
              { reasoning: "'Knew the script' — theatre metaphor: the security procedure is a rehearsed performance both sides have seen before.", marks: 1, markCode: "M" },
              { reasoning: "The 'handshake from the man who'd seen it all' — the veteran guard as living archive; his gesture is ritual, not warmth.", marks: 1, markCode: "M" },
              { reasoning: "Together the references create a town that processes loss through ritual — mourning, procedure and performance.", marks: 1, markCode: "R" },
              { reasoning: "The extract's power lies in showing how communities metabolise endings through inherited forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The 'last post' allusion makes the whistle a funeral; 'the script' and the veteran's handshake show a town that has memorised its own decline as ritual.",
            commonErrors: ["Identifying references without showing how they accumulate into a portrait of communal mourning."],
          },
        },
        {
          id: "langa-u1-tq13",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Homework",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "My desk is a winter landscape.\nThe lamp is a small, white sun\nthat never quite rises.\nI plant sentences in rows\nand water them with coffee\nthat has gone cold\nlike the arguments\nI had with myself\nabout whether to begin.",
          },
          stem: "Analyse how the poem uses pastoral and archetypal imagery.",
          parts: [
            { label: "a", prompt: "Identify two pastoral or archetypal references in the poem.", marks: 2 },
            { label: "b", prompt: "Explain how the poem transforms the pastoral tradition into a study scene.", marks: 3 },
            { label: "c", prompt: "Evaluate the significance of 'whether to begin' for the poem's treatment of labour.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pastoral transformation", statement: "Pastoral imagery dignifies labour; here it is relocated to the desk, domesticating struggle." },
            ],
            steps: [
              { part: "a", reasoning: "'Winter landscape' — pastoral desolation; the desk becomes terrain to be endured.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Small, white sun' — the lamp as feeble celestial body; echoes pastoral sun imagery diminished.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The pastoral tradition celebrates nature's cycles; here 'winter' is permanent — the landscape offers no spring.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Plant sentences in rows' transfers agricultural labour to writing — the poet becomes a farmer of language.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Water them with coffee' domesticates the pastoral further — cultivation reduced to a stimulant that has gone cold.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'Whether to begin' names the poem's real subject: not writing but the paralysis before it — the argument with oneself.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The pastoral frame dignifies this paralysis: even the struggle to start is figured as landscape and labour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Winter landscape, diminished sun. (b) Pastoral labour is relocated to the desk — writing as failed cultivation. (c) 'Whether to begin' reveals the poem's subject: the argument with oneself before work.",
            commonErrors: ["Listing pastoral images without analysing how the tradition is ironised by the study setting."],
          },
        },
        {
          id: "langa-u1-tq14",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Hearing",
            author: "Written for Akademik Space",
            source: "Original dramatic extract",
            text: "(A bare stage. A MAN stands before a CLERK who types without looking up.)\n\nMAN: Your honour, I have prepared a statement — it is in iambic pentameter, if that pleases the record.\nCLERK: Sir, this is a magistrates' court. There is no honour here.\nMAN: (Bows.) Then I will be brief. The clerk knows the charge; the charge knows me; and I, I am still deciding which of us is on trial.",
          },
          stem: "Analyse how this extract parodies courtroom drama and classical rhetoric.",
          parts: [
            { label: "a", prompt: "Identify the genre conventions being parodied.", marks: 2 },
            { label: "b", prompt: "Analyse the classical allusion and rhetorical play in the Man's speech.", marks: 3 },
            { label: "c", prompt: "Evaluate how the extract's brevity and anticlimax create comic effect.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre parody and allusion", statement: "The extract inflates courtroom ritual with tragic rhetoric, then lets the anticlimax deflate it." },
            ],
            steps: [
              { part: "a", reasoning: "The courtroom setting — charge, clerk, 'your honour' — invokes trial drama's conventions of ritual and authority.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The Man's speechifying ('in iambic pentameter') parodies the defendant's expected eloquence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Iambic pentameter' alludes to Shakespearean and classical tragic verse — high rhetoric imported into a petty court.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'The clerk knows the charge; the charge knows me' — anaphoric wordplay turns legal procedure into a riddle, mocking judicial language.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Which of us is on trial' reverses the power relation — the defendant claims to judge the court.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The Clerk's flat correction ('no honour here') punctures the Man's performance instantly — anticlimax as punchline.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The bare stage and typing clerk refuse the drama the Man attempts — the parody is in the gap between his rhetoric and the room's indifference.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The comic effect depends on the audience recognising what is being mocked: solemnity itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Courtroom drama conventions parodied. (b) Shakespearean pentameter and wordplay inflate the defendant's rhetoric. (c) The Clerk's flat correction and bare stage deflate the performance — solemnity mocked.",
            commonErrors: ["Reading the Man's speech as sincere eloquence rather than performed parody."],
          },
        },
        {
          id: "langa-u1-tq15",
          difficulty: "core",
          totalMarks: 6,
          extract: {
            title: "The Departure",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Childhood ended the way it always does in films — not with a bang but with a bus ticket and a list of things mother said to pack.",
          },
          stem: "Analyse how the extract uses film-genre conventions and literary echo.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre and literary allusion", statement: "Film conventions and famous literary endings can be invoked to ironise a mundane event." },
            ],
            steps: [
              { reasoning: "'The way it always does in films' — the extract explicitly frames childhood's end as a movie trope, making the cliché its subject.", marks: 1, markCode: "M" },
              { reasoning: "'Not with a bang' echoes Hemingway's famous ending ('not with a whimper') — the literary allusion signals a deflationary, anti-climactic register.", marks: 1, markCode: "M" },
              { reasoning: "The substitution is the joke: 'a bus ticket and a list of things mother said to pack' replaces epic ending with domestic mundanity.", marks: 1, markCode: "M" },
              { reasoning: "The film reference and the Hemingway echo work together — both promise grandeur and deliver understatement.", marks: 1, markCode: "M" },
              { reasoning: "The effect is affectionate irony: growing up is neither tragic nor cinematic, just a bus and a packing list.", marks: 1, markCode: "R" },
              { reasoning: "The extract thus uses intertextuality to dignify the ordinary — the borrowed endings make a small departure feel like a genre.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Film-genre framing and the Hemingway echo promise epic endings, then deliver a bus ticket and packing list — irony that dignifies the ordinary.",
            commonErrors: ["Identifying the allusions without showing how the mundane substitution creates the effect."],
          },
        },
        {
          id: "langa-u1-tq16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She kept the garden the way other people keep grudges — meticulously, without pleasure, and always expecting the neighbour's cat to undo it. But every June the roses came anyway, like Persephone escaping her six months underground — and like her, she could never quite stay.",
          },
          stem: "Analyse how the Persephone allusion deepens the extract's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mythological allusion", statement: "The Persephone myth maps seasonal return onto the gardener's cyclical labour and departure." },
            ],
            steps: [
              { reasoning: "Persephone's myth explains the seasons: her annual escape from the underworld brings spring — the roses' June return mirrors this.", marks: 1, markCode: "M" },
              { reasoning: "The gardener 'could never quite stay' — she is Persephone not because she descends but because she returns: cyclical, not linear, time.", marks: 1, markCode: "M" },
              { reasoning: "The allusion dignifies what might seem futile — her meticulous, pleasureless gardening is figured as a ritual of return.", marks: 1, markCode: "M" },
              { reasoning: "But the parallel also darkens: Persephone's return is compulsory — the garden's beauty is bound to the cycle she cannot escape.", marks: 1, markCode: "R" },
              { reasoning: "The 'neighbour's cat' and 'grudges' establish her emotional austerity; the roses' indifference to it makes the myth necessary — she needs the allusion to justify her labour.", marks: 1, markCode: "M" },
              { reasoning: "The extract thus uses myth to transform a mundane gardening complaint into a meditation on cyclical time and reluctant devotion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The Persephone allusion maps the roses' annual return onto seasonal myth — dignifying cyclical labour while hinting that her devotion, like Persephone's, is compelled.",
            commonErrors: ["Identifying the myth without analysing how 'never quite stay' complicates the parallel."],
          },
        },
      ],
    },
  ],
};
