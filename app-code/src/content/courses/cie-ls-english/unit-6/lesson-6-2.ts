import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cile-u6-lesson-6-2",
  code: "6-2",
  title: "Formal argument, discussion and evaluation",
  goal: "I CAN write balanced discussions and evaluate the strength of arguments critically.",
  standards: ["0861 Writing: discussion and evaluation"],
  vocabulary: [
    { term: "Discussion", definition: "A multi-sided exploration of an issue presenting several viewpoints." },
    { term: "Viewpoint", definition: "A particular opinion or stance on an issue." },
    { term: "Weighing evidence", definition: "Comparing the strength of evidence for different viewpoints." },
    { term: "Fallacy", definition: "A flaw in reasoning — an argument that seems convincing but is logically flawed." },
    { term: "Straw man", definition: "Misrepresenting an opponent's argument to make it easier to attack." },
    { term: "Balanced conclusion", definition: "A final judgement that acknowledges the complexity of the issue." },
  ],
  concepts: [
    {
      id: "cile-u6-formal-argument",
      title: "Formal argument and discussion",
      skill: "Write structured arguments and discussions that present multiple viewpoints fairly.",
      lesson: {
        sections: [
          {
            heading: "Discussion vs argument",
            body: "- **Argument**: one-sided — thesis, reasons, evidence, refutation.\n- **Discussion**: multi-sided — presents several viewpoints, weighs them, reaches a balanced conclusion.",
          },
          {
            heading: "Discussion structure",
            body: "- **Introduce the issue**: what is being discussed and why it matters.\n- **Present viewpoints**: 'Some argue... others claim...' — fairly represent each side.\n- **Weigh evidence**: which arguments are stronger? Why?\n- **Conclude**: your balanced judgement — 'On balance...'",
          },
          {
            heading: "Formal register",
            body: "- No slang or contractions.\n- Precise vocabulary.\n- Objective tone — 'It could be argued that' rather than 'I think'.\n- Logical connectives — 'furthermore', 'nevertheless', 'consequently'.",
          },
        ],
        keyFormulas: [
          { name: "Discussion structure", statement: "Issue → viewpoints → evidence weighing → balanced conclusion." },
        ],
        workedExample: {
          problem: "Discuss whether homework should be banned.",
          solution: "'Homework is defended as building discipline and reinforcing learning; critics argue it causes stress and reduces family time. Evidence shows moderate homework correlates with achievement, but excessive amounts correlate with anxiety. On balance, homework should be reduced and quality-focused, not banned.'",
        },
      },
      questions: [
        {
          id: "cile-u6-disc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What distinguishes a discussion from an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Discussion is shorter" },
              { id: "b", text: "Discussion presents multiple viewpoints fairly" },
              { id: "c", text: "Discussion uses no evidence" },
              { id: "d", text: "Discussion is always informal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discussion", statement: "Presents and weighs multiple viewpoints before concluding." },
            ],
            steps: [
              { reasoning: "Discussion is multi-sided; argument is one-sided.", working: "\\text{multi-sided}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Discussion presents multiple viewpoints fairly",
            commonErrors: ["Choosing (a) — length is irrelevant to the distinction."],
          },
        },
        {
          id: "cile-u6-disc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to represent opposing viewpoints fairly in a discussion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fair representation", statement: "Strawmanning opponents weakens credibility; fair treatment strengthens it." },
            ],
            steps: [
              { reasoning: "Unfair representation makes the discussion seem biased and untrustworthy.", working: "\\text{credibility}", marks: 1, markCode: "AO2" },
              { reasoning: "Readers can only weigh viewpoints if they are accurately presented.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fair representation ensures credibility and allows readers to weigh viewpoints accurately — strawmanning opponents makes the discussion seem biased and unreliable.",
            commonErrors: ["Saying 'to be polite' — the reason is analytical fairness and credibility."],
          },
        },
        {
          id: "cile-u6-disc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes a 'discussion' that only presents one side. Rewrite the approach to make it a genuine discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discussion structure", statement: "Multiple viewpoints → evidence weighing → balanced conclusion." },
            ],
            steps: [
              { reasoning: "Problem: only one viewpoint — this is an argument, not a discussion.", working: "\\text{one-sided}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: introduce the opposing viewpoint fairly.", working: "\\text{opposition}", marks: 1, markCode: "AO2" },
              { reasoning: "Weigh evidence for both sides.", working: "\\text{weigh}", marks: 1, markCode: "AO2" },
              { reasoning: "Conclude with balanced judgement — 'on balance'.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Supporters argue X because of evidence A; opponents counter with evidence B. While A is compelling, B addresses a critical flaw. On balance, the evidence slightly favours X, though B's concerns warrant attention.' — multiple viewpoints, weighing, balanced conclusion.",
            commonErrors: ["Adding a token opposing sentence without genuinely weighing it."],
          },
        },
        {
          id: "cile-u6-disc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a discussion on a controversial topic (e.g. school uniforms, social media age limits, homework policy).",
          parts: [
            { label: "a", prompt: "State the issue and why it matters.", marks: 2 },
            { label: "b", prompt: "Present two viewpoints fairly.", marks: 3 },
            { label: "c", prompt: "Weigh the evidence for each side.", marks: 2 },
            { label: "d", prompt: "Reach a balanced conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discussion writing", statement: "Issue → fair viewpoints → evidence weighing → balanced conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Issue stated clearly with significance.", working: "\\text{issue}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Why it matters explained.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two viewpoints presented fairly.", working: "\\text{viewpoints}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Each has supporting reasoning/evidence.", working: "\\text{support}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Fair representation maintained.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Evidence weighed for both sides.", working: "\\text{weigh}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Comparison is analytical, not just listing.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Balanced conclusion reached.", working: "\\text{conclusion}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion acknowledges complexity.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clear issue + significance (b) two fair viewpoints (c) analytical weighing (d) balanced conclusion",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear issue and stakes.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Two fair, supported viewpoints.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Analytical weighing.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Balanced conclusion.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One-sided.", part: "d" },
            ],
            commonErrors: ["In (d) simply choosing a side — a discussion should weigh complexity."],
          },
        },
      ],
    },
    {
      id: "cile-u6-evaluating-arguments",
      title: "Evaluating arguments",
      skill: "Critically evaluate arguments by identifying fallacies, weak evidence and logical gaps.",
      lesson: {
        sections: [
          {
            heading: "Common fallacies",
            body: "- **Straw man**: misrepresenting the opponent's argument to attack an easy target.\n- **Ad hominem**: attacking the person, not the argument.\n- **False dilemma**: 'either X or catastrophe' — ignoring middle options.\n- **Hasty generalisation**: 'everyone knows...' from limited evidence.\n- **Slippery slope**: 'if X, then inevitably Y... disaster.'",
          },
          {
            heading: "Evaluating evidence",
            body: "Ask:\n\n- Is the evidence relevant to the claim?\n- Is it sufficient — enough to support the conclusion?\n- Is it credible — from reliable sources?\n- Are there alternative explanations?",
          },
          {
            heading: "Logical gaps",
            body: "Arguments fail when the conclusion does not follow from the premises. 'Some schools improved after later starts, therefore all schools should start later' leaps from partial evidence to universal policy — the gap must be identified.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation checklist", statement: "Check for fallacies, evidence relevance/sufficiency/credibility, and logical gaps between premises and conclusion." },
        ],
        workedExample: {
          problem: "'Everyone knows homework is pointless. My brother hated it, so it must be useless.' Identify the fallacies.",
          solution: "Hasty generalisation ('everyone knows' from one example) and anecdotal evidence (brother's experience is not data). The claim 'pointless' is asserted, not argued.",
        },
      },
      questions: [
        {
          id: "cile-u6-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a fallacy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A correct argument" },
              { id: "b", text: "A flaw in reasoning that makes an argument unsound" },
              { id: "c", text: "A type of evidence" },
              { id: "d", text: "A persuasive technique" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fallacy", statement: "A logical flaw — reasoning that seems convincing but is unsound." },
            ],
            steps: [
              { reasoning: "Fallacies are reasoning errors, not evidence types.", working: "\\text{reasoning error}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** A flaw in reasoning that makes an argument unsound",
            commonErrors: ["Choosing (d) — techniques can be used well or badly; fallacies are specifically logical errors."],
          },
        },
        {
          id: "cile-u6-eval-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the fallacy in: 'If we allow phones in class, soon students will be watching videos all day and learning nothing.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Slippery slope", statement: "Arguing that a small step inevitably leads to extreme consequences without evidence." },
            ],
            steps: [
              { reasoning: "The argument leaps from 'allow phones' to 'learning nothing' — extreme consequence assumed.", working: "\\text{extreme leap}", marks: 1, markCode: "AO2" },
              { reasoning: "No evidence that the intermediate steps must occur — slippery slope.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Slippery slope — it assumes allowing phones inevitably leads to total collapse of learning without evidence for the chain of consequences.",
            commonErrors: ["Calling it 'an opinion' — it is a specific logical fallacy."],
          },
        },
        {
          id: "cile-u6-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate this argument: 'My school should ban uniforms because my friend says they are uncomfortable. Also, uniforms are ugly.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence evaluation", statement: "Check relevance, sufficiency, credibility and logical connection." },
            ],
            steps: [
              { reasoning: "Evidence 1: friend's opinion — anecdotal, not data.", working: "\\text{anecdotal}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence 2: 'ugly' — subjective aesthetic judgement, not relevant to policy.", working: "\\text{irrelevant}", marks: 1, markCode: "AO2" },
              { reasoning: "No logical connection between evidence and conclusion 'should ban'.", working: "\\text{no link}", marks: 1, markCode: "AO2" },
              { reasoning: "Overall: weak argument — insufficient, irrelevant evidence.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Weak argument: the evidence is anecdotal (one friend's opinion) and irrelevant ('ugly' is aesthetic, not policy-relevant). There is no logical link between discomfort/appearance and the need for a ban.",
            commonErrors: ["Saying 'the argument is bad' without specifying which evidence fails and why."],
          },
        },
        {
          id: "cile-u6-eval-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are evaluating an argument on a topic of your choice.",
          parts: [
            { label: "a", prompt: "State the argument's thesis.", marks: 2 },
            { label: "b", prompt: "Identify one piece of evidence and evaluate its strength.", marks: 3 },
            { label: "c", prompt: "Identify any fallacy or logical gap.", marks: 2 },
            { label: "d", prompt: "Reach a verdict on the argument's overall strength.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument evaluation", statement: "Thesis → evidence assessment → fallacy identification → verdict." },
            ],
            steps: [
              { part: "a", reasoning: "Thesis accurately identified.", working: "\\text{thesis}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear statement.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Evidence identified and assessed for relevance/credibility.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Strength or weakness explained.", working: "\\text{strength}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Assessment is sound.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Fallacy or gap identified correctly.", working: "\\text{fallacy}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Explained clearly.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Verdict justified by analysis.", working: "\\text{verdict}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Nuanced — not just 'good' or 'bad'.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) thesis identified (b) evidence assessed (c) fallacy/gap identified (d) justified verdict",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Thesis identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Evidence assessed thoroughly.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Fallacy identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Nuanced verdict.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Absolute.", part: "d" },
            ],
            commonErrors: ["In (d) giving a verdict without referencing the analysis."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u6-discussion-eval-notes",
      title: "Discussion and argument evaluation — revision notes",
      summary: "Formal discussion structure, fallacies, and critical evaluation of evidence.",
      sections: [
        {
          heading: "Discussion",
          body: "Issue → fair viewpoints → evidence weighing → balanced conclusion. Formal register, objective tone.",
        },
        {
          heading: "Fallacies",
          body: "Straw man, ad hominem, false dilemma, hasty generalisation, slippery slope — reasoning errors that undermine arguments.",
        },
        {
          heading: "Evaluation",
          body: "Check evidence relevance, sufficiency, credibility. Look for logical gaps between premises and conclusion. Verdict must be justified.",
        },
      ],
    },
  ],
};
