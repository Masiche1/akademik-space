import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "langa-u4-lesson-4-2",
  code: "4-2",
  title: "Contextual and Intertextual Analysis",
  goal: "I CAN situate a text in its historical and cultural context and analyse its intertextual relationships.",
  standards: ["Context", "Intertextuality", "Analysis"],
  vocabulary: [
    { term: "Historical context", definition: "The events, conditions and assumptions of the period in which a text was produced." },
    { term: "Cultural context", definition: "The shared values, beliefs, symbols and practices of the text's society." },
    { term: "Intertextuality", definition: "The relationships between texts — allusion, quotation, parody, echo, response." },
    { term: "Allusion", definition: "An indirect reference to another text, person, event or cultural artefact." },
    { term: "Reception", definition: "How a text is read and valued in different periods — a text's meaning can change over time." },
    { term: "Dialogism", definition: "The idea that every text responds to and is responded to by other texts — meaning is a conversation." },
  ],
  concepts: [
    {
      id: "langa-u4-context-deep",
      title: "Context as active force",
      skill: "Analyse how historical and cultural context actively shapes a text's meaning rather than merely backgrounding it.",
      lesson: {
        sections: [
          {
            heading: "Context is not background",
            body: "Context is not a paragraph of history before the analysis — it is an **active ingredient**. A text's meaning is produced by the collision of its words and its moment. The same sentence — 'we must be strong' — means different things in a wartime speech, a self-help book, or a parent's letter.",
          },
          {
            heading: "Reading context into text",
            body: "Ask: what was **sayable** in this period? What was **unsayable**? What assumptions did the text take for granted that we no longer share? What does the text **do** with its context — reinforce it, question it, mourn it?",
          },
          {
            heading: "Reception history",
            body: "Texts are re-read in new contexts. A poem celebrated in its own time may be condemned later; a 'minor' work may become central. **Reception** asks how a text's meaning shifts across periods — and why. The text is stable; the reading is historical.",
          },
        ],
        keyFormulas: [
          { name: "Context questions", statement: "What was sayable/unsayable? What assumptions are taken for granted? What does the text do with its moment?" },
          { name: "Reception test", statement: "How would this text be read differently in another period? Why?" },
        ],
        workedExample: {
          problem: "A 1950s advertisement shows a woman happily vacuuming in a pearl necklace. What does cultural context reveal?",
          solution: "The image encodes postwar domestic ideology: women's fulfilment is figured through household labour performed with elegant leisure. The pearl necklace signals middle-class respectability — the ad sells both the vacuum and the role.",
        },
      },
      questions: [
        {
          id: "langa-u4-cq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Reception' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How a text is read and valued across different periods" },
              { id: "b", text: "How a text was written" },
              { id: "c", text: "The text's publication date" },
              { id: "d", text: "The author's first draft" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reception", statement: "How a text is read and valued in different historical periods." },
            ],
            steps: [
              { reasoning: "Reception concerns how texts are read over time, not how they were produced.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** How texts are read across periods",
          },
        },
        {
          id: "langa-u4-cq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            source: "Original speech extract",
            text: "My fellow citizens, we stand at a crossroads. The road behind us is paved with sacrifice; the road ahead is unmarked. I ask you to have faith — not in me, but in the idea that we are better than our fears.",
          },
          stem: "Analyse how the historical context of a national crisis would shape this speech's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Context as meaning", statement: "The same words mean different things depending on the crisis they address." },
            ],
            steps: [
              { reasoning: "The 'crossroads' metaphor only has force in a moment of genuine historical uncertainty — in peacetime it would be empty rhetoric.", marks: 1, markCode: "M" },
              { reasoning: "'Sacrifice' implies a recent cost — the speech is post-crisis, not pre-crisis; the audience has already paid.", marks: 1, markCode: "M" },
              { reasoning: "'Better than our fears' is a specifically post-traumatic appeal — it addresses a population whose confidence has been damaged, not one facing a future threat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The speech's meaning depends on its moment: post-crisis rhetoric of sacrifice and restored faith, meaningless without the historical rupture it addresses.",
            commonErrors: ["Analysing the speech's language without connecting it to its historical occasion."],
          },
        },
        {
          id: "langa-u4-cq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Novel",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The telegram arrived on a Tuesday. 'Your son is missing. Come at once.' She read it three times, then folded it into her apron pocket and went to feed the chickens.",
          },
          stem: "Analyse how the historical context of war would transform this extract's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Context and emotion", statement: "War makes the ordinary devastating — feeding chickens after 'missing' is unbearable." },
            ],
            steps: [
              { reasoning: "Without context, the extract is ambiguous — a mother receiving bad news. With war context, 'missing' means killed or captured; the stakes are absolute.", marks: 1, markCode: "M" },
              { reasoning: "'Went to feed the chickens' — the domestic routine becomes tragic: grief expressed through labour, not tears; the body continues what the heart cannot.", marks: 1, markCode: "M" },
              { reasoning: "The telegram's bureaucratic brevity ('Your son is missing. Come at once.') mirrors the state's indifference — war reduces a son to a status update.", marks: 1, markCode: "M" },
              { reasoning: "Context transforms the extract from pathos to horror: the same words that seem merely sad become unbearable when 'missing' means dead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "War context transforms ambiguity into horror: 'missing' means dead, routine becomes tragic endurance, bureaucratic brevity mirrors state indifference.",
            commonErrors: ["Treating context as optional rather than transformative."],
          },
        },
        {
          id: "langa-u4-cq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Analyse the following extract in its likely historical context and evaluate how a modern reader might misread it.",
          extract: {
            title: "The Colonial Officer",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "He had served twenty years in the colony and could quote the native poetry better than the poets themselves. 'They are a poetic people,' he wrote home, 'but poetry will not build railways.'",
          },
          parts: [
            { label: "a", prompt: "Identify the historical context and its assumptions.", marks: 2 },
            { label: "b", prompt: "Analyse how the extract's language reveals colonial ideology.", marks: 3 },
            { label: "c", prompt: "Evaluate how a modern reader might misread or correctly read the extract.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Colonial context", statement: "The extract assumes European cultural superiority and economic 'progress' as justification for rule." },
            ],
            steps: [
              { part: "a", reasoning: "Context: British colonial administration, likely early-to-mid 20th century — the officer's 'service' and 'railways' mark the civilising mission.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Assumptions: European knowledge is universal ('better than the poets themselves'), economic development justifies rule, 'native' is a category of otherness.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Could quote... better than the poets themselves' — cultural mastery as colonial display; knowledge as possession.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'A poetic people' — the noble-savage binary: aesthetic appreciation that does not grant equality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Poetry will not build railways' — the utilitarian justification: culture is charming but economically worthless; the extract's logic is extractive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Misreading: a reader might take the officer's appreciation at face value — 'he liked their poetry' — missing the power structure entirely.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct reading: the extract is a document of colonial ideology — its apparent tolerance is the mechanism of domination; 'understanding' is the first step of control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Colonial administration context, civilising mission assumptions. (b) Cultural mastery as possession, noble-savage binary, utilitarian justification. (c) Misreading = taking appreciation at face value; correct = seeing tolerance as domination's mechanism.",
            commonErrors: ["Reading the officer's cultural appreciation as genuine respect without analysing the power structure."],
          },
        },
        {
          id: "langa-u4-cq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Historical context' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The genre's conventions" },
              { id: "b", text: "The events, conditions and assumptions of the period in which the text was produced" },
              { id: "c", text: "The book's sales figures" },
              { id: "d", text: "The author's birth date" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Historical context", statement: "Events, conditions and assumptions of the production period." },
            ],
            steps: [
              { reasoning: "Historical context is the period's conditions and assumptions, not biographical or commercial facts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Events, conditions and assumptions of the period",
          },
        },
        {
          id: "langa-u4-cq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Cultural context' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's nationality alone" },
              { id: "b", text: "The price of the book" },
              { id: "c", text: "The plot's physical setting" },
              { id: "d", text: "The shared values, beliefs, symbols and practices of the text's society" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural context", statement: "Shared values, beliefs, symbols and practices of the society." },
            ],
            steps: [
              { reasoning: "Cultural context is the society's shared system of meaning, not just setting or nationality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Shared values, beliefs, symbols and practices",
          },
        },
        {
          id: "langa-u4-cq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 1920s novel describes a woman 'taking the waters' at a spa. Which contextual question is most revealing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What colour was the spa?" },
              { id: "b", text: "Was the author famous?" },
              { id: "c", text: "What did 'taking the waters' assume about class, health and gender in that period?" },
              { id: "d", text: "How many pages is the novel?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Context questions", statement: "Ask what the period's phrase assumed — class, gender, health." },
            ],
            steps: [
              { reasoning: "'Taking the waters' is a period-specific practice whose meaning depends on who could afford it and what it signified.", marks: 1, markCode: "M" },
              { reasoning: "The phrase encodes class privilege and gendered leisure — the spa was a space of respectable female sociability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** What the phrase assumed about class, health and gender",
          },
        },
        {
          id: "langa-u4-cq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Ration Book",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The ration book had coupons for sugar, tea and 'fats'. She traded her tea coupons for her daughter's hair ribbons and told herself the girl deserved to feel pretty. The shopkeeper knew. Everyone knew.",
          },
          stem: "Analyse how the historical context of wartime rationing shapes this extract's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Context as meaning", statement: "Rationing makes small choices bear large meanings — a ribbon becomes a moral act." },
            ],
            steps: [
              { reasoning: "The coupons — sugar, tea, 'fats' — are the state's vocabulary of scarcity; context turns a household object into an instrument of war economy.", marks: 1, markCode: "M" },
              { reasoning: "Trading tea for hair ribbons transgresses the rationing logic — she converts survival currency into beauty, and 'deserved to feel pretty' makes the trade a mother's ethics.", marks: 1, markCode: "M" },
              { reasoning: "'The shopkeeper knew. Everyone knew.' — the community's shared knowledge makes her small rebellion both witnessed and tolerated; wartime context makes private choice public meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wartime context transforms the extract: ration coupons are state power, the ribbon trade is maternal ethics, and communal knowledge makes private choice public.",
            commonErrors: ["Reading the trade as simple domestic detail without connecting it to the war economy it transgresses."],
          },
        },
        {
          id: "langa-u4-cq9",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Advertisement",
            author: "Written for Akademik Space",
            source: "Original advertisement",
            text: "A new detergent! In tests on real housewives, it removed grease in half the time. Available now in hygienic boxes — ask your grocer for 'Sparkle'!",
          },
          stem: "Analyse how postwar cultural context shapes this advertisement's meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Context in advertising", statement: "Postwar ads sell domestic ideology as much as products." },
            ],
            steps: [
              { reasoning: "'Tests on real housewives' — the housewife is the implied consumer and the test subject; postwar domestic ideology makes her labour the measure of the product's value.", marks: 1, markCode: "M" },
              { reasoning: "'Removed grease in half the time' — the promise is measured in saved labour, encoding the postwar bargain: technology liberates women for domesticity more efficiently, not from it.", marks: 1, markCode: "M" },
              { reasoning: "'Hygienic boxes' — hygiene discourse links cleanliness to moral order; the product sells not just detergent but respectable domesticity.", marks: 1, markCode: "M" },
              { reasoning: "Context conclusion: the ad's meaning depends on postwar assumptions — female domesticity as natural, scientific progress as benevolent, consumption as civic duty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Postwar context: the ad sells domestic ideology — housewife as test subject, saved labour as liberation, hygiene as morality. Meaning is produced by the period's assumptions.",
            commonErrors: ["Describing the ad's claims without connecting them to postwar gender ideology."],
          },
        },
        {
          id: "langa-u4-cq10",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Classroom",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The teacher wrote on the board: 'The Empire on which the sun never sets.' Below it, in smaller letters, a girl had written: 'Neither does the debt.'",
          },
          stem: "Analyse this extract in its historical context and evaluate how a modern reader might respond.",
          parts: [
            { label: "a", prompt: "Identify the historical context and its assumptions.", marks: 3 },
            { label: "b", prompt: "Evaluate how a modern reader might read the extract differently.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Context and reception", statement: "The same words mean differently as the period's assumptions change." },
            ],
            steps: [
              { part: "a", reasoning: "Context: likely a colonial or decolonising classroom — the phrase 'the Empire on which the sun never sets' is the standard patriotic description of British imperial reach.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Assumption: empire is glorious, eternal, a source of pride — the teacher's board presents imperial power as educational fact.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The girl's reply — 'Neither does the debt' — converts the empire's geographic reach into an economic obligation; she reads the slogan against its grain.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Modern misreading: a reader might see only a student's witty retort — missing that the 'debt' refers to colonial extraction, not school fees.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Modern correct reading: postcolonial readers recognise 'the debt' as the extraction that funded the empire — the girl's line is economic critique disguised as wordplay.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reception evaluation: the extract's meaning has sharpened over time — what was a clever pupil's quip in its own moment reads today as anti-colonial economics; the text is stable, the context moved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Colonial classroom context; empire as glory; girl's 'debt' converts reach into obligation. (b) Modern readers may miss the economic critique or, postcolonially, recognise it — reception has sharpened.",
            commonErrors: ["Reading the girl's line as mere cheek without connecting 'debt' to colonial economics."],
          },
        },
        {
          id: "langa-u4-cq11",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "The Ode (reception note)",
            author: "Written for Akademik Space",
            source: "Reception history",
            text: "In 1910 the critics called it 'the perfect poem of the age'. By 1950 it was dismissed as 'a museum piece'. Today it is taught as an example of Georgian nostalgia.",
          },
          stem: "Analyse how this poem's reception has shifted across periods and what that reveals about context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Reception history", statement: "A text is stable; its valuation is historical." },
            ],
            steps: [
              { reasoning: "1910: 'perfect poem of the age' — the poem matched its moment's ideals; praise is a measure of fit between text and period.", marks: 1, markCode: "M" },
              { reasoning: "1950: 'museum piece' — postwar modernism redefined value; the poem's very perfection became evidence of irrelevance.", marks: 1, markCode: "M" },
              { reasoning: "Today: 'Georgian nostalgia' — the poem is now read as a document of a lost sensibility; it is valued for what it records, not what it does.", marks: 1, markCode: "M" },
              { reasoning: "The pattern: each period reads the poem through its own anxieties — perfection, obsolescence, heritage — revealing that reception tells us about the readers' moment as much as the text's.", marks: 1, markCode: "M" },
              { reasoning: "The text did not change; what changed is what each era needed it to mean — reception is a mirror of context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reception shifts — 'perfect', 'museum piece', 'nostalgia' — track each era's values; the text is stable, the reading is historical.",
            commonErrors: ["Treating reception shifts as proof the text is inconsistent rather than as evidence of changing contexts."],
          },
        },
        {
          id: "langa-u4-cq12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Context is an 'active ingredient' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It actively produces meaning — the same words mean different things in different moments" },
              { id: "b", text: "It dates the text" },
              { id: "c", text: "It makes texts longer" },
              { id: "d", text: "It explains the plot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Context as ingredient", statement: "Meaning is produced by the collision of words and moment." },
            ],
            steps: [
              { reasoning: "'Active ingredient' means context changes what the words do — the same sentence means differently in different situations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It produces meaning — same words, different moments",
          },
        },
        {
          id: "langa-u4-cq13",
          difficulty: "core",
          totalMarks: 3,
          stem: "The 'sayable/unsayable' question is useful because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counts the words in the text" },
              { id: "b", text: "Reveals what a period's assumptions permitted or forbade a text to say" },
              { id: "c", text: "Identifies grammar errors" },
              { id: "d", text: "Finds the theme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Sayable/unsayable", statement: "What a period forbids is as revealing as what it permits." },
            ],
            steps: [
              { reasoning: "The boundaries of the sayable mark a period's taboos and assumptions.", marks: 1, markCode: "M" },
              { reasoning: "A text's evasions, euphemisms and omissions are maps of what could not be said.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals what the period permitted or forbade",
          },
        },
        {
          id: "langa-u4-cq14",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Survey",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The surveyor measured the valley in chains and recorded the fields as 'underdeveloped'. The village elder called the same fields 'complete'.",
          },
          stem: "Analyse how the extract dramatises conflicting cultural contexts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Conflicting contexts", statement: "The same object is named differently by different worldviews." },
            ],
            steps: [
              { reasoning: "The surveyor's 'chains' — an imperial unit — and 'underdeveloped' are the vocabulary of measurement and progress; his context sees the fields as raw material for improvement.", marks: 1, markCode: "M" },
              { reasoning: "The elder's 'complete' comes from a context where the fields already fulfil their purpose — sustenance, continuity, sufficiency.", marks: 1, markCode: "M" },
              { reasoning: "The quotation marks around 'underdeveloped' mark it as the surveyor's term — the extract distances itself from his judgement, exposing it as a position rather than a fact.", marks: 1, markCode: "M" },
              { reasoning: "The extract's structure — two nouns for one object — dramatises how context is not background but a competing claim on reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract dramatises two contexts: the surveyor's imperial-measurement frame ('chains', 'underdeveloped') versus the elder's sufficiency frame ('complete') — naming as cultural claim.",
            commonErrors: ["Choosing one description as 'correct' instead of analysing the conflict between worldviews."],
          },
        },
        {
          id: "langa-u4-cq15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A text's meaning 'shifts across periods' mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paper deteriorates" },
              { id: "b", text: "Authors revise their work" },
              { id: "c", text: "Texts are rewritten over time" },
              { id: "d", text: "Readers' assumptions and values change, so the same words produce different meanings" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Reception", statement: "The text is stable; the reading is historical." },
            ],
            steps: [
              { reasoning: "Meaning shifts because each era brings different assumptions to the same stable words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Readers' assumptions change",
          },
        },
        {
          id: "langa-u4-cq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Station",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The stationmaster polished the brass nameplate daily. 'Regent Street', it said, though the street had been renamed 'Independence Avenue' years ago. He told the commuters the old name was 'more dignified'.",
          },
          stem: "Analyse this extract in its historical context and evaluate how a modern reader might respond.",
          parts: [
            { label: "a", prompt: "Identify the historical context and its assumptions.", marks: 3 },
            { label: "b", prompt: "Analyse how the extract's language reveals ideological work.", marks: 3 },
            { label: "c", prompt: "Evaluate a modern reader's likely response.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Context and ideology", statement: "Names are political; retaining an old name is an argument about legitimacy." },
            ],
            steps: [
              { part: "a", reasoning: "Context: a post-revolutionary or post-independence city — the renaming to 'Independence Avenue' marks a new political order.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Assumption: the stationmaster's loyalty to 'Regent Street' is loyalty to the old regime — the nameplate is a monument to displaced power.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The daily polishing ritualises the obsolete name — maintenance as devotion to a lost order.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'More dignified' — his justification aestheticises politics: he converts loyalty into taste, making ideology sound like preference.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Brass' — the nameplate's material is the old regime's material; polishing it is polishing the past's shine.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The extract's quietness — commuters accept the wrong name — shows how ideology survives through habit, not argument.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Modern misreading: a reader might find the stationmaster merely quaint or stubborn — missing that his 'dignity' is counter-revolutionary sentiment.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct reading: the extract is about how power outlives its names — the new order renamed the street but not the hearts; reception today reads it as a study in residual loyalty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Post-independence context; nameplate as monument to old regime; polishing as ritualised loyalty. (b) 'More dignified' aestheticises politics; brass is the old order's material; habit sustains ideology. (c) Misreading = quaintness; correct = residual loyalty to displaced power.",
            commonErrors: ["Reading the stationmaster as merely eccentric rather than as an agent of ideological persistence."],
          },
        },
      ],
    },
    {
      id: "langa-u4-intertext-deep",
      title: "Intertextual analysis",
      skill: "Analyse how texts quote, echo, parody or respond to other texts.",
      lesson: {
        sections: [
          {
            heading: "Beyond allusion",
            body: "Intertextuality is broader than allusion. A text can **quote** directly, **echo** a style or image, **parody** a genre, **answer** a predecessor, or **rewrite** a familiar story. The relationships form a web — every text is a node in a conversation that precedes and follows it.",
          },
          {
            heading: "Types of intertextual relation",
            body: "**Allusion** — brief, indirect reference. **Quotation** — direct borrowing, often marked. **Parody/pastiche** — imitation for comic or critical effect. **Response** — a text that argues with or answers another (e.g. a 'rewritten' fairy tale). **Genre memory** — a text that invokes a genre's conventions to fulfil or subvert them.",
          },
          {
            heading: "Analysing the relation",
            body: "Ask: what is the source text? How does the new text **transform** it — honour, ironise, parody, reverse? What does the borrowed meaning **add**? A fairy tale rewritten as tragedy gains complexity; a solemn form parodied gains irony.",
          },
        ],
        keyFormulas: [
          { name: "Intertextual types", statement: "Allusion + quotation + parody + response + genre memory" },
          { name: "Transformation test", statement: "What does the new text do to the source — honour, ironise, reverse?" },
        ],
        workedExample: {
          problem: "A modern poem describes 'the big bad wolf' as 'a mortgage broker'. What intertextual work is being done?",
          solution: "The fairy-tale reference is parodied — the wolf's menace is relocated to financial exploitation. The allusion imports the tale's moral framework, then twists it: the 'predator' is now economic, not animal.",
        },
      },
      questions: [
        {
          id: "langa-u4-tq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is NOT a type of intertextual relationship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parody" },
              { id: "b", text: "Allusion" },
              { id: "c", text: "Rhyme scheme" },
              { id: "d", text: "Quotation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intertextual types", statement: "Allusion, parody, quotation, response, genre memory — not formal features like rhyme." },
            ],
            steps: [
              { reasoning: "Rhyme scheme is a formal feature within a text, not a relationship between texts.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Rhyme scheme",
          },
        },
        {
          id: "langa-u4-tq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Wolf",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The wolf came down from the mountains as the tales promised — but instead of eating the grandmother, he asked for directions to the bus station.",
          },
          stem: "Analyse the intertextual relationship between this extract and the fairy tale of Little Red Riding Hood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fairy-tale subversion", statement: "The extract invokes the tale's expectations then overturns them." },
            ],
            steps: [
              { reasoning: "The wolf 'as the tales promised' explicitly invokes the fairy-tale tradition — the reader's expectations are activated.", marks: 1, markCode: "M" },
              { reasoning: "The subversion: 'instead of eating the grandmother, he asked for directions' — the predatory role is replaced by mundane need; the wolf is domesticated.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the intertextual reference creates irony — the tale's moral framework (stranger danger, woodland peril) is deflated by the wolf's ordinariness; the extract comments on how stories colonise our expectations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract invokes Little Red Riding Hood then subverts it — the wolf's mundane request deflates the tale's menace, creating irony about inherited stories.",
            commonErrors: ["Identifying the fairy tale without analysing the subversion's effect."],
          },
        },
        {
          id: "langa-u4-tq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The garden was the finest thing in the province — roses from York, fountains from Rome, soil carried from home in barrels. The gardener, a local man, had learned to prune them 'the English way', though he had never seen England.",
          },
          stem: "Analyse this extract's intertextual relationship to colonial literature and the 'civilising mission' narrative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre memory and response", statement: "The extract echoes colonial pastoral while subverting its triumphalism." },
            ],
            steps: [
              { reasoning: "The extract echoes the colonial pastoral tradition — the garden as symbol of imperial order and cultivation.", marks: 1, markCode: "M" },
              { reasoning: "But it subverts: the gardener 'had never seen England' — the 'English way' is empty mimicry; the garden's beauty depends on a labourer who is not part of the display.", marks: 1, markCode: "M" },
              { reasoning: "The imported elements ('roses from York', 'soil carried from home') expose the garden as extraction — the colony is made to resemble the metropole at cost.", marks: 1, markCode: "M" },
              { reasoning: "The extract 'answers' the civilising mission narrative: what was celebrated as progress is revealed as appropriation — the intertextual relation is critical response, not imitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract echoes colonial pastoral then subverts it — the garden's beauty is revealed as extraction, answering the civilising mission with critique.",
            commonErrors: ["Describing the garden without recognising its intertextual engagement with colonial literature."],
          },
        },
        {
          id: "langa-u4-tq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an intertextual analysis paragraph on the following extract, identifying its source tradition and analysing the transformation.",
          extract: {
            title: "The Dragon",
            author: "Revisit from Lesson 1-3",
            source: "Original prose extract",
            text: "The letter arrived on a Tuesday, sealed with green wax. She knew the handwriting before she opened it — she had been copying it in her dreams for years, the same looping letters, the same pauses where a comma should be.\n\n'You will come home,' it said. 'We have need of you.' It was signed, as always, with a name she had never spoken aloud.",
          },
          parts: [
            { label: "a", prompt: "Identify the source tradition(s) the extract invokes.", marks: 2 },
            { label: "b", prompt: "Analyse how the extract transforms those traditions.", marks: 4 },
            { label: "c", prompt: "Evaluate the effect of the transformation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Intertextual transformation", statement: "Source tradition + transformation + effect." },
            ],
            steps: [
              { part: "a", reasoning: "Source traditions: fairy-tale summons ('You will come home'), Gothic letter (green wax, handwriting), taboo name (fairy-tale prohibition), dream-rehearsed destiny.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Transformation: the fairy-tale call is internalised — 'copying it in her dreams' makes destiny a psychological habit, not external magic.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The taboo name is psychological, not supernatural — 'never spoken aloud' suggests repression, not curse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The Gothic letter becomes intimate — 'she knew the handwriting' makes the uncanny familiar; the summons is from someone known, not a stranger.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The dreams detail is the key transformation: fairy-tale destiny becomes rehearsed obedience — compulsion disguised as calling.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Effect: the extract gains psychological complexity by borrowing fairy-tale authority then relocating it inside the mind — the 'magic' is self-deception.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: the intertextual layering enriches the extract — the reader who knows the tales feels the subversion; the reader who doesn't still gets a story of compulsion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fairy-tale summons, Gothic letter, taboo name. (b) Destiny internalised as dream-rehearsed compulsion; magic becomes psychology. (c) Intertextual layering adds depth — subversion rewards the knowing reader without excluding others.",
            commonErrors: ["Listing fairy-tale elements without analysing the psychological transformation."],
          },
        },
        {
          id: "langa-u4-tq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Genre memory' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot's flashback structure" },
              { id: "b", text: "A text invoking a genre's conventions to fulfil or subvert them" },
              { id: "c", text: "A footnote about the author" },
              { id: "d", text: "A character remembering the past" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genre memory", statement: "Texts carry the conventions of their genres; invoking them creates expectations." },
            ],
            steps: [
              { reasoning: "Genre memory is a text's invocation of genre conventions — fulfilling or subverting them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Invoking genre conventions",
          },
        },
        {
          id: "langa-u4-tq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'response' text is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copies a source exactly" },
              { id: "b", text: "Summarises a famous plot" },
              { id: "c", text: "Ignores all earlier texts" },
              { id: "d", text: "Answers, argues with or rewrites a predecessor text" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Response", statement: "A text that enters into dialogue with a predecessor." },
            ],
            steps: [
              { reasoning: "A response text positions itself against an earlier text — answering, arguing or rewriting it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Answers, argues with or rewrites a predecessor",
          },
        },
        {
          id: "langa-u4-tq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A modern poem calls the sea 'a motorway for plastic'. The dominant intertextual relation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parody of epic simile" },
              { id: "b", text: "Direct allusion to a specific poem" },
              { id: "c", text: "Ironic transformation of the sea's conventional symbolism into environmental critique" },
              { id: "d", text: "Verbatim quotation of a source" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbolic transformation", statement: "Borrowed meanings are transformed — here, sea imagery becomes pollution critique." },
            ],
            steps: [
              { reasoning: "The sea conventionally symbolises freedom, eternity, the sublime; 'a motorway for plastic' imports that charge and reverses it.", marks: 1, markCode: "M" },
              { reasoning: "The relation is transformation, not quotation or direct allusion — no specific source is named.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Ironic transformation into environmental critique",
          },
        },
        {
          id: "langa-u4-tq8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Nursery",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king's horses and all the king's men\ncouldn't assemble a coalition.",
          },
          stem: "Analyse the intertextual relationship between this extract and the nursery rhyme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre memory and parody", statement: "The extract keeps the rhyme's form while replacing its meaning." },
            ],
            steps: [
              { reasoning: "The first three lines reproduce the nursery rhyme almost verbatim — the borrowed form activates the reader's memory of the tale.", marks: 1, markCode: "M" },
              { reasoning: "The final line subverts: 'couldn't assemble a coalition' replaces 'couldn't put Humpty together again' — the rhyme's helplessness becomes political deadlock.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the nursery rhyme's moral world (accident, rescue, restoration) is replaced by modern political paralysis — the parody comments on governance through a child's verse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract borrows the rhyme's form then replaces its conclusion — nursery-rhyme helplessness becomes political deadlock, parodying governance through a child's verse.",
            commonErrors: ["Identifying the rhyme without analysing what the substitution adds."],
          },
        },
        {
          id: "langa-u4-tq9",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Opening",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "It was a bright cold day in April, and the clocks were striking thirteen — which was wrong, because there were only twelve, and everyone in the office knew it, and no one said so.",
          },
          stem: "Analyse this extract's intertextual relationship to famous literary openings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Intertextual echo", statement: "The extract borrows a famous opening's cadence then corrects and extends it." },
            ],
            steps: [
              { reasoning: "The opening clause echoes Orwell's 'It was a bright cold day in April' — the borrowed cadence signals a dystopian register before the extract departs from it.", marks: 1, markCode: "M" },
              { reasoning: "'The clocks were striking thirteen' reproduces the famous impossible detail — the intertextual echo imports Orwell's whole world of controlled unreality.", marks: 1, markCode: "M" },
              { reasoning: "The dash and correction — 'which was wrong, because there were only twelve' — distinguishes this text from its source: here the impossibility is noticed, not normalised.", marks: 1, markCode: "M" },
              { reasoning: "'Everyone knew it, and no one said so' extends the echo into new territory — the extract is a response text: it takes Orwell's premise and asks what happens when the anomaly is seen but unspoken.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract echoes Orwell's opening then transforms it — where the source normalises the impossible clock, this text has everyone notice and stay silent; a response text about seen-but-unspoken wrongness.",
            commonErrors: ["Naming Orwell without analysing how the extract transforms the borrowed opening."],
          },
        },
        {
          id: "langa-u4-tq10",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Siren",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The siren sang, and the sailors did not steer toward the rocks. They steered toward the song. The captain wrote in the log: 'We have decided the rocks are a matter of interpretation.'",
          },
          stem: "Analyse this extract's intertextual relationship to classical myth.",
          parts: [
            { label: "a", prompt: "Identify the mythic source and what it contributes.", marks: 3 },
            { label: "b", prompt: "Analyse how the extract transforms that source.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mythic intertextuality", statement: "Myth supplies a narrative pattern; the new text reverses or relocates its meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Source: the Homeric sirens — fatal song that lures sailors onto rocks; the myth contributes the pattern of beauty-as-destruction and the hero's resistance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "In the myth, the danger is the rocks the song conceals; the sailors' error is obeying beauty over knowledge.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The extract imports this entire apparatus — siren, sailors, rocks — so the reader brings the myth's moral framework automatically.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Transformation: 'They steered toward the song' — the sailors are not victims but willing participants; the myth's passive seduction becomes active choice.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'The rocks are a matter of interpretation' — the captain's log converts physical danger into a hermeneutic problem; the extract relocates the peril from the sea to language.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect: the extraction of the myth into a joke about interpretation comments on how modernity dissolves mythic certainty — the rocks exist only if someone interprets them as rocks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Homeric sirens supply beauty-as-destruction and the seduction pattern. (b) The extract reverses it: willing sailors, danger relocated into 'interpretation' — myth dissolved into hermeneutics.",
            commonErrors: ["Summarising the myth without analysing how the extract reverses its terms."],
          },
        },
        {
          id: "langa-u4-tq11",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
            title: "The Pastiche",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Call me Ishmael. Some years ago — never mind how long precisely — I shipped aboard a vessel whose name I shall not repeat, though it began with a letter that rhymes with 'money' and ended with one that rhymes with 'freedom'.",
          },
          stem: "Analyse this extract's intertextual strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pastiche", statement: "Pastiche imitates a style for effect — affectionate or critical." },
            ],
            steps: [
              { reasoning: "'Call me Ishmael' reproduces Melville's famous first line verbatim — the extract borrows the authority of the canonical opening.", marks: 1, markCode: "M" },
              { reasoning: "The cadence — 'Some years ago — never mind how long precisely' — imitates Melville's digressive, self-correcting narrator voice; the style is pastiche.", marks: 1, markCode: "M" },
              { reasoning: "The ship 'whose name I shall not repeat' is 'Moby-Dick' approached obliquely — the extract knows the source and refuses to name it, making the reader complete the allusion.", marks: 1, markCode: "M" },
              { reasoning: "'Rhymes with money / rhymes with freedom' — the ship's name is decoded as economic liberty; the extract quietly argues that Melville's voyage was about capital as much as fate.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the pastiche both honours and revises — it wears Melville's voice to say something Melville's narrator could not; intertextuality as critical argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract pastiches Melville — verbatim opening, imitated cadence, oblique ship-name — then revises the source by decoding 'Moby-Dick' as 'money' and 'freedom': style borrowed, argument new.",
            commonErrors: ["Identifying Melville without analysing how the extract uses his style to make a new claim."],
          },
        },
        {
          id: "langa-u4-tq12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Parody differs from pastiche because parody:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Has no source text" },
              { id: "b", text: "Is always serious" },
              { id: "c", text: "Imitates for comic or critical effect, exaggerating the source's features" },
              { id: "d", text: "Copies a source exactly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parody vs pastiche", statement: "Parody mocks by exaggeration; pastiche imitates affectionately." },
            ],
            steps: [
              { reasoning: "Parody imitates with critical or comic distortion — it targets the source's mannerisms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Imitates for comic/critical effect",
          },
        },
        {
          id: "langa-u4-tq13",
          difficulty: "core",
          totalMarks: 3,
          stem: "When asked 'what does the borrowed meaning add?', the best answer focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The original author's intentions" },
              { id: "b", text: "How the imported associations transform the new text's meaning" },
              { id: "c", text: "The price of the original work" },
              { id: "d", text: "Whether the student knows the source" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intertextual yield", statement: "The question is what the borrowing does for the new text." },
            ],
            steps: [
              { reasoning: "The analytical question is functional: what does the borrowed meaning contribute or transform?", marks: 1, markCode: "M" },
              { reasoning: "Knowing the source is a precondition, not an answer — the answer must analyse the effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How imported associations transform meaning",
          },
        },
        {
          id: "langa-u4-tq14",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Soliloquy",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "To be, or not to be — that is the question the committee debated for three hours without resolution.",
          },
          stem: "Analyse this extract's intertextual relationship to Shakespeare.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Quotation and deflation", statement: "Borrowing a famous line then shrinking its context creates irony." },
            ],
            steps: [
              { reasoning: "The extract quotes Hamlet's soliloquy opening verbatim — the most famous existential question in English drama.", marks: 1, markCode: "M" },
              { reasoning: "It relocates the question from a prince's private agony to a committee's agenda — the cosmic is shrunk to the administrative.", marks: 1, markCode: "M" },
              { reasoning: "'Debated for three hours without resolution' — the committee cannot answer what Hamlet's speech agonises over; the extract satirises institutional deliberation as incapable of the question's weight.", marks: 1, markCode: "M" },
              { reasoning: "Effect: the intertextual borrowing makes the mundane committee absurd by contrast — Hamlet's question is life and death; theirs is a meeting that ran long.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extract quotes Hamlet then deflates it — a committee debates existence for three hours; the borrowed gravity makes bureaucratic paralysis absurd.",
            commonErrors: ["Identifying the Shakespeare quote without analysing the deflationary effect of the new context."],
          },
        },
        {
          id: "langa-u4-tq15",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'transformation test' asks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the source is famous" },
              { id: "b", text: "If the author plagiarised" },
              { id: "c", text: "What the new text does to the source — honour, ironise or reverse it" },
              { id: "d", text: "How long the source text is" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transformation test", statement: "Analyse what the new text does to the borrowed material." },
            ],
            steps: [
              { reasoning: "The test asks for the relation's direction: does the new text honour, ironise, parody or reverse the source?", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** What the new text does to the source",
          },
        },
        {
          id: "langa-u4-tq16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Queen",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The queen asked the mirror, 'Who is the fairest?' The mirror, polished daily and consulted hourly, answered: 'You are — within acceptable tolerances.'",
          },
          stem: "Write an intertextual analysis paragraph on this extract, identifying its source tradition and analysing the transformation.",
          parts: [
            { label: "a", prompt: "Identify the source tradition(s) the extract invokes.", marks: 2 },
            { label: "b", prompt: "Analyse how the extract transforms those traditions.", marks: 4 },
            { label: "c", prompt: "Evaluate the effect of the transformation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Intertextual transformation", statement: "Source tradition + transformation + effect." },
            ],
            steps: [
              { part: "a", reasoning: "Source: the Snow White 'magic mirror' — the fairy-tale object that answers the vain queen truthfully; also the corporate/bureaucratic register the extract imports.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Transformation: the mirror's absolute verdict becomes hedged — 'within acceptable tolerances' replaces 'the fairest'; truth is now measured, not declared.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The mirror is bureaucratised — 'polished daily and consulted hourly' makes it an instrument of audit, not magic; fairy-tale wonder becomes quality control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The queen's vanity is preserved but managed — the extract suggests modern power no longer needs flattery, only compliance metrics.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The fairy tale's moral (vanity punished) is suspended — the mirror's answer is technically true, which is worse than a lie; the extract reverses the tale's judgement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Effect: the intertextual layering produces dark comedy — the fairy tale's magic survives but serves audit culture; the reader who knows Snow White feels the degradation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: the transformation is effective because it keeps the source's form (question, mirror, verdict) while replacing its values — form preserved, meaning inverted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Snow White's magic mirror + bureaucratic register. (b) Absolute verdict becomes 'within acceptable tolerances'; magic becomes audit; tale's moral suspended. (c) Dark comedy — form preserved, values inverted; effective because the source's structure carries the critique.",
            commonErrors: ["Identifying Snow White without analysing how 'acceptable tolerances' transforms the mirror's function."],
          },
        },
      ],
    },
  ],
};
