import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edxpc-u4-lesson-4-1",
  code: "4-1",
  title: "Staying Safe Online",
  goal: "I CAN stay safe when using the internet and devices.",
  standards: ["Y3-Y6 Online safety", "E-safety"],
  vocabulary: [
    {
      term: "E-safety",
      definition:
        "Staying safe when using electronic devices and the internet.",
    },
    {
      term: "Personal information",
      definition: "Details about you — name, address, school, photos.",
    },
    {
      term: "Stranger danger",
      definition: "The risk of harm from people you do not know.",
    },
    {
      term: "Privacy settings",
      definition: "Controls that decide who can see your information online.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u4-safety",
      title: "Online Safety Rules",
      skill: "Apply basic e-safety rules.",
      lesson: {
        sections: [
          {
            heading: "The golden rules",
            body: "1. Never share personal information online — your full name, address, school, phone number or passwords. 2. Never arrange to meet someone you met online without a trusted adult. 3. Tell a trusted adult if anything makes you feel uncomfortable. 4. Use strong passwords and keep them secret. 5. Be kind online — think before you post.",
          },
          {
            heading: "Why these rules",
            body: "People online may not be who they say they are. Someone pretending to be a child could be an adult with bad intentions. Personal information can be used to find you or steal your identity. Being kind prevents bullying and keeps the internet a good place.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Someone in a game asks for your address. What do you do?",
          solution: "Refuse, do not share, tell a trusted adult.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-safe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is safe to share online?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your home address" },
              { id: "b", text: "Your favourite colour" },
              { id: "c", text: "Your school name and photo" },
              { id: "d", text: "Your password" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personal information",
                statement: "Never share personal details online.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Favourite colour is not identifying personal information.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Favourite colour",
            commonErrors: ["Sharing identifying information."],
          },
        },
        {
          id: "edxpc-u4-safe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you do if someone online asks to meet you in person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meet them alone" },
              { id: "b", text: "Tell a trusted adult and do not go" },
              { id: "c", text: "Ask your friends to come" },
              { id: "d", text: "Go secretly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meeting strangers",
                statement:
                  "Never meet online strangers without a trusted adult.",
              },
            ],
            steps: [
              {
                reasoning: "Tell adult, do not meet alone.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Tell adult, don't go",
            commonErrors: ["Meeting or going secretly."],
          },
        },
        {
          id: "edxpc-u4-safe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three things you should never share online.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Private information",
                statement: "Personal details stay private.",
              },
            ],
            steps: [
              {
                reasoning: "Personal details like address or phone number.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Passwords or PINs.", marks: 1, markCode: "M" },
              {
                reasoning: "Photos showing where you live or go to school.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. address, password, school photos",
            commonErrors: ["Sharing identifying details."],
          },
        },
        {
          id: "edxpc-u4-safe-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why it is dangerous to share personal information with strangers online.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Online stranger danger",
                statement: "Strangers online may not be who they claim.",
              },
            ],
            steps: [
              {
                reasoning: "People online may lie about who they are.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Information can be used to find or harm you.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Once shared, information cannot be taken back.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Strangers may lie + info can be misused + permanent",
            commonErrors: ["Thinking online people are always honest."],
          },
        },
      ],
    },
    {
      id: "edxpc-u4-privacy",
      title: "Privacy and Passwords",
      skill: "Manage privacy settings and create strong passwords.",
      lesson: {
        sections: [
          {
            heading: "Privacy settings",
            body: "Most apps and games have privacy settings that control who can see your information. Check settings so only friends or approved people can see your photos and posts. Parents can help set these up. Private accounts are safer than public ones.",
          },
          {
            heading: "Strong passwords",
            body: "A good password is long, mixes letters, numbers and symbols, and is not obvious (not your name or '1234'). Never share passwords — even with friends. Use different passwords for different accounts so one leak does not expose everything. A password manager app can help remember them.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which password is stronger: 'cat123' or 'Xk9#mP2$vL'?",
          solution: "'Xk9#mP2$vL' — longer, mixed characters, not guessable.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-priv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do privacy settings control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How fast the internet is" },
              { id: "b", text: "Who can see your information" },
              { id: "c", text: "The screen brightness" },
              { id: "d", text: "Battery life" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Privacy settings",
                statement: "Controls who can see your information.",
              },
            ],
            steps: [
              {
                reasoning: "Privacy settings control visibility.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Who sees your info",
            commonErrors: ["Thinking privacy settings affect speed."],
          },
        },
        {
          id: "edxpc-u4-priv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the strongest password?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "password" },
              { id: "b", text: "Fluffy2024!" },
              { id: "c", text: "123456" },
              { id: "d", text: "yourname" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong passwords",
                statement: "Long, mixed characters, not guessable.",
              },
            ],
            steps: [
              {
                reasoning: "'Fluffy2024!' is long with mixed characters.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fluffy2024!",
            commonErrors: ["Choosing simple or guessable passwords."],
          },
        },
        {
          id: "edxpc-u4-priv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three rules for good password safety.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Password safety",
                statement: "Keep passwords secret and strong.",
              },
            ],
            steps: [
              {
                reasoning: "Never share passwords with anyone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use different passwords for different accounts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Make passwords long and mixed (letters, numbers, symbols).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Secret, unique, strong",
            commonErrors: ["Sharing or reusing passwords."],
          },
        },
        {
          id: "edxpc-u4-priv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is a private account safer than a public one on social media?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Private vs public",
                statement: "Private limits who can see your content.",
              },
            ],
            steps: [
              {
                reasoning: "Private = only approved people see posts/photos.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Public = anyone can see, including strangers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Private reduces risk of strangers contacting or harming you.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Only friends see content vs anyone can see",
            commonErrors: ["No clear difference explained."],
          },
        },
      ],
    },
    {
      id: "edxpc-u4-cyberbullying",
      title: "Cyberbullying and Being Kind Online",
      skill: "Recognise cyberbullying and respond safely.",
      lesson: {
        sections: [
          {
            heading: "What is cyberbullying?",
            body: "Cyberbullying is bullying that happens online — mean messages, sharing embarrassing photos, leaving someone out of group chats, or spreading rumours on social media. It can happen any time and reach a huge audience quickly. It is just as hurtful as face-to-face bullying.",
          },
          {
            heading: "What to do",
            body: "Do not respond to bullies — it often makes things worse. Save evidence (screenshots). Block the person. Tell a trusted adult — parent, teacher or another adult. If you see someone being bullied, support them and tell an adult. Be kind online — you can make someone's day better just by being friendly.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Someone sends you a mean message. What do you do?",
          solution: "Do not reply, save it, block them, tell an adult.",
        },
      },
      questions: [
        {
          id: "edxpc-u4-bully-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cyberbullying?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playing games online" },
              { id: "b", text: "Bullying that happens online" },
              { id: "c", text: "Buying things online" },
              { id: "d", text: "Watching videos" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cyberbullying",
                statement: "Bullying that happens online.",
              },
            ],
            steps: [
              {
                reasoning: "Cyberbullying = online bullying.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Online bullying",
            commonErrors: ["Thinking any online activity is bullying."],
          },
        },
        {
          id: "edxpc-u4-bully-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the best first step if someone sends you a mean message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Send a mean message back" },
              { id: "b", text: "Do not reply, save it, tell an adult" },
              { id: "c", text: "Delete it and forget" },
              { id: "d", text: "Share it with friends" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Responding to bullying",
                statement: "Do not respond, save evidence, tell an adult.",
              },
            ],
            steps: [
              {
                reasoning: "Don't reply, save, tell adult.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Don't reply, save, tell adult",
            commonErrors: ["Responding or sharing it."],
          },
        },
        {
          id: "edxpc-u4-bully-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three things you can do if you see someone being cyberbullied.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bystander action",
                statement: "Support the victim and tell an adult.",
              },
            ],
            steps: [
              {
                reasoning: "Support the person being bullied.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Tell a trusted adult.", marks: 1, markCode: "M" },
              {
                reasoning: "Do not join in or share the bullying content.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Support victim, tell adult, don't join in",
            commonErrors: ["Joining in or ignoring completely."],
          },
        },
        {
          id: "edxpc-u4-bully-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'just ignore it' is not always enough advice for cyberbullying victims.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cyberbullying impact",
                statement: "Bullying can be severe and needs adult support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cyberbullying can be relentless — messages arrive 24/7.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It can be public — huge audience, hard to escape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Victims need support — adults can help block, report, intervene.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Relentless + public + needs adult help",
            commonErrors: ["Thinking ignoring always solves it."],
          },
        },
      ],
    },
  ],
};
