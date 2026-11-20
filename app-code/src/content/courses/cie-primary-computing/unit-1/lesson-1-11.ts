import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cipc-u1-lesson-1-11",
  code: "1-11",
  title: "Stage 3 — Being Safe and Responsible Online",
  goal: "I CAN describe how to stay safe online and protect personal information.",
  standards: ["Cambridge Primary Computing 0059 Stage 3: digital literacy", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
  stage: 3,
  vocabulary: [
    { term: "E-safety", definition: "Staying safe when using the internet and devices." },
    { term: "Personal information", definition: "Private details — name, address, school, passwords." },
    { term: "Password", definition: "A secret code that protects your accounts." },
    { term: "Stranger", definition: "Someone you don't know — be careful online." },
    { term: "Cyberbullying", definition: "Being mean or hurtful to someone online." },
    { term: "Tell a trusted adult", definition: "Report anything online that worries or scares you." },
  ],
  concepts: [
    {
      id: "cipc-u1-s3-safe",
      title: "Online safety basics",
      skill: "Apply e-safety rules to protect personal information at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Protecting information",
            body: "Never share personal information online — full name, address, school, phone number, passwords. Use strong passwords mixing letters, numbers and symbols, and never share them. Keep devices locked with a PIN.",
          },
          {
            heading: "Safe behaviour",
            body: "Don't talk to strangers online or arrange to meet people you only know digitally. If something online makes you worried, upset or confused — stop and tell a trusted adult. Never post or share anything mean to others.",
          },
        ],
        keyFormulas: [
          { name: "Never share", statement: "personal info, passwords, photos" },
          { name: "Tell an adult", statement: "anything worrying online" },
        ],
        workedExample: {
          problem: "A game asks for your full name and school to 'win a prize'. What should you do?",
          solution: "Don't enter it — that's personal information. Real prizes don't need private details. Close it and tell a trusted adult.",
        },
      },
      questions: [
        {
          id: "cipc-u1-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is e-safety?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Staying safe when using the internet and devices"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer game"
                    },
                    {
                              "id": "c",
                              "text": "A password manager"
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
                              "name": "E-safety",
                              "statement": "Online safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "E-safety = safe internet/device use.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Staying safe online"
},
        },
        {
          id: "cipc-u1-es-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things you should never share online.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Personal information",
                              "statement": "Private details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. full name, address, school, passwords.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second valid private item.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. address and passwords"
},
        },
        {
          id: "cipc-u1-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why passwords should be strong and never shared, and what to do if a stranger messages you online.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "E-safety",
                              "statement": "Passwords and strangers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strong passwords harder to guess; sharing lets others access accounts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Don't reply to strangers; don't share info.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tell a trusted adult immediately.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Passwords protect accounts; ignore strangers, tell adult"
},
        },
        {
          id: "cipc-u1-es-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define e-safety. (b) List three types of personal information to protect. (c) What makes a password strong? (d) Why never share passwords? (e) What should you do if someone online asks to meet you? (f) What is cyberbullying and how should you respond? (g) Why tell a trusted adult about worrying content? (h) Give two good e-safety habits.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "E-safety",
                              "statement": "Info protection, passwords, strangers, bullying."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Safe internet/device use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Name, address, school/phone/passwords.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Letters+numbers+symbols, not guessable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Sharing lets others access your accounts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Refuse; never meet online strangers; tell adult.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Online meanness; don't respond, save evidence, tell adult.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Adults can help/block/report; you're not alone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Two habits: lock devices, think before posting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "E-safety rules: info, passwords, strangers, cyberbullying, trusted adults."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-es-notes",
      title: "Online safety — notes",
      summary: "Never share personal info or passwords. Ignore strangers; tell a trusted adult about anything worrying.",
      sections: [
        { heading: "Key idea", body: "Once posted online, information can be hard to take back." },
        { heading: "Rule", body: "Worried or unsure online? Stop and tell a trusted adult." },
      ],
    },
  ],
};
