import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eiasbiz-u4-lesson-4-3",
  code: "4-3",
  title: "Health and Safety in Operations",
  goal: "I CAN explain health and safety duties, risk assessment and legal requirements.",
  standards: ["Edexcel IAS Business WBP01 Unit 4 — Operations Management"],
  vocabulary: [
    {
      term: "Health and safety",
      definition: "Legal duties to protect workers and public.",
    },
    {
      term: "Risk assessment",
      definition: "Identifying hazards and evaluating risks.",
    },
    { term: "Hazard", definition: "Anything that could cause harm." },
    { term: "Risk", definition: "Likelihood × severity of harm." },
    {
      term: "Accident",
      definition: "Unplanned event causing injury or damage.",
    },
    {
      term: "Near miss",
      definition: "Incident that could have caused harm but didn't.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u4-hs",
      title: "Health and Safety Management",
      skill: "Conduct risk assessments and explain employer duties.",
      lesson: {
        sections: [
          {
            heading: "Employer duties",
            body: "Provide safe workplace, equipment, training. Risk assessments for all hazards. Report accidents (RIDDOR). Provide PPE. Consult employees on safety.\n\n**Employee duties**: follow safety rules, use PPE correctly, report hazards, not misuse equipment.",
          },
          {
            heading: "Risk assessment",
            body: "**Steps**: identify hazards → decide who might be harmed → evaluate risk → record findings → review regularly.\n\n**Hierarchy of controls**: eliminate hazard → substitute → engineering controls → administrative controls → PPE (last resort).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Warehouse has slippery floor near entrance. Hazard + control?",
          solution:
            "Hazard: slip risk. Control: warning signs + non-slip mats.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-hs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a risk assessment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hiring staff" },
              { id: "b", text: "Checking profits" },
              { id: "c", text: "Buying insurance" },
              { id: "d", text: "Identifying hazards and evaluating risks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Risk assessment",
                statement: "Hazard identification.",
              },
            ],
            steps: [
              {
                reasoning: "Risk assessment = hazard evaluation.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Hazard identification",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasbiz-u4-hs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two employer health and safety duties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Employer duties",
                statement: "Safe workplace.",
              },
            ],
            steps: [
              {
                reasoning: "Provide safe equipment and training.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conduct risk assessments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Report accidents and provide PPE.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Safe equipment, risk assessment, reporting.",
            commonErrors: ["Employee duty.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-hs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the hierarchy of risk controls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hierarchy of controls",
                statement: "Elimination first.",
              },
            ],
            steps: [
              {
                reasoning: "Eliminate hazard — remove danger entirely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Substitute — replace with safer alternative.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Engineering/administrative controls — barriers, procedures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "PPE — last resort, protects individual only.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Eliminate→substitute→controls→PPE.",
            commonErrors: ["PPE first.", "No order."],
          },
        },
        {
          id: "eiasbiz-u4-hs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A construction site has multiple hazards.",
          parts: [
            { label: "a", prompt: "Identify two hazards.", marks: 3 },
            { label: "b", prompt: "Suggest controls for each.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Risk management",
                statement: "Identify + control.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Falling from height — scaffolding risk.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Falling objects — materials overhead.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Manual handling — heavy materials.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Guardrails/harnesses for height; barriers for objects.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Mechanical aids/training for manual handling.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 3 hazards (b) guards+barriers+training",
            commonErrors: ["No hazards.", "No controls."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u4-env",
      title: "Environmental Management",
      skill:
        "Explain sustainability in operations and environmental legislation.",
      lesson: {
        sections: [
          {
            heading: "Environmental impact",
            body: "**Pollution**: emissions, waste, noise — harm to environment. **Resource depletion**: finite resources — energy, raw materials. **Carbon footprint**: total greenhouse gas emissions.\n\n**Sustainable operations**: reduce waste, energy efficiency, renewable energy, recycling, sustainable sourcing.",
          },
          {
            heading: "Legislation and incentives",
            body: "**Environmental laws**: emission limits, waste disposal rules, carbon taxes. **ISO 14001**: environmental management standard. **Government incentives**: grants for green technology, tax breaks for energy efficiency.\n\n**Business case**: sustainability reduces costs (energy, waste), improves reputation, meets regulations, attracts customers.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Factory installs solar panels to cut energy costs. Benefit type?",
          solution: "Sustainability + cost saving.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-env-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a carbon footprint?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waste output" },
              { id: "b", text: "Energy bill" },
              { id: "c", text: "Building size" },
              { id: "d", text: "Total greenhouse gas emissions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbon footprint",
                statement: "GHG emissions.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon footprint = GHG emissions.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** GHG emissions",
            commonErrors: ["Energy confused."],
          },
        },
        {
          id: "eiasbiz-u4-env-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two sustainable operations practices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability",
                statement: "Reduce waste/energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Energy efficiency — LED lighting, efficient machines.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Waste reduction — recycling, lean production.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Renewable energy — solar, wind.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Energy efficiency, waste reduction, renewables.",
            commonErrors: ["Only one.", "Not sustainable."],
          },
        },
        {
          id: "eiasbiz-u4-env-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sustainability benefits businesses financially.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability ROI",
                statement: "Cost + reputation.",
              },
            ],
            steps: [
              {
                reasoning: "Reduced energy costs — efficiency saves money.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduced waste disposal costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Improved reputation — attracts eco-conscious customers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Avoids penalties — complies with environmental laws.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Cost savings + reputation + compliance.",
            commonErrors: ["Only costs.", "No benefit."],
          },
        },
        {
          id: "eiasbiz-u4-env-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A factory faces pressure to reduce environmental impact.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two environmental improvements.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain one challenge of implementing them.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Environmental management",
                statement: "Reduce impact.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Install solar panels — renewable energy.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Implement waste recycling programme.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) High upfront capital cost — payback period long.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Requires staff training and process changes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) solar+recycling (b) capital+change",
            commonErrors: ["No improvements.", "No challenge."],
          },
        },
      ],
    },
  ],
};
