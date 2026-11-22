import type { Lesson } from "../../../types.ts";

export const lesson210: Lesson = {
  id: "cipc-u2-lesson-2-10",
  code: "2-10",
  title: "Stage 5 — Online Safety and Cyber Security",
  goal: "I CAN identify online threats and apply security practices to protect data and accounts.",
  standards: ["Cambridge Primary Computing 0059 Stage 5: digital literacy", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
  stage: 5,
  vocabulary: [
    { term: "Phishing", definition: "Fake messages tricking you into giving personal information." },
    { term: "Malware", definition: "Malicious software — viruses, spyware, ransomware." },
    { term: "Firewall", definition: "Security barrier blocking unauthorised access." },
    { term: "Two-factor authentication", definition: "Login needing password + second verification." },
    { term: "Encryption", definition: "Scrambling data so only authorised parties can read it." },
    { term: "Backup", definition: "A copy of data kept safe in case of loss." },
  ],
  concepts: [
    {
      id: "cipc-u2-s5-sec",
      title: "Online threats and security",
      skill: "Recognise phishing/malware and apply protection at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Threats",
            body: "Phishing emails/messages fake being trusted sources to steal passwords. Malware harms devices — viruses corrupt files, spyware watches you, ransomware locks data for payment. Weak passwords and unsafe links are common entry points.",
          },
          {
            heading: "Protection",
            body: "Use strong unique passwords, enable two-factor authentication, keep software updated, install antivirus/firewall, back up data regularly, never click suspicious links, verify sender addresses.",
          },
        ],
        keyFormulas: [
          { name: "Phishing", statement: "fake message → steal info" },
          { name: "Protect", statement: "strong passwords + 2FA + updates + backups" },
        ],
        workedExample: {
          problem: "An email says 'Your account will be deleted — click here to verify'. What do you do?",
          solution: "Don't click — likely phishing. Go to the site directly via your browser, check the sender address, or contact the company. Delete/report it.",
        },
      },
      questions: [
        {
          id: "cipc-u2-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is phishing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fake messages tricking you into giving information"
                    },
                    {
                              "id": "b",
                              "text": "A programming language"
                    },
                    {
                              "id": "c",
                              "text": "A fast connection"
                    },
                    {
                              "id": "d",
                              "text": "A type of fish"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phishing",
                              "statement": "Deceptive info theft."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phishing = fake messages for credentials.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fake messages for info"
},
        },
        {
          id: "cipc-u2-sc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways to protect your online accounts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Security",
                              "statement": "Passwords, 2FA, updates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strong unique passwords / two-factor auth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Updates/antivirus/backups.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. 2FA + strong passwords"
},
        },
        {
          id: "cipc-u2-sc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is malware and how does it differ from phishing? Give one protection for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Threats",
                              "statement": "Malware vs phishing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Malware = harmful software on device; phishing = trick messages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Antivirus/updates for malware.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verify senders/don't click for phishing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Software vs deception; different defences"
},
        },
        {
          id: "cipc-u2-sc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define phishing, malware, encryption, 2FA, backup. (b) How does ransomware work? (c) Why update software? (d) What is a firewall? (e) Describe spotting a phishing email. (f) Why unique passwords per site? (g) What is HTTPS padlock? (h) Design a security checklist for a new account.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cyber security",
                              "statement": "Threats, encryption, defences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Locks data, demands payment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Patches security holes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Blocks unauthorised access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Urgency, generic greeting, suspicious links/addresses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) One breach doesn't expose all accounts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Shows HTTPS/encrypted connection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid checklist: password, 2FA, recovery, privacy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Threats and protections: phishing, malware, encryption, 2FA."
},
        },
        {
          id: "cipc-u2-sc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is phishing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A network cable" },
            { id: "b", text: "A spam folder name" },
            { id: "c", text: "A type of fishing game" },
            { id: "d", text: "Fake messages tricking you into giving personal information" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Phishing", statement: "Fraudulent info requests." }],
            steps: [
              { reasoning: "Phishing = fake emails/messages designed to steal personal data.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Fake messages stealing personal info",
          },
        },
        {
          id: "cipc-u2-sc-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways to protect your online accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Account protection", statement: "Passwords, 2FA, updates." }],
            steps: [
              { reasoning: "First valid method: strong unique passwords.", marks: 1, markCode: "M" },
              { reasoning: "Second valid method: two-factor authentication / software updates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. strong passwords and 2FA.",
          },
        },
        {
          id: "cipc-u2-sc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A phishing email asks you to 'verify your account' by clicking a link. What should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Spotting phishing", statement: "Don't click suspicious links." }],
            steps: [
              { reasoning: "Do NOT click the link — it may lead to a fake site.", marks: 1, markCode: "M" },
              { reasoning: "Delete/report the email and tell a trusted adult if unsure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Don't click; delete and report.",
          },
        },
        {
          id: "cipc-u2-sc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is malware?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Malicious software designed to harm or steal data" },
            { id: "b", text: "A type of password" },
            { id: "c", text: "A hardware part" },
            { id: "d", text: "Helpful software" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Malware", statement: "Malicious software." }],
            steps: [
              { reasoning: "Malware = software made to damage systems or steal data (viruses, ransomware).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Malicious software",
          },
        },
        {
          id: "cipc-u2-sc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is two-factor authentication (2FA)? Why does it make accounts safer?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "2FA", statement: "Two verification steps." }],
            steps: [
              { reasoning: "2FA requires a second proof beyond the password (e.g. code sent to phone).", marks: 1, markCode: "M" },
              { reasoning: "Even if a password is stolen, the attacker lacks the second factor.", marks: 1, markCode: "M" },
              { reasoning: "So accounts are much harder to break into.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Second verification step; blocks stolen-password attacks.",
          },
        },
        {
          id: "cipc-u2-sc-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does ransomware work?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speeds up your computer" },
            { id: "b", text: "Encrypts your files and demands payment to unlock them" },
            { id: "c", text: "Sends you free games" },
            { id: "d", text: "Blocks spam emails" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ransomware", statement: "Encrypts files for ransom." }],
            steps: [
              { reasoning: "Ransomware encrypts files and demands money to decrypt.", marks: 1, markCode: "M" },
              { reasoning: "Protection: backups and updated software.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Encrypts files, demands payment",
          },
        },
        {
          id: "cipc-u2-sc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is it important to keep software and apps updated? Give one security reason.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Updates", statement: "Patch security holes." }],
            steps: [
              { reasoning: "Updates fix bugs and security weaknesses (vulnerabilities).", marks: 1, markCode: "M" },
              { reasoning: "Attackers exploit known flaws in old versions.", marks: 1, markCode: "M" },
              { reasoning: "Updating closes those holes and protects your data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Updates patch security holes attackers exploit.",
          },
        },
        {
          id: "cipc-u2-sc-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a firewall?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Firewall", statement: "Filters network traffic." }],
            steps: [
              { reasoning: "Firewall = security barrier that monitors/blocks incoming and outgoing traffic.", marks: 1, markCode: "M" },
              { reasoning: "It stops unauthorised access to your network/devices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Traffic filter blocking unauthorised access.",
          },
        },
        {
          id: "cipc-u2-sc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you use a DIFFERENT password for each important account?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Unique passwords", statement: "Limits damage from one breach." }],
            steps: [
              { reasoning: "If one password leaks, only that account is at risk.", marks: 1, markCode: "M" },
              { reasoning: "Reusing passwords lets attackers access ALL your accounts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One breach then affects only one account.",
          },
        },
        {
          id: "cipc-u2-sc-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "An email says 'Your account will be closed — click here to verify'. The sender address looks slightly wrong (e.g. 'paypa1.com'). What signs show it is phishing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Phishing indicators", statement: "Urgency, odd addresses, requests." }],
            steps: [
              { reasoning: "Urgent/threatening language to pressure you.", marks: 1, markCode: "M" },
              { reasoning: "Suspicious sender/address with typos or wrong domain.", marks: 1, markCode: "M" },
              { reasoning: "Asks you to click/enter details — legitimate companies don't do this by email.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Urgency, fake address, request for details.",
          },
        },
        {
          id: "cipc-u2-sc-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What does encryption do and why does it protect your data?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Encryption", statement: "Scrambles data to unreadable form." }],
            steps: [
              { reasoning: "Encryption scrambles data into an unreadable form using a key.", marks: 1, markCode: "M" },
              { reasoning: "Only someone with the key can decrypt and read it.", marks: 1, markCode: "M" },
              { reasoning: "So intercepted data is useless to attackers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scrambles data; only the key can read it.",
          },
        },
        {
          id: "cipc-u2-sc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define phishing, malware, encryption, 2FA, backup. (b) How does ransomware work? (c) Why update software? (d) What is a firewall? (e) Describe spotting a phishing email. (f) Why unique passwords per site? (g) What is HTTPS padlock? (h) Design a security checklist for a new account.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cyber security", statement: "Threats, protections, practices." }],
            steps: [
              { reasoning: "(a) Phishing=fake info requests; malware=harmful software; encryption=scrambling; 2FA=two-step verify; backup=copy of data.", marks: 1, markCode: "M" },
              { reasoning: "(b) Encrypts files, demands payment.", marks: 1, markCode: "M" },
              { reasoning: "(c) Patches security vulnerabilities.", marks: 1, markCode: "M" },
              { reasoning: "(d) Filters network traffic, blocks unauthorised access.", marks: 1, markCode: "M" },
              { reasoning: "(e) Urgency, odd sender, requests for details.", marks: 1, markCode: "M" },
              { reasoning: "(f) Limits damage if one password leaks.", marks: 1, markCode: "M" },
              { reasoning: "(g) Shows encrypted secure connection.", marks: 1, markCode: "M" },
              { reasoning: "(h) Checklist: strong unique password, 2FA, updates on, backup.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Threats and protections, ransomware, updates, firewall, phishing signs, unique passwords, HTTPS, checklist.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-sc-notes",
      title: "Cyber security — notes",
      summary: "Phishing=trick messages; malware=harmful software. Protect: strong passwords, 2FA, updates, backups.",
      sections: [
        { heading: "Key idea", body: "Most attacks exploit weak passwords and careless clicking." },
        { heading: "Rule", body: "Suspicious? Verify directly — don't click links in messages." },
      ],
    },
  ],
};
