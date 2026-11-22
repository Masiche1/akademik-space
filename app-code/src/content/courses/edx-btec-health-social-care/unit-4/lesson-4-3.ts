import type { Lesson } from "../../../types.ts";

export const lesson403: Lesson = {
  id: "edxbtechsc-u4-lesson-4-3",
  code: "4-3",
  title: "Promoting Health and Wellbeing",
  goal: "I CAN design and evaluate health promotion strategies targeting individuals and populations.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 4: Health, Policy and Wellbeing (optional)",
  ],
  vocabulary: [
    {
      term: "Health promotion",
      definition:
        "Enabling people to increase control over and improve their health through education, policy and environmental change.",
    },
    {
      term: "Behaviour change",
      definition:
        "The process of helping people adopt healthier behaviours — smoking cessation, exercise adoption, diet change.",
    },
    {
      term: "Health literacy",
      definition:
        "The ability to access, understand and use health information to make informed decisions.",
    },
    {
      term: "Empowerment",
      definition:
        "Enabling people to have control over decisions affecting their health — not doing things to them.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u4-l3-strategies",
      title: "Health Promotion Strategies",
      skill:
        "Design health promotion interventions using appropriate models and approaches.",
      lesson: {
        sections: [
          {
            heading: "Individual approaches",
            body: "Individual-level promotion uses health education, counselling, brief interventions (e.g. asking about smoking at every appointment — 'very brief advice'), screening and behaviour change models. The **Health Belief Model** suggests people act if they perceive susceptibility, severity, benefits and low barriers.\n\n**Stages of Change** (Prochaska): precontemplation → contemplation → preparation → action → maintenance. Interventions must match stage — advice to someone not ready to quit fails. **Motivational interviewing** helps people find their own reasons for change.",
          },
          {
            heading: "Population approaches",
            body: "Population-level promotion changes environments: **legislation** (smoking ban, drink-driving limits), **fiscal measures** (sugar tax, alcohol duty), **regulation** (food labelling, advertising restrictions), **urban planning** (cycle lanes, green space), **media campaigns** (Change4Life).\n\nThe **Ottawa Charter** principles remain current: build healthy public policy, create supportive environments, strengthen community action, develop personal skills, reorient health services. Effective programmes combine individual and structural approaches.",
          },
        ],
        keyFormulas: [
          {
            name: "Stages of Change",
            statement:
              "Precontemplation → contemplation → preparation → action → maintenance.",
          },
          {
            name: "Ottawa Charter",
            statement: "Five action areas for health promotion.",
          },
        ],
        workedExample: {
          problem:
            "Design a smoking cessation programme for a deprived community.",
          solution:
            "Combine: very brief advice in GP (individual), stop-smoking services (support), minimum pricing/legislation (structural), community champions (empowerment). Match interventions to stages of change.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u4-l3-strategies-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The Stages of Change model describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ageing stages" },
              { id: "b", text: "A person's readiness to change behaviour" },
              { id: "c", text: "Disease progression" },
              { id: "d", text: "Care pathways" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stages of Change",
                statement:
                  "Readiness to change behaviour: precontemplation to maintenance.",
              },
            ],
            steps: [
              {
                reasoning: "Stages of Change = behaviour change readiness.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Readiness to change",
            commonErrors: ["Confusing with disease stages."],
          },
        },
        {
          id: "edxbtechsc-u4-l3-strategies-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'very brief advice' about smoking is effective in primary care.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brief intervention",
                statement:
                  "Short advice at every contact reaches many smokers cheaply; signposting to support.",
              },
            ],
            steps: [
              {
                reasoning: "Reach: every patient contact is an opportunity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost-effective: seconds per consultation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to support services for motivated smokers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Brief advice reaches all smokers cheaply and signposts support — population-level impact.",
            commonErrors: ["Only individual benefit.", "No mechanism."],
          },
        },
        {
          id: "edxbtechsc-u4-l3-strategies-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of the Health Belief Model for smoking cessation campaigns.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health Belief Model",
                statement:
                  "Behaviour change depends on perceived susceptibility, severity, benefits, barriers.",
              },
            ],
            steps: [
              {
                reasoning: "Strengths: explains why people do/don't change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: ignores social/environmental factors, emotions, habit.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HBM useful for understanding beliefs but incomplete — ignores environment, addiction and social factors.",
            commonErrors: ["One-sided.", "No limitations."],
          },
        },
        {
          id: "edxbtechsc-u4-l3-strategies-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A council wants to reduce childhood obesity in a deprived ward.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify three social determinants contributing to childhood obesity here.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Suggest two individual-level and two population-level interventions.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Explain why a combined approach is needed.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health promotion design",
                statement:
                  "Combine individual education with structural/environmental change for deprived populations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Determinant 1 e.g. food environment/fast food density.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Determinant 2 e.g. income/food affordability.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Determinant 3 e.g. safe play spaces/PE access.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Individual intervention e.g. school nutrition education.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Individual intervention e.g. family cooking workshops.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Population intervention e.g. planning restrictions/sugar tax.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Population intervention e.g. subsidised healthy food/play areas.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Combined approach justified.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) food environment/income/play access (b) education/workshops + planning/subsidies (c) both needed for structural change",
            commonErrors: ["Only education campaigns.", "No structural focus."],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u4-l3-evaluation",
      title: "Evaluating Health Promotion",
      skill:
        "Evaluate health promotion programmes using outcome and process measures.",
      lesson: {
        sections: [
          {
            heading: "Evaluation framework",
            body: "Evaluation asks: **Did it work?** (outcomes) and **How was it delivered?** (process). Outcome measures include behaviour change (smoking rates), health status (hospital admissions), and intermediate measures (knowledge, attitudes).\n\n**Process evaluation** examines reach, fidelity (was it delivered as designed?), dose (how much exposure) and satisfaction. **Economic evaluation** compares costs to benefits — cost-effectiveness (cost per outcome) and cost-benefit (monetary).",
          },
          {
            heading: "Challenges in evaluation",
            body: "Health promotion effects are often **long-term and diffuse** — smoking bans reduce heart attacks over years; education effects emerge later. **Attribution** is hard: many factors influence health simultaneously. **Equity evaluation** asks whether benefits reach disadvantaged groups or widen inequalities.\n\nGood evaluations use **mixed methods** — quantitative data (rates, surveys) + qualitative insight (interviews, observation). Baseline data is essential for comparison.",
          },
        ],
        keyFormulas: [
          {
            name: "Outcome vs process",
            statement:
              "Outcome = did it work?; Process = how was it delivered?",
          },
          {
            name: "Cost-effectiveness",
            statement: "Cost per unit of health outcome achieved.",
          },
        ],
        workedExample: {
          problem:
            "A stop-smoking campaign reports 5% quit rate. How evaluate success?",
          solution:
            "Compare to baseline and control areas; assess cost per quitter; examine equity (did deprived groups benefit?); check reach/fidelity of delivery.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u4-l3-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Outcome evaluation measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Budget spent" },
              { id: "b", text: "Staff satisfaction" },
              { id: "c", text: "How the programme was delivered" },
              {
                id: "d",
                text: "Whether the programme achieved its intended effects",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Outcome evaluation",
                statement: "Did it achieve intended effects?",
              },
            ],
            steps: [
              {
                reasoning: "Outcome = effects achieved.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Intended effects",
            commonErrors: ["Confusing with process."],
          },
        },
        {
          id: "edxbtechsc-u4-l3-evaluation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between outcome and process evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Outcome vs process",
                statement: "Outcome = results; process = delivery quality.",
              },
            ],
            steps: [
              {
                reasoning: "Outcome defined: achieved effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Process defined: reach, fidelity, dose.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Outcome = did it work; process = how well it was delivered.",
            commonErrors: ["Terms conflated.", "No examples."],
          },
        },
        {
          id: "edxbtechsc-u4-l3-evaluation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A health campaign reports improved knowledge but no behaviour change. Analyse this result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "KAP gap",
                statement:
                  "Knowledge-Attitude-Practice gap: knowing doesn't guarantee doing.",
              },
            ],
            steps: [
              {
                reasoning: "Knowledge ≠ behaviour (KAP gap).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Possible causes: barriers, motivation, environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Process evaluation needed to diagnose.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Recommendations for improvement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Knowledge-behaviour gap — need to address barriers, motivation and environment, not just information.",
            commonErrors: [
              "Assuming campaign failed completely.",
              "No diagnosis.",
            ],
          },
        },
        {
          id: "edxbtechsc-u4-l3-evaluation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A council's anti-obesity programme shows reduced BMI in affluent areas but not deprived areas.",
          parts: [
            {
              label: "a",
              prompt: "Explain what this result reveals about the programme.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Identify two possible reasons for the differential effect.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest how the programme could be improved for equity.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equity evaluation",
                statement:
                  "Health promotion must reach those most in need; differential effects reveal inequity.",
              },
            ],
            steps: [
              {
                reasoning: "Programme benefits skewed to affluent.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Equity concern: widening inequalities.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Process issue: reach/fidelity problems.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Reason 1: access barriers in deprived areas.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Reason 2: intervention not tailored to needs.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Reason 3: structural barriers persist.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Improvement: targeted outreach.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Improvement: address structural barriers.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) inequitable effect — may widen gap (b) access/tailoring/structural (c) targeted + structural approaches",
            commonErrors: [
              "Only celebrating overall success.",
              "No equity lens.",
            ],
          },
        },
      ],
    },
  ],
};
