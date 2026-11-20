import type { Lesson } from "../../../types.ts";

export const lesson151: Lesson = {
  id: "ciealc-u4-lesson-4-1",
  code: "4-1",
  title: "The Internet and Its Uses",
  goal: "I CAN describe internet technologies, services and applications.",
  standards: ["Cambridge A Level Computer Science 9618: internet", "9618: network applications"],
  
  vocabulary: [
    { term: "Internet", definition: "Global network of interconnected computers." },
    { term: "WWW", definition: "System of interlinked web pages accessed via browsers." },
    { term: "URL", definition: "Uniform resource locator — web address." },
    { term: "HTTP/HTTPS", definition: "Protocols for web page transfer." },
    { term: "DNS", definition: "Domain name system — translates names to IP addresses." },
    { term: "ISP", definition: "Internet service provider — connects users to internet." },
  ],
  concepts: [
    {
      id: "ciealc-u4-s1-inet",
      title: "Internet technologies",
      skill: "Describe internet services at A Level.",
      lesson: {
        sections: [
          {
            heading: "Internet architecture",
            body: "ISP connects users to internet backbone. DNS translates domain names to IPs. HTTP/HTTPS transfers web pages. URL specifies resource location. WWW is just one internet service.",
          },
          {
            heading: "Internet services",
            body: "Email (SMTP/IMAP/POP3), file transfer (FTP/SFTP), VoIP (voice calls), streaming (video/music), cloud services (storage/compute), social media, e-commerce.",
          },
        ],
        keyFormulas: [
          { name: "DNS", statement: "name→IP translation" },
          { name: "HTTP/HTTPS", statement: "web page transfer" },
          { name: "URL", statement: "resource address" },
        ],
        workedExample: {
          problem: "Trace what happens when you type 'www.example.com' in a browser.",
          solution: "Browser queries DNS → gets IP address → sends HTTP request → server responds with HTML → browser renders page.",
        },
      },
      questions: [
        {
          id: "ciealc-u4-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is DNS?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Domain name system — translates names to IPs"
                    },
                    {
                              "id": "b",
                              "text": "A type of cable"
                    },
                    {
                              "id": "c",
                              "text": "A programming language"
                    },
                    {
                              "id": "d",
                              "text": "A web browser"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DNS",
                              "statement": "Name→IP translation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNS resolves domain names to IP addresses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Name→IP translation"
},
        },
        {
          id: "ciealc-u4-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is HTTP vs HTTPS?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HTTP/HTTPS",
                              "statement": "Web transfer protocols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HTTP=unencrypted; HTTPS=encrypted (TLS).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "HTTPS protects data in transit.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Unencrypted vs encrypted"
},
        },
        {
          id: "ciealc-u4-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between the internet and the World Wide Web?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Internet vs WWW",
                              "statement": "Network vs service."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internet=global network infrastructure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WWW=one service on internet (web pages).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Internet has many services beyond web.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Network vs web service"
},
        },
        {
          id: "ciealc-u4-in-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define internet, WWW, URL, HTTP/HTTPS, DNS, ISP. (b) What is a URL? (c) What is HTTP? (d) What is HTTPS? (e) What does DNS do? (f) What is an ISP? (g) Trace web page loading. (h) Design an online learning platform architecture.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Internet",
                              "statement": "Technologies, services."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Web resource address.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Web page transfer protocol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Encrypted version of HTTP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Name→IP translation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Connects users to internet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid trace: DNS→HTTP→server→render.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid platform architecture.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internet technologies and services."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-in-notes",
      title: "Internet — notes",
      summary: "DNS=name→IP; HTTP/HTTPS=web transfer; WWW=one internet service. ISP connects users.",
      sections: [
        { heading: "Key idea", body: "Internet=infrastructure; WWW=service. Many services beyond web." },
        { heading: "Security", body: "HTTPS encrypts web traffic — essential for sensitive data." },
      ],
    },
  ],
};
