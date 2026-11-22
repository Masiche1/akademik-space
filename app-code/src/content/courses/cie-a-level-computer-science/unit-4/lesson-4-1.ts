import type { Lesson } from "../../../types.ts";

export const lesson151: Lesson = {
  id: "ciealc-u4-lesson-4-1",
  code: "4-1",
  title: "The Internet and Its Uses",
  goal: "I CAN describe internet technologies, services and applications.",
  standards: [
    "Cambridge A Level Computer Science 9618: internet",
    "9618: network applications",
  ],

  vocabulary: [
    {
      term: "Internet",
      definition: "Global network of interconnected computers.",
    },
    {
      term: "WWW",
      definition: "System of interlinked web pages accessed via browsers.",
    },
    { term: "URL", definition: "Uniform resource locator — web address." },
    { term: "HTTP/HTTPS", definition: "Protocols for web page transfer." },
    {
      term: "DNS",
      definition: "Domain name system — translates names to IP addresses.",
    },
    {
      term: "ISP",
      definition: "Internet service provider — connects users to internet.",
    },
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
          problem:
            "Trace what happens when you type 'www.example.com' in a browser.",
          solution:
            "Browser queries DNS → gets IP address → sends HTTP request → server responds with HTML → browser renders page.",
        },
      },
      questions: [
        {
          id: "ciealc-u4-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is DNS?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Domain name system — translates names to IPs",
              },
              {
                id: "b",
                text: "A web browser",
              },
              {
                id: "c",
                text: "A programming language",
              },
              {
                id: "d",
                text: "A type of cable",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNS",
                statement: "Name→IP translation.",
              },
            ],
            steps: [
              {
                reasoning: "DNS resolves domain names to IP addresses.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Name→IP translation",
          },
        },
        {
          id: "ciealc-u4-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is HTTP vs HTTPS?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HTTP/HTTPS",
                statement: "Web transfer protocols.",
              },
            ],
            steps: [
              {
                reasoning: "HTTP=unencrypted; HTTPS=encrypted (TLS).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "HTTPS protects data in transit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unencrypted vs encrypted",
          },
        },
        {
          id: "ciealc-u4-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between the internet and the World Wide Web?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internet vs WWW",
                statement: "Network vs service.",
              },
            ],
            steps: [
              {
                reasoning: "Internet=global network infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "WWW=one service on internet (web pages).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Internet has many services beyond web.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Network vs web service",
          },
        },
        {
          id: "ciealc-u4-in-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define internet, WWW, URL, HTTP/HTTPS, DNS, ISP. (b) What is a URL? (c) What is HTTP? (d) What is HTTPS? (e) What does DNS do? (f) What is an ISP? (g) Trace web page loading. (h) Design an online learning platform architecture.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Internet",
                statement: "Technologies, services.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Web resource address.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Web page transfer protocol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Encrypted version of HTTP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Name→IP translation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Connects users to internet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid trace: DNS→HTTP→server→render.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid platform architecture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Internet technologies and services.",
          },
        },
        {
          id: "ciealc-u4-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a URL identify?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The owner of an internet service provider" },
              { id: "b", text: "The encryption key used by a server" },
              { id: "c", text: "The physical path of a network cable" },
              { id: "d", text: "The address of a resource on the web" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "URL",
                statement: "Address of a web resource.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A URL specifies the location of a resource such as a web page.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "The address of a resource on the web",
          },
        },
        {
          id: "ciealc-u4-in-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits are used to represent one IPv4 address? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IPv4 address",
                statement: "32-bit address.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "An IPv4 address contains four 8-bit octets, so $4 \\times 8 = 32$ bits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "ciealc-u4-in-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give the default TCP port numbers for HTTP and HTTPS. Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80 },
              { label: "b", answer: 443 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HTTP/HTTPS ports",
                statement: "80 for HTTP, 443 for HTTPS.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "HTTP normally uses port 80.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "HTTPS normally uses port 443.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "HTTP: 80; HTTPS: 443",
          },
        },
        {
          id: "ciealc-u4-in-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "When a DNS resolver checks the root, top-level domain and authoritative name servers for one domain name, how many server types are queried, and how many IP addresses are returned if the record is unique? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "DNS resolution",
                statement: "Root, TLD and authoritative lookup.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The resolver consults root, TLD and authoritative servers in the lookup chain.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "A unique domain record returns one IP address.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3 server types; 1 IP address",
          },
        },
        {
          id: "ciealc-u4-in-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which protocol is primarily used to send email from a client to a mail server?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "FTP" },
              { id: "b", text: "DNS" },
              { id: "c", text: "SMTP" },
              { id: "d", text: "HTTP" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SMTP",
                statement: "Protocol for sending email.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SMTP is used to submit and transfer email messages.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "SMTP",
          },
        },
        {
          id: "ciealc-u4-in-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement correctly distinguishes the internet from the World Wide Web?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The internet is the network infrastructure; the WWW is one service that uses it",
              },
              {
                id: "b",
                text: "The internet and WWW are two names for exactly the same system",
              },
              {
                id: "c",
                text: "The WWW is the physical cables; the internet is the web pages",
              },
              {
                id: "d",
                text: "The WWW connects users to ISPs; the internet stores web pages",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Internet vs WWW",
                statement: "Infrastructure vs service.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The internet provides connectivity; the WWW is an application layer service.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Internet is infrastructure; WWW is one service",
          },
        },
        {
          id: "ciealc-u4-in-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A user enters a domain name but the browser cannot display the website. Which failure would most directly prevent the browser from finding the server's IP address?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The webpage uses HTTPS" },
              { id: "b", text: "The HTML contains an image" },
              { id: "c", text: "The user has a mouse connected" },
              { id: "d", text: "The DNS lookup fails" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNS dependency",
                statement: "Name resolution precedes connection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "DNS translates the domain name to an IP address; without it, the server cannot be located.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "The DNS lookup fails",
          },
        },
        {
          id: "ciealc-u4-in-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is HTTPS preferred over HTTP when submitting a password on a website?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the webpage load more slowly" },
              {
                id: "b",
                text: "It stores the password permanently on the client",
              },
              { id: "c", text: "It encrypts the data while it is transferred" },
              { id: "d", text: "It removes the need for a domain name" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HTTPS security",
                statement: "Encrypts data in transit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HTTPS uses TLS to protect credentials and other sensitive data during transmission.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "It encrypts the data while it is transferred",
          },
        },
        {
          id: "ciealc-u4-in-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An IPv4 address has four octets. Give the number of possible values in one octet and the total number of bits in the complete address. Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 256 },
              { label: "b", answer: 32 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "IPv4 octet range",
                statement: "Each octet stores 0-255.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "An octet has $2^8 = 256$ possible values from 0 to 255.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Four 8-bit octets give $4 \\times 8 = 32$ bits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "256 values per octet; 32 bits total",
          },
        },
        {
          id: "ciealc-u4-in-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the main components of the URL https://shop.example.com/books/978123 and explain the role of each component.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "URL components",
                statement: "Scheme, host, path and optional port/query.",
              },
            ],
            steps: [
              {
                reasoning: "https is the scheme identifying the protocol used.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "shop.example.com is the host/domain identifying the server.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "/books/978123 is the path identifying the resource within the host.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Scheme, host/domain and resource path",
          },
        },
        {
          id: "ciealc-u4-in-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Trace the process that occurs when a user enters https://www.example.com into a browser, from DNS resolution to displaying the page. Explain why HTTPS is used.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Web request sequence",
                statement: "DNS, connection, request and rendering.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The browser uses DNS to resolve www.example.com to an IP address.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It opens a secure TCP connection, normally to port 443.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "TLS negotiation establishes encryption before HTTP data is exchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An HTTPS request is sent and the server returns the requested web content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HTTPS protects the request and response from being read or altered in transit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "DNS, secure connection, TLS, HTTPS request, render",
          },
        },
        {
          id: "ciealc-u4-in-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school wants to provide email, cloud storage, video lessons and an online shop through one ISP connection. Evaluate the internet technologies and services needed, including DNS, HTTP/HTTPS, SMTP, cloud services and e-commerce.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Internet services",
                statement: "Service selection and secure access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "DNS is required to translate the school's domain names into IP addresses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HTTPS protects web pages, login details and payment information during transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "SMTP and suitable receiving protocols support email delivery and retrieval.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cloud storage and streaming services can host lesson materials and video content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The online shop needs secure transactions, reliable hosting and appropriate web services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The evaluation recognises bandwidth, availability, security and maintenance demands.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "DNS, secure web, email, cloud storage/streaming and e-commerce",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-in-notes",
      title: "Internet — notes",
      summary:
        "DNS=name→IP; HTTP/HTTPS=web transfer; WWW=one internet service. ISP connects users.",
      sections: [
        {
          heading: "Key idea",
          body: "Internet=infrastructure; WWW=service. Many services beyond web.",
        },
        {
          heading: "Security",
          body: "HTTPS encrypts web traffic — essential for sensitive data.",
        },
      ],
    },
  ],
};
