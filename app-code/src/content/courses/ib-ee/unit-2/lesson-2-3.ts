import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ee-u2-lesson-2-3",
  code: "2-3",
  title: "Evaluating Evidence and Avoiding Plagiarism",
  goal: "I CAN evaluate the quality of evidence and implement strategies to avoid plagiarism.",
  standards: ["EE", "Evidence Evaluation", "Plagiarism Prevention"],
  vocabulary: [
    { term: "Evidence quality", definition: "The reliability, relevance and sufficiency of sources supporting a claim." },
    { term: "Correlation vs causation", definition: "Correlation shows association; causation requires evidence that one causes the other." },
    { term: "Sample bias", definition: "When a sample is not representative of the population being studied." },
    { term: "Patchwriting", definition: "Changing a few words from a source but keeping the structure — still plagiarism." },
    { term: "Self-plagiarism", definition: "Reusing one's own previous work without acknowledgement." },
    { term: "Bibliography", definition: "The list of all sources cited in the essay." },
  ],
  concepts: [
    {
      id: "ee-u2-evidence-quality",
      title: "Evaluating evidence quality",
      skill: "Assess whether evidence is reliable, relevant and sufficient to support a claim.",
      lesson: {
        sections: [
          {
            heading: "Three tests of evidence",
            body: "Ask three questions: Is the source **reliable** (expert, peer-reviewed, unbiased)? Is it **relevant** (does it actually address your question)? Is it **sufficient** (is there enough evidence to support the claim)? Weak evidence fails one or more of these tests.",
          },
          {
            heading: "Common evidence problems",
            body: "**Correlation is not causation**: two things may move together without one causing the other. **Sample bias**: a study of university students may not represent all young people. **Outdated sources**: findings may have been superseded. **Cherry-picking**: selecting only supporting evidence while ignoring contradictions.",
          },
          {
            heading: "Strengthening evidence",
            body: "Use multiple independent sources that converge on the same conclusion. Triangulate: support claims with different types of evidence (quantitative and qualitative, primary and secondary). Acknowledge counter-evidence rather than ignoring it — addressing it strengthens your argument.",
          },
        ],
        keyFormulas: [
          { name: "Evidence tests", statement: "Reliable + relevant + sufficient = quality evidence" },
          { name: "Correlation warning", statement: "Association does not prove causation" },
        ],
        workedExample: {
          problem: "A study shows ice cream sales correlate with drowning rates. Does ice cream cause drowning?",
          solution: "No — this is correlation without causation. Both are caused by a third factor (hot weather). This illustrates why correlation alone cannot establish causation — a classic evidence evaluation problem.",
        },
      },
      questions: [
        {
          id: "ee-u2-l23c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correlation between two variables means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical" },
              { id: "b", text: "They are associated but causation is not proven" },
              { id: "c", text: "They are unrelated" },
              { id: "d", text: "One causes the other" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation", statement: "Association between variables without proof of causation." },
            ],
            steps: [
              { reasoning: "Correlation shows association, not causation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Associated but causation not proven",
            commonErrors: ["Confusing correlation with causation."],
          },
        },
        {
          id: "ee-u2-l23c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the three tests of evidence quality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence quality", statement: "Reliable + relevant + sufficient evidence supports strong claims." },
            ],
            steps: [
              { reasoning: "Reliable: source is expert, peer-reviewed and unbiased.", marks: 1, markCode: "M" },
              { reasoning: "Relevant: evidence actually addresses the research question.", marks: 1, markCode: "M" },
              { reasoning: "Sufficient: enough evidence exists to support the claim adequately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evidence must be reliable (trustworthy), relevant (on-topic) and sufficient (adequate).",
            commonErrors: ["Judging evidence only by whether it supports your argument."],
          },
        },
        {
          id: "ee-u2-l23c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that more sources always means better evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence quantity vs quality", statement: "More sources help only if they are reliable and relevant." },
            ],
            steps: [
              { reasoning: "For: multiple sources provide corroboration and reduce reliance on single sources.", marks: 1, markCode: "M" },
              { reasoning: "Against: many weak or biased sources do not improve evidence quality.", marks: 1, markCode: "M" },
              { reasoning: "Quality matters more than quantity — a few strong sources beat many weak ones.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: aim for sufficient reliable sources, not maximum quantity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More sources help only if reliable and relevant; quality outweighs quantity.",
            commonErrors: ["Padding the bibliography with weak sources."],
          },
        },
        {
          id: "ee-u2-l23c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to evaluate evidence quality in the EE.",
          parts: [
            { label: "a", prompt: "List three tests of evidence quality.", marks: 2 },
            { label: "b", prompt: "Explain two common evidence problems.", marks: 3 },
            { label: "c", prompt: "Evaluate how to strengthen evidence for an argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence evaluation", statement: "Evidence must be reliable, relevant and sufficient to support claims." },
            ],
            steps: [
              { part: "a", reasoning: "Reliable, relevant, sufficient.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three tests listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Correlation vs causation: association does not prove cause.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sample bias: unrepresentative samples distort findings.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cherry-picking: selecting only supporting evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Use multiple independent sources for corroboration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Triangulate with different evidence types.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Acknowledge counter-evidence to strengthen argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Reliable, relevant, sufficient. (b) Correlation, bias, cherry-picking. (c) Corroborate, triangulate, acknowledge counter-evidence.",
            commonErrors: ["Ignoring counter-evidence that contradicts your argument."],
          },
        },
        {
          id: "ee-u2-l23c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sample bias occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The source is very old" },
              { id: "b", text: "The sample is too large" },
              { id: "c", text: "The study uses statistics" },
              { id: "d", text: "The sample is not representative of the population being studied" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sample bias", statement: "When a sample is not representative of the population being studied." },
            ],
            steps: [
              { reasoning: "Sample bias means the studied group does not reflect the wider population.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The sample is not representative of the population being studied",
            commonErrors: ["Confusing large samples with representative samples."],
          },
        },
        {
          id: "ee-u2-l23c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Cherry-picking evidence means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using only primary sources" },
              { id: "b", text: "Citing too many sources" },
              { id: "c", text: "Selecting only evidence that supports your argument while ignoring contradictions" },
              { id: "d", text: "Selecting sources randomly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence quality", statement: "Ignoring contradictory evidence undermines reliability and sufficiency." },
            ],
            steps: [
              { reasoning: "Cherry-picking selects convenient evidence and suppresses counter-evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Selecting only supporting evidence while ignoring contradictions",
            commonErrors: ["Believing selective citation is efficient rather than dishonest."],
          },
        },
        {
          id: "ee-u2-l23c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain, using a different example, why correlation does not prove causation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation vs causation", statement: "Correlation shows association; causation requires evidence that one causes the other." },
            ],
            steps: [
              { reasoning: "Correlation means two variables move together, not that one produces the other.", marks: 1, markCode: "M" },
              { reasoning: "Example: shoe size and reading ability both increase as children grow — age is the real factor.", marks: 1, markCode: "M" },
              { reasoning: "A third variable or reverse causation can produce the association.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Correlation only shows association — a third factor or reverse causation may explain it.",
            commonErrors: ["Inferring causation directly from statistical association."],
          },
        },
        {
          id: "ee-u2-l23c1q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the three tests every piece of evidence must pass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence quality", statement: "Reliable + relevant + sufficient = quality evidence." },
            ],
            steps: [
              { reasoning: "Reliable: the source is expert, peer-reviewed and unbiased.", marks: 1, markCode: "M" },
              { reasoning: "Relevant: the evidence actually addresses the research question.", marks: 1, markCode: "M" },
              { reasoning: "Sufficient: there is enough evidence to support the claim adequately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evidence must be reliable, relevant and sufficient.",
            commonErrors: ["Judging evidence only by whether it supports the argument."],
          },
        },
        {
          id: "ee-u2-l23c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Triangulation in research means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using exactly three sources" },
              { id: "b", text: "Using only quantitative data" },
              { id: "c", text: "Supporting a claim with multiple independent types of evidence" },
              { id: "d", text: "Writing the essay in three languages" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Triangulation", statement: "Different evidence types converging on a claim strengthen reliability." },
            ],
            steps: [
              { reasoning: "Triangulation means corroborating claims across different evidence types or sources.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Supporting a claim with multiple independent types of evidence",
            commonErrors: ["Confusing triangulation with a fixed number of sources."],
          },
        },
        {
          id: "ee-u2-l23c1q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate whether one excellent peer-reviewed study is sufficient evidence for a broad claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence sufficiency", statement: "Broad claims need broad evidence; one study rarely suffices." },
            ],
            steps: [
              { reasoning: "For: a high-quality study is reliable and valuable evidence.", marks: 1, markCode: "M" },
              { reasoning: "Against: a single study may have limited sample, context or methodological scope.", marks: 1, markCode: "M" },
              { reasoning: "Generalising to a broad claim risks overstatement from limited evidence.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: one study supports a narrow claim; broader claims need corroboration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One excellent study supports only a proportionate claim; broad claims need multiple corroborating sources.",
            commonErrors: ["Generalising far beyond what a single study's evidence covers."],
          },
        },
        {
          id: "ee-u2-l23c1q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A study of 20 volunteers supports a claim about all teenagers. The main problem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sample bias — the sample is unlikely to represent all teenagers" },
              { id: "b", text: "No problem exists" },
              { id: "c", text: "The study used too many sources" },
              { id: "d", text: "The study is too recent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sample bias", statement: "A sample must represent the population for findings to generalise." },
            ],
            steps: [
              { reasoning: "Twenty volunteers cannot represent all teenagers; generalisation is unwarranted.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Sample bias — the sample is unlikely to represent all teenagers",
            commonErrors: ["Accepting small samples as representative of large populations."],
          },
        },
        {
          id: "ee-u2-l23c1q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that quantitative evidence is always stronger than qualitative evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence quality", statement: "Evidence strength depends on fit to the question, not data type alone." },
            ],
            steps: [
              { reasoning: "For quantitative: numbers allow measurement, comparison and generalisation.", marks: 1, markCode: "M" },
              { reasoning: "Against: qualitative evidence captures depth, context and meaning that numbers miss.", marks: 1, markCode: "M" },
              { reasoning: "The right type depends on whether the question asks 'how much' or 'why/how'.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: neither is inherently stronger — suitability to the question decides.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quantitative and qualitative evidence are complementary; strength depends on fit to the question.",
            commonErrors: ["Privileging numbers regardless of the research question."],
          },
        },
        {
          id: "ee-u2-l23c1q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how relying on outdated sources can weaken an argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence quality", statement: "Outdated evidence may be superseded by newer findings." },
            ],
            steps: [
              { reasoning: "Findings may have been corrected or superseded by later research.", marks: 1, markCode: "M" },
              { reasoning: "Methods and standards improve, so old conclusions may rest on weaker evidence.", marks: 1, markCode: "M" },
              { reasoning: "Context changes — what was true or relevant then may not be now.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Outdated sources risk superseded findings, weaker methods and changed context.",
            commonErrors: ["Using old sources without checking for later scholarship."],
          },
        },
        {
          id: "ee-u2-l23c1q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Addressing counter-evidence in an EE strengthens the argument because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is required by citation format rules" },
              { id: "b", text: "Shows the evidence is weak" },
              { id: "c", text: "Reduces the word count needed" },
              { id: "d", text: "Demonstrates balanced evaluation and anticipates objections" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence evaluation", statement: "Engaging counter-evidence demonstrates critical evaluation." },
            ],
            steps: [
              { reasoning: "Addressing objections shows the argument survives scrutiny, not that it is weak.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Demonstrates balanced evaluation and anticipates objections",
            commonErrors: ["Hiding counter-evidence to protect the thesis."],
          },
        },
        {
          id: "ee-u2-l23c1q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that acknowledging counter-evidence weakens your essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence evaluation", statement: "Engaging counter-evidence strengthens credibility and argument." },
            ],
            steps: [
              { reasoning: "For the claim: conceding points may appear to undermine the thesis.", marks: 1, markCode: "M" },
              { reasoning: "Against: acknowledging and rebutting counter-evidence shows critical thinking.", marks: 1, markCode: "M" },
              { reasoning: "It anticipates examiner objections and demonstrates balanced scholarship.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: addressing counter-evidence strengthens, not weakens, the essay.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acknowledging counter-evidence strengthens the essay by demonstrating critical evaluation.",
            commonErrors: ["Ignoring contradictions to protect a one-sided argument."],
          },
        },
        {
          id: "ee-u2-l23c1q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to evaluate evidence quality in a research essay.",
          parts: [
            { label: "a", prompt: "List the three tests of evidence quality.", marks: 2 },
            { label: "b", prompt: "Explain two common evidence problems.", marks: 3 },
            { label: "c", prompt: "Evaluate how to strengthen evidence for an argument.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence evaluation", statement: "Quality evidence is reliable, relevant and sufficient, then strengthened by triangulation." },
            ],
            steps: [
              { part: "a", reasoning: "Reliable, relevant, sufficient.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three tests listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Correlation vs causation: association does not prove cause.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sample bias: unrepresentative samples distort findings.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Or: cherry-picking — selecting only supporting evidence.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Use multiple independent sources for corroboration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Triangulate with different evidence types (quantitative and qualitative).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: acknowledging counter-evidence strengthens the argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Reliable, relevant, sufficient. (b) Correlation, bias, cherry-picking. (c) Corroborate, triangulate, address counter-evidence.",
            commonErrors: ["Treating volume of sources as a substitute for quality."],
          },
        },
      ],
    },
    {
      id: "ee-u2-plagiarism-prevention",
      title: "Practical plagiarism prevention",
      skill: "Implement practical strategies to avoid plagiarism during research and writing.",
      lesson: {
        sections: [
          {
            heading: "During research",
            body: "Take careful notes distinguishing your ideas from source material. Record citations as you go — do not rely on memory later. Use quotation marks in notes for direct quotes. If you paraphrase, note the source immediately. A citation manager (Zotero, Mendeley) can help.",
          },
          {
            heading: "During writing",
            body: "When drafting, check every claim: is it yours or from a source? If from a source, cite it. When paraphrasing, ensure the sentence structure and wording are genuinely yours — not just synonym-swapped. Read your draft aloud: if it sounds like the source, rewrite it.",
          },
          {
            heading: "Before submission",
            body: "Run a plagiarism check if available. Review your bibliography against in-text citations — every cited source should appear in both places. Have someone else read your work: fresh eyes catch accidental plagiarism. Keep all notes and drafts as evidence of your process.",
          },
        ],
        keyFormulas: [
          { name: "Prevention strategy", statement: "Note citations during research → check during writing → verify before submission" },
          { name: "Paraphrase test", statement: "Is the sentence structure genuinely yours, not just swapped words?" },
        ],
        workedExample: {
          problem: "You find a perfect quote but worry about over-quoting. What to do?",
          solution: "Use the quote sparingly for key evidence, then paraphrase surrounding ideas in your own words with citation. Too many direct quotes suggest over-reliance on sources; paraphrasing shows your own engagement.",
        },
      },
      questions: [
        {
          id: "ee-u2-l23c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Patchwriting refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing a few words but keeping the source's structure" },
              { id: "b", text: "Summarising a source" },
              { id: "c", text: "Writing your own essay" },
              { id: "d", text: "Quoting with citation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Patchwriting", statement: "Changing a few words but keeping the source's structure — still plagiarism." },
            ],
            steps: [
              { reasoning: "Patchwriting keeps source structure with minor word changes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Changing words but keeping source structure",
            commonErrors: ["Thinking minor word changes make paraphrasing legitimate."],
          },
        },
        {
          id: "ee-u2-l23c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three stages of plagiarism prevention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plagiarism prevention", statement: "Prevent at research, writing and submission stages." },
            ],
            steps: [
              { reasoning: "Research: record citations immediately; distinguish own ideas from sources.", marks: 1, markCode: "M" },
              { reasoning: "Writing: check every claim; cite sources; ensure genuine paraphrasing.", marks: 1, markCode: "M" },
              { reasoning: "Submission: run plagiarism check; verify bibliography matches citations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prevent during research (note citations), writing (cite and paraphrase properly), and before submission (check).",
            commonErrors: ["Only checking for plagiarism at the very end."],
          },
        },
        {
          id: "ee-u2-l23c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that plagiarism is always deliberate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism intent", statement: "Plagiarism can be accidental through carelessness or ignorance." },
            ],
            steps: [
              { reasoning: "For deliberate: some plagiarism is intentional deception.", marks: 1, markCode: "M" },
              { reasoning: "Against: accidental plagiarism occurs through poor note-taking or misunderstanding citation rules.", marks: 1, markCode: "M" },
              { reasoning: "Patchwriting and forgotten citations are often unintentional.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: intent affects consequences but not whether it is plagiarism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plagiarism can be accidental; intent affects consequences but the act is still plagiarism.",
            commonErrors: ["Assuming all plagiarism is intentional cheating."],
          },
        },
        {
          id: "ee-u2-l23c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to avoid plagiarism throughout the EE process.",
          parts: [
            { label: "a", prompt: "Explain what plagiarism is and why it matters.", marks: 2 },
            { label: "b", prompt: "Describe three prevention strategies at different stages.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of plagiarism in the EE.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism prevention", statement: "Plagiarism is unattributed use; prevention requires vigilance at all stages." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: using others' work without attribution.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Matters: academic offence, essay can fail, undermines scholarship.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Research stage: note citations immediately.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Writing stage: cite all sources; genuine paraphrasing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Submission stage: plagiarism check; verify bibliography.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consequences: essay fails, grade penalty, possible disciplinary action.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Even accidental plagiarism can have serious consequences.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: prevention is far easier than dealing with consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Unattributed use = offence. (b) Note, cite, check. (c) Severe consequences; prevent early.",
            commonErrors: ["Assuming plagiarism checks will catch everything."],
          },
        },
        {
          id: "ee-u2-l23c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The best practice when taking research notes is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid writing down any source details" },
              { id: "b", text: "Record citations immediately and mark direct quotes clearly" },
              { id: "c", text: "Copy sources verbatim without recording where they came from" },
              { id: "d", text: "Paraphrase everything from memory later" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plagiarism prevention", statement: "Record citations during research; do not rely on memory." },
            ],
            steps: [
              { reasoning: "Immediate citation capture prevents lost attribution later.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Record citations immediately and mark direct quotes clearly",
            commonErrors: ["Planning to reconstruct citations from memory later."],
          },
        },
        {
          id: "ee-u2-l23c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Genuine paraphrasing requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translating the source into another language" },
              { id: "b", text: "Shortening the original sentence" },
              { id: "c", text: "Changing only a few words from the source" },
              { id: "d", text: "Rewriting in your own sentence structure and wording, with citation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paraphrase test", statement: "Is the sentence structure genuinely yours, not just swapped words?" },
            ],
            steps: [
              { reasoning: "Real paraphrasing means own structure and wording plus attribution.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Rewriting in your own sentence structure and wording, with citation",
            commonErrors: ["Calling synonym-swapping paraphrasing."],
          },
        },
        {
          id: "ee-u2-l23c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why keeping notes and drafts is important for avoiding plagiarism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism prevention", statement: "Documentation of sources and process protects against accidental plagiarism." },
            ],
            steps: [
              { reasoning: "Notes link every borrowed idea to its source, preventing forgotten attribution.", marks: 1, markCode: "M" },
              { reasoning: "Drafts show the development of your own argument over time.", marks: 1, markCode: "M" },
              { reasoning: "They provide evidence of process if questions about originality arise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Notes and drafts trace ideas to sources and document your genuine process.",
            commonErrors: ["Discarding notes once the essay is drafted."],
          },
        },
        {
          id: "ee-u2-l23c2q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three checks a student should complete before submitting the EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plagiarism prevention", statement: "Verify citations and originality before submission." },
            ],
            steps: [
              { reasoning: "Run a plagiarism check if available and review flagged passages.", marks: 1, markCode: "M" },
              { reasoning: "Verify the bibliography matches in-text citations in both directions.", marks: 1, markCode: "M" },
              { reasoning: "Have a fresh reader or read aloud to catch remaining borrowed phrasing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check plagiarism software, bibliography-citation consistency, and have fresh eyes review.",
            commonErrors: ["Relying on a single automated check only."],
          },
        },
        {
          id: "ee-u2-l23c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A citation manager such as Zotero helps students by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the essay automatically" },
              { id: "b", text: "Organising references and generating citations consistently" },
              { id: "c", text: "Translating foreign-language sources" },
              { id: "d", text: "Detecting plagiarism perfectly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plagiarism prevention", statement: "Citation managers organise references and format citations." },
            ],
            steps: [
              { reasoning: "Citation managers store references and produce correctly formatted citations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Organising references and generating citations consistently",
            commonErrors: ["Expecting a citation manager to handle paraphrasing or detection."],
          },
        },
        {
          id: "ee-u2-l23c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate relying solely on plagiarism detection software before submission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism prevention", statement: "Software is one check among several, not a complete guarantee." },
            ],
            steps: [
              { reasoning: "For: automated checks efficiently flag verbatim matches.", marks: 1, markCode: "M" },
              { reasoning: "Against: paraphrase, patchwriting and missing citations often evade detection.", marks: 1, markCode: "M" },
              { reasoning: "False positives and negatives mean results require human interpretation.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: use software as a supplement alongside manual checks, never alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Detection software is a useful supplement but cannot replace manual citation and originality checks.",
            commonErrors: ["Treating a clean report as proof of originality."],
          },
        },
        {
          id: "ee-u2-l23c2q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Reading your draft aloud before submission can help detect:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing of practical use" },
              { id: "b", text: "Spelling mistakes only" },
              { id: "c", text: "Phrasing that still echoes the source's structure — possible patchwriting" },
              { id: "d", text: "Citation errors only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Paraphrase test", statement: "Genuinely your own wording should sound natural when spoken." },
            ],
            steps: [
              { reasoning: "Copied or patchwritten phrasing often sounds unnatural when read aloud.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Phrasing that still echoes the source's structure — possible patchwriting",
            commonErrors: ["Thinking proofreading aloud only catches surface errors."],
          },
        },
        {
          id: "ee-u2-l23c2q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that self-plagiarism is harmless because the work is your own.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-plagiarism", statement: "Reusing prior work without acknowledgement misrepresents originality." },
            ],
            steps: [
              { reasoning: "For the claim: the ideas are genuinely yours, so no one is harmed.", marks: 1, markCode: "M" },
              { reasoning: "Against: submitting reused work misrepresents this essay as new research.", marks: 1, markCode: "M" },
              { reasoning: "It can breach assessment rules and devalue the demonstrated learning.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: self-plagiarism is not harmless — acknowledge or substantially rework prior material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Self-plagiarism misrepresents originality and can breach rules; it is not harmless.",
            commonErrors: ["Assuming ownership of work removes the need for acknowledgement."],
          },
        },
        {
          id: "ee-u2-l23c2q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to paraphrase a source without committing patchwriting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Paraphrase test", statement: "Paraphrase must rebuild the sentence, not just swap words." },
            ],
            steps: [
              { reasoning: "Read the source, then close it before writing your version.", marks: 1, markCode: "M" },
              { reasoning: "Rebuild the sentence with your own structure and vocabulary.", marks: 1, markCode: "M" },
              { reasoning: "Compare with the original to confirm no copied phrasing remains, then cite.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Read, close, rewrite in your own structure, verify against the original and cite.",
            commonErrors: ["Keeping the source open while paraphrasing, which invites patchwriting."],
          },
        },
        {
          id: "ee-u2-l23c2q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Before submission, every entry in the bibliography should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Be cited in the text, and every in-text citation should appear in the bibliography" },
              { id: "b", text: "Be deleted to save space" },
              { id: "c", text: "Include only Wikipedia entries" },
              { id: "d", text: "Be longer than the essay itself" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Citation test", statement: "Bibliography and in-text citations must be consistent." },
            ],
            steps: [
              { reasoning: "Every bibliography entry needs an in-text citation and vice versa.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Be cited in the text, and every in-text citation should appear in the bibliography",
            commonErrors: ["Listing sources never cited or citing sources absent from the bibliography."],
          },
        },
        {
          id: "ee-u2-l23c2q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate how poor note-taking increases the risk of accidental plagiarism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism prevention", statement: "Most accidental plagiarism originates in poor research-stage record-keeping." },
            ],
            steps: [
              { reasoning: "Without recorded sources, paraphrased ideas lose their attribution trail.", marks: 1, markCode: "M" },
              { reasoning: "Notes taken from memory drift toward the source's original phrasing — patchwriting risk.", marks: 1, markCode: "M" },
              { reasoning: "Direct quotes copied without markers may later be mistaken for your own words.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: disciplined note-taking at the research stage is the cheapest plagiarism prevention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poor notes sever the link between ideas and sources, making accidental plagiarism likely.",
            commonErrors: ["Blaming only the writing stage for plagiarism that began in research."],
          },
        },
        {
          id: "ee-u2-l23c2q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to prevent plagiarism throughout the research and writing process.",
          parts: [
            { label: "a", prompt: "Explain the role of careful note-taking during research.", marks: 2 },
            { label: "b", prompt: "Describe three checks to complete before submission.", marks: 3 },
            { label: "c", prompt: "Evaluate the usefulness of citation managers and fresh readers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism prevention", statement: "Prevention works at every stage: notes, writing and final checks." },
            ],
            steps: [
              { part: "a", reasoning: "Record citations immediately and mark direct quotes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This preserves the link between borrowed ideas and their sources.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Run a plagiarism check and review flagged passages.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify bibliography matches in-text citations both ways.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Have fresh eyes or read aloud to catch borrowed phrasing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Citation managers keep references organised and formats consistent.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fresh readers catch accidental plagiarism automated tools miss.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: tools assist but human review remains essential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Notes preserve attribution. (b) Check, verify, review. (c) Tools help; human checks essential.",
            commonErrors: ["Treating prevention as a single final step rather than a process."],
          },
        },
      ],
    },
  ],
};
