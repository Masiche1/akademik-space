import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "ecs11-u5-lesson-5-2",
  code: "5-2",
  title: "Network Protocols",
  goal: "I CAN explain key protocols and their functions.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Networks"],
  vocabulary: [
    {
      term: "TCP",
      definition: "Transmission Control Protocol — reliable delivery.",
    },
    { term: "UDP", definition: "User Datagram Protocol — fast, unreliable." },
    {
      term: "HTTP/HTTPS",
      definition: "Hypertext Transfer Protocol — web pages.",
    },
    { term: "FTP", definition: "File Transfer Protocol." },
    { term: "SMTP/POP3/IMAP", definition: "Email protocols." },
  ],
  concepts: [
    {
      id: "ecs11-u5-protocols2",
      title: "TCP vs UDP and Application Protocols",
      skill: "Distinguish TCP/UDP and identify application protocols.",
      lesson: {
        sections: [
          {
            heading: "TCP vs UDP",
            body: "**TCP**: connection-oriented — establishes connection, reliable ordered delivery, retransmits lost packets, error checking. **UDP**: connectionless — no setup, fast but unreliable, no retransmission, no ordering.\n\n**Use TCP**: web, email, file transfer — need reliability. **Use UDP**: streaming, gaming, DNS — speed over reliability.",
          },
          {
            heading: "Application protocols",
            body: "**HTTP/HTTPS**: web pages — HTTPS adds TLS encryption. **FTP**: file transfer — control + data connections. **SMTP**: send email; **POP3/IMAP**: receive email. **DNS**: name resolution. **DHCP**: assigns IP addresses automatically.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Video call needs low latency, tolerates lost frames. TCP or UDP?",
          solution: "UDP — speed matters more than perfect delivery.",
        },
      },
      questions: [
        {
          id: "ecs11-u5-protocols2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of TCP over UDP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reliable ordered delivery" },
              { id: "b", text: "Faster speed" },
              { id: "c", text: "No overhead" },
              { id: "d", text: "Simpler" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "TCP vs UDP",
                statement: "Reliable vs fast.",
              },
            ],
            steps: [
              {
                reasoning: "TCP = reliable delivery.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Reliable delivery",
            commonErrors: ["Speed confused."],
          },
        },
        {
          id: "ecs11-u5-protocols2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "When would you use UDP instead of TCP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UDP use cases",
                statement: "Speed over reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Live streaming — can't wait for retransmission.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Online gaming — latency critical.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "DNS queries — simple, fast needed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Streaming, gaming, DNS — speed critical.",
            commonErrors: ["Web browsing.", "Email."],
          },
        },
        {
          id: "ecs11-u5-protocols2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what HTTPS adds over HTTP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HTTPS",
                statement: "TLS encryption.",
              },
            ],
            steps: [
              {
                reasoning: "TLS encryption — data scrambled in transit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Authentication — verifies server identity (certificate).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Integrity — detects tampering.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents eavesdropping and MITM attacks.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Encryption + authentication + integrity.",
            commonErrors: ["Same thing.", "No security."],
          },
        },
        {
          id: "ecs11-u5-protocols2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how an email is sent and received using protocols.",
          parts: [
            { label: "a", prompt: "Describe sending process.", marks: 3 },
            { label: "b", prompt: "Describe receiving process.", marks: 3 },
            { label: "c", prompt: "Name the protocols used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Email protocols",
                statement: "SMTP send, POP3/IMAP receive.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Email client connects to SMTP server.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) SMTP sends email to recipient's server.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Recipient's client connects via POP3/IMAP.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Downloads email from server to device.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) SMTP for sending; POP3 or IMAP for receiving.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer: "(a) SMTP sends (b) POP3/IMAP receives (c) named",
            commonErrors: ["Wrong protocols.", "No process."],
          },
        },
      ],
    },
    {
      id: "ecs11-u5-cloud",
      title: "Cloud Computing",
      skill: "Explain cloud models and service types.",
      lesson: {
        sections: [
          {
            heading: "Cloud models",
            body: "**Public cloud**: shared infrastructure — AWS, Azure, Google Cloud. Scalable, cheap, but less control. **Private cloud**: dedicated to one organisation — more control, expensive. **Hybrid**: mix of both — flexibility.\n\n**Community cloud**: shared by organisations with common needs (e.g., government agencies).",
          },
          {
            heading: "Service types",
            body: "**IaaS** (Infrastructure as a Service): rent servers, storage, network — manage your own software. **PaaS** (Platform): rent platform for development — code, deploy apps. **SaaS** (Software): use applications directly — Gmail, Office 365.\n\n**Examples**: IaaS=EC2, PaaS=Heroku, SaaS=Salesforce.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Company wants to use Gmail without managing servers. Model?",
          solution: "SaaS — software as service.",
        },
      },
      questions: [
        {
          id: "ecs11-u5-cloud-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does SaaS stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Security as a Service" },
              { id: "b", text: "Software as a Service" },
              { id: "c", text: "System as a Service" },
              { id: "d", text: "Storage as a Service" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SaaS",
                statement: "Software as a Service.",
              },
            ],
            steps: [
              {
                reasoning: "SaaS = ready-made software.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Software as a Service",
            commonErrors: ["IaaS confused."],
          },
        },
        {
          id: "ecs11-u5-cloud-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish IaaS, PaaS and SaaS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Cloud services",
                statement: "IaaS→PaaS→SaaS abstraction.",
              },
            ],
            steps: [
              {
                reasoning: "IaaS: rent infrastructure — manage OS/apps.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "PaaS: rent platform — deploy apps, provider manages infra.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "SaaS: use software directly — provider manages everything.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "IaaS=infra, PaaS=platform, SaaS=software.",
            commonErrors: ["Same thing.", "Wrong order."],
          },
        },
        {
          id: "ecs11-u5-cloud-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give two advantages and two disadvantages of cloud computing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloud pros/cons",
                statement: "Scalable/cost vs control/security.",
              },
            ],
            steps: [
              {
                reasoning: "Advantages: scalability, lower upfront cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Advantages: accessibility anywhere, automatic updates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantages: dependency on internet/provider.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Disadvantages: security/privacy concerns, vendor lock-in.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Scalable/cost vs dependency/security.",
            commonErrors: ["Only one side.", "Only one each."],
          },
        },
        {
          id: "ecs11-u5-cloud-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A startup wants to build a web app quickly.",
          parts: [
            {
              label: "a",
              prompt: "Recommend a cloud service model.",
              marks: 3,
            },
            { label: "b", prompt: "Justify your choice.", marks: 3 },
            { label: "c", prompt: "Identify one risk.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloud choice",
                statement: "Match model to needs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) PaaS — focus on code, provider handles infra.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Faster development, automatic scaling.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Startup needs speed — PaaS removes infra management.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Scales automatically as users grow.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Vendor lock-in or data security risk.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) PaaS (b) speed+scaling (c) lock-in/security",
            commonErrors: ["IaaS (too complex).", "No risk."],
          },
        },
      ],
    },
  ],
};
