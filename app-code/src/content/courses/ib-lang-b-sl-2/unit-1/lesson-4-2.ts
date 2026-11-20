import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "langb-u4-lesson-4-2",
  code: "4-2",
  title: "Cultural Context in Texts",
  goal: "I CAN identify cultural references, values and assumptions embedded in a text and interpret them from the writer's cultural perspective.",
  standards: ["Intercultural", "Comprehension", "Cultural context", "Language B SL"],
  vocabulary: [
    { term: "Cultural reference", definition: "An allusion to a cultural product, custom or figure — e.g. a holiday, a song, a famous person." },
    { term: "Cultural assumption", definition: "Something the writer takes for granted that readers from the same culture would know." },
    { term: "Target culture", definition: "The culture of the language you are learning — its texts, customs and perspectives." },
    { term: "Source culture", definition: "Your own culture — the lens you naturally use to interpret texts." },
    { term: "Subtext", definition: "The implied meaning beneath the literal words, often culturally shaped." },
    { term: "Cultural frame", definition: "The set of shared values and references through which a culture interprets events." },
  ],
  concepts: [
    {
      id: "langb-u4-cultural-references",
      title: "Spotting cultural references and assumptions",
      skill: "Identify cultural references and unstated assumptions in texts and recognise what they reveal about the culture.",
      lesson: {
        sections: [
          {
            heading: "Texts carry their culture",
            body: "Every text is written from inside a culture. Authors reference holidays, foods, celebrities, historical events and social norms without explanation — they assume the reader shares that knowledge. These **cultural references** and **assumptions** are invisible to insiders but obvious to outsiders. Recognising them is a core Language B comprehension skill.",
          },
          {
            heading: "Assumptions reveal values",
            body: "What a text takes for granted tells you what the culture values. A text that assumes everyone has a car reveals car-dependent infrastructure. A text about 'family dinner on Sunday' assumes family-centred norms. When reading in your target language, ask: What would a reader from this culture need to know that is never stated?",
          },
          {
            heading: "Your own lens",
            body: "You read through your **source culture** — your own assumptions shape interpretation. A joke that is hilarious in one culture may confuse another. When a text feels 'odd', ask whether the oddness is in the text or in your expectations. Intercultural understanding means holding both the writer's frame and your own simultaneously.",
          },
        ],
        keyFormulas: [
          { name: "Cultural signals", statement: "Unexplained references + assumed knowledge + value-laden topics = culture in the text" },
          { name: "Reading frames", statement: "Source culture (you) vs target culture (writer) — compare both lenses" },
        ],
        workedExample: {
          problem: "A text mentions 'the summer holidays' without explanation. What does this assume?",
          solution: "It assumes the reader knows the culture has a long summer break — a school-calendar custom. Unstated, it reveals an assumption about the education system.",
        },
      },
      questions: [
        {
          id: "langb-u4-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'cultural reference' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fact about a country's geography" },
              { id: "b", text: "An allusion to a cultural product, custom or figure the reader is expected to know" },
              { id: "c", text: "A translation of a foreign word" },
              { id: "d", text: "A footnote explaining history" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural reference", statement: "An unexplained allusion to something members of the culture would recognise." },
            ],
            steps: [
              { reasoning: "Cultural references rely on shared cultural knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An allusion to a cultural product, custom or figure",
            commonErrors: ["Confusing cultural references with general knowledge facts."],
          },
        },
        {
          id: "langb-u4-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three questions to ask when identifying cultural assumptions in a text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Assumption analysis", statement: "What is unexplained? What does the writer take for granted? What values does it reveal?" },
            ],
            steps: [
              { reasoning: "What does the text reference without explanation?", marks: 1, markCode: "M" },
              { reasoning: "What knowledge or customs does the writer assume the reader has?", marks: 1, markCode: "M" },
              { reasoning: "What values or norms does this assumed knowledge reveal about the culture?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "What is unexplained? What is assumed? What values does it reveal?",
            commonErrors: ["Only spotting explicit mentions, missing unstated assumptions."],
          },
        },
        {
          id: "langb-u4-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the same text can be interpreted differently by readers from different cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Interpretive frames", statement: "Readers decode texts through their own cultural frame of reference." },
            ],
            steps: [
              { reasoning: "Each reader brings a source culture — values, references, norms — to interpretation.", marks: 1, markCode: "M" },
              { reasoning: "What is obvious to one reader may puzzle another (humour, politeness, symbolism).", marks: 1, markCode: "R" },
              { reasoning: "The writer's target-culture frame and the reader's source-culture frame may differ.", marks: 1, markCode: "M" },
              { reasoning: "Multiple valid interpretations result — intercultural readers hold both perspectives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Different cultural frames produce different readings; the skilled reader considers the writer's frame too.",
            commonErrors: ["Assuming your interpretation is the only correct one."],
          },
        },
        {
          id: "langb-u4-q12",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The village fair",
            author: "Written for Akademik Space",
            source: "Cultural context practice",
            text: "Every year at the end of harvest, the whole village gathers for the fair. Grandmothers bring their famous pies, children race each other in sacks, and in the evening everyone joins the dancing in the square. The oldest man rings the bell to open the celebrations — a custom his grandfather taught him.",
          },
          parts: [
            { label: "a", prompt: "Identify two cultural references or customs mentioned.", marks: 2 },
            { label: "b", prompt: "Explain what the writer assumes the reader already knows.", marks: 2 },
            { label: "c", prompt: "Explain how a reader from a very different culture might misread this text.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural reading", statement: "Customs + assumed shared knowledge + reader's own frame." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of: harvest-end timing, sack races, evening dancing, bell-ringing custom.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both customs identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Assumes reader knows village-fair tradition and that 'the whole village gathers' is normal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assumed communal celebration culture is unstated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A reader from an urban individualist culture might find 'whole village gathers' quaint or exclusive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "They may not grasp why the bell-ringing matters — tradition passed down generations.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Misreading comes from applying their own cultural frame rather than the writer's.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Harvest timing, sack races, dancing, bell custom. (b) Assumes communal festival culture. (c) Urban/individualist reader may miss the communal significance.",
            commonErrors: ["Treating unfamiliar customs as 'strange' rather than culturally normal."],
          },
        },
        {
          id: "langb-u4-q49",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'cultural assumption' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fact stated explicitly in the text" },
              { id: "b", text: "Something the writer takes for granted that readers from the same culture would know" },
              { id: "c", text: "A mistake the writer makes about another culture" },
              { id: "d", text: "A translation of an unfamiliar word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural assumption", statement: "Unstated knowledge the writer expects the reader to share." },
            ],
            steps: [
              { reasoning: "Assumptions are unstated — the writer never explains them because insiders already know.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Something the writer takes for granted that readers from the same culture would know",
            commonErrors: ["Confusing assumptions (unstated) with explicit statements."],
          },
        },
        {
          id: "langb-u4-q50",
          difficulty: "core",
          totalMarks: 2,
          stem: "A target-language advert mentions 'the big game' without explanation. What is the reader expected to know?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rules of every sport" },
              { id: "b", text: "Which specific sporting or cultural event 'the big game' refers to in that culture" },
              { id: "c", text: "The advert's product specifications" },
              { id: "d", text: "The history of all television" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural reference decoding", statement: "Unexplained references rely on shared cultural knowledge of events and customs." },
            ],
            steps: [
              { reasoning: "'The big game' is a cultural reference — a specific event members of the culture would recognise.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Which specific sporting or cultural event 'the big game' refers to in that culture",
            commonErrors: ["Assuming all readers share the reference — only insiders do."],
          },
        },
        {
          id: "langb-u4-q51",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a text feel 'strange' or 'odd' to you even though it is perfectly normal in its own culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the writer made cultural errors" },
              { id: "b", text: "Because you are reading through your own cultural frame of expectations" },
              { id: "c", text: "Because the text is always biased" },
              { id: "d", text: "Because you do not know the grammar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Source culture lens", statement: "Your own cultural expectations shape how you judge what is 'normal'." },
            ],
            steps: [
              { reasoning: "Oddness often comes from the reader's frame, not the text — different cultures normalise different things.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because you are reading through your own cultural frame of expectations",
            commonErrors: ["Assuming unfamiliar equals abnormal — it may be normal in the target culture."],
          },
        },
        {
          id: "langb-u4-q52",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a text assume when it describes 'Sunday lunch with the whole family' without explanation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That families eat out on Sundays" },
              { id: "b", text: "That family-centred weekly gatherings are a normal custom" },
              { id: "c", text: "That all families are large" },
              { id: "d", text: "That lunch is the most important meal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Assumption analysis", statement: "Unexplained customs reveal what the culture treats as normal." },
            ],
            steps: [
              { reasoning: "The unexplained custom assumes family gatherings on Sundays are normal — a shared cultural norm.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** That family-centred weekly gatherings are a normal custom",
            commonErrors: ["Over-interpreting — the assumption is about normality, not about every family."],
          },
        },
        {
          id: "langb-u4-q53",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is most likely a cultural reference rather than a general fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water boils at 100 degrees Celsius" },
              { id: "b", text: "She finally passed her driving test" },
              { id: "c", text: "He wore his lucky jersey to the final" },
              { id: "d", text: "The train arrives at platform four" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reference identification", statement: "Cultural references rely on shared meaning — lucky jerseys signal tradition/superstition." },
            ],
            steps: [
              { reasoning: "'Lucky jersey' implies a cultural belief or tradition about good luck — meaningful only to insiders.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** He wore his lucky jersey to the final",
            commonErrors: ["Choosing facts — cultural references carry shared cultural meaning, not just information."],
          },
        },
        {
          id: "langb-u4-q54",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do authors leave cultural references unexplained in texts for their own culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because they assume readers already share that knowledge" },
              { id: "b", text: "Because they want to confuse foreign readers" },
              { id: "c", text: "Because explanations are always wrong" },
              { id: "d", text: "Because cultural references cannot be explained" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Insider communication", statement: "Texts assume a shared cultural frame — explanation would be redundant for insiders." },
            ],
            steps: [
              { reasoning: "Authors write for insiders who already know the references — explaining would be unnecessary.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because they assume readers already share that knowledge",
            commonErrors: ["Assuming unexplained means hidden or secret — it means shared."],
          },
        },
        {
          id: "langb-u4-q55",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define 'source culture' and 'target culture' in the context of reading a foreign-language text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Source vs target culture", statement: "Source = your own culture's lens; target = the culture the text comes from." },
            ],
            steps: [
              { reasoning: "Source culture: your own cultural background and assumptions — the lens you naturally use.", marks: 1, markCode: "M" },
              { reasoning: "Target culture: the culture of the language/text being studied — the writer's frame.", marks: 1, markCode: "M" },
              { reasoning: "Intercultural reading means holding both frames at once.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Source culture = your own lens; target culture = the writer's culture. Skilled readers hold both.",
            commonErrors: ["Reversing the terms — target is the culture you are studying, not your own."],
          },
        },
        {
          id: "langb-u4-q56",
          difficulty: "core",
          totalMarks: 3,
          stem: "A text assumes 'everyone has a car'. Explain what this assumption reveals about the culture described.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Assumption analysis", statement: "Unstated assumptions reveal infrastructure, values and daily norms." },
            ],
            steps: [
              { reasoning: "It assumes car ownership is normal — suggesting car-dependent infrastructure or suburban living.", marks: 1, markCode: "M" },
              { reasoning: "It implies alternatives (public transport) may be less central to daily life.", marks: 1, markCode: "R" },
              { reasoning: "Unstated assumptions about daily life reveal what the culture treats as default.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reveals car-dependent infrastructure and norms — what the culture treats as default everyday life.",
            commonErrors: ["Stopping at 'they like cars' — assumptions reveal systems, not just preferences."],
          },
        },
        {
          id: "langb-u4-q57",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'intercultural understanding' requires holding two cultural frames at the same time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural competence", statement: "Understanding means decoding through the writer's frame while recognising your own." },
            ],
            steps: [
              { reasoning: "The writer's target-culture frame determines what references and assumptions mean.", marks: 1, markCode: "M" },
              { reasoning: "Your source-culture frame shapes your initial reactions — including what feels odd.", marks: 1, markCode: "M" },
              { reasoning: "Holding both lets you interpret accurately without losing your own perspective.", marks: 1, markCode: "R" },
              { reasoning: "This dual awareness is the intercultural competence Language B assesses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "You need the writer's frame to decode meaning and your own frame to recognise your biases — both together = intercultural understanding.",
            commonErrors: ["Thinking you must abandon your own culture to understand another's."],
          },
        },
        {
          id: "langb-u4-q58",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "Back to school",
            author: "Written for Akademik Space",
            source: "Cultural assumption practice",
            text: "September brings the familiar ritual: parents queue outside shops for uniforms, children measure themselves against last year's growth, and the first morning back feels both exciting and slightly sad. Everyone knows the feeling of new exercise books and sharp pencils. By the second week the routine settles in — packed lunches, after-school clubs, and the long countdown to the next holiday.",
          },
          parts: [
            { label: "a", prompt: "Identify two cultural references or customs in the extract.", marks: 2 },
            { label: "b", prompt: "Explain what the writer assumes readers already know.", marks: 2 },
            { label: "c", prompt: "Explain how a reader from a culture without a long summer break might misread this text.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural reading", statement: "Customs + assumed shared knowledge + reader's own frame." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of: September school start, uniform shopping, new exercise books, packed lunches, after-school clubs.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both customs identified accurately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Assumes readers know the school-year calendar, uniform traditions and the emotional meaning of 'first morning back'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The nostalgic tone assumes shared school-start experience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A reader without long summer breaks may not feel the 'slightly sad' ending of holidays.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Uniforms and exercise books may seem unfamiliar customs rather than normal rituals.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Misreading comes from applying their own school-calendar frame instead of the writer's.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Uniform shopping, September start, exercise books, packed lunches. (b) Assumes school-year calendar and shared nostalgia. (c) Different school calendar makes the emotion and customs unfamiliar.",
            commonErrors: ["Treating the customs as universal rather than culturally specific."],
          },
        },
        {
          id: "langb-u4-q59",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The office party",
            author: "Written for Akademik Space",
            source: "Cultural context practice",
            text: "Nobody escapes the office Christmas party — the pulling of crackers, the paper hats, the Secret Santa gifts that range from thoughtful to terrifying. Colleagues who barely speak all year suddenly dance together. The boss gives a speech nobody listens to, and everyone pretends to enjoy the warm port. By eleven, half the room has slipped away to catch the last train home.",
          },
          parts: [
            { label: "a", prompt: "Identify two cultural customs referenced in the extract.", marks: 2 },
            { label: "b", prompt: "Explain what the extract assumes about workplace culture.", marks: 2 },
            { label: "c", prompt: "Explain how the tone conveys cultural attitudes toward this tradition.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone and cultural reading", statement: "Humorous tone + unexplained customs = insider view of a tradition." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of: Christmas party, pulling crackers, paper hats, Secret Santa, warm port.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both customs identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Assumes office parties are obligatory social events where hierarchy relaxes — boss speech, forced fun.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assumes British-style Christmas customs as normal workplace ritual.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tone is affectionate but ironic — 'nobody escapes', 'gifts... terrifying', 'speech nobody listens to'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The irony signals the culture's ambivalence: tradition is obligatory but not genuinely enjoyed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Details like 'pretends to enjoy' and early departures show polite endurance rather than enthusiasm.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The tone reveals a shared cultural joke — insiders recognise the ritual's absurdity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Crackers, Secret Santa, paper hats, port. (b) Assumes obligatory office-party ritual. (c) Ironic affection — obligatory tradition endured with humour.",
            commonErrors: ["Missing the irony — reading the tone literally as enthusiastic."],
          },
        },
        {
          id: "langb-u4-q60",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how you would research an unfamiliar cultural reference found in a target-language text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural research strategy", statement: "Unfamiliar references signal a gap in your cultural knowledge — research closes it." },
            ],
            steps: [
              { reasoning: "Identify the reference and note what the text assumes about it.", marks: 1, markCode: "M" },
              { reasoning: "Research its cultural meaning — festival, custom, historical event, celebrity.", marks: 1, markCode: "M" },
              { reasoning: "Re-read the passage with that knowledge to grasp the intended meaning and tone.", marks: 1, markCode: "M" },
              { reasoning: "Record the observation — building cultural knowledge compounds over texts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify the reference, research its cultural meaning, re-read for intended sense, and record it for future texts.",
            commonErrors: ["Guessing the meaning and moving on — unverified guesses compound errors."],
          },
        },
      ],
    },
    {
      id: "langb-u4-culture-frames",
      title: "Interpreting texts through cultural frames",
      skill: "Compare how different cultural perspectives shape the meaning of a text and its themes.",
      lesson: {
        sections: [
          {
            heading: "Texts as cultural products",
            body: "A text is not neutral — it was produced inside a culture and reflects that culture's concerns. An advert for a product assumes certain values (individual achievement, family, tradition). A news story frames events through the culture's priorities. When you read in your target language, ask what the text reveals about what that culture cares about.",
          },
          {
            heading: "Themes across cultures",
            body: "Universal themes — love, family, ambition, conflict — appear in every culture but are expressed differently. A story about family honour may centre filial duty in one culture and individual choice in another. Recognising the theme underneath the cultural expression lets you engage with texts from any culture on a deeper level.",
          },
          {
            heading: "Building your cultural frame",
            body: "Your intercultural competence grows by comparing frames: How does your culture treat the theme differently? What would your culture's version of this text emphasise? This comparison — source culture vs target culture — is exactly what IB Language B intercultural understanding assesses. Keep a journal of cultural observations from texts you read.",
          },
        ],
        keyFormulas: [
          { name: "Text as product", statement: "Every text reflects its culture's values, concerns and priorities" },
          { name: "Theme vs expression", statement: "Universal themes appear in culturally specific forms — compare the forms" },
        ],
        workedExample: {
          problem: "A target-language film shows a character prioritising family duty over personal ambition. How might your culture frame this differently?",
          solution: "Your culture might frame it as a conflict between individual fulfilment and obligation — but the theme (family vs self) is universal; only the emphasis differs.",
        },
      },
      questions: [
        {
          id: "langb-u4-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'cultural frame' when reading a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The physical borders of a country" },
              { id: "b", text: "The set of shared values and references through which a culture interprets events" },
              { id: "c", text: "A type of picture frame for artwork" },
              { id: "d", text: "The grammar of a language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural frame", statement: "The shared values and references a culture uses to interpret meaning." },
            ],
            steps: [
              { reasoning: "Cultural frame = the interpretive lens of shared values.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The set of shared values and references through which a culture interprets events",
            commonErrors: ["Confusing cultural frame with physical or grammatical concepts."],
          },
        },
        {
          id: "langb-u4-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a text's 'theme' and its 'cultural expression'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme vs expression", statement: "Theme = universal subject; expression = culturally specific form." },
            ],
            steps: [
              { reasoning: "Theme is the universal subject — love, family, ambition — shared across cultures.", marks: 1, markCode: "M" },
              { reasoning: "Cultural expression is how that theme is presented — specific customs, values, references.", marks: 1, markCode: "M" },
              { reasoning: "Same theme, different expression: family duty vs individual choice framing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theme = universal subject; cultural expression = the culture-specific way it is presented.",
            commonErrors: ["Assuming different expressions mean different themes."],
          },
        },
        {
          id: "langb-u4-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how reading a text from your target culture can change your understanding of your own culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Reflexive interculturalism", statement: "Comparing cultures makes your own norms visible — you see what was previously invisible." },
            ],
            steps: [
              { reasoning: "Your own culture's norms are invisible until contrasted with another's.", marks: 1, markCode: "M" },
              { reasoning: "Reading another culture's texts highlights assumptions you never noticed.", marks: 1, markCode: "R" },
              { reasoning: "You begin to see your culture as one option among many, not 'the norm'.", marks: 1, markCode: "M" },
              { reasoning: "This reflexivity is the deepest form of intercultural understanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Foreign texts make your own cultural assumptions visible — deepening intercultural self-awareness.",
            commonErrors: ["Treating your culture as the neutral default rather than one frame among many."],
          },
        },
        {
          id: "langb-u4-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Compare how two cultures might express the theme of 'respect for elders'.",
          parts: [
            { label: "a", prompt: "Describe how your own culture expresses this theme.", marks: 2 },
            { label: "b", prompt: "Describe how a different culture might express it differently.", marks: 2 },
            { label: "c", prompt: "Explain what this comparison reveals about intercultural understanding.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural comparison", statement: "Same theme, different cultural expressions — comparison builds intercultural insight." },
            ],
            steps: [
              { part: "a", reasoning: "Your culture's expression described — e.g. language forms, family customs, expectations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific, accurate description of your own cultural expression.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Different culture's expression — e.g. different forms of address, living arrangements, obligations.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expression differs while theme stays the same.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Shows that universal themes take culturally specific forms.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Neither expression is 'wrong' — each fits its cultural frame.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comparison builds the intercultural competence Language B assesses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Your culture's expression. (b) Different cultural expression, same theme. (c) Universal theme, cultural forms — comparison builds competence.",
            commonErrors: ["Ranking cultures rather than comparing expressions neutrally."],
          },
        },
        {
          id: "langb-u4-q61",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does it mean to say a text is a 'cultural product'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was manufactured in a factory" },
              { id: "b", text: "It was produced inside a culture and reflects that culture's values and concerns" },
              { id: "c", text: "It is only sold in one country" },
              { id: "d", text: "It has no meaning outside its culture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural product", statement: "Every text reflects the values, concerns and priorities of the culture that produced it." },
            ],
            steps: [
              { reasoning: "Texts are produced within a culture and carry its concerns — not neutral objects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It was produced inside a culture and reflects that culture's values and concerns",
            commonErrors: ["Thinking 'product' means commercial — it means anything produced by a culture."],
          },
        },
        {
          id: "langb-u4-q62",
          difficulty: "core",
          totalMarks: 2,
          stem: "The theme 'ambition' appears in texts from many cultures. What differs between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — all texts are identical" },
              { id: "b", text: "The cultural expression: how ambition is valued, portrayed and achieved differs" },
              { id: "c", text: "Only the language used" },
              { id: "d", text: "The theme itself disappears" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme vs expression", statement: "Universal themes take culturally specific forms — values and portrayal differ." },
            ],
            steps: [
              { reasoning: "Themes are universal; their cultural expression — how they are valued and portrayed — differs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The cultural expression: how ambition is valued, portrayed and achieved differs",
            commonErrors: ["Assuming universal themes mean identical texts."],
          },
        },
        {
          id: "langb-u4-q63",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is comparing your culture's expression of a theme with another culture's expression valuable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It proves your culture is superior" },
              { id: "b", text: "It reveals that universal themes take culturally specific forms — building intercultural insight" },
              { id: "c", text: "It helps you memorise vocabulary" },
              { id: "d", text: "It is required only for exams" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural comparison", statement: "Comparing expressions of universal themes builds intercultural competence." },
            ],
            steps: [
              { reasoning: "Comparison shows the same theme expressed differently — the core of intercultural understanding.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It reveals that universal themes take culturally specific forms — building intercultural insight",
            commonErrors: ["Treating comparison as ranking — it is neutral observation of difference."],
          },
        },
        {
          id: "langb-u4-q64",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What might a target-culture advert reveal about what that culture values?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the product's technical features" },
              { id: "b", text: "The values the culture associates with the product — e.g. family, achievement, tradition" },
              { id: "c", text: "Nothing — adverts are culture-free" },
              { id: "d", text: "Only the company's profits" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Texts as cultural products", statement: "Adverts reflect the values the culture wants to associate with products." },
            ],
            steps: [
              { reasoning: "Adverts choose imagery and messages matching cultural values — family, success, tradition.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The values the culture associates with the product — e.g. family, achievement, tradition",
            commonErrors: ["Reading adverts only for product information, missing the cultural values."],
          },
        },
        {
          id: "langb-u4-q65",
          difficulty: "core",
          totalMarks: 2,
          stem: "In one culture a story frames family duty as obligation; in another as chosen loyalty. What stays the same?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing at all" },
              { id: "b", text: "The theme — family loyalty — while the cultural expression differs" },
              { id: "c", text: "Only the names of characters" },
              { id: "d", text: "The moral lesson is identical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Universal themes", statement: "Love, family, ambition appear everywhere but are expressed in culturally specific forms." },
            ],
            steps: [
              { reasoning: "The theme (family loyalty) is universal; obligation vs chosen loyalty is the cultural expression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The theme — family loyalty — while the cultural expression differs",
            commonErrors: ["Confusing the universal theme with its culturally specific expression."],
          },
        },
        {
          id: "langb-u4-q66",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does the IB value intercultural understanding in Language B rather than just comprehension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because comprehension is too easy" },
              { id: "b", text: "Because language learning aims at communication across cultures, not just decoding words" },
              { id: "c", text: "Because exams require it" },
              { id: "d", text: "Because cultures have no differences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "IB Language B aims", statement: "The course develops communicative competence across cultures, not just literal understanding." },
            ],
            steps: [
              { reasoning: "Language B's purpose is intercultural communication — understanding requires cultural as well as linguistic competence.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because language learning aims at communication across cultures, not just decoding words",
            commonErrors: ["Thinking intercultural understanding is an extra rather than the core aim."],
          },
        },
        {
          id: "langb-u4-q67",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain what 'reading through a cultural frame' means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural frame", statement: "The shared values and references a culture uses to interpret events." },
            ],
            steps: [
              { reasoning: "Every reader interprets texts through a set of shared values, references and norms.", marks: 1, markCode: "M" },
              { reasoning: "That frame determines what seems normal, funny, offensive or important.", marks: 1, markCode: "M" },
              { reasoning: "Recognising frames explains why the same text reads differently across cultures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interpreting through a cultural frame = decoding meaning via the shared values and references of a culture.",
            commonErrors: ["Describing frame as a physical or grammatical concept."],
          },
        },
        {
          id: "langb-u4-q68",
          difficulty: "core",
          totalMarks: 3,
          stem: "A target-culture news story frames an event very differently from how your culture would report it. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "News framing", statement: "Media frames events through the culture's priorities and values." },
            ],
            steps: [
              { reasoning: "Different cultures prioritise different aspects — what counts as newsworthy differs.", marks: 1, markCode: "M" },
              { reasoning: "Values shape angle: individual rights vs community harmony, for example.", marks: 1, markCode: "R" },
              { reasoning: "The 'facts' may overlap but selection and emphasis reveal the cultural frame.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cultural priorities and values determine what is selected and emphasised — same event, different framing.",
            commonErrors: ["Assuming different reporting means one side is lying — framing is selection, not fabrication."],
          },
        },
        {
          id: "langb-u4-q69",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how keeping a journal of cultural observations from texts can build your intercultural competence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural learning", statement: "Recording cultural observations builds cumulative cultural knowledge." },
            ],
            steps: [
              { reasoning: "Each text exposes references and assumptions you did not previously know.", marks: 1, markCode: "M" },
              { reasoning: "Recording them converts one-off encounters into reusable cultural knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Patterns across entries reveal the culture's values and concerns systematically.", marks: 1, markCode: "R" },
              { reasoning: "This accumulation mirrors how intercultural competence actually develops.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Journalling turns scattered encounters into cumulative cultural knowledge, revealing patterns of values over time.",
            commonErrors: ["Treating cultural notes as vocabulary lists — they should capture values and assumptions."],
          },
        },
        {
          id: "langb-u4-q70",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The new neighbour",
            author: "Written for Akademik Space",
            source: "Theme and expression practice",
            text: "The new family moved in on Saturday, and by Sunday evening the whole street knew their names. Someone brought round a cake; someone else offered to walk the dog while they unpacked. By the end of the week, the children had joined every club on the road and the father had been invited to join the neighbourhood committee. Nobody asked them to prove they belonged — belonging, here, is something you practise together.",
          },
          parts: [
            { label: "a", prompt: "Identify the universal theme in the extract.", marks: 2 },
            { label: "b", prompt: "Describe how the culture expresses this theme.", marks: 2 },
            { label: "c", prompt: "Explain how your own culture might express the same theme differently.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme and cultural expression", statement: "Universal theme (belonging/community) expressed through culture-specific customs." },
            ],
            steps: [
              { part: "a", reasoning: "Theme: community, belonging, neighbourly integration.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurately identified as a universal human theme.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expression: informal, immediate, collective — cake, dog-walking, clubs, committee — belonging through shared activity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expression described as communal and participatory.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Your culture might express belonging through different customs — formal introductions, gifts, or individual privacy norms.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Possibly slower, more reserved, or family-based rather than street-based.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Same theme (belonging) expressed in a different cultural form — comparison builds intercultural insight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Community/belonging. (b) Immediate, collective, activity-based welcome. (c) Different customs — formal, reserved or family-centred — same theme.",
            commonErrors: ["Assuming your culture lacks the theme — only the expression differs."],
          },
        },
        {
          id: "langb-u4-q71",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare how two different cultures might treat the theme of 'honesty'.",
          parts: [
            { label: "a", prompt: "Describe how your own culture expresses the value of honesty.", marks: 2 },
            { label: "b", prompt: "Describe how another culture might express it differently.", marks: 2 },
            { label: "c", prompt: "Explain what this comparison reveals about cultural frames.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural comparison", statement: "Same theme, different expressions — comparison reveals frames, not rankings." },
            ],
            steps: [
              { part: "a", reasoning: "Your culture's expression described — e.g. directness valued, honesty expected in all relationships.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific, accurate description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Another culture's expression — e.g. indirect honesty, protecting face, context-dependent truth.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expression differs while valuing honesty remains.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Shows the same value is expressed through different social rules.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Neither is 'wrong' — each fits its cultural frame of politeness and social harmony.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reveals that frames shape what counts as honest behaviour.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This is intercultural understanding: holding both frames without judging.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Your culture's honesty norms. (b) Different cultural expression, same value. (c) Frames shape expression — comparison builds intercultural insight.",
            commonErrors: ["Ranking cultures — 'direct is better than indirect' — rather than comparing neutrally."],
          },
        },
        {
          id: "langb-u4-q72",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a film or story from your target culture can deepen your understanding of your own culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Reflexive interculturalism", statement: "Comparison makes your own cultural norms visible for the first time." },
            ],
            steps: [
              { reasoning: "Your own norms are invisible until contrasted with a different culture's expressions.", marks: 1, markCode: "M" },
              { reasoning: "Foreign texts highlight assumptions you never noticed in your own context.", marks: 1, markCode: "R" },
              { reasoning: "You see your culture as one frame among many rather than the default 'normal'.", marks: 1, markCode: "M" },
              { reasoning: "This reflexive awareness is deeper intercultural understanding than either culture alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Foreign texts make your own norms visible — reflexive comparison deepens intercultural self-awareness.",
            commonErrors: ["Thinking studying another culture means ignoring your own."],
          },
        },
      ],
    },
  ],
};
