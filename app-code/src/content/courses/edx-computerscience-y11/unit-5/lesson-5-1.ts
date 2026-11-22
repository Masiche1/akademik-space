import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "ecs11-u5-lesson-5-1",
  code: "5-1",
  title: "Network Security",
  goal: "I CAN explain network threats and defensive measures.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Networks"],
  vocabulary: [
    { term: "Firewall", definition: "Filters network traffic by rules." },
    { term: "IDS/IPS", definition: "Intrusion detection/prevention systems." },
    { term: "VPN", definition: "Virtual private network — encrypted tunnel." },
    { term: "DDoS", definition: "Distributed denial of service attack." },
    {
      term: "Man-in-the-middle",
      definition: "Intercepting communication between parties.",
    },
  ],
  concepts: [
    {
      id: "ecs11-u5-threats2",
      title: "Network Threats",
      skill: "Identify network attacks and their effects.",
      lesson: {
        sections: [
          {
            heading: "Attack types",
            body: "**DDoS**: flood target with traffic from many devices — service unavailable. **Man-in-the-middle**: intercept/alter communication — steal data. **SQL injection**: malicious code in database queries. **Packet sniffing**: capture network traffic — unencrypted data exposed. **ARP spoofing**: fake MAC addresses to intercept traffic.\n\n**Unauthorised access**: weak passwords, default credentials. **Eavesdropping**: intercept wireless/wired traffic.",
          },
          {
            heading: "Attack vectors",
            body: "Open ports, unpatched software, weak encryption, social engineering, insider threats. **Zero-day exploits**: unknown vulnerabilities. **Supply chain**: compromised software updates/hardware.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Website crashes under massive traffic from thousands of devices. Attack?",
          solution: "DDoS — distributed denial of service.",
        },
      },
      questions: [
        {
          id: "ecs11-u5-threats2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a DDoS attack?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flooding target with traffic to deny service" },
              { id: "b", text: "Encrypting files" },
              { id: "c", text: "Stealing files" },
              { id: "d", text: "Spreading viruses" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DDoS",
                statement: "Traffic flood attack.",
              },
            ],
            steps: [
              {
                reasoning: "DDoS = distributed flood.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Traffic flood",
            commonErrors: ["Virus confused."],
          },
        },
        {
          id: "ecs11-u5-threats2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a man-in-the-middle attack does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MITM",
                statement: "Intercepts communication.",
              },
            ],
            steps: [
              {
                reasoning: "Attacker positions between two parties.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Intercepts/alters messages without detection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can steal credentials or inject malicious content.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Intercepts/alter communication between parties.",
            commonErrors: ["DDoS confused.", "No mechanism."],
          },
        },
        {
          id: "ecs11-u5-threats2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how SQL injection works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SQL injection",
                statement: "Malicious input in queries.",
              },
            ],
            steps: [
              {
                reasoning: "User input inserted into SQL query unsafely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Attacker adds commands — e.g., `' OR '1'='1`.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bypasses authentication or extracts data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Prevention: parameterised queries, input validation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Malicious input manipulates database queries.",
            commonErrors: ["No example.", "No prevention."],
          },
        },
        {
          id: "ecs11-u5-threats2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company website goes offline repeatedly.",
          parts: [
            {
              label: "a",
              prompt: "Explain how a DDoS attack causes this.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two defences.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DDoS defence",
                statement: "Traffic filtering + redundancy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Many compromised devices flood server with requests.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Server overwhelmed — can't respond to real users.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) DDoS protection service — filters malicious traffic.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Rate limiting + redundant servers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) traffic flood (b) filtering+redundancy",
            commonErrors: ["No mechanism.", "No defence."],
          },
        },
      ],
    },
    {
      id: "ecs11-u5-defence",
      title: "Network Defence",
      skill: "Explain firewalls, VPNs, encryption and defence strategies.",
      lesson: {
        sections: [
          {
            heading: "Defence layers",
            body: "**Firewall**: filters traffic by rules — block/allow ports, IPs, protocols. **IDS/IPS**: monitor for suspicious activity — detect/prevent intrusions. **VPN**: encrypted tunnel — secure remote access, hide traffic. **Encryption**: HTTPS, WPA3 — protect data in transit.\n\n**Authentication**: strong passwords, 2FA, biometrics — verify identity.",
          },
          {
            heading: "Best practices",
            body: "**Principle of least privilege**: minimal access needed. **Network segmentation**: isolate critical systems. **Regular updates**: patch vulnerabilities. **Monitoring**: log analysis, anomaly detection. **Backup**: recover from attacks.\n\n**Defense in depth**: multiple layers — if one fails, others protect.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Remote worker needs secure access. Solution?",
          solution: "VPN — encrypted tunnel.",
        },
      },
      questions: [
        {
          id: "ecs11-u5-defence-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a VPN provide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More bandwidth" },
              { id: "b", text: "Free software" },
              { id: "c", text: "Encrypted secure connection" },
              { id: "d", text: "Faster internet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "VPN",
                statement: "Encrypted tunnel.",
              },
            ],
            steps: [
              {
                reasoning: "VPN = encrypted connection.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Encrypted connection",
            commonErrors: ["Speed confused."],
          },
        },
        {
          id: "ecs11-u5-defence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two firewall functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Firewall",
                statement: "Traffic filtering.",
              },
            ],
            steps: [
              {
                reasoning: "Block unauthorised access — filter by rules.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Allow/block specific ports, IPs, protocols.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Log traffic for monitoring.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Filter traffic, block intrusions, log activity.",
            commonErrors: ["Only one.", "Antivirus confused."],
          },
        },
        {
          id: "ecs11-u5-defence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the principle of defence in depth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Defence in depth",
                statement: "Multiple security layers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiple security layers — firewall, antivirus, training.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "If one layer fails, others still protect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: firewall + antivirus + staff training.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Harder for attacker to breach all layers.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Layered defences — single failure doesn't compromise.",
            commonErrors: ["Single defence.", "No example."],
          },
        },
        {
          id: "ecs11-u5-defence-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school network needs protection.",
          parts: [
            {
              label: "a",
              prompt: "Suggest three technical defences.",
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
                name: "Network security",
                statement: "Technical + human.",
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
                  "(a) Encryption for sensitive data + VPN for remote.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Staff/student security training.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Access controls + regular updates/backups.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) firewall+encryption (b) training+access",
            commonErrors: ["Only technical.", "No human."],
          },
        },
      ],
    },
    {
      id: "ecs11-u5-crypto",
      title: "Encryption and Cryptography",
      skill: "Explain encryption types and applications.",
      lesson: {
        sections: [
          {
            heading: "Encryption basics",
            body: "**Encryption**: scrambles data so only authorised parties can read. **Plaintext** → encrypted with **key** → **ciphertext**. **Decryption**: reverse with key.\n\n**Symmetric**: same key encrypts/decrypts — AES, DES. Fast, but key distribution problem. **Asymmetric**: public key encrypts, private decrypts — RSA. Solves key exchange, slower.",
          },
          {
            heading: "Applications",
            body: "**HTTPS**: asymmetric for key exchange, symmetric for data — secure web. **VPN**: encrypted tunnel. **Messaging**: end-to-end encryption (WhatsApp). **Digital signatures**: verify authenticity — sign with private key, verify with public. **Hashing**: one-way — passwords, integrity checks.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does HTTPS secure web browsing?",
          solution: "Asymmetric key exchange + symmetric encryption.",
        },
      },
      questions: [
        {
          id: "ecs11-u5-crypto-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is encryption?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Backing up data" },
              {
                id: "b",
                text: "Scrambling data so only authorised parties read it",
              },
              { id: "c", text: "Compressing files" },
              { id: "d", text: "Deleting data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encryption",
                statement: "Scramble for authorised access.",
              },
            ],
            steps: [
              {
                reasoning: "Encryption = scramble + key.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Scramble data",
            commonErrors: ["Compression confused."],
          },
        },
        {
          id: "ecs11-u5-crypto-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between symmetric and asymmetric encryption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Symmetric vs asymmetric",
                statement: "Same vs key pair.",
              },
            ],
            steps: [
              {
                reasoning: "Symmetric: same key for both — fast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Asymmetric: public/private key pair — slower.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Symmetric key distribution problem; asymmetric solves it.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Same key (fast) vs pair (secure exchange).",
            commonErrors: ["Same thing.", "Only one."],
          },
        },
        {
          id: "ecs11-u5-crypto-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how digital signatures work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital signatures",
                statement: "Sign private, verify public.",
              },
            ],
            steps: [
              {
                reasoning: "Sender signs message with private key.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Signature proves sender identity + message unchanged.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Recipient verifies with sender's public key.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Any alteration invalidates signature.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Private key signs → public verifies authenticity.",
            commonErrors: ["Wrong direction.", "No verification."],
          },
        },
        {
          id: "ecs11-u5-crypto-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how HTTPS secures a web connection.",
          parts: [
            { label: "a", prompt: "Describe the key exchange.", marks: 4 },
            {
              label: "b",
              prompt: "Describe data encryption during session.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HTTPS",
                statement: "Asymmetric exchange + symmetric data.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Asymmetric encryption exchanges session keys.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Server's public key encrypts, private decrypts.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Symmetric key encrypts actual data — faster.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Both sides share session key — encrypted channel.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) asymmetric key exchange (b) symmetric data",
            commonErrors: ["One type only.", "No mechanism."],
          },
        },
      ],
    },
  ],
};
