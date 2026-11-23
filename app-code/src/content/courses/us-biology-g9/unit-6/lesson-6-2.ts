import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "bio9-u6-lesson-6-2",
  code: "6-2",
  title: "Enzymes and Metabolism",
  goal: "I CAN explain enzyme catalysis, factors affecting enzyme activity, and how metabolism is regulated.",
  standards: [
    "HS-LS1-6",
    "HS-LS1-5",
    "CCC: Structure and Function",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Metabolism",
      definition: "All chemical reactions in a cell or organism.",
    },
    {
      term: "Catabolism",
      definition: "Breakdown of molecules releasing energy.",
    },
    {
      term: "Anabolism",
      definition: "Synthesis of molecules requiring energy.",
    },
    {
      term: "Activation energy",
      definition: "Minimum energy needed to start a chemical reaction.",
    },
    {
      term: "Cofactor",
      definition:
        "Non-protein helper (coenzyme or metal ion) required for enzyme activity.",
    },
    {
      term: "Competitive inhibitor",
      definition: "Molecule that binds the active site, blocking substrate.",
    },
    {
      term: "Allosteric regulation",
      definition:
        "Regulation by molecules binding outside the active site, changing enzyme shape.",
    },
  ],
  concepts: [
    {
      id: "bio9-u6-enzyme-mechanism",
      title: "How enzymes work",
      skill:
        "Explain enzyme catalysis, the induced-fit model, and factors affecting activity.",
      lesson: {
        sections: [
          {
            heading: "Enzyme catalysis",
            body: "Enzymes are protein catalysts that lower **activation energy**, speeding up reactions without being consumed.\n\n**Lock-and-key vs induced-fit**: the induced-fit model is accepted — the active site changes shape slightly to better fit the substrate.\n\nA chain of $n$ monomers... not relevant here. Enzyme reaction rate depends on:\n- **Substrate concentration**: rate increases until enzyme saturation (Vmax).\n- **Temperature**: increases rate up to optimum, then denaturation drops it.\n- **pH**: each enzyme has optimal pH; extremes denature it.",
          },
          {
            heading: "Denaturation",
            body: "**Denaturation** is the loss of a protein's 3D shape (and thus function), caused by high temperature or extreme pH. Hydrogen bonds and other weak interactions holding the shape break; the active site deforms. Denaturation is usually irreversible for enzymes.",
          },
        ],
        keyFormulas: [
          {
            name: "Catalysis",
            statement: "Enzymes lower activation energy; not consumed.",
          },
          {
            name: "Saturation",
            statement: "Rate plateaus at Vmax when all active sites occupied.",
          },
          {
            name: "Denaturation",
            statement:
              "Loss of shape/function at high temperature or extreme pH.",
          },
        ],
        workedExample: {
          problem:
            "Pepsin works best at pH 2 (stomach). What happens if it enters the small intestine (pH ~8)?",
          solution:
            "pH change denatures pepsin — active site deforms, enzyme stops working.",
        },
      },
      questions: [
        {
          id: "bio9-u6-enzymes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an enzyme do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is consumed in the reaction" },
              { id: "b", text: "Lowers activation energy" },
              { id: "c", text: "Changes equilibrium" },
              { id: "d", text: "Provides energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzyme",
                statement:
                  "Catalyst lowering activation energy without being consumed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enzymes speed reactions by lowering activation energy; they are not consumed and do not change equilibrium.",
                evidence: "Ea",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Lowers activation energy.",
            commonErrors: ["Choosing (c): enzymes don't shift equilibrium."],
          },
        },
        {
          id: "bio9-u6-enzymes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the induced-fit model of enzyme action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Induced fit",
                statement: "Active site reshapes to fit substrate.",
              },
            ],
            steps: [
              {
                reasoning: "Substrate enters the active site region.",
                evidence: "binding",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Active site changes shape slightly to maximize contact.",
                evidence: "shape change",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This stress weakens substrate bonds → reaction proceeds faster.",
                evidence: "catalysis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Active site reshapes around substrate to catalyze the reaction.",
            commonErrors: ["Describing rigid lock-and-key only."],
          },
        },
        {
          id: "bio9-u6-enzymes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sketch and explain how temperature affects enzyme reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Temperature effect",
                statement:
                  "Rate rises to optimum then falls due to denaturation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Below optimum: rate increases with temperature (more collisions).",
                evidence: "rise",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "At optimum: maximum rate.",
                evidence: "optimum",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Above optimum: denaturation reduces active enzymes → rate drops sharply.",
                evidence: "denaturation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Human enzymes typically optimum ~37 °C.",
                evidence: "37",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Rate rises to optimum temperature, then falls as enzymes denature.",
            commonErrors: ["Saying rate increases forever with temperature."],
          },
        },
        {
          id: "bio9-u6-enzymes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An enzyme-catalyzed reaction is measured at increasing substrate concentration.",
          parts: [
            {
              label: "a",
              prompt: "Why does rate increase initially?",
              marks: 2,
            },
            { label: "b", prompt: "Why does rate plateau?", marks: 2 },
            { label: "c", prompt: "What is Vmax?", marks: 2 },
            {
              label: "d",
              prompt:
                "How would doubling enzyme concentration change the curve?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Enzyme kinetics",
                statement:
                  "Rate limited by substrate availability then enzyme saturation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "More substrate molecules → more enzyme-substrate collisions per second.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "All active sites occupied (saturation); rate limited by turnover.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Maximum rate when all enzyme active sites are saturated.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Higher Vmax and the plateau shifts up; Km roughly unchanged.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) More collisions (b) Saturation (c) Max rate at saturation (d) Higher Vmax.",
            commonErrors: ["Thinking rate increases linearly forever."],
          },
        },
      ],
    },
    {
      id: "bio9-u6-metabolism-regulation",
      title: "Metabolic Pathways and Regulation",
      skill:
        "Describe catabolic and anabolic pathways and explain feedback regulation of metabolism.",
      lesson: {
        sections: [
          {
            heading: "Metabolic pathways",
            body: "**Catabolism** breaks molecules down (e.g., cellular respiration: glucose → CO₂ + H₂O + ATP) releasing energy.\n\n**Anabolism** builds molecules (e.g., photosynthesis: CO₂ + H₂O → glucose) requiring energy.\n\nPathways are sequences of enzyme-catalyzed steps; each step's product is the next step's substrate.",
          },
          {
            heading: "Feedback regulation",
            body: "Metabolism is regulated by **feedback inhibition**: the end product inhibits an early enzyme in its own pathway.\n\n- **Negative feedback**: product slows the pathway (e.g., isoleucine inhibits threonine deaminase).\n- **Positive feedback**: product activates the pathway (rare; e.g., blood clotting).\n\nThis prevents overproduction and waste of resources.",
          },
        ],
        keyFormulas: [
          {
            name: "Catabolism vs anabolism",
            statement:
              "Breakdown (releases energy) vs synthesis (requires energy).",
          },
          {
            name: "Feedback inhibition",
            statement: "End product inhibits early enzyme → self-regulation.",
          },
          {
            name: "Pathway",
            statement: "Enzyme chain; product of one step = substrate of next.",
          },
        ],
        workedExample: {
          problem: "Why does adding end product to a pathway slow its rate?",
          solution:
            "The product binds allosterically to an early enzyme, changing its shape and reducing activity — negative feedback.",
        },
      },
      questions: [
        {
          id: "bio9-u6-metabolism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a catabolic process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis" },
              { id: "b", text: "Protein synthesis" },
              { id: "c", text: "Cellular respiration" },
              { id: "d", text: "DNA replication" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catabolism",
                statement: "Breakdown of molecules releasing energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cellular respiration breaks glucose down; the others build molecules.",
                evidence: "respiration",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Cellular respiration.",
            commonErrors: ["Choosing (a): photosynthesis is anabolic."],
          },
        },
        {
          id: "bio9-u6-metabolism-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain feedback inhibition with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Feedback inhibition",
                statement: "End product inhibits early enzyme.",
              },
            ],
            steps: [
              {
                reasoning: "End product of pathway accumulates.",
                evidence: "product",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It binds to an early enzyme at an allosteric site.",
                evidence: "allosteric",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Enzyme activity drops → less product made (e.g., isoleucine pathway).",
                evidence: "example",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "End product inhibits early enzyme → pathway slows.",
            commonErrors: ["Describing positive feedback."],
          },
        },
        {
          id: "bio9-u6-metabolism-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is allosteric regulation important for cells?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Allosteric regulation",
                statement:
                  "Fine control of enzyme activity without changing enzyme amount.",
              },
            ],
            steps: [
              {
                reasoning: "Allows rapid adjustment of pathway rates.",
                evidence: "speed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prevents wasteful overproduction of metabolites.",
                evidence: "waste",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Enables coordination between different pathways.",
                evidence: "coordination",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "More efficient than degrading/rebuilding enzymes.",
                evidence: "efficiency",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Rapid, efficient control of metabolic flux without enzyme degradation.",
            commonErrors: ["Saying it only works on active sites."],
          },
        },
        {
          id: "bio9-u6-metabolism-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare catabolism and anabolism across four features.",
          parts: [
            { label: "a", prompt: "Energy change?", marks: 2 },
            { label: "b", prompt: "Example?", marks: 2 },
            { label: "c", prompt: "Effect on molecule size?", marks: 2 },
            { label: "d", prompt: "Overall relationship?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catabolism vs anabolism",
                statement: "Breakdown vs synthesis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Catabolism releases energy; anabolism requires energy.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Catabolism: cellular respiration. Anabolism: photosynthesis/protein synthesis.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Catabolism breaks large → small; anabolism builds small → large.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Anabolism products fuel catabolism; energy flows between them.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Release vs require (b) Respiration vs photosynthesis (c) Large→small vs small→large (d) Energy coupling.",
            commonErrors: ["Reversing the definitions."],
          },
        },
      ],
    },
    {
      id: "bio9-u6-homeostasis",
      title: "Homeostasis and Feedback Loops",
      skill:
        "Explain homeostasis, negative feedback, and how organisms maintain internal conditions.",
      lesson: {
        sections: [
          {
            heading: "Homeostasis",
            body: "**Homeostasis** is the maintenance of stable internal conditions despite external changes. Examples:\n\n- **Thermoregulation**: body temperature ~37 °C.\n- **Osmoregulation**: water and solute balance.\n- **Blood glucose**: maintained ~70–100 mg/dL.\n- **Blood pH**: ~7.35–7.45.\n\nA **set point** is the target value; **receptors** detect deviation; **effectors** respond.",
          },
          {
            heading: "Negative feedback",
            body: "Most homeostatic mechanisms use **negative feedback**: the response opposes the stimulus, returning the variable to set point.\n\nExample — body temperature:\n1. Temperature rises above set point.\n2. Hypothalamus detects change.\n3. Effectors (sweat glands, blood vessels) activated.\n4. Sweating + vasodilation cool the body.\n5. Temperature returns to set point.",
          },
        ],
        keyFormulas: [
          {
            name: "Homeostasis",
            statement: "Stable internal conditions via feedback.",
          },
          { name: "Set point", statement: "Target value the body maintains." },
          {
            name: "Negative feedback",
            statement: "Response opposes stimulus → stability.",
          },
        ],
        workedExample: {
          problem: "Describe negative feedback in blood glucose regulation.",
          solution:
            "High glucose → insulin released → cells take up glucose → glucose drops → insulin stops. Low glucose → glucagon → liver releases glucose.",
        },
      },
      questions: [
        {
          id: "bio9-u6-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth and development" },
              { id: "b", text: "Maintenance of stable internal conditions" },
              { id: "c", text: "Reproduction" },
              { id: "d", text: "Evolution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homeostasis",
                statement:
                  "Stable internal conditions despite external changes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homeostasis = maintaining stable internal environment.",
                evidence: "stable",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Maintenance of stable internal conditions.",
            commonErrors: [
              "Choosing (a): growth is development, not homeostasis.",
            ],
          },
        },
        {
          id: "bio9-u6-homeostasis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the components of a homeostatic feedback loop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Feedback loop components",
                statement:
                  "Stimulus → receptor → control center → effector → response.",
              },
            ],
            steps: [
              {
                reasoning: "Stimulus changes the variable.",
                evidence: "stimulus",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Receptor detects change; control center compares to set point.",
                evidence: "receptor",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effector produces response returning variable to set point.",
                evidence: "effector",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Stimulus → receptor → control center → effector → response.",
            commonErrors: ["Missing the control center."],
          },
        },
        {
          id: "bio9-u6-homeostasis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how negative feedback regulates body temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Thermoregulation",
                statement:
                  "Hypothalamus set point ~37 °C; sweating/vasodilation/vasoconstriction/shivering.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hypothalamus detects temperature deviation from 37 °C.",
                evidence: "hypothalamus",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "If hot: sweating + vasodilation increase heat loss.",
                evidence: "cooling",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "If cold: vasoconstriction + shivering reduce heat loss/generate heat.",
                evidence: "warming",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Response opposes stimulus → negative feedback restores set point.",
                evidence: "feedback",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Hypothalamus triggers sweating/vasodilation or shivering/vasoconstriction to restore 37 °C.",
            commonErrors: ["Describing positive feedback."],
          },
        },
        {
          id: "bio9-u6-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Blood glucose rises after a meal.",
          parts: [
            { label: "a", prompt: "What hormone is released?", marks: 2 },
            { label: "b", prompt: "What does it do?", marks: 2 },
            { label: "c", prompt: "What happens to glucose level?", marks: 2 },
            {
              label: "d",
              prompt: "What hormone raises glucose when low?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Glucose homeostasis",
                statement: "Insulin lowers; glucagon raises blood glucose.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Insulin released by pancreatic beta cells.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Promotes glucose uptake by cells and storage as glycogen.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Blood glucose returns toward set point (~70–100 mg/dL).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Glucagon (from alpha cells) raises glucose via glycogen breakdown/gluconeogenesis.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Insulin (b) Uptake/storage (c) Returns to set point (d) Glucagon.",
            commonErrors: ["Reversing insulin and glucagon."],
          },
        },
      ],
    },
  ],
};
