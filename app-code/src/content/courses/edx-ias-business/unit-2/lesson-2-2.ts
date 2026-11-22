import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eiasbiz-u2-lesson-2-2",
  code: "2-2",
  title: "Reward, Pay and Communication",
  goal: "I CAN explain payment systems and effective workplace communication.",
  standards: ["Edexcel IAS Business WBP01 Unit 2 — Human Resource Management"],
  vocabulary: [
    { term: "Basic pay", definition: "Fixed salary or hourly wage." },
    {
      term: "Performance-related pay",
      definition: "Pay linked to individual/organisational performance.",
    },
    { term: "Bonus", definition: "Additional payment for achieving targets." },
    {
      term: "Fringe benefits",
      definition: "Non-cash rewards — pension, healthcare, car.",
    },
    {
      term: "Downward communication",
      definition: "Information flowing from management to employees.",
    },
    {
      term: "Upward communication",
      definition: "Feedback flowing from employees to management.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u2-reward",
      title: "Reward and Payment Systems",
      skill: "Compare payment methods and fringe benefits.",
      lesson: {
        sections: [
          {
            heading: "Payment systems",
            body: "**Time-based**: hourly/salary — simple, predictable. **Performance-related**: commission, piece rate — rewards output. **Profit sharing**: employees share company profits — aligns interests. **Team bonuses**: rewards group achievement — encourages cooperation.\n\n**Fringe benefits**: pension contributions, private healthcare, company car, gym membership, flexible hours — attract/retain staff, tax advantages.",
          },
          {
            heading: "Evaluating reward",
            body: "**Motivation**: performance pay incentivises results but may cause stress/short-termism. **Retention**: good benefits reduce turnover. **Cost**: rewards add to labour costs. **Fairness**: perceived unfairness damages morale.\n\n**Total reward**: pay + benefits + development opportunities + recognition.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Sales staff earn commission per sale. System?",
          solution: "Performance-related pay.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-reward-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is performance-related pay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Holiday allowance" },
              { id: "b", text: "Pension contributions" },
              { id: "c", text: "Fixed monthly salary" },
              { id: "d", text: "Pay linked to performance/output" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Performance pay",
                statement: "Pay linked to results.",
              },
            ],
            steps: [
              {
                reasoning: "Perf pay = output-linked.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Output-linked",
            commonErrors: ["Salary confused."],
          },
        },
        {
          id: "eiasbiz-u2-reward-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of fringe benefits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fringe benefits",
                statement: "Non-cash rewards.",
              },
            ],
            steps: [
              {
                reasoning: "Pension contributions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Private healthcare or company car.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gym membership, flexible hours.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Pension, healthcare, car, gym.",
            commonErrors: ["Cash pay.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u2-reward-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the advantages and disadvantages of performance-related pay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance pay",
                statement: "Motivates but risks.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage: motivates high performance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advantage: links pay to company results.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Disadvantage: may cause stress or unethical shortcuts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantage: unfair if targets unrealistic.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Motivates vs stress/fairness concerns.",
            commonErrors: ["Only benefits.", "Only drawbacks."],
          },
        },
        {
          id: "eiasbiz-u2-reward-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a reward package for a call centre.",
          parts: [
            { label: "a", prompt: "Suggest three reward elements.", marks: 4 },
            { label: "b", prompt: "Justify each choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reward design",
                statement: "Mix pay and benefits.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Base salary + call bonuses + team targets.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Fringe benefits — healthcare, pension.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Bonuses motivate call volume/quality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Benefits retain staff, reduce stress.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) pay+bonus+benefits (b) motivation+retention",
            commonErrors: ["Only pay.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u2-communication",
      title: "Workplace Communication",
      skill: "Distinguish communication methods and evaluate effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Communication flows",
            body: "**Downward**: management → employees — instructions, policies, announcements. **Upward**: employees → management — feedback, grievances, suggestions. **Horizontal**: between colleagues/departments — coordination.\n\n**Lateral**: same level across departments — project teams.",
          },
          {
            heading: "Communication methods",
            body: "**Formal**: meetings, memos, reports, emails — official record. **Informal**: grapevine, chats, social media — fast but unreliable. **Rich media**: face-to-face, video — best for complex/emotional topics. **Lean media**: email, text — efficient for simple info.\n\n**Barriers**: language, jargon, noise, filtering, status differences, overload.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Manager announces restructuring via email. Problem?",
          solution: "Lean media for complex/emotional news — poor choice.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-comm-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is downward communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Management to employees" },
              { id: "b", text: "Between departments" },
              { id: "c", text: "Gossip" },
              { id: "d", text: "Employees to management" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Downward",
                statement: "Top to bottom.",
              },
            ],
            steps: [
              {
                reasoning: "Downward = management→staff.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Management to employees",
            commonErrors: ["Upward confused."],
          },
        },
        {
          id: "eiasbiz-u2-comm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two barriers to effective communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Communication barriers",
                statement: "Language, noise, overload.",
              },
            ],
            steps: [
              {
                reasoning: "Language/jargon — recipients don't understand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Noise/distraction — message not received.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Information overload — too much at once.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Language, noise, overload, status.",
            commonErrors: ["Only one.", "Not barriers."],
          },
        },
        {
          id: "eiasbiz-u2-comm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why face-to-face is better for sensitive announcements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rich media",
                statement: "Non-verbal cues matter.",
              },
            ],
            steps: [
              {
                reasoning: "Allows questions and clarification immediately.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Non-verbal cues — tone, body language show sincerity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Builds trust — employees see leadership.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Email feels impersonal for bad news.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Questions, non-verbal cues, trust.",
            commonErrors: ["Email better.", "No reasoning."],
          },
        },
        {
          id: "eiasbiz-u2-comm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company announces layoffs via mass email.",
          parts: [
            {
              label: "a",
              prompt: "Identify two communication problems.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest a better approach.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sensitive communication",
                statement: "Rich media + consultation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Impersonal — mass email lacks humanity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) No consultation — employees can't respond.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Face-to-face meetings — show empathy.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Consult staff first — involve unions, explain reasons.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) impersonal+no consultation (b) meetings+involve",
            commonErrors: ["No problems.", "No solution."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u2-hrs",
      title: "Health, Safety and Workforce Planning",
      skill: "Explain health & safety duties and workforce planning.",
      lesson: {
        sections: [
          {
            heading: "Health and safety",
            body: "**Employer duties**: safe workplace, risk assessments, training, protective equipment, accident reporting. **Employee duties**: follow procedures, report hazards, use equipment properly.\n\n**Consequences of failure**: accidents, fines, prosecution, reputational damage, increased insurance costs.",
          },
          {
            heading: "Workforce planning",
            body: "**Forecasting**: predict future staffing needs — growth, skills, retirement. **Supply**: internal promotions, recruitment, training. **Demand**: workload, expansion, seasonal peaks.\n\n**Labour turnover**: rate employees leave — high turnover costly (recruitment, training). **Retention**: motivation, rewards, development.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Factory has noisy machinery. Employer duty?",
          solution: "Provide hearing protection, assess risk.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u2-hrs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a risk assessment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Financial audit" },
              { id: "b", text: "Market analysis" },
              { id: "c", text: "Staff appraisal" },
              { id: "d", text: "Identifying hazards and evaluating risks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Risk assessment",
                statement: "Identify + evaluate hazards.",
              },
            ],
            steps: [
              {
                reasoning: "Risk assessment = hazard evaluation.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Hazard evaluation",
            commonErrors: ["Audit confused."],
          },
        },
        {
          id: "eiasbiz-u2-hrs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two employer responsibilities for health and safety.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "H&S duties",
                statement: "Safe workplace.",
              },
            ],
            steps: [
              {
                reasoning: "Provide safe equipment and environment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conduct risk assessments and training.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Report accidents; provide protective equipment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Safe equipment, assessments, training.",
            commonErrors: ["Employee duty.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u2-hrs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why high labour turnover is costly for businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labour turnover",
                statement: "Recruitment+training costs.",
              },
            ],
            steps: [
              {
                reasoning: "Recruitment costs — advertising, interviewing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Training costs — new staff need upskilling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lost productivity — experienced staff leave.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Knowledge loss — expertise walks out.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Recruitment, training, productivity, knowledge loss.",
            commonErrors: ["Cheap.", "No costs."],
          },
        },
        {
          id: "eiasbiz-u2-hrs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company plans to expand and needs 20 more staff in 6 months.",
          parts: [
            {
              label: "a",
              prompt: "Explain workforce planning steps.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Identify two ways to meet the need.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Workforce planning",
                statement: "Forecast→supply→train.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Forecast demand — skills, numbers needed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check internal supply — promotions, training.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) External recruitment — advertise, agencies.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Train existing staff — upskilling, apprenticeships.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) forecast+supply (b) recruit+train",
            commonErrors: ["No planning.", "One method only."],
          },
        },
      ],
    },
  ],
};
