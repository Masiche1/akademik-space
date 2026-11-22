import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "eiascs-u5-lesson-5-2",
  code: "5-2",
  title: "System Architecture and Performance",
  goal: "I CAN evaluate system architecture and performance factors.",
  standards: ["Edexcel IAS Computer Science 9CP01 Unit 5 — Advanced Concepts"],
  vocabulary: [
    {
      term: "System architecture",
      definition: "Overall structure of computer system.",
    },
    { term: "Performance", definition: "Speed and efficiency of system." },
    { term: "Bottleneck", definition: "Component limiting performance." },
    { term: "Scalability", definition: "Ability to handle increased load." },
    { term: "Redundancy", definition: "Backup components for reliability." },
    { term: "Load balancing", definition: "Distributing work across servers." },
  ],
  concepts: [
    {
      id: "eiascs-u5-architecture",
      title: "System Architecture",
      skill: "Evaluate system architectures and their trade-offs.",
      lesson: {
        sections: [
          {
            heading: "Architecture types",
            body: "**Centralised**: single powerful computer — simple, single point of failure. **Distributed**: multiple computers — scalable, complex. **Client-server**: separate client and server — balanced. **Peer-to-peer**: equal nodes — no central server.\n\n**Choosing**: centralised for simplicity; distributed for scale; client-server for web apps.",
          },
          {
            heading: "Performance factors",
            body: "**Hardware**: CPU speed, RAM, storage — affects speed. **Software**: efficient algorithms, optimised code. **Network**: bandwidth, latency — affects data transfer. **Load**: number of users — affects performance.\n\n**Bottlenecks**: slowest component limits overall — identify and fix.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "System slow with many users. Likely bottleneck?",
          solution: "Server or network.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-arch-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a bottleneck?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Programming error" },
              { id: "b", text: "Component limiting performance" },
              { id: "c", text: "Network cable" },
              { id: "d", text: "Fast component" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bottleneck",
                statement: "Limits performance.",
              },
            ],
            steps: [
              { reasoning: "Bottleneck = limits.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Limits performance",
            commonErrors: ["Fast confused."],
          },
        },
        {
          id: "eiascs-u5-arch-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two performance factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance factors",
                statement: "Hardware+software.",
              },
            ],
            steps: [
              {
                reasoning: "Hardware — CPU, RAM, storage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Software — efficient algorithms.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Network — bandwidth, latency.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Hardware, software, network, load.",
            commonErrors: ["Only one.", "Wrong factor."],
          },
        },
        {
          id: "eiascs-u5-arch-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain distributed vs centralised architecture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Distributed vs centralised",
                statement: "Multiple vs single.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Centralised: single powerful computer — simple, single point of failure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Distributed: multiple computers — scalable, complex.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Centralised easier to manage; distributed more reliable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Choose based on scale and reliability needs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Single vs multiple computers.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u5-arch-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Website slow during peak hours.",
          parts: [
            { label: "a", prompt: "Identify causes.", marks: 4 },
            { label: "b", prompt: "Suggest solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance troubleshooting",
                statement: "Diagnose + fix.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Server overload — too many requests.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Database bottleneck — slow queries.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Network congestion — bandwidth limits.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Inefficient code — slow algorithms.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Add servers — load balancing.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Optimise database, code — improve efficiency.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) overload+database+network+code (b) servers+optimise",
            commonErrors: ["No causes.", "No solutions."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-scalability",
      title: "Scalability and Reliability",
      skill: "Design scalable and reliable systems.",
      lesson: {
        sections: [
          {
            heading: "Scalability",
            body: "**Vertical**: add more power to single machine — simple, limited. **Horizontal**: add more machines — complex, unlimited. **Load balancing**: distribute work across servers. **Caching**: store frequently accessed data — faster.\n\n**Choosing**: vertical for small scale; horizontal for large scale.",
          },
          {
            heading: "Reliability",
            body: "**Redundancy**: backup components — if one fails, another takes over. **Failover**: automatic switch to backup. **Monitoring**: detect issues early. **Disaster recovery**: backup data, restore quickly.\n\n**Reliability vs availability**: reliability = works correctly; availability = accessible when needed.",
          },
        ],
        keyFormulas: [
          { name: "Vertical scaling", statement: "More power per machine" },
          { name: "Horizontal scaling", statement: "More machines" },
        ],
        workedExample: {
          problem: "System needs to handle 10x users. Scaling type?",
          solution: "Horizontal.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-scal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is horizontal scaling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faster network" },
              { id: "b", text: "More powerful computer" },
              { id: "c", text: "More storage" },
              { id: "d", text: "More computers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Horizontal scaling",
                statement: "More machines.",
              },
            ],
            steps: [
              {
                reasoning: "Horizontal = more machines.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** More computers",
            commonErrors: ["Vertical confused."],
          },
        },
        {
          id: "eiascs-u5-scal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reliability techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reliability",
                statement: "Redundancy+monitoring.",
              },
            ],
            steps: [
              {
                reasoning: "Redundancy — backup components.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Failover — automatic switch to backup.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Monitoring — detect issues early.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Redundancy, failover, monitoring, backups.",
            commonErrors: ["Only one.", "Wrong technique."],
          },
        },
        {
          id: "eiascs-u5-scal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain vertical vs horizontal scaling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Vertical vs horizontal",
                statement: "Power vs machines.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vertical: add more power to single machine — simple, limited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Horizontal: add more machines — complex, unlimited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Vertical easier; horizontal more scalable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Choose based on scale and complexity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Power vs machines.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u5-scal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "E-commerce site needs to handle Black Friday traffic.",
          parts: [
            { label: "a", prompt: "Suggest scaling approach.", marks: 4 },
            { label: "b", prompt: "Explain reliability measures.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scalability + reliability",
                statement: "Scale + backup.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Horizontal scaling — add servers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Load balancing — distribute traffic.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Redundancy — backup servers, databases.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Monitoring — detect issues early.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) horizontal+load balancing (b) redundancy+monitoring",
            commonErrors: ["Vertical only.", "No reliability."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-evaluation",
      title: "System Evaluation and Trade-offs",
      skill: "Evaluate systems considering multiple factors.",
      lesson: {
        sections: [
          {
            heading: "Evaluation factors",
            body: "**Performance**: speed, efficiency. **Cost**: purchase, running, maintenance. **Reliability**: uptime, fault tolerance. **Scalability**: growth capacity. **Security**: protection level. **Usability**: ease of use.\n\n**Trade-offs**: performance vs cost; security vs usability; scalability vs complexity.",
          },
          {
            heading: "System selection",
            body: "**Requirements first**: what must system do? **Constraints**: budget, time, expertise. **Evaluate options**: compare against criteria. **Decide**: balance all factors.\n\n**No perfect solution**: must prioritise based on context.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "System fast but expensive. Trade-off?",
          solution: "Performance vs cost.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a system trade-off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect solution" },
              { id: "b", text: "Free system" },
              { id: "c", text: "Fast system" },
              { id: "d", text: "Balancing competing factors" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Balance factors.",
              },
            ],
            steps: [
              { reasoning: "Trade-off = balance.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Balance",
            commonErrors: ["Perfect confused."],
          },
        },
        {
          id: "eiascs-u5-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two evaluation factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation factors",
                statement: "Performance+cost.",
              },
            ],
            steps: [
              {
                reasoning: "Performance — speed, efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cost — purchase + running.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reliability — uptime, faults.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Performance, cost, reliability, scalability, security.",
            commonErrors: ["Only one.", "Wrong factor."],
          },
        },
        {
          id: "eiascs-u5-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why perfect systems don't exist.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade-offs",
                statement: "Can't have all.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Competing priorities — speed vs cost, security vs ease.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Limited resources — budget, time, technology.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Context matters — different needs, different choices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Must prioritise — balance factors.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Competing+limited+context+prioritise.",
            commonErrors: ["Perfect possible.", "No trade-off."],
          },
        },
        {
          id: "eiascs-u5-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Choose database for small business vs large enterprise.",
          parts: [
            { label: "a", prompt: "Compare options.", marks: 4 },
            { label: "b", prompt: "Recommend choices.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System selection",
                statement: "Scale + budget.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Small business — SQLite, simple, cheap.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Enterprise — Oracle, MySQL — scalable, secure.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Small business — SQLite sufficient, low cost.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Enterprise — MySQL/Oracle for scale, security.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) SQLite vs Oracle (b) match scale",
            commonErrors: ["One fits all.", "No comparison."],
          },
        },
      ],
    },
    {
      id: "eiascs-u5-summary2",
      title: "Advanced Concepts Summary 2",
      skill: "Summarise system architecture and evaluation.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Architecture**: centralised, distributed, client-server, P2P. **Performance**: hardware, software, network, load. **Scalability**: vertical vs horizontal, load balancing, caching. **Reliability**: redundancy, failover, monitoring. **Evaluation**: performance vs cost vs security vs scalability.\n\n**Key ideas**: systems are complex — trade-offs everywhere.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: design architectures, evaluate systems, troubleshoot performance. **Evaluate**: trade-offs, scalability, reliability. **Analyse**: bottlenecks, causes, solutions.\n\n**Key concepts**: load balancing, caching, redundancy, failover, vertical/horizontal scaling.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "System handles more users by adding servers. Scaling?",
          solution: "Horizontal.",
        },
      },
      questions: [
        {
          id: "eiascs-u5-sum2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is load balancing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distributing work across servers" },
              { id: "b", text: "More storage" },
              { id: "c", text: "Single server" },
              { id: "d", text: "Faster CPU" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Load balancing",
                statement: "Distribute work.",
              },
            ],
            steps: [
              {
                reasoning: "Load balancing = distribute.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Distribute",
            commonErrors: ["Single confused."],
          },
        },
        {
          id: "eiascs-u5-sum2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two scalability techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scalability",
                statement: "Vertical+horizontal.",
              },
            ],
            steps: [
              {
                reasoning: "Vertical — more power per machine.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Horizontal — more machines.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Caching — store frequently accessed data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Vertical, horizontal, caching, load balancing.",
            commonErrors: ["Only one.", "Wrong technique."],
          },
        },
        {
          id: "eiascs-u5-sum2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why redundancy improves reliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Redundancy",
                statement: "Backup components.",
              },
            ],
            steps: [
              {
                reasoning: "Backup components — if one fails, another works.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No single point of failure — system continues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Failover — automatic switch to backup.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Higher availability — system stays up.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Backup+no failure point+failover+availability.",
            commonErrors: ["No redundancy.", "One benefit."],
          },
        },
        {
          id: "eiascs-u5-sum2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate cloud vs on-premise servers.",
          parts: [
            { label: "a", prompt: "Compare approaches.", marks: 4 },
            { label: "b", prompt: "Recommend choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System evaluation",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Cloud — scalable, pay-per-use; on-premise — control, upfront cost.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Cloud easier to scale; on-premise more control.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Cloud for startups — low upfront, scalable.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) On-premise for regulated industries — data control.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) cloud scalable, on-premise control (b) context-dependent",
            commonErrors: ["One always better.", "No comparison."],
          },
        },
      ],
    },
  ],
};
