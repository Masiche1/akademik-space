import type { Lesson } from "../../../types.ts";

export const lesson201: Lesson = {
  id: "edxbteceng-u2-lesson-2-1",
  code: "2-1",
  title: "Modern Engineering Technology",
  goal: "I CAN explain how advances in technology — automation, CAD/CAM, robotics and digital systems — are reshaping engineering practice.",
  standards: [
    "BTEC L3 National Engineering — Unit 2: Engineering Applications",
  ],
  vocabulary: [
    {
      term: "CAD",
      definition:
        "Computer-Aided Design — software used to create, modify and analyse engineering models and drawings.",
    },
    {
      term: "CAM",
      definition:
        "Computer-Aided Manufacturing — software that drives machine tools directly from CAD models.",
    },
    {
      term: "Automation",
      definition:
        "The use of control systems and machinery to perform tasks with reduced human intervention.",
    },
    {
      term: "Industry 4.0",
      definition:
        "The integration of cyber-physical systems, IoT sensors and data analytics into manufacturing (the 'fourth industrial revolution').",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u2-1-cadcam",
      title: "CAD/CAM and Digital Manufacturing",
      skill:
        "Explain the CAD-to-CAM workflow and its impact on accuracy and productivity.",
      lesson: {
        sections: [
          {
            heading: "From CAD to CAM",
            body: "CAD systems model parts in 2D and 3D with parametric dimensions. Once a model is validated, CAM software generates toolpaths — the precise routes cutting tools follow — and posts them to CNC machines. The CAD model becomes the single source of truth, eliminating transcription errors between drawing and machine.\n\nBenefits: faster prototyping, tighter tolerances, easy design changes (edit a parameter, regenerate the model), and simulation of machining before metal is cut.",
          },
          {
            heading: "Digital twins and simulation",
            body: "Modern engineering increasingly uses digital twins — live virtual replicas fed by sensor data from the physical asset. They allow engineers to test 'what-if' scenarios, predict failures and optimise performance without stopping production.\n\nSimulation tools model stress, fluid flow, thermal behaviour and assembly long before hardware exists, shifting much of the cost and risk out of physical prototyping.",
          },
        ],
        keyFormulas: [
          {
            name: "Machining time",
            statement:
              "$t = \\dfrac{L}{f \\cdot n}$ — length / (feed per tooth × spindle speed)",
          },
          {
            name: "Digital thread",
            statement:
              "CAD model → CAM toolpath → CNC machine → inspection data → updated model",
          },
        ],
        workedExample: {
          problem:
            "A CNC mill cuts a $150\\ \\text{mm}$ slot at feed $500\\ \\text{mm/min}$. Estimate the cutting time.",
          solution:
            "$t = L/f = 150/500 = 0.3\\ \\text{min} = 18\\ \\text{s}$ (ignoring tool changes and rapids).",
        },
      },
      questions: [
        {
          id: "edxbteceng-u2-1-cadcam-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does CAM software generate from a CAD model?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Financial reports",
              },
              {
                id: "b",
                text: "Marketing brochures",
              },
              {
                id: "c",
                text: "Toolpaths and machine instructions",
              },
              {
                id: "d",
                text: "Employee rotas",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CAM converts CAD geometry into machine",
                statement: "CAM converts CAD geometry into machine toolpaths",
              },
            ],
            steps: [
              {
                reasoning: "CAM produces toolpaths posted to CNC machines",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Toolpaths and machine instructions",
            commonErrors: ["Confusing CAD (design) with CAM (manufacture)"],
            examinerNote: "CAD designs; CAM manufactures.",
          },
        },
        {
          id: "edxbteceng-u2-1-cadcam-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A part previously machined in $45\\ \\text{min}$ is now made by CNC in $12\\ \\text{min}$. Calculate the percentage reduction in machining time.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 73.3,
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage change = (old − new)/old",
                statement: "Percentage change = (old − new)/old × 100",
              },
            ],
            steps: [
              {
                reasoning: "$(45 - 12)/45 = 33/45$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.7333$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$73.3\\%$",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "73.3%",
            commonErrors: [
              "Dividing by the new time instead of old",
              "Reporting 0.733 as the percentage",
            ],
            examinerNote: "Percentage reduction is relative to the original.",
          },
        },
        {
          id: "edxbteceng-u2-1-cadcam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give two advantages and one limitation of using a digital twin in engineering.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital twin = live virtual replica",
                statement:
                  "Digital twin = live virtual replica fed by sensor data",
              },
            ],
            steps: [
              {
                reasoning: "Valid advantage 1 e.g. predictive maintenance",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Valid advantage 2 e.g. safe simulation/testing",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Identifies data/model-fidelity dependency",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limitation clearly explained",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Two advantages + one limitation",
            commonErrors: [
              "Generic 'technology is good' answers",
              "No real limitation offered",
            ],
            examinerNote: "Balanced evaluation expected.",
          },
        },
        {
          id: "edxbteceng-u2-1-cadcam-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A workshop switches from manual machining to CNC with CAD/CAM. Productivity rises 40% but the initial investment is $250\\,000.",
          parts: [
            {
              label: "a",
              prompt: "Explain two ways CAD/CAM improves quality.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If manual output was $3000/day and CNC output is $4200/day, calculate the extra annual revenue (250 working days).",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Suggest one cost that the payback calculation must include beyond machine price.",
              marks: 2,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CAD/CAM gives a single digital thread;",
                statement:
                  "CAD/CAM gives a single digital thread; payback includes all lifecycle costs",
              },
            ],
            steps: [
              {
                reasoning:
                  "Single source of truth eliminates drawing-to-machine errors",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Tighter tolerance/consistency",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Simulation/pre-check reduces scrap",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "$(4200-3000) \\times 250$",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$= 1200 \\times 250 = \\$300\\,000$/year",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Extra revenue figure correct",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Valid additional cost e.g. training/tooling/software",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Justified as lifecycle cost",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) two quality mechanisms (b) $300\\,000/year extra (c) e.g. training/tooling",
            commonErrors: ["Using revenue not profit", "Ignoring hidden costs"],
            examinerNote:
              "Payback = investment / annual benefit — check what's counted.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u2-1-robotics",
      title: "Automation and Robotics",
      skill: "Describe robotic systems, sensors and control in manufacturing.",
      lesson: {
        sections: [
          {
            heading: "Industrial robotics",
            body: "Robots are reprogrammable, multifunctional manipulators. Common types: articulated arms (6-axis, versatile welding/assembly), SCARA (fast pick-and-place), Cartesian (linear XYZ motion), and collaborative robots ('cobots') that work safely alongside humans.\n\nKey components: manipulator, controller, end-effector (gripper/welder/drill), and sensors providing feedback — position, force, vision. Programming is typically teach-pendant or offline via simulation.",
          },
          {
            heading: "Automation levels",
            body: "Automation ranges from fixed automation (dedicated machines for one task — fastest, least flexible) through programmable automation (batch changes) to flexible automation (robots reprogrammed per product). Higher flexibility costs more but handles product variety.\n\nSensors close the loop: without feedback a robot cannot adapt. Vision systems locate parts, force sensors prevent damage during assembly, and encoders track position precisely.",
          },
        ],
        keyFormulas: [
          {
            name: "Cycle time",
            statement:
              "$T_{\\text{cycle}} = T_{\\text{process}} + T_{\\text{transfer}} + T_{\\text{wait}}$",
          },
          {
            name: "Throughput",
            statement: "$\\text{Output/hour} = 3600/T_{\\text{cycle}}$",
          },
        ],
        workedExample: {
          problem:
            "A robot has $45\\ \\text{s}$ process time and $15\\ \\text{s}$ transfer time per cycle. Find hourly output.",
          solution:
            "$T_{\\text{cycle}} = 60\\ \\text{s}$. Output $= 3600/60 = 60$ parts/hour.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u2-1-robotics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which robot type is best suited to fast pick-and-place in electronics assembly?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cartesian gantry",
              },
              {
                id: "b",
                text: "Humanoid",
              },
              {
                id: "c",
                text: "Articulated arm",
              },
              {
                id: "d",
                text: "SCARA",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SCARA = Selective Compliance Assembly Robot",
                statement:
                  "SCARA = Selective Compliance Assembly Robot Arm; fast horizontal reach, rigid vertical",
              },
            ],
            steps: [
              {
                reasoning: "SCARA excels at fast pick-and-place",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "SCARA",
            commonErrors: ["Choosing articulated arm for a specialised task"],
            examinerNote: "Match robot kinematics to task.",
          },
        },
        {
          id: "edxbteceng-u2-1-robotics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cell runs two products: cycle times $40\\ \\text{s}$ and $70\\ \\text{s}$. In one hour it completes equal numbers of each. Calculate total parts per hour.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 72,
                tolerance: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Throughput = 3600/cycle time per product",
                statement: "Throughput = 3600/cycle time per product",
              },
            ],
            steps: [
              {
                reasoning:
                  "If time is split equally: solve $3600/(40) \\cdot t_1 = 3600/(70)\\cdot t_2$ with $t_1+t_2=3600$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alternative: equal numbers $n$ each; time $= 40n + 70n = 110n = 3600$ → $n = 32.7$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$2n \\approx 65$ parts/h (accept 64-66); alternatively $90+51.4=141$ if interpreted differently — award method mark",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 65 parts/hour (equal numbers of each)",
            commonErrors: [
              "Adding cycle times incorrectly",
              "Ignoring the equal-numbers condition",
            ],
            examinerNote: "Ambiguity acceptable if method is sound.",
          },
        },
        {
          id: "edxbteceng-u2-1-robotics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of sensors in a robotic welding cell, giving two examples.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feedback sensors enable closed-loop control and",
                statement:
                  "Feedback sensors enable closed-loop control and error correction",
              },
            ],
            steps: [
              {
                reasoning: "Identifies closed-loop/feedback role",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Vision/position sensing example",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Force/contact sensing example",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear engineering explanation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Feedback enables adaptive control; e.g. vision + force sensing",
            commonErrors: [
              "Listing sensors without explaining function",
              "Open-loop misconceptions",
            ],
            examinerNote: "Function, not just names, earns marks.",
          },
        },
        {
          id: "edxbteceng-u2-1-robotics-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A factory replaces two manual assembly stations with one robot cell costing $180\\,000$, saving $95\\,000$/year in labour.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the simple payback period.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give two non-financial benefits of automation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give two risks or costs automation introduces.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State one situation where automation would NOT be justified.",
              marks: 2,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Payback = cost/annual saving; automation trades",
                statement:
                  "Payback = cost/annual saving; automation trades flexibility for throughput",
              },
            ],
            steps: [
              {
                reasoning: "$180\\,000/95\\,000$",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$\\approx 1.9$ years",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Two valid non-financial benefits",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Benefits well described",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Two valid risks/costs",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Risks clearly stated",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Valid non-justification scenario",
                marks: 1,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Justified with economic reasoning",
                marks: 1,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) ~1.9 yr (b) two benefits (c) two risks (d) e.g. low-volume/high-mix",
            commonErrors: [
              "Only financial benefits listed",
              "Generic risks without context",
            ],
            examinerNote: "Balanced techno-economic judgement rewarded.",
          },
        },
      ],
    },
  ],
};
