import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const FERRY: TextExtract = {
  title: "The Last Ferry",
  author: "Written for Akademik Space",
  source: "Travel article",
  text: "The ferry to Skellan leaves Harbourside Quay at 6.40 each evening, and it has done so, give or take a war and two storms, since 1911. It carries twelve cars, forty passengers and, on Fridays, the island's post. The crossing takes fifty minutes, though locals insist that it feels longer when the wind is in the west.\n\nI boarded with a rucksack, a flask of tea and low expectations. Skellan has no cinema, no bank and one shop, which closes for lunch and, according to the sign on its door, for ‘unforeseen circumstances’. Its population is 212. Yet by the time the lights of the harbour dwindled behind us I felt something I had not felt in months: I was in no hurry at all.\n\nThe ticket collector, a stooped man named Mr Pryce, told me that he had worked the route for thirty-one years. ‘People come for a weekend,’ he said, ‘and stay for a month. It’s the quiet that does it.’ I laughed. Then the engines cut out, the gulls fell silent, and for ten seconds, as we drifted into the bay, there was nothing at all to hear but water.",
};

const MAP: TextExtract = {
  title: "In Defence of the Paper Map",
  author: "Written for Akademik Space",
  source: "Opinion column",
  text: "Last month my phone died on a Welsh hillside, and I discovered that I no longer knew where I was. I had walked for three hours trusting a small blue dot, and the moment the screen went black I was, for all practical purposes, lost. This is absurd. Our grandparents crossed continents with a folded sheet of paper and a little common sense.\n\nI am not asking anyone to throw away their phone. I am asking us to remember what a map gave us that a screen cannot. A map shows the whole landscape at once: the ridge you will climb, the river you must cross, the village beyond. A screen offers a keyhole view and tells you only the next turning. It makes us passengers in our own journeys.\n\nWorse, it is making us helpless. Surveys suggest that fewer than one in five teenagers can read a basic map. Nobody should call that progress. A skill that took centuries to develop is being lost in a single generation, and we are shrugging it off because the blue dot is so convenient.",
};

const RETRIEVAL_C_LEVELS: MarkLevel[] = [
  { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, relevant selection and synthesis of information from across the text; the change in feeling is explained with well-chosen details." },
  { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some relevant details selected; some understanding of the change in feeling but with limited synthesis." },
  { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited details selected, possibly copied without selection or explanation." },
];

const VIEWS_C_LEVELS: MarkLevel[] = [
  { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, developed explanation of the writer's views, supported by well-chosen, accurate references to the text." },
  { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding of the writer's views with some relevant references; explanation is partial." },
  { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments on the writer's views; references are few or copied." },
];

export const lesson11: Lesson = {
  id: "el10-u1-lesson-1-1",
  code: "1-1",
  title: "Retrieval and Writers' Views",
  goal: "I CAN retrieve information accurately from a non-fiction text and explain the views a writer holds, using evidence.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO1"],
  vocabulary: [
    { term: "Retrieval", definition: "Finding and copying or paraphrasing specific information that is directly stated in a text." },
    { term: "Inference", definition: "A conclusion you reach from clues in the text rather than from what is stated openly." },
    { term: "Viewpoint", definition: "The opinion or position a writer holds on a subject." },
    { term: "Paraphrase", definition: "Putting an idea into your own words while keeping the meaning." },
    { term: "Synthesis", definition: "Bringing together details from different parts of a text to build a single, coherent answer." },
    { term: "Implicit", definition: "Suggested or hinted at rather than directly stated." },
  ],
  concepts: [
    {
      id: "el10-u1-retrieval-questions",
      title: "Retrieval questions",
      skill: "Select accurate, relevant information from a non-fiction text and answer exactly the question asked.",
      lesson: {
        sections: [
          {
            heading: "What retrieval questions test",
            body: "Retrieval questions test **AO1**: reading carefully and selecting information. They use command words such as ‘Give’, ‘List’, ‘Identify’ or ‘What does the writer say about...?’. The marks usually equal the number of separate facts you must find, so a 4-mark question needs four distinct, accurate points. You do not need to analyse language, and writing a long paragraph wastes valuable time.",
          },
          {
            heading: "Reading the question's limits",
            body: "Look for the lines or paragraph the question points to and for the focus word. If the question asks about the **ferry**, details about the island's shop will not score. Keep each point short and separate: one fact per line or sentence. You may quote briefly or paraphrase, but do not copy out a whole sentence when only a few words answer the question, and do not include information that contradicts the correct point.",
          },
          {
            heading: "Synthesis across a text",
            body: "Some retrieval questions ask you to bring details together from more than one paragraph. Pull the relevant points out in the order they appear, then link them in a sentence or two. Use words such as ‘at first’, ‘later’ and ‘by the end’ to show you have followed how the writer's ideas or the writer's feelings develop.",
          },
        ],
        keyFormulas: [
          { name: "Command words", statement: "‘Give’, ‘List’ and ‘Identify’ ask for short, separate points; ‘What does the writer say...’ asks for ideas in your own words." },
          { name: "One mark, one point", statement: "Aim for one clear fact for every mark available, and stay inside the lines named." },
          { name: "Paraphrase or quote", statement: "Either is acceptable in retrieval, provided the meaning is accurate and relevant to the focus." },
        ],
        workedExample: {
          problem: "Using the first paragraph of ‘The Last Ferry’, give two facts about the crossing to Skellan.",
          solution: "The ferry leaves Harbourside Quay at 6.40 each evening. The crossing takes fifty minutes. (Other acceptable points: it carries twelve cars and forty passengers; it has run since 1911.) Each fact is short, accurate and comes from the paragraph named, so both marks are secured without any analysis.",
        },
      },
      questions: [
        {
          id: "el10-u1-retrieval-questions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FERRY,
          stem: "According to the first paragraph, how long does the crossing to Skellan take?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thirty-one minutes" },
              { id: "b", text: "Forty minutes" },
              { id: "c", text: "Ninety minutes" },
              { id: "d", text: "Fifty minutes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Accurate retrieval", statement: "Choose the detail that matches the question focus, not another number from the same paragraph." }],
            steps: [{ reasoning: "The text states ‘The crossing takes fifty minutes’; this directly answers the question.", evidence: "The crossing takes fifty minutes", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Fifty minutes, because the first paragraph says so directly.",
            commonErrors: ["Choosing forty because the ferry carries ‘forty passengers’.", "Choosing thirty-one, which is the number of years Mr Pryce has worked the route."],
          },
        },
        {
          id: "el10-u1-retrieval-questions-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: FERRY,
          stem: "Give two things that Skellan does not have, according to the second paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Stay within the lines", statement: "Take points only from the paragraph named and match the focus: what Skellan lacks." }],
            steps: [
              { reasoning: "Skellan has no cinema, a direct statement of something it lacks.", evidence: "no cinema", marks: 1, markCode: "AO1" },
              { reasoning: "Skellan also has no bank. (Accept ‘only one shop’ as a paraphrase of a lack of shops.)", evidence: "no bank", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "It has no cinema and no bank (also acceptable: it has only one shop).",
            commonErrors: ["Listing what it does have, such as a population of 212.", "Copying the whole sentence, including the shop's lunch closure, which is not what the question asks."],
            examinerNote: "Award each valid point once only. Do not credit both ‘no bank’ and a restatement of the same point.",
          },
        },
        {
          id: "el10-u1-retrieval-questions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: FERRY,
          stem: "Using the first paragraph only, give four facts about the ferry to Skellan.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "One mark, one point", statement: "Four marks require four separate, accurate facts from the paragraph named." }],
            steps: [
              { reasoning: "It leaves at a stated time.", evidence: "leaves Harbourside Quay at 6.40 each evening", marks: 1, markCode: "AO1" },
              { reasoning: "It has run for over a century.", evidence: "since 1911", marks: 1, markCode: "AO1" },
              { reasoning: "It has a stated car capacity (twelve cars) or passenger load (forty passengers).", evidence: "twelve cars, forty passengers", marks: 1, markCode: "AO1" },
              { reasoning: "It carries the island's post on Fridays, or the crossing takes fifty minutes.", evidence: "on Fridays, the island's post", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Any four of: leaves Harbourside Quay at 6.40 each evening; has run since 1911; carries twelve cars; carries forty passengers; carries the post on Fridays; crossing takes fifty minutes.",
            commonErrors: ["Giving two points that are really the same, such as ‘twelve cars’ and ‘lots of cars’.", "Including details from paragraph two, such as the shop closing for lunch."],
            examinerNote: "Do not award marks for the locals' opinion that it feels longer in a westerly wind, as it is not a fact about the ferry.",
          },
        },
        {
          id: "el10-u1-retrieval-questions-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: FERRY,
          stem: "Read ‘The Last Ferry’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two facts about Mr Pryce.", marks: 2 },
            { label: "b", prompt: "Give four details from the second paragraph that show Skellan is a quiet, remote place.", marks: 4 },
            { label: "c", prompt: "How does the writer's state of mind change during the journey? Use details from the whole text.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval and synthesis", statement: "Short, separate points for retrieval; connected points from across the text for synthesis." },
              { kind: "definition", name: "Inference from details", statement: "Writer's feelings are shown through what he notices and says, not only stated." },
            ],
            steps: [
              { part: "a", reasoning: "He is the ticket collector (or he is stooped).", evidence: "a stooped man named Mr Pryce", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He has worked the route for thirty-one years.", evidence: "worked the route for thirty-one years", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "There is no cinema.", evidence: "no cinema", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "There is no bank.", evidence: "no bank", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "There is only one shop, which closes for lunch.", evidence: "one shop, which closes for lunch", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Its population is only 212.", evidence: "Its population is 212", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He begins with low expectations of the trip.", evidence: "low expectations", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "As the harbour disappears he feels unrushed, something he has not felt for months, showing earlier stress.", evidence: "I was in no hurry at all", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He laughs at Mr Pryce's claim, suggesting initial scepticism about the island's effect.", evidence: "I laughed", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The silence after the engines cut out leaves him absorbed, perhaps persuaded.", evidence: "nothing at all to hear but water", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Synthesis: a clear movement from doubt and tension to calm.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Synthesis: the writer links the change to place, noting the quiet as the cause.", evidence: "It’s the quiet that does it", marks: 1, markCode: "AO1" },
            ],
            levels: RETRIEVAL_C_LEVELS,
            finalAnswer: "(a) He is the ticket collector; he has worked the route for thirty-one years. (b) No cinema; no bank; one shop that closes for lunch; population of 212. (c) The writer starts with low expectations and, presumably, a stressful life; as the harbour fades he feels no hurry for the first time in months, laughs at Mr Pryce's claim, then is stilled by the silence, suggesting he is beginning to agree that the quiet changes people.",
            commonErrors: ["Retelling the whole passage in (c) rather than selecting changes in feeling.", "Using only one paragraph in (c), so there is no synthesis.", "Giving opinions in (a) instead of facts."],
            examinerNote: "In (c), reward answers that show a development across the text, not a list of isolated details.",
          },
        },
      ],
    },
    {
      id: "el10-u1-explaining-views",
      title: "Explaining a writer's views",
      skill: "Identify the writer's opinions and explain them in your own words, supported by short quotations.",
      lesson: {
        sections: [
          {
            heading: "Fact versus view",
            body: "A **fact** can be checked; a **view** is what the writer thinks or feels. Questions that ask for the writer's ‘views’ or ‘attitude’ want opinions, such as ‘Nobody should call that progress’. Look for evaluative words (‘absurd’, ‘worse’, ‘helpless’), strong modal verbs (‘should’, ‘must’) and sentences that judge rather than describe.",
          },
          {
            heading: "Explain, do not copy",
            body: "Weak answers copy the text. Better answers **paraphrase** the view and then back it with a short quotation. A reliable pattern is: *The writer believes that... This is shown when he says ‘...’, which suggests...* Keep quotations short, so that your own explanation does the work.",
          },
          {
            heading: "Views across a text",
            body: "A writer may hold several views, or hold one view and qualify it. In ‘In Defence of the Paper Map’ the writer is not anti-phone ('I am not asking anyone to throw away their phone'), but he is critical of dependence. Spotting this kind of balance separates a clear answer from a simple one.",
          },
        ],
        keyFormulas: [
          { name: "View versus fact", statement: "A fact can be proved; a view is a judgement the writer makes and expects the reader to consider." },
          { name: "Explain-quote-develop", statement: "State the view in your own words, support it with a short quotation, then say what it shows about the writer's attitude." },
          { name: "Qualified views", statement: "Notice concessions (‘I am not asking...’) as they show the writer's overall position is more nuanced." },
        ],
        workedExample: {
          problem: "What does the writer of ‘In Defence of the Paper Map’ think about people who rely on their phones for directions?",
          solution: "He believes that reliance on phones makes people passive and unable to cope without them. He says the screen makes us ‘passengers in our own journeys’, suggesting we no longer control where we go. He adds that it is ‘making us helpless’, which shows a strong, critical view. However, he does not want phones abandoned, so his criticism is of dependence, not of the technology itself.",
        },
      },
      questions: [
        {
          id: "el10-u1-explaining-views-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MAP,
          stem: "Which of these statements best sums up the writer's view of phone maps?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phones are always more accurate than paper maps." },
              { id: "b", text: "Phones should be banned from hillwalking." },
              { id: "c", text: "Phones are useful, but relying on them too much is harmful." },
              { id: "d", text: "Young people are better at navigation than their grandparents." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Identifying overall viewpoint", statement: "Check each option against the whole text, including concessions." }],
            steps: [{ reasoning: "He says he is not asking anyone to throw away their phone but criticises dependence, so the balanced view is correct.", evidence: "I am not asking anyone to throw away their phone", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** He accepts phones but objects to over-reliance on them.",
            commonErrors: ["Choosing (a), an exaggeration of his view that ignores his concession.", "Choosing (d), the opposite of the survey point."],
          },
        },
        {
          id: "el10-u1-explaining-views-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: MAP,
          stem: "Explain in your own words one thing the writer thinks a map offers that a phone screen does not.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Paraphrase", statement: "Express the idea in your own words, linking it to the writer's view." }],
            steps: [
              { reasoning: "Identifies that a map shows the whole landscape at once, giving an overview.", evidence: "shows the whole landscape at once", marks: 1, markCode: "AO1" },
              { reasoning: "Explains the contrast: a screen gives only a narrow view of the next turning, so users are less aware and less in control.", evidence: "A screen offers a keyhole view", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "A map lets you see the entire landscape together, so you understand your route as a whole, whereas a screen shows only a small part and just the next instruction.",
            commonErrors: ["Copying ‘the ridge you will climb, the river you must cross’ without explaining it.", "Saying phones are worse without saying what the map offers."],
          },
        },
        {
          id: "el10-u1-explaining-views-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: MAP,
          stem: "Explain the writer's view about the effect of phone navigation on teenagers. Use your own words and refer to the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explain-quote-develop", statement: "Paraphrase the view, support it with a short quotation, and explain what it reveals." }],
            steps: [
              { reasoning: "He believes teenagers are losing the basic skill of map reading.", evidence: "fewer than one in five teenagers can read a basic map", marks: 1, markCode: "AO1" },
              { reasoning: "He sees this as a loss, not progress, showing disapproval.", evidence: "Nobody should call that progress", marks: 1, markCode: "AO1" },
              { reasoning: "He thinks a long-developed skill is vanishing very quickly.", evidence: "lost in a single generation", marks: 1, markCode: "AO1" },
              { reasoning: "He blames convenience; people accept the loss too easily.", evidence: "shrugging it off because the blue dot is so convenient", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The writer thinks phones are causing young people to lose a valuable skill. He notes that few teenagers can read a map, refuses to call this progress, and believes a skill built up over centuries is vanishing in one generation because people prefer convenience.",
            commonErrors: ["Quoting the survey statistic without explaining the view it supports.", "Stating that the writer ‘does not like phones’, which ignores his concession."],
          },
        },
        {
          id: "el10-u1-explaining-views-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: MAP,
          stem: "Read ‘In Defence of the Paper Map’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two things that happened to the writer on the Welsh hillside.", marks: 2 },
            { label: "b", prompt: "Explain what the writer means when he says a phone screen makes us ‘passengers in our own journeys’.", marks: 4 },
            { label: "c", prompt: "Explain the writer's views on technology and traditional skills. Use your own words and refer to the text to support your points.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Explaining views", statement: "Identify the opinion, quote briefly, and explain what the quotation shows." },
              { kind: "technique", name: "Metaphor", statement: "‘Passengers’ is a metaphor suggesting passivity: someone else drives, and we merely arrive." },
            ],
            steps: [
              { part: "a", reasoning: "His phone died.", evidence: "my phone died on a Welsh hillside", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He discovered he did not know where he was and was effectively lost.", evidence: "I was, for all practical purposes, lost", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A passenger does not steer; similarly phone users follow instructions without making decisions.", evidence: "passengers in our own journeys", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The screen only gives the next step, so users have no overview or planning.", evidence: "tells you only the next turning", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "This suggests that people are passive and not in control of their own travel.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The metaphor implies loss of ownership: the journey is ‘our own’ yet we do not direct it.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He believes dependence on technology is dangerous, as his own experience shows.", evidence: "the moment the screen went black I was... lost", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He values traditional skills and the wisdom of earlier generations.", evidence: "Our grandparents crossed continents", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He is balanced: he accepts phones should stay.", evidence: "I am not asking anyone to throw away their phone", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He thinks maps are better at giving understanding of place.", evidence: "shows the whole landscape at once", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He is alarmed that the skill is disappearing among the young.", evidence: "fewer than one in five teenagers", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "He criticises society's complacency about the loss.", evidence: "we are shrugging it off", marks: 1, markCode: "AO1" },
            ],
            levels: VIEWS_C_LEVELS,
            finalAnswer: "(a) His phone died and he realised he was lost. (b) Phone users follow instructions like passengers rather than choosing the route; they see only the next turning, so they have no overview and little control. (c) He values traditional skills such as map reading, believes over-reliance on phones leaves people helpless, and is concerned that young people are losing the skill, though he accepts that phones themselves are not the problem.",
            commonErrors: ["Saying the writer hates technology, missing his concession.", "Paraphrasing in (b) without explaining the metaphor.", "Copying long quotations without explanation."],
            examinerNote: "Reward use of own words. Do not credit unsupported opinion about technology that is not the writer's.",
          },
        },
      ],
    },
  ],
};
