import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const LEAFLET: TextExtract = {
  title: "Join the Riverside Clean-up",
  author: "Written for Akademik Space",
  text: "Do you want to make a real difference in your neighbourhood? On the first Saturday of every month, volunteers meet at Riverside Park at 9 am to clear litter from the riverbank. Last year we collected over 400 bags of rubbish and helped to bring back the kingfishers that nest beside the footbridge.\n\nNo experience is needed. Gloves, bags and a hot drink are provided, and children are welcome when accompanied by an adult. Come for an hour or stay for the morning: every pair of hands counts.\n\nTo sign up, visit the Riverside Friends noticeboard or email volunteers@riversidefriends.example. Together, we can keep our river beautiful.",
};

const REVIEW: TextExtract = {
  title: "Seaview Cafe: A Review",
  author: "Written for Akademik Space",
  text: "I visited the Seaview Cafe last Thursday and, frankly, I cannot understand why it is so popular. The soup arrived lukewarm, the table was sticky, and the waiter seemed far more interested in his phone than in his customers. Every other reviewer who loves this place must surely be mistaken.\n\nThe menu lists twelve dishes, six of which are served with chips. The prices are higher than at the cafe next door, which in my opinion is a scandal. Anyone with any sense would eat elsewhere.\n\nTo be fair, the view of the bay is lovely. But a view is not a meal.",
};

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant explanation of purpose, audience and the writer's methods, supported by well-chosen quotations." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some understanding of purpose and audience, with some relevant references." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment with few references." },
];

export const lesson21: Lesson = {
  id: "el8-u2-lesson-2-1",
  code: "2-1",
  title: "Purpose, Audience and Form",
  goal: "I CAN identify why a non-fiction text was written, who it is for and what form it takes, and tell fact from opinion and bias.",
  standards: ["KS3 Reading", "KS3 AO1", "KS3 AO2"],
  vocabulary: [
    { term: "Purpose", definition: "The reason a text is written, such as to inform, persuade, advise or entertain." },
    { term: "Audience", definition: "The people a text is written for." },
    { term: "Form", definition: "The type of text, such as a leaflet, article, letter, review or speech." },
    { term: "Fact", definition: "A statement that can be checked and proved true or false." },
    { term: "Opinion", definition: "A personal view or belief that cannot be proved true or false." },
    { term: "Bias", definition: "A one-sided presentation that unfairly favours or opposes something." },
  ],
  concepts: [
    {
      id: "el8-u2-purpose-audience-form",
      title: "Identifying purpose, audience and form",
      skill: "Work out why a text was written, who it addresses and how its form reveals this.",
      lesson: {
        sections: [
          {
            heading: "Purpose: why was it written?",
            body: "Most non-fiction has one or more of four purposes: to **inform** (give facts), to **persuade** (change what the reader thinks or does), to **advise** (tell the reader what to do) and to **entertain**. A leaflet asking for volunteers mainly persuades, but it also informs. Look at what the writer wants the reader to think, feel or do.",
          },
          {
            heading: "Audience and form",
            body: "The **audience** is revealed by tone, vocabulary and content. Friendly, direct address such as 'Do you want to...?' is aimed at ordinary local people. The **form** has conventions: a leaflet has a clear call to action and contact details, a review gives a personal verdict, a letter has an address and sign-off. When you comment, name the feature and link it to purpose or audience.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "Inform, persuade, advise or entertain." },
          { name: "Direct address", statement: "Using 'you' to speak straight to the reader and involve them." },
          { name: "Call to action", statement: "A line that tells the reader exactly what to do next." },
        ],
        workedExample: {
          problem: "What is the purpose of the leaflet, and how can you tell? (4 marks)",
          solution: "The main purpose is to persuade readers to volunteer. The opening rhetorical question, 'Do you want to make a real difference in your neighbourhood?', addresses the reader directly and appeals to their wish to help. The leaflet also informs, with practical details such as 'Riverside Park at 9 am', and it ends with a call to action, 'To sign up, visit...', which shows the writer wants the reader to act.",
        },
      },
      questions: [
        {
          id: "el8-u2-purpose-audience-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LEAFLET,
          stem: "What is the main purpose of this text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To advertise a product for sale" },
              { id: "b", text: "To entertain readers with a story about a river" },
              { id: "c", text: "To persuade local people to volunteer" },
              { id: "d", text: "To report a crime in the park" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Purpose", statement: "Identify what the writer wants the reader to think or do." }],
            steps: [{ reasoning: "The text invites readers to join and ends with how to sign up, so it aims to persuade people to volunteer.", evidence: "every pair of hands counts", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** To persuade local people to volunteer.",
            commonErrors: ["Choosing (d): nothing is being sold; the only thing offered is volunteering."],
          },
        },
        {
          id: "el8-u2-purpose-audience-form-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LEAFLET,
          stem: "Who is the audience for this text? Give one piece of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Audience", statement: "Tone, content and address show who a text is for." }],
            steps: [
              { reasoning: "The audience is local residents, including families.", evidence: "in your neighbourhood", marks: 1, markCode: "AO1" },
              { reasoning: "Mention of children being welcome and no experience being needed shows it targets ordinary people of all ages.", evidence: "children are welcome when accompanied by an adult", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The audience is local people, including families and beginners, shown by 'your neighbourhood', 'No experience is needed' and 'children are welcome'.",
            commonErrors: ["Saying 'everyone' without evidence.", "Describing the purpose instead of the audience."],
          },
        },
        {
          id: "el8-u2-purpose-audience-form-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: LEAFLET,
          stem: "How does the writer try to persuade the reader to volunteer? Refer to two methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Direct address and rhetorical question", statement: "Speaking to the reader involves them personally." },
              { kind: "technique", name: "Evidence of success", statement: "Statistics prove that the cause works." },
            ],
            steps: [
              { reasoning: "The rhetorical question speaks to the reader directly and flatters their wish to help.", evidence: "Do you want to make a real difference in your neighbourhood?", marks: 1, markCode: "AO2" },
              { reasoning: "It makes volunteering seem personally rewarding and important.", evidence: "real difference", marks: 1, markCode: "AO2" },
              { reasoning: "A statistic proves that the event achieves something.", evidence: "over 400 bags of rubbish", marks: 1, markCode: "AO2" },
              { reasoning: "The kingfishers add an emotive, appealing result that shows the benefit to nature.", evidence: "bring back the kingfishers", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer opens with a rhetorical question, 'Do you want to make a real difference...?', which involves the reader and appeals to their wish to help. She also uses evidence of success, 'over 400 bags of rubbish' and the return of the kingfishers, which proves that volunteering has a visible, appealing result.",
            commonErrors: ["Naming a method without explaining how it persuades."],
          },
        },
        {
          id: "el8-u2-purpose-audience-form-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: LEAFLET,
          stem: "Answer all parts of this question about the leaflet.",
          parts: [
            { label: "a", prompt: "Write down two practical details about the clean-up.", marks: 2 },
            { label: "b", prompt: "What form is this text? Give two features that show this.", marks: 2 },
            { label: "c", prompt: "Explain how the writer makes volunteering sound easy and welcoming.", marks: 4 },
            { label: "d", prompt: "How does the writer use language and structure to achieve the leaflet's purpose?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Leaflet form", statement: "Short paragraphs, direct address, practical details and a call to action." },
              { kind: "technique", name: "Inclusive tone", statement: "Welcoming language removes reasons not to join." },
            ],
            steps: [
              { part: "a", reasoning: "The time and place are given.", evidence: "Riverside Park at 9 am", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Equipment is provided.", evidence: "Gloves, bags and a hot drink are provided", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It is a leaflet or flyer: it addresses the reader directly with 'you' language.", evidence: "Do you want to make a real difference", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "It includes a call to action and contact details, typical of the form.", evidence: "To sign up, visit the Riverside Friends noticeboard", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "'No experience is needed' removes worries about skill.", evidence: "No experience is needed", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Flexible time and the free refreshments make it sound easy and pleasant.", evidence: "Come for an hour or stay for the morning", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Direct address and a rhetorical question hook the reader at the start.", evidence: "Do you want to make a real difference", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Statistics and the kingfisher detail prove results in a structured middle section.", evidence: "over 400 bags of rubbish", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "The final paragraph ends with a call to action and an inclusive 'Together, we can'.", evidence: "Together, we can keep our river beautiful.", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) Meets at Riverside Park at 9 am; equipment is provided. (b) A leaflet, shown by direct address and a call to action. (c) 'No experience is needed' and flexible hours make it easy and welcoming. (d) The rhetorical question hooks the reader, statistics and kingfishers prove the benefits, and the final inclusive call to action ('Together, we can') encourages them to sign up.",
            commonErrors: ["Treating (a) as a request for explanation.", "In (d), describing content with no link to the leaflet's purpose."],
          },
        },
      ],
    },
    {
      id: "el8-u2-fact-opinion-bias",
      title: "Fact, opinion and bias",
      skill: "Separate facts from opinions and explain how one-sided language shows bias.",
      lesson: {
        sections: [
          {
            heading: "Fact versus opinion",
            body: "A **fact** can be checked: 'The menu lists twelve dishes.' An **opinion** is a personal judgement: 'The prices are a scandal.' Words like 'frankly', 'surely', 'in my opinion' and judgement words such as 'lovely' or 'terrible' signal opinion. Writers often blend the two, so read carefully.",
          },
          {
            heading: "Spotting bias",
            body: "**Bias** is one-sided writing. Signs include extreme words ('scandal'), sweeping claims ('Anyone with any sense'), ignoring the other side, and dismissing people who disagree. A fair writer gives balance. Even a biased text can contain a concession, like 'To be fair...', which a writer may use to seem reasonable.",
          },
        ],
        keyFormulas: [
          { name: "Fact", statement: "A statement that can be checked and shown to be true or false." },
          { name: "Opinion", statement: "A personal view, often signalled by judgement words." },
          { name: "Bias", statement: "Presenting only one side, often through extreme or emotive language." },
        ],
        workedExample: {
          problem: "How can you tell that the reviewer is biased? (4 marks)",
          solution: "The reviewer uses extreme, emotive language, calling the prices 'a scandal', which exaggerates a minor point. She dismisses everyone who disagrees: 'Every other reviewer who loves this place must surely be mistaken.' She also makes a sweeping claim, 'Anyone with any sense would eat elsewhere', suggesting that her view is the only reasonable one. Although she concedes that the view is lovely, she immediately dismisses it, so the review remains one-sided.",
        },
      },
      questions: [
        {
          id: "el8-u2-fact-opinion-bias-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVIEW,
          stem: "Which of these is a fact from the review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A view is not a meal." },
              { id: "b", text: "The prices are a scandal." },
              { id: "c", text: "The menu lists twelve dishes." },
              { id: "d", text: "Anyone with any sense would eat elsewhere." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fact", statement: "A statement that can be checked." }],
            steps: [{ reasoning: "The number of dishes on the menu can be counted, so it is a fact.", evidence: "The menu lists twelve dishes", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** The menu lists twelve dishes. The other statements are opinions or judgements.",
            commonErrors: ["Choosing (d) because it sounds like a general truth, when it is a witty opinion."],
          },
        },
        {
          id: "el8-u2-fact-opinion-bias-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: REVIEW,
          stem: "Copy out one fact and one opinion from the second paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fact and opinion", statement: "Facts are verifiable; opinions are judgements." }],
            steps: [
              { reasoning: "A fact: this can be checked against the menu.", evidence: "six of which are served with chips", marks: 1, markCode: "AO1" },
              { reasoning: "An opinion: 'scandal' is a personal judgement, not a measurable fact.", evidence: "which in my opinion is a scandal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Fact: 'six of which are served with chips'. Opinion: 'in my opinion is a scandal'.",
            commonErrors: ["Treating 'higher than at the cafe next door' as an opinion: it is checkable, though the writer's judgement of it is an opinion."],
          },
        },
        {
          id: "el8-u2-fact-opinion-bias-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: REVIEW,
          stem: "How does the reviewer show that she is biased against the cafe? Refer to two quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotive language", statement: "Strong words exaggerate feeling and persuade." },
              { kind: "technique", name: "Sweeping generalisation", statement: "Claims about everyone or nobody ignore the other side." },
            ],
            steps: [
              { reasoning: "'Scandal' is an exaggerated, emotive word for a price difference.", evidence: "a scandal", marks: 1, markCode: "AO2" },
              { reasoning: "It shows she is angry and wants the reader to share her outrage.", evidence: "in my opinion is a scandal", marks: 1, markCode: "AO2" },
              { reasoning: "She dismisses all who disagree, assuming she alone is right.", evidence: "must surely be mistaken", marks: 1, markCode: "AO2" },
              { reasoning: "The sweeping claim implies anyone who disagrees is foolish, which is one-sided.", evidence: "Anyone with any sense would eat elsewhere", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The reviewer's bias is clear from her emotive word 'scandal', which exaggerates a difference in price, and from her sweeping dismissal of other reviewers: 'must surely be mistaken'. She implies that anyone who disagrees is foolish, so only her view is presented.",
            commonErrors: ["Simply saying 'she does not like it' without a quotation.", "Missing that bias is about one-sidedness, not just negativity."],
          },
        },
        {
          id: "el8-u2-fact-opinion-bias-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: REVIEW,
          stem: "Answer all parts of this question about the review.",
          parts: [
            { label: "a", prompt: "Give two criticisms of the cafe from the first paragraph.", marks: 2 },
            { label: "b", prompt: "What is the purpose of the final paragraph?", marks: 2 },
            { label: "c", prompt: "Explain how the writer uses the word 'frankly' and the phrase 'in my opinion' to shape the reader's view.", marks: 4 },
            { label: "d", prompt: "How does the writer persuade the reader that the cafe is not worth visiting?", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review", statement: "A personal verdict with supporting evidence, often with a concession." },
              { kind: "technique", name: "Persuasive voice", statement: "Confident personal language invites the reader to trust the writer." },
            ],
            steps: [
              { part: "a", reasoning: "The food was served at the wrong temperature.", evidence: "The soup arrived lukewarm", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The service was poor.", evidence: "the waiter seemed far more interested in his phone", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It concedes that the view is lovely, to appear fair.", evidence: "To be fair, the view of the bay is lovely.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It then ends with a witty verdict that dismisses it again.", evidence: "But a view is not a meal.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "'Frankly' suggests honesty and straight-talking, building trust.", evidence: "frankly, I cannot understand", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "'In my opinion' flags a view but is delivered confidently, so the criticism sounds reasonable.", evidence: "in my opinion is a scandal", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Specific details such as lukewarm soup and a sticky table make the criticism seem credible.", evidence: "the table was sticky", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Emotive and sweeping language pushes the reader to agree.", evidence: "Anyone with any sense would eat elsewhere", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "A small concession followed by a punchy closing line seems fair and leaves a memorable verdict.", evidence: "But a view is not a meal.", marks: 2, markCode: "AO2" },
            ],
            levels: LEVELS_6("d"),
            finalAnswer: "(a) The soup was lukewarm; the waiter ignored customers. (b) It concedes the view to seem fair, then ends with a punchy dismissal. (c) 'Frankly' sounds honest, and 'in my opinion' sounds reasonable while still pushing her view. (d) Concrete complaints build credibility, sweeping and emotive claims press the reader to agree, and the concession and neat closing line make the verdict memorable.",
            commonErrors: ["Retelling the review rather than analysing the methods.", "Calling every sentence 'persuasive' without saying how."],
          },
        },
      ],
    },
  ],
};
