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
                              "text": "Better design"
                    },
                    {
                              "id": "b",
                              "text": "More pages"
                    },
                    {
                              "id": "c",
                              "text": "Faster speed"
                    },
                    {
                              "id": "d",
                              "text": "Encryption"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ciecs-u1-is-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'S' in HTTPS indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The server is local" },
              { id: "b", text: "The site is faster" },
              { id: "c", text: "The connection is encrypted" },
              { id: "d", text: "The site has more pages" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "HTTPS", statement: "HTTP with encryption for secure communication." },
            ],
            steps: [
              { reasoning: "The S stands for secure; HTTPS encrypts web traffic.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** The connection is encrypted",
          },
        },
        {
          id: "ciecs-u1-is-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main function of DNS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stores email messages" },
              { id: "b", text: "It encrypts web pages" },
              { id: "c", text: "It blocks viruses" },
              { id: "d", text: "It translates domain names into IP addresses" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "DNS", statement: "Domain Name System resolves names to IP addresses." },
            ],
            steps: [
              { reasoning: "DNS looks up the IP address for a readable domain name.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Translates domain names into IP addresses",
          },
        },
        {
          id: "ciecs-u1-is-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which scenario is an example of phishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An email pretends to be from a bank and asks for a password" },
              { id: "b", text: "A website uses HTTPS" },
              { id: "c", text: "Antivirus removes a virus" },
              { id: "d", text: "A firewall blocks an unknown connection" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phishing", statement: "Deceptive messages used to steal credentials." },
            ],
            steps: [
              { reasoning: "Phishing tricks users into revealing sensitive information.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Fake bank email asking for a password",
          },
        },
        {
          id: "ciecs-u1-is-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main function of a firewall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It compresses files for storage" },
              { id: "b", text: "It translates domain names" },
              { id: "c", text: "It creates stronger passwords automatically" },
              { id: "d", text: "It monitors and blocks unauthorised network traffic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Firewall", statement: "Security barrier controlling network access." },
            ],
            steps: [
              { reasoning: "A firewall filters traffic and blocks unauthorised access.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Monitors and blocks unauthorised traffic",
          },
        },
        {
          id: "ciecs-u1-is-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does two-factor authentication require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two passwords for the same account" },
              { id: "b", text: "Two different devices only" },
              { id: "c", text: "Two antivirus programs" },
              { id: "d", text: "Two independent verification factors, such as a password and a code" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "2FA", statement: "Requires two independent factors for access." },
            ],
            steps: [
              { reasoning: "2FA combines factors such as something known and something received.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Two independent verification factors",
          },
        },
        {
          id: "ciecs-u1-is-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which defence best protects data while using public Wi-Fi?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turning off antivirus software" },
              { id: "b", text: "Disabling the firewall" },
              { id: "c", text: "Choosing a longer password only" },
              { id: "d", text: "Using HTTPS so the data is encrypted" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Secure transmission", statement: "Encryption protects data in transit." },
            ],
            steps: [
              { reasoning: "HTTPS encrypts traffic, reducing interception risk on untrusted networks.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Using HTTPS encryption",
          },
        },
        {
          id: "ciecs-u1-is-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $128$-bit encryption key is stored as bytes. How many bytes are in the key?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 16 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bits to bytes", statement: "One byte stores 8 bits." },
            ],
            steps: [
              { reasoning: "128 / 8 = 16 bytes.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "ciecs-u1-is-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bytes are in a $256$-bit encryption key?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bits to bytes", statement: "Divide bits by 8 to get bytes." },
            ],
            steps: [
              { reasoning: "256 / 8 = 32 bytes.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "ciecs-u1-is-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A $4$-digit PIN uses the digits $0$ to $9$. How many possible PINs are there?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10000 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Password space", statement: "Each digit has 10 choices." },
            ],
            steps: [
              { reasoning: "10^4 = 10000 possible PINs.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "10000",
          },
        },
        {
          id: "ciecs-u1-is-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) A $2$-character access code uses only the $26$ uppercase letters. How many codes are possible? (b) If digits $0$ to $9$ are also allowed, how many codes are possible?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 676 },
              { label: "b", answer: 1296 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Code combinations", statement: "Multiply choices for each character." },
            ],
            steps: [
              { reasoning: "26 * 26 = 676 letter-only codes.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "36 * 36 = 1296 codes when digits are allowed.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 676; (b) 1296",
          },
        },
        {
          id: "ciecs-u1-is-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "(a) A $2$ MB secure file contains how many megabits? (b) At $8$ Mbps, how many seconds are needed to send it? (c) At $4$ Mbps, how many seconds are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 2 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Secure transfer time", statement: "Size in megabits divided by link speed." },
            ],
            steps: [
              { reasoning: "2 MB = 16 megabits.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "16 / 8 = 2 seconds.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "16 / 4 = 4 seconds.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 16; (b) 2; (c) 4",
          },
        },
        {
          id: "ciecs-u1-is-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school wants to protect student accounts and data. Recommend a layered security strategy covering passwords, two-factor authentication, HTTPS, firewall/antivirus software, updates and user awareness. Justify each measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Layered security", statement: "Combine technical controls and user awareness." },
            ],
            steps: [
              { reasoning: "Strong unique passwords reduce the chance of guessing or credential reuse.", marks: 1, markCode: "M" },
              { reasoning: "2FA adds a second factor so a stolen password alone is insufficient.", marks: 1, markCode: "M" },
              { reasoning: "HTTPS, firewalls and antivirus protect data in transit and devices from attack.", marks: 1, markCode: "M" },
              { reasoning: "Updates patch vulnerabilities and user awareness reduces phishing/social-engineering risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use layered technical and human defences",
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
