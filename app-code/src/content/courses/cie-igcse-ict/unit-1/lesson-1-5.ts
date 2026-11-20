import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "cieict-u1-lesson-1-5",
  code: "1-5",
  title: "Digital Communication and Online Safety",
  goal: "I CAN use digital communication tools effectively and apply online safety practices.",
  standards: ["Cambridge IGCSE ICT 0417: digital communication", "0417 section 6: communication/safety"],
  
  vocabulary: [
    { term: "Digital communication", definition: "Exchanging information electronically." },
    { term: "Netiquette", definition: "Rules of polite online behaviour." },
    { term: "Phishing", definition: "Fake messages tricking users into revealing credentials." },
    { term: "Digital footprint", definition: "The trail of data you leave online." },
    { term: "Privacy settings", definition: "Controls deciding who sees your content." },
    { term: "Cyberbullying", definition: "Bullying using digital technologies." },
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
          { name: "Netiquette", statement: "polite, clear, respectful online behaviour" },
          { name: "Footprint", statement: "everything you post persists" },
        ],
        workedExample: {
          problem: "Should you post a photo with location tag showing your home address?",
          solution: "No — reveals location/privacy risk. Remove tag or blur location before posting.",
        },
      },
      questions: [
        {
          id: "cieict-u1-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is netiquette?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rules of polite online behaviour"
                    },
                    {
                              "id": "b",
                              "text": "A network cable"
                    },
                    {
                              "id": "c",
                              "text": "A type of software"
                    },
                    {
                              "id": "d",
                              "text": "A security protocol"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Netiquette",
                              "statement": "Online politeness rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Netiquette = online etiquette.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Online politeness rules"
},
        },
        {
          id: "cieict-u1-dc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a digital footprint and why does it matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Digital footprint",
                              "statement": "Online data trail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Footprint = everything you post/like/search.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Persists; affects reputation/opportunities.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Online trail; permanent impact"
},
        },
        {
          id: "cieict-u1-dc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is phishing and how do you recognise it? Give 3 red flags.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phishing",
                              "statement": "Deceptive credential theft."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phishing = fake messages for credentials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Red flags: urgency, generic greeting, suspicious link.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Three valid red flags.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Fake messages; urgency/links/greetings"
},
        },
        {
          id: "cieict-u1-dc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define digital communication, netiquette, phishing, digital footprint, privacy settings, cyberbullying. (b) What is cyberbullying? (c) How do you respond to cyberbullying? (d) Why use privacy settings? (e) What is a digital footprint? (f) Give 3 online safety practices. (g) What is netiquette? (h) Design online safety guidelines for a school.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Digital safety",
                              "statement": "Communication, footprint, threats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Bullying via digital means.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Don't respond, save evidence, report.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Control who sees content.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Online data trail.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid practices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Polite online behaviour rules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid school safety guidelines.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Digital communication and online safety."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-dc-notes",
      title: "Digital communication — notes",
      summary: "Netiquette for polite online behaviour; footprint is permanent; phishing/cyberbullying need vigilance.",
      sections: [
        { heading: "Key idea", body: "Think before posting — digital footprint is permanent." },
        { heading: "Safety", body: "Privacy settings + strong passwords + verify sources." },
      ],
    },
  ],
};
