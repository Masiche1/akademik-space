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
                              "text": "Fake messages tricking users into revealing credentials"
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
