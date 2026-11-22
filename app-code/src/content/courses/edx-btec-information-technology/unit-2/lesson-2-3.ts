import type { Lesson } from "../../../types.ts";

export const lesson203: Lesson = {
  id: "edxbtecit-u2-lesson-2-3",
  code: "2-3",
  title: "Legal, Ethical Issues and Incident Management",
  goal: "I CAN describe legal and ethical issues in IT security and incident management procedures.",
  standards: [
    "BTEC L3 National Information Technology — Unit 2: Cyber Security and Incident Management",
  ],
  vocabulary: [
    {
      term: "Data Protection Act",
      definition:
        "UK law governing processing of personal data — requires lawful basis, security, rights for individuals.",
    },
    {
      term: "GDPR",
      definition:
        "General Data Protection Regulation — EU/UK law on personal data protection.",
    },
    {
      term: "Computer Misuse Act",
      definition:
        "UK law criminalising unauthorised access to computer systems.",
    },
    {
      term: "Incident response",
      definition:
        "Procedures for detecting, containing, eradicating and recovering from security incidents.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u2-l3-legal",
      title: "Legal and Ethical Issues",
      skill:
        "Describe key legislation governing IT security and ethical considerations.",
      lesson: {
        sections: [
          {
            heading: "Key legislation",
            body: "**Computer Misuse Act 1990**: criminalises unauthorised access (hacking), modification of data, and intent to commit further offences. **Data Protection Act 2018/GDPR**: regulates processing of personal data — requires lawful basis, security measures, breach notification within 72 hours, and gives individuals rights (access, deletion, portability).\n\n**Copyright, Designs and Patents Act**: protects software/code from unauthorised copying. **Regulation of Investigatory Powers Act**: governs surveillance/interception. **Freedom of Information Act**: public bodies must disclose information on request.",
          },
          {
            heading: "Ethical issues",
            body: "Ethical dilemmas include: **privacy vs security** (surveillance vs civil liberties), **whistleblowing** (exposing wrongdoing vs loyalty), **data ownership** (who controls personal data), **digital divide** (access inequality), **AI ethics** (bias, accountability).\n\nProfessional codes (BCS Code of Conduct) require IT professionals to act with integrity, competence and respect for privacy. Ethical hacking is legitimate when authorised — penetration testing requires written permission.",
          },
        ],
        keyFormulas: [
          {
            name: "Key laws",
            statement:
              "CMA (unauthorised access), DPA/GDPR (personal data), Copyright Act.",
          },
          {
            name: "Breach notification",
            statement: "GDPR requires notification within 72 hours.",
          },
        ],
        workedExample: {
          problem:
            "A company suffers a data breach affecting 10,000 customers. What's required?",
          solution:
            "Notify ICO within 72 hours, inform affected individuals if high risk, investigate cause, implement fixes, document actions.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u2-l3-legal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which law criminalises unauthorised access to computer systems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDPR" },
              { id: "b", text: "Computer Misuse Act" },
              { id: "c", text: "Copyright Act" },
              { id: "d", text: "Data Protection Act" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Computer Misuse Act",
                statement: "Criminalises unauthorised access/modification.",
              },
            ],
            steps: [
              {
                reasoning: "CMA = unauthorised access crime.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Computer Misuse Act",
            commonErrors: ["Confusing with data protection."],
          },
        },
        {
          id: "edxbtecit-u2-l3-legal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the GDPR breach notification requirement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDPR breach notification",
                statement:
                  "Must notify ICO within 72 hours of becoming aware of breach.",
              },
            ],
            steps: [
              {
                reasoning: "72-hour deadline for ICO notification.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Individuals notified if high risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Documentation/investigation required.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GDPR requires ICO notification within 72 hours + individual notification if high risk + documentation.",
            commonErrors: ["No timeframe.", "Only ICO mentioned."],
          },
        },
        {
          id: "edxbtecit-u2-l3-legal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the tension between security surveillance and privacy rights.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Privacy vs security",
                statement:
                  "Surveillance can prevent crime but infringes civil liberties.",
              },
            ],
            steps: [
              {
                reasoning: "Security benefits: threat detection/prevention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Privacy costs: surveillance, data collection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balance needed: proportionality, oversight.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Surveillance balances security benefits against privacy rights — needs proportionality, legal oversight and transparency.",
            commonErrors: ["One-sided.", "No balance."],
          },
        },
        {
          id: "edxbtecit-u2-l3-legal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company wants to monitor employee emails to prevent data leaks.",
          parts: [
            {
              label: "a",
              prompt: "Identify two legal requirements for this.",
              marks: 2,
            },
            { label: "b", prompt: "Identify two ethical concerns.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest a balanced monitoring approach.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Employee monitoring",
                statement:
                  "Legal if proportionate and transparent; ethical concerns about privacy/trust.",
              },
            ],
            steps: [
              {
                reasoning: "Legal 1: lawful basis under GDPR.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Legal 2: employee informed/consent.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Ethical 1: privacy invasion.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Ethical 2: trust erosion/morale.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Ethical 3: proportionality concerns.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Approach: targeted monitoring not blanket.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Approach: clear policy + transparency.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Approach: oversight/accountability.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) GDPR basis+consent (b) privacy/trust/proportionality (c) targeted+transparent+oversight",
            commonErrors: ["No legal basis.", "Blanket monitoring."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u2-l3-incident",
      title: "Incident Management",
      skill:
        "Describe incident response procedures and post-incident activities.",
      lesson: {
        sections: [
          {
            heading: "Incident response phases",
            body: "**Preparation**: policies, tools, trained team. **Detection/analysis**: identify incidents via monitoring/alerts — determine scope and severity. **Containment**: isolate affected systems to prevent spread — short-term (disconnect) and long-term (patch). **Eradication**: remove malware/root cause. **Recovery**: restore systems/data from clean backups, monitor for reinfection.\n\n**Post-incident**: lessons learned review, documentation, updating procedures, reporting to authorities if required (ICO for data breaches).",
          },
          {
            heading: "Incident classification and priorities",
            body: "Incidents classified by severity: **critical** (system down, data breach), **high** (significant impact), **medium** (limited impact), **low** (minor). Response timeframes vary — critical needs immediate response.\n\n**Chain of custody**: for forensic investigation, evidence must be preserved with documented handling. **Communication**: stakeholders informed appropriately — management, users, authorities, affected parties. **Business continuity**: plans ensure critical services continue during incidents.",
          },
        ],
        keyFormulas: [
          {
            name: "Response phases",
            statement:
              "Prepare → detect → contain → eradicate → recover → review.",
          },
          {
            name: "Severity levels",
            statement:
              "Critical/High/Medium/Low with different response priorities.",
          },
        ],
        workedExample: {
          problem:
            "A server is infected with ransomware. What are the first three steps?",
          solution:
            "1) Detect/confirm incident, 2) Isolate affected systems (containment), 3) Assess scope and notify management.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u2-l3-incident-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phase isolates affected systems to prevent spread?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recovery" },
              { id: "b", text: "Containment" },
              { id: "c", text: "Detection" },
              { id: "d", text: "Eradication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Containment",
                statement: "Isolating affected systems to prevent spread.",
              },
            ],
            steps: [
              {
                reasoning: "Containment = isolate to prevent spread.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Containment",
            commonErrors: ["Confusing with eradication."],
          },
        },
        {
          id: "edxbtecit-u2-l3-incident-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the purpose of a 'lessons learned' review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lessons learned",
                statement:
                  "Post-incident review improves future response and prevents recurrence.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies what went well/poorly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Updates procedures/training.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevents similar incidents.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lessons learned reviews improve response procedures and prevent recurrence by identifying weaknesses.",
            commonErrors: ["No improvement purpose.", "Only blame-focused."],
          },
        },
        {
          id: "edxbtecit-u2-l3-incident-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of the 'containment' phase in incident response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Containment",
                statement:
                  "Limits damage spread while preserving evidence for investigation.",
              },
            ],
            steps: [
              {
                reasoning: "Prevents spread to other systems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Buys time for analysis/recovery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Must balance with evidence preservation.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Containment limits damage and buys time but must preserve forensic evidence — disconnecting too quickly can destroy evidence.",
            commonErrors: ["Only benefits.", "No evidence consideration."],
          },
        },
        {
          id: "edxbtecit-u2-l3-incident-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company discovers malware spreading through its network.",
          parts: [
            {
              label: "a",
              prompt: "Describe the first three response actions.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why containment is critical at this stage.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Suggest two post-incident activities.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incident response",
                statement:
                  "Detect → contain → eradicate → recover → review sequence.",
              },
            ],
            steps: [
              {
                reasoning: "Action 1: confirm/detect incident.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Action 2: isolate affected systems.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Action 3: notify management/activate team.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Containment prevents spread to other systems.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Containment buys time for analysis.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Post-incident 1: lessons learned review.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Post-incident 2: update procedures/report to authorities.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Post-incident 3: improve security measures.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) detect+isolate+notify (b) prevents spread+buys time (c) review+update+improve",
            commonErrors: ["No containment.", "No post-incident."],
          },
        },
      ],
    },
  ],
};
