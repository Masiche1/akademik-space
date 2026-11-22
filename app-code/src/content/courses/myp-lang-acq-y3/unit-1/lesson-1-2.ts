import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mla3-u1-lesson-1-2",
  code: "1-2",
  title: "Reading Articles and Identifying Opinions",
  goal: "I CAN read longer articles on familiar topics and distinguish facts from opinions, identify the writer's attitude and support answers with evidence.",
  standards: [
    "MYP Language Acquisition",
    "Criterion B: Reading",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Attitude", definition: "The writer's or speaker's feeling or position towards a topic." },
    { term: "Evidence", definition: "Facts or examples used to support an opinion." },
    { term: "Bias", definition: "A preference that affects how something is presented." },
    { term: "Persuasive", definition: "Trying to convince the reader of an opinion." },
    { term: "Column", definition: "A regular article in a newspaper giving an opinion." },
  ],
  concepts: [
    {
      id: "mla3-u1-article-analysis",
      title: "Analysing articles: facts, opinions and attitudes",
      skill: "Identify the writer's attitude and separate facts from opinions in an article.",
      lesson: {
        sections: [
          {
            heading: "Beyond facts: the writer's voice",
            body: "Articles are not just facts — they have a **voice**. Words like 'amazing', 'disappointing', 'should', 'must' reveal the writer's **attitude**. 'The new library is amazing' = positive; 'The new rules are unfair' = negative. Ask yourself: is the writer informing, persuading, or criticising?",
          },
          {
            heading: "Persuasive language",
            body: "Persuasive texts use techniques: **opinion adjectives** (brilliant, terrible), **modal verbs** (should, must, ought to), **rhetorical questions** ('Is this fair?'), and **emotional words** (children, future, hope). Recognising these helps you see when an article is trying to change your mind rather than just inform you.",
          },
          {
            heading: "Fact or opinion — the test",
            body: "Ask: 'Can I prove this true or false?' 'The school has 400 students' = fact (countable). 'The school is the best in the city' = opinion (judgement). Watch for facts used to support opinions: 'Crime has risen 20% — clearly we need more police' mixes fact + opinion.",
          },
        ],
        keyFormulas: [
          { name: "Attitude signals", statement: "amazing/best/should/must = positive; terrible/unfair/disappointing = negative" },
          { name: "Fact test", statement: "Can it be proved true/false? Yes = fact; No = opinion" },
        ],
        workedExample: {
          problem: "Article: 'Homework is a waste of time. Students already work hard all day at school.' What is the writer's attitude?",
          solution: "Negative — 'waste of time' criticises homework; the second sentence supports the opinion with a reason.",
        },
      },
      questions: [
        {
          id: "mla3-u1-article-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'attitude' mean when analysing a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The writer's spelling" },
              { id: "b", text: "The writer's feeling or position towards the topic" },
              { id: "c", text: "The headline size" },
              { id: "d", text: "The number of paragraphs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Attitude", statement: "The writer's feeling or stance towards a topic." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — attitude = feeling/position.", working: "feeling or position", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The writer's feeling or position towards the topic",
            commonErrors: ["Confusing attitude with structure."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-article-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Opinion Piece",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Social media does more harm than good for teenagers. Studies show that heavy users often feel anxious and sleep badly. Parents should set clear limits on screen time. The evidence is clear — action is needed now.",
          },
          stem: "Identify the writer's attitude and one piece of evidence they give.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude + evidence", statement: "Attitude = negative here; evidence = the study about anxiety and sleep." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — attitude: negative towards social media ('more harm than good').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — evidence: studies show anxiety and poor sleep in heavy users.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — both attitude and evidence correctly identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Negative attitude; evidence: studies link heavy use to anxiety and bad sleep.",
            commonErrors: ["Identifying opinion without the supporting evidence."],
            examinerNote: "Both parts required.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Views on Homework",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Columnist A: Homework builds discipline and prepares students for exams. It teaches responsibility. We should give more, not less.\n\nColumnist B: Homework causes stress and takes away family time. Many students already spend eight hours at school. The evidence shows little benefit for young children.",
          },
          stem: "Compare the two columnists' views. What does each think should happen, and what reasons do they give?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing viewpoints", statement: "Each columnist has a stance + reason; compare both sides." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — A: more homework; reasons: discipline, responsibility, exam prep.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — B: less homework; reasons: stress, family time, little benefit.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — comparison shows opposing views fairly.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is balanced and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A wants more homework (discipline/exams); B wants less (stress/family time/little benefit).",
            commonErrors: ["Favouring one side without representing both."],
            examinerNote: "Must present BOTH views accurately.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Should Phones Be Allowed in Class?",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Last month, our school banned phones in lessons. Since then, teachers report students are more focused and grades have improved. 'It was the best decision we ever made,' said one teacher. However, some students complain they cannot contact parents in emergencies. The school is now considering a compromise: phones allowed at break time only.",
          },
          stem: "Read the article and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main topic of the article?", marks: 1 },
            { label: "b", prompt: "Give one fact and one opinion from the article.", marks: 2 },
            { label: "c", prompt: "What is the writer's attitude towards the phone ban?", marks: 2 },
            { label: "d", prompt: "Write your own opinion in three sentences: do you agree phones should be banned in class? Give two reasons.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article analysis + opinion writing", statement: "Extract topic, fact/opinion, attitude; produce own reasoned opinion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — phones banned in class / the phone ban debate.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — fact: grades improved / phones banned last month.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — opinion: 'best decision we ever made' or students' complaints.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — mostly positive (reports improvements, 'best decision').", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — attitude explained with evidence.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — clear personal opinion stated.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — two reasons given in correct English.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — three accurate sentences with good punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) phone ban in class (b) fact: grades improved; opinion: 'best decision' (c) positive (d) reasoned personal opinion.",
            commonErrors: ["Confusing the students' complaints with the writer's view."],
            examinerNote: "(c) must be justified, not just labelled.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word most likely shows a NEGATIVE attitude in an article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "wonderful" },
              { id: "b", text: "amazing" },
              { id: "c", text: "disappointing" },
              { id: "d", text: "excellent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Attitude signals", statement: "Negative adjectives like 'disappointing', 'unfair', 'terrible' signal a negative attitude." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'disappointing' is negative; the others are positive.", working: "disappointing", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** disappointing",
            commonErrors: ["Choosing a positive adjective."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-article-analysis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a FACT rather than an opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The school has 400 students." },
              { id: "b", text: "Pizza is the best food." },
              { id: "c", text: "Everyone should exercise more." },
              { id: "d", text: "Homework is a waste of time." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact test", statement: "A fact can be proved true or false; an opinion is a judgement." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — '400 students' can be counted; the rest are judgements.", working: "400 students", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The school has 400 students.",
            commonErrors: ["Choosing a sentence with a strong feeling word."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-article-analysis-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "News Report",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "The city opened a new sports centre last week. The centre has two swimming pools, a climbing wall and a running track. It is open every day from 7 am to 9 pm.",
          },
          stem: "What is the writer's main purpose in this text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To criticise the council" },
              { id: "b", text: "To entertain readers" },
              { id: "c", text: "To inform readers about the new centre" },
              { id: "d", text: "To persuade readers to exercise" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writer's purpose", statement: "Facts + neutral language = inform; strong words + 'should' = persuade." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the text gives facts about opening, facilities and hours.", working: "inform", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To inform readers about the new centre",
            commonErrors: ["Saying it persuades — there is no opinion language."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-article-analysis-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Opinion Column",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "It is unbelievable that our school still has no proper library. Students deserve better. The council must act now!",
          },
          stem: "Which phrase is an example of persuasive language in this column?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "opened last week" },
              { id: "b", text: "two swimming pools" },
              { id: "c", text: "open every day" },
              { id: "d", text: "must act now" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive language", statement: "Modal verbs like 'must' and emotional words push the reader to agree." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'must act now' is a strong modal demand = persuasion.", working: "must act now", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** must act now",
            commonErrors: ["Choosing a factual phrase instead of persuasive one."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-article-analysis-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Mixed Text",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Three schools in our town now have breakfast clubs. Attendance has risen by 20% this year — clearly, hungry students cannot learn well. Every school should offer free breakfast.",
          },
          stem: "Which part of this text is an OPINION supported by a fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The clubs open at 8 am." },
              { id: "b", text: "Attendance has risen by 20%." },
              { id: "c", text: "Three schools have breakfast clubs." },
              { id: "d", text: "Every school should offer free breakfast." },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fact + opinion mix", statement: "'Should' marks opinion; numbers and attendance are facts supporting it." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'should offer' is the opinion; '20%' is the supporting fact.", working: "should offer free breakfast", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Every school should offer free breakfast.",
            commonErrors: ["Choosing a pure fact without the opinion."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla3-u1-article-analysis-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Letter to the Editor",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "I am writing to complain about the new bus timetable. Since it changed, I have missed the bus three times this week. The journey now takes twice as long. Please review the schedule — many students are affected.",
          },
          stem: "How many facts does the writer give to support their complaint?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting evidence", statement: "Each verifiable detail counts as one piece of evidence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — fact 1: missed the bus three times; fact 2: journey takes twice as long.", working: "3 times / twice as long", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'please review' is a request, not a fact.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the request 'Please review' as a fact."],
            examinerNote: "Requests and opinions are not facts.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one sentence giving your opinion about school dinners, using an opinion signal phrase.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Opinion signals", statement: "Start with 'I think', 'In my opinion' or 'I believe'." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — clear opinion about school dinners.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — opinion signal phrase + correct sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'In my opinion, school dinners should have more healthy options.'",
            commonErrors: ["Fact instead of opinion."],
            examinerNote: "Must be an opinion, not a fact.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q12",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Local News",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Our town's new bike-share scheme has been very popular. In its first month, over 2,000 journeys were made. However, some residents complain that the bikes are often broken or left in the wrong places.",
          },
          stem: "Give one positive fact and one negative opinion/detail from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced reading", statement: "Texts often mix positive facts with complaints." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — positive fact: over 2,000 journeys in first month.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — negative detail: bikes broken or left in wrong places.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — both correctly identified and quoted or paraphrased.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Positive: 2,000 journeys; negative: bikes broken/misplaced.",
            commonErrors: ["Missing the contrast — only finding one side."],
            examinerNote: "One of each required.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes: 'Homework is pointless. Also, I think the school day is too long.' Identify the two opinions and rewrite them as one balanced sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion identification + combining", statement: "Find opinion sentences, then join them logically." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — identifies 'homework is pointless' as opinion 1.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — identifies 'school day too long' as opinion 2.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — combines into one correct balanced sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I think homework is pointless and the school day is too long.'",
            commonErrors: ["Treating opinions as facts."],
            examinerNote: "Both opinions must be found.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Letters",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Letter 1: 'Dear Editor, I am writing to praise the new playground. It is safe, colourful and the children love it.'\n\nLetter 2: 'Dear Editor, I am writing to complain about the new playground. The surface is too hard and there are not enough swings.'",
          },
          stem: "Compare the two letters. What does each writer think of the playground, and what reasons do they give?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing viewpoints", statement: "Each writer has a stance + reasons; compare fairly." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Letter 1 positive: safe, colourful, children love it.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Letter 2 negative: too hard, not enough swings.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — comparison shows opposing views fairly.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is balanced and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Letter 1 praises (safe/colourful); Letter 2 complains (hard surface/few swings).",
            commonErrors: ["Favouring one letter without representing both."],
            examinerNote: "Both views with reasons required.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q15",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Exam-style Paragraph",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Many people believe that homework helps students learn. However, some teachers say it causes stress. The truth is that homework can be useful, but only in small amounts. Too much homework is a real problem.",
          },
          stem: "How many times does the word 'homework' appear in this paragraph?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Careful reading", statement: "Repeated key words show the topic; count each occurrence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'homework' appears in sentences 1, 3 and 4 = 3 times.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — sentence 2 uses 'it' instead, so it does not count.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'it' in sentence 2 as homework."],
            examinerNote: "Only the exact word counts.",
          },
        },
        {
          id: "mla3-u1-article-analysis-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "School Magazine Debate",
            author: "Written for Akademik Space",
            source: "Article practice",
            text: "Should we ban junk food from the school canteen?\n\nFor the ban: Junk food is unhealthy and students should eat fruit and vegetables instead. Studies show that children who eat well concentrate better in class.\n\nAgainst the ban: Students should be free to choose. Banning food is unfair, and many families cannot afford healthier options.",
          },
          stem: "Read the debate and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the topic of the debate?", marks: 1 },
            { label: "b", prompt: "Give one reason FOR the ban.", marks: 1 },
            { label: "c", prompt: "Give one reason AGAINST the ban.", marks: 1 },
            { label: "d", prompt: "Identify one fact used as evidence.", marks: 1 },
            { label: "e", prompt: "State your own opinion in two sentences with a reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Debate analysis + opinion", statement: "Extract topic, both sides, evidence and produce own opinion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — junk food ban in school canteen.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — junk food unhealthy / students should eat healthy food.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — freedom to choose / unfair / cost.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — 'studies show children who eat well concentrate better'.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Criterion C: Speaking — clear personal opinion stated.", marks: 1, markCode: "C" },
              { part: "e", reasoning: "Criterion D: Writing — two accurate sentences with reason.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) junk food ban (b) unhealthy (c) freedom/unfair (d) studies on concentration (e) own opinion + reason.",
            commonErrors: ["Confusing the two sides.", "Opinion in (e) without reason."],
            examinerNote: "All five parts required.",
          },
        },
      ],
    },
    {
      id: "mla3-u1-reading-topics",
      title: "Reading on familiar topics: health, environment, technology",
      skill: "Read texts about common MYP topics and extract main ideas, details and vocabulary in context.",
      lesson: {
        sections: [
          {
            heading: "Topic vocabulary you will meet",
            body: "MYP 3 texts often cover: **health** (exercise, healthy food, sleep), **environment** (recycling, pollution, climate), **technology** (phones, internet, games), **friendship** and **school life**. Each topic has its own word set — learn topic words as groups, not single words.",
          },
          {
            heading: "Reading for the big picture",
            body: "For topic texts, first identify: **what** the text is about, **who** it is for, and **what the writer wants** (inform, persuade, entertain). Then read for details. This 'reading the situation first' approach works for any topic and saves time.",
          },
          {
            heading: "Using context for topic words",
            body: "Topic texts repeat key words — they become your best clues. If a text about the environment repeats 'recycle', 'pollution', 'waste', you can guess their meanings from each other. Also, the same word often appears in your own language as a cognate: 'technology', 'environment', 'hospital'.",
          },
        ],
        keyFormulas: [
          { name: "Topic reading", statement: "What/Who/Writer's purpose → then details" },
        ],
        workedExample: {
          problem: "Text about recycling repeats 'recycle', 'bin', 'waste'. What is the topic?",
          solution: "The environment / recycling — the repeated topic words reveal the subject.",
        },
      },
      questions: [
        {
          id: "mla3-u1-reading-topics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a common topic in MYP 3 reading texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The environment" },
              { id: "b", text: "Astrophysics" },
              { id: "c", text: "Medieval history" },
              { id: "d", text: "Corporate law" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "MYP topics", statement: "Health, environment, technology, friendship and school life are core topics." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — environment is a core MYP topic.", working: "environment", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The environment",
            commonErrors: ["Choosing an adult/academic topic not typical at this level."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-reading-topics-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Healthy Habits",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Doctors say that good health starts with simple habits. Eating fruit and vegetables every day gives your body the vitamins it needs. Sleeping eight to nine hours helps your brain work well. And moving your body — walking, cycling or playing sport — keeps your heart strong. Small habits, big results.",
          },
          stem: "List the three healthy habits mentioned in the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail extraction", statement: "Three habits: eating fruit/veg, sleeping 8-9 hours, exercising." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — habit 1: eating fruit and vegetables daily.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — habit 2: sleeping eight to nine hours.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — habit 3: moving/exercising (walking, cycling, sport).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Eat fruit/veg; sleep 8-9 hours; exercise/move daily.",
            commonErrors: ["Listing 'vitamins' or 'heart' as habits — they are benefits, not habits."],
            examinerNote: "Three habits needed.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Our School's New Recycling",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school has started a new recycling programme. Every classroom now has three bins: one for paper, one for plastic and one for food waste. Students take turns emptying the bins each Friday. So far, we have recycled 50 kilograms of paper this term. The head teacher says the programme is working well, but she wants students to remember to use the right bin.",
          },
          stem: "What is the main idea? Find one detail that supports it and one thing the head teacher wants students to do better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea + detail + instruction", statement: "Main idea = new recycling programme; detail = 50kg paper; request = use right bin." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea: school started a recycling programme.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — supporting detail: 50 kg paper recycled this term.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — head teacher wants students to use the right bin.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — all three parts answered clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Recycling programme; 50kg paper detail; use the right bin.",
            commonErrors: ["Saying the programme 'failed' — it is working well."],
            examinerNote: "All three components needed.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Too Much Screen Time?",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Many teenagers spend more than four hours a day looking at screens — phones, tablets and computers. Doctors warn that too much screen time can damage sleep and eyesight. However, technology also connects us to friends and helps us learn. The answer, experts say, is balance: use screens wisely, and spend time outside too.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "How much screen time do many teenagers have?", marks: 1 },
            { label: "b", prompt: "Name two problems doctors warn about.", marks: 2 },
            { label: "c", prompt: "What is one benefit of technology mentioned?", marks: 1 },
            { label: "d", prompt: "What solution do the experts suggest? Write it in your own words.", marks: 2 },
            { label: "e", prompt: "Do you agree? Write one sentence with your opinion and reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced topic reading", statement: "Extract facts, benefits and the writer's balanced conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — more than four hours a day.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — damage to sleep and eyesight.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both problems named.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — connects friends / helps learning.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — balance: use screens wisely + time outside.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — expressed in own words, not copied.", marks: 1, markCode: "C" },
              { part: "e", reasoning: "Criterion C: Speaking — clear personal opinion.", marks: 1, markCode: "C" },
              { part: "e", reasoning: "Criterion D: Writing — reason given + correct sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 4+ hours (b) sleep + eyesight (c) connects/learns (d) balance (e) own opinion + reason.",
            commonErrors: ["Copying the text verbatim in (d).", "Opinion without reason in (e)."],
            examinerNote: "(d) must be paraphrased; (e) needs opinion + reason.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of words belongs to the 'environment' topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "screen, download, password" },
              { id: "b", text: "recycle, pollution, waste" },
              { id: "c", text: "homework, exam, teacher" },
              { id: "d", text: "match, goal, referee" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Topic vocabulary", statement: "Learn topic words as groups — environment words cluster together." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — recycle/pollution/waste are all environment words.", working: "recycle, pollution, waste", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** recycle, pollution, waste",
            commonErrors: ["Mixing topic groups."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla3-u1-reading-topics-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before reading for details, what should you identify first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The punctuation" },
              { id: "b", text: "What the text is about, who it is for, and the writer's purpose" },
              { id: "c", text: "The number of paragraphs" },
              { id: "d", text: "Every single word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Reading the situation first", statement: "Topic + audience + purpose guide detail reading." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the 'big picture' comes first.", working: "what/who/purpose", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** What the text is about, who it is for, and the writer's purpose",
            commonErrors: ["Starting with word-by-word reading."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-reading-topics-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "New Sports Hall",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The town's new sports hall opened on Monday. It has a swimming pool, two tennis courts and a large gym. Schools can book it for PE lessons, and the public can use it every evening.",
          },
          stem: "What is the topic of this text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weather" },
              { id: "b", text: "The environment" },
              { id: "c", text: "A new sports facility" },
              { id: "d", text: "School meals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic identification", statement: "Repeated topic words (sports hall, pool, courts, gym) reveal the subject." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — sports vocabulary clusters around the new facility.", working: "sports hall", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A new sports facility",
            commonErrors: ["Choosing 'school' because PE lessons are mentioned — that is a detail."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-reading-topics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "You are reading a text about technology and meet the word 'download'. Your language has the same word. What is this called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A synonym" },
              { id: "b", text: "An idiom" },
              { id: "c", text: "An antonym" },
              { id: "d", text: "A cognate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cognate", statement: "A word similar in your language and English — 'technology', 'environment', 'download'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — same word in both languages = cognate.", working: "cognate", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A cognate",
            commonErrors: ["Confusing cognates with synonyms."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla3-u1-reading-topics-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Sleep and Health",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Scientists now know that sleep is as important as food and water. During sleep, the brain cleans itself and the body repairs muscles. Children need nine to eleven hours every night, but many get far less because of screens and busy schedules.",
          },
          stem: "What is the main idea of this text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food and water are important." },
              { id: "b", text: "Sleep is essential for health, and many children do not get enough." },
              { id: "c", text: "Children should watch less television." },
              { id: "d", text: "Scientists study the brain." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea", statement: "The main idea covers the whole text, not just one detail." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — combines sleep's importance + children's lack of sleep.", working: "sleep essential + not enough", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sleep is essential for health, and many children do not get enough.",
            commonErrors: ["Choosing a single detail like 'screens'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-reading-topics-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Why We Need Trees",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Every year, millions of trees are cut down for paper and furniture. This is a tragedy. Trees give us oxygen, clean our air and provide homes for animals. We must stop destroying forests before it is too late!",
          },
          stem: "What is the writer's purpose in this text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To persuade readers to protect forests" },
              { id: "b", text: "To describe a holiday in the forest" },
              { id: "c", text: "To inform about how furniture is made" },
              { id: "d", text: "To compare two types of trees" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive purpose", statement: "'Tragedy', 'must', 'before it is too late' signal persuasion." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — emotional words + 'must stop' = trying to convince.", working: "persuade", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To persuade readers to protect forests",
            commonErrors: ["Saying 'inform' — the strong language shows persuasion."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-reading-topics-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Healthy Habits (again)",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Good health needs three simple habits: eat fruit and vegetables, sleep eight to nine hours, and move your body every day. Drink water instead of fizzy drinks. And remember — small habits, big results.",
          },
          stem: "How many main habits does the text list?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail counting", statement: "The text explicitly numbers its habits: three." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'three simple habits' followed by eat/sleep/move = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'drink water' as a fourth main habit."],
            examinerNote: "The text says three.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Our Class Recycling",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school has started a new recycling programme. Every classroom now has three bins: one for paper, one for plastic and one for food waste. Students take turns emptying the bins each Friday. So far, we have recycled 50 kilograms of paper this term. The head teacher says the programme is working well, but she wants students to remember to use the right bin.",
          },
          stem: "How many bins does each classroom have? How many kilograms of paper have been recycled?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extracting numbers", statement: "Numbers in texts give precise details to locate." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'three bins' = 3.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — '50 kilograms of paper' = 50.", working: "50", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 bins; 50 kilograms.",
            commonErrors: ["Reading 'three bins' as three types only — it matches the number."],
            examinerNote: "Exact figures required.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two topic words for the 'technology' topic that you might meet in a reading text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Technology vocabulary", statement: "screen, download, internet, app, device, password." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — first valid technology topic word.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — second valid technology topic word.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'screen', 'internet', 'app', 'download', 'password', 'device'.",
            commonErrors: ["Words from other topics like 'homework'."],
            examinerNote: "Any two valid technology words.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q14",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Walking to School",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "More students are walking or cycling to school these days. It is better for their health and it reduces traffic outside the school gates. Some schools now have 'walking buses' — groups of children walking together with a parent.",
          },
          stem: "What is the main idea? Give one benefit mentioned in the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea + benefit", statement: "Main idea: more students walk/cycle; benefit: health or less traffic." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea: more students walking/cycling to school.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — benefit: better health / less traffic.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — both parts answered clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "More students walk/cycle; benefits: health + less traffic.",
            commonErrors: ["Choosing 'walking buses' as the main idea — it is a detail."],
            examinerNote: "Both parts required.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Views on Homework (reading)",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Text A: Homework builds discipline and prepares students for exams. It teaches responsibility.\n\nText B: Homework causes stress and takes away family time. Many students already spend eight hours at school. The evidence shows little benefit for young children.",
          },
          stem: "Compare what the two texts say about homework. Which topic do they share, and how do their views differ?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cross-text comparison", statement: "Same topic, different attitudes — compare both." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — shared topic: homework.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Text A positive: discipline, responsibility, exam prep.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Text B negative: stress, family time, little benefit.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — comparison explained clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Topic: homework. A: positive (discipline); B: negative (stress/family time).",
            commonErrors: ["Missing that the topic is the same."],
            examinerNote: "Both views needed.",
          },
        },
        {
          id: "mla3-u1-reading-topics-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Should We Ban Phones at School?",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Many schools now ban phones during lessons. Supporters say phones distract students and damage concentration. Opponents argue that phones are useful tools — students can look up facts, take photos of the board and contact parents in emergencies.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the topic of the text?", marks: 1 },
            { label: "b", prompt: "Give one reason supporters give for banning phones.", marks: 1 },
            { label: "c", prompt: "Give two reasons opponents give against the ban.", marks: 2 },
            { label: "d", prompt: "What is your own opinion? Write two sentences with a reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced topic reading", statement: "Extract both sides + produce own reasoned view." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — phone bans at school.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — distract students / damage concentration.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — useful tool: look up facts, photos, contact parents.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — two distinct reasons given.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — clear personal opinion.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — two sentences with reason, correct English.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) phone ban (b) distraction/concentration (c) lookup/photos/parents (d) own opinion + reason.",
            commonErrors: ["Only finding one side of the argument."],
            examinerNote: "(c) needs two reasons; (d) needs opinion + reason.",
          },
        },
      ],
    },
  ],
};
