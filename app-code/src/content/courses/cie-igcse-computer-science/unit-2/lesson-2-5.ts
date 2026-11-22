import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "ciecs-u2-lesson-2-5",
  code: "2-5",
  title: "The Internet and Its Uses",
  goal: "I CAN describe internet applications including e-commerce, cloud computing and social media.",
  standards: ["Cambridge IGCSE Computer Science 0478: the internet and its uses", "0478 section 5: internet uses"],
  
  vocabulary: [
    { term: "E-commerce", definition: "Buying/selling goods online." },
    { term: "Cloud computing", definition: "Storing/processing data on remote servers." },
    { term: "Social media", definition: "Platforms for sharing content and connecting." },
    { term: "IPTV", definition: "Television delivered over internet protocol." },
    { term: "VoIP", definition: "Voice calls over internet." },
    { term: "IoT", definition: "Internet of Things — connected smart devices." },
  ],
  concepts: [
    {
      id: "ciecs-u2-s5-inet",
      title: "Internet applications",
      skill: "Describe internet services and their implications at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Internet applications",
            body: "E-commerce (online shopping, banking), cloud computing (remote storage/processing), social media (sharing/connecting), IPTV (streaming TV), VoIP (internet calls), IoT (connected devices).",
          },
          {
            heading: "Implications",
            body: "Benefits: convenience, access, communication. Concerns: privacy, security, digital divide, misinformation, dependency on connectivity.",
          },
        ],
        keyFormulas: [
          { name: "E-commerce", statement: "online buying/selling" },
          { name: "Cloud", statement: "remote storage/processing" },
          { name: "IoT", statement: "connected smart devices" },
        ],
        workedExample: {
          problem: "Compare cloud storage vs local storage for a school.",
          solution: "Cloud: accessible anywhere, automatic backup, but needs internet + privacy concerns. Local: private, fast, but limited capacity + no remote access.",
        },
      },
      questions: [
        {
          id: "ciecs-u2-iu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is e-commerce?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of computer"
                    },
                    {
                              "id": "b",
                              "text": "A programming language"
                    },
                    {
                              "id": "c",
                              "text": "Buying/selling goods online"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "E-commerce",
                              "statement": "Online trade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "E-commerce = internet-based buying/selling.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Online buying/selling"
},
        },
        {
          id: "ciecs-u2-iu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cloud computing? Give one benefit and one concern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cloud computing",
                              "statement": "Remote storage/processing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data stored/processed on remote servers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Benefit: accessibility; concern: privacy/security.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Remote servers; access vs privacy"
},
        },
        {
          id: "ciecs-u2-iu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three internet applications and describe one benefit and one risk of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Internet uses",
                              "statement": "Applications + implications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. social media: connects people but privacy risks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. cloud: accessible but security concerns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. e-commerce: convenient but fraud risk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Three applications with implications"
},
        },
        {
          id: "ciecs-u2-iu-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define e-commerce, cloud computing, social media, IPTV, VoIP, IoT. (b) What is the digital divide? (c) What is IPTV vs traditional TV? (d) What is VoIP? (e) What is the Internet of Things? (f) Give 3 benefits of internet use. (g) Give 3 risks of internet use. (h) Should schools provide laptops or rely on students' own devices? Evaluate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Internet uses",
                              "statement": "Applications and implications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Gap between those with/without access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Internet-delivered vs broadcast TV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Voice calls over internet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Connected smart devices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid benefits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Three valid risks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internet applications and societal implications."
},
        },
        {
          id: "ciecs-u2-iu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of e-commerce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formatting a spreadsheet" },
              { id: "b", text: "Installing a local driver" },
              { id: "c", text: "Printing a document" },
              { id: "d", text: "Buying books through an online store" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "E-commerce", statement: "Buying and selling goods online." },
            ],
            steps: [
              { reasoning: "Online shopping is a common form of e-commerce.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Buying books online",
          },
        },
        {
          id: "ciecs-u2-iu-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is cloud computing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A physical network cable" },
              { id: "b", text: "A type of monitor" },
              { id: "c", text: "Keeping all files only on a local disk" },
              { id: "d", text: "Storing and processing data on remote servers accessed over the internet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cloud computing", statement: "Remote storage and processing services." },
            ],
            steps: [
              { reasoning: "Cloud services run on remote servers and are accessed online.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Remote servers over the internet",
          },
        },
        {
          id: "ciecs-u2-iu-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a concern associated with social media?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes the need for passwords" },
              { id: "b", text: "It always improves privacy" },
              { id: "c", text: "It can spread misinformation and expose private information" },
              { id: "d", text: "It guarantees accurate news" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Social media risks", statement: "Privacy and misinformation are key concerns." },
            ],
            steps: [
              { reasoning: "Social media can spread false information and personal data may be exposed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Misinformation and privacy exposure",
          },
        },
        {
          id: "ciecs-u2-iu-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is IPTV?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A wired network protocol" },
              { id: "b", text: "A type of printer" },
              { id: "c", text: "Television delivered over the internet" },
              { id: "d", text: "A database query" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IPTV", statement: "Internet Protocol television." },
            ],
            steps: [
              { reasoning: "IPTV streams television programmes over IP networks.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Television over the internet",
          },
        },
        {
          id: "ciecs-u2-iu-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which service uses the internet to transmit voice calls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SMTP" },
              { id: "b", text: "VoIP" },
              { id: "c", text: "HTTP" },
              { id: "d", text: "DNS" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "VoIP", statement: "Voice over Internet Protocol." },
            ],
            steps: [
              { reasoning: "VoIP converts voice into data packets sent over the internet.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** VoIP",
          },
        },
        {
          id: "ciecs-u2-iu-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does the Internet of Things (IoT) describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Everyday devices connected to the internet and each other" },
              { id: "b", text: "A single large computer network" },
              { id: "c", text: "Only social media websites" },
              { id: "d", text: "A type of database" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IoT", statement: "Networked smart devices." },
            ],
            steps: [
              { reasoning: "IoT includes sensors and smart devices that communicate online.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Connected smart devices",
          },
        },
        {
          id: "ciecs-u2-iu-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A school has $240$ students and $75$% use cloud storage. How many students use cloud storage?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 180 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Percentage count", statement: "Part = total × percentage." },
            ],
            steps: [
              { reasoning: "240 * 0.75 = 180 students.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "180",
          },
        },
        {
          id: "ciecs-u2-iu-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An IPTV stream uses $5$ Mbps for $2$ hours. How many megabits are transferred?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 36000 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Data volume", statement: "Megabits = Mbps × seconds." },
            ],
            steps: [
              { reasoning: "2 hours = 7200 seconds; 5 * 7200 = 36000 megabits.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "36000",
          },
        },
        {
          id: "ciecs-u2-iu-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A video stream uses $4$ Mbps for $90$ minutes. (a) How many megabits are transferred? (b) If $8$ megabits equal $1$ MB, how many MB is that?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 21600 },
              { label: "b", answer: 2700 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stream size", statement: "Convert time to seconds, then bits to MB." },
            ],
            steps: [
              { reasoning: "90 minutes = 5400 seconds; 4 * 5400 = 21600 megabits.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "21600 / 8 = 2700 MB.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 21600; (b) 2700",
          },
        },
        {
          id: "ciecs-u2-iu-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An online shop receives $500$ orders in a week and $8$% are returned. Each return costs the shop 12 dollars to process. (a) How many orders are returned? (b) What is the total return-processing cost?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 480 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "E-commerce calculation", statement: "Returns = orders × rate; cost = returns × cost per return." },
            ],
            steps: [
              { reasoning: "500 * 0.08 = 40 returned orders.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "40 * 12 = 480 dollars.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 40; (b) 480",
          },
        },
        {
          id: "ciecs-u2-iu-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A company gives $25$ employees $20$ GB of cloud storage each. Using $1$ GB = $1,000$ MB: (a) What is the total cloud capacity in GB? (b) What is it in MB? (c) If each employee uses $10$% of their quota, how many GB are used in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500 },
              { label: "b", answer: 500000 },
              { label: "c", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cloud capacity", statement: "Total capacity = users × quota; usage = capacity × percentage." },
            ],
            steps: [
              { reasoning: "25 * 20 = 500 GB.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "500 * 1000 = 500000 MB.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Each uses 2 GB, so total use = 25 * 2 = 50 GB.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 500; (b) 500000; (c) 50",
          },
        },
        {
          id: "ciecs-u2-iu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether a school should move student files to cloud storage and use social media for communication. Discuss benefits, risks, the digital divide and one mitigation strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Internet implications", statement: "Weigh convenience against privacy, security and equity." },
            ],
            steps: [
              { reasoning: "Benefits include remote access, automatic backup and easier communication.", marks: 1, markCode: "M" },
              { reasoning: "Risks include privacy exposure, security breaches and dependence on connectivity.", marks: 1, markCode: "M" },
              { reasoning: "The digital divide means not all students have equal access or devices.", marks: 1, markCode: "M" },
              { reasoning: "A valid mitigation is given, such as privacy settings, school-managed accounts or blended access options.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balanced evaluation of cloud and social-media use",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u2-iu-notes",
      title: "Internet uses — notes",
      summary: "E-commerce, cloud, social media, IPTV, VoIP, IoT — each with benefits and risks.",
      sections: [
        { heading: "Key idea", body: "Internet transforms communication, commerce and access to information." },
        { heading: "Implications", body: "Weigh convenience against privacy, security and equity." },
      ],
    },
  ],
};
