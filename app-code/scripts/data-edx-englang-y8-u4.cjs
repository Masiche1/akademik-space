const P = (kind, name, statement) => ({ kind, name, statement });
const st = (reasoning, marks, markCode, extra) => ({ reasoning, marks, markCode, ...(extra || {}) });
const cs = (a) => a.map(([id, text]) => ({ id, text }));
const lv6 = (part) => [
  { ...(part ? { part } : {}), level: "Level 3", marks: "5-6", descriptor: "Clear, relevant explanation supported by well-chosen evidence and developed evaluation." },
  { ...(part ? { part } : {}), level: "Level 2", marks: "3-4", descriptor: "Some understanding with some relevant evidence." },
  { ...(part ? { part } : {}), level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment with few references." },
];
const makeQ = (o, response, markscheme) => ({
  id: o.id,
  difficulty: o.difficulty || "foundation",
  totalMarks: o.totalMarks ?? (o.stepMarks || 1),
  ...(o.extract ? { extract: o.extract } : {}),
  stem: o.stem,
  ...(o.parts ? { parts: o.parts } : {}),
  response,
  markscheme,
});
const mcq = (o) => makeQ(o, { type: "mcq", choices: cs(o.choices), correctChoiceId: o.correct }, {
  principles: o.p,
  steps: [st(o.r, o.stepMarks || 1, o.code || "AO1", o.ev ? { evidence: o.ev } : {})],
  finalAnswer: o.answer,
  ...(o.errors ? { commonErrors: o.errors } : {}),
});
const op = (o) => makeQ(o, { type: "open" }, {
  principles: o.p,
  steps: o.s,
  finalAnswer: o.a,
  ...(o.errors ? { commonErrors: o.errors } : {}),
  ...(o.l ? { levels: o.l } : {}),
});
const SEC = (a) => a.map(([heading, body]) => ({ heading, body }));
const FORM = (a) => a.map(([name, statement]) => ({ name, statement }));
const V = (a) => a.map(([term, definition]) => ({ term, definition }));
const CON = (o) => ({ id: o.id, title: o.title, skill: o.skill, sections: SEC(o.sections), keyFormulas: FORM(o.formulas), workedExample: o.example, questions: o.questions });
const N = (id, title, summary, sections) => ({ id, title, summary, sections: SEC(sections) });
const U = "el8-u4";
const lessonSpec = (file, exportName, code, title, goal, standards, vocab, concepts, notes) => ({
  file,
  exportName,
  lesson: { id: `${U}-lesson-${code}`, code, title, goal, standards, vocabulary: V(vocab), concepts },
  notes,
});

const COUNCIL = {
  title: "School council discussion",
  author: "Written for Akademik Space",
  text: "Maya: I think the library should open at seven thirty because many students cannot study before school.\n\nTom: That is pointless. Nobody reads before school anyway.\n\nSam: So you are saying opening earlier would not help students? I am not sure I agree, because some of us revise on the bus. What if we trial it for one month and ask students?\n\nMaya: A trial sounds fair. We could put a suggestion box by the door.",
};
const DEBATE = {
  title: "Class debate: Phones in lessons",
  author: "Written for Akademik Space",
  text: "Aisha: Phones can support learning. A calculator app helps with maths, and a dictionary is quicker than flicking through pages. Banning them completely removes useful tools.\n\nBen: But the evidence shows that notifications split attention even when students are trying to work. One glance can turn into ten minutes of scrolling. If the rules are not enforced, the policy becomes meaningless.",
};
const SCRIPT = {
  title: "Presentation opening: The school garden",
  author: "Written for Akademik Space",
  text: "Good morning everyone. Last term our school garden was a pile of empty pots and a broken fence. Today it has twelve raised beds, a worm farm and a small herb garden that the cooking club already uses.\n\nI am going to show you three things: first, how the garden was built; second, what it has changed for students; and third, what we need next to keep it growing.\n\nBy the end, you will know how to volunteer, what the garden needs and why a few afternoons of digging can make the whole school feel different.",
};
const REHEARSAL = {
  title: "Teacher's notes on a rehearsal",
  author: "Written for Akademik Space",
  text: "The speaker read most of the slides word for word. At the beginning the voice was clear, but by the final section the pace became very fast and several words were swallowed. The speaker kept both hands in pockets and looked only at the screen. When describing the new garden, the voice dropped almost to a whisper. There were long pauses in the wrong places, but the audience leaned forward whenever the speaker pointed at the photograph.",
};
const AD = {
  title: "The Old Cinema Reopens",
  author: "Written for Akademik Space",
  text: "COMING SOON\n\nThe Old Cinema Reopens Saturday\n\nFor one weekend only, the old picture house on Mill Lane will screen classic adventures, live organ music and a free ice-cream for children under twelve. Doors open at two o'clock. Bring your family, your friends and your curiosity.\n\nTickets are free, but places are limited. Reserve yours today at the box office or online.",
};
const POST = {
  title: "School garden update",
  author: "Written for Akademik Space",
  text: "BREAKING: our school garden now has 12 raised beds! Huge thanks to everyone who dug, planted and watered. Next workday: Friday at 3:30, bring gloves and a water bottle. #SchoolGarden #GrowTogether",
};

module.exports = [
  lessonSpec(
    "lesson-4-1.ts", "lesson41", "4-1", "Active Listening and Discussion",
    "I CAN listen actively, respond constructively and take part in a balanced discussion.",
    ["KS3 Spoken Language", "KS3 AO1", "KS3 AO3"],
    [
      ["Active listening", "Fully concentrating on a speaker, processing the meaning and responding appropriately."],
      ["Paraphrase", "Restating someone else's point in your own words to show you understand it."],
      ["Turn-taking", "The rules that decide when each speaker contributes."],
      ["Constructive response", "A reply that builds on, questions or evaluates an idea without attacking the speaker."],
      ["Consensus", "A shared agreement reached after discussion."],
      ["Interrupting", "Speaking before the current speaker has finished."],
    ],
    [
      CON({
        id: "el8-u4-active-listening", title: "Active listening", skill: "Use verbal and non-verbal signals to understand a speaker and respond accurately.",
        sections: [
          ["Hearing is not listening", "Hearing is automatic; listening is a skill. Active listening means following the argument, noticing key details and deciding what response is needed."],
          ["Signals of good listening", "Good listeners make eye contact, nod, keep an open posture and avoid interrupting. They paraphrase ('So you are saying...'), ask clarifying questions and refer back to earlier points."],
        ],
        formulas: [
          ["Paraphrase", "Restate the speaker's point in your own words before responding."],
          ["Clarifying question", "A question that checks understanding, such as 'Do you mean...?'."],
          ["Active listening", "Attend, understand, remember and respond appropriately."],
        ],
        example: { problem: "A classmate says the library should open earlier. Give a constructive listening response.", solution: "'You think earlier opening would help students who cannot study before school. Is the main problem access or quiet space? A one-month trial with a suggestion box would test your idea fairly.'" },
        questions: [
          mcq({ id: "el8-u4-active-listening-q1", stem: "Which action shows active listening?", choices: [["a", "Nodding, making eye contact and asking a clarifying question"], ["b", "Preparing your own speech while the speaker talks"], ["c", "Interrupting to give your opinion"], ["d", "Looking at your phone and smiling"]], correct: "a", p: [P("skill", "Active listening", "Listening involves attention and an appropriate response.")], r: "Active listening requires attention to the speaker and a response that shows understanding.", ev: "Nodding, making eye contact", answer: "**(a)** Nodding, eye contact and a clarifying question.", errors: ["Choosing (b): preparing a reply can mean missing the speaker's point."] }),
          op({ id: "el8-u4-active-listening-q2", difficulty: "core", totalMarks: 2, stem: "Give two non-verbal signals that show you are listening carefully.", p: [P("convention", "Listening signals", "Body language communicates attention.")], s: [st("Eye contact or an open posture shows attention.", 1, "AO3"), st("Nodding or leaning slightly forward shows engagement.", 1, "AO3")], a: "Eye contact and nodding, or another clear non-verbal signal such as an open posture.", errors: ["Naming verbal responses only."] }),
          op({ id: "el8-u4-active-listening-q3", difficulty: "core", totalMarks: 3, stem: "Explain the difference between hearing and listening, and why both matter in a discussion.", p: [P("definition", "Hearing and listening", "Hearing is automatic; listening is deliberate."), P("skill", "Discussion", "Understanding others improves the quality of a discussion.")], s: [st("Hearing means sound reaches your ears; listening means processing meaning.", 1, "AO1"), st("Active listening helps you understand, remember and respond accurately.", 1, "AO3"), st("It also shows respect and reduces misunderstandings.", 1, "AO3")], a: "Hearing is receiving sound; listening is understanding it. Listening matters because it supports accurate responses and respectful discussion." }),
          op({ id: "el8-u4-active-listening-q4", difficulty: "challenge", totalMarks: 4, extract: COUNCIL, stem: "How effective is Tom's response in the school council discussion? Refer to the extract.", p: [P("context", "Discussion response", "Evaluate how a speaker contributes to discussion."), P("technique", "Language choice", "Word choice affects whether a response is constructive or dismissive.")], s: [st("Tom dismisses Maya's idea immediately with 'That is pointless'.", 1, "AO1", { evidence: "That is pointless." }), st("His claim 'Nobody reads before school anyway' is an unsupported sweeping statement.", 1, "AO2", { evidence: "Nobody reads before school anyway." }), st("He does not paraphrase or ask a question, so he may misunderstand the proposal.", 1, "AO3"), st("His response weakens collaboration and may make Maya defensive.", 1, "AO3")], a: "Tom's response is ineffective: it dismisses the idea, makes an unsupported generalisation and does not show understanding before disagreeing.", errors: ["Only saying Tom is rude without explaining why."] }),
          op({ id: "el8-u4-active-listening-q5", difficulty: "challenge", totalMarks: 6, extract: COUNCIL, stem: "Write a short constructive response to Maya's suggestion. Use paraphrasing, one question and one practical proposal.", p: [P("skill", "Constructive response", "Acknowledge, clarify and build on an idea."), P("convention", "Discussion language", "Polite, precise language supports collaboration.")], s: [st("Paraphrases Maya's point accurately.", 2, "AO3"), st("Asks a clarifying question.", 2, "AO3"), st("Offers a practical proposal or compromise.", 2, "AO4")], l: lv6(), a: "Model: 'You think opening at seven thirty would help students who cannot study before school. Is the main problem access or quiet space? A one-month trial with a suggestion box would test the idea fairly.'", errors: ["Attacking Tom instead of responding to Maya.", "Agreeing without checking understanding."] }),
          op({ id: "el8-u4-active-listening-q6", difficulty: "challenge", totalMarks: 12, extract: COUNCIL, stem: "Answer all parts of this question about the school council discussion.", parts: [
            { label: "a", prompt: "Write down two practical details from the discussion.", marks: 2 },
            { label: "b", prompt: "Explain how Sam shows active listening.", marks: 4 },
            { label: "c", prompt: "Evaluate how effectively the group reaches agreement.", marks: 6 },
          ], p: [P("skill", "Discussion analysis", "Identify contributions, listening behaviours and outcomes."), P("context", "Group decision-making", "Evaluate whether a discussion produces a workable agreement.")], s: [
            st("The library could open at seven thirty.", 1, "AO1", { part: "a", evidence: "open at seven thirty" }),
            st("A one-month trial with a suggestion box is proposed.", 1, "AO1", { part: "a", evidence: "trial it for one month" }),
            st("Sam paraphrases Tom's point before responding.", 1, "AO3", { part: "b", evidence: "So you are saying opening earlier would not help students?" }),
            st("Sam challenges the claim politely rather than attacking Tom.", 1, "AO3", { part: "b", evidence: "I am not sure I agree" }),
            st("Sam offers a constructive compromise: a trial and student feedback.", 2, "AO3", { part: "b", evidence: "What if we trial it for one month" }),
            st("The group moves from disagreement to a shared next step.", 2, "AO4", { part: "c", evidence: "A trial sounds fair." }),
            st("Maya accepts the proposal, showing the discussion has produced consensus.", 2, "AO4", { part: "c", evidence: "A trial sounds fair." }),
            st("The suggestion box gives students a voice and makes the trial measurable.", 2, "AO4", { part: "c", evidence: "suggestion box by the door" }),
          ], l: lv6("c"), a: "(a) Opening at seven thirty; a one-month trial with a suggestion box. (b) Sam paraphrases Tom, disagrees politely and proposes a trial. (c) The discussion is effective because it moves from opposing views to a fair trial with student feedback.", errors: ["Treating paraphrasing as agreement.", "Ignoring Maya's final acceptance."] }),
        ],
      }),
      CON({
        id: "el8-u4-constructive-discussion", title: "Constructive discussion", skill: "Contribute to discussion using turn-taking, respectful disagreement and evidence.",
        sections: [
          ["Taking turns", "In discussion, speakers take turns so everyone can be heard. Signals such as 'May I come in here?' or waiting for a pause show respect. Interrupting can make an important point seem dismissive."],
          ["Agreeing and disagreeing", "Strong discussion is not about winning. Use phrases such as 'I see your point, but...' or 'That may be true; however...'. Support a disagreement with a reason or example, and acknowledge the other side where possible."],
        ],
        formulas: [
          ["Turn-taking", "Wait for a pause or invitation before speaking."],
          ["Disagree constructively", "Acknowledge the other view, then give a reason or counter-example."],
          ["Evidence in discussion", "Support a point with an example, fact or experience."],
        ],
        example: { problem: "Rewrite this rude disagreement: 'Your idea is wrong because phones are bad.'", solution: "'I can see why phones might help in some lessons, but notifications can split attention. Perhaps we could allow them for research only.'" },
        questions: [
          mcq({ id: "el8-u4-constructive-discussion-q1", stem: "What is the most constructive way to disagree?", choices: [["a", "Say the other person is wrong and move on"], ["b", "Acknowledge the point, then give a reason or counter-example"], ["c", "Stay silent so nobody argues"], ["d", "Change the subject immediately"]], correct: "b", p: [P("convention", "Disagreement", "Respectful disagreement includes acknowledgement and reasoning.")], r: "Constructive disagreement acknowledges the other view and supports a different position with reasoning.", answer: "**(b)** Acknowledge, then give a reason or counter-example.", errors: ["Choosing (a): it attacks rather than argues."] }),
          op({ id: "el8-u4-constructive-discussion-q2", difficulty: "core", totalMarks: 2, stem: "Explain two rules of turn-taking in a discussion.", p: [P("convention", "Turn-taking", "Speakers should contribute without dominating or interrupting.")], s: [st("Wait for the current speaker to finish or pause before contributing.", 1, "AO3"), st("Use a signal such as 'May I come in here?' when joining a heated discussion.", 1, "AO3")], a: "Wait for a pause and signal politely before speaking." }),
          op({ id: "el8-u4-constructive-discussion-q3", difficulty: "core", totalMarks: 3, stem: "Rewrite this sentence so it disagrees politely: 'Homework is useless and anyone who likes it is lazy.'", p: [P("skill", "Polite disagreement", "Replace attack with acknowledgement and reasoning.")], s: [st("Removes the personal attack on people who like homework.", 1, "AO4"), st("Acknowledges a possible benefit of homework.", 1, "AO4"), st("Gives a reason for the disagreement.", 1, "AO4")], a: "Model: 'Homework can help some students revise, but too much can reduce free time. Perhaps a smaller amount with clearer purpose would work better.'", errors: ["Keeping 'lazy' or 'useless'."] }),
          op({ id: "el8-u4-constructive-discussion-q4", difficulty: "challenge", totalMarks: 4, extract: DEBATE, stem: "Identify two conventions of effective discussion used in the debate extract.", p: [P("convention", "Discussion conventions", "Effective discussion uses evidence, acknowledgement and reasoned disagreement."), P("context", "Class debate", "Formal discussion has expectations about contribution and evidence.")], s: [st("Aisha supports her point with examples such as calculator and dictionary apps.", 1, "AO1", { evidence: "A calculator app helps with maths" }), st("Ben acknowledges the opposing view before challenging it.", 1, "AO3", { evidence: "But the evidence shows" }), st("Ben gives evidence about notifications splitting attention.", 1, "AO2", { evidence: "notifications split attention" }), st("Both speakers keep their points focused on the issue of phones in lessons.", 1, "AO3")], a: "Both use evidence and reasons; Ben also acknowledges Aisha's point before disagreeing.", errors: ["Listing topics rather than discussion conventions."] }),
          op({ id: "el8-u4-constructive-discussion-q5", difficulty: "challenge", totalMarks: 6, extract: DEBATE, stem: "Write a short response to Ben's argument. Acknowledge his point, disagree with a reason, and suggest a compromise.", p: [P("skill", "Responding to an argument", "Acknowledge, reason and compromise."), P("convention", "Formal discussion", "Use measured language suitable for a class debate.")], s: [st("Acknowledges that notifications can distract students.", 2, "AO3"), st("Disagrees with a clear reason rather than attacking Ben.", 2, "AO4"), st("Suggests a practical compromise such as phones for research only.", 2, "AO4")], l: lv6(), a: "Model: 'You are right that notifications can split attention. However, banning every useful tool may be too broad. A compromise could allow phones for research tasks while keeping them away during written work.'", errors: ["Repeating Aisha's argument without answering Ben.", "Suggesting no solution."] }),
          op({ id: "el8-u4-constructive-discussion-q6", difficulty: "challenge", totalMarks: 12, extract: DEBATE, stem: "Answer all parts of this question about the debate extract.", parts: [
            { label: "a", prompt: "Write down two arguments made for allowing phones in lessons.", marks: 2 },
            { label: "b", prompt: "Explain how Ben responds to Aisha's argument.", marks: 4 },
            { label: "c", prompt: "Evaluate how effectively the two speakers use discussion conventions.", marks: 6 },
          ], p: [P("context", "Debate analysis", "Compare viewpoints and evaluate discussion methods."), P("technique", "Evidence and acknowledgement", "Strong discussion uses examples and respectful engagement.")], s: [
            st("Phones can support learning, such as a calculator app.", 1, "AO1", { part: "a", evidence: "calculator app helps with maths" }),
            st("A dictionary app is quicker than searching pages.", 1, "AO1", { part: "a", evidence: "dictionary is quicker" }),
            st("Ben does not dismiss Aisha; he begins with 'But the evidence shows'.", 1, "AO3", { part: "b", evidence: "But the evidence shows" }),
            st("He challenges the claim with evidence about notifications.", 1, "AO2", { part: "b", evidence: "notifications split attention" }),
            st("He strengthens his point with an example of scrolling.", 1, "AO2", { part: "b", evidence: "ten minutes of scrolling" }),
            st("He links his argument to the policy issue of enforcement.", 1, "AO3", { part: "b", evidence: "the policy becomes meaningless" }),
            st("Aisha uses concrete examples, making her argument clear.", 2, "AO2", { part: "c", evidence: "calculator app" }),
            st("Ben uses evidence and acknowledges the opposing view before challenging it.", 2, "AO3", { part: "c", evidence: "But the evidence shows" }),
            st("Both stay focused on the issue, which makes the discussion purposeful.", 2, "AO3", { part: "c" }),
          ], l: lv6("c"), a: "(a) Phones can support learning and dictionaries are quicker. (b) Ben acknowledges the claim, then challenges it with evidence about notifications and enforcement. (c) Both speakers use relevant evidence and stay focused; Ben also acknowledges Aisha before disagreeing, making the discussion constructive.", errors: ["Summarising without evaluating conventions.", "Claiming one speaker wins without criteria."] }),
        ],
      }),
    ],
    N("el8-u4-discussion-notes", "Active listening and discussion — notes", "Listen to understand, respond constructively and use evidence in discussion.", [
      ["Key idea", "Active listening means attending, understanding and responding; turn-taking keeps discussion fair."],
      ["Constructive disagreement", "Acknowledge the other view, give a reason and suggest a compromise where possible."],
      ["Evidence", "Use examples, facts and experience to support points rather than attacking people."],
    ]),
  ),
  lessonSpec(
    "lesson-4-2.ts", "lesson42", "4-2", "Planning and Delivering a Presentation",
    "I CAN structure a presentation clearly and deliver it with confident voice, pace and body language.",
    ["KS3 Spoken Language", "KS3 AO4", "KS3 AO5"],
    [
      ["Presentation", "A structured spoken text designed for an audience."],
      ["Signposting", "Verbal cues that guide listeners through the structure."],
      ["Paralanguage", "Non-verbal vocal features such as pace, volume, pitch and pauses."],
      ["Eye contact", "Looking at different members of the audience to build connection."],
      ["Filler", "Repeated words such as 'um' or 'like' used when thinking."],
      ["Rehearsal", "Practising a presentation before delivery."],
    ],
    [
      CON({
        id: "el8-u4-structuring-presentation", title: "Structuring a presentation", skill: "Plan an introduction, developed points and conclusion with clear signposting.",
        sections: [
          ["Purpose and audience", "Before planning, decide what the audience should know, think or do. A presentation to younger students needs simpler words and more examples than one to teachers."],
          ["Introduction, body and conclusion", "Open with a hook and your purpose. Develop two or three main points with examples. Conclude by summarising and giving a clear next step. Use signposts such as 'first', 'second' and 'finally' so listeners can follow."],
        ],
        formulas: [
          ["Three-part structure", "Introduction, developed points, conclusion."],
          ["Signpost", "A cue such as 'first', 'another point' or 'to conclude'."],
          ["Purpose statement", "Tell the audience what they will learn or do."],
        ],
        example: { problem: "Plan the structure for a presentation about a school garden.", solution: "Introduction: why the garden matters. Point 1: how it was built. Point 2: what it has changed. Point 3: how students can help. Conclusion: invite volunteering and recap the benefits." },
        questions: [
          mcq({ id: "el8-u4-structuring-presentation-q1", stem: "What is the main purpose of signposting in a presentation?", choices: [["a", "To prove the speaker has memorised the script"], ["b", "To guide listeners through the structure"], ["c", "To make the presentation longer"], ["d", "To replace evidence with opinions"]], correct: "b", p: [P("convention", "Signposting", "Signposts help listeners follow spoken structure.")], r: "Signposts such as 'first' and 'finally' help listeners know where they are in the presentation.", answer: "**(b)** To guide listeners through the structure.", errors: ["Choosing (a): signposting is for the audience, not the speaker."] }),
          op({ id: "el8-u4-structuring-presentation-q2", difficulty: "core", totalMarks: 2, stem: "Name the three main parts of a presentation and give one feature of each.", p: [P("convention", "Presentation structure", "Introductions orient, bodies develop, conclusions resolve.")], s: [st("Introduction includes a hook and purpose.", 1, "AO4"), st("Body develops points with examples; conclusion summarises and gives a next step.", 1, "AO4")], a: "Introduction, developed points and conclusion." }),
          op({ id: "el8-u4-structuring-presentation-q3", difficulty: "core", totalMarks: 3, stem: "Why is signposting especially important in speech rather than writing?", p: [P("context", "Spoken language", "Listeners cannot re-read as easily as readers."), P("convention", "Signposting", "Cues make structure audible.")], s: [st("Listeners cannot look back easily to check structure.", 1, "AO3"), st("Signposts give spoken structure a clear audible shape.", 1, "AO3"), st("They help the audience know what is coming and what has been covered.", 1, "AO3")], a: "Because listeners cannot re-read, signposts make the structure clear and help them follow." }),
          op({ id: "el8-u4-structuring-presentation-q4", difficulty: "challenge", totalMarks: 4, extract: SCRIPT, stem: "How does the speaker structure the opening of the presentation? Refer to the extract.", p: [P("technique", "Presentation opening", "A strong opening states context, purpose and structure."), P("convention", "Signposting", "Numbered points guide the audience.")], s: [st("The speaker uses a contrast between before and now to hook interest.", 1, "AO2", { evidence: "a pile of empty pots" }), st("The speaker states the purpose by listing three points.", 1, "AO1", { evidence: "I am going to show you three things" }), st("Signposts such as 'first', 'second' and 'third' make the structure clear.", 1, "AO2", { evidence: "first, how the garden was built" }), st("The final sentence tells the audience what they will gain.", 1, "AO2", { evidence: "you will know how to volunteer" })], a: "The opening hooks with contrast, states three points and uses signposts so listeners know what to expect.", errors: ["Describing the garden rather than the speaker's structure."] }),
          op({ id: "el8-u4-structuring-presentation-q5", difficulty: "challenge", totalMarks: 6, stem: "Write a four-part outline for a five-minute presentation called 'Why our school should have a quiet room'. Include a hook, two main points and a call to action.", p: [P("skill", "Planning a presentation", "Organise ideas for a clear spoken purpose."), P("convention", "Presentation structure", "Use introduction, points, evidence and conclusion.")], s: [st("Includes a hook that interests the audience.", 2, "AO4"), st("States the purpose clearly.", 1, "AO4"), st("Develops two main points with support.", 2, "AO4"), st("Ends with a clear call to action or summary.", 1, "AO4")], l: lv6(), a: "Model: Hook: 'Imagine finishing a difficult test while phones ring and chairs scrape.' Purpose: persuade the school to create a quiet room. Point 1: stress affects concentration. Point 2: a quiet room would be low-cost and useful. Conclusion: ask students to sign a petition or speak to the head of year.", errors: ["Listing points with no order or purpose.", "No call to action."] }),
          op({ id: "el8-u4-structuring-presentation-q6", difficulty: "challenge", totalMarks: 12, extract: SCRIPT, stem: "Answer all parts of this question about the presentation opening.", parts: [
            { label: "a", prompt: "Write down two details about the school garden now.", marks: 2 },
            { label: "b", prompt: "Explain how the speaker uses structure to guide the audience.", marks: 4 },
            { label: "c", prompt: "Evaluate the effectiveness of the opening.", marks: 6 },
          ], p: [P("context", "Presentation analysis", "Assess how structure and language affect an audience."), P("technique", "Hook and signposting", "Openings create interest and orient listeners.")], s: [
            st("It has twelve raised beds.", 1, "AO1", { part: "a", evidence: "twelve raised beds" }),
            st("It includes a worm farm and herb garden.", 1, "AO1", { part: "a", evidence: "worm farm" }),
            st("The speaker lists three numbered points, giving a clear map.", 1, "AO2", { part: "b", evidence: "three things" }),
            st("Signposts such as 'first', 'second' and 'third' guide listeners.", 1, "AO2", { part: "b", evidence: "first, how the garden was built" }),
            st("The final paragraph states what the audience will know or do.", 1, "AO2", { part: "b", evidence: "you will know how to volunteer" }),
            st("The before-and-after contrast creates interest.", 1, "AO2", { part: "b", evidence: "was a pile of empty pots" }),
            st("The opening is effective because it creates curiosity with contrast.", 2, "AO3", { part: "c", evidence: "was a pile of empty pots" }),
            st("The three-point structure makes the presentation easy to follow.", 2, "AO3", { part: "c", evidence: "first, how the garden was built" }),
            st("The clear outcome ('you will know how to volunteer') gives listeners a reason to listen.", 2, "AO3", { part: "c", evidence: "you will know how to volunteer" }),
          ], l: lv6("c"), a: "(a) Twelve raised beds; a worm farm and herb garden. (b) The speaker uses three numbered points and signposts to guide listeners, ending with a clear outcome. (c) The opening is effective because the contrast hooks interest, the structure is clear and the audience knows what they will gain.", errors: ["Quoting without explaining effect.", "Ignoring the final purpose statement."] }),
        ],
      }),
      CON({
        id: "el8-u4-delivery-confidence", title: "Delivery and confidence", skill: "Use voice, pace, eye contact and posture to deliver a presentation confidently.",
        sections: [
          ["Voice and pace", "Vary pace for emphasis, pause before key points and project your voice. Speaking too quickly can make ideas hard to follow; speaking too slowly can lose attention. Pauses let important words land."],
          ["Body language and fillers", "Stand upright, use open gestures and make eye contact with different parts of the audience. Avoid filling pauses with 'um' or 'like'; a silent pause sounds more confident. Manage nerves by preparing, rehearsing and focusing on the message rather than yourself."],
        ],
        formulas: [
          ["Paralanguage", "Tone, pace, volume, pitch and pauses."],
          ["Eye contact", "Looking at audience members to build trust and connection."],
          ["Filler", "A hesitation word such as 'um' that can weaken delivery."],
        ],
        example: { problem: "A speaker rushes through the ending. How could they improve it?", solution: "Slow down, pause before the final point, look at the audience and lower their voice slightly for emphasis rather than dropping to a whisper." },
        questions: [
          mcq({ id: "el8-u4-delivery-confidence-q1", stem: "What is paralanguage?", choices: [["a", "The words written on slides"], ["b", "Non-verbal vocal features such as pace, tone and pauses"], ["c", "The topic of a presentation"], ["d", "A type of microphone"]], correct: "b", p: [P("definition", "Paralanguage", "How something is said rather than what is said.")], r: "Paralanguage covers vocal delivery such as pace, tone, volume and pauses.", answer: "**(b)** Non-verbal vocal features.", errors: ["Choosing (a): slides are visual support, not paralanguage."] }),
          op({ id: "el8-u4-delivery-confidence-q2", difficulty: "core", totalMarks: 2, stem: "Explain two ways a speaker can use pace and pauses effectively.", p: [P("convention", "Delivery", "Pace and pauses control emphasis and clarity.")], s: [st("Slow down for important points so they are clear.", 1, "AO4"), st("Pause before a key idea to let it land or signal a transition.", 1, "AO4")], a: "Slow for emphasis and pause before key points." }),
          op({ id: "el8-u4-delivery-confidence-q3", difficulty: "core", totalMarks: 3, stem: "Rewrite this spoken sentence to remove fillers: 'Um, so, like, the garden, um, helps students, like, relax.'", p: [P("skill", "Fluent speech", "Remove hesitation fillers and use precise wording."), P("convention", "Spoken clarity", "Clear phrasing helps listeners follow.")], s: [st("Removes 'um' and 'like'.", 1, "AO5"), st("Uses a clearer sentence structure.", 1, "AO5"), st("Keeps the meaning: the garden helps students relax.", 1, "AO5")], a: "Model: 'The garden helps students relax.' or 'Our school garden gives students a calm place to relax.'", errors: ["Leaving fillers or changing the meaning."] }),
          op({ id: "el8-u4-delivery-confidence-q4", difficulty: "challenge", totalMarks: 4, extract: REHEARSAL, stem: "Identify two weaknesses in the rehearsal and explain their effect on the audience.", p: [P("context", "Presentation delivery", "Evaluate how vocal and physical choices affect listeners."), P("technique", "Paralanguage", "Pace, volume and eye contact shape meaning.")], s: [st("The speaker reads slides word for word, which can make the audience feel excluded.", 1, "AO2", { evidence: "read most of the slides word for word" }), st("The fast final pace and swallowed words reduce clarity.", 1, "AO2", { evidence: "the pace became very fast" }), st("Looking only at the screen and keeping hands in pockets reduces connection.", 1, "AO3", { evidence: "looked only at the screen" }), st("Dropping to a whisper at a key point makes it hard to hear.", 1, "AO2", { evidence: "voice dropped almost to a whisper" })], a: "Reading slides, rushing, avoiding eye contact and dropping volume all weaken the audience's ability to follow and engage.", errors: ["Listing weaknesses without explaining effect."] }),
          op({ id: "el8-u4-delivery-confidence-q5", difficulty: "challenge", totalMarks: 6, stem: "Write a short delivery plan for a presentation. Include pace, eye contact, gesture and one strategy for managing nerves.", p: [P("skill", "Delivery planning", "Plan vocal and physical choices before speaking."), P("convention", "Presentation delivery", "Confident delivery uses controlled paralanguage and posture.")], s: [st("Plans pace, including slowing for key points.", 1, "AO4"), st("Plans eye contact with different audience sections.", 1, "AO4"), st("Plans gestures or posture to support meaning.", 1, "AO4"), st("Includes a nerve-management strategy such as rehearsal or pauses.", 2, "AO4"), st("Keeps the plan specific to the presentation purpose.", 1, "AO4")], l: lv6(), a: "Model: 'I will speak slowly at the opening, pause before the main argument, look at three sections of the audience and use open hand gestures. I will rehearse twice and use silent pauses instead of fillers if I feel nervous.'", errors: ["Generic advice not linked to the task.", "No nerve strategy."] }),
          op({ id: "el8-u4-delivery-confidence-q6", difficulty: "challenge", totalMarks: 12, extract: REHEARSAL, stem: "Answer all parts of this question about the rehearsal notes.", parts: [
            { label: "a", prompt: "Write down two delivery strengths or positive moments.", marks: 2 },
            { label: "b", prompt: "Explain how two weaknesses could affect the audience.", marks: 4 },
            { label: "c", prompt: "Evaluate the rehearsal notes as feedback and suggest improvements.", marks: 6 },
          ], p: [P("context", "Evaluating feedback", "Use evidence to judge delivery and plan improvement."), P("technique", "Paralanguage and body language", "Voice, pace, posture and eye contact shape audience response.")], s: [
            st("The voice was clear at the beginning.", 1, "AO1", { part: "a", evidence: "the voice was clear" }),
            st("The audience leaned forward at the photograph, showing engagement.", 1, "AO1", { part: "a", evidence: "leaned forward" }),
            st("Reading slides word for word can make listeners feel the speaker is not connecting with them.", 2, "AO3", { part: "b", evidence: "read most of the slides word for word" }),
            st("The fast pace and swallowed words make the ending hard to follow.", 2, "AO3", { part: "b", evidence: "several words were swallowed" }),
            st("The notes are useful because they identify specific, observable behaviours.", 2, "AO4", { part: "c", evidence: "read most of the slides" }),
            st("They balance strengths and weaknesses rather than only criticising.", 2, "AO4", { part: "c", evidence: "the voice was clear" }),
            st("Useful improvements include rehearsing without reading, slowing the ending and practising eye contact.", 2, "AO4", { part: "c" }),
          ], l: lv6("c"), a: "(a) Clear voice at the start; audience leaned forward at the photograph. (b) Reading slides reduces connection; rushing and swallowed words reduce clarity. (c) The feedback is specific and balanced; the speaker should rehearse without reading, slow the ending and practise eye contact.", errors: ["Ignoring positive moments.", "Suggesting vague improvements."] }),
        ],
      }),
    ],
    N("el8-u4-presentation-notes", "Presentations — notes", "Structure with introduction, points and conclusion; deliver with controlled pace, eye contact and confidence.", [
      ["Key idea", "A presentation needs a clear purpose, ordered points and signposts so listeners can follow."],
      ["Delivery", "Vary pace, pause for emphasis, project your voice and make eye contact."],
      ["Confidence", "Rehearse, replace fillers with pauses and focus on the message rather than nerves."],
    ]),
  ),
  lessonSpec(
    "lesson-4-3.ts", "lesson43", "4-3", "Media Texts and Digital Language",
    "I CAN analyse how media and online texts use conventions, language and layout to reach an audience.",
    ["KS3 Reading", "KS3 Spoken Language", "KS3 AO2", "KS3 AO3"],
    [
      ["Media text", "A text produced for a mass audience, such as an advert, article, poster or post."],
      ["Headline", "A short, attention-grabbing title, often at the top of a media text."],
      ["Slogan", "A memorable phrase that sums up a product, event or idea."],
      ["Call to action", "Words that tell the audience what to do next."],
      ["Hashtag", "A word or phrase beginning with # used to link posts on a topic."],
      ["Digital register", "The level of formality suitable for online communication."],
    ],
    [
      CON({
        id: "el8-u4-media-conventions", title: "Media conventions", skill: "Identify how headlines, slogans, layout and direct address shape a media text's purpose.",
        sections: [
          ["Conventions of media texts", "Media texts use attention-grabbing headlines, short sentences, slogans, images and clear calls to action. Layout matters: the biggest or boldest words usually carry the most important message."],
          ["Purpose and audience", "An advert for a cinema might aim to entertain and persuade families to visit. Its language is friendly, exciting and direct: 'Bring your family, your friends and your curiosity.' Ask who the text is for and what it wants them to do."],
        ],
        formulas: [
          ["Headline", "A short title designed to attract attention."],
          ["Slogan", "A memorable phrase that expresses the main message."],
          ["Call to action", "An instruction telling the audience what to do next."],
        ],
        example: { problem: "What is the purpose of 'Tickets are free, but places are limited. Reserve yours today'?", solution: "It is a call to action: it tells readers to reserve tickets now, using scarcity ('places are limited') to create urgency." },
        questions: [
          mcq({ id: "el8-u4-media-conventions-q1", stem: "What is the main function of a headline in a media text?", choices: [["a", "To give every detail in one sentence"], ["b", "To attract attention and signal the topic"], ["c", "To list the prices"], ["d", "To replace the call to action"]], correct: "b", p: [P("convention", "Headline", "A headline is designed to attract attention.")], r: "A headline is short and attention-grabbing so readers know the topic and want to read on.", answer: "**(b)** To attract attention and signal the topic.", errors: ["Choosing (a): headlines are brief, not detailed."] }),
          op({ id: "el8-u4-media-conventions-q2", difficulty: "core", totalMarks: 2, stem: "Give two conventions commonly found in adverts or posters.", p: [P("convention", "Media conventions", "Adverts use attention-grabbing and action-oriented features.")], s: [st("A headline or slogan.", 1, "AO4"), st("A call to action or direct address.", 1, "AO4")], a: "Headline/slogan and call to action/direct address." }),
          op({ id: "el8-u4-media-conventions-q3", difficulty: "core", totalMarks: 3, extract: AD, stem: "Explain the effect of the slogan-like phrase 'Bring your family, your friends and your curiosity.'", p: [P("technique", "Inclusive language", "Listing groups makes the event feel welcoming."), P("convention", "Slogan", "A rhythmic, memorable phrase carries the message.")], s: [st("The list of three creates a rhythm and makes the invitation feel generous.", 1, "AO2", { evidence: "your family, your friends and your curiosity" }), st("'Curiosity' adds an appealing, adventurous idea beyond just attending.", 1, "AO2", { evidence: "your curiosity" }), st("The direct 'your' involves the reader personally.", 1, "AO2", { evidence: "Bring your" })], a: "The phrase is memorable and inclusive, making the event sound welcoming and exciting.", errors: ["Only saying it is a slogan without explaining effect."] }),
          op({ id: "el8-u4-media-conventions-q4", difficulty: "challenge", totalMarks: 4, extract: AD, stem: "How can you tell who the audience is for this media text? Refer to two features.", p: [P("context", "Audience", "Language and content reveal the intended audience."), P("convention", "Media text", "Features such as free tickets and family wording target particular readers.")], s: [st("'Bring your family' suggests families are welcome.", 1, "AO1", { evidence: "Bring your family" }), st("Free ice-cream for children under twelve appeals to parents and children.", 1, "AO1", { evidence: "free ice-cream for children under twelve" }), st("'Classic adventures' and 'live organ music' suggest an audience interested in heritage events.", 1, "AO2", { evidence: "classic adventures" }), st("The friendly, exciting tone is informal rather than formal.", 1, "AO2")], a: "The audience is likely local families and people interested in classic cinema; free tickets, children's ice-cream and friendly language all point to that.", errors: ["Saying 'everyone' without evidence."] }),
          op({ id: "el8-u4-media-conventions-q5", difficulty: "challenge", totalMarks: 6, extract: AD, stem: "Write a headline and a slogan for a school fun day. Make the slogan memorable and include a call to action.", p: [P("skill", "Creating media language", "Use concise, appealing language for a specific audience."), P("convention", "Headline and slogan", "Headlines attract; slogans are memorable and persuasive.")], s: [st("Headline is short and attention-grabbing.", 2, "AO4"), st("Slogan is memorable and relevant to the event.", 2, "AO4"), st("Includes a clear call to action.", 2, "AO4")], l: lv6(), a: "Model headline: 'Fun Day Friday!' Slogan: 'Games, music and memories—be there!' Call to action: 'Sign up by Wednesday.'", errors: ["Too long or generic.", "No call to action."] }),
          op({ id: "el8-u4-media-conventions-q6", difficulty: "challenge", totalMarks: 12, extract: AD, stem: "Answer all parts of this question about the cinema advert.", parts: [
            { label: "a", prompt: "Write down two factual details from the advert.", marks: 2 },
            { label: "b", prompt: "Explain how the writer uses persuasive language.", marks: 4 },
            { label: "c", prompt: "Evaluate the effectiveness of the advert's media conventions.", marks: 6 },
          ], p: [P("context", "Media analysis", "Distinguish facts from persuasion and evaluate conventions."), P("technique", "Persuasive media language", "Headlines, slogans and calls to action aim to influence.")], s: [
            st("The cinema reopens on Saturday.", 1, "AO1", { part: "a", evidence: "Reopens Saturday" }),
            st("Tickets are free and places are limited.", 1, "AO1", { part: "a", evidence: "Tickets are free" }),
            st("Direct address ('Bring your family') involves the reader.", 1, "AO2", { part: "b", evidence: "Bring your family" }),
            st("The phrase 'places are limited' creates urgency.", 1, "AO2", { part: "b", evidence: "places are limited" }),
            st("'Classic adventures' and 'live organ music' create excitement and curiosity.", 1, "AO2", { part: "b", evidence: "live organ music" }),
            st("The call to action 'Reserve yours today' tells readers what to do.", 1, "AO2", { part: "b", evidence: "Reserve yours today" }),
            st("The headline 'COMING SOON' is short and attention-grabbing.", 2, "AO2", { part: "c", evidence: "COMING SOON" }),
            st("The headline 'The Old Cinema Reopens Saturday' gives clear information quickly.", 2, "AO2", { part: "c", evidence: "The Old Cinema Reopens Saturday" }),
            st("The combination of free tickets, limited places and a call to action makes the advert persuasive.", 2, "AO3", { part: "c", evidence: "places are limited" }),
          ], l: lv6("c"), a: "(a) Reopens Saturday; tickets are free and places limited. (b) Direct address, urgency and exciting details persuade readers. (c) The advert is effective because the headline attracts attention, the details create appeal and the call to action is clear.", errors: ["Treating every detail as persuasion.", "Ignoring the headline."] }),
        ],
      }),
      CON({
        id: "el8-u4-digital-language", title: "Digital language", skill: "Analyse informal online conventions such as hashtags, abbreviations and direct address.",
        sections: [
          ["Online conventions", "Digital texts often use informal register, short sentences, exclamation marks, emojis, hashtags and direct address. Hashtags group posts by topic; abbreviations save time; emojis add tone."],
          ["Audience and purpose online", "A school garden post aims to inform and encourage participation. It is addressed to students, parents and staff who follow the school account. The casual tone suits social media but would not suit a formal letter to the head teacher."],
        ],
        formulas: [
          ["Hashtag", "A # symbol followed by a word or phrase linking posts on a topic."],
          ["Digital register", "Often informal, brief and direct."],
          ["Call to action online", "Telling readers what to do next, such as 'bring gloves'."],
        ],
        example: { problem: "What does '#GrowTogether' do in a school garden post?", solution: "It groups the post with others about growing and community, helping people find related posts." },
        questions: [
          mcq({ id: "el8-u4-digital-language-q1", stem: "What is the function of a hashtag?", choices: [["a", "To make a post private"], ["b", "To link posts on the same topic"], ["c", "To correct spelling"], ["d", "To add a formal title"]], correct: "b", p: [P("definition", "Hashtag", "A symbol that links posts by topic.")], r: "Hashtags group posts so readers can find content on the same subject.", answer: "**(b)** To link posts on the same topic.", errors: ["Choosing (a): hashtags do not control privacy."] }),
          op({ id: "el8-u4-digital-language-q2", difficulty: "core", totalMarks: 2, stem: "Give two features of informal digital writing.", p: [P("convention", "Digital register", "Online writing is often brief, casual and direct.")], s: [st("Short sentences and exclamation marks.", 1, "AO4"), st("Hashtags, emojis or abbreviations.", 1, "AO4")], a: "Short sentences/exclamation marks and hashtags/emojis/abbreviations." }),
          op({ id: "el8-u4-digital-language-q3", difficulty: "core", totalMarks: 3, extract: POST, stem: "How does the tone of the post differ from a formal letter to the head teacher? Refer to the post.", p: [P("context", "Register", "Audience and purpose determine formality."), P("technique", "Tone", "Word choice and punctuation create tone.")], s: [st("The post is excited and casual ('BREAKING', 'Huge thanks'), while a letter would be measured.", 1, "AO1", { evidence: "BREAKING" }), st("It uses informal details such as 'bring gloves and a water bottle'.", 1, "AO2", { evidence: "bring gloves" }), st("Hashtags and direct address suit social media but would be inappropriate in a formal letter.", 1, "AO3", { evidence: "#GrowTogether" })], a: "The post is enthusiastic and informal, using hashtags and direct instructions, unlike the measured tone of a formal letter.", errors: ["Saying only 'it is informal' without examples."] }),
          op({ id: "el8-u4-digital-language-q4", difficulty: "challenge", totalMarks: 4, extract: POST, stem: "Why is this post likely to be effective for its audience? Refer to two features.", p: [P("context", "Digital audience", "Posts reach people who already follow the school."), P("technique", "Call to action", "Clear instructions encourage participation.")], s: [st("It announces a clear update: twelve raised beds.", 1, "AO1", { evidence: "12 raised beds" }), st("It thanks volunteers, which builds community goodwill.", 1, "AO2", { evidence: "Huge thanks" }), st("It gives a specific next step: Friday at 3:30 and what to bring.", 1, "AO2", { evidence: "Friday at 3:30" }), st("Hashtags help the post reach people interested in gardening and school life.", 1, "AO2", { evidence: "#SchoolGarden" })], a: "The post is effective because it shares good news, thanks volunteers, gives clear next steps and uses hashtags to reach the right audience.", errors: ["Describing the post without linking features to effect."] }),
          op({ id: "el8-u4-digital-language-q5", difficulty: "challenge", totalMarks: 6, extract: POST, stem: "Rewrite the post as a formal paragraph for the school newsletter. Keep the key information but change the register.", p: [P("skill", "Changing register", "Adapt language and tone for a formal audience."), P("convention", "Formal writing", "Use complete sentences, measured tone and no hashtags.")], s: [st("Converts the casual opening into a measured statement.", 2, "AO4"), st("Keeps the key facts: twelve beds, thanks, workday details.", 2, "AO1"), st("Removes hashtags and informal phrasing.", 2, "AO5")], l: lv6(), a: "Model: 'The school garden now has twelve raised beds. We thank everyone who helped dig, plant and water. The next workday is Friday at 3:30; volunteers should bring gloves and a water bottle.'", errors: ["Leaving 'BREAKING' or hashtags.", "Losing the workday details."] }),
          op({ id: "el8-u4-digital-language-q6", difficulty: "challenge", totalMarks: 12, extract: POST, stem: "Answer all parts of this question about the school garden post.", parts: [
            { label: "a", prompt: "Who is the likely audience for the post? Give two clues.", marks: 2 },
            { label: "b", prompt: "Explain three digital language features used.", marks: 4 },
            { label: "c", prompt: "Evaluate whether the post successfully encourages participation.", marks: 6 },
          ], p: [P("context", "Digital audience", "Infer audience from language and purpose."), P("technique", "Online conventions", "Hashtags, direct address and informal tone shape response.")], s: [
            st("Students and parents who follow the school account.", 1, "AO1", { part: "a", evidence: "our school garden" }),
            st("People interested in gardening or volunteering.", 1, "AO1", { part: "a", evidence: "#GrowTogether" }),
            st("'BREAKING' grabs attention in an informal way.", 1, "AO2", { part: "b", evidence: "BREAKING" }),
            st("Hashtags link the post to related topics.", 1, "AO2", { part: "b", evidence: "#SchoolGarden" }),
            st("Direct instructions ('bring gloves') tell readers what to do.", 1, "AO2", { part: "b", evidence: "bring gloves" }),
            st("The casual tone ('Huge thanks') builds friendliness.", 1, "AO2", { part: "b", evidence: "Huge thanks" }),
            st("The post clearly states the benefit and progress (twelve raised beds).", 2, "AO3", { part: "c", evidence: "12 raised beds" }),
            st("It thanks volunteers, making people feel valued.", 2, "AO3", { part: "c", evidence: "Huge thanks" }),
            st("It gives specific participation details, making action easy.", 2, "AO3", { part: "c", evidence: "Friday at 3:30" }),
          ], l: lv6("c"), a: "(a) Students, parents and school followers interested in gardening or volunteering. (b) Informal opening, hashtags, direct instructions and friendly tone. (c) The post is persuasive because it shares progress, thanks volunteers and gives clear next steps.", errors: ["Listing features without effect.", "Ignoring the call to action."] }),
        ],
      }),
    ],
    N("el8-u4-media-notes", "Media and digital texts — notes", "Media texts use headlines, slogans and calls to action; online posts use hashtags, direct address and informal register.", [
      ["Key idea", "Ask who the text is for and what it wants them to do."],
      ["Media conventions", "Headlines attract, slogans are memorable, calls to action tell readers what to do."],
      ["Digital language", "Hashtags, emojis, abbreviations and casual tone suit online audiences but not formal writing."],
    ]),
  ),
];
