import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "tok-u2-lesson-2-2",
  code: "2-2",
  title: "Human Sciences and History",
  goal: "I CAN compare how human sciences and history produce knowledge and evaluate their claims to objectivity.",
  standards: ["TOK", "Areas of Knowledge", "Human Sciences", "History"],
  vocabulary: [
    { term: "Human sciences", definition: "Disciplines studying human behaviour and society: psychology, sociology, economics, anthropology." },
    { term: "Objectivity", definition: "Freedom from personal bias; knowledge not distorted by the knower's perspective." },
    { term: "Interpretation", definition: "The act of assigning meaning to evidence, always shaped by perspective." },
    { term: "Primary source", definition: "Evidence produced at the time of the event being studied." },
    { term: "Secondary source", definition: "Evidence produced later, analysing or interpreting primary material." },
    { term: "Historical significance", definition: "The judgement that certain events mattered more than others — a value-laden assessment." },
  ],
  concepts: [
    {
      id: "tok-u2-human-sciences",
      title: "The human sciences as an area of knowledge",
      skill: "Evaluate the methods and objectivity of psychology, sociology, economics and related disciplines.",
      lesson: {
        sections: [
          {
            heading: "Studying human behaviour",
            body: "The human sciences — psychology, sociology, economics, anthropology — study people, who are not passive objects of study. The observer is part of what is observed: researchers bring assumptions, participants behave differently when studied, and human behaviour is shaped by culture and context. This makes objectivity harder to achieve than in the natural sciences.",
          },
          {
            heading: "Methods and their limits",
            body: "Human scientists use experiments, surveys, interviews and statistical analysis — borrowing methods from natural science. But people cannot be randomly assigned to conditions easily, cultures differ, and results often fail to replicate across contexts. Psychology's 'replication crisis' showed how fragile some findings are.",
          },
          {
            heading: "What counts as knowledge here",
            body: "Human sciences produce **probabilistic** knowledge: tendencies and correlations rather than laws. Their claims are more context-dependent and value-laden than natural science — deciding what counts as 'abnormal' behaviour or 'efficient' markets involves judgement. Their knowledge is useful but interpretive.",
          },
        ],
        keyFormulas: [
          { name: "Human science knowledge", statement: "Probabilistic, context-dependent and interpretive — not law-like" },
          { name: "Key problem", statement: "The observer is part of the observed" },
        ],
        workedExample: {
          problem: "Why might a psychological finding in one country fail in another?",
          solution: "Human behaviour is culturally embedded — values, institutions and norms differ. A study of conformity in one society may not transfer to another. This shows human science knowledge is context-bound rather than universal.",
        },
      },
      questions: [
        {
          id: "tok-u2-l22c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a human science?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sociology" },
              { id: "b", text: "Chemistry" },
              { id: "c", text: "Astronomy" },
              { id: "d", text: "Physics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Human sciences", statement: "Disciplines studying human behaviour and society: psychology, sociology, economics, anthropology." },
            ],
            steps: [
              { reasoning: "Sociology studies human society; the others are natural sciences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Sociology",
            commonErrors: ["Confusing human sciences with natural sciences."],
          },
        },
        {
          id: "tok-u2-l22c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why objectivity is harder to achieve in the human sciences than in the natural sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Objectivity problem", statement: "Human researchers study beings like themselves, introducing interpretation and bias." },
            ],
            steps: [
              { reasoning: "The observer shares the nature of the observed — assumptions and values enter the study.", marks: 1, markCode: "M" },
              { reasoning: "Participants react to being studied and interpret the researcher's aims.", marks: 1, markCode: "M" },
              { reasoning: "Human behaviour is culturally variable, so findings resist universal generalisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The researcher is part of the studied phenomenon, so interpretation, bias and cultural variation make objectivity harder.",
            commonErrors: ["Assuming human science methods can match natural science objectivity."],
          },
        },
        {
          id: "tok-u2-l22c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the status of knowledge produced by the human sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status of human science", statement: "Probabilistic, context-dependent knowledge — useful but less certain than natural science." },
            ],
            steps: [
              { reasoning: "For: systematic methods, empirical data and statistical rigour give real explanatory power.", marks: 1, markCode: "M" },
              { reasoning: "Against: replication failures and context-dependence weaken confidence in findings.", marks: 1, markCode: "M" },
              { reasoning: "Knowledge is interpretive — definitions of normality, health and efficiency embed values.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: reliable tendencies rather than laws; knowledge is probable and revisable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Human sciences produce useful probabilistic knowledge that is interpretive, context-bound and revisable.",
            commonErrors: ["Treating human science findings as universal laws."],
          },
        },
        {
          id: "tok-u2-l22c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the nature of knowledge in the human sciences.",
          parts: [
            { label: "a", prompt: "Name two human sciences and describe their main method.", marks: 2 },
            { label: "b", prompt: "Explain two problems facing objectivity in human science research.", marks: 3 },
            { label: "c", prompt: "Evaluate whether human sciences can achieve knowledge comparable to natural sciences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Human science knowledge", statement: "Probabilistic and interpretive knowledge produced under conditions of self-reference." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. psychology uses experiments/surveys; sociology uses surveys, interviews, observation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Researcher bias: the observer shares the nature of the observed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Participants' self-awareness changes behaviour when studied.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cultural variation prevents universal generalisation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Human sciences cannot replicate the controlled conditions of natural experiments.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Their findings are probabilistic and context-bound, not law-like.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: real knowledge but of a different, weaker kind than natural science.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Psychology/sociology with methods. (b) Bias, self-awareness, cultural variation. (c) Weaker, interpretive knowledge.",
            commonErrors: ["Expecting human sciences to produce universal laws."],
          },
        },
        {
          id: "tok-u2-l22c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which discipline is most clearly a human science?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Physics" },
              { id: "b", text: "Geology" },
              { id: "c", text: "Anthropology" },
              { id: "d", text: "Astronomy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Human sciences", statement: "Disciplines such as psychology, sociology, economics and anthropology study human behaviour and society." },
            ],
            steps: [
              { reasoning: "Anthropology studies human societies and culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Anthropology",
            commonErrors: ["Confusing human sciences with natural sciences."],
          },
        },
        {
          id: "tok-u2-l22c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The phrase 'the observer is part of the observed' means that in human science research:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Participants cannot influence the study" },
              { id: "b", text: "The researcher shares the human nature being studied and may affect interpretation" },
              { id: "c", text: "Only instruments determine knowledge" },
              { id: "d", text: "Researchers have no influence on results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-reference in human sciences", statement: "Researchers study beings like themselves, so perspective and interaction affect knowledge." },
            ],
            steps: [
              { reasoning: "The researcher is also a human agent with assumptions and values.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The researcher shares the human nature being studied and may affect interpretation",
            commonErrors: ["Assuming human science researchers can be perfectly neutral."],
          },
        },
        {
          id: "tok-u2-l22c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'replication crisis' in psychology mainly shows that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All psychological knowledge is false" },
              { id: "b", text: "Human behaviour cannot be studied" },
              { id: "c", text: "Some published findings were fragile or difficult to reproduce" },
              { id: "d", text: "Experiments are unnecessary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Replication", statement: "Replication tests whether findings can be repeated under similar conditions." },
            ],
            steps: [
              { reasoning: "Replication failures reveal weaknesses in some findings.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Some published findings were fragile or difficult to reproduce",
            commonErrors: ["Generalising replication problems to all human science."],
          },
        },
        {
          id: "tok-u2-l22c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Human science knowledge is often called probabilistic because it mainly identifies:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Universal laws with no exceptions" },
              { id: "b", text: "Revealed truths" },
              { id: "c", text: "Mathematical proofs" },
              { id: "d", text: "Tendencies and correlations rather than exceptionless laws" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probabilistic knowledge", statement: "Claims about tendencies and likelihoods rather than deterministic laws." },
            ],
            steps: [
              { reasoning: "Human behaviour varies, so findings usually describe probabilities.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Tendencies and correlations rather than exceptionless laws",
            commonErrors: ["Expecting human sciences to produce natural-science laws."],
          },
        },
        {
          id: "tok-u2-l22c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a psychological finding in one country fail to apply in another?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because all human behaviour is identical" },
              { id: "b", text: "Because psychology has no methods" },
              { id: "c", text: "Because language prevents all communication" },
              { id: "d", text: "Because culture, institutions and norms shape behaviour differently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Context dependence", statement: "Human behaviour is shaped by cultural and institutional context." },
            ],
            steps: [
              { reasoning: "Different societies embed different norms and incentives.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Because culture, institutions and norms shape behaviour differently",
            commonErrors: ["Assuming psychological findings are automatically universal."],
          },
        },
        {
          id: "tok-u2-l22c1q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which best explains why human science concepts such as 'normal' or 'efficient' can be value-laden?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They involve choices about what counts as desirable or appropriate" },
              { id: "b", text: "They are proven by mathematics" },
              { id: "c", text: "They cannot be studied empirically" },
              { id: "d", text: "They are defined without judgement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Value-ladenness", statement: "Human science categories often embed evaluative judgements about people and society." },
            ],
            steps: [
              { reasoning: "Deciding what is normal or efficient requires value judgement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** They involve choices about what counts as desirable or appropriate",
            commonErrors: ["Treating human science classifications as purely neutral facts."],
          },
        },
        {
          id: "tok-u2-l22c1q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why objectivity is harder to achieve in human sciences than in natural sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Objectivity problem", statement: "Human researchers study beings like themselves, introducing interpretation and interaction." },
            ],
            steps: [
              { reasoning: "The researcher shares the nature of the researched and brings assumptions.", marks: 1, markCode: "M" },
              { reasoning: "Participants may change behaviour when they know they are studied.", marks: 1, markCode: "M" },
              { reasoning: "Cultural and contextual differences limit universal generalisation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: human sciences can approach objectivity through method but cannot fully escape perspective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Objectivity is harder because the observer is part of the human phenomenon and findings are context-dependent.",
            commonErrors: ["Claiming human science methods are identical to natural science methods."],
          },
        },
        {
          id: "tok-u2-l22c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two methods used in human sciences and one limitation of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Human science methods", statement: "Experiments, surveys, interviews and observation gather data but face self-reference and context limits." },
            ],
            steps: [
              { reasoning: "Experiments or surveys can identify patterns but participants may respond to being studied.", marks: 1, markCode: "M" },
              { reasoning: "Interviews or observation give rich data but interpretation remains influenced by the researcher.", marks: 1, markCode: "M" },
              { reasoning: "Both methods produce context-bound findings that may not replicate everywhere.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: methods are useful but cannot guarantee neutral, universal knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Surveys/experiments and interviews/observation gather evidence but face self-awareness, interpretation and cultural limits.",
            commonErrors: ["Naming methods without linking them to limitations."],
          },
        },
        {
          id: "tok-u2-l22c1q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what it means for human science knowledge to be interpretive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretive knowledge", statement: "Human science claims require judgement about meaning, categories and context." },
            ],
            steps: [
              { reasoning: "Data do not speak for themselves; researchers classify and interpret behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Categories such as health, deviance or efficiency embed social values.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation is shaped by disciplinary frameworks and cultural assumptions.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: human science knowledge is argued and justified rather than simply read off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Human science knowledge is interpretive because behaviour must be classified and given meaning through judgement.",
            commonErrors: ["Assuming empirical data eliminate interpretation."],
          },
        },
        {
          id: "tok-u2-l22c1q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether human sciences can achieve knowledge comparable to natural sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing human and natural sciences", statement: "Both use empirical methods, but human sciences face self-reference and context dependence." },
            ],
            steps: [
              { reasoning: "For: human sciences use systematic observation, statistics and experiments.", marks: 1, markCode: "M" },
              { reasoning: "For: some findings, such as cognitive biases, are robust and useful.", marks: 1, markCode: "M" },
              { reasoning: "Against: replication problems and cultural variation weaken generalisability.", marks: 1, markCode: "R" },
              { reasoning: "Human behaviour cannot always be controlled or randomly assigned like natural phenomena.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: real knowledge, but probabilistic, interpretive and context-bound rather than law-like.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Human sciences produce genuine but weaker, more interpretive knowledge than natural sciences.",
            commonErrors: ["Either denying all human science knowledge or treating it as identical to natural science."],
          },
        },
        {
          id: "tok-u2-l22c1q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare objectivity in the human sciences and history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Human sciences versus history", statement: "Both are interpretive, but human sciences can generate new data while history works from surviving sources." },
            ],
            steps: [
              { reasoning: "Human sciences can observe and test present behaviour systematically.", marks: 1, markCode: "M" },
              { reasoning: "History cannot repeat the past and must interpret fragmentary sources.", marks: 1, markCode: "M" },
              { reasoning: "Both remain shaped by the knower's questions, values and frameworks.", marks: 1, markCode: "R" },
              { reasoning: "Human science offers more controlled evidence; history offers richer contextual interpretation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: objectivity is approximate in both, achieved through method and acknowledged perspective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both are interpretive; human sciences can test present behaviour, while history interprets traces of the past.",
            commonErrors: ["Claiming either discipline can be perfectly objective."],
          },
        },
        {
          id: "tok-u2-l22c1q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Assess the status of knowledge produced by the human sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Status of human science", statement: "Human sciences produce useful probabilistic knowledge that is context-dependent and revisable." },
            ],
            steps: [
              { reasoning: "They use empirical methods and statistical analysis to study behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Their findings can predict tendencies and inform policy or practice.", marks: 1, markCode: "M" },
              { reasoning: "However, self-reference, replication problems and cultural variation limit confidence.", marks: 1, markCode: "R" },
              { reasoning: "Value-laden categories mean findings are not purely neutral descriptions.", marks: 1, markCode: "R" },
              { reasoning: "Knowledge is therefore justified but provisional rather than certain.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: human sciences yield real, useful knowledge of a weaker and more interpretive kind.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Human sciences produce probabilistic, interpretive and revisable knowledge that is useful but not law-like.",
            commonErrors: ["Treating human science claims as either infallible facts or meaningless opinions."],
          },
        },
      ],
    },
    {
      id: "tok-u2-history",
      title: "History as an area of knowledge",
      skill: "Evaluate how historians produce knowledge from sources and the role of interpretation.",
      lesson: {
        sections: [
          {
            heading: "History's evidence base",
            body: "History reconstructs the past from **sources**: primary evidence (documents, artefacts, eyewitness accounts produced at the time) and secondary interpretations. Unlike science, historians cannot repeat experiments — the past is gone. All knowledge of history depends on surviving traces, which are fragmentary, biased and selected.",
          },
          {
            heading: "Interpretation is unavoidable",
            body: "Sources do not speak for themselves; historians must interpret them. Every historical account is shaped by the historian's questions, values and present context. **Historical significance** — deciding which events mattered — is a judgement, not a fact. Different historians produce different histories of the same evidence.",
          },
          {
            heading: "Objectivity in history",
            body: "History aims for objectivity but cannot fully achieve it: the historian's perspective is always present. The discipline manages this through source criticism, corroboration and acknowledging bias — not by eliminating interpretation but by making it explicit and testing it against evidence.",
          },
        ],
        keyFormulas: [
          { name: "Historical method", statement: "Sources → interpretation → narrative; interpretation is unavoidable" },
          { name: "Key limitation", statement: "The past cannot be repeated or directly observed" },
        ],
        workedExample: {
          problem: "Can two historians disagree about the same event and both be 'right'?",
          solution: "They can disagree about interpretation while agreeing on facts. One may emphasise economic causes, another political. Both interpretations can be supported by evidence — history offers argued interpretations, not single truths.",
        },
      },
      questions: [
        {
          id: "tok-u2-l22c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A primary source is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A later analysis of events" },
              { id: "b", text: "An opinion piece" },
              { id: "c", text: "Evidence produced at the time of the event" },
              { id: "d", text: "A textbook summary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary source", statement: "Evidence produced at the time of the event being studied." },
            ],
            steps: [
              { reasoning: "Primary sources are contemporary evidence; later analyses are secondary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Evidence produced at the time of the event",
            commonErrors: ["Confusing primary and secondary sources."],
          },
        },
        {
          id: "tok-u2-l22c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why historical knowledge is always interpretive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical interpretation", statement: "Sources require interpretation, which is shaped by the historian's perspective and present context." },
            ],
            steps: [
              { reasoning: "Sources do not speak for themselves — meaning must be assigned.", marks: 1, markCode: "M" },
              { reasoning: "The historian's questions, values and era shape what is noticed and emphasised.", marks: 1, markCode: "M" },
              { reasoning: "Judgements of significance are value-laden, not purely factual.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "History requires interpreting fragmentary sources through a perspective, so all historical accounts are interpretive.",
            commonErrors: ["Claiming history can be purely objective."],
          },
        },
        {
          id: "tok-u2-l22c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that history is more opinion than knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "History as knowledge", statement: "History is argued interpretation constrained by evidence — more than opinion, less than certainty." },
            ],
            steps: [
              { reasoning: "Against 'mere opinion': interpretations are tested against sources and can be supported or refuted.", marks: 1, markCode: "M" },
              { reasoning: "For caution: sources are fragmentary and biased; interpretations vary widely.", marks: 1, markCode: "M" },
              { reasoning: "History occupies a middle ground — justified interpretation, not proven fact or free opinion.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: history is genuine knowledge but of an interpretive kind, constrained by evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "History is evidence-constrained interpretation — more rigorous than opinion but not certain knowledge.",
            commonErrors: ["Either dismissing history as fiction or treating it as settled fact."],
          },
        },
        {
          id: "tok-u2-l22c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the nature of historical knowledge.",
          parts: [
            { label: "a", prompt: "Explain the difference between primary and secondary sources.", marks: 2 },
            { label: "b", prompt: "Explain two reasons why historical interpretation is unavoidable.", marks: 3 },
            { label: "c", prompt: "Evaluate whether history can achieve objectivity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical knowledge", statement: "Interpretive knowledge constrained by fragmentary sources and historian perspective." },
            ],
            steps: [
              { part: "a", reasoning: "Primary: produced at the time; secondary: later analysis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly distinguished.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sources require interpretation to yield meaning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Historians' perspectives and present concerns shape selection and emphasis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Significance judgements embed values.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Full objectivity is impossible — the historian's standpoint is always present.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But source criticism, corroboration and explicit bias-awareness approach objectivity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclusion: approximate objectivity through method, not perfect neutrality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Primary vs secondary. (b) Interpretation needed, perspective shapes, values in significance. (c) Approximate, not perfect.",
            commonErrors: ["Denying that interpretation is unavoidable in history."],
          },
        },
        {
          id: "tok-u2-l22c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of a secondary source for a historian studying a war?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A soldier's letter written during the war" },
              { id: "b", text: "A treaty signed at the time" },
              { id: "c", text: "A modern historian's book analysing the war" },
              { id: "d", text: "A photograph taken during the war" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secondary source", statement: "Evidence produced later to analyse or interpret earlier material." },
            ],
            steps: [
              { reasoning: "A modern historian's book is produced after the event for analysis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A modern historian's book analysing the war",
            commonErrors: ["Confusing primary evidence with later interpretation."],
          },
        },
        {
          id: "tok-u2-l22c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why can't historians repeat experiments on past events in the way scientists repeat experiments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because history has no evidence" },
              { id: "b", text: "Because experiments were invented after history began" },
              { id: "c", text: "Because the past cannot be directly observed or manipulated again" },
              { id: "d", text: "Because historians reject all methods" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Past as inaccessible", statement: "The past cannot be repeated or directly observed, only reconstructed from traces." },
            ],
            steps: [
              { reasoning: "Historical events are gone and cannot be experimentally rerun.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Because the past cannot be directly observed or manipulated again",
            commonErrors: ["Expecting history to use laboratory-style replication."],
          },
        },
        {
          id: "tok-u2-l22c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Judgements of 'historical significance' are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Value-laden assessments of which events mattered" },
              { id: "b", text: "Purely factual measurements" },
              { id: "c", text: "Revealed truths" },
              { id: "d", text: "Mathematical calculations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical significance", statement: "Deciding which events mattered involves evaluative judgement." },
            ],
            steps: [
              { reasoning: "Significance depends on values about what counts as important.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Value-laden assessments of which events mattered",
            commonErrors: ["Treating significance as an objective fact."],
          },
        },
        {
          id: "tok-u2-l22c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Source criticism in history mainly involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rejecting all sources equally" },
              { id: "b", text: "Accepting the oldest source automatically" },
              { id: "c", text: "Avoiding interpretation entirely" },
              { id: "d", text: "Evaluating reliability, bias and context of evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Source criticism", statement: "Historians assess sources for reliability, bias, provenance and context." },
            ],
            steps: [
              { reasoning: "Criticism tests whether sources can support claims.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Evaluating reliability, bias and context of evidence",
            commonErrors: ["Thinking criticism means rejecting evidence rather than assessing it."],
          },
        },
        {
          id: "tok-u2-l22c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why can two historians disagree about the same event yet both be partly justified?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because all interpretations are equally certain" },
              { id: "b", text: "Because history has no evidence" },
              { id: "c", text: "Because they may emphasise different causes or significance supported by sources" },
              { id: "d", text: "Because sources cannot be compared" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretive plurality", statement: "Different historians may construct different accounts from the same evidence." },
            ],
            steps: [
              { reasoning: "Interpretation allows different emphasised causes or significance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Because they may emphasise different causes or significance supported by sources",
            commonErrors: ["Assuming disagreement means one historian must be completely wrong."],
          },
        },
        {
          id: "tok-u2-l22c2q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between primary and secondary sources and why both matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primary and secondary sources", statement: "Primary sources are contemporary evidence; secondary sources interpret earlier material." },
            ],
            steps: [
              { reasoning: "Primary sources provide direct traces such as documents, artefacts or accounts.", marks: 1, markCode: "M" },
              { reasoning: "Secondary sources provide later analysis and interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Primary sources anchor claims; secondary sources help compare interpretations.", marks: 1, markCode: "R" },
              { reasoning: "Both are needed, but each requires critical assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary sources are contemporary evidence; secondary sources interpret them, and both require criticism.",
            commonErrors: ["Assuming primary sources are automatically unbiased or secondary sources useless."],
          },
        },
        {
          id: "tok-u2-l22c2q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why historical knowledge depends on surviving traces rather than direct observation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence from traces", statement: "Historians know the past only through incomplete surviving evidence." },
            ],
            steps: [
              { reasoning: "Past events cannot be observed or repeated.", marks: 1, markCode: "M" },
              { reasoning: "Documents, artefacts and records survive selectively.", marks: 1, markCode: "M" },
              { reasoning: "Gaps and biases in the record shape what can be known.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: historical knowledge is reconstructed and therefore incomplete and interpretive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "History depends on fragmentary surviving traces because the past cannot be directly observed.",
            commonErrors: ["Assuming the historical record is complete or neutral."],
          },
        },
        {
          id: "tok-u2-l22c2q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why interpretation is unavoidable in history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical interpretation", statement: "Sources must be given meaning, and meaning depends on questions, values and context." },
            ],
            steps: [
              { reasoning: "Sources do not state their own significance unambiguously.", marks: 1, markCode: "M" },
              { reasoning: "Historians choose questions and evidence to address.", marks: 1, markCode: "M" },
              { reasoning: "Their perspectives and present concerns shape interpretation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: interpretation is necessary, though it can be tested against evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "History requires interpretation because sources must be selected, contextualised and given meaning.",
            commonErrors: ["Claiming historians can report the past without interpretation."],
          },
        },
        {
          id: "tok-u2-l22c2q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how corroboration and source criticism help historians approach objectivity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Corroboration", statement: "Comparing independent sources can test whether claims are supported." },
            ],
            steps: [
              { reasoning: "Source criticism identifies bias, provenance and reliability.", marks: 1, markCode: "M" },
              { reasoning: "Corroboration checks claims against multiple independent sources.", marks: 1, markCode: "M" },
              { reasoning: "Together they reduce, but do not eliminate, distortion.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: objectivity is approached through method, not guaranteed neutrality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Criticism and corroboration test evidence and reduce bias, bringing history closer to objectivity without perfect neutrality.",
            commonErrors: ["Assuming corroboration proves every detail true."],
          },
        },
        {
          id: "tok-u2-l22c2q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that history is more opinion than knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "History as knowledge", statement: "History is evidence-constrained interpretation rather than free opinion." },
            ],
            steps: [
              { reasoning: "Against 'mere opinion': interpretations must engage surviving evidence.", marks: 1, markCode: "M" },
              { reasoning: "Claims can be supported, challenged or corrected by sources.", marks: 1, markCode: "M" },
              { reasoning: "For caution: sources are fragmentary and biased, so certainty is impossible.", marks: 1, markCode: "R" },
              { reasoning: "History sits between proven fact and unconstrained opinion.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: history is genuine but interpretive knowledge, justified rather than merely asserted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "History is more than opinion because interpretations are constrained and tested by evidence, but it remains interpretive.",
            commonErrors: ["Treating history as either fiction or settled fact."],
          },
        },
        {
          id: "tok-u2-l22c2q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the objectivity of history and the natural sciences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "History versus science", statement: "Science can test general claims experimentally; history interprets specific past events from sources." },
            ],
            steps: [
              { reasoning: "Science can repeat controlled observations and experiments.", marks: 1, markCode: "M" },
              { reasoning: "History cannot repeat the past and relies on incomplete traces.", marks: 1, markCode: "M" },
              { reasoning: "Both are shaped by questions, frameworks and values.", marks: 1, markCode: "R" },
              { reasoning: "Science aims at generalisable laws; history aims at justified accounts of particulars.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: objectivity is more achievable in science, but history can still be rigorous and evidence-based.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Science achieves stronger objectivity through repeatable tests; history achieves approximate objectivity through source criticism.",
            commonErrors: ["Claiming history is objective like science or completely subjective."],
          },
        },
        {
          id: "tok-u2-l22c2q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine the nature of historical knowledge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Historical knowledge", statement: "Historical knowledge is interpretive, evidence-constrained and revisable." },
            ],
            steps: [
              { reasoning: "It is based on primary and secondary sources rather than direct observation.", marks: 1, markCode: "M" },
              { reasoning: "Surviving evidence is fragmentary, biased and selected.", marks: 1, markCode: "M" },
              { reasoning: "Historians must interpret sources through questions, perspectives and values.", marks: 1, markCode: "R" },
              { reasoning: "Source criticism and corroboration provide methods for testing interpretations.", marks: 1, markCode: "M" },
              { reasoning: "New evidence or perspectives can revise historical accounts.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: history is genuine knowledge but of an interpretive, revisable kind.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Historical knowledge is reconstructed from fragmentary sources through interpretation, making it justified but revisable rather than certain.",
            commonErrors: ["Either dismissing history as fiction or treating interpretations as final truths."],
          },
        },
      ],
    },
  ],
};
