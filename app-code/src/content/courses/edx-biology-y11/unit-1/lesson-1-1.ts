import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ebi11-u1-lesson-1-1",
  code: "1-1",
  title: "The Nervous System and the Eye",
  goal: "I CAN describe how the nervous system produces a rapid response through a reflex arc, and explain how the eye detects light, focuses and responds to light intensity.",
  standards: ["4BI1 2.86", "4BI1 2.87", "4BI1 2.88", "4BI1 2.89", "4BI1 2.90", "4BI1 2.91", "4BI1 2.92"],
  vocabulary: [
    { term: "Stimulus", definition: "A change in the environment (such as heat, light or pressure) that is detected by a receptor." },
    { term: "Receptor", definition: "A cell or organ that detects a stimulus and produces an electrical impulse." },
    { term: "Effector", definition: "A muscle or gland that carries out a response when it receives an impulse." },
    { term: "Reflex arc", definition: "The pathway of neurones that carries impulses from a receptor to an effector in a rapid, automatic response." },
    { term: "Synapse", definition: "A gap between two neurones, across which a chemical neurotransmitter diffuses to pass the signal on." },
    { term: "Accommodation", definition: "The change in shape of the lens that allows the eye to focus on near or distant objects." },
    { term: "Retina", definition: "The layer at the back of the eye that contains the light-sensitive receptor cells (rods and cones)." },
  ],
  concepts: [
    {
      id: "ebi11-u1-nervous-system-reflex-arc",
      title: "The nervous system and the reflex arc",
      skill: "Describe the structure of the nervous system, the pathway of a reflex arc and how a synapse works, and calculate with impulse speeds.",
      lesson: {
        sections: [
          {
            heading: "Organising the nervous system",
            body: "The **central nervous system (CNS)** is the brain and the spinal cord. It is linked to the sense organs and the rest of the body by **nerves**, which are bundles of nerve cells called **neurones**.\n\nA **receptor** detects a **stimulus** and produces **electrical impulses**. A **sensory neurone** carries the impulses into the CNS. A **relay neurone** inside the CNS passes them on, and a **motor neurone** carries impulses out of the CNS to an **effector** (a muscle or a gland), which produces the response. A muscle responds by contracting; a gland responds by secreting.\n\nNervous communication is **fast**, acts on a very **specific target** and the effect is **short-lived**. Hormonal communication uses chemicals carried in the blood, so it is slower, can act on many organs at once and lasts longer.",
          },
          {
            heading: "The reflex arc and the synapse",
            body: "A **reflex** is a rapid, automatic response that does not involve conscious thought. It protects the body, for example by pulling a finger away from a hot object. The pathway is the **reflex arc**:\n\n$$\\text{stimulus} \\rightarrow \\text{receptor} \\rightarrow \\text{sensory neurone} \\rightarrow \\text{relay neurone} \\rightarrow \\text{motor neurone} \\rightarrow \\text{effector} \\rightarrow \\text{response}$$\n\nThe relay neurone is in the spinal cord, so the brain is not needed to produce the response. Because the pathway is short and has only a few synapses, the response is very fast. The brain is still told about the stimulus afterwards by other neurones, which is why you feel the pain.\n\nBetween two neurones there is a tiny gap called a **synapse**. An impulse cannot cross it as an electrical signal. Instead:\n\n- the impulse arriving at the end of the first neurone causes **neurotransmitter** molecules to be released from vesicles\n- the neurotransmitter **diffuses** across the gap\n- it binds to **receptor molecules** on the membrane of the next neurone, which starts a new impulse\n\nSynapses ensure that impulses travel in one direction only, because neurotransmitter is released from one side of the gap only.",
          },
        ],
        keyFormulas: [
          { name: "Reflex arc", statement: "stimulus $\\rightarrow$ receptor $\\rightarrow$ sensory neurone $\\rightarrow$ relay neurone $\\rightarrow$ motor neurone $\\rightarrow$ effector $\\rightarrow$ response" },
          { name: "Time for an impulse", statement: "$\\text{time} = \\frac{\\text{distance}}{\\text{speed}}$" },
          { name: "Synapse", statement: "Neurotransmitter is released, diffuses across the gap and binds to receptors on the next neurone" },
        ],
        workedExample: {
          problem: "A nerve impulse travels along a sensory neurone of length $1.5\\text{ m}$ at $50\\text{ m/s}$. Calculate the time taken.",
          solution: "$\\text{time} = \\frac{\\text{distance}}{\\text{speed}} = \\frac{1.5}{50} = 0.03\\text{ s}$ (30 milliseconds).",
        },
      },
      questions: [
        {
          id: "ebi11-u1-nervous-system-reflex-arc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of neurone carries impulses from the central nervous system to an effector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Receptor neurone" },
              { id: "b", text: "Relay neurone" },
              { id: "c", text: "Motor neurone" },
              { id: "d", text: "Sensory neurone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motor neurone", statement: "A motor neurone carries impulses out of the CNS to an effector (muscle or gland)." },
            ],
            steps: [
              { reasoning: "Sensory neurones carry impulses into the CNS, relay neurones connect neurones inside the CNS, and motor neurones carry impulses to effectors.", working: "\\text{motor neurone}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Motor neurone",
            commonErrors: ["Choosing the sensory neurone because it is the neurone that 'moves' the impulse. It carries impulses from receptors into the CNS.", "Choosing 'receptor neurone', which is not a type of neurone. Receptors are cells that detect stimuli."],
            examinerNote: "B1 for motor neurone.",
          },
        },
        {
          id: "ebi11-u1-nervous-system-reflex-arc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A nerve impulse travels along a sensory neurone that is $1.2\\text{ m}$ long. The impulse travels at $60\\text{ m/s}$. Calculate the time taken for the impulse to travel along this neurone. Give your answer in seconds.",
          response: { type: "numeric", parts: [{ label: "Time taken", answer: 0.02, tolerance: 0.0005, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed equation", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$, so $\\text{time} = \\frac{\\text{distance}}{\\text{speed}}$" },
            ],
            steps: [
              { reasoning: "Rearrange the speed equation for time and substitute the values.", working: "t = \\frac{d}{v} = \\frac{1.2}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "t = 0.02\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.02\\text{ s}$ (20 ms)",
            commonErrors: ["Multiplying speed by distance ($60 \\times 1.2 = 72$) instead of dividing.", "Dividing speed by distance, giving $50$."],
            examinerNote: "M1 for $1.2 \\div 60$. A1 for 0.02 with a correct unit. Allow 20 ms only if the unit is given.",
          },
        },
        {
          id: "ebi11-u1-nervous-system-reflex-arc-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a withdrawal reflex, the sensory neurone and the motor neurone are each $0.9\\text{ m}$ long. Impulses travel along both neurones at $90\\text{ m/s}$. The relay neurone is so short that the time taken along it can be ignored. There are two synapses in the pathway and each synapse delays the impulse by $1\\text{ ms}$. Calculate the total time from the receptor to the effector. Give your answer in milliseconds (ms).",
          response: { type: "numeric", parts: [{ label: "Total time", answer: 22, tolerance: 0.5, unit: "ms" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time from speed", statement: "$\\text{time} = \\frac{\\text{distance}}{\\text{speed}}$" },
              { kind: "principle", name: "Synaptic delay", statement: "Diffusion of neurotransmitter across a synapse takes time, so each synapse adds a delay to the pathway." },
            ],
            steps: [
              { reasoning: "Find the conduction time along both long neurones (total length $0.9 + 0.9 = 1.8\\text{ m}$).", working: "t = \\frac{1.8}{90} = 0.02\\text{ s} = 20\\text{ ms}", marks: 1, markCode: "M" },
              { reasoning: "Add the delay at the two synapses.", working: "2 \\times 1 = 2\\text{ ms}", marks: 1, markCode: "M" },
              { reasoning: "Add the two times.", working: "20 + 2 = 22\\text{ ms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$22\\text{ ms}$",
            commonErrors: ["Forgetting the synaptic delay and giving 20 ms.", "Counting only one synapse and giving 21 ms.", "Adding 0.02 s and 2 ms without converting the units, giving 2.02."],
            examinerNote: "M1 for $1.8 \\div 90$ or each $0.9 \\div 90$. M1 for $2 \\times 1$ ms (oe). A1 for 22 ms. Allow 0.022 s. Allow ecf from one error in the unit conversion for M marks only.",
          },
        },
        {
          id: "ebi11-u1-nervous-system-reflex-arc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student tests her reaction time. A partner holds a ruler vertically and drops it without warning. The student catches it, and the distance the ruler fell before she caught it is measured. The test is repeated five times.\n\n| Trial | 1 | 2 | 3 | 4 | 5 |\n| --- | --- | --- | --- | --- | --- |\n| Distance fallen (cm) | 18 | 21 | 15 | 19 | 42 |",
          parts: [
            { label: "a", prompt: "Name the type of neurone that is found entirely inside the central nervous system in a reflex arc.", marks: 1 },
            { label: "b", prompt: "Describe how an impulse is passed across a synapse from one neurone to the next.", marks: 3 },
            { label: "c", prompt: "Identify the anomalous result. Calculate the mean distance fallen, ignoring the anomalous result. Give your answer in cm.", marks: 3 },
            { label: "d", prompt: "Catching a ruler is a voluntary response. Explain why a reflex response, such as pulling a hand away from a flame, is faster than this response.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
              { kind: "principle", name: "Synaptic transmission", statement: "A chemical neurotransmitter diffuses across the synapse and triggers an impulse in the next neurone." },
              { kind: "definition", name: "Reflex", statement: "A rapid automatic response that does not involve conscious decision by the brain." },
            ],
            steps: [
              { part: "a", reasoning: "The relay neurone connects the sensory and motor neurones inside the spinal cord.", working: "\\text{relay neurone}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The impulse arriving causes neurotransmitter to be released from the end of the first neurone.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The neurotransmitter diffuses across the gap (synapse).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It binds to receptors on the next neurone, which stimulates a new impulse.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "42 cm is far from the other values, so it is anomalous.", working: "42\\text{ cm}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add the four remaining values and divide by four.", working: "\\frac{18 + 21 + 15 + 19}{4} = \\frac{73}{4}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "18.25\\text{ cm}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A reflex arc passes through the spinal cord (relay neurone) and does not need the brain to make a decision.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The pathway is shorter with fewer neurones and synapses, so less time is spent crossing synapses.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Relay neurone (b) neurotransmitter released, diffuses across the gap, binds to receptors on the next neurone (c) 42 cm is anomalous; mean $= 18.25\\text{ cm}$ (d) no decision by the brain, shorter pathway with fewer synapses",
            commonErrors: ["Including 42 in the mean, giving 23.", "Saying the impulse 'jumps' across the synapse as an electrical spark.", "Saying that reflexes do not involve neurones or the spinal cord."],
            examinerNote: "In (a) reject 'sensory' and 'motor'. In (b) allow 'transmitter' or 'chemical' for neurotransmitter; reject 'hormone'. In (c) allow 18.3 or 18.25. Allow ecf for A1 if the wrong anomaly is excluded but the mean is correct for the values used. In (d) allow 'bypasses the brain' oe.",
          },
        },
      ],
    },
    {
      id: "ebi11-u1-the-eye",
      title: "The eye",
      skill: "Identify the structures of the eye, explain accommodation and the pupil reflex, and interpret data about the pupil.",
      lesson: {
        sections: [
          {
            heading: "Structure of the eye",
            body: "The eye is a sense organ that detects light.\n\n- **Cornea**: the transparent front surface. It refracts (bends) light, doing most of the focusing.\n- **Iris**: a ring of muscle that controls how much light enters.\n- **Pupil**: the hole in the centre of the iris through which light passes.\n- **Lens**: a transparent, flexible structure that makes fine adjustments to focus light on the retina.\n- **Ciliary muscle and suspensory ligaments**: they hold the lens in place and change its shape.\n- **Retina**: contains the light receptor cells. **Cones** detect bright light and colour; **rods** detect dim light but not colour. The **fovea** is the region with the most cones, giving the sharpest vision.\n- **Optic nerve**: carries impulses from the retina to the brain.\n- **Sclera**: the tough white outer layer that protects the eye.",
          },
          {
            heading: "Accommodation and the pupil reflex",
            body: "To focus on a **near** object, the light rays must be bent more:\n\n- the **ciliary muscles contract**\n- the **suspensory ligaments slacken** (loosen)\n- the lens becomes **thicker and more curved**, so it refracts light more\n\nTo focus on a **distant** object the reverse happens: the ciliary muscles **relax**, the suspensory ligaments become **taut** (pulled tight), and the lens is pulled **thin and flatter**.\n\nThe pupil reflex protects the retina and lets the eye work in different light levels. In **bright light** the **circular muscles** of the iris contract and the **radial muscles** relax, so the pupil gets **smaller** (constricts) and less light enters. In **dim light** the radial muscles contract and the circular muscles relax, so the pupil gets **larger** (dilates) and more light enters. This is a reflex: the receptors are in the retina and the effectors are the iris muscles.",
          },
        ],
        keyFormulas: [
          { name: "Focusing on a near object", statement: "Ciliary muscles contract, suspensory ligaments slacken, lens thicker and more curved" },
          { name: "Focusing on a distant object", statement: "Ciliary muscles relax, suspensory ligaments taut, lens thinner and flatter" },
          { name: "Bright light", statement: "Circular muscles contract, radial muscles relax, pupil constricts" },
          { name: "Dim light", statement: "Radial muscles contract, circular muscles relax, pupil dilates" },
        ],
        workedExample: {
          problem: "A pupil has a diameter of $3\\text{ mm}$ in bright light and $6\\text{ mm}$ in dim light. How many times greater is the area of the pupil in dim light?",
          solution: "Area of a circle $= \\pi r^2$. Bright: $r = 1.5$, area $= \\pi \\times 2.25$. Dim: $r = 3$, area $= \\pi \\times 9$. Ratio $= 9 \\div 2.25 = 4$. The area is 4 times greater (doubling the diameter quadruples the area).",
        },
      },
      questions: [
        {
          id: "ebi11-u1-the-eye-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the eye controls the amount of light that enters?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Retina" },
              { id: "b", text: "Iris" },
              { id: "c", text: "Optic nerve" },
              { id: "d", text: "Cornea" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Iris", statement: "The iris is a ring of muscle that changes the size of the pupil and so controls how much light enters the eye." },
            ],
            steps: [
              { reasoning: "The iris contains circular and radial muscles that alter the pupil size. The cornea refracts light, the retina detects it and the optic nerve carries impulses to the brain.", working: "\\text{iris}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Iris",
            commonErrors: ["Choosing the pupil, which is only the hole. The iris is the structure that controls its size.", "Choosing the cornea because it is at the front."],
            examinerNote: "B1 for iris.",
          },
        },
        {
          id: "ebi11-u1-the-eye-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A person looks up from a book at a distant mountain. Describe the changes in the ciliary muscles, the suspensory ligaments and the lens when the eye focuses on the distant object.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Accommodation", statement: "The lens changes shape so that light from objects at different distances is focused on the retina." },
            ],
            steps: [
              { reasoning: "The ciliary muscles relax.", marks: 1, markCode: "B" },
              { reasoning: "The suspensory ligaments become taut (pulled tight).", marks: 1, markCode: "B" },
              { reasoning: "The lens is pulled thinner (flatter), so it refracts light less.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ciliary muscles relax; suspensory ligaments tighten; lens becomes thin and flat.",
            commonErrors: ["Giving the changes for a near object (muscles contract, lens fat).", "Saying the lens 'moves backwards' rather than changing shape."],
            examinerNote: "Allow 'pulled tight' or 'tension increases' for taut. Allow 'less curved' for flatter. Reject 'lens relaxes' without a description of the shape.",
          },
        },
        {
          id: "ebi11-u1-the-eye-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student walks from a dim room into bright sunlight. Explain what happens to the pupil and why this response is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pupil reflex", statement: "Antagonistic circular and radial muscles in the iris change pupil size to regulate the light reaching the retina." },
            ],
            steps: [
              { reasoning: "Receptors in the retina detect the bright light and impulses pass to the iris (a reflex).", marks: 1, markCode: "B" },
              { reasoning: "The circular muscles of the iris contract and the radial muscles relax.", marks: 1, markCode: "B" },
              { reasoning: "The pupil becomes smaller (constricts), so less light enters the eye.", marks: 1, markCode: "B" },
              { reasoning: "This protects the retina from damage by too much light.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Circular muscles contract and radial muscles relax so the pupil constricts, reducing the light entering and protecting the retina from damage.",
            commonErrors: ["Reversing the muscles (radial contract in bright light).", "Saying the iris moves or that the lens gets smaller.", "Saying that the pupil constricts so that the person can see better in the dark."],
            examinerNote: "Allow 'sphincter' for circular. Reject 'iris muscles relax' on its own. Allow 'prevents damage to the retina / receptors' oe for the R mark.",
          },
        },
        {
          id: "ebi11-u1-the-eye-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student moves from a brightly lit corridor into a dark room. Her pupil diameter changes from $2\\text{ mm}$ in the corridor to $8\\text{ mm}$ after her eyes have adjusted to the dark.",
          parts: [
            { label: "a", prompt: "Name the layer at the back of the eye that contains the light receptors.", marks: 1 },
            { label: "b", prompt: "Describe the changes in the muscles of the iris that cause the pupil to change size in the dark room.", marks: 2 },
            { label: "c", prompt: "The area of a circle is $\\pi r^2$. Calculate how many times greater the area of her pupil is in the dark room than in the corridor.", marks: 2 },
            { label: "d", prompt: "Explain the advantage of this change in the dark room.", marks: 2 },
            { label: "e", prompt: "The student later reads a book on a bright beach. Name the type of receptor cell that is mostly active and give one feature of this type of cell.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A = \\pi r^2$, so area is proportional to the square of the diameter." },
              { kind: "principle", name: "Pupil reflex", statement: "In dim light the radial muscles contract and the circular muscles relax, so the pupil dilates." },
            ],
            steps: [
              { part: "a", reasoning: "The retina contains the rods and cones.", working: "\\text{retina}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The radial muscles contract.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The circular muscles relax, so the pupil dilates (gets larger).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Area is proportional to diameter squared, so compare the squares of the diameters (or radii $1\\text{ mm}$ and $4\\text{ mm}$).", working: "\\frac{\\pi \\times 4^2}{\\pi \\times 1^2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\frac{16\\pi}{\\pi} = 16", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A larger pupil lets more light enter the eye.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "More light reaches the retina, so the rod cells are stimulated and the student can see in dim light.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Cone cells are active in bright light.", working: "\\text{cones}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A valid feature: they detect colour; they are concentrated in the fovea; they give sharp (detailed) vision.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Retina (b) radial muscles contract, circular muscles relax (c) 16 times (d) more light enters so rods can be stimulated (e) cones; detect colour",
            commonErrors: ["Answering 4 in (c) by comparing diameters rather than areas.", "Reversing the muscle actions in (b).", "Giving rods for bright light in (e)."],
            examinerNote: "In (c) allow M1 for $\\pi \\times 4^2$ and $\\pi \\times 1^2$ computed separately ($50.3$ and $3.14$). Reject 4 for A1. In (e) the second mark is independent of the first only if the cell type is cones, allow ecf for a correct feature of rods if rods were named.",
          },
        },
      ],
    },
  ],
};
