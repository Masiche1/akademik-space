import type { Lesson } from "../../../types.ts";

const editorialExtract = {
  title: "Editorial: The Case for Later School Starts",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Every September, schools across the country drag their gates open at 8:30 while teenagers' bodies insist it is still night. The science is not complicated: adolescent sleep cycles shift later, meaning most teenagers are biologically incapable of waking fully at that hour. We are asking them to learn in a state of chronic exhaustion and calling it discipline.\n\nThe evidence for later starts is overwhelming. Schools that have moved to 9:00 or 9:30 report better attendance, higher grades, and fewer car accidents involving teenage drivers. The American Academy of Pediatrics has recommended start times of 8:30 or later for over a decade. Other countries — Finland among them — have long understood that sleep is not laziness.\n\nOpponents warn of logistical problems: after-school sports, working parents, bus schedules. These are real difficulties. But they are difficulties of implementation, not reasons to deny teenagers the sleep their brains require.\n\nThis is not a favour to students. It is an acknowledgement that we have been scheduling our schools backwards, and that the cost has been paid in tiredness, anxiety and underachievement.",
};

const blogExtract = {
  title: "My Zero-Waste Year: A Honest Report",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Everyone told me it would change my life. A year of zero waste. No plastic, no packaging, no excuses.\n\nHere is what actually happened. Month one was exciting — I filled a single jar with my rubbish and felt like a saint. Month three was harder: I discovered that 'package-free' shampoo does not exist in my town, and my local greengrocer closed. Month six was a crisis: I bought a sandwich in plastic wrap because I was hungry, late, and human.\n\nBy month nine I had stopped trying to be perfect. I still buy vegetables in bags. I still throw things away. But I think before I buy now, and I mend what I can, and I am honest about the gap between my ideals and my actual life.\n\nZero waste was not the destination. It was the direction. That distinction matters more than any jar of pristine rubbish ever could.",
};

export const lesson31: Lesson = {
  id: "cile-u3-lesson-3-1",
  code: "3-1",
  title: "Argument and viewpoint",
  goal: "I CAN identify a writer's argument, distinguish fact from opinion, and evaluate the strength of their reasoning.",
  standards: ["0861 Reading: argument, opinion and evidence"],
  vocabulary: [
    { term: "Argument", definition: "A reasoned case for a viewpoint, supported by evidence." },
    { term: "Opinion", definition: "A personal belief or judgement that cannot be proven true or false." },
    { term: "Fact", definition: "Something that can be verified as true or false." },
    { term: "Counter-argument", definition: "The opposing view, which a writer may acknowledge and rebut." },
    { term: "Bias", definition: "A tendency to favour one side, often by selecting evidence selectively." },
    { term: "Reasoning", definition: "The logical connection between evidence and conclusion." },
  ],
  concepts: [
    {
      id: "cile-u3-argument-viewpoint",
      title: "Identifying argument and viewpoint",
      skill: "Distinguish the writer's argument from supporting detail, separate fact from opinion, and spot bias.",
      lesson: {
        sections: [
          {
            heading: "Fact vs opinion",
            body: "- **Fact**: verifiable — 'schools that moved to 9:00 report better attendance' (can be checked).\n- **Opinion**: a judgement — 'we have been scheduling our schools backwards' (a claim, not a measurement).\n- Arguments blend both: facts provide evidence; opinions provide the stance.",
          },
          {
            heading: "Spotting bias",
            body: "Bias is not always deliberate. Look for:\n\n- **Loaded language**: 'chronic exhaustion', 'dragged their gates open'.\n- **One-sided evidence**: only supportive studies cited.\n- **Straw man**: opponents' views oversimplified ('logistical problems' dismissed as 'difficulties of implementation').",
          },
          {
            heading: "Evaluating reasoning",
            body: "Ask: Does the evidence actually support the conclusion? Are counter-arguments addressed fairly? Is the logic sound, or does it leap from 'some schools improved' to 'all schools should change'?",
          },
        ],
        keyFormulas: [
          { name: "Fact + opinion = argument", statement: "An argument combines verifiable evidence (facts) with a judgement (opinion) and reasoning that links them." },
        ],
        workedExample: {
          problem: "Editorial: 'The science is not complicated.' Is this fact or opinion?",
          solution: "It is a rhetorical claim blending both: the sleep-cycle science is factual, but 'not complicated' is an opinion minimising complexity. It functions as a persuasive framing device.",
        },
      },
      questions: [
        {
          id: "cile-u3-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "What is the writer's main argument in this editorial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teenagers should sleep more" },
              { id: "b", text: "Schools should start later to match teenage sleep cycles" },
              { id: "c", text: "Finnish schools are better than British ones" },
              { id: "d", text: "Sleep is more important than school" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Argument", statement: "The central claim: later school starts align with adolescent biology." },
            ],
            steps: [
              { reasoning: "The editorial's thesis is that start times should change to match sleep science.", working: "\\text{later starts}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Schools should start later to match teenage sleep cycles",
            commonErrors: ["Choosing (a) — the argument is about school schedules, not individual sleep habits."],
          },
        },
        {
          id: "cile-u3-arg-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: editorialExtract,
          stem: "Identify one fact and one opinion from the editorial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact vs opinion", statement: "Facts are verifiable; opinions are judgements." },
            ],
            steps: [
              { reasoning: "Fact: 'schools that have moved to 9:00 or 9:30 report better attendance, higher grades'.", working: "\\text{verifiable claim}", marks: 1, markCode: "AO2" },
              { reasoning: "Opinion: 'we have been scheduling our schools backwards' — a judgement, not a measurement.", working: "\\text{judgement}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fact: later-start schools report better attendance/grades. Opinion: 'scheduling our schools backwards' — a judgement about the current system.",
            commonErrors: ["Labeling a scientific claim ('adolescent sleep cycles shift later') as opinion — it is verifiable."],
          },
        },
        {
          id: "cile-u3-arg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: editorialExtract,
          stem: "Evaluate the strength of the writer's reasoning in the paragraph beginning 'Opponents warn of logistical problems'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reasoning", statement: "Check whether counter-arguments are addressed fairly and whether the rebuttal is logical." },
            ],
            steps: [
              { reasoning: "The writer acknowledges opponents' concerns — fair engagement.", working: "\\text{acknowledges}", marks: 1, markCode: "AO2" },
              { reasoning: "But dismisses them as 'difficulties of implementation, not reasons' — a category distinction that may oversimplify.", working: "\\text{dismisses as implementation}", marks: 1, markCode: "AO2" },
              { reasoning: "Strength: concedes the point exists; Weakness: does not prove the difficulties are surmountable.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: rhetorically effective but logically incomplete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The reasoning is rhetorically strong — it concedes opponents have real concerns — but logically thin: calling them 'implementation difficulties' does not prove they are easy to solve.",
            commonErrors: ["Saying 'good argument' without evaluating the logical move."],
          },
        },
        {
          id: "cile-u3-arg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: editorialExtract,
          stem: "The editorial argues for later school start times.",
          parts: [
            { label: "a", prompt: "State the writer's main claim in one sentence.", marks: 2 },
            { label: "b", prompt: "Identify two pieces of evidence used to support the claim.", marks: 2 },
            { label: "c", prompt: "How does the writer handle the counter-argument? Evaluate the fairness.", marks: 2 },
            { label: "d", prompt: "Suggest one weakness in the argument and explain why it matters.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Argument structure", statement: "Claim → evidence → counter-argument → rebuttal → conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Claim: schools should start later because teenage sleep cycles shift later.", working: "\\text{later starts}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Stated accurately.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Evidence 1: sleep-cycle science / AAP recommendation.", working: "\\text{sleep science}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Evidence 2: schools that changed report better attendance/grades.", working: "\\text{attendance/grades}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Counter-argument acknowledged: 'Opponents warn of logistical problems'.", working: "\\text{acknowledged}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Fairness: concedes they are 'real difficulties' but reframes as implementation — partially fair, slightly dismissive.", working: "\\text{partially fair}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Weakness: correlation vs causation — better attendance may not be caused by later starts alone.", working: "\\text{correlation}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Or: no evidence on how to solve logistical problems — the hardest part is assumed away.", working: "\\text{assumed away}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Why it matters: a policy argument must address feasibility, not just desirability.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) schools should start later to match adolescent sleep biology (b) sleep-cycle science/AAP; improved attendance/grades in changed schools (c) acknowledged but reframed as 'implementation' — partially fair (d) e.g. correlation≠causation, or logistics assumed solvable — matters because feasibility is unproven",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Claim accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid pieces of evidence.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Counter-argument handling evaluated fairly.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Weakness identified and its significance explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Weakness named without explanation.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'no evidence' when evidence is present — identify the specific logical gap."],
          },
        },
      ],
    },
    {
      id: "cile-u3-bias-viewpoint",
      title: "Bias and viewpoint in media",
      skill: "Detect bias in media texts by analysing word choice, selection of evidence, and what is omitted.",
      lesson: {
        sections: [
          {
            heading: "How bias works",
            body: "Bias is not only lying — it is **selection and framing**. A biased text may be factually accurate but misleading because it:\n\n- Chooses only supportive evidence.\n- Uses loaded words ('regime', 'so-called', 'activists').\n- Omits context that would complicate the picture.\n- Presents opinion as fact.",
          },
          {
            heading: "Reading against the grain",
            body: "To detect bias, ask:\n\n- **Who benefits?** If a text supports X, who gains from you believing X?\n- **What is missing?** What opposing view or complicating fact is absent?\n- **How are people labelled?** 'Protesters' vs 'mob', 'reformers' vs 'activists'.",
          },
          {
            heading: "Balanced vs biased",
            body: "A balanced text acknowledges complexity: 'real difficulties', 'not reasons to deny' — it holds two ideas at once. A biased text collapses complexity into a single story.",
          },
        ],
        keyFormulas: [
          { name: "Bias test", statement: "Ask who benefits, what is omitted, and how people are labelled — then judge whether the text's framing favours one side." },
        ],
        workedExample: {
          problem: "Blog: 'Zero waste was not the destination. It was the direction.' Biased?",
          solution: "Not biased in the media sense — it is honest self-reporting. It admits failure ('I bought a sandwich in plastic') rather than promoting an ideal. Bias would be claiming perfection while hiding struggles.",
        },
      },
      questions: [
        {
          id: "cile-u3-bias-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "Which phrase is an example of loaded language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "schools across the country" },
              { id: "b", text: "dragged their gates open" },
              { id: "c", text: "the American Academy of Pediatrics" },
              { id: "d", text: "bus schedules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "'Dragged' implies reluctance and drudgery — emotional colouring." },
            ],
            steps: [
              { reasoning: "'Dragged' is emotive; the neutral alternative would be 'opened'.", working: "\\text{'dragged'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** dragged their gates open",
            commonErrors: ["Choosing (c) — a proper noun is not loaded."],
          },
        },
        {
          id: "cile-u3-bias-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: editorialExtract,
          stem: "Identify one piece of evidence that might be missing from this editorial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Omission", statement: "Bias often works by leaving out complicating evidence." },
            ],
            steps: [
              { reasoning: "The editorial cites studies showing benefits but no studies showing potential drawbacks.", working: "\\text{no drawback studies}", marks: 1, markCode: "AO2" },
              { reasoning: "Missing: evidence on whether later starts actually improve learning, not just attendance/grades.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Evidence on whether later starts improve actual learning outcomes (not just attendance) — or studies showing drawbacks — is absent.",
            commonErrors: ["Saying 'opinions are missing' — the issue is selective evidence."],
          },
        },
        {
          id: "cile-u3-bias-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: editorialExtract,
          stem: "Is this editorial biased? Support your answer with evidence from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias evaluation", statement: "Bias = one-sided selection and framing; fairness = acknowledging complexity." },
            ],
            steps: [
              { reasoning: "Evidence of bias: loaded language ('dragged', 'chronic exhaustion').", working: "\\text{loaded words}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence of fairness: acknowledges opponents' concerns as 'real difficulties'.", working: "\\text{acknowledges}", marks: 1, markCode: "AO2" },
              { reasoning: "Selective evidence: only supportive studies cited.", working: "\\text{selective}", marks: 1, markCode: "AO2" },
              { reasoning: "Verdict: moderately biased — persuasive framing but not dishonest; it concedes complexity while still arguing one side.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Moderately biased: it uses loaded language and cites only supportive evidence, but it acknowledges opponents' real concerns — persuasive rather than dishonest.",
            commonErrors: ["Answering 'yes' or 'no' absolutely without weighing both sides."],
          },
        },
        {
          id: "cile-u3-bias-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: blogExtract,
          stem: "The blog post describes a year of attempted zero-waste living.",
          parts: [
            { label: "a", prompt: "How does the writer's honesty about failure affect the credibility of the piece?", marks: 2 },
            { label: "b", prompt: "Identify one way the writer avoids bias despite promoting an ideal.", marks: 2 },
            { label: "c", prompt: "Compare the blog's approach to the editorial's — which is more balanced?", marks: 2 },
            { label: "d", prompt: "Suggest how a biased version of this blog might look.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Credibility", statement: "Admitting failure builds trust; hiding it creates bias." },
            ],
            steps: [
              { part: "a", reasoning: "Honesty about buying plastic sandwiches makes the claims believable.", working: "\\text{admission}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "It signals the writer is not selling a fantasy.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "She admits imperfection: 'I still buy vegetables in bags.'", working: "\\text{admits imperfection}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "And reframes success as direction, not destination — avoids dogma.", working: "\\text{direction not destination}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Blog is more balanced: it confesses failure; editorial is more one-sided despite conceding logistics.", working: "\\text{blog more balanced}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Both acknowledge complexity, but the blog's self-criticism is deeper.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "A biased version would claim perfection, hide failures, and attack critics.", working: "\\text{claims perfection}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Or: would use only positive anecdotes and no admissions.", working: "\\text{only positives}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Example phrasing: 'I have not created a single piece of waste in a year.'", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) honesty builds credibility (b) admits imperfection, reframes as direction (c) blog more balanced — deeper self-criticism (d) e.g. claims perfection, hides failures, only positive anecdotes",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Credibility effect explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Bias-avoidance identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Biased version convincingly described.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) describing a different topic rather than a biased version of the same piece."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u3-argument-bias-notes",
      title: "Argument, bias and viewpoint — revision notes",
      summary: "Fact vs opinion, evaluating reasoning, detecting bias in media texts.",
      sections: [
        {
          heading: "Argument anatomy",
          body: "Claim → evidence (facts) → reasoning → counter-argument → rebuttal → conclusion. Separate what is verifiable from what is judgement.",
        },
        {
          heading: "Detecting bias",
          body: "Ask: Who benefits? What is omitted? How are people labelled? Loaded language and one-sided evidence signal bias; acknowledging complexity signals fairness.",
        },
        {
          heading: "Exam technique",
          body: "Evaluate reasoning, not just conclusions: does the evidence support the claim? Are counter-arguments handled fairly? Is there a logical gap?",
        },
      ],
    },
  ],
};
