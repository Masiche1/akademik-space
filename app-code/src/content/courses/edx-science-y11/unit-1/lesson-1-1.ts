import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "esc11-u1-lesson-1-1",
  code: "1-1",
  title: "Coordination and Response",
  goal: "I CAN describe nervous and hormonal control systems and reflexes.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Biology (Y11)"],
  vocabulary: [
    { term: "Neuron", definition: "Nerve cell — carries electrical impulses." },
    {
      term: "Synapse",
      definition: "Junction between neurons — chemical message passes across.",
    },
    {
      term: "Hormone",
      definition:
        "Chemical messenger in blood — slower, longer-lasting than nerves.",
    },
    {
      term: "Reflex arc",
      definition:
        "Automatic response — receptor → sensory neuron → spinal cord → motor neuron → effector.",
    },
  ],
  concepts: [
    {
      id: "esc11-u1-nervous",
      title: "Nervous System and Reflexes",
      skill:
        "Describe neuron structure, impulse transmission and the reflex arc.",
      lesson: {
        sections: [
          {
            heading: "Neurons and impulses",
            body: "**Neuron parts**: cell body (nucleus), dendrites (receive signals), axon (conducts impulse — myelin sheath speeds it), axon terminals (release neurotransmitter). Sensory → CNS (brain/spinal cord) → motor neurons.\n\n**Impulse**: electrical signal travels along axon by ion movement across membrane (Na⁺ in, K⁺ out). At synapse, neurotransmitter diffuses across gap → triggers next neuron. Fast, targeted, short-lived.",
          },
          {
            heading: "Reflexes and senses",
            body: "**Reflex arc**: receptor detects stimulus → sensory neuron → relay neuron (spinal cord) → motor neuron → effector responds — bypasses brain for speed (hand from heat). **Sense organs**: eye (light), ear (sound/balance), skin (touch/pressure/temperature/pain).\n\n**Brain**: cerebrum (thinking/memory), cerebellum (balance/coordination), medulla (automatic — breathing, heartbeat). Voluntary actions conscious; reflexes automatic and protective.",
          },
        ],
        keyFormulas: [
          {
            name: "Reflex arc",
            statement:
              "Receptor → sensory neuron → relay → motor neuron → effector.",
          },
          {
            name: "Nervous vs hormonal",
            statement:
              "Nerves: fast, specific, short-lived. Hormones: slow, widespread, longer.",
          },
        ],
        workedExample: {
          problem: "Trace the reflex when touching a hot object.",
          solution:
            "Receptor (skin) → sensory neuron → spinal cord relay → motor neuron → muscle contracts (withdraw hand).",
        },
      },
      questions: [
        {
          id: "esc11-u1-nervous-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which neuron carries impulses TO the central nervous system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Motor neuron" },
              { id: "b", text: "Sensory neuron" },
              { id: "c", text: "All neurons" },
              { id: "d", text: "Relay neuron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensory neuron",
                statement: "Carries impulses from receptors to CNS.",
              },
            ],
            steps: [{ reasoning: "Sensory → CNS.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Sensory neuron",
            commonErrors: ["Motor/reversed confused."],
          },
        },
        {
          id: "esc11-u1-nervous-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how a reflex action is faster than a voluntary action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflex speed",
                statement:
                  "Reflex bypasses brain — spinal cord only, fewer synapses.",
              },
            ],
            steps: [
              {
                reasoning: "Reflex doesn't reach brain.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fewer synapses = faster.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Automatic/protective purpose.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Reflex arc stays in spinal cord — fewer synapses, no brain processing → faster protective response.",
            commonErrors: ["Brain involved view.", "No synapse count link."],
          },
        },
        {
          id: "esc11-u1-nervous-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are hormones described as 'slower but longer-lasting' than nervous impulses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hormonal vs nervous",
                statement:
                  "Blood transport = slow but widespread and persistent.",
              },
            ],
            steps: [
              {
                reasoning: "Travels in blood — diffusion, slow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reaches all body but takes time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Degraded slowly — effects persist.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Hormones travel via blood (slow) but reach many cells and persist until degraded — unlike targeted fast nerve impulses.",
            commonErrors: ["Only 'slow' given.", "No persistence link."],
          },
        },
        {
          id: "esc11-u1-nervous-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person touches a hot pan and jerks their hand away.",
          parts: [
            {
              label: "a",
              prompt: "Name each component of the reflex arc.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain why this happens before feeling pain.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflex arc",
                statement:
                  "Receptor→sensory→relay→motor→effector; bypasses brain.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Receptor in skin detects heat.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Sensory neuron → spinal cord.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Relay neuron → motor neuron → muscle.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Effector = muscle contracts.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Reflex processed in spinal cord only.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Pain signal travels to brain separately, slower.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) receptor→sensory→relay→motor→muscle (b) spinal reflex faster than brain pain signal",
            commonErrors: ["Brain in reflex path.", "No speed comparison."],
          },
        },
      ],
    },
    {
      id: "esc11-u1-hormones",
      title: "Hormonal Control and Homeostasis",
      skill: "Describe major hormones, feedback control and homeostasis.",
      lesson: {
        sections: [
          {
            heading: "Major hormones",
            body: "**Insulin** (pancreas): lowers blood glucose — glucose → glycogen. **Glucagon**: raises blood glucose — glycogen → glucose. **Adrenaline** (adrenal): 'fight or flight' — increases heart rate, blood glucose. **Thyroxine** (thyroid): controls metabolic rate — needs iodine.\n\n**Feedback**: negative feedback keeps levels stable — high glucose → insulin → lowers → stops. Positive feedback rare (blood clotting, childbirth). Hormones act on target organs via specific receptors.",
          },
          {
            heading: "Homeostasis",
            body: "**Homeostasis**: maintaining constant internal conditions — temperature, blood glucose, water balance, pH. **Temperature control**: hypothalamus detects → shivering/sweating/vasodilation/vasoconstriction. **Water balance**: kidneys + ADH — concentrate/dilute urine.\n\n**Kidney**: filters blood — reabsorbs useful substances, excretes urea/water/salts as urine. Dialysis = artificial kidney for failure. Homeostasis failure → diabetes (insulin), temperature dysregulation.",
          },
        ],
        keyFormulas: [
          {
            name: "Insulin/glucagon",
            statement:
              "Insulin lowers glucose; glucagon raises it — opposite effects on same variable.",
          },
          {
            name: "Negative feedback",
            statement:
              "Change detected → response opposes change → returns to set point.",
          },
        ],
        workedExample: {
          problem: "Blood glucose rises after a meal. Describe the response.",
          solution:
            "Beta cells detect → insulin released → liver/muscle cells take up glucose → glycogen stored → glucose returns to normal.",
        },
      },
      questions: [
        {
          id: "esc11-u1-hormones-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucagon" },
              { id: "b", text: "Thyroxine" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insulin",
                statement: "Lowers blood glucose — glucose → glycogen.",
              },
            ],
            steps: [
              {
                reasoning: "Insulin lowers glucose.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Insulin",
            commonErrors: ["Glucagon confused — opposite effect."],
          },
        },
        {
          id: "esc11-u1-hormones-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain negative feedback using blood glucose control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative feedback",
                statement: "Change → opposing response → return to set point.",
              },
            ],
            steps: [
              {
                reasoning: "Glucose rises after meal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Insulin released → glucose falls.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Returns to set point; insulin stops.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Glucose ↑ → insulin → glucose ↓ → back to normal → insulin stops — self-correcting loop.",
            commonErrors: ["Positive feedback view.", "No set-point return."],
          },
        },
        {
          id: "esc11-u1-hormones-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare insulin and glucagon — where made, effect, when released.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insulin vs glucagon",
                statement:
                  "Opposite effects on blood glucose — negative feedback pair.",
              },
            ],
            steps: [
              {
                reasoning: "Both from pancreas (islets).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Insulin lowers, glucagon raises glucose.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Released when glucose high vs low.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Both pancreatic; insulin ↓ glucose (after meals), glucagon ↑ glucose (between meals/fasting).",
            commonErrors: ["Same effect assumed.", "Different organs assumed."],
          },
        },
        {
          id: "esc11-u1-hormones-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A person runs a marathon in hot weather.",
          parts: [
            {
              label: "a",
              prompt: "Describe two body responses to maintain temperature.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain how blood glucose is maintained during exercise.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homeostasis in exercise",
                statement: "Cooling + energy supply maintained simultaneously.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Sweating → evaporative cooling.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Vasodilation → heat loss via skin.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Glucose used by muscles → drops.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Glucagon/adrenaline → glycogen → glucose.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Maintains supply for respiration.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) sweat + vasodilation (b) glucogen breakdown maintains glucose for energy",
            commonErrors: ["Only one response.", "No glucose link."],
          },
        },
      ],
    },
  ],
};
