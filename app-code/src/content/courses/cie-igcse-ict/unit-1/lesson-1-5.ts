import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "cieict-u1-lesson-1-5",
  code: "1-5",
  title: "Digital Communication and Online Safety",
  goal: "I CAN use digital communication tools effectively and apply online safety practices.",
  standards: [
    "Cambridge IGCSE ICT 0417: digital communication",
    "0417 section 6: communication/safety",
  ],

  vocabulary: [
    {
      term: "Digital communication",
      definition: "Exchanging information electronically.",
    },
    { term: "Netiquette", definition: "Rules of polite online behaviour." },
    {
      term: "Phishing",
      definition: "Fake messages tricking users into revealing credentials.",
    },
    {
      term: "Digital footprint",
      definition: "The trail of data you leave online.",
    },
    {
      term: "Privacy settings",
      definition: "Controls deciding who sees your content.",
    },
    {
      term: "Cyberbullying",
      definition: "Bullying using digital technologies.",
    },
  ],
  concepts: [
    {
      id: "cieict-u1-s5-comm",
      title: "Digital communication and safety",
      skill: "Communicate effectively online and stay safe at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "Digital communication",
            body: "Email, instant messaging, video calls, social media, forums. Choose appropriate tool for audience and purpose. Netiquette: be polite, clear, respect privacy, check before posting.",
          },
          {
            heading: "Online safety",
            body: "Protect personal information, use strong passwords, privacy settings, think before posting (footprint is permanent), recognise phishing, report cyberbullying, verify information sources.",
          },
        ],
        keyFormulas: [
          {
            name: "Netiquette",
            statement: "polite, clear, respectful online behaviour",
          },
          { name: "Footprint", statement: "everything you post persists" },
        ],
        workedExample: {
          problem:
            "Should you post a photo with location tag showing your home address?",
          solution:
            "No — reveals location/privacy risk. Remove tag or blur location before posting.",
        },
      },
      questions: [
        {
          id: "cieict-u1-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is netiquette?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of software",
              },
              {
                id: "b",
                text: "Rules of polite online behaviour",
              },
              {
                id: "c",
                text: "A network cable",
              },
              {
                id: "d",
                text: "A security protocol",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Netiquette",
                statement: "Online politeness rules.",
              },
            ],
            steps: [
              {
                reasoning: "Netiquette = online etiquette.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Online politeness rules",
          },
        },
        {
          id: "cieict-u1-dc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a digital footprint and why does it matter?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital footprint",
                statement: "Online data trail.",
              },
            ],
            steps: [
              {
                reasoning: "Footprint = everything you post/like/search.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Persists; affects reputation/opportunities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Online trail; permanent impact",
          },
        },
        {
          id: "cieict-u1-dc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is phishing and how do you recognise it? Give 3 red flags.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phishing",
                statement: "Deceptive credential theft.",
              },
            ],
            steps: [
              {
                reasoning: "Phishing = fake messages for credentials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Red flags: urgency, generic greeting, suspicious link.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Three valid red flags.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fake messages; urgency/links/greetings",
          },
        },
        {
          id: "cieict-u1-dc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define digital communication, netiquette, phishing, digital footprint, privacy settings, cyberbullying. (b) What is cyberbullying? (c) How do you respond to cyberbullying? (d) Why use privacy settings? (e) What is a digital footprint? (f) Give 3 online safety practices. (g) What is netiquette? (h) Design online safety guidelines for a school.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Digital safety",
                statement: "Communication, footprint, threats.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Bullying via digital means.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Don't respond, save evidence, report.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Control who sees content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Online data trail.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Three valid practices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Polite online behaviour rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid school safety guidelines.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Digital communication and online safety.",
          },
        },
        {
          id: "cieict-u1-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is phishing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A secure way to pay online",
              },
              {
                id: "b",
                text: "A virus that only affects printers",
              },
              {
                id: "c",
                text: "A type of social media post",
              },
              {
                id: "d",
                text: "Fake messages that trick users into revealing personal information or passwords",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phishing",
                statement: "Deceptive messages aiming to steal credentials.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phishing uses fake emails/messages to steal personal data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fake credential-theft messages",
          },
        },
        {
          id: "cieict-u1-dc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A user checks 10 emails and finds 3 are phishing attempts. What percentage of the emails were phishing?",
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
                name: "Percentage",
                statement: "Part / whole x 100.",
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
          id: "cieict-u1-dc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student posts 5 photos online every week for a whole year (52 weeks). How many photos does their digital footprint contain from this activity alone?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 260,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Digital footprint",
                statement: "Everything posted accumulates online.",
              },
            ],
            steps: [
              {
                reasoning: "5 x 52 = 260 photos.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "260 photos",
          },
        },
        {
          id: "cieict-u1-dc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the BEST first response if you are being cyberbullied?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Post the bully's details publicly",
              },
              {
                id: "b",
                text: "Do not respond, save the evidence and report/block the person",
              },
              {
                id: "c",
                text: "Delete your account immediately",
              },
              {
                id: "d",
                text: "Retaliate by posting hurtful comments back",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cyberbullying response",
                statement: "Don't retaliate; preserve evidence and report.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Not responding avoids escalation; evidence supports reporting.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Don't retaliate; save evidence and report",
          },
        },
        {
          id: "cieict-u1-dc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three ways a person can protect their personal information while using social media.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Privacy practices",
                statement: "Limit exposure of personal data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use privacy settings to restrict who can see posts/profile.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Avoid posting sensitive details (address, phone number, school).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use strong unique passwords and enable two-factor authentication.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Privacy settings, limit personal details, strong credentials",
          },
        },
        {
          id: "cieict-u1-dc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A login requires a password plus a one-time code sent to the user's phone. How many authentication factors are being used?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Two-factor authentication",
                statement: "Something you know + something you have.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Password (knowledge) + phone code (possession) = 2 factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2 factors",
          },
        },
        {
          id: "cieict-u1-dc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a file is shared with 'view-only' permission, what can the recipient do?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "See the content but not change it",
              },
              {
                id: "b",
                text: "Change the sharing settings",
              },
              {
                id: "c",
                text: "Edit the file freely",
              },
              {
                id: "d",
                text: "Delete the file",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Permissions",
                statement: "View/comment/edit control access levels.",
              },
            ],
            steps: [
              {
                reasoning: "View-only allows reading without editing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Can view but not edit",
          },
        },
        {
          id: "cieict-u1-dc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the BEST password practice?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Use the same simple password for every account",
              },
              {
                id: "b",
                text: "Use a long unique password for each important account",
              },
              {
                id: "c",
                text: "Share your password with trusted friends",
              },
              {
                id: "d",
                text: "Write your password on a sticky note",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Password hygiene",
                statement: "Long, unique, private passwords.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unique strong passwords limit damage if one is compromised.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Long unique passwords per account",
          },
        },
        {
          id: "cieict-u1-dc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you 'think before you post' online? Explain using the idea of a digital footprint.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital footprint",
                statement: "Permanent trail of online activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Posts persist and can be seen by future employers/universities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Content can damage reputation or reveal private information.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Footprint is permanent and affects reputation",
          },
        },
        {
          id: "cieict-u1-dc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student has 60 followers and a post is seen by 45 of them. What percentage of followers saw the post?",
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
                statement: "Seen / total x 100.",
              },
            ],
            steps: [
              {
                reasoning: "45 / 60 x 100 = 75%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u1-dc-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the STRONGEST password?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Tr0ub4dor&3x!kP",
              },
              {
                id: "b",
                text: "iloveyou",
              },
              {
                id: "c",
                text: "password123",
              },
              {
                id: "d",
                text: "qwerty",
              },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strong passwords",
                statement: "Long, mixed characters, not guessable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mixed case, numbers and symbols in a long string resist guessing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Long mixed-character password",
          },
        },
        {
          id: "cieict-u1-dc-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student receives an email claiming to be from their bank asking them to 'verify their account' by entering their password on a linked website. Describe what the student should do and why.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Phishing response",
                statement: "Recognise, avoid, report.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recognise red flags: urgency, request for password, suspicious link.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Do not click the link or enter any credentials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Report/delete the email and contact the bank through official channels if unsure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Spot phishing, don't click, report via official channel",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-dc-notes",
      title: "Digital communication — notes",
      summary:
        "Netiquette for polite online behaviour; footprint is permanent; phishing/cyberbullying need vigilance.",
      sections: [
        {
          heading: "Key idea",
          body: "Think before posting — digital footprint is permanent.",
        },
        {
          heading: "Safety",
          body: "Privacy settings + strong passwords + verify sources.",
        },
      ],
    },
  ],
};
