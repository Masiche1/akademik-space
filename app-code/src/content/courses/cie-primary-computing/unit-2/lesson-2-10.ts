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
                              "text": "A type of fish"
                    },
                    {
                              "id": "c",
                              "text": "A fast connection"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
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
