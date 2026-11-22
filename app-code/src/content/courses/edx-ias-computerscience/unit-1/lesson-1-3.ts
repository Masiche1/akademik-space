import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eiascs-u1-lesson-1-3",
  code: "1-3",
  title: "Computer Types and System Design",
  goal: "I CAN describe different computer types and evaluate system design.",
  standards: ["Edexcel IAS Computer Science 9CP01 Unit 1 — Computer Systems"],
  vocabulary: [
    { term: "Desktop", definition: "Stationary computer — tower, monitor, keyboard." },
    { term: "Laptop", definition: "Portable computer — all components integrated." },
    { term: "Tablet", definition: "Touchscreen portable — no keyboard." },
    { term: "Embedded system", definition: "Computer inside another device — car, washing machine." },
    { term: "Server", definition: "Computer providing services to other computers." },
    { term: "Supercomputer", definition: "Fastest computers — scientific research." },
  ],
  concepts: [
    {
      id: "eiascs-u1-types",
      title: "Types of Computer Systems",
      skill: "Describe different computer types and their uses.",
      lesson: {
        sections: [
          { heading: "Personal computers", body: "**Desktop**: powerful, upgradeable, cheap — home/office. **Laptop**: portable, integrated, battery — mobile work. **Tablet**: touchscreen, lightweight — reading, casual use. **All-in-one**: monitor + components integrated.\n\n**Choosing**: desktop for power/upgradeability; laptop for portability; tablet for convenience." },
          { heading: "Specialised systems", body: "**Server**: provides services — web, email, files — high reliability, always on. **Embedded**: inside devices — car engine control, washing machine, medical devices — dedicated function. **Supercomputer**: extreme processing — weather, research — expensive, rare.\n\n**Evaluation**: different types for different needs — no single 'best'." },
        ],
        keyFormulas: [],
        workedExample: { problem: "Computer inside car controlling engine. Type?", solution: "Embedded system." },
      },
      questions: [
        {
          id: "eiascs-u1-types-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is an embedded system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Desktop" }, { id: "b", text: "Computer inside another device" },
            { id: "c", text: "Server" }, { id: "d", text: "Supercomputer" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Embedded system", statement: "Inside device." }],
            steps: [{ reasoning: "Embedded = inside device.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Inside device", commonErrors: ["Desktop confused."] },
        },
        {
          id: "eiascs-u1-types-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two uses of embedded systems.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Embedded uses", statement: "Control + monitoring." }],
            steps: [
              { reasoning: "Car engine control — fuel, emissions.", marks: 1, markCode: "AO2" },
              { reasoning: "Washing machine — cycle control.", marks: 1, markCode: "AO2" },
              { reasoning: "Medical devices — monitoring, treatment.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Car, appliances, medical.", commonErrors: ["Only one.", "Wrong use."] },
        },
        {
          id: "eiascs-u1-types-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why servers need high reliability.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Server reliability", statement: "Always on." }],
            steps: [
              { reasoning: "Provide critical services — web, email, data.", marks: 1, markCode: "AO2" },
              { reasoning: "Downtime affects many users — business impact.", marks: 1, markCode: "AO2" },
              { reasoning: "Redundancy — backup systems, failover.", marks: 1, markCode: "AO2" },
              { reasoning: "High-end hardware — ECC memory, RAID.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Critical services → need reliability.", commonErrors: ["No need.", "No reason."] },
        },
        {
          id: "eiascs-u1-types-q4", difficulty: "challenge", totalMarks: 8,
          stem: "School needs computers for 30 students.",
          parts: [
            { label: "a", prompt: "Suggest computer type.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "System selection", statement: "Need + budget." }],
            steps: [
              { reasoning: "(a) Desktop or laptop — depending on budget.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Networked — shared resources, internet.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) Cost-effective — desktops cheaper per unit.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Upgradeable — desktops easier to upgrade.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) desktop/networked (b) cost+upgradeable", commonErrors: ["Tablets only.", "No justification."] },
        },
      ],
    },
    {
      id: "eiascs-u1-design",
      title: "System Design and Evaluation",
      skill: "Evaluate system design decisions and trade-offs.",
      lesson: {
        sections: [
          { heading: "Design considerations", body: "**Purpose**: what system must do — determines hardware/software. **Performance**: speed, processing power — vs cost. **Reliability**: uptime, redundancy — critical systems. **Scalability**: ability to grow — future needs. **Security**: protect data — encryption, access control.\n\n**Trade-offs**: performance vs cost; security vs usability; portability vs power. No perfect solution — balance needed." },
          { heading: "System evaluation", body: "**Benchmarking**: compare performance — speed tests. **User feedback**: does system meet needs? **Total cost**: purchase + maintenance + upgrades. **Lifespan**: how long before obsolete?\n\n**Evaluation criteria**: fitness for purpose — does it do what needed, at acceptable cost, reliably?" },
        ],
        keyFormulas: [],
        workedExample: { problem: "System must handle 10,000 users. Key consideration?", solution: "Scalability." },
      },
      questions: [
        {
          id: "eiascs-u1-des-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is scalability?",
          response: { type: "mcq", choices: [
            { id: "a", text: "System speed" }, { id: "b", text: "Ability to grow with demand" },
            { id: "c", text: "System security" }, { id: "d", text: "Cost" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Scalability", statement: "Growth capacity." }],
            steps: [{ reasoning: "Scalability = can grow.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Growth capacity", commonErrors: ["Speed confused."] },
        },
        {
          id: "eiascs-u1-des-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two design trade-offs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Design trade-offs", statement: "Balance needed." }],
            steps: [
              { reasoning: "Performance vs cost — faster costs more.", marks: 1, markCode: "AO2" },
              { reasoning: "Security vs usability — more security = less convenient.", marks: 1, markCode: "AO2" },
              { reasoning: "Portability vs power — portable = less powerful.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Performance-cost, security-usability, portability-power.", commonErrors: ["Only one.", "No trade-off."] },
        },
        {
          id: "eiascs-u1-des-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why system design requires trade-offs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trade-offs", statement: "Can't have all." }],
            steps: [
              { reasoning: "Limited resources — budget, time, technology.", marks: 1, markCode: "AO2" },
              { reasoning: "Competing priorities — speed vs cost, security vs ease.", marks: 1, markCode: "AO2" },
              { reasoning: "No perfect solution — must prioritise.", marks: 1, markCode: "AO2" },
              { reasoning: "Context matters — different needs, different choices.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Limited resources → must balance.", commonErrors: ["Perfect possible.", "No trade-off."] },
        },
        {
          id: "eiascs-u1-des-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Bank needs secure online banking system.",
          parts: [
            { label: "a", prompt: "Identify key requirements.", marks: 4 },
            { label: "b", prompt: "Suggest design approach.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "System design", statement: "Requirements → solution." }],
            steps: [
              { reasoning: "(a) Security — encryption, authentication.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Reliability — always available, backup.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) Multi-factor auth, encrypted connections.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Redundant servers, monitoring, audit logs.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) security+reliability (b) encryption+redundancy", commonErrors: ["No requirements.", "No design."] },
        },
      ],
    },
    {
      id: "eiascs-u1-evaluation",
      title: "Evaluating Computer Systems",
      skill: "Evaluate computer systems and technologies.",
      lesson: {
        sections: [
          { heading: "Evaluation criteria", body: "**Performance**: speed, processing power — benchmarks. **Cost**: purchase + running + maintenance. **Usability**: ease of use — user interface. **Compatibility**: works with existing systems. **Support**: vendor help, updates.\n\n**TCO (Total Cost of Ownership)**: purchase + energy + maintenance + upgrades — not just initial cost." },
          { heading: "Technology evaluation", body: "**Advantages**: what it does well. **Disadvantages**: limitations, costs. **Alternatives**: other options — compare. **Future-proofing**: will it meet future needs?\n\n**Evaluation process**: identify needs → research options → compare → decide → implement → review." },
        ],
        keyFormulas: [],
        workedExample: { problem: "Laptop cheaper upfront but higher running costs. What to consider?", solution: "Total cost of ownership." },
      },
      questions: [
        {
          id: "eiascs-u1-eval-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is TCO?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchase price only" }, { id: "b", text: "Total cost of ownership — all costs" },
            { id: "c", text: "Monthly cost" }, { id: "d", text: "Upgrade cost" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "TCO", statement: "All costs." }],
            steps: [{ reasoning: "TCO = all costs over lifetime.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** All costs", commonErrors: ["Purchase only."] },
        },
        {
          id: "eiascs-u1-eval-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two evaluation criteria.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Evaluation criteria", statement: "Performance + cost." }],
            steps: [
              { reasoning: "Performance — speed, capability.", marks: 1, markCode: "AO2" },
              { reasoning: "Cost — purchase + running + maintenance.", marks: 1, markCode: "AO2" },
              { reasoning: "Usability — ease of use.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Performance, cost, usability, compatibility.", commonErrors: ["Only one.", "Wrong criterion."] },
        },
        {
          id: "eiascs-u1-eval-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why initial purchase price isn't enough.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TCO importance", statement: "Hidden costs." }],
            steps: [
              { reasoning: "Running costs — energy, consumables.", marks: 1, markCode: "AO2" },
              { reasoning: "Maintenance — repairs, upgrades.", marks: 1, markCode: "AO2" },
              { reasoning: "Training — learning curve, support.", marks: 1, markCode: "AO2" },
              { reasoning: "Lifespan — cheap may need replacing sooner.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Hidden costs — running, maintenance, lifespan.", commonErrors: ["Price enough.", "No hidden costs."] },
        },
        {
          id: "eiascs-u1-eval-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Evaluate SSD vs HDD for school computer lab.",
          parts: [
            { label: "a", prompt: "Compare performance.", marks: 4 },
            { label: "b", prompt: "Recommend choice.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Storage evaluation", statement: "Speed vs cost." }],
            steps: [
              { reasoning: "(a) SSD faster — boot, load times better.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) HDD slower but cheaper per GB.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) SSD for OS/apps — speed matters.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Budget dependent — HDD if cost critical.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) SSD fast, HDD cheap (b) SSD recommended", commonErrors: ["HDD always.", "No comparison."] },
        },
      ],
    },
  ],
};
