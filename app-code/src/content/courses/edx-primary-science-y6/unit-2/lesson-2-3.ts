import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "edps6-u2-lesson-2-3",
  code: "2-3",
  title: "Nervous, Excretory and Reproductive Systems",
  goal: "I CAN describe the nervous, excretory and reproductive systems.",
  standards: ["Year 6 Science: Body systems"],
  vocabulary: [
    { term: "Neuron", definition: "Nerve cell transmitting impulses." },
    { term: "Synapse", definition: "Gap between neurons." },
    { term: "Kidney", definition: "Filters blood, produces urine." },
    { term: "Puberty", definition: "Stage of sexual development." },
  ],
  concepts: [
    {
      id: "edps6-u2-nervous",
      title: "The nervous system",
      skill: "Describe neurons, synapses and reflexes.",
      lesson: {
        sections: [
          {
            heading: "Nervous system",
            body: "**Brain** (processes), **spinal cord** (relay), **nerves** (carry signals). **Sensory neurons** carry to CNS; **motor neurons** carry away; **relay neurons** connect in spinal cord. **Synapses** transmit via chemicals.",
          },
          {
            heading: "Reflexes",
            body: "**Reflex arc**: receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector. Automatic, fast, protective (touch hot → withdraw). **Voluntary** responses go through brain — slower but controlled.",
          },
        ],
        keyFormulas: [
          { name: "Neuron", statement: "Nerve cell" },
          { name: "Synapse", statement: "Chemical gap" },
          { name: "Reflex arc", statement: "Receptor→cord→muscle" },
        ],
        workedExample: {
          problem: "Why do reflexes bypass the brain?",
          solution:
            "Spinal cord processes directly — faster response for protection.",
        },
      },
      questions: [
        {
          id: "edps6-u2-ne-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a neuron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A blood cell" },
              { id: "b", text: "A bone cell" },
              { id: "c", text: "A muscle cell" },
              { id: "d", text: "A nerve cell" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neuron", statement: "Nerve cell." },
            ],
            steps: [{ reasoning: "Neuron defined.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A nerve cell",
            commonErrors: ["Wrong cell."],
          },
        },
        {
          id: "edps6-u2-ne-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens at a synapse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food digests" },
              { id: "b", text: "Blood flows" },
              { id: "c", text: "Chemical signal transmits between neurons" },
              { id: "d", text: "Muscle contracts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Synapse",
                statement: "Chemical transmission.",
              },
            ],
            steps: [
              { reasoning: "Recall function.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: chemical signal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Chemical signal transmits between neurons",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "edps6-u2-ne-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the reflex arc path.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflex arc",
                statement: "Receptor→sensory→relay→motor→effector.",
              },
            ],
            steps: [
              { reasoning: "Path described.", marks: 1, markCode: "A" },
              { reasoning: "Order correct.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector (muscle)",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps6-u2-ne-q4",
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
              "Reflexes go receptor→spinal cord→muscle (short); voluntary go receptor→brain→spinal cord→muscle (longer)",
            commonErrors: ["No path comparison."],
          },
        },
      ],
    },
    {
      id: "edps6-u2-excretory",
      title: "Excretory and reproductive systems",
      skill: "Describe excretion and human reproduction.",
      lesson: {
        sections: [
          {
            heading: "Excretion",
            body: "**Kidneys** filter blood → urine (water, urea, salts). **Liver** breaks down toxins → bile. **Lungs** remove CO₂. **Skin** removes water/salts via sweat. Kidneys regulate water balance and blood pressure.",
          },
          {
            heading: "Reproduction",
            body: "**Puberty** = sexual development stage (~10-14 girls, ~12-16 boys). **Male**: testes produce sperm; **female**: ovaries produce eggs. Fertilisation → zygote → embryo → fetus. **Menstrual cycle** ~28 days prepares uterus monthly.",
          },
        ],
        keyFormulas: [
          { name: "Kidneys", statement: "Filter blood → urine" },
          { name: "Puberty", statement: "Sexual development" },
          { name: "Fertilisation", statement: "Egg+sperm→zygote" },
        ],
        workedExample: {
          problem: "What do kidneys do?",
          solution:
            "Filter blood, remove urea/water/salts as urine, regulate blood pressure.",
        },
      },
      questions: [
        {
          id: "edps6-u2-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do kidneys produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood" },
              { id: "b", text: "Sweat" },
              { id: "c", text: "Bile" },
              { id: "d", text: "Urine" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kidneys",
                statement: "Produce urine.",
              },
            ],
            steps: [{ reasoning: "Kidneys → urine.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Urine",
            commonErrors: ["Wrong product."],
          },
        },
        {
          id: "edps6-u2-ex-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is puberty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Losing teeth" },
              { id: "b", text: "Stage of sexual development" },
              { id: "c", text: "Growing taller" },
              { id: "d", text: "Starting school" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Puberty",
                statement: "Sexual development.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stage of sexual development",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps6-u2-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the kidneys maintain water balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kidneys",
                statement: "Filter blood; adjust urine concentration.",
              },
            ],
            steps: [
              { reasoning: "Filtering described.", marks: 1, markCode: "A" },
              { reasoning: "Balance explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Kidneys filter blood and adjust how much water/salts are removed in urine to maintain balance",
            commonErrors: ["Incomplete."],
          },
        },
        {
          id: "edps6-u2-ex-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what happens during fertilisation and early development.",
          parts: [
            { label: "a", prompt: "Fertilisation", marks: 1 },
            { label: "b", prompt: "Zygote", marks: 1 },
            { label: "c", prompt: "Embryo/fetus", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reproduction",
                statement: "Egg+sperm→zygote→embryo→fetus.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fertilisation.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Zygote.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Development.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Sperm fertilises egg → zygote → divides → embryo → fetus develops in uterus",
            commonErrors: ["Incomplete development."],
          },
        },
      ],
    },
  ],
};
