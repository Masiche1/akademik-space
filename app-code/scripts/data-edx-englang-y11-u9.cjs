// Data spec for edx-englang-y11 unit 9: Purpose, Audience and Persuasion.
// Generates lesson-9-1.ts, lesson-9-2.ts, lesson-9-3.ts via scripts/gen-lesson.cjs.

// Level bands for open responses, highest band first; top band equals the marks available.
const bands = (top, focus, part) => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen evidence`,
    `Thorough ${focus}; well-chosen, effective references`,
    `Clear, relevant ${focus}; appropriate references`,
    `Some understanding; ${focus} is partly developed with some relevant references`,
    `Simple, limited ${focus}; few or unselective references`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const LETTER = {
  title: "A Letter to Residents",
  author: "Priya Shah, Chair of the Marsh Lane Residents' Association",
  source: "Original letter to residents",
  text:
    "Dear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support.\n\nMany of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates, where parents currently queue for several minutes each morning.\n\nWe acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\nChair, Marsh Lane Residents' Association",
};

const BLOG = {
  title: "The Cycle Lane Conundrum",
  author: "M. Okafor",
  source: "Original local blog post",
  text:
    "Right, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out.\n\nLook, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out.\n\nThe council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?",
};

const BOTH = {
  title: "Two Views on the Cycle Lane",
  author: "Written for Akademik Space",
  source: "Original texts for comparison",
  text:
    "Text 1 - 'A Letter to Residents' (formal letter)\nDear Resident,\n\nWe are writing on behalf of the Marsh Lane Residents' Association regarding the proposed cycle lane on Marsh Lane, and we would be grateful for your support. Many of you have told us that you find the current road dangerous, particularly outside the primary school between 8.15 and 9.00. A segregated cycle lane would provide a safe route for children and encourage healthier journeys. It would also reduce congestion at the school gates. We acknowledge that some residents have concerns about the loss of parking spaces. However, the consultation documents show that only fourteen spaces would be affected, and the council has proposed alternative provision on Stanley Street. We therefore ask you to complete the survey by Friday 14 March and to indicate whether you support the proposal.\n\nYours faithfully,\nPriya Shah\n\nText 2 - 'The Cycle Lane Conundrum' (blog post)\nRight, so the council wants to build a cycle lane on Marsh Lane. Before you all lose your minds in the comments, hear me out. Look, I get it. Parking is already a nightmare round here and the idea of losing spaces near the shops is proper annoying. But my kid cycles to school and honestly the road feels dodgy at drop-off. Loads of parents just sit in their cars because they don't feel safe letting the little ones out. The council says only a few spaces would go. Fourteen, whatever that means when you're trying to park at 8.55 on a Tuesday. Still, maybe it's worth a moan in the survey and seeing what actually happens. What's everyone else think?",
};

const PERSUASIVE = {
  title: "The Case for Action",
  author: "Written for Akademik Space",
  source: "Original newspaper opinion article",
  text:
    "Every year, eight million tonnes of plastic enter our oceans. That is not a statistic; it is a crisis we are choosing to ignore. We have the technology. We have the knowledge. What more do we need?\n\nThe Government must introduce a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs in every borough. These measures would transform our high streets, create thousands of green jobs and cut household waste within a single parliament.\n\nHow long will we wait? I urge every reader to write to their MP this week. Together, we can turn this tide.",
};

const CHARITY = {
  title: "Give a Child a Future",
  author: "The Bright Futures Trust",
  source: "Original charity appeal",
  text:
    "Give a child a future. Last year, your donations helped 12,400 children stay in school across three regions. For just the price of a coffee each month, you can provide books, meals and a safe place to learn.\n\nMeet Amina. At nine, she walked four kilometres to a school with no books. Because of supporters like you, she now reads to her younger brother every evening. Her teacher says she dreams of becoming a doctor.\n\nWe are a registered charity, audited annually and partnered with local councils. But none of this happens without you. Please give today.",
};

const PHONES_A = {
  title: "Phones Out",
  author: "Written for Akademik Space",
  source: "Original opinion article (position: ban)",
  text:
    "Schools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it.\n\nSome say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back.",
};

const PHONES_B = {
  title: "Phones In",
  author: "Written for Akademik Space",
  source: "Original opinion article (position: allow)",
  text:
    "Blanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them.\n\nOf course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil.",
};

const PHONES_BOTH = {
  title: "Two Articles on Phones in Schools",
  author: "Written for Akademik Space",
  source: "Original texts for comparison",
  text:
    "Text 1 - 'Phones Out'\nSchools should ban mobile phones outright. My son's concentration has collapsed since he got a smartphone, and he is not alone: teachers up and down the country report the same pattern. The evidence is plain. A phone in a pocket is a portal to distraction, and no child should be expected to resist it. Some say phones can support learning. Perhaps. But the burden of proof lies with those who want to introduce the distraction, not with those who want to protect childhood. Every lesson lost to a glowing screen is a lesson the child will never get back.\n\nText 2 - 'Phones In'\nBlanket bans on phones ignore what research actually shows. Used well, a smartphone is the most powerful learning tool a child has ever owned. Revision apps, language tools and access to the world's libraries sit in every pocket. Banning them is like banning dictionaries because some children cheat with them. Of course, misuse happens. But schools already teach children to manage screens outside the classroom; they should teach them to manage them inside it too. A total ban solves nothing and punishes every responsible pupil.",
};

module.exports = [
  {
    file: "lesson-9-1.ts",
    exportName: "lesson91",
    lesson: {
      id: "el11-u9-lesson-9-1",
      code: "9-1",
      title: "Purpose, Audience and Context",
      goal: "I CAN identify a writer's purpose and intended audience, and explain how context and formality shape their language.",
      standards: ["4EA1 Paper 1 Section B", "4EA1 AO1", "4EA1 AO2"],
      vocabulary: [
        { term: "Purpose", definition: "The overall aim a writer has for a text, such as to inform, persuade, advise or entertain." },
        { term: "Audience", definition: "The group of readers a writer is addressing, which shapes every choice they make." },
        { term: "Register", definition: "The level of formality in language, chosen to suit the audience and context." },
        { term: "Tone", definition: "The writer's attitude towards the subject or reader, created through word choice and style." },
        { term: "Context", definition: "The situation in which a text is produced and read, including where, when and why." },
        { term: "Inclusive pronoun", definition: "A pronoun such as 'we' or 'us' that positions the writer and reader as a group." },
      ],
      concepts: [
        {
          id: "el11-u9-purpose-audience",
          title: "Purpose and audience in non-fiction",
          skill: "Identify a writer's purpose and intended audience, and explain how language is adapted to them.",
          sections: [
            {
              heading: "Reading for purpose and audience",
              body: "Before analysing any non-fiction text, ask two questions: **what is the writer trying to do?** (inform, persuade, advise, entertain) and **who are they writing for?** The form gives it away: a letter has a salutation and a formal close, a blog post is conversational and invites comment. The audience then explains the register: the same issue will be argued very differently in a council letter and a local blog.",
            },
            {
              heading: "Adapting language to the reader",
              body: "Writers adapt **vocabulary** (formal nouns versus colloquialisms), **grammar** (full formal sentences versus contractions and fragments), **tone** (detached versus personal) and **structure** (numbered points versus rambling paragraphs). When you analyse, always link a language choice to the audience it is designed to reach: 'proper annoying' would fail in a formal report but builds rapport with blog readers.",
            },
            {
              heading: "Building the answer",
              body: "Use the chain: **purpose** (what the writer wants), **audience** (who they are addressing) and **evidence** (a quotation showing adaptation). For comparison questions, keep the two texts strictly parallel: same point about each before moving to the next.",
            },
          ],
          keyFormulas: [
            { name: "Purpose", statement: "The overall aim of a text: to inform, persuade, advise, argue or entertain a particular readership." },
            { name: "Audience adaptation", statement: "Choices of register, vocabulary, tone and structure made to suit the intended reader." },
            { name: "Form signals", statement: "Salutation and 'Yours faithfully' signal a formal letter; contractions, direct address and invitations to comment signal an informal digital text." },
          ],
          workedExample: {
            problem: "How does the writer of 'The Cycle Lane Conundrum' adapt her language to her audience?",
            solution: "The blogger writes for neighbours she expects to know the issue already, so she skips formal explanation and opens with 'Right, so the council wants to build a cycle lane' — a spoken-style summary rather than a structured introduction. She uses contractions and colloquialisms ('proper annoying', 'a moan in the survey', '8.55 on a Tuesday') that assume shared local knowledge and a relaxed relationship with readers. She also anticipates objection directly ('Before you all lose your minds') and ends by inviting comment, treating the audience as equals in a conversation rather than recipients of instruction.",
          },
          questions: [
            {
              id: "el11-u9-purpose-audience-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LETTER,
              stem: "Read 'A Letter to Residents'. What is the writer's main purpose?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "To advertise the work of the Residents' Association." },
                  { id: "b", text: "To persuade residents to support the proposed cycle lane." },
                  { id: "c", text: "To explain the rules for completing a council survey." },
                  { id: "d", text: "To complain about parking on Marsh Lane." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Purpose", statement: "A writer's purpose is the overall aim of the text." }],
                steps: [
                  { reasoning: "The letter presents arguments for the cycle lane and ends by asking residents to complete the survey 'to indicate whether you support the proposal', so its aim is to win support.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** To persuade residents to support the proposed cycle lane.",
                commonErrors: ["Choosing (c) because the letter mentions a survey; the survey is a means, not the purpose.", "Choosing (d) because parking is discussed; the parking point is acknowledged then answered, not the aim."],
              },
            },
            {
              id: "el11-u9-purpose-audience-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: LETTER,
              stem: "Who is the intended audience of the letter, and what feature of the text shows this? Give two points.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Audience identification", statement: "Identify who a text addresses, then prove it with a feature of the writing." }],
                steps: [
                  { reasoning: "The audience is residents living on or near Marsh Lane, adults with a stake in the road.", evidence: "Dear Resident", marks: 1, markCode: "AO1" },
                  { reasoning: "The formal structure — salutation, collective 'we', courteous request and 'Yours faithfully' — shows the writer expects a formal adult readership.", evidence: "Yours faithfully", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The audience is adult residents of Marsh Lane; the formal letter format, 'Dear Resident' and the close 'Yours faithfully' show it.",
                commonErrors: ["Naming 'the council' as the audience — the council is the subject, not the reader.", "Describing the letter as informal because it is about a local issue."],
              },
            },
            {
              id: "el11-u9-purpose-audience-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: BLOG,
              stem: "Explain how the blogger's language shows she is writing for people she knows.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Colloquial register", statement: "Informal vocabulary and contractions signal a familiar, conversational relationship with the reader." }],
                steps: [
                  { reasoning: "She uses spoken-style openings and contractions ('Right, so', \"don't\", \"you're\"), as if talking rather than writing formally.", marks: 1, markCode: "AO2" },
                  { reasoning: "She assumes shared local knowledge — '8.55 on a Tuesday' — which only neighbours would fully recognise.", marks: 1, markCode: "AO1" },
                  { reasoning: "She ends by inviting comment ('What's everyone else think?'), treating readers as equals in an ongoing local conversation.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The blogger uses contractions, colloquialisms like 'proper annoying' and 'a moan', assumes readers share her local experience of parking, and invites comment — all signs she writes for neighbours she knows.",
                commonErrors: ["Listing informal features without linking them to an audience.", "Claiming the blog is formal because it discusses a council proposal."],
              },
            },
            {
              id: "el11-u9-purpose-audience-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: BOTH,
              stem: "Compare how the letter writer and the blogger adapt their language to their audiences.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Parallel comparison", statement: "Keep the two texts strictly parallel: same point about each before moving on." },
                  { kind: "technique", name: "Register", statement: "The level of formality is the clearest marker of audience adaptation." },
                ],
                steps: [
                  { reasoning: "The letter writer uses a formal collective voice ('We are writing on behalf of') suited to adult residents and officialdom.", evidence: "We would be grateful for your support", marks: 1, markCode: "AO2" },
                  { reasoning: "She acknowledges the opposing concern politely and answers it with evidence, suiting an audience she cannot assume agrees with her.", evidence: "We acknowledge that some residents have concerns", marks: 1, markCode: "AO1" },
                  { reasoning: "The blogger opens conversationally ('Right, so') and assumes the audience already knows the issue, suiting neighbours.", marks: 1, markCode: "AO2" },
                  { reasoning: "She voices the readers' objection herself ('proper annoying', 'lose your minds'), showing she shares their concerns.", marks: 1, markCode: "AO1" },
                  { reasoning: "The blogger ends by asking for views, treating the audience as participants; the letter ends with a formal request and deadline, treating them as respondents to be organised.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Both adapt to their audience: the letter writer chooses formal, evidence-led, collective persuasion for adult residents, while the blogger chooses conversational, opinion-led, inclusive address for neighbours she expects to reply.",
                commonErrors: ["Comparing content rather than language and audience.", "Writing two separate analyses without linking the texts."],
              },
            },
            {
              id: "el11-u9-purpose-audience-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: BLOG,
              stem: "How does the blogger present herself as a member of the community rather than an outsider? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Inclusive voice", statement: "Sharing personal experience and local knowledge positions the writer as one of the community." },
                  { kind: "skill", name: "Evidence-led comment", statement: "Every claim about the writer's stance should be tied to a precise quotation." },
                ],
                steps: [
                  { reasoning: "She speaks from personal stake — 'my kid cycles to school' — so her view comes from inside the community, not authority.", evidence: "my kid cycles to school", marks: 1, markCode: "AO1" },
                  { reasoning: "She shares specific local experience ('8.55 on a Tuesday'), proving she lives with the problem.", evidence: "trying to park at 8.55 on a Tuesday", marks: 2, markCode: "AO2" },
                  { reasoning: "She voices residents' frustration fairly before weighing it, showing she shares rather than dismisses their view.", evidence: "proper annoying", marks: 1, markCode: "AO1" },
                  { reasoning: "She treats the issue as undecided — 'seeing what actually happens' — avoiding the certainty of an outsider lecturing.", marks: 1, markCode: "AO2" },
                  { reasoning: "She closes by inviting others' views, confirming she sees herself as part of the discussion, not above it.", evidence: "What's everyone else think?", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The blogger grounds her argument in personal and local experience ('my kid', '8.55 on a Tuesday'), voices the community's own objections, stays uncertain rather than dogmatic, and invites comment — all of which place her inside the community.",
                levels: bands(6, "comment on how the writer positions herself for her audience"),
                commonErrors: ["Saying she is 'relatable' without evidence.", "Ignoring the balance of her argument and calling her simply biased."],
              },
            },
            {
              id: "el11-u9-purpose-audience-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: BOTH,
              stem: "Read both texts on the proposed cycle lane.",
              parts: [
                { label: "a", prompt: "State the main purpose of each text.", marks: 4 },
                { label: "b", prompt: "Explain how the formality of each text affects its likely impact on its audience.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Purpose", statement: "The overall aim a writer has for a text." },
                  { kind: "technique", name: "Register and impact", statement: "Formality can create authority or distance; informality can create rapport or seem unserious, depending on audience." },
                ],
                steps: [
                  { part: "a", reasoning: "The letter aims to persuade residents to support the cycle lane; the blog aims to share a view and invite comment.", evidence: "indicate whether you support the proposal", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "Credit a precise contrast: persuasion versus discussion; the letter requests action, the blog opens a conversation.", evidence: "What's everyone else think?", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The formal register gives the letter authority and credibility with adult residents and official bodies.", evidence: "We are writing on behalf of the Marsh Lane Residents' Association", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The informal register builds rapport and makes readers feel the blogger is one of them.", evidence: "Right, so the council wants to build a cycle lane", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "A top answer weighs the trade-off: formality persuades by sounding official but can feel distant; informality engages but may seem less authoritative.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "(a) The letter persuades residents to support the cycle lane; the blog shares a personal view and invites comment. (b) Formal register lends the letter authority and suits official persuasion; informal register builds rapport and suits a neighbourly audience, though it may carry less weight with officials.",
                levels: bands(6, "evaluation of formality and its effect on the reader", "b"),
                commonErrors: ["In (a) giving purposes that are too vague ('to talk about the lane').", "In (b) describing register without discussing its effect on readers."],
              },
            },
          ],
        },
        {
          id: "el11-u9-context-register",
          title: "Context and register",
          skill: "Explain how context and formality shape a writer's tone and choice of language.",
          sections: [
            {
              heading: "What context does",
              body: "Context is everything around the text: where it appears (a letter, a blog, a speech), when it is written and why. The same writer will sound different in each. A council press release is formal and impersonal; the same issue on social media is personal and fast. Always ask: **what situation produced this text, and what situation will it be read in?**",
            },
            {
              heading: "Register in practice",
              body: "Formal register uses full forms ('do not', 'cannot'), Latinate vocabulary ('approximately', 'regarding'), passive constructions and complete sentences. Informal register uses contractions, colloquialisms, fragments and direct questions. Neither is 'better' — each fits its context. The skill is to name the register precisely and show the evidence for it.",
            },
            {
              heading: "Tone follows context",
              body: "Register and tone are linked but not identical: register is how formal the language is; tone is the attitude behind it. A formal text can be warm or cold; an informal text can be jokey or bitter. When analysing, separate them: identify the register first, then the tone it carries.",
            },
          ],
          keyFormulas: [
            { name: "Register", statement: "The level of formality chosen to suit context and audience, from colloquial to official." },
            { name: "Formal markers", statement: "Full forms, Latinate vocabulary, passive voice, formal address and close." },
            { name: "Tone versus register", statement: "Register describes formality; tone describes attitude. A text can be formal in register and warm or critical in tone." },
          ],
          workedExample: {
            problem: "How does context shape the tone of 'A Letter to Residents'?",
            solution: "The letter exists in a formal civic context: it is sent by an association to residents about a council proposal, so the writer must sound official, fair and convincing. That context produces a formal register — 'We are writing on behalf of', 'we would be grateful', 'Yours faithfully' — and a measured, diplomatic tone. Even the disagreement about parking is handled politely: 'We acknowledge that some residents have concerns', which suits an audience that may not agree and an issue that affects the writer's own credibility.",
          },
          questions: [
            {
              id: "el11-u9-context-register-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LETTER,
              stem: "Which phrase from 'A Letter to Residents' best shows the formal register of the letter?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "'hear me out'" },
                  { id: "b", text: "'proper annoying'" },
                  { id: "c", text: "'we would be grateful for your support'" },
                  { id: "d", text: "'What's everyone else think?'" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Register", statement: "Register is the level of formality in language." }],
                steps: [
                  { reasoning: "'We would be grateful for your support' uses a formal modal construction and courteous phrasing typical of official letters; the other options are colloquial.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "**(c)** 'we would be grateful for your support' — a polite, formal construction suited to an official letter.",
                commonErrors: ["Picking a phrase about the issue rather than one showing formality."],
              },
            },
            {
              id: "el11-u9-context-register-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: LETTER,
              stem: "Give two features of formal register in the letter.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Formal markers", statement: "Full forms, formal vocabulary, collective pronouns and formal openers and closes mark formal register." }],
                steps: [
                  { reasoning: "Credit any two: formal salutation 'Dear Resident' and close 'Yours faithfully'; courteous modal 'would be grateful'; formal vocabulary 'regarding', 'proposed', 'segregated'; collective 'we' representing the association.", evidence: "Yours faithfully", marks: 1, markCode: "AO2" },
                  { reasoning: "Credit a second distinct feature with evidence.", evidence: "regarding the proposed cycle lane", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Any two of: 'Dear Resident'/'Yours faithfully' frame; 'would be grateful' courteous modal; formal vocabulary such as 'regarding' and 'segregated'; collective 'we' as the association.",
                commonErrors: ["Listing features without quotation or explanation.", "Calling the letter 'chatty' because it mentions school-run times."],
              },
            },
            {
              id: "el11-u9-context-register-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: BLOG,
              stem: "How does the context of a local blog affect the blogger's tone and word choice?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Digital local context", statement: "A blog post invites informal, personal, conversational writing addressed to a known community." }],
                steps: [
                  { reasoning: "The blog context allows personal anecdote ('my kid') that a formal letter would exclude.", marks: 1, markCode: "AO1" },
                  { reasoning: "Colloquial vocabulary — 'nightmare', 'proper annoying', 'dodgy', 'a moan' — suits a relaxed local readership.", evidence: "proper annoying", marks: 1, markCode: "AO2" },
                  { reasoning: "Contractions, fragments and a closing question ('What's everyone else think?') create a conversational tone appropriate to comments and replies.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The blog context produces an informal, conversational tone: personal anecdote, colloquialisms like 'proper annoying' and 'dodgy', contractions, and a direct invitation to comment.",
                commonErrors: ["Describing the context vaguely as 'online' without linking it to language choices."],
              },
            },
            {
              id: "el11-u9-context-register-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: BOTH,
              stem: "How does tone differ between the two texts, and how do the writers create it?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Tone creation", statement: "Tone is built from word choice, sentence shape, rhythm and the writer's attitude to the reader." }],
                steps: [
                  { reasoning: "The letter's tone is measured and diplomatic: it acknowledges disagreement ('We acknowledge that some residents have concerns') before answering it.", evidence: "We acknowledge that some residents have concerns", marks: 1, markCode: "AO2" },
                  { reasoning: "Formal phrasing — 'we would be grateful', 'we therefore ask' — keeps the letter courteous even while persuading.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger's tone is warm but combative: 'Right, so' and 'hear me out' sound confrontational yet friendly.", evidence: "hear me out", marks: 1, markCode: "AO1" },
                  { reasoning: "Her exaggeration — 'a nightmare', 'proper annoying', 'lose your minds' — creates a jokey, exasperated tone.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger ends unsure ('maybe it's worth a moan'), softening her tone; the letter ends certain and directive ('We therefore ask you').", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "The letter is measured, courteous and authoritative; the blog is exasperated, jokey and uncertain. The letter builds tone through formal phrasing and polite concession; the blog through colloquialisms, exaggeration and a conversational close.",
                commonErrors: ["Saying one tone is 'better' rather than analysing how each is created.", "Confusing tone with register — describe attitude, not just formality."],
              },
            },
            {
              id: "el11-u9-context-register-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: BOTH,
              stem: "Explain how the same issue — the proposed cycle lane — is framed differently because of each writer's context.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Context shapes framing", statement: "The situation a text is written for determines what counts as relevant evidence and persuasive language." },
                  { kind: "technique", name: "Framing", statement: "The same facts can be presented as a safety benefit, a parking loss, or a community choice depending on the writer's purpose." },
                ],
                steps: [
                  { reasoning: "The letter writer frames the lane as a safety and congestion benefit for children, suiting an official persuasive context.", evidence: "provide a safe route for children", marks: 1, markCode: "AO1" },
                  { reasoning: "She must answer the parking objection because her formal context demands fairness: 'We acknowledge that some residents have concerns'.", marks: 2, markCode: "AO2" },
                  { reasoning: "She cites official evidence — 'the consultation documents show that only fourteen spaces' — which formal persuasion requires.", marks: 1, markCode: "AO2" },
                  { reasoning: "The blogger frames the same issue around daily inconvenience — 'proper annoying', '8.55 on a Tuesday' — suiting an informal local context.", marks: 1, markCode: "AO1" },
                  { reasoning: "She treats the council's figure skeptically ('Fourteen, whatever that means'), which is acceptable in a blog but would undermine a formal letter.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Context determines framing: the letter presents the lane as a formal, evidence-based safety proposal that must answer objections fairly, while the blog presents it as a local inconvenience and open question voiced in everyday language.",
                levels: bands(6, "comment on how context shapes the presentation of the issue"),
                commonErrors: ["Saying the writers 'disagree' without analysing how context produces the disagreement.", "Ignoring the formal requirement to acknowledge the opposing view."],
              },
            },
            {
              id: "el11-u9-context-register-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: BOTH,
              stem: "Read both texts on the proposed cycle lane.",
              parts: [
                { label: "a", prompt: "Identify the register of each text and give one piece of evidence for each.", marks: 4 },
                { label: "b", prompt: "Analyse how each writer's register shapes the reader's likely response.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Register", statement: "The level of formality in language, chosen to suit context." },
                  { kind: "skill", name: "Effect of register", statement: "Link the register to a specific likely response: trust, distance, rapport or scepticism." },
                ],
                steps: [
                  { part: "a", reasoning: "The letter is formal: evidence — 'Dear Resident', 'We are writing on behalf of', 'Yours faithfully'.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "The blog is informal: evidence — 'Right, so', 'proper annoying', 'What's everyone else think?'.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The formal register may make readers trust the letter's facts and fairness but feel it is distant or official.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The informal register may make readers feel the blogger shares their frustrations, building rapport and inviting agreement.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "A top answer weighs the limits: informality can seem unserious to officials; formality can seem remote to neighbours.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "(a) Text 1 is formal ('Dear Resident', 'Yours faithfully'); Text 2 is informal ('Right, so', 'proper annoying'). (b) The formal register earns trust and authority but may feel distant; the informal register earns rapport and engagement but may seem less authoritative.",
                levels: bands(6, "analysis of register and its effect on readers", "b"),
                commonErrors: ["In (a) naming the register without evidence.", "In (b) asserting effects without explaining how the register produces them."],
              },
            },
          ],
        },
      ],
    },
  },
  {
    file: "lesson-9-2.ts",
    exportName: "lesson92",
    lesson: {
      id: "el11-u9-lesson-9-2",
      code: "9-2",
      title: "Language of Persuasion",
      goal: "I CAN identify and explain persuasive techniques such as rhetorical questions, the rule of three, emotive language and inclusive pronouns, in analysis and in my own writing.",
      standards: ["4EA1 Paper 1 Section B", "4EA1 Paper 2", "4EA1 AO2", "4EA1 AO4"],
      vocabulary: [
        { term: "Rhetorical question", definition: "A question asked for effect rather than to get an answer; it guides the reader to the writer's intended conclusion." },
        { term: "Rule of three", definition: "Grouping ideas or words in threes, which feels complete and memorable." },
        { term: "Emotive language", definition: "Words chosen to trigger an emotional response, such as 'crisis', 'nightmare' or 'future'." },
        { term: "Inclusive pronoun", definition: "'We', 'us' and 'our', used to bind writer and reader into one group." },
        { term: "Ethos", definition: "Persuasion through credibility and authority: qualifications, track record, audited status." },
        { term: "Pathos", definition: "Persuasion through emotion: stories, vivid detail and appeals to sympathy." },
        { term: "Logos", definition: "Persuasion through reason and evidence: statistics, facts and logic." },
      ],
      concepts: [
        {
          id: "el11-u9-rhetorical-devices",
          title: "Rhetorical devices in persuasion",
          skill: "Identify rhetorical questions, the rule of three, anaphora and short sentences, and explain their persuasive effect.",
          sections: [
            {
              heading: "The writer's toolkit",
              body: "Persuasive writers use recurring devices: the **rhetorical question** (to make readers think the writer's thought), the **rule of three** (three items feel complete), **anaphora** (repeated openings create rhythm and insistence) and **short sentences** (to punch a point home). In analysis, name the device, quote it, then explain the effect on the reader.",
            },
            {
              heading: "Statistics and emotion together",
              body: "Strong persuasion rarely uses one appeal alone. A statistic gives the claim weight ('eight million tonnes'), while emotive framing gives it urgency ('a crisis we are choosing to ignore'). When analysing, ask what each element contributes: numbers convince the head, emotion moves the heart, and together they are hard to resist.",
            },
            {
              heading: "Spotting the device",
              body: "Do not just spot devices — explain them. 'The writer uses a rhetorical question' earns little; 'the rhetorical question \"How long will we wait?\" makes delay feel absurd and pushes the reader toward action' earns the mark. Always finish with the effect.",
            },
          ],
          keyFormulas: [
            { name: "Rhetorical question", statement: "A question asked for effect; the answer is assumed, so the reader is led to the writer's conclusion." },
            { name: "Rule of three", statement: "Three parallel items create a sense of completeness and are easier to remember." },
            { name: "Anaphora", statement: "Repetition of the same opening words in successive sentences, creating rhythm and emphasis." },
          ],
          workedExample: {
            problem: "How does the writer of 'The Case for Action' use the rule of three in the second paragraph?",
            solution: "The writer lists three government measures — 'a national deposit scheme', 'refill stations on every site' and 'community recycling hubs' — so the proposed action feels comprehensive and achievable rather than vague. The same paragraph repeats the pattern with three promised benefits: 'transform our high streets, create thousands of green jobs and cut household waste'. The triple structure gives the argument momentum: each trio feels complete, and the parallel grammar makes the benefits sound like a package deal the reader cannot easily refuse.",
          },
          questions: [
            {
              id: "el11-u9-rhetorical-devices-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: PERSUASIVE,
              stem: "Which of the following is a rhetorical question in 'The Case for Action'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "'Every year, eight million tonnes of plastic enter our oceans.'" },
                  { id: "b", text: "'What more do we need?'" },
                  { id: "c", text: "'The Government must introduce a national deposit scheme.'" },
                  { id: "d", text: "'Together, we can turn this tide.'" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Rhetorical question", statement: "A question asked for effect, not to obtain an answer." }],
                steps: [
                  { reasoning: "'What more do we need?' is a question the writer answers himself — nothing more is needed — so it is rhetorical.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "**(b)** 'What more do we need?'",
                commonErrors: ["Choosing any sentence with 'must' or 'we' rather than an actual question form."],
              },
            },
            {
              id: "el11-u9-rhetorical-devices-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: PERSUASIVE,
              stem: "How many rhetorical questions appear in the whole extract? Give your answer as a number.",
              response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
              markscheme: {
                principles: [{ kind: "skill", name: "Accurate counting", statement: "Identify every question form, then check each is rhetorical rather than information-seeking." }],
                steps: [
                  { reasoning: "Two question forms appear: 'What more do we need?' and 'How long will we wait?' Both are answered by the writer's own argument, so both are rhetorical.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "2",
                commonErrors: ["Counting 'That is not a statistic' as a question.", "Missing 'What more do we need?' because it lacks a question mark feel."],
              },
            },
            {
              id: "el11-u9-rhetorical-devices-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: PERSUASIVE,
              stem: "Explain how the writer uses the rule of three in the second paragraph.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Rule of three", statement: "Three parallel items feel complete and memorable." }],
                steps: [
                  { reasoning: "The writer lists three measures the Government 'must' take: deposit scheme, refill stations, recycling hubs.", evidence: "a national deposit scheme, require supermarkets to offer refill stations on every site, and fund community recycling hubs", marks: 1, markCode: "AO1" },
                  { reasoning: "The same paragraph lists three benefits: transform high streets, create jobs, cut waste.", evidence: "transform our high streets, create thousands of green jobs and cut household waste", marks: 1, markCode: "AO2" },
                  { reasoning: "The triple pattern makes the action feel comprehensive and the rewards feel like a package, strengthening persuasion.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The writer uses two rules of three — three government measures and three promised benefits — so the proposal feels complete, achievable and rewarding.",
                commonErrors: ["Spotting 'three' without quoting the parallel items.", "Saying it 'sounds good' without explaining why three works."],
              },
            },
            {
              id: "el11-u9-rhetorical-devices-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: PERSUASIVE,
              stem: "Analyse the effect of the short sentences in the first paragraph.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sentence length for effect", statement: "Short sentences slow the reader down or punch a point home; they create emphasis and urgency." }],
                steps: [
                  { reasoning: "'That is not a statistic; it is a crisis' uses a short, balanced contrast to deflate the number and inflate the threat.", evidence: "That is not a statistic; it is a crisis we are choosing to ignore", marks: 2, markCode: "AO2" },
                  { reasoning: "'We have the technology. We have the knowledge.' repeats a short opening (anaphora), building insistence.", evidence: "We have the technology. We have the knowledge.", marks: 1, markCode: "AO2" },
                  { reasoning: "'What more do we need?' is a short question that makes the reader feel the answer is obvious.", marks: 1, markCode: "AO1" },
                  { reasoning: "Together the short sentences create urgency and momentum, pushing the reader toward agreement before the argument even begins.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The short sentences — 'That is not a statistic; it is a crisis', 'We have the technology. We have the knowledge.' and 'What more do we need?' — use contrast, repetition and a clipped question to create urgency and make the writer's point feel inevitable.",
                commonErrors: ["Listing short sentences without explaining their effect.", "Ignoring the anaphora in 'We have...'"],
              },
            },
            {
              id: "el11-u9-rhetorical-devices-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: PERSUASIVE,
              stem: "How does the writer use inclusive pronouns to involve the reader? Support your answer with evidence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Inclusive pronouns", statement: "'We', 'us' and 'our' bind writer and reader into one group with shared responsibility." },
                  { kind: "skill", name: "Effect-led analysis", statement: "Explain what the pronoun makes the reader feel or do, not just that it appears." },
                ],
                steps: [
                  { reasoning: "'we are choosing to ignore' makes the reader complicit in the crisis, so inaction feels like their own failure.", evidence: "a crisis we are choosing to ignore", marks: 2, markCode: "AO2" },
                  { reasoning: "'our oceans' and 'our high streets' extend ownership of the problem to everyone.", evidence: "enter our oceans", marks: 1, markCode: "AO1" },
                  { reasoning: "'I urge every reader' briefly separates the writer as leader, then 'we can turn this tide' reunites everyone in a shared mission.", evidence: "Together, we can turn this tide", marks: 2, markCode: "AO2" },
                  { reasoning: "The shift from accusation ('we are choosing') to shared hope ('we can turn') gives the reader a role in the solution.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "The writer uses 'we' to make the reader complicit ('we are choosing to ignore'), to share ownership ('our oceans'), and finally to offer a shared mission ('Together, we can turn this tide'), moving the reader from guilt to participation.",
                levels: bands(6, "comment on how pronouns involve the reader"),
                commonErrors: ["Listing 'we' without explaining its effect.", "Missing the shift from blame to shared purpose."],
              },
            },
            {
              id: "el11-u9-rhetorical-devices-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: PERSUASIVE,
              stem: "Read 'The Case for Action'.",
              parts: [
                { label: "a", prompt: "Identify two persuasive devices used in the extract and give an example of each.", marks: 4 },
                { label: "b", prompt: "Explain how the writer combines statistics with emotional appeal to persuade.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Persuasive devices", statement: "Name the device precisely and quote it before explaining its effect." },
                  { kind: "context", name: "Dual appeal", statement: "Statistics convince the head; emotive framing moves the heart; together they are stronger than either alone." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit any two devices with an accurate quotation: rhetorical question ('How long will we wait?'), rule of three ('a national deposit scheme ... refill stations ... recycling hubs'), anaphora ('We have the technology. We have the knowledge.'), short sentences, inclusive pronouns.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Credit a second distinct device with evidence.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The statistic 'eight million tonnes' gives the claim scale and credibility (logos).", evidence: "eight million tonnes of plastic", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "The emotional framing — 'a crisis we are choosing to ignore' — turns the number into guilt and urgency (pathos).", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "A top answer explains the combination: the number convinces, the emotion compels, and the reader cannot easily dismiss either.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "(a) Any two of: rhetorical question, rule of three, anaphora, short sentences, inclusive pronouns — each with a quotation. (b) The writer pairs the statistic 'eight million tonnes' with emotive framing ('a crisis we are choosing to ignore') so the argument convinces logically and moves emotionally at once.",
                levels: bands(6, "analysis of how statistics and emotion combine", "b"),
                commonErrors: ["In (a) naming devices without quotations.", "In (b) treating statistics and emotion as separate rather than combined."],
              },
            },
          ],
        },
        {
          id: "el11-u9-emotive-appeal",
          title: "Emotive language, ethos and the reader's role",
          skill: "Analyse how writers combine emotional stories, statistics and credibility to persuade, and position the reader.",
          sections: [
            {
              heading: "Three appeals",
              body: "Classical rhetoric names three ways to persuade: **logos** (reason and evidence — statistics, facts), **pathos** (emotion — stories, vivid detail, sympathy) and **ethos** (credibility — qualifications, audited status, 'we are a registered charity'). The strongest texts weave all three. In analysis, identify which appeal each quotation serves and how they reinforce each other.",
            },
            {
              heading: "The case study technique",
              body: "A single named person ('Meet Amina') turns an abstract statistic into a human story. The writer gives her a concrete detail — four kilometres, no books, reading to her brother — so the reader feels the donation's effect personally. This is pathos at its most economical: one story can outweigh a page of figures.",
            },
            {
              heading: "Positioning the reader",
              body: "Persuasive writers assign the reader a role: hero ('supporters like you'), culprit ('without you'), or partner ('Together, we can'). Notice how the charity appeal moves from gratitude ('your donations helped') to responsibility ('none of this happens without you') to urgency ('Please give today').",
            },
          ],
          keyFormulas: [
            { name: "Logos", statement: "Persuasion through reason: statistics, facts, expert evidence." },
            { name: "Pathos", statement: "Persuasion through emotion: stories, vivid detail, appeals to sympathy or guilt." },
            { name: "Ethos", statement: "Persuasion through credibility: qualifications, track record, transparency." },
          ],
          workedExample: {
            problem: "How does 'Give a Child a Future' combine emotional and factual persuasion?",
            solution: "The appeal opens with a statistic — '12,400 children' — and a small concrete cost, 'the price of a coffee each month', making giving feel easy (logos). It then humanises the cause with 'Meet Amina', whose story — four kilometres, no books, reading to her brother — makes the abstract figure felt personally (pathos). Finally it establishes trust with 'a registered charity, audited annually and partnered with local councils' (ethos), so the reader believes the money will do good. The three appeals are layered: reason makes it sensible, emotion makes it urgent, credibility makes it safe.",
          },
          questions: [
            {
              id: "el11-u9-emotive-appeal-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: CHARITY,
              stem: "Which quotation from 'Give a Child a Future' best shows an appeal to emotion (pathos)?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "'your donations helped 12,400 children stay in school'" },
                  { id: "b", text: "'she now reads to her younger brother every evening'" },
                  { id: "c", text: "'We are a registered charity, audited annually'" },
                  { id: "d", text: "'partnered with local councils'" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Pathos", statement: "Persuasion through emotion, usually via human stories and vivid detail." }],
                steps: [
                  { reasoning: "The image of Amina reading to her brother is a warm human detail designed to move the reader; the others are statistics or credibility.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** 'she now reads to her younger brother every evening' — an emotional human detail.",
                commonErrors: ["Choosing the statistic (logos) or the charity status (ethos) as emotional."],
              },
            },
            {
              id: "el11-u9-emotive-appeal-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: CHARITY,
              stem: "Identify one statistic in the extract and explain how it persuades.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Statistical persuasion", statement: "A precise figure makes a claim feel measured, proven and significant." }],
                steps: [
                  { reasoning: "Credit '12,400 children' or 'four kilometres' or 'three regions' as the statistic.", evidence: "12,400 children", marks: 1, markCode: "AO1" },
                  { reasoning: "Explain the effect: precision makes the charity's impact seem real and accountable rather than vague.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "'12,400 children' (or 'four kilometres') gives the appeal factual weight: the precise figure makes the charity's work feel measurable and trustworthy.",
                commonErrors: ["Quoting without explaining the persuasive effect."],
              },
            },
            {
              id: "el11-u9-emotive-appeal-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: CHARITY,
              stem: "How does the writer establish credibility (ethos)?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Ethos", statement: "Credibility is built through verifiable claims: registration, audits, partnerships." }],
                steps: [
                  { reasoning: "The writer states the charity is 'registered' and 'audited annually' — claims a donor can verify.", evidence: "a registered charity, audited annually", marks: 1, markCode: "AO1" },
                  { reasoning: "Mention of partnerships with 'local councils' suggests official approval and reach.", evidence: "partnered with local councils", marks: 1, markCode: "AO2" },
                  { reasoning: "Framing past success as 'your donations helped' credits the reader, building trust and goodwill before the new request.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Ethos is built through 'a registered charity, audited annually', partnerships with 'local councils', and by crediting the reader's past donations, all of which make the organisation seem accountable and trustworthy.",
                commonErrors: ["Confusing ethos with emotion; ethos is about credibility, not feeling."],
              },
            },
            {
              id: "el11-u9-emotive-appeal-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: CHARITY,
              stem: "How does the writer balance emotional and factual persuasion?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Balanced appeal", statement: "Emotion draws the reader in; facts and credibility convince them the cause is real and safe to support." }],
                steps: [
                  { reasoning: "Emotion opens the appeal: 'Give a child a future' and the story of Amina make the cause personal.", evidence: "Meet Amina", marks: 1, markCode: "AO1" },
                  { reasoning: "Facts follow quickly: '12,400 children' and 'four kilometres' ground the emotion in measurable reality.", marks: 1, markCode: "AO2" },
                  { reasoning: "The emotional peak — 'reads to her younger brother', 'dreams of becoming a doctor' — is immediately followed by credibility ('registered charity, audited').", marks: 2, markCode: "AO2" },
                  { reasoning: "The balance prevents manipulation: feeling is checked by accountability, so the reader trusts rather than resents the appeal.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The writer alternates: emotion opens ('Give a child a future', Amina's story), facts and figures ground it ('12,400 children'), and credibility closes the loop ('audited annually'). The balance makes the appeal feel both moving and trustworthy.",
                commonErrors: ["Describing only the emotional or only the factual elements.", "Saying the writer is 'manipulative' without weighing the credibility checks."],
              },
            },
            {
              id: "el11-u9-emotive-appeal-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: CHARITY,
              stem: "How does the writer position the reader's responsibilities? Support your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Reader positioning", statement: "Writers assign the reader a role — hero, culprit or partner — through pronouns and direct address." },
                  { kind: "skill", name: "Tracing the shift", statement: "Track how the reader's role changes across the text." },
                ],
                steps: [
                  { reasoning: "First the reader is the hero: 'your donations helped 12,400 children' credits them for past good.", evidence: "your donations helped", marks: 2, markCode: "AO1" },
                  { reasoning: "Then Amina's story makes inaction feel like abandonment — the reader is positioned as someone who can change her life.", marks: 1, markCode: "AO2" },
                  { reasoning: "The phrase 'supporters like you' flatters the reader into identifying with the solution.", evidence: "supporters like you", marks: 1, markCode: "AO2" },
                  { reasoning: "Finally responsibility is stated plainly: 'none of this happens without you' assigns the outcome to the reader.", marks: 1, markCode: "AO1" },
                  { reasoning: "The progression — gratitude, opportunity, obligation — makes giving feel like the natural next step.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The writer moves the reader from credited hero ('your donations helped') to potential rescuer ('supporters like you') to responsible agent ('none of this happens without you'), so giving feels like continuing a role the reader already plays.",
                levels: bands(6, "comment on how the reader is positioned"),
                commonErrors: ["Saying the writer 'asks for money' without analysing the assigned role.", "Missing the shift from praise to obligation."],
              },
            },
            {
              id: "el11-u9-emotive-appeal-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: CHARITY,
              stem: "Read 'Give a Child a Future'.",
              parts: [
                { label: "a", prompt: "Identify two pieces of evidence in the extract and explain whether each persuades through emotion or through authority and fact.", marks: 4 },
                { label: "b", prompt: "Evaluate how effectively the appeal persuades its audience.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Classify the appeal", statement: "Sort each quotation into pathos (emotion), logos (fact) or ethos (credibility)." },
                  { kind: "skill", name: "Evaluation", statement: "Judge effectiveness by audience, balance and likely response — not by personal taste." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit one emotion example ('Meet Amina', 'reads to her younger brother') correctly classified as pathos.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Credit one fact/authority example ('12,400 children', 'audited annually', 'partnered with local councils') correctly classified as logos or ethos.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Effective: the layered appeals (emotion + statistic + credibility) cover different reader concerns.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Effective: the small concrete cost ('price of a coffee') lowers the barrier to giving.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "A critical answer might note the single case study (Amina) could be seen as unrepresentative, or that urgency is mild — balanced judgement earns credit.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "(a) e.g. 'Meet Amina' is pathos; '12,400 children' or 'audited annually' is logos/ethos. (b) The appeal is highly effective: it combines emotion, a concrete small cost and verifiable credibility, though a critical reader might question whether one child's story represents the whole cause.",
                levels: bands(6, "evaluation of the appeal's effectiveness", "b"),
                commonErrors: ["In (a) misclassifying statistics as emotional or stories as factual.", "In (b) giving an unsupported verdict of 'effective' or 'not effective'."],
              },
            },
          ],
        },
      ],
    },
  },
  {
    file: "lesson-9-3.ts",
    exportName: "lesson93",
    lesson: {
      id: "el11-u9-lesson-9-3",
      code: "9-3",
      title: "Evaluating Viewpoints and Bias",
      goal: "I CAN identify a writer's viewpoint and biased language in non-fiction texts, and write evaluative comment that weighs competing arguments.",
      standards: ["4EA1 Paper 1 Section B", "4EA1 AO1", "4EA1 AO3"],
      vocabulary: [
        { term: "Viewpoint", definition: "The position or opinion a writer is arguing for in a text." },
        { term: "Bias", definition: "A tendency to favour one side, shown through selection, language and omission." },
        { term: "Loaded language", definition: "Words with strong emotional charge used to sway the reader, e.g. 'blanket bans', 'portal to distraction'." },
        { term: "Counter-argument", definition: "The opposing view a writer acknowledges before answering it." },
        { term: "Straw man", definition: "Misrepresenting an opponent's argument to make it easier to defeat." },
        { term: "Evaluation", definition: "Weighing how convincing, balanced and well-supported a viewpoint is." },
      ],
      concepts: [
        {
          id: "el11-u9-viewpoint-bias",
          title: "Viewpoint and biased language",
          skill: "Identify a writer's viewpoint, spot loaded and biased language, and analyse how the writer handles the opposing view.",
          sections: [
            {
              heading: "Finding the viewpoint",
              body: "A viewpoint is the position the writer wants you to accept — 'Schools should ban mobile phones outright' is a viewpoint stated plainly. Often it is implied rather than stated: look for evaluative adjectives, one-sided evidence and loaded nouns. Ask: **what does this writer want me to believe?**",
            },
            {
              heading: "Loaded and biased language",
              body: "Loaded words carry attitude: 'collapsed', 'portal to distraction', 'glowing screen' all frame phones negatively; 'powerful learning tool', 'blanket bans' frame them positively. Bias also shows in **selection** — one anecdote ('My son's concentration has collapsed') treated as proof — and **omission** — no mention of the other side's best evidence.",
            },
            {
              heading: "The counter-argument test",
              body: "A fair-minded writer acknowledges the opposing view ('Some say phones can support learning. Perhaps.') before answering it. A weak writer dismisses it ('Blanket bans ... ignore what research actually shows'). The way a writer treats the counter-argument is one of the best clues to their bias and their confidence.",
            },
          ],
          keyFormulas: [
            { name: "Viewpoint", statement: "The position a writer argues for, stated or implied through evaluative language and selection." },
            { name: "Loaded language", statement: "Words carrying emotional charge that frame a subject favourably or unfavourably." },
            { name: "Counter-argument", statement: "The opposing view acknowledged before being answered; its treatment reveals bias." },
          ],
          workedExample: {
            problem: "How does 'Phones Out' reveal its viewpoint and bias?",
            solution: "The viewpoint is stated in the opening: 'Schools should ban mobile phones outright.' The writer supports it with loaded language — 'collapsed', 'portal to distraction', 'glowing screen', 'never get back' — all of which frame phones as dangerous. Bias appears in the evidence: a single anecdote about 'my son' and unnamed 'teachers' is treated as proof ('The evidence is plain'). The counter-argument is dismissed in two words — 'Perhaps.' — and answered with a claim about 'burden of proof' rather than evidence, showing the writer has decided before weighing the other side.",
          },
          questions: [
            {
              id: "el11-u9-viewpoint-bias-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: PHONES_A,
              stem: "Which phrase from 'Phones Out' most clearly reveals the writer's viewpoint?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "'teachers up and down the country report the same pattern'" },
                  { id: "b", text: "'A phone in a pocket is a portal to distraction'" },
                  { id: "c", text: "'Some say phones can support learning'" },
                  { id: "d", text: "'the burden of proof lies with those who want to introduce the distraction'" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Viewpoint", statement: "The position a writer is arguing for, often revealed by evaluative language." }],
                steps: [
                  { reasoning: "'A portal to distraction' is a loaded metaphor that frames phones as harmful — it reveals the writer's anti-phone stance directly.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "**(b)** 'A phone in a pocket is a portal to distraction' — a loaded metaphor revealing the writer's negative viewpoint.",
                commonErrors: ["Choosing (c), which reports the opposing view rather than the writer's own.", "Choosing (d), which is an argument about proof, not the viewpoint itself."],
              },
            },
            {
              id: "el11-u9-viewpoint-bias-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: PHONES_A,
              stem: "Give two examples of loaded or emotive language in 'Phones Out' and state the attitude each reveals.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Loaded language", statement: "Emotive words frame a subject favourably or unfavourably." }],
                steps: [
                  { reasoning: "Credit one loaded phrase — 'collapsed', 'portal to distraction', 'glowing screen', 'never get back' — and its negative attitude.", evidence: "portal to distraction", marks: 1, markCode: "AO2" },
                  { reasoning: "Credit a second phrase with its attitude, e.g. 'collapsed' suggests harm; 'never get back' suggests irreversible loss.", evidence: "a lesson the child will never get back", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "e.g. 'collapsed' (harm) and 'a portal to distraction' (danger); both frame phones as threatening to children's learning.",
                commonErrors: ["Quoting neutral words like 'smartphone' as loaded.", "Giving the phrase but not the attitude it reveals."],
              },
            },
            {
              id: "el11-u9-viewpoint-bias-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: PHONES_B,
              stem: "How does the writer of 'Phones In' acknowledge the opposing view before answering it?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Counter-argument", statement: "Acknowledging the other side before answering it can make a writer seem fair-minded — or can set up a straw man." }],
                steps: [
                  { reasoning: "The writer concedes that 'misuse happens', validating the ban argument's starting point.", evidence: "Of course, misuse happens", marks: 1, markCode: "AO1" },
                  { reasoning: "She then reframes the issue: the question is not whether phones can be misused but whether schools teach management.", evidence: "they should teach them to manage them inside it too", marks: 1, markCode: "AO2" },
                  { reasoning: "Her counter is practical rather than dismissive — 'A total ban solves nothing' — showing she has considered the other side.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The writer concedes 'misuse happens' before arguing that schools should teach phone management rather than impose bans — a counter-argument that acknowledges then redirects the debate.",
                commonErrors: ["Saying the writer 'agrees' with the ban; she concedes a point, not the position."],
              },
            },
            {
              id: "el11-u9-viewpoint-bias-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: PHONES_A,
              stem: "How does 'Phones Out' use anecdote and exaggeration to support its viewpoint?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Anecdotal evidence", statement: "A single personal story presented as typical can feel more convincing than statistics." },
                  { kind: "technique", name: "Hyperbole", statement: "Deliberate exaggeration heightens emotional impact." },
                ],
                steps: [
                  { reasoning: "The writer opens with a personal anecdote — 'My son's concentration has collapsed' — which feels vivid and true.", evidence: "My son's concentration has collapsed since he got a smartphone", marks: 2, markCode: "AO1" },
                  { reasoning: "She generalises from one case: 'he is not alone' and 'teachers up and down the country report the same pattern' — but no evidence is given for the general claim.", marks: 1, markCode: "AO2" },
                  { reasoning: "'The evidence is plain' asserts certainty the anecdote cannot support — a bias marker.", marks: 1, markCode: "AO2" },
                  { reasoning: "Exaggeration — 'a portal to distraction', 'never get back' — makes the harm feel total and irreversible.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The writer uses a vivid personal anecdote ('my son's concentration has collapsed') and generalises it into 'evidence', then heightens the threat with hyperbole ('a portal to distraction', 'never get back') — emotionally persuasive but logically thin.",
                commonErrors: ["Accepting the anecdote as proof rather than analysing its persuasive function."],
              },
            },
            {
              id: "el11-u9-viewpoint-bias-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: PHONES_BOTH,
              stem: "Compare the balance of argument in 'Phones Out' and 'Phones In'.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Balance assessment", statement: "Judge how fairly each writer represents the opposing view." },
                  { kind: "technique", name: "One-sidedness", statement: "A text that never fairly states the other side is more biased than one that does." },
                ],
                steps: [
                  { reasoning: "'Phones Out' mentions the opposing view only to dismiss it: 'Some say phones can support learning. Perhaps.'", evidence: "Some say phones can support learning. Perhaps.", marks: 2, markCode: "AO1" },
                  { reasoning: "Its answer — 'the burden of proof lies with those who want to introduce the distraction' — shifts the burden rather than engaging the claim.", marks: 2, markCode: "AO2" },
                  { reasoning: "'Phones In' engages more: it names the counter ('misuse happens'), offers an analogy ('banning dictionaries') and proposes an alternative (teaching management).", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "'Phones Out' is more one-sided: it acknowledges the opposing view only to dismiss it in 'Perhaps' and shifts the burden of proof. 'Phones In' engages more fairly by conceding misuse and proposing an alternative, though both ultimately argue their own side.",
                levels: bands(6, "comparison of how fairly each text balances argument"),
                commonErrors: ["Saying one text is 'balanced' when both argue a position; the question is how the other side is treated."],
              },
            },
            {
              id: "el11-u9-viewpoint-bias-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: PHONES_BOTH,
              stem: "Read both articles on phones in schools.",
              parts: [
                { label: "a", prompt: "State the main claim of each writer.", marks: 4 },
                { label: "b", prompt: "Evaluate which writer's viewpoint is better supported by evidence and reasoning.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Claim identification", statement: "State each viewpoint precisely before evaluating it." },
                  { kind: "skill", name: "Evidence evaluation", statement: "Judge support by quality (anecdote vs research, assertion vs reasoning), not by how strongly it is phrased." },
                ],
                steps: [
                  { part: "a", reasoning: "Text 1 claims schools should ban phones outright; Text 2 claims bans are wrong and phones should be managed in class.", evidence: "Schools should ban mobile phones outright", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "Credit a precise contrast: ban versus managed use, with each claim attributed to the right text.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Text 1's support is thin: one anecdote generalised as 'evidence', no data, counter dismissed with 'Perhaps'.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Text 2's support is stronger: it references 'what research actually shows', offers an analogy and a practical alternative.", evidence: "ignore what research actually shows", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "A top answer concludes Text 2 is better supported but notes both rely on assertion — a nuanced verdict earns full credit.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "(a) Text 1: ban phones outright. Text 2: reject blanket bans and teach phone management instead. (b) Text 2 is better supported: it invokes research, uses an analogy and proposes an alternative, while Text 1 rests on a single anecdote and dismisses the counter-argument.",
                levels: bands(6, "evaluation of which viewpoint is better supported", "b"),
                commonErrors: ["In (a) giving views rather than claims.", "In (b) choosing a side without weighing the quality of evidence."],
              },
            },
          ],
        },
        {
          id: "el11-u9-evaluative-writing",
          title: "Writing evaluative comment",
          skill: "Write evaluative paragraphs that summarise viewpoints, identify bias and reach a justified judgement (AO3).",
          sections: [
            {
              heading: "What AO3 asks for",
              body: "AO3 rewards **critical understanding and evaluation**: not just what a text says, but how convincing, fair and well-supported it is. An evaluative answer names the viewpoint, assesses the evidence, notices bias, and reaches a judgement you can defend. It is the difference between describing a text and judging it.",
            },
            {
              heading: "The evaluative paragraph",
              body: "A strong evaluative paragraph follows a pattern: **point** (the judgement), **evidence** (quotation or feature), **analysis** (why it matters), **verdict** (so what). e.g. 'The writer's case is weakened by its reliance on anecdote: \"My son's concentration has collapsed\" is vivid but proves only one case, so the claim that \"the evidence is plain\" outruns the proof.'",
            },
            {
              heading: "Judging fairly",
              body: "Evaluation does not mean fault-finding. A good judgement weighs strengths and weaknesses: a text can be emotionally powerful yet logically thin, or balanced yet unconvincing. Always acknowledge what the text does well before or alongside what it does badly — examiners reward nuance.",
            },
          ],
          keyFormulas: [
            { name: "AO3 evaluation", statement: "Critical understanding and evaluation of viewpoints: judging how convincing and balanced a text is." },
            { name: "Evaluative paragraph", statement: "Point, evidence, analysis, verdict — a judgement defended by reference to the text." },
            { name: "Balanced judgement", statement: "Weighing strengths and weaknesses rather than only praising or condemning." },
          ],
          workedExample: {
            problem: "Write one evaluative sentence judging 'Phones Out'.",
            solution: "'Phones Out' is emotionally persuasive but logically thin: its vivid anecdote about the writer's son ('concentration has collapsed') feels convincing, yet it is generalised into 'the evidence is plain' while the opposing view is dismissed in a single word ('Perhaps'). The verdict — that the writer has decided before weighing the evidence — makes the argument powerful in tone but weak in support.",
          },
          questions: [
            {
              id: "el11-u9-evaluative-writing-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: PHONES_A,
              stem: "What does the assessment objective AO3 require in an analytical answer?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Retelling the text accurately." },
                  { id: "b", text: "Identifying literary techniques only." },
                  { id: "c", text: "Critical understanding and evaluation of viewpoints." },
                  { id: "d", text: "Comparing the text with its historical context." },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "AO3", statement: "AO3 assesses critical understanding and evaluation of viewpoints in texts." }],
                steps: [
                  { reasoning: "AO3 is the evaluation objective: judging how convincing, fair and well-supported a viewpoint is.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "**(c)** Critical understanding and evaluation of viewpoints.",
                commonErrors: ["Confusing AO3 (evaluate) with AO1 (understand) or AO2 (analyse methods)."],
              },
            },
            {
              id: "el11-u9-evaluative-writing-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: PHONES_A,
              stem: "State one strength and one weakness of 'Phones Out' as an argument.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Balanced evaluation", statement: "A judgement names both what works and what does not." }],
                steps: [
                  { reasoning: "Strength: the anecdote is vivid and emotionally engaging ('My son's concentration has collapsed').", marks: 1, markCode: "AO3" },
                  { reasoning: "Weakness: the counter-argument is dismissed ('Perhaps.') and the evidence is a single generalised case.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Strength: emotionally vivid opening anecdote. Weakness: thin evidence — one anecdote treated as proof and the opposing view dismissed.",
                commonErrors: ["Giving two weaknesses or two strengths instead of one of each.", "Praising without reference to the text."],
              },
            },
            {
              id: "el11-u9-evaluative-writing-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: PHONES_B,
              stem: "How might a reader's own experience of phones affect their response to 'Phones In'?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Reader response", statement: "A reader's own experience filters how they judge a viewpoint." }],
                steps: [
                  { reasoning: "A reader who has seen phones aid learning may find 'the most powerful learning tool' convincing.", marks: 1, markCode: "AO1" },
                  { reasoning: "A reader whose child was distracted may resist the claim regardless of the analogy.", marks: 1, markCode: "AO1" },
                  { reasoning: "A top answer notes that 'Of course, misuse happens' may satisfy sceptics while the dictionary analogy persuades those who value fairness.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "A reader's experience acts as a filter: those who have seen phones help learning will accept 'the most powerful learning tool', while those who have seen distraction will resist it — so the same argument persuades differently depending on the reader.",
                commonErrors: ["Saying readers 'agree' or 'disagree' without linking to experience."],
              },
            },
            {
              id: "el11-u9-evaluative-writing-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: PHONES_BOTH,
              stem: "Write a short evaluative paragraph comparing the balance of the two articles.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Evaluative paragraph", statement: "Point, evidence, analysis, verdict — judge the texts with quotations." }],
                steps: [
                  { reasoning: "Point: one text is more balanced than the other.", marks: 1, markCode: "AO3" },
                  { reasoning: "Evidence: 'Phones Out' dismisses the counter in 'Perhaps.' while 'Phones In' concedes 'misuse happens'.", evidence: "Of course, misuse happens", marks: 2, markCode: "AO2" },
                  { reasoning: "Analysis: conceding then redirecting is fairer than dismissing; it shows the writer has weighed the other side.", marks: 1, markCode: "AO2" },
                  { reasoning: "Verdict: 'Phones In' is the more balanced article, though both argue their own side.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "A paragraph judging 'Phones In' as more balanced because it concedes 'misuse happens' and offers an alternative, while 'Phones Out' dismisses the counter-argument with 'Perhaps.' — supported by quotations and a clear verdict.",
                commonErrors: ["Retelling both articles instead of judging them.", "Quoting without analysis."],
              },
            },
            {
              id: "el11-u9-evaluative-writing-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: PHONES_A,
              stem: "Evaluate the overall effectiveness of 'Phones Out' as persuasion.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Holistic evaluation", statement: "Weigh emotional power against logical support and fairness." }],
                steps: [
                  { reasoning: "Emotionally effective: the anecdote and loaded language ('portal to distraction', 'never get back') are gripping.", marks: 2, markCode: "AO2" },
                  { reasoning: "Logically weak: one anecdote is generalised into 'the evidence is plain' with no data.", marks: 2, markCode: "AO2" },
                  { reasoning: "Unfair: the counter-argument gets two words ('Perhaps.') and the burden of proof is shifted rather than argued.", marks: 1, markCode: "AO3" },
                  { reasoning: "Verdict: powerful in tone, weak in support — it may move readers but will not convince sceptics.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "'Phones Out' is emotionally persuasive — vivid anecdote, loaded language — but logically thin and unfair in its treatment of the counter-argument; it moves readers without convincing them.",
                levels: bands(6, "evaluation of persuasive effectiveness"),
                commonErrors: ["Judging only by how much you agree with the viewpoint.", "Ignoring the treatment of the counter-argument."],
              },
            },
            {
              id: "el11-u9-evaluative-writing-q6",
              difficulty: "challenge",
              totalMarks: 12,
              extract: PHONES_BOTH,
              stem: "Read both articles on phones in schools.",
              parts: [
                { label: "a", prompt: "Summarise each writer's viewpoint in one sentence.", marks: 2 },
                { label: "b", prompt: "Identify one example of bias or loaded language in each text.", marks: 4 },
                { label: "c", prompt: "Write an evaluative paragraph judging which article is the more convincing piece of persuasion.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Summarise viewpoints", statement: "One precise sentence per writer." },
                  { kind: "technique", name: "Bias detection", statement: "Loaded language and one-sided evidence reveal bias." },
                  { kind: "skill", name: "Evaluative writing", statement: "Point, evidence, analysis, verdict — judge with justification." },
                ],
                steps: [
                  { part: "a", reasoning: "Text 1: schools should ban phones outright. Text 2: reject blanket bans and teach management instead.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Text 1: loaded language — 'portal to distraction', 'collapsed', 'never get back' (1) plus bias — anecdote treated as proof (1).", evidence: "a portal to distraction", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Text 2: loaded language — 'powerful learning tool', 'blanket bans' (1) plus bias — 'what research actually shows' invoked without citation (1).", evidence: "Blanket bans on phones", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Point: judge which is more convincing and why.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Evidence and analysis: Text 2 engages the counter ('misuse happens') and offers an analogy; Text 1 dismisses it ('Perhaps.') and rests on anecdote.", evidence: "Of course, misuse happens", marks: 3, markCode: "AO2" },
                  { part: "c", reasoning: "Verdict: Text 2 is more convincing because it weighs the other side, though both argue their own position.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "(a) Text 1 argues for an outright ban; Text 2 argues against blanket bans in favour of teaching management. (b) Text 1: 'portal to distraction' and anecdotal 'evidence'; Text 2: 'powerful learning tool' and uncited 'research'. (c) A justified evaluative paragraph concluding Text 2 is more convincing for engaging the counter-argument and offering an alternative.",
                levels: bands(6, "evaluative judgement of the more convincing article", "c"),
                commonErrors: ["In (a) summarising content rather than viewpoint.", "In (b) quoting without explaining the bias.", "In (c) retelling instead of judging."],
              },
            },
          ],
        },
      ],
    },
  },
];
