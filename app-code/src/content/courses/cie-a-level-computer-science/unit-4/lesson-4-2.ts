import type { Lesson } from "../../../types.ts";

export const lesson152: Lesson = {
  id: "ciealc-u4-lesson-4-2",
  code: "4-2",
  title: "Internet Security and Cybercrime",
  goal: "I CAN identify cyber threats, explain security measures and legal frameworks.",
  standards: [
    "Cambridge A Level Computer Science 9618: security",
    "9618: cybercrime",
  ],

  vocabulary: [
    {
      term: "Malware",
      definition: "Malicious software — viruses, worms, trojans, ransomware.",
    },
    {
      term: "Phishing",
      definition: "Fraudulent attempt to steal credentials.",
    },
    {
      term: "Firewall",
      definition: "Network security system filtering traffic.",
    },
    { term: "Encryption", definition: "Protecting data via cipher." },
    { term: "Authentication", definition: "Verifying identity." },
    {
      term: "Cybercrime",
      definition: "Crimes committed using computers/networks.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u4-s2-sec",
      title: "Security and cybercrime",
      skill: "Identify threats and security measures.",
      lesson: {
        sections: [
          {
            heading: "Threats",
            body: "Malware: viruses (attach to files), worms (self-replicate), trojans (disguised), ransomware (encrypts files). Phishing: fake emails/sites stealing credentials. Social engineering: manipulating people.",
          },
          {
            heading: "Defences",
            body: "Firewall filters traffic. Antivirus detects malware. Encryption protects data. Authentication verifies identity (passwords, 2FA). Patches fix vulnerabilities. Education prevents social engineering.",
          },
        ],
        keyFormulas: [
          {
            name: "Malware types",
            statement: "virus, worm, trojan, ransomware",
          },
          {
            name: "Defences",
            statement: "firewall, antivirus, encryption, auth, patches",
          },
        ],
        workedExample: {
          problem: "Explain how ransomware works and how to defend against it.",
          solution:
            "Ransomware encrypts files, demands payment. Defences: backups, antivirus, patches, email filtering, user education.",
        },
      },
      questions: [
        {
          id: "ciealc-u4-sec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is malware?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Malicious software designed to harm systems",
              },
              {
                id: "b",
                text: "A programming language",
              },
              {
                id: "c",
                text: "A network cable",
              },
              {
                id: "d",
                text: "A type of hardware",
              },
            ],
            correctChoiceId: "a",
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
                reasoning:
                  "Malware includes viruses, worms, trojans, ransomware.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Malicious software",
          },
        },
        {
          id: "ciealc-u4-sec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is phishing?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phishing",
                statement: "Credential theft attempt.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phishing = fraudulent attempt to steal credentials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Usually via fake emails or websites.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Credential theft attempt",
          },
        },
        {
          id: "ciealc-u4-sec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a firewall and what does it do?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Firewall",
                statement: "Network traffic filter.",
              },
            ],
            steps: [
              {
                reasoning: "Firewall filters network traffic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Blocks unauthorised access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can be hardware or software.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Network traffic filter",
          },
        },
        {
          id: "ciealc-u4-sec-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define malware, virus, worm, trojan, ransomware, phishing, firewall, encryption, authentication. (b) Compare virus vs worm. (c) What is phishing? (d) What is a firewall? (e) What is 2FA? (f) Why update software? (g) What is social engineering? (h) Design a security plan for a small business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Security",
                statement: "Threats, defences, cybercrime.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All nine definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Virus needs host; worm self-replicates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Credential theft via deception.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Traffic filter.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Two-factor authentication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Fixes security vulnerabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Manipulating people for access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid security plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Security threats and defences.",
          },
        },
        {
          id: "ciealc-u4-sec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which malware type disguises itself as legitimate software to trick a user into installing it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trojan" },
              { id: "b", text: "Firewall" },
              { id: "c", text: "Patch" },
              { id: "d", text: "Worm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trojan",
                statement: "Malware disguised as legitimate software.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A trojan appears useful or harmless but carries malicious code.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Trojan",
          },
        },
        {
          id: "ciealc-u4-sec-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A password consists of 8 characters chosen only from the 26 lowercase letters. How many possible passwords exist? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 208827064576 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Password space",
                statement: "Each character multiplies possibilities.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "There are $26^8 = 208827064576$ possible passwords.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "208827064576",
          },
        },
        {
          id: "ciealc-u4-sec-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An encryption system offers 128-bit and 256-bit keys. Give the size of each key and the number of additional bits in the larger key. Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 128 },
              { label: "b", answer: 128 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Key length",
                statement: "256-bit key has 128 more bits than 128-bit key.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The smaller offered key has 128 bits.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$256 - 128 = 128$ additional bits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "128 bits and 256 bits; difference is 128 bits",
          },
        },
        {
          id: "ciealc-u4-sec-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 4-digit PIN may use digits 0-9 but no digit may be repeated. How many PINs are possible, and how many choices are available for the first digit? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5040 },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "PIN space",
                statement:
                  "No repeated digits gives $10 \\times 9 \\times 8 \\times 7$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$10 \\times 9 \\times 8 \\times 7 = 5040$ possible PINs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The first digit can be any of the 10 digits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5040 PINs; 10 first-digit choices",
          },
        },
        {
          id: "ciealc-u4-sec-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A worm differs from a virus mainly because a worm:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "always requires a user to open an attachment" },
              { id: "b", text: "is a defensive security tool" },
              { id: "c", text: "only encrypts files and demands payment" },
              {
                id: "d",
                text: "can replicate and spread without needing a host file",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Virus vs worm",
                statement: "Worms self-replicate across networks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A virus needs a host program or file, while a worm can spread independently.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A worm can replicate without a host file",
          },
        },
        {
          id: "ciealc-u4-sec-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature is the strongest warning sign of a phishing email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It contains a normal newsletter footer" },
              { id: "b", text: "It uses HTTPS on the official website" },
              {
                id: "c",
                text: "It asks the user to confirm a password through an urgent suspicious link",
              },
              {
                id: "d",
                text: "It is sent from the organisation's verified domain",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Phishing indicators",
                statement: "Urgency and credential requests.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phishing relies on deception, often urgency and requests for sensitive credentials.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Urgent suspicious request for credentials",
          },
        },
        {
          id: "ciealc-u4-sec-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is defence in depth more effective than relying on only one security measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Firewalls remove the need for user education" },
              {
                id: "b",
                text: "One antivirus program can detect every possible threat",
              },
              {
                id: "c",
                text: "Multiple layers can prevent or limit different attack paths",
              },
              {
                id: "d",
                text: "Encryption makes malware impossible to create",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Defence in depth",
                statement: "Layered security controls.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Layered controls reduce the chance that a single failure exposes the system.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multiple layers limit different attack paths",
          },
        },
        {
          id: "ciealc-u4-sec-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best describes cybercrime?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A criminal offence committed using a computer or network",
              },
              { id: "b", text: "A legitimate use of encryption" },
              { id: "c", text: "Any software bug found during testing" },
              { id: "d", text: "A type of database query" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cybercrime",
                statement: "Crime involving computers or networks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cybercrime includes offences such as hacking, fraud and unauthorised access.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Crime committed using computers or networks",
          },
        },
        {
          id: "ciealc-u4-sec-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A password has 8 characters chosen from 62 possible characters. Give the size of the character set and the total number of possible passwords. Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 62 },
              { label: "b", answer: 218340105584896 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Password entropy",
                statement: "Password space is charset size raised to length.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The character set contains 62 possible characters.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$62^8 = 218340105584896$ possible passwords.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "62 characters; 218340105584896 passwords",
          },
        },
        {
          id: "ciealc-u4-sec-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare viruses, worms, trojans and ransomware in terms of how they spread or operate and the harm they cause.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Malware types",
                statement: "Spread mechanism and impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A virus attaches to host files and usually needs user action to spread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A worm can self-replicate across networks without a host file.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A trojan disguises itself as legitimate software, while ransomware encrypts files for payment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Virus needs host; worm self-spreads; trojan deceives; ransomware encrypts",
          },
        },
        {
          id: "ciealc-u4-sec-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Design a layered security plan for a small business that stores customer records online. Include technical controls, authentication, patching, backups and user awareness.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Layered security",
                statement: "Technical, procedural and human controls.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use a firewall and antivirus/endpoint protection to filter and detect threats.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Encrypt sensitive data in transit and at rest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Require strong passwords and two-factor authentication for staff access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply security patches promptly and maintain tested offline backups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Train staff to recognise phishing and social engineering attempts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Firewall, encryption, 2FA, patches, backups and training",
          },
        },
        {
          id: "ciealc-u4-sec-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company suffers a ransomware attack that encrypts customer files. Evaluate the technical and organisational responses needed, including detection, containment, recovery and prevention of future incidents.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Incident response",
                statement: "Detect, contain, recover and prevent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Detect the attack through monitoring, antivirus alerts or unusual file changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contain it by isolating affected systems and disabling compromised accounts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Restore encrypted data from clean, tested backups rather than paying attackers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Preserve evidence and follow legal or reporting obligations for cybercrime.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Patch vulnerabilities, improve filtering and strengthen authentication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Train staff and review the incident to improve future resilience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Detect, isolate, restore backups, report, patch and train",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-sec-notes",
      title: "Security — notes",
      summary:
        "Malware types: virus/worm/trojan/ransomware. Defences: firewall, antivirus, encryption, 2FA, patches.",
      sections: [
        {
          heading: "Key idea",
          body: "Layered security: technical defences + user education.",
        },
        {
          heading: "Phishing",
          body: "Most common attack — social engineering via fake emails/sites.",
        },
      ],
    },
  ],
};
