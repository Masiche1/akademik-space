import type { Lesson } from "../../../types.ts";

export const lesson303: Lesson = {
  id: "edxbteceng-u3-lesson-3-3",
  code: "3-3",
  title: "3D CAD Modelling and Simulation",
  goal: "I CAN create parametric 3D models, generate drawings and use simulation to validate engineering designs.",
  standards: ["BTEC L3 National Engineering — Unit 3: Engineering Design"],
  vocabulary: [
    {
      term: "Parametric modelling",
      definition:
        "Creating geometry defined by parameters (dimensions, constraints) so the model updates automatically when values change.",
    },
    {
      term: "Sketch and extrude",
      definition:
        "A 2D profile drawn on a plane, then extended into 3D — the fundamental CAD feature-building method.",
    },
    {
      term: "Assembly",
      definition:
        "A CAD structure combining multiple parts with mates/constraints defining their relative position and motion.",
    },
    {
      term: "FEA / simulation",
      definition:
        "Finite element analysis divides a model into elements to compute stresses, deflections, temperatures or flows under load.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u3-3-cad",
      title: "Parametric 3D Modelling",
      skill: "Build and modify parametric CAD models and assemblies.",
      lesson: {
        sections: [
          {
            heading: "Parametric modelling",
            body: "Parametric CAD (SolidWorks, Fusion 360, Inventor) builds parts from sketches constrained by dimensions and geometric relations (horizontal, tangent, coincident). Because geometry is driven by parameters, changing a dimension regenerates the whole model — enabling rapid design iteration.\n\nFeature-based modelling records history: base feature (extrude/revolve) → holes → fillets → patterns. Edit early features and later features update. Best practice: fully constrain sketches (black = fully defined) so models cannot be accidentally ambiguous.",
          },
          {
            heading: "Assemblies and drawings",
            body: "Assemblies insert parts and add mates: coincident, concentric, distance, angle. Motion studies check mechanisms for interference and range of movement.\n\nDrawings are generated from the 3D model: standard views, sections, BOM tables, balloons and title blocks are associative — change the model and the drawing updates, preventing documentation errors. Simulation (FEA) then validates the design against calculated stresses before manufacture.",
          },
        ],
        keyFormulas: [
          {
            name: "Design intent",
            statement:
              "Parameters capture intent; editing one value updates dependent geometry",
          },
          {
            name: "Fully constrained",
            statement: "All degrees of freedom fixed by dimensions/relations",
          },
        ],
        workedExample: {
          problem:
            "A bracket plate is extruded 10 mm with four M8 holes on a 60 × 40 mm pattern. Client asks for 80 × 50 mm plate. What changes?",
          solution:
            "Edit the sketch plate dimensions and hole-pattern parameters; the extrude and hole features regenerate automatically — no rebuilding needed. This is parametric modelling's advantage.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u3-3-cad-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The main advantage of parametric modelling over direct (dumb-solid) modelling is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "less RAM usage",
              },
              {
                id: "b",
                text: "faster rendering",
              },
              {
                id: "c",
                text: "geometry updates automatically when parameters change",
              },
              {
                id: "d",
                text: "no need for sketches",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parametric = dimension-driven, regenerating mode",
                statement: "Parametric = dimension-driven, regenerating model",
              },
            ],
            steps: [
              {
                reasoning: "Design intent is captured in parameters",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Auto-update on parameter change",
            commonErrors: ["Confusing parametric with polygon count"],
            examinerNote: "Design intent is the key concept.",
          },
        },
        {
          id: "edxbteceng-u3-3-cad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangular plate sketch is 60 × 40 mm with corner fillets radius 5 mm. If width changes to 80 mm keeping all constraints, describe what happens to fillet radius and hole positions relative to edges.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unchanged parameters keep values; constrained ge",
                statement:
                  "Unchanged parameters keep values; constrained geometry follows driving dimensions",
              },
            ],
            steps: [
              {
                reasoning: "Fillet stays 5 mm",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hole positions depend on their constraints",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct parametric behaviour described",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fillet unchanged; holes reposition per constraints",
            commonErrors: [
              "Thinking all dimensions scale",
              "Ignoring constraint types",
            ],
            examinerNote: "Constraints determine what updates.",
          },
        },
        {
          id: "edxbteceng-u3-3-cad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'fully constrained' sketches are considered good CAD practice.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Under-constrained sketches can solve to wrong",
                statement:
                  "Under-constrained sketches can solve to wrong geometry",
              },
            ],
            steps: [
              {
                reasoning: "Definition of fully constrained",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains ambiguity risk",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Predictability/reproducibility benefit",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Clear engineering reasoning",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Eliminates ambiguity; predictable regeneration",
            commonErrors: ["Vague 'it's tidier'", "No consequence explained"],
            examinerNote: "Under-defined = dangerous in production CAD.",
          },
        },
        {
          id: "edxbteceng-u3-3-cad-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An engineer models a gearbox housing in CAD, then runs FEA showing max stress $180\\ \\text{MPa}$ against a yield of $250\\ \\text{MPa}$.",
          parts: [
            {
              label: "a",
              prompt: "State what FEA is and what the result means.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify two assumptions an FEA makes that could make the real stress higher.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Suggest two design changes to reduce stress, and explain why each helps.",
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
                name: "FEA approximates reality; assumptions (loads, co",
                statement:
                  "FEA approximates reality; assumptions (loads, constraints, material) must be validated",
              },
            ],
            steps: [
              {
                reasoning: "FEA correctly defined",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Correct safety interpretation + caveat",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Load/constraint idealisation (e.g. perfectly rigid fixture, single load case)",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Material/model simplification (isotropic, no defects, no residual stress)",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Stress reduction via geometry e.g. fillet/thickness",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Mechanism explained",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "Second valid change (e.g. better load path, different material)",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) safe but assumptions matter (b) idealisations (c) geometry changes reduce stress",
            commonErrors: [
              "Treating FEA result as exact",
              "Changes without stress mechanism",
            ],
            examinerNote: "FEA is a model — assumptions limit validity.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u3-3-validation",
      title: "Simulation and Design Validation",
      skill:
        "Use simulation results to validate designs and identify failure risks.",
      lesson: {
        sections: [
          {
            heading: "Types of simulation",
            body: "FEA covers structural stress, thermal and vibration. CFD simulates fluid flow (drag, cooling, aerodynamics). Multibody dynamics simulates mechanisms. Tolerance analysis predicts assembly variation. Each requires correct inputs: material properties, boundary conditions, loads and mesh quality.\n\nMesh convergence matters: results must be checked by refining the mesh until results stabilise — a coarse mesh can miss stress concentrations.",
          },
          {
            heading: "Validation and verification",
            body: "Verification asks 'did we solve the equations correctly?' (mesh checks, benchmark problems). Validation asks 'do the equations represent reality?' (compare against physical tests). A validated model justifies using simulation to reduce physical prototypes.\n\nRed flags in simulation output: unrealistic constraints, missing loads, singularities (sharp corners causing stress spikes — real but mesh-dependent), and results that match expectations too neatly (possible confirmation bias).",
          },
        ],
        keyFormulas: [
          {
            name: "Safety factor",
            statement:
              "$n = \\dfrac{\\text{yield/ultimate}}{\\text{working stress}}$; typical 1.5–3 for ductile, higher for brittle",
          },
          {
            name: "Mesh convergence",
            statement: "Refine mesh until key results change < ~5%",
          },
        ],
        workedExample: {
          problem:
            "FEA shows peak stress $400\\ \\text{MPa}$ at a sharp internal corner; yield $250\\ \\text{MPa}$. What's wrong?",
          solution:
            "Sharp corner = stress singularity; FEA mesh-dependent spike. Real fix: add fillet radius; re-run FEA — stress drops dramatically. Never report singularity values as real.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u3-3-validation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Mesh convergence means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "the mesh looks neat",
              },
              {
                id: "b",
                text: "all parts touch",
              },
              {
                id: "c",
                text: "results stabilise as mesh is refined",
              },
              {
                id: "d",
                text: "the model downloads quickly",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refine mesh until results stop changing",
                statement:
                  "Refine mesh until results stop changing significantly",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convergence = result independence from mesh density",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Results stabilise",
            commonErrors: ["Confusing convergence with accuracy"],
            examinerNote:
              "Convergence is necessary not sufficient for accuracy.",
          },
        },
        {
          id: "edxbteceng-u3-3-validation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Yield stress $250\\ \\text{MPa}$, working stress from FEA $180\\ \\text{MPa}$. Calculate the factor of safety and state whether it's adequate for a ductile component (typical min 1.5).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 1.39,
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key principle",
                statement: "$n = \\sigma_y/\\sigma$",
              },
            ],
            steps: [
              {
                reasoning: "$250/180$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 1.39$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Below 1.5 → inadequate margin",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n = 1.39$ — below recommended 1.5",
            commonErrors: ["Inverting the ratio", "Ignoring typical minimum"],
            examinerNote: "FOS depends on material behaviour and consequences.",
          },
        },
        {
          id: "edxbteceng-u3-3-validation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish 'verification' from 'validation' in simulation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Verification = correct solution; validation =",
                statement:
                  "Verification = correct solution; validation = correct model",
              },
            ],
            steps: [
              {
                reasoning: "Verification defined correctly",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Validation defined correctly",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains the distinction clearly",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Accurate concise statement",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "V&V: right equations vs right model",
            commonErrors: [
              "Using terms interchangeably",
              "Reversed definitions",
            ],
            examinerNote: "Classic distinction worth 4 marks.",
          },
        },
        {
          id: "edxbteceng-u3-3-validation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An FEA of a bracket shows max stress at a hole edge of $320\\ \\text{MPa}$; yield $250\\ \\text{MPa}$. Physical testing shows the real part survives 1.4× design load.",
          parts: [
            {
              label: "a",
              prompt:
                "Reconcile the FEA failure prediction with the physical survival.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "List three possible causes of the FEA over-prediction.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "State how you would resolve the discrepancy.",
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
                name: "Simulation must be validated against physical",
                statement:
                  "Simulation must be validated against physical reality; discrepancies reveal modelling errors",
              },
            ],
            steps: [
              {
                reasoning: "Identifies FEA idealisation as source",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Reasonable reconciliation offered",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Possible singularity/mesh effect",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Cause 1 e.g. over-constraint",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Cause 2 e.g. load/boundary error",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Cause 3 e.g. material property/mesh",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Resolution method e.g. mesh refinement/test correlation",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Systematic V&V approach",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) model vs reality gap (b) three causes (c) mesh refine + test correlation",
            commonErrors: [
              "Ignoring the discrepancy",
              "No systematic resolution",
            ],
            examinerNote: "V&V mindset is the assessed skill.",
          },
        },
      ],
    },
  ],
};
