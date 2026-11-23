module.exports = [
  {
    file: "lesson-13-1.ts",
    exportName: "lesson131",
    lesson: {
      id: "ebz11-u13-lesson-13-1",
      code: "13-1",
      title: "Organisational Structure and Delegation",
      goal: "I CAN explain hierarchy, span of control, delegation and centralised or decentralised decision-making.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — People in Business",
        "4BS0 2.5 Organisation structure and employees",
      ],
      vocabulary: [
        { term: "Organisation chart", definition: "Diagram showing job roles and reporting relationships." },
        { term: "Hierarchy", definition: "Levels of authority from senior to junior." },
        { term: "Chain of command", definition: "Route through which orders pass down the organisation." },
        { term: "Span of control", definition: "Number of subordinates directly managed by one person." },
        { term: "Delegation", definition: "Giving responsibility and authority to a subordinate." },
        { term: "Centralisation", definition: "Decision-making concentrated at the top." },
        { term: "Decentralisation", definition: "Decision-making spread to lower levels." },
      ],
      concepts: [
        {
          id: "ebz11-u13-structure",
          title: "Hierarchy, Span of Control and Delegation",
          skill: "Analyse organisational structure and the delegation of authority.",
          sections: [
            {
              heading: "Structure and control",
              body: "An **organisation chart** shows formal structure: job titles, hierarchy and reporting lines. **Hierarchy** is the chain of command from directors to workers. A **tall structure** has many levels; a **flat structure** has fewer levels.\n\n**Span of control** is the number of people a manager directly supervises. A wide span suits routine work and flat structures; a narrow span suits complex work needing close supervision. **Centralisation** keeps decisions at the top; **decentralisation** pushes decisions closer to operations.",
            },
            {
              heading: "Delegation",
              body: "**Delegation** means a manager gives a subordinate responsibility, authority and accountability for a task. Effective delegation includes clear objectives, resources, deadlines and feedback.\n\nBenefits: managers focus on strategic work, employees develop skills, decisions are faster. Risks: loss of control, poor coordination, mistakes and demotivation if credit is not given.",
            },
          ],
          keyFormulas: [
            { name: "Span of control", statement: "Subordinates / manager" },
            { name: "Delegation", statement: "Responsibility + authority + accountability" },
          ],
          workedExample: {
            problem: "A supervisor manages 12 workers. Is the span of control wide or narrow, and what does it imply?",
            solution: "12 subordinates is a wide span; the supervisor may need simple tasks and strong systems.",
          },
          questions: [
            {
              id: "ebz11-u13-structure-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is span of control?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Number of departments" },
                  { id: "b", text: "Number of subordinates directly managed" },
                  { id: "c", text: "Length of the working day" },
                  { id: "d", text: "Amount of profit earned" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Span of control", statement: "Direct subordinates per manager." },
                ],
                steps: [
                  { reasoning: "Span = number of direct reports.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Direct subordinates",
                commonErrors: ["Confusing with hierarchy levels."],
              },
            },
            {
              id: "ebz11-u13-structure-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain the difference between a tall and a flat organisational structure.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Tall vs flat", statement: "Many levels versus fewer levels." },
                ],
                steps: [
                  { reasoning: "Tall structure has many hierarchical levels.", marks: 1, markCode: "AO1" },
                  { reasoning: "Flat structure has fewer levels and wider spans.", marks: 1, markCode: "AO1" },
                  { reasoning: "Tall may slow decisions; flat may speed them but need trust.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Tall = many levels; flat = fewer levels/wider spans.",
                commonErrors: ["Only describing hierarchy."],
              },
            },
            {
              id: "ebz11-u13-structure-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give one benefit and one risk of delegation for a manager.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Delegation", statement: "Frees managers but can reduce control." },
                ],
                steps: [
                  { reasoning: "Benefit: manager can focus on strategic tasks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Benefit: employee develops skills and motivation.", marks: 1, markCode: "AO2" },
                  { reasoning: "Risk: subordinate may make mistakes without support.", marks: 1, markCode: "AO2" },
                  { reasoning: "Risk: manager may lose control or credit.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Benefit = time/skills; risk = mistakes/loss of control.",
                commonErrors: ["Only one side."],
              },
            },
            {
              id: "ebz11-u13-structure-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare centralisation and decentralisation in a business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Centralisation", statement: "Top-down control versus local decision-making." },
                ],
                steps: [
                  { reasoning: "Centralisation gives consistent decisions and control.", marks: 1, markCode: "AO2" },
                  { reasoning: "Centralisation may be slow for local issues.", marks: 1, markCode: "AO2" },
                  { reasoning: "Decentralisation allows faster local responses.", marks: 1, markCode: "AO2" },
                  { reasoning: "Decentralisation may create inconsistency between units.", marks: 1, markCode: "AO2" },
                  { reasoning: "Large multinationals often use decentralised local decisions.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Central = control/consistency; decentral = speed/local response.",
                commonErrors: ["Treating them as opposites without trade-offs."],
              },
            },
            {
              id: "ebz11-u13-structure-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A call-centre team leader supervises 20 agents. Evaluate whether this span of control is appropriate.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Span of control", statement: "Wide spans suit routine work; narrow spans suit complex work." },
                ],
                steps: [
                  { reasoning: "20 direct reports is a wide span.", marks: 1, markCode: "AO2" },
                  { reasoning: "Call-centre tasks can be routine and scripted.", marks: 1, markCode: "AO2" },
                  { reasoning: "Systems can monitor calls and support agents.", marks: 1, markCode: "AO2" },
                  { reasoning: "Wide span may reduce personal supervision.", marks: 1, markCode: "AO2" },
                  { reasoning: "Complex customer issues may need more support.", marks: 1, markCode: "AO3" },
                  { reasoning: "Team leaders may become overloaded.", marks: 1, markCode: "AO3" },
                  { reasoning: "A smaller span or team-leader structure may be better.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "20 is wide; acceptable only with strong systems, otherwise reduce span.",
                commonErrors: ["Assuming wider is always better."],
              },
            },
            {
              id: "ebz11-u13-structure-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A small business with 10 employees plans to grow to 100. Discuss how its organisational structure should change.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Organisational design", statement: "Structure must match size, complexity and control needs." },
                ],
                steps: [
                  { reasoning: "At 10 employees, informal flat structure may work.", marks: 1, markCode: "AO2" },
                  { reasoning: "At 100 employees, formal departments become necessary.", marks: 1, markCode: "AO2" },
                  { reasoning: "Functional departments can separate production, marketing, HR and finance.", marks: 1, markCode: "AO2" },
                  { reasoning: "More managers are needed for narrower spans.", marks: 1, markCode: "AO2" },
                  { reasoning: "Delegation becomes essential to avoid overload.", marks: 1, markCode: "AO2" },
                  { reasoning: "Clear chain of command reduces confusion.", marks: 1, markCode: "AO3" },
                  { reasoning: "Too many levels may slow decisions.", marks: 1, markCode: "AO3" },
                  { reasoning: "Cross-functional teams can improve coordination.", marks: 1, markCode: "AO3" },
                  { reasoning: "Technology can support communication and control.", marks: 1, markCode: "AO3" },
                  { reasoning: "Structure should be reviewed as the business continues to grow.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Move from informal flat structure to formal departments with delegation and clear reporting lines.",
                commonErrors: ["Keeping the same structure despite growth."],
              },
            },
          ],
        },
        {
          id: "ebz11-u13-decision",
          title: "Centralisation, Decentralisation and Accountability",
          skill: "Evaluate where decisions should be made and who is answerable for them.",
          sections: [
            {
              heading: "Where decisions are made",
              body: "In a **centralised** business, senior managers make most decisions. This gives consistency, control and easier coordination, but may be slow and ignore local knowledge.\n\nIn a **decentralised** business, decisions are pushed down to branches, departments or team leaders. This gives faster responses and uses local expertise, but may create inconsistency and weaker control.",
            },
            {
              heading: "Authority, responsibility and accountability",
              body: "**Authority** is the right to give instructions and make decisions. **Responsibility** is the duty to carry out tasks. **Accountability** is the obligation to explain results to someone higher.\n\nThe **chain of command** shows who reports to whom. Clear accountability means employees know who to answer to and who answers for performance. Delegation transfers responsibility and authority but the manager usually remains accountable.",
            },
          ],
          keyFormulas: [
            { name: "Centralisation", statement: "Decisions at the top" },
            { name: "Decentralisation", statement: "Decisions at lower levels" },
            { name: "Accountability", statement: "Answering to someone higher" },
          ],
          workedExample: {
            problem: "A branch manager changes prices without head-office approval. What accountability issue arises?",
            solution: "The branch acted without authority; head office may still be accountable for results if the manager exceeded delegated powers.",
          },
          questions: [
            {
              id: "ebz11-u13-decision-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What does accountability mean in a business?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The right to give orders" },
                  { id: "b", text: "The duty to complete tasks" },
                  { id: "c", text: "Answering to someone for results" },
                  { id: "d", text: "Sharing profits equally" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Accountability", statement: "Answering to someone higher for results." },
                ],
                steps: [
                  { reasoning: "Accountability = answer for results.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** Answering to someone for results",
                commonErrors: ["Confusing accountability with authority."],
              },
            },
            {
              id: "ebz11-u13-decision-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Distinguish between authority, responsibility and accountability.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Authority/responsibility/accountability", statement: "Right, duty and answerability." },
                ],
                steps: [
                  { reasoning: "Authority = right to make decisions.", marks: 1, markCode: "AO1" },
                  { reasoning: "Responsibility = duty to carry out tasks.", marks: 1, markCode: "AO1" },
                  { reasoning: "Accountability = answer to someone for results.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Authority=right; responsibility=duty; accountability=answerability.",
                commonErrors: ["Using the terms interchangeably."],
              },
            },
            {
              id: "ebz11-u13-decision-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two benefits of decentralising decision-making in a chain of shops.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Decentralisation", statement: "Local decisions use local knowledge and speed." },
                ],
                steps: [
                  { reasoning: "Branch managers know local customers and conditions.", marks: 1, markCode: "AO2" },
                  { reasoning: "Decisions can be made faster without head-office delay.", marks: 1, markCode: "AO2" },
                  { reasoning: "Managers feel trusted and may be more motivated.", marks: 1, markCode: "AO2" },
                  { reasoning: "Head office can focus on strategy rather than routine choices.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Local knowledge, speed, motivation and strategic focus.",
                commonErrors: ["Ignoring possible inconsistency."],
              },
            },
            {
              id: "ebz11-u13-decision-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare centralised and decentralised control for a supermarket chain.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Central vs decentral", statement: "Consistency versus local responsiveness." },
                ],
                steps: [
                  { reasoning: "Centralised buying ensures consistent prices and suppliers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Centralised control may ignore local demand differences.", marks: 1, markCode: "AO2" },
                  { reasoning: "Decentralised stores can respond to local customers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Decentralisation may create inconsistent standards.", marks: 1, markCode: "AO2" },
                  { reasoning: "A hybrid model can centralise major decisions and delegate local ones.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Central for consistency; decentral for local response; hybrid often best.",
                commonErrors: ["One-sided answer."],
              },
            },
            {
              id: "ebz11-u13-decision-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Explain how the chain of command affects communication and control in a business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Chain of command", statement: "Clear reporting lines support control and accountability." },
                ],
                steps: [
                  { reasoning: "Orders pass through defined levels.", marks: 1, markCode: "AO2" },
                  { reasoning: "Employees know who gives instructions.", marks: 1, markCode: "AO2" },
                  { reasoning: "Managers know who they must answer to.", marks: 1, markCode: "AO2" },
                  { reasoning: "Many levels can slow communication.", marks: 1, markCode: "AO2" },
                  { reasoning: "Too few levels may overload managers.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear lines reduce confusion and duplicated effort.", marks: 1, markCode: "AO3" },
                  { reasoning: "Structure should match business size and complexity.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Clear chain of command supports control but must avoid delays or overload.",
                commonErrors: ["Ignoring speed versus control trade-off."],
              },
            },
            {
              id: "ebz11-u13-decision-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A growing retailer must decide whether purchasing and pricing should be centralised at head office or delegated to regional managers. Evaluate the decision.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Central vs decentral", statement: "Evaluate consistency, cost, local knowledge and control." },
                  { kind: "skill", name: "Evaluation", statement: "Recommend a justified structure." },
                ],
                steps: [
                  { reasoning: "Central purchasing can secure bulk discounts.", marks: 1, markCode: "AO2" },
                  { reasoning: "Central pricing ensures consistency across stores.", marks: 1, markCode: "AO2" },
                  { reasoning: "Regional managers know local demand better.", marks: 1, markCode: "AO2" },
                  { reasoning: "Delegation can speed responses to local conditions.", marks: 1, markCode: "AO2" },
                  { reasoning: "Too much decentralisation may create price inconsistency.", marks: 1, markCode: "AO2" },
                  { reasoning: "Too much centralisation may ignore regional differences.", marks: 1, markCode: "AO3" },
                  { reasoning: "Head office should set policies and limits.", marks: 1, markCode: "AO3" },
                  { reasoning: "Regional managers can decide within agreed ranges.", marks: 1, markCode: "AO3" },
                  { reasoning: "Accountability must be clear for both levels.", marks: 1, markCode: "AO3" },
                  { reasoning: "A hybrid approach balances control and responsiveness.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Use centralised policies with delegated regional decisions within clear limits.",
                commonErrors: ["No recommendation.", "Ignoring accountability."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u13-structure-notes",
      title: "Organisation structure — notes",
      summary: "Hierarchy, span of control and delegation determine how work is controlled; centralisation trades consistency for speed.",
      sections: [
        { heading: "Structure", body: "Organisation charts show hierarchy, chain of command and reporting lines. Tall structures have many levels; flat structures have wider spans." },
        { heading: "Delegation", body: "Delegation transfers responsibility and authority but managers remain accountable. It develops staff and frees managers." },
        { heading: "Decisions", body: "Centralisation gives consistency; decentralisation gives local speed. Authority, responsibility and accountability must be clear." },
      ],
    },
  },
  {
    file: "lesson-13-2.ts",
    exportName: "lesson132",
    lesson: {
      id: "ebz11-u13-lesson-13-2",
      code: "13-2",
      title: "Functional Areas and Accountability",
      goal: "I CAN explain functional departments, interdependence and employee accountability.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — People in Business",
        "4BS0 2.5 Organisation structure and employees",
      ],
      vocabulary: [
        { term: "Functional area", definition: "Group of related activities with a particular purpose." },
        { term: "Department", definition: "Part of a business where employees specialise in related work." },
        { term: "Interdependence", definition: "Departments relying on each other's outputs." },
        { term: "Role", definition: "Expected duties and responsibilities of an employee." },
        { term: "Compliance", definition: "Following rules, policies and legal requirements." },
        { term: "Accountability", definition: "Answering to someone for performance." },
      ],
      concepts: [
        {
          id: "ebz11-u13-departments",
          title: "Functional Departments and Interdependence",
          skill: "Explain functional areas and how departments depend on one another.",
          sections: [
            {
              heading: "Functional departments",
              body: "Large businesses divide work into **functional departments**: production makes goods/services, marketing researches and sells, human resources manages people, finance controls money and administration supports operations. Each department has specialist skills.\n\nDepartments are **interdependent** — marketing needs production to supply products; production needs finance for resources; HR supports all departments. Poor coordination between departments can cause delays and errors.",
            },
            {
              heading: "Functional areas in practice",
              body: "**Production** focuses on making goods or services efficiently and safely. **Marketing** focuses on customers, products and sales. **Human resources** focuses on people, recruitment and welfare. **Finance** focuses on budgets, costs and cash flow. **Administration** supports records, systems and office services.\n\nEach area has its own priorities, but the business succeeds only when their outputs fit together. For example, marketing cannot sell a product that production cannot supply, and finance cannot fund a plan without reliable cost information.",
            },
          ],
          keyFormulas: [
            { name: "Interdependence", statement: "Departments rely on each other's outputs" },
            { name: "Functional areas", statement: "Production + marketing + HR + finance + administration" },
          ],
          workedExample: {
            problem: "Marketing promises a product launch date that production cannot meet. What interdependence problem is shown?",
            solution: "Marketing and production are interdependent; poor communication caused a conflicting promise.",
          },
          questions: [
            {
              id: "ebz11-u13-departments-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which department is mainly responsible for recruiting and training staff?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Production" },
                  { id: "b", text: "Marketing" },
                  { id: "c", text: "Human resources" },
                  { id: "d", text: "Finance" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "HR department", statement: "Manages recruitment, training and employee relations." },
                ],
                steps: [
                  { reasoning: "Recruitment and training are HR functions.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** Human resources",
                commonErrors: ["Confusing HR with finance."],
              },
            },
            {
              id: "ebz11-u13-departments-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain what is meant by departmental interdependence.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Interdependence", statement: "Departments rely on each other's work." },
                ],
                steps: [
                  { reasoning: "Marketing depends on production for products.", marks: 1, markCode: "AO1" },
                  { reasoning: "Production depends on finance for resources.", marks: 1, markCode: "AO1" },
                  { reasoning: "Delays in one department affect others.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Departments rely on each other's outputs; problems spread across the business.",
                commonErrors: ["Thinking departments are isolated."],
              },
            },
            {
              id: "ebz11-u13-departments-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Identify two functional areas and state the main purpose of each.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Functional areas", statement: "Production, marketing, HR, finance and administration." },
                ],
                steps: [
                  { reasoning: "Production makes goods/services efficiently.", marks: 1, markCode: "AO2" },
                  { reasoning: "Marketing researches customers and sells products.", marks: 1, markCode: "AO2" },
                  { reasoning: "HR manages recruitment, training and welfare.", marks: 1, markCode: "AO2" },
                  { reasoning: "Finance controls budgets, costs and cash flow.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Production=make; marketing=sell; HR=people; finance=money control.",
                commonErrors: ["Only one area."],
              },
            },
            {
              id: "ebz11-u13-departments-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare the goals of finance and marketing departments.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Functional goals", statement: "Money control versus customer focus." },
                ],
                steps: [
                  { reasoning: "Finance aims for cost control, budgets and profit.", marks: 1, markCode: "AO2" },
                  { reasoning: "Marketing aims for sales, customers and market share.", marks: 1, markCode: "AO2" },
                  { reasoning: "Finance may resist spending on promotion.", marks: 1, markCode: "AO2" },
                  { reasoning: "Marketing may push for campaigns that raise costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Shared targets align spending with profitable sales.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Finance controls costs/profit; marketing drives sales; they must be aligned.",
                commonErrors: ["Assuming both departments have identical goals."],
              },
            },
            {
              id: "ebz11-u13-departments-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Evaluate the coordination needed between functional areas for launching a new product.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Functional coordination", statement: "Different departments must align outputs for one launch." },
                ],
                steps: [
                  { reasoning: "Marketing must confirm customer demand and launch plan.", marks: 1, markCode: "AO2" },
                  { reasoning: "Production must confirm capacity and quality.", marks: 1, markCode: "AO2" },
                  { reasoning: "Finance must approve budget and cash flow.", marks: 1, markCode: "AO2" },
                  { reasoning: "HR must ensure staffing and training are ready.", marks: 1, markCode: "AO2" },
                  { reasoning: "Conflicting priorities can delay the launch.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear leadership and shared objectives are needed.", marks: 1, markCode: "AO3" },
                  { reasoning: "Coordination improves the chance of a successful launch.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Align marketing, production, finance and HR through shared goals and clear coordination.",
                commonErrors: ["Only listing departments without evaluation."],
              },
            },
            {
              id: "ebz11-u13-departments-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Sales and production departments frequently blame each other for missed deadlines. Recommend improvements to coordination and accountability.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Interdepartmental coordination", statement: "Shared goals, meetings, information systems and clear roles." },
                ],
                steps: [
                  { reasoning: "Set shared objectives linking sales targets to production capacity.", marks: 1, markCode: "AO2" },
                  { reasoning: "Hold regular joint planning meetings.", marks: 1, markCode: "AO2" },
                  { reasoning: "Use a shared information system for orders and stock.", marks: 1, markCode: "AO2" },
                  { reasoning: "Clarify responsibilities and deadlines for each department.", marks: 1, markCode: "AO2" },
                  { reasoning: "Create a liaison role or project manager.", marks: 1, markCode: "AO2" },
                  { reasoning: "Encourage early warning when problems arise.", marks: 1, markCode: "AO3" },
                  { reasoning: "Review performance together rather than blaming one side.", marks: 1, markCode: "AO3" },
                  { reasoning: "Train staff in problem-solving and conflict resolution.", marks: 1, markCode: "AO3" },
                  { reasoning: "Align incentives so both departments benefit from success.", marks: 1, markCode: "AO3" },
                  { reasoning: "Monitor and adjust the coordination system over time.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Use shared goals, meetings, systems, liaison roles and aligned incentives.",
                commonErrors: ["Only blaming one department."],
              },
            },
          ],
        },
        {
          id: "ebz11-u13-roles",
          title: "Roles, Compliance and Accountability",
          skill: "Explain employee roles, compliance with rules and who answers for performance.",
          sections: [
            {
              heading: "Roles and compliance",
              body: "Each employee has a **role** — expected duties, responsibilities and standards. Roles must be clear so work is covered and accountability is possible. **Compliance** means following policies, procedures, contracts and legal requirements such as health and safety or equal opportunities.\n\nEmployees are accountable to managers; managers are accountable to senior managers or the board. Accountability can exist even when a subordinate performs the task — the manager remains answerable for the team's results.",
            },
            {
              heading: "Why clarity matters",
              body: "Unclear roles cause duplication, gaps, blame and poor performance. Clear roles help employees know what is expected, support appraisal and disciplinary procedures, and make delegation fair.\n\nFunctional areas have different goals: production wants efficiency and quality; marketing wants sales and customer satisfaction; finance wants control and profit; HR wants motivated, safe employees. Conflicts are resolved through shared objectives and clear accountability.",
            },
          ],
          keyFormulas: [
            { name: "Role", statement: "Expected duties and standards" },
            { name: "Compliance", statement: "Following rules, policies and law" },
            { name: "Accountability chain", statement: "Employee → manager → senior manager/board" },
          ],
          workedExample: {
            problem: "Two employees both think the other should check stock levels. What problem is this and how should it be fixed?",
            solution: "Roles are unclear; define who is responsible for stock checks and who is accountable for errors.",
          },
          questions: [
            {
              id: "ebz11-u13-roles-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is compliance in the workplace?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Working extra hours" },
                  { id: "b", text: "Following rules, policies and legal requirements" },
                  { id: "c", text: "Sharing workload equally" },
                  { id: "d", text: "Earning a bonus" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Compliance", statement: "Following rules, policies and law." },
                ],
                steps: [
                  { reasoning: "Compliance = following rules/policies/law.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Following rules, policies and legal requirements",
                commonErrors: ["Confusing compliance with productivity."],
              },
            },
            {
              id: "ebz11-u13-roles-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Distinguish between an employee's role and their accountability.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Role vs accountability", statement: "Duties versus answerability." },
                ],
                steps: [
                  { reasoning: "Role = expected duties and responsibilities.", marks: 1, markCode: "AO1" },
                  { reasoning: "Accountability = answer to someone for results.", marks: 1, markCode: "AO1" },
                  { reasoning: "A person can have duties without being the final answerable manager.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Role = duties; accountability = answerability to a higher level.",
                commonErrors: ["Treating them as identical."],
              },
            },
            {
              id: "ebz11-u13-roles-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain why compliance with company policies matters to a business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Compliance", statement: "Policies support safety, quality, legality and fairness." },
                ],
                steps: [
                  { reasoning: "Compliance reduces accidents and legal breaches.", marks: 1, markCode: "AO2" },
                  { reasoning: "It maintains consistent standards and quality.", marks: 1, markCode: "AO2" },
                  { reasoning: "It protects employees and customers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Non-compliance can cause fines, dismissal and reputational damage.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Compliance supports safety, quality, legality and reputation.",
                commonErrors: ["Only mentioning discipline."],
              },
            },
            {
              id: "ebz11-u13-roles-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare the goals of production and marketing departments.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Functional goals", statement: "Different departments prioritise different outcomes." },
                ],
                steps: [
                  { reasoning: "Production aims for efficiency, quality and reliable supply.", marks: 1, markCode: "AO2" },
                  { reasoning: "Marketing aims for sales, customers and market share.", marks: 1, markCode: "AO2" },
                  { reasoning: "Production may resist frequent design changes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Marketing may promise features production cannot meet.", marks: 1, markCode: "AO2" },
                  { reasoning: "Shared objectives and coordination reduce conflict.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Production prioritises efficiency/quality; marketing prioritises sales; coordination aligns them.",
                commonErrors: ["Assuming all departments have identical goals."],
              },
            },
            {
              id: "ebz11-u13-roles-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Discuss how unclear roles can cause conflict between employees and managers.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Role clarity", statement: "Unclear roles create duplication, gaps and blame." },
                ],
                steps: [
                  { reasoning: "Tasks may be duplicated or left undone.", marks: 1, markCode: "AO2" },
                  { reasoning: "Employees may blame each other for failures.", marks: 1, markCode: "AO2" },
                  { reasoning: "Managers may not know who to hold accountable.", marks: 1, markCode: "AO2" },
                  { reasoning: "Performance appraisal becomes unfair.", marks: 1, markCode: "AO2" },
                  { reasoning: "Morale falls when expectations are unclear.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear job descriptions and objectives reduce conflict.", marks: 1, markCode: "AO3" },
                  { reasoning: "Regular review keeps roles aligned with business needs.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Unclear roles cause duplication, blame and unfair accountability; clarity and review fix this.",
                commonErrors: ["Only blaming employees."],
              },
            },
            {
              id: "ebz11-u13-roles-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A product launch involves marketing, production, finance and HR. Design an accountability framework showing who is responsible and answerable for key tasks.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Accountability framework", statement: "Assign responsibility and answerability across departments." },
                ],
                steps: [
                  { reasoning: "Marketing is responsible for launch plan and customer demand.", marks: 1, markCode: "AO2" },
                  { reasoning: "Production is responsible for manufacturing capacity and quality.", marks: 1, markCode: "AO2" },
                  { reasoning: "Finance is responsible for budget and cash flow.", marks: 1, markCode: "AO2" },
                  { reasoning: "HR is responsible for staffing and training.", marks: 1, markCode: "AO2" },
                  { reasoning: "A project manager coordinates across departments.", marks: 1, markCode: "AO2" },
                  { reasoning: "Each department head answers to senior management.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear deadlines and milestones are agreed.", marks: 1, markCode: "AO3" },
                  { reasoning: "Regular progress reviews identify problems early.", marks: 1, markCode: "AO3" },
                  { reasoning: "Escalation routes handle unresolved issues.", marks: 1, markCode: "AO3" },
                  { reasoning: "Final accountability sits with the project sponsor or board.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Assign tasks to departments, coordinate via project manager, and escalate to senior management.",
                commonErrors: ["No clear answerable person."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u13-functions-notes",
      title: "Functional areas and accountability — notes",
      summary: "Departments specialise but depend on each other; clear roles and accountability prevent conflict.",
      sections: [
        { heading: "Departments", body: "Production, marketing, HR, finance and administration divide work but must coordinate outputs." },
        { heading: "Interdependence", body: "Marketing needs products; production needs resources; finance supports all. Delays spread across departments." },
        { heading: "Accountability", body: "Roles define duties; compliance follows rules; managers answer for team results." },
      ],
    },
  },
  {
    file: "lesson-13-3.ts",
    exportName: "lesson133",
    lesson: {
      id: "ebz11-u13-lesson-13-3",
      code: "13-3",
      title: "Health, Safety and Staff Welfare",
      goal: "I CAN explain employer and employee duties for health and safety and the role of staff welfare.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — People in Business",
        "4BS0 2.5 Organisation structure and employees",
      ],
      vocabulary: [
        { term: "Health and safety", definition: "Laws and practices protecting workers from harm." },
        { term: "Risk assessment", definition: "Identifying hazards and deciding how to control them." },
        { term: "PPE", definition: "Personal protective equipment such as helmets or gloves." },
        { term: "Hazard", definition: "Anything that could cause harm." },
        { term: "Staff welfare", definition: "Support for employee wellbeing and working conditions." },
        { term: "Wellbeing", definition: "Physical and mental health of employees." },
        { term: "Duty of care", definition: "Legal obligation to take reasonable care of others." },
      ],
      concepts: [
        {
          id: "ebz11-u13-safety",
          title: "Health and Safety at Work",
          skill: "Explain employer and employee responsibilities for workplace safety.",
          sections: [
            {
              heading: "Employer duties",
              body: "Employers have a **duty of care** to provide a safe workplace. This includes carrying out **risk assessments**, providing training, supplying suitable **PPE**, maintaining equipment, keeping facilities clean and having procedures for accidents and emergencies.\n\nSafe systems reduce accidents, lower insurance costs, improve morale and protect the business from fines, prosecution and reputational damage.",
            },
            {
              heading: "Employee duties and consequences",
              body: "Employees must follow safety rules, use equipment correctly, wear PPE, report hazards and attend training. They have a responsibility not to endanger themselves or others.\n\nPoor safety can cause injury, absenteeism, lower productivity, compensation claims and legal action. Safety should be embedded in induction and ongoing training, not treated as an afterthought.",
            },
          ],
          keyFormulas: [
            { name: "Risk assessment", statement: "Identify hazard → assess risk → control it" },
            { name: "Duty of care", statement: "Reasonable steps to protect workers" },
          ],
          workedExample: {
            problem: "A warehouse has slippery floors and workers carrying heavy boxes. Identify two safety measures.",
            solution: "Non-slip flooring and manual-handling training plus suitable footwear/PPE reduce slip and lifting risks.",
          },
          questions: [
            {
              id: "ebz11-u13-safety-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is a risk assessment?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Paying workers for overtime" },
                  { id: "b", text: "Identifying hazards and deciding how to control them" },
                  { id: "c", text: "Buying new machinery" },
                  { id: "d", text: "Hiring more staff" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Risk assessment", statement: "Identify hazards and control risks." },
                ],
                steps: [
                  { reasoning: "Risk assessment = identify hazard and control risk.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Identify hazards and control them",
                commonErrors: ["Confusing with insurance."],
              },
            },
            {
              id: "ebz11-u13-safety-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give one duty of employers and one duty of employees for health and safety.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Safety duties", statement: "Employer protects; employee follows rules." },
                ],
                steps: [
                  { reasoning: "Employer provides safe systems, training and PPE.", marks: 1, markCode: "AO1" },
                  { reasoning: "Employee follows safety rules and reports hazards.", marks: 1, markCode: "AO1" },
                  { reasoning: "Both duties are needed for an effective safety system.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Employer provides protection; employee follows rules and reports hazards.",
                commonErrors: ["Only one side."],
              },
            },
            {
              id: "ebz11-u13-safety-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two ways a business can reduce workplace accidents.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Accident prevention", statement: "Training, PPE, maintenance and safe procedures." },
                ],
                steps: [
                  { reasoning: "Provide training so workers know safe practices.", marks: 1, markCode: "AO2" },
                  { reasoning: "Supply and require PPE where hazards exist.", marks: 1, markCode: "AO2" },
                  { reasoning: "Maintain equipment and keep premises clean.", marks: 1, markCode: "AO2" },
                  { reasoning: "Encourage reporting and review incidents.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Training, PPE, maintenance and reporting/learning from incidents.",
                commonErrors: ["Only listing PPE."],
              },
            },
            {
              id: "ebz11-u13-safety-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Discuss the costs to a business of poor health and safety.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Safety costs", statement: "Accidents create financial, legal and human costs." },
                ],
                steps: [
                  { reasoning: "Injuries cause absenteeism and lost productivity.", marks: 1, markCode: "AO2" },
                  { reasoning: "Compensation claims and fines increase costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Morale and reputation can be damaged.", marks: 1, markCode: "AO2" },
                  { reasoning: "Legal prosecution may disrupt operations.", marks: 1, markCode: "AO2" },
                  { reasoning: "Prevention is usually cheaper than accident costs.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Absenteeism, claims/fines, morale, reputation and legal disruption.",
                commonErrors: ["Only financial costs."],
              },
            },
            {
              id: "ebz11-u13-safety-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A construction firm must choose between investing in more PPE or training workers in safe manual handling. Evaluate both options.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Safety investment", statement: "PPE protects; training prevents unsafe behaviour." },
                ],
                steps: [
                  { reasoning: "PPE provides immediate physical protection.", marks: 1, markCode: "AO2" },
                  { reasoning: "PPE can be uncomfortable or misused if not trained.", marks: 1, markCode: "AO2" },
                  { reasoning: "Training teaches correct lifting techniques.", marks: 1, markCode: "AO2" },
                  { reasoning: "Training reduces reliance on PPE alone.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both are needed for different hazards.", marks: 1, markCode: "AO3" },
                  { reasoning: "Best approach combines PPE with training and supervision.", marks: 1, markCode: "AO3" },
                  { reasoning: "Decision depends on specific hazards and tasks.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Use PPE for protection and training for prevention; combine both.",
                commonErrors: ["Choosing one without justification."],
              },
            },
            {
              id: "ebz11-u13-safety-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A factory accident caused injury because a machine guard was missing. Recommend an investigation and safety improvements.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Incident response", statement: "Investigate cause, control risk and prevent recurrence." },
                ],
                steps: [
                  { reasoning: "Secure the scene and provide first aid.", marks: 1, markCode: "AO2" },
                  { reasoning: "Investigate why the guard was missing.", marks: 1, markCode: "AO2" },
                  { reasoning: "Check maintenance records and supervision.", marks: 1, markCode: "AO2" },
                  { reasoning: "Identify whether training or procedures failed.", marks: 1, markCode: "AO2" },
                  { reasoning: "Replace guards and improve inspection routines.", marks: 1, markCode: "AO2" },
                  { reasoning: "Retrain staff on machine safety.", marks: 1, markCode: "AO3" },
                  { reasoning: "Introduce regular safety audits.", marks: 1, markCode: "AO3" },
                  { reasoning: "Encourage hazard reporting without blame.", marks: 1, markCode: "AO3" },
                  { reasoning: "Record findings and monitor compliance.", marks: 1, markCode: "AO3" },
                  { reasoning: "Review the safety system after changes.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Investigate cause, restore guards, retrain staff, audit and monitor safety.",
                commonErrors: ["Only replacing the guard without investigation."],
              },
            },
          ],
        },
        {
          id: "ebz11-u13-welfare",
          title: "Staff Welfare and Employee Support",
          skill: "Explain staff welfare provision and its benefits for employees and employers.",
          sections: [
            {
              heading: "What staff welfare includes",
              body: "**Staff welfare** covers working conditions and support that improve wellbeing: clean facilities, drinking water, rest areas, protective equipment, counselling, employee assistance, flexible working, childcare support and help with work-related stress.\n\nWelfare is part of the HR function. It supports recruitment, retention, motivation and legal compliance. Poor welfare can increase absence, turnover and conflict.",
            },
            {
              heading: "Employment issues and support",
              body: "HR also supports **employment issues** such as contracts, pay queries, absence, grievances and changes in working arrangements. Support may include mediation, flexible hours, occupational health referrals or reasonable adjustments for disabled employees.\n\nEffective welfare balances employee needs with business costs. It is not charity — it helps the business retain skilled staff, reduce accidents and maintain a positive reputation.",
            },
          ],
          keyFormulas: [
            { name: "Staff welfare", statement: "Conditions and support for employee wellbeing" },
            { name: "Welfare trade-off", statement: "Cost now versus retention, morale and productivity" },
          ],
          workedExample: {
            problem: "A call centre has high stress absence. Suggest two welfare improvements.",
            solution: "Provide counselling/employee assistance and introduce regular breaks or flexible shift patterns.",
          },
          questions: [
            {
              id: "ebz11-u13-welfare-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is an example of staff welfare provision?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Profit sharing" },
                  { id: "b", text: "Clean rest facilities and drinking water" },
                  { id: "c", text: "A company car" },
                  { id: "d", text: "A sales commission" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Staff welfare", statement: "Support for wellbeing and working conditions." },
                ],
                steps: [
                  { reasoning: "Facilities and drinking water support welfare.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Clean rest facilities and drinking water",
                commonErrors: ["Confusing financial rewards with welfare."],
              },
            },
            {
              id: "ebz11-u13-welfare-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain two benefits of good staff welfare for a business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Welfare benefits", statement: "Better morale, retention and productivity." },
                ],
                steps: [
                  { reasoning: "Employees are more motivated and less stressed.", marks: 1, markCode: "AO2" },
                  { reasoning: "Lower absence and turnover reduce costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Good reputation helps recruitment.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Motivation, lower absence/turnover and better recruitment reputation.",
                commonErrors: ["Only employee benefits, not business benefits."],
              },
            },
            {
              id: "ebz11-u13-welfare-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give two examples of non-financial employee support a business can provide.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Employee support", statement: "Counselling, flexibility, facilities and adjustments." },
                ],
                steps: [
                  { reasoning: "Counselling or employee assistance for stress.", marks: 1, markCode: "AO2" },
                  { reasoning: "Flexible hours or remote working arrangements.", marks: 1, markCode: "AO2" },
                  { reasoning: "Reasonable adjustments for disabled employees.", marks: 1, markCode: "AO2" },
                  { reasoning: "Support with grievances or employment issues.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Counselling, flexible hours, adjustments and grievance support.",
                commonErrors: ["Only listing pay."],
              },
            },
            {
              id: "ebz11-u13-welfare-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Compare the costs and benefits of investing in staff welfare.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Welfare investment", statement: "Short-term cost versus long-term benefits." },
                ],
                steps: [
                  { reasoning: "Costs include facilities, training and support services.", marks: 1, markCode: "AO2" },
                  { reasoning: "Benefits include lower absence and turnover.", marks: 1, markCode: "AO2" },
                  { reasoning: "Benefits include higher morale and productivity.", marks: 1, markCode: "AO2" },
                  { reasoning: "Benefits include legal compliance and reputation.", marks: 1, markCode: "AO2" },
                  { reasoning: "Value depends on whether benefits exceed ongoing costs.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Welfare costs money but can reduce absence, improve morale and support compliance.",
                commonErrors: ["Ignoring long-term benefits."],
              },
            },
            {
              id: "ebz11-u13-welfare-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "Evaluate a proposed wellness programme for an office-based business with high stress levels.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Wellness programme", statement: "Supports wellbeing but must address causes of stress." },
                ],
                steps: [
                  { reasoning: "Wellness activities can reduce stress symptoms.", marks: 1, markCode: "AO2" },
                  { reasoning: "They may improve morale and retention.", marks: 1, markCode: "AO2" },
                  { reasoning: "They cost money and staff time.", marks: 1, markCode: "AO2" },
                  { reasoning: "They may not fix root causes like workload or management.", marks: 1, markCode: "AO2" },
                  { reasoning: "Combine with workload review and flexible hours.", marks: 1, markCode: "AO3" },
                  { reasoning: "Measure participation and absence to judge effectiveness.", marks: 1, markCode: "AO3" },
                  { reasoning: "Best if tailored to actual employee needs.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Wellness helps but should be combined with workload and management changes.",
                commonErrors: ["Treating wellness as a complete solution."],
              },
            },
            {
              id: "ebz11-u13-welfare-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Design a staff welfare package for nurses working rotating shifts in a hospital. Justify each provision.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Welfare design", statement: "Match provisions to employee needs and work demands." },
                ],
                steps: [
                  { reasoning: "Provide rest facilities for shift breaks.", marks: 1, markCode: "AO2" },
                  { reasoning: "Offer counselling for stress and trauma support.", marks: 1, markCode: "AO2" },
                  { reasoning: "Give access to occupational health for physical demands.", marks: 1, markCode: "AO2" },
                  { reasoning: "Support childcare or flexible rostering for family needs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Provide PPE and safety training for clinical hazards.", marks: 1, markCode: "AO2" },
                  { reasoning: "Welfare reduces burnout and absence.", marks: 1, markCode: "AO3" },
                  { reasoning: "It improves retention of skilled nurses.", marks: 1, markCode: "AO3" },
                  { reasoning: "It supports patient safety through alert staff.", marks: 1, markCode: "AO3" },
                  { reasoning: "It meets duty of care and legal expectations.", marks: 1, markCode: "AO3" },
                  { reasoning: "Regular review keeps provision relevant.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Combine rest, counselling, occupational health, flexible rostering, PPE and safety training.",
                commonErrors: ["Generic benefits not linked to shift work."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u13-welfare-notes",
      title: "Health, safety and welfare — notes",
      summary: "Employers owe a duty of care; welfare support improves safety, morale, retention and productivity.",
      sections: [
        { heading: "Safety", body: "Risk assessments, training, PPE, maintenance and incident reporting reduce accidents and legal risk." },
        { heading: "Duties", body: "Employers provide protection; employees follow rules, use PPE and report hazards." },
        { heading: "Welfare", body: "Facilities, counselling, flexibility and support improve wellbeing and business performance." },
      ],
    },
  },
];
