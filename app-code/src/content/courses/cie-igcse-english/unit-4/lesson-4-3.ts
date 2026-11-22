import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ciege-u4-lesson-4-3",
  code: "4-3",
  title: "Directed Writing and Review Writing",
  goal: "I CAN write to a given purpose and audience effectively.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: directed writing"],
  vocabulary: [
    { term: "Directed writing", definition: "Writing to a specific purpose and audience." },
    { term: "Audience", definition: "Who will read the writing." },
    { term: "Purpose", definition: "Why the writing exists — to inform, persuade, entertain." },
    { term: "Register", definition: "Level of formality appropriate to audience." },
    { term: "Review", definition: "A piece of writing evaluating a product, event or experience." },
  ],
  concepts: [
    {
      id: "ciege-u4-s3-directed",
      title: "Writing to purpose and audience",
      skill: "Adapt tone and style to the task at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Purpose and audience",
            body: "Before writing, identify: Who is the audience? What is the purpose? A letter to a friend is informal; a letter to a headteacher is formal. Match your language to both.",
          },
          {
            heading: "Adapting register",
            body: "Formal: full sentences, no slang, polite phrasing. Informal: contractions, direct address, personal voice. Always check the task for required format — letter, article, speech, review.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of a formal letter to the headteacher about a school issue.",
          solution: "'Dear Headteacher, I am writing to express my concern about... I would be grateful if you could... Yours faithfully, [Name]'",
        },
      },
      questions: [
        {
          id: "ciege-u4-s3-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you consider first in directed writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The title" },
            { id: "b", text: "The spelling" },
            { id: "c", text: "The length" },
            { id: "d", text: "The audience and purpose" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Directed writing", statement: "Purpose + audience." }],
            steps: [
              { reasoning: "Audience and purpose determine tone and style.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Audience and purpose",
          },
        },
        {
          id: "ciege-u4-s3-di-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the opening line of a formal letter to a school headteacher.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal register", statement: "Polite, respectful opening." }],
            steps: [
              { reasoning: "The opening is formal and respectful.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be 'Dear Headteacher' or similar.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Dear Headteacher,",
          },
        },
        {
          id: "ciege-u4-s3-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence asking a headteacher for a meeting about school lunches, using formal language.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal request", statement: "Polite, clear request." }],
            steps: [
              { reasoning: "The sentence is polite and formal.", marks: 1, markCode: "AO2" },
              { reasoning: "It clearly states the request.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One formal request",
          },
        },
        {
          id: "ciege-u4-s3-di-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the opening paragraph of a review of a film you have seen (real or imagined).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review writing", statement: "Engaging opening + early opinion." }],
            steps: [
              { reasoning: "The opening hooks the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives an early opinion or recommendation.", marks: 1, markCode: "AO2" },
              { reasoning: "It could mention genre or key element.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Review opening paragraph",
          },
        },
        {
          id: "ciege-u4-s3-di-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines the register (level of formality) of a directed writing task?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The title only" },
            { id: "b", text: "The time allowed" },
            { id: "c", text: "The length of the task" },
            { id: "d", text: "The audience and purpose" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Register", statement: "Matched to audience." }],
            steps: [
              { reasoning: "Audience and purpose decide how formal the writing should be.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** The audience and purpose",
          },
        },
        {
          id: "ciege-u4-s3-di-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the opening line of an informal email to a friend about your weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal opening", statement: "Friendly, direct." }],
            steps: [
              { reasoning: "The line is friendly and informal.", marks: 1, markCode: "AO2" },
              { reasoning: "It introduces the topic of the weekend.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One informal opening",
          },
        },
        {
          id: "ciege-u4-s3-di-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the closing line of a formal letter to your local council about litter in your street.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal closing", statement: "Polite sign-off." }],
            steps: [
              { reasoning: "The closing is polite and formal.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be 'I look forward to your reply' or similar.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One formal closing line",
          },
        },
        {
          id: "ciege-u4-s3-di-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which directed task requires the most formal register?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A postcard to family" },
            { id: "b", text: "A message to a classmate" },
            { id: "c", text: "A letter to the headteacher" },
            { id: "d", text: "A text to a friend" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Register", statement: "Formal for authority figures." }],
            steps: [
              { reasoning: "A letter to the headteacher requires formal register.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** A letter to the headteacher",
          },
        },
        {
          id: "ciege-u4-s3-di-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening sentence of an article for the school newsletter about a new library.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Article opening", statement: "Engaging + informative." }],
            steps: [
              { reasoning: "The sentence is engaging for students.", marks: 1, markCode: "AO2" },
              { reasoning: "It states the key news about the library.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One article opening",
          },
        },
        {
          id: "ciege-u4-s3-di-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this informal request in formal language for a letter to a teacher: 'Hey, can you send me the homework?'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Register shift", statement: "Formal rephrasing." }],
            steps: [
              { reasoning: "The greeting and slang are removed.", marks: 1, markCode: "AO2" },
              { reasoning: "The request is rephrased politely, e.g. 'I would be grateful if you could send me the homework.'", marks: 1, markCode: "AO2" },
              { reasoning: "The register is consistently formal.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal version of the request",
          },
        },
        {
          id: "ciege-u4-s3-di-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the opening paragraph of a speech to a school assembly about a charity event.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speech opening", statement: "Address + engage." }],
            steps: [
              { reasoning: "The paragraph addresses the audience.", marks: 1, markCode: "AO2" },
              { reasoning: "It introduces the charity event.", marks: 1, markCode: "AO2" },
              { reasoning: "It engages listeners with a reason to care.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Speech opening paragraph",
          },
        },
        {
          id: "ciege-u4-s3-di-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan a directed writing task: 'Write a letter to your local MP about litter in your neighbourhood.' Identify the audience, purpose, format, and three points to include.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Task planning", statement: "Audience + purpose + points." }],
            steps: [
              { reasoning: "The audience (MP) and purpose (raise concern/request action) are identified.", marks: 1, markCode: "AO2" },
              { reasoning: "The format (formal letter) is stated.", marks: 1, markCode: "AO2" },
              { reasoning: "Three relevant points are listed.", marks: 1, markCode: "AO2" },
              { reasoning: "The register would be formal.", marks: 1, markCode: "AO2" },
              { reasoning: "Points are clear and well punctuated.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Task plan with 3 points",
          },
        },
        {
          id: "ciege-u4-s3-di-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence is appropriate in a formal letter to the headteacher?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hi, just wanna talk about lunch." },
            { id: "b", text: "Yo head, lunch is bad." },
            { id: "c", text: "I am writing to raise a concern about the school lunch provision." },
            { id: "d", text: "Gimme a better menu lol." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal register", statement: "Polite, respectful." }],
            steps: [
              { reasoning: "Only option b is formal, polite and clear.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** I am writing to raise a concern about the school lunch provision.",
          },
        },
        {
          id: "ciege-u4-s3-di-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write the opening paragraph of a review of a school play you have seen.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review opening", statement: "Verdict + hook." }],
            steps: [
              { reasoning: "The opening hooks the reader.", marks: 1, markCode: "AO2" },
              { reasoning: "It names the play and gives an early verdict.", marks: 1, markCode: "AO2" },
              { reasoning: "It could mention a key element (acting, set, music).", marks: 1, markCode: "AO2" },
              { reasoning: "The tone is engaging but evaluative.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Review opening paragraph",
          },
        },
        {
          id: "ciege-u4-s3-di-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a formal paragraph (4-5 sentences) to a council requesting more litter bins near your school.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal request", statement: "Purpose + polite ask." }],
            steps: [
              { reasoning: "The paragraph states why the writer is writing.", marks: 1, markCode: "AO2" },
              { reasoning: "It explains the problem clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "It makes a specific, polite request.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register is maintained throughout.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal request paragraph",
          },
        },
        {
          id: "ciege-u4-s3-di-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the opening of a short speech to a school assembly arguing that 'students should join the debating club', using direct address and a rhetorical question.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speech opening", statement: "Audience + technique + purpose." }],
            steps: [
              { reasoning: "The speech addresses the audience directly.", marks: 1, markCode: "AO2" },
              { reasoning: "It includes a rhetorical question or engaging device.", marks: 1, markCode: "AO2" },
              { reasoning: "It introduces the topic (debating club).", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason to listen.", marks: 1, markCode: "AO2" },
              { reasoning: "The tone suits a school assembly.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
                        ],
            finalAnswer: "Speech opening",
          },
        },
      ],
    },
    {
      id: "ciege-u4-s3-review",
      title: "Writing reviews",
      skill: "Write balanced reviews with opinion and evidence.",
      lesson: {
        sections: [
          {
            heading: "What makes a review",
            body: "A review evaluates something — film, book, restaurant, product. It gives an opinion supported by specific examples, and ends with a recommendation.",
          },
          {
            heading: "Structure",
            body: "Opening: what it is + your verdict. Body: specific strengths and weaknesses with examples. Conclusion: who it suits and final recommendation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a review sentence for a book.",
          solution: "'The Great Gatsby is a masterpiece of American literature — Fitzgerald's prose is luminous and his portrayal of the Jazz Age is unforgettable.'",
        },
      },
      questions: [
        {
          id: "ciege-u4-s3-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a review include?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A summary only" },
            { id: "b", text: "Only facts" },
            { id: "c", text: "A list of prices" },
            { id: "d", text: "Opinion with supporting examples" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Review", statement: "Opinion + evidence." }],
            steps: [
              { reasoning: "Reviews give opinion supported by examples.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Opinion with examples",
          },
        },
        {
          id: "ciege-u4-s3-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence giving your opinion of a book you have read.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review opinion", statement: "Clear judgement." }],
            steps: [
              { reasoning: "The sentence gives a clear opinion.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be supported by a reason.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One opinion sentence",
          },
        },
        {
          id: "ciege-u4-s3-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence identifying a weakness in a film.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Critical review", statement: "Balanced criticism." }],
            steps: [
              { reasoning: "The sentence identifies a specific weakness.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason or example.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One criticism sentence",
          },
        },
        {
          id: "ciege-u4-s3-re-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a recommendation sentence for a restaurant review.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Recommendation", statement: "Who it suits + verdict." }],
            steps: [
              { reasoning: "The sentence recommends or advises.", marks: 1, markCode: "AO2" },
              { reasoning: "It says who would enjoy it.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a final verdict.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One recommendation sentence",
          },
        },
        {
          id: "ciege-u4-s3-re-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these would be most useful to include in a film review?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The director's home address" },
            { id: "b", text: "The cinema's ticket prices" },
            { id: "c", text: "A list of every other film" },
            { id: "d", text: "A specific example of strong acting or a weakness" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Review", statement: "Opinion + evidence." }],
            steps: [
              { reasoning: "A specific example supports the reviewer's opinion.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A specific example supporting the opinion",
          },
        },
        {
          id: "ciege-u4-s3-re-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which opening line works best for a review of a new café?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cafés are places where people drink coffee." },
            { id: "b", text: "The café opened in 2019." },
            { id: "c", text: "This little café on Mill Lane is the best place in town for a proper breakfast." },
            { id: "d", text: "My name is Alex and I like cafés." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review opening", statement: "Engaging + early verdict." }],
            steps: [
              { reasoning: "Option b names the subject and gives an early, engaging verdict.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "This little café on Mill Lane is the best place in town for a proper breakfast.",
          },
        },
        {
          id: "ciege-u4-s3-re-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one sentence that gives a balanced view of a film — one strength and one weakness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced review", statement: "Strength + weakness." }],
            steps: [
              { reasoning: "The sentence identifies a clear strength.", marks: 1, markCode: "AO2" },
              { reasoning: "It also identifies a clear weakness.", marks: 1, markCode: "AO2" },
              { reasoning: "Both points appear in a single, punctuated sentence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One balanced sentence",
          },
        },
        {
          id: "ciege-u4-s3-re-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is evaluative (gives a judgement) rather than just factual?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It stars two actors." },
            { id: "b", text: "The film was released in 2021." },
            { id: "c", text: "The pacing dragged badly in the second half, which lost my interest." },
            { id: "d", text: "The film is 118 minutes long." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluative language", statement: "Judgement, not fact." }],
            steps: [
              { reasoning: "Only option b judges the film's quality; the others are facts.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The pacing sentence — it judges the film",
          },
        },
        {
          id: "ciege-u4-s3-re-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short paragraph recommending a book to a friend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Recommendation", statement: "Reason + verdict." }],
            steps: [
              { reasoning: "The paragraph names the book.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason or example for the recommendation.", marks: 1, markCode: "AO2" },
              { reasoning: "It clearly recommends the book to the friend.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Recommendation paragraph",
          },
        },
        {
          id: "ciege-u4-s3-re-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence commenting on the pacing of a film or book you have seen or read.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Critical comment", statement: "Specific judgement + support." }],
            steps: [
              { reasoning: "The sentence comments specifically on the pacing.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason or example, e.g. a slow or gripping section.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One sentence on pacing",
          },
        },
        {
          id: "ciege-u4-s3-re-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which element belongs in the conclusion of a review?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The names of all the actors" },
            { id: "b", text: "A summary of the whole plot" },
            { id: "c", text: "Who the film or book suits and a final recommendation" },
            { id: "d", text: "The price of tickets" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Review structure", statement: "Conclusion = recommendation." }],
            steps: [
              { reasoning: "The conclusion should say who it suits and give a final recommendation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Who it suits plus a final recommendation",
          },
        },
        {
          id: "ciege-u4-s3-re-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan the structure of a review of a restaurant: state your verdict, name two points you would discuss, and state who it suits.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review planning", statement: "Verdict + points + audience." }],
            steps: [
              { reasoning: "An overall verdict is stated.", marks: 1, markCode: "AO2" },
              { reasoning: "Two specific points are named, e.g. food and service.", marks: 1, markCode: "AO2" },
              { reasoning: "Who the restaurant suits is identified.", marks: 1, markCode: "AO2" },
              { reasoning: "The plan follows verdict → points → audience structure.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Review plan: verdict, two points, who it suits",
          },
        },
        {
          id: "ciege-u4-s3-re-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which tone is most appropriate for a review?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Angry and insulting" },
            { id: "b", text: "Bored and dismissive" },
            { id: "c", text: "Wildly enthusiastic with no criticism" },
            { id: "d", text: "Balanced — honest strengths and weaknesses" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Review tone", statement: "Balanced and evaluative." }],
            steps: [
              { reasoning: "A good review is balanced — honest about strengths and weaknesses.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Balanced",
          },
        },
        {
          id: "ciege-u4-s3-re-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write the concluding paragraph of a review of a film, including who it suits and your final recommendation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Review conclusion", statement: "Recap + audience + verdict." }],
            steps: [
              { reasoning: "The paragraph refers back to the film reviewed.", marks: 1, markCode: "AO2" },
              { reasoning: "It says who the film suits.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a clear final recommendation.", marks: 1, markCode: "AO2" },
              { reasoning: "The tone remains evaluative and balanced.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Review conclusion paragraph",
          },
        },
        {
          id: "ciege-u4-s3-re-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence does NOT belong in a review?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The cinema has forty seats." },
            { id: "b", text: "Unfortunately the ending felt rushed." },
            { id: "c", text: "The acting was superb." },
            { id: "d", text: "I would recommend it to anyone who likes thrillers." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Review relevance", statement: "Only evaluative content." }],
            steps: [
              { reasoning: "The cinema's seat count is irrelevant to the quality of the film being reviewed.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The cinema has forty seats.",
          },
        },
        {
          id: "ciege-u4-s3-re-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a review (about 80-100 words) of a product, film, restaurant or book of your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full review", statement: "Verdict + points + recommendation." }],
            steps: [
              { reasoning: "Opens by naming what is reviewed and giving an early verdict.", marks: 1, markCode: "AO2" },
              { reasoning: "Gives balanced strengths and weaknesses.", marks: 1, markCode: "AO2" },
              { reasoning: "Supports points with specific examples.", marks: 1, markCode: "AO2" },
              { reasoning: "Concludes with who it suits and a recommendation.", marks: 1, markCode: "AO2" },
              { reasoning: "The review is organised into clear paragraphs.", marks: 1, markCode: "AO2" },
              { reasoning: "Accuracy of punctuation and spelling is maintained.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
                        ],
            finalAnswer: "Full review (80-100 words)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u4-s3-directed-notes",
      title: "Directed writing and reviews — revision notes",
      summary: "Purpose, audience, register, review structure.",
      sections: [
        { heading: "Directed", body: "Always identify audience and purpose first. Match register — formal for official, informal for friends." },
        { heading: "Reviews", body: "Opinion + specific examples. Structure: verdict → strengths/weaknesses → recommendation." },
      ],
    },
  ],
};
