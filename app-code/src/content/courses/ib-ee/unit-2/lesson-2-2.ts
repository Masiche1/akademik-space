import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ee-u2-lesson-2-2",
  code: "2-2",
  title: "Secondary Sources and Academic Integrity",
  goal: "I CAN evaluate secondary sources critically and maintain academic integrity throughout the EE.",
  standards: ["EE", "Secondary Sources", "Academic Integrity"],
  vocabulary: [
    { term: "Secondary source", definition: "Later analysis, interpretation or synthesis of primary material." },
    { term: "Peer review", definition: "Evaluation of research by experts before publication." },
    { term: "Academic integrity", definition: "Honesty and ethical conduct in academic work — no plagiarism or fabrication." },
    { term: "Plagiarism", definition: "Using others' work or ideas without proper attribution." },
    { term: "Citation", definition: "Acknowledging sources used in the essay through formal referencing." },
    { term: "Source bias", definition: "Systematic distortion in a source due to the creator's perspective or purpose." },
  ],
  concepts: [
    {
      id: "ee-u2-secondary-sources",
      title: "Evaluating secondary sources",
      skill: "Critically evaluate secondary sources for reliability, bias and relevance.",
      lesson: {
        sections: [
          {
            heading: "What secondary sources offer",
            body: "Secondary sources provide expert analysis, context and synthesis that primary sources lack. Historians' interpretations, scientific reviews, literary criticism — these help you understand what primary evidence means and how experts have debated it. A good EE uses secondary sources to frame and interpret primary evidence.",
          },
          {
            heading: "Evaluating reliability",
            body: "Check: Is the author an expert? Is the source peer-reviewed? How recent is it? Does it cite primary sources? Is it biased? A peer-reviewed journal article is generally more reliable than a blog post or Wikipedia. But even expert sources can be wrong or outdated.",
          },
          {
            heading: "Using sources critically",
            body: "Do not just collect sources — evaluate them. Compare different secondary sources on the same topic; note where they agree and disagree. Disagreements reveal the contested nature of knowledge and give you material for argument. Cite sources accurately and explain how they support your claims.",
          },
        ],
        keyFormulas: [
          { name: "Source evaluation", statement: "Expertise + peer review + recency + citations + bias check" },
          { name: "Critical use", statement: "Compare sources; disagreements reveal contested knowledge" },
        ],
        workedExample: {
          problem: "Two historians disagree about the causes of a war. How to use this?",
          solution: "This disagreement is valuable — it shows the topic is contested. Use both sources, present their arguments, and develop your own position through critical comparison. Disagreement among experts is material for analysis, not a problem.",
        },
      },
      questions: [
        {
          id: "ee-u2-l22c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Peer review means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A source is popular" },
              { id: "b", text: "Experts evaluate research before publication" },
              { id: "c", text: "The source is old" },
              { id: "d", text: "The source is free" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peer review", statement: "Evaluation of research by experts before publication." },
            ],
            steps: [
              { reasoning: "Peer review is expert evaluation before publication.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Experts evaluate research before publication",
            commonErrors: ["Confusing peer review with popularity or age."],
          },
        },
        {
          id: "ee-u2-l22c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three criteria for evaluating a secondary source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Check expertise, peer review, recency, citations and bias." },
            ],
            steps: [
              { reasoning: "Expertise: is the author qualified in the field?", marks: 1, markCode: "M" },
              { reasoning: "Peer review and recency: has it been vetted and is it current?", marks: 1, markCode: "M" },
              { reasoning: "Bias and citations: does it acknowledge its perspective and cite sources?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate expertise, peer review/recency, and bias/citations.",
            commonErrors: ["Judging sources only by how well they support your argument."],
          },
        },
        {
          id: "ee-u2-l22c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that peer-reviewed sources are always reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Peer review limits", statement: "Peer review improves reliability but does not guarantee truth." },
            ],
            steps: [
              { reasoning: "For: peer review filters out poor research and errors.", marks: 1, markCode: "M" },
              { reasoning: "Against: reviewers can miss errors; consensus can be wrong; publication bias exists.", marks: 1, markCode: "M" },
              { reasoning: "Peer review is a quality filter, not an infallibility guarantee.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: peer-reviewed sources are generally more reliable but still require critical reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Peer review improves reliability but does not guarantee correctness — critical evaluation is still needed.",
            commonErrors: ["Treating peer review as a guarantee of truth."],
          },
        },
        {
          id: "ee-u2-l22c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to evaluate and use secondary sources.",
          parts: [
            { label: "a", prompt: "Define secondary sources and explain their role.", marks: 2 },
            { label: "b", prompt: "Describe three criteria for evaluating them.", marks: 3 },
            { label: "c", prompt: "Evaluate how disagreements among sources can strengthen an essay.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Secondary source use", statement: "Sources provide expert analysis but require critical evaluation." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: later analysis of primary material.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Role: provides context, interpretation and synthesis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expertise: author qualifications.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Peer review/recency: quality and currency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Bias/citations: perspective and sourcing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Disagreements reveal contested knowledge.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They provide material for critical comparison and argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: source disagreement strengthens rather than weakens analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Later analysis providing context. (b) Expertise, review, bias. (c) Disagreement = material for argument.",
            commonErrors: ["Treating all secondary sources as equally reliable."],
          },
        },
        {
          id: "ee-u2-l22c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A secondary source is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence produced at the time of events" },
              { id: "b", text: "Later analysis or interpretation of primary material" },
              { id: "c", text: "The student's own research notes" },
              { id: "d", text: "A raw experimental dataset" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secondary source", statement: "Later analysis, interpretation or synthesis of primary material." },
            ],
            steps: [
              { reasoning: "Secondary sources interpret or synthesise earlier material rather than being contemporary evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Later analysis or interpretation of primary material",
            commonErrors: ["Confusing secondary sources with the student's own notes."],
          },
        },
        {
          id: "ee-u2-l22c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Peer review improves the reliability of a source because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It guarantees the source is correct" },
              { id: "b", text: "Independent experts evaluate the research before publication" },
              { id: "c", text: "It makes the source free to access" },
              { id: "d", text: "It ensures the source is recent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peer review", statement: "Evaluation of research by experts before publication." },
            ],
            steps: [
              { reasoning: "Peer review is expert scrutiny that filters out weak or erroneous research.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Independent experts evaluate the research before publication",
            commonErrors: ["Treating peer review as a guarantee of correctness."],
          },
        },
        {
          id: "ee-u2-l22c1q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why comparing secondary sources on the same topic can strengthen an EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Critical use", statement: "Comparing sources reveals agreement and disagreement in scholarship." },
            ],
            steps: [
              { reasoning: "Comparison shows where experts agree, indicating more settled knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Disagreements reveal contested areas and give material for argument.", marks: 1, markCode: "M" },
              { reasoning: "The student can develop an original position through critical weighing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comparing sources maps consensus and controversy, providing material for a critical, original argument.",
            commonErrors: ["Using sources only to confirm a predetermined position."],
          },
        },
        {
          id: "ee-u2-l22c1q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three criteria for judging the reliability of a secondary source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source evaluation", statement: "Check expertise, peer review, recency, citations and bias." },
            ],
            steps: [
              { reasoning: "Expertise: is the author qualified and recognised in the field?", marks: 1, markCode: "M" },
              { reasoning: "Peer review and recency: has the work been vetted and is it current?", marks: 1, markCode: "M" },
              { reasoning: "Bias and citations: does it acknowledge perspective and cite its own sources?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Judge expertise, peer review/recency, and bias/citation practice.",
            commonErrors: ["Judging reliability by how well the source supports your argument."],
          },
        },
        {
          id: "ee-u2-l22c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the strongest indicator that a secondary source's author is an expert?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's book is on a bestseller list" },
              { id: "b", text: "The author holds relevant qualifications and has published peer-reviewed work" },
              { id: "c", text: "The source has many social media followers" },
              { id: "d", text: "The source is the first result on a search engine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source evaluation", statement: "Expertise is shown by qualifications and peer-reviewed publication." },
            ],
            steps: [
              { reasoning: "Credentials and peer-reviewed output demonstrate expertise far better than popularity metrics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The author holds relevant qualifications and has published peer-reviewed work",
            commonErrors: ["Confusing popularity with expertise."],
          },
        },
        {
          id: "ee-u2-l22c1q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the use of Wikipedia as a secondary source in an EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source evaluation", statement: "Sources must be vetted for expertise and reliability; Wikipedia is not peer-reviewed." },
            ],
            steps: [
              { reasoning: "For: Wikipedia is useful for orientation and for locating references to academic sources.", marks: 1, markCode: "M" },
              { reasoning: "Against: it is not peer-reviewed, can be edited by anyone and may contain errors.", marks: 1, markCode: "M" },
              { reasoning: "It is technically a tertiary source, not a true secondary source for citation.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: use it only to find leads; cite peer-reviewed or academic sources instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wikipedia is a useful starting point but unreliable as a cited source; use it to find academic references.",
            commonErrors: ["Citing Wikipedia directly in the EE bibliography."],
          },
        },
        {
          id: "ee-u2-l22c1q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two respected historians disagree about the causes of a historical event. The best approach in an EE is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choose the more recent historian and ignore the other" },
              { id: "b", text: "Present both arguments, compare them and develop your own position" },
              { id: "c", text: "Assume both historians are wrong" },
              { id: "d", text: "Cite neither to avoid confusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Critical use", statement: "Expert disagreement is material for analysis, not a problem." },
            ],
            steps: [
              { reasoning: "Disagreement among experts signals contested knowledge and invites critical comparison.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Present both arguments, compare them and develop your own position",
            commonErrors: ["Ignoring disagreement instead of analysing it."],
          },
        },
        {
          id: "ee-u2-l22c1q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the most recent secondary source is always the best.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source evaluation", statement: "Recency matters, but older works can remain authoritative." },
            ],
            steps: [
              { reasoning: "For: recent sources incorporate the latest evidence and corrections.", marks: 1, markCode: "M" },
              { reasoning: "Against: foundational works may still be definitive; newer is not automatically better.", marks: 1, markCode: "M" },
              { reasoning: "Outdated findings may have been superseded, but classic interpretations retain value.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: prefer recent sources unless an older work is still authoritative — check the scholarship.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recency helps currency but does not guarantee superiority; weigh authority and later scholarship.",
            commonErrors: ["Choosing sources by date alone."],
          },
        },
        {
          id: "ee-u2-l22c1q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how bias can appear even in academic secondary sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source bias", statement: "Bias is systematic distortion from perspective or purpose, even in scholarship." },
            ],
            steps: [
              { reasoning: "Selection bias: authors choose which evidence and interpretations to emphasise.", marks: 1, markCode: "M" },
              { reasoning: "Theoretical bias: authors work within particular schools of thought that shape conclusions.", marks: 1, markCode: "M" },
              { reasoning: "Institutional or funding bias can also influence framing, acknowledged or not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Academic sources can show bias through selection, theoretical school and institutional interests.",
            commonErrors: ["Assuming peer review eliminates all bias."],
          },
        },
        {
          id: "ee-u2-l22c1q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A secondary source that cites primary sources and acknowledges its own limitations is likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less reliable because it admits doubt" },
              { id: "b", text: "More reliable because it is transparent about its basis and limits" },
              { id: "c", text: "Irrelevant to the essay" },
              { id: "d", text: "Actually a primary source" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Source evaluation", statement: "Transparency about evidence and limits signals scholarly care." },
            ],
            steps: [
              { reasoning: "Citing primary sources and acknowledging limits indicates rigour, not weakness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** More reliable because it is transparent about its basis and limits",
            commonErrors: ["Mistaking admitted uncertainty for unreliability."],
          },
        },
        {
          id: "ee-u2-l22c1q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that secondary sources add nothing beyond what primary sources already provide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Secondary source role", statement: "Secondary sources supply expertise, context and synthesis that primary material lacks." },
            ],
            steps: [
              { reasoning: "Against: secondary sources provide expert interpretation and historical context.", marks: 1, markCode: "M" },
              { reasoning: "They synthesise vast primary material and map scholarly debates.", marks: 1, markCode: "M" },
              { reasoning: "Primary sources alone often cannot be interpreted without such framing.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: secondary sources add indispensable analytical value beyond primary evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Secondary sources contribute expertise, context and debate that primary sources alone cannot supply.",
            commonErrors: ["Undervaluing the interpretive role of secondary sources."],
          },
        },
        {
          id: "ee-u2-l22c1q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to evaluate and use secondary sources in the EE.",
          parts: [
            { label: "a", prompt: "Define secondary sources and explain their role.", marks: 2 },
            { label: "b", prompt: "Describe three criteria for evaluating them.", marks: 3 },
            { label: "c", prompt: "Evaluate how disagreements among sources can strengthen an essay.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Secondary source use", statement: "Sources provide expert analysis but require critical evaluation and comparison." },
            ],
            steps: [
              { part: "a", reasoning: "Definition: later analysis or interpretation of primary material.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Role: provides context, interpretation and synthesis of evidence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expertise: author qualifications and reputation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Peer review and recency: quality vetting and currency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Bias and citations: perspective acknowledged and sources cited.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Disagreement reveals contested knowledge worth analysing.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comparing positions generates material for the student's own argument.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: scholarly disagreement strengthens rather than weakens analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Later analysis providing context. (b) Expertise, review, bias. (c) Disagreement = material for argument.",
            commonErrors: ["Selecting sources only for agreement with a fixed thesis."],
          },
        },
      ],
    },
    {
      id: "ee-u2-academic-integrity",
      title: "Academic integrity and avoiding plagiarism",
      skill: "Maintain academic integrity and avoid plagiarism through proper citation and paraphrasing.",
      lesson: {
        sections: [
          {
            heading: "What academic integrity requires",
            body: "Academic integrity means: submitting your own work; citing all sources used; not fabricating data or references; acknowledging collaboration appropriately. Plagiarism — using others' words or ideas without attribution — is a serious academic offence that can result in essay failure.",
          },
          {
            heading: "How to avoid plagiarism",
            body: "Three strategies: **quote** exactly with quotation marks and citation; **paraphrase** by rewriting in your own words with citation; **summarise** the main ideas with citation. Even paraphrased or summarised ideas need citation — plagiarism is about ideas, not just words.",
          },
          {
            heading: "Common mistakes",
            body: "Patchwriting (changing a few words but keeping the structure) is still plagiarism. Forgetting to cite a source you used is plagiarism even if accidental. Copying from your own previous work without acknowledgement can also be problematic. When in doubt, cite.",
          },
        ],
        keyFormulas: [
          { name: "Integrity rule", statement: "Your work, your sources cited, no fabrication" },
          { name: "Citation test", statement: "Would a reader know this idea came from somewhere else?" },
        ],
        workedExample: {
          problem: "You read a source and want to use its idea in different words. What must you do?",
          solution: "Paraphrase in your own words AND cite the source. Changing the words does not remove the need for citation — the idea still belongs to the original author. When in doubt, cite.",
        },
      },
      questions: [
        {
          id: "ee-u2-l22c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Plagiarism is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using any source in an essay" },
              { id: "b", text: "Using others' work without proper attribution" },
              { id: "c", text: "Writing too slowly" },
              { id: "d", text: "Using too many sources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plagiarism", statement: "Using others' work or ideas without proper attribution." },
            ],
            steps: [
              { reasoning: "Plagiarism is using others' work without attribution.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Using others' work without proper attribution",
            commonErrors: ["Thinking only direct copying counts as plagiarism."],
          },
        },
        {
          id: "ee-u2-l22c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between quoting, paraphrasing and summarising.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Citation techniques", statement: "Quote exactly, paraphrase in own words, or summarise main ideas — all require citation." },
            ],
            steps: [
              { reasoning: "Quote: exact words with quotation marks and citation.", marks: 1, markCode: "M" },
              { reasoning: "Paraphrase: same ideas in your own words, still cited.", marks: 1, markCode: "M" },
              { reasoning: "Summarise: main points condensed, cited — all three require attribution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quote exactly, paraphrase in own words, or summarise — all three require citation.",
            commonErrors: ["Thinking paraphrasing removes the need for citation."],
          },
        },
        {
          id: "ee-u2-l22c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that accidental plagiarism is not plagiarism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism definition", statement: "Plagiarism is about unattributed use, regardless of intent." },
            ],
            steps: [
              { reasoning: "Against: plagiarism is defined by the act, not the intent.", marks: 1, markCode: "M" },
              { reasoning: "Accidental plagiarism still means unattributed use of others' work.", marks: 1, markCode: "M" },
              { reasoning: "However, intent may affect consequences — negligence vs deception.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: it is still plagiarism technically, though consequences may differ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Accidental plagiarism is still plagiarism by definition, though intent may affect consequences.",
            commonErrors: ["Assuming only deliberate copying counts."],
          },
        },
        {
          id: "ee-u2-l22c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to maintain academic integrity in the EE.",
          parts: [
            { label: "a", prompt: "Define academic integrity and plagiarism.", marks: 2 },
            { label: "b", prompt: "Describe three strategies for avoiding plagiarism.", marks: 3 },
            { label: "c", prompt: "Evaluate why citation matters beyond avoiding plagiarism.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Academic integrity", statement: "Honesty in using sources — cite everything, submit own work." },
            ],
            steps: [
              { part: "a", reasoning: "Integrity: honest academic conduct; plagiarism: unattributed use of others' work.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly defined.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Quote exactly with citation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Paraphrase in own words with citation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Summarise with citation — all ideas need attribution.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Citation shows the intellectual conversation your work joins.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It allows readers to verify and trace your sources.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: citation is scholarship, not just compliance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Honest conduct, no unattributed use. (b) Quote, paraphrase, summarise with citation. (c) Citation = scholarly practice.",
            commonErrors: ["Citing only direct quotes but not paraphrased ideas."],
          },
        },
        {
          id: "ee-u2-l22c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following requires a citation in the EE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fact everyone already knows" },
              { id: "b", text: "A paraphrased idea taken from a source" },
              { id: "c", text: "Your own original analysis" },
              { id: "d", text: "Common knowledge" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Citation test", statement: "Would a reader know this idea came from somewhere else?" },
            ],
            steps: [
              { reasoning: "Borrowed ideas need attribution even when reworded; own analysis and common knowledge do not.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A paraphrased idea taken from a source",
            commonErrors: ["Thinking only verbatim quotes need citation."],
          },
        },
        {
          id: "ee-u2-l22c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Fabricating references or data in an EE violates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing, if the argument is good" },
              { id: "b", text: "Academic integrity" },
              { id: "c", text: "Only style guidelines" },
              { id: "d", text: "Citation format rules only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Academic integrity", statement: "Honesty and ethical conduct — no plagiarism or fabrication." },
            ],
            steps: [
              { reasoning: "Fabrication is dishonest scholarship and breaches academic integrity directly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Academic integrity",
            commonErrors: ["Treating fabrication as a minor formatting issue."],
          },
        },
        {
          id: "ee-u2-l22c2q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why paraphrasing still requires citation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism definition", statement: "Plagiarism covers ideas as well as words." },
            ],
            steps: [
              { reasoning: "The ideas belong to the original author even when the wording changes.", marks: 1, markCode: "M" },
              { reasoning: "Citation gives attribution and lets readers trace the source.", marks: 1, markCode: "M" },
              { reasoning: "Uncited paraphrasing misrepresents borrowed ideas as your own.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Paraphrasing borrows ideas, not just words, so the source must still be cited.",
            commonErrors: ["Believing changed wording removes the need for citation."],
          },
        },
        {
          id: "ee-u2-l22c2q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three components of academic integrity in the EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Academic integrity", statement: "Honesty in academic work: own work, proper citation, no fabrication." },
            ],
            steps: [
              { reasoning: "Submit your own work — no buying or ghost-writing.", marks: 1, markCode: "M" },
              { reasoning: "Cite all sources used, whether quoted, paraphrased or summarised.", marks: 1, markCode: "M" },
              { reasoning: "Do not fabricate data, references or results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Integrity means own work, full citation of sources and no fabrication.",
            commonErrors: ["Focusing only on plagiarism and ignoring fabrication."],
          },
        },
        {
          id: "ee-u2-l22c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student replaces every word in a source's sentence with synonyms but keeps the structure and does not cite. This is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Legitimate paraphrasing" },
              { id: "b", text: "Patchwriting, which is still plagiarism" },
              { id: "c", text: "Proper summarising" },
              { id: "d", text: "Acceptable if the result is shorter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Patchwriting", statement: "Changing a few words but keeping the source's structure — still plagiarism." },
            ],
            steps: [
              { reasoning: "Keeping the source's structure with swapped words is patchwriting, a form of plagiarism.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Patchwriting, which is still plagiarism",
            commonErrors: ["Thinking synonym replacement equals genuine paraphrasing."],
          },
        },
        {
          id: "ee-u2-l22c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate 'When in doubt, cite' as a rule for avoiding plagiarism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Citation test", statement: "Uncertain attribution should default to citation." },
            ],
            steps: [
              { reasoning: "For: the rule is simple, memorable and errs toward honest attribution.", marks: 1, markCode: "M" },
              { reasoning: "It prevents accidental plagiarism from forgotten or uncertain sources.", marks: 1, markCode: "M" },
              { reasoning: "Against: over-citation of common knowledge can look sloppy, though this is minor.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: a sound practical rule — better to over-cite than to plagiarise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'When in doubt, cite' is a sound rule: it errs toward attribution and prevents accidental plagiarism.",
            commonErrors: ["Refusing the rule because occasional over-citation looks awkward."],
          },
        },
        {
          id: "ee-u2-l22c2q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Self-plagiarism refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying another student's essay" },
              { id: "b", text: "Reusing one's own previous work without acknowledgement" },
              { id: "c", text: "Citing too many of your own sources" },
              { id: "d", text: "Writing an essay about yourself" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-plagiarism", statement: "Reusing one's own previous work without acknowledgement." },
            ],
            steps: [
              { reasoning: "Self-plagiarism is unacknowledged reuse of one's own earlier work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reusing one's own previous work without acknowledgement",
            commonErrors: ["Assuming your own work can never be plagiarised."],
          },
        },
        {
          id: "ee-u2-l22c2q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that plagiarism detection software makes manual citation checks unnecessary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plagiarism prevention", statement: "Software is a supplement to, not a substitute for, careful citation practice." },
            ],
            steps: [
              { reasoning: "For: detection tools flag verbatim matches and raise awareness.", marks: 1, markCode: "M" },
              { reasoning: "Against: they miss paraphrase, patchwriting and missing citations entirely.", marks: 1, markCode: "M" },
              { reasoning: "They can produce false positives and false negatives, so results need human judgement.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: software complements but cannot replace manual checking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Detection software catches only verbatim matches; manual review remains essential.",
            commonErrors: ["Treating a clean plagiarism report as proof of integrity."],
          },
        },
        {
          id: "ee-u2-l22c2q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a student should handle a source when unsure of the exact citation rules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Citation test", statement: "Record full source details and cite generously when uncertain." },
            ],
            steps: [
              { reasoning: "Record complete bibliographic details at the research stage.", marks: 1, markCode: "M" },
              { reasoning: "Consult the required citation style guide or ask the supervisor.", marks: 1, markCode: "M" },
              { reasoning: "When still unsure, cite — over-attribution is safer than none.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Record full details, check the style guide, and cite generously when uncertain.",
            commonErrors: ["Guessing citation format or omitting uncertain sources."],
          },
        },
        {
          id: "ee-u2-l22c2q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student submits an EE entirely written by a friend. This is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plagiarism only" },
              { id: "b", text: "A breach of academic integrity — submitting work that is not your own" },
              { id: "c", text: "Acceptable collaboration" },
              { id: "d", text: "A formatting error" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Academic integrity", statement: "The submitted work must genuinely be the student's own." },
            ],
            steps: [
              { reasoning: "Ghost-writing breaches integrity even if no source was copied.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A breach of academic integrity — submitting work that is not your own",
            commonErrors: ["Thinking plagiarism requires copying from a published source."],
          },
        },
        {
          id: "ee-u2-l22c2q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the specific consequences of plagiarism for an EE candidate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Academic integrity", statement: "Plagiarism can invalidate the essay and trigger disciplinary action." },
            ],
            steps: [
              { reasoning: "The essay may score zero or fail outright if plagiarism is confirmed.", marks: 1, markCode: "M" },
              { reasoning: "It can affect the overall diploma grade and trigger referral to the IB.", marks: 1, markCode: "M" },
              { reasoning: "Even suspected plagiarism creates stress and investigation during a critical period.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: prevention through careful citation is far cheaper than these consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plagiarism risks essay failure, grade penalties and disciplinary referral — prevention is essential.",
            commonErrors: ["Underestimating consequences because 'everyone does it'."],
          },
        },
        {
          id: "ee-u2-l22c2q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to maintain academic integrity throughout the EE process.",
          parts: [
            { label: "a", prompt: "Define academic integrity and plagiarism.", marks: 2 },
            { label: "b", prompt: "Describe three strategies for avoiding plagiarism.", marks: 3 },
            { label: "c", prompt: "Evaluate why citation matters beyond avoiding plagiarism.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Academic integrity", statement: "Honest scholarship requires own work, full attribution and no fabrication." },
            ],
            steps: [
              { part: "a", reasoning: "Integrity: honest academic conduct; plagiarism: unattributed use of others' work.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly defined.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Quote exactly with quotation marks and citation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Paraphrase in genuinely own words with citation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Summarise main ideas with citation — ideas need attribution too.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Citation shows the intellectual conversation your work joins.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It lets readers verify sources and trace your argument's basis.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: citation is scholarly practice, not merely rule compliance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Honest conduct, no unattributed use. (b) Quote, paraphrase, summarise with citation. (c) Citation = scholarly practice.",
            commonErrors: ["Citing only direct quotes but not borrowed ideas."],
          },
        },
      ],
    },
  ],
};
