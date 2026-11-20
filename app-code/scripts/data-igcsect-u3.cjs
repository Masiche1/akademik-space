module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson96",
    lesson: {
      id: "cieict-u3-lesson-3-1", code: "3-1",
      title: "Online Collaboration Tools",
      goal: "I CAN use online tools for collaborative document editing and project management.",
      standards: ["Cambridge IGCSE ICT 0417: collaboration", "0417: online tools"],
      vocabulary: [
        { term: "Cloud storage", definition: "Files stored on remote servers accessible online." },
        { term: "Real-time collaboration", definition: "Multiple users editing simultaneously." },
        { term: "Version history", definition: "Record of all changes to a document." },
        { term: "Comments", definition: "Annotations on documents for discussion." },
        { term: "Permissions", definition: "Who can view/edit/share files." },
        { term: "Shared drive", definition: "Central storage accessible to a team." },
      ],
      concept: {
        id: "cieict-u3-s1-collab", title: "Online collaboration",
        skill: "Use cloud tools for teamwork at IGCSE ICT level.",
        sections: [
          { heading: "Cloud collaboration", body: "Google Docs/Office 365 enable real-time editing: multiple users edit simultaneously, see changes live, use comments for discussion, access version history to revert." },
          { heading: "Permissions and sharing", body: "Control access: view-only, comment, edit permissions. Share via links or specific users. Shared drives give teams central storage. Always verify sharing settings to protect sensitive data." },
        ],
        keyFormulas: [
          { name: "Real-time", statement: "simultaneous editing" },
          { name: "Version history", statement: "track/revert changes" },
          { name: "Permissions", statement: "view/comment/edit control" },
        ],
        workedExample: {
          problem: "Your team is writing a report together online. How do you collaborate effectively?",
          solution: "Shared doc with edit permissions, assign sections, use comments for queries, check version history for changes, agree on style guide first.",
        },
        questions: [
          {
            id: "cieict-u3-oc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is real-time collaboration?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Multiple users editing simultaneously" }, { id: "b", text: "Sending emails" }, { id: "c", text: "A type of software" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Real-time collaboration", statement: "Simultaneous editing." }],
              steps: [{ reasoning: "Multiple users edit at once, see live changes.", marks: 1, markCode: "M" }],
              finalAnswer: "Simultaneous editing",
            },
          },
          {
            id: "cieict-u3-oc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is version history and why is it useful?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Version history", statement: "Change record." }],
              steps: [
                { reasoning: "Version history = record of all changes.", marks: 1, markCode: "M" },
                { reasoning: "Revert mistakes, see who changed what.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Change tracking; revert/audit",
            },
          },
          {
            id: "cieict-u3-oc-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the three main permission levels for sharing files? When use each?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Permissions", statement: "View/comment/edit." }],
              steps: [
                { reasoning: "View=read only; comment=feedback; edit=modify.", marks: 1, markCode: "M" },
                { reasoning: "Use least privilege needed.", marks: 1, markCode: "M" },
                { reasoning: "All three explained.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "View/comment/edit; least privilege",
            },
          },
          {
            id: "cieict-u3-oc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define cloud storage, real-time collaboration, version history, comments, permissions, shared drive. (b) What is real-time collaboration? (c) Why use version history? (d) What are comments for? (e) What permissions should you set? (f) What is a shared drive? (g) How do you ensure file security when sharing? (h) Design a collaboration workflow for a group project.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Collaboration", statement: "Cloud tools, permissions, workflow." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Simultaneous editing.", marks: 1, markCode: "M" },
                { reasoning: "(c) Track/revert changes.", marks: 1, markCode: "M" },
                { reasoning: "(d) Discussion without editing.", marks: 1, markCode: "M" },
                { reasoning: "(e) Least privilege principle.", marks: 1, markCode: "M" },
                { reasoning: "(f) Central team storage.", marks: 1, markCode: "M" },
                { reasoning: "(g) Check settings, limit access.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid collaboration workflow.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Online collaboration tools and workflows.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u3-oc-notes", title: "Collaboration — notes",
      summary: "Cloud tools enable real-time editing; version history tracks changes; permissions control access.",
      sections: [
        { heading: "Key idea", body: "Collaboration tools let teams work together regardless of location." },
        { heading: "Security", body: "Set appropriate permissions — least privilege principle." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson97",
    lesson: {
      id: "cieict-u3-lesson-3-2", code: "3-2",
      title: "Data Protection and Privacy",
      goal: "I CAN apply data protection principles and privacy practices when handling personal data.",
      standards: ["Cambridge IGCSE ICT 0417: data protection", "0417: privacy"],
      vocabulary: [
        { term: "Personal data", definition: "Information identifying an individual." },
        { term: "Data protection", definition: "Legal/ethical rules for handling personal data." },
        { term: "Consent", definition: "Permission to collect/use personal data." },
        { term: "Encryption", definition: "Scrambling data to protect privacy." },
        { term: "Data breach", definition: "Unauthorised access to personal data." },
        { term: "Privacy policy", definition: "Statement of how data is collected/used." },
      ],
      concept: {
        id: "cieict-u3-s2-dp", title: "Data protection and privacy",
        skill: "Handle personal data responsibly at IGCSE ICT level.",
        sections: [
          { heading: "Data protection principles", body: "Personal data needs consent for collection/use, should be accurate, kept secure, and only shared with permission. Laws like GDPR require organisations to protect personal data and report breaches." },
          { heading: "Privacy practices", body: "Use strong passwords, encrypt sensitive data, limit sharing, check privacy settings, be aware of what you post online, understand privacy policies before signing up for services." },
        ],
        keyFormulas: [
          { name: "Consent", statement: "permission to use data" },
          { name: "Encryption", statement: "protect data in transit/storage" },
          { name: "GDPR", statement: "EU data protection law" },
        ],
        workedExample: {
          problem: "A school wants to store student photos online. What should they consider?",
          solution: "Consent from parents/students, secure storage, limited access, privacy policy, comply with data protection law.",
        },
        questions: [
          {
            id: "cieict-u3-dp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is personal data?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Information identifying an individual" }, { id: "b", text: "Any computer file" }, { id: "c", text: "A type of software" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Personal data", statement: "Identifying information." }],
              steps: [{ reasoning: "Personal data identifies individuals.", marks: 1, markCode: "M" }],
              finalAnswer: "Identifying information",
            },
          },
          {
            id: "cieict-u3-dp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is consent in data protection? Why is it needed?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Consent", statement: "Permission for data use." }],
              steps: [
                { reasoning: "Consent = permission to collect/use data.", marks: 1, markCode: "M" },
                { reasoning: "Required by law; respects individual rights.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Permission; legal/ethical requirement",
            },
          },
          {
            id: "cieict-u3-dp-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a data breach and what should an organisation do if one occurs?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Data breach", statement: "Unauthorised access." }],
              steps: [
                { reasoning: "Breach = unauthorised access to personal data.", marks: 1, markCode: "M" },
                { reasoning: "Contain, investigate, notify authorities/affected individuals.", marks: 1, markCode: "M" },
                { reasoning: "Take steps to prevent recurrence.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Unauthorised access; contain+report+prevent",
            },
          },
          {
            id: "cieict-u3-dp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define personal data, data protection, consent, encryption, data breach, privacy policy. (b) What is GDPR? (c) Why is consent needed? (d) What is encryption for? (e) What should a privacy policy explain? (f) What is a data breach? (g) Give 3 privacy practices. (h) Design data protection guidelines for a school storing student records.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data protection", statement: "Privacy, consent, security." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) EU data protection law.", marks: 1, markCode: "M" },
                { reasoning: "(c) Legal requirement; respects rights.", marks: 1, markCode: "M" },
                { reasoning: "(d) Protects data in transit/storage.", marks: 1, markCode: "M" },
                { reasoning: "(e) Collection, use, sharing practices.", marks: 1, markCode: "M" },
                { reasoning: "(f) Unauthorised access.", marks: 1, markCode: "M" },
                { reasoning: "(g) Three valid practices.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid school data protection guidelines.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data protection and privacy practices.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u3-dp-notes", title: "Data protection — notes",
      summary: "Personal data needs consent; encrypt sensitive data; understand privacy policies; GDPR governs use.",
      sections: [
        { heading: "Key idea", body: "Personal data is a responsibility — protect it legally and ethically." },
        { heading: "Breach", body: "Contain, investigate, notify — then prevent recurrence." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson98",
    lesson: {
      id: "cieict-u3-lesson-3-3", code: "3-3",
      title: "E-commerce and Web Tools",
      goal: "I CAN evaluate e-commerce platforms and use web tools for business purposes.",
      standards: ["Cambridge IGCSE ICT 0417: e-commerce", "0417: web tools"],
      vocabulary: [
        { term: "E-commerce", definition: "Buying/selling goods/services online." },
        { term: "Shopping cart", definition: "Virtual basket for online purchases." },
        { term: "Payment gateway", definition: "Service processing online payments securely." },
        { term: "B2B/B2C", definition: "Business-to-business vs business-to-consumer." },
        { term: "Online marketplace", definition: "Platform connecting buyers and sellers." },
        { term: "Inventory management", definition: "Tracking stock levels and orders." },
      ],
      concept: {
        id: "cieict-u3-s3-ecom", title: "E-commerce",
        skill: "Understand e-commerce models and tools at IGCSE ICT level.",
        sections: [
          { heading: "E-commerce models", body: "B2C (business to consumer — Amazon), B2B (business to business — wholesale), C2C (consumer to consumer — eBay). Online marketplaces connect buyers/sellers; payment gateways process transactions securely." },
          { heading: "Business tools", body: "Inventory management tracks stock, order processing handles sales, customer databases store buyer info, analytics track sales/performance. Evaluate platforms by features, fees, security, scalability." },
        ],
        keyFormulas: [
          { name: "B2C/B2B/C2C", statement: "consumer/business models" },
          { name: "Payment gateway", statement: "secure transaction processing" },
          { name: "Marketplace", statement: "buyer-seller platform" },
        ],
        workedExample: {
          problem: "Compare selling on your own website vs an online marketplace.",
          solution: "Own site: more control, branding, but need traffic + payment setup. Marketplace: built-in audience + trust, but fees + less control.",
        },
        questions: [
          {
            id: "cieict-u3-ec-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is e-commerce?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Buying/selling goods/services online" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A network cable" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "E-commerce", statement: "Online trade." }],
              steps: [{ reasoning: "E-commerce = internet-based buying/selling.", marks: 1, markCode: "M" }],
              finalAnswer: "Online buying/selling",
            },
          },
          {
            id: "cieict-u3-ec-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between B2C and B2B e-commerce?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "B2C vs B2B", statement: "Consumer vs business." }],
              steps: [
                { reasoning: "B2C=business to consumer (retail); B2B=business to business (wholesale).", marks: 1, markCode: "M" },
                { reasoning: "Examples for each.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Consumer vs business sales",
            },
          },
          {
            id: "cieict-u3-ec-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a payment gateway and why is it important for e-commerce?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Payment gateway", statement: "Secure payment processing." }],
              steps: [
                { reasoning: "Gateway processes payments securely.", marks: 1, markCode: "M" },
                { reasoning: "Encrypts card data; PCI compliance.", marks: 1, markCode: "M" },
                { reasoning: "Essential for secure transactions.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Secure payment processing",
            },
          },
          {
            id: "cieict-u3-ec-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define e-commerce, shopping cart, payment gateway, B2B/B2C, online marketplace, inventory management. (b) What is B2C vs B2B vs C2C? (c) What is a shopping cart? (d) Why use a payment gateway? (e) What is an online marketplace? (f) What is inventory management? (g) Compare own website vs marketplace selling. (h) Evaluate which model suits a school charity shop.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "E-commerce", statement: "Models, tools, evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Consumer/business models explained.", marks: 1, markCode: "M" },
                { reasoning: "(c) Virtual basket for purchases.", marks: 1, markCode: "M" },
                { reasoning: "(d) Secure transaction processing.", marks: 1, markCode: "M" },
                { reasoning: "(e) Buyer-seller platform.", marks: 1, markCode: "M" },
                { reasoning: "(f) Track stock/orders.", marks: 1, markCode: "M" },
                { reasoning: "(g) Control vs audience trade-off.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid model evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "E-commerce models and business tools.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u3-ec-notes", title: "E-commerce — notes",
      summary: "B2C/B2B/C2C models; payment gateways secure transactions; marketplaces provide audience.",
      sections: [
        { heading: "Key idea", body: "Choose model based on customers, scale and control needs." },
        { heading: "Security", body: "Payment gateways encrypt card data — never store directly." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson99",
    lesson: {
      id: "cieict-u3-lesson-3-4", code: "3-4",
      title: "ICT Project Evaluation",
      goal: "I CAN evaluate ICT projects against objectives and identify improvements.",
      standards: ["Cambridge IGCSE ICT 0417: evaluation", "0417: project assessment"],
      vocabulary: [
        { term: "Evaluation", definition: "Assessing success against criteria." },
        { term: "Success criteria", definition: "Measurable standards for judging outcomes." },
        { term: "User feedback", definition: "Opinions from people using the product." },
        { term: "Efficiency", definition: "How well resources are used." },
        { term: "Effectiveness", definition: "Whether objectives were achieved." },
        { term: "Improvement", definition: "Changes to make product better." },
      ],
      concept: {
        id: "cieict-u3-s4-eval", title: "Project evaluation",
        skill: "Evaluate ICT projects systematically at IGCSE level.",
        sections: [
          { heading: "Evaluation criteria", body: "Did it meet objectives? Is it user-friendly? Is it efficient? Is it secure? Gather user feedback. Compare actual vs planned outcomes." },
          { heading: "Improvement cycle", body: "Identify weaknesses → prioritise fixes → implement changes → re-test. Evaluation isn't just criticism — it's learning what works and planning next iteration." },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "objectives vs outcomes" },
          { name: "Feedback", statement: "user opinions guide improvement" },
          { name: "Iteration", statement: "evaluate→improve→re-test" },
        ],
        workedExample: {
          problem: "Evaluate a school website you built. What criteria and feedback would you gather?",
          solution: "Check: meets objectives? User-friendly? Fast? Mobile-friendly? Gather teacher/student feedback → identify issues → plan improvements.",
        },
        questions: [
          {
            id: "cieict-u3-pe-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is evaluation in ICT projects?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Assessing success against criteria" }, { id: "b", text: "A type of software" }, { id: "c", text: "A network device" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Evaluation", statement: "Success assessment." }],
              steps: [{ reasoning: "Evaluation = judging against criteria.", marks: 1, markCode: "M" }],
              finalAnswer: "Success assessment",
            },
          },
          {
            id: "cieict-u3-pe-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between effectiveness and efficiency?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Effective vs efficient", statement: "Goals vs resources." }],
              steps: [
                { reasoning: "Effective=achieved objectives; efficient=used resources well.", marks: 1, markCode: "M" },
                { reasoning: "Both matter for success.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Goals vs resource use",
            },
          },
          {
            id: "cieict-u3-pe-q3", difficulty: "core", totalMarks: 3,
            stem: "Why gather user feedback when evaluating a project? What types of feedback are useful?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "User feedback", statement: "Real-world validation." }],
              steps: [
                { reasoning: "Feedback reveals real usability issues.", marks: 1, markCode: "M" },
                { reasoning: "Types: usability, functionality, satisfaction.", marks: 1, markCode: "M" },
                { reasoning: "Guides improvements.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Reveals real issues; guides improvements",
            },
          },
          {
            id: "cieict-u3-pe-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define evaluation, success criteria, user feedback, efficiency, effectiveness, improvement. (b) What makes good success criteria? (c) How do you gather user feedback? (d) What is effectiveness vs efficiency? (e) Why iterate after evaluation? (f) What should an evaluation report include? (g) How do you prioritise improvements? (h) Evaluate a hypothetical school canteen ordering system.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Evaluation", statement: "Criteria, feedback, improvement." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Measurable, relevant, achievable.", marks: 1, markCode: "M" },
                { reasoning: "(c) Surveys, interviews, observation.", marks: 1, markCode: "M" },
                { reasoning: "(d) Goals vs resources.", marks: 1, markCode: "M" },
                { reasoning: "(e) Improve based on findings.", marks: 1, markCode: "M" },
                { reasoning: "(f) Objectives, outcomes, feedback, recommendations.", marks: 1, markCode: "M" },
                { reasoning: "(g) Impact vs effort.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid canteen system evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Project evaluation and improvement cycles.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u3-pe-notes", title: "Evaluation — notes",
      summary: "Evaluate against objectives; gather user feedback; iterate to improve.",
      sections: [
        { heading: "Key idea", body: "Evaluation closes the loop — learn, improve, re-test." },
        { heading: "Criteria", body: "Measurable success criteria set before starting." },
      ],
    },
  },
];
