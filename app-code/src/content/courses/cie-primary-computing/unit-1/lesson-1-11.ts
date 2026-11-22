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
                              "text": "A password manager"
                    },
                    {
                              "id": "b",
                              "text": "Staying safe when using the internet and devices"
                    },
                    {
                              "id": "c",
                              "text": "A network cable"
                    },
                    {
                              "id": "d",
                              "text": "A type of computer game"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "cipc-u1-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is personal information you should NOT share online?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A funny joke" },
            { id: "b", text: "Your home address" },
            { id: "c", text: "Your favourite colour" },
            { id: "d", text: "Your favourite game" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Personal information", statement: "Private details to protect." }],
            steps: [
              { reasoning: "Home address is private personal information; the others are safe to share.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Your home address",
          },
        },
        {
          id: "cipc-u1-es-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cyberbullying? What should you do if you see it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cyberbullying", statement: "Being mean or hurtful online." }],
            steps: [
              { reasoning: "Cyberbullying = using digital devices to bully or upset someone.", marks: 1, markCode: "M" },
              { reasoning: "Don't join in; tell a trusted adult.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Online bullying; tell a trusted adult.",
          },
        },
        {
          id: "cipc-u1-es-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game says 'enter your full name and school to win a prize'. Should you do it? Explain in two sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Recognising risks", statement: "Personal info requests are suspicious." }],
            steps: [
              { reasoning: "No — full name and school are personal information that should stay private.", marks: 1, markCode: "M" },
              { reasoning: "Close it and tell a trusted adult; real prizes don't need private details.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — never share name/school; tell an adult.",
          },
        },
        {
          id: "cipc-u1-es-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a strong password?",
          response: { type: "mcq", choices: [
            { id: "a", text: "12345" },
            { id: "b", text: "password" },
            { id: "c", text: "yourname" },
            { id: "d", text: "Cat$9!Blue" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Strong passwords", statement: "Mix letters, numbers, symbols; not guessable." }],
            steps: [
              { reasoning: "Cat$9!Blue mixes letters, numbers and symbols and is not easily guessed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Cat$9!Blue",
          },
        },
        {
          id: "cipc-u1-es-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why you should never share your password, even with a friend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Password safety", statement: "Passwords protect accounts." }],
            steps: [
              { reasoning: "Passwords protect your accounts from being accessed by others.", marks: 1, markCode: "M" },
              { reasoning: "If shared, someone else could use it — even accidentally or if they lose it.", marks: 1, markCode: "M" },
              { reasoning: "Keep passwords secret; only you should know them.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Passwords keep accounts safe; sharing risks access by others.",
          },
        },
        {
          id: "cipc-u1-es-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Someone you only know online asks to meet you after school. What is the safe response?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ask them to bring sweets" },
            { id: "b", text: "Say no and tell a trusted adult" },
            { id: "c", text: "Agree but tell no one" },
            { id: "d", text: "Meet in a public place alone" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Stranger danger", statement: "Never meet online-only strangers." }],
            steps: [
              { reasoning: "Never arrange to meet people you only know digitally.", marks: 1, markCode: "M" },
              { reasoning: "Refuse and tell a trusted adult immediately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Say no and tell a trusted adult",
          },
        },
        {
          id: "cipc-u1-es-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What should you do if something online makes you worried, upset or confused? Explain why telling an adult helps.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reporting worries", statement: "Stop and tell a trusted adult." }],
            steps: [
              { reasoning: "Stop what you are doing and close the page/app.", marks: 1, markCode: "M" },
              { reasoning: "Tell a trusted adult (parent, teacher) what happened.", marks: 1, markCode: "M" },
              { reasoning: "Adults can help block/report and you are not alone dealing with it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stop, close it, tell a trusted adult.",
          },
        },
        {
          id: "cipc-u1-es-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two good e-safety habits when using a device.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "E-safety habits", statement: "Lock devices, think before posting." }],
            steps: [
              { reasoning: "First valid habit: lock device with PIN, use strong passwords.", marks: 1, markCode: "M" },
              { reasoning: "Second valid habit: think before posting, don't share personal info.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. lock device; think before posting.",
          },
        },
        {
          id: "cipc-u1-es-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it risky to post photos of yourself online? Give one reason.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Photo safety", statement: "Photos can be copied and shared." }],
            steps: [
              { reasoning: "Once posted, photos can be copied, shared or seen by strangers.", marks: 1, markCode: "M" },
              { reasoning: "They can reveal personal information like where you live or go to school.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Photos can be copied/shared; may reveal personal info.",
          },
        },
        {
          id: "cipc-u1-es-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which message is a likely scam/phishing attempt?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'Your music playlist updated'" },
            { id: "b", text: "'Your friend shared a photo with you'" },
            { id: "c", text: "'New game level available'" },
            { id: "d", text: "'You won a prize! Send your password to claim it'" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Spotting scams", statement: "Prizes asking for passwords are fake." }],
            steps: [
              { reasoning: "Real organisations never ask for passwords.", marks: 1, markCode: "M" },
              { reasoning: "'Win a prize, send password' is a classic scam.", marks: 1, markCode: "M" },
              { reasoning: "Correctly identified the phishing attempt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Prize message asking for password",
          },
        },
        {
          id: "cipc-u1-es-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design three rules for a safe class group chat that everyone should follow.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Group chat rules", statement: "Respectful, private, adult-aware." }],
            steps: [
              { reasoning: "Rule about respecting others — no mean messages/cyberbullying.", marks: 1, markCode: "M" },
              { reasoning: "Rule about privacy — don't share personal info or photos.", marks: 1, markCode: "M" },
              { reasoning: "Rule about reporting — tell an adult about anything worrying.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. be kind; keep info private; tell an adult if worried.",
          },
        },
        {
          id: "cipc-u1-es-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define e-safety. (b) List three types of personal information to protect. (c) What makes a password strong? (d) Why never share passwords? (e) What should you do if someone online asks to meet you? (f) What is cyberbullying and how should you respond? (g) Why tell a trusted adult about worrying content? (h) Give two good e-safety habits.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "E-safety", statement: "Info protection, passwords, strangers, bullying, adults." }],
            steps: [
              { reasoning: "(a) Safe internet/device use.", marks: 1, markCode: "M" },
              { reasoning: "(b) Name, address, school/phone/passwords.", marks: 1, markCode: "M" },
              { reasoning: "(c) Letters+numbers+symbols, not guessable.", marks: 1, markCode: "M" },
              { reasoning: "(d) Sharing lets others access your accounts.", marks: 1, markCode: "M" },
              { reasoning: "(e) Refuse; never meet online strangers; tell adult.", marks: 1, markCode: "M" },
              { reasoning: "(f) Online meanness; don't respond, save evidence, tell adult.", marks: 1, markCode: "M" },
              { reasoning: "(g) Adults can help/block/report; you're not alone.", marks: 1, markCode: "M" },
              { reasoning: "(h) Two habits: lock devices, think before posting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E-safety rules: info, passwords, strangers, cyberbullying, trusted adults.",
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
