import type { Lesson, TextExtract } from "../../../types.ts";

const RAILWAY_ARTICLE: TextExtract = {
  title: "The Tyranny of the Timetable",
  author: "Written for Akademik Space",
  source: "Original newspaper column in the style of a Victorian journalist",
  text: "There is a new despot in England, and he wears no crown. He sits in a thousand railway stations and he is called the timetable. Before his reign, a man might arrive at a market town at noon or at one o'clock, and nobody thought the worse of him; today he must arrive at 12.14 precisely, or be condemned to stand upon a draughty platform until 2.37.\n\nI was reminded of the despot's power last Tuesday, when I watched a farmer, a stout and dignified person with a basket of live geese, sprint down the length of Platform Two. The geese, indignant, protested at every stride. The guard, a man evidently intoxicated by authority, blew his whistle at the very moment the farmer's hand touched the carriage door. The train departed. The farmer remained. The geese, I am bound to say, had the last word.\n\nNow I do not deny that the railway is a marvel. It has shrunk the kingdom to the size of a county; it has brought the sea within reach of the mill-hand and the lawyer's clerk alike. But we should ask what we have lost in exchange. We have lost leisure, for who can dawdle when the engine will not wait? We have lost the pleasure of arriving whenever we pleased, which is, after all, the privilege of a free man.\n\nIt may be said that I am old-fashioned. I plead guilty. But I note that those who sneer loudest at the old ways are generally the same persons who may be found, red-faced and breathless, upon Platform Two.",
};

const NATURE_NOTES: TextExtract = {
  title: "On Seeing Birds",
  author: "Written for Akademik Space",
  source: "Original essay in the style of a nineteenth-century naturalist",
  text: "There is a species of silence that belongs only to the marsh at dawn, and it is not an empty one. It is a silence packed full of small noises: the clicking of a wader, the tick of water finding its level, the reeds whispering their grievances to one another. To hear it, one must sit still, and to sit still is the hardest accomplishment known to a modern person.\n\nI have been watching birds for thirty years, and I am still a bad observer. Last week I spent three hours upon a damp bank in the hope of a bittern, which I did not see. What I saw instead was a moorhen, whose air of fussy industry reminded me of a housekeeper turning out a cupboard.\n\nPerhaps this is the lesson of the thing. We go to nature expecting a performance, and we are repaid with a conversation, one in which we are rarely the most interesting speaker.",
};

export const lesson22: Lesson = {
  id: "el9-u2-lesson-2-2",
  code: "2-2",
  title: "Language and Structure in Non-fiction",
  goal: "I CAN analyse how non-fiction writers use language, anecdote and counter-argument to engage readers and shape their views.",
  standards: ["KS3 Reading", "AO2"],
  vocabulary: [
    { term: "Hyperbole", definition: "Deliberate exaggeration used for emphasis or humour." },
    { term: "Anecdote", definition: "A short personal story used to illustrate a point." },
    { term: "Counter-argument", definition: "An opposing viewpoint that a writer raises in order to answer or dismiss it." },
    { term: "Concession", definition: "Admitting that an opposing point has some merit before moving on." },
    { term: "Irony", definition: "Saying one thing while meaning another, or a gap between expectation and reality." },
    { term: "Rhetorical question", definition: "A question asked for effect, not to receive an answer." },
    { term: "Direct address", definition: "Speaking straight to the reader, using 'you' or inviting them to think." },
  ],
  concepts: [
    {
      id: "el9-u2-nonfiction-language",
      title: "Language in non-fiction",
      skill: "Analyse how word choice, imagery and tone are used to persuade or entertain in a non-fiction text.",
      lesson: {
        sections: [
          {
            heading: "Language to entertain and persuade",
            body: "Journalists, essayists and travel writers use many of the techniques of fiction: metaphor, personification, humour and irony. Their language is chosen to give a position a persuasive edge. Calling a timetable a 'despot' who 'wears no crown' turns a dull object into a villain, using **extended metaphor** to make a point about modern life.",
          },
          {
            heading: "Tone and direct appeal",
            body: "Notice the voice. Humorous exaggeration (hyperbole), mock-formal language ('I plead guilty'), short blunt sentences ('The train departed. The farmer remained.') and listing all shape how we respond. Rhetorical questions ('who can dawdle when the engine will not wait?') draw readers into the argument. When analysing, name the technique, quote exactly, then explain its effect on the reader and the writer's purpose.",
          },
        ],
        keyFormulas: [
          { name: "Extended metaphor", statement: "A metaphor developed over several lines, such as the timetable as a despot." },
          { name: "Hyperbole", statement: "Exaggeration for emphasis or humour." },
          { name: "Rhetorical question", statement: "A question that invites agreement rather than an answer." },
        ],
        workedExample: {
          problem: "How does the writer use language in the first paragraph to present the timetable?",
          solution: "The timetable is presented as a tyrant through the extended metaphor of 'a new despot ... he wears no crown'. The personification gives the timetable a character, and the phrase 'sits in a thousand railway stations' implies its power is everywhere. The precise times, 'precisely 12.14' and '2.37', contrast with the earlier carefree 'noon or at one o'clock', exaggerating how strict modern life has become. The verb 'condemned' adds a comic seriousness, treating a missed train as a punishment, so the writer persuades the reader that punctuality has become oppressive.",
        },
      },
      questions: [
        {
          id: "el9-u2-nonfiction-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RAILWAY_ARTICLE,
          stem: "'There is a new despot in England, and he wears no crown.' What technique is used to describe the timetable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Simile" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "Describing something as if it is something else, without 'like' or 'as'." }],
            steps: [{ reasoning: "The timetable is said to be a despot, not 'like' one, so it is a metaphor.", evidence: "a new despot in England", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Metaphor: the timetable is directly called a despot.",
            commonErrors: ["Choosing (b) simile because comparison is involved; no 'like' or 'as' is used."],
          },
        },
        {
          id: "el9-u2-nonfiction-language-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RAILWAY_ARTICLE,
          stem: "Explain how the phrase 'a man evidently intoxicated by authority' presents the guard.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphorical language", statement: "Words from one area (drunkenness) used for another (power)." },
              { kind: "skill", name: "Zooming in", statement: "Explore the connotations of a key word." },
            ],
            steps: [
              { reasoning: "'Intoxicated' suggests drunkenness, so the guard seems carried away by power and acting irrationally.", evidence: "intoxicated by authority", marks: 1, markCode: "AO2" },
              { reasoning: "It presents him as petty and self-important, enjoying control over passengers.", evidence: "blew his whistle at the very moment", marks: 1, markCode: "AO2" },
              { reasoning: "'Evidently' shows the writer is confident of his judgement and adds a mocking tone.", evidence: "evidently", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'Intoxicated by authority' presents the guard as drunk on power, petty and absurd; 'evidently' adds the writer's mocking certainty.",
            commonErrors: ["Taking 'intoxicated' literally as drunk on alcohol.", "Not discussing the effect."],
          },
        },
        {
          id: "el9-u2-nonfiction-language-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: RAILWAY_ARTICLE,
          stem: "How does the writer use language in the second paragraph to make the incident with the farmer entertaining? Support your answer with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification and humour", statement: "Giving animals human reactions for comic effect." },
              { kind: "technique", name: "Short sentences", statement: "Blunt, final sentences create comic timing." },
              { kind: "skill", name: "Effect on reader", statement: "Explain the response created in the reader." },
            ],
            steps: [
              { reasoning: "The farmer is described as 'stout and dignified' and then sprinting, making the contrast between dignity and scramble comic.", evidence: "a stout and dignified person", marks: 1, markCode: "AO2" },
              { reasoning: "The geese are personified as 'indignant', protesting 'at every stride', adding comic noise and character.", evidence: "The geese, indignant, protested at every stride.", marks: 2, markCode: "AO2" },
              { reasoning: "The short sentences 'The train departed. The farmer remained.' create comic timing, with balanced, mock-serious phrasing.", evidence: "The train departed. The farmer remained.", marks: 2, markCode: "AO2" },
              { reasoning: "The final line, 'the geese had the last word', gives the animals a triumphant, human role and a witty ending.", evidence: "had the last word", marks: 1, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen analysis of language techniques and their comic effect." },
              { level: "Level 2", marks: "3-4", descriptor: "Some understanding of techniques with some relevant comment on effect." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments." },
            ],
            finalAnswer: "The comedy comes from contrast: the 'stout and dignified' farmer is made to sprint; the geese are personified as 'indignant'; the short, balanced sentences 'The train departed. The farmer remained.' time the joke; and the geese are given 'the last word' as if they were human.",
            commonErrors: ["Retelling the anecdote.", "Naming techniques with no effect.", "Missing the humour of short sentences."],
          },
        },
        {
          id: "el9-u2-nonfiction-language-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: NATURE_NOTES,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two things the writer says can be heard in the marsh at dawn.", marks: 2 },
            { label: "b", prompt: "What does the simile 'a housekeeper turning out a cupboard' suggest about the moorhen?", marks: 4 },
            { label: "c", prompt: "How does the writer use language to present the experience of watching birds? Refer to specific words and phrases.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personification", statement: "Giving human behaviour to birds and reeds for charm and humour." },
              { kind: "technique", name: "Paradox", statement: "A silence 'packed full of small noises' combines opposites to surprise." },
              { kind: "skill", name: "Embedded analysis", statement: "Quote briefly, zoom in on key words and explore effect." },
            ],
            steps: [
              { part: "a", reasoning: "The clicking of a wader.", evidence: "the clicking of a wader", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Water ticking as it finds its level, or reeds whispering.", evidence: "the tick of water finding its level", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It suggests the moorhen is busy and fussy, always tidying or moving.", evidence: "fussy industry", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The domestic image humanises the bird and gives the writing gentle humour and affection.", evidence: "a housekeeper turning out a cupboard", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The paradox 'a silence packed full of small noises' makes the reader reconsider silence and conveys the richness of the marsh.", evidence: "a silence packed full of small noises", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Personification of reeds 'whispering their grievances' gives nature a gossiping, human life.", evidence: "the reeds whispering their grievances to one another", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Self-deprecating humour ('I am still a bad observer') makes the writer modest and relatable.", evidence: "I am still a bad observer", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The final metaphor of a conversation in which we are 'rarely the most interesting speaker' presents nature as an equal, humbling humans.", evidence: "rarely the most interesting speaker", marks: 3, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "11-12", descriptor: "Perceptive, discriminating analysis of language across the extract; assured, well-chosen quotations." },
              { part: "c", level: "Level 4", marks: "9-10", descriptor: "Thorough analysis with well-chosen quotations and developed comment." },
              { part: "c", level: "Level 3", marks: "6-8", descriptor: "Clear, relevant analysis with appropriate terminology." },
              { part: "c", level: "Level 2", marks: "3-5", descriptor: "Some understanding of language; some relevant references." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments." },
            ],
            finalAnswer: "(a) The clicking of a wader; the tick of water finding its level (or reeds whispering). (b) The moorhen seems busy, fussy and domestic, humanised with gentle humour. (c) The paradox of a noisy silence, the reeds personified as 'whispering their grievances', the humble self-mockery of 'a bad observer', and the closing conversation metaphor all present birdwatching as quiet, humbling and richly rewarding.",
            commonErrors: ["Listing techniques with no effect.", "Writing about the moorhen only.", "Paraphrasing the extract."],
          },
        },
      ],
    },
    {
      id: "el9-u2-nonfiction-structure",
      title: "Structure: anecdote and counter-argument",
      skill: "Analyse how non-fiction writers use anecdote, concession and counter-argument to build a persuasive piece.",
      lesson: {
        sections: [
          {
            heading: "Anecdote: a story that proves a point",
            body: "A writer often opens or supports an argument with a short personal story, an **anecdote**. It makes an abstract idea concrete and entertaining. The farmer sprinting for the train is not just comedy: it is evidence for the claim that the timetable is tyrannical. When analysing, always link the anecdote back to the writer's main point.",
          },
          {
            heading: "Counter-argument and concession",
            body: "Skilful writers admit the other side, then answer it. 'Now I do not deny that the railway is a marvel' is a **concession**: it makes the writer appear fair-minded. The pivot word 'But' then returns to the main argument: 'But we should ask what we have lost in exchange.' This pattern, concede and counter, makes the opinion more persuasive because it seems considered, not one-sided.",
          },
        ],
        keyFormulas: [
          { name: "Anecdote", statement: "A short story illustrating a point; always link it to the argument." },
          { name: "Concession and counter", statement: "Admit a fair point, then answer it ('I do not deny... But...')." },
          { name: "Structural shift", statement: "A change from humour to serious argument, signalled by a pivot word or paragraph." },
        ],
        workedExample: {
          problem: "How does the writer structure the article 'The Tyranny of the Timetable' to persuade the reader?",
          solution: "The article opens with a bold, humorous metaphor, then illustrates it with an anecdote about the farmer and his geese, which makes the argument vivid. The third paragraph shifts to a more serious tone with the concession 'I do not deny that the railway is a marvel', which makes the writer seem fair. The pivot 'But' leads to the counter-argument that we have lost 'leisure'. The final paragraph returns to humour, anticipating the reader's objection ('I am old-fashioned') and turning it against his critics, ending on a lively image that echoes Platform Two from the anecdote.",
        },
      },
      questions: [
        {
          id: "el9-u2-nonfiction-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RAILWAY_ARTICLE,
          stem: "What is the main purpose of the second paragraph (the farmer and the geese)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To provide the history of railway timetables" },
              { id: "b", text: "To criticise farmers for being late" },
              { id: "c", text: "To advertise a particular railway company" },
              { id: "d", text: "To illustrate the argument with an amusing anecdote" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Anecdote", statement: "A short personal story used to illustrate a point." }],
            steps: [{ reasoning: "The farmer's missed train gives vivid, humorous evidence of the timetable's tyranny.", evidence: "The train departed. The farmer remained.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** The paragraph is an anecdote that illustrates the timetable's tyranny.",
            commonErrors: ["Choosing (c) because the farmer misses the train; the blame falls on the timetable and guard."],
          },
        },
        {
          id: "el9-u2-nonfiction-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RAILWAY_ARTICLE,
          stem: "Explain why the writer begins the third paragraph with 'Now I do not deny that the railway is a marvel.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Concession", statement: "Admitting an opposing point to appear fair." },
              { kind: "skill", name: "Structural effect", statement: "Explain why the writer places a point where they do." },
            ],
            steps: [
              { reasoning: "It is a concession: the writer admits the railway's benefits, so he seems balanced and fair-minded.", evidence: "I do not deny that the railway is a marvel", marks: 1, markCode: "AO2" },
              { reasoning: "It prepares for the pivot 'But', so his criticism will carry more weight.", evidence: "But we should ask what we have lost", marks: 1, markCode: "AO2" },
              { reasoning: "It marks a shift from humorous anecdote to serious argument.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The concession makes the writer seem fair, which strengthens his criticism when he pivots with 'But we should ask what we have lost', and it shifts the article from humour to serious argument.",
            commonErrors: ["Saying the writer genuinely loves the railway.", "Not mentioning the counter that follows."],
          },
        },
        {
          id: "el9-u2-nonfiction-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: RAILWAY_ARTICLE,
          stem: "How does the writer use the final paragraph to end the article effectively?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anticipating objections", statement: "Raising and answering the reader's objection before they do." },
              { kind: "technique", name: "Cyclical ending", statement: "Returning to an earlier image or place." },
            ],
            steps: [
              { reasoning: "He anticipates the criticism 'I am old-fashioned' and accepts it with mock-formal 'I plead guilty', which is disarming and humorous.", evidence: "I plead guilty", marks: 2, markCode: "AO2" },
              { reasoning: "He turns the criticism on his critics, who are 'red-faced and breathless', showing their hypocrisy.", evidence: "red-faced and breathless", marks: 2, markCode: "AO2" },
              { reasoning: "The return to 'Platform Two' echoes the anecdote, linking back to the opening image and giving a satisfying cyclical close.", evidence: "upon Platform Two", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen analysis of how the ending is structured and why it is effective." },
              { level: "Level 2", marks: "3-4", descriptor: "Some understanding with some relevant references." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
            ],
            finalAnswer: "He anticipates the charge that he is old-fashioned and disarms it with 'I plead guilty'; then he turns it on his critics, 'red-faced and breathless'; and the return to 'Platform Two' echoes the farmer anecdote for a neat, witty close.",
            commonErrors: ["Only paraphrasing.", "Missing the callback to Platform Two."],
          },
        },
        {
          id: "el9-u2-nonfiction-structure-q4",
          difficulty: "challenge",
          totalMarks: 24,
          extract: RAILWAY_ARTICLE,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two things the writer says the railway has achieved.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the writer's use of a rhetorical question in the third paragraph.", marks: 4 },
            { label: "c", prompt: "How does the writer structure the article to develop and strengthen his argument? Write about the whole article.", marks: 18 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anecdote", statement: "A story that makes the argument vivid." },
              { kind: "technique", name: "Concession and counter-argument", statement: "Admit, pivot, then answer." },
              { kind: "skill", name: "Whole-text structure", statement: "Comment on the opening, development and ending with effects." },
            ],
            steps: [
              { part: "a", reasoning: "It has shrunk the kingdom to the size of a county.", evidence: "shrunk the kingdom to the size of a county", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It has brought the sea within reach of ordinary workers.", evidence: "brought the sea within reach of the mill-hand", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The question 'who can dawdle when the engine will not wait?' invites the reader to agree.", evidence: "who can dawdle when the engine will not wait?", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It makes the reader feel the loss of leisure personally, building solidarity with the writer.", evidence: "We have lost leisure", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Opening: bold extended metaphor of the despot grabs attention and sets the argument, with the contrast of earlier freedom to precise times.", evidence: "a new despot in England", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Anecdote: the farmer and geese brings the argument to life with humour.", evidence: "The geese, I am bound to say, had the last word.", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Concession and pivot: 'I do not deny' then 'But' make the argument seem fair and serious.", evidence: "But we should ask what we have lost in exchange", marks: 4, markCode: "AO2" },
              { part: "c", reasoning: "Rule of three and rhetorical question deepen the argument about lost leisure and freedom.", evidence: "We have lost leisure", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Ending: anticipates objection, turns it on critics and echoes Platform Two for a cyclical close.", evidence: "found, red-faced and breathless, upon Platform Two", marks: 3, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "16-18", descriptor: "Perceptive, discriminating analysis of structure across the whole article; assured, well-chosen evidence." },
              { part: "c", level: "Level 4", marks: "13-15", descriptor: "Thorough analysis of structure with well-chosen evidence." },
              { part: "c", level: "Level 3", marks: "9-12", descriptor: "Clear, relevant analysis of several structural features." },
              { part: "c", level: "Level 2", marks: "5-8", descriptor: "Some understanding of structure; some relevant references." },
              { part: "c", level: "Level 1", marks: "1-4", descriptor: "Simple, limited comments." },
            ],
            finalAnswer: "(a) It has shrunk the kingdom to the size of a county; it has brought the sea within reach of working people. (b) The question invites agreement and makes the loss of leisure feel shared. (c) The article opens with a bold despot metaphor, proves it with the farmer and geese anecdote, concedes the railway's marvels before pivoting with 'But' to the loss of leisure and freedom, and closes by disarming the 'old-fashioned' charge and returning to Platform Two.",
            commonErrors: ["Treating structure as a summary of content.", "Ignoring the concession.", "Not linking features to the argument."],
          },
        },
      ],
    },
  ],
};
