import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ciealepsych-u5-lesson-5-4",
  code: "5-4",
  title: "Research Methods: Ethics, Statistics and Evaluation",
  goal: "I CAN apply ethical guidelines, choose statistical tests and evaluate research quality.",
  standards: [
    "Cambridge A Level Psychology 9698",
    "Unit 5: research methods depth",
  ],
  vocabulary: [
    {
      term: "Informed consent",
      definition: "Participants voluntarily agree knowing study details.",
    },
    {
      term: "Deception",
      definition: "Withholding study purpose from participants.",
    },
    { term: "Confidentiality", definition: "Protecting participant data." },
    {
      term: "Chi-squared test",
      definition: "Non-parametric test for categorical data.",
    },
    {
      term: "Sign test",
      definition: "Non-parametric test for difference in medians.",
    },
    {
      term: "Peer review",
      definition: "Expert evaluation before publication.",
    },
  ],
  concepts: [
    {
      id: "ciealepsych-u5l4-c1-ethics",
      title: "Ethical guidelines in psychological research",
      skill: "Apply BPS ethical principles to research scenarios.",
      lesson: {
        sections: [
          {
            heading: "Core ethical principles",
            body: "**Informed consent**: participants must know purpose, procedures, right to withdraw. **Deception**: sometimes necessary but must debrief and not cause harm. **Confidentiality**: data anonymised, stored securely. **Protection from harm**: no physical/psychological distress. **Right to withdraw**: participants can leave anytime without penalty. **Debriefing**: explain true purpose after study.",
          },
          {
            heading: "Ethics in practice and evaluation",
            body: "**Milgram obedience study**: deception, distress — couldn't get valid data otherwise. **Zimbardo Stanford Prison**: severe harm, early termination needed. **Replication crisis**: publication bias, p-hacking, low power — undermines findings. Peer review imperfect — errors persist. Ethical rigor vs ecological validity tension — lab studies controlled but artificial.",
          },
        ],
        keyFormulas: [
          { name: "Consent", statement: "Voluntary agreement" },
          { name: "Debriefing", statement: "Post-study explanation" },
          { name: "Replication crisis", statement: "Reproducibility issues" },
        ],
        workedExample: {
          problem:
            "A researcher wants to study conformity but not tell participants the real aim. Ethical?",
          solution:
            "Deception permissible if no harm anticipated, debriefed afterward, consent obtained for deception or study can't be done otherwise — must weigh validity vs ethics.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Informed consent' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Researchers decide for participants" },
              { id: "b", text: "No information needed" },
              {
                id: "c",
                text: "Participants know study purpose and agree voluntarily",
              },
              { id: "d", text: "Payment only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consent", statement: "Voluntary." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Voluntary agreement",
            commonErrors: ["Deception."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'debriefing' in research?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debrief",
                statement: "Post-study explanation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Explaining true study purpose to participants after completion — especially after deception; addresses distress, provides findings, restores trust.",
            commonErrors: ["Before study."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the ethical dilemma in Milgram's obedience study.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Milgram ethics",
                statement: "Deception + distress.",
              },
            ],
            steps: [
              { reasoning: "Study aim.", marks: 1, markCode: "M" },
              { reasoning: "Ethical issues.", marks: 1, markCode: "M" },
              { reasoning: "Justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Studied obedience via deception (fake shocks) causing participant distress — justified as otherwise impossible to study obedience; but showed need for stronger safeguards, informed consent limitations.",
            commonErrors: ["No ethical issues."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the 'replication crisis' in psychology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replication crisis",
                statement: "Reproducibility.",
              },
            ],
            steps: [
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Implications.", marks: 1, markCode: "M" },
              { reasoning: "Solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Many findings fail replication — p-hacking, publication bias, low power, HARKing; undermines confidence — solutions: pre-registration, open data, larger samples, replication studies.",
            commonErrors: ["No problem."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the tension between internal validity and ecological validity in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Validity trade-off",
                statement: "Control vs realism.",
              },
            ],
            steps: [
              { reasoning: "Internal validity.", marks: 1, markCode: "M" },
              { reasoning: "Ecological validity.", marks: 1, markCode: "M" },
              { reasoning: "Trade-off.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lab experiments high internal validity but low ecological validity; field studies reverse — cannot maximise both; need multiple methods (triangulation) for robust conclusions.",
            commonErrors: ["Both achievable."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'confidentiality' in research?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confidentiality",
                statement: "Data protection.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Implementation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Protecting participant identity and data — anonymise, secure storage, don't disclose identifiable info; ethical and legal requirement (GDPR).",
            commonErrors: ["Public data."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which study involved participants playing 'guards' and 'prisoners'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Milgram's obedience study" },
              { id: "b", text: "Zimbardo's Stanford Prison Experiment" },
              { id: "c", text: "Asch conformity" },
              { id: "d", text: "Bandura Bobo doll" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Stanford Prison", statement: "Zimbardo." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Zimbardo",
            commonErrors: ["Wrong study."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why deception might be ethically justified.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Deception justification",
                statement: "Validity + necessity.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. prevents demand characteristics (participants knowing aim changes behaviour) and some phenomena can't be studied otherwise (e.g. conformity) — if no harm and debriefed.",
            commonErrors: ["Never justified."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 'publication bias' and why is it a problem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pub bias",
                statement: "Positive results only.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Problem.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Only significant/positive results published — null results hidden; distorts literature, overestimates effects, undermines meta-analyses and replication.",
            commonErrors: ["All published."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of 'peer review' in ensuring research quality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peer review",
                statement: "Quality control.",
              },
            ],
            steps: [
              { reasoning: "Function.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Filters poor research, ensures standards — but imperfect: reviewers may miss errors, bias toward positive results, replication failures published anyway; necessary but insufficient alone.",
            commonErrors: ["Perfect filter."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ethical principle requires that participant data be anonymised and protected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deception" },
              { id: "b", text: "Confidentiality" },
              { id: "c", text: "Debriefing" },
              { id: "d", text: "Demand characteristics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Confidentiality",
                statement: "Data protection.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Confidentiality",
            commonErrors: ["Wrong principle."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Zimbardo's Stanford Prison Experiment was terminated after approximately how many days?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Stanford Prison",
                statement: "Stopped at day 6.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The study, planned for two weeks, was stopped after about 6 days due to severe participant distress and abuse.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6",
            commonErrors: ["Ran full duration."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Milgram's obedience study, the fake shock generator was labelled up to what maximum voltage (volts)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 450 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Milgram",
                statement: "450V max label.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Milgram's shock generator was marked from 15V to a maximum label of 450 volts (no actual shocks were given).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "450",
            commonErrors: ["Real shocks administered."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'right to withdraw' means participants can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Publish the results" },
              { id: "b", text: "Change the study design" },
              { id: "c", text: "Be paid more to stay" },
              {
                id: "d",
                text: "Leave the study at any time without penalty",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Withdraw",
                statement: "Leave anytime.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Leave anytime",
            commonErrors: ["Forced participation."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might informed consent be impossible in some psychological studies?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Knowing the true aim changes participants' behaviour (demand characteristics)",
              },
              { id: "b", text: "Consent forms are always illegal" },
              { id: "c", text: "Participants never read information sheets" },
              { id: "d", text: "All studies require deception" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consent limits",
                statement: "Demand characteristics.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Behaviour would change",
            commonErrors: ["Consent always possible."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the ethical issues raised by using deception in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deception ethics",
                statement: "Validity vs trust.",
              },
            ],
            steps: [
              { reasoning: "Why used.", marks: 1, markCode: "M" },
              { reasoning: "Ethical risks.", marks: 1, markCode: "M" },
              { reasoning: "Justifications.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deception prevents demand characteristics and enables study of conformity/obedience — but violates informed consent, may cause distress and erode trust; acceptable only if no harm anticipated, debriefed fully, and no alternative method exists.",
            commonErrors: ["Never justified."],
          },
        },
      ],
    },
    {
      id: "ciealepsych-u5l4-c2-statistics",
      title: "Statistical tests: choosing and interpreting",
      skill: "Select appropriate statistical tests and interpret results.",
      lesson: {
        sections: [
          {
            heading: "Parametric vs non-parametric",
            body: "**Parametric** (t-test, Pearson's): require interval data, normal distribution, equal variance. **Non-parametric** (chi-squared, sign test, Wilcoxon): work with ordinal/categorical data, no distribution assumptions — more conservative, less powerful. Choose based on data type and design.",
          },
          {
            heading: "Key tests and interpretation",
            body: "**Chi-squared**: categorical data, tests association/difference between observed and expected. **Sign test**: ordinal data, difference between two conditions — counts direction of differences. **Interpretation**: compare calculated value to critical value at chosen significance level (p<0.05); if calculated > critical → reject null hypothesis.",
          },
        ],
        keyFormulas: [
          { name: "Parametric", statement: "Normal + interval" },
          { name: "Chi-squared", statement: "Categorical data" },
          { name: "Sign test", statement: "Ordinal + difference" },
        ],
        workedExample: {
          problem: "Which test for nominal data comparing two groups?",
          solution:
            "Chi-squared — categorical data, tests if distribution differs between groups; calculates observed vs expected frequencies.",
        },
      },
      questions: [
        {
          id: "ciealepsych-q-u5l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The chi-squared test is used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continuous data" },
              { id: "b", text: "Ratio data only" },
              { id: "c", text: "Categorical/nominal data" },
              { id: "d", text: "Correlation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Chi-squared", statement: "Categorical." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Categorical",
            commonErrors: ["Parametric test."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'sign test' used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sign test",
                statement: "Ordinal + difference.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Non-parametric test for ordinal data — compares two conditions, counts how many participants score higher/lower; tests if difference is significant.",
            commonErrors: ["Correlation test."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when to use parametric versus non-parametric tests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Param vs non-param",
                statement: "Data requirements.",
              },
            ],
            steps: [
              { reasoning: "Parametric needs.", marks: 1, markCode: "M" },
              { reasoning: "Non-parametric use.", marks: 1, markCode: "M" },
              { reasoning: "Decision.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Parametric (t-test, Pearson's): interval/ratio data, normal distribution. Non-parametric (chi-squared, sign test): ordinal/categorical data, no distribution assumptions — choose based on data type.",
            commonErrors: ["Any test works."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to interpret a statistical test result at p<0.05.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "p-value",
                statement: "Significance.",
              },
            ],
            steps: [
              { reasoning: "p<0.05 meaning.", marks: 1, markCode: "M" },
              { reasoning: "Reject null.", marks: 1, markCode: "M" },
              { reasoning: "Type I error.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "p<0.05 means <5% chance result due to chance — reject null hypothesis, accept alternative; 5% risk of Type I error (false positive); statistical significance ≠ practical importance.",
            commonErrors: ["p<0.5."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the limitations of relying solely on p-values in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "p-value limits",
                statement: "Significance vs importance.",
              },
            ],
            steps: [
              { reasoning: "P-hacking.", marks: 1, markCode: "M" },
              { reasoning: "Effect size.", marks: 1, markCode: "M" },
              { reasoning: "Publication bias.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "P-values don't measure effect size or practical importance; incentivise p-hacking (trying analyses until significant); publication bias amplifies — need effect sizes, confidence intervals, pre-registration.",
            commonErrors: ["P-value sufficient."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'parametric' mean in statistics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parametric",
                statement: "Distribution assumptions.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tests assuming normal distribution and interval/ratio data — e.g. t-test, Pearson's correlation; more powerful but stricter requirements.",
            commonErrors: ["Any data."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A researcher has ordinal data comparing two conditions. Best test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chi-squared" },
              { id: "b", text: "t-test" },
              { id: "c", text: "Pearson's" },
              { id: "d", text: "Sign test" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Sign test",
                statement: "Ordinal + difference.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sign test",
            commonErrors: ["Parametric."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 'Type I error' in hypothesis testing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Type I",
                statement: "False positive.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "vs Type II.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rejecting null when it's actually true — false positive; risk set by significance level (p<0.05 = 5% Type I risk); Type II is missing a real effect.",
            commonErrors: ["Type II."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons non-parametric tests might be preferred.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Non-param advantages",
                statement: "Flexible + robust.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. no distribution assumptions (works with skewed data) and suitable for ordinal/categorical data — but less powerful than parametric when assumptions met.",
            commonErrors: ["Always better."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of 'effect size' alongside p-values in reporting research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Effect size",
                statement: "Practical importance.",
              },
            ],
            steps: [
              { reasoning: "P-value limit.", marks: 1, markCode: "M" },
              { reasoning: "Effect size role.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "P-value shows statistical significance but not magnitude; effect size quantifies practical importance — both needed for meaningful interpretation; modern journals require effect sizes.",
            commonErrors: ["P-value enough."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A t-test is most appropriate for which type of data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ordinal data" },
              { id: "b", text: "Any data type" },
              { id: "c", text: "Nominal data only" },
              {
                id: "d",
                text: "Interval/ratio data from a normally distributed population",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "t-test",
                statement: "Parametric requirements.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Interval/ratio + normal",
            commonErrors: ["Any data."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the conventional significance level used in psychological research (as a p value)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Significance level",
                statement: "p<0.05.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The conventional threshold is p < 0.05, meaning less than a 5% chance the result occurred by chance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "0.05",
            commonErrors: ["p<0.5 or p<0.5%."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Testing at p<0.05 means the maximum probability of a Type I error is what percentage?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Type I risk",
                statement: "5% at p<0.05.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A significance level of 0.05 sets the Type I error rate at 5% — a 1 in 20 chance of rejecting a true null.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["50% or 95%."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the calculated chi-squared value exceeds the critical value at the chosen significance level, researchers should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reject the null hypothesis" },
              { id: "b", text: "Repeat the study exactly" },
              { id: "c", text: "Change the data" },
              { id: "d", text: "Accept the null hypothesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Critical value",
                statement: "Calculated > critical → reject.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Reject null",
            commonErrors: ["Accept null."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which scenario BEST justifies choosing a non-parametric test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interval data meeting all parametric assumptions" },
              { id: "b", text: "Large sample with normally distributed ratio data" },
              {
                id: "c",
                text: "Small sample with skewed ordinal data",
              },
              { id: "d", text: "Any dataset regardless of type" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-param choice",
                statement: "Violated assumptions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Skewed ordinal data",
            commonErrors: ["Parametric data."],
          },
        },
        {
          id: "ciealepsych-q-u5l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of statistical significance testing in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Significance testing",
                statement: "Strengths + limits.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Provides objective decision rule about chance — but arbitrary 0.05 cutoff, ignores effect size and practical importance, incentivises p-hacking and publication bias; should be combined with effect sizes and confidence intervals.",
            commonErrors: ["Significance = importance."],
          },
        },
      ],
    },
  ],
};
