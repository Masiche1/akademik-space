import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "eias-soc-u5-lesson-5-3",
  code: "5-3",
  title: "Ethics and Research Reports",
  goal: "I CAN apply ethical guidelines and structure research reports.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 5 — Research Methods"],
  vocabulary: [
    {
      term: "Informed consent",
      definition: "Participants know study nature + right to withdraw.",
    },
    { term: "Debriefing", definition: "Explaining true aims after study." },
    { term: "Confidentiality", definition: "Protecting personal data." },
    {
      term: "Right to withdraw",
      definition: "Participants can leave anytime.",
    },
    {
      term: "Report structure",
      definition: "Introduction, method, results, discussion.",
    },
    { term: "Peer review", definition: "Evaluation by other researchers." },
  ],
  concepts: [
    {
      id: "eias-soc-u5-ethics",
      title: "Ethics in Research",
      skill: "Apply ethical guidelines to research scenarios.",
      lesson: {
        sections: [
          {
            heading: "Ethical guidelines",
            body: "**Informed consent**: participants must know study, right to withdraw. **Deception**: only if necessary — must debrief. **Protection from harm**: no physical/psychological damage. **Confidentiality**: protect data — anonymise. **Right to withdraw**: can leave anytime, data removed. **Debriefing**: explain true aims, allow questions.\n\n**Cost-benefit analysis**: weigh research value vs participant harm — is it justified?",
          },
          {
            heading: "Ethical dilemmas",
            body: "**Covert research**: observe without consent — natural behaviour but unethical. **Sensitive topics**: domestic violence, abuse — may cause distress. **Vulnerable groups**: children, prisoners, mentally ill — extra protection needed.\n\n**Resolution**: consult ethics committee, debrief, provide support, anonymise data.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Researchers observe gang without members knowing. Issue?",
          solution: "Covert observation — ethical concern.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is informed consent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forced participation" },
              { id: "b", text: "Paying participants" },
              { id: "c", text: "Secret study" },
              { id: "d", text: "Participants know study + right to withdraw" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informed consent",
                statement: "Know + withdraw.",
              },
            ],
            steps: [
              {
                reasoning: "Consent = know + withdraw.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Know+withdraw",
            commonErrors: ["Payment confused."],
          },
        },
        {
          id: "eias-soc-u5-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ethical guidelines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethics",
                statement: "Consent, harm, confidentiality.",
              },
            ],
            steps: [
              {
                reasoning: "Informed consent — participants know study.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protection from harm — no damage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Confidentiality — protect personal data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Consent, harm, confidentiality, debrief.",
            commonErrors: ["Only one.", "Wrong guideline."],
          },
        },
        {
          id: "eias-soc-u5-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the ethical dilemma of covert research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Covert research",
                statement: "Natural vs consent.",
              },
            ],
            steps: [
              {
                reasoning: "Natural behaviour — no observer effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But no consent — violates autonomy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May cause harm — distress, exposure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Justified only if vital + no alternative.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Natural but unethical — justify carefully.",
            commonErrors: ["Always ethical.", "Never ethical."],
          },
        },
        {
          id: "eias-soc-u5-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Researcher studies domestic violence survivors.",
          parts: [
            { label: "a", prompt: "Identify two ethical issues.", marks: 4 },
            { label: "b", prompt: "Suggest two solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensitive research",
                statement: "Vulnerability + protection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Vulnerability — survivors may be re-traumatised.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Confidentiality — abuse details must be protected.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Informed consent + support — counselling available.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Debriefing + right to withdraw — no pressure.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) trauma+confidentiality (b) support+withdraw",
            commonErrors: ["No issue.", "No solution."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u5-reports",
      title: "Writing Research Reports",
      skill: "Structure and evaluate sociology research reports.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "**Title/Abstract**: brief summary. **Introduction**: background, aims, hypotheses. **Literature review**: existing research, gaps. **Method**: design, participants, procedure — detailed for replication. **Results**: findings, tables, statistics. **Discussion**: interpret, evaluate, implications. **Conclusion**: answer question, limitations.\n\n**IMRAD**: standard structure — Introduction, Method, Results, And Discussion.",
          },
          {
            heading: "Presenting findings",
            body: "**Quantitative**: statistics, tables, graphs — clear, accurate. **Qualitative**: quotes, themes — illustrative, rich. **Honest reporting**: include limitations, negative results — transparency. **Peer review**: others evaluate — validity check.\n\n**Evaluation**: good reports allow replication, criticism, building knowledge — transparent, rigorous.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Report section describing how study was conducted. Which?",
          solution: "Method.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-rep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is IMRAD?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interview, Method, Research, Analysis" },
              { id: "b", text: "Investigation, Methods, Reports, Data" },
              { id: "c", text: "Introduction, Memory, Reading, Analysis" },
              { id: "d", text: "Introduction, Method, Results, Discussion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IMRAD",
                statement: "Report structure.",
              },
            ],
            steps: [
              {
                reasoning: "IMRAD = standard sections.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Intro, Method, Results, Discussion",
            commonErrors: ["Wrong acronym."],
          },
        },
        {
          id: "eias-soc-u5-rep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two sections of a research report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Report sections",
                statement: "Method, results, discussion.",
              },
            ],
            steps: [
              {
                reasoning: "Method — design, participants, procedure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Results — findings, tables, statistics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Discussion — interpret, evaluate, implications.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Method, Results, Discussion.",
            commonErrors: ["Only one.", "Wrong section."],
          },
        },
        {
          id: "eias-soc-u5-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why Method section must be detailed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method detail",
                statement: "Replication.",
              },
            ],
            steps: [
              {
                reasoning: "Allows replication — others can repeat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Assesses validity — check method appropriate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identifies flaws — bias, confounds, ethics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Transparency — honest reporting builds trust.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Replication, validity, flaws, transparency.",
            commonErrors: ["Not needed.", "No reason."],
          },
        },
        {
          id: "eias-soc-u5-rep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Study reports only positive results, hides negative findings.",
          parts: [
            { label: "a", prompt: "What is this called?", marks: 3 },
            { label: "b", prompt: "Why is it problematic?", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Publication bias",
                statement: "Selective reporting.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Publication bias — selective reporting.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Distorts knowledge — incomplete picture.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Misleading — suggests stronger evidence than exists.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Wastes resources — others repeat failed studies.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Unethical — dishonest reporting.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) publication bias (b) misleading+wasteful",
            commonErrors: ["Normal.", "No problem."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u5-final",
      title: "Synthesis and Evaluation",
      skill:
        "Integrate research methods knowledge and evaluate overall quality.",
      lesson: {
        sections: [
          {
            heading: "Method selection",
            body: "**Research question** determines method — quantitative for patterns, qualitative for meanings. **Constraints**: time, resources, ethics, access — practical factors. **Triangulation**: combine methods — comprehensive but complex.\n\n**No perfect method**: all have strengths/weaknesses — choice depends on context, purpose.",
          },
          {
            heading: "Overall evaluation",
            body: "**Quality indicators**: reliability, validity, ethics, transparency. **Strengths**: sociology has diverse methods — fits different questions. **Weaknesses**: complexity, bias, generalisability issues.\n\n**Best practice**: rigorous, ethical, transparent — acknowledge limitations, allow criticism.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Want both statistics and meanings. Approach?",
          solution: "Mixed methods.",
        },
      },
      questions: [
        {
          id: "eias-soc-u5-final-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What determines research method choice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost only" },
              { id: "b", text: "Personal preference" },
              { id: "c", text: "Research question" },
              { id: "d", text: "Random choice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method choice",
                statement: "Question-driven.",
              },
            ],
            steps: [
              {
                reasoning: "Method = research question.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Research question",
            commonErrors: ["Preference confused."],
          },
        },
        {
          id: "eias-soc-u5-final-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two constraints on method choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Constraints",
                statement: "Time, ethics, access.",
              },
            ],
            steps: [
              {
                reasoning: "Time/resources — practical limits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ethics — some methods unethical.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Access — can't study some groups.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Time, ethics, access.",
            commonErrors: ["Only one.", "Wrong constraint."],
          },
        },
        {
          id: "eias-soc-u5-final-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why no method is perfect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method limits",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative: large samples but shallow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Qualitative: rich detail but not generalisable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Secondary: efficient but may not fit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trade-offs — choose based on purpose.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "All methods have trade-offs.",
            commonErrors: ["Perfect method.", "No trade-off."],
          },
        },
        {
          id: "eias-soc-u5-final-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate overall quality of sociological research.",
          parts: [
            { label: "a", prompt: "Give two strengths of methods.", marks: 4 },
            { label: "b", prompt: "Give two limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Research quality",
                statement: "Diverse + imperfect.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Diverse methods — fit different questions.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Rigorous standards — reliability, validity, ethics.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Complexity — no perfect method.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Bias — researcher influence, sampling issues.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) diverse+rigorous (b) complex+biased",
            commonErrors: ["Perfect research.", "Only strengths."],
          },
        },
      ],
    },
  ],
};
