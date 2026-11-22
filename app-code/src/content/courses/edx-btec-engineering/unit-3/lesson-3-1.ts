import type { Lesson } from "../../../types.ts";

export const lesson301: Lesson = {
  id: "edxbteceng-u2-lesson-3-1",
  code: "3-1",
  title: "The Engineering Design Process",
  goal: "I CAN apply the stages of the engineering design process from specification through to evaluation.",
  standards: ["BTEC L3 National Engineering — Unit 3: Engineering Design"],
  vocabulary: [
    {
      term: "Design brief",
      definition:
        "The client's statement of the problem, constraints and requirements that launches the design process.",
    },
    {
      term: "Design specification",
      definition:
        "A quantified list of functional, performance, safety, cost and environmental requirements the solution must meet.",
    },
    {
      term: "Feasibility study",
      definition:
        "An assessment of whether a proposed solution can realistically be designed, made and afforded.",
    },
    {
      term: "Iterative design",
      definition:
        "Cyclical refinement where prototypes are tested and feedback drives improvements through multiple loops.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u3-1-process",
      title: "Specification and Concept Generation",
      skill:
        "Write design specifications and generate/evaluate concept solutions.",
      lesson: {
        sections: [
          {
            heading: "From brief to specification",
            body: "The design brief is vague; the specification is precise. A good specification is measurable: 'must lift 500 kg' not 'must be strong'; 'operate between -20 °C and 50 °C'; 'mass under 25 kg'; 'cost under $5000'; 'complies with ISO 13849 safety standard'.\n\nSpecifications also state constraints: available materials, manufacturing processes, timescales, regulations, ergonomics. Requirements are often prioritised — 'shall' (mandatory), 'should' (desirable), 'may' (optional).",
          },
          {
            heading: "Concept generation and selection",
            body: "Generate multiple concepts via brainstorming, morphological analysis (combining function × principle), biomimicry or TRIZ. Avoid premature convergence — the best solution often emerges from comparing 5-10 divergent ideas.\n\nSelection uses weighted decision matrices: score each concept against criteria (performance, cost, manufacturability, safety, sustainability) with weights reflecting importance. The top-scoring concept proceeds to detailed design; others are documented as backups.",
          },
        ],
        keyFormulas: [
          {
            name: "Weighted score",
            statement: "$S = \\sum (\\text{score}_i \\times \\text{weight}_i)$",
          },
          {
            name: "Specification quality",
            statement:
              "Every requirement measurable, testable and traceable to the brief",
          },
        ],
        workedExample: {
          problem:
            "A client wants 'a quiet, portable drill'. Convert to specification items.",
          solution:
            "Sound level < 75 dB at 1 m; mass < 2.5 kg; battery life ≥ 2 h continuous; chuck accepts 1–13 mm bits; operates 0–40 °C; IP rating ≥ IP54; unit cost < $120.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u3-1-process-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the BEST design specification requirement?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Must be strong",
              },
              {
                id: "b",
                text: "Mass shall not exceed 25 kg",
              },
              {
                id: "c",
                text: "Should be cheap",
              },
              {
                id: "d",
                text: "Must be as light as possible",
              },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Good specifications are measurable, testable and",
                statement:
                  "Good specifications are measurable, testable and unambiguous",
              },
            ],
            steps: [
              {
                reasoning: "Only (c) is quantifiable and testable",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Mass ≤ 25 kg",
            commonErrors: ["Choosing vague 'strong/cheap' language"],
            examinerNote: "Measurable = verifiable.",
          },
        },
        {
          id: "edxbteceng-u3-1-process-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two concepts are scored (1–5) on cost (weight 0.4), performance (0.4), risk (0.2). Concept A: 4, 3, 5. Concept B: 2, 5, 3. Calculate weighted scores and recommend.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Key principle",
                statement: "$S = \\sum s_i w_i$",
              },
            ],
            steps: [
              {
                reasoning: "A: $0.4(4)+0.4(3)+0.2(5) = 1.6+1.2+1.0$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B: $0.4(2)+0.4(5)+0.2(3) = 0.8+2.0+0.6$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A $= 3.8$, B $= 3.4$ → recommend A",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A wins 3.8 vs 3.4",
            commonErrors: ["Unweighted sums", "Arithmetic errors"],
            examinerNote: "Weights must sum to 1.",
          },
        },
        {
          id: "edxbteceng-u3-1-process-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'iterative' design is preferred over 'one-shot' design for complex engineering products.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iteration converts unknowns into knowledge throu",
                statement:
                  "Iteration converts unknowns into knowledge through test-feedback loops",
              },
            ],
            steps: [
              {
                reasoning: "Identifies imperfect initial knowledge",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Prototype testing reveals issues theory misses",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Links iteration to risk reduction",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coherent explanation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Iteration manages uncertainty and de-risks",
            commonErrors: [
              "Vague 'it's better' answers",
              "No mechanism explained",
            ],
            examinerNote: "Focus on WHY iteration works.",
          },
        },
        {
          id: "edxbteceng-u3-1-process-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student team designs a low-cost water filter for rural communities. The brief says 'provide clean water'.",
          parts: [
            {
              label: "a",
              prompt:
                "Write four measurable specification items for this product.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "List three concept-generation techniques they could use.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Identify two constraints beyond performance they must consider.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specification converts brief into measurable req",
                statement:
                  "Specification converts brief into measurable requirements; constraints span technical, economic, social",
              },
            ],
            steps: [
              {
                reasoning: "Performance spec item",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Second measurable item",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Third measurable item",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Three valid ideation techniques",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Techniques accurately described",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Non-performance constraint 1 e.g. local repair",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Non-performance constraint 2 e.g. cost/logistics",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Constraints realistic and specific",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) measurable specs (b) 3 ideation methods (c) 2 real constraints",
            commonErrors: [
              "Unmeasurable specs like 'clean water'",
              "Only technical constraints considered",
            ],
            examinerNote: "Context-appropriate constraints score highest.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u3-1-detail",
      title: "Detailed Design and Prototyping",
      skill:
        "Describe detailed design outputs and the role of prototypes and testing.",
      lesson: {
        sections: [
          {
            heading: "Detailed design outputs",
            body: "Concept selection leads to detailed design: full CAD models, engineering drawings with dimensions and tolerances, bills of materials (BOM), calculations (stress, thermal, FEA), and assembly documentation. Every dimension traces back to a specification requirement.\n\nDesign reviews check the design against the specification at gates — concept review, detailed design review, prototype review, production review. Issues caught early are cheap; late changes are expensive (rule of tens).",
          },
          {
            heading: "Prototyping and testing",
            body: "Prototypes range from low-fidelity (foam models, cardboard mock-ups for ergonomics) through functional prototypes (proof-of-concept circuits, 3D-printed parts) to pre-production units built by intended processes.\n\nTests verify against the specification: performance tests, environmental tests (temperature, vibration, ingress), durability tests, and user trials. Each test produces data; failures feed back into redesign — completing the iterative loop.",
          },
        ],
        keyFormulas: [
          {
            name: "Cost of change",
            statement:
              "Cost grows ~10× per stage: concept → detailed design → prototype → production",
          },
          {
            name: "BOM",
            statement:
              "Bill of materials: complete parts list with quantities, specs and suppliers",
          },
        ],
        workedExample: {
          problem: "Why build a foam mock-up before a functional prototype?",
          solution:
            "Foam model tests ergonomics, size and assembly sequence cheaply; catches human-factor problems before investing in electronics and materials.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u3-1-detail-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bill of materials (BOM) primarily lists:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "all parts, quantities and specifications for manufacture",
              },
              {
                id: "b",
                text: "marketing plans",
              },
              {
                id: "c",
                text: "employee schedules",
              },
              {
                id: "d",
                text: "test results",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "BOM = complete parts manifest for",
                statement: "BOM = complete parts manifest for production",
              },
            ],
            steps: [
              {
                reasoning: "BOM lists every component and quantity",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Parts/quantities/specs",
            commonErrors: ["Confusing BOM with budget"],
            examinerNote: "BOM feeds purchasing and assembly.",
          },
        },
        {
          id: "edxbteceng-u3-1-detail-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A design flaw costs $100 to fix at concept stage, $1,000 at detailed design, $10,000 at prototype, $100,000 at production. Express the production-stage cost as a multiple of the concept-stage cost.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 1000,
                tolerance: 0,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost of change escalates roughly 10×",
                statement: "Cost of change escalates roughly 10× per stage",
              },
            ],
            steps: [
              {
                reasoning: "$100\\,000 / 100$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 1000$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1000×",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1000×",
            commonErrors: ["Adding costs instead of ratio", "Wrong direction"],
            examinerNote: "Justifies front-loading design rigour.",
          },
        },
        {
          id: "edxbteceng-u3-1-detail-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe two benefits of building a low-fidelity prototype before a functional one.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Low-fidelity prototypes de-risk form/fit/functio",
                statement:
                  "Low-fidelity prototypes de-risk form/fit/function cheaply",
              },
            ],
            steps: [
              {
                reasoning: "Cost/speed benefit",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Tests human factors early",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Explains mechanism",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear accurate statement",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cheap iteration + early human-factor testing",
            commonErrors: [
              "Generic answers",
              "No contrast with functional prototype",
            ],
            examinerNote: "Fidelity spectrum is the key idea.",
          },
        },
        {
          id: "edxbteceng-u3-1-detail-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A water-pump prototype passes all lab tests but fails in the field because users cannot reach the priming screw.",
          parts: [
            {
              label: "a",
              prompt: "Explain why lab testing missed this failure.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe two improved test methods that would catch it.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "State what this reveals about specification writing.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specification must cover all stakeholder needs",
                statement:
                  "Specification must cover all stakeholder needs including ergonomics/usability",
              },
            ],
            steps: [
              {
                reasoning: "Tests were performance-only, no user involvement",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Correct diagnosis",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "User trials method",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Task-based/ergonomic assessment",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Third valid method or elaboration",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Identifies missing human-factor requirements",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "States implication for spec writing",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Insightful conclusion",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) no user testing (b) user trials/task analysis (c) include ergonomics in spec",
            commonErrors: ["Blaming users", "Only technical spec items"],
            examinerNote:
              "Human factors are legitimate engineering requirements.",
          },
        },
      ],
    },
  ],
};
