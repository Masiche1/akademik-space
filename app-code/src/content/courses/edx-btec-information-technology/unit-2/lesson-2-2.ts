import type { Lesson } from "../../../types.ts";

export const lesson202: Lesson = {
  id: "edxbtecit-u2-lesson-2-2",
  code: "2-2",
  title: "Security Controls and Protection",
  goal: "I CAN describe technical and procedural security controls protecting IT systems.",
  standards: [
    "BTEC L3 National Information Technology — Unit 2: Cyber Security and Incident Management",
  ],
  vocabulary: [
    {
      term: "Firewall",
      definition:
        "A barrier filtering network traffic based on security rules — hardware or software.",
    },
    {
      term: "Encryption",
      definition:
        "Converting data into unreadable form using a key — protects confidentiality.",
    },
    {
      term: "Authentication",
      definition:
        "Verifying identity — passwords, biometrics, two-factor authentication (2FA).",
    },
    {
      term: "Access control",
      definition:
        "Restricting who can access what — permissions, roles, least privilege.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u2-l2-controls",
      title: "Technical Security Controls",
      skill:
        "Describe firewalls, encryption, authentication and antivirus as security controls.",
      lesson: {
        sections: [
          {
            heading: "Network and system controls",
            body: "**Firewall**: filters incoming/outgoing traffic by rules — blocks unauthorised access while allowing legitimate traffic. Can be hardware (network edge) or software (host-based). **Intrusion detection/prevention systems (IDS/IPS)**: monitor for suspicious activity and alert/block attacks.\n\n**Antivirus/antimalware**: scans for and removes malicious software. **Patching/updating**: fixes known vulnerabilities — unpatched software is a major attack vector. **Email filtering**: blocks phishing/spam before reaching users.",
          },
          {
            heading: "Data and access controls",
            body: "**Encryption**: protects data at rest (stored) and in transit (transmitted) — even if intercepted, data remains unreadable without the key. **Authentication**: verifies identity — strong passwords, biometrics, tokens. **Two-factor authentication (2FA)**: requires two verification methods — password + code/device — dramatically improving security.\n\n**Access control**: permissions determine what users can do — least privilege principle grants minimum necessary access. **Data backup**: enables recovery from ransomware/data loss.",
          },
        ],
        keyFormulas: [
          {
            name: "Defense in depth",
            statement:
              "Multiple layers of controls — no single control is sufficient.",
          },
          {
            name: "2FA",
            statement:
              "Password + second factor (code/biometric) = stronger authentication.",
          },
        ],
        workedExample: {
          problem: "Why is encryption important even with a firewall?",
          solution:
            "Firewalls protect perimeter but data can still be intercepted inside — encryption protects data wherever it travels or is stored.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u2-l2-controls-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which control requires two verification methods?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two-factor authentication" },
              { id: "b", text: "Firewall" },
              { id: "c", text: "Antivirus" },
              { id: "d", text: "Encryption" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "2FA",
                statement:
                  "Requires two verification factors — knowledge + possession/inherence.",
              },
            ],
            steps: [
              {
                reasoning: "2FA = two verification methods.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 2FA",
            commonErrors: ["Confusing with other controls."],
          },
        },
        {
          id: "edxbtecit-u2-l2-controls-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how encryption protects data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encryption",
                statement:
                  "Scrambles data using a key — only key holders can decrypt.",
              },
            ],
            steps: [
              {
                reasoning: "Data converted to unreadable ciphertext.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without key, data is meaningless.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protects at rest and in transit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Encryption converts data to unreadable form — interceptors see only ciphertext without the key.",
            commonErrors: [
              "Encryption = hiding not scrambling.",
              "No key concept.",
            ],
          },
        },
        {
          id: "edxbtecit-u2-l2-controls-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the 'defence in depth' approach to security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Defence in depth",
                statement:
                  "Layered controls — if one fails, others compensate.",
              },
            ],
            steps: [
              {
                reasoning: "No single control is perfect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Layers cover different attack vectors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increases attacker effort/time.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Defence in depth provides layered protection — one control's failure doesn't mean breach, but adds complexity/cost.",
            commonErrors: ["One control sufficient view.", "No trade-offs."],
          },
        },
        {
          id: "edxbtecit-u2-l2-controls-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company wants to protect customer data and prevent unauthorised access.",
          parts: [
            {
              label: "a",
              prompt: "Identify three technical controls appropriate for this.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how each control addresses a specific threat.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest one procedural control to complement them.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Security controls",
                statement:
                  "Technical controls protect systems; procedural controls manage people/processes.",
              },
            ],
            steps: [
              {
                reasoning: "Control 1 e.g. encryption.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Control 2 e.g. firewall/IDS.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Control 3 e.g. access control/2FA.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Control 1 → data theft/interception.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Control 2 → unauthorised network access.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Control 3 → account compromise.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Procedural e.g. staff training.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Procedural control justified.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) encryption/firewall/2FA (b) theft/network/account threats (c) training",
            commonErrors: ["No threat mapping.", "Only technical."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u2-l2-policy",
      title: "Security Policies and Best Practices",
      skill:
        "Describe security policies, best practices and organisational security culture.",
      lesson: {
        sections: [
          {
            heading: "Security policies",
            body: "**Acceptable use policy**: defines permitted system use — no personal use, no unauthorised software. **Password policy**: minimum length/complexity, regular changes, no sharing. **Data classification**: labels data by sensitivity — public, internal, confidential, restricted — with appropriate controls per level.\n\n**Incident response policy**: procedures for reporting, containing and recovering from security incidents. **Remote work policy**: secure VPN, device requirements, data handling outside office.",
          },
          {
            heading: "Best practices and culture",
            body: "**Strong passwords/passphrases**: unique per account, stored in password managers. **Regular updates/patching**: fixes vulnerabilities promptly. **Least privilege**: minimum access needed. **Regular backups**: tested recovery capability. **Security awareness training**: phishing recognition, safe browsing, reporting procedures.\n\n**Security culture**: when everyone understands security as everyone's responsibility, compliance improves. Leadership commitment, regular communication and incentives for reporting issues build a positive security culture.",
          },
        ],
        keyFormulas: [
          {
            name: "Policy types",
            statement:
              "Acceptable use, password, data classification, incident response.",
          },
          {
            name: "Best practices",
            statement:
              "Strong passwords, updates, least privilege, backups, training.",
          },
        ],
        workedExample: {
          problem: "Why is an acceptable use policy important?",
          solution:
            "Defines boundaries — prevents misuse, ensures accountability, protects organisation from liability.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u2-l2-policy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which policy defines permitted system use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Password policy" },
              { id: "b", text: "Incident response" },
              { id: "c", text: "Acceptable use policy" },
              { id: "d", text: "Data classification" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acceptable use policy",
                statement: "Defines permitted system use.",
              },
            ],
            steps: [
              {
                reasoning: "AUP defines permitted use.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Acceptable use",
            commonErrors: ["Confusing policy types."],
          },
        },
        {
          id: "edxbtecit-u2-l2-policy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the purpose of data classification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data classification",
                statement:
                  "Labels data by sensitivity so appropriate controls can be applied.",
              },
            ],
            steps: [
              {
                reasoning: "Categorises data by sensitivity level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables proportionate controls per level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supports compliance/legal requirements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Data classification labels sensitivity — ensuring confidential data gets stronger protection than public data.",
            commonErrors: ["No purpose.", "Generic 'organises data'."],
          },
        },
        {
          id: "edxbtecit-u2-l2-policy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether security policies alone can ensure security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy vs practice",
                statement:
                  "Policies are necessary but insufficient — enforcement, training and culture matter.",
              },
            ],
            steps: [
              {
                reasoning: "Policies provide framework/rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without enforcement/culture, policies ignored.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need training, monitoring, accountability.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Policies are essential but insufficient — enforcement, training and security culture determine effectiveness.",
            commonErrors: [
              "Policies sufficient view.",
              "No culture/enforcement.",
            ],
          },
        },
        {
          id: "edxbtecit-u2-l2-policy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company discovers employees sharing passwords and using personal email for work.",
          parts: [
            {
              label: "a",
              prompt: "Identify two security risks from these behaviours.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Suggest two policy changes to address them.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how to change the security culture.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Security culture",
                statement:
                  "Poor practices reflect weak culture — need policies + training + leadership.",
              },
            ],
            steps: [
              {
                reasoning: "Risk 1: shared passwords = no accountability.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Risk 2: personal email = data leakage.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Policy 1: unique passwords/2FA.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Policy 2: prohibit personal email/acceptable use.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Policy 3: monitoring/enforcement.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Culture: leadership commitment.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Culture: regular training/communication.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Culture: positive incentives not just punishment.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) accountability loss/data leakage (b) unique passwords+prohibit personal email (c) leadership+training+incentives",
            commonErrors: ["Only punishment.", "No cultural change."],
          },
        },
      ],
    },
  ],
};
