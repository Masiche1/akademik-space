import type { Lesson } from "../../../types.ts";

export const lesson203: Lesson = {
  id: "ecs10-u1-lesson-1-3",
  code: "1-3",
  title: "Online Safety and Security",
  goal: "I CAN identify security threats and explain protective measures.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Online Safety"],
  vocabulary: [
    {
      term: "Malware",
      definition: "Malicious software — viruses, worms, trojans.",
    },
    {
      term: "Phishing",
      definition: "Fraudulent messages to steal credentials.",
    },
    {
      term: "Firewall",
      definition: "Software/hardware filtering network traffic.",
    },
    {
      term: "Encryption",
      definition: "Scrambling data so only authorised parties read it.",
    },
    {
      term: "Authentication",
      definition: "Verifying identity — passwords, biometrics.",
    },
  ],
  concepts: [
    {
      id: "ecs10-u1-threats",
      title: "Security Threats",
      skill: "Identify malware types, phishing and social engineering.",
      lesson: {
        sections: [
          {
            heading: "Malware types",
            body: "**Virus**: attaches to files, needs user action to spread. **Worm**: self-replicates across networks — no user action. **Trojan**: disguised as legitimate software — opens backdoor. **Ransomware**: encrypts files, demands payment. **Spyware**: secretly monitors activity.\n\n**Phishing**: fake emails/messages to steal passwords/financial details. **Social engineering**: manipulating people into revealing info — pretexting, baiting, tailgating.",
          },
          {
            heading: "Threat vectors",
            body: "Infected downloads, email attachments, USB drives, unpatched software, weak passwords, public Wi-Fi. **Zero-day**: exploit before patch exists. **Botnets**: networks of infected computers used for attacks.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Email asks to 'verify account' with a link. Threat?",
          solution: "Phishing — fake message to steal credentials.",
        },
      },
      questions: [
        {
          id: "ecs10-u1-threats-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is malware?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hardware device" },
              { id: "b", text: "Malicious software designed to harm" },
              { id: "c", text: "Helpful software" },
              { id: "d", text: "Network cable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Malware",
                statement: "Malicious software.",
              },
            ],
            steps: [
              {
                reasoning: "Malware = harmful software.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Malicious software",
            commonErrors: ["Virus only."],
          },
        },
        {
          id: "ecs10-u1-threats-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between a virus and a worm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Virus vs worm",
                statement: "User action vs self-spread.",
              },
            ],
            steps: [
              {
                reasoning: "Virus needs user action (open file) to spread.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Worm self-replicates across networks automatically.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Virus attaches to host files; worm standalone.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Virus needs user; worm self-spreads.",
            commonErrors: ["Same thing.", "Only one difference."],
          },
        },
        {
          id: "ecs10-u1-threats-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what phishing is and how to spot it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phishing",
                statement: "Fake messages to steal data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fraudulent emails/messages mimicking trusted sources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Asks for passwords/financial details via link.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Signs: urgent language, suspicious links, spelling errors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Never click links or give credentials — verify directly.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Fake messages → steal data; check sender/links.",
            commonErrors: ["No detection.", "Vague."],
          },
        },
        {
          id: "ecs10-u1-threats-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company suffers a ransomware attack.",
          parts: [
            { label: "a", prompt: "Explain how ransomware works.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two prevention measures.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ransomware",
                statement: "Encrypts files for payment.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Encrypts victim's files — makes inaccessible.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Demands payment (often cryptocurrency) for key.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Regular backups — restore without paying.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Antivirus + staff training + patching.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) encrypts+demands payment (b) backups+antivirus/training",
            commonErrors: ["No mechanism.", "No prevention."],
          },
        },
      ],
    },
    {
      id: "ecs10-u1-protection",
      title: "Protection and Encryption",
      skill:
        "Explain firewalls, encryption, authentication and security practices.",
      lesson: {
        sections: [
          {
            heading: "Protection measures",
            body: "**Firewall**: filters incoming/outgoing traffic — blocks unauthorised access. **Antivirus**: detects/removes malware — needs updates. **Encryption**: scrambles data (HTTPS, VPN) — unreadable if intercepted. **Authentication**: passwords, biometrics, 2FA — verify identity.\n\n**Best practices**: strong unique passwords, software updates, backups, least privilege, user training.",
          },
          {
            heading: "Encryption types",
            body: "**Symmetric**: same key encrypts/decrypts — fast but key sharing risky. **Asymmetric**: public/private key pair — secure key exchange, slower. **HTTPS**: asymmetric for key exchange, symmetric for data. **Hashing**: one-way — passwords stored as hashes, can't be reversed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Website shows padlock. What does it mean?",
          solution: "HTTPS — encrypted connection.",
        },
      },
      questions: [
        {
          id: "ecs10-u1-protection-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a firewall do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stores files" },
              { id: "b", text: "Speeds up internet" },
              { id: "c", text: "Prints documents" },
              { id: "d", text: "Filters network traffic for security" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Firewall",
                statement: "Filters traffic.",
              },
            ],
            steps: [
              {
                reasoning: "Firewall = traffic filter.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Filters traffic",
            commonErrors: ["Antivirus confused."],
          },
        },
        {
          id: "ecs10-u1-protection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two good password security practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Password security",
                statement: "Strong, unique, 2FA.",
              },
            ],
            steps: [
              {
                reasoning: "Use strong passwords — long, mixed characters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unique per account — no reuse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Enable two-factor authentication.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Strong, unique, 2FA.",
            commonErrors: ["Weak advice.", "Only one."],
          },
        },
        {
          id: "ecs10-u1-protection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between symmetric and asymmetric encryption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Encryption types",
                statement: "Same vs key pair.",
              },
            ],
            steps: [
              {
                reasoning: "Symmetric: same key encrypts and decrypts — fast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Symmetric: key must be shared securely — risky.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Asymmetric: public key encrypts, private decrypts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Asymmetric: solves key exchange but slower.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Same key (fast/risky) vs key pair (secure/slower).",
            commonErrors: ["Same thing.", "No trade-off."],
          },
        },
        {
          id: "ecs10-u1-protection-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school wants to protect student data.",
          parts: [
            {
              label: "a",
              prompt: "Suggest three technical protections.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest two human/organisational measures.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data protection",
                statement: "Technical + human layers.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Firewall + antivirus on all devices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Encryption for sensitive data at rest/in transit.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Staff/student training on phishing and passwords.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Access controls — only authorised staff see records.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) firewall+encryption (b) training+access control",
            commonErrors: ["Only technical.", "No human layer."],
          },
        },
      ],
    },
  ],
};
