import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "phys11-u5-lesson-5-3",
  code: "5-3",
  title: "Capstone: Physics in Context — Synthesis",
  goal: "I CAN connect physics principles across topics to analyze real-world systems and evaluate technical claims.",
  standards: [
    "HS-PS2-6",
    "HS-PS3-3",
    "HS-PS4-1",
    "SEP: Constructing Explanations",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    {
      term: "System model",
      definition:
        "A simplified representation of a real system used to analyze its behavior.",
    },
    {
      term: "Emergent behavior",
      definition:
        "System-level properties arising from interactions of components, not predicted from parts alone.",
    },
    {
      term: "Feedback",
      definition:
        "Output of a system influencing its own input — stabilizing or amplifying.",
    },
    {
      term: "Trade-off",
      definition:
        "Improving one property often worsens another; engineering requires balance.",
    },
    {
      term: "Constraint",
      definition:
        "A limitation that shapes possible solutions (cost, materials, safety).",
    },
    {
      term: "Efficiency",
      definition: "Ratio of useful output to total input energy or work.",
    },
    {
      term: "Scaling",
      definition:
        "How system properties change with size — small models don't always predict large ones.",
    },
    {
      term: "Boundary",
      definition:
        "The defined edge of a system — what is included and what is external.",
    },
  ],
  concepts: [
    {
      id: "phys11-u5-systems",
      title: "Systems thinking in physics",
      skill:
        "Model real systems, identify boundaries and feedback, and explain emergent behavior.",
      lesson: {
        sections: [
          {
            heading: "Defining the system",
            body: "Every analysis starts with a boundary: what's inside vs outside. A car's engine is a system; fuel in, exhaust out. The boundary choice determines which principles apply and which forces/energy transfers count.",
          },
          {
            heading: "Feedback loops",
            body: "- **Negative feedback**: output reduces input → stabilizes (thermostat, cruise control)\n- **Positive feedback**: output increases input → amplifies (microphone feedback, compound interest)\n\nMost engineered systems use negative feedback for stability.",
          },
          {
            heading: "Emergent behavior",
            body: "Traffic jams emerge from simple car-following rules — no single driver causes it. Similarly, phase changes emerge from molecular interactions. System properties can't always be predicted from components alone.",
          },
        ],
        keyFormulas: [
          { name: "System", statement: "Boundary defines what's analyzed" },
          { name: "Feedback", statement: "Output → input loop" },
        ],
        workedExample: {
          problem: "Why does a thermostat use negative feedback?",
          solution:
            "When temp rises above setpoint, heater turns off; when below, turns on — keeps temperature stable.",
        },
      },
      questions: [
        {
          id: "phys11-u5-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a system boundary define?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The system's physical walls" },
              { id: "b", text: "What's included vs external to the analysis" },
              { id: "c", text: "The system's energy level" },
              { id: "d", text: "The system's temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Boundary",
                statement: "Defines included vs external elements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The boundary determines what counts as part of the system and what is external input/output.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** What's included vs external",
            commonErrors: ["Thinking boundary is physical."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u5-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of negative feedback in a physical system and explain how it stabilizes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative feedback",
                statement: "Output reduces input → stable equilibrium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example: thermostat, cruise control, or body's temperature regulation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "When output exceeds setpoint, system reduces input (heater off).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This keeps the variable near target — stable rather than runaway.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "E.g., thermostat: temp high → heater off → temp falls → heater on.",
            commonErrors: ["Confusing negative feedback with negative values."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "phys11-u5-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't we predict traffic jam formation from studying a single car's physics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Emergent behavior",
                statement:
                  "System properties from interactions, not components.",
              },
              {
                kind: "principle",
                name: "System boundary",
                statement: "Must include interactions between cars.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Traffic jam emerges from interactions between many cars — no single car causes it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Each car follows simple rules (speed, distance) but collective behavior is complex.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Studying one car misses the network effects and feedback loops.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "System-level analysis requires modeling many interacting components.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Emergent behavior from car-car interactions — can't predict from single car.",
            commonErrors: ["Thinking linear reductionism always works."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "phys11-u5-systems-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A city is designing an electric bus fleet. Analyze the physics and systems involved.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the energy transformations from grid to motion.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "List two trade-offs in battery size vs vehicle weight.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how regenerative braking uses physics.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Describe one system-level concern (e.g., charging infrastructure).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transformation",
                statement: "Grid → battery → motor → motion.",
              },
              {
                kind: "principle",
                name: "Trade-off",
                statement: "Larger battery = more range but more weight.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grid AC → charger → DC battery chemical energy → motor electrical → mechanical rotation → kinetic.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Each step has losses (heat) — overall efficiency ~70-80%.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Trade-off 1: bigger battery = more range but heavier vehicle = more energy needed.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Trade-off 2: bigger battery = more cost, longer charge time, more resources.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Regenerative braking: motor acts as generator, converting kinetic energy back to electrical.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Recovers ~20-30% of braking energy instead of wasting as heat.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Charging infrastructure: grid capacity, peak demand, charging station placement affects feasibility.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "System-level: fleet scheduling, battery degradation over cycles, electricity source matters.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) grid→battery→motor→motion (b) range vs weight/cost (c) motor as generator recovers energy (d) infrastructure/grid concerns.",
            commonErrors: ["Ignoring energy losses or system-level impacts."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u5-evaluate",
      title: "Evaluating physics claims and technologies",
      skill:
        "Critically assess technical claims using physics principles and evidence.",
      lesson: {
        sections: [
          {
            heading: "Technology evaluation framework",
            body: "1. What physics principle does it rely on?\n2. What's the efficiency? What energy is wasted?\n3. What are the trade-offs and constraints?\n4. What evidence supports the claims?\n5. What are the unintended consequences?",
          },
          {
            heading: "Common claim types",
            body: "- 'This device saves energy' → check efficiency vs alternatives\n- 'This material is stronger' → stronger how? at what cost?\n- 'This is safe' → safe under what conditions?\n- 'This is clean' → clean for whom? at what stage of lifecycle?",
          },
          {
            heading: "Physics-based skepticism",
            body: "Conservation of energy means no device creates energy from nothing. Perpetual motion machines violate physics. 'Free energy' claims usually hide energy inputs or measurement errors. Extraordinary claims require extraordinary evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy conservation",
            statement: "No free energy — outputs ≤ inputs",
          },
          {
            name: "Efficiency",
            statement: "$\\eta = \\text{useful}/\\text{input} < 1$",
          },
        ],
        workedExample: {
          problem:
            "A device claims 'generates electricity from magnets with no input.' Evaluate.",
          solution:
            "Violates energy conservation — magnets don't create energy. Any apparent output hides an energy input or measurement error.",
        },
      },
      questions: [
        {
          id: "phys11-u5-evaluate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What principle makes 'free energy' devices impossible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton's first law" },
              { id: "b", text: "Conservation of energy" },
              { id: "c", text: "Ohm's law" },
              { id: "d", text: "Boyle's law" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Energy can't be created from nothing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Energy conservation forbids creating energy — all devices need energy input.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Conservation of energy",
            commonErrors: ["Not recognizing fundamental principle violation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u5-evaluate-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An ad says 'This insulation reduces heating bills by 50%.' What questions should you ask?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Claim evaluation",
                statement: "Check baseline, conditions, and measurement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "50% compared to what? Uninsulated house? Different climate? Different usage?",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Under what conditions? Winter only? Specific insulation type/thickness?",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Is there independent verification or just manufacturer claim?",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Baseline comparison, conditions, independent verification.",
            commonErrors: ["Accepting percentage claim without context."],
            examinerNote: "R1, B1, A1.",
          },
        },
        {
          id: "phys11-u5-evaluate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 'zero-point energy' device claims to output more power than it consumes. Identify the physics principle it violates and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy conservation",
                statement: "Output can't exceed input.",
              },
              {
                kind: "principle",
                name: "Thermodynamics",
                statement:
                  "No process produces net work from equilibrium state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Violates conservation of energy — output > input is impossible.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "'Zero-point energy' is real quantum phenomenon but can't be extracted as usable power.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Thermodynamics: no cyclic process can produce net work from a single heat reservoir.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Any apparent output must come from hidden input or measurement error.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Violates energy conservation/thermodynamics — no free energy output.",
            commonErrors: ["Being fooled by quantum jargon."],
            examinerNote: "B1, R2, A1.",
          },
        },
        {
          id: "phys11-u5-evaluate-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Evaluate the claim: 'Solar panels are 100% clean and have no environmental impact.'",
          parts: [
            {
              label: "a",
              prompt:
                "Identify what's true and what's misleading in the claim.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "List two environmental impacts of solar panel production/lifecycle.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Write a more accurate version of the claim.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lifecycle analysis",
                statement: "Evaluate all stages, not just operation.",
              },
              {
                kind: "principle",
                name: "Comparative impact",
                statement: "Compare to alternatives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "True: solar generates electricity without burning fuel → no operational emissions.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Misleading: '100% clean' ignores manufacturing, disposal, land use impacts.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Also ignores intermittency — backup needed when sun doesn't shine.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Impact 1: manufacturing requires energy and materials (silicon, rare metals).",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Impact 2: disposal — panels contain hazardous materials; recycling is immature.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Or: land use — large installations disrupt habitats.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Accurate claim: 'Solar generates clean electricity during operation with far lower lifecycle emissions than fossil fuels, though manufacturing and disposal have environmental costs.'",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Evidence: lifecycle studies showing solar ~10x lower emissions than coal.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Reasoning: acknowledge trade-offs while noting solar's net benefit.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) clean operation true; ignores lifecycle (b) manufacturing/disposal impacts (c) accurate version acknowledges trade-offs.",
            commonErrors: [
              "Accepting 'clean' claim without lifecycle context.",
            ],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
  ],
};
