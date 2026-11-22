import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "eiascs-u5-lesson-5-3",
  code: "5-3",
  title: "System Integration and Future Trends",
  goal: "I CAN analyse system integration and emerging trends.",
  standards: ["Edexcel IAS Computer Science 9CP01 Unit 5 — Advanced Concepts"],
  vocabulary: [
    {
      term: "System integration",
      definition: "Combining different systems to work together.",
    },
    { term: "Legacy system", definition: "Old system still in use." },
    {
      term: "Middleware",
      definition: "Software connecting different systems.",
    },
    { term: "API integration", definition: "Connecting via APIs." },
    {
      term: "Cloud computing",
      definition: "Computing services over internet.",
    },
    { term: "Edge computing", definition: "Processing near data source." },
  ],
  concepts: [
    {
      id: "eiascs-u5-integration",
      title: "System Integration",
      skill: "Explain how different systems integrate.",
      lesson: {
        sections: [
          {
            heading: "Integration challenges",
            body: "**Different systems**: various technologies, formats, protocols — hard to connect. **Legacy systems**: old technology — hard to integrate. **Data formats**: different structures — need conversion. **Middleware**: software bridge — connects systems.\n\n**Integration methods**: APIs, file transfer, database links, message queues.",
          },
          {
            heading: "Integration benefits",
            body: "**Efficiency**: automate data transfer — no manual entry. **Consistency**: single source of truth — all systems updated. **Visibility**: see whole picture — integrated data. **Cost**: reduce duplication — save resources.\n\n**Challenges**: complexity, cost, security, maintenance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "CRM and accounting systems need to share data. Solution?",
          solution: "Integration via API.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-int-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is system integration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deleting old systems" },
              { id: "b", text: "Combining systems to work together" },
              { id: "c", text: "Separate systems" },
              { id: "d", text: "Building new systems" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integration",
                statement: "Combine systems.",
              },
            ],
            steps: [
              {
                reasoning: "Integration = combine.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Combine",
            commonErrors: ["Separate confused."],
          },
        },
        {
          id: "eiascs-u5-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two integration challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integration challenges",
                statement: "Complexity+compatibility.",
              },
            ],
            steps: [
              {
                reasoning: "Different technologies — hard to connect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Legacy systems — old technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Data formats — need conversion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Technologies, legacy, formats, security.",
            commonErrors: ["Only one.", "Wrong challenge."],
          },
        },
        {
          id: "eiascs-u5-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain middleware role in integration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Middleware",
                statement: "Bridge systems.",
              },
            ],
            steps: [
              {
                reasoning: "Software connecting different systems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Translates between formats — converts data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Handles communication — sends/receives data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Simplifies integration — developers don't need to know all systems.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Bridge+translate+communicate+simplify.",
            commonErrors: ["No role.", "One function."],
          },
        },
        {
          id: "eiascs-u5-int-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company has CRM, accounting, inventory systems.",
          parts: [
            { label: "a", prompt: "Identify integration needs.", marks: 4 },
            { label: "b", prompt: "Suggest approach.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integration planning",
                statement: "Needs + approach.",
              },
            ],
            steps: [
              {
                reasoning: "(a) CRM→accounting — sales data to invoices.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Accounting→inventory — stock updates.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) CRM→inventory — customer orders.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) All need consistent data — single source.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Use APIs — standard integration method.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Middleware if systems incompatible.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) data flows+consistency (b) APIs+middleware",
            commonErrors: ["No needs.", "No approach."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-cloud",
      title: "Cloud Computing and Edge Computing",
      skill: "Compare cloud and edge computing models.",
      lesson: {
        sections: [
          {
            heading: "Cloud computing",
            body: "**IaaS**: infrastructure — servers, storage. **PaaS**: platform — development tools. **SaaS**: software — applications. **Benefits**: scalability, cost savings, accessibility, reliability.\n\n**Models**: public (shared), private (dedicated), hybrid (both).",
          },
          {
            heading: "Edge computing",
            body: "**Edge**: process data near source — IoT devices, local servers. **Benefits**: lower latency, less bandwidth, privacy. **Uses**: real-time processing, autonomous vehicles, smart cities.\n\n**Cloud vs edge**: cloud = centralised, powerful; edge = distributed, fast response.",
          },
        ],
        keyFormulas: [
          { name: "IaaS/PaaS/SaaS", statement: "Cloud service models" },
          { name: "Edge computing", statement: "Process near source" },
        ],
        workedExample: {
          problem: "Company uses Google Workspace. Service model?",
          solution: "SaaS.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-cloud-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is SaaS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infrastructure" },
              { id: "b", text: "Software as a Service" },
              { id: "c", text: "Hardware" },
              { id: "d", text: "Platform" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SaaS",
                statement: "Software service.",
              },
            ],
            steps: [
              {
                reasoning: "SaaS = software service.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Software service",
            commonErrors: ["IaaS confused."],
          },
        },
        {
          id: "eiascs-u5-cloud-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two cloud computing benefits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloud benefits",
                statement: "Scale+cost.",
              },
            ],
            steps: [
              {
                reasoning: "Scalability — add resources on demand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cost savings — pay per use, no upfront.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accessibility — access from anywhere.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Scalable, cost-effective, accessible, reliable.",
            commonErrors: ["Only one.", "Wrong benefit."],
          },
        },
        {
          id: "eiascs-u5-cloud-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain cloud vs edge computing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Cloud vs edge",
                statement: "Central vs distributed.",
              },
            ],
            steps: [
              {
                reasoning: "Cloud: centralised, powerful, scalable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Edge: distributed, near source, low latency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cloud for storage/processing; edge for real-time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Often used together — edge for speed, cloud for power.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Central vs distributed.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u5-cloud-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Smart city needs real-time traffic monitoring.",
          parts: [
            { label: "a", prompt: "Choose computing model.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Computing selection",
                statement: "Need + latency.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Edge computing — process near sensors.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Low latency — real-time response.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Real-time needs — can't wait for cloud.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Edge handles immediate, cloud for analysis.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) edge (b) real-time+low latency",
            commonErrors: ["Cloud only.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-future",
      title: "Future Trends and Emerging Technologies",
      skill: "Discuss future trends and their implications.",
      lesson: {
        sections: [
          {
            heading: "Emerging trends",
            body: "**Quantum computing**: exponentially faster — new algorithms, cryptography. **5G/6G**: faster networks — more devices, lower latency. **AI advancement**: better ML, NLP, computer vision. **Biocomputing**: DNA computing, brain-computer interfaces.\n\n**Impact**: new capabilities, ethical concerns, job changes.",
          },
          {
            heading: "Societal implications",
            body: "**Automation**: jobs replaced — need reskilling. **Privacy**: more data = more surveillance. **Inequality**: technology access gap — digital divide. **Security**: new threats — AI-powered attacks.\n\n**Responsibility**: develop ethically, consider consequences.",
          },
        ],
        keyFormulas: [
          { name: "Quantum computing", statement: "Exponential speed" },
          { name: "5G/6G", statement: "Faster networks" },
        ],
        workedExample: {
          problem: "Computers use quantum bits. Technology?",
          solution: "Quantum computing.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-fut-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is quantum computing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cloud computing" },
              { id: "b", text: "Edge computing" },
              { id: "c", text: "Computing using quantum bits" },
              { id: "d", text: "Regular computers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quantum",
                statement: "Quantum bits.",
              },
            ],
            steps: [
              {
                reasoning: "Quantum = quantum bits.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Quantum bits",
            commonErrors: ["Regular confused."],
          },
        },
        {
          id: "eiascs-u5-fut-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two emerging technologies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Emerging tech",
                statement: "Quantum+AI+IoT.",
              },
            ],
            steps: [
              {
                reasoning: "Quantum computing — exponential speed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advanced AI — better ML, NLP.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "5G/6G — faster networks.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Quantum, AI, 5G, IoT, blockchain.",
            commonErrors: ["Only one.", "Wrong tech."],
          },
        },
        {
          id: "eiascs-u5-fut-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain societal impact of automation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automation impact",
                statement: "Jobs+skills.",
              },
            ],
            steps: [
              {
                reasoning: "Jobs replaced — routine tasks automated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "New jobs created — AI development, maintenance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Need reskilling — workers must adapt.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Inequality risk — those without skills left behind.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Jobs replaced+created+reskilling+inequality.",
            commonErrors: ["Only negative.", "No nuance."],
          },
        },
        {
          id: "eiascs-u5-fut-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate AI development for society.",
          parts: [
            { label: "a", prompt: "Identify benefits.", marks: 4 },
            { label: "b", prompt: "Identify risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology evaluation",
                statement: "Benefits+risks.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Efficiency — automate tasks, save time.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) New capabilities — solve complex problems.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Job displacement — automation replaces workers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Bias/privacy — ethical concerns.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) efficiency+capabilities (b) jobs+bias",
            commonErrors: ["Only benefits.", "Only risks."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-summary3",
      title: "Advanced Concepts Summary 3",
      skill: "Summarise system integration and future trends.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Integration**: APIs, middleware, legacy systems. **Cloud**: IaaS/PaaS/SaaS, public/private/hybrid. **Edge**: process near source, low latency. **Future**: quantum, AI, 5G, IoT. **Implications**: automation, privacy, inequality, ethics.\n\n**Key ideas**: technology connects everything — think about consequences.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: design integrations, choose computing models, evaluate technologies. **Evaluate**: cloud vs edge, benefits vs risks, ethical implications. **Analyse**: trends, impacts, responsibilities.\n\n**Key concepts**: middleware, APIs, cloud models, edge computing, quantum, automation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Process data on device, not cloud. Computing?",
          solution: "Edge.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-sum3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is middleware?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Operating system" },
              { id: "b", text: "Software connecting systems" },
              { id: "c", text: "Hardware" },
              { id: "d", text: "Programming language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Middleware",
                statement: "Connects systems.",
              },
            ],
            steps: [
              {
                reasoning: "Middleware = connects.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Connects",
            commonErrors: ["Hardware confused."],
          },
        },
        {
          id: "eiascs-u5-sum3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two cloud service models.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloud models",
                statement: "IaaS, PaaS, SaaS.",
              },
            ],
            steps: [
              {
                reasoning: "IaaS — infrastructure.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "PaaS — platform.", marks: 1, markCode: "AO2" },
              { reasoning: "SaaS — software.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "IaaS, PaaS, SaaS.",
            commonErrors: ["Only one.", "Wrong model."],
          },
        },
        {
          id: "eiascs-u5-sum3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why system integration is challenging.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integration challenges",
                statement: "Complexity.",
              },
            ],
            steps: [
              {
                reasoning: "Different technologies — incompatible systems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Data formats — need conversion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Security — data protection during transfer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cost — integration is expensive, complex.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Technologies+formats+security+cost.",
            commonErrors: ["Easy.", "One challenge."],
          },
        },
        {
          id: "eiascs-u5-sum3-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate edge vs cloud for healthcare monitoring.",
          parts: [
            { label: "a", prompt: "Compare approaches.", marks: 4 },
            { label: "b", prompt: "Recommend choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Computing evaluation",
                statement: "Latency+privacy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Edge — low latency, privacy; cloud — powerful, scalable.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Healthcare needs real-time + sensitive data.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Edge for monitoring — immediate alerts.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Cloud for storage/analysis — scale, power.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) edge latency+privacy, cloud power (b) both",
            commonErrors: ["One only.", "No comparison."],
          },
        },
      ],
    },
  ],
};
