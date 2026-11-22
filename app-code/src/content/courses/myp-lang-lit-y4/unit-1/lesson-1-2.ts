import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mll4-u1-lesson-1-2",
  code: "1-2",
  title: "Cross-Genre Connections",
  goal: "I CAN identify connections between literary and non-literary texts that explore the same themes.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Cross-genre", definition: "Comparing texts from different genres — e.g., a poem and a news article on the same subject." },
    { term: "Theme", definition: "The underlying idea a text explores." },
    { term: "Perspective", definition: "The angle or viewpoint from which a subject is presented." },
    { term: "Treatment", definition: "How a genre handles a subject — fiction uses story, non-fiction uses facts." },
    { term: "Universal experience", definition: "Something all humans share — love, loss, belonging, fear." },
  ],
  concepts: [
    {
      id: "mll4-u1-cross-genre",
      title: "Connecting across genres",
      skill: "Find themes and ideas that connect texts from different genres.",
      lesson: {
        sections: [
          {
            heading: "Same theme, different genre",
            body: "A **poem** about loneliness and a **news article** about social isolation explore the **same theme** through different means. The poem uses imagery and emotion; the article uses facts and statistics. Both address the same human experience.",
          },
          {
            heading: "How genres treat themes",
            body: "**Literary texts** explore themes through character, imagery and emotion. **Non-literary texts** explore them through facts, arguments and analysis. A novel about war shows the **experience**; a history book shows the **facts**. Both are valuable — they answer different questions.",
          },
          {
            heading: "Finding connections",
            body: "Ask: what **theme** do both texts explore? How does each **genre** treat it? What does each **reveal** that the other doesn't? 'Both deal with migration, but the poem shows the feeling while the article shows the numbers.'",
          },
        ],
        keyFormulas: [
          { name: "Cross-genre connection", statement: "Same theme + different genre treatment = complementary perspectives." },
        ],
        workedExample: {
          problem: "How might a song about loneliness connect to a documentary about elderly isolation?",
          solution: "Both explore loneliness; the song expresses the feeling through music and lyrics; the documentary presents facts about elderly isolation — complementary perspectives on the same theme.",
        },
      },
      questions: [
        {
          id: "mll4-u1-cross-genre-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'cross-genre' comparison mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing authors" },
              { id: "b", text: "Comparing two poems" },
              { id: "c", text: "Comparing texts from different genres on related subjects" },
              { id: "d", text: "Comparing books and movies" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cross-genre", statement: "Comparing texts from different genres on related themes." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): cross-genre = different genres, related subjects — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Comparing texts from different genres on related subjects",
          },
        },
        {
          id: "mll4-u1-cross-genre-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts on Loneliness",
            author: "Written for Akademik Space",
            text: "Poem: 'The house is quiet.\nThe kettle sings alone.\nMy shadow keeps me company —\na guest who never leaves.'\n\nArticle: 'Studies show that 1 in 4 elderly people in the UK report feeling lonely at least once a week. The causes include bereavement, mobility issues and reduced social contact.'",
          },
          stem: "How do these two texts connect? What does each reveal that the other doesn't?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cross-genre connection", statement: "Poem shows emotional experience; article shows facts and statistics." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): both explore loneliness — the poem through imagery and emotion, the article through statistics and causes.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the poem shows what loneliness feels like; the article shows how common it is and why it happens — complementary perspectives.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both explore loneliness — poem shows the feeling, article shows the facts; complementary perspectives.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a poem about war and a history textbook chapter about the same war would both be valuable but answer different questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genre and purpose", statement: "Literary texts explore experience; non-literary texts present facts — different purposes." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the poem explores the emotional experience — fear, loss, brotherhood — through imagery and character.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the textbook presents facts — dates, battles, causes, consequences — objectively.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the poem answers 'what did it feel like?'; the textbook answers 'what happened?' — both necessary for full understanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The poem answers 'what did it feel like?'; the textbook answers 'what happened?' — complementary, both necessary.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about the same event — a local festival.",
          extract: {
            title: "The Festival",
            author: "Written for Akademik Space",
            text: "News report: 'The annual River Festival attracted over 5,000 visitors this weekend. Organizers reported record attendance and praised the variety of food stalls and live music.'\n\nPoem: 'Lanterns drift on the darkening river,\neach a small sun that someone lit\nfor a wish they were afraid to say aloud.'",
          },
          parts: [
            { label: "a", prompt: "Identify the theme both texts explore.", marks: 1 },
            { label: "b", prompt: "Explain how each genre treats the theme.", marks: 2 },
            { label: "c", prompt: "What does the poem reveal that the report doesn't?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cross-genre analysis", statement: "Report gives facts; poem gives emotional/imagined experience." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): theme — community celebration and human connection at the festival.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): report treats it factually — numbers, logistics, praise; poem treats it imaginatively — lanterns as wishes, emotional imagery.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): report answers 'what happened'; poem answers 'what did it feel like'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the poem reveals the personal, emotional dimension — people lighting lanterns for secret wishes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the report's 'record attendance' is numbers; the poem's 'small sun... for a wish' is meaning — the poem adds human depth.", evidence: "for a wish they were afraid to say aloud", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Community celebration. (b) Report = facts/logistics; poem = emotion/imagination. (c) The poem reveals personal wishes and emotional meaning the report lacks.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What connects a poem and a news article about the same subject?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same length" },
              { id: "b", text: "They use identical language" },
              { id: "c", text: "They were written by the same author" },
              { id: "d", text: "They share a theme but treat it differently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Cross-genre connection", statement: "Different genres share themes but treat them through different means." }],
            steps: [
              { reasoning: "Criterion A (Analysing): shared theme + different treatment — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** They share a theme but treat it differently",
          },
        },
        {
          id: "mll4-u1-cross-genre-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts on Migration",
            author: "Written for Akademik Space",
            text: "Poem: 'My grandmother packed her whole life into one suitcase.\nShe said goodbye to the river,\nthe mosque, the smell of rain on dust.'\n\nArticle: 'Over 200,000 people migrated from the region last year, according to UN figures. Main destinations include neighbouring countries and Europe.'",
          },
          stem: "How do these two texts connect? What does each add that the other can't?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross-genre connection", statement: "Poem shows personal experience; article shows scale and facts." }],
            steps: [
              { reasoning: "Criterion A (Analysing): both explore migration — poem through one grandmother's experience, article through statistics.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): poem shows what migration feels like ('goodbye to the river'); article shows how many people and where they went — complementary.", evidence: "packed her whole life into one suitcase", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both explore migration — poem shows personal loss, article shows scale/facts; complementary perspectives.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A song about loneliness and a documentary about elderly isolation both explore the same theme. What makes their connection 'cross-genre'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They were written by the same author" },
              { id: "b", text: "They are both poems" },
              { id: "c", text: "They are the same genre" },
              { id: "d", text: "Different genres exploring the same theme" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cross-genre", statement: "Cross-genre = comparing texts from different genres on related subjects." }],
            steps: [
              { reasoning: "Criterion A (Analysing): different genres, same theme — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): song = performance, documentary = factual film — different genres.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Different genres exploring the same theme",
          },
        },
        {
          id: "mll4-u1-cross-genre-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Views on Technology",
            author: "Written for Akademik Space",
            text: "Speech: 'Technology connects us. It lets us talk to family across oceans, learn anything instantly, and build communities that span the globe.'\n\nEssay: 'A 2024 study found that heavy social media users report 40% higher rates of anxiety. Screen time averages 7 hours daily among teens, up from 3 hours a decade ago.'",
          },
          stem: "Compare how these two texts treat technology. What does each emphasise and what does each leave out?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Genre treatment of theme", statement: "Persuasive speech emphasises benefits; essay emphasises evidence of harm." }],
            steps: [
              { reasoning: "Criterion A (Analysing): the speech is persuasive — lists benefits ('connects us', 'learn anything') with no counter-evidence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the essay is expository — cites a study with specific data ('40% higher', '7 hours') about harms.", evidence: "40% higher rates of anxiety", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): speech leaves out risks; essay leaves out benefits — each is one-sided in opposite directions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speech = benefits (persuasive); essay = harms (data-based). Each omits the other's side.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pairing is a cross-genre comparison?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two chapters of the same textbook" },
              { id: "b", text: "Two sonnets about love" },
              { id: "c", text: "A novel and a news article about the same war" },
              { id: "d", text: "A poem and its translation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cross-genre", statement: "Cross-genre = different genres, related subjects." }],
            steps: [
              { reasoning: "Criterion A (Analysing): novel + article = different genres on related subject — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): other options are same genre or same text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A novel and a news article about the same war",
          },
        },
        {
          id: "mll4-u1-cross-genre-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Texts on the Ocean",
            author: "Written for Akademik Space",
            text: "Scientific report: 'Oceans absorb 90% of excess heat from global warming. Coral bleaching events have increased fivefold since 1980.'\n\nPoem: 'The ocean keeps what we give it —\nevery bottle, every storm, every name.\nIt does not judge the shore.\nIt simply rises.'",
          },
          stem: "Compare how the report and the poem treat the ocean. What does each reveal about humanity's relationship with it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross-genre analysis", statement: "Report = data about impact; poem = emotional/moral relationship." }],
            steps: [
              { reasoning: "Criterion A (Analysing): report gives measurable facts ('90%', 'fivefold since 1980'); poem gives emotional imagery ('keeps what we give it').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): report reveals human impact as a problem to solve; poem reveals a moral relationship — ocean as witness ('does not judge').", evidence: "It does not judge the shore", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both connect through the theme of human effect on oceans but from science vs morality.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): together they give fuller picture — data shows scale, poem shows meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Report = data on human impact; poem = moral/emotional relationship. Complementary — facts + meaning.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about school uniforms.",
          extract: {
            title: "Uniform Debate",
            author: "Written for Akademik Space",
            text: "Editorial: 'Uniforms reduce inequality and improve focus. Schools that adopted them report fewer bullying incidents and better attendance.'\n\nStudent diary: 'I hate my uniform. It's itchy, it's grey, and everyone looks the same. Yesterday I wore my lucky socks anyway. Nobody noticed. But I felt like myself for a day.'",
          },
          parts: [
            { label: "a", prompt: "Identify the theme both texts explore.", marks: 1 },
            { label: "b", prompt: "Explain how each genre treats the theme.", marks: 2 },
            { label: "c", prompt: "What does the diary reveal that the editorial doesn't?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cross-genre analysis", statement: "Editorial = arguments and evidence; diary = personal experience and feeling." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): school uniforms — their value and impact.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): editorial argues with evidence ('reduce inequality', 'fewer bullying'); diary expresses personal feeling ('itchy', 'felt like myself').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): editorial = public argument; diary = private experience — different purposes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): diary reveals the emotional cost — individuality suppressed, small acts of rebellion ('lucky socks').", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): editorial cites statistics; diary shows what the numbers feel like — 'felt like myself'.", evidence: "I felt like myself for a day", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Uniforms. (b) Editorial = evidence-based argument; diary = personal feeling. (c) Diary reveals emotional cost and individuality.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In cross-genre comparison, what does 'treatment' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How a genre handles a subject — fiction uses story, non-fiction uses facts" },
              { id: "b", text: "How long the text is" },
              { id: "c", text: "The author's education" },
              { id: "d", text: "Medical treatment of illness" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Treatment", statement: "How a genre handles a subject." }],
            steps: [
              { reasoning: "Criterion A (Analysing): treatment = how the genre handles the subject — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** How a genre handles a subject",
          },
        },
        {
          id: "mll4-u1-cross-genre-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Texts on Memory",
            author: "Written for Akademik Space",
            text: "Memoir: 'I remember my grandmother's hands — flour-dusted, always moving. She could make bread appear like magic.'\n\nHistory book: 'The town's bakery closed in 1987 after 90 years of operation. It was the last traditional bakery in the region.'",
          },
          stem: "How do these texts connect? What does each preserve that the other doesn't?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The history book is a story" },
              { id: "b", text: "The memoir is inaccurate" },
              { id: "c", text: "Memoir preserves feeling; history preserves facts — complementary" },
              { id: "d", text: "Both give identical information" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross-genre connection", statement: "Memoir preserves personal memory; history preserves facts." }],
            steps: [
              { reasoning: "Criterion A (Analysing): both about bakery/memory — memoir emotional, history factual.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): memoir keeps feeling ('flour-dusted', 'magic'); history keeps record ('1987', '90 years') — complementary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Memoir preserves feeling; history preserves facts — complementary",
          },
        },
        {
          id: "mll4-u1-cross-genre-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a writer pair a poem with a factual report on the same theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To confuse the reader" },
              { id: "b", text: "To give both emotional and factual perspectives on the theme" },
              { id: "c", text: "To fill more pages" },
              { id: "d", text: "Because poems need facts to be valid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Complementary genres", statement: "Pairing genres gives fuller understanding — emotion plus facts." }],
            steps: [
              { reasoning: "Criterion A (Analysing): poem gives emotion, report gives facts — complementary — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): together they answer both 'what happened?' and 'what did it feel like?'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To give both emotional and factual perspectives on the theme",
          },
        },
        {
          id: "mll4-u1-cross-genre-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Texts on Success",
            author: "Written for Akademik Space",
            text: "Self-help book: 'Success is achievable by anyone who works hard and believes in themselves. Your mindset determines your destiny.'\n\nBiography: 'She grew up in poverty, worked two jobs, and failed her entrance exam three times before finally being accepted. Her success came from persistence, not belief alone.'",
          },
          stem: "Compare how these texts define success. Evaluate which account is more convincing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross-genre evaluation", statement: "Self-help generalises; biography evidences — judge by specificity and support." }],
            steps: [
              { reasoning: "Criterion A (Analysing): self-help defines success as mindset ('believe in themselves'); biography shows success through concrete struggle ('two jobs', 'failed three times').", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): self-help claims 'anyone' — universal but unproven; biography offers one verified case with specifics.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): biography more convincing — 'persistence, not belief alone' is supported by evidence; self-help is aspirational but vague.", evidence: "persistence, not belief alone", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): could also argue self-help motivates while biography only shows one case — balanced judgment possible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Self-help = vague universal claim; biography = evidenced account. Biography more convincing; self-help more motivating.",
          },
        },
        {
          id: "mll4-u1-cross-genre-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two texts about a flood.",
          extract: {
            title: "The Flood",
            author: "Written for Akademik Space",
            text: "News report: 'The river burst its banks on Tuesday, flooding 300 homes. Emergency services rescued 50 people. The cleanup is expected to take months.'\n\nPoem: 'The water took the garden first —\nthe tomatoes, the roses, the chair\nwhere grandfather used to sit.\nThen it took the road.\nThen it took the sound of our voices.'",
          },
          parts: [
            { label: "a", prompt: "Identify the shared subject and how each genre treats it.", marks: 2 },
            { label: "b", prompt: "Explain what the poem reveals that the report doesn't.", marks: 2 },
            { label: "c", prompt: "Why is it valuable to read both texts together?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cross-genre connection", statement: "Report = scale and facts; poem = personal loss and emotion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): both about the flood; report = facts ('300 homes', '50 people', 'months'); poem = personal imagery ('tomatoes', 'grandfather').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): report answers 'what happened and how big'; poem answers 'what did it feel like'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): poem reveals personal loss — garden, grandfather's chair — the human cost behind statistics.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'Then it took the sound of our voices' — shows erasure of normal life, not just property.", evidence: "took the sound of our voices", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): together they give complete picture — facts establish scale, poem establishes meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Flood; report = facts, poem = emotion. (b) Poem reveals personal loss and erasure of normal life. (c) Facts + meaning = complete understanding.",
          },
        },
      ],
    },
    {
      id: "mll4-u1-evaluating-comparison",
      title: "Evaluating compared texts",
      skill: "Judge which text is more effective for its purpose and explain why.",
      lesson: {
        sections: [
          {
            heading: "Effective for purpose",
            body: "When comparing texts, ask: **which is more effective at its purpose?** A poem doesn't need to be 'accurate' like a report; a report doesn't need to be 'beautiful' like a poem. Judge each text by **its own goals**.",
          },
          {
            heading: "Criteria for evaluation",
            body: "Evaluate on: **clarity** (is it clear?), **impact** (does it affect you?), **craft** (is the language skilled?), **appropriateness** (does it suit its audience/purpose?), **originality** (does it say something new?).",
          },
          {
            heading: "Justified judgment",
            body: "A good evaluation is **balanced**: acknowledge strengths in both, then explain why one is stronger. 'Both poems use nature imagery, but Poem A's precise verbs create more vivid pictures.' Support every claim with evidence.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation criteria", statement: "Clarity + Impact + Craft + Appropriateness + Originality. Judge by purpose." },
        ],
        workedExample: {
          problem: "Two reviews of the same film — one detailed and balanced, one brief and one-sided. Which is better?",
          solution: "The detailed, balanced review is more effective — it gives the reader enough information to make their own judgment.",
        },
      },
      questions: [
        {
          id: "mll4-u1-evaluating-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When comparing texts, what does 'effective' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The text that best achieves its purpose" },
              { id: "b", text: "The text you like best" },
              { id: "c", text: "The text with the most words" },
              { id: "d", text: "The longest text" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Effectiveness", statement: "A text is effective if it achieves its intended purpose." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): effective = achieves purpose — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The text that best achieves its purpose",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Poem Endings",
            author: "Written for Akademik Space",
            text: "Poem A ends: 'And the rain stopped. The sun came out. We went home.'\n\nPoem B ends: 'The rain stopped — but something in her had already changed. She would never see the garden the same way again.'",
          },
          stem: "Which ending is more effective? Explain your judgment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Evaluative judgment", statement: "An effective ending creates resonance or transformation." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Poem A's ending is flat — it just reports events; Poem B's ending suggests transformation and emotional depth.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B's 'never see the garden the same way' creates resonance — the ending matters beyond the events.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poem B's ending is more effective — it suggests transformation and emotional resonance rather than just reporting events.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a news report and a poem about the same event can't be judged by the same criteria — what makes each 'good' differs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genre-appropriate evaluation", statement: "Different genres have different success criteria." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a news report is judged on accuracy, clarity and completeness — does it inform correctly?", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): a poem is judged on imagery, emotion and craft — does it move the reader?", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): applying report criteria to a poem (accuracy) or poem criteria to a report (beauty) would be unfair — each genre has its own standards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each genre has its own success criteria — reports for accuracy/clarity, poems for imagery/emotion.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two responses to the same film.",
          extract: {
            title: "Two Reviews",
            author: "Written for Akademik Space",
            text: "Review A: 'A masterpiece. The cinematography was breathtaking, the performances were flawless, and the story was deeply moving. I was in tears by the end. Everyone should see this film.'\n\nReview B: 'The film has stunning visuals and strong performances, though the middle act drags. The ending is powerful but predictable. Recommended for fans of slow cinema, but not for those wanting a tight plot.'",
          },
          parts: [
            { label: "a", prompt: "Compare the two reviews' approaches.", marks: 2 },
            { label: "b", prompt: "Which review is more credible? Explain why.", marks: 2 },
            { label: "c", prompt: "What audience does each review best serve?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Review credibility", statement: "Balanced reviews with specific evidence are more credible than gushing praise." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Review A is one-sided praise ('masterpiece', 'flawless', 'everyone should see'); Review B is balanced (strengths + weaknesses).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): A uses superlatives; B uses specific judgments ('middle act drags', 'ending predictable').", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Review B is more credible — it acknowledges flaws, uses specific evidence, and gives a nuanced recommendation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Review A's 'everyone should see' and 'flawless' seem exaggerated — less trustworthy.", evidence: "flawless ... everyone should see", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): A serves fans wanting enthusiasm; B serves readers wanting honest guidance — B is more useful for decision-making.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = one-sided praise; B = balanced with specifics. (b) B more credible — acknowledges flaws. (c) A = enthusiastic fans; B = readers wanting honest guidance.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When judging which of two texts is 'better', what should you consider first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Which is longer" },
              { id: "b", text: "Which you personally prefer" },
              { id: "c", text: "Which has the most quotes" },
              { id: "d", text: "Which better achieves its own purpose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Purpose-based evaluation", statement: "Judge each text by how well it achieves its own purpose." }],
            steps: [
              { reasoning: "Criterion A (Analysing): effectiveness = achieves purpose — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Which better achieves its own purpose",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q6",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Instructions",
            author: "Written for Akademik Space",
            text: "Instruction A: 'To make the cake, preheat the oven to 180 degrees. Mix flour, sugar and eggs in a bowl. Bake for 25 minutes.'\n\nInstruction B: 'Okay so you want cake? Cool. Just chuck everything in a bowl, bung it in the oven for like, a while, and hope for the best.'",
          },
          stem: "Which instruction is more effective? Compare their clarity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Clarity criterion", statement: "Effective instructions are precise and followable." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Instruction A gives precise steps ('180 degrees', '25 minutes', specific ingredients) — clear and followable.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Instruction B is vague ('a while', 'hope for the best', 'chuck', 'bung') — unclear and unreliable.", evidence: "hope for the best", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Instruction A more effective — precise steps vs B's vague, casual instructions.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which TWO are valid criteria for evaluating a text's effectiveness?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price and length" },
              { id: "b", text: "Font and cover" },
              { id: "c", text: "Author's age and birthplace" },
              { id: "d", text: "Clarity and impact" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation criteria", statement: "Clarity, impact, craft, appropriateness, originality." }],
            steps: [
              { reasoning: "Criterion A (Analysing): clarity and impact are valid criteria — (a).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): price, length, font are surface features, not quality criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Clarity and impact",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Descriptions of Rain",
            author: "Written for Akademik Space",
            text: "Description A: 'It rained. The ground got wet. People used umbrellas.'\n\nDescription B: 'Rain stitched silver threads between the rooftops. Gutters sang, windows wept, and the streetlights drowned one by one in the dark.'",
          },
          stem: "Which description is more effective? Evaluate using craft and impact.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Descriptive evaluation", statement: "Effective description uses imagery and varied language to create vivid pictures." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is flat — 'rained', 'got wet', 'used umbrellas' — literal, minimal craft.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B uses extended metaphor ('silver threads', 'stitched') and personification ('gutters sang', 'windows wept').", evidence: "Rain stitched silver threads", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B creates vivid sensory impact; A merely reports — B is more effective as description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description B more effective — rich imagery and personification vs A's flat reporting.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A balanced evaluation should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only praise the text" },
              { id: "b", text: "Compare it to other books" },
              { id: "c", text: "Only criticise the text" },
              { id: "d", text: "Acknowledge strengths and weaknesses with evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Balanced judgment", statement: "Strong evaluations acknowledge both strengths and weaknesses." }],
            steps: [
              { reasoning: "Criterion A (Analysing): balanced = strengths + weaknesses + evidence — (b).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): one-sided praise or criticism is less convincing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Acknowledge strengths and weaknesses with evidence",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Beginnings",
            author: "Written for Akademik Space",
            text: "Story A opens: 'It was a bright cold day in April, and the clocks were striking thirteen.'\n\nStory B opens: 'My name is John Smith. I am twelve years old. I live in London with my mum and dad.'",
          },
          stem: "Evaluate which opening is more effective for engaging a reader. Consider craft and impact.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Opening evaluation", statement: "Effective openings intrigue through imagery, paradox or voice." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses paradox and imagery ('bright cold', 'clocks striking thirteen') — immediately creates intrigue and unease.", evidence: "the clocks were striking thirteen", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is flat exposition — name, age, address — informative but not engaging.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A's opening raises questions ('thirteen?') pulling the reader in; B's offers no mystery.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A is more effective for engagement; B is acceptable for clarity but weaker for impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Story A's opening more effective — paradox and imagery create intrigue vs B's flat exposition.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two job application letters.",
          extract: {
            title: "Two Applications",
            author: "Written for Akademik Space",
            text: "Application A: 'Dear Sir/Madam, I am writing to apply for the position of sales assistant. I have two years of retail experience and excellent communication skills. I look forward to hearing from you.'\n\nApplication B: 'To whom it may concern, I am a dynamic self-starter with a proven track record of exceeding targets. My skills are unparalleled in the industry. Hire me or regret it.'",
          },
          parts: [
            { label: "a", prompt: "Compare the tone and register of each application.", marks: 2 },
            { label: "b", prompt: "Which is more effective for a job application? Explain.", marks: 2 },
            { label: "c", prompt: "What specific weakness does Application B have?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and effectiveness", statement: "Job applications need professional register and credible claims." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A is formal and measured ('Dear Sir/Madam', 'look forward to hearing'); B is arrogant and informal ('unparalleled', 'Hire me or regret it').", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): A suits professional context; B's aggression undermines credibility.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): A more effective — professional, specific ('two years retail experience'), polite.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B makes unsupported boasts ('proven track record', 'unparalleled') with no evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B has no evidence for claims and uses threatening/arrogant language — 'regret it' alienates employer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A formal/polite; B arrogant/unsupported. (b) A more effective. (c) B: no evidence, threatening tone.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'craft' when evaluating writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The skill and quality of the language used" },
              { id: "b", text: "The author's fame" },
              { id: "c", text: "The length of the text" },
              { id: "d", text: "The price of materials" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Craft", statement: "Craft = skill and quality of language and technique." }],
            steps: [
              { reasoning: "Criterion A (Analysing): craft = language skill — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The skill and quality of the language used",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Explanations",
            author: "Written for Akademik Space",
            text: "Explanation A: 'Gravity is the force that attracts objects with mass toward each other.'\n\nExplanation B: 'Gravity is like an invisible magnet that pulls everything down. It's why you don't float away!'",
          },
          stem: "Which explanation is more effective? Consider clarity and appropriateness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Appropriate explanation", statement: "Effective explanation matches accuracy to audience." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A is scientifically accurate but abstract; B uses accessible analogy ('invisible magnet') though less precise.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): for beginners B is more effective (engaging, understandable); for accuracy A is better — depends on audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A more accurate; B more accessible — effectiveness depends on audience.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement is a stronger evaluation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'It was good.'" },
              { id: "b", text: "'It was long.'" },
              { id: "c", text: "'I didn't like it.'" },
              { id: "d", text: "'It was effective because the imagery created vivid pictures and the ending resolved the central conflict.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluation quality", statement: "Strong evaluations use criteria and specific evidence." }],
            steps: [
              { reasoning: "Criterion A (Analysing): (b) gives criteria ('imagery', 'conflict') and evidence — strongest evaluation.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): others are opinions or observations without reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 'It was effective because the imagery created vivid pictures and the ending resolved the central conflict.'",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Advertisements",
            author: "Written for Akademik Space",
            text: "Ad A: 'Buy NOW! Best product ever! Millions love it! Limited time only!'\n\nAd B: 'Our vacuum cleaner removes 99% of pet hair. Independent tests confirm superior performance. 30-day money-back guarantee.'",
          },
          stem: "Evaluate which advertisement is more effective. Consider credibility, evidence and appeal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Advertising evaluation", statement: "Effective ads balance appeal with credible evidence." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Ad A uses hype ('best ever', 'millions love it') with no evidence — emotional but unconvincing.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Ad B uses specific evidence ('99%', 'independent tests') and reduces risk ('money-back guarantee').", evidence: "99% of pet hair", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B is more credible and persuasive for informed consumers; A relies on pressure tactics.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A may work for impulse buying; B works for considered purchase — effectiveness depends on audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ad B more effective — credible evidence and guarantees vs A's unsupported hype.",
          },
        },
        {
          id: "mll4-u1-evaluating-comparison-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read these two responses to the same prompt: 'Describe your ideal holiday.'",
          extract: {
            title: "Two Responses",
            author: "Written for Akademik Space",
            text: "Response A: 'My ideal holiday is going to the beach. I like swimming and building sandcastles. I would eat ice cream and read books.'\n\nResponse B: 'My ideal holiday is a place where time slows down. Somewhere with no signal, where the only schedule is the tide. I'd wake before dawn to watch the light change, spend afternoons lost in a book, and evenings cooking simple meals with people I love.'",
          },
          parts: [
            { label: "a", prompt: "Compare the two responses' approaches to the same task.", marks: 2 },
            { label: "b", prompt: "Which is more effective as a description? Explain using craft and impact.", marks: 2 },
            { label: "c", prompt: "What does Response B do that Response A doesn't?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Descriptive effectiveness", statement: "Vivid detail and imagery outperform lists for descriptive tasks." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): A lists activities ('swimming', 'sandcastles', 'ice cream'); B paints a scene with sensory and emotional detail.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): A is literal and brief; B is reflective and immersive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B more effective — 'time slows down', 'no signal', 'light change' create vivid atmosphere; A merely lists.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): B's imagery ('only schedule is the tide') is skilled; A has no craft beyond vocabulary.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): B creates atmosphere and emotional resonance; A just informs — B lets reader experience the holiday.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = list; B = immersive scene. (b) B more effective — imagery and atmosphere vs listing. (c) B creates experience, not just information.",
          },
        },
      ],
    },
  ],
};
