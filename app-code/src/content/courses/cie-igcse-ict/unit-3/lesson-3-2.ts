import type { Lesson } from "../../../types.ts";

export const lesson97: Lesson = {
  id: "cieict-u3-lesson-3-2",
  code: "3-2",
  title: "Data Protection and Privacy",
  goal: "I CAN apply data protection principles and privacy practices when handling personal data.",
  standards: ["Cambridge IGCSE ICT 0417: data protection", "0417: privacy"],

  vocabulary: [
    {
      term: "Personal data",
      definition: "Information identifying an individual.",
    },
    {
      term: "Data protection",
      definition: "Legal/ethical rules for handling personal data.",
    },
    { term: "Consent", definition: "Permission to collect/use personal data." },
    { term: "Encryption", definition: "Scrambling data to protect privacy." },
    {
      term: "Data breach",
      definition: "Unauthorised access to personal data.",
    },
    {
      term: "Privacy policy",
      definition: "Statement of how data is collected/used.",
    },
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
          problem:
            "A school wants to store student photos online. What should they consider?",
          solution:
            "Consent from parents/students, secure storage, limited access, privacy policy, comply with data protection law.",
        },
      },
      questions: [
        {
          id: "cieict-u3-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is personal data?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Any computer file",
              },
              {
                id: "b",
                text: "A network cable",
              },
              {
                id: "c",
                text: "Information identifying an individual",
              },
              {
                id: "d",
                text: "A type of software",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personal data",
                statement: "Identifying information.",
              },
            ],
            steps: [
              {
                reasoning: "Personal data identifies individuals.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Identifying information",
          },
        },
        {
          id: "cieict-u3-dp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is consent in data protection? Why is it needed?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consent",
                statement: "Permission for data use.",
              },
            ],
            steps: [
              {
                reasoning: "Consent = permission to collect/use data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Required by law; respects individual rights.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Permission; legal/ethical requirement",
          },
        },
        {
          id: "cieict-u3-dp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a data breach and what should an organisation do if one occurs?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data breach",
                statement: "Unauthorised access.",
              },
            ],
            steps: [
              {
                reasoning: "Breach = unauthorised access to personal data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contain, investigate, notify authorities/affected individuals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take steps to prevent recurrence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Unauthorised access; contain+report+prevent",
          },
        },
        {
          id: "cieict-u3-dp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define personal data, data protection, consent, encryption, data breach, privacy policy. (b) What is GDPR? (c) Why is consent needed? (d) What is encryption for? (e) What should a privacy policy explain? (f) What is a data breach? (g) Give 3 privacy practices. (h) Design data protection guidelines for a school storing student records.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data protection",
                statement: "Privacy, consent, security.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) EU data protection law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Legal requirement; respects rights.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Protects data in transit/storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Collection, use, sharing practices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Unauthorised access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Three valid practices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid school data protection guidelines.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Data protection and privacy practices.",
          },
        },
        {
          id: "cieict-u3-dp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'personal data'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Information that identifies an individual, e.g. name, address or medical records",
              },
              {
                id: "b",
                text: "Data that is encrypted",
              },
              {
                id: "c",
                text: "Any data stored on a computer",
              },
              {
                id: "d",
                text: "Only photographs of people",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personal data",
                statement: "Information identifying an individual.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personal data identifies or could identify a person.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Data identifying an individual",
          },
        },
        {
          id: "cieict-u3-dp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Under GDPR, within how many hours must a serious data breach be reported to the relevant authority?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 72,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDPR breach reporting",
                statement: "Report serious breaches within 72 hours.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GDPR requires notification within 72 hours of becoming aware.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "72 hours",
          },
        },
        {
          id: "cieict-u3-dp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A customer database has 10 records and an audit finds 3 contain inaccurate information. What percentage of records are inaccurate?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 30,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data accuracy",
                statement: "Inaccurate / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "3 / 10 x 100 = 30%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "30%",
          },
        },
        {
          id: "cieict-u3-dp-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In data protection, what does 'consent' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of data encryption",
              },
              {
                id: "b",
                text: "An agreement between two companies",
              },
              {
                id: "c",
                text: "Permission given by an individual to collect and use their personal data",
              },
              {
                id: "d",
                text: "A password protecting a database",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consent",
                statement: "Permission to collect/use personal data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consent is the legal/ethical basis for using someone's data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Permission to use personal data",
          },
        },
        {
          id: "cieict-u3-dp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should sensitive personal data be encrypted when stored or transmitted?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Encryption",
                statement: "Scrambles data to protect privacy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Encryption makes data unreadable to anyone without the key.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It protects data if devices are stolen or transmissions intercepted.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Renders data unreadable to unauthorised parties",
          },
        },
        {
          id: "cieict-u3-dp-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is NOT an example of personal data?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A person's medical history",
              },
              {
                id: "b",
                text: "A person's home address",
              },
              {
                id: "c",
                text: "A generic company phone number published on its website",
              },
              {
                id: "d",
                text: "A student's exam results",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personal data",
                statement: "Information identifying an individual.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A published company number does not identify an individual.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Generic company phone number",
          },
        },
        {
          id: "cieict-u3-dp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "An organisation discovers that customer data has been accessed without authorisation (a data breach). What should it do FIRST?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Change the company logo",
              },
              {
                id: "b",
                text: "Delete all the customer data immediately",
              },
              {
                id: "c",
                text: "Contain the breach, investigate, and report it as required by law",
              },
              {
                id: "d",
                text: "Ignore it if no money was stolen",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Breach response",
                statement: "Contain, investigate, report.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Breach must be contained, assessed and reported (e.g. within GDPR 72 hours).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Contain, investigate, report",
          },
        },
        {
          id: "cieict-u3-dp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A website has 100 registered users and 20 have opted out of marketing emails. How many users have NOT opted out?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 80,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Consent",
                statement: "Total minus opted out.",
              },
            ],
            steps: [
              {
                reasoning: "100 - 20 = 80 users.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80 users",
          },
        },
        {
          id: "cieict-u3-dp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the purpose of a privacy policy published by a website or app?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Privacy policy",
                statement: "Statement of how data is collected and used.",
              },
            ],
            steps: [
              {
                reasoning: "It informs users what data is collected and why.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It explains how data is stored, shared and protected, supporting informed consent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Explains data collection and use to users",
          },
        },
        {
          id: "cieict-u3-dp-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a survey of 200 app users, 150 say they read the privacy policy before signing up. What percentage read it?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 75,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage",
                statement: "Part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "150 / 200 x 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u3-dp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does encrypting data protect against?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It prevents unauthorised people from reading the data even if they intercept or steal it",
              },
              {
                id: "b",
                text: "It speeds up the internet",
              },
              {
                id: "c",
                text: "It makes files smaller",
              },
              {
                id: "d",
                text: "It deletes old files automatically",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encryption",
                statement: "Scrambles data to protect privacy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Encrypted data is unreadable without the decryption key.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unauthorised reading of data",
          },
        },
        {
          id: "cieict-u3-dp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A school wants to store student photos and contact details in an online database. Describe the data protection measures it should put in place.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data protection",
                statement: "Consent, security, minimisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Obtain consent from parents/students before collecting and storing the data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Keep data accurate, collect only what is needed, and store it securely (encrypted, password-protected).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limit access to authorised staff only and comply with data protection law such as GDPR.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Consent, security, limited access, legal compliance",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u3-dp-notes",
      title: "Data protection — notes",
      summary:
        "Personal data needs consent; encrypt sensitive data; understand privacy policies; GDPR governs use.",
      sections: [
        {
          heading: "Key idea",
          body: "Personal data is a responsibility — protect it legally and ethically.",
        },
        {
          heading: "Breach",
          body: "Contain, investigate, notify — then prevent recurrence.",
        },
      ],
    },
  ],
};
