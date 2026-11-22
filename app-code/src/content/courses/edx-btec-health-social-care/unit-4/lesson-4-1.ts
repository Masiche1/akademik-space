import type { Lesson } from "../../../types.ts";

export const lesson401: Lesson = {
  id: "edxbtechsc-u4-lesson-4-1",
  code: "4-1",
  title: "Health Policy and Legislation",
  goal: "I CAN describe key UK health policies and legislation that shape health and social care services.",
  standards: [
    "BTEC L3 National Health and Social Care — Unit 4: Health, Policy and Wellbeing (optional)",
  ],
  vocabulary: [
    {
      term: "NHS",
      definition:
        "National Health Service — publicly funded healthcare providing care free at point of use in the UK.",
    },
    {
      term: "Public health",
      definition:
        "The science and art of preventing disease, prolonging life and promoting health through organised society efforts.",
    },
    {
      term: "Policy",
      definition:
        "A course of action adopted by government or organisations to achieve health goals.",
    },
    {
      term: "Legislation",
      definition:
        "Laws passed by Parliament that govern health and social care practice.",
    },
  ],
  concepts: [
    {
      id: "edxbtechsc-u4-l1-policy",
      title: "Health Policy and the NHS",
      skill: "Describe key UK health policies and how the NHS is structured.",
      lesson: {
        sections: [
          {
            heading: "The NHS",
            body: "Founded 1948, the NHS provides healthcare free at point of use funded by taxation and National Insurance. It's divided into: **primary care** (GPs, pharmacies, dentists, opticians — first contact), **secondary care** (hospitals, specialists), **tertiary care** (specialist centres), and **community care** (district nurses, health visitors).\n\nCurrent challenges: funding pressures, waiting lists, workforce shortages, health inequalities. Policy responses include the **NHS Long Term Plan** (2020) focusing on prevention, digital care and integrated care systems.",
          },
          {
            heading: "Key legislation",
            body: "**NHS Act 2006/2012**: restructured NHS with commissioning and foundation trusts. **Health and Social Care Act 2012**: introduced Clinical Commissioning Groups and Monitor. **Care Act 2014**: reformed adult social care — wellbeing duty, personal budgets, safeguarding duties. **Mental Health Act 1983/2007**: compulsory detention for mental disorder.\n\n**Equality Act 2010** prohibits discrimination in services. **Data Protection Act 2018** protects personal information. **Human Rights Act 1998** guarantees rights including dignity, privacy, non-discrimination.",
          },
        ],
        keyFormulas: [
          {
            name: "NHS levels",
            statement: "Primary → secondary → tertiary → community care.",
          },
          {
            name: "Care Act 2014",
            statement: "Wellbeing duty, personal budgets, safeguarding.",
          },
        ],
        workedExample: {
          problem: "How does the NHS Long Term Plan shift healthcare focus?",
          solution:
            "From reactive treatment to prevention and early intervention — shifting resources to community care, digital services and integrated care systems.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u4-l1-policy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Primary care in the NHS refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "First-contact care — GPs, pharmacies, dentists",
              },
              { id: "b", text: "Hospital specialist care" },
              { id: "c", text: "Private healthcare" },
              { id: "d", text: "Emergency care only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary care",
                statement:
                  "First point of contact — GPs, pharmacies, dentists, opticians.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = first contact/community-based.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** First-contact care",
            commonErrors: ["Confusing with secondary (hospital)."],
          },
        },
        {
          id: "edxbtechsc-u4-l1-policy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what the Care Act 2014 changed in adult social care.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Care Act 2014",
                statement: "Reformed adult social care with wellbeing focus.",
              },
            ],
            steps: [
              {
                reasoning: "Wellbeing duty introduced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Personal budgets/direct payments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Safeguarding duties clarified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wellbeing duty, personal budgets, strengthened safeguarding.",
            commonErrors: ["Vague 'improved care'.", "Wrong act."],
          },
        },
        {
          id: "edxbtechsc-u4-l1-policy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the shift towards prevention in the NHS Long Term Plan.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prevention policy",
                statement:
                  "Investing upstream reduces downstream treatment costs.",
              },
            ],
            steps: [
              {
                reasoning: "Rationale: prevention cheaper than treatment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Benefits: better health outcomes, reduced demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Challenges: funding shift, political difficulty, evidence needed.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Prevention is economically and clinically sound but requires sustained investment and evidence.",
            commonErrors: ["One-sided.", "No challenges."],
          },
        },
        {
          id: "edxbtechsc-u4-l1-policy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A new government proposes means-testing social care while keeping NHS free.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the distinction between health and social care funding.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Identify two arguments for means-testing social care.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Identify two arguments against means-testing.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Health vs social care funding",
                statement:
                  "NHS free at point of use; social care means-tested — creates a care cliff.",
              },
            ],
            steps: [
              {
                reasoning: "NHS: tax-funded, free at point of use.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Social care: means-tested, asset limits.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "'Care cliff' consequence explained.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "For: targets resources to those who need.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "For: reduces public expenditure.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Against: penalises savers ('care penalty').",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Against: creates cliff edge/deterrence.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Against: unequal access by wealth.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) NHS free vs social care means-tested (b) targeting/cost (c) care penalty/cliff/inequality",
            commonErrors: ["Confusing systems.", "One-sided arguments."],
          },
        },
      ],
    },
    {
      id: "edxbtechsc-u4-l1-public",
      title: "Public Health and Health Promotion",
      skill:
        "Describe public health approaches and health promotion strategies.",
      lesson: {
        sections: [
          {
            heading: "Public health",
            body: "Public health works at population level to prevent disease and promote health — through vaccination programmes, health education, screening, environmental regulation (smoke-free laws, sugar tax), and health surveillance.\n\nThe **NHS Health Check** (40-74) screens for cardiovascular and diabetes risk. **Stop Smoking Services**, **Change4Life** and **NHS Health Apps** deliver targeted health promotion. Public health England became the **Office for Health Improvement and Disparities** (2021).",
          },
          {
            heading: "Health promotion models",
            body: "Health promotion operates at three levels: **primary** (prevent disease — vaccination, healthy eating campaigns), **secondary** (early detection — screening, brief interventions), **tertiary** (manage established disease — rehabilitation, self-management).\n\n**Beattie's model** distinguishes individual lifestyle changes vs socio-environmental (legislative/regulatory) approaches — effective programmes combine both (e.g. smoking ban + cessation support). The **Ottawa Charter** (1986) set principles: build healthy public policy, create supportive environments, strengthen community action, develop personal skills, reorient health services.",
          },
        ],
        keyFormulas: [
          {
            name: "Prevention levels",
            statement:
              "Primary (prevent), secondary (detect early), tertiary (manage).",
          },
          {
            name: "Ottawa Charter",
            statement: "Five action areas for health promotion.",
          },
        ],
        workedExample: {
          problem:
            "Classify: (a) smoking ban, (b) cancer screening, (c) cardiac rehab.",
          solution:
            "(a) primary prevention (environmental), (b) secondary (early detection), (c) tertiary (disease management).",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u4-l1-public-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Secondary prevention refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Early detection through screening" },
              { id: "b", text: "Vaccination" },
              { id: "c", text: "Health education" },
              { id: "d", text: "Rehabilitation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary prevention",
                statement: "Early detection/screening before symptoms.",
              },
            ],
            steps: [
              {
                reasoning: "Secondary = early detection.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Early detection",
            commonErrors: ["Confusing with primary/tertiary."],
          },
        },
        {
          id: "edxbtechsc-u4-l1-public-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between primary and tertiary prevention with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prevention levels",
                statement:
                  "Primary = prevent disease; tertiary = manage established disease.",
              },
            ],
            steps: [
              {
                reasoning: "Primary defined with example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tertiary defined with example.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Primary: prevent (vaccination, healthy eating). Tertiary: manage (rehab, self-management).",
            commonErrors: ["Examples missing.", "Levels confused."],
          },
        },
        {
          id: "edxbtechsc-u4-l1-public-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the sugar tax as a public health measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sugar tax evaluation",
                statement:
                  "Fiscal policy reduces consumption but has distributional effects.",
              },
            ],
            steps: [
              {
                reasoning: "Effectiveness: reduces purchases of sugary drinks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue funds health programmes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Criticisms: regressive, substitution effects, industry reformulation.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sugar tax reduces harmful consumption and raises revenue but is regressive and may drive reformulation rather than behaviour change.",
            commonErrors: ["One-sided.", "No evidence/mechanism."],
          },
        },
        {
          id: "edxbtechsc-u4-l1-public-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A city has high rates of obesity and diabetes, concentrated in deprived areas.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a purely individual-level approach may fail.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two population-level interventions.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate which approach is more sustainable.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population health",
                statement:
                  "Health is shaped by environment — individual choice alone insufficient.",
              },
            ],
            steps: [
              {
                reasoning: "Obesogenic environment identified.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Deprivation limits choice/resources.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Individual approach ignores structural factors.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Population intervention 1 e.g. planning restrictions on fast food.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Population intervention 2 e.g. sugar tax/subsidies for healthy food.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Interventions structural not individual.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Population approach addresses root causes.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Sustainability judged.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) environment constrains choice (b) planning/sugar tax (c) population approach more sustainable",
            commonErrors: ["Blaming individuals.", "No structural solutions."],
          },
        },
      ],
    },
  ],
};
