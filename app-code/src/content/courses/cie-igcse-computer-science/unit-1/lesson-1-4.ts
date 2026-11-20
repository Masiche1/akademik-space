import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ciecs-u1-lesson-1-4",
  code: "1-4",
  title: "Internet Services and Security",
  goal: "I CAN describe internet services and apply security measures to protect data.",
  standards: ["Cambridge IGCSE Computer Science 0478: communication and internet technologies", "0478 section 2: internet services/security"],
  
  vocabulary: [
    { term: "WWW", definition: "World Wide Web — system of linked web pages." },
    { term: "HTTPS", definition: "Encrypted web protocol — 'S' = secure." },
    { term: "Encryption", definition: "Scrambling data so only authorised parties read it." },
    { term: "Phishing", definition: "Fake messages tricking users into revealing credentials." },
    { term: "Firewall", definition: "Security barrier blocking unauthorised access." },
    { term: "DNS", definition: "Domain Name System — translates names to IP addresses." },
  ],
  concepts: [
    {
      id: "ciecs-u1-s4-internet",
      title: "Internet services and security",
      skill: "Describe internet services and security at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Internet services",
            body: "WWW = web pages linked via hyperlinks. Email (SMTP/POP3/IMAP), file transfer (FTP), VoIP calls, cloud services. DNS translates domain names to IP addresses so humans don't memorise numbers.",
          },
          {
            heading: "Security threats and defences",
            body: "Threats: phishing (fake messages), malware (viruses, ransomware), man-in-the-middle attacks. Defences: HTTPS encryption, firewalls, strong passwords, 2FA, antivirus, updates, user awareness.",
          },
        ],
        keyFormulas: [
          { name: "HTTPS", statement: "encrypted web traffic" },
          { name: "DNS", statement: "name → IP lookup" },
          { name: "2FA", statement: "password + second factor" },
        ],
        workedExample: {
          problem: "Why is HTTPS important when entering credit card details?",
          solution: "HTTPS encrypts data in transit — prevents interception. Look for padlock + 'https://' in URL.",
        },
      },
      questions: [
        {
          id: "ciecs-u1-is-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does HTTPS provide that HTTP doesn't?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Encryption"
                    },
                    {
                              "id": "b",
                              "text": "Faster speed"
                    },
                    {
                              "id": "c",
                              "text": "More pages"
                    },
                    {
                              "id": "d",
                              "text": "Better design"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HTTPS",
                              "statement": "Encrypted web."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "S = secure/encrypted.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Encryption"
},
        },
        {
          id: "ciecs-u1-is-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is phishing? Give one defence against it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phishing",
                              "statement": "Deceptive credential theft."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phishing = fake messages for credentials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Defence: verify sender, don't click links, 2FA.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fake messages; verify + 2FA"
},
        },
        {
          id: "ciecs-u1-is-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how DNS works when you type 'www.example.com'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "DNS",
                              "statement": "Name→IP resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Browser asks DNS server for IP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "DNS returns IP address.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Browser connects to that IP.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Name→IP→connect"
},
        },
        {
          id: "ciecs-u1-is-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define WWW, HTTPS, encryption, phishing, firewall, DNS, 2FA, malware. (b) Why is the WWW called 'World Wide'? (c) What does encryption protect? (d) List 3 internet services. (e) What is a firewall? (f) Why update software? (g) What is a man-in-the-middle attack? (h) Design security advice for online banking users.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Internet security",
                              "statement": "Services, threats, defences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All eight definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Global network of linked pages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Data in transit from interception.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three valid services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Blocks unauthorised access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Patches vulnerabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Attacker intercepts/alters communication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid security advice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internet services and security measures."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u1-is-notes",
      title: "Internet security — notes",
      summary: "HTTPS encrypts web traffic; DNS resolves names to IPs; defend with firewalls, 2FA, updates.",
      sections: [
        { heading: "Key idea", body: "Security is layered — encryption + firewalls + user awareness." },
        { heading: "HTTPS", body: "Look for padlock — especially for sensitive data." },
      ],
    },
  ],
};
