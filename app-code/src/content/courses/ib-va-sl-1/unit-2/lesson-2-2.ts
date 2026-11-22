import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "va-u2-lesson-2-2",
  code: "2-2",
  title: "Context, Artist Intentions and Audiences",
  goal: "I CAN explain how context, purpose and intended audience shape the meaning and interpretation of an artwork.",
  standards: ["Critical Studies", "Context"],
  vocabulary: [
    { term: "Context", definition: "The historical, cultural, social and personal circumstances surrounding an artwork's creation." },
    { term: "Patronage", definition: "Financial or institutional support for artists, which shapes what can be made and for whom." },
    { term: "Intended audience", definition: "The viewers an artist or commissioner expects or addresses." },
    { term: "Commission", definition: "A paid request for a specific artwork, often with conditions on subject and style." },
    { term: "Reception", definition: "How an artwork is received and interpreted by audiences over time." },
    { term: "Iconography", definition: "The study of symbols, motifs and imagery and their conventional meanings." },
  ],
  concepts: [
    {
      id: "va-u2-context-intent",
      title: "Context and intention",
      skill: "Explain how historical context, patronage and artist intention shape an artwork's form and meaning.",
      lesson: {
        sections: [
          { heading: "Context shapes content", body: "Artworks respond to their moment: war, religion, politics and technology all appear in imagery. A Renaissance altarpiece serves a devotional function; a Soviet poster serves propaganda; a contemporary photograph may respond to climate crisis. Context is not background — it is a cause of form." },
          { heading: "Patronage and commission", body: "Most historical art was made for patrons: church, state, aristocracy, merchants. The patron's expectations constrain subject, size, style and message. A commissioned portrait flatters its sitter; a propaganda image serves its sponsor. Knowing who paid and why changes interpretation." },
          { heading: "Intention and evidence", body: "Artist statements and letters help, but intention is inferred from the work itself — composition, symbols, distortions. Iconography decodes conventional symbols (skulls = mortality, white lilies = purity). The strongest readings combine visual evidence with contextual knowledge." },
        ],
        keyFormulas: [
          { name: "Context questions", statement: "When, where, for whom, for what purpose was this made?" },
          { name: "Iconography", statement: "Symbols carry conventional meanings that context activates" },
        ],
        workedExample: {
          problem: "A portrait shows a merchant surrounded by symbols of wealth and piety. What contextual questions help interpret it?",
          solution: "Ask: who commissioned it (likely the merchant or family); what was its function (display of status and virtue); what symbols appear (books = learning, skull = mortality, globe = worldly success); and what do these conventions mean in that culture and period?",
        },
      },
      questions: [
        {
          id: "va-u2-context-intent-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Patronage most directly influences an artwork by:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shaping subject, style and message through funding conditions" },
            { id: "b", text: "Choosing the gallery's lighting" },
            { id: "c", text: "Determining the artist's nationality" },
            { id: "d", text: "Setting the frame's material" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "context", name: "Patronage", statement: "Sponsors constrain and shape what artists make and for whom." }],
            steps: [
              { reasoning: "Patrons fund works and often set conditions on subject and style.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Shaping subject, style and message through funding conditions",
            commonErrors: ["Treating patronage as irrelevant to meaning."],
          },
        },
        {
          id: "va-u2-context-intent-q2", difficulty: "core", totalMarks: 3,
          stem: "Explain how historical context can change the interpretation of an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Context and interpretation", statement: "The same image reads differently depending on when, where and for whom it was made." }],
            steps: [
              { reasoning: "Symbols and subjects carry meanings specific to their period and culture.", marks: 1, markCode: "M" },
              { reasoning: "Events (war, religion, politics) shape what artists depict and how.", marks: 1, markCode: "M" },
              { reasoning: "Later audiences may reinterpret works as values change — reception shifts meaning over time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context activates symbols, shapes content and shifts interpretation over time.",
            commonErrors: ["Assuming meaning is fixed regardless of context."],
          },
        },
        {
          id: "va-u2-context-intent-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between an artist's stated intention and the meaning a viewer derives.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Intention vs reception", statement: "Intended meaning and received meaning can diverge; both are valid data." }],
            steps: [
              { reasoning: "Artist statements and letters record conscious intention.", marks: 1, markCode: "M" },
              { reasoning: "Viewers interpret through their own knowledge, culture and assumptions.", marks: 1, markCode: "M" },
              { reasoning: "Works can exceed intention — unconscious choices and later receptions add meaning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: intention guides but does not fix meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intention is one source; viewers' interpretations can diverge and add meaning.",
            commonErrors: ["Claiming only the artist's intention is 'correct'."],
          },
        },
        {
          id: "va-u2-context-intent-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate how context shapes the meaning of an artwork.",
          parts: [
            { label: "a", prompt: "Identify two contextual factors that could affect an artwork's meaning.", marks: 2 },
            { label: "b", prompt: "Explain how patronage or commission constrains artistic choices.", marks: 2 },
            { label: "c", prompt: "Assess whether meaning exists independently of context.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual meaning", statement: "Historical, cultural and patronage contexts activate and constrain meaning." }],
            steps: [
              { part: "a", reasoning: "Historical period, culture, patron, function or intended audience — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two factors correctly identified and contextualised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Patrons fund works and set expectations on subject, style and message, limiting freedom.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains how commission shapes artistic decisions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Some formal qualities work across contexts, but full meaning depends on cultural codes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on context-dependence of meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Period, patron, function, audience. (b) Funding sets conditions. (c) Formal qualities persist but meaning is context-dependent.",
            commonErrors: ["Either ignoring context or claiming it determines everything."],
          },
        },
        {
          id: "va-u2-context-intent-q5", difficulty: "foundation", totalMarks: 2,
          stem: "A commission is best defined as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "A paid request for a specific artwork, often with conditions on subject and style" },
            { id: "b", text: "An artwork made for free public exhibition" },
            { id: "c", text: "A student's sketchbook exercise" },
            { id: "d", text: "A museum's purchase of an artwork" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Commission", statement: "A paid request that shapes subject, style and message of a work." }],
            steps: [
              { reasoning: "Commissions involve payment and usually carry expectations about content and form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A paid request for a specific artwork, often with conditions on subject and style",
            commonErrors: ["Confusing a commission with an artwork simply bought after completion."],
          },
        },
        {
          id: "va-u2-context-intent-q6", difficulty: "core", totalMarks: 3,
          stem: "Explain how knowing the patron of a portrait changes its interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Patronage and portraiture", statement: "The sitter's or sponsor's status shapes flattery, symbols and function." }],
            steps: [
              { reasoning: "A patron of high status typically expects idealisation, flattery and demonstration of rank.", marks: 1, markCode: "M" },
              { reasoning: "Included symbols — books, globes, skulls, coats of arms — advertise learning, wealth, lineage or piety.", marks: 1, markCode: "M" },
              { reasoning: "The portrait's function (dynastic display, memorial, devotional) then predicts its conventions and meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Patronage determines flattery, symbolism and function, so it reshapes interpretation.",
            commonErrors: ["Describing the portrait's appearance without reference to who paid for it."],
          },
        },
        {
          id: "va-u2-context-intent-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Iconography is the study of:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Frame materials and carpentry" },
            { id: "b", text: "Art market prices" },
            { id: "c", text: "Symbols, motifs and imagery and their conventional meanings" },
            { id: "d", text: "Colour theory" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Iconography", statement: "The decoding of conventional symbols and motifs within a cultural tradition." }],
            steps: [
              { reasoning: "Iconography concerns the conventional meanings of symbols and imagery.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Symbols, motifs and imagery and their conventional meanings",
            commonErrors: ["Confusing iconography with iconology or general art history."],
          },
        },
        {
          id: "va-u2-context-intent-q8", difficulty: "core", totalMarks: 3,
          stem: "Explain how major historical events can act as causes of artistic content.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Events as causes", statement: "War, religion and politics generate subjects, emotions and patron demands." }],
            steps: [
              { reasoning: "Major events supply subjects and emotional raw material — heroes, victims, ruins, triumphs.", marks: 1, markCode: "M" },
              { reasoning: "Patrons and audiences demand imagery that responds to, celebrates or mourns those events.", marks: 1, markCode: "M" },
              { reasoning: "Technology of the period also changes what can be represented and how it circulates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Historical events shape content through subject matter, patron demand and available technology.",
            commonErrors: ["Treating context as passive background rather than a cause of form."],
          },
        },
        {
          id: "va-u2-context-intent-q9", difficulty: "core", totalMarks: 2,
          stem: "Which of the following is NOT a contextual factor in interpreting an artwork?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The size of the brush used" },
            { id: "b", text: "The commission or patron who funded it" },
            { id: "c", text: "The historical period in which it was made" },
            { id: "d", text: "The cultural or religious setting of its production" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual factors", statement: "Context comprises circumstances of production and reception, not craft details." }],
            steps: [
              { reasoning: "Period, culture, function and patronage are contextual; brush size is a technical, not contextual, detail.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The size of the brush used",
            commonErrors: ["Counting any detail of the object as 'context'."],
          },
        },
        {
          id: "va-u2-context-intent-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between an artwork's context and its content.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Context vs content", statement: "Content is what is depicted; context is the circumstances of its making and viewing." }],
            steps: [
              { reasoning: "Content is the subject matter — figures, scenes, objects actually represented.", marks: 1, markCode: "M" },
              { reasoning: "Context is the historical, cultural, patronage and functional circumstances surrounding production.", marks: 1, markCode: "M" },
              { reasoning: "Identical content can carry different meanings depending on its context.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: both are needed — content is the text, context is the frame that activates it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Content is the depicted subject; context is the circumstances that give it meaning.",
            commonErrors: ["Using 'context' as a vague synonym for 'background'."],
          },
        },
        {
          id: "va-u2-context-intent-q11", difficulty: "core", totalMarks: 2,
          stem: "In Western iconographic tradition, a skull in a still life most conventionally symbolises:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mortality and the vanity of earthly life" },
            { id: "b", text: "Wealth and abundance" },
            { id: "c", text: "Wisdom and learning" },
            { id: "d", text: "Fertility and new life" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "context", name: "Vanitas symbolism", statement: "Skulls in still lifes invoke mortality and the transience of worldly goods." }],
            steps: [
              { reasoning: "The skull is a conventional memento mori symbol in Western still-life tradition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Mortality and the vanity of earthly life",
            commonErrors: ["Reading symbols literally rather than through their conventions."],
          },
        },
        {
          id: "va-u2-context-intent-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how an artist's own statement and visual evidence can be used together in analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Statements and evidence", statement: "Artist statements record intention; the work itself provides evidence of what was done." }],
            steps: [
              { reasoning: "Artist statements and letters record conscious aims and explanations.", marks: 1, markCode: "M" },
              { reasoning: "Visual evidence — composition, symbols, distortions — shows what the work actually does.", marks: 1, markCode: "M" },
              { reasoning: "Comparing them can confirm intention or reveal gaps where the work exceeds or contradicts it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the strongest readings triangulate statement, evidence and context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Statements give intention; visual evidence gives proof; together they produce robust interpretation.",
            commonErrors: ["Taking artist statements as the sole or final authority on meaning."],
          },
        },
        {
          id: "va-u2-context-intent-q13", difficulty: "core", totalMarks: 2,
          stem: "Reception differs from context because reception refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The artist's formal training" },
            { id: "b", text: "How audiences interpret the work across time" },
            { id: "c", text: "The circumstances of the work's making" },
            { id: "d", text: "The materials used by the artist" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reception", statement: "The history of audience interpretation, distinct from conditions of production." }],
            steps: [
              { reasoning: "Reception concerns viewers' responses over time; context concerns production circumstances.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How audiences interpret the work across time",
            commonErrors: ["Using 'reception' and 'context' interchangeably."],
          },
        },
        {
          id: "va-u2-context-intent-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate how context shapes the meaning of an artwork.",
          parts: [
            { label: "a", prompt: "Identify two contextual factors that could affect an artwork's meaning.", marks: 2 },
            { label: "b", prompt: "Explain how the intended function of a work constrains its formal choices.", marks: 2 },
            { label: "c", prompt: "Assess whether an artwork can be fully understood without any knowledge of its context.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Contextual meaning", statement: "Historical, cultural, functional and patronage contexts activate and constrain meaning." }],
            steps: [
              { part: "a", reasoning: "Historical period, culture, patron, function or intended audience — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two factors correctly identified and contextualised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Devotional works favour verticality, gold and iconic imagery; propaganda favours bold contrast and slogans — function predicts conventions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains how function constrains formal decisions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Formal qualities can be described without context, but symbols and conventions remain undecoded — meaning is only partially accessible.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on context-dependence of meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Period, patron, function, audience. (b) Function predicts style conventions. (c) Formal reading is possible, but full meaning needs context.",
            commonErrors: ["Either ignoring context or claiming it determines everything."],
          },
        },
        {
          id: "va-u2-context-intent-q15", difficulty: "core", totalMarks: 2,
          stem: "A devotional altarpiece is most likely to use which formal conventions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deliberate visual ugliness" },
            { id: "b", text: "Bold slogans and propaganda-scale heroism" },
            { id: "c", text: "Casual cartoon forms and slang text" },
            { id: "d", text: "Verticality, gold leaf and iconic stillness" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Function and form", statement: "An artwork's purpose predicts its style, scale, symbolism and emotional register." }],
            steps: [
              { reasoning: "Devotional function favours verticality, gold, iconic figures and hieratic scale.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Verticality, gold leaf and iconic stillness",
            commonErrors: ["Listing functions without connecting them to specific formal choices."],
          },
        },
        {
          id: "va-u2-context-intent-q16", difficulty: "foundation", totalMarks: 2,
          stem: "A state-sponsored poster celebrating a harvest festival was most likely made to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Be sold as a private portrait" },
            { id: "b", text: "Decorate only the artist's studio" },
            { id: "c", text: "Serve a public political or civic function" },
            { id: "d", text: "Express the artist's private grief" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "context", name: "Patronage and function", statement: "State sponsorship implies public, ideological purpose." }],
            steps: [
              { reasoning: "State sponsorship means the work serves public and political ends, not private ones.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Serve a public political or civic function",
            commonErrors: ["Ignoring the patronage implied by state sponsorship."],
          },
        },
      ],
    },
    {
      id: "va-u2-audience-reception",
      title: "Audience and reception",
      skill: "Analyse how different audiences read artworks differently and how reception changes over time.",
      lesson: {
        sections: [
          { heading: "Multiple readings", body: "The same artwork can mean different things to different viewers: a member of the depicted culture, an outsider, a child, a specialist. Interpretation depends on what viewers bring — knowledge, values, lived experience. An artwork 'works' when it rewards multiple levels of reading." },
          { heading: "Reception history", body: "Artworks are re-read across time: works condemned as scandalous become canonical; forgotten artists are rediscovered. Museums, critics, markets and politics all shape reception. Van Gogh sold almost nothing in life; now his work defines an era." },
          { heading: "Reading strategies", body: "To analyse reception, ask: who was the intended audience? How did contemporaries respond (reviews, sales, censorship)? How is it read now? What changed — the work, the audience, or the world?" },
        ],
        keyFormulas: [
          { name: "Reception questions", statement: "Who saw it then? Who sees it now? What changed the reading?" },
          { name: "Multiple readings", statement: "Each audience brings different knowledge and values to a work" },
        ],
        workedExample: {
          problem: "A statue once vandalised as obscene is now a celebrated landmark. Explain how reception can change so dramatically.",
          solution: "Values shift: what scandalised one era may express freedom or identity to another. Institutions (museums, media), scholarship and changing social norms reframe the work. The object may stay the same while its cultural meaning transforms.",
        },
      },
      questions: [
        {
          id: "va-u2-audience-reception-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Reception history refers to:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The technique of restoring old paintings" },
            { id: "b", text: "The artist's choice of materials" },
            { id: "c", text: "How audiences have interpreted an artwork over time" },
            { id: "d", text: "The process of hanging artworks in a museum" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reception", statement: "The history of how audiences receive and interpret a work across time." }],
            steps: [
              { reasoning: "Reception history tracks changing interpretations across audiences and eras.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** How audiences have interpreted an artwork over time",
            commonErrors: ["Confusing reception with conservation or display."],
          },
        },
        {
          id: "va-u2-audience-reception-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe two reasons different viewers might interpret the same artwork differently.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Multiple readings", statement: "Interpretation depends on the viewer's knowledge, culture and assumptions." }],
            steps: [
              { reasoning: "Viewers bring different cultural knowledge and may decode symbols differently.", marks: 1, markCode: "M" },
              { reasoning: "Personal experience and values filter what viewers notice and feel.", marks: 1, markCode: "M" },
              { reasoning: "Specialist training vs lay viewing produces different levels of formal reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cultural knowledge, personal values and levels of training shape readings.",
            commonErrors: ["Assuming there is one 'correct' reading only."],
          },
        },
        {
          id: "va-u2-audience-reception-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how an artwork's intended audience can be inferred from its form and content.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Inferring audience", statement: "Style, subject, scale, language and setting all signal who an artwork addresses." }],
            steps: [
              { reasoning: "Formal choices — complexity, size, medium — indicate expected viewer knowledge or setting.", marks: 1, markCode: "M" },
              { reasoning: "Subject and symbols address specific cultural or religious communities.", marks: 1, markCode: "M" },
              { reasoning: "Text, titles and inscriptions often name or address the audience directly.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: form and content are evidence of intended reception.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Style, subject, scale and text together signal the intended audience.",
            commonErrors: ["Guessing audience without citing visual evidence."],
          },
        },
        {
          id: "va-u2-audience-reception-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate the claim that an artwork's meaning changes as much as the audience does.",
          parts: [
            { label: "a", prompt: "Identify two factors that shift reception over time.", marks: 2 },
            { label: "b", prompt: "Explain how institutions like museums or markets affect reception.", marks: 2 },
            { label: "c", prompt: "Assess whether the 'original' meaning of an artwork can ever be recovered.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reception dynamics", statement: "Both work and audience change; institutions mediate interpretation." }],
            steps: [
              { part: "a", reasoning: "Changing social values, new scholarship, market and museum framing — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two factors correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Museums frame works with labels and contexts; markets assign value that shapes status and interpretation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains institutional mediation of meaning.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Original intention is recoverable only partially; context is always reconstructed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on recoverability of original meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Values, scholarship, institutions. (b) Museums and markets frame meaning. (c) Original meaning is only partly recoverable.",
            commonErrors: ["Treating reception as a fixed property of the object."],
          },
        },
        {
          id: "va-u2-audience-reception-q5", difficulty: "foundation", totalMarks: 2,
          stem: "The intended audience of an artwork is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the people who purchase it" },
            { id: "b", text: "Only trained art historians" },
            { id: "c", text: "The viewers the artist or commissioner expects to address" },
            { id: "d", text: "Anyone who happens to see it" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Intended audience", statement: "The viewers an artist or commissioner designs the work to reach." }],
            steps: [
              { reasoning: "Intended audience is defined by the artist's or commissioner's expectation, not by accident.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The viewers the artist or commissioner expects to address",
            commonErrors: ["Confusing intended audience with actual audience."],
          },
        },
        {
          id: "va-u2-audience-reception-q6", difficulty: "core", totalMarks: 3,
          stem: "Explain how cultural knowledge affects how viewers decode symbols in an artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cultural decoding", statement: "Symbols carry conventional meanings learned within a culture." }],
            steps: [
              { reasoning: "Symbols acquire meaning through shared cultural codes — learned, not innate.", marks: 1, markCode: "M" },
              { reasoning: "Insiders and outsiders therefore read different meanings from the same image.", marks: 1, markCode: "M" },
              { reasoning: "Viewers lacking the code produce literal or incorrect readings of symbolic content.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cultural codes determine what symbols mean; different knowledge produces different readings.",
            commonErrors: ["Assuming symbol meanings are universal."],
          },
        },
        {
          id: "va-u2-audience-reception-q7", difficulty: "core", totalMarks: 2,
          stem: "An artwork's reception changes over time mainly because:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The object physically changes" },
            { id: "b", text: "Its colours fade" },
            { id: "c", text: "Audiences' values, knowledge and institutions change" },
            { id: "d", text: "Its frame wears out" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reception dynamics", statement: "Interpretation shifts as viewers and institutions change, not because the object does." }],
            steps: [
              { reasoning: "Values, scholarship, markets and museums reframe works across eras.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Audiences' values, knowledge and institutions change",
            commonErrors: ["Attributing reception change to physical alteration of the work."],
          },
        },
        {
          id: "va-u2-audience-reception-q8", difficulty: "core", totalMarks: 3,
          stem: "Describe two ways museums and galleries shape the reception of artworks.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Institutional mediation", statement: "Museums and markets frame how works are seen, valued and interpreted." }],
            steps: [
              { reasoning: "Display decisions — lighting, placement, labels, accompanying texts — frame the viewer's interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Canonical status and market value assign importance that shapes how seriously a work is read.", marks: 1, markCode: "M" },
              { reasoning: "Institutions also decide which works enter public view at all, filtering reception.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Museums frame interpretation through display and labels; markets and canon assign status.",
            commonErrors: ["Presenting museums as neutral containers rather than active framers."],
          },
        },
        {
          id: "va-u2-audience-reception-q9", difficulty: "core", totalMarks: 2,
          stem: "A sculpture once removed as scandalous but later celebrated as a landmark illustrates:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shifting reception across eras" },
            { id: "b", text: "Art forgery" },
            { id: "c", text: "Physical restoration" },
            { id: "d", text: "Successful conservation" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reception change", statement: "The same object can be condemned in one era and canonised in another." }],
            steps: [
              { reasoning: "Changing social values and institutional framing produce opposite receptions of one object.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Shifting reception across eras",
            commonErrors: ["Explaining the change through the object's properties rather than the audience's."],
          },
        },
        {
          id: "va-u2-audience-reception-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why no single 'correct' interpretation of an artwork exists.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Polysemy", statement: "Artworks are open to multiple valid readings shaped by viewer and context." }],
            steps: [
              { reasoning: "Viewers bring different knowledge, values and lived experience to any work.", marks: 1, markCode: "M" },
              { reasoning: "Works are polysemous — they sustain several coherent interpretations simultaneously.", marks: 1, markCode: "M" },
              { reasoning: "Context and evidence constrain readings but do not fix a single meaning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: interpretation is a dialogue between work and viewer, not a solved equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Multiple valid readings exist because meaning emerges from the work-viewer dialogue.",
            commonErrors: ["Claiming interpretation is arbitrary with no constraints at all."],
          },
        },
        {
          id: "va-u2-audience-reception-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Contemporary critics, reviews and censorship primarily affect:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The frame's material" },
            { id: "b", text: "The pigment of the work" },
            { id: "c", text: "The artwork's size" },
            { id: "d", text: "An artwork's reception and reputation" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Critical mediation", statement: "Critics and censorship shape how audiences encounter and judge works." }],
            steps: [
              { reasoning: "Reviews and censorship operate on reception — reputation and access — not on the physical object.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** An artwork's reception and reputation",
            commonErrors: ["Confusing critical response with physical properties of the work."],
          },
        },
        {
          id: "va-u2-audience-reception-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Compare how an artwork might have been received at its creation versus today.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diachronic reception", statement: "Receptions differ because the audiences differ, even when the object does not." }],
            steps: [
              { reasoning: "Contemporaries respond within their own values — scandal, indifference or immediate acclaim are all possible.", marks: 1, markCode: "M" },
              { reasoning: "Later audiences bring new frameworks, scholarship and social norms to the same work.", marks: 1, markCode: "M" },
              { reasoning: "The work can therefore gain or lose status across time without itself changing.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: reception is historically contingent — tied to the audience, not the object.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Creation-era and modern receptions diverge because audiences and values change.",
            commonErrors: ["Assuming initial reception predicts later reception."],
          },
        },
        {
          id: "va-u2-audience-reception-q13", difficulty: "core", totalMarks: 2,
          stem: "Which factor most strongly explains why a once-controversial artwork is now considered canonical?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A larger picture frame" },
            { id: "b", text: "Improved varnish on the surface" },
            { id: "c", text: "Changed social values and institutional reframing" },
            { id: "d", text: "Lower museum ticket prices" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Canon formation", statement: "Canonical status results from shifting values and institutional endorsement." }],
            steps: [
              { reasoning: "Canonisation is a reception phenomenon driven by values and institutions, not physical changes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Changed social values and institutional reframing",
            commonErrors: ["Looking for material explanations of a cultural shift."],
          },
        },
        {
          id: "va-u2-audience-reception-q14", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate how audiences shape the meaning and status of artworks.",
          parts: [
            { label: "a", prompt: "Identify two factors that shift reception over time.", marks: 2 },
            { label: "b", prompt: "Explain how social media changes contemporary reception.", marks: 2 },
            { label: "c", prompt: "Assess whether 'popular' reception devalues an artwork's meaning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Audience agency", statement: "Viewers, critics and publics actively construct what works mean and are worth." }],
            steps: [
              { part: "a", reasoning: "Changing social values, new scholarship, market and institutional framing — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two factors correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Social media spreads images instantly, multiplying readings and creating viral reputations outside institutional control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains how digital circulation transforms reception dynamics.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Popularity does not automatically devalue meaning — mass appeal can coexist with depth, but attention economies may flatten interpretation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on popular vs elite reception.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Values, scholarship, institutions. (b) Social media multiplies and accelerates readings. (c) Popularity can coexist with depth.",
            commonErrors: ["Assuming popular reception is always superficial."],
          },
        },
        {
          id: "va-u2-audience-reception-q15", difficulty: "core", totalMarks: 2,
          stem: "An artwork that 'rewards multiple levels of reading' offers:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only literal subject matter" },
            { id: "b", text: "Technical difficulty alone" },
            { id: "c", text: "An accessible surface plus deeper formal and symbolic layers" },
            { id: "d", text: "A single fixed interpretation" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Layered meaning", statement: "Strong works offer accessible surface readings plus deeper formal and symbolic layers." }],
            steps: [
              { reasoning: "Layered works give casual viewers an entry point and specialists deeper rewards.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** An accessible surface plus deeper formal and symbolic layers",
            commonErrors: ["Assuming a work must choose between simple and complex meaning."],
          },
        },
        {
          id: "va-u2-audience-reception-q16", difficulty: "core", totalMarks: 2,
          stem: "The role of the art market in reception is best described as:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assigning value and status that influence how works are seen and interpreted" },
            { id: "b", text: "Irrelevant to meaning" },
            { id: "c", text: "Selecting picture frames" },
            { id: "d", text: "Fixing the colours of paintings" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Market mediation", statement: "Prices and status shape prestige, visibility and interpretation." }],
            steps: [
              { reasoning: "Market value signals canonical status and affects how seriously works are taken.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Assigning value and status that influence how works are seen and interpreted",
            commonErrors: ["Dismissing the market as external to artistic meaning."],
          },
        },
      ],
    },
  ],
};
