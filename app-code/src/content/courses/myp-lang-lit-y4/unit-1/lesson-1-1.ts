import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mll4-u1-lesson-1-1",
  code: "1-1",
  title: "Comparative Analysis",
  goal: "I CAN compare two texts on the same theme, analysing how each uses language, structure and perspective differently.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Comparative analysis", definition: "Examining two or more texts together to identify similarities and differences." },
    { term: "Connection", definition: "A link between texts — shared themes, techniques, or contrasting approaches." },
    { term: "Contrast", definition: "A difference between texts — in perspective, style, or conclusion." },
    { term: "Evaluation", definition: "Judging which text is more effective and why." },
    { term: "Intertextuality", definition: "The way texts reference or respond to other texts." },
  ],
  concepts: [
    {
      id: "mll4-u1-comparing-texts",
      title: "How to compare texts",
      skill: "Structure a comparison by identifying connections and contrasts across multiple features.",
      lesson: {
        sections: [
          {
            heading: "What to compare",
            body: "When comparing two texts, look at: **theme** (same idea?), **perspective** (who tells it?), **language** (word choice, tone), **structure** (how organized?), **techniques** (devices used), and **effect** (how each makes you feel). Don't just list differences — find the **meaningful** ones.",
          },
          {
            heading: "Connections and contrasts",
            body: "Use connectives: **both**, **similarly**, **like** for similarities; **whereas**, **in contrast**, **however**, **on the other hand** for differences. A good comparison weaves both — 'Both explore loss, but Text A shows it through a funeral while Text B shows it through silence.'",
          },
          {
            heading: "Evaluating effectiveness",
            body: "Comparison isn't just description — it can lead to **evaluation**. Ask: which text is more **effective** at its purpose? Which creates stronger **emotion**? Which is more **persuasive**? Support your judgment with evidence from both texts.",
          },
        ],
        keyFormulas: [
          { name: "Comparison framework", statement: "Theme + Perspective + Language + Structure + Effect. Weave connections and contrasts." },
        ],
        workedExample: {
          problem: "Compare two poems about rain: one joyful, one melancholy. Structure a comparison.",
          solution: "Both describe rain, but Poem A uses bright imagery ('silver threads') creating joy; Poem B uses dark imagery ('grey tears') creating melancholy — same subject, opposite moods through diction.",
        },
      },
      questions: [
        {
          id: "mll4-u1-comparing-texts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you look at when comparing two texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the endings" },
              { id: "b", text: "The page numbers" },
              { id: "c", text: "Theme, perspective, language, structure and effect" },
              { id: "d", text: "Only the titles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparison features", statement: "Compare across theme, perspective, language, structure and effect." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): comparison looks at multiple features — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Theme, perspective, language, structure and effect",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Text A: 'I will always remember that summer — the smell of cut grass, the sound of cicadas, my grandmother's laughter.'\n\nText B: 'The summer of 1987 was the hottest on record. Temperatures reached 40 degrees for eleven consecutive days.'",
          },
          stem: "Compare the openings of these two texts about summer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative analysis", statement: "Text A is personal/nostalgic; Text B is factual/documentary." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Text A uses first person, sensory memory ('smell', 'sound', 'laughter') — personal nostalgia.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Text B uses facts and dates ('1987', '40 degrees') — objective reporting.", evidence: "40 degrees for eleven consecutive days", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text A is personal and nostalgic (sensory memory); Text B is factual and objective (dates, temperatures). Same subject, different approaches.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Views",
            author: "Written for Akademik Space",
            text: "Text A: 'The new skate park is a triumph — a vibrant space where young people can express themselves safely.'\n\nText B: 'The skate park has brought noise complaints from nearby residents, who say it operates until 10pm daily.'",
          },
          stem: "Compare how these two texts treat the same subject. What does each emphasize and what does each leave out?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Perspective and omission", statement: "Texts select which facts to highlight; comparison reveals what's emphasized and what's left out." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Text A emphasizes benefits — 'triumph', 'vibrant', 'express themselves safely' — positive framing.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Text B emphasizes problems — 'noise complaints', 'until 10pm' — negative framing.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A leaves out residents' concerns; B leaves out the park's benefits — each is one-sided.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text A emphasizes benefits and ignores drawbacks; Text B emphasizes problems and ignores benefits — each presents a partial view.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two poems about the sea.",
          extract: {
            title: "The Sea",
            author: "Written for Akademik Space",
            text: "Poem A: 'The sea is a blue mirror\nreflecting the sky's white fire.\nWaves comb its silver hair\nin endless, patient prayer.'\n\nPoem B: 'The sea does not forgive.\nIt takes the sand, the shells,\nthe names we carved in stone.\nIt gives nothing back.'",
          },
          parts: [
            { label: "a", prompt: "Identify one similarity and one difference in how the poems treat the sea.", marks: 2 },
            { label: "b", prompt: "Explain how the imagery in each creates a different mood.", marks: 2 },
            { label: "c", prompt: "Which poem is more effective? Justify your judgment.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative evaluation", statement: "Compare imagery, mood and effectiveness; justify judgments with evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): similarity — both personify the sea; difference — A is gentle/maternal, B is harsh/indifferent.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): A uses 'mirror', 'silver hair', 'prayer' (gentle); B uses 'does not forgive', 'takes', 'gives nothing' (harsh).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A's imagery creates calm, spiritual mood; B's creates threatening, mournful mood.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the different word choices ('combs hair' vs 'takes names') produce opposite emotional responses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): either can be defended — A for beauty and craft, B for emotional power — as long as justified with textual evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Both personify; A gentle, B harsh. (b) A = calm/spiritual, B = threatening/mournful. (c) Either, with justification.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connective best signals a contrast between two texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "whereas" },
              { id: "b", text: "both" },
              { id: "c", text: "likewise" },
              { id: "d", text: "similarly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connectives for comparison", statement: "Use 'both/similarly' for similarities and 'whereas/in contrast' for differences." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'whereas' signals contrast — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** whereas",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Views on Homework",
            author: "Written for Akademik Space",
            text: "Text A: 'Homework builds discipline and reinforces what is taught in class. It prepares students for independent study.'\n\nText B: 'Homework causes stress and takes time away from family and rest. It widens the gap between students who have support at home and those who do not.'",
          },
          stem: "Which statement best compares these two texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text A is about school uniforms" },
              { id: "b", text: "Both discuss homework's effect on students, but A emphasises benefits while B emphasises costs" },
              { id: "c", text: "Text B agrees completely with Text A" },
              { id: "d", text: "Both texts argue that homework should be abolished" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connection and contrast", statement: "A good comparison identifies the shared subject and the differing positions." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): both texts discuss homework's effect on students — same subject.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A lists benefits ('discipline', 'reinforces'); B lists costs ('stress', 'widens the gap') — contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Both discuss homework's effect on students, but A emphasises benefits while B emphasises costs",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When comparing a novel and a documentary about the same event, which TWO features are most useful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perspective and language" },
              { id: "b", text: "Page count and font size" },
              { id: "c", text: "Cover colour and price" },
              { id: "d", text: "Author's age and birthplace" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparison features", statement: "Compare across theme, perspective, language, structure and effect." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): perspective and language are meaningful comparison features — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): page count, font and price are surface features irrelevant to analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Perspective and language",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Endings",
            author: "Written for Akademik Space",
            text: "Story A ends: 'They found the treasure and lived happily ever after.'\n\nStory B ends: 'The box was empty. But the letter inside told them where to look next — and for the first time, they wondered if they wanted to find it.'",
          },
          stem: "Compare the endings of these two stories. What does each suggest about the characters' journey?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative structure", statement: "Endings reveal theme — resolution vs ambiguity." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Story A resolves everything — 'happily ever after' closes the journey completely.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Story B opens new questions — empty box, new lead, characters 'wondered' — suggests the journey continues or changes meaning.", evidence: "they wondered if they wanted to find it", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): contrast — A offers closure and reward; B offers ambiguity and growth, shifting focus from treasure to character.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A ends with complete resolution; B ends with ambiguity and character growth — closure vs continuation.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which comparison is more meaningful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both explore grief, but A shows it through a funeral while B shows it through silence" },
              { id: "b", text: "Text A has 200 words; Text B has 300 words" },
              { id: "c", text: "Text A uses the word 'the' more often" },
              { id: "d", text: "Text A is on page 1; Text B is on page 2" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meaningful comparison", statement: "Meaningful differences concern theme, perspective, language and effect — not surface features." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): word counts and page numbers are surface features; theme and technique are meaningful — (c).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): (c) identifies shared theme AND contrasting treatment — a complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Both explore grief, but A shows it through a funeral while B shows it through silence",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Climate Texts",
            author: "Written for Akademik Space",
            text: "Article: 'Global temperatures have risen by 1.1 degrees since pre-industrial times, according to the latest UN report. Scientists warn that without urgent action, extreme weather events will become more frequent.'\n\nPoem: 'The ice is singing its last song.\nGlaciers weep silver tears\nfor a world that will not listen.\nThe sea climbs higher, hour by hour,\nand the shore forgets its name.'",
          },
          stem: "Compare how the article and the poem treat the theme of climate change. Consider perspective, language and effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre comparison", statement: "Article = facts and warning; poem = personification and emotion — same theme, different means." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): article uses facts ('1.1 degrees', 'UN report') and logical warning; poem uses personification ('ice is singing', 'glaciers weep').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): article's perspective is analytical/authoritative; poem's is emotional/elegiac — 'silver tears', 'sea climbs higher'.", evidence: "Glaciers weep silver tears", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): effect — article informs and urges action; poem mourns and creates urgency through feeling.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both achieve their purpose — the article persuades through evidence, the poem through emotion; complementary approaches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Article = factual warning; poem = emotional elegy. Same theme; article persuades by evidence, poem by feeling.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about visiting a new city.",
          extract: {
            title: "Two Travel Texts",
            author: "Written for Akademik Space",
            text: "Brochure: 'Discover the vibrant capital! World-class museums, exquisite cuisine and stunning architecture await. Book your dream holiday today.'\n\nDiary entry: 'The city overwhelmed me at first — too many people, too much noise. But on the third day I found a quiet square where an old man played chess, and something about the place finally made sense.'",
          },
          parts: [
            { label: "a", prompt: "Identify the shared subject and one key difference in perspective.", marks: 2 },
            { label: "b", prompt: "Compare the language used in each text.", marks: 2 },
            { label: "c", prompt: "Which text is more effective at encouraging a visit? Justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative evaluation", statement: "Compare perspective, language and effectiveness; justify judgments." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): both about visiting the city; brochure is promotional/idealised, diary is personal/reflective.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): brochure sells attractions; diary reveals personal discovery — 'something about the place finally made sense'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): brochure uses hype ('vibrant', 'world-class', 'dream'); diary uses sensory detail ('too much noise', 'quiet square', 'played chess').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): brochure is impersonal and superlative; diary is intimate first-person — different registers.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): brochure is more directly persuasive ('Book today'), though the diary's authenticity may be more convincing — either defended with evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Same subject; brochure = promotional, diary = personal. (b) Hype vs sensory detail. (c) Brochure more direct; diary more authentic.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When comparing texts, what does 'effect' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's age" },
              { id: "b", text: "The number of pages" },
              { id: "c", text: "How each text makes the reader feel or respond" },
              { id: "d", text: "The price of the book" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Effect", statement: "Effect = the emotional or intellectual response a text creates in the reader." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): effect = reader response — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** How each text makes the reader feel or respond",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Opening A: 'The lighthouse keeper climbed the stairs one final time. Below, the storm was gathering.'\n\nOpening B: 'Storms have always fascinated sailors — their power, their unpredictability, their terrible beauty.'",
          },
          stem: "Compare these two openings about a storm. What does each emphasise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative openings", statement: "Openings establish perspective — action vs reflection." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): A dramatises the storm through action — 'climbed', 'storm was gathering' — immediate scene.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B reflects philosophically — 'power', 'unpredictability', 'beauty' — analytical viewpoint.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A emphasises action/scene; B emphasises reflection/idea — narrative vs expository opening.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence best compares two texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text A was written first." },
              { id: "b", text: "I prefer Text B." },
              { id: "c", text: "Text A is good and Text B is bad." },
              { id: "d", text: "Both explore loss; however, Text A shows it through silence while Text B shows it through anger." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Weaving comparison", statement: "Strong comparisons link shared elements with contrasting details." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): (b) identifies connection ('both explore loss') and contrast ('however... silence vs anger').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): other options are judgments or facts without comparative analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Both explore loss; however, Text A shows it through silence while Text B shows it through anger.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Descriptions of Home",
            author: "Written for Akademik Space",
            text: "Text A: 'Home is where the heart is — a place of warmth, safety and belonging.'\n\nText B: 'Home is the address on the envelope. It is a postcode, a street name, a set of coordinates. Whether anyone waits inside is irrelevant.'",
          },
          stem: "Compare these two definitions of 'home'. Evaluate which is more powerful and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative evaluation", statement: "Judge effectiveness by impact, originality and fit to purpose." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): A is sentimental — warmth, safety, belonging; familiar emotional definition.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is provocative — reduces home to 'postcode, coordinates' then twists with 'whether anyone waits inside' — challenges the sentimental view.", evidence: "whether anyone waits inside is irrelevant", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is more original and thought-provoking; A is comfortable but predictable.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): either can be defended — A for emotional resonance, B for originality and challenge; judgment must be justified.", marks: 1, markCode: "A" },
          ],
            finalAnswer: "A = sentimental/familiar; B = provocative/original. B more powerful for challenge; A for comfort — justify choice.",
          },
        },
        {
          id: "mll4-u1-comparing-texts-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about friendship.",
          extract: {
            title: "Two Views on Friendship",
            author: "Written for Akademik Space",
            text: "Text A: 'A true friend stands by you in hard times. They listen without judging, help without being asked, and never betray your trust.'\n\nText B: 'Friendship is a mirror — it shows you who you are. The best friends challenge you, disagree with you, and make you better than you were.'",
          },
          parts: [
            { label: "a", prompt: "Identify what each text values most in friendship.", marks: 2 },
            { label: "b", prompt: "Compare the tone and language of each text.", marks: 2 },
            { label: "c", prompt: "Which view of friendship do you find more convincing? Justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative analysis", statement: "Compare values, tone and language; justify evaluative judgments." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A values loyalty and support ('stands by', 'never betray'); B values growth and honesty ('mirror', 'challenge you').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): A sees friendship as protection; B sees it as transformation — different ideals.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A uses reassuring, list-like language ('listen', 'help', 'never betray'); B uses metaphor ('mirror') and active verbs ('challenge', 'make you better').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A's tone is warm and settled; B's is energetic and challenging.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): either view defended with reasoning — loyalty vs growth, support vs challenge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = loyalty/support; B = growth/honesty. (b) A warm/list-like; B metaphorical/energetic. (c) Either, justified.",
          },
        },
      ],
    },
    {
      id: "mll4-u1-text-relationships",
      title: "Relationships between texts",
      skill: "Identify how texts relate to each other — responding, parodying, or building on earlier works.",
      lesson: {
        sections: [
          {
            heading: "Texts talk to each other",
            body: "Texts don't exist in isolation. A **parody** mocks another text; a **response** argues with it; an **adaptation** retells it for a new audience; an **allusion** references it. Recognizing these relationships deepens your reading.",
          },
          {
            heading: "Same theme, different treatment",
            body: "Two texts can explore the **same theme** with completely different approaches. 'Cinderella' has been retold hundreds of times — each version changes the emphasis: some focus on kindness, others on justice, others on class. The theme is constant; the treatment varies.",
          },
          {
            heading: "Intertextuality",
            body: "**Intertextuality** is when a text references another — a character named 'Romeo', a line from Shakespeare, a story that echoes another. These references create layers of meaning for readers who recognize them.",
          },
        ],
        keyFormulas: [
          { name: "Text relationships", statement: "Parody mocks; response argues; adaptation retells; allusion references." },
        ],
        workedExample: {
          problem: "A modern story has a character say 'I'm not a hero, I'm just someone who showed up.' Which earlier story does this echo?",
          solution: "It echoes the humble-hero tradition — characters like Samwise in LOTR or everyman heroes — suggesting ordinary people can be heroic.",
        },
      },
      questions: [
        {
          id: "mll4-u1-text-relationships-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'intertextuality'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of poetry" },
              { id: "b", text: "Text between two covers" },
              { id: "c", text: "When a text references or responds to another text" },
              { id: "d", text: "Text written in foreign language" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intertextuality", statement: "Intertextuality is when texts reference or respond to each other." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): intertextuality = texts referencing each other — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** When a text references or responds to another text",
          },
        },
        {
          id: "mll4-u1-text-relationships-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Cinderella Stories",
            author: "Written for Akademik Space",
            text: "Version A: 'Cinderella was kind to everyone, even her cruel stepsisters. Her kindness was rewarded when the prince chose her.'\n\nVersion B: 'Cinderella was clever and resourceful. She outwitted her stepsisters and chose her own prince.'",
          },
          stem: "How do these two versions treat the same character differently?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Adaptation", statement: "Different versions emphasize different traits and values." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Version A emphasizes kindness/passivity — rewarded for good behaviour; Version B emphasizes cleverness/agency — she 'chose her own prince'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A's moral is 'kindness wins'; B's is 'resourcefulness wins' — different values, same story.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Version A: passive kindness rewarded. Version B: active cleverness rewarded — same character, different values emphasized.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Response",
            author: "Written for Akademik Space",
            text: "In my story, the wolf doesn't eat the pigs — he becomes their friend. Some say this ruins the moral, but I think it teaches something better: that enemies can change.",
          },
          stem: "What is this text doing in relation to the original 'Three Little Pigs'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Intertextual response", statement: "This text responds to and deliberately changes an earlier story." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): it's an adaptation/response — it takes the original tale and changes the ending.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Some say this ruins the moral' shows awareness of the original's values — the writer is arguing with tradition.", evidence: "Some say this ruins the moral", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the writer's new moral ('enemies can change') replaces the old ('be prepared') — intertextuality creates dialogue between versions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It's a response/adaptation that deliberately changes the original ending and argues for a new moral — texts in dialogue.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two versions of 'Little Red Riding Hood'.",
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "Version A: 'Little Red obeyed her mother and stayed on the path. The wolf was punished for his trickery.'\n\nVersion B: 'Little Red was curious and brave. She outsmarted the wolf and learned that strangers can be dangerous — but she didn't need a hunter to save her.'",
          },
          parts: [
            { label: "a", prompt: "Identify how each version treats Little Red differently.", marks: 2 },
            { label: "b", prompt: "Explain what each version's moral is.", marks: 2 },
            { label: "c", prompt: "Why do different versions of the same story exist?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Adaptation and values", statement: "Versions reflect different cultural values and emphases." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A's Red is obedient/passive ('obeyed', 'stayed on path'); B's Red is active/clever ('curious and brave', 'outsmarted').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): A needs external rescue (hunter implied); B is self-sufficient.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A's moral — obedience is rewarded, danger punished; B's — cleverness and independence save you.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): both teach caution about strangers but through different means — obedience vs wit.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): versions exist because stories are retold to reflect different values, audiences and times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A: passive/obedient; B: active/brave. (b) A: obedience rewarded; B: cleverness saves. (c) Versions reflect different values and audiences.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a parody?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A text that mocks or imitates another text for comic effect" },
              { id: "b", text: "A copy of a famous painting" },
              { id: "c", text: "A serious retelling of a story" },
              { id: "d", text: "A translation of a poem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Parody", statement: "A parody mocks or imitates another text for comic effect." }],
            steps: [
              { reasoning: "Criterion A (Analysing): parody = mocking imitation — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A text that mocks or imitates another text for comic effect",
          },
        },
        {
          id: "mll4-u1-text-relationships-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Hamlet Openings",
            author: "Written for Akademik Space",
            text: "Original: 'To be, or not to be — that is the question.'\n\nModern version: 'To scroll, or not to scroll — that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous battery life, or to take arms against a sea of troubles... and check my phone.'",
          },
          stem: "What is the modern version doing in relation to Shakespeare's text? Identify the technique.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parody and allusion", statement: "Borrowing famous lines and updating them creates parody and intertextuality." }],
            steps: [
              { reasoning: "Criterion A (Analysing): it parodies Hamlet — borrows the famous soliloquy and updates it for modern life ('scroll', 'battery life', 'check my phone').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): effect — mocks how timeless dilemmas now involve phones; readers who know Hamlet get the joke.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It's a parody — Shakespeare's soliloquy updated for the phone age; intertextuality creates humour.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A film adaptation changes the ending of a novel so the villain survives. What type of text relationship is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parody" },
              { id: "b", text: "Response" },
              { id: "c", text: "Allusion" },
              { id: "d", text: "Adaptation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Adaptation", statement: "An adaptation retells a story for a new medium or audience." }],
            steps: [
              { reasoning: "Criterion A (Analysing): adaptation — same story retold in film with changes — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): changed ending shows reinterpretation, not copying.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adaptation",
          },
        },
        {
          id: "mll4-u1-text-relationships-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Retelling",
            author: "Written for Akademik Space",
            text: "In the original tale, the fisherman catches a magic fish and releases it. In this version, the fisherman keeps the fish — and the sea rises to take revenge. The writer adds: 'Some stories teach you to be kind. Mine teaches you what happens when kindness is repaid with greed.'",
          },
          stem: "How does this text relate to the original tale? Explain what the writer is doing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intertextual response", statement: "A response borrows a story and argues with or extends its meaning." }],
            steps: [
              { reasoning: "Criterion A (Analysing): it's a response/adaptation — changes the plot (keeps the fish) to create a different moral.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the writer explicitly discusses the original's moral ('Some stories teach you to be kind') — awareness of the source text.", evidence: "Some stories teach you to be kind", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'kindness is repaid with greed' replaces the original lesson — the texts are in dialogue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A response that changes the plot to argue for a different moral — texts in dialogue.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of intertextuality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A poem with a rhyming couplet" },
              { id: "b", text: "A character named 'Romeo' in a modern play" },
              { id: "c", text: "A recipe with numbered steps" },
              { id: "d", text: "A textbook chapter on photosynthesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Intertextuality", statement: "Intertextuality = a text referencing another text." }],
            steps: [
              { reasoning: "Criterion A (Analysing): naming a character 'Romeo' references Shakespeare — intertextuality — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the reference creates layers of meaning for readers who recognise it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A character named 'Romeo' in a modern play",
          },
        },
        {
          id: "mll4-u1-text-relationships-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Snow White Stories",
            author: "Written for Akademik Space",
            text: "Version A: 'Snow White was gentle and patient. She forgave the queen and lived happily ever after.'\n\nVersion B: 'Snow White was resourceful and brave. She outwitted the queen, built her own house, and never needed a prince.'",
          },
          stem: "Compare how these two versions treat the same character. What does each version suggest about what makes a 'good' ending?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adaptation and values", statement: "Versions reflect different cultural values — passive virtue vs active agency." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A's Snow White is passive — 'gentle', 'patient', 'forgave', needs rescue; B's is active — 'resourceful', 'outwitted', 'built her own house'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A's good ending = marriage/prince ('happily ever after'); B's = independence ('never needed a prince').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): each version's values shape the character — traditional femininity vs modern agency.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the same story retold shows how 'happily ever after' means different things across versions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A: passive virtue rewarded with prince; B: active agency rewarded with independence — same tale, different values.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts.",
          extract: {
            title: "The Dragon and the Knight",
            author: "Written for Akademik Space",
            text: "Version A: 'The knight slew the dragon and saved the kingdom. The people cheered as he rode through the gates.'\n\nVersion B: 'The knight didn't fight the dragon. He sat down and talked to it. It turned out the dragon was lonely, guarding treasure no one had stolen in a hundred years.'",
          },
          parts: [
            { label: "a", prompt: "Identify how each version treats the knight differently.", marks: 2 },
            { label: "b", prompt: "Explain what each version suggests about heroism.", marks: 2 },
            { label: "c", prompt: "Why might a writer choose to retell this story?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Heroic conventions", statement: "Traditional heroism = defeating evil; modern retellings may value empathy or peace." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A's knight is violent hero ('slew', 'saved', 'cheered'); B's knight is empathetic peacemaker ('sat down and talked').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): A's dragon is a threat; B's dragon is lonely — the antagonist is humanised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A suggests heroism = strength and conquest; B suggests heroism = courage to understand the 'enemy'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B subverts the convention — 'saving the kingdom' by removing the threat through connection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): writers retell stories to challenge conventions, reflect new values, or offer fresh perspectives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A: violent hero; B: empathetic peacemaker. (b) A: heroism = conquest; B: heroism = understanding. (c) To challenge conventions and offer new values.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an allusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An indirect reference to another text, person or event" },
              { id: "b", text: "A direct quotation with citation" },
              { id: "c", text: "A type of rhyme" },
              { id: "d", text: "A footnote in an essay" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allusion", statement: "An indirect reference to another text, person or event." }],
            steps: [
              { reasoning: "Criterion A (Analysing): allusion = indirect reference — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An indirect reference to another text, person or event",
          },
        },
        {
          id: "mll4-u1-text-relationships-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Openings",
            author: "Written for Akademik Space",
            text: "Text A: 'The prince searched for the lost slipper all over the kingdom.'\n\nText B: 'In my version, the shoe doesn't fit — and that's the point. The prince was looking for the wrong thing all along.'",
          },
          stem: "How does Text B relate to the original Cinderella story?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Response to source", statement: "The writer borrows the plot and argues with its assumptions." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Text B is a response — it takes Cinderella's slipper plot and challenges its logic ('looking for the wrong thing').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the shoe not fitting symbolises questioning the original's values — a new interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text B responds to Cinderella — uses the slipper to argue the prince's search was misguided.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement best describes an adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A text written in a foreign language" },
              { id: "b", text: "A summary of a long book" },
              { id: "c", text: "A text that copies another word for word" },
              { id: "d", text: "A retelling of a story for a new audience or medium" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Adaptation", statement: "Adaptation = retelling a story for a new audience or medium." }],
            steps: [
              { reasoning: "Criterion A (Analysing): adaptation retells for new audience/medium — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): it preserves the core story while changing form or emphasis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A retelling of a story for a new audience or medium",
          },
        },
        {
          id: "mll4-u1-text-relationships-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Modern Fairy Tale",
            author: "Written for Akademik Space",
            text: "Rumpelstiltskin was a contractor. He promised to spin straw into gold — but he sent an invoice. The miller's daughter paid in instalments and negotiated a better rate.",
          },
          stem: "Analyse this text's relationship to the original fairy tale. What is the writer doing and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parody and modernisation", statement: "Updating a tale's setting while keeping its structure creates parody that comments on modern life." }],
            steps: [
              { reasoning: "Criterion A (Analysing): it's a parody/adaptation — recognisable plot (straw into gold, mysterious helper) updated with modern elements ('contractor', 'invoice', 'instalments').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'negotiated a better rate' subverts the original's helplessness — the heroine gains agency.", evidence: "negotiated a better rate", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the writer uses the familiar tale to comment on modern economics — magic replaced by bureaucracy and negotiation.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): intertextuality rewards readers who know the original — the joke depends on the contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A parody modernising Rumpelstiltskin — magic becomes bureaucracy; heroine gains agency through negotiation.",
          },
        },
        {
          id: "mll4-u1-text-relationships-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two versions of 'The Boy Who Cried Wolf'.",
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "Version A: 'The boy lied so often that when the wolf really came, no one believed him. The moral: don't lie.'\n\nVersion B: 'The boy's village had a wolf problem — attacks every week. He was tired of being blamed. When the real wolf came, he'd learned to shout louder. But this time, he also had evidence — footprints, torn sheep. This time they believed him.'",
          },
          parts: [
            { label: "a", prompt: "Identify the key difference in how each version treats the boy.", marks: 2 },
            { label: "b", prompt: "Explain how each version's moral differs.", marks: 2 },
            { label: "c", prompt: "What does Version B suggest about blame and trust?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Retelling and moral", statement: "Versions can preserve or subvert the original moral." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A's boy is simply a liar who suffers consequences; B's boy is sympathetic — 'tired of being blamed', uses evidence.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): B adds context (weekly wolf attacks) that explains — not excuses — the lying.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A's moral — don't lie; B's moral — evidence matters; trust requires proof, not just credibility.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B shifts blame partially to the villagers who ignored him — a more complex moral.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B suggests trust should be earned through evidence — 'this time they believed him' because he had proof.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A: liar punished; B: sympathetic boy with evidence. (b) A: don't lie; B: evidence earns trust. (c) Trust requires proof.",
          },
        },
      ],
    },
  ],
};
