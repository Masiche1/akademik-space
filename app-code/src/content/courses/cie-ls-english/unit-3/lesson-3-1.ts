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
              { id: "a", text: "Schools should start later to match teenage sleep cycles" },
              { id: "b", text: "Teenagers should sleep more" },
              { id: "c", text: "Sleep is more important than school" },
              { id: "d", text: "Finnish schools are better than British ones" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cile-u3-arg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "How many of these statements from the editorial are FACTS (verifiable)? 'Schools across the country start at 8:30.' 'The American Academy of Pediatrics has recommended 8:30 or later for over a decade.' 'Sleep is not laziness.' 'We have been scheduling our schools backwards.'",
          response: { type: "numeric", parts: [{ label: "Facts", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact", statement: "Something that can be verified as true or false." },
            ],
            steps: [
              { reasoning: "The start time and the AAP recommendation are checkable = 2; 'sleep is not laziness' and 'scheduling backwards' are judgements.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'sleep is not laziness' — it is a value judgement, not a measurement."],
          },
        },
        {
          id: "cile-u3-arg-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: blogExtract,
          stem: "How many of these statements from the blog are OPINIONS (interpretations)? 'Zero waste was not the destination. It was the direction.' 'My local greengrocer closed.' 'I bought a sandwich in plastic wrap.' 'The shop opened in 1998.'",
          response: { type: "numeric", parts: [{ label: "Opinions", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opinion", statement: "A personal judgement that cannot be proven true or false." },
            ],
            steps: [
              { reasoning: "Only 'direction not destination' is an interpretation; the other three are checkable personal events.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting the greengrocer or sandwich — those are verifiable events, not judgements."],
          },
        },
        {
          id: "cile-u3-arg-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: editorialExtract,
          stem: "Identify one fact and one opinion from the editorial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact vs opinion", statement: "Facts are verifiable; opinions are judgements." },
            ],
            steps: [
              { reasoning: "Fact: 'adolescent sleep cycles shift later' or 'schools that moved report better attendance'.", working: "\\text{verifiable}", marks: 1, markCode: "AO2" },
              { reasoning: "Opinion: 'we have been scheduling our schools backwards' or 'calling it discipline' (implied judgement).", working: "\\text{judgement}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fact: e.g. 'adolescent sleep cycles shift later' or 'later-start schools report better attendance'. Opinion: e.g. 'we have been scheduling our schools backwards'.",
            commonErrors: ["Choosing a rhetorical claim ('The science is not complicated') as a pure fact."],
          },
        },
        {
          id: "cile-u3-arg-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: blogExtract,
          stem: "Distinguish one fact from one opinion in the blog post.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fact vs opinion", statement: "Personal experience can be factual; interpretations are opinions." },
            ],
            steps: [
              { reasoning: "Fact: 'I bought a sandwich in plastic wrap' or 'my local greengrocer closed' — checkable events.", working: "\\text{checkable events}", marks: 1, markCode: "AO2" },
              { reasoning: "Opinion: 'Zero waste was not the destination. It was the direction' — her interpretation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fact: e.g. 'my local greengrocer closed' or 'I bought a sandwich in plastic wrap'. Opinion: e.g. 'Zero waste was the direction, not the destination'.",
            commonErrors: ["Calling the whole blog 'opinion' — much of it reports verifiable personal events."],
          },
        },
        {
          id: "cile-u3-arg-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "Which sentence contains the clearest example of reasoning (linking evidence to conclusion)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The evidence for later starts is overwhelming" },
              { id: "b", text: "Other countries — Finland among them — have long understood" },
              { id: "c", text: "Every September, schools across the country drag their gates open at 8:30" },
              { id: "d", text: "Adolescent sleep cycles shift later, meaning most teenagers are biologically incapable of waking fully" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reasoning", statement: "A logical link: sleep cycles shift → therefore early starts are mismatched." },
            ],
            steps: [
              { reasoning: "'Meaning' connects the scientific premise to the conclusion about waking.", working: "\\text{premise → conclusion}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Adolescent sleep cycles shift later, meaning most teenagers are biologically incapable of waking fully",
            commonErrors: ["Choosing (d) — it is evidence/appeal, not a logical 'meaning' link."],
          },
        },
        {
          id: "cile-u3-arg-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: editorialExtract,
          stem: "Evaluate the claim 'The science is not complicated.' Is it fact, opinion, or a blend?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical claim", statement: "A statement can blend fact and opinion to persuade." },
            ],
            steps: [
              { reasoning: "The underlying sleep-cycle science is factual and verifiable.", working: "\\text{science factual}", marks: 1, markCode: "AO2" },
              { reasoning: "'Not complicated' is an opinion — it minimises complexity to dismiss objections.", marks: 1, markCode: "AO2" },
              { reasoning: "It functions as a persuasive framing device — makes the argument feel simple and inevitable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It blends fact and opinion: the sleep science is real, but 'not complicated' is a judgement that simplifies the issue to persuade — a rhetorical framing device.",
            commonErrors: ["Calling it purely factual — 'not complicated' is evaluative."],
          },
        },
        {
          id: "cile-u3-arg-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: blogExtract,
          stem: "Does the blog post make an argument? If so, state its claim and its evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Argument", statement: "A reasoned case — even personal narratives can argue a viewpoint." },
            ],
            steps: [
              { reasoning: "Yes — it argues that imperfect progress is still worthwhile.", working: "\\text{imperfect progress}", marks: 1, markCode: "AO2" },
              { reasoning: "Claim: 'Zero waste was not the destination. It was the direction.'", working: "\\text{direction not destination}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: her own failures and partial successes — the plastic sandwich, the mending.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Yes — it argues that imperfect, honest progress matters more than perfection; the claim is 'direction not destination', supported by her admitted failures and partial successes.",
            commonErrors: ["Saying 'it is just a diary' — it does argue a viewpoint about ideals vs reality."],
          },
        },
        {
          id: "cile-u3-arg-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "How many of these editorial phrases carry the writer's JUDGEMENT rather than neutral description? 'calling it discipline' 'chronic exhaustion' 'drag their gates open' 'the science is not complicated'",
          response: { type: "numeric", parts: [{ label: "Judgement phrases", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Opinion", statement: "'Calling it discipline' is the writer's critical judgement of the system." },
            ],
            steps: [
              { reasoning: "'Calling it discipline' reframes exhaustion as virtue and 'the science is not complicated' minimises complexity = 2 judgements.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'chronic exhaustion' — that describes a state, it does not judge."],
          },
        },
        {
          id: "cile-u3-arg-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "Which piece of evidence is most persuasive in the editorial, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Every September, schools drag their gates open'" },
              { id: "b", text: "'Other countries — Finland among them'" },
              { id: "c", text: "'The American Academy of Pediatrics has recommended...'" },
              { id: "d", text: "'We are asking them to learn in a state of chronic exhaustion'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Authority", statement: "A named expert body's recommendation carries institutional weight." },
            ],
            steps: [
              { reasoning: "The AAP recommendation is authoritative, specific and checkable.", working: "\\text{AAP authority}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** 'The American Academy of Pediatrics has recommended...' — it is authoritative, specific and verifiable.",
            commonErrors: ["Choosing (a) or (d) — those are emotional appeals, not evidence."],
          },
        },
        {
          id: "cile-u3-arg-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: editorialExtract,
          stem: "Evaluate the reasoning in 'Other countries — Finland among them — have long understood that sleep is not laziness.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reasoning", statement: "Check whether evidence actually supports the claim and whether comparisons are fair." },
            ],
            steps: [
              { reasoning: "It appeals to other countries' practice — an argument from precedent.", working: "\\text{precedent}", marks: 1, markCode: "AO2" },
              { reasoning: "Strength: suggests the policy is proven elsewhere, not experimental.", marks: 1, markCode: "AO2" },
              { reasoning: "Weakness: 'long understood' is vague — no specifics on Finland's outcomes or context.", marks: 1, markCode: "AO2" },
              { reasoning: "Also: different country ≠ same school system; the comparison may not transfer.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It is an appeal to precedent — persuasive because it suggests the policy works elsewhere — but weak because 'long understood' is vague and a different country's system may not transfer.",
            commonErrors: ["Accepting the comparison at face value without checking transferability."],
          },
        },
        {
          id: "cile-u3-arg-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: editorialExtract,
          stem: "You are evaluating the argument in the editorial.",
          parts: [
            { label: "a", prompt: "State the writer's main claim.", marks: 2 },
            { label: "b", prompt: "Identify two facts used as evidence.", marks: 2 },
            { label: "c", prompt: "How does the writer handle the counter-argument? Is it fair?", marks: 2 },
            { label: "d", prompt: "Identify one logical weakness and explain why it matters.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Argument structure", statement: "Claim → facts → reasoning → counter-argument → rebuttal." },
            ],
            steps: [
              { part: "a", reasoning: "Claim: schools should start later to match adolescent sleep biology.", working: "\\text{later starts}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurately stated.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Fact 1: sleep cycles shift later in adolescence / AAP recommendation.", working: "\\text{sleep science}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Fact 2: later-start schools report better attendance/grades.", working: "\\text{attendance/grades}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Acknowledges opponents' logistical concerns as 'real difficulties'.", working: "\\text{acknowledged}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Fairness: concedes reality but reframes as 'implementation' — partially fair, slightly dismissive.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Weakness: correlation vs causation — attendance gains may not be caused by start times alone.", working: "\\text{correlation}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Or: logistics assumed solvable — feasibility unproven.", working: "\\text{feasibility}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Why it matters: a policy claim must address whether it can actually be implemented.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) schools should start later to match sleep biology (b) sleep science/AAP; improved attendance in changed schools (c) acknowledged but reframed — partially fair (d) e.g. correlation≠causation or logistics assumed solvable — matters because feasibility is unproven",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Claim accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid facts.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Counter-argument handling evaluated.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Weakness identified and significance explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Weakness named only.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'the argument is weak' without a specific logical gap."],
          },
        },
        {
          id: "cile-u3-arg-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: blogExtract,
          stem: "You are evaluating the blog post as an argument.",
          parts: [
            { label: "a", prompt: "Does the blog make an argument? Explain.", marks: 2 },
            { label: "b", prompt: "State its central claim.", marks: 2 },
            { label: "c", prompt: "Identify two pieces of evidence (personal experience).", marks: 2 },
            { label: "d", prompt: "Evaluate the strength of its reasoning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Argument", statement: "A reasoned case — personal narrative can argue a viewpoint." },
            ],
            steps: [
              { part: "a", reasoning: "Yes — it argues imperfect progress beats perfection.", working: "\\text{progress over perfection}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "It has a claim, evidence and a conclusion.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Claim: 'Zero waste was not the destination. It was the direction.'", working: "\\text{direction not destination}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurately stated.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Evidence 1: the plastic sandwich at month six — admitted failure.", working: "\\text{plastic sandwich}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Evidence 2: still buying vegetables in bags but thinking before buying.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Strength: honest self-report makes the conclusion believable.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Weakness: anecdotal — one person's year cannot prove a general rule.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) yes — argues progress over perfection (b) 'direction not destination' (c) plastic sandwich; still imperfect but more mindful (d) strong honesty, but anecdotal — cannot generalise",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Argument presence explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Claim accurately stated.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid evidence points.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoning evaluated with strength and weakness.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One-sided.", part: "d" },
            ],
            commonErrors: ["In (d) praising honesty without noting the anecdotal limitation."],
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
              { id: "c", text: "bus schedules" },
              { id: "d", text: "the American Academy of Pediatrics" },
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
        {
          id: "cile-u3-bias-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "How many of these groups benefit directly from the editorial's argument? 'Students and parents who want later starts.' 'School administrators who want cheaper schedules.' 'Bus companies.' 'Teachers who prefer early mornings.'",
          response: { type: "numeric", parts: [{ label: "Benefiting groups", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Who benefits", statement: "Bias test: ask who gains from the reader believing the argument." },
            ],
            steps: [
              { reasoning: "Only students and parents gain from later starts; administrators, bus firms and early-morning teachers lose.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting administrators — the argument challenges the current schedule, not their convenience."],
          },
        },
        {
          id: "cile-u3-bias-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: blogExtract,
          stem: "How many of these show the zero-waste blog AVOIDING bias? 'She admits buying plastic.' 'She claims she created zero waste.' 'She hides her failures.' 'She frames success as direction, not destination.'",
          response: { type: "numeric", parts: [{ label: "Bias-avoiding features", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias test", statement: "The blog confesses failures rather than promoting perfection." },
            ],
            steps: [
              { reasoning: "Admitting plastic and refusing dogma keep it honest = 2; claiming perfection and hiding failures would be biased.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'claims zero waste' — that is the biased version, not the actual blog."],
          },
        },
        {
          id: "cile-u3-bias-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: editorialExtract,
          stem: "Identify one piece of evidence or context that is omitted from the editorial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Omission", statement: "Bias works by leaving out complicating facts." },
            ],
            steps: [
              { reasoning: "Omitted: studies showing potential drawbacks of later starts, or evidence it does not improve learning.", working: "\\text{no drawback evidence}", marks: 1, markCode: "AO2" },
              { reasoning: "Or: no detail on how schools would actually solve the logistics.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Evidence on drawbacks or on whether later starts improve learning (not just attendance) is omitted; the logistics are acknowledged but never examined.",
            commonErrors: ["Saying 'opinions are omitted' — the issue is selective evidence."],
          },
        },
        {
          id: "cile-u3-bias-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: blogExtract,
          stem: "How does the blog writer avoid bias despite promoting an ideal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias avoidance", statement: "Admitting imperfection and refusing dogma keeps a text balanced." },
            ],
            steps: [
              { reasoning: "She admits failures: plastic sandwich, still buying bags, 'human'.", working: "\\text{admits failures}", marks: 1, markCode: "AO2" },
              { reasoning: "She reframes success as direction, not destination — avoids claiming perfection.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "She avoids bias by confessing her failures and reframing zero waste as a direction rather than a destination — honesty instead of dogma.",
            commonErrors: ["Saying 'she is against zero waste' — she promotes it but honestly."],
          },
        },
        {
          id: "cile-u3-bias-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "How many of these editorial phrases are LOADED (emotionally charged)? 'chronic exhaustion' 'bus schedules' 'the American Academy of Pediatrics' 'drag their gates open'",
          response: { type: "numeric", parts: [{ label: "Loaded phrases", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "'Chronic exhaustion' is medically charged and emotive." },
            ],
            steps: [
              { reasoning: "'Chronic' implies severity and 'dragged' implies victimhood = 2; 'bus schedules' is neutral and the AAP is an authority name.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'bus schedules' — it is neutral, not charged."],
          },
        },
        {
          id: "cile-u3-bias-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: editorialExtract,
          stem: "How does the writer frame the opponents' argument, and is the framing fair?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Framing opponents", statement: "How a writer labels the other side reveals bias." },
            ],
            steps: [
              { reasoning: "Opponents are called 'Opponents' and their concerns 'logistical problems'.", working: "\\text{'Opponents'; 'logistical'}", marks: 1, markCode: "AO2" },
              { reasoning: "The writer concedes they are 'real difficulties' — partially fair.", marks: 1, markCode: "AO2" },
              { reasoning: "But reframing them as 'implementation, not reasons' subtly dismisses their weight — mildly unfair.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The opponents are conceded 'real difficulties' but reframed as mere 'implementation' issues — a fair acknowledgement wrapped in a subtly dismissive framing.",
            commonErrors: ["Saying the writer 'ignores' opponents — she engages but minimises them."],
          },
        },
        {
          id: "cile-u3-bias-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: blogExtract,
          stem: "What would a biased version of this blog look like? Identify two changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias detection", statement: "Bias hides failures and promotes a single story." },
            ],
            steps: [
              { reasoning: "Change 1: remove the admissions of failure — the plastic sandwich, the closed greengrocer.", working: "\\text{hide failures}", marks: 1, markCode: "AO2" },
              { reasoning: "Change 2: claim perfection — 'I created not a single piece of waste this year.'", marks: 1, markCode: "AO2" },
              { reasoning: "Both changes would turn honest reporting into one-sided promotion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "A biased version would hide her failures (no plastic sandwich, no closed greengrocer) and claim perfection — turning honest reporting into one-sided promotion.",
            commonErrors: ["Saying 'it would be more positive' without specifying what is hidden."],
          },
        },
        {
          id: "cile-u3-bias-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "What does 'chronic exhaustion' suggest that a neutral phrase like 'tiredness' would not?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Severity, permanence and medical concern" },
              { id: "b", text: "That students are lazy" },
              { id: "c", text: "The same thing — they are synonyms" },
              { id: "d", text: "That the writer is a doctor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Chronic' implies long-term severity — it medicalises and dramatizes the problem." },
            ],
            steps: [
              { reasoning: "'Chronic' adds severity and permanence that 'tiredness' lacks — a loaded upgrade.", working: "\\text{'chronic' = severe}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Severity, permanence and medical concern",
            commonErrors: ["Choosing (a) — 'chronic' is not a neutral synonym."],
          },
        },
        {
          id: "cile-u3-bias-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: editorialExtract,
          stem: "Which of these is an example of selective (one-sided) evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Citing both supportive and critical studies" },
              { id: "b", text: "Mentioning opponents' logistical concerns" },
              { id: "c", text: "Acknowledging that the difficulties are 'real'" },
              { id: "d", text: "Citing only studies that show later starts improve attendance and grades" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Selective evidence", statement: "Bias often cites only evidence that supports one side." },
            ],
            steps: [
              { reasoning: "The editorial cites only pro-later-start studies; no drawbacks are examined.", working: "\\text{only pro studies}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Citing only studies that show later starts improve attendance and grades",
            commonErrors: ["Choosing (b) — acknowledging opponents is the opposite of selecting only supportive evidence."],
          },
        },
        {
          id: "cile-u3-bias-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: editorialExtract,
          stem: "Apply the bias test to this editorial: who benefits, what is omitted, and how are people labelled?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias test", statement: "Ask who benefits, what is omitted, and how people are labelled." },
            ],
            steps: [
              { reasoning: "Who benefits: students, parents and sleep researchers — not schools or bus firms.", working: "\\text{students/parents}", marks: 1, markCode: "AO2" },
              { reasoning: "What is omitted: studies on drawbacks, and detail on solving logistics.", marks: 1, markCode: "AO2" },
              { reasoning: "Labelling: 'Opponents' (mildly adversarial), 'chronic exhaustion' (loaded).", working: "\\text{'Opponents'}", marks: 1, markCode: "AO2" },
              { reasoning: "Verdict: moderately biased — persuasive framing and selective evidence, but it concedes real difficulties.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Students/parents benefit; drawback studies and logistics detail are omitted; opponents are labelled adversarially ('Opponents'). Verdict: moderately biased — persuasive, not dishonest.",
            commonErrors: ["Listing one element without a verdict on overall bias."],
          },
        },
        {
          id: "cile-u3-bias-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: editorialExtract,
          stem: "You are evaluating the editorial for bias.",
          parts: [
            { label: "a", prompt: "Quote two examples of loaded language.", marks: 2 },
            { label: "b", prompt: "Identify one piece of evidence that is omitted.", marks: 2 },
            { label: "c", prompt: "How fairly are opponents' views represented?", marks: 2 },
            { label: "d", prompt: "Give a verdict on the editorial's bias and justify it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias evaluation", statement: "Bias = loaded language + selective evidence + unfair framing." },
            ],
            steps: [
              { part: "a", reasoning: "Loaded phrase 1: 'dragged their gates open'.", working: "\\text{'dragged'}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Loaded phrase 2: 'chronic exhaustion'.", working: "\\text{'chronic'}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Omitted: studies showing drawbacks, or evidence on learning outcomes.", working: "\\text{no drawbacks}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Or: no examination of how logistics would be solved.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Opponents' concerns are acknowledged as 'real difficulties' — fair engagement.", working: "\\text{acknowledged}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "But reframed as 'implementation' — slightly dismissive but not straw-manned.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Verdict: moderately biased — it argues one side persuasively while conceding complexity.", working: "\\text{moderately biased}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Loaded language and one-sided evidence signal bias.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "But the concession of 'real difficulties' prevents it being dishonest.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'dragged their gates open'; 'chronic exhaustion' (b) e.g. studies on drawbacks are omitted (c) acknowledged as 'real difficulties' but reframed as 'implementation' (d) moderately biased — persuasive framing, selective evidence, but not dishonest",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate loaded-language quotations.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid omission identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Fairness of opponent representation assessed.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Nuanced verdict justified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-sided verdict.", part: "d" },
            ],
            commonErrors: ["In (d) answering 'biased' or 'not biased' absolutely without weighing evidence."],
          },
        },
        {
          id: "cile-u3-bias-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: blogExtract,
          stem: "You are evaluating the zero-waste blog for bias.",
          parts: [
            { label: "a", prompt: "Does the blog promote an ideal? How?", marks: 2 },
            { label: "b", prompt: "How does the writer avoid bias despite promoting it?", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'Zero waste was not the destination. It was the direction.'", marks: 2 },
            { label: "d", prompt: "Give a verdict on the blog's bias.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias evaluation", statement: "Promoting an ideal is not biased if the writer is honest about falling short." },
            ],
            steps: [
              { part: "a", reasoning: "Yes — it promotes mindful, low-waste living.", working: "\\text{promotes ideal}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Through her year of attempting zero waste.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "She admits failures — plastic sandwich, still imperfect.", working: "\\text{admits failure}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "She refuses dogma — 'direction, not destination'.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The line reframes success as progress, not perfection — defuses dogma.", working: "\\text{progress not perfection}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "It is the blog's thesis — honest about the gap between ideals and life.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Verdict: not biased — it is honest self-reporting with self-criticism.", working: "\\text{not biased}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It would only be biased if it hid failures or claimed perfection.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) promotes mindful low-waste living (b) admits failures, refuses dogma (c) reframes success as direction — defuses perfectionism (d) not biased — honest self-reporting with self-criticism",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Promotion of ideal identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Bias-avoidance explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Quote's effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Verdict justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One-sided or missing.", part: "d" },
            ],
            commonErrors: ["In (d) calling it biased because it 'promotes' zero waste — promotion with honesty is not bias."],
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
