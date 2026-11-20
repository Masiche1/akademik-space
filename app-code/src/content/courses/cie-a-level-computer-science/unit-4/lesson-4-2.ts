import type { Lesson } from "../../../types.ts";

export const lesson152: Lesson = {
  id: "ciealc-u4-lesson-4-2",
  code: "4-2",
  title: "Internet Security and Cybercrime",
  goal: "I CAN identify cyber threats, explain security measures and legal frameworks.",
  standards: ["Cambridge A Level Computer Science 9618: security", "9618: cybercrime"],
  
  vocabulary: [
    { term: "Malware", definition: "Malicious software — viruses, worms, trojans, ransomware." },
    { term: "Phishing", definition: "Fraudulent attempt to steal credentials." },
    { term: "Firewall", definition: "Network security system filtering traffic." },
    { term: "Encryption", definition: "Protecting data via cipher." },
    { term: "Authentication", definition: "Verifying identity." },
    { term: "Cybercrime", definition: "Crimes committed using computers/networks." },
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
          { name: "Malware types", statement: "virus, worm, trojan, ransomware" },
          { name: "Defences", statement: "firewall, antivirus, encryption, auth, patches" },
        ],
        workedExample: {
          problem: "Explain how ransomware works and how to defend against it.",
          solution: "Ransomware encrypts files, demands payment. Defences: backups, antivirus, patches, email filtering, user education.",
        },
      },
      questions: [
        {
          id: "ciealc-u4-sec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is malware?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Malicious software designed to harm systems"
                    },
                    {
                              "id": "b",
                              "text": "A type of hardware"
                    },
                    {
                              "id": "c",
                              "text": "A programming language"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
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
                              "reasoning": "Malware includes viruses, worms, trojans, ransomware.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Malicious software"
},
        },
        {
          id: "ciealc-u4-sec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is phishing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phishing",
                              "statement": "Credential theft attempt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phishing = fraudulent attempt to steal credentials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Usually via fake emails or websites.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Credential theft attempt"
},
        },
        {
          id: "ciealc-u4-sec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a firewall and what does it do?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Firewall",
                              "statement": "Network traffic filter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Firewall filters network traffic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Blocks unauthorised access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Can be hardware or software.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Network traffic filter"
},
        },
        {
          id: "ciealc-u4-sec-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define malware, virus, worm, trojan, ransomware, phishing, firewall, encryption, authentication. (b) Compare virus vs worm. (c) What is phishing? (d) What is a firewall? (e) What is 2FA? (f) Why update software? (g) What is social engineering? (h) Design a security plan for a small business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Security",
                              "statement": "Threats, defences, cybercrime."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All nine definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Virus needs host; worm self-replicates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Credential theft via deception.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Traffic filter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Two-factor authentication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Fixes security vulnerabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Manipulating people for access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid security plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Security threats and defences."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-sec-notes",
      title: "Security — notes",
      summary: "Malware types: virus/worm/trojan/ransomware. Defences: firewall, antivirus, encryption, 2FA, patches.",
      sections: [
        { heading: "Key idea", body: "Layered security: technical defences + user education." },
        { heading: "Phishing", body: "Most common attack — social engineering via fake emails/sites." },
      ],
    },
  ],
};
