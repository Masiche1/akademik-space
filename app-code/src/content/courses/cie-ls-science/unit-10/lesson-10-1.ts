import type { Lesson } from "../../../types.ts";

export const lesson1012: Lesson = {
  id: "cils-u10-lesson-10-1",
  code: "10-1",
  title: "Stage 7 Checkpoint — Living Things",
  goal: "I CAN explain cells, plants and human body systems at Stage 7 checkpoint standard.",
  standards: ["0893 Checkpoint Stage 7: biology"],
  stage: 7,
  vocabulary: [
    { term: "Cell", definition: "Basic unit of living organisms." },
    {
      term: "Photosynthesis",
      definition: "Process plants use to make food from light, water and CO₂.",
    },
    { term: "Organ system", definition: "Group of organs working together." },
    {
      term: "Digestive system",
      definition: "Organs breaking down food for absorption.",
    },
    {
      term: "Respiration",
      definition: "Release of energy from food using oxygen.",
    },
  ],
  concepts: [
    {
      id: "cils-u10-s7-biology",
      title: "Stage 7 biology checkpoint",
      skill: "Apply biology concepts at Stage 7 standard.",
      lesson: {
        sections: [
          {
            heading: "Core biology",
            body: "Cells are the basic unit of life; plants photosynthesise; the human body has organ systems (digestive, circulatory, respiratory) working together.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis",
            statement:
              "$CO_2 + H_2O \\xrightarrow{light} \\text{glucose} + O_2$",
          },
          {
            name: "Respiration",
            statement: "$glucose + O_2 \\to CO_2 + H_2O + energy$",
          },
        ],
        workedExample: {
          problem:
            "Where does photosynthesis mainly occur and what does it produce?",
          solution:
            "In chloroplasts (leaf cells); produces glucose and oxygen.",
        },
      },
      questions: [
        {
          id: "cils-u10-s7-b-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the basic unit of all living organisms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell" },
              { id: "b", text: "Organ" },
              { id: "c", text: "Tissue" },
              { id: "d", text: "Organism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell",
                statement: "Basic unit of life.",
              },
            ],
            steps: [
              {
                reasoning: "Cell theory: all organisms made of cells.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cell",
          },
        },
        {
          id: "cils-u10-s7-b-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the gas plants take in and the gas they release during photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Photosynthesis",
                statement: "Takes in CO₂, releases O₂.",
              },
            ],
            steps: [
              {
                reasoning: "Takes in carbon dioxide.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Releases oxygen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO₂ in, O₂ out",
          },
        },
        {
          id: "cils-u10-s7-b-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the role of the digestive system in one sentence, then name two organs involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digestion",
                statement: "Breaks food into absorbable nutrients.",
              },
            ],
            steps: [
              {
                reasoning: "Breaks food into smaller absorbable nutrients.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two organs: stomach and small intestine (also mouth, liver, large intestine).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Clear, accurate description.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Breaks food into absorbable nutrients; stomach + small intestine.",
          },
        },
        {
          id: "cils-u10-s7-b-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the circulatory and respiratory systems work together during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Systems",
                statement: "O₂ transport links breathing to cells.",
              },
            ],
            steps: [
              {
                reasoning: "Lungs take in more oxygen during exercise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Blood transports O₂ to muscles via circulatory system.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Muscles respire faster → more energy + CO₂ removed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CO₂ carried back to lungs for exhaling.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Lungs absorb O₂ → blood carries it to muscles → faster respiration → CO₂ returned and exhaled.",
          },
        },
      ],
    },
    {
      id: "cils-u10-s7-human",
      title: "Stage 7 human body checkpoint",
      skill: "Describe organs and systems of the human body.",
      lesson: {
        sections: [
          {
            heading: "Body systems",
            body: "Skeleton supports and protects; muscles move; heart pumps blood; brain controls; kidneys filter. Systems cooperate — e.g. muscles need oxygen from blood.",
          },
        ],
        keyFormulas: [
          {
            name: "Levels of organisation",
            statement: "Cell → tissue → organ → system → organism",
          },
        ],
        workedExample: {
          problem: "Put these in order: organ, cell, system, tissue.",
          solution: "Cell → tissue → organ → system.",
        },
      },
      questions: [
        {
          id: "cils-u10-s7-h-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ pumps blood around the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heart" },
              { id: "b", text: "Lung" },
              { id: "c", text: "Liver" },
              { id: "d", text: "Kidney" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heart",
                statement: "Muscular pump of circulatory system.",
              },
            ],
            steps: [
              { reasoning: "Heart pumps blood.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heart",
          },
        },
        {
          id: "cils-u10-s7-h-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two functions of the skeleton.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Skeleton",
                statement:
                  "Support, protection, movement, blood cell production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two: support body, protect organs, aid movement, produce blood cells.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Two correct functions named.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Support + protect (or movement/blood cells)",
          },
        },
        {
          id: "cils-u10-s7-h-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the function of the kidneys?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kidneys",
                statement: "Filter blood, remove waste as urine.",
              },
            ],
            steps: [
              {
                reasoning: "Filter blood to remove waste products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Produce urine containing the waste.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Maintain water/salt balance.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Filter blood, remove waste as urine, balance water/salts.",
          },
        },
        {
          id: "cils-u10-s7-h-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how muscles and bones work together for movement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Movement",
                statement: "Muscles contract → pull on bones → joints move.",
              },
            ],
            steps: [
              {
                reasoning: "Muscles attach to bones by tendons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Muscle contracts (shortens) → pulls bone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Joints act as pivots — bones move around them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pairs of muscles work antagonistically (one contracts, other relaxes).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Muscles contract to pull bones; joints pivot; antagonistic pairs control direction.",
          },
        },
      ],
    },
    {
      id: "cils-u10-s7-mx",
      title: "Stage 7 mixed checkpoint",
      skill: "Apply biology and human body knowledge together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine cell biology, plant processes and human body systems. Link structure to function in your answers.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis",
            statement: "$6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$",
          },
          {
            name: "Gas exchange",
            statement:
              "Oxygen diffuses into blood; carbon dioxide diffuses out",
          },
        ],
        workedExample: {
          problem: "Name two adaptations of alveoli for gas exchange.",
          solution:
            "Thin walls (one cell thick) for short diffusion distance; large surface area from many alveoli.",
        },
      },
      questions: [
        {
          id: "cils-u10-s7-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle is the site of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Chloroplast" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chloroplast",
                statement:
                  "Organelle containing chlorophyll where photosynthesis occurs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chloroplasts contain chlorophyll and are the site of photosynthesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Chloroplast",
          },
        },
        {
          id: "cils-u10-s7-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between plant cells and animal cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell structures",
                statement:
                  "Plant cells have a cell wall and chloroplasts; animal cells do not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plant cells have a cellulose cell wall; animal cells do not.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Plant cells contain chloroplasts (and a large vacuole); animal cells do not.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cell wall and chloroplasts present in plant cells only",
          },
        },
        {
          id: "cils-u10-s7-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four chambers of the human heart and state the function of the valves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heart",
                statement: "Four chambers pump blood; valves prevent backflow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Right atrium and right ventricle; left atrium and left ventricle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valves open to let blood flow forward and close to prevent backflow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Function stated correctly with all four chambers named.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Right atrium, right ventricle, left atrium, left ventricle; valves prevent backflow",
          },
        },
        {
          id: "cils-u10-s7-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the alveoli are adapted for efficient gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Diffusion",
                statement:
                  "Rate of diffusion increases with surface area and decreases with diffusion distance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Large number of alveoli gives a huge surface area for gas exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alveolar walls are one cell thick, giving a short diffusion distance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dense capillary network surrounding alveoli maintains a steep concentration gradient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All adaptations together maximise the rate of oxygen uptake and carbon dioxide removal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Large surface area, thin walls and rich blood supply maximise diffusion",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u10-stage7-biology-notes",
      title: "Stage 7 biology — revision notes",
      summary: "Cells, photosynthesis, organ systems, body organisation.",
      sections: [
        {
          heading: "Key facts",
          body: "Cell = basic unit; photosynthesis makes glucose + O₂; levels: cell→tissue→organ→system→organism.",
        },
        {
          heading: "Systems",
          body: "Heart pumps blood; lungs exchange gases; digestive breaks down food; kidneys filter waste; muscles+ bones create movement.",
        },
      ],
    },
  ],
};
