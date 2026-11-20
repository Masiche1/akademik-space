import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mla2-u1-lesson-1-2",
  code: "1-2",
  title: "Reading Articles and Stories About Everyday Topics",
  goal: "I CAN read short articles and stories about familiar topics and answer questions about main idea, details and opinions.",
  standards: [
    "MYP Language Acquisition",
    "Criterion B: Reading",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Article", definition: "A short non-fiction text in a newspaper or magazine about a real event or topic." },
    { term: "Headline", definition: "The title of an article, written in large letters." },
    { term: "Paragraph", definition: "A block of sentences about one idea within a text." },
    { term: "Fact", definition: "Something that is true and can be checked." },
    { term: "Opinion", definition: "What someone thinks or feels — not necessarily true." },
  ],
  concepts: [
    {
      id: "mla2-u1-articles-facts",
      title: "Articles: facts, details and opinions",
      skill: "Read a short article and distinguish facts from opinions and main idea from details.",
      lesson: {
        sections: [
          {
            heading: "How articles are organised",
            body: "An **article** has a **headline** (tells you the topic), an opening paragraph (the main news) and more paragraphs with details. Journalists put the most important information **first** — this is called the 'inverted pyramid'. For you: read the headline and first paragraph for the gist, then scan the rest for details.",
          },
          {
            heading: "Facts versus opinions",
            body: "A **fact** can be proved: 'The match was on Saturday', 'England won 3-1'. An **opinion** is what someone thinks: 'It was a fantastic match', 'I think the team played badly'. Opinion words to watch for: **think, believe, best, worst, should, amazing, terrible**. Questions often ask which sentence is an opinion.",
          },
          {
            heading: "Answering article questions",
            body: "Article questions usually ask: What is the article about? (main idea), When/Where/Who? (details), and sometimes Do you agree? or Is this fact or opinion? Always support your answer with a word or phrase from the article — evidence earns marks.",
          },
        ],
        keyFormulas: [
          { name: "Article structure", statement: "Headline → opening (main news) → detail paragraphs" },
          { name: "Opinion signals", statement: "think, believe, best, worst, should, amazing, terrible" },
        ],
        workedExample: {
          problem: "Article sentence: 'The concert was the best I have ever heard.' Fact or opinion?",
          solution: "Opinion — 'the best I have ever heard' expresses a personal judgement, not a checkable fact.",
        },
      },
      questions: [
        {
          id: "mla2-u1-articles-facts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an opinion, not a fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The game started at three o'clock." },
              { id: "b", text: "Our team scored two goals." },
              { id: "c", text: "The match was absolutely brilliant." },
              { id: "d", text: "There were 500 fans at the stadium." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opinion", statement: "A personal judgement that cannot be proved true or false." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'absolutely brilliant' is a judgement; the others are checkable facts.", working: "the match was absolutely brilliant", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The match was absolutely brilliant.",
            commonErrors: ["Choosing a fact with a number — numbers do not make opinions."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla2-u1-articles-facts-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "School Wins Robot Competition",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Students from Greenfield School won the city robot competition on Saturday. Their robot, 'Bolt', completed the course in 4 minutes and 20 seconds — the fastest time of the day. The team worked on the robot for three months. 'We are very proud of them,' said head teacher Mrs Lane. The school will receive a trophy and a trip to the national finals.",
          },
          stem: "Read the article. Answer: What did the students win? How long did their robot take? Who said the team was 'very proud'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article comprehension", statement: "Details (who/what/when) are located in specific sentences; names are key evidence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — won the city robot competition.", working: "the city robot competition", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — '4 minutes and 20 seconds'.", working: "4 minutes 20 seconds", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — head teacher Mrs Lane.", working: "Mrs Lane / the head teacher", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The city robot competition; 4 minutes 20 seconds; head teacher Mrs Lane.",
            commonErrors: ["Saying 'three months' — that is how long they worked, not the robot's time."],
            examinerNote: "Each detail worth 1 mark.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "New Park Opens",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "A new community park opened on Sunday in the centre of Milltown. The mayor, Mr Carter, cut the ribbon at ten o'clock. The park has a lake, a playground and a football field. 'This is the best park in our town,' said Mr Carter. Local people enjoyed live music and food from local restaurants.",
          },
          stem: "Identify one fact and one opinion in this article, and explain how you know each is which.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact vs opinion", statement: "Facts are checkable; opinions contain judgement words like 'best'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — fact: 'The park has a lake, a playground and a football field' — checkable.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains fact = can be verified.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — opinion: 'This is the best park in our town' — judgement word 'best'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains opinion = personal judgement, not provable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Fact: the park has a lake/playground/field (checkable). Opinion: 'the best park in our town' (judgement).",
            commonErrors: ["Labeling without explaining why it is fact/opinion."],
            examinerNote: "Both label AND explanation required.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Cycling to School",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "More students are cycling to school this year. At Greenfield School, 120 students now ride bikes, up from 80 last year. The school built new bike racks behind the gym. 'Cycling is fun and good for the environment,' said Year 5 student Amy. However, the roads near the school are busy at drop-off time, and some parents worry about safety. The school council is discussing a 'bike bus' — groups of students cycling together with a teacher.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main idea of the article? One sentence.", marks: 2 },
            { label: "b", prompt: "Give two details: how many students cycle now, and what the school built.", marks: 2 },
            { label: "c", prompt: "Find one problem mentioned and one solution being discussed.", marks: 2 },
            { label: "d", prompt: "Do you think more students should cycle to school? Write two sentences giving your opinion and a reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading for main idea, detail and opinion", statement: "Main idea summarises; details support; opinion needs a reason." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — main idea: more students are cycling to school / a trend with benefits and problems.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — expressed in one complete sentence.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — 120 students; new bike racks behind the gym.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both details correct.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — problem: busy roads/safety worries; solution: 'bike bus' with teacher.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — both problem and solution identified.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — clear opinion with a supporting reason.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — two correct sentences with accurate grammar.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) More students are cycling to school. (b) 120 students; new bike racks (c) busy roads/safety → bike bus (d) reasoned opinion.",
            commonErrors: ["Giving a detail as the main idea.", "Opinion with no reason."],
            examinerNote: "(d) must include both opinion AND reason.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do you usually find the most important information in an article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only at the very end" },
              { id: "b", text: "In the headline and first paragraph" },
              { id: "c", text: "In the pictures only" },
              { id: "d", text: "Nowhere — it is hidden" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverted pyramid", statement: "Journalists put the most important information first in an article." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — headline and opening paragraph give the main news.", working: "headline + first paragraph", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** In the headline and first paragraph",
            commonErrors: ["Thinking important details only appear at the end."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-articles-facts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a fact, not an opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The new film is the worst I have seen." },
              { id: "b", text: "The library opens at nine o'clock." },
              { id: "c", text: "The concert was absolutely amazing." },
              { id: "d", text: "Everyone should watch this film." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact", statement: "A fact can be checked and proved true or false." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — opening time can be checked; 'worst' is a judgement.", working: "opens at nine o'clock", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The library opens at nine o'clock.",
            commonErrors: ["Choosing a sentence with strong feeling words."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-articles-facts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word in a sentence most likely signals an opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "opened" },
              { id: "b", text: "scored" },
              { id: "c", text: "believe" },
              { id: "d", text: "arrived" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opinion signals", statement: "Words like think, believe, best, should signal personal judgement." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'believe' expresses what someone thinks, not a checkable fact.", working: "believe", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** believe",
            commonErrors: ["Choosing a past-tense verb — tense does not make an opinion."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla2-u1-articles-facts-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "New Skate Park",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "A new skate park opened on Saturday in Riverside Park. The mayor, Ms Ford, cut the ribbon at eleven o'clock. The park has ramps, rails and a bowl. 'It is fantastic for young people,' said Ms Ford. Work on the park took eight months.",
          },
          stem: "Read the article and answer three questions: (1) When did the skate park open? (2) Who cut the ribbon? (3) How long did the work take?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article comprehension", statement: "Details such as dates, names and durations are located in specific sentences." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'opened on Saturday'.", working: "Saturday", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'The mayor, Ms Ford'.", working: "Ms Ford / the mayor", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'took eight months'.", working: "eight months", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Saturday; Ms Ford (the mayor); eight months.",
            commonErrors: ["Saying 'eleven o'clock' was the opening date — that is the ribbon-cutting time."],
            examinerNote: "Each detail worth 1 mark.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "School Play Success",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "The Year 5 play was a great success on Friday evening. About 150 tickets were sold, and the hall was almost full. The play ran twice — once at five o'clock and once at seven thirty.",
          },
          stem: "Read the article and give two numbers: (a) how many tickets were sold (b) how many times the play ran.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 150 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in articles", statement: "Figures in an article are key details to locate and report accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'About 150 tickets were sold'.", working: "150", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'ran twice'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 150 (b) 2",
            commonErrors: ["Answering 5 and 7 for the times — the question asks for counts, not times."],
            examinerNote: "Accept 150 and 2.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Street Market Returns",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "The weekly street market returned to Milltown on Sunday after a two-year break. Around forty stalls sold food, plants and second-hand books. 'The market is the heart of our town,' said trader Mrs Ali. The council hopes to make it monthly.",
          },
          stem: "Find one fact and one opinion in this article and explain how you know each is which.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact vs opinion", statement: "Facts are checkable; opinions contain judgement or personal views." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — fact: 'returned to Milltown on Sunday' / 'forty stalls' — checkable.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains fact = verifiable detail.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — opinion: 'the heart of our town' — personal judgement by a trader.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains opinion = a view someone holds, not provable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Fact: market returned Sunday / forty stalls (checkable). Opinion: 'the heart of our town' (judgement).",
            commonErrors: ["Labeling without explanation.", "Choosing 'the council hopes' as an opinion — it is a reported plan."],
            examinerNote: "Both label AND explanation required.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q11",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Book Week at Greenfield",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Greenfield School celebrated Book Week last week. Every class chose a favourite story and made a book character costume. On Thursday, parents came to watch the classes perform their stories. The library also ran a reading challenge — the winner read 2,000 pages. Head teacher Mr Bell said the week 'was the best event of the year'.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "When did Book Week happen?", marks: 1 },
            { label: "b", prompt: "What did every class do?", marks: 1 },
            { label: "c", prompt: "How many pages did the reading-challenge winner read?", marks: 1 },
            { label: "d", prompt: "Find one fact and one opinion in the article and explain the difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article comprehension + evaluation", statement: "Locate details, then distinguish checkable facts from judgements." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'last week'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'chose a favourite story and made a book character costume'.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'read 2,000 pages'.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — identifies a correct fact (e.g. parents came Thursday).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — identifies a correct opinion ('best event of the year').", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — explains the fact/opinion distinction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) last week (b) chose a favourite story and made a costume (c) 2,000 pages (d) correct fact + opinion with explanation.",
            commonErrors: ["Saying Book Week is 'the best event' as a fact.", "Missing the costume detail."],
            examinerNote: "(d) needs both a fact and an opinion with reasons.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main job of an article's headline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To give the price of the article" },
              { id: "b", text: "To tell you the topic of the article" },
              { id: "c", text: "To list every detail" },
              { id: "d", text: "To be a question only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Headline", statement: "The headline tells the topic of an article in a few words." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the headline names the topic before you read.", working: "the topic", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To tell you the topic of the article",
            commonErrors: ["Thinking a headline must be a question."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-articles-facts-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Summer Fair",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "The school summer fair takes place on three days this year: Wednesday, Thursday and Friday of the last week in June. Stalls will sell cakes, plants and handmade toys. The fair opens at four o'clock and closes at seven thirty.",
          },
          stem: "Read the article and give two numbers: (a) how many days the fair runs (b) the hour it closes.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 19 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in articles", statement: "Dates, durations and times are key details to locate in articles." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'three days'.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'closes at seven thirty' → hour 19 (7 p.m.).", working: "19", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 19",
            commonErrors: ["Answering 7 for (b) — 7.30 p.m. is hour 19 in 24-hour time.", "Counting the three days wrong."],
            examinerNote: "Accept 3 and 19 (or 7 with explanation).",
          },
        },
        {
          id: "mla2-u1-articles-facts-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An article says: 'The concert was on Saturday. It started at eight and ended at ten.' Which sentence is a detail, not the main idea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There was a concert" },
              { id: "b", text: "It started at eight" },
              { id: "c", text: "The event was on Saturday" },
              { id: "d", text: "It was an evening event" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea vs detail", statement: "Details are specific facts that support the main idea." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the start time is a specific detail supporting the event.", working: "started at eight", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It started at eight",
            commonErrors: ["Choosing 'on Saturday' — that is closer to the main news."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-articles-facts-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Winners",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "The spelling bee had two winners this year: Anna from Year 4 and Ben from Year 6. Both spelled every word correctly in the final round.",
          },
          stem: "How many winners were there in the spelling bee? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in articles", statement: "Counts and quantities are key details in articles." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'had two winners'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 4 and 6 — those are the school years of the winners."],
            examinerNote: "Accept 2 only.",
          },
        },
        {
          id: "mla2-u1-articles-facts-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Tree Planting Day",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Students planted fifty trees in the school field on Monday. The trees will make the field greener and give birds a home. 'This is the best day of the year,' said Year 6 student Zoe. The council will look after the trees for five years.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What did the students plant, and how many?", marks: 1 },
            { label: "b", prompt: "Give two benefits of the trees mentioned in the article.", marks: 2 },
            { label: "c", prompt: "Find one fact and one opinion, and explain the difference.", marks: 2 },
            { label: "d", prompt: "Write a headline (up to 8 words) for this article.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article comprehension and headline writing", statement: "Summarise main news accurately; headlines are short and capture the topic." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'planted fifty trees'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'greener' / 'gives birds a home' — both benefits.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — two distinct benefits given.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — identifies fact (e.g. fifty trees, Monday) and opinion ('best day of the year').", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — explains fact vs opinion correctly.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — headline captures the main news (tree planting).", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — headline is 8 words or fewer.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — headline uses capital letters and no full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) fifty trees (b) greener field, home for birds (c) fact + opinion explained (d) accurate short headline.",
            commonErrors: ["Headline that is a full sentence with a full stop.", "Benefits invented rather than from the text."],
            examinerNote: "Headline conventions: short, no full stop, captures topic.",
          },
        },
      ],
    },
    {
      id: "mla2-u1-stories-extended",
      title: "Reading longer stories and identifying feelings",
      skill: "Follow a longer story, track characters and events, and understand how characters feel.",
      lesson: {
        sections: [
          {
            heading: "Stories have a shape",
            body: "A story usually has a **beginning** (who, where), a **middle** (the problem or adventure) and an **end** (what happens and how it finishes). At MYP 2, stories are longer and use past tense: 'Yesterday, Mia went to the beach. She built a big sandcastle...' Track the main character — what do they want? What goes wrong?",
          },
          {
            heading: "Understanding feelings",
            body: "Stories show feelings through words and actions. 'Mia was excited' is direct; 'Mia jumped up and down' shows excitement without saying it. Learn feeling words: **happy, sad, excited, scared, angry, surprised, worried, proud**. Questions often ask 'How did the character feel?' — look for both direct words and actions.",
          },
          {
            heading: "Summarising a story",
            body: "To summarise: say **who** the story is about, **what** happens (main events only), and **how** it ends. Use sequence words: 'First... then... at the end...'. Skip small details — a summary is short but complete.",
          },
        ],
        keyFormulas: [
          { name: "Story shape", statement: "Beginning (who/where) → problem/adventure → ending" },
          { name: "Feeling clues", statement: "Direct words (excited) + actions (jumped up and down)" },
        ],
        workedExample: {
          problem: "Story: 'Tom was late for school. He ran all the way but still missed the bus. He felt very sad.' How did Tom feel and how do you know?",
          solution: "Sad — stated directly ('felt very sad') and shown by missing the bus.",
        },
      },
      questions: [
        {
          id: "mla2-u1-stories-extended-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three main parts of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Title, pictures, words" },
              { id: "b", text: "Beginning, middle, end" },
              { id: "c", text: "Characters, setting, author" },
              { id: "d", text: "Problem, solution, moral" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Stories have a beginning, middle and end." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the three parts are beginning/middle/end.", working: "beginning, middle, end", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Beginning, middle, end",
            commonErrors: ["Choosing 'problem, solution, moral' — that is a different structure."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-stories-extended-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Football Match",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Last Saturday, Leo's team played in the school final. Leo scored the first goal and the crowd cheered loudly. In the second half, the other team scored twice. Leo felt worried. In the last minute, his friend Sam scored the winning goal. Leo jumped and shouted with joy.",
          },
          stem: "How did Leo feel at two different points in the story? Give the feeling words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feeling identification", statement: "Feelings are stated directly ('worried') or shown through actions ('jumped and shouted')." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'worried' after the other team scored twice.", working: "worried", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'jumped and shouted with joy' = happy/excited at the end.", working: "happy / excited / joyful", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — both feelings linked to the correct moments.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Worried (when losing 0-2); happy/excited (after the winning goal).",
            commonErrors: ["Missing that 'with joy' means happiness.", "Saying he was 'angry' — the text shows worry then joy."],
            examinerNote: "Feelings must match the story moments.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Rainy Day",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "It rained all day on Tuesday. Sam had planned a picnic in the park with his friends, but the rain ruined everything. He was disappointed. Then he had an idea. The friends went to Sam's house instead. They played board games and ate pizza. 'This is even better than a picnic!' Sam said.",
          },
          stem: "Explain how Sam's feelings change during the story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Emotional arc", statement: "Feelings change as events change: disappointed → happy with the new plan." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — starts disappointed: rain ruined the picnic.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — then he has an idea and the day becomes fun.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — ends happy: 'even better than a picnic'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is clear and organised.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Disappointed at first (rain ruined picnic), then happy when the indoor plan works out even better.",
            commonErrors: ["Saying he stayed sad — the ending changes his feelings."],
            examinerNote: "Must show the change, not just one feeling.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Birthday Surprise",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Nina's birthday was on Friday. She did not know that her friends were planning a surprise party. On Thursday, she heard them whispering in the classroom. She pretended not to hear. On Friday, her friends jumped out and shouted 'Surprise!' Nina laughed and cried at the same time. It was the best birthday she had ever had.",
          },
          stem: "Read the story and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main event of the story?", marks: 1 },
            { label: "b", prompt: "How did Nina feel when she heard the whispering? How do you know?", marks: 2 },
            { label: "c", prompt: "Why did Nina 'pretend not to hear'?", marks: 2 },
            { label: "d", prompt: "Write a short summary of the story in 3 sentences using 'First', 'Then', 'At the end'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension and summary", statement: "Summaries keep main events in order with sequence markers." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — friends organise a surprise birthday party.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — she probably felt curious/suspicious but wanted to keep the secret.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'pretended not to hear' shows she understood but stayed quiet.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — to keep the surprise a secret for the party.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — linked to the friends' surprise plan.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — three sentences cover main events in order.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — sequence markers First/Then/At the end used.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — accurate past tense and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) surprise birthday party (b) curious but kept secret (c) to keep the surprise secret (d) ordered 3-sentence summary.",
            commonErrors: ["Summary includes too many small details.", "Missing the 'pretend' motive."],
            examinerNote: "(b) accepts curious/suspicious/happy — must cite 'pretended not to hear'.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What usually happens in the MIDDLE of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the ending" },
              { id: "b", text: "The problem or adventure" },
              { id: "c", text: "The author's name" },
              { id: "d", text: "A list of facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "The middle of a story contains the problem or main events." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the middle develops the problem/adventure.", working: "problem or adventure", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The problem or adventure",
            commonErrors: ["Thinking the middle only repeats the beginning."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-stories-extended-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'Sara was delighted when she saw the present.' Which word tells you directly how Sara felt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "delighted" },
              { id: "b", text: "present" },
              { id: "c", text: "saw" },
              { id: "d", text: "when" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feeling words", statement: "Feeling words name emotions directly: delighted, scared, proud." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'delighted' is the direct feeling word.", working: "delighted", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** delighted",
            commonErrors: ["Choosing 'saw' — that is an action, not a feeling."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla2-u1-stories-extended-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story says: 'Max clenched his fists and shouted at the referee.' How does Max probably feel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Happy" },
              { id: "b", text: "Angry" },
              { id: "c", text: "Bored" },
              { id: "d", text: "Sleepy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feelings through action", statement: "Actions like clenched fists and shouting show anger without naming it." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — clenched fists + shouting = anger.", working: "angry", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Angry",
            commonErrors: ["Guessing 'happy' — the actions are aggressive."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-stories-extended-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Lost Dog",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "On Sunday morning, Jack's dog Buddy ran out of the garden gate and did not come back. Jack searched the streets for two hours. His hands were shaking and he felt very worried. Just then, a neighbour called: 'Buddy is in my garden!' Jack ran to collect him and felt so relieved.",
          },
          stem: "Read the story and answer three questions: (1) What happened to Buddy? (2) How did Jack feel while searching? (3) How did Jack feel at the end?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension", statement: "Events and feelings are tracked through the story's sequence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Buddy ran out of the garden gate and did not return.", working: "ran away / got lost", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'felt very worried' / shaking hands.", working: "worried", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'so relieved' at the end.", working: "relieved", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Buddy ran away; worried; relieved.",
            commonErrors: ["Missing the feeling change at the end."],
            examinerNote: "Each answer worth 1 mark.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Sleepover",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Five friends had a sleepover on Friday night. They watched two films and ate pizza. At midnight, they heard a strange noise downstairs — but it was only the cat!",
          },
          stem: "Read the story and give two numbers: (a) how many friends were at the sleepover (b) how many films they watched.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in stories", statement: "Quantities in a story are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Five friends'.", working: "5", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'watched two films'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 5 (b) 2",
            commonErrors: ["Confusing 'midnight' (a time) with the counts asked."],
            examinerNote: "Accept 5 and 2.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Broken Kite",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Omar flew his new kite at the beach. A strong wind caught it and the string snapped — the kite flew away into the sea. Omar felt angry and disappointed. His sister suggested they build a new kite together. They spent the afternoon making one from sticks and paper. When they flew it, Omar smiled — the new kite flew even higher than the old one.",
          },
          stem: "Explain how Omar's feelings change during the story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Emotional arc", statement: "Feelings change as events change; track the shift from upset to happy." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — starts angry and disappointed when the kite is lost.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — sister's suggestion leads to building a new kite.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — ends happy: 'smiled', new kite flies higher.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is clear and organised.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Angry/disappointed at first, then happy when the new kite flies even higher.",
            commonErrors: ["Saying he stayed angry — the ending changes his feelings."],
            examinerNote: "Must show the change, not just one feeling.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q11",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "First Day at School",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Amina was five years old on her first day at school. She clutched her mother's hand tightly and felt nervous. Her teacher, Mrs Cole, smiled and showed her the reading corner. By lunchtime, Amina had made two new friends and felt much happier. She could not wait for the next day.",
          },
          stem: "Read the story and complete the tasks.",
          parts: [
            { label: "a", prompt: "How old was Amina on her first day?", marks: 1 },
            { label: "b", prompt: "How did Amina feel at the beginning, and how do you know?", marks: 2 },
            { label: "c", prompt: "What helped Amina feel better?", marks: 2 },
            { label: "d", prompt: "How does the story end?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension", statement: "Track details, feelings shown through actions, and the ending." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'five years old'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — nervous; 'clutched her mother's hand tightly'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — feeling shown through action, not just named.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — teacher smiled, showed reading corner, made two friends.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'felt much happier' by lunchtime.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — she could not wait for the next day.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) five (b) nervous — clutching mother's hand (c) friendly teacher and new friends (d) happy, looking forward to next day.",
            commonErrors: ["Saying she was 'scared of school' — the text shows nervousness, not fear."],
            examinerNote: "(b) needs both feeling and evidence.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'summary' of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A retelling of every small detail" },
              { id: "b", text: "A short version keeping only the main events, in order" },
              { id: "c", text: "The story copied word for word" },
              { id: "d", text: "A list of new words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "A summary keeps who, main events and ending — but skips small details." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — a summary is short but complete.", working: "main events in order", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A short version keeping only the main events, in order",
            commonErrors: ["Thinking a summary must include every detail."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-stories-extended-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The School Fete",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Three parents helped at the school fete on Saturday. They ran the cake stall, the lucky dip and the toy stall. By the end of the day they had raised £300 for new library books.",
          },
          stem: "Read the story and give two numbers: (a) how many parents helped (b) how much money was raised in pounds.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 300 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in stories", statement: "Quantities in a story are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Three parents'.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'raised £300'.", working: "300", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 300",
            commonErrors: ["Confusing the three stalls with the number of parents."],
            examinerNote: "Accept 3 and 300.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most stories at this level are written in which tense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Present simple" },
              { id: "b", text: "Past simple" },
              { id: "c", text: "Future with 'will'" },
              { id: "d", text: "No tense at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story tense", statement: "Stories about finished events usually use the past simple." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — narrated events use past forms: 'went', 'played', 'was'.", working: "past simple", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Past simple",
            commonErrors: ["Choosing present — stories narrate what already happened."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-stories-extended-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Camping Trip",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Mia and her two brothers went camping in July. They slept in a tent and cooked marshmallows over a fire. On the last night, they saw a shooting star.",
          },
          stem: "How many children went camping? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in stories", statement: "Quantities in a story are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Mia + two brothers = three children.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting Mia herself."],
            examinerNote: "Accept 3 only.",
          },
        },
        {
          id: "mla2-u1-stories-extended-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a very short story (4-5 sentences) about a small problem and how it is solved.",
          parts: [
            { label: "a", prompt: "Write the beginning: who and where.", marks: 2 },
            { label: "b", prompt: "Write the middle: the problem, and the end: how it is solved.", marks: 3 },
            { label: "c", prompt: "Check: past tense throughout, one feeling word or action showing emotion, capitals and full stops.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story writing", statement: "Beginning + problem + solution in past simple, with a feeling clue." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — clear who/where opening.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct past simple forms.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — a real problem is introduced.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — a believable solution follows.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — sequence of events is logical.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — consistent past tense.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — a feeling is shown or named.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — capitals and full stops correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "4-5 sentence story: who/where → problem → solution, in past simple with a feeling clue.",
            commonErrors: ["No clear problem or solution.", "Mixing present and past tense."],
            examinerNote: "Story shape must be complete: beginning, problem, ending.",
          },
        },
      ],
    },
  ],
};
