import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "psych-u1-lesson-1-2",
  code: "1-2",
  title: "Ethics, Data Analysis and Inferential Tests",
  goal: "I CAN describe ethical guidelines for psychological research, summarise data and choose basic inferential tests appropriately.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Informed consent", definition: "Participants voluntarily agree after being told the study's purpose, procedures and risks." },
    { term: "Deception", definition: "Withholding or misleading participants about the true aims of a study." },
    { term: "Debriefing", definition: "Explaining the study's true purpose to participants after data collection, especially after deception." },
    { term: "Level of measurement", definition: "Nominal, ordinal, interval or ratio — determines which statistics apply." },
    { term: "Significance level", definition: "The probability threshold (p < 0.05) below which a result is deemed unlikely by chance." },
    { term: "Parametric test", definition: "Inferential test requiring interval/ratio data and normally distributed populations." },
  ],
  concepts: [
    {
      id: "psych-u1-ethics",
      title: "Ethical guidelines in psychological research",
      skill: "Describe and apply the main ethical principles: consent, deception, debriefing, protection from harm, confidentiality and withdrawal.",
      lesson: {
        sections: [
          {
            heading: "Consent, deception and debriefing",
            body: "Psychologists must obtain **informed consent** — participants agree voluntarily after understanding the study. When full disclosure would invalidate results, **deception** may be justified only if no significant harm is likely and participants are **debriefed** afterwards, told the true aims and given the right to withdraw their data. Deception without debriefing is unethical.",
          },
          {
            heading: "Protection, confidentiality and withdrawal",
            body: "Participants must be protected from **physical or psychological harm** exceeding everyday risks. **Confidentiality** means data are anonymised and stored securely; results are reported in group form. Participants have the **right to withdraw** at any time without penalty, and their data must be deleted on request. Researchers with power imbalances (e.g. teacher–student) must guard against **coercion**.",
          },
          {
            heading: "Ethical review",
            body: "Institutions require **ethics committee approval** before research involving humans begins. Committees weigh scientific value against potential harm, check consent procedures and may demand changes. Even approved studies can raise ethical questions during execution — researchers remain responsible throughout.",
          },
        ],
        keyFormulas: [
          { name: "Core ethical principles", statement: "Consent + no harm + confidentiality + right to withdraw + debriefing" },
          { name: "Deception rule", statement: "Allowed only if necessary, harmless and followed by full debriefing" },
        ],
        workedExample: {
          problem: "A study secretly films shoppers to observe behaviour without consent. Evaluate ethically.",
          solution: "This violates informed consent and privacy. Filming without consent in a public space may be tolerated in some jurisdictions, but psychological research standards require consent or a strong justification plus debriefing and confidentiality. Participants who feel harmed must be able to withdraw their data.",
        },
      },
      questions: [
        {
          id: "psych-u1-etq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Debriefing is required especially when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sample size is large" },
              { id: "b", text: "Participants were deceived about the study" },
              { id: "c", text: "Data are analysed statistically" },
              { id: "d", text: "The study is correlational" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Debriefing", statement: "Post-study explanation of true aims, required after deception." },
            ],
            steps: [
              { reasoning: "Debriefing restores informed consent after deception.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** After deception",
            commonErrors: ["Thinking debriefing is only about thanking participants."],
          },
        },
        {
          id: "psych-u1-etq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ethical issues a psychologist must consider when studying children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Research with children", statement: "Parental consent, comprehension limits, vulnerability to harm and coercion." },
            ],
            steps: [
              { reasoning: "Consent: children may not fully understand the study — parental consent is needed plus age-appropriate assent.", marks: 1, markCode: "M" },
              { reasoning: "Vulnerability: children may find tasks distressing (e.g. failure experiences) — harm must be minimised.", marks: 1, markCode: "M" },
              { reasoning: "Coercion: authority figures (teachers) selecting children can undermine voluntariness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parental consent, limited comprehension, vulnerability to distress and coercion.",
            commonErrors: ["Applying adult consent procedures directly to children."],
          },
        },
        {
          id: "psych-u1-etq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why deception is sometimes considered acceptable in psychological research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justified deception", statement: "Deception may be necessary to avoid demand characteristics; acceptable only with safeguards." },
            ],
            steps: [
              { reasoning: "If participants know the true aim, they may change behaviour (demand characteristics), invalidating results.", marks: 1, markCode: "M" },
              { reasoning: "Deception can therefore be the only way to study genuine, spontaneous behaviour — e.g. obedience or bystander research.", marks: 1, markCode: "M" },
              { reasoning: "Acceptable conditions: no significant harm likely, deception is not about sensitive personal topics.", marks: 1, markCode: "R" },
              { reasoning: "Safeguards: full debriefing afterwards and the right to withdraw data preserve respect for participants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deception preserves validity when necessary, provided harm is unlikely and debriefing follows.",
            commonErrors: ["Claiming deception is always unethical — IB accepts it with justification."],
          },
        },
        {
          id: "psych-u1-etq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A psychologist plans to study whether social media use causes anxiety in teenagers.",
          parts: [
            { label: "a", prompt: "Identify two ethical problems specific to this study.", marks: 2 },
            { label: "b", prompt: "Explain how informed consent and confidentiality should be handled.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the study can be conducted ethically at all.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ethical risk assessment", statement: "Vulnerable participants, sensitive topic and privacy demands require careful safeguards." },
            ],
            steps: [
              { part: "a", reasoning: "Teenagers are a vulnerable group — consent must come from parents plus the teens' own assent.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Anxiety is sensitive — discussing it may itself cause distress.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Participants must be told the true purpose, procedures, risks and right to withdraw before starting.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Data must be anonymised, securely stored and reported only in aggregate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A debrief with signposting to support services should follow any distressing task.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It can be ethical if risks are minimised: no manipulation of social media use itself.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "A correlational design measuring existing use avoids harm from manipulation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethics committee approval and parental consent make the study feasible — judgement: yes, with safeguards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Vulnerability + sensitivity. (b) Consent, anonymisation, debrief. (c) Yes, if correlational and safeguarded.",
            commonErrors: ["Ignoring the dual consent requirement for minors."],
          },
        },
        {
          id: "psych-u1-etq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Informed consent requires that participants:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agree voluntarily after understanding the study's purpose and procedures" },
              { id: "b", text: "Be paid a large amount of money" },
              { id: "c", text: "Sign a form without reading it" },
              { id: "d", text: "Remain in the study even if they feel uncomfortable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informed consent", statement: "Voluntary agreement after adequate information about purpose, procedures and risks." },
            ],
            steps: [
              { reasoning: "Consent must be voluntary and based on sufficient understanding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Voluntary agreement after understanding the study",
            commonErrors: ["Thinking consent is just a signature rather than comprehension plus voluntariness."],
          },
        },
        {
          id: "psych-u1-etq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The right to withdraw means participants can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leave the study at any time without penalty" },
              { id: "b", text: "Change the results after seeing them" },
              { id: "c", text: "Only withdraw before the study begins" },
              { id: "d", text: "Demand to know other participants' data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Right to withdraw", statement: "Participants may stop taking part at any stage without disadvantage." },
            ],
            steps: [
              { reasoning: "Withdrawal protects voluntariness and must be available throughout the study.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Leave at any time without penalty",
            commonErrors: ["Limiting withdrawal to the start of a study."],
          },
        },
        {
          id: "psych-u1-etq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Maintaining confidentiality in psychological research means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Publishing every participant's raw data" },
              { id: "b", text: "Protecting participants' identities and storing data securely" },
              { id: "c", text: "Never reporting any results" },
              { id: "d", text: "Sharing data freely with other researchers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Confidentiality", statement: "Identities are protected through anonymisation, secure storage and aggregate reporting." },
            ],
            steps: [
              { reasoning: "Confidentiality protects privacy while still allowing research to proceed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Protect identities and store data securely",
            commonErrors: ["Confusing confidentiality with secrecy that prevents all publication."],
          },
        },
        {
          id: "psych-u1-etq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Deception may be ethically justified in psychological research when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the study more interesting to participants" },
              { id: "b", text: "It is necessary to avoid demand characteristics, unlikely to cause harm and followed by debriefing" },
              { id: "c", text: "The researcher wants to test obedience" },
              { id: "d", text: "Participants are adults" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Justified deception", statement: "Deception requires necessity, low risk of harm and full debriefing." },
            ],
            steps: [
              { reasoning: "Deception is acceptable only under strict safeguards, not merely because it is convenient.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Necessary, harmless and debriefed",
            commonErrors: ["Thinking deception is automatically unethical or automatically acceptable."],
          },
        },
        {
          id: "psych-u1-etq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The main role of an institutional ethics committee is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analyse the statistical results of studies" },
              { id: "b", text: "Review proposed research for ethical acceptability before it begins" },
              { id: "c", text: "Publish findings in academic journals" },
              { id: "d", text: "Recruit participants for studies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ethical review", statement: "Committees weigh scientific value against risks and may require changes." },
            ],
            steps: [
              { reasoning: "Ethics committees assess consent, harm, confidentiality and overall acceptability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Review research for ethical acceptability",
            commonErrors: ["Thinking ethics approval is only a formality with no real scrutiny."],
          },
        },
        {
          id: "psych-u1-etq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A study uses deception but provides no debriefing afterwards. The most serious ethical breach is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Failure to restore participants' informed consent and trust" },
              { id: "b", text: "Using too small a sample" },
              { id: "c", text: "Collecting quantitative data" },
              { id: "d", text: "Publishing the results" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Debriefing", statement: "After deception, participants must be told the true aims and given the right to withdraw data." },
            ],
            steps: [
              { reasoning: "Without debriefing, participants are left deceived and cannot make an informed choice about their data.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Failure to restore informed consent",
            commonErrors: ["Focusing on sample size instead of the consent breach."],
          },
        },
        {
          id: "psych-u1-etq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two ethical safeguards a psychologist should use when researching adolescents.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Research with minors", statement: "Parental consent, adolescent assent, confidentiality and minimal harm are required." },
            ],
            steps: [
              { reasoning: "Obtain parental consent plus the adolescent's own assent where appropriate.", marks: 1, markCode: "M" },
              { reasoning: "Ensure questions are age-appropriate and avoid unnecessarily sensitive topics.", marks: 1, markCode: "M" },
              { reasoning: "Protect confidentiality and explain clearly that participation is voluntary.", marks: 1, markCode: "A" },
              { reasoning: "Provide debriefing and the right to withdraw data if any distress occurs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parental consent/assent, age-appropriate tasks, confidentiality and right to withdraw.",
            commonErrors: ["Treating adolescents as fully autonomous adults or as incapable of any input."],
          },
        },
        {
          id: "psych-u1-etq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how a psychologist can maintain confidentiality when collecting sensitive data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Data protection", statement: "Anonymisation, secure storage and aggregate reporting protect identity." },
            ],
            steps: [
              { reasoning: "Use participant codes or anonymous IDs rather than names on data sheets.", marks: 1, markCode: "M" },
              { reasoning: "Store identifiable information separately from responses and limit access to researchers.", marks: 1, markCode: "M" },
              { reasoning: "Report results only in group form so individuals cannot be recognised.", marks: 1, markCode: "A" },
              { reasoning: "Explain any limits to confidentiality, such as risk of harm, before data collection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anonymise data, store securely, report in aggregate and explain confidentiality limits.",
            commonErrors: ["Assuming anonymisation means no data protection is needed at all."],
          },
        },
        {
          id: "psych-u1-etq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A researcher wants to induce anxiety in students to study exam performance. Evaluate whether this can be done ethically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Harm and consent", statement: "Research must not expose participants to harm beyond everyday risks and must respect consent." },
            ],
            steps: [
              { reasoning: "Inducing anxiety may cause psychological distress, especially in students already anxious about exams.", marks: 1, markCode: "R" },
              { reasoning: "Informed consent may be compromised if students do not know they will be stressed.", marks: 1, markCode: "M" },
              { reasoning: "Deception about the stress induction would require strong justification plus full debriefing.", marks: 1, markCode: "M" },
              { reasoning: "A correlational study of naturally occurring anxiety and performance avoids manipulation harm.", marks: 1, markCode: "A" },
              { reasoning: "If manipulation is used, anxiety must be mild, monitored and followed by debriefing with support signposting.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: possible only with strict safeguards; a non-manipulative design is safer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethical only if distress is minimal and consent/debrief safeguards are strong; correlational design is safer.",
            commonErrors: ["Assuming mild stress is automatically harmless for all participants."],
          },
        },
        {
          id: "psych-u1-etq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A psychologist plans to film children in a playground without telling them or their parents, arguing the setting is public. Evaluate this plan ethically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consent and privacy", statement: "Public settings do not remove the need for consent and protection of privacy in research." },
            ],
            steps: [
              { reasoning: "Children are a vulnerable group and cannot fully understand or consent to being filmed.", marks: 1, markCode: "R" },
              { reasoning: "Parental consent is normally required even when behaviour occurs in a public place.", marks: 1, markCode: "M" },
              { reasoning: "Filming may capture identifiable images or private moments, breaching confidentiality.", marks: 1, markCode: "M" },
              { reasoning: "Children cannot be debriefed retrospectively in the same way as adults if they are unaware of the study.", marks: 1, markCode: "R" },
              { reasoning: "The scientific value of covert filming does not automatically outweigh privacy and consent concerns.", marks: 1, markCode: "R" },
              { reasoning: "A better approach is overt observation with consent or anonymised coding that cannot identify children.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unethical without consent; public location does not justify covert filming of children.",
            commonErrors: ["Arguing public space equals permission for psychological research."],
          },
        },
        {
          id: "psych-u1-etq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Sixty participants begin a study and 15% withdraw before completion. Calculate how many participants remain.",
          response: { type: "numeric", parts: [{ label: "Participants remaining", answer: 51 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Withdrawal calculation", statement: "Remaining = starting number - (starting number x withdrawal percentage / 100)" },
            ],
            steps: [
              { reasoning: "Calculate the number who withdraw: 15% of 60.", working: "60 x 0.15", marks: 1, markCode: "M" },
              { reasoning: "Remaining participants = 60 - 9 = 51.", working: "51", marks: 1, markCode: "A" },
            ],
            finalAnswer: "51 participants",
            commonErrors: ["Reporting 9 withdrawals as the number remaining."],
          },
        },
        {
          id: "psych-u1-etq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An ethics committee reviews 80 applications; 62 are approved. Calculate the percentage approved, the number not approved, and the percentage not approved.",
          response: {
            type: "numeric",
            parts: [
              { label: "Approved percentage", answer: 77.5, unit: "%" },
              { label: "Not approved", answer: 18 },
              { label: "Not approved percentage", answer: 22.5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage calculation", statement: "Percentage = part / total x 100" },
            ],
            steps: [
              { reasoning: "Approved percentage = 62 / 80 x 100.", working: "77.5", marks: 1, markCode: "M" },
              { reasoning: "Not approved = 80 - 62 = 18.", working: "18", marks: 1, markCode: "M" },
              { reasoning: "Not approved percentage = 18 / 80 x 100 = 22.5.", working: "22.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "77.5% approved, 18 not approved, 22.5% not approved",
            commonErrors: ["Using 62 as the number not approved instead of 18."],
          },
        },
      ],
    },
    {
      id: "psych-u1-data-analysis",
      title: "Data analysis and inferential tests",
      skill: "Summarise data using measures of central tendency and dispersion, and select appropriate inferential tests by level of measurement.",
      lesson: {
        sections: [
          {
            heading: "Levels of measurement",
            body: "Data are classified as **nominal** (categories, e.g. gender), **ordinal** (ranked, e.g. place in race), **interval** (equal intervals, no true zero, e.g. temperature) or **ratio** (true zero, e.g. reaction time). The level of measurement determines which descriptive and inferential statistics are valid — ordinal data cannot use means.",
          },
          {
            heading: "Descriptive statistics",
            body: "**Measures of central tendency**: mean (most sensitive, affected by outliers), median (middle value, robust), mode (most frequent, works for nominal data). **Measures of dispersion**: range (max − min, crude), standard deviation and variance (average deviation from mean). A small standard deviation means scores cluster tightly around the mean.",
          },
          {
            heading: "Inferential tests at SL",
            body: "Inferential tests decide whether results could occur by chance, compared against a **significance level** (p < 0.05). **Parametric** tests (e.g. related/independent t-test) require interval/ratio data and normal distributions; **non-parametric** tests (e.g. Wilcoxon signed-rank, Mann-Whitney U) work with ordinal data or small samples. At SL, know when each type is appropriate rather than computing test statistics.",
          },
        ],
        keyFormulas: [
          { name: "Central tendency", statement: "Mean = sum/n; median = middle value; mode = most frequent" },
          { name: "Dispersion", statement: "Range = max − min; SD measures average spread around the mean" },
          { name: "Test choice", statement: "Parametric: interval/ratio + normal; Non-parametric: ordinal/small samples" },
        ],
        workedExample: {
          problem: "Reaction times (in ms) are: 210, 240, 195, 380, 220. Which measure of central tendency is most appropriate?",
          solution: "The value 380 is an outlier that inflates the mean. The median (220 ms) is more representative; the mode is unavailable. Report median with interquartile range for robust description.",
        },
      },
      questions: [
        {
          id: "psych-u1-daq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which measure of central tendency is most affected by extreme outliers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Median" },
              { id: "b", text: "Mode" },
              { id: "c", text: "Mean" },
              { id: "d", text: "Range" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mean", statement: "Sum of all scores divided by n; sensitive to extreme values." },
            ],
            steps: [
              { reasoning: "The mean uses every score, so outliers pull it strongly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Mean",
            commonErrors: ["Confusing range (a dispersion measure) with central tendency."],
          },
        },
        {
          id: "psych-u1-daq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between nominal and ordinal levels of measurement, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Levels of measurement", statement: "Nominal = categories; ordinal = ranked categories." },
            ],
            steps: [
              { reasoning: "Nominal data are categories with no order, e.g. eye colour or favourite sport.", marks: 1, markCode: "M" },
              { reasoning: "Ordinal data have a meaningful order but unequal intervals, e.g. finishing position or Likert scale ratings.", marks: 1, markCode: "M" },
              { reasoning: "Correct example given for each level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nominal = unordered categories; ordinal = ordered ranks.",
            commonErrors: ["Treating Likert scales as interval data without justification."],
          },
        },
        {
          id: "psych-u1-daq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the significance level (p < 0.05) is used to interpret inferential test results.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Significance testing", statement: "p < 0.05 means the result would occur by chance less than 5% of the time — deemed statistically significant." },
            ],
            steps: [
              { reasoning: "The null hypothesis assumes no effect; the test calculates the probability (p) of the observed result under the null.", marks: 1, markCode: "M" },
              { reasoning: "If p < 0.05, the result is unlikely by chance, so the null is rejected — a significant effect.", marks: 1, markCode: "M" },
              { reasoning: "If p > 0.05, the null is retained — insufficient evidence of an effect, not proof of none.", marks: 1, markCode: "R" },
              { reasoning: "Significance does not measure effect size — a tiny effect can be significant with a large sample.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "p < 0.05 = reject null; result unlikely by chance, but significance ≠ importance.",
            commonErrors: ["Interpreting p > 0.05 as 'no effect exists'."],
          },
        },
        {
          id: "psych-u1-daq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A researcher compares memory scores (interval data, normally distributed) between a mnemonic group and a control group.",
          parts: [
            { label: "a", prompt: "Identify two descriptive statistics appropriate for summarising each group's scores.", marks: 2 },
            { label: "b", prompt: "Explain which type of inferential test is appropriate and why.", marks: 3 },
            { label: "c", prompt: "Evaluate the limitations of relying only on statistical significance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Analysis choice", statement: "Interval/ratio data with normal distribution → parametric tests; significance must be interpreted with effect size." },
            ],
            steps: [
              { part: "a", reasoning: "Mean for central tendency (interval data, roughly symmetric).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Standard deviation for dispersion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent groups t-test is appropriate — comparing means of two independent samples.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Parametric because data are interval-level and normally distributed, giving more statistical power.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A non-parametric alternative (Mann-Whitney U) would be chosen if data were ordinal or non-normal.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Significance only indicates the result is unlikely by chance — it says nothing about how large the effect is.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Large samples can make trivial differences significant; small samples can miss real effects (Type II error).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Effect size and confidence intervals should accompany the p-value for meaningful interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mean + SD. (b) Independent t-test (parametric). (c) Significance ≠ importance; use effect size.",
            commonErrors: ["Choosing a parametric test for ordinal or skewed data."],
          },
        },
        {
          id: "psych-u1-daq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which variable is measured at the nominal level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finishing position in a race" },
              { id: "b", text: "Eye colour" },
              { id: "c", text: "Reaction time in milliseconds" },
              { id: "d", text: "Temperature in degrees Celsius" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nominal data", statement: "Categories with no meaningful order between them." },
            ],
            steps: [
              { reasoning: "Eye colour is a set of unordered categories.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Eye colour",
            commonErrors: ["Choosing reaction time — it has equal intervals and a meaningful zero direction, so it is ratio data."],
          },
        },
        {
          id: "psych-u1-daq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is an example of ordinal data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of correct answers out of 20" },
              { id: "b", text: "Finishing position in a race" },
              { id: "c", text: "Height in centimetres" },
              { id: "d", text: "Favourite colour category" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ordinal data", statement: "Ranked categories where order matters but intervals may be unequal." },
            ],
            steps: [
              { reasoning: "Finishing positions are ordered from first to last but do not guarantee equal time gaps.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Finishing position in a race",
            commonErrors: ["Treating ranked positions as interval data just because numbers are used."],
          },
        },
        {
          id: "psych-u1-daq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For nominal data such as favourite sports, the only appropriate measure of central tendency is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean" },
              { id: "b", text: "Median" },
              { id: "c", text: "Mode" },
              { id: "d", text: "Standard deviation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nominal statistics", statement: "Only the mode is meaningful for unordered categories." },
            ],
            steps: [
              { reasoning: "Nominal categories cannot be averaged or ordered, so mean and median are invalid.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Mode",
            commonErrors: ["Calculating a mean for categories — it has no statistical meaning."],
          },
        },
        {
          id: "psych-u1-daq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A parametric inferential test is most appropriate when the data are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ordinal and heavily skewed" },
              { id: "b", text: "Interval or ratio and approximately normally distributed" },
              { id: "c", text: "Nominal categories" },
              { id: "d", text: "Based on very small samples regardless of distribution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parametric assumptions", statement: "Parametric tests require interval/ratio data and roughly normal distributions." },
            ],
            steps: [
              { reasoning: "Parametric tests assume meaningful intervals and normality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Interval/ratio and approximately normal",
            commonErrors: ["Using parametric tests for ordinal or skewed data."],
          },
        },
        {
          id: "psych-u1-daq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "Describe how to find the median of a data set containing an odd number of scores and an even number of scores.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Median", statement: "Order scores first; odd n gives the middle value, even n gives the mean of the two middle values." },
            ],
            steps: [
              { reasoning: "Arrange all scores in ascending order before locating the middle.", marks: 1, markCode: "M" },
              { reasoning: "For an odd number of scores, the median is the single middle value.", marks: 1, markCode: "M" },
              { reasoning: "For an even number of scores, average the two middle values.", marks: 1, markCode: "A" },
              { reasoning: "Example: for 3, 7, 9 the median is 7; for 3, 7, 9, 12 it is (7 + 9) / 2 = 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Order data; odd n = middle score; even n = mean of two middle scores.",
            commonErrors: ["Finding the middle without ordering the data first."],
          },
        },
        {
          id: "psych-u1-daq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Reaction times are usually analysed with the median rather than the mean. Explain why this is often preferable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Robust statistics", statement: "The median is less distorted by extreme scores than the mean." },
            ],
            steps: [
              { reasoning: "Reaction time data often contain occasional very slow responses caused by distraction or lapses.", marks: 1, markCode: "M" },
              { reasoning: "The mean uses every score, so one extreme value can pull it upward.", marks: 1, markCode: "M" },
              { reasoning: "The median depends only on the middle position and is therefore robust to outliers.", marks: 1, markCode: "R" },
              { reasoning: "Reporting median with a robust dispersion measure gives a more representative summary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The median resists outliers, so it better represents typical reaction time.",
            commonErrors: ["Saying the median is always better — for symmetric interval data the mean may be preferred."],
          },
        },
        {
          id: "psych-u1-daq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Compare the use of the mean and median for describing a strongly skewed data set, and explain which measure of dispersion should accompany each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Central tendency in skew", statement: "The mean is sensitive to outliers; the median is robust. SD suits symmetric data; IQR or range suits skewed data." },
            ],
            steps: [
              { reasoning: "In skewed data, extreme high or low scores distort the mean away from the typical value.", marks: 1, markCode: "M" },
              { reasoning: "The median remains at the middle position and is less affected by outliers.", marks: 1, markCode: "A" },
              { reasoning: "The standard deviation is also sensitive to extreme values, so it may misrepresent spread in skewed data.", marks: 1, markCode: "R" },
              { reasoning: "The interquartile range focuses on the middle 50% and is more robust for skewed distributions.", marks: 1, markCode: "M" },
              { reasoning: "The range is simple but can be distorted by a single extreme score.", marks: 1, markCode: "A" },
              { reasoning: "For skewed data, median with IQR is usually the clearest summary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Skewed data: median + IQR; symmetric interval data: mean + SD.",
            commonErrors: ["Pairing the median with standard deviation without justification."],
          },
        },
        {
          id: "psych-u1-daq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A researcher reports only the mean income for a sample that is strongly positively skewed by a few very high incomes. Evaluate this choice of statistic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Descriptive choice", statement: "The statistic must represent the typical case and describe spread honestly." },
            ],
            steps: [
              { reasoning: "Positive skew means most incomes are below the mean and a few very high incomes pull the mean upward.", marks: 1, markCode: "M" },
              { reasoning: "The mean therefore overstates the typical income for most participants.", marks: 1, markCode: "R" },
              { reasoning: "The median would better represent the middle participant in this distribution.", marks: 1, markCode: "A" },
              { reasoning: "A measure such as the interquartile range would describe spread without being dominated by extremes.", marks: 1, markCode: "M" },
              { reasoning: "Reporting only the mean hides the skew and gives an incomplete picture.", marks: 1, markCode: "R" },
              { reasoning: "A histogram or additional percentiles would make the distribution clearer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The mean is misleading under positive skew; median with IQR is more representative.",
            commonErrors: ["Assuming the mean is always the best measure because it uses all data."],
          },
        },
        {
          id: "psych-u1-daq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Five participants score 12, 15, 18, 21 and 24 on a memory test. Calculate the mean score.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = sum of scores / number of scores" },
            ],
            steps: [
              { reasoning: "Sum the scores and divide by 5.", working: "(12 + 15 + 18 + 21 + 24) / 5", marks: 1, markCode: "M" },
              { reasoning: "The mean is 18.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
            commonErrors: ["Dividing by 4 instead of 5."],
          },
        },
        {
          id: "psych-u1-daq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Memory scores are 7, 9, 12, 12 and 15. Calculate the median and the range.",
          response: {
            type: "numeric",
            parts: [
              { label: "Median", answer: 12 },
              { label: "Range", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Median and range", statement: "Median = middle ordered value; range = maximum - minimum" },
            ],
            steps: [
              { reasoning: "The data are already ordered, so the median is the third score.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "Range = 15 - 7.", working: "15 - 7", marks: 1, markCode: "M" },
              { reasoning: "Median = 12 and range = 8.", working: "12 and 8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Median 12, range 8",
            commonErrors: ["Calculating the range as 15 + 7 or forgetting to order the data."],
          },
        },
        {
          id: "psych-u1-daq15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "In a sample of 40 reaction times, 14 are below 300 ms. Calculate the percentage below 300 ms, the number at or above 300 ms, and the percentage at or above 300 ms.",
          response: {
            type: "numeric",
            parts: [
              { label: "Below 300 ms", answer: 35, unit: "%" },
              { label: "At or above 300 ms count", answer: 26 },
              { label: "At or above 300 ms percentage", answer: 65, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage and remainder", statement: "Percentage = part / total x 100; remainder = total - part" },
            ],
            steps: [
              { reasoning: "Below 300 ms = 14 / 40 x 100.", working: "35", marks: 1, markCode: "M" },
              { reasoning: "At or above 300 ms = 40 - 14.", working: "26", marks: 1, markCode: "M" },
              { reasoning: "At or above percentage = 26 / 40 x 100 = 65.", working: "65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35% below, 26 at or above, 65% at or above",
            commonErrors: ["Using 14 as the number at or above 300 ms."],
          },
        },
        {
          id: "psych-u1-daq16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Scores are 3, 5, 5, 7, 10 and 12. Calculate the mean, median, range and mode.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mean", answer: 7 },
              { label: "Median", answer: 6 },
              { label: "Range", answer: 9 },
              { label: "Mode", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Descriptive statistics", statement: "Mean = sum/n; median = middle values; range = max - min; mode = most frequent" },
            ],
            steps: [
              { reasoning: "Mean = (3 + 5 + 5 + 7 + 10 + 12) / 6.", working: "42 / 6", marks: 1, markCode: "M" },
              { reasoning: "Median = (5 + 7) / 2.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Range = 12 - 3 and mode = 5.", working: "9 and 5", marks: 1, markCode: "A" },
              { reasoning: "Mean 7, median 6, range 9, mode 5.", working: "7, 6, 9, 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean 7, median 6, range 9, mode 5",
            commonErrors: ["Averaging the wrong pair for the median in an even-sized data set."],
          },
        },
      ],
    },
  ],
};
