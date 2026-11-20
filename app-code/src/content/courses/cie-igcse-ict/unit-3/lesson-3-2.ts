import type { Lesson } from "../../../types.ts";

export const lesson97: Lesson = {
  id: "cieict-u3-lesson-3-2",
  code: "3-2",
  title: "Data Protection and Privacy",
  goal: "I CAN apply data protection principles and privacy practices when handling personal data.",
  standards: ["Cambridge IGCSE ICT 0417: data protection", "0417: privacy"],
  
  vocabulary: [
    { term: "Personal data", definition: "Information identifying an individual." },
    { term: "Data protection", definition: "Legal/ethical rules for handling personal data." },
    { term: "Consent", definition: "Permission to collect/use personal data." },
    { term: "Encryption", definition: "Scrambling data to protect privacy." },
    { term: "Data breach", definition: "Unauthorised access to personal data." },
    { term: "Privacy policy", definition: "Statement of how data is collected/used." },
  ],
  concepts: [
    {
      id: "cieict-u3-s2-dp",
      title: "Data protection and privacy",
      skill: "Handle personal data responsibly at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "Data protection principles",
            body: "Personal data needs consent for collection/use, should be accurate, kept secure, and only shared with permission. Laws like GDPR require organisations to protect personal data and report breaches.",
          },
          {
            heading: "Privacy practices",
            body: "Use strong passwords, encrypt sensitive data, limit sharing, check privacy settings, be aware of what you post online, understand privacy policies before signing up for services.",
          },
        ],
        keyFormulas: [
          { name: "Consent", statement: "permission to use data" },
          { name: "Encryption", statement: "protect data in transit/storage" },
          { name: "GDPR", statement: "EU data protection law" },
        ],
        workedExample: {
          problem: "A school wants to store student photos online. What should they consider?",
          solution: "Consent from parents/students, secure storage, limited access, privacy policy, comply with data protection law.",
        },
      },
      questions: [
        {
          id: "cieict-u3-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is personal data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Information identifying an individual"
                    },
                    {
                              "id": "b",
                              "text": "Any computer file"
                    },
                    {
                              "id": "c",
                              "text": "A type of software"
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
                              "name": "Personal data",
                              "statement": "Identifying information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Personal data identifies individuals.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Identifying information"
},
        },
        {
          id: "cieict-u3-dp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is consent in data protection? Why is it needed?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Consent",
                              "statement": "Permission for data use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consent = permission to collect/use data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Required by law; respects individual rights.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Permission; legal/ethical requirement"
},
        },
        {
          id: "cieict-u3-dp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a data breach and what should an organisation do if one occurs?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data breach",
                              "statement": "Unauthorised access."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breach = unauthorised access to personal data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Contain, investigate, notify authorities/affected individuals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Take steps to prevent recurrence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Unauthorised access; contain+report+prevent"
},
        },
        {
          id: "cieict-u3-dp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define personal data, data protection, consent, encryption, data breach, privacy policy. (b) What is GDPR? (c) Why is consent needed? (d) What is encryption for? (e) What should a privacy policy explain? (f) What is a data breach? (g) Give 3 privacy practices. (h) Design data protection guidelines for a school storing student records.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data protection",
                              "statement": "Privacy, consent, security."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) EU data protection law.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Legal requirement; respects rights.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Protects data in transit/storage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Collection, use, sharing practices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Unauthorised access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Three valid practices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid school data protection guidelines.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data protection and privacy practices."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-dp-notes",
      title: "Data protection — notes",
      summary: "Personal data needs consent; encrypt sensitive data; understand privacy policies; GDPR governs use.",
      sections: [
        { heading: "Key idea", body: "Personal data is a responsibility — protect it legally and ethically." },
        { heading: "Breach", body: "Contain, investigate, notify — then prevent recurrence." },
      ],
    },
  ],
};
