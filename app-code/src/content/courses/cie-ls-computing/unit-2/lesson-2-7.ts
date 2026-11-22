import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "cils-c-u2-lesson-2-7",
  code: "2-7",
  title: "Stage 9 — Cyber Security and Online Safety",
  goal: "I CAN identify online threats and apply security practices to protect data and privacy.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: networks and digital communication", "Cambridge Lower Secondary Computing 0860 strand: Networks and digital communication"],
  stage: 9,
  vocabulary: [
    { term: "Phishing", definition: "Fake messages tricking users into revealing credentials." },
    { term: "Malware", definition: "Malicious software — viruses, spyware, ransomware." },
    { term: "Encryption", definition: "Scrambling data so only authorised parties read it." },
    { term: "Authentication", definition: "Proving identity — passwords, biometrics, 2FA." },
    { term: "Firewall", definition: "Security barrier blocking unauthorised access." },
    { term: "Social engineering", definition: "Manipulating people into security breaches." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s7-sec",
      title: "Cyber security",
      skill: "Recognise threats and apply defences at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Threats",
            body: "Phishing emails fake trusted sources to steal passwords. Malware harms systems — ransomware locks data for payment, spyware monitors activity. Social engineering manipulates people — 'IT support' calls asking for passwords.",
          },
          {
            heading: "Defences",
            body: "Strong unique passwords, two-factor authentication, encryption (HTTPS), firewalls, antivirus, regular updates, backups, verifying sender identities, never sharing credentials.",
          },
        ],
        keyFormulas: [
          { name: "Phishing", statement: "fake message → steal credentials" },
          { name: "2FA", statement: "password + second factor" },
          { name: "Encryption", statement: "scramble data for privacy" },
        ],
        workedExample: {
          problem: "Email: 'Your account is compromised — click here to verify immediately!' Red flags?",
          solution: "Urgency, generic greeting, suspicious link, asks for credentials. Don't click — go to site directly or contact company.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is phishing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A programming language"
                    },
                    {
                              "id": "b",
                              "text": "A fast connection"
                    },
                    {
                              "id": "c",
                              "text": "A type of fish"
                    },
                    {
                              "id": "d",
                              "text": "Fake messages tricking users into revealing credentials"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phishing",
                              "statement": "Credential theft via deception."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phishing = deceptive messages for info.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fake messages for credentials"
},
        },
        {
          id: "cils-c-u2-sc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two security practices to protect online accounts.",
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
                              "reasoning": "Strong unique passwords + 2FA.",
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
          id: "cils-c-u2-sc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is social engineering? Give an example and how to defend.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Social engineering",
                              "statement": "Manipulating people."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Manipulating people into security breaches.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. fake IT support asking for password.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verify identity; never share credentials.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Human manipulation; verify identity"
},
        },
        {
          id: "cils-c-u2-sc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define phishing, malware, encryption, authentication, firewall, social engineering. (b) How does ransomware work? (c) Why update software? (d) What is 2FA? (e) How does HTTPS protect you? (f) List 5 phishing red flags. (g) Why unique passwords per site? (h) Design a security policy for a school.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Security",
                              "statement": "Threats and defences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Encrypts files, demands payment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Patches security vulnerabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Password + second verification.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Encrypts traffic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Five valid red flags.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) One breach doesn't expose all.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid school security policy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cyber threats and protection strategies."
},
        },
        {
          id: "cils-c-u2-sc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'malware'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of antivirus"
                    },
                    {
                              "id": "b",
                              "text": "A network cable"
                    },
                    {
                              "id": "c",
                              "text": "Malicious software designed to harm or steal data"
                    },
                    {
                              "id": "d",
                              "text": "A secure website"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Malware",
                              "statement": "Malicious software."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Malware includes viruses, spyware and ransomware.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Malicious software"
},
        },
        {
          id: "cils-c-u2-sc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An account uses a password, a fingerprint scan and a one-time code. How many authentication factors is that?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Authentication",
                              "statement": "Multiple verification factors."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Password + biometric + code = 3 factors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "cils-c-u2-sc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A phishing email contains 5 red flags. A student identifies 3 of them. How many did they miss?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Phishing detection",
                              "statement": "Count missed flags."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5 - 3 = 2 missed.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "cils-c-u2-sc-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important to install software updates regularly? Give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Updates",
                              "statement": "Security patches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Updates patch known security vulnerabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix bugs that could crash or corrupt data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Outdated software is a common attack target.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Patches vulnerabilities, fixes bugs"
},
        },
        {
          id: "cils-c-u2-sc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does two-factor authentication (2FA) add to a password?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A faster login"
                    },
                    {
                              "id": "b",
                              "text": "A longer password"
                    },
                    {
                              "id": "c",
                              "text": "Free antivirus"
                    },
                    {
                              "id": "d",
                              "text": "A second verification step, e.g. a code sent to your phone"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "2FA",
                              "statement": "Password + second factor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2FA requires something you know plus something you have.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Second verification factor"
},
        },
        {
          id: "cils-c-u2-sc-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A firewall blocks 95% of attack attempts. If 200 attacks are attempted, how many get through?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 10 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Firewall",
                              "statement": "Blocks unauthorised access."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5% of 200 = 10 get through.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "10"
},
        },
        {
          id: "cils-c-u2-sc-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How does ransomware typically work?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It encrypts the victim's files and demands payment for the key"
                    },
                    {
                              "id": "b",
                              "text": "It only shows adverts"
                    },
                    {
                              "id": "c",
                              "text": "It deletes the operating system instantly"
                    },
                    {
                              "id": "d",
                              "text": "It speeds up the computer"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ransomware",
                              "statement": "Encrypts data for ransom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ransomware locks files and demands payment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Encrypts files for ransom"
},
        },
        {
          id: "cils-c-u2-sc-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define phishing, malware, encryption, authentication, firewall. (b) Name two types of malware and what each does. (c) What is the best defence against ransomware? (d) Why do attackers use social engineering instead of hacking? (e) List three things you should never share online.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Security",
                              "statement": "Threats and defences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) e.g. virus corrupts files; spyware monitors activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Regular backups + antivirus + not opening suspicious files.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) People are often the weakest link — easier to trick than break encryption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) e.g. passwords, PINs, personal details, one-time codes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Threats, defences, social engineering."
},
        },
        {
          id: "cils-c-u2-sc-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does encryption do to data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Scrambles it so only authorised parties can read it"
                    },
                    {
                              "id": "b",
                              "text": "Copies it to the cloud"
                    },
                    {
                              "id": "c",
                              "text": "Compresses it"
                    },
                    {
                              "id": "d",
                              "text": "Deletes it permanently"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Encryption",
                              "statement": "Scrambles data for privacy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Encryption makes data unreadable without the key.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Scrambles data"
},
        },
        {
          id: "cils-c-u2-sc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A user has unique passwords for 3 sites. One site is breached. How many of the user's accounts remain safe from that breach?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Unique passwords",
                              "statement": "One breach doesn't expose all."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Only the breached site is affected: 3 - 1 = 2 safe.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "cils-c-u2-sc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'social engineering' in cyber security?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of firewall"
                    },
                    {
                              "id": "b",
                              "text": "Encrypting messages"
                    },
                    {
                              "id": "c",
                              "text": "Building social media apps"
                    },
                    {
                              "id": "d",
                              "text": "Manipulating people into revealing information or granting access"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Social engineering",
                              "statement": "Manipulating people."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Attackers exploit human trust rather than technology.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Manipulating people"
},
        },
        {
          id: "cils-c-u2-sc-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define phishing, malware, ransomware, encryption, authentication, social engineering. (b) How can you tell a phishing email? List three signs. (c) Why are backups the best defence against ransomware? (d) What makes a strong password? (e) Why shouldn't you share your password even with 'IT support'? (f) Design a 5-point online safety policy for your school.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Security",
                              "statement": "Threats, signs, defences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) e.g. urgency, generic greeting, suspicious link, asks for credentials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Restores data without paying ransom.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Long, unique, mix of characters, not reused.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Legitimate support never needs your password — it's a social engineering trick.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid school safety policy covering passwords, updates, reporting, backups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cyber threats and school policy."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-sc-notes",
      title: "Cyber security — notes",
      summary: "Phishing, malware, social engineering are threats. Defend with 2FA, encryption, updates, verification.",
      sections: [
        { heading: "Key idea", body: "Most breaches exploit people, not just technology." },
        { heading: "Rule", body: "Verify before trusting — especially urgent requests." },
      ],
    },
  ],
};
