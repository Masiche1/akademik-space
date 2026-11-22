import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const SPEECH: TextExtract = {
  title: "Remarks Before the Council Vote",
  author: "Written for Akademik Space",
  source: "Speech by a branch librarian to the city council and residents, delivered the evening of a vote on closing the Harbor Street Library",
  text: "Neighbors, friends, and the few of you who still owe us fines: thank you for coming.\n\nTonight the council votes on whether to close the Harbor Street branch. They will show you numbers, and the numbers are real. But a library has never been a line in a budget. It is the one room in this city where no one asks what you can pay. Last winter, a man who had been sleeping in his car used our computers to apply for the job he holds today. Last spring, forty children learned to read in the corner beneath the clock.\n\nI am not asking you to ignore the budget. I am asking you to count what the budget cannot: the hours, the second chances, the quiet. Close this branch, and we will save money. We will also teach this neighborhood that its needs are the first thing to go.\n\nVote as though the next generation is already seated in these chairs. They are.",
};

const DRAFT: TextExtract = {
  title: "Draft thesis and paragraph",
  author: "Written for Akademik Space",
  source: "A student's first draft for an argument essay on school homework",
  text: "Homework is completely useless and should be banned in every school. Teachers who assign it do not care about students. Everyone knows that students learn nothing from homework, so there is no reason to keep it. Anyone who disagrees is simply ignoring the facts.",
};

export const lesson31: Lesson = {
  id: "ela11-u3-lesson-3-1",
  code: "3-1",
  title: "Argument and Rhetorical Analysis Writing",
  goal: "I CAN analyze a text's rhetorical situation and choices without summarizing, and write a knowledgeable, qualified argument that anticipates my audience's knowledge, concerns and values.",
  standards: ["W.11-12.1", "W.11-12.1a", "W.11-12.1b", "W.11-12.9b"],
  vocabulary: [
    { term: "Rhetorical situation", definition: "The context of a text: who is speaking (speaker), to whom (audience), why (purpose) and under what circumstances (context)." },
    { term: "Rhetorical choice", definition: "A deliberate decision about content, structure, diction or tone that an author makes to influence a particular audience." },
    { term: "Line of reasoning", definition: "The logical path of a rhetorical analysis, in which each body paragraph builds on the last to support one defensible claim about how the text works." },
    { term: "Qualified claim", definition: "A claim that includes precise limits, such as 'in most cases' or 'when funding allows', so that it is accurate and defensible rather than absolute." },
    { term: "Concession", definition: "An acknowledgment that an opposing view has a valid point, usually followed by an explanation of why the writer's position still holds." },
    { term: "Common ground", definition: "A shared value, belief or fact that writer and audience both accept, used as a starting point for persuasion." },
    { term: "Overgeneralization", definition: "A claim that uses words such as 'always', 'everyone' or 'never' and so ignores exceptions the audience can easily name." },
  ],
  concepts: [
    {
      id: "ela11-u3-rhetorical-analysis",
      title: "Writing a rhetorical analysis",
      skill: "Identify the rhetorical situation and analyze how a speaker's choices serve purpose and audience, rather than summarizing the text.",
      lesson: {
        sections: [
          {
            heading: "Begin with the rhetorical situation",
            body: "A rhetorical analysis explains **how** and **why** a text persuades, not whether you agree with it. Start by naming the **speaker** (and the credibility the speaker brings), the **audience** (who is actually listening and what they value), the **purpose** (what the speaker wants them to think or do) and the **context** (the moment that makes the text necessary). These four facts decide which choices make sense. A librarian speaking to a council deciding a budget needs to respect numbers while shifting what counts as valuable; the same choices would be odd in a letter to children.",
          },
          {
            heading: "Analyze choices, not content",
            body: "Summary reports what the speaker says. Analysis claims what a choice **does** to this audience for this purpose. Build a **line of reasoning**: a defensible claim (for example, 'the librarian concedes the council's evidence, then widens the definition of value') supported by body paragraphs, each moving the argument forward. In each paragraph, quote briefly, name the choice (concession, contrast, direct address, concrete anecdote, syntax), and explain its effect on the audience in relation to the purpose. Avoid verdicts such as 'effective' unless you explain exactly why. Write in the present tense and refer to the speaker's moves, not your opinion of the issue.",
          },
        ],
        keyFormulas: [
          { name: "Rhetorical situation", statement: "Speaker + audience + purpose + context: name all four before analyzing any choice." },
          { name: "Choice, effect, purpose", statement: "Identify the choice, explain its effect on this audience, and link it to the speaker's purpose." },
          { name: "Analysis test", statement: "If a sentence could be written without reading the text closely, it is probably summary or a generic comment." },
        ],
        workedExample: {
          problem: "Write one analytical sentence about the line 'They will show you numbers, and the numbers are real.'",
          solution: "By granting that 'the numbers are real' before challenging them, the librarian concedes the council's strongest ground, which signals fairness to skeptical officials and prepares them to accept her argument that value extends beyond a budget. The sentence names a choice (concession), explains its effect on a specific audience, and links it to her purpose.",
        },
      },
      questions: [
        {
          id: "ela11-u3-rhetorical-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPEECH,
          stem: "Which statement best identifies the rhetorical situation of this speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A resident thanks the librarian for years of service at a retirement party." },
              { id: "b", text: "A librarian addresses residents and council members on the night of a vote, aiming to persuade them to keep the branch open." },
              { id: "c", text: "A librarian describes the history of the Harbor Street Library to visitors." },
              { id: "d", text: "A council member explains to residents why the library budget must be cut." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhetorical situation", statement: "Speaker, audience, purpose and context together define why a text is written as it is." }],
            steps: [{ reasoning: "Only (a) names the speaker, the mixed audience, the persuasive purpose and the context of the vote, all supported by the opening and the closing request to 'Vote'.", evidence: "Tonight the council votes", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)**. The speaker is the librarian, the audience is residents and the council, the purpose is to keep the branch open and the context is the vote. The others misidentify the speaker or purpose.",
            commonErrors: ["Choosing (c) because the library is the topic, without noticing that the speech is an argument tied to a vote."],
          },
        },
        {
          id: "ela11-u3-rhetorical-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SPEECH,
          stem: "Which sentence is rhetorical analysis rather than summary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speech is very persuasive and makes the audience feel emotions." },
              { id: "b", text: "The librarian ends by asking the council to vote and then says that the children are already seated." },
              { id: "c", text: "The librarian talks about a man who slept in his car and about forty children who learned to read." },
              { id: "d", text: "By pairing two concrete stories with the admission that 'the numbers are real,' the librarian answers a budget argument with human evidence her cost-focused audience cannot easily dismiss." },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Analysis over summary", statement: "Analysis names a choice, its effect on the audience and its link to purpose." }],
            steps: [
              { reasoning: "Option (c) names specific choices (two concrete stories, a concession).", evidence: "the numbers are real", marks: 1, markCode: "AO2" },
              { reasoning: "It explains the effect on the particular audience (a cost-focused council) and ties it to the purpose of resisting a budget argument.", evidence: "cost-focused audience", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(c)**. It links choice, audience and purpose. (a) and (d) summarize, and (b) is a vague verdict with no choice named.",
            commonErrors: ["Choosing (b), which sounds evaluative but names no choice and explains no effect."],
          },
        },
        {
          id: "ela11-u3-rhetorical-analysis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SPEECH,
          stem: "Write one analytical paragraph (four to six sentences) explaining how the librarian's treatment of the budget in the second and third paragraphs serves her purpose with this audience. Quote at least one phrase and focus on choices and effects, not summary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical analysis", statement: "Claim about how choices serve purpose and audience, supported by embedded evidence and explanation." },
              { kind: "technique", name: "Concession and redefinition", statement: "A writer can accept an opponent's point and then redefine the terms of the debate." },
            ],
            steps: [
              { reasoning: "A defensible claim about her strategy: she concedes the budget's validity, then redefines value so the council measures more than money.", evidence: "I am not asking you to ignore the budget", marks: 2, markCode: "AO4" },
              { reasoning: "At least one short, accurate quotation is embedded, such as 'count what the budget cannot'.", evidence: "count what the budget cannot", marks: 2, markCode: "AO1" },
              { reasoning: "Explains the effect on the audience: concession builds trust with skeptical officials, and the contrast between 'save money' and 'teach this neighborhood' shifts the cost of closing to a moral register.", evidence: "the first thing to go", marks: 2, markCode: "AO2" },
            ],
            levels: levels("analysis", 6),
            finalAnswer: "Model: The librarian wins the council's trust by conceding rather than attacking: 'the numbers are real,' she says, and she is 'not asking you to ignore the budget.' This disarms officials who expect an emotional plea. She then redirects them to 'count what the budget cannot,' using the verb 'count' to borrow the council's own language of accounting for values it excludes. The contrast between saving money and teaching a neighborhood 'its needs are the first thing to go' reframes closure as a moral cost, which strengthens her purpose of keeping the branch open.",
            commonErrors: ["Retelling what she says about the budget without naming a choice.", "Judging the speech 'effective' without explaining why.", "Analyzing the issue (library funding) instead of the speaker's moves."],
          },
        },
        {
          id: "ela11-u3-rhetorical-analysis-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: SPEECH,
          stem: "Answer all parts about the librarian's speech.",
          parts: [
            { label: "a", prompt: "State the speaker, audience, purpose and context of the speech.", marks: 2 },
            { label: "b", prompt: "A student writes: 'The opening is funny, so the audience likes her.' Explain, with a quotation, how the opening greeting actually supports her purpose and credibility.", marks: 4 },
            { label: "c", prompt: "Write a rhetorical analysis paragraph arguing how the final paragraph (the last two sentences) works as a conclusion. Include a defensible claim, at least two quotations and commentary on syntax, diction and effect on the audience.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical situation", statement: "Speaker, audience, purpose and context shape every rhetorical choice." },
              { kind: "skill", name: "Line of reasoning", statement: "Each paragraph advances a defensible claim about how the text persuades." },
              { kind: "technique", name: "Syntax and diction", statement: "Sentence form and word choice, such as a short final sentence or the verb 'seated', carry persuasive force." },
            ],
            steps: [
              { part: "a", reasoning: "Speaker: a branch librarian with insider knowledge of the library's daily work; audience: council members and residents.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Purpose: to persuade them to vote against closing; context: the council vote that evening.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The humor ('the few of you who still owe us fines') creates warmth and familiarity, which positions her as part of the community rather than an outsider lobbying for her job.", evidence: "the few of you who still owe us fines", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Self-deprecating humor about her own institution builds goodwill and trust (credibility) before she makes a serious request, preparing the audience to listen rather than resist.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "A defensible claim, for example that the conclusion turns an abstract future into the present moment, making the vote immediate and personal.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Accurate embedded quotation(s) from the closing, such as 'Vote as though the next generation is already seated in these chairs'.", evidence: "Vote as though the next generation is already seated in these chairs", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Analysis of the imperative verb and conditional frame ('Vote as though'): it directs the audience's action and asks them to imagine children whose future depends on the decision.", evidence: "Vote as though", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Analysis of the short, blunt final sentence 'They are.': the abrupt syntax and present tense turn the imagined scenario into fact, since the children already use the library, creating urgency.", evidence: "They are.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Link to the audience and purpose: for a council weighing costs, the final image shifts the stakes from money to responsibility to the young, strengthening the call to vote no.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Accurate conventions, with smooth transitions and present-tense analytical voice.", marks: 1, markCode: "AO5" },
            ],
            levels: levels("analysis", 10, "c"),
            finalAnswer: "(a) Speaker: a branch librarian; audience: council members and residents; purpose: persuade them to keep the branch open; context: the vote that night. (b) The self-mocking greeting, 'the few of you who still owe us fines,' signals warmth and shared community, which builds the goodwill and credibility she needs before making a serious request. (c) Model: The conclusion turns the future into the present. The imperative 'Vote as though the next generation is already seated in these chairs' directs the council to act while asking them to picture children, and the conditional 'as though' invites imaginative responsibility. Then the abrupt sentence 'They are.' removes the conditional: the short syntax and present tense insist that the children already depend on the branch. For a council focused on cost, the final turn moves the stakes from money to duty, leaving them with an image they must answer with their vote.",
            commonErrors: ["Saying the humor is 'funny' or 'makes people like her' without linking it to credibility.", "Summarizing the final paragraph instead of analyzing syntax and effect.", "Offering a general claim ('it is a strong ending') with no specific choice."],
          },
        },
      ],
    },
    {
      id: "ela11-u3-nuanced-argument",
      title: "Writing a nuanced argument",
      skill: "Develop a knowledgeable, qualified claim that anticipates the audience's knowledge, concerns and values.",
      lesson: {
        sections: [
          {
            heading: "Claims with the right size",
            body: "Mature arguments are **knowledgeable**, **precise** and **qualified**. Absolute claims ('homework is useless', 'everyone knows') invite an easy rebuttal because readers can name one exception. A **qualified claim** is narrower and therefore stronger: 'For elementary students, extensive homework yields little academic benefit, so districts should cap it at modest levels.' Show knowledge by specifying who, when and how much, and by using accurate evidence rather than loaded language such as 'teachers do not care'. Qualifying is not weakness; it shows you understand the issue's complexity.",
          },
          {
            heading: "Anticipating the audience",
            body: "Before drafting, ask what the audience **already knows**, what they **fear or value**, and what objection they will raise first. Then respond in the draft: begin with **common ground** (a value you share, such as wanting students to succeed), make a **concession** to the strongest opposing point, and show why your position still holds. Use a respectful, measured tone; insulting opponents ('anyone who disagrees is ignoring the facts') loses the very readers you need to convince. Finish with a conclusion that clarifies what follows if your claim is accepted.",
          },
        ],
        keyFormulas: [
          { name: "Qualified claim", statement: "Specify who, when and how much: replace 'always', 'never' and 'everyone' with precise limits." },
          { name: "Audience check", statement: "Knowledge, concerns, values: what do readers already know, worry about and prize?" },
          { name: "Concede and respond", statement: "Common ground, then concession, then reason your position still holds." },
        ],
        workedExample: {
          problem: "Revise the claim 'Homework is completely useless and should be banned' for a skeptical audience of parents.",
          solution: "Revision: Although many parents value homework as a sign of rigor, research suggests that heavy nightly assignments in elementary grades produce little learning, so schools should limit it to short tasks that build reading habits. The revision starts with the audience's value, limits the claim to a group and a degree, and replaces an absolute with a reasoned policy.",
        },
      },
      questions: [
        {
          id: "ela11-u3-nuanced-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "Which revision turns the draft's first sentence into the strongest qualified claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homework is always bad and should be banned immediately." },
              { id: "b", text: "Many people have different opinions about homework." },
              { id: "c", text: "Because evidence shows little benefit from heavy homework in the early grades, schools should limit nightly assignments for elementary students." },
              { id: "d", text: "Homework might possibly be maybe a little bit useless in some ways." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Qualified claim", statement: "A precise limit on who, when and how much makes a claim defensible without making it vague." }],
            steps: [{ reasoning: "Only (c) limits the claim to a group (elementary students) and a degree (heavy, nightly), gives a reason and still takes a clear position.", evidence: "heavy homework in the early grades", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(c)**. It is precise and defensible. (a) is hedged into vagueness, (b) is absolute and (d) takes no position.",
            commonErrors: ["Choosing (a), mistaking vague hedging for qualification."],
          },
        },
        {
          id: "ela11-u3-nuanced-argument-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: DRAFT,
          stem: "The audience is parents who believe homework builds discipline. Which sentence best anticipates their concern while keeping the writer's position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parents who like homework are simply wrong and should read more research." },
              { id: "b", text: "Some parents like homework and some do not, and that is fine." },
              { id: "c", text: "Homework is bad, so parents should stop caring about discipline." },
              { id: "d", text: "Parents rightly want children to develop discipline, but short, purposeful tasks build that habit as well as long assignments do, without the stress." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Concession", statement: "Acknowledge the audience's valid value, then explain why your position still holds." }],
            steps: [
              { reasoning: "Option (b) concedes the parents' legitimate value of discipline and so builds common ground.", evidence: "Parents rightly want children to develop discipline", marks: 1, markCode: "AO4" },
              { reasoning: "It then maintains the writer's position by arguing that shorter tasks achieve the same goal.", evidence: "short, purposeful tasks build that habit", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(b)**. It concedes and responds. (a) and (c) insult or dismiss the audience, and (d) abandons the position.",
            commonErrors: ["Choosing (d) because it sounds respectful, though it does not argue anything."],
          },
        },
        {
          id: "ela11-u3-nuanced-argument-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DRAFT,
          stem: "Rewrite the draft paragraph as a short passage (four to six sentences) for an audience of parents and teachers. Replace the absolute claims with a qualified claim, include one concession to the opposing view and keep a respectful tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Qualified claim", statement: "Limit a claim by group, degree or condition." },
              { kind: "technique", name: "Concession", statement: "Acknowledge an opposing point, then respond." },
            ],
            steps: [
              { reasoning: "A clear, qualified claim replaces 'completely useless' and 'banned', limiting scope by grade level or amount.", evidence: "Homework is completely useless", marks: 2, markCode: "AO4" },
              { reasoning: "A fair concession to the opposing view (for example, that homework can build practice or responsibility) followed by a reasoned response.", marks: 2, markCode: "AO4" },
              { reasoning: "Respectful, measured tone with no personal attacks on teachers, accurate conventions and logical flow.", evidence: "Teachers who assign it do not care about students", marks: 2, markCode: "AO5" },
            ],
            levels: levels("writing", 6),
            finalAnswer: "Model: Many teachers assign homework to build practice and responsibility, and in some courses that purpose is sound. However, research on younger students suggests that long nightly assignments add little to learning while cutting into sleep and family time. Schools should therefore limit homework in the elementary grades to short tasks that support reading habits, and reserve longer assignments for older students who can benefit from independent practice.",
            commonErrors: ["Keeping 'completely' or 'everyone' in the revision.", "Conceding so much that the writer no longer takes a position.", "Replacing the insult with a different insult."],
          },
        },
        {
          id: "ela11-u3-nuanced-argument-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: DRAFT,
          stem: "Answer all parts about improving the student's argument on homework. The intended audience is a school board that includes teachers, parents and one student representative.",
          parts: [
            { label: "a", prompt: "Identify three problems in the draft that would damage the writer's credibility with this audience.", marks: 3 },
            { label: "b", prompt: "Describe what each group on the board (teachers, parents, the student representative) is likely to know, value or fear about homework, and how the writer could address each.", marks: 5 },
            { label: "c", prompt: "Write an argument paragraph (six to eight sentences) that makes a qualified claim about homework policy, begins from common ground, concedes the strongest opposing point and ends by stating what the board should do.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience analysis", statement: "Consider readers' knowledge, concerns and values before choosing evidence and tone." },
              { kind: "technique", name: "Concession and qualification", statement: "Concede fairly and qualify claims to keep them defensible." },
              { kind: "convention", name: "Formal tone", statement: "Academic argument avoids loaded language and personal attack." },
            ],
            steps: [
              { part: "a", reasoning: "Absolute, overgeneralized claims ('completely useless', 'everyone knows') are easy to refute.", evidence: "Everyone knows", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "The attack on teachers' motives is unsupported and insulting to part of the audience.", evidence: "do not care about students", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "No evidence is offered, and the dismissal of opponents ('ignoring the facts') ignores counterclaims.", evidence: "simply ignoring the facts", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Teachers: they know homework's classroom role and may fear being blamed; address them by acknowledging its practice value and focusing on quality.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Parents: they value discipline and rigor and may fear lower standards; address them with evidence that shorter tasks maintain habits.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "The student representative: knows the workload and stress firsthand and values balance; address with specific evidence about sleep and time.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Opens with common ground, such as the shared goal of helping students learn.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "A qualified, specific claim about policy with limits by grade or amount.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Concedes the strongest opposing point fairly and responds with reasoning or evidence.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Concludes with a clear recommendation to the board, in a formal, respectful tone.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Accurate conventions, transitions and sentence variety.", marks: 2, markCode: "AO5" },
            ],
            levels: levels("writing", 12, "c"),
            finalAnswer: "(a) Absolute claims; unsupported attack on teachers; no evidence and dismissal of opponents. (b) Teachers value practice and fear blame, so credit its purposes and focus on quality; parents value discipline and fear lowered standards, so show shorter tasks build habits; the student representative knows the workload and values balance, so cite sleep and time costs. (c) Model: Every member of this board wants students to learn, and homework has long been trusted as a way to build discipline. That trust is not misplaced for older students who practice independently. However, research on younger children suggests that heavy nightly assignments add little to learning, while consuming sleep and family time. The board should therefore adopt a policy that limits elementary homework to twenty minutes of reading and short practice, while allowing high school teachers to assign longer work tied to course goals. Such a policy keeps the habits parents value and respects the limits students face.",
            commonErrors: ["Opening with a statistic instead of common ground.", "Qualifying so heavily that no clear recommendation remains.", "Conceding a weak opposing point rather than the strongest."],
          },
        },
      ],
    },
  ],
};
