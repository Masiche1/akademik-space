import type { Lesson } from "../../../types.ts";

export const lesson153: Lesson = {
  id: "edps5-u1-lesson-1-3",
  code: "1-3",
  title: "Classification Keys and Variation",
  goal: "I CAN use classification keys and describe variation within species.",
  standards: ["Year 5 Science: Classification"],
  vocabulary: [
    {
      term: "Classification key",
      definition: "Tool using questions to identify organisms.",
    },
    {
      term: "Variation",
      definition: "Differences between individuals of same species.",
    },
    { term: "Species", definition: "Group of organisms that can interbreed." },
    {
      term: "Binomial name",
      definition: "Two-part scientific name (genus + species).",
    },
  ],
  concepts: [
    {
      id: "edps5-u1-classification",
      title: "Using classification keys",
      skill: "Use dichotomous keys to identify organisms.",
      lesson: {
        sections: [
          {
            heading: "Classification keys",
            body: "A **dichotomous key** uses pairs of questions (1a/1b, 2a/2b) to narrow down identification. Each choice leads to the next question or the organism's name.",
          },
          {
            heading: "Hierarchy",
            body: "Organisms classified into **kingdom → phylum → class → order → family → genus → species**. Binomial names: *Homo sapiens* (humans), *Panthera leo* (lions).",
          },
        ],
        keyFormulas: [
          {
            name: "Dichotomous key",
            statement: "Paired questions identify organism",
          },
          { name: "Species", statement: "Can interbreed" },
          { name: "Binomial", statement: "Genus + species name" },
        ],
        workedExample: {
          problem:
            "Use a key: 1a has backbone → go to 2; 1b no backbone → insects. Organism has backbone. What next?",
          solution: "Go to question 2 to narrow down vertebrate group.",
        },
      },
      questions: [
        {
          id: "edps5-u1-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a dichotomous key?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A map of habitats" },
              { id: "b", text: "A microscope" },
              { id: "c", text: "A food web" },
              {
                id: "d",
                text: "A tool using paired questions to identify organisms",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classification key",
                statement: "Paired questions.",
              },
            ],
            steps: [{ reasoning: "Key defined.", marks: 1, markCode: "B" }],
            finalAnswer:
              "**(b)** A tool using paired questions to identify organisms",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps5-u1-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group that can interbreed" },
              { id: "b", text: "Any animal" },
              { id: "c", text: "A genus" },
              { id: "d", text: "A kingdom" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Species",
                statement: "Can interbreed.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: interbreed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Group that can interbreed",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps5-u1-cl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is variation? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variation",
                statement: "Differences within species.",
              },
            ],
            steps: [
              { reasoning: "Definition given.", marks: 1, markCode: "A" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Variation = differences between individuals of same species; e.g. eye colour, height in humans",
            commonErrors: ["No example."],
          },
        },
        {
          id: "edps5-u1-cl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A key asks: 1a wings? yes/no; 1b feathers? yes/no. Identify a butterfly and a bird using the key.",
          parts: [
            { label: "a", prompt: "Butterfly path", marks: 1 },
            { label: "b", prompt: "Bird path", marks: 1 },
            { label: "c", prompt: "Key logic", marks: 1 },
            { label: "d", prompt: "Full answer", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Classification key",
                statement: "Follow answers through key.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Butterfly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Bird identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Key logic explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Butterfly: wings yes, feathers no → insect; bird: wings yes, feathers yes → bird",
            commonErrors: ["Wrong key path."],
          },
        },
      ],
    },
    {
      id: "edps5-u1-evolution",
      title: "Adaptation and evolution",
      skill: "Describe natural selection and adaptation over time.",
      lesson: {
        sections: [
          {
            heading: "Natural selection",
            body: "**Variation** exists in populations. **Selection pressure** (predators, environment, food) favours individuals with helpful traits. Over generations, helpful traits become more common — **evolution**.",
          },
          {
            heading: "Examples",
            body: "Peppered moths changed colour during Industrial Revolution. Antibiotic-resistant bacteria evolved. Darwin's finches developed different beak shapes for different foods on Galápagos.",
          },
        ],
        keyFormulas: [
          { name: "Variation", statement: "Differences in population" },
          { name: "Selection", statement: "Favours helpful traits" },
          { name: "Evolution", statement: "Species change over time" },
        ],
        workedExample: {
          problem: "How did antibiotic resistance evolve?",
          solution:
            "Bacteria with resistance genes survived antibiotics and reproduced, passing resistance to offspring.",
        },
      },
      questions: [
        {
          id: "edps5-u1-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humans choosing animals" },
              { id: "b", text: "Random change" },
              { id: "c", text: "Extinction" },
              {
                id: "d",
                text: "Helpful traits becoming more common over time",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement: "Helpful traits increase.",
              },
            ],
            steps: [
              { reasoning: "Selection defined.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "**(b)** Helpful traits becoming more common over time",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps5-u1-ev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What drives natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random chance" },
              { id: "b", text: "Migration" },
              { id: "c", text: "Selection pressure from environment" },
              { id: "d", text: "Human intervention" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Selection pressure",
                statement: "Environment favours traits.",
              },
            ],
            steps: [
              { reasoning: "Identify driver.", marks: 1, markCode: "M" },
              { reasoning: "Answer: environment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Selection pressure from environment",
            commonErrors: ["Wrong driver."],
          },
        },
        {
          id: "edps5-u1-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how antibiotic resistance evolves in bacteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antibiotic resistance",
                statement: "Resistant bacteria survive and reproduce.",
              },
            ],
            steps: [
              { reasoning: "Variation described.", marks: 1, markCode: "A" },
              { reasoning: "Selection described.", marks: 1, markCode: "A" },
              { reasoning: "Result explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Some bacteria have resistance genes; antibiotics kill non-resistant ones, resistant survive and reproduce, spreading resistance",
            commonErrors: ["No selection mechanism."],
          },
        },
        {
          id: "edps5-u1-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A population of rabbits: some brown, some white. Predators see brown better on brown soil. Predict what happens over generations.",
          parts: [
            { label: "a", prompt: "Selection pressure", marks: 1 },
            { label: "b", prompt: "Survival advantage", marks: 1 },
            { label: "c", prompt: "Population change", marks: 1 },
            { label: "d", prompt: "Full prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Natural selection",
                statement: "Camouflaged rabbits survive → more offspring.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Pressure identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Advantage explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Population change.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Brown rabbits camouflaged on brown soil survive better; white ones eaten; over generations brown trait becomes dominant",
            commonErrors: ["No selection link."],
          },
        },
      ],
    },
  ],
};
