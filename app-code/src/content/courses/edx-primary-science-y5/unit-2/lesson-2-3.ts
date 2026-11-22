import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "edps5-u2-lesson-2-3",
  code: "2-3",
  title: "Breathing and the Nervous System",
  goal: "I CAN describe breathing and how the nervous system controls responses.",
  standards: ["Year 5 Science: Body systems"],
  vocabulary: [
    { term: "Inhalation", definition: "Breathing in — diaphragm contracts." },
    { term: "Alveoli", definition: "Tiny air sacs where gas exchange occurs." },
    { term: "Neuron", definition: "Nerve cell carrying electrical signals." },
    { term: "Reflex", definition: "Automatic fast response to stimulus." },
  ],
  concepts: [
    {
      id: "edps5-u2-breathing",
      title: "The breathing system",
      skill: "Describe inhalation, exhalation and gas exchange.",
      lesson: {
        sections: [
          {
            heading: "Breathing mechanics",
            body: "**Inhalation**: diaphragm contracts and flattens → chest expands → air rushes in. **Exhalation**: diaphragm relaxes and domes → chest contracts → air pushed out. Rib muscles assist.",
          },
          {
            heading: "Gas exchange",
            body: "In **alveoli** (tiny air sacs), oxygen diffuses into blood and carbon dioxide diffuses out. Alveoli have huge surface area + thin walls + rich blood supply for efficient exchange.",
          },
        ],
        keyFormulas: [
          { name: "Inhalation", statement: "Diaphragm contracts → air in" },
          { name: "Alveoli", statement: "Gas exchange site" },
          { name: "Diffusion", statement: "Gas moves high→low concentration" },
        ],
        workedExample: {
          problem: "Why are alveoli so small and numerous?",
          solution: "Huge surface area for maximum gas exchange.",
        },
      },
      questions: [
        {
          id: "edps5-u2-br-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens during inhalation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diaphragm contracts and air enters" },
              { id: "b", text: "Diaphragm relaxes" },
              { id: "c", text: "Chest shrinks" },
              { id: "d", text: "Air is pushed out" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inhalation",
                statement: "Diaphragm contracts.",
              },
            ],
            steps: [
              { reasoning: "Inhalation = contract.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Diaphragm contracts and air enters",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "edps5-u2-br-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does gas exchange occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alveoli" },
              { id: "b", text: "Bronchi" },
              { id: "c", text: "Trachea" },
              { id: "d", text: "Larynx" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alveoli",
                statement: "Gas exchange site.",
              },
            ],
            steps: [
              { reasoning: "Identify site.", marks: 1, markCode: "M" },
              { reasoning: "Answer: alveoli.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Alveoli",
            commonErrors: ["Wrong structure."],
          },
        },
        {
          id: "edps5-u2-br-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how oxygen gets from air to blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas exchange",
                statement: "Diffusion across alveoli walls.",
              },
            ],
            steps: [
              { reasoning: "Air reaches alveoli.", marks: 1, markCode: "A" },
              { reasoning: "Diffusion explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oxygen diffuses from alveoli (high concentration) into blood capillaries (low concentration) across thin walls",
            commonErrors: ["No diffusion."],
          },
        },
        {
          id: "edps5-u2-br-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why exercise increases breathing rate.",
          parts: [
            { label: "a", prompt: "Exercise demand", marks: 1 },
            { label: "b", prompt: "Oxygen need", marks: 1 },
            { label: "c", prompt: "Breathing response", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exercise",
                statement: "More O₂ needed → faster breathing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Demand stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "O₂ need explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Response linked.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Exercise needs more oxygen for respiration; breathing rate increases to supply it and remove CO₂ faster",
            commonErrors: ["No respiration link."],
          },
        },
      ],
    },
    {
      id: "edps5-u2-nervous",
      title: "The nervous system",
      skill: "Describe neurons, reflexes and sense organs.",
      lesson: {
        sections: [
          {
            heading: "Nervous system",
            body: "**Brain** (processes), **spinal cord** (relay), **nerves** (carry signals). **Neurons** transmit electrical impulses. **Synapses** connect neurons via chemicals. **Reflexes** are automatic fast responses (touch hot → withdraw hand) protecting us.",
          },
          {
            heading: "Senses",
            body: "**Eyes** (light), **ears** (sound/balance), **nose** (smell), **tongue** (taste), **skin** (touch/temperature/pain). Receptors detect stimuli → neurons carry to brain → response sent back.",
          },
        ],
        keyFormulas: [
          { name: "Neuron", statement: "Nerve cell" },
          { name: "Synapse", statement: "Neuron connection" },
          { name: "Reflex", statement: "Automatic response" },
        ],
        workedExample: {
          problem:
            "Why do you pull your hand from a hot pan before feeling pain?",
          solution:
            "Reflex arc bypasses brain — spinal cord sends instant response.",
        },
      },
      questions: [
        {
          id: "edps5-u2-ne-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a neuron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A nerve cell" },
              { id: "b", text: "A blood cell" },
              { id: "c", text: "A muscle cell" },
              { id: "d", text: "A bone cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neuron", statement: "Nerve cell." },
            ],
            steps: [
              { reasoning: "Neuron = nerve cell.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A nerve cell",
            commonErrors: ["Wrong cell."],
          },
        },
        {
          id: "edps5-u2-ne-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a reflex?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A thought" },
              { id: "b", text: "A sense organ" },
              { id: "c", text: "An automatic fast response to stimulus" },
              { id: "d", text: "A muscle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflex",
                statement: "Automatic response.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: automatic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An automatic fast response to stimulus",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps5-u2-ne-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the path of a nervous impulse from skin to brain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nervous impulse",
                statement: "Receptor→neuron→spinal cord→brain.",
              },
            ],
            steps: [
              { reasoning: "Receptor identified.", marks: 1, markCode: "A" },
              { reasoning: "Path described.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stimulus detected by receptor → sensory neuron → spinal cord → brain → motor neuron → response",
            commonErrors: ["Incomplete path."],
          },
        },
        {
          id: "edps5-u2-ne-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why reflexes are faster than voluntary responses.",
          parts: [
            { label: "a", prompt: "Reflex path", marks: 1 },
            { label: "b", prompt: "Voluntary path", marks: 1 },
            { label: "c", prompt: "Speed difference", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflex arc",
                statement: "Bypasses brain = faster.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Reflex path.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Voluntary path.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Speed explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Reflexes go receptor→spinal cord→muscle (short path); voluntary go receptor→brain→spinal cord→muscle (longer)",
            commonErrors: ["No path comparison."],
          },
        },
      ],
    },
  ],
};
