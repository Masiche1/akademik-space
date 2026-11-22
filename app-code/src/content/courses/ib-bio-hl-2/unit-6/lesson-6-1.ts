import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "biohl-u6-lesson-6-1",
  code: "6-1",
  title: "Nervous and Endocrine Coordination",
  goal: "I CAN explain the ionic basis of resting and action potentials, synaptic transmission and plasticity, and analyse endocrine feedback loops including glucose homeostasis and diabetes.",
  standards: ["Paper 1", "Paper 2", "Paper 3", "AHL E.4", "AHL F.4", "AHL F.5"],
  vocabulary: [
    {
      term: "Resting potential",
      definition:
        "The membrane potential of a neuron at rest, about $-70\\ \\text{mV}$, maintained by the $\\text{Na}^+/\\text{K}^+$ pump and selective permeability.",
    },
    {
      term: "Action potential",
      definition:
        "A rapid depolarisation of the membrane to about $+40\\ \\text{mV}$ followed by repolarisation, propagating along the axon.",
    },
    {
      term: "Refractory period",
      definition:
        "The brief period after an action potential during which the neuron cannot fire again, ensuring one-way propagation.",
    },
    {
      term: "Synapse",
      definition:
        "The junction between neurons where a neurotransmitter diffuses across the synaptic cleft to trigger the next impulse.",
    },
    {
      term: "Negative feedback",
      definition:
        "A control mechanism where the output of a system inhibits the stimulus that produced it, stabilising the variable.",
    },
    {
      term: "Homeostasis",
      definition:
        "The maintenance of a stable internal environment through feedback control of variables such as glucose, temperature and water balance.",
    },
  ],
  concepts: [
    {
      id: "biohl-u6-neuronal-signalling",
      title: "Neuronal signalling in depth",
      skill:
        "Explain the ionic mechanisms of resting and action potentials, refractory periods, synaptic transmission and synaptic plasticity.",
      lesson: {
        sections: [
          {
            heading: "Resting and action potentials",
            body: "At rest the neuron's membrane is about $-70\\ \\text{mV}$ inside relative to outside, maintained by the **$\\text{Na}^+/\\text{K}^+$ pump** (3 Na$^+$ out, 2 K$^+$ in per ATP) and by leak channels. When a stimulus depolarises the membrane past the **threshold** (about $-55\\ \\text{mV}$), voltage-gated $\\text{Na}^+$ channels open and Na$^+$ floods in — the membrane depolarises to about $+40\\ \\text{mV}$. Voltage-gated K$^+$ channels then open, K$^+$ leaves and the membrane **repolarises**. The **refractory period** prevents immediate re-firing, so impulses travel one way.",
          },
          {
            heading: "Conduction speed and synapses",
            body: "**Myelin** insulates axons, forcing the impulse to jump between **nodes of Ranvier** — **saltatory conduction** is much faster. At a synapse, depolarisation opens voltage-gated $\\text{Ca}^{2+}$ channels; Ca$^{2+}$ influx triggers exocytosis of neurotransmitter vesicles (e.g. acetylcholine or glutamate), which diffuses across the cleft and binds receptors on the postsynaptic membrane. Signals are terminated by enzymatic breakdown or reuptake. **Spatial summation** (many simultaneous inputs) and **temporal summation** (repeated inputs) determine whether the threshold is reached.",
          },
          {
            heading: "Synaptic plasticity",
            body: "Synapses can strengthen or weaken with use — **long-term potentiation (LTP)** underlies learning and memory. Repeated stimulation increases neurotransmitter release and receptor numbers. Plasticity declines with age and is impaired in neurodegenerative diseases; it is also hijacked in addiction, where drug-driven dopamine signals strengthen drug-associated pathways.",
          },
        ],
        keyFormulas: [
          {
            name: "Resting potential",
            statement:
              "$\\approx -70\\ \\text{mV}$, maintained by $\\text{Na}^+/\\text{K}^+$ pump (3 Na$^+$ out : 2 K$^+$ in)",
          },
          {
            name: "Action potential peak",
            statement:
              "Depolarises to about $+40\\ \\text{mV}$ after threshold at $\\approx -55\\ \\text{mV}$",
          },
          {
            name: "Refractory period",
            statement:
              "Absolute period prevents immediate second spike; ensures unidirectional propagation",
          },
        ],
        workedExample: {
          problem:
            "A neuron receives two weak stimuli 5 ms apart. Each alone is below threshold, but together they trigger an action potential. Explain the mechanism.",
          solution:
            "This is **temporal summation**: each sub-threshold stimulus produces a small graded depolarisation that persists briefly; the second arrives before the first decays, so their effects add, depolarising the membrane past threshold and triggering an action potential.",
        },
      },
      questions: [
        {
          id: "biohl-u6-neuronal-signalling-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What maintains the neuron's resting potential of about $-70\\ \\text{mV}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Myelin insulation alone" },
              {
                id: "b",
                text: "The $\\text{Na}^+/\\text{K}^+$ pump and selective ion permeability",
              },
              { id: "c", text: "Calcium influx at the synapse" },
              {
                id: "d",
                text: "Voltage-gated sodium channels open continuously",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resting potential",
                statement:
                  "Maintained by the $\\text{Na}^+/\\text{K}^+$ ATPase pump and the membrane's higher permeability to K$^+$ than Na$^+$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The pump moves 3 Na$^+$ out and 2 K$^+$ in per ATP, and leak channels let K$^+$ diffuse out — together they set $-70\\ \\text{mV}$.",
                working: "\\text{pump + permeability}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Voltage-gated Na$^+$ channels open only during an action potential; myelin affects conduction speed, not the resting value.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The $\\text{Na}^+/\\text{K}^+$ pump and selective ion permeability",
            commonErrors: [
              "Attributing resting potential to the action-potential channels — those open only on stimulation.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why does the refractory period ensure that action potentials travel in only one direction along an axon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The myelin sheath blocks backward flow" },
              { id: "b", text: "Neurotransmitter only travels forward" },
              {
                id: "c",
                text: "The membrane behind the impulse cannot depolarise again immediately, so the impulse can only spread to the unrefracted region ahead",
              },
              { id: "d", text: "The axon physically only allows forward flow" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refractory period",
                statement:
                  "After an action potential the membrane cannot immediately fire again; Na$^+$ channels are inactivated while K$^+$ efflux repolarises.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Immediately behind the impulse the Na$^+$ channels are inactivated — the membrane cannot depolarise again.",
                working: "\\text{Na channel inactivation}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The only region able to depolarise is ahead of the impulse, so propagation is unidirectional.",
                working: "\\text{forward only}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly links channel inactivation to one-way propagation.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** The membrane behind the impulse cannot depolarise again immediately, so the impulse can only spread to the unrefracted region ahead",
            commonErrors: [
              "Saying 'the axon is one-way' — axons conduct both ways experimentally; the refractory period is the real mechanism.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two neurons synapse in the spinal cord. A single action potential in neuron A releases only a small amount of neurotransmitter and fails to trigger neuron B. With repeated stimulation, however, B begins to fire more readily and stays responsive for longer. Which explanation best fits?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Temporal summation of sub-threshold inputs, reinforced by synaptic potentiation",
              },
              { id: "b", text: "Myelin has regenerated on neuron B" },
              { id: "c", text: "The refractory period has been eliminated" },
              {
                id: "d",
                text: "Spatial summation from a second presynaptic neuron",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Summation and plasticity",
                statement:
                  "Repeated sub-threshold inputs summate temporally; repeated use can potentiate the synapse (LTP), lowering the threshold for future firing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each action potential releases a little transmitter; repeated potentials arrive within the decay time and their EPSPs summate temporally.",
                working: "\\text{temporal summation}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The summed depolarisation eventually reaches threshold and triggers B.",
                working: "\\text{threshold reached}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The lasting increase in responsiveness indicates synaptic potentiation (LTP) — strengthened synapses need less input.",
                working: "\\text{LTP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (a) combines both correct mechanisms; spatial summation requires multiple presynaptic neurons, which are not mentioned.",
                working: "\\text{option a}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Temporal summation of sub-threshold inputs, reinforced by synaptic potentiation",
            commonErrors: [
              "Choosing spatial summation — that requires inputs from several presynaptic neurons simultaneously.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Researchers study a spinal reflex. They apply a weak electrical stimulus to a sensory neuron and record postsynaptic potentials in the motor neuron. Single stimuli of 2 mV never trigger a spike, but 5 stimuli at 20 Hz summate to reach threshold. After 10 minutes of repeated stimulation, the same 20 Hz train triggers spikes with fewer stimuli.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the summation type demonstrated and explain why single stimuli fail.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the ionic events at the synapse that convert the summed input into an action potential.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest a mechanism for the reduced stimulus requirement after 10 minutes and name the phenomenon.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the adaptive significance of synaptic plasticity and one clinical condition in which it is impaired.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temporal summation and LTP",
                statement:
                  "Rapid sub-threshold inputs summate; repeated use potentiates the synapse, lowering future threshold requirements.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Stimuli at 20 Hz arrive faster than EPSPs decay — their effects add up: temporal summation.",
                working: "\\text{temporal summation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "A single 2 mV input cannot reach threshold (about $-55\\ \\text{mV}$); only the summed train depolarises enough.",
                working: "\\text{sub-threshold alone}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Neurotransmitter binding opens Na$^+$/cation channels causing EPSPs; sufficient summed EPSPs depolarise the membrane past threshold.",
                working: "\\text{EPSP summation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Threshold opens voltage-gated Na$^+$ channels — the all-or-nothing action potential fires.",
                working: "\\text{voltage-gated Na channels}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Repeated stimulation strengthened the synapse — more receptors, more transmitter release per spike: long-term potentiation (LTP).",
                working: "\\text{LTP}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Each EPSP is now larger or more numerous, so fewer stimuli are needed to reach threshold.",
                working: "\\text{larger EPSPs}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Plasticity underlies learning and memory — it lets experience reshape circuits, a key adaptive advantage.",
                working: "\\text{learning/memory}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Clinical: Alzheimer's disease and other dementias involve loss of synaptic plasticity; spinal cord injury disrupts the circuits entirely.",
                working: "\\text{Alzheimer's}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) temporal summation — individual 2 mV EPSPs are sub-threshold but the 20 Hz train adds them before decay; (b) transmitter-gated EPSPs depolarise the membrane until threshold opens voltage-gated Na$^+$ channels, firing an all-or-nothing spike; (c) long-term potentiation — repeated use increases transmitter release and receptor numbers, so fewer stimuli suffice; (d) plasticity enables learning and memory; its loss in Alzheimer's and circuit damage in spinal injury show its clinical importance",
            commonErrors: [
              "Calling the summed input 'an action potential' before threshold — EPSPs are graded; only the spike past threshold is all-or-nothing.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A neuron's resting potential is $-70\\ \\text{mV}$ and the threshold for firing an action potential is $-55\\ \\text{mV}$. By how much must the membrane depolarise to reach threshold?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "mV" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Threshold potential",
                statement:
                  "The membrane potential (about $-55\\ \\text{mV}$) at which voltage-gated Na$^+$ channels open and an action potential fires.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The required depolarisation is threshold minus resting potential.",
                working: "-55 - (-70)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The membrane must depolarise by $15\\ \\text{mV}$.",
                working: "= 15\\ \\text{mV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15\\ \\text{mV}$",
            commonErrors: [
              "Subtracting in the wrong order — depolarisation is threshold MINUS resting ($-55 - (-70)$), giving a positive $15\\ \\text{mV}$.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "During an action potential the membrane potential changes from $-70\\ \\text{mV}$ (resting) to $+40\\ \\text{mV}$ (peak). Calculate the total depolarisation.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 110, unit: "mV" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depolarisation",
                statement:
                  "The change in membrane potential from resting value toward positive values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depolarisation is the difference between peak and resting potential.",
                working: "\\text{peak} - \\text{resting}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compute $40 - (-70)$, remembering to subtract a negative.",
                working: "40 - (-70) = 40 + 70",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The total depolarisation is $110\\ \\text{mV}$.",
                working: "= 110\\ \\text{mV}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$110\\ \\text{mV}$",
            commonErrors: [
              "Writing $40 - 70 = -30$ — failing to subtract the negative resting potential.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The $\\text{Na}^+/\\text{K}^+$ pump exports 3 Na$^+$ ions for every ATP hydrolysed. How many ATP molecules are needed to export 150 Na$^+$ ions?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "ATP" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "$\\text{Na}^+/\\text{K}^+$ pump stoichiometry",
                statement: "3 Na$^+$ out : 2 K$^+$ in per ATP hydrolysed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each ATP exports 3 Na$^+$, so divide the total by 3.",
                working: "150 \\div 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The pump needs 50 ATP to export 150 Na$^+$.",
                working: "= 50\\ \\text{ATP}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$50$ ATP",
            commonErrors: [
              "Dividing by 2 (the K$^+$ count) instead of 3 — the question asks about Na$^+$ export.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At a chemical synapse, what directly triggers the release of neurotransmitter from the presynaptic terminal?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The $\\text{Na}^+/\\text{K}^+$ pump reversing direction",
              },
              {
                id: "b",
                text: "Passive diffusion of transmitter through the membrane",
              },
              {
                id: "c",
                text: "Sodium ions entering through voltage-gated channels",
              },
              {
                id: "d",
                text: "Calcium ion influx through voltage-gated channels, triggering vesicle exocytosis",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Calcium-triggered exocytosis",
                statement:
                  "Depolarisation opens voltage-gated Ca$^{2+}$ channels; Ca$^{2+}$ influx causes synaptic vesicles to fuse and release neurotransmitter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The arriving action potential depolarises the presynaptic membrane.",
                working: "\\text{depolarisation}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Voltage-gated Ca$^{2+}$ channels open; Ca$^{2+}$ influx triggers vesicle fusion and transmitter release by exocytosis.",
                working: "\\text{Ca}^{2+} \\to \\text{exocytosis}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly identifies the Ca$^{2+}$ trigger.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Calcium ion influx through voltage-gated channels, triggering vesicle exocytosis",
            commonErrors: [
              "Attributing release to Na$^+$ influx — Na$^+$ carries the impulse along the axon; Ca$^{2+}$ triggers release at the terminal.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Each excitatory postsynaptic potential (EPSP) from a single synapse depolarises a motor neuron's membrane by $12\\ \\text{mV}$. The neuron must depolarise by $25\\ \\text{mV}$ from rest to reach threshold. A single stimulus gives $12\\ \\text{mV}$ — subthreshold. What is the minimum number of stimuli arriving in rapid succession needed to trigger an action potential?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "stimuli" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temporal summation",
                statement:
                  "Sub-threshold EPSPs arriving before decay add together; enough summed input reaches threshold.",
              },
            ],
            steps: [
              {
                reasoning:
                  "EPSPs summate: $n$ stimuli give $12n\\ \\text{mV}$, which must reach or exceed $25\\ \\text{mV}$.",
                working: "12n \\geq 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two stimuli give $24\\ \\text{mV}$ — just below threshold; three give $36\\ \\text{mV}$ — above threshold.",
                working: "12 \\times 2 = 24 < 25;\\ 12 \\times 3 = 36 \\geq 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The minimum is 3 stimuli.",
                working: "n = 3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$ stimuli",
            commonErrors: [
              "Answering 2 — $24\\ \\text{mV}$ is below the $25\\ \\text{mV}$ threshold; rounding up is essential.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe the sequence of events at a chemical synapse from the arrival of an action potential at the presynaptic terminal to the restoration of the resting state.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Synaptic transmission",
                statement:
                  "Action potential → Ca$^{2+}$ influx → vesicle exocytosis → transmitter binds receptors → EPSP/IPSP → transmitter removed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The action potential depolarises the presynaptic terminal, opening voltage-gated Ca$^{2+}$ channels.",
                working: "\\text{depolarisation} \\to \\text{Ca}^{2+}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ca$^{2+}$ influx triggers synaptic vesicles to fuse with the membrane and release neurotransmitter into the cleft by exocytosis.",
                working: "\\text{exocytosis}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Transmitter diffuses across the cleft and binds specific receptors on the postsynaptic membrane, opening ion channels (EPSP or IPSP).",
                working: "\\text{receptor binding}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The signal is terminated by enzymatic breakdown of the transmitter or reuptake into the presynaptic terminal.",
                working: "\\text{breakdown/reuptake}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Ion gradients and the $\\text{Na}^+/\\text{K}^+$ pump restore resting conditions in both neurons.",
                working: "\\text{restoration}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Action potential depolarises the presynaptic terminal → voltage-gated Ca$^{2+}$ channels open → Ca$^{2+}$ influx triggers vesicle exocytosis of neurotransmitter → transmitter diffuses across the cleft and binds postsynaptic receptors, producing EPSPs or IPSPs → transmitter is removed by enzymatic breakdown or reuptake → ion gradients are restored by the $\\text{Na}^+/\\text{K}^+$ pump, returning both neurons to resting state.",
            commonErrors: [
              "Omitting the Ca$^{2+}$ step — it is the essential link between depolarisation and transmitter release.",
            ],
            examinerNote: "M1 M1 M1 A1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Drugs of abuse such as cocaine and opioids increase dopamine signalling in reward pathways. Synaptic connections in these pathways strengthen with repeated drug use. Which explanation best links this to addiction?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Drug-driven dopamine signals trigger long-term potentiation, strengthening drug-associated synapses so cues alone can later trigger craving",
              },
              {
                id: "b",
                text: "The drugs permanently destroy dopamine receptors",
              },
              {
                id: "c",
                text: "The drugs block the refractory period entirely",
              },
              {
                id: "d",
                text: "The drugs increase the resting potential above threshold permanently",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maladaptive plasticity",
                statement:
                  "Repeated drug-driven dopamine release strengthens reward-pathway synapses (LTP), embedding drug-associated cues in memory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drugs elevate dopamine in reward circuits far beyond normal levels.",
                working: "\\text{dopamine surge}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeated supranormal stimulation potentiates the synapses — long-term potentiation strengthens the drug-associated pathways.",
                working: "\\text{LTP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This maladaptive plasticity makes drug cues alone capable of triggering craving — a key feature of addiction.",
                working: "\\text{cue-triggered craving}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly links dopamine, potentiation and cue-driven craving.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Drug-driven dopamine signals trigger long-term potentiation, strengthening drug-associated synapses so cues alone can later trigger craving",
            commonErrors: [
              "Describing addiction as receptor destruction — the mechanism is synaptic strengthening via plasticity.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A neuron's refractory period lasts $4\\ \\text{ms}$ and sets the minimum time between action potentials. What is the maximum firing frequency?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 250, unit: "Hz" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refractory period",
                statement:
                  "The minimum interval between spikes limits maximum firing frequency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maximum frequency is the reciprocal of the refractory period in seconds.",
                working: "f = \\frac{1}{t}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$4\\ \\text{ms} = 0.004\\ \\text{s}$, so $f = 1/0.004 = 250\\ \\text{Hz}$.",
                working: "\\frac{1}{0.004} = 250\\ \\text{Hz}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$250\\ \\text{Hz}$",
            commonErrors: [
              "Forgetting to convert ms to seconds — $1/4 = 0.25$ is wrong; the period is $0.004$ s.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Each EPSP from a single synapse depolarises the postsynaptic membrane by $8\\ \\text{mV}$. Threshold requires a total depolarisation of $30\\ \\text{mV}$. What is the minimum number of simultaneous inputs needed to trigger an action potential?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "inputs" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spatial summation",
                statement:
                  "Simultaneous EPSPs from multiple synapses add together; enough summed input reaches threshold.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Simultaneous inputs summate: $n$ inputs give $8n\\ \\text{mV}$, which must reach or exceed $30\\ \\text{mV}$.",
                working: "8n \\geq 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Three inputs give $24\\ \\text{mV}$ — below threshold; four give $32\\ \\text{mV}$ — above threshold.",
                working: "8 \\times 3 = 24 < 30;\\ 8 \\times 4 = 32 \\geq 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The minimum is 4 simultaneous inputs — spatial summation.",
                working: "n = 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$ inputs",
            commonErrors: [
              "Answering 3 — $24\\ \\text{mV}$ is below the $30\\ \\text{mV}$ threshold; round up to the next whole input.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Neuroscientists use two drugs on isolated neurons: tetrodotoxin (TTX), which blocks voltage-gated Na$^+$ channels, and tetraethylammonium (TEA), which blocks voltage-gated K$^+$ channels. Neurons are stimulated and membrane potential recorded.",
          parts: [
            {
              label: "a",
              prompt:
                "Predict the effect of TTX on the action potential and justify your prediction.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Predict the effect of TEA on repolarisation and justify your prediction.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why an action potential is described as 'all-or-nothing'.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the use of channel-blocking drugs as a method for investigating neuronal function, giving one strength and one limitation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Voltage-gated channels",
                statement:
                  "Na$^+$ channels mediate depolarisation; K$^+$ channels mediate repolarisation — both are drug targets.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "TTX blocks voltage-gated Na$^+$ channels, so depolarisation cannot occur — no action potential can be triggered.",
                working: "\\text{TTX blocks Na}^+",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The membrane may still show graded EPSPs but never reaches a spike; the impulse is abolished.",
                working: "\\text{no spike}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "TEA blocks K$^+$ channels, so after Na$^+$ influx depolarisation persists — repolarisation is delayed or absent.",
                working: "\\text{TEA blocks K}^+",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The membrane stays depolarised near the peak; the action potential broadens dramatically or fails to repolarise.",
                working: "\\text{prolonged depolarisation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Once threshold is reached, a fixed number of Na$^+$ channels open — the spike always peaks near $+40\\ \\text{mV}$ regardless of stimulus strength.",
                working: "\\text{fixed peak}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Below threshold nothing happens (no spike); above threshold the full spike fires — there is no graded intermediate response.",
                working: "\\text{no graded spike}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Strength: specific blockers let researchers isolate the role of each channel type cleanly, establishing causal links.",
                working: "\\text{causal specificity}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: blockade is artificial — it removes normal physiology and may have off-target effects; results must be confirmed in vivo.",
                working: "\\text{artificial + off-target}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) TTX abolishes the action potential — Na$^+$ channels are required for depolarisation; (b) TEA prolongs depolarisation — K$^+$ efflux is required for repolarisation; (c) all-or-nothing because above threshold a fixed complement of channels fires to a fixed peak; (d) strength: specific causal manipulation of channels; limitation: unphysiological blockade with possible off-target effects",
            commonErrors: [
              "Predicting TEA prevents the spike entirely — it actually blocks repolarisation, prolonging depolarisation.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), B1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The $\\text{Na}^+/\\text{K}^+$ pump moves 3 Na$^+$ out and 2 K$^+$ in per ATP — a net export of one positive charge. If a neuron hydrolyses $4000$ ATP per second via this pump alone, how many net positive charges are exported per second?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4000, unit: "charges per second" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electrogenic pump",
                statement:
                  "The $\\text{Na}^+/\\text{K}^+$ pump exports net one positive charge per cycle (3 out vs 2 in), making it electrogenic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each ATP cycle exports a net of 1 positive charge (3 Na$^+$ out minus 2 K$^+$ in).",
                working: "3 - 2 = 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With 4000 ATP per second, net export is $4000 \\times 1 = 4000$ charges per second.",
                working: "4000 \\times 1 = 4000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4000$ net positive charges per second",
            commonErrors: [
              "Multiplying by 3 or 5 — only the NET charge (1 per ATP) matters for the electrogenic effect.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-neuronal-signalling-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Multiple sclerosis is an autoimmune disease in which the immune system attacks the myelin sheaths of motor neurons. Explain how this affects nerve impulse conduction and the symptoms patients experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Saltatory conduction and demyelination",
                statement:
                  "Myelin enables saltatory conduction between nodes of Ranvier; its loss forces slow continuous propagation and can block impulses entirely.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Normally myelin insulates the axon so the impulse jumps rapidly between nodes of Ranvier — saltatory conduction.",
                working: "\\text{saltatory conduction}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without myelin the impulse must travel continuously along the exposed axon membrane — much slower.",
                working: "\\text{continuous conduction}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Where demyelination is severe, the impulse may fail to propagate at all — conduction block.",
                working: "\\text{conduction block}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This produces weakness, numbness, vision problems and coordination deficits — symptoms that often relapse and remit as lesions form and partially repair.",
                working: "\\text{relapsing symptoms}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Myelin enables saltatory conduction; its autoimmune destruction in MS forces slow continuous conduction or complete conduction block, causing weakness, sensory loss, visual disturbances and coordination problems — typically relapsing as lesions heal and recur.",
            commonErrors: [
              "Saying the axon itself is destroyed — in MS the axon often survives initially; it is the myelin insulation that is attacked.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "biohl-u6-endocrine-control",
      title: "Endocrine control and feedback",
      skill:
        "Analyse negative and positive feedback in endocrine axes, explain glucose homeostasis and diabetes, and evaluate endocrine disruptors.",
      lesson: {
        sections: [
          {
            heading: "Negative feedback axes",
            body: "Endocrine control relies on **negative feedback**: the hormone's effect reduces the stimulus that triggered it. The **hypothalamus-pituitary-thyroid axis** works this way — TRH releases TSH, TSH releases thyroxine, and high thyroxine inhibits TRH and TSH. Similarly, high blood glucose triggers insulin release, which lowers glucose and thereby reduces further insulin secretion.",
          },
          {
            heading: "Glucose homeostasis and diabetes",
            body: "After a meal, blood glucose rises; pancreatic $\\beta$-cells secrete **insulin**, which increases cellular glucose uptake and glycogen storage in liver and muscle. Between meals, low glucose triggers $\\alpha$-cells to release **glucagon**, stimulating glycogen breakdown and gluconeogenesis. **Type 1 diabetes** is autoimmune destruction of $\\beta$-cells — insulin-dependent. **Type 2 diabetes** involves insulin resistance — cells respond poorly despite normal or high insulin; linked to obesity and sedentary lifestyle.",
          },
          {
            heading: "Positive feedback, osmoregulation and disruptors",
            body: "**Positive feedback** amplifies its stimulus until completion: oxytocin in childbirth (contractions → more oxytocin) and clotting cascade are examples. **ADH** controls water balance via negative feedback on osmoreceptors. **Endocrine disruptors** — chemicals mimicking or blocking hormones, such as BPA or some pesticides — can alter development and reproduction at low doses, raising concerns about environmental health.",
          },
        ],
        keyFormulas: [
          {
            name: "Negative feedback",
            statement:
              "Hormone effect reduces its own stimulus — stabilises the variable (glucose, thyroxine, ADH)",
          },
          {
            name: "Insulin action",
            statement:
              "High glucose $\\rightarrow$ insulin $\\rightarrow$ uptake + glycogen storage $\\rightarrow$ glucose falls",
          },
          {
            name: "Glucagon action",
            statement:
              "Low glucose $\\rightarrow$ glucagon $\\rightarrow$ glycogen breakdown + gluconeogenesis $\\rightarrow$ glucose rises",
          },
        ],
        workedExample: {
          problem:
            "Blood glucose rises after a carbohydrate meal. Trace the hormonal response that returns it to normal.",
          solution:
            "Glucose rises → pancreatic $\\beta$-cells detect it and secrete insulin → insulin binds receptors on muscle, liver and fat cells → glucose uptake increases and excess is stored as glycogen → blood glucose falls → insulin secretion decreases (negative feedback restores the set point).",
        },
      },
      questions: [
        {
          id: "biohl-u6-endocrine-control-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly describes negative feedback in the thyroid axis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thyroxine has no feedback effect" },
              {
                id: "b",
                text: "High thyroxine inhibits TRH and TSH release, stabilising thyroxine levels",
              },
              { id: "c", text: "High thyroxine stimulates more TSH release" },
              {
                id: "d",
                text: "TSH directly stimulates thyroxine release from the thyroid",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative feedback",
                statement:
                  "The hormone's effect reduces the stimulus that produced it, stabilising the controlled variable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the thyroid axis, elevated thyroxine feeds back to inhibit TRH (hypothalamus) and TSH (pituitary).",
                working: "\\text{thyroxine inhibits TRH/TSH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This holds thyroxine near its set point — negative feedback, not positive.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** High thyroxine inhibits TRH and TSH release, stabilising thyroxine levels",
            commonErrors: [
              "Reversing the feedback — high thyroxine SUPPRESSES the axis, it does not stimulate it.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A patient has high blood glucose but normal or elevated insulin levels, and their cells respond poorly to insulin. Which condition and mechanism best fit?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Type 2 diabetes — insulin resistance where cells fail to respond despite insulin being present",
              },
              { id: "b", text: "Addison's disease — cortisol deficiency" },
              {
                id: "c",
                text: "Type 1 diabetes — autoimmune destruction of $\\beta$-cells causing insulin deficiency",
              },
              {
                id: "d",
                text: "Hypoglycaemia — excess insulin lowering glucose",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Type 2 diabetes",
                statement:
                  "Insulin resistance — target cells respond poorly to insulin despite adequate or elevated levels; associated with obesity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Insulin levels are normal/elevated, ruling out insulin deficiency (Type 1).",
                working: "\\text{insulin present}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High glucose with poor cellular response is the definition of insulin resistance — Type 2 diabetes.",
                working: "\\text{resistance}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) matches both the labs and the mechanism.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Type 2 diabetes — insulin resistance where cells fail to respond despite insulin being present",
            commonErrors: [
              "Choosing Type 1 — that involves LOW insulin from $\\beta$-cell destruction, not high glucose with high insulin.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "During labour, uterine contractions stimulate oxytocin release, which strengthens contractions, which stimulate more oxytocin — until delivery. What type of feedback is this and why is it appropriate here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No feedback — hormones act independently" },
              {
                id: "b",
                text: "Positive feedback — it amplifies the stimulus to complete a one-off process (childbirth)",
              },
              {
                id: "c",
                text: "Negative feedback — it stabilises oxytocin levels",
              },
              {
                id: "d",
                text: "Negative feedback that eventually stops the contractions",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive feedback",
                statement:
                  "The output amplifies the original stimulus until a threshold or completion ends the loop — used for processes that must run to completion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each contraction increases oxytocin, which increases contractions — a self-amplifying loop.",
                working: "\\text{self-amplifying}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Childbirth must proceed to completion, so positive feedback is appropriate; it ends at delivery.",
                working: "\\text{run to completion}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative feedback would stabilise contractions at a level that never completes labour — the wrong design here.",
                working: "\\text{why not negative}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Option (b) correctly identifies positive feedback and its purpose.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Positive feedback — it amplifies the stimulus to complete a one-off process (childbirth)",
            commonErrors: [
              "Labelling all hormonal control as negative feedback — positive feedback exists for processes needing completion.",
            ],
            examinerNote: "M1 M1 R1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A public health study compares two populations: one with rising type 2 diabetes rates linked to obesity and inactivity, and another where a chemical contaminant in water is suspected of disrupting thyroid hormone signalling during development.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the hormonal mechanism that fails in type 2 diabetes.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the contaminant could act as an endocrine disruptor.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Distinguish between type 1 and type 2 diabetes in terms of cause and treatment.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate which of the two problems is more amenable to public-health intervention and justify your choice.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insulin resistance",
                statement:
                  "Type 2 diabetes: cells respond poorly to insulin despite its presence; treatment targets lifestyle and insulin sensitivity.",
              },
              {
                kind: "definition",
                name: "Endocrine disruptor",
                statement:
                  "An exogenous chemical that mimics, blocks or alters hormone action, potentially at very low doses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "In type 2 diabetes, insulin is produced but target cells' receptors respond poorly — insulin resistance.",
                working: "\\text{insulin resistance}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Glucose therefore stays high despite insulin; the negative feedback loop cannot restore the set point.",
                working: "\\text{feedback fails}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The contaminant may mimic thyroid hormone or block its receptor, sending false signals during development.",
                working: "\\text{mimic/block}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Because hormones act at tiny concentrations, low doses of disruptor can have outsized developmental effects.",
                working: "\\text{low-dose effect}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Type 1: autoimmune $\\beta$-cell destruction → absolute insulin deficiency → requires insulin injections. Type 2: insulin resistance → often managed by diet, exercise, metformin, sometimes insulin.",
                working: "\\text{T1 vs T2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The distinction is cause (autoimmune vs lifestyle/metabolic) and typical treatment (insulin-dependent vs oral agents/lifestyle).",
                working: "\\text{cause + treatment}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Type 2 diabetes is more amenable to intervention — lifestyle programmes (diet, exercise) demonstrably reduce incidence and are cost-effective at population scale.",
                working: "\\text{lifestyle intervention}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Endocrine disruption is harder: causality is difficult to prove, effects are developmental and delayed, and solutions require regulation of chemicals.",
                working: "\\text{precautionary regulation}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) type 2 diabetes is insulin resistance — cells respond poorly despite insulin being present, so glucose stays high; (b) the contaminant can mimic or block thyroid hormone at its receptor, disrupting development at low doses; (c) type 1 is autoimmune $\\beta$-cell loss needing insulin; type 2 is resistance managed by lifestyle and oral agents; (d) type 2 is more amenable — lifestyle interventions are proven and scalable, while endocrine disruptors are harder to regulate and effects are delayed",
            commonErrors: [
              "Saying type 2 patients 'don't make insulin' — they often make normal or high insulin; the problem is cellular response.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which cells of the pancreas secrete insulin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beta cells of the pancreatic islets" },
              { id: "b", text: "Acinar cells of the pancreas" },
              { id: "c", text: "D cells of the hypothalamus" },
              { id: "d", text: "Alpha cells of the pancreatic islets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pancreatic islet cells",
                statement:
                  "Beta cells secrete insulin; alpha cells secrete glucagon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Insulin is secreted by the beta cells within the islets of Langerhans.",
                working: "\\beta\\text{-cells} \\to \\text{insulin}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alpha cells secrete glucagon; acinar cells secrete digestive enzymes.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Beta cells of the pancreatic islets",
            commonErrors: [
              "Confusing alpha and beta cells — alpha = glucagon (raises glucose), beta = insulin (lowers glucose).",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A patient's fasting blood glucose is $5.0\\ \\text{mmol/L}$. Thirty minutes after a carbohydrate meal it rises to $7.5\\ \\text{mmol/L}$. By how much did blood glucose increase?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "mmol/L" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blood glucose set point",
                statement:
                  "Normal fasting glucose is about $5\\ \\text{mmol/L}$; meals raise it transiently before feedback restores it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The increase is the post-meal value minus the fasting value.",
                working: "7.5 - 5.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Blood glucose increased by $2.5\\ \\text{mmol/L}$.",
                working: "= 2.5\\ \\text{mmol/L}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.5\\ \\text{mmol/L}$",
            commonErrors: [
              "Giving the post-meal level instead of the change — the question asks for the increase.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Blood glucose falls below the set point between meals. Which hormonal response restores it, and by what mechanism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline release, increasing heart rate" },
              { id: "b", text: "Thyroxine release, increasing metabolic rate" },
              {
                id: "c",
                text: "Glucagon release, stimulating glycogen breakdown and gluconeogenesis in the liver",
              },
              {
                id: "d",
                text: "Insulin release, increasing glucose uptake by cells",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glucagon action",
                statement:
                  "Low glucose → alpha-cell glucagon → hepatic glycogenolysis + gluconeogenesis → glucose rises.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low blood glucose is detected by pancreatic alpha cells.",
                working: "\\alpha\\text{-cells}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Glucagon acts on the liver to break down glycogen and synthesise glucose — raising blood glucose back to the set point.",
                working: "\\text{glycogenolysis + gluconeogenesis}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Insulin would lower glucose further — the wrong direction; glucagon is the correct response.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Glucagon release, stimulating glycogen breakdown and gluconeogenesis in the liver",
            commonErrors: [
              "Choosing insulin — insulin lowers glucose; glucagon raises it.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Antidiuretic hormone (ADH) release is triggered when plasma osmolarity exceeds $295\\ \\text{mOsm/kg}$. A dehydrated patient's osmolarity rises from $280\\ \\text{mOsm/kg}$ to $310\\ \\text{mOsm/kg}$. By how much does the patient's osmolarity exceed the ADH threshold?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "mOsm/kg" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmoreceptor threshold",
                statement:
                  "ADH secretion begins when plasma osmolarity exceeds about $295\\ \\text{mOsm/kg}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The excess is the patient's osmolarity minus the threshold.",
                working: "310 - 295",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The osmolarity exceeds the threshold by $15\\ \\text{mOsm/kg}$, so ADH release is triggered.",
                working: "= 15\\ \\text{mOsm/kg}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Answer $15\\ \\text{mOsm/kg}$ (accept $310-295=15$).",
                working: "15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15\\ \\text{mOsm/kg}$",
            commonErrors: [
              "Subtracting 280 (the starting value) instead of the 295 threshold.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain how the body returns blood glucose to its set point after a high-carbohydrate meal, naming the hormones involved and describing the feedback.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glucose homeostasis",
                statement:
                  "High glucose → insulin → uptake and storage → glucose falls → insulin secretion falls (negative feedback).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Digestion of carbohydrate raises blood glucose above the set point.",
                working: "\\text{glucose rises}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pancreatic beta cells detect the rise and secrete insulin.",
                working: "\\beta\\text{-cells} \\to \\text{insulin}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Insulin binds receptors on muscle, liver and fat cells, increasing glucose uptake and promoting glycogen and fat storage.",
                working: "\\text{uptake + storage}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Blood glucose falls back toward the set point.",
                working: "\\text{glucose falls}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Lower glucose reduces insulin secretion — negative feedback restores the balance; falling glucose also permits glucagon release if needed.",
                working: "\\text{negative feedback}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Carbohydrate digestion raises blood glucose → beta cells secrete insulin → insulin increases cellular glucose uptake and glycogen/fat storage in liver, muscle and fat → blood glucose falls → reduced glucose lowers insulin secretion (negative feedback), restoring the set point; if glucose undershoots, alpha-cell glucagon raises it again.",
            commonErrors: [
              "Forgetting the feedback element — the falling glucose itself switches insulin secretion off.",
            ],
            examinerNote: "M1 M1 M1 A1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An environmental chemical is found to bind to thyroid hormone receptors and mimic thyroxine's effects at concentrations 1000 times lower than thyroxine itself. Which statement best evaluates the concern about this chemical as an endocrine disruptor?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is harmless because it only acts at very low concentrations",
              },
              {
                id: "b",
                text: "Endocrine disruptors only affect adults, not development",
              },
              {
                id: "c",
                text: "Because hormones act at trace concentrations, a mimic at low doses can send false hormonal signals and disrupt development — a legitimate low-dose concern",
              },
              {
                id: "d",
                text: "It is safe because receptor binding always produces the correct response",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endocrine disruptor",
                statement:
                  "An exogenous chemical that mimics or blocks hormone action; potent at very low doses because hormones act at trace levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural hormones are active at picomolar-nanomolar concentrations — receptors are extremely sensitive.",
                working: "\\text{trace-level signalling}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A mimicking chemical at low dose can therefore trigger inappropriate hormonal responses, especially during developmental windows.",
                working: "\\text{false signal}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low-dose effects can be non-monotonic and hard to predict — this is why disruptors are a regulatory concern.",
                working: "\\text{low-dose risk}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) captures the potency paradox and developmental risk.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Because hormones act at trace concentrations, a mimic at low doses can send false hormonal signals and disrupt development — a legitimate low-dose concern",
            commonErrors: [
              "Assuming 'the dose makes the poison' linearly — endocrine effects can occur at doses far below toxic thresholds.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "The human liver stores about $100\\ \\text{g}$ of glycogen, which yields about $4\\ \\text{kcal}$ per gram when fully oxidised. Approximately how many kilocalories of energy are stored as liver glycogen?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "kcal" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Glycogen energy store",
                statement:
                  "Energy stored = mass of glycogen $\\times$ energy density ($\\approx 4\\ \\text{kcal/g}$).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the glycogen mass by the energy yield per gram.",
                working: "100 \\times 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The liver glycogen store holds about $400\\ \\text{kcal}$.",
                working: "= 400\\ \\text{kcal}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Answer: $400\\ \\text{kcal}$ — roughly one-fifth of daily energy needs, showing why fasting must mobilise other stores.",
                working: "400",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$400\\ \\text{kcal}$",
            commonErrors: [
              "Using 9 kcal/g (fat's value) — glycogen yields about 4 kcal/g.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Antidiuretic hormone (ADH) release begins when plasma osmolarity exceeds $295\\ \\text{mOsm/kg}$. A patient's osmolarity is $322\\ \\text{mOsm/kg}$. By how much does it exceed the ADH threshold?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 27, unit: "mOsm/kg" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmoreceptor threshold",
                statement:
                  "ADH secretion begins when plasma osmolarity exceeds about $295\\ \\text{mOsm/kg}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Excess osmolarity = measured value minus threshold: $322 - 295$.",
                working: "322 - 295",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The osmolarity exceeds the threshold by $27\\ \\text{mOsm/kg}$, triggering ADH release.",
                working: "= 27\\ \\text{mOsm/kg}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$27\\ \\text{mOsm/kg}$",
            commonErrors: [
              "Subtracting from a wrong reference — compare against the 295 threshold, not zero.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Researchers investigate feedback control of blood glucose using an intravenous glucose infusion in healthy volunteers. Blood glucose is clamped (held constant) at $8.0\\ \\text{mmol/L}$ for 2 hours while insulin and C-peptide are measured every 30 minutes. Insulin rises steeply in the first 30 minutes, then plateaus; C-peptide (a marker of endogenous insulin secretion) follows the same pattern.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why insulin rises when glucose is clamped at $8.0\\ \\text{mmol/L}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The clamp holds glucose constant, so insulin plateaus rather than falling. What does this suggest about the feedback signal in this experiment?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Why is C-peptide measured alongside insulin?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the glucose-clamp technique as a method for studying insulin secretion, giving one strength and one limitation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feedback in glucose control",
                statement:
                  "Insulin secretion is driven by glucose concentration; the clamp removes the usual feedback by fixing glucose.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$8.0\\ \\text{mmol/L}$ is above the fasting set point, so beta cells detect hyperglycaemia and secrete insulin.",
                working: "\\text{hyperglycaemia} \\to \\text{insulin}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Insulin promotes glucose uptake and storage — the appropriate response to the glucose load.",
                working: "\\text{uptake/storage}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Normally falling glucose would switch insulin off (negative feedback); the clamp prevents glucose from falling, so the 'off' signal never arrives.",
                working: "\\text{feedback removed}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Insulin therefore plateaus at a level set by the clamped glucose concentration — secretion reflects the fixed stimulus.",
                working: "\\text{plateau}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "C-peptide is co-secreted with insulin in equal amounts but is not cleared by the liver like insulin, so it more accurately reflects beta-cell output.",
                working: "\\text{C-peptide marker}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "It distinguishes endogenous insulin secretion from any exogenous insulin that might be present.",
                working: "\\text{endogenous vs exogenous}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Strength: holding glucose constant isolates the insulin response to a known stimulus — precise, quantitative measurement of beta-cell function.",
                working: "\\text{controlled stimulus}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Limitation: invasive, expensive and unphysiological — real feedback is removed, so results may not reflect everyday glucose control.",
                working: "\\text{invasive + unphysiological}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $8.0\\ \\text{mmol/L}$ exceeds the set point so beta cells secrete insulin to promote uptake/storage; (b) the clamp removes the falling-glucose 'off' signal, so insulin plateaus at the level matching the fixed stimulus; (c) C-peptide is co-secreted, not liver-cleared, and reveals true endogenous secretion; (d) strength: precise controlled measurement; limitation: invasive, costly, and unphysiological because feedback is removed",
            commonErrors: [
              "Saying insulin should keep rising — it plateaus because beta-cell secretion reaches a steady rate for the fixed glucose level.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), B1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A patient's blood glucose set point is $5.0\\ \\text{mmol/L}$. Two measurements are $4.6\\ \\text{mmol/L}$ and $5.4\\ \\text{mmol/L}$. What is the maximum deviation from the set point?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4, unit: "mmol/L" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Set point deviation",
                statement:
                  "The absolute difference between a measured value and the set point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compute both deviations: $|4.6 - 5.0| = 0.4$ and $|5.4 - 5.0| = 0.4$ — equal here.",
                working: "0.4\\ \\text{ and } 0.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The maximum deviation is $0.4\\ \\text{mmol/L}$.",
                working: "= 0.4\\ \\text{mmol/L}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.4\\ \\text{mmol/L}$",
            commonErrors: [
              "Subtracting the two measurements from each other ($0.8$) instead of from the set point.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why can endocrine-disrupting chemicals affect health at doses far below those that cause obvious toxicity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always lethal at any dose" },
              {
                id: "b",
                text: "Because they accumulate in fatty tissue over decades",
              },
              { id: "c", text: "They only affect the nervous system" },
              {
                id: "d",
                text: "Hormone receptors are exquisitely sensitive — hormones act at trace concentrations, so trace amounts of a mimic or blocker can alter signalling, especially during development",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hormone potency",
                statement:
                  "Endogenous hormones act at extremely low concentrations; exogenous mimics can therefore be biologically active at low doses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hormone receptors evolved to detect minute quantities — picomolar concentrations can trigger responses.",
                working: "\\text{receptor sensitivity}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A disruptor mimicking or blocking a hormone can hijack this sensitive system at doses far below toxic levels.",
                working: "\\text{mimic/block}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Developing tissues are especially vulnerable because hormones organise development.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Hormone receptors are exquisitely sensitive — hormones act at trace concentrations, so trace amounts of a mimic or blocker can alter signalling, especially during development",
            commonErrors: [
              "Applying a simple dose-response assumption — endocrine effects violate 'the dose makes the poison' at low doses.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-endocrine-control-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which statement about the hypothalamic-pituitary-adrenal (HPA) axis is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The HPA axis uses positive feedback to maintain cortisol permanently",
              },
              {
                id: "b",
                text: "Cortisol stimulates CRH and ACTH release, amplifying the stress response",
              },
              { id: "c", text: "ACTH is secreted by the adrenal cortex" },
              {
                id: "d",
                text: "Cortisol inhibits CRH and ACTH release — negative feedback that limits the stress response",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HPA axis negative feedback",
                statement:
                  "CRH → ACTH → cortisol; cortisol feeds back to inhibit hypothalamus and pituitary, stabilising cortisol.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cortisol (the end product) inhibits CRH from the hypothalamus and ACTH from the pituitary — negative feedback.",
                working: "\\text{cortisol inhibits CRH/ACTH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ACTH comes from the pituitary, not the adrenal cortex (which makes cortisol); the axis uses negative, not positive, feedback.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Cortisol inhibits CRH and ACTH release — negative feedback that limits the stress response",
            commonErrors: [
              "Reversing the feedback direction — cortisol SUPPRESSES the axis once levels are adequate.",
            ],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
