import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "bus-u3-lesson-3-3",
  code: "3-3",
  title: "Leadership styles and organisational structure",
  goal: "I CAN compare autocratic, democratic and laissez-faire leadership, and describe flat, tall, functional and divisional structures.",
  standards: ["Paper 1", "Paper 2", "Topic 3.3"],
  vocabulary: [
    {
      term: "Leadership",
      definition:
        "The ability to influence and direct people towards achieving organisational goals.",
    },
    {
      term: "Autocratic leadership",
      definition: "Leader makes all decisions alone; subordinates simply obey.",
    },
    {
      term: "Democratic leadership",
      definition: "Leader consults subordinates before making decisions.",
    },
    {
      term: "Laissez-faire leadership",
      definition: "Leader delegates almost all decisions to the team.",
    },
    {
      term: "Span of control",
      definition: "The number of subordinates a manager directly supervises.",
    },
    {
      term: "Chain of command",
      definition:
        "The formal line of authority from top to bottom of the organisation.",
    },
    {
      term: "Functional structure",
      definition:
        "Organising by departments such as marketing, production and finance.",
    },
    {
      term: "Divisional structure",
      definition:
        "Organising by product, region or customer group, each with its own functions.",
    },
  ],
  concepts: [
    {
      id: "bus-u3-leadership",
      title: "Leadership styles",
      skill:
        "Compare autocratic, democratic and laissez-faire styles and evaluate when each is appropriate.",
      lesson: {
        sections: [
          {
            heading: "The three classic styles",
            body: "**Autocratic** leaders decide alone and issue orders — fast decisions and clear control, but low morale and creativity. **Democratic** leaders consult the team before deciding — slower but higher commitment and better ideas. **Laissez-faire** leaders delegate almost everything — maximum freedom, but can drift without direction.",
          },
          {
            heading: "Situational leadership",
            body: "No single style suits every situation. **Situational leadership** argues the best style depends on the task, the team's skill and maturity, and the urgency of the decision. Crises may need autocratic decisiveness; creative projects suit democratic or laissez-faire approaches.",
          },
          {
            heading: "Evaluating leadership",
            body: "Exam questions ask you to evaluate a style for a scenario: autocratic suits emergencies and unskilled teams; democratic suits skilled, motivated teams and long-term commitment; laissez-faire suits expert self-directed teams. Consider morale, speed, quality of decisions and flexibility.",
          },
        ],
        keyFormulas: [
          {
            name: "Leadership styles",
            statement:
              "Autocratic = decide alone; Democratic = consult; Laissez-faire = delegate",
          },
          {
            name: "Situational leadership",
            statement: "Best style depends on task, team skill and urgency",
          },
        ],
        workedExample: {
          problem:
            "A fire breaks out in a factory. Which leadership style is most appropriate at that moment and why?",
          solution:
            "Autocratic: an emergency demands instant, clear decisions. Consulting or delegating would waste critical seconds; once safe, democratic leadership can review what happened.",
        },
      },
      questions: [
        {
          id: "bus-u3-lead-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A leader who consults employees before making decisions is using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Autocratic leadership" },
              { id: "b", text: "Democratic leadership" },
              { id: "c", text: "Laissez-faire leadership" },
              { id: "d", text: "Bureaucratic leadership" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Democratic leadership",
                statement: "The leader consults subordinates before deciding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consulting before deciding defines democratic leadership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Democratic leadership",
            commonErrors: [
              "Confusing democratic (consults, still decides) with laissez-faire (delegates).",
            ],
          },
        },
        {
          id: "bus-u3-lead-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A CEO manages 4 departments directly while a rival CEO manages 14. The first has a smaller:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Span of control" },
              { id: "b", text: "Chain of command" },
              { id: "c", text: "Delayering" },
              { id: "d", text: "Delegation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Span of control",
                statement:
                  "The number of subordinates directly supervised by one manager.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Managing 4 vs 14 subordinates is a difference in span of control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Span of control",
            commonErrors: [
              "Confusing span of control with chain of command (levels of hierarchy).",
            ],
          },
        },
        {
          id: "bus-u3-lead-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain one advantage and one disadvantage of laissez-faire leadership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Laissez-faire",
                statement:
                  "Leader delegates almost all decisions; maximum freedom but minimal direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: empowers skilled, self-motivated teams and encourages initiative.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disadvantage: without direction, work can drift, conflict unresolved, goals missed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suitability depends on team maturity and task clarity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: effective only with expert, self-directed teams.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Empowers experts but risks aimlessness without direction.",
            commonErrors: ["Describing only one side of the style."],
          },
        },
        {
          id: "bus-u3-lead-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A restaurant chain's regional managers make every decision centrally; staff complain they cannot adapt menus to local tastes.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the leadership style currently used by head office.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain two advantages of switching to a more democratic style.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the chain should decentralise decision-making.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Centralisation vs decentralisation",
                statement:
                  "Central control ensures consistency; delegation allows local responsiveness.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Head office deciding everything for regions is autocratic/centralised.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Style correctly identified and linked to the scenario.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Local managers know customers best — menus adapt to local tastes, raising sales.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Involving staff raises morale, commitment and motivation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Front-line ideas may improve operations and reduce head-office burden.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: local responsiveness. Against: inconsistency of standards and brand across regions.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — perhaps delegate menu choices but keep brand standards central.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Autocratic/centralised. (b) Local knowledge, morale, better decisions. (c) Worthwhile if standards stay controlled.",
            commonErrors: [
              "Recommending laissez-faire where consistency matters.",
            ],
          },
        },
        {
          id: "bus-u3-lead-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A leader who makes all decisions alone and expects subordinates simply to obey is using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Democratic leadership" },
              { id: "b", text: "Laissez-faire leadership" },
              { id: "c", text: "Autocratic leadership" },
              { id: "d", text: "Situational leadership" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Autocratic leadership",
                statement:
                  "The leader decides alone and issues orders; subordinates obey.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deciding alone without consultation is autocratic leadership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Autocratic leadership",
            commonErrors: [
              "Confusing autocratic (decides alone) with democratic (consults).",
            ],
          },
        },
        {
          id: "bus-u3-lead-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The number of subordinates directly supervised by one manager is called the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chain of command" },
              { id: "b", text: "Span of control" },
              { id: "c", text: "Hierarchy" },
              { id: "d", text: "Delayering" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Span of control",
                statement:
                  "The number of subordinates a manager directly supervises.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direct subordinates per manager is the span of control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Span of control",
            commonErrors: [
              "Confusing span of control with chain of command (levels).",
            ],
          },
        },
        {
          id: "bus-u3-lead-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A company has 4 managers who supervise 36 employees in total. Calculate the average span of control.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Average span of control",
                answer: 9,
                unit: "employees",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Span of control",
                statement: "Subordinates / number of managers",
              },
            ],
            steps: [
              {
                reasoning: "Divide total subordinates by number of managers.",
                working: "36 / 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the span.",
                working: "9 employees",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9$",
            commonErrors: [
              "Dividing managers by employees instead of employees by managers.",
            ],
          },
        },
        {
          id: "bus-u3-lead-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm removes 3 layers of management from its 8-layer hierarchy. Calculate the number of management layers remaining.",
          response: {
            type: "numeric",
            parts: [{ label: "Layers remaining", answer: 5, unit: "layers" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Delayering",
                statement:
                  "Remaining layers = original layers - layers removed",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract removed layers from the original hierarchy.",
                working: "8 - 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer.",
                working: "5 layers",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$ layers",
            commonErrors: ["Adding layers instead of subtracting."],
          },
        },
        {
          id: "bus-u3-lead-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of autocratic leadership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Autocratic leadership",
                statement:
                  "Decisions are made alone — fast and controlled, but can lower morale.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Decisions are made quickly because only one person decides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Clear direction and tight control suit urgent tasks or unskilled teams.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subordinates know exactly what is expected of them.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: autocracy suits crises but can lower morale long-term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Autocratic leadership gives fast decisions and clear control, suited to emergencies.",
            commonErrors: [
              "Listing only disadvantages of autocratic leadership.",
            ],
          },
        },
        {
          id: "bus-u3-lead-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two disadvantages of democratic leadership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Democratic leadership",
                statement: "Consulting builds commitment but slows decisions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consulting takes time, slowing decisions in fast-moving situations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The leader still decides, so consultation can raise expectations without guaranteeing influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Teams must be skilled and motivated for participation to add value.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: democracy builds commitment but costs speed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Democratic leadership is slower and depends on a skilled, motivated team.",
            commonErrors: [
              "Claiming democratic leaders never decide — they consult then decide.",
            ],
          },
        },
        {
          id: "bus-u3-lead-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A hospital ward manager must introduce a new drug administration protocol within 48 hours.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the most appropriate leadership style for this situation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why this style is suitable here.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain when a democratic style would be more appropriate.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Situational leadership",
                statement:
                  "The best style depends on task, team skill and urgency.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Autocratic leadership.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Style correctly identified for the scenario.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Urgency demands instant, clear decisions without lengthy consultation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Linked to the 48-hour deadline and patient safety.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "When staff are skilled, the change is not urgent and commitment matters.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Consultation builds commitment for complex or long-term changes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Autocratic. (b) Urgency needs fast clear decisions. (c) Democratic for non-urgent, skilled teams.",
            commonErrors: [
              "Recommending democratic consultation under a 48-hour deadline.",
            ],
          },
        },
        {
          id: "bus-u3-lead-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Situational leadership argues that the best leadership style depends mainly on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The leader's personality only" },
              {
                id: "b",
                text: "The task, the team's skill and the urgency of the decision",
              },
              { id: "c", text: "The size of the organisation" },
              { id: "d", text: "The industry sector" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Situational leadership",
                statement:
                  "Best style depends on task, team maturity and urgency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Situational leadership matches style to situation, not personality alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The task, the team's skill and the urgency of the decision",
            commonErrors: [
              "Assuming one leadership style suits all situations.",
            ],
          },
        },
        {
          id: "bus-u3-lead-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A flat organisational structure is best described as having:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many layers and narrow spans" },
              { id: "b", text: "Few layers and wide spans of control" },
              { id: "c", text: "No departments" },
              { id: "d", text: "Complete centralisation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flat structure",
                statement: "Few management layers with wide spans of control.",
              },
            ],
            steps: [
              {
                reasoning: "Flat structures have few layers and wide spans.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Few layers and wide spans of control",
            commonErrors: [
              "Confusing flat (few layers) with tall (many layers).",
            ],
          },
        },
        {
          id: "bus-u3-lead-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of a flat organisational structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flat structure",
                statement:
                  "Few layers and wide spans speed decisions and cut costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wide spans of control reduce management layers and salary costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fewer levels speed up communication and decision-making.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Staff feel empowered with greater responsibility and autonomy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: flat structures suit smaller, dynamic firms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Flat structures cut costs, speed decisions and empower staff — but can overload managers.",
            commonErrors: [
              "Listing only advantages without acknowledging trade-offs.",
            ],
          },
        },
        {
          id: "bus-u3-lead-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A tall hierarchy is reduced from 8 management layers to 5 through delayering. Calculate the percentage reduction in layers (%).",
          response: {
            type: "numeric",
            parts: [{ label: "Reduction (%)", answer: 37.5, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage reduction",
                statement: "(Reduction / original) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Find the number of layers removed.",
                working: "8 - 5 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by original layers and multiply by 100.",
                working: "3 / 8 x 100 = 37.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the percentage.",
                working: "37.5%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$37.5\\%$",
            commonErrors: ["Calculating 5/8 instead of the reduction 3/8."],
          },
        },
        {
          id: "bus-u3-lead-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate whether laissez-faire leadership is suitable for a team of experienced freelance designers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Laissez-faire suitability",
                statement:
                  "Works for expert, self-directed teams but risks aimlessness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: expert, self-directed teams can thrive with freedom and minimal oversight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: without direction, projects can drift and conflicts may go unresolved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suitability depends on team maturity and task clarity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: suitable for this expert team only if goals and deadlines stay clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Laissez-faire can suit expert freelancers but needs clear goals to avoid drift.",
            commonErrors: ["One-sided judgement without weighing both sides."],
          },
        },
        {
          id: "bus-u3-lead-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A leader who delegates almost all decision-making to the team is described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Autocratic" },
              { id: "b", text: "Democratic" },
              { id: "c", text: "Laissez-faire" },
              { id: "d", text: "Bureaucratic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Laissez-faire leadership",
                statement:
                  "The leader delegates almost all decisions to the team.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Delegating almost everything describes laissez-faire leadership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Laissez-faire",
            commonErrors: [
              "Confusing laissez-faire (delegates) with democratic (consults).",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u3-structure",
      title: "Organisational structure",
      skill:
        "Compare tall and flat hierarchies, functional, divisional, matrix and network structures.",
      lesson: {
        sections: [
          {
            heading: "Hierarchy: tall vs flat",
            body: "A **tall structure** has many management layers — tight control but slow communication. A **flat structure** has few layers and wide **spans of control** — faster decisions and empowered staff, but managers can be overloaded. **Delayering** removes middle management to flatten the structure, cutting costs but increasing each manager's workload.",
          },
          {
            heading: "Types of structure",
            body: "**Functional** groups employees by skill (marketing, finance, production) — efficient specialists but poor cross-department coordination. **Divisional** groups by product, region or customer — each division is self-contained and responsive. **Matrix** combines both — staff report to a functional manager and a project manager. **Network** outsources most functions, keeping only core activities.",
          },
          {
            heading: "Choosing a structure",
            body: "Structure should match strategy and size: small firms suit flat functional; multinationals need divisional or matrix; virtual firms suit network. Poor structure causes communication breakdowns, duplicated effort and slow responses — exam questions ask you to recommend a structure for a scenario.",
          },
        ],
        keyFormulas: [
          {
            name: "Tall vs flat",
            statement:
              "Tall = many layers, narrow span; Flat = few layers, wide span",
          },
          {
            name: "Structures",
            statement: "Functional, divisional, matrix, network",
          },
        ],
        workedExample: {
          problem:
            "A multinational sells three product lines in 20 countries. Recommend a structure and justify it.",
          solution:
            "Divisional structure by product or region: each division controls its own functions, allowing products and marketing to adapt to different markets while sharing central services.",
        },
      },
      questions: [
        {
          id: "bus-u3-str-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Grouping employees by function such as marketing, finance and production describes a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Divisional structure" },
              { id: "b", text: "Functional structure" },
              { id: "c", text: "Matrix structure" },
              { id: "d", text: "Network structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functional structure",
                statement:
                  "Organisation grouped by specialist departments such as marketing and finance.",
              },
            ],
            steps: [
              {
                reasoning: "Grouping by skills/departments is functional.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Functional structure",
            commonErrors: [
              "Confusing functional (by skill) with divisional (by product/region).",
            ],
          },
        },
        {
          id: "bus-u3-str-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Removing a layer of middle management to create fewer levels is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Downsizing" },
              { id: "b", text: "Delayering" },
              { id: "c", text: "Outsourcing" },
              { id: "d", text: "Franchising" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Delayering",
                statement:
                  "Removing management layers to flatten the organisational hierarchy.",
              },
            ],
            steps: [
              {
                reasoning: "Removing management layers is delayering.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Delayering",
            commonErrors: [
              "Confusing delayering (structure) with downsizing (reducing workforce).",
            ],
          },
        },
        {
          id: "bus-u3-str-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain one advantage and one disadvantage of a tall organisational structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tall structure",
                statement:
                  "Many management layers give tight control but slow communication.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage: tight supervision and clear control through many levels.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disadvantage: long chain of command slows decisions and distorts messages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High costs of many management salaries add to the burden.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: control is gained at the price of speed and cost.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tight control vs slow, costly communication.",
            commonErrors: ["Listing advantages of flat structures instead."],
          },
        },
        {
          id: "bus-u3-str-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A growing electronics firm has 30 employees in one office. Communication is informal but marketing and production departments blame each other for delays.",
          parts: [
            {
              label: "a",
              prompt: "Describe the likely current organisational structure.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why functional departments might conflict.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Recommend a structure for the firm's next stage of growth and justify it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure and growth",
                statement:
                  "Structure should match size and strategy; functional silos cause conflict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Small firm, informal communication — likely a flat functional structure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Description linked to evidence in the scenario.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Departments have separate goals and poor horizontal communication.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each blames the other rather than cooperating on shared objectives.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Keep functional for specialist efficiency but add cross-department teams or a matrix for projects.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Justified by need for coordination without losing functional expertise.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reasoned recommendation tied to the growth stage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Flat functional. (b) Separate goals, poor liaison. (c) Matrix or cross-functional teams for coordination.",
            commonErrors: [
              "Recommending a tall structure for a 30-person firm.",
            ],
          },
        },
        {
          id: "bus-u3-str-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An organisation grouped by product line or geographic region, each with its own functions, has a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Functional structure" },
              { id: "b", text: "Divisional structure" },
              { id: "c", text: "Matrix structure" },
              { id: "d", text: "Network structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Divisional structure",
                statement:
                  "Organisation grouped by product, region or customer, each self-contained.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grouping by product or region is a divisional structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Divisional structure",
            commonErrors: [
              "Confusing divisional (by product/region) with functional (by skill).",
            ],
          },
        },
        {
          id: "bus-u3-str-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a matrix structure, employees typically report to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One functional manager only" },
              { id: "b", text: "A functional manager and a project manager" },
              { id: "c", text: "No manager at all" },
              { id: "d", text: "The chief executive only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Matrix structure",
                statement:
                  "Combines functional and project reporting lines — staff answer to two managers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Matrix means dual reporting to functional and project managers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A functional manager and a project manager",
            commonErrors: ["Thinking matrix staff report to only one manager."],
          },
        },
        {
          id: "bus-u3-str-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm has 5 divisions and each division contains 4 departments. Calculate the total number of departments in the firm.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total departments", answer: 20, unit: "departments" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total departments",
                statement: "Divisions x departments per division",
              },
            ],
            steps: [
              {
                reasoning: "Multiply divisions by departments per division.",
                working: "5 x 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer.",
                working: "20 departments",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$ departments",
            commonErrors: ["Adding 5 and 4 instead of multiplying."],
          },
        },
        {
          id: "bus-u3-str-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A company's hierarchy is reduced from 7 management layers to 4. Calculate how many layers were removed.",
          response: {
            type: "numeric",
            parts: [{ label: "Layers removed", answer: 3, unit: "layers" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Layers removed",
                statement: "Original layers - remaining layers",
              },
            ],
            steps: [
              {
                reasoning: "Subtract remaining layers from original layers.",
                working: "7 - 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer.",
                working: "3 layers",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$ layers",
            commonErrors: ["Calculating 4 - 7 or adding the two figures."],
          },
        },
        {
          id: "bus-u3-str-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of a divisional structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Divisional structure",
                statement:
                  "Self-contained divisions allow local responsiveness and accountability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each division controls its own functions, letting products adapt to different markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divisions can be measured on their own profits, improving accountability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Local responsiveness raises competitiveness in each market.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: divisional suits diversified or multinational firms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Divisional structures give local responsiveness and clear accountability per division.",
            commonErrors: [
              "Confusing divisional advantages with functional ones.",
            ],
          },
        },
        {
          id: "bus-u3-str-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two disadvantages of a matrix structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Matrix structure",
                statement:
                  "Dual reporting combines functional and project lines but creates complexity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Staff receive instructions from two managers, causing conflict over priorities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dual reporting creates confusion over accountability and can slow decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is complex and costly to administer, needing strong management.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: matrix suits project work but demands careful coordination.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Matrix structures risk conflicting instructions and unclear accountability.",
            commonErrors: ["Listing advantages of matrix structures instead."],
          },
        },
        {
          id: "bus-u3-str-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A software firm of 60 staff is developing three new apps at once while keeping its existing departments of marketing, finance and production.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify which organisational structure would best suit this firm.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain two benefits of that choice for the firm.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate one drawback of the recommended structure.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure and strategy",
                statement:
                  "Matrix combines functional departments with project teams for new products.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A matrix structure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Functional departments plus project teams for each app.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Keeps specialist departments while allowing focused project teams per app.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Second benefit: resources and expertise are shared across projects.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Dual reporting can create confusion between project and functional managers.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Requires clear roles and strong communication to manage.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: worthwhile if coordination is managed well.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Matrix. (b) Specialist departments plus project focus, shared resources. (c) Dual reporting needs management.",
            commonErrors: [
              "Recommending a purely functional structure that cannot handle three projects.",
            ],
          },
        },
        {
          id: "bus-u3-str-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A network organisational structure is most suitable for firms that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are large and vertically integrated" },
              {
                id: "b",
                text: "Outsource most functions and keep only core activities",
              },
              { id: "c", text: "Need tight central control" },
              { id: "d", text: "Have many management layers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Network structure",
                statement:
                  "Outsourcing most functions, keeping only core activities.",
              },
            ],
            steps: [
              {
                reasoning: "Network structures outsource non-core functions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Outsource most functions and keep only core activities",
            commonErrors: [
              "Confusing network (outsourced) with divisional (self-contained).",
            ],
          },
        },
        {
          id: "bus-u3-str-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Wide spans of control are most likely to be found in a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tall structure" },
              { id: "b", text: "Flat structure" },
              { id: "c", text: "Bureaucratic structure" },
              { id: "d", text: "Centralised structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flat vs tall",
                statement:
                  "Flat structures have few layers and wide spans of control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wide spans characterise flat structures with few management layers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Flat structure",
            commonErrors: [
              "Confusing wide spans (flat) with narrow spans (tall).",
            ],
          },
        },
        {
          id: "bus-u3-str-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A flat-structured firm has 10 managers supervising 50 employees. Calculate the average span of control.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Average span of control",
                answer: 5,
                unit: "employees",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Span of control",
                statement: "Subordinates / number of managers",
              },
            ],
            steps: [
              {
                reasoning: "Divide total subordinates by number of managers.",
                working: "50 / 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the result.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the span.",
                working: "5 employees",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Dividing in the wrong direction."],
          },
        },
        {
          id: "bus-u3-str-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two disadvantages of a functional organisational structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functional structure",
                statement:
                  "Specialist departments are efficient but can become isolated silos.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Departments can become isolated 'silos', harming cross-department coordination.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each department may pursue its own goals rather than the firm's overall objectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This slows responses to market changes and can cause blame between departments.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: functional suits efficiency but needs mechanisms for liaison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Functional structures risk departmental silos and conflicting departmental goals.",
            commonErrors: [
              "Listing advantages of functional structures instead.",
            ],
          },
        },
        {
          id: "bus-u3-str-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The formal line of authority running from the top to the bottom of an organisation is called the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Span of control" },
              { id: "b", text: "Chain of command" },
              { id: "c", text: "Delayering" },
              { id: "d", text: "Delegation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chain of command",
                statement:
                  "The formal line of authority from top to bottom of the organisation.",
              },
            ],
            steps: [
              {
                reasoning: "The formal authority line is the chain of command.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Chain of command",
            commonErrors: ["Confusing chain of command with span of control."],
          },
        },
        {
          id: "bus-u3-str-q17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Delayering an organisation most directly leads to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrower spans of control" },
              { id: "b", text: "More management layers" },
              { id: "c", text: "Fewer layers and wider spans of control" },
              { id: "d", text: "A divisional structure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Delayering",
                statement:
                  "Removing management layers flattens the structure and widens spans.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Delayering removes layers, creating a flatter structure with wider spans.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Fewer layers and wider spans of control",
            commonErrors: [
              "Thinking delayering creates more layers or narrower spans.",
            ],
          },
        },
      ],
    },
  ],
};
